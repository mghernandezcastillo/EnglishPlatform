import { EvaluationRecord } from '../types';

export type ExamType = 'oral' | 'virtual';

export const ORAL_PASS_PERCENT = 70;
export const VIRTUAL_PASS_PERCENT = 80;

export function evaluationPercentage(evaluation?: EvaluationRecord | null) {
  if (!evaluation || !evaluation.total_questions) return 0;
  return Math.round((evaluation.score / evaluation.total_questions) * 100);
}

export function evaluationExamType(evaluation: EvaluationRecord): ExamType {
  return evaluation.answers?.__examType === 'oral' ? 'oral' : 'virtual';
}

export function latestEvaluation(
  evaluations: EvaluationRecord[],
  levelId: string,
  type: ExamType
) {
  return evaluations
    .filter((evaluation) => evaluation.level_id === levelId && evaluationExamType(evaluation) === type)
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))[0] || null;
}

export function evaluationPassed(evaluation: EvaluationRecord | null, type: ExamType) {
  const threshold = type === 'oral' ? ORAL_PASS_PERCENT : VIRTUAL_PASS_PERCENT;
  return Boolean(evaluation && evaluationPercentage(evaluation) >= threshold);
}
