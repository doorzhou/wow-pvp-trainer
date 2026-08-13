module.exports = {
  "meta": {
    "title": "痛苦术士 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 痛苦术士 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "痛苦术士,术士,PVP,竞技场,魔兽世界,12.1,Midnight,affliction warlock,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你的伤害不在当下，在接下来的十几秒里。<br>痛苦术士的判断是<b>什么时候种、种给谁、以及能不能让它走完</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛楚\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_curseofsargeras.jpg\" alt=\"痛楚\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"腐蚀术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_abominationexplosion.jpg\" alt=\"腐蚀术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"痛苦无常\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_unstableaffliction_3.jpg\" alt=\"痛苦无常\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？你的伤害是「预订」的，不是「结算」的</span><span class=\"sub\">铺满要时间，被驱散就全没</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>痛楚</sk>、<sk>腐蚀术</sk>、<sk>痛苦无常</sk>都是持续伤害——<b>你按下去的那一刻并没有产生多少伤害，真正的收益在接下来十几秒里慢慢兑现</b>。</p><p style=\"margin-top:8px\">这带来两个后果：<b>一是你需要时间铺满，二是这些伤害可以被驱散掉</b>。所以痛苦术士的核心判断从来不是「打谁」，是「能不能让我种下去的东西走完」。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">痛苦术士的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛楚\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_curseofsargeras.jpg\" alt=\"痛楚\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"腐蚀术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_abominationexplosion.jpg\" alt=\"腐蚀术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">DoT 时钟 · 铺满要几秒</span><span class=\"sub\">这段时间你没什么伤害</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>痛楚</sk>的伤害会随时间递增，<sk>腐蚀术</sk>和<sk>痛苦无常</sk>持续输出。</p><p style=\"margin-top:8px\"><b>铺满之前你是全场伤害最低的</b>——这是痛苦术士最脆弱的一段。对面懂行的会在这时候压你。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恐惧\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_possession.jpg\" alt=\"恐惧\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"恐惧嚎叫\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warlock_howlofterror.jpg\" alt=\"恐惧嚎叫\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟 · 两种恐惧</span><span class=\"sub\">一个单体一个范围</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>恐惧</sk>是单体长控、<sk>恐惧嚎叫</sk>是范围恐惧、<sk>暗影之怒</sk>是范围昏迷。</p><p style=\"margin-top:8px\"><b>术士的控制密度是全场顶级的</b>——但恐惧受到伤害会中断，所以要跟队友沟通别打。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"吸取生命\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_lifedrain02.jpg\" alt=\"吸取生命\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗契约\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_deathpact.jpg\" alt=\"黑暗契约\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">生存时钟 · 你比想象中耐打</span><span class=\"sub\">吸血 + 护盾 + 传送门</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>吸取生命</sk>回血、<sk>黑暗契约</sk>用生命换护盾、<sk>恶魔法阵</sk>瞬间脱离。</p><p style=\"margin-top:8px\"><b>痛苦术士不是脆皮</b>——它的问题不是抗不住，是被贴住之后铺不了 DoT。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"召唤黑眼\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_beholderwarlock.jpg\" alt=\"召唤黑眼\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：摄魂者 Soul Harvester</span><span class=\"sub\">49/50 走这条，地狱行者只有 1 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>摄魂者（Soul Harvester）49/50</b>，地狱行者（Hellcaller）<b>1 人</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线围绕 Demonic Soul 展开——<b>灵魂碎片有几率带上 Succulent Soul，消耗时释放额外伤害</b>。它让你的碎片消耗多了一层随机收益。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恐惧\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_possession.jpg\" alt=\"恐惧\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"恶魔法阵\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_demoniccircleteleport.jpg\" alt=\"恶魔法阵\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：一格没得选，两格看阵容</span><span class=\"sub\">Jinx 必带</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Jinx（50/50）</b>—— 全员必带。<b>施放诅咒时同时施加<sk>腐蚀术</sk>和<sk>痛楚</sk></b>，代价是消耗一个灵魂碎片——它把「上诅咒」和「铺 DoT」合成了一个动作，节省大量施法时间。</p><p style=\"margin-top:8px\"><b>Impish Instincts（38/50）</b>受到物理伤害缩短<sk>恶魔法阵</sk>冷却、<b>Nether Ward（22/50）</b>反射有害法术、<b>Gateway Mastery（20/50）</b>强化传送门。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">Impish Instincts 的高使用率说明了一件事：<b>被近战贴住是这个专精的主要威胁</b>，所以要靠更频繁的传送门脱身。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛楚\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_curseofsargeras.jpg\" alt=\"痛楚\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"腐蚀术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_abominationexplosion.jpg\" alt=\"腐蚀术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"灾难狂欢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warlock_everlastingaffliction.jpg\" alt=\"灾难狂欢\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛楚\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_curseofsargeras.jpg\" alt=\"痛楚\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"腐蚀术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_abominationexplosion.jpg\" alt=\"腐蚀术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 开局先铺满，这段时间你最弱</span><span class=\"sub\">对面懂行的会在这时压你</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>痛楚</sk>随时间递增、<sk>腐蚀术</sk>和<sk>痛苦无常</sk>持续输出。</p><p style=\"margin-top:8px\"><b>铺满之前你是全场伤害最低的</b>——所以开局的位置和队友掩护很重要。Jinx 能把这段时间大幅缩短。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"痛苦无常\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_unstableaffliction_3.jpg\" alt=\"痛苦无常\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · <sk>痛苦无常</sk>是驱散陷阱</span><span class=\"sub\">被驱散会反噬驱散者</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>它被驱散时会对驱散者造成大量伤害并沉默</b>。</p><p style=\"margin-top:8px\"><b>所以它不只是伤害，是对治疗的威慑</b>——对面治疗要么吃着这个 DoT，要么冒着被沉默的风险驱散。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恐惧\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_possession.jpg\" alt=\"恐惧\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"恐惧嚎叫\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warlock_howlofterror.jpg\" alt=\"恐惧嚎叫\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · 恐惧受伤会断，要跟队友说</span><span class=\"sub\">这是术士最常见的配合失误</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>恐惧</sk>和<sk>恐惧嚎叫</sk>都会因受到伤害而中断。</p><p style=\"margin-top:8px\"><b>队友不知道你控了谁，一发范围伤害就把控制打断了</b>——这是术士在随机队伍里最常见的问题。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"恶魔法阵\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_demoniccircleteleport.jpg\" alt=\"恶魔法阵\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · <sk>恶魔法阵</sk>要提前放好</span><span class=\"sub\">它是你的逃生舱</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>先在安全位置放下法阵，<b>需要时瞬间传送回去并移除减速</b>。</p><p style=\"margin-top:8px\"><b>关键是「提前放」</b>——被贴住之后才想起来放，那时候已经晚了。Impish Instincts 让它冷却更快。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灾难狂欢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warlock_everlastingaffliction.jpg\" alt=\"灾难狂欢\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 灵魂碎片什么时候花</span><span class=\"sub\">DoT 越多，狂欢越疼</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>灾难狂欢</sk>的伤害取决于目标身上有多少你的 DoT。</p><p style=\"margin-top:8px\"><b>所以碎片不该急着花</b>——先把 DoT 铺满，再一次性花碎片，收益差好几倍。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"吸取生命\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_lifedrain02.jpg\" alt=\"吸取生命\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗契约\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_deathpact.jpg\" alt=\"黑暗契约\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 被压住时的自保顺序</span><span class=\"sub\">你比想象中耐打</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>吸取生命</sk>持续回血、<sk>黑暗契约</sk>用当前生命换更大的护盾、<sk>不灭决心</sk>大减伤。</p><p style=\"margin-top:8px\"><b><sk>黑暗契约</sk>要在血量还healthy的时候用</b>——它按当前生命值的百分比换护盾，血越低护盾越小。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">碎片要等 DoT 铺满再花</div><div class=\"dd\"><sk>灾难狂欢</sk>的伤害取决于目标身上有几个 DoT。急着花，收益差好几倍。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">恐惧受伤会断，开控前跟队友说一声</div><div class=\"dd\">这是术士在随机队伍里最常见的配合失误。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\"><sk>恶魔法阵</sk>提前放，别等被贴住</div><div class=\"dd\">它是逃生舱不是应急键。被追上之后再放就来不及了。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面有几个驱散？</b>你的伤害是 DoT，能被驱散掉 —— <b>但<sk>痛苦无常</sk>被驱散会反噬</b>，这是你的威慑。</p><p style=\"margin-top:8px\"><b>2 · 谁会来贴我？</b>被贴住你就铺不了 DoT。<sk>恶魔法阵</sk>要提前放在能救命的位置。</p><p style=\"margin-top:8px\"><b>3 · 队友知不知道我在控人？</b>恐惧受伤会断，开控前说一声比事后抱怨有用。</p></div><div class=\"sc\"><h4>为什么开局那几秒最危险</h4><p>你的伤害全在 DoT 上，而 DoT 需要时间铺、需要时间兑现。<b>铺满之前你是全场伤害最低的那个</b>。</p><p style=\"margin-top:8px\">所以：<b>开局的位置比开局的输出重要</b>。站在队友能掩护的地方，用 Jinx 尽快把 DoT 铺上，熬过这段时间你才开始真正有威胁。</p></div>"
  },
  "sk": {
    "痛楚": "spell_shadow_curseofsargeras",
    "腐蚀术": "spell_shadow_abominationexplosion",
    "痛苦无常": "spell_shadow_unstableaffliction_3",
    "恐惧": "spell_shadow_possession",
    "恐惧嚎叫": "ability_warlock_howlofterror",
    "暗影之怒": "ability_warlock_shadowfurytga",
    "吸取生命": "spell_shadow_lifedrain02",
    "黑暗契约": "spell_shadow_deathpact",
    "恶魔法阵": "spell_shadow_demoniccircleteleport",
    "灾难狂欢": "ability_warlock_everlastingaffliction",
    "不灭决心": "spell_shadow_demonictactics",
    "召唤黑眼": "inv_beholderwarlock",
    "剑在人在": "ability_warrior_challange",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "灵龟守护": "ability_hunter_pet_turtle",
    "假死": "ability_rogue_feigndeath",
    "暗影斗篷": "spell_shadow_nethercloak",
    "消失": "ability_vanish",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "星界转移": "ability_shaman_astralshift",
    "根基图腾": "spell_nature_groundingtotem",
    "寒冰屏障": "spell_frost_frost",
    "法术封锁": "spell_shadow_mindrot",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "切喉手": "ability_monk_spearhand",
    "旋风": "spell_nature_earthbind",
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
      "k": "dot",
      "t": "DoT 铺满了",
      "d": "<sk>痛楚</sk>、<sk>腐蚀术</sk>、<sk>痛苦无常</sk>都在目标身上。没铺满，<sk>灾难狂欢</sk>打不出伤害"
    },
    {
      "k": "shard",
      "t": "灵魂碎片够用",
      "d": "<sk>灾难狂欢</sk>要花碎片。资源不够，DoT 铺得再满也结不了账"
    },
    {
      "k": "safe",
      "t": "你能安心施法",
      "d": "你的 DoT 和大部分技能都要施法时间。被贴着打就铺不上"
    },
    {
      "k": "disp",
      "t": "对面驱散不在手上",
      "d": "你的伤害是 DoT，会被驱散掉。<b>但<sk>痛苦无常</sk>反噬驱散者</b>，这是你的筹码"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你的地基还没打好</h3><p>DoT 没铺满、碎片也不够。<b>痛苦术士的伤害是预订的</b>——先把 DoT 种上，让它慢慢兑现。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，而且你现在施不了法</h3><p>条件差太多，还被贴着打。<b>先用<sk>恶魔法阵</sk>脱身</b>，铺不上 DoT 就什么都谈不上。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是铺满不是结账</h3><p>把 DoT 种满、逼对面交驱散，<b>把碎片留到 DoT 铺齐之后再花</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>DoT 不满就是狂欢打不疼，碎片不够就是结不了账，被贴住就是铺不上</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p>DoT 铺满 → <sk>召唤黑眼</sk>放大持续伤害 → <sk>灾难狂欢</sk>把碎片一次性花掉 → <sk>恐惧</sk>卡在治疗准备驱散那一秒。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开局先把<sk>恶魔法阵</sk>放好",
      "它是逃生舱不是应急键。<b>被贴住之后再想起来放就晚了。</b>",
      "恶魔法阵"
    ],
    [
      "用 Jinx 快速铺 DoT",
      "施放诅咒时同时上<sk>腐蚀术</sk>和<sk>痛楚</sk>。<b>这一格把你最脆弱的那段时间缩短了一半。</b>",
      "痛楚"
    ],
    [
      "补上<sk>痛苦无常</sk>",
      "它被驱散会反噬驱散者并沉默。<b>所以它既是伤害，也是对治疗的威慑。</b>",
      "痛苦无常"
    ],
    [
      "碎片攒着，等 DoT 铺满",
      "<sk>灾难狂欢</sk>的伤害取决于目标身上有几个 DoT。<b>急着花，收益差好几倍。</b>",
      "灾难狂欢"
    ],
    [
      "<sk>召唤黑眼</sk>放大持续伤害",
      "它在场期间你的 DoT 伤害大幅提升。<b>要在 DoT 铺满之后召唤，不是之前。</b>",
      "召唤黑眼"
    ],
    [
      "恐惧要跟队友说一声",
      "<sk>恐惧</sk>和<sk>恐惧嚎叫</sk>受伤会断。<b>队友不知道你控了谁，一发范围伤害就断了。</b>",
      "恐惧"
    ],
    [
      "被贴住就传送",
      "<sk>恶魔法阵</sk>瞬间脱离并移除减速。<b>Impish Instincts 让它冷却更快</b>——被打反而能更快再用。",
      "恶魔法阵"
    ],
    [
      "血线告急用<sk>黑暗契约</sk>",
      "它按<b>当前</b>生命值换护盾，<b>所以要在血量还够的时候用</b>，不是等到快死。",
      "黑暗契约"
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
        "one": "他贴上来你就铺不了 DoT。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "你是法术伤害，<b>招架对你无效</b>，减伤照吃。"
          ],
          [
            "他贴得上你",
            "<b>这是这个对局的核心问题</b>——你的 DoT 要施法时间。"
          ],
          [
            "<sk>恐惧</sk>和<sk>恶魔法阵</sk>",
            "<b>Berserker Rage 能免疫恐惧</b>，所以要留传送门当第二手。"
          ],
          [
            "开局先铺满再谈别的",
            "他的爆发窗口只有 10 秒，<b>DoT 铺满之后你耗得过他</b>。"
          ]
        ],
        "arena": "他能免疫恐惧，所以<sk>恶魔法阵</sk>是你更可靠的脱身手段。",
        "duel": "单挑铺满 DoT 之后靠吸血和护盾耗，他的爆发过去你就赢了。"
      },
      {
        "id": "paladin",
        "n": "圣骑士",
        "ic": "classicon_paladin",
        "c": "#F48CBA",
        "diff": "看驱散",
        "cards": [
          "圣盾术",
          "保护祝福",
          "自由祝福"
        ],
        "one": "他的驱散能直接抹掉你的伤害。",
        "q": [
          [
            "<sk>圣盾术</sk> —— 完全免疫",
            "免疫期间 DoT 也不生效，等它过去。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "影响有限，你不靠减速吃饭。"
          ],
          [
            "<b>他的净化会驱散你的 DoT</b>",
            "<b>但<sk>痛苦无常</sk>被驱散会反噬并沉默他</b>——这是你的筹码。"
          ],
          [
            "先上<sk>痛苦无常</sk>再上别的",
            "让他先面对「驱不驱散」这个两难。"
          ]
        ],
        "arena": "<sk>痛苦无常</sk>先上，让骑士面对「驱散被沉默 vs 不驱散吃伤害」的两难。",
        "duel": "单挑靠 DoT 和吸血耗，等他的免疫和驱散都用完。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "怕脱战",
        "cards": [
          "灵龟守护",
          "假死",
          "逃脱",
          "猎豹守护"
        ],
        "one": "他一个假死你的 DoT 就全没了。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间 DoT 不生效。"
          ],
          [
            "<b><sk>假死</sk>清掉你的 DoT</b>",
            "<b>这是这个对局最亏的一点</b>——你铺了半天全归零。"
          ],
          [
            "他的控制打断你施法",
            "猎人的陷阱和控制会中断你铺 DoT。"
          ],
          [
            "考虑先打他队友",
            "<b>DoT 铺在跑不掉的人身上更划算</b>。"
          ]
        ],
        "arena": "猎人能用<sk>假死</sk>清掉你的 DoT，把伤害铺在他队友身上更划算。",
        "duel": "单挑要算上重铺的成本，他每次假死你都要从头来。"
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
        "one": "他免疫法术、能脱战、还贴脸开场。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你是纯法术伤害，斗篷对你接近完全免疫，还会清掉 DoT</b>。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "同样清掉你的 DoT。"
          ],
          [
            "<b>他的控制链</b>",
            "<b>贴脸开场加控制链，你根本铺不上 DoT</b>。"
          ],
          [
            "<sk>恶魔法阵</sk>提前放好",
            "这是你唯一能主动脱身的手段。"
          ]
        ],
        "arena": "这是痛苦术士最难的对局：免疫法术 + 脱战 + 贴脸控制，三样都克制你。",
        "duel": "单挑靠传送门反复拉开，铺满 DoT 再耗——但他能重置，很难赢。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "拼驱散",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸",
          "真言术：盾"
        ],
        "one": "他能驱散，但驱散<sk>痛苦无常</sk>要付代价。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "短时间的，等它过去。"
          ],
          [
            "<sk>心灵尖啸</sk>打断你施法",
            "恐惧会中断你铺 DoT。"
          ],
          [
            "<b>他的驱散是主要威胁</b>",
            "<b><sk>痛苦无常</sk>反噬能让他不敢乱驱</b>。"
          ],
          [
            "两个都能耗",
            "这个对局往往拖很久，比的是资源管理。"
          ]
        ],
        "arena": "<sk>痛苦无常</sk>是你对牧师最重要的一张牌——它让驱散变成两难。",
        "duel": "单挑比资源，两边都能续，看谁的法力和冷却撑得久。"
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
        "one": "他抓得住你，而你需要距离铺 DoT。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡法术",
            "<b>你是纯法术伤害，护罩对你很有效，还会挡掉 DoT</b>。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "<b>你的距离随时被破坏</b>。"
          ],
          [
            "他的减疗压你的吸血",
            "死骑的疫病自带减疗，<b>你的<sk>吸取生命</sk>效率会下降</b>。"
          ],
          [
            "<sk>恶魔法阵</sk>是关键",
            "被握之后立刻传送回去。"
          ]
        ],
        "arena": "死骑的减疗会压低你的吸血效率，这个对局要更依赖护盾而不是回血。",
        "duel": "单挑靠传送门反复拉开，他的机动性差追不上。"
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
        "one": "他能净化你的 DoT，图腾还能吸你的控制。",
        "q": [
          [
            "<sk>星界转移</sk> —— 大减伤",
            "不是免疫，DoT 照走。"
          ],
          [
            "地缚与减速",
            "萨满能限制你的走位。"
          ],
          [
            "<b>他的净化 + <sk>根基图腾</sk></b>",
            "<b>净化清 DoT，图腾吸你的恐惧</b>——两个都要处理。"
          ],
          [
            "先清图腾再上控制",
            "关键控制放之前先确认图腾没了。"
          ]
        ],
        "arena": "放<sk>恐惧</sk>之前先清掉<sk>根基图腾</sk>，否则控制会被吸走。",
        "duel": "单挑靠 DoT 和吸血耗，注意他的净化会清掉你的伤害。"
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
        "one": "两个法系互控，比谁先铺满。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "DoT 期间不生效，等它结束。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "法师的控制会打断你施法。"
          ],
          [
            "<sk>法术封锁</sk>断他的关键法术",
            "宠物的打断在这个对局很值。"
          ],
          [
            "你的持续伤害耗得过他",
            "<b>法师是爆发型，你是持续型</b>——熬过他的窗口你就赢了。"
          ]
        ],
        "arena": "法师是爆发型你是持续型，熬过他的爆发窗口，DoT 会慢慢把他磨死。",
        "duel": "单挑用传送门躲他的爆发，铺满 DoT 之后耗。"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "镜像",
        "cards": [
          "虚空行走",
          "恐惧",
          "石肤术"
        ],
        "one": "镜像对局：谁先铺满谁占先手。",
        "q": [
          [
            "两边都有吸血和护盾",
            "这个对局往往拖很久。"
          ],
          [
            "两边都能恐惧",
            "<b>恐惧的先手很关键</b>——被恐惧的那个铺不了 DoT。"
          ],
          [
            "<b>谁先铺满谁赢</b>",
            "<b>DoT 的兑现需要时间，先铺满的那个先开始收益</b>。"
          ],
          [
            "打断和控制的博弈",
            "两边的关键技能都要施法。"
          ]
        ],
        "arena": "镜像的核心是谁先铺满 DoT。恐惧的先手直接决定这件事。",
        "duel": "单挑比资源和恐惧先手，两边的伤害模式一样。"
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
        "one": "他贴上来你就铺不了 DoT。",
        "q": [
          [
            "<sk>业报之触</sk> —— 伤害反弹",
            "<b>你的 DoT 也会被反弹</b>——但 DoT 的伤害是分散的，比集中爆发亏得少。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧的机动性很高。"
          ],
          [
            "<sk>切喉手</sk>打断你施法",
            "<b>你的 DoT 和大技能都要施法时间</b>。"
          ],
          [
            "<sk>恶魔法阵</sk>提前放",
            "被贴住就传送，别硬扛。"
          ]
        ],
        "arena": "业报期间你的 DoT 也会被反弹，但比集中爆发的专精亏得少。",
        "duel": "单挑靠传送门反复拉开，他的机动性追得上但你能瞬移。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "怕驱散",
        "cards": [
          "树皮术",
          "旅行形态",
          "气定神闲"
        ],
        "one": "他能驱散，还有<sk>旋风</sk>把人摘走。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "DoT 照走，只是伤害降低。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能跑掉重置。"
          ],
          [
            "<b><sk>旋风</sk>和驱散</b>",
            "<b>旋风让你的 DoT 暂停生效，驱散直接清掉</b>。"
          ],
          [
            "<sk>痛苦无常</sk>威慑驱散",
            "让他不敢随便驱。"
          ]
        ],
        "arena": "德鲁伊的驱散和<sk>旋风</sk>都能中断你的 DoT 收益，<sk>痛苦无常</sk>是你的反制。",
        "duel": "单挑靠 DoT 持续压，德鲁伊的自愈耗不过你的减疗和持续伤害。"
      },
      {
        "id": "demonhunter",
        "n": "恶魔猎手",
        "ic": "classicon_demonhunter",
        "c": "#A330C9",
        "diff": "怕贴脸",
        "cards": [
          "恶魔变形",
          "疾影",
          "黑曜鳞片"
        ],
        "one": "高机动 + 打断，你很难铺满 DoT。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，DoT 照走。"
          ],
          [
            "<b>二段跳与冲刺</b>",
            "<b>你拉不开距离，传送门用完他马上又贴上来</b>。"
          ],
          [
            "他的打断和沉默",
            "<b>你的 DoT 要施法时间，打断很疼</b>。"
          ],
          [
            "Impish Instincts 有用",
            "受到物理伤害缩短传送门冷却，<b>对上 DH 这一格价值高</b>。"
          ]
        ],
        "arena": "对上 DH 靠 Impish Instincts 让传送门转得更快，被打反而能更快脱身。",
        "duel": "单挑很难打，他的机动性和打断都克制你铺 DoT。"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "拼施法",
        "cards": [
          "悬空",
          "黑曜鳞片"
        ],
        "one": "两个法系对射，都要施法时间。",
        "q": [
          [
            "<sk>黑曜鳞片</sk> · <sk>悬空</sk>",
            "DoT 照走，悬空不影响持续伤害。"
          ],
          [
            "翱翔与击退",
            "唤魔师能拉开距离，但 DoT 够得着。"
          ],
          [
            "<sk>法术封锁</sk>断他的蓄力",
            "<b>唤魔师的伤害大半来自蓄力，打断价值高</b>。"
          ],
          [
            "你的 DoT 不受距离影响",
            "<b>这是你对远程对手的优势</b>——种下去就一直在走。"
          ]
        ],
        "arena": "DoT 不受距离影响，唤魔师飞得再远你的伤害也在走。",
        "duel": "单挑用宠物打断他的蓄力，你的持续伤害耗得过他。"
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
      "s": "你刚落地，目标身上还没有任何 DoT。",
      "a": "这时候你的战斗力如何？",
      "o": [
        "正常",
        "全场最低——DoT 没铺满之前你几乎没有伤害",
        "很高",
        "跟平时一样"
      ],
      "r": 1,
      "e": [
        "不正常，这是你最脆弱的时候。",
        "正解。<b>你的伤害全在 DoT 上，而 DoT 需要时间铺、需要时间兑现</b>——铺满之前你是全场伤害最低的。对面懂行的会在这时候压你。",
        "恰恰相反。",
        "差别很大。"
      ],
      "k": "开局那几秒是痛苦术士最危险的时候。位置比输出重要。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "你的灵魂碎片满了，但目标身上只有一个 DoT。",
      "a": "现在该花碎片吗？",
      "o": [
        "该，碎片满了不花浪费",
        "不该，先把 DoT 铺满再花",
        "该，先打一发试试",
        "看目标血量"
      ],
      "r": 1,
      "e": [
        "花早了收益差好几倍。",
        "正解。<b><sk>灾难狂欢</sk>的伤害取决于目标身上有几个你的 DoT</b>——只有一个 DoT 时花碎片，等于把资源浪费掉。",
        "「试试」也是浪费。",
        "跟血量无关，是 DoT 数量决定的。"
      ],
      "k": "碎片要等 DoT 铺满再花。这是痛苦术士最基本的资源纪律。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 3,
      "s": "对面治疗准备驱散你的 DoT。你身上有<sk>痛苦无常</sk>。",
      "a": "这对他意味着什么？",
      "o": [
        "随便驱，没代价",
        "驱散<sk>痛苦无常</sk>会反噬他并沉默",
        "驱散会失败",
        "驱散只能清一个"
      ],
      "r": 1,
      "e": [
        "有代价。",
        "正解。<b><sk>痛苦无常</sk>被驱散时会对驱散者造成大量伤害并沉默</b>——所以它不只是伤害，是对治疗的威慑：驱不驱散都难受。",
        "驱散会成功，只是有代价。",
        "这不是数量问题。"
      ],
      "k": "<sk>痛苦无常</sk>让对面治疗面对两难。这是它比单纯伤害更大的价值。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "关于 Jinx 这个 PvP 天赋（50/50 必带）。",
      "a": "它做了什么？",
      "o": [
        "提高诅咒伤害",
        "施放诅咒时同时施加<sk>腐蚀术</sk>和<sk>痛楚</sk>，代价是消耗一个碎片",
        "延长诅咒时间",
        "让诅咒不可驱散"
      ],
      "r": 1,
      "e": [
        "它不直接加伤害。",
        "正解。<b>它把「上诅咒」和「铺 DoT」合成了一个动作</b>——大幅缩短你最脆弱的那段铺垫时间。这就是它 100% 使用率的原因。",
        "不是延长时间。",
        "诅咒仍可被驱散。"
      ],
      "k": "能压缩「准备时间」的天赋，对铺垫型专精价值最高。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "你恐惧了对面治疗，队友一发范围伤害把恐惧打断了。",
      "a": "问题出在哪？",
      "o": [
        "恐惧本来就不稳",
        "沟通问题——恐惧受伤会断，开控前该说一声",
        "队友技能有问题",
        "应该用别的控制"
      ],
      "r": 1,
      "e": [
        "恐惧是稳定的，是被打断了。",
        "正解。<b>这是术士在随机队伍里最常见的失误</b>——队友不知道你控了谁，一发范围伤害就把控制废了。开控前说一声比事后抱怨有用。",
        "队友没做错，是信息不同步。",
        "术士的控制主要就是恐惧类。"
      ],
      "k": "受伤会断的控制，用之前必须跟队友同步。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "你被近战贴住了，这时才想起来放<sk>恶魔法阵</sk>。",
      "a": "有什么问题？",
      "o": [
        "没问题，随时能放",
        "太晚了——法阵要提前放在安全位置",
        "应该放在脚下",
        "应该先跑再放"
      ],
      "r": 1,
      "e": [
        "放法阵需要时间，而且放在被贴住的位置没有意义。",
        "正解。<b><sk>恶魔法阵</sk>是逃生舱不是应急键</b>——要在开局就放在能救命的位置。被追上之后才放，等于没有这张牌。",
        "放脚下等于传送到原地。",
        "被贴住的时候你跑不掉。"
      ],
      "k": "逃生类技能要提前布置。等需要的时候才准备就来不及了。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "你的血量掉到 <em>30%</em>，<sk>黑暗契约</sk>好着。",
      "a": "现在用效果如何？",
      "o": [
        "很好，正是时候",
        "效果打折——它按当前生命值换护盾，血越低护盾越小",
        "没影响",
        "会直接死"
      ],
      "r": 1,
      "e": [
        "时机不对。",
        "正解。<b><sk>黑暗契约</sk>牺牲当前生命值的一部分换护盾</b>——血量越低，能换到的护盾越小。要在血量还够的时候用。",
        "有影响，护盾会小很多。",
        "不会死，但收益很低。"
      ],
      "k": "按当前值计算的技能，要在数值还高的时候用。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 1,
      "s": "痛苦术士的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "急速",
        "精通",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 急速 70 > 精通 6 > 爆击 1</b>。",
        "急速是第二，差距不大——它加快施法和 DoT 跳动。",
        "精通只有 6。",
        "爆击几乎是 0。"
      ],
      "k": "痛苦术士堆全能和急速。急速加快 DoT 兑现速度。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 3,
      "s": "对面猎人用<sk>假死</sk>脱战了，你刚在他身上铺满 DoT。",
      "a": "损失有多大？",
      "o": [
        "不大",
        "很大——DoT 全清了，你的整段铺垫归零",
        "只是少打几下",
        "他会带着 DoT 回来"
      ],
      "r": 1,
      "e": [
        "这是痛苦术士最亏的情况之一。",
        "正解。<b>脱战会清掉所有 DoT</b>——对一个「伤害是预订的」专精来说，这等于把你已经付出的时间成本全部作废。",
        "损失的是整段铺垫。",
        "脱战后 DoT 不保留。"
      ],
      "k": "对能脱战的对手，考虑把 DoT 铺在跑不掉的人身上。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面是盗贼，他开了<sk>暗影斗篷</sk>。",
      "a": "对你的 DoT 有什么影响？",
      "o": [
        "没影响，DoT 已经在身上了",
        "会被清掉——斗篷免疫法术并移除已有效果",
        "只是暂停",
        "伤害减半"
      ],
      "r": 1,
      "e": [
        "DoT 也是法术效果。",
        "正解。<b>斗篷不只免疫新的法术，还会清掉你已经铺好的 DoT</b>——这是痛苦术士对上贼最难受的一点。",
        "不是暂停，是移除。",
        "是清除不是减半。"
      ],
      "k": "免疫法术的牌对 DoT 专精是双重打击：既进不去新的，也清掉旧的。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 2,
      "s": "你准备召唤<sk>召唤黑眼</sk>。",
      "a": "什么时候召唤最好？",
      "o": [
        "开局就召唤",
        "DoT 铺满之后",
        "血量低的时候",
        "随时"
      ],
      "r": 1,
      "e": [
        "开局 DoT 还没铺，黑眼放大不了什么。",
        "正解。<b>黑眼放大的是你的持续伤害</b>——DoT 越多、层数越足，它的加成越大。所以要在铺满之后召唤。",
        "跟血量无关。",
        "时机很重要。"
      ],
      "k": "放大类技能要在被放大的东西铺满之后再开。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "关于 Impish Instincts（38/50）。",
      "a": "它的高使用率说明了什么？",
      "o": [
        "它伤害高",
        "被近战贴住是这个专精的主要威胁",
        "它是团队增益",
        "它省法力"
      ],
      "r": 1,
      "e": [
        "它不加伤害。",
        "正解。<b>它让受到物理伤害时<sk>恶魔法阵</sk>冷却更快</b>——38/50 的使用率说明 top50 一致认为「被近战贴住」是最需要解决的问题。",
        "它只影响自己。",
        "跟法力无关。"
      ],
      "k": "看高使用率的防御天赋在防什么，就知道这个专精怕什么。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 3,
      "s": "对面圣骑士驱散能力强，你在考虑先上哪个 DoT。",
      "a": "该先上什么？",
      "o": [
        "<sk>腐蚀术</sk>",
        "<sk>痛苦无常</sk>",
        "<sk>痛楚</sk>",
        "随便"
      ],
      "r": 1,
      "e": [
        "腐蚀术被驱散没有代价。",
        "正解。<b>先上<sk>痛苦无常</sk>，让他先面对「驱散被沉默 vs 不驱散吃伤害」的两难</b>——这样你后面铺的其他 DoT 才有活的机会。",
        "痛楚被驱散也没代价。",
        "顺序有讲究。"
      ],
      "k": "对面有驱散时，先上带反制效果的那个 DoT。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "你在打对面输出，但他一直躲你的视线。",
      "a": "DoT 会怎样？",
      "o": [
        "会中断",
        "不受影响，种下去就一直在走",
        "伤害减半",
        "会被驱散"
      ],
      "r": 1,
      "e": [
        "DoT 不需要视线维持。",
        "正解。<b>这是 DoT 专精对远程和游走型对手的优势</b>——种下去之后不管他跑到哪、有没有视线，伤害都在走。",
        "伤害不变。",
        "躲视线不等于驱散。"
      ],
      "k": "DoT 不受距离和视线影响。这是它对付风筝型对手的天然优势。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "你的队友控住了对面治疗 5 秒，但你的 DoT 只铺了一半。",
      "a": "该做什么？",
      "o": [
        "继续铺 DoT",
        "用碎片打伤害，趁治疗不在",
        "退出来准备下一轮",
        "换目标"
      ],
      "r": 0,
      "e": [
        "正解。<b>治疗不在的时候，铺 DoT 的价值反而更高</b>——因为你铺的伤害在接下来十几秒里都不会被补回来。这跟即时伤害专精的判断不同。",
        "碎片打伤害的前提是 DoT 铺满了，现在花收益很低。",
        "控制窗口退出来是浪费。",
        "换目标要重新铺，更亏。"
      ],
      "k": "DoT 专精在控制窗口里该铺垫，不是急着结账——你铺的东西之后才兑现。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 2,
      "s": "对面死骑的疫病挂在你身上，你在用<sk>吸取生命</sk>回血。",
      "a": "效果如何？",
      "o": [
        "正常",
        "效率下降——死骑的疫病自带减疗",
        "完全无效",
        "反而更强"
      ],
      "r": 1,
      "e": [
        "会受影响。",
        "正解。<b>死骑的疫病自带减疗</b>——你的吸血效率会明显下降。这个对局要更依赖<sk>黑暗契约</sk>的护盾而不是回血。",
        "不是完全无效，是打折。",
        "不会更强。"
      ],
      "k": "对面有减疗时，改用护盾类自保而不是治疗类。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "痛苦术士只有 7 个分歧格，是站上最少的。",
      "a": "这说明什么？",
      "o": [
        "天赋树设计单调",
        "配点共识度高，难点在别处",
        "数据不可靠",
        "应该多点几个"
      ],
      "r": 1,
      "e": [
        "分歧少不等于单调。",
        "正解。<b>7 个分歧格意味着大部分格子有共识</b>——这个专精的难点不在配点，在 DoT 的铺设时机、碎片的花费时机和控制的沟通上。",
        "数据来自 50 人实测。",
        "天赋点数固定。"
      ],
      "k": "分歧格少的专精，难点在操作节奏不在配点。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "你和法师对拼，他开了爆发。",
      "a": "该怎么打？",
      "o": [
        "也开爆发对拼",
        "用传送门躲过他的窗口，然后靠 DoT 慢慢磨",
        "立刻换目标",
        "硬扛"
      ],
      "r": 1,
      "e": [
        "你是持续型，对拼爆发是拿短处比长处。",
        "正解。<b>法师是爆发型，你是持续型</b>——熬过他的窗口，你的 DoT 会一直在走。时间站在你这边。",
        "换目标要重新铺 DoT。",
        "硬扛可能扛不住他的集中爆发。"
      ],
      "k": "持续型对爆发型，核心是熬过对方的窗口。时间是你的朋友。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "对面德鲁伊用<sk>旋风</sk>把你的目标摘走了。",
      "a": "你的 DoT 会怎样？",
      "o": [
        "被清掉",
        "还在，但期间不生效",
        "伤害翻倍",
        "会转移"
      ],
      "r": 1,
      "e": [
        "<sk>旋风</sk>不清除效果。",
        "正解。<b>被旋的目标不能被伤害，所以 DoT 期间不产生伤害</b>——但效果还在，旋风结束后继续走。这跟被驱散完全不同。",
        "不会翻倍。",
        "不转移。"
      ],
      "k": "分清「暂停生效」和「被清除」。前者只是延迟，后者是归零。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 3,
      "s": "镜像对局，对面也是痛苦术士。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁先铺满 DoT",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "两边伤害模式一样。",
        "正解。<b>DoT 的兑现需要时间</b>——先铺满的那个先开始收益，这个先手优势会一直累积。恐惧的先手直接决定谁能先铺满。",
        "两边生存能力接近。",
        "两边都有传送门。"
      ],
      "k": "两个铺垫型专精对拼，先完成铺垫的赢。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "你要用<sk>恐惧</sk>控住对面治疗，但对面萨满放了<sk>根基图腾</sk>。",
      "a": "该注意什么？",
      "o": [
        "没什么",
        "图腾会把恐惧吸走，先清图腾",
        "换个目标",
        "等图腾过期"
      ],
      "r": 1,
      "e": [
        "直接放会被吸掉。",
        "正解。<b><sk>根基图腾</sk>重定向针对队友的有害法术</b>——你的恐惧会被它吃掉。先清图腾再上控制。",
        "换目标不解决图腾。",
        "等它过期，控制时机也过了。"
      ],
      "k": "放关键控制前先确认没有能吸它的东西。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 2,
      "s": "你被恶魔猎手贴着打，传送门刚用过。",
      "a": "Impish Instincts 在这时起什么作用？",
      "o": [
        "没用",
        "受到物理伤害会缩短传送门冷却——被打反而能更快再用",
        "提高伤害",
        "免疫控制"
      ],
      "r": 1,
      "e": [
        "它正是为这种情况设计的。",
        "正解。<b>受到直接物理伤害会缩短<sk>恶魔法阵</sk>的冷却</b>——所以被近战压着打的时候，你的脱身手段转得更快。这是它对上 DH 价值高的原因。",
        "它不加伤害。",
        "不免疫控制。"
      ],
      "k": "有些防御天赋在你越危险的时候越强。认清它们的触发条件。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你的 DoT 全铺满了，碎片也满了，对面治疗刚被控住。",
      "a": "现在该做什么？",
      "o": [
        "继续铺 DoT",
        "<sk>灾难狂欢</sk>把碎片花掉",
        "退出来",
        "换目标"
      ],
      "r": 1,
      "e": [
        "已经铺满了，继续铺是浪费。",
        "正解。<b>DoT 铺满 + 碎片满 + 治疗不在，三个条件同时成立</b>——这就是痛苦术士等的那一刻，把碎片一次性花掉。",
        "这是最好的输出窗口。",
        "换目标要从头铺。"
      ],
      "k": "三个条件同时成立的时刻很少见。出现了就要抓住。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "对面有强驱散，你的 DoT 一直被清。",
      "a": "除了<sk>痛苦无常</sk>的反噬，还能怎么办？",
      "o": [
        "放弃 DoT",
        "把 DoT 铺在多个目标身上，分散驱散压力",
        "只打一个目标",
        "换专精"
      ],
      "r": 1,
      "e": [
        "DoT 是你的伤害来源。",
        "正解。<b>驱散是有冷却和成本的</b>——把 DoT 铺开，他没法全部清掉，总有一部分能走完。",
        "集中在一个目标反而容易被全清。",
        "这是可以在局内解决的问题。"
      ],
      "k": "对面的清除手段有限时，分散铺设能保证一部分收益。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到痛苦术士开局最弱，但拖久了很强。",
      "a": "这决定了什么打法？",
      "o": [
        "开局就要抢先手",
        "熬过开局，把局面拖到你的收益期",
        "速战速决",
        "放弃前期"
      ],
      "r": 1,
      "e": [
        "抢先手是爆发型专精的打法。",
        "正解。<b>你的伤害是预订的，兑现需要时间</b>——所以开局求稳、活下来、把 DoT 铺上，之后时间站在你这边。这跟爆发型专精的思路完全相反。",
        "速战速决对你不利。",
        "不是放弃，是求稳过渡。"
      ],
      "k": "认清自己的收益曲线。前期弱后期强的专精，开局的目标是活着铺垫。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>天神下凡</sk>贴上来。",
      "a": "该怎么应对？",
      "o": [
        "对拼输出",
        "用<sk>恶魔法阵</sk>脱身，等他窗口过去",
        "恐惧他",
        "硬扛"
      ],
      "r": 1,
      "e": [
        "他的窗口伤害很集中，对拼不划算。",
        "正解。<b>他的窗口只有 10 秒，你的 DoT 一直在走</b>——躲过去，时间站在你这边。",
        "战士能免疫恐惧（Berserker Rage），不可靠。",
        "硬扛风险大。"
      ],
      "k": "对短窗口爆发型对手，躲过窗口比对拼划算。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士能免疫恐惧。",
      "a": "你的脱身手段该靠什么？",
      "o": [
        "<sk>恐惧</sk>",
        "<sk>恶魔法阵</sk>",
        "<sk>恐惧嚎叫</sk>",
        "<sk>死亡缠绕</sk>"
      ],
      "r": 1,
      "e": [
        "他能免疫恐惧。",
        "正解。<b>Berserker Rage 让他免疫恐惧类效果</b>——所以<sk>恶魔法阵</sk>是你更可靠的第二手。要提前放好。",
        "同样是恐惧，同样被免疫。",
        "死亡缠绕也是恐惧效果。"
      ],
      "k": "对手能免疫你的主要控制时，要准备第二套脱身方案。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 3,
      "s": "对上圣骑士，他的驱散能清掉你的 DoT。",
      "a": "该先上哪个 DoT？",
      "o": [
        "<sk>腐蚀术</sk>",
        "<sk>痛苦无常</sk>",
        "<sk>痛楚</sk>",
        "都一样"
      ],
      "r": 1,
      "e": [
        "腐蚀术被驱散没代价。",
        "正解。<b>先上<sk>痛苦无常</sk></b>——它被驱散会反噬并沉默。让骑士先面对这个两难，你后面铺的才有活路。",
        "痛楚同理，没有反制。",
        "顺序很重要。"
      ],
      "k": "对面有驱散时，先上带反制的那个。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士交了<sk>圣盾术</sk>。",
      "a": "你的 DoT 还生效吗？",
      "o": [
        "生效",
        "不生效——完全免疫期间 DoT 也不造成伤害",
        "伤害减半",
        "会被清掉"
      ],
      "r": 1,
      "e": [
        "完全免疫挡所有伤害。",
        "正解。<b>免疫期间 DoT 不产生伤害，但效果还在</b>——免疫结束后继续走。所以不用重新铺，等着就行。",
        "是完全不生效。",
        "不会被清除。"
      ],
      "k": "免疫让 DoT 暂停生效，但不清除它。这跟驱散不同。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 3,
      "s": "猎人用<sk>假死</sk>脱战，你的 DoT 全没了。",
      "a": "该怎么调整策略？",
      "o": [
        "继续铺他",
        "把 DoT 优先铺在跑不掉的人身上",
        "放弃 DoT",
        "只打爆发"
      ],
      "r": 1,
      "e": [
        "他会反复假死，你会一直白铺。",
        "正解。<b>你铺 DoT 的时间成本很高</b>——铺在能脱战的人身上风险太大，优先铺在跑不掉的队友身上更划算。",
        "DoT 是你的伤害来源。",
        "痛苦术士没有爆发。"
      ],
      "k": "铺垫成本高的专精，要选择不会让铺垫白费的目标。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人一直风筝你，保持距离。",
      "a": "这对你影响大吗？",
      "o": [
        "很大，你够不着他",
        "影响小，DoT 不受距离影响",
        "完全没影响",
        "只影响控制"
      ],
      "r": 1,
      "e": [
        "你的 DoT 铺上之后不需要保持距离。",
        "正解。<b>DoT 种下去就一直在走，不管他跑多远</b>——这是 DoT 专精对付风筝的天然优势。你只需要铺上那一次。",
        "施法时需要距离，所以还是有一点影响。",
        "不只影响控制。"
      ],
      "k": "DoT 不受距离影响。风筝型对手对 DoT 专精威胁较小。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "贼开了<sk>暗影斗篷</sk>。",
      "a": "为什么这对痛苦术士是双重打击？",
      "o": [
        "因为伤害高",
        "既免疫新的法术，又清掉已有的 DoT",
        "因为它隐身",
        "因为它反弹"
      ],
      "r": 1,
      "e": [
        "斗篷不造成伤害。",
        "正解。<b>你既铺不上新的，已经铺好的也被清了</b>——对一个「伤害是预订的」专精来说，这是最亏的一张对面牌。",
        "斗篷不提供隐身。",
        "不反弹。"
      ],
      "k": "免疫法术的牌对 DoT 专精是双重打击。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼贴脸开场，还有控制链。",
      "a": "这个对局最大的问题是什么？",
      "o": [
        "他伤害高",
        "你根本铺不上 DoT",
        "他血厚",
        "他跑得快"
      ],
      "r": 1,
      "e": [
        "伤害不是核心问题。",
        "正解。<b>贴脸 + 控制链 + 免疫法术，三样都克制你</b>——铺不上 DoT 就等于没有伤害。这是痛苦术士最难的对局。",
        "贼不厚。",
        "机动性不是核心。"
      ],
      "k": "认清哪个对手同时命中你的多个弱点。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "对上牧师，他能驱散你的 DoT。",
      "a": "<sk>痛苦无常</sk>在这个对局的价值是什么？",
      "o": [
        "只是伤害",
        "让驱散变成两难：驱了被沉默，不驱吃伤害",
        "能防驱散",
        "能治疗自己"
      ],
      "r": 1,
      "e": [
        "它的价值不止伤害。",
        "正解。<b>它被驱散会反噬驱散者并沉默</b>——这让牧师每次驱散都要权衡。这是你对治疗最重要的一张牌。",
        "它不阻止驱散，是惩罚驱散。",
        "不治疗。"
      ],
      "k": "带惩罚的 DoT 是对驱散职业的威慑，不只是伤害。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "对上牧师，两边都能续，局面拖得很久。",
      "a": "该比什么？",
      "o": [
        "爆发",
        "资源管理",
        "血量",
        "移动速度"
      ],
      "r": 1,
      "e": [
        "两边都没有强爆发。",
        "正解。<b>这个对局往往是持久战</b>——比的是法力、冷却和 DoT 覆盖率的管理。谁的资源先见底谁输。",
        "血量会来回波动。",
        "移动不是关键。"
      ],
      "k": "两个续航型专精对拼，比的是资源管理。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑的疫病自带减疗。",
      "a": "对你的自保有什么影响？",
      "o": [
        "没影响",
        "<sk>吸取生命</sk>效率下降，要改用护盾类自保",
        "完全不能回血",
        "影响很小"
      ],
      "r": 1,
      "e": [
        "会明显受影响。",
        "正解。<b>减疗压低你的吸血效率</b>——这个对局要更依赖<sk>黑暗契约</sk>的护盾，因为护盾不受减疗影响。",
        "不是完全不能，是效率下降。",
        "影响明显。"
      ],
      "k": "对面有减疗时，护盾类自保比治疗类可靠。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "对你的 DoT 有什么影响？",
      "o": [
        "没影响",
        "会挡掉法术伤害，你的 DoT 效率大降",
        "会清掉 DoT",
        "伤害翻倍"
      ],
      "r": 1,
      "e": [
        "DoT 是法术伤害。",
        "正解。<b>护罩吸收法术伤害，而你的伤害全是法术</b>——护罩期间你的 DoT 几乎打不出东西。等它过去。",
        "不清除，只是挡伤害。",
        "不会翻倍。"
      ],
      "k": "纯法术专精遇到抗法术的牌，效率损失最大。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满放了<sk>根基图腾</sk>，你准备恐惧他们的治疗。",
      "a": "该先做什么？",
      "o": [
        "直接恐惧",
        "先清图腾",
        "换目标",
        "等图腾过期"
      ],
      "r": 1,
      "e": [
        "恐惧会被图腾吸走。",
        "正解。<b><sk>根基图腾</sk>重定向针对队友的有害法术</b>——你的恐惧会被它吃掉。先清图腾。",
        "换目标不解决图腾。",
        "等它过期，时机就过了。"
      ],
      "k": "关键控制放之前先清掉能吸它的东西。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 2,
      "s": "萨满有净化，会清你的 DoT。",
      "a": "该怎么应对？",
      "o": [
        "放弃 DoT",
        "先上<sk>痛苦无常</sk>威慑，同时把 DoT 铺开",
        "只打一个目标",
        "换目标"
      ],
      "r": 1,
      "e": [
        "DoT 是你的伤害来源。",
        "正解。<b>两条路一起走</b>：<sk>痛苦无常</sk>让他不敢乱净化，同时把 DoT 铺在多个目标上分散他的净化压力。",
        "集中在一个目标容易被全清。",
        "换目标不解决净化。"
      ],
      "k": "对面有清除手段时，威慑 + 分散两条路一起走。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，他是爆发型你是持续型。",
      "a": "这个对局该怎么打？",
      "o": [
        "抢先手爆发",
        "熬过他的窗口，靠 DoT 慢慢磨",
        "速战速决",
        "拉开距离对射"
      ],
      "r": 1,
      "e": [
        "你没有爆发可抢。",
        "正解。<b>时间站在你这边</b>——用传送门躲过他的爆发窗口，你的 DoT 会一直在走。这是持续型对爆发型的标准打法。",
        "速战对你不利。",
        "距离不是核心，DoT 不受距离影响。"
      ],
      "k": "持续型对爆发型，核心是熬过对方的窗口。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师开了<sk>寒冰屏障</sk>。",
      "a": "你的 DoT 会怎样？",
      "o": [
        "被清掉",
        "暂停生效，屏障结束后继续",
        "伤害减半",
        "转移到别人身上"
      ],
      "r": 1,
      "e": [
        "屏障不清除 DoT。",
        "正解。<b>完全免疫期间 DoT 不产生伤害，但效果保留</b>——不用重新铺，等着就行。",
        "是完全不生效。",
        "不转移。"
      ],
      "k": "免疫暂停 DoT 生效但不清除它。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 3,
      "s": "镜像对局，两边都是痛苦术士。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁先铺满 DoT",
        "谁血厚",
        "谁碎片多"
      ],
      "r": 1,
      "e": [
        "伤害模式一样。",
        "正解。<b>DoT 的兑现需要时间，先铺满的先开始收益</b>——这个先手优势会一直累积。恐惧的先手直接决定这件事。",
        "生存能力接近。",
        "碎片的价值取决于 DoT 数量。"
      ],
      "k": "两个铺垫型专精对拼，先完成铺垫的赢。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "镜像对局，你想抢铺满的先手。",
      "a": "关键是什么？",
      "o": [
        "手速",
        "恐惧的先手——被恐惧的那个铺不了 DoT",
        "碎片多少",
        "血量"
      ],
      "r": 1,
      "e": [
        "手速不是决定性的。",
        "正解。<b>被恐惧的那个铺不了 DoT</b>——所以恐惧的先手直接转化成铺满的先手。这是镜像的核心博弈。",
        "碎片是后续的事。",
        "血量不决定铺垫速度。"
      ],
      "k": "控制的先手能转化成铺垫的先手。这是很多对局的隐藏逻辑。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 2,
      "s": "武僧开了<sk>业报之触</sk>，你的 DoT 在他身上走。",
      "a": "损失大吗？",
      "o": [
        "很大",
        "比集中爆发的专精小——DoT 的伤害是分散的",
        "没损失",
        "会被清掉"
      ],
      "r": 1,
      "e": [
        "有损失但相对可控。",
        "正解。<b>DoT 的伤害是一点一点走的</b>——被反弹的也是一点一点，比一次性砸进去的爆发型专精亏得少。当然停手更好。",
        "有损失。",
        "业报不清除 DoT。"
      ],
      "k": "分散型伤害撞上反伤，损失比集中型小。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "武僧贴上来打断你施法。",
      "a": "核心问题是什么？",
      "o": [
        "掉血",
        "你铺不上 DoT",
        "控制不够",
        "跑不掉"
      ],
      "r": 1,
      "e": [
        "掉血是症状。",
        "正解。<b>你的 DoT 和大部分技能都要施法时间</b>——被贴住打断，你就没有伤害来源。这是所有近战对局的共同问题。",
        "控制是应对手段不是问题本身。",
        "你有传送门。"
      ],
      "k": "认清被克制时损失的是什么。铺垫型专精损失的是「能不能铺」。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊用<sk>旋风</sk>把你的目标摘走。",
      "a": "DoT 会怎样？",
      "o": [
        "被清掉",
        "暂停生效，旋风结束后继续",
        "伤害翻倍",
        "转移"
      ],
      "r": 1,
      "e": [
        "<sk>旋风</sk>不清除效果。",
        "正解。<b>被旋的人不能被伤害，所以 DoT 期间不生效</b>——但效果保留，结束后继续走。",
        "不翻倍。",
        "不转移。"
      ],
      "k": "「不能被伤害」让 DoT 暂停，不等于清除。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊有驱散，还能自愈。",
      "a": "痛苦术士的优势在哪？",
      "o": [
        "爆发高",
        "减疗 + 持续伤害耗得过他的自愈",
        "机动性强",
        "控制多"
      ],
      "r": 1,
      "e": [
        "你没有爆发。",
        "正解。<b>你的持续伤害和减疗配合，能压过德鲁伊的自愈</b>——这是持久战里的优势。",
        "机动性不如他。",
        "控制多但他能解。"
      ],
      "k": "持续伤害 + 减疗的组合，对自愈型对手有结构性优势。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "对上恶魔猎手，你的传送门用得很快。",
      "a": "哪个天赋在这个对局价值最高？",
      "o": [
        "Nether Ward",
        "Impish Instincts（受物理伤害缩短传送门冷却）",
        "Gateway Mastery",
        "Soul Rip"
      ],
      "r": 1,
      "e": [
        "Nether Ward 反射法术，DH 是物理输出。",
        "正解。<b>DH 会一直贴着你打物理伤害</b>——这正好触发 Impish Instincts，让你的传送门转得更快。被打反而能更快脱身。",
        "Gateway Mastery 是团队传送门，不是自己的脱身手段。",
        "Soul Rip 是控制不是脱身。"
      ],
      "k": "有些防御天赋在被针对时反而更强。看清触发条件。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 机动性高、打断多。",
      "a": "这对痛苦术士意味着什么？",
      "o": [
        "问题不大",
        "拉不开距离又铺不上 DoT，两个弱点同时被命中",
        "只影响输出",
        "只影响生存"
      ],
      "r": 1,
      "e": [
        "问题很大。",
        "正解。<b>你需要距离和施法时间，他两样都不给</b>——这是痛苦术士很难打的对局之一。",
        "不只影响输出。",
        "不只影响生存。"
      ],
      "k": "同时命中你多个弱点的对手，是要特别准备的对局。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中拉开距离。",
      "a": "对你的 DoT 有影响吗？",
      "o": [
        "有，够不着他",
        "没有，DoT 不受距离和高度影响",
        "伤害减半",
        "会中断"
      ],
      "r": 1,
      "e": [
        "DoT 铺上之后不需要保持距离。",
        "正解。<b>你的伤害种下去就一直在走</b>——他飞得再高，DoT 照样跳。这是 DoT 专精对远程的优势。",
        "伤害不变。",
        "不中断。"
      ],
      "k": "DoT 不受距离影响。这让你对所有拉扯型对手都有底气。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "该做什么？",
      "o": [
        "用宠物的<sk>法术封锁</sk>打断",
        "继续铺 DoT",
        "拉开距离",
        "硬扛"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师的伤害大半来自蓄力技能</b>——用宠物的打断抵消一大段伤害，这在这个对局价值很高。",
        "让他放完，你的血线会很难看。",
        "拉开距离不影响他蓄力。",
        "能打断就别硬扛。"
      ],
      "k": "对蓄力型对手，宠物的打断是很值的一手。"
    }
  ]
};
