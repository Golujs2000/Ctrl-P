const fs = require('fs');
const path = require('path');

const srcDir = 'E:\\Print shop assets';
const destDir = path.resolve(__dirname, '../client/public/assets');

try {
  const srcFiles = fs.readdirSync(srcDir);
  console.log(`Total files in E:\\Print shop assets: ${srcFiles.length}`);

  const destFiles = new Set(fs.readdirSync(destDir));
  console.log(`Total files in client/public/assets: ${destFiles.size}`);

  const missing = [];
  const existing = [];

  for (const f of srcFiles) {
    if (destFiles.has(f)) {
      existing.push(f);
    } else {
      missing.push(f);
    }
  }

  console.log(`Direct name matches: ${existing.length}`);
  console.log(`Not in client/public/assets: ${missing.length}`);
  console.log('\nSample of missing files:');
  console.log(missing.slice(0, 20));

} catch (err) {
  console.error('Error analyzing assets:', err);
}
