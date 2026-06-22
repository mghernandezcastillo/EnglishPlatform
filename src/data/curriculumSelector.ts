import { curriculumLevels } from './curriculum';
import { curriculumKidsLevels } from './curriculumKids';

export const getCurriculumForType = (type?: string) => {
  if (type === 'niño') {
    return curriculumKidsLevels;
  }
  return curriculumLevels;
};
