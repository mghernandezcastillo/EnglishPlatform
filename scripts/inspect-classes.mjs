import fs from 'fs';

const files = ['curriculumTeens.ts', 'curriculum.ts', 'curriculumKids.ts'];

for (const file of files) {
  const content = fs.readFileSync('src/data/' + file, 'utf8');
  // Match classes
  const regex = /["']?id["']?\s*:\s*["']([^"']+)["'],\s*["']?title["']?\s*:\s*["'](Class\s+\d+[^"']+)["']/g;
  let match;
  let count = 0;
  console.log(`\n=== ${file} ===`);
  const classes = [];
  while ((match = regex.exec(content)) !== null) {
    count++;
    classes.push({ id: match[1], title: match[2] });
    if (count <= 5 || count % 10 === 0) {
      console.log(`  ${count}. [${match[1]}] ${match[2]}`);
    }
  }
  console.log(`Total classes found in ${file}: ${count}`);
}
