import { useState, useEffect } from 'react';
import { CurriculumLevel } from '../types';
import { getCurriculumForType } from '../data/curriculumSelector';

export function useCurriculum(studentType?: string) {
  const [curriculumLevels, setCurriculumLevels] = useState<CurriculumLevel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // We simply use the static files for the curriculum.
    setCurriculumLevels(getCurriculumForType(studentType));
    setLoading(false);
  }, [studentType]);

  return { curriculumLevels, loading, error };
}
