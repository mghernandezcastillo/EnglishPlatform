import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { EvaluationRecord, VirtualQuestion } from '../types';
import { evaluationPercentage, evaluationPassed } from '../lib/evaluationResults';

interface VirtualEvaluationResultProps {
  evaluation?: EvaluationRecord | null;
  questions: VirtualQuestion[];
  compact?: boolean;
}

function normalized(value: unknown) {
  return String(value ?? '').trim().toLowerCase();
}

export function VirtualEvaluationResult({ evaluation, questions, compact = false }: VirtualEvaluationResultProps) {
  if (!evaluation) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-bold text-slate-500">
        El estudiante todavía no ha enviado este examen virtual.
      </div>
    );
  }

  const percentage = evaluationPercentage(evaluation);
  const passed = evaluationPassed(evaluation, 'virtual');
  const mistakes = questions.filter((question) =>
    normalized(evaluation.answers?.[question.id]) !== normalized(question.correctAnswer)
  );

  return (
    <div className={`rounded-2xl border p-4 ${passed ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {passed
            ? <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            : <AlertCircle className="h-6 w-6 text-amber-600" />}
          <div>
            <p className={`font-black ${passed ? 'text-emerald-900' : 'text-amber-900'}`}>
              {passed ? 'Examen virtual aprobado' : 'Examen virtual no aprobado'}
            </p>
            <p className="text-sm font-bold text-slate-600">
              {evaluation.score}/{evaluation.total_questions} correctas · {percentage}%
            </p>
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-black ${passed ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-slate-950'}`}>
          {mistakes.length} {mistakes.length === 1 ? 'error' : 'errores'}
        </span>
      </div>

      {!compact && (
        <div className="mt-4 space-y-3">
          {mistakes.length === 0 ? (
            <p className="rounded-xl bg-white/70 p-3 text-sm font-bold text-emerald-800">No tuvo respuestas incorrectas.</p>
          ) : mistakes.map((question, index) => (
            <div key={question.id} className="rounded-xl border border-white/80 bg-white/80 p-3 text-sm text-slate-800">
              <p className="font-black">{index + 1}. {question.question}</p>
              <p className="mt-2 font-semibold text-rose-700">
                Respondió: {String(evaluation.answers?.[question.id] || 'Sin respuesta')}
              </p>
              <p className="mt-1 font-semibold text-emerald-700">Correcta: {question.correctAnswer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
