module.exports = {
  "meta": {
    "title": "武器战士 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 武器战士 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "武器战士,战士,PVP,竞技场,魔兽世界,12.1,Midnight,arms warrior,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\"><sk>致死打击</sk>自带 <b>50% 减疗</b>，top50 里 49 人再叠一层<sk>打磨利刃</sk>。<br>这个专精在队里的活，是让对面的治疗算不过账。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"巨人打击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_warbreaker.jpg\" alt=\"巨人打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"致死打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_savageblow.jpg\" alt=\"致死打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"天神下凡\" style=\"width:20px;height:20px\" src=\"assets/icons/warrior_talent_icon_avatar.jpg\" alt=\"天神下凡\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？你的爆发是明牌，只有 10 秒</span><span class=\"sub\">窗口外的一切都是为窗口做准备</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>巨人打击</sk>给你 35% 增伤、持续 10 秒。<b>这 10 秒是你一局里唯一真正能打死人的时间</b>，其余时间都在为它做准备：补减疗、拆牌、卡位置。</p><p style=\"margin-top:8px\">而且<b>战士的爆发是明牌</b>——对面看见你交<sk>天神下凡</sk>就会把防御池全推出来。牌不齐的时候开，等于把冷却送给对面看。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">武器战士的节奏全挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"巨人打击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_warbreaker.jpg\" alt=\"巨人打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>巨人打击</sk></span><span class=\"sub\">你的窗口多久来一次</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>35% 增伤、持续 10 秒。<b>窗口从按下的那一刻开始计时</b>，后面每个公共冷却都得落在里面。</p><p style=\"margin-top:8px\">所以顺序永远是：增伤先开，伤害后跟。反过来打，这一轮少三分之一。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"致死打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_savageblow.jpg\" alt=\"致死打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"打磨利刃\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_warrior_sharpenblade.jpg\" alt=\"打磨利刃\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">减疗时钟 · 10 秒</span><span class=\"sub\">断一次，对面就补回一整轮</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>致死打击</sk>压 50% 减疗、持续 10 秒。<b>这是你所有伤害的前提，不是伤害本身。</b></p><p style=\"margin-top:8px\"><sk>打磨利刃</sk>让<sk>巨人打击</sk>之后的第一次<sk>致死打击</sk>再压一层——<b>这一格买的不是「有没有减疗」，是「减疗能不能一直盖着」</b>。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴之锤\" style=\"width:20px;height:20px\" src=\"assets/icons/warrior_talent_icon_stormbolt.jpg\" alt=\"风暴之锤\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"震荡波\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_shockwave.jpg\" alt=\"震荡波\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟 · 卡在伤害落地那一刻</span><span class=\"sub\">不要开场就交</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>风暴之锤</sk>昏迷、<sk>震荡波</sk>范围击晕，<b>两个都吃昏迷递减</b>。</p><p style=\"margin-top:8px\">控制要卡在<b>治疗准备抬手的那一秒</b>，不是卡在你刚进场的时候。开场交掉，等于把窗口里最关键的一手提前浪费。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"天神下凡\" style=\"width:20px;height:20px\" src=\"assets/icons/warrior_talent_icon_avatar.jpg\" alt=\"天神下凡\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：Slayer 与 Colossus</span><span class=\"sub\">58 比 42 —— 站上唯一没有共识的一格</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Slayer（29/50 · 58%）vs Colossus（21/50 · 42%）</b>。</p><p style=\"margin-top:8px\">另外四个已上线专精的英雄天赋都是一边倒（敏锐贼 50/0、狂徒贼 50/0、冰法 50/0、戒律牧 42/8），<b>武器战士是唯一一个 top50 内部也没共识的</b>。这意味着数据不给你答案——选择依据是你的打法节奏和常遇到的阵容。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"打磨利刃\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_warrior_sharpenblade.jpg\" alt=\"打磨利刃\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"缴械\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_disarm.jpg\" alt=\"缴械\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：三格四个候选</span><span class=\"sub\">打磨利刃 98% 必带 · 另两格看阵容</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>打磨利刃</sk>（49/50）—— 98%，最接近必带。它把减疗接成一整段，对面治疗没有喘息的空档。</p><p style=\"margin-top:8px\"><sk>捍卫</sk>（34/50）给队友减伤、<sk>缴械</sk>（31/50）对面伤害来自武器时才值、<b>Berserker Roar</b>（29/50）免疫恐惧。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">四项占全部选择的 95%。50 人 × 3 格 = 150，实测总和正好 150。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"冲锋\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_charge.jpg\" alt=\"冲锋\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"致死打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_savageblow.jpg\" alt=\"致死打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"巨人打击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_warbreaker.jpg\" alt=\"巨人打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"致死打击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_savageblow.jpg\" alt=\"致死打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 先种减疗，再谈伤害</span><span class=\"sub\">它是前提不是伤害</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>致死打击</sk>的 50% 减疗持续 10 秒。<b>断了的那几秒，对面治疗能把你这一轮全奶回来。</b></p><p style=\"margin-top:8px\">判据：减疗随时该种，增伤才需要攒。把两者混成一件事，开场就废了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"巨人打击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_warbreaker.jpg\" alt=\"巨人打击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"打磨利刃\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_warrior_sharpenblade.jpg\" alt=\"打磨利刃\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 窗口顺序：增伤 → 最重的那一下</span><span class=\"sub\">顺序错了少三分之一</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>巨人打击</sk>开窗口，紧接着的第一次<sk>致死打击</sk>吃<sk>打磨利刃</sk>加成——<b>这是全局单次伤害最高的一击</b>。</p><p style=\"margin-top:8px\"><b>别拿它去打副目标。</b>这一下必须落在主目标身上。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"碎裂投掷\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_shatteringthrow.jpg\" alt=\"碎裂投掷\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · 免疫牌：撕还是等</span><span class=\"sub\">3 分钟冷却，一局一次机会</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>圣盾术、<sk>寒冰屏障</sk>、<sk>暗影斗篷</sk>——有一张，你就得决定是留<sk>缴械</sk>等它，还是靠<sk>碎裂投掷</sk>撕掉。</p><p style=\"margin-top:8px\"><b>撕要撕「已经交出来的那张」</b>，不是他手上还没用的那张。开场主动撕，他等下还有第二张。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风暴之锤\" style=\"width:20px;height:20px\" src=\"assets/icons/warrior_talent_icon_stormbolt.jpg\" alt=\"风暴之锤\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"震荡波\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_shockwave.jpg\" alt=\"震荡波\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 控制卡在治疗抬手那一刻</span><span class=\"sub\">不是开场交的</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>两个控制都吃昏迷递减，叠在同一个目标上第二个只剩一半时长。</p><p style=\"margin-top:8px\"><b>看到治疗抬手再交</b>，那时候控住等于直接把这一轮的伤害兑现。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"斩杀\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_sword_48.jpg\" alt=\"斩杀\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 处决阶段比你以为的早</span><span class=\"sub\">点了 Massacre 就是 35%</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>Massacre 把斩杀线从 20% 提到 <b>35%</b>。这多出来的 15% 血量是武器战士收人的主战场。</p><p style=\"margin-top:8px\">进了处决区的核心不是「打得多快」，是<b>减疗别断</b>——断了他就被奶出去了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"剑在人在\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_challange.jpg\" alt=\"剑在人在\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"防御姿态\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_warrior_defensivestance.jpg\" alt=\"防御姿态\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 窗口过了就转防御</span><span class=\"sub\">你会变成全场最脆的近战</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>冷却全空的战士没有增伤没有减疗，硬耗就是白给。</p><p style=\"margin-top:8px\"><sk>剑在人在</sk> 30% 减伤、<sk>防御姿态</sk> 15%。<b>扛过这一波，等下一个<sk>巨人打击</sk>。</b></p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">先种减疗，再谈伤害</div><div class=\"dd\"><sk>致死打击</sk>的 50% 减疗是所有输出的前提。断了就等于白打。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">增伤永远先于伤害</div><div class=\"dd\"><sk>巨人打击</sk>开在前面，后面每一下都吃加成。顺序错了少三分之一。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">牌不齐就别交明牌</div><div class=\"dd\"><sk>天神下凡</sk>一交，对面防御池全推出来。四条件齐了才是你等的那一刻。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁有免疫牌？</b>决定<sk>碎裂投掷</sk>留给谁。3 分钟冷却，一局大概只有一次机会用对。</p><p style=\"margin-top:8px\"><b>2 · 对面伤害来自武器还是法术？</b>决定 PvP 天赋第三格：<sk>缴械</sk>（31/50）对物理阵容有用，对法系几乎是空的。</p><p style=\"margin-top:8px\"><b>3 · 走 Slayer 还是 Colossus？</b>58 比 42，没有正确答案——按你的打法节奏定。</p></div><div class=\"sc\"><h4>四条件缺哪条，这轮就打什么</h4><p><b>缺增伤</b> = 数字不够，但打出去的还是真伤害。</p><p style=\"margin-top:8px\"><b>缺减疗</b> = 拖时间，伤害会被补回来。</p><p style=\"margin-top:8px\"><b>缺贴脸</b> = 打不满，能贴多久打多久。</p><p style=\"margin-top:8px\"><b>免疫还在</b> = <b>完全无效</b>。这一轮唯一能拿到的成果是逼他交牌。</p></div>"
  },
  "sk": {
    "致死打击": "ability_warrior_savageblow",
    "巨人打击": "inv_warbreaker",
    "压制": "ability_meleedamage",
    "斩杀": "inv_sword_48",
    "猛击": "ability_warrior_decisivestrike",
    "旋风斩": "ability_whirlwind",
    "剑刃风暴": "ability_warrior_bladestorm",
    "灭战者": "inv_warbreaker",
    "横扫攻击": "ability_rogue_slicedice",
    "剑在人在": "ability_warrior_challange",
    "防御姿态": "ability_warrior_defensivestance",
    "集结呐喊": "ability_warrior_rallyingcry",
    "无视苦痛": "ability_warrior_renewedvigor",
    "法术反射": "ability_warrior_shieldreflection",
    "风暴之锤": "warrior_talent_icon_stormbolt",
    "震荡波": "ability_warrior_shockwave",
    "破胆怒吼": "ability_golemthunderclap",
    "拳击": "inv_gauntlets_04",
    "冲锋": "ability_warrior_charge",
    "英勇飞跃": "ability_heroicleap",
    "援护": "ability_warrior_victoryrush",
    "断筋": "ability_shockwave",
    "乘胜追击": "ability_warrior_devastate",
    "狂暴之怒": "spell_nature_ancestralguardian",
    "天神下凡": "warrior_talent_icon_avatar",
    "雷霆一击": "spell_nature_thunderclap",
    "刺耳怒吼": "spell_shadow_deathscream",
    "缴械": "ability_warrior_disarm",
    "打磨利刃": "spell_warrior_sharpenblade",
    "捍卫": "ability_warrior_safeguard",
    "崩摧": "inv_ability_colossuswarrior_demolish",
    "雷鸣之吼": "ability_warrior_dragonroar",
    "勇士之矛": "inv_ability_warrior_championsspear",
    "业报之触": "ability_monk_touchofkarma",
    "保护祝福": "spell_holy_sealofprotection",
    "假死": "ability_rogue_feigndeath",
    "冰封之韧": "spell_deathknight_iceboundfortitude",
    "冰霜之环": "spell_frost_ring-of-frost",
    "冰风暴": "ability_deathknight_chillstreak",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "变形术": "spell_nature_polymorph",
    "圣盾术": "spell_holy_divineshield",
    "寒冰屏障": "spell_frost_frost",
    "寒冰护体": "spell_ice_lament",
    "心灵尖啸": "spell_shadow_psychicscream",
    "恐惧": "spell_shadow_possession",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "悬空": "ability_evoker_hover",
    "旅行形态": "ability_druid_travelform",
    "星界转移": "ability_shaman_astralshift",
    "暗影斗篷": "spell_shadow_nethercloak",
    "束缚射击": "spell_shaman_bindelemental",
    "树皮术": "spell_nature_stoneclawtotem",
    "气定神闲": "spell_nature_enchantarmor",
    "消失": "ability_vanish",
    "消散": "spell_shadow_dispersion",
    "灵龟守护": "ability_hunter_pet_turtle",
    "烟雾弹": "ability_rogue_smoke",
    "猎豹守护": "ability_mount_jungletiger",
    "玄牛下凡": "spell_monk_brewmaster_spec",
    "疾影": "ability_demonhunter_blur",
    "痛苦压制": "spell_holy_painsupression",
    "盾墙": "ability_warrior_shieldwall",
    "真言术：盾": "spell_holy_powerwordshield",
    "自由祝福": "spell_holy_sealofvalor",
    "虚空行走": "spell_warlock_demonsoul",
    "逃脱": "ability_rogue_feint",
    "镜像": "spell_magic_lesserinvisibilty",
    "闪避": "spell_shadow_shadowward",
    "黑曜鳞片": "inv_artifact_dragonscales"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "cs",
      "t": "<sk>巨人打击</sk>好了",
      "d": "它给你对目标 35% 增伤、持续 10 秒。没有它，你只是在打普通伤害"
    },
    {
      "k": "mw",
      "t": "减疗盖得住",
      "d": "<sk>致死打击</sk>压 50% 减疗 10 秒。减疗断了的那几秒，对面治疗能把你这一轮全奶回来"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的爆发会整套打进空气"
    },
    {
      "k": "reach",
      "t": "你贴得上他",
      "d": "<sk>冲锋</sk>或<sk>英勇飞跃</sk>至少有一个，且没被定住。战士打不出伤害的第一原因永远是够不着"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在只是在走空</h3><p>没有 <sk>巨人打击</sk> 的增伤、没有减疗盖着，这一轮打出去的数字对面治疗一口就补回来。<b>先去补减疗、等冷却。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在只是在走空</h3><p>条件差太多。<b>战士的爆发是明牌</b>——对面看见你交<sk>天神下凡</sk>就会把防御池全推出来。牌不齐的时候开，等于把冷却送给对面看。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是逼牌不是杀人</h3><p>压上去打两轮，逼对面交一张减伤或者一次位移，然后把 <sk>巨人打击</sk> 留给下一个窗口。<b>别把<sk>天神下凡</sk>跟着一起交。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>压力够了。缺的那一条决定这轮的上限：<b>缺减疗就是拖时间，缺贴脸就是打不满，缺增伤就是数字不够</b>。开之前想好哪一项能补。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>致死打击</sk>上减疗 → <sk>巨人打击</sk>开窗口 → <sk>打磨利刃</sk>吃掉那次强化的<sk>致死打击</sk> → 控制链卡在伤害落地那一刻。<b>10 秒的增伤窗口，别浪费任何一个公共冷却。</b></p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先数对面的免疫牌",
      "圣盾术、<sk>寒冰屏障</sk>、<sk>暗影斗篷</sk>——有一张，你就得决定<b>是留<sk>缴械</sk>等它，还是靠<sk>碎裂投掷</sk>把它撕掉</b>。<sk>碎裂投掷</sk> 3 分钟冷却，一局用错一次就没了。",
      "缴械"
    ],
    [
      "贴上去，先把减疗种上",
      "<sk>致死打击</sk>的 50% 减疗持续 10 秒。<b>这是你所有伤害的前提，不是伤害本身</b>——先种它，再谈爆发。",
      "致死打击"
    ],
    [
      "<sk>巨人打击</sk>开窗口",
      "35% 增伤、10 秒。<b>窗口从这一刻开始计时</b>，后面每个公共冷却都得落在里面。",
      "巨人打击"
    ],
    [
      "接住<sk>打磨利刃</sk>那一次<sk>致死打击</sk>",
      "巨人打击之后的第一次<sk>致死打击</sk>额外 +15% 伤害，并再压一层减疗。<b>这一下是全局单次伤害最高的一击</b>，别拿它去打副目标。",
      "打磨利刃"
    ],
    [
      "控制链卡在伤害落地那一刻",
      "<sk>风暴之锤</sk> 4 秒昏迷、<sk>震荡波</sk> 2 秒。<b>不要开场就交</b>——控制要卡在治疗准备抬手的那一秒，不是卡在你刚进场的时候。",
      "风暴之锤"
    ],
    [
      "目标进 35%，处决阶段开始",
      "点了 Massacre 的话，斩杀线从 20% 提到 <b>35%</b>。这多出来的 15% 血量是武器战士收人的主战场。",
      "斩杀"
    ],
    [
      "他要跑，先断腿再追",
      "<sk>断筋</sk>、<sk>雷霆一击</sk>（点了 Crackling Thunder 范围 +50%）。<b>战士追不上人不是速度问题，是没提前减速。</b>",
      "雷霆一击"
    ],
    [
      "没杀掉就转防御，别硬耗",
      "<sk>剑在人在</sk> 30% 减伤 8 秒、<sk>防御姿态</sk> 15% 减伤。<b>窗口过了你就是全场最脆的近战</b>——扛过这一波，等下一个巨人打击。",
      "剑在人在"
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
        "diff": "镜像",
        "cards": [
          "剑在人在",
          "盾墙",
          "破胆怒吼"
        ],
        "one": "同行对砍，先手减疗和先手打断决定一切。",
        "q": [
          [
            "<sk>剑在人在</sk> · <sk>盾墙</sk>（防护）",
            "<sk>剑在人在</sk>是 8 秒的高招架 + 减伤。<b>对面交了就别硬打</b>——武器的爆发窗口只有 10 秒，撞进去等于白交。"
          ],
          [
            "基本够得着",
            "战士没有真正的脱身手段，<sk>破胆怒吼</sk>是恐惧不是位移。<b>这是少数你不用担心距离的对局。</b>"
          ],
          [
            "先手减疗",
            "双方都有 50% 减疗。<b>谁先种上、谁盖得更久，谁就赢了资源战</b>——这个对局的胜负多半在这里，不在爆发。"
          ],
          [
            "压节奏而不是抢爆发",
            "两边窗口撞在一起时是纯拼数值。<b>错开一个窗口去打他的空窗期</b>，比正面对撞划算。"
          ]
        ],
        "arena": "镜像看谁先种上减疗、谁盖得更久。两边窗口撞一起是纯拼数值，错开打他的空窗期更划算。",
        "duel": "单挑时距离不是问题（他也没有真正的脱身手段），先手减疗决定一切。"
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
            "<sk>圣盾术</sk> —— 全场最硬的一张",
            "完全免疫。<b>这是<sk>碎裂投掷</sk>唯一该留给的目标</b>——3 分钟冷却换掉他的免疫，是这个对局最大的一笔交易。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "骑士不跑，但会用<sk>自由祝福</sk>挣脱控制。<b>你的<sk>断筋</sk>对他效果有限。</b>"
          ],
          [
            "<sk>保护祝福</sk>给队友",
            "他能把队友从你手里保出去（免疫物理）。<b>被保的目标你完全打不动</b>——立刻切目标，别站在那里空挥。"
          ],
          [
            "留着<sk>碎裂投掷</sk>",
            "开场别急着交。<b>等他把圣盾术交出来之前，你的伤害都是在逼牌</b>；真正的击杀窗口在免疫被撕之后。"
          ]
        ],
        "arena": "<sk>碎裂投掷</sk>留给<sk>圣盾术</sk>——这是这个对局最大的一笔交易。他给队友<sk>保护祝福</sk>时立刻切目标。",
        "duel": "单挑就是等他交<sk>圣盾术</sk>，撕掉之后那一段真空期才是你的杀窗。"
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
            "免疫期间你打他等于没打。<b>看到就停手换目标</b>，别把窗口耗在这几秒。"
          ],
          [
            "<sk>逃脱</sk> + <sk>猎豹守护</sk> + <sk>假死</sk>",
            "一个后跳、一个加速、一个脱战。<b>这是全场最难黏住的目标之一</b>——你的减速必须提前上，追出去再想就晚了。"
          ],
          [
            "先减速再谈伤害",
            "<sk>断筋</sk>与<sk>雷霆一击</sk>的减速是你唯一能限制他的东西。<b>贴上的第一件事不是打，是种减速。</b>"
          ],
          [
            "靠控制而不是靠追",
            "追猎人是徒劳的。<b><sk>风暴之锤</sk>和<sk>震荡波</sk>要卡在他准备位移的那一刻</b>，不是卡在他满血站桩的时候。"
          ]
        ],
        "arena": "贴上的第一件事是种减速，不是打。追出去再想就晚了。",
        "duel": "单挑追猎人是徒劳的，控制要卡在他准备位移那一刻，不是他满血站桩的时候。"
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
            "<sk>暗影斗篷</sk> · <sk>消失</sk> · <sk>闪避</sk>",
            "三张不同性质的牌：免法术、脱战、高闪避。<b><sk>闪避</sk>期间你的物理伤害几乎全丢</b>——这是最容易白打的一段。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他随时能重置这一轮。<b>你追不上一个交了<sk>消失</sk>的贼</b>，不如立刻转去打他队友。"
          ],
          [
            "<sk>烟雾弹</sk>里的治疗",
            "烟雾里你无法指向外面的目标。<b>看到烟就往外挪</b>，别站在里面挥空。"
          ],
          [
            "开场主动权不在你",
            "贼从潜行开局。<b>你能做的是提前站好位、把<sk>法术反射</sk>和<sk>剑在人在</sk>留在手上</b>，别在他开场前就交掉。"
          ]
        ],
        "arena": "开场主动权不在你。提前站好位，把<sk>法术反射</sk>和<sk>剑在人在</sk>留在手上。",
        "duel": "单挑时<sk>闪避</sk>期间你的物理伤害几乎全丢——那段时间别硬打，等它过去。"
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
        "one": "典型的减疗对象：他的活是补，你的活是让补没用。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "一张给队友的大减伤，一张自保。<b>都是短时间的</b>——不用抢着打穿，等它过去再压。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧是他的主要脱身手段。<b>Berserker Shout 能免疫恐惧</b>——这是战士对牧师最有价值的一张牌。"
          ],
          [
            "减疗必须一直盖着",
            "牧师的治疗量足以抵消你窗口外的全部伤害。<b><sk>致死打击</sk>断一次，他就能补回一整轮。</b>"
          ],
          [
            "打断优先于伤害",
            "<sk>拳击</sk>不进递减，可以反复用。<b>看到他抬手就打断</b>，把硬控留给他必须交大的时候。"
          ]
        ],
        "arena": "<sk>拳击</sk>不进递减可以反复用，看到抬手就打断，硬控留给他必须交大的时候。",
        "duel": "单挑靠 Berserker Roar 免疫<sk>心灵尖啸</sk>——这是战士对牧师最有价值的一张牌。"
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
          "冰风暴"
        ],
        "one": "双方都是站着打的板甲，看谁的减伤更省。",
        "q": [
          [
            "<sk>冰封之韧</sk> · <sk>反魔法护罩</sk>",
            "一张大减伤 + 一张免法术。<b>你是物理伤害，所以反魔法护罩对你无效</b>——这一点比对法系对手有利。"
          ],
          [
            "他不跑，他抓你",
            "死骑有拉人手段，没有脱身手段。<b>这是另一个不用担心距离的对局。</b>"
          ],
          [
            "他的减速与定身",
            "<sk>冰风暴</sk>类效果会限制你的走位。<b>Berserker Shout 免疫定身</b>，留给关键那一次。"
          ],
          [
            "比拼减伤效率",
            "两边都能站着扛。<b><sk>防御姿态</sk>常开的价值在这个对局最明显</b>——省下来的那 15% 会决定谁先倒。"
          ]
        ],
        "arena": "他的<sk>反魔法护罩</sk>对你无效（你是物理），这一点比对法系对手有利。",
        "duel": "单挑纯站桩对耗，<sk>防御姿态</sk>常开省下来的那 15% 会决定谁先倒。"
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
            "短暂的完全免疫。<b>它一开你就该停手</b>，硬打是纯浪费窗口。"
          ],
          [
            "地缚与减速",
            "萨满靠图腾和减速拉开距离。<b>图腾是可以打掉的</b>——这是很多人忘记的事。"
          ],
          [
            "先处理图腾",
            "关键图腾（治疗、地缚）打掉的收益常常大于继续砍人。<b>你的范围技能顺手就能清。</b>"
          ],
          [
            "卡在图腾冷却的空当",
            "图腾有冷却。<b>他刚交完一轮图腾的那段时间，是你最好的窗口。</b>"
          ]
        ],
        "arena": "关键图腾打掉的收益常常大于继续砍人，你的范围技能顺手就能清。",
        "duel": "单挑卡在他图腾冷却的空当压上去，<sk>星界转移</sk>期间停手别浪费窗口。"
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
        "one": "全场最会拉开距离的职业。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "免疫一切并解除控制。<b><sk>碎裂投掷</sk>的第二个理想目标</b>；撕不掉的话，等它自己结束再开窗口。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "法师有一整套限制近战的手段。<b>你有多少位移都不够用</b>——所以每一次<sk>冲锋</sk>都要用在刀刃上。"
          ],
          [
            "打断和反射",
            "<sk>拳击</sk>打断施法，<sk>法术反射</sk>能把关键法术弹回去。<b>反射对法师是这个对局最爽的一张牌。</b>"
          ],
          [
            "不要追，要卡",
            "追法师追不上。<b>预判他要去哪，用<sk>英勇飞跃</sk>提前落点</b>，比在后面跟着跑有效得多。"
          ]
        ],
        "arena": "<sk>法术反射</sk>对法师是最爽的一张牌——不只拦住，还把伤害还回去。",
        "duel": "单挑不要追，要卡：预判他要去哪，用<sk>英勇飞跃</sk>提前落点。"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "拼血线",
        "cards": [
          "虚空行走",
          "恐惧"
        ],
        "one": "他用血换伤害，你要打得比他自愈快。",
        "q": [
          [
            "吸血与护盾",
            "术士的自愈能力强。<b>减疗对他同样有效</b>——<sk>致死打击</sk>压着，他的吸血就补不回来。"
          ],
          [
            "恐惧与减速",
            "术士靠恐惧和减速拉扯。<b>Berserker Shout 免疫恐惧，是这个对局的关键牌。</b>"
          ],
          [
            "他的宠物",
            "宠物提供额外控制。<b>顺手打掉或控住，能省下你不少麻烦。</b>"
          ],
          [
            "压住不给喘息",
            "术士需要时间读条和叠 DoT。<b>持续贴身比爆发窗口更能限制他。</b>"
          ]
        ],
        "arena": "减疗对他的吸血同样有效。<sk>致死打击</sk>压着，他补不回来。",
        "duel": "单挑用 Berserker Roar 免疫恐惧，然后持续贴身不给他读条时间。"
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
            "你打出去的伤害会转回你身上。<b>看到它就必须停手</b>——这是全场最容易自杀的一张对面牌。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧的机动性很高。<b>控制要卡准，交空一次就得等很久。</b>"
          ],
          [
            "业报之触的时机",
            "<b>它通常就是接你的爆发来的。</b>把<sk>天神下凡</sk>和<sk>巨人打击</sk>错开一点，别让整套撞在它上面。"
          ],
          [
            "先试探再全交",
            "这个对局值得先打两下看反应。<b>试探的成本远低于整套爆发被反弹。</b>"
          ]
        ],
        "arena": "<sk>业报之触</sk>通常就是接你的爆发来的。把<sk>天神下凡</sk>和<sk>巨人打击</sk>错开一点交。",
        "duel": "单挑先打两下试探再全交，试探成本远低于整套被反弹。"
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
            "不是免疫，是减伤。<b>可以硬打，但性价比低</b>——等它过去更划算。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能变形跑掉、能潜行重置。<b>他决定什么时候打，这一点和贼很像。</b>"
          ],
          [
            "控制他的形态切换",
            "<b>硬控能打断他的节奏</b>。<sk>风暴之锤</sk>卡在他要变形的那一刻，比卡在满血时有用。"
          ],
          [
            "减速比追击有效",
            "<sk>断筋</sk>和<sk>雷霆一击</sk>提前上。<b>德鲁伊不怕你追，怕你让他跑不动。</b>"
          ]
        ],
        "arena": "<sk>树皮术</sk>是减伤不是免疫，可以硬打但别喂大冷却，等它过去。",
        "duel": "单挑控他的形态切换——<sk>风暴之锤</sk>卡在他要变形那一刻比卡在满血时有用。"
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
            "一个变身增强 + 一个减伤。<b>都不是免疫</b>——可以打，只是效率下降。"
          ],
          [
            "二段跳与冲刺",
            "DH 的位移多且短冷却。<b>拉开距离对他几乎没有成本。</b>"
          ],
          [
            "他的打断与沉默",
            "DH 有打断手段。<b>但你几乎没有读条技能</b>，这一点对武器战士影响很小。"
          ],
          [
            "守株待兔",
            "追不上就别追。<b>站在治疗身边，等他自己贴上来</b>——他必须近身才能输出。"
          ]
        ],
        "arena": "追不上就别追。站在治疗身边等他自己贴上来，他必须近身才能输出。",
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
            "减伤 + 脱离。<b><sk>悬空</sk>期间近战完全够不着</b>，等它落地。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离，也能把你推开。<b>你的位移填不上这个差距。</b>"
          ],
          [
            "打断读条",
            "唤魔师有大量蓄力技能。<b><sk>拳击</sk>在这个对局的价值极高</b>——打断一次蓄力等于抵消一大段伤害。"
          ],
          [
            "贴上就别松",
            "一旦脱开就很难再贴上。<b>贴身期间把减疗和减速都种满</b>，为下一次接触做准备。"
          ]
        ],
        "arena": "<sk>悬空</sk>期间近战完全够不着，等它落地，这段时间去处理别的目标。",
        "duel": "单挑靠<sk>拳击</sk>打断蓄力——唤魔师蓄力技能多，打断一次抵消一大段伤害。"
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
      "s": "你刚落地，<sk>冲锋</sk>好了，<sk>巨人打击</sk>还有 12 秒。对面是个满状态的德鲁伊治疗，他队友是个法师。",
      "a": "第一件该做的事是什么？",
      "o": [
        "冲上去先把<sk>致死打击</sk>的减疗种在治疗身上",
        "等<sk>巨人打击</sk>转好再一起进场",
        "先<sk>碎裂投掷</sk>把法师的<sk>寒冰屏障</sk>撕掉",
        "开<sk>天神下凡</sk>压上去建立压力"
      ],
      "r": 0,
      "e": [
        "正解。减疗是所有伤害的<b>前提</b>，不是伤害本身——它要先在身上转着，等窗口开的时候才有意义。",
        "干等 12 秒等于把开场白送。减疗和增伤不是一回事，前者随时该种，后者才需要攒。",
        "<sk>碎裂投掷</sk>三分钟冷却，开场没人交免疫的时候撕，等于撕了个空气。",
        "<sk>天神下凡</sk>是明牌，单开没有增伤和减疗托底，对面看一眼就把防御池推出来。"
      ],
      "k": "减疗随时种，增伤才需要等。把两者混成一件事，开场就废了。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 1,
      "s": "<sk>巨人打击</sk>刚按下去，窗口开始计时。你手上<sk>致死打击</sk>也好了。",
      "a": "这一次<sk>致死打击</sk>该打给谁？",
      "o": [
        "打给副目标，顺手铺开减疗",
        "打给主目标",
        "谁血少打给谁",
        "先不打，留着等控制链落地"
      ],
      "r": 1,
      "e": [
        "<sk>打磨利刃</sk>会让<sk>巨人打击</sk>之后的第一次<sk>致死打击</sk>额外增伤——这是全局单次伤害最高的一击，喂给副目标是纯浪费。",
        "正解。这一下吃到<sk>打磨利刃</sk>的加成，是你整局伤害最高的一击，必须落在主目标身上。",
        "血量不是判据。这一击的价值来自它吃到的加成，跟谁血少无关。",
        "窗口只有 10 秒，攒着不打就是让窗口空转。控制要卡的是治疗抬手那一刻，不是攒伤害。"
      ],
      "k": "<sk>巨人打击</sk>之后的第一次<sk>致死打击</sk>是全局最重的一下，只喂主目标。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "你的窗口开了 4 秒，伤害打得很顺。对面治疗刚开始抬手读一个大治疗。你手上<sk>风暴之锤</sk>和<sk>震荡波</sk>都在。",
      "a": "控制该怎么用？",
      "o": [
        "立刻两个一起交，确保打断",
        "用<sk>风暴之锤</sk>打断这一次读条",
        "留着不用，等他交爆发治疗冷却再说",
        "<sk>震荡波</sk>打断，<sk>风暴之锤</sk>留着"
      ],
      "r": 1,
      "e": [
        "两个控制叠在同一个目标上会吃递减，第二个只剩一半时长，纯浪费。",
        "正解。控制要卡在<b>伤害落地那一刻</b>——治疗抬手就是那一刻。4 秒昏迷足够你把窗口剩下的伤害打完。",
        "窗口正在燃烧。等他交大冷却时你的窗口已经过了，那时候控住也没伤害接。",
        "<sk>震荡波</sk>只有 2 秒，打断一次读条够，但接不住后续伤害；<sk>风暴之锤</sk>的 4 秒才盖得住窗口尾巴。"
      ],
      "k": "控制不是开场交的，是卡在治疗准备救人的那一秒。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "目标掉到 <em>33%</em>，你点了 Massacre。<sk>巨人打击</sk>还有 20 秒转好，减疗还剩 3 秒。",
      "a": "现在怎么打？",
      "o": [
        "等<sk>巨人打击</sk>好了再进处决阶段",
        "立刻压<sk>斩杀</sk>，同时补一次<sk>致死打击</sk>续减疗",
        "先退开回血，等下一个窗口",
        "全力输出，不管减疗断没断"
      ],
      "r": 1,
      "e": [
        "Massacre 把斩杀线提到 35% 就是为了让你<b>不等窗口也能收人</b>。等 20 秒他早被奶满了。",
        "正解。33% 已经进处决区，<sk>斩杀</sk>本身就是高伤害；同时减疗只剩 3 秒，必须续上，否则这一轮全被奶回来。",
        "目标已经在斩杀线内，退开等于把到嘴的人放走，他回满你要重打一遍。",
        "减疗一断，对面治疗一口就补回来——你打的数字再高也是白打。"
      ],
      "k": "处决阶段的核心不是「打得多快」，是「减疗别断」。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 3,
      "s": "开场决策器四条：<sk>巨人打击</sk>好了 ✓、减疗盖得住 ✓、你贴得上 ✓，但对面圣骑士的<sk>圣盾术</sk>还在。",
      "a": "开还是不开？",
      "o": [
        "全交，三条齐了值得赌",
        "压上去打两轮逼他交<sk>圣盾术</sk>，但<sk>天神下凡</sk>留着",
        "不开，等<sk>圣盾术</sk>转掉",
        "<sk>碎裂投掷</sk>撕掉<sk>圣盾术</sk>再全交"
      ],
      "r": 1,
      "e": [
        "缺的这一条恰恰是最致命的——<sk>圣盾术</sk>是完全免疫，你的爆发会整套打进空气。",
        "正解。三条齐但缺免疫这一项，这轮的定位是<b>逼牌不是杀人</b>。压上去逼他交牌，把大冷却留给免疫消失后的下一个窗口。",
        "完全不动等于把已经齐了的三条也浪费掉。<sk>巨人打击</sk>会自己转好，压力却不会自己产生。",
        "<sk>碎裂投掷</sk>三分钟冷却，该留给他<b>被打到不得不交</b>的那次<sk>圣盾术</sk>。开场主动撕，他等下还有第二张牌。"
      ],
      "k": "缺哪一条，决定这一轮的目标是什么。缺免疫 → 这轮只逼牌。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "你窗口打完了，目标还剩 <em>45%</em> 血，没杀掉。你现在站在对面两个人中间，冷却全空。",
      "a": "接下来做什么？",
      "o": [
        "继续硬耗输出，血线压着总有机会",
        "开<sk>剑在人在</sk>或进<sk>防御姿态</sk>，撤出来等下一个窗口",
        "交<sk>破胆怒吼</sk>把他们冲散",
        "转火打治疗"
      ],
      "r": 1,
      "e": [
        "冷却全空的战士是<b>全场最脆的近战</b>——没有增伤没有减疗，硬耗就是白给。",
        "正解。窗口过了就转防御。扛过这一波，等<sk>巨人打击</sk>转好重新攒条件。",
        "<sk>破胆怒吼</sk>能救急，但你现在不是要脱身，是要熬过一整段冷却真空期——一个恐惧撑不了那么久。",
        "没有减疗没有增伤的时候打治疗，只会让你更久地站在两个人的输出里。"
      ],
      "k": "窗口结束的那一秒，你从威胁变成软目标。转防御不是怂，是等下一轮的必要动作。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 1,
      "s": "对面法师开始拉扯，用<sk>寒冰新星</sk>把你定住之后往外跑。你的<sk>冲锋</sk>在冷却，<sk>英勇飞跃</sk>好着。",
      "a": "该先做什么？",
      "o": [
        "<sk>英勇飞跃</sk>追上去",
        "先用<sk>碎裂投掷</sk>远程打他",
        "等控制结束再说",
        "<sk>雷霆一击</sk>先减速，再考虑追"
      ],
      "r": 3,
      "e": [
        "直接跳过去，他一个闪现你又够不着，位移就白交了。",
        "<sk>碎裂投掷</sk>三分钟冷却，拿来打伤害是浪费——它是撕免疫用的。",
        "干等只会让距离越拉越开。",
        "正解。<b>战士追不上人不是速度问题，是没提前减速。</b>先<sk>雷霆一击</sk>把他慢下来（点了 Crackling Thunder 范围还大 50%），再用位移贴上去才追得稳。"
      ],
      "k": "追人的顺序是「先断腿再追」，不是「先追再断腿」。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 3,
      "s": "对面是双近战，你被两个人贴着打。你的治疗喊「帮我把死骑控一下」。你手上<sk>风暴之锤</sk>好着，但你的爆发窗口还有 5 秒就转好。",
      "a": "怎么处理？",
      "o": [
        "先帮治疗控死骑，窗口晚 4 秒开",
        "不管治疗，等窗口开了全力输出",
        "交<sk>破胆怒吼</sk>把两个人一起冲散",
        "控死骑，同时开窗口打另一个"
      ],
      "r": 0,
      "e": [
        "正解。<b>治疗死了这局就结束了</b>，窗口晚 4 秒开还有得打。控制的优先级永远是「保住能让局面继续的东西」。",
        "治疗倒了你打得再快也没用。窗口是你的资源，治疗是全队的命。",
        "<sk>破胆怒吼</sk>让两个人都跑开，你的输出也断了——而且恐惧递减用掉之后，后面真需要脱身时就短了。",
        "同时做两件事听着好，实际是控完死骑再转身开窗口时目标早跑开了，两头落空。"
      ],
      "k": "队友的命 > 你的窗口。窗口会再来，治疗倒了不会。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "你正准备开窗口，看到对面术士读<sk>恐惧</sk>指着你。你手上<sk>拳击</sk>好着，<sk>狂暴之怒</sk>也好着。",
      "a": "用哪个？",
      "o": [
        "<sk>拳击</sk>打断",
        "<sk>狂暴之怒</sk>免疫掉",
        "两个都不用，吃了这个恐惧",
        "<sk>碎裂投掷</sk>打断"
      ],
      "r": 0,
      "e": [
        "正解。能打断就别用免疫——<sk>拳击</sk>冷却短，<sk>狂暴之怒</sk>该留给<b>已经中了控制</b>需要挣脱的时候。",
        "<sk>狂暴之怒</sk>是解控不是防控。现在还能打断的时候用掉它，等下真被控住就没牌了。",
        "开窗口前被恐惧，整个窗口就废了。",
        "<sk>碎裂投掷</sk>没有打断效果，而且它三分钟冷却另有用途。"
      ],
      "k": "能打断的时候打断，解控牌留给已经中招的时候。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面治疗被你队友控住了 6 秒。你的<sk>巨人打击</sk>还有 8 秒转好，减疗在身上还剩 7 秒。",
      "a": "这 6 秒怎么用？",
      "o": [
        "全力输出，控制期间伤害最值钱",
        "攒着不打，等<sk>巨人打击</sk>好了一起",
        "去补控对面输出，扩大控制覆盖",
        "先退出来回点血"
      ],
      "r": 0,
      "e": [
        "正解。治疗被控的窗口是<b>伤害唯一不会被补回来的时间</b>，比你的增伤窗口更稀缺。有多少打多少。",
        "等 8 秒，治疗早解控了。<sk>巨人打击</sk>的增伤只有 35%，治疗不在的价值远高于此。",
        "控制链要留给关键时刻，而且此时对面输出被控也不影响你打伤害。",
        "把最好的输出窗口用来回血，等于把队友的控制浪费掉。"
      ],
      "k": "治疗被控的时间 > 你的增伤窗口。前者稀缺，后者会转回来。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 1,
      "s": "你点了 Massacre，对面目标 <em>30%</em> 血。",
      "a": "<sk>斩杀</sk>现在能用吗？",
      "o": [
        "能，Massacre 把斩杀线提到 35%",
        "不能，要等 20% 以下",
        "能，但伤害会打折",
        "要看目标是不是治疗"
      ],
      "r": 0,
      "e": [
        "正解。Massacre 把可用血线从 20% 提到 35%，30% 已经在斩杀区内。这多出来的 15% 血量就是武器战士的主战场。",
        "那是不点 Massacre 时的线。",
        "斩杀在可用血线内不打折，反而是高伤害技能。",
        "斩杀线跟目标身份无关，只看血量百分比。"
      ],
      "k": "点了 Massacre，处决阶段从 35% 就开始——比你以为的早一大截。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 3,
      "s": "对面是个法师，<sk>寒冰屏障</sk>在。你的<sk>碎裂投掷</sk>好着。队友说「撕他屏障」。",
      "a": "撕不撕？",
      "o": [
        "撕，队友说的没错",
        "不撕——现在撕掉他等下还能再交一次，等他被打到不得不交的时候再撕",
        "撕，同时全队爆发跟上",
        "先<sk>缴械</sk>再撕"
      ],
      "r": 1,
      "e": [
        "<sk>寒冰屏障</sk>还没被逼出来就撕，等于用三分钟冷却换他一张<b>本来就要转回来</b>的牌。",
        "正解。<sk>碎裂投掷</sk>三分钟冷却，一局用错一次就没了。它要换的是<b>击杀窗口里那一次免疫</b>——他血低了被迫交屏障，你撕掉，那才是这笔交易的价值。",
        "爆发跟上也改变不了「他等下还能再交一次」这件事。",
        "<sk>缴械</sk>对法师意义有限，他的伤害不来自武器。"
      ],
      "k": "<sk>碎裂投掷</sk>换的不是「一次免疫」，是「击杀窗口里那一次免疫」。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你的队友是个法师，他刚喊「我开了，一起」。你的<sk>巨人打击</sk>还有 15 秒。",
      "a": "跟不跟？",
      "o": [
        "跟，队友爆发期间伤害叠加最有效",
        "不跟，等自己窗口好了再打",
        "跟，但只用普通输出，不交<sk>天神下凡</sk>",
        "先把减疗种上再决定"
      ],
      "r": 3,
      "e": [
        "无脑跟会把<sk>天神下凡</sk>浪费在没有增伤托底的时间里。",
        "完全不跟，队友的爆发就是单人输出，压不出人。",
        "接近对了，但漏了一步——没有减疗，两个人的伤害都会被治疗补回来。",
        "正解。<b>先种减疗</b>是无条件该做的，它让队友这一波爆发也不被补回来。种完再判断自己要不要交大冷却。"
      ],
      "k": "队友开爆发时，你的第一动作是种减疗，不是交自己的冷却。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "对面死骑给你套了<sk>寒冰锁链</sk>，你离目标 15 码。<sk>冲锋</sk>好着。",
      "a": "怎么办？",
      "o": [
        "<sk>冲锋</sk>过去",
        "先解掉减速再<sk>冲锋</sk>",
        "<sk>碎裂投掷</sk>远程输出",
        "<sk>英勇飞跃</sk>跳过去"
      ],
      "r": 0,
      "e": [
        "正解。<sk>冲锋</sk>本身就能让你瞬间到位，不受减速影响——先冲上去，减速在贴脸之后再处理。",
        "解控牌用来解一个减速太亏，而且解完你还得跑过去。",
        "拿三分钟冷却的技能打伤害是浪费。",
        "<sk>英勇飞跃</sk>是位移但落地后还是被减速黏着，而且它该留着追撤退的目标。"
      ],
      "k": "被减速时优先用位移穿过去，别把解控牌花在减速上。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 3,
      "s": "局面僵持了两分钟，双方都没死人。你的<sk>天神下凡</sk>刚转好，<sk>巨人打击</sk>还有 25 秒，对面所有防御牌都在。",
      "a": "现在该怎么办？",
      "o": [
        "开<sk>天神下凡</sk>制造压力，打破僵局",
        "等<sk>巨人打击</sk>转好，四条件齐了再开",
        "换个目标试试",
        "逼队友先开控制链"
      ],
      "r": 1,
      "e": [
        "<sk>天神下凡</sk>是<b>明牌</b>——对面看见就把防御池推出来。没有增伤托底的时候开，等于把冷却送给对面看。",
        "正解。僵持局面里，谁先浪费冷却谁输。25 秒能等，等四条件齐了那一下才有杀伤力。",
        "换目标不解决问题——你缺的是增伤和减疗，不是目标选错了。",
        "控制链要配合伤害窗口。你窗口没好就让队友交控，控住了也没伤害接。"
      ],
      "k": "僵持局的赢法是「别先浪费」。战士的爆发是明牌，牌不齐就是白送。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "你的减疗还剩 2 秒就要断了。手上<sk>致死打击</sk>和<sk>压制</sk>都好着。",
      "a": "用哪个续减疗？",
      "o": [
        "<sk>压制</sk>",
        "<sk>致死打击</sk>",
        "两个都能续",
        "都不能，减疗要靠天赋"
      ],
      "r": 1,
      "e": [
        "<sk>压制</sk>是高频输出技能，但它不带减疗。",
        "正解。<sk>致死打击</sk>压 50% 减疗、持续 10 秒，这是武器战士唯一的减疗来源，也是所有伤害的前提。",
        "只有<sk>致死打击</sk>带减疗。",
        "减疗就在<sk>致死打击</sk>上，不需要额外天赋。"
      ],
      "k": "减疗只有一个来源：<sk>致死打击</sk>。它断了，你打的所有数字都会被补回来。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "你在窗口里，突然被对面控住 3 秒。控制结束时窗口还剩 4 秒，<sk>巨人打击</sk>的增伤还在。",
      "a": "剩下 4 秒怎么用？",
      "o": [
        "放弃这个窗口，转防御",
        "立刻继续输出，能打多少打多少",
        "交<sk>天神下凡</sk>把窗口价值拉满",
        "先补一次<sk>致死打击</sk>续减疗再输出"
      ],
      "r": 1,
      "e": [
        "增伤还在的 4 秒是有价值的，直接放弃太浪费。",
        "正解。窗口还在燃烧，剩多少用多少。<b>被打断不等于窗口作废</b>。",
        "4 秒的窗口配不上<sk>天神下凡</sk>的冷却，交了也吃不满。",
        "如果减疗还在身上，此时补它是浪费 GCD；4 秒里每个 GCD 都该打输出。"
      ],
      "k": "窗口被打断了也要用完剩下的，别因为「不完美」就整个放弃。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 3,
      "s": "你和队友都开了爆发，正在打对面的治疗。治疗掉到 <em>40%</em>，他的队友（一个战士）开始<sk>援护</sk>他。",
      "a": "怎么应对？",
      "o": [
        "继续打治疗，援护挡不了多少",
        "转火打那个战士",
        "<sk>缴械</sk>那个战士",
        "控住那个战士，继续打治疗"
      ],
      "r": 3,
      "e": [
        "<sk>援护</sk>会把你打向治疗的伤害转移一部分到战士身上——你的爆发正在喂给错误的目标。",
        "转火等于放弃已经压到 40% 的治疗，还得从头压一遍。",
        "<sk>缴械</sk>削弱他的输出，但不解除<sk>援护</sk>的转移效果。",
        "正解。控住援护者就断了转移，你的伤害重新全部落在治疗身上——<b>已经压到 40% 的进度不能丢</b>。"
      ],
      "k": "有人挡在你和目标之间时，先移除那个挡的人，别换目标。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "你的血量掉到 <em>35%</em>，对面两个输出都在你身上。你的治疗正在被控。<sk>剑在人在</sk>和<sk>破胆怒吼</sk>都好着。",
      "a": "先用哪个？",
      "o": [
        "<sk>剑在人在</sk>硬抗",
        "<sk>破胆怒吼</sk>把他们冲散",
        "两个一起交",
        "跑向治疗那边求救"
      ],
      "r": 1,
      "e": [
        "<sk>剑在人在</sk>是 30% 减伤 8 秒，但治疗被控你没有外部补给——减伤只是让你死得慢一点。",
        "正解。治疗不在的时候，<b>你需要的是让伤害停下来，不是让伤害变小</b>。冲散两个人换来的几秒足够治疗解控。",
        "同时交两张牌，等下这波过去了你就裸奔了。",
        "往治疗那边跑等于把两个输出带过去，让治疗解控后立刻又被压。"
      ],
      "k": "治疗不在 → 要「断伤害」不要「减伤害」。减伤只在有人能奶你的时候才划算。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "对面目标进了 <em>25%</em>，你能斩杀了。这时候你的<sk>巨人打击</sk>刚好转好。",
      "a": "先按哪个？",
      "o": [
        "先<sk>巨人打击</sk>再斩杀",
        "先斩杀，抓住机会",
        "先补<sk>致死打击</sk>续减疗",
        "先控制，防止被治疗救走"
      ],
      "r": 0,
      "e": [
        "正解。<sk>巨人打击</sk>是 35% 增伤、10 秒——先开它，后面每一发斩杀都吃这个加成。<b>顺序错了伤害少三分之一</b>。",
        "急着斩杀，第一发不吃增伤，浪费了刚转好的窗口。",
        "如果减疗还在身上，此时补它是浪费一个 GCD。",
        "控制该卡在治疗抬手那一刻，不是提前交。"
      ],
      "k": "增伤永远先于伤害。窗口开在前面，后面每一下都吃加成。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 1,
      "s": "开场决策器里的四条：增伤、减疗、免疫牌、贴脸。",
      "a": "哪一条缺了，这一轮只能定位成「逼牌」？",
      "o": [
        "缺增伤",
        "缺减疗",
        "对面免疫牌还在",
        "贴不上"
      ],
      "r": 2,
      "e": [
        "缺增伤，伤害数字不够，但打出去的还是真伤害。",
        "缺减疗，伤害会被补回来，属于「拖时间」。",
        "正解。免疫是<b>完全无效</b>——你的爆发整套打进空气。这一轮唯一能拿到的成果就是逼他把牌交掉。",
        "贴不上是「打不满」，能贴多久打多久。"
      ],
      "k": "缺增伤 = 数字不够；缺减疗 = 拖时间；缺贴脸 = 打不满；<b>免疫在 = 完全无效</b>。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "你在 3v3，对面是治疗 + 法师 + 潜行者。你已经把法师压到 <em>50%</em>，这时潜行者<sk>消失</sk>脱战了。",
      "a": "怎么判断接下来？",
      "o": [
        "继续压法师，趁潜行者不在",
        "立刻转防御，准备接潜行者的爆发",
        "压法师但留下控制和防御牌",
        "去找潜行者"
      ],
      "r": 2,
      "e": [
        "潜行者<sk>消失</sk>后回来必定带爆发，你全力压法师会被从背后打穿。",
        "完全转防御等于放弃已经打出的 50% 进度，法师会被奶满。",
        "正解。<b>进度不能丢，但也不能裸着</b>。继续施压，同时把控制和防御牌留给潜行者回来那一下。",
        "主动去找潜行者是被他牵着走，而且你根本找不到。"
      ],
      "k": "对面有人脱战 = 一次爆发正在路上。压力继续给，牌要留一张。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你的<sk>断筋</sk>在目标身上，他还是跑掉了 —— 用的是一个位移技能。",
      "a": "这说明什么？",
      "o": [
        "<sk>断筋</sk>没生效",
        "减速拦不住位移，该用控制或者提前预判",
        "该换成<sk>雷霆一击</sk>",
        "应该早点交<sk>冲锋</sk>"
      ],
      "r": 1,
      "e": [
        "减速正常生效了，只是位移技能不受减速影响。",
        "正解。<b>减速管的是「走」，管不了「瞬移」</b>。对面有位移的时候，要么留控制打断他的逃跑时机，要么预判落点提前贴上。",
        "<sk>雷霆一击</sk>同样是减速，一样拦不住位移。",
        "<sk>冲锋</sk>是你的位移，交早了反而在他跑的时候没得用。"
      ],
      "k": "减速拦得住腿，拦不住位移。对面有位移就得靠控制或预判。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "你窗口开着，目标是对面的输出。你的治疗突然被对面两个人集火，掉到 <em>30%</em>。",
      "a": "怎么选？",
      "o": [
        "继续打，用伤害逼他们回防",
        "立刻回去帮治疗解围",
        "交<sk>集结呐喊</sk>给治疗续命，同时继续输出",
        "让治疗自己交保命牌"
      ],
      "r": 2,
      "e": [
        "「用伤害逼对面回防」在治疗只剩 30% 的时候太慢了，赌不起。",
        "完全放弃窗口回防，你的爆发就白交了，而且近战跑回去也需要时间。",
        "正解。<sk>集结呐喊</sk>是<b>不打断输出的团队续命</b>——给治疗一层缓冲，同时窗口继续燃烧。两边都不放弃。",
        "治疗自己有牌，但等他交完你也该给支援了——被动等待就是把队友孤立。"
      ],
      "k": "能不打断输出就救人的牌，永远优先用。<sk>集结呐喊</sk>就是这种牌。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你是 Slayer 线（top50 里 58% 走这条）。有人告诉你 Colossus 数据也不差，该换。",
      "a": "怎么判断？",
      "o": [
        "换，58/42 差距不大",
        "不换，多数派更安全",
        "这一格 58 比 42 没有正确答案，看你打什么阵容和什么节奏",
        "看哪条线伤害数字高"
      ],
      "r": 2,
      "e": [
        "「差距不大」不是换的理由，也不是不换的理由——它说明的是<b>这一格本来就没有共识</b>。",
        "「多数派安全」是回避判断。58% 不构成压倒性优势。",
        "正解。这是站上唯一一格 top50 内部也没共识的英雄天赋。<b>58 比 42 意味着两条线都成立</b>，选择依据是你的打法节奏和常遇到的阵容，不是数据高低。",
        "单看伤害数字会忽略两条线的节奏差异，而且实测分布已经说明单一维度分不出高下。"
      ],
      "k": "使用率接近对半的格子，数据不给答案——它在告诉你「这里需要你自己判断」。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "镜像对局。你和对面战士同时贴上，两人都还没种减疗。",
      "a": "第一优先做什么？",
      "o": [
        "抢先开<sk>巨人打击</sk>抢窗口",
        "抢先种<sk>致死打击</sk>的减疗",
        "先<sk>拳击</sk>打断他",
        "先开<sk>防御姿态</sk>稳住"
      ],
      "r": 1,
      "e": [
        "两边窗口撞在一起是纯拼数值，先手窗口拿不到额外收益。",
        "正解。<b>双方都有 50% 减疗，谁先种上、谁盖得更久，谁就赢了资源战</b>。这个对局的胜负多半在这里，不在爆发。",
        "战士几乎没有读条技能，开局打断没有目标。",
        "开局就转防御把主动权让出去了，而且减疗没种，后面拿不回来。"
      ],
      "k": "镜像对局赢在先手减疗，不在先手爆发。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "对面战士交了<sk>剑在人在</sk>，你的<sk>巨人打击</sk>刚好转好。",
      "a": "开不开窗口？",
      "o": [
        "开，35% 增伤能打穿减伤",
        "不开，等这 8 秒过去再开",
        "开，同时交<sk>天神下凡</sk>压过去",
        "换个目标打"
      ],
      "r": 1,
      "e": [
        "<sk>剑在人在</sk>是高招架加减伤，你的窗口只有 10 秒——撞进去等于白交。",
        "正解。8 秒的减伤对上 10 秒的窗口，撞上去大部分伤害被吃掉。<b>错开一个窗口去打他的空窗期，比正面对撞划算。</b>",
        "加码只会让浪费更大，两个大冷却一起喂给他的减伤。",
        "3v3 里换目标可以，但这题的核心是别把窗口撞在减伤上——换不换目标是次一级的决定。"
      ],
      "k": "对面开了大减伤，你的窗口就该往后挪。窗口撞减伤是最亏的交易。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 3,
      "s": "圣骑士把<sk>保护祝福</sk>给了他队友——正是你打的那个目标。",
      "a": "怎么办？",
      "o": [
        "继续打，祝福会过期",
        "立刻切目标",
        "用<sk>碎裂投掷</sk>撕掉祝福",
        "控住圣骑士，不让他继续保"
      ],
      "r": 1,
      "e": [
        "<sk>保护祝福</sk>免疫物理伤害——你是纯物理，站着挥就是完全打空。",
        "正解。<b>被保的目标你完全打不动</b>，立刻切目标，别站在那里空挥。",
        "<sk>碎裂投掷</sk>该留给<sk>圣盾术</sk>——那才是这个对局最大的一笔交易，三分钟冷却不能花在祝福上。",
        "控住骑士也解不掉已经生效的祝福，伤害仍然进不去。"
      ],
      "k": "物理免疫挂在目标身上时，唯一正确的动作是换目标。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 3,
      "s": "开场三十秒，圣骑士还没交<sk>圣盾术</sk>。你的<sk>碎裂投掷</sk>好着，队友问要不要现在撕。",
      "a": "什么时候用<sk>碎裂投掷</sk>？",
      "o": [
        "现在就用，先手优势",
        "等他交出<sk>圣盾术</sk>之后再撕",
        "等自己爆发窗口开的时候一起用",
        "留到最后阶段保底"
      ],
      "r": 1,
      "e": [
        "<sk>圣盾术</sk>还没交，撕的是空气。",
        "正解。<b>真正的击杀窗口在免疫被撕之后</b>——等他被打到不得不交，你再用三分钟冷却换掉它，这是这个对局最大的一笔交易。",
        "窗口开着但他没交免疫时撕，同样撕不到东西。",
        "留到最后可能永远等不到「更好的时机」，而他的<sk>圣盾术</sk>会转回来第二次。"
      ],
      "k": "<sk>碎裂投掷</sk>换的是「已经交出来的那张免疫」，不是「他手上还有的那张」。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "你刚贴上猎人，他还没开始跑。你的<sk>巨人打击</sk>好着，<sk>断筋</sk>也好着。",
      "a": "先做什么？",
      "o": [
        "开<sk>巨人打击</sk>抓紧输出",
        "先种<sk>断筋</sk>减速",
        "先控住他",
        "先<sk>缴械</sk>削弱他输出"
      ],
      "r": 1,
      "e": [
        "猎人一跑你就够不着了，窗口开着也打不到人。",
        "正解。<b>贴上的第一件事不是打，是种减速</b>——追出去再想就晚了。减速是你唯一能限制他的东西。",
        "控制要卡在他准备位移的那一刻，开局就交是浪费。",
        "<sk>缴械</sk>对猎人价值有限，而且没解决「他会跑」这个核心问题。"
      ],
      "k": "对机动性强的目标，减速要在他开始跑之前就种上。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人开了<sk>灵龟守护</sk>，你的窗口还剩 6 秒。",
      "a": "这 6 秒怎么办？",
      "o": [
        "继续打他，多少能打进去一点",
        "转去打他队友",
        "停手等免疫结束",
        "交控制留住他"
      ],
      "r": 1,
      "e": [
        "<sk>灵龟守护</sk>免疫伤害，打进去是 0，不是「一点」。",
        "正解。<b>窗口一旦打开就在燃烧</b>，目标打不动就换人——他的队友照样吃你的增伤。",
        "干等 6 秒，窗口就烧完了。",
        "控制住一个免疫状态的目标没有意义，还浪费了递减。"
      ],
      "k": "免疫不是「伤害变少」，是「等于 0」。窗口里遇到免疫必须换目标。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "你在打潜行者，他开了<sk>闪避</sk>。你的爆发窗口还开着。",
      "a": "怎么处理？",
      "o": [
        "继续打，总有几下能命中",
        "转去打他队友，等<sk>闪避</sk>结束",
        "交<sk>天神下凡</sk>用更多伤害压过去",
        "控住他等闪避过去"
      ],
      "r": 1,
      "e": [
        "<sk>闪避</sk>期间你的物理伤害几乎全丢——<b>这是最容易白打的一段</b>。",
        "正解。窗口还在燃烧，转去打别人。闪避是有时限的，等它过去再回来。",
        "加码等于把更多伤害喂进闪避里，浪费更大。",
        "控住他，闪避照样在走，等控制结束闪避可能还剩着。"
      ],
      "k": "高闪避对纯物理职业约等于免疫。别用「打几下总能中」安慰自己。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "开场，你知道对面有潜行者但看不见他。",
      "a": "开场前该做什么？",
      "o": [
        "四处走动找他",
        "站好位，把<sk>法术反射</sk>和<sk>剑在人在</sk>留在手上",
        "提前开<sk>防御姿态</sk>和<sk>天神下凡</sk>",
        "贴着治疗站，交<sk>破胆怒吼</sk>探人"
      ],
      "r": 1,
      "e": [
        "找贼是徒劳的，还会让你脱离队友。",
        "正解。<b>开场主动权不在你</b>——你能做的是提前站好位、把保命牌留在手上，别在他开场前就交掉。",
        "<sk>天神下凡</sk>提前开就是浪费，他还没现身你的爆发就在空转。",
        "<sk>破胆怒吼</sk>探不到潜行的人，白交一张牌还吃递减。"
      ],
      "k": "对手决定开场时机时，你的准备动作是「留牌」，不是「提前交」。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师读一个大治疗。你手上<sk>拳击</sk>好着，<sk>风暴之锤</sk>也好着。",
      "a": "用哪个打断？",
      "o": [
        "<sk>风暴之锤</sk>，控住更保险",
        "<sk>拳击</sk>",
        "两个一起用",
        "不打断，直接压伤害"
      ],
      "r": 1,
      "e": [
        "硬控要留给他必须交大冷却的时候，用来打断一次普通读条太奢侈，而且会吃递减。",
        "正解。<b><sk>拳击</sk>不进递减，可以反复用</b>。看到抬手就打断，硬控留给关键时刻。",
        "两个叠一起纯浪费，打断一次读条只需要一个。",
        "牧师的治疗量足以抵消你窗口外的全部伤害，放着不打断等于白打。"
      ],
      "k": "能用不进递减的打断解决的，就别动硬控。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "你正准备开窗口，牧师对你放<sk>心灵尖啸</sk>。",
      "a": "最有价值的应对是什么？",
      "o": [
        "吃了恐惧，回来再打",
        "用 Berserker Shout 免疫恐惧",
        "<sk>狂暴之怒</sk>解掉",
        "提前跑出范围"
      ],
      "r": 1,
      "e": [
        "开窗口前被恐惧，整个窗口就废了。",
        "正解。恐惧是牧师的主要脱身手段，<b>Berserker Shout 免疫恐惧——这是战士对牧师最有价值的一张牌</b>。",
        "<sk>狂暴之怒</sk>能解，但它是通用解控牌，该留给没有专门应对手段的控制。",
        "<sk>心灵尖啸</sk>是范围瞬发，跑不出去。"
      ],
      "k": "有专门克制某类控制的牌，就别用通用解控牌去顶。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 1,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "对你的伤害有多大影响？",
      "o": [
        "几乎没影响，你是物理伤害",
        "伤害减半",
        "完全打不动",
        "要看你有没有开<sk>天神下凡</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<sk>反魔法护罩</sk>免疫的是法术伤害，<b>你是物理伤害，所以它对你无效</b>——这一点比对法系对手有利。",
        "它不减物理伤害。",
        "完全打不动的是<sk>圣盾术</sk>那类物理免疫，不是这张。",
        "跟你开不开爆发无关，护罩挡的是伤害类型不是伤害量。"
      ],
      "k": "看清对面的免疫挡的是哪种伤害——挡法术的对纯物理职业等于没开。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用<sk>冰风暴</sk>类效果限制你的走位，你的 Berserker Shout 好着。",
      "a": "现在用掉它吗？",
      "o": [
        "用，立刻挣脱",
        "不用，留给关键那一次定身",
        "用，同时开窗口",
        "换用<sk>狂暴之怒</sk>"
      ],
      "r": 1,
      "e": [
        "一个走位限制就交掉免疫定身的牌，等下真正关键的那次控制就没得解了。",
        "正解。Berserker Shout 免疫定身，<b>留给关键那一次</b>——死骑不跑也不脱身，这个对局你不用急着挣脱每一次限制。",
        "开窗口是另一回事，不构成现在交牌的理由。",
        "两张解控牌都是有限资源，随便交哪张都一样浪费。"
      ],
      "k": "不用担心距离的对局里，解控牌要留给「真正打断你窗口的那一次」。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满刚放下一组图腾，其中有治疗图腾和地缚图腾。你的窗口还没开。",
      "a": "先做什么？",
      "o": [
        "无视图腾，直接打人",
        "用范围技能顺手清掉关键图腾",
        "开窗口抢伤害",
        "控住萨满不让他再放"
      ],
      "r": 1,
      "e": [
        "<b>他的牌在地上</b>——放着治疗图腾不管，你后面打的伤害都在被抵消。",
        "正解。<b>关键图腾打掉的收益常常大于继续砍人</b>，而且你的范围技能顺手就能清。很多人忘了图腾是可以打掉的。",
        "图腾还在的时候开窗口，伤害被治疗图腾持续抵消。",
        "图腾有冷却，控住他不解决已经落地的这一组。"
      ],
      "k": "萨满的关键资源在地上。先清地面，再谈打人。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "该怎么做？",
      "o": [
        "停手，等它结束",
        "继续打，减伤不是免疫",
        "交爆发压过去",
        "控住他"
      ],
      "r": 0,
      "e": [
        "正解。<sk>星界转移</sk>是<b>短暂的完全免疫</b>，它一开你就该停手，硬打是纯浪费窗口。",
        "它不是减伤，是免疫一切。",
        "往免疫里砸爆发是这个对局最亏的操作。",
        "免疫期间控制也进不去。"
      ],
      "k": "分清「减伤」和「免疫」：前者可以硬打，后者必须停手。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "法师往外跑，用了闪现拉开距离。你的<sk>英勇飞跃</sk>好着。",
      "a": "怎么用位移？",
      "o": [
        "立刻跳过去追",
        "预判他要去的位置，提前落点",
        "留着不用，等他回来",
        "先<sk>冲锋</sk>再<sk>英勇飞跃</sk>"
      ],
      "r": 1,
      "e": [
        "跟在后面跳，他再一次闪现你又空了——<b>追法师追不上</b>。",
        "正解。<b>预判他要去哪，用<sk>英勇飞跃</sk>提前落点</b>，比在后面跟着跑有效得多。",
        "完全不追，他就在远处安心输出。",
        "两个位移一起交，等下他一个冰环你就彻底没手段了。"
      ],
      "k": "对机动性高于你的目标，位移要用在「他要去的地方」，不是「他现在的地方」。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师读一个关键法术，你的<sk>法术反射</sk>和<sk>拳击</sk>都好着。",
      "a": "哪个更值？",
      "o": [
        "<sk>拳击</sk>打断",
        "<sk>法术反射</sk>弹回去",
        "都用，确保拦住",
        "都不用，压伤害"
      ],
      "r": 1,
      "e": [
        "打断当然有效，但这个对局里反射的收益更高。",
        "正解。<b>反射对法师是这个对局最爽的一张牌</b>——不只拦住，还把伤害还回去。<sk>拳击</sk>冷却短，留着打断下一个。",
        "两个一起交是浪费，一个就够拦住。",
        "关键法术放过去，你的血线会很难看。"
      ],
      "k": "能「拦住并反打」的牌，价值高于只能「拦住」的牌。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士在用吸血技能回血，血线一直拉不下来。",
      "a": "最该做的是什么？",
      "o": [
        "提高爆发，打得比他回得快",
        "保持<sk>致死打击</sk>的减疗一直盖着",
        "控住他不让他读条",
        "打他的宠物"
      ],
      "r": 1,
      "e": [
        "单纯拼输出很难赢过持续自愈，而且你的爆发有冷却，他的吸血没有。",
        "正解。<b>减疗对他同样有效</b>——<sk>致死打击</sk>压着，他的吸血就补不回来。",
        "控制有递减，撑不满全场；减疗才是持续压制自愈的手段。",
        "打宠物能省点麻烦，但不解决他自愈这个核心问题。"
      ],
      "k": "减疗压的不只是治疗的奶量，也包括对手的自愈。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 1,
      "s": "术士对你放<sk>恐惧</sk>，你的 Berserker Shout 好着。",
      "a": "该怎么应对？",
      "o": [
        "用 Berserker Shout 免疫",
        "吃了恐惧再回来",
        "用<sk>狂暴之怒</sk>解",
        "<sk>拳击</sk>打断"
      ],
      "r": 0,
      "e": [
        "正解。<b>Berserker Shout 免疫恐惧，是这个对局的关键牌</b>——术士靠恐惧和减速拉扯，免疫它等于拆掉他的主要手段。",
        "术士需要时间读条和叠 DoT，被恐惧走开就是给他喘息。",
        "<sk>狂暴之怒</sk>能解，但有专门克制恐惧的牌时该用那张。",
        "恐惧可以被打断，但 Berserker Shout 更稳——它是预防不是补救。"
      ],
      "k": "对以恐惧为核心手段的对手，免疫恐惧的牌就是这局的胜负手。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "你准备对武僧开全套爆发：<sk>天神下凡</sk> + <sk>巨人打击</sk> 一起交。",
      "a": "这样做的风险是什么？",
      "o": [
        "武僧机动性高，可能跑掉",
        "<sk>业报之触</sk>会把整套伤害原样弹回你身上",
        "武僧减伤高，打不动",
        "没什么风险，条件齐就该开"
      ],
      "r": 1,
      "e": [
        "机动性是问题，但不是「整套一起交」的主要风险。",
        "正解。<b><sk>业报之触</sk>通常就是接你的爆发来的</b>——整套撞上去，伤害会转回你身上，这是全场最容易自杀的一张对面牌。",
        "武僧不是靠高减伤挡你，是靠反弹。",
        "这个对局恰恰不能无脑全交。"
      ],
      "k": "有反伤牌的对手面前，「条件齐就全交」是错的——先试探。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 3,
      "s": "接上题。你想在武僧身上打出爆发，又怕撞<sk>业报之触</sk>。",
      "a": "怎么打？",
      "o": [
        "整套一起交，赌他<sk>业报之触</sk>不在手上",
        "先打两下试探反应，同时把<sk>天神下凡</sk>和<sk>巨人打击</sk>错开交",
        "完全不开爆发，只用普通输出磨",
        "等他先交<sk>业报之触</sk>，期间不做任何输出"
      ],
      "r": 1,
      "e": [
        "这正是这个对局最容易自杀的打法——<sk>业报之触</sk>通常就是接你的爆发来的。",
        "正解。<b>试探的成本远低于整套爆发被反弹</b>，同时把两个大冷却错开，别让整套撞在同一张牌上。这两件事是一套应对的两半。",
        "完全不开爆发过于保守，武僧的减伤不足以让你放弃全部爆发窗口。",
        "干等不输出，等于把主动权和时间都让出去，他反而能从容找机会。"
      ],
      "k": "怕被反弹时，试探和错峰是同一套应对的两半，不是二选一。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊开了<sk>树皮术</sk>，你的窗口刚开 2 秒。",
      "a": "继续打还是停？",
      "o": [
        "停手，等它过去",
        "继续打，它只是减伤不是免疫",
        "继续打但把大冷却留着",
        "转去打他队友"
      ],
      "r": 2,
      "e": [
        "<sk>树皮术</sk>不是免疫，完全停手太保守，窗口会空转。",
        "「可以硬打」没错，但性价比低——不该把大冷却喂进去。",
        "正解。<b>它是减伤不是免疫，可以硬打，但性价比低</b>。普通输出继续走，把<sk>天神下凡</sk>这类大冷却留到它过去。",
        "换目标是选项之一，但德鲁伊本身难黏，主动放走他更亏。"
      ],
      "k": "减伤面前不用停手，但要停「大冷却」。这跟免疫的处理方式不一样。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊准备切<sk>旅行形态</sk>跑掉，你的<sk>风暴之锤</sk>好着。",
      "a": "什么时候用？",
      "o": [
        "现在，卡他变形那一刻",
        "等他变完形再控",
        "开局就控住不让他跑",
        "不用控制，用<sk>断筋</sk>减速"
      ],
      "r": 0,
      "e": [
        "正解。<b>硬控卡在他要变形的那一刻</b>，比卡在满血站桩时有用得多——打断他的节奏才是控制的价值。",
        "变完形他已经跑开了，控不到。",
        "开局控住他，控制走完他照样能跑，等于白交。",
        "减速该提前上没错，但此刻他正要变形，减速拦不住形态切换带来的位移。"
      ],
      "k": "控制的价值在于打断对手的关键动作，不在于「先控住再说」。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "恶魔猎手用二段跳和冲刺不断拉开距离，你追了半天没打到人。",
      "a": "该怎么调整？",
      "o": [
        "继续追，总能贴上",
        "站到治疗身边，等他自己贴上来",
        "交所有位移一次性贴死他",
        "换目标打他队友"
      ],
      "r": 1,
      "e": [
        "<b>DH 的位移多且短冷却，拉开距离对他几乎没有成本</b>——追下去只会一直空耗。",
        "正解。追不上就别追。<b>他必须近身才能输出</b>，站在治疗身边等他自己过来，主动权就回到你手上。",
        "把位移全交光，等他下一次拉开你就彻底没手段了。",
        "换目标可以考虑，但没解决「你被机动性拖着走」这个根本问题。"
      ],
      "k": "对机动性远超你的近战对手，守在必经之地比追更有效。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 1,
      "s": "恶魔猎手开了<sk>恶魔变形</sk>和<sk>黑曜鳞片</sk>。",
      "a": "这两张牌意味着什么？",
      "o": [
        "都是免疫，必须停手",
        "都不是免疫，可以打，只是效率下降",
        "一个是免疫一个是减伤",
        "只影响法术伤害"
      ],
      "r": 1,
      "e": [
        "都不是免疫。",
        "正解。<b>一个变身增强、一个减伤，都不是免疫</b>——可以继续打，只是伤害效率下降。",
        "两张都不是免疫。",
        "<sk>黑曜鳞片</sk>不是只挡法术。"
      ],
      "k": "先分清对面的牌是免疫还是减伤，再决定停不停手。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中，你在地面。",
      "a": "该做什么？",
      "o": [
        "用位移追上去",
        "等他落地，同时去处理别的目标",
        "用<sk>碎裂投掷</sk>远程打他",
        "原地等他"
      ],
      "r": 1,
      "e": [
        "<b>悬空期间近战完全够不着</b>，你没有能上天的位移。",
        "正解。等它落地，这段时间去做别的事——你的位移填不上垂直方向的差距。",
        "<sk>碎裂投掷</sk>三分钟冷却，拿来打一个必然会落地的目标是浪费。",
        "干等浪费时间，这段时间可以压他队友或者补减疗。"
      ],
      "k": "遇到你结构上够不着的状态（垂直脱离），等比追明智。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招，你的<sk>拳击</sk>好着。",
      "a": "打不打断？",
      "o": [
        "打，唤魔师蓄力技能多，打断价值极高",
        "不打，留着打断治疗",
        "打，同时开爆发",
        "先贴上去再说"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能，<sk>拳击</sk>在这个对局的价值极高</b>——打断一次蓄力等于抵消一大段伤害。",
        "<sk>拳击</sk>冷却短、不进递减，不需要为了「留着」而放过眼前的蓄力。",
        "开爆发是另一回事，跟打断这次蓄力不冲突也不相关。",
        "贴上去的过程中蓄力就放完了。"
      ],
      "k": "对蓄力型对手，短冷却打断该用就用，不用攒。"
    }
  ]
};
