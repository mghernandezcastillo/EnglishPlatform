import * as fs from 'fs';
const text = fs.readFileSync('src/data/curriculum.ts', 'utf8');
const start = text.indexOf('"id": "c-bz-10"');
const end = start + 12000;
const section = text.substring(start, end);
const slides = section.split('\n').filter(l => l.includes('"id": "Diapositiva') || l.includes('"id": "slide-') || l.includes('imageUrl'));
console.log(slides.join('\n'));
