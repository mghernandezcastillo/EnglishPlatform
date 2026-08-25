import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Volume2, Copy, Check, X, Sparkles, Loader2, VolumeX } from 'lucide-react';
import { quickTranslate, QuickTranslateResult } from '../lib/quickTranslate';
import { playAudio, stopAudio } from '../lib/audio';

interface SelectionCoords {
  x: number;
  y: number;
  width: number;
  height: number;
  placement: 'top' | 'bottom';
}

interface SlideSelectionTranslatorProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const SlideSelectionTranslator: React.FC<SlideSelectionTranslatorProps> = ({
  children,
  className = '',
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const [selectedText, setSelectedText] = useState<string>('');
  const [coords, setCoords] = useState<SelectionCoords | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [translationResult, setTranslationResult] = useState<QuickTranslateResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Close popup helper
  const closePopup = useCallback(() => {
    setIsOpen(false);
    setCoords(null);
    setSelectedText('');
    setTranslationResult(null);
    setCopied(false);
    stopAudio();
    setIsPlayingAudio(false);
  }, []);

  // Handle selection detection on mouseup / touchend
  const handleSelectionCheck = useCallback(() => {
    if (disabled) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      // If user clicked inside the popup, do not close it
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 1 || text.length > 350) {
      return;
    }

    // Ensure the selection is within our container
    if (containerRef.current) {
      const range = selection.getRangeAt(0);
      const isInside = containerRef.current.contains(range.commonAncestorContainer);
      if (!isInside) return;

      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;

      // Determine top vs bottom placement based on viewport
      const spaceAbove = rect.top;
      const placement: 'top' | 'bottom' = spaceAbove < 160 ? 'bottom' : 'top';

      setCoords({
        x: rect.left + rect.width / 2,
        y: placement === 'top' ? rect.top - 10 : rect.bottom + 10,
        width: rect.width,
        height: rect.height,
        placement,
      });

      setSelectedText(text);
      setIsOpen(true);
      // Reset previous translation state when a new selection is made
      setTranslationResult(null);
      setCopied(false);
    }
  }, [disabled]);

  // Dismiss on clicking outside or escape key
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        return; // Click inside popup
      }
      // If clicking outside, close popup
      if (isOpen) {
        closePopup();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closePopup]);

  // Execute translation
  const handleTranslate = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedText || isLoading) return;

    setIsLoading(true);
    try {
      const result = await quickTranslate(selectedText);
      setTranslationResult(result);
    } catch (err) {
      console.error('Translation error:', err);
      setTranslationResult({
        original: selectedText,
        translation: 'Error al traducir',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Play pronunciation
  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedText) return;

    if (isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    playAudio(selectedText, 'en-US', {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false),
    });
  };

  // Copy text to clipboard
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = translationResult
      ? `${selectedText} → ${translationResult.translation}`
      : selectedText;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      onMouseUp={handleSelectionCheck}
      onTouchEnd={handleSelectionCheck}
      className={`relative select-text ${className}`}
    >
      {children}

      {/* Floating Translation Popup */}
      <AnimatePresence>
        {isOpen && coords && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.9, y: coords.placement === 'top' ? 8 : -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              left: `${Math.max(16, Math.min(window.innerWidth - 320, coords.x))}px`,
              top: `${coords.y}px`,
              transform: coords.placement === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
            }}
            className="z-[9999] pointer-events-auto select-none"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Pill or Expanded Card */}
            <div className="bg-slate-950/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.3)] text-white p-2.5 min-w-[240px] max-w-[380px]">
              {/* Initial Action Bar when translation hasn't been clicked yet */}
              {!translationResult && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleTranslate}
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-sm font-black rounded-xl shadow-md active:scale-95 transition-all"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Languages className="w-4 h-4 text-cyan-200" />
                    )}
                    <span>{isLoading ? 'Traduciendo...' : 'Traducir'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePronounce}
                    className="p-2 hover:bg-white/10 text-cyan-300 hover:text-white rounded-xl transition active:scale-95"
                    title="Escuchar pronunciación"
                  >
                    {isPlayingAudio ? (
                      <VolumeX className="w-4 h-4 text-rose-400 animate-pulse" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl transition active:scale-95"
                    title="Copiar texto seleccionado"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl transition"
                    title="Cerrar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Expanded Card with Translation Results */}
              {translationResult && (
                <div className="space-y-2.5">
                  {/* Header: Original & Badges */}
                  <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-slate-400 truncate max-w-[180px]">
                          "{selectedText}"
                        </span>
                        {translationResult.partOfSpeech && (
                          <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-300 border border-indigo-500/40">
                            {translationResult.partOfSpeech}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={handlePronounce}
                        className="p-1.5 hover:bg-white/10 text-cyan-300 hover:text-white rounded-lg transition active:scale-95"
                        title="Escuchar pronunciación"
                      >
                        {isPlayingAudio ? (
                          <VolumeX className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="p-1.5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg transition active:scale-95"
                        title="Copiar traducción"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={closePopup}
                        className="p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Translation Content */}
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <div className="text-[11px] font-semibold text-cyan-300 flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Traducción al español:</span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-amber-300 leading-snug">
                      {translationResult.translation}
                    </div>

                    {/* Alternatives / Synonyms */}
                    {translationResult.synonymsOrAlternatives && translationResult.synonymsOrAlternatives.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5 flex-wrap text-xs">
                        <span className="text-slate-400 text-[11px]">Otros usos:</span>
                        {translationResult.synonymsOrAlternatives.map((alt, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded-md text-slate-200 text-xs font-medium"
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
