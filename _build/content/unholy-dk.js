module.exports = {
  "meta": {
    "title": "邪恶死骑 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 邪恶死亡骑士 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "邪恶死骑,死亡骑士,PVP,竞技场,魔兽世界,12.1,Midnight,unholy death knight,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">邪恶不是靠一下打死人。<br>你的活是让对面从被缠上那一刻起，就一直在掉血、一直补不满。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"爆发\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathvortex.jpg\" alt=\"爆发\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"天启\" style=\"width:20px;height:20px\" src=\"assets/icons/artifactability_unholydeathknight_deathsembrace.jpg\" alt=\"天启\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗突变\" style=\"width:20px;height:20px\" src=\"assets/icons/achievement_boss_festergutrotface.jpg\" alt=\"黑暗突变\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？这个专精的伤害有一半不在你手上</span><span class=\"sub\">疫病 + 召唤物，两样都要先铺好</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>战士的伤害全在自己身上，开了窗口就能兑现。<b>邪恶不一样</b>——疫病在对方身上走、召唤物在场上打，这两部分加起来占了你伤害的很大一块。</p><p style=\"margin-top:8px\">所以邪恶的准备动作比别的专精重：<b>病没铺满，<sk>天启</sk>引爆的是空气；宠物贴不上人，窗口就是空转</b>。反过来，一旦铺好了，你的压力是持续的，不像战士那样只有 10 秒。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">邪恶的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"天启\" style=\"width:20px;height:20px\" src=\"assets/icons/artifactability_unholydeathknight_deathsembrace.jpg\" alt=\"天启\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>天启</sk></span><span class=\"sub\">你的窗口多久来一次</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>引爆脓疮之伤并召唤次级食尸鬼，<b>这是邪恶的爆发起点</b>。</p><p style=\"margin-top:8px\">战士的窗口靠增伤撑开，邪恶的窗口靠<b>召唤物堆叠</b>撑开——所以它比战士更怕被打断节奏：宠物打不到人，窗口就是空的。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"绞袭\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_soulleech_3.jpg\" alt=\"绞袭\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"窒息\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_deathknight_asphixiate.jpg\" alt=\"窒息\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟 · 沉默与昏迷</span><span class=\"sub\">两种控制，两套递减</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>绞袭</sk>是沉默、<sk>窒息</sk>是昏迷，<b>它们走不同的递减</b>。</p><p style=\"margin-top:8px\">这意味着你可以先沉默再昏迷，不互相缩短。<b>沉默留给治疗读条，昏迷留给需要人彻底动不了的时候。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"反魔法护罩\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_antimagicshell.jpg\" alt=\"反魔法护罩\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰封之韧\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathknight_iceboundfortitude.jpg\" alt=\"冰封之韧\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">生存时钟 · 两张减伤</span><span class=\"sub\">一张抗法术，一张抗全部</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>反魔法护罩</sk>吸法术伤害，<sk>冰封之韧</sk>是全类型大减伤加免疫昏迷。</p><p style=\"margin-top:8px\"><b>对面法系多的时候，护罩几乎是免疫。</b>但它冷却比冰封短，所以护罩是常规牌、冰封是保命牌。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"亡者大军\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathknight_armyofthedead.jpg\" alt=\"亡者大军\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：天启骑手</span><span class=\"sub\">top50 里 50 人全用，没有取舍空间</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>天启骑手（Rider of the Apocalypse）</b>——top50 三对三里 50 人全用，圣血（San'layn）是 <b>0</b>。这不是「推荐」，是唯一解。</p><p style=\"margin-top:8px\">所以英雄天赋那 28 格不用逐格纠结：跟着这条线走，格子自己就定了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"绞袭\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_soulleech_3.jpg\" alt=\"绞袭\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：一格没得选，两格看阵容</span><span class=\"sub\">Necrotic Wounds 必带 · 另两格按对面换</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Necrotic Wounds（50/50）</b>——全员必带。它让你的疫病顺带完成减疗，<b>不用额外花 GCD</b>，这是邪恶比战士省手法的地方。</p><p style=\"margin-top:8px\"><b>Spellwarden（41/50）</b>抗法术、<sk>绞袭</sk>（38/50）4 秒沉默、<b>Bloodforged Armor（12/50）</b>抗物理。前两个是常态，最后一个只在对面双近战、你被当成集火目标时换上——<b>24% 对 82% 的差距说明大多数局面里法系威胁更大</b>。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">三格 50 人 = 150 个选择，上面四项占了其中 141 个。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"爆发\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathvortex.jpg\" alt=\"爆发\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"天启\" style=\"width:20px;height:20px\" src=\"assets/icons/artifactability_unholydeathknight_deathsembrace.jpg\" alt=\"天启\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"灵魂收割\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_deathknight_soulreaper.jpg\" alt=\"灵魂收割\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"爆发\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathvortex.jpg\" alt=\"爆发\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"脓疮打击\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathknight_festering_strike.jpg\" alt=\"脓疮打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 疫病：所有伤害的地基</span><span class=\"sub\">铺病同时完成减疗</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>爆发</sk>上恐惧瘟疫、<sk>脓疮打击</sk>叠脓疮之伤。<b>Necrotic Wounds 让减疗跟着疫病一起走</b>，所以铺病这一件事把伤害和减疗都准备好了。</p><p style=\"margin-top:8px\">判据很简单：<b>开爆发之前先看目标身上有没有病</b>。没有就先铺，别急着交冷却。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"天启\" style=\"width:20px;height:20px\" src=\"assets/icons/artifactability_unholydeathknight_deathsembrace.jpg\" alt=\"天启\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"黑暗突变\" style=\"width:20px;height:20px\" src=\"assets/icons/achievement_boss_festergutrotface.jpg\" alt=\"黑暗突变\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 叠还是错开：这个专精最主要的判断</span><span class=\"sub\">看对面扛不扛得住一波</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>天启</sk>和<sk>黑暗突变</sk>叠在一起 = 一波结账；错开 = 两段持续压力。</p><p style=\"margin-top:8px\"><b>对面防御池厚就错开</b>——一波打不穿的话，不如让他一直处在压力里，逼他一张一张交牌。<b>对面脆就叠</b>，不给喘息。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"绞袭\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_soulleech_3.jpg\" alt=\"绞袭\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · 沉默卡在治疗抬手那一刻</span><span class=\"sub\">不吃昏迷递减，别浪费在开场</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>绞袭</sk>沉默 4 秒，<b>不进昏迷递减</b>——这是它比<sk>窒息</sk>金贵的地方。</p><p style=\"margin-top:8px\">不要开场就交。要卡在「治疗必须把这一发读出来」的时候，那一下才真正让你的伤害落地。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"死亡之握\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathknight_strangulate.jpg\" alt=\"死亡之握\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 你抓得住人，但只有一次</span><span class=\"sub\">握留给对手真要走的那一刻</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>死骑没有脱身手段，但有抓人手段。<b>这是少数你不怕对面跑的专精</b>——前提是别把握空交了。</p><p style=\"margin-top:8px\">对手有位移时（法师闪现、DH 二段跳、德鲁伊变形），<b>等他的位移交完再握</b>，这次才拉得住。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灵魂收割\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_deathknight_soulreaper.jpg\" alt=\"灵魂收割\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 处决阶段：标记要提前打</span><span class=\"sub\">不是掉血之后才补</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>灵魂收割</sk>是标记不是即时伤害——目标在短时间内掉到低血量会再受一次伤害。</p><p style=\"margin-top:8px\"><b>要在血线掉下去之前打上</b>。等他更低了再打，那一段标记时间就浪费了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"反魔法护罩\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_shadow_antimagicshell.jpg\" alt=\"反魔法护罩\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰封之韧\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_deathknight_iceboundfortitude.jpg\" alt=\"冰封之韧\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 召唤物冷却期是你的软弱期</span><span class=\"sub\">这段时间的任务是活着</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>窗口过了、宠物冷却没转好，<b>你的输出会明显掉一截</b>。</p><p style=\"margin-top:8px\">这时候转防御不是怂，是必要动作：扛过去，等<sk>天启</sk>转好，重新铺病开下一轮。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">疫病先铺满，再谈爆发</div><div class=\"dd\">减疗和伤害都从疫病来。身上没病，<sk>天启</sk>引爆的就是空气。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">宠物打不到人 = 窗口是空的</div><div class=\"dd\">你的伤害有很大一部分在召唤物身上。目标跑了、宠物在原地，那部分直接归零。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">沉默留给读条，不留给开场</div><div class=\"dd\"><sk>绞袭</sk>不吃昏迷递减。治疗抬手那一下用，比开场交值十倍。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁有免疫牌？</b>邪恶没有撕免疫的手段，遇到只能等或换目标。但疫病在免疫期间照走——<b>先把病铺在免疫牌最少的那个人身上</b>。</p><p style=\"margin-top:8px\"><b>2 · 对面法系多还是物理多？</b>决定 PvP 天赋第三格：Spellwarden 抗法术（41/50）还是 Bloodforged Armor 抗物理（12/50）。</p><p style=\"margin-top:8px\"><b>3 · <sk>天启</sk>和<sk>黑暗突变</sk>叠还是错开？</b>对面防御池厚就错开、脆就叠。这是这局最主要的节奏判断。</p></div><div class=\"sc\"><h4>免疫牌对邪恶的分级</h4><p><b>接近全免</b>：<sk>暗影斗篷</sk>（免法术）—— 你的伤害以暗影为主，这是最难受的一张。</p><p style=\"margin-top:8px\"><b>影响小</b>：<sk>闪避</sk>（挡物理）、<sk>保护祝福</sk>（免物理）—— 暗影伤害照进，比战士舒服。</p><p style=\"margin-top:8px\"><b>完全免疫但疫病照走</b>：圣盾术、<sk>寒冰屏障</sk>、<sk>星界转移</sk> —— 人换掉，病留着。</p></div>"
  },
  "sk": {
    "业报之触": "ability_monk_touchofkarma",
    "亡者大军": "spell_deathknight_armyofthedead",
    "保护祝福": "spell_holy_sealofprotection",
    "假死": "ability_rogue_feigndeath",
    "冰封之韧": "spell_deathknight_iceboundfortitude",
    "冲锋": "ability_warrior_charge",
    "剑在人在": "ability_warrior_challange",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "圣盾术": "spell_holy_divineshield",
    "天启": "artifactability_unholydeathknight_deathsembrace",
    "天神下凡": "warrior_talent_icon_avatar",
    "寒冰屏障": "spell_frost_frost",
    "寒冰锁链": "spell_frost_chainsofice",
    "巫妖之躯": "spell_shadow_raisedead",
    "幻影步": "inv_helm_plate_raiddeathknight_p_01",
    "心灵冰冻": "spell_deathknight_mindfreeze",
    "心灵尖啸": "spell_shadow_psychicscream",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "悬空": "ability_evoker_hover",
    "旅行形态": "ability_druid_travelform",
    "星界转移": "ability_shaman_astralshift",
    "暗影斗篷": "spell_shadow_nethercloak",
    "枯萎凋零": "spell_shadow_deathanddecay",
    "树皮术": "spell_nature_stoneclawtotem",
    "死亡之握": "spell_deathknight_strangulate",
    "气定神闲": "spell_nature_enchantarmor",
    "消失": "ability_vanish",
    "消散": "spell_shadow_dispersion",
    "灵界打击": "spell_deathknight_butcher2",
    "灵魂收割": "ability_deathknight_soulreaper",
    "灵龟守护": "ability_hunter_pet_turtle",
    "爆发": "spell_deathvortex",
    "痛苦压制": "spell_holy_painsupression",
    "窒息": "ability_deathknight_asphixiate",
    "绞袭": "spell_shadow_soulleech_3",
    "脓疮打击": "spell_deathknight_festering_strike",
    "自由祝福": "spell_holy_sealofvalor",
    "致死打击": "ability_warrior_savageblow",
    "英勇飞跃": "ability_heroicleap",
    "逃脱": "ability_rogue_feint",
    "闪避": "spell_shadow_shadowward",
    "黑暗突变": "achievement_boss_festergutrotface",
    "黑曜鳞片": "inv_artifact_dragonscales"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "ap",
      "t": "<sk>天启</sk>好了",
      "d": "它引爆脓疮之伤并召唤食尸鬼。没有它，你的爆发只是普通输出"
    },
    {
      "k": "dis",
      "t": "目标身上疫病铺满了",
      "d": "脓疮之伤够层数才引爆得动。病没铺够，<sk>天启</sk>炸出来是空的"
    },
    {
      "k": "pet",
      "t": "宠物贴得上目标",
      "d": "你的伤害有很大一部分在召唤物身上。宠物够不着，窗口就是空转"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的疫病和爆发会整套打进空气"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在什么都没准备好</h3><p>疫病没铺、窗口没好。<b>邪恶不是靠一下打死人的专精</b>——先去铺病、等冷却，这时候交爆发只是把冷却喂给对面看。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，缺的这些让爆发落不了地</h3><p>条件差太多。<sk>亡者大军</sk>和<sk>天启</sk>都是明牌，牌不齐就交，对面防御池立刻推出来。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是铺压力不是杀人</h3><p>把疫病铺满、逼对面交一两张牌，然后把<sk>天启</sk>留给下一个窗口。<b>别把<sk>亡者大军</sk>跟着一起交。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮的上限：<b>缺疫病就是引爆空气，缺宠物贴脸就是伤害少一半，免疫在就是全打空</b>。开之前想好哪一项能补。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p>疫病铺满 → <sk>天启</sk>引爆并召唤 → <sk>黑暗突变</sk>强化宠物 → <sk>绞袭</sk>沉默卡在治疗抬手那一秒。<b>这一套是压着治疗打，不是压着目标打。</b></p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先数对面的免疫牌",
      "圣盾术、<sk>寒冰屏障</sk>、<sk>暗影斗篷</sk>——有一张，你的疫病和爆发都会打空。<b>邪恶没有战士那种撕免疫的手段</b>，只能等或者换目标。",
      "反魔法护罩"
    ],
    [
      "先把疫病铺开，这是所有伤害的地基",
      "<sk>爆发</sk>上恐惧瘟疫、<sk>脓疮打击</sk>叠脓疮之伤。<b>减疗（Necrotic Wounds）也是疫病带的</b>——所以铺病这一件事同时完成了减疗和伤害准备。",
      "爆发"
    ],
    [
      "<sk>天启</sk>引爆，窗口从这里开始",
      "引爆脓疮之伤并召唤次级食尸鬼。<b>脓疮层数不够就引爆，等于把窗口浪费掉</b>——先看层数，再按<sk>天启</sk>。",
      "天启"
    ],
    [
      "<sk>黑暗突变</sk>：叠一起还是错开",
      "把食尸鬼进化成畸兽。<b>这是这个专精最主要的节奏判断</b>：对面防御池厚就和<sk>天启</sk>错开、打两段持续压力；对面脆就叠在一起、一波结账。",
      "黑暗突变"
    ],
    [
      "<sk>绞袭</sk>卡在治疗抬手那一刻",
      "沉默<b>不吃昏迷递减</b>，这是它比<sk>窒息</sk>金贵的地方。不要开场交，要卡在治疗必须读出这一发的时候。",
      "绞袭"
    ],
    [
      "目标进处决区，<sk>灵魂收割</sk>收人",
      "目标血量掉到低位时会再受一次伤害。<b>它是标记不是即时伤害</b>——要在血线掉下去之前打上，不是掉下去之后。",
      "灵魂收割"
    ],
    [
      "他要跑，<sk>死亡之握</sk>抓回来",
      "把人拉到身边。<b>死骑自己没有脱身手段，但有抓人手段</b>——这是少数你不怕对面跑的专精，前提是别把握空交了。",
      "死亡之握"
    ],
    [
      "窗口过了转防御，别硬耗",
      "<sk>反魔法护罩</sk>抗法术、<sk>冰封之韧</sk>大减伤。<b>召唤物冷却期间你的输出会明显掉一截</b>，这段时间的任务是活着，不是打。",
      "冰封之韧"
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
        "diff": "拼减伤",
        "cards": [
          "剑在人在",
          "盾墙",
          "破胆怒吼"
        ],
        "one": "两个板甲对耗，看谁的减伤更省。",
        "q": [
          [
            "<sk>剑在人在</sk> —— 高招架 + 减伤",
            "你的伤害大部分是暗影，不吃招架。<b>这一点比近战物理职业打他有利</b>，但减伤部分照样吃。"
          ],
          [
            "他有<sk>冲锋</sk>和<sk>英勇飞跃</sk>",
            "战士贴得上你，你也抓得住他。这个对局距离不是问题，节奏才是。"
          ],
          [
            "<b>他的爆发是明牌</b>",
            "看到<sk>天神下凡</sk>就该交<sk>冰封之韧</sk>。他的窗口只有 10 秒，扛过去他就是软目标。"
          ],
          [
            "用疫病耗，不要拼窗口",
            "他的爆发集中在一个窗口，你的伤害是持续的。<b>错开他的窗口，在他冷却真空期压上去</b>。"
          ]
        ],
        "arena": "他的爆发是明牌，看到<sk>天神下凡</sk>就交<sk>冰封之韧</sk>。错开他的窗口，在他冷却真空期压上去。",
        "duel": "单挑时距离不是问题（两边都不跑），纯拼疫病铺得快不快、减伤省不省。"
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
            "你没有撕免疫的手段。<b>看到就停手换目标</b>，把疫病留在别人身上继续走。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "你的<sk>寒冰锁链</sk>对他效果有限。但死骑不靠减速抓人，靠<sk>死亡之握</sk>。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "你的伤害是暗影为主，<b>这一点对邪恶的影响比对战士小得多</b>——被保的目标你还能打进去一部分。"
          ],
          [
            "铺满疫病等他交牌",
            "他交<sk>圣盾术</sk>的那几秒你打不动，但疫病还在他身上走。<b>疫病是唯一不受免疫时机影响的伤害</b>。"
          ]
        ],
        "arena": "他的<sk>保护祝福</sk>会保队友，被保的目标暗影伤害还能进一部分——不用像战士那样立刻换人。",
        "duel": "单挑就是等<sk>圣盾术</sk>。免疫期间疫病照走，这几秒去铺满另一层病。"
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
        "one": "牌最多的一个：免疫、脱战、位移各一张。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间打他等于没打。<b>但你的疫病不会被驱掉</b>，等免疫结束还在走。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "<b><sk>假死</sk>会让他脱战</b>，你身上的疫病也就白铺了。这是这个对局最烦的一点。"
          ],
          [
            "<sk>死亡之握</sk>是你的答案",
            "猎人拉开距离，你就把他拉回来。<b>但握只有一个，别浪费在他还没跑的时候</b>。"
          ],
          [
            "先握后爆，不要反过来",
            "贴上去再开<sk>天启</sk>。窗口开了人跑了，召唤物追不上，伤害全断。"
          ]
        ],
        "arena": "<sk>假死</sk>会清掉你铺的疫病，这是这个对局最亏的一点。把病优先铺在他队友身上。",
        "duel": "单挑追不上猎人，<sk>死亡之握</sk>留给他交完<sk>逃脱</sk>之后。"
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
        "one": "他决定什么时候开打，你只能决定怎么接。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你的伤害以暗影为主，斗篷对你几乎是完全免疫</b>。这是邪恶最难受的一张对面牌。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他脱战，你的疫病也断了。追不上就转去打他队友。"
          ],
          [
            "<sk>闪避</sk>对你影响小",
            "高闪避挡的是物理。你的暗影伤害照样进——<b>这一点比战士打他舒服</b>。"
          ],
          [
            "保命牌留在手上",
            "贼从潜行开局，开场主动权不在你。<b>别在他现身之前就把<sk>反魔法护罩</sk>交了</b>。"
          ]
        ],
        "arena": "<sk>暗影斗篷</sk>期间转去打他队友，别硬扛——你的暗影伤害在斗篷面前接近全免。",
        "duel": "单挑时<sk>闪避</sk>对你影响小（挡物理），斗篷才是要躲的那张。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "拼减疗",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸",
          "真言术：盾"
        ],
        "one": "你的疫病天生带减疗，这个对局比想象中好打。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "都是短时间的。<b>不用抢着打穿，等它过去再压</b>——你的疫病一直在走，时间站在你这边。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧是他的主要脱身手段。<sk>巫妖之躯</sk>期间免疫恐惧，<b>这是这个对局最有价值的一张牌</b>。"
          ],
          [
            "减疗是自动的",
            "Necrotic Wounds 让疫病顺带减疗，<b>你不需要额外花 GCD 维持</b>——这一点比战士省。"
          ],
          [
            "<sk>绞袭</sk>卡他的大治疗",
            "沉默不吃昏迷递减。他读大招那一下沉默掉，这一轮就赢了。"
          ]
        ],
        "arena": "减疗是自动的，你的活是用<sk>绞袭</sk>卡他的大治疗，不是拼输出。",
        "duel": "单挑靠<sk>巫妖之躯</sk>免疫恐惧，然后持续压——牧师的自愈耗不过疫病的减疗。"
      },
      {
        "id": "deathknight",
        "n": "死亡骑士",
        "ic": "classicon_deathknight",
        "c": "#C41E3A",
        "diff": "镜像",
        "cards": [
          "反魔法护罩",
          "冰封之韧",
          "巫妖之躯"
        ],
        "one": "同行对砍，看谁的疫病先铺满。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡你的暗影",
            "<b>镜像对局里这张牌互相克制</b>——你的伤害以暗影为主，他的护罩正好挡这个。"
          ],
          [
            "两边都不跑",
            "死骑没有脱身手段，都有抓人手段。这是纯粹的对耗。"
          ],
          [
            "先铺满病的赢",
            "和战士镜像的「先手减疗」同理。<b>谁的疫病先铺满、盖得更久，谁就赢了资源战</b>。"
          ],
          [
            "别在他护罩期间开爆发",
            "看到<sk>反魔法护罩</sk>就等。三秒的耐心换一整个窗口。"
          ]
        ],
        "arena": "镜像看谁的疫病先铺满。<sk>反魔法护罩</sk>互相克制，看到他交就等三秒。",
        "duel": "单挑纯对耗，减伤用得省的赢。<sk>冰封之韧</sk>留给他的<sk>天启</sk>窗口。"
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
          "束缚射击"
        ],
        "one": "他的牌在地上：图腾决定这一轮的走向。",
        "q": [
          [
            "<sk>星界转移</sk> —— 免疫一切",
            "短暂完全免疫。<b>停手，但疫病还在走</b>——这是邪恶对免疫最不亏的地方。"
          ],
          [
            "地缚与减速",
            "萨满靠图腾拉开距离。<sk>死亡之握</sk>能直接把他拉回来。"
          ],
          [
            "先处理图腾",
            "关键图腾打掉的收益常常大于继续砍人。<b>你的<sk>枯萎凋零</sk>顺手就能清</b>。"
          ],
          [
            "卡在图腾冷却的空当",
            "他刚交完一轮图腾那段时间，是你最好的窗口。"
          ]
        ],
        "arena": "<sk>枯萎凋零</sk>顺手清关键图腾，收益常常大于继续砍人。",
        "duel": "单挑等<sk>星界转移</sk>过去，免疫期间疫病照走，不算亏。"
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
        "one": "全场最会拉开距离的职业，但你有握。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "你撕不掉，只能等。<b>期间疫病继续走，这是你唯一的安慰</b>。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "法师有一整套限制近战的手段。<b><sk>幻影步</sk>免疫减速，用它穿过去</b>。"
          ],
          [
            "<sk>反魔法护罩</sk>是关键牌",
            "法师是纯法系，护罩期间你几乎免疫他的伤害。<b>这是这个对局最爽的一张牌</b>。"
          ],
          [
            "握要留给他的位移",
            "他闪现之后你才握，不是他站着的时候。握空了这个对局就很难打。"
          ]
        ],
        "arena": "<sk>反魔法护罩</sk>要卡在他爆发那一刻——法师是纯法系，护罩期间你几乎免疫。",
        "duel": "单挑靠<sk>死亡之握</sk>抓人，握要等他闪现交完。<sk>幻影步</sk>受伤会断，别用来追。"
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
        "one": "两个 DoT 职业对耗，看谁的持续压得住。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，但<b>你的疫病自带减疗</b>——这一点正好克制他的回血。"
          ],
          [
            "恐惧与减速",
            "术士靠恐惧拉扯。<sk>巫妖之躯</sk>免疫恐惧，留给他的关键那一次。"
          ],
          [
            "他的宠物",
            "宠物提供额外控制。<b>你的<sk>枯萎凋零</sk>能顺手清掉</b>。"
          ],
          [
            "压住不给喘息",
            "术士需要时间读条叠 DoT。<b>持续贴身比爆发窗口更能限制他</b>——这正是邪恶擅长的。"
          ]
        ],
        "arena": "疫病的减疗正好克制他的自愈。持续贴身比等窗口更能限制他读条。",
        "duel": "单挑用<sk>巫妖之躯</sk>免疫恐惧，然后一直压。术士需要时间叠 DoT，别给他。"
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
            "你打出去的伤害会转回来。<b>看到就停手，包括宠物的输出</b>——这是最容易自杀的一张对面牌。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧机动性高，<sk>死亡之握</sk>要卡准。"
          ],
          [
            "业报接的就是你的爆发",
            "它通常就是为你的<sk>天启</sk>准备的。<b>把<sk>天启</sk>和<sk>黑暗突变</sk>错开，别让整套撞上去</b>。"
          ],
          [
            "先试探再全交",
            "这个对局值得先打两下看反应。试探成本远低于整套被反弹。"
          ]
        ],
        "arena": "<sk>业报之触</sk>要停两份手：自己的和宠物的。把<sk>天启</sk>和<sk>黑暗突变</sk>错开交。",
        "duel": "单挑先打两下试探，业报通常就是接你的爆发来的。试探成本远低于整套被反弹。"
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
        "one": "他不跟你打，他绕着你打。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "不是免疫，可以硬打，但性价比低。<b>等它过去，疫病期间照走</b>。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能变形跑、能潜行重置。<b><sk>死亡之握</sk>打断变形是最有价值的一次握</b>。"
          ],
          [
            "控他的形态切换",
            "<sk>窒息</sk>卡在他要变形那一刻，比卡在满血时有用。"
          ],
          [
            "疫病是你对抗风筝的武器",
            "他跑得掉你的近战，跑不掉身上的病。<b>铺满了再让他跑，也在掉血</b>。"
          ]
        ],
        "arena": "<sk>死亡之握</sk>卡在他要变形那一刻，这是德鲁伊对局里最值的一次握。",
        "duel": "单挑追不上就别追，疫病铺满让他跑着也掉血。"
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
        "one": "机动性和你不在一个层级，别比追逐。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打，只是效率下降。"
          ],
          [
            "二段跳与冲刺",
            "DH 位移多且短冷却。<b>追不上就别追，握留给他贴上来的时候</b>。"
          ],
          [
            "他的打断与沉默",
            "DH 有打断手段，但你几乎没有读条技能——<b>这一点对邪恶影响很小</b>。"
          ],
          [
            "守株待兔",
            "站在治疗身边，等他自己贴上来。他必须近身才能输出。"
          ]
        ],
        "arena": "守在治疗身边等他贴上来——他必须近身才能输出，握留给他想撤的那一刻。",
        "duel": "单挑他的打断对你影响很小（你几乎没有读条技能），放心压。"
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
        "one": "会飞的布甲，够不着的时候多。",
        "q": [
          [
            "<sk>黑曜鳞片</sk> · <sk>悬空</sk>",
            "悬空期间近战完全够不着。<b>但疫病照走，这段时间不算全亏</b>。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离。<b>你的<sk>死亡之握</sk>是少数能强行拉回来的手段</b>。"
          ],
          [
            "打断读条",
            "唤魔师有大量蓄力技能。<sk>心灵冰冻</sk>冷却短，看到蓄力就打断。"
          ],
          [
            "贴上就别松",
            "一旦脱开很难再贴。贴身期间把疫病铺满，为下一次接触做准备。"
          ]
        ],
        "arena": "<sk>悬空</sk>期间疫病照走，把<sk>死亡之握</sk>留给他落地那一刻。",
        "duel": "单挑用<sk>心灵冰冻</sk>打断蓄力，唤魔师蓄力技能多，短冷却打断价值极高。"
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
      "s": "你刚落地，<sk>天启</sk>好了，目标身上一个疫病都没有。",
      "a": "第一件该做的事是什么？",
      "o": [
        "立刻按<sk>天启</sk>抢窗口",
        "先<sk>爆发</sk>上疫病，再谈爆发",
        "开<sk>亡者大军</sk>建立压力",
        "先<sk>死亡之握</sk>把目标拉过来"
      ],
      "r": 1,
      "e": [
        "<sk>天启</sk>引爆的是脓疮之伤。<b>身上没病，引爆的就是空气</b>——这一下白交。",
        "正解。疫病是所有伤害的地基，<b>减疗（Necrotic Wounds）也是疫病顺带完成的</b>。铺病这一件事同时把伤害和减疗都准备好了。",
        "<sk>亡者大军</sk>是明牌，三分钟冷却。开场没有疫病托底就交，等于送给对面看。",
        "目标还没跑你就握，等他真要走的时候你就没手段了。"
      ],
      "k": "邪恶的第一动作永远是铺病，不是开爆发。病没铺，后面全是空转。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "疫病铺满了，<sk>天启</sk>和<sk>黑暗突变</sk>都好着。对面是个防御牌很厚的圣骑士治疗队。",
      "a": "两个大冷却怎么用？",
      "o": [
        "叠在一起，一波把人打死",
        "错开交，打两段持续压力",
        "先交<sk>黑暗突变</sk>，<sk>天启</sk>留着",
        "都不交，等对面先用牌"
      ],
      "r": 1,
      "e": [
        "对面防御池厚，一波打不穿。<b>叠一起等于把两个冷却同时喂给他的减伤</b>。",
        "正解。<b>对面防御池厚就错开</b>——一波打不穿的话，不如让他一直处在压力里，逼他一张一张交牌。",
        "顺序不是这题的关键，「叠还是错开」才是。",
        "干等会让局面变成对面主导，而且你的疫病会过期。"
      ],
      "k": "对面厚就错开、对面脆就叠。这是邪恶最主要的节奏判断。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "你的窗口开着，对面治疗开始读一个大治疗。你手上<sk>绞袭</sk>和<sk>窒息</sk>都好着。",
      "a": "用哪个？",
      "o": [
        "<sk>窒息</sk>，昏迷更久",
        "<sk>绞袭</sk>沉默掉",
        "两个一起交，确保断掉",
        "都不用，压伤害逼他交保命"
      ],
      "r": 1,
      "e": [
        "<sk>窒息</sk>是昏迷，<b>会进昏迷递减</b>——用在这里，等下队友的控制链就短了。",
        "正解。<b>沉默不吃昏迷递减</b>，这是<sk>绞袭</sk>比<sk>窒息</sk>金贵的地方。留给「治疗必须把这一发读出来」的时刻正是它的用途。",
        "两个叠一起纯浪费，断一次读条只需要一个。",
        "大治疗读完，你这一轮的伤害就被补回去了。"
      ],
      "k": "沉默不进昏迷递减。能用沉默解决的，别动硬控。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 3,
      "s": "开场决策器四条：<sk>天启</sk>好了 ✓、疫病铺满 ✓、宠物贴得上 ✓，但对面法师的<sk>寒冰屏障</sk>还在。",
      "a": "开还是不开？",
      "o": [
        "全交，三条齐了值得赌",
        "压上去铺压力逼他交牌，大冷却留着",
        "完全不动，等屏障转掉",
        "换个目标打，疫病留在法师身上"
      ],
      "r": 3,
      "e": [
        "免疫在的时候全交，整套打进空气。",
        "接近对了，但漏了邪恶特有的一点——你的疫病不受免疫时机影响，可以同时做别的事。",
        "完全不动等于把已经齐了的三条浪费掉，而且疫病会过期。",
        "正解。<b>这是邪恶对免疫最不亏的地方</b>：疫病在他身上继续走，你转去打别人，两边都没停。战士遇到免疫只能干等，邪恶不用。"
      ],
      "k": "免疫挡得住爆发，挡不住已经铺上的疫病。换目标但别撤病。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "你开了窗口，但目标一直在跑，你的宠物追在后面够不着他。",
      "a": "这说明什么？",
      "o": [
        "宠物 AI 有问题，忽略即可",
        "你的伤害正在大幅缩水，必须先把人定住",
        "应该换目标",
        "应该召回宠物重新放"
      ],
      "r": 1,
      "e": [
        "不是 AI 问题，是位置问题。",
        "正解。<b>你的伤害有很大一部分在召唤物身上</b>——目标跑了、宠物在原地，那部分伤害直接归零。<sk>死亡之握</sk>或<sk>枯萎凋零</sk>的减速要跟上。",
        "换目标解决不了「宠物够不着」这个结构问题，换个人一样跑。",
        "召回重放浪费时间，人还是在跑。"
      ],
      "k": "宠物打不到人 = 窗口是空的。邪恶的窗口要靠「把人钉住」来兑现。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 1,
      "s": "关于 Necrotic Wounds 这个 PvP 天赋。",
      "a": "它在 top50 里的使用率是多少？",
      "o": [
        "50/50，全员必带",
        "38/50，多数带",
        "41/50，接近必带",
        "12/50，看阵容"
      ],
      "r": 0,
      "e": [
        "正解。<b>50/50，没有例外</b>。它让你的疫病顺带完成减疗，不用额外花 GCD——这是邪恶比战士省手法的地方。",
        "38/50 是<sk>绞袭</sk>。",
        "41/50 是 Spellwarden。",
        "12/50 是 Bloodforged Armor。"
      ],
      "k": "邪恶的减疗不挂在单个技能上，是靠疫病铺开的。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "对面是双法系（法师 + 术士）。你的 PvP 天赋第三格在 Spellwarden 和 Bloodforged Armor 之间选。",
      "a": "选哪个？",
      "o": [
        "Bloodforged Armor，减伤更直接",
        "Spellwarden，抗法术",
        "都不选，换<sk>绞袭</sk>",
        "看自己血量决定"
      ],
      "r": 1,
      "e": [
        "Bloodforged Armor 抗的是物理。对面没有物理输出，这一格是空的。",
        "正解。<b>对面法系越多，Spellwarden 越硬</b>。邪恶穿板甲不怕物理，怕的是被法系集火秒——这一格买的是活着输出的时间。",
        "<sk>绞袭</sk>在另一格，不冲突。",
        "这一格看的是对面的伤害类型，不是你的血量。"
      ],
      "k": "抗性类天赋看对面的伤害构成，不看自己的感觉。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 3,
      "s": "你在 3v3，对面治疗被你队友控住 6 秒。你的<sk>天启</sk>还有 10 秒转好，疫病铺满了。",
      "a": "这 6 秒怎么用？",
      "o": [
        "全力输出，控制期间伤害最值钱",
        "攒着等<sk>天启</sk>好了一起",
        "去补控对面输出",
        "退出来回血准备下一轮"
      ],
      "r": 0,
      "e": [
        "正解。<b>治疗被控的时间是伤害唯一不会被补回来的窗口</b>，比你自己的爆发窗口更稀缺——而且你疫病铺满，此刻的持续伤害全部实收。",
        "等 10 秒，治疗早解控了。",
        "控制该留给关键时刻，此刻对面输出被不被控不影响你打伤害。",
        "把最好的输出窗口用来回血，等于浪费队友的控制。"
      ],
      "k": "治疗不在的时间 > 你的爆发窗口。前者稀缺，后者会转回来。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "目标血量掉到 <em>30%</em>，你的<sk>灵魂收割</sk>好着。",
      "a": "什么时候打？",
      "o": [
        "等他掉到更低再打，收益更高",
        "现在就打，它是标记不是即时收人",
        "等<sk>天启</sk>窗口一起打",
        "先补疫病再说"
      ],
      "r": 1,
      "e": [
        "<sk>灵魂收割</sk>要在血线掉下去<b>之前</b>打上，等他更低了再打，那一段标记时间就浪费了。",
        "正解。<b>它是标记不是即时伤害</b>——打上之后目标在短时间内掉到低血量会再受一次伤害。要提前打，不是事后补。",
        "等窗口会错过标记的生效时间。",
        "疫病如果已经在身上，此时补它是浪费 GCD。"
      ],
      "k": "标记类技能要在触发条件达成前打上，不是达成后。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面猎人用<sk>假死</sk>脱战了。",
      "a": "这对你意味着什么？",
      "o": [
        "没什么，等他回来",
        "你铺在他身上的疫病白铺了",
        "正好趁机打他队友",
        "应该立刻追过去"
      ],
      "r": 1,
      "e": [
        "影响不小，别忽略。",
        "正解。<b>脱战会清掉你身上铺的疫病</b>——这是邪恶对上有脱战手段的职业（猎人、贼、德鲁伊）最烦的一点，前面的铺垫全归零。",
        "打他队友是对的做法，但这题问的是「意味着什么」——先认清损失，才知道下次要不要把病铺在他身上。",
        "追一个假死的猎人是徒劳的。"
      ],
      "k": "对手能脱战 = 你的疫病随时会被清零。铺病优先铺在跑不掉的人身上。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "你和对面死骑镜像对局，两人都刚落地。",
      "a": "这一局的胜负手在哪？",
      "o": [
        "谁先开<sk>亡者大军</sk>",
        "谁的疫病先铺满、盖得更久",
        "谁的<sk>反魔法护罩</sk>用得好",
        "谁的宠物先被打掉"
      ],
      "r": 1,
      "e": [
        "<sk>亡者大军</sk>是明牌，先交的那个反而吃亏。",
        "正解。<b>和战士镜像的「先手减疗」是同一个道理</b>——两边都靠疫病吃饭，谁先铺满、谁盖得更久，谁就赢了资源战。",
        "<sk>反魔法护罩</sk>确实互相克制（双方伤害都以暗影为主），但它是应对手段不是胜负手。",
        "宠物会重新召唤，不是决定性的。"
      ],
      "k": "两个同类专精对耗，胜负在「谁先把地基打好」，不在谁的爆发大。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "对面武僧开了<sk>业报之触</sk>，你的宠物正在攻击他。",
      "a": "该做什么？",
      "o": [
        "自己停手就行，宠物无所谓",
        "自己停手，同时把宠物也撤下来",
        "继续打，反弹伤害不高",
        "交<sk>反魔法护罩</sk>硬抗反弹"
      ],
      "r": 1,
      "e": [
        "<b>宠物的输出也会被反弹</b>。只停自己不管宠物，伤害照样转回你身上。",
        "正解。这是邪恶特有的坑——<b>你的伤害有一部分不在你手上</b>，停手要停两份：自己的和召唤物的。",
        "反弹的是你打出去的伤害，你打得越狠反噬越重。",
        "护罩挡法术，但反弹是按你造成的伤害算的，硬抗不划算。"
      ],
      "k": "有宠物的专精遇到反伤，要停两份手：自己的和召唤物的。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你的血量掉到 <em>28%</em>，Blood Draw 触发了。",
      "a": "它给了你什么？",
      "o": [
        "一次性大额治疗",
        "吸血 + 一段减伤 + 灵界打击变便宜",
        "完全免疫伤害",
        "立刻回满血"
      ],
      "r": 1,
      "e": [
        "它是吸血不是大治疗，量没那么大。",
        "正解。跌破 30% 时从附近敌人吸血、<b>并在随后一段时间里降低受到的伤害</b>，同时让<sk>灵界打击</sk>消耗更低——是给你一个自救的窗口，不是直接救回来。",
        "不是免疫。",
        "不会回满，它是让你有机会自己救自己。"
      ],
      "k": "Blood Draw 是被动保命，两分钟一次。它给的是窗口，不是结果。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 3,
      "s": "你在考虑要不要点 Coldthirst（用<sk>心灵冰冻</sk>打断后回符文能量并缩短冷却）。对面是双近战 + 战士治疗。",
      "a": "点不点？",
      "o": [
        "点，打断永远有用",
        "不点，对面没有读条",
        "点，为了那点符文能量",
        "看自己习惯"
      ],
      "r": 1,
      "e": [
        "「永远有用」是错的——这一格<b>只在对面有读条时才有价值</b>。",
        "正解。对面纯近战，<sk>心灵冰冻</sk>一局也用不了几次，这一格基本是死点。<b>58% 的使用率正好反映它是看阵容的</b>。",
        "符文能量的收益也依附于「你能打断」这个前提。",
        "这一格有明确的判据（对面有没有读条），不是习惯问题。"
      ],
      "k": "依附于某个前提的天赋，先确认那个前提在这局成不成立。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "对面法师开始拉扯，用冰环把你限制住往外跑。你手上<sk>幻影步</sk>好着。",
      "a": "用它吗？",
      "o": [
        "用，它免疫减速能追上去",
        "不用，留着保命",
        "先<sk>死亡之握</sk>把他拉回来",
        "原地等控制结束"
      ],
      "r": 2,
      "e": [
        "<sk>幻影步</sk>能免疫减速，但<b>受到伤害会中断</b>——你追过去的路上挨一发就断了。",
        "留着不用，人就跑没了。",
        "正解。<b>邪恶抓人的第一手段是<sk>死亡之握</sk>，不是自己跑过去</b>。把人拉到身边，比你追过去可靠得多——而且宠物也能跟着打到。",
        "干等距离越拉越大。"
      ],
      "k": "邪恶不追人，邪恶把人拉回来。位移是备选，握才是主手段。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "关于英雄天赋，天启骑手（Rider of the Apocalypse）与圣血（San'layn）。",
      "a": "实测分布是什么？",
      "o": [
        "50/0，天启骑手唯一解",
        "29/21，接近对半",
        "42/8，一边倒但另一条也有人走",
        "两条都有人走，看打法"
      ],
      "r": 0,
      "e": [
        "正解。<b>top50 里 50 人全走天启骑手，圣血 0 人</b>。这不是「更好」，是「只有这一条」——遇到英雄天赋的格子不用纠结。",
        "29/21 是武器战士的分布。",
        "42/8 是戒律牧的分布。",
        "这个专精没有分歧，只有一条线。"
      ],
      "k": "英雄天赋 50/0 的时候，那不是推荐，是唯一解。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "你的窗口打完了，宠物冷却还没转好，对面两个人压在你身上。",
      "a": "该做什么？",
      "o": [
        "继续输出，持续伤害还在",
        "开<sk>反魔法护罩</sk>或<sk>冰封之韧</sk>，撑过这一段",
        "交<sk>死亡之握</sk>拉一个人",
        "转火打治疗"
      ],
      "r": 1,
      "e": [
        "召唤物冷却期间你的输出会明显掉一截，硬耗撑不住。",
        "正解。<b>这段时间的任务是活着，不是打</b>。扛过去等<sk>天启</sk>转好，重新铺病开下一轮。",
        "握是抓人的，不解决你正在挨打这件事。",
        "没有窗口的时候打治疗，只会让你更久地站在对面输出里。"
      ],
      "k": "召唤物冷却期 = 邪恶的软弱期。这段时间转防御是必要动作，不是怂。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "你的队友喊「我控住治疗了，快打」。你的疫病还有 3 秒过期，<sk>天启</sk>还有 15 秒。",
      "a": "怎么做？",
      "o": [
        "立刻全力输出，不管疫病",
        "先补一次疫病续上，再全力输出",
        "等<sk>天启</sk>好了一起",
        "先<sk>绞袭</sk>沉默治疗"
      ],
      "r": 1,
      "e": [
        "疫病一断，你的持续伤害和减疗同时消失——控制窗口里的输出会大打折扣。",
        "正解。<b>疫病是持续伤害也是减疗，两样都断在同一刻</b>。花一个 GCD 续上，剩下的时间才是实收。",
        "等 15 秒，治疗早解控了。",
        "治疗已经被控住了，再沉默是浪费。"
      ],
      "k": "控制窗口开始时先检查疫病还剩几秒。断了的话，第一件事是续。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 3,
      "s": "对面潜行者交了<sk>暗影斗篷</sk>。",
      "a": "为什么这张牌对邪恶特别难受？",
      "o": [
        "它免疫物理，你的伤害是物理",
        "它免疫法术，而你的伤害以暗影为主",
        "它让贼消失，你找不到人",
        "它反弹你的伤害"
      ],
      "r": 1,
      "e": [
        "<sk>暗影斗篷</sk>免疫的是法术不是物理。",
        "正解。<b>你的伤害以暗影（法术）为主，斗篷对你几乎是完全免疫</b>——这是邪恶最难受的一张对面牌。反过来，贼的<sk>闪避</sk>对你影响就小，因为那挡的是物理。",
        "<sk>暗影斗篷</sk>不提供隐身。",
        "反弹是武僧的<sk>业报之触</sk>。"
      ],
      "k": "先看清对面的免疫挡哪种伤害，再决定停不停手。邪恶怕挡法术的，不怕挡物理的。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "你点了 Grip of the Dead（<sk>枯萎凋零</sk>范围内敌人大幅减速）。对面是双近战站桩型阵容。",
      "a": "这一格发挥得怎么样？",
      "o": [
        "很好，减速永远有用",
        "一般，对面本来就不跑",
        "很好，能防止他们换位",
        "不好，应该换成输出天赋"
      ],
      "r": 1,
      "e": [
        "「永远有用」忽略了前提——减速的价值取决于对面想不想跑。",
        "正解。<b>它是给拉扯型对手准备的</b>（法师、德鲁伊、DH）。对面站桩硬打，这一点几乎不动。34/50 的使用率说明它是看阵容的。",
        "换位不是这个天赋主要解决的问题。",
        "「不好」的判断对，但结论太绝对——它不是废，是这局不对症。"
      ],
      "k": "控场类天赋的价值 = 对面有多想离开你。对面不跑，它就是死点。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "你要开爆发了，手上<sk>天启</sk>、<sk>黑暗突变</sk>、<sk>亡者大军</sk>都好着。对面是脆皮阵容，没什么防御牌。",
      "a": "怎么交？",
      "o": [
        "三个错开，打三段压力",
        "三个叠一起，一波带走",
        "先<sk>亡者大军</sk>试探反应",
        "只交<sk>天启</sk>，留另外两个"
      ],
      "r": 1,
      "e": [
        "对面脆的时候错开，等于给他们时间恢复。",
        "正解。<b>对面脆就叠</b>——一波结账，不给他们喘息和交牌的机会。这跟对面厚时错开是同一个判断的两面。",
        "<sk>亡者大军</sk>是明牌，拿来试探太贵了。",
        "对面脆的时候保守，是把能赢的局面拖成僵持。"
      ],
      "k": "叠还是错开，看对面扛不扛得住一波。不是固定打法。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "局面僵持了两分钟，你的<sk>亡者大军</sk>刚转好，疫病断了，对面所有防御牌都在。",
      "a": "现在该怎么办？",
      "o": [
        "开<sk>亡者大军</sk>打破僵局",
        "先把疫病铺回去，等条件齐了再说",
        "换个目标试试",
        "逼队友先开控制链"
      ],
      "r": 1,
      "e": [
        "<sk>亡者大军</sk>是明牌，疫病都断了就交，等于把三分钟冷却送给对面看。",
        "正解。<b>僵持局面里谁先浪费冷却谁输</b>。铺病是无条件该做的、成本最低的动作，做完再看条件够不够。",
        "换目标不解决问题——你缺的是疫病和条件，不是目标选错。",
        "控制要配合伤害窗口。你窗口没准备好，控住了也没伤害接。"
      ],
      "k": "僵持局的赢法是「别先浪费」。先做成本最低的准备动作。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你被对面控制链锁了很久，解控之后发现目标身上的疫病全过期了。",
      "a": "解控后第一件事做什么？",
      "o": [
        "立刻开<sk>天启</sk>找回节奏",
        "重新铺疫病",
        "交<sk>亡者大军</sk>扳回劣势",
        "先撤出来回血"
      ],
      "r": 1,
      "e": [
        "疫病没了，<sk>天启</sk>引爆的是空气。",
        "正解。<b>回到地基上</b>。邪恶被断节奏之后没有捷径，只能重新铺病——急着交爆发只会让冷却也一起浪费掉。",
        "劣势时交明牌，对面正好接。",
        "如果血量安全，撤出来是浪费时间；如果不安全，那是另一个判断，但也不解决疫病问题。"
      ],
      "k": "节奏被打断之后，回到第一步，不要跳步。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "对面唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "邪恶怎么应对？",
      "o": [
        "等他落地，什么都做不了",
        "疫病继续走，同时用<sk>死亡之握</sk>准备他落地那一刻",
        "立刻换目标彻底放弃他",
        "用远程技能打他"
      ],
      "r": 1,
      "e": [
        "「什么都做不了」不对——你的疫病还在他身上走。",
        "正解。<b>悬空期间近战够不着，但疫病照走</b>，这段时间不算全亏。同时<sk>死亡之握</sk>是少数能强行把人拉回来的手段，留给他落地那一刻。",
        "疫病已经在他身上了，彻底放弃等于浪费前面的铺垫。",
        "邪恶没有能打到空中目标的有效远程手段。"
      ],
      "k": "够不着的时候，先看已经铺出去的东西还在不在起作用。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到 top50 里 5 个分歧格的使用率分别是 70%、68%、62%、58%、38%，没有一个是压倒性的。前五名玩家里有人只对上 2 格。",
      "a": "这说明什么？",
      "o": [
        "top50 的配点很随意，参考价值低",
        "这 5 格是真的看局面，没有标准答案",
        "应该跟着使用率最高的那个配",
        "数据样本不够大"
      ],
      "r": 1,
      "e": [
        "能进 top50 的配点不会随意，分散恰恰说明这些格子有真实的取舍。",
        "正解。<b>对比其他专精——敏锐贼能找到 7/7 全中的、戒律牧 16/16——邪恶的分散度明显更高</b>。这说明这 5 格是真的看阵容和打法，不是有个标准答案而别人没抄对。",
        "照抄最高使用率，等于放弃这 5 格本来要你做的判断。",
        "50 人的样本和其他专精一样，不是样本问题。"
      ],
      "k": "使用率分散不代表数据没用——它在告诉你「这里本来就该你自己判断」。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "对面战士交了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "对你的伤害影响有多大？",
      "o": [
        "很大，招架会挡掉你大部分输出",
        "招架部分影响不大，减伤部分照吃",
        "完全打不动",
        "只影响宠物的伤害"
      ],
      "r": 1,
      "e": [
        "招架挡的是物理攻击，<b>你的伤害以暗影为主，不吃招架</b>。",
        "正解。这一点比近战物理职业打他有利——<b>招架那部分对你影响小，但减伤部分照样吃</b>。所以能打，只是效率下降。",
        "不是免疫，只是减伤。",
        "减伤对你和宠物的伤害都生效。"
      ],
      "k": "看清对面的防御牌挡的是「攻击方式」还是「伤害数值」。招架挡不住法术伤害。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "对面战士开了<sk>天神下凡</sk>压上来。",
      "a": "该做什么？",
      "o": [
        "对拼爆发，比谁伤害高",
        "交<sk>冰封之韧</sk>扛过他的窗口",
        "立刻拉开距离",
        "用<sk>死亡之握</sk>打断他"
      ],
      "r": 1,
      "e": [
        "他的窗口是集中爆发，你的伤害是持续的——<b>正面对撞是拿你的短处比他的长处</b>。",
        "正解。<b>他的窗口只有 10 秒</b>，扛过去他就是全场最脆的近战，那时候才是你压上去的时机。",
        "死骑没有脱身手段，拉不开。",
        "<sk>死亡之握</sk>是拉人的，打断不了他的爆发。"
      ],
      "k": "对爆发型对手，扛过窗口比对拼更划算——他的冷却比你的长。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士交了<sk>圣盾术</sk>，你的疫病正在他身上走。",
      "a": "该做什么？",
      "o": [
        "停手换目标，但不用撤疫病",
        "立刻撤掉疫病省资源",
        "继续打，疫病能穿透免疫",
        "用<sk>绞袭</sk>沉默他"
      ],
      "r": 0,
      "e": [
        "正解。<b>停手换目标是对的，但疫病留着</b>——它在免疫结束后还在走，这是邪恶对上免疫最不亏的地方。",
        "疫病没有「撤掉省资源」这回事，留着只有好处。",
        "免疫期间伤害进不去，包括疫病造成的伤害。",
        "免疫期间沉默也进不去。"
      ],
      "k": "遇到免疫：人换掉，病留着。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给他队友上了<sk>保护祝福</sk>（免疫物理），那正是你打的目标。",
      "a": "对邪恶的影响有多大？",
      "o": [
        "完全打不动，必须立刻换目标",
        "影响比对战士小，暗影伤害还能进去一部分",
        "完全没影响",
        "只有宠物打不动"
      ],
      "r": 1,
      "e": [
        "「完全打不动」是纯物理职业的处境，不是你的。",
        "正解。<b>你的伤害以暗影为主，物理免疫对邪恶的影响比对战士小得多</b>——还能打进去一部分。当然效率下降，是否换目标要看具体情况。",
        "有影响，你的物理部分和宠物的爪击都被挡。",
        "不只宠物，你自己的物理伤害部分也被挡。"
      ],
      "k": "同一张对面牌，对不同伤害类型的专精价值完全不同。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 3,
      "s": "你把疫病铺满在猎人身上，正准备开爆发，他用了<sk>假死</sk>。",
      "a": "发生了什么？",
      "o": [
        "他短暂无敌，等几秒继续",
        "他脱战了，你铺的疫病全没了",
        "他只是装死，疫病还在",
        "疫病会跟着他重新激活"
      ],
      "r": 1,
      "e": [
        "<sk>假死</sk>不只是无敌，关键是脱战。",
        "正解。<b>脱战会清掉你身上铺的疫病</b>，前面的铺垫全部归零。这是邪恶对上猎人最烦的一点——你的地基能被一个技能拆掉。",
        "脱战之后疫病不保留。",
        "不会自动重新激活，要重新铺。"
      ],
      "k": "对手有脱战手段时，你的疫病随时可能清零。这决定了要不要把资源压在他身上。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人开始拉开距离，你的<sk>死亡之握</sk>好着。",
      "a": "什么时候用？",
      "o": [
        "立刻用，别让他跑远",
        "等他真的位移之后再用",
        "开场就用，先建立压迫",
        "留着不用，靠减速跟上"
      ],
      "r": 1,
      "e": [
        "他还没用位移，你握过去他一个<sk>逃脱</sk>就又开了——握就白交了。",
        "正解。<b>握只有一个，要留给他真的要走的那一刻</b>。他的位移交完，你再把人拉回来，这一次才拉得住。",
        "开场用握，等于把唯一的抓人手段浪费在他还不想跑的时候。",
        "邪恶的减速追不上猎人的机动性，光靠减速跟不上。"
      ],
      "k": "唯一的抓人手段要留给对手真正逃跑的那一次，不是提前用。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "贼开了<sk>暗影斗篷</sk>，你的窗口还剩 5 秒。",
      "a": "怎么办？",
      "o": [
        "继续打，物理部分还能进",
        "转去打他队友",
        "用宠物打，宠物伤害是物理",
        "控住他等斗篷过去"
      ],
      "r": 1,
      "e": [
        "<b>斗篷免疫法术，而你的伤害以暗影为主</b>——能进去的物理部分很少，继续打约等于白打。",
        "正解。窗口还在燃烧，转去打别人。<b>这是邪恶最难受的一张对面牌</b>，硬扛只会浪费整个窗口。",
        "宠物的爪击虽有物理成分，但主要伤害仍是暗影，一样被挡大部分。",
        "斗篷期间控制也进不去。"
      ],
      "k": "免疫法术的牌对邪恶接近全免。遇到它必须换目标，不能硬打。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>闪避</sk>（大幅提升躲闪）。",
      "a": "这张牌对邪恶影响大吗？",
      "o": [
        "很大，你的伤害会大部分被闪掉",
        "影响小，闪避挡的是物理",
        "完全没影响",
        "只影响宠物"
      ],
      "r": 1,
      "e": [
        "那是纯物理职业（比如战士）的处境。",
        "正解。<b>闪避挡的是物理，你的暗影伤害照样进</b>——这一点比战士打贼舒服得多。同一个贼的两张牌（斗篷和闪避），对邪恶一张接近全免、一张几乎无感。",
        "有一点影响（物理部分和宠物爪击），但很小。",
        "不只宠物，但整体影响都不大。"
      ],
      "k": "对面同一个职业的不同防御牌，对你的威胁可能天差地别。逐张看，别一概而论。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "对上牧师治疗，你在考虑怎么压他的治疗量。",
      "a": "邪恶的减疗怎么来？",
      "o": [
        "靠某个特定技能，要专门花 GCD 维持",
        "靠疫病顺带完成，不用额外操作",
        "没有减疗，靠爆发压过去",
        "靠<sk>绞袭</sk>沉默"
      ],
      "r": 1,
      "e": [
        "那是战士的模式（<sk>致死打击</sk>专门带减疗）。",
        "正解。<b>Necrotic Wounds 让疫病顺带完成减疗</b>，50/50 全员必带——所以你铺病这一个动作同时完成了伤害和减疗，比战士省手法。",
        "邪恶有减疗，而且很强。",
        "<sk>绞袭</sk>是沉默不是减疗。"
      ],
      "k": "邪恶的减疗和伤害是同一个动作的两个产物。这是它节奏上的优势。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师对你放<sk>心灵尖啸</sk>（范围恐惧），你的<sk>巫妖之躯</sk>好着。",
      "a": "用它吗？",
      "o": [
        "用，<sk>巫妖之躯</sk>期间免疫恐惧",
        "不用，留着回血",
        "用<sk>反魔法护罩</sk>挡",
        "跑出范围"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>巫妖之躯</sk>期间免疫魅惑、恐惧和昏迷</b>——这是这个对局最有价值的一张牌。恐惧是牧师的主要脱身手段，免疫掉就等于拆了他的招。",
        "<sk>巫妖之躯</sk>确实能配合凋零缠绕自我治疗，但此刻免疫恐惧的价值更高。",
        "<sk>反魔法护罩</sk>挡法术伤害，不免疫恐惧的控制效果。",
        "范围瞬发，跑不出去。"
      ],
      "k": "有专门克制某类控制的牌，就用它，别用通用手段硬顶。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑镜像对局，对面开了<sk>反魔法护罩</sk>。",
      "a": "为什么这在镜像里特别关键？",
      "o": [
        "因为它能反弹伤害",
        "因为双方伤害都以暗影为主，护罩正好互相克制",
        "因为它回符文能量",
        "因为它能解控"
      ],
      "r": 1,
      "e": [
        "<sk>反魔法护罩</sk>是吸收不是反弹。",
        "正解。<b>镜像对局里这张牌互相克制</b>——两边的伤害都以暗影（法术）为主，谁的护罩用在对方窗口上，谁就赚。看到它就等，三秒的耐心换一整个窗口。",
        "回符文能量是附带效果，不是关键。",
        "护罩不解已有的控制。"
      ],
      "k": "镜像对局要想清楚：哪张牌恰好克制你自己的伤害类型。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑镜像，两边都不跑，纯对耗。",
      "a": "你该盯的是什么？",
      "o": [
        "谁的血量先见底",
        "谁的疫病先铺满、盖得更久",
        "谁先交<sk>亡者大军</sk>",
        "谁的宠物更多"
      ],
      "r": 1,
      "e": [
        "血量是结果不是原因。",
        "正解。<b>两边都靠疫病吃饭</b>，谁先铺满、盖得更久，谁的持续伤害和减疗就一直在生效。这跟战士镜像的「先手减疗」是同一个道理。",
        "<sk>亡者大军</sk>是明牌，先交的吃亏。",
        "宠物数量会随冷却波动，不是稳定优势。"
      ],
      "k": "同类对耗，胜负在地基铺得快不快，不在爆发大不大。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满放下一组图腾，包括治疗图腾。你的<sk>枯萎凋零</sk>好着。",
      "a": "该做什么？",
      "o": [
        "无视图腾直接打人",
        "用<sk>枯萎凋零</sk>顺手清掉关键图腾",
        "控住萨满不让他再放",
        "换目标打萨满"
      ],
      "r": 1,
      "e": [
        "治疗图腾不管，你后面打的伤害都在被抵消。",
        "正解。<b>他的牌在地上</b>——关键图腾打掉的收益常常大于继续砍人，而且<sk>枯萎凋零</sk>是范围伤害，顺手就清了，不额外花动作。",
        "控住他不解决已经落地的这一组图腾。",
        "换目标不解决图腾问题。"
      ],
      "k": "对手把资源放在地上时，先清地面。尤其当你本来就有范围技能。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "该怎么做？",
      "o": [
        "停手，但疫病留着继续走",
        "继续打，减伤不是免疫",
        "交爆发压过去",
        "控住他"
      ],
      "r": 0,
      "e": [
        "正解。<sk>星界转移</sk>是<b>短暂的完全免疫</b>，停手是对的；但<b>疫病留在他身上，免疫结束后继续走</b>——这是邪恶对免疫最不亏的地方。",
        "它是免疫不是减伤。",
        "往免疫里砸爆发是最亏的操作。",
        "免疫期间控制也进不去。"
      ],
      "k": "停手不等于撤退。疫病留着，免疫过去就接着起效。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，你在考虑什么时候开<sk>反魔法护罩</sk>。",
      "a": "为什么这张牌在这个对局特别值？",
      "o": [
        "因为它能吸收物理伤害",
        "因为法师是纯法系，护罩期间你几乎免疫他的伤害",
        "因为它能解冰环",
        "因为它回符文能量"
      ],
      "r": 1,
      "e": [
        "护罩吸收的是法术伤害。",
        "正解。<b>法师是纯法系输出，护罩期间你几乎免疫他的全部伤害</b>——这是这个对局最爽的一张牌。要卡在他开爆发那一刻，不是随手交。",
        "护罩不解定身和减速。",
        "回符文能量是附带的。"
      ],
      "k": "防御牌要对着对面的伤害类型用。对纯法系阵容，抗法术的牌价值翻倍。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师用了冰环限制你，然后闪现拉开。你的<sk>死亡之握</sk>好着。",
      "a": "什么时候握？",
      "o": [
        "立刻握，别让他跑远",
        "等他闪现之后再握",
        "先用<sk>幻影步</sk>追上去",
        "留着握，等他血低了再用"
      ],
      "r": 1,
      "e": [
        "他闪现还没用，你现在握过去他一个闪现又开了。",
        "正解。<b>握要留给他的位移交完之后</b>。法师的闪现是短冷却但不是无限的——他用掉之后你再拉回来，这次他跑不掉。",
        "<sk>幻影步</sk>受到伤害会中断，追法师的路上必然挨打。",
        "等血低了再握，中间这段时间他一直在自由输出。"
      ],
      "k": "抓人手段要用在对手的位移交完之后，不是之前。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士靠吸血一直把血线拉回去。",
      "a": "邪恶怎么压？",
      "o": [
        "提高爆发打得比他回得快",
        "靠疫病的减疗压住他的自愈",
        "控住他不让他读条",
        "打他的宠物"
      ],
      "r": 1,
      "e": [
        "单纯拼输出很难赢过持续自愈。",
        "正解。<b>你的疫病自带减疗（Necrotic Wounds）</b>，铺满了就一直在压他的回血——这正好克制术士的自愈模式，而且不用额外花动作。",
        "控制有递减，撑不满全场。",
        "打宠物省点麻烦，但不解决自愈问题。"
      ],
      "k": "减疗压的不只是治疗的奶量，也包括对手自己的回血。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "两个 DoT 职业对耗，术士需要时间读条叠 DoT。",
      "a": "邪恶该怎么打这个对局？",
      "o": [
        "也拉开距离，比谁的 DoT 强",
        "持续贴身压住，不给他喘息",
        "等自己爆发窗口再上",
        "优先打他宠物"
      ],
      "r": 1,
      "e": [
        "拉开距离你的近战输出和宠物都够不着，是拿短处比。",
        "正解。<b>术士需要时间读条和叠 DoT，持续贴身比爆发窗口更能限制他</b>——而持续压制正是邪恶擅长的。",
        "等窗口就是给他自由读条的时间。",
        "宠物是次要目标。"
      ],
      "k": "对需要时间准备的对手，持续压制比等窗口更有效。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "武僧开了<sk>业报之触</sk>，你的宠物和你都在打他。",
      "a": "该怎么停？",
      "o": [
        "自己停手就够了",
        "自己停手，同时撤下宠物",
        "继续打，反弹量不大",
        "交减伤硬抗"
      ],
      "r": 1,
      "e": [
        "<b>宠物的输出也会被反弹</b>，只停自己等于漏了一半。",
        "正解。这是邪恶特有的陷阱——<b>你的伤害有一部分不在你手上</b>。遇到反伤要停两份：自己的和召唤物的。",
        "你打得越狠反噬越重，这是全场最容易自杀的一张对面牌。",
        "反弹按你造成的伤害算，硬抗不划算。"
      ],
      "k": "有召唤物的专精遇到反伤，停手要停两份。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 3,
      "s": "你想在武僧身上开爆发，又怕撞<sk>业报之触</sk>。",
      "a": "怎么安排？",
      "o": [
        "整套一起交，赌他没牌",
        "把<sk>天启</sk>和<sk>黑暗突变</sk>错开，先试探反应",
        "完全不开爆发，只用疫病磨",
        "等他先交业报再全交"
      ],
      "r": 1,
      "e": [
        "整套撞上反伤是这个对局最容易自杀的打法。",
        "正解。<b>错开两个大冷却，先打两下看反应</b>——试探的成本远低于整套被反弹。这也是「对面厚就错开」那条判断在具体对局里的应用。",
        "完全不开过于保守，武僧扛不住你全部的持续伤害。",
        "干等不输出，主动权就交出去了。"
      ],
      "k": "怕被反弹时，错峰和试探是同一套应对的两半。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊要切<sk>旅行形态</sk>跑掉，你的<sk>死亡之握</sk>好着。",
      "a": "什么时候用？",
      "o": [
        "他变形之前握，打断节奏",
        "等他变完形跑远了再握",
        "不用握，用减速跟",
        "开局就握住"
      ],
      "r": 0,
      "e": [
        "正解。<b>握卡在他要变形那一刻最有价值</b>——把人拉回来，他的逃跑计划直接作废。这是德鲁伊对局里最值的一次握。",
        "变完形他已经跑开，握的距离可能都不够。",
        "德鲁伊的机动性靠减速拦不住。",
        "开局他还不想跑，握了浪费。"
      ],
      "k": "抓人手段的最佳时机是对手准备脱离的那一秒。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊一直绕着你跑，你追不上他。",
      "a": "邪恶怎么办？",
      "o": [
        "放弃他，换目标",
        "疫病铺满让他跑着也掉血",
        "靠<sk>幻影步</sk>追",
        "等队友控住他"
      ],
      "r": 1,
      "e": [
        "换目标可以，但先想想你已有的手段。",
        "正解。<b>他跑得掉你的近战，跑不掉身上的病</b>——疫病是邪恶对抗风筝型对手的武器。铺满了再让他跑，他也在持续掉血。",
        "<sk>幻影步</sk>受伤会中断，追德鲁伊不现实。",
        "等队友是被动的，你自己有手段。"
      ],
      "k": "追不上的时候，看看你有没有「不需要贴身也在生效」的伤害。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "恶魔猎手用二段跳和冲刺不断拉开，你的<sk>死亡之握</sk>好着。",
      "a": "怎么用？",
      "o": [
        "立刻握，拉回来打",
        "留着，等他主动贴上来时再用",
        "追上去打",
        "换目标"
      ],
      "r": 1,
      "e": [
        "DH 位移多且短冷却，你握回来他马上又能走——握的性价比很低。",
        "正解。<b>DH 必须近身才能输出</b>，所以他一定会自己贴上来。站在治疗身边等，握留给他贴上来之后想撤的那一刻。",
        "追不上，位移不在一个层级。",
        "换目标可以考虑，但没解决「被机动性拖着走」这个问题。"
      ],
      "k": "对必须近身的对手，守株待兔比追更有效——他会自己来。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 1,
      "s": "DH 有打断和沉默手段。",
      "a": "这对邪恶死骑影响大吗？",
      "o": [
        "很大，你的核心技能都要读条",
        "影响很小，邪恶几乎没有读条技能",
        "只影响宠物召唤",
        "会让你完全无法输出"
      ],
      "r": 1,
      "e": [
        "邪恶的技能基本都是瞬发。",
        "正解。<b>你几乎没有读条技能，这一点对邪恶影响很小</b>——同样的打断手段，对法师、术士的威胁远大于对你。",
        "宠物召唤也不是长读条。",
        "不会无法输出。"
      ],
      "k": "对手的打断值多少，取决于你有多少东西要读条。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师蓄一个大招，你的<sk>心灵冰冻</sk>好着。",
      "a": "打不打断？",
      "o": [
        "打，唤魔师蓄力技能多，打断价值极高",
        "不打，留着打断治疗",
        "打，同时开爆发",
        "先贴上去再说"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能</b>，<sk>心灵冰冻</sk>冷却短，看到蓄力就打断——打断一次等于抵消一大段伤害。",
        "<sk>心灵冰冻</sk>冷却短，不需要为了攒而放过眼前的蓄力。",
        "开爆发跟打断这次蓄力不冲突也不相关。",
        "贴上去的过程中蓄力就放完了。"
      ],
      "k": "对蓄力型对手，短冷却打断该用就用，不用攒。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>脱离，你在地面够不着。",
      "a": "这段时间最该做什么？",
      "o": [
        "原地等他落地",
        "确认疫病还在走，同时准备好<sk>死亡之握</sk>接他落地",
        "换目标彻底放弃",
        "用宠物打空中目标"
      ],
      "r": 1,
      "e": [
        "干等浪费时间。",
        "正解。<b>悬空期间近战够不着，但疫病照走</b>——先确认这部分还在生效，同时把握留给他落地那一刻。<sk>死亡之握</sk>是少数能强行拉回来的手段。",
        "疫病已经铺上了，彻底放弃等于浪费前面的铺垫。",
        "宠物也够不着空中目标。"
      ],
      "k": "够不着的时候，先确认已经铺出去的东西还在起作用，再准备接他回来。"
    }
  ]
};
