import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ClipboardCheck,
  MessageCircle,
  Mic,
  PartyPopper,
  Sparkles,
  Star,
  Target,
  Trophy,
  X
} from 'lucide-react';
import { avatars, studentConfig } from '../config';
import { UserProgress } from '../types';

type StudentKind = 'niño' | 'adolescente' | 'adulto';
type Phase = 'intro' | 'questions' | 'reading' | 'speaking' | 'results';

type EntranceQuestion = {
  id: string;
  skill: string;
  level: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
};

type ReadingTask = {
  title: string;
  text: string;
  checks: string[];
};

type SpeakingTask = {
  title: string;
  prompts: string[];
};

type PlacementProfile = {
  label: string;
  title: string;
  subtitle: string;
  gradient: string;
  accent: string;
  questions: EntranceQuestion[];
  reading: ReadingTask;
  speaking: SpeakingTask;
};

const profiles: Record<StudentKind, PlacementProfile> = {
  adulto: {
    label: 'Adult Placement',
    title: 'Examen de Ingreso Adultos',
    subtitle: 'Diagnóstico completo para ubicar presente, pasado, futuro, perfectos, continuos, modales y condicionales.',
    gradient: 'from-slate-950 via-indigo-950 to-cyan-900',
    accent: 'text-cyan-200',
    questions: [
      { id: 'a1', skill: 'Present simple', level: 'A1', topic: 'present-simple', question: 'She ___ coffee every morning.', options: ['drink', 'drinks', 'is drinking'], correctIndex: 1 },
      { id: 'a2', skill: 'Present continuous', level: 'A1-A2', topic: 'present-continuous', question: 'Right now, they ___ a meeting.', options: ['have', 'are having', 'had'], correctIndex: 1 },
      { id: 'a3', skill: 'Past simple', level: 'A2', topic: 'past-simple', question: 'We ___ the client yesterday.', options: ['called', 'call', 'have called'], correctIndex: 0 },
      { id: 'a4', skill: 'Prepositions of time', level: 'A2', topic: 'prepositions', question: 'The meeting starts ___ 9:00 a.m.', options: ['in', 'on', 'at'], correctIndex: 2 },
      { id: 'a5', skill: 'Future forms', level: 'A2-B1', topic: 'future', question: 'Look at those clouds. It ___ rain.', options: ['will', 'is going to', 'has to'], correctIndex: 1 },
      { id: 'a6', skill: 'Present perfect', level: 'B1', topic: 'present-perfect', question: 'I ___ this report three times this week.', options: ['read', 'have read', 'was reading'], correctIndex: 1 },
      { id: 'a7', skill: 'Past continuous', level: 'B1', topic: 'past-continuous', question: 'I was cooking when you ___.', options: ['called', 'were calling', 'have called'], correctIndex: 0 },
      { id: 'a8', skill: 'Modals', level: 'B1', topic: 'modals', question: 'You ___ wear a helmet on a motorcycle. It is required.', options: ['can', 'must', 'might'], correctIndex: 1 },
      { id: 'a9', skill: 'First conditional', level: 'B1', topic: 'conditionals', question: 'If she studies tonight, she ___ the exam.', options: ['passes', 'will pass', 'would pass'], correctIndex: 1 },
      { id: 'a10', skill: 'Past perfect', level: 'B2', topic: 'past-perfect', question: 'By the time I arrived, the meeting ___.', options: ['started', 'has started', 'had started'], correctIndex: 2 },
      { id: 'a11', skill: 'Present perfect continuous', level: 'B2', topic: 'perfect-continuous', question: 'They ___ on this project since January.', options: ['work', 'have been working', 'worked'], correctIndex: 1 },
      { id: 'a12', skill: 'Second conditional', level: 'B2', topic: 'conditionals', question: 'If I ___ more time, I would travel more.', options: ['have', 'had', 'will have'], correctIndex: 1 },
      { id: 'a13', skill: 'Future perfect', level: 'B2-C1', topic: 'future-perfect', question: 'By next Friday, we ___ the project.', options: ['will finish', 'will have finished', 'have finished'], correctIndex: 1 },
      { id: 'a14', skill: 'Past perfect continuous', level: 'C1', topic: 'past-perfect-continuous', question: 'She was exhausted because she ___ all night.', options: ['worked', 'had been working', 'has been working'], correctIndex: 1 },
      { id: 'a15', skill: 'Future perfect continuous', level: 'C1', topic: 'future-perfect-continuous', question: 'By December, he ___ English for five years.', options: ['will study', 'will have been studying', 'has studied'], correctIndex: 1 },
      { id: 'a16', skill: 'Advanced structures', level: 'C1', topic: 'advanced', question: 'Not only ___ the issue, but she also proposed a solution.', options: ['she identified', 'did she identify', 'has she identify'], correctIndex: 1 }
    ],
    reading: {
      title: 'Reading: Workplace Change',
      text: 'A small company has been growing quickly for the last two years. Last month, the manager introduced flexible schedules because several employees had requested a better work-life balance. If the plan works, the company will keep it permanently. However, some team leaders believe communication might become more difficult unless everyone writes clear updates at the end of each day.',
      checks: [
        'Ask the student to read the text aloud.',
        'Ask: Why did the manager introduce flexible schedules?',
        'Ask: What may happen if people do not write clear updates?'
      ]
    },
    speaking: {
      title: 'Speaking with Tutor',
      prompts: [
        'Tell me about yourself.',
        'Tell me about your daily routine and your work or study goals.',
        'Describe something important you did last week.',
        'What are you going to do in the next three months?',
        'Have you ever had to solve a difficult problem? What happened?',
        'If you could improve one professional skill, what would you improve and why?'
      ]
    }
  },
  adolescente: {
    label: 'Teen Placement',
    title: 'Examen de Ingreso Teens',
    subtitle: 'Diagnóstico con temas reales para revisar tiempos verbales, modales, condicionales, lectura y conversación.',
    gradient: 'from-violet-950 via-fuchsia-900 to-sky-900',
    accent: 'text-pink-200',
    questions: [
      { id: 't1', skill: 'Present simple', level: 'A1', topic: 'present-simple', question: 'My best friend ___ video games after school.', options: ['play', 'plays', 'is play'], correctIndex: 1 },
      { id: 't2', skill: 'There is / are', level: 'A1', topic: 'basics', question: 'There ___ three apps on my home screen.', options: ['is', 'are', 'am'], correctIndex: 1 },
      { id: 't3', skill: 'Present continuous', level: 'A2', topic: 'present-continuous', question: 'I can’t talk now. I ___ homework.', options: ['do', 'am doing', 'did'], correctIndex: 1 },
      { id: 't4', skill: 'Past simple', level: 'A2', topic: 'past-simple', question: 'Yesterday we ___ a new song in class.', options: ['learned', 'learn', 'are learning'], correctIndex: 0 },
      { id: 't5', skill: 'Prepositions of place', level: 'A2', topic: 'prepositions', question: 'My headphones are ___ my backpack.', options: ['in', 'on Monday', 'at 8'], correctIndex: 0 },
      { id: 't6', skill: 'Comparatives', level: 'A2-B1', topic: 'comparatives', question: 'This movie is ___ than the first one.', options: ['good', 'better', 'best'], correctIndex: 1 },
      { id: 't7', skill: 'Future', level: 'B1', topic: 'future', question: 'Next weekend, I ___ visit my cousins.', options: ['am going to', 'went to', 'have'], correctIndex: 0 },
      { id: 't8', skill: 'Present perfect', level: 'B1', topic: 'present-perfect', question: 'I ___ this series before.', options: ['saw', 'have seen', 'am seeing'], correctIndex: 1 },
      { id: 't9', skill: 'Modals', level: 'B1', topic: 'modals', question: 'You ___ post private photos without permission.', options: ['shouldn’t', 'don’t have', 'could to'], correctIndex: 0 },
      { id: 't10', skill: 'Past continuous', level: 'B1-B2', topic: 'past-continuous', question: 'I ___ music when my phone died.', options: ['listened', 'was listening to', 'have listened'], correctIndex: 1 },
      { id: 't11', skill: 'Conditionals', level: 'B2', topic: 'conditionals', question: 'If I had more followers, I ___ start a podcast.', options: ['will', 'would', 'did'], correctIndex: 1 },
      { id: 't12', skill: 'Passive voice', level: 'B2', topic: 'passive', question: 'The video ___ by millions of people.', options: ['watched', 'was watched', 'has watching'], correctIndex: 1 },
      { id: 't13', skill: 'Past perfect', level: 'B2', topic: 'past-perfect', question: 'When I opened the app, my friend ___ the challenge already.', options: ['finished', 'had finished', 'has finished'], correctIndex: 1 },
      { id: 't14', skill: 'Future perfect', level: 'B2-C1', topic: 'future-perfect', question: 'By the end of the year, I ___ all the episodes.', options: ['will watch', 'will have watched', 'watched'], correctIndex: 1 },
      { id: 't15', skill: 'Present perfect continuous', level: 'B2', topic: 'present-perfect-continuous', question: 'She ___ guitar since she was ten.', options: ['plays', 'has been playing', 'played'], correctIndex: 1 },
      { id: 't16', skill: 'Past perfect continuous', level: 'C1', topic: 'past-perfect-continuous', question: 'They were tired because they ___ for hours.', options: ['had been practicing', 'have practiced', 'practice'], correctIndex: 0 },
      { id: 't17', skill: 'Future perfect continuous', level: 'C1', topic: 'future-perfect-continuous', question: 'Next month, he ___ with that team for a year.', options: ['will train', 'will have been training', 'has trained'], correctIndex: 1 },
      { id: 't18', skill: 'Advanced linking', level: 'B2-C1', topic: 'advanced', question: 'I enjoyed the game, ___ it was too expensive.', options: ['although', 'because', 'so'], correctIndex: 0 }
    ],
    reading: {
      title: 'Reading: A Digital Challenge',
      text: 'Mia has been learning English through videos and online games. Last year, she joined an international gaming team and had to speak English every weekend. At first, she was nervous, but she improved because her teammates corrected her kindly. If she keeps practicing, she will probably feel confident enough to join a global tournament next summer.',
      checks: [
        'Ask the student to read the text aloud.',
        'Ask: Why did Mia need English every weekend?',
        'Ask: What will probably happen if she keeps practicing?'
      ]
    },
    speaking: {
      title: 'Speaking with Tutor',
      prompts: [
        'Tell me about yourself.',
        'Tell me about your favorite app, game, sport, artist, or hobby.',
        'What did you do last weekend?',
        'What are you going to do during your next vacation?',
        'Have you ever spoken English with someone online?',
        'If you could create a YouTube channel, what would it be about?'
      ]
    }
  },
  niño: {
    label: 'Kids Placement',
    title: 'Examen de Ingreso Kids',
    subtitle: 'Actividad diagnóstica visual para ubicar vocabulario, frases simples, lectura inicial y speaking con tutor.',
    gradient: 'from-cyan-600 via-fuchsia-600 to-amber-400',
    accent: 'text-yellow-100',
    questions: [
      { id: 'k1', skill: 'Colors', level: 'Starter', topic: 'colors', question: 'What color is the sun?', options: ['Blue', 'Yellow', 'Black'], correctIndex: 1 },
      { id: 'k2', skill: 'Numbers', level: 'Starter', topic: 'numbers', question: 'How many stars? ⭐ ⭐ ⭐ ⭐', options: ['Two', 'Four', 'Six'], correctIndex: 1 },
      { id: 'k3', skill: 'Animals', level: 'Starter', topic: 'animals', question: 'What animal says “meow”?', options: ['Cat', 'Dog', 'Fish'], correctIndex: 0 },
      { id: 'k4', skill: 'Greetings', level: 'A1 Kids', topic: 'greetings', question: 'In the morning, we say:', options: ['Good night', 'Good morning', 'Goodbye'], correctIndex: 1 },
      { id: 'k5', skill: 'Prepositions of place', level: 'A1 Kids', topic: 'prepositions', question: 'The ball is ___ the table.', options: ['under', 'happy', 'run'], correctIndex: 0 },
      { id: 'k6', skill: 'Family', level: 'A1 Kids', topic: 'family', question: 'My mother is my:', options: ['Mom', 'Brother', 'Teacher'], correctIndex: 0 },
      { id: 'k7', skill: 'Present simple', level: 'A1 Kids', topic: 'present-simple', question: 'I ___ apples.', options: ['like', 'likes', 'liking'], correctIndex: 0 },
      { id: 'k8', skill: 'Can', level: 'A1 Kids', topic: 'modals', question: 'I ___ swim.', options: ['can', 'am', 'is'], correctIndex: 0 },
      { id: 'k9', skill: 'Present continuous', level: 'A1-A2 Kids', topic: 'present-continuous', question: 'The boy ___ running.', options: ['is', 'are', 'am'], correctIndex: 0 },
      { id: 'k10', skill: 'Present perfect challenge', level: 'A2 Kids', topic: 'present-perfect', question: 'I ___ seen a rainbow.', options: ['have', 'am', 'was'], correctIndex: 0 },
      { id: 'k11', skill: 'Past perfect challenge', level: 'B1 Kids', topic: 'past-perfect', question: 'When Mom arrived, I ___ finished my homework.', options: ['have', 'had', 'will'], correctIndex: 1 },
      { id: 'k12', skill: 'Future perfect challenge', level: 'B1-B2 Kids', topic: 'future-perfect', question: 'By tomorrow, I ___ finished my drawing.', options: ['will have', 'have', 'had'], correctIndex: 0 },
      { id: 'k13', skill: 'Present perfect continuous challenge', level: 'B1 Kids', topic: 'present-perfect-continuous', question: 'I ___ been reading for ten minutes.', options: ['have', 'am', 'was'], correctIndex: 0 },
      { id: 'k14', skill: 'Past perfect continuous challenge', level: 'B2 Kids', topic: 'past-perfect-continuous', question: 'I was tired because I ___ been running.', options: ['have', 'had', 'will'], correctIndex: 1 },
      { id: 'k15', skill: 'Future perfect continuous challenge', level: 'B2 Kids', topic: 'future-perfect-continuous', question: 'By dinner time, I ___ been playing for two hours.', options: ['will have', 'have', 'had'], correctIndex: 0 }
    ],
    reading: {
      title: 'Reading: Tom and Luna',
      text: 'Tom has a little dog. Her name is Luna. Luna is brown and white. Every morning, Tom gives Luna food and water. Today, Luna is playing in the garden.',
      checks: [
        'Ask the child to read or repeat the text with help.',
        'Ask: What is the dog’s name?',
        'Ask: What color is Luna?'
      ]
    },
    speaking: {
      title: 'Speaking with Tutor',
      prompts: [
        'Tell me about yourself.',
        'What is your name?',
        'How old are you?',
        'What is your favorite color?',
        'Tell me about one animal you like.',
        'Show me or describe something in your room.'
      ]
    }
  }
};

