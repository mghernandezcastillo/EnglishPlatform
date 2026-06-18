import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, XCircle, ArrowRight, Play, BookOpen } from 'lucide-react';
import { curriculumLevels } from '../data/curriculum';
import { dbAdmin } from '../lib/db';
import { VirtualQuestion } from '../types';

interface Props {
  levelId: string;
}

export function VirtualEvaluationView({ levelId }: Props) {
  const level = curriculumLevels.find(l => l.id === levelId);
  const questions = level?.virtualEvaluation || [];

  const [studentName, setStudentName] = useState(() => {
    return new URLSearchParams(window.location.search).get('student') || '';
  });
  const [hasStarted, setHasStarted] = useState(() => {
    return !!new URLSearchParams(window.location.search).get('student');
  });
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (level) {
      document.title = `Evaluación: ${level.title} ${studentName ? `- ${studentName}` : ''}`;
    }
  }, [level, studentName]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Nivel no encontrado</h1>
          <a href="/" className="text-indigo-600 hover:underline mt-4 inline-block">Volver al inicio</a>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl max-w-md w-full mx-4 border border-indigo-50">
           <BookOpen className="w-16 h-16 text-indigo-200 mx-auto mb-4" />
           <h1 className="text-2xl font-bold text-gray-800 mb-2">Evaluación en construcción</h1>
           <p className="text-gray-500 mb-6">Pronto estará disponible el examen virtual para este nivel.</p>
           <a href="/" className="inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-full hover:bg-indigo-700 transition">Volver</a>
        </div>
      </div>
    );
  }

  const handleStart = () => {
    if (studentName.trim().length > 1) {
      setHasStarted(true);
    }
  };

  const handleNext = () => {
    // Save current answer
    const currentQ = questions[currentQuestionIdx];
    setAnswers(prev => ({ ...prev, [currentQ.id]: inputValue.trim() }));
    setInputValue('');

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = async () => {
    setIsSubmitting(true);
    
    // Save last answer if not saved
    const currentQ = questions[currentQuestionIdx];
    const finalAnswers = { ...answers, [currentQ.id]: inputValue.trim() };
    setAnswers(finalAnswers);

    // Calculate score
    let correctCount = 0;
    questions.forEach(q => {
        const userAnswer = (finalAnswers[q.id] || '').toLowerCase();
        const correct = q.correctAnswer.toLowerCase();
        if (userAnswer === correct) {
            correctCount++;
        }
    });

    try {
        await dbAdmin.saveEvaluationScore(studentName, levelId, correctCount, questions.length, finalAnswers);
    } catch(e) {
        console.error(e);
    }

    setIsSubmitting(false);
    setIsFinished(true);
  };

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (isFinished) {
    let score = 0;
    questions.forEach(q => {
      if ((answers[q.id] || '').toLowerCase() === q.correctAnswer.toLowerCase()) score++;
    });
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 border border-emerald-50 text-center animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">¡Examen Terminado!</h1>
            <p className="text-lg text-gray-600 mb-8">Gracias por completarlo, <span className="font-bold">{studentName}</span>.</p>
            
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 text-emerald-900">
                <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
                <div className="text-xl font-bold opacity-80">{percentage}%</div>
            </div>

            <p className="text-gray-500 text-sm mb-6">Tus resultados han sido guardados y enviados a tu profesor.</p>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-8 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        
        <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-md p-8 sm:p-10 border border-white/20 backdrop-blur-sm z-10 text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Evaluación Virtual</h1>
            <h2 className="text-lg text-indigo-600 font-bold mb-6">{level.title}</h2>
            
            <div className="mb-8 text-left space-y-4">
                <p className="text-gray-600 text-sm">Este examen pondrá a prueba lo que has aprendido. Tiene {questions.length} preguntas.</p>
                
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Escribe tu nombre completo:</label>
                    <input 
                        type="text" 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-5 py-4 border-2 border-slate-100 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium text-lg bg-slate-50 focus:bg-white"
                        onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                    />
                </div>
            </div>

            <button 
                disabled={studentName.trim().length <= 1}
                onClick={handleStart}
                className="w-full bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
                Empezar Evaluación
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestionIdx];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
       {/* Header Progresion */}
       <header className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10 shadow-sm">
           <div className="font-extrabold text-indigo-900">{level.title}</div>
           <div className="flex items-center gap-4">
               <span className="text-sm font-bold text-gray-400">Pregunta {currentQuestionIdx + 1} de {questions.length}</span>
               <div className="w-32 sm:w-48 h-3 bg-slate-100 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-indigo-500 transition-all duration-500 ease-out" 
                     style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
                   ></div>
               </div>
           </div>
       </header>

       {/* Question Area */}
       <main className="flex-1 flex flex-col justify-center items-center p-4">
           <div className="max-w-2xl w-full mx-auto">
               <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-12">
                   
                   {/* Type specific UI */}
                   {q.type === 'listening' && (
                       <div className="mb-8 p-6 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-slate-100">
                           <button 
                               onClick={() => q.audioText && playAudio(q.audioText)}
                               className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-indigo-200 shadow-xl hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all text-white group"
                           >
                               <Play className="w-8 h-8 ml-1" fill="currentColor" />
                           </button>
                           <p className="mt-4 font-bold text-gray-500 tracking-wide uppercase text-sm">Escucha el audio</p>
                       </div>
                   )}

                   <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 leading-tight">
                       {q.question.split('___').map((part, i, arr) => (
                           <React.Fragment key={i}>
                               {part}
                               {i < arr.length - 1 && (
                                   <span className="inline-block mx-2 w-16 border-b-4 border-indigo-200"></span>
                               )}
                           </React.Fragment>
                       ))}
                   </h3>

                   {/* Options / Input */}
                   {q.options && q.options.length > 0 ? (
                       <div className="space-y-4">
                           {q.options.map(opt => (
                               <button 
                                   key={opt}
                                   onClick={() => setInputValue(opt)}
                                   className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-lg flex items-center gap-4 group ${
                                       inputValue === opt 
                                           ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md' 
                                           : 'border-slate-100 bg-white text-gray-600 hover:border-indigo-300 hover:bg-indigo-50/30 hover:text-indigo-800'
                                   }`}
                               >
                                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                       inputValue === opt ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'
                                   }`}>
                                       {inputValue === opt && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                   </div>
                                   {opt}
                               </button>
                           ))}
                       </div>
                   ) : (
                       <div>
                           <input 
                               type="text" 
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}
                               placeholder="Escribe tu respuesta aquí..."
                               className="w-full px-6 py-5 border-2 border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-bold text-xl text-center bg-slate-50 focus:bg-white placeholder-gray-400"
                               onKeyDown={(e) => {
                                 if (e.key === 'Enter' && inputValue.trim() !== '') {
                                     handleNext();
                                 }
                               }}
                               autoFocus
                           />
                       </div>
                   )}
               </div>

               {/* Footer Controls */}
               <div className="mt-8 flex justify-end">
                   <button 
                       disabled={inputValue.trim() === '' || isSubmitting}
                       onClick={handleNext}
                       className="bg-indigo-900 disabled:bg-slate-300 disabled:text-slate-500 text-white font-extrabold text-lg px-10 py-5 rounded-2xl shadow-lg hover:bg-indigo-800 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                   >
                       {isSubmitting ? 'Guardando...' : (currentQuestionIdx === questions.length - 1 ? 'Terminar Evaluación' : 'Siguiente')}
                       {!isSubmitting && <ArrowRight className="w-6 h-6" />}
                   </button>
               </div>
           </div>
       </main>
    </div>
  );
}
