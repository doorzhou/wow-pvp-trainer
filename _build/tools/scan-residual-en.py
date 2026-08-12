#!/usr/bin/env python3
"""统计译文里残留的英文词组，并对上 Murlok 的图标名（图标名用于验证 spell id）"""
import json, re, sys
from collections import Counter

SITE = '/Users/dorr/.craft-agent-dev/workspaces/my-workspace/sessions/260804-airy-chrome/data/site'
tree = json.load(open(SITE + '/_build/tree/subtlety-rogue.json'))
cells = {c['n']: c['ic'] for b in tree for g in b['groups'] for c in g['cells']}
desc = json.load(open(SITE + '/_build/tree/subtlety-rogue.desc.json'))

# 连续的「大写开头单词」，允许中间有空格、连字符、撇号
PAT = re.compile(r"[A-Z][a-zA-Z]+(?:[ \-'][A-Za-z][a-zA-Z]*)*")

c = Counter()
for v in desc.values():
    for m in PAT.findall(v['desc']):
        c[m.strip()] += 1

print(f'译文里残留的英文词组：{len(c)} 种\n')
have_icon, no_icon = [], []
for w, n in c.most_common():
    ic = cells.get(w)
    (have_icon if ic else no_icon).append((w, n, ic))

print(f'--- 能对上 Murlok 图标名的（{len(have_icon)}）——可用图标验证 spell id ---')
for w, n, ic in have_icon:
    print(f'  {n:2d}  {w:<30} {ic}')
print(f'\n--- 对不上图标名的（{len(no_icon)}）——多为句中短语或非天赋 ---')
for w, n, ic in no_icon[:40]:
    print(f'  {n:2d}  {w}')
json.dump({'withIcon': [[w, ic] for w, n, ic in have_icon]},
          open('/Users/dorr/.craft-agent-dev/workspaces/my-workspace/sessions/260804-airy-chrome/data/tal_i18n/en_terms.json', 'w'),
          ensure_ascii=False, indent=1)
