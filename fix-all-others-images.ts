import * as fs from 'fs';

const filePaths = ['src/data/curriculum.ts', 'src/data/curriculumKids.ts'];

filePaths.forEach(filePath => {
  let text = fs.readFileSync(filePath, 'utf8');
  let lines = text.split('\n');
  let count = 0;

  lines = lines.map(line => {
    if (line.includes('{ id: "Diapositiva ') || line.includes('{ id: "slide-')) {
      if (!line.includes('imageUrl:') && !line.includes('type: "spinning-wheel"')) {
        const imgToAdd = `imageUrl: getImg(${Math.floor(Math.random() * 5)}), `;
        count++;
        // try to insert after description
        if (line.includes('description: "')) {
          return line.replace(/(description: "[^"]*", )/, `$1${imgToAdd}`);
        } else if (line.includes('title: "')) {
          return line.replace(/(title: "[^"]*", )/, `$1${imgToAdd}`);
        }
      }
    }
    return line;
  });

  if (count > 0) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Updated ${count} missing images in ${filePath}`);
  } else {
    console.log(`No missing images in ${filePath}`);
  }
});
