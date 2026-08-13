/* 按盗贼标准生成专精内容模块的骨架。
 *
 * 为什么要有这个文件：第一版新增专精时我照着武器战士抄，而武器战士本身
 * 已经偏离了标准 —— 结果是 setup/general 两个片段空着、对手缺 arena/duel、
 * s5 硬编码。差异肉眼很难发现（页面都能渲染出来），只有跟盗贼逐字段比才看得出。
 * 现在把标准固化在这里，新专精一律走它。
 *
 * 用法：在 spec 定义文件里 require('./mkspec.js')，传入各字段，返回完整 module。
 */

const IC = n => 'assets/icons/' + n + '.jpg';

/* 一行可折叠内容。icons 是这一行标题左侧的技能图标（盗贼标准里每行都有） */
function row(icons, title, sub, bodyHTML, SKDB) {
  const ic = (icons || []).filter(n => SKDB[n]).map(n =>
    `<img class="ic" data-sk="${n}" style="width:20px;height:20px" src="${IC(SKDB[n].icon)}" ` +
    `alt="${n}" loading="lazy" onerror="this.style.display='none'">`).join('');
  return `<div class="row"><div class="h" onclick="tg(this)">` +
    (ic ? `<span class="icrow">${ic}</span>` : '') +
    `<span class="t">${title}</span><span class="sub">${sub}</span><span class="ar">▸</span></div>` +
    `<div class="b">${bodyHTML}</div></div>`;
}

const ps = arr => arr.map((p, i) => `<p${i ? ' style="margin-top:8px"' : ''}>${p}</p>`).join('');

/* ---- 五个章节的标准骨架。除了 thesis 与「为什么」那一行，其余都是容器 ---- */
function sections(o) {
  const s1 = `<div class="wrap">

<div class="thesis">
  <div class="lbl">这版本唯一要记住的一句</div>
  <div class="big">${o.thesis}</div>
</div>

<div class="rows">
  ${row(o.whyIcons, o.whyTitle, o.whySub, ps(o.whyBody), o.SKDB)}
</div>

<h2>该不该开？勾一下就知道</h2>
<p class="lead">勾掉几条，就有多少胜算。</p>
<div class="gobox">
  <div class="gh">开场决策器</div>
  <div class="gt">现在的局面满足哪几条？</div>
  <div class="checks" id="checks"></div>
  <div class="verdict" id="verdict"></div>
</div>

<h2>三个时钟</h2>
<p class="lead">${o.clocksLead}</p>
<div class="rows" id="clocks"></div>

<h2>本版定盘（top50 三对三实测）</h2>
<div class="rows" id="setup"></div>

</div>`;

  const s2 = `<div class="wrap">
  <div class="rows" id="general"></div>
</div>`;

  const s3 = `<div class="wrap">
  <p class="lead">四问对所有敌人是同一套。</p>
  <div class="split">
    <div class="sidecol">
      <div class="cls-grid" id="clsGrid"></div>
      <div class="modebar" id="modebar">
        <button class="on" data-m="arena">竞技场</button>
        <button data-m="duel">单挑</button>
      </div>
    </div>
    <div id="clsDetail"></div>
  </div>
</div>`;

  const s4 = `<div class="wrap">
  <div class="statbar">
    <div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div>
    <div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div>
    <div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div>
    <div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div>
  </div>
  <div class="qtop">
    <select id="fCat"><option value="all">全部范围</option></select>
    <select id="fDiff">
      <option value="all">全部难度</option>
      <option value="1">基础 · 机制</option>
      <option value="2">进阶 · 时机</option>
      <option value="3">高阶 · 权衡</option>
    </select>
    <button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button>
    <button class="btn ghost" onclick="startQuiz(true)">只练错题</button>
    <button class="btn ghost" onclick="resetStats()">清空记录</button>
  </div>
  <div id="quizArea"></div>
</div>`;

  const s5 = `<div class="wrap">
  <div class="sheet" id="sheet"></div>
</div>`;

  return { s1, s2, s3, s4, s5 };
}

/* setup：英雄天赋 + PvP 天赋两行，盗贼标准就是这两行 */
function setupFrag(o) {
  return [
    row(o.heroIcons, '英雄天赋：' + o.heroName, o.heroSub, ps(o.heroBody), o.SKDB),
    row(o.pvpIcons, 'PvP 天赋：' + o.pvpTitle, o.pvpSub, ps(o.pvpBody), o.SKDB),
  ].join('');
}

/* general：七行手法。第一行固定是「一轮交战的完整流程」，挂 stepper */
function generalFrag(o) {
  const head = row(o.flowIcons, '01 · 一轮交战的完整流程', '八步，点着走一遍',
    '<div class="stepper" id="stepBody"></div>', o.SKDB);
  const rest = o.general.map((g, i) =>
    row(g.icons, String(i + 2).padStart(2, '0') + ' · ' + g.t, g.sub, ps(g.body), o.SKDB));
  return head + rest.join('');
}

const clocksFrag = o => o.clocks.map(c => row(c.icons, c.t, c.sub, ps(c.body), o.SKDB)).join('');

/* sheet：三条铁律 + 若干速查卡 */
function sheetFrag(o) {
  const big3 = o.laws.map((l, i) =>
    `<div class="b3"><div class="n">${i + 1}</div><div><div class="tt">${l.t}</div>` +
    `<div class="dd">${l.d}</div></div></div>`).join('');
  const cards = (o.cards || []).map(c =>
    `<div class="sc"><h4>${c.h}</h4>${c.body}</div>`).join('');
  return `<div class="sc wide"><h4>三条铁律</h4><div class="big3">${big3}</div></div>` + cards;
}

module.exports = function mkspec(o) {
  if (!o.SKDB) throw new Error('缺 SKDB');
  ['thesis', 'whyTitle', 'clocks', 'general', 'laws', 'cond', 'verdicts', 'steps', 'match'].forEach(k => {
    if (!o[k]) throw new Error('缺字段: ' + k);
  });
  if (o.clocks.length !== 3) throw new Error('clocks 必须 3 条');
  if (o.general.length !== 6) throw new Error('general 必须 6 条（加上固定的第 01 行共 7 行）');
  if (o.laws.length !== 3) throw new Error('laws 必须 3 条');
  if (o.cond.length !== 4) throw new Error('cond 必须 4 条');
  if (o.verdicts.length !== 5) throw new Error('verdicts 必须 5 条（对应满足 0~4 条）');
  if (o.steps.length !== 8) throw new Error('steps 必须 8 条');
  o.match.list.forEach(m => {
    if (!m.arena || !m.duel) throw new Error(m.id + ' 缺 arena/duel —— 分职业页有模式切换');
    if (!m.q || m.q.length !== 4) throw new Error(m.id + ' 的四问不全');
  });

  return {
    meta: o.meta,
    nav: [{ s: 's1', label: '骨架' }, { s: 's2', label: '通用手法' }, { s: 's3', label: '分职业' },
          { s: 's4', label: '判断训练' }, { s: 's5', label: '赛前速查' }],
    sections: sections(o),
    fragments: {
      clocks: clocksFrag(o), setup: setupFrag(o),
      general: generalFrag(o), sheet: sheetFrag(o),
    },
    sk: o.sk, enemy: [], own: null,
    cond: o.cond, verdicts: o.verdicts, steps: o.steps, match: o.match,
    roles: null, memb: null, play: null, quiz: o.quiz || [],
  };
};
