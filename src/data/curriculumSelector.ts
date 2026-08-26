import { CurriculumLevel } from '../types';

/**
 * Loads ONLY the curriculum for the requested student type.
 * Adults  →  curriculum.ts      (~2.2 MB)
 * Teens   →  curriculumTeens.ts (~2.3 MB)
 * Kids    →  curriculumKids.ts  (~0.7 MB)
 * Before: all three were imported statically = 5.2 MB always.
 */
export const getCurriculumForType = async (type?: string): Promise<CurriculumLevel[]> => {
  const track = type === 'niño' ? 'niño' : type === 'adolescente' ? 'adolescente' : 'adulto';

  let base: CurriculumLevel[];
  if (track === 'niño') {
    const { curriculumKidsLevels } = await import('./curriculumKids');
    base = curriculumKidsLevels;
  } else if (track === 'adolescente') {
    const { curriculumTeensLevels } = await import('./curriculumTeens');
    base = curriculumTeensLevels;
  } else {
    const { curriculumLevels } = await import('./curriculum');
    base = curriculumLevels;
  }

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
