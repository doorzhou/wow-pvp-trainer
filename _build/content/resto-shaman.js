/* 内容模块 · resto-shaman
   主线：恢复萨最贵的治疗不是把血抬回来，是让那一下根本没发生。
   事实：Icy Veins 12.1；天赋/属性：Murlok 四区 3v3 top50（2026-08-17 抓取）。
   技能名与图标：Wowhead 英中双语回验。 */
const { PATCH, SEASON } = require('../config.js');

const row = (title, sub, body, skills = []) => '<div class="row"><div class="h" onclick="tg(this)"><span class="icrow">' +
  skills.map(s => '<img class="ic" data-sk="' + s + '" style="width:20px;height:20px">').join('') +
  '</span><span class="t">' + title + '</span><span class="sub">' + sub + '</span><span class="ar">▸</span></div><div class="b">' + body + '</div></div>';

const classes = [
  ['warrior','战士','classicon_warrior','#C69B6D','看贴脸','他靠贴住目标制造持续压力。',['破胆怒吼'],'用<sk>战栗图腾</sk>预解恐惧，用定身图腾减掉追击时间。','<sk>灵魂链接图腾</sk>不是看到第一波伤害就交。','别在眩晕里才想起<sk>星界转移</sk>。','开局先把<sk>大地之盾</sk>给最可能被贴的人。'],
  ['paladin','圣骑士','classicon_paladin','#F48CBA','看免疫','他的关键牌是免疫与祝福。',['圣盾术'],'用<sk>净化术</sk>拆可驱散增益，别把打断浪费在不重要的读条上。','免疫期间不追血线，先守住队伍位置。','记住哪些祝福可驱散，哪些是免疫。','保留<sk>风剪</sk>给真正会改变血线的施法。'],
  ['hunter','猎人','classicon_hunter','#AAD372','看陷阱','他用控制治疗来换击杀窗。',['冰冻陷阱'],'用队友站位、图腾和位移减少控制链长度。','<sk>灵魂链接图腾</sk>要覆盖到被打的人，不要丢在空地。','别为了打<sk>妖术</sk>走进猎人的控制路线。','先摆<sk>大地之盾</sk>，再把自己放在不易接陷阱的位置。'],
  ['rogue','潜行者','classicon_rogue','#FFF468','看眩晕','他只在控制链完整时真正危险。',['肾击'],'眩晕前高血开<sk>星界转移</sk>，眩晕后靠<sk>自然守护者</sk>和队友。','被控时图腾仍在工作，提前放比事后追血更值。','不要在贼没有开窗时浪费<sk>灵魂链接图腾</sk>。','开门先判断他更可能打谁，把盾给那个人。'],
  ['priest','牧师','classicon_priest','#FFFFFF','看恐惧','恐惧与心控会把你从治疗位拿走。',['心灵尖啸'],'<sk>战栗图腾</sk>负责恐惧，<sk>风剪</sk>负责关键读条。','队友被心控时优先考虑<sk>净化术</sk>，别先花打断。','治疗不是每个读条都要断，只断会改变局面的那一个。','焦点盯住控制者，提前决定用风剪还是根基。'],
  ['deathknight','死亡骑士','classicon_deathknight','#C41E3A','看拉人','他会把队伍位置拖进近战中心。',['死亡之握'],'用定身图腾和幽魂之狼重建距离。','链接前确认三个人能站进同一范围。','被拉进场中先回位置，不要原地读治疗波。','开局别让队伍站成一团给他一次性抓住。'],
  ['shaman','萨满祭司','classicon_shaman','#0070DD','看图腾','镜像里先看地上，不先看血条。',['根基图腾'],'先清关键图腾，再交控制与伤害法术。','双方都有打断，谁先浪费<sk>风剪</sk>谁后手更难。','不要把法术喂给对面的根基。','先确认对面治疗带了哪些 PvP 图腾。'],
  ['mage','法师','classicon_mage','#3FC7EB','看施法','他的控制和爆发都依赖法术落地。',['变形术'],'<sk>根基图腾</sk>与<sk>风剪</sk>分开回答两次关键施法。','图腾吸到一个便宜法术不算赚，要吸关键控制。','不要在法师还没开时先交两张反法术牌。','焦点盯法师，先说好第一发用根基还是风剪。'],
  ['warlock','术士','classicon_warlock','#8788EE','看恐惧','他靠持续伤害和恐惧拖长局。',['恐惧'],'<sk>战栗图腾</sk>保控制链，<sk>风剪</sk>断关键恐惧。','恢复萨通常不先输法力，别被低效换血拖进慌乱交牌。','不要用<sk>妖术</sk>去断一次读条。','先把恐惧的回答留好，再谈进攻驱散。'],
  ['monk','武僧','classicon_monk','#00FF98','看爆发位','他靠贴身和短窗打穿目标。',['扫堂腿'],'用地缚/地缚类图腾减速，必要时链接分摊短窗。','星界转移要在眩晕前开。','别站在队友身边一起吃范围控制。','盾给最可能被贴的人，自己与队友错开站。'],
  ['druid','德鲁伊','classicon_druid','#FF7C0A','看预铺','恢复德靠提前铺持续治疗。',['旋风'],'<sk>净化术</sk>拆持续治疗，迫使他重新花动作。','别为了进攻驱散离开安全位置。','旋风要用风剪处理，不能指望根基解决所有范围与控制。','先判断他会用旋风进攻还是防守。'],
  ['demonhunter','恶魔猎手','classicon_demonhunter','#A330C9','看冲脸','他会快速跨过你的安全距离。',['恶魔变形'],'用静电力场/电能图腾改写他的站位。','链接放在队友能站住的位置，别追着移动目标丢。','被贴脸先移动，不要硬读治疗波。','开局保留一张位置图腾应对第一次冲锋。'],
  ['evoker','唤魔师','classicon_evoker','#33937F','看蓄力','他的关键治疗与伤害会明显蓄力。',['悬空'],'<sk>风剪</sk>优先断蓄力关键点，<sk>根基图腾</sk>挡后续法术。','不要两张反法术牌叠在同一发上。','他悬空时追不上不等于必须追，守住柱子即可。','先确认哪一个蓄力值得打断。'],
];
const match = { qlbl:['1 · 他怎么制造危险','2 · 你用哪张牌回答','3 · 最容易浪费什么','4 · 开局怎么站'], list: classes.map(x => ({
  id:x[0], n:x[1], ic:x[2], c:x[3], diff:x[4], one:x[5], cards:x[6],
  q:[[x[5],x[5]],[x[7],x[7]],[x[8],x[8]],[x[9],x[9]]],
  arena:x[7], duel:x[9],
})) };

