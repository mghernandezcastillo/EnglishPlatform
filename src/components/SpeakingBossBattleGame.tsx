import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Brain, Check, Flame, Minus, Plus, Play, RotateCcw, Shield, Swords, Timer, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeakingBossBattleGameProps {
  bossName?: string;
  bossTitle?: string;
  bossAvatar?: string;
  timerSeconds?: number;
  prepareSeconds?: number;
  rounds?: {
    remember?: string[];
    use?: string[];
    speak?: string[];
  };
}

const fallbackRounds = {
  remember: ['Say three key words and one useful phrase from today.'],
  use: ['Make one positive sentence, one negative sentence, and one question.'],
  speak: ['Speak for 30 seconds about today\'s topic.']
};

const roundMeta = [
  {
    key: 'remember',
    title: 'Remember',
    shortTask: 'Say 3 words + 1 phrase',
    icon: Brain,
    color: 'from-sky-400 to-cyan-500'
  },
  {
    key: 'use',
    title: 'Use',
    shortTask: 'Make 3 sentences',
    icon: Shield,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    key: 'speak',
    title: 'Speak',
    shortTask: 'Speak clearly',
    icon: Flame,
    color: 'from-orange-400 to-red-500'
  }
] as const;

function formatTimerLabel(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function formatDurationText(totalSeconds: number) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  if (safeSeconds < 60) return `${safeSeconds} seconds`;
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  if (seconds === 0) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} and ${seconds} seconds`;
}

interface ChallengeItem {
  badge: string;
  badgeBg: string;
  title: string;
  desc: string;
  border: string;
  bg: string;
  text: string;
}

interface ParsedRoundData {
  headline: string;
  topic: string;
  focus?: string;
  example?: string;
  support: string;
  items: ChallengeItem[];
}

function parseBossPrompt(
  prompt: string,
  roundKey: 'remember' | 'use' | 'speak',
  seconds: number,
  fallbackTopic: string
): ParsedRoundData {
  const exampleMatch = prompt.match(/\bExample:\s*(.+)$/i);
  const example = exampleMatch ? exampleMatch[1].trim() : undefined;
  const promptClean = prompt.replace(/\s*Example:.+$/i, '').trim();

  let topic = fallbackTopic;
  const contextMatch = promptClean.match(/\b(?:in the context of|connected to)\s+([^:.]+?)(?:\s+using|\s+Example|\.|$)/i);
  const aboutMatch = promptClean.match(/\babout\s+([^:.]+?)(?:\s+using|\s+connected to|\s+in the context of|\.|$)/i);
  if (contextMatch?.[1]?.trim()) {
    topic = contextMatch[1].trim();
  } else if (aboutMatch?.[1]?.trim()) {
    topic = aboutMatch[1].trim();
  }
  topic = topic.replace(/^today'?s topic$/i, fallbackTopic).trim() || fallbackTopic;

  let focus: string | undefined = undefined;
  const focusMatch = promptClean.match(/\busing\s+([^:.]+?)(?:\s+in the context of|\s*:\s*one positive|\s*:\s*make|\.|$)/i);
  if (focusMatch?.[1]?.trim()) {
    const raw = focusMatch[1].trim();
    if (!/^what you learned|^words|^simple words/i.test(raw)) {
      focus = raw;
    }
  }

  if (roundKey === 'remember') {
    return {
      headline: 'Recall Key Vocabulary',
      topic,
      focus,
      example,
      support: 'Quick warm-up! Say key words and a phrase from today.',
      items: [
        {
          badge: '🔤 3 Words',
          badgeBg: 'bg-sky-500 text-white',
          title: 'Say 3 Key Words',
          desc: `Name 3 important words related to ${topic}`,
          bg: 'bg-sky-50/80',
          border: 'border-sky-200',
          text: 'text-sky-950'
        },
        {
          badge: '💬 1 Phrase',
          badgeBg: 'bg-indigo-500 text-white',
          title: 'Say 1 Useful Phrase',
          desc: 'Say 1 complete expression or sentence',
          bg: 'bg-indigo-50/80',
          border: 'border-indigo-200',
          text: 'text-indigo-950'
        }
      ]
    };
  }

  if (roundKey === 'use') {
    const isTwo = /two short sentences|2 sentences/i.test(promptClean);
    const items: ChallengeItem[] = isTwo
      ? [
          {
            badge: '1️⃣ Sentence 1',
            badgeBg: 'bg-emerald-600 text-white',
            title: 'First Sentence',
            desc: `Make 1 short sentence about ${topic}`,
            bg: 'bg-emerald-50/80',
            border: 'border-emerald-200',
            text: 'text-emerald-950'
          },
          {
            badge: '2️⃣ Sentence 2',
            badgeBg: 'bg-teal-600 text-white',
            title: 'Second Sentence',
            desc: focus ? `Use ${focus}` : `Make a second sentence about ${topic}`,
            bg: 'bg-teal-50/80',
            border: 'border-teal-200',
            text: 'text-teal-950'
          }
        ]
      : [
          {
            badge: '➕ Affirmative',
            badgeBg: 'bg-emerald-600 text-white',
            title: 'Positive Statement',
            desc: 'Make 1 true affirmative sentence',
            bg: 'bg-emerald-50/80',
            border: 'border-emerald-300',
            text: 'text-emerald-950'
          },
          {
            badge: '➖ Negative',
            badgeBg: 'bg-rose-600 text-white',
            title: 'Negative Statement',
            desc: "Make 1 negative sentence (not / don't / never)",
            bg: 'bg-rose-50/80',
            border: 'border-rose-300',
            text: 'text-rose-950'
          },
          {
            badge: '❓ Question',
            badgeBg: 'bg-violet-600 text-white',
            title: 'Ask a Question',
            desc: 'Ask 1 question to your teacher or partner',
            bg: 'bg-violet-50/80',
            border: 'border-violet-300',
            text: 'text-violet-950'
          }
        ];

    return {
      headline: isTwo ? 'Create 2 Sentences' : 'Create 3 Target Sentences',
      topic,
      focus,
      example,
      support: `Target challenge: form your sentences clearly using today's structures.`,
      items
    };
  }

  // speak round
  return {
    headline: `Speaking Challenge`,
    topic,
    focus,
    example,
    support: `Speak for ${formatDurationText(seconds)} without stopping.`,
    items: [
      {
        badge: '🎙️ Fluency',
        badgeBg: 'bg-amber-600 text-white',
        title: 'Continuous Speech',
        desc: `Speak for ${formatDurationText(seconds)} smoothly and clearly`,
        bg: 'bg-amber-50/80',
        border: 'border-amber-300',
        text: 'text-amber-950'
      },
      {
        badge: '🎯 Target Focus',
        badgeBg: 'bg-rose-600 text-white',
        title: focus ? `Structure: ${focus}` : 'Topic Vocabulary',
        desc: `Connect ideas and use language about ${topic}`,
        bg: 'bg-rose-50/80',
        border: 'border-rose-300',
        text: 'text-rose-950'
      }
    ]
  };
}

