// 拼装 core.css：新令牌/基础/组件 + 旧组件库(去掉被接管的) + 视觉升级层
const fs=require('fs'),path=require('path');
const D=f=>path.join(__dirname,f);
const SITE=path.join(__dirname,'..');
const union=fs.readFileSync(D('css_union.txt'),'utf8').split('\n');
// core.css 已接管的选择器（按规范化后的选择器文本精确匹配）
const OWNED=new Set([':root','html[data-theme="light"]','*','html','body','.wrap','a','header','.hd',
 '.hd h1','.hd h1 .sp','.badge','.badge.hot','.spacer','.tbtn','.tbtn:hover','nav',
 'nav::-webkit-scrollbar','nav button','nav button:hover','nav button.on','section','section.on',
 'h2','h2:before','h2:first-child','p','strong,b','.lead','.ic','footer','footer a',
 '.homelink','.homelink:hover','::selection']);
let dropped=0;
const kept=union.filter(r=>{
  const sel=r.split('{')[0].trim().replace(/\s+/g,' ');
  if(r.startsWith('@'))return true;              // @media 整块保留
  if(OWNED.has(sel)){dropped++;return false}
  return true;
});
const out=[
  fs.readFileSync(D('core.css'),'utf8'),
  '\n\n/* ============================================================\n   组件库 —— 从 6 个旧页收敛去重（'+kept.length+' 条）\n   ============================================================ */\n',
  kept.join('\n'),
  '\n\n',
  fs.readFileSync(D('overrides.css'),'utf8'),
].join('');
fs.mkdirSync(path.join(SITE,'assets/css'),{recursive:true});
fs.writeFileSync(path.join(SITE,'assets/css/core.css'),out);
console.log('接管并移除旧规则 '+dropped+' 条，保留 '+kept.length+' 条');
console.log('→ assets/css/core.css  '+(out.length/1024).toFixed(1)+' KB');
