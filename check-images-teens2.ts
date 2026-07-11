import * as fs from 'fs';
const text = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');
const lines = text.split('\n');

let missingCount = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('imageUrl:')) {
    if (line.includes('imageUrl: ""')) {
      console.log(`Line ${i+1}: empty imageUrl`);
      missingCount++;
    } else if (line.includes('imageUrl: "http')) {
        // all good
    } else if (line.includes('imageUrl: getImg')) {
        // all good
    } else {
        console.log(`Line ${i+1}: strange imageUrl: ${line.trim()}`);
        missingCount++;
    }
  }
}
console.log(`Total missing or strange: ${missingCount}`);
