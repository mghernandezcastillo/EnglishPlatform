import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Flame, Minus, Plus, RotateCcw, Shield, Swords, Timer, Trophy, Zap } from 'lucide-react';

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
  remember: ['You have 30 seconds: say three key words and one useful phrase from today.'],
  use: ['You have 60 seconds: create three sentences using today\'s grammar: one positive, one negative, and one question.'],
  speak: ['Speak for 45 seconds about today\'s topic.']
};

const roundMeta = [
  {
    key: 'remember',
    label: 'Round 1',
    title: 'Remember',
    icon: Brain,
    color: 'from-sky-400 to-cyan-500',
    action: 'Recall the language'
  },
  {
    key: 'use',
    label: 'Round 2',
    title: 'Use',
    icon: Shield,
    color: 'from-emerald-400 to-teal-500',
    action: 'Build a clean sentence'
  },
  {
    key: 'speak',
    label: 'Round 3',
    title: 'Speak',
    icon: Flame,
    color: 'from-orange-400 to-red-500',
    action: 'Talk without stopping'
  }
] as const;

export function SpeakingBossBattleGame({
  bossName = 'The English Boss',
  bossTitle = 'Final speaking challenge',
  bossAvatar = '⚔️',
  timerSeconds = 45,
  prepareSeconds = 30,
  rounds
}: SpeakingBossBattleGameProps) {
  const [activeRound, setActiveRound] = useState(0);
  const [hits, setHits] = useState(0);
  const [timerMode, setTimerMode] = useState<'prepare' | 'speak'>('prepare');
  const [customRememberSeconds, setCustomRememberSeconds] = useState(30);
  const [customUseSeconds, setCustomUseSeconds] = useState(60);
  const [customPrepareSeconds, setCustomPrepareSeconds] = useState(prepareSeconds);
  const [customSpeakSeconds, setCustomSpeakSeconds] = useState(timerSeconds);
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  const mergedRounds = useMemo(() => ({
    remember: rounds?.remember?.length ? rounds.remember : fallbackRounds.remember,
    use: rounds?.use?.length ? rounds.use : fallbackRounds.use,
    speak: rounds?.speak?.length ? rounds.speak : fallbackRounds.speak
  }), [rounds]);

  const current = roundMeta[activeRound];
  const Icon = current.icon;
  const currentPrompts = mergedRounds[current.key].map((prompt) =>
    current.key === 'speak'
      ? prompt.replace(/Speak for \d+ seconds/i, `Speak for ${customSpeakSeconds} seconds`)
      : prompt
  );
  const bossHealth = Math.max(0, Math.round(100 - hits * (100 / roundMeta.length)));
  const isComplete = hits >= roundMeta.length;
  const activePrepareSeconds =
    current.key === 'remember' ? customRememberSeconds :
    current.key === 'use' ? customUseSeconds :
    customPrepareSeconds;
  const activeCustomSeconds = timerMode === 'prepare' ? activePrepareSeconds : customSpeakSeconds;

  const setActivePrepareSeconds = (nextSeconds: number) => {
    if (current.key === 'remember') {
      setCustomRememberSeconds(nextSeconds);
    } else if (current.key === 'use') {
      setCustomUseSeconds(nextSeconds);
    } else {
      setCustomPrepareSeconds(nextSeconds);
    }
  };

  const startTimer = (mode: 'prepare' | 'speak') => {
    setTimerMode(mode);
    setTimer(mode === 'prepare' ? activePrepareSeconds : customSpeakSeconds);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setTimer(activeCustomSeconds);
  };

  const updateCustomSeconds = (mode: 'prepare' | 'speak', nextSeconds: number) => {
    const safeSeconds = Math.min(600, Math.max(5, Math.round(nextSeconds || 30)));
    if (mode === 'prepare') {
      setActivePrepareSeconds(safeSeconds);
    } else {
      setCustomSpeakSeconds(safeSeconds);
    }
    if (!timerRunning && timerMode === mode) {
      setTimer(safeSeconds);
    }
  };

  const hitBoss = () => {
    setHits((value) => Math.min(roundMeta.length, value + 1));
    setActiveRound((value) => Math.min(roundMeta.length - 1, value + 1));
    setTimerRunning(false);
    setTimer(timerMode === 'prepare' ? activePrepareSeconds : customSpeakSeconds);
  };

  useEffect(() => {
    if (!timerRunning) {
      setTimer(activeCustomSeconds);
    }
  }, [activeRound, activeCustomSeconds, timerRunning]);

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

  return (
    <div className="relative flex min-h-[calc(100vh-6.75rem)] w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-slate-950/30 p-3 shadow-2xl backdrop-blur-md sm:min-h-[calc(100vh-9rem)] sm:p-4 lg:min-h-[calc(100vh-10rem)] lg:p-5">
      <motion.div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-1 flex-col gap-3 lg:gap-4">
        <section className="grid gap-3 rounded-2xl border border-white/15 bg-black/20 p-3 sm:p-4 lg:grid-cols-[1.05fr_1fr_0.95fr] lg:items-center lg:p-5">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <div className="min-w-0">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                <Swords className="h-4 w-4" />
                Boss Battle
              </div>
              <h2 className="truncate text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">{bossName}</h2>
              <p className="mt-1 truncate text-base font-bold text-white/75 sm:text-xl lg:text-2xl">{bossTitle}</p>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-5xl shadow-2xl sm:h-28 sm:w-28 sm:text-7xl lg:h-32 lg:w-32 lg:text-8xl"
            >
              {bossAvatar}
            </motion.div>
          </div>

          <div className="lg:px-2">
            <div className="mb-2 flex items-center justify-between text-sm font-black uppercase tracking-widest text-white/75 sm:text-base">
              <span>Boss health</span>
              <span>{bossHealth}%</span>
            </div>
            <div className="h-6 overflow-hidden rounded-full border border-white/20 bg-black/35 shadow-inner sm:h-8">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-lime-300 via-yellow-300 to-red-400"
                initial={false}
                animate={{ width: `${bossHealth}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {roundMeta.map((round, index) => {
              const RoundIcon = round.icon;
              const active = index === activeRound && !isComplete;
              const done = index < hits;
              return (
                <button
                  key={round.key}
                  type="button"
                  onClick={() => setActiveRound(index)}
                  className={[
                    'flex min-h-[72px] flex-col items-center justify-center gap-1 rounded-2xl border p-2 text-center transition-all sm:min-h-[88px] lg:min-h-[96px]',
                    active && 'border-white bg-white text-slate-950 shadow-xl',
                    done && !active && 'border-emerald-300/70 bg-emerald-400/25 text-white',
                    !active && !done && 'border-white/15 bg-white/10 text-white/70 hover:bg-white/15'
                  ].filter(Boolean).join(' ')}
                >
                  <RoundIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                  <span className="text-xs font-black uppercase leading-tight sm:text-base lg:text-lg">{round.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex flex-1 flex-col gap-3 rounded-2xl border border-white/15 bg-white/12 p-3 sm:p-4 lg:gap-4 lg:p-5">
          {isComplete ? (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex min-h-[360px] flex-1 flex-col items-center justify-center gap-4 text-center"
            >
              <Trophy className="h-20 w-20 text-yellow-300" />
              <h3 className="text-3xl font-black sm:text-5xl">Boss defeated!</h3>
              <p className="max-w-xl text-lg font-bold text-white/80">
                Finish with one perfect introduction and a confident goodbye.
              </p>
              <button
                type="button"
                onClick={() => {
                  setHits(0);
                  setActiveRound(0);
                  stopTimer();
                }}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-slate-950 shadow-xl transition hover:scale-105"
              >
                <RotateCcw className="h-5 w-5" />
                Play again
              </button>
            </motion.div>
          ) : (
            <>
              <div className={`rounded-2xl bg-gradient-to-br ${current.color} p-3 shadow-xl sm:p-4 lg:p-5`}>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-widest sm:text-sm">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    {current.label}: {current.title}
                  </div>
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-widest sm:text-sm">
                    {current.action}
                  </div>
                </div>

                <div className="grid gap-3">
                  {currentPrompts.map((prompt, index) => (
                    <motion.div
                      key={`${current.key}-${prompt}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, type: 'spring', stiffness: 180, damping: 18 }}
                      className="rounded-2xl border border-white/25 bg-white p-4 text-2xl font-black leading-snug text-slate-950 shadow-lg sm:p-6 sm:text-4xl lg:text-5xl"
                    >
                      {prompt}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid flex-1 gap-3 md:grid-cols-[0.68fr_1.32fr]">
                <div className="rounded-2xl border border-white/15 bg-black/20 p-3 sm:p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-yellow-200 sm:text-base">
                    <Timer className="h-5 w-5 sm:h-6 sm:w-6" />
                    Timers
                  </div>
                  <div className="mb-3 grid grid-cols-2 rounded-2xl border border-white/15 bg-black/25 p-1 text-xs font-black uppercase tracking-widest">
                    <button
                      type="button"
                      onClick={() => {
                        setTimerMode('prepare');
                        if (!timerRunning) setTimer(activePrepareSeconds);
                      }}
                      className={`rounded-xl px-3 py-2 transition ${timerMode === 'prepare' ? 'bg-white text-slate-950' : 'text-white/70 hover:bg-white/10'}`}
                    >
                      Prepare
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTimerMode('speak');
                        if (!timerRunning) setTimer(customSpeakSeconds);
                      }}
                      className={`rounded-xl px-3 py-2 transition ${timerMode === 'speak' ? 'bg-white text-slate-950' : 'text-white/70 hover:bg-white/10'}`}
                    >
                      Speak
                    </button>
                  </div>
                  <div className="mb-3 grid grid-cols-[44px_1fr_44px] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeCustomSeconds - 5)}
                      className="flex h-11 items-center justify-center rounded-2xl bg-white/15 text-white transition hover:bg-white/25"
                      aria-label="Decrease seconds"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <input
                      type="number"
                      min={5}
                      max={300}
                      step={5}
                      value={activeCustomSeconds}
                      onChange={(event) => updateCustomSeconds(timerMode, Number(event.target.value))}
                      className="h-11 rounded-2xl border border-white/20 bg-white px-3 text-center text-lg font-black text-slate-950 outline-none"
                      aria-label="Timer seconds"
                    />
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(timerMode, activeCustomSeconds + 5)}
                      className="flex h-11 items-center justify-center rounded-2xl bg-white/15 text-white transition hover:bg-white/25"
                      aria-label="Increase seconds"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="mb-2 text-center text-xs font-black uppercase tracking-widest text-white/60">
                    {timerMode === 'prepare' ? 'Preparation time' : 'Speaking time'}
                  </p>
                  <div className="mb-4 text-center text-7xl font-black tabular-nums sm:text-8xl lg:text-9xl">
                    {timer}s
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => startTimer('prepare')}
                      className="rounded-2xl bg-yellow-300 px-4 py-3 font-black text-slate-950 shadow-lg transition hover:scale-105"
                    >
                      Start Prep
                    </button>
                    <button
                      type="button"
                      onClick={() => startTimer('speak')}
                      className="rounded-2xl bg-orange-400 px-4 py-3 font-black text-slate-950 shadow-lg transition hover:scale-105"
                    >
                      Start Speak
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={stopTimer}
                    className="mt-2 w-full rounded-2xl bg-white/15 px-4 py-3 font-black text-white shadow-lg transition hover:bg-white/25"
                  >
                    Reset
                  </button>
                </div>

                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/15 bg-black/20 p-3 sm:p-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-cyan-200 sm:text-base">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                      Teacher flow
                    </div>
                    <p className="text-xl font-bold leading-relaxed text-white/85 sm:text-3xl lg:text-4xl">
                      One student answers. The class can help with one hint. If the answer is clear, hit the boss and move to the next round.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={hitBoss}
                    className="rounded-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-5 py-5 text-2xl font-black text-white shadow-2xl transition hover:scale-[1.02] sm:py-6 sm:text-4xl"
                  >
                    Hit Boss
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
