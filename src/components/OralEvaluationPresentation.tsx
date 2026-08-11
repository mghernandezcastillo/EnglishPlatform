import { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  Headphones,
  Mic2,
  Play,
  RefreshCw,
  Share2,
  Sparkles,
  Trophy,
  Volume2,
  X
} from 'lucide-react';
import { EvaluationRecord, OralQuestion } from '../types';
import { dbAdmin } from '../lib/db';
import { evaluationPassed, ORAL_PASS_PERCENT, evaluationPercentage } from '../lib/evaluationResults';
import { Diploma } from './Diploma';

type CriterionId = 'communication' | 'grammar' | 'vocabulary' | 'pronunciation' | 'fluency';
type RubricScores = Record<number, Partial<Record<CriterionId, number>>>;
type Phase = 'intro' | 'questions' | 'result' | 'celebration' | 'certificate';

const CRITERIA: Array<{
  id: CriterionId;
  label: string;
  shortLabel: string;
  helper: string;
  color: string;
  descriptors: [string, string, string, string, string];
}> = [
  {
    id: 'communication',
    label: 'Cumplimiento de la tarea',
    shortLabel: 'Tarea',
    helper: 'Evalúa si realmente responde lo que se le pregunta.',
    color: '#0ea5e9',
    descriptors: [
      'No responde la pregunta o su respuesta no corresponde al tema.',
      'Responde solo una parte y necesita ayuda para continuar.',
      'Comunica la idea principal, pero faltan detalles.',
      'Responde de forma completa y pertinente.',
      'Responde completamente, añade detalles y desarrolla su idea.'
    ]
  },
  {
    id: 'grammar',
    label: 'Control gramatical',
    shortLabel: 'Gramática',
    helper: 'Observa las estructuras esperadas para este nivel.',
    color: '#8b5cf6',
    descriptors: [
      'Los errores impiden comprender la idea.',
      'Usa palabras o estructuras sueltas con errores frecuentes.',
      'Usa la estructura esperada; los errores no bloquean el mensaje.',
      'Construye frases mayormente correctas para su nivel.',
      'Usa las estructuras con precisión y variedad para su nivel.'
    ]
  },
  {
    id: 'vocabulary',
    label: 'Vocabulario en contexto',
    shortLabel: 'Vocabulario',
    helper: 'Valora palabras útiles y relacionadas con la pregunta.',
    color: '#ec4899',
    descriptors: [
      'No encuentra las palabras necesarias para comunicar la idea.',
      'Usa muy pocas palabras y repite constantemente.',
      'Usa vocabulario básico relacionado con el tema.',
      'Usa suficiente vocabulario y elige palabras apropiadas.',
      'Usa vocabulario variado, preciso y apropiado para su nivel.'
    ]
  },
  {
    id: 'pronunciation',
    label: 'Claridad al hablar',
    shortLabel: 'Claridad',
    helper: 'Evalúa si el mensaje se entiende, no si tiene acento latino.',
    color: '#f59e0b',
    descriptors: [
      'El mensaje casi no se entiende.',
      'Se entienden algunas partes y necesita repetir.',
      'Se entiende con cierto esfuerzo.',
      'Se entiende claramente con pequeños problemas.',
      'Se entiende con facilidad durante toda la respuesta.'
    ]
  },
  {
    id: 'fluency',
    label: 'Fluidez y continuidad',
    shortLabel: 'Fluidez',
    helper: 'Evalúa continuidad al responder, no velocidad al hablar.',
    color: '#10b981',
    descriptors: [
      'No logra mantener la respuesta.',
      'Las pausas frecuentes interrumpen la idea.',
      'Completa la respuesta con algunas pausas.',
      'Mantiene la respuesta con pocas interrupciones.',
      'Habla de forma continua y natural para su nivel.'
    ]
  }
];

interface OralEvaluationPresentationProps {
  levelId: string;
  levelTitle: string;
  questions: OralQuestion[];
  studentName: string;
  studentType: string;
  studentId?: string | null;
  brandName: string;
  logoUrl?: string;
  existingResult?: EvaluationRecord | null;
  virtualPassed: boolean;
  levelApproved: boolean;
  onClose: () => void;
  onSaved: (evaluation: EvaluationRecord) => void;
  onApproveLevel: (levelId: string) => Promise<void>;
}

