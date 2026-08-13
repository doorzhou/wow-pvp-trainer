/* ============================================================
   内容模块模板 —— 加一个新专精就从这份复制
   文件名 = 页面文件名，比如 fire-mage.js → fire-mage.html
   下划线开头的文件会被构建跳过，所以这份模板不会被误生成
   ------------------------------------------------------------
   这是【构建期】输入，不会发给浏览器。
   改完跑：node build.js
   ------------------------------------------------------------
   文案调性（全站统一，写之前先看这条）
     · 只写信息，不写编辑方针。没有的内容标「待补充」，不解释为什么没有。
     · 不写界面说明书（"点标题看细节""这页只放 30 秒能看完的"）——用户会自己点。
     · 引导语能删就删。一个版块的标题说清楚了，就不要再加一段铺垫。
     · 陈述句优先，不用第一人称表态（"我推的""我会立即移除"→"编者推导""将立即移除"）。
   ============================================================ */
const { PATCH, SEASON } = require('../config.js');

module.exports = {

  /* ---------- 页面 meta（直接进 <head>，SEO 看这里）---------- */
  meta: {
    title: '火法 PvP 判断训练器 · 魔兽世界 " + PATCH + " Midnight 赛季一',
    // description 决定搜索结果里那段摘要。写清楚「是什么 + 有多少 + 版本」
    desc: '魔兽世界正式服 ' + PATCH + ' 火法 PvP 竞技场判断训练。含 N 道情境判断题、13 职业对局四问、开场决策器与赛前速查。',
    keywords: '火法,法师,PVP,竞技场,魔兽世界,' + PATCH + ',Midnight,fire mage,arena',
    footer: 'Patch ' + PATCH + ' · Midnight 赛季一。图标与中文技能名来自 <a href="https://www.wowhead.com" target="_blank">Wowhead</a> 官方数据接口（逐个实测）。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',
    jsonld: null,
  },

  /* ---------- 分栏导航 ----------
     构建时会自动在「判断训练」前面插入「天赋」「装备与属性」两栏并重新编号，
     所以这里不用写那两栏，也不要写 ①②③ 圈号。 */
  nav: [
    { s: 's1', label: '骨架' },
    { s: 's2', label: '通用手法' },
    { s: 's3', label: '分职业' },
    { s: 's4', label: '判断训练' },
    { s: 's5', label: '赛前速查' },
  ],

  /* ---------- 各章节的静态骨架 ----------
     只写"壳"，动态部分留空容器让 JS 或构建期填：
       id="checks" / id="verdict"   → 开火决策器
       id="stepBody"                → 开场分步器（放在 general 片段里）
       id="clsGrid" / id="clsDetail"→ 分职业（构建期预渲染，爬虫可读）
       id="general" / "sheet" / "clocks" / "setup" → 由下面 fragments 填
       id="quizArea" 等             → 判断训练
     s1 最前面的专精页头（图标 + h1 + 梯队徽章）由构建期自动插入，这里别写。 */
  sections: {
    s1: `<div class="wrap">
<div class="thesis">
  <div class="lbl">这版本唯一要记住的一句</div>
  <div class="big">写一句话，说清这个专精这个版本靠什么赢。<br>这句话不成立，后面全是散点。</div>
</div>
<h2>该不该开？勾一下就知道</h2>
<p class="lead">这几条是你整局都在做的减法。</p>
<div class="gobox">
  <div class="gh">开场决策器</div>
  <div class="gt">现在的局面满足哪几条？</div>
  <div class="checks" id="checks"></div>
  <div class="verdict" id="verdict"></div>
</div>
<h2>三个时钟</h2>
<div class="rows" id="clocks"></div>
<h2>本版定盘</h2>
<div class="rows" id="setup"></div>
</div>`,
    s2: `<div class="wrap">
  <p class="lead">按一轮交战的时间顺序排。</p>
  <div class="rows" id="general"></div>
</div>`,
    s3: `<div class="wrap">
  <p class="lead">四问对所有敌人是同一套。</p>
  <div class="split">
    <div class="sidecol">
      <div class="cls-grid" id="clsGrid"></div>
      <div class="modebar" id="modebar">
        <button class="on" data-m="arena">竞技场</button>
        <button data-m="duel">单挑</button>
      </div>
    </div>
    <div id="clsDetail"></div>
  </div>
</div>`,
    s4: `<div class="wrap">
  <div class="statbar">
    <div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div>
    <div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div>
    <div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div>
    <div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div>
  </div>
  <div class="qtop">
    <select id="fCat"><option value="all">全部范围</option></select>
    <select id="fDiff">
      <option value="all">全部难度</option>
      <option value="1">基础 · 机制</option>
      <option value="2">进阶 · 时机</option>
      <option value="3">高阶 · 权衡</option>
    </select>
    <button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button>
    <button class="btn ghost" onclick="startQuiz(true)">只练错题</button>
    <button class="btn ghost" onclick="resetStats()">清空记录</button>
  </div>
  <div id="quizArea"></div>
</div>`,
    s5: `<div class="wrap">
  <div class="sheet" id="sheet"></div>
</div>`,
  },

  /* ---------- 静态片段：构建期直接内联进上面的容器 ----------
     写成成品 HTML。爬虫读的就是这些，所以正文都该在这里。
     可用的组件 class：.row/.mini/.sc/.big3/.b3/.imm/.immc/.line/.seq/.note/.wide */
  fragments: {
    clocks: '<div class="row"><div class="h" onclick="tg(this)"><span class="t">时钟一</span><span class="sub">一句话概括</span><span class="ar">▸</span></div><div class="b"><p>展开的内容。</p></div></div>',
    setup: '',
    general: '<div class="row"><div class="h" onclick="tg(this)"><span class="t">01 · 一轮交战的完整流程</span><span class="sub">点着走一遍</span><span class="ar">▸</span></div><div class="b"><div class="stepper" id="stepBody"></div></div></div>',
    sheet: '<div class="sc wide"><h4>三条铁律</h4><div class="line">…</div></div>',
  },

  /* ---------- 技能名 → 图标文件名 ----------
     图标放在 site/assets/icons/<名>.jpg
     **不要自己编中文技能名**：查 Wowhead 官方接口拿简体中文名，
     查不到就用英文原名并在文案里注明。这是本站的硬规矩。
     取图标：curl -o site/assets/icons/<名>.jpg \
       https://wow.zamimg.com/images/wow/icons/large/<名>.jpg  */
  sk: {
    // '炎爆术': 'spell_fire_fireball02',
  },

  /* 敌方技能：渲染成红框徽章 */
  enemy: [],

  /* 组合页才用：技能归属着色。单专精页写 null */
  own: null,

  /* ---------- 开火决策器 ---------- */
  cond: [
    // { k: 'imm', t: '目标的免疫牌已经没了', d: '解释这一条为什么重要' },
  ],
  /* 判词按「勾中几条」索引：verdicts[0] = 一条没勾，verdicts[n] = 全勾中。
     <!--MISSING--> 是占位符，运行时会替换成「缺：xxx」标签，别删。 */
  verdicts: [
    // { cls: 'bad', html: '<div class="vi">◇</div><div><h3>标题</h3><p>说明</p><!--MISSING--></div>' },
  ],

  /* ---------- 开场分步器：[标题, 说明HTML, 图标对应的技能名] ---------- */
  steps: [
    // ['潜行，先确认目标的牌', '<sk>圣盾术</sk> 还在就改成消耗开。', '潜行'],
  ],

  /* ---------- 分职业对阵 ----------
     qlbl 是四问的标题；list 每条一个职业。
     q 的每一项是 [折叠时显示的摘要, 展开后的正文HTML] */
  match: {
    qlbl: ['1 · 他什么时候能杀人', '2 · 他那张"你杀不死我"的牌', '3 · 你必须处理的那一个', '4 · 你的开场怎么打'],
    list: [
      // { id:'warrior', n:'战士', ic:'classicon_warrior', c:'#C69B6D', diff:'中等',
      //   cards:['剑在人在','破胆怒吼'], one:'一句话定性。',
      //   q:[['摘要','正文'],['摘要','正文'],['摘要','正文'],['摘要','正文']],
      //   arena:'竞技场判断…', duel:'单挑补充…' },
    ],
  },

  /* 组合页才用的三个字段，单专精写 null */
  roles: null, memb: null, play: null,

  /* ---------- 题库 ----------
     id 唯一（错题本按它记）· t 分类（general 或某个职业 id）· d 难度 1/2/3
     s 情境（要具体：血量、什么牌还在、你的冷却状态）
     a 提问 · o 四个选项 · r 正解下标 · e 四条解释（每个选项都要有）
     k 可迁移的那一条规律
     选项顺序在运行时随机打乱，所以 r 写真实下标即可，不用刻意分散。 */
  quiz: [
    // { id:'g1', t:'general', d:2,
    //   s:'你的爆发刚好，目标是满状态的惩戒骑，<sk>圣盾术</sk> 还在。',
    //   a:'现在做什么？',
    //   o:['全交压死他','先逼他交圣盾术再撤','原地等队友','去打治疗'],
    //   r:1,
    //   e:['会撞在免疫上，整套冷却打空。','正解。目标有牌就走消耗开。','干等不叫准备。','控住了但你没有可用窗口。'],
    //   k:'开场之前先问：如果我现在全交，他还有几张牌能救自己？' },
  ],
};