const rubricItems = [
  { key: 'accuracy', label: 'Grammar accuracy' },
  { key: 'vocabulary', label: 'Vocabulary range' },
  { key: 'fluency', label: 'Fluency' },
  { key: 'comprehension', label: 'Comprehension' },
  { key: 'pronunciation', label: 'Pronunciation' }
] as const;

function normalizeType(value?: string): StudentKind {
  const type = value?.toLowerCase();
  if (type === 'niño') return 'niño';
  if (type === 'adolescente') return 'adolescente';
  return 'adulto';
}

function levelFromScore(totalPercent: number, kind: StudentKind) {
  if (kind === 'niño') {
    if (totalPercent < 35) return 'Kids Starter';
    if (totalPercent < 65) return 'Kids A1';
    if (totalPercent < 82) return 'Kids A1+';
    return 'Kids A2 Ready';
  }
  if (kind === 'adolescente') {
    if (totalPercent < 25) return 'Teens Starter / A1';
    if (totalPercent < 45) return 'Teens A2';
    if (totalPercent < 65) return 'Teens B1';
    if (totalPercent < 82) return 'Teens B2';
    return 'Teens C1 Potential';
  }
  if (totalPercent < 25) return 'A1 Inicial';
  if (totalPercent < 45) return 'A2 Básico';
  if (totalPercent < 65) return 'B1 Intermedio';
  if (totalPercent < 82) return 'B2 Intermedio Alto';
  return 'C1 Avanzado';
}

