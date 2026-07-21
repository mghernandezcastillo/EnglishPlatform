import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Play, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { SpinningWheel } from './SpinningWheel';
import { MatchingGame } from './MatchingGame';
import { MysteryPuzzleGame } from './MysteryPuzzleGame';
import { EmojiMadnessGame } from './EmojiMadnessGame';
import { SpeakingBossBattleGame } from './SpeakingBossBattleGame';

interface PresentationViewerProps {
  cls: CurriculumClass;
  onClose: () => void;
  onComplete?: () => void;
}

export function PresentationViewer({ cls, onClose, onComplete }: PresentationViewerProps) {
  // Flatten all slides from sections
  const allSlides: { section: ClassSection, slide: ClassSlide, totalSlides: number, index: number }[] = [];
  let index = 0;
  
  // Total slides across all sections
  const totalSlides = cls.sections.reduce((acc, s) => acc + s.slides.length, 0);

  cls.sections.forEach(section => {
    section.slides.forEach(slide => {
      allSlides.push({ section, slide, totalSlides, index });
      index++;
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowResult(false);
  }, [currentIndex]);

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
  }, [currentIndex]);

  const handleOptionSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
    setShowResult(true);
  };

  const nextSlide = () => {
    if (currentIndex < allSlides.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  if (allSlides.length === 0) return null;

  const currentData = allSlides[currentIndex];
  if (!currentData) return null;
  const { section, slide } = currentData;
  const isLastSlide = currentIndex === allSlides.length - 1;

  const bgColorMap: Record<string, string> = {
    'intro': 'bg-blue-600',
    'grammar': 'bg-indigo-600',
    'practice': 'bg-amber-500',
    'production': 'bg-emerald-600',
    'feedback': 'bg-purple-600'
  };

  const bgGradient = slide.bgColor || bgColorMap[section.id.split('-')[1]] || 'bg-slate-800';

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-black/50 text-white shrink-0">
        <div className="flex-1 min-w-0 mr-2">
          <h2 className="text-lg sm:text-xl font-bold truncate">{cls.title}</h2>
          <p className="text-gray-400 text-xs sm:text-sm truncate">{section.title} ({section.duration})</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:block text-gray-400 text-sm font-medium">
            Diapositiva {currentIndex + 1} de {allSlides.length}
          </div>
          <div className="sm:hidden text-gray-400 text-xs font-medium">
            {currentIndex + 1} / {allSlides.length}
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-y-auto overflow-x-hidden p-2 sm:p-8">
        <div className="min-h-full flex flex-col items-center justify-center pb-20 sm:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col ${bgGradient} text-white overflow-hidden shrink-0 min-h-[75vh]`}
            >
            {/* Header */}
            <div className="p-5 sm:p-8 pb-2 sm:pb-4 shrink-0">
              <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight mb-2">
                {slide.title}
              </h1>
              {slide.description && (
                <p className="text-base sm:text-xl text-white/80 font-medium">
                  {slide.description}
                </p>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 sm:p-8 pt-2 sm:pt-4 flex flex-col md:flex-row gap-4 sm:gap-8 overflow-y-auto min-h-0">
              {/* Left text content */}
              <div className={`${slide.type === 'emoji-game' || slide.type === 'speaking-boss-battle' ? 'w-full' : 'flex-1'} flex flex-col gap-3 sm:gap-6`}>
                {slide.type === 'spinning-wheel' && slide.wheelItems && (
                  <div className="flex-1 flex flex-col items-center justify-center py-2 sm:py-4">
                    <SpinningWheel items={slide.wheelItems} />
                  </div>
                )}
                
                {slide.type === 'matching-game' && slide.matchingPairs && (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <MatchingGame 
                      pairs={slide.matchingPairs}
                      onComplete={() => console.log('Matching Game Completed')}
                    />
                  </div>
                )}

                {slide.type === 'mystery-puzzle' && slide.mysteryPuzzleData && (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <MysteryPuzzleGame 
                      targetWord={slide.mysteryPuzzleData.target}
                      imageUrl={slide.mysteryPuzzleData.imageUrl}
                      emoji={slide.mysteryPuzzleData.emoji}
                      panels={slide.mysteryPuzzleData.panels}
                    />
                  </div>
                )}

                {slide.type === 'emoji-game' && (
                  <EmojiMadnessGame
                    content={slide.content}
                    options={slide.options}
                    correctOptionIndex={slide.correctOptionIndex}
                  />
                )}

                {slide.type === 'speaking-boss-battle' && (
                  <SpeakingBossBattleGame
                    bossName={slide.speakingBossBattle?.bossName}
                    bossTitle={slide.speakingBossBattle?.bossTitle}
                    bossAvatar={slide.speakingBossBattle?.bossAvatar}
                    timerSeconds={slide.speakingBossBattle?.timerSeconds}
                    prepareSeconds={slide.speakingBossBattle?.prepareSeconds}
                    rounds={slide.speakingBossBattle?.rounds}
                  />
                )}

                {slide.type !== 'spinning-wheel' && slide.type !== 'matching-game' && slide.type !== 'mystery-puzzle' && slide.type !== 'emoji-game' && slide.type !== 'speaking-boss-battle' && slide.content?.map((line, i) => {
                  if (slide.type === 'reading') {
                    return (
                      <div key={i} className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed bg-black/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg text-justify">
                        {line}
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="text-lg sm:text-3xl font-medium leading-relaxed bg-black/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
                      {line}
                    </div>
                  );
                })}

                
                {/* WhatsApp Share Button for Homework */}
                {(slide.type === 'homework' || (slide.title || '').toLowerCase().includes('homework')) && (
                  <div className="mt-6 flex">
                    <button
                      onClick={() => {
                        const classTitle = cls.title;
                        const homeworkText = slide.content ? slide.content.join('\n') : '';
                        let shareableVideoUrl = slide.videoUrl;
                        if (shareableVideoUrl && shareableVideoUrl.includes('/embed/')) {
                          shareableVideoUrl = shareableVideoUrl.replace('/embed/', '/watch?v=');
                        }
                        const videoText = shareableVideoUrl ? `\n🎬 Video: ${shareableVideoUrl}` : '';
                        const message = `📚 Tarea de la clase "${classTitle}":\n\n${slide.description}\n\n${homeworkText}${videoText}\n\n¡Mucho éxito!`;
                        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg max-w-fit"
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      Compartir por WhatsApp
                    </button>
                  </div>
                )}

                {/* Interactive Options Area (inline with content) */}
                {slide.type !== 'emoji-game' && slide.type !== 'speaking-boss-battle' && slide.options && slide.options.length > 0 && (
                  <div className="flex flex-col gap-3 mt-auto pt-4 sm:pt-6 w-full">
                    {slide.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === slide.correctOptionIndex;
                      const isRevealed = showResult && isSelected;
                      
                      let btnClass = "px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all shadow-xl border-2 flex-grow text-center ";
                      
                      if (!showResult) {
                        btnClass += "bg-white text-gray-900 border-white hover:scale-105 hover:bg-gray-100";
                      } else if (isRevealed) {
                        btnClass += isCorrect 
                          ? "bg-emerald-500 text-white border-emerald-400 scale-105" 
                          : "bg-red-500 text-white border-red-400 opacity-50";
                      } else {
                        btnClass += isCorrect
                          ? "bg-emerald-500 text-white border-emerald-400"
                          : "bg-white/20 text-white/50 border-white/10 opacity-50";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={showResult}
                          onClick={() => handleOptionSelect(idx)}
                          className={btnClass}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Final Completion Button */}
                {isLastSlide && onComplete && (
                  <div className="mt-auto pt-8">
                    <button
                      onClick={onComplete}
                      className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-extrabold text-2xl py-6 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      ¡Completar Clase!
                    </button>
                  </div>
                )}
              </div>

              {/* Right content (Image or Video) */}
              {slide.type !== 'emoji-game' && slide.type !== 'speaking-boss-battle' && (slide.type === 'video' || slide.type === 'homework') && slide.videoUrl ? (
                <div className="flex-1 bg-black/20 rounded-xl sm:rounded-2xl border-white/20 flex flex-col items-center justify-center text-center backdrop-blur-sm overflow-hidden min-h-[300px] sm:min-h-[400px]">
                  <iframe 
                    src={slide.videoUrl} 
                    title={slide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              ) : slide.type !== 'emoji-game' && slide.type !== 'speaking-boss-battle' && slide.type !== 'spinning-wheel' && slide.imageUrl ? (
                <div className="flex-1 bg-black/20 rounded-xl sm:rounded-2xl border-white/20 flex flex-col items-center justify-center p-2 text-center backdrop-blur-sm min-h-[200px] sm:min-h-[400px]">
                  <img src={slide.imageUrl} referrerPolicy="no-referrer" alt={slide.title} className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                </div>
              ) : null}
            </div>

            {/* Teacher Suggestion (Small) */}
            {section.action && (
              <div className="bg-black/30 backdrop-blur-md p-3 sm:p-4 border-t border-white/10 shrink-0 mt-auto">
                <p className="text-xs sm:text-sm text-yellow-300/90 font-medium flex items-center gap-2">
                  <span className="bg-yellow-400/20 px-2 py-1 rounded text-yellow-300 font-bold tracking-wide uppercase text-[10px] sm:text-xs">👩‍🏫 Nota para el profe</span>
                  {section.action}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        </div>

        {/* Desktop Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 rounded-full transition-colors text-white backdrop-blur-md"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === allSlides.length - 1}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 rounded-full transition-colors text-white backdrop-blur-md"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Mobile Navigation Buttons */}
        <div className="sm:hidden flex items-center justify-between w-full mt-4 shrink-0 gap-4 pb-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="flex-1 flex justify-center py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-30 disabled:active:bg-white/10 rounded-xl transition-colors text-white backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === allSlides.length - 1}
            className="flex-1 flex justify-center py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-30 disabled:active:bg-white/10 rounded-xl transition-colors text-white backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-white/10 w-full">
        <div 
          className="h-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${((currentIndex + 1) / allSlides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