const cases = [
  ['general','队友刚被集火，但对面的关键施法还在读条。','先用<sk>风剪</sk>或<sk>根基图腾</sk>让法术不落地。','立刻读<sk>治疗波</sk>追血。','恢复萨先阻断，再治疗。'],
  ['general','对面法师准备控制你，<sk>风剪</sk>和<sk>根基图腾</sk>都在。','先定一张回答这次控制，另一张留给后续伤害。','两张一起交，确保万无一失。','反法术牌要分轮次，不叠在同一发。'],
  ['general','队友正在持续承伤，身上没有<sk>大地之盾</sk>。','先把<sk>大地之盾</sk>移到正在挨打的人身上。','继续给原目标刷治疗。','大地之盾跟着集火目标走。'],
  ['general','你刚用了<sk>激流</sk>，获得潮汐奔涌层数。','用强化后的<sk>治疗波</sk>处理需要直接抬血的人。','先把层数空放掉再读治疗。','激流既是治疗，也是下一次读条的准备。'],
  ['general','对面只是持续消耗，没有开主爆发。','维持激流、盾和被动图腾，不交链接。','立刻丢<sk>灵魂链接图腾</sk>。','灵魂链接留给来不及靠施法追回的窗口。'],
  ['general','队友即将倒下，你没有时间完成读条，三个人站位能覆盖。','放<sk>灵魂链接图腾</sk>重分血量并减伤。','继续赌一次治疗波能读完。','链接解决的是没有施法时间的致命窗口。'],
  ['general','全队同时承受分散压力。','用<sk>治疗之潮图腾</sk>和被动治疗覆盖全队。','只盯一个人连续读单体治疗。','分散压力用群体被动治疗，不逐个追血。'],
  ['general','你被近战贴住，治疗波反复被打断。','用<sk>幽魂之狼</sk>和位置图腾拉开，再重新施法。','站着继续硬读。','恢复萨的治疗上限先取决于能不能站住。'],
  ['general','对面恐惧即将落地，<sk>战栗图腾</sk>可用。','提前放<sk>战栗图腾</sk>覆盖队友。','等恐惧结束后再补治疗。','破控图腾是预防牌，不是事后加血牌。'],
  ['general','治疗正在读关键大治疗，<sk>风剪</sk>与<sk>妖术</sk>都在。','用<sk>风剪</sk>打断，把妖术留给完整控制链。','用妖术只断这一次读条。','能用短打断解决，就别花长控。'],
  ['general','敌方身上有可驱散的进攻增益，队友血线稳定。','用<sk>净化术</sk>拆掉增益。','等他把增益打完再治疗。','一次进攻驱散可能省下整轮治疗。'],
  ['general','你准备读<sk>妖术</sk>，但队友范围伤害还在目标身上跳。','先叫停伤害或换控制对象。','直接读，反正妖术很长。','会被伤害打破的控制先处理队友伤害。'],
  ['general','对面开始爆发，你血量还高，但下一段控制是眩晕。','眩晕前开<sk>星界转移</sk>。','等被晕后再开。','不能在眩晕中使用的防守牌必须提前交。'],
  ['general','你身上的<sk>自然守护者</sk>刚被打出来。','接下来主动保守站位，别把它当没发生。','继续站前面用进攻控制。','被动保命触发就是风险警报。'],
  ['general','敌方有关键法术要落在队友身上，但这是范围法术。','不要指望<sk>根基图腾</sk>，改用打断、减伤或走位。','放根基图腾吸掉范围法术。','根基不重定向范围法术。'],
  ['general','队友已经跑出<sk>灵魂链接图腾</sk>范围。','先让队伍回到能覆盖的位置，或换别的防守。','原地放链接赌他会回来。','图腾效果先受位置约束，再谈强度。'],
  ['general','一轮结束，队伍血线稳定，你的法力也充足。','回到柱后，重置图腾与打断计划。','追上去继续用治疗换伤害。','恢复萨通常不先输法力，别主动把长局变成位置崩盘。'],
];
const badOpts = ['立刻把全部大牌一起交。','为了进攻走到对面柱后。','忽略图腾与打断，只追着血条按治疗。'];
const quiz=[];
cases.forEach((x,i)=>{
  const [t,s,good,bad,k]=x, d=(i%3)+1;
  quiz.push({id:'rs-a-'+(i+1),t,d,s,a:'现在最该做什么？',o:[good,bad,...badOpts.slice(0,2)],r:0,e:['正解。'+k,'这正是本题要避免的误判。','这会叠交资源。','这会把位置问题变成治疗问题。'],k});
  quiz.push({id:'rs-b-'+(i+1),t,d:((d)%3)+1,s:s+'<br><span class="dimtx">有人选择：「'+bad+'」</span>',a:'这个选择错在哪？',o:[k,'只是治疗数字不够。','只是装备属性不够。','没有错，只要反应快。'],r:0,e:['正解。'+k,'问题发生在治疗之前。','属性不能修复错误时机。','反应快也救不了错误资源。'],k});
  quiz.push({id:'rs-c-'+(i+1),t,d:((d+1)%3)+1,s,a:'这一题最该记住哪条？',o:[k,'血越低越应该把所有牌一起交。','恢复萨只负责治疗，不负责打断和图腾。','任何控制都用妖术解决。'],r:0,e:['正解。','叠交会让下一轮没有答案。','公开攻略明确把阻断伤害列为核心职责。','妖术是长控，不是通用打断。'],k});
});