function recommendedStart(level: string) {
  if (level.includes('Starter') || level.includes('A1 Inicial')) return 'Empezar desde fundamentos: saludos, verbo to be, presente simple y vocabulario esencial.';
  if (level.includes('A1') || level.includes('A2')) return 'Empezar en básico alto: presente, pasado simple, futuro con going to/will y preguntas frecuentes.';
  if (level.includes('B1')) return 'Empezar en intermedio: perfectos, continuos, modales, conectores y conversación guiada.';
  if (level.includes('B2')) return 'Empezar en intermedio alto: condicionales, voz pasiva, perfect continuous, fluidez y precisión.';
  return 'Empezar con módulos avanzados: inversión, matices, idioms, argumentación, writing y speaking profesional.';
}

export function EntranceAssessment({ progress, onClose }: { progress?: UserProgress; onClose: (level?: string) => void }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [readingScores, setReadingScores] = useState<Record<string, number>>({
    accuracy: 3,
    vocabulary: 3,
    fluency: 3,
    comprehension: 3,
    pronunciation: 3
  });
  const [speakingScores, setSpeakingScores] = useState<Record<string, number>>({
    accuracy: 3,
    vocabulary: 3,
    fluency: 3,
    comprehension: 3,
    pronunciation: 3
  });

  const kind = normalizeType(progress?.studentType);
  const profile = profiles[kind];
  const studentName = progress?.studentName?.trim() || studentConfig.name;
  const avatarUrl = (progress?.avatarId && avatars[progress.avatarId as keyof typeof avatars]) || studentConfig.avatarUrl;
  const currentQuestion = profile.questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;
  const writtenCorrect = profile.questions.filter((q) => answers[q.id] === q.correctIndex).length;
  const missedQuestions = profile.questions.filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.correctIndex);
  const writtenPercent = Math.round((writtenCorrect / profile.questions.length) * 100);
  const readingPercent = Math.round((Object.values(readingScores).reduce((sum, value) => sum + value, 0) / 25) * 100);
  const speakingPercent = Math.round((Object.values(speakingScores).reduce((sum, value) => sum + value, 0) / 25) * 100);
  const totalPercent = Math.round(writtenPercent * 0.5 + readingPercent * 0.2 + speakingPercent * 0.3);
  const estimatedLevel = levelFromScore(totalPercent, kind);

  const weakTopics = useMemo(() => {
    const missed = profile.questions.filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.correctIndex);
    const topicLabels = missed.map((q) => `${q.skill} (${q.level})`);
    const oralGaps = [
      ...rubricItems.filter((item) => readingScores[item.key] <= 2).map((item) => `Reading: ${item.label}`),
      ...rubricItems.filter((item) => speakingScores[item.key] <= 2).map((item) => `Speaking: ${item.label}`)
    ];
    return [...topicLabels, ...oralGaps].slice(0, 8);
  }, [answers, profile.questions, readingScores, speakingScores]);

  const selectAnswer = (index: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: index }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < profile.questions.length - 1) {
      setCurrentQuestionIndex((value) => value + 1);
      return;
    }
    setPhase('reading');
  };

  const finish = () => {
    setPhase('results');
    confetti({
      particleCount: 220,
      spread: 120,
      origin: { y: 0.55 },
      colors: ['#22d3ee', '#f472b6', '#facc15', '#34d399', '#818cf8']
    });
  };

  const ScoreSlider = ({
    item,
    scores,
    setScores
  }: {
    item: typeof rubricItems[number];
    scores: Record<string, number>;
    setScores: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  }) => (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm font-black uppercase tracking-widest text-white/85">{item.label}</span>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950">{scores[item.key]} / 5</span>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        value={scores[item.key]}
        onChange={(event) => setScores((prev) => ({ ...prev, [item.key]: Number(event.target.value) }))}
        className="w-full accent-yellow-300"
      />
    </div>
  );

  return (
    <div className={`fixed inset-0 z-[220] overflow-y-auto bg-gradient-to-br ${profile.gradient} text-white`}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.65, 0.35, 0.65] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="mb-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onClose()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Salir
          </button>
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-black uppercase tracking-widest text-white/80 sm:flex">
            <ClipboardCheck className="h-4 w-4 text-yellow-200" />
            {profile.label}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.main
              key="intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="grid flex-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <section>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-widest backdrop-blur">
                  <Sparkles className="h-5 w-5 text-yellow-200" />
                  Nueva evaluación de ingreso
                </div>
                <h1 className="text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">{profile.title}</h1>
                <p className={`mt-6 max-w-2xl text-xl font-bold leading-relaxed ${profile.accent} sm:text-2xl`}>
                  {profile.subtitle}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Preguntas', Brain],
                    ['Lectura', BookOpen],
                    ['Speaking', Mic]
                  ].map(([label, Icon]) => {
                    const RealIcon = Icon as typeof Brain;
                    return (
                      <div key={label as string} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                        <RealIcon className="mb-3 h-8 w-8 text-yellow-200" />
                        <div className="text-lg font-black">{label as string}</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-5">
                  <img src={avatarUrl} alt={studentName} className="h-28 w-28 rounded-3xl border-4 border-white/30 object-cover shadow-xl sm:h-36 sm:w-36" />
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-white/60">Estudiante</p>
                    <h2 className="text-4xl font-black">{studentName}</h2>
                  </div>
                </div>
                <div className="mt-8 rounded-3xl bg-black/25 p-5">
                  <p className="text-lg font-bold leading-relaxed text-white/85">
                    Esta copia del examen no reemplaza el examen actual. El tutor puede evaluar lectura y speaking en vivo, y al final se genera un diagnóstico visual con nivel sugerido y temas prioritarios.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPhase('questions')}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-xl font-black text-slate-950 shadow-2xl transition hover:scale-[1.02]"
                >
                  Empezar examen de ingreso
                  <ArrowRight className="h-6 w-6" />
                </button>
              </section>
            </motion.main>
          )}

          {phase === 'questions' && (
            <motion.main
              key={`questions-${currentQuestion.id}`}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-white/60">Fase 1 de 3</p>
                  <h2 className="text-4xl font-black sm:text-5xl">Preguntas de Nivel</h2>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
                  {answeredCount} / {profile.questions.length}
                </div>
              </div>

              <section className="rounded-[2rem] border border-white/20 bg-white p-5 text-slate-950 shadow-2xl sm:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-indigo-700">{currentQuestion.level}</span>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-cyan-700">{currentQuestion.skill}</span>
                </div>
                <h3 className="mb-8 text-3xl font-black leading-tight sm:text-5xl">{currentQuestion.question}</h3>
                <div className="grid gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = answers[currentQuestion.id] === index;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectAnswer(index)}
                        className={`flex items-center justify-between rounded-2xl border-2 p-5 text-left text-xl font-black transition ${
                          isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-800 shadow-lg' : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
                        }`}
                      >
                        {option}
                        {isSelected && <Check className="h-6 w-6" />}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  disabled={answers[currentQuestion.id] === undefined}
                  onClick={nextQuestion}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-5 text-xl font-black text-white transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {currentQuestionIndex < profile.questions.length - 1 ? 'Siguiente' : 'Ir a lectura'}
                  <ArrowRight className="h-6 w-6" />
                </button>
              </section>
            </motion.main>
          )}

          {phase === 'reading' && (
            <motion.main
              key="reading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="grid flex-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <section className="rounded-[2rem] border border-white/20 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-widest text-cyan-700">
                  <BookOpen className="h-5 w-5" />
                  Fase 2 de 3
                </div>
                <h2 className="text-4xl font-black sm:text-5xl">{profile.reading.title}</h2>
                <p className="mt-6 rounded-3xl bg-slate-50 p-6 text-2xl font-bold leading-relaxed text-slate-800">
                  {profile.reading.text}
                </p>
                <div className="mt-6 grid gap-3">
                  {profile.reading.checks.map((check, index) => (
                    <div key={check} className="flex gap-3 rounded-2xl bg-cyan-50 p-4 text-lg font-bold text-cyan-950">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-black text-white">{index + 1}</span>
                      {check}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/20 bg-black/25 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                  <ClipboardCheck className="h-7 w-7 text-yellow-200" />
                  Evaluación del tutor
                </h3>
                <div className="grid gap-3">
                  {rubricItems.map((item) => (
                    <ScoreSlider key={item.key} item={item} scores={readingScores} setScores={setReadingScores} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPhase('speaking')}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-6 py-5 text-xl font-black text-slate-950 shadow-xl transition hover:scale-[1.02]"
                >
                  Ir a speaking
                  <ArrowRight className="h-6 w-6" />
                </button>
              </section>
            </motion.main>
          )}

          {phase === 'speaking' && (
            <motion.main
              key="speaking"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="grid flex-1 gap-5 lg:grid-cols-[1fr_1fr]"
            >
              <section className="rounded-[2rem] border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-widest">
                  <Mic className="h-5 w-5 text-yellow-200" />
                  Fase 3 de 3
                </div>
                <h2 className="mb-6 text-4xl font-black sm:text-5xl">{profile.speaking.title}</h2>
                <div className="grid gap-4">
                  {profile.speaking.prompts.map((prompt, index) => (
                    <div key={prompt} className="rounded-3xl border border-white/15 bg-white p-5 text-slate-950 shadow-xl">
                      <p className="mb-2 text-sm font-black uppercase tracking-widest text-indigo-500">Tutor question {index + 1}</p>
                      <p className="text-2xl font-black leading-snug">{prompt}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/20 bg-black/25 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                  <MessageCircle className="h-7 w-7 text-yellow-200" />
                  Evaluación del tutor
                </h3>
                <div className="grid gap-3">
                  {rubricItems.map((item) => (
                    <ScoreSlider key={item.key} item={item} scores={speakingScores} setScores={setSpeakingScores} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={finish}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-5 text-xl font-black text-slate-950 shadow-xl transition hover:scale-[1.02]"
                >
                  Generar diagnóstico
                  <Sparkles className="h-6 w-6" />
                </button>
              </section>
            </motion.main>
          )}

          {phase === 'results' && (
            <motion.main
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center"
            >
              <section className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white p-5 text-slate-950 shadow-2xl sm:p-8">
                <motion.div
                  className="absolute right-6 top-6 text-yellow-400"
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <PartyPopper className="h-20 w-20" />
                </motion.div>
                <div className="relative z-10">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-black uppercase tracking-widest text-indigo-700">
                    <Trophy className="h-5 w-5" />
                    Resumen completo
                  </div>
                  <h2 className="max-w-3xl text-5xl font-black leading-none sm:text-7xl">Nivel sugerido: {estimatedLevel}</h2>
                  <p className="mt-5 max-w-3xl text-xl font-bold leading-relaxed text-slate-600">{recommendedStart(estimatedLevel)}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-4">
                    {[
                      ['General', totalPercent, Target],
                      ['Preguntas', writtenPercent, Brain],
                      ['Lectura', readingPercent, BookOpen],
                      ['Speaking', speakingPercent, Mic]
                    ].map(([label, value, Icon]) => {
                      const RealIcon = Icon as typeof Target;
                      return (
                        <div key={label as string} className="rounded-3xl bg-slate-50 p-5 shadow-inner">
                          <RealIcon className="mb-4 h-8 w-8 text-indigo-600" />
                          <p className="text-sm font-black uppercase tracking-widest text-slate-400">{label as string}</p>
                          <p className="text-5xl font-black text-slate-950">{value as number}%</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-6 text-white">
                      <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                        <Star className="h-7 w-7 text-yellow-200" />
                        Temas más necesarios de mejorar
                      </h3>
                      <div className="grid gap-3">
                        {(weakTopics.length ? weakTopics : ['Mantener fluidez, precisión y vocabulario activo con práctica conversacional.']).map((topic) => (
                          <div key={topic} className="rounded-2xl bg-white/15 px-4 py-3 text-lg font-black backdrop-blur">
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-slate-950 p-6 text-white">
                      <h3 className="mb-4 text-2xl font-black">Cobertura evaluada</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'present simple',
                          'present continuous',
                          'past simple',
                          'past continuous',
                          'prepositions',
                          'future',
                          'present perfect',
                          'past perfect',
                          'future perfect',
                          'present perfect continuous',
                          'past perfect continuous',
                          'future perfect continuous',
                          'modals',
                          'conditionals',
                          'reading',
                          'speaking'
                        ].map((topic) => (
                          <span key={topic} className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white/85">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-2xl font-black text-slate-950">
                      <X className="h-7 w-7 text-rose-500" />
                      Preguntas de gramática por revisar
                    </h3>
                    {missedQuestions.length > 0 ? (
                      <div className="grid gap-3">
                        {missedQuestions.map((question) => (
                          <div key={question.id} className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-rose-700">
                                {question.skill}
                              </span>
                              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-600">
                                {question.level}
                              </span>
                            </div>
                            <p className="text-lg font-black text-slate-950">{question.question}</p>
                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                              <div className="rounded-xl bg-rose-50 p-3">
                                <p className="text-xs font-black uppercase tracking-widest text-rose-500">Respuesta del estudiante</p>
                                <p className="text-base font-bold text-rose-900">{question.options[answers[question.id]]}</p>
                              </div>
                              <div className="rounded-xl bg-emerald-50 p-3">
                                <p className="text-xs font-black uppercase tracking-widest text-emerald-600">Respuesta correcta</p>
                                <p className="text-base font-bold text-emerald-900">{question.options[question.correctIndex]}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl bg-emerald-50 p-5 text-lg font-black text-emerald-900">
                        No hubo errores en la fase de preguntas de gramática.
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => onClose(estimatedLevel)}
                      className="flex-1 rounded-2xl bg-indigo-600 px-6 py-5 text-xl font-black text-white shadow-xl transition hover:bg-indigo-700"
                    >
                      Guardar nivel sugerido
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPhase('intro');
                        setCurrentQuestionIndex(0);
                        setAnswers({});
                      }}
                      className="rounded-2xl bg-slate-100 px-6 py-5 text-xl font-black text-slate-700 transition hover:bg-slate-200"
                    >
                      Repetir evaluación
                    </button>
                  </div>
                </div>
              </section>
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
