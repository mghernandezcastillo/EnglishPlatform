import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Sparkles, Check, Trophy } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { SlideRenderer } from './SlideRenderer';
import { enhancePresentationClass } from '../lib/presentationEnhancer';
import { fireClassCompletionConfetti } from '../lib/celebration';
import { TeacherMissionFlashWidget } from './missions/TeacherMissionFlashWidget';

interface PresentationViewerProps {
  cls: CurriculumClass;
  onClose: () => void;
  onComplete?: () => void;
  track?: string;
  initialEditMode?: boolean;
  onSlideUpdate?: () => void;
  studentId?: string | null;
  studentName?: string;
}


interface ClassModule {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  startIndex: number;
  endIndex: number;
  slideCount: number;
}

function resolveSlideModule(slide: ClassSlide, section: ClassSection, slideIndex: number): { name: string; shortName: string; icon: string; key: string } {
  const type = slide.type || '';
  const title = (slide.title || '').toLowerCase();
  const secTitle = (section.title || '').toLowerCase();

  // 1. Bienvenida o Presentación (First Slide / Welcome)
  if (slideIndex === 0 || (/welcome|bienvenid|presentaci[oó]n|intro|start/i.test(title) && slideIndex < 3 && type !== 'objectives-animated' && type !== 'spinning-wheel')) {
    return { name: 'Welcome & Intro', shortName: 'Bienvenida', icon: '👋', key: 'welcome' };
  }

  // 2. Objetivos (Today's Mission / Metas)
  if (type === 'objectives-animated' || /objetivo|misi[oó]n|goals|mission|metas/i.test(title)) {
    return { name: "Today's Mission", shortName: 'Objetivos', icon: '🎯', key: 'objectives' };
  }

  // 3. Ruleta - Warm up (Spinning Wheel Rompehielos)
  if (type === 'spinning-wheel' || /ruleta|wheel|warm-up|icebreaker|rompehielos/i.test(title)) {
    return { name: 'Icebreaker Wheel', shortName: 'Ruleta - Warm up', icon: '🎡', key: 'wheel' };
  }

  // 4. Grammar Focus / Studio
  if (type === 'grammar-studio' || Boolean(slide.grammarData) || (/grammar|gram[aá]tica|reglas/i.test(title) && type !== 'verb-arena-embedded')) {
    return { name: 'Grammar Studio', shortName: 'Gramática', icon: '📐', key: 'grammar' };
  }

  // 5. AI Verb Arena
  if (type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || /verb arena|reto de vocabulario/i.test(title)) {
    return { name: 'AI Verb Arena', shortName: 'Verb Arena', icon: '⚡', key: 'verb-arena' };
  }

  // 6. Reading Studio
  if (type === 'reading' || Boolean((slide as any).readingData) || /reading|lectura/i.test(title)) {
    return { name: 'Reading Studio', shortName: 'Reading', icon: '📖', key: 'reading' };
  }

  // 7. Listening Lab
  if (type === 'listening-audio-teacher' || Boolean(slide.listeningData) || /listening|audio|escucha/i.test(title)) {
    return { name: 'Listening Lab', shortName: 'Listening', icon: '🎧', key: 'listening' };
  }

  // 8. Story Decoder
  if (type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador|decodificador/i.test(title)) {
    return { name: 'Story Decoder', shortName: 'Decoder', icon: '🧩', key: 'story-decoder' };
  }

  // 9. Writing Studio
  if (type === 'writing-guided' || Boolean(slide.writingData) || Boolean((slide as any).writingPrompts) || /writing|producci[oó]n escrita/i.test(title)) {
    return { name: 'Writing Studio', shortName: 'Writing', icon: '✍️', key: 'writing' };
  }

  // 10. Speaking & Production
  if (type === 'speaking' || type === 'roleplay' || type === 'lets-say' || type === 'speaking-boss-battle' || /speaking|let'?s talk|conversaci[oó]n/i.test(title)) {
    return { name: "Speaking & Fluency", shortName: 'Speaking', icon: '🎙️', key: 'speaking' };
  }

  // 11. Practice / Quiz
  if (type === 'emoji-game' || (slide.options && slide.options.length > 0) || /quiz|pr[aá]ctica/i.test(title)) {
    return { name: 'Práctica & Quiz', shortName: 'Práctica', icon: '🏆', key: 'practice' };
  }

  // 12. Homework & Wrap-up
  if (type === 'homework' || type === 'video' || /homework|tarea|congratulations|cierre|complete/i.test(title) || /5\.\s*wrap-up|cierre/i.test(secTitle)) {
    return { name: 'Homework & Cierre', shortName: 'Tarea', icon: '📝', key: 'homework' };
  }

  return { name: section.title.split('/')[0].trim(), shortName: section.title.split('/')[0].trim(), icon: '📌', key: section.id };
}

