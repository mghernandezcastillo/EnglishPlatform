import * as fs from 'fs';
const text = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

const start = text.indexOf('id: "c-teens-basic-zero-1"');
const end = text.indexOf('id: "c-teens-basic-zero-2"');
const c1 = text.substring(start, end);

const lines = c1.split('\n');
lines.forEach((line, i) => {
  if (line.includes('imageUrl')) {
    console.log(line.trim());
  }
});
