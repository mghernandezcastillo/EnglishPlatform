import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

content = content.replace(/"id": "kids-/g, '"id": "teens-');

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Replaced kids ID");
