import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Trophy, Play, X as CloseIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase } from '../lib/supabase';

interface Question {
  id: string;
  text: string;
  image_url?: string;
  options: string[];
  correct_index: number;
}

interface PreClassAssessmentProps {
  classId: string;
  classTitle: string;
  targetAudience: string;
  onClose: () => void;
  onPass: (classId: string) => void;
}

export function PreClassAssessment({ classId, classTitle, targetAudience, onClose, onPass }: PreClassAssessmentProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasNoEval, setHasNoEval] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const getMappedAudiences = (type: string) => {
          if (type === 'niño') return ['child', 'niño'];
          if (type === 'adolescente') return ['teen', 'adolescente'];
          return ['adult', 'adulto'];
        };
        const mappedAudiences = getMappedAudiences(targetAudience);

        const { data, error } = await supabase
          .from('pre_class_evaluations')
          .select('questions')
          .eq('class_id', classId)
          .in('target_audience', mappedAudiences)
          .limit(1);

        const firstResult = data && data.length > 0 ? data[0] : null;

        if (error || !firstResult || !firstResult.questions || firstResult.questions.length === 0) {
          setHasNoEval(true);
        } else {
          setQuestions(firstResult.questions);
        }
      } catch (err) {
        setHasNoEval(true);
      } finally {
        setLoading(false);
      }
    }
    loadQuestions();
  }, [classId, targetAudience]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-800">Cargando evaluación...</h2>
        </div>
      </div>
    );
  }

  if (hasNoEval) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <CloseIcon className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Evaluación no disponible</h2>
          <p className="text-gray-600 mb-6">Aún no hay una evaluación configurada para esta clase.</p>
          <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700">Volver</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQuestion.correct_index) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      const passed = (score + (selectedOption === currentQuestion.correct_index ? 1 : 0)) / questions.length >= 0.8;
      if (passed) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  if (isFinished) {
    const finalScore = score;
    const passed = finalScore / questions.length >= 0.8;

    return (
      <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4 backdrop-blur-sm">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl relative overflow-hidden">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
            <CloseIcon className="w-6 h-6" />
          </button>
          
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg ${passed ? 'bg-green-100' : 'bg-amber-100'}`}>
            <Trophy className={`w-12 h-12 ${passed ? 'text-green-600' : 'text-amber-600'}`} />
          </div>
          
          <h2 className="text-3xl font-black text-gray-800 mb-2">{passed ? '¡Excelente!' : 'Buen intento'}</h2>
          <p className="text-gray-600 mb-6 font-medium text-lg">
            Obtuviste {finalScore} de {questions.length} respuestas correctas.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            {passed ? (
              <p className="text-green-700 font-bold text-lg">¡Felicidades! Tienes los conocimientos de esta clase. Se marcará como completada.</p>
            ) : (
              <p className="text-amber-700 font-bold text-lg">Te recomendamos tomar la clase completa para repasar estos temas.</p>
            )}
          </div>

          {passed ? (
             <button onClick={() => { onPass(classId); onClose(); }} className="w-full bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 shadow-md">
               Continuar
             </button>
          ) : (
             <button onClick={onClose} className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-md">
               Volver a las clases
             </button>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative flex flex-col my-8">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 z-10 transition-colors">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100 rounded-t-3xl overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-500"
            initial={{ width: `${(currentQuestionIdx / questions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="p-8 pt-12">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
              Evaluación Previa: {classTitle}
            </span>
            <span className="font-bold text-gray-400">
              {currentQuestionIdx + 1} de {questions.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                {currentQuestion.text}
              </h2>

              {currentQuestion.image_url && (
                <div className="mb-8 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm relative pt-[50%]">
                   <img src={currentQuestion.image_url} alt="Pregunta" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correct_index;
                  
                  let optionState = 'unselected';
                  if (isAnswered) {
                    if (isCorrect) optionState = 'correct';
                    else if (isSelected) optionState = 'incorrect';
                    else optionState = 'disabled';
                  } else if (isSelected) {
                    optionState = 'selected';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`
                        p-6 rounded-2xl text-left font-semibold text-lg border-2 transition-all group flex items-center justify-between
                        ${optionState === 'unselected' ? 'bg-white border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50' : ''}
                        ${optionState === 'selected' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : ''}
                        ${optionState === 'correct' ? 'bg-green-50 border-green-500 text-green-700 shadow-sm' : ''}
                        ${optionState === 'incorrect' ? 'bg-red-50 border-red-500 text-red-700 opacity-80' : ''}
                        ${optionState === 'disabled' ? 'bg-gray-50 border-gray-200 text-gray-400 opacity-50' : ''}
                      `}
                    >
                      <span>{opt}</span>
                      {optionState === 'correct' && <Check className="w-6 h-6 text-green-500" />}
                      {optionState === 'incorrect' && <X className="w-6 h-6 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-end">
             {isAnswered && (
               <motion.button
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 onClick={handleNext}
                 className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-md group"
               >
                 Siguiente
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </motion.button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
