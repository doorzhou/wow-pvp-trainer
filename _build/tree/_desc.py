#!/usr/bin/env python3
"""从 Murlok talents 页抓每个天赋的效果描述，按 slug 对齐树数据"""
import re, sys, json, html as _html

def txt(s):
    # 先把标签换成换行，再只压缩「换行以外」的空白 —— 用 \s+ 会把刚插入的换行吃掉
    return re.sub(r'[^\S\n]+', ' ', re.sub(r'<[^>]+>', '\n', s))

def grab(html, slug):
    m = re.search(r'id="' + re.escape(slug) + r'"', html)
    if not m: return None
    gt = html.find('>', m.end())          # 从该标签闭合处起截，别把 id="x"> 当正文
    if gt < 0: return None
    seg = html[gt + 1: gt + 2600]
    # 该块内容到下一个 id= 之前
    nxt = re.search(r'<div[^>]*\bid="[a-z0-9\-]+"', seg[10:])
    if nxt: seg = seg[:nxt.start() + 10]
    lines = [x.strip() for x in txt(seg).split('\n') if x.strip()]
    # 去掉块首的属性残留
    lines = [l for l in lines if not l.startswith('id=') and 'class=' not in l]
    if not lines: return None
    name = lines[0]
    rest = lines[1:]
    meta, body = '', rest
    if rest and re.match(r'^(Passive|Instant|Channeled|\d+|.{0,60}(cooldown|range|sec|Energy|Focus|Mana))', rest[0], re.I) and len(rest[0]) < 90:
        meta, body = rest[0], rest[1:]
    # td 里换行会把 "Instant / - 5 yd range / - 2 min cooldown" 拆成多行，续行并回 meta
    while body and body[0].startswith('-'):
        meta = (meta + ' ' + body[0]).strip()
        body = body[1:]
    desc = ' '.join(body).strip()
    if not desc: return None
    u = _html.unescape
    return {'name': u(name), 'meta': u(meta), 'desc': u(desc)[:420]}

html = open(sys.argv[1], encoding='utf-8', errors='replace').read()
tree = json.load(open(sys.argv[2]))
out, hit, miss = {}, 0, []
for b in tree:
    for g in b['groups']:
        for c in g['cells']:
            if not c['s']: miss.append(c['n'] + ' (无slug)'); continue
            d = grab(html, c['s'])
            if d: out[c['s']] = d; hit += 1
            else: miss.append(c['n'] + ' (' + c['s'] + ')')
total = sum(len(g['cells']) for b in tree for g in b['groups'])
print(f'描述覆盖 {hit}/{total}')
if miss: print('缺:', miss[:14])
json.dump(out, open(sys.argv[3], 'w'), ensure_ascii=False)
