import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, RotateCw, Sparkles, Check, HelpCircle } from 'lucide-react';
import type { SpeedCard } from '../../lib/missionService';

interface SpeedCardsProps {
  cards: SpeedCard[];
  theme: 'vibrant' | 'cool';
  onComplete: (results: { score: number; total: number; unknownTerms: string[] }) => void;
}

export function SpeedCards({ cards, theme, onComplete }: SpeedCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [unknownTerms, setUnknownTerms] = useState<string[]>([]);
  const [actionFeedback, setActionFeedback] = useState<'correct' | 'review' | null>(null);

  const currentCard = cards[currentIndex];

  const handleAudio = (text: string) => {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } catch {}
  };

  // Play audio on card appearance
  useEffect(() => {
    if (currentCard) {
      setIsFlipped(false);
      const timer = setTimeout(() => {
        handleAudio(currentCard.audioText || currentCard.term);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleKnowIt = () => {
    if (actionFeedback) return;
    setActionFeedback('correct');
    setScore(prev => prev + 1);

    setTimeout(() => {
      setActionFeedback(null);
      setIsFlipped(false);
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete({ score: score + 1, total: cards.length, unknownTerms });
      }
    }, 450);
  };

  const handleNeedReview = () => {
    if (actionFeedback) return;
    setActionFeedback('review');
    setUnknownTerms(prev => [...prev, currentCard.term]);
    
    // If not flipped, flip to show meaning before proceeding
    if (!isFlipped) {
      setIsFlipped(true);
    }

    setTimeout(() => {
      setActionFeedback(null);
      setIsFlipped(false);
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete({ score, total: cards.length, unknownTerms: [...unknownTerms, currentCard.term] });
      }
    }, 700);
  };

  const isCool = theme === 'cool';
  const bgGradient = isCool 
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white' 
    : 'bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 text-white';

  const cardFrontBg = isCool 
    ? 'bg-slate-900/95 border-indigo-500/40 text-white shadow-2xl' 
    : 'bg-white text-slate-950 border-amber-200/90 shadow-2xl';

  const cardBackBg = isCool 
    ? 'bg-indigo-950/95 border-purple-500/50 text-white shadow-2xl' 
    : 'bg-gradient-to-b from-amber-50 to-orange-50 text-slate-950 border-orange-300 shadow-2xl';

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-4 pt-4 pb-8 sm:p-6 sm:pb-10 overflow-hidden ${bgGradient} select-none h-[100dvh]`}>
      
      {/* Top Header & Progress */}
      <div className="w-full max-w-md flex flex-col gap-2 z-10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Estación 1 • Speed Cards</span>
            </span>
          </div>
          <div className="text-xs font-black bg-black/35 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-white shadow-sm">
            {currentIndex + 1} / {cards.length}
          </div>
        </div>

        {/* Linear Progress bar */}
        <div className="w-full h-2 bg-black/25 rounded-full overflow-hidden p-0.5 backdrop-blur-sm">
          <motion.div 
            className="h-full bg-gradient-to-r from-yellow-300 to-emerald-400 rounded-full shadow-sm"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main 3D Card Container */}
      <div className="w-full max-w-md flex-1 flex items-center justify-center my-auto py-1 perspective-[1200px]">
        <AnimatePresence mode="wait">
          {currentCard && (
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.88, opacity: 0, y: 25 }}
              animate={{ 
                scale: actionFeedback === 'correct' ? 1.04 : actionFeedback === 'review' ? 0.96 : 1, 
                opacity: 1, 
                y: 0 
              }}
              exit={{ 
                scale: 0.85, 
                opacity: 0, 
                x: actionFeedback === 'correct' ? 120 : actionFeedback === 'review' ? -120 : 0 
              }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full h-[52dvh] max-h-[420px] min-h-[310px] cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ perspective: 1200 }}
            >
              {/* Inner 3D Flippable Box */}
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                
                {/* === FRONT FACE === */}
                <div 
                  className={`absolute inset-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center border-2 ${cardFrontBg} ${
                    actionFeedback === 'correct' ? 'ring-4 ring-emerald-400' : 
                    actionFeedback === 'review' ? 'ring-4 ring-amber-400' : ''
                  }`}
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  {/* Top Row */}
                  <div className="w-full flex items-center justify-between shrink-0">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                      isCool ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/50' : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}>
                      {currentCard.type === 'grammar' ? '📐 Estructura' : '📖 Vocabulario'}
                    </span>

                    <span className="text-xs text-slate-400 flex items-center gap-1 font-bold">
                      <RotateCw className="w-3.5 h-3.5 text-orange-500" /> Toca para voltear
                    </span>
                  </div>

                  {/* Main Center Term */}
                  <div className="my-auto flex flex-col items-center justify-center gap-3.5 w-full">
                    <h2 className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight break-words max-w-full leading-tight ${isCool ? '!text-white' : '!text-slate-950'}`}>
                      {currentCard.term}
                    </h2>

                    {currentCard.ipa && (
                      <p className={`text-sm sm:text-base font-mono font-bold ${isCool ? '!text-indigo-300' : '!text-slate-500'}`}>
                        /{currentCard.ipa}/
                      </p>
                    )}

                    {/* Big Pulsing Audio Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudio(currentCard.audioText || currentCard.term);
                      }}
                      className="p-4 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-white shadow-xl shadow-orange-500/40 transform active:scale-95 transition-all cursor-pointer mt-1 border-2 border-white/50 hover:scale-105"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className="w-7 h-7 text-white" />
                    </button>
                  </div>

                  {/* Bottom Hint */}
                  <div className="shrink-0 text-center">
                    <span className="text-xs font-bold text-slate-400 flex items-center justify-center gap-1">
                      <span>¿Sabes qué significa? Toca para ver</span>
                      <span>🔄</span>
                    </span>
                  </div>
                </div>

                {/* === BACK FACE === */}
                <div 
                  className={`absolute inset-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center border-2 ${cardBackBg} ${
                    actionFeedback === 'correct' ? 'ring-4 ring-emerald-400' : 
                    actionFeedback === 'review' ? 'ring-4 ring-amber-400' : ''
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Top Row */}
                  <div className="w-full flex items-center justify-between shrink-0">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                      isCool ? 'bg-purple-900/60 text-purple-200 border border-purple-500/50' : 'bg-amber-200/80 text-amber-900 border border-amber-300'
                    }`}>
                      💡 Significado
                    </span>

                    <span className="text-xs text-slate-400 flex items-center gap-1 font-bold">
                      <RotateCw className="w-3.5 h-3.5 text-orange-500" /> Volver al término
                    </span>
                  </div>

                  {/* Back Meaning Content */}
                  <div className="my-auto flex flex-col items-center justify-center gap-2.5 w-full">
                    <span className={`text-xs font-black uppercase tracking-widest ${isCool ? '!text-purple-300' : '!text-orange-600'}`}>
                      En Español:
                    </span>
                    <h3 className={`text-3xl sm:text-4xl font-black tracking-tight ${isCool ? '!text-white' : '!text-slate-950'}`}>
                      {currentCard.translation}
                    </h3>

                    {currentCard.example && (
                      <div className={`mt-3 p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm italic w-full text-center font-semibold shadow-sm border ${
                        isCool 
                          ? 'bg-slate-900/80 border-indigo-500/40 !text-indigo-100' 
                          : 'bg-white/90 border-amber-300/80 !text-slate-800'
                      }`}>
                        "{currentCard.example}"
                      </div>
                    )}
                  </div>

                  {/* Bottom Hint */}
                  <div className="shrink-0 text-center">
                    <span className="text-xs font-bold text-slate-400">
                      ¿La tienes clara? Elige abajo 👇
                    </span>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Dual Action Touch Buttons (Elevated & Tactile) */}
      <div className="w-full max-w-md flex items-center gap-3.5 z-10 shrink-0 mb-2">
        <button
          type="button"
          onClick={handleNeedReview}
          disabled={actionFeedback !== null}
          className="flex-1 py-4 px-4 rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 active:bg-slate-900/80 backdrop-blur-md text-white font-black text-sm sm:text-base border border-white/25 shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer"
        >
          <span className="text-xl">🤔</span>
          <span>Repasar</span>
        </button>

        <button
          type="button"
          onClick={handleKnowIt}
          disabled={actionFeedback !== null}
          className="flex-1 py-4 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-950/30 flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer border-2 border-emerald-200"
        >
          <span className="text-xl">🎯</span>
          <span>¡Me la sé!</span>
        </button>
      </div>

    </div>
  );
}