export function SpeakingBossBattleGame({
  bossName = 'The English Boss',
  bossTitle = 'Final speaking challenge',
  bossAvatar = '⚔️',
  timerSeconds = 30,
  prepareSeconds = 180,
  rounds
}: SpeakingBossBattleGameProps) {
  const [viewIndex, setViewIndex] = useState(0);
  const [hits, setHits] = useState<boolean[]>([false, false, false]);
  const [timerMode, setTimerMode] = useState<'prepare' | 'speak'>('prepare');
  const [customUseSeconds, setCustomUseSeconds] = useState(180);
  const [customPrepareSeconds, setCustomPrepareSeconds] = useState(prepareSeconds);
  const [customSpeakSeconds, setCustomSpeakSeconds] = useState(timerSeconds);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [celebrated, setCelebrated] = useState(false);

  const mergedRounds = useMemo(() => ({
    remember: rounds?.remember?.length ? rounds.remember : fallbackRounds.remember,
    use: rounds?.use?.length ? rounds.use : fallbackRounds.use,
    speak: rounds?.speak?.length ? rounds.speak : fallbackRounds.speak
  }), [rounds]);

  const views = ['intro', 'remember', 'use', 'speak', 'finish'] as const;
  const currentView = views[Math.min(viewIndex, views.length - 1)];
  const roundIndex = roundMeta.findIndex((round) => round.key === currentView);
  const currentRound = roundIndex >= 0 ? roundMeta[roundIndex] : null;
  const roundKey = currentRound?.key;
  const activeSeconds =
    roundKey === 'use' ? customUseSeconds :
    timerMode === 'prepare' ? customPrepareSeconds :
    customSpeakSeconds;
  const prompt = roundKey ? mergedRounds[roundKey][0] || '' : '';
  const parsedData = roundKey ? parseBossPrompt(prompt, roundKey, activeSeconds, bossTitle) : null;
  const completedCount = hits.filter(Boolean).length;
  const isComplete = completedCount === roundMeta.length;
  const bossHealth = Math.max(0, Math.round(100 - completedCount * (100 / roundMeta.length)));

  const next = () => {
    setTimerRunning(false);
    setViewIndex((index) => Math.min(views.length - 1, index + 1));
  };
  const back = () => {
    setTimerRunning(false);
    setViewIndex((index) => Math.max(0, index - 1));
  };
  const reset = () => {
    setViewIndex(0);
    setHits([false, false, false]);
    setTimerRunning(false);
    setTimer(0);
    setCelebrated(false);
  };
  const hitBoss = () => {
    if (roundIndex >= 0) {
      setHits((items) => items.map((item, index) => index === roundIndex ? true : item));
    }
    next();
  };

  const updateCustomSeconds = (mode: 'prepare' | 'speak', nextSeconds: number) => {
    const safeSeconds = Math.min(600, Math.max(5, Math.round(nextSeconds || 30)));
    if (roundKey === 'use') {
      setCustomUseSeconds(safeSeconds);
    } else if (mode === 'prepare') {
      setCustomPrepareSeconds(safeSeconds);
    } else {
      setCustomSpeakSeconds(safeSeconds);
    }
    if (!timerRunning) setTimer(safeSeconds);
  };

  const startTimer = (mode: 'prepare' | 'speak') => {
    setTimerMode(mode);
    const seconds = roundKey === 'use'
      ? customUseSeconds
      : mode === 'prepare'
        ? customPrepareSeconds
        : customSpeakSeconds;
    setTimer(seconds);
    setTimerRunning(true);
  };

  useEffect(() => {
    if (roundKey === 'remember') {
      setTimer(0);
      setTimerRunning(false);
      return;
    }
    if (!timerRunning) setTimer(activeSeconds);
  }, [activeSeconds, roundKey, timerRunning]);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => {
      setTimer((value) => {
        if (value <= 1) {
          window.clearInterval(interval);
          setTimerRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (currentView !== 'finish' || !isComplete || celebrated) return;
    setCelebrated(true);
    confetti({
      particleCount: 160,
      spread: 85,
      origin: { y: 0.56 },
      colors: ['#ef4444', '#facc15', '#8b5cf6', '#10b981', '#ffffff']
    });
  }, [celebrated, currentView, isComplete]);

  const Icon = currentRound?.icon || Swords;

  return (
    <div className="flex h-full min-h-[calc(100vh-5rem)] w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-slate-950/35 p-2 text-white shadow-2xl backdrop-blur-md sm:p-3">
      <div className="mb-2 flex shrink-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base">
            <Swords className="h-5 w-5" />
            Boss Battle
          </div>
          <p className="mt-1 truncate text-base font-bold text-white/75 sm:text-xl">{bossName} · {bossTitle}</p>
        </div>
        <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-white/85 sm:text-base">
          {viewIndex + 1}/{views.length}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-3xl border border-white/15 bg-white/95 p-4 text-slate-950 shadow-2xl sm:p-6 lg:p-7">
        {currentView === 'intro' && (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-36 w-36 items-center justify-center rounded-3xl bg-slate-950 text-8xl shadow-2xl sm:h-44 sm:w-44 sm:text-9xl"
            >
              {bossAvatar}
            </motion.div>
            <div>
              <h2 className="text-5xl font-black leading-none sm:text-7xl lg:text-8xl">{bossName}</h2>
              <p className="mt-3 text-3xl font-black leading-tight text-slate-600 sm:text-5xl">{bossTitle}</p>
            </div>
            <div className="w-full max-w-3xl">
              <div className="mb-3 flex items-center justify-between text-base font-black uppercase tracking-widest text-slate-500 sm:text-xl">
                <span>Boss health</span>
                <span>{bossHealth}%</span>
              </div>
              <div className="h-10 overflow-hidden rounded-full bg-slate-200 sm:h-12">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-lime-400 via-yellow-300 to-red-400" animate={{ width: `${bossHealth}%` }} />
              </div>
            </div>
          </div>
        )}

        {currentRound && parsedData && (
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${currentRound.color} px-4 py-1.5 text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base`}>
                  <Icon className="h-5 w-5" />
                  {currentRound.title} Round · Challenge {roundIndex + 1}/3
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs sm:text-sm font-bold text-slate-700">
                    <span className="text-slate-400 font-semibold uppercase text-[11px] tracking-wider">Topic:</span>
                    <span className="font-extrabold text-slate-900">{parsedData.topic}</span>
                  </div>
                  {parsedData.focus && (
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs sm:text-sm font-bold text-indigo-900">
                      <span className="text-indigo-500 font-semibold uppercase text-[11px] tracking-wider">Focus:</span>
                      <span className="font-extrabold text-indigo-700">{parsedData.focus}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
                  {parsedData.headline}
                </h2>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-500">
                  {parsedData.support}
                </p>
              </div>

              <div className={`grid gap-3 sm:gap-4 ${parsedData.items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {parsedData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-between rounded-2xl border-2 p-4 sm:p-5 shadow-sm transition ${item.bg} ${item.border}`}
                  >
                    <div>
                      <div className="mb-2.5 flex items-center justify-between">
                        <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-black text-slate-400">Step {idx + 1}</span>
                      </div>
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-black tracking-tight ${item.text}`}>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {parsedData.example && (
                <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 px-4 py-2.5 text-amber-950 shadow-sm">
                  <span className="shrink-0 text-lg sm:text-xl">💡</span>
                  <div className="min-w-0 text-xs sm:text-sm lg:text-base">
                    <span className="font-black uppercase tracking-wider text-amber-800 mr-2 text-[11px] sm:text-xs">Example:</span>
                    <span className="font-bold italic text-amber-950">"{parsedData.example}"</span>
                  </div>
                </div>
              )}
            </div>

            {roundKey !== 'remember' && (
              <div className="grid gap-3 rounded-2xl bg-slate-100 p-3 sm:p-4 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  {roundKey === 'speak' && (
                    <div className="mb-2 grid grid-cols-2 rounded-xl border border-slate-200 bg-white p-1 text-xs sm:text-sm font-black uppercase tracking-widest text-slate-500 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setTimerMode('prepare')}
                        className={`rounded-lg px-3 py-2 transition ${timerMode === 'prepare' ? 'bg-slate-950 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                      >
                        Prepare
                      </button>
                      <button
                        type="button"
                        onClick={() => setTimerMode('speak')}
                        className={`rounded-lg px-3 py-2 transition ${timerMode === 'speak' ? 'bg-slate-950 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                      >
                        Speak
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-[52px_1fr_52px] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeSeconds - 5)}
                      className="flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                      aria-label="Decrease seconds"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <input
                      type="number"
                      min={5}
                      max={600}
                      step={5}
                      value={activeSeconds}
                      onChange={(event) => updateCustomSeconds(timerMode, Number(event.target.value))}
                      className="h-12 rounded-xl border border-slate-200 bg-white px-2 text-center text-2xl font-black text-slate-950 shadow-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      aria-label="Timer seconds"
                    >
                    </input>
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeSeconds + 5)}
                      className="flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                      aria-label="Increase seconds"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950 p-3.5 text-white sm:p-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-white/70">
                    <Timer className="h-5 w-5" />
                    Timer
                  </div>
                  <div className="text-4xl font-black tabular-nums leading-none sm:text-5xl lg:text-6xl">{formatTimerLabel(timer)}</div>
                  <button
                    type="button"
                    onClick={() => startTimer(timerMode)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-400 px-4 py-2.5 text-base font-black text-emerald-950 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-300 sm:text-lg"
                  >
                    <Play className="h-5 w-5" />
                    Start
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentView === 'finish' && (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <motion.div
              animate={isComplete ? { scale: [1, 1.12, 1], rotate: [0, -4, 4, 0] } : undefined}
              transition={{ duration: 1.2, repeat: isComplete ? Infinity : 0, repeatDelay: 1.5 }}
            >
              <Trophy className="h-32 w-32 text-yellow-500 drop-shadow-xl sm:h-44 sm:w-44" />
            </motion.div>
            <h2 className="text-5xl font-black leading-none sm:text-7xl lg:text-8xl">
              {isComplete ? 'Boss defeated!' : 'Finish the challenge'}
            </h2>
            {isComplete && (
              <div className="rounded-3xl bg-gradient-to-r from-yellow-300 via-emerald-300 to-violet-400 p-1 shadow-2xl shadow-yellow-900/20">
                <div className="rounded-[1.35rem] bg-white px-6 py-5">
                  <p className="text-4xl font-black leading-tight text-slate-950 sm:text-6xl">Excellent speaking!</p>
                  <p className="mt-2 text-2xl font-black text-slate-600 sm:text-3xl">Challenge complete.</p>
                </div>
              </div>
            )}
            <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              {roundMeta.map((round, index) => (
                <div key={round.key} className={`rounded-3xl p-5 text-3xl font-black sm:text-4xl ${hits[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-slate-100 text-slate-700'}`}>
                  {hits[index] ? <Check className="mx-auto mb-3 h-10 w-10" /> : index + 1}
                  {round.title}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex shrink-0 items-center justify-between gap-3 pt-5">
          <button
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 text-xl font-black text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 sm:h-20 sm:px-6 sm:text-2xl"
          >
            <ArrowLeft className="h-7 w-7" />
            Back
          </button>
          <button
            onClick={reset}
            className="inline-flex h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-xl font-black text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-white hover:text-slate-900 sm:h-20 sm:px-6 sm:text-2xl"
          >
            <RotateCcw className="h-7 w-7" />
            Reset
          </button>
          {currentRound ? (
            <button
              onClick={hitBoss}
              className="inline-flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-5 text-xl font-black text-white shadow-lg shadow-red-900/20 transition hover:from-red-400 hover:to-rose-500 sm:h-20 sm:px-6 sm:text-2xl"
            >
              Hit Boss
              <ArrowRight className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={next}
              disabled={viewIndex === views.length - 1}
              className="inline-flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 text-xl font-black text-white shadow-lg shadow-indigo-900/20 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 sm:h-20 sm:px-6 sm:text-2xl"
            >
              <Play className="h-7 w-7" />
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
