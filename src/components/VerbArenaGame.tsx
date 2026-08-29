import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, BookmarkPlus, Check, CheckCircle2, Clock3, Gauge, MessageCircle, Play, RotateCcw, Settings2, Sparkles, Trophy, XCircle } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';
import { useBrand } from '../hooks/useBrand';
import { vocabService } from '../lib/vocabService';

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

const optionLetters = ['A', 'B', 'C', 'D'];

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

function cleanAnswer(item: any) {
  return (item.meaning_es || item.meaning || item.translation || item.es || item.definition_en || '').replace(/\s+/g, ' ').trim();
}

const corruptedTextPattern = /[\u0000-\u001f\u007f-\u009f\uFFFDƙŞ]/;
const mergedEntryPattern = /\s-\s[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s/()]{3,}\s/;

function cleanDisplayText(value?: string | null) {
  return (value || '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’`]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function hasCorruptedText(value?: string | null) {
  return corruptedTextPattern.test(value || '');
}

function isMergedImportTerm(value?: string | null) {
  const text = cleanDisplayText(value);
  return text.length > 58 || (text.match(/\bOr\b/g) || []).length > 2;
}

function isCleanExample(value?: string | null) {
  const text = cleanDisplayText(value);
  if (!text || text.length < 12 || text.length > 180) return false;
  if (hasCorruptedText(text) || mergedEntryPattern.test(text) || text.includes('www.')) return false;
  return true;
}

function getDisplayTerm(item: VerbGuideItem) {
  return cleanDisplayText(isVerbCategory(item.category) ? item.base_verb || item.term : item.term);
}

function getDisplayAnswer(item: GameItem) {
  return cleanDisplayText(item.answer);
}

function getDisplayExample(item: GameItem) {
  return isCleanExample(item.example_en) ? cleanDisplayText(item.example_en) : null;
}

function getRoundKey(item: VerbGuideItem) {
  return `${item.category}:${cleanDisplayText(item.term).toLowerCase()}:${cleanAnswer(item).toLowerCase()}`;
}

const COMMON_VERB_CONJUGATIONS: Record<string, { past: string; participle: string }> = {
  be: { past: 'was/were', participle: 'been' },
  have: { past: 'had', participle: 'had' },
  do: { past: 'did', participle: 'done' },
  say: { past: 'said', participle: 'said' },
  go: { past: 'went', participle: 'gone' },
  get: { past: 'got', participle: 'got/gotten' },
  make: { past: 'made', participle: 'made' },
  know: { past: 'kew', participle: 'known' },
  think: { past: 'thought', participle: 'thought' },
  take: { past: 'took', participle: 'taken' },
  see: { past: 'saw', participle: 'seen' },
  come: { past: 'came', participle: 'come' },
  want: { past: 'wanted', participle: 'wanted' },
  look: { past: 'looked', participle: 'looked' },
  use: { past: 'used', participle: 'used' },
  find: { past: 'found', participle: 'found' },
  give: { past: 'gave', participle: 'given' },
  tell: { past: 'told', participle: 'told' },
  work: { past: 'worked', participle: 'worked' },
  call: { past: 'called', participle: 'called' },
  try: { past: 'tried', participle: 'tried' },
  ask: { past: 'asked', participle: 'asked' },
  need: { past: 'needed', participle: 'needed' },
  feel: { past: 'felt', participle: 'felt' },
  become: { past: 'became', participle: 'become' },
  leave: { past: 'left', participle: 'left' },
  put: { past: 'put', participle: 'put' },
  mean: { past: 'meant', participle: 'meant' },
  keep: { past: 'kept', participle: 'kept' },
  let: { past: 'let', participle: 'let' },
  begin: { past: 'began', participle: 'begun' },
  seem: { past: 'seemed', participle: 'seemed' },
  help: { past: 'helped', participle: 'helped' },
  talk: { past: 'talked', participle: 'talked' },
  turn: { past: 'turned', participle: 'turned' },
  start: { past: 'started', participle: 'started' },
  show: { past: 'showed', participle: 'shown' },
  hear: { past: 'heard', participle: 'heard' },
  play: { past: 'played', participle: 'played' },
  run: { past: 'ran', participle: 'run' },
  move: { past: 'moved', participle: 'moved' },
  like: { past: 'liked', participle: 'liked' },
  live: { past: 'lived', participle: 'lived' },
  believe: { past: 'believed', participle: 'believed' },
  hold: { past: 'held', participle: 'held' },
  bring: { past: 'brought', participle: 'brought' },
  happen: { past: 'happened', participle: 'happened' },
  write: { past: 'wrote', participle: 'written' },
  provide: { past: 'provided', participle: 'provided' },
  sit: { past: 'sat', participle: 'sat' },
  stand: { past: 'stood', participle: 'stood' },
  lose: { past: 'lost', participle: 'lost' },
  pay: { past: 'paid', participle: 'paid' },
  meet: { past: 'met', participle: 'met' },
  include: { past: 'included', participle: 'included' },
  continue: { past: 'continued', participle: 'continued' },
  set: { past: 'set', participle: 'set' },
  learn: { past: 'learned/learnt', participle: 'learned/learnt' },
  change: { past: 'changed', participle: 'changed' },
  lead: { past: 'led', participle: 'led' },
  understand: { past: 'understood', participle: 'understood' },
  watch: { past: 'watched', participle: 'watched' },
  follow: { past: 'followed', participle: 'followed' },
  stop: { past: 'stopped', participle: 'stopped' },
  create: { past: 'created', participle: 'created' },
  speak: { past: 'spoke', participle: 'spoken' },
  read: { past: 'read', participle: 'read' },
  allow: { past: 'allowed', participle: 'allowed' },
  add: { past: 'added', participle: 'added' },
  spend: { past: 'spent', participle: 'spent' },
  grow: { past: 'grew', participle: 'grown' },
  open: { past: 'opened', participle: 'opened' },
  walk: { past: 'walked', participle: 'walked' },
  win: { past: 'won', participle: 'won' },
  offer: { past: 'offered', participle: 'offered' },
  remember: { past: 'remembered', participle: 'remembered' },
  love: { past: 'loved', participle: 'loved' },
  consider: { past: 'considered', participle: 'considered' },
  appear: { past: 'appeared', participle: 'appeared' },
  buy: { past: 'bought', participle: 'bought' },
  wait: { past: 'waited', participle: 'waited' },
  serve: { past: 'served', participle: 'served' },
  die: { past: 'died', participle: 'died' },
  send: { past: 'sent', participle: 'sent' },
  expect: { past: 'expected', participle: 'expected' },
  build: { past: 'built', participle: 'built' },
  stay: { past: 'stayed', participle: 'stayed' },
  fall: { past: 'fell', participle: 'fallen' },
  cut: { past: 'cut', participle: 'cut' },
  reach: { past: 'reached', participle: 'reached' },
  kill: { past: 'killed', participle: 'killed' },
  remain: { past: 'remained', participle: 'remained' },
};

function resolveVerbForms(term: string, past?: string | null, participle?: string | null) {
  const normalized = term.trim().toLowerCase();
  const known = COMMON_VERB_CONJUGATIONS[normalized];
  if (known) {
    return {
      past: past || known.past,
      past_participle: participle || known.participle,
    };
  }

  return {
    past: past || null,
    past_participle: participle || null,
  };
}

function toGameItems(items: (VerbGuideItem | any)[]) {
  return items
    .map((item) => {
      const term = item.term || item.word || item.verb || item.name || '';
      const forms = resolveVerbForms(term, item.past, item.past_participle || item.participle);
      return {
        category: (item.category || 'common_verb') as LexiconCategory,
        term,
        base_verb: item.base_verb || term,
        past: forms.past,
        past_participle: forms.past_participle,
        meaning_es: item.meaning_es || item.meaning || item.translation || item.es || '',
        definition_en: item.definition_en || null,
        example_en: item.example_en || item.example || item.en || null,
        answer: cleanAnswer(item),
      };
    })
    .filter((item) => item.term && item.answer.length > 1)
    .filter((item) => !hasCorruptedText(item.term) && !hasCorruptedText(item.answer))
    .filter((item) => !isMergedImportTerm(item.term));
}

const FALLBACK_DISTRACTORS = [
  'despertarse temprano', 'desayunar en familia', 'ir al trabajo en carro', 'dormir 8 horas',
  'caminar por el parque', 'estudiar inglés', 'cocinar la cena', 'hacer ejercicio',
  'escuchar música', 'leer un libro interesante', 'tomar café caliente', 'limpiar la casa'
];

function buildRound(pool: GameItem[], mode: GameMode, usedRoundKeys: Set<string>): Round | null {
  if (pool.length === 0) return null;
  const availableItems = pool.filter((candidate) => !usedRoundKeys.has(getRoundKey(candidate)));
  if (availableItems.length === 0) return null;
  const item = availableItems[Math.floor(Math.random() * availableItems.length)];
  const distractorSource = pool.filter((candidate) => candidate.answer !== item.answer && (mode === 'all' || candidate.category === item.category));
  const fallbackSource = pool.filter((candidate) => candidate.answer !== item.answer);
  let rawDistractors = shuffle(distractorSource.length >= 3 ? distractorSource : fallbackSource)
    .slice(0, 3)
    .map((candidate) => candidate.answer);

  if (rawDistractors.length < 3) {
    const needed = 3 - rawDistractors.length;
    const fillers = shuffle(FALLBACK_DISTRACTORS.filter(d => d !== item.answer && !rawDistractors.includes(d))).slice(0, needed);
    rawDistractors = [...rawDistractors, ...fillers];
  }

  return {
    item,
    options: shuffle([item.answer, ...rawDistractors]),
  };
}

function isVerbCategory(category: LexiconCategory) {
  return category === 'common_verb' || category === 'irregular_verb';
}

function formatMeaning(item: GameItem) {
  return getDisplayAnswer(item);
}

function formatShareEntry(item: GameItem) {
  if (isVerbCategory(item.category)) {
    return `${item.base_verb || item.term} / ${item.past || '-'} / ${item.past_participle || '-'} = ${formatMeaning(item)}`;
  }
  const example = getDisplayExample(item) ? ` Example: ${getDisplayExample(item)}` : '';
  return `${getDisplayTerm(item)} = ${formatMeaning(item)}.${example}`;
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
  isEmbedded?: boolean;
  customPool?: any[];
  maxRounds?: number;
  onComplete?: () => void;
  onNextSlide?: () => void;
  studentId?: string | null;
}

export function VerbArenaGame({ onBack, isEmbedded = false, customPool, maxRounds, onComplete, onNextSlide, studentId }: VerbArenaGameProps) {
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
  const [usedRoundKeys, setUsedRoundKeys] = useState<Set<string>>(new Set());
  const [statusMessage, setStatusMessage] = useState('');
  const [savedWordTerms, setSavedWordTerms] = useState<Set<string>>(new Set());
  const [isSavingAll, setIsSavingAll] = useState(false);

  const activeStudentId = useMemo(() => {
    if (studentId) return studentId;
    if (typeof window !== 'undefined') {
      const urlId = new URLSearchParams(window.location.search).get('studentId');
      if (urlId) return urlId;
      const stored = localStorage.getItem('maven_active_user') || localStorage.getItem('active_student_id');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return parsed.id || parsed;
        } catch {
          return stored;
        }
      }
    }
    return null;
  }, [studentId]);

  const handleSaveToVocabVault = async (item: GameItem) => {
    const term = getDisplayTerm(item);
    const translation = getDisplayAnswer(item);
    try {
      await vocabService.saveQuickTerm(
        term,
        translation,
        'slides',
        `⚡ AI Verb Arena: ${term}`,
        activeStudentId
      );
      setSavedWordTerms(prev => new Set(prev).add(term.toLowerCase()));
    } catch (err) {
      console.error('Error saving word to VocabVault:', err);
    }
  };

  const handleSaveAllMissed = async () => {
    if (isSavingAll || missedHistory.length === 0) return;
    setIsSavingAll(true);
    try {
      for (const entry of missedHistory) {
        const term = getDisplayTerm(entry.item);
        const translation = getDisplayAnswer(entry.item);
        await vocabService.saveQuickTerm(
          term,
          translation,
          'slides',
          `⚡ AI Verb Arena: ${term}`,
          activeStudentId
        );
        setSavedWordTerms(prev => new Set(prev).add(term.toLowerCase()));
      }
    } catch (err) {
      console.error('Error saving all missed words:', err);
    } finally {
      setIsSavingAll(false);
    }
  };

  useEffect(() => {
    if (customPool && customPool.length > 0) {
      setItems(toGameItems(customPool));
      setMode('all');
    } else {
      if (!isEmbedded) {
        document.title = 'AI Verb Arena | Maven English';
      }
      fetch(DATA_URL)
        .then((response) => response.json())
        .then((data: VerbGuideItem[]) => setItems(toGameItems(data)));
    }
  }, [customPool, isEmbedded]);

  const pool = useMemo(() => {
    if (mode === 'all') return items;
    return items.filter((item) => item.category === mode);
  }, [items, mode]);

  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const timerEnabled = timerSeconds > 0;
  const timerProgress = timerEnabled ? Math.max(0, Math.min(100, (timeLeft / timerSeconds) * 100)) : 100;
  const remainingRounds = Math.max(0, pool.length - usedRoundKeys.size);
  const missedHistory = history.filter((entry) => entry.status !== 'correct');

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
    if (maxRounds && stats.total >= maxRounds) {
      setStatusMessage('¡Reto de vocabulario completado!');
      setPhase('results');
      return;
    }
    const nextRound = buildRound(pool, mode, usedRoundKeys);
    if (!nextRound) {
      setStatusMessage('No quedan palabras nuevas en esta sesión.');
      setPhase('results');
      return;
    }
    setUsedRoundKeys((prev) => new Set(prev).add(getRoundKey(nextRound.item)));
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
    setUsedRoundKeys(new Set());
    setStatusMessage('');
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
    setUsedRoundKeys(new Set());
    setStatusMessage('');
    beginCountdown();
  };

  return (
    <div className={isEmbedded ? "w-full h-full text-white flex flex-col justify-between overflow-hidden" : "min-h-screen bg-slate-950 text-white"}>
      {!isEmbedded && (
        <div className="fixed inset-0">
          <img src={ARENA_BG} alt="" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.15),rgba(2,6,23,0.92)_72%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950" />
        </div>
      )}

      {!isEmbedded && (
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
      )}

      <main className={isEmbedded ? "relative z-10 w-full h-full flex flex-col justify-between p-3 sm:p-5 overflow-hidden" : "relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-4 pb-6 sm:px-6"}>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={isEmbedded
                ? "w-full h-full flex flex-col lg:flex-row items-stretch justify-between gap-5 py-1"
                : "grid w-full gap-6 lg:grid-cols-[1fr_440px] lg:items-center"
              }
            >
              <div className={isEmbedded ? "w-full lg:w-[48%] flex flex-col justify-between py-1 min-w-0" : "max-w-4xl"}>
                <div>
                  <motion.div
                    animate={{ y: [0, -6, 0], opacity: [0.85, 1, 0.85] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                    className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur shadow-sm"
                  >
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    ⚡ AI Vocabulary Challenge
                  </motion.div>
                  <h1 className={isEmbedded ? "text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[0.92] tracking-tight text-white drop-shadow-md" : "text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"}>
                    AI Verb
                    <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-300 bg-clip-text text-transparent">Arena</span>
                  </h1>
                  <p className={isEmbedded ? "mt-3 text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-slate-200" : "mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-200 sm:text-2xl"}>
                    Trivia interactiva para dominar verbos y expresiones en inglés. ¡Responde rápido, aprende del error y supera tu puntuación!
                  </p>
                </div>

                {isEmbedded && (
                  <div className="grid grid-cols-3 gap-2.5 mt-3 pt-3 border-t border-white/10">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                      <span className="text-2xl">🔥</span>
                      <p className="text-xs sm:text-sm font-extrabold text-white mt-1">6 Verbos Clave</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                      <span className="text-2xl">⚡</span>
                      <p className="text-xs sm:text-sm font-extrabold text-white mt-1">Reflejos & Tiempo</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                      <span className="text-2xl">🎯</span>
                      <p className="text-xs sm:text-sm font-extrabold text-white mt-1">Feedback En Vivo</p>
                    </div>
                  </div>
                )}
              </div>

              <div className={isEmbedded
                ? "w-full lg:w-[52%] rounded-3xl border-2 border-cyan-400/40 bg-slate-950/85 p-5 sm:p-6 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl flex flex-col justify-between min-h-0"
                : "rounded-[2rem] border border-white/15 bg-slate-950/68 p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl sm:p-5"
              }>
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black uppercase tracking-wider text-cyan-200">
                      <Settings2 className="h-5 w-5 text-cyan-400" />
                      Configuración del Reto
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-400/10 px-2.5 py-1 rounded-lg border border-cyan-400/20">
                      {pool.length} Verbos
                    </span>
                  </div>

                  {customPool && customPool.length > 0 ? (
                    <div className="rounded-2xl border-2 border-cyan-400/30 bg-cyan-950/50 p-3 text-left mb-3 shadow-inner">
                      <div className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-2">Vocabulario de la Clase</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto">
                        {pool.map((item, idx) => (
                          <div key={idx} className="rounded-xl bg-cyan-400/15 border border-cyan-400/40 px-3 py-2 text-xs sm:text-sm font-black text-cyan-100 flex items-center justify-between shadow-sm">
                            <span className="font-black text-white">{item.term}</span>
                            <span className="text-cyan-300 text-xs truncate ml-1">➔ {item.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-2 mb-3">
                      {modes.map((gameMode) => (
                        <button
                          key={gameMode.id}
                          onClick={() => setMode(gameMode.id)}
                          className={`rounded-2xl border p-3 text-left transition ${
                            mode === gameMode.id
                              ? 'border-cyan-300 bg-cyan-300/15 shadow-lg shadow-cyan-500/10'
                              : 'border-white/10 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div className="text-base font-black">{gameMode.label}</div>
                          <div className="text-xs font-semibold text-slate-300">{gameMode.detail}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Temporizador */}
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-300">
                      <Clock3 className="h-4 w-4 text-cyan-400" />
                      Temporizador por Pregunta
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {timerOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTimerSeconds(option.value)}
                          className={`h-11 sm:h-13 rounded-2xl text-sm sm:text-base font-black transition cursor-pointer ${
                            timerSeconds === option.value ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-lg scale-[1.03] ring-2 ring-cyan-300' : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Big Action Launch Button */}
                <button
                  onClick={startGame}
                  disabled={pool.length < 2}
                  className="mt-3 flex min-h-16 sm:min-h-18 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-pink-300 px-6 py-4 text-xl sm:text-2xl font-black text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                >
                  <Play className="h-6 w-6 fill-current" />
                  {customPool && customPool.length > 0 ? "¡Iniciar Reto de la Clase! 🚀" : "Start Arena"}
                </button>
              </div>
            </motion.section>
          )}

          {phase === 'countdown' && (
            <motion.section key="countdown" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={isEmbedded ? "grid w-full place-items-center h-full my-auto" : "grid min-h-[calc(100vh-112px)] w-full place-items-center"}>
              <motion.div
                key={countdown}
                initial={{ scale: 0.45, rotate: -8, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 1.35, opacity: 0 }}
                className={isEmbedded 
                  ? "grid h-[320px] w-[320px] place-items-center rounded-full border-4 border-cyan-100/70 bg-slate-950/85 text-center shadow-2xl shadow-cyan-300/40 ring-8 ring-cyan-300/20 backdrop-blur-xl"
                  : "grid h-[min(86vw,72vh,680px)] w-[min(86vw,72vh,680px)] place-items-center rounded-full border-4 border-cyan-100/70 bg-slate-950/72 text-center shadow-2xl shadow-cyan-300/40 ring-8 ring-cyan-300/15 backdrop-blur-xl"}
              >
                <div className="px-4">
                  <div className={isEmbedded ? "text-xl font-black uppercase tracking-[0.2em] text-cyan-200" : "text-2xl font-black uppercase tracking-[0.28em] text-cyan-100 sm:text-4xl"}>Prepárate</div>
                  <div className={isEmbedded ? "text-9xl font-black leading-none text-white drop-shadow-[0_0_36px_rgba(103,232,249,0.85)] my-2" : "text-[34vw] font-black leading-none text-white drop-shadow-[0_0_36px_rgba(103,232,249,0.85)] sm:text-[22rem]"}>
                    {Math.max(countdown, 1)}
                  </div>
                  <div className={isEmbedded ? "text-base font-black uppercase tracking-[0.2em] text-pink-300" : "text-xl font-black uppercase tracking-[0.2em] text-red-100 sm:text-3xl"}>Get ready</div>
                </div>
              </motion.div>
            </motion.section>
          )}

          {phase === 'question' && round && (
            <motion.section key={round.item.term} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className={isEmbedded ? "w-full h-full flex flex-col justify-between py-1" : "w-full"}>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className={`rounded-2xl bg-gradient-to-r ${categoryAccent[round.item.category]} px-5 py-2 text-sm sm:text-base font-black uppercase tracking-wider text-slate-950 shadow-md`}>
                    {categoryNames[round.item.category]}
                  </div>
                  {isEmbedded && (
                    <button
                      onClick={() => {
                        setPhase('intro');
                        setSelectedAnswer(null);
                        setFeedback(null);
                        setUsedRoundKeys(new Set());
                      }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
                      title="Reiniciar el juego y configurar tiempo"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar</span>
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm sm:text-base font-black backdrop-blur">
                    Pregunta {stats.total + 1}/{maxRounds || pool.length}
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm sm:text-base font-black backdrop-blur text-emerald-300">
                    Aciertos {stats.correct}/{stats.total}
                  </div>
                  <div className={`relative grid h-16 w-16 place-items-center rounded-full border ${timeLeft <= 3 && timerEnabled ? 'border-red-300 text-red-100' : 'border-cyan-200/40 text-white'} bg-slate-950/60 shadow-lg backdrop-blur`}>
                    <div className="absolute inset-1 rounded-full" style={{ background: `conic-gradient(${timeLeft <= 3 && timerEnabled ? '#fb7185' : '#67e8f9'} ${timerProgress}%, rgba(255,255,255,0.12) 0)` }} />
                    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-xl font-black">
                      {timerEnabled ? timeLeft : '∞'}
                    </div>
                  </div>
                </div>
              </div>

              <div className={isEmbedded
                ? "flex-1 flex flex-col justify-between rounded-3xl border-2 border-white/20 bg-slate-950/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl min-h-0 my-1"
                : "rounded-[2rem] border border-white/15 bg-slate-950/72 p-5 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:p-7 lg:p-8"
              }>
                <div className="text-center">
                  <div className={isEmbedded ? "mb-1 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-300" : "mb-3 text-base font-black uppercase tracking-[0.25em] text-cyan-100"}>
                    ¿Qué significa en español? / What does it mean?
                  </div>
                  <h2 className={isEmbedded
                    ? "mx-auto max-w-5xl break-words text-5xl sm:text-6xl lg:text-[4.6rem] font-black leading-tight tracking-tight text-white drop-shadow-md"
                    : "mx-auto max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
                  }>
                    {getDisplayTerm(round.item)}
                  </h2>
                  {round.item.past && (
                    <div className={isEmbedded ? "mt-2 inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white/10 p-1.5 text-xs sm:text-sm font-black text-slate-200 border border-white/15" : "mt-5 inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white/8 p-2 text-sm font-black text-slate-200 sm:text-base"}>
                      <span className="rounded-lg bg-white/15 px-3 py-1">Past: {round.item.past}</span>
                      <span className="rounded-lg bg-white/15 px-3 py-1">Participle: {round.item.past_participle || '-'}</span>
                    </div>
                  )}
                </div>

                <div className={isEmbedded ? "mt-3 grid gap-3 grid-cols-2" : "mt-8 grid gap-3 md:grid-cols-2"}>
                  {round.options.map((option, index) => (
                    <button
                      key={`${option}-${index}`}
                      onClick={() => handleAnswer(option)}
                      className={isEmbedded 
                        ? "group flex min-h-20 sm:min-h-22 items-center gap-4 rounded-2xl border-2 border-white/15 bg-white px-4 py-3 text-left text-lg sm:text-xl lg:text-2xl font-black leading-snug text-slate-950 shadow-xl transition hover:border-cyan-300 hover:bg-cyan-50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        : "group flex min-h-24 items-center gap-4 rounded-3xl border border-white/10 bg-white px-4 py-4 text-left text-xl font-black leading-snug text-slate-950 shadow-lg transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50 active:scale-[0.99] sm:min-h-28 sm:px-5 sm:text-2xl cursor-pointer"}
                    >
                      <span className={isEmbedded
                        ? `grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${categoryAccent[round.item.category]} text-base sm:text-xl font-black text-slate-950 shadow-md`
                        : `grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${categoryAccent[round.item.category]} text-xl font-black text-slate-950 shadow-md transition group-hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl`}>
                        {optionLetters[index]}
                      </span>
                      <span className="min-w-0 break-words">{cleanDisplayText(option)}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => answerRound(null, 'unknown')}
                  className={isEmbedded
                    ? "mt-2 min-h-11 w-full rounded-2xl border border-white/15 bg-white/10 hover:bg-white/20 px-4 py-2 text-sm sm:text-base font-black text-white backdrop-blur transition cursor-pointer"
                    : "mt-3 min-h-16 w-full rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-xl font-black text-white backdrop-blur transition hover:bg-white/18 cursor-pointer"}
                >
                  No me acuerdo / Paso ⏭️
                </button>
              </div>
            </motion.section>
          )}

          {phase === 'feedback' && round && feedback && (
            <motion.section key="feedback" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className={isEmbedded ? "w-full h-full flex flex-col justify-between" : "w-full"}>
              <div className={isEmbedded 
                ? `rounded-3xl border-2 p-5 sm:p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full ${feedback === 'correct' ? 'border-emerald-300/50 bg-emerald-950/80 shadow-emerald-900/40' : 'border-red-300/50 bg-red-950/80 shadow-red-900/40'}`
                : `rounded-[2rem] border p-5 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-9 ${feedback === 'correct' ? 'border-emerald-200/40 bg-emerald-400/16 shadow-emerald-900/30' : 'border-red-200/35 bg-red-400/14 shadow-red-900/30'}`}>
                <div>
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0, rotate: -12 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    className={isEmbedded
                      ? "mx-auto mb-2 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-white text-slate-950 shadow-xl"
                      : "mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-white text-slate-950 shadow-xl sm:h-24 sm:w-24"}
                  >
                    {feedback === 'correct' ? <CheckCircle2 className={isEmbedded ? "h-10 w-10 text-emerald-600" : "h-14 w-14 text-emerald-600"} /> : <XCircle className={isEmbedded ? "h-10 w-10 text-red-600" : "h-14 w-14 text-red-600"} />}
                  </motion.div>
                  <h2 className={isEmbedded ? "text-center text-3xl sm:text-5xl font-black leading-tight text-white" : "text-center text-5xl font-black leading-none sm:text-7xl"}>
                    {feedback === 'correct' ? '¡Excelente! 🎉' : feedback === 'unknown' ? 'Guardada para repasar 🧠' : feedback === 'timeout' ? '¡Tiempo agotado! ⏱️' : '¡Casi! Repasemos 👇'}
                  </h2>
                  <div className={isEmbedded ? "mx-auto mt-3 grid max-w-5xl gap-3 sm:grid-cols-2" : "mx-auto mt-6 grid max-w-5xl gap-4 lg:grid-cols-[0.9fr_1.1fr]"}>
                    <div className={isEmbedded ? "rounded-2xl border-2 border-white/20 bg-slate-950/80 p-4 text-left shadow-lg" : "rounded-3xl border border-white/10 bg-slate-950/52 p-5 text-left"}>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Término en Inglés</p>
                      <p className={isEmbedded ? "mt-1 break-words text-3xl sm:text-4xl font-black leading-tight text-white" : "mt-2 break-words text-4xl font-black leading-none text-white sm:text-5xl"}>
                        {getDisplayTerm(round.item)}
                      </p>
                      {isVerbCategory(round.item.category) && (
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:text-sm font-black text-slate-100">
                          <span className="rounded-xl bg-white/10 px-3 py-1.5 border border-white/15">Past: {round.item.past || '-'}</span>
                          <span className="rounded-xl bg-white/10 px-3 py-1.5 border border-white/15">Participle: {round.item.past_participle || '-'}</span>
                        </div>
                      )}
                    </div>
                    <div className={isEmbedded ? "rounded-2xl bg-white p-4 text-left text-slate-950 shadow-lg border-2 border-white" : "rounded-3xl bg-white p-5 text-left text-slate-950"}>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Significado Correcto</p>
                      <p className={isEmbedded ? "mt-1 break-words text-2xl sm:text-3xl font-black leading-snug" : "mt-2 break-words text-3xl font-black leading-tight sm:text-4xl"}>{getDisplayAnswer(round.item)}</p>
                      {selectedAnswer && selectedAnswer !== round.item.answer && (
                        <div className="mt-2 rounded-xl bg-red-100 p-2 border border-red-300">
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-red-700">Tu respuesta seleccionada</p>
                          <p className="mt-0.5 text-sm font-black leading-snug text-red-900">{cleanDisplayText(selectedAnswer)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {getDisplayExample(round.item) && (
                    <div className={isEmbedded ? "mx-auto mt-3 max-w-5xl rounded-2xl border-2 border-cyan-400/40 bg-cyan-950/60 p-3.5 text-left shadow-md" : "mx-auto mt-4 max-w-5xl rounded-3xl border border-cyan-200/20 bg-cyan-300/10 p-5 text-left"}>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Ejemplo de uso</p>
                      <p className={isEmbedded ? "mt-1 text-base sm:text-lg font-bold leading-snug text-white" : "mt-2 text-2xl font-bold leading-snug text-white"}>{getDisplayExample(round.item)}</p>
                    </div>
                  )}

                  {/* VocabVault Save Button in Feedback */}
                  <div className="flex justify-center mt-3">
                    {(() => {
                      const termLower = getDisplayTerm(round.item).toLowerCase();
                      const isSaved = savedWordTerms.has(termLower);
                      return (
                        <button
                          type="button"
                          onClick={() => handleSaveToVocabVault(round.item)}
                          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl font-black text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-lg ${
                            isSaved
                              ? 'bg-emerald-500/25 border-2 border-emerald-400 text-emerald-200'
                              : feedback === 'correct'
                              ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                              : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white border-2 border-amber-300 shadow-amber-900/50 hover:scale-105 active:scale-95'
                          }`}
                          title="Guardar palabra en Mi Vocabulario"
                        >
                          {isSaved ? (
                            <>
                              <Check className="w-5 h-5 text-emerald-300" />
                              <span>¡Guardada en Mi Vocabulario! 🎒</span>
                            </>
                          ) : (
                            <>
                              <BookmarkPlus className="w-5 h-5" />
                              <span>Guardar en Mi Vocabulario 🎒</span>
                            </>
                          )}
                        </button>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-3">
                  {isEmbedded && (
                    <button
                      onClick={() => {
                        setPhase('intro');
                        setSelectedAnswer(null);
                        setFeedback(null);
                        setUsedRoundKeys(new Set());
                      }}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-sm sm:text-base font-bold text-white transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reiniciar</span>
                    </button>
                  )}
                  <button
                    onClick={prepareRound}
                    className={isEmbedded
                      ? "flex min-h-14 sm:min-h-16 items-center justify-center rounded-2xl bg-white px-8 py-3 text-lg sm:text-xl font-black text-slate-950 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      : "mx-auto mt-7 flex min-h-16 items-center justify-center rounded-2xl bg-white px-8 py-4 text-xl font-black text-slate-950 shadow-xl transition hover:scale-[1.03] active:scale-95 cursor-pointer"}
                  >
                    {stats.total >= (maxRounds || pool.length) ? 'Ver Resultados ➔' : 'Siguiente Pregunta ➔'}
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {phase === 'results' && (
            <motion.section key="results" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} className="w-full flex-1 flex flex-col justify-between overflow-hidden">
              {isEmbedded ? (
                <div className="rounded-3xl border-2 border-white/20 bg-slate-950/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full max-h-[520px] overflow-y-auto">
                  <div className="text-center shrink-0">
                    <Trophy className="mx-auto h-14 w-14 text-yellow-400 mb-1 animate-bounce" />
                    <h2 className="text-3xl sm:text-4xl font-black text-white">¡Reto de Vocabulario Completado! 🎉</h2>
                    <p className="mt-1 text-sm sm:text-base font-bold text-slate-300">Retroalimentación de los verbos practicados en esta clase.</p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3.5 max-w-xl mx-auto my-2.5 w-full shrink-0">
                    <div className="rounded-2xl bg-white/10 p-3 text-center border-2 border-cyan-400/30 shadow-md">
                      <div className="text-xs uppercase text-slate-400 font-black tracking-wider">Precisión</div>
                      <div className="text-3xl sm:text-4xl font-black text-cyan-300">{accuracy}%</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 text-center border-2 border-emerald-400/30 shadow-md">
                      <div className="text-xs uppercase text-slate-400 font-black tracking-wider">Correctas</div>
                      <div className="text-3xl sm:text-4xl font-black text-emerald-400">{stats.correct} / {stats.total}</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 text-center border-2 border-amber-400/30 shadow-md">
                      <div className="text-xs uppercase text-slate-400 font-black tracking-wider">Tiempo</div>
                      <div className="text-3xl sm:text-4xl font-black text-amber-300">{timerSeconds > 0 ? `${timerSeconds}s` : '∞'}</div>
                    </div>
                  </div>

                  {/* Batch Save All Missed Button */}
                  {missedHistory.length > 0 && (
                    <div className="mb-2 flex justify-center shrink-0">
                      <button
                        type="button"
                        onClick={handleSaveAllMissed}
                        disabled={isSavingAll || missedHistory.every(m => savedWordTerms.has(getDisplayTerm(m.item).toLowerCase()))}
                        className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white font-black text-sm sm:text-base flex items-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer transition-all"
                      >
                        <BookmarkPlus className="w-5 h-5" />
                        <span>
                          {isSavingAll ? 'Guardando en Mi Vocabulario...' : `Guardar palabras falladas en Mi Vocabulario (${missedHistory.length}) 🎒`}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Words Summary List */}
                  <div className="flex-1 min-h-0 overflow-y-auto max-h-40 px-2 my-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {history.map((h, i) => {
                        const term = getDisplayTerm(h.item);
                        const termLower = term.toLowerCase();
                        const isSaved = savedWordTerms.has(termLower);

                        return (
                          <div key={i} className={`flex items-center justify-between p-3 rounded-2xl border text-xs font-bold ${h.status === 'correct' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200' : 'bg-red-950/60 border-red-500/40 text-red-200'}`}>
                            <div className="flex items-center gap-2 truncate min-w-0 pr-2">
                              <span className="text-base shrink-0">{h.status === 'correct' ? '✅' : '❌'}</span>
                              <span className="font-black text-white text-base truncate">{term}</span>
                              <span className="text-white/70 truncate text-xs">➔ {formatMeaning(h.item)}</span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleSaveToVocabVault(h.item)}
                              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl font-black text-xs transition cursor-pointer ${
                                isSaved
                                  ? 'bg-emerald-500/25 border border-emerald-400 text-emerald-200'
                                  : 'bg-white/10 hover:bg-amber-500/80 border border-white/20 text-white hover:text-white'
                              }`}
                              title="Guardar en Mi Vocabulario"
                            >
                              {isSaved ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                                  <span>Guardada</span>
                                </>
                              ) : (
                                <>
                                  <BookmarkPlus className="w-3.5 h-3.5" />
                                  <span>+ Vocab</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-3 flex items-center justify-center gap-4 shrink-0 pt-2 border-t border-white/10">
                    <button
                      onClick={startGame}
                      className="px-6 py-3.5 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-black text-base transition-all cursor-pointer flex items-center gap-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>Repetir Reto</span>
                    </button>

                    <button
                      onClick={() => {
                        if (onNextSlide) onNextSlide();
                        else if (onComplete) onComplete();
                      }}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-lg transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                    >
                      <span>Continuar a la siguiente diapositiva</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
                  <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-100">
                        <Trophy className="h-4 w-4" />
                        AI Review Report
                      </div>
                      <h2 className="text-5xl font-black leading-none sm:text-7xl">Study results</h2>
                      <p className="mt-3 max-w-2xl text-lg font-semibold leading-7 text-slate-300">
                        Feedback corto con solo las palabras que necesitan repaso.
                      </p>
                      {statusMessage && (
                        <p className="mt-3 inline-flex rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-base font-black text-cyan-50">
                          {statusMessage}
                        </p>
                      )}
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
                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-3xl bg-white p-5 text-slate-950">
                          <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                            <Gauge className="h-6 w-6 text-cyan-600" />
                            Words to review
                          </h3>
                          {missedHistory.length ? (
                            <div className="grid gap-3 xl:grid-cols-2">
                              {missedHistory.map((entry, index) => (
                                <div key={`${entry.item.term}-${entry.status}-${index}`} className="rounded-2xl bg-slate-50 p-4">
                                <div className="flex items-start justify-between gap-3">
                                  <div className="text-xl font-black">{getDisplayTerm(entry.item)}</div>
                                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ring-1 ${statusClass(entry.status)}`}>
                                    {statusLabel(entry.status)}
                                  </span>
                                </div>
                                  <div className="mt-2 text-base font-black leading-snug text-slate-700">{formatMeaning(entry.item)}</div>
                                  {entry.selectedAnswer && (
                                    <div className="mt-2 text-sm font-bold leading-snug text-red-700">
                                      Your answer: {cleanDisplayText(entry.selectedAnswer)}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="rounded-2xl bg-emerald-50 p-5 text-lg font-black text-emerald-800">
                              No priority review. Everything answered correctly.
                            </div>
                          )}
                        </div>

                        <div className="rounded-3xl border border-cyan-200/20 bg-cyan-300/10 p-5">
                          <h3 className="mb-4 text-2xl font-black text-white">Smart study note</h3>
                          <p className="text-lg font-semibold leading-8 text-cyan-50">
                            Repasa solo estas palabras y vuelve a jugar una ronda corta con las falladas para reforzar memoria activa.
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
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
