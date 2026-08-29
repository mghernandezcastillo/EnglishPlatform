import { useState, useEffect } from 'react';
import { CurriculumLevel } from '../types';
import { getCurriculumForType } from '../data/curriculumSelector';

export function useCurriculum(studentType?: string, presentationMode?: 'studio' | 'classic') {
  const [curriculumLevels, setCurriculumLevels] = useState<CurriculumLevel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCurriculumForType(studentType, presentationMode).then(levels => {
      setCurriculumLevels(levels);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to load curriculum:', err);
      setError('Failed to load curriculum');
      setLoading(false);
    });
  }, [studentType, presentationMode]);

  return { curriculumLevels, loading, error };
}
