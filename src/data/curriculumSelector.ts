import { CurriculumLevel } from '../types';

export const getCurriculumMode = (): 'studio' | 'classic' => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem('maven_presentation_mode');
    if (saved === 'classic' || saved === 'studio') return saved;
  }
  return 'studio';
};

export const setCurriculumMode = (mode: 'studio' | 'classic') => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('maven_presentation_mode', mode);
  }
};

/**
 * Loads ONLY the curriculum for the requested student type.
 * Adults  →  curriculum.ts      (~2.2 MB)
 * Teens   →  curriculumTeens.ts (~2.3 MB) + curriculumTeensStudio.ts
 * Kids    →  curriculumKids.ts  (~0.7 MB)
 * Before: all three were imported statically = 5.2 MB always.
 */
export const getCurriculumForType = async (type?: string, modeOverride?: 'studio' | 'classic'): Promise<CurriculumLevel[]> => {
  const track = type === 'niño' ? 'niño' : type === 'adolescente' ? 'adolescente' : 'adulto';
  const mode = modeOverride || getCurriculumMode();

  let base: CurriculumLevel[];
  if (track === 'niño') {
    const { curriculumKidsLevels } = await import('./curriculumKids');
    if (mode === 'studio') {
      try {
        const { curriculumTeensStudioLevels } = await import('./curriculumTeensStudio');
        const studioLevelsMap = new Map<string, CurriculumLevel>();
        curriculumTeensStudioLevels.forEach((lvl) => {
          studioLevelsMap.set(lvl.id.replace(/^teens-/, 'kids-'), lvl);
        });
        base = curriculumKidsLevels.map((lvl) => {
          const studioLvl = studioLevelsMap.get(lvl.id);
          if (!studioLvl) return lvl;
          return {
            ...lvl,
            classes: studioLvl.classes.map(cls => ({
              ...cls,
              id: cls.id.replace(/^c-teens-/, 'c-kids-')
            })),
            oralEvaluation: studioLvl.oralEvaluation || lvl.oralEvaluation,
            virtualEvaluation: studioLvl.virtualEvaluation || lvl.virtualEvaluation,
          };
        });
      } catch (err) {
        console.warn('Fallback to classic kids curriculum:', err);
        base = curriculumKidsLevels;
      }
    } else {
      base = curriculumKidsLevels;
    }
  } else if (track === 'adolescente') {
    const { curriculumTeensLevels } = await import('./curriculumTeens');
    if (mode === 'studio') {
      try {
        const { curriculumTeensStudioLevels } = await import('./curriculumTeensStudio');
        const studioLevelsMap = new Map<string, CurriculumLevel>();
        curriculumTeensStudioLevels.forEach((lvl) => {
          studioLevelsMap.set(lvl.id, lvl);
        });

        base = curriculumTeensLevels.map((lvl) => {
          const studioLvl = studioLevelsMap.get(lvl.id);
          if (!studioLvl) return lvl;
          return {
            ...lvl,
            ...studioLvl,
            oralEvaluation: studioLvl.oralEvaluation || lvl.oralEvaluation,
            virtualEvaluation: studioLvl.virtualEvaluation || lvl.virtualEvaluation,
          };
        });
      } catch (err) {
        console.warn('Fallback to classic teens curriculum:', err);
        base = curriculumTeensLevels;
      }
    } else {
      base = curriculumTeensLevels;
    }
  } else {
    // Adults track
    const { curriculumLevels } = await import('./curriculum');
    if (mode === 'studio') {
      try {
        const { curriculumTeensStudioLevels } = await import('./curriculumTeensStudio');
        const studioLevelsMap = new Map<string, CurriculumLevel>();
        curriculumTeensStudioLevels.forEach((lvl) => {
          studioLevelsMap.set(lvl.id.replace(/^teens-/, ''), lvl);
          studioLevelsMap.set(lvl.id.replace(/^teens-/, 'adults-'), lvl);
        });
        base = curriculumLevels.map((lvl) => {
          const studioLvl = studioLevelsMap.get(lvl.id) || studioLevelsMap.get(lvl.id.replace(/^adults-/, ''));
          if (!studioLvl) return lvl;
          return {
            ...lvl,
            classes: studioLvl.classes.map(cls => ({
              ...cls,
              id: cls.id.replace(/^c-teens-/, 'c-adults-')
            })),
            oralEvaluation: studioLvl.oralEvaluation || lvl.oralEvaluation,
            virtualEvaluation: studioLvl.virtualEvaluation || lvl.virtualEvaluation,
          };
        });
      } catch (err) {
        console.warn('Fallback to classic adults curriculum:', err);
        base = curriculumLevels;
      }
    } else {
      base = curriculumLevels;
    }
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
