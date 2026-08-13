module.exports = {
  "meta": {
    "title": "射击猎人 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 射击猎人 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "射击猎人,猎人,PVP,竞技场,魔兽世界,12.1,Midnight,marksmanship hunter,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你手上的牌比谁都多：免疫、脱战、位移、陷阱、控制。<br>射击猎人的活不是打伤害，是<b>让对面永远拿不到他们想要的那一波</b>。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灵龟守护\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_pet_turtle.jpg\" alt=\"灵龟守护\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"假死\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feigndeath.jpg\" alt=\"假死\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"逃脱\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feint.jpg\" alt=\"逃脱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？你有全场最厚的一叠脱身牌</span><span class=\"sub\">免疫、脱战、位移各一张，还有陷阱</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>灵龟守护</sk>免疫伤害、<sk>假死</sk>直接脱战、<sk>逃脱</sk>后跳、<sk>猎豹守护</sk>加速。<b>加上陷阱和控制，你能让一场战斗反复重来。</b></p><p style=\"margin-top:8px\">所以猎人的判断跟别的远程不一样——<b>不是「这一波我能打多少」，是「这一波我要不要打」</b>。打不过就重置，等牌转好再来。这个专精的强度有一半在耐心上。</p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">射击猎人的节奏挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"瞄准射击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_spear_07.jpg\" alt=\"瞄准射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"急速射击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_efficiency.jpg\" alt=\"急速射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">输出时钟 · 两个主力</span><span class=\"sub\">都要施法时间</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>瞄准射击</sk>要读条、<sk>急速射击</sk>是引导。<b>这是射击猎人和其他猎人专精最大的区别</b>——你的伤害要站定。</p><p style=\"margin-top:8px\"><b>所以它比想象中更怕被贴脸</b>：牌多不代表能一边跑一边打满伤害。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灵龟守护\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_pet_turtle.jpg\" alt=\"灵龟守护\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"假死\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feigndeath.jpg\" alt=\"假死\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">重置时钟 · 你能重来几次</span><span class=\"sub\">这是猎人的核心资源</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>灵龟守护</sk>免疫、<sk>假死</sk>脱战。<b>Survival Tactics（50/50 全员必带）让假死期间大幅减伤</b>。</p><p style=\"margin-top:8px\"><b>每张牌都能让一波攻势作废</b>——判断的核心是「现在值不值得用掉一次重置」。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"胁迫\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_devour.jpg\" alt=\"胁迫\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">控制时钟 · 陷阱与昏迷</span><span class=\"sub\">陷阱要预判，昏迷可以直接用</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>冰冻陷阱</sk>需要对面踩上去、<sk>胁迫</sk>是宠物直接昏迷。</p><p style=\"margin-top:8px\"><b>Diamond Ice（33/50）让冰冻陷阱不可驱散但只有 4 秒</b>——这是个取舍：短但稳，对上有驱散的队伍值得换。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"百发百中\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_trueshot.jpg\" alt=\"百发百中\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：黑暗游侠 Dark Ranger</span><span class=\"sub\">48/50 走这条，哨兵只有 2 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>黑暗游侠（Dark Ranger）48/50</b>，哨兵（Sentinel）<b>2 人</b>。这不是推荐，是唯一解。</p><p style=\"margin-top:8px\">这条线把<sk>夺命射击</sk>换成 Black Arrow——<b>它能在敌人血量高于 80% 或低于 20% 时使用</b>，等于给了你一个开场就能用的强力技能，不用等到处决阶段。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"假死\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feigndeath.jpg\" alt=\"假死\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：一格没得选，两格看阵容</span><span class=\"sub\">Survival Tactics 必带</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Survival Tactics（50/50）</b>—— 全员必带。<sk>假死</sk>期间大幅减伤，<b>把一个脱战技能变成了保命技能</b>。</p><p style=\"margin-top:8px\"><b>Chimaeral Sting（39/50）</b>连续三段毒液（减速→沉默→减疗）、<b>Diamond Ice（33/50）</b>冰冻陷阱不可驱散但只有 4 秒、<b>Ranger's Finesse（21/50）</b>强化乱射并缩短灵龟守护冷却。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">Diamond Ice 是典型的取舍格：<b>不可驱散换更短时长</b>。对面有驱散就换上。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"猎人印记\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_markedfordeath.jpg\" alt=\"猎人印记\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"瞄准射击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_spear_07.jpg\" alt=\"瞄准射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"急速射击\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_efficiency.jpg\" alt=\"急速射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"冰冻陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_frost_chainsofice.jpg\" alt=\"冰冻陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"焦油陷阱\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_yorsahj_bloodboil_black.jpg\" alt=\"焦油陷阱\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 陷阱要预判着放</span><span class=\"sub\">它不是即时控制</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>陷阱需要敌人踩上去才触发。<b>所以它要放在对面「必须经过」或「即将去」的位置</b>。</p><p style=\"margin-top:8px\"><b>放在脚下等人踩是最常见的浪费</b>——有经验的对手会绕开。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"瞄准射击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_spear_07.jpg\" alt=\"瞄准射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 你的伤害要站定</span><span class=\"sub\">牌多不等于能边跑边打</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>瞄准射击</sk>要读条、<sk>急速射击</sk>是引导。<b>射击猎人不是「一边风筝一边打满伤害」的专精</b>。</p><p style=\"margin-top:8px\"><b>正确认知：牌是用来创造安全输出时间的，不是用来一直跑的。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"灵龟守护\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_pet_turtle.jpg\" alt=\"灵龟守护\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"假死\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_rogue_feigndeath.jpg\" alt=\"假死\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · 重置牌什么时候用</span><span class=\"sub\">判据是「这一波我打不打得赢」</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>灵龟守护</sk>免疫一波伤害、<sk>假死</sk>直接让战斗重来。</p><p style=\"margin-top:8px\"><b>判据不是血量，是「这一波我能不能赢」</b>——赢不了就重置，等牌转好再开。猎人的强度有一半在这个耐心上。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"胁迫\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_devour.jpg\" alt=\"胁迫\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"反制射击\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_ammo_arrow_03.jpg\" alt=\"反制射击\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 控制和打断分开用</span><span class=\"sub\">一个是宠物的，一个是你的</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>胁迫</sk>是宠物冲上去昏迷（<b>对玩家使用不需要视线</b>）、<sk>反制射击</sk>是你的打断。</p><p style=\"margin-top:8px\"><b><sk>胁迫</sk>需要宠物能够到目标</b>——宠物被控住或距离太远时它就废了，这是常被忽略的限制。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"误导\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_hunter_misdirection.jpg\" alt=\"误导\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · <sk>误导</sk>在 PvP 里的用法</span><span class=\"sub\">它不只是转仇恨</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>把你的仇恨转给队友。<b>No Hard Feelings 让它以宠物为目标时大幅减伤</b>。</p><p style=\"margin-top:8px\"><b>所以在 PvP 里它其实是宠物的保命牌</b>——宠物是你控制链的一环，保住它比转仇恨重要。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"百发百中\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_trueshot.jpg\" alt=\"百发百中\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · <sk>百发百中</sk>开在能站住的时候</span><span class=\"sub\">它只加输出不给生存</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>爆击几率和爆击伤害大幅提升，主力技能冷却加快。</p><p style=\"margin-top:8px\"><b>它是纯输出冷却</b>——开在被追着打的时候等于浪费。先用牌把局面稳住，再开它。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">判据不是血量，是「这一波我打不打得赢」</div><div class=\"dd\">赢不了就用重置牌，等牌转好再来。猎人的强度有一半在耐心上。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">陷阱放在必经之路，不放在脚下</div><div class=\"dd\">陷阱要人踩才触发。有经验的对手会绕开脚下的陷阱。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">牌多不等于能边跑边打</div><div class=\"dd\"><sk>瞄准射击</sk>要读条、<sk>急速射击</sk>是引导。牌是用来创造安全输出时间的。</div></div></div></div></div><div class=\"sc\"><h4>开赛前先问三句</h4><p><b>1 · 对面谁会来贴我？</b>射击猎人的伤害要站定，<b>先想好怎么把他推开或者重置这一波</b>。</p><p style=\"margin-top:8px\"><b>2 · 对面有没有驱散？</b>决定要不要换 Diamond Ice —— 不可驱散但只有 4 秒，是个取舍。</p><p style=\"margin-top:8px\"><b>3 · 陷阱放在哪？</b>要放在对面必经或即将去的位置，不是放脚下等人踩。</p></div><div class=\"sc\"><h4>你的四张重置牌</h4><p><sk>灵龟守护</sk>（免疫伤害）、<sk>假死</sk>（脱战 + Survival Tactics 的减伤）、<sk>逃脱</sk>（后跳）、<sk>猎豹守护</sk>（加速）。</p><p style=\"margin-top:8px\"><b>每一张都能让对面的一波攻势作废。</b>但它们也都是有限的 —— 用完之前你要想清楚：这一波我到底要不要打。</p></div>"
  },
  "sk": {
    "灵龟守护": "ability_hunter_pet_turtle",
    "假死": "ability_rogue_feigndeath",
    "逃脱": "ability_rogue_feint",
    "猎豹守护": "ability_mount_jungletiger",
    "瞄准射击": "inv_spear_07",
    "急速射击": "ability_hunter_efficiency",
    "冰冻陷阱": "spell_frost_chainsofice",
    "胁迫": "ability_devour",
    "夺命射击": "ability_hunter_assassinate2",
    "反制射击": "inv_ammo_arrow_03",
    "误导": "ability_hunter_misdirection",
    "百发百中": "ability_trueshot",
    "寒冰屏障": "spell_frost_frost",
    "暗影斗篷": "spell_shadow_nethercloak",
    "剑在人在": "ability_warrior_challange",
    "天神下凡": "warrior_talent_icon_avatar",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "保护祝福": "spell_holy_sealofprotection",
    "闪避": "spell_shadow_shadowward",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "死亡之握": "spell_deathknight_strangulate",
    "焦油陷阱": "spell_yorsahj_bloodboil_black",
    "星界转移": "ability_shaman_astralshift",
    "根基图腾": "spell_nature_groundingtotem",
    "乱射": "ability_hunter_rapidkilling",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "树皮术": "spell_nature_stoneclawtotem",
    "旋风": "spell_nature_earthbind",
    "日光术": "ability_vehicle_sonicshockwave",
    "恶魔变形": "ability_demonhunter_metamorphasistank",
    "黑曜鳞片": "inv_artifact_dragonscales",
    "悬空": "ability_evoker_hover"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "safe",
      "t": "你能安心站着输出",
      "d": "<sk>瞄准射击</sk>要读条、<sk>急速射击</sk>是引导。被贴着打就打不满"
    },
    {
      "k": "cd",
      "t": "<sk>百发百中</sk>好了",
      "d": "爆击和冷却回复大幅提升。没有它，这一轮只是普通输出"
    },
    {
      "k": "card",
      "t": "重置牌还留着",
      "d": "牌都交掉的时候进攻，对面反打你就没得跑了"
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
      "html": "<div class=\"vi\">◇</div><div><h3>别开，这一波你赢不了</h3><p>站不住、冷却也没好。<b>猎人有本钱等</b>——用重置牌把这一波推掉，等条件齐了再来。</p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别开，而且你的牌也不够</h3><p>条件差太多，重置牌还交掉了。<b>这时候硬打，对面反打你就跑不掉了。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">△</div><div><h3>能打，但目标是逼牌不是杀人</h3><p>压上去逼对面交一两张防御，<b>把<sk>百发百中</sk>留给下一个窗口</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "warn",
      "html": "<div class=\"vi\">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>缺的那一条决定这轮上限：<b>站不住就打不满，牌空了就没退路，免疫在就是白打</b>。</p><!--MISSING--></div>"
    },
    {
      "cls": "good",
      "html": "<div class=\"vi\">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>百发百中</sk>开窗口 → <sk>瞄准射击</sk>和<sk>急速射击</sk>打满 → <sk>胁迫</sk>卡在治疗准备救人那一秒。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开打之前，先想好陷阱放哪",
      "陷阱要人踩才触发。<b>放在对面必经或即将去的位置</b>，不是放脚下等人踩。",
      "冰冻陷阱"
    ],
    [
      "先判断这一波要不要打",
      "<b>猎人有本钱等</b>——条件不齐就用重置牌推掉这一波，等牌转好再来。",
      "假死"
    ],
    [
      "<sk>百发百中</sk>开在能站住的时候",
      "它只加输出不给生存。<b>先用牌把局面稳住，再开它。</b>",
      "百发百中"
    ],
    [
      "<sk>瞄准射击</sk>和<sk>急速射击</sk>打满",
      "两个都要施法时间。<b>这段是你必须站定的时间，前面的准备都是为它服务。</b>",
      "瞄准射击"
    ],
    [
      "<sk>胁迫</sk>卡在治疗抬手那一刻",
      "宠物冲上去昏迷，<b>对玩家使用不需要视线</b>。但要确认宠物够得着。",
      "胁迫"
    ],
    [
      "被贴上就用重置牌",
      "<sk>逃脱</sk>后跳、<sk>灵龟守护</sk>免疫、<sk>假死</sk>脱战。<b>三张牌三个层次，按严重程度用。</b>",
      "逃脱"
    ],
    [
      "<sk>误导</sk>保住宠物",
      "No Hard Feelings 让它以宠物为目标时大幅减伤。<b>宠物是你控制链的一环。</b>",
      "误导"
    ],
    [
      "牌用完了就退，别硬撑",
      "<b>猎人最大的错误是把重置牌全交完还留在场上</b>——那时候你就是全场最脆的远程。",
      "猎豹守护"
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
        "one": "他贴上来你就读不出条。",
        "q": [
          [
            "<sk>剑在人在</sk>高招架 + 减伤",
            "<b>你是物理远程，招架对你有效</b>——看到就等它过去。"
          ],
          [
            "他贴得上你",
            "<b>这是这个对局的核心问题</b>——你的伤害要站定。"
          ],
          [
            "<sk>冰冻陷阱</sk>放在他冲锋路径上",
            "预判他的接近路线，比事后补救有效。"
          ],
          [
            "牌要留着",
            "<sk>逃脱</sk>、<sk>灵龟守护</sk>、<sk>假死</sk>——<b>他的爆发窗口只有 10 秒，用一张牌推掉就赢了</b>。"
          ]
        ],
        "arena": "他的<sk>天神下凡</sk>只有 10 秒，用一张重置牌推掉整个窗口是最划算的交易。",
        "duel": "单挑靠陷阱和位移风筝，被贴住就用重置牌重来。"
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
            "停手换目标，别把<sk>百发百中</sk>的时间浪费掉。"
          ],
          [
            "<sk>自由祝福</sk>解你的减速和陷阱",
            "<b>他能解掉冰冻陷阱</b>——Diamond Ice 的不可驱散在这里有用。"
          ],
          [
            "<sk>保护祝福</sk>免疫物理",
            "<b>你是物理伤害，被保的目标完全打不动</b>——立刻换目标。"
          ],
          [
            "Diamond Ice 值得换上",
            "骑士的驱散很强，<b>不可驱散的陷阱在这个对局价值高</b>。"
          ]
        ],
        "arena": "对上骑士队伍换 Diamond Ice，不可驱散的陷阱能穿过他的净化。",
        "duel": "单挑等<sk>圣盾术</sk>过去，免疫期间用陷阱和减速拉开距离。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "镜像",
        "cards": [
          "灵龟守护",
          "假死",
          "逃脱",
          "猎豹守护"
        ],
        "one": "镜像对局：谁的牌先用完谁输。",
        "q": [
          [
            "<sk>灵龟守护</sk>互相免疫",
            "两边都有，<b>看谁交得更值</b>。"
          ],
          [
            "<sk>假死</sk>互相重置",
            "这个对局可能拖很久，因为两边都能重来。"
          ],
          [
            "<b>数他的牌</b>",
            "<b>镜像的核心是记住他用了什么</b>——牌少的那个先进入没有退路的阶段。"
          ],
          [
            "耐心比手速重要",
            "两边输出接近，比的是谁先把牌交完。"
          ]
        ],
        "arena": "镜像的核心是数牌。记住他用掉了哪几张，牌空的那一刻就是你的击杀窗口。",
        "duel": "单挑是纯耐心战，先把牌交完的输。"
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
        "one": "他贴脸开场，但你有最多的脱身牌。",
        "q": [
          [
            "<sk>暗影斗篷</sk> —— 免疫法术",
            "<b>你的伤害以物理为主，斗篷对你影响不大</b>。"
          ],
          [
            "<sk>闪避</sk>挡物理",
            "<b>这张对你才疼</b>——高闪避期间你的射击大量落空。"
          ],
          [
            "<sk>假死</sk>是你的答案",
            "<b>贼的开场控制链可以用假死整个推掉</b>——这是这个对局最强的一手。"
          ],
          [
            "保命牌留在手上",
            "别在他现身前把牌交掉。"
          ]
        ],
        "arena": "<sk>假死</sk>能把贼的整套开场推掉，这是这个对局最有价值的一次重置。",
        "duel": "单挑时<sk>闪避</sk>期间别硬打（你是物理），等它过去。"
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
        "one": "他要读条，你有打断也有陷阱。",
        "q": [
          [
            "<sk>痛苦压制</sk> · <sk>消散</sk>",
            "短时间的，等它过去。"
          ],
          [
            "<sk>心灵尖啸</sk>打断你的读条",
            "<b>你的伤害要站定，恐惧很疼</b>。"
          ],
          [
            "<sk>反制射击</sk>打断大治疗",
            "冷却短，看到抬手就打断。"
          ],
          [
            "<sk>冰冻陷阱</sk>控住治疗",
            "把他踢出这一波，比硬打穿治疗量现实。"
          ]
        ],
        "arena": "<sk>冰冻陷阱</sk>放在治疗的走位路径上，配合队友集火另一个。",
        "duel": "单挑用<sk>反制射击</sk>断他的治疗，你的持续输出耗得过他。"
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
            "<b>你是物理伤害，护罩对你影响不大</b>。"
          ],
          [
            "<sk>死亡之握</sk>把你拉回来",
            "<b>你的距离随时被破坏</b>——位移要留着应对。"
          ],
          [
            "他的疫病持续压",
            "死骑不用贴脸也能给你压力。"
          ],
          [
            "<sk>焦油陷阱</sk>限制他",
            "死骑机动性差，<b>减速对他很有效</b>。"
          ]
        ],
        "arena": "死骑机动性差，<sk>焦油陷阱</sk>和减速对他效果显著。",
        "duel": "单挑靠风筝，他抓你一次你就用一张牌重置。"
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
        "one": "他的图腾能吸你的关键技能。",
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
            "<b><sk>根基图腾</sk>吸你的陷阱和控制</b>",
            "<b>放关键控制前先清图腾</b>。"
          ],
          [
            "你的范围技能能清图腾",
            "<sk>乱射</sk>顺手就能打掉。"
          ]
        ],
        "arena": "放<sk>冰冻陷阱</sk>或<sk>胁迫</sk>之前先清掉<sk>根基图腾</sk>。",
        "duel": "单挑先清图腾，萨满的图腾是他一半的战力。"
      },
      {
        "id": "mage",
        "n": "法师",
        "ic": "classicon_mage",
        "c": "#3FC7EB",
        "diff": "拼距离",
        "cards": [
          "寒冰屏障",
          "变形术",
          "冰霜之环",
          "镜像"
        ],
        "one": "两个远程对射，他的控制更多。",
        "q": [
          [
            "<sk>寒冰屏障</sk> —— 完全免疫",
            "等它自己结束。"
          ],
          [
            "冰环、冰霜新星、闪现",
            "<b>法师的控制会打断你的读条</b>。"
          ],
          [
            "<sk>灵龟守护</sk>躲他的爆发",
            "法师的爆发很集中，<b>免疫一波就赚了</b>。"
          ],
          [
            "<sk>反制射击</sk>断他的关键法术",
            "两个远程互相打断，比的是时机。"
          ]
        ],
        "arena": "法师的爆发集中，<sk>灵龟守护</sk>免疫一整波是最值的交易。",
        "duel": "单挑比打断时机，两边都要读条。"
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
        "one": "恐惧会打断你的读条。",
        "q": [
          [
            "吸血与护盾",
            "术士自愈强，需要持续压制。"
          ],
          [
            "<b>恐惧打断你的输出</b>",
            "<b>你的伤害要站定，恐惧很疼</b>。"
          ],
          [
            "<sk>假死</sk>能解恐惧",
            "<b>假死会清掉你身上的控制</b>——这是应对恐惧链的一手。"
          ],
          [
            "<sk>冰冻陷阱</sk>控住他",
            "术士需要时间叠 DoT，控住就断了他的节奏。"
          ]
        ],
        "arena": "<sk>假死</sk>能清掉身上的恐惧，这是对付术士恐惧链的关键。",
        "duel": "单挑靠持续压制，别给他叠满 DoT 的时间。"
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
            "<b>你的爆发很集中，撞上损失大</b>——看到就停手。"
          ],
          [
            "<sk>气定神闲</sk>免控 · 翻滚位移",
            "武僧机动性高，陷阱难命中。"
          ],
          [
            "<sk>冰冻陷阱</sk>放在他必经处",
            "武僧会绕，<b>要预判他的翻滚方向</b>。"
          ],
          [
            "牌留着应对贴脸",
            "被贴住就重置，别硬站。"
          ]
        ],
        "arena": "业报期间停手，同时用重置牌拉开——武僧贴住你就读不出条。",
        "duel": "单挑靠陷阱和位移风筝，他的机动性很高要提前放陷阱。"
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
        "one": "他的控制会打断你的读条。",
        "q": [
          [
            "<sk>树皮术</sk> —— 大减伤",
            "不是免疫，可以打但性价比低。"
          ],
          [
            "<sk>旋风</sk>和<sk>日光术</sk>",
            "<b>旋风把你摘出去、日光术沉默你</b>——两个都让你输出停摆。"
          ],
          [
            "<sk>反制射击</sk>断他的读条",
            "德鲁伊的控制大多要读条。"
          ],
          [
            "<sk>假死</sk>解控制",
            "被控住就假死重置。"
          ]
        ],
        "arena": "德鲁伊的控制大多要读条，<sk>反制射击</sk>的价值很高。",
        "duel": "单挑比打断时机，两边的关键技能都要施法。"
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
        "one": "他的机动性让陷阱很难命中。",
        "q": [
          [
            "<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>",
            "都不是免疫，可以打。"
          ],
          [
            "<b>二段跳与冲刺</b>",
            "<b>陷阱对高机动目标很难命中</b>——要放在他必须落地的位置。"
          ],
          [
            "他的打断和沉默",
            "<b>你的读条会被打断</b>。"
          ],
          [
            "牌要留着",
            "被贴住就重置，DH 追不上一个假死的猎人。"
          ]
        ],
        "arena": "陷阱对 DH 难命中，改用<sk>胁迫</sk>这类直接控制，或者预判他的落点。",
        "duel": "单挑靠重置牌反复脱身，他的机动性追不上假死。"
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
            "悬空期间他脱离，<b>但你是远程够得着</b>。"
          ],
          [
            "翱翔与击退",
            "唤魔师能垂直脱离。"
          ],
          [
            "<sk>反制射击</sk>打断蓄力",
            "<b>唤魔师有大量蓄力技能，打断价值极高</b>。"
          ],
          [
            "两个远程的对射",
            "你们射程接近，比的是打断和控制的时机。"
          ]
        ],
        "arena": "<sk>反制射击</sk>对蓄力型对手价值极高，打断一次抵消一大段伤害。",
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
      "d": 2,
      "s": "对面开了一波爆发压你，你的血量还健康，但这一波你打不赢。",
      "a": "该怎么办？",
      "o": [
        "硬扛，血还够",
        "用重置牌（<sk>灵龟守护</sk>/<sk>假死</sk>）把这一波推掉",
        "换目标",
        "交<sk>百发百中</sk>对拼"
      ],
      "r": 1,
      "e": [
        "血够不等于这一波值得打。",
        "正解。<b>判据不是血量，是「这一波我能不能赢」</b>——赢不了就重置，等牌转好再来。猎人的强度有一半在这个耐心上。",
        "换目标不解决对面正在压你。",
        "对拼是拿你的劣势局面赌。"
      ],
      "k": "猎人有本钱等。判据不是血量，是这一波打不打得赢。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "你把<sk>冰冻陷阱</sk>放在自己脚下，等对面踩上来。",
      "a": "这样有问题吗？",
      "o": [
        "没问题，他冲过来就会踩",
        "有问题，有经验的对手会绕开",
        "没问题，陷阱范围大",
        "要看陷阱类型"
      ],
      "r": 1,
      "e": [
        "新手会踩，有经验的不会。",
        "正解。<b>陷阱要放在对面「必须经过」或「即将去」的位置</b>——放脚下等人踩是最常见的浪费。",
        "范围不解决「他不走那里」。",
        "所有陷阱都是这个道理。"
      ],
      "k": "陷阱是预判技能。放在必经之路，不放在脚下。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "射击猎人的两个主力输出技能是什么类型？",
      "a": "",
      "o": [
        "都是瞬发",
        "<sk>瞄准射击</sk>要读条，<sk>急速射击</sk>是引导",
        "都是引导",
        "都是持续伤害"
      ],
      "r": 1,
      "e": [
        "都不是瞬发。",
        "正解。<b>这是射击猎人和其他猎人专精最大的区别——你的伤害要站定</b>。所以「牌多」不等于能一边跑一边打满伤害。",
        "<sk>瞄准射击</sk>是读条不是引导。",
        "都是直接伤害技能。"
      ],
      "k": "牌是用来创造安全输出时间的，不是用来一直跑的。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "关于 Survival Tactics（50/50 全员必带）。",
      "a": "它做了什么？",
      "o": [
        "提高伤害",
        "<sk>假死</sk>期间大幅减伤",
        "增加陷阱数量",
        "缩短冷却"
      ],
      "r": 1,
      "e": [
        "它不加伤害。",
        "正解。<b>它把一个脱战技能变成了保命技能</b>——假死期间大幅减伤，意味着你可以在挨打的过程中假死自保。",
        "跟陷阱无关。",
        "不是缩短冷却。"
      ],
      "k": "把功能性技能变成保命技能的天赋，价值往往被低估。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 3,
      "s": "对面圣骑士有很强的驱散能力。",
      "a": "PvP 天赋里 Diamond Ice 值得换吗？",
      "o": [
        "不值得，它缩短了陷阱时长",
        "值得，不可驱散换更短时长，对上驱散强的队伍划算",
        "不值得，陷阱本来就够用",
        "看自己的输出"
      ],
      "r": 1,
      "e": [
        "缩短时长是代价，但要看换来了什么。",
        "正解。<b>Diamond Ice 让冰冻陷阱不可驱散但只有 4 秒</b>——这是典型的取舍格。对面能驱散时，4 秒的稳定控制好过被立刻解掉的长控。",
        "「够用」要看对面能不能解。",
        "这一格看对面阵容，不看自己输出。"
      ],
      "k": "取舍型天赋要看「换来的东西在这局值不值」。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "你准备用<sk>胁迫</sk>控住对面治疗。",
      "a": "需要什么前提？",
      "o": [
        "没有前提，直接用",
        "宠物要够得着目标",
        "要有视线",
        "目标血量要低"
      ],
      "r": 1,
      "e": [
        "有前提。",
        "正解。<b><sk>胁迫</sk>是宠物冲上去昏迷</b>——宠物被控住或距离太远时它就废了。这是常被忽略的限制。",
        "对玩家使用不需要视线，这是它的优点。",
        "跟血量无关。"
      ],
      "k": "依赖宠物的技能，前提是宠物能到位。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 2,
      "s": "你被近战贴住，手上<sk>逃脱</sk>、<sk>灵龟守护</sk>、<sk>假死</sk>都好着。",
      "a": "先用哪个？",
      "o": [
        "<sk>假死</sk>，最彻底",
        "<sk>逃脱</sk>，成本最低",
        "<sk>灵龟守护</sk>",
        "三个一起"
      ],
      "r": 1,
      "e": [
        "<sk>假死</sk>是最强的重置，该留到真正需要的时候。",
        "正解。<b>三张牌三个层次，按严重程度用</b>——<sk>逃脱</sk>成本最低先用，不够再上免疫，最后才是脱战。",
        "<sk>灵龟守护</sk>是免疫，比逃脱贵。",
        "一起交等于把三次机会浪费成一次。"
      ],
      "k": "多张同类保命牌，从成本最低的开始用。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 2,
      "s": "你要开<sk>百发百中</sk>，但正被两个人追着打。",
      "a": "该开吗？",
      "o": [
        "开，输出窗口不等人",
        "不开，它只加输出不给生存",
        "开，同时交<sk>灵龟守护</sk>",
        "开一半"
      ],
      "r": 1,
      "e": [
        "被追着打的时候你站不住，输出打不满。",
        "正解。<b>它是纯输出冷却</b>——先用牌把局面稳住，再开它。这跟平衡德的<sk>超凡之盟</sk>是同一类判断。",
        "同时交两个冷却太奢侈，而且免疫结束你还是被追。",
        "冷却不能开一半。"
      ],
      "k": "纯输出冷却要开在能站住的时候。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 1,
      "s": "射击猎人的属性优先级。",
      "a": "第一顺位是什么？",
      "o": [
        "全能",
        "精通",
        "急速",
        "爆击"
      ],
      "r": 0,
      "e": [
        "正解。<b>全能 100 > 精通 79 > 急速 14 > 爆击 3</b>。",
        "精通是第二，差距不算大。",
        "急速只有 14。",
        "爆击几乎是 0。"
      ],
      "k": "射击猎人堆全能和精通。急速和爆击装备上带多少算多少。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 3,
      "s": "镜像对局，对面也是射击猎人。",
      "a": "胜负手在哪？",
      "o": [
        "谁伤害高",
        "数牌：记住他用了哪几张重置牌",
        "谁血厚",
        "谁陷阱放得准"
      ],
      "r": 1,
      "e": [
        "两边输出接近。",
        "正解。<b>猎人的核心资源是重置牌</b>——记住他用掉了哪几张，牌空的那一刻就是击杀窗口。这个对局可能拖很久。",
        "血量不是胜负手。",
        "陷阱重要但不是核心。"
      ],
      "k": "资源型对局要数对面的牌。牌空的那一刻是唯一的击杀窗口。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 2,
      "s": "对面贼开场一套控制链打在你身上。",
      "a": "最有效的一手是什么？",
      "o": [
        "硬吃控制",
        "<sk>假死</sk>整个推掉这一波",
        "交<sk>灵龟守护</sk>",
        "等队友解"
      ],
      "r": 1,
      "e": [
        "贼的开场控制链很长，硬吃会掉很多血。",
        "正解。<b><sk>假死</sk>能让整场战斗重来</b>——贼的开场优势直接作废。这是这个对局最强的一手。",
        "<sk>灵龟守护</sk>免疫伤害但不解控制。",
        "被动等待，控制链就完整生效了。"
      ],
      "k": "脱战类技能能把对手的开场优势整个抹掉。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 2,
      "s": "你的<sk>误导</sk>好着，队伍里没有需要转仇恨的场景。",
      "a": "它在 PvP 里还有用吗？",
      "o": [
        "没用，纯 PvE 技能",
        "有用，No Hard Feelings 让它以宠物为目标时大幅减伤",
        "有用，能转移伤害",
        "有用，能加速"
      ],
      "r": 1,
      "e": [
        "它在 PvP 有别的用途。",
        "正解。<b>以宠物为目标时大幅减伤</b>——宠物是你控制链的一环（<sk>胁迫</sk>靠它），保住宠物比转仇恨重要。",
        "它转的是仇恨不是伤害。",
        "不加速。"
      ],
      "k": "看清天赋给技能加了什么，很多 PvE 技能在 PvP 有别的用法。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "你的重置牌全交完了，还留在场上和对面对拼。",
      "a": "这样有问题吗？",
      "o": [
        "没问题，输出还在",
        "有问题，牌空的猎人是全场最脆的远程",
        "没问题，可以等冷却",
        "要看血量"
      ],
      "r": 1,
      "e": [
        "输出在不代表能活着输出。",
        "正解。<b>猎人最大的错误是把牌全交完还留在场上</b>——你的生存完全依赖那些牌，没有它们你就是个脆皮远程。",
        "等冷却也要先活下来。",
        "血量是结果，牌的数量才是原因。"
      ],
      "k": "知道自己的生存依赖什么。依赖耗尽时就该退。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 2,
      "s": "黑暗游侠线把<sk>夺命射击</sk>换成了 Black Arrow。",
      "a": "关键区别是什么？",
      "o": [
        "伤害更高",
        "它能在敌人血量高于 80% 或低于 20% 时使用",
        "冷却更短",
        "范围更大"
      ],
      "r": 1,
      "e": [
        "伤害不是关键区别。",
        "正解。<b>普通夺命射击只能在血量低于 20% 时用，Black Arrow 多了「高于 80%」这个窗口</b>——等于给了你一个开场就能用的强力技能。",
        "不是冷却问题。",
        "不是范围问题。"
      ],
      "k": "可用条件的改变，往往比数值改变影响更大。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "你在打一个不断走位的目标，陷阱一直放不中。",
      "a": "该怎么调整？",
      "o": [
        "继续放，总有一次会中",
        "改用<sk>胁迫</sk>这类直接控制",
        "放弃控制",
        "放更多陷阱"
      ],
      "r": 1,
      "e": [
        "对高机动目标，反复放陷阱是浪费。",
        "正解。<b><sk>胁迫</sk>是宠物直接冲上去昏迷，不需要对方踩</b>——对机动性强的目标比陷阱可靠。",
        "放弃控制等于放弃这个专精的强项。",
        "陷阱有冷却，放不了几个。"
      ],
      "k": "预判型控制对高机动目标失效时，换直接生效的控制。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 3,
      "s": "你和队友都开了爆发，对面治疗被控住 5 秒，但你正被近战贴着。",
      "a": "怎么办？",
      "o": [
        "先处理近战再输出",
        "用一张重置牌脱身，然后立刻输出",
        "硬站着打",
        "放弃这个窗口"
      ],
      "r": 1,
      "e": [
        "先处理近战，控制窗口就过了。",
        "正解。<b>治疗被控的时间是稀缺的</b>——花一张牌换回站定输出的时间是划算的。牌会转回来，窗口不会。",
        "被贴着打，读条会被打断。",
        "放弃稀缺窗口太亏。"
      ],
      "k": "用可再生资源（冷却）换稀缺资源（控制窗口）是划算的。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "对面法师开了爆发，伤害很集中。",
      "a": "<sk>灵龟守护</sk>该什么时候用？",
      "o": [
        "血低了再用",
        "卡在他爆发的那几秒",
        "开场就用",
        "不用，留着"
      ],
      "r": 1,
      "e": [
        "血低了才用，前面的伤害已经吃了。",
        "正解。<b>法师的爆发很集中，免疫一整波是最值的交易</b>——免疫牌要卡在伤害最密集的那几秒。",
        "开场他还没爆发，浪费。",
        "留着不用等于没有这张牌。"
      ],
      "k": "免疫牌要卡在对面伤害最集中的时候，不是自己血最低的时候。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 2,
      "s": "对面开了完全免疫（圣盾术/寒冰屏障），你的<sk>百发百中</sk>正开着。",
      "a": "该做什么？",
      "o": [
        "继续打他",
        "转去打他队友",
        "停手等免疫",
        "取消百发百中"
      ],
      "r": 1,
      "e": [
        "免疫期间打进去是 0。",
        "正解。<b><sk>百发百中</sk>的时间在燃烧</b>——转去打别人，你的爆击加成对他队友一样生效。",
        "干等会浪费掉窗口。",
        "爆发冷却不能取消。"
      ],
      "k": "窗口里遇到免疫必须换目标。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 2,
      "s": "对面是圣骑士队伍，驱散能力强。",
      "a": "你的陷阱会怎样？",
      "o": [
        "正常生效",
        "可能被驱散掉",
        "完全无效",
        "效果减半"
      ],
      "r": 1,
      "e": [
        "骑士能净化。",
        "正解。<b>冰冻陷阱是可以被驱散的</b>——这就是 Diamond Ice（不可驱散但只有 4 秒）在这个对局值得换上的原因。",
        "不是完全无效，是可能被解掉。",
        "不是减半，是被整个移除。"
      ],
      "k": "对面有驱散时，考虑换成不可驱散但更短的版本。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "你被术士的恐惧链控住了。",
      "a": "<sk>假死</sk>能解吗？",
      "o": [
        "不能，只能脱战",
        "能，假死会清掉身上的控制",
        "不能，恐惧不受影响",
        "要看恐惧类型"
      ],
      "r": 1,
      "e": [
        "它不只是脱战。",
        "正解。<b><sk>假死</sk>会清掉你身上的控制效果</b>——这是应对恐惧链最有效的一手。",
        "恐惧也会被清掉。",
        "所有控制都能清。"
      ],
      "k": "脱战类技能通常也清控制。这是它们的隐藏价值。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 2,
      "s": "对面武僧开了<sk>业报之触</sk>。",
      "a": "为什么这对射击猎人特别疼？",
      "o": [
        "因为伤害高",
        "因为你的爆发很集中，撞上损失大",
        "因为它减速",
        "因为它反弹控制"
      ],
      "r": 1,
      "e": [
        "业报本身不造成伤害。",
        "正解。<b><sk>百发百中</sk>期间你的伤害非常集中</b>——撞上反伤，那一整段都变成自伤。",
        "不是减速。",
        "它反弹伤害不是控制。"
      ],
      "k": "集中爆发型的输出撞上反伤，损失比持续型大。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "射击猎人只有 8 个分歧格，是站上较少的。",
      "a": "这说明什么？",
      "o": [
        "天赋树设计单调",
        "配点共识度高，判断空间主要在「怎么打」不在「怎么点」",
        "数据样本小",
        "应该多点几个"
      ],
      "r": 1,
      "e": [
        "分歧少不等于设计单调。",
        "正解。<b>8 个分歧格意味着大部分格子有共识</b>——这个专精的难点不在配点，在牌的使用时机和陷阱的预判上。",
        "样本和其他专精一样是 50 人。",
        "天赋点数是固定的。"
      ],
      "k": "分歧格少的专精，难点在操作和判断，不在配点。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "对面死骑用<sk>死亡之握</sk>把你拉过去。",
      "a": "该怎么应对？",
      "o": [
        "立刻<sk>逃脱</sk>",
        "先<sk>焦油陷阱</sk>限制他，再拉开",
        "硬扛",
        "换目标"
      ],
      "r": 1,
      "e": [
        "直接逃脱，他握转好了又能拉回来。",
        "正解。<b>死骑机动性差，减速对他很有效</b>——先限制他再拉开，比单纯跑路持久。",
        "贴脸状态下你读不出条。",
        "换目标他还在你身边。"
      ],
      "k": "对机动性差的对手，减速比位移更能持久地保持距离。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "你在考虑<sk>冰冻陷阱</sk>放哪。",
      "a": "最好的位置是哪里？",
      "o": [
        "自己脚下",
        "对面治疗的走位路径上",
        "对面输出脚下",
        "随便放"
      ],
      "r": 1,
      "e": [
        "放脚下有经验的对手会绕。",
        "正解。<b>陷阱要放在「他必须经过」的位置</b>——治疗为了保持视野和距离，走位路径相对可预测。",
        "直接放脚下同样会被绕开。",
        "陷阱是稀缺资源，不能随便放。"
      ],
      "k": "预判型控制要放在对手的必经之路上，不是他现在站的地方。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "你注意到射击猎人的伤害要站定，但它有全场最多的脱身牌。",
      "a": "这两件事怎么统一？",
      "o": [
        "矛盾，设计有问题",
        "牌是用来创造安全输出时间的，不是用来一直跑",
        "应该只跑不打",
        "应该只打不跑"
      ],
      "r": 1,
      "e": [
        "不矛盾，是配合关系。",
        "正解。<b>脱身牌解决「什么时候能安全站定」这个问题</b>——用牌推掉危险的那一波，换来一段能站住输出的时间。理解这一点才知道牌该什么时候用。",
        "只跑不打没有输出。",
        "只打不跑会死。"
      ],
      "k": "保命资源的用途是「换取输出时间」，不是单纯活着。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>天神下凡</sk>冲向你。",
      "a": "最划算的应对是什么？",
      "o": [
        "硬扛输出",
        "用一张重置牌推掉整个窗口",
        "对拼爆发",
        "换目标"
      ],
      "r": 1,
      "e": [
        "他的爆发窗口伤害很高，硬扛很危险。",
        "正解。<b>他的窗口只有 10 秒</b>——用一张牌推掉整个窗口，等于让他的大冷却完全空转。这是最划算的交易。",
        "对拼是拿你的劣势赌。",
        "换目标不解决他在打你。"
      ],
      "k": "对短窗口爆发型对手，用一张牌推掉整个窗口最划算。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 2,
      "s": "战士开了<sk>剑在人在</sk>（高招架 + 减伤）。",
      "a": "对射击猎人影响多大？",
      "o": [
        "很大，你是物理伤害，招架有效",
        "影响小，你是法术伤害",
        "完全免疫",
        "没影响"
      ],
      "r": 0,
      "e": [
        "正解。<b>射击猎人是物理远程，招架对你有效</b>——看到就等它过去，别浪费<sk>百发百中</sk>的时间。",
        "猎人是物理伤害。",
        "不是免疫。",
        "影响明显。"
      ],
      "k": "物理远程也怕招架。先认清自己的伤害类型。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "对上圣骑士队伍，他们驱散能力强。",
      "a": "PvP 天赋该怎么调？",
      "o": [
        "保持默认",
        "换上 Diamond Ice（陷阱不可驱散）",
        "换上 Ranger's Finesse",
        "换上 Chimaeral Sting"
      ],
      "r": 1,
      "e": [
        "遇到强驱散不调，你的陷阱会被立刻解掉。",
        "正解。<b>不可驱散换更短时长</b>——对面能净化时，4 秒的稳定控制好过被立刻解掉的长控。",
        "Ranger's Finesse 强化乱射，跟驱散无关。",
        "Chimaeral Sting 是毒液链，也会被净化。"
      ],
      "k": "对面驱散强时，换成不可驱散的版本。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "圣骑士给队友上了<sk>保护祝福</sk>（免疫物理）。",
      "a": "对你影响多大？",
      "o": [
        "完全打不动，你是物理伤害",
        "影响小",
        "没影响",
        "只影响陷阱"
      ],
      "r": 0,
      "e": [
        "正解。<b>射击猎人是物理伤害，被保的目标完全打不动</b>——立刻换目标。",
        "影响极大。",
        "影响极大。",
        "影响的是全部输出。"
      ],
      "k": "物理免疫对物理专精是完全无效。立刻换目标。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 3,
      "s": "镜像对局，两边都有一堆重置牌。",
      "a": "该怎么打？",
      "o": [
        "抢先手爆发",
        "数他的牌，等他牌空",
        "比谁血厚",
        "比谁陷阱多"
      ],
      "r": 1,
      "e": [
        "抢先手他用一张牌就推掉了。",
        "正解。<b>猎人的核心资源是重置牌</b>——记住他用掉了哪几张。牌空的那一刻才是唯一的击杀窗口。",
        "血量不是胜负手。",
        "陷阱数量固定。"
      ],
      "k": "两边都有大量保命资源时，数牌比抢先手重要。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 2,
      "s": "对面猎人用<sk>假死</sk>脱战了。",
      "a": "该做什么？",
      "o": [
        "去找他",
        "继续打他队友，同时记下他少了一张牌",
        "原地等",
        "用陷阱封住他"
      ],
      "r": 1,
      "e": [
        "找一个假死的猎人是徒劳的。",
        "正解。<b>两件事同时做：保持对其他人的压力，并记住他的牌少了一张</b>——数牌是这个对局的核心。",
        "干等浪费时间。",
        "他脱战了，陷阱封不住。"
      ],
      "k": "对手用掉一张牌就是一次信息。记下来。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 2,
      "s": "贼开场一套控制链打在你身上。",
      "a": "最强的一手是什么？",
      "o": [
        "硬吃",
        "<sk>假死</sk>整个推掉",
        "<sk>灵龟守护</sk>",
        "等队友解"
      ],
      "r": 1,
      "e": [
        "贼的开场控制链很长。",
        "正解。<b><sk>假死</sk>让整场战斗重来</b>——贼积攒的开场优势直接归零。这是这个对局最强的一手。",
        "<sk>灵龟守护</sk>免疫伤害但不解控制。",
        "被动等待，控制链完整生效。"
      ],
      "k": "对靠开场控制链的对手，脱战牌是最强解。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼开了<sk>闪避</sk>（大幅提升躲闪）。",
      "a": "对射击猎人影响多大？",
      "o": [
        "很大，你是物理伤害，射击会大量落空",
        "影响小",
        "没影响",
        "只影响陷阱"
      ],
      "r": 0,
      "e": [
        "正解。<b>闪避挡物理，而你是物理远程</b>——这段时间的射击会大量落空。转去打他队友。",
        "影响很大。",
        "影响很大。",
        "影响的是射击。"
      ],
      "k": "高闪避对物理专精约等于免疫，不管你是远程还是近战。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "牧师读大治疗，你的<sk>反制射击</sk>好着。",
      "a": "该做什么？",
      "o": [
        "打断",
        "用<sk>冰冻陷阱</sk>",
        "继续输出",
        "用<sk>胁迫</sk>"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>反制射击</sk>冷却短，专门用来打断</b>。牧师的治疗量硬打穿不现实。",
        "陷阱要他踩上去，来不及。",
        "硬打穿不现实。",
        "<sk>胁迫</sk>是硬控，该留给关键时刻。"
      ],
      "k": "能打断的时候打断，别动硬控和陷阱。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 2,
      "s": "牧师用<sk>心灵尖啸</sk>打断你的读条。",
      "a": "有什么应对？",
      "o": [
        "硬吃",
        "用<sk>假死</sk>清掉恐惧",
        "交减伤",
        "跑开"
      ],
      "r": 1,
      "e": [
        "恐惧打断你的读条，输出会断。",
        "正解。<b><sk>假死</sk>清掉身上的控制效果</b>——这是猎人应对控制的通用解法。",
        "减伤不解控制。",
        "恐惧期间你控制不了自己的移动。"
      ],
      "k": "脱战牌能清控制，这是它在 PvP 里最重要的用途之一。"
    },
    {
      "id": "deathknight1",
      "t": "deathknight",
      "d": 2,
      "s": "死骑用<sk>死亡之握</sk>反复把你拉过去。",
      "a": "最有效的应对是什么？",
      "o": [
        "每次都用位移跑",
        "<sk>焦油陷阱</sk>限制他的移动",
        "硬扛",
        "换目标"
      ],
      "r": 1,
      "e": [
        "位移有限，他的握会转回来。",
        "正解。<b>死骑机动性差，减速对他效果显著</b>——限制住他比反复跑路持久。",
        "贴脸状态读不出条。",
        "换目标他还在追你。"
      ],
      "k": "对机动性差的对手，减速是最持久的保持距离手段。"
    },
    {
      "id": "deathknight2",
      "t": "deathknight",
      "d": 2,
      "s": "死骑开了<sk>反魔法护罩</sk>。",
      "a": "对射击猎人影响多大？",
      "o": [
        "很大",
        "影响不大，你是物理伤害",
        "完全免疫",
        "只影响陷阱"
      ],
      "r": 1,
      "e": [
        "护罩吸的是法术伤害。",
        "正解。<b>射击猎人是物理伤害，护罩对你影响不大</b>——这一点比对法系专精有利。",
        "不是免疫。",
        "不只影响陷阱。"
      ],
      "k": "对面的防御牌挡哪种伤害，取决于你打的是哪种。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "萨满放了<sk>根基图腾</sk>，你准备用<sk>冰冻陷阱</sk>控他们的治疗。",
      "a": "该注意什么？",
      "o": [
        "没什么",
        "图腾可能吸掉你的关键控制，先清图腾",
        "换目标",
        "等图腾过期"
      ],
      "r": 1,
      "e": [
        "直接放可能被吸走。",
        "正解。<b><sk>根基图腾</sk>重定向针对队友的有害法术</b>——先用<sk>乱射</sk>之类的范围技能清掉它。",
        "换目标不解决图腾。",
        "等它过期，控制时机也过了。"
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
        "看情况"
      ],
      "r": 1,
      "e": [
        "它不是免疫。",
        "正解。<b>是大幅减伤不是免疫</b>——可以继续打，只是效率下降。别把它和圣盾术那类完全免疫混为一谈。",
        "不用完全停手。",
        "性质是固定的。"
      ],
      "k": "分清「减伤」和「免疫」。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 2,
      "s": "法师开了爆发，伤害很集中。",
      "a": "<sk>灵龟守护</sk>该什么时候用？",
      "o": [
        "血低了用",
        "卡在他爆发的那几秒",
        "开场用",
        "留着不用"
      ],
      "r": 1,
      "e": [
        "血低了用，前面的伤害已经吃了。",
        "正解。<b>法师的爆发集中，免疫一整波是最值的交易</b>。",
        "开场他还没爆发。",
        "留着不用等于没有。"
      ],
      "k": "免疫牌卡在对面伤害最密集的时候。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "对上法师，两个远程互射。",
      "a": "关键是什么？",
      "o": [
        "谁伤害高",
        "打断时机和免疫牌的使用",
        "谁血厚",
        "谁跑得快"
      ],
      "r": 1,
      "e": [
        "输出接近。",
        "正解。<b>两边都要读条，<sk>反制射击</sk>的时机很关键</b>；同时法师的爆发集中，免疫牌用得好能白赚一波。",
        "血量不是关键。",
        "两边机动性都不错。"
      ],
      "k": "远程互射比的是打断时机和保命牌的使用效率。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士用恐惧链控住你。",
      "a": "最有效的应对？",
      "o": [
        "硬吃",
        "<sk>假死</sk>清掉恐惧",
        "交减伤",
        "让队友解"
      ],
      "r": 1,
      "e": [
        "恐惧打断你的输出，硬吃损失大。",
        "正解。<b><sk>假死</sk>清掉身上的控制</b>——这是猎人应对恐惧链的关键。",
        "减伤不解控制。",
        "被动等待，控制链完整生效。"
      ],
      "k": "脱战牌清控制，对以恐惧为主的对手价值最高。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "术士需要时间读条叠 DoT。",
      "a": "该怎么限制他？",
      "o": [
        "提高输出",
        "<sk>冰冻陷阱</sk>或<sk>胁迫</sk>控住他打断节奏",
        "拉开距离",
        "忽略他"
      ],
      "r": 1,
      "e": [
        "术士自愈强，拼输出不现实。",
        "正解。<b>术士需要时间准备，控住就断了他的节奏</b>——这比拼伤害有效。",
        "拉开距离正合他意，他是远程。",
        "忽略他，他会叠满 DoT。"
      ],
      "k": "对需要时间准备的对手，控制比伤害有效。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 2,
      "s": "武僧开了<sk>业报之触</sk>，你的<sk>百发百中</sk>正开着。",
      "a": "该怎么办？",
      "o": [
        "继续打，窗口不等人",
        "停手，同时用重置牌拉开",
        "转打他队友",
        "交免疫硬抗"
      ],
      "r": 1,
      "e": [
        "<b><sk>百发百中</sk>期间你的伤害很集中</b>，撞上反伤那一整段都变成自伤。",
        "正解。停手是必须的，同时用牌拉开距离——武僧贴住你就读不出条，两个问题一起解决。",
        "转打队友是选项，但武僧还贴着你。",
        "硬抗不划算。"
      ],
      "k": "停手和脱身可以同时做，不用二选一。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 2,
      "s": "武僧机动性很高，你的陷阱一直放不中。",
      "a": "该怎么调整？",
      "o": [
        "继续放陷阱",
        "改用<sk>胁迫</sk>这类直接控制",
        "放弃控制",
        "放更多陷阱"
      ],
      "r": 1,
      "e": [
        "对高机动目标反复放陷阱是浪费。",
        "正解。<b><sk>胁迫</sk>是宠物直接冲上去昏迷，不需要对方踩</b>。",
        "放弃控制等于放弃强项。",
        "陷阱有冷却。"
      ],
      "k": "预判型控制失效时，换直接生效的。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊用<sk>旋风</sk>把你摘出去了。",
      "a": "这几秒你是什么状态？",
      "o": [
        "被控住但能被打",
        "不能行动，也不能被伤害",
        "只是减速",
        "受到持续伤害"
      ],
      "r": 1,
      "e": [
        "这是普通控制的效果。",
        "正解。<b>被<sk>旋风</sk>的人不能行动，但也不能被伤害</b>——所以它对你既是输出损失，也是一种保护。",
        "不是减速。",
        "不造成伤害。"
      ],
      "k": "<sk>旋风</sk>是双向的：剥夺行动也提供免疫。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "德鲁伊的控制大多要读条。",
      "a": "射击猎人该怎么利用？",
      "o": [
        "硬吃",
        "<sk>反制射击</sk>打断他的控制",
        "跑开",
        "用陷阱"
      ],
      "r": 1,
      "e": [
        "被控住你的输出会断。",
        "正解。<b>德鲁伊的<sk>旋风</sk>和<sk>纠缠根须</sk>都要读条</b>——<sk>反制射击</sk>的价值在这个对局很高。",
        "跑开不解决他继续读条。",
        "陷阱是控制不是打断。"
      ],
      "k": "对手的关键技能要读条时，打断的价值最高。"
    },
    {
      "id": "demonhunter1",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 机动性很高，陷阱一直放不中。",
      "a": "该怎么办？",
      "o": [
        "继续放",
        "预判他的落点，或改用<sk>胁迫</sk>",
        "放弃",
        "放脚下"
      ],
      "r": 1,
      "e": [
        "浪费陷阱。",
        "正解。<b>DH 位移多，陷阱要放在他必须落地的位置</b>，或者改用不需要踩的直接控制。",
        "放弃控制等于放弃强项。",
        "放脚下他会绕开。"
      ],
      "k": "对高机动目标，要么预判落点，要么换直接控制。"
    },
    {
      "id": "demonhunter2",
      "t": "demonhunter",
      "d": 2,
      "s": "DH 追着你打，你的牌还剩两张。",
      "a": "该怎么用？",
      "o": [
        "一起交，彻底摆脱",
        "按层次用，先用成本低的",
        "留着不用",
        "换目标"
      ],
      "r": 1,
      "e": [
        "一起交，下次他再来你就没牌了。",
        "正解。<b><sk>逃脱</sk>成本最低先用，不够再上免疫或脱战</b>——DH 会反复贴上来，牌要省着用。",
        "留着不用你会被打死。",
        "换目标他还追着你。"
      ],
      "k": "对会反复接近的对手，保命牌要按层次省着用。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师在蓄一个大招。",
      "a": "该做什么？",
      "o": [
        "<sk>反制射击</sk>打断",
        "继续输出",
        "交免疫准备扛",
        "拉开距离"
      ],
      "r": 0,
      "e": [
        "正解。<b>唤魔师有大量蓄力技能，<sk>反制射击</sk>打断一次抵消一大段伤害</b>。",
        "让他放完，血线会很难看。",
        "能打断就别硬扛。",
        "他是远程，拉开距离没用。"
      ],
      "k": "对蓄力型对手，短冷却打断价值最高。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师用<sk>悬空</sk>飞到空中。",
      "a": "对射击猎人影响多大？",
      "o": [
        "完全够不着",
        "影响小，你是远程够得着",
        "只能用陷阱",
        "要等他落地"
      ],
      "r": 1,
      "e": [
        "那是近战的处境。",
        "正解。<b>射击猎人是远程，悬空对你影响很小</b>——你照样能打到他。",
        "所有远程技能都够得着。",
        "不用等。"
      ],
      "k": "远程专精对垂直脱离类技能天然免疫。"
    }
  ]
};
