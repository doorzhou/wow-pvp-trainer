#!/usr/bin/env python3
"""
候选 spell id → Wowhead tooltip 双语回验。

只有 locale=0 返回的英文名与目标名一致，才采信 locale=4 的中文名。
名字对不上就丢弃 —— 宁可留英文，也不编译名。
"""
import json, re, sys, urllib.request, time

API = 'https://nether.wowhead.com/tooltip/spell/{}?dataEnv=1&locale={}'

# 候选 id 来自记忆，全部要过回验；对不上的会被丢弃
CAND = {
    'Shadow Dance': 185313, 'Shuriken Storm': 197835, 'Shadowstrike': 185438,
    'Eviscerate': 196819, 'Backstab': 53, 'Black Powder': 319175,
    'Shadowstep': 36554, 'Slice and Dice': 315496, 'Secret Technique': 280719,
    'Crimson Vial': 185311, 'Shroud of Concealment': 114018, 'Gloomblade': 200758,
    'Find Weakness': 91023, 'Shadow Blades': 121471, 'Thistle Tea': 381623,
    'Pick Pocket': 921, 'Wound Poison': 8679, 'Crippling Poison': 3408,
    'Mark for Death': 137619, 'Symbols of Death': 212283, 'Rupture': 1943,
    'Garrote': 703, 'Ambush': 8676, 'Marked for Death': 137619,
    'Shuriken Toss': 114014, 'Cheap Shot': 1833, 'Kidney Shot': 408,
    'Sap': 6770, 'Distract': 1725, 'Sprint': 2983, 'Vanish': 1856,
    'Blind': 2094, 'Feint': 1966, 'Evasion': 5277, 'Stealth': 1784,
    'Cloak of Shadows': 31224, 'Shiv': 5938, 'Dismantle': 207777,
    'Tricks of the Trade': 57934, 'Smoke Bomb': 359053, 'Gouge': 1776,
}


def fetch(sid, loc):
    try:
        with urllib.request.urlopen(API.format(sid, loc), timeout=12) as r:
            return json.loads(r.read().decode())
    except Exception as e:
        return {'_err': str(e)}


def norm(s):
    return re.sub(r"[^a-z]", '', (s or '').lower())


ok, bad = {}, []
for name, sid in CAND.items():
    en = fetch(sid, 0)
    if '_err' in en or not en.get('name'):
        bad.append((name, sid, 'API 无返回'))
        continue
    if norm(en['name']) != norm(name):
        bad.append((name, sid, f"英文名不符：{en['name']}"))
        continue
    zh = fetch(sid, 4)
    if '_err' in zh or not zh.get('name'):
        bad.append((name, sid, '中文查不到'))
        continue
    if not re.search(r'[一-鿿]', zh['name']):
        bad.append((name, sid, f"中文名仍是英文：{zh['name']}"))
        continue
    ok[name] = {'id': sid, 'zh': zh['name'], 'icon': zh.get('icon', '')}
    time.sleep(0.12)

print(f'回验通过 {len(ok)} / {len(CAND)}\n')
for k, v in sorted(ok.items()):
    print(f"  {k:<24} → {v['zh']:<12} (spell {v['id']})")
print(f'\n未通过 {len(bad)}：')
for n, s, why in bad:
    print(f'  {n:<24} id={s:<8} {why}')
json.dump(ok, open(sys.argv[1], 'w'), ensure_ascii=False, indent=1)
