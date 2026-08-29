/**
 * SlideRenderer — renders a single ClassSlide exactly as PresentationViewer does,
 * but as an embeddable component (no fixed overlay).
 *
 * compact=true: renders at 1280×720 then CSS-scales to the wrapper size,
 * preserving 16:9 aspect ratio and exact typography from the real player.
 */
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Check, Play, ArrowRight, Target, BookOpen, Users, MessageSquare, HelpCircle, Sparkles, Eye, EyeOff, Zap, Volume2, RotateCcw, Layers3, Lightbulb, BookmarkPlus, CheckCircle2, ChevronRight, ChevronLeft, VolumeX } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { vocabService } from '../lib/vocabService';
import { SpinningWheel } from './SpinningWheel';
import { MatchingGame } from './MatchingGame';
import { MysteryPuzzleGame } from './MysteryPuzzleGame';
import { EmojiMadnessGame } from './EmojiMadnessGame';
import { SpeakingBossBattleGame } from './SpeakingBossBattleGame';
import { InlineAiSpeakingAssistant } from './InlineAiSpeakingAssistant';
import { StructureDragExercise } from './StructureDragExercise';
import { RolePlayCard } from './RolePlayCard';
import { AlphabetPronunciationGame } from './AlphabetPronunciationGame';
import { AccuracyContrastCard } from './AccuracyContrastCard';
import { VocabularyFlipCards } from './VocabularyFlipCards';
import { HomeworkSlideCard } from './HomeworkSlideCard';
import { VideoHomeworkSlideCard } from './VideoHomeworkSlideCard';
import { SlideSelectionTranslator } from './SlideSelectionTranslator';
import { fireClassCompletionConfetti } from '../lib/celebration';
import confetti from 'canvas-confetti';

const VerbArenaGame = lazy(() => import('./VerbArenaGame').then(m => ({ default: m.VerbArenaGame })));

const COMPACT_W = 1280;
const COMPACT_H = 720;

const GOAL_CARD_STYLES = [
  {
    bg: 'bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600',
    border: 'border-pink-300/40',
    glow: 'shadow-pink-500/25',
    icon: MessageSquare,
  },
  {
    bg: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700',
    border: 'border-indigo-300/40',
    glow: 'shadow-indigo-500/25',
    icon: HelpCircle,
  },
  {
    bg: 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700',
    border: 'border-cyan-300/40',
    glow: 'shadow-cyan-500/25',
    icon: Users,
  },
];

const AVATAR_PRESETS: Record<string, { bg: string; color: string; border: string; glow: string; emoji: string }> = {
  alex: { bg: 'bg-gradient-to-tr from-cyan-600 to-blue-500', color: 'text-cyan-300', border: 'border-cyan-400', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.6)]', emoji: '👦' },
  sam: { bg: 'bg-gradient-to-tr from-pink-600 to-rose-500', color: 'text-pink-300', border: 'border-pink-400', glow: 'shadow-[0_0_15px_rgba(236,72,153,0.6)]', emoji: '👧' },
  you: { bg: 'bg-gradient-to-tr from-pink-600 to-rose-500', color: 'text-pink-300', border: 'border-pink-400', glow: 'shadow-[0_0_15px_rgba(236,72,153,0.6)]', emoji: '👧' },
  mike: { bg: 'bg-gradient-to-tr from-amber-600 to-orange-500', color: 'text-amber-300', border: 'border-amber-400', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.6)]', emoji: '🧑' },
  sarah: { bg: 'bg-gradient-to-tr from-purple-600 to-violet-500', color: 'text-purple-300', border: 'border-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.6)]', emoji: '👩' },
  emma: { bg: 'bg-gradient-to-tr from-emerald-600 to-teal-500', color: 'text-emerald-300', border: 'border-emerald-400', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.6)]', emoji: '👱‍♀️' },
};

interface SlideRendererProps {
  cls: CurriculumClass;
  section: ClassSection;
  slide: ClassSlide;
  currentIndex: number;
  totalSlides: number;
  onComplete?: () => void;
  onNext?: () => void;
  hideTeacherNote?: boolean;
  className?: string;
  /**
   * Renders at 1280×720 and CSS-scales to the wrapper.
   * Wrapper must have a fixed width; height is auto (aspect-ratio: 16/9).
   */
  compact?: boolean;
}

export function resolveGoalsList(slide: ClassSlide, cls?: CurriculumClass): string[] {
  let candidates: string[] = [];

  if (Array.isArray(slide.objectives) && slide.objectives.length > 0) {
    candidates = slide.objectives;
  } else if (Array.isArray(slide.content) && slide.content.length > 0) {
    const rawLines = slide.content.map((l) => (typeof l === 'string' ? l.trim() : '')).filter(Boolean);
    const bulletsOnly = rawLines
      .filter((line) => !/^🎯\s*¿Qué vamos|^💬\s*La frase|^🗣️\s*Prueba|^👥|^\d+\s*$/i.test(line))
      .map((line) => line.replace(/^[•✔️\s*\d.-]+/, '').trim())
      .filter((line) => line.length > 3);

    if (bulletsOnly.length >= 3) {
      candidates = bulletsOnly.slice(0, 3);
    } else if (bulletsOnly.length > 0) {
      candidates = bulletsOnly;
    } else {
      candidates = rawLines.map((line) => line.replace(/^[•✔️\s*\d.-]+/, '').trim()).filter(Boolean);
    }
  }

  const cleanGoals = candidates
    .map((g) => g.replace(/^[•✔️\s*\d.-]+/, '').trim())
    .filter((g) => g.length > 0 && !/^🎯\s*¿Qué vamos|^💬\s*La frase|^🗣️\s*Prueba|^👥|^\d+\s*$/i.test(g));

  if (cleanGoals.length >= 3) {
    return cleanGoals.slice(0, 3);
  }

  if (cleanGoals.length === 1 || cleanGoals.length === 2) {
    return [
      ...cleanGoals,
      "Construir oraciones y preguntas con la gramática de la lección.",
      "Participar activamente en la práctica oral y desafíos de la clase."
    ].slice(0, 3);
  }

  if (slide.description && slide.description.trim().length > 0 && !/^Master the topic of/i.test(slide.description.trim())) {
    return [
      slide.description.trim(),
      "Practicar la pronunciación, vocabulario y estructuras de la clase.",
      "Desarrollar fluidez comunicativa y confianza oral."
    ];
  }
  if (cls?.objective && cls.objective.trim().length > 0 && !/^Master the topic of/i.test(cls.objective.trim())) {
    return [
      cls.objective.trim(),
      "Aplicar las estructuras y vocabulario en situaciones reales.",
      "Ganar agilidad y seguridad comunicativa al hablar."
    ];
  }
  const rawDesc = slide.description || cls?.objective || '';
  const matchTopic = rawDesc.match(/Master the topic of\s*(.*)/i) || cls?.title?.match(/(?:Class\s*\d+:?\s*)(.*)/i);
  const topicName = matchTopic ? matchTopic[1].split('/')[0].trim() : 'los temas clave de hoy';
  return [
    `Dominar el vocabulario y expresiones clave de ${topicName}.`,
    "Construir oraciones y preguntas con la gramática de la lección.",
    "Participar activamente en la práctica oral y desafíos de la clase."
  ];
}

export function resolveStoryDecoderLines(slide?: ClassSlide | null): any[] {
  if (!slide) return [];
  const data = slide.storyDecoderData;
  if (!data) return [];
  if (Array.isArray(data.lines) && data.lines.length > 0) return data.lines;
  if (Array.isArray((data as any).sentences) && (data as any).sentences.length > 0) return (data as any).sentences;
  if (Array.isArray(data) && data.length > 0) return data;
  return [];
}

export function resolveVerbArenaPool(slide?: ClassSlide | null): any[] | undefined {
  if (!slide) return undefined;
  const rawPool = (slide as any).verbsData || (slide as any).verbs || slide.vocabularyCards || slide.verbArenaData?.verbs || (slide.verbArenaData as any)?.customWords;
  if (!rawPool || !Array.isArray(rawPool) || rawPool.length === 0) return undefined;
  
  return rawPool.map((c: any) => {
    if (typeof c === 'string') {
      return {
        term: c,
        word: c,
        verb: c,
        meaning: '',
        meaning_es: '',
        translation: '',
        category: 'common_verb',
      };
    }
    const term = c.term ?? c.verb ?? c.word ?? c.name ?? '';
    const meaning = c.meaning ?? c.translation ?? c.meaning_es ?? c.es ?? '';
    const meaning_es = c.meaning_es ?? c.meaning ?? c.translation ?? c.es ?? '';
    return {
      term,
      word: term,
      verb: term,
      meaning,
      meaning_es,
      translation: meaning,
      example_en: c.example_en ?? c.example ?? c.en ?? '',
      past: c.past ?? '',
      past_participle: c.past_participle ?? c.participle ?? '',
      pronunciation: c.pronunciation ?? '',
      category: c.category ?? 'common_verb',
    };
  });
}

export function resolveGrammarData(slide?: ClassSlide | null): {
  goldenRule?: string;
  proTip?: string;
  structures: {
    label: string;
    subject: string;
    formula: string;
    example: string;
    exampleEs?: string;
    explanation?: string;
    rule?: string;
    audio?: string;
  }[];
} | null {
  if (!slide) return null;
  if (slide.grammarData && Array.isArray(slide.grammarData.structures) && slide.grammarData.structures.length > 0) {
    return slide.grammarData as any;
  }
  const gsd = (slide as any).grammarStudioData;
  if (gsd && Array.isArray(gsd.tabs) && gsd.tabs.length > 0) {
    return {
      goldenRule: gsd.subtitle || gsd.title || (slide.description || "Regla de Oro de la Lección"),
      proTip: gsd.subtitle || (slide.description || "Aplica la fórmula y practica en voz alta."),
      structures: gsd.tabs.map((tab: any, i: number) => ({
        label: tab.label || `Paso ${i + 1}`,
        subject: tab.rule || tab.label || `Estructura ${i + 1}`,
        formula: tab.formula || tab.rule || '',
        example: tab.example || tab.formula || '',
        exampleEs: tab.explanation || tab.rule || '',
        explanation: tab.explanation || tab.rule || '',
        rule: tab.rule || tab.explanation || '',
        audio: tab.example || '',
      }))
    };
  }
  return null;
}

export function resolveReadingLines(slide?: ClassSlide | null): { speaker?: string; text: string; es?: string }[] {
  if (!slide) return [];
  const rd = (slide as any).readingData;
  if (rd && Array.isArray(rd.dialogue) && rd.dialogue.length > 0) {
    return rd.dialogue.map((d: any) => {
      if (typeof d === 'string') return { text: d };
      const text = d.text || d.en || '';
      const speaker = d.speaker || '';
      return {
        speaker,
        text: speaker ? `${speaker}: "${text}"` : text,
        es: d.es || d.translation || '',
      };
    });
  }
  if (slide.type === 'reading' || /reading|lectura/i.test(slide.title || '')) {
    if (Array.isArray(slide.content) && slide.content.length > 0) {
      return slide.content.map(c => {
        if (typeof c === 'string') return { text: c };
        return { text: (c as any).text || (c as any).en || String(c), es: (c as any).es };
      });
    }
  }
  return [];
}

export function resolveSpeakingQuestions(slide?: ClassSlide | null): string[] {
  if (!slide) return [];
  if (Array.isArray(slide.content) && slide.content.length > 0) return slide.content;
  const sp = (slide as any).speakingPrompts || (slide as any).speakingData?.questions || (slide as any).questions;
  if (Array.isArray(sp) && sp.length > 0) {
    return sp.map((q: any) => typeof q === 'string' ? q : (q.en || q.question || q.prompt || String(q)));
  }
  return [];
}

