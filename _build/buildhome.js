/* ============================================================
   首页生成器：registry.js → index.html
   矩阵在构建期就渲染成静态 HTML（爬虫要读得到），JS 只做筛选
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { DOMAIN, SITE_NAME, TAGLINE, MARK, ISSUES, WISH_KEY } = require('./config.js');
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

/* ---------- 竞技场组合 ----------
   3v3 有公认命名，2v2 是配对 —— 两种形态分开展示，这是社区既有的分法 */
function comps() {
  return Object.keys(REG.comps).map(bk => {
    const B = REG.comps[bk];
    const done = B.list.filter(c => c.page).length;
    const cards = B.list.map(c => {
      const live = !!c.page;
      const ics = c.members.map(m => {
        const cl = REG.classes.find(x => x.id === m);
        return '<img src="' + IC(cl.ic) + '" alt="' + cl.n + '" loading="lazy" onerror="this.style.display=\'none\'">';
      }).join('');
      const kind = c.kind === 'dd' ? '<span class="ckind">双输出</span>' : '';
      const meta = live
        ? dots(c.st) + '<span class="cq">' + (QCOUNT[c.id] || 0) + ' 题</span>'
        : '<span class="csoon">规划中</span>';
      const inner =
        '<span class="ics">' + ics + '</span>' +
        '<span class="t"><span class="n">' + c.name + kind + '</span>' +
        '<span class="mk">' + c.make + '</span>' +
        (c.one ? '<span class="one">' + c.one + '</span>' : '') +
        '<span class="foot">' + meta + '</span></span>';
      const tag = ' data-cls="' + c.members.join(' ') + '" data-live="' + (live ? 1 : 0) + '"';
      return live
        ? '        <a class="cmp live" href="' + c.page + '"' + tag + '>' + inner + '<span class="go">▸</span></a>'
        : '        <span class="cmp soon"' + tag + '>' + inner + '</span>';
    }).join('\n');
    return '    <div class="bracket">\n' +
      '      <div class="bhead"><span class="bt">' + B.title + '</span>' +
      '<span class="bd">' + B.note + '</span>' +
      '<span class="bc" data-total="' + B.list.length + '" data-done="' + done + '">' +
      B.list.length + ' 组 · 已完成 ' + done + '</span></div>\n' +
      '      <div class="cgrid">\n' + cards + '\n      </div>\n    </div>';
  }).join('\n');
}

const liveSpecs = REG.flat.filter(s => s.page);
const trainerCount = liveSpecs.length + REG.compStats.done;

const DESC = SITE_NAME + '——' + TAGLINE + '，对应 12.0.7 Midnight 赛季一。' +
  '覆盖 13 职业 ' + REG.stats.total + ' 个专精与 ' + REG.compStats.total + ' 组竞技场组合，含 ' + totalQ + ' 道情境判断题：' +
  '给定局面，选技能与目标，选完给出判断依据。现已上线敏锐贼、狂徒贼、冰法、戒律牧与 Thug Cleave 3v3、贼牧 2v2。';

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${SITE_NAME} · ${TAGLINE} | 12.0.7 Midnight 赛季一</title>
<meta name="description" content="${DESC}">
<meta name="keywords" content="WOW打架营地,魔兽世界,WOW,PVP,竞技场,arena,12.0.7,Midnight,午夜,判断训练,敏锐贼,狂徒贼,冰法,戒律牧,2v2,3v3,RMP,Thug Cleave,天赋,配装,属性优先级">
<meta name="author" content="${SITE_NAME}">
<link rel="canonical" href="${DOMAIN}/">
<meta property="og:type" content="website">
<meta property="og:title" content="${SITE_NAME} · ${TAGLINE}">
<meta property="og:description" content="${DESC}">
<meta property="og:url" content="${DOMAIN}/">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="zh_CN">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${SITE_NAME} · ${TAGLINE}">
<meta name="twitter:description" content="${DESC}">
<meta name="robots" content="index,follow">
<link rel="stylesheet" href="${v('assets/css/core.css')}">
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"${SITE_NAME}",
  "alternateName":"${TAGLINE}",
  "url":"${DOMAIN}/",
  "description":"${DESC}",
  "inLanguage":"zh-CN"
}
</script>
</head>
<body>

<header>
  <div class="wrap hd">
    <a class="brand" href="index.html"><span class="mk">${MARK}</span>${SITE_NAME}</a>
    <span class="badge hot">12.0.7 · Midnight S1</span>
    <div class="spacer"></div>
    <a class="homelink" href="#matrix">职业专精</a>
    <a class="homelink" href="#comps">竞技场组合</a>
    ${WISH_KEY ? '<button class="wishbtn" data-wish>✦ 许愿池</button>' : ''}
    <button class="tbtn" onclick="toggleTheme()" title="切换深浅色">◐</button>
  </div>
