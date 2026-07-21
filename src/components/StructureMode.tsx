import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle,
  Dumbbell,
  Home,
  Layers,
  Lock,
  Play,
  Sparkles,
  Swords,
  Target,
  Trophy,
  X
} from 'lucide-react';
import { StructureLesson, StructureSlide, structureLessons, structureRoadmap } from '../data/structureMode';

interface StructureModeProps {
  onClose: () => void;
}

const STORAGE_KEY = 'maven_structure_mode_progress';

function FormulaBlocks({ slide }: { slide: StructureSlide }) {
  if (!slide.formula?.length) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {slide.formula.map((token, index) => (
        <motion.div
          key={`${token.label}-${token.value}`}
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.12, type: 'spring', stiffness: 180, damping: 16 }}
          className={`${token.color} rounded-3xl p-4 text-center shadow-2xl sm:p-6`}
        >
          <div className="text-xs font-black uppercase tracking-[0.22em] opacity-70 sm:text-sm">{token.label}</div>
          <div className="mt-2 text-3xl font-black leading-none sm:text-5xl lg:text-6xl">{token.value}</div>
        </motion.div>
      ))}
    </div>
  );
}

function QuizSlide({
  slide,
  selectedIndex,
  onSelect
}: {
  slide: StructureSlide;
  selectedIndex?: number;
  onSelect: (index: number, isCorrect: boolean) => void;
}) {
  return (
    <div className="grid flex-1 gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
      <section className="flex min-h-[240px] flex-col justify-center rounded-[2rem] border border-white/15 bg-white p-5 text-slate-950 shadow-2xl sm:p-8">
        <div className="mb-4 inline-flex w-max items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-black uppercase tracking-widest text-indigo-700">
          <Target className="h-5 w-5" />
          Practice
        </div>
        {slide.content.map((line) => (
          <p key={line} className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            {line}
          </p>
        ))}
      </section>

      <section className="grid content-center gap-3 sm:gap-4">
        {slide.options?.map((option, index) => {
          const isSelected = selectedIndex === index;
          const showAnswer = selectedIndex !== undefined;
          const isCorrect = option.isCorrect;
          const style = showAnswer
            ? isCorrect
              ? 'border-emerald-300 bg-emerald-300 text-slate-950'
              : isSelected
                ? 'border-rose-300 bg-rose-400 text-white opacity-80'
                : 'border-white/15 bg-white/10 text-white/45'
            : 'border-white/20 bg-white/12 text-white hover:bg-white hover:text-slate-950';

          return (
            <button
              key={option.text}
              type="button"
              disabled={showAnswer}
              onClick={() => onSelect(index, isCorrect)}
              className={`flex min-h-[86px] items-center justify-between rounded-3xl border-2 px-5 py-4 text-left text-2xl font-black shadow-xl transition sm:min-h-[104px] sm:px-7 sm:text-4xl ${style}`}
            >
              <span>{option.text}</span>
              {showAnswer && isCorrect && <Check className="h-8 w-8 shrink-0" />}
              {showAnswer && isSelected && !isCorrect && <X className="h-8 w-8 shrink-0" />}
            </button>
          );
        })}

        {selectedIndex !== undefined && slide.correctNote && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-yellow-200/40 bg-yellow-200 p-5 text-xl font-black text-slate-950 shadow-2xl sm:text-2xl"
          >
            {slide.correctNote}
          </motion.div>
        )}
      </section>
    </div>
  );
}

