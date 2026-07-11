import * as fs from 'fs';

const filePath = 'src/data/curriculumTeens.ts';
let text = fs.readFileSync(filePath, 'utf8');

let lines = text.split('\n');
let count = 0;

lines = lines.map(line => {
  if (line.includes('{ id: "slide-')) {
    if (!line.includes('imageUrl:') && !line.includes('type: "spinning-wheel"')) {
      const imgToAdd = `imageUrl: getImg(${Math.floor(Math.random() * 5)}), `;
      count++;
      return line.replace(/(description: "[^"]*", )/, `$1${imgToAdd}`);
    }
  }
  return line;
});

if (count > 0) {
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`Updated ${count} missing images across all c-teens-basic-zero-* classes.`);
} else {
  console.log("No missing images needed to be added.");
}
