import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookmarkPlus, BookmarkCheck, Volume2, Sparkles, Check, Loader2, RotateCcw, X } from 'lucide-react';
import { quickTranslate } from '../lib/quickTranslate';
import { playAudio } from '../lib/audio';
import { vocabService } from '../lib/vocabService';
import { storyDecoderDb } from '../lib/storyDecoderDb';
import confetti from 'canvas-confetti';

export interface StoryDecoderVocabToolProps {
  targetAnswer: string;
  spanishPrompt?: string;
  easyBlocks?: string[];
  vocabularyCandidates?: string[];
  storyTitle?: string;
  studentId?: string | null;
  onWordSaved?: (english: string, spanish: string) => void;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export const StoryDecoderVocabTool: React.FC<StoryDecoderVocabToolProps> = ({
  targetAnswer,
  spanishPrompt,
  easyBlocks = [],
  vocabularyCandidates = [],
  storyTitle = 'Story Decoder',
  studentId,
  onWordSaved,
  className = '',
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onOpen: controlledOnOpen
}) => {
  // Modal state (support both controlled and uncontrolled)
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleOpen = useCallback(() => {
    if (controlledOnOpen) {
      controlledOnOpen();
    } else {
      setInternalIsOpen(true);
    }
  }, [controlledOnOpen]);

  const handleClose = useCallback(() => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  }, [controlledOnClose]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, handleClose]);

  // Resolve active student ID from props or active profile in localStorage
  const activeStudentId = useMemo(() => {
    if (studentId) return studentId;
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('active_student_profile');
        if (saved) {
          const parsed = JSON.parse(saved);
          return parsed.id || parsed.student_id || null;
        }
      } catch {
        // fallback
      }
    }
    return null;
  }, [studentId]);

  // Clean tokens from target sentence
  const sentenceTokens = useMemo(() => {
    if (!targetAnswer) return [];
    const rawWords = targetAnswer.trim().split(/\s+/);
    return rawWords.map((w, idx) => {
      const clean = w.replace(/^[^\p{L}\p{N}'’]+|[^\p{L}\p{N}'’]+$/gu, '').trim();
      return {
        id: `token-${idx}-${clean}`,
        index: idx,
        raw: w,
        clean: clean || w
      };
    }).filter(t => t.clean.length > 0);
  }, [targetAnswer]);

  // Compound phrase recommendations from easyBlocks and vocabularyCandidates
  const compoundSuggestions = useMemo(() => {
    const suggestions = new Set<string>();
    
    // 1. Multi-word blocks from easyBlocks
    easyBlocks.forEach(b => {
      const clean = b.replace(/^[^\p{L}\p{N}'’]+|[^\p{L}\p{N}'’]+$/gu, '').trim();
      if (clean.includes(' ') && clean.length > 2) {
        suggestions.add(clean);
      }
    });

    // 2. Multi-word candidates
    vocabularyCandidates.forEach(c => {
      const clean = c.replace(/^[^\p{L}\p{N}'’]+|[^\p{L}\p{N}'’]+$/gu, '').trim();
      if (clean.includes(' ') && clean.length > 2) {
        suggestions.add(clean);
      }
    });

    return Array.from(suggestions);
  }, [easyBlocks, vocabularyCandidates]);

  // Selected token indices from the sentence
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  // Custom manual term if selected from compound suggestions or edited
  const [activeEnglish, setActiveEnglish] = useState<string>('');
  const [activeSpanish, setActiveSpanish] = useState<string>('');
  const [isLoadingTranslation, setIsLoadingTranslation] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [savedSuccessTerm, setSavedSuccessTerm] = useState<string | null>(null);

  // Set of already saved terms (in lowercase) for this student
  const [savedTermsSet, setSavedTermsSet] = useState<Set<string>>(new Set());

  // Load existing vocabulary for active student
  useEffect(() => {
    let isMounted = true;
    const loadSaved = async () => {
      try {
        const items = await vocabService.getItems(activeStudentId);
        if (isMounted && items) {
          const termSet = new Set(items.map(i => i.term.toLowerCase().trim()));
          setSavedTermsSet(termSet);
        }
      } catch (err) {
        console.warn('Could not load saved vocab items:', err);
      }
    };
    loadSaved();
    return () => {
      isMounted = false;
    };
  }, [activeStudentId]);

  // Count tokens from current sentence that are already saved
  const savedTokensInSentenceCount = useMemo(() => {
    if (savedTermsSet.size === 0 || sentenceTokens.length === 0) return 0;
    return sentenceTokens.filter(t => savedTermsSet.has(t.clean.toLowerCase())).length;
  }, [savedTermsSet, sentenceTokens]);

  // Handle single / multi token selection from the sentence
  const handleToggleToken = useCallback((tokenIndex: number) => {
    setSavedSuccessTerm(null);
    setSelectedIndices(prev => {
      let next: number[];
      if (prev.includes(tokenIndex)) {
        next = prev.filter(i => i !== tokenIndex);
      } else {
        next = [...prev, tokenIndex].sort((a, b) => a - b);
      }

      if (next.length === 0) {
        setActiveEnglish('');
        setActiveSpanish('');
        return next;
      }

      const combinedText = next.map(idx => sentenceTokens[idx]?.clean || '').filter(Boolean).join(' ');
      setActiveEnglish(combinedText);
      return next;
    });
  }, [sentenceTokens]);

  // Handle selecting a compound suggestion directly
  const handleSelectCompound = useCallback((phrase: string) => {
    setSavedSuccessTerm(null);
    setActiveEnglish(phrase);

    // Match indices in the sentence if possible
    const phraseLower = phrase.toLowerCase().trim();
    const words = phraseLower.split(/\s+/);
    const matched: number[] = [];
    
    for (let i = 0; i <= sentenceTokens.length - words.length; i++) {
      const slice = sentenceTokens.slice(i, i + words.length).map(t => t.clean.toLowerCase()).join(' ');
      if (slice === phraseLower) {
        for (let j = 0; j < words.length; j++) {
          matched.push(i + j);
        }
        break;
      }
    }
    setSelectedIndices(matched);
  }, [sentenceTokens]);

  // Clear selection
  const handleClearSelection = useCallback(() => {
    setSelectedIndices([]);
    setActiveEnglish('');
    setActiveSpanish('');
    setSavedSuccessTerm(null);
  }, []);

  // Fetch translation automatically when activeEnglish changes
  useEffect(() => {
    if (!activeEnglish.trim()) {
      setActiveSpanish('');
      return;
    }

    let isCurrent = true;
    setIsLoadingTranslation(true);

    const timer = setTimeout(async () => {
      try {
        const res = await quickTranslate(activeEnglish.trim());
        if (isCurrent) {
          setActiveSpanish(res.translation || '');
        }
      } catch (err) {
        console.warn('Error fetching quick translation:', err);
      } finally {
        if (isCurrent) {
          setIsLoadingTranslation(false);
        }
      }
    }, 150);

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [activeEnglish]);

  // Save to Mi Vocabulario (VocabVault & Supabase)
  const handleSaveToVocab = async () => {
    const term = activeEnglish.trim();
    const translation = activeSpanish.trim() || term;
    if (!term || isSaving) return;

    setIsSaving(true);
    try {
      // 1. Save to VocabVault
      await vocabService.saveQuickTerm(
        term,
        translation,
        'story_decoder',
        `📖 Story Decoder: ${storyTitle}`,
        activeStudentId
      );

      // 2. Also save directly to story_decoder_vocabulary table if studentId is present
      if (activeStudentId) {
        try {
          await storyDecoderDb.saveWord(activeStudentId, {
            id: crypto.randomUUID(),
            english: term,
            spanish: translation,
            storyTitle: storyTitle,
            exampleEn: targetAnswer,
            exampleEs: spanishPrompt || '',
            addedAt: Date.now()
          });
        } catch (dbErr) {
          console.warn('Error in storyDecoderDb.saveWord:', dbErr);
        }
      }

      // 3. Mark as saved in local state
      setSavedTermsSet(prev => new Set(prev).add(term.toLowerCase()));
      setSavedSuccessTerm(term);
      onWordSaved?.(term, translation);

      // 4. Confetti & Audio chime
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#10b981', '#06b6d4', '#f59e0b']
      });
      playAudio(term, 'en-US');

      // Auto dismiss success badge after 4s
      setTimeout(() => {
        setSavedSuccessTerm(null);
      }, 4000);
    } catch (err) {
      console.error('Error saving vocabulary word:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const isAlreadySaved = useMemo(() => {
    if (!activeEnglish.trim()) return false;
    return savedTermsSet.has(activeEnglish.toLowerCase().trim());
  }, [activeEnglish, savedTermsSet]);

  return (
    <>
      {/* Trigger Button rendered inline in controls */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpen}
        className={`min-h-12 sm:min-h-13 px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all cursor-pointer flex items-center justify-center gap-2.5 ${className}`}
        title="Abrir modal para guardar palabras en Mi Vocabulario"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-950 text-slate-950" />
        <span>Guardar en Vocabulario</span>
        {savedTokensInSentenceCount > 0 && (
          <span className="ml-1 px-2.5 py-0.5 rounded-full bg-slate-950 text-emerald-300 text-xs sm:text-sm font-black border border-emerald-400/40">
            {savedTokensInSentenceCount} {savedTokensInSentenceCount === 1 ? 'guardada' : 'guardadas'}
          </span>
        )}
      </motion.button>

      {/* Modal Dialog rendered directly into document.body for true center viewport positioning */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
              {/* Backdrop Click Dismiss */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-black/60 cursor-pointer"
              />

              {/* Centered Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                className="relative z-10 w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-400/60 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(16,185,129,0.35)] flex flex-col gap-4 sm:gap-5 my-auto max-h-[90vh] overflow-y-auto text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between gap-3 border-b border-emerald-500/25 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/30 shrink-0">
                      <Sparkles className="w-6 h-6 fill-slate-950 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-wide flex flex-wrap items-center gap-2">
                        <span>Guardar en "Mi Vocabulario"</span>
                        <span className="text-xs font-extrabold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                          1 palabra o frase compuesta (2+)
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/80 font-medium">
                        Toca las palabras de la frase para agregarlas a tu libreta personal (VocabVault).
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 border border-white/10"
                    title="Cerrar modal"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Sentence Reference Context */}
                <div className="rounded-2xl bg-slate-950/80 border border-emerald-500/30 p-3.5 flex flex-col gap-1.5 shadow-inner">
                  {spanishPrompt && (
                    <div className="text-xs sm:text-sm text-emerald-400/90 font-bold flex items-center gap-1.5">
                      <span className="shrink-0">🇪🇸 Español:</span>
                      <span className="text-white font-extrabold italic truncate">{spanishPrompt}</span>
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-teal-300/90 font-bold flex items-center gap-1.5">
                    <span className="shrink-0">🇺🇸 Inglés:</span>
                    <span className="text-emerald-200 font-extrabold truncate">"{targetAnswer}"</span>
                  </div>
                </div>

                {/* Interactive Sentence Tokens (Tappable Chips) */}
                <div className="flex flex-col gap-2">
                  <div className="text-xs sm:text-sm font-bold text-emerald-300/90 flex items-center justify-between">
                    <span>👆 Toca las palabras para seleccionar una o armar una frase:</span>
                    {selectedIndices.length > 1 && (
                      <span className="text-cyan-300 font-black text-xs bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                        ✨ Frase de {selectedIndices.length} palabras
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    {sentenceTokens.map((tok) => {
                      const isSelected = selectedIndices.includes(tok.index);
                      const isTokenSaved = savedTermsSet.has(tok.clean.toLowerCase());

                      return (
                        <motion.button
                          key={tok.id}
                          type="button"
                          whileTap={{ scale: 0.93 }}
                          onClick={() => handleToggleToken(tok.index)}
                          className={`relative px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm sm:text-base font-black border-2 transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${
                            isSelected
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 border-emerald-300 text-slate-950 shadow-emerald-500/40 ring-2 ring-emerald-400/50 scale-105'
                              : isTokenSaved
                              ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-200 hover:bg-emerald-900/80'
                              : 'bg-slate-900 border-emerald-500/40 text-slate-100 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white'
                          }`}
                        >
                          <span>{tok.clean}</span>
                          {isTokenSaved && !isSelected && (
                            <span className="inline-flex items-center text-[10px] text-emerald-400 font-bold bg-emerald-400/20 px-1.5 py-0.5 rounded-md" title="Ya en tu vocabulario">
                              ✓
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[10px] bg-slate-950/30 text-slate-950 font-black px-1.5 py-0.5 rounded-md">
                              #{selectedIndices.indexOf(tok.index) + 1}
                            </span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Suggested Compound Expressions (Phrasal verbs / idioms) */}
                {compoundSuggestions.length > 0 && (
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-xs font-bold text-teal-300/80 flex items-center gap-1">
                      <span>⚡ Frases sugeridas:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {compoundSuggestions.map((comp) => {
                        const isSelected = activeEnglish.toLowerCase().trim() === comp.toLowerCase().trim();
                        const isCompSaved = savedTermsSet.has(comp.toLowerCase().trim());

                        return (
                          <button
                            key={comp}
                            type="button"
                            onClick={() => handleSelectCompound(comp)}
                            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black border transition-all cursor-pointer flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-md ring-2 ring-cyan-400/40'
                                : isCompSaved
                                ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300'
                                : 'bg-teal-500/15 border-teal-400/40 text-teal-200 hover:bg-teal-500/30 hover:border-teal-300'
                            }`}
                          >
                            <span>"{comp}"</span>
                            {isCompSaved && <span className="text-xs text-emerald-400 font-bold">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Selected Action Card & Save CTA */}
                <AnimatePresence>
                  {activeEnglish.trim() ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2.5 border-t border-emerald-500/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 overflow-hidden"
                    >
                      {/* Term & Translation inputs */}
                      <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        {/* English Term Pill with Audio */}
                        <div className="flex items-center gap-2 bg-slate-900 border border-emerald-400/60 rounded-xl px-3 py-2 shadow-inner">
                          <button
                            type="button"
                            onClick={() => playAudio(activeEnglish, 'en-US')}
                            className="w-8 h-8 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                            title="Escuchar pronunciación"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">Inglés</span>
                            <span className="text-sm sm:text-base font-black text-white truncate max-w-[200px]">
                              {activeEnglish}
                            </span>
                          </div>
                        </div>

                        {/* Spanish Translation editable */}
                        <div className="flex-1 flex items-center gap-2 bg-slate-900 border border-cyan-400/60 rounded-xl px-3 py-2 shadow-inner">
                          <div className="flex-1 flex flex-col min-w-0">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                              <span>Español</span>
                              {isLoadingTranslation && <Loader2 className="w-3 h-3 animate-spin text-cyan-300" />}
                            </span>
                            <input
                              type="text"
                              value={activeSpanish}
                              onChange={(e) => setActiveSpanish(e.target.value)}
                              placeholder="Escribe o ajusta la traducción..."
                              className="bg-transparent text-sm sm:text-base font-bold text-yellow-300 focus:outline-none w-full placeholder:text-white/30"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={handleSaveToVocab}
                          disabled={isSaving || !activeEnglish.trim()}
                          className={`w-full sm:w-auto min-h-12 px-5 py-2.5 rounded-xl font-black text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
                            savedSuccessTerm === activeEnglish.trim() || isAlreadySaved
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-2 border-emerald-400 shadow-emerald-500/30'
                              : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-emerald-500/40'
                          }`}
                        >
                          {isSaving ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Guardando...</span>
                            </>
                          ) : savedSuccessTerm === activeEnglish.trim() ? (
                            <>
                              <BookmarkCheck className="w-5 h-5 stroke-[3]" />
                              <span>¡Guardado en Vocabulario!</span>
                            </>
                          ) : isAlreadySaved ? (
                            <>
                              <Check className="w-5 h-5 stroke-[3]" />
                              <span>Actualizar en Vocabulario</span>
                            </>
                          ) : (
                            <>
                              <BookmarkPlus className="w-5 h-5 stroke-[3]" />
                              <span>⭐ Guardar en Vocabulario</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="pt-2 text-center text-xs sm:text-sm text-slate-400 italic">
                      👆 Selecciona una o más palabras arriba para ver su traducción y guardarla.
                    </div>
                  )}
                </AnimatePresence>

                {/* Success Notification Toast */}
                <AnimatePresence>
                  {savedSuccessTerm && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/60 py-2 px-3.5 text-emerald-200 text-xs sm:text-sm font-extrabold text-center shadow-lg"
                    >
                      <span>🎉</span>
                      <span>
                        <strong>"{savedSuccessTerm}"</strong> se guardó exitosamente en <strong>Mi Vocabulario</strong>.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Modal Footer */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                  {selectedIndices.length > 0 ? (
                    <button
                      type="button"
                      onClick={handleClearSelection}
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Limpiar selección</span>
                    </button>
                  ) : <div />}

                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all cursor-pointer"
                  >
                    Listo / Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
