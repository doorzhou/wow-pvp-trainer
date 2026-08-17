/* 内容模块 · rmp-3v3
   主线：RMP 的窗口是共享的 —— 贼开窗，贼和法师都要在这扇窗里把伤害打完。
   跟 Thug Cleave（控制链接不接得上）是两个问题，别写成同一页。
   这是构建期输入，不会发给浏览器。改内容改这里，然后跑 node build.js
   题目 51 道 · 对阵 6 条 · 技能 62 个 */
const { PATCH, SEASON } = require('../config.js');

module.exports = {
  "meta": {
    "title": "RMP 3v3 组合训练 · 12.1 Midnight",
    "desc": "魔兽世界 12.1 RMP（贼/法/牧）3v3 三视角配合训练。RMP 的窗口是共享的——贼开窗，贼和法师都要在这扇窗里把伤害打完。含失能类递减详解、八步击杀链、六种对局分解与 51 道判断题。",
    "keywords": "RMP,贼法牧,3v3,竞技场,魔兽世界,12.1,Midnight,rogue mage priest,arena",
    "h1": "RMP · 贼 + 法 + 牧 3v3",
    "footer": "Patch 12.1 · Midnight 赛季一。技能名与图标： <a href=\"https://www.wowhead.com\" target=\"_blank\">Wowhead</a> 官方数据接口。组合定位 <a href=\"https://www.icy-veins.com/wow/subtlety-rogue-pvp-best-arena-compositions\" target=\"_blank\">Icy Veins（Thug Cleave）</a> · 天赋数据 <a href=\"https://murlok.io/rogue/subtlety/3v3\" target=\"_blank\">Murlok.io</a>。<br><a href=\"index.html\">← 返回全部训练器</a> · <a href=\"index.html#legal\">数据来源与免责声明</a>",
    "jsonld": null
  },
  "nav": [
    {
      "s": "s1",
      "label": "骨架"
    },
    {
      "s": "s2",
      "label": "窗口"
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
    "s1": "<div class=\"wrap\">\n  <div class=\"thesis\"><div class=\"big\">RMP 的窗口是<b>共享</b>的。<br>\n    贼开窗，贼和法师<b>都要在这个窗口里把伤害打完</b>。</div>\n    <div class=\"quote\">Icy Veins 对敏锐贼的原话：「目前它只在<b>围绕 set-up 的组合</b>里出场，\n      因为它几乎没有持续伤害」（only played in comps revolving around set-ups）。\n      RMP 就是那个组合 —— <b>整支队伍靠一个人开的那扇窗吃饭。</b></div></div>\n\n  <h2>它跟 Thug Cleave 差在哪</h2>\n  <p class=\"lead\">同样是贼带牧的三人队，两页教的不是同一件事。<b>搞混了会用错判断。</b></p>\n  <div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"夺命射击\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"寒冰宝珠\" style=\"width:20px;height:20px\"></span><span class=\"t\">Thug Cleave 求「接得上」，RMP 求「对得齐」</span><span class=\"sub\">一个是链条问题，一个是时间问题</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Thug Cleave（贼/猎/牧）</b>：猎人的伤害是持续的，不依赖窗口。所以那一页的核心是<b>控制链接不接得上</b> —— 链断了就换个人接，伤害一直在走。</p><p><b>RMP（贼/法/牧）</b>：贼和法师<b>都</b>是爆发型，两个人的伤害都要落在同一扇窗里。<b>窗口是共享资源，两个人抢。</b></p><p>所以 RMP 会输在一个 Thug Cleave 不存在的地方：<b>窗口开了，但法师没准备好</b> —— 他在读变形、在被打断、或者他的爆发还在冷却。这时候贼一个人的伤害打不穿治疗，窗口就空转了。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"闷棍\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"变形术\" style=\"width:20px;height:20px\"></span><span class=\"t\">这个组合最贵的一课：闷棍和变形术吃同一条递减</span><span class=\"sub\">开场之后你的变形只剩一半</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Icy Veins 法师页的原话：<b>「跟贼一起玩的时候记住，<sk>变形术</sk>和<sk>闷棍</sk>共享递减，你开场的变形会只有一半时长」</b>（Polymorph shares a diminishing return with Sap）。</p><p>为什么这条特别贵：<b>它把 RMP 的两个主力控制绑在了一起。</b>贼开场闷了治疗，法师想再变形第二个人 —— 时长砍半。而 Thug Cleave 里贼和猎人的控制虽然也会撞递减，但猎人还有<sk>胁迫</sk>这类不同类别的手段可以换。</p><p><b>RMP 的解法是顺序：</b>先变形，再闷棍；或者变形留给第二轮。两个都在开场用，等于自愿把其中一个减半。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰屏障\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"消失\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"渐隐术\" style=\"width:20px;height:20px\"></span><span class=\"t\">三个人的退路都很好，这不是优点</span><span class=\"sub\">容易打成三个人各自逃命</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>贼有<sk>消失</sk>、法师有<sk>寒冰屏障</sk>和<sk>操控时间</sk>、牧师有<sk>渐隐术</sk>。<b>RMP 是全场脱身手段最多的组合之一。</b></p><p>但这带来一个具体的坏习惯：<b>三个人都能跑，于是三个人分头跑</b> —— 跑散之后你们要重新做一次完整的 set-up，而对面只需要抓住落单的那个。</p><p><b>退路多的队伍要一起退。</b>这跟\"退路少所以不敢进\"是相反的问题，但代价一样。</p></div></div>\n  </div>\n\n  <h2>三个人的分工</h2>\n  <p class=\"lead\">RMP 的角色<b>不轮换</b> —— 这跟 Thug Cleave 不一样，那边三个人都能当锁匠。</p>\n  <div class=\"trio\">\n    <div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼 · 开窗的人</div>\n      <div class=\"txt\"><b>他决定这一轮什么时候开始。</b><sk>闷棍</sk>控住对面治疗那一刻，窗口就开了。\n        窗口有多长、够不够法师用完爆发，取决于他这一控干不干净。</div></div>\n    <div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师 · 窗口里的主伤害</div>\n      <div class=\"txt\"><b>他是这个组合的伤害上限，也是对面的首要目标。</b>\n        每读一次<sk>变形术</sk>他就少打一段 —— <b>控制和伤害在他这里是同一份预算。</b></div></div>\n    <div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师 · 保住法师</div>\n      <div class=\"txt\"><b>他的第一职责不是治疗量，是让法师活到窗口结束。</b>\n        法师一死，这个组合就没有伤害了 —— 贼一个人打不穿任何治疗。</div></div>\n    <div class=\"link\"><span class=\"lk\">耦合点</span><div>\n      <b>三个职责是一条因果链：贼开窗 → 法师在窗里输出 → 牧师保证法师能待在窗里。</b>\n      任何一环断了，另外两个人做的事都白费。</div></div>\n  </div>\n\n  <h2>开赛前先问三句</h2>\n  <div class=\"checks\" id=\"checks\"></div>\n</div>",
    "s2": "<div class=\"wrap\">\n  <p class=\"lead\">窗口从<b>对面治疗被控住</b>那一刻开始，到<b>他能重新治疗</b>为止。\n    这段时间三个人要做完所有事 —— <b>它比你以为的短</b>。</p>\n\n  <h2>递减规则：你们的窗口预算</h2>\n  <div class=\"drt\" id=\"drtable\"></div>\n\n  <h2>窗口为什么比预期短</h2>\n  <div class=\"rows\" id=\"chainfail\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">八步，三栏同时看。中间的「耦合点」是这三件事为什么必须配套。</p>\n  <div class=\"stepper\" id=\"stepBody\"></div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <p class=\"lead\">RMP 的防守重心跟大多数组合不同：<b>要保的不是治疗，是法师。</b></p>\n  <div class=\"rows\" id=\"defense\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <p class=\"lead\">3v3 按<b>对面的结构</b>分。RMP 的核心问题只有一个：\n    <b>你们能不能做出一次完整的 set-up。</b></p>\n  <div class=\"split\">\n    <div class=\"sidecol\"><div class=\"cls-grid\" id=\"clsGrid\"></div></div>\n    <div class=\"cdetail\" id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s6": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fWho\">\n      <option value=\"cur\">跟随当前视角</option>\n      <option value=\"all\">三个视角都练</option>\n      <option value=\"rogue\">只练贼</option>\n      <option value=\"priest\">只练牧师</option>\n      <option value=\"hunter\">只练法师</option>\n    </select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s7": "<div class=\"wrap\">\n  <p class=\"lead\">一人一栏。三个人各看一遍另外两栏。</p>\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"闷棍\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"变形术\" style=\"width:20px;height:20px\"></span><span class=\"t\">窗口时钟 · 失能类递减</span><span class=\"sub\">RMP 最紧张的一份预算</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>闷棍</sk>、<sk>致盲</sk>、<sk>变形术</sk><b>三个技能共享同一条递减</b>。而这三个是 RMP 全部的长控。</p><p><b>要记的不是\"我还有什么\"，是\"对面治疗身上还剩多少递减\"。</b>同一个人被失能两次之后，第三次只剩四分之一 —— 那点时间不够打完一套爆发。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰宝珠\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"暗影之舞\" style=\"width:20px;height:20px\"></span><span class=\"t\">爆发时钟 · 两套要对齐</span><span class=\"sub\">冷却长度不一样</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>贼的窗口冷却比法师的爆发短。<b>所以默认是贼等法师，不是法师追贼。</b></p><p>每一轮开打之前，这个问题必须有答案：<b>「法师的爆发好了吗」</b>。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰屏障\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"操控时间\" style=\"width:20px;height:20px\"></span><span class=\"t\">生存时钟 · 法师的牌要按顺序交</span><span class=\"sub\">一次全交等于没有第二次</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>法师有<sk>寒冰护体</sk>、<sk>寒冰屏障</sk>、<sk>操控时间</sk>、<sk>镜像</sk>——<b>全场最厚的一套保命牌</b>。</p><p>但它们只在<b>按顺序交</b>的时候才厚。一次全交的法师，跟没有保命牌的法师，活的时间差不多。</p></div></div>\n</div>",
    "setup": "<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"潜行\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"变形术\" style=\"width:20px;height:20px\"></span><span class=\"t\">RMP 是「设置型」组合</span><span class=\"sub\">Icy Veins 对敏锐贼的定性</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Icy Veins 原话：敏锐贼<b>「目前只在围绕 set-up 的组合里出场，因为它几乎没有持续伤害」</b>。</p><p>翻译成打法：<b>你们不是压着对面打，是准备一次、打一次。</b>准备包含三件事 —— 贼摸到位置、法师爆发好了、对面治疗能被控住。<b>三件事不齐就不该开。</b></p><p>这跟持续压制型组合的直觉相反：那些队伍开局就上，靠消耗磨。<b>RMP 开局可以什么都不做</b>，等一个成型的机会。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰宝珠\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"暗影之刃\" style=\"width:20px;height:20px\"></span><span class=\"t\">两套爆发要对齐</span><span class=\"sub\">这是 RMP 的核心操作</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>贼的<sk>暗影之舞</sk>/<sk>暗影之刃</sk>和法师的<sk>寒冰宝珠</sk>/<sk>冰冷血脉</sk><b>冷却长度不一样</b>。</p><p>意味着：<b>它们会自然错开，除非你们主动对齐。</b>错开的后果不是\"伤害少一半\"，是\"完全打不穿\" —— 一个人的爆发在任何一个称职的治疗面前都不够看。</p><p><b>对齐的办法是让先好的那个人等。</b>贼的窗口冷却短，通常是贼等法师。</p></div></div>\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"真言术：盾\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"灵魂护壳\" style=\"width:20px;height:20px\"></span><span class=\"t\">牧师在 RMP 里更像纯治疗</span><span class=\"sub\">跟 2v2 不一样</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Icy Veins 戒律牧页原话：3v3 里<b>「伤害太多，没法一直靠<sk>救赎</sk>安全地治疗」</b>，所以要<b>更像一个标准治疗，而不是混合支援</b>。</p><p>对 RMP 的具体影响：<b>牧师的输出优先级要往下调。</b>在 2v2 里他的伤害是压垮对面的最后一根稻草，在 RMP 里法师已经提供了足够的伤害 —— <b>牧师该把精力放在让法师活着。</b></p></div></div>\n</div>",
    "drtable": "<div class=\"drc\"><div class=\"dn\">失能类 · 你们最紧张的一条</div><div class=\"dl\"><sk>闷棍</sk> <sk>致盲</sk>（贼）· <sk>变形术</sk>（法）<br><b>受伤即破，而且这三个共享同一条递减</b>——RMP 全部的长控都挤在这里。</div></div><div class=\"drc\"><div class=\"dn\">眩晕类</div><div class=\"dl\"><sk>偷袭</sk> <sk>肾击</sk>（贼）</div></div><div class=\"drc\"><div class=\"dn\">恐惧类</div><div class=\"dl\"><sk>心灵尖啸</sk>（牧）<br><b>失能用光之后唯一满时长的控制</b></div></div><div class=\"drc\"><div class=\"dn\">定身 / 减速</div><div class=\"dl\"><sk>冰霜之环</sk> <sk>寒冰新星</sk> <sk>冰锥术</sk>（法）· <sk>凿击</sk>（贼）</div></div><div class=\"drc\"><div class=\"dn\">缴械 / 打断</div><div class=\"dl\"><sk>卸除武装</sk> <sk>脚踢</sk>（贼）· <sk>法术反制</sk>（法）</div></div>",
    "chainfail": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"变形术\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"闷棍\" style=\"width:20px;height:20px\"></span><span class=\"t\">① 开场同时用了闷棍和变形术</span><span class=\"sub\">这个组合最贵的一课</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>两个技能共享递减。</b>先闷棍再变形，第二个只剩一半；反过来也一样。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>闷棍</sk>控治疗之前<b>先问法师要不要变形</b>。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>你的<sk>变形术</sk>要么用在开场，要么留给第二轮</b>，别跟贼的闷棍挤在一起。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">两个都用掉之后，你的<sk>心灵尖啸</sk>是<b>唯一一个满时长的控制</b>——留着。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>失能类只有一条递减，三个人的四个技能都在抢它。</b>这是 RMP 最容易浪费的资源。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰宝珠\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"暗影之舞\" style=\"width:20px;height:20px\"></span><span class=\"t\">② 贼开窗了，法师的爆发还在冷却</span><span class=\"sub\">窗口空转</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>贼的<sk>暗影之舞</sk>和法师的<sk>寒冰宝珠</sk>/<sk>冰冷血脉</sk><b>冷却长度不一样</b>——不主动对齐，迟早会错开。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\">开窗之前<b>问一句法师好没好</b>。你的窗口比他的冷却便宜。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>你的爆发没好就说</b>，别让贼开一个只有他自己在打的窗口。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">这种时候你该<b>提醒而不是跟着输出</b>——半套爆发打不穿治疗，不如攒着。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>贼一个人的伤害打不穿任何治疗。</b>没有法师的窗口不是\"打得少一点\"，是\"完全打不动\"。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"法术反制\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"寒冰箭\" style=\"width:20px;height:20px\"></span><span class=\"t\">③ 法师在窗口里被打断了</span><span class=\"sub\">他的伤害要读条</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>寒冰箭</sk>、<sk>冰枪术</sk>都要读条。<b>对面一个打断，法师这一窗就废了一半。</b></p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>盯住对面的打断者</b>。<sk>卸除武装</sk>或<sk>脚踢</sk>能让他打断不了。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>假读条骗打断</b>是你必须会的基本功——先骗掉，再放真的。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>驱散魔法</sk>解掉法师身上的沉默或减速。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>法师的输出是有施法时间的，贼的不是。</b>所以保护打断窗口这件事，只对法师成立。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰屏障\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"痛苦压制\" style=\"width:20px;height:20px\"></span><span class=\"t\">④ 法师被集火，三个人同时去救</span><span class=\"sub\">救过头也是浪费</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>法师是对面的首要目标——Icy Veins 法师页原话：<b>「大多数对局里你就是那个被集火的」</b>（being the primary target most games）。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>你去控住抓他的那个人</b>，不是回来陪他挨打。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>先自救</b>：<sk>寒冰屏障</sk>、<sk>操控时间</sk>、<sk>镜像</sk>——你的保命牌比谁都多。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>痛苦压制</sk>给他，<b>但别把整套治疗都倒在这一下</b>。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>法师的保命牌是全场最多的，所以他挨打的默认答案是\"先自己顶\"。</b>三个人同时救，等于把整队的资源换他一个人的一次失误。</div></div></div></div></div>",
    "defense": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰屏障\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"操控时间\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"镜像\" style=\"width:20px;height:20px\"></span><span class=\"t\">法师被抓 —— 这是最要紧的一条</span><span class=\"sub\">他死了你们就没伤害了</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>这个组合大部分的失败从这里开始。</b>法师是伤害主体，也是对面的首选目标。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>去控抓他的人</b>，别回来陪站。你在他身边挨打不会让他更安全。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>按顺序交</b>：先<sk>寒冰护体</sk>和位移，再<sk>寒冰屏障</sk>，最后<sk>操控时间</sk>。一次全交等于没有第二次。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>真言术：盾</sk>先垫上，<sk>痛苦压制</sk>留给真正危险的那一下。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>法师的保命牌多到可以自己撑很久 —— 前提是他按顺序交。</b>一次全交的法师，和没有保命牌的法师，活的时间差不多。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"渐隐术\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"心灵尖啸\" style=\"width:20px;height:20px\"></span><span class=\"t\">牧师被抓</span><span class=\"sub\">你们有两个人可以救</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>RMP 的好消息：救牧师不只有贼一个人，法师的控制手段也够。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>致盲</sk>或<sk>肾击</sk>控住抓他的人。<b>如果你在窗口里且目标一击能死，先收完。</b></div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>冰霜之环</sk>或<sk>寒冰新星</sk>把追击的人钉住——<b>这不打断你的输出节奏</b>。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>渐隐术</sk>甩掉仇恨，<sk>真言术：障</sk>挡住法术伤害。<b>先自救再喊人。</b></div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>法师的定身是\"顺手\"的，贼的控制是\"要停手\"的。</b>所以这种情况优先让法师处理——他的机会成本更低。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"暗影斗篷\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"消失\" style=\"width:20px;height:20px\"></span><span class=\"t\">贼被抓</span><span class=\"sub\">三个人里他最不需要被救</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>贼有全场最好的自保</b>：<sk>暗影斗篷</sk>免疫法术、<sk>消失</sk>直接脱战、<sk>闪避</sk>挡物理。</p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>自己处理。</b>队友来救你，等于把他们的资源花在最不需要的地方。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\">继续输出。<b>贼被抓的时候，对面就没在打你了</b>——这是你的自由输出时间。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">继续保法师。<b>贼能自己回来，法师不能。</b></div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>三个人挨打的处置完全不同：法师要按顺序交牌、牧师要两个人帮、贼自己解决。</b>搞混这个顺序是 RMP 最常见的资源浪费。</div></div></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"寒冰屏障\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"暗影斗篷\" style=\"width:20px;height:20px\"><img class=\"ic\" data-sk=\"渐隐术\" style=\"width:20px;height:20px\"></span><span class=\"t\">三个人都想跑的时候</span><span class=\"sub\">退路多的队伍要一起退</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>RMP 是全场脱身手段最多的组合之一 —— <b>这带来一个具体的坏习惯：分头跑。</b></p><div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>消失</sk>脱战之后<b>去队友那边重新潜行</b>，不是去对角。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>闪现术</sk>的落点要<b>朝着队友</b>。你落单就是对面下一个目标。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>渐隐术</sk>之后<b>跟着法师走</b>。你俩分开，法师就没人保了。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>跑散之后你们要重新做一次完整的 set-up，而对面只需要抓住落单的那个。</b>这个组合退得起，但退散就赢不了。</div></div></div></div></div>",
    "sheet": "<div class=\"sheet\">\n  <div class=\"sc r\"><h4 class=\"tt\">🗡 贼 · 开窗的人</h4>\n    <div class=\"line\">1 · <b>开窗之前问法师好没好</b>。你的窗口比他的冷却便宜。</div>\n    <div class=\"line\">2 · <sk>闷棍</sk>和法师的<sk>变形术</sk>共享递减，<b>别挤在开场</b>。</div>\n    <div class=\"line\">3 · 控之前喊，让另外两个人停手（包括还在跳的持续伤害）。</div>\n    <div class=\"line\">4 · 队友被抓：先判断目标能不能一击收掉，再决定回不回。</div>\n    <div class=\"line\">5 · 你被抓：<b>自己处理</b>，别让队友来救。</div>\n  </div>\n  <div class=\"sc m\"><h4 class=\"tt\">❄ 法师 · 窗口里的主伤害</h4>\n    <div class=\"line\">1 · <b>你的控制和伤害是同一份预算</b>——每读一次变形就少打一段。</div>\n    <div class=\"line\">2 · <sk>变形术</sk>要么用在开场，要么留给第二轮，别跟闷棍撞。</div>\n    <div class=\"line\">3 · <b>假读条骗打断</b>是基本功，先骗掉再放真的。</div>\n    <div class=\"line\">4 · 挨打<b>按顺序交</b>：位移 → <sk>寒冰屏障</sk> → <sk>操控时间</sk>。</div>\n    <div class=\"line\">5 · 爆发没好就说出来，别让贼开一个空窗。</div>\n  </div>\n  <div class=\"sc p\"><h4 class=\"tt\">✚ 牧师 · 保住法师</h4>\n    <div class=\"line\">1 · <b>你的第一职责是让法师活到窗口结束</b>，不是治疗量。</div>\n    <div class=\"line\">2 · 贼喊控制就立刻停手，<b>包括<sk>暗言术：痛</sk></b>。</div>\n    <div class=\"line\">3 · <sk>心灵尖啸</sk>是失能类用光之后<b>唯一满时长的控制</b>，留着。</div>\n    <div class=\"line\">4 · 贼被抓不用救，<b>他自己有牌</b>。</div>\n    <div class=\"line\">5 · 撤的时候跟着法师走，别单独走。</div>\n  </div>\n</div>"
  },
  "sk": {
    "夺命射击": "ability_hunter_assassinate2",
    "变形术": "spell_nature_polymorph",
    "闷棍": "ability_sap",
    "胁迫": "ability_devour",
    "消失": "ability_vanish",
    "寒冰屏障": "spell_frost_frost",
    "操控时间": "spell_mage_altertime",
    "渐隐术": "spell_magic_lesserinvisibilty",
    "致盲": "spell_shadow_mindsteal",
    "寒冰护体": "spell_ice_lament",
    "镜像": "spell_magic_lesserinvisibilty",
    "暗影之舞": "ability_rogue_shadowdance",
    "暗影之刃": "inv_knife_1h_grimbatolraid_d_03",
    "寒冰宝珠": "spell_frost_frozenorb",
    "冰冷血脉": "spell_frost_coldhearted",
    "救赎": "ability_priest_atonement",
    "偷袭": "ability_cheapshot",
    "肾击": "ability_rogue_kidneyshot",
    "心灵尖啸": "spell_shadow_psychicscream",
    "冰霜之环": "spell_frost_ring-of-frost",
    "寒冰新星": "spell_mage_icenova",
    "冰锥术": "spell_frost_glacier",
    "凿击": "ability_gouge",
    "卸除武装": "ability_rogue_dismantle",
    "脚踢": "ability_kick",
    "法术反制": "spell_frost_iceshock",
    "寒冰箭": "spell_frost_frostbolt02",
    "冰枪术": "spell_frost_frostblast",
    "驱散魔法": "spell_nature_nullifydisease",
    "痛苦压制": "spell_holy_painsupression",
    "真言术：盾": "spell_holy_powerwordshield",
    "真言术：障": "spell_holy_powerwordbarrier",
    "暗影斗篷": "spell_shadow_nethercloak",
    "闪避": "spell_shadow_shadowward",
    "闪现术": "spell_arcane_blink",
    "暗言术：痛": "spell_shadow_shadowwordpain",
    "潜行": "ability_stealth",
    "棱光护体": "spell_magearmor",
    "惩击": "spell_holy_holysmite",
    "寒冰指": "ability_mage_wintersgrasp",
    "影分身": "ability_rogue_sinistercalling",
    "刺骨": "ability_rogue_eviscerate",
    "暗影打击": "ability_rogue_shadowstrike",
    "佯攻": "ability_rogue_feint",
    "烟雾弹": "ability_rogue_smoke",
    "疾跑": "ability_rogue_sprint",
    "暗影步": "ability_rogue_shadowstep",
    "冰风暴": "ability_deathknight_chillstreak",
    "彗星风暴": "spell_mage_cometstorm2",
    "冰霜新星": "spell_frost_frostnova",
    "法术吸取": "spell_arcane_arcane02",
    "解除诅咒": "spell_nature_removecurse",
    "苦修": "spell_holy_penance",
    "真言术：耀": "spell_priest_power-word",
    "全神贯注": "spell_holy_rapture",
    "摧心魔": "spell_shadow_soulleech_3",
    "能量灌注": "spell_holy_powerinfusion",
    "心灵震爆": "spell_shadow_unholyfrenzy",
    "群体驱散": "spell_arcane_massdispel",
    "纯净术": "spell_holy_dispelmagic",
    "快速治疗": "spell_holy_flashheal",
    "信仰飞跃": "priest_spell_leapoffaith_a",
    "灵魂护壳": "ability_shaman_astralshift"
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
      "卸除武装"
    ],
    "m": [
      "寒冰箭",
      "冰枪术",
      "冰风暴",
      "寒冰宝珠",
      "彗星风暴",
      "冰冷血脉",
      "冰锥术",
      "寒冰护体",
      "寒冰屏障",
      "冰霜新星",
      "闪现术",
      "操控时间",
      "镜像",
      "变形术",
      "法术反制",
      "法术吸取",
      "冰霜之环",
      "寒冰新星",
      "寒冰指",
      "棱光护体",
      "解除诅咒"
    ],
    "p": [
      "救赎",
      "真言术：盾",
      "苦修",
      "真言术：耀",
      "痛苦压制",
      "全神贯注",
      "摧心魔",
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
      "信仰飞跃",
      "灵魂护壳"
    ]
  },
  "cond": null,
  "verdicts": null,
  "steps": [
    [
      "开打之前：先确认法师好没好",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>你是开窗的人，但不是决定开不开的人。</b>问一句：法师的爆发好了吗？</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>好没好都要说出来。</b>你的<sk>寒冰宝珠</sk>和<sk>冰冷血脉</sk>冷却比贼的窗口长。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">看对面站位。<b>治疗跟队友挨得太近，贼就摸不进去。</b></div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>贼的窗口冷却短，法师的爆发冷却长 —— 所以默认是贼等法师。</b>反过来会让你们每隔几轮就浪费一个窗口。</div></div></div>",
      "寒冰宝珠"
    ],
    [
      "决定失能类怎么分：闷棍和变形术只能用一个",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b><sk>闷棍</sk>和法师的<sk>变形术</sk>共享递减。</b>你先控，他的变形就砍半。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>要么你开场变形，要么留给第二轮。</b>两个都挤在开场等于自愿减半。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\">记住这个决定 —— <b>失能类用光之后，你的<sk>心灵尖啸</sk>是唯一满时长的控制。</b></div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>这是 RMP 独有的一课。</b>Icy Veins 法师页专门写了这句：「跟贼一起玩的时候记住，<sk>变形术</sk>和<sk>闷棍</sk>共享递减」。</div></div></div>",
      "变形术"
    ],
    [
      "布置：贼摸位置，法师和牧师铺前置",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>潜行</sk>绕到能同时看见治疗和击杀目标的位置。<b>别急，位置不对就等。</b></div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>棱光护体</sk>先给自己。<b>你是首要目标，护盾要在开打前就在身上。</b></div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>真言术：盾</sk>给法师，<sk>暗言术：痛</sk>挂到击杀目标身上。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>这是三个人唯一从容的几秒。</b>窗口一开，法师要输出、牧师要保人，都没空铺了。</div></div></div>",
      "潜行"
    ],
    [
      "开窗：控住治疗，全队停手",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>闷棍</sk>或<sk>致盲</sk>控住对面治疗。<b>控之前喊，让另外两个人停手。</b></div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>停手包括还在飞的<sk>寒冰箭</sk></b>——已经出手的法术照样会破控。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><b>停手包括<sk>暗言术：痛</sk></b>这种还在跳的持续伤害。这是最容易忘的一个。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>受伤即破的控制，三个人里任何一个手滑都白搭。</b>而 RMP 的窗口全靠这一控撑着 —— 破了就没有第二个失能可用了（递减）。</div></div></div>",
      "闷棍"
    ],
    [
      "进窗：两套爆发同时压上",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>暗影之舞</sk>进场，<sk>偷袭</sk>控住击杀目标，<sk>暗影之刃</sk>全交。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>寒冰宝珠</sk>、<sk>冰冷血脉</sk>全交。<b>你是这一窗的伤害主体。</b></div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>惩击</sk>压一点伤害，<b>但主要精力放在盯着法师的血条</b>。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>两套爆发必须落在同一扇窗里。</b>错开的后果不是\"伤害少一半\"，是\"完全打不动\"——任何一个称职的治疗都顶得住单人爆发。</div></div></div>",
      "暗影之刃"
    ],
    [
      "窗口中段：处理对面第三人",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>凿击</sk>减速或<sk>卸除武装</sk>缴械，<b>别让他自由地救人</b>。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>冰霜之环</sk>或<sk>寒冰新星</sk>钉住他。<b>这不打断你的输出节奏。</b></div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>驱散魔法</sk>解掉他给治疗的关键增益。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>优先让法师处理第三人。</b>贼动手要中断输出，法师的定身是顺手的 —— 机会成本差一个数量级。</div></div></div>",
      "冰霜之环"
    ],
    [
      "窗口要关了：收得掉还是收不掉",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><b>目标一击能死就收完，半管血就准备撤。</b>你在窗口里看不清全局。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><b>报你还剩多少爆发时间。</b>窗口的长度由贼的控制决定，但能不能收掉由你的伤害决定。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><b>报对面治疗的状态</b>——他快解控了，就是该撤的信号。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>RMP 的窗口关上之后是真空期</b>：贼没有持续伤害，法师的爆发进冷却。这段时间你们打不动任何人，所以窗口结束就该脱战重来，别恋战。</div></div></div>",
      "刺骨"
    ],
    [
      "退：三个人一起退",
      "<div class=\"trio\"><div class=\"cR\"><div class=\"who\"><img src=\"assets/icons/classicon_rogue.jpg\" alt=\"\" onerror=\"this.style.display='none'\">贼</div><div class=\"txt\"><sk>消失</sk>脱战，<b>然后去队友那边重新潜行</b>——不是去对角。</div></div><div class=\"cM\"><div class=\"who\"><img src=\"assets/icons/classicon_mage.jpg\" alt=\"\" onerror=\"this.style.display='none'\">法师</div><div class=\"txt\"><sk>闪现术</sk>的落点<b>朝着队友</b>。你落单就是对面下一轮的目标。</div></div><div class=\"cP\"><div class=\"who\"><img src=\"assets/icons/classicon_priest.jpg\" alt=\"\" onerror=\"this.style.display='none'\">牧师</div><div class=\"txt\"><sk>渐隐术</sk>甩掉追击，<b>跟着法师走</b>。</div></div><div class=\"link\"><span class=\"lk\">耦合点</span><div><b>RMP 退路多，所以最容易犯的错是分头跑。</b>跑散之后你们要重新做一次完整的 set-up，而对面只需要抓住落单的那个。</div></div></div>",
      "消失"
    ]
  ],
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
        "one": "标准套路成立。窗口开得干净，两套爆发压进去就是击杀。",
        "threat": "这类治疗缺少免控、解控或形态切换手段，<b>你们的<sk>闷棍</sk>能把窗口开满</b>。剩下的问题只有一个：<b>两套爆发对没对齐。</b>",
        "r": "<sk>闷棍</sk>之前确认全队停手。<b>这个对局你的控制不会被拆，所以窗口质量全看你这一手干不干净。</b>",
        "m": "<b>把<sk>变形术</sk>留给第二轮。</b>开场贼已经用掉失能类了，你现在变形只有一半时长——不如把这几秒用来输出。",
        "p": "<sk>驱散魔法</sk>解掉对面治疗给队友的关键增益。<b>你的输出优先级在这个对局可以往上提一点</b>，因为法师不太需要你专职保护。",
        "l": "<b>好锁的对局，胜负只取决于你们的爆发对没对齐。</b>连续两轮对齐还杀不掉，说明目标选错了，换个人打。"
      },
      {
        "id": "hardlock",
        "n": "治疗难锁",
        "c": "var(--no)",
        "eg": [
          "恢复德（形态切换）",
          "奶萨（图腾破控）",
          "圣骑（免控 + 净化）"
        ],
        "one": "窗口开不满。别硬开，改成打对面的 DPS。",
        "threat": "<b>形态切换、破控图腾、免控和净化</b>会让你们的失能类控制失效——而 RMP 的窗口<b>完全依赖失能类</b>，没有替代手段。",
        "r": "<b>别把<sk>闷棍</sk>喂给治疗。</b>改成控住对面一个 DPS，三个人集火另一个——<b>换目标比换手段有效</b>。",
        "m": "<sk>变形术</sk>同理，用在 DPS 身上。<b>你的<sk>冰霜之环</sk>在这个对局价值更高</b>——把对面治疗和战场隔开，比控住他现实。",
        "p": "<b>你的驱散在这个对局价值最高</b>（对萨满图腾、骑士祝福尤其）。同时认清：<b>这局要打消耗</b>，法力管理比爆发时机重要。",
        "l": "<b>锁不住治疗时，正确做法是换目标不是加大力度。</b>RMP 打不出 set-up 就没有伤害，所以这个对局要早做决定，别耗到冷却都空转。"
      },
      {
        "id": "interrupt",
        "n": "对面打断多",
        "c": "var(--no)",
        "eg": [
          "萨满（风剪 + 图腾）",
          "死骑（窒息 + 反魔法）",
          "恶魔猎手（瓦解 + 咒符）"
        ],
        "one": "RMP 独有的坏对局：法师读不了条，你们的伤害主体就没了。",
        "threat": "<b>法师的伤害要读条，贼的不要。</b>所以对面的打断只对法师有效——这是 RMP 比 Thug Cleave 更怕打断的原因（猎人的伤害不读条）。",
        "r": "<b>你的活变成了保护法师的施法窗口。</b><sk>卸除武装</sk>、<sk>脚踢</sk>、<sk>肾击</sk>——优先花在对面的打断者身上，不是击杀目标身上。",
        "m": "<b>假读条骗打断是这个对局的核心技术。</b>先骗掉再放真的。同时多用瞬发（<sk>冰锥术</sk>、被<sk>寒冰指</sk>强化的<sk>冰枪术</sk>）。",
        "p": "<sk>驱散魔法</sk>解掉法师身上的沉默。<b>但注意大部分沉默不可驱散</b>——更实际的做法是提前给护盾，让他扛着打断也能站住。",
        "l": "<b>这个对局的胜负在\"法师能不能站着读完条\"，不在控制链。</b>贼要从\"输出者\"临时切换成\"保镖\"——这个角色切换是 RMP 最难的判断之一。"
      },
      {
        "id": "melee3",
        "n": "对面多近战",
        "c": "var(--warn)",
        "eg": [
          "双近战 + 治疗",
          "战士 + DK + 奶"
        ],
        "one": "法师被贴住就做不成 set-up。先解决距离问题。",
        "threat": "<b>近战贴住法师 = RMP 失去伤害来源。</b>而且近战的打断通常冷却很短，法师连读条都困难。",
        "r": "<b>你的控制要用在\"让法师有空间\"上。</b>把贴脸的那个控住，比你自己多打一轮伤害值钱。",
        "m": "<b>风筝是你的主要工作。</b><sk>冰霜之环</sk>、<sk>寒冰新星</sk>、<sk>冰锥术</sk>拉开距离——<b>这个对局你的减速和定身比爆发重要</b>。",
        "p": "<sk>心灵尖啸</sk>是你唯一的群体控制，<b>留给\"两个近战同时贴上法师\"的那一刻</b>。",
        "l": "<b>对面多近战时，RMP 的第一目标不是杀人，是让法师站得住。</b>法师有空间，伤害自然回来；没空间，控制链再干净也没用。"
      },
      {
        "id": "nohealer3",
        "n": "对面无治疗（三 DPS）",
        "c": "var(--warn)",
        "eg": [
          "三 DPS 爆发队"
        ],
        "one": "比谁的窗口先落地。你们的 set-up 慢，但更致命。",
        "threat": "<b>没有治疗意味着不用做 set-up 就能杀人</b>——对面会直接开爆发。你们准备的那几秒，可能已经死了一个。",
        "r": "<b>放弃标准流程。</b>不用控治疗（没有治疗），直接<sk>偷袭</sk>控住对面爆发最猛的那个。",
        "m": "<b>你的<sk>变形术</sk>现在是防御技能</b>——变掉正在爆发的那个人，比控住一个远程有价值得多。",
        "p": "<b>这个对局你要全职治疗。</b>没有对面治疗需要你去压，你的全部价值在于让队友活过对面的第一波。",
        "l": "<b>无治疗对局的判断反过来了：先活过对面的窗口，再谈自己的窗口。</b>RMP 的准备时间是劣势，但准备好之后的爆发也没人能救。"
      },
      {
        "id": "mirror3",
        "n": "镜像 / 其他 setup 队",
        "c": "var(--warn)",
        "eg": [
          "RMP vs RMP",
          "RMD",
          "其他围绕 set-up 的队伍"
        ],
        "one": "两边都在等一个成型的机会。先做出来的那个赢。",
        "threat": "<b>两边都不会主动压上</b>，所以这种局会拖很久。真正的分水岭是谁的失能类递减先用完。",
        "r": "<b>耐心。</b>你的<sk>闷棍</sk>是开局的钥匙，被对面贼先手闷了，你们这一轮就只能防守。<b>开局互相摸位置的阶段别急着现身。</b>",
        "m": "<b>盯住对面法师。</b>他跟你一样是伤害主体也是软肋——你的<sk>法术反制</sk>打断他的关键法术，价值高于多打一轮伤害。",
        "p": "<b>你的<sk>心灵尖啸</sk>可以打断对面整个 set-up。</b>看到对面贼现身、法师开始读条，就是交它的时候。",
        "l": "<b>镜像对局比的是耐心和失能类的管理。</b>先把失能类用完的那一队，后面就只能靠眩晕和恐惧硬来——那撑不起一个完整窗口。"
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
        "k": "m",
        "cls": "M",
        "label": "法师",
        "icon": "classicon_mage"
      },
      {
        "k": "p",
        "cls": "P",
        "label": "牧师",
        "icon": "classicon_priest"
      }
    ]
  },
  "roles": null,
  "memb": {
    "r": "🗡 贼",
    "m": "❄ 法师",
    "p": "✚ 牧师"
  },
  "play": null,
  "quiz": [
    {
      "id": "b1",
      "w": "b",
      "d": 1,
      "s": "贼准备<sk>闷棍</sk>控住对面治疗，法师的爆发还有一段冷却。",
      "a": "该开吗？",
      "o": [
        "开，控制机会不等人",
        "不开，等法师好了再开",
        "开，法师随后跟上",
        "让牧师先上伤害"
      ],
      "r": 1,
      "e": [
        "窗口开了没人用，等于白开。",
        "正解。<b>贼一个人的伤害打不穿任何治疗</b>——没有法师的窗口不是\"打得少一点\"，是\"完全打不动\"。贼的窗口冷却比法师的爆发短，所以默认是贼等法师。",
        "爆发在冷却，跟不上。",
        "牧师的伤害在 RMP 里是补充，不是主体。"
      ],
      "k": "RMP 的窗口是共享的。开窗之前先确认法师能用得上。"
    },
    {
      "id": "b2",
      "w": "b",
      "d": 2,
      "s": "开场贼用了<sk>闷棍</sk>控治疗，法师想马上<sk>变形术</sk>控住对面另一个人。",
      "a": "有什么问题？",
      "o": [
        "没问题，两个不同的技能",
        "两个共享递减，变形只剩一半时长",
        "变形会解掉闷棍",
        "法师没蓝"
      ],
      "r": 1,
      "e": [
        "它们同类。",
        "正解。<b><sk>闷棍</sk>和<sk>变形术</sk>都是失能类，共享同一条递减</b>。Icy Veins 法师页专门写了这句：跟贼一起玩要记住开场的变形只有一半时长。",
        "不会互相解除。",
        "跟法力无关。"
      ],
      "k": "RMP 的两个主力控制吃同一条递减。这是这个组合最贵的一课。"
    },
    {
      "id": "b3",
      "w": "b",
      "d": 2,
      "s": "你们三个人都在，但失能类控制已经对治疗用了两次。",
      "a": "第三次控制该用什么？",
      "o": [
        "再来一次失能类",
        "<sk>心灵尖啸</sk>——恐惧类是满时长的",
        "<sk>偷袭</sk>",
        "放弃控制"
      ],
      "r": 1,
      "e": [
        "第三次失能只剩四分之一，撑不起窗口。",
        "正解。<b>跨类别接才有满时长。</b>失能用光之后，牧师的<sk>心灵尖啸</sk>是 RMP 唯一还剩满时长的长控——所以它要留着，不能开场就交。",
        "<sk>偷袭</sk>是眩晕类，可以用，但它是贼的开场技能，通常已经用在击杀目标身上了。",
        "还有牌可打。"
      ],
      "k": "控制链要跨类别接。同类别第三次只剩四分之一。"
    },
    {
      "id": "b4",
      "w": "b",
      "d": 3,
      "s": "RMP 和 Thug Cleave 都是贼带牧的三人队。",
      "a": "两者的核心难点差在哪？",
      "o": [
        "没区别",
        "Thug 求控制链接得上，RMP 求两套爆发对得齐",
        "RMP 更简单",
        "Thug 伤害更高"
      ],
      "r": 1,
      "e": [
        "教的不是同一件事。",
        "正解。<b>猎人的伤害是持续的，不依赖窗口</b>，所以 Thug Cleave 的核心是链条问题；<b>贼和法师都是爆发型</b>，两个人的伤害必须落在同一扇窗里，所以 RMP 的核心是时间对齐问题。",
        "难点不同，不是难度不同。",
        "伤害形态不同，不是高低问题。"
      ],
      "k": "链条问题和时间对齐问题是两类判断，别用错。"
    },
    {
      "id": "b5",
      "w": "b",
      "d": 2,
      "s": "贼喊「我要控了」，牧师身上还有<sk>暗言术：痛</sk>挂在对面治疗身上。",
      "a": "会发生什么？",
      "o": [
        "没影响",
        "持续伤害会瞬间破掉控制",
        "控制时长减半",
        "需要重新施法"
      ],
      "r": 1,
      "e": [
        "受伤即破的控制对持续伤害同样敏感。",
        "正解。<b><sk>闷棍</sk>和<sk>致盲</sk>都是受伤即破</b>，还在跳的<sk>暗言术：痛</sk>会立刻破掉它。而 RMP 的窗口全靠这一控撑着——破了就没有第二个失能可用（递减）。",
        "不是减半，是直接破。",
        "控制已经被破了。"
      ],
      "k": "停手包括还在跳的持续伤害，这是最容易忘的一个。"
    },
    {
      "id": "b6",
      "w": "b",
      "d": 2,
      "s": "窗口关上了，对面治疗恢复行动，你们三个人的爆发都进了冷却。",
      "a": "该做什么？",
      "o": [
        "继续压，磨血",
        "脱战重来，准备下一次 set-up",
        "换目标继续打",
        "交防御硬扛"
      ],
      "r": 1,
      "e": [
        "RMP 没有持续伤害，磨不动。",
        "正解。<b>窗口关上之后是真空期</b>——贼没有持续伤害，法师的爆发在冷却。这段时间你们打不动任何人，恋战只会白挨伤害。",
        "换目标也一样打不动，问题不在目标。",
        "不用扛，脱战就行。"
      ],
      "k": "RMP 是\"准备一次、打一次\"，不是持续压制。窗口结束就该重来。"
    },
    {
      "id": "b7",
      "w": "b",
      "d": 3,
      "s": "你们三个人的脱身手段都很好（<sk>消失</sk>/<sk>寒冰屏障</sk>/<sk>渐隐术</sk>）。",
      "a": "这带来什么风险？",
      "o": [
        "没风险",
        "容易分头跑，跑散之后要重新做完整 set-up",
        "消耗太多冷却",
        "对面会针对"
      ],
      "r": 1,
      "e": [
        "退路多本身是优势，但有具体的坏习惯。",
        "正解。<b>三个人都能跑，于是三个人分头跑</b>——跑散之后你们要重新做一次完整的 set-up，而对面只需要抓住落单的那个。<b>退路多的队伍要一起退。</b>",
        "冷却不是主要问题。",
        "对面针对不了三个人的脱身。"
      ],
      "k": "退得起的队伍要一起退。退散就等于把 set-up 的成本又付一遍。"
    },
    {
      "id": "b8",
      "w": "b",
      "d": 2,
      "s": "对面是恢复德（能切形态破控）。",
      "a": "RMP 该怎么调整？",
      "o": [
        "加大控制力度",
        "改成打对面的 DPS",
        "继续按标准套路",
        "放弃这一局"
      ],
      "r": 1,
      "e": [
        "形态切换会一直拆你们的控制。",
        "正解。<b>换目标比换手段有效。</b>RMP 的窗口完全依赖失能类，没有替代手段——锁不住治疗就该早做决定，别耗到冷却都空转。",
        "标准套路在这个对局不成立。",
        "换目标就能打。"
      ],
      "k": "锁不住治疗时换目标，不是加大力度。"
    },
    {
      "id": "b9",
      "w": "b",
      "d": 3,
      "s": "对面没有治疗，是三个 DPS。",
      "a": "RMP 的判断要怎么变？",
      "o": [
        "照常做 set-up",
        "先活过对面的第一波，再谈自己的窗口",
        "直接开爆发对拼",
        "拖时间"
      ],
      "r": 1,
      "e": [
        "对面不需要 set-up，会直接开。",
        "正解。<b>你们的准备时间在这个对局是劣势</b>——对面不用控治疗就能杀人。所以判断反过来：先扛住第一波，你们准备好之后的爆发反而没人能救。",
        "对拼会输在启动速度上。",
        "拖时间没有意义，双方都不掉血。"
      ],
      "k": "无治疗对局里，RMP 的准备时间是劣势——先防守再进攻。"
    },
    {
      "id": "b10",
      "w": "b",
      "d": 2,
      "s": "法师被两个近战贴住，一直读不了条。",
      "a": "全队优先做什么？",
      "o": [
        "集火杀掉一个近战",
        "让法师有空间站住",
        "牧师给法师加满血",
        "贼去打对面治疗"
      ],
      "r": 1,
      "e": [
        "杀近战需要时间，法师撑不到。",
        "正解。<b>法师被贴住 = RMP 失去伤害来源。</b>法师有空间，伤害自然回来；没空间，控制链再干净也没用。",
        "加血只是延缓，不解决他打不出伤害。",
        "没有法师的伤害，控住治疗也没用。"
      ],
      "k": "对面多近战时，RMP 的第一目标不是杀人，是让法师站得住。"
    },
    {
      "id": "b11",
      "w": "b",
      "d": 2,
      "s": "RMP 三个人的角色分工。",
      "a": "跟 Thug Cleave 最大的不同是什么？",
      "o": [
        "人数不同",
        "RMP 的角色不轮换，Thug 的三个人都能当锁匠",
        "RMP 没有治疗",
        "RMP 更依赖装备"
      ],
      "r": 1,
      "e": [
        "都是三个人。",
        "正解。<b>RMP 里贼永远开窗、法师永远是主伤害、牧师永远保法师</b>。Thug Cleave 的角色分配器有意义，是因为那边三个人都能当锁匠——RMP 照搬那个界面就是空转。",
        "牧师就是治疗。",
        "跟装备无关。"
      ],
      "k": "角色固定的组合不需要分配器，需要的是阶段划分。"
    },
    {
      "id": "b12",
      "w": "b",
      "d": 2,
      "s": "开场阶段，双方都在互相摸位置（镜像对局）。",
      "a": "该急着开吗？",
      "o": [
        "急，先手有优势",
        "不急，先做出完整 set-up 的那队赢",
        "急，抢控制",
        "看运气"
      ],
      "r": 1,
      "e": [
        "先手不等于优势——半成品的 set-up 会浪费失能类递减。",
        "正解。<b>两边都在等一个成型的机会。</b>先把失能类用完的那队，后面只能靠眩晕和恐惧硬来——那撑不起一个完整窗口。",
        "抢控制正是浪费递减的方式。",
        "这是判断问题不是运气。"
      ],
      "k": "两个 setup 队相遇，比的是耐心和失能类的管理。"
    },
    {
      "id": "b13",
      "w": "b",
      "d": 1,
      "s": "RMP 里谁是对面的首要目标？",
      "a": "",
      "o": [
        "贼",
        "法师",
        "牧师",
        "看对面阵容"
      ],
      "r": 1,
      "e": [
        "贼有全场最好的自保，不好抓。",
        "正解。Icy Veins 法师页原话：<b>「大多数对局里你就是那个被集火的」</b>。法师是伤害主体，杀掉他 RMP 就没有伤害了。",
        "牧师通常是第二顺位。",
        "大多数对局里都是法师。"
      ],
      "k": "认清自己队伍的软肋在谁身上，防守重心才放得对。"
    },
    {
      "id": "b14",
      "w": "b",
      "d": 3,
      "s": "贼被对面抓住集火。",
      "a": "队友该怎么办？",
      "o": [
        "两个人一起去救",
        "不用救，贼自己有牌",
        "牧师全力治疗",
        "法师去控制"
      ],
      "r": 1,
      "e": [
        "救贼是最浪费的一种救援。",
        "正解。<b>贼有全场最好的自保</b>：<sk>暗影斗篷</sk>免疫法术、<sk>消失</sk>直接脱战、<sk>闪避</sk>挡物理。而且贼被打的时候，对面就没在打法师——这反而是法师的自由输出时间。",
        "治疗资源该留给法师。",
        "控制该用在保法师上。"
      ],
      "k": "三个人挨打的处置完全不同。搞混顺序是 RMP 最常见的资源浪费。"
    },
    {
      "id": "b15",
      "w": "b",
      "d": 2,
      "s": "关于牧师在 RMP 里的定位。",
      "a": "跟贼牧 2v2 有什么不同？",
      "o": [
        "一样",
        "RMP 里更像纯治疗，2v2 里输出是关键",
        "RMP 里输出更重要",
        "没有可比性"
      ],
      "r": 1,
      "e": [
        "两种赛制的定位不同。",
        "正解。Icy Veins 戒律牧页原话：3v3 里<b>伤害太多，没法一直靠<sk>救赎</sk>安全地治疗</b>，要更像标准治疗。而且 RMP 里法师已经提供了足够伤害——牧师该把精力放在让法师活着。",
        "反了。",
        "两者可比，而且差别明确。"
      ],
      "k": "同一个专精在不同赛制里的定位会变。别把 2v2 的习惯带进 3v3。"
    },
    {
      "id": "b16",
      "w": "b",
      "d": 3,
      "s": "对面打断手段很多（萨满/死骑/DH）。",
      "a": "为什么 RMP 比 Thug Cleave 更怕这个？",
      "o": [
        "RMP 血更少",
        "法师的伤害要读条，猎人的不用",
        "RMP 控制更少",
        "没有区别"
      ],
      "r": 1,
      "e": [
        "跟血量无关。",
        "正解。<b>打断只对读条的人有效。</b>Thug Cleave 的伤害主体是猎人（不读条），RMP 的伤害主体是法师（读条）。所以同一个对面阵容，对两个组合的威胁完全不同。",
        "控制数量接近。",
        "区别很大。"
      ],
      "k": "伤害形态决定了你怕什么。读条的队伍怕打断，不读条的不怕。"
    },
    {
      "id": "r1",
      "w": "r",
      "d": 2,
      "s": "你摸到了位置，<sk>闷棍</sk>好着，但法师说爆发还有一会儿。",
      "a": "该做什么？",
      "o": [
        "先控住治疗，创造优势",
        "等着，保持潜行",
        "控住对面 DPS",
        "现身逼对面交牌"
      ],
      "r": 1,
      "e": [
        "控了之后窗口就在走，法师用不上。",
        "正解。<b>你的窗口比他的冷却便宜</b>——你等他几秒，换来的是一个能用满的窗口。反过来会让你们每隔几轮就浪费一个。",
        "控 DPS 会浪费失能类递减。",
        "现身只会让你失去开场优势。"
      ],
      "k": "贼的窗口冷却短，法师的爆发冷却长。默认是贼等法师。"
    },
    {
      "id": "r2",
      "w": "r",
      "d": 2,
      "s": "你准备<sk>闷棍</sk>，但不知道法师要不要用<sk>变形术</sk>。",
      "a": "该怎么办？",
      "o": [
        "直接控，他会跟上",
        "先问一句",
        "让他先变形",
        "两个一起用"
      ],
      "r": 1,
      "e": [
        "两个技能共享递减，不沟通就会撞。",
        "正解。<b>失能类只有一条递减，你俩的技能都在抢它。</b>先问一句，决定这一轮谁用——或者你控，或者他变形，不能都用。",
        "不一定该他先，看这一轮的目标是谁。",
        "一起用等于自愿把其中一个减半。"
      ],
      "k": "共享递减的技能，用之前要沟通谁用。"
    },
    {
      "id": "r3",
      "w": "r",
      "d": 3,
      "s": "你在窗口里全力输出，对面一个近战正在打法师。",
      "a": "该继续还是回去？",
      "o": [
        "继续，窗口不能浪费",
        "看目标能不能一击收掉，不能就回去",
        "立刻回去",
        "让牧师处理"
      ],
      "r": 1,
      "e": [
        "无脑继续可能换来法师阵亡。",
        "正解。<b>目标一击能死就收完，半管血就回去。</b>法师死了这个组合就没有伤害了——一个窗口换不来这个损失。",
        "无脑回去也不对，如果目标马上能死，收完再回更好。",
        "牧师一个人保不住被近战贴身的法师。"
      ],
      "k": "窗口不是必须用完的。用它换的东西要比它贵。"
    },
    {
      "id": "r4",
      "w": "r",
      "d": 2,
      "s": "对面有个很会打断的萨满，法师一直读不了条。",
      "a": "你的角色要怎么变？",
      "o": [
        "照常输出击杀目标",
        "临时变成保镖，控住打断者",
        "去打萨满",
        "让法师自己解决"
      ],
      "r": 1,
      "e": [
        "法师打不出伤害，你自己的输出不够。",
        "正解。<b><sk>卸除武装</sk>、<sk>脚踢</sk>、<sk>肾击</sk>优先花在打断者身上</b>，不是击杀目标身上。这个角色切换是 RMP 最难的判断之一。",
        "不一定要杀他，让他打断不了就行。",
        "假读条能骗一部分，但对面打断多的时候法师一个人扛不住。"
      ],
      "k": "对面打断多的对局，贼要从输出者切换成保镖。"
    },
    {
      "id": "r5",
      "w": "r",
      "d": 2,
      "s": "你被对面集火。",
      "a": "该喊队友来救吗？",
      "o": [
        "喊，越早越好",
        "不喊，自己处理",
        "喊牧师一个人来",
        "看血量"
      ],
      "r": 1,
      "e": [
        "救贼是最浪费的救援。",
        "正解。<b>你有全场最好的自保</b>：<sk>暗影斗篷</sk>、<sk>消失</sk>、<sk>闪避</sk>。队友来救你，等于把资源花在最不需要的地方——而且你被打的时候法师是安全的。",
        "牧师的治疗该留给法师。",
        "除非牌全交完了，否则自己处理。"
      ],
      "k": "自保最好的那个人不该占用队伍的救援资源。"
    },
    {
      "id": "r6",
      "w": "r",
      "d": 2,
      "s": "窗口结束，你用<sk>消失</sk>脱战了。",
      "a": "该去哪儿？",
      "o": [
        "去对面看不到的角落",
        "去队友那边重新潜行",
        "继续绕后找机会",
        "原地等冷却"
      ],
      "r": 1,
      "e": [
        "离队友太远等于把自己孤立。",
        "正解。<b>RMP 退路多，最容易犯的错是分头跑。</b>跑散之后你们要重新做一次完整的 set-up，而对面只需要抓住落单的那个。",
        "单独找机会在 RMP 里没有意义——你一个人打不动。",
        "原地等会被找到。"
      ],
      "k": "退得起的队伍要一起退，退到同一个地方。"
    },
    {
      "id": "r7",
      "w": "r",
      "d": 1,
      "s": "你要<sk>闷棍</sk>控住对面治疗。",
      "a": "控之前必须做什么？",
      "o": [
        "直接控",
        "喊一声让队友停手",
        "先打一套伤害",
        "等牧师加满血"
      ],
      "r": 1,
      "e": [
        "不喊，队友的伤害会破掉控制。",
        "正解。<b>受伤即破的控制，三个人里任何一个手滑都白搭</b>——包括法师已经出手还在飞的<sk>寒冰箭</sk>、牧师挂着的<sk>暗言术：痛</sk>。",
        "打伤害会暴露位置。",
        "跟血量无关。"
      ],
      "k": "受伤即破的控制，喊出来是操作的一部分。"
    },
    {
      "id": "r8",
      "w": "r",
      "d": 3,
      "s": "镜像对局，对面也有个贼在潜行。",
      "a": "开局该做什么？",
      "o": [
        "主动找他",
        "别急着现身，先摸位置",
        "直接控住对面法师",
        "让队友引他出来"
      ],
      "r": 1,
      "e": [
        "主动找会先暴露自己。",
        "正解。<b>你的<sk>闷棍</sk>是开局的钥匙</b>——被对面贼先手闷了，你们这一轮就只能防守。开局互相摸位置的阶段，谁先现身谁被动。",
        "控法师也是一种思路，但开局位置没摸清就动手风险高。",
        "把队友暴露出去不划算。"
      ],
      "k": "镜像对局比耐心。先现身的那个交出主动权。"
    },
    {
      "id": "r9",
      "w": "r",
      "d": 2,
      "s": "对面治疗是圣骑（有免控和净化）。",
      "a": "你的<sk>闷棍</sk>该用给谁？",
      "o": [
        "照样给治疗",
        "给对面的一个 DPS",
        "留着不用",
        "给对面法师"
      ],
      "r": 1,
      "e": [
        "免控和净化会让你白控。",
        "正解。<b>锁不住治疗时换目标。</b>控住一个 DPS，三个人集火另一个——杀掉一个 DPS 同样能赢，而且不用跟对面的免控牌硬碰。",
        "留着不用等于少一张牌。",
        "对面 DPS 是谁要看具体阵容，但方向是对的。"
      ],
      "k": "控制该用在能控住的人身上。"
    },
    {
      "id": "r10",
      "w": "r",
      "d": 2,
      "s": "你进场开了<sk>暗影之舞</sk>，法师的<sk>寒冰宝珠</sk>也交了。",
      "a": "这一窗最该注意什么？",
      "o": [
        "自己的连击点",
        "对面第三人有没有被控住",
        "牧师的血量",
        "自己的位置"
      ],
      "r": 1,
      "e": [
        "连击点是基本功，但不是这一步最要紧的。",
        "正解。<b>不控第三人，他会反手救人或者杀掉你们的一个。</b>不过在 RMP 里优先让法师去钉——贼动手要中断输出，法师的定身是顺手的。",
        "牧师会自己报。",
        "位置在进场前就该定好。"
      ],
      "k": "窗口里三件事：输出、控住第三人、盯着法师。分工明确才做得完。"
    },
    {
      "id": "r11",
      "w": "r",
      "d": 2,
      "s": "队友法师说他被沉默了。",
      "a": "你能做什么？",
      "o": [
        "没办法",
        "控住沉默他的那个人，防止再来一次",
        "帮他解沉默",
        "继续输出"
      ],
      "r": 1,
      "e": [
        "能做的事不少。",
        "正解。<b>大部分沉默不可驱散，所以处理办法是让施法者做不了这件事</b>——<sk>卸除武装</sk>、<sk>脚踢</sk>或直接控住他。",
        "贼没有驱散手段。",
        "法师打不出伤害的时候，你的输出不够。"
      ],
      "k": "不能解除的效果，就去处理施加它的人。"
    },
    {
      "id": "r12",
      "w": "r",
      "d": 3,
      "s": "你判断这一轮打不出击杀，但你的<sk>暗影之舞</sk>已经开了。",
      "a": "该怎么处理？",
      "o": [
        "硬打完，冷却不能浪费",
        "立刻脱战，冷却比这一轮值钱",
        "换个目标打",
        "交给队友决定"
      ],
      "r": 1,
      "e": [
        "打不穿的爆发就是喂给对面的治疗量。",
        "正解。<b>RMP 是\"准备一次、打一次\"</b>——一个窗口不成立就重来。硬打下去，你们下一轮的冷却也没了，而对面什么都没损失。",
        "换目标不解决\"打不穿\"这个问题。",
        "这是贼的判断，你在窗口里最清楚打不打得动。"
      ],
      "k": "冷却是给下一次机会用的，不是给这一次交差用的。"
    },
    {
      "id": "m1",
      "w": "m",
      "d": 2,
      "s": "贼问你爆发好了没有，其实还差一段冷却。",
      "a": "该怎么回？",
      "o": [
        "说好了，让他先开",
        "如实说没好",
        "让他自己判断",
        "先开个小爆发凑合"
      ],
      "r": 1,
      "e": [
        "骗队友开一个用不上的窗口，损失是双份的。",
        "正解。<b>没有法师的窗口不是\"打得少一点\"，是\"完全打不动\"。</b>贼的窗口冷却短，等你几秒的成本远低于浪费一个窗口。",
        "他没法看到你的冷却。",
        "半套爆发打不穿任何治疗。"
      ],
      "k": "RMP 的窗口靠两个人共同兑现。一个人没准备好就该说。"
    },
    {
      "id": "m2",
      "w": "m",
      "d": 2,
      "s": "贼刚用<sk>闷棍</sk>控住对面治疗，你想控住另一个人。",
      "a": "用什么？",
      "o": [
        "<sk>变形术</sk>",
        "<sk>冰霜之环</sk>或<sk>寒冰新星</sk>",
        "什么都不用",
        "再来一个变形"
      ],
      "r": 1,
      "e": [
        "<sk>变形术</sk>跟闷棍共享递减，现在只剩一半时长。",
        "正解。<b>定身/减速跟失能类不同类，不吃那条递减。</b>贼已经用掉失能之后，你的定身手段才是完整的。",
        "第三人不处理会反手救人。",
        "同上，递减问题。"
      ],
      "k": "队友用掉一类控制之后，你要换一个类别接。"
    },
    {
      "id": "m3",
      "w": "m",
      "d": 3,
      "s": "你在窗口里，对面有个人一直在打断你。",
      "a": "该怎么办？",
      "o": [
        "硬读，赌他打断在冷却",
        "假读条骗掉打断，再放真的",
        "换成全瞬发",
        "让贼来处理"
      ],
      "r": 1,
      "e": [
        "赌错这一窗就废了。",
        "正解。<b>假读条骗打断是 RMP 法师的核心技术。</b>先骗掉再放真的——这是你自己能解决的部分。同时贼也该去控打断者，但你不能等他。",
        "全瞬发伤害不够，但可以作为骗打断之间的补充。",
        "贼要处理，但你自己也得会骗。"
      ],
      "k": "读条职业的第一基本功是骗打断，不是站着硬读。"
    },
    {
      "id": "m4",
      "w": "m",
      "d": 2,
      "s": "你被两个人集火，保命牌都还在。",
      "a": "该怎么交？",
      "o": [
        "一次全交，撑最久",
        "按顺序交：位移 → <sk>寒冰屏障</sk> → <sk>操控时间</sk>",
        "等血低了再交",
        "立刻<sk>寒冰屏障</sk>"
      ],
      "r": 1,
      "e": [
        "一次全交的法师，跟没有保命牌的法师活得差不多。",
        "正解。<b>你的保命牌多到可以自己撑很久——前提是按顺序交。</b>先便宜的、再贵的，每一张都要吃满它的时间。",
        "等血低了就没有操作空间了。",
        "<sk>寒冰屏障</sk>是硬牌，不该第一个交。"
      ],
      "k": "防御牌按顺序交，一次全交等于只有一张。"
    },
    {
      "id": "m5",
      "w": "m",
      "d": 2,
      "s": "关于你在 RMP 里的定位。",
      "a": "控制和伤害是什么关系？",
      "o": [
        "互不影响",
        "同一份预算——每读一次<sk>变形术</sk>就少打一段",
        "控制优先",
        "伤害优先"
      ],
      "r": 1,
      "e": [
        "你的时间是有限的。",
        "正解。<b>你读变形的那几秒不在输出</b>。这是 RMP 每一轮都要做的取舍——而窗口的长度是固定的，多控一次就少打一段。",
        "不是固定优先级，是每轮判断。",
        "同上。"
      ],
      "k": "施法时间有限的职业，控制和伤害共用同一份预算。"
    },
    {
      "id": "m6",
      "w": "m",
      "d": 2,
      "s": "对面两个近战一直贴着你。",
      "a": "你的首要工作是什么？",
      "o": [
        "输出",
        "风筝，拉开距离",
        "控住其中一个",
        "等队友来救"
      ],
      "r": 1,
      "e": [
        "被贴住读不了条，输出无从谈起。",
        "正解。<b><sk>冰霜之环</sk>、<sk>寒冰新星</sk>、<sk>冰锥术</sk>——这个对局你的减速和定身比爆发重要。</b>有空间，伤害自然回来。",
        "控一个另一个还在，风筝更根本。",
        "队友会帮忙，但拉距离是你自己的活。"
      ],
      "k": "远程被贴住时，创造空间优先于打伤害。"
    },
    {
      "id": "m7",
      "w": "m",
      "d": 3,
      "s": "镜像对局，对面也有个法师。",
      "a": "你该优先盯谁？",
      "o": [
        "对面治疗",
        "对面法师",
        "对面贼",
        "随便谁"
      ],
      "r": 1,
      "e": [
        "治疗是团队目标，不是你个人的优先项。",
        "正解。<b>他跟你一样是伤害主体也是软肋。</b>你的<sk>法术反制</sk>打断他的关键法术，价值高于你自己多打一轮伤害。",
        "对面贼在潜行，盯不住。",
        "有明确的优先级。"
      ],
      "k": "镜像对局里，对位的那个人往往是你最高价值的目标。"
    },
    {
      "id": "m8",
      "w": "m",
      "d": 2,
      "s": "对面没有治疗（三 DPS），有个人正在开爆发。",
      "a": "你的<sk>变形术</sk>该给谁？",
      "o": [
        "留着不用",
        "变掉正在爆发的那个",
        "变掉血最少的",
        "变掉离你最近的"
      ],
      "r": 1,
      "e": [
        "这个对局它是防御技能。",
        "正解。<b>没有治疗要控的时候，<sk>变形术</sk>的最高价值是掐掉对面的爆发。</b>变掉一个正在输出的人，等于给你们队伍买了几秒。",
        "血最少的应该被你们集火，不是被变形。",
        "距离不是判断依据。"
      ],
      "k": "同一个技能在不同对局里的角色会变。无治疗局里控制变防御。"
    },
    {
      "id": "m9",
      "w": "m",
      "d": 1,
      "s": "开打之前你该先给自己上什么？",
      "a": "",
      "o": [
        "什么都不用",
        "护盾类的防护",
        "增伤",
        "隐形"
      ],
      "r": 1,
      "e": [
        "你是首要目标，裸着开打风险高。",
        "正解。<b>你是对面的首选目标，护盾要在开打前就在身上</b>——开打之后你既要输出又要躲，没空补。",
        "增伤该留到窗口里。",
        "隐形不适合开场准备。"
      ],
      "k": "首要目标要在开打前把防护铺好。"
    },
    {
      "id": "m10",
      "w": "m",
      "d": 2,
      "s": "贼说他要控对面治疗了。",
      "a": "你正在读<sk>寒冰箭</sk>，该怎么办？",
      "o": [
        "读完再停",
        "立刻打断自己的施法",
        "继续读，一发不影响",
        "换个目标读"
      ],
      "r": 1,
      "e": [
        "已经出手的法术会破掉控制。",
        "正解。<b>停手包括还在飞的法术。</b>贼的控制受伤即破，你这一发落地就白控了——而 RMP 没有第二个失能可用（递减）。",
        "一发就够破控。",
        "换目标读也可能溅射。"
      ],
      "k": "\"停手\"是从取消施法开始的，不是从下一个技能开始的。"
    },
    {
      "id": "m11",
      "w": "m",
      "d": 2,
      "s": "你的爆发和贼的窗口总是错开。",
      "a": "根本原因是什么？",
      "o": [
        "运气",
        "两者冷却长度不一样，不主动对齐就会自然错开",
        "装备问题",
        "天赋问题"
      ],
      "r": 1,
      "e": [
        "不是随机现象。",
        "正解。<b>贼的窗口冷却比你的爆发短</b>——各打各的，迟早会错开。解法是让先好的那个人等，通常是贼等你。",
        "跟装备无关。",
        "跟天赋无关。"
      ],
      "k": "冷却长度不同的两个技能，不主动对齐就一定会错开。"
    },
    {
      "id": "m12",
      "w": "m",
      "d": 3,
      "s": "你被沉默了，队友问你要不要驱散。",
      "a": "该怎么回？",
      "o": [
        "要，让牧师驱散",
        "大部分沉默不可驱散，让他们去控施法者",
        "自己解",
        "等它过去"
      ],
      "r": 1,
      "e": [
        "很多沉默是不可驱散的。",
        "正解。<b>不能解除的效果，处理办法是让施加它的人做不了这件事</b>——贼去<sk>卸除武装</sk>或控住他。牧师的驱散该留给能驱的东西。",
        "你自己解不了沉默。",
        "干等会浪费整个窗口。"
      ],
      "k": "搞清楚哪些效果能解、哪些只能从源头处理。"
    },
    {
      "id": "p1",
      "w": "p",
      "d": 2,
      "s": "你在 RMP 里的第一职责是什么？",
      "a": "",
      "o": [
        "治疗量最大化",
        "让法师活到窗口结束",
        "压制对面治疗",
        "平均分配治疗"
      ],
      "r": 1,
      "e": [
        "治疗量是结果，不是目标。",
        "正解。<b>法师是伤害主体，他一死这个组合就没有伤害了</b>——贼一个人打不穿任何治疗。所以保住法师排在其他一切之前。",
        "压制对面治疗是 2v2 的思路，3v3 里伤害够多了。",
        "平均分配等于没有优先级。"
      ],
      "k": "认清队伍的伤害主体是谁，防守重心就定了。"
    },
    {
      "id": "p2",
      "w": "p",
      "d": 2,
      "s": "贼喊「停手」，你的<sk>暗言术：痛</sk>还挂在对面治疗身上。",
      "a": "该怎么办？",
      "o": [
        "等它自己掉",
        "立刻确认目标身上干净",
        "继续加血就行",
        "重新施法覆盖"
      ],
      "r": 1,
      "e": [
        "还在跳的持续伤害会破掉控制。",
        "正解。<b>停手包括还在跳的持续伤害</b>——这是三个人里最容易忘的一个。而 RMP 的窗口全靠这一控撑着。",
        "停手不只是停止新的输出。",
        "重新施法只会更快破控。"
      ],
      "k": "\"停手\"包括已经挂在目标身上的东西。"
    },
    {
      "id": "p3",
      "w": "p",
      "d": 2,
      "s": "失能类控制已经用光了，你的<sk>心灵尖啸</sk>还在手上。",
      "a": "它现在的价值是什么？",
      "o": [
        "普通的应急控制",
        "唯一还剩满时长的长控",
        "用来自保",
        "可以随便用"
      ],
      "r": 1,
      "e": [
        "它比平时值钱得多。",
        "正解。<b>恐惧类跟失能类不同类，不吃那条递减。</b>贼和法师的失能都用完之后，它是 RMP 唯一还能开出完整窗口的控制——所以不能开场就交。",
        "它也能自保，但那是次要用途。",
        "正因为它宝贵，不能随便用。"
      ],
      "k": "队伍里唯一不吃当前递减的控制，价值会被放大。"
    },
    {
      "id": "p4",
      "w": "p",
      "d": 3,
      "s": "法师被集火，你想把治疗全倒给他。",
      "a": "有什么问题？",
      "o": [
        "没问题，他最重要",
        "他自己有全场最厚的保命牌，该让他先顶",
        "应该先治自己",
        "应该治贼"
      ],
      "r": 1,
      "e": [
        "过度救援也是浪费。",
        "正解。<b>法师有<sk>寒冰护体</sk>、<sk>寒冰屏障</sk>、<sk>操控时间</sk>、<sk>镜像</sk></b>——挨打的默认答案是他先自己顶。你把整套治疗倒下去，等于用整队资源换他一次失误。",
        "自保重要但不是这题的重点。",
        "贼有最好的自保，最不需要治疗。"
      ],
      "k": "队友自保牌多的时候，你的治疗该晚一点进场。"
    },
    {
      "id": "p5",
      "w": "p",
      "d": 2,
      "s": "贼被对面抓住了。",
      "a": "该给他治疗吗？",
      "o": [
        "给，队友要救",
        "不用，他自己有牌",
        "给一点点",
        "看血量"
      ],
      "r": 1,
      "e": [
        "救贼是最浪费的救援。",
        "正解。<b><sk>暗影斗篷</sk>、<sk>消失</sk>、<sk>闪避</sk></b>——他自己能走。而且贼被打的时候法师是安全的，你该趁这段时间回法力或者补状态。",
        "一点点也是分散注意力。",
        "除非他牌全交完了。"
      ],
      "k": "知道每个队友的自保上限，才知道该在谁身上花治疗。"
    },
    {
      "id": "p6",
      "w": "p",
      "d": 2,
      "s": "对面是奶萨，有破控图腾。",
      "a": "你的什么能力价值最高？",
      "o": [
        "治疗",
        "驱散",
        "控制",
        "输出"
      ],
      "r": 1,
      "e": [
        "治疗是基本盘，不是这个对局的关键。",
        "正解。<b>对萨满的图腾和骑士的祝福，驱散的价值最高。</b>而且要认清：这局锁不住治疗，要打消耗——法力管理比爆发时机重要。",
        "控制会被破控图腾拆掉。",
        "这个对局不该指望打穿治疗。"
      ],
      "k": "对面治疗类型决定你哪个能力最值钱。"
    },
    {
      "id": "p7",
      "w": "p",
      "d": 2,
      "s": "贼说要撤了。",
      "a": "你该往哪儿走？",
      "o": [
        "往安全的角落",
        "跟着法师走",
        "原地继续治疗",
        "分头跑分散注意"
      ],
      "r": 1,
      "e": [
        "自己找安全角落容易落单。",
        "正解。<b>你俩分开，法师就没人保了。</b>而 RMP 最容易犯的错就是三个人分头跑——跑散之后要重新做一次完整 set-up。",
        "原地留下会被抓。",
        "分头跑正是这个组合的典型错误。"
      ],
      "k": "撤退时跟着你要保的人走。"
    },
    {
      "id": "p8",
      "w": "p",
      "d": 3,
      "s": "镜像对局，你看到对面贼现身、对面法师开始读条。",
      "a": "该做什么？",
      "o": [
        "准备治疗",
        "用<sk>心灵尖啸</sk>打断他们的 set-up",
        "先躲开",
        "让队友处理"
      ],
      "r": 1,
      "e": [
        "被动接下整套爆发很危险。",
        "正解。<b>恐惧能打断对面整个 set-up。</b>他们的窗口跟你们一样，被打断就要重来——而重来意味着他们的失能类递减也白费了。",
        "躲开只解决你自己。",
        "你是唯一看得到全局的人。"
      ],
      "k": "对面在准备的时候打断他，比在他打完之后治疗划算。"
    },
    {
      "id": "p9",
      "w": "p",
      "d": 2,
      "s": "RMP 里你的输出优先级。",
      "a": "跟贼牧 2v2 相比？",
      "o": [
        "更高",
        "更低——法师已经提供了足够伤害",
        "一样",
        "完全不输出"
      ],
      "r": 1,
      "e": [
        "3v3 的伤害压力更大。",
        "正解。Icy Veins 的原话是 3v3 里<b>伤害太多，没法一直靠<sk>救赎</sk>安全地治疗</b>。而且 RMP 有法师这个伤害主体，不需要你补刀。",
        "定位确实变了。",
        "还是要打一些——<sk>救赎</sk>的机制决定了完全不输出治疗效率也低。"
      ],
      "k": "同一个专精在不同队伍里的定位会变。"
    },
    {
      "id": "p10",
      "w": "p",
      "d": 2,
      "s": "对面没有治疗（三 DPS）。",
      "a": "你该怎么打？",
      "o": [
        "照常混合输出",
        "全职治疗",
        "全力输出",
        "先控制"
      ],
      "r": 1,
      "e": [
        "没有对面治疗需要你去压制。",
        "正解。<b>你的全部价值在于让队友活过对面的第一波。</b>无治疗队会直接开爆发，你们的准备时间是劣势——扛住了才有后面。",
        "输出在这个对局是次要的。",
        "控制有用，但活下来优先。"
      ],
      "k": "对面没有治疗时，你的输出没有压制价值，全部转治疗。"
    },
    {
      "id": "p11",
      "w": "p",
      "d": 2,
      "s": "法师被沉默，你想驱散。",
      "a": "该注意什么？",
      "o": [
        "直接驱散",
        "大部分沉默不可驱散，别把驱散浪费在这",
        "先治疗再驱散",
        "让法师自己解"
      ],
      "r": 1,
      "e": [
        "很多沉默驱不掉。",
        "正解。<b>驱散该留给能驱的东西。</b>沉默的处理办法是让贼去控住施法者。你更实际的做法是提前给护盾，让法师扛着打断也能站住。",
        "顺序不是问题所在。",
        "法师解不了沉默。"
      ],
      "k": "搞清楚哪些效果能驱散，别把冷却花在驱不掉的东西上。"
    }
  ]
};