module.exports = {
  meta:{
    title:'恢复萨 PvP 判断训练器 · 魔兽世界 ' + PATCH + ' Midnight 赛季一',
    desc:'魔兽世界正式服 ' + PATCH + ' 恢复萨满 PvP 竞技场判断训练。含 51 道情境题、13 职业对局、英雄/PvP 天赋 top50 实测与属性优先级。',
    keywords:'恢复萨,奶萨,萨满祭司,治疗,PVP,竞技场,魔兽世界,'+PATCH+',restoration shaman,arena',
    footer:'Patch '+PATCH+' · '+SEASON+'。技能中文名与图标来自 Wowhead 官方接口双语回验；打法参考 <a href="https://www.icy-veins.com/wow/restoration-shaman-pvp-rotation-and-playstyle" target="_blank">Icy Veins 12.1</a>；天赋与属性来自 Murlok.io 四区 3v3 top50。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>', jsonld:null,
  },
  nav:[{s:'s1',label:'骨架'},{s:'s2',label:'通用手法'},{s:'s3',label:'分职业'},{s:'s4',label:'判断训练'},{s:'s5',label:'赛前速查'}],
  sections:{
    s1:'<div class="wrap"><div class="thesis"><div class="lbl">这版本唯一要记住的一句</div><div class="big">恢复萨最贵的治疗不是把血抬回来，<br>是用图腾和打断让<b>那一下根本没发生</b>。</div></div><h2>为什么</h2><div class="rows">'+
      row('治疗只是第二层答案','第一层是阻断','<p>Icy Veins 对恢复萨职责的原话：除保持队伍存活外，要用工具<b>干扰并阻止即将落地的法术或伤害</b>。<sk>风剪</sk>、<sk>根基图腾</sk>、<sk>战栗图腾</sk>各回答一种问题。</p>',['风剪','根基图腾','战栗图腾'])+
      row('你的牌在地上','图腾先受位置约束','<p><sk>灵魂链接图腾</sk>再强，队友不在范围里也是零。恢复萨每次交牌前先问：<b>人站得进来吗，图腾活得下来吗？</b></p>',['灵魂链接图腾'])+
      row('法力通常不是第一死因','位置和时机先崩','<p>公开攻略明确写着恢复萨很少因为没法力输掉比赛。真正的危险是被贴住后读不出治疗、被眩晕前没开减伤、把两张反法术牌交在同一发上。</p>')+
      '</div><h2>该不该交大牌</h2><div class="gobox"><div class="checks" id="checks"></div><div class="verdict" id="verdict"></div></div><h2>三个时钟</h2><div class="rows" id="clocks"></div><h2>本版定盘</h2><div class="rows" id="setup"></div></div>',
    s2:'<div class="wrap"><div class="rows" id="general"></div></div>',
    s3:'<div class="wrap"><p class="lead">四问对所有敌人是同一套。</p><div class="split"><div class="sidecol"><div class="cls-grid" id="clsGrid"></div><div class="modebar" id="modebar"><button class="on" data-m="arena">竞技场</button><button data-m="duel">单挑</button></div></div><div id="clsDetail"></div></div></div>',
    s4:'<div class="wrap"><div class="statbar"><div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div><div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div><div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div><div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div></div><div class="qtop"><select id="fCat"><option value="all">全部范围</option></select><select id="fDiff"><option value="all">全部难度</option><option value="1">基础 · 机制</option><option value="2">进阶 · 时机</option><option value="3">高阶 · 权衡</option></select><button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button><button class="btn ghost" onclick="startQuiz(true)">只练错题</button><button class="btn ghost" onclick="resetStats()">清空记录</button></div><div id="quizArea"></div></div>',
    s5:'<div class="wrap"><div class="sheet" id="sheet"></div></div>',
  },
  fragments:{
    clocks: row('反法术时钟','风剪与根基分两轮用','<p><sk>风剪</sk>打断正在读的关键法术；<sk>根基图腾</sk>预判下一发针对性有害法术。<b>两张叠在同一发上，下一发就没人管。</b></p>',['风剪','根基图腾'])+
      row('图腾时钟','位置决定牌有没有效果','<p>链接、治疗之潮、战栗都依赖队友站位。图腾落下前先确认覆盖；落下后看它有没有被打掉。</p>',['灵魂链接图腾','治疗之潮图腾','战栗图腾'])+
      row('眩晕时钟','星界转移不能等到被晕','<p><sk>星界转移</sk>要在对面进攻牌亮起、眩晕落下之前用。<sk>自然守护者</sk>触发后则说明下一轮必须保守。</p>',['星界转移']),
    setup: row('英雄天赋：图腾师 Totemic','36/50，先知 Farseer 14/50','<p>top50 中图腾师占 72%。它围绕 Surging Totem 与各类治疗图腾运作，<b>把恢复萨「牌在地上」的特征进一步放大</b>。另一条并非没人用，不写成唯一解。</p>')+
      row('PvP 天赋：只有根基接近定盘','其余两格有真实分歧','<p><sk>根基图腾</sk> <b>48/50</b>；Rain Dance 30/50；Lightning Lasso 26/50；Static Field Totem 23/50；Storm Conduit 17/50；<sk>掘地三尺</sk>只有 2/50。<b>除了根基，另外两格必须按对面阵容选。</b></p>',['根基图腾','掘地三尺']),
    general: row('01 · 开门先摆三样','盾、激流、焦点','<p><sk>大地之盾</sk>给最可能被打的人，<sk>激流</sk>开始滚动治疗，焦点盯住最可能控制你的施法者。</p>',['大地之盾','激流'])+
      row('02 · 先阻断，再追血','恢复萨的核心顺序','<p>关键法术还在路上时，<sk>风剪</sk>或<sk>根基图腾</sk>比一次治疗波更值。法术没落地，就没有那笔治疗账。</p>',['风剪','根基图腾','治疗波'])+
      row('03 · 激流不是小治疗','它给下一次读条做准备','<p><sk>激流</sk>产生潮汐奔涌，缩短下一次<sk>治疗波</sk>的施法。持续压力里按时用激流，爆发来时才有快读条。</p>',['激流','治疗波'])+
      row('04 · 链接只处理来不及读条的危险','最后手段，不是第一张','<p>单靠正常施法已经追不回来、且队友站得进范围时，再用<sk>灵魂链接图腾</sk>重分血量。</p>',['灵魂链接图腾'])+
      row('05 · 妖术不当打断用','能用风剪就别花长控','<p><sk>妖术</sk>用来把一个人踢出整轮战斗；打断一次治疗是<sk>风剪</sk>的活。</p>',['妖术','风剪'])+
      row('06 · 被贴先走，不硬读','幽魂之狼是治疗工具','<p><sk>幽魂之狼</sk>与位置图腾换出安全距离。读不出的治疗波治疗量是零。</p>',['幽魂之狼'])+
      row('07 · 图腾落地后还要看一眼','被打掉等于没交','<p>重要图腾生命值低。对面会转火图腾；你也要准备投射、换位或用下一张牌。</p>'),
    sheet:'<div class="sc wide"><h4>三条铁律</h4><div class="big3"><div class="b3"><div class="n">1</div><div><div class="tt">先阻断，再治疗</div><div class="dd">风剪和根基让伤害不发生，比事后追血更值。</div></div></div><div class="b3"><div class="n">2</div><div><div class="tt">图腾先看位置</div><div class="dd">队友不在范围、图腾被打掉，强度都是零。</div></div></div><div class="b3"><div class="n">3</div><div><div class="tt">反法术牌分开交</div><div class="dd">风剪与根基回答两发关键法术，不叠在同一发。</div></div></div></div></div>',
  },
  sk:{'激流':'spell_nature_riptide','大地之盾':'spell_nature_skinofearth','治疗波':'spell_nature_healingwavelesser','治疗之泉图腾':'inv_spear_04','灵魂链接图腾':'spell_shaman_spiritlink','治疗之潮图腾':'ability_shaman_healingtide','生命释放':'spell_shaman_unleashweapon_life','风剪':'spell_nature_cyclone','根基图腾':'spell_nature_groundingtotem','战栗图腾':'spell_nature_tremortotem','妖术':'spell_shaman_hex','净化术':'spell_nature_purge','电能图腾':'spell_nature_brilliance','幽魂之狼':'spell_nature_spiritwolf','星界转移':'ability_shaman_astralshift','掘地三尺':'pvp_burrow'},
  enemy:[], own:null,
  cond:[
    {k:'real',t:'对面真的开了主爆发',d:'不是普通消耗，也不是抬手骗牌'},
    {k:'range',t:'队友站得进图腾范围',d:'链接与治疗图腾先受位置约束'},
    {k:'stop',t:'风剪与根基都解决不了',d:'能阻断就先阻断，不先交治疗大牌'},
    {k:'cast',t:'普通施法已经来不及',d:'还有时间读治疗波就不急着动链接'},
  ],
  verdicts:[
    {cls:'bad',html:'<div class="vi">◇</div><div><h3>别交大牌</h3><p>先用打断、根基或位置把危险减掉。</p><!--MISSING--></div>'},
    {cls:'bad',html:'<div class="vi">◇</div><div><h3>条件太少</h3><p>大牌会被普通压力骗走。</p><!--MISSING--></div>'},
    {cls:'mid',html:'<div class="vi">◈</div><div><h3>先补位置</h3><p>让队友站进范围，再决定是否交图腾。</p><!--MISSING--></div>'},
    {cls:'ok',html:'<div class="vi">◆</div><div><h3>可以交</h3><p>阻断手段已用完，普通施法也来不及。</p><!--MISSING--></div>'},
    {cls:'ok',html:'<div class="vi">★</div><div><h3>现在就是大牌窗口</h3><p>位置、危险与时机都成立，别再贪读条。</p><!--MISSING--></div>'},
  ],
  steps:null, match, roles:null, memb:null, play:null, quiz,
};
