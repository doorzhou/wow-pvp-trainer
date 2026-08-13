module.exports = {
  "meta": {
    "title": "增强萨 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 增强萨满 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "增强萨,萨满,PVP,竞技场,魔兽世界,12.1,Midnight,enhancement shaman,arena",
    "footer": "Patch 12.1 · Midnight 赛季一。图标与中文技能名来自 <a href=\"https://www.wowhead.com\" target=\"_blank\">Wowhead</a> 官方数据接口（逐个回验）。<br><a href=\"index.html\">← 返回全部训练器</a> · <a href=\"index.html#legal\">数据来源与免责声明</a>",
    "jsonld": null
  },
  "nav": [
    {
      "s": "s1",
      "label": "骨架"
    },
    {
      "s": "s2",
      "label": "通用手法"
    },
    {
      "s": "s3",
      "label": "分职业"
    },
    {
      "s": "s4",
      "label": "判断训练"
    },
    {
      "s": "s5",
      "label": "赛前速查"
    }
  ],
  "sections": {
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你是唯一一个「近战攒资源、法术结账」的专精。<br>增强萨的判断不是什么时候打，是<b>什么时候花掉层数</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_stormstrike.jpg\" alt=\"风暴打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"熔岩猛击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_lavalash.jpg\" alt=\"熔岩猛击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？漩涡武器把近战和法术接成了一条链</span><span class=\"sub\">近战攒层 → 法术瞬发，两头都要顾</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>你的近战攻击生成<b>漩涡武器</b>层数，层数让你的闪电类法术变成瞬发并大幅增伤。<b>这意味着你的输出分成两段：贴脸攒、远处放。</b></p><p style=\"margin-top:8px\">所以增强萨最容易犯的错是「攒满了还在贴脸打」——层数已经溢出，多打的近战全浪费。<b>攒够就该找机会结账</b>，这跟纯近战「一直贴着打」的直觉相反。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">增强萨的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_stormstrike.jpg\" alt=\"风暴打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"熔岩猛击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_lavalash.jpg\" alt=\"熔岩猛击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">资源时钟 · 漩涡武器层数</span><span class=\"sub\">攒满就该花，别让它溢出</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>近战攻击攒层，<b>层数是你法术伤害的全部来源</b>。</p><p style=\"margin-top:8px\"><b>判断点：攒满之后每多打一下近战都是浪费。</b>攒够了就该找机会把层数花掉——这是这个专精最核心的节奏感。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"毁灭之风\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_ironmaidens_swirlingvortex.jpg\" alt=\"毁灭之风\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"升腾\" style=\"width:20px;height:20px\" src=\"assets/icons/8026697.jpg\" alt=\"升腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>毁灭之风</sk>与<sk>升腾</sk></span><span class=\"sub\">期间自动攒层，输出翻倍</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>毁灭之风</sk>在周围释放风暴并大幅提高触发几率，<sk>升腾</sk>把攻击转为远程风之攻击。</p><p style=\"margin-top:8px\"><b>两个都会让层数生成加快</b>——所以爆发期间反而更容易溢出。开之前先把手上的层数花掉。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"根基图腾\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_groundingtotem.jpg\" alt=\"根基图腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"电能图腾\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_brilliance.jpg\" alt=\"电能图腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">图腾时钟 · 地面上的牌</span><span class=\"sub\">你的很多能力放在地上</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>根基图腾</sk>吸收一个针对队友的有害法术、<sk>电能图腾</sk>范围昏迷。</p><p style=\"margin-top:8px\"><b>图腾是可以被打掉的</b>，而且有摆放位置的讲究——放太远吸不到，放太近容易被顺手清掉。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"升腾\" style=\"width:20px;height:20px\" src=\"assets/icons/8026697.jpg\" alt=\"升腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：唤雷者 Stormbringer</span><span class=\"sub\">36/50 走这条，另一条 14 人 —— 不是压倒性</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>唤雷者（Stormbringer）36/50</b>，图腾师（Totemic）<b>14/50</b>。</p><p style=\"margin-top:8px\"><b>这不是 50/0 那种唯一解</b>——有 28% 的人走另一条线。唤雷者围绕 Tempest（强化闪电）展开，图腾师围绕 Surging Totem 展开。<b>多数派更强，但另一条线不是废的</b>，这一格比多数专精的英雄天赋更有讨论空间。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"根基图腾\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_groundingtotem.jpg\" alt=\"根基图腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：三格几乎固定</span><span class=\"sub\">Shamanism + Burrow + 根基图腾</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Shamanism（50/50）</b>—— 全员必带。嗜血冷却缩短到 60 秒、急速加成提高，且<b>不再受疲惫限制</b>——这意味着一局可以用很多次。</p><p style=\"margin-top:8px\"><b>Burrow（48/50）</b>钻地免疫并清减速、<sk>根基图腾</sk>（43/50）吸收一个针对队友的有害法术。<b>这两张都是「救命」牌，不是输出牌</b>——增强萨在 PvP 里的定位有相当一部分是团队工具人。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">三格 50 人 = 150 个选择，上面三项占了其中 141 个。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_stormstrike.jpg\" alt=\"风暴打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"熔岩猛击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_lavalash.jpg\" alt=\"熔岩猛击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"毁灭之风\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_ironmaidens_swirlingvortex.jpg\" alt=\"毁灭之风\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_stormstrike.jpg\" alt=\"风暴打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"熔岩猛击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_lavalash.jpg\" alt=\"熔岩猛击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 攒层：贴脸的意义</span><span class=\"sub\">近战是手段不是目的</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>风暴打击</sk>和<sk>熔岩猛击</sk>是主要的攒层手段。<b>你贴脸不是为了近战伤害，是为了攒漩涡武器。</b></p><p style=\"margin-top:8px\">这个认知差别很大：<b>被打退开的时候，损失的不是输出而是资源</b>——所以要算清楚回去攒层值不值。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"闪电链\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_chainlightning.jpg\" alt=\"闪电链\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 结账：层数满了就该花</span><span class=\"sub\">溢出是最常见的浪费</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>层数满了之后，再多的近战攻击都不会攒更多。<b>这时候每一下都是浪费。</b></p><p style=\"margin-top:8px\"><b>判断点：看到层数接近满，就该准备把它花掉</b>，而不是等到\"合适的时机\"——合适的时机可能永远不来。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"根基图腾\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_groundingtotem.jpg\" alt=\"根基图腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>根基图腾</sk>要预判着放</span><span class=\"sub\">它吸的是下一个法术</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>把 30 码内针对队友的<b>下一个</b>有害法术重定向到自己身上。</p><p style=\"margin-top:8px\"><b>所以它要在对面施法之前放</b>——看到对面治疗抬手才放就晚了。这是需要预判的一张牌。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"电能图腾\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_brilliance.jpg\" alt=\"电能图腾\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · <sk>电能图腾</sk>有 2 秒延迟</span><span class=\"sub\">不是即时控制</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>召唤后聚集电能，<b>2 秒后才爆炸</b>使范围内敌人昏迷。</p><p style=\"margin-top:8px\"><b>这 2 秒是它最大的限制</b>——对面看到图腾会走开。要么放在他们必须待的位置，要么配合队友的定身一起用。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"妖术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shaman_hex.jpg\" alt=\"妖术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · <sk>妖术</sk>是长控，别用来打断</span><span class=\"sub\">它该用来把人踢出战斗</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>把敌人变成青蛙，持续较长时间，受到伤害会解除。</p><p style=\"margin-top:8px\"><b>用它打断一次读条是浪费</b>——那是<sk>风剪</sk>的活。妖术该用来把治疗或第二个输出踢出这一波战斗。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"星界转移\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_shaman_astralshift.jpg\" alt=\"星界转移\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"幽魂之狼\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_spiritwolf.jpg\" alt=\"幽魂之狼\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 两张保命手段</span><span class=\"sub\">一张减伤，一张跑路</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>星界转移</sk>大幅减伤、Burrow 钻地免疫并清减速、<sk>幽魂之狼</sk>加速。</p><p style=\"margin-top:8px\"><b>Burrow 是这三张里最灵活的</b>——它同时解决\"挨打\"和\"跑不掉\"两个问题，48/50 的使用率说明这一点。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">层数满了就该花，别让它溢出</div><div class=\"dd\">攒满之后每多打一下近战都是浪费。这跟纯近战「一直贴着打」的直觉相反。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\"><sk>根基图腾</sk>要预判着放</div><div class=\"dd\">它吸的是下一个法术。等对面开始施法才放就晚了。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\"><sk>妖术</sk>不用来打断</div><div class=\"dd\">打断是<sk>风剪</sk>的活。妖术该用来把人踢出这一波战斗。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁的法术最需要拦？</b><sk>根基图腾</sk>只吸一个，要预判着放给最疼的那一发。</p><p style=\"margin-top:8px\"><b>2 · 我什么时候能安全地贴脸？</b>你的资源全靠近战攒，被赶开就等于断粮。</p><p style=\"margin-top:8px\"><b>3 · 走唤雷者还是图腾师？</b>36 比 14，<b>多数派更强但另一条不是废的</b>——这一格比多数专精有讨论空间。</p></div><div class=\"sc\"><h4>你在队里的两个身份</h4><p><b>输出</b>：近战攒层、法术结账，节奏在「什么时候花掉层数」。</p><p style=\"margin-top:8px\"><b>工具人</b>：<sk>根基图腾</sk>吸法术、<sk>电能图腾</sk>范围昏迷、嗜血（Shamanism 让它一局能用很多次）、<sk>妖术</sk>长控。</p><p style=\"margin-top:8px\"><b>PvP 天赋三格里有两格是救命牌</b>，这说明这个专精的价值有相当一部分不在伤害上。</p></div>"
  },
  "sk": {
    "毁灭之风": "ability_ironmaidens_swirlingvortex",
    "升腾": "8026697",
    "根基图腾": "spell_nature_groundingtotem",
    "电能图腾": "spell_nature_brilliance",
    "风暴打击": "ability_shaman_stormstrike",
    "熔岩猛击": "ability_shaman_lavalash",
    "妖术": "spell_shaman_hex",
    "风剪": "spell_nature_cyclone",
    "星界转移": "ability_shaman_astralshift",
    "幽魂之狼": "spell_nature_spiritwolf",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "剑在人在": "ability_warrior_challange",
    "天神下凡": "warrior_talent_icon_avatar",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "烈焰震击": "spell_fire_flameshock",
    "保护祝福": "spell_holy_sealofprotection",
    "灵龟守护": "ability_hunter_pet_turtle",
    "逃脱": "ability_rogue_feint",
    "假死": "ability_rogue_feigndeath",
    "消失": "ability_vanish",
    "闪避": "spell_shadow_shadowward",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "树皮术": "spell_nature_stoneclawtotem",
    "旅行形态": "ability_druid_travelform",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "黑曜鳞片": "inv_artifact_dragonscales",
    "悬空": "ability_evoker_hover"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "mw",
      "t": "漩涡武器层数攒够了",
      "d": "层数是你法术伤害的全部来源。没层数，你只是个普通近战"
    },
    {
      "k": "cd",
      "t": "<sk>毁灭之风</sk>或<sk>升腾</sk>好了",
      "d": "它们大幅加快层数生成。没有它们，这一轮的输出上限低一截"
    },
    {
      "k": "melee",
      "t": "你能贴上目标",
      "d": "你的资源靠近战攒。够不着就等于断粮，法术也没得放"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你攒的层数会花在空气上"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在什么都没准备好</h3><p>层数不够、冷却也没好。<b>增强萨的爆发要靠层数撑</b>——先贴上去攒，别急着交冷却。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，缺的这些让爆发落不了地</h3><p>条件差太多。<b>没层数的增强萨只是个普通近战</b>，这时候交<sk>毁灭之风</sk>是纯浪费。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是攒资源不是杀人</h3><p>贴上去把层数攒满，逼对面交一两张牌，<b>把<sk>升腾</sk>留给下一个窗口</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>缺层数就是没伤害，够不着就是攒不了，免疫在就是白花</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p>层数满 → <sk>毁灭之风</sk>开窗口 → 近战继续攒的同时把层数花在闪电上 → <sk>电能图腾</sk>卡在治疗准备救人那一秒。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先想好<sk>根基图腾</sk>给谁",
      "它吸的是<b>下一个</b>针对队友的有害法术。<b>要预判着放</b>，看到对面抬手才放就晚了。",
      "根基图腾"
    ],
    [
      "贴上去攒漩涡武器",
      "<sk>风暴打击</sk>和<sk>熔岩猛击</sk>是主要手段。<b>你贴脸是为了攒资源，不是为了近战伤害。</b>",
      "风暴打击"
    ],
    [
      "层数接近满就准备花掉",
      "<b>溢出是增强萨最常见的浪费</b>。攒满之后每多打一下近战都不产生价值。",
      "闪电链"
    ],
    [
      "<sk>毁灭之风</sk>开窗口",
      "周围持续造成伤害并大幅提高触发几率。<b>爆发期间层数生成更快，更要注意别溢出。</b>",
      "毁灭之风"
    ],
    [
      "<sk>升腾</sk>把攻击变成远程",
      "化身风之升腾者，攻击转为无视护甲的远程风之攻击。<b>被赶开也能继续输出的一段。</b>",
      "升腾"
    ],
    [
      "<sk>电能图腾</sk>要算那 2 秒延迟",
      "召唤后 2 秒才爆炸。<b>放在对面必须待的位置，或者配合队友的定身。</b>",
      "电能图腾"
    ],
    [
      "<sk>妖术</sk>把人踢出战斗",
      "长控，受到伤害会解除。<b>不要用它打断读条</b>——那是<sk>风剪</sk>的活。",
      "妖术"
    ],
    [
      "被压住就用 Burrow",
      "钻地免疫、清减速、加速。<b>它同时解决「挨打」和「跑不掉」</b>，是三张保命牌里最灵活的。",
      "星界转移"
    ]
  ],
  "match": {
    "qlbl": [
      "1 · 他那张「你杀不死我」的牌",
      "2 · 他怎么让你够不着",
      "3 · 你必须处理的那一个",
      "4 · 你的开场怎么打"
    ],
    "list": [
      {
        "id": "warrior",
        "n": "战士",
        "ic": "classicon_warrior",
        "c": "#C69B6D",
        "diff": "拼位置",
        "cards": [
          "剑在人在",
          "天神下凡",
          "破胆怒吼"
        ],
        "one": "他要贴你，你也要贴他，看谁的位置先崩。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "你的近战伤害会被招架，<b>但你的法术伤害不受影响</b>——这时候正好花层数。"
          ],
          [
            "他贴得上你",
            "战士没有脱身手段，你也不需要追。"
          ],
          [
            "<b>他的爆发是明牌</b>",
            "看到<sk>天神下凡</sk>就用 Burrow 或<sk>星界转移</sk>，扛过那 10 秒。"
          ],
          [
            "用<sk>升腾</sk>拉开输出",
            "<sk>升腾</sk>期间你的攻击变成远程——<b>被赶开也能继续打</b>。"
          ]
        ],
        "arena": "他开<sk>剑在人在</sk>时正好把层数花在闪电上，招架挡不住法术伤害。",
        "duel": "单挑用 Burrow 躲他的爆发窗口，扛过去他就是软目标。"
      },
      {
        "id": "paladin",
        "n": "圣骑士",
        "ic": "classicon_paladin",
        "c": "#F48CBA",
        "diff": "看免疫",
        "cards": [
          "圣盾术",
          "保护祝福",
          "自由祝福"
        ],
        "one": "整个对局围绕一张牌：圣盾术。",
        "q": [
          [
            "<sk>圣盾术</sk> —— 完全免疫",
            "你撕不掉，看到就停手换目标。<b>别把攒满的层数花进去。</b>"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "你的<sk>烈焰震击</sk>减速对他效果有限。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你的伤害有相当一部分是自然/火焰（法术）</b>——被保的目标你还能打进去一部分，比纯物理专精好。"
          ],
          [
            "<sk>根基图腾</sk>吸他的关键法术",
            "骑士的大治疗和自由祝福都是法术，<b>吸掉一个就是赚</b>。"
          ]
        ],
        "arena": "<sk>根基图腾</sk>吸他给队友的关键祝福，这比吸伤害法术更值。",
        "duel": "单挑等<sk>圣盾术</sk>过去，免疫期间把层数留着别花。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "够不着",
        "cards": [
          "灵龟守护",
          "假死",
          "逃脱",
          "猎豹守护"
        ],
        "one": "他一直跑，而你的资源需要贴脸攒。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间打他等于没打，<b>但你可以趁机攒层</b>。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "<b>这个对局最难受：你贴不上就攒不了层</b>。"
          ],
          [
            "<sk>升腾</sk>是你的答案",
            "化身远程攻击，<b>他跑你也能打</b>——这是增强萨对付风筝最有效的一手。"
          ],
          [
            "<sk>烈焰震击</sk>先上减速",
            "贴上去第一件事是种减速，追出去再想就晚了。"
          ]
        ],
        "arena": "<sk>升腾</sk>留给他开始风筝的时候，那段远程攻击是你不受距离限制的窗口。",
        "duel": "单挑靠<sk>幽魂之狼</sk>和减速黏住他，追不上就攒不了资源。"
      },
      {
        "id": "rogue",
        "n": "潜行者",
        "ic": "classicon_rogue",
        "c": "#FFF468",
        "diff": "看开场",
        "cards": [
          "暗影斗篷",
          "消失",
          "闪避",
          "烟雾弹"
        ],
        "one": "他开场就想把你控死，你有图腾能拆。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你的法术伤害是主要输出，斗篷对你很疼</b>。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他随时能重置，追不上就转打他队友。"
          ],
          [
            "Tremor Totem 拆控制",
            "它移除恐惧、魅惑和睡眠。<b>贼的部分控制能被它清掉。</b>"
          ],
          [
            "保命牌留在手上",
            "贼从潜行开局，别在他现身前把 Burrow 交掉。"
          ]
        ],
        "arena": "<sk>暗影斗篷</sk>期间别花层数，转打他队友或者继续攒。",
        "duel": "单挑时<sk>闪避</sk>只挡物理，你的法术伤害照进——这一点比纯近战好。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "拼打断",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸",
          "真言术：盾"
        ],
        "one": "他要读条，你有打断也有图腾。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "都是短时间的，等它过去再压。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "<b>Tremor Totem 能移除恐惧</b>——这是这个对局很好用的一手。"
          ],
          [
            "<sk>风剪</sk>打断优先",
            "牧师的大治疗要读条，<sk>风剪</sk>冷却短，看到抬手就打断。"
          ],
          [
            "<sk>根基图腾</sk>吸他的关键法术",
            "预判他要放的那一发，吸掉等于白赚一个技能。"
          ]
        ],
        "arena": "Tremor Totem 提前放，牧师的<sk>心灵尖啸</sk>是这个对局最疼的一下。",
        "duel": "单挑用<sk>风剪</sk>断他的治疗，你的持续输出耗得过他。"
      },
      {
        "id": "deathknight",
        "n": "死亡骑士",
        "ic": "classicon_deathknight",
        "c": "#C41E3A",
        "diff": "硬碰硬",
        "cards": [
          "反魔法护罩",
          "冰封之韧",
          "巫妖之躯"
        ],
        "one": "他抓得住你，你得靠图腾和位移周旋。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡法术",
            "<b>你的主要输出是法术，护罩对你很有效</b>——看到就别花层数。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "死骑不跑，他抓你。拉开距离对他没用。"
          ],
          [
            "他的伤害是持续型",
            "疫病一直在走，<b>Burrow 的免疫能打断一段</b>。"
          ],
          [
            "贴脸对你有利",
            "这个对局你不用担心够不着，专心攒层就行。"
          ]
        ],
        "arena": "他开<sk>反魔法护罩</sk>时把层数攒着别花，等护罩过去再一次性结账。",
        "duel": "单挑不用担心距离，比的是谁的减伤和自愈更省。"
      },
      {
        "id": "shaman",
        "n": "萨满祭司",
        "ic": "classicon_shaman",
        "c": "#0070DD",
        "diff": "镜像",
        "cards": [
          "星界转移",
          "寒冰护体",
          "根基图腾"
        ],
        "one": "镜像对局：谁的图腾摆得好谁赢。",
        "q": [
          [
            "<sk>星界转移</sk> —— 大减伤",
            "两边都有，看谁交得更值。"
          ],
          [
            "两边都有位移和图腾",
            "机动性接近，位置的争夺很细。"
          ],
          [
            "<b>先打掉他的图腾</b>",
            "<sk>根基图腾</sk>会吸你的法术，<b>不清掉你的输出就打空一次</b>。"
          ],
          [
            "抢先手图腾",
            "谁的<sk>电能图腾</sk>先爆炸，谁就拿走这一轮。"
          ]
        ],
        "arena": "镜像里先打掉对面的<sk>根基图腾</sk>，否则你花掉的层数会被它吸走一次。",
        "duel": "单挑比图腾的摆放和打掉对面图腾的速度。"
      },
      {
        "id": "mage",
        "n": "法师",
        "ic": "classicon_mage",
        "c": "#3FC7EB",
        "diff": "够不着",
        "cards": [
          "寒冰屏障",
          "变形术",
          "冰霜之环",
          "镜像"
        ],
        "one": "全场最会拉开距离的职业，你要贴脸攒资源。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "撕不掉，等它自己结束，期间攒层。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "<b>他拉开距离你就攒不了层</b>——这是这个对局最核心的矛盾。"
          ],
          [
            "<sk>根基图腾</sk>吸他的关键法术",
            "法师是纯法系，<b>图腾能吸掉他一个大招</b>。"
          ],
          [
            "<sk>升腾</sk>破解风筝",
            "化身远程攻击，<b>他拉开也打得到</b>。"
          ]
        ],
        "arena": "<sk>根基图腾</sk>对纯法系阵容价值最高，预判他的关键法术放。",
        "duel": "单挑用<sk>升腾</sk>解决够不着的问题，那段时间你也是远程。"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "拼血线",
        "cards": [
          "虚空行走",
          "恐惧",
          "石肤术"
        ],
        "one": "他用恐惧拉扯，你有 Tremor Totem。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "恐惧与减速",
            "<b>Tremor Totem 移除恐惧</b>——这是这个对局最有价值的一手。"
          ],
          [
            "他的宠物",
            "宠物提供额外控制，顺手清掉能省麻烦。"
          ],
          [
            "<sk>根基图腾</sk>吸他的关键法术",
            "术士的伤害全是法术，图腾能吸掉一个。"
          ]
        ],
        "arena": "Tremor Totem 提前放，术士的恐惧链是这个对局的主要威胁。",
        "duel": "单挑靠持续压制，别给他叠满 DoT 的时间。"
      },
      {
        "id": "monk",
        "n": "武僧",
        "ic": "classicon_monk",
        "c": "#00FF98",
        "diff": "看业报",
        "cards": [
          "业报之触",
          "玄牛下凡",
          "气定神闲"
        ],
        "one": "一张牌能把你的爆发原样还给你。",
        "q": [
          [
            "<sk>业报之触</sk> —— 伤害反弹",
            "<b>你攒满层数一次性花掉，正好撞在它上面</b>——损失特别大。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧机动性高，控制要卡准。"
          ],
          [
            "先试探再花层数",
            "<b>这个对局值得先打两下看有没有伤害弹回来</b>，再决定要不要一次性结账。"
          ],
          [
            "层数攒着别急",
            "业报只有几秒，<b>等它过去再花层数</b>是划算的。"
          ]
        ],
        "arena": "增强萨一次花掉满层的伤害很集中，撞上业报损失比持续输出的专精大。先试探。",
        "duel": "单挑等业报过去再结账，这几秒继续攒层不亏。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "追不上",
        "cards": [
          "树皮术",
          "旅行形态",
          "气定神闲"
        ],
        "one": "他绕着你跑，而你需要贴脸。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "不是免疫，可以打但性价比低。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "<b>他跑掉你就攒不了层</b>。"
          ],
          [
            "<sk>烈焰震击</sk>与减速",
            "贴上就种减速，德鲁伊怕的是走不掉。"
          ],
          [
            "<sk>升腾</sk>应对风筝",
            "远程攻击期间他跑也没用。"
          ]
        ],
        "arena": "<sk>电能图腾</sk>卡在他要变形那一刻，2 秒延迟正好配合队友的定身。",
        "duel": "单挑用<sk>升腾</sk>和减速黏住，追不上就攒不了资源。"
      },
      {
        "id": "demonhunter",
        "n": "恶魔猎手",
        "ic": "classicon_demonhunter",
        "c": "#A330C9",
        "diff": "拼机动",
        "cards": [
          "恶魔变形",
          "疾影",
          "黑曜鳞片"
        ],
        "one": "机动性高于你，但他必须近身。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打，只是效率下降。"
          ],
          [
            "二段跳与冲刺",
            "DH 位移多，但<b>他必须贴上来才能输出</b>。"
          ],
          [
            "他贴上来正合你意",
            "<b>你也需要近战距离攒层</b>——这个对局距离不是问题。"
          ],
          [
            "他的打断",
            "DH 有打断手段，<b>但你的法术大多靠层数变瞬发</b>，影响有限。"
          ]
        ],
        "arena": "他必须近身，你也需要近身——这个对局位置不是问题，比的是资源转化效率。",
        "duel": "单挑时他的打断对你影响小，因为层数让你的法术是瞬发的。"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "看悬空",
        "cards": [
          "悬空",
          "黑曜鳞片"
        ],
        "one": "会飞的布甲，你够不着的时候多。",
        "q": [
          [
            "<sk>黑曜鳞片</sk> · <sk>悬空</sk>",
            "悬空期间近战够不着，<b>但你有法术能打</b>。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离。"
          ],
          [
            "<sk>风剪</sk>打断蓄力",
            "唤魔师有大量蓄力技能，<b>打断一次抵消一大段伤害</b>。"
          ],
          [
            "层数是你的远程手段",
            "<b>悬空期间用攒好的层数放闪电</b>——这一点比纯近战强很多。"
          ]
        ],
        "arena": "悬空期间正好把攒的层数花掉，你的闪电够得着他。",
        "duel": "单挑靠<sk>风剪</sk>断蓄力，唤魔师的伤害大半来自蓄力技能。"
      }
    ]
  },
  "roles": null,
  "memb": null,
  "play": null,
  "quiz": [
    {
      "id": "g1",
      "t": "general",
      "d": 1,
      "s": "你的漩涡武器已经攒满，还在贴着目标打近战。",
      "a": "这样有问题吗？",
      "o": [
        "没问题，近战伤害也是伤害",
        "有问题，层数满了之后每一下都在浪费",
        "没问题，可以一直攒",
        "要看目标血量"
      ],
      "r": 1,
      "e": [
        "近战伤害不是你的主要输出来源。",
        "正解。<b>层数满了之后，再打近战不会攒更多</b>——这时候每一下都没产生资源价值。攒够就该找机会把层数花掉。",
        "层数有上限，攒不了更多。",
        "跟目标血量无关，这是资源溢出的问题。"
      ],
      "k": "层数满了就该花。这跟纯近战「一直贴着打」的直觉相反。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "你刚落地，漩涡武器一层都没有。",
      "a": "第一件事做什么？",
      "o": [
        "立刻放<sk>闪电链</sk>",
        "贴上去用<sk>风暴打击</sk>攒层",
        "交<sk>毁灭之风</sk>",
        "放<sk>根基图腾</sk>"
      ],
      "r": 1,
      "e": [
        "没层数的闪电链是慢速施法且伤害低。",
        "正解。<b>你的近战是攒资源的手段</b>——层数是法术伤害的全部来源，没层数你只是个普通近战。",
        "<sk>毁灭之风</sk>会加快层数生成，但你现在没层数可花，开早了浪费。",
        "<sk>根基图腾</sk>要预判着放，开场没有明确目标。"
      ],
      "k": "增强萨的第一动作是贴上去攒层。资源在前，输出在后。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 3,
      "s": "你打算用<sk>根基图腾</sk>吸掉对面治疗的一个大治疗。",
      "a": "什么时候放？",
      "o": [
        "看到他抬手开始读条时放",
        "在他开始施法之前预判着放",
        "他读完之后放",
        "血量危险时放"
      ],
      "r": 1,
      "e": [
        "看到抬手才放，图腾还没生效他就读完了。",
        "正解。<b>它吸的是「下一个」法术，需要提前铺好</b>——这是一张要预判的牌，不是反应牌。",
        "读完了再放，什么都吸不到。",
        "血量是结果，判断依据应该是对面要放什么。"
      ],
      "k": "<sk>根基图腾</sk>是预判牌不是反应牌。等你看见了再放就晚了。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "你放了<sk>电能图腾</sk>，对面立刻走开了。",
      "a": "问题出在哪？",
      "o": [
        "图腾没用",
        "它有 2 秒延迟，对面看到就有时间躲",
        "应该放得更近",
        "应该先控住他们"
      ],
      "r": 1,
      "e": [
        "图腾有用，是用法的问题。",
        "正解。<b><sk>电能图腾</sk>召唤后 2 秒才爆炸</b>——这 2 秒是它最大的限制。要么放在对面必须待的位置，要么配合队友的定身一起用。",
        "距离不是核心问题，延迟才是。",
        "「先控住」是正确方向，但要说清楚是因为有 2 秒延迟。"
      ],
      "k": "延迟型控制要么放在必经之路，要么配合定身。别指望对面站着等。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "队友被恐惧，你手上有 Tremor Totem。",
      "a": "这个图腾能解吗？",
      "o": [
        "能，它移除恐惧、魅惑和睡眠",
        "不能，只能解减速",
        "不能，只对自己有效",
        "要看恐惧的来源"
      ],
      "r": 0,
      "e": [
        "正解。<b>Tremor Totem 移除范围内小队成员的恐惧、魅惑和睡眠效果</b>——对术士、牧师这类以恐惧为主要手段的对手非常有用。",
        "它解的是精神类控制，不是减速。",
        "它影响范围内的所有小队成员。",
        "不管来源，这三类效果都能移除。"
      ],
      "k": "知道每个图腾解什么，才知道对上谁该提前放哪个。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "对面治疗在读一个大治疗，你手上<sk>风剪</sk>和<sk>妖术</sk>都好着。",
      "a": "用哪个？",
      "o": [
        "<sk>妖术</sk>，控住更久",
        "<sk>风剪</sk>打断",
        "两个一起",
        "都不用"
      ],
      "r": 1,
      "e": [
        "<sk>妖术</sk>是长控，<b>该用来把人踢出这一波战斗</b>，不是断一次读条。",
        "正解。<sk>风剪</sk>是专门的打断，冷却短。<b>能用打断解决的别动长控。</b>",
        "两个叠一起纯浪费。",
        "大治疗读完，这一轮的伤害就白打了。"
      ],
      "k": "打断解决读条，长控留给需要把人踢出战斗的时候。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 3,
      "s": "你正准备把攒满的层数一次性花掉，对面武僧开了<sk>业报之触</sk>。",
      "a": "怎么办？",
      "o": [
        "照常花掉，伤害够高",
        "等业报过去再花，这几秒继续攒",
        "花一半",
        "换目标花"
      ],
      "r": 1,
      "e": [
        "<b>增强萨一次花掉满层的伤害很集中</b>，撞上反伤损失比持续输出的专精大得多。",
        "正解。业报只有几秒，<b>层数不会消失</b>——等它过去再一次性结账，这几秒还能继续攒。",
        "业报按伤害算，花多少弹多少。",
        "换目标是选项，但层数攒着等更简单。"
      ],
      "k": "集中爆发型的输出撞上反伤，损失比持续型大。层数能等，反伤不能。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "你在打对面的法师，他开了<sk>寒冰屏障</sk>（完全免疫），你的层数是满的。",
      "a": "该做什么？",
      "o": [
        "把层数花在他身上",
        "留着层数，转打他队友或继续攒",
        "花掉层数免得溢出",
        "用<sk>妖术</sk>控他"
      ],
      "r": 1,
      "e": [
        "免疫期间打进去是 0，满层的伤害全浪费。",
        "正解。<b>层数是有价值的资源，不该花在免疫上</b>。转打别人，或者继续贴着攒（虽然会溢出，但比花在空气上强）。",
        "「免得溢出」不是花在免疫上的理由——溢出损失的是几层，花在免疫上损失的是全部。",
        "免疫期间控制也进不去。"
      ],
      "k": "资源不该花在免疫上。宁可小幅溢出，也别把满层打进空气。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "增强萨的英雄天赋：唤雷者 36/50，图腾师 14/50。",
      "a": "这个分布说明什么？",
      "o": [
        "唤雷者是唯一解",
        "多数派更强，但另一条线不是废的",
        "两条一样强",
        "数据不可靠"
      ],
      "r": 1,
      "e": [
        "50/0 才是唯一解，36/14 不是。",
        "正解。<b>有 28% 的人走图腾师</b>——这跟多数专精 50/0 的一边倒不同，说明这一格有真实的讨论空间。多数派更强，但另一条也成立。",
        "36 比 14 是明显差距，不是一样强。",
        "数据本身没问题，是分布形状说明了问题。"
      ],
      "k": "看英雄天赋分布的形状：50/0 是唯一解，36/14 是「有主流但有得选」。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面是纯法系阵容（法师 + 术士）。",
      "a": "<sk>根基图腾</sk>的价值如何？",
      "o": [
        "很低，法系伤害它吸不到",
        "很高，对面所有伤害都是法术",
        "一般",
        "跟阵容无关"
      ],
      "r": 1,
      "e": [
        "它专门重定向有害法术。",
        "正解。<b>对面全是法术输出时，<sk>根基图腾</sk>能吸的东西最多</b>——43/50 的使用率说明它在多数阵容里都值，纯法系阵容更是如此。",
        "价值很高不是一般。",
        "它的价值跟对面的伤害类型直接相关。"
      ],
      "k": "吸法术的牌，价值跟对面有多少法术输出成正比。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "你被战士贴着打，一直被赶开够不着人。",
      "a": "这对增强萨意味着什么？",
      "o": [
        "只是输出降低",
        "资源断了：层数攒不了，法术也放不出来",
        "没什么影响",
        "应该换目标"
      ],
      "r": 1,
      "e": [
        "损失比「输出降低」严重。",
        "正解。<b>你的近战是攒资源的手段</b>——被赶开损失的不只是近战伤害，是整条「攒层 → 放法术」的链子。",
        "影响很大。",
        "换目标不解决「贴不上」这个问题。"
      ],
      "k": "认清自己的资源从哪来。增强萨被赶开等于断粮，不只是少打几下。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "关于 Shamanism 这个 PvP 天赋（50/50 必带）。",
      "a": "它改了什么？",
      "o": [
        "提高伤害",
        "嗜血冷却缩短到 60 秒且不再受疲惫限制",
        "增加图腾数量",
        "提高治疗"
      ],
      "r": 1,
      "e": [
        "它不直接加伤害。",
        "正解。<b>嗜血冷却降到 60 秒、急速加成提高，而且不再受疲惫限制</b>——这意味着一局可以用很多次，是团队价值的大幅提升。",
        "跟图腾无关。",
        "它影响的是急速加成不是治疗。"
      ],
      "k": "增强萨的 PvP 天赋里，团队价值的权重很高。Shamanism 是典型。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你要开<sk>毁灭之风</sk>，手上层数已经快满了。",
      "a": "顺序上该注意什么？",
      "o": [
        "直接开，越早越好",
        "先把手上的层数花掉再开",
        "边开边攒",
        "开完立刻放闪电"
      ],
      "r": 1,
      "e": [
        "<sk>毁灭之风</sk>期间层数生成加快，手上已经快满了再开会立刻溢出。",
        "正解。<b>爆发期间层数生成更快，所以开之前先腾出空间</b>——这是增强萨特有的资源管理判断。",
        "「边开边攒」没解决溢出问题。",
        "开完放闪电是对的，但正确顺序是「先花再开」。"
      ],
      "k": "加快资源生成的冷却，开之前要先腾出资源空间。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "你的<sk>妖术</sk>好着，对面治疗正在读条。",
      "a": "该用妖术打断吗？",
      "o": [
        "该，能打断还能控住",
        "不该，打断是<sk>风剪</sk>的活",
        "该，妖术控得更久",
        "看治疗血量"
      ],
      "r": 1,
      "e": [
        "能打断不等于该用它打断——机会成本太高。",
        "正解。<b><sk>妖术</sk>该用来把人踢出这一波战斗</b>，用它断一次读条是浪费。<sk>风剪</sk>冷却短，专门干这个。",
        "控得久正是它该留给关键时刻的理由。",
        "跟血量无关，这是技能定位的问题。"
      ],
      "k": "每个技能有它最擅长的场景。长控用来改变战局，不是用来断读条。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "对面猎人一直风筝，你贴不上去。",
      "a": "增强萨的破解手段是什么？",
      "o": [
        "<sk>幽魂之狼</sk>一路追",
        "<sk>升腾</sk>，攻击变成远程",
        "放弃他",
        "用图腾拦"
      ],
      "r": 1,
      "e": [
        "追不上有位移的猎人。",
        "正解。<b><sk>升腾</sk>把你的攻击转为无视护甲的远程风之攻击</b>——这是增强萨对付风筝最有效的一手，他跑你也打得到。",
        "猎人是威胁，不能放弃。",
        "图腾是固定位置的，拦不住一直跑的人。"
      ],
      "k": "知道自己有没有「不受距离限制」的手段，够不着的局面就没那么被动。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "增强萨的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "急速",
        "精通",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 急速 65 > 精通 15 > 爆击 3</b>。",
        "急速是第二，差距不小。",
        "精通只有 15，在断层之下。",
        "爆击几乎是 0。"
      ],
      "k": "增强萨堆全能，急速次之。精通和爆击装备上带多少算多少。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 3,
      "s": "你和队友都开了爆发，对面治疗被控住 5 秒。你的层数只有一半。",
      "a": "怎么办？",
      "o": [
        "继续攒层，等满了再打",
        "立刻把手上的层数花掉，有多少打多少",
        "等控制结束",
        "换目标"
      ],
      "r": 1,
      "e": [
        "等攒满，控制早结束了——<b>治疗被控的时间是稀缺的</b>。",
        "正解。<b>治疗不在的时间是伤害唯一不会被补回来的窗口</b>，比你的完美层数更稀缺。有多少打多少。",
        "等控制结束就没意义了。",
        "控制窗口里换目标是浪费。"
      ],
      "k": "治疗被控的窗口 > 你的完美资源状态。前者稀缺，后者会再攒起来。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "你被压得很难受，血线一直掉。手上有 Burrow、<sk>星界转移</sk>、<sk>幽魂之狼</sk>。",
      "a": "Burrow 有什么独特之处？",
      "o": [
        "只是减伤",
        "同时解决「挨打」和「跑不掉」两个问题",
        "只是加速",
        "能解控制"
      ],
      "r": 1,
      "e": [
        "它不只是减伤。",
        "正解。<b>Burrow 钻地免疫、清除减速、还提高移动速度</b>——一张牌同时解决两个问题，48/50 的使用率说明这一点。",
        "不只是加速。",
        "它清的是移动减速，不是所有控制。"
      ],
      "k": "一张牌解决多个问题时，它的实际价值高于单项对比。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "对面死骑开了<sk>反魔法护罩</sk>，你的层数是满的。",
      "a": "该做什么？",
      "o": [
        "把层数花掉",
        "攒着别花，等护罩过去",
        "换目标花掉",
        "用近战打"
      ],
      "r": 1,
      "e": [
        "<b>护罩吸法术伤害，而你的层数换来的正是法术输出</b>——花在护罩上损失很大。",
        "正解。层数不会消失，等护罩过去再一次性结账。这几秒继续打近战（虽然会溢出一点，但比花在护罩上强）。",
        "换目标也是选项，但等几秒更简单。",
        "近战可以打，但这题的核心是层数该不该花。"
      ],
      "k": "对面开了克制你输出类型的牌，先把资源攒着。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "你在 3v3，图腾放下去很快被对面打掉了。",
      "a": "该怎么调整？",
      "o": [
        "不放图腾了",
        "注意摆放位置：放太近容易被顺手清掉",
        "多放几个",
        "换个图腾"
      ],
      "r": 1,
      "e": [
        "图腾是增强萨的重要工具，不能不放。",
        "正解。<b>图腾是可以被打掉的实体</b>——放在对面输出的范围技能覆盖区里，会被顺手清掉。要放在能生效但不容易被误伤的位置。",
        "图腾有冷却，放不了几个。",
        "换图腾不解决摆放问题。"
      ],
      "k": "地面上的资源要考虑摆放。能生效 + 不容易被清掉，两个条件都要满足。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "对面圣骑士给他队友上了<sk>保护祝福</sk>（免疫物理）。",
      "a": "对增强萨影响多大？",
      "o": [
        "完全打不动",
        "影响有限，你的主要输出是法术",
        "完全没影响",
        "只影响图腾"
      ],
      "r": 1,
      "e": [
        "那是纯物理专精的处境。",
        "正解。<b>增强萨的伤害有相当一部分是自然/火焰（法术）</b>——被保的目标你还能打进去一部分，比纯物理专精好得多。",
        "你的近战部分会被挡，有一定影响。",
        "不只影响图腾。"
      ],
      "k": "先认清自己的伤害构成，才知道对面哪张免疫牌最疼。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "你注意到增强萨的 PvP 天赋三格里，有两格（Burrow、<sk>根基图腾</sk>）是救命牌不是输出牌。",
      "a": "这说明什么？",
      "o": [
        "这个专精输出不行",
        "增强萨在 PvP 里的价值有相当一部分是团队工具",
        "应该换成输出天赋",
        "数据不准"
      ],
      "r": 1,
      "e": [
        "输出不是问题，是定位问题。",
        "正解。<b>加上 Shamanism（嗜血）也是团队增益</b>——三格全是团队价值。这说明增强萨的定位不只是输出，还有相当一部分是工具人。理解这一点才知道该怎么打。",
        "这是 top50 的实测选择，不是可以随便换的。",
        "数据是 50 人的实测分布。"
      ],
      "k": "PvP 天赋的构成能告诉你这个专精在队伍里的真实定位。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你贴着目标打，层数攒到一半，对面开始拉开距离。",
      "a": "该做什么？",
      "o": [
        "追上去继续攒",
        "用<sk>烈焰震击</sk>减速黏住他",
        "放弃，把现有层数花掉",
        "等他回来"
      ],
      "r": 1,
      "e": [
        "盲目追可能被风筝。",
        "正解。<b>贴上就该先种减速</b>——增强萨的资源靠近战攒，留住人就是留住资源。<sk>烈焰震击</sk>减速是第一手。",
        "半满的层数花掉不划算，先想办法留住人。",
        "等他回来太被动。"
      ],
      "k": "资源靠贴脸攒的专精，减速是保护资源链的手段。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "镜像对局，你和对面增强萨都放了图腾。",
      "a": "优先做什么？",
      "o": [
        "先打人",
        "先打掉他的<sk>根基图腾</sk>",
        "先放自己的图腾",
        "先攒层"
      ],
      "r": 1,
      "e": [
        "他的<sk>根基图腾</sk>会吸掉你的一次法术输出。",
        "正解。<b>不清掉它，你花掉的层数会被它吸走一次</b>——对增强萨来说这是最亏的，因为那是攒了很久的资源。",
        "你的图腾也重要，但对面的威胁更直接。",
        "攒层是持续的，清图腾是有时间窗口的。"
      ],
      "k": "镜像对局先处理会让你资源打空的那个东西。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你要在「一次花光所有层数」和「分几次花」之间选。",
      "a": "什么时候该一次花光？",
      "o": [
        "永远一次花光，伤害集中",
        "对面没有反伤和免疫、且治疗被控时",
        "永远分开花，避免浪费",
        "看自己血量"
      ],
      "r": 1,
      "e": [
        "一次花光撞上反伤或免疫，损失最大。",
        "正解。<b>集中爆发的前提是它能全部落地</b>——对面有<sk>业报之触</sk>、免疫牌，或者治疗能补回来时，集中反而更亏。",
        "永远分开花会错过集火窗口。",
        "自己血量不决定输出方式。"
      ],
      "k": "集中还是分散，取决于伤害能不能全部落地。这跟资源多少无关。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "增强萨怎么应对？",
      "o": [
        "停手等它过去",
        "正好把层数花在闪电上，招架挡不住法术",
        "继续打近战",
        "换目标"
      ],
      "r": 1,
      "e": [
        "完全停手太保守。",
        "正解。<b>招架挡的是近战攻击，挡不住法术伤害</b>——这时候正是花层数的好时机。",
        "近战会被招架，效率很低。",
        "换目标不如换输出方式。"
      ],
      "k": "对面的防御牌挡哪一类伤害，就换用另一类。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>天神下凡</sk>压上来。",
      "a": "该用哪张保命牌？",
      "o": [
        "<sk>幽魂之狼</sk>跑开",
        "Burrow 或<sk>星界转移</sk>扛过那 10 秒",
        "<sk>妖术</sk>控住他",
        "换目标"
      ],
      "r": 1,
      "e": [
        "跑开会断掉你的攒层，而且战士追得上。",
        "正解。<b>他的窗口只有 10 秒</b>——扛过去他就是软目标。Burrow 还能顺带清减速。",
        "<sk>妖术</sk>受到伤害就解除，队友一打就没了。",
        "换目标不解决你正在挨打。"
      ],
      "k": "对爆发窗口短的对手，扛过窗口比躲开更划算。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士交了<sk>圣盾术</sk>，你的层数是满的。",
      "a": "该做什么？",
      "o": [
        "把层数花在他身上",
        "留着层数，转打他队友",
        "花掉免得溢出",
        "用<sk>妖术</sk>控他"
      ],
      "r": 1,
      "e": [
        "完全免疫，满层的伤害全打进空气。",
        "正解。<b>层数是攒了很久的资源，不该花在免疫上</b>。转打别人。",
        "溢出损失几层，花在免疫上损失全部。",
        "免疫期间控制也进不去。"
      ],
      "k": "资源不该花在免疫上，宁可小幅溢出。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士要给队友放关键祝福。你的<sk>根基图腾</sk>好着。",
      "a": "能吸吗？",
      "o": [
        "能，祝福也是法术",
        "不能，只能吸伤害法术",
        "不能，只能吸单体法术",
        "要看祝福类型"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>根基图腾</sk>重定向的是「有害法术」</b>——不过对针对队友的关键法术，提前铺好图腾能吸掉一个。骑士的很多技能都是法术，这是很值的一次吸。",
        "它重定向的是法术，不限于伤害。",
        "它对 30 码内针对队友的法术生效。",
        "关键在于提前铺好，不在于类型细分。"
      ],
      "k": "知道自己的拦截手段能拦什么，才能规划它给谁。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "猎人一直风筝你，贴不上去。",
      "a": "哪个技能能破解？",
      "o": [
        "<sk>幽魂之狼</sk>",
        "<sk>升腾</sk>",
        "<sk>妖术</sk>",
        "<sk>电能图腾</sk>"
      ],
      "r": 1,
      "e": [
        "<sk>幽魂之狼</sk>是加速，追不上有位移的猎人。",
        "正解。<b><sk>升腾</sk>把攻击转为远程风之攻击</b>——他跑你也打得到，这是增强萨对付风筝最有效的一手。",
        "<sk>妖术</sk>是控制，但要贴近才能放。",
        "图腾是固定位置，拦不住一直跑的人。"
      ],
      "k": "够不着的时候，用「不受距离限制」的手段，不用位移硬追。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人用<sk>假死</sk>脱战了。",
      "a": "对增强萨的影响是什么？",
      "o": [
        "没什么影响",
        "你贴不上他就攒不了层，资源链断了",
        "只是少打几下",
        "应该立刻追"
      ],
      "r": 1,
      "e": [
        "影响不小。",
        "正解。<b>增强萨的资源靠近战攒</b>——他脱战跑掉，你既打不到人也攒不了层，这是双重损失。",
        "损失的不只是伤害，是资源。",
        "追一个假死的猎人是徒劳的。"
      ],
      "k": "资源靠贴脸攒的专精，对手脱战的损失比纯远程职业大。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>暗影斗篷</sk>（免疫法术），你的层数快满了。",
      "a": "该做什么？",
      "o": [
        "把层数花掉",
        "攒着别花，转打他队友或继续攒",
        "用近战打他",
        "用<sk>妖术</sk>控他"
      ],
      "r": 1,
      "e": [
        "<b>斗篷免疫法术，而你的层数换来的正是法术输出</b>。",
        "正解。层数攒着等，或者转打他队友。这是这个对局最需要忍住的一下。",
        "近战可以打一点，但这题的核心是层数别浪费。",
        "免疫法术期间<sk>妖术</sk>也进不去。"
      ],
      "k": "对面开了克制你输出类型的牌，资源攒着别花。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>闪避</sk>（大幅提升躲闪）。",
      "a": "对增强萨影响多大？",
      "o": [
        "很大，伤害几乎全丢",
        "影响有限，你的法术伤害照进",
        "完全没影响",
        "只影响图腾"
      ],
      "r": 1,
      "e": [
        "那是纯物理专精的处境。",
        "正解。<b>闪避挡的是物理攻击，你的法术伤害照进</b>——这一点比纯近战专精舒服。同一个贼的两张牌，斗篷对你很疼，闪避影响有限。",
        "近战部分会被闪，有一定影响。",
        "不只影响图腾。"
      ],
      "k": "同一个对手的不同防御牌，对你的威胁可能天差地别。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师放<sk>心灵尖啸</sk>把你们推开。",
      "a": "增强萨有什么解法？",
      "o": [
        "提前放 Tremor Totem",
        "用<sk>星界转移</sk>",
        "用 Burrow",
        "没有解法"
      ],
      "r": 0,
      "e": [
        "正解。<b>Tremor Totem 移除范围内小队成员的恐惧</b>——这是这个对局最有价值的一手，要提前放。",
        "<sk>星界转移</sk>是减伤，不解恐惧。",
        "Burrow 清的是移动减速。",
        "有解法，就是图腾。"
      ],
      "k": "对以恐惧为主要手段的对手，提前铺好能解恐惧的图腾。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师读大治疗，你的<sk>风剪</sk>好着。",
      "a": "该做什么？",
      "o": [
        "打断",
        "用<sk>妖术</sk>控住",
        "继续输出",
        "放<sk>根基图腾</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>风剪</sk>冷却短，专门用来打断</b>。牧师的治疗量硬打穿不现实，断他的手才是解法。",
        "<sk>妖术</sk>该留给把人踢出战斗。",
        "硬打穿牧师的治疗量不现实。",
        "图腾吸的是针对队友的法术，不是他自己的治疗。"
      ],
      "k": "能打断的时候打断，别动长控。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "你的层数该怎么处理？",
      "o": [
        "花掉",
        "攒着，等护罩过去",
        "花在他队友身上",
        "无所谓"
      ],
      "r": 1,
      "e": [
        "护罩吸法术，你的层数换来的是法术输出。",
        "正解。<b>层数不会消失，等护罩过去再结账</b>。这是资源型专精的优势——你可以选择什么时候花。",
        "转打队友也可以，但等几秒更简单直接。",
        "有所谓，这是资源浪费的问题。"
      ],
      "k": "资源可以等，冷却不能等。这是资源型专精的灵活性。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "对上死骑，两边都不跑，纯站桩对耗。",
      "a": "这个对局对增强萨有利吗？",
      "o": [
        "不利，他抓得住你",
        "有利，你不用担心够不着，专心攒层",
        "完全中立",
        "取决于血量"
      ],
      "r": 1,
      "e": [
        "他抓你是事实，但这对你反而不是坏事。",
        "正解。<b>增强萨最怕的是贴不上人</b>——死骑不跑还主动抓你，正好让你安心攒层。这是少数你不用操心距离的对局。",
        "不是中立，对增强萨是有利的距离环境。",
        "跟血量无关，是距离环境的问题。"
      ],
      "k": "对资源靠贴脸攒的专精，「对手不跑」本身就是有利条件。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "镜像对局，对面萨满放了<sk>根基图腾</sk>。",
      "a": "优先做什么？",
      "o": [
        "先打人",
        "先打掉那个图腾",
        "先放自己的图腾",
        "先攒层"
      ],
      "r": 1,
      "e": [
        "不清掉图腾，你的法术输出会被吸掉一次。",
        "正解。<b>那一次被吸掉的是你攒了很久的层数</b>——对增强萨来说这是最亏的一种浪费。",
        "你的图腾也重要，但对面的威胁更直接。",
        "攒层是持续的，清图腾有窗口。"
      ],
      "k": "先处理会让你的资源打空的那个东西。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "对面萨满开了<sk>星界转移</sk>（大幅减伤）。",
      "a": "这是免疫吗？",
      "o": [
        "是，完全免疫",
        "不是，是减伤，可以继续打",
        "是，要停手",
        "要看层数"
      ],
      "r": 1,
      "e": [
        "它是减伤不是免疫。",
        "正解。<b><sk>星界转移</sk>大幅降低受到的伤害，但不是免疫</b>——可以继续打，只是效率下降。这跟<sk>圣盾术</sk>那类完全免疫要分开对待。",
        "不用停手。",
        "跟你的层数无关，是对方技能性质的问题。"
      ],
      "k": "分清「减伤」和「免疫」：前者可以硬打，后者必须停手。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，你一直被冰环和闪现拉开。",
      "a": "核心矛盾是什么？",
      "o": [
        "他伤害太高",
        "他拉开距离你就攒不了层",
        "他血太厚",
        "他控制太多"
      ],
      "r": 1,
      "e": [
        "伤害不是核心问题。",
        "正解。<b>增强萨的资源靠近战攒，法师的整套手段就是不让你贴脸</b>——这是这个对局最核心的矛盾。<sk>升腾</sk>是主要破解手段。",
        "法师是布甲，血不厚。",
        "控制多是手段，目的还是拉开距离。"
      ],
      "k": "认清每个对局的核心矛盾，才知道该用哪张牌破解。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "对上法师，你的<sk>根基图腾</sk>好着。",
      "a": "它在这个对局价值如何？",
      "o": [
        "很低",
        "很高，法师是纯法系，能吸的东西最多",
        "一般",
        "看法师血量"
      ],
      "r": 1,
      "e": [
        "价值很高。",
        "正解。<b>法师所有伤害都是法术</b>——<sk>根基图腾</sk>能吸掉他一个关键法术，对纯法系对手价值最大化。",
        "不是一般，是这个对局最值的牌之一。",
        "跟血量无关。"
      ],
      "k": "吸法术的牌对纯法系对手价值最高。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士用恐惧链拉扯你的队伍。",
      "a": "增强萨的解法是什么？",
      "o": [
        "提前放 Tremor Totem",
        "用<sk>妖术</sk>控他",
        "提高输出",
        "让队友自己解"
      ],
      "r": 0,
      "e": [
        "正解。<b>Tremor Totem 移除恐惧、魅惑和睡眠</b>——对以恐惧为核心手段的术士，这是专门的解法。要提前放。",
        "<sk>妖术</sk>控住他不解已经生效的恐惧。",
        "术士自愈强，拼输出不现实。",
        "被动等待，恐惧链就打完了。"
      ],
      "k": "知道每个图腾解什么，对上谁该提前放哪个。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士靠吸血一直回血。",
      "a": "怎么压？",
      "o": [
        "一次性花光层数爆发",
        "持续压制不给他读条时间",
        "用<sk>妖术</sk>",
        "放弃这个目标"
      ],
      "r": 1,
      "e": [
        "一次爆发压不死，他会慢慢回来。",
        "正解。<b>术士需要时间读条叠 DoT，持续贴身比爆发窗口更能限制他</b>——而且贴着他你还能持续攒层。",
        "<sk>妖术</sk>是控制，不解决自愈。",
        "术士是威胁，不能放弃。"
      ],
      "k": "对需要读条准备的对手，持续压制比等窗口有效。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "武僧开了<sk>业报之触</sk>，你的层数满了准备一次性花掉。",
      "a": "为什么这对增强萨特别危险？",
      "o": [
        "因为业报伤害高",
        "因为你攒满的层数一次花掉伤害很集中，全会弹回来",
        "因为你没有减伤",
        "因为武僧机动性高"
      ],
      "r": 1,
      "e": [
        "业报本身不造成伤害，是反弹你的。",
        "正解。<b>增强萨是「攒很久、一次结账」的模式</b>——这种集中爆发撞上反伤，损失比持续输出的专精大得多。",
        "你有减伤牌，但这不是重点。",
        "机动性跟反伤无关。"
      ],
      "k": "集中爆发型的输出模式，撞上反伤的损失最大。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "你不确定武僧的<sk>业报之触</sk>在不在手上，层数已经满了。",
      "a": "该怎么办？",
      "o": [
        "直接花光，赌他没有",
        "先用近战试探，看有没有伤害弹回来",
        "完全不花，一直攒",
        "换目标花掉"
      ],
      "r": 1,
      "e": [
        "赌错了满层的伤害全弹回来。",
        "正解。<b>先小后大</b>——用近战打两下看反应，再决定要不要一次性花掉层数。试探成本远低于满层被反弹。",
        "一直攒会溢出，而且错过输出机会。",
        "换目标是选项，但试探更直接。"
      ],
      "k": "不确定对面有没有反伤时，先小后大。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊要切<sk>旅行形态</sk>跑掉。",
      "a": "增强萨怎么留人？",
      "o": [
        "<sk>电能图腾</sk>卡在他变形那一刻",
        "<sk>幽魂之狼</sk>追",
        "放弃",
        "用<sk>妖术</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>电能图腾</sk>有 2 秒延迟</b>，正好卡在他准备变形的时候放——或者配合队友的定身。这需要预判。",
        "追不上变形的德鲁伊。",
        "德鲁伊是威胁，不能放弃。",
        "<sk>妖术</sk>受伤就解，队友一打就没了。"
      ],
      "k": "延迟型控制要预判着放，正好卡在对手的关键动作上。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊一直绕着你跑，你贴不上。",
      "a": "对增强萨的影响？",
      "o": [
        "只是输出降低",
        "资源链断了，攒不了层也放不出法术",
        "没影响",
        "应该换目标"
      ],
      "r": 1,
      "e": [
        "损失不只是输出。",
        "正解。<b>贴不上就攒不了层</b>——这是增强萨面对所有风筝型对手的共同困境。<sk>升腾</sk>和减速是破解手段。",
        "影响很大。",
        "换目标不解决结构问题。"
      ],
      "k": "资源靠贴脸攒的专精，被风筝的损失是双重的。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "对上恶魔猎手，他机动性远高于你。",
      "a": "这个对局的距离问题严重吗？",
      "o": [
        "很严重，你追不上",
        "不严重，他必须近身才能输出",
        "中立",
        "取决于他的血量"
      ],
      "r": 1,
      "e": [
        "你确实追不上，但这不是问题的关键。",
        "正解。<b>DH 必须贴上来才能输出</b>——你也需要近战距离攒层，所以他主动贴上来正合你意。这个对局距离不是核心矛盾。",
        "对增强萨其实是有利的。",
        "跟血量无关。"
      ],
      "k": "「对手必须近身」对需要贴脸的专精是有利条件，不是威胁。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 有打断手段。",
      "a": "对增强萨影响大吗？",
      "o": [
        "很大，你的法术都要读条",
        "影响有限，层数让你的法术是瞬发的",
        "完全没影响",
        "只影响图腾"
      ],
      "r": 1,
      "e": [
        "你的主要法术靠层数变成瞬发。",
        "正解。<b>漩涡武器层数让 Lightning Bolt 和闪电链变成瞬发</b>——所以打断对你的影响比对纯法系职业小得多。",
        "治疗类法术仍会被打断。",
        "不只影响图腾。"
      ],
      "k": "瞬发能力越多，对面的打断威胁越小。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中，你在地面。",
      "a": "增强萨这段时间能做什么？",
      "o": [
        "什么都做不了",
        "用攒好的层数放闪电，你的法术够得着",
        "用位移追",
        "换目标"
      ],
      "r": 1,
      "e": [
        "你不是纯近战。",
        "正解。<b>悬空期间近战够不着，但你的闪电类法术打得到</b>——这正是攒层数的意义，也是增强萨比纯近战强的地方。",
        "没有能上天的位移。",
        "你其实够得着他。"
      ],
      "k": "混合型专精在「够不着」的局面里比纯近战有更多手段。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "该做什么？",
      "o": [
        "<sk>风剪</sk>打断",
        "继续攒层",
        "放<sk>根基图腾</sk>",
        "拉开距离"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能，<sk>风剪</sk>冷却短</b>——打断一次抵消一大段伤害。",
        "让他放完，血线会很难看。",
        "图腾吸的是针对队友的法术，来不及应对眼前的蓄力。",
        "拉开距离正合他意。"
      ],
      "k": "对蓄力型对手，短冷却打断该用就用。"
    }
  ]
};
