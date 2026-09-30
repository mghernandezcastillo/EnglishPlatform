import fs from 'fs';

const text = fs.readFileSync('src/data/curriculumTeensStudio.ts', 'utf8');
const search = '"id": "c-teens-basic-2-1"';
const idx = text.indexOf(search);
if (idx !== -1) {
  console.log(text.slice(idx + 1800, idx + 4500));
}
