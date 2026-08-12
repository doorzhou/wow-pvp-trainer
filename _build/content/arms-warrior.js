/* ============================================================
   武器战士 · 12.0.7 Midnight 赛季一
   ------------------------------------------------------------
   当前状态：数据层已完成（天赋树 / 属性 / PvP 天赋分布，全部实测），
   骨架只写实测数据能支撑的部分；对阵与题库待补充。
   ============================================================ */
module.exports = {

  meta: {
    title: '武器战士 PvP 判断训练器 · 魔兽世界 12.0.7 Midnight 赛季一',
    desc: '魔兽世界正式服 12.0.7 武器战士 PvP 竞技场判断训练。含天赋树热力图、属性优先级与 PvP 天赋实测分布，数据取自四大区 top50。',
    keywords: '武器战士,战士,PVP,竞技场,魔兽世界,12.0.7,Midnight,arms warrior,arena',
    footer: 'Patch 12.0.7 · Midnight 赛季一。图标与中文技能名来自 <a href="https://www.wowhead.com" target="_blank">Wowhead</a> 官方数据接口（逐个回验）。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',
    jsonld: null,
  },

  nav: [
    { s: 's1', label: '骨架' },
    { s: 's2', label: '通用手法' },
    { s: 's3', label: '分职业' },
    { s: 's4', label: '判断训练' },
    { s: 's5', label: '赛前速查' },
  ],

  sections: {
    s1: `<div class="wrap">
<div class="thesis">
  <div class="lbl">实测数据先给一个坐标</div>
  <div class="big"><sk>致死打击</sk>自带 <b>50% 减疗</b>，top50 里 <b>49 人</b>再带一层<sk>打磨利刃</sk>。<br>这个专精在队里的活，是让对面的治疗算不过账。</div>
</div>
<h2>三格 PvP 天赋，四个候选</h2>
<p class="lead">50 人 × 3 格 = 150 个选择，下面五项的实测总和正好 150。</p>
<div class="rows" id="pvptal"></div>
<h2>英雄天赋：这个专精唯一真正对半的一格</h2>
<div class="rows" id="heroline"></div>
<h2>该不该开？勾一下就知道</h2>
<p class="lead">四条都从技能效果推得出来，不是感觉。</p>
<div class="gobox">
  <div class="gh">开场决策器</div>
  <div class="gt">现在的局面满足哪几条？</div>
  <div class="checks" id="checks"></div>
  <div class="verdict" id="verdict"></div>
</div>
<h2>三个时钟</h2>
<p class="lead">武器战士的节奏全挂在这三个数字上。</p>
<div class="rows" id="clocks"></div>
</div>`,
    s2: `<div class="wrap">
<h2>一轮交战的完整流程</h2>
<p class="lead">点着走一遍。</p>
<div class="rows" id="general"></div>
</div>`,
    s3: `<div class="wrap">
<h2>13 职业 · 对局四问</h2>
<p class="lead">只写机制：他有哪些牌、你怎么接。数值与强弱评级每个补丁都在动，这里不写。</p>
<div class="clsgrid" id="clsGrid"></div>
<div id="clsDetail"></div>
</div>`,
    s4: `<div class="wrap">
<h2>判断训练</h2>
<div class="todo"><span class="tag">待补充</span><span class="tx">情境判断题</span></div>
</div>`,
    s5: `<div class="wrap">
<h2>赛前速查</h2>
<div id="sheet"></div>
<h2>开赛前先问自己三句</h2>
<div class="rows">
  <div class="row"><div class="h" onclick="tg(this)"><span class="t">对面谁有免疫牌？</span><span class="sub">决定撕裂投掷留给谁</span><span class="ar">▸</span></div><div class="b"><p>圣盾术、<sk>寒冰屏障</sk>、<sk>暗影斗篷</sk>——撕裂投掷 3 分钟冷却，一局大概只有一次机会用对。<b>开打前就该定好它是留给谁的。</b></p></div></div>
  <div class="row"><div class="h" onclick="tg(this)"><span class="t">对面伤害来自武器还是法术？</span><span class="sub">决定 PvP 天赋第三格</span><span class="ar">▸</span></div><div class="b"><p><sk>缴械</sk>（top50 里 31 人带）对物理阵容有用，对法系阵容几乎是空的。<b>这一格是看阵容换的，不是固定的。</b></p></div></div>
  <div class="row"><div class="h" onclick="tg(this)"><span class="t">谁会先进 35%？</span><span class="sub">决定你的处决节奏</span><span class="ar">▸</span></div><div class="b"><p>点了 Massacre 的话斩杀线是 35%。<b>提前算好哪个目标会先进线</b>，比进线之后再切目标快一整个窗口。</p></div></div>
</div>
</div>`,
  },

  fragments: {
    // 实测分布，构建期注入 s1 的两个容器
    pvptal: '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>打磨利刃</sk>　49/50</span><span class="sub">98%，最接近必带</span><span class="ar">▸</span></div><div class="b"><p><sk>巨人打击</sk>之后的下一次<sk>致死打击</sk>伤害 +15%，并额外压一层 50% 减疗。</p><p style="margin-top:8px"><sk>致死打击</sk>本身已经带 50% 减疗（10 秒），所以<b>这一格买的不是「有没有减疗」，是「减疗能不能一直盖着」</b>——把两段接起来，对面治疗就没有喘息的空档。98% 的使用率说明这件事没有讨论余地。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>捍卫</sk>　34/50</span><span class="sub">68%</span><span class="ar">▸</span></div><div class="b"><p>给队友的减伤。<b>队友是被集火的那个时才值</b>；你自己被打的局，这一格是空的。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>缴械</sk>　31/50</span><span class="sub">62%</span><span class="ar">▸</span></div><div class="b"><p>对面伤害来自武器时才有意义。<b>看阵容定</b>——法系为主的对面，这一格几乎不动。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><b>Berserker Roar</b>　29/50</span><span class="sub">58%</span><span class="ar">▸</span></div><div class="b"><p>与上面两格争剩下的位置。<span class="dimtx">暂无官方简体中文名，使用英文原名。</span></p></div></div>',
    heroline: '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><b>Slayer</b>　29/50　vs　<b>Colossus</b>　21/50</span><span class="sub">58% / 42% —— 没有正确答案</span><span class="ar">▸</span></div><div class="b"><p>前面四个已上线的专精，英雄天赋都是一边倒（50/0、46/4、45/5）——那种情况下没什么好想的，跟着点就行。</p><p style="margin-top:8px"><b>武器战士是唯一一个真正对半分的。</b>58 比 42 意味着 top50 内部也没有共识，这一格得你自己按打法定。</p><div class="note" style="margin-top:10px">两条线各自的取舍待补充——需要实测支撑，不做无根据的推荐。</div></div></div>',
    clocks: '<div class="row"><div class="h" onclick="tg(this)"><span class="t">45 秒 · <sk>巨人打击</sk></span><span class="sub">你的窗口多久来一次</span><span class="ar">▸</span></div><div class="b"><p>35% 增伤、持续 10 秒。<b>这 10 秒是你一局里唯一真正能打死人的时间</b>，其余 35 秒都是在为它做准备：补减疗、拆牌、卡位置。</p><p style="margin-top:8px">Anger Management 会随怒气消耗缩短它的冷却——<b>所以「空转不打」不只是少了伤害，还推迟了下一个窗口</b>。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t">10 秒 · <sk>致死打击</sk>的减疗</span><span class="sub">对面治疗什么时候能喘气</span><span class="ar">▸</span></div><div class="b"><p>50% 减疗，10 秒。<sk>致死打击</sk>本身 6 秒冷却，所以<b>理论上可以永远盖着</b>——盖不住只有两个原因：你被拉开了，或者你把 GCD 花在别的地方了。</p><p style="margin-top:8px"><b>减疗断掉的那几秒，是对面治疗把这一轮全补回来的窗口。</b>比起多打一发伤害，先续上减疗几乎总是对的。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t">35% · 处决线</span><span class="sub">什么时候切换成收人模式</span><span class="ar">▸</span></div><div class="b"><p>点了 Massacre 之后，斩杀类技能的可用血线从 20% 提到 <b>35%</b>。</p><p style="margin-top:8px">这条线值得单独当一个时钟看：<b>目标一进 35%，你的伤害结构就变了</b>——从「攒窗口」变成「不停斩杀」。提前算好谁会先进线，比进线之后再反应快得多。</p></div></div>',
    setup: '',
    general: '<div class="row"><div class="h" onclick="tg(this)"><span class="t">01 · 一轮交战的完整流程</span><span class="sub">点着走一遍</span><span class="ar">▸</span></div><div class="b"><div class="stepper" id="stepBody"></div></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t">02 · 打断与控制怎么排</span><span class="sub">手上有四张，别一起交</span><span class="ar">▸</span></div><div class="b"><p><sk>拳击</sk>是打断，<b>不算控制</b>——它不进递减，可以反复用。看到治疗抬手就打，不用省。</p><p style="margin-top:8px"><sk>风暴之锤</sk> 4 秒昏迷 · <sk>震荡波</sk> 2 秒锥形昏迷 · <sk>破胆怒吼</sk> 恐惧。<b>这三张进递减，而且是你唯一的硬控来源</b>——开场全交出去，后面治疗抬手你就只能看着。</p><div class="note" style="margin-top:10px">通用排法：<b>拳击处理施法，硬控留给「治疗必须交大」的那一刻</b>。具体到每个对手的排法待补充。</div></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t">03 · 被压着打的时候</span><span class="sub">武器不是纸，但也不是坦克</span><span class="ar">▸</span></div><div class="b"><p><sk>剑在人在</sk> 30% 减伤 + 100% 招架率，8 秒 · <sk>防御姿态</sk> 15% 减伤（代价是自己伤害 −10%）· <sk>法术反射</sk> 反弹第一个法术并减 20% 魔法伤害 · <sk>集结呐喊</sk> 全队 +12% 生命。</p><p style="margin-top:8px"><b><sk>防御姿态</sk>是可以常开的</b>——不在你的窗口里的时候，那 10% 伤害本来也打不死人。很多人只在快死时才想起它。</p></div></div>',
    sheet: '<div class="sc wide"><h4>三条铁律</h4><div class="big3">'
      + '<div class="b3"><div class="n">1</div><div><div class="tt">先种减疗，再谈伤害</div><div class="dd"><sk>致死打击</sk>的 50% 减疗是所有输出的前提。断了就等于白打。</div></div></div>'
      + '<div class="b3"><div class="n">2</div><div><div class="tt">窗口外不硬拼</div><div class="dd">没有<sk>巨人打击</sk>的 35% 增伤，你的数字对面治疗补得回来。窗口外的活是拆牌和卡位。</div></div></div>'
      + '<div class="b3"><div class="n">3</div><div><div class="tt">硬控留给治疗抬手那一刻</div><div class="dd"><sk>拳击</sk>不进递减，随便用；<sk>风暴之锤</sk>和<sk>震荡波</sk>只有那么几次。</div></div></div>'
      + '</div></div>',
  },

  sk: {
    '致死打击': 'ability_warrior_savageblow',
    '巨人打击': 'inv_warbreaker',
    '压制': 'ability_meleedamage',
    '斩杀': 'inv_sword_48',
    '猛击': 'ability_warrior_decisivestrike',
    '旋风斩': 'ability_whirlwind',
    '剑刃风暴': 'ability_warrior_bladestorm',
    '灭战者': 'inv_warbreaker',
    '横扫攻击': 'ability_rogue_slicedice',
    '剑在人在': 'ability_warrior_challange',
    '防御姿态': 'ability_warrior_defensivestance',
    '集结呐喊': 'ability_warrior_rallyingcry',
    '无视苦痛': 'ability_warrior_renewedvigor',
    '法术反射': 'ability_warrior_shieldreflection',
    '风暴之锤': 'warrior_talent_icon_stormbolt',
    '震荡波': 'ability_warrior_shockwave',
    '破胆怒吼': 'ability_golemthunderclap',
    '拳击': 'inv_gauntlets_04',
    '冲锋': 'ability_warrior_charge',
    '英勇飞跃': 'ability_heroicleap',
    '援护': 'ability_warrior_victoryrush',
    '断筋': 'ability_shockwave',
    '乘胜追击': 'ability_warrior_devastate',
    '狂暴之怒': 'spell_nature_ancestralguardian',
    '天神下凡': 'warrior_talent_icon_avatar',
    '雷霆一击': 'spell_nature_thunderclap',
    '刺耳怒吼': 'spell_shadow_deathscream',
    '缴械': 'ability_warrior_disarm',
    '打磨利刃': 'spell_warrior_sharpenblade',
    '捍卫': 'ability_warrior_safeguard',
    '崩摧': 'inv_ability_colossuswarrior_demolish',
    '雷鸣之吼': 'ability_warrior_dragonroar',
    '勇士之矛': 'inv_ability_warrior_championsspear',

    /* 对阵里引用到的其他职业技能，图标取自 skdb */
    '业报之触': 'ability_monk_touchofkarma',
    '保护祝福': 'spell_holy_sealofprotection',
    '假死': 'ability_rogue_feigndeath',
    '冰封之韧': 'spell_deathknight_iceboundfortitude',
    '冰霜之环': 'spell_frost_ring-of-frost',
    '冰风暴': 'ability_deathknight_chillstreak',
    '反魔法护罩': 'spell_shadow_antimagicshell',
    '变形术': 'spell_nature_polymorph',
    '圣盾术': 'spell_holy_divineshield',
    '寒冰屏障': 'spell_frost_frost',
    '寒冰护体': 'spell_ice_lament',
    '心灵尖啸': 'spell_shadow_psychicscream',
    '恐惧': 'spell_shadow_possession',
    '恶魔变形': 'ability_demonhunter_metamorphasistank',
    '悬空': 'ability_evoker_hover',
    '旅行形态': 'ability_druid_travelform',
    '星界转移': 'ability_shaman_astralshift',
    '暗影斗篷': 'spell_shadow_nethercloak',
    '束缚射击': 'spell_shaman_bindelemental',
    '树皮术': 'spell_nature_stoneclawtotem',
    '气定神闲': 'spell_nature_enchantarmor',
    '消失': 'ability_vanish',
    '消散': 'spell_shadow_dispersion',
    '灵龟守护': 'ability_hunter_pet_turtle',
    '烟雾弹': 'ability_rogue_smoke',
    '猎豹守护': 'ability_mount_jungletiger',
    '玄牛下凡': 'spell_monk_brewmaster_spec',
    '疾影': 'ability_demonhunter_blur',
    '痛苦压制': 'spell_holy_painsupression',
    '盾墙': 'ability_warrior_shieldwall',
    '真言术：盾': 'spell_holy_powerwordshield',
    '自由祝福': 'spell_holy_sealofvalor',
    '虚空行走': 'spell_warlock_demonsoul',
    '逃脱': 'ability_rogue_feint',
    '镜像': 'spell_magic_lesserinvisibilty',
    '闪避': 'spell_shadow_shadowward',
    '黑曜鳞片': 'inv_artifact_dragonscales',
  },

  enemy: [],
  own: null,

  /* 四条都从技能事实推得出来，不是印象 */
  cond: [
    { k: 'cs', t: '<sk>巨人打击</sk>好了', d: '它给你对目标 35% 增伤、持续 10 秒。没有它，你只是在打普通伤害' },
    { k: 'mw', t: '减疗盖得住', d: '<sk>致死打击</sk>压 50% 减疗 10 秒。减疗断了的那几秒，对面治疗能把你这一轮全奶回来' },
    { k: 'imm', t: '对面的免疫牌不在', d: '圣盾术 / <sk>寒冰屏障</sk> / <sk>暗影斗篷</sk>——还在的话，你的爆发会整套打进空气' },
    { k: 'reach', t: '你贴得上他', d: '<sk>冲锋</sk>或<sk>英勇飞跃</sk>至少有一个，且没被定住。战士打不出伤害的第一原因永远是够不着' },
  ],
  verdicts: [
    { cls: 'bad', html: '<div class="vi">◇</div><div><h3>别开，你现在只是在走空</h3><p>没有 <sk>巨人打击</sk> 的增伤、没有减疗盖着，这一轮打出去的数字对面治疗一口就补回来。<b>先去补减疗、等冷却。</b></p><!--MISSING--></div>' },
    { cls: 'bad', html: '<div class="vi">◇</div><div><h3>别开，你现在只是在走空</h3><p>条件差太多。<b>战士的爆发是明牌</b>——对面看见你交<sk>天神下凡</sk>就会把防御池全推出来。牌不齐的时候开，等于把冷却送给对面看。</p><!--MISSING--></div>' },
    { cls: 'warn', html: '<div class="vi">△</div><div><h3>能打，但目标是逼牌不是杀人</h3><p>压上去打两轮，逼对面交一张减伤或者一次位移，然后把 <sk>巨人打击</sk> 留给下一个窗口。<b>别把<sk>天神下凡</sk>跟着一起交。</b></p><!--MISSING--></div>' },
    { cls: 'warn', html: '<div class="vi">◐</div><div><h3>可以开，但知道缺的那一项会怎么让它失效</h3><p>压力够了。缺的那一条决定这轮的上限：<b>缺减疗就是拖时间，缺贴脸就是打不满，缺增伤就是数字不够</b>。开之前想好哪一项能补。</p><!--MISSING--></div>' },
    { cls: 'good', html: '<div class="vi">◆</div><div><h3>全交。四条齐了就是你等的那一刻</h3><p><sk>致死打击</sk>上减疗 → <sk>巨人打击</sk>开窗口 → <sk>打磨利刃</sk>吃掉那次强化的<sk>致死打击</sk> → 控制链卡在伤害落地那一刻。<b>10 秒的增伤窗口，别浪费任何一个公共冷却。</b></p><!--MISSING--></div>' },
  ],

  steps: [
    ['开打之前，先数对面的免疫牌',
      '圣盾术、<sk>寒冰屏障</sk>、<sk>暗影斗篷</sk>——有一张，你就得决定<b>是留<sk>缴械</sk>等它，还是靠撕裂投掷把它撕掉</b>。撕裂投掷 3 分钟冷却，一局用错一次就没了。',
      '缴械'],
    ['贴上去，先把减疗种上',
      '<sk>致死打击</sk>的 50% 减疗持续 10 秒。<b>这是你所有伤害的前提，不是伤害本身</b>——先种它，再谈爆发。',
      '致死打击'],
    ['<sk>巨人打击</sk>开窗口',
      '35% 增伤、10 秒。<b>窗口从这一刻开始计时</b>，后面每个公共冷却都得落在里面。',
      '巨人打击'],
    ['接住<sk>打磨利刃</sk>那一次<sk>致死打击</sk>',
      '巨人打击之后的第一次<sk>致死打击</sk>额外 +15% 伤害，并再压一层减疗。<b>这一下是全局单次伤害最高的一击</b>，别拿它去打副目标。',
      '打磨利刃'],
    ['控制链卡在伤害落地那一刻',
      '<sk>风暴之锤</sk> 4 秒昏迷、<sk>震荡波</sk> 2 秒。<b>不要开场就交</b>——控制要卡在治疗准备抬手的那一秒，不是卡在你刚进场的时候。',
      '风暴之锤'],
    ['目标进 35%，处决阶段开始',
      '点了 Massacre 的话，斩杀线从 20% 提到 <b>35%</b>。这多出来的 15% 血量是武器战士收人的主战场。',
      '斩杀'],
    ['他要跑，先断腿再追',
      '<sk>断筋</sk>、<sk>雷霆一击</sk>（点了 Crackling Thunder 范围 +50%）。<b>战士追不上人不是速度问题，是没提前减速。</b>',
      '雷霆一击'],
    ['没杀掉就转防御，别硬耗',
      '<sk>剑在人在</sk> 30% 减伤 8 秒、<sk>防御姿态</sk> 15% 减伤。<b>窗口过了你就是全场最脆的近战</b>——扛过这一波，等下一个巨人打击。',
      '剑在人在'],
  ],
  /* 对阵：只写机制层面（有哪些牌、怎么应对），不写数值与强弱评级——那些每个补丁都在动 */
  match: {
    qlbl: ['1 · 他那张「你杀不死我」的牌', '2 · 他怎么让你够不着', '3 · 你必须处理的那一个', '4 · 你的开场怎么打'],
    list: [
      {
        id: 'warrior', n: '战士', ic: 'classicon_warrior', c: '#C69B6D', diff: '镜像',
        cards: ['剑在人在', '盾墙', '破胆怒吼'], one: '同行对砍，先手减疗和先手打断决定一切。',
        q: [
          ['<sk>剑在人在</sk> · <sk>盾墙</sk>（防护）', '<sk>剑在人在</sk>是 8 秒的高招架 + 减伤。<b>对面交了就别硬打</b>——武器的爆发窗口只有 10 秒，撞进去等于白交。'],
          ['基本够得着', '战士没有真正的脱身手段，<sk>破胆怒吼</sk>是恐惧不是位移。<b>这是少数你不用担心距离的对局。</b>'],
          ['先手减疗', '双方都有 50% 减疗。<b>谁先种上、谁盖得更久，谁就赢了资源战</b>——这个对局的胜负多半在这里，不在爆发。'],
          ['压节奏而不是抢爆发', '两边窗口撞在一起时是纯拼数值。<b>错开一个窗口去打他的空窗期</b>，比正面对撞划算。'],
        ],
      },
      {
        id: 'paladin', n: '圣骑士', ic: 'classicon_paladin', c: '#F48CBA', diff: '看免疫',
        cards: ['圣盾术', '保护祝福', '自由祝福'], one: '整个对局围绕一张牌：圣盾术。',
        q: [
          ['<sk>圣盾术</sk> —— 全场最硬的一张', '完全免疫。<b>这是撕裂投掷唯一该留给的目标</b>——3 分钟冷却换掉他的免疫，是这个对局最大的一笔交易。'],
          ['<sk>自由祝福</sk>解你的减速', '骑士不跑，但会用<sk>自由祝福</sk>挣脱控制。<b>你的<sk>断筋</sk>对他效果有限。</b>'],
          ['<sk>保护祝福</sk>给队友', '他能把队友从你手里保出去（免疫物理）。<b>被保的目标你完全打不动</b>——立刻切目标，别站在那里空挥。'],
          ['留着撕裂投掷', '开场别急着交。<b>等他把圣盾术交出来之前，你的伤害都是在逼牌</b>；真正的击杀窗口在免疫被撕之后。'],
        ],
      },
      {
        id: 'hunter', n: '猎人', ic: 'classicon_hunter', c: '#AAD372', diff: '够不着',
        cards: ['灵龟守护', '假死', '逃脱', '猎豹守护'], one: '牌最多的一个：免疫、脱战、位移各一张。',
        q: [
          ['<sk>灵龟守护</sk> —— 免疫伤害', '免疫期间你打他等于没打。<b>看到就停手换目标</b>，别把窗口耗在这几秒。'],
          ['<sk>逃脱</sk> + <sk>猎豹守护</sk> + <sk>假死</sk>', '一个后跳、一个加速、一个脱战。<b>这是全场最难黏住的目标之一</b>——你的减速必须提前上，追出去再想就晚了。'],
          ['先减速再谈伤害', '<sk>断筋</sk>与<sk>雷霆一击</sk>的减速是你唯一能限制他的东西。<b>贴上的第一件事不是打，是种减速。</b>'],
          ['靠控制而不是靠追', '追猎人是徒劳的。<b><sk>风暴之锤</sk>和<sk>震荡波</sk>要卡在他准备位移的那一刻</b>，不是卡在他满血站桩的时候。'],
        ],
      },
      {
        id: 'rogue', n: '潜行者', ic: 'classicon_rogue', c: '#FFF468', diff: '看开场',
        cards: ['暗影斗篷', '消失', '闪避', '烟雾弹'], one: '他决定什么时候开打，你只能决定怎么接。',
        q: [
          ['<sk>暗影斗篷</sk> · <sk>消失</sk> · <sk>闪避</sk>', '三张不同性质的牌：免法术、脱战、高闪避。<b><sk>闪避</sk>期间你的物理伤害几乎全丢</b>——这是最容易白打的一段。'],
          ['<sk>消失</sk>直接断开', '他随时能重置这一轮。<b>你追不上一个交了<sk>消失</sk>的贼</b>，不如立刻转去打他队友。'],
          ['<sk>烟雾弹</sk>里的治疗', '烟雾里你无法指向外面的目标。<b>看到烟就往外挪</b>，别站在里面挥空。'],
          ['开场主动权不在你', '贼从潜行开局。<b>你能做的是提前站好位、把<sk>法术反射</sk>和<sk>剑在人在</sk>留在手上</b>，别在他开场前就交掉。'],
        ],
      },
      {
        id: 'priest', n: '牧师', ic: 'classicon_priest', c: '#FFFFFF', diff: '拼减疗',
        cards: ['痛苦压制', '消散', '心灵尖啸', '真言术：盾'], one: '典型的减疗对象：他的活是补，你的活是让补没用。',
        q: [
          ['<sk>痛苦压制</sk> · <sk>消散</sk>', '一张给队友的大减伤，一张自保。<b>都是短时间的</b>——不用抢着打穿，等它过去再压。'],
          ['<sk>心灵尖啸</sk>把你推开', '恐惧是他的主要脱身手段。<b>Berserker Shout 能免疫恐惧</b>——这是战士对牧师最有价值的一张牌。'],
          ['减疗必须一直盖着', '牧师的治疗量足以抵消你窗口外的全部伤害。<b><sk>致死打击</sk>断一次，他就能补回一整轮。</b>'],
          ['打断优先于伤害', '<sk>拳击</sk>不进递减，可以反复用。<b>看到他抬手就打断</b>，把硬控留给他必须交大的时候。'],
        ],
      },
      {
        id: 'deathknight', n: '死亡骑士', ic: 'classicon_deathknight', c: '#C41E3A', diff: '硬碰硬',
        cards: ['反魔法护罩', '冰封之韧', '冰风暴'], one: '双方都是站着打的板甲，看谁的减伤更省。',
        q: [
          ['<sk>冰封之韧</sk> · <sk>反魔法护罩</sk>', '一张大减伤 + 一张免法术。<b>你是物理伤害，所以反魔法护罩对你无效</b>——这一点比对法系对手有利。'],
          ['他不跑，他抓你', '死骑有拉人手段，没有脱身手段。<b>这是另一个不用担心距离的对局。</b>'],
          ['他的减速与定身', '<sk>冰风暴</sk>类效果会限制你的走位。<b>Berserker Shout 免疫定身</b>，留给关键那一次。'],
          ['比拼减伤效率', '两边都能站着扛。<b><sk>防御姿态</sk>常开的价值在这个对局最明显</b>——省下来的那 15% 会决定谁先倒。'],
        ],
      },
      {
        id: 'shaman', n: '萨满祭司', ic: 'classicon_shaman', c: '#0070DD', diff: '看图腾',
        cards: ['星界转移', '寒冰护体', '束缚射击'], one: '他的牌在地上：图腾决定这一轮的走向。',
        q: [
          ['<sk>星界转移</sk> —— 免疫一切', '短暂的完全免疫。<b>它一开你就该停手</b>，硬打是纯浪费窗口。'],
          ['地缚与减速', '萨满靠图腾和减速拉开距离。<b>图腾是可以打掉的</b>——这是很多人忘记的事。'],
          ['先处理图腾', '关键图腾（治疗、地缚）打掉的收益常常大于继续砍人。<b>你的范围技能顺手就能清。</b>'],
          ['卡在图腾冷却的空当', '图腾有冷却。<b>他刚交完一轮图腾的那段时间，是你最好的窗口。</b>'],
        ],
      },
      {
        id: 'mage', n: '法师', ic: 'classicon_mage', c: '#3FC7EB', diff: '够不着',
        cards: ['寒冰屏障', '变形术', '冰霜之环', '镜像'], one: '全场最会拉开距离的职业。',
        q: [
          ['<sk>寒冰屏障</sk> —— 完全免疫', '免疫一切并解除控制。<b>撕裂投掷的第二个理想目标</b>；撕不掉的话，等它自己结束再开窗口。'],
          ['冰环、冰霜新星、闪现', '法师有一整套限制近战的手段。<b>你有多少位移都不够用</b>——所以每一次<sk>冲锋</sk>都要用在刀刃上。'],
          ['打断和反射', '<sk>拳击</sk>打断施法，<sk>法术反射</sk>能把关键法术弹回去。<b>反射对法师是这个对局最爽的一张牌。</b>'],
          ['不要追，要卡', '追法师追不上。<b>预判他要去哪，用<sk>英勇飞跃</sk>提前落点</b>，比在后面跟着跑有效得多。'],
        ],
      },
      {
        id: 'warlock', n: '术士', ic: 'classicon_warlock', c: '#8788EE', diff: '拼血线',
        cards: ['虚空行走', '恐惧'], one: '他用血换伤害，你要打得比他自愈快。',
        q: [
          ['吸血与护盾', '术士的自愈能力强。<b>减疗对他同样有效</b>——<sk>致死打击</sk>压着，他的吸血就补不回来。'],
          ['恐惧与减速', '术士靠恐惧和减速拉扯。<b>Berserker Shout 免疫恐惧，是这个对局的关键牌。</b>'],
          ['他的宠物', '宠物提供额外控制。<b>顺手打掉或控住，能省下你不少麻烦。</b>'],
          ['压住不给喘息', '术士需要时间读条和叠 DoT。<b>持续贴身比爆发窗口更能限制他。</b>'],
        ],
      },
      {
        id: 'monk', n: '武僧', ic: 'classicon_monk', c: '#00FF98', diff: '看业报',
        cards: ['业报之触', '玄牛下凡', '气定神闲'], one: '一张牌能把你的爆发原样还给你。',
        q: [
          ['<sk>业报之触</sk> —— 伤害反弹', '你打出去的伤害会转回你身上。<b>看到它就必须停手</b>——这是全场最容易自杀的一张对面牌。'],
          ['<sk>气定神闲</sk>免控 · 翻滚位移', '武僧的机动性很高。<b>控制要卡准，交空一次就得等很久。</b>'],
          ['业报之触的时机', '<b>它通常就是接你的爆发来的。</b>把<sk>天神下凡</sk>和<sk>巨人打击</sk>错开一点，别让整套撞在它上面。'],
          ['先试探再全交', '这个对局值得先打两下看反应。<b>试探的成本远低于整套爆发被反弹。</b>'],
        ],
      },
      {
        id: 'druid', n: '德鲁伊', ic: 'classicon_druid', c: '#FF7C0A', diff: '追不上',
        cards: ['树皮术', '旅行形态', '气定神闲'], one: '他不跟你打，他绕着你打。',
        q: [
          ['<sk>树皮术</sk> —— 大减伤', '不是免疫，是减伤。<b>可以硬打，但性价比低</b>——等它过去更划算。'],
          ['<sk>旅行形态</sk>与潜行', '德鲁伊能变形跑掉、能潜行重置。<b>他决定什么时候打，这一点和贼很像。</b>'],
          ['控制他的形态切换', '<b>硬控能打断他的节奏</b>。<sk>风暴之锤</sk>卡在他要变形的那一刻，比卡在满血时有用。'],
          ['减速比追击有效', '<sk>断筋</sk>和<sk>雷霆一击</sk>提前上。<b>德鲁伊不怕你追，怕你让他跑不动。</b>'],
        ],
      },
      {
        id: 'demonhunter', n: '恶魔猎手', ic: 'classicon_demonhunter', c: '#A330C9', diff: '拼机动',
        cards: ['恶魔变形', '疾影', '黑曜鳞片'], one: '机动性和你不在一个层级，别比追逐。',
        q: [
          ['<sk>恶魔变形</sk> · <sk>黑曜鳞片</sk>', '一个变身增强 + 一个减伤。<b>都不是免疫</b>——可以打，只是效率下降。'],
          ['二段跳与冲刺', 'DH 的位移多且短冷却。<b>拉开距离对他几乎没有成本。</b>'],
          ['他的打断与沉默', 'DH 有打断手段。<b>但你几乎没有读条技能</b>，这一点对武器战士影响很小。'],
          ['守株待兔', '追不上就别追。<b>站在治疗身边，等他自己贴上来</b>——他必须近身才能输出。'],
        ],
      },
      {
        id: 'evoker', n: '唤魔师', ic: 'classicon_evoker', c: '#33937F', diff: '看悬空',
        cards: ['悬空', '黑曜鳞片'], one: '会飞的布甲，够不着的时候多。',
        q: [
          ['<sk>黑曜鳞片</sk> · <sk>悬空</sk>', '减伤 + 脱离。<b><sk>悬空</sk>期间近战完全够不着</b>，等它落地。'],
          ['翱翔与击退', '唤魔师能垂直脱离，也能把你推开。<b>你的位移填不上这个差距。</b>'],
          ['打断读条', '唤魔师有大量蓄力技能。<b><sk>拳击</sk>在这个对局的价值极高</b>——打断一次蓄力等于抵消一大段伤害。'],
          ['贴上就别松', '一旦脱开就很难再贴上。<b>贴身期间把减疗和减速都种满</b>，为下一次接触做准备。'],
        ],
      },
    ],
  },
  roles: null, memb: null, play: null,
  quiz: [],
};
