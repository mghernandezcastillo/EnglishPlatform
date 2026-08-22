import { curriculumLevels } from './curriculum';
import { curriculumKidsLevels } from './curriculumKids';
import { curriculumTeensLevels } from './curriculumTeens';

export const getCurriculumForType = (type?: string) => {
  const track = type === 'niño' ? 'niño' : type === 'adolescente' ? 'adolescente' : 'adulto';
  let base = curriculumLevels;
  if (track === 'niño') base = curriculumKidsLevels;
  if (track === 'adolescente') base = curriculumTeensLevels;

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const saved = localStorage.getItem(`maven_curriculum_custom_${track}`);
      if (saved) {
        const overrides = JSON.parse(saved);
        return base.map(lvl => ({
          ...lvl,
          classes: lvl.classes.map(cls => overrides[cls.id] || cls)
        }));
      }
    } catch (e) {
      console.warn('Error reading curriculum custom overrides:', e);
    }
  }

  return base;
};
