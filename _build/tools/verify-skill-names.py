#!/usr/bin/env python3
"""
核 skdb 里的中文技能名是不是官方译名。

判定：查候选 spell id 的 locale=4，
  中文名一致 + 图标一致 → 确认
  中文名一致 + 图标不同 → 名字对，图标可疑
  中文名不同 + 图标一致 → 可疑编造（菊花茶就是这么查出来的）
  中文名不同 + 图标不同 → 候选 id 给错了，丢弃不作结论
候选 id 来自记忆，一律以接口返回为准。
"""
import json, re, sys, urllib.request, time
from concurrent.futures import ThreadPoolExecutor

CAND = {
    # 法师
    '寒冰箭': 116, '冰枪术': 30455, '冰锥术': 120, '暴风雪': 190356, '寒冰宝珠': 84714,
    '冰霜新星': 122, '寒冰新星': 157997, '法术反制': 2139, '变形术': 118, '隐形术': 66,
    '强化隐形术': 110959, '镜像': 55342, '时光护盾': 235450, '寒冰屏障': 45438,
    '冰墙': 352278, '寒冰指': 44544, '冰冷血脉': 108853, '冰川尖刺': 199786,
    '彗星风暴': 153595, '冰冻术': 33395, '冰霜之环': 113724, '操控时间': 80353,
    '闪现术': 1953, '棱彩屏障': 235450, '法术吸取': 232698, '冰冷智慧': 205035,
    '深冬之寒': 236662, '急速冷却': 11958, '冰霜射线': 84721, '棱光护体': 11426,
    '寒冰形态': 198144, '积雪': 190447, '渐隐术': 66,
    # 牧师
    '真言术：盾': 17, '痛苦压制': 33206, '心灵尖啸': 8122, '暗言术：痛': 589,
    '消散': 47585, '快速治疗': 2061, '愈合祷言': 596, '治疗祷言': 33076,
    '真言术：障': 33206, '纯净术': 527, '能量灌注': 10060, '苦修': 47540,
    '绝望祷言': 19236, '救赎': 47536, '真言术：耀': 373481, '天堂之羽': 121536,
    '终极苦修': 421453, '心灵震爆': 8092, '暗影愈合': 186263, '精神控制': 605,
    '群体驱散': 32375, '驱散魔法': 528, '解除诅咒': 475, '恐惧': 8122,
    # 盗贼
    '脚踢': 1766, '假死': 5384, '命运骨骰': 315508, '剑刃乱舞': 13877,
    '天降杀机': 343142, '可乘之机': 195627, '手枪射击': 185763, '抓钩': 195457,
    '斩击': 315496, '局势逆转': 381634, '时运继延': 381982, '逃脱': 781,
    '隐秘之刃': 121471, '正中眉心': 185763, '影舞步': 36554, '致命一击': 1943,
    # 猎人
    '误导': 34477, '灵龟守护': 186265, '猎豹守护': 186257, '主人的召唤': 53271,
    '伪装': 199483, '压制': 187707, '夺命射击': 53351, '奇美拉钉刺': 356719,
    '急速射击': 186257, '意气风发': 288613, '牺牲咆哮': 53480, '生存战术': 264735,
    '冰冻陷阱': 187650, '震荡射击': 5116, '束缚射击': 109248, '宁神射击': 147362,
    '反制射击': 147362, '奥术射击': 185358, '瞄准射击': 19434, '百发百中': 288613,
    '高爆陷阱': 236776, '焦油陷阱': 187698, '驱散射击': 213691, '胁迫': 19577,
    # 战士
    '盾墙': 871, '集结呐喊': 97462, '破胆怒吼': 5246, '剑在人在': 118038,
    # 圣骑士
    '保护祝福': 1022, '圣盾术': 642, '破咒祝福': 4987, '自由祝福': 1044,
    '全神贯注': 853, '惩击': 853, '净化邪恶': 4987,
    # 德鲁伊
    '树皮术': 22812, '旅行形态': 783, '气定神闲': 61336, '优胜劣汰': 288826,
    # 死骑 / 恶魔猎手 / 武僧 / 萨满 / 术士 / 唤魔师
    '反魔法护罩': 48707, '反魔法领域': 51052, '冰封之韧': 48792, '冰风暴': 47528,
    '业报之触': 122470, '玄牛下凡': 132578, '恶魔变形': 191427, '疾影': 195072,
    '星界转移': 108271, '虚空行走': 6789, '悬空': 358267, '新生光焰': 361469,
    '不灭决心': 48792, '冲动': 108843, '影袭': 589, '群体屏障': 235450,
    '寒冰护体': 45438, '黑曜鳞片': 363916, '刀锋冲刺': 195072, '变易幻能': 314791,
    '冰霜裂片': 30455, '命运硬币': 315508, '信仰飞跃': 121536, '闪光术': 1953,
}

API = 'https://nether.wowhead.com/tooltip/spell/{}?dataEnv=1&locale=4'


def fetch(item):
    zh, sid = item
    try:
        with urllib.request.urlopen(API.format(sid), timeout=15) as r:
            d = json.loads(r.read().decode())
        return zh, sid, d.get('name'), d.get('icon')
    except Exception as e:
        return zh, sid, None, None


db = json.load(open(sys.argv[1]))
res = []
with ThreadPoolExecutor(max_workers=6) as ex:
    for out in ex.map(fetch, CAND.items()):
        res.append(out)

ok, name_bad, icon_bad, nores = [], [], [], []
for zh, sid, oname, oicon in res:
    site = db.get(zh)
    if not site:
        continue
    if not oname:
        nores.append((zh, sid, 'API 无返回'))
        continue
    same_name = (oname == zh)
    same_icon = (oicon == site['icon'])
    if same_name and same_icon:
        ok.append(zh)
    elif same_name:
        icon_bad.append((zh, sid, site['icon'], oicon))
    elif same_icon:
        name_bad.append((zh, sid, oname, oicon))
    else:
        nores.append((zh, sid, f'候选 id 不对（返回 {oname}）'))

print(f'候选 {len(CAND)} · skdb 命中 {len(ok)+len(name_bad)+len(icon_bad)+len(nores)}')
print(f'  ✅ 名字与图标都对   {len(ok)}')
print(f'  ⚠️  名字不符但图标同 {len(name_bad)}  ← 可疑编造')
print(f'  ⚠️  名字对但图标不同 {len(icon_bad)}')
print(f'  —  无结论            {len(nores)}')
if name_bad:
    print('\n=== 可疑编造（图标一致、名字不同）===')
    for zh, sid, oname, oicon in name_bad:
        print(f'  站上「{zh}」  官方「{oname}」  spell {sid}  icon {oicon}')
if icon_bad:
    print('\n=== 名字对、图标不同（图标可能配错）===')
    for zh, sid, sic, oic in icon_bad:
        print(f'  {zh}  站上 {sic}  官方 {oic}  spell {sid}')
json.dump({'ok': ok, 'nameBad': name_bad, 'iconBad': icon_bad},
          open(sys.argv[2], 'w'), ensure_ascii=False, indent=1)
