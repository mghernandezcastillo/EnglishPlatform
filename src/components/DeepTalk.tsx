import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  RotateCw, 
  Volume2, 
  Copy, 
  Check, 
  Share2, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  MessageSquare,
  Compass,
  CheckCircle2,
  Lock,
  Layers,
  Award,
  PenTool,
  Shuffle,
  Wand2
} from 'lucide-react';
import { deepTalkQuestions, DeepTalkQuestion, DeepTalkFragment } from '../data/deepTalkQuestions';
import { playAudio } from '../lib/audio';
import { StoryDecoderVocabTool } from './StoryDecoderVocabTool';
import confetti from 'canvas-confetti';

interface DeepTalkProps {
  studentId?: string | null;
  studentName?: string;
  onBack: () => void;
}

interface ShuffledBankToken {
  bankId: string;
  originalIndex: number;
  text: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[j], result[i]] = [result[i], result[j]];
  }
  return result;
}

export function DeepTalk({ studentId, onBack }: DeepTalkProps) {
  const [selectedLevel, setSelectedLevel] = useState<'intermediate' | 'advanced'>('intermediate');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionIndex, setQuestionIndex] = useState(0);
  
  // Phase inside the current question:
  // 'question': contemplating question + 3D flip
  // 'building': assembling fragment by fragment
  // 'complete': full answer assembled, share & copy
  const [phase, setPhase] = useState<'question' | 'building' | 'complete'>('question');
  
  // 3D Flip state for question card
  const [isFlipped, setIsFlipped] = useState(false);

  // Persisted completed question IDs
  const storageKey = `maven_deeptalk_completed_${studentId || 'default'}`;
  const [completedQuestionIds, setCompletedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completedQuestionIds));
    } catch {
      // ignore storage errors
    }
  }, [completedQuestionIds, storageKey]);

  // All questions for current level
  const levelQuestions = useMemo(() => {
    return deepTalkQuestions.filter(q => q.level === selectedLevel);
  }, [selectedLevel]);

  // Available categories for current level
  const categories = useMemo(() => {
    return Array.from(new Set(levelQuestions.map(q => q.category)));
  }, [levelQuestions]);

  // Filtered questions for current level & category
  const questions = useMemo(() => {
    if (selectedCategory === 'all') return levelQuestions;
    const filtered = levelQuestions.filter(q => q.category === selectedCategory);
    return filtered.length > 0 ? filtered : levelQuestions;
  }, [levelQuestions, selectedCategory]);

  const currentQuestion: DeepTalkQuestion = questions[questionIndex] || questions[0];

  // Fragment building state
  const [currentFragmentIndex, setCurrentFragmentIndex] = useState(0);
  const [selectedBankIds, setSelectedBankIds] = useState<string[]>([]);
  const [hasOrderError, setHasOrderError] = useState(false);
  const [tokensObfuscated, setTokensObfuscated] = useState(true);
  const [fragmentCompleted, setFragmentCompleted] = useState(false);
  const [completedFragments, setCompletedFragments] = useState<number[]>([]);
  
  // Clipboard copy state
  const [copied, setCopied] = useState(false);

  // Current active fragment
  const currentFragment: DeepTalkFragment | undefined = currentQuestion.fragments[currentFragmentIndex];

  // Shuffled tokens for the current fragment
  const shuffledBankTokens = useMemo<ShuffledBankToken[]>(() => {
    if (!currentFragment) return [];
    const base = currentFragment.tokens.map((text, idx) => ({
      bankId: `${currentQuestion.id}-${currentFragmentIndex}-${idx}-${text}`,
      originalIndex: idx,
      text,
    }));
    if (base.length <= 1) return base;

    let shuffled = shuffleArray(base);
    let attempts = 0;
    while (attempts < 5 && shuffled.every((t, i) => t.originalIndex === i)) {
      shuffled = shuffleArray(base);
      attempts++;
    }
    return shuffled;
  }, [currentQuestion.id, currentFragmentIndex, currentFragment]);

  // First index where the selected token order breaks
  const firstWrongPos = useMemo(() => {
    for (let pos = 0; pos < selectedBankIds.length; pos++) {
      const token = shuffledBankTokens.find(t => t.bankId === selectedBankIds[pos]);
      if (!token || token.originalIndex !== pos) return pos;
    }
    return -1;
  }, [selectedBankIds, shuffledBankTokens]);

  // Jump to a specific fragment while preserving state if already completed
  const handleJumpToFragment = (targetIdx: number) => {
    const frag = currentQuestion.fragments[targetIdx];
    if (!frag) return;
    setCurrentFragmentIndex(targetIdx);
    setHasOrderError(false);

    if (completedFragments.includes(targetIdx)) {
      const sortedIds = frag.tokens.map(
        (text, idx) => `${currentQuestion.id}-${targetIdx}-${idx}-${text}`
      );
      setSelectedBankIds(sortedIds);
      setTokensObfuscated(false);
      setFragmentCompleted(true);
    } else {
      setSelectedBankIds([]);
      setTokensObfuscated(true);
      setFragmentCompleted(false);
    }
  };

  // Reset when level or question changes
  const handleSelectQuestion = (index: number) => {
    setQuestionIndex(index);
    setPhase('question');
    setIsFlipped(false);
    setCurrentFragmentIndex(0);
    setSelectedBankIds([]);
    setHasOrderError(false);
    setTokensObfuscated(true);
    setFragmentCompleted(false);
    setCompletedFragments([]);
  };

  const handleSwitchLevel = (level: 'intermediate' | 'advanced') => {
    setSelectedLevel(level);
    setSelectedCategory('all');
    setQuestionIndex(0);
    setPhase('question');
    setIsFlipped(false);
    setCurrentFragmentIndex(0);
    setSelectedBankIds([]);
    setHasOrderError(false);
    setTokensObfuscated(true);
    setFragmentCompleted(false);
    setCompletedFragments([]);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setQuestionIndex(0);
    setPhase('question');
    setIsFlipped(false);
    setCurrentFragmentIndex(0);
    setSelectedBankIds([]);
    setHasOrderError(false);
    setTokensObfuscated(true);
    setFragmentCompleted(false);
    setCompletedFragments([]);
  };

  const handleRandomQuestion = () => {
    if (questions.length <= 1) return;
    const uncompletedIndices = questions
      .map((q, idx) => (!completedQuestionIds.includes(q.id) && idx !== questionIndex ? idx : -1))
      .filter(idx => idx !== -1);
    const pool = uncompletedIndices.length > 0
      ? uncompletedIndices
      : questions.map((_, idx) => idx).filter(idx => idx !== questionIndex);
    const randomIdx = pool[Math.floor(Math.random() * pool.length)];
    handleSelectQuestion(randomIdx);
  };

  // Start building suggested answer
  const handleStartBuilding = () => {
    setPhase('building');
    setCurrentFragmentIndex(0);
    setSelectedBankIds([]);
    setHasOrderError(false);
    setTokensObfuscated(true);
    setFragmentCompleted(false);
    setCompletedFragments([]);
  };

  // Check if a sequence of bankIds completes the current fragment
  const evaluateSequence = (next: string[]) => {
    if (!currentFragment) return;
    const anyWrong = next.some((id, pos) => {
      const token = shuffledBankTokens.find(t => t.bankId === id);
      return token?.originalIndex !== pos;
    });
    setHasOrderError(anyWrong);

    if (!anyWrong && next.length === currentFragment.tokens.length) {
      setFragmentCompleted(true);
      if (!completedFragments.includes(currentFragmentIndex)) {
        setCompletedFragments(prev => [...prev, currentFragmentIndex]);
      }
      playAudio(currentFragment.tokens.join(' '));
    }
  };

  // Token click in word bank
  const handleSelectToken = (bankId: string) => {
    if (fragmentCompleted) return;
    if (tokensObfuscated) setTokensObfuscated(false);
    if (selectedBankIds.includes(bankId)) return;

    const clickedToken = shuffledBankTokens.find(t => t.bankId === bankId);
    if (clickedToken) {
      playAudio(clickedToken.text);
    }

    const next = [...selectedBankIds, bankId];
    setSelectedBankIds(next);
    evaluateSequence(next);
  };

  // Hint: place the next correct block automatically
  const handleHintNextToken = () => {
    if (!currentFragment || fragmentCompleted) return;
    setTokensObfuscated(false);

    // Keep only the valid prefix so far
    const validPrefix: string[] = [];
    for (let pos = 0; pos < selectedBankIds.length; pos++) {
      const token = shuffledBankTokens.find(t => t.bankId === selectedBankIds[pos]);
      if (token && token.originalIndex === pos) {
        validPrefix.push(selectedBankIds[pos]);
      } else {
        break;
      }
    }

    const nextPos = validPrefix.length;
    const nextToken = shuffledBankTokens.find(t => t.originalIndex === nextPos);
    if (!nextToken) return;

    const next = [...validPrefix, nextToken.bankId];
    setSelectedBankIds(next);
    if (next.length < currentFragment.tokens.length) {
      playAudio(nextToken.text);
    }
    evaluateSequence(next);
  };

  // Remove token from dropzone back to bank
  const handleRemoveToken = (bankId: string) => {
    if (fragmentCompleted) return;
    const next = selectedBankIds.filter(id => id !== bankId);
    setSelectedBankIds(next);
    evaluateSequence(next);
  };

  // Instant reveal for current fragment in correct order
  const handleRevealFragment = () => {
    if (!currentFragment) return;
    setTokensObfuscated(false);
    setHasOrderError(false);
    const sortedIds = [...shuffledBankTokens]
      .sort((a, b) => a.originalIndex - b.originalIndex)
      .map(t => t.bankId);
    setSelectedBankIds(sortedIds);
    setFragmentCompleted(true);
    if (!completedFragments.includes(currentFragmentIndex)) {
      setCompletedFragments(prev => [...prev, currentFragmentIndex]);
    }
    // Speak English audio
    playAudio(currentFragment.tokens.join(' '));
  };

  // Advance to next fragment or finish
  const handleNextFragment = () => {
    if (currentFragmentIndex < currentQuestion.fragments.length - 1) {
      handleJumpToFragment(currentFragmentIndex + 1);
    } else {
      // Completed all fragments!
      setPhase('complete');
      if (!completedQuestionIds.includes(currentQuestion.id)) {
        setCompletedQuestionIds(prev => [...prev, currentQuestion.id]);
      }
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
      playAudio(currentQuestion.suggestedAnswerEn);
    }
  };

  // Copy full English answer to clipboard
  const handleCopyAnswer = () => {
    navigator.clipboard.writeText(currentQuestion.suggestedAnswerEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Share via WhatsApp
  const handleShareWhatsApp = () => {
    const text = `🧠 *Deep Talk - Maven English*\n\n*Question:* ${currentQuestion.questionEn}\n\n*Suggested Answer:*\n"${currentQuestion.suggestedAnswerEn}"\n\n*Español:*\n"${currentQuestion.suggestedAnswerEs}"`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white font-sans flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold transition-all text-slate-200 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                    Deep Talk
                  </h1>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Pro Fluency
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Respuestas complejas y argumentación en inglés con conectores de alto nivel
                </p>
              </div>
            </div>
          </div>

          {/* Right Controls: Notes & Level Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-teacher-notes'))}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/60 border border-indigo-500/40 text-xs font-bold transition-all text-indigo-200 hover:text-white shadow-sm hover:scale-105 active:scale-95"
              title="Abrir cuaderno de notas del profesor"
            >
              <PenTool className="w-3.5 h-3.5 text-indigo-300" />
              <span>Notas</span>
            </button>

            {/* Level Switcher */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-white/10 shadow-inner">
              <button
                onClick={() => handleSwitchLevel('intermediate')}
                className={`px-3 py-1 text-xs font-black rounded-lg transition-all ${
                  selectedLevel === 'intermediate'
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Intermedio (A2-B1)
              </button>
              <button
                onClick={() => handleSwitchLevel('advanced')}
                className={`px-3 py-1 text-xs font-black rounded-lg transition-all ${
                  selectedLevel === 'advanced'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Avanzado (B2-C1)
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col">
        {/* Category Filter & Question Selector Slider */}
        <div className="mb-6 flex flex-col gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
          {/* Top Row: Category Pills + Progress + Random Button */}
          <div className="flex items-center justify-between gap-2 flex-wrap border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-thin">
              <button
                onClick={() => handleSelectCategory('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-indigo-500 text-white shadow'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Todas ({levelQuestions.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-500 text-white shadow'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {levelQuestions.filter(q => completedQuestionIds.includes(q.id)).length}/{levelQuestions.length}
              </span>
              <button
                onClick={handleRandomQuestion}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-purple-200 text-[11px] font-black transition active:scale-95"
                title="Elegir pregunta al azar"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Aleatoria</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Numbered Question Selector */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => handleSelectQuestion(Math.max(0, questionIndex - 1))}
              disabled={questionIndex === 0}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition"
              title="Pregunta anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-2 scrollbar-thin">
              {questions.map((q, idx) => {
                const isDone = completedQuestionIds.includes(q.id);
                const isActive = questionIndex === idx;
                return (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(idx)}
                    title={q.category}
                    className={`min-w-[38px] h-9 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1 px-2.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white ring-2 ring-purple-400 shadow-lg scale-105'
                        : isDone
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    <span>#{idx + 1}</span>
                    {isDone && <Check className="w-3 h-3 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handleSelectQuestion(Math.min(questions.length - 1, questionIndex + 1))}
              disabled={questionIndex === questions.length - 1}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition"
              title="Siguiente pregunta"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE 1: THE QUESTION (Contemplation & 3D Flip)                   */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'question' && (
          <div className="flex-1 flex flex-col justify-center items-center py-6">
            <div className="w-full max-w-2xl text-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Tema: {currentQuestion.category}
              </span>
              <p className="text-slate-400 text-sm">
                Lee la pregunta, reflexiona un momento y haz clic en la tarjeta para voltearla y ver la traducción al español.
              </p>
            </div>

            {/* 3D Flip Card */}
            <div
              onClick={() => setIsFlipped(prev => !prev)}
              className="w-full max-w-2xl min-h-[260px] sm:min-h-[300px] cursor-pointer select-none [perspective:1000px] my-4"
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full h-full relative [transform-style:preserve-3d]"
              >
                {/* Front Side: English */}
                <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-indigo-900/90 via-slate-900 to-purple-950/90 border-2 border-indigo-400/40 shadow-2xl flex flex-col justify-between items-center text-center">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-300 bg-white/10 px-3 py-1 rounded-lg">
                      🇬🇧 En inglés
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(currentQuestion.questionEn);
                      }}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-300 transition"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight my-4">
                    "{currentQuestion.questionEn}"
                  </h2>

                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <RotateCw className="w-3.5 h-3.5" />
                    Toca la tarjeta para voltear y ver en español
                  </div>
                </div>

                {/* Back Side: Spanish */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-950/90 via-slate-900 to-teal-950/90 border-2 border-emerald-400/40 shadow-2xl flex flex-col justify-between items-center text-center">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-300 bg-white/10 px-3 py-1 rounded-lg">
                      🇪🇸 En español
                    </span>
                    <span className="text-xs text-slate-400">Traducción</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-100 leading-tight my-4">
                    "{currentQuestion.questionEs}"
                  </h2>

                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <RotateCw className="w-3.5 h-3.5" />
                    Toca para volver al inglés
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action to Start Building */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleStartBuilding}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-300 hover:to-rose-400 text-slate-950 font-black text-base shadow-xl shadow-orange-500/25 transition-all transform hover:scale-[1.03] active:scale-95 flex items-center gap-2.5"
              >
                <Lightbulb className="w-5 h-5 fill-slate-950" />
                <span>Ver y Construir Respuesta Sugerida</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE 2: BUILDING FRAGMENT BY FRAGMENT                           */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'building' && currentFragment && (
          <div className="flex-1 flex flex-col gap-5">
            {/* Context Question Banner */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                  Pregunta en discusión:
                </span>
                <div className="text-sm sm:text-base font-bold text-white">
                  "{currentQuestion.questionEn}"
                </div>
              </div>
              <button
                onClick={() => setPhase('question')}
                className="shrink-0 text-xs font-bold text-indigo-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 transition"
              >
                Ver pregunta
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
              {/* Left Column: Interactive Assembly */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Progress bar of fragments */}
                <div className="flex items-center justify-between text-xs text-slate-300 px-1">
                  <span className="font-bold flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    Fragmento {currentFragmentIndex + 1} de {currentQuestion.fragments.length}
                  </span>
                  <span className="text-slate-400">
                    {Math.round(((currentFragmentIndex + (fragmentCompleted ? 1 : 0)) / currentQuestion.fragments.length) * 100)}% completado
                  </span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-300"
                    style={{
                      width: `${((currentFragmentIndex + (fragmentCompleted ? 1 : 0)) / currentQuestion.fragments.length) * 100}%`
                    }}
                  />
                </div>

                {/* Target Fragment in Spanish */}
                <div className="bg-gradient-to-br from-indigo-950/70 to-slate-900/90 border-2 border-indigo-400/40 rounded-3xl p-5 sm:p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                      ¿Cómo dirías esto en inglés profesional?
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      Fragmento {currentFragmentIndex + 1}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-black text-amber-300 leading-snug">
                    "{currentFragment.es}"
                  </p>
                </div>

                {/* Assembled Dropzone for Current Fragment */}
                <div className={`min-h-[76px] rounded-2xl border-2 transition-all p-3.5 flex flex-wrap items-center gap-2 ${
                  fragmentCompleted
                    ? 'border-emerald-400/60 bg-emerald-950/40'
                    : hasOrderError
                    ? 'border-rose-400/60 bg-rose-950/40'
                    : 'border-dashed border-cyan-400/40 bg-slate-950/60'
                }`}>
                  {selectedBankIds.length === 0 ? (
                    <span className="text-xs sm:text-sm text-slate-400 italic">
                      Toca las palabras desordenadas de abajo para armar la frase en el orden correcto...
                    </span>
                  ) : (
                    selectedBankIds.map((bankId, pos) => {
                      const token = shuffledBankTokens.find(t => t.bankId === bankId);
                      if (!token) return null;
                      const isTokenWrong = firstWrongPos !== -1 && pos >= firstWrongPos;
                      return (
                        <motion.button
                          key={`selected-${bankId}`}
                          layout
                          onClick={() => handleRemoveToken(bankId)}
                          disabled={fragmentCompleted}
                          className={`px-3 py-1.5 rounded-xl font-black text-sm shadow-md transition flex items-center gap-1.5 ${
                            fragmentCompleted
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 cursor-default'
                              : isTokenWrong
                              ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white hover:opacity-90 active:scale-95 ring-2 ring-rose-300'
                              : 'bg-gradient-to-r from-emerald-400/90 to-cyan-400 text-slate-950 hover:opacity-90 active:scale-95'
                          }`}
                          title={fragmentCompleted ? undefined : 'Toca para quitar'}
                        >
                          <span>{token.text}</span>
                          {!fragmentCompleted && !isTokenWrong && (
                            <Check className="w-3.5 h-3.5 text-slate-950/80 shrink-0" />
                          )}
                        </motion.button>
                      );
                    })
                  )}
                </div>

                {/* Error Banner if order was wrong */}
                {hasOrderError && (
                  <div className="flex items-center justify-between bg-rose-950/70 border border-rose-500/50 rounded-xl px-3.5 py-2 text-xs text-rose-200">
                    <span className="flex items-center gap-1.5">
                      ⚠️ <strong>Ese bloque no va en esa posición:</strong> Toca el bloque en rojo para quitarlo o usa <em>Pista (+1)</em>.
                    </span>
                    <div className="flex items-center gap-2 ml-3 shrink-0">
                      {firstWrongPos > 0 && (
                        <button
                          onClick={() => {
                            const validOnly = selectedBankIds.slice(0, firstWrongPos);
                            setSelectedBankIds(validOnly);
                            setHasOrderError(false);
                          }}
                          className="font-bold underline text-emerald-300 hover:text-white"
                        >
                          Quitar incorrectos
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setSelectedBankIds([]);
                          setHasOrderError(false);
                        }}
                        className="font-bold underline text-rose-300 hover:text-white"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>
                )}

                {/* Word Bank with Reveal Toggle */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                      Banco de Palabras (Desordenadas)
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        onClick={() => setTokensObfuscated(prev => !prev)}
                        className="flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-white/10 transition"
                      >
                        {tokensObfuscated ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span>{tokensObfuscated ? 'Revelar palabras' : 'Ocultar'}</span>
                      </button>

                      <button
                        onClick={handleHintNextToken}
                        disabled={fragmentCompleted}
                        className="flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-cyan-200 disabled:opacity-40 disabled:pointer-events-none px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/30 transition"
                        title="Coloca únicamente el siguiente bloque correcto"
                      >
                        <Wand2 className="w-3.5 h-3.5" />
                        <span>Pista (+1)</span>
                      </button>

                      <button
                        onClick={handleRevealFragment}
                        disabled={fragmentCompleted}
                        className="flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200 disabled:opacity-40 disabled:pointer-events-none px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 transition"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Completar</span>
                      </button>
                    </div>
                  </div>

                  {/* Shuffled Token Buttons */}
                  <div className="flex flex-wrap gap-2.5">
                    {shuffledBankTokens.map((token) => {
                      const isSelected = selectedBankIds.includes(token.bankId);
                      return (
                        <button
                          key={token.bankId}
                          onClick={() => handleSelectToken(token.bankId)}
                          disabled={isSelected || fragmentCompleted}
                          className={`px-3.5 py-2 rounded-xl text-sm font-black transition-all ${
                            isSelected
                              ? 'bg-white/5 text-slate-600 border border-white/5 cursor-not-allowed opacity-40'
                              : 'bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-900 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md active:scale-95 border border-indigo-400/30'
                          }`}
                        >
                          <span className={tokensObfuscated && !isSelected ? 'filter blur-sm select-none' : ''}>
                            {token.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation & Vocab Saver for Current Fragment */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2">
                  <button
                    onClick={() => {
                      if (currentFragmentIndex > 0) {
                        handleJumpToFragment(currentFragmentIndex - 1);
                      }
                    }}
                    disabled={currentFragmentIndex === 0}
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-slate-300 font-bold text-xs hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </button>

                  <div className="flex items-center gap-2">
                    <StoryDecoderVocabTool
                      targetAnswer={currentFragment.tokens.join(' ')}
                      spanishPrompt={currentFragment.es}
                      easyBlocks={currentFragment.tokens}
                      vocabularyCandidates={currentQuestion.connectors}
                      storyTitle={`Deep Talk - ${currentQuestion.category}`}
                      studentId={studentId}
                      className="!min-h-10 !py-2 !px-3.5 !text-xs !rounded-xl"
                    />

                    <button
                      onClick={handleNextFragment}
                      disabled={!fragmentCompleted}
                      className={`px-6 py-2.5 rounded-xl font-black text-sm shadow-lg transition-all flex items-center gap-2 ${
                        fragmentCompleted
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 shadow-emerald-500/25 scale-105'
                          : 'bg-white/10 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <span>
                        {currentFragmentIndex === currentQuestion.fragments.length - 1
                          ? 'Finalizar y Ver Respuesta Completa'
                          : 'Siguiente Fragmento'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Cumulative Assembled Answer Preview */}
              <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-3xl p-5 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" />
                      Respuesta en construcción
                    </span>
                    <div className="flex items-center gap-2">
                      {completedFragments.length > 0 && (
                        <button
                          onClick={() => {
                            const textSoFar = currentQuestion.fragments
                              .filter((_, idx) => idx < currentFragmentIndex || completedFragments.includes(idx))
                              .map(f => f.tokens.join(' '))
                              .join(' ');
                            if (textSoFar) playAudio(textSoFar);
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-emerald-300 hover:text-white px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 transition"
                          title="Escuchar todas las partes listas hasta ahora"
                        >
                          <Volume2 className="w-3 h-3" />
                          <span>Escuchar avance</span>
                        </button>
                      )}
                      <span className="text-[11px] font-bold text-slate-400">
                        {completedFragments.length}/{currentQuestion.fragments.length} partes
                      </span>
                    </div>
                  </div>

                  {/* Cumulative Fragments List */}
                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                    {currentQuestion.fragments.map((frag, idx) => {
                      const isPast = idx < currentFragmentIndex || completedFragments.includes(idx);
                      const isCurrent = idx === currentFragmentIndex;

                      return (
                        <div
                          key={`cumul-${idx}`}
                          onClick={() => {
                            if (isPast || idx <= completedFragments.length) {
                              handleJumpToFragment(idx);
                            }
                          }}
                          className={`p-3 rounded-xl transition-all border ${
                            isPast
                              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200 cursor-pointer hover:bg-emerald-950/50'
                              : isCurrent
                              ? 'bg-indigo-950/50 border-indigo-400/50 text-white ring-1 ring-indigo-400/40'
                              : 'bg-white/5 border-white/5 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                            <span className={isPast ? 'text-emerald-400' : isCurrent ? 'text-indigo-300' : 'text-slate-500'}>
                              Parte #{idx + 1}
                            </span>
                            {isPast ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(frag.tokens.join(' '));
                                  }}
                                  className="p-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 transition"
                                  title="Escuchar esta parte"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                                <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Listo
                                </span>
                              </div>
                            ) : isCurrent ? (
                              <span className="text-amber-300 text-[10px] animate-pulse">
                                ● Construyendo
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-slate-500 text-[10px]">
                                <Lock className="w-3 h-3" /> Bloqueado
                              </span>
                            )}
                          </div>

                          <div className="text-xs sm:text-sm font-medium">
                            {isPast ? (
                              frag.tokens.join(' ')
                            ) : isCurrent ? (
                              selectedBankIds.length > 0
                                ? selectedBankIds.map(id => shuffledBankTokens.find(t => t.bankId === id)?.text).filter(Boolean).join(' ')
                                : <span className="italic text-slate-400">{frag.es}</span>
                            ) : (
                              <span className="italic text-slate-600">"{frag.es}"</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Connectors Preview */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Conectores clave en esta respuesta:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentQuestion.connectors.map((c, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE 3: COMPLETED ANSWER (Share, Copy, TTS)                      */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'complete' && (
          <div className="flex-1 flex flex-col justify-center items-center py-6">
            <div className="w-full max-w-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border-2 border-indigo-400/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {/* Header Badge */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-orange-500/30 mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  ¡Respuesta Completa y Sofisticada!
                </h2>
                <p className="text-slate-300 text-sm mt-1">
                  Has dominado la estructura completa para responder esta pregunta con fluidez y dialecto profesional.
                </p>
              </div>

              {/* Original Question Reminder */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5 text-center">
                <span className="text-[10px] uppercase font-black text-indigo-400 tracking-wider block mb-1">
                  Pregunta
                </span>
                <p className="text-base sm:text-lg font-bold text-white">
                  "{currentQuestion.questionEn}"
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  ({currentQuestion.questionEs})
                </p>
              </div>

              {/* Full English Answer Card */}
              <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900/80 border border-emerald-500/40 rounded-2xl p-6 mb-4 relative shadow-inner">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Respuesta en inglés profesional:
                  </span>
                  <button
                    onClick={() => playAudio(currentQuestion.suggestedAnswerEn)}
                    className="flex items-center gap-1 text-xs font-bold text-emerald-300 hover:text-white px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 transition"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Escuchar</span>
                  </button>
                </div>
                <p className="text-base sm:text-lg font-medium text-emerald-100 leading-relaxed">
                  "{currentQuestion.suggestedAnswerEn}"
                </p>
              </div>

              {/* Spanish Translation Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  Traducción equivalente en español:
                </span>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{currentQuestion.suggestedAnswerEs}"
                </p>
              </div>

              {/* Vocab Saver for Full Answer */}
              <div className="mb-5">
                <StoryDecoderVocabTool
                  targetAnswer={currentQuestion.suggestedAnswerEn}
                  spanishPrompt={currentQuestion.suggestedAnswerEs}
                  easyBlocks={currentQuestion.fragments.flatMap(f => f.tokens)}
                  vocabularyCandidates={currentQuestion.connectors}
                  storyTitle={`Deep Talk - ${currentQuestion.category}`}
                  studentId={studentId}
                  className="w-full !min-h-12 !py-3 !px-5 !text-sm sm:!text-base !rounded-2xl shadow-xl"
                />
              </div>

              {/* Action Buttons: Copy, WhatsApp, Next */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={handleCopyAnswer}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition active:scale-95 border border-white/10"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar Respuesta'}</span>
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Enviar a WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    const nextIdx = (questionIndex + 1) % questions.length;
                    handleSelectQuestion(nextIdx);
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm transition shadow-lg shadow-purple-500/20 active:scale-95"
                >
                  <span>Siguiente Pregunta</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
