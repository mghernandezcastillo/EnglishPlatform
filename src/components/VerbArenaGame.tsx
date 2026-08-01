import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Clock3, Gauge, MessageCircle, Play, RotateCcw, Settings2, Sparkles, Trophy, XCircle } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';
import { useBrand } from '../hooks/useBrand';

type LexiconCategory = 'common_verb' | 'irregular_verb' | 'phrasal_verb' | 'idiom';

type VerbGuideItem = {
  category: LexiconCategory;
  term: string;
  base_verb?: string | null;
  past?: string | null;
  past_participle?: string | null;
  meaning_es?: string | null;
  definition_en?: string | null;
  example_en?: string | null;
};

type GameItem = VerbGuideItem & {
  answer: string;
};

type Round = {
  item: GameItem;
  options: string[];
};

type GameMode = 'all' | LexiconCategory;
type Phase = 'intro' | 'countdown' | 'question' | 'feedback' | 'results';
type Feedback = 'correct' | 'wrong' | 'unknown' | 'timeout';

type AnswerHistoryItem = {
  item: GameItem;
  status: Feedback;
  selectedAnswer: string | null;
};

const DATA_URL = '/data/verbs-guide.json';
const ARENA_BG = '/images/verbs-game/ai-verb-arena-bg.webp';

const modes: { id: GameMode; label: string; detail: string }[] = [
  { id: 'all', label: 'Mixed Challenge', detail: 'Todo mezclado' },
  { id: 'common_verb', label: 'Common Verbs', detail: 'Verb + meaning' },
  { id: 'irregular_verb', label: 'Irregular Verbs', detail: 'Past forms' },
  { id: 'phrasal_verb', label: 'Phrasal Verbs', detail: 'Meaning in context' },
  { id: 'idiom', label: 'Idioms', detail: 'Real expressions' },
];

const timerOptions = [
  { label: '5s', value: 5 },
  { label: '10s', value: 10 },
  { label: '15s', value: 15 },
  { label: '30s', value: 30 },
  { label: 'Off', value: 0 },
];

const categoryNames: Record<LexiconCategory, string> = {
  common_verb: 'Common Verb',
  irregular_verb: 'Irregular Verb',
  phrasal_verb: 'Phrasal Verb',
  idiom: 'Idiom',
};

const categoryAccent: Record<LexiconCategory, string> = {
  common_verb: 'from-cyan-300 to-blue-500',
  irregular_verb: 'from-violet-300 to-fuchsia-500',
  phrasal_verb: 'from-emerald-300 to-cyan-500',
  idiom: 'from-amber-300 to-red-500',
};

function shuffle<T>(input: T[]) {
  const items = [...input];
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
  return items;
}

function cleanAnswer(item: VerbGuideItem) {
  return (item.meaning_es || item.definition_en || '').replace(/\s+/g, ' ').trim();
}

function toGameItems(items: VerbGuideItem[]) {
  return items
    .map((item) => ({ ...item, answer: cleanAnswer(item) }))
    .filter((item) => item.term && item.answer.length > 1);
}

function buildRound(pool: GameItem[], mode: GameMode): Round | null {
  if (pool.length < 4) return null;
  const item = pool[Math.floor(Math.random() * pool.length)];
  const distractorSource = pool.filter((candidate) => candidate.answer !== item.answer && (mode === 'all' || candidate.category === item.category));
  const fallbackSource = pool.filter((candidate) => candidate.answer !== item.answer);
  const distractors = shuffle(distractorSource.length >= 3 ? distractorSource : fallbackSource)
    .slice(0, 3)
    .map((candidate) => candidate.answer);

  if (distractors.length < 3) return null;
  return {
    item,
    options: shuffle([item.answer, ...distractors]),
  };
}

function isVerbCategory(category: LexiconCategory) {
  return category === 'common_verb' || category === 'irregular_verb';
}

function formatMeaning(item: GameItem) {
  return item.meaning_es || item.definition_en || item.answer;
}

function formatShareEntry(item: GameItem) {
  if (isVerbCategory(item.category)) {
    return `${item.base_verb || item.term} / ${item.past || '-'} / ${item.past_participle || '-'} = ${formatMeaning(item)}`;
  }
  const example = item.example_en ? ` Example: ${item.example_en}` : '';
  return `${item.term} = ${formatMeaning(item)}.${example}`;
}

