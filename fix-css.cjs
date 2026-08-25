const fs = require('fs');
const files = [
  'VooraWestside.css',
  'VooraVidyasagarTblock.css',
  'VooraOceans27.css',
  'VooraHighwayHaven.css',
  'VooraBeckford.css',
  'VooraAgastya.css'
];

files.forEach(file => {
  const path = 'd:/VOORA02/src/pages/' + file;
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/\.project-plans-content \{\s*flex: 0 0 25%;\s*\}/g, '.project-plans-content {\n  flex: 0 0 calc(25% - 40px);\n}');
  content = content.replace(/\.project-plans-slider \{\s*flex: 0 0 75%;\s*overflow: hidden;\s*\}/g, '.project-plans-slider {\n  flex: 0 0 calc(75% - 40px);\n  overflow: hidden;\n}');
  content = content.replace(/\.project-plan-card \{\s*flex: 0 0 370px;/g, '.project-plan-card {\n  flex: 0 0 calc(50% - 15px);');
  content = content.replace(/  \.project-plan-card \{\s*flex: 0 0 420px;\s*\}/g, '  .project-plan-card {\n    flex: 0 0 calc(50% - 15px);\n  }');
  content = content.replace(/  \.project-plan-card \{\s*flex: 0 0 85%;\s*\}/g, '  .project-plan-card {\n    flex: 0 0 calc(50% - 15px);\n  }');
  fs.writeFileSync(path, content);
});

// For VooraTechEdge.css
const techPath = 'd:/VOORA02/src/pages/VooraTechEdge.css';
if (fs.existsSync(techPath)) {
  let techContent = fs.readFileSync(techPath, 'utf8');
  techContent = techContent.replace(/\.project-plan-cards \{\s*flex: 0 0 370px;/g, '.project-plan-cards {\n  flex: 0 0 calc(50% - 15px);');
  fs.writeFileSync(techPath, techContent);
}

console.log('Done!');
