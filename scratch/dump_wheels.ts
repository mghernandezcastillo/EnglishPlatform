import { curriculumTeensStudioLevels } from '../src/data/curriculumTeensStudio.ts';
import fs from 'fs';

console.log('Loaded curriculumTeensStudioLevels successfully!');
console.log('Total levels:', curriculumTeensStudioLevels.length);

const classWheels = [];

curriculumTeensStudioLevels.forEach(level => {
  level.classes.forEach(cls => {
    const wheelSlide = cls.sections.flatMap(s => s.slides || []).find(s => s.type === 'spinning-wheel');
    classWheels.push({
      levelId: level.id,
      levelTitle: level.title,
      classId: cls.id,
      classTitle: cls.title,
      wheelTitle: wheelSlide?.title || 'NO WHEEL TITLE',
      wheelDescription: wheelSlide?.description || '',
      wheelItems: wheelSlide?.wheelItems || []
    });
  });
});

console.log('Total class wheels found:', classWheels.length);
fs.writeFileSync('scratch/all_wheels_dump.json', JSON.stringify(classWheels, null, 2), 'utf8');
console.log('Dumped to scratch/all_wheels_dump.json');
