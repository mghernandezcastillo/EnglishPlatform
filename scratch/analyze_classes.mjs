import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumTeensStudio.ts', 'utf8');

// Find all levels
const levelRegex = /"id":\s*"(teens-[^"]+)"/g;
const levels = [...content.matchAll(levelRegex)].map(m => m[1]);
console.log('Levels found:', levels);

// Find all classes
const classRegex = /"id":\s*"(c-teens-[^"]+)"/g;
const classes = [...content.matchAll(classRegex)].map(m => m[1]);
console.log('Unique classes:', new Set(classes).size, 'Total class matches:', classes.length);

const classCounts = {};
classes.forEach(c => classCounts[c] = (classCounts[c] || 0) + 1);
const duplicates = Object.entries(classCounts).filter(([_, count]) => count > 1);
if (duplicates.length > 0) {
  console.log('Duplicate class definitions:', duplicates);
}
