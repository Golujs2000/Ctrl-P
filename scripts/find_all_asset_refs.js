const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getFiles(fullPath));
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html') || file.endsWith('.css')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles('client/src');
files.push('client/index.html');

const assetRefs = {};
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf-8');
  const matches = [...content.matchAll(/['"](\/assets\/[^'"]+)['"]/g)].map(m => m[1]);
  if (matches.length > 0) {
    assetRefs[f] = [...new Set(matches)];
  }
});

for (const [file, refs] of Object.entries(assetRefs)) {
  console.log(`${file}: ${refs.length} refs`);
  const missing = refs.filter(r => !fs.existsSync(path.resolve('client/public' + r)));
  if (missing.length > 0) {
    console.log(`  MISSING (${missing.length}):`, missing);
  }
}
