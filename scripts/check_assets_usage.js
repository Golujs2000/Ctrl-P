const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = [...content.matchAll(/['"](\/assets\/[^'"]+)['"]/g)].map(m => m[1]);
  const unique = [...new Set(matches)];
  const missing = unique.filter(p => !fs.existsSync(path.resolve('client/public' + p)));
  console.log(`\n=== Checking: ${filePath} ===`);
  console.log(`Total references: ${matches.length}, Unique: ${unique.length}`);
  if (missing.length > 0) {
    console.log(`MISSING FILES (${missing.length}):`, missing);
  } else {
    console.log('ALL files exist on disk!');
  }
}

checkFile('client/src/data/servicesData.js');
checkFile('client/src/components/Portfolio.jsx');
checkFile('client/src/pages/PortfolioPage.jsx');
checkFile('client/src/components/Hero.jsx');
checkFile('client/src/components/Machines.jsx');
checkFile('client/src/pages/MachinesPage.jsx');
checkFile('client/src/pages/AboutPage.jsx');
checkFile('client/src/pages/ContactPage.jsx');
