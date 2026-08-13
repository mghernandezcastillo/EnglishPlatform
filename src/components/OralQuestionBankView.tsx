import { Mic2, Printer } from 'lucide-react';
import { getCurriculumForType } from '../data/curriculumSelector';
import { getOralQuestionBank } from '../data/oralQuestionBanks';

interface OralQuestionBankViewProps {
  levelId: string;
}

export function OralQuestionBankView({ levelId }: OralQuestionBankViewProps) {
  const studentType = new URLSearchParams(window.location.search).get('type') || 'adulto';
  const level = getCurriculumForType(studentType).find((item) => item.id === levelId);
  const questions = getOralQuestionBank(levelId, studentType);

  if (!level || questions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
        <div className="max-w-lg rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/15">
          <h1 className="text-3xl font-black">Banco de preguntas no encontrado</h1>
          <p className="mt-3 font-semibold text-slate-300">Revisa el nivel o el tipo de estudiante del enlace.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 px-4 py-7 text-white sm:px-8 sm:py-10 print:bg-white print:text-slate-950">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-9 print:border-slate-300 print:bg-white print:shadow-none">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300/15 px-4 py-2 text-sm font-black uppercase tracking-wider text-cyan-200 ring-1 ring-cyan-200/25 print:text-cyan-800">
                <Mic2 className="h-5 w-5" /> Banco oral del tutor
              </span>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{level.title}</h1>
              <p className="mt-3 max-w-3xl text-lg font-semibold text-blue-100 print:text-slate-600">
                Elige las preguntas más adecuadas para el estudiante. No es necesario usarlas todas ni mostrarlas simultáneamente durante el examen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-5 font-black text-indigo-900 shadow-xl transition hover:-translate-y-0.5 print:hidden"
            >
              <Printer className="h-5 w-5" /> Imprimir / guardar PDF
            </button>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-2 print:grid-cols-1">
          {questions.map((question, index) => (
            <article
              key={`${question.topic}-${index}`}
              className="flex min-h-52 flex-col rounded-[2rem] border border-white/15 bg-white p-6 text-slate-950 shadow-xl sm:p-8 print:min-h-0 print:border-slate-300 print:shadow-none"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-indigo-700">
                  {question.topic}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-white">
                  {index + 1}
                </span>
              </div>
              <p className="mt-6 text-2xl font-black leading-snug sm:text-3xl">{question.question}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
