#!/usr/bin/env python3
"""
补丁更新流水线：抓 → 解析 → 下图标 → 与上一版比对 → 报告要人改哪几处。

设计前提：补丁后大部分内容不变。所以这个脚本的产出不是「重新生成一切」，
而是「精确告诉你哪几处需要人介入」—— 译文重译哪几条、判断文案哪几段
的依据变了、属性档位要不要调。

  python3 _build/tools/refresh.py              # 全部专精
  python3 _build/tools/refresh.py arms-warrior # 指定一个
  python3 _build/tools/refresh.py --no-fetch   # 用已下载的 HTML，不重新抓

流程里唯一不能自动的是翻译和判断文案，报告会把待办列出来。
"""
import json, os, re, subprocess, sys, urllib.request, shutil
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.dirname(HERE)
SITE = os.path.dirname(BUILD)
TREE = os.path.join(BUILD, 'tree')
ICONS = os.path.join(SITE, 'assets', 'icons')
CACHE = '/tmp/wowcamp_refresh'
UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/122.0 Safari/537.36')
ICON_SRC = ['https://wow.zamimg.com/images/wow/icons/large/{}.jpg',
            'https://render.worldofwarcraft.com/us/icons/56/{}.jpg']

# 使用率变化超过这个百分点才值得看
DELTA = 10
# 判定「需要判断」的区间（与站上口径一致）
LO, HI = 20, 85


def get(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        data = r.read()
    open(path, 'wb').write(data)
    return len(data)


def fetch_icon(name):
    dest = os.path.join(ICONS, name + '.jpg')
    if os.path.exists(dest):
        return None
    for tpl in ICON_SRC:
        try:
            if get(tpl.format(name), dest + '.tmp') > 0:
                os.replace(dest + '.tmp', dest)
                return name
        except Exception:
            pass
    if os.path.exists(dest + '.tmp'):
        os.remove(dest + '.tmp')
    return '!' + name          # 感叹号前缀 = 下载失败


def cells_of(tree):
    return {c['n']: c for b in tree for g in b['groups'] for c in g['cells']}


def picks_of(tree):
    """
    处于「需要判断」区间的格子。英雄天赋按两条线的差距分两种处理 ——
    这套口径必须和站上写的一致，否则报告出的格数没法直接对着改页面。

      一边倒（峰值差 > 15，如冰法 50/0）：未选中的线整条排除，
        选中的线内部仍可能有真分歧（戒律牧 Oracle 线里的 Desperate Measures 28/50）。
      真二选一（峰值差 ≤ 15，如武器战士 29/21）：整棵英雄树排除 ——
        两条线的格子都只是「选了哪条线」的产物，分不出线内取舍。

    另外，不管走哪个分支：线内使用率**等于该线峰值**的格子一律不算逐格分歧。
    它们是「走了这条线」这一个决策的产物，不是各自独立的判断。
    不加这条的话，整条线会随峰值跨越 85% 线一起进出分歧区 ——
    戒律牧 12.0.7 的 Oracle 线 45/50（90%，在区间外），12.1 掉到 42/50（84%），
    15 格凭空冒出来，其实一个新判断都没产生。

    返回 (格子字典, 用了哪条规则的说明)
    """
    hero = [b for b in tree if b['k'] == 'hero']
    dead, rule = set(), '无英雄天赋树'
    if hero:
        peaks = [(g['label'], max([c['u'] for c in g['cells']] or [0])) for g in hero[0]['groups']]
        if len(peaks) > 1:
            lo, hi = min(peaks, key=lambda x: x[1]), max(peaks, key=lambda x: x[1])
            if hi[1] - lo[1] > 15:
                for g in hero[0]['groups']:
                    if g['label'] == lo[0]:
                        dead |= {c['n'] for c in g['cells']}
                rule = f"一边倒（{hi[1]}/{lo[1]}），排除「{lo[0].replace(' Hero Talents','')}」整条线"
            else:
                dead |= {c['n'] for g in hero[0]['groups'] for c in g['cells']}
                rule = f"真二选一（{hi[1]}/{lo[1]}），整棵英雄树不计逐格分歧"
            # 线内齐平的格子 = 选线那一个决策，不是逐格分歧
            for g in hero[0]['groups']:
                us = [c['u'] for c in g['cells']]
                if not us: continue
                pk = max(us)
                flat = {c['n'] for c in g['cells'] if c['u'] == pk}
                if len(flat) > 1:
                    dead |= flat
                    rule += f"；「{g['label'].replace(' Hero Talents','')}」线内 {len(flat)} 格齐平于 {pk}，归为选线决策"
    out = {}
    for b in tree:
        if b['k'] == 'pvp':
            continue
        for g in b['groups']:
            for c in g['cells']:
                if c['n'] in dead:
                    continue
                if LO <= c['u'] * 2 <= HI:
                    out[c['n']] = c['u']
    return out, rule


def stats_of(html):
    """Optimal Secondary Stats：只采平均评级值那一组 —— 百分比那组对不上官方排序"""
    i = html.find('Optimal Secondary Stats')
    if i < 0:
        return None
    seg = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '\n', html[i:i + 1400]))
    lines = [x.strip() for x in seg.split('\n') if x.strip()]
    txt = ' '.join(lines[:12])
    got = re.findall(r'(\d+)%\s*(Critical Strike|Haste|Mastery|Versatility)\s*\+([\d,]+)', txt)
    if not got:
        return None
    return {name: int(val.replace(',', '')) for _pct, name, val in got}


