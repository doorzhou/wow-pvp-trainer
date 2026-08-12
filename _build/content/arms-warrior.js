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
<h2>分职业对阵</h2>
<div class="todo"><span class="tag">待补充</span><span class="tx">13 职业的对局四问</span></div>
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
  match: { qlbl: ['1 · 他什么时候能杀人', '2 · 他那张"你杀不死我"的牌', '3 · 你必须处理的那一个', '4 · 你的开场怎么打'], list: [] },
  roles: null, memb: null, play: null,
  quiz: [],
};
