module.exports = {
  "meta": {
    "title": "恢复德 PvP 判断训练器 · 魔兽世界 12.1 Midnight 赛季一",
    "desc": "魔兽世界正式服 12.1 恢复德鲁伊 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。",
    "keywords": "恢复德,奶德,德鲁伊,治疗,PVP,竞技场,魔兽世界,12.1,Midnight,restoration druid,arena",
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
    "s1": "<div class=\"wrap\">\n\n<div class=\"thesis\">\n  <div class=\"lbl\">这版本唯一要记住的一句</div>\n  <div class=\"big\">你的治疗是<b>提前投进去</b>的，不是掉血之后开始的。<br>等血条动了你才铺，你已经晚了一整个循环。</div>\n</div>\n\n<div class=\"rows\">\n  <div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"回春术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_rejuvenation.jpg\" alt=\"回春术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性成长\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_flourish.jpg\" alt=\"野性成长\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"生命绽放\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_misc_herb_felblossom.jpg\" alt=\"生命绽放\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">为什么？精通把「提前铺」写进了属性面板</span><span class=\"sub\">目标身上你的持续治疗越多，你的治疗量越高</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>恢复德的治疗几乎全是持续效果——<sk>回春术</sk>、<sk>野性成长</sk>、<sk>生命绽放</sk>、<sk>愈合</sk>的续跳。<b>它们都要时间跳完，所以是预付款，不是应急药。</b></p><p style=\"margin-top:8px\">精通「和谐」按目标身上你的持续治疗数量提高治疗量。实测属性优先级是 <b>精通 100 > 全能 83 > 急速 43 > 爆击 1</b>——<b>属性面板本身在告诉你：把持续治疗铺厚，比治得快更值钱。</b></p><p style=\"margin-top:8px\">反过来说，这也是恢复德最容易输的地方：<b>一个身上什么都没有的人突然被集火，你手上没有能立刻把他拉回来的东西。</b></p></div></div>\n</div>\n\n<h2>该不该开？勾一下就知道</h2>\n<p class=\"lead\">勾掉几条，就有多少胜算。</p>\n<div class=\"gobox\">\n  <div class=\"gh\">开场决策器</div>\n  <div class=\"gt\">现在的局面满足哪几条？</div>\n  <div class=\"checks\" id=\"checks\"></div>\n  <div class=\"verdict\" id=\"verdict\"></div>\n</div>\n\n<h2>三个时钟</h2>\n<p class=\"lead\">恢复德的判断挂在这三个数字上。</p>\n<div class=\"rows\" id=\"clocks\"></div>\n\n<h2>本版定盘（top50 三对三实测）</h2>\n<div class=\"rows\" id=\"setup\"></div>\n\n</div>",
    "s2": "<div class=\"wrap\">\n  <div class=\"rows\" id=\"general\"></div>\n</div>",
    "s3": "<div class=\"wrap\">\n  <p class=\"lead\">四问对所有敌人是同一套。</p>\n  <div class=\"split\">\n    <div class=\"sidecol\">\n      <div class=\"cls-grid\" id=\"clsGrid\"></div>\n      <div class=\"modebar\" id=\"modebar\">\n        <button class=\"on\" data-m=\"arena\">竞技场</button>\n        <button data-m=\"duel\">单挑</button>\n      </div>\n    </div>\n    <div id=\"clsDetail\"></div>\n  </div>\n</div>",
    "s4": "<div class=\"wrap\">\n  <div class=\"statbar\">\n    <div class=\"stat\"><span class=\"k\">累计答题</span><span class=\"v\" id=\"stPlayed\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">总正确率</span><span class=\"v\" id=\"stAcc\">—</span></div>\n    <div class=\"stat\"><span class=\"k\">最长连对</span><span class=\"v\" id=\"stBest\">0</span></div>\n    <div class=\"stat\"><span class=\"k\">错题库</span><span class=\"v\" id=\"stWrong\">0</span></div>\n  </div>\n  <div class=\"qtop\">\n    <select id=\"fCat\"><option value=\"all\">全部范围</option></select>\n    <select id=\"fDiff\">\n      <option value=\"all\">全部难度</option>\n      <option value=\"1\">基础 · 机制</option>\n      <option value=\"2\">进阶 · 时机</option>\n      <option value=\"3\">高阶 · 权衡</option>\n    </select>\n    <button class=\"btn\" onclick=\"startQuiz(false)\">开始一轮（10 题）</button>\n    <button class=\"btn ghost\" onclick=\"startQuiz(true)\">只练错题</button>\n    <button class=\"btn ghost\" onclick=\"resetStats()\">清空记录</button>\n  </div>\n  <div id=\"quizArea\"></div>\n</div>",
    "s5": "<div class=\"wrap\">\n  <div class=\"sheet\" id=\"sheet\"></div>\n</div>"
  },
  "fragments": {
    "clocks": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"激活\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_lightning.jpg\" alt=\"激活\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">法力时钟 · <sk>激活</sk></span><span class=\"sub\">你的上限不是治疗量，是法力</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>把全队的持续治疗铺满很贵。<b>恢复德打不完的局，通常不是治不动，是没法力了。</b></p><p style=\"margin-top:8px\"><sk>激活</sk>实测 <b>36/50</b>——<b>有 14 个人认为这一格换成别的更值</b>。这说明它不是无脑必点：如果你的局普遍打得短、或者队里有别的续航来源，那一点可以换成生存或控制。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"树皮术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stoneclawtotem.jpg\" alt=\"树皮术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"猎豹形态\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_catform.jpg\" alt=\"猎豹形态\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性冲锋\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_druid_wildcharge.jpg\" alt=\"野性冲锋\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">生存时钟 · 腿，不是护甲</span><span class=\"sub\">恢复德是最能跑的治疗，不是最耐打的</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>它没有免疫，也没有大减伤。能用的是<sk>树皮术</sk>顶一手，加上<sk>猎豹形态</sk>、<sk>旅行形态</sk>、<sk>野性冲锋</sk>换出距离。</p><p style=\"margin-top:8px\"><b>所以「被贴脸」对恢复德是资源问题不是血量问题</b>——跑掉一次就等于赚了一个循环的治疗时间。跑不掉的时候，你要提前知道自己撑不撑得住。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"化身：生命之树\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_improvedtreeform.jpg\" alt=\"化身：生命之树\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"宁静\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_tranquility.jpg\" alt=\"宁静\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"繁盛\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_druid_wildburst.jpg\" alt=\"繁盛\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">大牌时钟 · 三张都要「场上已经有货」</span><span class=\"sub\">空场开等于浪费</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>化身：生命之树</sk>强化的是<sk>回春术</sk>、<sk>野性成长</sk>、<sk>愈合</sk>；<sk>繁盛</sk>延长的是已经在跳的持续治疗；<sk>宁静</sk>叠在已有的治疗之上才吃得满精通。</p><p style=\"margin-top:8px\"><b>三张牌的共同前提都是「场上已经铺好了东西」。</b>队友裸血的时候交大牌，是把最贵的资源用在最差的时机上。</p></div></div>",
    "setup": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"林莽卫士\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_forceofnature.jpg\" alt=\"林莽卫士\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">英雄天赋：林地守护者 Keeper Of The Grove</span><span class=\"sub\">top50 里 44 人用，Wildstalker 只有 6 人</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>Keeper Of The Grove 44/50，Wildstalker 6/50。</b>不是唯一解，但差距足够大——除非你很清楚自己为什么要走另一条。</p><p style=\"margin-top:8px\">这条线围绕<sk>林莽卫士</sk>展开：<b>施放<sk>迅捷治愈</sk>或<sk>野性成长</sk>会召唤树人替你治疗</b>。它给恢复德加了一份不花法力的治疗来源，也多了一层要管的东西——树人在场时，Power of Nature 和 Harmony of the Grove 还会让你自己的治疗更高。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">换句话说：这条线把「按时放<sk>迅捷治愈</sk>」从一个治疗动作变成了一个<b>资源动作</b>。</span></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"自然迅捷\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_ravenform.jpg\" alt=\"自然迅捷\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性成长\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_flourish.jpg\" alt=\"野性成长\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">PvP 天赋：三格全定死，没有取舍</span><span class=\"sub\">Call of Ohn'ahra / Forest Guardian / Early Spring 各 49/50</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><b>三格 PvP 天赋各 49/50，其余 8 个加起来只有 3 人次。</b>这在本站已上线的专精里是独一份——别的专精至少有一格要看阵容，恢复德三格全部定死。</p><p style=\"margin-top:8px\"><b>Call of Ohn'ahra</b>：<sk>自然迅捷</sk>现在也影响<sk>旋风</sk>，代价是冷却延长 10 秒。<b>它把一张治疗牌改成了控制牌</b>——被贴脸时你也能瞬发控住一个人，这是恢复德在近战压力下唯一的反手。</p><p style=\"margin-top:8px\"><b>Forest Guardian</b>：伤害与连击类技能会延长你身上生效的持续治疗，消耗类技能则加快它们的跳动。<b>又是一条奖励「提前铺」的线。</b></p><p style=\"margin-top:8px\"><b>Early Spring</b>：<sk>野性成长</sk>变为瞬发，且用它治到 6 人后获得「繁花盛放」，下一个<sk>野性成长</sk>会给所有目标挂上<sk>生命绽放</sk>。<b>恢复德唯一的群体持续治疗不再需要读条</b>——这是三格里最直接改变手感的一格。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">注意：英雄天赋里另有一个同名的 Early Spring（缩短<sk>迅捷治愈</sk>与<sk>野性成长</sk>冷却 1 秒），跟这一格不是一回事。</span></p></div></div>",
    "general": "<div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"回春术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_rejuvenation.jpg\" alt=\"回春术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性成长\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_flourish.jpg\" alt=\"野性成长\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"迅捷治愈\" style=\"width:20px;height:20px\" src=\"assets/icons/inv_relics_idolofrejuvenation.jpg\" alt=\"迅捷治愈\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">01 · 一轮交战的完整流程</span><span class=\"sub\">八步，点着走一遍</span><span class=\"ar\">▸</span></div><div class=\"b\"><div class=\"stepper\" id=\"stepBody\"></div></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"回春术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_rejuvenation.jpg\" alt=\"回春术\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性成长\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_flourish.jpg\" alt=\"野性成长\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">02 · 持续治疗是预付款，不是应急药</span><span class=\"sub\">看到起手就铺，不是看到血条掉才铺</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>你的治疗量大部分锁在增益里，<b>而增益需要时间跳完</b>。等目标掉到一半再铺，前面那几跳的治疗永远追不回来。</p><p style=\"margin-top:8px\">实操上就一句：<b>进场之前，被集火可能性最高的那个人身上应该已经有<sk>回春术</sk>；对面一抬手，<sk>野性成长</sk>就该在路上。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"猎豹形态\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_catform.jpg\" alt=\"猎豹形态\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"野性冲锋\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_druid_wildcharge.jpg\" alt=\"野性冲锋\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"树皮术\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stoneclawtotem.jpg\" alt=\"树皮术\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">03 · 你的活法是拉开，不是硬顶</span><span class=\"sub\">没有免疫，也没有大减伤</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>恢复德挨打时能做的是<b>换位置</b>：<sk>猎豹形态</sk>加速、<sk>野性冲锋</sk>跳走、<sk>旅行形态</sk>转场，<sk>树皮术</sk>只是过渡。</p><p style=\"margin-top:8px\"><b>关键在于这些动作不打断你的治疗</b>——持续治疗在你跑的时候还在跳。这是恢复德跟其他治疗最大的区别：<b>它可以一边逃一边治。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"铁木树皮\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_druid_ironbark.jpg\" alt=\"铁木树皮\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">04 · <sk>铁木树皮</sk>给正在挨打的，不是给血最少的</span><span class=\"sub\">它是减伤，不是治疗</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>血最少但已经没人打的那个人不需要减伤，他需要的是时间——而持续治疗会给他。</p><p style=\"margin-top:8px\"><b><sk>铁木树皮</sk>要压在「伤害正在落下」的那个人身上</b>，而且它还会让你的持续治疗对他效果提高 20%。<b>用在没有持续治疗的人身上，等于只用了一半。</b></p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_earthbind.jpg\" alt=\"旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"纠缠根须\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_stranglevines.jpg\" alt=\"纠缠根须\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"乌索尔旋风\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_druid_ursolsvortex.jpg\" alt=\"乌索尔旋风\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">05 · 你的控制是防守工具，不是输出前摇</span><span class=\"sub\">控住一个人 = 少治一个人的伤害</span><span class=\"ar\">▸</span></div><div class=\"b\"><p><sk>旋风</sk>把一个人从这一局里拿走几秒、<sk>纠缠根须</sk>定住追你的人、<sk>乌索尔旋风</sk>切断他的路线。<b>这三样省下的治疗量，比你多按几次治疗键多得多。</b></p><p style=\"margin-top:8px\">带上 Call of Ohn'ahra 之后，<sk>自然迅捷</sk>能让<sk>旋风</sk>变瞬发。<b>这张牌要留给「你已经跑不掉」的那一刻</b>，不是开局随手交。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"激活\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_lightning.jpg\" alt=\"激活\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">06 · 什么时候该停手</span><span class=\"sub\">法力见底之后你什么都不是</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>对面在打消耗、你的队友只是掉了一点皮——<b>那不是该补的时候</b>。恢复德的持续治疗有溢出，满血挂<sk>回春术</sk>是在烧法力。</p><p style=\"margin-top:8px\"><b>判据：这一跳如果不打，他会不会进入危险区？</b>不会就别打。<sk>激活</sk>留给真正的窗口，不是留给自己手痒。</p></div></div><div class=\"row\"><div class=\"h\" onclick=\"tg(this)\"><span class=\"icrow\"><img class=\"ic\" data-sk=\"化身：生命之树\" style=\"width:20px;height:20px\" src=\"assets/icons/ability_druid_improvedtreeform.jpg\" alt=\"化身：生命之树\" loading=\"lazy\" onerror=\"this.style.display='none'\"><img class=\"ic\" data-sk=\"宁静\" style=\"width:20px;height:20px\" src=\"assets/icons/spell_nature_tranquility.jpg\" alt=\"宁静\" loading=\"lazy\" onerror=\"this.style.display='none'\"></span><span class=\"t\">07 · 大牌开在持续治疗铺好之后</span><span class=\"sub\">顺序反了，效果差一半</span><span class=\"ar\">▸</span></div><div class=\"b\"><p>正确顺序是：<b>先把持续治疗铺上 → 再开大牌</b>。反过来，大牌的加成会落在空气上。</p><p style=\"margin-top:8px\"><b><sk>宁静</sk>还要站定引导</b>，所以它不只是「什么时候开」的问题，还是「这几秒安不安全」的问题。被打断的<sk>宁静</sk>是这局最贵的一次失误。</p></div></div>",
    "sheet": "<div class=\"sc wide\"><h4>三条铁律</h4><div class=\"big3\"><div class=\"b3\"><div class=\"n\">1</div><div><div class=\"tt\">挨打之前就把持续治疗铺上</div><div class=\"dd\">血条动了再铺，你已经晚一个循环。你的治疗量锁在增益里，增益需要时间跳完。</div></div></div><div class=\"b3\"><div class=\"n\">2</div><div><div class=\"tt\">你的活法是拉开距离，不是硬顶</div><div class=\"dd\">恢复德没有免疫也没有大减伤，但它可以一边跑一边治——这是它跟其他治疗最大的区别。</div></div></div><div class=\"b3\"><div class=\"n\">3</div><div><div class=\"tt\">大牌开在持续治疗铺好之后</div><div class=\"dd\"><sk>宁静</sk>、<sk>化身：生命之树</sk>、<sk>繁盛</sk>都是放大已有治疗的牌。空场开等于浪费。</div></div></div></div></div><div class=\"sc\"><h4>为什么 PvP 天赋三格全定死</h4><p>Call of Ohn'ahra、Forest Guardian、Early Spring 各 <b>49/50</b>，其余 8 个加起来 <b>3 人次</b>。</p><p style=\"margin-top:8px\">本站已上线的专精里，这是唯一一个三格全无取舍的。<b>它的含义是：恢复德在 PvP 天赋这一层没有「看阵容调整」的空间</b>——省下来的判断力，全部花在场上的时机上。</p></div><div class=\"sc\"><h4>精通和你的打法是同一件事</h4><p>精通「和谐」按目标身上你的持续治疗数量提高治疗量。实测属性优先级：<b>精通 100 > 全能 83 > 急速 43 > 爆击 1</b>。</p><p style=\"margin-top:8px\"><b>爆击几乎为零这一点值得单独看</b>——它说明恢复德不指望某一次治疗打出高数字，它指望的是「一直有东西在跳」。这跟「提前铺」是同一句话的两种说法。</p></div><div class=\"sc\"><h4>三张大牌的分工</h4><p><b><sk>化身：生命之树</sk></b>——强化你的常规治疗，适合「这一波要打很久」。</p><p style=\"margin-top:8px\"><b><sk>宁静</sk></b>——一次性大量群体治疗，但要站定引导，<b>开之前先确认这几秒不会被打断</b>。</p><p style=\"margin-top:8px\"><b><sk>繁盛</sk></b>——延长场上所有持续治疗，<b>场上东西越多它越值钱</b>，所以它永远是最后一张。</p></div><div class=\"sc\"><h4>18 个需要判断的格子</h4><p>职业树与专精树共 100 格（英雄天赋按「选哪条线」算一个决策），<b>82 格是定死的，18 格需要你自己定</b>。</p><p style=\"margin-top:8px\">分歧最集中的几格：<b>Typhoon 39/50</b>（范围击退）、<b>Improved Ironbark 38/50</b>、<b>Improved Swiftmend 38/50</b>、<b><sk>激活</sk> 36/50</b>、<b>Feline Swiftness 35/50</b>、<b><sk>乌索尔旋风</sk> 34/50</b>、<b><sk>宁静</sk> 33/50</b>。</p><p style=\"margin-top:8px\"><span class=\"dimtx\">这 18 格里有一半是控制与位移，不是治疗——<b>恢复德的配点分歧主要发生在「怎么活下来」，不是「怎么治得更多」。</b></span></p></div><div class=\"sc\"><h4>三个高频误判</h4><p><b>1 · 等血掉了才铺持续治疗。</b>那几跳追不回来，这是恢复德最贵的习惯性错误。</p><p style=\"margin-top:8px\"><b>2 · <sk>铁木树皮</sk>给血最少的人。</b>它是减伤，要给正在挨打的那个。</p><p style=\"margin-top:8px\"><b>3 · 满血挂<sk>回春术</sk>。</b>溢出的治疗照样扣法力，而法力见底之后你什么都不是。</p></div>"
  },
  "sk": {
    "回春术": "spell_nature_rejuvenation",
    "野性成长": "ability_druid_flourish",
    "生命绽放": "inv_misc_herb_felblossom",
    "愈合": "spell_nature_resistnature",
    "迅捷治愈": "inv_relics_idolofrejuvenation",
    "铁木树皮": "spell_druid_ironbark",
    "宁静": "spell_nature_tranquility",
    "化身：生命之树": "ability_druid_improvedtreeform",
    "繁盛": "spell_druid_wildburst",
    "百花齐放": "inv_misc_herb_talandrasrose",
    "树皮术": "spell_nature_stoneclawtotem",
    "猎豹形态": "ability_druid_catform",
    "旅行形态": "ability_druid_travelform",
    "野性冲锋": "spell_druid_wildcharge",
    "激活": "spell_nature_lightning",
    "旋风": "spell_nature_earthbind",
    "纠缠根须": "spell_nature_stranglevines",
    "乌索尔旋风": "spell_druid_ursolsvortex",
    "夺魂咆哮": "ability_druid_demoralizingroar",
    "台风": "ability_druid_typhoon",
    "自然迅捷": "spell_nature_ravenform",
    "自然之愈": "ability_shaman_cleansespirit",
    "狂奔怒吼": "spell_druid_stamedingroar",
    "熊形态": "ability_racial_bearform",
    "林莽卫士": "ability_druid_forceofnature",
    "急奔": "ability_druid_dash",
    "休眠": "spell_nature_sleep",
    "复生": "spell_nature_reincarnation",
    "破胆怒吼": "ability_golemthunderclap",
    "剑在人在": "ability_warrior_challange",
    "致死打击": "ability_warrior_savageblow",
    "圣盾术": "spell_holy_divineshield",
    "自由祝福": "spell_holy_sealofvalor",
    "保护祝福": "spell_holy_sealofprotection",
    "灵龟守护": "ability_hunter_pet_turtle",
    "假死": "ability_rogue_feigndeath",
    "消失": "ability_vanish",
    "闪避": "spell_shadow_shadowward",
    "逃脱": "ability_rogue_feint",
    "痛苦压制": "spell_holy_painsupression",
    "消散": "spell_shadow_dispersion",
    "心灵尖啸": "spell_shadow_psychicscream",
    "反魔法护罩": "spell_shadow_antimagicshell",
    "冰封之韧": "spell_deathknight_iceboundfortitude",
    "死亡之握": "spell_deathknight_strangulate",
    "星界转移": "ability_shaman_astralshift",
    "大地之盾": "spell_nature_skinofearth",
    "幽魂之狼": "spell_nature_spiritwolf",
    "寒冰屏障": "spell_frost_frost",
    "业报之触": "ability_monk_touchofkarma",
    "气定神闲": "spell_nature_enchantarmor",
    "黑暗": "ability_demonhunter_darkness",
    "疾影": "ability_demonhunter_blur",
    "复仇回避": "ability_demonhunter_vengefulretreat2"
  },
  "enemy": [],
  "own": null,
  "cond": [
    {
      "k": "hot",
      "t": "被打的人身上持续治疗已经铺齐",
      "d": "至少<sk>回春术</sk>加一层别的。铺齐了你的大牌才吃得满精通"
    },
    {
      "k": "real",
      "t": "对面这一波是真的开了",
      "d": "不是抬手骗你交牌。恢复德的大牌冷却都很长，骗掉一张就够他打下一轮"
    },
    {
      "k": "free",
      "t": "我能自由施法",
      "d": "没被控、没被沉默、没有近战贴着我逼我走位"
    },
    {
      "k": "mana",
      "t": "法力撑得完这一轮",
      "d": "大牌之后往往还要补一轮持续治疗。开完就没法力，等于只买到半个窗口"
    }
  ],
  "verdicts": [
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>别交大牌。先活着，或者认掉这个人</h3><p>条件一条都不成立，这时候交<sk>宁静</sk>或<sk>化身：生命之树</sk>就是把最贵的牌喂给对面。<b>要么先用位移和<sk>树皮术</sk>买时间，要么承认这个人救不回来</b>——把资源留给下一个窗口。<b>治疗最难的判断是「什么时候放弃」。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "bad",
      "html": "<div class=\"vi\">◇</div><div><h3>条件太少。用小牌顶，别动大的</h3><p><sk>迅捷治愈</sk>加一层<sk>铁木树皮</sk>先把这一下扛过去。<b>大牌的价值来自「铺好之后再开」，现在开只能拿到一部分。</b></p><!--MISSING--></div>"
    },
    {
      "cls": "mid",
      "html": "<div class=\"vi\">◈</div><div><h3>可以动手，但先补上缺的那一条</h3><p>一半条件成立。<b>先花一个动作把缺口补上</b>——铺持续治疗、或者拉开一步让自己能自由施法——再交大牌，收益会明显不同。</p><!--MISSING--></div>"
    },
    {
      "cls": "ok",
      "html": "<div class=\"vi\">◆</div><div><h3>可以交。顺序别反</h3><p>条件基本齐了。<b>先确认持续治疗都在跳，再开<sk>化身：生命之树</sk>或<sk>宁静</sk></b>；<sk>繁盛</sk>放在最后，它延长的是场上已有的东西。</p><!--MISSING--></div>"
    },
    {
      "cls": "ok",
      "html": "<div class=\"vi\">★</div><div><h3>全齐了。这一波你接得住</h3><p>持续治疗铺满、对面真的开了、你能自由施法、法力也够。<b>这是恢复德收益最高的那几秒</b>——大牌开下去，接着补一轮持续治疗把窗口填满。</p><!--MISSING--></div>"
    }
  ],
  "steps": [
    [
      "开局先数对面有几个杀窗",
      "看对面有几个爆发型职业、他们的爆发标志长什么样。<b>你整局都在为「下一次集火」做准备</b>，不知道它长什么样就准备不了。",
      "回春术"
    ],
    [
      "进场之前把持续治疗铺上",
      "最可能被集火的那个人身上要有<sk>回春术</sk>。<b>这一步在挨打之前做，不是之后。</b>",
      "回春术"
    ],
    [
      "对面抬手，<sk>野性成长</sk>跟上",
      "带 Early Spring 之后它是瞬发的，可以边跑边放。<b>群体持续治疗是你精通的地基。</b>",
      "野性成长"
    ],
    [
      "把<sk>铁木树皮</sk>压在正在挨打的人身上",
      "不是血最少的那个。它同时提高你对他的持续治疗效果。",
      "铁木树皮"
    ],
    [
      "被贴脸就换位置，别站着治",
      "<sk>猎豹形态</sk>、<sk>野性冲锋</sk>拉开。<b>持续治疗在你跑的时候还在跳。</b>",
      "野性冲锋"
    ],
    [
      "跑不掉了，交那张瞬发控制",
      "<sk>自然迅捷</sk>接<sk>旋风</sk>（Call of Ohn'ahra），或者<sk>夺魂咆哮</sk>。<b>这是你能自己解围的两张牌。</b>",
      "自然迅捷"
    ],
    [
      "铺好了再开大牌",
      "<sk>化身：生命之树</sk>或<sk>宁静</sk>。<b>顺序反了，加成落在空气上。</b>",
      "化身：生命之树"
    ],
    [
      "窗口过去，回法力、重新铺一轮",
      "别在满血的人身上挂<sk>回春术</sk>。<b>下一波来之前的这段时间，是用来省法力和重新布置的。</b>",
      "激活"
    ]
  ],
  "match": {
    "qlbl": [
      "1 · 他怎么杀掉你的队友",
      "2 · 他怎么让你治不了",
      "3 · 你必须预判的那张牌",
      "4 · 你怎么接住这一波"
    ],
    "list": [
      {
        "id": "warrior",
        "n": "战士",
        "ic": "classicon_warrior",
        "c": "#C69B6D",
        "diff": "难",
        "cards": [
          "破胆怒吼",
          "剑在人在",
          "致死打击"
        ],
        "one": "他不是来杀你队友的，他是来让你放不出治疗的。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "爆发窗口里的集中伤害，而且他能把目标拽走、打断你的视线。"
          ],
          [
            "他怎么让你治不了",
            "<b>他的目标是你</b>：<sk>破胆怒吼</sk>把你打断并赶跑，致死类效果压低你的治疗量。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个恐惧。</b>它不是控制，是「让你这几秒什么都做不了」——而战士的爆发正好就在这几秒。"
          ],
          [
            "你怎么接住这一波",
            "提前把持续治疗铺满，然后<b>用位移让他够不到你</b>。恢复德的抗压不在减伤，在距离。"
          ]
        ],
        "arena": "战士会一直咬着你。<b>主动要求队友剥离</b>，但你比戒律牧好过一点——你有<sk>猎豹形态</sk>和<sk>野性冲锋</sk>，能自己拉开一段。",
        "duel": "绕柱子，让他的冲锋落空。<sk>纠缠根须</sk>定住之后立刻拉开，<b>别站在他近战范围里读条</b>。"
      },
      {
        "id": "paladin",
        "n": "圣骑士",
        "ic": "classicon_paladin",
        "c": "#F48CBA",
        "diff": "中等",
        "cards": [
          "圣盾术",
          "自由祝福",
          "保护祝福"
        ],
        "one": "他的爆发有明确的准备动作，看得见就接得住。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "开了爆发之后的几秒，伤害集中在单体上。"
          ],
          [
            "他怎么让你治不了",
            "<sk>圣盾术</sk>让被打的人白挨——但那是他救人的牌，不是杀人的牌。"
          ],
          [
            "你必须预判的那张牌",
            "<b>他的控制（致盲/审判类锤子）落在你身上的那一下。</b>他不需要打死你，只要你三秒不能治。"
          ],
          [
            "你怎么接住这一波",
            "爆发起来之前把持续治疗铺齐，起来之后用<sk>铁木树皮</sk>顶那一波。"
          ]
        ],
        "arena": "惩戒骑的伤害是「一波一波」的。<b>你的判断点是那一波来之前，不是来之后</b>——他抬手了你再铺就晚了。",
        "duel": "他的爆发有冷却，你的持续治疗没有。<b>拖，让他打空一轮</b>，然后你还站着。"
      },
      {
        "id": "hunter",
        "n": "猎人",
        "ic": "classicon_hunter",
        "c": "#AAD372",
        "diff": "中等偏难",
        "cards": [
          "灵龟守护",
          "假死",
          "威慑"
        ],
        "one": "他不需要贴近你，所以你跑不掉——他的射程比你的腿长。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "他的爆发挂在宠物和减益上，伤害是持续叠加的，不是一瞬间的。"
          ],
          [
            "他怎么让你治不了",
            "<b>他的陷阱和减速让你没法拉距离</b>，而恢复德的活法就是距离。"
          ],
          [
            "你必须预判的那张牌",
            "<b>冰冻陷阱。</b>被关住的那几秒，你的持续治疗还在跳，但你补不上新的。"
          ],
          [
            "你怎么接住这一波",
            "别指望跑掉，改成<b>把持续治疗铺厚、用<sk>乌索尔旋风</sk>切断他的走位</b>。"
          ]
        ],
        "arena": "猎人擅长打「治疗看不见的地方」。<b>注意视线</b>——他会绕到你看不见队友的角度。<sk>休眠</sk>可以对宝宝用。",
        "duel": "他有<sk>灵龟守护</sk>和<sk>假死</sk>两张免疫式的牌。你打不死他，他也不一定打死你，<b>这一局是耗法力的</b>。"
      },
      {
        "id": "rogue",
        "n": "潜行者",
        "ic": "classicon_rogue",
        "c": "#FFF468",
        "diff": "高",
        "cards": [
          "消失",
          "闪避",
          "逃脱"
        ],
        "one": "他一开控就是一整条链，你要在链子开始之前就把治疗铺好。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "开控之后的窗口，从偷袭到肾击是一条不给你出手机会的链。"
          ],
          [
            "他怎么让你治不了",
            "<b>他直接控住你</b>——恢复德最怕的不是伤害，是「几秒钟不能操作」。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那条控制链的第一下。</b>它落地之后你就只能看着，所以判断必须发生在它之前。"
          ],
          [
            "你怎么接住这一波",
            "进场之前铺满持续治疗；<b>控制链跳完之后立刻<sk>迅捷治愈</sk>，别在链子中间浪费按键。</b>"
          ]
        ],
        "arena": "贼的目标常常是你。<b>开局站队友近处</b>，被开控时队友才有机会解你。<sk>夺魂咆哮</sk>是你能自己解围的那张牌。",
        "duel": "他一直隐身找角度。<b>持续治疗挂在自己身上就是保命牌</b>，被偷袭时它还在跳。"
      },
      {
        "id": "priest",
        "n": "牧师",
        "ic": "classicon_priest",
        "c": "#FFFFFF",
        "diff": "中等",
        "cards": [
          "痛苦压制",
          "消散",
          "心灵尖啸"
        ],
        "one": "暗牧不靠爆发杀人，靠让你一直治不完。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "吸血鬼之触叠满之后的持续压制，杀人是慢慢来的。"
          ],
          [
            "他怎么让你治不了",
            "<b>他驱散你的持续治疗。</b>恢复德的治疗全在增益里，被驱散等于治疗白花。"
          ],
          [
            "你必须预判的那张牌",
            "<b>他的驱散节奏。</b>你铺的持续治疗被驱一次，等于你白读了一次条。"
          ],
          [
            "你怎么接住这一波",
            "<b>用数量对抗驱散</b>：多层持续治疗让他一次只能驱掉一个，剩下的还在跳。"
          ]
        ],
        "arena": "对暗牧要接受「治疗会被驱掉」。<b>不要因为被驱就停手</b>，你的补法比他的驱散快。",
        "duel": "他的伤害是持续的，你的治疗也是持续的。<b>这一局比的是谁的法力先见底。</b>"
      },
      {
        "id": "dk",
        "n": "死亡骑士",
        "ic": "classicon_deathknight",
        "c": "#C41E3A",
        "diff": "难",
        "cards": [
          "反魔法护罩",
          "冰封之韧",
          "死亡之握"
        ],
        "one": "他把你钉在原地，而你的活法是移动。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "疾病叠满之后配合爆发，伤害持续且难以打断。"
          ],
          [
            "他怎么让你治不了",
            "<b><sk>死亡之握</sk>把你拽回去</b>，还有窒息打断你的施法。恢复德一旦跑不掉就只剩硬吃。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个拉人的技能。</b>它一响，你刚拉开的距离全没了。"
          ],
          [
            "你怎么接住这一波",
            "把瞬发的持续治疗当主力，<b>读条的东西留到他控制交完再放</b>。"
          ]
        ],
        "arena": "邪 DK 的压制是持续的。<b><sk>乌索尔旋风</sk>放在他和你之间</b>，逼他绕路，比正面跑更有效。",
        "duel": "他的<sk>反魔法护罩</sk>会挡掉你的控制。<b>别在护罩期间交<sk>旋风</sk></b>，等它掉。"
      },
      {
        "id": "shaman",
        "n": "萨满祭司",
        "ic": "classicon_shaman",
        "c": "#0C69FF",
        "diff": "中等偏难",
        "cards": [
          "星界转移",
          "大地之盾",
          "幽魂之狼"
        ],
        "one": "他的图腾在改写场地规则，你的走位要绕着图腾走。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "爆发配合图腾的那几秒，伤害既有单体也有范围。"
          ],
          [
            "他怎么让你治不了",
            "<b>地缚图腾和地震术让你走不动、读不了条。</b>"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个沉默/打断的图腾。</b>它不是伤害，但它让你的读条治疗直接消失。"
          ],
          [
            "你怎么接住这一波",
            "尽量用瞬发的持续治疗顶过图腾时间；<b>该踩掉的图腾要踩</b>。"
          ]
        ],
        "arena": "增强萨贴脸很紧。<b>拉开距离时注意脚下有没有地缚</b>，被黏住的德鲁伊等于没腿。",
        "duel": "他的爆发窗口明显。<b>顶过那一轮，你的持续治疗回得比他掉得快。</b>"
      },
      {
        "id": "mage",
        "n": "法师",
        "ic": "classicon_mage",
        "c": "#3FC7EB",
        "diff": "高",
        "cards": [
          "寒冰屏障",
          "寒冰之障",
          "镜像"
        ],
        "one": "他的控制链最长，而且能把你和队友分成两块。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "爆发窗口配合控制链，一套下来能直接带走一个人。"
          ],
          [
            "他怎么让你治不了",
            "<b>变形术和深度冻结把你隔离</b>，你在链子里什么都做不了。"
          ],
          [
            "你必须预判的那张牌",
            "<b>变形术。</b>它把你从这一局里拿掉几秒，而法师的杀窗正好在那几秒。"
          ],
          [
            "你怎么接住这一波",
            "<b>提前铺满，然后想办法不被变形</b>——站位分散、留好解控或位移。"
          ]
        ],
        "arena": "法师最难受的一点是<b>他能同时控住你和你的队友</b>。<sk>自然迅捷</sk>配 <b>Call of Ohn'ahra</b> 的瞬发<sk>旋风</sk>是你打断他节奏的关键牌。",
        "duel": "他的<sk>寒冰屏障</sk>会让你的输出和控制全部落空。<b>等它掉再动手。</b>"
      },
      {
        "id": "warlock",
        "n": "术士",
        "ic": "classicon_warlock",
        "c": "#8788EE",
        "diff": "中等偏难",
        "cards": [
          "石头",
          "恶魔门户",
          "暗影之怒"
        ],
        "one": "他不追求一瞬间打死谁，他要的是你一直在补血、法力见底。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "多个持续伤害叠满之后，配合恐惧的那一段时间。"
          ],
          [
            "他怎么让你治不了",
            "<b>恐惧让你放不出治疗</b>，而他的伤害不需要他在场也在掉。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个恐惧。</b>被恐住的几秒，你的持续治疗还在跳，但你补不了新的。"
          ],
          [
            "你怎么接住这一波",
            "<b>用持续治疗对抗持续伤害</b>，别用大治疗去追单点——那正是他想要的法力消耗。"
          ]
        ],
        "arena": "术士局是长局。<b>盯自己的法力条</b>，<sk>激活</sk>要用在真正的窗口上，不是随手交。",
        "duel": "他的门户和石头让他很难被打死。<b>接受打不死，专心不死。</b>"
      },
      {
        "id": "monk",
        "n": "武僧",
        "ic": "classicon_monk",
        "c": "#00FF98",
        "diff": "中等偏难",
        "cards": [
          "业报之触",
          "气定神闲",
          "轻身移形"
        ],
        "one": "他会把伤害转回来，你要分清哪些是他打的、哪些是你自己造的。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "爆发配合连击的那几秒，伤害集中且带控制。"
          ],
          [
            "他怎么让你治不了",
            "<b><sk>业报之触</sk></b>让你队友的输出反噬自己，间接增加你的治疗压力。"
          ],
          [
            "你必须预判的那张牌",
            "<b>他的定身和瘫痪。</b>武僧的控制很碎，但每一段都够断你一次读条。"
          ],
          [
            "你怎么接住这一波",
            "瞬发优先，<b>读条留到他的连招交完</b>。"
          ]
        ],
        "arena": "踏风的机动性很高，<b>拉距离对他基本无效</b>。改成用<sk>乌索尔旋风</sk>和<sk>夺魂咆哮</sk>换空间。",
        "duel": "他的<sk>气定神闲</sk>能解掉你的控制。<b>控制别提前交</b>，等他用完再上。"
      },
      {
        "id": "druid",
        "n": "德鲁伊",
        "ic": "classicon_druid",
        "c": "#FF7C0A",
        "diff": "高",
        "cards": [
          "树皮术",
          "化身：生命之树",
          "旋风"
        ],
        "one": "镜像局。比的是谁的持续治疗铺得更早、谁的法力更省。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "野性德/平衡德的爆发窗口很短，但恢复德本身杀不了人。"
          ],
          [
            "他怎么让你治不了",
            "<b>对面的<sk>旋风</sk>把你的队友从战斗里拿走</b>，也能把你拿走。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个<sk>旋风</sk>。</b>瞬发的旋风（Call of Ohn'ahra）双方都有，谁先控住谁占先手。"
          ],
          [
            "你怎么接住这一波",
            "<b>比他早一步铺满</b>，然后逼他先交大牌。"
          ]
        ],
        "arena": "对恢复德是耗局。<b>你的优势来自法力效率和先手控制</b>，不是治疗量。",
        "duel": "两个恢复德单挑打不死对方。<b>这一局的意义只有练走位和法力管理。</b>"
      },
      {
        "id": "dh",
        "n": "恶魔猎手",
        "ic": "classicon_demonhunter",
        "c": "#A330C9",
        "diff": "难",
        "cards": [
          "黑暗",
          "疾影",
          "复仇回避"
        ],
        "one": "他想去哪就去哪，你拉不开距离。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "连续贴身输出，配合变形之后的一段高伤害。"
          ],
          [
            "他怎么让你治不了",
            "<b>他的机动性让你无法脱离</b>，而恢复德的抗压建立在能跑上。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个范围昏迷/恐惧咒符。</b>它落地之前有延迟，是你唯一能预判的窗口。"
          ],
          [
            "你怎么接住这一波",
            "别试图跑赢他。<b>把持续治疗铺厚，用<sk>乌索尔旋风</sk>和<sk>夺魂咆哮</sk>换出一点空间。</b>"
          ]
        ],
        "arena": "DH 会一直在你脸上。<b>咒符有 2 秒延迟，看到落地就往外走。</b>",
        "duel": "他的位移大多向前。<b>你往他身后跑比往远处跑更有效。</b>"
      },
      {
        "id": "evoker",
        "n": "唤魔师",
        "ic": "classicon_evoker",
        "c": "#33937F",
        "diff": "中等",
        "cards": [
          "黑曜鳞甲",
          "时间膨胀",
          "缄默法印"
        ],
        "one": "他的伤害要蓄力，蓄力的那一下就是你的准备时间。",
        "q": [
          [
            "他怎么杀掉你的队友",
            "蓄力技能放出来的那一瞬，伤害集中在一个点上。"
          ],
          [
            "他怎么让你治不了",
            "<b>他的沉默印记直接拿掉你的施法能力</b>，恢复德的读条治疗全废。"
          ],
          [
            "你必须预判的那张牌",
            "<b>那个沉默。</b>被沉默时你只剩已经铺好的持续治疗。"
          ],
          [
            "你怎么接住这一波",
            "<b>沉默来之前铺满，沉默期间靠持续治疗顶。</b>这是「预付款」最直观的一局。"
          ]
        ],
        "arena": "唤魔师的蓄力有明显前摇。<b>看到蓄力就提前铺，不要等伤害落地。</b>",
        "duel": "他的射程和你差不多。<b>比拼的是谁的资源更耐用。</b>"
      }
    ]
  },
  "roles": null,
  "memb": null,
  "play": null,
  "quiz": []
};
