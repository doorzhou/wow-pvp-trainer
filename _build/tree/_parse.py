#!/usr/bin/env python3
"""从 Murlok guide 页提取完整天赋树结构（区块 → 分组 → 格子）"""
import re, sys, json

BLOCKS = [('class', '职业树', 'id="talents-class"'),
          ('spec', '专精树', 'id="talents-specialization"'),
          ('hero', '英雄天赋', 'id="talents-hero"'),
          ('pvp', 'PvP 天赋', 'id="talents-pvp"')]

LI = re.compile(r'<li\b((?=[^>]*guide-talent-tree-cell)[^>]*)>(.*?)</li>', re.S)
A  = re.compile(r'<a\b([^>]*)>(.*?)</a>', re.S)
UL = re.compile(r'<ul\b[^>]*>(.*?)</ul>', re.S)
H3 = re.compile(r'<h3[^>]*>(.*?)</h3>', re.S)

def txt(s): return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()

def parse(path):
    h = open(path, encoding='utf-8', errors='replace').read()
    pos = [(k, n, h.find(m)) for k, n, m in BLOCKS]
    pos = sorted([p for p in pos if p[2] >= 0], key=lambda x: x[2])
    out, total = [], 0
    for i, (key, name, a) in enumerate(pos):
        b = pos[i+1][2] if i+1 < len(pos) else len(h)
        seg = h[a:b]
        groups = []
        for ulm in UL.finditer(seg):
            # 该 ul 前最近的 h3 作为分组名（英雄天赋两条线靠它区分）
            before = seg[:ulm.start()]
            hs = H3.findall(before)
            label = txt(hs[-1]) if hs else ''
            cells = []
            for attrs, inner in LI.findall(ulm.group(1)):
                col = re.search(r'grid-column:\s*(\d+)', attrs)
                for aattr, ainner in A.findall(inner):
                    if 'guide-talent' not in aattr: continue
                    alt = re.search(r'alt="([^"]*)"', ainner)
                    cnt = re.search(r'guide-talent-count">(\d+)<', ainner)
                    ico = re.search(r'/icons/\d+/([a-z0-9_]+)\.jpg', ainner)
                    slug = re.search(r'href="[^"]*#([^"]+)"', aattr)   # slug 含撇号，别枚举字符
                    if not alt: continue
                    cells.append({'col': int(col.group(1)) if col else None,
                                  'n': alt.group(1),
                                  'u': int(cnt.group(1)) if cnt else 0,
                                  'ic': ico.group(1) if ico else None,
                                  's': slug.group(1) if slug else None})
                    total += 1
            if cells: groups.append({'label': label, 'cells': cells})
        if groups: out.append({'k': key, 'n': name, 'groups': groups})
    return out, total, h.count('guide-talent-count">')

data, total, expect = parse(sys.argv[1])
ok = total == expect
print(f'{sys.argv[1].split("/")[-1]}: 解析 {total} / 页面 {expect}  {"OK" if ok else "MISMATCH"}')
if not ok: sys.exit(1)
for b in data:
    n = sum(len(g['cells']) for g in b['groups'])
    cols = [c['col'] for g in b['groups'] for c in g['cells'] if c['col']]
    print(f"  {b['n']:<10} {n:3d} 格 · {len(b['groups'])} 组 · 列 {min(cols)}-{max(cols)} · 组名 {[g['label'][:18] for g in b['groups']]}")
json.dump(data, open(sys.argv[2], 'w'), ensure_ascii=False)
