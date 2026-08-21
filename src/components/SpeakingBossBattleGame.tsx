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
  fallbackTopic: string
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
      example: rawExample,
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
  return {
    headline: `Speaking Challenge`,
    topic,
    focus,
    example: rawExample,
    support: `Prepare your ideas (3 min), then speak for ${formatDurationText(speakSeconds)} without stopping.`,
    items: [
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
  const parsedData = roundKey ? parseBossPrompt(prompt, roundKey, customSpeakSeconds, bossTitle) : null;
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

                    {item.example && (
                      <div className="mt-3 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 shadow-sm">
                        <span className="mr-1.5 font-black uppercase text-[10px] tracking-wider text-slate-500">Ex:</span>
                        <span className="italic text-slate-950">"{item.example}"</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {parsedData.example && (
                <div className="flex items-start gap-3 rounded-2xl border-2 border-amber-300 bg-amber-50/95 p-3.5 sm:p-4 text-amber-950 shadow-md">
                  <span className="shrink-0 text-xl sm:text-2xl">💡</span>
                  <div className="min-w-0 text-xs sm:text-sm lg:text-base">
                    <div className="font-black uppercase tracking-wider text-amber-800 text-[11px] sm:text-xs mb-1">
                      Model Example to Guide You:
                    </div>
                    <p className="font-bold italic text-slate-950 leading-relaxed">
                      "{parsedData.example}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {roundKey === 'speak' && (
              <div className="grid gap-3 rounded-2xl bg-slate-100 p-3 sm:p-4 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="mb-2 grid grid-cols-2 rounded-xl border border-slate-200 bg-white p-1 text-xs sm:text-sm font-black uppercase tracking-widest text-slate-500 shadow-sm">
                    <button
                      type="button"
                      onClick={() => handleModeChange('prepare')}
                      className={`rounded-lg px-3 py-2 transition ${timerMode === 'prepare' ? 'bg-slate-950 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                    >
                      Prepare (3:00)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange('speak')}
                      className={`rounded-lg px-3 py-2 transition ${timerMode === 'speak' ? 'bg-slate-950 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                    >
                      Speak ({customSpeakSeconds}s)
                    </button>
                  </div>
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
                    {timerMode === 'prepare' ? 'Prep Timer' : 'Speak Timer'}
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
