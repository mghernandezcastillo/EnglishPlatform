import * as fs from 'fs';
const files = ['src/data/curriculumTeens.ts', 'src/data/curriculum.ts', 'src/data/curriculumKids.ts'];

let totalMissing = 0;
files.forEach(file => {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('imageUrl:')) {
      const match = line.match(/imageUrl:\s*["'](.*?)["']/);
      if (match) {
        const url = match[1];
        if (!url.startsWith('http') && !url.includes('getImg')) {
           console.log(`File ${file} Line ${i+1}: bad url -> ${url}`);
           totalMissing++;
        }
      }
    }
  });
});
console.log(`Total bad urls: ${totalMissing}`);
