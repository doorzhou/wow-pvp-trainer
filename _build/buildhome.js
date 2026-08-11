/* ============================================================
   首页生成器：registry.js → index.html
   矩阵在构建期就渲染成静态 HTML（爬虫要读得到），JS 只做筛选
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { DOMAIN } = require('./config.js');
const v = require('./ver.js');

// 载入注册表
const win = { REG: null };
new Function('window', fs.readFileSync(path.join(SITE, 'data/registry.js'), 'utf8'))(win);
const REG = win.REG;

// 题量：从题库文件里数
const QCOUNT = {};
let totalQ = 0;
fs.readdirSync(path.join(SITE, 'data/quiz')).forEach(f => {
  const w = {};
  new Function('window', fs.readFileSync(path.join(SITE, 'data/quiz', f), 'utf8'))(w);
  QCOUNT[f.replace('.js', '')] = w.QUIZ.length;
  totalQ += w.QUIZ.length;
});

const IC = f => 'assets/icons/' + f + '.jpg';
const tierCls = t => t === 'A+' ? 'Ap' : (t || 'none');
const dots = st => '<span class="dots6">' + st.map(v => '<i class="s' + v + '"></i>').join('') + '</span>';

/* ---------- 职业矩阵 ---------- */
function matrix() {
  return REG.classes.map(c => {
    const specs = c.specs.map(s => {
      const live = !!s.page;
      const attrs = 'data-role="' + s.role + '" data-live="' + (live ? '1' : '0') +
        '" data-q="' + (c.n + s.n + ' ' + c.en + ' ' + s.en + ' ' + s.id).toLowerCase() + '"';
      const inner =
        '<img src="' + IC(s.ic) + '" alt="' + s.n + c.n + '" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<span class="t"><span class="n">' + s.n + '</span>' +
        '<span class="e">' + s.en + '</span>' + (live ? dots(s.st) : '') + '</span>' +
        (s.tier ? '<span class="tier ' + tierCls(s.tier) + '">' + s.tier + '</span>'
          : '<span class="rolepill">' + REG.roles[s.role] + '</span>');
      return live
        ? '<a class="spc live" href="' + s.page + '" ' + attrs + '>' + inner + '<span class="go">▸</span></a>'
        : '<span class="spc soon" ' + attrs + ' title="还没做，见下方路线图">' + inner + '</span>';
    }).join('\n        ');
    return '    <div class="clsrow" data-cls="' + c.id + '" style="--cc:' + c.c + '">\n' +
      '      <div class="clsid"><img src="' + IC(c.ic) + '" alt="' + c.n + '" loading="lazy">' +
      '<span><span class="nm">' + c.n + '</span><br><span class="am">' + c.en + ' · ' + c.armor + '</span></span></div>\n' +
      '      <div class="specs">\n        ' + specs + '\n      </div>\n    </div>';
  }).join('\n');
}

/* ---------- 组合 ---------- */
function comps() {
  return REG.comps.map(c => {
    const ics = c.members.map(m => {
      const cl = REG.classes.find(x => x.id === m);
      return '<img src="' + IC(cl.ic) + '" alt="' + cl.n + '">';
    }).join('');
    return '    <a class="comp" href="' + c.page + '">' +
      '<span class="sz">' + c.size + '</span>' +
      '<span class="ics">' + ics + '</span>' +
      '<h3>' + c.n + '</h3>' +
      '<div class="one">' + c.one + '</div>' +
      '<div style="margin-top:11px;display:flex;align-items:center;gap:8px">' + dots(c.st) +
      '<span style="font-size:11.5px;color:var(--tx3)">' + (QCOUNT[c.id] || 0) + ' 题</span></div></a>';
  }).join('\n');
}

const liveSpecs = REG.flat.filter(s => s.page);
const trainerCount = liveSpecs.length + REG.comps.length;

const DESC = '魔兽世界正式服 12.0.7 Midnight 赛季一 PvP 判断训练。不教连招，练的是开火之前那一个判断：该不该开、打谁、用哪张牌。' +
  '现有 ' + trainerCount + ' 个训练器、' + totalQ + ' 道情境判断题，覆盖敏锐贼/狂徒贼/冰法/戒律牧与贼牧 2v2、Thug Cleave 3v3。';

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>魔兽世界 PvP 判断训练器 · 12.0.7 Midnight 赛季一 · 全职业竞技场攻略与练习</title>
<meta name="description" content="${DESC}">
<meta name="keywords" content="魔兽世界,WOW,PVP,竞技场,12.0.7,Midnight,午夜,判断训练,敏锐贼,狂徒贼,冰法,戒律牧,2v2,3v3,arena,天赋,配装,属性优先级">
<meta name="author" content="WoW PvP 判断训练器">
<link rel="canonical" href="${DOMAIN}/">
<meta property="og:type" content="website">
<meta property="og:title" content="魔兽世界 PvP 判断训练器 · 12.0.7 Midnight 赛季一">
<meta property="og:description" content="${DESC}">
<meta property="og:url" content="${DOMAIN}/">
<meta property="og:site_name" content="WoW PvP 判断训练器">
<meta property="og:locale" content="zh_CN">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="魔兽世界 PvP 判断训练器 · 12.0.7 Midnight 赛季一">
<meta name="twitter:description" content="${DESC}">
<meta name="robots" content="index,follow">
<link rel="stylesheet" href="${v('assets/css/core.css')}">
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"魔兽世界 PvP 判断训练器",
  "url":"${DOMAIN}/",
  "description":"${DESC}",
  "inLanguage":"zh-CN"
}
</script>
</head>
<body>

