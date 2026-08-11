/* ============================================================
   全站注册表 —— 13 职业 / 40 专精 / 组合
   这是「框架」的骨头：加内容只改这里 + 加一个 data/specs/<id>.js
   ------------------------------------------------------------
   字段说明
     tier   PvP 梯队。来源 Icy Veins《PvP DPS Tier List》12.0.7（2026-06-15）
            治疗与坦克专精该表未收录，标 null。
     page   有内容的专精指向它的页面文件名；null = 尚未开工（首页显示为"规划中"）
     st     六个内容轴的完成度: 0=没有 1=部分 2=完成
            [骨架, 手法, 对阵, 天赋, 装备, 训练]
   ============================================================ */
window.REG = {
  patch: '12.0.7',
  season: 'Midnight 赛季一',
  updated: '2026-08-11',
  axes: ['骨架', '手法', '对阵', '天赋', '装备', '训练'],
  roles: { dps: '输出', heal: '治疗', tank: '坦克' },
  tierColor: { S: '#ff6b6b', 'A+': '#ffa94d', A: '#ffd43b', B: '#74c0fc', C: '#adb5bd' },

  classes: [
    {
      id: 'warrior', n: '战士', en: 'Warrior', c: '#C69B6D', ic: 'classicon_warrior', armor: '板甲',
      specs: [
        { id: 'arms', n: '武器', en: 'Arms', role: 'dps', tier: 'S', ic: 'ability_warrior_savageblow', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'fury', n: '狂怒', en: 'Fury', role: 'dps', tier: 'B', ic: 'ability_warrior_innerrage', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'protection', n: '防护', en: 'Protection', role: 'tank', tier: null, ic: 'ability_warrior_defensivestance', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'paladin', n: '圣骑士', en: 'Paladin', c: '#F48CBA', ic: 'classicon_paladin', armor: '板甲',
      specs: [
        { id: 'holy', n: '神圣', en: 'Holy', role: 'heal', tier: null, ic: 'spell_holy_holybolt', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'protection', n: '防护', en: 'Protection', role: 'tank', tier: null, ic: 'ability_paladin_shieldofthetemplar', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'retribution', n: '惩戒', en: 'Retribution', role: 'dps', tier: 'A+', ic: 'spell_holy_auraoflight', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'hunter', n: '猎人', en: 'Hunter', c: '#AAD372', ic: 'classicon_hunter', armor: '锁甲',
      specs: [
        { id: 'beast-mastery', n: '兽王', en: 'Beast Mastery', role: 'dps', tier: 'B', ic: 'ability_hunter_bestialdiscipline', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'marksmanship', n: '射击', en: 'Marksmanship', role: 'dps', tier: 'A', ic: 'ability_hunter_focusedaim', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'survival', n: '生存', en: 'Survival', role: 'dps', tier: 'A', ic: 'ability_hunter_camouflage', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'rogue', n: '潜行者', en: 'Rogue', c: '#FFF468', ic: 'classicon_rogue', armor: '皮甲',
      specs: [
        { id: 'assassination', n: '奇袭', en: 'Assassination', role: 'dps', tier: 'A', ic: 'ability_rogue_eviscerate', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'outlaw', n: '狂徒', en: 'Outlaw', role: 'dps', tier: 'A', ic: 'ability_rogue_waylay', page: 'outlaw-rogue.html', st: [2, 2, 2, 1, 2, 2] },
        { id: 'subtlety', n: '敏锐', en: 'Subtlety', role: 'dps', tier: 'S', ic: 'ability_stealth', page: 'subtlety-rogue.html', st: [2, 2, 2, 2, 2, 2] },
      ]
    },
    {
      id: 'priest', n: '牧师', en: 'Priest', c: '#FFFFFF', ic: 'classicon_priest', armor: '布甲',
      specs: [
        { id: 'discipline', n: '戒律', en: 'Discipline', role: 'heal', tier: null, ic: 'spell_holy_powerwordshield', page: 'discipline-priest.html', st: [2, 2, 2, 1, 2, 2] },
        { id: 'holy', n: '神圣', en: 'Holy', role: 'heal', tier: null, ic: 'spell_holy_guardianspirit', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'shadow', n: '暗影', en: 'Shadow', role: 'dps', tier: 'A', ic: 'spell_shadow_shadowwordpain', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'deathknight', n: '死亡骑士', en: 'Death Knight', c: '#C41E3A', ic: 'classicon_deathknight', armor: '板甲',
      specs: [
        { id: 'blood', n: '鲜血', en: 'Blood', role: 'tank', tier: null, ic: 'spell_deathknight_bloodpresence', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'frost', n: '冰霜', en: 'Frost', role: 'dps', tier: 'C', ic: 'spell_deathknight_frostpresence', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'unholy', n: '邪恶', en: 'Unholy', role: 'dps', tier: 'S', ic: 'spell_deathknight_unholypresence', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'shaman', n: '萨满祭司', en: 'Shaman', c: '#0070DD', ic: 'classicon_shaman', armor: '锁甲',
      specs: [
        { id: 'elemental', n: '元素', en: 'Elemental', role: 'dps', tier: 'A', ic: 'spell_nature_lightning', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'enhancement', n: '增强', en: 'Enhancement', role: 'dps', tier: 'A+', ic: 'spell_shaman_improvedstormstrike', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'restoration', n: '恢复', en: 'Restoration', role: 'heal', tier: null, ic: 'spell_nature_magicimmunity', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'mage', n: '法师', en: 'Mage', c: '#3FC7EB', ic: 'classicon_mage', armor: '布甲',
      specs: [
        { id: 'arcane', n: '奥术', en: 'Arcane', role: 'dps', tier: 'B', ic: 'spell_holy_magicalsentry', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'fire', n: '火焰', en: 'Fire', role: 'dps', tier: 'S', ic: 'spell_fire_firebolt02', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'frost', n: '冰霜', en: 'Frost', role: 'dps', tier: 'A+', ic: 'spell_frost_frostbolt02', page: 'frost-mage.html', st: [2, 2, 2, 1, 2, 2] },
      ]
    },
    {
      id: 'warlock', n: '术士', en: 'Warlock', c: '#8788EE', ic: 'classicon_warlock', armor: '布甲',
      specs: [
        { id: 'affliction', n: '痛苦', en: 'Affliction', role: 'dps', tier: 'A', ic: 'spell_shadow_deathcoil', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'demonology', n: '恶魔学识', en: 'Demonology', role: 'dps', tier: 'C', ic: 'spell_shadow_metamorphosis', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'destruction', n: '毁灭', en: 'Destruction', role: 'dps', tier: 'A', ic: 'spell_shadow_rainoffire', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'monk', n: '武僧', en: 'Monk', c: '#00FF98', ic: 'classicon_monk', armor: '皮甲',
      specs: [
        { id: 'brewmaster', n: '酒仙', en: 'Brewmaster', role: 'tank', tier: null, ic: 'spell_monk_brewmaster_spec', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mistweaver', n: '织雾', en: 'Mistweaver', role: 'heal', tier: null, ic: 'spell_monk_mistweaver_spec', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'windwalker', n: '踏风', en: 'Windwalker', role: 'dps', tier: 'S', ic: 'spell_monk_windwalker_spec', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'druid', n: '德鲁伊', en: 'Druid', c: '#FF7C0A', ic: 'classicon_druid', armor: '皮甲',
      specs: [
        { id: 'balance', n: '平衡', en: 'Balance', role: 'dps', tier: 'A+', ic: 'spell_nature_starfall', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'feral', n: '野性', en: 'Feral', role: 'dps', tier: 'A', ic: 'ability_druid_catform', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'guardian', n: '守护', en: 'Guardian', role: 'tank', tier: null, ic: 'ability_racial_bearform', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'restoration', n: '恢复', en: 'Restoration', role: 'heal', tier: null, ic: 'spell_nature_healingtouch', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      id: 'demonhunter', n: '恶魔猎手', en: 'Demon Hunter', c: '#A330C9', ic: 'classicon_demonhunter', armor: '皮甲',
      specs: [
        { id: 'havoc', n: '浩劫', en: 'Havoc', role: 'dps', tier: 'A', ic: 'ability_demonhunter_specdps', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'vengeance', n: '复仇', en: 'Vengeance', role: 'tank', tier: null, ic: 'ability_demonhunter_spectank', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'devourer', n: 'Devourer', en: 'Devourer', role: 'dps', tier: 'B', ic: 'spell_priest_void-blast', page: null, st: [0, 0, 0, 0, 0, 0], note: 'Midnight 新增的虚空系专精。官方简体中文名尚未查到，暂用原文——不编译名。' },
      ]
    },
    {
      id: 'evoker', n: '唤魔师', en: 'Evoker', c: '#33937F', ic: 'classicon_evoker', armor: '锁甲',
      specs: [
        { id: 'devastation', n: '湮灭', en: 'Devastation', role: 'dps', tier: 'A+', ic: 'classicon_evoker_devastation', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'preservation', n: '恩护', en: 'Preservation', role: 'heal', tier: null, ic: 'classicon_evoker_preservation', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'augmentation', n: '增辉', en: 'Augmentation', role: 'dps', tier: 'C', ic: 'classicon_evoker_augmentation', page: null, st: [0, 0, 0, 0, 0, 0] },
      ]
    },
  ],

  /* ============================================================
     竞技场组合
     3v3 有公认命名（RMP / Thug Cleave / RLS…），2v2 只是「输出 + 治疗」配对。
     这不是本站的分法，是社区与攻略站的既有分法。
     来源：Icy Veins 各专精 Best Arena Compositions · wowmeta 组合梯队
     组合名沿用英文原名——中文社区通用的也是这套缩写，不另造译名。
     ============================================================ */
  comps: {
    '3v3': {
      title: '3v3',
      note: '有公认命名的固定组合。',
      list: [
        { id: 'thug-cleave-3v3', name: 'Thug Cleave', members: ['rogue', 'hunter', 'priest'],
          make: '敏锐贼 + 猎人 + 戒律牧', one: '控制链接成一条，杀窗里对面治疗做不了事。',
          page: 'thug-cleave-3v3.html', st: [2, 2, 2, 1, 2, 2] },
        { id: 'rmp', name: 'RMP', members: ['rogue', 'mage', 'priest'],
          make: '贼 + 法师 + 神牧 / 戒律牧', one: '竞技场最老牌的 setup 组合。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rmd', name: 'RMD', members: ['rogue', 'mage', 'druid'],
          make: '贼 + 法师 + 恢复德', one: 'RMP 换成德鲁伊，容错更高、节奏更慢。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rps', name: 'RPS', members: ['rogue', 'priest', 'shaman'],
          make: '贼 + 暗牧 + 恢复萨', one: '双爆发叠在一个窗口。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rls', name: 'RLS', members: ['rogue', 'warlock', 'shaman'],
          make: '贼 + 术士 + 恢复萨', one: '消耗与爆发两条腿走路。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'jungle', name: 'Jungle', members: ['druid', 'hunter', 'priest'],
          make: '野性德 + 猎人 + 戒律牧', one: '两个近战持续压制，控制来源多。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'ret-warrior', name: 'Ret / Warrior', members: ['paladin', 'warrior', 'priest'],
          make: '惩戒骑 + 战士 + 戒律牧', one: '单体爆发上限极高。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'god-comp', name: 'God Comp', members: ['mage', 'priest', 'paladin'],
          make: '法师 + 暗牧 + 奶骑 / 恢复德', one: '全法术组合，控制密度最高。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mlp', name: 'MLP', members: ['mage', 'warlock', 'priest'],
          make: '法师 + 术士 + 奶骑 / 牧师', one: '双施法者，靠控制链开窗。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mld', name: 'MLD', members: ['mage', 'warlock', 'druid'],
          make: '法师 + 术士 + 恢复德', one: 'MLP 的德鲁伊版本。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'wmd', name: 'WMD', members: ['mage', 'warrior', 'druid'],
          make: '法师 + 战士 + 恢复德 / 奶骑 / 牧师', one: '战士贴脸，法师控场。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'fmp', name: 'FMP', members: ['mage', 'druid', 'paladin'],
          make: '法师 + 野性德 + 奶骑 / 牧师', one: '野德开场，法师收尾。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'frozen-chicken', name: 'Frozen Chicken', members: ['mage', 'druid', 'paladin'],
          make: '法师 + 平衡德 + 奶骑', one: '双远程法伤，站桩输出。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'phdk', name: 'PHDk', members: ['priest', 'deathknight', 'hunter'],
          make: '戒律牧 + 邪DK + 猎人', one: '持续压制型，不靠单个爆发窗口。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'cupid', name: 'Cupid', members: ['priest', 'paladin', 'hunter'],
          make: '戒律牧 + 惩戒骑 + 猎人', one: '惩戒爆发 + 猎人控制。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'dh-boomkin', name: 'DH Boomkin', members: ['demonhunter', 'druid', 'shaman'],
          make: '浩劫DH + 平衡德 + 恢复萨', one: '机动性极高的爆发组合。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'hero-cleave', name: 'Hero Cleave', members: ['demonhunter', 'deathknight', 'shaman'],
          make: '浩劫DH + 邪DK + 恢复萨', one: '双近战压制，出场压力极大。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rogue-devourer', name: 'Rogue / Devourer', members: ['rogue', 'demonhunter', 'evoker'],
          make: '贼 + Devourer DH + 恩护唤魔师 / 恢复德', one: 'Midnight 新专精带出的组合。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'dwts', name: 'Dancing With The Stars', members: ['rogue', 'druid', 'evoker'],
          make: '贼 + 平衡德 + 恩护唤魔师', one: '爆发窗口对齐要求高。', page: null, st: [0, 0, 0, 0, 0, 0] },
      ],
    },
    '2v2': {
      title: '2v2',
      note: '没有公认命名，按「输出 + 治疗」配对；少数双输出配对也成立。',
      list: [
        { id: 'rogue-priest-2v2', name: '贼 + 戒律牧', members: ['rogue', 'priest'], kind: 'heal',
          make: '敏锐贼 + 戒律牧', one: '两个人轮流当主角。',
          page: 'rogue-priest-2v2.html', st: [2, 2, 2, 1, 2, 2] },
        { id: 'rogue-mage-2v2', name: '贼 + 法师', members: ['rogue', 'mage'], kind: 'dd',
          make: '敏锐贼 + 冰法', one: '双输出，靠控制链换人头。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rogue-mw-2v2', name: '贼 + 织雾', members: ['rogue', 'monk'], kind: 'heal',
          make: '敏锐贼 + 织雾武僧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rogue-rdruid-2v2', name: '贼 + 恢复德', members: ['rogue', 'druid'], kind: 'heal',
          make: '敏锐贼 + 恢复德', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rogue-hpal-2v2', name: '贼 + 奶骑', members: ['rogue', 'paladin'], kind: 'heal',
          make: '敏锐贼 + 神圣骑士', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'rogue-boomy-2v2', name: '贼 + 平衡德', members: ['rogue', 'druid'], kind: 'dd',
          make: '敏锐贼 + 平衡德', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mage-mw-2v2', name: '法师 + 织雾', members: ['mage', 'monk'], kind: 'heal',
          make: '冰法 + 织雾武僧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mage-hpal-2v2', name: '法师 + 奶骑', members: ['mage', 'paladin'], kind: 'heal',
          make: '冰法 + 神圣骑士', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mage-rdruid-2v2', name: '法师 + 恢复德', members: ['mage', 'druid'], kind: 'heal',
          make: '冰法 + 恢复德', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'mage-spriest-2v2', name: '法师 + 暗牧', members: ['mage', 'priest'], kind: 'dd',
          make: '冰法 + 暗影牧师', one: '双输出，法伤叠加。', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'warrior-disc-2v2', name: '战士 + 戒律牧', members: ['warrior', 'priest'], kind: 'heal',
          make: '战士 + 戒律牧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'feral-disc-2v2', name: '野性德 + 戒律牧', members: ['druid', 'priest'], kind: 'heal',
          make: '野性德 + 戒律牧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'hunter-disc-2v2', name: '猎人 + 戒律牧', members: ['hunter', 'priest'], kind: 'heal',
          make: '猎人 + 戒律牧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
        { id: 'dh-disc-2v2', name: '浩劫DH + 戒律牧', members: ['demonhunter', 'priest'], kind: 'heal',
          make: '浩劫恶魔猎手 + 戒律牧', one: '', page: null, st: [0, 0, 0, 0, 0, 0] },
      ],
    },
  },
};

/* 派生索引：展平的专精列表，首页与总览页共用 */
window.REG.flat = window.REG.classes.flatMap(c =>
  c.specs.map(s => Object.assign({}, s, {
    key: c.id + '/' + s.id,
    cls: c.id, clsName: c.n, clsEn: c.en, color: c.c, clsIcon: c.ic, armor: c.armor,
    full: s.n + c.n,
  }))
);
window.REG.stats = (function (f) {
  const done = f.filter(s => s.page).length;
  return { total: f.length, done, pct: Math.round(done / f.length * 100) };
})(window.REG.flat);

/* 展平的组合列表：页脚「换一个练」与统计用 */
window.REG.compList = Object.keys(window.REG.comps).flatMap(b =>
  window.REG.comps[b].list.map(c => Object.assign({}, c, { bracket: b }))
);
window.REG.compStats = (function (l) {
  const done = l.filter(c => c.page).length;
  return { total: l.length, done, pct: Math.round(done / l.length * 100) };
})(window.REG.compList);
