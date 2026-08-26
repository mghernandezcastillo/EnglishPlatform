import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { SlideRenderer } from './SlideRenderer';
import { enhancePresentationClass } from '../lib/presentationEnhancer';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        (document.activeElement as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allSlides.length]);

  const nextSlide = () => {
    if (currentIndex < allSlides.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  if (allSlides.length === 0) return null;

  const currentData = allSlides[currentIndex];
  if (!currentData) return null;
  const { section, slide } = currentData;

  const isBossOrRoleplay = slide.type === 'speaking-boss-battle' || slide.type === 'roleplay';

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
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:block text-gray-300 text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            Diapositiva {currentIndex + 1} de {allSlides.length}
          </div>
          <div className="sm:hidden text-gray-300 text-xs font-bold bg-white/10 px-2.5 py-1 rounded-full">
            {currentIndex + 1} / {allSlides.length}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
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
                onComplete={onComplete}
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
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40"
          title="Anterior (Flecha izquierda)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === allSlides.length - 1}
          className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3.5 bg-black/50 hover:bg-black/80 disabled:opacity-20 disabled:pointer-events-none rounded-full transition-all text-white border border-white/15 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 z-40"
          title="Siguiente (Flecha derecha)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
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
        <button
          onClick={nextSlide}
          disabled={currentIndex === allSlides.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 disabled:opacity-30 rounded-xl text-sm font-bold active:scale-95 transition shadow-lg shadow-indigo-600/30"
        >
          <span>Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
