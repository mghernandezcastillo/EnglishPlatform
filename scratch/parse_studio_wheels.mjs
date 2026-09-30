import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumTeensStudio.ts', 'utf8');

// Match class definitions
// Each class starts with "id": "c-teens-...
const classMatches = [...content.matchAll(/"id":\s*"(c-teens-[^"]+)"/g)];
console.log('Total class id matches in curriculumTeensStudio.ts:', classMatches.length);

// Extract spinning-wheel blocks
// Each spinning-wheel slide has "type": "spinning-wheel", "wheelItems": [ ... ]
const wheelMatches = [...content.matchAll(/"type":\s*"spinning-wheel"[\s\S]*?"wheelItems":\s*\[([\s\S]*?)\]\s*\}/g)];
console.log('Total spinning-wheel slides found:', wheelMatches.length);