const MODULE_THEMES: Record<string, {
  color: string;
  activeBg: string;
  activeBorder: string;
  activeGlow: string;
  inactiveClass: string;
}> = {
  welcome: {
    color: '#06b6d4',
    activeBg: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600',
    activeBorder: 'border-cyan-300',
    activeGlow: 'shadow-[0_0_20px_rgba(6,182,212,0.6)]',
    inactiveClass: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50 hover:bg-cyan-500/35 hover:border-cyan-300 hover:text-white',
  },
  objectives: {
    color: '#38bdf8',
    activeBg: 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600',
    activeBorder: 'border-sky-300',
    activeGlow: 'shadow-[0_0_20px_rgba(56,189,248,0.6)]',
    inactiveClass: 'bg-sky-500/20 text-sky-200 border-sky-400/50 hover:bg-sky-500/35 hover:border-sky-300 hover:text-white',
  },
  wheel: {
    color: '#f59e0b',
    activeBg: 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500',
    activeBorder: 'border-amber-300',
    activeGlow: 'shadow-[0_0_20px_rgba(245,158,11,0.6)]',
    inactiveClass: 'bg-amber-500/20 text-amber-200 border-amber-400/50 hover:bg-amber-500/35 hover:border-amber-300 hover:text-white',
  },
  grammar: {
    color: '#8b5cf6',
    activeBg: 'bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600',
    activeBorder: 'border-purple-300',
    activeGlow: 'shadow-[0_0_20px_rgba(139,92,246,0.6)]',
    inactiveClass: 'bg-purple-500/20 text-purple-200 border-purple-400/50 hover:bg-purple-500/35 hover:border-purple-300 hover:text-white',
  },
  'verb-arena': {
    color: '#f97316',
    activeBg: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500',
    activeBorder: 'border-orange-300',
    activeGlow: 'shadow-[0_0_20px_rgba(249,115,22,0.6)]',
    inactiveClass: 'bg-orange-500/20 text-orange-200 border-orange-400/50 hover:bg-orange-500/35 hover:border-orange-300 hover:text-white',
  },
  reading: {
    color: '#3b82f6',
    activeBg: 'bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-500',
    activeBorder: 'border-blue-300',
    activeGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.6)]',
    inactiveClass: 'bg-blue-500/20 text-blue-200 border-blue-400/50 hover:bg-blue-500/35 hover:border-blue-300 hover:text-white',
  },
  listening: {
    color: '#0ea5e9',
    activeBg: 'bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600',
    activeBorder: 'border-cyan-300',
    activeGlow: 'shadow-[0_0_20px_rgba(14,165,233,0.6)]',
    inactiveClass: 'bg-sky-500/20 text-sky-200 border-sky-400/50 hover:bg-sky-500/35 hover:border-sky-300 hover:text-white',
  },
  'story-decoder': {
    color: '#10b981',
    activeBg: 'bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600',
    activeBorder: 'border-emerald-300',
    activeGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.6)]',
    inactiveClass: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/50 hover:bg-emerald-500/35 hover:border-emerald-300 hover:text-white',
  },
  writing: {
    color: '#f43f5e',
    activeBg: 'bg-gradient-to-r from-rose-500 via-pink-600 to-orange-500',
    activeBorder: 'border-rose-300',
    activeGlow: 'shadow-[0_0_20px_rgba(244,63,94,0.6)]',
    inactiveClass: 'bg-rose-500/20 text-rose-200 border-rose-400/50 hover:bg-rose-500/35 hover:border-rose-300 hover:text-white',
  },
  speaking: {
    color: '#d946ef',
    activeBg: 'bg-gradient-to-r from-fuchsia-500 via-purple-600 to-pink-500',
    activeBorder: 'border-fuchsia-300',
    activeGlow: 'shadow-[0_0_20px_rgba(217,70,239,0.6)]',
    inactiveClass: 'bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/50 hover:bg-fuchsia-500/35 hover:border-fuchsia-300 hover:text-white',
  },
  practice: {
    color: '#14b8a6',
    activeBg: 'bg-gradient-to-r from-teal-500 via-cyan-600 to-indigo-600',
    activeBorder: 'border-teal-300',
    activeGlow: 'shadow-[0_0_20px_rgba(20,184,166,0.6)]',
    inactiveClass: 'bg-teal-500/20 text-teal-200 border-teal-400/50 hover:bg-teal-500/35 hover:border-teal-300 hover:text-white',
  },
  homework: {
    color: '#a855f7',
    activeBg: 'bg-gradient-to-r from-purple-500 via-violet-600 to-pink-500',
    activeBorder: 'border-violet-300',
    activeGlow: 'shadow-[0_0_20px_rgba(168,85,247,0.6)]',
    inactiveClass: 'bg-purple-500/20 text-purple-200 border-purple-400/50 hover:bg-purple-500/35 hover:border-purple-300 hover:text-white',
  },
};

