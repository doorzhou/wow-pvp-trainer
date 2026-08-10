/* 资源指纹：给共享的 CSS/JS 加内容哈希查询串
   浏览器会长时间缓存这些文件，内容变了但 URL 没变的话，
   回访用户拿到的是旧脚本——线上排查过一次，加这层防住。 */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const SITE = path.join(__dirname, '..');
const h = f => {
  const p = path.join(SITE, f);
  if (!fs.existsSync(p)) return '0';
  return crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex').slice(0, 8);
};
module.exports = function v(f) { return f + '?v=' + h(f) };
