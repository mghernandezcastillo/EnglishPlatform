import fs from 'fs';

function extractAndEvaluate(filename) {
    let code = fs.readFileSync(filename, 'utf8');
    
    // Remove imports
    code = code.replace(/import\s+.*?;/g, '');
    code = code.replace(/import\s+.*?[\r\n]/g, '');
    
    // Replace export const
    code = code.replace(/export const \w+\s*:\s*[^=]+=\s*/g, 'global.curriculum = ');
    
    // We also have some `const img... = img...` assignments, which we can remove or mock
    code = code.replace(/const img[A-Za-z0-9_]+\s*=\s*[^;]+;/g, '');
    code = code.replace(/img[A-Za-z0-9_]+/g, '""');
    
    try {
        eval(code);
        return global.curriculum;
    } catch(e) {
        console.log("Eval error in " + filename, e);
        return null;
    }
}

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

const teens = extractAndEvaluate('src/data/curriculumTeens.ts');
validate('Teens', teens);

const adults = extractAndEvaluate('src/data/curriculum.ts');
validate('Adults', adults);

