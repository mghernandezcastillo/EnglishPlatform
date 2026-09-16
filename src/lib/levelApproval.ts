import type { DbStudent, CurriculumLevel } from '../types';

export const LEVEL_APPROVAL_MARKER_PREFIX = '__level_approved__:';

export function levelApprovalMarker(levelId: string) {
  return `${LEVEL_APPROVAL_MARKER_PREFIX}${levelId}`;
}

export function isLevelApprovalMarker(value: string) {
  return value.startsWith(LEVEL_APPROVAL_MARKER_PREFIX);
}

export function visibleCompletedLessonIds(completedLessons: string[]) {
  return completedLessons.filter((id) => !isLevelApprovalMarker(id));
}

export function approvedLevelIdsForStudent(student: Pick<DbStudent, 'approved_levels' | 'completed_lessons'>) {
  const legacyApprovals = (student.completed_lessons || [])
    .filter(isLevelApprovalMarker)
    .map((marker) => marker.slice(LEVEL_APPROVAL_MARKER_PREFIX.length));

  return Array.from(new Set([...(student.approved_levels || []), ...legacyApprovals]));
}

export function findMatchingCurriculumLevel(levels: CurriculumLevel[], studentLevel?: string): CurriculumLevel | undefined {
  if (!levels || levels.length === 0) return undefined;
  if (!studentLevel || !studentLevel.trim()) return levels[0];

  const raw = studentLevel.trim().toLowerCase();
  const normalized = raw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. Direct ID match or stripped ID match
  const directId = levels.find((l) => {
    const lid = l.id.toLowerCase();
    const strippedId = lid.replace(/^(teens|adults|kids)-/, '');
    return lid === raw || strippedId === raw || lid === normalized || strippedId === normalized;
  });
  if (directId) return directId;

  // 2. Zero / Cero
  if (/\b(zero|cero|0)\b/.test(normalized)) {
    const zeroMatch = levels.find((l) => /basic-zero|level-0|nivel 0|level 0/i.test(`${l.id} ${l.title}`));
    if (zeroMatch) return zeroMatch;
  }

  // 3. Numbers 1 to 8 (e.g. "Basic 1", "Básico 1", "Level 1", "Nivel 1")
  for (let num = 8; num >= 1; num--) {
    const regex = new RegExp(`(^|\\b|[^a-zA-Z0-9])${num}($|\\b|[^a-zA-Z0-9])`);
    if (regex.test(normalized)) {
      const match = levels.find((l) => {
        const lNorm = `${l.id} ${l.title}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return new RegExp(`(basic-${num}|level-${num}|level ${num}|nivel ${num})`, 'i').test(lNorm);
      });
      if (match) return match;
    }
  }

  // 4. Named levels
  if (/\b(inter|intermediate|intermedio)\b/.test(normalized)) {
    const match = levels.find((l) => /inter/i.test(`${l.id} ${l.title}`));
    if (match) return match;
  }
  if (/\b(advan|advanced|avanzado)\b/.test(normalized)) {
    const match = levels.find((l) => /advanced|avanzado/i.test(`${l.id} ${l.title}`));
    if (match) return match;
  }
  if (/\b(elite|élite)\b/.test(normalized)) {
    const match = levels.find((l) => /elite/i.test(`${l.id} ${l.title}`));
    if (match) return match;
  }
  if (/\b(master|masters|maestria)\b/.test(normalized)) {
    const match = levels.find((l) => /master|maestria/i.test(`${l.id} ${l.title}`));
    if (match) return match;
  }

  // 5. MCFR codes (Pre-A1, A1, A2, B1, B2, C1)
  if (/\bpre-?a1\b/.test(normalized)) {
    const match = levels.find((l) => (l.mcfrEquivalent || '').toLowerCase().includes('pre-a1'));
    if (match) return match;
  }
  if (/\ba1\b/.test(normalized)) {
    const match = levels.find((l) => (l.mcfrEquivalent || '').toLowerCase() === 'a1' || /basic-1|level 1/i.test(l.title));
    if (match) return match;
  }
  if (/\ba2\b/.test(normalized)) {
    const match = levels.find((l) => (l.mcfrEquivalent || '').toLowerCase() === 'a2' || /basic-2|level 2/i.test(l.title));
    if (match) return match;
  }
  if (/\bb1\b/.test(normalized)) {
    const match = levels.find((l) => (l.mcfrEquivalent || '').toLowerCase() === 'b1' || /basic-3|level 3/i.test(l.title));
    if (match) return match;
  }
  if (/\bb2\b/.test(normalized)) {
    const match = levels.find((l) => (l.mcfrEquivalent || '').toLowerCase() === 'b2' || /basic-4|level 4/i.test(l.title));
    if (match) return match;
  }

  // 6. Fallback: all tokens must match
  const tokens = normalized.split(/\s+/).filter(Boolean);
  const allMatch = levels.find((l) => {
    const tNorm = l.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return tokens.every((tok) => tNorm.includes(tok));
  });
  if (allMatch) return allMatch;

  return levels[0];
}

