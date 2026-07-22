import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle,
  ClipboardCheck,
  Dumbbell,
  Home,
  Layers,
  Lock,
  MessageCircle,
  Play,
  RefreshCw,
  Timer,
  Sparkles,
  Swords,
  Target,
  Trophy,
  X
} from 'lucide-react';
import { StructureLesson, StructureSlide, structureLessons, structureRoadmap } from '../data/structureMode';
import { StructureAssessment } from './StructureAssessment';
import { dbAdmin } from '../lib/db';
import imgComplete from '../assets/images/teens_complete_1782770593439.jpg';
import imgEnergy from '../assets/images/teens_energy_warmup_1782228109142.jpg';
import imgGadgets from '../assets/images/teens_gadgets_tech_1782771452440.jpg';
import imgLifestyle from '../assets/images/teen_lifestyle_1782228974065.jpg';
import imgMusic from '../assets/images/teen_music_1782229151966.jpg';

interface StructureModeProps {
  onClose: () => void;
  studentId?: string | null;
  studentName?: string;
}

const STORAGE_KEY = 'maven_structure_mode_progress';
const LOCAL_KEY_STORAGE = 'maven_structure_mode_local_key';
const STRUCTURE_IMAGES = [imgLifestyle, imgGadgets, imgEnergy, imgMusic, imgComplete];
const MEMORY_HIGHLIGHTS = [
  { pattern: /\b(subject|sujeto|who)\b/gi, className: 'bg-cyan-200 text-cyan-950 ring-cyan-300' },
  { pattern: /\b(verb|verbo|action|acción|base verb|main verb)\b/gi, className: 'bg-violet-200 text-violet-950 ring-violet-300' },
  { pattern: /\b(complement|complemento|extra information|extra info|extra)\b/gi, className: 'bg-yellow-200 text-yellow-950 ring-yellow-300' },
  { pattern: /\b(auxiliary|auxiliar|do|does|did|have|has|had|will|would|can|could|may|might|must|should)\b/gi, className: 'bg-indigo-200 text-indigo-950 ring-indigo-300' },
  { pattern: /\b(present|presente|past|pasado|future|futuro)\b/gi, className: 'bg-emerald-200 text-emerald-950 ring-emerald-300' },
  { pattern: /\b(question|questions|pregunta|preguntas|answer|answers|respuesta|respuestas)\b/gi, className: 'bg-rose-200 text-rose-950 ring-rose-300' },
  { pattern: /\b(-ing|ing|participle|participio|infinitive|infinitivo|gerund|gerundio)\b/gi, className: 'bg-fuchsia-200 text-fuchsia-950 ring-fuchsia-300' },
  { pattern: /\b(every day|at night|after class|before|since|for|yesterday|tomorrow|now|right now)\b/gi, className: 'bg-orange-200 text-orange-950 ring-orange-300' }
];

function getMemoryColor(label: string) {
  const normalized = label.toLowerCase();
  if (normalized.includes('subject')) return 'bg-cyan-300';
  if (normalized.includes('verb')) return 'bg-violet-300';
  if (normalized.includes('aux')) return 'bg-indigo-300';
  if (normalized.includes('complement')) return 'bg-yellow-300';
  if (normalized.includes('time')) return 'bg-orange-300';
  return 'bg-white';
}

function RichMemoryText({ text }: { text: string }) {
  const matches = MEMORY_HIGHLIGHTS.flatMap((rule) => {
    const found = [...text.matchAll(rule.pattern)];
    return found.map((match) => ({
      start: match.index || 0,
      end: (match.index || 0) + match[0].length,
      value: match[0],
      className: rule.className
    }));
  })
    .sort((a, b) => a.start - b.start || b.end - a.end)
    .filter((match, index, all) => index === 0 || match.start >= all[index - 1].end);

  if (!matches.length) return <>{text}</>;

  const parts: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((match) => {
    if (match.start > cursor) parts.push(text.slice(cursor, match.start));
    parts.push(
      <span
        key={`${match.start}-${match.value}`}
        className={`inline rounded-xl px-1.5 py-0.5 box-decoration-clone ring-2 ${match.className}`}
      >
        {match.value}
      </span>
    );
    cursor = match.end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));

  return <>{parts}</>;
}

