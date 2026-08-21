import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VocabItem, VocabMeaning, VocabExample } from '../types';
import { vocabService } from '../lib/vocabService';
import { playAudio, stopAudio } from '../lib/audio';
import {
  Volume2,
  Sparkles,
  ArrowLeft,
  RotateCw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Trophy,
  Brain,
  Layers,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface VocabMemoryTestProps {
  items: VocabItem[];
  studentId?: string | null;
  onBack: () => void;
  onFinish: () => void;
}

type TestMode = 'flashcard' | 'cloze_quiz' | 'meaning_match';

interface TestQuestion {
  id: string;
  item: VocabItem;
  meaning: VocabMeaning;
  example: VocabExample;
  mode: TestMode;
  options?: string[];
  correctOption?: string;
}

export function VocabMemoryTest({ items, studentId, onBack, onFinish }: VocabMemoryTestProps) {
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ id: string; quality: 'forgot' | 'hard' | 'good' | 'mastered' }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentAudioPlaying, setCurrentAudioPlaying] = useState<string | null>(null);

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Generate balanced test deck (up to 10 questions)
    const generated: TestQuestion[] = [];
    const shuffled = [...items].sort(() => 0.5 - Math.random());

    shuffled.slice(0, 10).forEach(item => {
      // Pick a random meaning and a random example from that meaning
      const meaning = item.meanings[Math.floor(Math.random() * item.meanings.length)] || item.meanings[0];
      const example = meaning?.contextExamples?.[Math.floor(Math.random() * (meaning.contextExamples.length || 1))] || {
        en: `Practice using "${item.term}".`,
        es: `Practica usando "${item.term}".`,
        cloze: `Practice using "[_____]".`,
        highlightWord: item.term
      };

      // Randomly assign mode: cloze quiz if we have other items for distractors, else flashcard
      const modes: TestMode[] = items.length >= 3 ? ['flashcard', 'cloze_quiz', 'meaning_match'] : ['flashcard'];
      const chosenMode = modes[Math.floor(Math.random() * modes.length)];

      let options: string[] = [];
      let correctOption = item.term;

      if (chosenMode === 'cloze_quiz') {
        const distractors = items
          .filter(i => i.id !== item.id)
          .map(i => i.term)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        options = [item.term, ...distractors].sort(() => 0.5 - Math.random());
      } else if (chosenMode === 'meaning_match') {
        correctOption = meaning.meaningLabel || meaning.definitionEs;
        const otherMeanings = items
          .flatMap(i => i.meanings)
          .filter(m => m.meaningLabel !== correctOption)
          .map(m => m.meaningLabel || m.definitionEs)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        options = [correctOption, ...otherMeanings].sort(() => 0.5 - Math.random());
      }

      generated.push({
        id: crypto.randomUUID(),
        item,
        meaning,
        example,
        mode: chosenMode,
        options,
        correctOption
      });
    });

    setQuestions(generated);
  }, [items]);

  const handlePlaySound = (text: string, id: string) => {
    stopAudio();
    setCurrentAudioPlaying(id);
    playAudio(text, 'en-US', {
      onEnd: () => setCurrentAudioPlaying(null),
      onError: () => setCurrentAudioPlaying(null)
    });
  };

  const handleGradeRecall = async (quality: 'forgot' | 'hard' | 'good' | 'mastered') => {
    const q = questions[currentIndex];
    if (!q) return;

    await vocabService.recordTestResult(q.item.id, quality, studentId);
    setSessionResults(prev => [...prev, { id: q.item.id, quality }]);

    if (currentIndex + 1 < questions.length) {
      setIsFlipped(false);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleOptionSelect = async (opt: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(opt);
    setIsAnswerChecked(true);

    const q = questions[currentIndex];
    const isCorrect = opt === q.correctOption;

    if (isCorrect) {
      handlePlaySound(q.item.term, 'q_correct');
      setTimeout(() => {
        handleGradeRecall('good');
      }, 1500);
    } else {
      setTimeout(() => {
        handleGradeRecall('forgot');
      }, 2000);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 text-center">
        <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-xl">
          <Brain className="w-16 h-16 text-indigo-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No hay vocabulario suficiente para el test</h2>
          <p className="text-gray-600 mb-6">Añade al menos una palabra o phrasal verb a tu Bóveda para iniciar el test de memoria activa.</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:bg-indigo-700 transition-all"
          >
            Volver a la Bóveda
          </button>
        </div>
      </div>
    );
  }

  // Summary Completion Screen
  if (isCompleted) {
    const masteredCount = sessionResults.filter(r => r.quality === 'mastered' || r.quality === 'good').length;
    const accuracy = Math.round((masteredCount / sessionResults.length) * 100);

    return (
      <div className="max-w-2xl mx-auto py-12 px-4 animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-indigo-500/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-amber-500/30 mb-6 transform -rotate-3">
            <Trophy className="w-10 h-10 text-slate-950" />
          </div>

          <span className="inline-block px-4 py-1.5 bg-indigo-500/30 border border-indigo-400/40 rounded-full text-xs font-black uppercase tracking-widest text-indigo-200 mb-3">
            ¡Sesión de Memoria Completada!
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            ¡Excelente Entrenamiento! 🔥
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-md mx-auto">
            Has reactivado las conexiones neuronales de tu vocabulario en contextos reales.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-sm text-indigo-200 block">Total Repasadas</span>
              <span className="text-3xl font-black text-white">{sessionResults.length}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-sm text-indigo-200 block">Retención</span>
              <span className="text-3xl font-black text-emerald-400">{accuracy}%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-sm text-indigo-200 block">Maestría Ganada</span>
              <span className="text-3xl font-black text-amber-300">+{masteredCount * 25} pts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentIndex(0);
                setIsFlipped(false);
                setSelectedOption(null);
                setIsAnswerChecked(false);
                setSessionResults([]);
              }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RotateCw className="w-5 h-5" /> Repetir Test
            </button>
            <button
              onClick={onFinish}
              className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" /> Volver a la Bóveda
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold bg-white/80 backdrop-blur px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" /> Salir del Test
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm font-extrabold text-slate-700">
            {currentIndex + 1} / {questions.length}
          </span>
          <div className="w-32 sm:w-48 h-3 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Test Question Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id + currentIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header pill indicator */}
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200">
              <Zap className="w-3.5 h-3.5 text-indigo-600 fill-current" />
              {currentQ.item.type.replace('_', ' ')} • {currentQ.item.level}
            </span>

            {currentQ.item.isMultiMeaning && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                <Layers className="w-3.5 h-3.5" /> Acepción #{currentQ.meaning.meaningNumber}
              </span>
            )}
          </div>

          {/* MODE 1: FLASHCARD / ACTIVE RECALL */}
          {currentQ.mode === 'flashcard' && (
            <div className="space-y-6">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer min-h-[320px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between transition-all hover:border-indigo-400/50"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/30">
                    {isFlipped ? '💡 Respuesta y Contexto' : '🧠 Recuerda el Significado'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySound(currentQ.item.term, 'term_play');
                    }}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-transform hover:scale-110"
                    title="Escuchar pronunciación"
                  >
                    <Volume2 className={`w-6 h-6 ${currentAudioPlaying === 'term_play' ? 'text-cyan-400 animate-pulse' : 'text-white'}`} />
                  </button>
                </div>

                {!isFlipped ? (
                  <div className="my-auto py-6 text-center">
                    <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 mb-3 tracking-tight">
                      {currentQ.item.term}
                    </h2>
                    {currentQ.item.ipa && (
                      <p className="text-indigo-300 font-mono text-lg mb-6">{currentQ.item.ipa}</p>
                    )}

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-xl mx-auto">
                      <p className="text-indigo-200 text-sm mb-1 font-semibold">Ejemplo en oración:</p>
                      <p className="text-lg sm:text-xl font-medium text-white italic">
                        "{currentQ.example.en}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-indigo-300 text-sm font-bold animate-pulse">
                      <RotateCw className="w-4 h-4" /> Toca para voltear y verificar
                    </div>
                  </div>
                ) : (
                  <div className="my-auto py-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="mb-4">
                      <span className="text-amber-400 font-extrabold text-lg block mb-1">
                        🎯 {currentQ.meaning.meaningLabel}
                      </span>
                      <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {currentQ.meaning.definitionEs}
                      </p>
                      <p className="text-indigo-300 text-sm italic">
                        {currentQ.meaning.definitionEn}
                      </p>
                    </div>

                    {/* 3 Real context examples */}
                    <div className="mt-4 space-y-2 bg-slate-950/60 rounded-2xl p-4 border border-indigo-500/20 max-h-48 overflow-y-auto">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                        3 Ejemplos en Contexto:
                      </span>
                      {currentQ.meaning.contextExamples.map((ex, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-3 text-left border-b border-white/5 pb-2 last:border-none last:pb-0">
                          <div>
                            <p className="text-sm font-semibold text-white">"{ex.en}"</p>
                            <p className="text-xs text-indigo-300">"{ex.es}"</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlaySound(ex.en, `ex_${idx}`);
                            }}
                            className="p-1.5 text-indigo-300 hover:text-white shrink-0"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center text-xs text-indigo-400">
                  {currentQ.item.sourceNote ? `Origen: ${currentQ.item.sourceNote}` : 'Bóveda Maven'}
                </div>
              </div>

              {/* Quality Rating Buttons */}
              {isFlipped && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                >
                  <button
                    onClick={() => handleGradeRecall('forgot')}
                    className="p-4 bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 text-rose-700 rounded-2xl font-bold flex flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <XCircle className="w-6 h-6 text-rose-500" />
                    <span className="text-sm">Olvidé</span>
                    <span className="text-xs opacity-75">-20% maestría</span>
                  </button>

                  <button
                    onClick={() => handleGradeRecall('hard')}
                    className="p-4 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-800 rounded-2xl font-bold flex flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <HelpCircle className="w-6 h-6 text-amber-500" />
                    <span className="text-sm">Difícil</span>
                    <span className="text-xs opacity-75">+10% maestría</span>
                  </button>

                  <button
                    onClick={() => handleGradeRecall('good')}
                    className="p-4 bg-blue-50 hover:bg-blue-100 border-2 border-blue-300 text-blue-800 rounded-2xl font-bold flex flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    <span className="text-sm">Bien</span>
                    <span className="text-xs opacity-75">+25% maestría</span>
                  </button>

                  <button
                    onClick={() => handleGradeRecall('mastered')}
                    className="p-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-emerald-800 rounded-2xl font-bold flex flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <Zap className="w-6 h-6 text-emerald-500 fill-current" />
                    <span className="text-sm">¡Dominado!</span>
                    <span className="text-xs opacity-75">+40% maestría</span>
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {/* MODE 2: CLOZE CONTEXT QUIZ */}
          {currentQ.mode === 'cloze_quiz' && (
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-indigo-100 shadow-xl space-y-6">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 mb-3 inline-block">
                  🎯 Completa la frase en contexto
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-3">
                  ¿Cuál elemento completa la oración correctamente?
                </h3>
              </div>

              {/* Context card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-inner relative">
                <p className="text-2xl sm:text-3xl font-medium tracking-wide text-center leading-relaxed">
                  "{currentQ.example.cloze}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-indigo-300 text-sm">
                  <span>Traducción: "{currentQ.example.es}"</span>
                  <button
                    onClick={() => handlePlaySound(currentQ.example.en, 'cloze_audio')}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-xl"
                  >
                    <Volume2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Multiple choice options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {currentQ.options?.map((opt, idx) => {
                  const isChosen = selectedOption === opt;
                  const isRight = isAnswerChecked && opt === currentQ.correctOption;
                  const isWrong = isAnswerChecked && isChosen && opt !== currentQ.correctOption;

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerChecked}
                      onClick={() => handleOptionSelect(opt)}
                      className={`p-5 rounded-2xl font-extrabold text-xl text-center border-2 transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
                        isRight
                          ? 'bg-emerald-500 border-emerald-600 text-white scale-105 shadow-lg shadow-emerald-200'
                          : isWrong
                          ? 'bg-rose-500 border-rose-600 text-white animate-shake'
                          : isChosen
                          ? 'bg-indigo-600 text-white border-indigo-700'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50 hover:border-indigo-300 hover:scale-102'
                      }`}
                    >
                      {opt}
                      {isRight && <CheckCircle2 className="w-6 h-6 text-white" />}
                      {isWrong && <XCircle className="w-6 h-6 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* MODE 3: MEANING MATCH QUIZ */}
          {currentQ.mode === 'meaning_match' && (
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-indigo-100 shadow-xl space-y-6">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 mb-3 inline-block">
                  🧠 Identifica el Significado Exacto
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-1">
                  ¿Qué significa <span className="text-indigo-600">"{currentQ.item.term}"</span> en este contexto?
                </h3>
              </div>

              {/* Sentence Context */}
              <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8">
                <p className="text-xl sm:text-2xl font-bold text-center mb-2">
                  "{currentQ.example.en}"
                </p>
                <p className="text-sm text-indigo-300 text-center italic">
                  "{currentQ.example.es}"
                </p>
              </div>

              {/* Options for meanings */}
              <div className="space-y-3 pt-2">
                {currentQ.options?.map((opt, idx) => {
                  const isChosen = selectedOption === opt;
                  const isRight = isAnswerChecked && opt === currentQ.correctOption;
                  const isWrong = isAnswerChecked && isChosen && opt !== currentQ.correctOption;

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerChecked}
                      onClick={() => handleOptionSelect(opt)}
                      className={`w-full p-4 sm:p-5 rounded-2xl font-bold text-left border-2 transition-all flex items-center justify-between gap-4 ${
                        isRight
                          ? 'bg-emerald-500 border-emerald-600 text-white shadow-lg'
                          : isWrong
                          ? 'bg-rose-500 border-rose-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                    >
                      <span className="text-base sm:text-lg">{opt}</span>
                      {isRight && <CheckCircle2 className="w-6 h-6 text-white shrink-0" />}
                      {isWrong && <XCircle className="w-6 h-6 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
