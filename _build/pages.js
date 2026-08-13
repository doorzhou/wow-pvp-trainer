/* 每页配置 —— 加一个专精就在 PAGES 里加一条 */
const { PATCH } = require('./config.js');
const PAGES = [
  {
    file: 'subtlety-rogue', kind: 'spec', cls: 'rogue', spec: 'subtlety',
    h1: '敏锐贼 PvP 判断训练器', short: '敏锐贼',
    icon: 'ability_stealth', tier: 'S', color: '#FFF468',
    crumb: ['潜行者', '敏锐'], store: 'banyeSubPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在看"条件"，不是在背技能。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把"该不该开"的四条件过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>诡术师 Trickster</b> —— top50 三对三里 50 人全用，死亡追猎者 <b>0 人</b>。这不是推荐，是唯一解。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<sk>烟雾弹</sk> —— <b>50/50</b>，没有例外' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Preemptive Maneuver</b>（45/50）—— 近乎必带<br>' +
            '<sk>卸除武装</sk>（39/50）—— <b>12.1 从 29 涨到 39</b>，现在是明显优先<br>' +
            '<sk>偷天换日</sk>（12/50）—— <b>12.1 从 23 跌到 12</b>，已经不是主流<br>' +
            '<span class="dimtx">三者占了这两格全部选择的 96%。</span>'
        },
      ],
      note: '「Preemptive Maneuver」暂无官方简体中文名。' +
        '<b>12.1 职业树上那个二选一格整个翻面了</b>：<sk>嫁祸诀窍</sk>从 25 人跌到 0 人，' +
        '同格的<sk>劈头棒击</sk>从 0 人涨到 34 人。' +
        '<sk>偷天换日</sk>跟着从 23 跌到 12——它的加成挂在前者身上，前者没人点，它自然失去意义。',
      imp: {
        str: 'CUQAphyM11FofNMFa1K3vFEDUCgZ2mBAAAAAmtZmZZiZZbmxMjZgZmZmlxsNmZmllhBzMGwMGAAAAzwMsYWmxsMDjFG2mZbahWmNmZYmZmBzYA',
        who: 'Stunion', where: 'US · Stormrage', rating: '3v3 3220', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>下面 8 个分歧格里，有多数派的 7 格他全部一致（7/7）</b>。' +
          '（第 8 格 <b>Nimble Fingers</b> 25/50 正好对半，本来就没有多数派。）' +
          '<b>粘进游戏当起点，那 8 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 41 格 + 英雄天赋 28 格，共 <b>113 格</b>。' +
          'top50 的实测分布里，<b>105 格是定死的</b>——要么人人都点，要么没人点。' +
          '真正需要你判断的只有下面 <b>8 格</b>。',
        picks: [
          {
            n: 'Superior Mixture', tree: '职业', u: 41,
            b: '致残药膏的减速再多 10%。' +
              '<br><b>这格 12.1 之前是 88%、几乎算定死的，现在掉到 82% 进了分歧区。</b>' +
              '它管的是黏人，不是打伤害——对面有位移或解控能挣脱你的减速时，' +
              '这一点换成别的更实在。'
          },
          {
            n: 'Weaponmaster', tree: '专精', u: 38,
            b: '暗影打击与暗殁之刺有 <b>20% 几率</b>产生影分身，复制一次攻击造成 50% 伤害。' +
              '<br>纯伤害，不看对面。<b>但它是随机的</b>——敏锐是攒一个窗口一次结账的打法，' +
              '20% 的触发在单个窗口里可能一次都不来。不点的那 12 人是把这一点换成了稳定的东西。'
          },
          {
            n: '毒刃', en: 'Shiv', tree: '职业', u: 36,
            b: '副手攻击，<b>驱散目标身上所有激怒效果</b>，并施加浓缩的非致命药膏。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面带激怒类增益 —— 驱掉就是白赚一整个窗口；' +
              '对面没有激怒，这一点是空的。开局看到对面阵容就能定。'
          },
          {
            n: 'Unbreakable Stride', tree: '职业', u: 32,
            b: '减速效果的持续时间缩短 30%。' +
              '<br>敏锐要靠反复进出打窗口，<b>被黏住就等于开不了</b>。' +
              '对面减速手段密集时点它；对面靠硬控而不是减速的，这一点收益小。'
          },
          {
            n: '劈头棒击', en: 'Blackjack', tree: '职业', u: 34,
            b: '致盲或闷棍的效果在敌人身上结束后，该敌人造成的伤害和治疗效果降低 30%，持续 6 秒。' +
              '<br><b>这一格 12.1 彻底翻了面</b>：它和<sk>嫁祸诀窍</sk>共用一格、二选一，' +
              '上个版本 25 人选那个、没人选它，这个版本反过来。' +
              '<br>它把控制的收尾接了一段——你闷棍完一个人转身走，那人醒来的头 6 秒是软的。' +
              '<b>要用上得靠打法配合</b>：控制打在治疗身上、且队友的爆发正好压在这 6 秒里才算数。'
          },
          {
            n: 'Nimble Fingers', tree: '职业', u: 25,
            b: '佯攻与猩红之瓶的能量消耗降低 10。' +
              '<br>省的是<b>防守动作</b>的能量。被压着打、需要反复佯攻和喝药的局才值；' +
              '你是压制方的那些局，这一点几乎不动。'
          },
          {
            n: 'Toxic Stiletto', tree: '职业', u: 15,
            b: '毒刃的能量消耗 −20、冷却 −15 秒、射程 +3 码。' +
              '<br><b>它只强化毒刃。</b>毒刃 36 人点，它 15 人点——' +
              '也就是说要毒刃的人里超过一半觉得不值第二点。' +
              '对面激怒刷得勤、需要毒刃转得更快时才追加。'
          },
          {
            n: 'Perforated Veins', tree: '专精', u: 13,
            b: '在「破绽」生效期间，背刺、影袭风暴、暗殁之刺伤害提高 10%。' +
              '<br>条件伤害，只在已经很强的窗口里再加一层。<b>26% 是这 8 格里最低的</b>——' +
              '敏锐的短板通常不是窗口内不够疼，是窗口外没威胁。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 92 },
        { n: '急速', v: '次要', pct: 23, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
      ],
      statRead: '<b>精通和全能几乎并列，之后是断崖。</b>这两条一起堆，不用在它们之间做取舍；' +
        '<b>急速和爆击装备上带多少算多少</b>，不要为了它们放弃前两条。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'arms-warrior', kind: 'spec', cls: 'warrior', spec: 'arms',
    h1: '武器战士 PvP 判断训练器', short: '武器战士',
    icon: 'ability_warrior_savageblow', tier: 'S', color: '#C69B6D',
    crumb: ['战士', '武器'], store: 'banyeArmsWarPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '', mid: '', lo: '' },
    talent: {
      rows: [
        {
          lb: '英雄天赋 · 唯一真正对半的一格',
          vv: '<b>Slayer</b>（29/50 · 58%）　vs　<b>Colossus</b>（21/50 · 42%）<br>' +
            '<span class="dimtx">另外四个已上线专精的英雄天赋都是一边倒' +
            '（敏锐贼 50/0、狂徒贼 50/0、冰法 50/0、戒律牧 42/8），' +
            '武器战士是唯一一个 top50 内部也没共识的。</span>'
        },
        {
          lb: 'PvP 天赋 · 三格四个候选',
          vv: '<sk>打磨利刃</sk>（49/50）—— 减疗，98% 必带<br>' +
            '<sk>捍卫</sk>（34/50）—— 给队友的减伤<br>' +
            '<sk>缴械</sk>（31/50）—— 对面伤害来自武器<br>' +
            '<b>Berserker Roar</b>（29/50）<br>' +
            '<span class="dimtx">四项占全部选择的 95%。50 人 × 3 格 = 150，实测总和正好 150。</span>'
        },
      ],
      note: '「Berserker Roar」暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CcEAjLzRlq54bI5v+r8Sr9Xw4DzMzsMzMmZAAAAMMhxMzYjZmZYGzMDAAAAgxiZgtMzYZbWMz2wmhhZmZahmZG2AmxiZZMsMz2AMzAwMGGA',
        who: 'Vîces', where: 'US · Sargeras', rating: '3v3 3190', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在 9 个分歧格上与多数派一致 8 格</b>，' +
          '唯一偏离的是 <b>Dreadnaught</b>（33/50）。' +
          '<b>它走的是 Slayer 线</b>——那一格 58 比 42，本来就没有正确答案，' +
          '想走 Colossus 的话这串不适用。',
      },
      tree: {
        survey: '职业树 40 格 + 专精树 36 格 + 英雄天赋 28 格，共 <b>104 格</b>。' +
          '<b>英雄天赋那 28 格不算逐格分歧</b>——它们是「走 Slayer 还是 Colossus」' +
          '这<b>一个</b>决策的产物，而那一格 58 比 42，没有正确答案。' +
          '职业树与专精树的 76 格里，<b>67 格定死，9 格需要判断</b>，下面是其中 6 格。',
        picks: [
          {
            n: 'Crackling Thunder', tree: '职业', u: 42,
            b: '<sk>雷霆一击</sk>半径增加 50%，并加深其减速效果。' +
              '<br>84% 的使用率，接近定盘。<b>战士的问题从来不是打不动，是够不着</b>——' +
              '这一格买的是「让对面跑不掉」。'
          },
          {
            n: 'Broad Strokes', tree: '专精', u: 42,
            b: '<sk>巨人打击</sk>直接给你<sk>横扫攻击</sk>。' +
              '<br>把单体爆发窗口顺带变成双目标窗口。<b>与上一格同为 42 人</b>，' +
              '是同一套主流配点里的两块。'
          },
          {
            n: 'Massacre', tree: '专精', u: 36,
            b: '斩杀类技能的可用血线从 20% 提到 <b>35%</b>。' +
              '<br><b>这一格改变的是「什么时候算进入处决阶段」。</b>' +
              '35% 意味着提前一大截进入高伤害区间——想靠斩杀收人的打法必点。'
          },
          {
            n: 'Powerful Momentum', tree: '专精', u: 37,
            b: '<sk>横扫攻击</sk>对副目标额外造成 25% 伤害。' +
              '<br>依附于 Broad Strokes 的加成。<b>3v3 里副目标常有，2v2 里经常没有</b>——' +
              '这一格的价值直接跟你打几人赛制挂钩。'
          },
          {
            n: 'Dreadnaught', tree: '专精', u: 33,
            b: '<sk>压制</sk>产生一道地震波，对身前所有敌人造成伤害。' +
              '<br><sk>压制</sk>是武器最高频的技能之一，这一格把它顺带变成小范围伤害。'
          },
          {
            n: 'Shattering Throw', tree: '职业', u: 20,
            b: '投掷武器，<b>移除目标身上的魔法免疫</b>并造成伤害。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面有<sk>寒冰屏障</sk>、圣盾术、' +
              '<sk>暗影斗篷</sk>这类免疫牌——它能把对面最硬的那张牌直接撕掉；' +
              '对面没有免疫，这一点是纯浪费。40% 的使用率正好反映「看阵容」这件事。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 武器战士 top 50</b> 实测配点。' +
          '另外 3 格分歧（Tactical Edge 28/50 · Rumbling Earth 26/50 · Critical Thinking 14/50）不单列。' +
          '「什么时候点」为编者按天赋效果推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 49, mid: 1 },
        { n: '精通', v: '可弃', pct: 14, dim: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后归零。</b>' +
        '全能同时提高伤害与减伤——<b>对一个要站在人堆里输出的近战，这条的性价比压过一切</b>。' +
        '精通与爆击在 top50 的配装里几乎为零。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 武器战士 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'outlaw-rogue', kind: 'spec', cls: 'rogue', spec: 'outlaw',
    h1: '狂徒贼 PvP 判断训练器', short: '狂徒贼',
    icon: 'ability_rogue_waylay', tier: 'A', color: '#FFF468',
    crumb: ['潜行者', '狂徒'], store: 'banyeOutlawPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在读"我现在有多强"，不是在背循环。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把骰面和爆发窗口的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>诡术师 Trickster</b> —— <b>46/50</b>；命运之缚 Fatebound 只有 4 人。' },
        {
          lb: 'PvP 天赋 · 三格从这四个里选',
          vv: '<sk>烟雾弹</sk>（44/50）—— 最接近必带<br>' +
            '<b>Preemptive Maneuver</b>（38/50）—— 被控住时的减伤<br>' +
            '<sk>卸除武装</sk>（31/50）—— 对面伤害来自武器<br>' +
            '<b>Turn the Tables</b>（18/50） · <sk>偷天换日</sk>（14/50）—— 剩下那格的两个候选<br>' +
            '<span class="dimtx">五项占了全部选择的 96%。50 人 × 3 格 = 150，实测总和正好 150。</span>'
        },
      ],
      note: '「Preemptive Maneuver」「Turn the Tables」暂无官方简体中文名。',
      imp: {
        str: 'CQQAphyM11FofNMFa1K3vFEDUCgZAGzwMbzMzMzYMLbmZmZbabGz2MAAAAAAbLzMDmZMzYmZMAAAAmhBGMbziZmZ0MzGzGLbTLsZGgZGMwA',
        who: 'Dázèd', where: 'US · Stormrage', rating: '3v3 3139', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在 10 个分歧格上与多数派一致 9 格</b>，在 top50 前五名里贴合度最高。' +
          '唯一偏离的是<sk>嫁祸诀窍</sk>那格（26/50 · 52%），本来就接近对半。' +
          '<b>粘进游戏当起点，那 10 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>110 格</b>。' +
          '扣掉没人走的命运之缚整条线、以及诡术师线里跟着「走这条线」一起点掉的 11 格，' +
          'top50 的实测里 <b>100 格是定死的</b>。' +
          '真正需要你判断的是 <b>10 格</b>，下面是其中 7 格。',
        picks: [
          {
            n: 'Soothing Darkness', tree: '职业', u: 42,
            b: '<sk>消失</sk>后 6 秒内回复 15% 最大生命。' +
              '<br><b>这一格与下面两格使用人数完全相同（都是 42）</b>——它们是同一套配点里的三件套，' +
              '全部围绕<sk>消失</sk>。狂徒的生存不靠减伤靠脱身，这是那条路线的地基。'
          },
          {
            n: 'Subterfuge', tree: '职业', u: 42,
            b: '潜行被打断后，仍可在 6 秒内使用需要潜行的技能。' +
              '<br>把开场窗口从「被发现即结束」延长成「被发现后还能补一手」。' +
              '<b>与另外两格同进同退。</b>'
          },
          {
            n: 'Without a Trace', tree: '职业', u: 42,
            b: '<sk>消失</sk>多一层充能。' +
              '<br>三件套的最后一块。<b>不点这三格的那 8 个人，是把点数挪去了输出。</b>'
          },
          {
            n: 'Blinding Powder', tree: '专精', u: 36,
            b: '<sk>致盲</sk>冷却缩短 25%、射程增加 5 码。' +
              '<br><sk>致盲</sk>是狂徒手上最强的软控。冷却缩短意味着<b>一局里多一次断节奏的机会</b>。'
          },
          {
            n: 'Blackjack', tree: '职业', u: 33,
            b: '<sk>致盲</sk>或<sk>闷棍</sk>效果结束后，目标伤害与治疗降低 30%，持续 6 秒。' +
              '<br><b>跟上面那格几乎同一批人（36 与 33）。</b>点了这两格，' +
              '<sk>致盲</sk>就不只是控——<b>控完那 6 秒才是你真正的输出窗口</b>。'
          },
          {
            n: 'Iron Stomach', tree: '职业', u: 31,
            b: '<sk>猩红之瓶</sk>、治疗药水与治疗石的回复量提高 25%。' +
              '<br>纯自保。<b>被压着打的局值，你是压制方的局这一点几乎不动。</b>'
          },
          {
            n: 'Shadowrunner', tree: '职业', u: 15,
            b: '潜行或暗影之舞期间移动速度提高 20%。' +
              '<br><b>狂徒没有暗影之舞</b>——这一格只在潜行时生效，也就是只影响开场找位置。' +
              '30% 的使用率说明多数人认为不值。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 57, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
        { n: '精通', v: '可弃', pct: 7, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后是断崖。</b>' +
        '爆击和精通在 top50 的配装里几乎为零——<b>不用为这两条做任何取舍</b>。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'frost-mage', kind: 'spec', cls: 'mage', spec: 'frost',
    h1: '冰法 PvP 判断训练器', short: '冰法',
    icon: 'spell_frost_frostbolt02', tier: 'A+', color: '#3FC7EB',
    crumb: ['法师', '冰霜'], store: 'banyeFrostMagePvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在算"他还能不能动"，不是在背连招。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把控制链和杀窗的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>法术之刃 Spellslinger</b> —— 50/50 全用。' },
        { lb: 'PvP 天赋 · 两个必带', vv: '<b>Overpowered Barrier</b>（50/50） + <b>Improved Mass Invisibility</b>（50/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Master Shepherd</b>（36/50） · <sk>冰墙</sk>（9/50）' },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CAEAMhlVtghLZL4RZzExaQoBYNstMzyMzMbziZmYwMzMzMziZmZMjZmlZamZbWAAzMzssMz0GAAsAAAAsBw2yYmZGYZeAjZGLAAAMzCwMMmBMYA',
        who: 'Ventús', where: 'EU · Ravencrest', rating: '3v3 3252', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 3 个分歧格上与多数派完全一致（3/3）</b>，' +
          '在 top50 前五名里贴合度最高。<b>粘进游戏当起点，那 3 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 43 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>109 格</b>。' +
          '扣掉没人走的霜火整条线，<b>106 格是定死的</b>——' +
          '<b>这是站上几个专精里最没得选的一棵树</b>。真正要判断的只有 <b>3 格</b>，' +
          '另外三格 top50 里只有个位数在点。',
        picks: [
          {
            n: 'Improved Blink', tree: '职业', u: 40,
            b: '<sk>闪现术</sk>冷却缩短 2 秒。' +
              '<br>冰法的命是位移，不是血量。<b>80% 的使用率说明这几乎是定盘</b>——' +
              '不点的那 10 个人得给出别的理由。'
          },
          {
            n: 'Improved Spellsteal', tree: '职业', u: 35,
            b: '<sk>法术吸取</sk>在 4 秒后重复一次效果，但自身获得 4 秒冷却。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面带值钱增益（增强萨、部分骑士与牧师的强 buff）——' +
              '偷两次直接改变一轮的强弱；对面没什么可偷的，这一点是空的。'
          },
          {
            n: 'Frost Conditioning', tree: '职业', u: 17,
            b: '寒冷症（<sk>寒冰屏障</sk>用完后的虚弱状态）持续时间缩短 10 秒。' +
              '<br>它缩短的是<b>你交完冰箱之后的空窗期</b>。被反复集火、需要频繁交冰箱的局才值；' +
              '你是压制方的那些局，这一格几乎不起作用。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配点。' +
          '另外三格（Overflowing Energy 6/50 · Improved Frost Nova 6/50 · Piercing Cold 5/50）' +
          '使用率都在 12% 以下，不单列。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 77, mid: 1 },
        { n: '精通', v: '可弃', pct: 6, dim: 1 },
        { n: '爆击', v: '可弃', pct: 0, dim: 1 },
      ],
      statRead: '<b>全能和急速一起堆，之后直接归零。</b>' +
        'top50 的爆击是<b>零</b>——不是少，是没有。这一档没有取舍空间。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'discipline-priest', kind: 'spec', cls: 'priest', spec: 'discipline',
    h1: '戒律牧 PvP 判断训练器', short: '戒律牧',
    icon: 'spell_holy_powerwordshield', tier: null, color: '#FFFFFF',
    crumb: ['牧师', '戒律'], store: 'banyeDiscPriestPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在铺"血掉之前"，不是在追血条。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把救赎的预铺逻辑过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>Oracle 先知</b> —— 45/50（90%）。' },
        { lb: 'PvP 天赋 · 近乎必带', vv: '<b>Ultimate Radiance</b>（49/50） + <b>Phase Shift</b>（48/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Inner Light</b>（33/50）' },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CAQAR03Gt7xPmcDNOjs2Zlb3yCDsMzDwyMjZmBMbzYmZGjZGAAAAAAAAAAzMzyMYMGLzMzMssYamYwYmZDDhxsNWstYMGLGAAGzwYwAzMzMzEMD',
        who: 'Eniram', where: 'EU · Ravencrest', rating: '3v3 3165', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在全部 16 个分歧格上与多数派完全一致（16/16）</b>。' +
          '戒律牧是站上几个专精里配点空间最大的一个，' +
          '<b>这串只是一个起点，下面那 7 格更值得你按自己的局面重调。</b>',
      },
      tree: {
        survey: '职业树 48 格 + 专精树 42 格 + 英雄天赋 28 格，共 <b>118 格</b>。' +
          '扣掉只有 8 人走的虚空编织者整条线、以及先知线里跟着「走这条线」一起点掉的 12 格，' +
          '仍有 <b>16 格</b>存在真实分歧——' +
          '<b>这是站上几个专精里配点空间最大的一棵树</b>，下面是其中最值得想的 7 格。',
        picks: [
          {
            n: 'Move with Grace', tree: '职业', u: 39,
            b: '<sk>信仰飞跃</sk>冷却缩短 30 秒。' +
              '<br><sk>信仰飞跃</sk>是把队友从死地里拽回来的那一手。冷却缩短直接等于<b>一局多救一次</b>。' +
              '78% 的使用率，接近定盘。'
          },
          {
            n: 'Binding Heals', tree: '职业', u: 27,
            b: '<sk>快速治疗</sk>与暗影愈合对他人治疗量的 20% 同时治疗你自己。' +
              '<br><b>正好对半分的一格。</b>判据不是强弱，是<b>这局挨打的是谁</b>：' +
              '你被集火时它一直在生效；对面打你队友时，这一点是空的。'
          },
          {
            n: 'Desperate Measures', tree: '英雄', u: 27,
            b: '<sk>绝望祷言</sk>持续时间延长 10 秒，天使壁垒的吸收量提高。' +
              '<br>同样对半。<b>它救的是「一波爆发打不死你」</b>——' +
              '对面是爆发型阵容时值，对面是磨血型时收益小。'
          },
          {
            n: 'Shadow Tap', tree: '专精', u: 18,
            b: '<sk>心灵震爆</sk>伤害提高 150%，但法力消耗提高 40%。' +
              '<br>戒律靠伤害转治疗，所以这不只是输出天赋。<b>它是拿蓝换治疗量</b>——' +
              '短局值，拖到蓝见底的长局反而害你。'
          },
          {
            n: 'Occultist', tree: '专精', u: 18,
            b: '暗影系伤害与治疗提高 15%。' +
              '<br>与上面那格同为 36%——<b>大约三分之一的人在打「输出型戒律」</b>。' +
              '这条路线要求你有余裕去输出；被压着打的局它一点用没有。'
          },
          {
            n: 'Strength of Resolve', tree: '职业', u: 17,
            b: '耐力提高 6%。' +
              '<br>纯血量。<b>对面能一波把你打死时，血量比任何治疗量都有用。</b>'
          },
          {
            n: 'Translucent Image', tree: '职业', u: 12,
            b: '<sk>渐隐术</sk>使你受到的伤害降低 10%。' +
              '<br><sk>渐隐术</sk>冷却短，等于一个高频小减伤。' +
              '24% 的使用率偏低——多数人把这一点留给了别处。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配点。' +
          '另外 10 格分歧使用率都在 16% 以下，不单列。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 96 },
        { n: '急速', v: '兼顾', pct: 64, mid: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>三条都有分量，断层只在爆击之前。</b>' +
        '精通领先、全能紧跟、急速也不低——<b>前三条按拿到什么用什么</b>，不用为了排序去换件。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'rogue-priest-2v2', kind: 'comp', h1: '贼 + 戒律牧 · 2v2 组合训练器', short: '贼牧 2v2',
    icon: 'classicon_rogue', icon2: 'classicon_priest', tier: null, color: '#8b6fd4',
    crumb: ['组合', '2v2 贼牧'], store: 'banyeRoguePriest2v2_1207', quizSec: 's5',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }],
    v2c: { rogue: 'r', priest: 'p' },              // 视角名 → 题目 w 标记
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
    ],
    ownKeys: { r: 'ROGUE_SK', p: 'PRIEST_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', b: '⚔ 双方' },
    tagCls: { r: 'r', p: 'p', b: '' },
    done: { hi: '你们已经在轮流当主角，不是各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把"谁是这一轮的主角"过一遍。' },
    talent: { rows: [{ lb: '两人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，两个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
      ],
    },
  },
  {
    file: 'thug-cleave-3v3', kind: 'comp', h1: 'Thug Cleave · 贼 + 牧 + 猎 3v3', short: 'Thug Cleave',
    icon: 'classicon_rogue', icon2: 'classicon_priest', icon3: 'classicon_hunter', tier: null, color: '#8b6fd4',
    crumb: ['组合', '3v3 Thug Cleave'], store: 'banyeThugCleave3v3_1207', quizSec: 's6',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }, { k: 'hunter', label: '🏹 猎' }],
    v2c: { rogue: 'r', priest: 'p', hunter: 'h' },  // 视角名 → 题目 w 标记
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
      { k: 'h', cls: 'H', label: '猎人', icon: 'classicon_hunter' },
    ],
    ownKeys: { r: 'R_SK', p: 'P_SK', h: 'H_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', h: '🏹 猎人', b: '⚔ 全队' },
    tagCls: { r: 'r', p: 'p', h: 'h', b: '' },
    done: { hi: '你们已经在接控制链，不是三个人各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把三个角色的分配过一遍。' },
    assign: {
      defaults: { lock: 'r', kill: 'h', relay: 'p' },   // 贼锁 / 猎杀 / 牧接 —— 成立的那个分法
      icons: { r: { cls: 'R', icon: 'classicon_rogue' }, p: { cls: 'P', icon: 'classicon_priest' }, h: { cls: 'H', icon: 'classicon_hunter' } },
      rules: {
        ok: { cls: 'good', ico: '◆', title: '这个分配成立', desc: '三个角色各有其人，控制链有两个来源，杀手能专心输出。' },
        dupDesc: '<b>一个人不能同时当两个角色。</b>3v3 的全部优势就在于三个人可以同时做三件不同的事——<b>重复分配等于自愿退回 2v2</b>。重新分一次。',
        warn: [
          { role: 'lock', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当锁匠：能打，但很勉强', desc: '牧师只有 <sk>心灵尖啸</sk> 一个控制，<b>用它去锁治疗，应急时你就没牌了</b>。而且它是恐惧类，对面解控/免疫恐惧的手段通常比解眩晕多。<b>只在贼和猎人确实都腾不出手时才这么分。</b>' },
          { role: 'kill', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当杀手：应急方案', desc: '戒律牧的输出没有取舍成本（<sk>救赎</sk> 让输出＝治疗），<b>但爆发上限不如贼和猎人</b>。这个分配只在另外两个都被压住时成立——<b>而那种局面下你更该先解决"为什么他们被压住"</b>。' },
          { role: 'relay', memb: 'r', cls: 'warn', ico: '◐', title: '贼当接手：浪费了最强的爆发', desc: '贼的爆发窗口是这个组合最高的伤害峰值，<b>让他当接手等于把它闲置</b>。除非对面控制极多、需要一个随时能 <sk>消失</sk> 脱身的人来兜底，否则换个分法。' },
        ],
      },
    },
    talent: { rows: [{ lb: '三人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，三个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
        { n: '猎人', ic: 'classicon_hunter' },
      ],
    },
  },
];

module.exports = { PAGES };