<header>
  <div class="wrap hd">
    <a class="brand" href="index.html"><span class="mk">判</span>PvP 判断训练器</a>
    <span class="badge hot">12.0.7 · Midnight S1</span>
    <div class="spacer"></div>
    <a class="homelink" href="#matrix">职业矩阵</a>
    <button class="tbtn" onclick="toggleTheme()" title="切换深浅色">◐</button>
  </div>
</header>

<div class="hero"><div class="wrap in">
  <div class="eyebrow">魔兽世界 · 12.0.7 · Midnight 赛季一</div>
  <h1>输掉的那一局，多半不是手速问题</h1>
  <div class="sub">练的是开火之前的判断：<b>该不该开、打谁、他手上还剩几张牌</b>。
    每个训练器含情境选择题——给定局面，选技能与目标，选完给出判断依据。</div>
  <div class="cta">
    <a class="pri" href="#matrix">挑一个专精开始 →</a>
    <a class="sec" href="#howto">先看怎么用</a>
  </div>
  <div class="kpis">
    <div class="kpi"><div class="v">${trainerCount}</div><div class="k">现有训练器（${liveSpecs.length} 专精 + ${REG.comps.length} 组合）</div></div>
    <div class="kpi"><div class="v">${totalQ}</div><div class="k">情境判断题</div></div>
    <div class="kpi"><div class="v">${REG.stats.done} <span style="font-size:15px;color:var(--tx3)">/ ${REG.stats.total}</span></div>
      <div class="k">专精覆盖度</div><div class="bar"><i style="width:${REG.stats.pct}%"></i></div></div>
    <div class="kpi"><div class="v">6</div><div class="k">内容轴：骨架 · 手法 · 对阵 · 天赋 · 装备 · 训练</div></div>
  </div>
</div></div>

<div class="wrap" id="matrix">
  <h2>全职业 · 全专精</h2>
  <p class="lead">13 职业 ${REG.stats.total} 专精，每个含天赋与装备属性。卡片下方六格为完成度
    <span class="dots6" style="display:inline-flex;vertical-align:-1px"><i class="s2"></i><i class="s2"></i><i class="s2"></i><i class="s1"></i><i></i><i class="s2"></i></span>
    ——骨架 / 手法 / 对阵 / 天赋 / 装备 / 训练。</p>

  <div class="filters">
    <div class="fgroup" id="fRole">
      <button class="on" data-v="all">全部</button>
      <button data-v="dps">输出</button>
      <button data-v="heal">治疗</button>
      <button data-v="tank">坦克</button>
    </div>
    <div class="fgroup" id="fLive">
      <button class="on" data-v="all">不限状态</button>
      <button data-v="1">可用</button>
      <button data-v="0">规划中</button>
    </div>
    <div class="fsearch"><input id="fq" type="search" placeholder="搜职业或专精，比如 敏锐 / mage / 戒律" autocomplete="off"></div>
    <span class="fcount" id="fcount"></span>
  </div>

  <div class="matrix" id="mx">
${matrix()}
  </div>
  <p class="lead" style="margin-top:14px">梯队（S / A+ / A / B / C）取自 Icy Veins 12.0.7 PvP DPS 梯队表；治疗与坦克该表未收录，标注为角色。</p>
</div>

<div class="wrap">
  <h2>组合训练</h2>
  <p class="lead">组合训练器提供<strong>多视角</strong>：同一局面，切换查看每个位置的处置。</p>
  <div class="comps">
${comps()}
  </div>
</div>

<div class="wrap" id="howto">
  <h2>怎么用</h2>
  <div class="howto">
    <div class="hstep"><span class="n">1</span><h4>读骨架</h4>
      <p>每个专精开头一句话论断：<b>这个版本它靠什么赢</b>。</p></div>
    <div class="hstep"><span class="n">2</span><h4>练判断</h4>
      <p>情境给到具体局面——<b>目标血量、剩余的牌、你的冷却状态</b>。选错会指出错在哪一步。</p></div>
    <div class="hstep"><span class="n">3</span><h4>赛前速查</h4>
      <p>三条铁律、免疫牌图标、高频误判。</p></div>
  </div>
  <p class="lead" style="margin-top:14px">技能图标悬停或点击可查看官方说明（Wowhead 简体中文）。</p>
