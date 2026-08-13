import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Layers3,
  Lightbulb,
  LoaderCircle,
  LockKeyhole,
  Map,
  Play,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  Volume2,
  X
} from 'lucide-react';

type PuzzleMode = 'easy' | 'medium' | 'hard' | 'expert';
type DecoderScreen = 'intro' | 'roadmap' | 'lesson' | 'player';

type StoryPuzzle = {
  easy_blocks: string[];
  medium_blocks: string[];
  hard_word_by_word: string[];
  expert_with_distractors: string[];
  shuffle_on_each_attempt: boolean;
};

type StoryLine = {
  line_id: string;
  line_role: 'context' | 'target' | 'master_transition';
  es: string;
  en: string;
  preferred_answer: string;
  accepted_answers: string[];
  lesson_target: string;
  grammar_focus: string;
  pattern: string;
  focus_tokens: string[];
  difficulty: number;
  puzzle: StoryPuzzle;
  common_errors: string[];
  hints: string[];
  tutor_explanation: string;
};

type DecoderStory = {
  story_id: string;
  title: string;
  type: string;
  value: string;
  target_line_count: number;
  context_review_line_count: number;
  lines: StoryLine[];
};

type DecoderLesson = {
  lesson_id: number;
  lesson_number_in_block: number;
  topic: string;
  pattern: string;
  learning_goal: string;
  confuses_with: string[];
  stories: DecoderStory[];
};

type DecoderBlock = {
  block_id: number;
  name: string;
  description: string;
  lesson_count: number;
  lessons: DecoderLesson[];
};

type DecoderCurriculum = {
  title: string;
  statistics: {
    blocks: number;
    lessons: number;
    story_count: number;
    story_line_count: number;
  };
  blocks: DecoderBlock[];
};

type DecoderProgress = {
  completedStoryIds: string[];
  lineByStory: Record<string, number>;
};

interface StoryDecoderProps {
  onClose: () => void;
  studentId?: string | null;
}

const DATA_URL = '/data/story-decoder-curriculum.json';
const STORAGE_KEY = 'maven_story_decoder_progress';
const EMPTY_PROGRESS: DecoderProgress = { completedStoryIds: [], lineByStory: {} };

const puzzleModes: { id: PuzzleMode; label: string; detail: string }[] = [
  { id: 'easy', label: 'Bloques', detail: 'Ideas completas' },
  { id: 'medium', label: 'Segmentos', detail: 'Más precisión' },
  { id: 'hard', label: 'Palabras', detail: 'Una por una' },
  { id: 'expert', label: 'Expert', detail: 'Con distractores' }
];

