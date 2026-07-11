import { useState, useEffect } from 'react';
import { Lesson } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle, Volume2, Maximize, Target, Book, MessagesSquare, PlayCircle, Trophy, Gamepad2, Check, Sparkles } from 'lucide-react';
import { Flashcard } from './Flashcard';
import { AudioButton } from './AudioButton';
import { playAudio } from '../lib/audio';
import confetti from 'canvas-confetti';

interface LessonPlayerProps {
  lesson: Lesson;
  onComplete: () => void;
  onExit: () => void;
}

const LESSON_STEPS = [
  { id: 'intro', title: 'Objetivo y Saludo', icon: Target },
  { id: 'vocab', title: 'Vocabulario Nuevo', icon: Book },
  { id: 'pronunciation', title: 'Pronunciación y Frases', icon: Volume2 },
  { id: 'practice', title: 'Práctica Interactiva', icon: MessagesSquare },
  { id: 'game', title: 'Mini Juego', icon: Gamepad2 },
  { id: 'summary', title: 'Resumen y Tarea', icon: CheckCircle }
];

export function LessonPlayer({ lesson, onComplete, onExit }: LessonPlayerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  // Game State
  const [currentGameQuestionIdx, setCurrentGameQuestionIdx] = useState(0);
  const [selectedGameOptionId, setSelectedGameOptionId] = useState<string | null>(null);
  const [showGameFeedback, setShowGameFeedback] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  // Auto-play audio when opening pronunciation step
  useEffect(() => {
    if (LESSON_STEPS[currentStepIndex].id === 'pronunciation') {
      setTimeout(() => playAudio(lesson.lenguajeClave), 500);
    }
  }, [currentStepIndex, lesson.lenguajeClave]);

  const handleNext = () => {
    if (currentStepIndex < LESSON_STEPS.length - 1) {
      setCurrentStepIndex(i => i + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(i => i - 1);
    }
  };

  const handleGameOptionSelect = (optionId: string) => {
    if (showGameFeedback) return;
    const currentQuestion = lesson.quiz[currentGameQuestionIdx];
    const isCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect;
    
    setSelectedGameOptionId(optionId);
    setShowGameFeedback(true);
    
    if (isCorrect) {
      setGameScore(s => s + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextGameQuestion = () => {
    if (currentGameQuestionIdx < lesson.quiz.length - 1) {
      setCurrentGameQuestionIdx(i => i + 1);
      setSelectedGameOptionId(null);
      setShowGameFeedback(false);
    } else {
      handleNext();
    }
  };

  const currentQuestion = lesson.quiz ? lesson.quiz[currentGameQuestionIdx] : null;
  const step = LESSON_STEPS[currentStepIndex];
  const StepIcon = step.icon;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 bg-white/80 backdrop-blur-md relative z-10">
        <button 
          onClick={onExit}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex px-4 items-center gap-2 overflow-hidden flex-1 justify-center sm:justify-start">
           <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded hidden sm:inline-block">
             {lesson.etapa}
           </span>
           <span className="font-semibold text-gray-800 truncate">{lesson.title}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-gray-100">
        <motion.div 
          className="h-full bg-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStepIndex + 1) / LESSON_STEPS.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-full flex flex-col items-center justify-center p-4 sm:p-8"
          >
            <div className="w-full max-w-3xl flex flex-col gap-8 pb-20">
              {/* Step Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-100 text-indigo-600 mb-6 shadow-inner">
                  <StepIcon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">{step.title}</h2>
              </div>

              {/* Step Content */}
              <div className="w-full">
                {step.id === 'intro' && (
                   <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center">
                     {lesson.imageUrl ? (
                       <img referrerPolicy="no-referrer" src={lesson.imageUrl} alt={lesson.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-sm" />
                     ) : (
                       <Target className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                     )}
                     <h3 className="text-xl font-semibold text-gray-500 mb-2">Objetivo de hoy</h3>
                     <p className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">{lesson.objetivo}</p>
                     
                     {lesson.grammar && lesson.grammar.length > 0 && (
                       <div className="mt-8 bg-slate-50 rounded-3xl p-8 shadow-inner border border-slate-200 text-left space-y-6">
                         <div className="flex items-center gap-3 mb-2">
                           <Book className="w-6 h-6 text-indigo-500" />
                           <h3 className="text-xl font-bold text-gray-900">Estructura y Gramática</h3>
                         </div>
                         {lesson.grammar.map((g, idx) => (
                           <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                             <h4 className="text-lg font-bold text-indigo-900 mb-2">{g.title}</h4>
                             <p className="text-gray-700 mb-5 text-sm sm:text-base leading-relaxed">{g.explanation}</p>
                             {g.structure && (
                               <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-xl mb-6 space-y-4">
                                 {g.structure.split('\n').map((line, lIdx) => (
                                   <div key={lIdx} className="flex flex-wrap items-center gap-y-3 leading-loose font-mono text-sm sm:text-base">
                                     {line.split(/(\s*\+\s*|\s*:\s*)/).map((p, pIdx) => {
                                        const text = p.trim();
                                        if (!text) return null;
                                        if (text === '+') return <span key={pIdx} className="text-slate-300 font-extrabold mx-2">+</span>;
                                        if (text === ':') return <span key={pIdx} className="text-slate-400 font-bold mr-2">{p}</span>;
                                        if (text === '?') return <span key={pIdx} className="text-pink-500 font-black text-2xl mx-1">?</span>;

                                        const lower = text.toLowerCase();
                                        let badgeClass = "";
                                        
                                        if (lower.includes('sujeto')) badgeClass = "bg-blue-100 text-blue-700 border-blue-200 border-b-[3px]";
                                        else if (lower.includes('verbo')) badgeClass = "bg-emerald-100 text-emerald-700 border-emerald-200 border-b-[3px]";
                                        else if (lower.includes('complemento')) badgeClass = "bg-amber-100 text-amber-700 border-amber-200 border-b-[3px]";
                                        else if (['afirmativo', 'negativo', 'pregunta'].includes(lower)) badgeClass = "bg-slate-800 text-white shadow-md uppercase text-xs tracking-widest";
                                        else if (['am/is/are', 'am/are/is', 'was/were', 'will', 'going to', 'do/does', "don't/doesn't", 'not', "wasn't/weren't", 'have/has', 'am/are', 'is', 'won\'t'].includes(lower)) badgeClass = "bg-purple-100 text-purple-700 border-purple-200 border-b-[3px]";

                                        if (badgeClass) {
                                          return <span key={pIdx} className={`px-3 py-1.5 mx-0.5 rounded-xl border font-bold inline-block shadow-sm ${badgeClass}`}>{text}</span>;
                                        }
                                        return <span key={pIdx} className="text-slate-600 font-semibold">{text}</span>;
                                     })}
                                   </div>
                                 ))}
                               </div>
                             )}
                             {g.examples && g.examples.length > 0 && (
                               <div>
                                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Ejemplos:</p>
                                 <ul className="space-y-2">
                                   {g.examples.map((ex, i) => (
                                     <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                                       <span className="text-indigo-400 mt-0.5 font-black shrink-0">·</span>
                                       <span>{ex}</span>
                                     </li>
                                   ))}
                                 </ul>
                               </div>
                             )}
                           </div>
                         ))}
                       </div>
                     )}
                     
                     <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex items-start gap-4 text-left">
                       <PlayCircle className="w-8 h-8 text-blue-500 shrink-0" />
                       <div>
                         <h4 className="font-bold text-blue-900 mb-1">¡Iniciemos relajados!</h4>
                         <p className="text-blue-800">Recuerda: el objetivo es hablar y soltarse. No te preocupes por equivocarte.</p>
                       </div>
                     </div>
                   </div>
                )}

                {step.id === 'vocab' && (
                  <div className="flex flex-col gap-12">
                     <p className="text-center text-lg text-gray-600">Haz clic en las tarjetas para ver la traducción. Presiona el botón de sonido para escuchar.</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {lesson.vocabulario.map((item, idx) => (
                         <Flashcard key={idx} item={item} />
                       ))}
                     </div>
                  </div>
                )}

                {step.id === 'pronunciation' && (
                  <div className="max-w-3xl mx-auto space-y-8">
                    <p className="text-sm font-bold tracking-widest text-center text-indigo-400 uppercase mb-6">Escucha y repite en voz alta</p>
                    <div className="space-y-4">
                      {lesson.lenguajeClave.match(/[^,.!?]+[,.!?]+/g)?.map((phraseWithPunctuation, idx) => {
                         const phrase = phraseWithPunctuation.trim();
                         if (!phrase) return null;
                         return (
                          <div key={idx} className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 hover:border-indigo-200 transition-colors group">
                            <AudioButton 
                              text={phrase} 
                              className="shrink-0 w-14 h-14 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-transparent group-hover:border-indigo-200" 
                            />
                            <p className="text-xl sm:text-2xl font-bold text-gray-800 font-serif leading-relaxed flex-1">
                              {phrase}
                            </p>
                          </div>
                        )
                      }) || (
                        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 hover:border-indigo-200 transition-colors group">
                          <AudioButton 
                            text={lesson.lenguajeClave} 
                            className="shrink-0 w-14 h-14 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-transparent group-hover:border-indigo-200" 
                          />
                          <p className="text-xl sm:text-2xl font-bold text-gray-800 font-serif leading-relaxed flex-1">
                            {lesson.lenguajeClave}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step.id === 'practice' && (
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                      <MessagesSquare className="w-6 h-6 text-green-500" />
                      Role-play: Conversación
                    </h3>
                    <div className="space-y-4">
                      {lesson.practica.split('. ').map((line, idx) => {
                        if (!line.trim()) return null;
                        const isA = line.startsWith('A:');
                        const isTeacher = line.startsWith('Teacher:');
                        const isPrimary = isA || isTeacher;
                        
                        // Clean up prefix
                        const cleanLine = line.replace(/^(A:|B:|Teacher:|Student:)\s*/, '');
                        if(!cleanLine) return null;

                        return (
                          <div key={idx} className={`flex items-end gap-3 ${isPrimary ? 'justify-start' : 'justify-end'}`}>
                            {isPrimary && (
                               <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm shrink-0">Tú</div>
                            )}
                            <div className={`p-4 rounded-2xl max-w-[80%] relative group ${isPrimary ? 'bg-indigo-50 text-indigo-900 rounded-bl-none' : 'bg-green-50 text-green-900 rounded-br-none'}`}>
                              <p className="text-lg font-medium">{cleanLine}</p>
                              <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${isPrimary ? '-right-12' : '-left-12'}`}>
                                <AudioButton text={cleanLine} className="p-2 !bg-white shadow" />
                              </div>
                            </div>
                            {!isPrimary && (
                               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0 shadow-sm border border-green-200">B</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step.id === 'game' && currentQuestion && (
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
                     <p className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-6 text-center">¡Hora de Jugar! - Pregunta {currentGameQuestionIdx + 1} de {lesson.quiz.length}</p>
                     
                     <h3 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
                       {currentQuestion.question}
                     </h3>

                     <div className="space-y-4 max-w-xl mx-auto">
                        {currentQuestion.options.map(option => {
                          const isSelected = selectedGameOptionId === option.id;
                          const isCorrect = option.isCorrect;
                          
                          let btnStyle = "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50";
                          if (showGameFeedback) {
                            if (isSelected && isCorrect) btnStyle = "bg-green-50 border-green-500 text-green-800 scale-[1.02] shadow-md z-10";
                            else if (isSelected && !isCorrect) btnStyle = "bg-red-50 border-red-500 text-red-800";
                            else if (!isSelected && isCorrect) btnStyle = "bg-green-50 border-green-500 text-green-800";
                            else btnStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
                          }

                          return (
                            <button
                              key={option.id}
                              onClick={() => handleGameOptionSelect(option.id)}
                              disabled={showGameFeedback}
                              className={`w-full text-left p-5 rounded-2xl border-2 font-bold text-lg transition-all flex justify-between items-center ${btnStyle}`}
                            >
                              <span>{option.text}</span>
                              {showGameFeedback && isSelected && isCorrect && <Check className="w-6 h-6 text-green-600" />}
                              {showGameFeedback && isSelected && !isCorrect && <X className="w-6 h-6 text-red-600" />}
                            </button>
                          );
                        })}
                     </div>

                     {showGameFeedback && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`mt-8 p-5 rounded-2xl max-w-xl mx-auto ${
                            currentQuestion.options.find(o => o.id === selectedGameOptionId)?.isCorrect 
                            ? 'bg-green-50 border border-green-100 text-green-900' 
                            : 'bg-orange-50 border border-orange-100 text-orange-900'
                          }`}
                        >
                          <p className="font-semibold text-lg flex items-start gap-3">
                             {currentQuestion.options.find(o => o.id === selectedGameOptionId)?.isCorrect ? (
                               <Sparkles className="w-6 h-6 shrink-0 mt-0.5 text-green-500" />
                             ) : (
                               <span className="text-2xl mt-[-4px]">💡</span>
                             )}
                             {currentQuestion.options.find(o => o.id === selectedGameOptionId)?.isCorrect 
                               ? currentQuestion.feedbackCorrect 
                               : currentQuestion.feedbackIncorrect}
                          </p>
                          
                          <button 
                            onClick={handleNextGameQuestion}
                            className="mt-6 w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                          >
                            {currentGameQuestionIdx < lesson.quiz.length - 1 ? 'Siguiente Pregunta' : 'Continuar'} <ArrowRight className="w-5 h-5" />
                          </button>
                        </motion.div>
                     )}
                  </div>
                )}

                {step.id === 'summary' && (
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center">
                    <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4">¡Excelente trabajo!</h3>
                    <p className="text-lg text-gray-600 mb-10">Has completado la lección. Aquí está tu práctica para la casa.</p>
                    
                    <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 text-left">
                      <h4 className="font-bold text-orange-900 mb-4 text-xl flex items-center gap-2">
                        <Book className="w-6 h-6" />
                        Tu Tarea Diaria (15 mins)
                      </h4>
                      <p className="text-orange-800 text-lg">{lesson.tarea}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="h-24 bg-white border-t border-gray-100 flex items-center justify-between px-4 sm:px-8 shrink-0 relative z-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <button
          onClick={handlePrev}
          className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${
            currentStepIndex === 0 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          disabled={currentStepIndex === 0}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex gap-2">
          {LESSON_STEPS.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentStepIndex ? 'bg-indigo-600 scale-125' : 
                idx < currentStepIndex ? 'bg-indigo-200' : 'bg-gray-200'
              }`} 
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
        >
          <span className="text-lg">{currentStepIndex === LESSON_STEPS.length - 1 ? 'Terminar' : 'Siguiente'}</span>
          {currentStepIndex === LESSON_STEPS.length - 1 ? <CheckCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
        </button>
      </footer>
    </div>
  );
}
