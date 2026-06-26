import fs from 'fs';

function prepare(filename, outname) {
    let code = fs.readFileSync(filename, 'utf8');
    // Replace import of .jpg with empty string assignment
    code = code.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+['"][^'"]+\.jpg['"];/g, 'const $1 = "";');
    // For curriculum.ts we might also have .png
    code = code.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+['"][^'"]+\.png['"];/g, 'const $1 = "";');
    // we also need to fix types imports if they are relative, because we are putting it in root.
    code = code.replace(/from '\.\.\/types'/g, "from './src/types'");
    code = code.replace(/from '\.\/lessons'/g, "from './src/data/lessons'");
    fs.writeFileSync(outname, code, 'utf8');
}

prepare('src/data/curriculumTeens.ts', 'tempTeens.ts');
prepare('src/data/curriculum.ts', 'tempAdults.ts');

const validateScript = `
import { curriculumTeensLevels } from './tempTeens.ts';
import { curriculumLevels as curriculumAdults } from './tempAdults.ts';

function validate(name, levels) {
  if (!levels) return;
  console.log('=== ' + name + ' ===');
  const levelIds = new Set();
  const classIds = new Set();
  
  levels.forEach(l => {
    if (levelIds.has(l.id)) {
      console.log('DUPLICATE LEVEL ID: ' + l.id);
    }
    levelIds.add(l.id);
    
    console.log('Level: ' + l.id + ' (' + l.title + ') - ' + (l.classes ? l.classes.length : 0) + ' classes');
    if (l.classes) {
        l.classes.forEach(c => {
          if (classIds.has(c.id)) {
            console.log('  DUPLICATE CLASS ID: ' + c.id + ' in level ' + l.id);
          }
          classIds.add(c.id);
          
          let slideCount = 0;
          if (c.sections) {
              c.sections.forEach(s => {
                slideCount += (s.slides ? s.slides.length : 0);
              });
          }
          if (slideCount === 0) {
            console.log('  EMPTY CLASS (0 slides): ' + c.id + ' - ' + c.title);
          }
        });
    }
  });
}

validate('Teens', curriculumTeensLevels);
validate('Adults', curriculumAdults);
`;

fs.writeFileSync('tempValidate.ts', validateScript, 'utf8');
