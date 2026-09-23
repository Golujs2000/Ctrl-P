const fs = require('fs');
const path = require('path');

const publicAssets = fs.readdirSync('client/public/assets');

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = [...content.matchAll(/['"](\/assets\/[^'"]+)['"]/g)].map(m => m[1]);
  const unique = [...new Set(matches)];

  for (const ref of unique) {
    const fullPath = path.resolve('client/public' + ref);
    if (!fs.existsSync(fullPath)) {
      const baseName = path.basename(ref, path.extname(ref));
      const candidates = publicAssets.filter(f => f.startsWith(baseName));
      console.log(`BROKEN REF in ${filePath}: ${ref}`);
      console.log(`   Found similar in assets:`, candidates);
    }
  }
}

analyzeFile('client/src/data/servicesData.js');
analyzeFile('client/src/components/Portfolio.jsx');
analyzeFile('client/src/pages/PortfolioPage.jsx');
