const fs = require('fs');
const path = require('path');

const backupPath = path.join(__dirname, '..', 'public', 'data', 'story-decoder-curriculum.json.bak');
const targetPath = path.join(__dirname, '..', 'public', 'data', 'story-decoder-curriculum.json');

if (!fs.existsSync(backupPath)) {
  console.error('❌ No se encontró la copia de seguridad en:', backupPath);
  process.exit(1);
}

fs.copyFileSync(backupPath, targetPath);
console.log('✅ Story Decoder Curriculum restaurado exitosamente a su estado original.');
