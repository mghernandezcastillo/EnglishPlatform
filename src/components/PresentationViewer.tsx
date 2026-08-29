import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Sparkles, Check, Trophy } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { SlideRenderer } from './SlideRenderer';
import { enhancePresentationClass } from '../lib/presentationEnhancer';
import { fireClassCompletionConfetti } from '../lib/celebration';

interface PresentationViewerProps {
  cls: CurriculumClass;
  onClose: () => void;
  onComplete?: () => void;
  track?: string;
  initialEditMode?: boolean;
  onSlideUpdate?: () => void;
  studentId?: string | null;
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

export function PresentationViewer({ cls, onClose, onComplete, studentId }: PresentationViewerProps) {
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
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur flex flex-col select-text">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-2.5 sm:p-3.5 bg-black/60 text-white shrink-0 border-b border-white/10 select-none">
        <div className="flex-1 min-w-0 mr-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              {enhancedClass.levelTitle}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {section?.title || 'Presentación'}
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-black truncate text-white mt-0.5">
            {cls.title}
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {onComplete && (
            <button
              onClick={handleTriggerComplete}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full text-xs font-bold transition shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
              title="Marcar clase como completada"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Completar Clase</span>
            </button>
          )}

          {/* Progress Bar & Indicators */}
          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-bold text-indigo-400">
                Diapositiva {safeIndex + 1}
              </span>
              <span className="text-xs text-gray-400">/</span>
              <span className="text-xs font-mono text-gray-400">
                {allSlides.length}
              </span>
            </div>
            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 rounded-full"
                style={{ width: `${((safeIndex + 1) / allSlides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="sm:hidden text-gray-300 text-xs font-bold bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
            {safeIndex + 1} / {allSlides.length}
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition text-gray-300 hover:text-white active:scale-95 cursor-pointer"
            title="Cerrar presentación (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Station Steps Progress Timeline (Clean, Scrollbar-Free) */}
      <div className="w-full bg-[#080a18]/90 backdrop-blur border-b border-white/10 px-3 sm:px-6 py-2 flex items-center justify-between gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none z-20 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max mx-auto">
          {classModules.map((mod) => {
            const isCurrent = safeIndex >= mod.startIndex && safeIndex <= mod.endIndex;
            const isPast = safeIndex > mod.endIndex;
            return (
              <button
                key={`${mod.id}-${mod.startIndex}`}
                onClick={() => setCurrentIndex(mod.startIndex)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 scale-105 border border-indigo-400/50 ring-1 ring-white/30'
                    : isPast
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25'
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10'
                }`}
                title={`Ir a ${mod.name}`}
              >
                <span className="text-sm">{mod.icon}</span>
                <span>{mod.shortName}</span>
                {isPast && <span className="text-emerald-400 text-[11px] font-black">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-[min(1600px,calc((100vh-5.5rem)*16/9))] aspect-[16/9] max-h-[calc(100vh-5.5rem)] min-h-[460px] sm:min-h-[540px] mx-auto p-[2.5px] rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-[0_0_40px_rgba(139,92,246,0.35),0_0_80px_rgba(6,182,212,0.2)] flex flex-col shrink-0 overflow-hidden"
          >
            <div className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)] opacity-40 blur-[2px] pointer-events-none" />

            <div className="relative w-full h-full rounded-[1.45rem] sm:rounded-[1.95rem] overflow-hidden bg-[#0a0c1a] z-10 select-text">
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
                className="w-full h-full select-text"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          disabled={safeIndex === 0}
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer"
          title="Anterior (Flecha izquierda)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          disabled={safeIndex === allSlides.length - 1}
          className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-0 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer"
          title="Siguiente (Flecha derecha)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Footer Navigation Bar */}
      <div className="sm:hidden flex items-center justify-between p-3 bg-black/80 border-t border-white/10 text-white shrink-0 z-30">
        <button
          onClick={prevSlide}
          disabled={safeIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 bg-white/10 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>
        <span className="text-xs font-mono font-bold text-gray-300">
          {safeIndex + 1} / {allSlides.length}
        </span>
        {isLastSlide && onComplete ? (
          <button
            onClick={handleTriggerComplete}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 rounded-xl text-sm font-black active:scale-95 transition shadow-lg shadow-emerald-500/40 animate-pulse cursor-pointer"
          >
            <span>¡Completar!</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </button>
        ) : (
          <button
            onClick={nextSlide}
            disabled={safeIndex === allSlides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition shadow-lg shadow-indigo-600/30"
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

