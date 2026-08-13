module.exports = {
  "meta": {
    "title": "平衡德 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 平衡德鲁伊 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "平衡德,猫头鹰,德鲁伊,PVP,竞技场,魔兽世界,12.1,Midnight,balance druid,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你有全场唯一能把人「移出这场战斗」的技能。<br>平衡德的活不是打伤害，是<b>决定这一波谁参与不了</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"日光术\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_vehicle_sonicshockwave.jpg\" alt=\"日光术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"纠缠根须\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stranglevines.jpg\" alt=\"纠缠根须\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？<sk>旋风</sk>把人从战斗里整个拿走</span><span class=\"sub\">不是控制，是让人暂时不存在</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>旋风</sk>把目标抛向空中——<b>他既不能行动，也不能被伤害</b>。这跟普通控制完全不同：普通控制是「他动不了但你能打」，<sk>旋风</sk>是「这个人暂时不在场」。</p><p style=\"margin-top:8px\">所以它最大的用途不是控输出，是<b>把对面治疗从关键那几秒里摘出去</b>，或者把一个正在被队友集火的目标保护起来（对，它也能反过来用）。<b>加上<sk>日光术</sk>的范围沉默，平衡德对局面的干预能力是全场顶级的。</b></p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">平衡德的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"星火术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_arcane_starfire.jpg\" alt=\"星火术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"愤怒\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_wrathv2.jpg\" alt=\"愤怒\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">资源时钟 · 日蚀与星能</span><span class=\"sub\">两种模式轮流强化</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>施放<sk>愤怒</sk>或<sk>星火术</sk>切换进入的日蚀模式，<b>两种模式分别强化自然和奥术伤害</b>。</p><p style=\"margin-top:8px\">星能是你的输出燃料。<b>Nature's Balance 让你脱战时星能平衡到 50 而不是清零</b>——这意味着开局你就有资源可用。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"日光术\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_vehicle_sonicshockwave.jpg\" alt=\"日光术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">干预时钟 · 你能改变几次局面</span><span class=\"sub\">这是平衡德的核心价值</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>旋风</sk>把人移出战斗、<sk>日光术</sk>范围沉默、<sk>纠缠根须</sk>定身、<sk>台风</sk>击退。</p><p style=\"margin-top:8px\"><b>这四个加起来，你对局面的干预能力是全场顶级的</b>——但它们大多要读条或有距离要求，被贴脸时全都用不出来。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"超凡之盟\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_natureguardian.jpg\" alt=\"超凡之盟\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">爆发时钟 · <sk>超凡之盟</sk></span><span class=\"sub\">同时维持两种日蚀</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>天体交汇，<b>同时维持两种日蚀并提供急速</b>——两种伤害类型的加成一起吃。</p><p style=\"margin-top:8px\">它是纯输出冷却，所以要开在<b>能安心站着输出</b>的时候：对面控制交完、或者你的队友已经把压力接过去了。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"超凡之盟\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_natureguardian.jpg\" alt=\"超凡之盟\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：丛林守护者 Keeper of the Grove</span><span class=\"sub\">49/50 走这条，另一条只有 1 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>丛林守护者（Keeper of the Grove）49/50</b>，艾露恩之眷（Elune's Chosen）<b>1 人</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线围绕<sk>自然之力</sk>的树人展开——<b>树人给你额外的伤害来源，也给你一点喘息空间</b>。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：三格四个候选</span><span class=\"sub\">Moonkin Aura + Owlkin Adept 接近固定</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Moonkin Aura（46/50）</b>—— <sk>星涌术</sk>给队友提供法术爆击加成，<b>团队增益</b>。</p><p style=\"margin-top:8px\"><b>Owlkin Adept（43/50）</b>缩短<sk>旋风</sk>和<sk>纠缠根须</sk>的施法时间、<b>High Winds（37/50）</b>增加<sk>旋风</sk>、<sk>台风</sk>、<sk>纠缠根须</sk>的距离、<b>Faerie Swarm（13/50）</b>缴械并减速。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">注意前三个都在强化同一件事：<b>让你的控制更好用</b>。这说明 top50 对这个专精定位的共识——控场优先于伤害。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"月火术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_starfall.jpg\" alt=\"月火术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"星火术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_arcane_starfire.jpg\" alt=\"星火术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"星涌术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_arcane_arcane03.jpg\" alt=\"星涌术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"月火术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_starfall.jpg\" alt=\"月火术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"阳炎术\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_mage_firestarter.jpg\" alt=\"阳炎术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 先铺 DoT，再谈爆发</span><span class=\"sub\">它们同时是伤害和星能来源</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>月火术</sk>和<sk>阳炎术</sk>是你的持续伤害，<b>而且它们的跳动会触发坠星生成星能</b>。</p><p style=\"margin-top:8px\"><b>所以铺 DoT 这一件事同时完成了伤害和资源积累</b>——开爆发之前先确认它们在目标身上。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · <sk>旋风</sk>：把人移出这场战斗</span><span class=\"sub\">它不是控制，是让人暂时不存在</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>目标被抛向空中，<b>既不能行动也不能被伤害</b>。</p><p style=\"margin-top:8px\"><b>最大的用途是把对面治疗从关键几秒里摘出去</b>。也可以反过来救人——把被集火的队友旋掉，对面那一波爆发就打空了。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"日光术\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_vehicle_sonicshockwave.jpg\" alt=\"日光术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>日光术</sk>是范围沉默不是单体打断</span><span class=\"sub\">对多法系阵容价值翻倍</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>在目标位置召唤光柱，<b>打断目标并沉默光柱范围内的所有敌人</b>，持续数秒。</p><p style=\"margin-top:8px\"><b>对面两个法系站一起时，这一个技能能同时封住两个人</b>——所以要看位置放，不是看谁在读条放。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"纠缠根须\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stranglevines.jpg\" alt=\"纠缠根须\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"台风\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_typhoon.jpg\" alt=\"台风\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 你的位置控制手段</span><span class=\"sub\">一个定身，一个击退</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>纠缠根须</sk>定身、<sk>台风</sk>击退并减速、<sk>群体缠绕</sk>范围定身。</p><p style=\"margin-top:8px\"><b>平衡德是靠距离活着的</b>——这些技能的用途不只是控制，更是「把想贴你的人推开」。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"树皮术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stoneclawtotem.jpg\" alt=\"树皮术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"生存本能\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_tigersroar.jpg\" alt=\"生存本能\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 被贴脸时的应对顺序</span><span class=\"sub\">你的控制大多要读条</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>树皮术</sk>减伤、<sk>生存本能</sk>大减伤、<sk>旅行形态</sk>跑路。</p><p style=\"margin-top:8px\"><b>被贴脸的真正问题不是掉血，是你的控制读不出来</b>——所以要先制造距离，再谈输出。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"超凡之盟\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_natureguardian.jpg\" alt=\"超凡之盟\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · <sk>超凡之盟</sk>要开在能站桩的时候</span><span class=\"sub\">它是纯输出冷却</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>同时维持两种日蚀并提供急速，<b>但它不给你任何生存能力</b>。</p><p style=\"margin-top:8px\"><b>开在被追着打的时候等于浪费</b>——要等对面的控制交完，或者队友把压力接过去。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\"><sk>旋风</sk>把人移出战斗，不是控住他</div><div class=\"dd\">被旋的人不能被伤害。所以它是「摘掉一个人」的技能，也能反过来救队友。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\"><sk>日光术</sk>看位置放，不看谁在读条</div><div class=\"dd\">它是范围沉默。对面两个法系站一起时，一发能封两个。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">被贴脸的问题不是掉血，是控制读不出来</div><div class=\"dd\">平衡德靠距离活着。先制造距离，再谈输出。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · <sk>旋风</sk>该留给谁？</b>通常是对面治疗，但也可能是救自己队友。<b>想清楚这一局它的用途</b>。</p><p style=\"margin-top:8px\"><b>2 · 对面法系站得近吗？</b><sk>日光术</sk>是范围沉默，两个法系站一起时一发能封两个。</p><p style=\"margin-top:8px\"><b>3 · 谁会来贴我？</b>你的控制大多要读条，被贴脸就全用不出来 —— 先想好推开他的手段。</p></div><div class=\"sc\"><h4>PvP 天赋的共识说明了什么</h4><p>前三个高使用率天赋（Moonkin Aura、Owlkin Adept、High Winds）里，<b>有两个在强化控制</b>：一个缩短<sk>旋风</sk>和<sk>纠缠根须</sk>的施法时间，一个增加它们的距离。</p><p style=\"margin-top:8px\"><b>top50 的共识是控场优先于伤害。</b>理解这一点，才知道平衡德在队里的真实定位。</p></div>"
  },
  "sk": {
    "旋风": "spell_nature_earthbind",
    "日光术": "ability_vehicle_sonicshockwave",
    "愤怒": "spell_nature_wrathv2",
    "星火术": "spell_arcane_starfire",
    "纠缠根须": "spell_nature_stranglevines",
    "台风": "ability_druid_typhoon",
    "超凡之盟": "spell_nature_natureguardian",
    "自然之力": "ability_druid_forceofnature",
    "星涌术": "spell_arcane_arcane03",
    "月火术": "spell_nature_starfall",
    "阳炎术": "ability_mage_firestarter",
    "群体缠绕": "spell_druid_massentanglement",
    "树皮术": "spell_nature_stoneclawtotem",
    "生存本能": "ability_druid_tigersroar",
    "旅行形态": "ability_druid_travelform",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "剑在人在": "ability_warrior_challange",
    "冲锋": "ability_warrior_charge",
    "英勇飞跃": "ability_heroicleap",
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
    "根基图腾": "spell_nature_groundingtotem",
    "星界转移": "ability_shaman_astralshift",
    "星辰坠落": "ability_druid_starfall",
    "变形术": "spell_nature_polymorph",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "黑曜鳞片": "inv_artifact_dragonscales",
    "悬空": "ability_evoker_hover"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "dot",
      "t": "DoT 铺在目标身上了",
      "d": "<sk>月火术</sk>和<sk>阳炎术</sk>同时是伤害和星能来源。没铺就开爆发，输出少一大截"
    },
    {
      "k": "ap",
      "t": "星能够用",
      "d": "<sk>星涌术</sk>要花星能。开窗口前先看资源，不然按不出东西"
    },
    {
      "k": "safe",
      "t": "你能安心站着输出",
      "d": "<sk>超凡之盟</sk>不给任何生存能力。被追着打的时候开等于浪费"
    },
    {
      "k": "imm",
      "t": "对面的免疫牌不在",
      "d": "圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的输出会打空"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，你现在什么都没准备好</h3><p>DoT 没铺、星能也不够。<b>平衡德的爆发要靠前期铺垫</b>——先把 DoT 上去，让坠星帮你攒资源。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，而且你现在站不住</h3><p>条件差太多，还被追着打。<b><sk>超凡之盟</sk>不给你任何生存能力</b>——这时候交是纯浪费。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是控场不是杀人</h3><p>用<sk>旋风</sk>和<sk>日光术</sk>把局面撬开，<b>把<sk>超凡之盟</sk>留给能站桩的时候</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>缺 DoT 就是伤害少一截，站不住就是被打断，免疫在就是白打</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p>DoT 铺满 → <sk>超凡之盟</sk>开窗口 → <sk>星涌术</sk>把星能花掉 → <sk>旋风</sk>把治疗摘出去那几秒里结账。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先想好<sk>旋风</sk>留给谁",
      "它把人<b>移出战斗</b>——通常是对面治疗，但也可能用来救被集火的队友。<b>这一局它的用途要先想清楚。</b>",
      "旋风"
    ],
    [
      "铺 <sk>月火术</sk> 和 <sk>阳炎术</sk>",
      "它们同时是持续伤害和星能来源（坠星）。<b>铺 DoT 这一件事同时完成了伤害和攒资源。</b>",
      "月火术"
    ],
    [
      "用<sk>愤怒</sk>或<sk>星火术</sk>切日蚀",
      "两种模式分别强化自然和奥术伤害。<b>切到哪种，取决于你接下来要放什么。</b>",
      "星火术"
    ],
    [
      "<sk>超凡之盟</sk>开在能站桩的时候",
      "同时维持两种日蚀。<b>它不给生存能力</b>——被追着打的时候开等于浪费。",
      "超凡之盟"
    ],
    [
      "<sk>星涌术</sk>把星能花掉",
      "星能攒着不花是浪费。<b>窗口里每个 GCD 都该有输出。</b>",
      "星涌术"
    ],
    [
      "<sk>日光术</sk>看位置放",
      "范围沉默。<b>对面两个法系站一起时，一发能封两个</b>——不是看谁在读条，是看谁站在一起。",
      "日光术"
    ],
    [
      "<sk>旋风</sk>把治疗摘出去",
      "被旋的人不能行动也不能被伤害。<b>这几秒是你和队友结账的时间。</b>",
      "旋风"
    ],
    [
      "被贴脸就先制造距离",
      "<sk>台风</sk>击退、<sk>纠缠根须</sk>定身、<sk>旅行形态</sk>跑路。<b>你的控制大多要读条，贴脸就全废了。</b>",
      "台风"
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
        "one": "他贴上来你就什么都读不出来。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "你是法术伤害，<b>招架对你无效</b>，但减伤部分照吃。"
          ],
          [
            "他有<sk>冲锋</sk>和<sk>英勇飞跃</sk>",
            "<b>他贴得上你，这是这个对局最大的问题</b>——你的控制要读条。"
          ],
          [
            "先制造距离",
            "<sk>台风</sk>击退、<sk>纠缠根须</sk>定身。<b>推开他比打他重要。</b>"
          ],
          [
            "<sk>旋风</sk>可以救自己",
            "被压得读不出条时，<b>旋掉他就是给自己几秒</b>。"
          ]
        ],
        "arena": "<sk>台风</sk>和<sk>纠缠根须</sk>优先用来推开他，被贴脸你就什么都放不出来。",
        "duel": "单挑靠风筝，<sk>旅行形态</sk>加<sk>纠缠根须</sk>拉开距离再输出。"
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
            "停手换目标，别把星能花进去。"
          ],
          [
            "<sk>自由祝福</sk>解你的定身",
            "你的<sk>纠缠根须</sk>对他效果有限。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你是纯法术伤害，这张牌对你完全无效</b>——这是平衡德的优势。"
          ],
          [
            "<sk>旋风</sk>摘掉治疗骑",
            "骑士的治疗和外部牌都很强，<b>把他移出关键几秒是最有效的一手</b>。"
          ]
        ],
        "arena": "<sk>保护祝福</sk>对你无效（你是法术伤害），这个对局比近战专精好打。",
        "duel": "单挑等<sk>圣盾术</sk>过去，免疫期间铺好 DoT。"
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
        "one": "两个远程对射，比谁的控制先落地。",
        "q": [
          [
            "<sk>灵龟守护</sk> —— 免疫伤害",
            "免疫期间打他等于没打。"
          ],
          [
            "<sk>逃脱</sk> + <sk>假死</sk>",
            "<b>假死会清掉你铺的 DoT</b>，这是最烦的一点。"
          ],
          [
            "<sk>纠缠根须</sk>限制他走位",
            "猎人靠走位输出，<b>定住他就断了他的节奏</b>。"
          ],
          [
            "两个远程的距离战",
            "你们射程接近，<b>比的是谁的控制先命中</b>。"
          ]
        ],
        "arena": "<sk>旋风</sk>或<sk>纠缠根须</sk>先手命中的赢，两个远程互射比的是控制先手。",
        "duel": "单挑注意他的<sk>假死</sk>会清 DoT，重新铺的成本要算进去。"
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
        "one": "他贴脸开场，而你什么都要读条。",
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
            "<b>他从潜行开场</b>",
            "开场主动权完全不在你，<b>保命牌一定要留在手上</b>。"
          ],
          [
            "<sk>台风</sk>是救命的",
            "被贴脸时先推开他，<b>距离是你活着的前提</b>。"
          ]
        ],
        "arena": "这是平衡德最难的对局之一：他贴脸开场，你的控制全要读条。保命牌留好。",
        "duel": "单挑靠<sk>台风</sk>和<sk>旅行形态</sk>反复拉开，被贴住就没戏。"
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
        "one": "两个都能控，看谁的控制更值钱。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "短时间的，等它过去再压。"
          ],
          [
            "<sk>心灵尖啸</sk>把你推开",
            "恐惧会打断你的读条，<b>这是最疼的一下</b>。"
          ],
          [
            "<sk>旋风</sk>摘掉他",
            "<b>牧师的治疗量很高，把他移出关键几秒比硬打穿现实</b>。"
          ],
          [
            "<sk>日光术</sk>沉默他",
            "范围沉默，<b>他和他队友站一起时收益翻倍</b>。"
          ]
        ],
        "arena": "<sk>旋风</sk>加<sk>日光术</sk>双管齐下，把治疗从关键几秒里摘出去。",
        "duel": "单挑用<sk>日光术</sk>沉默他的治疗，你的持续伤害耗得过他。"
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
        "one": "他抓得住你，而你需要距离。",
        "q": [
          [
            "<sk>反魔法护罩</sk>挡法术",
            "<b>你是纯法术伤害，护罩对你很有效</b>——看到就等。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "<b>这是这个对局最大的问题</b>——你的距离随时被破坏。"
          ],
          [
            "他的疫病持续压",
            "死骑不需要贴脸也能给你压力。"
          ],
          [
            "留位移应对握",
            "<sk>旅行形态</sk>和<sk>台风</sk>要留着应对他的抓人。"
          ]
        ],
        "arena": "他的<sk>死亡之握</sk>会破坏你的距离，位移牌要留着应对而不是主动跑。",
        "duel": "单挑等<sk>反魔法护罩</sk>过去再输出，护罩期间铺 DoT。"
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
        "one": "他的<sk>根基图腾</sk>会吃掉你的关键法术。",
        "q": [
          [
            "<sk>星界转移</sk> —— 大减伤",
            "不是免疫，可以打但效率下降。"
          ],
          [
            "地缚与减速",
            "萨满能限制你的走位。"
          ],
          [
            "<b><sk>根基图腾</sk>会吸你的<sk>旋风</sk></b>",
            "这是这个对局最需要注意的——<b>先打掉图腾再放关键控制</b>。"
          ],
          [
            "你的范围技能能清图腾",
            "<sk>阳炎术</sk>和<sk>星辰坠落</sk>顺手就能打掉。"
          ]
        ],
        "arena": "放<sk>旋风</sk>之前先确认<sk>根基图腾</sk>被清掉了，否则你最关键的技能会被吸走。",
        "duel": "单挑先清图腾，萨满的图腾是他一半的战力。"
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
        "one": "两个远程法系，比谁的控制链先成立。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "撕不掉，等它自己结束。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "法师的位移多，但你也是远程。"
          ],
          [
            "<sk>日光术</sk>沉默是关键",
            "<b>法师是纯法系，沉默等于让他完全失能</b>——这是这个对局最强的一手。"
          ],
          [
            "<sk>变形术</sk>要防",
            "他也能把你变羊，<b>注意保持队友能帮你解的距离</b>。"
          ]
        ],
        "arena": "<sk>日光术</sk>对纯法系是致命的，沉默期间他什么都做不了。",
        "duel": "单挑比控制链：谁先把对方控住并打出完整输出，谁赢。"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "拼持续",
        "cards": [
          "虚空行走",
          "恐惧",
          "石肤术"
        ],
        "one": "两个 DoT 职业对耗，比谁的控制更好用。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "恐惧与减速",
            "恐惧会打断你的读条，<b>这是主要威胁</b>。"
          ],
          [
            "<sk>日光术</sk>沉默他",
            "术士是纯法系，<b>沉默期间他既不能读条也不能恐惧</b>。"
          ],
          [
            "<sk>旋风</sk>打断他的节奏",
            "把他移出战斗几秒，DoT 的持续伤害也会断。"
          ]
        ],
        "arena": "<sk>日光术</sk>沉默术士的收益极高，他所有手段都是法术。",
        "duel": "单挑靠<sk>旋风</sk>和<sk>日光术</sk>反复打断他的节奏。"
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
        "one": "他贴上来你就读不出条。",
        "q": [
          [
            "<sk>业报之触</sk> —— 伤害反弹",
            "看到就停手，<b>你的爆发很集中，撞上损失大</b>。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "<b>他很难被你的控制留住</b>。"
          ],
          [
            "先推开再输出",
            "<sk>台风</sk>和<sk>纠缠根须</sk>优先用来创造距离。"
          ],
          [
            "<sk>旋风</sk>救自己",
            "被贴死的时候旋掉他，给自己几秒读条时间。"
          ]
        ],
        "arena": "被武僧贴住基本读不出条，<sk>台风</sk>要留着推开他而不是打伤害。",
        "duel": "单挑靠反复拉开距离，被贴住就输了一半。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "镜像",
        "cards": [
          "树皮术",
          "旅行形态",
          "气定神闲"
        ],
        "one": "镜像对局：谁的<sk>旋风</sk>先命中谁占优。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "两边都有，等它过去。"
          ],
          [
            "<sk>旅行形态</sk>与潜行",
            "两边机动性一样。"
          ],
          [
            "<b><sk>旋风</sk>的博弈</b>",
            "两边都有，<b>先命中的那个拿走这一轮</b>——而且要防对面用它救人。"
          ],
          [
            "<sk>日光术</sk>互相沉默",
            "谁先沉默对方，谁就能安心输出。"
          ]
        ],
        "arena": "镜像的核心是<sk>旋风</sk>和<sk>日光术</sk>的先手博弈，伤害反而是次要的。",
        "duel": "单挑比控制先手，两边输出接近。"
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
        "one": "他的机动性让你很难保持距离。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打。"
          ],
          [
            "<b>二段跳与冲刺</b>",
            "DH 位移多且短冷却，<b>你推开他他马上又回来</b>。"
          ],
          [
            "他的打断与沉默",
            "<b>你的技能大多要读条，DH 的打断很疼</b>。"
          ],
          [
            "<sk>纠缠根须</sk>反复用",
            "推开不够，要定住——<b>根须比台风更适合这个对局</b>。"
          ]
        ],
        "arena": "<sk>台风</sk>推开他没用（他马上跳回来），改用<sk>纠缠根须</sk>定住。",
        "duel": "单挑很难打，他的机动性和打断都克制你。"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "拼距离",
        "cards": [
          "悬空",
          "黑曜鳞片"
        ],
        "one": "两个远程对射，他还能飞。",
        "q": [
          [
            "<sk>黑曜鳞片</sk> · <sk>悬空</sk>",
            "悬空期间他脱离，<b>但你是远程，够得着</b>。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离。"
          ],
          [
            "<sk>日光术</sk>打断蓄力",
            "<b>唤魔师有大量蓄力技能，沉默一次抵消一大段</b>。"
          ],
          [
            "两个远程的距离战",
            "你们射程接近，比的是控制和打断的时机。"
          ]
        ],
        "arena": "<sk>日光术</sk>的范围沉默对蓄力型对手价值极高。",
        "duel": "单挑比打断时机，他的伤害大半来自蓄力技能。"
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
      "s": "你对一个目标用了<sk>旋风</sk>。",
      "a": "他现在是什么状态？",
      "o": [
        "被控住，但你能继续打他",
        "被移出战斗：不能行动，也不能被伤害",
        "移动速度降低",
        "受到持续伤害"
      ],
      "r": 1,
      "e": [
        "这是普通控制的效果，旋风不是。",
        "正解。<b><sk>旋风</sk>把目标抛向空中，他既不能行动也不能被伤害</b>——这是「让人暂时不存在」，不是「控住他打」。",
        "不是减速。",
        "它不造成伤害。"
      ],
      "k": "<sk>旋风</sk>是把人移出战斗，不是控住他。这个区别决定了它的用法。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 3,
      "s": "你的队友被对面集火，血量危险，你的<sk>旋风</sk>好着。",
      "a": "能用来救他吗？",
      "o": [
        "不能，旋风只能对敌人用",
        "能，旋掉队友让他免疫那一波伤害",
        "能，但会浪费",
        "不能，会打断队友输出"
      ],
      "r": 1,
      "e": [
        "<sk>旋风</sk>可以对友方使用。",
        "正解。<b>被旋的人不能被伤害</b>——把被集火的队友旋掉，对面那一波爆发就打空了。这是<sk>旋风</sk>最容易被忽略的用法。",
        "救下一条命不是浪费。",
        "确实会打断他的输出，但他快死了，命比输出重要。"
      ],
      "k": "「不能被伤害」是双向的。<sk>旋风</sk>既能摘掉对面的人，也能保住自己的人。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "对面法师和术士站得很近，法师在读条。你的<sk>日光术</sk>好着。",
      "a": "放在哪？",
      "o": [
        "放在法师身上",
        "放在能同时覆盖两个人的位置",
        "等术士也开始读条再放",
        "放在自己脚下"
      ],
      "r": 1,
      "e": [
        "只封住法师，浪费了它的范围效果。",
        "正解。<b><sk>日光术</sk>是范围沉默</b>——两个法系站一起时，一发能同时封住两个人。<b>要看位置放，不是看谁在读条放。</b>",
        "等两个都读条，第一个已经放完了。",
        "它要放在敌人位置。"
      ],
      "k": "范围沉默看的是站位，不是读条状态。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "你被战士贴着打，一直读不出条。",
      "a": "真正的问题是什么？",
      "o": [
        "掉血太快",
        "你的控制和输出大多要读条，被贴脸就全废了",
        "伤害不够",
        "装备不行"
      ],
      "r": 1,
      "e": [
        "掉血是症状，不是根本问题。",
        "正解。<b>平衡德靠距离活着</b>——被贴脸的真正损失不是血量，是你的整套技能都用不出来。所以要先制造距离，再谈输出。",
        "伤害够不够跟能不能放出来是两回事。",
        "这是机制问题不是装备问题。"
      ],
      "k": "认清自己被克制时损失的是什么。平衡德被贴脸损失的是「能不能施法」。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 2,
      "s": "你准备开<sk>超凡之盟</sk>，但正被两个人追着打。",
      "a": "该开吗？",
      "o": [
        "开，输出窗口不等人",
        "不开，它不提供任何生存能力",
        "开，同时交<sk>树皮术</sk>",
        "开一半"
      ],
      "r": 1,
      "e": [
        "被追着打的时候你根本站不住输出。",
        "正解。<b><sk>超凡之盟</sk>是纯输出冷却，不给你任何生存能力</b>——要开在能安心站桩的时候：对面控制交完，或者队友把压力接过去。",
        "交减伤能撑一会，但你还是要移动，输出照样不满。",
        "冷却不能开一半。"
      ],
      "k": "纯输出冷却要开在能站住的时候。它不解决你正在挨打这件事。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "开局你还没进战斗，星能是多少？",
      "a": "",
      "o": [
        "0，需要从头攒",
        "50，Nature's Balance 让它脱战时平衡到 50",
        "满的",
        "随机"
      ],
      "r": 1,
      "e": [
        "如果没有 Nature's Balance 才是 0。",
        "正解。<b>Nature's Balance 让你脱战时星能平衡到 50 而不是清零</b>——这意味着开局你就有资源可用，能直接放<sk>星涌术</sk>。",
        "不是满的，是平衡到 50。",
        "是固定值不是随机。"
      ],
      "k": "知道自己开局有多少资源，才知道第一个技能能放什么。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "你要开一轮爆发，但目标身上还没有 DoT。",
      "a": "先做什么？",
      "o": [
        "直接开<sk>超凡之盟</sk>",
        "先铺<sk>月火术</sk>和<sk>阳炎术</sk>",
        "先放<sk>星涌术</sk>",
        "先<sk>旋风</sk>控住"
      ],
      "r": 1,
      "e": [
        "没有 DoT 的爆发窗口伤害会少一大截。",
        "正解。<b>DoT 同时是持续伤害和星能来源（坠星）</b>——铺 DoT 这一件事同时完成了伤害和攒资源。这是平衡德开窗口前的必要动作。",
        "<sk>星涌术</sk>是花星能的，先攒再花。",
        "控制要卡在伤害落地的时候。"
      ],
      "k": "平衡德的 DoT 是地基。它同时给伤害和资源。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 3,
      "s": "对面萨满放了<sk>根基图腾</sk>，你准备用<sk>旋风</sk>控他们的治疗。",
      "a": "该注意什么？",
      "o": [
        "没什么，直接放",
        "图腾会把你的<sk>旋风</sk>吸走，先清掉它",
        "换个目标",
        "等图腾过期"
      ],
      "r": 1,
      "e": [
        "直接放会被图腾吸掉。",
        "正解。<b><sk>根基图腾</sk>把针对队友的下一个有害法术重定向到自己身上</b>——你最关键的控制会被它吃掉。先用范围技能清掉图腾。",
        "换目标不解决图腾的存在。",
        "等它过期，你的控制时机也过了。"
      ],
      "k": "放关键控制前，先确认对面没有能吸掉它的东西。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "你的日蚀模式是「日蚀（太阳）」，强化自然伤害。",
      "a": "该主要放什么？",
      "o": [
        "<sk>星火术</sk>（奥术）",
        "<sk>愤怒</sk>（自然）",
        "<sk>星涌术</sk>",
        "都可以"
      ],
      "r": 1,
      "e": [
        "<sk>星火术</sk>是奥术伤害，日蚀（太阳）不强化它。",
        "正解。<b>日蚀（太阳）强化自然伤害，<sk>愤怒</sk>正是自然伤害</b>。日蚀（月亮）则强化奥术和<sk>星火术</sk>。用对模式伤害差别很大。",
        "<sk>星涌术</sk>是星能消耗技能，两种模式下都能用。",
        "模式决定了哪种更强。"
      ],
      "k": "两种日蚀分别强化两种伤害类型。放错技能等于浪费加成。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "平衡德的 PvP 天赋里，使用率最高的三个中有两个在强化控制（缩短<sk>旋风</sk>施法时间、增加控制距离）。",
      "a": "这说明什么？",
      "o": [
        "数据没意义",
        "top50 的共识是控场优先于伤害",
        "应该换成输出天赋",
        "样本太小"
      ],
      "r": 1,
      "e": [
        "分布形状本身就是信息。",
        "正解。<b>Owlkin Adept 缩短<sk>旋风</sk>和<sk>纠缠根须</sk>的施法时间，High Winds 增加它们的距离</b>——两个都在强化同一件事。理解这一点才知道平衡德在队里的真实定位。",
        "这是 top50 的实测选择。",
        "50 人样本和其他专精一样。"
      ],
      "k": "看 PvP 天赋在强化什么，就知道这个专精的真实定位。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "对面圣骑士给队友上了<sk>保护祝福</sk>（免疫物理），那是你的目标。",
      "a": "对平衡德影响多大？",
      "o": [
        "完全打不动",
        "完全没影响，你是纯法术伤害",
        "影响一半",
        "只影响 DoT"
      ],
      "r": 1,
      "e": [
        "那是物理专精的处境。",
        "正解。<b>平衡德是纯法术伤害，物理免疫对你完全无效</b>——这是这个专精对上骑士队伍的天然优势。",
        "没有影响。",
        "DoT 也是法术伤害。"
      ],
      "k": "先认清自己的伤害类型。纯法术专精不怕免疫物理的牌。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "你的队友控住了对面治疗，你的星能是满的。",
      "a": "该做什么？",
      "o": [
        "继续攒星能",
        "立刻把星能花在<sk>星涌术</sk>上",
        "铺 DoT",
        "等自己的窗口"
      ],
      "r": 1,
      "e": [
        "星能已经满了，再攒会溢出。",
        "正解。<b>治疗被控的时间是伤害唯一不会被补回来的窗口</b>，而且你的资源正好是满的——这是最理想的结账时机。",
        "DoT 该在这之前就铺好。",
        "等自己窗口，治疗早解控了。"
      ],
      "k": "资源满 + 治疗不在 = 立刻结账。这两个条件很少同时出现。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你被恶魔猎手贴脸，用<sk>台风</sk>把他推开了。",
      "a": "这解决问题了吗？",
      "o": [
        "解决了，他被推开了",
        "没有，DH 位移多，马上又回来",
        "解决了一半",
        "取决于他的血量"
      ],
      "r": 1,
      "e": [
        "推开只是暂时的。",
        "正解。<b>DH 的位移多且短冷却</b>——推开他他马上就跳回来。对这类对手<sk>纠缠根须</sk>（定住）比<sk>台风</sk>（推开）更有效。",
        "「一半」的说法太模糊，关键是要换手段。",
        "跟血量无关，是机动性的问题。"
      ],
      "k": "对位移多的对手，「定住」比「推开」有效。推开只是给他一个位移的理由。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "对面猎人用<sk>假死</sk>脱战了，你刚在他身上铺满 DoT。",
      "a": "损失了什么？",
      "o": [
        "没什么",
        "DoT 全清了，前面的铺垫归零",
        "只是少打几下",
        "他会回来的"
      ],
      "r": 1,
      "e": [
        "损失不小。",
        "正解。<b>脱战会清掉你身上铺的 DoT</b>——而 DoT 同时是你的伤害和星能来源，等于双重损失。",
        "损失的是整个铺垫。",
        "他回来了 DoT 也没了，要重铺。"
      ],
      "k": "对手能脱战时，铺 DoT 的成本要算进去——可能白铺。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "你手上<sk>旋风</sk>和<sk>纠缠根须</sk>都好着，想控住对面治疗。",
      "a": "哪个更适合把他排除出这一波？",
      "o": [
        "<sk>纠缠根须</sk>，定住他",
        "<sk>旋风</sk>，他完全不能行动也不能被治疗",
        "两个一起",
        "都不行"
      ],
      "r": 1,
      "e": [
        "定身只限制移动，他还能施法治疗。",
        "正解。<b><sk>旋风</sk>让人完全失能</b>——不能行动、不能施法、也不能被伤害。要把治疗从这一波里摘出去，只有它能做到。",
        "两个叠一起浪费。",
        "<sk>旋风</sk>正是干这个的。"
      ],
      "k": "定身限制移动，<sk>旋风</sk>排除存在。要「摘掉一个人」只能用后者。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 1,
      "s": "平衡德的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "急速",
        "精通",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 急速 85 > 精通 12 > 爆击 1</b>。",
        "急速是第二，差距不大——它缩短施法时间，对读条多的专精价值高。",
        "精通只有 12。",
        "爆击几乎是 0。"
      ],
      "k": "平衡德堆全能和急速。急速对读条多的专精尤其重要。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 3,
      "s": "镜像对局，两边都有<sk>旋风</sk>。",
      "a": "核心博弈是什么？",
      "o": [
        "比谁伤害高",
        "谁的<sk>旋风</sk>先命中，以及要防对面用它救人",
        "比谁血厚",
        "比谁跑得快"
      ],
      "r": 1,
      "e": [
        "两边输出接近。",
        "正解。<b><sk>旋风</sk>既能摘掉你的目标，也能救走被你集火的人</b>——所以镜像里既要抢先手，也要防对面用它拆你的击杀。",
        "血量不是胜负手。",
        "机动性一样。"
      ],
      "k": "两边都有同一张关键牌时，要同时考虑「我怎么用」和「他会怎么用」。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "对面术士在读一个关键法术，你的<sk>日光术</sk>好着。",
      "a": "用它有什么额外好处？",
      "o": [
        "只是打断",
        "打断 + 沉默范围内所有敌人数秒",
        "造成大量伤害",
        "让他移动变慢"
      ],
      "r": 1,
      "e": [
        "它不只是打断。",
        "正解。<b><sk>日光术</sk>打断目标并沉默光柱范围内所有敌人</b>，持续数秒——对纯法系对手是致命的，沉默期间他什么都做不了。",
        "它的伤害很低。",
        "不是减速效果。"
      ],
      "k": "<sk>日光术</sk>是打断 + 持续沉默的组合。对法系阵容价值远超普通打断。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "你的星能满了但还在铺 DoT。",
      "a": "有什么问题？",
      "o": [
        "没问题",
        "星能溢出了，该先花掉",
        "DoT 铺错了",
        "应该开爆发"
      ],
      "r": 1,
      "e": [
        "星能有上限，满了继续攒是浪费。",
        "正解。<b>星能满了之后生成的都溢出了</b>——该先用<sk>星涌术</sk>花掉，再继续铺 DoT。资源管理是持续的，不是攒满就完事。",
        "DoT 要铺，但顺序上该先花掉满的资源。",
        "开爆发跟资源溢出是两件事。"
      ],
      "k": "资源接近满就该花。这跟增强萨的漩涡武器是同一类判断。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "对面死骑用<sk>死亡之握</sk>把你拉过去了。",
      "a": "该做什么？",
      "o": [
        "立刻用<sk>旅行形态</sk>跑",
        "先用<sk>台风</sk>或<sk>纠缠根须</sk>创造距离",
        "继续输出",
        "交减伤硬抗"
      ],
      "r": 1,
      "e": [
        "直接跑，他握的冷却转好了又能拉回来。",
        "正解。<b>先用控制技能限制他，再创造距离</b>——单纯跑路对有抓人手段的对手无效，要先让他动不了。",
        "贴脸状态下你读不出条。",
        "硬抗不解决「读不出条」这个核心问题。"
      ],
      "k": "被抓住时先控制再脱离，单纯跑路会被再抓回来。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "你的<sk>超凡之盟</sk>刚开，对面突然把火力全转到你身上。",
      "a": "该怎么办？",
      "o": [
        "硬站着打完窗口",
        "边跑边打，能打多少打多少",
        "立刻停手交保命",
        "换目标"
      ],
      "r": 1,
      "e": [
        "硬站着会死。",
        "正解。<b>窗口在燃烧，但活着更重要</b>——用<sk>树皮术</sk>之类的减伤边撤边打，能打多少打多少。完全放弃窗口太亏，硬站着又会死。",
        "完全停手把整个窗口浪费了。",
        "换目标不解决你正在挨打。"
      ],
      "k": "窗口被打断时不要走极端：既不硬站，也不完全放弃。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "你在考虑<sk>旋风</sk>这一局该留给谁。",
      "a": "判断依据是什么？",
      "o": [
        "永远留给对面治疗",
        "看这一局哪个人被摘掉几秒对局面影响最大",
        "留给血最低的",
        "留给自保"
      ],
      "r": 1,
      "e": [
        "治疗通常是好目标，但不是唯一答案。",
        "正解。<b><sk>旋风</sk>的价值在于「把谁摘出去几秒」</b>——可能是治疗，可能是正在爆发的输出，也可能是被集火的自己人。要看这一局的具体局面。",
        "血量不是判断依据。",
        "自保是一种用法，但不该是默认。"
      ],
      "k": "万能牌的用法要按局面定，不要固化成「永远给某个人」。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "对面贼开了<sk>暗影斗篷</sk>（免疫法术）。",
      "a": "对平衡德影响多大？",
      "o": [
        "完全打不动，你是纯法术伤害",
        "影响小",
        "完全没影响",
        "只影响 DoT"
      ],
      "r": 0,
      "e": [
        "正解。<b>平衡德是纯法术伤害，斗篷对你接近完全免疫</b>——这是这个专精最难受的一张对面牌，比对混合伤害的专精疼得多。",
        "影响很大。",
        "影响很大。",
        "所有伤害都受影响。"
      ],
      "k": "纯法术专精怕免疫法术的牌。认清自己的伤害构成才知道哪张牌最疼。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "你想用<sk>纠缠根须</sk>定住一个正在跑的目标。",
      "a": "需要注意什么？",
      "o": [
        "没什么",
        "它要读条，被打断就失败",
        "它是瞬发的",
        "它不能用于移动中的目标"
      ],
      "r": 1,
      "e": [
        "有关键限制。",
        "正解。<b><sk>纠缠根须</sk>需要读条</b>——被打断或被贴脸就放不出来。这也是 Owlkin Adept（缩短施法时间）使用率高达 43/50 的原因。",
        "基础版本不是瞬发。",
        "可以用于移动的目标。"
      ],
      "k": "知道自己哪些技能要读条，才知道被贴脸时还剩什么手段。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到平衡德的英雄天赋是 49/1（丛林守护者 vs 艾露恩之眷），几乎没人走第二条。",
      "a": "这跟增强萨的 36/14 有什么区别？",
      "o": [
        "没区别",
        "49/1 是唯一解，36/14 说明有真实的讨论空间",
        "49/1 的数据不可靠",
        "两个都是唯一解"
      ],
      "r": 1,
      "e": [
        "分布形状差别很大。",
        "正解。<b>49/1 意味着另一条线基本不成立，36/14 意味着有 28% 的人选了另一条</b>——前者不用纠结，后者需要判断。看分布形状能省下大量决策成本。",
        "数据来源相同。",
        "36/14 不是唯一解。"
      ],
      "k": "看分布形状：接近 50/0 的不用想，35/15 这种才需要你判断。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士冲上来贴住你。",
      "a": "第一件事做什么？",
      "o": [
        "继续读条输出",
        "用<sk>台风</sk>或<sk>纠缠根须</sk>创造距离",
        "交减伤硬抗",
        "换目标"
      ],
      "r": 1,
      "e": [
        "贴脸状态下你读不出条。",
        "正解。<b>平衡德被贴脸损失的是「能不能施法」</b>——先推开或定住他，再谈输出。",
        "硬抗不解决读不出条的问题。",
        "换目标他还是贴着你。"
      ],
      "k": "被贴脸的专精，第一动作是创造距离不是硬打。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "对平衡德影响多大？",
      "o": [
        "很大，招架挡住你的伤害",
        "招架对你无效（你是法术），但减伤部分照吃",
        "完全免疫",
        "没有影响"
      ],
      "r": 1,
      "e": [
        "招架挡的是物理攻击。",
        "正解。<b>你是纯法术伤害，招架对你无效</b>——但减伤部分照样生效，所以效率还是会下降。",
        "不是免疫。",
        "减伤部分有影响。"
      ],
      "k": "分清对面防御牌的两个部分：招架（挡物理）和减伤（挡全部）。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给队友上了<sk>保护祝福</sk>。",
      "a": "你还能打那个目标吗？",
      "o": [
        "不能，完全免疫",
        "能，你是法术伤害，物理免疫对你无效",
        "能，但伤害减半",
        "要看祝福剩余时间"
      ],
      "r": 1,
      "e": [
        "那是物理专精的处境。",
        "正解。<b><sk>保护祝福</sk>免疫的是物理伤害，而平衡德是纯法术</b>——这张牌对你完全无效，可以继续打。",
        "伤害不减。",
        "跟剩余时间无关，是伤害类型的问题。"
      ],
      "k": "免疫物理的牌对纯法术专精无效。这是平衡德对骑士队伍的优势。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "对面是治疗骑，治疗量很高。",
      "a": "平衡德最有效的一手是什么？",
      "o": [
        "硬打穿他的治疗",
        "<sk>旋风</sk>把他从关键几秒里摘出去",
        "用 DoT 磨",
        "换目标"
      ],
      "r": 1,
      "e": [
        "骑士的治疗量很高，硬打穿不现实。",
        "正解。<b><sk>旋风</sk>让他完全失能几秒</b>——这几秒你和队友的伤害不会被补回来，比硬打穿现实得多。",
        "DoT 会被他持续补回来。",
        "治疗是关键目标。"
      ],
      "k": "打不穿治疗量时，把治疗摘出去比继续打更有效。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "对上猎人，两个远程互射。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁的控制先命中",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "两个远程输出接近。",
        "正解。<b>射程接近的两个远程，比的是控制先手</b>——<sk>旋风</sk>或<sk>纠缠根须</sk>先命中的那个能打出完整输出。",
        "血量不是胜负手。",
        "两边都能跑。"
      ],
      "k": "同类型对局（都是远程），控制先手决定谁能打出完整输出。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "猎人用<sk>假死</sk>脱战。",
      "a": "对你的影响？",
      "o": [
        "没影响",
        "你铺的 DoT 全清了",
        "只是少打几下",
        "他会立刻回来"
      ],
      "r": 1,
      "e": [
        "影响不小。",
        "正解。<b>脱战清掉 DoT</b>——而 DoT 是你的伤害和星能双重来源，损失比想象中大。",
        "损失的是整个铺垫。",
        "回来了也要重铺 DoT。"
      ],
      "k": "对能脱战的对手，铺 DoT 的成本要算进去。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "贼开了<sk>暗影斗篷</sk>。",
      "a": "为什么这对平衡德特别疼？",
      "o": [
        "因为伤害高",
        "因为你是纯法术伤害，斗篷对你接近完全免疫",
        "因为它能隐身",
        "因为它反弹伤害"
      ],
      "r": 1,
      "e": [
        "斗篷不造成伤害。",
        "正解。<b>平衡德所有输出都是法术</b>——斗篷免疫法术，对你接近完全免疫。这是这个专精最难受的一张对面牌。",
        "斗篷不提供隐身。",
        "不反弹。"
      ],
      "k": "纯法术专精怕免疫法术的牌，程度比混合伤害专精严重得多。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼从潜行开场，你不知道他什么时候动手。",
      "a": "该怎么准备？",
      "o": [
        "到处走动找他",
        "保命和位移牌留在手上",
        "提前开<sk>超凡之盟</sk>",
        "贴着队友站"
      ],
      "r": 1,
      "e": [
        "找贼是徒劳的。",
        "正解。<b>你的控制全要读条，被贼贴住就全废了</b>——所以<sk>台风</sk>和位移牌必须留着，用来在他现身时创造距离。",
        "提前开输出冷却，他现身时早过期了。",
        "贴队友是好位置，但核心是留牌。"
      ],
      "k": "对手决定开场时机时，留牌比提前动作重要。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师治疗量很高，你们打不穿。",
      "a": "平衡德的解法是什么？",
      "o": [
        "提高输出",
        "<sk>旋风</sk>加<sk>日光术</sk>双管齐下把他排除",
        "用 DoT 磨",
        "放弃"
      ],
      "r": 1,
      "e": [
        "牧师的治疗量硬打穿不现实。",
        "正解。<b><sk>旋风</sk>摘掉他几秒、<sk>日光术</sk>沉默他几秒</b>——平衡德有两种把治疗排除出战斗的手段，这是它的强项。",
        "DoT 会被补回来。",
        "有解法，不用放弃。"
      ],
      "k": "有多种排除手段的专精，对高治疗量的对手有结构性优势。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师放<sk>心灵尖啸</sk>把你恐惧了。",
      "a": "损失是什么？",
      "o": [
        "只是被控几秒",
        "读条被打断，你的整套节奏断了",
        "只损失移动",
        "没什么损失"
      ],
      "r": 1,
      "e": [
        "损失不只是几秒。",
        "正解。<b>你的控制和输出大多要读条</b>——恐惧打断的不只是当前技能，是整个节奏。这是这个对局最疼的一下。",
        "恐惧会让你失控移动。",
        "损失很大。"
      ],
      "k": "读条多的专精，被打断类控制的损失远大于单纯的时间损失。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用<sk>死亡之握</sk>把你拉过去。",
      "a": "这个对局最大的问题是什么？",
      "o": [
        "他伤害高",
        "他能随时破坏你的距离",
        "他血厚",
        "他控制多"
      ],
      "r": 1,
      "e": [
        "伤害不是核心问题。",
        "正解。<b>平衡德靠距离活着，而<sk>死亡之握</sk>让你的距离随时作废</b>——这是这个对局的核心矛盾。位移牌要留着应对它。",
        "血厚不是关键。",
        "握就是他的主要手段。"
      ],
      "k": "认清每个对局的核心矛盾。对死骑，矛盾是「距离随时被破坏」。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "对你影响多大？",
      "o": [
        "很大，你是纯法术伤害",
        "影响小",
        "完全没影响",
        "只影响 DoT"
      ],
      "r": 0,
      "e": [
        "正解。<b>护罩吸收法术伤害，而你所有输出都是法术</b>——效率大幅下降，看到就该等它过去。",
        "影响很大。",
        "影响很大。",
        "所有伤害都受影响。"
      ],
      "k": "纯法术专精对上抗法术的牌，效率损失最大。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 3,
      "s": "萨满放了<sk>根基图腾</sk>，你准备<sk>旋风</sk>他们的治疗。",
      "a": "该怎么做？",
      "o": [
        "直接放旋风",
        "先清掉图腾再放",
        "换目标",
        "等图腾过期"
      ],
      "r": 1,
      "e": [
        "图腾会把你的<sk>旋风</sk>吸走——这是最亏的一次浪费。",
        "正解。<b><sk>根基图腾</sk>重定向针对队友的下一个有害法术</b>。用<sk>阳炎术</sk>或<sk>星辰坠落</sk>顺手清掉再放关键控制。",
        "换目标不解决图腾。",
        "等它过期，你的时机也过了。"
      ],
      "k": "放关键控制前先清掉能吸它的东西。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 1,
      "s": "萨满开了<sk>星界转移</sk>。",
      "a": "这是免疫吗？",
      "o": [
        "是，完全免疫",
        "不是，是大幅减伤",
        "是，要停手",
        "看层数"
      ],
      "r": 1,
      "e": [
        "它不是免疫。",
        "正解。<b><sk>星界转移</sk>是大幅减伤不是免疫</b>——可以继续打，只是效率下降。这跟<sk>圣盾术</sk>那类完全免疫要分开对待。",
        "不用完全停手。",
        "跟层数无关。"
      ],
      "k": "分清「减伤」和「免疫」。前者可以硬打，后者必须停手。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "对上法师，你的<sk>日光术</sk>好着。",
      "a": "它在这个对局的价值？",
      "o": [
        "一般",
        "极高，法师是纯法系，沉默期间他完全失能",
        "低",
        "看法师血量"
      ],
      "r": 1,
      "e": [
        "价值很高。",
        "正解。<b>法师所有手段都是法术</b>——被沉默期间他既不能输出也不能自保。这是这个对局最强的一手。",
        "价值极高。",
        "跟血量无关。"
      ],
      "k": "沉默对纯法系对手是「完全失能」，不只是打断一个技能。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "对上法师，两个远程法系互相拉扯。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "谁的控制链先成立",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "两边输出接近。",
        "正解。<b>两个法系比的是谁先把对方控住并打出完整输出</b>——<sk>日光术</sk>、<sk>旋风</sk>、<sk>纠缠根须</sk>的先手很关键。",
        "都是布甲。",
        "两边机动性接近。"
      ],
      "k": "法系互射的对局，控制链先成立的赢。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "对上术士，你的<sk>日光术</sk>好着。",
      "a": "为什么它价值很高？",
      "o": [
        "伤害高",
        "术士是纯法系，沉默期间他既不能读条也不能恐惧",
        "能驱散",
        "范围大"
      ],
      "r": 1,
      "e": [
        "<sk>日光术</sk>伤害很低。",
        "正解。<b>术士的所有手段（DoT、恐惧、自愈）都是法术</b>——沉默期间他完全无法运作。",
        "它不驱散。",
        "范围是加分项，但核心是沉默对纯法系的价值。"
      ],
      "k": "对纯法系对手，沉默的价值远高于打断。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士靠恐惧和 DoT 拉扯。",
      "a": "平衡德怎么应对恐惧？",
      "o": [
        "硬吃",
        "用<sk>旋风</sk>或<sk>日光术</sk>打断他的节奏",
        "交减伤",
        "让队友解"
      ],
      "r": 1,
      "e": [
        "恐惧会打断你的读条，硬吃损失很大。",
        "正解。<b><sk>旋风</sk>把他移出战斗、<sk>日光术</sk>沉默他</b>——两个都能阻止他继续施放恐惧。主动打断比被动承受好。",
        "减伤不防恐惧。",
        "被动等队友，节奏已经断了。"
      ],
      "k": "对以控制为主要手段的对手，用自己的控制打断他的节奏。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 2,
      "s": "武僧贴上来，你读不出条。",
      "a": "优先做什么？",
      "o": [
        "硬读",
        "用<sk>台风</sk>推开创造距离",
        "交<sk>超凡之盟</sk>",
        "换目标"
      ],
      "r": 1,
      "e": [
        "贴脸状态读条会被打断。",
        "正解。<b>先创造距离</b>——这是平衡德对所有近战的通用应对。<sk>台风</sk>击退加减速，能换来几秒读条时间。",
        "<sk>超凡之盟</sk>不给生存能力，被贴住时开是浪费。",
        "换目标他还贴着你。"
      ],
      "k": "被近战贴住时，创造距离优先于一切。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "武僧开了<sk>业报之触</sk>。",
      "a": "平衡德该注意什么？",
      "o": [
        "继续打，伤害不高",
        "停手，你的爆发很集中撞上损失大",
        "用 DoT 继续磨",
        "换目标"
      ],
      "r": 1,
      "e": [
        "你打多少弹多少。",
        "正解。<b>平衡德的爆发（<sk>超凡之盟</sk> + 满星能）很集中</b>——撞上反伤损失很大。停手等它过去。",
        "DoT 的伤害也会被反弹。",
        "换目标是选项，但停手更直接。"
      ],
      "k": "集中爆发型的输出撞上反伤，损失比持续型大。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 3,
      "s": "镜像对局，你准备<sk>旋风</sk>对面治疗。",
      "a": "要防什么？",
      "o": [
        "没什么",
        "他可能用自己的<sk>旋风</sk>救走被你集火的人",
        "他会打断你",
        "他会跑"
      ],
      "r": 1,
      "e": [
        "镜像对局要考虑对方有同样的牌。",
        "正解。<b><sk>旋风</sk>能救人</b>——你集火某个目标时，对面德鲁伊可能把那个人旋走，让你的爆发打空。要预判这一手。",
        "打断是一方面，但不是<sk>旋风</sk>的博弈核心。",
        "跑不是主要问题。"
      ],
      "k": "镜像对局里，要同时想「我怎么用这张牌」和「他会怎么用」。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "镜像对局，两边输出接近。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "<sk>旋风</sk>和<sk>日光术</sk>的先手博弈",
        "谁血厚",
        "谁 DoT 铺得快"
      ],
      "r": 1,
      "e": [
        "两边输出接近，不是胜负手。",
        "正解。<b>镜像的核心是控制先手</b>——谁先沉默对方、谁先把对方治疗摘出去，谁就能打出完整的一轮。",
        "血量接近。",
        "DoT 是基础，不是胜负手。"
      ],
      "k": "输出接近的镜像对局，控制先手决定胜负。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 贴上来，你用<sk>台风</sk>推开了他。",
      "a": "够了吗？",
      "o": [
        "够了",
        "不够，他位移多马上回来，该用<sk>纠缠根须</sk>定住",
        "够了但要跟输出",
        "应该换目标"
      ],
      "r": 1,
      "e": [
        "推开只是暂时的。",
        "正解。<b>DH 的位移多且短冷却</b>——推开他他马上跳回来。<sk>纠缠根须</sk>（定住）比<sk>台风</sk>（推开）更适合这个对局。",
        "他会立刻回来，跟不上输出。",
        "换目标不解决他贴着你。"
      ],
      "k": "对位移多的对手，定身比击退有效。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 有打断手段。",
      "a": "对平衡德影响大吗？",
      "o": [
        "很大，你的技能大多要读条",
        "影响小，你的技能是瞬发",
        "没影响",
        "只影响 DoT"
      ],
      "r": 0,
      "e": [
        "正解。<b>平衡德的控制和主要输出都要读条</b>——DH 的打断加上高机动性，是这个专精最难打的对局之一。",
        "你的技能大多要读条。",
        "影响很大。",
        "影响的是所有读条技能。"
      ],
      "k": "读条多的专精，对面的打断威胁最大。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "用<sk>日光术</sk>有什么额外价值？",
      "o": [
        "只是打断",
        "打断 + 持续沉默，抵消他后续的蓄力",
        "造成大量伤害",
        "让他落地"
      ],
      "r": 1,
      "e": [
        "它不只是打断。",
        "正解。<b><sk>日光术</sk>打断当前施法并持续沉默数秒</b>——对蓄力技能多的唤魔师，这一发能抵消好几个技能。",
        "伤害很低。",
        "它不影响悬空。"
      ],
      "k": "持续沉默对「技能都要读条/蓄力」的对手价值最大。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "对平衡德影响多大？",
      "o": [
        "完全够不着",
        "影响小，你是远程，够得着",
        "只能用 DoT",
        "要等他落地"
      ],
      "r": 1,
      "e": [
        "那是近战的处境。",
        "正解。<b>平衡德是远程专精，悬空对你影响很小</b>——你照样够得着他。这是对上唤魔师的天然优势。",
        "所有技能都够得着。",
        "不用等。"
      ],
      "k": "远程专精对「垂直脱离」类技能天然免疫。认清自己的射程优势。"
    }
  ]
};
