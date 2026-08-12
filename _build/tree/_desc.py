#!/usr/bin/env python3
"""
从 Murlok talents 页抓每个天赋的效果描述，按 slug 对齐树数据。

边界按 <tr> 切 —— 每个天赋正好是一行三格：名字 / 施法信息 / 效果。
早先按「id 到下一个 id」截，会把下一个天赋的正文和页脚一起吃进来。

用法：python3 _desc.py <talents页.html> <树数据.json> <输出.json>
"""
import re, sys, json, html as _html

TR = re.compile(r'<tr\b', re.I)


def cell_lines(td):
    # 先把标签换成换行，再只压缩「换行以外」的空白 —— 用 \s+ 会把刚插入的换行吃掉
    t = re.sub(r'[^\S\n]+', ' ', re.sub(r'<[^>]+>', '\n', td))
    return [x.strip() for x in t.split('\n') if x.strip()]


def grab(html, slug):
    m = re.search(r'id="' + re.escape(slug) + r'"', html)
    if not m:
        return None
    s = html.rfind('<tr', 0, m.start())
    e = html.find('</tr>', m.start())
    if s < 0 or e < 0:
        return None
    tds = re.findall(r'<td\b[^>]*>(.*?)</td>', html[s:e], re.S)
    if len(tds) < 3:
        return None
    name = ' '.join(cell_lines(tds[0]))
    meta = ' · '.join(x.lstrip('- ').strip() for x in cell_lines(tds[1]))
    desc = ' '.join(cell_lines(tds[2]))
    if not desc:
        return None
    u = _html.unescape
    return {'name': u(name), 'meta': u(meta), 'desc': u(desc)}


html = open(sys.argv[1], encoding='utf-8', errors='replace').read()
tree = json.load(open(sys.argv[2]))
out, hit, miss = {}, 0, []
for b in tree:
    for g in b['groups']:
        for c in g['cells']:
            if not c['s']:
                miss.append(c['n'] + '（无 slug）')
                continue
            d = grab(html, c['s'])
            if d:
                out[c['s']] = d
                hit += 1
            else:
                miss.append(c['n'] + '（' + c['s'] + '）')
total = sum(len(g['cells']) for b in tree for g in b['groups'])
print(f'描述覆盖 {hit}/{total}')
if miss:
    print('缺:', miss[:14])
json.dump(out, open(sys.argv[3], 'w'), ensure_ascii=False)
