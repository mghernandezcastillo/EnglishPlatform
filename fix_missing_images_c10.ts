import * as fs from 'fs';

const image = '"imageUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"';

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const start = content.indexOf('"id": "c-bz-10"');
const end = content.indexOf('"id": "c-adults-', start + 20);

let section = content.substring(start, end);

const ids = [
  '"id": "Diapositiva-Emoji-Auto-fix-7",',
  '"id": "Diapositiva 17",',
  '"id": "Diapositiva-Video-Homework-10",'
];

for (const id of ids) {
  const idPos = section.indexOf(id);
  if (idPos !== -1) {
    const nextBracket = section.indexOf('}', idPos);
    // insert imageUrl before nextBracket
    const before = section.substring(0, nextBracket);
    const after = section.substring(nextBracket);
    
    // add comma to the line before if necessary, wait, it's easier to find the last line and add comma.
    // let's just use regex or replace
    
    // Find the last non-whitespace character before nextBracket
    const lastCharMatch = before.match(/(\S)\s*$/);
    if (lastCharMatch) {
        section = before.replace(/(\S)(\s*)$/, `$1,\n                ${image}$2`) + after;
    }
  }
}

content = content.substring(0, start) + section + content.substring(end);
fs.writeFileSync('src/data/curriculum.ts', content, 'utf8');
console.log('Fixed missing images in c-bz-10');
