import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, RotateCcw, ChevronLeft, ChevronRight, LayoutGrid, Maximize2, HelpCircle } from 'lucide-react';
import { VocabularyCard } from '../types';
import { AudioButton } from './AudioButton';

interface VocabularyFlipCardsProps {
  cards: VocabularyCard[];
  bgColor?: string;
  audience?: 'kids' | 'teens' | 'adults';
}

export function VocabularyFlipCards({
  cards,
  audience = 'adults'
}: VocabularyFlipCardsProps) {
  // Track flipped state for each card index
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  
  // Display mode: for lists with >3 cards, default to spotlight (step-by-step 1 or 2 at a time) on screen share
  const isLargeSet = cards.length > 3;
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>(isLargeSet ? 'spotlight' : 'grid');
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Cards per page in spotlight mode: 1 on mobile / 2 on larger screens
  // We navigate 2-by-2 if screen is wide or 1-by-1
  const itemsPerPage = 2;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Reset flips when cards change
  useEffect(() => {
    setFlippedCards({});
    setActivePageIndex(0);
  }, [cards]);

  const toggleCard = useCallback((index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  const flipAll = useCallback((targetState: boolean) => {
    const newState: Record<number, boolean> = {};
    cards.forEach((_, idx) => {
      newState[idx] = targetState;
    });
    setFlippedCards(newState);
  }, [cards]);

  const allFlipped = cards.length > 0 && cards.every((_, idx) => flippedCards[idx]);

  // Keyboard navigation for active spotlight card or flip all
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (viewMode === 'spotlight') {
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          // Go to previous cards in spotlight if not on first page
          if (activePageIndex > 0) {
            e.preventDefault();
            e.stopPropagation();
            setActivePageIndex((prev) => prev - 1);
          }
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          // If not on last page, advance spotlight page
          if (activePageIndex < totalPages - 1) {
            e.preventDefault();
            e.stopPropagation();
            setActivePageIndex((prev) => prev + 1);
          }
        } else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          const firstCardIndex = activePageIndex * itemsPerPage;
          toggleCard(firstCardIndex);
          if (firstCardIndex + 1 < cards.length) {
            toggleCard(firstCardIndex + 1);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [viewMode, activePageIndex, totalPages, cards.length, toggleCard]);

  // Determine cards to render
  const visibleCards = viewMode === 'spotlight'
    ? cards.slice(activePageIndex * itemsPerPage, activePageIndex * itemsPerPage + itemsPerPage)
    : cards;

  const cardStartIndex = viewMode === 'spotlight' ? activePageIndex * itemsPerPage : 0;

  return (
    <div className="w-full flex-1 flex flex-col justify-between select-none py-1 sm:py-2">
      {/* Top Action Bar / Controls for Teacher */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs sm:text-sm font-bold text-white border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>{cards.length} {cards.length === 1 ? 'Palabra Clave' : 'Palabras Clave'}</span>
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/70">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Haz clic para voltear</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isLargeSet && (
            <div className="inline-flex rounded-xl bg-black/20 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                  viewMode === 'spotlight'
                    ? 'bg-white/25 text-white shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                title="Modo Enfoque (1 o 2 a la vez)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Enfoque</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white/25 text-white shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                title="Ver todas en cuadrícula"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cuadrícula</span>
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => flipAll(!allFlipped)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all active:scale-95 shadow-sm"
          >
            {allFlipped ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                <span>Ocultar Todo</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-cyan-300" />
                <span>Voltear Todo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Cards Area */}
      <div className="flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[360px] max-h-[58vh]">
        <div
          className={`w-full h-full grid gap-3 sm:gap-6 items-stretch ${
            viewMode === 'spotlight'
              ? visibleCards.length === 1
                ? 'grid-cols-1 max-w-xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : cards.length === 1
              ? 'grid-cols-1 max-w-xl mx-auto'
              : cards.length === 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
              : cards.length === 3
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
              : cards.length === 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto'
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card, offset) => {
              const actualIndex = cardStartIndex + offset;
              const isFlipped = Boolean(flippedCards[actualIndex]);

              return (
                <motion.div
                  key={`${actualIndex}-${card.word}`}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: offset * 0.05 }}
                  onClick={() => toggleCard(actualIndex)}
                  className="relative w-full h-full min-h-[220px] sm:min-h-[270px] cursor-pointer group select-none"
                  style={{ perspective: 1200 }}
                >
                  <motion.div
                    className="w-full h-full relative"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 220, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* ================= FRONT (ENGLISH) ================= */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 border-2 ${
                        audience === 'kids'
                          ? 'bg-white text-slate-800 border-amber-300 hover:border-amber-400 group-hover:shadow-2xl'
                          : 'bg-white/95 text-slate-900 border-white/80 hover:bg-white group-hover:shadow-2xl'
                      }`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Top Header inside card */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs tracking-wide">
                          #{actualIndex + 1} EN
                        </span>

                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0"
                          title="Escuchar pronunciación"
                        >
                          <AudioButton
                            text={card.word}
                            className="!p-2.5 !bg-indigo-600 !text-white hover:!bg-indigo-700 shadow-md transform active:scale-95 transition-transform"
                          />
                        </div>
                      </div>

                      {/* Main Word */}
                      <div className="my-auto py-2 text-center flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-4xl md:text-[2.6rem] font-black tracking-tight leading-tight text-slate-900 drop-shadow-sm break-words max-w-full">
                          {card.word}
                        </h3>

                        {card.phonetic && (
                          <span className="mt-1 text-xs sm:text-sm font-medium text-slate-500 font-mono">
                            /{card.phonetic}/
                          </span>
                        )}

                        {card.example && (
                          <div className="mt-3 px-3 py-1.5 rounded-xl bg-slate-100/90 text-slate-700 text-xs sm:text-sm font-medium italic max-w-full line-clamp-2">
                            "{card.example}"
                          </div>
                        )}
                      </div>

                      {/* Bottom Hint */}
                      <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs font-semibold pt-1 border-t border-slate-200/60">
                        <RotateCcw className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Clic para ver significado</span>
                      </div>
                    </div>

                    {/* ================= BACK (SPANISH) ================= */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 border-2 ${
                        audience === 'kids'
                          ? 'bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white border-amber-200'
                          : 'bg-gradient-to-br from-indigo-700 via-purple-700 to-slate-900 text-white border-indigo-300/40'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      {/* Top Header inside back */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-amber-300 font-extrabold text-xs tracking-wide border border-white/15">
                          #{actualIndex + 1} ES
                        </span>

                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/75 bg-white/10 px-2.5 py-0.5 rounded-full">
                          Traducción
                        </span>
                      </div>

                      {/* Spanish Translation */}
                      <div className="my-auto py-2 text-center flex flex-col items-center justify-center">
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                          Significado
                        </span>
                        <h3 className="text-2xl sm:text-4xl md:text-[2.6rem] font-black tracking-tight leading-tight text-amber-300 drop-shadow-md break-words max-w-full">
                          {card.translation}
                        </h3>

                        {card.exampleEs && (
                          <div className="mt-3 px-3 py-1.5 rounded-xl bg-black/30 text-white/90 text-xs sm:text-sm font-medium italic max-w-full border border-white/10 line-clamp-2">
                            "{card.exampleEs}"
                          </div>
                        )}
                      </div>

                      {/* Bottom Hint */}
                      <div className="flex items-center justify-center gap-1.5 text-white/80 text-xs font-semibold pt-1 border-t border-white/15">
                        <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                        <span>Clic para volver al inglés</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Spotlight Stepper Controls (for sets > 2 items in spotlight mode) */}
      {viewMode === 'spotlight' && totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-3 sm:pt-4">
          <button
            type="button"
            disabled={activePageIndex === 0}
            onClick={() => setActivePageIndex((prev) => Math.max(0, prev - 1))}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              activePageIndex === 0
                ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/5'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/20 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Dots / Page pills */}
          <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const isActive = activePageIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePageIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive
                      ? 'w-7 bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.7)]'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Página ${idx + 1}`}
                />
              );
            })}
          </div>

          <button
            type="button"
            disabled={activePageIndex >= totalPages - 1}
            onClick={() => setActivePageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              activePageIndex >= totalPages - 1
                ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/5'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/20 active:scale-95'
            }`}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