function resultDetails(result?: EvaluationRecord | null) {
  const criterionAverages = result?.answers?.criterionAverages;
  if (!criterionAverages || typeof criterionAverages !== 'object') return {} as Partial<Record<CriterionId, number>>;
  return criterionAverages as Partial<Record<CriterionId, number>>;
}

export function OralEvaluationPresentation({
  levelId,
  levelTitle,
  questions,
  studentName,
  studentType,
  studentId,
  brandName,
  logoUrl,
  existingResult,
  virtualPassed,
  levelApproved,
  onClose,
  onSaved,
  onApproveLevel
}: OralEvaluationPresentationProps) {
  const [phase, setPhase] = useState<Phase>(existingResult ? 'result' : 'intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<RubricScores>({});
  const [result, setResult] = useState<EvaluationRecord | null>(existingResult || null);
  const [isSaving, setIsSaving] = useState(false);
  const [isApproving, setIsApproving] = useState(false);

  const currentQuestion = questions[questionIndex];
  const currentScores = scores[questionIndex] || {};
  const currentComplete = CRITERIA.every((criterion) => (currentScores[criterion.id] || 0) > 0);
  const oralPassed = evaluationPassed(result, 'oral');
  const percentage = evaluationPercentage(result);
  const criterionAverages = resultDetails(result);
  const virtualUrl = `${window.location.origin}/?evaluacion=${levelId}&student=${encodeURIComponent(studentName)}&type=${encodeURIComponent(studentType)}${studentId ? `&studentId=${encodeURIComponent(studentId)}` : ''}`;

  const completedCriteria = useMemo(() => {
    return Object.values(scores).reduce((total, questionScores) =>
      total + CRITERIA.filter((criterion) => (questionScores[criterion.id] || 0) > 0).length, 0
    );
  }, [scores]);

  useEffect(() => {
    if (phase !== 'celebration') return;

    const colors = ['#22c55e', '#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899'];
    confetti({ particleCount: 140, spread: 95, origin: { y: 0.65 }, colors });
    const secondBurst = window.setTimeout(() => {
      confetti({ particleCount: 90, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors });
      confetti({ particleCount: 90, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors });
    }, 450);
    const showCertificate = window.setTimeout(() => setPhase('certificate'), 2200);

    return () => {
      window.clearTimeout(secondBurst);
      window.clearTimeout(showCertificate);
    };
  }, [phase]);

  const speakQuestion = () => {
    if (!currentQuestion || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentQuestion.question);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  const setCriterionScore = (criterionId: CriterionId, value: number) => {
    setScores((current) => ({
      ...current,
      [questionIndex]: {
        ...(current[questionIndex] || {}),
        [criterionId]: value
      }
    }));
  };

  const finishOralExam = async () => {
    setIsSaving(true);
    const maximum = questions.length * CRITERIA.length * 5;
    const total = Object.values(scores).reduce((examTotal, questionScores) =>
      examTotal + CRITERIA.reduce((questionTotal, criterion) => questionTotal + (questionScores[criterion.id] || 0), 0), 0
    );
    const finalPercentage = Math.round((total / maximum) * 100);

    const averages = Object.fromEntries(CRITERIA.map((criterion) => {
      const criterionTotal = questions.reduce((sum, _, index) => sum + (scores[index]?.[criterion.id] || 0), 0);
      return [criterion.id, Number((criterionTotal / questions.length).toFixed(1))];
    })) as Record<CriterionId, number>;

    const questionScores = questions.map((_, index) => {
      const questionTotal = CRITERIA.reduce((sum, criterion) => sum + (scores[index]?.[criterion.id] || 0), 0);
      return Math.round((questionTotal / (CRITERIA.length * 5)) * 100);
    });

    const answers = {
      __examType: 'oral',
      __passed: finalPercentage >= ORAL_PASS_PERCENT,
      __percentage: finalPercentage,
      passMark: ORAL_PASS_PERCENT,
      rubric: scores,
      criterionAverages: averages,
      questionScores
    };

    await dbAdmin.saveEvaluationScore(studentName, levelId, finalPercentage, 100, answers);
    const savedResult: EvaluationRecord = {
      id: crypto.randomUUID(),
      student_name: studentName,
      level_id: levelId,
      score: finalPercentage,
      total_questions: 100,
      answers,
      created_at: new Date().toISOString()
    };
    setResult(savedResult);
    onSaved(savedResult);
    setIsSaving(false);
    setPhase('result');
  };

  const restartExam = () => {
    setScores({});
    setQuestionIndex(0);
    setResult(null);
    setPhase('intro');
  };

  const shareVirtualExam = () => {
    const message = `Aquí está el enlace para realizar el examen virtual de ${levelTitle}:\n\n${virtualUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const approveLevel = async () => {
    setIsApproving(true);
    await onApproveLevel(levelId);
    setIsApproving(false);
    setPhase('celebration');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-violet-600/35 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ x: [0, -90, 0], y: [0, -35, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.55)_72%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-8 sm:py-6">
        <header className="mb-5 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Mic2 className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Evaluación oral guiada</p>
              <h1 className="truncate text-lg font-black sm:text-2xl">{levelTitle}</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-4 font-black text-white ring-1 ring-white/15 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
            <span className="hidden sm:inline">Cerrar</span>
          </button>
        </header>

        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.main
              key="intro"
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25 }}
              className="flex flex-1 items-center justify-center py-4"
            >
              <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_.85fr]">
                <section className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-violet-600/80 via-indigo-700/80 to-blue-800/80 p-7 shadow-2xl sm:p-10">
                  <motion.div
                    className="absolute right-7 top-7 text-7xl opacity-20"
                    animate={{ rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🎙️
                  </motion.div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black ring-1 ring-white/20">
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                    Tutor + estudiante
                  </span>
                  <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Oral exam</p>
                  <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                    Es hora de mostrar lo que puedes decir en inglés.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-blue-100 sm:text-xl">
                    {studentName}, responde con naturalidad. El tutor escuchará y calificará cinco elementos en cada pregunta.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPhase('questions')}
                    className="mt-9 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 text-xl font-black text-indigo-800 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:w-auto"
                  >
                    <Play className="h-6 w-6 fill-current" />
                    Iniciar examen
                  </button>
                </section>

                <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-xl sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest text-cyan-300">Cómo funciona</p>
                      <p className="mt-1 text-3xl font-black">{questions.length} preguntas</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-400/15 px-4 py-3 text-center ring-1 ring-emerald-300/25">
                      <p className="text-2xl font-black text-emerald-300">{ORAL_PASS_PERCENT}%</p>
                      <p className="text-xs font-bold text-emerald-100">para aprobar</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {CRITERIA.map((criterion, index) => (
                      <motion.div
                        key={criterion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 * index }}
                        className="flex items-center gap-4 rounded-2xl bg-slate-900/45 p-4 ring-1 ring-white/10"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white" style={{ backgroundColor: criterion.color }}>
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-black">{criterion.label}</p>
                          <p className="text-sm font-medium text-slate-300">{criterion.helper}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </aside>
              </div>
            </motion.main>
          )}

          {phase === 'questions' && currentQuestion && (
            <motion.main
              key={`question-${questionIndex}`}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              className="flex flex-1 flex-col"
            >
              <div className="mb-5">
                <div className="mb-2 flex items-center justify-between text-sm font-black">
                  <span className="text-cyan-300">Pregunta {questionIndex + 1} de {questions.length}</span>
                  <span className="text-slate-300">{completedCriteria}/{questions.length * CRITERIA.length} criterios calificados</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
                    animate={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid flex-1 gap-5 lg:grid-cols-[.9fr_1.1fr]">
                <section className="flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 p-7 shadow-2xl ring-1 ring-white/15 sm:p-10">
                  <div>
                    <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 ring-1 ring-white/20">
                      {currentQuestion.topic}
                    </span>
                    <h2 className="mt-7 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                      {currentQuestion.question}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={speakQuestion}
                    className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white/15 px-5 text-lg font-black ring-1 ring-white/25 transition hover:bg-white/25 sm:w-max"
                  >
                    <Volume2 className="h-6 w-6" />
                    Escuchar pregunta
                  </button>
                </section>

                <section className="rounded-[2rem] bg-white p-5 text-slate-900 shadow-2xl sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-600">Panel del tutor</p>
                      <h3 className="mt-1 text-2xl font-black sm:text-3xl">Califica lo que escuchas</h3>
                    </div>
                    <Headphones className="h-9 w-9 text-violet-300" />
                  </div>

                  <div className="space-y-3">
                    {CRITERIA.map((criterion) => {
                      const value = currentScores[criterion.id] || 0;
                      return (
                        <div key={criterion.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <div>
                              <p className="font-black text-slate-900">{criterion.label}</p>
                            </div>
                            <span
                              className="min-w-[64px] rounded-full px-3 py-1 text-center text-xs font-black text-white"
                              style={{ backgroundColor: value ? criterion.color : '#94a3b8' }}
                            >
                              {value ? `${value}/5` : '— /5'}
                            </span>
                          </div>
                          <p className={`mb-2 min-h-8 text-sm font-bold leading-snug ${value ? 'text-slate-700' : 'text-slate-400'}`}>
                            {value
                              ? criterion.descriptors[value - 1]
                              : 'Escucha la respuesta y mueve la barra para describir lo observado.'}
                          </p>
                          <input
                            aria-label={`Calificación de ${criterion.label}`}
                            type="range"
                            min="0"
                            max="5"
                            step="1"
                            value={value}
                            onChange={(event) => setCriterionScore(criterion.id, Number(event.target.value))}
                            className="h-3 w-full cursor-pointer accent-violet-600"
                            style={{ accentColor: criterion.color }}
                          />
                          <div className="mt-1 flex justify-between px-1 text-[10px] font-black text-slate-400">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>

              <footer className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={questionIndex === 0}
                  onClick={() => setQuestionIndex((current) => current - 1)}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white/10 px-5 font-black ring-1 ring-white/15 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft className="h-5 w-5" /> Anterior
                </button>
                <div className="text-center text-sm font-bold text-slate-300">
                  {currentComplete ? 'Pregunta calificada. Puedes continuar.' : 'Mueve las cinco barras para continuar.'}
                </div>
                <button
                  type="button"
                  disabled={!currentComplete || isSaving}
                  onClick={() => questionIndex < questions.length - 1 ? setQuestionIndex((current) => current + 1) : finishOralExam()}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 text-lg font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {questionIndex < questions.length - 1 ? 'Siguiente pregunta' : isSaving ? 'Guardando...' : 'Ver resultado'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </footer>
            </motion.main>
          )}

          {phase === 'result' && result && (
            <motion.main
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -25 }}
              className="flex flex-1 items-center justify-center py-3"
            >
              <div className="grid w-full gap-6 lg:grid-cols-[.82fr_1.18fr]">
                <section className={`rounded-[2rem] border p-7 text-center shadow-2xl sm:p-9 ${oralPassed ? 'border-emerald-300/30 bg-gradient-to-br from-emerald-500/25 to-cyan-500/15' : 'border-amber-300/30 bg-gradient-to-br from-amber-500/25 to-orange-500/15'}`}>
                  <div
                    className="mx-auto flex h-44 w-44 items-center justify-center rounded-full p-3 shadow-2xl"
                    style={{ background: `conic-gradient(${oralPassed ? '#34d399' : '#f59e0b'} ${percentage * 3.6}deg, rgba(255,255,255,.12) 0deg)` }}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-slate-950">
                      <span className="text-5xl font-black">{percentage}%</span>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Puntaje oral</span>
                    </div>
                  </div>
                  <h2 className="mt-7 text-3xl font-black sm:text-4xl">
                    {oralPassed ? '¡Examen oral aprobado!' : 'Aún necesita práctica'}
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-slate-300">
                    {oralPassed
                      ? `${studentName} superó el ${ORAL_PASS_PERCENT}% requerido.`
                      : `Se necesita al menos ${ORAL_PASS_PERCENT}%. Practiquen las áreas más bajas e inténtenlo nuevamente.`}
                  </p>

                  {!oralPassed && (
                    <button
                      type="button"
                      onClick={restartExam}
                      className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 text-lg font-black text-slate-950 transition hover:bg-amber-300"
                    >
                      <RefreshCw className="h-5 w-5" /> Repetir examen oral
                    </button>
                  )}
                </section>

                <section className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-600">Resultado por criterio</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {CRITERIA.map((criterion) => {
                      const average = criterionAverages[criterion.id] || 0;
                      return (
                        <div key={criterion.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-black">{criterion.shortLabel}</span>
                            <span className="text-xl font-black" style={{ color: criterion.color }}>{average}/5</span>
                          </div>
                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                            <div className="h-full rounded-full" style={{ width: `${(average / 5) * 100}%`, backgroundColor: criterion.color }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {oralPassed && (
                    <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-emerald-500/15 p-4 ring-1 ring-emerald-400/25">
                          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                          <p className="mt-2 text-xs font-black uppercase tracking-widest text-emerald-300">Paso 1</p>
                          <p className="font-black">Oral aprobado</p>
                        </div>
                        <div className={`rounded-2xl p-4 ring-1 ${virtualPassed ? 'bg-emerald-500/15 ring-emerald-400/25' : 'bg-amber-400/10 ring-amber-300/25'}`}>
                          {virtualPassed ? <CheckCircle2 className="h-6 w-6 text-emerald-400" /> : <Play className="h-6 w-6 text-amber-300" />}
                          <p className={`mt-2 text-xs font-black uppercase tracking-widest ${virtualPassed ? 'text-emerald-300' : 'text-amber-300'}`}>Paso 2</p>
                          <p className="font-black">{virtualPassed ? 'Virtual aprobado' : 'Presentar virtual'}</p>
                        </div>
                        <div className={`rounded-2xl p-4 ring-1 ${levelApproved ? 'bg-emerald-500/15 ring-emerald-400/25' : 'bg-violet-400/10 ring-violet-300/25'}`}>
                          {levelApproved ? <Trophy className="h-6 w-6 text-emerald-400" /> : <Award className="h-6 w-6 text-violet-300" />}
                          <p className={`mt-2 text-xs font-black uppercase tracking-widest ${levelApproved ? 'text-emerald-300' : 'text-violet-300'}`}>Paso 3</p>
                          <p className="font-black">Completar nivel</p>
                        </div>
                      </div>

                      {!virtualPassed ? (
                        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                          <button
                            type="button"
                            onClick={() => { window.location.href = virtualUrl; }}
                            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 text-lg font-black text-slate-950 transition hover:bg-emerald-400"
                          >
                            Continuar al examen virtual <ArrowRight className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={shareVirtualExam}
                            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 font-black ring-1 ring-white/15 hover:bg-white/20"
                          >
                            <Share2 className="h-5 w-5" /> Compartir enlace
                          </button>
                        </div>
                      ) : levelApproved ? (
                        <button
                          type="button"
                          onClick={() => setPhase('certificate')}
                          className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 text-lg font-black text-slate-950"
                        >
                          <Trophy className="h-5 w-5" /> Ver certificado
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={isApproving}
                          onClick={approveLevel}
                          className="mt-5 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-6 text-xl font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 disabled:opacity-60"
                        >
                          <Check className="h-6 w-6" />
                          {isApproving ? 'Guardando aprobación...' : 'Tutor: marcar nivel como completado'}
                        </button>
                      )}
                    </div>
                  )}
                </section>
              </div>
            </motion.main>
          )}

          {phase === 'celebration' && (
            <motion.main
              key="celebration"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              className="flex flex-1 flex-col items-center justify-center text-center"
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.12, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_80px_rgba(251,191,36,.55)]"
              >
                <Trophy className="h-20 w-20 text-slate-950" />
              </motion.div>
              <p className="mt-8 text-lg font-black uppercase tracking-[0.3em] text-cyan-300">Objetivo alcanzado</p>
              <h2 className="mt-3 text-5xl font-black sm:text-7xl">¡Nivel completado!</h2>
              <p className="mt-5 max-w-2xl text-xl font-semibold text-slate-300">
                {studentName} aprobó el examen oral y el examen virtual de {levelTitle}.
              </p>
              <p className="mt-7 font-black text-amber-300">Preparando el certificado…</p>
            </motion.main>
          )}

          {phase === 'certificate' && (
            <motion.main
              key="certificate"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 pb-8"
            >
              <div className="mb-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 font-black text-emerald-300 ring-1 ring-emerald-300/25">
                  <CheckCircle2 className="h-5 w-5" /> Nivel aprobado y certificado disponible
                </span>
                <h2 className="mt-4 text-3xl font-black sm:text-5xl">¡Felicitaciones, {studentName}!</h2>
              </div>
              <div className="mx-auto w-full max-w-6xl rounded-[2rem] bg-white p-4 text-slate-900 shadow-2xl sm:p-7">
                <Diploma
                  studentName={studentName}
                  levelName={levelTitle}
                  brandName={brandName}
                  logoUrl={logoUrl}
                  certificateKind="level"
                />
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
