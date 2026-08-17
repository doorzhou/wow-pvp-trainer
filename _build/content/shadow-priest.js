/* 内容模块 · shadow-priest
   主线：暗牧的爆发资源不是疯狂值，是自由施法时间。
   事实：Icy Veins 12.1；天赋/属性：Murlok 四区 3v3 top50（2026-08-17 抓取）。
   技能名与图标：Wowhead 英中双语回验；未核到简中的新技能保留英文。 */
const { PATCH, SEASON } = require('../config.js');
const row=(title,sub,body,skills=[])=>'<div class="row"><div class="h" onclick="tg(this)"><span class="icrow">'+skills.map(s=>'<img class="ic" data-sk="'+s+'" style="width:20px;height:20px">').join('')+'</span><span class="t">'+title+'</span><span class="sub">'+sub+'</span><span class="ar">▸</span></div><div class="b">'+body+'</div></div>';

const classes=[
 ['warrior','战士','classicon_warrior','#C69B6D','看贴身','他让你很难完整施法。',['剑在人在'],'先用<sk>渐隐术</sk>、恐惧与队友减压，骗掉打断后再读条。','别把<sk>消散</sk>交给普通贴脸压力。','DoT 不断比硬读完整爆发更重要。','开局站在队友能帮你拆贴身的位置。'],
 ['paladin','圣骑士','classicon_paladin','#F48CBA','看免疫','他的免疫会直接取消击杀。',['圣盾术'],'保留<sk>群体驱散</sk>处理关键免疫。','没法安全读群驱就先换目标或控治疗。','不要把整套爆发打进免疫。','开局先确认谁负责保护群驱读条。'],
 ['hunter','猎人','classicon_hunter','#AAD372','看射程','他能在你难以读条时持续压你。',['灵龟守护'],'保持盾和 DoT，用恐惧逼开近身宠物与压力。','别为追猎人走出治疗视野。','龟壳期间铺别的目标，不硬结算。','站柱边，给自己保留打断后仍能做事的位置。'],
 ['rogue','潜行者','classicon_rogue','#FFF468','看眩晕','他靠控制链让你没有操作时间。',['肾击'],'<sk>消散</sk>可在眩晕中用，留给治疗被控的真杀窗。','<sk>渐隐术</sk>先处理转火，消散别交太早。','被控前给队友盾或报需要拆火。','开门先判断自己是否是第一目标。'],
 ['priest','牧师','classicon_priest','#FFFFFF','看驱散','镜像里 DoT 与驱散互相消耗。',['群体驱散'],'<sk>沉默</sk>放在爆发窗，阻止对面驱散你的 DoT。','别在没有伤害可结算时先交沉默。','谁先让对面治疗自由驱散，谁先失去压力。','开局先决定沉默与恐惧的接法。'],
 ['deathknight','死亡骑士','classicon_deathknight','#C41E3A','看拉人','他会把你从柱后拖进近战中心。',['死亡之握'],'被拉后先用恐惧和渐隐重建位置。','不要原地硬读虚空洪流。','DoT 可以移动时维持，长读条等打断空窗。','与队友错开，别让一次拉人带走整队位置。'],
 ['shaman','萨满祭司','classicon_shaman','#0070DD','看打断','风剪与根基会连续拆你的法术。',['根基图腾'],'先用便宜法术清根基，再骗风剪。','别把<sk>沉默</sk>交给图腾。','两道门都过了再开自由施法窗口。','开局把萨满设焦点，盯住打断和根基。'],
 ['mage','法师','classicon_mage','#3FC7EB','看反制','他会同时控制你和打断暗影法术。',['法术反制'],'假读骗打断，DoT 不断；免疫出现时准备群驱。','打断空窗才读长引导。','别因追一次群驱暴露在全场控制里。','站在柱边但别和治疗重叠吃控制。'],
 ['warlock','术士','classicon_warlock','#8788EE','看铺场','双方都靠持续伤害压治疗。',['恐惧'],'用<sk>沉默</sk>卡治疗驱散，保持多目标 DoT。','别把整局打成两个施法者原地换血。','被打断时用盾与工具继续产疯狂值。','先决定谁负责打断对面恐惧。'],
 ['monk','武僧','classicon_monk','#00FF98','看短窗','他能用眩晕把你固定在爆发里。',['扫堂腿'],'渐隐先吃第一段，消散留给完整爆发。','双近战贴你时 Cascading Horrors 才更有价值。','别为了读条留在队友救不到的位置。','站位让队友能拆贴，同时不一起吃范围控。'],
 ['druid','德鲁伊','classicon_druid','#FF7C0A','看旋风','旋风会冻结你或队友的行动与治疗。',['旋风'],'用<sk>沉默</sk>或队友打断保护自己的自由施法窗。','DoT 被驱散后优先补，不急着先花疯狂值。','恢复德形态会躲变形但躲不了沉默。','开局盯住他何时离柱读旋风。'],
 ['demonhunter','恶魔猎手','classicon_demonhunter','#A330C9','看冲脸','他能快速到你脸上并打断施法。',['恶魔变形'],'渐隐、恐惧、队友拆火分三层用。','消散能在控制中使用，留到最后层。','被打断后用盾、驱散等非暗影工具继续做事。','开局别站在他一次位移就能同时压到治疗的位置。'],
 ['evoker','唤魔师','classicon_evoker','#33937F','看蓄力','他的关键输出与治疗有明显蓄力。',['悬空'],'<sk>沉默</sk>卡关键蓄力或治疗驱散。','别在悬空期间追到坏位置。','DoT 多目标维持，让他为每次驱散付动作。','先决定哪一个蓄力值得用沉默。'],
];
const match={qlbl:['1 · 他怎么限制你','2 · 你用哪张牌回答','3 · 最容易浪费什么','4 · 开局怎么站'],list:classes.map(x=>({id:x[0],n:x[1],ic:x[2],c:x[3],diff:x[4],one:x[5],cards:x[6],q:[[x[5],x[5]],[x[7],x[7]],[x[8],x[8]],[x[9],x[9]]],arena:x[7],duel:x[9]}))};