const blockStyles = [
  'from-cyan-500 via-blue-600 to-indigo-800',
  'from-violet-500 via-fuchsia-600 to-purple-900',
  'from-amber-400 via-orange-500 to-rose-700',
  'from-emerald-400 via-teal-600 to-cyan-900',
  'from-blue-500 via-indigo-600 to-violet-900',
  'from-pink-500 via-rose-600 to-red-900',
  'from-sky-400 via-blue-600 to-slate-900',
  'from-fuchsia-500 via-purple-700 to-indigo-950',
  'from-lime-400 via-emerald-600 to-teal-900',
  'from-orange-400 via-red-600 to-fuchsia-900',
  'from-yellow-300 via-amber-500 to-violet-900'
];

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function normalizeSentence(value: string) {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function sentenceFromTokens(tokens: string[]) {
  return tokens.join(' ').replace(/\s+([.,!?;:])/g, '$1').replace(/\s+/g, ' ').trim();
}

function getPuzzleTokens(line: StoryLine, mode: PuzzleMode) {
  if (mode === 'medium') return line.puzzle.medium_blocks;
  if (mode === 'hard') return line.puzzle.hard_word_by_word;
  if (mode === 'expert') return line.puzzle.expert_with_distractors;
  return line.puzzle.easy_blocks;
}

function DecoderIntro({ loading, onStart }: { loading: boolean; onStart: () => void }) {
  const floatingBlocks = [
    { text: 'SUBJECT', className: 'left-[7%] top-[18%] bg-cyan-300 text-cyan-950', delay: 0 },
    { text: 'VERB', className: 'right-[7%] top-[16%] bg-violet-300 text-violet-950', delay: 0.35 },
    { text: 'STORY', className: 'left-[4%] bottom-[8%] bg-yellow-300 text-yellow-950', delay: 0.7 },
    { text: 'MEANING', className: 'right-[6%] bottom-[18%] bg-emerald-300 text-emerald-950', delay: 1.05 }
  ];

  return (
    <div className="story-decoder-intro relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 px-4 py-10 text-white">
      <div className="absolute inset-0 opacity-35 story-decoder-grid" />
      <motion.div
        className="absolute left-[12%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, 30, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[10%] h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
        animate={{ x: [0, -55, 0], y: [0, -35, 0], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {floatingBlocks.map((block) => (
        <motion.div
          key={block.text}
          className={`story-decoder-cube absolute hidden rounded-2xl px-5 py-4 text-sm font-black tracking-[0.2em] shadow-2xl sm:block ${block.className}`}
          initial={{ opacity: 0, scale: 0.4, rotateX: 50, rotateY: -40 }}
          animate={{ opacity: 1, scale: 1, y: [0, -18, 0], rotateX: [10, -8, 10], rotateY: [-12, 12, -12] }}
          transition={{ opacity: { delay: block.delay }, scale: { delay: block.delay, type: 'spring' }, duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {block.text}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            Decode English, one story at a time
          </div>
          <h1 className="mt-5 text-[clamp(3.2rem,9vw,7.5rem)] font-black leading-[0.82] tracking-[-0.07em]">
            Story
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">Decoder</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1.1rem,2vw,1.5rem)] font-semibold leading-relaxed text-indigo-100/85 lg:mx-0">
            Lee la historia, descubre su arquitectura y construye cada frase en inglés pieza por pieza.
          </p>
          <button
            type="button"
            disabled={loading}
            onClick={onStart}
            className="group mt-8 inline-flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-400 px-7 text-xl font-black text-slate-950 shadow-[0_18px_55px_rgba(251,191,36,0.3)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(34,211,238,0.28)] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {loading ? <LoaderCircle className="h-6 w-6 animate-spin" /> : <Play className="h-6 w-6 fill-current" />}
            {loading ? 'Preparando 240 historias...' : 'Entrar al mapa'}
            {!loading && <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />}
          </button>
        </motion.div>

        <div className="story-decoder-scene order-1 flex min-h-[300px] items-center justify-center lg:order-2 lg:min-h-[560px]">
          <motion.div
            className="story-decoder-book relative h-[220px] w-[290px] sm:h-[300px] sm:w-[400px]"
            initial={{ opacity: 0, scale: 0.6, rotateX: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: [8, 2, 8], rotateY: [-8, 8, -8], y: [0, -16, 0] }}
            transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.8, type: 'spring' }, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="story-decoder-book-shadow" />
            <div className="story-decoder-pages story-decoder-pages-left">
              <div className="story-decoder-page-lines" />
              <div className="absolute left-5 top-5 rounded-lg bg-cyan-100 px-2 py-1 text-[0.55rem] font-black text-cyan-800 sm:text-xs">ENGLISH</div>
            </div>
            <div className="story-decoder-pages story-decoder-pages-right">
              <div className="story-decoder-page-lines" />
              <div className="absolute right-5 top-5 rounded-lg bg-violet-100 px-2 py-1 text-[0.55rem] font-black text-violet-800 sm:text-xs">ESPAÑOL</div>
            </div>
            <motion.div
              className="absolute left-1/2 top-[38%] z-20 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 p-4 text-slate-950 shadow-2xl sm:p-6"
              animate={{ rotateZ: [-3, 3, -3], scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Layers3 className="h-10 w-10 sm:h-14 sm:w-14" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function StoryDecoder({ onClose, studentId }: StoryDecoderProps) {
  const progressKey = `${STORAGE_KEY}:${studentId || 'local'}`;
  const [curriculum, setCurriculum] = useState<DecoderCurriculum | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [loadRevision, setLoadRevision] = useState(0);
  const [screen, setScreen] = useState<DecoderScreen>('intro');
  const [expandedBlockId, setExpandedBlockId] = useState<number>(1);
  const [activeBlock, setActiveBlock] = useState<DecoderBlock | null>(null);
  const [activeLesson, setActiveLesson] = useState<DecoderLesson | null>(null);
  const [activeStory, setActiveStory] = useState<DecoderStory | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [mode, setMode] = useState<PuzzleMode>('easy');
  const [tokenRevision, setTokenRevision] = useState(0);
  const [selectedTokenIndexes, setSelectedTokenIndexes] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [hintIndex, setHintIndex] = useState(-1);
  const [feedback, setFeedback] = useState<'idle' | 'wrong-sentence' | 'correct'>('idle');
  const [progress, setProgress] = useState<DecoderProgress>(EMPTY_PROGRESS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(progressKey);
      setProgress(stored ? JSON.parse(stored) : EMPTY_PROGRESS);
    } catch {
      setProgress(EMPTY_PROGRESS);
    }
  }, [progressKey]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError('');
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data: DecoderCurriculum) => {
        if (!cancelled) setCurriculum(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError('No pudimos cargar las historias. Revisa la conexión e inténtalo otra vez.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loadRevision]);

  useEffect(() => {
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }, [progress, progressKey]);

  const orderedLessons = useMemo(
    () => curriculum?.blocks.flatMap((block) => block.lessons.map((lesson) => ({ block, lesson }))) || [],
    [curriculum]
  );

  const completedStorySet = useMemo(() => new Set(progress.completedStoryIds), [progress.completedStoryIds]);
  const completedLessonSet = useMemo(() => new Set(
    orderedLessons
      .filter(({ lesson }) => lesson.stories.every((story) => completedStorySet.has(story.story_id)))
      .map(({ lesson }) => lesson.lesson_id)
  ), [orderedLessons, completedStorySet]);

  const currentLine = activeStory?.lines[lineIndex] || null;
  const shuffledTokens = useMemo(() => {
    if (!currentLine) return [];
    return shuffle(getPuzzleTokens(currentLine, mode)).map((text, index) => ({ id: `${tokenRevision}-${index}-${text}`, text }));
  }, [currentLine, mode, tokenRevision]);
  const selectedTokens = selectedTokenIndexes.map((index) => shuffledTokens[index]).filter(Boolean);
  const assembledSentence = sentenceFromTokens(selectedTokens.map((token) => token.text));
  const totalStories = curriculum?.statistics.story_count || 240;
  const progressPercentage = totalStories ? Math.round((completedStorySet.size / totalStories) * 100) : 0;

  useEffect(() => {
    setSelectedTokenIndexes([]);
    setAttempts(0);
    setHintIndex(-1);
    setFeedback('idle');
    setTokenRevision((value) => value + 1);
  }, [lineIndex, mode, activeStory?.story_id]);

  const isLessonUnlocked = (lessonId: number) => {
    const index = orderedLessons.findIndex(({ lesson }) => lesson.lesson_id === lessonId);
    return index <= 0 || completedLessonSet.has(orderedLessons[index - 1].lesson.lesson_id);
  };

  const openLesson = (block: DecoderBlock, lesson: DecoderLesson) => {
    if (!isLessonUnlocked(lesson.lesson_id)) return;
    setActiveBlock(block);
    setActiveLesson(lesson);
    setScreen('lesson');
  };

  const isStoryUnlocked = (storyIndex: number) => {
    if (!activeLesson || storyIndex === 0) return true;
    return completedStorySet.has(activeLesson.stories[storyIndex - 1].story_id);
  };

  const openStory = (story: DecoderStory, storyIndex: number) => {
    if (!isStoryUnlocked(storyIndex)) return;
    setActiveStory(story);
    const savedLine = progress.lineByStory[story.story_id] || 0;
    setLineIndex(completedStorySet.has(story.story_id) ? 0 : Math.min(savedLine, story.lines.length - 1));
    setScreen('player');
  };

  const toggleToken = (index: number) => {
    if (feedback === 'correct') return;
    setFeedback('idle');
    setSelectedTokenIndexes((current) => (
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    ));
  };

  const resetAnswer = () => {
    setSelectedTokenIndexes([]);
    setFeedback('idle');
    setTokenRevision((value) => value + 1);
  };

  const showHint = () => {
    if (!currentLine) return;
    const maxIndex = Math.max(currentLine.hints.length - 1, 0);
    setHintIndex((current) => Math.min(current + 1, maxIndex));
  };

  const checkAnswer = () => {
    if (!currentLine || selectedTokenIndexes.length === 0) return;

    const acceptedAnswers = [currentLine.preferred_answer, ...currentLine.accepted_answers].map(normalizeSentence);
    const sentenceCorrect = acceptedAnswers.includes(normalizeSentence(assembledSentence));
    setAttempts((value) => value + 1);

    if (!sentenceCorrect) {
      setFeedback('wrong-sentence');
      showHint();
      return;
    }
    setFeedback('correct');
    confetti({ particleCount: 130, spread: 85, origin: { y: 0.62 }, colors: ['#22d3ee', '#fde047', '#a78bfa', '#34d399'] });
  };

  const continueStory = () => {
    if (!activeStory || !currentLine) return;
    if (lineIndex < activeStory.lines.length - 1) {
      const nextLine = lineIndex + 1;
      setProgress((current) => ({
        ...current,
        lineByStory: { ...current.lineByStory, [activeStory.story_id]: nextLine }
      }));
      setLineIndex(nextLine);
      return;
    }

    setProgress((current) => ({
      completedStoryIds: Array.from(new Set([...current.completedStoryIds, activeStory.story_id])),
      lineByStory: { ...current.lineByStory, [activeStory.story_id]: activeStory.lines.length - 1 }
    }));
    confetti({ particleCount: 240, spread: 120, origin: { y: 0.5 }, scalar: 1.15 });
    setScreen('lesson');
  };

  const speakEnglish = () => {
    if (!currentLine || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentLine.en);
    utterance.lang = 'en-US';
    utterance.rate = 0.86;
    window.speechSynthesis.speak(utterance);
  };

  if (screen === 'intro') {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950">
        <button
          type="button"
          onClick={onClose}
          className="fixed right-4 top-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-slate-950/50 text-white shadow-xl backdrop-blur-xl transition hover:bg-white hover:text-slate-950"
          aria-label="Cerrar Story Decoder"
        >
          <X className="h-6 w-6" />
        </button>
        <DecoderIntro loading={loading} onStart={() => !loading && curriculum && setScreen('roadmap')} />
        {loadError && (
          <div className="fixed inset-x-4 bottom-5 z-[70] mx-auto flex max-w-xl items-center justify-between gap-3 rounded-2xl border border-rose-300 bg-rose-50 p-4 font-bold text-rose-900 shadow-2xl">
            <span>{loadError}</span>
            <button type="button" onClick={() => setLoadRevision((value) => value + 1)} className="flex shrink-0 items-center gap-2 rounded-xl bg-rose-700 px-4 py-3 text-white">
              <RefreshCw className="h-4 w-4" /> Reintentar
            </button>
          </div>
        )}
      </div>
    );
  }

  if (!curriculum) return null;

  if (screen === 'roadmap') {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50 text-slate-950">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <button type="button" onClick={onClose} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-950 hover:text-white" aria-label="Volver al inicio">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500">Currículo narrativo completo</div>
              <div className="truncate text-2xl font-black tracking-tight sm:text-3xl">Story Decoder</div>
            </div>
            <div className="hidden min-w-[240px] sm:block">
              <div className="mb-1 flex justify-between text-xs font-black uppercase tracking-widest text-slate-500">
                <span>{completedStorySet.size}/{totalStories} historias</span><span>{progressPercentage}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-600" animate={{ width: `${progressPercentage}%` }} />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <section className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 p-6 text-white shadow-2xl sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-100"><Map className="h-4 w-4" /> Temario completo</div>
                <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-black leading-none tracking-tight">80 clases. Cero estructuras por fuera.</h2>
                <p className="mt-3 max-w-3xl text-lg font-semibold text-indigo-100/80">Avanza por fases: completa las tres historias de una clase para activar la siguiente.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"><div className="text-4xl font-black text-yellow-300">11</div><div className="text-xs font-black uppercase tracking-widest">Bloques</div></div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"><div className="text-4xl font-black text-cyan-300">240</div><div className="text-xs font-black uppercase tracking-widest">Historias</div></div>
              </div>
            </div>
          </section>

          <div className="space-y-4">
            {curriculum.blocks.map((block, blockIndex) => {
              const completedInBlock = block.lessons.filter((lesson) => completedLessonSet.has(lesson.lesson_id)).length;
              const expanded = expandedBlockId === block.block_id;
              const firstLesson = block.lessons[0];
              const blockUnlocked = isLessonUnlocked(firstLesson.lesson_id);
              return (
                <motion.section key={block.block_id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(blockIndex * 0.04, 0.35) }} className="overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-lg shadow-indigo-950/5">
                  <button type="button" disabled={!blockUnlocked} onClick={() => setExpandedBlockId(expanded ? 0 : block.block_id)} className={`relative flex w-full items-center gap-4 overflow-hidden bg-gradient-to-r p-5 text-left text-white transition sm:p-6 ${blockStyles[blockIndex % blockStyles.length]} disabled:cursor-not-allowed disabled:grayscale`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_42%)]" />
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl font-black shadow-xl backdrop-blur sm:h-16 sm:w-16">{blockUnlocked ? block.block_id : <LockKeyhole className="h-7 w-7" />}</div>
                    <div className="relative min-w-0 flex-1">
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-white/65">Bloque {block.block_id}</div>
                      <h3 className="text-xl font-black leading-tight sm:text-2xl">{block.name}</h3>
                      <p className="mt-1 hidden max-w-3xl text-sm font-semibold text-white/75 sm:block">{block.description}</p>
                    </div>
                    <div className="relative shrink-0 text-right">
                      <div className="text-lg font-black">{completedInBlock}/{block.lesson_count}</div>
                      <div className="text-[0.65rem] font-black uppercase tracking-widest text-white/65">clases</div>
                    </div>
                    <ChevronDown className={`relative h-6 w-6 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && blockUnlocked && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                          {block.lessons.map((lesson) => {
                            const unlocked = isLessonUnlocked(lesson.lesson_id);
                            const complete = completedLessonSet.has(lesson.lesson_id);
                            const completedStories = lesson.stories.filter((story) => completedStorySet.has(story.story_id)).length;
                            return (
                              <button key={lesson.lesson_id} type="button" disabled={!unlocked} onClick={() => openLesson(block, lesson)} className={`group flex min-h-32 items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${complete ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-400' : unlocked ? 'border-indigo-100 bg-white hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl' : 'border-slate-100 bg-slate-100 text-slate-400'}`}>
                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black ${complete ? 'bg-emerald-500 text-white' : unlocked ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-400'}`}>{complete ? <Check className="h-6 w-6" /> : unlocked ? lesson.lesson_id : <LockKeyhole className="h-5 w-5" />}</div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-[0.65rem] font-black uppercase tracking-[0.17em] text-indigo-500">Clase {lesson.lesson_id} · {completedStories}/3 historias</div>
                                  <div className="mt-1 text-lg font-black leading-tight text-slate-900 group-disabled:text-slate-400">{lesson.topic}</div>
                                </div>
                                {unlocked && <ChevronRight className="h-5 w-5 shrink-0 text-indigo-400 transition-transform group-hover:translate-x-1" />}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.section>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  if (screen === 'lesson' && activeLesson && activeBlock) {
    const lessonComplete = activeLesson.stories.every((story) => completedStorySet.has(story.story_id));
    return (
      <div className={`fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br ${blockStyles[(activeBlock.block_id - 1) % blockStyles.length]} text-white`}>
        <div className="absolute inset-0 opacity-25 story-decoder-grid" />
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="mx-auto flex max-w-6xl items-center gap-3">
            <button type="button" onClick={() => setScreen('roadmap')} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white hover:text-slate-950"><ArrowLeft className="h-6 w-6" /></button>
            <div className="min-w-0 flex-1"><div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Bloque {activeBlock.block_id} · Clase {activeLesson.lesson_id}</div><div className="truncate text-xl font-black sm:text-2xl">{activeLesson.topic}</div></div>
            {lessonComplete && <div className="hidden items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-black text-emerald-950 sm:flex"><Trophy className="h-5 w-5" /> Clase completa</div>}
          </div>
        </header>
        <main className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-4 py-8 sm:px-6">
          <div className="mb-7 rounded-[2rem] border border-white/15 bg-slate-950/35 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-cyan-950">Patrón</span><span className="text-lg font-black text-cyan-50 sm:text-2xl">{activeLesson.pattern}</span></div>
            <h2 className="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-black leading-none tracking-tight">Elige tu historia</h2>
            <p className="mt-3 max-w-4xl text-lg font-semibold text-white/75">{activeLesson.learning_goal}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {activeLesson.stories.map((story, index) => {
              const unlocked = isStoryUnlocked(index);
              const complete = completedStorySet.has(story.story_id);
              const savedLine = progress.lineByStory[story.story_id] || 0;
              return (
                <motion.button key={story.story_id} type="button" disabled={!unlocked} onClick={() => openStory(story, index)} whileHover={unlocked ? { y: -8 } : undefined} className={`group relative min-h-[300px] overflow-hidden rounded-[2rem] border p-6 text-left shadow-2xl transition ${complete ? 'border-emerald-300 bg-emerald-50 text-slate-950' : unlocked ? 'border-white/20 bg-white text-slate-950' : 'border-white/10 bg-slate-950/45 text-white/45'}`}>
                  <div className="absolute right-0 top-0 h-36 w-36 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-cyan-300/50 to-violet-400/30 blur-2xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${complete ? 'bg-emerald-500 text-white' : unlocked ? 'bg-gradient-to-br from-indigo-500 to-violet-700 text-white' : 'bg-white/10'}`}>{complete ? <CheckCircle2 className="h-7 w-7" /> : unlocked ? <BookOpen className="h-7 w-7" /> : <LockKeyhole className="h-6 w-6" />}</div>
                      <span className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-widest ${complete ? 'bg-emerald-100 text-emerald-800' : unlocked ? 'bg-indigo-50 text-indigo-700' : 'bg-white/10'}`}>{story.type}</span>
                    </div>
                    <div className="mt-8 text-xs font-black uppercase tracking-[0.2em] opacity-55">Historia {index + 1} · 12 líneas</div>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{story.title}</h3>
                    <div className="mt-auto pt-7">
                      <div className="mb-3 flex items-center justify-between text-sm font-black"><span>Valor: {story.value}</span><span>{complete ? '100%' : savedLine ? `${Math.round((savedLine / story.lines.length) * 100)}%` : 'Nueva'}</span></div>
                      <div className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl font-black ${complete ? 'bg-emerald-500 text-white' : unlocked ? 'bg-slate-950 text-white group-hover:bg-indigo-700' : 'bg-white/10'}`}>{complete ? 'Practicar otra vez' : savedLine ? 'Continuar historia' : unlocked ? 'Comenzar' : 'Completa la historia anterior'}{unlocked && <ArrowRight className="h-5 w-5" />}</div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  if (screen === 'player' && activeStory && activeLesson && activeBlock && currentLine) {
    const selectedIndexSet = new Set(selectedTokenIndexes);
    const needsChoice = selectedTokenIndexes.length === 0;
    return (
      <div className="fixed inset-0 z-50 flex min-h-0 flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 text-white">
        <header className="z-30 shrink-0 border-b border-white/10 bg-slate-950/75 px-3 py-2 backdrop-blur-xl sm:px-5 sm:py-3">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <button type="button" onClick={() => setScreen('lesson')} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white hover:text-slate-950" aria-label="Volver a historias"><ArrowLeft className="h-5 w-5" /></button>
            <div className="min-w-0 flex-1"><div className="truncate text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{activeLesson.topic}</div><div className="truncate text-lg font-black sm:text-xl">{activeStory.title}</div></div>
            <div className="shrink-0 text-right"><div className="text-lg font-black text-yellow-300">{lineIndex + 1}/{activeStory.lines.length}</div><div className="hidden text-[0.6rem] font-black uppercase tracking-widest text-white/50 sm:block">líneas</div></div>
            <button type="button" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition hover:bg-rose-500" aria-label="Cerrar Story Decoder"><X className="h-5 w-5" /></button>
          </div>
          <div className="mx-auto mt-2 h-2 max-w-[1500px] overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-yellow-300" animate={{ width: `${((lineIndex + (feedback === 'correct' ? 1 : 0)) / activeStory.lines.length) * 100}%` }} /></div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-5 sm:py-4">
          <div className="mx-auto flex min-h-full max-w-[1320px] flex-col justify-center gap-3">
            <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-widest ${currentLine.line_role === 'target' ? 'bg-yellow-300 text-yellow-950' : 'bg-cyan-300 text-cyan-950'}`}>{currentLine.line_role === 'target' ? 'Frase objetivo' : 'Historia'}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-black text-white/70">Dificultad {currentLine.difficulty}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 rounded-xl bg-slate-950/40 p-1">
                    {puzzleModes.map((item) => <button key={item.id} type="button" onClick={() => setMode(item.id)} className={`min-h-10 rounded-lg px-3 text-xs font-black transition ${mode === item.id ? 'bg-yellow-300 text-yellow-950 shadow-lg' : 'text-white/65 hover:bg-white/10 hover:text-white'}`} title={item.detail}>{item.label}</button>)}
                  </div>
                </div>

                <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[1.5rem] border border-violet-300/20 bg-gradient-to-br from-violet-400/15 via-indigo-300/10 to-cyan-300/10 p-5 text-center sm:min-h-[250px] sm:p-8">
                  <div className="text-xs font-black uppercase tracking-[0.25em] text-violet-300">Construye esta frase en inglés</div>
                  <p className="mt-4 max-w-6xl text-[clamp(2rem,5.3vw,5.3rem)] font-black leading-[1.02] tracking-tight text-white">{currentLine.es}</p>
                </div>

                <div className="mt-3 min-h-24 rounded-2xl border-2 border-dashed border-cyan-300/25 bg-slate-950/45 p-3 sm:p-4">
                  {selectedTokens.length ? (
                    <div className="flex min-h-16 flex-wrap items-center justify-center gap-2">
                      {selectedTokens.map((token, position) => {
                        const originalIndex = selectedTokenIndexes[position];
                        return <button key={`${token.id}-selected`} type="button" onClick={() => toggleToken(originalIndex)} className="min-h-14 rounded-xl bg-gradient-to-br from-cyan-200 to-cyan-400 px-4 text-center text-[clamp(1.05rem,2.2vw,1.55rem)] font-black text-cyan-950 shadow-lg transition hover:-translate-y-0.5">{token.text}</button>;
                      })}
                    </div>
                  ) : <div className="flex min-h-16 items-center justify-center text-center text-lg font-bold text-white/40"><Layers3 className="mr-2 h-6 w-6" /> Presiona las opciones para armar la frase completa</div>}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {shuffledTokens.map((token, index) => {
                    const selected = selectedIndexSet.has(index);
                    return <button key={token.id} type="button" disabled={selected || feedback === 'correct'} onClick={() => toggleToken(index)} className={`min-h-16 rounded-xl border px-3 py-2 text-[clamp(1rem,1.8vw,1.3rem)] font-black leading-tight transition ${selected ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100/30' : 'border-white/15 bg-white text-slate-950 shadow-lg hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-50'}`}>{token.text}</button>;
                  })}
                </div>
              </div>
            </section>

            <section>
              <AnimatePresence mode="wait">
                {hintIndex >= 0 && currentLine.hints.length > 0 && feedback !== 'correct' && (
                  <motion.div key={`hint-${hintIndex}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-yellow-300/30 bg-yellow-300 p-4 text-lg font-black text-yellow-950 shadow-xl"><div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest opacity-65"><Lightbulb className="h-4 w-4" /> Pista {hintIndex + 1}</div>{currentLine.hints[Math.min(hintIndex, currentLine.hints.length - 1)]}</motion.div>
                )}
                {feedback === 'wrong-sentence' && <motion.div key="wrong-sentence" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-rose-300/30 bg-rose-500 p-4 text-center text-lg font-black text-white shadow-xl">La frase todavía no está completa o el orden no es correcto. Retira los bloques necesarios y vuelve a intentarlo.</motion.div>}
                {feedback === 'correct' && (
                  <motion.div key="correct" initial={{ opacity: 0, scale: 0.94, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="overflow-hidden rounded-[1.75rem] border border-emerald-200/50 bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-300 p-5 text-center text-slate-950 shadow-2xl sm:p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl"><CheckCircle2 className="h-8 w-8 text-emerald-600" /></div>
                    <div className="mt-3 text-2xl font-black">¡Frase completa!</div>
                    <p className="mx-auto mt-2 max-w-5xl text-[clamp(1.5rem,3.4vw,3rem)] font-black leading-tight">{currentLine.en}</p>
                    <button type="button" onClick={speakEnglish} className="mx-auto mt-4 flex min-h-12 items-center gap-2 rounded-xl bg-slate-950 px-5 font-black text-white transition hover:-translate-y-0.5"><Volume2 className="h-5 w-5" /> Escuchar respuesta</button>
                    {attempts > 1 && <p className="mt-3 text-xs font-black uppercase tracking-widest opacity-60">Resuelto en {attempts} intentos</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>
        </main>

        <footer className="z-30 shrink-0 border-t border-white/10 bg-slate-950/85 px-3 py-2 backdrop-blur-xl sm:px-5 sm:py-3">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-2">
            <div className="flex gap-2">
              <button type="button" disabled={feedback === 'correct'} onClick={resetAnswer} className="flex min-h-12 items-center gap-2 rounded-xl bg-white/10 px-4 font-black transition hover:bg-white/20 disabled:opacity-40" title="Reiniciar respuesta"><RotateCcw className="h-5 w-5" /><span className="hidden sm:inline">Reiniciar</span></button>
              <button type="button" disabled={feedback === 'correct'} onClick={showHint} className="flex min-h-12 items-center gap-2 rounded-xl bg-yellow-300/15 px-4 font-black text-yellow-200 transition hover:bg-yellow-300 hover:text-yellow-950 disabled:opacity-40"><Lightbulb className="h-5 w-5" /><span className="hidden sm:inline">Pista</span></button>
            </div>
            {feedback === 'correct' ? (
              <button type="button" onClick={continueStory} className="flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 sm:px-7 sm:text-lg">{lineIndex === activeStory.lines.length - 1 ? <Trophy className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}{lineIndex === activeStory.lines.length - 1 ? 'Completar historia' : 'Siguiente línea'}</button>
            ) : (
              <button type="button" disabled={needsChoice} onClick={checkAnswer} className="flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-400 px-5 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 sm:px-7 sm:text-lg"><Target className="h-5 w-5" /> Comprobar</button>
            )}
          </div>
        </footer>
      </div>
    );
  }

  return null;
}