</header>

<div class="hero"><div class="wrap in">
  <div class="eyebrow">Patch 12.0.7 · MIDNIGHT 赛季一</div>
  <h1><span class="bn">${SITE_NAME}</span><span class="tl">${TAGLINE}</span></h1>
  <div class="sub">覆盖 13 职业 ${REG.stats.total} 个专精与 ${REG.compStats.total} 组竞技场组合。
    每个训练器提供情境判断题：<b>给定局面，选技能与目标，选完给出判断依据</b>。</div>
  <div class="cta">
    <a class="pri" href="#matrix">职业专精</a>
    <a class="sec" href="#comps">竞技场组合</a>
  </div>
  <div class="kpis">
    <div class="kpi"><div class="v">${trainerCount}</div><div class="k">已上线训练器</div></div>
    <div class="kpi"><div class="v">${totalQ}</div><div class="k">情境判断题</div></div>
    <div class="kpi"><div class="v">${REG.stats.done} <span class="of">/ ${REG.stats.total}</span></div>
      <div class="k">职业专精</div><div class="bar"><i style="width:${REG.stats.pct}%"></i></div></div>
    <div class="kpi"><div class="v">${REG.compStats.done} <span class="of">/ ${REG.compStats.total}</span></div>
      <div class="k">竞技场组合</div><div class="bar"><i style="width:${REG.compStats.pct}%"></i></div></div>
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

<div class="wrap" id="comps">
  <h2>竞技场组合</h2>
  <p class="lead">3v3 有公认命名的固定组合，2v2 按「输出 + 治疗」配对。组合名沿用英文原名——中文社区通用的也是这套缩写。
    组合训练器提供<strong>多视角</strong>：同一局面，切换查看每个位置的处置。</p>

  <div class="cpick">
    <div class="cph"><span class="cpl">点职业看能打哪些组合</span><span class="cpc" id="cpc">全部 33 组</span></div>
    <div class="cpr" id="cpick">
${REG.classes.map(c => '      <button class="cb" data-c="' + c.id + '" style="--cc:' + c.c + '" title="' + c.n + '">' +
  '<img src="' + IC(c.ic) + '" alt="' + c.n + '" loading="lazy"><span>' + c.n + '</span></button>').join('\n')}
    </div>
  </div>

${comps()}
  <div class="cempty" id="cempty" hidden>没有同时包含这些职业的组合。<b>3v3 最多三个职业，2v2 最多两个。</b></div>
  <p class="lead" style="margin-top:14px">组合清单来源：Icy Veins 各专精 Best Arena Compositions · wowmeta 组合梯队。</p>
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

${WISH_KEY ? `<div class="wrap" id="wish">
  <h2>许愿池</h2>
  <div class="wishcta">
    <div class="wt">
      <h3>想先看哪个专精或组合？</h3>
      <p>还有 ${REG.stats.total - REG.stats.done} 个专精、${REG.compStats.total - REG.compStats.done} 组组合没开工。说一声，排顺序的时候会看。</p>
    </div>
    <button class="btn" data-wish>投个愿望</button>
  </div>
</div>` : ''}

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
  ${SITE_NAME} · ${TAGLINE} · 对应补丁 ${REG.patch}（${REG.season}）· 最后更新 ${REG.updated}<br>
  技能名与图标来自 <a href="https://www.wowhead.com" target="_blank" rel="noopener">Wowhead</a> 官方数据接口 ·
  打法参考 <a href="https://www.icy-veins.com" target="_blank" rel="noopener">Icy Veins</a> ·
  <a href="https://murlok.io" target="_blank" rel="noopener">Murlok.io</a> 实测分布 ·
  <a href="https://www.method.gg" target="_blank" rel="noopener">Method</a><br>
  非官方粉丝内容，与 Blizzard Entertainment 无关。
</div></footer>

<script src="${v('assets/js/skdb.js')}"></script>
<script src="${v('data/registry.js')}"></script>
<script src="${v('assets/js/home.js')}"></script>
${WISH_KEY ? `<script>window.WISH_KEY='${WISH_KEY}';window.WISH_ISSUES='${ISSUES}';</script>\n<script src="${v('assets/js/wish.js')}"></script>` : ''}
</body>
</html>
`;

fs.writeFileSync(path.join(SITE, 'index.html'), html);
console.log('index.html  ' + (Buffer.byteLength(html) / 1024).toFixed(0) + 'KB' +
  '  ·  ' + REG.stats.total + ' 专精 / ' + REG.classes.length + ' 职业 / ' +
  trainerCount + ' 个训练器 / ' + totalQ + ' 题');
