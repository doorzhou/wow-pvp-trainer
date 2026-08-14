module.exports = {
  "meta": {
    "title": "浩劫 DH PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 浩劫恶魔猎手 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "浩劫DH,恶魔猎手,PVP,竞技场,魔兽世界,12.1,Midnight,havoc demon hunter,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你想打谁就能打谁，全场没人躲得掉。<br>浩劫的判断不是「够不够得着」，是<b>该不该现在冲上去</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"邪能冲撞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_felrush.jpg\" alt=\"邪能冲撞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"复仇回避\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_vengefulretreat2.jpg\" alt=\"复仇回避\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"恶魔追击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_ability_demonhunter_thehunt.jpg\" alt=\"恶魔追击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？机动性解决了距离，也带来了新问题</span><span class=\"sub\">想去哪就去哪，但去错了就回不来</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>邪能冲撞</sk>（多充能）、<sk>复仇回避</sk>（后跳）、<sk>恶魔追击</sk>（远距离突进）——<b>浩劫的机动性是全场顶级的</b>。别的近战在想「怎么贴上去」，你在想「先打谁」。</p><p style=\"margin-top:8px\">但这带来了另一个问题：<b>冲进去容易，出来难</b>。你的位移大多是「向前」的，一旦冲进对面三个人中间，<b>剩下的冷却未必够你出来</b>。这是浩劫最常见的死法。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">浩劫的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"眼棱\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_eyebeam.jpg\" alt=\"眼棱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">资源时钟 · <sk>眼棱</sk></span><span class=\"sub\">它是引导，也是怒气来源</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>眼棱</sk>轰击前方所有敌人，<b>Blind Fury（39/50）让它每秒生成大量怒气并延长持续时间</b>。</p><p style=\"margin-top:8px\"><b>但它是引导技能</b>——期间你站着不动，这跟浩劫「一直在动」的直觉相反。所以开它之前要确认这几秒是安全的。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恶魔变形\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_metamorphasistank.jpg\" alt=\"恶魔变形\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>恶魔变形</sk></span><span class=\"sub\">重置关键技能的冷却</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>变身期间伤害大幅提升，<b>Chaotic Transformation 让它立刻重置刃舞和眼棱的冷却</b>。</p><p style=\"margin-top:8px\"><b>所以它不只是加伤害，是「让你多打一轮」</b>——开的时机要配合那两个技能的冷却状态。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"疾影\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_blur.jpg\" alt=\"疾影\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_darkness.jpg\" alt=\"黑暗\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">生存时钟 · 两张防御牌</span><span class=\"sub\">一张给自己，一张给全队</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>疾影</sk>提高闪避并减伤、<sk>黑暗</sk>给范围内所有人闪避几率。</p><p style=\"margin-top:8px\"><b>Pitch Black（40/50）把<sk>黑暗</sk>的冷却砍掉一大半</b>——这说明 top50 认为「给队伍一个躲伤害的窗口」值得为它花一格天赋。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"刃舞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_bladedance.jpg\" alt=\"刃舞\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：奥达奇掠夺者 Aldrachi Reaver</span><span class=\"sub\">top50 里 50 人全用，邪能灼痕 0 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>奥达奇掠夺者（Aldrachi Reaver）50/50</b>，邪能灼痕（Fel-Scarred）是 <b>0</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线围绕 Reaver's Glaive 展开——<b>消耗灵魂碎片后，你的下一次<sk>投掷利刃</sk>会开启一套强化循环</b>，接下来的混乱打击和刃舞依次获得递增加成。它给浩劫加了一层「按顺序打」的节奏要求。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"禁锢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_imprison.jpg\" alt=\"禁锢\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：两格接近必带，一格看阵容</span><span class=\"sub\">Blood Moon + Glimpse</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Blood Moon（50/50）</b>—— 全员必带。让 Consume Magic 变成范围驱散并生成灵魂碎片，<b>把一个单体功能技能变成了范围解场手段</b>。</p><p style=\"margin-top:8px\"><b>Glimpse（49/50）</b>—— <sk>复仇回避</sk>提供失控免疫并在落地前减伤。<b>它把一个位移技能变成了保命技能</b>，这是浩劫敢往里冲的底气之一。</p><p style=\"margin-top:8px\"><b>Reverse Magic（30/50）</b>移除全队有害魔法效果并反弹、<b>Detainment（20/50）</b>让<sk>禁锢</sk>的目标免疫伤害和治疗。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">Detainment 值得注意：<b>它让禁锢变成「把人移出战斗」</b>，跟德鲁伊的<sk>旋风</sk>是同一类效果。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"邪能冲撞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_felrush.jpg\" alt=\"邪能冲撞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"眼棱\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_eyebeam.jpg\" alt=\"眼棱\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"刃舞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_bladedance.jpg\" alt=\"刃舞\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"邪能冲撞\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_felrush.jpg\" alt=\"邪能冲撞\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"复仇回避\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_vengefulretreat2.jpg\" alt=\"复仇回避\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 冲进去之前先想怎么出来</span><span class=\"sub\">你的位移大多是向前的</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>邪能冲撞</sk>是向前冲、<sk>恶魔追击</sk>是突进——<b>它们都不能帮你脱离</b>。</p><p style=\"margin-top:8px\"><b>能帮你出来的只有<sk>复仇回避</sk>（后跳）</b>。所以冲进对面人堆之前，先看它在不在冷却。这是浩劫最常见的死法。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"眼棱\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_eyebeam.jpg\" alt=\"眼棱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · <sk>眼棱</sk>要站定引导</span><span class=\"sub\">这跟浩劫的直觉相反</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>它是引导技能，<b>期间你不能移动</b>——而 Blind Fury 让它变得更长。</p><p style=\"margin-top:8px\"><b>所以开它之前要确认这几秒安全</b>：对面控制交完了、或者你有<sk>疾影</sk>顶着。被打断的眼棱既没伤害也没怒气。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恶魔变形\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_metamorphasistank.jpg\" alt=\"恶魔变形\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>恶魔变形</sk>要配合冷却开</span><span class=\"sub\">它会重置刃舞和眼棱</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Chaotic Transformation 让它立刻重置<sk>刃舞</sk>和<sk>眼棱</sk>的冷却。</p><p style=\"margin-top:8px\"><b>所以最优的开法是：先把这两个技能用掉，再变形</b>——这样你等于多打了一整轮。冷却是满的时候变形，那部分重置就浪费了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"投掷利刃\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_throwglaive.jpg\" alt=\"投掷利刃\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"混乱打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_chaosstrike.jpg\" alt=\"混乱打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · Reaver's Glaive 的循环要按顺序</span><span class=\"sub\">第二个强化技能加成更高</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>消耗碎片后，<sk>投掷利刃</sk>变成 Reaver's Glaive，开启强化循环——<b>第一个强化技能加成较小，第二个更大</b>。</p><p style=\"margin-top:8px\"><b>所以顺序不是随便的</b>：想让哪个技能吃更大加成，就把它放在第二位。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"禁锢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_imprison.jpg\" alt=\"禁锢\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"悲苦咒符\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_sigilofmisery.jpg\" alt=\"悲苦咒符\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 你的控制手段</span><span class=\"sub\">一个单体一个范围</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>禁锢</sk>单体长控（Detainment 让目标免疫伤害治疗）、<sk>悲苦咒符</sk>范围恐惧、<sk>混乱新星</sk>范围昏迷。</p><p style=\"margin-top:8px\"><b>咒符有延迟</b>——放下 2 秒后才激活，所以要预判位置，不能当即时控制用。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"疾影\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_blur.jpg\" alt=\"疾影\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_demonhunter_darkness.jpg\" alt=\"黑暗\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 两张防御牌的分工</span><span class=\"sub\">一张自保一张团队</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>疾影</sk>给自己、<sk>黑暗</sk>给范围内所有人。</p><p style=\"margin-top:8px\"><b><sk>黑暗</sk>是概率闪避不是稳定减伤</b>——它在「对面一波集中爆发」时价值最高，面对持续伤害时收益不稳定。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">冲进去之前先看<sk>复仇回避</sk>在不在</div><div class=\"dd\">你的位移大多向前。能帮你出来的只有它。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\"><sk>恶魔变形</sk>要在刃舞和眼棱用掉之后开</div><div class=\"dd\">它会重置这两个技能。冷却满的时候变形，重置就浪费了。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\"><sk>眼棱</sk>是引导，开之前确认这几秒安全</div><div class=\"dd\">被打断的眼棱既没伤害也没怒气。这跟浩劫「一直在动」的直觉相反。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁能定住我？</b>你的机动性靠位移，<b>被定身之后浩劫就是个普通近战</b>。</p><p style=\"margin-top:8px\"><b>2 · 我冲进去之后怎么出来？</b><sk>复仇回避</sk>是唯一的后退手段，进去之前先确认它在。</p><p style=\"margin-top:8px\"><b>3 · 什么时候能安心引导<sk>眼棱</sk>？</b>它是你的怒气来源，但要站定几秒。</p></div><div class=\"sc\"><h4>Glimpse 为什么 49/50</h4><p>它让<sk>复仇回避</sk>提供<b>失控效果免疫</b>并在落地前减伤。</p><p style=\"margin-top:8px\"><b>这把一个纯位移技能变成了保命技能</b> —— 浩劫敢往对面人堆里冲，很大程度上是因为知道自己有这一手能退出来。理解这一点，才知道为什么它的使用率这么高。</p></div>"
  },
  "sk": {
    "邪能冲撞": "ability_demonhunter_felrush",
    "复仇回避": "ability_demonhunter_vengefulretreat2",
    "恶魔追击": "inv_ability_demonhunter_thehunt",
    "眼棱": "ability_demonhunter_eyebeam",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "疾影": "ability_demonhunter_blur",
    "黑暗": "ability_demonhunter_darkness",
    "投掷利刃": "ability_demonhunter_throwglaive",
    "禁锢": "ability_demonhunter_imprison",
    "旋风": "spell_nature_earthbind",
    "刃舞": "ability_demonhunter_bladedance",
    "悲苦咒符": "ability_demonhunter_sigilofmisery",
    "混乱新星": "spell_fire_felfirenova",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "剑在人在": "ability_warrior_challange",
    "天神下凡": "warrior_talent_icon_avatar",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "保护祝福": "spell_holy_sealofprotection",
    "灵龟守护": "ability_hunter_pet_turtle",
    "逃脱": "ability_rogue_feint",
    "假死": "ability_rogue_feigndeath",
    "闪避": "spell_shadow_shadowward",
    "消失": "ability_vanish",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "瓦解": "ability_demonhunter_consumemagic",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "星界转移": "ability_shaman_astralshift",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "树皮术": "spell_nature_stoneclawtotem",
    "日光术": "ability_vehicle_sonicshockwave",
    "黑曜鳞片": "inv_artifact_dragonscales",
    "悬空": "ability_evoker_hover",
    "混乱打击": "ability_demonhunter_chaosstrike",
    "冰冻陷阱": "spell_frost_chainsofice",
    "纠缠根须": "spell_nature_stranglevines"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "esc",
      "t": "<sk>复仇回避</sk>在手上",
      "d": "你的位移大多向前。没有它，冲进去就出不来"
    },
    {
      "k": "cd",
      "t": "<sk>刃舞</sk>和<sk>眼棱</sk>已经用掉",
      "d": "<sk>恶魔变形</sk>会重置它们。冷却满的时候变形，重置就浪费了"
    },
    {
      "k": "safe",
      "t": "你能安心引导<sk>眼棱</sk>",
      "d": "它是引导技能，期间不能移动。被打断就既没伤害也没怒气"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的爆发会打空"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别冲，你现在出不来</h3><p><sk>复仇回避</sk>不在手上，冷却也没准备好。<b>浩劫最常见的死法就是冲进去出不来</b>——先等位移转好。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别冲，条件差太多</h3><p>该有的都没有。<b>机动性强不等于可以随便进</b>——冲进对面三个人中间，一套控制你就交代了。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但别深入</h3><p>在边缘打，逼对面转身。<b>把<sk>恶魔变形</sk>留给能安心站定的时候</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以冲，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>没退路就是有去无回，冷却没铺就是变形浪费，站不住就是眼棱断</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>刃舞</sk>和<sk>眼棱</sk>先用掉 → <sk>恶魔变形</sk>重置它们 → 再来一轮 → <sk>复仇回避</sk>留着随时撤。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "冲之前先看<sk>复仇回避</sk>",
      "<b>你的位移大多向前，能帮你出来的只有它。</b>进对面人堆之前先确认它在。",
      "复仇回避"
    ],
    [
      "<sk>邪能冲撞</sk>接近，别一次用完",
      "它有多次充能，<b>但留一次在手上</b>——你可能需要它调整位置而不是接近。",
      "邪能冲撞"
    ],
    [
      "先用掉<sk>刃舞</sk>和<sk>眼棱</sk>",
      "<b><sk>恶魔变形</sk>会重置这两个技能</b>。先用掉再变形，等于多打一整轮。",
      "刃舞"
    ],
    [
      "<sk>恶魔变形</sk>开窗口",
      "伤害大幅提升并重置关键冷却。<b>这是浩劫伤害最集中的一段。</b>",
      "恶魔变形"
    ],
    [
      "<sk>眼棱</sk>在安全的时候引导",
      "它是怒气来源，<b>但期间你站着不动</b>。确认对面控制交完再开。",
      "眼棱"
    ],
    [
      "Reaver's Glaive 按顺序打",
      "第一个强化技能加成小、第二个大。<b>想让哪个吃更大加成就放在第二位。</b>",
      "投掷利刃"
    ],
    [
      "控制用<sk>禁锢</sk>或<sk>混乱新星</sk>",
      "<sk>禁锢</sk>是单体长控（Detainment 让目标免疫伤害）、<sk>混乱新星</sk>是范围昏迷。",
      "禁锢"
    ],
    [
      "被集火就撤，别恋战",
      "<sk>复仇回避</sk>后跳（Glimpse 提供失控免疫和减伤）、<sk>疾影</sk>提高闪避。<b>你的机动性是用来进出的，不是只用来进。</b>",
      "疾影"
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
        "diff": "拼爆发",
        "cards": [
          "剑在人在",
          "天神下凡",
          "破胆怒吼"
        ],
        "one": "两个近战对砍，比谁的窗口更准。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "<b>你的伤害以混乱/物理为主，招架有效</b>——等它过去。"
          ],
          [
            "他贴得上你",
            "两边都不缺接近手段，距离不是问题。"
          ],
          [
            "<b>他的爆发是明牌</b>",
            "看到<sk>天神下凡</sk>就用<sk>疾影</sk>或撤出来，扛过那 10 秒。"
          ],
          [
            "机动性是你的优势",
            "<b>他没有真正的脱身手段，你有</b>——可以打了就走，等他冷却空转。"
          ]
        ],
        "arena": "你能进能出，他只能进。打完一轮撤出来，等他冷却空转再回来。",
        "duel": "单挑靠机动性风筝，他的爆发窗口过去你就占优。"
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
            "停手换目标，别把<sk>恶魔变形</sk>的时间浪费掉。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "你不太依赖减速，影响有限。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你的伤害有相当一部分是混乱伤害</b>——被保的目标还能打进去一些。"
          ],
          [
            "<sk>禁锢</sk>控住治疗",
            "Detainment 让被禁锢的目标免疫伤害和治疗，<b>等于把治疗移出战斗</b>。"
          ]
        ],
        "arena": "Detainment 的<sk>禁锢</sk>能把治疗骑整个移出战斗，这是这个对局最有价值的一手。",
        "duel": "单挑等<sk>圣盾术</sk>过去，免疫期间攒怒气。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "追得上",
        "cards": [
          "灵龟守护",
          "假死",
          "逃脱",
          "猎豹守护"
        ],
        "one": "他有一堆脱身牌，但你追得上。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间打他等于没打，等它过去。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "他能反复重置，但<b>你的机动性追得上</b>。"
          ],
          [
            "<b>他的陷阱和控制</b>",
            "<b>被定住之后你就是普通近战</b>——注意冰冻陷阱的位置。"
          ],
          [
            "压着他不给喘息",
            "猎人怕的是一直被贴住，<b>这正是你能做的</b>。"
          ]
        ],
        "arena": "你是少数能一直贴住猎人的专精。注意陷阱位置，别被定住。",
        "duel": "单挑压着打，他的重置牌用完就跑不掉了。"
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
        "one": "他决定开场，但你追得上。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你的伤害以混乱/物理为主，斗篷影响有限</b>。"
          ],
          [
            "<sk>闪避</sk>挡物理",
            "<b>这张对你更疼</b>——你的物理伤害部分会大量落空。"
          ],
          [
            "<sk>消失</sk>重置",
            "他能断开，但你的机动性能咬住。"
          ],
          [
            "保命牌留在手上",
            "贼从潜行开场，别在他现身前把<sk>疾影</sk>交掉。"
          ]
        ],
        "arena": "<sk>闪避</sk>比<sk>暗影斗篷</sk>对你更疼（你的物理部分占比不小）。",
        "duel": "单挑靠机动性咬住他，贼一旦跑不掉就很难打。"
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
        "one": "他要读条，你有打断也有位移。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "短时间的，等它过去。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧会打断你的<sk>眼棱</sk>引导。"
          ],
          [
            "<sk>瓦解</sk>打断大治疗",
            "<b>Disrupting Fury 让打断还能生成怒气</b>——一举两得。"
          ],
          [
            "<sk>禁锢</sk>把他移出战斗",
            "Detainment 版本的禁锢比硬打穿治疗量现实。"
          ]
        ],
        "arena": "<sk>瓦解</sk>打断 + <sk>禁锢</sk>移出战斗，两手都比硬打穿治疗量有效。",
        "duel": "单挑用打断压他的治疗节奏，你的持续压力耗得过他。"
      },
      {
        "id": "deathknight",
        "n": "死亡骑士",
        "ic": "classicon_deathknight",
        "c": "#C41E3A",
        "diff": "怕被抓",
        "cards": [
          "反魔法护罩",
          "冰封之韧",
          "巫妖之躯"
        ],
        "one": "他抓得住你，但你出得去。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡法术",
            "<b>你的混乱伤害部分会被挡</b>，效率下降。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "<b>但你有<sk>复仇回避</sk>能立刻退出去</b>。"
          ],
          [
            "他的减速和定身",
            "<b>被定住你就是普通近战</b>——这是死骑限制你的主要手段。"
          ],
          [
            "机动性是你的优势",
            "他追不上你，打了就走。"
          ]
        ],
        "arena": "死骑机动性差，你可以打了就走。注意他的定身，被钉住就没优势了。",
        "duel": "单挑靠机动性周旋，等<sk>反魔法护罩</sk>过去再输出。"
      },
      {
        "id": "shaman",
        "n": "萨满祭司",
        "ic": "classicon_shaman",
        "c": "#0070DD",
        "diff": "看图腾",
        "cards": [
          "星界转移",
          "寒冰护体",
          "根基图腾"
        ],
        "one": "他的图腾能限制你的走位。",
        "q": [
          [
            "<sk>星界转移</sk> —— 大减伤",
            "不是免疫，可以继续打。"
          ],
          [
            "地缚与减速",
            "<b>萨满的地缚能钉住你</b>——这是他限制你机动性的手段。"
          ],
          [
            "先处理图腾",
            "关键图腾打掉的收益常常大于继续砍人。"
          ],
          [
            "<sk>禁锢</sk>控住治疗",
            "Detainment 让治疗完全脱离战斗。"
          ]
        ],
        "arena": "萨满的地缚图腾是你的主要威胁，优先清掉它保住机动性。",
        "duel": "单挑先清图腾，被钉住的浩劫失去一半优势。"
      },
      {
        "id": "mage",
        "n": "法师",
        "ic": "classicon_mage",
        "c": "#3FC7EB",
        "diff": "追得上",
        "cards": [
          "寒冰屏障",
          "变形术",
          "冰霜之环",
          "镜像"
        ],
        "one": "他想拉开，但你的机动性不比他差。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "等它自己结束，别浪费爆发。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "<b>他的定身比减速更麻烦</b>——被定住你追不上。"
          ],
          [
            "<sk>瓦解</sk>打断关键法术",
            "打断还能生成怒气。"
          ],
          [
            "你能咬住他",
            "<b>浩劫是少数能一直贴住法师的专精</b>。"
          ]
        ],
        "arena": "你是法师最难甩掉的近战之一。注意他的定身而不是减速。",
        "duel": "单挑咬住他不放，法师被贴住就很难输出。"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "怕恐惧",
        "cards": [
          "虚空行走",
          "恐惧",
          "石肤术"
        ],
        "one": "他的恐惧会打断你的节奏。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "<b>恐惧打断你的引导</b>",
            "<b><sk>眼棱</sk>被恐惧打断损失最大</b>。"
          ],
          [
            "<sk>瓦解</sk>断他的读条",
            "术士需要时间读条。"
          ],
          [
            "压住不给喘息",
            "<b>你的机动性让他很难拉开</b>——持续贴身是最好的打法。"
          ]
        ],
        "arena": "术士需要时间准备，你的机动性正好不给他这个时间。",
        "duel": "单挑持续贴身，注意躲恐惧别让<sk>眼棱</sk>被打断。"
      },
      {
        "id": "monk",
        "n": "武僧",
        "ic": "classicon_monk",
        "c": "#00FF98",
        "diff": "拼机动",
        "cards": [
          "业报之触",
          "玄牛下凡",
          "气定神闲"
        ],
        "one": "两个高机动近战，比谁的控制先落地。",
        "q": [
          [
            "<sk>业报之触</sk> —— 伤害反弹",
            "<b>你的爆发很集中，撞上损失大</b>——看到就停手。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "<b>机动性跟你同级</b>，这是少数你甩不掉也追不掉的对局。"
          ],
          [
            "控制先落地的赢",
            "两边都灵活，<sk>混乱新星</sk>或<sk>禁锢</sk>先命中的拿走这一轮。"
          ],
          [
            "先试探再全交",
            "业报可能在等你的爆发。"
          ]
        ],
        "arena": "两边机动性同级，比的是控制先手。<sk>混乱新星</sk>先命中的赢。",
        "duel": "单挑先试探再开爆发，别把整套撞进<sk>业报之触</sk>。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "追得上",
        "cards": [
          "树皮术",
          "旅行形态",
          "气定神闲"
        ],
        "one": "他想绕着你跑，但你追得上。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "不是免疫，可以打但性价比低。"
          ],
          [
            "<sk>旋风</sk>和<sk>日光术</sk>",
            "<b>旋风把你摘出去、日光术沉默你</b>——两个都打断你的节奏。"
          ],
          [
            "<sk>瓦解</sk>断他的读条",
            "德鲁伊的控制大多要读条，打断价值高。"
          ],
          [
            "你能咬住他",
            "<b>浩劫的机动性追得上德鲁伊</b>。"
          ]
        ],
        "arena": "德鲁伊的控制大多要读条，<sk>瓦解</sk>的价值很高。",
        "duel": "单挑咬住他不放，你的机动性不输他的旅行形态。"
      },
      {
        "id": "demonhunter",
        "n": "恶魔猎手",
        "ic": "classicon_demonhunter",
        "c": "#A330C9",
        "diff": "镜像",
        "cards": [
          "恶魔变形",
          "疾影",
          "黑曜鳞片"
        ],
        "one": "镜像对局：谁先冲进去谁被动。",
        "q": [
          [
            "<sk>疾影</sk>和<sk>黑暗</sk>",
            "两边都有，看谁交得更值。"
          ],
          [
            "两边机动性一样",
            "谁也甩不掉谁。"
          ],
          [
            "<b>先冲的那个被动</b>",
            "<b>因为他的<sk>复仇回避</sk>会先用掉</b>——退路少的那个吃亏。"
          ],
          [
            "控制先落地的赢",
            "<sk>混乱新星</sk>的先手很关键。"
          ]
        ],
        "arena": "镜像的核心是谁先冲进去——先冲的那个退路先用完。",
        "duel": "单挑比耐心和控制先手，输出接近的情况下这决定胜负。"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "克制他",
        "cards": [
          "悬空",
          "黑曜鳞片"
        ],
        "one": "你的机动性和打断正好克制他。",
        "q": [
          [
            "<sk>黑曜鳞片</sk> · <sk>悬空</sk>",
            "悬空期间够不着，但那只有几秒。"
          ],
          [
            "翱翔与击退",
            "<b>但你的位移多，他拉不开</b>。"
          ],
          [
            "<b><sk>瓦解</sk>断他的蓄力</b>",
            "<b>唤魔师的伤害大半来自蓄力，打断价值极高</b>。"
          ],
          [
            "贴住不放",
            "<b>这是浩劫最舒服的对局之一</b>——他要站定蓄力，你不给他机会。"
          ]
        ],
        "arena": "你的高机动 + 打断正好克制需要站定蓄力的唤魔师，这是最舒服的对局之一。",
        "duel": "单挑贴住不放，打断他的每次蓄力。"
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
      "d": 2,
      "s": "你准备冲进对面三个人中间开爆发，<sk>复仇回避</sk>正在冷却。",
      "a": "该冲吗？",
      "o": [
        "冲，机动性强不怕",
        "不冲，你的位移大多向前，没有它出不来",
        "冲，同时交<sk>疾影</sk>",
        "冲一半"
      ],
      "r": 1,
      "e": [
        "机动性强不等于能随便进。",
        "正解。<b><sk>邪能冲撞</sk>和<sk>恶魔追击</sk>都是向前的，能帮你出来的只有<sk>复仇回避</sk></b>——这是浩劫最常见的死法：冲进去出不来。",
        "<sk>疾影</sk>只减伤，不解决「出不去」。",
        "冲进去没法冲一半。"
      ],
      "k": "冲之前先看退路。你的位移大多向前，只有一个能后退。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 3,
      "s": "你的<sk>刃舞</sk>和<sk>眼棱</sk>都是满冷却，<sk>恶魔变形</sk>也好着。",
      "a": "该先做什么？",
      "o": [
        "立刻变形",
        "先把<sk>刃舞</sk>和<sk>眼棱</sk>用掉再变形",
        "同时按",
        "看怒气"
      ],
      "r": 1,
      "e": [
        "冷却满的时候变形，重置效果就浪费了。",
        "正解。<b>Chaotic Transformation 让变形立刻重置这两个技能的冷却</b>——先用掉再变形，等于多打一整轮。",
        "同一个 GCD 按不了这么多。",
        "怒气是次要的，冷却状态才是关键。"
      ],
      "k": "带「重置冷却」效果的技能，要在被重置的技能用掉之后再开。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "你要引导<sk>眼棱</sk>，但对面法师的冰环还在手上。",
      "a": "该开吗？",
      "o": [
        "开，伤害重要",
        "不开，等他的控制交掉",
        "开，同时交<sk>疾影</sk>",
        "换目标"
      ],
      "r": 1,
      "e": [
        "引导被打断，既没伤害也没怒气。",
        "正解。<b><sk>眼棱</sk>是引导技能，期间你不能移动</b>——这跟浩劫「一直在动」的直觉相反。开之前要确认这几秒安全。",
        "<sk>疾影</sk>减伤不防控制。",
        "换目标不解决控制威胁。"
      ],
      "k": "引导技能开之前先看对面控制。浩劫也有站定的时候。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "关于 Glimpse（49/50 接近必带）。",
      "a": "它做了什么？",
      "o": [
        "提高<sk>复仇回避</sk>的距离",
        "让它提供失控效果免疫并在落地前减伤",
        "增加充能",
        "缩短冷却"
      ],
      "r": 1,
      "e": [
        "不是距离。",
        "正解。<b>它把一个纯位移技能变成了保命技能</b>——这是浩劫敢往对面人堆里冲的底气。理解这一点才知道它为什么使用率这么高。",
        "不是加充能。",
        "不是缩短冷却。"
      ],
      "k": "把位移变成保命的天赋，对高机动专精价值最高。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "Reaver's Glaive 开启了强化循环，你有<sk>混乱打击</sk>和<sk>刃舞</sk>可用。",
      "a": "顺序有讲究吗？",
      "o": [
        "没有，随便打",
        "有，第二个强化技能加成更高",
        "有，第一个加成更高",
        "看怒气"
      ],
      "r": 1,
      "e": [
        "顺序影响收益。",
        "正解。<b>第一个强化技能加成较小，第二个更大</b>——想让哪个技能吃更大加成，就把它放在第二位。这是这条英雄天赋线加的一层节奏要求。",
        "反了。",
        "怒气是资源问题，不是顺序问题。"
      ],
      "k": "递增型强化循环，把收益最大的技能放在后面。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 1,
      "s": "浩劫 DH 的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "精通",
        "全能",
        "急速",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>精通 100 > 全能 82 > 急速 32 > 爆击 1</b>。而且精通还会提高你的移动速度（Pursuit）。",
        "全能是第二。",
        "急速第三。",
        "爆击几乎是 0。"
      ],
      "k": "浩劫堆精通。它还顺带提高移动速度。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "你被对面定身了。",
      "a": "这对浩劫意味着什么？",
      "o": [
        "只是几秒不能动",
        "你的核心优势（机动性）被剥夺，变成普通近战",
        "影响不大",
        "只影响追击"
      ],
      "r": 1,
      "e": [
        "损失比想象中大。",
        "正解。<b>浩劫的强度建立在机动性上</b>——被定住之后你既躲不掉伤害也追不上人。所以「对面谁能定住我」是开局要问的第一个问题。",
        "影响很大。",
        "不只影响追击，也影响生存。"
      ],
      "k": "认清自己的核心优势是什么，就知道最怕对面什么手段。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "关于 Pitch Black（40/50）。",
      "a": "它的高使用率说明什么？",
      "o": [
        "它加伤害",
        "top50 认为「给队伍一个躲伤害的窗口」值得花一格",
        "它是自保牌",
        "它加机动性"
      ],
      "r": 1,
      "e": [
        "它不加伤害。",
        "正解。<b>它把<sk>黑暗</sk>的冷却砍掉一大半</b>——<sk>黑暗</sk>是给范围内所有人提供闪避几率的团队技能。80% 的使用率说明这个团队价值被广泛认可。",
        "<sk>黑暗</sk>是团队技能不是自保。",
        "跟机动性无关。"
      ],
      "k": "看高使用率的天赋在强化什么，就知道这个专精的团队定位。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 3,
      "s": "镜像对局，两个浩劫 DH 都满状态。",
      "a": "谁先冲进去有什么后果？",
      "o": [
        "先冲的占先手优势",
        "先冲的被动，因为他的<sk>复仇回避</sk>先用掉",
        "没区别",
        "看伤害高低"
      ],
      "r": 1,
      "e": [
        "先手不等于优势。",
        "正解。<b>退路是有限的</b>——先冲的那个先用掉后跳，剩下的时间里他没有脱身手段。这跟很多对局「抢先手」的直觉相反。",
        "区别很大。",
        "输出接近，退路才是关键。"
      ],
      "k": "退路有限的对局，先动手的那个反而被动。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面开了完全免疫（圣盾术/寒冰屏障），你的<sk>恶魔变形</sk>正开着。",
      "a": "该做什么？",
      "o": [
        "继续打他",
        "转去打他队友",
        "停手等免疫",
        "取消变形"
      ],
      "r": 1,
      "e": [
        "免疫期间打进去是 0。",
        "正解。<b>变形的时间在燃烧</b>——转去打别人，你的伤害加成对他队友一样生效。",
        "干等会浪费掉窗口。",
        "变形不能取消。"
      ],
      "k": "窗口里遇到免疫必须换目标。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 2,
      "s": "关于 Detainment（20/50）这个 PvP 天赋。",
      "a": "它让<sk>禁锢</sk>变成了什么？",
      "o": [
        "只是延长时间",
        "把目标移出战斗——免疫伤害和治疗",
        "增加范围",
        "变成范围控制"
      ],
      "r": 1,
      "e": [
        "不只是延长。",
        "正解。<b>被禁锢的目标免疫伤害和治疗</b>——这跟德鲁伊的<sk>旋风</sk>是同一类效果：把一个人暂时移出战斗。用来摘掉对面治疗很有效。",
        "不是范围问题。",
        "仍是单体控制。"
      ],
      "k": "「免疫伤害和治疗」意味着这个控制的用途是排除，不是控住打。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "你的<sk>邪能冲撞</sk>有多次充能，你一次全用完接近了目标。",
      "a": "有什么风险？",
      "o": [
        "没风险",
        "需要调整位置时没得用了",
        "浪费怒气",
        "会掉血"
      ],
      "r": 1,
      "e": [
        "有风险。",
        "正解。<b><sk>邪能冲撞</sk>不只是接近手段，也是走位手段</b>——全用完之后你就没法快速调整位置了。留一次在手上。",
        "它不消耗怒气。",
        "它不掉血。"
      ],
      "k": "多充能的位移技能，留一次应对突发情况。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "对面武僧开了<sk>业报之触</sk>，你的<sk>恶魔变形</sk>正好好了。",
      "a": "该开吗？",
      "o": [
        "开，窗口不等人",
        "不开，变形期间伤害很集中，撞上损失大",
        "开，但不用大技能",
        "先试探"
      ],
      "r": 1,
      "e": [
        "变形期间你的伤害非常集中。",
        "正解。<b>业报只有几秒，你的变形有更长时间</b>——等它过去再开，损失最小。",
        "业报按伤害算，用什么技能都弹。",
        "业报已经明确开着了，不用试探。"
      ],
      "k": "爆发窗口撞上反伤，宁可等几秒。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "你想用<sk>悲苦咒符</sk>控住对面几个人。",
      "a": "需要注意什么？",
      "o": [
        "直接放",
        "它有 2 秒延迟，要预判位置",
        "范围很小",
        "只能控一个"
      ],
      "r": 1,
      "e": [
        "咒符不是即时生效的。",
        "正解。<b>咒符放下后 2 秒才激活</b>——所以要放在对面「即将去」的位置，或者配合队友的定身。当即时控制用会被躲开。",
        "它是范围控制。",
        "它影响范围内所有敌人。"
      ],
      "k": "延迟型控制要预判，不能当即时技能用。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 3,
      "s": "对面唤魔师在蓄一个大招。",
      "a": "为什么浩劫特别克制他？",
      "o": [
        "伤害高",
        "高机动 + 打断，正好克制需要站定蓄力的对手",
        "血厚",
        "控制多"
      ],
      "r": 1,
      "e": [
        "伤害不是关键。",
        "正解。<b>唤魔师需要站定蓄力，而你的机动性让他拉不开、打断让他放不出来</b>——这是浩劫最舒服的对局之一。",
        "血量不是关键。",
        "控制是手段之一但不是核心。"
      ],
      "k": "高机动 + 打断的组合，天然克制需要站定施法的专精。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 2,
      "s": "你用<sk>瓦解</sk>成功打断了对面施法。",
      "a": "除了打断还有什么收益？",
      "o": [
        "没有",
        "Disrupting Fury 让它生成 30 点怒气",
        "回血",
        "加移动速度"
      ],
      "r": 1,
      "e": [
        "如果点了 Disrupting Fury 就有额外收益。",
        "正解。<b>打断还能生成怒气</b>——一举两得。这让打断在浩劫这里比在别的专精更值得主动去用。",
        "不回血。",
        "不加速。"
      ],
      "k": "打断能换资源时，主动去打断的价值更高。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "<sk>黑暗</sk>给范围内所有人提供闪避几率。",
      "a": "它在什么时候价值最高？",
      "o": [
        "对面持续伤害时",
        "对面一波集中爆发时",
        "自己血低时",
        "开场时"
      ],
      "r": 1,
      "e": [
        "持续伤害下，概率闪避的收益不稳定。",
        "正解。<b>它是概率闪避不是稳定减伤</b>——面对一波集中爆发时，「有几率完全避免一次攻击」的期望收益最高。",
        "它是团队技能，不该只看自己血量。",
        "开场对面还没爆发。"
      ],
      "k": "概率型防御在面对集中爆发时价值最高，面对持续伤害时收益不稳。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "浩劫只有 6 个分歧格，是站上最少的。",
      "a": "这说明什么？",
      "o": [
        "天赋树单调",
        "配点共识度极高，难点全在操作上",
        "数据不可靠",
        "应该多点几个"
      ],
      "r": 1,
      "e": [
        "分歧少不等于单调。",
        "正解。<b>6 个分歧格意味着几乎所有格子都有共识</b>——这个专精的难点完全在操作：进出的时机、冷却的顺序、引导的安全窗口。",
        "数据来自 50 人实测。",
        "天赋点数固定。"
      ],
      "k": "分歧格越少的专精，越是「配点简单、操作难」。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "你被对面集火，血量在掉。",
      "a": "该怎么用你的机动性？",
      "o": [
        "继续输出，机动性是用来进攻的",
        "撤出来，你的机动性是用来进出的",
        "原地交防御",
        "换目标"
      ],
      "r": 1,
      "e": [
        "机动性不只是进攻工具。",
        "正解。<b>你的机动性是用来进出的，不是只用来进</b>——被集火时撤出来，等冷却转好再回去。这是浩劫和纯近战最大的区别。",
        "原地硬扛浪费了你的优势。",
        "换目标不解决你在挨打。"
      ],
      "k": "高机动专精的优势是「能退」，不只是「能进」。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "对面德鲁伊用<sk>旋风</sk>把你摘出去了。",
      "a": "这几秒你的状态？",
      "o": [
        "被控住但能被打",
        "不能行动，也不能被伤害",
        "只是减速",
        "受到持续伤害"
      ],
      "r": 1,
      "e": [
        "这是普通控制的效果。",
        "正解。<b>被<sk>旋风</sk>的人不能行动，但也不能被伤害</b>——对你既是输出损失，也是一种保护。",
        "不是减速。",
        "不造成伤害。"
      ],
      "k": "<sk>旋风</sk>是双向的：剥夺行动也提供免疫。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 3,
      "s": "你的英雄天赋是奥达奇掠夺者（50/50 唯一解）。",
      "a": "它给浩劫加了什么？",
      "o": [
        "只是加伤害",
        "一层「按顺序打」的节奏要求",
        "增加机动性",
        "增加生存"
      ],
      "r": 1,
      "e": [
        "不只是数值。",
        "正解。<b>Reaver's Glaive 开启的强化循环有先后顺序</b>——第一个技能加成小、第二个大。这让浩劫从「随便按」变成了「要想顺序」。",
        "跟机动性无关。",
        "不是生存加成。"
      ],
      "k": "带顺序要求的机制，改变的是操作方式不只是数值。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 2,
      "s": "队友让你去打对面治疗，但治疗站在他们两个输出中间。",
      "a": "该冲吗？",
      "o": [
        "冲，队友要求了",
        "先看<sk>复仇回避</sk>在不在，再决定",
        "冲，用<sk>疾影</sk>顶",
        "不冲"
      ],
      "r": 1,
      "e": [
        "照单执行可能有去无回。",
        "正解。<b>冲进三个人中间的前提是能出来</b>——先确认退路，再谈要不要执行。这不是不配合，是保证配合能持续。",
        "<sk>疾影</sk>减伤不解决脱身。",
        "完全不冲也不对，要看条件。"
      ],
      "k": "配合的前提是你能活着完成它。先确认退路再执行。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你在对面人堆里，<sk>复仇回避</sk>刚用掉。",
      "a": "现在最该做什么？",
      "o": [
        "继续输出",
        "用<sk>邪能冲撞</sk>调整位置往外走",
        "原地交<sk>疾影</sk>",
        "等冷却"
      ],
      "r": 1,
      "e": [
        "退路已经用掉，继续留在里面很危险。",
        "正解。<b><sk>邪能冲撞</sk>虽然是向前冲，但可以朝外冲</b>——这是你留一次充能的意义。",
        "<sk>疾影</sk>能撑一会，但不解决位置问题。",
        "干等会死。"
      ],
      "k": "向前的位移也能用来撤离，只要你朝对的方向用。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "对面盗贼开了<sk>闪避</sk>，你在打他。",
      "a": "对浩劫影响多大？",
      "o": [
        "影响小，你是混乱伤害",
        "影响明显，你的物理伤害部分会大量落空",
        "完全没影响",
        "完全打不动"
      ],
      "r": 1,
      "e": [
        "浩劫有相当一部分物理伤害。",
        "正解。<b>你的伤害是混乱和物理混合的</b>——<sk>闪避</sk>挡物理那部分，所以影响比对纯法术专精大，但不像纯物理专精那么致命。",
        "有明显影响。",
        "混乱伤害部分还能打进去。"
      ],
      "k": "混合伤害类型的专精，对面的单一类型防御牌影响是部分的。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到浩劫的分歧格最少（6 个），但它是操作最难的专精之一。",
      "a": "这两件事怎么统一？",
      "o": [
        "矛盾",
        "配点简单不等于玩法简单——难点在进出时机和冷却顺序",
        "说明数据有问题",
        "说明它很强"
      ],
      "r": 1,
      "e": [
        "不矛盾。",
        "正解。<b>分歧格反映的是「配点有没有共识」，不是「这个专精难不难」</b>——浩劫的难点全在操作层：什么时候冲、冷却按什么顺序、引导什么时候安全。",
        "数据没问题。",
        "强度是另一回事。"
      ],
      "k": "分歧格数量反映配点共识度，跟操作难度是两码事。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "对上战士，两个近战对砍。",
      "a": "你的核心优势是什么？",
      "o": [
        "伤害更高",
        "你能进能出，他只能进",
        "血更厚",
        "控制更多"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>战士没有真正的脱身手段，你有</b>——打完一轮撤出来，等他冷却空转再回去。这是机动性的价值。",
        "战士板甲更厚。",
        "控制数量接近。"
      ],
      "k": "能退的专精对不能退的专精，可以选择交战时机。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>天神下凡</sk>。",
      "a": "该怎么做？",
      "o": [
        "对拼",
        "撤出来或交<sk>疾影</sk>，扛过那 10 秒",
        "控住他",
        "换目标"
      ],
      "r": 1,
      "e": [
        "他的窗口伤害集中，对拼不划算。",
        "正解。<b>他的窗口只有 10 秒，而你能撤</b>——扛过去他就是软目标，那时候再回来。",
        "控制有递减，撑不满 10 秒。",
        "换目标不解决他在打你。"
      ],
      "k": "对短窗口爆发型对手，撤出来比对拼划算。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "对面治疗骑很难打穿，你有 Detainment 版的<sk>禁锢</sk>。",
      "a": "它能做什么？",
      "o": [
        "只是控住他",
        "把他移出战斗——免疫伤害和治疗",
        "造成伤害",
        "驱散他"
      ],
      "r": 1,
      "e": [
        "Detainment 改变了它的性质。",
        "正解。<b>被禁锢的目标免疫伤害和治疗</b>——等于把治疗从这一波里摘出去。这比硬打穿他的治疗量现实得多。",
        "禁锢不造成伤害。",
        "不是驱散。"
      ],
      "k": "「免疫伤害和治疗」的控制，用途是排除不是控住打。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给队友上了<sk>保护祝福</sk>（免疫物理）。",
      "a": "对浩劫影响多大？",
      "o": [
        "完全打不动",
        "部分影响——你的混乱伤害还能进去",
        "没影响",
        "只影响自动攻击"
      ],
      "r": 1,
      "e": [
        "不是完全打不动。",
        "正解。<b>浩劫的伤害是混乱和物理混合的</b>——物理部分被挡，混乱部分还能进。比纯物理专精好，但效率明显下降。",
        "有明显影响。",
        "不只自动攻击。"
      ],
      "k": "混合伤害专精遇到单一类型免疫，效率下降但不归零。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "对上猎人，他有一堆脱身牌。",
      "a": "浩劫的优势在哪？",
      "o": [
        "伤害高",
        "机动性追得上，能一直贴住他",
        "血厚",
        "控制多"
      ],
      "r": 1,
      "e": [
        "输出不是关键。",
        "正解。<b>浩劫是少数能一直咬住猎人的专精</b>——他的重置牌用完就跑不掉了。持续压制是最好的打法。",
        "猎人不厚。",
        "控制数量不是核心。"
      ],
      "k": "对有大量脱身牌的对手，持续压制消耗他的牌。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人在你的必经之路上放了<sk>冰冻陷阱</sk>。",
      "a": "为什么要特别注意？",
      "o": [
        "伤害高",
        "被定住之后你就是普通近战",
        "会驱散你",
        "会减速"
      ],
      "r": 1,
      "e": [
        "陷阱不造成伤害。",
        "正解。<b>浩劫的强度建立在机动性上</b>——被定住之后你既躲不掉也追不上。这是猎人限制你的主要手段。",
        "不驱散。",
        "冰冻陷阱是定身不是减速。"
      ],
      "k": "高机动专精最怕定身。看清对面谁能定住你。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>暗影斗篷</sk>（免疫法术）。",
      "a": "对浩劫影响多大？",
      "o": [
        "完全打不动",
        "影响有限，你的物理部分还能进",
        "没影响",
        "只影响自动攻击"
      ],
      "r": 1,
      "e": [
        "不是完全打不动。",
        "正解。<b>斗篷免疫法术，而浩劫有相当一部分物理伤害</b>——影响比对纯法术专精小。反而是<sk>闪避</sk>对你更疼。",
        "混乱伤害部分被挡，有影响。",
        "影响的是混乱伤害部分。"
      ],
      "k": "混合伤害专精对单一类型的免疫牌抗性更好。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼<sk>消失</sk>断开了这一轮。",
      "a": "浩劫能追上吗？",
      "o": [
        "不能，他隐身了",
        "消失期间追不上，但他现身后你的机动性能咬住",
        "能，直接追",
        "要等队友"
      ],
      "r": 1,
      "e": [
        "隐身期间确实追不上。",
        "正解。<b>他消失的那几秒你追不上，但他必须现身才能输出</b>——那时候你的机动性能咬住他。",
        "隐身状态看不见。",
        "不用完全依赖队友。"
      ],
      "k": "对能隐身的对手，等他现身再用机动性咬住。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师读大治疗，你的<sk>瓦解</sk>好着。",
      "a": "打断有什么额外收益？",
      "o": [
        "没有",
        "Disrupting Fury 让它生成 30 点怒气",
        "回血",
        "加速"
      ],
      "r": 1,
      "e": [
        "如果点了 Disrupting Fury 就有。",
        "正解。<b>打断还能生成怒气</b>——所以浩劫应该主动去找打断机会，而不是把它当纯防守技能。",
        "不回血。",
        "不加速。"
      ],
      "k": "打断能换资源时，主动找机会打断。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师用<sk>心灵尖啸</sk>打断了你的<sk>眼棱</sk>引导。",
      "a": "损失是什么？",
      "o": [
        "只是几秒",
        "伤害和怒气一起没了",
        "只是伤害",
        "只是怒气"
      ],
      "r": 1,
      "e": [
        "损失是双重的。",
        "正解。<b><sk>眼棱</sk>既是伤害也是怒气来源（Blind Fury）</b>——被打断两样一起没。所以引导前要确认安全。",
        "不只伤害。",
        "不只怒气。"
      ],
      "k": "一个技能承载多个功能时，被打断的损失是叠加的。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用<sk>死亡之握</sk>把你拉过去。",
      "a": "浩劫怎么应对？",
      "o": [
        "硬打",
        "用<sk>复仇回避</sk>立刻退出去",
        "换目标",
        "交防御"
      ],
      "r": 1,
      "e": [
        "被拉到近身不一定要留下。",
        "正解。<b><sk>复仇回避</sk>能立刻把你带回安全距离</b>——这是浩劫对抗抓人手段的优势：他抓得住你，但你出得去。",
        "换目标不解决位置。",
        "防御不解决位置。"
      ],
      "k": "有可靠后退手段的专精，不怕被抓。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用减速和定身限制你。",
      "a": "为什么这比他的伤害更麻烦？",
      "o": [
        "伤害不高",
        "你的强度建立在机动性上，被限制住优势就没了",
        "他血厚",
        "他有减疗"
      ],
      "r": 1,
      "e": [
        "伤害是次要问题。",
        "正解。<b>被定住的浩劫就是普通近战</b>——所以死骑限制你机动性的手段比他的伤害更值得警惕。",
        "血厚不是关键。",
        "减疗影响的是治疗不是你。"
      ],
      "k": "认清自己的优势来源，就知道对面哪种手段最该防。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满用地缚图腾钉住你。",
      "a": "该优先做什么？",
      "o": [
        "继续打人",
        "清掉图腾保住机动性",
        "用位移硬走",
        "交防御"
      ],
      "r": 1,
      "e": [
        "被钉住的浩劫失去核心优势。",
        "正解。<b>地缚图腾是萨满限制你的主要手段</b>——清掉它比继续砍人重要，因为机动性是你的强度来源。",
        "被定身时位移也用不了。",
        "防御不解决被钉住。"
      ],
      "k": "优先处理剥夺你核心优势的东西。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "这是免疫吗？",
      "o": [
        "是，完全免疫",
        "不是，是大幅减伤，可以继续打",
        "是，要停手",
        "看情况"
      ],
      "r": 1,
      "e": [
        "它不是免疫。",
        "正解。<b>是减伤不是免疫</b>——可以继续打，只是效率下降。别跟圣盾术那类完全免疫混为一谈。",
        "不用停手。",
        "性质固定。"
      ],
      "k": "分清「减伤」和「免疫」。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "法师想拉开距离。",
      "a": "浩劫能咬住他吗？",
      "o": [
        "不能，法师位移多",
        "能，浩劫是少数能一直贴住法师的专精",
        "要看运气",
        "只能靠队友"
      ],
      "r": 1,
      "e": [
        "浩劫的位移不比法师少。",
        "正解。<b>你的位移多且冷却短</b>——法师最难甩掉的近战之一就是你。他被贴住就很难输出。",
        "不是运气问题。",
        "你自己就能做到。"
      ],
      "k": "认清自己在哪些对局有结构性优势。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师用冰环和冰霜新星限制你。",
      "a": "哪个更麻烦？",
      "o": [
        "减速",
        "定身——被定住你追不上也躲不掉",
        "都一样",
        "都不麻烦"
      ],
      "r": 1,
      "e": [
        "减速你还能移动。",
        "正解。<b>定身彻底剥夺你的机动性</b>，而减速只是降低效率。对高机动专精，定身的威胁远大于减速。",
        "差别很大。",
        "定身很麻烦。"
      ],
      "k": "高机动专精要区分「减速」和「定身」的威胁等级。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士需要时间读条叠 DoT。",
      "a": "浩劫怎么限制他？",
      "o": [
        "拉开距离",
        "持续贴身不给他时间",
        "等他先出手",
        "只用打断"
      ],
      "r": 1,
      "e": [
        "拉开距离正合他意。",
        "正解。<b>你的机动性让他很难拉开</b>——持续贴身加打断，术士没时间准备。这是浩劫对术士的优势。",
        "被动等待给他准备时间。",
        "打断是手段之一，但核心是持续压制。"
      ],
      "k": "对需要准备时间的对手，持续压制比打断更根本。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士的恐惧打断了你的<sk>眼棱</sk>。",
      "a": "该怎么减少这种情况？",
      "o": [
        "不用眼棱",
        "引导前先确认他的恐惧交掉了",
        "硬吃",
        "交防御"
      ],
      "r": 1,
      "e": [
        "<sk>眼棱</sk>是重要的怒气和伤害来源。",
        "正解。<b>引导前先看对面的打断和控制在不在手</b>——这是所有引导型技能的通用判断。",
        "硬吃会一直被打断。",
        "防御不防控制。"
      ],
      "k": "引导技能开之前先数对面的控制。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "对上武僧，两边机动性同级。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁的控制先落地",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>两边都灵活，谁也甩不掉谁</b>——<sk>混乱新星</sk>或<sk>禁锢</sk>先命中的那个拿走这一轮。",
        "血量接近。",
        "机动性同级。"
      ],
      "k": "机动性同级的对局，控制先手决定胜负。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "你不确定武僧的<sk>业报之触</sk>在不在手上。",
      "a": "该怎么办？",
      "o": [
        "直接开<sk>恶魔变形</sk>",
        "先打两下试探再决定",
        "完全不开爆发",
        "换目标"
      ],
      "r": 1,
      "e": [
        "赌错了整个变形窗口的伤害都弹回来。",
        "正解。<b>试探的成本远低于整套被反弹</b>——尤其你的变形是长窗口，撞上去损失更大。",
        "完全不开过于保守。",
        "换目标是选项但试探更直接。"
      ],
      "k": "不确定对面有没有反伤时，先小后大。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊的控制大多要读条。",
      "a": "浩劫该怎么利用？",
      "o": [
        "硬吃",
        "<sk>瓦解</sk>打断他的读条，还能生成怒气",
        "跑开",
        "换目标"
      ],
      "r": 1,
      "e": [
        "被控住损失大。",
        "正解。<b>德鲁伊的<sk>旋风</sk>和<sk>纠缠根须</sk>都要读条</b>——打断价值高，而且 Disrupting Fury 还给你怒气。",
        "跑开不解决他继续读条。",
        "换目标不解决控制威胁。"
      ],
      "k": "对手关键技能要读条时，打断的价值最高。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊变形跑掉了。",
      "a": "浩劫追得上吗？",
      "o": [
        "追不上",
        "追得上，你的位移不输他的旅行形态",
        "要看运气",
        "只能放弃"
      ],
      "r": 1,
      "e": [
        "浩劫的机动性很强。",
        "正解。<b>你的位移多且冷却短</b>——德鲁伊是少数你能追上的风筝型对手。",
        "不是运气问题。",
        "不用放弃。"
      ],
      "k": "认清自己能追上谁、追不上谁。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 3,
      "s": "镜像对局，你在考虑要不要先冲。",
      "a": "先冲有什么后果？",
      "o": [
        "占先手优势",
        "你的<sk>复仇回避</sk>先用掉，退路先少一张",
        "没区别",
        "看伤害"
      ],
      "r": 1,
      "e": [
        "先手不等于优势。",
        "正解。<b>两边退路都有限，先用掉的那个先陷入被动</b>——这是镜像对局最核心的博弈。",
        "区别很大。",
        "输出接近。"
      ],
      "k": "退路有限的镜像对局，先动手的反而被动。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "镜像对局，两边都甩不掉对方。",
      "a": "该比什么？",
      "o": [
        "伤害",
        "控制先手和退路管理",
        "血量",
        "移动速度"
      ],
      "r": 1,
      "e": [
        "输出模式一样。",
        "正解。<b><sk>混乱新星</sk>先命中的占优，退路留得多的占优</b>——两个都是资源管理问题。",
        "血量接近。",
        "移动速度一样。"
      ],
      "k": "镜像对局比的是资源管理和先手，不是数值。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 3,
      "s": "对上唤魔师，为什么这是浩劫最舒服的对局之一？",
      "a": "",
      "o": [
        "他血少",
        "他要站定蓄力，而你的机动性 + 打断正好不给他机会",
        "他伤害低",
        "他没控制"
      ],
      "r": 1,
      "e": [
        "血量不是关键。",
        "正解。<b>唤魔师的伤害主体是蓄力技能，需要站定</b>——你拉不开距离的问题他解决不了，你的打断又让他放不出来。两个优势叠加。",
        "他伤害不低。",
        "他有控制。"
      ],
      "k": "认清哪些对局你的优势正好命中对手的弱点。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "该做什么？",
      "o": [
        "放弃他",
        "等几秒他就落地，期间准备好打断",
        "用位移追上去",
        "换目标"
      ],
      "r": 1,
      "e": [
        "悬空只有几秒。",
        "正解。<b>悬空持续时间不长，他必须落地才能持续输出</b>——这几秒准备好<sk>瓦解</sk>，落地就打断他的蓄力。",
        "没有能上天的位移。",
        "不用换目标，等几秒就行。"
      ],
      "k": "短时间的脱离不用慌，准备好接他落地。"
    }
  ]
};
