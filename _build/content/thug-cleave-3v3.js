/* 内容模块 · thug-cleave-3v3
   由 freeze.js 从旧版单体页固化而来（2026-08-10）
   这是构建期输入，不会发给浏览器。改内容改这里，然后跑 node build.js
   题目 51 道 · 对阵 6 条 · 技能 85 个 */
module.exports = {
  "meta": {
    "title": "Thug Cleave 3v3 组合训练 · 12.0.7 Midnight",
    "desc": "魔兽世界 12.0.7 Thug Cleave（贼/猎/牧）3v3 三视角配合训练。3v3 赢在三个人的控制接成一条链——含控制链递减详解、角色分配器（锁匠/杀手/接手）与 51 道分视角判断题。",
    "keywords": "3v3,Thug Cleave,贼牧猎,组合,竞技场,魔兽世界,12.0.7,控制链,arena 3v3",
    "h1": "Thug Cleave · <span class=\"r\">贼</span>+<span class=\"p\">牧</span>+<span class=\"hn\">猎</span> 3v3",
    "footer": "Patch 12.0.7 · Midnight 赛季一。技能名与图标： <a href=\"https://www.wowhead.com\" target=\"_blank\">Wowhead</a> 官方数据接口。组合定位 <a href=\"https://www.icy-veins.com/wow/subtlety-rogue-pvp-best-arena-compositions\" target=\"_blank\">Icy Veins（Thug Cleave）</a> · 天赋数据 <a href=\"https://murlok.io/rogue/subtlety/3v3\" target=\"_blank\">Murlok.io</a>。<br><a href=\"index.html\">← 返回全部训练器</a> · <a href=\"index.html#legal\">数据来源与免责声明</a>",
    "jsonld": null
  },
  "nav": [
    {
      "s": "s1",
      "label": "骨架"
    },
    {
      "s": "s2",
      "label": "控制链"
    },
    {
      "s": "s3",
      "label": "击杀链"
    },
    {
      "s": "s4",
      "label": "防守链"
    },
    {
      "s": "s5",
      "label": "分对局"
    },
    {
      "s": "s6",
      "label": "判断训练"
    },
    {
      "s": "s7",
      "label": "赛前速查"
    }
  ],
  "sections": {
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">2v2 和 3v3 的分水岭</div>\n  <div class=\"big\">2v2 赢在<span style=\"color:var(--tx2)\">两个人的伤害叠在一起</span>。<br>3v3 赢在<span style=\"color:var(--ac2)\">三个人的控制接成一条链</span>。</div>\n  <div class=\"quote\">Icy Veins 对这个组合的原话：<b>\"每次想杀人，都要控住对面每一个人\"（crowd control every time you go for a kill）</b>，并且指出<b>敏锐贼只在围绕 setup 的组合里才被使用</b>。<br>这不是我的推论，是这个组合的官方定性。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\">\n    <span class=\"t\">为什么加一个人就换了个游戏</span>\n    <span class=\"sub\">伤害不再是瓶颈，控制才是</span><span class=\"ar\">▸</span></div>\n    <div class=\"b\">\n      <p><b>2v2</b>：一个 DPS 打不穿一个治疗，所以牧师必须补伤害，两个人的伤害必须叠在一起——<b>核心矛盾是\"够不够疼\"</b>。</p>\n      <p style=\"margin-top:8px\"><b>3v3</b>：两个 DPS + 一个会打伤害的治疗，<strong>伤害绝对够了</strong>。目标只要没有治疗，几秒就能倒。<b>核心矛盾变成\"对面治疗有没有被锁住足够久\"</b>。</p>\n      <p style=\"margin-top:8px\">而锁住一个治疗需要<strong>至少两个人的控制接力</strong>——一个人的控制时长永远不够。这就是为什么 3v3 是控制链游戏。</p>\n      <div class=\"note\"><b>还有一个成本变化：</b>2v2 只有一对关系（贼↔牧）。3v3 有三对关系加一个整体。<strong>沟通复杂度是平方级涨的</strong>——所以 3v3 更依赖固定的套路和明确的角色，而不是临场反应。</div>\n    </div></div>\n\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\">\n    <span class=\"t\">每一轮，三个人分三个角色 —— 而且会轮换</span>\n    <span class=\"sub\">锁匠 / 杀手 / 接手</span><span class=\"ar\">▸</span></div>\n    <div class=\"b\">\n      <p>这个组合最实用的框架不是\"贼杀人、牧师奶、猎人输出\"，而是<strong>每一轮给三个人分配三个角色</strong>：</p>\n      <div class=\"g3\" style=\"margin-top:11px\">\n        <div class=\"mini-card\"><h4>🔒 锁匠</h4><p>控住对面治疗，让他在窗口里做不了事。</p><p style=\"color:var(--tx3);margin-top:5px\">通常是贼（<sk>闷棍</sk>/<sk>致盲</sk> 最干净）或猎人（<sk>冰冻陷阱</sk> 可以预先布置）。</p></div>\n        <div class=\"mini-card\"><h4>⚔ 杀手</h4><p>全力输出击杀目标，什么都不管。</p><p style=\"color:var(--tx3);margin-top:5px\">谁的爆发好谁当。贼的窗口最猛，猎人的持续最稳。</p></div>\n        <div class=\"mini-card\"><h4>🔗 接手</h4><p>接第二环控制、处理对面第三个人、处理突发。</p><p style=\"color:var(--tx3);margin-top:5px\">这个角色最容易被忽略，<b>但它是控制链能不能接上的关键</b>。</p></div>\n      </div>\n      <p style=\"margin-top:12px\"><strong>关键：三个角色每轮轮换，不是固定的。</strong>贼这轮当锁匠（闷棍治疗），下轮可能当杀手（爆发全交）。<b>开场前必须说清楚这一轮谁是谁</b>——这就是下面那个分配器要练的东西。</p>\n    </div></div>\n\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\">\n    <span class=\"t\">猎人带来了什么（2v2 里没有的）</span>\n    <span class=\"sub\">可预先布置的控制 + 一张救人的牌</span><span class=\"ar\">▸</span></div>\n    <div class=\"b\">\n      <div class=\"trio\">\n        <div class=\"cR\"><div class=\"who\">🗡 贼</div><div class=\"txt\"><b>最强的锁匠，也是最强的杀手。</b><br>但他只能同时当一个——<b>这就是 2v2 的困境</b>：贼去控治疗就没人爆发，去爆发就没人控治疗。</div></div>\n        <div class=\"cP\"><div class=\"who\">✚ 牧师</div><div class=\"txt\"><b>第三个伤害源 + 维持。</b><br>3v3 里他的输出压力比 2v2 小，<b>可以匀出更多注意力做驱散、控制和保人</b>。</div></div>\n        <div class=\"cH\"><div class=\"who\">🏹 猎人</div><div class=\"txt\"><b>解开困境的那个人。</b><br><sk>冰冻陷阱</sk> 是<b>唯一可以预先布置</b>的控制——不占施法时间。<br><sk>牺牲咆哮</sk> 能把队友受的暴击伤害转到自己身上，<b>这是这个组合唯一的\"外部保命\"</b>。</div></div>\n        <div class=\"link\"><span class=\"lk\">耦合点</span><div><b>猎人的加入让贼从\"必须二选一\"变成\"可以专职\"。</b>猎人当锁匠（陷阱控治疗）→ 贼可以全力当杀手。这是 Thug Cleave 相对贼牧 2v2 最大的结构性提升。</div></div>\n      </div>\n    </div></div>\n</div>\n\n<h2>这一轮谁是谁？分配器</h2>\n<p class=\"lead\">给三个角色各选一个人，看这个分配成不成立。</p>\n<div class=\"roles\">\n  <div class=\"gh\">角色分配器</div>\n  <div class=\"gt\">这一轮的分工</div>\n  <div class=\"rgrid\" id=\"rgrid\"></div>\n  <div class=\"rout\" id=\"rout\"></div>\n</div>\n\n<h2>三个共享时钟</h2>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <p class=\"lead\">控制链接得上，杀人只是走个流程；接不上，三个人的伤害都是白打。</p>\n\n  <h2>递减规则：你们的预算表</h2>\n  <p>同类控制连续命中同一目标，时长按 <strong>100% → 50% → 25% → 免疫</strong> 衰减。<strong>不同类别互不影响</strong>——所以链条要跨类别接。</p>\n  <div class=\"drt\" id=\"drtable\"></div>\n\n  <h2>标准控制链：怎么把治疗锁住足够久</h2>\n  <p class=\"lead\">目标：让对面治疗在你们的杀窗里<strong>连续失去反应能力</strong>。三个人各出一环，跨类别不吃递减。</p>\n  <div class=\"chain\" id=\"chain1\"></div>\n  <div class=\"note\"><b>为什么必须跨类别：</b>如果贼用 <sk>闷棍</sk>（失能类）开场，牧师再用 <sk>心灵尖啸</sk>（恐惧类）——<b>不吃递减，两段都是满时长</b>。但如果贼 <sk>闷棍</sk> 之后又用 <sk>致盲</sk>（也是失能类），第二段只剩一半。<strong>三个人凑齐三个不同类别，是这个组合最大的资产。</strong></div>\n\n  <h2>控制链最常断在哪</h2>\n  <div class=\"rows\" id=\"chainfail\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">八步，三栏同时看。中间的「耦合点」是这三件事为什么必须配套。</p>\n  <div class=\"stepper\" id=\"stepBody\"></div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <p class=\"lead\">三个人可能被打，也有三个人可以救。<strong>关键是别三个人同时去救同一个。</strong></p>\n  <div class=\"rows\" id=\"defense\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <p class=\"lead\">3v3 按<strong>对面的结构</strong>分。核心问题只有一个：<strong>他们的治疗好不好锁。</strong></p>\n  <div class=\"split\">\n    <div class=\"sidecol\"><div class=\"cls-grid\" id=\"clsGrid\"></div></div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s6": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fWho\">\n      <option value=\"cur\">跟随当前视角</option>\n      <option value=\"all\">三个视角都练</option>\n      <option value=\"rogue\">只练贼</option>\n      <option value=\"priest\">只练牧师</option>\n      <option value=\"hunter\">只练猎人</option>\n    </select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s7": "<div class=\"wrap\">\n  <p class=\"lead\">一人一栏。三个人各看一遍另外两栏。</p>\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"闷棍\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_sap.jpg\" alt=\"闷棍\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"心灵尖啸\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_psychicscream.jpg\" alt=\"心灵尖啸\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟</span><span class=\"sub\">3v3 最重要的那个</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>三个人的控制冷却 + 对面每个人身上的递减状态。<strong>这是 3v3 的第一资源，比伤害重要。</strong></p><div class=\"mini\"><div class=\"m ok\"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span>要记的不是\"我还有什么\"，是\"对面身上还剩多少递减\"</span><span class=\"ar\">▸</span></div><div class=\"mb\">同一个治疗被眩晕两次之后，第三次只剩 25%。<b>所以控制链要跨类别，而且要记账。</b>见「控制链」页。</div></div><div class=\"m \"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span>三个人的控制类别是你们最大的资产</span><span class=\"ar\">▸</span></div><div class=\"mb\">贼有失能类+眩晕类，牧师有恐惧类，猎人有陷阱（失能类）+眩晕类。<b>凑齐不同类别，能把一个治疗锁住很久。</b></div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"暗影之舞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_shadowdance.jpg\" alt=\"暗影之舞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"百发百中\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_trueshot.jpg\" alt=\"百发百中\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"能量灌注\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_powerinfusion.jpg\" alt=\"能量灌注\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟</span><span class=\"sub\">三个人的窗口要对齐</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>贼的 <sk>暗影之舞</sk>、猎人的 <sk>百发百中</sk>、牧师的 <sk>能量灌注</sk>。</p><p style=\"margin-top:7px\"><strong>三个爆发必须落在同一个控制窗口里。</strong>分开交＝对面治疗能分别应付。</p><div class=\"mini\"><div class=\"m ok\"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span><sk class=\"p\"><img class=\"ic\" src=\"assets/icons/spell_holy_powerinfusion.jpg\" alt=\"\" loading=\"lazy\" onerror=\"this.style.display='none'\">能量灌注</sk> 该给谁</span><span class=\"ar\">▸</span></div><div class=\"mb\">给<b>这一轮的杀手</b>。通常是贼（爆发峰值最高）或猎人（稳定且远程）。<b>不要给自己</b>——你的伤害不是这一轮的主力。</div></div><div class=\"m no\"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span>爆发不齐就别开</span><span class=\"ar\">▸</span></div><div class=\"mb\">3v3 的击杀窗口很短，<b>缺一个爆发通常就打不穿</b>。宁可再等十几秒，也不要用两个人的爆发去赌。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"牺牲咆哮\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_fervor.jpg\" alt=\"牺牲咆哮\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"痛苦压制\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_painsupression.jpg\" alt=\"痛苦压制\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"消失\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_vanish.jpg\" alt=\"消失\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">保命时钟</span><span class=\"sub\">三个人的牌 + 猎人的外部保命</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>三个人各自的保命牌，加上两张<b>能给别人用的</b>：<sk>痛苦压制</sk> 和 <sk>牺牲咆哮</sk>。</p><div class=\"mini\"><div class=\"m ok\"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span><sk class=\"h\"><img class=\"ic\" src=\"assets/icons/ability_hunter_fervor.jpg\" alt=\"\" loading=\"lazy\" onerror=\"this.style.display='none'\">牺牲咆哮</sk> 是这个组合的隐藏资产</span><span class=\"ar\">▸</span></div><div class=\"mb\">官方描述：<b>命令你的宠物保护一名盟友，使其受到的伤害降低 15%，同时该目标受到伤害的 50% 转移给你的宠物</b>，持续 10 秒或直到宠物血量低于 25%。<br><b>用在对面爆发窗口开始的那一刻</b>——它是减伤+分摊，早交才能覆盖最密集的那几下。</div></div><div class=\"m no\"><div class=\"mh\" onclick=\"tgm(this)\"><span class=\"d\"></span><span>三张外部保命不要同时交在一个人身上</span><span class=\"ar\">▸</span></div><div class=\"mb\"><sk>痛苦压制</sk> + <sk>牺牲咆哮</sk> + 队友自己的减伤叠在一起，<b>大部分是浪费</b>。分开覆盖不同的时间段。</div></div></div></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"偷袭\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_cheapshot.jpg\" alt=\"偷袭\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">Thug Cleave 的定位</span><span class=\"sub\">Icy Veins 列出的敏锐贼 3v3 组合之一</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Icy Veins 列出的敏锐贼 3v3 组合里，<b>Thug Cleave = 贼 / 猎人 / 牧师</b>。核心原则原话：</p><div class=\"quote\"><b>\"crowd control every time you go for a kill\"</b> —— 每次想杀人，都要控住对面每一个人。<br>并且：<b>敏锐贼只在围绕 setup（预设套路）的组合里才被使用。</b></div><p style=\"margin-top:9px\"><strong>\"控住每一个人\"这句话值得展开：</strong>不只是控治疗——<b>对面另外两个 DPS 也要被处理</b>，否则他们会在你们杀人的时候反手杀掉你们的一个。这就是「接手」这个角色存在的理由。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"暗影之舞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_shadowdance.jpg\" alt=\"暗影之舞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"瞄准射击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_spear_07.jpg\" alt=\"瞄准射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">专精搭配</span><span class=\"sub\">贼和猎人各有两种可行选择</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>敏锐</b>：控制最干净、爆发最高，<b>是这个组合的标准配置</b>（Icy Veins 把 Thug Cleave 列在敏锐的组合表里）。<br><b>狂徒</b>：持续压力更好，但 <sk>剑刃乱舞</sk> 的溅射会破队友的控制——<b>3v3 里控制更多，这个风险更大</b>。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><b>戒律</b>：输出即治疗，能当第三个伤害源。<br>3v3 里他的输出压力比 2v2 小，<b>可以匀出注意力做驱散和应急控制</b>——这是「接手」角色的最佳人选。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\"><b>射击</b>：远程爆发高、稳定，<b>最省心的杀手</b>。<br><b>生存</b>：近战混合，控制更多（陷阱+近战控），<b>更适合当锁匠</b>，但要跟贼抢近战位置。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>标准配置是「敏锐 + 射击 + 戒律」</b>：贼当锁匠或杀手、猎人当另一个、牧师当接手。<br>本页以这个配置为主线。</div></div></div></div></div>",
    "drtable": "<div class=\"drc\"><div class=\"dn\">眩晕类</div><div class=\"dl\"><sk>偷袭</sk> <sk>肾击</sk>（贼）· <sk>胁迫</sk>（猎）</div></div><div class=\"drc\"><div class=\"dn\">失能类</div><div class=\"dl\"><sk>闷棍</sk> <sk>致盲</sk>（贼）· <sk>冰冻陷阱</sk>（猎）<br><b>全部受伤即破</b></div></div><div class=\"drc\"><div class=\"dn\">恐惧类</div><div class=\"dl\"><sk>心灵尖啸</sk>（牧）</div></div><div class=\"drc\"><div class=\"dn\">致残类</div><div class=\"dl\"><sk>凿击</sk>（贼）<b>受伤即破</b></div></div><div class=\"drc\"><div class=\"dn\">击退/定身</div><div class=\"dl\"><sk>束缚射击</sk> <sk>震荡射击</sk>（猎）</div></div><div class=\"drc\"><div class=\"dn\">缴械/沉默</div><div class=\"dl\"><sk>卸除武装</sk>（贼）· <sk>奇美拉钉刺</sk>（猎，PvP 天赋）<br><b>不吃控制递减，是额外一层</b></div></div>",
    "chainfail": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"闷棍\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_sap.jpg\" alt=\"闷棍\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">① 同类别接同类别，第二环只剩一半</span><span class=\"sub\">最常见的浪费</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>冰冻陷阱</sk> 和 <sk>闷棍</sk> <sk>致盲</sk> <b>都是失能类</b>——接在一起会吃递减。</p><div class=\"note\"><b>更好的顺序：</b><sk>冰冻陷阱</sk>（失能）→ <sk>心灵尖啸</sk>（恐惧）→ <sk>肾击</sk>（眩晕）。<br><b>三个不同类别，三段都是满时长。</b>贼的 <sk>闷棍</sk>/<sk>致盲</sk> 留给下一轮或者另一个目标。</div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"暗言术：痛\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_shadowwordpain.jpg\" alt=\"暗言术：痛\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">② 有人打破了失能类控制</span><span class=\"sub\">比 2v2 更容易发生，因为多了一个人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>冰冻陷阱</sk> <sk>闷棍</sk> <sk>致盲</sk> <sk>凿击</sk> 全部受伤即破。<b>3v3 有三个伤害源，破控的概率比 2v2 高一半。</b></p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\">你自己的溅射（狂徒的 <sk>剑刃乱舞</sk> 尤其危险）。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">你挂在对面治疗身上的 <sk>暗言术：痛</sk>。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\">你的宠物！<b>宠物会自动攻击，这是猎人最容易忘的破控源。</b>召回或改设目标。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>3v3 的控制沟通必须包含\"停手\"清单</b>：谁的持续伤害、谁的宠物、谁的溅射。<b>只喊\"我要控了\"不够，要确认三个人都收干净。</b></div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"卸除武装\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_dismantle.jpg\" alt=\"卸除武装\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"束缚射击\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shaman_bindelemental.jpg\" alt=\"束缚射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">③ 控了治疗，但对面的 DPS 没被处理</span><span class=\"sub\">\"控住每一个人\"的后半句</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>你们锁住了对面治疗，三个人全力打目标——<b>然后对面另一个 DPS 反手秒掉了你们的牧师。</b></p><p style=\"margin-top:8px\">这就是 Icy Veins 说\"控住<b>每一个</b>人\"的意思。<strong>「接手」这个角色的核心职责，就是处理对面那个没被控的第三人。</strong></p><div class=\"note\">处理方式不一定是硬控：<sk>卸除武装</sk> 缴掉他的武器、<sk>束缚射击</sk> 钉住他、<sk>奇美拉钉刺</sk> 减疗/干扰，甚至只是<b>让他必须处理你而不能自由输出</b>，都算处理。</div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"暗影之舞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_shadowdance.jpg\" alt=\"暗影之舞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"百发百中\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_trueshot.jpg\" alt=\"百发百中\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">④ 控制链接上了，但爆发没跟上</span><span class=\"sub\">白白浪费一次完美的 setup</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>三环控制完美接上，对面治疗被锁了很久——<b>但你们的爆发在冷却，只能打常规伤害。</b></p><div class=\"note\"><b>控制链要跟爆发对齐，不是有控制就开。</b>3v3 的完美 setup 不常有，<strong>宁可等十几秒让爆发转好，也不要用一次完美的控制链去换一点常规伤害。</strong></div></div></div>",
    "defense": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"牺牲咆哮\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_fervor.jpg\" alt=\"牺牲咆哮\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"烟雾弹\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_smoke.jpg\" alt=\"烟雾弹\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"痛苦压制\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_painsupression.jpg\" alt=\"痛苦压制\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">牧师被集火</span><span class=\"sub\">3v3 里有两个人可以救</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><strong>3v3 的好消息：救牧师不再只有贼一个人。</strong>但坏消息是——<b>两个人同时去救是浪费。</b></p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>烟雾弹</sk> 罩住他（一个 GCD，对面点不到），或者 <sk>致盲</sk> 控住抓他的人。<b>如果你在窗口里且目标一击能死，先收完</b>。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">先自救：提前挂的护盾、<sk>痛苦压制</sk>（<b>被眩晕时也能按</b>）、<sk>渐隐术</sk>。<b>第一时间说状态，不是等血危险了喊救命。</b></div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\"><sk>牺牲咆哮</sk> —— <b>这是你独有的外部保命</b>：让他减伤 15%，并把他受到伤害的 50% 转给你的宠物。<b>注意上限是宠物血量掉到 25% 就结束</b>，所以它买的是时间不是无限承伤。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>分工要明确：通常猎人先交 <sk>牺牲咆哮</sk>（远程，不用中断输出），贼只在需要硬控时才回。</b>两个人同时放弃进攻去救，等于对面用一次进攻换掉了你们整轮。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"逃脱\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feint.jpg\" alt=\"逃脱\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"灵龟守护\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_pet_turtle.jpg\" alt=\"灵龟守护\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"主人的召唤\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_masterscall.jpg\" alt=\"主人的召唤\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">猎人被近战贴住</span><span class=\"sub\">他自己能解决大部分</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>猎人是三个人里<b>最不需要被救的</b>——<sk>逃脱</sk>、<sk>灵龟守护</sk>、<sk>假死</sk>、<sk>猎豹守护</sk>、<sk>主人的召唤</sk>。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>通常不用管。</b>除非他所有位移都交完了，否则别为他放弃进攻。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">给个 <sk>真言术：盾</sk> 就够了，<b>不要停下来硬读治疗</b>。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\"><b>自己解决。</b>按顺序：位移 → 减速/控制 → <sk>灵龟守护</sk>（免疫伤害但不免控）→ <sk>假死</sk>（脱战重置）。<b>把 <sk>牺牲咆哮</sk> 省给队友。</b></div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>知道\"谁不需要救\"和知道\"谁需要救\"一样重要。</b>猎人被贴住时另外两个人继续进攻，通常是对的。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"消失\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_vanish.jpg\" alt=\"消失\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"暗影斗篷\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_nethercloak.jpg\" alt=\"暗影斗篷\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"闪避\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_shadowward.jpg\" alt=\"闪避\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">贼被抓</span><span class=\"sub\">他自保最强，但也最容易被忽略</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\">按伤害类型选：物理 → <sk>闪避</sk>，法术/魔法控制 → <sk>暗影斗篷</sk>。<b><sk>消失</sk> 是最后一张，别第一时间交。</b></div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">给他挂 <sk>救赎</sk> 和护盾，<b>然后继续输出</b>——你的伤害在治疗他。停下来硬读是双输。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\">继续输出，<b>贼被抓的时候你的持续伤害是团队的主要压力来源</b>。必要时 <sk>牺牲咆哮</sk>。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>贼被抓通常不需要全队响应。</b>他的自保是三个人里最强的——过度反应会让你们白白失去一轮进攻。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛苦压制\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_painsupression.jpg\" alt=\"痛苦压制\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"牺牲咆哮\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_fervor.jpg\" alt=\"牺牲咆哮\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"真言术：障\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_powerwordbarrier.jpg\" alt=\"真言术：障\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">对面开大：三个人的响应要错开</span><span class=\"sub\">不要一次性把牌交光</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>对面爆发窗口开启。<b>你们有三张外部保命：<sk>痛苦压制</sk>、<sk>牺牲咆哮</sk>、<sk>真言术：障</sk>。</b></p><div class=\"note\"><b>关键：这三张要覆盖不同的时间段，不是同时交在一个人身上。</b><br>典型顺序：<sk>牺牲咆哮</sk>（爆发刚开始，减伤+分摊给宠物）→ <sk>痛苦压制</sk>（血线开始危险）→ <sk>真言术：障</sk>（如果还没结束）。<br><b>同时交光的话，对面的第二波你们就裸了。</b></div><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\">自保为主。<b>你的牌是给自己的</b>，别指望它救别人。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>痛苦压制</sk> <b>在队友血量高的时候用</b>，不是等血低——这是官方明确强调的。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\"><sk>牺牲咆哮</sk> <b>在对面爆发开始的那一刻用</b>，它转移的是暴击伤害，早用才划算。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>三张外部保命的时机各不相同，但都是\"提前\"而不是\"补救\"。</b>牧师和猎人要说好谁先。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"肾击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_kidneyshot.jpg\" alt=\"肾击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">谁先交解控道具</span><span class=\"sub\">3v3 有三张，但也有三个人可能被控</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>3v3 有三张道具，看起来宽裕——<b>但对面也有三个人在放控制，消耗速度同样快。</b></p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>你的优先级最低。</b>你有 <sk>消失</sk> 和一堆自保，能不交就不交。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><b>你的优先级最高。</b>牧师被控住＝全队没治疗。但也要先判断：能不能用 <sk>痛苦压制</sk> 或提前铺的东西撑过去。</div></div><div class=\"cH\"><div class=\"who\"><img src=\"assets/icons/classicon_hunter.jpg\" alt=\"\" onerror=\"this.style.display='none'\">猎人</div><div class=\"txt\"><b>你的优先级中等。</b>你有 <sk>假死</sk> 可以脱战重置一部分状况，先试便宜的手段。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>三个人不该在同一轮都交道具。</b>留至少一张在场上，对面的击杀链就永远差一环。<b>而且要说出来——不然三个人可能同时交。</b></div></div></div></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>组合三铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">每次想杀人，都要控住对面每一个人</div><div class=\"dd\">Icy Veins 对这个组合的原话。不只是控治疗——对面没被控的那个 DPS 会反手杀掉你们的一个。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">控制链必须跨类别接</div><div class=\"dd\">失能 → 恐惧 → 眩晕，三段满时长。同类别接同类别，第二段只剩一半。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">控制链要跟爆发对齐</div><div class=\"dd\">完美 setup 稀缺。三个爆发不齐就等，别用它换常规伤害。</div></div></div></div></div><div class=\"sc r\"><h4>🗡 贼</h4><div class=\"line\">● 这一轮我是<b>锁匠还是杀手</b>？说出来<br>● 控之前喊，<b>确认牧师停手 + 猎人收宠物</b><br>● 陷阱是失能类 → 我接 <sk>肾击</sk>（眩晕）不接 <sk>闷棍</sk><br>● 对面没被控的第三人在打牧师 → <b>我去处理</b><br>● <sk>消失</sk> 是最后一张，撤退要喊</div></div><div class=\"sc p\"><h4>✚ 牧师</h4><div class=\"line\">● 我通常是<b>接手</b>：第二/三环控制 + 应急<br>● <sk>心灵尖啸</sk> 是恐惧类，<b>跟贼猎都不同类</b><br>● <sk>能量灌注</sk> 给<b>这一轮的杀手</b>，不给自己<br>● <sk>痛苦压制</sk> <b>血高时用</b>，且排在牺牲咆哮之后<br>● 看到队友的破控源（宠物/溅射）<b>立刻说</b></div></div><div class=\"sc h\"><h4>🏹 猎人</h4><div class=\"line\">● <sk>冰冻陷阱</sk> <b>提前布</b>，不是现用现放<br>● \"停手\"对我是<b>两个动作</b>：自己停 + 收宠物<br>● <sk>牺牲咆哮</sk> <b>在对面爆发开始那一刻</b>给队友（减伤15%+分摊给宠物）<br>● 我被贴住<b>自己解决</b>，别喊人救<br>● 多近战对局：<b>群体减速是我的核心价值</b></div></div><div class=\"sc wide\"><h4>控制类别速查（跨类别才不吃递减）</h4><div class=\"line\"><b>眩晕</b>：<sk>偷袭</sk> <sk>肾击</sk>（贼）· <sk>胁迫</sk>（猎）　　<b>失能</b>：<sk>闷棍</sk> <sk>致盲</sk>（贼）· <sk>冰冻陷阱</sk>（猎）<span style=\"color:var(--no)\">受伤即破</span><br><b>恐惧</b>：<sk>心灵尖啸</sk>（牧）　　<b>致残</b>：<sk>凿击</sk>（贼）<span style=\"color:var(--no)\">受伤即破</span><br><b>缴械/沉默</b>：<sk>卸除武装</sk>（贼）· <sk>奇美拉钉刺</sk>（猎）<span style=\"color:var(--ok)\">不吃控制递减，额外一层</span></div></div><div class=\"sc wide\"><h4>三个最高频的翻车点</h4><div class=\"line\">● <b>有人破了失能类控制</b> —— 三个源：贼的溅射、牧师的持续伤害、<b>猎人的宠物</b>。要建固定确认流程<br>● <b>只控治疗，没管对面第三人</b> —— 变成一换一，而 3v3 一换一通常你们亏<br>● <b>三个爆发没落在同一个控制窗口</b> —— 对面治疗能分别应付</div></div>"
  },
  "sk": {
    "潜行": "ability_stealth",
    "偷袭": "ability_cheapshot",
    "肾击": "ability_rogue_kidneyshot",
    "暗影之舞": "ability_rogue_shadowdance",
    "暗影之刃": "inv_knife_1h_grimbatolraid_d_03",
    "影分身": "ability_rogue_sinistercalling",
    "刺骨": "ability_rogue_eviscerate",
    "暗影打击": "ability_rogue_shadowstrike",
    "消失": "ability_vanish",
    "暗影斗篷": "spell_shadow_nethercloak",
    "闪避": "spell_shadow_shadowward",
    "佯攻": "ability_rogue_feint",
    "致盲": "spell_shadow_mindsteal",
    "闷棍": "ability_sap",
    "凿击": "ability_gouge",
    "脚踢": "ability_kick",
    "烟雾弹": "ability_rogue_smoke",
    "疾跑": "ability_rogue_sprint",
    "暗影步": "ability_rogue_shadowstep",
    "卸除武装": "ability_rogue_dismantle",
    "偷天换日": "ability_rogue_tricksofthetrade",
    "致命一击": "inv_ability_tricksterrogue_coupdegrace",
    "剑刃乱舞": "ability_warrior_punishingblow",
    "救赎": "ability_priest_atonement",
    "真言术：盾": "spell_holy_powerwordshield",
    "苦修": "spell_holy_penance",
    "真言术：耀": "spell_priest_power-word",
    "痛苦压制": "spell_holy_painsupression",
    "全神贯注": "spell_holy_rapture",
    "能量灌注": "spell_holy_powerinfusion",
    "惩击": "spell_holy_holysmite",
    "心灵震爆": "spell_shadow_unholyfrenzy",
    "暗言术：痛": "spell_shadow_shadowwordpain",
    "群体驱散": "spell_arcane_massdispel",
    "驱散魔法": "spell_nature_nullifydisease",
    "纯净术": "spell_holy_dispelmagic",
    "渐隐术": "spell_magic_lesserinvisibilty",
    "心灵尖啸": "spell_shadow_psychicscream",
    "真言术：障": "spell_holy_powerwordbarrier",
    "快速治疗": "spell_holy_flashheal",
    "信仰飞跃": "priest_spell_leapoffaith_a",
    "冰冻陷阱": "spell_frost_chainsofice",
    "焦油陷阱": "spell_yorsahj_bloodboil_black",
    "束缚射击": "spell_shaman_bindelemental",
    "胁迫": "ability_devour",
    "震荡射击": "spell_frost_stun",
    "驱散射击": "ability_golemstormbolt",
    "反制射击": "inv_ammo_arrow_03",
    "压制": "ability_hunter_negate",
    "牺牲咆哮": "ability_hunter_fervor",
    "奇美拉钉刺": "ability_hunter_snaketrap",
    "高爆陷阱": "spell_fire_selfdestruct",
    "生存战术": "ability_hunter_survivalinstincts",
    "灵龟守护": "ability_hunter_pet_turtle",
    "假死": "ability_rogue_feigndeath",
    "逃脱": "ability_rogue_feint",
    "猎豹守护": "ability_mount_jungletiger",
    "意气风发": "ability_hunter_onewithnature",
    "优胜劣汰": "spell_nature_spiritarmor",
    "主人的召唤": "ability_hunter_masterscall",
    "伪装": "ability_hunter_camouflage",
    "误导": "ability_hunter_misdirection",
    "瞄准射击": "inv_spear_07",
    "急速射击": "ability_hunter_efficiency",
    "夺命射击": "ability_hunter_assassinate2",
    "百发百中": "ability_trueshot",
    "奥术射击": "ability_impalingbolt",
    "宁神射击": "spell_nature_drowsy",
    "圣盾术": "spell_holy_divineshield",
    "保护祝福": "spell_holy_sealofprotection",
    "破咒祝福": "spell_holy_blessingofprotection",
    "寒冰屏障": "spell_frost_frost",
    "变形术": "spell_nature_polymorph",
    "法术反制": "spell_frost_iceshock",
    "虚空行走": "spell_warlock_demonsoul",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "冰封之韧": "spell_deathknight_iceboundfortitude",
    "消散": "spell_shadow_dispersion",
    "树皮术": "spell_nature_stoneclawtotem",
    "业报之触": "ability_monk_touchofkarma",
    "剑在人在": "ability_warrior_challange",
    "破胆怒吼": "ability_golemthunderclap",
    "恐惧": "spell_shadow_possession",
    "星界转移": "ability_shaman_astralshift",
    "悬空": "ability_evoker_hover"
  },
  "enemy": [
    "圣盾术",
    "保护祝福",
    "破咒祝福",
    "寒冰屏障",
    "变形术",
    "法术反制",
    "虚空行走",
    "反魔法护罩",
    "冰封之韧",
    "消散",
    "树皮术",
    "业报之触",
    "剑在人在",
    "破胆怒吼",
    "恐惧",
    "星界转移",
    "悬空"
  ],
  "own": {
    "r": [
      "潜行",
      "偷袭",
      "肾击",
      "暗影之舞",
      "暗影之刃",
      "影分身",
      "刺骨",
      "暗影打击",
      "消失",
      "暗影斗篷",
      "闪避",
      "佯攻",
      "致盲",
      "闷棍",
      "凿击",
      "脚踢",
      "烟雾弹",
      "疾跑",
      "暗影步",
      "卸除武装",
      "偷天换日",
      "致命一击",
      "剑刃乱舞"
    ],
    "p": [
      "救赎",
      "真言术：盾",
      "苦修",
      "真言术：耀",
      "痛苦压制",
      "全神贯注",
      "能量灌注",
      "惩击",
      "心灵震爆",
      "暗言术：痛",
      "群体驱散",
      "驱散魔法",
      "纯净术",
      "渐隐术",
      "心灵尖啸",
      "真言术：障",
      "快速治疗",
      "信仰飞跃"
    ],
    "h": [
      "冰冻陷阱",
      "焦油陷阱",
      "束缚射击",
      "胁迫",
      "震荡射击",
      "驱散射击",
      "反制射击",
      "压制",
      "牺牲咆哮",
      "奇美拉钉刺",
      "高爆陷阱",
      "生存战术",
      "灵龟守护",
      "假死",
      "逃脱",
      "猎豹守护",
      "意气风发",
      "优胜劣汰",
      "主人的召唤",
      "伪装",
      "误导",
      "瞄准射击",
      "急速射击",
      "夺命射击",
      "百发百中",
      "奥术射击",
      "宁神射击"
    ]
  },
  "cond": null,
  "verdicts": null,
  "steps": null,
  "match": {
    "list": [
      {
        "id": "lockable",
        "n": "治疗好锁",
        "c": "var(--ok)",
        "eg": [
          "戒律牧",
          "神牧",
          "奶德（无形态优势时）"
        ],
        "one": "你们的强项对局。控制链接上就是击杀。",
        "threat": "这类治疗缺少免控、解控或位移手段，<b>你们的三环控制链能把他锁很久</b>。",
        "r": "当锁匠或杀手都行。<b>控制链的第一环要干净</b>——<sk>闷棍</sk> 之前确认全队停手。",
        "p": "当接手，第二环 <sk>心灵尖啸</sk> 要接得紧。<b>同时用 <sk>驱散魔法</sk> 解掉对面治疗给队友的关键增益。</b>",
        "h": "提前布 <sk>冰冻陷阱</sk> 在治疗必经之路。<b>你是唯一能\"预先\"布控的人，这个优势要用满。</b>",
        "l": "<b>治疗好锁的对局，胜负只取决于你们的控制链干不干净。</b>连续两轮接上，基本就赢了。"
      },
      {
        "id": "hardlock",
        "n": "治疗难锁",
        "c": "var(--no)",
        "eg": [
          "恢复德（形态切换）",
          "奶萨（图腾破控）",
          "圣骑（免控+净化）"
        ],
        "one": "控制链会被拆。要么打爆发窗口，要么改打他的队友。",
        "threat": "<b>形态切换、破控图腾、免控和净化</b>会让你们的控制链失效。硬按标准套路会一直白打。",
        "r": "<b>不要把所有控制都喂给治疗。</b>改成：控住他的一个 DPS，然后三个人集火另一个 DPS——<b>换目标比换手段有效</b>。",
        "p": "<b>你的驱散在这个对局价值最高</b>（尤其对萨满的图腾、骑士的祝福）。<br>同时要认清：对面治疗可能一直在场，<b>那意味着这局要打消耗</b>。",
        "h": "先打掉破控图腾（血量极低）。<b>陷阱对能切形态/免控的治疗效果打折，考虑把它布给对面的 DPS。</b>",
        "l": "<b>锁不住治疗时，正确做法是换目标不是加大力度。</b>对面 DPS 通常比治疗好杀，而杀掉一个 DPS 同样能赢。"
      },
      {
        "id": "melee3",
        "n": "对面多近战",
        "c": "var(--wa)",
        "eg": [
          "双近战+治疗",
          "战士+DK+奶"
        ],
        "one": "你们的牧师会被压。猎人的价值在这个对局最高。",
        "threat": "<b>近战会同时压你们的牧师和猎人</b>——两个都不擅长被贴身。",
        "r": "<b>你的工作偏向剥离。</b><sk>卸除武装</sk> 对近战极有效（2v2 数据里 33/50，3v3 同样值得带）。",
        "p": "接受被贴身的现实，多用瞬发、提前铺。<b>主动要求剥离。</b>",
        "h": "<b>你的位移是团队资产。</b><sk>束缚射击</sk> <sk>震荡射击</sk> <sk>焦油陷阱</sk> 能同时减速多个近战——<b>这是你比 2v2 时的贼更强的地方</b>。<sk>牺牲咆哮</sk> 给被压得最狠的那个。",
        "l": "<b>多近战对局，猎人的群体减速和控制是解法核心。</b>贼负责精确剥离，猎人负责整体拖慢，牧师负责活着。"
      },
      {
        "id": "ranged3",
        "n": "对面多远程",
        "c": "var(--ok)",
        "eg": [
          "双法系+治疗",
          "法师+术士+奶"
        ],
        "one": "贼最舒服。但要小心他们的控制链。",
        "threat": "远程职业的<b>控制通常比近战多</b>（变形、恐惧、陷阱），而且他们能在你们够不到的地方输出。",
        "r": "<b>你的接近能力是团队优势。</b>潜行绕后、打断施法、控制他们的治疗。<b>柱子对你有利。</b>",
        "p": "<b>你会被集火</b>（远程点你比点贼容易）。柱子和站位优先于输出。<b>你的驱散对法系增益价值极高。</b>",
        "h": "远程对远程，<b>你可以稳定输出而不被贴身</b>。<sk>反制射击</sk> 打断他们的关键施法，跟牧师分工好谁踢谁。",
        "l": "<b>打远程队伍，\"地形\"是第四个队友。</b>三个人都该围绕柱子活动——贼靠它接近，牧师靠它躲输出，猎人靠它卡视野。"
      },
      {
        "id": "nohealer3",
        "n": "对面无治疗（三 DPS）",
        "c": "var(--no)",
        "eg": [
          "三 DPS 爆发队"
        ],
        "one": "比谁先死。你们的容错更高，但要抢先手。",
        "threat": "三个 DPS 的伤害叠起来极猛，<b>能在几秒内秒掉你们的一个</b>。",
        "r": "<b>全力进攻，不用打消耗。</b>没有对面治疗，你的伤害不会被抹平。选最脆的那个。",
        "p": "<b>你是他们的首要目标。</b>提前铺、提前交减伤。<b>但也要输出</b>——这个对局需要你们的伤害尽快解决一个人。",
        "h": "<b><sk>牺牲咆哮</sk> 在这个对局价值最高</b>——三个 DPS 集火时伤害极密集，减伤 15% + 分摊 50% 的绝对量很可观。<b>给被集火的那个。</b>",
        "l": "<b>无治疗对局你们的优势更大</b>（有一个治疗 vs 没有）。<b>但前提是牧师活着</b>——三个 DPS 集火一个目标的速度非常快。"
      },
      {
        "id": "mirror3",
        "n": "镜像 / 类似组合",
        "c": "var(--ac)",
        "eg": [
          "贼猎牧 vs 贼猎牧",
          "RMP",
          "其他 setup 队"
        ],
        "one": "拼谁的控制链更干净，以及谁先失误。",
        "threat": "对面有跟你们一样的工具和套路。<b>赢的一方通常是失误更少的，不是操作更快的。</b>",
        "r": "<b>先手价值高但别赌</b>——双方都能脱战重来。<b>盯住对面贼的位置</b>，他的开场决定他们的节奏。",
        "p": "<b>驱散战是核心</b>，同时你要防对面的控制链。<b>你被控住＝他们的窗口开了。</b>",
        "h": "<b>陷阱的位置博弈</b>：对面也知道你会布陷阱。<b>布在他们\"以为安全\"的路径上</b>，而不是最明显的地方。",
        "l": "<b>镜像的胜负在三件事：控制链被打破的次数、爆发对齐的精度、以及谁先把外部保命交光。</b>都是配合问题。"
      }
    ],
    "members": [
      {
        "k": "r",
        "cls": "R",
        "label": "贼",
        "icon": "classicon_rogue"
      },
      {
        "k": "p",
        "cls": "P",
        "label": "牧师",
        "icon": "classicon_priest"
      },
      {
        "k": "h",
        "cls": "H",
        "label": "猎人",
        "icon": "classicon_hunter"
      }
    ]
  },
  "roles": [
    {
      "id": "lock",
      "n": "🔒 锁匠",
      "d": "控住对面治疗，让他在杀窗里做不了事"
    },
    {
      "id": "kill",
      "n": "⚔ 杀手",
      "d": "全力输出击杀目标，其他什么都不管"
    },
    {
      "id": "relay",
      "n": "🔗 接手",
      "d": "接第二环控制、处理对面第三人、应对突发"
    }
  ],
  "memb": {
    "r": "🗡 贼",
    "p": "✚ 牧师",
    "h": "🏹 猎人"
  },
  "play": {
    "lock_r": "用 <sk>闷棍</sk> 或 <sk>致盲</sk> 控住对面治疗。<b>这是最干净的锁</b>——但受伤即破，<b>必须提前喊，让队友停手</b>。",
    "lock_p": "用 <sk>心灵尖啸</sk> 控住治疗。<b>能用但不理想</b>——你只有这一个控制，用掉之后应急就没牌了。<b>只在贼和猎人都腾不出手时才这么分。</b>",
    "lock_h": "提前布好 <sk>冰冻陷阱</sk>，或者用 <sk>束缚射击</sk>。<b>陷阱的最大优势是可以预先布置</b>——不占你的输出时间，而且对面治疗经常自己走进去。",
    "kill_r": "爆发全交，<sk>偷袭</sk> 上点 → <sk>暗影之舞</sk> + <sk>暗影之刃</sk> → <sk>肾击</sk> 卡伤害落地 → <sk>致命一击</sk>。<b>这几秒你是瞎的，队友负责当你的眼睛。</b>",
    "kill_p": "<b>牧师当杀手是应急方案。</b>你的伤害通过 <sk>救赎</sk> 同时回血，所以\"全力输出\"对你没有取舍成本——<b>但你的爆发上限不如另外两个</b>，只在他们都被压住时这么分。",
    "kill_h": "开 <sk>百发百中</sk>，全力输出。<b>你的优势是远程且稳定</b>——不需要贴身，被打断的风险最低。<b>这是最省心的杀手人选。</b>",
    "relay_r": "留着 <sk>肾击</sk> 或 <sk>致盲</sk> 接第二环。<b>贼当接手很浪费</b>——他的爆发闲置了。只在对面控制极多、需要一个能随时脱身的人时这么分。",
    "relay_p": "<b>牧师当接手是默认最优。</b>你可以一边输出一边随时用 <sk>心灵尖啸</sk> 应急，还能 <sk>驱散魔法</sk> 解掉对面的关键增益。<b>而且你本来就要盯全场。</b>",
    "relay_h": "用 <sk>胁迫</sk>/<sk>驱散射击</sk> 接第二环，或者用 <sk>牺牲咆哮</sk> 保住被集火的队友。<b>猎人当接手很稳</b>——远程视野好，反应窗口大。"
  },
  "quiz": [
    {
      "id": "r1",
      "w": "r",
      "d": 2,
      "s": "你准备 <sk>闷棍</sk> 对面治疗开始控制链。你已经喊了，牧师停手了。",
      "a": "还有什么要确认的？",
      "o": [
        "没有了，可以开始",
        "猎人的宠物——它会自动攻击，是 3v3 最容易被忘的破控源",
        "对面治疗的血量",
        "自己的连击点"
      ],
      "r": 1,
      "e": [
        "<b>3v3 有三个伤害源，而第三个经常是自动的。</b>",
        "正解。<b>猎人的宠物会自动攻击，而 <sk>闷棍</sk> 受伤即破。</b>这是 3v3 比 2v2 多出来的破控源——2v2 里你只需要让牧师停手，3v3 还要确认猎人召回宠物或改设目标。<b>\"停手\"是三个人的动作，不是一个人的。</b>",
        "血量不影响控制生效。",
        "连击点是输出资源，跟控制无关。"
      ],
      "k": "3v3 的\"停手\"清单要包含宠物。自动攻击的东西最容易被忘。"
    },
    {
      "id": "r2",
      "w": "r",
      "d": 3,
      "s": "猎人的 <sk>冰冻陷阱</sk> 已经控住了对面治疗。你想接第二环，手上有 <sk>闷棍</sk> 和 <sk>肾击</sk>。",
      "a": "用哪个？",
      "o": [
        "<sk>闷棍</sk>，失能类时间长",
        "<sk>肾击</sk>——陷阱是失能类，闷棍同类会吃递减",
        "都可以，随便",
        "先不控，等陷阱结束"
      ],
      "r": 1,
      "e": [
        "<b><sk>冰冻陷阱</sk> 和 <sk>闷棍</sk> 都是失能类</b>，接在一起第二段只剩一半时长。",
        "正解。<b>控制链要跨类别接。</b>陷阱（失能）→ <sk>肾击</sk>（眩晕）不吃递减，两段都满时长。<b>更好的完整链是：陷阱（失能）→ <sk>心灵尖啸</sk>（恐惧）→ <sk>肾击</sk>（眩晕），三个不同类别三段满时长。</b>把 <sk>闷棍</sk> 留给下一轮或另一个目标。",
        "类别选择直接决定第二环的时长，不是随便。",
        "等陷阱结束会给对面治疗反应时间，链就断了。"
      ],
      "k": "控制链必须跨类别接。三个人凑齐三个不同类别，是这个组合最大的资产。"
    },
    {
      "id": "r3",
      "w": "r",
      "d": 2,
      "s": "这一轮猎人当锁匠（陷阱控治疗），你当杀手。你习惯性地想先 <sk>闷棍</sk> 治疗再进场。",
      "a": "该这么做吗？",
      "o": [
        "该，多一层控制总没错",
        "不该——你是杀手，控制交给锁匠，你专心爆发",
        "该，但要跟猎人错开",
        "看情况"
      ],
      "r": 1,
      "e": [
        "<b>多一层控制的代价是你的爆发晚了几秒</b>，而且可能跟猎人的陷阱撞同类别吃递减。",
        "正解。<b>角色分配的意义就是让每个人专心做一件事。</b>你当杀手就全力爆发——<b>3v3 相对 2v2 最大的提升，正是贼不用再\"控制和爆发二选一\"</b>。既想控又想打，等于自愿退回 2v2 的困境。",
        "\"错开\"是没有分配角色时的临场补救，不是有分配时该做的。",
        "角色已经分配了，\"看情况\"就是没执行分配。"
      ],
      "k": "分配了角色就专心做那个角色。既想控又想打，等于放弃 3v3 的结构优势。"
    },
    {
      "id": "r4",
      "w": "r",
      "d": 3,
      "s": "控制链完美接上，对面治疗被锁了很久。<em>但你的 <sk>暗影之舞</sk> 还有十几秒冷却</em>，猎人的 <sk>百发百中</sk> 也没好。",
      "a": "现在开吗？",
      "o": [
        "开，控制链这么好不能浪费",
        "不开——控制链要跟爆发对齐，用完美 setup 换常规伤害是亏的",
        "开，用常规伤害也能打不少",
        "让牧师一个人打"
      ],
      "r": 1,
      "e": [
        "<b>完美的控制链不常有，用它换一点常规伤害才是真正的浪费。</b>",
        "正解。<b>3v3 的完美 setup 是稀缺资源。</b>控制链锁住治疗的那几秒，如果没有爆发跟上，你们打出的伤害对面治疗解控后几下就回来了。<b>宁可等十几秒让爆发转好，也不要把一次完美的控制链花在常规伤害上。</b>",
        "常规伤害在 3v3 打不穿一个能自由施法的治疗（控制结束后）。",
        "一个人的伤害更不够。"
      ],
      "k": "控制链要跟爆发对齐，不是有控制就开。完美 setup 稀缺，别换成常规伤害。"
    },
    {
      "id": "r5",
      "w": "r",
      "d": 2,
      "s": "你们在打对面的目标，快要收掉了。这时你注意到<em>对面第三个人（没被控的那个）正在打你们的牧师</em>。",
      "a": "该怎么办？",
      "o": [
        "继续收，杀掉目标就赢了",
        "立刻处理他——<sk>卸除武装</sk> 或 <sk>凿击</sk> 打断，这是\"控住每一个人\"的后半句",
        "让牧师自己扛",
        "让猎人处理"
      ],
      "r": 1,
      "e": [
        "这经常变成一换一——<b>而 3v3 里一换一通常是你们亏</b>（你们花了完整的 setup，对面只花了一个人的输出）。",
        "正解。<b>Icy Veins 说\"控住每一个人\"，后半句就是指对面没被控的那个 DPS。</b>只顾杀人不管他，你们的牧师会先倒。<b>处理不一定是硬控——<sk>卸除武装</sk> 缴掉武器、一个 <sk>凿击</sk> 打断节奏，甚至只是让他必须应付你，都算。</b>",
        "牧师扛不住一个专心输出的 DPS。",
        "猎人可能正在输出或者够不到——<b>而且这题问的是\"你\"该怎么办</b>。看到了就该处理，不是推给别人。"
      ],
      "k": "\"控住每一个人\"包括对面没被控的那个 DPS。只顾杀人不管他，经常变成一换一。"
    },
    {
      "id": "p1",
      "w": "p",
      "d": 2,
      "s": "猎人的 <sk>冰冻陷阱</sk> 控住了对面治疗，贼接了 <sk>肾击</sk>。现在轮到你接第三环。",
      "a": "用什么？",
      "o": [
        "再来一个眩晕",
        "<sk>心灵尖啸</sk>——恐惧类，跟前两环都不同类，满时长",
        "等他们的控制结束再说",
        "不接，专心输出"
      ],
      "r": 1,
      "e": [
        "你没有眩晕类控制，而且同类会吃递减。",
        "正解。<b>陷阱（失能）→ <sk>肾击</sk>（眩晕）→ <sk>心灵尖啸</sk>（恐惧），三个不同类别，三段都是满时长。</b>这就是三个人凑齐三个控制类别的价值——<b>一个治疗被连续锁这么久，你们的杀窗就足够了。</b>",
        "等结束会给对面反应时间，链就断了。",
        "接手的核心职责就是接第二/第三环。不接等于放弃这个角色。"
      ],
      "k": "牧师的心灵尖啸是恐惧类，跟贼和猎人的控制都不同类。这是接手角色的核心价值。"
    },
    {
      "id": "p2",
      "w": "p",
      "d": 2,
      "s": "贼当杀手正在爆发，猎人当锁匠控住了治疗。你手上有 <sk>能量灌注</sk>。",
      "a": "给谁？",
      "o": [
        "给自己，多打点伤害",
        "给这一轮的杀手（贼）",
        "给猎人",
        "留着不用"
      ],
      "r": 1,
      "e": [
        "你不是这一轮的主要伤害来源，<b>加成给自己的收益最低</b>。",
        "正解。<b><sk>能量灌注</sk> 要给这一轮的杀手。</b>它是伤害加成，应该乘在最大的那个数上——<b>贼在爆发窗口里的伤害峰值是三个人里最高的</b>。加成给爆发中的人，收益是加成给常态输出的好几倍。",
        "猎人这一轮是锁匠，不是主要输出。",
        "留着不用是纯浪费，它有冷却。"
      ],
      "k": "伤害加成要给这一轮爆发的那个人。乘在最大的数上收益最高。"
    },
    {
      "id": "p3",
      "w": "p",
      "d": 3,
      "s": "对面开了爆发窗口打你。猎人问要不要交 <sk>牺牲咆哮</sk>，你自己的 <sk>痛苦压制</sk> 也在。",
      "a": "怎么安排？",
      "o": [
        "两个一起交，最安全",
        "让他先交牺牲咆哮，你的痛苦压制留到血线真正危险时",
        "先交你自己的痛苦压制",
        "都不交，先撑着"
      ],
      "r": 1,
      "e": [
        "<b>两张外部保命同时交在同一段时间是浪费。</b>对面的第二波来时你们就裸了。",
        "正解。<b>三张外部保命要覆盖不同时间段。</b><sk>牺牲咆哮</sk> 是减伤 15% + 把 50% 伤害分摊给宠物，<b>爆发刚开始时用最划算</b>；<sk>痛苦压制</sk> 是减伤，留到血线真正危险时。<b>顺序是：牺牲咆哮（爆发开始）→ 痛苦压制（血线危险）→ 真言术：障（还没结束）。</b>",
        "你自己的痛苦压制\"在队友血量高时用\"是指给队友——给自己时同样要看时机，但这里有更便宜的选项先用。",
        "什么都不交等着挨爆发，是把选择权交给对面。"
      ],
      "k": "三张外部保命要覆盖不同时间段，不是同时交。牺牲咆哮最早，痛苦压制居中。"
    },
    {
      "id": "p4",
      "w": "p",
      "d": 2,
      "s": "贼喊\"我要闷棍治疗了\"，你停手了。但你注意到<em>猎人的宠物还在攻击那个治疗</em>。",
      "a": "该做什么？",
      "o": [
        "我停手了就行，宠物是猎人的事",
        "立刻提醒猎人召回宠物",
        "自己想办法",
        "等控制被破了再说"
      ],
      "r": 1,
      "e": [
        "<b>结果是三个人一起承担的。</b>你看到了却不说，控制照样会被破。",
        "正解。<b>3v3 的\"停手\"是三个人的动作，而宠物是最容易被忘的那个。</b>猎人可能正在专注输出没注意。<b>你看到了就说——3v3 里信息共享本身就是战斗力，而且你的视野通常最好（站得远、要盯全场）。</b>",
        "你没有召回别人宠物的能力。",
        "控制被破之后再说就晚了，那一轮的 setup 已经废了。"
      ],
      "k": "看到队友的破控源要立刻说。牧师视野最好，指出这类问题是你的职责。"
    },
    {
      "id": "p5",
      "w": "p",
      "d": 3,
      "s": "对面是<em>恢复德</em>，你们的控制链连续两轮都被形态切换和瞬发治疗化解。",
      "a": "该建议改什么？",
      "o": [
        "加大控制力度，多控几次",
        "换目标——打对面的一个 DPS，别再硬锁治疗",
        "加大伤害输出",
        "打消耗"
      ],
      "r": 1,
      "e": [
        "同样的手段重复用得到同样的结果，<b>而且会吃递减</b>。",
        "正解。<b>锁不住治疗时，正确做法是换目标不是加大力度。</b>恢复德有形态切换、瞬发治疗、强力自愈——你们的控制链对他效果打折。<b>但对面的 DPS 通常比治疗好杀</b>，而杀掉一个 DPS 同样能赢。<b>把控制喂给 DPS，三个人集火另一个 DPS。</b>",
        "打不穿的时候加伤害不解决问题。",
        "打消耗是备选，但换目标是更主动的解法——<b>先试主动的</b>。"
      ],
      "k": "锁不住治疗就换目标。对面 DPS 通常比难锁的治疗好杀。"
    },
    {
      "id": "h1",
      "w": "h",
      "d": 1,
      "s": "开场前，你在考虑 <sk>冰冻陷阱</sk> 放哪。",
      "a": "最好的做法是什么？",
      "o": [
        "等需要控的时候现放",
        "提前布在对面治疗可能经过的路径上",
        "放在自己脚下防身",
        "放在场地中央"
      ],
      "r": 1,
      "e": [
        "现放会占用你的时间，<b>而且对面看到你放会躲开</b>。",
        "正解。<b><sk>冰冻陷阱</sk> 最大的价值是可以预先布置——不占施法时间。</b>提前布在对面治疗必经之路上，他自己走进去。<b>这是你带给这个组合最独特的东西：贼和牧师的控制都必须\"当场施放\"，只有你的能提前埋好。</b>",
        "防身用可以，但那是次要用途，浪费了它的战术价值。",
        "中央太明显，对面会绕开。"
      ],
      "k": "陷阱要提前布，不是现用现放。可预先布置是它区别于所有其他控制的地方。"
    },
    {
      "id": "h2",
      "w": "h",
      "d": 2,
      "s": "贼喊要控对面治疗。你正在全力输出那个治疗，宠物也在打他。",
      "a": "该做什么？",
      "o": [
        "停止自己的输出就够了",
        "停手 + 召回宠物或给宠物改设目标",
        "继续打，控制会先生效",
        "让宠物继续，它伤害不高"
      ],
      "r": 1,
      "e": [
        "<b>宠物会自动攻击，而且它不会因为你停手就停。</b>",
        "正解。<b>宠物是 3v3 里最容易被忘的破控源。</b>失能类控制受伤即破，<b>宠物一下平砍就够了</b>。所以\"停手\"对猎人来说是两个动作：自己停 + 处理宠物。<b>这是猎人在这个组合里最需要养成的习惯。</b>",
        "控制和伤害的先后不可控，赌不得。",
        "伤害高低不重要，<b>破控只需要\"造成伤害\"这个事实</b>。"
      ],
      "k": "猎人的\"停手\"是两个动作：自己停 + 处理宠物。宠物不会自己停。"
    },
    {
      "id": "h3",
      "w": "h",
      "d": 2,
      "s": "对面开始爆发，目标是你们的牧师。他血量<em>还很健康</em>。你的 <sk>牺牲咆哮</sk> 可用。",
      "a": "什么时候交？",
      "o": [
        "等他血掉到一半再交",
        "现在就交——爆发刚开始时转移暴击伤害最划算",
        "等他自己交痛苦压制之后",
        "不交，让他自己扛"
      ],
      "r": 1,
      "e": [
        "<b>等血掉了才交，前面那些暴击伤害你已经让他吃满了。</b>",
        "正解。<b><sk>牺牲咆哮</sk> 是减伤 15% + 把目标受到伤害的 50% 分摊给你的宠物</b>，持续 10 秒或宠物血量低于 25% 时结束。<b>所以它买的是一段时间，要在爆发最密集的那几秒覆盖上</b>——等血低了再交，前面最猛的那几下已经吃满了。",
        "两张牌应该覆盖不同时间段：<b>你的先，他的痛苦压制留到血线危险时</b>。等他先交是反的。",
        "牧师死了全队就完了，而这正是你独有的外部保命。"
      ],
      "k": "牺牲咆哮是减伤+分摊给宠物，且有宠物血量上限。它买的是时间，要覆盖爆发最密集的那几秒。"
    },
    {
      "id": "h4",
      "w": "h",
      "d": 3,
      "s": "你被一个近战贴住了。贼正在窗口里打对面的目标，牧师在输出。",
      "a": "该喊人来救吗？",
      "o": [
        "该，被贴住就该喊",
        "不该——你是三个人里最不需要被救的，自己解决",
        "该，让牧师停下来奶你",
        "该，让贼回来控他"
      ],
      "r": 1,
      "e": [
        "喊人来救会中断队友的进攻，<b>而你其实有一整套自救工具。</b>",
        "正解。<b>猎人是三个人里最不需要被救的</b>——<sk>逃脱</sk>、<sk>猎豹守护</sk>、<sk>灵龟守护</sk>（免疫伤害）、<sk>假死</sk>（直接脱战重置）、<sk>主人的召唤</sk>。<b>按顺序用便宜的手段自己解决，把 <sk>牺牲咆哮</sk> 省给队友。</b><br><b>知道\"谁不需要救\"和知道\"谁需要救\"一样重要。</b>",
        "牧师停下来硬读治疗是双输（他的输出也是治疗）。",
        "贼放弃窗口来救你，代价远大于你自己处理。"
      ],
      "k": "猎人自保工具最全，被贴住时先自己解决。让队友继续进攻比救你更值钱。"
    },
    {
      "id": "h5",
      "w": "h",
      "d": 2,
      "s": "对面是<em>双近战 + 治疗</em>，你们的牧师和你都被近战压着。",
      "a": "你的核心工作是什么？",
      "o": [
        "全力输出，快点杀人",
        "用群体减速和控制拖慢所有近战——<sk>焦油陷阱</sk>、<sk>束缚射击</sk>、<sk>震荡射击</sk>",
        "躲远点自保",
        "让贼处理"
      ],
      "r": 1,
      "e": [
        "被压着的时候输出效率很低，而且解决不了根本问题。",
        "正解。<b>多近战对局，猎人的群体减速和控制是解法核心。</b>你能同时拖慢多个近战——<b>这是贼做不到的（他的控制都是单体）</b>。<b>分工：贼负责精确剥离一个，你负责整体拖慢，牧师负责活着。</b>",
        "躲远点治标不治本，近战会跟上来。",
        "贼只能处理一个，另一个还在压人。"
      ],
      "k": "多近战对局，猎人的群体减速是解法核心。贼精确剥离，猎人整体拖慢。"
    },
    {
      "id": "b1",
      "w": "b",
      "d": 1,
      "s": "3v3 开场前的准备阶段。",
      "a": "必须对齐的是什么？",
      "o": [
        "各自的技能循环",
        "这一轮谁是锁匠、谁是杀手、谁是接手，以及打谁",
        "装备和天赋",
        "对面的段位"
      ],
      "r": 1,
      "e": [
        "循环是个人操作，不需要对齐。",
        "正解。<b>3v3 比 2v2 多对齐一件事：谁是谁。</b>因为角色是轮换的——<b>贼这轮当锁匠，下轮可能当杀手</b>。<b>3v3 的沟通复杂度是 2v2 的三倍（三对关系 + 一个整体），临场喊来不及，必须开场前定。</b>",
        "天赋进场前就定了。",
        "段位不影响战术。"
      ],
      "k": "3v3 开场要对齐两件事：这一轮谁是谁、打谁。角色轮换，所以每轮都要说。"
    },
    {
      "id": "b2",
      "w": "b",
      "d": 3,
      "s": "你们锁住了对面治疗，三个人全力打目标。<em>目标交了免疫（免物理伤害）。</em>",
      "a": "谁还能打进去？",
      "o": [
        "都打不进去，等免疫结束",
        "牧师的暗影伤害还能进——三种不同的伤害类型是这个组合的隐藏优势",
        "只有猎人",
        "只有贼"
      ],
      "r": 1,
      "e": [
        "免物理不等于免所有伤害。",
        "正解。<b>三个人的伤害类型不同，这是这个组合被低估的优势。</b>对面开免物理（<sk>剑在人在</sk>、<sk>保护祝福</sk>）时贼几乎打不动，<b>但牧师的暗影伤害照进</b>；开 <sk>反魔法护罩</sk> 时法伤无效，<b>但贼和猎人的物理还在</b>。<b>收人前先看他免的是什么，然后让能打进去的人继续。</b>",
        "猎人的伤害有物理成分，也会受影响。",
        "贼几乎全是物理，是受影响最大的。"
      ],
      "k": "看免疫要对照伤害类型。三个人的伤害类型不同，总有一个能打进去。"
    },
    {
      "id": "b3",
      "w": "b",
      "d": 2,
      "s": "一轮进攻结束，没杀掉人。三个人都还活着。",
      "a": "复位时要对齐几件事？",
      "o": [
        "两件：对面还剩什么、我们还剩什么",
        "四件：对面还剩什么、我们还剩什么、下一轮谁是谁、打谁",
        "一件：下一轮打谁",
        "不用对齐，各自准备"
      ],
      "r": 1,
      "e": [
        "这是 2v2 的清单，3v3 还要多两件。",
        "正解。<b>3v3 的复位清单比 2v2 多\"谁是谁\"这一件</b>——因为角色是轮换的。<b>完整四件：① 对面还剩什么（免疫、保命、道具）② 我们还剩什么（三个人的冷却、牧师的蓝）③ 下一轮谁是锁匠/杀手/接手 ④ 打谁。</b>",
        "只定目标不定角色，三个人会各干各的。",
        "不对齐就重开，等于把上一轮的信息全扔了。"
      ],
      "k": "3v3 复位对齐四件事，比 2v2 多\"下一轮谁是谁\"。因为角色会轮换。"
    },
    {
      "id": "b4",
      "w": "b",
      "d": 3,
      "s": "对面开爆发打你们的牧师。三个人手上分别有：贼的 <sk>烟雾弹</sk>、猎人的 <sk>牺牲咆哮</sk>、牧师自己的 <sk>痛苦压制</sk>。",
      "a": "该怎么用？",
      "o": [
        "三个一起交，确保牧师不死",
        "错开使用，覆盖不同时间段",
        "只用一个，剩下的留着",
        "让牧师自己解决"
      ],
      "r": 1,
      "e": [
        "<b>三张牌叠在同一段时间，大部分是浪费。</b>对面的第二波来时你们就裸了——而 3v3 对面有三个人，第二波很快。",
        "正解。<b>三张保命要覆盖不同时间段。</b>典型顺序：<sk>牺牲咆哮</sk>（爆发刚开始，减伤+分摊给宠物）→ <sk>痛苦压制</sk>（血线开始危险）→ <sk>烟雾弹</sk>（如果还没结束，直接切断选中）。<b>而且三个人要说好谁先，不然会同时交。</b>",
        "只用一个可能不够，关键是\"错开\"不是\"少用\"。",
        "牧师一个人扛不住三个人的爆发。"
      ],
      "k": "多张外部保命要错开覆盖时间段，而且要说好顺序——不然三个人会同时交。"
    },
    {
      "id": "b5",
      "w": "b",
      "d": 2,
      "s": "你们连续两轮控制链都被打破（第一次是牧师的持续伤害，第二次是猎人的宠物）。",
      "a": "该怎么修？",
      "o": [
        "下次控制之前更小心一点",
        "建立固定的\"停手\"确认流程：三个人各自确认，包括宠物",
        "换个控制手段",
        "让贼别控了"
      ],
      "r": 1,
      "e": [
        "\"更小心\"不是可执行的改进，同样的错误会再犯。",
        "正解。<b>3v3 的破控源有三个（贼自己的溅射、牧师的持续伤害、猎人的宠物），靠临场注意是不可靠的。</b>要建立<b>固定流程</b>：贼喊控 → 牧师确认停手且持续伤害掉完 → 猎人确认宠物已召回。<b>这是这个组合最值得花时间练的一件事——修好它，击杀率会立刻上一档。</b>",
        "换手段不解决\"有人破控\"这个根本问题。",
        "不控治疗等于放弃这个组合的核心打法。"
      ],
      "k": "重复出现的失误要用流程修，不是用\"更小心\"修。3v3 的破控源有三个，都要进清单。"
    },
    {
      "id": "b6",
      "w": "b",
      "d": 3,
      "s": "3v3 里，你们的三个爆发（贼的暗影之舞、猎人的百发百中、牧师的能量灌注）<em>冷却错开了</em>，只有两个能同时用。",
      "a": "该怎么办？",
      "o": [
        "用能用的两个，先打一波",
        "等第三个转好，控制链留到爆发齐了再开",
        "分开用，每个爆发单独打一波",
        "让爆发好的人单独进攻"
      ],
      "r": 1,
      "e": [
        "3v3 的击杀窗口很短，<b>缺一个爆发通常就打不穿</b>——而且你会浪费一次控制链。",
        "正解。<b>三个爆发必须落在同一个控制窗口里。</b>分开交等于让对面治疗分别应付，而分别应付他扛得住。<b>宁可再等十几秒，也不要用两个人的爆发去赌一次完美的 setup。</b>这跟\"控制链要跟爆发对齐\"是同一条原则的两面。",
        "分开用是最差的——每一波都不够，而且消耗了控制资源。",
        "单人进攻在 3v3 毫无威胁。"
      ],
      "k": "三个爆发要落在同一个控制窗口。缺一个就等，别用不完整的爆发换掉一次完美 setup。"
    },
    {
      "id": "b7",
      "w": "b",
      "d": 2,
      "s": "对面是<em>三个 DPS，没有治疗</em>。你们习惯性地想先控住一个再慢慢打。",
      "a": "这个思路对吗？",
      "o": [
        "对，控制是你们的强项",
        "不完全对——没有对面治疗，消耗没意义，应该抢先手全力压",
        "对，但要控两个",
        "不对，应该防守"
      ],
      "r": 1,
      "e": [
        "控制依然有用（防止对面输出），但<b>\"慢慢打\"是针对有治疗的对局形成的习惯</b>。",
        "正解。<b>无治疗对局是\"谁先死\"的比赛。</b>你们的伤害不会被抹平，全力压就行。<b>而且你们有一个治疗，对面没有——你们的容错更高，但前提是抢到先手。</b>拖久了对面三个 DPS 的伤害叠起来更危险。<b>控制要用在\"防止对面输出\"上，不是\"为了慢慢磨\"。</b>",
        "控两个更好，但核心判断是节奏要快不是慢。",
        "防守把主动权交给对面，而这个对局主动权就是一切。"
      ],
      "k": "对面没治疗时消耗没有意义。控制的用途从\"创造杀窗\"变成\"减少对面输出\"。"
    },
    {
      "id": "b8",
      "w": "b",
      "d": 1,
      "s": "有人提议：\"我们三个都去控对面治疗，肯定能锁死他。\"",
      "a": "这个想法的问题在哪？",
      "o": [
        "没问题，控制越多越好",
        "三个人都当锁匠，就没人输出了——控住了也杀不掉人",
        "控制会互相打断",
        "浪费冷却"
      ],
      "r": 1,
      "e": [
        "控制多不等于赢，<b>控制的目的是创造输出窗口</b>。",
        "正解。<b>三个角色必须分开：锁匠、杀手、接手。</b>三个人都去控制，锁住了对面治疗但没人输出——<b>窗口白白流逝，等他解控了你们什么都没做成</b>。<b>3v3 的结构优势正是\"三个人可以同时做三件不同的事\"，全都做同一件事等于浪费两个人。</b>",
        "不同类别的控制不会互相打断（同类别会吃递减，但这不是主要问题）。",
        "浪费冷却是结果，根本问题是没人输出。"
      ],
      "k": "控制的目的是创造输出窗口。三个人都去控制，等于没有窗口可用。"
    },
    {
      "id": "r6",
      "w": "r",
      "d": 2,
      "s": "你玩的是狂徒。控制链要开始了，你的 <sk>剑刃乱舞</sk> <em>正开着</em>，对面三个人站得不远。",
      "a": "有什么风险？",
      "o": [
        "没风险，剑刃乱舞只打当前目标",
        "溅射会打破队友即将起的失能类控制——3v3 站位密集，风险比 2v2 更大",
        "会降低你的伤害",
        "会暴露位置"
      ],
      "r": 1,
      "e": [
        "<sk>剑刃乱舞</sk> 的机制就是把伤害溅射到附近敌人。",
        "正解。<b>3v3 对面三个人站得更密，溅射打到\"不该打的那个\"的概率比 2v2 高得多。</b>猎人的陷阱、你自己的闷棍、牧师的心灵尖啸——<b>只要有一个失能类控制正在生效或即将生效，乱舞就是定时炸弹</b>。<b>这也是为什么 Icy Veins 把 Thug Cleave 列在敏锐的组合表里</b>——敏锐没有这个自伤风险。",
        "乱舞提升总伤害，不降低。",
        "你已经在场上了，不存在暴露问题。"
      ],
      "k": "狂徒在 setup 型组合里的额外成本：剑刃乱舞会破控，而 3v3 站位更密风险更大。"
    },
    {
      "id": "r7",
      "w": "r",
      "d": 3,
      "s": "你是这一轮的杀手，正在爆发。<em>牧师被抓、猎人也被贴住</em>，而你的目标还有三分之一血。",
      "a": "怎么办？",
      "o": [
        "继续收，杀掉就解围",
        "立刻停手回防——两个队友同时被压是最危险的信号",
        "让猎人自己解决，去救牧师",
        "交消失换位置"
      ],
      "r": 1,
      "e": [
        "三分之一血不是\"一击能死\"。<b>而且两个队友同时被压意味着对面在打一次完整的进攻，不是骚扰。</b>",
        "正解。<b>两个队友同时被压是最危险的信号</b>——它意味着对面正在执行他们自己的击杀链，而你们的防守只剩你一个人有余力。<b>这时候贼是唯一能打破僵局的人（机动性最好）。</b>先去处理压牧师的那个（猎人自保能力强，能撑）。",
        "猎人确实能自保，方向对——<b>但\"继续收\"和\"去救\"是两个决策，这题的关键是先停手</b>。选项 2 包含了这个判断。",
        "换位置不解决队友被压的问题。"
      ],
      "k": "两个队友同时被压 = 对面在执行击杀链，不是骚扰。贼必须停手回防。"
    },
    {
      "id": "r8",
      "w": "r",
      "d": 2,
      "s": "你和猎人都能当这一轮的锁匠。对面治疗<em>站在一个开阔位置，离掩体很远</em>。",
      "a": "谁来锁更好？",
      "o": [
        "你，闷棍更干净",
        "猎人——他能远程布陷阱，你要跑过去会暴露",
        "都行",
        "让牧师锁"
      ],
      "r": 1,
      "e": [
        "<sk>闷棍</sk> 确实干净，<b>但你要从潜行接近他，而开阔位置意味着你的路径很长且容易被发现。</b>",
        "正解。<b>锁匠人选要看\"谁能更低成本地把控制送到\"。</b>治疗在开阔地远离掩体，<b>猎人可以在安全距离布陷阱或用远程控制，成本几乎为零</b>；你要跑过去，路上可能被发现、被打断、或者暴露你的开场意图。<b>角色分配不是固定的，要看场地和位置。</b>",
        "成本差别很大，不是\"都行\"。",
        "牧师只有一个控制，是最后的选择。"
      ],
      "k": "锁匠人选看\"谁送控制的成本更低\"。位置和地形会改变角色分配。"
    },
    {
      "id": "r9",
      "w": "r",
      "d": 3,
      "s": "控制链接上了，你们三个正在集火。对面治疗<em>用解控道具挣脱了</em>，但你的 <sk>致盲</sk> 还在。",
      "a": "现在用致盲吗？",
      "o": [
        "立刻用，重新锁住他",
        "看你们的爆发还剩多久——如果爆发快结束了，留着下一轮更值",
        "不用，留到下一轮",
        "让牧师用心灵尖啸"
      ],
      "r": 1,
      "e": [
        "立刻用是本能，<b>但如果爆发已经快结束，重新锁住他也没有伤害跟上。</b>",
        "正解。<b>控制要跟爆发对齐，这条在\"续控\"时同样成立。</b>爆发还剩很多 → 立刻 <sk>致盲</sk> 续上，窗口继续；爆发快结束 → <b>留着这个控制，因为它下一轮能配一个完整的爆发</b>。<b>对面交了道具是好消息（他下一轮没这张牌了），不必急着用光自己的牌去追这一轮。</b>",
        "一律不用太保守——爆发还足的话续控收益很高。",
        "牧师的尖啸同理，也要看爆发余量。"
      ],
      "k": "续控也要看爆发余量。爆发快结束时，把控制留给下一轮比强行续这一轮值钱。"
    },
    {
      "id": "p6",
      "w": "p",
      "d": 2,
      "s": "贼当锁匠去控治疗，猎人当杀手正在输出。你是接手。<em>对面第三个人开始打猎人</em>。",
      "a": "该做什么？",
      "o": [
        "给猎人治疗就够了",
        "处理那个人——接手的核心职责就是对面没被控的第三人",
        "继续输出目标",
        "让贼回来"
      ],
      "r": 1,
      "e": [
        "治疗是补救，<b>而且猎人在输出时被干扰，你们的杀手就废了一半。</b>",
        "正解。<b>「接手」的核心职责就是处理对面没被控的那个。</b>锁匠在控治疗、杀手在输出，<b>只有你有余力应付第三人</b>。用 <sk>心灵尖啸</sk>、或者至少让他必须处理你。<b>这就是 Icy Veins 说\"控住每一个人\"的执行方式——不是三个人都去控治疗，是三个角色各管一摊。</b>",
        "你输出的收益小于让杀手不被干扰。",
        "贼在控治疗，回来等于放弃第一环。"
      ],
      "k": "接手的核心职责是对面没被控的第三人。锁匠和杀手都腾不出手，只有你能管。"
    },
    {
      "id": "p7",
      "w": "p",
      "d": 3,
      "s": "你们连续三轮控制链都接上了，但每次目标都被拉回来。对面治疗<em>看起来蓝还很多</em>。",
      "a": "问题最可能在哪？",
      "o": [
        "控制链不够长",
        "爆发没对齐——控制链接上了但三个爆发没同时落下",
        "伤害不够",
        "对面治疗太强"
      ],
      "r": 1,
      "e": [
        "连续三轮都接上，说明控制链本身没问题。",
        "正解。<b>控制链接上但杀不掉，最常见的原因是三个爆发没落在同一个窗口里。</b>如果贼的暗影之舞和猎人的百发百中错开了几秒，对面治疗只需要分别应付两波中等伤害——<b>而分别应付他扛得住，这也解释了为什么他的蓝还很多（他没被逼着交大牌）。</b>",
        "三个人的伤害在 3v3 是够的，问题在集中度不在总量。",
        "\"对面太强\"不是可操作的结论。"
      ],
      "k": "控制链接上却杀不掉，先查爆发对齐，不是加控制或加伤害。"
    },
    {
      "id": "p8",
      "w": "p",
      "d": 2,
      "s": "你的 <sk>驱散魔法</sk> 好了。对面治疗身上有一个增益，对面的一个 DPS 身上也有一个爆发增益。",
      "a": "驱散哪个？",
      "o": [
        "治疗的，削弱他的治疗能力",
        "DPS 的爆发增益——那直接减少你们受到的伤害",
        "都驱散",
        "看哪个更容易"
      ],
      "r": 1,
      "e": [
        "削弱治疗有价值，但<b>爆发增益是有时限的，错过就没了</b>，而治疗的增益通常可以重新上。",
        "正解。<b>驱散优先级看\"这个增益接下来几秒会造成多大影响\"。</b>DPS 的爆发增益意味着<b>接下来几秒你们要吃的伤害会大幅增加</b>——驱散它等于直接减少伤害，而且这个窗口错过就没了。<b>治疗的增益通常持续时间长、可重新施放，优先级更低。</b>",
        "驱散有冷却，不能都驱。",
        "难易不是判据，影响大小才是。"
      ],
      "k": "驱散优先级看\"接下来几秒的影响\"。有时限的爆发增益优先于可重新上的常态增益。"
    },
    {
      "id": "p9",
      "w": "p",
      "d": 1,
      "s": "贼喊\"这一轮我当杀手，猎人锁治疗\"。",
      "a": "你该默认承担什么角色？",
      "o": [
        "杀手，多打伤害",
        "接手——接第二环控制 + 处理对面第三人 + 应急",
        "锁匠，帮猎人多控一层",
        "自由发挥"
      ],
      "r": 1,
      "e": [
        "三个人不能都当杀手，而且你的爆发上限最低。",
        "正解。<b>贼和猎人分走了锁匠和杀手，接手就是你。</b>这也正是牧师最适合的角色：<b>你本来就要盯全场，而且戒律牧的输出不需要停下来（救赎让输出＝治疗），可以边输出边随时应急。</b><b>接手 = 第二环控制 + 对面第三人 + 突发处理。</b>",
        "两个人锁同一个治疗是浪费，而且可能吃递减。",
        "\"自由发挥\"就是没有角色，3v3 里等于三个人各干各的。"
      ],
      "k": "贼和猎人分走前两个角色时，牧师默认是接手。这也是他最适合的角色。"
    },
    {
      "id": "h6",
      "w": "h",
      "d": 2,
      "s": "你是这一轮的杀手，开了 <sk>百发百中</sk>。贼在控治疗，牧师在接应。",
      "a": "你该专注什么？",
      "o": [
        "一边输出一边帮忙控制",
        "全力输出击杀目标，其他交给队友",
        "优先保护自己",
        "输出的同时盯着全场"
      ],
      "r": 1,
      "e": [
        "分心控制会降低你的输出，<b>而这一轮你的输出就是团队的击杀手段。</b>",
        "正解。<b>角色分配的意义是让每个人专心做一件事。</b>你是杀手就全力输出——<b>锁匠和接手会处理控制和突发</b>。<b>猎人当杀手的最大优势正是\"远程且稳定\"：不需要贴身，被打断风险最低，可以心无旁骛地输出。</b>",
        "保护自己是次要的（你自保工具最全），这一轮你的任务是输出。",
        "\"盯全场\"是接手的职责，不是杀手的。"
      ],
      "k": "分配了角色就专心。猎人当杀手的优势是远程稳定，能心无旁骛地输出。"
    },
    {
      "id": "h7",
      "w": "h",
      "d": 3,
      "s": "你布的 <sk>冰冻陷阱</sk> 位置很好，但对面治疗<em>一直不往那边走</em>。你们的爆发快好了。",
      "a": "该怎么办？",
      "o": [
        "继续等他走进去",
        "让队友把他\"赶\"过去——用位移威胁或走位逼他移动",
        "换个位置重新布",
        "放弃陷阱，用别的控制"
      ],
      "r": 1,
      "e": [
        "干等会浪费你们即将转好的爆发窗口。",
        "正解。<b>陷阱是被动的，但你们可以主动创造触发条件。</b>让贼从另一侧威胁他、或者让牧师的位置逼他后退——<b>把他往陷阱的方向赶</b>。这是 3v3 才有的战术（2v2 人手不够）。<b>好的陷阱位不只是\"选对地方\"，还包括\"制造他必须去那里的理由\"。</b>",
        "重新布会浪费冷却，而且他可能还是不去。",
        "放弃太早，你有队友可以配合。"
      ],
      "k": "陷阱是被动的，但触发条件可以主动创造。三个人可以把目标往陷阱方向赶。"
    },
    {
      "id": "h8",
      "w": "h",
      "d": 2,
      "s": "对面爆发打你们的贼。贼有 <sk>消失</sk>、<sk>暗影斗篷</sk>、<sk>闪避</sk> 都在。你的 <sk>牺牲咆哮</sk> 也可用。",
      "a": "交不交牺牲咆哮？",
      "o": [
        "交，保队友总没错",
        "先不交——贼的自保是三个人里最强的，留给牧师",
        "交，同时让贼也交",
        "看贼的血量"
      ],
      "r": 1,
      "e": [
        "<b>贼的自保工具是三个人里最全的</b>，为他交掉你唯一的外部保命是浪费。",
        "正解。<b>外部保命要留给最需要的人。</b>三个人的自保能力排序：<b>猎人 ≈ 贼 &gt; 牧师</b>。贼有三张自保牌全在，他自己能处理。<b><sk>牺牲咆哮</sk> 应该留给牧师</b>——他自保最弱，而且他死了全队就完了。",
        "两个一起交是双重浪费。",
        "血量是判据之一，但<b>更根本的是\"他自己有没有解法\"</b>——他三张牌都在，血量还没到需要外部介入的程度。"
      ],
      "k": "外部保命留给自保最弱的人。贼的自保最全，通常不需要你的牺牲咆哮。"
    },
    {
      "id": "h9",
      "w": "h",
      "d": 3,
      "s": "对面是<em>恢复德 + 两个 DPS</em>，你们的控制链连续被形态切换化解。",
      "a": "你的陷阱该怎么调整？",
      "o": [
        "继续布给治疗，多试几次",
        "改布给对面的一个 DPS——治疗锁不住就换目标",
        "放弃用陷阱",
        "布在自己脚下防身"
      ],
      "r": 1,
      "e": [
        "恢复德能用形态切换和瞬发手段规避，<b>重复尝试只会浪费陷阱冷却</b>。",
        "正解。<b>锁不住治疗时，正确做法是换目标不是加大力度。</b>把陷阱布给对面的一个 DPS——<b>控住一个 DPS，然后三个人集火另一个</b>。DPS 通常比难锁的治疗好杀，而杀掉一个 DPS 同样能赢。<b>你的陷阱是可预先布置的，改目标的成本比其他控制低得多。</b>",
        "放弃陷阱等于放弃你最独特的工具。",
        "防身是次要用途，浪费了战术价值。"
      ],
      "k": "治疗锁不住就把控制改喂给 DPS。陷阱改目标的成本最低，猎人应该带头做这个调整。"
    },
    {
      "id": "b9",
      "w": "b",
      "d": 2,
      "s": "开场了。三个人都想先看看情况再决定这一轮怎么打。",
      "a": "这个做法有什么问题？",
      "o": [
        "没问题，谨慎一点好",
        "3v3 的沟通复杂度太高，临场决定来不及——角色必须开场前定",
        "应该更激进",
        "应该让贼决定"
      ],
      "r": 1,
      "e": [
        "谨慎不等于不准备。<b>\"看看情况\"在 3v3 通常意味着三个人各自看到不同的东西，然后做出不一致的动作。</b>",
        "正解。<b>3v3 有三对关系加一个整体，沟通复杂度是 2v2 的三倍。</b>临场喊\"我控这个\"、\"你打那个\"，等说完窗口已经过去了。<b>角色和目标必须在开场前定好，场上只做微调。</b>这也是 Icy Veins 说\"敏锐贼只在围绕 setup 的组合里使用\"的意思——<b>setup 就是预设套路，不是临场发挥。</b>",
        "激进程度不是这题的问题。",
        "让一个人决定可以，但<b>关键是\"事先\"决定，不是\"谁\"决定</b>。"
      ],
      "k": "3v3 靠预设套路不靠临场发挥。角色和目标开场前定，场上只做微调。"
    },
    {
      "id": "b10",
      "w": "b",
      "d": 3,
      "s": "你们打出了一次完美的控制链，但对面<em>三个人都交了解控道具</em>逃脱了。",
      "a": "该怎么看这一轮？",
      "o": [
        "失败了，白忙一场",
        "大赚——三张道具换你们一轮控制，下一轮他们全裸",
        "平手",
        "应该更快出伤害"
      ],
      "r": 1,
      "e": [
        "用\"有没有杀掉\"评价单轮，会让你在下一轮做出更急躁的决定。",
        "正解。<b>解控道具是整局最贵的一次性资源，而且冷却极长。</b>你们花掉的是可再生的控制冷却，<b>换来对面三个人在接下来很长时间里完全没有解控手段</b>。<b>下一轮同样的控制链，他们挣脱不了。</b>记住这个信息，那是你们真正的击杀窗口。",
        "不是平手。你们的消耗可再生，他们的不可再生。",
        "出伤害更快是操作层面，但这题的关键是<b>怎么评价这一轮的收益</b>。"
      ],
      "k": "逼出解控道具本身就是巨大收益。用\"杀没杀掉\"评价单轮，会错过真正的胜负节点。"
    },
    {
      "id": "b11",
      "w": "b",
      "d": 2,
      "s": "你们三个人的爆发都好了，控制链也准备好了。但<em>对面治疗刚交完一个大保命，还在生效中</em>。",
      "a": "现在开吗？",
      "o": [
        "开，控制链和爆发都齐了",
        "等——他的保命在生效，你们的窗口会被它吃掉",
        "开，但只用一半资源",
        "换目标"
      ],
      "r": 1,
      "e": [
        "两个条件齐了，但<b>漏掉了第三个：目标那边的状态</b>。",
        "正解。<b>开窗口的条件不只是\"我们准备好了\"，还包括\"对面没准备好\"。</b>治疗的大保命还在生效时，你们的完美 setup 会被它吃掉一大半——<b>而这种 setup 不常有</b>。<b>等他的保命走完（通常就几秒），再开。</b>",
        "\"一半资源\"会让控制链和爆发都不完整，两边不讨好。",
        "换目标可能对，但前提是另一个目标的条件更好——<b>而这题的关键是理解\"要看对面的状态\"</b>。"
      ],
      "k": "开窗口要看两边：我们齐不齐，以及对面有没有正在生效的保命。"
    },
    {
      "id": "b12",
      "w": "b",
      "d": 1,
      "s": "比较一下：2v2 贼牧 和 3v3 贼牧猎，最核心的区别是什么？",
      "a": "哪个说法最准确？",
      "o": [
        "3v3 伤害更高，杀得更快",
        "2v2 赢在伤害叠在一起，3v3 赢在控制接成链",
        "3v3 更容易，因为人多",
        "没有本质区别，3v3 就是多一个人"
      ],
      "r": 1,
      "e": [
        "伤害确实更高，但那不是\"核心区别\"——<b>它是结果，不是原因</b>。",
        "正解。<b>2v2 的核心矛盾是\"够不够疼\"</b>：一个 DPS 打不穿一个治疗，所以两个人的伤害必须叠在一起。<b>3v3 的核心矛盾是\"对面治疗有没有被锁住足够久\"</b>：伤害绝对够了，问题变成控制。<b>这个转变决定了两种赛制完全不同的准备方式和判断重点。</b>",
        "人多也意味着沟通复杂度是平方级上涨，不见得更容易。",
        "有本质区别——连天赋分布实测数据都不一样。"
      ],
      "k": "2v2 的矛盾是伤害够不够，3v3 的矛盾是控制锁不锁得住。这决定了两种赛制的准备重点完全不同。"
    },
    {
      "id": "x1",
      "w": "r",
      "d": 3,
      "s": "【贼】猎人的 <sk>冰冻陷阱</sk> <em>已经控住对面治疗</em>（失能类）。你要接第二环。手上：<sk>肾击</sk>（满连击点）、<sk>闷棍</sk>、<sk>致盲</sk>、<sk>凿击</sk>。",
      "a": "接哪个、对谁？",
      "o": [
        "<sk>致盲</sk> → 对面治疗",
        "<sk>肾击</sk> → 对面治疗",
        "<sk>闷棍</sk> → 对面治疗",
        "<sk>凿击</sk> → 对面治疗"
      ],
      "r": 1,
      "e": [
        "<sk>致盲</sk> 跟陷阱<b>同为失能类</b>，接上去只剩一半时长——而且它受伤即破，你们正在输出。",
        "正解。<b>陷阱是失能类，<sk>肾击</sk> 是眩晕类——跨类别不吃递减，满时长。</b>而且眩晕不受伤害影响，你们可以放心继续输出。<b>更完整的三环链是：陷阱（失能）→ <sk>心灵尖啸</sk>（恐惧）→ <sk>肾击</sk>（眩晕），三个类别三段满时长。</b>",
        "<sk>闷棍</sk> 只能对<b>脱战</b>目标使用，战斗中按不出来，而且同为失能类。",
        "<sk>凿击</sk> 是致残类（不吃失能递减），但时长很短且受伤即破——在你们全力输出时它撑不住。"
      ],
      "k": "控制链要跨类别接。陷阱之后用眩晕类，别用同为失能类的致盲/闷棍。"
    },
    {
      "id": "x2",
      "w": "h",
      "d": 2,
      "s": "【猎人】贼喊\"我要控对面治疗了\"。你正在全力输出<em>那个治疗</em>，你的<em>宠物也在打他</em>。",
      "a": "完整的响应是什么？",
      "o": [
        "停止自己的输出",
        "停手 + 召回宠物或给宠物改设目标",
        "继续打，控制会先生效",
        "把宠物切到另一个目标就行"
      ],
      "r": 1,
      "e": [
        "<b>宠物不会因为你停手就停</b>——它会继续自动攻击，一下平砍就破掉失能类控制。",
        "正解。<b>\"停手\"对猎人是两个动作。</b>宠物是 3v3 里最容易被忘的破控源——<b>贼和牧师只需要管自己，你要管两个单位</b>。这是猎人在这个组合里最需要养成的习惯。",
        "控制和伤害的先后不可控，赌不得。",
        "<b>方向对但不完整</b>——改设目标是可行的做法之一，但选项 2 把\"自己停 + 处理宠物\"这个完整动作说清楚了。只切宠物不停自己的输出，一样会破控。"
      ],
      "k": "猎人的\"停手\"是两个动作：自己停 + 处理宠物。宠物不会自己停。"
    },
    {
      "id": "x3",
      "w": "p",
      "d": 2,
      "s": "【牧师】三环控制链已经把对面治疗锁住，贼和猎人都在爆发输出击杀目标。<em>对面第三个人（没被控的 DPS）开始打猎人</em>。",
      "a": "你该做什么？",
      "o": [
        "给猎人加治疗",
        "处理那个 DPS——这是接手的核心职责",
        "继续输出击杀目标",
        "让贼回来处理"
      ],
      "r": 1,
      "e": [
        "治疗是补救。<b>而且猎人是这一轮的杀手，他被干扰＝你们的伤害少了一大块。</b>",
        "正解。<b>「接手」的核心职责就是对面没被控的第三人。</b>锁匠在控治疗、杀手在输出，<b>只有你有余力应付他</b>。这正是 Icy Veins 说\"控住每一个人\"的执行方式——不是三个人都去控治疗，是<b>三个角色各管一摊</b>。",
        "你的输出收益小于让杀手不被干扰。",
        "贼在控治疗或在输出，回来等于打断第一环或放弃伤害。"
      ],
      "k": "接手的核心职责是对面没被控的第三人。锁匠和杀手都腾不出手，只有你能管。"
    },
    {
      "id": "x4",
      "w": "h",
      "d": 3,
      "s": "【猎人】你布的 <sk>冰冻陷阱</sk> 位置很好，但对面治疗<em>一直不往那边走</em>。你们三个人的爆发<em>还有约 10 秒转好</em>。",
      "a": "这 10 秒该做什么？",
      "o": [
        "干等他走进陷阱",
        "让队友配合把他\"赶\"过去——用位移威胁或走位逼他移动",
        "换个位置重新布陷阱",
        "放弃陷阱，改用其他控制"
      ],
      "r": 1,
      "e": [
        "干等会让你们的爆发窗口在没有控制配合的情况下到来。",
        "正解。<b>陷阱是被动触发的，但触发条件可以主动创造。</b>让贼从另一侧威胁他、或者让牧师的位置逼他后退——<b>把他往陷阱方向赶</b>。这是 3v3 才有的战术（2v2 人手不够）。<b>好的陷阱位不只是\"选对地方\"，还包括\"制造他必须去那里的理由\"。</b>",
        "重新布浪费冷却，而且他可能还是不去。",
        "你有 10 秒和两个队友，放弃太早。"
      ],
      "k": "陷阱是被动的，但触发条件可以主动创造。三个人可以把目标往陷阱方向赶。"
    },
    {
      "id": "x5",
      "w": "b",
      "d": 2,
      "s": "你们锁住了对面治疗，三个人集火目标。目标按下 <sk>剑在人在</sk>（<em>免疫物理伤害</em>），血量 <em>35%</em>。",
      "a": "谁应该继续打？",
      "o": [
        "三个人都停手",
        "牧师继续打（暗影伤害是法伤，照进），贼和猎人转火或等",
        "只有猎人继续",
        "三个人都继续，能打穿一部分"
      ],
      "r": 1,
      "e": [
        "全停是过度反应——<b>三个人的伤害类型不同，总有一个能打进去。</b>",
        "正解。<b>三种不同的伤害类型是这个组合的隐藏优势。</b><sk>剑在人在</sk> 免疫物理：<b>贼几乎全是物理（几乎打不动），猎人的伤害有物理成分（大幅打折），但牧师的暗影伤害是纯法伤，照常进去</b>。<b>收人前先看他免的是什么，然后让能打进去的人继续。</b>",
        "猎人的伤害有相当部分是物理，受影响明显。",
        "免疫是完全免疫（对物理），不是减伤。"
      ],
      "k": "看免疫要对照三个人各自的伤害类型。总有一个人能打进去，别集体停手。"
    },
    {
      "id": "x6",
      "w": "r",
      "d": 3,
      "s": "【贼】你是这一轮的杀手，猎人当锁匠。你的爆发都好了，控制链也接上了。但此刻你注意到<em>猎人的 <sk>百发百中</sk> 还在冷却</em>，牧师的 <sk>能量灌注</sk> 也没好。",
      "a": "开还是等？",
      "o": [
        "开，控制链难得接上",
        "等——三个爆发不齐，用完美 setup 换不完整的伤害是亏的",
        "开，让牧师把能量灌注留到下一轮",
        "开一半资源"
      ],
      "r": 1,
      "e": [
        "控制链确实难得，<b>但正因为难得，才不该用它换一次不完整的爆发</b>。",
        "正解。<b>3v3 的完美 setup 是稀缺资源，三个爆发必须落在同一个控制窗口里。</b>缺一个爆发通常就打不穿——<b>而你会同时浪费掉控制链和已有的爆发</b>。宁可再等十几秒。<b>这跟\"控制链要跟爆发对齐\"是同一条原则。</b>",
        "能量灌注是伤害加成，它没好就意味着这一轮的伤害峰值不足。",
        "拆开用会让控制链和爆发都不完整。"
      ],
      "k": "三个爆发要落在同一个控制窗口。缺一个就等，别用不完整的爆发换掉完美 setup。"
    },
    {
      "id": "x7",
      "w": "p",
      "d": 3,
      "s": "【牧师】对面爆发打你们的贼。猎人问要不要交 <sk>牺牲咆哮</sk>，你的 <sk>痛苦压制</sk> 也在，贼自己的 <sk>暗影斗篷</sk> 和 <sk>闪避</sk> <em>都还没交</em>。",
      "a": "怎么安排？",
      "o": [
        "你先交痛苦压制",
        "让贼先用自己的牌——他的自保是三个人里最全的",
        "让猎人先交牺牲咆哮",
        "三个一起交"
      ],
      "r": 1,
      "e": [
        "贼手上还有两张自保牌没用，<b>这时候消耗团队的外部保命是浪费</b>。",
        "正解。<b>外部保命要留给\"自己没有解法\"的人。</b>三个人的自保能力排序：<b>猎人 ≈ 贼 &gt; 牧师</b>。贼有 <sk>暗影斗篷</sk>（对法系爆发）和 <sk>闪避</sk>（对物理）都没交——<b>让他先按对伤害类型的那一张</b>。团队的外部保命留给你自己（自保最弱）或者贼的牌用完之后。",
        "同理，猎人的牌也该省下来。",
        "三个一起交是最大的浪费，对面第二波来时你们就裸了。"
      ],
      "k": "外部保命留给自己没有解法的人。队友自己的牌没用完之前，别消耗团队资源。"
    },
    {
      "id": "x8",
      "w": "h",
      "d": 2,
      "s": "【猎人】对面是<em>双近战 + 治疗</em>，两个近战分别压着你们的牧师和贼。你的 <sk>焦油陷阱</sk>、<sk>束缚射击</sk>、<sk>震荡射击</sk> 都可用。",
      "a": "哪个最有价值？",
      "o": [
        "<sk>震荡射击</sk> → 压牧师的那个",
        "<sk>焦油陷阱</sk> 或 <sk>束缚射击</sk> → 能同时影响两个近战的位置",
        "<sk>牺牲咆哮</sk> → 牧师",
        "全力输出，速战速决"
      ],
      "r": 1,
      "e": [
        "单体减速只处理一个，<b>另一个还在压</b>。",
        "正解。<b>多近战对局，猎人的群体减速/控制是解法核心——这是贼做不到的（他的控制都是单体）。</b><sk>焦油陷阱</sk> 和 <sk>束缚射击</sk> 能同时影响多个目标。<b>分工是：贼负责精确剥离一个，你负责整体拖慢，牧师负责活着。</b>",
        "<sk>牺牲咆哮</sk> 是好牌，但它只减伤不解决\"两个近战都在压\"这个位置问题。",
        "被压制时输出效率很低，而且解决不了根本问题。"
      ],
      "k": "多近战对局，猎人的群体减速是解法核心。单体控制交给贼，你负责整体拖慢。"
    },
    {
      "id": "x9",
      "w": "b",
      "d": 2,
      "s": "你们连续两轮控制链都被打破：<em>第一次是牧师的持续伤害，第二次是猎人的宠物</em>。",
      "a": "该怎么修？",
      "o": [
        "下次更小心一点",
        "建立固定的确认流程：贼喊控 → 牧师确认停手且持续伤害掉完 → 猎人确认宠物已处理",
        "换控制手段",
        "让贼别控治疗了"
      ],
      "r": 1,
      "e": [
        "\"更小心\"不是可执行的改进，<b>同样的错误会再犯</b>——事实上已经犯了两次。",
        "正解。<b>3v3 的破控源有三个（贼自己的溅射、牧师的持续伤害、猎人的宠物），靠临场注意不可靠。</b>要建立<b>固定的三步确认流程</b>。<b>这是这个组合最值得花时间练的一件事——修好它，击杀率立刻上一档。</b>",
        "换手段不解决\"有人破控\"这个根本问题。",
        "不控治疗等于放弃这个组合的核心打法。"
      ],
      "k": "重复出现的失误要用流程修，不是用\"更小心\"修。3v3 的破控源有三个，都要进清单。"
    },
    {
      "id": "x10",
      "w": "b",
      "d": 3,
      "s": "你们打出一次完美控制链，但对面<em>三个人都交了解控道具</em>逃脱了，一个都没杀掉。",
      "a": "该怎么评价这一轮？",
      "o": [
        "失败了，白忙一场",
        "大赚——三张道具换你们一轮冷却，下一轮同样的链他们挣脱不了",
        "平手，各有消耗",
        "说明控制链设计有问题"
      ],
      "r": 1,
      "e": [
        "用\"有没有杀掉\"评价单轮，会让你在下一轮做出更急躁的决定。",
        "正解。<b>解控道具是整局最贵的一次性资源，冷却极长。</b>你们花掉的是可再生的控制冷却，<b>换来对面三个人在很长一段时间里完全没有解控手段</b>——<b>下一轮同样的控制链，他们挣脱不了</b>。记住这个信息，那才是你们真正的击杀窗口。",
        "不是平手：你们的消耗可再生，他们的不可再生。",
        "控制链成功执行了，设计没问题。"
      ],
      "k": "逼出解控道具本身就是巨大收益。用\"杀没杀掉\"评价单轮，会错过真正的胜负节点。"
    },
    {
      "id": "x11",
      "w": "b",
      "d": 2,
      "s": "开场前，贼说\"我这轮当杀手\"，猎人说\"我布陷阱控治疗\"。",
      "a": "牧师默认承担什么？",
      "o": [
        "杀手，多打伤害",
        "接手——第二/三环控制 + 对面第三人 + 突发",
        "锁匠，帮猎人多控一层",
        "自由发挥"
      ],
      "r": 1,
      "e": [
        "三个人不能都当杀手，而且牧师的爆发上限最低。",
        "正解。<b>贼和猎人分走了杀手和锁匠，接手就是牧师。</b>这也正是他最适合的角色：<b>本来就要盯全场，而且戒律牧的输出不需要停下来（救赎让输出＝治疗），可以边输出边随时应急。</b>",
        "两个人锁同一个治疗是浪费，而且可能吃递减。",
        "\"自由发挥\"就是没有角色，3v3 里等于三个人各干各的。"
      ],
      "k": "贼和猎人分走前两个角色时，牧师默认是接手。这也是他最适合的角色。"
    },
    {
      "id": "x12",
      "w": "r",
      "d": 2,
      "s": "【贼】你和猎人都能当这一轮的锁匠。对面治疗<em>站在开阔地、离掩体很远</em>。",
      "a": "谁来锁更好？",
      "o": [
        "你，<sk>闷棍</sk>/<sk>致盲</sk> 更干净",
        "猎人——他能远距离布陷阱，你要跑过去会暴露",
        "都行，看谁先动",
        "让牧师锁"
      ],
      "r": 1,
      "e": [
        "控制干净是优点，<b>但你要从潜行接近，开阔地意味着路径长且容易被发现</b>。",
        "正解。<b>锁匠人选要看\"谁能更低成本地把控制送到\"。</b>治疗在开阔地远离掩体，<b>猎人可以在安全距离布陷阱，成本几乎为零</b>；你跑过去可能被发现、被打断、或暴露开场意图。<b>角色分配不是固定的，要看场地和位置。</b>",
        "成本差别很大，不是\"都行\"。",
        "牧师只有一个控制，是最后的选择。"
      ],
      "k": "锁匠人选看\"谁送控制的成本更低\"。位置和地形会改变角色分配。"
    }
  ]
};
