module.exports = {
  "meta": {
    "title": "湮灭唤魔师 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 湮灭唤魔师 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "湮灭唤魔师,唤魔师,PVP,竞技场,魔兽世界,12.1,Midnight,devastation evoker,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你的核心技能都要蓄力，而蓄力就是站着不动。<br>湮灭的判断是<b>什么时候你敢站住那两秒</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"火焰吐息\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_firebreath.jpg\" alt=\"火焰吐息\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"永恒之涌\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_eternitysurge.jpg\" alt=\"永恒之涌\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"悬空\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_hover.jpg\" alt=\"悬空\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？蓄力法术是你的全部，也是你的破绽</span><span class=\"sub\">蓄得越满越疼，站得越久越危险</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>火焰吐息</sk>和<sk>永恒之涌</sk>是蓄力法术——<b>按住不放，蓄力等级越高伤害越大</b>。这是湮灭伤害的主体。</p><p style=\"margin-top:8px\">但蓄力期间你必须站着。<b>所以这个专精的核心判断不是「打谁」，是「现在敢不敢站住」</b>——而<sk>悬空</sk>正是为此存在的：它让你在移动中施法。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">湮灭的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"火焰吐息\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_firebreath.jpg\" alt=\"火焰吐息\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"永恒之涌\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_eternitysurge.jpg\" alt=\"永恒之涌\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">蓄力时钟 · 你敢站几秒</span><span class=\"sub\">蓄得越满越疼</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>火焰吐息</sk>和<sk>永恒之涌</sk>按蓄力等级提升威力。<b>满蓄力的伤害远高于一级</b>。</p><p style=\"margin-top:8px\"><b>判断点：这一下值不值得站满。</b>对面控制交完了就蓄满，还有硬控在手就打一级放掉。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"悬空\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_hover.jpg\" alt=\"悬空\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">机动时钟 · <sk>悬空</sk></span><span class=\"sub\">让你边跑边放</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>悬空</sk>期间可以移动施法。<b>这是湮灭唯一能同时输出和走位的窗口。</b></p><p style=\"margin-top:8px\">Unburdened Flight（49/50 全员必带）让它期间移动速度不会被降到 100% 以下——<b>等于免疫减速</b>，这是它使用率这么高的原因。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"t\">资源时钟 · 精华</span><span class=\"sub\">裂解和葬火的燃料</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>裂解</sk>和<sk>葬火</sk>消耗精华。精华迸发（Essence Burst）能让下一次免费。</p><p style=\"margin-top:8px\"><b>Power Nexus 把上限提到 6 点</b>——上限越高，你能在窗口里连续按出的技能越多。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"深呼吸\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_deepbreath.jpg\" alt=\"深呼吸\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：龙鳞指挥官 Scalecommander</span><span class=\"sub\">49/50 走这条，塑焰者只有 1 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>龙鳞指挥官（Scalecommander）49/50</b>，塑焰者（Flameshaper）<b>1 人</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线围绕<sk>深呼吸</sk>展开——<b>它把一个位移技能变成了输出和控制的组合</b>：Maneuverability 让它可以操控方向，Terror of the Skies 让它顺带昏迷。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"悬空\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_hover.jpg\" alt=\"悬空\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：一格没得选，两格看阵容</span><span class=\"sub\">Unburdened Flight 必带</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Unburdened Flight（49/50）</b>—— 几乎全员必带。<sk>悬空</sk>期间移动速度不会被降到 100% 以下，<b>等于在你唯一能边跑边打的窗口里免疫减速</b>。</p><p style=\"margin-top:8px\"><b>Time Stop（43/50）</b>冻结盟友时间流让他无敌、<b>Scouring Flame（30/50）</b>火焰吐息灼烧有益魔法效果、<b>Obsidian Mettle（26/50）</b>黑曜鳞片期间免疫打断和沉默。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">注意 Obsidian Mettle 的存在意义：<b>你的技能都要蓄力，被打断就废</b>。对面打断多的时候这一格价值飙升。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"活化烈焰\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_livingflame.jpg\" alt=\"活化烈焰\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"火焰吐息\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_firebreath.jpg\" alt=\"火焰吐息\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"裂解\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_disintegrate.jpg\" alt=\"裂解\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"火焰吐息\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_firebreath.jpg\" alt=\"火焰吐息\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · <sk>火焰吐息</sk>：先铺再打</span><span class=\"sub\">它的持续伤害是后续的放大器</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>火焰吐息</sk>在目标身上留下持续燃烧。<b>Scorching Embers 让受它影响的目标承受更多红色系伤害</b>。</p><p style=\"margin-top:8px\"><b>所以它是「开门技能」不是纯输出</b>——先铺上，后面的伤害才吃加成。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"裂解\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_disintegrate.jpg\" alt=\"裂解\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · <sk>裂解</sk>是引导，会被打断</span><span class=\"sub\">你的主要单体输出也有破绽</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>裂解</sk>是引导型技能，持续输出但<b>期间不能移动</b>。</p><p style=\"margin-top:8px\"><b>它和蓄力法术加起来，意味着湮灭大部分时间都站着</b>——这就是为什么<sk>悬空</sk>这么重要。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"悬空\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_hover.jpg\" alt=\"悬空\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>悬空</sk>是输出窗口不是逃跑键</span><span class=\"sub\">它让你边跑边打</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>悬空</sk>期间可以移动施法。<b>很多人把它当纯逃跑技能用，那是浪费。</b></p><p style=\"margin-top:8px\"><b>正确用法是「被追着也不停输出」</b>——加上 Unburdened Flight 的免疫减速，这是你最舒服的一段。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"深呼吸\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_deepbreath.jpg\" alt=\"深呼吸\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · <sk>深呼吸</sk>：位移、伤害、控制三合一</span><span class=\"sub\">英雄天赋线把它做成了核心</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>飞过一段距离并对沿途敌人造成伤害。<b>Terror of the Skies 让它顺带昏迷 3 秒</b>。</p><p style=\"margin-top:8px\"><b>所以它不只是位移</b>——可以用来强行接近、可以用来脱离、也可以用来开控制。用途最多的一个技能。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"镇压\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_quell.jpg\" alt=\"镇压\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"压迫怒吼\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_oppressingroar.jpg\" alt=\"压迫怒吼\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 你的干扰手段</span><span class=\"sub\">打断和控制延长</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>镇压</sk>打断施法、<sk>压迫怒吼</sk>让随后的控制效果持续更久。</p><p style=\"margin-top:8px\"><b><sk>压迫怒吼</sk>是配合队友用的</b>——它自己不控人，但让队友的控制变长。这需要沟通。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"黑曜鳞片\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_artifact_dragonscales.jpg\" alt=\"黑曜鳞片\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"新生光焰\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_evoker_masterylifebinder_red.jpg\" alt=\"新生光焰\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 被贴脸时的应对</span><span class=\"sub\">你的技能全都怕打断</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>黑曜鳞片</sk>减伤（Obsidian Mettle 让它期间免疫打断和沉默）、<sk>新生光焰</sk>回血。</p><p style=\"margin-top:8px\"><b>被近战贴住的真正问题不是掉血，是蓄力和引导全被打断</b>——所以要么开免疫打断，要么用<sk>悬空</sk>拉开。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">判断不是「打谁」，是「现在敢不敢站住」</div><div class=\"dd\">蓄力和引导都要站定。对面硬控在手时，宁可打一级放掉也别蓄满。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\"><sk>悬空</sk>是输出窗口不是逃跑键</div><div class=\"dd\">它让你边跑边打。当纯逃跑技能用是浪费这个专精最舒服的一段。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\"><sk>火焰吐息</sk>先铺再打</div><div class=\"dd\">它的持续燃烧让后续红色系伤害吃加成。它是开门技能不是纯输出。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面的硬控和打断在谁手上？</b>你的核心技能都要蓄力或引导，<b>这决定你什么时候敢站住</b>。</p><p style=\"margin-top:8px\"><b>2 · 谁会来贴我？</b>被近战贴住时，<sk>悬空</sk>和 Obsidian Mettle 是你继续输出的前提。</p><p style=\"margin-top:8px\"><b>3 · <sk>深呼吸</sk>这一局当什么用？</b>强行接近、脱离、还是开控制 —— 它三个都能干，但一局只有几次。</p></div><div class=\"sc\"><h4>为什么 Obsidian Mettle 值得注意</h4><p>它让<sk>黑曜鳞片</sk>期间<b>免疫打断和沉默</b>。26/50 的使用率不算高，但它对上打断多的阵容（DH、盗贼、萨满）价值飙升。</p><p style=\"margin-top:8px\"><b>原因很直接：湮灭的伤害主体是蓄力和引导，被打断就等于没有输出。</b>这一格买的不是生存，是「能不能把技能放出来」。</p></div>"
  },
  "sk": {
    "火焰吐息": "ability_evoker_firebreath",
    "永恒之涌": "ability_evoker_eternitysurge",
    "悬空": "ability_evoker_hover",
    "裂解": "ability_evoker_disintegrate",
    "葬火": "ability_evoker_pyre",
    "深呼吸": "ability_evoker_deepbreath",
    "镇压": "ability_evoker_quell",
    "压迫怒吼": "ability_evoker_oppressingroar",
    "黑曜鳞片": "inv_artifact_dragonscales",
    "新生光焰": "ability_evoker_masterylifebinder_red",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "狂龙之怒": "ability_evoker_dragonrage",
    "剑在人在": "ability_warrior_challange",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "保护祝福": "spell_holy_sealofprotection",
    "灵龟守护": "ability_hunter_pet_turtle",
    "逃脱": "ability_rogue_feint",
    "假死": "ability_rogue_feigndeath",
    "消失": "ability_vanish",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "心灵冰冻": "spell_deathknight_mindfreeze",
    "风剪": "spell_nature_cyclone",
    "星界转移": "ability_shaman_astralshift",
    "根基图腾": "spell_nature_groundingtotem",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "切喉手": "ability_monk_spearhand",
    "树皮术": "spell_nature_stoneclawtotem",
    "旅行形态": "ability_druid_travelform",
    "旋风": "spell_nature_earthbind",
    "日光术": "ability_vehicle_sonicshockwave",
    "恶魔变形": "ability_demonhunter_metamorphasistank"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "safe",
      "t": "你敢站住蓄力",
      "d": "<sk>火焰吐息</sk>和<sk>永恒之涌</sk>要蓄力，<sk>裂解</sk>要引导。对面硬控在手，你就站不住"
    },
    {
      "k": "fb",
      "t": "<sk>火焰吐息</sk>铺上了",
      "d": "它的持续燃烧让后续红色系伤害吃加成。没铺就打，伤害少一截"
    },
    {
      "k": "ess",
      "t": "精华够用",
      "d": "<sk>裂解</sk>和<sk>葬火</sk>要花精华。资源不够，窗口里按不出东西"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你蓄满的一发会打空"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在站不住</h3><p>对面控制在手、铺垫也没做。<b>湮灭的伤害要靠站定输出</b>——先等他们的控制交掉。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，缺的这些让蓄力放不出来</h3><p>条件差太多。<b>蓄力被打断等于没有输出</b>，这时候开窗口是纯浪费。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但用<sk>悬空</sk>边跑边放</h3><p>站不稳就别硬蓄。<b>开<sk>悬空</sk>保持输出</b>，把满蓄力的那一发留给更安全的时候。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>站不住就蓄不满，没铺火焰吐息就少一截，免疫在就是白打</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>火焰吐息</sk>铺上 → <sk>狂龙之怒</sk>开窗口 → <sk>永恒之涌</sk>蓄满释放 → <sk>裂解</sk>把精华花完。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先看对面的硬控和打断在谁手上",
      "你的核心技能都要蓄力或引导。<b>这决定了你什么时候敢站住。</b>",
      "镇压"
    ],
    [
      "<sk>火焰吐息</sk>先铺上",
      "它的持续燃烧让后续红色系伤害吃加成。<b>它是开门技能，不是纯输出。</b>",
      "火焰吐息"
    ],
    [
      "<sk>狂龙之怒</sk>开窗口",
      "爆发龙威，期间精华迸发必定触发。<b>资源和伤害同时拉满的一段。</b>",
      "狂龙之怒"
    ],
    [
      "<sk>永恒之涌</sk>蓄满释放",
      "按蓄力等级提升威力。<b>这一下值不值得站满，看对面控制在不在手。</b>",
      "永恒之涌"
    ],
    [
      "<sk>裂解</sk>把精华花完",
      "引导型单体输出。<b>期间不能移动</b>——所以要在确认安全之后再引导。",
      "裂解"
    ],
    [
      "站不稳就开<sk>悬空</sk>",
      "期间可以移动施法。<b>这是输出窗口不是逃跑键</b>，被追着也不该停输出。",
      "悬空"
    ],
    [
      "<sk>深呼吸</sk>按需使用",
      "位移、伤害、昏迷三合一。<b>想清楚这一局它主要当什么用。</b>",
      "深呼吸"
    ],
    [
      "被贴住就开<sk>黑曜鳞片</sk>",
      "Obsidian Mettle 让它期间免疫打断和沉默——<b>这才是你能继续输出的前提</b>。",
      "黑曜鳞片"
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
        "diff": "怕贴脸",
        "cards": [
          "剑在人在",
          "天神下凡",
          "破胆怒吼"
        ],
        "one": "他贴上来你就蓄不了力。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "你是法术伤害，<b>招架对你无效</b>，减伤部分照吃。"
          ],
          [
            "他贴得上你",
            "<b>这是这个对局最大的问题</b>——贴脸状态下蓄力和引导都会被打断。"
          ],
          [
            "<sk>深呼吸</sk>拉开距离",
            "它是位移也是伤害，<b>被贴住时用它脱离</b>。"
          ],
          [
            "<sk>悬空</sk>保持输出",
            "边跑边放，别站着硬蓄。"
          ]
        ],
        "arena": "被战士贴住就开<sk>悬空</sk>，边移动边输出，别硬站着蓄力。",
        "duel": "单挑靠<sk>深呼吸</sk>和<sk>悬空</sk>反复拉开距离，站定输出的机会要自己创造。"
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
            "<b>别把蓄满的一发打进去</b>，那是最亏的浪费。"
          ],
          [
            "<sk>自由祝福</sk>解减速",
            "你的减速对他效果有限。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你是纯法术伤害，这张牌对你无效</b>。"
          ],
          [
            "等免疫过去再蓄满",
            "免疫期间打一级放掉，或者转目标。"
          ]
        ],
        "arena": "蓄满的一发绝不能打进<sk>圣盾术</sk>。看到免疫就打一级放掉或转目标。",
        "duel": "单挑等免疫过去，那几秒用来铺<sk>火焰吐息</sk>。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "拼距离",
        "cards": [
          "灵龟守护",
          "假死",
          "逃脱",
          "猎豹守护"
        ],
        "one": "两个远程对射，比谁能站得住。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间别浪费蓄满的技能。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "<b>假死会清掉你铺的<sk>火焰吐息</sk></b>。"
          ],
          [
            "他的打断和控制",
            "<b>猎人的控制会打断你的蓄力</b>——这是这个对局要防的。"
          ],
          [
            "两个远程的距离战",
            "你们射程接近，比的是谁能安心站着输出。"
          ]
        ],
        "arena": "两个远程互射，比的是谁能站得住。他的控制打断你蓄力时损失最大。",
        "duel": "单挑注意<sk>假死</sk>会清 DoT，重新铺<sk>火焰吐息</sk>的成本要算进去。"
      },
      {
        "id": "rogue",
        "n": "潜行者",
        "ic": "classicon_rogue",
        "c": "#FFF468",
        "diff": "最难打",
        "cards": [
          "暗影斗篷",
          "消失",
          "闪避",
          "烟雾弹"
        ],
        "one": "他贴脸开场，而你什么都要蓄力。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你是纯法术伤害，斗篷对你接近完全免疫</b>。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他随时能重置这一轮。"
          ],
          [
            "<b>他的打断和控制链</b>",
            "<b>蓄力和引导全会被打断</b>——这是这个专精最难打的对局。"
          ],
          [
            "Obsidian Mettle 是关键",
            "<sk>黑曜鳞片</sk>期间免疫打断和沉默，<b>对上贼这一格价值飙升</b>。"
          ]
        ],
        "arena": "对上贼把 PvP 天赋换成 Obsidian Mettle，免疫打断才能把技能放出来。",
        "duel": "单挑靠<sk>悬空</sk>和<sk>深呼吸</sk>反复拉开，被贴住基本没输出。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "拼续航",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸",
          "真言术：盾"
        ],
        "one": "他要读条，你也要蓄力，比谁先被打断。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "短时间的，等它过去。"
          ],
          [
            "<sk>心灵尖啸</sk>打断你的蓄力",
            "<b>恐惧是这个对局最疼的一下</b>。"
          ],
          [
            "<sk>镇压</sk>打断他的大治疗",
            "你有打断，他也有——比的是谁用得更准。"
          ],
          [
            "两边都怕打断",
            "<b>这是一个「谁先被打断谁输」的对局</b>。"
          ]
        ],
        "arena": "两边都要读条/蓄力，比的是打断的时机。留<sk>镇压</sk>给他的大治疗。",
        "duel": "单挑注意躲<sk>心灵尖啸</sk>，恐惧打断你的蓄力损失最大。"
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
        "one": "他抓得住你，而你需要站定。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡法术",
            "<b>你是纯法术伤害，护罩对你很有效</b>——看到就别蓄满。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "<b>你的距离随时被破坏</b>，位移要留着应对。"
          ],
          [
            "<sk>心灵冰冻</sk>打断你",
            "死骑的打断冷却短，<b>会反复打断你的蓄力</b>。"
          ],
          [
            "Obsidian Mettle 有用",
            "免疫打断的那几秒，是你把技能放出来的窗口。"
          ]
        ],
        "arena": "死骑的打断冷却短，Obsidian Mettle 的那几秒免疫很关键。",
        "duel": "单挑等<sk>反魔法护罩</sk>过去再蓄满，护罩期间打一级放掉。"
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
        "one": "<sk>风剪</sk>会反复打断你的蓄力。",
        "q": [
          [
            "<sk>星界转移</sk> —— 大减伤",
            "不是免疫，可以打但效率下降。"
          ],
          [
            "地缚与减速",
            "<b>Unburdened Flight 让<sk>悬空</sk>免疫减速</b>——这是应对地缚的好手段。"
          ],
          [
            "<b><sk>风剪</sk>打断你的蓄力</b>",
            "萨满的打断冷却短，<b>这是这个对局最烦的</b>。"
          ],
          [
            "<sk>根基图腾</sk>吸你的法术",
            "关键技能放之前先清图腾。"
          ]
        ],
        "arena": "萨满的<sk>风剪</sk>冷却短会反复打断，Obsidian Mettle 或假动作骗打断都值得考虑。",
        "duel": "单挑用<sk>悬空</sk>的免疫减速摆脱地缚，别被钉在图腾范围里。"
      },
      {
        "id": "mage",
        "n": "法师",
        "ic": "classicon_mage",
        "c": "#3FC7EB",
        "diff": "拼控制",
        "cards": [
          "寒冰屏障",
          "变形术",
          "冰霜之环",
          "镜像"
        ],
        "one": "两个远程法系，比谁的控制先落地。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "别把蓄满的技能打进去。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "<b>法师的控制会打断你的蓄力</b>。"
          ],
          [
            "<sk>镇压</sk>打断他",
            "两个法系互相打断，<b>比的是时机</b>。"
          ],
          [
            "<sk>悬空</sk>躲控制",
            "边跑边放，法师的定身对移动中的你效果打折。"
          ]
        ],
        "arena": "两个法系互射，比打断时机。<sk>悬空</sk>让你在他的控制下也能保持输出。",
        "duel": "单挑用<sk>悬空</sk>拉扯，法师最怕的是控不住你。"
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
        "one": "恐惧会打断你的蓄力。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "<b>恐惧打断蓄力</b>",
            "<b>这是这个对局最疼的一下</b>——你的伤害主体全要站定。"
          ],
          [
            "<sk>镇压</sk>打断他读条",
            "术士的关键法术要读条。"
          ],
          [
            "Obsidian Mettle 值得考虑",
            "免疫打断和沉默的那几秒能救回一轮输出。"
          ]
        ],
        "arena": "术士的恐惧打断你的蓄力，损失比掉血大。留好应对手段。",
        "duel": "单挑比打断时机，两边都要读条/蓄力。"
      },
      {
        "id": "monk",
        "n": "武僧",
        "ic": "classicon_monk",
        "c": "#00FF98",
        "diff": "怕贴脸",
        "cards": [
          "业报之触",
          "玄牛下凡",
          "气定神闲"
        ],
        "one": "他贴上来你就放不出技能。",
        "q": [
          [
            "<sk>业报之触</sk> —— 伤害反弹",
            "<b>你的蓄满一发伤害很集中，撞上损失特别大</b>。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧机动性高，很难拉开。"
          ],
          [
            "<sk>切喉手</sk>打断你的蓄力",
            "<b>武僧的打断会反复中断你</b>。"
          ],
          [
            "先试探再蓄满",
            "这个对局值得先打一级看反应。"
          ]
        ],
        "arena": "蓄满的一发撞上<sk>业报之触</sk>损失最大。先打一级试探。",
        "duel": "单挑靠<sk>悬空</sk>和<sk>深呼吸</sk>拉开，被贴住基本放不出技能。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "拼控制",
        "cards": [
          "树皮术",
          "旅行形态",
          "气定神闲"
        ],
        "one": "他的控制会反复打断你。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "不是免疫，可以打但效率下降。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能跑掉重置。"
          ],
          [
            "<b><sk>旋风</sk>和<sk>日光术</sk></b>",
            "<b>旋风把你摘出去、日光术沉默你</b>——两个都让你放不出技能。"
          ],
          [
            "<sk>镇压</sk>断他的读条",
            "德鲁伊的控制大多要读条，打断价值高。"
          ]
        ],
        "arena": "<sk>日光术</sk>的沉默对你是致命的（技能全要施法），要注意站位躲开光柱。",
        "duel": "单挑比打断时机，两边的控制都要读条。"
      },
      {
        "id": "demonhunter",
        "n": "恶魔猎手",
        "ic": "classicon_demonhunter",
        "c": "#A330C9",
        "diff": "最怕的对局",
        "cards": [
          "恶魔变形",
          "疾影",
          "黑曜鳞片"
        ],
        "one": "高机动 + 打断，正好克制你。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打。"
          ],
          [
            "<b>二段跳与冲刺</b>",
            "<b>你拉不开距离</b>——他的位移比你的多。"
          ],
          [
            "<b>他的打断和沉默</b>",
            "<b>这是这个专精最难打的对局</b>：蓄力和引导全被打断。"
          ],
          [
            "Obsidian Mettle 是刚需",
            "对上 DH 这一格几乎必带。"
          ]
        ],
        "arena": "对上 DH 必须考虑 Obsidian Mettle，否则你的技能根本放不出来。",
        "duel": "单挑很难打，他的机动性和打断都精准克制这个专精。"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "镜像",
        "cards": [
          "悬空",
          "黑曜鳞片"
        ],
        "one": "镜像对局：谁先被打断谁输。",
        "q": [
          [
            "<sk>黑曜鳞片</sk>互相克制",
            "两边都有减伤和免疫打断的选项。"
          ],
          [
            "两边都能飞",
            "机动性一样，位置战很细。"
          ],
          [
            "<b><sk>镇压</sk>的博弈</b>",
            "<b>两边的核心技能都要蓄力</b>——谁的打断用得准，谁就能打出完整输出。"
          ],
          [
            "假动作骗打断",
            "开始蓄力然后取消，骗掉他的<sk>镇压</sk>，再蓄真的那一发。"
          ]
        ],
        "arena": "镜像的核心是打断博弈。假动作骗掉他的<sk>镇压</sk>，再放真正的蓄满技能。",
        "duel": "单挑比打断时机和假动作，输出接近的情况下这个决定胜负。"
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
      "s": "<sk>火焰吐息</sk>和<sk>永恒之涌</sk>是蓄力法术。",
      "a": "蓄力等级影响什么？",
      "o": [
        "只影响施法时间",
        "蓄力等级越高，威力越大",
        "影响冷却时间",
        "影响射程"
      ],
      "r": 1,
      "e": [
        "蓄力时间和威力是绑定的。",
        "正解。<b>按住不放，蓄力等级越高伤害越大</b>——但蓄力期间你必须站着。这个取舍是湮灭最核心的判断。",
        "不影响冷却。",
        "不影响射程。"
      ],
      "k": "蓄得越满越疼，站得越久越危险。这是湮灭的基本取舍。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "你要放<sk>永恒之涌</sk>，但对面战士的<sk>风暴之锤</sk>还在手上。",
      "a": "该蓄满吗？",
      "o": [
        "蓄满，伤害最大化",
        "打一级放掉，别给他打断的机会",
        "完全不放",
        "先控住他再蓄"
      ],
      "r": 1,
      "e": [
        "蓄到一半被昏迷，整发都没了。",
        "正解。<b>这一下值不值得站满，看对面控制在不在手</b>——控制在手就打一级放掉，落袋为安。",
        "完全不放等于放弃输出。",
        "控住他是好思路，但你未必有控制可用，而且这题问的是蓄力等级判断。"
      ],
      "k": "对面硬控在手时，宁可打一级放掉，也别蓄满被打断。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "你被近战贴住，一直在挨打。",
      "a": "<sk>悬空</sk>该怎么用？",
      "o": [
        "当逃跑键，跑远一点",
        "边跑边继续输出",
        "留着不用",
        "等血低了再用"
      ],
      "r": 1,
      "e": [
        "当纯逃跑技能用是浪费。",
        "正解。<b><sk>悬空</sk>期间可以移动施法</b>——这是湮灭唯一能同时输出和走位的窗口。被追着也不该停输出。",
        "留着不用，你就一直站着挨打或者一直跑不输出。",
        "它是输出窗口不是保命牌，血低了才用就浪费了它的输出价值。"
      ],
      "k": "<sk>悬空</sk>是输出窗口不是逃跑键。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "关于 Unburdened Flight（49/50 全员必带）。",
      "a": "它做了什么？",
      "o": [
        "提高<sk>悬空</sk>的持续时间",
        "<sk>悬空</sk>期间移动速度不会被降到 100% 以下",
        "增加悬空充能",
        "提高飞行高度"
      ],
      "r": 1,
      "e": [
        "不是延长持续时间。",
        "正解。<b>等于在你唯一能边跑边打的窗口里免疫减速</b>——这就是它使用率高达 98% 的原因。",
        "不是加充能。",
        "不影响高度。"
      ],
      "k": "在关键窗口里免疫减速，价值远高于单纯的速度加成。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 3,
      "s": "对面是盗贼，打断和控制都很多。你在配 PvP 天赋。",
      "a": "哪一格值得换？",
      "o": [
        "Time Stop",
        "Obsidian Mettle（黑曜鳞片期间免疫打断和沉默）",
        "Scouring Flame",
        "不用换"
      ],
      "r": 1,
      "e": [
        "Time Stop 是给队友的保命牌，不解决你被打断。",
        "正解。<b>湮灭的伤害主体是蓄力和引导，被打断就等于没有输出</b>——对上打断多的对手，这一格买的不是生存，是「能不能把技能放出来」。",
        "Scouring Flame 是驱散有益效果，跟打断无关。",
        "遇到打断多的阵容不换，你的技能会一直放不出来。"
      ],
      "k": "看阵容换天赋时，先想清楚这个对手最能剥夺你的是什么。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "你准备开一轮爆发，目标身上还没有<sk>火焰吐息</sk>。",
      "a": "先做什么？",
      "o": [
        "直接开<sk>狂龙之怒</sk>",
        "先铺<sk>火焰吐息</sk>",
        "先放<sk>裂解</sk>",
        "先<sk>深呼吸</sk>接近"
      ],
      "r": 1,
      "e": [
        "没铺火焰吐息，后面的红色系伤害少一截加成。",
        "正解。<b><sk>火焰吐息</sk>的持续燃烧让受影响目标承受更多红色系伤害</b>——它是开门技能不是纯输出，要先铺。",
        "<sk>裂解</sk>是主力输出，但该在加成铺好之后打。",
        "接近是位置问题，不是循环起手。"
      ],
      "k": "带增伤效果的 DoT 是开门技能，先铺再打。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "<sk>裂解</sk>是什么类型的技能？",
      "a": "",
      "o": [
        "瞬发",
        "引导型，期间不能移动",
        "蓄力型",
        "持续伤害"
      ],
      "r": 1,
      "e": [
        "不是瞬发。",
        "正解。<b><sk>裂解</sk>是引导型，期间不能移动</b>——它和蓄力法术加起来，意味着湮灭大部分时间都站着。这就是<sk>悬空</sk>为什么这么重要。",
        "蓄力的是<sk>火焰吐息</sk>和<sk>永恒之涌</sk>。",
        "它是引导不是 DoT。"
      ],
      "k": "知道自己哪些技能不能移动，才知道什么时候需要<sk>悬空</sk>。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "<sk>深呼吸</sk>在英雄天赋线里被强化了。",
      "a": "它现在能干什么？",
      "o": [
        "只是位移",
        "位移 + 伤害 + 昏迷三合一",
        "只是伤害",
        "只是控制"
      ],
      "r": 1,
      "e": [
        "它不只是位移。",
        "正解。<b>Terror of the Skies 让它顺带昏迷</b>，Maneuverability 让它可以操控方向——所以它可以用来强行接近、脱离、或者开控制。用途最多的一个技能。",
        "不只是伤害。",
        "不只是控制。"
      ],
      "k": "多用途技能要在开局就想好这一局主要拿它干什么。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "你的精华用完了，<sk>裂解</sk>放不出来。",
      "a": "什么能让下一次免费？",
      "o": [
        "<sk>悬空</sk>",
        "精华迸发（Essence Burst）",
        "<sk>深呼吸</sk>",
        "<sk>黑曜鳞片</sk>"
      ],
      "r": 1,
      "e": [
        "<sk>悬空</sk>是移动施法。",
        "正解。<b>精华迸发让你的下一次<sk>裂解</sk>或<sk>葬火</sk>不消耗精华</b>——它由<sk>活化烈焰</sk>和<sk>碧蓝打击</sk>触发。",
        "<sk>深呼吸</sk>是位移技能（虽然 Imminent Destruction 能降低消耗）。",
        "<sk>黑曜鳞片</sk>是防御牌。"
      ],
      "k": "知道自己的资源从哪来，卡资源时才知道该按什么。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 1,
      "s": "湮灭唤魔师的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "精通",
        "急速",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 精通 59 > 急速 46 > 爆击 13</b>。",
        "精通是第二。",
        "急速第三。",
        "爆击最低。"
      ],
      "k": "湮灭堆全能。它同时给伤害和减伤。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "对面开了完全免疫（圣盾术/寒冰屏障），你正好蓄满了<sk>永恒之涌</sk>。",
      "a": "该放吗？",
      "o": [
        "放，蓄满了不放浪费",
        "别放，转目标或者等免疫过去",
        "放，能打破免疫",
        "放一半"
      ],
      "r": 1,
      "e": [
        "蓄满的一发打进免疫是最亏的浪费——<b>你为它站了好几秒</b>。",
        "正解。<b>蓄满代表你付出了站定的代价</b>，把它打进免疫等于那几秒白站。转目标或者等免疫结束。",
        "打不破免疫。",
        "蓄满之后没法「放一半」。"
      ],
      "k": "蓄满的技能代表你付出了时间成本，更不该打进免疫。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "你要用<sk>压迫怒吼</sk>。",
      "a": "它的效果是什么？",
      "o": [
        "直接控住敌人",
        "让随后影响他们的控制效果持续更久",
        "造成大量伤害",
        "驱散有益效果"
      ],
      "r": 1,
      "e": [
        "它自己不控人。",
        "正解。<b>它让随后的控制效果持续时间延长</b>——这是配合队友用的技能，需要沟通：你先怒吼，队友再控。",
        "伤害很低。",
        "它移除的是激怒效果，不是通用驱散。"
      ],
      "k": "有些技能自己不产生效果，只放大队友的效果。这类技能需要沟通。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你在引导<sk>裂解</sk>，对面近战冲上来了。",
      "a": "该怎么办？",
      "o": [
        "继续引导，伤害重要",
        "开<sk>悬空</sk>边移动边继续输出",
        "立刻停手跑开",
        "交<sk>黑曜鳞片</sk>硬扛"
      ],
      "r": 1,
      "e": [
        "贴脸状态下引导会被打断，而且你在挨打。",
        "正解。<b><sk>悬空</sk>让你移动施法</b>——不用在「输出」和「走位」之间二选一。这是这个技能存在的意义。",
        "完全停手把输出也放弃了。",
        "硬扛不解决「你需要移动」这个问题。"
      ],
      "k": "能同时解决两个问题的技能，优先于只解决一个的。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "队友快死了，你的 Time Stop 好着。",
      "a": "它的效果是什么？",
      "o": [
        "冻结敌人",
        "冻结盟友的时间流，让他无敌",
        "加速盟友",
        "治疗盟友"
      ],
      "r": 1,
      "e": [
        "它作用于盟友不是敌人。",
        "正解。<b>被冻结的盟友无敌、无法行动，光环也不生效</b>——这是一张「暂停死亡」的牌，给队友争取解围时间。你可以提前结束它。",
        "不是加速。",
        "不是治疗。"
      ],
      "k": "知道自己有哪些能直接改变队友生死的牌。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 3,
      "s": "镜像对局，对面唤魔师开始蓄力。",
      "a": "最有效的博弈是什么？",
      "o": [
        "也开始蓄力对拼",
        "用<sk>镇压</sk>打断他",
        "假动作骗掉他的<sk>镇压</sk>再放真的",
        "拉开距离"
      ],
      "r": 2,
      "e": [
        "对拼蓄力，谁被打断谁输。",
        "打断他是对的，但这题问的是更高一层的博弈。",
        "正解。<b>开始蓄力然后取消，骗掉他的<sk>镇压</sk></b>，再蓄真正的那一发——镜像对局里打断是稀缺资源，骗掉它就赢了一轮。",
        "拉开距离不解决打断博弈。"
      ],
      "k": "两边都有打断且都要蓄力时，假动作是核心技巧。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 2,
      "s": "对面猎人用<sk>假死</sk>脱战了。",
      "a": "你损失了什么？",
      "o": [
        "没什么",
        "铺在他身上的<sk>火焰吐息</sk>清了，后续伤害少了加成",
        "只是少打几下",
        "他会立刻回来"
      ],
      "r": 1,
      "e": [
        "损失不小。",
        "正解。<b><sk>火焰吐息</sk>的持续燃烧是后续红色系伤害的加成来源</b>——它被清掉，等于你要重新铺一遍才能打满伤害。",
        "损失的是加成不只是伤害。",
        "回来了也要重铺。"
      ],
      "k": "对能脱战的对手，铺增伤 DoT 的成本要算进去。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "Power Nexus 把你的最大精华提到 6 点。",
      "a": "这有什么意义？",
      "o": [
        "提高伤害",
        "窗口里能连续按出更多技能",
        "加快回复速度",
        "降低消耗"
      ],
      "r": 1,
      "e": [
        "它不直接加伤害。",
        "正解。<b>上限越高，你能在爆发窗口里连续按出的<sk>裂解</sk>和<sk>葬火</sk>越多</b>——这是资源上限对爆发容量的影响。",
        "回复速度是 Innate Magic。",
        "降低消耗是 Imminent Destruction。"
      ],
      "k": "资源上限决定了你的单个窗口能打出多少东西。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "对面恶魔猎手打断多、机动性高。",
      "a": "为什么这个对局对湮灭特别难？",
      "o": [
        "他伤害高",
        "高机动 + 打断，正好克制「要站定蓄力」的专精",
        "他血厚",
        "他控制多"
      ],
      "r": 1,
      "e": [
        "伤害不是核心问题。",
        "正解。<b>你拉不开距离（他位移多），又站不住（他打断多）</b>——两个弱点同时被命中。这是湮灭最难打的对局。",
        "血量不是关键。",
        "打断才是主要威胁。"
      ],
      "k": "认清哪类对手同时命中你的多个弱点，那是你要特别准备的对局。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "你的<sk>狂龙之怒</sk>开了，期间精华迸发必定触发。",
      "a": "该做什么？",
      "o": [
        "慢慢打，反正有加成",
        "连续按<sk>裂解</sk>和<sk>葬火</sk>，把免费的资源用满",
        "留着精华",
        "只放蓄力法术"
      ],
      "r": 1,
      "e": [
        "窗口有限，慢慢打是浪费。",
        "正解。<b>精华迸发必定触发意味着你的消耗技能变得极便宜</b>——这段时间要尽可能多按，把免费资源用满。",
        "留着精华，窗口过了就没这个加成了。",
        "蓄力法术要站定，窗口里不一定安全，而且免费的是消耗技能。"
      ],
      "k": "资源变便宜的窗口，就该多按消耗技能。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "对面德鲁伊用<sk>日光术</sk>沉默了你。",
      "a": "损失是什么？",
      "o": [
        "只是几秒不能施法",
        "你的伤害主体全部停摆——蓄力、引导、瞬发都放不出来",
        "只影响蓄力法术",
        "只影响治疗"
      ],
      "r": 1,
      "e": [
        "「几秒不能施法」对你意味着完全没有输出。",
        "正解。<b>湮灭所有输出都是法术</b>——沉默期间你什么都做不了。这跟对纯物理专精的沉默完全不是一个概念。",
        "所有法术都受影响。",
        "不只治疗。"
      ],
      "k": "纯法术专精被沉默 = 完全失能，比被打断严重得多。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "你想在爆发窗口里打出最大伤害，但对面控制没交完。",
      "a": "折中方案是什么？",
      "o": [
        "硬蓄满，赌他不控",
        "开<sk>悬空</sk>边移动边打，用瞬发和一级蓄力过渡",
        "完全不输出",
        "换目标"
      ],
      "r": 1,
      "e": [
        "赌错了整个窗口都废。",
        "正解。<b>不要在「站满」和「不打」之间二选一</b>——<sk>悬空</sk>让你保持输出，等对面控制交掉再蓄满。",
        "完全不打把窗口浪费了。",
        "换目标不解决控制威胁。"
      ],
      "k": "高风险时不要走极端，用能保持输出的方式过渡。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "湮灭有 22 个分歧格，是站上最多的之一。",
      "a": "这说明什么？",
      "o": [
        "数据不可靠",
        "这个专精的配点自由度很高，很多格子看阵容和打法",
        "应该跟着最高的配",
        "天赋树设计有问题"
      ],
      "r": 1,
      "e": [
        "数据来自 50 人实测。",
        "正解。<b>分歧格多意味着没有唯一正确的配点</b>——这些格子跟你的阵容、打法、常遇到的对手有关。配点前先想清楚自己的局面。",
        "「跟着最高的配」放弃了这些格子本来要你做的判断。",
        "分歧多不等于设计有问题，可能是设计得有选择空间。"
      ],
      "k": "分歧格多的专精，配点更需要按自己的情况定。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你被死骑用<sk>死亡之握</sk>拉到近身。",
      "a": "优先做什么？",
      "o": [
        "继续蓄力",
        "用<sk>悬空</sk>或<sk>深呼吸</sk>重建距离",
        "交<sk>黑曜鳞片</sk>硬扛",
        "换目标"
      ],
      "r": 1,
      "e": [
        "贴脸状态下蓄力会被打断。",
        "正解。<b>你需要距离才能站定输出</b>——<sk>悬空</sk>让你边移动边打，<sk>深呼吸</sk>直接拉开。先解决距离问题。",
        "硬扛不解决「放不出技能」。",
        "换目标他还在你身边。"
      ],
      "k": "需要站定的专精，被拉近时第一件事是重建距离。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "关于<sk>火焰吐息</sk>的定位。",
      "a": "它主要是什么？",
      "o": [
        "纯输出技能",
        "开门技能：它的持续燃烧让后续红色系伤害吃加成",
        "控制技能",
        "治疗技能"
      ],
      "r": 1,
      "e": [
        "它有伤害，但那不是主要价值。",
        "正解。<b>Scorching Embers 让受<sk>火焰吐息</sk>影响的目标承受更多红色系伤害</b>——所以它是给后续伤害铺路的，要先放。",
        "它不控制。",
        "它不治疗。"
      ],
      "k": "分清哪些技能是「铺路」哪些是「结账」，顺序错了伤害差很多。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到湮灭的英雄天赋是 49/1，但分歧格有 22 个。",
      "a": "这两个数字合在一起说明什么？",
      "o": [
        "矛盾，数据有问题",
        "大方向没得选，但细节上有大量判断空间",
        "都是唯一解",
        "都需要判断"
      ],
      "r": 1,
      "e": [
        "不矛盾，是两个不同层次的事。",
        "正解。<b>英雄天赋线（大方向）没有讨论空间，但普通天赋格（细节）有 22 个需要判断</b>——这说明配点的自由度体现在细处，不在路线选择上。",
        "22 个分歧格不是唯一解。",
        "英雄天赋不需要判断。"
      ],
      "k": "分开看「路线选择」和「细节配点」，它们的自由度可能完全不同。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士贴上来，你正在蓄力。",
      "a": "该怎么办？",
      "o": [
        "继续蓄满",
        "开<sk>悬空</sk>边移动边放",
        "立刻取消",
        "交减伤硬蓄"
      ],
      "r": 1,
      "e": [
        "贴脸状态下蓄力会被打断。",
        "正解。<b><sk>悬空</sk>让你移动施法</b>——不用在输出和走位之间二选一。",
        "完全取消把输出也放弃了。",
        "减伤不防打断。"
      ],
      "k": "被贴住时用能移动施法的手段，不是硬站或完全放弃。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "对湮灭影响多大？",
      "o": [
        "很大，招架挡住你的伤害",
        "招架对你无效（你是法术），减伤部分照吃",
        "完全免疫",
        "没影响"
      ],
      "r": 1,
      "e": [
        "招架挡的是物理攻击。",
        "正解。<b>湮灭是纯法术伤害，招架对你无效</b>——但减伤部分照样生效。",
        "不是免疫。",
        "减伤部分有影响。"
      ],
      "k": "分清对面防御牌的两部分：招架挡物理，减伤挡全部。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士交了<sk>圣盾术</sk>，你刚好蓄满<sk>永恒之涌</sk>。",
      "a": "该放吗？",
      "o": [
        "放，蓄满了不放浪费",
        "转目标或等免疫过去",
        "放，能破免疫",
        "放一半"
      ],
      "r": 1,
      "e": [
        "<b>你为这一发站了好几秒</b>，打进免疫等于那几秒白站。",
        "正解。蓄满代表付出了时间成本，更不该浪费在免疫上。",
        "打不破。",
        "蓄满后没法放一半。"
      ],
      "k": "蓄满的技能成本更高，更不该打进免疫。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给队友上了<sk>保护祝福</sk>（免疫物理）。",
      "a": "对你影响多大？",
      "o": [
        "完全打不动",
        "没影响，你是纯法术伤害",
        "影响一半",
        "只影响 DoT"
      ],
      "r": 1,
      "e": [
        "那是物理专精的处境。",
        "正解。<b>湮灭是纯法术伤害，物理免疫对你完全无效</b>。",
        "没有影响。",
        "DoT 也是法术。"
      ],
      "k": "纯法术专精不怕免疫物理的牌。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "对上猎人，两个远程对射。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁能安心站着输出",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>你的伤害要站定，他的控制会打断你</b>——这个对局比的是谁能创造出安心输出的时间。",
        "血量不是关键。",
        "机动性接近。"
      ],
      "k": "需要站定的专精，对局的核心永远是「能不能站住」。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人用<sk>假死</sk>脱战。",
      "a": "你损失了什么？",
      "o": [
        "没什么",
        "<sk>火焰吐息</sk>的增伤效果清了，要重新铺",
        "只是少打几下",
        "他会立刻回来"
      ],
      "r": 1,
      "e": [
        "损失不小。",
        "正解。<b><sk>火焰吐息</sk>是后续伤害的加成来源</b>——被清掉等于要重新铺一遍才能打满。",
        "损失的是加成。",
        "回来了也要重铺。"
      ],
      "k": "能脱战的对手会清掉你的铺垫，成本要算进去。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "对上盗贼，他的打断和控制链很多。",
      "a": "PvP 天赋该怎么调？",
      "o": [
        "不用调",
        "换上 Obsidian Mettle（黑曜鳞片期间免疫打断和沉默）",
        "换上 Time Stop",
        "换上 Scouring Flame"
      ],
      "r": 1,
      "e": [
        "遇到打断多的对手不调，你的技能会一直放不出来。",
        "正解。<b>湮灭的伤害主体是蓄力和引导，被打断等于没有输出</b>——这一格买的是「能不能把技能放出来」。",
        "Time Stop 是给队友的保命牌。",
        "Scouring Flame 是驱散，跟打断无关。"
      ],
      "k": "看清对手最能剥夺你什么，据此调整天赋。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>暗影斗篷</sk>（免疫法术）。",
      "a": "对湮灭影响多大？",
      "o": [
        "完全打不动，你是纯法术伤害",
        "影响小",
        "没影响",
        "只影响 DoT"
      ],
      "r": 0,
      "e": [
        "正解。<b>湮灭所有输出都是法术</b>——斗篷对你接近完全免疫。看到就该停手或转目标。",
        "影响极大。",
        "影响极大。",
        "所有伤害都受影响。"
      ],
      "k": "纯法术专精怕免疫法术的牌。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师放<sk>心灵尖啸</sk>时你正在蓄力。",
      "a": "损失是什么？",
      "o": [
        "只是被控几秒",
        "蓄力被打断，整发都没了",
        "只损失移动",
        "没什么"
      ],
      "r": 1,
      "e": [
        "损失不只是时间。",
        "正解。<b>蓄到一半被打断，那几秒的站定完全白费</b>——这是这个对局最疼的一下。",
        "恐惧会打断施法。",
        "损失很大。"
      ],
      "k": "蓄力型技能被打断的损失 = 已经付出的站定时间。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "对上牧师，两边都要读条/蓄力。",
      "a": "这个对局的关键是什么？",
      "o": [
        "谁伤害高",
        "打断的时机——谁先被打断谁输",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>两边的核心技能都要施法时间</b>——<sk>镇压</sk>留给他的大治疗，同时防着他打断你的蓄力。",
        "血量不是关键。",
        "两边都是远程。"
      ],
      "k": "两边都要施法的对局，打断时机决定胜负。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用<sk>心灵冰冻</sk>反复打断你。",
      "a": "该怎么应对？",
      "o": [
        "硬蓄，赌他没冷却",
        "用 Obsidian Mettle 的免疫打断窗口把技能放出来",
        "放弃蓄力法术",
        "拉开距离"
      ],
      "r": 1,
      "e": [
        "死骑的打断冷却短，赌不过。",
        "正解。<b><sk>黑曜鳞片</sk>期间免疫打断和沉默</b>——那几秒是你把关键技能放出来的窗口。",
        "放弃蓄力等于放弃主要输出。",
        "死骑有<sk>死亡之握</sk>，拉不开。"
      ],
      "k": "对面打断冷却短时，用免疫打断的窗口而不是赌。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "该怎么办？",
      "o": [
        "蓄满打进去",
        "打一级放掉或转目标，等护罩过去",
        "用<sk>深呼吸</sk>",
        "继续引导<sk>裂解</sk>"
      ],
      "r": 1,
      "e": [
        "护罩吸法术，你的伤害全是法术。",
        "正解。<b>别把蓄满的一发打进护罩</b>——那几秒的站定就白费了。",
        "<sk>深呼吸</sk>的伤害也是法术。",
        "<sk>裂解</sk>同样被吸。"
      ],
      "k": "对面开了抗法术的牌，别把高成本的技能砸进去。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满的<sk>风剪</sk>反复打断你的蓄力。",
      "a": "有什么应对？",
      "o": [
        "硬蓄",
        "假动作骗打断，或用 Obsidian Mettle",
        "放弃蓄力",
        "拉开距离"
      ],
      "r": 1,
      "e": [
        "萨满的打断冷却短，硬蓄会一直被断。",
        "正解。<b>开始蓄力然后取消骗掉<sk>风剪</sk>，再蓄真的那一发</b>；或者用免疫打断的窗口。两个思路都成立。",
        "放弃蓄力等于放弃主要输出。",
        "拉开距离不解决打断（风剪射程够）。"
      ],
      "k": "对面打断冷却短时，假动作和免疫窗口是两条应对路径。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 2,
      "s": "萨满用地缚图腾限制你的走位。",
      "a": "湮灭怎么破？",
      "o": [
        "打掉图腾",
        "开<sk>悬空</sk>，Unburdened Flight 让它免疫减速",
        "用<sk>深呼吸</sk>",
        "硬走出去"
      ],
      "r": 1,
      "e": [
        "打图腾要时间。",
        "正解。<b>Unburdened Flight 让<sk>悬空</sk>期间移动速度不会被降到 100% 以下</b>——等于免疫减速，直接摆脱地缚。",
        "<sk>深呼吸</sk>可以，但<sk>悬空</sk>更省且能同时输出。",
        "被地缚就是走不出去。"
      ],
      "k": "知道自己哪个技能能免疫减速，被限制时就有解。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，两个远程法系互射。",
      "a": "关键是什么？",
      "o": [
        "谁伤害高",
        "打断时机和保持输出的能力",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>两边都要施法时间</b>——<sk>悬空</sk>让你在他的控制下也能保持输出，这是湮灭的优势。",
        "都是布甲。",
        "两边机动性接近。"
      ],
      "k": "法系互射比的是谁能在压力下保持输出。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师用冰环和冰霜新星限制你。",
      "a": "<sk>悬空</sk>能解决吗？",
      "o": [
        "能，它免疫所有控制",
        "部分能：它免疫减速但不免疫定身",
        "不能",
        "只能加速"
      ],
      "r": 1,
      "e": [
        "它不免疫定身和昏迷。",
        "正解。<b>Unburdened Flight 让<sk>悬空</sk>免疫减速，但定身和昏迷仍然生效</b>——分清这个区别很重要，别以为开了就无敌。",
        "对减速有效。",
        "它主要价值是移动施法。"
      ],
      "k": "分清「免疫减速」和「免疫控制」。前者不等于后者。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士的恐惧打断了你的蓄力。",
      "a": "为什么这对湮灭特别疼？",
      "o": [
        "因为伤害高",
        "因为你的伤害主体全要站定施法",
        "因为它减速",
        "因为它是 DoT"
      ],
      "r": 1,
      "e": [
        "恐惧本身伤害不高。",
        "正解。<b>蓄力、引导都要站定</b>——恐惧不只是控住你几秒，是让你已经付出的站定时间全部白费。",
        "恐惧不是减速。",
        "恐惧不是 DoT。"
      ],
      "k": "对要站定输出的专精，打断类控制的损失远大于时间本身。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "对上术士，两边都要读条/蓄力。",
      "a": "关键是什么？",
      "o": [
        "谁伤害高",
        "打断时机",
        "谁血厚",
        "谁自愈强"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b><sk>镇压</sk>留给他的关键法术，同时防着他的恐惧打断你</b>——这是一个互相打断的对局。",
        "血量不是关键。",
        "自愈是他的优势，但胜负在打断。"
      ],
      "k": "互相打断的对局，谁的打断用得更准谁赢。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "武僧开了<sk>业报之触</sk>，你正好蓄满<sk>永恒之涌</sk>。",
      "a": "该放吗？",
      "o": [
        "放，伤害最大化",
        "别放，蓄满的伤害很集中，撞上反伤损失最大",
        "放一半",
        "换目标放"
      ],
      "r": 1,
      "e": [
        "蓄满的一发伤害极集中，全会弹回来。",
        "正解。<b>你为这一发站了好几秒，撞上反伤等于双重损失</b>——既没打出伤害，还伤了自己。",
        "蓄满后没法放一半。",
        "换目标是可行的，但停手等更简单。"
      ],
      "k": "蓄力型的集中爆发撞上反伤，损失比任何专精都大。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "武僧的<sk>切喉手</sk>反复打断你。",
      "a": "该怎么办？",
      "o": [
        "硬蓄",
        "先打一级技能骗掉他的打断",
        "放弃输出",
        "拉开距离"
      ],
      "r": 1,
      "e": [
        "会被一直打断。",
        "正解。<b>用低成本的一级蓄力骗掉他的打断</b>，再放真正的满蓄力。这跟镜像对局的假动作是同一个思路。",
        "放弃输出不是办法。",
        "武僧机动性高，拉不开。"
      ],
      "k": "骗打断用低成本技能，不用高成本的。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 3,
      "s": "德鲁伊用<sk>日光术</sk>沉默你。",
      "a": "为什么这对湮灭是致命的？",
      "o": [
        "伤害高",
        "你所有输出都是法术，沉默期间完全失能",
        "它减速",
        "它是范围伤害"
      ],
      "r": 1,
      "e": [
        "<sk>日光术</sk>伤害很低。",
        "正解。<b>湮灭所有技能都是法术</b>——沉默期间你什么都做不了，这跟被打断一次完全不是一个量级。要注意站位躲开光柱。",
        "不是减速。",
        "伤害不是重点。"
      ],
      "k": "纯法术专精被沉默 = 完全失能。躲光柱比躲伤害重要。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊用<sk>旋风</sk>把你摘出去了。",
      "a": "这几秒你能做什么？",
      "o": [
        "什么都做不了",
        "什么都做不了，但也不会受伤害",
        "可以继续输出",
        "可以移动"
      ],
      "r": 1,
      "e": [
        "「什么都做不了」只说对了一半。",
        "正解。<b>被<sk>旋风</sk>的人不能行动，但也不能被伤害</b>——所以它对你既是损失（输出停摆）也是保护（不会挨打）。",
        "不能输出。",
        "不能移动。"
      ],
      "k": "<sk>旋风</sk>是双向的：既剥夺行动也提供免疫。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 3,
      "s": "对上恶魔猎手，为什么这是湮灭最难的对局？",
      "a": "",
      "o": [
        "他伤害高",
        "高机动 + 打断，同时命中你的两个弱点",
        "他血厚",
        "他控制多"
      ],
      "r": 1,
      "e": [
        "伤害不是核心。",
        "正解。<b>你拉不开距离（他位移多），又站不住（他打断多）</b>——需要站定输出的专精，两个前提同时被破坏。",
        "血量不是关键。",
        "打断是主要威胁。"
      ],
      "k": "认清哪类对手同时命中你的多个弱点，那是要特别准备的对局。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "对上 DH，PvP 天赋该怎么配？",
      "a": "",
      "o": [
        "保持默认",
        "Obsidian Mettle 几乎是刚需",
        "换 Time Stop",
        "换 Scouring Flame"
      ],
      "r": 1,
      "e": [
        "遇到打断这么多的对手不调，技能根本放不出来。",
        "正解。<b>免疫打断和沉默的那几秒，是你唯一能把关键技能放出来的窗口</b>。",
        "Time Stop 是给队友的。",
        "Scouring Flame 跟打断无关。"
      ],
      "k": "对打断特别多的对手，免疫打断的天赋从「可选」变成「刚需」。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 3,
      "s": "镜像对局，两边都有<sk>镇压</sk>，都要蓄力。",
      "a": "核心技巧是什么？",
      "o": [
        "比谁蓄得快",
        "假动作：开始蓄力然后取消，骗掉他的打断",
        "比谁伤害高",
        "比谁血厚"
      ],
      "r": 1,
      "e": [
        "蓄力速度接近。",
        "正解。<b>打断是稀缺资源</b>——骗掉他的<sk>镇压</sk>，你的下一发就能安心蓄满。这是镜像对局的核心博弈。",
        "输出接近。",
        "血量不是关键。"
      ],
      "k": "两边都有打断且都要施法时，假动作是决定性技巧。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "镜像对局，对面用<sk>悬空</sk>边跑边打。",
      "a": "该怎么应对？",
      "o": [
        "追上去",
        "自己也开<sk>悬空</sk>保持输出",
        "停手等",
        "用<sk>深呼吸</sk>接近"
      ],
      "r": 1,
      "e": [
        "两边机动性一样，追不上。",
        "正解。<b>他能边跑边打，你也能</b>——不要在他保持输出的时候自己停下来。",
        "停手就输了输出竞赛。",
        "<sk>深呼吸</sk>是位移，但不解决「保持输出」的问题。"
      ],
      "k": "镜像对局里对面用了什么手段，通常你也该用同一个。"
    }
  ]
};
