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
  "quiz": [
    {
      "id": "g1",
      "t": "general",
      "d": 1,
      "s": "开局，双方还没接触。你的队友<em>满血</em>，对面是<em>惩戒骑 + 法师</em>。",
      "a": "这几秒你该做什么？",
      "o": [
        "什么都不做，省法力",
        "把<sk>回春术</sk>挂在最可能被集火的那个人身上",
        "原地读一个<sk>愈合</sk>",
        "先打伤害攒资源"
      ],
      "r": 1,
      "e": [
        "省法力是对的方向，但<b>「什么都不做」和「不浪费」是两回事</b>——开局的这几秒正是最便宜的准备时间。",
        "正解。<b>你的治疗量锁在增益里，增益需要时间跳完</b>。等对面抬手你再铺，前面那几跳永远追不回来。",
        "满血读<sk>愈合</sk>是纯粹的溢出，最贵的一种浪费。",
        "恢复德的伤害在竞技场里可以忽略，为它花的每个动作都是从治疗那边挪来的。"
      ],
      "k": "持续治疗是预付款。进场之前铺，不是挨打之后铺。"
    },
    {
      "id": "g2",
      "t": "general",
      "d": 2,
      "s": "队友血掉到 <em>50%</em> 还在掉，他身上<em>什么持续治疗都没有</em>。你能自由施法。",
      "a": "第一个动作是什么？",
      "o": [
        "直接<sk>迅捷治愈</sk>",
        "先<sk>回春术</sk>，再<sk>迅捷治愈</sk>",
        "立刻开<sk>化身：生命之树</sk>",
        "<sk>铁木树皮</sk>压上去"
      ],
      "r": 1,
      "e": [
        "<sk>迅捷治愈</sk>会延长目标身上的持续治疗——<b>身上什么都没有的时候，它只剩一半价值</b>。",
        "正解。<b>先铺再补</b>。<sk>回春术</sk>是瞬发的，几乎不损失时间，却让接下来的<sk>迅捷治愈</sk>和你的精通都吃满。",
        "大牌强化的是你的常规治疗，场上空的时候开它，加成落在空气上。",
        "减伤能救急，但<b>这个人身上一点治疗都没有</b>——先解决「没有」，再解决「挨打」。"
      ],
      "k": "恢复德的所有大动作都建立在「场上已经有货」之上。先铺，再补。"
    },
    {
      "id": "g3",
      "t": "general",
      "d": 2,
      "s": "两个队友都受伤：<em>A 剩 30% 但已经没人打他</em>，<em>B 剩 70% 正在被两个人集火</em>。你手上有<sk>铁木树皮</sk>。",
      "a": "给谁？",
      "o": [
        "给 A，他血最少",
        "给 B，伤害正落在他身上",
        "谁都不给，留着",
        "给自己"
      ],
      "r": 1,
      "e": [
        "A 需要的是时间，而时间会由持续治疗给他。<b>减伤给一个没人打的人，等于没用。</b>",
        "正解。<b><sk>铁木树皮</sk>是减伤不是治疗</b>，它只在伤害正在落下时产生价值，而且还会让你的持续治疗对他效果提高 20%。",
        "留牌是有代价的：<b>被集火的那个人现在就在掉血</b>。",
        "你没被打的时候给自己，是把一张团队牌用成了个人牌。"
      ],
      "k": "减伤给正在挨打的，治疗给血最少的。这两件事经常不是同一个人。"
    },
    {
      "id": "g4",
      "t": "general",
      "d": 2,
      "s": "对面三个人同时抬手，你的队友<em>身上持续治疗刚好都在跳</em>，你没被控，法力还有大半。",
      "a": "现在最该做的是？",
      "o": [
        "继续补单点治疗",
        "开大牌（<sk>化身：生命之树</sk> 或 <sk>宁静</sk>）",
        "先跑开保命",
        "交<sk>激活</sk>回法力"
      ],
      "r": 1,
      "e": [
        "单点治疗跟不上三个人的集火，而这正是大牌存在的理由。",
        "正解。<b>四个条件全齐：铺好了、对面真的开了、你能自由施法、法力够。</b>这是恢复德收益最高的那几秒。",
        "没人打你的时候跑，等于主动离开治疗位置。",
        "法力还有大半时交<sk>激活</sk>是浪费——它该留给真正见底的那一刻。"
      ],
      "k": "大牌的四个条件：铺好了、对面真开了、你能自由施法、法力撑得完。"
    },
    {
      "id": "g5",
      "t": "general",
      "d": 3,
      "s": "你正在引导<sk>宁静</sk>，第二跳的时候<em>贼从背后开了控制链</em>。",
      "a": "这次失误的根源在哪？",
      "o": [
        "运气不好，没法避免",
        "开<sk>宁静</sk>之前没确认这几秒安全",
        "应该换成<sk>化身：生命之树</sk>",
        "应该先交<sk>铁木树皮</sk>"
      ],
      "r": 1,
      "e": [
        "把可预判的事情归给运气，下一局还会再犯。<b>贼在场且没露面，本身就是信号。</b>",
        "正解。<b><sk>宁静</sk>要站定引导，所以它不只是「什么时候开」的问题，还是「这几秒安不安全」的问题。</b>场上有隐身职业没露面时，它的风险最高。",
        "换一张牌不解决问题——真正的问题是你没有先确认环境。",
        "减伤挡不住控制链。"
      ],
      "k": "引导类大牌的第一个前提不是时机，是安全。"
    },
    {
      "id": "g6",
      "t": "general",
      "d": 2,
      "s": "一个战士咬着你打，你的队友血量健康。",
      "a": "该做什么？",
      "o": [
        "站着继续治，反正队友没事",
        "切<sk>猎豹形态</sk>拉开距离",
        "立刻交<sk>宁静</sk>",
        "对战士打输出逼他换目标"
      ],
      "r": 1,
      "e": [
        "站着挨打是把选择权交给对面。<b>恢复德没有免疫也没有大减伤，硬顶不是它的活法。</b>",
        "正解。<b>持续治疗在你跑的时候还在跳</b>——这是恢复德跟其他治疗最大的区别，它可以一边逃一边治。",
        "队友血量健康时开大牌，是把最贵的牌用在最便宜的场面上。",
        "恢复德的伤害在竞技场里逼不走任何人。"
      ],
      "k": "恢复德挨打时的第一反应是换位置，不是硬扛，也不是加治疗。"
    },
    {
      "id": "g7",
      "t": "general",
      "d": 3,
      "s": "你带着 <b>Call of Ohn'ahra</b>。两个近战把你堵在角落，队友还在场地另一边。",
      "a": "最该按的是？",
      "o": [
        "<sk>自然迅捷</sk>接<sk>旋风</sk>",
        "<sk>自然迅捷</sk>接<sk>愈合</sk>治自己",
        "读一个<sk>宁静</sk>",
        "切<sk>熊形态</sk>硬扛"
      ],
      "r": 0,
      "e": [
        "正解。<b>Call of Ohn'ahra 让<sk>自然迅捷</sk>也能作用于<sk>旋风</sk></b>——瞬发的<sk>旋风</sk>把其中一个人从这一局里拿走几秒，你就有了走出去的空间。",
        "治自己解决不了「两个人堵着你」这个结构问题，血补上去还会再掉。",
        "被两个近战贴着读<sk>宁静</sk>，几乎必然被打断。",
        "熊形态能多扛几秒，但你还在角落里，问题没变。"
      ],
      "k": "Call of Ohn'ahra 把一张治疗牌改成了控制牌。它要留给「已经跑不掉」的那一刻。"
    },
    {
      "id": "g8",
      "t": "general",
      "d": 1,
      "s": "恢复德的精通叫「和谐」。",
      "a": "它的效果是什么？",
      "o": [
        "治疗暴击几率提高",
        "目标身上你的持续治疗越多，你对他的治疗量越高",
        "法力消耗降低",
        "持续治疗跳动更快"
      ],
      "r": 1,
      "e": [
        "爆击在恢复德的实测属性里几乎为零（1），不是它的机制方向。",
        "正解。<b>这就是「提前铺」的机制依据</b>——实测属性优先级 精通 100 > 全能 83 > 急速 43 > 爆击 1，属性面板和打法说的是同一句话。",
        "法力消耗跟精通无关，法力靠的是<sk>激活</sk>和你自己的取舍。",
        "让持续治疗跳得更快的是急速，不是精通。"
      ],
      "k": "精通奖励「铺得厚」，不奖励「治得快」。"
    },
    {
      "id": "g9",
      "t": "general",
      "d": 2,
      "s": "你带着 <b>Early Spring</b>（PvP 天赋），正在被追着跑。",
      "a": "这一格给了你什么？",
      "o": [
        "<sk>野性成长</sk>变瞬发，可以边跑边放",
        "<sk>野性成长</sk>治疗量提高",
        "<sk>迅捷治愈</sk>冷却缩短",
        "<sk>回春术</sk>可以叠两层"
      ],
      "r": 0,
      "e": [
        "正解。<b>恢复德唯一的群体持续治疗不再需要读条</b>——这是三格 PvP 天赋里最直接改变手感的一格，被追着跑时尤其明显。",
        "它改的是施法方式，不是治疗量。",
        "缩短那两个技能冷却的是英雄天赋里那个<b>同名</b>的 Early Spring，跟 PvP 这一格不是一回事。",
        "让<sk>回春术</sk>叠两层的是 Germination。"
      ],
      "k": "同名天赋在不同树里可能是完全不同的效果，看效果不看名字。"
    },
    {
      "id": "g10",
      "t": "general",
      "d": 2,
      "s": "你走的是 <b>Keeper Of The Grove</b> 英雄天赋线。",
      "a": "<sk>林莽卫士</sk>怎么召唤出来？",
      "o": [
        "自动周期性出现",
        "施放<sk>迅捷治愈</sk>或<sk>野性成长</sk>时召唤",
        "开<sk>化身：生命之树</sk>时召唤",
        "手动按键召唤"
      ],
      "r": 1,
      "e": [
        "它不是自动的，靠你的动作触发。",
        "正解。<b>这条线把「按时放<sk>迅捷治愈</sk>」从一个治疗动作变成了一个资源动作</b>——树人是不花法力的治疗来源。",
        "化身期间确实会持续召唤（Cenarius' Guidance），但那是这条线里的另一格，不是基础触发方式。",
        "它是被动触发的，没有独立按键。"
      ],
      "k": "Keeper Of The Grove 让你的常规治疗顺手产出额外资源。放技能的节奏因此变得更重要。"
    },
    {
      "id": "g11",
      "t": "general",
      "d": 3,
      "s": "对面在打消耗，你的队友只是<em>掉了一点皮</em>（90% 左右），战斗已经进行了两分钟。",
      "a": "该不该补？",
      "o": [
        "补，血条不满就该补",
        "不补，等他进入危险区再动",
        "立刻交<sk>激活</sk>",
        "开<sk>百花齐放</sk>让大家慢慢回"
      ],
      "r": 1,
      "e": [
        "「血条不满就补」是恢复德最贵的习惯——<b>溢出的治疗照样扣法力</b>。",
        "正解。<b>判据是「这一跳如果不打，他会不会进入危险区」。</b>不会就别打。长局里恢复德输的原因通常是法力见底，不是治疗不够。",
        "法力还够的时候交<sk>激活</sk>，等于把它的价值折掉一半。",
        "<sk>百花齐放</sk>不是免费的，而且它是地面效果——人走开就吃不到。"
      ],
      "k": "长局的胜负手是法力效率。满血挂持续治疗是在烧钱。"
    },
    {
      "id": "g12",
      "t": "general",
      "d": 3,
      "s": "对面是<em>暗牧</em>，他一直在驱散你铺的持续治疗。",
      "a": "正确的应对是？",
      "o": [
        "停止铺持续治疗，改用直接治疗",
        "继续铺，而且铺得更多层",
        "只在他驱散冷却时铺",
        "换个目标铺"
      ],
      "r": 1,
      "e": [
        "直接治疗是恢复德最弱的一环，被驱散逼着改打法正中对方下怀。",
        "正解。<b>用数量对抗驱散</b>——多层持续治疗让他一次只能驱掉一个，剩下的还在跳。你的补法比他的驱散快。",
        "等驱散冷却听起来精明，但你会因此在最需要治疗的几秒里什么都不做。",
        "换目标不解决问题，被打的还是那个人。"
      ],
      "k": "被驱散不是停手的理由。恢复德的补法比对面的驱散便宜。"
    },
    {
      "id": "g13",
      "t": "general",
      "d": 2,
      "s": "队友<em>身上一个持续治疗都没有</em>，你按了<sk>迅捷治愈</sk>。",
      "a": "这一下亏在哪？",
      "o": [
        "没亏，它本来就是即时治疗",
        "亏掉了「延长持续治疗」那一半效果",
        "法力消耗更高了",
        "冷却变长了"
      ],
      "r": 1,
      "e": [
        "它确实是即时治疗，但那只是它效果的一半。",
        "正解。<b><sk>迅捷治愈</sk>同时会延长目标身上你的持续治疗</b>——身上什么都没有的时候，你只用到了一半。",
        "法力消耗不因目标状态改变。",
        "冷却也不变。"
      ],
      "k": "<sk>迅捷治愈</sk>是「补 + 续」两件事。空场按下去只做成一件。"
    },
    {
      "id": "g14",
      "t": "general",
      "d": 3,
      "s": "这一波你判断要打很久：对面两个近战黏着你的队友，伤害稳定但不致命。",
      "a": "三张大牌里先用哪张？",
      "o": [
        "<sk>宁静</sk>",
        "<sk>化身：生命之树</sk>",
        "<sk>繁盛</sk>",
        "都先不用"
      ],
      "r": 1,
      "e": [
        "<sk>宁静</sk>是一次性的大量治疗，更适合「一波集中伤害」，而且这个局面你未必站得定。",
        "正解。<b><sk>化身：生命之树</sk>强化的是你的常规治疗</b>，持续 30 秒——它对应的正是「这一波要打很久」。",
        "<sk>繁盛</sk>延长场上已有的持续治疗，<b>它永远是最后一张</b>，场上东西越多越值钱。",
        "伤害稳定落下时不用牌，等于把窗口让给对面。"
      ],
      "k": "三张大牌分工不同：化身对应长局，宁静对应一波集中，繁盛永远压轴。"
    },
    {
      "id": "g15",
      "t": "general",
      "d": 2,
      "s": "你刚开完<sk>化身：生命之树</sk>，全队持续治疗都在跳。",
      "a": "<sk>繁盛</sk>这时候按下去合适吗？",
      "o": [
        "合适，场上持续治疗最多的时候它最值钱",
        "不合适，应该留到最后关头",
        "不合适，它和化身冲突",
        "无所谓，什么时候按都一样"
      ],
      "r": 0,
      "e": [
        "正解。<b><sk>繁盛</sk>延长的是「已经在跳的东西」</b>，所以它的价值完全取决于按下去那一刻场上有多少持续治疗。",
        "「留到最后关头」是对冷却类技能的通用直觉，但对这张牌是错的——最后关头场上往往什么都不剩。",
        "两者不冲突，反而是配合关系。",
        "时机对它的影响是所有牌里最大的。"
      ],
      "k": "延长类技能的价值不由血量决定，由「场上还有多少东西可延长」决定。"
    },
    {
      "id": "g16",
      "t": "general",
      "d": 2,
      "s": "一个 DH 一直贴着你，队友在场地另一头。",
      "a": "<sk>乌索尔旋风</sk>放在哪？",
      "o": [
        "放在自己脚下",
        "放在你和他之间的路线上",
        "放在队友身上",
        "留着不放"
      ],
      "r": 1,
      "e": [
        "放脚下只会把自己一起困在减速区里。",
        "正解。<b>它不是控制链的一环，是改写地形</b>——放在追击路线上逼他绕路，第一次想离开还会被拉回中心。",
        "它是对敌人生效的场地效果，放在队友身上没有意义。",
        "留着不放，你就得靠腿硬跑，而 DH 的机动性比你高。"
      ],
      "k": "<sk>乌索尔旋风</sk>是地形工具。它的价值在于「让对面多走几步」，不在于伤害或控制时长。"
    },
    {
      "id": "g17",
      "t": "general",
      "d": 2,
      "s": "两个近战把你围住，位移都在冷却，<sk>自然迅捷</sk>也交了。",
      "a": "还剩哪张牌？",
      "o": [
        "<sk>夺魂咆哮</sk>",
        "<sk>宁静</sk>",
        "<sk>铁木树皮</sk>给自己",
        "<sk>百花齐放</sk>踩在脚下"
      ],
      "r": 0,
      "e": [
        "正解。<b>变熊咆哮，10 码内瘫痪 3 秒</b>，是范围的自解围手段。3 秒不长，但足够换出一次走位。",
        "被两个近战围着读引导，等于送。",
        "减伤不解决「走不掉」这个问题，只是让你死得慢一点。",
        "治疗量补不回被两个人围住的结构劣势。"
      ],
      "k": "恢复德能自己解围的牌只有两张：瞬发<sk>旋风</sk>和<sk>夺魂咆哮</sk>。别同时交掉。"
    },
    {
      "id": "g18",
      "t": "general",
      "d": 3,
      "s": "队友剩 <em>15%</em>，身上没有持续治疗，对面三个人的爆发全开着，你的法力见底。",
      "a": "现在怎么办？",
      "o": [
        "把剩下的法力和大牌全砸上去",
        "放弃这个人，把资源留给下一个窗口",
        "交<sk>激活</sk>再治",
        "读<sk>愈合</sk>赌一次暴击"
      ],
      "r": 1,
      "e": [
        "条件一条都不成立时全砸，等于把最贵的牌喂给对面，下一波你什么都没有。",
        "正解。<b>治疗最难的判断是「什么时候放弃」。</b>四个条件全不成立，这个人救不回来——把资源留给还能救的局面。",
        "<sk>激活</sk>要 8 秒才回完，这几秒对方已经打完了。",
        "把胜负押在一次暴击上，而恢复德的爆击实测接近于零。"
      ],
      "k": "四个条件全不成立时，正确答案往往是不出手。"
    },
    {
      "id": "g19",
      "t": "general",
      "d": 1,
      "s": "你在队友脚下放了<sk>百花齐放</sk>，队友随即被打得往外跑。",
      "a": "会发生什么？",
      "o": [
        "它跟着队友移动",
        "它留在原地，队友走出去就吃不到",
        "它自动消失",
        "治疗量会翻倍"
      ],
      "r": 1,
      "e": [
        "它是固定在地面的，不跟人。",
        "正解。<b><sk>百花齐放</sk>是地面效果</b>——放的位置要考虑接下来几秒人会站在哪，不是现在站在哪。",
        "它按自己的持续时间存在，不因为没人而消失。",
        "没有这种机制。"
      ],
      "k": "地面效果要放在「人接下来会去的地方」，不是「人现在在的地方」。"
    },
    {
      "id": "g20",
      "t": "general",
      "d": 2,
      "s": "唤魔师的沉默印记落在你身上。",
      "a": "这几秒你还剩什么？",
      "o": [
        "什么都没有",
        "已经铺好的持续治疗还在跳",
        "可以照常瞬发治疗",
        "可以照常读条"
      ],
      "r": 1,
      "e": [
        "「什么都没有」对读条治疗成立，但对恢复德不成立。",
        "正解。<b>被沉默时你只剩已经铺好的东西</b>——这是「预付款」最直观的一局：铺过的人活着，没铺过的人死了。",
        "沉默封的是整个法术学派，瞬发也放不出来。",
        "读条同样被封。"
      ],
      "k": "沉默和控制是对恢复德最狠的东西，而唯一的对策发生在它落地之前。"
    },
    {
      "id": "g21",
      "t": "general",
      "d": 1,
      "s": "你想把<sk>生命绽放</sk>同时挂在两个队友身上。",
      "a": "能做到吗？",
      "o": [
        "能，没有限制",
        "不能，同时只能挂一个人",
        "能，但治疗量减半",
        "只有化身期间能"
      ],
      "r": 1,
      "e": [
        "它有明确的目标数限制。",
        "正解。<b><sk>生命绽放</sk>同时只能作用于一个目标</b>，所以「挂在谁身上」本身就是一个判断——通常给最可能被集火的那个。",
        "没有减半机制，是直接换目标。",
        "化身不改变这个限制。"
      ],
      "k": "唯一目标的增益，选择本身就是决策。别随手挂。"
    },
    {
      "id": "g22",
      "t": "general",
      "d": 3,
      "s": "队友死了，对面两个人正在打你的另一个队友，你没被控。",
      "a": "该不该现在<sk>复生</sk>？",
      "o": [
        "该，战斗中能复活是德鲁伊的底牌",
        "不该，读条期间活着的那个可能会死",
        "该，先把人数补回来",
        "不该，战斗中不能复活"
      ],
      "r": 1,
      "e": [
        "是底牌没错，但底牌也要挑时候出。",
        "正解。<b>复活要读条，而读条的这几秒你不治疗</b>。活着的队友正在挨打时复活，很可能换来两个人都倒。",
        "补人数的前提是「补的过程中没人再死」。",
        "德鲁伊的<sk>复生</sk>在战斗中可以施放，这是它的特点。"
      ],
      "k": "战斗中复活的成本不是法力，是「这几秒你不治疗」。"
    },
    {
      "id": "g23",
      "t": "general",
      "d": 2,
      "s": "开局你习惯站在离队友很远的柱子后面，理由是「安全」。",
      "a": "这个习惯的问题在哪？",
      "o": [
        "没问题，治疗就该站远",
        "被开控时队友够不到你，救不了",
        "离得远治疗量会降低",
        "会掉出战斗"
      ],
      "r": 1,
      "e": [
        "站远确实降低被贴脸的概率，但它同时降低了另一件事的概率。",
        "正解。<b>被开控制链时，能解你的是队友</b>——离得太远，你就是一个人在扛整条链。距离要在「不被贴脸」和「队友够得到」之间找。",
        "治疗量不随距离衰减，只有射程限制。",
        "不会。"
      ],
      "k": "治疗的站位是两个风险之间的平衡，不是单方面躲得越远越好。"
    },
    {
      "id": "g24",
      "t": "general",
      "d": 2,
      "s": "你带着 <b>Forest Guardian</b>（PvP 天赋）。",
      "a": "它奖励的是什么行为？",
      "o": [
        "多治疗",
        "在治疗间隙打伤害/用连击技能",
        "多用控制",
        "多跑位"
      ],
      "r": 1,
      "e": [
        "它不直接提高治疗量。",
        "正解。<b>伤害与连击类技能会延长你身上生效的持续治疗</b>——它把「有空的时候打两下」变成了一个治疗动作。又是一条奖励「提前铺」的线。",
        "控制不触发它。",
        "跑位不触发它。"
      ],
      "k": "恢复德的三格 PvP 天赋有两格在强化「持续治疗铺得久」。这不是巧合。"
    },
    {
      "id": "g25",
      "t": "general",
      "d": 3,
      "s": "带上 <b>Call of Ohn'ahra</b> 之后，<sk>自然迅捷</sk>的冷却延长了 10 秒。",
      "a": "这个代价意味着什么？",
      "o": [
        "没什么，反正它冷却本来就短",
        "你少了一次「瞬发大治疗」的机会",
        "治疗量会下降",
        "<sk>旋风</sk>也会变长冷却"
      ],
      "r": 1,
      "e": [
        "冷却延长 10 秒对一张分钟级的牌不是小数目。",
        "正解。<b><sk>自然迅捷</sk>原本是「保证放出一次治疗」的牌</b>，现在它多了控制用途，但总次数变少了——<b>每次按下去之前要想清楚这一次买的是治疗还是控制</b>。",
        "它不影响治疗量，只影响可用次数。",
        "<sk>旋风</sk>自身的冷却不变。"
      ],
      "k": "一张牌多了一种用途，不等于多了一次使用机会。多用途牌的真正成本是选择成本。"
    },
    {
      "id": "warrior1",
      "t": "warrior",
      "d": 2,
      "s": "战士对着你放了<sk>破胆怒吼</sk>，你被恐惧跑开，队友同时开始掉血。",
      "a": "恐惧结束的第一件事做什么？",
      "o": [
        "马上读一个<sk>愈合</sk>",
        "看队友身上持续治疗还剩多少，先补上",
        "追着战士打",
        "先给自己套<sk>铁木树皮</sk>"
      ],
      "r": 1,
      "e": [
        "读条治疗慢，而且战士很可能就在你旁边。",
        "正解。<b>恐惧期间你的持续治疗还在跳，但没有新的铺上去。</b>解开的第一件事是把断掉的那几层补回来，而不是追单次治疗量。",
        "恢复德打不动战士。",
        "减伤给自己是防守动作，但当下掉血的是队友。"
      ],
      "k": "被控解开之后先补「断掉的铺设」，不是补血条。"
    },
    {
      "id": "warrior2",
      "t": "warrior",
      "d": 3,
      "s": "战士整局都咬着你不放，你的队友几乎没受伤。",
      "a": "这局面对你意味着什么？",
      "o": [
        "很好，队友安全",
        "很危险，他的目标本来就是让你放不出治疗",
        "无所谓，各打各的",
        "应该让队友来帮你打战士"
      ],
      "r": 1,
      "e": [
        "队友暂时安全只是表象——<b>压制治疗的收益会在几十秒后一次性兑现</b>。",
        "正解。<b>战士不一定要杀你，他只要让你一直在跑、一直被打断。</b>等你法力和位移都耗完，他的队友再起爆发，你已经没有东西可以接。",
        "「各打各的」正是对面想要的分配。",
        "让队友转火战士通常是错的——那正好把输出从对面治疗身上挪开。"
      ],
      "k": "压制治疗是一种慢性伤害。它的账不在当下的血条上。"
    },
    {
      "id": "paladin1",
      "t": "paladin",
      "d": 2,
      "s": "惩戒骑亮起爆发，冲向你的队友。你现在才开始铺<sk>回春术</sk>。",
      "a": "问题在哪？",
      "o": [
        "没问题，反应及时",
        "已经晚了——他的爆发窗口比你的持续治疗跳完更快",
        "应该先打断他",
        "应该直接开<sk>宁静</sk>"
      ],
      "r": 1,
      "e": [
        "「反应及时」是对治疗最常见的误解。<b>恢复德的治疗有延迟，反应型操作天然慢一拍。</b>",
        "正解。<b>惩戒骑的伤害是「一波一波」的，判断点在那一波来之前。</b>他抬手你再铺，前几跳追不回来。",
        "打断能减一点伤害，但没解决「你总是慢一拍」这个结构问题。",
        "大牌开在空场上，加成落在空气里。"
      ],
      "k": "对爆发型职业，你的动作要发生在他的动作之前。"
    },
    {
      "id": "paladin2",
      "t": "paladin",
      "d": 2,
      "s": "你的队友被打到很低，圣骑士给他套了<sk>保护祝福</sk>那一类的免疫。",
      "a": "这几秒你该做什么？",
      "o": [
        "继续拼命治他",
        "趁这几秒去补别人、回法力、重新铺",
        "立刻开大牌",
        "什么都不做"
      ],
      "r": 1,
      "e": [
        "免疫期间他不掉血，治他是纯溢出。",
        "正解。<b>对面给的免疫，等于免费送了你几秒。</b>用这几秒把另一个人的持续治疗补上、把法力节奏调回来。",
        "大牌开在没人掉血的时候是最浪费的用法。",
        "「什么都不做」浪费了一个便宜的准备窗口。"
      ],
      "k": "对面交出的每一张免疫或减伤，都是给你的一段免费时间。"
    },
    {
      "id": "hunter1",
      "t": "hunter",
      "d": 2,
      "s": "猎人在你脚下放了冰冻陷阱，你被关住。",
      "a": "这几秒最大的损失是什么？",
      "o": [
        "血量",
        "没有新的持续治疗铺上去",
        "法力",
        "位置"
      ],
      "r": 1,
      "e": [
        "你被关住时通常不掉血。",
        "正解。<b>控制对恢复德的伤害不是血量，是「铺设的连续性断了」。</b>已经在跳的还在跳，但新的补不上——解开之后你要花好几个动作追回来。",
        "被关期间不消耗法力。",
        "位置的损失是次要的，你解开之后还能跑。"
      ],
      "k": "控制打断的是你的铺设节奏，不是你的血条。"
    },
    {
      "id": "hunter2",
      "t": "hunter",
      "d": 3,
      "s": "猎人一直绕到柱子另一侧射击，你看不到自己的队友。",
      "a": "这是什么战术？",
      "o": [
        "他在躲你的控制",
        "他在制造「你看不见队友」的角度，让你放不出治疗",
        "他在等宠物冷却",
        "他在回血"
      ],
      "r": 1,
      "e": [
        "躲控制会顺带发生，但不是主要目的。",
        "正解。<b>治疗需要视线。</b>远程职业不需要贴你，只要站在一个你和队友之间有遮挡的角度，你就等于被沉默了。",
        "宠物冷却跟站位无关。",
        "他没有在回血。"
      ],
      "k": "视线是治疗的隐形资源。丢了视线，跟被沉默是一回事。"
    },
    {
      "id": "rogue1",
      "t": "rogue",
      "d": 3,
      "s": "场上有贼，但他已经很久没露面，你的队友血量健康。",
      "a": "这时候该做什么？",
      "o": [
        "正常打，等他出现再反应",
        "提前把持续治疗铺满，并留好自解围的牌",
        "去搜他",
        "开大牌预防"
      ],
      "r": 1,
      "e": [
        "等他出现再反应就是他要的——<b>他的控制链不给你出手机会。</b>",
        "正解。<b>贼没露面本身就是信号。</b>控制链落地之后你只能看着，所以判断必须发生在它之前：持续治疗铺满，<sk>夺魂咆哮</sk>或瞬发<sk>旋风</sk>留在手上。",
        "恢复德去搜人等于主动脱离队友。",
        "开大牌不能预防控制，只是提前浪费。"
      ],
      "k": "隐身职业没露面的时间，就是你该用来做准备的时间。"
    },
    {
      "id": "rogue2",
      "t": "rogue",
      "d": 2,
      "s": "贼的控制链跳完了，你终于能动。队友掉到 <em>40%</em>。",
      "a": "第一个动作？",
      "o": [
        "<sk>迅捷治愈</sk>",
        "先补一层<sk>回春术</sk>",
        "读<sk>愈合</sk>",
        "跑开"
      ],
      "r": 0,
      "e": [
        "正解。<b>链子期间你的持续治疗一直在跳，所以目标身上大概率还有货</b>——这正是<sk>迅捷治愈</sk>效果最满的时候，而且它是瞬发的。",
        "铺一层是对的方向，但控制刚解开的这一秒你更需要即时量，而且身上已经有东西了。",
        "读条治疗在贼还在场时风险太高。",
        "跑开会让队友继续独自挨打。"
      ],
      "k": "控制解开的第一秒选瞬发且效果最满的那一个。判断依据是目标身上有没有货。"
    },
    {
      "id": "priest1",
      "t": "priest",
      "d": 2,
      "s": "暗牧一直在驱散你的持续治疗，你的队友血量在缓慢下滑。",
      "a": "该怎么调整？",
      "o": [
        "改用直接治疗",
        "铺更多层，让他一次只能驱一个",
        "停手等他驱散冷却",
        "换目标"
      ],
      "r": 1,
      "e": [
        "直接治疗是恢复德最弱的一环，被逼着改打法正中对方下怀。",
        "正解。<b>用数量对抗驱散。</b>你的补法比他的驱散便宜，多层持续治疗让驱散的边际收益越来越低。",
        "停手期间对面的伤害不会停。",
        "换目标不解决问题，挨打的还是同一个人。"
      ],
      "k": "面对驱散，比的是补设成本和驱散成本谁更低。恢复德在这一项上占优。"
    },
    {
      "id": "priest2",
      "t": "priest",
      "d": 3,
      "s": "对面是暗牧，这局已经打了三分钟，双方都没人死。",
      "a": "你现在最该盯的是什么？",
      "o": [
        "自己的血条",
        "自己的法力条",
        "对面的爆发冷却",
        "场地位置"
      ],
      "r": 1,
      "e": [
        "血条重要，但暗牧局的伤害是缓慢的，血条不是先见底的东西。",
        "正解。<b>这是一场耗局，先见底的是法力。</b>满血挂持续治疗、无谓的溢出，在三分钟的尺度上会直接决定胜负。",
        "暗牧没有明确的一次性爆发窗口，盯它收益有限。",
        "位置在耗局里不是主要变量。"
      ],
      "k": "长局的胜负手是资源效率。判断该不该补，看的是「不补他会不会进危险区」。"
    },
    {
      "id": "dk1",
      "t": "dk",
      "d": 2,
      "s": "你刚拉开距离，DK 一个<sk>死亡之握</sk>把你拽了回去。",
      "a": "教训是什么？",
      "o": [
        "不该跑",
        "跑之前要看他的拉人技能在不在冷却",
        "应该切熊形态",
        "应该先交<sk>铁木树皮</sk>"
      ],
      "r": 1,
      "e": [
        "跑是对的，恢复德的活法就是距离。",
        "正解。<b>位移是有限资源，被拉回来等于白交一次。</b>先确认对面的拉人手段在冷却里，再动腿。",
        "熊形态不能免疫拉扯。",
        "减伤不解决位置问题。"
      ],
      "k": "恢复德的位移不是随手交的。交之前先确认它不会被一个技能作废。"
    },
    {
      "id": "dk2",
      "t": "dk",
      "d": 2,
      "s": "DK 开着<sk>反魔法护罩</sk>冲过来，你想控住他。",
      "a": "现在交<sk>旋风</sk>合适吗？",
      "o": [
        "合适，越早控越好",
        "不合适，护罩会挡掉它，等它掉",
        "合适，但要配<sk>自然迅捷</sk>",
        "不合适，应该改控他队友"
      ],
      "r": 1,
      "e": [
        "「越早越好」在有免疫牌的对手面前是最贵的直觉。",
        "正解。<b>护罩期间你的控制会被吃掉</b>，而<sk>旋风</sk>带 Call of Ohn'ahra 之后冷却更长——交空一次代价很大。",
        "配<sk>自然迅捷</sk>只是让它更快落地，一样被挡。",
        "改控队友有时可行，但这题的重点是「不要往免疫上撞」。"
      ],
      "k": "对面有魔免类牌时，控制的第一判据是「它现在能不能生效」，不是「我够不够得到」。"
    },
    {
      "id": "shaman1",
      "t": "shaman",
      "d": 2,
      "s": "增强萨在你脚下扔了地缚图腾，你正想切<sk>猎豹形态</sk>跑。",
      "a": "该怎么办？",
      "o": [
        "照跑，速度加成能顶过去",
        "先处理掉图腾，或者换个方向走出范围",
        "原地读<sk>愈合</sk>",
        "切熊形态硬扛"
      ],
      "r": 1,
      "e": [
        "被黏住的德鲁伊等于没腿，速度加成解决不了根定。",
        "正解。<b>图腾在改写场地规则</b>——恢复德的抗压建立在能移动上，所以「踩图腾」或者绕出范围是优先级最高的动作。",
        "被贴脸读条会被打断。",
        "硬扛把选择权交给对面。"
      ],
      "k": "恢复德对付图腾类效果，处理场地优先于处理血条。"
    },
    {
      "id": "shaman2",
      "t": "shaman",
      "d": 2,
      "s": "增强萨开了爆发，伤害突然变高。",
      "a": "最合理的应对是？",
      "o": [
        "开<sk>宁静</sk>硬拼治疗量",
        "用<sk>铁木树皮</sk>加持续治疗顶过这一轮",
        "立刻放弃这个队友",
        "转火萨满"
      ],
      "r": 1,
      "e": [
        "被贴脸时读<sk>宁静</sk>风险很高，而且这一轮不一定需要它。",
        "正解。<b>增强萨的爆发窗口明确且有限</b>——顶过那一轮，你的持续治疗回得比他掉得快。减伤压在正在挨打的人身上是最省的解法。",
        "爆发窗口是可以扛过去的，放弃太早。",
        "恢复德的输出转火不产生实质压力。"
      ],
      "k": "对「窗口型」爆发，正确姿态是顶过去，不是拼治疗量。"
    },
    {
      "id": "mage1",
      "t": "mage",
      "d": 3,
      "s": "法师同时控住了你和你的一个队友，另一个队友血量健康。",
      "a": "这套操作最可怕的地方在哪？",
      "o": [
        "伤害高",
        "他把场上分割成了几块，你的治疗覆盖不到",
        "他能打断你",
        "他能偷你的增益"
      ],
      "r": 1,
      "e": [
        "单看伤害，法师未必最高。",
        "正解。<b>法师的强项是同时处理多个目标的行动力</b>——你被控、队友被控，剩下的那个人独自面对全部输出。治疗的覆盖范围被拆掉了。",
        "打断只是其中一环。",
        "偷增益不是这套操作的核心。"
      ],
      "k": "控制型对手真正拿走的是你的「覆盖能力」，不只是你的几秒钟。"
    },
    {
      "id": "mage2",
      "t": "mage",
      "d": 2,
      "s": "法师交了<sk>寒冰屏障</sk>，你手上有瞬发<sk>旋风</sk>。",
      "a": "现在控他合适吗？",
      "o": [
        "合适，控住就赚",
        "不合适，等屏障掉再控",
        "合适，先消耗他的解控",
        "不合适，应该去控他队友"
      ],
      "r": 1,
      "e": [
        "往免疫上撞不叫赚。",
        "正解。<b>屏障期间你的控制和输出全部落空</b>，而带 Call of Ohn'ahra 的<sk>旋风</sk>冷却很长，空一次的代价很大。",
        "免疫不消耗解控，这个想法不成立。",
        "控他队友有时可行，但这题考的是「不要往免疫上撞」。"
      ],
      "k": "控制的第一判据永远是「它现在能不能生效」。"
    },
    {
      "id": "warlock1",
      "t": "warlock",
      "d": 2,
      "s": "术士的多个持续伤害叠满在你队友身上，血量稳定下滑但不致命。",
      "a": "正确的治疗方式是？",
      "o": [
        "用大治疗一次拉满",
        "用持续治疗对冲持续伤害",
        "等血低了再一次性补",
        "开大牌"
      ],
      "r": 1,
      "e": [
        "大治疗又贵又慢，正好是术士想要的法力消耗。",
        "正解。<b>用持续对抗持续</b>——两边都是慢速的，谁的资源效率高谁赢。",
        "等血低了再补会把自己逼进危险区，而且恐惧随时可能来。",
        "大牌用在没有集中爆发的场面上是浪费。"
      ],
      "k": "伤害的形态决定治疗的形态。持续伤害要用持续治疗接。"
    },
    {
      "id": "warlock2",
      "t": "warlock",
      "d": 2,
      "s": "你被恐惧了，队友身上持续治疗还在跳。",
      "a": "这几秒的损失有多大？",
      "o": [
        "很大，队友会立刻死",
        "有限，已经铺好的还在跳，但新的补不上",
        "没有损失",
        "取决于血量"
      ],
      "r": 1,
      "e": [
        "已经铺好的治疗不会因为你被控而停止。",
        "正解。<b>这正是「预付款」的价值</b>——被控期间恢复德不是完全空白，铺过的东西还在工作。损失的是这段时间没有新的铺上去。",
        "损失是真实的，只是没有想象中致命。",
        "血量影响后果严重性，但这题问的是机制。"
      ],
      "k": "提前铺的治疗是唯一能在你被控时继续工作的东西。"
    },
    {
      "id": "monk1",
      "t": "monk",
      "d": 2,
      "s": "踏风武僧在你身上，你想拉开距离。",
      "a": "为什么效果有限？",
      "o": [
        "他有减速",
        "他的机动性和你相当甚至更高",
        "他能定身你",
        "他跑得比你快"
      ],
      "r": 1,
      "e": [
        "减速只是其中一部分。",
        "正解。<b>对机动性高的对手，拉距离基本无效</b>——正确的做法是用<sk>乌索尔旋风</sk>和<sk>夺魂咆哮</sk>换空间，而不是比谁腿快。",
        "定身有，但不是主要原因。",
        "单比速度不是重点，重点是他的位移手段多。"
      ],
      "k": "拉距离对慢的对手有效。对快的对手，要换成「改写地形」和「打断节奏」。"
    },
    {
      "id": "monk2",
      "t": "monk",
      "d": 3,
      "s": "武僧还没用<sk>气定神闲</sk>，你手上有瞬发<sk>旋风</sk>。",
      "a": "该现在控他吗？",
      "o": [
        "该，先手控住",
        "先不控，等他把解控用掉",
        "该，配合队友一起控",
        "不该，改控别人"
      ],
      "r": 1,
      "e": [
        "先手控住看起来占先，但会被立刻解掉。",
        "正解。<b>控制在有解控的对手身上要挑时机</b>——尤其是<sk>旋风</sk>这种冷却很长的牌，被解一次等于这一局少一张。",
        "一起控也一样会被解。",
        "改控别人是可行的备选，但这题的重点是「等解控用掉」。"
      ],
      "k": "长冷却的控制要等对面解控交完再用。这跟「不要往免疫上撞」是同一条。"
    },
    {
      "id": "druid1",
      "t": "druid",
      "d": 3,
      "s": "镜像局：对面也是恢复德，双方队友都健康，已经打了两分钟。",
      "a": "你的优势应该来自哪里？",
      "o": [
        "治疗量",
        "法力效率和先手控制",
        "爆发治疗",
        "走位"
      ],
      "r": 1,
      "e": [
        "两个恢复德的治疗量上限接近，拼这个拼不出结果。",
        "正解。<b>镜像局是耗局</b>——谁的溢出少、谁先控住对方的关键动作，谁就先撕开口子。",
        "双方大牌对等，爆发治疗互相抵消。",
        "走位重要，但它是手段不是胜负点。"
      ],
      "k": "镜像局比的是资源效率和先手，不是同一套技能谁按得更快。"
    },
    {
      "id": "druid2",
      "t": "druid",
      "d": 2,
      "s": "对面恢复德把<sk>旋风</sk>丢在你的输出队友身上。",
      "a": "这一下拿走了什么？",
      "o": [
        "那个队友的血量",
        "那个队友接下来几秒的全部行动",
        "你的治疗量",
        "场地控制"
      ],
      "r": 1,
      "e": [
        "<sk>旋风</sk>不造成伤害。",
        "正解。<b>它把一个人从这一局里整个拿走几秒</b>——期间他不能被打也不能出手。对面用它换的是节奏，不是伤害。",
        "你的治疗不受直接影响。",
        "它是单体效果，不改写场地。"
      ],
      "k": "把人「移出战斗」的效果，价值不在伤害上，在于它改变了双方的人数对比。"
    },
    {
      "id": "dh1",
      "t": "dh",
      "d": 2,
      "s": "DH 在你脚下放了咒符，你看到它落地。",
      "a": "该做什么？",
      "o": [
        "原地继续治疗",
        "立刻走出范围，它有延迟才生效",
        "交<sk>铁木树皮</sk>",
        "切熊形态"
      ],
      "r": 1,
      "e": [
        "站着不动就是等它生效。",
        "正解。<b>咒符落地后有延迟才激活</b>——这是 DH 全套动作里唯一能被预判的窗口，看到就走。",
        "减伤挡不住控制类效果。",
        "熊形态不免疫。"
      ],
      "k": "有前摇的技能是对手主动给你的判断窗口。看到就要动。"
    },
    {
      "id": "dh2",
      "t": "dh",
      "d": 3,
      "s": "DH 一直贴着你，你的位移和自解围牌都还在。",
      "a": "往哪个方向跑更有效？",
      "o": [
        "往队友反方向的远处",
        "往他身后绕",
        "往场地中央",
        "原地不动"
      ],
      "r": 1,
      "e": [
        "往远处直线跑，正好被他的前向位移追上，而且脱离了队友的支援。",
        "正解。<b>他的位移大多是「向前」的</b>——往他身后绕，他的冲刺类技能就用不上，比拼直线速度有效得多。",
        "场地中央通常最没有掩体，对恢复德最不利。",
        "站着不动等于放弃恢复德唯一的抗压方式。"
      ],
      "k": "对付以前向位移为主的对手，绕到他背后比拉直线距离有效。"
    },
    {
      "id": "evoker1",
      "t": "evoker",
      "d": 2,
      "s": "唤魔师开始蓄力一个大伤害技能，你的队友身上持续治疗只剩一层。",
      "a": "蓄力这几秒你该做什么？",
      "o": [
        "等它落地再补",
        "趁蓄力把持续治疗铺回去",
        "打断他",
        "开大牌"
      ],
      "r": 1,
      "e": [
        "等落地再补，就是「慢一整个循环」那个老问题。",
        "正解。<b>蓄力的前摇是对手送给你的准备时间</b>，这一局是「预付款」最直观的示范：铺回去，伤害落地时你才接得住。",
        "打断有价值，但如果打断不了或已经交掉，铺设仍然是必做的。",
        "为一次可预期的伤害开大牌太贵，而且场上货不够。"
      ],
      "k": "对手的每一段前摇，都是你的铺设时间。"
    },
    {
      "id": "evoker2",
      "t": "evoker",
      "d": 2,
      "s": "你刚被沉默，队友开始掉血。",
      "a": "这段时间队友的生存靠什么？",
      "o": [
        "靠你的瞬发治疗",
        "靠你之前铺好的持续治疗",
        "靠他自己的减伤",
        "靠运气"
      ],
      "r": 1,
      "e": [
        "沉默封的是整个法术学派，瞬发也放不出来。",
        "正解。<b>被沉默时你只剩已经铺好的东西</b>——这一局的胜负在沉默落地之前就决定了。",
        "自身减伤能帮忙，但那不是治疗的部分，题问的是「你留下了什么」。",
        "把结果交给运气，说明准备阶段做得不够。"
      ],
      "k": "你能在失去行动力时仍然工作的东西，只有事先铺好的那些。"
    }
  ]
};
