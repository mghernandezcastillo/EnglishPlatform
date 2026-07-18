import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Flame, Minus, Plus, RotateCcw, Shield, Sparkles, Swords, Timer, Trophy, Zap } from 'lucide-react';

interface SpeakingBossBattleGameProps {
  bossName?: string;
  bossTitle?: string;
  bossAvatar?: string;
  timerSeconds?: number;
  rounds?: {
    remember?: string[];
    use?: string[];
    speak?: string[];
    memoryBonus?: string[];
  };
}

const fallbackRounds = {
  remember: ['Say three useful words from today.'],
  use: ['Create one sentence using today\'s grammar.'],
  speak: ['Speak for 30 seconds about today\'s topic.'],
  memoryBonus: ['Use one expression from a previous class.']
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
  },
  {
    key: 'memoryBonus',
    label: 'Bonus',
    title: 'Memory Bonus',
    icon: Sparkles,
    color: 'from-fuchsia-400 to-violet-500',
    action: 'Connect with older English'
  }
] as const;

export function SpeakingBossBattleGame({
  bossName = 'The English Boss',
  bossTitle = 'Final speaking challenge',
  bossAvatar = '⚔️',
  timerSeconds = 30,
  rounds
}: SpeakingBossBattleGameProps) {
  const [activeRound, setActiveRound] = useState(0);
  const [hits, setHits] = useState(0);
  const [customSeconds, setCustomSeconds] = useState(timerSeconds);
  const [timer, setTimer] = useState(timerSeconds);
  const [timerRunning, setTimerRunning] = useState(false);

  const mergedRounds = useMemo(() => ({
    remember: rounds?.remember?.length ? rounds.remember : fallbackRounds.remember,
    use: rounds?.use?.length ? rounds.use : fallbackRounds.use,
    speak: rounds?.speak?.length ? rounds.speak : fallbackRounds.speak,
    memoryBonus: rounds?.memoryBonus?.length ? rounds.memoryBonus : fallbackRounds.memoryBonus
  }), [rounds]);

  const current = roundMeta[activeRound];
  const Icon = current.icon;
  const currentPrompts = mergedRounds[current.key];
  const bossHealth = Math.max(0, 100 - hits * 25);
  const isComplete = hits >= roundMeta.length;

  const startTimer = () => {
    setTimer(customSeconds);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setTimer(customSeconds);
  };

  const updateCustomSeconds = (nextSeconds: number) => {
    const safeSeconds = Math.min(300, Math.max(5, Math.round(nextSeconds || 30)));
    setCustomSeconds(safeSeconds);
    if (!timerRunning) {
      setTimer(safeSeconds);
    }
  };

  const hitBoss = () => {
    setHits((value) => Math.min(roundMeta.length, value + 1));
    setActiveRound((value) => Math.min(roundMeta.length - 1, value + 1));
    setTimerRunning(false);
    setTimer(customSeconds);
  };

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
    <div className="relative flex min-h-[520px] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-950/30 p-4 shadow-2xl backdrop-blur-md sm:p-6">
      <motion.div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="flex flex-col justify-between gap-5 rounded-3xl border border-white/15 bg-black/20 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                <Swords className="h-4 w-4" />
                Boss Battle
              </div>
              <h2 className="text-2xl font-black leading-tight sm:text-4xl">{bossName}</h2>
              <p className="mt-1 text-sm font-bold text-white/70 sm:text-base">{bossTitle}</p>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-2xl sm:h-28 sm:w-28 sm:text-7xl"
            >
              {bossAvatar}
            </motion.div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs font-black uppercase tracking-widest text-white/75">
              <span>Boss health</span>
              <span>{bossHealth}%</span>
            </div>
            <div className="h-5 overflow-hidden rounded-full border border-white/20 bg-black/35 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-lime-300 via-yellow-300 to-red-400"
                initial={false}
                animate={{ width: `${bossHealth}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
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
                    'flex min-h-[74px] flex-col items-center justify-center gap-1 rounded-2xl border p-2 text-center transition-all',
                    active && 'border-white bg-white text-slate-950 shadow-xl',
                    done && !active && 'border-emerald-300/70 bg-emerald-400/25 text-white',
                    !active && !done && 'border-white/15 bg-white/10 text-white/70 hover:bg-white/15'
                  ].filter(Boolean).join(' ')}
                >
                  <RoundIcon className="h-5 w-5" />
                  <span className="text-[10px] font-black uppercase leading-tight sm:text-xs">{round.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/12 p-4 sm:p-5">
          {isComplete ? (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center"
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
              <div className={`rounded-3xl bg-gradient-to-br ${current.color} p-4 shadow-xl sm:p-5`}>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-widest">
                    <Icon className="h-4 w-4" />
                    {current.label}: {current.title}
                  </div>
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-widest">
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
                      className="rounded-2xl border border-white/25 bg-white p-4 text-base font-black leading-snug text-slate-950 shadow-lg sm:text-xl"
                    >
                      {prompt}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-3xl border border-white/15 bg-black/20 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-yellow-200">
                    <Timer className="h-5 w-5" />
                    Speaking timer
                  </div>
                  <div className="mb-3 grid grid-cols-[44px_1fr_44px] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(customSeconds - 5)}
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
                      value={customSeconds}
                      onChange={(event) => updateCustomSeconds(Number(event.target.value))}
                      className="h-11 rounded-2xl border border-white/20 bg-white px-3 text-center text-lg font-black text-slate-950 outline-none"
                      aria-label="Timer seconds"
                    />
                    <button
                      type="button"
                      onClick={() => updateCustomSeconds(customSeconds + 5)}
                      className="flex h-11 items-center justify-center rounded-2xl bg-white/15 text-white transition hover:bg-white/25"
                      aria-label="Increase seconds"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mb-4 text-center text-5xl font-black tabular-nums sm:text-6xl">
                    {timer}s
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={startTimer}
                      className="rounded-2xl bg-yellow-300 px-4 py-3 font-black text-slate-950 shadow-lg transition hover:scale-105"
                    >
                      Start
                    </button>
                    <button
                      type="button"
                      onClick={stopTimer}
                      className="rounded-2xl bg-white/15 px-4 py-3 font-black text-white shadow-lg transition hover:bg-white/25"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-3 rounded-3xl border border-white/15 bg-black/20 p-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-cyan-200">
                      <Zap className="h-5 w-5" />
                      Teacher flow
                    </div>
                    <p className="text-base font-bold leading-relaxed text-white/80 sm:text-lg">
                      One student answers. The class can help with one hint. If the answer is clear, hit the boss and move to the next round.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={hitBoss}
                    className="rounded-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-5 py-4 text-lg font-black text-white shadow-2xl transition hover:scale-[1.02]"
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
