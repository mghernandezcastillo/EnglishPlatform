import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, XCircle, ArrowRight, Play, BookOpen, Save, RefreshCw, AlertCircle } from 'lucide-react';
import { curriculumLevels } from '../data/curriculum';
import { dbAdmin } from '../lib/db';
import { VirtualQuestion } from '../types';
import { useBrand } from '../hooks/useBrand';
import { Diploma } from './Diploma';

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
  
  const { brand } = useBrand();

  // Storage keys
  const progressKey = `virtual_exam_progress_${levelId}_${studentName.toLowerCase().trim()}`;
  const attemptsKey = `virtual_exam_attempts_${levelId}_${studentName.toLowerCase().trim()}`;
  
  const [attempts, setAttempts] = useState(0);

  const [isLoadingProgress, setIsLoadingProgress] = useState(true);

  useEffect(() => {
    if (level) {
      document.title = `Evaluación: ${level.title} ${studentName ? `- ${studentName}` : ''}`;
    }
  }, [level, studentName]);
  
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    if (studentName.trim() && !hasStarted) {
      dbAdmin.getEvaluationProgress(levelId, studentName).then((progress) => {
         if (progress && progress.answers && Object.keys(progress.answers).length > 0) {
             setHasProgress(true);
         } else {
             setHasProgress(false);
         }
         
         if (progress) {
             setAttempts(progress.attempts || 0);
         } else {
             setAttempts(0);
         }
         setIsLoadingProgress(false);
      });
    } else if (!studentName.trim()) {
        setIsLoadingProgress(false);
    }
  }, [studentName, hasStarted, levelId]);

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
      setIsLoadingProgress(true);
      dbAdmin.getEvaluationProgress(levelId, studentName).then((progress) => {
         if (progress) {
             setCurrentQuestionIdx(progress.currentQuestionIdx || 0);
             setAnswers(progress.answers || {});
             setAttempts(progress.attempts || 0);
             if (progress.answers && progress.answers[questions[progress.currentQuestionIdx || 0]?.id]) {
                setInputValue(progress.answers[questions[progress.currentQuestionIdx || 0]?.id]);
             } else {
                setInputValue('');
             }
         } else {
             setCurrentQuestionIdx(0);
             setAnswers({});
             setInputValue('');
         }
         setIsLoadingProgress(false);
         setHasStarted(true);
      });
    }
  };

  const handleNext = () => {
    const currentQ = questions[currentQuestionIdx];
    const newAnswers = { ...answers, [currentQ.id]: inputValue.trim() };
    setAnswers(newAnswers);
    
    // Save progress to database
    dbAdmin.saveEvaluationProgress(levelId, studentName, {
        currentQuestionIdx: currentQuestionIdx + 1,
        answers: newAnswers,
        attempts: attempts
    });

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      // clear input for next or load if answered
      const nextQ = questions[currentQuestionIdx + 1];
      setInputValue(newAnswers[nextQ.id] || '');
    } else {
      finishExam(newAnswers);
    }
  };
  
  const handleSaveAndExit = () => {
      dbAdmin.saveEvaluationProgress(levelId, studentName, {
          currentQuestionIdx: currentQuestionIdx,
          answers: answers,
          attempts: attempts
      }).then(() => {
          window.location.href = '/'; // Go to home or dashboard
      });
  };

  const finishExam = async (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);

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
        
        // Increment attempts
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        // Clear progress (only keep attempts)
        await dbAdmin.saveEvaluationProgress(levelId, studentName, {
            currentQuestionIdx: 0,
            answers: {},
            attempts: newAttempts
        });
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
    const passed = percentage >= 80;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans p-4">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 border border-slate-100 text-center animate-fade-in relative overflow-hidden">
            {passed && <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl -z-10"></div>}
            {!passed && <div className="absolute top-0 left-0 p-8 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl -z-10"></div>}

            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                {passed ? <CheckCircle className="w-10 h-10 text-emerald-600" /> : <AlertCircle className="w-10 h-10 text-amber-600" />}
            </div>
            
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
               {passed ? '¡Felicitaciones!' : 'Has terminado'}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
               {passed 
                 ? `Has aprobado el nivel ${level.title} con éxito, ` 
                 : `Has completado el examen de ${level.title}, `}
               <span className="font-bold">{studentName}</span>.
            </p>
            
            <div className={`border rounded-2xl p-6 mb-8 ${passed ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-amber-50 border-amber-100 text-amber-900'}`}>
                <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
                <div className="text-xl font-bold opacity-80">{percentage}%</div>
                <div className="mt-4 font-medium text-sm px-4">
                    {passed 
                      ? "¡Excelente trabajo! Demostraste un gran dominio de los temas." 
                      : (attempts < 2 
                          ? "No has alcanzado el 80% necesario para aprobar. Revisa tus apuntes y vuelve a intentarlo cuando estés listo." 
                          : "No has alcanzado el 80% y has agotado tus 2 intentos permitidos. Por favor, consulta con tu tutor.")}
                </div>
            </div>

            {passed && (
              <div className="mb-8">
                 <Diploma 
                   studentName={studentName} 
                   levelName={level.title} 
                   score={score} 
                   total={questions.length} 
                   brandName={brand.name} 
                   logoUrl={brand.logoUrl} 
                 />
              </div>
            )}

            {!passed && attempts < 2 && (
                <button 
                  onClick={() => {
                      setIsFinished(false);
                      setCurrentQuestionIdx(0);
                      setAnswers({});
                      setInputValue('');
                  }}
                  className="w-full bg-amber-500 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-amber-600 transition-all mb-4 flex items-center justify-center gap-2"
                >
                    <RefreshCw className="w-5 h-5" />
                    Volver a Intentarlo
                </button>
            )}

            <button 
               onClick={() => window.location.href = '/'}
               className={`w-full font-bold text-lg py-4 rounded-xl transition-all ${passed || attempts >= 2 ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
                Volver al panel principal
            </button>
            
            <p className="text-gray-400 text-xs mt-6">Tus resultados han sido enviados a tu profesor.</p>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    if (isLoadingProgress && studentName.trim()) {
       return <div className="min-h-screen flex items-center justify-center bg-slate-50">Cargando progreso...</div>;
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-8 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        
        <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-md p-8 sm:p-10 border border-white/20 backdrop-blur-sm z-10 text-center">
            {brand.logoUrl ? (
                <img src={brand.logoUrl} alt={brand.name} className="w-20 h-20 object-contain rounded-2xl mx-auto mb-6 shadow-sm" />
            ) : (
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
            )}
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">{brand.name} - Evaluación</h1>
            <h2 className="text-lg text-indigo-600 font-bold mb-6">{level.title}</h2>
            
            {attempts >= 2 ? (
                <div className="mb-8 p-6 bg-red-50 text-red-800 rounded-2xl border border-red-100 text-sm font-medium">
                    <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    Has agotado tus 2 intentos para este examen. Por favor, consulta con tu tutor para continuar.
                </div>
            ) : (
                <>
                    <div className="mb-8 text-left space-y-4">
                        <p className="text-gray-600 text-sm">
                          Este examen tiene <span className="font-bold">{questions.length} preguntas</span> y necesitas un <span className="font-bold">80%</span> para aprobar.
                          Tienes <span className="font-bold text-indigo-600">{2 - attempts}</span> intento(s) disponible(s).
                        </p>
                        
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
                        {hasProgress && studentName.trim().length > 1 && (
                            <div className="text-xs text-amber-600 bg-amber-50 p-3 rounded-lg flex items-start gap-2 border border-amber-100">
                                <Save className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>Tienes un examen en progreso guardado. Al continuar, reanudarás donde lo dejaste.</span>
                            </div>
                        )}
                    </div>

                    <button 
                        disabled={studentName.trim().length <= 1}
                        onClick={handleStart}
                        className="w-full bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                    >
                        {hasProgress ? 'Reanudar Evaluación' : 'Empezar Evaluación'}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-gray-400 mt-4 font-medium">Puedes salir y continuar luego o cerrar el navegador.</p>
                </>
            )}
        </div>
      </div>
    );
  }

  const q = questions[currentQuestionIdx];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
       {/* Header Progresion */}
       <header className="bg-white px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between sticky top-0 z-10 shadow-sm gap-4">
           <div className="font-extrabold text-indigo-900 text-lg flex items-center justify-between w-full md:w-auto">
               <span>{level.title}</span>
               <button 
                  onClick={handleSaveAndExit}
                  title="Guardar progreso y salir"
                  className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
               >
                   <Save className="w-5 h-5" />
               </button>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-1 w-full md:w-auto">
               <span className="text-lg font-black text-indigo-600">Pregunta {currentQuestionIdx + 1} de {questions.length}</span>
               <div className="w-full md:w-64 h-4 bg-slate-100 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-indigo-500 transition-all duration-500 ease-out" 
                     style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                   ></div>
               </div>
           </div>
           
           <button 
              onClick={handleSaveAndExit}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
           >
               <Save className="w-4 h-4" />
               Guardar y salir
           </button>
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

