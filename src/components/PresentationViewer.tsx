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
}

export function PresentationViewer({ cls, onClose, onComplete }: PresentationViewerProps) {
  const experimentalSpeakingEnabled = import.meta.env.VITE_EXPERIMENTAL_SPEAKING_ASSESSMENT === 'true';
  const enhancedClass = useMemo(() => enhancePresentationClass(cls), [cls]);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);

  // Flatten all slides from sections
  const allSlides: { section: ClassSection; slide: ClassSlide; totalSlides: number; index: number }[] = [];
  let index = 0;

  const totalSlides = enhancedClass.sections.reduce(
    (acc, s) => acc + s.slides.filter((slide) => experimentalSpeakingEnabled || slide.type !== 'speaking-assessment-experimental').length,
    0
  );

  enhancedClass.sections.forEach((section) => {
    section.slides.forEach((slide) => {
      if (!experimentalSpeakingEnabled && slide.type === 'speaking-assessment-experimental') return;
      allSlides.push({ section, slide, totalSlides, index });
      index++;
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload the next slide's image to eliminate loading flash on navigation
  useEffect(() => {
    const nextData = allSlides[currentIndex + 1];
    if (nextData?.slide.imageUrl) {
      const img = new Image();
      img.src = nextData.slide.imageUrl;
    }
  }, [currentIndex, allSlides]);

  const handleTriggerComplete = () => {
    fireClassCompletionConfetti();
    setIsCompletedModalOpen(true);
  };

  const handleFinalizeAndClose = () => {
    setIsCompletedModalOpen(false);
    onComplete?.();
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
        if (currentIndex === allSlides.length - 1 && onComplete) {
          handleTriggerComplete();
        } else {
          nextSlide();
        }
      }
      if (e.key === 'ArrowLeft') prevSlide();
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
  }, [currentIndex, allSlides.length, onComplete, isCompletedModalOpen]);

  const nextSlide = () => {
    if (currentIndex < allSlides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  if (allSlides.length === 0) return null;

  const currentData = allSlides[currentIndex];
  if (!currentData) return null;
  const { section, slide } = currentData;
  const isLastSlide = currentIndex === allSlides.length - 1;

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur flex flex-col select-text">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-2.5 sm:p-3.5 bg-black/60 text-white shrink-0 border-b border-white/10 select-none">
        <div className="flex-1 min-w-0 mr-2">
          <h2 className="text-base sm:text-lg font-black truncate">{cls.title}</h2>
          <p className="text-gray-400 text-xs truncate">
            {section.title} ({section.duration})
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {onComplete && (
            <button
              onClick={handleTriggerComplete}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-black text-white shadow-lg transition-all cursor-pointer ${
                isLastSlide
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 ring-2 ring-emerald-400/80 shadow-emerald-500/50 scale-105 animate-pulse'
                  : 'bg-emerald-600/80 hover:bg-emerald-500 hover:scale-105 active:scale-95'
              }`}
              title="Marcar clase como completada"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="hidden sm:inline">Completar Clase</span>
              <span className="sm:hidden">Completar</span>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          )}

          <div className="hidden sm:block text-gray-300 text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            Diapositiva {currentIndex + 1} de {allSlides.length}
          </div>
          <div className="sm:hidden text-gray-300 text-xs font-bold bg-white/10 px-2.5 py-1 rounded-full">
            {currentIndex + 1} / {allSlides.length}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white cursor-pointer"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Slide Area - 100% Uniform 16:9 Presentation Canvas */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-[min(1600px,calc((100vh-5.5rem)*16/9))] aspect-[16/9] max-h-[calc(100vh-5.5rem)] min-h-[460px] sm:min-h-[540px] mx-auto p-[2.5px] rounded-[1.6rem] sm:rounded-[2.1rem] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-[0_0_40px_rgba(139,92,246,0.35),0_0_80px_rgba(6,182,212,0.2)] flex flex-col shrink-0 overflow-hidden"
          >
            {/* Animated Rotating Gradient Aura — reduced opacity/blur for GPU savings */}
            <div className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)] opacity-40 blur-[2px] pointer-events-none" />

            {/* Inner Slide Stage Wrapper */}
            <div className="relative w-full h-full rounded-[1.45rem] sm:rounded-[1.95rem] overflow-hidden bg-[#0a0c1a] z-10 select-text">
              <SlideRenderer
                cls={cls}
                section={section}
                slide={slide}
                currentIndex={currentIndex}
                totalSlides={allSlides.length}
                onComplete={handleTriggerComplete}
                onNext={nextSlide}
                hideTeacherNote={false}
                className="w-full h-full select-text"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop Navigation Floating Chevrons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer"
          title="Anterior (Flecha izquierda)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {isLastSlide && onComplete ? (
          <button
            onClick={handleTriggerComplete}
            className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 px-4 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 rounded-full transition-all text-white border border-emerald-300 backdrop-blur-md shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 z-40 items-center gap-2 font-black cursor-pointer animate-pulse"
            title="Completar clase"
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-sm">Finalizar</span>
            <Check className="w-5 h-5 stroke-[3]" />
          </button>
        ) : (
          <button
            onClick={nextSlide}
            disabled={currentIndex === allSlides.length - 1}
            className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40 cursor-pointer"
            title="Siguiente (Flecha derecha)"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}
      </div>

      {/* Mobile Footer Navigation Bar */}
      <div className="sm:hidden flex items-center justify-between p-3 bg-black/80 border-t border-white/10 text-white shrink-0 z-30">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 bg-white/10 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>
        <span className="text-xs font-mono font-bold text-gray-300">
          {currentIndex + 1} / {allSlides.length}
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
            disabled={currentIndex === allSlides.length - 1}
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

