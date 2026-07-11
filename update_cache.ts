import * as fs from 'fs';

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const class10Start = content.indexOf('"id": "c-bz-10"');
const class10End = content.indexOf('"id": "c-adults-basic-zero-11"');

if (class10Start !== -1 && class10End !== -1) {
  let section = content.substring(class10Start, class10End);
  
  // Add ?v=2 to all .jpg images
  // Need to handle if they already have ?v=...
  section = section.replace(/\.jpg(\?v=\d+)?/g, '.jpg?v=2');
  
  content = content.substring(0, class10Start) + section + content.substring(class10End);
  fs.writeFileSync('src/data/curriculum.ts', content, 'utf8');
  console.log('Updated cache buster in curriculum.ts for class 10.');
} else {
  console.log('Could not find bounds.');
}