def pvp_of(tree):
    b = [x for x in tree if x['k'] == 'pvp']
    if not b:
        return {}
    return {c['n']: c['u'] for g in b[0]['groups'] for c in g['cells'] if c['u']}


def hero_of(tree):
    b = [x for x in tree if x['k'] == 'hero']
    if not b:
        return {}
    return {g['label'].replace(' Hero Talents', ''): max([c['u'] for c in g['cells']] or [0])
            for g in b[0]['groups']}


def run(slug, path, no_fetch):
    os.makedirs(CACHE, exist_ok=True)
    guide = os.path.join(CACHE, slug + '.guide.html')
    tal = os.path.join(CACHE, slug + '.talents.html')
    if not no_fetch:
        get(f'https://murlok.io/{path}/3v3', guide)
        get(f'https://murlok.io/{path}/talents', tal)
    elif not (os.path.exists(guide) and os.path.exists(tal)):
        return {'slug': slug, 'error': '没有缓存的 HTML，去掉 --no-fetch'}

    old_tree_p = os.path.join(TREE, slug + '.json')
    old_desc_p = os.path.join(TREE, slug + '.desc.json')
    old_tree = json.load(open(old_tree_p)) if os.path.exists(old_tree_p) else []
    old_desc = json.load(open(old_desc_p)) if os.path.exists(old_desc_p) else {}

    new_tree_p = os.path.join(CACHE, slug + '.tree.new.json')
    new_desc_p = os.path.join(CACHE, slug + '.desc.new.json')
    r1 = subprocess.run([sys.executable, os.path.join(TREE, '_parse.py'), guide, new_tree_p],
                        capture_output=True, text=True)
    if r1.returncode != 0:
        return {'slug': slug, 'error': '解析失败：' + (r1.stdout + r1.stderr).strip()[:200]}
    r2 = subprocess.run([sys.executable, os.path.join(TREE, '_desc.py'), tal, new_tree_p, new_desc_p],
                        capture_output=True, text=True)
    new_tree = json.load(open(new_tree_p))
    new_desc = json.load(open(new_desc_p))

    oc, nc = cells_of(old_tree), cells_of(new_tree)
    op, _ = picks_of(old_tree)
    np_, rule = picks_of(new_tree)

    # 图标：新出现的一并下载
    want = {c['ic'] for c in nc.values() if c.get('ic')}
    got = list(filter(None, ThreadPoolExecutor(8).map(fetch_icon, sorted(want))))

    # 描述文本变了的条目 —— 这些要重译
    retrans = []
    for k, v in new_desc.items():
        o = old_desc.get(k)
        if not o:
            retrans.append((k, '新增'))
        elif o.get('en', o.get('desc', '')) != v['desc']:
            retrans.append((k, '原文变了' + ('，且这条带人工修正（fix），修正理由可能已失效' if o.get('fix') else '')))

    # 带人工修正的条目：Murlok 某个专精页数据滞后时，译文会被手工改成正确值，
    # 理由记在 fix 字段里。上游一旦补上，这些修正就该撤掉 —— 不提醒就会一直留着。
    fixed = [(k, v.get('fix', '')) for k, v in new_desc.items()
             if old_desc.get(k, {}).get('fix')]

    return {
        'slug': slug,
        'cells': (len(oc), len(nc)),
        'added': sorted(set(nc) - set(oc)),
        'removed': sorted(set(oc) - set(nc)),
        'moved': sorted([(n, oc[n]['u'], nc[n]['u']) for n in set(oc) & set(nc)
                         if abs(oc[n]['u'] - nc[n]['u']) * 2 >= DELTA],
                        key=lambda x: -abs(x[1] - x[2])),
        'picks': (op, np_),
        'ucur': {n: c['u'] for n, c in nc.items()},
        'rule': rule,
        'stats': (stats_of(open(guide, encoding='utf-8', errors='replace').read())),
        'pvp': (pvp_of(old_tree), pvp_of(new_tree)),
        'hero': (hero_of(old_tree), hero_of(new_tree)),
        'icons': got,
        'retrans': retrans,
        'fixed': fixed,
        'desc_n': (len(old_desc), len(new_desc)),
        'newfiles': (new_tree_p, new_desc_p),
        'parse': r1.stdout.strip().split('\n')[0],
        'descline': r2.stdout.strip().split('\n')[0],
    }