const cases=[
 ['general','三名敌人中只有主目标有 DoT，你的疯狂值接近可花。','先把<sk>吸血鬼之触</sk>与<sk>暗言术：痛</sk>铺到更多目标。','立刻把疯狂值全花在主目标。','暗牧先铺压力面，再结算资源。'],
 ['general','DoT 已铺满，但对面两个打断都在。','先假读骗掉打断，再进入自由施法窗口。','原地硬读<sk>虚空洪流</sk>。','暗牧的爆发资源先是自由施法时间。'],
 ['general','对面治疗没有被控，且驱散可用。','先用<sk>沉默</sk>或控制链锁住治疗，再花疯狂值。','直接打爆发，赌他不驱散。','沉默让 DoT 有时间兑现。'],
 ['general','队友开启主爆发，你有<sk>能量灌注</sk>。','把能量灌注给队友并借双生天赋同步自己。','只给自己，不管队友窗口。','团队爆发对齐比个人独占增益更值。'],
 ['general','你被暗影系打断，暂时不能施放暗影法术。','用<sk>真言术：盾</sk>、驱散或位移继续做事。','继续按暗影法术等锁系结束。','被锁系不等于整个人停机。'],
 ['general','对面双近战同时贴你，<sk>渐隐术</sk>和<sk>消散</sk>都在。','先用渐隐与队友拆火，消散留给真杀窗。','第一时间消散，把普通压力全吃掉。','暗牧防守要分层，不把最后一张先交。'],
 ['general','治疗被长控，对面开主爆发，你还在眩晕里。','使用可在眩晕中开启的<sk>消散</sk>。','等眩晕结束再看。','消散的价值之一就是在失去操作时自救。'],
 ['general','队友被集火，你暂时能自由施法。','开<sk>吸血鬼的拥抱</sk>并用伤害稳定全队。','只顾自己的伤害排行。','暗牧是能把伤害转换成团队生存的 DPS。'],
 ['general','队友被拉出治疗视野，你的<sk>信仰飞跃</sk>可用。','把队友拉回安全位置。','给他补一个 DoT 继续输出。','位置修复有时比补伤害更能赢。'],
 ['general','法师开了寒冰屏障，击杀只差最后一段。','在安全施法条件下用<sk>群体驱散</sk>移除免疫。','把爆发继续打在免疫上。','群驱的价值是把本来不能杀的窗口重新打开。'],
 ['general','对面治疗已经交解控，你的沉默和恐惧都在。','沉默起手，再用<sk>心灵尖啸</sk>接控制。','两张控制同时交。','控制链是接力，不是叠加。'],
 ['general','你的 DoT 快到期，心灵震爆触发了瞬发机会。','先避免 DoT 断档，再用瞬发机会补资源。','为了瞬发完全放弃 DoT。','持续压力的地基优先于一次便宜伤害。'],
 ['general','对面刚驱散你的 DoT，Tentacle Slam 可用。','用 Tentacle Slam 快速重新铺回关键 DoT。','重新站桩逐个长读条。','被驱散后的第一目标是恢复覆盖面。'],
 ['general','你已进入自由施法窗口，但目标没有 DoT。','先补 DoT，再开<sk>虚空洪流</sk>与结算技能。','直接引导大招。','自由施法时间要先保证后续伤害有地基。'],
 ['general','主目标已低血，<sk>暗言术：灭</sk>可用，但治疗仍能施法。','先控治疗，再用灭收尾。','只盯血条按灭，不管治疗。','斩杀也要发生在治疗不能回答的窗口。'],
 ['general','全队血线稳定，对面没有主爆发，你的消散可用。','保留消散，继续铺 DoT 与骗打断。','为了免疫打断主动消散。','防守牌不替代施法技巧。'],
 ['general','对面开始转火你，但伤害还没真正落下。','先用<sk>渐隐术</sk>和盾处理转火信号。','等到低血再把所有防守一起交。','渐隐是第一层，消散是最后层。'],
];
const bads=['把所有爆发立刻打进当前目标。','追出治疗视野继续读条。','把消散和渐隐同时交。'];
const quiz=[];cases.forEach((x,i)=>{const[t,s,good,bad,k]=x,d=(i%3)+1;quiz.push({id:'sp-a-'+(i+1),t,d,s,a:'现在最该做什么？',o:[good,bad,...bads.slice(0,2)],r:0,e:['正解。'+k,'这会忽略本题的先决条件。','这会把位置风险放大。','这会叠交两层资源。'],k});quiz.push({id:'sp-b-'+(i+1),t,d:((d)%3)+1,s:s+'<br><span class="dimtx">有人选择：「'+bad+'」</span>',a:'这个选择错在哪？',o:[k,'只是伤害数字不够。','只是装备不够。','没有错，反应快就行。'],r:0,e:['正解。'+k,'问题在时机，不在数字。','装备不能修复资源顺序。','错误前提下反应越快，浪费越快。'],k});quiz.push({id:'sp-c-'+(i+1),t,d:((d+1)%3)+1,s,a:'这一题最该记住哪条？',o:[k,'暗牧只负责伤害。','所有控制同时交最稳。','DoT 可以等爆发后再补。'],r:0,e:['正解。','公开攻略明确暗牧还承担团队生存工具。','控制叠交会浪费时长。','DoT 是资源和爆发的地基。'],k});});

