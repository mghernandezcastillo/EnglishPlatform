import * as fs from 'fs';

const filePath = 'src/data/curriculumTeens.ts';
let text = fs.readFileSync(filePath, 'utf8');

const start = text.indexOf('id: "c-teens-basic-zero-1"');
const end = text.indexOf('id: "c-teens-basic-zero-2"');
let c1 = text.substring(start, end);

let lines = c1.split('\n');
let modified = false;

lines = lines.map(line => {
  if (line.includes('{ id: "slide-')) {
    if (!line.includes('imageUrl:') && !line.includes('type: "spinning-wheel"')) {
      // Add getImg
      const imgToAdd = `imageUrl: getImg(${Math.floor(Math.random() * 5)}), `;
      // Insert after description: "...", or title: "...",
      return line.replace(/(description: "[^"]*", )/, `$1${imgToAdd}`);
    }
  }
  return line;
});

if (lines.join('\n') !== c1) {
  const newText = text.substring(0, start) + lines.join('\n') + text.substring(end);
  fs.writeFileSync(filePath, newText, 'utf8');
  console.log("Updated c-teens-basic-zero-1 missing images.");
} else {
  console.log("No missing images needed to be added.");
}
