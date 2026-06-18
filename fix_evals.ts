import * as fs from 'fs';
let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');
content = content.replace(/\\n\s*\{ id: "v1"/g, '\n      { id: "v1"');
fs.writeFileSync('src/data/curriculum.ts', content);
