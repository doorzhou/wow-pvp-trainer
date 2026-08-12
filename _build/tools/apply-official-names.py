#!/usr/bin/env python3
"""
把回验通过的官方译名替换进译文。

只替换 verified_names.json 里的条目 —— 那些都过了「英文名回验」。
没验过的一律留英文，不猜。
用法：apply_names.py <verified.json> <desc.json> [--write]
"""
import json, re, sys

ver = json.load(open(sys.argv[1]))
path = sys.argv[2]
desc = json.load(open(path))

# 长的先替换，否则 "Shadow Blades" 会被 "Shadow Dance" 里的片段干扰
terms = sorted(ver.items(), key=lambda kv: -len(kv[0]))

stat, changed = {}, 0
for k, v in desc.items():
    s0 = v['desc']
    s = s0
    for en, info in terms:
        # 复数形式一并处理（Shadow Clones）；词边界避免误伤
        for pat in (re.escape(en) + r's\b', re.escape(en) + r'\b'):
            new, n = re.subn(pat, info['zh'], s)
            if n:
                stat[en] = stat.get(en, 0) + n
                s = new
    if s != s0:
        v['desc'] = s
        changed += 1

print(f'改动条目 {changed}/{len(desc)}')
print(f'替换词次数合计 {sum(stat.values())}，涉及 {len(stat)} 个术语')
for en, n in sorted(stat.items(), key=lambda x: -x[1])[:16]:
    print(f'  {n:3d}  {en} → {ver[en]["zh"]}')

if '--write' in sys.argv:
    json.dump(desc, open(path, 'w'), ensure_ascii=False)
    print('\n已写回', path)
else:
    print('\n（试运行，未写回；加 --write 生效）')