function BossSlide({ slide }: { slide: StructureSlide }) {
  const [hits, setHits] = useState(0);
  const taskCount = slide.bossTasks?.length || 1;
  const health = Math.max(0, 100 - Math.round((hits / taskCount) * 100));
  const complete = health === 0;

  return (
    <div className="grid flex-1 gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
      <section className="flex flex-col justify-between rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md sm:p-7">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-black uppercase tracking-widest text-white">
            <Swords className="h-5 w-5" />
            Boss Battle
          </div>
          <h3 className="text-5xl font-black leading-none sm:text-7xl">Sentence Boss</h3>
          <p className="mt-4 text-2xl font-bold text-white/75">Produce clear structure under pressure.</p>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-sm font-black uppercase tracking-widest text-white/75 sm:text-base">
            <span>Boss health</span>
            <span>{health}%</span>
          </div>
          <div className="h-8 overflow-hidden rounded-full border border-white/20 bg-black/40">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-lime-300 via-yellow-300 to-red-500"
              animate={{ width: `${health}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            const nextHits = Math.min(taskCount, hits + 1);
            setHits(nextHits);
            if (nextHits === taskCount) {
              confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 } });
            }
          }}
          className="mt-8 rounded-3xl bg-gradient-to-r from-red-500 to-yellow-300 px-6 py-6 text-3xl font-black text-white shadow-2xl transition hover:scale-[1.02]"
        >
          Hit Boss
        </button>
      </section>

      <section className="rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-7">
        {complete ? (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
            <Trophy className="mb-5 h-24 w-24 text-yellow-300" />
            <h3 className="text-5xl font-black sm:text-7xl">Boss Defeated</h3>
            <p className="mt-4 max-w-2xl text-2xl font-bold text-white/75">The structure is ready for the next class.</p>
          </motion.div>
        ) : (
          <div className="grid gap-3">
            {slide.bossTasks?.map((task, index) => {
              const done = index < hits;
              const active = index === hits;
              return (
                <div
                  key={task}
                  className={`rounded-3xl border p-5 text-2xl font-black leading-snug shadow-xl sm:text-3xl ${
                    done
                      ? 'border-emerald-300 bg-emerald-300 text-slate-950'
                      : active
                        ? 'border-white bg-white text-slate-950'
                        : 'border-white/10 bg-black/20 text-white/45'
                  }`}
                >
                  <span className="mr-3 text-base font-black opacity-60">TASK {index + 1}</span>
                  {task}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export function StructureMode({ onClose }: StructureModeProps) {
  const [activeLesson, setActiveLesson] = useState<StructureLesson | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessonIds));
  }, [completedLessonIds]);

  const availableLessons = structureLessons;
  const totalRoadmapLessons = structureRoadmap.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedAvailableLessons = availableLessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
  const availableProgress = availableLessons.length ? Math.round((completedAvailableLessons / availableLessons.length) * 100) : 0;
  const roadmapProgress = Math.round((completedLessonIds.length / totalRoadmapLessons) * 100);
  const nextLesson = availableLessons.find((lesson) => !completedLessonIds.includes(lesson.id)) || availableLessons[0];

  const lessonLookup = useMemo(() => new Map(structureLessons.map((lesson) => [lesson.id, lesson])), []);
  const slide = activeLesson?.slides[currentSlideIndex];
  const slideProgress = activeLesson && slide ? Math.round(((currentSlideIndex + 1) / activeLesson.slides.length) * 100) : 0;

  const openLesson = (lesson: StructureLesson) => {
    setActiveLesson(lesson);
    setCurrentSlideIndex(0);
    setSelectedAnswers({});
  };

  const completeActiveLesson = () => {
    if (!activeLesson) return;
    setCompletedLessonIds((prev) => prev.includes(activeLesson.id) ? prev : [...prev, activeLesson.id]);
    confetti({ particleCount: 180, spread: 100, origin: { y: 0.55 } });
    setActiveLesson(null);
    setCurrentSlideIndex(0);
    setSelectedAnswers({});
  };

  const nextSlide = () => {
    if (!activeLesson) return;
    setCurrentSlideIndex((value) => Math.min(activeLesson.slides.length - 1, value + 1));
  };

  const previousSlide = () => {
    setCurrentSlideIndex((value) => Math.max(0, value - 1));
  };

  const selectAnswer = (index: number, isCorrect: boolean) => {
    if (!slide) return;
    setSelectedAnswers((prev) => ({ ...prev, [slide.id]: index }));
    if (isCorrect) {
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.62 } });
    }
  };

  if (!activeLesson || !slide) {
    return (
      <div className="fixed inset-0 z-[230] overflow-y-auto bg-slate-950 text-white">
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900" />
        <motion.div
          className="fixed -left-28 -top-28 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="fixed -bottom-36 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-400/20 blur-3xl"
          animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.65, 0.3, 0.65] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] flex-col p-3 sm:p-5 lg:p-6">
          <header className="mb-4 flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-black/25 p-3 backdrop-blur-md sm:p-4">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-base font-black text-white transition hover:bg-white/20"
            >
              <Home className="h-5 w-5" />
              Volver
            </button>
            <div className="min-w-0 flex-1 text-center">
              <div className="text-sm font-black uppercase tracking-widest text-cyan-200 sm:text-base">Plataforma separada</div>
              <div className="truncate text-2xl font-black sm:text-4xl">Modo Estructuras</div>
            </div>
            <div className="hidden rounded-2xl bg-white px-4 py-3 text-base font-black text-slate-950 sm:block">
              {completedAvailableLessons}/{availableLessons.length} listas
            </div>
          </header>

          <section className="grid gap-4 lg:grid-cols-[1fr_0.72fr]">
            <div className="rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 text-sm font-black uppercase tracking-widest text-slate-950">
                <Sparkles className="h-5 w-5" />
                Nueva plataforma
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-none sm:text-7xl lg:text-8xl">
                Aprende inglés por estructuras, juegos y repetición.
              </h1>
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-relaxed text-white/75 sm:text-3xl">
                Temario independiente, progreso propio, clases full-screen y práctica visual diseñada para compartir desde PC y verse bien en celular.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openLesson(nextLesson)}
                  className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-white px-6 py-6 text-2xl font-black text-slate-950 shadow-2xl transition hover:scale-[1.02]"
                >
                  <Play className="h-8 w-8" />
                  Continuar clase
                </button>
                <button
                  type="button"
                  onClick={() => setCompletedLessonIds([])}
                  className="rounded-3xl border border-white/20 bg-white/10 px-6 py-6 text-xl font-black text-white transition hover:bg-white/20"
                >
                  Reiniciar progreso
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                <div className="mb-4 flex items-center gap-2 text-xl font-black">
                  <BarChart3 className="h-7 w-7 text-cyan-200" />
                  Progreso
                </div>
                <div className="grid gap-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm font-black uppercase tracking-widest text-white/70">
                      <span>Contenido disponible</span>
                      <span>{availableProgress}%</span>
                    </div>
                    <div className="h-5 overflow-hidden rounded-full bg-white/10">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" animate={{ width: `${availableProgress}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-sm font-black uppercase tracking-widest text-white/70">
                      <span>Ruta total</span>
                      <span>{roadmapProgress}%</span>
                    </div>
                    <div className="h-5 overflow-hidden rounded-full bg-white/10">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-fuchsia-300" animate={{ width: `${roadmapProgress}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-white p-5 text-slate-950 shadow-2xl sm:p-6">
                <div className="mb-3 flex items-center gap-2 text-xl font-black">
                  <BookOpen className="h-7 w-7 text-indigo-600" />
                  Próxima clase
                </div>
                <h2 className="text-4xl font-black leading-none">{nextLesson.title}</h2>
                <p className="mt-3 text-lg font-bold text-slate-600">{nextLesson.objective}</p>
              </div>
            </div>
          </section>

          <section className="mt-5 flex-1 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-4xl font-black sm:text-5xl">Temario Completo</h2>
                <p className="mt-1 text-xl font-bold text-white/65">80 clases planificadas. Las clases se activan por fases.</p>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black uppercase tracking-widest text-white/75">
                {totalRoadmapLessons} clases
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              {structureRoadmap.map((module) => {
                const moduleCompleted = module.lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
                return (
                  <div key={module.id} className="rounded-3xl border border-white/15 bg-black/20 p-4">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-black sm:text-3xl">{module.title}</h3>
                        <p className="mt-1 text-base font-bold text-white/60 sm:text-lg">{module.description}</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950">
                        {moduleCompleted}/{module.lessons.length}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      {module.lessons.map((item) => {
                        const lesson = lessonLookup.get(item.id);
                        const isCompleted = completedLessonIds.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            disabled={!lesson}
                            onClick={() => lesson && openLesson(lesson)}
                            className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                              lesson
                                ? isCompleted
                                  ? 'border-emerald-300 bg-emerald-300 text-slate-950'
                                  : 'border-white/20 bg-white text-slate-950 hover:scale-[1.01]'
                                : 'border-white/10 bg-white/5 text-white/45'
                            }`}
                          >
                            <span className="text-base font-black sm:text-lg">{item.title}</span>
                            {isCompleted ? (
                              <CheckCircle className="h-6 w-6 shrink-0" />
                            ) : lesson ? (
                              <Play className="h-6 w-6 shrink-0" />
                            ) : (
                              <Lock className="h-5 w-5 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }

  const isLastSlide = currentSlideIndex === activeLesson.slides.length - 1;

  return (
    <div className="fixed inset-0 z-[240] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900" />
      <motion.div
        className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-36 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-400/20 blur-3xl"
        animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.65, 0.3, 0.65] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative flex h-screen flex-col p-2 sm:p-3 lg:p-4">
        <header className="mb-2 flex shrink-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md sm:px-4">
          <button
            type="button"
            onClick={() => setActiveLesson(null)}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white transition hover:bg-white/20 sm:text-base"
          >
            <Home className="h-5 w-5" />
            Temario
          </button>
          <div className="min-w-0 flex-1 text-center">
            <div className="truncate text-sm font-black uppercase tracking-widest text-cyan-200 sm:text-base">{activeLesson.focus}</div>
            <div className="truncate text-lg font-black sm:text-2xl">{activeLesson.title}</div>
          </div>
          <div className="rounded-xl bg-white px-3 py-2 text-sm font-black text-slate-950 sm:text-base">
            {currentSlideIndex + 1}/{activeLesson.slides.length}
          </div>
        </header>

        <main className="min-h-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.section
              key={slide.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-5 lg:p-6"
            >
              <div className="mb-4 shrink-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-widest text-cyan-100 sm:text-sm">
                    <Layers className="h-4 w-4" />
                    Plataforma Estructuras
                  </span>
                  <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-950 sm:text-sm">
                    {slide.type}
                  </span>
                </div>
                <h1 className="text-4xl font-black leading-none sm:text-6xl lg:text-7xl">{slide.title}</h1>
                {slide.subtitle && <p className="mt-2 text-xl font-bold text-white/70 sm:text-3xl">{slide.subtitle}</p>}
              </div>

              {slide.type === 'quiz' ? (
                <QuizSlide slide={slide} selectedIndex={selectedAnswers[slide.id]} onSelect={selectAnswer} />
              ) : slide.type === 'boss' ? (
                <BossSlide slide={slide} />
              ) : (
                <div className="grid flex-1 content-center gap-5 overflow-y-auto">
                  <FormulaBlocks slide={slide} />
                  <div className={`grid gap-3 ${slide.type === 'hero' ? 'lg:grid-cols-2' : ''}`}>
                    {slide.content.map((line, index) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className={`rounded-3xl border border-white/15 p-5 font-black leading-tight shadow-xl ${
                          slide.type === 'homework'
                            ? 'bg-yellow-300 text-slate-950'
                            : slide.type === 'summary'
                              ? 'bg-emerald-300 text-slate-950'
                              : 'bg-white text-slate-950'
                        } text-2xl sm:p-7 sm:text-4xl lg:text-5xl`}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        </main>

        <footer className="mt-2 flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            disabled={currentSlideIndex === 0}
            className="flex h-14 w-16 items-center justify-center rounded-2xl bg-white/10 text-white transition enabled:hover:bg-white/20 disabled:opacity-30 sm:h-16 sm:w-20"
          >
            <ArrowLeft className="h-7 w-7" />
          </button>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-yellow-300 to-fuchsia-300" animate={{ width: `${slideProgress}%` }} />
          </div>
          {isLastSlide ? (
            <button
              type="button"
              onClick={completeActiveLesson}
              className="flex h-14 min-w-36 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 text-base font-black text-slate-950 transition hover:scale-[1.02] sm:h-16 sm:min-w-52 sm:text-xl"
            >
              <CheckCircle className="h-6 w-6" />
              Completar
            </button>
          ) : (
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-14 min-w-28 items-center justify-center gap-2 rounded-2xl bg-white text-base font-black text-slate-950 transition hover:scale-[1.02] sm:h-16 sm:min-w-36 sm:text-xl"
            >
              {currentSlideIndex === 0 ? <Play className="h-6 w-6" /> : currentSlideIndex >= activeLesson.slides.length - 2 ? <Sparkles className="h-6 w-6" /> : <Dumbbell className="h-6 w-6" />}
              Siguiente
              <ArrowRight className="h-6 w-6" />
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