const DEFAULT_THEME = {
  color: '#6366f1',
  activeBg: 'bg-gradient-to-r from-indigo-500 to-purple-600',
  activeBorder: 'border-indigo-400/60',
  activeGlow: 'shadow-[0_0_20px_rgba(99,102,241,0.6)]',
  inactiveClass: 'bg-indigo-500/15 text-indigo-200 border-indigo-400/40 hover:text-white hover:bg-indigo-500/30',
};

export function PresentationViewer({ cls, onClose, onComplete, studentId, studentName }: PresentationViewerProps) {
  const experimentalSpeakingEnabled = import.meta.env.VITE_EXPERIMENTAL_SPEAKING_ASSESSMENT === 'true';
  const enhancedClass = useMemo(() => enhancePresentationClass(cls), [cls]);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all slides from sections (memoized)
  const allSlides = useMemo(() => {
    const slides: { section: ClassSection; slide: ClassSlide; totalSlides: number; index: number }[] = [];
    let index = 0;

    const totalSlides = enhancedClass.sections.reduce(
      (acc, s) => acc + s.slides.filter((slide) => experimentalSpeakingEnabled || slide.type !== 'speaking-assessment-experimental').length,
      0
    );

    enhancedClass.sections.forEach((section) => {
      section.slides.forEach((slide) => {
        if (!experimentalSpeakingEnabled && slide.type === 'speaking-assessment-experimental') return;
        slides.push({ section, slide, totalSlides, index });
        index++;
      });
    });
    return slides;
  }, [enhancedClass, experimentalSpeakingEnabled]);

  // Reset index when active class changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsCompletedModalOpen(false);
  }, [cls?.id]);

  // Safe clamped index to prevent out-of-bounds white screen
  const safeIndex = Math.max(0, Math.min(currentIndex, Math.max(0, allSlides.length - 1)));

  // Compute intelligent skill/module steps
  const classModules = useMemo<ClassModule[]>(() => {
    const modules: ClassModule[] = [];
    allSlides.forEach((item, idx) => {
      const resolved = resolveSlideModule(item.slide, item.section, idx);
      const lastMod = modules[modules.length - 1];

      if (lastMod && lastMod.id === resolved.key) {
        lastMod.endIndex = idx;
        lastMod.slideCount += 1;
      } else {
        modules.push({
          id: resolved.key,
          name: resolved.name,
          shortName: resolved.shortName,
          icon: resolved.icon,
          startIndex: idx,
          endIndex: idx,
          slideCount: 1,
        });
      }
    });
    return modules;
  }, [allSlides]);

  useEffect(() => {
    const nextData = allSlides[safeIndex + 1];
    if (nextData?.slide?.imageUrl) {
      const img = new Image();
      img.src = nextData.slide.imageUrl;
    }
  }, [safeIndex, allSlides]);

  const handleTriggerComplete = () => {
    fireClassCompletionConfetti();
    setIsCompletedModalOpen(true);
  };

  const handleFinalizeAndClose = () => {
    setIsCompletedModalOpen(false);
    onComplete?.();
  };

  const nextSlide = () => {
    if (safeIndex < allSlides.length - 1) {
      setCurrentIndex(safeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        (document.activeElement as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (isCompletedModalOpen) return;
        if (safeIndex < allSlides.length - 1) {
          nextSlide();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (isCompletedModalOpen) return;
        if (safeIndex > 0) {
          prevSlide();
        }
      }
      if (e.key === 'Escape') {
        if (isCompletedModalOpen) {
          handleFinalizeAndClose();
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, allSlides.length, isCompletedModalOpen]);

  if (allSlides.length === 0) return null;

  const currentData = allSlides[safeIndex] || allSlides[0];
  if (!currentData) return null;
  const { section, slide } = currentData;
  const isLastSlide = safeIndex === allSlides.length - 1;

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-b from-[#0c122c] via-[#090e24] to-[#060a1a] flex flex-col select-text overflow-hidden">
      {/* Top Luminous Neon Strip */}
      <div className="w-full h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_18px_rgba(99,102,241,0.9)] shrink-0 z-30" />

      {/* Top Bar */}
      <div className="flex items-center justify-between p-2.5 sm:p-3.5 bg-gradient-to-r from-[#121946]/95 via-[#1a235c]/95 to-[#121946]/95 text-white shrink-0 border-b-2 border-indigo-500/40 backdrop-blur-xl select-none z-20 shadow-xl">
        <div className="flex-1 min-w-0 mr-2">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500/25 via-indigo-500/25 to-purple-500/25 px-3 py-0.5 rounded-full border border-cyan-400/50 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              {enhancedClass.levelTitle}
            </span>
            <span className="text-xs font-semibold text-slate-200 truncate">
              {section?.title || 'Presentación'}
            </span>
            <TeacherMissionFlashWidget
              studentId={studentId}
              studentName={studentName}
              currentClassId={cls.id}
            />
          </div>
          <h2 className="text-sm sm:text-base font-black truncate text-white mt-0.5 drop-shadow">
            {cls.title}
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {onComplete && (
            <button
              onClick={handleTriggerComplete}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-full text-xs font-black transition-all shadow-md shadow-emerald-500/40 border border-emerald-300/60 hover:scale-105 active:scale-95 cursor-pointer"
              title="Marcar clase como completada"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Completar Clase</span>
            </button>
          )}

          {/* Progress Bar & Indicators */}
          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 bg-indigo-900/60 px-3 py-0.5 rounded-full border border-indigo-400/40 shadow-inner">
              <span className="text-xs font-mono font-black text-cyan-300">
                Diapositiva {safeIndex + 1}
              </span>
              <span className="text-xs text-indigo-300/70">/</span>
              <span className="text-xs font-mono text-slate-300">
                {allSlides.length}
              </span>
            </div>
            <div className="w-32 h-2 bg-indigo-950/80 rounded-full overflow-hidden p-[0.5px] border border-indigo-500/30">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)] transition-all duration-300 rounded-full"
                style={{ width: `${((safeIndex + 1) / allSlides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="sm:hidden text-cyan-200 text-xs font-bold bg-indigo-900/70 px-3 py-1 rounded-full border border-indigo-400/40">
            {safeIndex + 1} / {allSlides.length}
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-xl transition text-slate-200 hover:text-white active:scale-95 cursor-pointer border border-transparent hover:border-white/20"
            title="Cerrar presentación (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Station Steps Progress Timeline (Clean, Scrollbar-Free, Vibrant) */}
      <div className="w-full bg-gradient-to-r from-[#0e153b]/95 via-[#161f52]/95 to-[#0e153b]/95 backdrop-blur-xl border-b-2 border-indigo-500/30 px-3 sm:px-6 py-2 flex items-center justify-between gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none z-20 shrink-0 shadow-md">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max mx-auto">
          {classModules.map((mod) => {
            const isCurrent = safeIndex >= mod.startIndex && safeIndex <= mod.endIndex;
            const isPast = safeIndex > mod.endIndex;
            const theme = MODULE_THEMES[mod.id] || DEFAULT_THEME;

            let buttonClass = 'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ';
            if (isCurrent) {
              buttonClass += `${theme.activeBg} text-white ${theme.activeGlow} scale-105 ${theme.activeBorder} ring-2 ring-white/60 font-black shadow-lg`;
            } else if (isPast) {
              buttonClass += 'bg-emerald-500/25 text-emerald-200 border-emerald-400/50 hover:bg-emerald-500/35 hover:border-emerald-300 hover:text-white shadow-sm';
            } else {
              buttonClass += `${theme.inactiveClass} shadow-sm`;
            }

            return (
              <button
                key={`${mod.id}-${mod.startIndex}`}
                onClick={() => setCurrentIndex(mod.startIndex)}
                className={buttonClass}
                title={`Ir a ${mod.name}`}
              >
                <span className="text-sm">{mod.icon}</span>
                <span>{mod.shortName}</span>
                {isPast && <span className="text-emerald-300 text-[11px] font-black">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slide Area with Ambient Studio Lighting */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden min-h-0">
        {/* Atmospheric Ambient Glows behind the Slide Canvas */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-[600px] h-[450px] bg-cyan-500/22 rounded-full blur-[140px]" aria-hidden="true" />
        <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-indigo-600/25 rounded-full blur-[160px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-[600px] h-[450px] bg-fuchsia-600/22 rounded-full blur-[140px]" aria-hidden="true" />

        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-[min(1600px,calc((100vh-5.5rem)*16/9))] aspect-[16/9] max-h-[calc(100vh-5.5rem)] min-h-[460px] sm:min-h-[540px] mx-auto p-[2.5px] rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-[0_0_60px_rgba(99,102,241,0.45),0_0_110px_rgba(6,182,212,0.25)] flex flex-col shrink-0 overflow-hidden"
          >
            <div className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)] opacity-50 blur-[2px] pointer-events-none" />

            <div className="relative w-full h-full rounded-[1.45rem] sm:rounded-[1.95rem] overflow-hidden bg-[#0c102b] z-10 select-text shadow-2xl">
              <SlideRenderer
                cls={cls}
                section={section}
                slide={slide}
                currentIndex={safeIndex}
                totalSlides={allSlides.length}
                onComplete={onComplete ? handleTriggerComplete : undefined}
                onNext={safeIndex < allSlides.length - 1 ? nextSlide : undefined}
                hideTeacherNote={false}
                studentId={studentId}
                studentName={studentName}
                className="w-full h-full select-text"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          disabled={safeIndex === 0}
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3.5 bg-[#121946]/80 hover:bg-[#1c2668] disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-indigo-400/40 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer hover:border-cyan-400/60 hover:shadow-cyan-500/30"
          title="Anterior (Flecha izquierda)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          disabled={safeIndex === allSlides.length - 1}
          className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3.5 bg-[#121946]/80 hover:bg-[#1c2668] disabled:opacity-0 disabled:pointer-events-none rounded-full transition-all text-white border border-indigo-400/40 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer hover:border-cyan-400/60 hover:shadow-cyan-500/30"
          title="Siguiente (Flecha derecha)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Footer Navigation Bar */}
      <div className="sm:hidden flex items-center justify-between p-3 bg-gradient-to-r from-[#121946]/95 via-[#1a235c]/95 to-[#121946]/95 border-t-2 border-indigo-500/30 text-white shrink-0 z-30 shadow-xl">
        <button
          onClick={prevSlide}
          disabled={safeIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/20 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition border border-white/20"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>
        <span className="text-xs font-mono font-black text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
          {safeIndex + 1} / {allSlides.length}
        </span>
        {isLastSlide && onComplete ? (
          <button
            onClick={handleTriggerComplete}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 rounded-xl text-sm font-black active:scale-95 transition shadow-lg shadow-emerald-500/40 animate-pulse cursor-pointer border border-emerald-300/50"
          >
            <span>¡Completar!</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </button>
        ) : (
          <button
            onClick={nextSlide}
            disabled={safeIndex === allSlides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Class Completion Celebration Overlay Modal */}
      <AnimatePresence>
        {isCompletedModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.75, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="relative max-w-md w-full bg-gradient-to-b from-[#1c1445] via-[#130f30] to-[#0a071d] border-2 border-emerald-400/80 rounded-3xl p-6 sm:p-8 text-center text-white shadow-[0_0_80px_rgba(52,211,153,0.4)] flex flex-col items-center gap-4 overflow-hidden"
            >
              {/* Glowing Background Orbs */}
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-yellow-500/25 rounded-full blur-3xl pointer-events-none" />

              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.12, type: 'spring', stiffness: 220 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-yellow-300 p-1 shadow-2xl shadow-emerald-500/50 flex items-center justify-center"
              >
                <div className="w-full h-full rounded-[22px] bg-[#0c0a20] flex items-center justify-center text-5xl">
                  🏆
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-1.5"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-extrabold text-xs tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> ¡Excelente Trabajo!
                </span>
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-300 via-teal-200 to-yellow-200 bg-clip-text text-transparent">
                  ¡Clase Completada!
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium px-2 leading-relaxed">
                  <span className="font-bold text-white">{cls.title}</span> ha sido registrada como completada con éxito.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-2 flex flex-col gap-2"
              >
                <button
                  onClick={handleFinalizeAndClose}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 font-black text-base sm:text-lg text-white shadow-xl shadow-emerald-500/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-300/60"
                >
                  <span>Continuar al Tablero</span>
                  <Check className="w-5 h-5 stroke-[3]" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

