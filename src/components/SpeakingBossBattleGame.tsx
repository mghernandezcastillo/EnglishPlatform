import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Brain, Check, Flame, Minus, Plus, Play, RotateCcw, Shield, Swords, Timer, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeakingBossBattleGameProps {
  bossName?: string;
  bossTitle?: string;
  bossAvatar?: string;
  mission?: string;
  starterPhrase?: string;
  powerWords?: string[];
  targetGrammar?: string;
  checklist?: string[];
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
  example?: string;
}

interface ParsedRoundData {
  headline: string;
  topic: string;
  focus?: string;
  example?: string;
  support: string;
  items: ChallengeItem[];
}

function getContextualSentenceExamples(topic: string, focus?: string) {
  const t = (topic + ' ' + (focus || '')).toLowerCase();
  
  if (t.includes('routine') || t.includes('time') || t.includes('schedule') || t.includes('daily')) {
    return {
      pos: "I wake up at 7:00 AM every weekday.",
      neg: "I don't go to bed late on school nights.",
      q: "What time do you have breakfast?"
    };
  }
  if (t.includes('sport') || t.includes('team') || t.includes('competition')) {
    return {
      pos: "I train with my soccer team on Thursdays.",
      neg: "We don't give up when a match is difficult.",
      q: "What equipment do you need for practice?"
    };
  }
  if (t.includes('holiday') || t.includes('festival') || t.includes('tradition')) {
    return {
      pos: "We celebrate New Year's Eve with a family feast.",
      neg: "We don't eat heavy food before the parade.",
      q: "When does your family celebrate this festival?"
    };
  }
  if (t.includes('space') || t.includes('future') || t.includes('science') || t.includes('tech')) {
    return {
      pos: "Scientists will build permanent solar stations.",
      neg: "We won't use polluting fossil fuels in 2050.",
      q: "Will robots assist doctors in hospitals?"
    };
  }
  if (t.includes('childhood') || t.includes('memories') || t.includes('was') || t.includes('were')) {
    return {
      pos: "When I was little, I was very energetic.",
      neg: "My best friend and I weren't shy in primary school.",
      q: "Where were you born and who was your favorite teacher?"
    };
  }
  if (t.includes('vacation') || t.includes('travel') || t.includes('trip') || t.includes('anecdote')) {
    return {
      pos: "I traveled to the coast and swam every day.",
      neg: "We didn't miss our morning flight.",
      q: "Where did you go on your last vacation?"
    };
  }
  if (t.includes('biograph') || t.includes('artist') || t.includes('athlete') || t.includes('creator')) {
    return {
      pos: "He was born in 1987 and won multiple trophies.",
      neg: "She didn't give up despite early difficulties.",
      q: "What was his greatest milestone?"
    };
  }
  if (t.includes('connector') || t.includes('story')) {
    return {
      pos: "First, we explored the trail, and suddenly it started raining.",
      neg: "Meanwhile, we didn't panic and found shelter.",
      q: "What happened in the end of the story?"
    };
  }
  if (t.includes('problem') || t.includes('explain') || t.includes('repair') || t.includes('trouble')) {
    return {
      pos: "There is an issue with my laptop screen.",
      neg: "The battery doesn't hold a charge anymore.",
      q: "Could you please help me fix this device?"
    };
  }
  if (t.includes('verb') || t.includes('-ed') || t.includes('pronunciation')) {
    return {
      pos: "I visited (/ɪd/) the museum and watched (/t/) a film.",
      neg: "I didn't buy unnecessary items yesterday.",
      q: "Did you practice the three sounds of -ed?"
    };
  }
  if (t.includes('school') || t.includes('subject') || t.includes('supplies') || t.includes('classroom')) {
    return {
      pos: "My favorite subject is biology because I love science.",
      neg: "I don't forget my notebooks at home.",
      q: "Do you have an extra highlighter I can borrow?"
    };
  }
  if (t.includes('food') || t.includes('cafe') || t.includes('snack') || t.includes('drink')) {
    return {
      pos: "I usually order an iced matcha with oat milk.",
      neg: "I don't drink sugary sodas during the week.",
      q: "Could I please have a toasted bagel?"
    };
  }
  if (t.includes('clothe') || t.includes('weather') || t.includes('wear')) {
    return {
      pos: "I wear a waterproof raincoat when it is rainy.",
      neg: "I don't wear heavy jackets in summer.",
      q: "What outfit do you wear on sunny days?"
    };
  }
  if (t.includes('greeting') || t.includes('hello') || t.includes('introduction') || t.includes('name')) {
    return {
      pos: "My name is Alex and I am 14 years old.",
      neg: "I'm not nervous today, I feel great.",
      q: "How are you doing this morning?"
    };
  }
  if (t.includes('number') || t.includes('age') || t.includes('birthday')) {
    return {
      pos: "I am 15 years old and my birthday is in August.",
      neg: "My lucky number isn't seven, it's twenty-four.",
      q: "When is your birthday and how old are you?"
    };
  }
  if (t.includes('pet') || t.includes('animal')) {
    return {
      pos: "My dog Toby is very friendly and playful.",
      neg: "My cat doesn't like noisy rooms.",
      q: "What is your favorite animal and why?"
    };
  }
  if (t.includes('hobby') || t.includes('free time')) {
    return {
      pos: "I love playing electric guitar in my free time.",
      neg: "I don't watch TV on weekday afternoons.",
      q: "What hobbies do you enjoy on weekends?"
    };
  }
  if (t.includes('family') || t.includes('friend')) {
    return {
      pos: "My older brother is funny and supportive.",
      neg: "We don't argue over minor chores.",
      q: "Who is your closest family member?"
    };
  }

  // Fallback
  const cleanTopic = topic.replace(/^[a-z0-9\s-]*:\s*/i, '').trim();
  return {
    pos: `I practice speaking about ${cleanTopic} with my classmates.`,
    neg: `I don't have problems understanding ${cleanTopic}.`,
    q: `What is your favorite part about ${cleanTopic}?`
  };
}

