import { curriculumLevels } from './curriculum';
import { curriculumKidsLevels } from './curriculumKids';
import { curriculumTeensLevels } from './curriculumTeens';

export const getCurriculumForType = (type?: string) => {
  if (type === 'niño') {
    return curriculumKidsLevels;
  }
  if (type === 'adolescente') {
    return curriculumTeensLevels;
  }
  return curriculumLevels;
};