export function SlideRenderer({
  cls,
  section,
  slide,
  currentIndex,
  totalSlides,
  onComplete,
  onNext,
  hideTeacherNote = false,
  className = 'w-full h-full',
  compact = false,
}: SlideRendererProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedSpeakingPrompt, setSelectedSpeakingPrompt] = useState('');
  const [imageError, setImageError] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Speech Synthesis Helper
  const playSpeech = (text: string, lang = 'en-US', rate = 0.9) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Reading states
  const [readingLineIndex, setReadingLineIndex] = useState(0);
  const [isFullTextView, setIsFullTextView] = useState(false);
  const [readingAudioPlaying, setReadingAudioPlaying] = useState(false);

  // Listening states
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [showListeningTranscript, setShowListeningTranscript] = useState(false);
  const [selectedListeningOption, setSelectedListeningOption] = useState<number | null>(null);
  const [showListeningResult, setShowListeningResult] = useState(false);
  const [listeningSpeed, setListeningSpeed] = useState<number>(0.9);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Writing states (3 fields: +, -, ?)
  const [writingInputs, setWritingInputs] = useState<{ positive: string; negative: string; question: string }>({
    positive: '',
    negative: '',
    question: ''
  });
  const [writingActiveTab, setWritingActiveTab] = useState<'positive' | 'negative' | 'question'>('positive');
  const [showWritingExamples, setShowWritingExamples] = useState<{ positive: boolean; negative: boolean; question: boolean }>({
    positive: false,
    negative: false,
    question: false
  });
  const [writingChecked, setWritingChecked] = useState(false);

  // Story Decoder embedded states (matching StoryDecoder.tsx)
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [storyLineIndex, setStoryLineIndex] = useState(0);
  const [selectedTokenIndexes, setSelectedTokenIndexes] = useState<number[]>([]);
  const [shuffledStoryTokens, setShuffledStoryTokens] = useState<{ id: string; text: string }[]>([]);
  const [storyFeedback, setStoryFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showStoryTarget, setShowStoryTarget] = useState(false);
  const [savedWords, setSavedWords] = useState<Set<string>>(new Set());

  // Speaking carousel states
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [showSpeakingHint, setShowSpeakingHint] = useState(false);

  // Grammar Studio state
  const [grammarActiveTab, setGrammarActiveTab] = useState(0);

  // Effect to load story decoder tokens on change
  useEffect(() => {
    const lines = resolveStoryDecoderLines(slide);
    if ((slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && lines.length > 0) {
      const safeIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
      const line = lines[safeIndex] || lines[0];
      if (line) {
        // Pool easy blocks or words
        const rawPool = line.puzzle?.easy_blocks && line.puzzle.easy_blocks.length > 0
          ? line.puzzle.easy_blocks
          : (line.en ? line.en.split(' ') : []);
        
        const mapped = rawPool.map((token: string, i: number) => ({ id: `tok-${i}-${token}`, text: token }));
        // Shuffle
        for (let i = mapped.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        setShuffledStoryTokens(mapped);
        setSelectedTokenIndexes([]);
        setStoryFeedback('idle');
        setWordsRevealed(false);
        setShowStoryTarget(false);
      }
    }
  }, [slide.id, storyLineIndex]);

  useEffect(() => {
    setSelectedOption(null);
    setShowResult(false);
    setSelectedSpeakingPrompt('');
    setImageError(false);

    // Reset reading & story decoder
    setReadingLineIndex(0);
    setIsFullTextView(false);
    setReadingAudioPlaying(false);
    setStoryLineIndex(0);
    setWordsRevealed(false);

    // Reset listening states
    setIsPlaying(false);
    setAudioProgress(0);
    setShowListeningTranscript(false);
    setSelectedListeningOption(null);
    setShowListeningResult(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // Reset writing states
    setWritingInputs({ positive: '', negative: '', question: '' });
    setWritingActiveTab('positive');
    setShowWritingExamples({ positive: false, negative: false, question: false });
    setWritingChecked(false);

    // Reset story decoder states
    setWordsRevealed(false);
    setStoryLineIndex(0);
    setSelectedTokenIndexes([]);
    setShuffledStoryTokens([]);
    setStoryFeedback('idle');
    setShowStoryTarget(false);
    setSavedWords(new Set());

    // Reset speaking
    setSpeakingIndex(0);
    setShowSpeakingHint(false);
  }, [slide.id]);

  // Compact scale: measure parent to scale 1280×720 into available space
  useEffect(() => {
    if (!compact) return;
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const pw = parent.clientWidth;
      const ph = parent.clientHeight;
      if (!pw || !ph) return;
      const s = Math.min((pw - 16) / COMPACT_W, (ph - 16) / COMPACT_H);
      setScale(Math.max(0.2, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el.parentElement) ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [compact]);

  const handleOptionSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
    setShowResult(true);
  };

  // ── Slide type flags ────────────────────────────────────────────────────────
  const isLastSlide = currentIndex === totalSlides - 1;
  const isSpeakingBossBattle = slide.type === 'speaking-boss-battle';
  const isAlphabetGame = slide.type === 'alphabet-game';
  const isSpinningWheelSlide = slide.type === 'spinning-wheel';

  const isRoleplaySlide =
    slide.type === 'roleplay' ||
    slide.type === 'lets-say' ||
    slide.type === 'speaking-scene' ||
    isAlphabetGame ||
    Boolean(slide.speakingScene) ||
    Boolean(slide.letsSay) ||
    (Boolean(slide.roleplay) && !slide.options?.length);

  const isAccuracyContrastSlide =
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isSpinningWheelSlide &&
    slide.type !== 'matching-game' &&
    slide.type !== 'mystery-puzzle' &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'structure-drag' &&
    (/accuracy contrast|contraste de precisi[oó]n/i.test(slide.title || '') ||
      Boolean(slide.content && slide.content.some((l) => /^correct this:/i.test(l) || /^accurate:/i.test(l))));

  const isOpeningSlide =
    currentIndex === 0 &&
    slide.type !== 'emoji-game' &&
    !isSpeakingBossBattle &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'structure-drag' &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide;

  // Beta slide types that bypass all generic detection (never hijack opening welcome or spinning wheel)
  const isBetaSlide =
    !isOpeningSlide &&
    !isSpinningWheelSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    (
      slide.type === 'grammar-studio' || Boolean(slide.grammarData) ||
      slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || /verb arena|reto de vocabulario/i.test(slide.title || '') ||
      slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '') ||
      slide.type === 'listening-audio-teacher' || Boolean(slide.listeningData) || /listening.*audio|audio.*listening|listening:/i.test(slide.title || '') ||
      slide.type === 'writing-guided' || Boolean(slide.writingData) || Boolean((slide as any).writingPrompts) || /writing studio|producci[oó]n escrita|guided writing/i.test(slide.title || '') ||
      slide.type === 'objectives-animated' || /today.*mission|nuestra misi[oó]n/i.test(slide.title || '') ||
      slide.type === 'reading' || Boolean((slide as any).readingData) || /reading practice|reading studio/i.test(slide.title || '') ||
      (slide.type === 'speaking' && Boolean(slide.content))
    );

  const isOptionExerciseSlide =
    Boolean(slide.options && slide.options.length > 0) &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'speaking-boss-battle' &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'structure-drag' &&
    !isRoleplaySlide;

  const isScreenShareExerciseSlide = isOptionExerciseSlide;

  const isGoalsSlide =
    !isOpeningSlide &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    slide.type !== 'objectives-animated' &&
    (Boolean(slide.title && /goal|objetivo/i.test(slide.title)) || Boolean(slide.description && /objective/i.test(slide.description)));

  const isChatSlide =
    !isBetaSlide &&
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    !isAccuracyContrastSlide &&
    !isOptionExerciseSlide &&
    (Boolean(slide.title && /read.*chat|lee.*chat|conversation|conversaci[oó]n|dialogue|di[aá]logo/i.test(slide.title)) ||
      Boolean(slide.description && /context/i.test(slide.description) && slide.content && slide.content.some((l) => /^[\w\s]+:\s*.+/i.test(l))));

  const isWrapUpSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    slide.type !== 'homework' &&
    slide.type !== 'video' &&
    (Boolean(slide.title && /class complete|clase completada|wrap-?up|congratulations|felicitaciones/i.test(slide.title)) ||
      Boolean(slide.description && /wrap-?up/i.test(slide.description)));

  const isHomeworkSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isWrapUpSlide &&
    slide.type !== 'video' &&
    (slide.type === 'homework' || Boolean(slide.title && /homework|tarea/i.test(slide.title)));

  const isVideoHomeworkSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    (slide.type === 'video' || slide.type === 'video-task' || Boolean(slide.title && /video.*homework|tarea.*video/i.test(slide.title)));

  const isTeachingConceptSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isChatSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    !isAccuracyContrastSlide &&
    !isOptionExerciseSlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    !isVideoHomeworkSlide &&
    slide.type !== 'reading' &&
    slide.type !== 'vocabulary' &&
    slide.type !== 'matching-game' &&
    slide.type !== 'mystery-puzzle' &&
    slide.type !== 'structure-drag' &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'verb-arena-embedded' &&
    slide.type !== 'story-decoder-embedded' &&
    slide.type !== 'listening-audio-teacher' &&
    slide.type !== 'writing-guided' &&
    slide.type !== 'speaking' &&
    slide.type !== 'objectives-animated' &&
    Boolean(
      slide.content &&
      slide.content.length > 0 &&
      (!slide.options || slide.options.length === 0)
    );

  const isVocabularySlide =
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isAccuracyContrastSlide &&
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isChatSlide &&
    !isTeachingConceptSlide &&
    !isOptionExerciseSlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    !isVideoHomeworkSlide &&
    slide.type !== 'verb-arena-embedded' &&
    slide.type !== 'story-decoder-embedded' &&
    slide.type !== 'listening-audio-teacher' &&
    slide.type !== 'writing-guided' &&
    slide.type !== 'speaking' &&
    slide.type !== 'objectives-animated' &&
    (slide.type === 'vocabulary' || Boolean(slide.vocabularyCards && slide.vocabularyCards.length > 0));

  const isImmersiveSlide =
    slide.type === 'emoji-game' ||
    slide.type === 'speaking-boss-battle' ||
    slide.type === 'speaking-assessment-experimental' ||
    isRoleplaySlide ||
    isAccuracyContrastSlide ||
    isVocabularySlide ||
    isSpinningWheelSlide;

  const bgColorMap: Record<string, string> = {
    intro: 'bg-blue-600', grammar: 'bg-indigo-600', practice: 'bg-amber-500',
    production: 'bg-emerald-600', feedback: 'bg-purple-600',
  };

  const bgGradient = isOpeningSlide || isGoalsSlide || isTeachingConceptSlide
    ? 'bg-gradient-to-br from-[#120d2d] via-[#1a0f3d] to-[#0c081e]'
    : isChatSlide
    ? 'bg-gradient-to-br from-[#0f1442] via-[#1a113f] to-[#0c0a24]'
    : isOptionExerciseSlide
    ? 'bg-gradient-to-br from-[#101442] via-[#1a113e] to-[#0c0924]'
    : slide.type === 'emoji-game' || slide.type === 'structure-drag'
    ? 'bg-gradient-to-br from-[#0c0d28] via-[#140e3a] to-[#08081c]'
    : isSpinningWheelSlide
    ? 'bg-gradient-to-br from-[#0a0d24] via-[#0f1738] to-[#080a1c]'
    : slide.bgColor || bgColorMap[section.id.split('-')[1]] || 'bg-slate-800';

  const isReadingPracticeSlide =
    /reading practice|practica de lectura|práctica de lectura/i.test(slide.title || '') ||
    slide.type === 'reading';
  const isOptionalAiSpeakingSlide =
    /let.?s talk|vamos a hablar/i.test(slide.title || '') ||
    isReadingPracticeSlide || slide.type === 'speaking' || slide.type === 'reading';
  const slideSpeakingQuestions = [
    selectedSpeakingPrompt,
    ...(slide.type !== 'spinning-wheel' ? slide.content || [] : []),
  ].filter((line): line is string => Boolean(line?.trim()));

  // ── The actual slide JSX ───────────────────────────────────────────────────
  const slideJSX = (
    <div
      className={`relative flex flex-col ${bgGradient} text-white overflow-hidden select-text
        ${isSpeakingBossBattle || isRoleplaySlide ? 'rounded-xl sm:rounded-2xl' : 'rounded-2xl sm:rounded-3xl'}
        ${compact ? 'w-[1280px] h-[720px]' : 'w-full h-full'}
      `}
    >
      {/* Opening glow blobs */}
      {isOpeningSlide && (
        <>
          <motion.div aria-hidden="true"
            className="pointer-events-none absolute left-[8%] right-[8%] top-[-12%] h-40 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 36, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div aria-hidden="true"
            className="pointer-events-none absolute bottom-[-8%] right-[2%] h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl"
            animate={{ y: [0, -18, 0], x: [0, -24, 0], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* ── Beta slide types: HIGHEST PRIORITY — renders before any other detection ── */}
      {isBetaSlide ? (
        <div className="relative flex-1 flex flex-col z-10 min-h-0 overflow-hidden">
          {(slide.type === 'objectives-animated' || /today.*mission|nuestra misi[oó]n|learning goals/i.test(slide.title || '')) ? (
            <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 left-1/4 w-[400px] h-[250px] bg-gradient-to-b from-cyan-400/20 via-violet-600/10 to-transparent blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 w-[350px] h-[250px] bg-pink-500/15 blur-3xl" aria-hidden="true" />
              <div className="shrink-0 mb-3">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">{slide.title}</h1>
                <p className="text-sm sm:text-base font-bold text-violet-300/80 mt-1">{slide.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4 py-2">
                {resolveGoalsList(slide, cls).map((goal, idx) => {
                  const cleanGoal = goal.replace(/^[✔️\s*•\d.-]+/, '').trim();
                  const icons = [Target, BookOpen, MessageSquare];
                  const colors = ['from-pink-600 via-rose-500 to-fuchsia-600','from-violet-600 via-purple-500 to-indigo-600','from-cyan-600 via-sky-500 to-blue-600'];
                  const IconC = icons[idx % icons.length];
                  return (
                    <motion.div key={idx} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + idx * 0.15, duration: 0.4 }}
                      className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r ${colors[idx % colors.length]} shadow-xl`}>
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <IconC className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xl sm:text-2xl font-black text-white leading-snug">{cleanGoal}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (slide.type === 'grammar-studio' || Boolean(resolveGrammarData(slide))) ? (
            (() => {
              const grammar = resolveGrammarData(slide);
              const structures = grammar?.structures || [];
              const safeTab = Math.max(0, Math.min(grammarActiveTab, Math.max(0, structures.length - 1)));
              const activeStruct = structures[safeTab] || structures[0];
              const totalTabs = structures.length || 1;
              return (
                <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-6 lg:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d122b] to-[#12163b]">
                  {/* Ambient Glows */}
                  <div className="pointer-events-none absolute -top-20 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-indigo-500/20 via-purple-600/10 to-transparent blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/15 blur-3xl" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-2 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                          <span>📐</span>
                          <span>Grammar Focus & Structures</span>
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-indigo-200 to-white bg-clip-text text-transparent mt-1">
                        {slide.title}
                      </h1>
                    </div>

                    {grammar?.goldenRule && (
                      <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-xs font-bold shadow-md backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
                        <span>{grammar.goldenRule}</span>
                      </div>
                    )}
                  </div>

                  {/* Structure Tabs: 5-Column Segmented Stepper Grid (No Horizontal Scroll) */}
                  {structures.length > 0 && (
                    <div className={`shrink-0 grid gap-1.5 sm:gap-2 select-none ${
                      structures.length === 5 
                        ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' 
                        : structures.length === 4 
                        ? 'grid-cols-2 md:grid-cols-4' 
                        : 'grid-cols-3'
                    }`}>
                      {structures.map((st: any, idx: number) => {
                        const isSelected = safeTab === idx;
                        const isCompleted = safeTab > idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setGrammarActiveTab(idx)}
                            className={`group relative flex flex-col p-2 sm:p-2.5 rounded-2xl border text-left transition-all cursor-pointer overflow-hidden ${
                              isSelected
                                ? 'bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-pink-600/90 border-cyan-300/80 shadow-lg shadow-purple-500/25 ring-2 ring-cyan-400/40 scale-[1.01]'
                                : isCompleted
                                ? 'bg-white/10 hover:bg-white/15 border-emerald-400/30 text-white/80'
                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/60 hover:text-white'
                            }`}
                          >
                            {/* Top Step Number & Status */}
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                                isSelected 
                                  ? 'bg-black/30 text-cyan-200' 
                                  : isCompleted 
                                  ? 'bg-emerald-500/20 text-emerald-300' 
                                  : 'bg-white/10 text-white/50'
                              }`}>
                                Paso {idx + 1}
                              </span>
                              {isCompleted && <span className="text-emerald-400 text-xs font-bold">✓</span>}
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                            </div>

                            {/* Step Label */}
                            <span className={`text-xs sm:text-sm font-extrabold line-clamp-1 leading-snug ${
                              isSelected ? 'text-white drop-shadow-sm' : 'text-white/80'
                            }`}>
                              {(st.label || `Paso ${idx + 1}`).replace(/^\d+\.\s*/, '')}
                            </span>

                            {/* Active Bottom Glow Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all ${
                              isSelected ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-400' : isCompleted ? 'bg-emerald-400/40' : 'bg-transparent'
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Active Structure Spotlight Card */}
                  {activeStruct && (
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4 my-auto py-1 items-stretch min-h-0">
                      {/* Left: High-Impact Example & Audio */}
                      <div className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                              <span>Ejemplo en Inglés</span>
                            </span>
                            <span className="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-200 text-xs font-black border border-purple-400/30">
                              {activeStruct.subject || activeStruct.label}
                            </span>
                          </div>

                          {/* Huge Example Sentence */}
                          <div className="my-2 py-2">
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                              {activeStruct.example}
                            </p>
                            {activeStruct.exampleEs && (
                              <p className="text-base sm:text-lg lg:text-xl font-extrabold text-cyan-200/90 mt-2">
                                {activeStruct.exampleEs}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Action Button: Listen */}
                        <div className="pt-2 flex items-center gap-3">
                          <button
                            onClick={() => playSpeech(activeStruct.audio || activeStruct.example, 'en-US', 0.9)}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>Escuchar Pronunciación 🔊</span>
                          </button>
                        </div>
                      </div>

                      {/* Right: Formula Breakdown & Rules */}
                      <div className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-indigo-950/60 border-2 border-indigo-400/30 backdrop-blur-xl shadow-2xl">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                              <Layers3 className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                              Fórmula Gramatical
                            </span>
                          </div>

                          {/* Formula Box */}
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-cyan-400/30 shadow-inner mb-3">
                            <p className="text-base sm:text-lg font-black text-cyan-300 font-mono tracking-wide leading-relaxed">
                              {activeStruct.formula || `[ Sujeto ] + [ Verbo ] + [ Complemento ]`}
                            </p>
                          </div>

                          {/* Rule Explanations */}
                          <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white/90">
                            <span className="text-purple-400 font-black text-base shrink-0">📌</span>
                            <div>
                              <p className="font-extrabold text-white">{activeStruct.rule || activeStruct.explanation || activeStruct.subject}</p>
                              <p className="text-xs text-purple-200/80 mt-0.5">Aplica para: <span className="text-cyan-300 font-black">{activeStruct.subject || activeStruct.label}</span></p>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Stepper Navigation Controls */}
                        <div className="pt-3 flex items-center justify-between gap-2 border-t border-white/10 mt-2">
                          <button
                            disabled={safeTab === 0}
                            onClick={() => setGrammarActiveTab(t => Math.max(0, t - 1))}
                            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              safeTab === 0 
                                ? 'opacity-30 cursor-not-allowed text-white/40' 
                                : 'bg-white/10 hover:bg-white/20 text-white active:scale-95'
                            }`}
                          >
                            <span>◀ Anterior</span>
                          </button>

                          <span className="text-xs font-extrabold text-cyan-300">
                            Paso {safeTab + 1} de {totalTabs}
                          </span>

                          <button
                            onClick={() => {
                              if (safeTab < totalTabs - 1) {
                                setGrammarActiveTab(t => t + 1);
                              } else {
                                if (onNext) onNext();
                                else if (onComplete) onComplete();
                              }
                            }}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-black shadow-md shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
                          >
                            <span>{safeTab < totalTabs - 1 ? 'Siguiente Paso ➔' : 'Continuar Clase ➔'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Bar: Pro-Tip & Next Button */}
                  <div className="shrink-0 pt-2 flex items-center justify-between gap-3 border-t border-white/10 flex-wrap">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-yellow-200/95 bg-yellow-500/10 border border-yellow-400/30 px-3.5 py-1.5 rounded-xl">
                      <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span className="truncate max-w-xl">{grammar?.proTip || "Aplica la regla de oro y practica la pronunciación en voz alta."}</span>
                    </div>

                    <button
                      onClick={() => {
                        if (onNext) onNext();
                        else if (onComplete) onComplete();
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 ml-auto"
                    >
                      <span>Continuar a Verb Arena ⚡</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || Boolean((slide as any).vocabularyCards) || /verb arena|reto de vocabulario/i.test(slide.title || '')) ? (
            <div className="w-full h-full flex items-stretch min-h-0">
              <Suspense fallback={<div className="flex-1 flex items-center justify-center text-white text-xl font-bold">Cargando Reto de Vocabulario...</div>}>
                <VerbArenaGame
                  isEmbedded={true}
                  customPool={resolveVerbArenaPool(slide)}
                  maxRounds={slide.limit || (slide as any).verbsData?.length || slide.verbArenaData?.limit || (resolveVerbArenaPool(slide)?.length) || 6}
                  onComplete={onNext || onComplete}
                  onNextSlide={onNext}
                />
              </Suspense>
            </div>
          ) : (slide.type === 'reading' || resolveReadingLines(slide).length > 0 || /reading practice|sam'?s daily routine|la rutina de sam/i.test(slide.title || '')) && resolveReadingLines(slide).length > 0 ? (
            (() => {
              const readingLines = resolveReadingLines(slide);
              const safeReadingIndex = Math.max(0, Math.min(readingLineIndex, readingLines.length - 1));
              const currentLine = readingLines[safeReadingIndex] || readingLines[0];
              return (
                <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1324] to-[#0c0e24]">
                  {/* Ambient Cyber Aura */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-cyan-400/20 via-violet-600/10 to-transparent blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[400px] h-[250px] bg-pink-500/15 blur-3xl" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-3 flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base font-bold text-cyan-200/75 mt-0.5">
                        {slide.description || "Lee en voz alta y presta atención a la estructura."}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-black">
                        📖 Lectura Guiada
                      </span>
                      <button
                        onClick={() => setIsFullTextView(v => !v)}
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        {isFullTextView ? <Layers3 className="w-4 h-4 text-cyan-300" /> : <Eye className="w-4 h-4 text-cyan-300" />}
                        <span>{isFullTextView ? 'Modo Spotlight 🎯' : 'Ver Todo el Texto 📜'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-center gap-3 min-h-0 py-1">
                    {isFullTextView ? (
                      <div className="flex-1 grid grid-cols-1 gap-2.5 overflow-y-auto max-h-[420px] pr-1">
                        {readingLines.map((lineObj, idx) => {
                          const isSelected = idx === safeReadingIndex;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.06 }}
                              onClick={() => {
                                setReadingLineIndex(idx);
                                playSpeech(lineObj.text, 'en-US', 0.9);
                              }}
                              className={`group flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-[1.01]'
                                  : 'border-white/10 bg-slate-950/60 text-white/80 hover:bg-white/10 hover:border-white/25 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-4 min-w-0">
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                                  isSelected ? 'bg-cyan-400 text-slate-950 shadow-md' : 'bg-white/10 text-white/60 group-hover:bg-white/20'
                                }`}>
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="flex flex-col">
                                  <span className="text-xl sm:text-2xl font-black leading-snug tracking-tight">
                                    {lineObj.text}
                                  </span>
                                  {lineObj.es && (
                                    <span className="text-sm font-semibold text-cyan-200/70 mt-0.5">
                                      {lineObj.es}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-3">
                                <span className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
                                  isSelected
                                    ? 'bg-cyan-400 text-slate-950'
                                    : 'bg-white/10 text-white/60 group-hover:bg-cyan-400/20 group-hover:text-cyan-200'
                                }`}>
                                  <Volume2 className="w-3.5 h-3.5" />
                                  <span>Escuchar</span>
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={safeReadingIndex}
                          initial={{ opacity: 0, scale: 0.96, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.96, y: -15 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="flex-1 flex flex-col justify-between rounded-[2rem] border-2 border-cyan-400/50 bg-[#081226]/90 p-8 sm:p-10 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-xl min-h-[300px]"
                        >
                          <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-cyan-400">
                            <span className="bg-cyan-400/15 border border-cyan-400/30 px-3 py-1 rounded-xl">
                              Línea {safeReadingIndex + 1} de {readingLines.length}
                            </span>
                            <span className="text-white/50">Práctica de Fluidez y Entonación 🎙️</span>
                          </div>

                          {/* Large Main Sentence */}
                          <div className="my-auto text-center py-4">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                              {currentLine.text}
                            </p>
                            {currentLine.es && (
                              <p className="text-lg sm:text-xl font-bold text-cyan-200/80 mt-3">
                                {currentLine.es}
                              </p>
                            )}
                          </div>

                          {/* Audio Button */}
                          <div className="flex justify-center pt-2">
                            <button
                              onClick={() => playSpeech(currentLine.text, 'en-US', 0.9)}
                              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                            >
                              <Volume2 className="w-5 h-5" />
                              <span>Escuchar Pronunciación</span>
                            </button>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}

                    {/* Footer Controls */}
                    <div className="shrink-0 flex items-center justify-between gap-3 pt-2">
                      <button
                        disabled={safeReadingIndex === 0}
                        onClick={() => setReadingLineIndex(i => Math.max(0, i - 1))}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {readingLines.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setReadingLineIndex(i);
                              if (isFullTextView) playSpeech(readingLines[i]?.text || '', 'en-US', 0.9);
                            }}
                            className={`transition-all rounded-full cursor-pointer ${
                              i === safeReadingIndex
                                ? 'w-8 h-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-400/50'
                                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'
                            }`}
                            title={`Ir a línea ${i + 1}`}
                          />
                        ))}
                      </div>

                      {safeReadingIndex < readingLines.length - 1 ? (
                        <button
                          onClick={() => setReadingLineIndex(i => Math.min(readingLines.length - 1, i + 1))}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>Siguiente</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={onNext || onComplete}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>¡Muy bien! Siguiente Diapositiva</span>
                          <ChevronRight className="w-4 h-4 stroke-[3]" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'listening-audio-teacher' || Boolean(slide.listeningData) || /listening.*audio|audio.*listening|listening:/i.test(slide.title || '')) && slide.listeningData ? (
            <div className="relative flex-1 flex flex-col p-5 sm:p-6 z-10 min-h-0 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 left-1/3 w-[450px] h-[280px] bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
              <div className="shrink-0 mb-3">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{slide.title}</h1>
                <p className="text-sm font-bold text-violet-300/80 mt-0.5">{slide.description}</p>
              </div>
              {(() => {
                const listeningText = slide.listeningData?.transcription || slide.listeningData?.audioTeacherText || '';
                return (
                  <div className="flex-1 flex flex-row gap-5 min-h-0">
                    <div className="w-[50%] flex flex-col gap-4">
                      <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-5 flex flex-col gap-3">
                        <span className="text-xs font-black uppercase tracking-wider text-indigo-300">🎧 Audio de la Clase</span>
                        <div className="flex items-center gap-3 flex-wrap">
                          <button onClick={() => {
                            if (isPlaying) {
                              if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                                window.speechSynthesis.cancel();
                              }
                              setIsPlaying(false);
                            } else {
                              setIsPlaying(true);
                              playSpeech(listeningText, 'en-US', listeningSpeed);
                              const words = listeningText.split(' ').length;
                              const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                              setTimeout(() => setIsPlaying(false), durationSec * 1000);
                            }
                          }}
                            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm transition-all cursor-pointer ${isPlaying ? 'bg-red-500/30 border border-red-400/50 text-red-300 hover:bg-red-500/50' : 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/30'}`}>
                            {isPlaying ? <VolumeX className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            {isPlaying ? 'Pausar' : '▶ Reproducir'}
                          </button>
                          <div className="flex items-center gap-2">
                            {[0.7, 0.9, 1.0].map(s => (
                              <button key={s} onClick={() => { setListeningSpeed(s); if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel(); setIsPlaying(false); }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${listeningSpeed === s ? 'border-indigo-400 bg-indigo-500/30 text-indigo-200' : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10'}`}>
                                {s === 0.7 ? '🐢 Lento' : s === 0.9 ? '🚶 Normal' : '🚀 Rápido'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3 flex-1">
                        <button onClick={() => setShowListeningTranscript(!showListeningTranscript)}
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 text-sm font-black border border-violet-500/30 transition-colors cursor-pointer">
                          {showListeningTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          {showListeningTranscript ? 'Ocultar Transcripción' : 'Revelar Transcripción (Profesor)'}
                        </button>
                        <AnimatePresence>
                          {showListeningTranscript && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                              className="text-base text-violet-100 font-bold border-l-4 border-violet-400 pl-3 leading-relaxed">
                              {listeningText}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                <div className="w-[50%] flex flex-col justify-center">
                  {slide.listeningData.question ? (
                    <div className="rounded-3xl border border-white/10 bg-[#0f0b25]/90 p-5 shadow-xl flex flex-col gap-4 h-full max-h-[400px] justify-between">
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-pink-300">Pregunta de Comprensión</span>
                        <h2 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">{slide.listeningData.question}</h2>
                      </div>
                      {slide.listeningData.options && (
                        <div className="grid gap-2.5">
                          {slide.listeningData.options.map((opt, idx) => {
                            const isSelected = selectedListeningOption === idx;
                            const isCorrect = idx === slide.listeningData?.correctOptionIndex;
                            let btnStyle = 'border-white/10 bg-white/5 text-white hover:bg-white/10';
                            if (showListeningResult) { btnStyle = isCorrect ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300' : isSelected ? 'border-red-400 bg-red-500/20 text-red-300' : 'border-white/10 bg-white/5 text-white/50'; }
                            else if (isSelected) { btnStyle = 'border-violet-400 bg-violet-500/20 text-violet-300'; }
                            return (
                              <button key={idx} disabled={showListeningResult}
                                onClick={() => { setSelectedListeningOption(idx); setShowListeningResult(true); if (isCorrect) confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } }); }}
                                className={`w-full text-left px-4 py-3 rounded-2xl border text-base font-bold flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}>
                                <span>{opt}</span>
                                {showListeningResult && isCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
                      <p className="text-lg text-white/70">Escucha con atención y comenta lo entendido con tu profesor.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      ) : (slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && resolveStoryDecoderLines(slide).length > 0 ? (
            (() => {
              const lines = resolveStoryDecoderLines(slide);
              const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
              const currentLine = lines[safeLineIndex] || lines[0];
              const easyBlocks = currentLine?.puzzle?.easy_blocks && currentLine.puzzle.easy_blocks.length > 0
                ? currentLine.puzzle.easy_blocks
                : (currentLine?.en ? currentLine.en.split(' ') : []);
              const tokens = shuffledStoryTokens.length > 0 ? shuffledStoryTokens : easyBlocks.map((t: string, i: number) => ({ id: String(i), text: t }));
              const correctOrder = easyBlocks;
              const assembled = selectedTokenIndexes.map(i => tokens[i]?.text ?? '').join(' ');
              const targetAnswer = currentLine?.preferred_answer || currentLine?.en || correctOrder.join(' ');
              return (
                <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-y-auto bg-gradient-to-br from-slate-950 via-[#0a1820] to-[#071318]">
                  {/* Ambient Emerald Aura */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[280px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/15 blur-3xl" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-3 flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>🧩</span>
                        <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">{slide.title}</span>
                      </h1>
                      <p className="text-sm font-bold text-emerald-200/75 mt-0.5">{slide.description || "Ordena los bloques para traducir la frase correctamente."}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-emerald-300 bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1.5 rounded-xl shadow-sm">
                        Línea {safeLineIndex + 1} de {lines.length}
                      </span>
                    </div>
                  </div>

                  {/* Main Interactive Workspace (Centered & Compact) */}
                  <div className="flex-1 flex flex-col justify-center gap-4 max-w-5xl mx-auto w-full min-h-0 py-2">
                    
                    {/* Spanish Prompt Card */}
                    <div className="rounded-[1.75rem] bg-[#07171e]/90 border-2 border-emerald-400/40 p-5 sm:p-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] text-center backdrop-blur-xl">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">🇪🇸 Frase en Español</span>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1.5 leading-snug tracking-tight">
                        "{currentLine?.es}"
                      </p>
                    </div>

                    {/* Assembly Drop Area */}
                    <div className="rounded-[1.75rem] bg-slate-950/80 border-2 border-dashed border-emerald-400/40 p-4 sm:p-5 min-h-[90px] flex flex-wrap gap-2.5 items-center justify-center shadow-inner">
                      {selectedTokenIndexes.length === 0 ? (
                        <div className="flex items-center gap-2 text-white/40 text-base sm:text-lg font-bold italic py-2">
                          <span>👇</span>
                          <span>Toca las palabras de abajo en orden para construir la frase...</span>
                        </div>
                      ) : (
                        selectedTokenIndexes.map((ti, pos) => (
                          <motion.button
                            key={pos}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            onClick={() => setSelectedTokenIndexes(prev => prev.filter((_, p) => p !== pos))}
                            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-2 border-emerald-400 text-emerald-100 text-lg sm:text-xl font-black shadow-lg shadow-emerald-500/20 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                            title="Toca para quitar de la respuesta"
                          >
                            <span>{tokens[ti]?.text}</span>
                            <span className="text-xs opacity-60">✕</span>
                          </motion.button>
                        ))
                      )}
                    </div>

                    {/* Word Bank / Possible Answers with Hide/Reveal feature */}
                    <div className="py-1">
                      <div className="mb-2 flex items-center justify-between gap-2 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400">Banco de palabras:</span>
                          {selectedTokenIndexes.length > 0 && (
                            <button
                              onClick={() => setSelectedTokenIndexes([])}
                              className="text-xs font-bold text-red-400/80 hover:text-red-300 transition-colors cursor-pointer ml-2"
                            >
                              ✕ Limpiar ranuras
                            </button>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setWordsRevealed(v => !v)}
                          className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-black transition cursor-pointer ${
                            wordsRevealed
                              ? 'border-white/15 bg-white/10 text-white/70 hover:bg-white/20'
                              : 'border-yellow-300/40 bg-yellow-300/20 text-yellow-200 hover:bg-yellow-300 hover:text-yellow-950 shadow-lg shadow-yellow-500/20 animate-pulse'
                          }`}
                        >
                          {wordsRevealed ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Ocultar palabras</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>🧠 Revelar palabras (Pensar primero)</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-3 justify-center items-center">
                        {tokens.map((t, i) => {
                          const used = selectedTokenIndexes.includes(i);
                          return (
                            <motion.button
                              key={t.id}
                              disabled={used}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.04 }}
                              onClick={() => {
                                if (!wordsRevealed) setWordsRevealed(true);
                                setSelectedTokenIndexes(prev => [...prev, i]);
                              }}
                              className={`px-6 py-3.5 rounded-2xl text-lg sm:text-xl font-black border-2 transition-all cursor-pointer shadow-md ${
                                used
                                  ? 'opacity-20 bg-white/5 border-white/10 text-white/30 scale-95 pointer-events-none'
                                  : 'bg-[#0f242e] border-emerald-400/60 text-white hover:bg-emerald-500/30 hover:border-emerald-300 hover:scale-105 active:scale-95 shadow-emerald-950/40'
                              }`}
                            >
                              <span className={!wordsRevealed ? 'blur-md select-none opacity-30 transition-all' : 'transition-all'}>
                                {t.text}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Feedback Alert */}
                    {storyFeedback !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className={`rounded-2xl p-4 text-center font-black border-2 shadow-xl ${
                          storyFeedback === 'correct'
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-emerald-500/20'
                            : 'bg-red-500/20 border-red-400 text-red-200 shadow-red-500/20'
                        }`}
                      >
                        {storyFeedback === 'correct' ? (
                          <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl">
                            <span>🎉</span>
                            <span>¡Excelente! Frase descodificada correctamente.</span>
                          </div>
                        ) : (
                          <div className="text-base sm:text-lg">
                            <span>❌ Respuesta esperada: </span>
                            <span className="text-white underline font-extrabold">"{targetAnswer}"</span>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Centered Controls */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          const normalize = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, '');
                          const correct = normalize(assembled) === normalize(targetAnswer) || normalize(assembled) === normalize(correctOrder.join(' '));
                          setStoryFeedback(correct ? 'correct' : 'wrong');
                          if (correct) {
                            confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
                            playSpeech(targetAnswer, 'en-US', 0.9);
                          }
                        }}
                        disabled={selectedTokenIndexes.length === 0}
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 text-slate-950 font-black text-lg sm:text-xl shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-2"
                      >
                        <Check className="w-6 h-6 stroke-[3]" />
                        <span>Comprobar Respuesta</span>
                      </button>

                      {storyFeedback !== 'idle' && safeLineIndex < lines.length - 1 && (
                        <button
                          onClick={() => {
                            setStoryLineIndex(i => i + 1);
                            setSelectedTokenIndexes([]);
                            setStoryFeedback('idle');
                            setWordsRevealed(false);
                            setShowStoryTarget(false);
                            const next = lines[safeLineIndex + 1];
                            const blocks = next?.puzzle?.easy_blocks && next.puzzle.easy_blocks.length > 0
                              ? next.puzzle.easy_blocks
                              : (next?.en ? next.en.split(' ') : []);
                            const shuffled = [...blocks].map((t: string, i: number) => ({ id: String(i), text: t })).sort(() => Math.random() - 0.5);
                            setShuffledStoryTokens(shuffled);
                          }}
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-black text-lg sm:text-xl shadow-xl shadow-violet-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                        >
                          <span>Siguiente Línea</span>
                          <ChevronRight className="w-6 h-6 stroke-[3]" />
                        </button>
                      )}

                      {safeLineIndex === lines.length - 1 && storyFeedback !== 'idle' && (
                        <button
                          onClick={onNext || onComplete}
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-black text-lg sm:text-xl shadow-xl shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 animate-bounce"
                        >
                          <span>🏆 Continuar a la Siguiente Diapositiva</span>
                          <ChevronRight className="w-6 h-6 stroke-[3]" />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'writing-guided' || Boolean(slide.writingData) || /writing studio|producci[oó]n escrita|guided writing/i.test(slide.title || '')) ? (
            <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#070b18] via-[#0d132b] to-[#060814]">
              {/* Animated Futuristic Ambient Rings & Orbs */}
              <div className="pointer-events-none absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-transparent blur-2xl animate-pulse" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full border border-cyan-500/20 bg-gradient-to-tl from-cyan-600/10 to-transparent blur-2xl animate-pulse" aria-hidden="true" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-cyan-500/5 blur-3xl" aria-hidden="true" />

              {/* Header */}
              <div className="shrink-0 mb-3 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                    <span>✍️</span>
                    <span className="bg-gradient-to-r from-violet-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  <p className="text-sm sm:text-base font-bold text-violet-200/75 mt-0.5">
                    {slide.writingData?.instructions ?? slide.description ?? "Escribe 3 oraciones completas usando la gramática de la clase."}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-black">
                    ⚡ Laboratorio de Producción
                  </span>
                </div>
              </div>

              {/* 3 AI Writing Columns */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-0 py-1">
                {(['positive','negative','question'] as const).map((tab, idx) => {
                  const configs = {
                    positive: {
                      emoji: '+',
                      title: 'Afirmativa',
                      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 ring-emerald-500/20',
                      cardBorder: 'border-emerald-500/30 hover:border-emerald-400/60',
                      cardBg: 'from-[#06181b]/90 to-[#040e14]/90 shadow-[0_0_25px_rgba(16,185,129,0.1)]',
                      textareaBorder: 'border-emerald-500/30 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20',
                      placeholder: 'Escribe tu frase afirmativa (+)\nEj: I wake up at 6:30 AM every day.',
                      accentColor: 'text-emerald-300',
                      buttonBg: 'bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 border-emerald-400/30',
                    },
                    negative: {
                      emoji: '−',
                      title: 'Negativa',
                      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40 ring-rose-500/20',
                      cardBorder: 'border-rose-500/30 hover:border-rose-400/60',
                      cardBg: 'from-[#1a0812]/90 to-[#0f040b]/90 shadow-[0_0_25px_rgba(244,63,94,0.1)]',
                      textareaBorder: 'border-rose-500/30 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20',
                      placeholder: 'Escribe tu frase negativa (−)\nEj: He does not drink coffee in the morning.',
                      accentColor: 'text-rose-300',
                      buttonBg: 'bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border-rose-400/30',
                    },
                    question: {
                      emoji: '?',
                      title: 'Pregunta',
                      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 ring-cyan-500/20',
                      cardBorder: 'border-cyan-500/30 hover:border-cyan-400/60',
                      cardBg: 'from-[#081326]/90 to-[#040a17]/90 shadow-[0_0_25px_rgba(6,182,212,0.1)]',
                      textareaBorder: 'border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20',
                      placeholder: 'Escribe tu pregunta (?)\nEj: Do you work from home on Fridays?',
                      accentColor: 'text-cyan-300',
                      buttonBg: 'bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 border-cyan-400/30',
                    },
                  };

                  const cfg = configs[tab];
                  const currentText = writingInputs[tab] || '';
                  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

                  return (
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`relative flex flex-col justify-between p-5 rounded-[1.75rem] bg-gradient-to-b ${cfg.cardBg} border-2 ${cfg.cardBorder} backdrop-blur-xl transition-all shadow-xl`}
                    >
                      {/* Top Header Card */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl border-2 ring-4 ${cfg.badgeBg} shadow-md`}>
                            {cfg.emoji}
                          </div>
                          <div>
                            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Estructura</span>
                            <h3 className={`text-lg font-black leading-tight ${cfg.accentColor}`}>{cfg.title}</h3>
                          </div>
                        </div>

                        {currentText.trim().length > 0 && (
                          <button
                            onClick={() => playSpeech(currentText, 'en-US', 0.9)}
                            className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${cfg.buttonBg}`}
                            title="Escuchar pronunciación de lo que escribiste"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Textarea */}
                      <div className="flex-1 flex flex-col min-h-0 my-1">
                        <textarea
                          value={currentText}
                          onChange={e => setWritingInputs(prev => ({ ...prev, [tab]: e.target.value }))}
                          placeholder={cfg.placeholder}
                          className={`flex-1 w-full bg-slate-950/70 border-2 rounded-2xl p-4 text-white text-base sm:text-lg font-bold placeholder-white/25 resize-none outline-none transition-all shadow-inner ${cfg.textareaBorder}`}
                        />
                      </div>

                      {/* Card Footer with Word Count & Example Toggle */}
                      <div className="mt-3 flex items-center justify-between gap-2 pt-1 border-t border-white/10 text-xs">
                        <span className="font-bold text-slate-400">
                          {wordCount} {wordCount === 1 ? 'palabra' : 'palabras'}
                        </span>

                        {slide.writingData?.exampleEn && (
                          <button
                            onClick={() => setShowWritingExamples(prev => ({ ...prev, [tab]: !prev[tab] }))}
                            className="font-bold text-cyan-300/80 hover:text-cyan-200 flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
                            <span>{showWritingExamples[tab] ? 'Ocultar' : 'Ver ejemplo'}</span>
                          </button>
                        )}
                      </div>

                      {/* Expandable Example */}
                      <AnimatePresence>
                        {showWritingExamples[tab] && slide.writingData?.exampleEn && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200"
                          >
                            <span className="text-yellow-400 mr-1.5 font-black">💡 Ejemplo:</span>
                            <span>{slide.writingData.exampleEn.split('/')[idx]?.trim()}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Navigation */}
              <div className="shrink-0 flex items-center justify-between gap-3 pt-3">
                <div className="text-xs font-bold text-slate-400">
                  Completa las 3 casillas para afianzar la estructura aprendida.
                </div>
                <button
                  onClick={() => {
                    if (onNext) onNext();
                    else if (onComplete) onComplete();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>Siguiente Diapositiva (Speaking)</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          ) : ((slide.type === 'speaking' || /let'?s talk.*hablar/i.test(slide.title || '')) && resolveSpeakingQuestions(slide).length > 0) ? (
            (() => {
              const speakingQuestions = resolveSpeakingQuestions(slide);
              const safeSpeakingIndex = Math.max(0, Math.min(speakingIndex, speakingQuestions.length - 1));
              const currentQuestion = speakingQuestions[safeSpeakingIndex] || speakingQuestions[0];
              return (
                <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#12163b] to-[#080c1d]">
                  {/* Vibrant Ambient Glow Orbs */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent blur-3xl animate-pulse" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[450px] h-[280px] bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl animate-pulse" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-3 flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>🎙️</span>
                        <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base font-bold text-purple-200/75 mt-0.5">
                        {slide.description || "Responde en voz alta con oraciones completas y buena entonación."}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs sm:text-sm font-black shadow-sm">
                        💬 Pregunta {safeSpeakingIndex + 1} de {speakingQuestions.length}
                      </span>
                    </div>
                  </div>

                  {/* Main Interactive Hero Card */}
                  <div className="flex-1 flex flex-col justify-center gap-4 max-w-4xl mx-auto w-full min-h-0 py-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={safeSpeakingIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="flex-1 flex flex-col justify-between rounded-[2.2rem] border-2 border-purple-400/40 bg-[#0c102a]/90 p-8 sm:p-10 shadow-[0_0_50px_rgba(168,85,247,0.2)] backdrop-blur-2xl text-center min-h-[300px]"
                      >
                        {/* Audio Waveform Animation Visualizer */}
                        <div className="flex items-center justify-center gap-1.5 mb-2">
                          {[16, 28, 42, 24, 36, 48, 30, 20, 38, 26, 44, 18].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [h * 0.4, h, h * 0.5, h * 0.9, h * 0.4] }}
                              transition={{ repeat: Infinity, duration: 1.2 + (i % 4) * 0.2, ease: 'easeInOut' }}
                              className="w-1.5 rounded-full bg-gradient-to-t from-cyan-400 via-purple-400 to-pink-400 shadow-sm shadow-purple-400/50"
                              style={{ height: `${h}px` }}
                            />
                          ))}
                        </div>

                        {/* Question Text */}
                        <div className="my-auto py-3">
                          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-snug tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                            {currentQuestion}
                          </p>
                        </div>

                        {/* Action Button: Listen */}
                        <div className="flex justify-center pt-2">
                          <button
                            onClick={() => {
                              const raw = currentQuestion;
                              const textOnly = raw.replace(/^\d+[\.\)\-\:\s]+/g, '').trim();
                              playSpeech(textOnly, 'en-US', 0.9);
                            }}
                            className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-400 hover:to-pink-400 text-white font-black text-sm shadow-xl shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          >
                            <Volume2 className="w-5 h-5" />
                            <span>Escuchar Pregunta 🔊</span>
                          </button>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* AI Coaching Tip Box */}
                    {showSpeakingHint && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="p-4 rounded-2xl border-2 border-yellow-400/40 bg-yellow-500/10 text-center shadow-lg backdrop-blur-md"
                      >
                        <p className="text-sm sm:text-base font-black text-yellow-200 flex items-center justify-center gap-2">
                          <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0" />
                          <span>💡 Consejo de Fluidez: Responde con una oración completa usando los conceptos practicados hoy.</span>
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Footer Controls */}
                  <div className="shrink-0 flex items-center justify-between gap-3 pt-2 max-w-4xl mx-auto w-full">
                    <button
                      disabled={safeSpeakingIndex === 0}
                      onClick={() => {
                        setSpeakingIndex(i => Math.max(0, i - 1));
                        setShowSpeakingHint(false);
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Anterior</span>
                    </button>

                    {/* Step Dots & Hint Button */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {speakingQuestions.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setSpeakingIndex(i);
                              setShowSpeakingHint(false);
                            }}
                            className={`transition-all rounded-full cursor-pointer ${
                              i === safeSpeakingIndex
                                ? 'w-8 h-2.5 bg-gradient-to-r from-pink-400 to-purple-400 shadow-md shadow-pink-400/50'
                                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'
                            }`}
                            title={`Ir a pregunta ${i + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setShowSpeakingHint(v => !v)}
                        className="p-2 rounded-xl bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer"
                        title="Consejo de Fluidez"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                    </div>

                    {safeSpeakingIndex < speakingQuestions.length - 1 ? (
                      <button
                        onClick={() => {
                          setSpeakingIndex(i => Math.min(speakingQuestions.length - 1, i + 1));
                          setShowSpeakingHint(false);
                        }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={onNext || onComplete}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>¡Gran Práctica! Siguiente Diapositiva</span>
                        <ChevronRight className="w-4 h-4 stroke-[3]" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })()
          ) : null}
        </div>
      ) : (
        <>
        {/* If isChatSlide, render specialized Option 1 Neon Chat Stream layout */}
        {isChatSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Ambient luminous glow blobs */}
          <div
            className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[320px] bg-gradient-to-b from-cyan-400/25 via-violet-600/15 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-[420px] h-[300px] bg-pink-500/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative z-10 shrink-0 mb-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight drop-shadow-md">
                {slide.title?.includes('/') ? (
                  <>
                    <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                      {slide.title.split('/')[0].trim()}
                    </span>
                    <span className="text-white/40 mx-2.5 font-normal">/</span>
                    <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
                      {slide.title.split('/')[1].trim()}
                    </span>
                  </>
                ) : (
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-300 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                )}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs sm:text-sm font-bold text-violet-300 tracking-wide uppercase">
                  {slide.description || 'Context'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <Sparkles className="w-3 h-3" />
                  <span>Chat Interactivo</span>
                </span>
              </div>
            </div>

            {/* Quick Action Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1547]/90 border border-violet-400/40 text-white text-xs sm:text-sm font-bold shadow-lg shadow-violet-900/30">
              <span className="text-cyan-300">💬</span>
              <span>{slide.content?.length || 0} Mensajes</span>
            </div>
          </div>

          {/* Body: Full Stage Chat Stream with Timeline */}
          <div className="relative z-10 flex-1 flex flex-row items-stretch gap-6 min-h-0 overflow-hidden">
            {/* Left Timeline + Chat Messages (Adaptable & Scrollable) */}
            <div className="flex-1 h-full flex flex-col justify-between overflow-y-auto pr-2 custom-scrollbar min-h-0">
              <div className="relative flex flex-col gap-3 sm:gap-4 my-auto py-1">
                {/* Timeline connector line on the left */}
                <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-40 pointer-events-none hidden sm:block" />

                {slide.content?.map((rawLine, idx) => {
                  let speaker = idx % 2 === 0 ? 'Alex' : 'You';
                  let messageText = rawLine;
                  const match = rawLine.match(/^([^:]+):\s*(.+)$/i);
                  if (match) {
                    speaker = match[1].trim();
                    messageText = match[2].trim();
                  }

                  const speakerKey = speaker.toLowerCase();
                  const avatar =
                    AVATAR_PRESETS[speakerKey] ||
                    (idx % 2 === 0 ? AVATAR_PRESETS.alex : AVATAR_PRESETS.sam);
                  const isCyan = idx % 2 === 0 || speakerKey === 'alex';

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + idx * 0.1, duration: 0.35 }}
                      className="relative flex items-center gap-3 sm:gap-4 z-10"
                    >
                      {/* Step Circle Number */}
                      <div className="w-8 h-8 rounded-full bg-[#0a0f28] border-2 border-cyan-400 text-cyan-300 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                        {idx + 1}
                      </div>

                      {/* Avatar Circle */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl border-2 ${avatar.border} ${avatar.glow} ${avatar.bg} shrink-0`}
                      >
                        {avatar.emoji}
                      </div>

                      {/* Message Bubble Container */}
                      <div
                        className={`flex-1 max-w-3xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 backdrop-blur-md transition-all hover:scale-[1.01] ${
                          isCyan
                            ? 'bg-[#0f1d47]/95 border-2 border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.45)]'
                            : 'bg-[#281144]/95 border-2 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.45)]'
                        }`}
                      >
                        {/* Speaker Name */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-xs sm:text-sm font-black tracking-wide uppercase ${
                              isCyan ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]'
                            }`}
                          >
                            {speaker}
                          </span>
                          <span className="text-[11px] font-mono text-white/60">
                            {isCyan ? '09:41 AM' : '09:42 AM ✓✓'}
                          </span>
                        </div>

                        {/* Message Text */}
                        <p className="text-lg sm:text-xl lg:text-[1.45rem] font-bold text-white leading-snug tracking-tight">
                          {messageText}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Typing indicator pill */}
              <div className="shrink-0 pt-2 flex items-center">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18113c]/90 border border-violet-500/40 shadow-lg">
                  <span className="text-xs sm:text-sm font-bold text-violet-300">
                    Alex is typing
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-300 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isTeachingConceptSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
                {slide.title?.includes('/') ? (
                  <>
                    <span>{slide.title.split('/')[0].trim()}</span>
                    <span className="text-white/40 mx-2 font-normal">/</span>
                    <span className="text-cyan-300 font-extrabold">{slide.title.split('/')[1].trim()}</span>
                  </>
                ) : (
                  slide.title
                )}
              </h1>
              <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
                {slide.description || 'Grammar & Vocabulary'}
              </p>
            </div>
            {/* Sparkle icon top right */}
            <div className="text-cyan-300/70 text-2xl hidden sm:block">✨</div>
          </div>

          {/* Body: Left Structured Concept Cards (58%) + Right Cyber-Photo (42%) */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left Column: Stacked High-Contrast Concept Cards */}
            <div className="w-[58%] h-full flex flex-col justify-center gap-3 sm:gap-4 min-w-0 py-1">
              {slide.content?.map((rawLine, idx) => {
                let label = '';
                let text = rawLine.trim();
                let iconType: 'question' | 'answer' | 'formula' | 'vocab' | 'example' | 'tip' | 'rule' = 'example';

                // Explicit label parsing e.g. "Question: What is your name?" or "Formal: Hello!"
                const match = text.match(/^([^:]+):\s*(.+)$/i);
                if (match && match[1].length <= 25) {
                  const rawLabel = match[1].trim().toUpperCase();
                  text = match[2].trim();
                  if (/question|pregunta|q\b|ask/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'question';
                  } else if (/answer|respuesta|a\b/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'answer';
                  } else if (/formal|informal/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'rule';
                  } else {
                    label = rawLabel;
                    iconType = 'vocab';
                  }
                } else if (/(\+|\s+=\s+|\s+->\s+|be\s+\+\s+wearing)/i.test(text)) {
                  label = '⚡ FORMULA / PATTERN';
                  iconType = 'formula';
                } else if (/^(focus on|remember|do not|don't|use |choose |notice |tip:)/i.test(text)) {
                  label = '🎯 USAGE TIP';
                  iconType = 'tip';
                } else if (/^[A-Z][a-z]+(\s*,\s*[A-Z]?[a-z]+){2,}/.test(text) || /^[\w\s]+,\s*[\w\s]+,\s*[\w\s]+/.test(text)) {
                  label = '📚 KEY VOCABULARY';
                  iconType = 'vocab';
                } else if (text.endsWith('.') || text.endsWith('!') || text.endsWith('?')) {
                  label = idx % 2 === 0 ? '💡 MODEL EXAMPLE' : '✨ KEY SENTENCE';
                  iconType = 'example';
                } else {
                  label = `POINT 0${idx + 1}`;
                  iconType = 'vocab';
                }

                const totalLines = slide.content?.length || 1;
                const isCompact = totalLines >= 4;
                const isTwoCards = totalLines <= 2;

                const style = {
                  question: {
                    bg: 'bg-[#0c1435]/95 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.45)]',
                    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
                    iconCircle: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
                    icon: HelpCircle,
                  },
                  answer: {
                    bg: 'bg-[#1c0e35]/95 border-2 border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.45)]',
                    badge: 'bg-pink-500/20 text-pink-300 border-pink-400/50',
                    iconCircle: 'bg-pink-500/20 border-pink-400/60 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
                    icon: CheckCircle,
                  },
                  formula: {
                    bg: 'bg-[#221606]/95 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)]',
                    badge: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
                    iconCircle: 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
                    icon: Zap,
                  },
                  vocab: {
                    bg: 'bg-[#0c163b]/95 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]',
                    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
                    iconCircle: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
                    icon: BookOpen,
                  },
                  example: {
                    bg: 'bg-[#18113c]/95 border-2 border-violet-400 shadow-[0_0_25px_rgba(168,85,247,0.4)]',
                    badge: 'bg-violet-500/20 text-violet-300 border-violet-400/50',
                    iconCircle: 'bg-violet-500/20 border-violet-400/60 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]',
                    icon: Sparkles,
                  },
                  tip: {
                    bg: 'bg-[#0a231c]/95 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]',
                    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
                    iconCircle: 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
                    icon: Target,
                  },
                  rule: {
                    bg: 'bg-[#1e1038]/95 border-2 border-fuchsia-400 shadow-[0_0_25px_rgba(217,70,239,0.4)]',
                    badge: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/50',
                    iconCircle: 'bg-fuchsia-500/20 border-fuchsia-400/60 text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.5)]',
                    icon: CheckCircle,
                  },
                }[iconType];

                const IconComp = style.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.1, duration: 0.35 }}
                    className={`relative rounded-2xl sm:rounded-3xl ${isCompact ? 'p-3 sm:p-3.5' : isTwoCards ? 'p-5 sm:p-7' : 'p-4 sm:p-5'} backdrop-blur-md transition-all hover:scale-[1.015] ${style.bg}`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Left Glowing Icon Circle */}
                      <div
                        className={`${isCompact ? 'w-10 h-10 sm:w-11 sm:h-11' : isTwoCards ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11 sm:w-13 sm:h-13'} rounded-2xl flex items-center justify-center shrink-0 border ${style.iconCircle}`}
                      >
                        <IconComp className={`${isCompact ? 'w-5 h-5' : isTwoCards ? 'w-8 h-8' : 'w-6 h-6 sm:w-7 sm:h-7'}`} />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <span className={`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1 border ${style.badge}`}>
                          {label}
                        </span>
                        <p className={`${isCompact ? 'text-base sm:text-lg lg:text-xl' : isTwoCards ? 'text-2xl sm:text-3xl lg:text-[2.1rem]' : 'text-lg sm:text-xl lg:text-[1.45rem]'} font-extrabold text-white leading-snug tracking-tight drop-shadow-sm`}>
                          {text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Cyber-Neon Beveled Photo */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(168,85,247,0.45)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30">
                <div className="w-full h-full rounded-[22px] overflow-hidden">
                  <img
                    src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-05.jpg'}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isGoalsSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Header */}
          <div className="shrink-0 mb-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
              {slide.description || 'Objectives'}
            </p>
          </div>

          {/* Body: Left 3 Stacked Cards (56%) + Right Photo (44%) */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left 3 Pill Cards */}
            <div className="w-[56%] h-full flex flex-col justify-between py-1 gap-3.5 min-w-0">
              {resolveGoalsList(slide, cls).map((rawLine, idx) => {
                const cleanLine = rawLine.replace(/^[✔️\s*•\d.-]+/, '').trim();
                const style = GOAL_CARD_STYLES[idx % GOAL_CARD_STYLES.length];
                const IconComponent = style.icon;
                const stepNum = String(idx + 1).padStart(2, '0');

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.12, duration: 0.4 }}
                    className={`flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl sm:rounded-3xl ${style.bg} border-2 ${style.border} shadow-xl ${style.glow} backdrop-blur-md transition-all hover:scale-[1.02]`}
                  >
                    {/* Circle Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white shrink-0 shadow-md">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>

                    {/* Step Number */}
                    <span className="text-white/60 font-mono font-black text-xl sm:text-2xl lg:text-[1.7rem] shrink-0">
                      {stepNum}
                    </span>

                    {/* Goal Text */}
                    <span className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-white leading-tight tracking-tight drop-shadow-sm flex-1">
                      {cleanLine}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Photo */}
            <div className="w-[44%] h-full flex items-center justify-center min-h-0">
              <div className="w-full h-full max-h-[460px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/30">
                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-03.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ) : isOpeningSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-7 sm:p-9 z-10 min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left Content (58%) */}
            <div className="w-[58%] h-full flex flex-col justify-between py-1 min-w-0">
              {/* Category tag */}
              <span className="text-violet-300 font-bold text-xs sm:text-sm tracking-widest uppercase opacity-90">
                {slide.description || 'introductions'}
              </span>

              {/* Multi-line gradient title */}
              {(() => {
                const rawClassTitle = cls?.title || '';
                const classTopicEn = rawClassTitle
                  .replace(/^class\s+\d+\s*:\s*/i, '')
                  .replace(/^clase\s+\d+\s*:\s*/i, '')
                  .split('/')[0]
                  ?.trim() || '';

                const classTopicEs = rawClassTitle.includes('/')
                  ? rawClassTitle
                      .split('/')[1]
                      .replace(/^clase\s+\d+\s*:\s*/i, '')
                      .replace(/^class\s+\d+\s*:\s*/i, '')
                      .trim()
                  : '';

                let sTitleEn = slide.title?.split('/')[0]?.trim() || '';
                let sTitleEs = slide.title?.includes('/') ? slide.title.split('/')[1].trim() : '';

                let cleanEn = sTitleEn
                  .replace(/^welcome\s*(to)?\s*/i, '')
                  .replace(/^bienvenid[oa]s?\s*(a)?\s*/i, '')
                  .replace(/^[!¡\s\p{Emoji}]+/gu, '')
                  .replace(/[!¡\s\p{Emoji}]+$/gu, '')
                  .trim();

                let cleanEs = sTitleEs
                  .replace(/^bienvenid[oa]s?\s*(a)?\s*/i, '')
                  .replace(/^welcome\s*(to)?\s*/i, '')
                  .replace(/^[!¡\s\p{Emoji}]+/gu, '')
                  .replace(/[!¡\s\p{Emoji}]+$/gu, '')
                  .trim();

                if (!cleanEn || cleanEn.length < 3 || /^(class|clase|welcome|startup)$/i.test(cleanEn)) {
                  cleanEn = classTopicEn || 'English Class';
                }
                if (!cleanEs || cleanEs.length < 3 || /^(class|clase|bienvenidos|startup)$/i.test(cleanEs)) {
                  cleanEs = classTopicEs || cleanEn;
                }

                return (
                  <div className="flex flex-col">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white/90 leading-tight">
                      Welcome to
                    </h2>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight drop-shadow-md">
                      {cleanEn}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-white/80 mt-0.5">
                      ¡Bienvenidos a {cleanEs}!
                    </p>
                  </div>
                );
              })()}

              {/* 3 Large Screen-Share Optimized Horizontal Cards */}
              <div className="grid grid-cols-3 gap-3.5 my-1 flex-1 items-stretch min-h-[190px]">
                {/* Card 1 */}
                <div className="bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-pink-500/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all hover:scale-[1.03]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-pink-500/35 shrink-0">
                    <Target className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                    {slide.content?.[0] || 'Are you ready to level up your English?'}
                  </span>
                </div>

                {/* Card 2 */}
                <div className="bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-cyan-500/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all hover:scale-[1.03]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-cyan-500/35 shrink-0">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                    {slide.content?.[1] || 'Today we learn how to introduce ourselves.'}
                  </span>
                </div>

                {/* Card 3 */}
                <div className="bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-amber-500/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all hover:scale-[1.03]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-3 shadow-lg shadow-amber-500/35 shrink-0">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                    {slide.content?.[2] || "Let's make some new friends!"}
                  </span>
                </div>
              </div>

              {/* Let's Go Button */}
              {onNext && (
                <div className="pt-1">
                  <button
                    onClick={onNext}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-xl shadow-violet-600/40 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>LET'S GO!</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Image (42%) */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <div className="w-full h-full max-h-[540px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/30">
                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-01.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ) : isWrapUpSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-3 sm:p-5 lg:p-6 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#f59e0b] via-[#fbbf24] to-[#d97706] rounded-2xl sm:rounded-3xl shadow-2xl">
          {/* Inner White Stage Card */}
          <div className="relative flex-1 flex flex-col md:flex-row items-stretch gap-5 sm:gap-6 bg-[#fffcf5] rounded-[1.75rem] border-2 border-amber-200/80 p-5 sm:p-7 shadow-2xl min-h-0 overflow-hidden">
            {/* Left Content Area (58%) */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-slate-800 text-xs sm:text-sm font-black shadow-sm mb-2">
                  <span>🎉</span>
                  <span className="uppercase tracking-wider">Wrap-up & Celebration</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl text-amber-500 font-bold select-none">✨</span>
                  <h1 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-black text-slate-950 tracking-tight leading-tight">
                    {slide.title || 'Class Complete! 🏆'}
                  </h1>
                  <span className="text-2xl sm:text-3xl text-amber-500 font-bold select-none">✨</span>
                </div>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-slate-600 mt-1">
                  {slide.description || 'Great job! You did amazing today! 👏'}
                </p>
              </div>

              {/* 3 Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 my-auto py-2">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#eef2ff] border-2 border-indigo-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    🎯
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[0] || 'Nuevo tema dominado con éxito.'}
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#ecfdf5] border-2 border-emerald-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    ⚡
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[1] || 'Vocabulario y gramática en práctica.'}
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#f0f9ff] border-2 border-sky-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    🚀
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[2] || 'Fluidez y confianza conversacional.'}
                  </p>
                </motion.div>
              </div>

              {/* Encouragement Floating Pill */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 border-2 border-amber-300 shadow-md">
                  <span className="text-xl sm:text-2xl">🔥</span>
                  <span className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
                    Keep going! Level Up! 👏
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image with Celebration Badge (42%) */}
            <div className="w-full md:w-[42%] flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-amber-300 shadow-2xl bg-slate-900">
                {/* Purple Badge on Image */}
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl bg-indigo-600 text-white font-black text-xs sm:text-sm shadow-xl border border-indigo-400/50">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>+1 Class</span>
                </div>

                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-20.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Golden Frame */}
          <div className="flex items-center justify-between gap-3 pt-3 px-2 text-slate-950 font-bold">
            <div className="flex items-center gap-2 text-xs sm:text-sm bg-black/10 px-4 py-2 rounded-2xl">
              <span>📝</span>
              <span className="font-black uppercase tracking-wider text-slate-900">TEACHER NOTE:</span>
              <span className="text-slate-800">{section.action || 'Great participation today! 👏'}</span>
            </div>

            {onComplete && (
              <button
                type="button"
                onClick={() => {
                  fireClassCompletionConfetti();
                  onComplete();
                }}
                className="inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all border border-emerald-300 ring-2 ring-emerald-400/30 cursor-pointer"
                title="Marcar clase como completada"
              >
                <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                <span>¡Marcar Completa!</span>
                <Check className="w-4 h-4 stroke-[3]" />
              </button>
            )}
          </div>
        </div>
      ) : isHomeworkSlide ? (
        <HomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} isLastSlide={isLastSlide} onComplete={onComplete} />
      ) : isVideoHomeworkSlide ? (
        <VideoHomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} isLastSlide={isLastSlide} onComplete={onComplete} />
      ) : isSpeakingBossBattle ? (
        <SpeakingBossBattleGame
          bossName={slide.speakingBossBattle?.bossName}
          bossTitle={slide.speakingBossBattle?.bossTitle}
          bossAvatar={slide.speakingBossBattle?.bossAvatar}
          mission={slide.speakingBossBattle?.mission}
          starterPhrase={slide.speakingBossBattle?.starterPhrase}
          powerWords={slide.speakingBossBattle?.powerWords}
          targetGrammar={slide.speakingBossBattle?.targetGrammar}
          checklist={slide.speakingBossBattle?.checklist}
          timerSeconds={slide.speakingBossBattle?.timerSeconds}
          prepareSeconds={slide.speakingBossBattle?.prepareSeconds}
          rounds={slide.speakingBossBattle?.rounds}
        />
      ) : isRoleplaySlide ? (
        <RolePlayCard slide={slide} />
      ) : slide.type === 'emoji-game' ? (
        <EmojiMadnessGame
          title={slide.title || 'Visual Clue Challenge'}
          description={slide.description || 'Teen Greetings & Casual Introductions'}
          content={slide.content}
          options={slide.options}
          correctOptionIndex={slide.correctOptionIndex}
        />
      ) : slide.type === 'structure-drag' ? (
        <StructureDragExercise slide={slide} />
      ) : slide.type === 'objectives-animated' ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Ambient luminous glow blobs */}
          <div className="pointer-events-none absolute -top-16 left-1/4 w-[400px] h-[250px] bg-gradient-to-b from-cyan-400/20 via-violet-600/10 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-[350px] h-[250px] bg-pink-500/15 blur-3xl" aria-hidden="true" />

          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
                {slide.description || "Class Objectives / Objetivos de la Clase"}
              </p>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="text-cyan-300 text-3xl hidden sm:block"
            >
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            <div className="w-[58%] h-full flex flex-col justify-center gap-3 sm:gap-4 min-w-0 py-1">
              {resolveGoalsList(slide, cls).map((rawLine, idx) => {
                const cleanLine = rawLine.replace(/^[✔️\s*•\d.-]+/, '').trim();
                const style = GOAL_CARD_STYLES[idx % GOAL_CARD_STYLES.length];
                const IconComponent = style.icon;
                const stepNum = String(idx + 1).padStart(2, '0');

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.1 + idx * 0.15 }}
                    className={`flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl sm:rounded-3xl ${style.bg} border-2 ${style.border} shadow-xl ${style.glow} backdrop-blur-md transition-all hover:scale-[1.02]`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white shrink-0 shadow-md">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-white/60 font-mono font-black text-lg sm:text-xl shrink-0">
                      {stepNum}
                    </span>
                    <span className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-white leading-tight tracking-tight drop-shadow-sm flex-1">
                      {cleanLine}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: Floating image frame */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.4)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30"
              >
                <div className="w-full h-full rounded-[22px] overflow-hidden">
                  <img
                    src={slide.imageUrl || '/images/default-objective.jpg'}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : slide.type === 'reading' && slide.content ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0c182a] to-[#121124]">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-16 left-1/4 w-[450px] h-[250px] bg-gradient-to-b from-sky-400/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
          
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-sky-200/80 mt-0.5">
                {slide.description || "Interactive Reading Practice / Lectura Dinámica"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullTextView(!isFullTextView)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-200 text-xs font-bold hover:bg-sky-500/20 transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isFullTextView ? "Modo Paso a Paso" : "Ver Todo el Texto"}</span>
              </button>
              <div className="px-3 py-1.5 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-black">
                {readingLineIndex + 1} de {slide.content.length} frases
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-row items-center gap-6 min-h-0">
            {/* Left: Reading Stage */}
            <div className="w-[60%] h-full flex flex-col justify-between min-h-0">
              {isFullTextView ? (
                <div className="flex-1 rounded-3xl border border-white/15 bg-slate-950/60 p-5 overflow-y-auto space-y-3">
                  {slide.content.map((line, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setReadingLineIndex(idx);
                        setIsFullTextView(false);
                      }}
                      className={`p-3.5 rounded-2xl border text-lg font-bold transition-all cursor-pointer ${
                        readingLineIndex === idx
                          ? 'border-cyan-400 bg-cyan-500/20 text-white shadow-lg'
                          : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-cyan-400 font-mono mr-2">{String(idx + 1).padStart(2, '0')}.</span>
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-cyan-400/50 bg-[#0d162e]/90 p-6 shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-cyan-300">
                    <span>Frase en Foco #{readingLineIndex + 1}</span>
                    <span className="text-white/40">Lectura Guiada</span>
                  </div>

                  {/* Sentence Spotlight */}
                  <motion.div
                    key={readingLineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="my-auto py-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black leading-snug text-white tracking-tight">
                      "{slide.content[readingLineIndex]}"
                    </p>
                  </motion.div>

                  {/* Sentence Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => playSpeech(slide.content?.[readingLineIndex] || '')}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-black transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Escuchar Pronunciación</span>
                      </button>

                      <button
                        onClick={() => {
                          const studentId = new URLSearchParams(window.location.search).get('studentId');
                          const text = slide.content?.[readingLineIndex] || '';
                          vocabService.saveQuickTerm(text, 'Frase de lectura', 'reading', `📖 Lectura: ${slide.title}`, studentId)
                            .then(() => alert("¡Frase guardada en VocabVault! 🎒"))
                            .catch(err => console.error(err));
                        }}
                        className="p-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        title="Guardar frase en VocabVault"
                      >
                        <BookmarkPlus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReadingLineIndex(prev => Math.max(0, prev - 1))}
                        disabled={readingLineIndex === 0}
                        className="px-3.5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-bold transition-colors cursor-pointer"
                      >
                        ← Anterior
                      </button>
                      <button
                        onClick={() => setReadingLineIndex(prev => Math.min(slide.content!.length - 1, prev + 1))}
                        disabled={readingLineIndex === slide.content.length - 1}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-black transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        Siguiente ➔
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Context visual */}
            <div className="w-[40%] h-full flex flex-col justify-center min-h-0">
              <div className="relative w-full h-full max-h-[460px] rounded-3xl overflow-hidden border-2 border-sky-400/40 shadow-xl bg-black/40">
                <img
                  src={slide.imageUrl || '/images/adults-basic-zero-class-01/slide-06.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-200 text-xs font-black w-fit mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tip para el Profesor</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-relaxed drop-shadow">
                    Pídele al alumno leer en voz alta, practica la entonación y aclara cualquier duda antes de pasar a la siguiente frase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || Boolean((slide as any).vocabularyCards) || /verb arena|reto de vocabulario/i.test(slide.title || '')) ? (
        <div className="w-full h-full flex flex-col justify-center min-h-0 p-4">
          <Suspense fallback={<div className="text-white text-center font-bold">Cargando Reto de Vocabulario...</div>}>
            <VerbArenaGame 
              isEmbedded={true}
              customPool={resolveVerbArenaPool(slide)}
              maxRounds={slide.limit || (slide as any).verbsData?.length || slide.verbArenaData?.limit || (resolveVerbArenaPool(slide)?.length) || 6}
              onComplete={onNext || onComplete}
              onNextSlide={onNext}
            />
          </Suspense>
        </div>
      ) : slide.type === 'listening-audio-teacher' && slide.listeningData ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#130e2b] to-[#1e1035]">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-16 left-1/3 w-[450px] h-[280px] bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
          
          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-violet-300 via-pink-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
                {slide.description || "Listening Practice / Práctica de Escucha"}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-xs font-bold">
              <span>Escucha Activa 🎧</span>
            </div>
          </div>

          {/* Main layout */}
          <div className="flex-1 flex flex-row items-center gap-6 min-h-0">
            {/* Left side: Audio Controls */}
            <div className="w-[50%] flex flex-col gap-4">
              <div className="rounded-3xl border border-white/10 bg-[#120d2d]/95 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-violet-300">Reproductor Narrativo</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setListeningSpeed(s => (s === 0.9 ? 0.75 : 0.9))}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Velocidad: {listeningSpeed}x
                    </button>
                    {isPlaying && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      const listeningText = slide.listeningData?.transcription || slide.listeningData?.audioTeacherText || '';
                      if (isPlaying) {
                        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                          window.speechSynthesis.cancel();
                        }
                        setIsPlaying(false);
                      } else {
                        setIsPlaying(true);
                        playSpeech(listeningText, 'en-US', listeningSpeed);
                        const words = listeningText.split(' ').length;
                        const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                        setTimeout(() => setIsPlaying(false), durationSec * 1000);
                      }
                    }}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white shrink-0 hover:scale-105 transition-all shadow-lg active:scale-95 cursor-pointer"
                  >
                    {isPlaying ? (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-7 bg-white rounded-full" />
                        <span className="w-2 h-7 bg-white rounded-full" />
                      </span>
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="text-sm font-bold text-white mb-1">
                      {isPlaying ? "Reproduciendo historia en inglés..." : "Presiona reproducir para escuchar"}
                    </div>
                    <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-violet-500 to-pink-500 ${isPlaying ? 'w-full transition-all duration-[6000ms]' : 'w-0'}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher Transcript Toggle */}
              <div className="rounded-3xl border border-white/5 bg-white/5 p-4 flex flex-col gap-3">
                <button
                  onClick={() => setShowListeningTranscript(!showListeningTranscript)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 text-sm font-black border border-violet-500/30 transition-colors cursor-pointer"
                >
                  {showListeningTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{showListeningTranscript ? "Ocultar Transcripción" : "Revelar Transcripción (Profesor)"}</span>
                </button>

                <AnimatePresence>
                  {showListeningTranscript && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-base text-violet-100 font-bold border-l-4 border-violet-400 pl-3 leading-relaxed mt-2"
                    >
                      {slide.listeningData.transcription || slide.listeningData.audioTeacherText}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side: Comprehension Quiz */}
            <div className="w-[50%] h-full flex flex-col justify-center">
              {slide.listeningData.question ? (
                <div className="rounded-3xl border border-white/10 bg-[#0f0b25]/90 p-5 shadow-xl flex flex-col justify-between h-full max-h-[420px]">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-pink-300">Pregunta de Comprensión</span>
                    <h2 className="text-xl sm:text-2xl font-black text-white mt-1 mb-4 leading-snug">
                      {slide.listeningData.question}
                    </h2>
                  </div>

                  {slide.listeningData.options ? (
                    <div className="grid gap-2.5">
                      {slide.listeningData.options.map((opt, idx) => {
                        const isSelected = selectedListeningOption === idx;
                        const isCorrect = idx === slide.listeningData?.correctOptionIndex;
                        let btnStyle = "border-white/10 bg-white/5 text-white hover:bg-white/10";
                        
                        if (showListeningResult) {
                          if (isCorrect) {
                            btnStyle = "border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
                          } else if (isSelected) {
                            btnStyle = "border-red-400 bg-red-500/20 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
                          }
                        } else if (isSelected) {
                          btnStyle = "border-violet-400 bg-violet-500/20 text-violet-300";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showListeningResult}
                            onClick={() => {
                              setSelectedListeningOption(idx);
                              setShowListeningResult(true);
                              if (isCorrect) confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
                            }}
                            className={`w-full text-left px-4 py-3 rounded-2xl border text-base font-bold flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {showListeningResult && isCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
                  <p className="text-lg text-white/70">Escucha con atención y comenta lo entendido con tu profesor.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && resolveStoryDecoderLines(slide).length > 0 ? (
        <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#140d2b] to-[#0a1b2e]">
          {/* Top Bar */}
          {(() => {
            const lines = resolveStoryDecoderLines(slide);
            const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
            return (
              <div className="shrink-0 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 font-black">
                    📖
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xs font-bold text-pink-300/80">
                      Frase {safeLineIndex + 1} de {lines.length} • Descodificador Narrativo
                    </p>
                  </div>
                </div>

                {/* Line tabs */}
                <div className="flex gap-1.5 bg-slate-950/60 border border-white/10 p-1 rounded-xl">
                  {lines.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setStoryLineIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                        safeLineIndex === idx
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Frase {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Current line workspace */}
          {(() => {
            const lines = resolveStoryDecoderLines(slide);
            const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
            const line = lines[safeLineIndex] || lines[0];
            if (!line) return null;

            const easyBlocks = line?.puzzle?.easy_blocks && line.puzzle.easy_blocks.length > 0
              ? line.puzzle.easy_blocks
              : (line?.en ? line.en.split(' ') : []);
            const targetAnswer = line.preferred_answer || line.en || easyBlocks.join(' ');
            const selectedTokens = selectedTokenIndexes.map(i => shuffledStoryTokens[i]).filter(Boolean);
            const assembledText = selectedTokens.map(t => t.text).join(' ');
            const normalize = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, '');
            const isCorrect = normalize(assembledText) === normalize(targetAnswer) || normalize(assembledText) === normalize(easyBlocks.join(' '));

            const toggleToken = (idx: number) => {
              if (selectedTokenIndexes.includes(idx)) {
                setSelectedTokenIndexes(prev => prev.filter(i => i !== idx));
              } else {
                setSelectedTokenIndexes(prev => [...prev, idx]);
              }
              setStoryFeedback('idle');
            };

            const checkAnswer = () => {
              if (isCorrect) {
                setStoryFeedback('correct');
                confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
              } else {
                setStoryFeedback('wrong');
              }
            };

            return (
              <div className="flex-1 flex flex-col justify-between min-h-0 gap-3">
                {/* Spanish Prompt Card */}
                <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-cyan-500/10 p-4 text-center">
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-violet-300">
                    Construye esta frase en inglés
                  </div>
                  <p className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    {line.es}
                  </p>
                </div>

                {/* Assembled Tokens Slot Box */}
                <div className="min-h-16 rounded-2xl border-2 border-dashed border-cyan-400/30 bg-slate-950/60 p-3 flex items-center justify-center flex-wrap gap-2">
                  {selectedTokens.length > 0 ? (
                    selectedTokens.map((tok, pos) => {
                      const origIndex = selectedTokenIndexes[pos];
                      return (
                        <motion.button
                          key={`${tok.id}-slot`}
                          initial={{ scale: 0.85, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          onClick={() => toggleToken(origIndex)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 text-lg font-black shadow-md hover:scale-[0.98] transition-all cursor-pointer"
                          title="Clic para retirar"
                        >
                          {tok.text}
                        </motion.button>
                      );
                    })
                  ) : (
                    <div className="flex items-center gap-2 text-white/40 text-base font-bold">
                      <Layers3 className="w-5 h-5 text-cyan-400/60" />
                      <span>Presiona las opciones del banco abajo para armar la frase</span>
                    </div>
                  )}
                </div>

                {/* Word Bank Header & Tokens */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-white/50">Banco de palabras</span>
                    <button
                      onClick={() => setWordsRevealed(!wordsRevealed)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-300/40 bg-yellow-300/15 text-yellow-200 text-xs font-black hover:bg-yellow-300 hover:text-slate-950 transition-all cursor-pointer"
                    >
                      {wordsRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{wordsRevealed ? "Ocultar palabras" : "Mostrar palabras (Escondite)"}</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 min-h-[55px]">
                    {shuffledStoryTokens.map((tok, index) => {
                      const isSelected = selectedTokenIndexes.includes(index);
                      return (
                        <button
                          key={tok.id}
                          disabled={isSelected || storyFeedback === 'correct'}
                          onClick={() => {
                            if (!wordsRevealed) setWordsRevealed(true);
                            toggleToken(index);
                          }}
                          className={`px-4 py-2.5 rounded-xl border text-base font-black transition-all cursor-pointer ${
                            isSelected
                              ? 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300/30'
                              : 'border-white/20 bg-white text-slate-950 shadow-md hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-50 active:scale-95'
                          }`}
                        >
                          <span className={!wordsRevealed ? 'blur-sm select-none' : ''}>{tok.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Check / Feedback Bar */}
                <div className="flex items-center gap-3">
                  {selectedTokens.length > 0 && storyFeedback !== 'correct' && (
                    <button
                      onClick={checkAnswer}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-slate-950 text-base font-black shadow-lg hover:scale-[1.01] active:scale-95 transition-all cursor-pointer animate-pulse"
                    >
                      Comprobar Frase ➔
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setSelectedTokenIndexes([]);
                      setStoryFeedback('idle');
                    }}
                    className="px-4 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white text-sm font-bold transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 inline mr-1" />
                    Reiniciar
                  </button>

                  <button
                    onClick={() => {
                      const studentId = new URLSearchParams(window.location.search).get('studentId');
                      vocabService.saveQuickTerm(line.en, line.es, 'story_decoder', `📖 Story: ${slide.title}`, studentId)
                        .then(() => {
                          setSavedWords(prev => new Set(prev).add(line.en));
                          alert("¡Frase guardada en VocabVault! 🎒");
                        })
                        .catch(err => console.error(err));
                    }}
                    className="px-4 py-3 rounded-xl border border-pink-400/40 bg-pink-500/10 hover:bg-pink-500/20 text-pink-200 text-sm font-black transition-colors cursor-pointer"
                  >
                    <BookmarkPlus className="w-4 h-4 inline mr-1" />
                    Guardar Frase
                  </button>
                </div>

                {/* Correct / Wrong Message */}
                <AnimatePresence>
                  {storyFeedback === 'correct' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="rounded-2xl border border-emerald-400/50 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-4 text-slate-950 flex items-center justify-between shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs font-black uppercase">¡Frase Correcta!</div>
                          <div className="text-xl font-black text-white drop-shadow">{line.en}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => playSpeech(line.en)}
                          className="px-3 py-2 rounded-xl bg-slate-950 text-white text-xs font-bold flex items-center gap-1 hover:bg-black cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Escuchar</span>
                        </button>
                        {safeLineIndex < lines.length - 1 && (
                          <button
                            onClick={() => setStoryLineIndex(prev => prev + 1)}
                            className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-black hover:bg-yellow-100 shadow-md cursor-pointer"
                          >
                            Siguiente Frase ➔
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {storyFeedback === 'wrong' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="rounded-xl border border-rose-400/40 bg-rose-500/20 p-3 text-center text-rose-200 text-sm font-bold"
                    >
                      El orden no es correcto aún. Retira algunos bloques e inténtalo de nuevo.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })()}
        </div>
      ) : slide.type === 'writing-guided' ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#1b152b] to-[#1a120c]">
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-amber-300 via-orange-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-amber-200/80 mt-0.5">
                {slide.description || "Writing Studio (+, -, ?) / Producción Escrita"}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
              <span>Producción ✍️</span>
            </div>
          </div>

          {/* 3 Interactive Writing Fields Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-0 py-1">
            {/* Card 1: Affirmative (+) */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs">
                    <span>➕</span> Afirmativo (+)
                  </span>
                  <button
                    onClick={() => setShowWritingExamples(prev => ({ ...prev, positive: !prev.positive }))}
                    className="text-[11px] font-bold text-emerald-400 hover:underline cursor-pointer"
                  >
                    {showWritingExamples.positive ? "Ocultar Ejemplo" : "Ver Ejemplo"}
                  </button>
                </div>
                <p className="text-xs text-white/70 mb-2">Escribe una acción de tu rutina diaria:</p>

                {showWritingExamples.positive && (
                  <div className="mb-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 font-bold">
                    💡 "I wake up at 6:00 AM every day."
                  </div>
                )}

                <textarea
                  value={writingInputs.positive}
                  onChange={e => setWritingInputs(prev => ({ ...prev, positive: e.target.value }))}
                  placeholder="Ej: I drink water in the morning..."
                  className="w-full h-24 rounded-xl border border-white/20 bg-slate-950/60 p-3 text-sm font-bold text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none resize-none"
                />
              </div>
              <div className="text-right text-[10px] text-white/40 font-mono mt-1">
                {writingInputs.positive.trim().split(/\s+/).filter(Boolean).length} palabras
              </div>
            </div>

            {/* Card 2: Negative (-) */}
            <div className="rounded-3xl border border-rose-500/30 bg-rose-950/20 p-4 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-black text-xs">
                    <span>➖</span> Negativo (-)
                  </span>
                  <button
                    onClick={() => setShowWritingExamples(prev => ({ ...prev, negative: !prev.negative }))}
                    className="text-[11px] font-bold text-rose-400 hover:underline cursor-pointer"
                  >
                    {showWritingExamples.negative ? "Ocultar Ejemplo" : "Ver Ejemplo"}
                  </button>
                </div>
                <p className="text-xs text-white/70 mb-2">Escribe algo que NO haces en tu rutina:</p>

                {showWritingExamples.negative && (
                  <div className="mb-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200 font-bold">
                    💡 "I do not drink black coffee."
                  </div>
                )}

                <textarea
                  value={writingInputs.negative}
                  onChange={e => setWritingInputs(prev => ({ ...prev, negative: e.target.value }))}
                  placeholder="Ej: I do not eat heavy breakfast..."
                  className="w-full h-24 rounded-xl border border-white/20 bg-slate-950/60 p-3 text-sm font-bold text-white placeholder-white/30 focus:border-rose-400 focus:outline-none resize-none"
                />
              </div>
              <div className="text-right text-[10px] text-white/40 font-mono mt-1">
                {writingInputs.negative.trim().split(/\s+/).filter(Boolean).length} palabras
              </div>
            </div>

            {/* Card 3: Question (?) */}
            <div className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-4 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black text-xs">
                    <span>❓</span> Pregunta (?)
                  </span>
                  <button
                    onClick={() => setShowWritingExamples(prev => ({ ...prev, question: !prev.question }))}
                    className="text-[11px] font-bold text-amber-400 hover:underline cursor-pointer"
                  >
                    {showWritingExamples.question ? "Ocultar Ejemplo" : "Ver Ejemplo"}
                  </button>
                </div>
                <p className="text-xs text-white/70 mb-2">Escribe una pregunta para tu compañero:</p>

                {showWritingExamples.question && (
                  <div className="mb-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 font-bold">
                    💡 "Do you wake up early on weekends?"
                  </div>
                )}

                <textarea
                  value={writingInputs.question}
                  onChange={e => setWritingInputs(prev => ({ ...prev, question: e.target.value }))}
                  placeholder="Ej: Does he work here? / Do you study?..."
                  className="w-full h-24 rounded-xl border border-white/20 bg-slate-950/60 p-3 text-sm font-bold text-white placeholder-white/30 focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>
              <div className="text-right text-[10px] text-white/40 font-mono mt-1">
                {writingInputs.question.trim().split(/\s+/).filter(Boolean).length} palabras
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="shrink-0 mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <p className="text-xs font-bold text-white/60">
              💡 Lee tus frases al profesor para recibir retroalimentación de pronunciación y gramática en vivo.
            </p>
            <button
              onClick={() => {
                setWritingChecked(true);
                confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 text-sm font-black shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              ¡Verificar Producción! ✨
            </button>
          </div>
        </div>
      ) : slide.type === 'speaking' && slide.content ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d231e] to-[#0c1a2d]">
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-emerald-200/80 mt-0.5">
                {slide.description || "Let's Talk! / Dinámica de Conversación"}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
              Pregunta {speakingIndex + 1} de {slide.content.length}
            </div>
          </div>

          {/* Speaking Hero Spotlight Card */}
          <div className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-emerald-400/50 bg-[#0c1f1d]/90 p-8 shadow-[0_0_35px_rgba(16,185,129,0.25)] backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-emerald-400">
              <span>Misión de Conversación #{speakingIndex + 1}</span>
              <span>¡Habla en Inglés! 🎙️</span>
            </div>

            {/* Question Large Typography */}
            <motion.div
              key={speakingIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="my-auto text-center py-4"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                {slide.content[speakingIndex]}
              </p>

              {/* Starter phrase helper */}
              <div className="mt-4 inline-block px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-emerald-200 text-base font-bold backdrop-blur-sm">
                💬 Puedes iniciar diciendo: <span className="text-white underline">"In my opinion..."</span> o <span className="text-white underline">"I usually..."</span>
              </div>
            </motion.div>

            {/* Carousel Navigation Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => playSpeech(slide.content?.[speakingIndex] || '')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-black transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Escuchar Pregunta</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSpeakingIndex(prev => Math.max(0, prev - 1))}
                  disabled={speakingIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-bold transition-colors cursor-pointer"
                >
                  ← Anterior
                </button>

                <button
                  onClick={() => {
                    if (speakingIndex < slide.content!.length - 1) {
                      setSpeakingIndex(prev => prev + 1);
                    } else {
                      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
                      alert("¡Excelente! Has completado todas las preguntas de conversación de hoy. 🎉");
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-sm font-black transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  {speakingIndex < slide.content.length - 1 ? "Siguiente Pregunta ➔" : "¡Finalizar Conversación! 🎉"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isSpinningWheelSlide && slide.wheelItems ? (
        <div className="w-full h-full flex flex-col items-center justify-center min-h-0 p-4">
          <SpinningWheel
            items={slide.wheelItems}
            mode={slide.wheelMode}
            title={slide.title}
            subtitle={slide.description || "Spin and answer one easy question."}
            onSpinComplete={(item) => setSelectedSpeakingPrompt(item.prompt || item.label)}
          />
        </div>
      ) : (
        <>
          {(() => {
            const rawTitle = slide.title || '';
            const cleanTitle = rawTitle
              .replace(/\(\s*\d+\s*\(\s*(\d+)\s*\/\s*(\d+)\s*\)\s*\)/g, '($1/$2)')
              .replace(/\(\s*(\d+)\s*\/\s*(\d+)\s*\)/g, '($1/$2)');

            return (
              <div className={`${
                isScreenShareExerciseSlide ? 'p-4 sm:p-6 pb-1.5 sm:pb-2' : 'p-4 sm:p-7 pb-2 sm:pb-3'
              } shrink-0`}>
                <h1 className={`${
                  isScreenShareExerciseSlide ? 'text-2xl sm:text-4xl lg:text-[2.5rem]'
                    : 'text-2xl sm:text-5xl'
                } font-black tracking-tight mb-1 sm:mb-1.5`}>
                  {isScreenShareExerciseSlide && cleanTitle.includes('/') ? (
                    <>
                      <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-sm">
                        {cleanTitle.split('/')[0].trim()}
                      </span>
                      <span className="text-white/40 mx-2.5 font-normal">/</span>
                      <span className="bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
                        {cleanTitle.split('/')[1].trim()}
                      </span>
                    </>
                  ) : isScreenShareExerciseSlide ? (
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent">
                      {cleanTitle}
                    </span>
                  ) : (
                    slide.title
                  )}
                </h1>
                {slide.description && (
                  <p className={`${
                    isScreenShareExerciseSlide ? 'text-xs sm:text-sm text-amber-300 font-bold uppercase tracking-wider'
                      : 'text-base sm:text-xl font-medium'
                  }`}>
                    {isScreenShareExerciseSlide ? `🎯 ${slide.description}` : slide.description}
                  </p>
                )}
              </div>
            );
          })()}

          {/* Content Area */}
          <div className={`flex-1 ${
            isScreenShareExerciseSlide ? 'p-4 sm:p-5 pt-1 sm:pt-1.5'
              : 'p-4 sm:p-7 pt-1 sm:pt-2'
          } flex flex-col md:flex-row ${
            isScreenShareExerciseSlide ? 'gap-3 sm:gap-4'
              : 'gap-4 sm:gap-6'
          } overflow-hidden min-h-0 min-w-0`}>

            {/* Left text content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-3 sm:gap-4">

              {slide.type === 'matching-game' && slide.matchingPairs && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <MatchingGame pairs={slide.matchingPairs} onComplete={() => {}} />
                </div>
              )}

              {slide.type === 'mystery-puzzle' && slide.mysteryPuzzleData && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <MysteryPuzzleGame targetWord={slide.mysteryPuzzleData.target}
                    imageUrl={slide.mysteryPuzzleData.imageUrl} emoji={slide.mysteryPuzzleData.emoji}
                    panels={slide.mysteryPuzzleData.panels} />
                </div>
              )}

              {isAlphabetGame && <AlphabetPronunciationGame slide={slide} />}
              {isAccuracyContrastSlide && <AccuracyContrastCard slide={slide} />}

              {isVocabularySlide && slide.vocabularyCards && slide.vocabularyCards.length > 0 ? (
                <VocabularyFlipCards
                  cards={slide.vocabularyCards}
                  audience={cls.id.includes('kid') ? 'kids' : cls.id.includes('teen') ? 'teens' : 'adults'}
                />
              ) : null}

              {/* Generic text lines */}
              {slide.type !== 'spinning-wheel' && slide.type !== 'matching-game' &&
                slide.type !== 'mystery-puzzle' &&
                slide.type !== 'speaking-assessment-experimental' &&
                !isRoleplaySlide && !isAccuracyContrastSlide &&
                (!isVocabularySlide || !slide.vocabularyCards || slide.vocabularyCards.length === 0) && slide.content?.map((line, i) => {
                  if (slide.type === 'reading') {
                    return (
                      <div key={i} className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed bg-black/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg text-justify">
                        {line}
                      </div>
                    );
                  }
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${
                        isScreenShareExerciseSlide
                          ? 'text-2xl sm:text-3xl md:text-[2.4rem] font-black leading-snug p-5 sm:p-7 min-h-[105px] sm:min-h-[125px] flex items-center justify-center text-center bg-[#101740]/95 rounded-2xl sm:rounded-3xl border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.35)] backdrop-blur-md text-white drop-shadow-sm'
                          : 'text-lg sm:text-3xl font-medium leading-relaxed p-4 sm:p-6 bg-black/10 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg'
                      }`}
                    >
                      {line}
                    </motion.div>
                  );
                })}

              {/* AI assistant */}
              {isOptionalAiSpeakingSlide && !slide.hideAiAssistant &&
                slide.type !== 'speaking-assessment-experimental' &&
                slide.type !== 'reading' &&
                slide.type !== 'speaking' &&
                !isRoleplaySlide && !isVocabularySlide && (
                <InlineAiSpeakingAssistant
                  title={isReadingPracticeSlide ? 'Asistente IA de lectura' : 'Asistente IA de esta diapositiva'}
                  initialQuestion={selectedSpeakingPrompt || slideSpeakingQuestions[0] || ''}
                  candidateQuestions={slideSpeakingQuestions}
                  mode={isReadingPracticeSlide ? 'reading' : 'speaking'} />
              )}

              {/* WhatsApp homework share */}
              {(slide.type === 'homework' || (slide.title || '').toLowerCase().includes('homework')) && (
                <div className="mt-6 flex">
                  <button onClick={() => {
                    const hw = slide.content ? slide.content.join('\n') : '';
                    let vid = slide.videoUrl;
                    if (vid?.includes('/embed/')) vid = vid.replace('/embed/', '/watch?v=');
                    const vidText = vid ? `\n🎬 Video: ${vid}` : '';
                    const msg = `📚 Tarea de la clase "${cls.title}":\n\n${slide.description}\n\n${hw}${vidText}\n\n¡Mucho éxito!`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                  }} className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    Compartir por WhatsApp
                  </button>
                </div>
              )}

              {/* Multiple choice options */}
              {slide.type !== 'speaking-assessment-experimental' &&
                !isRoleplaySlide && !isVocabularySlide && slide.options && slide.options.length > 0 && (
                <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-4 pt-1 sm:pt-2 w-full min-h-0">
                  {slide.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === slide.correctOptionIndex;
                    const isRevealed = showResult && isSelected;
                    const letter = ['A', 'B', 'C', 'D', 'E'][idx] || String(idx + 1);

                    let btn = 'w-full px-5 sm:px-7 py-4 sm:py-5 min-h-[70px] sm:min-h-[80px] lg:min-h-[88px] flex-1 rounded-2xl sm:rounded-3xl text-xl sm:text-2xl lg:text-[1.95rem] font-black transition-all shadow-xl border-2 flex items-center justify-between text-left backdrop-blur-md ';

                    if (!showResult) {
                      btn += 'bg-[#18113c]/90 border-violet-500/50 hover:border-cyan-400/80 hover:bg-[#20154d] text-white hover:scale-[1.02] active:scale-[0.99] cursor-pointer shadow-lg shadow-violet-950/40';
                    } else if (isRevealed) {
                      btn += isCorrect
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-300 scale-[1.02] shadow-2xl shadow-emerald-500/50 ring-4 ring-emerald-400/60'
                        : 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400 opacity-70';
                    } else {
                      btn += isCorrect
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-300 ring-2 ring-emerald-400/60'
                        : 'bg-[#150f33]/60 text-white/40 border-white/10 opacity-40';
                    }

                    return (
                      <button key={idx} disabled={showResult} onClick={() => handleOptionSelect(idx)} className={btn}>
                        <div className="flex items-center gap-3.5 sm:gap-5 min-w-0 flex-1">
                          <span className={`inline-flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl font-black text-xl sm:text-2xl shrink-0 shadow-md ${
                            !showResult
                              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-cyan-500/30'
                              : 'bg-white/25 text-white'
                          }`}>{letter}</span>
                          <span className="leading-snug font-black text-left break-words line-clamp-2 sm:line-clamp-none">{opt}</span>
                        </div>
                        {showResult && isCorrect && <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0 ml-2" />}
                        {showResult && isRevealed && !isCorrect && <span className="text-xl sm:text-2xl font-black shrink-0 ml-2 text-white">✕</span>}
                      </button>
                    );
                  })}
                </div>
              )}

              {isLastSlide && onComplete && (
                <div className="mt-auto pt-8">
                  <button
                    onClick={() => {
                      fireClassCompletionConfetti();
                      onComplete();
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-2xl py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl border-2 border-emerald-300 ring-4 ring-emerald-400/40 cursor-pointer"
                  >
                    <Sparkles className="w-7 h-7 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                    <span>¡Marcar Clase Completa!</span>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Image or Video */}
            {slide.type !== 'speaking-assessment-experimental' &&
              !isRoleplaySlide && !isVocabularySlide && (slide.type === 'video' || slide.type === 'homework') && slide.videoUrl ? (
              <div className="flex-1 bg-black/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <iframe src={slide.videoUrl} title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="w-full h-full border-0" />
              </div>
            ) : slide.type !== 'speaking-assessment-experimental' &&
              !isRoleplaySlide && !isAccuracyContrastSlide && !isVocabularySlide && slide.type !== 'spinning-wheel' &&
              slide.imageUrl && !imageError ? (
              <div className="w-[42%] h-full flex items-center justify-center min-h-0">
                <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(168,85,247,0.4)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30">
                  <div className="w-full h-full rounded-[22px] overflow-hidden">
                    <img src={slide.imageUrl} referrerPolicy="no-referrer" alt={slide.title}
                      className="w-full h-full object-cover" onError={() => setImageError(true)}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
        </>
      )
      }

      {/* Teacher Note */}
      {section.action && !isSpeakingBossBattle && !isRoleplaySlide && !isHomeworkSlide && !isVideoHomeworkSlide && !isWrapUpSlide && !hideTeacherNote && (
        <div className={`${isScreenShareExerciseSlide ? 'bg-black/25 p-2.5 sm:p-3' : 'bg-black/30 p-3 sm:p-4'} backdrop-blur-md border-t border-white/10 shrink-0 mt-auto`}>
          <p className={`${isScreenShareExerciseSlide ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'} text-yellow-300/90 font-medium flex items-center gap-2`}>
            <span className="bg-yellow-400/20 px-2 py-1 rounded text-yellow-300 font-bold tracking-wide uppercase text-[10px] sm:text-xs">👩‍🏫 Nota para el profe</span>
            {section.action}
          </p>
        </div>
      )}
    </div>
  );

  // ── Compact wrapper (scales 1280×720 to fit available viewport) ───────────
  if (compact) {
    return (
      <div
        ref={wrapperRef}
        className="relative overflow-hidden rounded-2xl shadow-2xl m-auto shrink-0 select-text"
        style={{
          width: COMPACT_W * scale,
          height: COMPACT_H * scale,
        }}
      >
        <div
          style={{
            width: COMPACT_W,
            height: COMPACT_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <SlideSelectionTranslator className="w-full h-full">
            {slideJSX}
          </SlideSelectionTranslator>
        </div>
      </div>
    );
  }

  // ── Normal wrapper ─────────────────────────────────────────────────────────
  return (
    <div className={`${className} flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl select-text`}>
      <SlideSelectionTranslator className="w-full h-full flex flex-col">
        {slideJSX}
      </SlideSelectionTranslator>
    </div>
  );
}
