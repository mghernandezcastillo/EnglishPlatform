/**
 * SlideRenderer — renders a single ClassSlide exactly as PresentationViewer does,
 * but as an embeddable component (no fixed overlay).
 *
 * compact=true: renders at 1280×720 then CSS-scales to the wrapper size,
 * preserving 16:9 aspect ratio and exact typography from the real player.
 */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Check, Play, ArrowRight, Target, BookOpen, Users, MessageSquare, HelpCircle, Sparkles, Eye, EyeOff, Zap } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
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

  useEffect(() => {
    setSelectedOption(null);
    setShowResult(false);
    setSelectedSpeakingPrompt('');
    setImageError(false);
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
    slide.type !== 'spinning-wheel' &&
    slide.type !== 'matching-game' &&
    slide.type !== 'mystery-puzzle' &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'structure-drag' &&
    (/accuracy contrast|contraste de precisi[oó]n/i.test(slide.title || '') ||
      Boolean(slide.content && slide.content.some((l) => /^correct this:/i.test(l) || /^accurate:/i.test(l))));

  const isOpeningSlide =
    currentIndex === 0 &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'speaking-boss-battle' &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'structure-drag' &&
    !isAccuracyContrastSlide &&
    slide.type !== 'roleplay';

  const isSpinningWheelSlide = slide.type === 'spinning-wheel';

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
    (Boolean(slide.title && /goal|objetivo/i.test(slide.title)) || Boolean(slide.description && /objective/i.test(slide.description)));

  const isChatSlide =
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
              {slide.content?.map((rawLine, idx) => {
                const cleanLine = rawLine.replace(/^[✔️\s*•-]+/, '').trim();
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-slate-800 text-xs sm:text-sm font-black shadow-sm mb-3">
                  <span>🎉</span>
                  <span className="uppercase tracking-wider">Wrap-up</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-amber-500 font-bold select-none">✨</span>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-black text-slate-950 tracking-tight leading-none">
                    Class Complete!
                  </h1>
                  <span className="text-3xl text-amber-500 font-bold select-none">✨</span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-slate-600 mt-2">
                  Great job! You did amazing!
                </p>
              </div>

              {/* 3 Achievement Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-auto py-2">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-3xl bg-[#eef2ff] border-2 border-indigo-200/80 shadow-md transition-all"
                >
                  <div className="text-4xl sm:text-5xl mb-2 filter drop-shadow-sm select-none">
                    📖
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 leading-tight">
                    New topic
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-indigo-600 uppercase tracking-wider">
                    mastered!
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-3xl bg-[#ecfdf5] border-2 border-emerald-200/80 shadow-md transition-all"
                >
                  <div className="text-4xl sm:text-5xl mb-2 filter drop-shadow-sm select-none">
                    ⭐
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 leading-tight">
                    Your English
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider">
                    leveled up!
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-3xl bg-[#f0f9ff] border-2 border-sky-200/80 shadow-md transition-all"
                >
                  <div className="text-4xl sm:text-5xl mb-2 filter drop-shadow-sm select-none">
                    🚀
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 leading-tight">
                    One step closer
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-wider">
                    to your goals!
                  </p>
                </motion.div>
              </div>

              {/* Encouragement Floating Pill */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 border-2 border-amber-300 shadow-md">
                  <span className="text-2xl">🔥</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Keep going! 👏
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
          <div className="flex items-center justify-start gap-3 pt-3 px-2 text-slate-950 font-bold">
            <div className="flex items-center gap-2 text-xs sm:text-sm bg-black/10 px-4 py-2 rounded-2xl">
              <span>📝</span>
              <span className="font-black uppercase tracking-wider text-slate-900">TEACHER NOTE:</span>
              <span className="text-slate-800">{section.action || 'Great participation today! 👏'}</span>
            </div>
          </div>
        </div>
      ) : isHomeworkSlide ? (
        <HomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} />
      ) : isVideoHomeworkSlide ? (
        <VideoHomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} />
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
                  <button onClick={onComplete} className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-extrabold text-2xl py-6 rounded-2xl hover:scale-105 transition-transform shadow-2xl">
                    <CheckCircle className="w-8 h-8 text-green-500" /> ¡Completar Clase!
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
