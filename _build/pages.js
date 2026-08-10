/* 每页配置 —— 加一个专精就在 PAGES 里加一条 */
const TAL_TODO = {
  h: '完整天赋树还没整理',
  p: '上面这些是<b>已经实测到的定盘项</b>——英雄天赋和 PvP 天赋格，这两块是取舍最少、最值得先写的。剩下的职业树/专精树点法还没做。',
  plan: '<b>补法：</b>拉 Murlok.io 对应专精的 top50 实测配点（看实际分布，不是理论最优），出一份可导入的天赋串 + 三到五个关键分歧点的判断依据。<b>本站不打算做"抄一个串"——要写的是每个分歧点在什么局面下选哪边。</b>',
};

const PAGES = [
  {
    file: 'subtlety-rogue', kind: 'spec', cls: 'rogue', spec: 'subtlety',
    h1: '敏锐贼 PvP 判断训练器', short: '敏锐贼',
    icon: 'ability_stealth', tier: 'S', color: '#FFF468',
    crumb: ['潜行者', '敏锐'], store: 'banyeSubPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在看"条件"，不是在背技能。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把"该不该开"的四条件过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>诡术师 Trickster</b> —— top50 三对三里 50 人全用，死亡追猎者 <b>0 人</b>。这不是推荐，是唯一解。' },
        { lb: 'PvP 天赋 · 两个必带', vv: '<sk>烟雾弹</sk> + <b>先发制人</b>' },
        { lb: 'PvP 天赋 · 第三格看对面', vv: '对面伤害来自武器 → <sk>卸除武装</sk><br>对面有难杀的治疗 → <sk>偷天换日</sk>' },
        { lb: '职业树 / 专精树', todo: '完整配点还没整理' },
      ], todo: TAL_TODO,
    },
  },
  {
    file: 'outlaw-rogue', kind: 'spec', cls: 'rogue', spec: 'outlaw',
    h1: '狂徒贼 PvP 判断训练器', short: '狂徒贼',
    icon: 'ability_rogue_waylay', tier: 'A', color: '#FFF468',
    crumb: ['潜行者', '狂徒'], store: 'banyeOutlawPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在读"我现在有多强"，不是在背循环。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把骰面和爆发窗口的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>命运之缚 Fatebound</b> —— 8/8 全用，全自动不用管。' },
        { lb: 'PvP 天赋 · 两个必带', vv: '<sk>卸除武装</sk>（8/8） + <sk>烟雾弹</sk>（8/8）' },
        { lb: 'PvP 天赋 · 第三格', vv: '<b>先发制人</b>（5/8 主流）' },
        { lb: '职业树 / 专精树', todo: '完整配点还没整理' },
      ], todo: TAL_TODO,
    },
  },
  {
    file: 'frost-mage', kind: 'spec', cls: 'mage', spec: 'frost',
    h1: '冰法 PvP 判断训练器', short: '冰法',
    icon: 'spell_frost_frostbolt02', tier: 'A+', color: '#3FC7EB',
    crumb: ['法师', '冰霜'], store: 'banyeFrostMagePvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在算"他还能不能动"，不是在背连招。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把控制链和杀窗的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>法术之刃 Spellslinger</b> —— 50/50 全用。' },
        { lb: 'PvP 天赋 · 两个必带', vv: '<b>Overpowered Barrier</b>（50/50） + <b>Improved Mass Invisibility</b>（50/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Master Shepherd</b>（36/50） · <sk>冰墙</sk>（9/50）' },
        { lb: '职业树 / 专精树', todo: '完整配点还没整理' },
      ],
      note: '这几个新 PvP 天赋的官方简体中文名没核到，按本站规矩<b>用英文原名，不自己编译名</b>。',
      todo: TAL_TODO,
    },
  },
  {
    file: 'discipline-priest', kind: 'spec', cls: 'priest', spec: 'discipline',
    h1: '戒律牧 PvP 判断训练器', short: '戒律牧',
    icon: 'spell_holy_powerwordshield', tier: null, color: '#FFFFFF',
    crumb: ['牧师', '戒律'], store: 'banyeDiscPriestPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在铺"血掉之前"，不是在追血条。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把救赎的预铺逻辑过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>Oracle 先知</b> —— 45/50（90%）。' },
        { lb: 'PvP 天赋 · 近乎必带', vv: '<b>Ultimate Radiance</b>（49/50） + <b>Phase Shift</b>（48/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Inner Light</b>（33/50）' },
        { lb: '职业树 / 专精树', todo: '完整配点还没整理' },
      ],
      note: '这几个 PvP 天赋的官方简体中文名没核到，按本站规矩<b>用英文原名，不自己编译名</b>。',
      todo: TAL_TODO,
    },
  },
  {
    file: 'rogue-priest-2v2', kind: 'comp', h1: '贼 + 戒律牧 · 2v2 组合训练器', short: '贼牧 2v2',
    icon: 'classicon_rogue', icon2: 'classicon_priest', tier: null, color: '#8b6fd4',
    crumb: ['组合', '2v2 贼牧'], store: 'banyeRoguePriest2v2_1207', quizSec: 's5',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }],
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
    ],
    ownKeys: { r: 'ROGUE_SK', p: 'PRIEST_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', b: '⚔ 双方' },
    tagCls: { r: 'r', p: 'p', b: '' },
    done: { hi: '你们已经在轮流当主角，不是各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把"谁是这一轮的主角"过一遍。' },
    talent: { rows: [{ lb: '两人的天赋定盘', todo: '组合层的天赋取舍还没整理' }], todo: TAL_TODO },
  },
  {
    file: 'thug-cleave-3v3', kind: 'comp', h1: 'Thug Cleave · 贼 + 牧 + 猎 3v3', short: 'Thug Cleave',
    icon: 'classicon_rogue', icon2: 'classicon_priest', icon3: 'classicon_hunter', tier: null, color: '#8b6fd4',
    crumb: ['组合', '3v3 Thug Cleave'], store: 'banyeThugCleave3v3_1207', quizSec: 's6',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }, { k: 'hunter', label: '🏹 猎' }],
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
      { k: 'h', cls: 'H', label: '猎人', icon: 'classicon_hunter' },
    ],
    ownKeys: { r: 'R_SK', p: 'P_SK', h: 'H_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', h: '🏹 猎人', b: '⚔ 全队' },
    tagCls: { r: 'r', p: 'p', h: 'h', b: '' },
    done: { hi: '你们已经在接控制链，不是三个人各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把三个角色的分配过一遍。' },
    assign: {
      defaults: { lock: 'r', kill: 'h', relay: 'p' },   // 贼锁 / 猎杀 / 牧接 —— 成立的那个分法
      icons: { r: { cls: 'R', icon: 'classicon_rogue' }, p: { cls: 'P', icon: 'classicon_priest' }, h: { cls: 'H', icon: 'classicon_hunter' } },
      rules: {
        ok: { cls: 'good', ico: '◆', title: '这个分配成立', desc: '三个角色各有其人，控制链有两个来源，杀手能专心输出。' },
        dupDesc: '<b>一个人不能同时当两个角色。</b>3v3 的全部优势就在于三个人可以同时做三件不同的事——<b>重复分配等于自愿退回 2v2</b>。重新分一次。',
        warn: [
          { role: 'lock', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当锁匠：能打，但很勉强', desc: '牧师只有 <sk>心灵尖啸</sk> 一个控制，<b>用它去锁治疗，应急时你就没牌了</b>。而且它是恐惧类，对面解控/免疫恐惧的手段通常比解眩晕多。<b>只在贼和猎人确实都腾不出手时才这么分。</b>' },
          { role: 'kill', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当杀手：应急方案', desc: '戒律牧的输出没有取舍成本（<sk>救赎</sk> 让输出＝治疗），<b>但爆发上限不如贼和猎人</b>。这个分配只在另外两个都被压住时成立——<b>而那种局面下你更该先解决"为什么他们被压住"</b>。' },
          { role: 'relay', memb: 'r', cls: 'warn', ico: '◐', title: '贼当接手：浪费了最强的爆发', desc: '贼的爆发窗口是这个组合最高的伤害峰值，<b>让他当接手等于把它闲置</b>。除非对面控制极多、需要一个随时能 <sk>消失</sk> 脱身的人来兜底，否则换个分法。' },
        ],
      },
    },
    talent: { rows: [{ lb: '三人的天赋定盘', todo: '组合层的天赋取舍还没整理' }], todo: TAL_TODO },
  },
];

module.exports = { PAGES, TAL_TODO };
