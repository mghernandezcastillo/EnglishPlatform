
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
