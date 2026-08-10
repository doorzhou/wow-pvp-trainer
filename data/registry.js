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
        { id: 'outlaw', n: '狂徒', en: 'Outlaw', role: 'dps', tier: 'A', ic: 'ability_rogue_waylay', page: 'outlaw-rogue.html', st: [2, 2, 2, 1, 0, 2] },
        { id: 'subtlety', n: '敏锐', en: 'Subtlety', role: 'dps', tier: 'S', ic: 'ability_stealth', page: 'subtlety-rogue.html', st: [2, 2, 2, 1, 0, 2] },
      ]
    },
    {
      id: 'priest', n: '牧师', en: 'Priest', c: '#FFFFFF', ic: 'classicon_priest', armor: '布甲',
      specs: [
        { id: 'discipline', n: '戒律', en: 'Discipline', role: 'heal', tier: null, ic: 'spell_holy_powerwordshield', page: 'discipline-priest.html', st: [2, 2, 2, 1, 0, 2] },
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
        { id: 'frost', n: '冰霜', en: 'Frost', role: 'dps', tier: 'A+', ic: 'spell_frost_frostbolt02', page: 'frost-mage.html', st: [2, 2, 2, 1, 0, 2] },
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

  /* 组合训练器 —— 按人数分组 */
  comps: [
    {
      id: 'rogue-priest-2v2', size: '2v2', n: '贼 + 戒律牧', en: 'Rogue / Discipline Priest',
      page: 'rogue-priest-2v2.html', members: ['rogue', 'priest'],
      one: '两个人轮流当主角。输的那局，通常是两个人同时想当主角。',
      st: [2, 2, 2, 1, 0, 2],
    },
    {
      id: 'thug-cleave-3v3', size: '3v3', n: 'Thug Cleave · 贼 + 牧 + 猎', en: 'Thug Cleave',
      page: 'thug-cleave-3v3.html', members: ['rogue', 'priest', 'hunter'],
      one: '2v2 赢在伤害叠在一起，3v3 赢在控制接成一条链。',
      st: [2, 2, 2, 1, 0, 2],
    },
  ],
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
