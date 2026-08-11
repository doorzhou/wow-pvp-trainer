/* 每页配置 —— 加一个专精就在 PAGES 里加一条 */
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
        { lb: 'PvP 天赋 · 唯一必带', vv: '<sk>烟雾弹</sk> —— <b>50/50</b>，没有例外' },
        {
          lb: 'PvP 天赋 · 另两格三选二',
          vv: '<b>Preemptive Maneuver</b>（45/50）—— 近乎必带<br>' +
            '<sk>卸除武装</sk>（29/50）—— 对面伤害来自武器<br>' +
            '<b>Thick as Thieves</b>（23/50）—— 强化<sk>偷天换日</sk>，队友能跟你对齐爆发时<br>' +
            '<span class="dimtx">三者占了这两格全部选择的 97%，剩下的 3% 是零星试验。</span>'
        },
      ],
      note: '「Preemptive Maneuver」「Thick as Thieves」暂无官方简体中文名。' +
        '后者是 PvP 天赋，强化职业树的<sk>偷天换日</sk>，<b>两者不是同一格</b>。',
      imp: {
        str: 'CUQAphyM11FofNMFa1K3vFEDUCgZ2mBAAAAAmlZmZZiZZbmxMjZgZmZmlxsNmZmllhBzMGwMGAAAAzwMsY2mxsMDDMsNz20CtMbMzwMzMDmxA',
        who: 'Whââzz', where: 'EU · Tarren Mill', rating: '3v3 3254',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '它在下面 7 个分歧格里<b>有 3 格跟多数派不一样</b>' +
          '（点了<b>偷天换日</b>与 <b>Nimble Fingers</b>、没点<b>毒刃</b>）。' +
          '<b>粘进游戏当起点，那 7 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 41 格 + 英雄天赋 28 格，共 <b>113 格</b>。' +
          'top50 的实测分布里，<b>106 格是定死的</b>——要么人人都点，要么没人点。' +
          '真正需要你判断的只有下面 <b>7 格</b>。',
        picks: [
          {
            n: 'Weaponmaster', tree: '专精', u: 38,
            b: '暗影打击与暗殁之刺有 <b>20% 几率</b>产生影分身，复制一次攻击造成 50% 伤害。' +
              '<br>纯伤害，不看对面。<b>但它是随机的</b>——敏锐是攒一个窗口一次结账的打法，' +
              '20% 的触发在单个窗口里可能一次都不来。不点的那 12 人是把这一点换成了稳定的东西。'
          },
          {
            n: '毒刃', en: 'Shiv', tree: '职业', u: 34,
            b: '副手攻击，<b>驱散目标身上所有激怒效果</b>，并施加浓缩的非致命药膏。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面带激怒类增益 —— 驱掉就是白赚一整个窗口；' +
              '对面没有激怒，这一点是空的。开局看到对面阵容就能定。'
          },
          {
            n: 'Unbreakable Stride', tree: '职业', u: 32,
            b: '减速效果的持续时间缩短 30%。' +
              '<br>敏锐要靠反复进出打窗口，<b>被黏住就等于开不了</b>。' +
              '对面减速手段密集时点它；对面靠硬控而不是减速的，这一点收益小。'
          },
          {
            n: '偷天换日', en: 'Tricks of the Trade', tree: '职业', u: 25,
            b: '使友方目标伤害提高 15%，30 秒冷却。' +
              '<br><b>全树最分裂的一格，正好对半分。</b>它把收益给队友——' +
              '队友有能跟你对齐的爆发窗口才值；否则这 15% 撒在平时的伤害上，不如自己留着这一点。'
          },
          {
            n: 'Nimble Fingers', tree: '职业', u: 23,
            b: '佯攻与猩红之瓶的能量消耗降低 10。' +
              '<br>省的是<b>防守动作</b>的能量。被压着打、需要反复佯攻和喝药的局才值；' +
              '你是压制方的那些局，这一点几乎不动。'
          },
          {
            n: 'Toxic Stiletto', tree: '职业', u: 18,
            b: '毒刃的能量消耗 −20、冷却 −15 秒、射程 +3 码。' +
              '<br><b>它只强化毒刃。</b>毒刃 34 人点，它 18 人点——' +
              '也就是说要毒刃的人里大约一半觉得不值第二点。' +
              '对面激怒刷得勤、需要毒刃转得更快时才追加。'
          },
          {
            n: 'Perforated Veins', tree: '专精', u: 13,
            b: '在「破绽」生效期间，背刺、影袭风暴、暗殁之刺伤害提高 10%。' +
              '<br>条件伤害，只在已经很强的窗口里再加一层。<b>26% 是这 7 格里最低的</b>——' +
              '敏锐的短板通常不是窗口内不够疼，是窗口外没威胁。'
          },
        ],
        src: '使用率：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 95 },
        { n: '急速', v: '次要', pct: 21, mid: 1 },
        { n: '爆击', v: '可弃', pct: 9, dim: 1 },
      ],
      statRead: '<b>精通和全能几乎并列，之后是断崖。</b>这两条一起堆，不用在它们之间做取舍；' +
        '<b>急速和爆击装备上带多少算多少</b>，不要为了它们放弃前两条。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
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
        { lb: '职业树 / 专精树', todo: 1 },
      ],
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 58, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
        { n: '精通', v: '可弃', pct: 5, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后是断崖。</b>' +
        '爆击和精通在 top50 的配装里几乎为零——<b>不用为这两条做任何取舍</b>。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
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
        { lb: '职业树 / 专精树', todo: 1 },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 77, mid: 1 },
        { n: '精通', v: '可弃', pct: 6, dim: 1 },
        { n: '爆击', v: '可弃', pct: 0, dim: 1 },
      ],
      statRead: '<b>全能和急速一起堆，之后直接归零。</b>' +
        'top50 的爆击是<b>零</b>——不是少，是没有。这一档没有取舍空间。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
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
        { lb: '职业树 / 专精树', todo: 1 },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 89 },
        { n: '急速', v: '兼顾', pct: 60, mid: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>三条都有分量，断层只在爆击之前。</b>' +
        '精通领先、全能紧跟、急速也不低——<b>前三条按拿到什么用什么</b>，不用为了排序去换件。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'rogue-priest-2v2', kind: 'comp', h1: '贼 + 戒律牧 · 2v2 组合训练器', short: '贼牧 2v2',
    icon: 'classicon_rogue', icon2: 'classicon_priest', tier: null, color: '#8b6fd4',
    crumb: ['组合', '2v2 贼牧'], store: 'banyeRoguePriest2v2_1207', quizSec: 's5',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }],
    v2c: { rogue: 'r', priest: 'p' },              // 视角名 → 题目 w 标记
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
    ],
    ownKeys: { r: 'ROGUE_SK', p: 'PRIEST_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', b: '⚔ 双方' },
    tagCls: { r: 'r', p: 'p', b: '' },
    done: { hi: '你们已经在轮流当主角，不是各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把"谁是这一轮的主角"过一遍。' },
    talent: { rows: [{ lb: '两人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，两个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
      ],
    },
  },
  {
    file: 'thug-cleave-3v3', kind: 'comp', h1: 'Thug Cleave · 贼 + 牧 + 猎 3v3', short: 'Thug Cleave',
    icon: 'classicon_rogue', icon2: 'classicon_priest', icon3: 'classicon_hunter', tier: null, color: '#8b6fd4',
    crumb: ['组合', '3v3 Thug Cleave'], store: 'banyeThugCleave3v3_1207', quizSec: 's6',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }, { k: 'hunter', label: '🏹 猎' }],
    v2c: { rogue: 'r', priest: 'p', hunter: 'h' },  // 视角名 → 题目 w 标记
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
    talent: { rows: [{ lb: '三人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，三个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
        { n: '猎人', ic: 'classicon_hunter' },
      ],
    },
  },
];

module.exports = { PAGES };
