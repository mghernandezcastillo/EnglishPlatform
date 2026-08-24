import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Volume2, Check, RefreshCcw, Sparkles, RotateCcw, Keyboard } from 'lucide-react';
import { ClassSlide } from '../types';
import { playAudio } from '../lib/audio';

interface AlphabetPronunciationGameProps {
  slide: ClassSlide;
}

const DEFAULT_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type LetterStatus = 'pending' | 'correct' | 'retry';

export function AlphabetPronunciationGame({ slide }: AlphabetPronunciationGameProps) {
  const config = slide.alphabetGame ?? {};
  const letters = config.letters ?? DEFAULT_LETTERS;
  const showAudio = config.showAudio !== false; // default true
  const bonusEnabled = config.bonusSpelling?.enabled !== false;

  const [statuses, setStatuses] = useState<Record<string, LetterStatus>>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mode, setMode] = useState<'letters' | 'spelling'>('letters');
  const [spellInput, setSpellInput] = useState('');
  const [spellStepIndex, setSpellStepIndex] = useState(0);
  const [celebrated, setCelebrated] = useState(false);

  const totalCorrect = letters.filter((l) => statuses[l] === 'correct').length;
  const totalRetry = letters.filter((l) => statuses[l] === 'retry').length;
  const allDone = totalCorrect + totalRetry === letters.length;

  const markLetter = useCallback((letter: string, status: 'correct' | 'retry') => {
    setStatuses((prev) => ({ ...prev, [letter]: status }));
    if (status === 'correct' && totalCorrect + 1 === letters.length && !celebrated) {
      setCelebrated(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#38bdf8', '#10b981', '#f59e0b'] });
    }
  }, [totalCorrect, letters.length, celebrated]);

  const handlePlayLetter = (letter: string) => {
    if (!showAudio) return;
    // Spell out the letter name (e.g. "A" → "ay")
    playAudio(letter, 'en-US');
  };

  const handleReset = () => {
    setStatuses({});
    setActiveIndex(null);
    setCelebrated(false);
    setSpellStepIndex(0);
    setSpellInput('');
  };

  const spellLetters = spellInput.toUpperCase().replace(/\s/g, '').split('').filter(Boolean);
  const currentSpellLetter = spellLetters[spellStepIndex] ?? null;

  return (
    <div className="flex flex-col h-full w-full min-h-0 text-white select-none gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 shrink-0 flex-wrap">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-500 to-teal-500 text-white font-black text-sm sm:text-lg shadow-lg tracking-wide"
        >
          <Sparkles className="w-5 h-5" style={{ animationDuration: '4s' }} />
          <span>{config.title ?? 'Alphabet Challenge 🔤'}</span>
        </motion.div>
        <p className="text-white/70 text-sm sm:text-base font-bold hidden md:block">
          {config.titleEs ?? 'Pronuncia cada letra en voz alta'}
        </p>

        <div className="flex items-center gap-2 shrink-0">
          {/* Mode toggle */}
          {bonusEnabled && (
            <div className="bg-black/30 p-1 rounded-xl flex items-center gap-1 border border-white/10">
              <button
                type="button"
                onClick={() => setMode('letters')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all ${mode === 'letters' ? 'bg-white text-slate-900 shadow' : 'text-white/70 hover:text-white'}`}
              >
                🔤 A-Z
              </button>
              <button
                type="button"
                onClick={() => setMode('spelling')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all ${mode === 'spelling' ? 'bg-white text-slate-900 shadow' : 'text-white/70 hover:text-white'}`}
              >
                <Keyboard className="w-4 h-4" />
                <span className="hidden sm:inline">Spell It</span>
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-black text-xs sm:text-sm transition-all"
          >
            <RefreshCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-black/30 border border-white/10 shrink-0 flex-wrap">
        <span className="text-white/70 text-sm font-bold">{config.titleEs ?? 'Progreso:'}</span>
        <span className="px-3 py-1 rounded-lg bg-emerald-500/30 text-emerald-300 font-black text-sm">✅ {totalCorrect} bien</span>
        {totalRetry > 0 && <span className="px-3 py-1 rounded-lg bg-amber-500/30 text-amber-300 font-black text-sm">🔄 {totalRetry} practicar</span>}
        <span className="text-white/50 text-sm ml-auto">{letters.length - totalCorrect - totalRetry} pendientes</span>
        {allDone && <span className="text-emerald-300 font-black text-sm animate-pulse">🎉 ¡Completado!</span>}
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          {mode === 'letters' ? (
            <motion.div
              key="letters"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-2 sm:gap-3 p-1"
            >
              {letters.map((letter, idx) => {
                const status = statuses[letter] ?? 'pending';
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={letter}
                    layout
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center"
                  >
                    {/* Letter card */}
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isActive ? null : idx)}
                      className={`
                        w-full aspect-square rounded-2xl font-black text-3xl sm:text-4xl shadow-lg border-2 transition-all flex items-center justify-center relative
                        ${status === 'correct' ? 'bg-emerald-500 border-emerald-400 text-white' : ''}
                        ${status === 'retry' ? 'bg-amber-400 border-amber-300 text-amber-950' : ''}
                        ${status === 'pending' ? (isActive ? 'bg-white border-cyan-400 text-slate-900 scale-110 shadow-cyan-400/30 shadow-2xl' : 'bg-white/15 border-white/20 text-white hover:bg-white/25') : ''}
                      `}
                    >
                      {letter}
                      {status === 'correct' && <span className="absolute -top-1 -right-1 text-base">✅</span>}
                      {status === 'retry' && <span className="absolute -top-1 -right-1 text-base">🔄</span>}
                    </button>

                    {/* Action buttons (show when active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="flex flex-col gap-1 w-full overflow-hidden"
                        >
                          {showAudio && (
                            <button
                              type="button"
                              onClick={() => handlePlayLetter(letter)}
                              className="w-full py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-xs flex items-center justify-center gap-1"
                            >
                              <Volume2 className="w-3 h-3" /> Audio
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => { markLetter(letter, 'correct'); setActiveIndex(null); }}
                            className="w-full py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs flex items-center justify-center gap-1"
                          >
                            <Check className="w-3 h-3" /> ✅
                          </button>
                          <button
                            type="button"
                            onClick={() => { markLetter(letter, 'retry'); setActiveIndex(null); }}
                            className="w-full py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs flex items-center justify-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" /> 🔄
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* ============ SPELL IT MODE ============ */
            <motion.div
              key="spelling"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-5 p-2 h-full"
            >
              <div className="text-center">
                <p className="text-white/70 text-base sm:text-lg font-bold">
                  {config.bonusSpelling?.placeholderEs ?? 'El profesor escribe una palabra o username. ¡El estudiante la deletrea!'}
                </p>
              </div>

              {/* Input for teacher */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={spellInput}
                  onChange={(e) => { setSpellInput(e.target.value); setSpellStepIndex(0); }}
                  placeholder={config.bonusSpelling?.placeholder ?? 'e.g. PandaGamer99 or your name'}
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/15 border border-white/20 text-white font-bold text-lg sm:text-2xl focus:outline-none focus:border-cyan-400 placeholder:text-white/30"
                />
                <button
                  type="button"
                  onClick={() => setSpellStepIndex(0)}
                  className="px-4 rounded-2xl bg-sky-500 text-white font-black hover:bg-sky-400"
                >
                  <RefreshCcw className="w-5 h-5" />
                </button>
              </div>

              {/* Current letter to pronounce */}
              {spellLetters.length > 0 && (
                <div className="flex flex-col items-center gap-4">
                  {/* Progress dots */}
                  <div className="flex gap-1.5 flex-wrap justify-center">
                    {spellLetters.map((l, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${i < spellStepIndex ? 'bg-emerald-400' : i === spellStepIndex ? 'bg-cyan-400 scale-125' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>

                  {/* Big current letter */}
                  <AnimatePresence mode="wait">
                    {currentSpellLetter && (
                      <motion.div
                        key={spellStepIndex}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.3, opacity: 0 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl bg-white flex items-center justify-center text-8xl sm:text-9xl font-black text-slate-900 shadow-2xl border-4 border-cyan-400">
                          {currentSpellLetter}
                        </div>
                        <span className="text-white/70 text-sm font-bold">
                          Letra {spellStepIndex + 1} de {spellLetters.length}
                        </span>
                      </motion.div>
                    )}
                    {!currentSpellLetter && spellLetters.length > 0 && (
                      <motion.div
                        key="done"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center"
                      >
                        <p className="text-5xl font-black text-emerald-400">🎉 ¡Listo!</p>
                        <p className="text-white/70 text-lg font-bold mt-2">"{spellInput}" deletreado correctamente</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Nav buttons */}
                  {currentSpellLetter && (
                    <div className="flex gap-3">
                      {showAudio && (
                        <button
                          type="button"
                          onClick={() => handlePlayLetter(currentSpellLetter)}
                          className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-black flex items-center gap-2"
                        >
                          <Volume2 className="w-5 h-5" /> Escuchar
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setSpellStepIndex((i) => Math.min(i + 1, spellLetters.length))}
                        className="px-8 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl"
                      >
                        ✅ Siguiente
                      </button>
                    </div>
                  )}
                </div>
              )}

              {spellLetters.length === 0 && (
                <div className="flex-1 flex items-center justify-center text-white/40 text-xl font-bold">
                  Escribe una palabra arriba para comenzar
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer hint */}
      <div className="shrink-0 text-center text-white/50 text-xs sm:text-sm font-bold py-1">
        {mode === 'letters'
          ? '👆 Toca una letra → escucha el audio → marca ✅ bien o 🔄 para practicar más'
          : '✍️ Escribe la palabra o username arriba y haz que el estudiante la deletree letra por letra'}
      </div>
    </div>
  );
}