module.exports={
 meta:{title:'暗影牧师 PvP 判断训练器 · 魔兽世界 '+PATCH+' Midnight 赛季一',desc:'魔兽世界正式服 '+PATCH+' 暗影牧师 PvP 竞技场判断训练。含 51 道情境题、13 职业对局、英雄/PvP 天赋 top50 实测与属性优先级。',keywords:'暗影牧师,暗牧,牧师,PVP,竞技场,魔兽世界,'+PATCH+',shadow priest,arena',footer:'Patch '+PATCH+' · '+SEASON+'。技能中文名与图标来自 Wowhead 官方接口双语回验；打法与 RPS 收录参考 <a href="https://www.icy-veins.com/wow/shadow-priest-pvp-rotation-and-playstyle" target="_blank">Icy Veins 12.1</a>；天赋与属性来自 Murlok.io 四区 3v3 top50。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',jsonld:null},
 nav:[{s:'s1',label:'骨架'},{s:'s2',label:'通用手法'},{s:'s3',label:'分职业'},{s:'s4',label:'判断训练'},{s:'s5',label:'赛前速查'}],
 sections:{
  s1:'<div class="wrap"><div class="thesis"><div class="lbl">这版本唯一要记住的一句</div><div class="big">暗牧的爆发资源不是疯狂值，<br>是<b>自由施法时间</b>。</div></div><h2>为什么</h2><div class="rows">'+row('大多数队伍会先打你','活下来不是副业','<p>Icy Veins 对暗牧的第一句角色描述是：大多数时间你都在尝试活下来。<b>骗打断、分层交防守、让队友拆火</b>，目的都是买到能施法的几秒。</p>',['渐隐术','消散'])+row('有空档才有压力','DoT、资源、爆发是三层','<p>先用<sk>吸血鬼之触</sk>与<sk>暗言术：痛</sk>铺面，再产生疯狂值，最后在治疗被控时结算。任何一层缺失，爆发都只是按钮亮了。</p>',['吸血鬼之触','暗言术：痛'])+row('你还是半个支援位','盾、拉人、群驱会直接改写局面','<p><sk>真言术：盾</sk>、<sk>信仰飞跃</sk>、<sk>群体驱散</sk>是多数输出没有的工具。<b>只算自己的伤害，会把暗牧最稀缺的价值丢掉。</b></p>',['真言术：盾','信仰飞跃','群体驱散'])+'</div><h2>该不该开爆发</h2><div class="gobox"><div class="checks" id="checks"></div><div class="verdict" id="verdict"></div></div><h2>三个时钟</h2><div class="rows" id="clocks"></div><h2>本版定盘</h2><div class="rows" id="setup"></div></div>',
  s2:'<div class="wrap"><div class="rows" id="general"></div></div>',
  s3:'<div class="wrap"><p class="lead">四问对所有敌人是同一套。</p><div class="split"><div class="sidecol"><div class="cls-grid" id="clsGrid"></div><div class="modebar" id="modebar"><button class="on" data-m="arena">竞技场</button><button data-m="duel">单挑</button></div></div><div id="clsDetail"></div></div></div>',
  s4:'<div class="wrap"><div class="statbar"><div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div><div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div><div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div><div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div></div><div class="qtop"><select id="fCat"><option value="all">全部范围</option></select><select id="fDiff"><option value="all">全部难度</option><option value="1">基础 · 机制</option><option value="2">进阶 · 时机</option><option value="3">高阶 · 权衡</option></select><button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button><button class="btn ghost" onclick="startQuiz(true)">只练错题</button><button class="btn ghost" onclick="resetStats()">清空记录</button></div><div id="quizArea"></div></div>',
  s5:'<div class="wrap"><div class="sheet" id="sheet"></div></div>'},
 fragments:{
  clocks:row('DoT 时钟','覆盖面决定资源速度','<p><sk>吸血鬼之触</sk>与<sk>暗言术：痛</sk>尽量维持在多个敌人身上。断档不仅少伤害，也少疯狂值和后续触发。</p>',['吸血鬼之触','暗言术：痛'])+row('打断时钟','先骗掉，再读真的','<p>大部分队伍会集火暗牧。长引导前先假读骗打断；被锁暗影系时用盾、驱散、拉人继续做事。</p>',['真言术：盾'])+row('防守时钟','渐隐先，消散后','<p><sk>渐隐术</sk>处理转火信号；<sk>绝望祷言</sk>处理血量；<sk>消散</sk>留给治疗被控的真杀窗，而且能在眩晕中开启。</p>',['渐隐术','绝望祷言','消散']),
  setup:row('英雄天赋：虚空编织者 Voidweaver','32/50，执政官 Archon 18/50','<p>64% 选择虚空编织者，36% 选择执政官。<b>有主流，但远不是唯一解。</b>前者把自由施法窗集中到<sk>虚空洪流</sk>与裂隙；后者围绕 Halo。</p>',['虚空洪流'])+row('PvP 天赋：三格接近定盘','Phase Shift 45 · Driven to Madness 44 · Psyfiend 44','<p>三项合计占全部选择的 89%。Cascading Horrors 14/50，主要在双近战贴身时提供额外控制与伤害。</p>'),
  general:row('01 · 开门先铺面','不是先找爆发按钮','<p><sk>吸血鬼之触</sk>与<sk>暗言术：痛</sk>尽量覆盖多人。暗牧的资源和后续压力都从这里长出来。</p>',['吸血鬼之触','暗言术：痛'])+row('02 · 假读骗打断','自由施法时间要自己买','<p>先起手再取消，逼对面把打断交在空气上。成功后再读<sk>虚空洪流</sk>或关键施法。</p>',['虚空洪流'])+row('03 · 治疗能驱散时不结算','先沉默，再花资源','<p><sk>沉默</sk>让治疗无法驱散 DoT；再接<sk>心灵尖啸</sk>延长控制。两张不同时交。</p>',['沉默','心灵尖啸'])+row('04 · 被锁暗影系也别停机','盾、驱散、拉人都还能用','<p><sk>真言术：盾</sk>还能产疯狂值，<sk>信仰飞跃</sk>能修队友位置，<sk>群体驱散</sk>能处理关键效果。</p>',['真言术：盾','信仰飞跃','群体驱散'])+row('05 · 防守分三层','渐隐 → 血量牌 → 消散','<p>第一层先躲或减掉转火；最后一层才是<sk>消散</sk>。第一时间消散会让下一轮没有答案。</p>',['渐隐术','消散'])+row('06 · 伤害也能救人','吸血鬼的拥抱只在能自由施法时开','<p>队友承压且你能持续输出时，<sk>吸血鬼的拥抱</sk>能快速稳定全队。被压得读不了条时开，收益接近零。</p>',['吸血鬼的拥抱'])+row('07 · 群驱先看能不能安全读完','不是看到免疫就冲过去','<p>法师冰箱、骑士圣盾可以群驱，但读条位置不安全时硬读只会把自己送进控制链。</p>',['群体驱散']),
  sheet:'<div class="sc wide"><h4>三条铁律</h4><div class="big3"><div class="b3"><div class="n">1</div><div><div class="tt">先买自由施法，再开爆发</div><div class="dd">疯狂值亮了不代表窗口成立。</div></div></div><div class="b3"><div class="n">2</div><div><div class="tt">DoT 先铺面，再结算</div><div class="dd">覆盖面是资源、压力与触发的地基。</div></div></div><div class="b3"><div class="n">3</div><div><div class="tt">渐隐先，消散后</div><div class="dd">把普通转火与真杀窗分开处理。</div></div></div></div></div>'},
 sk:{'吸血鬼之触':'spell_holy_stoicism','暗言术：痛':'spell_shadow_shadowwordpain','心灵震爆':'spell_shadow_unholyfrenzy','精神鞭笞':'spell_shadow_siphonmana','消散':'spell_shadow_dispersion','真言术：盾':'spell_holy_powerwordshield','信仰飞跃':'priest_spell_leapoffaith_a','群体驱散':'spell_arcane_massdispel','沉默':'ability_priest_silence','心灵尖啸':'spell_shadow_psychicscream','能量灌注':'spell_holy_powerinfusion','吸血鬼的拥抱':'spell_shadow_unsummonbuilding','渐隐术':'spell_magic_lesserinvisibilty','绝望祷言':'spell_holy_testoffaith','暗言术：灭':'spell_shadow_demonicfortitude','灵能魔':'spell_priest_psyfiend','虚空洪流':'spell_priest_voidsear'},
 enemy:[],own:null,
 cond:[{k:'dot',t:'DoT 已铺到主要目标',d:'没有覆盖面就没有资源与后续压力'},{k:'free',t:'对面打断已经被骗掉',d:'真正的爆发技能需要自由施法时间'},{k:'cc',t:'敌方治疗无法驱散',d:'沉默或控制链已经落下'},{k:'safe',t:'你不需要立刻交防守',d:'自己正在真杀窗里就先活下来'}],
 verdicts:[{cls:'bad',html:'<div class="vi">◇</div><div><h3>别开，先活下来并铺 DoT</h3><p>资源亮了也不是窗口。</p><!--MISSING--></div>'},{cls:'bad',html:'<div class="vi">◇</div><div><h3>条件太少</h3><p>先骗打断或控治疗。</p><!--MISSING--></div>'},{cls:'mid',html:'<div class="vi">◈</div><div><h3>先补地基</h3><p>DoT、打断与治疗控制至少补上一项。</p><!--MISSING--></div>'},{cls:'ok',html:'<div class="vi">◆</div><div><h3>可以开</h3><p>把伤害压进治疗无法回答的窗口。</p><!--MISSING--></div>'},{cls:'ok',html:'<div class="vi">★</div><div><h3>完整自由施法窗</h3><p>铺面、打断、控制与生存都成立。</p><!--MISSING--></div>'}],
 steps:null,match,roles:null,memb:null,play:null,quiz};
