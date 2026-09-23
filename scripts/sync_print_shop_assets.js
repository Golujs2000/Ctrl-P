const fs = require('fs');
const path = require('path');

const srcDir = 'E:\\Print shop assets';
const destDir = path.resolve(__dirname, '../client/public/assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
console.log(`Found ${files.length} files in ${srcDir}`);

const mapping = {};
let copiedCount = 0;

for (const file of files) {
  const srcPath = path.join(srcDir, file);
  const stat = fs.statSync(srcPath);
  if (!stat.isFile()) continue;

  const ext = path.extname(file).toLowerCase();
  let base = path.basename(file, path.extname(file));

  // Clean filename for web
  let cleanExt = ext === '.jfif' ? '.jpg' : ext;
  if (cleanExt === '.jpeg') cleanExt = '.jpg';

  // Kebab-case clean name
  let cleanName = base
    .replace(/[()_&,+]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase()
    .replace(/^-|-$/g, '');

  if (!cleanName) cleanName = 'asset';
  const finalFilename = `${cleanName}${cleanExt}`;
  const destPath = path.join(destDir, finalFilename);

  // Copy file
  fs.copyFileSync(srcPath, destPath);
  copiedCount++;

  mapping[file] = {
    original: file,
    cleanPath: `/assets/${finalFilename}`,
    filename: finalFilename,
    size: stat.size,
    ext: cleanExt
  };
}

console.log(`Copied ${copiedCount} files to ${destDir}`);

// Save mapping
fs.writeFileSync(
  path.resolve(__dirname, 'print_shop_assets_map.json'),
  JSON.stringify(mapping, null, 2),
  'utf-8'
);

console.log('Saved mapping to scripts/print_shop_assets_map.json');
