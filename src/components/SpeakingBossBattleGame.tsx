import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Brain, Check, Flame, Minus, Plus, Play, RotateCcw, Shield, Swords, Timer, Trophy } from 'lucide-react';
import { InlineAiSpeakingAssistant } from './InlineAiSpeakingAssistant';

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

function extractTopic(prompt: string, fallback: string) {
  const aboutMatch = prompt.match(/\babout\s+(.+?)(?:\.|$)/i);
  const contextMatch = prompt.match(/\bcontext of\s+(.+?)(?:\.|$)/i);
  const topic = (aboutMatch?.[1] || contextMatch?.[1] || fallback).replace(/^today'?s topic$/i, fallback).trim();
  return topic || fallback;
}

function simplifyPrompt(prompt: string, roundKey: 'remember' | 'use' | 'speak', seconds: number) {
  const topic = extractTopic(prompt, 'today\'s topic');
  if (roundKey === 'remember') {
    return {
      main: 'Say 3 words + 1 phrase',
      topic,
      support: 'No full speech yet. Just recall useful language.'
    };
  }
  if (roundKey === 'use') {
    const clean = prompt
      .replace(/^You have .*?:\s*/i, '')
      .replace(/\s*Example:.+$/i, '')
      .trim();
    return {
      main: clean || 'Make one positive sentence, one negative sentence, and one question.',
      topic,
      support: `Use time: ${formatDurationText(seconds)}`
    };
  }
  return {
    main: `Speak for ${formatDurationText(seconds)}`,
    topic,
    support: 'Use a clear voice and keep going.'
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
  const simplePrompt = roundKey ? simplifyPrompt(prompt, roundKey, activeSeconds) : null;
  const completedCount = hits.filter(Boolean).length;
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

  const Icon = currentRound?.icon || Swords;

  return (
    <div className="flex h-full min-h-[calc(100vh-6rem)] w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-slate-950/35 p-3 text-white shadow-2xl backdrop-blur-md sm:p-5">
      <div className="mb-3 flex shrink-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm">
            <Swords className="h-4 w-4" />
            Boss Battle
          </div>
          <p className="mt-1 truncate text-sm font-bold text-white/70 sm:text-base">{bossName} · {bossTitle}</p>
        </div>
        <div className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white/80 sm:text-sm">
          {viewIndex + 1}/{views.length}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-white/15 bg-white/95 p-4 text-slate-950 shadow-2xl sm:p-6 lg:p-8">
        {currentView === 'intro' && (
          <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-28 w-28 items-center justify-center rounded-3xl bg-slate-950 text-7xl shadow-2xl sm:h-36 sm:w-36 sm:text-8xl"
            >
              {bossAvatar}
            </motion.div>
            <div>
              <h2 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">{bossName}</h2>
              <p className="mt-2 text-2xl font-black text-slate-600 sm:text-4xl">{bossTitle}</p>
            </div>
            <div className="w-full max-w-xl">
              <div className="mb-2 flex items-center justify-between text-sm font-black uppercase tracking-widest text-slate-500 sm:text-base">
                <span>Boss health</span>
                <span>{bossHealth}%</span>
              </div>
              <div className="h-8 overflow-hidden rounded-full bg-slate-200">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-lime-400 via-yellow-300 to-red-400" animate={{ width: `${bossHealth}%` }} />
              </div>
            </div>
          </div>
        )}

        {currentRound && simplePrompt && (
          <div className="flex h-full flex-col justify-center gap-5">
            <div>
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${currentRound.color} px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm`}>
                <Icon className="h-4 w-4" />
                {currentRound.title} Round
              </div>
              <h2 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">{simplePrompt.main}</h2>
              <div className="mt-4 rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-500 sm:text-base">Topic</p>
                <p className="mt-1 text-2xl font-black leading-tight text-slate-800 sm:text-4xl lg:text-5xl">{simplePrompt.topic}</p>
              </div>
              <p className="mt-3 text-xl font-bold leading-snug text-slate-600 sm:text-3xl">{simplePrompt.support}</p>
            </div>

            {roundKey !== 'remember' && (
              <div className="grid gap-3 rounded-2xl bg-slate-100 p-4 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  {roundKey === 'speak' && (
                    <div className="mb-3 grid grid-cols-2 rounded-xl bg-white p-1 text-sm font-black uppercase tracking-widest text-slate-500">
                      <button
                        type="button"
                        onClick={() => setTimerMode('prepare')}
                        className={`rounded-lg px-3 py-2 ${timerMode === 'prepare' ? 'bg-slate-950 text-white' : ''}`}
                      >
                        Prepare
                      </button>
                      <button
                        type="button"
                        onClick={() => setTimerMode('speak')}
                        className={`rounded-lg px-3 py-2 ${timerMode === 'speak' ? 'bg-slate-950 text-white' : ''}`}
                      >
                        Speak
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-[52px_1fr_52px] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeSeconds - 5)}
                      className="flex h-12 items-center justify-center rounded-xl bg-white text-slate-700"
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
                      className="h-12 rounded-xl border border-slate-200 bg-white px-3 text-center text-2xl font-black text-slate-950 outline-none"
                      aria-label="Timer seconds"
                    />
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeSeconds + 5)}
                      className="flex h-12 items-center justify-center rounded-xl bg-white text-slate-700"
                      aria-label="Increase seconds"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950 p-4 text-white">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/70 sm:text-base">
                    <Timer className="h-5 w-5" />
                    Timer
                  </div>
                  <div className="text-6xl font-black tabular-nums sm:text-7xl">{formatTimerLabel(timer)}</div>
                  <button
                    type="button"
                    onClick={() => startTimer(timerMode)}
                    className="rounded-xl bg-yellow-300 px-4 py-3 text-base font-black text-slate-950 sm:text-xl"
                  >
                    Start
                  </button>
                </div>
              </div>
            )}

            {roundKey === 'speak' && (
              <InlineAiSpeakingAssistant
                title="Asistente IA para Speak"
                initialQuestion={prompt}
                candidateQuestions={[prompt]}
              />
            )}
          </div>
        )}

        {currentView === 'finish' && (
          <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
            <Trophy className="h-24 w-24 text-yellow-500 sm:h-32 sm:w-32" />
            <h2 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              {completedCount === roundMeta.length ? 'Boss defeated!' : 'Finish the challenge'}
            </h2>
            <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              {roundMeta.map((round, index) => (
                <div key={round.key} className={`rounded-2xl p-4 text-2xl font-black ${hits[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-slate-100 text-slate-700'}`}>
                  {hits[index] ? <Check className="mx-auto mb-2 h-8 w-8" /> : index + 1}
                  {round.title}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex shrink-0 items-center justify-between gap-2 pt-4">
          <button
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-200 px-4 text-base font-black text-slate-700 disabled:opacity-40 sm:h-14 sm:text-xl"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <button
            onClick={reset}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-4 text-base font-black text-slate-600 sm:h-14 sm:text-xl"
          >
            <RotateCcw className="h-5 w-5" />
            Reset
          </button>
          {currentRound ? (
            <button
              onClick={hitBoss}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-red-500 px-4 text-base font-black text-white sm:h-14 sm:text-xl"
            >
              Hit Boss
              <ArrowRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={next}
              disabled={viewIndex === views.length - 1}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-4 text-base font-black text-white disabled:opacity-40 sm:h-14 sm:text-xl"
            >
              <Play className="h-5 w-5" />
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
