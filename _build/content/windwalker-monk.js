module.exports = {
  "meta": {
    "title": "踏风武僧 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 踏风武僧 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "踏风武僧,武僧,PVP,竞技场,魔兽世界,12.1,Midnight,windwalker monk,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\"><sk>业报之触</sk>把对面打你的伤害原样还回去。<br>踏风的活不是抢先手，是让对面不敢先动手。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"业报之触\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_touchofkarma.jpg\" alt=\"业报之触\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"扫堂腿\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_legsweep.jpg\" alt=\"扫堂腿\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？你有一张让对面爆发变自杀的牌</span><span class=\"sub\">业报之触改变的是对手的决策，不只是你的血线</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>业报之触</sk>把你受到的伤害转成对目标的伤害。<b>对面开爆发撞上去，等于替你打自己</b>——所以懂的人看到你交它就会停手。</p><p style=\"margin-top:8px\">这意味着踏风的一部分强度是<b>威慑</b>：对面因为忌惮而不敢开，你就白赚了一个冷却周期。反过来，<b>把它当纯保命牌交掉是浪费</b>——那样只挡了伤害，没换到对面的节奏。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">踏风的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">输出时钟 · <sk>怒雷破</sk></span><span class=\"sub\">你的伤害主体，也是你的破绽</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>引导型技能，期间持续打输出。<b>Turbo Fists（50/50 全员必带）让它顺带把所有目标减速 90%，并且引导期间你招架所有攻击。</b></p><p style=\"margin-top:8px\">所以怒雷破不只是伤害——<b>它同时是控场和防御</b>。但引导会被打断，被控住就整段作废。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"业报之触\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_touchofkarma.jpg\" alt=\"业报之触\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">威慑时钟 · <sk>业报之触</sk></span><span class=\"sub\">交出去那一刻对面就该停手</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>把受到的伤害转成对目标的伤害。<b>它的价值不只在挡伤害，在改变对面的决策。</b></p><p style=\"margin-top:8px\">所以交的时机是<b>对面准备开爆发的那一刻</b>，不是你血线告急的时候。血低了才交，只挡到了尾巴。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"扫堂腿\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_legsweep.jpg\" alt=\"扫堂腿\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"分筋错骨\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_paralysis.jpg\" alt=\"分筋错骨\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟 · 两种控制</span><span class=\"sub\">一个范围昏迷，一个单体长控</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>扫堂腿</sk>范围昏迷、<sk>分筋错骨</sk>单体失能。<b>它们走不同的递减</b>。</p><p style=\"margin-top:8px\">踏风的控制不算多，所以<b>别拿它们开场</b>——扫堂腿留给队友的爆发窗口，分筋错骨留给需要把治疗踢出去的时候。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：影踏 Shado-Pan</span><span class=\"sub\">top50 里 48 人走，另一条只有 2 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>影踏（Shado-Pan）48/50</b>，天神引导（Conduit of the Celestials）只有 <b>2 人</b>。</p><p style=\"margin-top:8px\">这条线围绕 Flurry Strikes 展开——自动攻击攒层，<sk>怒雷破</sk>时一次性释放。<b>它和 Turbo Fists 是同一套逻辑：把怒雷破做成整局的支点。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：一格没得选，两格看阵容</span><span class=\"sub\">Turbo Fists 必带 · 另两格按对面换</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Turbo Fists（50/50）</b>——全员必带。<sk>怒雷破</sk>期间减速 90% + 招架全部攻击，<b>把一个纯输出技能变成攻防一体</b>。</p><p style=\"margin-top:8px\"><b>Ride the Wind（35/50）</b>清减速并给队友铺路、<b>Grapple Weapon（32/50）</b>缴械、<b>Wind Waker（30/50）</b>强化位移。这三个占了第二三格的绝大多数——<b>对面物理输出重就上 Grapple Weapon，对面靠拉扯就上 Ride the Wind</b>。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">三格 50 人 = 150 个选择，上面四项占了其中 147 个。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"猛虎掌\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_tigerpalm.jpg\" alt=\"猛虎掌\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"旭日东升踢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_risingsunkick.jpg\" alt=\"旭日东升踢\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"猛虎掌\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_tigerpalm.jpg\" alt=\"猛虎掌\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"幻灭踢\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_roundhousekick.jpg\" alt=\"幻灭踢\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 基础循环：攒层再结账</span><span class=\"sub\">Teachings of the Monastery 是地基</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>猛虎掌</sk>攒 Teachings of the Monastery 层数，<sk>幻灭踢</sk>把层数打出去。</p><p style=\"margin-top:8px\"><b>层数没攒够就按幻灭踢，等于把技能白扔</b>。开爆发之前先看层数，这跟死骑「先看疫病」是同一类判断。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"怒雷破\" style=\"width:20px;height:20px\" src=\"assets/icons/monk_ability_fistoffury.jpg\" alt=\"怒雷破\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 怒雷破：什么时候引导得完</span><span class=\"sub\">被打断整段作废</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>怒雷破</sk>要引导数秒才打满。<b>期间你招架所有攻击（Turbo Fists），但控制照样打断你。</b></p><p style=\"margin-top:8px\">所以开它之前先看：<b>对面的硬控在不在手上</b>。控制刚交完那段时间才是你安心引导的窗口。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"业报之触\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_touchofkarma.jpg\" alt=\"业报之触\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · 业报之触交在对面开爆发那一刻</span><span class=\"sub\">不是血线告急的时候</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>它把伤害转回去。<b>对面全交撞上来，等于替你打自己。</b></p><p style=\"margin-top:8px\"><b>血低了才交是浪费</b>——那时候只挡到爆发的尾巴，也没威慑到对面的决策。看到对面交大冷却就该按。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"风领主之击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_hand_1h_artifactskywall_d_01.jpg\" alt=\"风领主之击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"升龙霸\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_hurricanestrike.jpg\" alt=\"升龙霸\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 爆发窗口：两个技能开门</span><span class=\"sub\">它们授予层数与冷却回复</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>风领主之击</sk>和<sk>升龙霸</sk>是踏风的爆发起点，授予 Teachings 层数并加快关键技能的冷却回复。</p><p style=\"margin-top:8px\"><b>把它们和<sk>白虎下凡</sk>叠在一起</b>，才是完整的一轮。分开交，每一段都不够疼。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"扫堂腿\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_legsweep.jpg\" alt=\"扫堂腿\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"分筋错骨\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_paralysis.jpg\" alt=\"分筋错骨\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 控制留给队友的窗口</span><span class=\"sub\">踏风的控制不算多</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>扫堂腿</sk>是范围昏迷、<sk>分筋错骨</sk>是单体失能，<b>走不同的递减</b>。</p><p style=\"margin-top:8px\">别开场交。<sk>扫堂腿</sk>卡在队友爆发前，<sk>分筋错骨</sk>用来把治疗踢出战斗——这两件事一局各只有几次机会。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"壮胆酒\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_monk_fortifyingale_new.jpg\" alt=\"壮胆酒\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"散魔功\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_monk_diffusemagic.jpg\" alt=\"散魔功\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 两张防御牌，分工不同</span><span class=\"sub\">一张抗全部，一张抗法术</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>壮胆酒</sk>提高生命上限并大幅减伤、<sk>散魔功</sk>降低法术伤害并能把有害效果弹回去。</p><p style=\"margin-top:8px\"><b>对面法系多的时候<sk>散魔功</sk>的价值远高于减伤</b>——它不只挡，还能把控制打回去。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">业报之触交在对面开爆发那一刻</div><div class=\"dd\">它换的是对面的决策，不是你的血线。血低了才交只挡到尾巴。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">层数不够别按幻灭踢</div><div class=\"dd\">Teachings of the Monastery 是地基。层数没攒够就结账，等于白扔技能。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">开怒雷破之前先看对面硬控</div><div class=\"dd\">引导被打断整段作废。控制刚交完那段才是安心输出的窗口。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁会先开爆发？</b><sk>业报之触</sk>要留给那个人。它换的是对面的节奏，不是你的血量。</p><p style=\"margin-top:8px\"><b>2 · 对面伤害来自武器还是法术？</b>决定 PvP 天赋：物理重就上 Grapple Weapon 缴械，法术重就靠<sk>散魔功</sk>顶。</p><p style=\"margin-top:8px\"><b>3 · 对面的硬控在不在手上？</b>决定你什么时候敢引导<sk>怒雷破</sk>。这是踏风最容易被打断的一段。</p></div><div class=\"sc\"><h4>属性：精通领先，急速几乎不要</h4><p>精通 100 > 全能 82 > 爆击 11 > <b>急速 8</b>。</p><p style=\"margin-top:8px\"><b>急速排在最后是这个专精的特点</b>——踏风的伤害靠层数和窗口，不靠出手快。装备上带多少算多少，不要为它放弃前两条。</p></div>"
  },
  "sk": {
    "业报之触": "ability_monk_touchofkarma",
    "怒雷破": "monk_ability_fistoffury",
    "扫堂腿": "ability_monk_legsweep",
    "分筋错骨": "ability_monk_paralysis",
    "猛虎掌": "ability_monk_tigerpalm",
    "幻灭踢": "ability_monk_roundhousekick",
    "风领主之击": "inv_hand_1h_artifactskywall_d_01",
    "升龙霸": "ability_monk_hurricanestrike",
    "白虎下凡": "ability_monk_summontigerstatue",
    "壮胆酒": "ability_monk_fortifyingale_new",
    "散魔功": "spell_monk_diffusemagic",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "滚地翻": "ability_monk_roll",
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
    "切喉手": "ability_monk_spearhand",
    "冰封之韧": "spell_deathknight_iceboundfortitude",
    "死亡之握": "spell_deathknight_strangulate",
    "天启": "artifactability_unholydeathknight_deathsembrace",
    "星界转移": "ability_shaman_astralshift",
    "神鹤引项踢": "ability_monk_cranekick_new",
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
      "k": "stack",
      "t": "Teachings 层数攒够了",
      "d": "<sk>猛虎掌</sk>攒的层数是你伤害的地基。层数不够，<sk>幻灭踢</sk>打出去是空的"
    },
    {
      "k": "cd",
      "t": "<sk>风领主之击</sk>或<sk>升龙霸</sk>好了",
      "d": "它们是爆发起点，授予层数并加快关键技能冷却。没有它们，这一轮只是普通输出"
    },
    {
      "k": "safe",
      "t": "对面硬控不在手上",
      "d": "<sk>怒雷破</sk>要引导才打得满。对面控制在手，你的整段引导随时会作废"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的爆发会整套打空"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在只是在走空</h3><p>层数没攒够、爆发技能也没好。<b>踏风不是靠单个技能打死人的专精</b>——先攒层、等冷却。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，缺的这些让爆发落不了地</h3><p>条件差太多。踏风的一轮要靠层数、冷却、安全引导三样凑齐，缺两样以上就是纯浪费。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是逼牌不是杀人</h3><p>压上去打两轮，逼对面交一张减伤或位移，<b>把<sk>白虎下凡</sk>留给下一个窗口</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮的上限：<b>缺层数就是伤害不够，缺安全就是引导会断，免疫在就是全打空</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>风领主之击</sk>开门 → <sk>白虎下凡</sk>跟上 → <sk>怒雷破</sk>安心引导打满 → <sk>扫堂腿</sk>卡在治疗准备救人那一秒。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先数对面的硬控",
      "<sk>怒雷破</sk>是你的伤害主体，但它要引导。<b>对面控制在手上的时候开，等于把整段送掉。</b>",
      "怒雷破"
    ],
    [
      "攒 Teachings 层数",
      "<sk>猛虎掌</sk>攒层，<b>层数是你所有爆发的地基</b>。攒够了再谈开窗口。",
      "猛虎掌"
    ],
    [
      "<sk>风领主之击</sk>或<sk>升龙霸</sk>开门",
      "它们授予层数并加快关键技能的冷却回复。<b>爆发从这里开始计时。</b>",
      "风领主之击"
    ],
    [
      "<sk>白虎下凡</sk>跟上，别单独交",
      "白虎持续攻击并放大你的伤害。<b>和开门技能叠在一起才是完整的一轮</b>，分开交每段都不够疼。",
      "白虎下凡"
    ],
    [
      "<sk>怒雷破</sk>打满这一段",
      "引导期间减速全场并招架攻击（Turbo Fists）。<b>这是攻防一体的一段，前提是不被打断。</b>",
      "怒雷破"
    ],
    [
      "<sk>扫堂腿</sk>卡在治疗抬手那一刻",
      "范围昏迷，别开场交。<b>控制要落在你的伤害正在落地的时候。</b>",
      "扫堂腿"
    ],
    [
      "对面开爆发 → <sk>业报之触</sk>",
      "把伤害原样还回去。<b>交在他开的那一刻，不是你血低的时候</b>——它换的是对面的节奏。",
      "业报之触"
    ],
    [
      "窗口过了，用位移和减伤过渡",
      "<sk>壮胆酒</sk>扛伤害、<sk>滚地翻</sk>拉开距离。<b>冷却真空期不要硬站</b>，等下一个开门技能。",
      "壮胆酒"
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
        "diff": "看爆发",
        "cards": [
          "剑在人在",
          "天神下凡",
          "破胆怒吼"
        ],
        "one": "他的爆发是明牌，你有一张专治明牌的牌。",
        "q": [
          [
            "<sk>剑在人在</sk>是高招架 + 减伤",
            "你的伤害以物理为主，<b>招架对你影响明显</b>。看到就等它过去。"
          ],
          [
            "他贴得上你",
            "战士没有真正的脱身手段，距离不是问题。"
          ],
          [
            "<b><sk>天神下凡</sk>是你的机会</b>",
            "他一交，你立刻<sk>业报之触</sk>——<b>这是全场最爽的一次反弹</b>。"
          ],
          [
            "等他先开",
            "别抢先手。战士的爆发明牌且集中，反弹的收益远大于你先手打出去的伤害。"
          ]
        ],
        "arena": "他交<sk>天神下凡</sk>那一刻就是你交<sk>业报之触</sk>的时刻。反弹一整套比你自己打两轮都值。",
        "duel": "单挑时他没有脱身手段，你有位移——耗到他冷却真空期再压。"
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
            "你没有撕免疫的手段，看到就停手换目标。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速",
            "<sk>怒雷破</sk>的 90% 减速对他效果有限。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你的伤害以物理为主，被保的目标几乎完全打不动</b>——立刻切目标。"
          ],
          [
            "先逼牌再谈杀人",
            "他的外部技能太多，每轮只逼一两个答案，记清楚他少了哪一个。"
          ]
        ],
        "arena": "<sk>保护祝福</sk>对踏风特别难受（你是物理伤害）。看到就换目标，别站着挥空。",
        "duel": "单挑就是等<sk>圣盾术</sk>。免疫期间保存冷却，等它走完再开完整一轮。"
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
            "免疫期间打他等于没打，转去打他队友。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "一个后跳一个脱战，<b>全场最难黏住的目标之一</b>。"
          ],
          [
            "<sk>怒雷破</sk>的减速是关键",
            "Turbo Fists 让它减速 90%。<b>贴上之后先用它把人钉住</b>，再谈伤害。"
          ],
          [
            "靠控制不靠追",
            "追猎人是徒劳的。<sk>扫堂腿</sk>要卡在他准备位移的那一刻。"
          ]
        ],
        "arena": "用<sk>怒雷破</sk>的 90% 减速钉住他，这是踏风对付风筝最有效的一手。",
        "duel": "单挑追不上就别追，等他贴上来输出时再<sk>扫堂腿</sk>。"
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
            "<sk>闪避</sk>对你影响大",
            "<b>你的伤害以物理为主，高闪避期间几乎全丢</b>——这是最容易白打的一段。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他随时能重置。追不上就转打他队友。"
          ],
          [
            "<sk>业报之触</sk>接他的爆发",
            "贼的爆发集中在一个窗口里，<b>反弹的收益很高</b>。"
          ],
          [
            "保命牌留在手上",
            "贼从潜行开局，别在他现身前把<sk>散魔功</sk>交掉。"
          ]
        ],
        "arena": "<sk>闪避</sk>期间转去打他队友，别硬扛。你是物理伤害，闪避对你接近全免。",
        "duel": "单挑时<sk>业报之触</sk>留给他的爆发窗口，贼一套打进反弹里基本就输了。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "拼控制",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸",
          "真言术：盾"
        ],
        "one": "你的减疗有限，所以要靠控制断他的手。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "都是短时间的，等它过去再压。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧会打断你的<sk>怒雷破</sk>引导，<b>这是这个对局最疼的一下</b>。"
          ],
          [
            "<sk>分筋错骨</sk>踢治疗",
            "把他控出战斗，比硬打穿他的治疗量现实得多。"
          ],
          [
            "打断优先于伤害",
            "<sk>切喉手</sk>冷却短，看到抬手就打断。"
          ]
        ],
        "arena": "<sk>分筋错骨</sk>把治疗踢出去，让队友集火另一个——踏风的减疗不够硬打穿。",
        "duel": "单挑要留一个位移躲<sk>心灵尖啸</sk>，恐惧断掉你的引导等于断掉半条命。"
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
        "one": "他抓得住你，你得靠位移和招架周旋。",
        "q": [
          [
            "<sk>冰封之韧</sk>大减伤 + 免疫昏迷",
            "<b>免疫昏迷意味着<sk>扫堂腿</sk>在这段时间是空的</b>，等它过去。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "死骑不跑，他抓你。<b>拉开距离对他没用</b>。"
          ],
          [
            "他的伤害是持续的",
            "死骑靠疫病持续压，<b>不是一波爆发</b>——<sk>业报之触</sk>反弹的收益比对战士低。"
          ],
          [
            "用招架吃他的近战",
            "<sk>怒雷破</sk>引导期间招架全部攻击，这在纯近战对局里很值。"
          ]
        ],
        "arena": "他的伤害是持续型的，<sk>业报之触</sk>换不到大反弹——留给<sk>天启</sk>那一波。",
        "duel": "单挑靠<sk>怒雷破</sk>的招架和减速周旋，死骑没有远程手段。"
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
            "停手，别把爆发砸进去。"
          ],
          [
            "地缚与减速",
            "萨满靠图腾拉开距离，<b>图腾是可以打掉的</b>。"
          ],
          [
            "先处理图腾",
            "你的范围技能顺手就能清关键图腾，收益常常大于继续砍人。"
          ],
          [
            "卡图腾冷却的空当",
            "他刚交完一轮图腾那段时间是你最好的窗口。"
          ]
        ],
        "arena": "<sk>神鹤引项踢</sk>顺手清图腾，别专门花时间去打——踏风的范围伤害够用。",
        "duel": "单挑等<sk>星界转移</sk>过去，那几秒用来攒层数不亏。"
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
            "撕不掉，等它自己结束。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "法师有一整套限制近战的手段，<b>你的位移要用在刀刃上</b>。"
          ],
          [
            "<sk>散魔功</sk>是关键牌",
            "法师是纯法系，<b>散魔功期间你几乎免疫他的伤害，还能把控制弹回去</b>。"
          ],
          [
            "不要追，要卡",
            "预判他要去哪，用<sk>滚地翻</sk>提前落点，比在后面跟着跑有效。"
          ]
        ],
        "arena": "<sk>散魔功</sk>要卡在他爆发那一刻——对纯法系阵容它比减伤值得多。",
        "duel": "单挑用<sk>怒雷破</sk>的减速黏住他，法师最怕的就是走不掉。"
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
        "one": "他用血换伤害，你要打得比他自愈快。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "恐惧与减速",
            "恐惧会断你的<sk>怒雷破</sk>引导，<b>这是最疼的一下</b>。"
          ],
          [
            "他的宠物",
            "宠物提供额外控制，顺手清掉能省不少麻烦。"
          ],
          [
            "压住不给喘息",
            "术士需要时间读条叠 DoT，<b>持续贴身比爆发窗口更能限制他</b>。"
          ]
        ],
        "arena": "留一个位移躲恐惧，别让引导被断。术士的恐惧是这个对局的胜负手。",
        "duel": "单挑靠<sk>业报之触</sk>接他的爆发，术士的伤害爆发起来很集中。"
      },
      {
        "id": "monk",
        "n": "武僧",
        "ic": "classicon_monk",
        "c": "#00FF98",
        "diff": "镜像",
        "cards": [
          "业报之触",
          "玄牛下凡",
          "气定神闲"
        ],
        "one": "镜像对局：谁先交业报谁被动。",
        "q": [
          [
            "<sk>业报之触</sk>互相克制",
            "<b>两边都有这张牌</b>。先交的那个把主动权让了出去。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "两边机动性一样，控制要卡准。"
          ],
          [
            "谁的层数攒得快",
            "镜像里胜负常常在<b>谁的 Teachings 层数先攒满</b>。"
          ],
          [
            "别抢先开",
            "先开的那个会撞上对面的业报。<b>等他先动</b>。"
          ]
        ],
        "arena": "镜像的核心是「谁先交业报」。忍住不先开，等他先动手。",
        "duel": "单挑纯拼耐心，先交<sk>业报之触</sk>的那个基本就输了半局。"
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
            "不是免疫，可以打但性价比低，等它过去。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能变形跑、能潜行重置。"
          ],
          [
            "<sk>怒雷破</sk>的减速",
            "90% 减速是你留住他的主要手段，<b>贴上就用</b>。"
          ],
          [
            "控他的形态切换",
            "<sk>扫堂腿</sk>卡在他要变形那一刻，比卡在满血时有用。"
          ]
        ],
        "arena": "用<sk>怒雷破</sk>钉住他，德鲁伊怕的不是伤害是走不掉。",
        "duel": "单挑追不上就守住位置，等他自己回来输出。"
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
        "one": "机动性跟你同级，比的是谁的控制先落地。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打，只是效率下降。"
          ],
          [
            "二段跳与冲刺",
            "<b>DH 的机动性和你同级</b>，这是少数你追得上的对局。"
          ],
          [
            "他的打断与沉默",
            "DH 有打断手段，<b>会断你的<sk>怒雷破</sk></b>——引导前先看他的打断在不在。"
          ],
          [
            "控制先落地的赢",
            "两边都灵活，<sk>扫堂腿</sk>先命中的那个拿走这一轮。"
          ]
        ],
        "arena": "引导<sk>怒雷破</sk>前先确认他的打断交掉了，否则整段会被断。",
        "duel": "单挑比控制先手，两边机动性同级，谁先控住谁赢。"
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
            "悬空期间近战完全够不着，等它落地。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离，<b>你的位移填不上这个差距</b>。"
          ],
          [
            "打断读条",
            "唤魔师有大量蓄力技能，<sk>切喉手</sk>在这个对局价值极高。"
          ],
          [
            "贴上就别松",
            "一旦脱开就很难再贴上，贴身期间把减速种满。"
          ]
        ],
        "arena": "<sk>悬空</sk>期间去处理别的目标，等他落地再用<sk>怒雷破</sk>钉住。",
        "duel": "单挑靠<sk>切喉手</sk>打断蓄力，唤魔师的伤害大半来自蓄力技能。"
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
      "s": "你刚落地，Teachings of the Monastery 一层都没有，<sk>风领主之击</sk>好着。",
      "a": "第一件事做什么？",
      "o": [
        "立刻<sk>风领主之击</sk>开爆发",
        "先用<sk>猛虎掌</sk>攒层",
        "交<sk>白虎下凡</sk>建立压力",
        "先<sk>扫堂腿</sk>控住对面"
      ],
      "r": 1,
      "e": [
        "层数是你伤害的地基。<b>一层都没有就开窗口，等于把爆发扔进空气</b>。",
        "正解。<sk>猛虎掌</sk>攒 Teachings 层数，<b>攒够了后面的爆发才有东西可打</b>。这跟死骑「先铺疫病」是同一类判断。",
        "<sk>白虎下凡</sk>放大你造成的伤害，你现在没伤害可放大。",
        "控制要卡在伤害落地的时候，开场交是浪费。"
      ],
      "k": "踏风的第一动作是攒层，不是开爆发。层数没到，窗口是空的。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "你准备引导<sk>怒雷破</sk>，对面战士的<sk>风暴之锤</sk>还在手上。",
      "a": "现在引导吗？",
      "o": [
        "引导，Turbo Fists 期间能招架攻击",
        "不引导，等他的硬控交掉",
        "引导，同时交<sk>业报之触</sk>保护",
        "先<sk>扫堂腿</sk>控住他再引导"
      ],
      "r": 1,
      "e": [
        "<b>招架挡的是攻击，挡不住控制</b>。一个昏迷下来整段引导作废。",
        "正解。<sk>怒雷破</sk>是你的伤害主体，<b>被打断整段就没了</b>。对面硬控刚交完那段时间，才是你安心引导的窗口。",
        "<sk>业报之触</sk>是反弹伤害的，不防控制，而且这样用等于浪费它的威慑价值。",
        "<sk>扫堂腿</sk>控住他之后引导是个思路，但控制有递减，为了引导一次就交掉太贵。"
      ],
      "k": "引导型技能开之前先问：对面的硬控在不在手上。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 3,
      "s": "对面战士交了<sk>天神下凡</sk>压上来，你血量还有 <em>80%</em>，<sk>业报之触</sk>好着。",
      "a": "什么时候交业报？",
      "o": [
        "现在就交，趁他整套爆发都在",
        "等血掉到 40% 左右再交，收益最大",
        "不交，用<sk>壮胆酒</sk>顶过去",
        "等他打完再交"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>业报之触</sk>换的是对面的整套爆发</b>——他全交撞进来等于替你打自己。现在交，反弹的是完整的一轮。",
        "等血掉下去，你只反弹到爆发的尾巴，前面那些伤害白挨了。",
        "<sk>壮胆酒</sk>只挡伤害，没换到任何东西。业报能把伤害还回去。",
        "他打完了你再交，反弹的是空气。"
      ],
      "k": "<sk>业报之触</sk>交在对面开爆发那一刻，不是你血低的时候。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "关于 Turbo Fists 这个 PvP 天赋。",
      "a": "它给<sk>怒雷破</sk>加了什么？",
      "o": [
        "提高伤害 90%",
        "减速所有目标 90%，且引导期间招架所有攻击",
        "缩短引导时间",
        "让它可以移动施放"
      ],
      "r": 1,
      "e": [
        "它不加伤害。",
        "正解。<b>50/50 全员必带</b>——它把一个纯输出技能变成攻防一体：一边打伤害，一边控场，一边挡近战。",
        "引导时间不变。",
        "<sk>怒雷破</sk>本身就能移动施放，不是这个天赋给的。"
      ],
      "k": "Turbo Fists 让<sk>怒雷破</sk>同时干三件事。这就是它 100% 使用率的原因。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "你和队友都开了爆发，对面治疗一直在读大治疗。你手上<sk>切喉手</sk>和<sk>分筋错骨</sk>都好着。",
      "a": "用哪个？",
      "o": [
        "<sk>分筋错骨</sk>，控住更久",
        "<sk>切喉手</sk>打断",
        "两个都用，确保断掉",
        "都不用，压伤害逼他交保命"
      ],
      "r": 1,
      "e": [
        "<sk>分筋错骨</sk>是长控，<b>该留给「把治疗踢出这一波战斗」的时候</b>，不是用来断一次读条。",
        "正解。<sk>切喉手</sk>冷却短，专门用来打断。<b>能用打断解决的别动长控</b>。",
        "两个叠一起纯浪费。",
        "大治疗读完，你和队友这一轮的伤害就被补回去了。"
      ],
      "k": "短冷却打断解决读条，长控留给需要把人踢出战斗的时候。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 1,
      "s": "踏风的属性优先级里，急速排在什么位置？",
      "a": "",
      "o": [
        "第一，出手越快越好",
        "最后，远低于精通和全能",
        "第二，仅次于精通",
        "和爆击并列第二"
      ],
      "r": 1,
      "e": [
        "急速在踏风这里几乎是废属性。",
        "正解。<b>精通 100 > 全能 82 > 爆击 11 > 急速 8</b>。踏风的伤害靠层数和窗口，不靠出手快——这是这个专精和多数近战不同的地方。",
        "第二是全能。",
        "爆击 11、急速 8，都在断崖之下。"
      ],
      "k": "踏风堆精通和全能。急速装备上带多少算多少，不为它换件。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 3,
      "s": "镜像对局，对面也是踏风武僧。两边都满状态。",
      "a": "先手该怎么处理？",
      "o": [
        "抢先开爆发，先手优势",
        "忍住不先开，等他先动",
        "先交<sk>业报之触</sk>威慑他",
        "先<sk>扫堂腿</sk>抢控制"
      ],
      "r": 1,
      "e": [
        "<b>先开的那个会撞上对面的<sk>业报之触</sk></b>——镜像里抢先手是把优势送出去。",
        "正解。两边都有业报，<b>谁先交谁被动</b>。忍住，等他先动手，那时候你的业报接住他的爆发。",
        "主动交业报等于告诉他「现在别打我」，他会等你的业报过去再开。",
        "控制有递减，开场交掉后面就没了。"
      ],
      "k": "两边都有反伤牌的镜像对局，耐心比手速值钱。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "对面法师开始拉扯，用冰环限制你。你手上<sk>散魔功</sk>好着。",
      "a": "这张牌在这个对局的价值是什么？",
      "o": [
        "降低受到的法术伤害，还能把有害效果弹回去",
        "提高你的移动速度",
        "免疫所有控制",
        "增加你的伤害"
      ],
      "r": 0,
      "e": [
        "正解。<b>法师是纯法系，<sk>散魔功</sk>期间你几乎免疫他的伤害</b>——而且能把身上的有害魔法效果弹回施法者，这在对法系时价值极高。",
        "它不加移动速度。",
        "它不是免疫控制，是降低法术伤害并反弹魔法效果。",
        "它是防御牌不是输出牌。"
      ],
      "k": "对纯法系阵容，抗法术的牌比通用减伤值得多。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "你的 Teachings 层数满了，<sk>风领主之击</sk>和<sk>白虎下凡</sk>都好着。",
      "a": "怎么交？",
      "o": [
        "两个叠在一起交",
        "错开交，打两段压力",
        "先<sk>白虎下凡</sk>，<sk>风领主之击</sk>留着",
        "只交<sk>风领主之击</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<sk>风领主之击</sk>开门授予层数、<sk>白虎下凡</sk>放大伤害，<b>叠在一起才是完整的一轮</b>。分开交每一段都不够疼。",
        "踏风的爆发是要叠的，错开等于两次半吊子。",
        "<sk>白虎下凡</sk>放大的是你造成的伤害，没有开门技能撑起来的输出量，放大也有限。",
        "层数已经满了，不用它也能打——但<sk>白虎下凡</sk>留着不用是浪费这个窗口。"
      ],
      "k": "踏风的爆发技能是互相放大的，要叠不要错开。这跟邪恶死骑相反。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "对面死骑开了<sk>冰封之韧</sk>（大减伤 + 免疫昏迷）。",
      "a": "你的<sk>扫堂腿</sk>还有用吗？",
      "o": [
        "有用，昏迷能打断他的输出",
        "没用，他免疫昏迷，等它过去",
        "有用，能触发 Stillstep Coil 的减速",
        "要看他血量"
      ],
      "r": 1,
      "e": [
        "他免疫昏迷，控不住。",
        "正解。<b><sk>冰封之韧</sk>期间免疫昏迷，<sk>扫堂腿</sk>交出去是纯浪费</b>——而且还吃了递减。等它过去。",
        "Stillstep Coil 的减速依附于扫堂腿命中并结束，控制没生效也就没有后续。",
        "跟血量无关，是免疫效果的问题。"
      ],
      "k": "对面开了免疫某类控制的牌，那类控制就该收起来，别硬交。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "你在 3v3，队友喊「我控住他们治疗了」。你的层数只有一半，<sk>风领主之击</sk>还有 8 秒。",
      "a": "怎么办？",
      "o": [
        "立刻全力输出，控制窗口最值钱",
        "等<sk>风领主之击</sk>好了再打",
        "边打边攒层，把伤害留到窗口",
        "退出来准备下一轮"
      ],
      "r": 0,
      "e": [
        "正解。<b>治疗被控的时间是伤害唯一不会被补回来的窗口</b>，比你自己的爆发窗口更稀缺。层数不满也要打，有多少打多少。",
        "等 8 秒，治疗早解控了。",
        "「攒层不打」在治疗被控的时候是最亏的——这段时间的伤害是净收益。",
        "控制窗口退出来，等于把队友的控制浪费掉。"
      ],
      "k": "治疗不在的时间 > 你的完美窗口。前者稀缺，后者会转回来。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "对面是双近战，你被两个人贴着打。你的 Grapple Weapon（缴械）在 PvP 天赋里。",
      "a": "这一格选得对吗？",
      "o": [
        "对，对面物理输出重时缴械价值高",
        "错，应该换成 Ride the Wind",
        "错，应该换成 Wind Waker",
        "看你自己的血量"
      ],
      "r": 0,
      "e": [
        "正解。<b>Grapple Weapon 缴械，对面伤害来自武器时才值</b>——双近战正是它的场景。32/50 的使用率说明它是看阵容的。",
        "Ride the Wind 是清减速和给队友铺路，对面双近战贴着你时用不上。",
        "Wind Waker 强化位移增益，同理。",
        "这一格看对面的伤害类型，不看你的血量。"
      ],
      "k": "缴械类天赋的价值 = 对面有多少伤害来自武器。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你引导<sk>怒雷破</sk>到一半，被对面恐惧打断了。",
      "a": "这一段损失了什么？",
      "o": [
        "只损失了剩余的伤害",
        "剩余伤害 + 减速控场 + 招架防御，三样一起断",
        "只损失了减速效果",
        "没什么损失，可以立刻重开"
      ],
      "r": 1,
      "e": [
        "损失不止伤害。",
        "正解。Turbo Fists 让<sk>怒雷破</sk>同时做三件事：<b>打伤害、减速全场、招架攻击</b>。被打断三样一起没了——这就是为什么开它之前要先看对面控制。",
        "减速只是其中一样。",
        "<sk>怒雷破</sk>有冷却，断了不能立刻重开。"
      ],
      "k": "一个技能承载的功能越多，被打断的损失越大。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "对面圣骑士给他队友上了<sk>保护祝福</sk>（免疫物理），那正是你打的目标。",
      "a": "怎么办？",
      "o": [
        "继续打，法术部分还能进",
        "立刻切目标",
        "用<sk>业报之触</sk>反弹",
        "控住圣骑士"
      ],
      "r": 1,
      "e": [
        "<b>踏风的伤害以物理为主</b>，被保的目标你几乎完全打不动——不像邪恶死骑那样还能进一部分。",
        "正解。物理免疫挂在目标身上时，唯一正确的动作是换目标，别站着挥空。",
        "<sk>业报之触</sk>是反弹你受到的伤害，跟目标免疫无关。",
        "控住骑士也解不掉已经生效的祝福。"
      ],
      "k": "先看清自己的伤害类型，再判断对面的免疫牌有多疼。踏风怕免疫物理的。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 3,
      "s": "局面僵持，你的<sk>白虎下凡</sk>刚转好，层数满了，但对面所有防御牌都在。",
      "a": "开不开？",
      "o": [
        "开，条件齐了就该打",
        "不开，等对面交掉一两张牌再说",
        "开，但只用普通输出不交大冷却",
        "换个目标试试"
      ],
      "r": 2,
      "e": [
        "防御牌全在的时候全交，伤害会被一层层吃掉。",
        "完全不动，你的层数会掉、冷却会空转。",
        "正解。<b>压上去逼牌，但把<sk>白虎下凡</sk>留着</b>——这一轮的目标是让他交牌，不是杀人。牌少了下一轮才有击杀窗口。",
        "换目标不解决「对面防御池满」这个问题。"
      ],
      "k": "对面牌全在的时候，这一轮的目标是逼牌。大冷却留给牌变少之后。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "Teachings of the Monastery 层数是靠什么攒的？",
      "a": "",
      "o": [
        "<sk>猛虎掌</sk>",
        "<sk>幻灭踢</sk>",
        "<sk>怒雷破</sk>",
        "自动攻击"
      ],
      "r": 0,
      "e": [
        "正解。<sk>猛虎掌</sk>攒层，<sk>幻灭踢</sk>消耗层数额外打击。<b>攒和花是两个技能，别搞反。</b>",
        "<sk>幻灭踢</sk>是消耗层数的那个。",
        "<sk>怒雷破</sk>是引导输出，不攒这个层。",
        "自动攻击攒的是 Flurry Charges（影踏线），不是 Teachings。"
      ],
      "k": "<sk>猛虎掌</sk>攒、<sk>幻灭踢</sk>花。这是踏风循环的基本节拍。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "对面猎人一直风筝你，你追不上。",
      "a": "踏风怎么处理？",
      "o": [
        "用位移一路追",
        "贴上之后用<sk>怒雷破</sk>的 90% 减速钉住他",
        "放弃他换目标",
        "等队友控住他"
      ],
      "r": 1,
      "e": [
        "猎人的位移比你多，一路追是徒劳的。",
        "正解。<b>Turbo Fists 让<sk>怒雷破</sk>减速 90%</b>——这是踏风对付风筝最有效的一手。贴上去第一件事就是用它把人钉住。",
        "换目标可以考虑，但你手上有专门的解法没用。",
        "被动等队友，主动权就没了。"
      ],
      "k": "踏风黏人靠<sk>怒雷破</sk>的减速，不靠位移追。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "你的<sk>业报之触</sk>刚交掉，对面看到之后停手不打你了。",
      "a": "这算浪费吗？",
      "o": [
        "算，没反弹到伤害就是白交",
        "不算，你换到了他一个爆发周期的犹豫",
        "算，应该等他打了再交",
        "看他停手多久"
      ],
      "r": 1,
      "e": [
        "「没反弹到伤害」不等于没收益。",
        "正解。<b><sk>业报之触</sk>的价值一部分在威慑</b>——对面因为忌惮而不敢开，你就白赚了一个冷却周期。这跟战士的<sk>天神下凡</sk>是明牌同理，只是方向相反。",
        "等他打了再交，你已经挨了前半段伤害。",
        "停手多久是结果，判断的依据是「他有没有因此改变打法」。"
      ],
      "k": "有些牌交出去的价值在于改变对手的决策，不在于它挡了多少伤害。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 3,
      "s": "你点了 Ironshell Brew（<sk>壮胆酒</sk>期间额外 +10% 血上限、−10% 受伤）。这局你不是集火目标。",
      "a": "这一格选得怎么样？",
      "o": [
        "很好，减伤永远有用",
        "一般，你不是集火目标，换成输出更实在",
        "很好，能保护队友",
        "不好，应该完全不点防御天赋"
      ],
      "r": 1,
      "e": [
        "「永远有用」忽略了机会成本——这一点本可以换成伤害。",
        "正解。<b>它把<sk>壮胆酒</sk>从「一般减伤」变成「真扛得住一波」，前提是你会挨那一波</b>。你不是集火目标的话，这一点大部分时间不动。",
        "<sk>壮胆酒</sk>是自保，不保护队友。",
        "完全不点防御也不对——是这一格在这局不对症，不是防御没用。"
      ],
      "k": "防御天赋的价值 = 你这局会不会挨打。不是集火目标就该换输出。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "你和队友的爆发都好了，但你的层数还差一半。",
      "a": "先做什么？",
      "o": [
        "立刻一起开，抢时间",
        "先花几秒把层数攒满再一起开",
        "自己先开，队友随后",
        "让队友先开"
      ],
      "r": 1,
      "e": [
        "层数不满就开，你这一轮的伤害会明显缩水，队友的爆发也白配合。",
        "正解。<b>几秒的准备换整轮的伤害</b>。踏风的爆发要靠层数撑，这是开窗口前的必要动作。",
        "错开开等于两段都不够疼——踏风的爆发是要叠的。",
        "同理，配合的价值就在同时落地。"
      ],
      "k": "配合的前提是双方都准备好了。层数不满就开，是浪费两个人的冷却。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "对面唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "这段时间做什么？",
      "o": [
        "原地等他落地",
        "去处理别的目标，同时攒层",
        "用远程技能打他",
        "换目标彻底放弃他"
      ],
      "r": 1,
      "e": [
        "干等浪费时间。",
        "正解。<b>悬空期间近战完全够不着</b>，这段时间去打他队友或者攒层，等他落地再用<sk>怒雷破</sk>钉住。",
        "踏风没有能有效打到空中目标的远程手段。",
        "彻底放弃太绝对——他会落地的。"
      ],
      "k": "够不着的时候做能做的事：攒层、打别人、准备接他落地。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "对面是双法系（法师 + 术士），你在选 PvP 天赋第三格。",
      "a": "Grapple Weapon（缴械）值得带吗？",
      "o": [
        "值得，缴械永远有用",
        "不值得，对面伤害不来自武器",
        "值得，能打断施法",
        "看你自己的输出够不够"
      ],
      "r": 1,
      "e": [
        "缴械的价值完全取决于对面的伤害来源。",
        "正解。<b>Grapple Weapon 缴械，对面伤害来自武器时才值</b>。双法系阵容里这一格是空的，应该换成 Ride the Wind 或 Wind Waker。",
        "缴械不打断施法。",
        "这一格看对面阵容，不看你的输出。"
      ],
      "k": "看阵容换的天赋，判据永远在对面身上，不在自己身上。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你的<sk>怒雷破</sk>正在引导，对面近战在打你。",
      "a": "这段时间你的防御状态是什么？",
      "o": [
        "没有额外防御",
        "招架所有攻击（Turbo Fists）",
        "免疫所有伤害",
        "受到的伤害降低 50%"
      ],
      "r": 1,
      "e": [
        "Turbo Fists 给了防御效果。",
        "正解。<b>引导<sk>怒雷破</sk>期间你招架所有攻击</b>——这在纯近战对局里价值很高，等于一段免费的防御时间。",
        "不是免疫，是招架（挡的是近战攻击）。",
        "不是减伤，是招架。"
      ],
      "k": "<sk>怒雷破</sk>在近战对局里是攻防一体的一段，别只当它是输出技能。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "对面武僧开了<sk>业报之触</sk>，你正在打他。",
      "a": "该做什么？",
      "o": [
        "继续打，反弹量不大",
        "立刻停手，等它过去",
        "交自己的<sk>业报之触</sk>对冲",
        "用<sk>扫堂腿</sk>控住他"
      ],
      "r": 1,
      "e": [
        "你打得越狠反噬越重，<b>这是最容易自杀的一张对面牌</b>。",
        "正解。停手等它过去。镜像对局里这张牌互相克制，谁先撞上去谁吃亏。",
        "业报不能对冲，交出去只是浪费自己的牌。",
        "控住他，业报照样在走，等控制结束它可能还剩着。"
      ],
      "k": "遇到反伤牌，停手是唯一正确的动作——包括镜像对局。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到踏风的 PvP 天赋分布：Turbo Fists 50/50，另外三个是 35/32/30，分得很匀。",
      "a": "这说明什么？",
      "o": [
        "top50 的配点很随意",
        "第一格没得选，另两格是真的看阵容",
        "应该都带使用率最高的三个",
        "数据样本不够"
      ],
      "r": 1,
      "e": [
        "能进 top50 的配点不会随意。",
        "正解。<b>50/50 说明第一格没有讨论余地，而 35/32/30 分得这么匀，说明后两格没有标准答案</b>——它们跟着对面阵容换。这跟英雄天赋 48/2 的一边倒形成对比。",
        "三个加起来是 97 个选择，但只有两格（100 个位置）——照抄「最高的三个」在数学上就不成立。",
        "50 人样本和其他专精一样。"
      ],
      "k": "看使用率分布的形状：压倒性的那格没得选，分得匀的那几格才是要你判断的。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "对面战士交了<sk>天神下凡</sk>压上来。",
      "a": "最该做的是什么？",
      "o": [
        "交<sk>壮胆酒</sk>硬扛",
        "立刻<sk>业报之触</sk>",
        "拉开距离等他冷却",
        "对拼爆发"
      ],
      "r": 1,
      "e": [
        "<sk>壮胆酒</sk>只挡伤害，没换到东西。",
        "正解。<b>战士的爆发明牌且集中，这是全场最爽的一次反弹</b>——他整套撞进业报里，等于替你打自己。",
        "战士贴得上你，拉不开。",
        "对拼是拿你的持续输出比他的集中爆发。"
      ],
      "k": "对爆发明牌且集中的对手，反伤牌的收益最大化。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "对面战士开了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "对踏风影响大吗？",
      "o": [
        "很大，你的伤害以物理为主，招架挡得住",
        "影响小，你的伤害是法术",
        "完全免疫",
        "只影响你的自动攻击"
      ],
      "r": 0,
      "e": [
        "正解。<b>踏风的伤害以物理为主，招架对你影响明显</b>——这跟邪恶死骑（暗影伤害不吃招架）不同。看到就等它过去。",
        "踏风有法术伤害成分，但主体是物理。",
        "不是免疫，是招架 + 减伤。",
        "不只自动攻击，你的技能大多也是物理。"
      ],
      "k": "先认清自己的伤害类型，才知道对面哪张防御牌最疼。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给队友上了<sk>保护祝福</sk>，那是你的目标。",
      "a": "踏风受影响多大？",
      "o": [
        "几乎完全打不动，必须换目标",
        "影响不大，法术伤害能进",
        "只影响自动攻击",
        "可以用<sk>业报之触</sk>绕过"
      ],
      "r": 0,
      "e": [
        "正解。<b>踏风伤害以物理为主，物理免疫等于完全打不动</b>——立刻换目标，别站着挥空。",
        "踏风的法术伤害占比不足以支撑输出。",
        "不只自动攻击。",
        "业报是反弹你受到的伤害，跟目标免疫无关。"
      ],
      "k": "物理免疫对物理专精是完全无效，别用「多少能进一点」安慰自己。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士交了<sk>圣盾术</sk>，你的爆发窗口还剩几秒。",
      "a": "怎么办？",
      "o": [
        "继续打，多少能进一点",
        "转去打他队友",
        "停手保存冷却",
        "交<sk>业报之触</sk>"
      ],
      "r": 1,
      "e": [
        "<sk>圣盾术</sk>是完全免疫，打进去是 0。",
        "正解。<b>窗口在燃烧，目标打不动就换人</b>——你的爆发加成对他队友一样生效。",
        "完全停手会让窗口空转。",
        "业报跟对面免疫无关。"
      ],
      "k": "窗口里遇到免疫必须换目标，不能停也不能硬打。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "你刚贴上猎人，他还没开始跑。",
      "a": "第一件事做什么？",
      "o": [
        "开爆发抢输出",
        "用<sk>怒雷破</sk>把他减速钉住",
        "先<sk>扫堂腿</sk>控住",
        "攒层数"
      ],
      "r": 1,
      "e": [
        "他一跑你就够不着，爆发白开。",
        "正解。<b>Turbo Fists 的 90% 减速是踏风黏人的主要手段</b>，贴上第一件事就是钉住他。",
        "控制要卡在他准备位移那一刻，开场交是浪费。",
        "层数该在贴上之前就攒好。"
      ],
      "k": "对机动性强的目标，先钉住再谈伤害。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人开了<sk>灵龟守护</sk>（免疫伤害），你的窗口还剩 5 秒。",
      "a": "怎么办？",
      "o": [
        "继续打",
        "转去打他队友",
        "停手等免疫结束",
        "控住他"
      ],
      "r": 1,
      "e": [
        "免疫期间打他是 0。",
        "正解。窗口在燃烧，换目标。",
        "干等把窗口烧完了。",
        "控一个免疫状态的目标没有意义。"
      ],
      "k": "免疫不是「伤害变少」，是等于 0。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>闪避</sk>（大幅提升躲闪）。",
      "a": "对踏风影响大吗？",
      "o": [
        "很大，你的物理伤害几乎全丢",
        "影响小，你是法术伤害",
        "完全没影响",
        "只影响技能不影响自动攻击"
      ],
      "r": 0,
      "e": [
        "正解。<b>踏风伤害以物理为主，高闪避期间几乎全丢</b>——这是最容易白打的一段，转去打他队友。",
        "踏风主体是物理伤害。",
        "影响很大。",
        "自动攻击和技能都受影响。"
      ],
      "k": "高闪避对物理专精约等于免疫。别用「打几下总能中」安慰自己。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 3,
      "s": "贼从潜行开局，你不知道他什么时候动手。",
      "a": "开打前该做什么？",
      "o": [
        "到处走动找他",
        "站好位，把<sk>散魔功</sk>和<sk>业报之触</sk>留在手上",
        "提前开<sk>壮胆酒</sk>",
        "贴着治疗站"
      ],
      "r": 1,
      "e": [
        "找贼是徒劳的，还会脱离队友。",
        "正解。<b>开场主动权不在你</b>，能做的是留牌。尤其<sk>业报之触</sk>——贼的爆发集中，反弹收益很高。",
        "提前开<sk>壮胆酒</sk>，他现身时早过期了。",
        "贴着治疗是对的位置，但这题的核心是「留牌」。"
      ],
      "k": "对手决定开场时机时，你的准备动作是留牌，不是提前交。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 3,
      "s": "对面牧师治疗，你的队伍打不穿他的治疗量。",
      "a": "踏风该怎么办？",
      "o": [
        "提高输出硬打穿",
        "<sk>分筋错骨</sk>把治疗踢出战斗",
        "用<sk>业报之触</sk>",
        "一直控住他"
      ],
      "r": 1,
      "e": [
        "踏风的减疗有限，硬打穿治疗量不现实。",
        "正解。<b>把治疗踢出这一波战斗，让队友集火另一个</b>——这比硬打穿他的治疗量现实得多。",
        "业报是反弹伤害的，对治疗没用。",
        "控制有递减，撑不满全场。"
      ],
      "k": "减疗不够的专精，靠控制把治疗踢出去，不靠打穿。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "你正在引导<sk>怒雷破</sk>，牧师放<sk>心灵尖啸</sk>。",
      "a": "这一下的损失是什么？",
      "o": [
        "只是被恐惧了几秒",
        "整段引导作废：伤害、减速、招架三样一起断",
        "只损失了伤害",
        "没什么损失"
      ],
      "r": 1,
      "e": [
        "损失远不止几秒。",
        "正解。<b>Turbo Fists 让怒雷破同时做三件事，被打断三样一起没</b>——这是这个对局最疼的一下。所以要留一个位移躲恐惧。",
        "不只伤害。",
        "损失很大。"
      ],
      "k": "引导前先想：对面有什么能打断我，我拿什么躲。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "对面死骑开了<sk>冰封之韧</sk>。",
      "a": "你的<sk>扫堂腿</sk>该怎么处理？",
      "o": [
        "立刻交，趁他减伤时控住",
        "收起来，他免疫昏迷",
        "交了能触发减速",
        "看他血量"
      ],
      "r": 1,
      "e": [
        "<b>冰封之韧免疫昏迷</b>，交出去控不住还吃递减。",
        "正解。等它过去。控制类技能遇到对应免疫就该收起来。",
        "控制没生效，后续效果也不会触发。",
        "跟血量无关。"
      ],
      "k": "对面开了免疫某类控制的牌，那类控制就收起来。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "对上邪恶死骑，你在考虑<sk>业报之触</sk>什么时候交。",
      "a": "和对战士有什么不同？",
      "o": [
        "一样，看到他开爆发就交",
        "死骑伤害是持续型的，反弹收益比对战士低",
        "死骑没有爆发，不用交",
        "应该开场就交"
      ],
      "r": 1,
      "e": [
        "死骑的伤害构成跟战士不同。",
        "正解。<b>死骑靠疫病持续压，不是一波集中爆发</b>——业报反弹的收益比对战士低。留给他<sk>天启</sk>那一波。",
        "死骑有爆发窗口（<sk>天启</sk>），只是不如战士集中。",
        "开场交是浪费。"
      ],
      "k": "反伤牌的收益取决于对手伤害有多集中。持续型对手收益低。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满放下一组图腾，包括治疗图腾。",
      "a": "踏风怎么处理？",
      "o": [
        "无视图腾直接打人",
        "用<sk>神鹤引项踢</sk>顺手清掉",
        "专门花时间打图腾",
        "控住萨满"
      ],
      "r": 1,
      "e": [
        "治疗图腾不管，你的伤害一直在被抵消。",
        "正解。<b>你的范围技能顺手就能清</b>，不用额外花动作——这是踏风处理图腾的优势。",
        "专门花时间打图腾，输出节奏就断了。顺手清才对。",
        "控住他不解决已经落地的图腾。"
      ],
      "k": "有范围技能的专精处理地面资源，顺手清就行，不用专门花时间。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "该做什么？",
      "o": [
        "停手，别把爆发砸进去",
        "继续打，减伤不是免疫",
        "交爆发压过去",
        "控住他"
      ],
      "r": 0,
      "e": [
        "正解。<sk>星界转移</sk>是完全免疫，<b>停手，这几秒用来攒层数不亏</b>。",
        "它是免疫不是减伤。",
        "往免疫里砸爆发是最亏的操作。",
        "免疫期间控制也进不去。"
      ],
      "k": "免疫期间停手，但可以做别的事：攒层、走位、等冷却。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，你的<sk>散魔功</sk>什么时候交？",
      "a": "",
      "o": [
        "一开场就交",
        "卡在他开爆发那一刻",
        "血低了再交",
        "不交，留着保命"
      ],
      "r": 1,
      "e": [
        "开场交，他爆发时早过期了。",
        "正解。<b>法师是纯法系，<sk>散魔功</sk>期间你几乎免疫他的伤害</b>，还能把控制弹回去——要卡在他爆发那一刻。",
        "血低了才交，前面的伤害白挨了。",
        "留着不用等于没有这张牌。"
      ],
      "k": "抗法术的牌对纯法系阵容要主动卡时机，不是保命用。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师用冰环限制你然后闪现拉开。",
      "a": "踏风怎么追？",
      "o": [
        "用<sk>滚地翻</sk>一路追",
        "贴上之后用<sk>怒雷破</sk>钉住",
        "放弃他",
        "等他自己回来"
      ],
      "r": 1,
      "e": [
        "一路追，他再闪现你又空了。",
        "正解。<b>法师最怕的是走不掉</b>——贴上去用 Turbo Fists 的 90% 减速钉住他，比反复追有效得多。",
        "法师是主要威胁，不能放弃。",
        "法师不会自己回来。"
      ],
      "k": "对拉扯型对手，「钉住」比「追上」重要。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士放<sk>恐惧</sk>，你正准备引导<sk>怒雷破</sk>。",
      "a": "该怎么应对？",
      "o": [
        "吃了恐惧，回来再引导",
        "用位移躲开，保住引导",
        "继续引导，招架能挡住",
        "交<sk>业报之触</sk>"
      ],
      "r": 1,
      "e": [
        "引导被断，伤害、减速、招架三样一起没。",
        "正解。<b>留一个位移躲恐惧</b>——术士的恐惧是这个对局的胜负手，断掉你的引导等于断掉半条命。",
        "招架挡攻击不挡控制。",
        "业报不防控制。"
      ],
      "k": "知道对面有什么能断你，就要预留躲避手段。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士一直靠吸血把血线拉回去。",
      "a": "踏风怎么压？",
      "o": [
        "提高爆发打得比他回得快",
        "持续贴身不给他读条时间",
        "用<sk>业报之触</sk>",
        "控住他不让他吸血"
      ],
      "r": 1,
      "e": [
        "单纯拼输出很难赢过持续自愈。",
        "正解。<b>术士需要时间读条叠 DoT，持续贴身比爆发窗口更能限制他</b>。",
        "业报是反弹伤害，不影响他的自愈。",
        "控制有递减，撑不满。"
      ],
      "k": "对需要读条准备的对手，持续压制比等窗口有效。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "镜像对局，两边都满状态，都有<sk>业报之触</sk>。",
      "a": "谁该先动手？",
      "o": [
        "你先，抢先手优势",
        "忍住等他先动",
        "同时开，对冲",
        "看谁层数先满"
      ],
      "r": 1,
      "e": [
        "先开的会撞上对面的业报。",
        "正解。<b>镜像的核心是「谁先交业报」</b>——忍住不先开，等他动手，你的业报接住他的爆发。",
        "业报不能对冲。",
        "层数是次要的，业报的博弈才是主线。"
      ],
      "k": "两边都有反伤牌时，耐心比手速值钱。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "对面武僧开了<sk>业报之触</sk>，你的爆发窗口正好到了。",
      "a": "开不开？",
      "o": [
        "开，窗口不等人",
        "不开，等业报过去",
        "开一半，试探反应",
        "交自己的业报"
      ],
      "r": 1,
      "e": [
        "往业报里砸整套爆发是最容易自杀的操作。",
        "正解。<b>停手等它过去</b>，几秒的耐心换一整个窗口。这段时间攒层数不亏。",
        "「开一半」在反伤面前没有意义，打多少弹多少。",
        "业报不能对冲。"
      ],
      "k": "反伤面前停手，不管你的窗口多好。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊要切<sk>旅行形态</sk>跑掉。",
      "a": "踏风怎么留人？",
      "o": [
        "<sk>扫堂腿</sk>卡在他变形那一刻",
        "用<sk>怒雷破</sk>减速",
        "等他变完形再控",
        "放弃追击"
      ],
      "r": 0,
      "e": [
        "正解。<b>硬控卡在他要变形那一刻</b>，打断他的节奏——这比变形之后再想办法有效得多。",
        "减速拦不住形态切换带来的位移。",
        "变完形他已经跑开了。",
        "德鲁伊是能追的，只是要用对手段。"
      ],
      "k": "控制的价值在打断对手的关键动作，不在「先控住再说」。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊开了<sk>树皮术</sk>，你的窗口刚开。",
      "a": "继续打还是停？",
      "o": [
        "停手，等它过去",
        "继续普通输出，但把大冷却留着",
        "继续全力输出",
        "换目标"
      ],
      "r": 1,
      "e": [
        "<sk>树皮术</sk>是减伤不是免疫，完全停手太保守。",
        "正解。<b>可以硬打但性价比低</b>——普通输出继续走，<sk>白虎下凡</sk>这类大冷却留到它过去。",
        "全力输出会把大冷却喂进减伤里。",
        "换目标是选项，但德鲁伊本身难黏，主动放走更亏。"
      ],
      "k": "减伤面前不用停手，但要停「大冷却」。这跟免疫的处理不同。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "对上恶魔猎手，你准备引导<sk>怒雷破</sk>。",
      "a": "先要确认什么？",
      "o": [
        "他的血量",
        "他的打断在不在手上",
        "他的位移",
        "自己的层数"
      ],
      "r": 1,
      "e": [
        "血量不影响你能不能引导完。",
        "正解。<b>DH 有打断手段，会断你的<sk>怒雷破</sk></b>——引导前先看他的打断交掉没有。",
        "位移不影响引导。",
        "层数重要，但这题问的是引导安全。"
      ],
      "k": "引导前先确认对面的打断状态，这是所有引导型技能的通用判断。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 的机动性和你差不多，两边都很灵活。",
      "a": "这个对局的胜负手在哪？",
      "o": [
        "谁的伤害高",
        "谁的控制先落地",
        "谁的血量厚",
        "谁先开爆发"
      ],
      "r": 1,
      "e": [
        "两边输出接近，伤害不是决定性的。",
        "正解。<b>两边机动性同级，<sk>扫堂腿</sk>先命中的那个拿走这一轮</b>——这是少数你追得上对手的对局，比的是控制先手。",
        "血量不是胜负手。",
        "先开爆发反而可能撞上对面的应对。"
      ],
      "k": "机动性同级的对局，控制先落地的赢。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "踏风该做什么？",
      "o": [
        "<sk>切喉手</sk>打断",
        "继续输出",
        "交防御牌准备扛",
        "拉开距离"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能，<sk>切喉手</sk>在这个对局价值极高</b>——打断一次抵消一大段伤害。",
        "让他放完，你的血线会很难看。",
        "能打断就别硬扛。",
        "拉开距离正合他意。"
      ],
      "k": "对蓄力型对手，短冷却打断该用就用。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>脱离，你在地面。",
      "a": "这段时间做什么？",
      "o": [
        "原地等",
        "攒层数，准备他落地时用<sk>怒雷破</sk>钉住",
        "用远程打他",
        "彻底换目标"
      ],
      "r": 1,
      "e": [
        "干等浪费时间。",
        "正解。<b>悬空期间够不着，但你可以攒层</b>——落地那一刻用减速钉住他，接上完整的一轮。",
        "踏风没有有效的远程手段。",
        "他会落地，彻底换目标太早。"
      ],
      "k": "够不着的时候做准备动作，等他回到你能打的范围。"
    }
  ]
};