</div>

<div class="wrap">
  <h2>内容来源</h2>
  <div class="srcbox">
    <div class="src measured"><h4>✓ 引自公开数据</h4><ul>
      <li>技能中文名、图标、技能说明 —— Wowhead 官方数据接口</li>
      <li>天赋使用率 —— Murlok.io top50 实测分布（页面上 50/50、8/8 这类标注）</li>
      <li>版本改动 —— 官方补丁说明</li>
      <li>梯队排名 —— Icy Veins 12.0.7 PvP 梯队表</li>
      <li>装备机制（货币、催化器、PvP 装等缩放）—— Icy Veins 配装指南</li>
    </ul></div>
    <div class="src derived"><h4>△ 编者推导</h4><ul>
      <li>各种判断框架（开火四条件、对局四问、三个时钟）</li>
      <li>组合训练器的控制链结构与角色模型（公开攻略少有组合层面的战术展开）</li>
      <li>情境题的设计与解释</li>
      <li>转火 / 撤退 / 留牌等取舍</li>
    </ul></div>
  </div>
  <div class="note" style="margin-top:14px">不收录具体冷却秒数与装等数值——每次平衡改动即失效，内容按相对关系描述。</div>
</div>

<div class="wrap" id="legal">
  <h2>版本与免责</h2>
  <div class="rows">
    <div class="row"><div class="h" onclick="tg(this)"><span class="t">时效性</span>
      <span class="sub">对应 12.0.7 · 最后更新 ${REG.updated}</span><span class="ar">▸</span></div>
      <div class="b"><p>本站内容对应<b>补丁 ${REG.patch}（${REG.season}）</b>。平衡改动可能使部分判断失效；
        与游戏内不符时以游戏内为准，欢迎提交勘误。</p></div></div>
    <div class="row"><div class="h" onclick="tg(this)"><span class="t">与暴雪的关系</span>
      <span class="sub">非官方粉丝内容</span><span class="ar">▸</span></div>
      <div class="b"><p>本站是<b>非官方的粉丝制作内容</b>，与 Blizzard Entertainment 无隶属关系，未经其认可或赞助。
        《魔兽世界》及相关标识、技能图标为暴雪娱乐的商标或注册商标。</p>
        <p style="margin-top:8px">技能图标按暴雪《粉丝内容使用条款》（Fan Content Policy）在非商业前提下使用。
        <b>若权利方认为存在不当使用，请通过下方渠道告知，将立即移除。</b></p></div></div>
    <div class="row"><div class="h" onclick="tg(this)"><span class="t">数据与隐私</span>
      <span class="sub">不收集，不上传</span><span class="ar">▸</span></div>
      <div class="b"><p>纯静态页面，<b>无后端、无埋点、无 Cookie 追踪</b>。
        训练记录（答题数、正确率、错题）仅存于浏览器 localStorage，清除浏览器数据即失效，不跨设备同步。</p></div></div>
    <div class="row"><div class="h" onclick="tg(this)"><span class="t">勘误与贡献</span>
      <span class="sub">GitHub Issues</span><span class="ar">▸</span></div>
      <div class="b"><p>勘误、补充，或认领某个专精的整理，请提交至
        <a href="https://github.com/doorzhou/wow-pvp-trainer/issues" target="_blank" rel="noopener">GitHub Issues</a>。
        <b>技能机制与数据引用类错误优先处理。</b></p></div></div>
  </div>
</div>

<footer><div class="wrap">
  魔兽世界 PvP 判断训练器 · 对应补丁 ${REG.patch}（${REG.season}）· 最后更新 ${REG.updated}<br>
  技能名与图标来自 <a href="https://www.wowhead.com" target="_blank" rel="noopener">Wowhead</a> 官方数据接口 ·
  打法参考 <a href="https://www.icy-veins.com" target="_blank" rel="noopener">Icy Veins</a> ·
  <a href="https://murlok.io" target="_blank" rel="noopener">Murlok.io</a> 实测分布 ·
  <a href="https://www.method.gg" target="_blank" rel="noopener">Method</a><br>
  非官方粉丝内容，与 Blizzard Entertainment 无关。
</div></footer>

<script src="${v('assets/js/skdb.js')}"></script>
<script src="${v('data/registry.js')}"></script>
<script src="${v('assets/js/home.js')}"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(SITE, 'index.html'), html);
console.log('index.html  ' + (Buffer.byteLength(html) / 1024).toFixed(0) + 'KB' +
  '  ·  ' + REG.stats.total + ' 专精 / ' + REG.classes.length + ' 职业 / ' +
  trainerCount + ' 个训练器 / ' + totalQ + ' 题');
