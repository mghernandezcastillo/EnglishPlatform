import * as fs from 'fs';

const filePath = 'src/data/curriculumTeens.ts';
let text = fs.readFileSync(filePath, 'utf8');

const start = text.indexOf('id: "c-teens-basic-zero-16"');
const end = text.indexOf('id: "c-teens-basic-1-1"');
let c16 = text.substring(start, end);

let lines = c16.split('\n');

lines = lines.map(line => {
  if (line.includes('{ id: "slide-')) {
    if (!line.includes('imageUrl:') && !line.includes('type: "spinning-wheel"')) {
      const imgToAdd = `imageUrl: getImg(${Math.floor(Math.random() * 5)}), `;
      return line.replace(/(description: "[^"]*", )/, `$1${imgToAdd}`);
    }
  }
  return line;
});

if (lines.join('\n') !== c16) {
  const newText = text.substring(0, start) + lines.join('\n') + text.substring(end);
  fs.writeFileSync(filePath, newText, 'utf8');
  console.log("Updated c-teens-basic-zero-16 missing images.");
} else {
  console.log("No missing images needed to be added to c-teens-basic-zero-16.");
}
