import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  X,
  Volume2,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  Award,
  ChevronLeft,
  ChevronRight,
  Flame,
  MessageSquare,
  Puzzle,
  Dices,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';
import { WhQuestionItem, StudentWhProgress } from '../../types';
import { WH_LEVEL_COLORS, WH_QUESTIONS_DATA } from '../../data/whQuestionsData';
import { dbAdmin } from '../../lib/db';

interface WhPracticeArenaProps {
  item: WhQuestionItem;
  studentId?: string | null;
  studentName?: string;
  progressRecord?: StudentWhProgress;
  onClose: () => void;
  onSelectWh: (item: WhQuestionItem) => void;
  onProgressUpdated: (whId: string, updated: StudentWhProgress) => void;
}

type TabMode = 'blueprint' | 'builder' | 'roulette' | 'roleplay';

export const WhPracticeArena: React.FC<WhPracticeArenaProps> = ({
  item,
  studentId,
  studentName,
  progressRecord,
  onClose,
  onSelectWh,
  onProgressUpdated
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('blueprint');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  // Puzzle State
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<{ id: string; text: string }[]>([]);
  const [puzzleSuccess, setPuzzleSuccess] = useState<boolean | null>(null);

  // Roulette State
  const [isSpinning, setIsSpinning] = useState(false);
  const [slotResult, setSlotResult] = useState<{
    subject: string;
    action: string;
    complement: string;
  }>({
    subject: item.slotRoulette.subjects[0] || 'you',
    action: item.slotRoulette.actions[0] || 'do',
    complement: item.slotRoulette.complements[0] || 'today?'
  });

  const levelColor = WH_LEVEL_COLORS[item.level] || WH_LEVEL_COLORS.A1;
  const currentPuzzle = item.puzzles[currentPuzzleIdx] || item.puzzles[0];

  // Initialize Puzzle tokens when item or puzzle index changes
  useEffect(() => {
    if (currentPuzzle) {
      const tokens = currentPuzzle.scramble.map((text, i) => ({
        id: `${text}-${i}-${Date.now()}`,
        text
      }));
      // Shuffle tokens
      const shuffled = [...tokens].sort(() => Math.random() - 0.5);
      setAvailableTokens(shuffled);
      setSelectedTokens([]);
      setPuzzleSuccess(null);
    }
  }, [item.id, currentPuzzleIdx, currentPuzzle]);

  // Reset states on item change
  useEffect(() => {
    setCurrentPuzzleIdx(0);
    setShowModelAnswer(false);
    setSlotResult({
      subject: item.slotRoulette.subjects[0] || 'you',
      action: item.slotRoulette.actions[0] || 'do',
      complement: item.slotRoulette.complements[0] || 'today?'
    });
  }, [item.id]);

  // TTS Speech Synthesis
  const playAudio = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  }, []);

  // Set Mastery Level
  const handleSetMastery = async (score: number, status: 'unseen' | 'practicing' | 'mastered') => {
    if (score === 100) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
    const updated = await dbAdmin.saveStudentWhProgress(studentId || '', item.id, score, status);
    onProgressUpdated(item.id, updated);
  };

  // Handle Token Click
  const handleTokenSelect = (token: { id: string; text: string }) => {
    const newSelected = [...selectedTokens, token.text];
    setSelectedTokens(newSelected);
    setAvailableTokens(prev => prev.filter(t => t.id !== token.id));

    // Check solution if all tokens are placed
    if (newSelected.length === currentPuzzle.scramble.length) {
      const userSentence = newSelected.join(' ').replace(/\s+([?.!,])/g, '$1').trim().toLowerCase();
      const expectedSentence = currentPuzzle.solution.replace(/\s+([?.!,])/g, '$1').trim().toLowerCase();

      if (userSentence === expectedSentence) {
        setPuzzleSuccess(true);
        playAudio(currentPuzzle.solution);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {}
        // If not already mastered, give practice boost
        if (!progressRecord || progressRecord.mastery_score < 70) {
          handleSetMastery(70, 'practicing');
        }
      } else {
        setPuzzleSuccess(false);
      }
    }
  };

  // Remove Token from selected
  const handleTokenDeselect = (index: number, text: string) => {
    const newSelected = [...selectedTokens];
    newSelected.splice(index, 1);
    setSelectedTokens(newSelected);
    setAvailableTokens(prev => [...prev, { id: `${text}-${Date.now()}`, text }]);
    setPuzzleSuccess(null);
  };

  // Reset Puzzle
  const resetCurrentPuzzle = () => {
    if (currentPuzzle) {
      const tokens = currentPuzzle.scramble.map((text, i) => ({
        id: `${text}-${i}-${Date.now()}`,
        text
      }));
      setAvailableTokens([...tokens].sort(() => Math.random() - 0.5));
      setSelectedTokens([]);
      setPuzzleSuccess(null);
    }
  };

  // Spin Slot Roulette
  const spinRoulette = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let count = 0;
    const interval = setInterval(() => {
      const s = item.slotRoulette.subjects[Math.floor(Math.random() * item.slotRoulette.subjects.length)];
      const a = item.slotRoulette.actions[Math.floor(Math.random() * item.slotRoulette.actions.length)];
      const c = item.slotRoulette.complements[Math.floor(Math.random() * item.slotRoulette.complements.length)];
      setSlotResult({ subject: s, action: a, complement: c });
      count++;

      if (count > 12) {
        clearInterval(interval);
        setIsSpinning(false);
        try {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
        } catch {}
      }
    }, 90);
  };

  // Navigation across WH items
  const currentIndex = WH_QUESTIONS_DATA.findIndex(q => q.id === item.id);
  const handlePrevWh = () => {
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : WH_QUESTIONS_DATA.length - 1;
    onSelectWh(WH_QUESTIONS_DATA[prevIdx]);
  };
  const handleNextWh = () => {
    const nextIdx = currentIndex < WH_QUESTIONS_DATA.length - 1 ? currentIndex + 1 : 0;
    onSelectWh(WH_QUESTIONS_DATA[nextIdx]);
  };

  const currentScore = progressRecord?.mastery_score || 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[10010] bg-slate-950/90 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 text-white overflow-hidden select-none"
    >
      {/* ================= TOP BAR (Header & Student Stats) ================= */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-800/80 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevWh}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="Anterior WH Question"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-xl font-black text-sm uppercase tracking-wider border ${levelColor.badgeBg} ${levelColor.badgeText} ${levelColor.borderGlow}`}
            >
              {item.level}
            </span>
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight capitalize text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {item.expression}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{item.translation}</p>
            </div>
          </div>

          <button
            onClick={handleNextWh}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="Siguiente WH Question"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Student Progress Badge */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              {studentName ? `Alumno: ${studentName}` : 'Estudiante Activo'}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className={`h-full transition-all duration-500 rounded-full bg-gradient-to-r ${levelColor.gradientFrom} ${levelColor.gradientTo}`}
                  style={{ width: `${currentScore}%` }}
                />
              </div>
              <span className="text-sm font-bold text-amber-400">{currentScore}%</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-all hover:scale-105 active:scale-95"
            title="Cerrar estudio"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ================= TABS SELECTOR (Large touch-friendly) ================= */}
      <div className="grid grid-cols-4 gap-2 my-3 shrink-0">
        <button
          onClick={() => setActiveTab('blueprint')}
          className={`py-3 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-base flex items-center justify-center gap-2 transition-all border ${
            activeTab === 'blueprint'
              ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30 scale-[1.02]'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-300" />
          <span>1. Fórmula</span>
        </button>

        <button
          onClick={() => setActiveTab('builder')}
          className={`py-3 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-base flex items-center justify-center gap-2 transition-all border ${
            activeTab === 'builder'
              ? 'bg-amber-600 text-white border-amber-400 shadow-lg shadow-amber-600/30 scale-[1.02]'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Puzzle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          <span>2. Constructor</span>
        </button>

        <button
          onClick={() => setActiveTab('roulette')}
          className={`py-3 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-base flex items-center justify-center gap-2 transition-all border ${
            activeTab === 'roulette'
              ? 'bg-teal-600 text-white border-teal-400 shadow-lg shadow-teal-600/30 scale-[1.02]'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Dices className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
          <span>3. Ruleta</span>
        </button>

        <button
          onClick={() => setActiveTab('roleplay')}
          className={`py-3 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-base flex items-center justify-center gap-2 transition-all border ${
            activeTab === 'roleplay'
              ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-[1.02]'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
          <span>4. En Vivo</span>
        </button>
      </div>

      {/* ================= MAIN INTERACTIVE BODY ================= */}
      <div className="flex-1 overflow-y-auto min-h-0 py-2 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* TAB 1: BLUEPRINT & EXAMPLES */}
          {activeTab === 'blueprint' && (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full gap-4 sm:gap-6"
            >
              {/* Formula Card */}
              <div className="bg-gradient-to-br from-slate-900/95 to-slate-950/95 border-2 border-indigo-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-widest rounded-bl-2xl border-l border-b border-indigo-500/30">
                  Regla de Oro
                </div>
                <span className="text-xs sm:text-sm font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                  Estructura Sintáctica
                </span>
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide bg-slate-950/80 p-4 sm:p-6 rounded-2xl border border-slate-800 text-center text-wrap break-words leading-relaxed shadow-inner">
                  {item.formula}
                </div>
                <p className="text-sm sm:text-base text-slate-300 mt-3 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  {item.use}
                </p>
              </div>

              {/* Examples Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4 sm:p-6 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {ex.en}
                      </div>
                      <div className="text-sm sm:text-base text-slate-400 mt-1 font-medium">{ex.es}</div>
                    </div>
                    <button
                      onClick={() => playAudio(ex.en)}
                      className="p-3.5 rounded-2xl bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all shrink-0 hover:scale-110 active:scale-95 shadow-md"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className={`w-6 h-6 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: TOKEN BUILDER GAME */}
          {activeTab === 'builder' && (
            <motion.div
              key="builder"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full gap-5"
            >
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Misión: Ordena la Frase ({currentPuzzleIdx + 1}/{item.puzzles.length})
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  "{currentPuzzle?.hint_es}"
                </h3>
              </div>

              {/* Placement Zone */}
              <div
                className={`min-h-[110px] sm:min-h-[130px] rounded-3xl p-4 sm:p-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 border-2 border-dashed transition-all ${
                  puzzleSuccess === true
                    ? 'bg-emerald-950/40 border-emerald-500/80 shadow-2xl shadow-emerald-500/20'
                    : puzzleSuccess === false
                    ? 'bg-rose-950/30 border-rose-500/80 shadow-2xl shadow-rose-500/20'
                    : 'bg-slate-900/90 border-slate-700/80'
                }`}
              >
                {selectedTokens.length === 0 ? (
                  <span className="text-slate-500 text-sm sm:text-base font-medium">
                    Toca las fichas de abajo en el orden correcto
                  </span>
                ) : (
                  selectedTokens.map((tokenText, idx) => (
                    <motion.button
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={idx}
                      onClick={() => handleTokenDeselect(idx, tokenText)}
                      className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-indigo-600 text-white font-extrabold text-base sm:text-2xl rounded-2xl shadow-lg border border-indigo-400/80 hover:bg-rose-600 hover:border-rose-400 transition-all hover:scale-105 active:scale-95"
                      title="Toca para remover"
                    >
                      {tokenText}
                    </motion.button>
                  ))
                )}
              </div>

              {/* Feedback Alert */}
              {puzzleSuccess === true && (
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-extrabold text-base sm:text-xl animate-bounce">
                  <CheckCircle2 className="w-6 h-6" /> ¡Perfecto! Ensamblaje completado con éxito.
                </div>
              )}
              {puzzleSuccess === false && (
                <div className="flex items-center justify-center gap-2 text-rose-400 font-bold text-sm sm:text-base">
                  Revisa el orden e inténtalo de nuevo.
                </div>
              )}

              {/* Available Scrambled Tokens */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-4 bg-slate-900/60 rounded-3xl border border-slate-800">
                {availableTokens.map(token => (
                  <motion.button
                    layout
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={token.id}
                    onClick={() => handleTokenSelect(token)}
                    className="px-4 sm:px-7 py-3 sm:py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-base sm:text-2xl rounded-2xl border-2 border-slate-600 shadow-md transition-colors"
                  >
                    {token.text}
                  </motion.button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={resetCurrentPuzzle}
                  className="px-5 py-2.5 rounded-2xl bg-slate-800 text-slate-300 hover:text-white font-bold text-sm flex items-center gap-2 border border-slate-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" /> Reiniciar
                </button>
                {item.puzzles.length > 1 && (
                  <button
                    onClick={() =>
                      setCurrentPuzzleIdx(prev => (prev + 1) % item.puzzles.length)
                    }
                    className="px-6 py-2.5 rounded-2xl bg-amber-600 text-white hover:bg-amber-500 font-bold text-sm flex items-center gap-2 shadow-lg transition-colors"
                  >
                    Siguiente Frase <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: SLOT MACHINE / ROULETTE */}
          {activeTab === 'roulette' && (
            <motion.div
              key="roulette"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full gap-6"
            >
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold text-teal-400 uppercase tracking-widest block mb-1">
                  Ruleta de Combinaciones Infinitas
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-200">
                  Gira la ruleta y formula la pregunta en vivo usando{' '}
                  <span className="text-teal-400 capitalize underline underline-offset-4">
                    "{item.expression}"
                  </span>
                </h3>
              </div>

              {/* Slot Reels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-900/90 rounded-3xl border-2 border-teal-500/40 shadow-2xl">
                {/* Reel 1 */}
                <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                    Sujeto / Elemento
                  </span>
                  <div
                    className={`text-lg sm:text-2xl font-black text-white ${
                      isSpinning ? 'blur-sm scale-95' : ''
                    } transition-all duration-150`}
                  >
                    {slotResult.subject}
                  </div>
                </div>

                {/* Reel 2 */}
                <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                    Acción / Verbo
                  </span>
                  <div
                    className={`text-lg sm:text-2xl font-black text-white ${
                      isSpinning ? 'blur-sm scale-95' : ''
                    } transition-all duration-150`}
                  >
                    {slotResult.action}
                  </div>
                </div>

                {/* Reel 3 */}
                <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                    Contexto / Tiempo
                  </span>
                  <div
                    className={`text-lg sm:text-2xl font-black text-white ${
                      isSpinning ? 'blur-sm scale-95' : ''
                    } transition-all duration-150`}
                  >
                    {slotResult.complement}
                  </div>
                </div>
              </div>

              {/* Spin Trigger */}
              <div className="flex justify-center">
                <button
                  onClick={spinRoulette}
                  disabled={isSpinning}
                  className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 text-white font-extrabold text-lg sm:text-2xl rounded-3xl shadow-xl shadow-teal-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50"
                >
                  <Dices className={`w-7 h-7 ${isSpinning ? 'animate-spin' : ''}`} />
                  <span>{isSpinning ? 'Girando Slots...' : '¡GIRAR RULETA!'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 4: SITUATION ROLEPLAY PROMPT */}
          {activeTab === 'roleplay' && (
            <motion.div
              key="roleplay"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full gap-5"
            >
              <div className="bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 border-2 border-purple-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full font-bold text-xs sm:text-sm mb-4 border border-purple-500/30">
                  <Flame className="w-4 h-4 text-purple-400" /> Conversación en Tiempo Real
                </div>

                <div className="text-xl sm:text-3xl font-extrabold text-white mb-4 leading-relaxed">
                  "{item.situationPrompt.scenario}"
                </div>

                <div className="text-base sm:text-xl text-purple-200/90 font-medium bg-purple-950/60 p-4 sm:p-6 rounded-2xl border border-purple-500/20 max-w-2xl mx-auto mb-6">
                  👉 <span className="font-bold text-white">Tu Misión:</span> {item.situationPrompt.goal}
                </div>

                {/* Model Answer Toggle */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setShowModelAnswer(!showModelAnswer)}
                    className="px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm flex items-center gap-2 border border-slate-700 transition-colors"
                  >
                    {showModelAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showModelAnswer ? 'Ocultar Respuesta Modelo' : 'Ver Respuesta Modelo'}</span>
                  </button>

                  {showModelAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lg sm:text-2xl font-black text-emerald-400 bg-emerald-950/50 p-4 rounded-2xl border border-emerald-500/40 flex items-center gap-3"
                    >
                      <span>{item.situationPrompt.modelAnswer}</span>
                      <button
                        onClick={() => playAudio(item.situationPrompt.modelAnswer)}
                        className="p-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-white transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= BOTTOM BAR (Teacher Mastery Calibrator) ================= */}
      <div className="pt-3 border-t border-slate-800/80 shrink-0 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs sm:text-sm text-slate-400 font-bold hidden sm:inline-block">
          Calibrar Nivel de Dominio del Alumno:
        </span>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
          <button
            onClick={() => handleSetMastery(0, 'unseen')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              currentScore === 0
                ? 'bg-slate-700 text-white border-slate-500'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
            }`}
          >
            ⚪ 0% Sin Iniciar
          </button>

          <button
            onClick={() => handleSetMastery(35, 'practicing')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              currentScore === 35
                ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-600/20'
                : 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800'
            }`}
          >
            🥉 35% En Práctica
          </button>

          <button
            onClick={() => handleSetMastery(70, 'practicing')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              currentScore === 70
                ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/20'
                : 'bg-slate-900 text-sky-400 border-slate-800 hover:bg-slate-800'
            }`}
          >
            🥈 70% Fluido
          </button>

          <button
            onClick={() => handleSetMastery(100, 'mastered')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center gap-1.5 ${
              currentScore === 100
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-300 shadow-lg shadow-yellow-500/30 scale-105'
                : 'bg-slate-900 text-yellow-400 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>🥇 100% Dominado</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