function statusLabel(status: Feedback) {
  if (status === 'correct') return 'Correct';
  if (status === 'wrong') return 'Wrong';
  if (status === 'unknown') return "I don't know";
  return 'Timeout';
}

function statusClass(status: Feedback) {
  if (status === 'correct') return 'bg-emerald-100 text-emerald-800 ring-emerald-200';
  if (status === 'wrong') return 'bg-red-100 text-red-800 ring-red-200';
  if (status === 'unknown') return 'bg-amber-100 text-amber-800 ring-amber-200';
  return 'bg-slate-200 text-slate-800 ring-slate-300';
}

type GameSound = 'countdown' | 'start' | 'timer' | 'danger' | 'timeout' | 'correct' | 'wrong';

function createAudioContext() {
  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return AudioContextClass ? new AudioContextClass() : null;
}

interface VerbArenaGameProps {
  onBack?: () => void;
}

export function VerbArenaGame({ onBack }: VerbArenaGameProps) {
  const { brand } = useBrand();
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastCountdownSoundRef = useRef<number | null>(null);
  const lastTimerSoundRef = useRef<number | null>(null);
  const [items, setItems] = useState<GameItem[]>([]);
  const [phase, setPhase] = useState<Phase>('intro');
  const [mode, setMode] = useState<GameMode>('all');
  const [timerSeconds, setTimerSeconds] = useState(10);
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(10);
  const [round, setRound] = useState<Round | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [stats, setStats] = useState({ total: 0, correct: 0, wrong: 0, unknown: 0, timeout: 0 });
  const [reviewItems, setReviewItems] = useState<GameItem[]>([]);
  const [history, setHistory] = useState<AnswerHistoryItem[]>([]);

  useEffect(() => {
    document.title = 'AI Verb Arena | Maven English';
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((data: VerbGuideItem[]) => setItems(toGameItems(data)));
  }, []);

  const pool = useMemo(() => {
    if (mode === 'all') return items;
    return items.filter((item) => item.category === mode);
  }, [items, mode]);

  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const timerEnabled = timerSeconds > 0;
  const timerProgress = timerEnabled ? Math.max(0, Math.min(100, (timeLeft / timerSeconds) * 100)) : 100;

  const unlockAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = createAudioContext();
    }
    if (audioContextRef.current?.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const playSound = (sound: GameSound) => {
    if (typeof window === 'undefined') return;
    unlockAudio();
    const context = audioContextRef.current;
    if (!context) return;

    const sounds: Record<GameSound, { frequency: number; duration: number; volume: number; type?: OscillatorType }> = {
      countdown: { frequency: 620, duration: 0.09, volume: 0.08 },
      start: { frequency: 880, duration: 0.16, volume: 0.09 },
      timer: { frequency: 420, duration: 0.045, volume: 0.035 },
      danger: { frequency: 980, duration: 0.075, volume: 0.07 },
      timeout: { frequency: 170, duration: 0.22, volume: 0.09, type: 'sawtooth' },
      correct: { frequency: 1046, duration: 0.18, volume: 0.08 },
      wrong: { frequency: 220, duration: 0.16, volume: 0.08, type: 'square' },
    };
    const { frequency, duration, volume, type = 'sine' } = sounds[sound];
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = context.currentTime;
    const endAt = startAt + duration;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startAt);
    if (sound === 'start' || sound === 'correct') {
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.35, endAt);
    }
    if (sound === 'timeout' || sound === 'wrong') {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(80, frequency * 0.72), endAt);
    }

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, endAt);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startAt);
    oscillator.stop(endAt + 0.02);
  };

  const beginCountdown = () => {
    unlockAudio();
    setSelectedAnswer(null);
    setFeedback(null);
    setCountdown(3);
    lastCountdownSoundRef.current = null;
    lastTimerSoundRef.current = null;
    setPhase('countdown');
  };

  const prepareRound = () => {
    const nextRound = buildRound(pool, mode);
    if (!nextRound) return;
    setRound(nextRound);
    setTimeLeft(timerSeconds);
    setSelectedAnswer(null);
    setFeedback(null);
    lastTimerSoundRef.current = null;
    playSound('start');
    setPhase('question');
  };

  const startGame = () => {
    setStats({ total: 0, correct: 0, wrong: 0, unknown: 0, timeout: 0 });
    setReviewItems([]);
    setHistory([]);
    beginCountdown();
  };

  const answerRound = (answer: string | null, answerFeedback: Feedback) => {
    if (!round || phase !== 'question') return;
    playSound(answerFeedback === 'correct' ? 'correct' : answerFeedback === 'timeout' ? 'timeout' : 'wrong');
    setSelectedAnswer(answer);
    setFeedback(answerFeedback);
    setStats((prev) => ({
      total: prev.total + 1,
      correct: prev.correct + (answerFeedback === 'correct' ? 1 : 0),
      wrong: prev.wrong + (answerFeedback === 'wrong' ? 1 : 0),
      unknown: prev.unknown + (answerFeedback === 'unknown' ? 1 : 0),
      timeout: prev.timeout + (answerFeedback === 'timeout' ? 1 : 0),
    }));
    if (answerFeedback !== 'correct') {
      setReviewItems((prev) => [round.item, ...prev.filter((item) => item.term !== round.item.term)].slice(0, 20));
    }
    setHistory((prev) => [{ item: round.item, status: answerFeedback, selectedAnswer: answer }, ...prev]);
    setPhase('feedback');
  };

  const handleAnswer = (answer: string) => {
    if (!round) return;
    answerRound(answer, answer === round.item.answer ? 'correct' : 'wrong');
  };

  useEffect(() => {
    if (phase !== 'countdown') return;
    if (countdown > 0 && countdown !== lastCountdownSoundRef.current) {
      playSound('countdown');
      lastCountdownSoundRef.current = countdown;
    }
    if (countdown <= 0) {
      prepareRound();
      return;
    }
    const timeout = window.setTimeout(() => setCountdown((value) => value - 1), 720);
    return () => window.clearTimeout(timeout);
  }, [countdown, phase]);

  useEffect(() => {
    if (phase !== 'question' || !timerEnabled) return;
    if (timeLeft > 0 && timeLeft !== lastTimerSoundRef.current) {
      playSound(timeLeft <= 3 ? 'danger' : 'timer');
      lastTimerSoundRef.current = timeLeft;
    }
    if (timeLeft <= 0) {
      answerRound(null, 'timeout');
      return;
    }
    const timeout = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timeout);
  }, [phase, timeLeft, timerEnabled]);

  const shareResults = () => {
    const priority = history.filter((entry) => entry.status !== 'correct').slice(0, 12);
    const strong = history.filter((entry) => entry.status === 'correct').slice(0, 5);
    const lines = [
      'AI Verb Arena Report - Maven English',
      '',
      `Accuracy: ${accuracy}%`,
      `Questions: ${stats.total}`,
      `Correct: ${stats.correct}`,
      `Wrong: ${stats.wrong}`,
      `I don't know: ${stats.unknown}`,
      `Timeout: ${stats.timeout}`,
      '',
      priority.length ? 'Practice first:' : 'Practice first: none',
      ...priority.map((entry, index) => `${index + 1}. ${formatShareEntry(entry.item)}`),
      '',
      strong.length ? 'Already strong:' : '',
      ...strong.map((entry, index) => `${index + 1}. ${formatShareEntry(entry.item)}`),
      '',
      `${window.location.origin}/verbs/arena`,
    ].filter((line) => line !== '');
    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  };

  const practiceMissed = () => {
    const missedItems = history.filter((entry) => entry.status !== 'correct').map((entry) => entry.item);
    if (missedItems.length < 4) return;
    setMode('all');
    setItems((prev) => [...missedItems, ...prev]);
    beginCountdown();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0">
        <img src={ARENA_BG} alt="" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.15),rgba(2,6,23,0.92)_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950" />
      </div>

      <header className="relative z-20 flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20"
              aria-label="Volver"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          {brand.logoUrl && <img src={brand.logoUrl} alt={brand.name} className="h-12 w-12 rounded-2xl object-contain shadow-lg shadow-cyan-500/20" />}
          <BrandWordmark name="MAVEN ENGLISH" subtitle="AI Verb Arena" compact light />
        </div>

        <button
          onClick={() => setPhase('results')}
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-black text-white shadow-lg backdrop-blur transition hover:bg-white/20"
        >
          Results
        </button>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-4 pb-6 sm:px-6">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid w-full gap-6 lg:grid-cols-[1fr_440px] lg:items-center"
            >
              <div className="max-w-4xl">
                <motion.div
                  animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-100 backdrop-blur"
                >
                  <Sparkles className="h-4 w-4" />
                  AI vocabulary challenge
                </motion.div>
                <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                  AI Verb
                  <span className="block bg-gradient-to-r from-cyan-200 via-white to-red-200 bg-clip-text text-transparent">Arena</span>
                </h1>
                <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-200 sm:text-2xl">
                  Trivia infinita para dominar verbos, phrasal verbs e idioms. Responde rápido, aprende del error y detén el juego cuando quieras ver resultados.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-slate-950/68 p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl sm:p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-cyan-100">
                  <Settings2 className="h-5 w-5" />
                  Game setup
                </div>
                <div className="grid gap-3">
                  {modes.map((gameMode) => (
                    <button
                      key={gameMode.id}
                      onClick={() => setMode(gameMode.id)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        mode === gameMode.id
                          ? 'border-cyan-300 bg-cyan-300/15 shadow-lg shadow-cyan-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-lg font-black">{gameMode.label}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-300">{gameMode.detail}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-300">
                    <Clock3 className="h-4 w-4" />
                    Timer
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {timerOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setTimerSeconds(option.value)}
                        className={`h-12 rounded-2xl text-sm font-black transition ${
                          timerSeconds === option.value ? 'bg-white text-slate-950' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={startGame}
                  disabled={pool.length < 4}
                  className="mt-5 flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-red-200 px-6 py-4 text-xl font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Play className="h-6 w-6 fill-current" />
                  Start Arena
                </button>
              </div>
            </motion.section>
          )}

          {phase === 'countdown' && (
            <motion.section key="countdown" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid min-h-[calc(100vh-112px)] w-full place-items-center">
              <motion.div
                key={countdown}
                initial={{ scale: 0.45, rotate: -8, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 1.35, opacity: 0 }}
                className="grid h-[min(86vw,72vh,680px)] w-[min(86vw,72vh,680px)] place-items-center rounded-full border-4 border-cyan-100/70 bg-slate-950/72 text-center shadow-2xl shadow-cyan-300/40 ring-8 ring-cyan-300/15 backdrop-blur-xl"
              >
                <div className="px-4">
                  <div className="text-2xl font-black uppercase tracking-[0.28em] text-cyan-100 sm:text-4xl">Next word</div>
                  <div className="text-[34vw] font-black leading-none text-white drop-shadow-[0_0_36px_rgba(103,232,249,0.85)] sm:text-[22rem]">
                    {Math.max(countdown, 1)}
                  </div>
                  <div className="text-xl font-black uppercase tracking-[0.2em] text-red-100 sm:text-3xl">Get ready</div>
                </div>
              </motion.div>
            </motion.section>
          )}

          {phase === 'question' && round && (
            <motion.section key={round.item.term} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className="w-full">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className={`rounded-full bg-gradient-to-r ${categoryAccent[round.item.category]} px-4 py-2 text-sm font-black uppercase tracking-wider text-slate-950`}>
                  {categoryNames[round.item.category]}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                    Score {stats.correct}/{stats.total}
                  </div>
                  <div className={`relative grid h-16 w-16 place-items-center rounded-full border ${timeLeft <= 3 && timerEnabled ? 'border-red-300 text-red-100' : 'border-cyan-200/40 text-white'} bg-slate-950/60 shadow-lg backdrop-blur`}>
                    <div className="absolute inset-1 rounded-full" style={{ background: `conic-gradient(${timeLeft <= 3 && timerEnabled ? '#fb7185' : '#67e8f9'} ${timerProgress}%, rgba(255,255,255,0.12) 0)` }} />
                    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-xl font-black">
                      {timerEnabled ? timeLeft : '∞'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-slate-950/72 p-5 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:p-7 lg:p-8">
                <div className="text-center">
                  <div className="mb-3 text-base font-black uppercase tracking-[0.25em] text-cyan-100">What does it mean?</div>
                  <h2 className="mx-auto max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                    {round.item.term}
                  </h2>
                  {round.item.past && (
                    <div className="mt-5 inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white/8 p-2 text-sm font-black text-slate-200 sm:text-base">
                      <span className="rounded-xl bg-white/10 px-3 py-2">Past: {round.item.past}</span>
                      <span className="rounded-xl bg-white/10 px-3 py-2">Participle: {round.item.past_participle || '-'}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {round.options.map((option, index) => (
                    <button
                      key={`${option}-${index}`}
                      onClick={() => handleAnswer(option)}
                      className="min-h-24 rounded-3xl border border-white/10 bg-white px-5 py-4 text-left text-xl font-black leading-snug text-slate-950 shadow-lg transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50 active:scale-[0.99] sm:text-2xl"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => answerRound(null, 'unknown')}
                  className="mt-3 min-h-16 w-full rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-xl font-black text-white backdrop-blur transition hover:bg-white/18"
                >
                  I don't know
                </button>
              </div>
            </motion.section>
          )}

          {phase === 'feedback' && round && feedback && (
            <motion.section key="feedback" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full">
              <div className={`rounded-[2rem] border p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10 ${
                feedback === 'correct'
                  ? 'border-emerald-200/40 bg-emerald-400/16 shadow-emerald-900/30'
                  : 'border-red-200/35 bg-red-400/14 shadow-red-900/30'
              }`}>
                <motion.div
                  initial={{ scale: 0.2, opacity: 0, rotate: -12 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-white text-slate-950 shadow-xl"
                >
                  {feedback === 'correct' ? <CheckCircle2 className="h-14 w-14 text-emerald-600" /> : <XCircle className="h-14 w-14 text-red-600" />}
                </motion.div>
                <h2 className="text-5xl font-black leading-none sm:text-7xl">
                  {feedback === 'correct' ? 'Excellent.' : feedback === 'unknown' ? 'Saved for review.' : feedback === 'timeout' ? 'Time is up.' : 'Not this one.'}
                </h2>
                <p className="mx-auto mt-5 max-w-4xl text-2xl font-bold leading-snug text-white">
                  <span className="text-cyan-100">{round.item.term}</span> = {round.item.answer}
                </p>
                {selectedAnswer && selectedAnswer !== round.item.answer && (
                  <p className="mt-4 text-lg font-semibold text-red-100">Your answer: {selectedAnswer}</p>
                )}
                {round.item.example_en && (
                  <p className="mx-auto mt-5 max-w-3xl rounded-3xl bg-slate-950/45 p-5 text-lg font-semibold leading-8 text-slate-100">
                    {round.item.example_en}
                  </p>
                )}
                <button
                  onClick={beginCountdown}
                  className="mt-7 min-h-16 rounded-2xl bg-white px-8 py-4 text-xl font-black text-slate-950 shadow-xl transition hover:scale-[1.03] active:scale-95"
                >
                  Next Question
                </button>
              </div>
            </motion.section>
          )}

          {phase === 'results' && (
            <motion.section key="results" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className="w-full">
              <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-100">
                      <Trophy className="h-4 w-4" />
                      AI Review Report
                    </div>
                    <h2 className="text-5xl font-black leading-none sm:text-7xl">Study results</h2>
                    <p className="mt-3 max-w-2xl text-lg font-semibold leading-7 text-slate-300">
                      Reporte inteligente con las palabras practicadas, sus formas, significado y ejemplos para repasar.
                    </p>
                  </div>
                  <div className="rounded-[2rem] bg-white p-5 text-center text-slate-950 shadow-xl">
                    <div className="text-sm font-black uppercase tracking-wider text-slate-500">Accuracy</div>
                    <div className="text-6xl font-black">{accuracy}%</div>
                    <div className="mt-1 text-sm font-black text-slate-500">
                      {accuracy >= 85 ? 'Strong recall' : accuracy >= 60 ? 'Needs review' : 'Practice again'}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    ['Questions', stats.total],
                    ['Correct', stats.correct],
                    ['Wrong', stats.wrong],
                    ["I don't know", stats.unknown],
                    ['Timeout', stats.timeout],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl bg-white/10 p-5">
                      <div className="text-sm font-black uppercase tracking-wider text-slate-300">{label}</div>
                      <div className="mt-2 text-5xl font-black">{value}</div>
                    </div>
                  ))}
                </div>

                {history.length === 0 ? (
                  <div className="mt-6 rounded-3xl border border-dashed border-white/20 bg-white/10 p-8 text-center">
                    <h3 className="text-3xl font-black">No answers yet</h3>
                    <p className="mt-2 text-lg font-semibold text-slate-300">Start the arena to generate your AI review report.</p>
                  </div>
                ) : (
                  <>
                    <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="rounded-3xl bg-white p-5 text-slate-950">
                        <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                          <Gauge className="h-6 w-6 text-cyan-600" />
                          Practice first
                        </h3>
                        <div className="space-y-3">
                          {history.filter((entry) => entry.status !== 'correct').slice(0, 6).map((entry) => (
                            <div key={`${entry.item.term}-${entry.status}`} className="rounded-2xl bg-slate-50 p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="text-xl font-black">{entry.item.term}</div>
                                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ring-1 ${statusClass(entry.status)}`}>
                                  {statusLabel(entry.status)}
                                </span>
                              </div>
                              <div className="mt-2 text-sm font-bold leading-6 text-slate-600">{formatMeaning(entry.item)}</div>
                            </div>
                          ))}
                          {history.every((entry) => entry.status === 'correct') && (
                            <div className="rounded-2xl bg-emerald-50 p-5 text-lg font-black text-emerald-800">
                              No priority review. Everything answered correctly.
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="rounded-3xl border border-cyan-200/20 bg-cyan-300/10 p-5">
                        <h3 className="mb-4 text-2xl font-black text-white">Smart study note</h3>
                        <p className="text-lg font-semibold leading-8 text-cyan-50">
                          Primero repasa las tarjetas marcadas como wrong, I don't know o timeout. Luego juega otra ronda solo con esas palabras para reforzar memoria activa.
                        </p>
                        <button
                          onClick={shareResults}
                          className="mt-5 min-h-16 w-full rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-black text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-600"
                        >
                          <MessageCircle className="mr-2 inline h-5 w-5" />
                          Share report by WhatsApp
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 rounded-3xl bg-white p-4 text-slate-950 sm:p-5">
                      <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                        <Gauge className="h-6 w-6 text-cyan-600" />
                        Complete review deck
                      </h3>
                      <div className="grid gap-4 xl:grid-cols-2">
                        {history.map((entry, index) => (
                          <article key={`${entry.item.term}-${index}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryAccent[entry.item.category]} px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950`}>
                                  {categoryNames[entry.item.category]}
                                </span>
                                <h4 className="mt-3 break-words text-3xl font-black leading-none text-slate-950">{entry.item.term}</h4>
                              </div>
                              <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${statusClass(entry.status)}`}>
                                {statusLabel(entry.status)}
                              </span>
                            </div>

                            {isVerbCategory(entry.item.category) ? (
                              <div className="mb-4 grid grid-cols-3 gap-2">
                                <div className="rounded-2xl bg-white p-3">
                                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Base</div>
                                  <div className="mt-1 break-words text-lg font-black">{entry.item.base_verb || entry.item.term}</div>
                                </div>
                                <div className="rounded-2xl bg-white p-3">
                                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Past</div>
                                  <div className="mt-1 break-words text-lg font-black">{entry.item.past || '-'}</div>
                                </div>
                                <div className="rounded-2xl bg-white p-3">
                                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Participle</div>
                                  <div className="mt-1 break-words text-lg font-black">{entry.item.past_participle || '-'}</div>
                                </div>
                              </div>
                            ) : null}

                            <div className="rounded-2xl bg-white p-4">
                              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                {isVerbCategory(entry.item.category) ? 'Meaning' : 'Meaning / Translation'}
                              </div>
                              <p className="mt-1 text-xl font-black leading-snug text-slate-950">{formatMeaning(entry.item)}</p>
                            </div>

                            {entry.item.example_en && (
                              <div className="mt-3 rounded-2xl bg-slate-950 p-4 text-white">
                                <div className="text-[10px] font-black uppercase tracking-widest text-cyan-200">Example</div>
                                <p className="mt-1 text-base font-bold leading-7">{entry.item.example_en}</p>
                              </div>
                            )}

                            {entry.selectedAnswer && entry.selectedAnswer !== entry.item.answer && (
                              <div className="mt-3 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-800">
                                Your answer: {entry.selectedAnswer}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <button onClick={startGame} className="min-h-16 rounded-2xl bg-white px-5 py-4 text-lg font-black text-slate-950 transition hover:bg-cyan-50">
                    <RotateCcw className="mr-2 inline h-5 w-5" />
                    Play Again
                  </button>
                  <button
                    onClick={practiceMissed}
                    disabled={history.filter((entry) => entry.status !== 'correct').length < 4}
                    className="min-h-16 rounded-2xl bg-cyan-300 px-5 py-4 text-lg font-black text-slate-950 transition hover:bg-cyan-200 disabled:opacity-50"
                  >
                    Practice missed
                  </button>
                  <button onClick={shareResults} className="min-h-16 rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-black text-white transition hover:bg-emerald-600">
                    <MessageCircle className="mr-2 inline h-5 w-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
