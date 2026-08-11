import type { DbStudent } from '../types';

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
