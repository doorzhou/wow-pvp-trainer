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
<div class="todo"><span class="tag">待补充</span><span class="tx">开场决策器的四个条件</span></div>
<h2>三个时钟</h2>
<div class="todo"><span class="tag">待补充</span><span class="tx">节奏判断</span></div>
</div>`,
    s2: `<div class="wrap">
<h2>通用手法</h2>
<div class="todo"><span class="tag">待补充</span><span class="tx">一轮交战的完整流程与手法拆解</span></div>
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
<div class="todo"><span class="tag">待补充</span><span class="tx">开赛前 30 秒要过一遍的东西</span></div>
</div>`,
  },

  fragments: {
    // 实测分布，构建期注入 s1 的两个容器
    pvptal: '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>打磨利刃</sk>　49/50</span><span class="sub">98%，最接近必带</span><span class="ar">▸</span></div><div class="b"><p><sk>巨人打击</sk>之后的下一次<sk>致死打击</sk>伤害 +15%，并额外压一层 50% 减疗。</p><p style="margin-top:8px"><sk>致死打击</sk>本身已经带 50% 减疗（10 秒），所以<b>这一格买的不是「有没有减疗」，是「减疗能不能一直盖着」</b>——把两段接起来，对面治疗就没有喘息的空档。98% 的使用率说明这件事没有讨论余地。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>捍卫</sk>　34/50</span><span class="sub">68%</span><span class="ar">▸</span></div><div class="b"><p>给队友的减伤。<b>队友是被集火的那个时才值</b>；你自己被打的局，这一格是空的。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><sk>缴械</sk>　31/50</span><span class="sub">62%</span><span class="ar">▸</span></div><div class="b"><p>对面伤害来自武器时才有意义。<b>看阵容定</b>——法系为主的对面，这一格几乎不动。</p></div></div>'
      + '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><b>Berserker Roar</b>　29/50</span><span class="sub">58%</span><span class="ar">▸</span></div><div class="b"><p>与上面两格争剩下的位置。<span class="dimtx">暂无官方简体中文名，使用英文原名。</span></p></div></div>',
    heroline: '<div class="row"><div class="h" onclick="tg(this)"><span class="t"><b>Slayer</b>　29/50　vs　<b>Colossus</b>　21/50</span><span class="sub">58% / 42% —— 没有正确答案</span><span class="ar">▸</span></div><div class="b"><p>前面四个已上线的专精，英雄天赋都是一边倒（50/0、46/4、45/5）——那种情况下没什么好想的，跟着点就行。</p><p style="margin-top:8px"><b>武器战士是唯一一个真正对半分的。</b>58 比 42 意味着 top50 内部也没有共识，这一格得你自己按打法定。</p><div class="note" style="margin-top:10px">两条线各自的取舍待补充——需要实测支撑，不做无根据的推荐。</div></div></div>',
    clocks: '',
    setup: '',
    general: '',
    sheet: '',
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
  cond: [],
  verdicts: [],
  steps: [],
  match: { qlbl: ['1 · 他什么时候能杀人', '2 · 他那张"你杀不死我"的牌', '3 · 你必须处理的那一个', '4 · 你的开场怎么打'], list: [] },
  roles: null, memb: null, play: null,
  quiz: [],
};