def report(r):
    s = r['slug']
    print(f"\n══════ {s} ══════")
    if 'error' in r:
        print('  ✗', r['error'])
        return
    print(f"  {r['parse']}   {r['descline']}")
    a, b = r['cells']
    print(f"  天赋节点 {a} → {b}" + ('' if a == b else '   ⚠ 数量变了'))
    if r['added']:
        print(f"  新增 {len(r['added'])}：{', '.join(r['added'][:8])}")
    if r['removed']:
        print(f"  移除 {len(r['removed'])}：{', '.join(r['removed'][:8])}")
    if r['moved']:
        print(f"  使用率变化 ≥{DELTA} 个百分点（{len(r['moved'])} 格）：")
        for n, o, x in r['moved'][:12]:
            print(f"     {n:<26} {o:2d}/50 → {x:2d}/50")
    op, np_ = r['picks']
    nc_all = r['ucur']

    def edge(u):
        """离区间边界几个百分点 —— 用来分辨真变化和边界抖动"""
        p = u * 2
        return min(abs(p - LO), abs(p - HI))

    gone = sorted(set(op) - set(np_))
    come = sorted(set(np_) - set(op))
    # 进出区间但离边界不到 5 个百分点的，是数据抖动，不是真的变了
    gone_real = [n for n in gone if edge(nc_all.get(n, 0)) > 5]
    come_real = [n for n in come if edge(np_[n]) > 5]
    noise = len(gone) + len(come) - len(gone_real) - len(come_real)

    print(f"  需要判断的格子 {len(op)} → {len(np_)}", end='')
    print('   ⚠ picks 要改' if (gone_real or come_real) else '   （实质不变）')
    print(f"     口径：{r['rule']}")
    if gone_real:
        print(f"     真跌出：{', '.join(f'{n} {nc_all.get(n,0)}/50' for n in gone_real)}")
    if come_real:
        print(f"     真新进：{', '.join(f'{n} {np_[n]}/50' for n in come_real)}")
    if noise:
        print(f"     另有 {noise} 格在 {LO}%/{HI}% 边界上抖动（幅度 <5 个百分点），忽略")
    oh, nh = r['hero']
    if oh != nh:
        print(f"  英雄天赋两条线：{oh} → {nh}   ⚠")
    opv, npv = r['pvp']
    pvdiff = [(k, opv.get(k, 0), npv.get(k, 0)) for k in set(opv) | set(npv)
              if abs(opv.get(k, 0) - npv.get(k, 0)) * 2 >= DELTA]
    if pvdiff:
        print("  PvP 天赋变化：" + ', '.join(f'{k} {o}→{n}' for k, o, n in sorted(pvdiff, key=lambda x: -abs(x[1] - x[2]))[:6]))
    if r['stats']:
        order = sorted(r['stats'].items(), key=lambda kv: -kv[1])
        cn = {'Versatility': '全能', 'Haste': '急速', 'Mastery': '精通', 'Critical Strike': '爆击'}
        top = order[0][1] or 1
        print("  属性：" + ' > '.join(f"{cn[k]} {round(v / top * 100)}" for k, v in order))
    bad = [x for x in r['icons'] if x.startswith('!')]
    ok = [x for x in r['icons'] if not x.startswith('!')]
    if ok:
        print(f"  图标已下载 {len(ok)} 张")
    if bad:
        print(f"  ⚠ 图标下载失败 {len(bad)}：{', '.join(x[1:] for x in bad)}")
    if r['retrans']:
        print(f"  ⚠ 需重译 {len(r['retrans'])} 条：{', '.join(k for k, _ in r['retrans'][:10])}")
    else:
        print("  译文：原文没变，不用重译")
    for k, why in r.get('fixed', []):
        print(f"  ⓘ 「{k}」带人工修正，复核上游是否已补上：{why}")
    print(f"  新数据在 {r['newfiles'][0]}")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('-')]
    no_fetch = '--no-fetch' in sys.argv
    cfg = json.load(open(os.path.join(HERE, 'specs.json')))['specs']
    todo = {k: v for k, v in cfg.items() if not args or k in args}
    if not todo:
        print('没有匹配的专精。可用：', ', '.join(cfg))
        return 1
    print(f"刷新 {len(todo)} 个专精" + ('（用缓存）' if no_fetch else '') + f"，阈值 {DELTA} 个百分点")
    results = [run(k, v, no_fetch) for k, v in todo.items()]
    for r in results:
        report(r)

    def real_pick_change(r):
        op, np_ = r['picks']; u = r['ucur']
        e = lambda x: min(abs(x * 2 - LO), abs(x * 2 - HI))
        return ([n for n in set(op) - set(np_) if e(u.get(n, 0)) > 5]
                or [n for n in set(np_) - set(op) if e(np_[n]) > 5])

    need = [r for r in results if 'error' not in r and (r['retrans'] or r['moved']
            or real_pick_change(r) or r['added'] or r['removed'])]
    print("\n" + "─" * 52)
    if not need:
        print("全部没变化 —— 这次补丁没动这几个专精的天赋数据。")
    else:
        print(f"{len(need)} 个专精需要人工介入：")
        for r in need:
            todos = []
            if r['retrans']:
                todos.append(f"重译 {len(r['retrans'])} 条")
            if real_pick_change(r):
                todos.append("改 pages.js 的 picks 判断")
            if r['moved']:
                todos.append("复核 survey 里的格数")
            print(f"  {r['slug']}: " + ' · '.join(todos))
        print("\n新数据没有直接覆盖旧文件。确认无误后：")
        print("  cp /tmp/wowcamp_refresh/<slug>.tree.new.json _build/tree/<slug>.json")
        print("  然后把译文合并回 .desc.json，再跑 node all.js")
    return 0


if __name__ == '__main__':
    sys.exit(main())
