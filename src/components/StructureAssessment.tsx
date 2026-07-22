import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Copy, MessageCircle, RefreshCw, Trophy, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createStructureAssessmentQuestions, STRUCTURE_ASSESSMENT_TIME_SECONDS, StructureAssessmentQuestion } from '../data/structureAssessment';
import { structureRoadmap } from '../data/structureMode';
import { dbAdmin } from '../lib/db';

type StructureAssessmentProps = {
  studentId?: string | null;
  localKey: string;
  studentName?: string;
  onClose: () => void;
};

type AssessmentMode = 'intro' | 'quiz' | 'results';
type SharedReport = {
  assessment: string;
  score: number;
  total: number;
  percentage: number;
  weakTopics: string[];
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function buildFeedback(questions: StructureAssessmentQuestion[], answers: Record<string, number>) {
  return questions.map((question) => {
    const selectedIndex = answers[question.id];
    const isCorrect = selectedIndex === question.correctIndex;
    return {
      questionId: question.id,
      blockId: question.blockId,
      topicId: question.topicId,
      topicTitle: question.topicTitle,
      variation: question.variation,
      isCorrect,
      selected: selectedIndex === undefined ? null : question.options[selectedIndex],
      correct: question.options[question.correctIndex],
      note: isCorrect ? question.feedbackCorrect : question.feedbackIncorrect
    };
  });
}

export function StructureAssessment({ studentId, localKey, studentName, onClose }: StructureAssessmentProps) {
  const [mode, setMode] = useState<AssessmentMode>('intro');
  const [sharedReport] = useState<SharedReport | null>(() => {
    const encoded = new URLSearchParams(window.location.search).get('structureReport');
    if (!encoded) return null;
    try {
      return JSON.parse(decodeURIComponent(escape(atob(encoded))));
    } catch {
      return null;
    }
  });
  const [blockId, setBlockId] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(STRUCTURE_ASSESSMENT_TIME_SECONDS);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [shareLink, setShareLink] = useState('');
  const [copied, setCopied] = useState(false);

  const questions = useMemo(() => createStructureAssessmentQuestions(blockId === 'all' ? undefined : blockId), [blockId]);
  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce((sum, question) => sum + (answers[question.id] === question.correctIndex ? 1 : 0), 0);
  const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
  const resultFeedback = useMemo(() => buildFeedback(questions, answers), [questions, answers]);
  const weakTopics = resultFeedback.filter((item) => !item.isCorrect).slice(0, 8);

  useEffect(() => {
    if (mode !== 'quiz') return;
    if (timeLeft <= 0) {
      finishAssessment();
      return;
    }
    const id = window.setInterval(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearInterval(id);
  }, [mode, timeLeft]);

  const startAssessment = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShareLink('');
    setCopied(false);
    setTimeLeft(blockId === 'all' ? STRUCTURE_ASSESSMENT_TIME_SECONDS : 20 * 60);
    setStartedAt(Date.now());
    setMode('quiz');
  };

  const finishAssessment = async () => {
    const durationSeconds = startedAt ? Math.max(1, Math.round((Date.now() - startedAt) / 1000)) : 0;
    const shareToken = `structure-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify({
      assessment: blockId,
      score,
      total: questions.length,
      percentage,
      weakTopics: weakTopics.map((item) => item.topicTitle)
    }))));
    const link = `${window.location.origin}${window.location.pathname}?structureReport=${encoded}`;

    await dbAdmin.saveStructureAssessmentAttempt({
      student_id: studentId || null,
      local_key: localKey,
      student_name: studentName || '',
      assessment_id: 'structure-super-assessment-v1',
      block_id: blockId === 'all' ? null : blockId,
      score,
      total: questions.length,
      percentage,
      duration_seconds: durationSeconds,
      answers,
      feedback: resultFeedback,
      share_token: shareToken
    });

    setShareLink(link);
    setMode('results');
    confetti({ particleCount: 140, spread: 85, origin: { y: 0.58 } });
  };

  const selectAnswer = (index: number) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: index }));
  };

  const shareResultsToWhatsApp = () => {
    const weakText = weakTopics.length
      ? weakTopics.map((item) => `- ${item.topicTitle}: ${item.note}`).join('\n')
      : 'No weak topics. Excellent coverage.';
    const text = [
      `Structure Assessment Result${studentName ? ` - ${studentName}` : ''}`,
      `Score: ${score}/${questions.length} (${percentage}%)`,
      `Time: ${formatTime(startedAt ? Math.max(1, Math.round((Date.now() - startedAt) / 1000)) : 0)}`,
      '',
      'Feedback:',
      weakText,
      '',
      shareLink
    ].join('\n');

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const copyShareLink = async () => {
    if (!shareLink) return;
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };

  return (
    <div className="fixed inset-0 z-[260] overflow-y-auto bg-slate-950 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col p-3 sm:p-5">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-black/25 p-3 backdrop-blur-md sm:flex-nowrap">
          <button type="button" onClick={onClose} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-black transition hover:bg-white/20">
            <ArrowLeft className="h-5 w-5" />
            Estructuras
          </button>
          <div className="min-w-[160px] flex-1 text-center">
            <div className="text-sm font-black uppercase tracking-widest text-emerald-200">Quiz con tiempo</div>
            <h1 className="truncate text-2xl font-black sm:text-4xl">Super Evaluación</h1>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 sm:text-base">
            {mode === 'quiz' ? formatTime(timeLeft) : `${questions.length} preguntas`}
          </div>
        </header>

        {mode === 'intro' && (
          <main className="grid flex-1 gap-4 xl:grid-cols-[1fr_0.8fr]">
            <section className="rounded-[2rem] border border-white/15 bg-white/12 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              {sharedReport && (
                <div className="mb-5 rounded-3xl border border-emerald-200/50 bg-emerald-300 p-5 text-slate-950 shadow-2xl">
                  <div className="text-sm font-black uppercase tracking-widest opacity-70">Resultado compartido</div>
                  <div className="mt-1 text-4xl font-black">{sharedReport.percentage}%</div>
                  <div className="text-xl font-black">{sharedReport.score}/{sharedReport.total} correctas</div>
                  {sharedReport.weakTopics.length > 0 && (
                    <p className="mt-3 text-base font-bold leading-snug">
                      Reforzar: {sharedReport.weakTopics.slice(0, 5).join(', ')}
                    </p>
                  )}
                </div>
              )}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 text-sm font-black uppercase tracking-widest text-slate-950">
                <Clock className="h-5 w-5" />
                Intentos ilimitados
              </div>
              <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-none">Todos los bloques, todas las estructuras.</h2>
              <p className="mt-5 text-[clamp(1.2rem,2.8vw,1.875rem)] font-bold leading-relaxed text-white/75">
                Evalúa reconocimiento, función y revisión de errores por cada tema del roadmap. Puedes repetirla indefinidamente y compartir la retroalimentación.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button type="button" onClick={startAssessment} className="rounded-3xl bg-emerald-300 px-6 py-5 text-2xl font-black text-slate-950 shadow-2xl transition hover:scale-[1.02]">
                  Empezar evaluación
                </button>
                <button type="button" onClick={() => setBlockId('all')} className="rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-xl font-black transition hover:bg-white/20">
                  Ruta completa
                </button>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-black">Elegir bloque</h3>
              <div className="grid max-h-[620px] gap-2 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setBlockId('all')}
                  className={`rounded-2xl px-4 py-3 text-left font-black transition ${blockId === 'all' ? 'bg-emerald-300 text-slate-950' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  Ruta completa - {createStructureAssessmentQuestions().length} preguntas
                </button>
                {structureRoadmap.map((module) => (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setBlockId(module.id)}
                    className={`rounded-2xl px-4 py-3 text-left font-black transition ${blockId === module.id ? 'bg-emerald-300 text-slate-950' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    <span className="block">{module.title}</span>
                    <span className="text-sm opacity-70">{module.lessons.length * 3} preguntas</span>
                  </button>
                ))}
              </div>
            </section>
          </main>
        )}

        {mode === 'quiz' && currentQuestion && (
          <main className="flex min-h-0 flex-1 flex-col gap-4">
            <div className="h-4 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-yellow-300" animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
            </div>
            <section className="grid min-h-0 flex-1 gap-4 xl:grid-cols-[0.72fr_1.28fr]">
              <aside className="rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md">
                <div className="text-sm font-black uppercase tracking-widest text-emerald-200">{currentQuestion.blockTitle}</div>
                <h2 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] font-black leading-none">{currentQuestion.topicTitle}</h2>
                <p className="mt-5 text-xl font-bold text-white/65">Pregunta {currentIndex + 1} de {questions.length}</p>
                <p className="mt-2 text-lg font-black text-yellow-200">{answeredCount}/{questions.length} respondidas</p>
              </aside>
              <section className="rounded-[2rem] border border-white/15 bg-white p-5 text-slate-950 shadow-2xl sm:p-8">
                <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight">{currentQuestion.question}</h3>
                <div className="mt-7 grid gap-3">
                  {currentQuestion.options.map((option, index) => {
                    const selected = answers[currentQuestion.id] === index;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectAnswer(index)}
                        className={`rounded-3xl border-2 px-5 py-4 text-left text-[clamp(1.15rem,2.6vw,1.65rem)] font-black leading-tight transition ${
                          selected ? 'border-emerald-500 bg-emerald-100 text-emerald-950' : 'border-slate-100 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </section>
            </section>
            <footer className="flex flex-wrap items-center justify-between gap-3">
              <button type="button" onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))} disabled={currentIndex === 0} className="rounded-2xl bg-white/10 px-5 py-4 font-black disabled:opacity-30">
                Anterior
              </button>
              {currentIndex === questions.length - 1 ? (
                <button type="button" onClick={finishAssessment} className="flex items-center gap-2 rounded-2xl bg-emerald-300 px-6 py-4 text-xl font-black text-slate-950">
                  Terminar <CheckCircle className="h-6 w-6" />
                </button>
              ) : (
                <button type="button" onClick={() => setCurrentIndex((value) => Math.min(questions.length - 1, value + 1))} className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-xl font-black text-slate-950">
                  Siguiente <ArrowRight className="h-6 w-6" />
                </button>
              )}
            </footer>
          </main>
        )}

        {mode === 'results' && (
          <main className="grid flex-1 gap-4 xl:grid-cols-[0.8fr_1.2fr]">
            <section className="rounded-[2rem] border border-white/15 bg-white p-6 text-center text-slate-950 shadow-2xl sm:p-8">
              <Trophy className="mx-auto mb-4 h-20 w-20 text-yellow-400" />
              <h2 className="text-5xl font-black">{percentage}%</h2>
              <p className="mt-2 text-2xl font-black">{score}/{questions.length} correctas</p>
              <div className="mt-6 grid gap-3">
                <button type="button" onClick={shareResultsToWhatsApp} className="flex items-center justify-center gap-3 rounded-3xl bg-emerald-400 px-6 py-4 text-xl font-black text-slate-950">
                  <MessageCircle className="h-6 w-6" />
                  Compartir por WhatsApp
                </button>
                <button type="button" onClick={copyShareLink} className="flex items-center justify-center gap-3 rounded-3xl bg-slate-900 px-6 py-4 text-xl font-black text-white">
                  <Copy className="h-6 w-6" />
                  {copied ? 'Link copiado' : 'Copiar link'}
                </button>
                <button type="button" onClick={startAssessment} className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 px-6 py-4 text-xl font-black">
                  <RefreshCw className="h-6 w-6" />
                  Repetir evaluación
                </button>
              </div>
            </section>
            <section className="rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md">
              <h3 className="mb-4 text-3xl font-black">Retroalimentación</h3>
              <div className="grid max-h-[640px] gap-3 overflow-y-auto pr-1">
                {(weakTopics.length ? weakTopics : resultFeedback.slice(0, 8)).map((item) => (
                  <div key={item.questionId} className={`rounded-3xl border p-4 ${item.isCorrect ? 'border-emerald-300 bg-emerald-300 text-slate-950' : 'border-rose-300 bg-rose-100 text-rose-950'}`}>
                    <div className="mb-2 flex items-center gap-2 font-black">
                      {item.isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      {item.topicTitle}
                    </div>
                    <p className="font-bold leading-snug">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  );
}