function MemoryColorLegend() {
  const items = [
    ['Subject', 'bg-cyan-300'],
    ['Verb', 'bg-violet-300'],
    ['Complement', 'bg-yellow-300'],
    ['Auxiliary', 'bg-indigo-300'],
    ['Time', 'bg-orange-300']
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([label, color]) => (
        <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-white/85">
          <span className={`h-3 w-3 rounded-full ${color}`} />
          {label}
        </span>
      ))}
    </div>
  );
}

function FormulaLock({ slide }: { slide: StructureSlide }) {
  const formula = slide.formula || [];
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [mistakeLabel, setMistakeLabel] = useState('');
  const complete = formula.length > 0 && selectedIndexes.length === formula.length;
  const nextIndex = selectedIndexes.length;
  const choiceOrder = useMemo(() => {
    const fallbackOrder = [1, 0, 2, 4, 3, 5, 6];
    return formula
      .map((token, index) => ({ token, index }))
      .sort((a, b) => {
        const posA = fallbackOrder.indexOf(a.index);
        const posB = fallbackOrder.indexOf(b.index);
        return (posA === -1 ? a.index : posA) - (posB === -1 ? b.index : posB);
      });
  }, [formula]);

  if (!formula.length) return null;

  const selectToken = (index: number) => {
    if (complete || selectedIndexes.includes(index)) return;
    if (index !== nextIndex) {
      setMistakeLabel(`Next: ${formula[nextIndex]?.label || 'finish'}`);
      return;
    }

    const updated = [...selectedIndexes, index];
    setSelectedIndexes(updated);
    setMistakeLabel('');

    if (updated.length === formula.length) {
      confetti({ particleCount: 160, spread: 90, origin: { y: 0.55 } });
    }
  };

  const reset = () => {
    setSelectedIndexes([]);
    setMistakeLabel('');
  };

  return (
    <div className="structure-formula-lock rounded-[1.5rem] border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md sm:p-5">
      <div className="structure-formula-lock-header mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-cyan-100">Formula Lock</div>
          <h3 className="text-[clamp(1.35rem,3vw,2rem)] font-black leading-tight text-white">
            Build the structure
          </h3>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/20"
        >
          <RefreshCw className="h-4 w-4" />
          Reset
        </button>
      </div>

      <div className="structure-formula-slots mb-4 grid gap-2 sm:grid-cols-3">
        {formula.map((token, index) => {
          const selectedPosition = selectedIndexes.indexOf(index);
          const isFilled = selectedPosition !== -1;
          return (
            <motion.div
              key={`${token.label}-slot`}
              animate={{
                scale: isFilled ? [1, 1.04, 1] : 1,
                opacity: isFilled ? 1 : 0.55
              }}
              className={`structure-formula-slot min-h-24 rounded-3xl border-2 border-dashed p-4 text-center shadow-xl ${
                isFilled ? `${token.color} border-white/50` : 'border-white/20 bg-white/8 text-white'
              }`}
            >
              <div className="text-xs font-black uppercase tracking-[0.2em] opacity-70">Step {index + 1}</div>
              <div className="mt-2 text-[clamp(1.2rem,3vw,2rem)] font-black leading-tight">
                {isFilled ? <RichMemoryText text={token.value} /> : token.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="structure-formula-choices grid gap-2 sm:grid-cols-3">
        {choiceOrder.map(({ token, index }) => {
          const used = selectedIndexes.includes(index);
          return (
            <button
              key={`${token.label}-choice`}
              type="button"
              disabled={used || complete}
              onClick={() => selectToken(index)}
              className={`rounded-3xl border px-4 py-3 text-left font-black leading-tight transition ${
                used
                  ? 'border-emerald-300 bg-emerald-300 text-slate-950 opacity-70'
                  : 'border-white/20 bg-white text-slate-950 shadow-xl hover:scale-[1.02]'
              }`}
            >
              <span className="block text-xs uppercase tracking-widest opacity-60">{token.label}</span>
              <span className="block text-[clamp(1rem,2.4vw,1.35rem)]">
                <RichMemoryText text={token.value} />
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {mistakeLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 rounded-3xl border border-indigo-200/40 bg-indigo-200 p-4 text-center text-xl font-black text-indigo-950 shadow-xl"
          >
            <RichMemoryText text={mistakeLabel} />
          </motion.div>
        )}
        {complete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-4 overflow-hidden rounded-3xl border border-yellow-200/60 bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-300 p-5 text-center text-slate-950 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 0.7, repeat: 2 }}
              className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <CheckCircle className="h-9 w-9 text-emerald-600" />
            </motion.div>
            <div className="text-[clamp(1.6rem,4vw,2.75rem)] font-black leading-none">Formula Locked!</div>
            <p className="mt-2 text-lg font-black opacity-80">Ready to use it in real sentences.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
          className={`${token.color} min-w-0 rounded-3xl p-4 text-center shadow-2xl sm:p-6`}
        >
          <div className="text-xs font-black uppercase tracking-[0.22em] opacity-70 sm:text-sm">{token.label}</div>
          <div className="mt-2 break-words text-[clamp(1.65rem,4vw,3.75rem)] font-black leading-none">
            <RichMemoryText text={token.value} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StructureVisual({ slide, slideIndex }: { slide: StructureSlide; slideIndex: number }) {
  const image = STRUCTURE_IMAGES[slideIndex % STRUCTURE_IMAGES.length];
  const formula = slide.formula?.length
    ? slide.formula
    : [
        { label: 'Subject', value: 'Who?', color: 'bg-cyan-300 text-slate-950' },
        { label: 'Verb', value: 'Action', color: 'bg-violet-300 text-slate-950' },
        { label: 'Complement', value: 'Extra', color: 'bg-yellow-300 text-slate-950' }
      ];

  return (
    <div className="structure-visual relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900 shadow-2xl sm:min-h-[260px] xl:min-h-0">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-indigo-950/35 to-cyan-800/55" />
      <motion.div
        className="absolute -right-12 top-8 h-36 w-36 rounded-full bg-yellow-300/25 blur-2xl"
        animate={{ y: [0, 28, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-cyan-300/25 blur-2xl"
        animate={{ x: [0, 24, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="structure-visual-inner relative z-10 flex h-full min-h-[220px] flex-col justify-between p-4 sm:min-h-[260px] sm:p-6 xl:min-h-full">
        <div className="structure-optional-chip inline-flex w-max items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-950 shadow-xl sm:text-sm">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          Sentence Lab
        </div>

        <div className="structure-visual-tokens mt-6 grid gap-2">
          {formula.slice(0, 3).map((token, index) => (
            <motion.div
              key={`${slide.id}-${token.label}`}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.16, type: 'spring', stiffness: 170, damping: 18 }}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/90 p-3 text-slate-950 shadow-xl backdrop-blur"
            >
              <span className={`h-4 w-4 shrink-0 rounded-full ${getMemoryColor(token.label)}`} />
              <div className="min-w-0">
                <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-500">{token.label}</div>
                <div className="truncate text-lg font-black leading-tight sm:text-2xl">
                  <RichMemoryText text={token.value} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="structure-optional-panel mt-6 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md">
          <div className="mb-2 text-xs font-black uppercase tracking-widest text-cyan-100">Current mission</div>
          <div className="text-[clamp(1.15rem,2.4vw,2rem)] font-black leading-tight text-white">
            <RichMemoryText text={slide.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

function splitReadingSentences(text: string) {
  return (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text])
    .map((item) => item.trim())
    .filter(Boolean);
}

function ReadingMiniChallenge({ slide }: { slide: StructureSlide }) {
  const readingLines = slide.content.filter((line) => !line.toLowerCase().startsWith('tutor task:'));
  const tutorTask = slide.content.find((line) => line.toLowerCase().startsWith('tutor task:'));
  const sentences = readingLines.flatMap(splitReadingSentences);

  return (
    <div className="structure-reading-challenge grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        {sentences.map((sentence, index) => (
          <motion.div
            key={`${sentence}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/15 bg-white p-4 text-slate-950 shadow-xl sm:p-5"
          >
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
              {index + 1}
            </div>
            <p className="break-words text-[clamp(1.2rem,3vw,2.4rem)] font-black leading-tight">
              <RichMemoryText text={sentence} />
            </p>
          </motion.div>
        ))}
      </div>

      {tutorTask && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sentences.length * 0.08 }}
          className="rounded-3xl border border-yellow-200/40 bg-yellow-300 p-5 text-slate-950 shadow-2xl"
        >
          <div className="mb-1 text-xs font-black uppercase tracking-widest opacity-65">Tutor task</div>
          <p className="text-[clamp(1.05rem,2.3vw,1.55rem)] font-black leading-snug">
            <RichMemoryText text={tutorTask.replace(/^Tutor task:\s*/i, '')} />
          </p>
        </motion.div>
      )}
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
    <div className="structure-quiz-layout grid min-h-0 min-w-0 flex-1 gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-6">
      <section className="structure-quiz-prompt grid min-h-[260px] overflow-hidden rounded-[2rem] border border-white/15 bg-white text-slate-950 shadow-2xl">
        {slide.imageUrl && (
          <div className="relative min-h-[180px] overflow-hidden">
            <img
              src={slide.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
          </div>
        )}
        <div className="flex flex-col justify-center p-5 sm:p-7">
          <div className="mb-4 inline-flex w-max items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-black uppercase tracking-widest text-indigo-700">
            <Target className="h-5 w-5" />
            Practice
          </div>
          {slide.content.map((line) => (
            <p key={line} className="break-words text-[clamp(1.75rem,5vw,3.8rem)] font-black leading-tight">
              <RichMemoryText text={line} />
            </p>
          ))}
        </div>
      </section>

      <section className="structure-quiz-options grid content-center gap-3 sm:gap-4">
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
              className={`flex min-h-[72px] items-center justify-between gap-3 rounded-3xl border-2 px-5 py-4 text-left text-[clamp(1.25rem,3.4vw,2.5rem)] font-black leading-tight shadow-xl transition sm:min-h-[92px] sm:px-7 ${style}`}
            >
              <span className="min-w-0 break-words">
                <RichMemoryText text={option.text} />
              </span>
              {showAnswer && isCorrect && <Check className="h-8 w-8 shrink-0" />}
              {showAnswer && isSelected && !isCorrect && <X className="h-8 w-8 shrink-0" />}
            </button>
          );
        })}

        {selectedIndex !== undefined && slide.correctNote && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-yellow-200/40 bg-yellow-200 p-5 text-[clamp(1rem,2.3vw,1.5rem)] font-black text-slate-950 shadow-2xl"
          >
            <RichMemoryText text={slide.correctNote} />
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
    <div className="structure-boss-layout grid min-h-0 min-w-0 flex-1 gap-4 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-6">
      <section className="flex flex-col justify-between rounded-[2rem] border border-white/15 bg-black/25 p-5 shadow-2xl backdrop-blur-md sm:p-7">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-black uppercase tracking-widest text-white">
            <Swords className="h-5 w-5" />
            Boss Battle
          </div>
          <h3 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none">Sentence Boss</h3>
          <p className="mt-4 text-[clamp(1.15rem,2.4vw,1.5rem)] font-bold text-white/75">Produce clear structure under pressure.</p>
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
          className="mt-8 rounded-3xl bg-gradient-to-r from-red-500 to-yellow-300 px-6 py-5 text-[clamp(1.4rem,3vw,1.875rem)] font-black text-white shadow-2xl transition hover:scale-[1.02]"
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
                    className={`rounded-3xl border p-5 text-[clamp(1.15rem,2.7vw,1.875rem)] font-black leading-snug shadow-xl ${
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

export function StructureMode({ onClose, studentId, studentName }: StructureModeProps) {
  const [activeLesson, setActiveLesson] = useState<StructureLesson | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showAssessment, setShowAssessment] = useState(() => Boolean(new URLSearchParams(window.location.search).get('structureReport')));
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [localKey] = useState(() => {
    const existing = localStorage.getItem(LOCAL_KEY_STORAGE);
    if (existing) return existing;
    const created = crypto.randomUUID();
    localStorage.setItem(LOCAL_KEY_STORAGE, created);
    return created;
  });
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    let cancelled = false;
    dbAdmin.getStructureModeProgress(studentId, localKey).then((saved) => {
      if (cancelled) return;
      if (saved?.completed_lessons?.length) {
        setCompletedLessonIds((current) => Array.from(new Set([...current, ...saved.completed_lessons])));
      }
      setProgressLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [studentId, localKey]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessonIds));
    if (!progressLoaded) return;
    dbAdmin.saveStructureModeProgress({
      student_id: studentId || null,
      local_key: localKey,
      completed_lessons: completedLessonIds,
      last_lesson_id: activeLesson?.id || null,
      last_slide_index: currentSlideIndex
    });
  }, [completedLessonIds, progressLoaded, studentId, localKey, activeLesson?.id, currentSlideIndex]);

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

  const shareHomeworkToWhatsApp = () => {
    if (!activeLesson || !slide || slide.type !== 'homework') return;

    const homeworkLines = slide.content.map((line, index) => `${index + 1}. ${line}`).join('\n');
    const message = [
      `Homework - ${activeLesson.title}`,
      '',
      homeworkLines,
      '',
      'Maven English - Modo Estructuras'
    ].join('\n');

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  if (!activeLesson || !slide) {
    return (
      <div className="fixed inset-0 z-[230] overflow-y-auto bg-slate-950 text-white">
        {showAssessment && (
          <StructureAssessment
            studentId={studentId}
            localKey={localKey}
            studentName={studentName}
            onClose={() => setShowAssessment(false)}
          />
        )}
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
          <header className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-black/25 p-3 backdrop-blur-md sm:p-4">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-base font-black text-white transition hover:bg-white/20"
            >
              <Home className="h-5 w-5" />
              Volver
            </button>
            <div className="min-w-[180px] flex-1 text-center">
              <div className="text-sm font-black uppercase tracking-widest text-cyan-200 sm:text-base">Plataforma separada</div>
              <div className="truncate text-2xl font-black sm:text-4xl">Modo Estructuras</div>
            </div>
            <div className="hidden rounded-2xl bg-white px-4 py-3 text-base font-black text-slate-950 sm:block">
              {completedAvailableLessons}/{availableLessons.length} listas
            </div>
          </header>

          <section className="grid gap-4 xl:grid-cols-[1fr_0.72fr]">
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
              <div className="mt-7 flex flex-col gap-3 md:flex-row md:flex-wrap">
                <button
                  type="button"
                  onClick={() => openLesson(nextLesson)}
                  className="flex min-w-0 flex-1 items-center justify-center gap-3 rounded-3xl bg-white px-6 py-6 text-[clamp(1.25rem,3vw,1.5rem)] font-black text-slate-950 shadow-2xl transition hover:scale-[1.02]"
                >
                  <Play className="h-8 w-8" />
                  Continuar clase
                </button>
                <button
                  type="button"
                  onClick={() => setCompletedLessonIds([])}
                  className="min-w-0 flex-1 rounded-3xl border border-white/20 bg-white/10 px-6 py-6 text-[clamp(1.1rem,2.5vw,1.25rem)] font-black text-white transition hover:bg-white/20"
                >
                  Reiniciar progreso
                </button>
                <button
                  type="button"
                  onClick={() => setShowAssessment(true)}
                  className="flex min-w-0 flex-1 items-center justify-center gap-3 rounded-3xl bg-emerald-300 px-6 py-6 text-[clamp(1.1rem,2.5vw,1.25rem)] font-black text-slate-950 shadow-2xl transition hover:scale-[1.02]"
                >
                  <ClipboardCheck className="h-7 w-7" />
                  Super evaluación
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
    <div className="structure-lesson-shell fixed inset-0 z-[240] overflow-hidden bg-slate-950 text-white">
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

      <div className="structure-lesson-frame absolute inset-0 grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] p-2 sm:p-3 lg:p-4">
        <header className="structure-lesson-header mb-2 flex shrink-0 flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md sm:flex-nowrap sm:gap-3 sm:px-4">
          <button
            type="button"
            onClick={() => setActiveLesson(null)}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white transition hover:bg-white/20 sm:text-base"
          >
            <Home className="h-5 w-5" />
            Temario
          </button>
          <div className="min-w-[150px] flex-1 text-center">
            <div className="truncate text-sm font-black uppercase tracking-widest text-cyan-200 sm:text-base">{activeLesson.focus}</div>
            <div className="truncate text-lg font-black sm:text-2xl">{activeLesson.title}</div>
          </div>
          <div className="rounded-xl bg-white px-3 py-2 text-sm font-black text-slate-950 sm:text-base">
            {currentSlideIndex + 1}/{activeLesson.slides.length}
          </div>
        </header>

        <main className="structure-lesson-main min-h-0">
          <AnimatePresence mode="wait">
            <motion.section
              key={slide.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              className="structure-slide-card flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-5 lg:p-6"
            >
              <div className="structure-slide-heading mb-4 shrink-0">
                <div className="structure-slide-badges mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-widest text-cyan-100 sm:text-sm">
                    <Layers className="h-4 w-4" />
                    Plataforma Estructuras
                  </span>
                  <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-950 sm:text-sm">
                    {slide.type}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-950 sm:text-sm">
                    <Timer className="h-4 w-4" />
                    Rep {currentSlideIndex + 1}
                  </span>
                </div>
                <h1 className="structure-slide-title break-words text-[clamp(2.15rem,6vw,4.5rem)] font-black leading-none">
                  <RichMemoryText text={slide.title} />
                </h1>
                {slide.subtitle && (
                  <p className="structure-slide-subtitle mt-2 text-[clamp(1.15rem,3vw,1.875rem)] font-bold leading-snug text-white/70">
                    <RichMemoryText text={slide.subtitle} />
                  </p>
                )}
                <div className="structure-memory-legend mt-3 hidden sm:block">
                  <MemoryColorLegend />
                </div>
              </div>

              {slide.type === 'quiz' ? (
                <QuizSlide slide={slide} selectedIndex={selectedAnswers[slide.id]} onSelect={selectAnswer} />
              ) : slide.type === 'boss' ? (
                <BossSlide slide={slide} />
              ) : (
                <div className="structure-slide-body grid min-h-0 min-w-0 flex-1 gap-4 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-5">
                  <StructureVisual slide={slide} slideIndex={currentSlideIndex} />

                  <div className="structure-slide-work grid min-h-0 content-start gap-4">
                    <FormulaBlocks slide={slide} />
                    {(slide.type === 'summary' || slide.type === 'formula') && <FormulaLock slide={slide} />}
                    {slide.title === 'Reading Mini Challenge' ? (
                      <ReadingMiniChallenge slide={slide} />
                    ) : (
                      <div className="structure-content-list grid gap-3">
                        {slide.content.map((line, index) => (
                          <motion.div
                            key={line}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className={`structure-content-card min-w-0 rounded-3xl border border-white/15 p-5 font-black leading-tight shadow-xl ${
                              slide.type === 'homework'
                                ? 'bg-yellow-300 text-slate-950'
                                : slide.type === 'summary'
                                  ? 'bg-emerald-300 text-slate-950'
                                  : 'bg-white text-slate-950'
                            } break-words text-[clamp(1.35rem,3.5vw,3.25rem)] sm:p-6`}
                          >
                            <RichMemoryText text={line} />
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {slide.type === 'homework' && (
                      <button
                        type="button"
                        onClick={shareHomeworkToWhatsApp}
                        className="flex min-h-16 items-center justify-center gap-3 rounded-3xl bg-emerald-400 px-6 py-4 text-[clamp(1.15rem,2.5vw,1.75rem)] font-black text-slate-950 shadow-2xl transition hover:scale-[1.02] hover:bg-emerald-300"
                      >
                        <MessageCircle className="h-7 w-7 shrink-0" />
                        Compartir por WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        </main>

        <footer className="structure-lesson-footer mt-2 flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            disabled={currentSlideIndex === 0}
            className="flex h-12 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition enabled:hover:bg-white/20 disabled:opacity-30 sm:h-16 sm:w-20"
          >
            <ArrowLeft className="h-7 w-7" />
          </button>
          <div className="h-4 min-w-28 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-yellow-300 to-fuchsia-300" animate={{ width: `${slideProgress}%` }} />
          </div>
          <div className="structure-footer-drills hidden items-center gap-2 lg:flex">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black uppercase tracking-widest text-white/80">
              Memory reps: {currentSlideIndex + 1}
            </div>
            <div className="rounded-2xl border border-cyan-200/30 bg-cyan-200/15 px-4 py-3 text-sm font-black uppercase tracking-widest text-cyan-100">
              Tutor drill
            </div>
          </div>
          {isLastSlide ? (
            <button
              type="button"
              onClick={completeActiveLesson}
              className="flex h-12 min-w-32 shrink-0 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 text-base font-black text-slate-950 transition hover:scale-[1.02] sm:h-16 sm:min-w-52 sm:text-xl"
            >
              <CheckCircle className="h-6 w-6" />
              Completar
            </button>
          ) : (
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-12 min-w-28 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white text-base font-black text-slate-950 transition hover:scale-[1.02] sm:h-16 sm:min-w-36 sm:text-xl"
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
