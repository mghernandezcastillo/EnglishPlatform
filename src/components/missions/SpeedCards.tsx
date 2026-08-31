import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, RotateCw, Check, X, BookOpen, Star } from 'lucide-react';

interface SpeedCardsProps {
  cards: Array<{
    term: string;
    translation: string;
    ipa: string;
    audioText: string;
    example: string;
    type: 'vocab' | 'grammar';
  }>;
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

  const handleAudio = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Auto-play audio when a new card appears
  useEffect(() => {
    if (currentCard) {
      handleAudio(currentCard.audioText || currentCard.term);
    }
  }, [currentIndex, currentCard, handleAudio]);

  const handleKnowIt = () => {
    if (actionFeedback) return;
    setActionFeedback('correct');
    setScore(s => s + 1);

    setTimeout(() => {
      setActionFeedback(null);
      setIsFlipped(false);
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete({ score: score + 1, total: cards.length, unknownTerms });
      }
    }, 600);
  };

  const handleNeedReview = () => {
    if (actionFeedback) return;
    setActionFeedback('review');
    setUnknownTerms(prev => [...prev, currentCard.term]);
    setIsFlipped(true);

    setTimeout(() => {
      setActionFeedback(null);
      setIsFlipped(false);
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete({ score, total: cards.length, unknownTerms: [...unknownTerms, currentCard.term] });
      }
    }, 1200);
  };

  const isCool = theme === 'cool';
  const bgGradient = isCool 
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white' 
    : 'bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 text-white';

  const cardBg = isCool 
    ? 'bg-slate-900/90 border-slate-700 text-white shadow-2xl' 
    : 'bg-white text-slate-900 border-amber-200/80 shadow-2xl';

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-4 pt-4 pb-8 sm:p-6 sm:pb-10 overflow-hidden ${bgGradient} select-none h-[100dvh]`}>
      
      {/* Top Header & Progress */}
      <div className="w-full max-w-md flex flex-col gap-2 z-10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider">
              Estación 1 • Vocabulario
            </span>
          </div>
          <div className="text-xs font-black bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            Tarjeta {currentIndex + 1} de {cards.length}
          </div>
        </div>

        {/* Linear Progress bar */}
        <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden p-0.5">
          <motion.div 
            className="h-full bg-white rounded-full shadow-sm"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div className="w-full max-w-md flex-1 flex items-center justify-center my-auto py-1">
        <AnimatePresence mode="wait">
          {currentCard && (
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ 
                scale: actionFeedback === 'correct' ? 1.05 : actionFeedback === 'review' ? 0.98 : 1, 
                opacity: 1, 
                y: 0 
              }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className={`relative w-full h-[50dvh] max-h-[410px] min-h-[300px] rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-between text-center cursor-pointer border-2 shadow-2xl transition-all ${cardBg} ${
                actionFeedback === 'correct' ? 'ring-4 ring-emerald-400 bg-emerald-50 text-slate-950' : 
                actionFeedback === 'review' ? 'ring-4 ring-amber-400 bg-amber-50 text-slate-950' : ''
              }`}
            >
              {/* Category Badge & Flip Icon */}
              <div className="w-full flex items-center justify-between shrink-0">
                <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                  isCool ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/50' : 'bg-orange-100 text-orange-700'
                }`}>
                  {currentCard.type === 'grammar' ? '📐 Estructura' : '📖 Vocabulario'}
                </span>

                <span className="text-xs text-slate-400 flex items-center gap-1 font-bold">
                  <RotateCw className="w-3.5 h-3.5 animate-spin-slow" /> Toca para voltear
                </span>
              </div>

              {/* Center Content (Front / Back) */}
              <div className="my-auto flex flex-col items-center justify-center gap-3 w-full">
                {!isFlipped ? (
                  <>
                    <h2 className={`text-3xl sm:text-4xl font-black tracking-tight break-words max-w-full ${isCool ? '!text-white' : '!text-slate-950'}`}>
                      {currentCard.term}
                    </h2>

                    {currentCard.ipa && (
                      <p className={`text-sm font-mono font-bold ${isCool ? '!text-indigo-300' : '!text-slate-500'}`}>
                        /{currentCard.ipa}/
                      </p>
                    )}

                    {/* Big Audio Speaker Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudio(currentCard.audioText || currentCard.term);
                      }}
                      className="p-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white shadow-lg shadow-orange-500/30 transform active:scale-95 transition-all cursor-pointer mt-1"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className="w-6 h-6 text-white" />
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-2 w-full"
                  >
                    <span className={`text-xs font-black uppercase tracking-wider ${isCool ? '!text-amber-400' : '!text-orange-600'}`}>
                      Significado:
                    </span>
                    <h3 className={`text-3xl sm:text-4xl font-black tracking-tight ${isCool ? '!text-white' : '!text-slate-950'}`}>
                      {currentCard.translation}
                    </h3>

                    {currentCard.example && (
                      <div className={`mt-3 p-3.5 rounded-2xl text-xs sm:text-sm italic w-full text-center font-medium shadow-inner ${
                        isCool ? 'bg-indigo-950/60 border border-indigo-700/50 !text-indigo-100' : 'bg-orange-50/90 border border-orange-200/80 !text-slate-800'
                      }`}>
                        "{currentCard.example}"
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Bottom Hint */}
              <div className="shrink-0 text-center">
                <span className="text-[11px] font-semibold text-slate-400">
                  {isFlipped ? '¿Ya la recuerdas bien?' : '¿Conoces el significado de esta palabra?'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Dual Action Touch Buttons (Elevated & User Friendly) */}
      <div className="w-full max-w-md flex items-center gap-3.5 z-10 shrink-0 mb-2">
        <button
          onClick={handleNeedReview}
          disabled={actionFeedback !== null}
          className="flex-1 py-4 px-4 rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 active:bg-slate-900/80 backdrop-blur-md text-white font-black text-sm sm:text-base border border-white/20 shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer"
        >
          <span className="text-lg">🤔</span>
          <span>Repasar</span>
        </button>

        <button
          onClick={handleKnowIt}
          disabled={actionFeedback !== null}
          className="flex-1 py-4 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-950/30 flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer border-2 border-emerald-200"
        >
          <span className="text-lg">🎯</span>
          <span>¡Me la sé!</span>
        </button>
      </div>

    </div>
  );
}
