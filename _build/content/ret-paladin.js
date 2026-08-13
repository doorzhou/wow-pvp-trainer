module.exports = {
  "meta": {
    "title": "惩戒骑 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 惩戒骑士 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "惩戒骑,圣骑士,PVP,竞技场,魔兽世界,12.1,Midnight,retribution paladin,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你手上有全游戏最厚的一叠外部保护牌。<br>惩戒骑的活不只是打伤害，是决定这一波谁死不了。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"保护祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofprotection.jpg\" alt=\"保护祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"牺牲祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofsacrifice.jpg\" alt=\"牺牲祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"圣盾术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_divineshield.jpg\" alt=\"圣盾术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？你的价值一半在队友身上</span><span class=\"sub\">三张外部牌，每张救的场景都不同</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>保护祝福</sk>免疫物理、<sk>牺牲祝福</sk>把队友的伤害转到你身上、<sk>圣盾术</sk>保自己。<b>这三张牌的存在意味着：对面要杀你的队友，得先算清楚你手上还剩几张。</b></p><p style=\"margin-top:8px\">所以惩戒骑的判断跟纯输出专精不一样——<b>你既要看自己的爆发窗口，也要看队友的血线</b>。牌交早了后面没得救，交晚了人已经倒了。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">惩戒骑的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"复仇之怒\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_avenginewrath.jpg\" alt=\"复仇之怒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>复仇之怒</sk></span><span class=\"sub\">伤害治疗爆击一起提高</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>24 秒内伤害、治疗和爆击几率同时提高。<b>它不只是输出冷却，也放大你的自保和外部治疗。</b></p><p style=\"margin-top:8px\">这意味着它的开法比纯输出职业灵活：<b>需要拼输出时当爆发用，需要扛一波时当续航用。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灰烬觉醒\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_sword_2h_artifactashbringerfire_d_03.jpg\" alt=\"灰烬觉醒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">资源时钟 · <sk>灰烬觉醒</sk></span><span class=\"sub\">一次给你三点神圣能量</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>猛击前方敌人并生成 3 点神圣能量，同时施加持续伤害。<b>它是惩戒开窗口的启动键。</b></p><p style=\"margin-top:8px\">神圣能量是惩戒所有大招的燃料——<b>能量不够，窗口里按不出东西</b>。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"保护祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofprotection.jpg\" alt=\"保护祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"牺牲祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofsacrifice.jpg\" alt=\"牺牲祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">外部牌时钟 · 你能救几次</span><span class=\"sub\">这是队友最在意的数字</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>保护祝福</sk>（免物理，20 秒 Forbearance）、<sk>牺牲祝福</sk>（转移伤害到你身上）。</p><p style=\"margin-top:8px\"><b>Forbearance 是关键限制</b>：用了保护祝福，同一个人短时间内不能再吃<sk>圣疗术</sk>或再来一次保护。所以「给谁、什么时候给」是这个专精最重的判断。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"复仇之怒\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_avenginewrath.jpg\" alt=\"复仇之怒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：晨光使者 Herald of the Sun</span><span class=\"sub\">top50 里 50 人全走，圣殿武士 0 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>晨光使者（Herald of the Sun）50/50</b>，圣殿武士（Templar）是 <b>0</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线围绕 Dawnlight 展开——神圣能量消耗技能给目标挂持续伤害或治疗，<b>顺带强化了你「一边输出一边奶」的定位</b>。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"庇护祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_greaterblessingofsanctuary.jpg\" alt=\"庇护祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：两格接近必带，一格看阵容</span><span class=\"sub\">庇护祝福 + Hallowed Ground 几乎固定</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>庇护祝福</sk>（50/50）—— 全员必带。<b>立刻移除队友身上的昏迷、沉默、恐惧，并在随后几秒大幅削弱同类效果</b>，这是全游戏最强的解控牌之一。</p><p style=\"margin-top:8px\"><b>Hallowed Ground</b>（49/50）—— 奉献清除并压制范围内友方的减速。<b>Blessing of Spellwarding</b>（28/50）—— 免疫魔法版的保护祝福，对面法系重时换上。<b>Searing Glare</b>（14/50）—— 范围致盲。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">三格 50 人 = 150 个选择，上面四项占了其中 141 个。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"审判\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_righteousfury.jpg\" alt=\"审判\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"灰烬觉醒\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_sword_2h_artifactashbringerfire_d_03.jpg\" alt=\"灰烬觉醒\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"圣殿骑士的裁决\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_paladin_templarsverdict.jpg\" alt=\"圣殿骑士的裁决\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"审判\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_righteousfury.jpg\" alt=\"审判\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"灰烬觉醒\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_sword_2h_artifactashbringerfire_d_03.jpg\" alt=\"灰烬觉醒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 先攒神圣能量，再谈爆发</span><span class=\"sub\">能量不够窗口按不出东西</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>审判</sk>、<sk>十字军打击</sk>、<sk>公正之剑</sk>攒能量，<sk>灰烬觉醒</sk>一次给 3 点。</p><p style=\"margin-top:8px\"><b>神圣能量是所有大招的燃料</b>。开<sk>复仇之怒</sk>之前先看能量够不够，不然窗口前几秒全在攒资源。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"保护祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofprotection.jpg\" alt=\"保护祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · Forbearance：这个专精最重要的机制</span><span class=\"sub\">一次保护封掉后续所有大保</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>保护祝福</sk>会给目标 20 秒 Forbearance，<b>期间不能再用<sk>圣疗术</sk>或再来一次保护</b>。</p><p style=\"margin-top:8px\">所以判断不是「他现在危不危险」，是<b>「后面还会不会有更危险的那一下」</b>。提前交掉，真正的击杀波来了就没牌了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"庇护祝福\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_greaterblessingofsanctuary.jpg\" alt=\"庇护祝福\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>庇护祝福</sk>留给控制链，不留给单个控制</span><span class=\"sub\">它还压制后续同类效果</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>立刻移除昏迷、沉默、恐惧，<b>并在随后几秒把同类效果的持续时间大幅削短</b>。</p><p style=\"margin-top:8px\"><b>这后半段才是它真正的价值</b>——对面一套控制链打过来，用它拆掉的不是一个控制，是整条链。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"复仇之怒\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_avenginewrath.jpg\" alt=\"复仇之怒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · <sk>复仇之怒</sk>可以当输出开，也可以当续航开</span><span class=\"sub\">它同时放大伤害和治疗</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>24 秒内伤害、治疗、爆击一起提高。<b>大多数职业的爆发冷却只有一个用途，它有两个。</b></p><p style=\"margin-top:8px\">队伍被压着打的时候开它续航，是完全成立的用法——不要因为「它是输出冷却」就只在进攻时交。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"制裁之锤\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_sealofmight.jpg\" alt=\"制裁之锤\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"盲目之光\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_paladin_blindinglight.jpg\" alt=\"盲目之光\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 控制卡在伤害落地那一刻</span><span class=\"sub\">两个控制走不同递减</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>制裁之锤</sk>昏迷、<sk>盲目之光</sk>范围致盲，<b>走不同的递减</b>。</p><p style=\"margin-top:8px\"><sk>盲目之光</sk>是范围的，<b>对面挤在一起时价值最高</b>——但它也容易误伤自己队伍的控制节奏，先看清位置。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"圣盾术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_divineshield.jpg\" alt=\"圣盾术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"圣佑术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_holy_divineprotection.jpg\" alt=\"圣佑术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 自保三张牌的分工</span><span class=\"sub\">什么时候用哪张</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>圣盾术</sk>全免疫但给 Forbearance、<sk>圣佑术</sk>短减伤、<sk>圣疗术</sk>大治疗（同样给 Forbearance）。</p><p style=\"margin-top:8px\"><b>先用不带 Forbearance 的那张</b>（圣佑术），把带 Forbearance 的留到真的要死的时候——顺序反了会把自己的后路封死。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">Forbearance 决定你还剩几张牌</div><div class=\"dd\"><sk>保护祝福</sk>和<sk>圣疗术</sk>共享这个限制。交早了，真正的击杀波来了没得救。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\"><sk>庇护祝福</sk>拆的是控制链不是单个控制</div><div class=\"dd\">它的后半段（压制同类效果）才是价值所在。别用它解一个孤立的昏迷。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\"><sk>复仇之怒</sk>有两个用途</div><div class=\"dd\">伤害和治疗一起放大。被压着打的时候开它续航，跟进攻时开一样成立。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 谁是对面的击杀目标？</b><sk>保护祝福</sk>要留给他，而且要留到<b>真正的击杀波</b>，不是第一次危险。</p><p style=\"margin-top:8px\"><b>2 · 对面法系多还是物理多？</b>决定 PvP 天赋第三格：Blessing of Spellwarding（免魔法）还是别的。</p><p style=\"margin-top:8px\"><b>3 · 对面的控制链长什么样？</b><sk>庇护祝福</sk>要拆的是整条链，所以要知道链条从哪个技能开始。</p></div><div class=\"sc\"><h4>Forbearance 会封掉哪些牌</h4><p><sk>保护祝福</sk>、<sk>圣疗术</sk>、<sk>圣盾术</sk>都受它约束（圣盾术有天赋可以绕过）。</p><p style=\"margin-top:8px\"><b>判断顺序</b>：先用不带 Forbearance 的（<sk>圣佑术</sk>、<sk>牺牲祝福</sk>），带 Forbearance 的留到最后。<b>顺序反了等于自断后路。</b></p></div>"
  },
  "sk": {
    "保护祝福": "spell_holy_sealofprotection",
    "牺牲祝福": "spell_holy_sealofsacrifice",
    "圣盾术": "spell_holy_divineshield",
    "复仇之怒": "spell_holy_avenginewrath",
    "灰烬觉醒": "inv_sword_2h_artifactashbringerfire_d_03",
    "圣疗术": "spell_holy_layonhands",
    "庇护祝福": "spell_holy_greaterblessingofsanctuary",
    "审判": "spell_holy_righteousfury",
    "十字军打击": "spell_holy_crusaderstrike",
    "公正之剑": "ability_paladin_bladeofjustice",
    "制裁之锤": "spell_holy_sealofmight",
    "盲目之光": "ability_paladin_blindinglight",
    "圣佑术": "spell_holy_divineprotection",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "圣殿骑士的裁决": "spell_paladin_templarsverdict",
    "神圣风暴": "ability_paladin_divinestorm",
    "剑在人在": "ability_warrior_challange",
    "天神下凡": "warrior_talent_icon_avatar",
    "灵龟守护": "ability_hunter_pet_turtle",
    "逃脱": "ability_rogue_feint",
    "假死": "ability_rogue_feigndeath",
    "妨害之手": "ability_paladin_handofhindrance",
    "奉献": "spell_holy_innerfire",
    "消失": "ability_vanish",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "责难": "spell_holy_rebuke",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "清毒术": "spell_holy_renew",
    "星界转移": "ability_shaman_astralshift",
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
      "k": "hp",
      "t": "神圣能量攒够了",
      "d": "它是所有大招的燃料。能量不够就开窗口，前几秒全花在攒资源上"
    },
    {
      "k": "cd",
      "t": "<sk>复仇之怒</sk>好了",
      "d": "24 秒内伤害治疗爆击一起提高。没有它，你只是在打普通伤害"
    },
    {
      "k": "card",
      "t": "外部牌还留着",
      "d": "<sk>保护祝福</sk>和<sk>庇护祝福</sk>都交掉的时候进攻，队友出事你没得救"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "<sk>寒冰屏障</sk> / <sk>暗影斗篷</sk> / 对面圣盾——还在的话，你的爆发会打空"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在什么都没准备好</h3><p>能量不够、冷却没好。<b>惩戒的窗口要靠神圣能量撑</b>——先攒资源，别急着交<sk>复仇之怒</sk>。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，而且你的牌也不够</h3><p>条件差太多，外部牌还交掉了。<b>惩戒骑不能只想进攻</b>——队友出事你救不了，赢了输出也输了局。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是逼牌不是杀人</h3><p>压上去逼对面交一两张防御，<b>把<sk>复仇之怒</sk>留给下一个窗口</b>。同时看好队友血线。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>缺能量就是按不满，缺外部牌就是不能全力进攻，免疫在就是白打</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>灰烬觉醒</sk>启动 → <sk>复仇之怒</sk>开窗口 → 神圣能量按满大招 → <sk>制裁之锤</sk>卡在治疗准备救人那一秒。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先认对面的击杀目标",
      "你的<sk>保护祝福</sk>要留给他。<b>而且要留到真正的击杀波</b>，不是第一次看着危险就交。",
      "保护祝福"
    ],
    [
      "攒神圣能量",
      "<sk>审判</sk>、<sk>十字军打击</sk>、<sk>公正之剑</sk>攒，<sk>灰烬觉醒</sk>一次给 3 点。<b>能量是燃料，没有它窗口是空的。</b>",
      "审判"
    ],
    [
      "<sk>灰烬觉醒</sk>启动窗口",
      "猛击并生成 3 点能量，同时挂上持续伤害。<b>这是惩戒开窗口的启动键。</b>",
      "灰烬觉醒"
    ],
    [
      "<sk>复仇之怒</sk>跟上",
      "伤害、治疗、爆击一起提高 24 秒。<b>它同时放大你的输出和续航</b>，所以两种局面都能开。",
      "复仇之怒"
    ],
    [
      "神圣能量按满大招",
      "<sk>圣殿骑士的裁决</sk>单体、<sk>神圣风暴</sk>多目标。<b>窗口里每个 GCD 都该有能量支撑。</b>",
      "圣殿骑士的裁决"
    ],
    [
      "<sk>制裁之锤</sk>卡在治疗抬手那一刻",
      "昏迷。<b>不要开场交</b>——控制要落在你的伤害正在落地的时候。",
      "制裁之锤"
    ],
    [
      "队友危险 → 先用不带 Forbearance 的牌",
      "<sk>牺牲祝福</sk>先上，<sk>保护祝福</sk>留着。<b>顺序反了会把后路封死。</b>",
      "牺牲祝福"
    ],
    [
      "对面控制链来了 → <sk>庇护祝福</sk>",
      "它移除当前控制<b>并压制随后几秒的同类效果</b>——拆的是整条链，不是一个技能。",
      "庇护祝福"
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
        "one": "两个板甲对砍，看谁的牌用得更省。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "你的伤害以神圣（法术）为主，<b>招架部分对你影响比对纯物理职业小</b>。"
          ],
          [
            "他贴得上你",
            "战士没有脱身手段，距离不是问题。"
          ],
          [
            "<b>他的爆发是明牌</b>",
            "看到<sk>天神下凡</sk>就该准备<sk>圣佑术</sk>或给队友<sk>保护祝福</sk>。"
          ],
          [
            "先看他打谁",
            "他打你就自保，打队友就<b>把物理免疫给出去</b>——战士是纯物理，保护祝福对他完全无效化。"
          ]
        ],
        "arena": "战士是纯物理输出，<sk>保护祝福</sk>对他等于完全免疫。这是这个对局最强的一张牌。",
        "duel": "单挑拼续航，<sk>复仇之怒</sk>当续航开，扛过他的窗口再压。"
      },
      {
        "id": "paladin",
        "n": "圣骑士",
        "ic": "classicon_paladin",
        "c": "#F48CBA",
        "diff": "镜像",
        "cards": [
          "圣盾术",
          "保护祝福",
          "自由祝福"
        ],
        "one": "镜像对局：谁的 Forbearance 管理得好谁赢。",
        "q": [
          [
            "<sk>圣盾术</sk> —— 完全免疫",
            "两边都有。<b>谁先被逼出来，谁就先进入没牌的窗口期。</b>"
          ],
          [
            "两边都不跑",
            "纯站桩对耗。"
          ],
          [
            "<b>盯他的 Forbearance</b>",
            "他给队友<sk>保护祝福</sk>之后，那个人短时间内不能再吃大保——<b>那就是你的击杀窗口</b>。"
          ],
          [
            "逼牌优先于杀人",
            "开场几轮的目标是把他的外部牌逼出来，牌空了才谈击杀。"
          ]
        ],
        "arena": "镜像的胜负在 Forbearance 管理。记住他给谁上过保护祝福，那个人接下来 20 秒是软的。",
        "duel": "单挑比谁的自保牌用得省，先交完的那个输。"
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
        "one": "牌最多的一个，但你的外部牌能抵消他的爆发。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间打他等于没打，转去打他队友。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "一个后跳一个脱战，最难黏住的目标之一。"
          ],
          [
            "<sk>妨害之手</sk>是你的黏人手段",
            "减速加拉近，<b>贴上之后先用它</b>。"
          ],
          [
            "<sk>保护祝福</sk>对他很强",
            "猎人伤害以物理为主，<b>队友被集火时给出去几乎等于免疫</b>。"
          ]
        ],
        "arena": "猎人是物理输出，<sk>保护祝福</sk>给被集火的队友几乎等于免疫。这是这个对局最值的一张牌。",
        "duel": "单挑追不上就守位置，等他自己进入你的<sk>奉献</sk>范围。"
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
        "one": "他决定什么时候开打，你手上有最好的接招牌。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你的伤害以神圣（法术）为主，斗篷对你很疼</b>。"
          ],
          [
            "<sk>消失</sk>直接断开",
            "他随时能重置，追不上就转打他队友。"
          ],
          [
            "<sk>庇护祝福</sk>拆他的控制链",
            "贼靠控制链开场，<b>这张牌能把整条链拆掉</b>——这是这个对局最关键的一手。"
          ],
          [
            "保命牌留在手上",
            "贼从潜行开局，别在他现身前把<sk>圣佑术</sk>交掉。"
          ]
        ],
        "arena": "<sk>庇护祝福</sk>专治贼的控制链。留着它，别用来解一个孤立的控制。",
        "duel": "单挑时<sk>暗影斗篷</sk>期间停手，你的神圣伤害在斗篷面前接近全免。"
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
        "one": "两个都能奶，比谁的资源撑得久。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "都是短时间的，等它过去再压。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧是他的脱身手段，<b><sk>庇护祝福</sk>能直接拆掉</b>。"
          ],
          [
            "<sk>责难</sk>打断优先",
            "牧师的大治疗要读条，<b>打断比硬打穿现实</b>。"
          ],
          [
            "<sk>复仇之怒</sk>当续航开",
            "两边都能奶的对局，<b>它同时放大伤害和治疗</b>，价值翻倍。"
          ]
        ],
        "arena": "这是<sk>复仇之怒</sk>当续航开最典型的对局——它同时放大你的输出和自愈。",
        "duel": "单挑靠打断和持续压，牧师的治疗量硬打穿不现实。"
      },
      {
        "id": "deathknight",
        "n": "死亡骑士",
        "ic": "classicon_deathknight",
        "c": "#C41E3A",
        "diff": "拼减疗",
        "cards": [
          "反魔法护罩",
          "冰封之韧",
          "巫妖之躯"
        ],
        "one": "他的疫病带减疗，你要靠外部牌把队友捞回来。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡你的伤害",
            "<b>你的伤害以神圣（法术）为主，护罩对你很有效</b>——看到就等。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "死骑不跑，他抓你。"
          ],
          [
            "他的减疗一直在走",
            "疫病自带减疗，<b>你的治疗会被压掉一半</b>——所以要靠<sk>保护祝福</sk>这种「不让伤害发生」的牌。"
          ],
          [
            "先驱散再谈治疗",
            "<sk>清毒术</sk>能清疾病，<b>清掉减疗比硬奶有效</b>。"
          ]
        ],
        "arena": "死骑的减疗让硬奶效率很低，改用<sk>保护祝福</sk>这类「不让伤害发生」的牌。",
        "duel": "单挑等<sk>反魔法护罩</sk>过去再输出，你的神圣伤害在护罩面前效率很低。"
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
            "<b>Hallowed Ground 让<sk>奉献</sk>清除范围内友方的减速</b>——这是这个对局很好用的一手。"
          ],
          [
            "先处理图腾",
            "关键图腾打掉的收益常常大于继续砍人，<sk>神圣风暴</sk>顺手就能清。"
          ],
          [
            "卡图腾冷却的空当",
            "他刚交完一轮图腾那段时间是你最好的窗口。"
          ]
        ],
        "arena": "Hallowed Ground 的<sk>奉献</sk>能清队友身上的减速，对萨满的地缚是直接的解法。",
        "duel": "单挑等<sk>星界转移</sk>过去，那几秒攒神圣能量不亏。"
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
            "法师有一整套限制近战的手段。"
          ],
          [
            "Blessing of Spellwarding",
            "<b>免疫魔法版的保护祝福</b>——对纯法系阵容，这一格换上去价值极高。"
          ],
          [
            "<sk>妨害之手</sk>拉住他",
            "减速加拉近，法师最怕走不掉。"
          ]
        ],
        "arena": "对纯法系阵容把 PvP 天赋换成 Blessing of Spellwarding，队友被集火时等于免疫。",
        "duel": "单挑用<sk>妨害之手</sk>黏住他，法师走不掉就打不出输出。"
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
        "one": "他用血换伤害，你的解控牌是关键。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "恐惧与减速",
            "<b><sk>庇护祝福</sk>直接拆掉恐惧链</b>，这是这个对局最有价值的一手。"
          ],
          [
            "他的宠物",
            "宠物提供额外控制，顺手清掉能省麻烦。"
          ],
          [
            "压住不给喘息",
            "术士需要时间读条叠 DoT，持续贴身比爆发窗口更能限制他。"
          ]
        ],
        "arena": "<sk>庇护祝福</sk>拆恐惧链。术士的控制以恐惧为主，这张牌几乎是专门克制他的。",
        "duel": "单挑靠打断和持续压，别让他有时间叠满 DoT。"
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
            "你打出去的伤害会转回来。<b>看到就停手。</b>"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧机动性高，控制要卡准。"
          ],
          [
            "业报接的就是你的爆发",
            "它通常就是为你的<sk>复仇之怒</sk>准备的，<b>别整套撞上去</b>。"
          ],
          [
            "先试探再全交",
            "这个对局值得先打两下看反应。"
          ]
        ],
        "arena": "<sk>复仇之怒</sk>是 24 秒的长窗口，撞上<sk>业报之触</sk>损失特别大。先试探。",
        "duel": "单挑先打两下看他交不交业报，试探成本远低于整套被反弹。"
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
            "不是免疫，可以打但性价比低。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "德鲁伊能变形跑、能潜行重置。"
          ],
          [
            "<sk>制裁之锤</sk>卡形态切换",
            "控制卡在他要变形那一刻，比卡在满血时有用。"
          ],
          [
            "<sk>奉献</sk>限制他的走位",
            "范围持续伤害加减速，<b>德鲁伊怕的是走不掉</b>。"
          ]
        ],
        "arena": "<sk>奉献</sk>在地上限制他的走位，德鲁伊怕的不是伤害是被黏住。",
        "duel": "单挑追不上就守住位置，等他自己回来。"
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
        "one": "机动性远高于你，别比追逐。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打，只是效率下降。"
          ],
          [
            "二段跳与冲刺",
            "DH 位移多且短冷却，拉开距离对他几乎没成本。"
          ],
          [
            "他必须近身",
            "<b>DH 要贴脸才能输出</b>——守在治疗身边等他来。"
          ],
          [
            "<sk>保护祝福</sk>对他很强",
            "DH 伤害以物理为主，<b>给被集火的队友等于免疫</b>。"
          ]
        ],
        "arena": "DH 是物理输出，<sk>保护祝福</sk>给被集火的队友几乎等于免疫。",
        "duel": "单挑守株待兔，他必须近身，追是徒劳的。"
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
            "唤魔师能垂直脱离。"
          ],
          [
            "<sk>责难</sk>打断蓄力",
            "唤魔师有大量蓄力技能，<b>打断一次抵消一大段伤害</b>。"
          ],
          [
            "<sk>审判</sk>够得着",
            "你有远程技能，<b>悬空期间不是完全没手段</b>——这一点比纯近战强。"
          ]
        ],
        "arena": "悬空期间用<sk>审判</sk>这类远程技能保持输出，你不是纯近战。",
        "duel": "单挑靠<sk>责难</sk>打断蓄力，唤魔师的伤害大半来自蓄力。"
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
      "s": "队友被集火，血量掉到 <em>50%</em>。你手上<sk>牺牲祝福</sk>和<sk>保护祝福</sk>都好着。",
      "a": "先用哪个？",
      "o": [
        "<sk>保护祝福</sk>，免疫更彻底",
        "<sk>牺牲祝福</sk>，它不带 Forbearance",
        "两个一起交",
        "等他掉到 20% 再说"
      ],
      "r": 1,
      "e": [
        "<sk>保护祝福</sk>会给 20 秒 Forbearance，<b>期间他不能再吃<sk>圣疗术</sk>或再来一次保护</b>——现在交，真正的击杀波来了就没牌了。",
        "正解。<b>先用不带 Forbearance 的牌</b>，把带 Forbearance 的留到最后。顺序反了等于自断后路。",
        "两张一起交是把两个冷却喂给同一波伤害。",
        "等到 20% 太晚，而且这题的核心是顺序不是时机。"
      ],
      "k": "先用不带 Forbearance 的牌。这是惩戒骑最重要的一条顺序。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "对面一套控制链打在你队友身上：先昏迷，接着准备沉默。",
      "a": "<sk>庇护祝福</sk>什么时候用？",
      "o": [
        "第一个昏迷落地就用",
        "等整条链打完再用",
        "现在用，它会压制随后几秒的同类效果",
        "不用，留给更危险的时候"
      ],
      "r": 2,
      "e": [
        "「第一个控制落地就用」接近对了，但理由不完整。",
        "链打完了再用，人已经被打死了。",
        "正解。<b>它不只移除当前控制，还在随后几秒大幅削短同类效果</b>——所以它拆的是整条链，不是一个技能。控制链一开始就该用。",
        "留着不用，控制链就完整地打在队友身上了。"
      ],
      "k": "<sk>庇护祝福</sk>的后半段（压制同类效果）才是价值所在。对着控制链用，不对着单个控制用。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "你的队伍被压着打，血线一直下不来。<sk>复仇之怒</sk>好着。",
      "a": "该开吗？",
      "o": [
        "不开，它是输出冷却，留着进攻用",
        "开，它同时放大治疗，可以当续航用",
        "开，但只用来打伤害",
        "等队友血线稳了再开"
      ],
      "r": 1,
      "e": [
        "<b>把它只当输出冷却是漏了一半</b>。",
        "正解。<sk>复仇之怒</sk>在 24 秒内同时提高伤害、治疗和爆击。<b>大多数职业的爆发冷却只有一个用途，它有两个</b>——被压着打时开它续航完全成立。",
        "开了却只用来打伤害，等于浪费它的治疗加成。",
        "血线稳了再开就不需要续航了。"
      ],
      "k": "<sk>复仇之怒</sk>有两个用途。别因为「它是输出冷却」就只在进攻时交。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 1,
      "s": "关于 Forbearance 这个机制。",
      "a": "它会封掉你的哪些牌？",
      "o": [
        "只有<sk>保护祝福</sk>",
        "<sk>保护祝福</sk>、<sk>圣疗术</sk>、<sk>圣盾术</sk>",
        "只有<sk>圣盾术</sk>",
        "所有祝福类技能"
      ],
      "r": 1,
      "e": [
        "不止一个。",
        "正解。<b>这三张大牌共享 Forbearance 限制</b>（圣盾术可以靠天赋绕过）。所以「给谁、什么时候给」是这个专精最重的判断。",
        "不止圣盾术。",
        "<sk>自由祝福</sk>、<sk>牺牲祝福</sk>不受 Forbearance 约束——这正是它们该先用的原因。"
      ],
      "k": "知道哪些牌共享 Forbearance，才知道自己还剩几张。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "你准备开<sk>复仇之怒</sk>，但神圣能量只有 1 点。",
      "a": "现在开吗？",
      "o": [
        "开，窗口不等人",
        "先攒能量再开",
        "开，同时用<sk>灰烬觉醒</sk>补能量",
        "换个目标"
      ],
      "r": 1,
      "e": [
        "能量不够，窗口前几秒你只能攒资源——<b>等于把窗口浪费掉一大半</b>。",
        "正解。<b>神圣能量是所有大招的燃料</b>。开窗口之前先看能量，这跟死骑「先看疫病」、踏风「先看层数」是同一类判断。",
        "<sk>灰烬觉醒</sk>给 3 点是对的做法，但正确顺序是<b>先用它攒够再开窗口</b>，不是开了窗口再补。",
        "换目标不解决能量问题。"
      ],
      "k": "开窗口前先看资源。惩戒的资源是神圣能量。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 3,
      "s": "对面战士是纯物理输出，正在集火你的法师队友。",
      "a": "<sk>保护祝福</sk>给出去的价值是什么？",
      "o": [
        "降低一部分伤害",
        "对纯物理输出等于完全免疫",
        "只能挡住一次攻击",
        "主要是驱散作用"
      ],
      "r": 1,
      "e": [
        "它不是减伤，是免疫。",
        "正解。<b><sk>保护祝福</sk>免疫物理伤害</b>——对面是纯物理职业（战士、猎人、DH）时，给出去等于让那个队友短时间内完全无敌。这是这类对局最强的一张牌。",
        "是持续免疫不是挡一次。",
        "它免疫物理伤害和有害效果，不是单纯驱散。"
      ],
      "k": "<sk>保护祝福</sk>的价值取决于对面的伤害类型。对纯物理阵容它是全场最强的牌。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "对面是双法系（法师 + 术士），你在配 PvP 天赋。",
      "a": "哪一格该换？",
      "o": [
        "换上 Blessing of Spellwarding（免魔法）",
        "换上 Searing Glare",
        "保持默认不动",
        "换掉<sk>庇护祝福</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b>Blessing of Spellwarding 是免疫魔法版的<sk>保护祝福</sk></b>——对纯法系阵容，给被集火的队友等于免疫。28/50 的使用率说明它是看阵容换的。",
        "Searing Glare 是范围致盲，跟对面伤害类型无关。",
        "默认配置里没有它，遇到双法系不换就浪费了一格。",
        "<sk>庇护祝福</sk>是 50/50 必带，任何阵容都不该换掉。"
      ],
      "k": "免疫类外部牌要按对面的伤害类型配。物理阵容用保护祝福，法系阵容用 Spellwarding。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "你自己血量掉到 <em>40%</em>，<sk>圣佑术</sk>和<sk>圣盾术</sk>都好着。",
      "a": "先用哪个？",
      "o": [
        "<sk>圣盾术</sk>，全免疫更保险",
        "<sk>圣佑术</sk>，它不带 Forbearance",
        "两个一起",
        "等更低再说"
      ],
      "r": 1,
      "e": [
        "<sk>圣盾术</sk>会给自己 Forbearance，<b>之后你就不能吃<sk>圣疗术</sk>了</b>——40% 就交太早。",
        "正解。跟给队友的顺序一样：<b>先用不带 Forbearance 的<sk>圣佑术</sk></b>，把圣盾术留到真的要死的时候。",
        "两张一起交，后面就裸奔了。",
        "「等更低」在没有先用圣佑术的前提下是危险的。"
      ],
      "k": "自保和救人是同一条顺序：不带 Forbearance 的先用。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "对面挤在一起，你的<sk>盲目之光</sk>好着。队友正准备开控制链。",
      "a": "该用吗？",
      "o": [
        "用，范围致盲收益最大",
        "先确认它会不会打断队友的控制节奏",
        "用，同时开爆发",
        "不用，留给自保"
      ],
      "r": 1,
      "e": [
        "「对面挤在一起」只满足了范围技能的一半条件。",
        "正解。<b><sk>盲目之光</sk>是范围的，容易误伤自己队伍的控制节奏</b>——队友正要开控制链的时候致盲全场，可能把他的目标也弄跑了。先看清位置和队友的意图。",
        "开爆发跟用不用范围控制是两件事。",
        "留给自保是一种用法，但这题的核心是「范围技能会影响队友」。"
      ],
      "k": "范围控制技能在配合中要先确认不会打乱队友的节奏。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 3,
      "s": "镜像对局，你和对面惩戒骑都满状态。你注意到他刚给一个队友上了<sk>保护祝福</sk>。",
      "a": "这个信息怎么用？",
      "o": [
        "没什么用",
        "那个队友接下来 20 秒不能再吃大保，是你的击杀窗口",
        "说明他要进攻了",
        "说明他没牌了"
      ],
      "r": 1,
      "e": [
        "这是很关键的信息。",
        "正解。<b>Forbearance 持续 20 秒，期间那个人不能再吃<sk>保护祝福</sk>或<sk>圣疗术</sk></b>——他刚被保护完，恰恰是接下来最脆的那个。",
        "给保护通常是防守动作，不是进攻信号。",
        "他还有其他牌，只是那个人暂时不能再吃大保。"
      ],
      "k": "盯对面的 Forbearance。刚被保护的那个人，接下来一段时间是软的。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 2,
      "s": "对面死骑的疫病一直挂在你队友身上，你的治疗效率明显变低。",
      "a": "怎么办？",
      "o": [
        "提高治疗量硬奶",
        "<sk>清毒术</sk>清掉减疗源，同时改用免疫类牌顶住伤害",
        "换个队友奶",
        "忽略减疗继续输出"
      ],
      "r": 1,
      "e": [
        "死骑的减疗一直在走，硬奶效率始终打折。",
        "正解。<b>面对减疗有两条路，而且该同时走</b>：<sk>清毒术</sk>清掉减疗源，以及改用「不让伤害发生」的牌（<sk>保护祝福</sk>）而不是「伤害发生后补回来」的治疗。",
        "换人不解决问题，疫病会铺开到所有人身上。",
        "忽略减疗，你的治疗一直是打折的。"
      ],
      "k": "对面有减疗时，改用免疫和驱散，别跟他拼治疗量。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "你在打输出，队友喊「帮我解控」。你的<sk>庇护祝福</sk>好着，但对面只放了一个孤立的昏迷。",
      "a": "用不用？",
      "o": [
        "用，队友要求了",
        "先看这是不是控制链的开头，孤立的控制不值得用它",
        "用，同时继续输出",
        "不用，让他自己解"
      ],
      "r": 1,
      "e": [
        "照单执行会浪费这张牌。",
        "正解。<b><sk>庇护祝福</sk>的价值在于拆整条链</b>——用它解一个孤立的昏迷，等于用最强的解控牌换了几秒。要看后面还有没有控制跟上。",
        "「同时继续输出」不解决该不该用的问题。",
        "完全不管也不对——如果这确实是控制链的开头，就该用。"
      ],
      "k": "最强的解控牌留给控制链，不解孤立的单个控制。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你的<sk>奉献</sk>放在地上，队友身上有减速。你点了 Hallowed Ground。",
      "a": "会发生什么？",
      "o": [
        "奉献只造成伤害",
        "奉献会清除并压制范围内友方的减速",
        "奉献会治疗队友",
        "奉献会加速队友"
      ],
      "r": 1,
      "e": [
        "Hallowed Ground 给了它额外效果。",
        "正解。<b>Hallowed Ground（49/50）让<sk>奉献</sk>清除并抑制范围内友方身上的所有减速</b>——这是对萨满地缚、法师冰环这类效果的直接解法。",
        "它不治疗。",
        "它是清减速不是加速。"
      ],
      "k": "Hallowed Ground 把<sk>奉献</sk>变成了一个地面上的解控区。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 3,
      "s": "对面武僧开了<sk>业报之触</sk>，你的<sk>复仇之怒</sk>正好转好。",
      "a": "开不开？",
      "o": [
        "开，窗口不等人",
        "不开，等业报过去",
        "开，但只用普通技能",
        "先试探两下"
      ],
      "r": 1,
      "e": [
        "<b><sk>复仇之怒</sk>是 24 秒的长窗口</b>，撞上业报损失特别大——你打的每一下都会转回自己身上。",
        "正解。停手等它过去。业报只有几秒，你的窗口有 24 秒，<b>等几秒换整个窗口是划算的</b>。",
        "业报按你造成的伤害算，用什么技能都一样弹。",
        "试探是对的思路，但这里业报已经明确开着了，没什么好试的。"
      ],
      "k": "长窗口的爆发冷却撞上反伤，损失比短窗口大得多。宁可等。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "对面猎人在风筝你，距离一直拉开。",
      "a": "惩戒骑怎么处理？",
      "o": [
        "用<sk>神圣马驹</sk>一路追",
        "<sk>妨害之手</sk>减速加拉近",
        "放弃他打别人",
        "用<sk>审判</sk>远程输出"
      ],
      "r": 1,
      "e": [
        "一路追，他一个位移你又空了。",
        "正解。<b><sk>妨害之手</sk>是惩戒的黏人手段</b>——减速加拉近，贴上之后先用它。",
        "换目标是选项，但你手上有专门的解法。",
        "<sk>审判</sk>能远程输出，但不解决「他一直在跑」这个问题。"
      ],
      "k": "每个近战都该知道自己的黏人手段是哪个。惩戒是<sk>妨害之手</sk>。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "惩戒骑的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "精通",
        "急速",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 精通 46 > 急速 10 > 爆击 0</b>。全能同时提高伤害和减伤——对一个既要输出又要扛的专精，两头都吃得到。",
        "精通是第二，差距不小。",
        "急速排第三，已经在断层之下。",
        "爆击几乎是 0，完全不用考虑。"
      ],
      "k": "惩戒堆全能。它同时给伤害和减伤，跟这个专精「攻守兼备」的定位一致。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "对面圣骑士交了<sk>圣盾术</sk>，你的爆发窗口还剩十几秒。",
      "a": "怎么办？",
      "o": [
        "继续打他",
        "转去打他队友",
        "停手等免疫",
        "用<sk>庇护祝福</sk>"
      ],
      "r": 1,
      "e": [
        "<sk>圣盾术</sk>是完全免疫，打进去是 0。",
        "正解。<b>窗口还长，转去打别人</b>——你的<sk>复仇之怒</sk>加成对他队友一样生效。",
        "干等会浪费掉窗口的一大半。",
        "<sk>庇护祝福</sk>是解控牌，跟对面免疫无关。"
      ],
      "k": "窗口里遇到免疫必须换目标，尤其当你的窗口很长的时候。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 3,
      "s": "你只剩一张<sk>保护祝福</sk>，两个队友同时告急：治疗 30%，输出 20%。",
      "a": "给谁？",
      "o": [
        "给血更低的输出",
        "给治疗",
        "看对面在集火谁",
        "谁先喊给谁"
      ],
      "r": 2,
      "e": [
        "血量低不等于会死——他可能只是挨了溅射。",
        "「治疗优先」是常见的默认，但不是无条件的。",
        "正解。<b>判据是「对面在集火谁」</b>——被集火的那个才是真的会死。血量是结果，集火方向才是原因。",
        "按呼喊顺序给，等于把判断外包给了队友的紧张程度。"
      ],
      "k": "外部牌给「会死的那个」，不是「血最低的那个」。看集火方向。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "你要开一轮完整的爆发。手上<sk>灰烬觉醒</sk>和<sk>复仇之怒</sk>都好着。",
      "a": "顺序是什么？",
      "o": [
        "先<sk>复仇之怒</sk>再<sk>灰烬觉醒</sk>",
        "先<sk>灰烬觉醒</sk>启动，再<sk>复仇之怒</sk>",
        "两个一起按",
        "看能量决定"
      ],
      "r": 1,
      "e": [
        "先开<sk>复仇之怒</sk>，前几秒你还在攒能量，加成被浪费了。",
        "正解。<b><sk>灰烬觉醒</sk>一次给 3 点神圣能量</b>——先用它把资源准备好，再开窗口，后面每个 GCD 才有东西按。",
        "同一个 GCD 按不了两个技能。",
        "「看能量」是对的思路，但正确答案就是先用能补能量的那个。"
      ],
      "k": "启动技能在前，放大技能在后。顺序错了，加成的前几秒是空的。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "你和队友都开了爆发，对面治疗读一个大治疗。你手上<sk>责难</sk>和<sk>制裁之锤</sk>都好着。",
      "a": "用哪个？",
      "o": [
        "<sk>制裁之锤</sk>，控住更久",
        "<sk>责难</sk>打断",
        "两个一起",
        "都不用"
      ],
      "r": 1,
      "e": [
        "硬控该留给关键时刻，而且会吃递减。",
        "正解。<b><sk>责难</sk>是专门的打断，冷却短</b>。能用打断解决的别动硬控。",
        "断一次读条只需要一个。",
        "大治疗读完，你和队友这一轮的伤害就白打了。"
      ],
      "k": "打断解决读条，硬控留给需要人彻底动不了的时候。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "队友被恐惧了，你的<sk>庇护祝福</sk>好着，但你判断后面还会有更长的控制链。",
      "a": "现在用吗？",
      "o": [
        "用，先把眼前的解掉",
        "不用，留给后面的控制链",
        "用，反正冷却会转回来",
        "看队友血量"
      ],
      "r": 1,
      "e": [
        "解掉一个孤立的恐惧，等于用最强的解控牌换了几秒。",
        "正解。<b>它压制随后同类效果的能力才是核心价值</b>——留给真正的控制链，那时候能拆掉一整套。",
        "冷却不短，不能当常规解控用。",
        "血量是一个因素，但这题的核心是这张牌的用法。"
      ],
      "k": "判断一张牌该不该现在用，要看它最擅长解决的场景有没有到。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "你注意到惩戒的英雄天赋是 50/0（晨光使者 vs 圣殿武士），而 PvP 天赋前两个是 50/50 和 49/50。",
      "a": "这些数字说明什么？",
      "o": [
        "数据没参考价值",
        "这几格没有讨论余地，判断空间在别处",
        "应该跟着最高的配",
        "样本太小"
      ],
      "r": 1,
      "e": [
        "50/0 和 50/50 是极强的信号。",
        "正解。<b>压倒性的分布说明这些格子没得选</b>——你的判断空间在那 14 个分歧格和「牌给谁」上，不在这里。看清哪些是定死的，能省下大量纠结。",
        "「跟着最高的配」结果是对的，但没理解为什么。",
        "50 人样本和其他专精一样。"
      ],
      "k": "先看清哪些格子是定死的，才知道真正要判断的是哪几格。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "你给队友上了<sk>牺牲祝福</sk>，他受到的伤害转了 30% 到你身上。",
      "a": "什么时候它会自动结束？",
      "o": [
        "12 秒后",
        "12 秒后，或转移的伤害会让你血量低于 20% 时",
        "队友血量满了",
        "你主动取消"
      ],
      "r": 1,
      "e": [
        "时间不是唯一条件。",
        "正解。<b>它有一个自动保护：转移的伤害会让你低于 20% 血量时就会断开</b>。所以给的时候要看自己的血线——你快死了它也保不了队友。",
        "跟队友血量无关。",
        "有自动结束条件，不只靠手动。"
      ],
      "k": "<sk>牺牲祝福</sk>是拿你的血换队友的血。自己血线低的时候，这张牌撑不住。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "对面术士一直用恐惧拉扯你的队伍。",
      "a": "惩戒骑最有价值的一手是什么？",
      "o": [
        "提高输出压死他",
        "<sk>庇护祝福</sk>拆恐惧链",
        "给所有人<sk>自由祝福</sk>",
        "让队友自己解"
      ],
      "r": 1,
      "e": [
        "术士自愈强，单纯拼输出很难。",
        "正解。<b>术士的控制以恐惧为主，<sk>庇护祝福</sk>几乎是专门克制他的</b>——移除当前恐惧并压制随后的同类效果。",
        "<sk>自由祝福</sk>解的是移动限制，不解恐惧。",
        "被动等待，控制链就完整地打完了。"
      ],
      "k": "认清对面控制链的主体是什么类型，才知道你哪张牌是专治它的。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "局面僵持，你的爆发好了，但两张外部牌都在冷却。",
      "a": "该不该全力进攻？",
      "o": [
        "该，进攻是最好的防守",
        "不该，牌空的时候进攻，队友出事你救不了",
        "该，但要留控制",
        "看对面血量"
      ],
      "r": 1,
      "e": [
        "「进攻是最好的防守」在惩戒骑这里不成立——<b>你的价值一半在队友身上</b>。",
        "正解。<b>牌空的时候全力进攻是危险的</b>：对面反打一波，你既没保护也没解控。等一张牌转回来再压。",
        "留控制不解决「没有外部牌」这个问题。",
        "对面血量不改变你没牌这个事实。"
      ],
      "k": "惩戒骑的进攻窗口要跟外部牌的冷却对齐。牌空了就该收着打。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "对面战士在集火你的法师队友。",
      "a": "<sk>保护祝福</sk>给出去的效果是什么？",
      "o": [
        "降低一部分伤害",
        "战士是纯物理，等于让队友完全免疫",
        "只挡住一次攻击",
        "主要用来解控"
      ],
      "r": 1,
      "e": [
        "它是免疫不是减伤。",
        "正解。<b>战士的伤害全是物理，<sk>保护祝福</sk>给出去等于让那个队友在持续时间内完全无敌</b>。这是这个对局最强的一张牌。",
        "是持续免疫。",
        "它免疫物理伤害和有害效果。"
      ],
      "k": "对纯物理职业，<sk>保护祝福</sk>是完全解。先认对面的伤害类型。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "对面战士开了<sk>天神下凡</sk>。",
      "a": "该做什么？",
      "o": [
        "对拼爆发",
        "看他打谁：打你就自保，打队友就给保护",
        "立刻<sk>圣盾术</sk>",
        "拉开距离"
      ],
      "r": 1,
      "e": [
        "对拼是拿你的持续输出比他的集中爆发。",
        "正解。<b>他的爆发是明牌，你要做的是把牌用在正确的人身上</b>——判据是他的集火方向，不是你自己的血量。",
        "<sk>圣盾术</sk>带 Forbearance，不该第一时间交。",
        "战士贴得上你，拉不开。"
      ],
      "k": "外部牌的使用判据是对面在打谁，不是自己感觉危不危险。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 3,
      "s": "镜像对局，对面惩戒骑刚给他的治疗上了<sk>保护祝福</sk>。",
      "a": "这意味着什么？",
      "o": [
        "他的治疗现在无敌，别打",
        "他的治疗接下来 20 秒不能再吃大保，保护结束后是击杀窗口",
        "他没牌了",
        "他要进攻了"
      ],
      "r": 1,
      "e": [
        "免疫期间确实打不动，但这题问的是后续。",
        "正解。<b>Forbearance 持续 20 秒</b>——保护祝福的免疫结束后，那个治疗在剩下的时间里不能再吃保护或<sk>圣疗术</sk>。那才是你的击杀窗口。",
        "他还有其他牌。",
        "给保护是防守动作。"
      ],
      "k": "盯 Forbearance 的时间轴。免疫结束到 Forbearance 结束之间那段，是对方最脆的窗口。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "镜像对局开场，两边都满牌。",
      "a": "前几轮的目标应该是什么？",
      "o": [
        "直接找机会杀人",
        "逼对面把外部牌交出来",
        "抢先手爆发",
        "守住不动"
      ],
      "r": 1,
      "e": [
        "两边牌都满的时候找击杀，很难成功。",
        "正解。<b>镜像的胜负在 Forbearance 管理</b>——先把他的外部牌逼出来，牌空了才谈击杀。",
        "抢先手爆发会被他的外部牌化解。",
        "完全不动，主动权就给了对面。"
      ],
      "k": "对面外部牌多的时候，前期目标是逼牌不是杀人。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "猎人在风筝，你够不着他。",
      "a": "惩戒骑的黏人手段是什么？",
      "o": [
        "<sk>神圣马驹</sk>",
        "<sk>妨害之手</sk>",
        "<sk>奉献</sk>",
        "<sk>审判</sk>"
      ],
      "r": 1,
      "e": [
        "<sk>神圣马驹</sk>是位移，但追不上有位移的猎人。",
        "正解。<b><sk>妨害之手</sk>减速加拉近</b>，这是惩戒专门的黏人技能。贴上之后第一件事就是它。",
        "<sk>奉献</sk>是地面范围伤害，人跑出去就没用了。",
        "<sk>审判</sk>是远程输出，不限制他移动。"
      ],
      "k": "每个近战都该知道自己的黏人手段。用错技能就永远追不上。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人在集火你的队友。",
      "a": "哪张外部牌最合适？",
      "o": [
        "<sk>保护祝福</sk>",
        "<sk>牺牲祝福</sk>",
        "Blessing of Spellwarding",
        "<sk>自由祝福</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b>猎人伤害以物理为主，<sk>保护祝福</sk>给出去几乎等于免疫</b>。",
        "<sk>牺牲祝福</sk>把伤害转到你身上，能用但没有免疫彻底——不过它不带 Forbearance，作为第一张牌也合理。",
        "Spellwarding 免疫魔法，对物理输出的猎人无效。",
        "<sk>自由祝福</sk>解移动限制，不挡伤害。"
      ],
      "k": "免疫类外部牌要对上对面的伤害类型才有意义。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "贼开场一套控制链打在你身上。",
      "a": "<sk>庇护祝福</sk>什么时候用？",
      "o": [
        "第一个控制落地就用",
        "等控制链打到一半",
        "忍到最后一个控制",
        "不用，留给队友"
      ],
      "r": 0,
      "e": [
        "正解。<b>它移除当前控制并压制随后几秒的同类效果</b>——贼的开场就是一条控制链，越早用拆掉的越多。",
        "打到一半，你已经被控了很久。",
        "忍到最后，前面的控制已经完整生效了。",
        "你自己被控住的时候就该用，不然队友也救不了。"
      ],
      "k": "专治控制链的牌，在链的开头用价值最大。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>暗影斗篷</sk>（免疫法术）。",
      "a": "对惩戒骑影响多大？",
      "o": [
        "影响很大，你的伤害以神圣（法术）为主",
        "影响小，你是物理伤害",
        "完全没影响",
        "只影响自动攻击"
      ],
      "r": 0,
      "e": [
        "正解。<b>惩戒的伤害以神圣（法术）为主</b>——斗篷对你很疼，看到就该停手换目标。",
        "惩戒有物理成分，但主体是神圣伤害。",
        "影响很大。",
        "不只自动攻击。"
      ],
      "k": "先认清自己的伤害类型。惩戒怕免疫法术的牌。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "对上牧师治疗，两边都能奶，局面很胶着。",
      "a": "<sk>复仇之怒</sk>该怎么用？",
      "o": [
        "只在进攻时开",
        "当续航开也成立，它同时放大治疗",
        "留着不开",
        "开完立刻进攻"
      ],
      "r": 1,
      "e": [
        "只当输出冷却用是漏了一半。",
        "正解。<b>两边都能奶的对局，<sk>复仇之怒</sk>同时放大伤害和治疗，价值翻倍</b>——这是它最典型的双用途场景。",
        "留着不开，24 秒的加成白白浪费。",
        "开完必须进攻是把它限死在一个用途上。"
      ],
      "k": "双治疗对局里，同时放大伤害和治疗的冷却价值最高。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师读一个大治疗，你的<sk>责难</sk>好着。",
      "a": "该做什么？",
      "o": [
        "打断",
        "用<sk>制裁之锤</sk>控住",
        "继续输出压过去",
        "用<sk>盲目之光</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b>牧师的大治疗要读条，<sk>责难</sk>专门用来打断</b>，冷却短可以反复用。",
        "硬控留给关键时刻，用来断一次读条太贵。",
        "牧师的治疗量硬打穿不现实。",
        "<sk>盲目之光</sk>是范围控制，用来断单个读条是浪费。"
      ],
      "k": "能打断的时候打断，别用硬控。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑的疫病挂在你队友身上，你的治疗效率明显下降。",
      "a": "最直接的解法是什么？",
      "o": [
        "提高治疗量",
        "<sk>清毒术</sk>清掉疾病",
        "换个队友奶",
        "忽略，继续输出"
      ],
      "r": 1,
      "e": [
        "他的减疗在，硬奶效率一直很低。",
        "正解。<b><sk>清毒术</sk>能移除疾病</b>——清掉减疗源比硬奶有效得多。这是圣骑士的天然优势。",
        "换人不解决问题，疫病会铺开。",
        "忽略减疗，你的治疗一直是打折的。"
      ],
      "k": "有驱散能力的职业，先清掉减疗源，别跟它拼治疗量。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "对惩戒骑影响多大？",
      "o": [
        "影响很大，你的伤害以神圣（法术）为主",
        "影响小，你是物理",
        "完全没影响",
        "只影响治疗"
      ],
      "r": 0,
      "e": [
        "正解。<b>护罩吸收法术伤害，而惩戒的伤害以神圣（法术）为主</b>——效率明显下降，看到就等它过去。",
        "惩戒主体是神圣伤害。",
        "影响很大。",
        "不只影响治疗。"
      ],
      "k": "对面的防御牌挡哪种伤害，取决于你打的是哪种。惩戒怕挡法术的。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满用地缚图腾限制你的队伍走位。你点了 Hallowed Ground。",
      "a": "怎么解？",
      "o": [
        "打掉图腾",
        "把<sk>奉献</sk>放在队友脚下",
        "让队友自己走出去",
        "用<sk>自由祝福</sk>逐个解"
      ],
      "r": 1,
      "e": [
        "打图腾是一个办法，但需要时间。",
        "正解。<b>Hallowed Ground 让<sk>奉献</sk>清除并压制范围内友方的所有减速</b>——放一个奉献等于给全队解了地缚。",
        "被地缚就是走不出去。",
        "<sk>自由祝福</sk>能解，但一次只能一个人。"
      ],
      "k": "知道自己的天赋给了哪些额外效果，很多问题有更省的解法。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "该做什么？",
      "o": [
        "停手，别把爆发砸进去",
        "继续打",
        "交爆发压过去",
        "控住他"
      ],
      "r": 0,
      "e": [
        "正解。<b>完全免疫，停手</b>。这几秒用来攒神圣能量不亏。",
        "免疫期间打进去是 0。",
        "往免疫里砸爆发是最亏的。",
        "免疫期间控制也进不去。"
      ],
      "k": "免疫期间停手，同时做别的准备动作。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对面是法师 + 术士的双法系阵容。",
      "a": "PvP 天赋该怎么调？",
      "o": [
        "保持默认",
        "换上 Blessing of Spellwarding",
        "换上 Searing Glare",
        "换掉<sk>庇护祝福</sk>"
      ],
      "r": 1,
      "e": [
        "遇到双法系不换，等于浪费一格。",
        "正解。<b>Blessing of Spellwarding 是免疫魔法版的保护祝福</b>——对纯法系阵容，给被集火的队友等于免疫。",
        "Searing Glare 是范围致盲，跟伤害类型无关。",
        "<sk>庇护祝福</sk>是必带，任何阵容都不换。"
      ],
      "k": "看阵容换的那一格，判据在对面的伤害类型上。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师用冰环和闪现一直拉开距离。",
      "a": "惩戒骑怎么留住他？",
      "o": [
        "<sk>神圣马驹</sk>追",
        "<sk>妨害之手</sk>减速加拉近",
        "<sk>奉献</sk>放脚下",
        "放弃追击"
      ],
      "r": 1,
      "e": [
        "马驹是位移，追不上有闪现的法师。",
        "正解。<b><sk>妨害之手</sk>是专门的黏人技能</b>，法师最怕走不掉。",
        "<sk>奉献</sk>是地面范围，他走出去就没用。",
        "法师是主要威胁，不能放弃。"
      ],
      "k": "对拉扯型对手，用专门的黏人技能，不用位移硬追。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士用恐惧链拉扯你的队伍。",
      "a": "最有价值的一手是什么？",
      "o": [
        "<sk>庇护祝福</sk>拆恐惧链",
        "<sk>自由祝福</sk>",
        "提高输出",
        "让队友自己解"
      ],
      "r": 0,
      "e": [
        "正解。<b>术士的控制以恐惧为主，<sk>庇护祝福</sk>移除恐惧并压制随后的同类效果</b>——几乎是专门克制他的。",
        "<sk>自由祝福</sk>解移动限制，不解恐惧。",
        "术士自愈强，拼输出不现实。",
        "被动等待，控制链就打完了。"
      ],
      "k": "认清对面控制的主体类型，你手上通常有专治它的那张牌。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士靠吸血一直把血线拉回去。",
      "a": "怎么压？",
      "o": [
        "提高爆发",
        "持续压制不给他读条时间",
        "用<sk>庇护祝福</sk>",
        "放弃这个目标"
      ],
      "r": 1,
      "e": [
        "单纯拼输出很难赢过持续自愈。",
        "正解。<b>术士需要时间读条叠 DoT，持续贴身比爆发窗口更能限制他</b>。",
        "<sk>庇护祝福</sk>是解控牌，不影响他的自愈。",
        "术士是威胁，不能放弃。"
      ],
      "k": "对需要读条准备的对手，持续压制比等窗口有效。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 3,
      "s": "武僧开了<sk>业报之触</sk>，你的<sk>复仇之怒</sk>正好好了。",
      "a": "开不开？",
      "o": [
        "开，窗口不等人",
        "不开，24 秒的窗口撞上反伤损失太大",
        "开一半",
        "交自己的免疫硬抗"
      ],
      "r": 1,
      "e": [
        "<sk>复仇之怒</sk>是长窗口，撞上业报每一下都弹回来。",
        "正解。<b>业报只有几秒，你的窗口有 24 秒</b>——等几秒换整个窗口是划算的。窗口越长，撞反伤越亏。",
        "业报按你造成的伤害算，打多少弹多少。",
        "硬抗不划算，而且浪费自保牌。"
      ],
      "k": "窗口越长，撞上反伤的损失越大。宁可等几秒。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "你不确定武僧的<sk>业报之触</sk>在不在手上。",
      "a": "该怎么办？",
      "o": [
        "直接全交，赌他没有",
        "先打两下试探反应",
        "完全不开爆发",
        "用<sk>审判</sk>远程试探"
      ],
      "r": 1,
      "e": [
        "赌错了整套爆发都弹回来。",
        "正解。<b>试探的成本远低于整套被反弹</b>——打两下看有没有伤害转回来，再决定要不要全交。",
        "完全不开过于保守。",
        "远程试探是个思路，但业报反弹的是所有伤害，用什么试探都一样——关键是「先小后大」。"
      ],
      "k": "不确定对面有没有反伤牌时，先小后大。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊一直绕着你跑，你追不上。",
      "a": "惩戒骑怎么限制他？",
      "o": [
        "用<sk>神圣马驹</sk>追",
        "<sk>奉献</sk>限制走位 + <sk>妨害之手</sk>减速",
        "放弃他",
        "等队友控住"
      ],
      "r": 1,
      "e": [
        "马驹追不上变形的德鲁伊。",
        "正解。<b><sk>奉献</sk>在地上持续伤害加减速、<sk>妨害之手</sk>拉近</b>——德鲁伊怕的不是伤害，是被黏住。",
        "德鲁伊是威胁，不能放弃。",
        "被动等待，主动权就没了。"
      ],
      "k": "对风筝型对手，地面控制区加黏人技能，比追有效。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊要切<sk>旅行形态</sk>跑掉，你的<sk>制裁之锤</sk>好着。",
      "a": "什么时候用？",
      "o": [
        "卡在他要变形那一刻",
        "等他变完形",
        "开局就用",
        "不用，留着"
      ],
      "r": 0,
      "e": [
        "正解。<b>硬控卡在他要变形那一刻</b>，打断他的逃跑计划——这比变形后再想办法有效得多。",
        "变完形他已经跑开了。",
        "开局他还不想跑，控了浪费。",
        "留着不用，他就跑了。"
      ],
      "k": "控制的价值在打断对手的关键动作。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 在集火你的队友，机动性很高你追不上。",
      "a": "最有效的一手是什么？",
      "o": [
        "追上去打断他",
        "给被集火的队友<sk>保护祝福</sk>",
        "拉开距离",
        "提高输出"
      ],
      "r": 1,
      "e": [
        "追不上，DH 位移多且短冷却。",
        "正解。<b>DH 是物理输出，<sk>保护祝福</sk>给被集火的队友几乎等于免疫</b>——不用追他，让他打不动就行。",
        "拉开距离不解决队友被打的问题。",
        "拼输出不如直接让他的输出无效化。"
      ],
      "k": "追不上的物理输出，用免疫物理的牌让他白打。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 有打断手段，你在考虑技能顺序。",
      "a": "对惩戒骑影响大吗？",
      "o": [
        "很大，你的核心技能都要读条",
        "影响有限，惩戒的技能大多是瞬发",
        "完全没影响",
        "只影响治疗技能"
      ],
      "r": 1,
      "e": [
        "惩戒的输出技能基本都是瞬发。",
        "正解。<b>惩戒的输出以瞬发为主，打断对你影响有限</b>——但<sk>圣疗术</sk>这类治疗技能仍会被打断，用的时候要注意。",
        "治疗技能会受影响。",
        "主要影响的确实是治疗技能，但说「完全没影响」不准确——所以这个描述比 C 更完整。"
      ],
      "k": "打断对你的威胁取决于你有多少东西要读条。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "惩戒骑这段时间能做什么？",
      "o": [
        "什么都做不了，只能等",
        "用<sk>审判</sk>这类远程技能保持输出",
        "用位移追上去",
        "换目标"
      ],
      "r": 1,
      "e": [
        "惩戒不是纯近战。",
        "正解。<b>你有<sk>审判</sk>、<sk>愤怒之锤</sk>这类远程技能</b>——悬空期间不是完全没手段，这一点比纯近战专精强。",
        "没有能上天的位移。",
        "换目标是选项，但你其实够得着他。"
      ],
      "k": "知道自己有哪些远程手段，够不着的局面就没那么被动。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "该做什么？",
      "o": [
        "<sk>责难</sk>打断",
        "继续输出",
        "交防御准备扛",
        "拉开距离"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能，<sk>责难</sk>打断一次抵消一大段伤害</b>。",
        "让他放完，血线会很难看。",
        "能打断就别硬扛。",
        "拉开距离正合他意。"
      ],
      "k": "对蓄力型对手，短冷却打断该用就用。"
    }
  ]
};