function parseBossPrompt(
  prompt: string,
  roundKey: 'remember' | 'use' | 'speak',
  speakSeconds: number,
  fallbackTopic: string,
  mission?: string,
  starterPhrase?: string,
  powerWords?: string[],
  targetGrammar?: string,
  checklist?: string[]
): ParsedRoundData {
  const exampleMatch = prompt.match(/(?:Example(?:\s+to\s+guide\s+you)?|Ejemplo):\s*["']?([\s\S]+?)["']?$/i);
  const rawExample = exampleMatch ? exampleMatch[1].replace(/["']$/g, '').trim() : undefined;
  const promptClean = prompt.replace(/(?:Example(?:\s+to\s+guide\s+you)?|Ejemplo):[\s\S]+$/i, '').trim();

  let topic = fallbackTopic;
  const contextMatch = promptClean.match(/\b(?:in the context of|connected to)\s+([^:.]+?)(?:\s+using|\s+Example|\.|$)/i);
  const aboutMatch = promptClean.match(/\babout\s+([^:.]+?)(?:\s+using|\s+connected to|\s+in the context of|\.|$)/i);
  if (contextMatch?.[1]?.trim()) {
    topic = contextMatch[1].trim();
  } else if (aboutMatch?.[1]?.trim()) {
    topic = aboutMatch[1].trim();
  }
  topic = topic.replace(/^today'?s topic$/i, fallbackTopic).trim() || fallbackTopic;

  let focus: string | undefined = targetGrammar;
  if (!focus) {
    const focusMatch = promptClean.match(/\busing\s+([^:.]+?)(?:\s+in the context of|\s*:\s*one positive|\s*:\s*make|\.|$)/i);
    if (focusMatch?.[1]?.trim()) {
      const raw = focusMatch[1].trim();
      if (!/^what you learned|^words|^simple words/i.test(raw)) {
        focus = raw;
      }
    }
  }

  if (roundKey === 'remember') {
    const items: ChallengeItem[] = [
      {
        badge: '🔤 Power Words',
        badgeBg: 'bg-sky-500 text-white',
        title: 'Say Key Vocabulary',
        desc: powerWords?.length ? powerWords.join('  •  ') : `Name 3 important words related to ${topic}`,
        example: powerWords?.[0],
        bg: 'bg-sky-50/80',
        border: 'border-sky-200',
        text: 'text-sky-950'
      },
      {
        badge: '💬 Model Phrase',
        badgeBg: 'bg-indigo-500 text-white',
        title: 'Say Starter Phrase',
        desc: starterPhrase ? `Practice saying: "${starterPhrase}"` : 'Say 1 complete expression or sentence',
        example: starterPhrase,
        bg: 'bg-indigo-50/80',
        border: 'border-indigo-200',
        text: 'text-indigo-950'
      }
    ];

    return {
      headline: 'Recall Key Vocabulary',
      topic,
      focus,
      example: rawExample,
      support: 'Quick warm-up! Say key words and a phrase from today.',
      items
    };
  }

  if (roundKey === 'use') {
    const isTwo = /two short sentences|2 sentences/i.test(promptClean);
    const examples = getContextualSentenceExamples(topic, focus);
    const items: ChallengeItem[] = isTwo
      ? [
          {
            badge: '1️⃣ Sentence 1',
            badgeBg: 'bg-emerald-600 text-white',
            title: 'First Sentence',
            desc: `Make 1 short sentence about ${topic}`,
            example: examples.pos,
            bg: 'bg-emerald-50/80',
            border: 'border-emerald-200',
            text: 'text-emerald-950'
          },
          {
            badge: '2️⃣ Sentence 2',
            badgeBg: 'bg-teal-600 text-white',
            title: 'Second Sentence',
            desc: focus ? `Use ${focus}` : `Make a second sentence about ${topic}`,
            example: examples.neg,
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
            example: examples.pos,
            bg: 'bg-emerald-50/80',
            border: 'border-emerald-300',
            text: 'text-emerald-950'
          },
          {
            badge: '➖ Negative',
            badgeBg: 'bg-rose-600 text-white',
            title: 'Negative Statement',
            desc: "Make 1 negative sentence (not / don't / never)",
            example: examples.neg,
            bg: 'bg-rose-50/80',
            border: 'border-rose-300',
            text: 'text-rose-950'
          },
          {
            badge: '❓ Question',
            badgeBg: 'bg-violet-600 text-white',
            title: 'Ask a Question',
            desc: 'Ask 1 question to your teacher or partner',
            example: examples.q,
            bg: 'bg-violet-50/80',
            border: 'border-violet-300',
            text: 'text-violet-950'
          }
        ];

    return {
      headline: isTwo ? 'Create 2 Sentences' : 'Create 3 Target Sentences',
      topic,
      focus,
      example: rawExample,
      support: `Take your time to construct each sentence accurately using today's structures.`,
      items
    };
  }

  // speak round
  const items: ChallengeItem[] = mission
    ? [
        {
          badge: '🎯 30s Mission',
          badgeBg: 'bg-rose-600 text-white',
          title: 'Speaking Challenge',
          desc: mission,
          bg: 'bg-rose-50/90',
          border: 'border-rose-300',
          text: 'text-rose-950'
        },
        {
          badge: '🚀 Starter Phrase',
          badgeBg: 'bg-emerald-600 text-white',
          title: 'Start Speaking With:',
          desc: starterPhrase ? `"${starterPhrase}"` : `Begin by introducing your point on ${topic}`,
          example: starterPhrase,
          bg: 'bg-emerald-50/90',
          border: 'border-emerald-300',
          text: 'text-emerald-950'
        },
        {
          badge: '⚡ Power Words & Grammar',
          badgeBg: 'bg-amber-600 text-white',
          title: targetGrammar || (focus ? `Structure: ${focus}` : 'Target Vocabulary'),
          desc: powerWords?.length ? powerWords.join('  •  ') : `Connect ideas using today's language about ${topic}`,
          bg: 'bg-amber-50/90',
          border: 'border-amber-300',
          text: 'text-amber-950'
        }
      ]
    : [
        {
          badge: '🎙️ Fluency',
          badgeBg: 'bg-amber-600 text-white',
          title: 'Continuous Speech',
          desc: `Speak for ${formatDurationText(speakSeconds)} smoothly and clearly`,
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
      ];

  const checklistNote = checklist?.length
    ? `📋 Checklist (3 Points to Cover): ${checklist.join('  •  ')}`
    : undefined;

  return {
    headline: mission ? '30s Speaking Challenge' : 'Speaking Challenge',
    topic,
    focus: targetGrammar || focus,
    example: checklistNote || rawExample,
    support: mission ? `Read your mission, start with the phrase, and speak for ${formatDurationText(speakSeconds)}!` : `Prepare your ideas (3 min), then speak for ${formatDurationText(speakSeconds)} without stopping.`,
    items
  };
}

export function SpeakingBossBattleGame({
  bossName = 'The English Boss',
  bossTitle = 'Final speaking challenge',
  bossAvatar = '⚔️',
  mission,
  starterPhrase,
  powerWords,
  targetGrammar,
  checklist,
  timerSeconds = 30,
  prepareSeconds = 180,
  rounds
}: SpeakingBossBattleGameProps) {
  const [viewIndex, setViewIndex] = useState(0);
  const [hits, setHits] = useState<boolean[]>([false, false, false]);
  const [timerMode, setTimerMode] = useState<'prepare' | 'speak'>('prepare');
  const [customPrepareSeconds, setCustomPrepareSeconds] = useState(prepareSeconds);
  const [customSpeakSeconds, setCustomSpeakSeconds] = useState(timerSeconds);
  const [timer, setTimer] = useState(prepareSeconds);
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
  
  const activeSeconds = timerMode === 'prepare' ? customPrepareSeconds : customSpeakSeconds;
  const prompt = roundKey ? (mergedRounds[roundKey] || []).join('\n') : '';
  const parsedData = roundKey
    ? parseBossPrompt(
        prompt,
        roundKey,
        customSpeakSeconds,
        bossTitle,
        mission,
        starterPhrase,
        powerWords,
        targetGrammar,
        checklist
      )
    : null;
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
    setTimer(prepareSeconds);
    setTimerMode('prepare');
    setCelebrated(false);
  };
  const hitBoss = () => {
    if (roundIndex >= 0) {
      setHits((items) => items.map((item, index) => index === roundIndex ? true : item));
    }
    next();
  };

  const handleModeChange = (mode: 'prepare' | 'speak') => {
    setTimerMode(mode);
    setTimerRunning(false);
    setTimer(mode === 'prepare' ? customPrepareSeconds : customSpeakSeconds);
  };

  const updateCustomSeconds = (mode: 'prepare' | 'speak', nextSeconds: number) => {
    const safeSeconds = Math.min(600, Math.max(5, Math.round(nextSeconds || 30)));
    if (mode === 'prepare') {
      setCustomPrepareSeconds(safeSeconds);
    } else {
      setCustomSpeakSeconds(safeSeconds);
    }
    if (!timerRunning) setTimer(safeSeconds);
  };

  const startTimer = (mode: 'prepare' | 'speak') => {
    setTimerMode(mode);
    const seconds = mode === 'prepare' ? customPrepareSeconds : customSpeakSeconds;
    setTimer(seconds);
    setTimerRunning(true);
  };

  useEffect(() => {
    if (roundKey !== 'speak') {
      setTimer(0);
      setTimerRunning(false);
      return;
    }
    if (!timerRunning) {
      setTimer(timerMode === 'prepare' ? customPrepareSeconds : customSpeakSeconds);
    }
  }, [roundKey, timerMode, customPrepareSeconds, customSpeakSeconds, timerRunning]);

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
    <div className="relative flex h-full w-full min-h-0 flex-col overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-rose-500/40 bg-gradient-to-br from-[#180e2b] via-[#240f2e] to-[#12081c] p-2 sm:p-3 text-white shadow-[0_0_40px_rgba(244,63,94,0.25)] backdrop-blur-md">
      {/* Ambient energetic battle lighting */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 w-[500px] h-[280px] bg-rose-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-1/4 w-[500px] h-[280px] bg-amber-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Top HUD Bar */}
      <div className="relative z-10 mb-1.5 flex shrink-0 items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 px-3 py-1 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <Swords className="h-4 w-4 animate-pulse" />
            <span>Boss Battle</span>
          </div>
          <p className="truncate text-xs sm:text-base font-extrabold text-white/90 drop-shadow-sm">
            {bossName} <span className="text-rose-400">·</span> <span className="text-amber-300 font-bold">{bossTitle}</span>
          </p>
        </div>
        <div className="rounded-xl bg-[#2a133d]/90 border border-purple-400/40 px-3 py-1 text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] text-purple-200 shadow-md">
          Round {viewIndex + 1} / {views.length}
        </div>
      </div>

      {/* Main Arena White Stage Card (High contrast & readability) */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col rounded-2xl sm:rounded-[1.5rem] border-2 border-white/40 bg-white/98 p-3.5 sm:p-5 text-slate-950 shadow-2xl justify-between overflow-hidden">
        {/* VIEW: Intro */}
        {currentView === 'intro' && (
          <div className="flex h-full flex-col items-center justify-center gap-3 sm:gap-4 text-center my-auto">
            {/* Animated Boss Box with Energy Aura */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-rose-500 blur-2xl"
              />
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 border-3 border-rose-500 text-6xl sm:text-7xl shadow-[0_0_25px_rgba(244,63,94,0.6)] select-none"
              >
                {bossAvatar}
              </motion.div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-950">
                {bossName}
              </h2>
              <p className="mt-1.5 text-lg sm:text-2xl lg:text-3xl font-black leading-tight bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                {bossTitle}
              </p>
            </div>

            {/* Boss Health Bar */}
            <div className="w-full max-w-2xl px-2 mt-1">
              <div className="mb-1.5 flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-widest text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="text-rose-600">❤️</span> Boss Health
                </span>
                <span className="font-mono text-rose-600 font-black">{bossHealth}%</span>
              </div>
              <div className="h-7 sm:h-8 overflow-hidden rounded-xl bg-slate-200 border-2 border-slate-300 p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-lg bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 shadow-md transition-all"
                  animate={{ width: `${bossHealth}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW: Challenge Rounds */}
        {currentRound && parsedData && (
          <div className="flex h-full flex-col justify-between gap-2 sm:gap-2.5 flex-1 min-h-0">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div
                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${currentRound.color} px-3.5 py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-md`}
              >
                <Icon className="h-4 w-4" />
                <span>{currentRound.title} Round · Challenge {roundIndex + 1}/3</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 py-1 text-xs sm:text-sm font-bold text-slate-800 shadow-sm">
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">Topic:</span>
                  <span className="font-extrabold text-slate-950">{parsedData.topic}</span>
                </div>
                {parsedData.focus && (
                  <div className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs sm:text-sm font-bold text-indigo-950 shadow-sm">
                    <span className="text-indigo-500 font-semibold uppercase text-[10px] tracking-wider">Focus:</span>
                    <span className="font-extrabold text-indigo-700">{parsedData.focus}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Title & Instructions */}
            <div className="shrink-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                {parsedData.headline}
              </h2>
              <p className="mt-0.5 text-xs sm:text-sm lg:text-base font-bold text-slate-600">
                {parsedData.support}
              </p>
            </div>

            {/* Stage content: 2-column layout for speak round, horizontal grid for rounds 1 & 2 */}
            {roundKey === 'speak' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 flex-1 min-h-0 items-stretch">
                {/* Left Column: Mission, Starter Phrase, Power Words & Checklist (7/12) */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-2 min-h-0">
                  {/* Step 1: Mission */}
                  {parsedData.items[0] && (
                    <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/90 p-2.5 sm:p-3 shadow-sm flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-black uppercase tracking-wider bg-rose-600 text-white shadow-sm">
                          {parsedData.items[0].badge}
                        </span>
                        <span className="text-[10px] font-black text-rose-500 uppercase tracking-wider">Mission Prompt</span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base font-extrabold text-slate-900 leading-snug">
                        {parsedData.items[0].desc}
                      </p>
                    </div>
                  )}

                  {/* Step 2: Starter Phrase */}
                  {parsedData.items[1] && (
                    <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/90 p-2.5 sm:p-3 shadow-sm flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                          {parsedData.items[1].badge}
                        </span>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Start Speaking With</span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base font-black italic text-emerald-950 leading-snug">
                        {parsedData.items[1].desc}
                      </p>
                    </div>
                  )}

                  {/* Step 3: Power Words */}
                  {parsedData.items[2] && (
                    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/90 p-2.5 sm:p-3 shadow-sm flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-black uppercase tracking-wider bg-amber-600 text-white shadow-sm">
                          {parsedData.items[2].badge}
                        </span>
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider">Target Vocabulary</span>
                      </div>
                      <p className="text-[11px] sm:text-xs lg:text-sm font-bold text-amber-950 leading-snug">
                        {parsedData.items[2].desc}
                      </p>
                    </div>
                  )}

                  {/* Checklist / Model Example */}
                  {parsedData.example && (
                    <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50/95 p-2 sm:p-2.5 text-indigo-950 shadow-sm flex items-center gap-2">
                      <span className="text-base sm:text-lg shrink-0">💡</span>
                      <p className="text-[11px] sm:text-xs lg:text-sm font-bold text-indigo-950 leading-tight">
                        {parsedData.example}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Speaking Timer Console (5/12) */}
                <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-slate-950 p-3 sm:p-4 shadow-xl border-2 border-slate-800 text-white flex flex-col justify-between min-h-0">
                  {/* Mode Switcher */}
                  <div className="grid grid-cols-2 rounded-xl border border-slate-800 bg-slate-900 p-1 text-xs font-black uppercase tracking-wider text-slate-400">
                    <button
                      type="button"
                      onClick={() => handleModeChange('prepare')}
                      className={`rounded-lg py-1.5 transition ${
                        timerMode === 'prepare'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                          : 'hover:text-white'
                      }`}
                    >
                      Prepare (3:00)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange('speak')}
                      className={`rounded-lg py-1.5 transition ${
                        timerMode === 'speak'
                          ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md'
                          : 'hover:text-white'
                      }`}
                    >
                      Speak ({customSpeakSeconds}s)
                    </button>
                  </div>

                  {/* Big Digital Clock Display */}
                  <div className="flex flex-col items-center justify-center my-auto py-2 bg-slate-900/90 rounded-2xl border border-slate-800">
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5 flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
                      {timerMode === 'prepare' ? 'Prep Timer' : 'Speak Timer'}
                    </span>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black tabular-nums leading-none text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]">
                      {formatTimerLabel(timer)}
                    </div>
                  </div>

                  {/* Adjuster & Start Button Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-slate-900 rounded-xl border border-slate-800 p-1">
                      <button
                        type="button"
                        onClick={() => updateCustomSeconds(timerMode, activeSeconds - 5)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-white shadow-sm hover:bg-slate-700 active:scale-95"
                        aria-label="Decrease seconds"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-mono font-bold text-amber-300 text-xs">
                        {activeSeconds}s
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCustomSeconds(timerMode, activeSeconds + 5)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-white shadow-sm hover:bg-slate-700 active:scale-95"
                        aria-label="Increase seconds"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => (timerRunning ? setTimerRunning(false) : startTimer(timerMode))}
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-black text-slate-950 shadow-lg transition hover:scale-105 active:scale-95 ${
                        timerRunning
                          ? 'bg-amber-400 hover:bg-amber-300 shadow-amber-400/30'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-500/30'
                      }`}
                    >
                      {timerRunning ? (
                        <>
                          <RotateCcw className="h-4 w-4" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 fill-current" />
                          <span>Start Timer</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Challenges 1 and 2 (remember and use) */
              <div className="flex flex-col justify-between gap-2.5 flex-1 min-h-0">
                <div
                  className={`grid gap-2.5 sm:gap-3.5 flex-1 min-h-0 ${
                    parsedData.items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
                  }`}
                >
                  {parsedData.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      className={`flex flex-col justify-between rounded-2xl border-2 p-3 sm:p-4 shadow-md transition-all ${item.bg} ${item.border}`}
                    >
                      <div>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span
                            className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-black uppercase tracking-wider shadow-sm ${item.badgeBg}`}
                          >
                            {item.badge}
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Step {idx + 1}
                          </span>
                        </div>
                        <h3 className={`text-base sm:text-lg lg:text-xl font-black tracking-tight leading-snug ${item.text}`}>
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                          {item.desc}
                        </p>
                      </div>

                      {item.example && (
                        <div className="mt-2 rounded-xl border border-slate-200/90 bg-white/95 px-2.5 py-1.5 text-xs sm:text-sm font-bold text-slate-900 shadow-sm">
                          <span className="mr-1.5 font-black uppercase text-[10px] tracking-wider text-slate-500">Ex:</span>
                          <span className="italic font-black text-slate-950">"{item.example}"</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {parsedData.example && (
                  <div className="flex items-start gap-2.5 rounded-2xl border-2 border-amber-300 bg-amber-50/95 p-2.5 sm:p-3 text-amber-950 shadow-sm shrink-0">
                    <span className="shrink-0 text-xl sm:text-2xl">💡</span>
                    <div className="min-w-0 text-xs sm:text-sm">
                      <span className="font-black uppercase tracking-wider text-amber-900 text-[10px] mr-1.5">
                        Model Example:
                      </span>
                      <span className="font-bold italic text-slate-950">
                        "{parsedData.example}"
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* VIEW: Finish / Victory */}
        {currentView === 'finish' && (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center my-auto">
            <motion.div
              animate={isComplete ? { scale: [1, 1.15, 1], rotate: [0, -6, 6, 0] } : undefined}
              transition={{ duration: 1.5, repeat: isComplete ? Infinity : 0, repeatDelay: 1.2 }}
            >
              <Trophy className="h-24 w-24 sm:h-32 sm:w-32 text-amber-400 filter drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]" />
            </motion.div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-950">
              {isComplete ? 'Boss Defeated! 👑' : 'Finish the Challenge'}
            </h2>
            {isComplete && (
              <div className="rounded-2xl bg-gradient-to-r from-yellow-400 via-emerald-400 to-purple-500 p-1 shadow-xl shadow-yellow-500/20 max-w-xl w-full">
                <div className="rounded-xl bg-white px-5 py-4">
                  <p className="text-2xl sm:text-4xl font-black leading-tight text-slate-950">Excellent Speaking!</p>
                  <p className="mt-1 text-sm sm:text-base font-bold text-slate-600">Challenge successfully completed.</p>
                </div>
              </div>
            )}
            <div className="grid w-full max-w-2xl gap-2.5 sm:grid-cols-3">
              {roundMeta.map((round, index) => (
                <div
                  key={round.key}
                  className={`rounded-2xl p-3 text-base sm:text-xl font-black transition-all shadow-sm ${
                    hits[index]
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-emerald-500/30'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {hits[index] ? <Check className="mx-auto mb-1 h-6 w-6 stroke-[3]" /> : <span className="block mb-1 font-mono text-base text-slate-400">{index + 1}</span>}
                  {round.title}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Arena Controls */}
        <div className="mt-auto flex shrink-0 items-center justify-between gap-3 pt-2 border-t-2 border-slate-100">
          <button
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 sm:px-5 text-sm sm:text-base font-black text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <button
            onClick={reset}
            className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-xl border-2 border-slate-200 bg-slate-50 px-4 sm:px-5 text-sm sm:text-base font-black text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-950"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Reset</span>
          </button>
          {currentRound ? (
            <button
              onClick={hitBoss}
              className="inline-flex h-11 sm:h-12 items-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 sm:px-7 text-sm sm:text-lg font-black text-white shadow-lg shadow-red-600/30 transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Hit Boss ⚔️</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={next}
              disabled={viewIndex === views.length - 1}
              className="inline-flex h-11 sm:h-12 items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 sm:px-7 text-sm sm:text-lg font-black text-white shadow-lg shadow-indigo-600/30 transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>Next</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
