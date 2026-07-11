import * as fs from 'fs';
const text = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

// Find c-teens-basic-zero-1
const startIndex = text.indexOf('id: "c-teens-basic-zero-1"');
const endIndex = text.indexOf('id: "c-teens-basic-zero-2"');
const classText = text.substring(startIndex, endIndex);

const lines = classText.split('\n');
lines.forEach((line, i) => {
  if (line.includes('{ id: "slide-')) {
    const hasImage = line.includes('imageUrl:');
    const slideIdMatch = line.match(/{ id: "(slide-\d+)"/);
    const slideId = slideIdMatch ? slideIdMatch[1] : 'unknown';
    console.log(`${slideId}: hasImage=${hasImage}`);
  }
});
