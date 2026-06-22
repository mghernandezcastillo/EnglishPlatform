import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Trophy, Sparkles, X as CloseIcon } from 'lucide-react';
import { studentConfig, avatars } from '../config';
import confetti from 'canvas-confetti';
import { UserProgress } from '../types';

interface AssessmentProps {
  progress?: UserProgress;
  onClose: (level?: string) => void;
}

const assessmentQuestions = [
  {
    id: 1,
    title: 'Nivel Básico (A1)',
    question: 'Hello, how ___ you?',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'is', isCorrect: false },
      { id: 'b', text: 'am', isCorrect: false },
      { id: 'c', text: 'are', isCorrect: true },
    ],
    feedbackCorrect: '¡Correcto! "How are you?" es la forma básica de preguntar "¿Cómo estás?".',
    feedbackIncorrect: 'La forma correcta es "are". (How are you?)'
  },
  {
    id: 2,
    title: 'Nivel Básico (A1)',
    question: 'I ___ a teacher.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'am', isCorrect: true },
      { id: 'b', text: 'is', isCorrect: false },
      { id: 'c', text: 'are', isCorrect: false },
    ],
    feedbackCorrect: '¡Perfecto! "I am" es "Yo soy".',
    feedbackIncorrect: 'Con el pronombre "I" (Yo) usamos "am". (I am a teacher).'
  },
  {
    id: 3,
    title: 'Nivel Pre-Intermedio (A2)',
    question: 'Yesterday, I ___ to the store.',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'go', isCorrect: false },
      { id: 'b', text: 'went', isCorrect: true },
      { id: 'c', text: 'going', isCorrect: false },
    ],
    feedbackCorrect: '¡Excelente! "Went" es el pasado de "go".',
    feedbackIncorrect: 'Como es ayer (yesterday), necesitamos el verbo en pasado: "went".'
  },
  {
    id: 4,
    title: 'Nivel Pre-Intermedio (A2)',
    question: 'She ___ like coffee.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'don\'t', isCorrect: false },
      { id: 'b', text: 'isn\'t', isCorrect: false },
      { id: 'c', text: 'doesn\'t', isCorrect: true },
    ],
    feedbackCorrect: '¡Muy bien! "Doesn\'t" es la negación para She/He/It en presente.',
    feedbackIncorrect: 'Para She, usamos "doesn\'t" para negar.'
  },
  {
    id: 5,
    title: 'Nivel Intermedio (B1)',
    question: 'If it rains, we ___ at home.',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'will stay', isCorrect: true },
      { id: 'b', text: 'would stay', isCorrect: false },
      { id: 'c', text: 'stayed', isCorrect: false },
    ],
    feedbackCorrect: '¡Correcto! Es el primer condicional.',
    feedbackIncorrect: 'Aquí usamos el primer condicional con "will".'
  },
  {
    id: 6,
    title: 'Nivel Intermedio (B1)',
    question: 'Have you ever ___ to London?',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'be', isCorrect: false },
      { id: 'b', text: 'was', isCorrect: false },
      { id: 'c', text: 'been', isCorrect: true },
    ],
    feedbackCorrect: '¡Perfecto! Usamos el participio "been" con "Have you ever...".',
    feedbackIncorrect: 'La forma correcta es "been" (¿Alguna vez has estado...?)'
  },
  {
    id: 7,
    title: 'Nivel Intermedio-Alto (B2)',
    question: 'By the time we arrived, the movie ___.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'started', isCorrect: false },
      { id: 'b', text: 'has started', isCorrect: false },
      { id: 'c', text: 'had started', isCorrect: true },
    ],
    feedbackCorrect: '¡Excelente uso del pasado perfecto!',
    feedbackIncorrect: 'Se usa el pasado perfecto (had started) para una acción anterior a otra en el pasado.'
  },
  {
    id: 8,
    title: 'Nivel Intermedio-Alto (B2)',
    question: 'I am looking forward to ___ you.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'see', isCorrect: false },
      { id: 'b', text: 'seeing', isCorrect: true },
      { id: 'c', text: 'saw', isCorrect: false },
    ],
    feedbackCorrect: '¡Genial! "Looking forward to" siempre lleva el verbo con -ing.',
    feedbackIncorrect: 'A pesar del "to", se usa el verbo con -ing: "seeing".'
  },
  {
    id: 9,
    title: 'Nivel Avanzado (C1)',
    question: 'Scarcely ___ when the phone rang.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'I had arrived', isCorrect: false },
      { id: 'b', text: 'had I arrived', isCorrect: true },
      { id: 'c', text: 'I arrived', isCorrect: false },
    ],
    feedbackCorrect: '¡Increíble! Conoces muy bien la estructura de inversión.',
    feedbackIncorrect: 'Estructura muy avanzada: después de "Scarcely" al inicio de la frase, se invierte sujeto y verbo auxiliar.'
  },
  {
    id: 10,
    title: 'Nivel Avanzado (C1)',
    question: 'The company\'s future is hanging in the ___.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    options: [
      { id: 'a', text: 'balance', isCorrect: true },
      { id: 'b', text: 'air', isCorrect: false },
      { id: 'c', text: 'doubt', isCorrect: false },
    ],
    feedbackCorrect: '¡Eres un maestro/a! Conoces modismos avanzados.',
    feedbackIncorrect: '"Hanging in the balance" es una expresión que significa estar en una situación precaria o indecisa.'
  }
];

import imgKidWelcome from '../assets/images/kids_assessment_welcome_1782139154509.jpg';
import imgKidSun from '../assets/images/kids_q_sun_1782139171200.jpg';
import imgKidCat from '../assets/images/kids_q_cat_1782139183676.jpg';
import imgKidApples from '../assets/images/kids_q_apples_1782139196585.jpg';
import imgKidWakeup from '../assets/images/kids_q_wakeup_1782139210255.jpg';
import imgKidMom from '../assets/images/kids_q_mom_1782139222631.jpg';

const assessmentQuestionsKids = [
  {
    id: 1,
    title: 'Colors',
    question: 'What color is the sun?',
    image: imgKidSun,
    options: [
      { id: 'a', text: 'Blue', isCorrect: false },
      { id: 'b', text: 'Red', isCorrect: false },
      { id: 'c', text: 'Yellow', isCorrect: true },
    ],
    feedbackCorrect: '¡Correcto! El sol es de color "yellow" (amarillo).',
    feedbackIncorrect: 'El sol es amarillo. Amarillo en inglés se dice "yellow".'
  },
  {
    id: 2,
    title: 'Animals',
    question: 'What animal says "Meow"?',
    image: imgKidCat,
    options: [
      { id: 'a', text: 'Dog', isCorrect: false },
      { id: 'b', text: 'Cat', isCorrect: true },
      { id: 'c', text: 'Cow', isCorrect: false },
    ],
    feedbackCorrect: '¡Sí! El gato hace "miau", y gato en inglés se dice "Cat".',
    feedbackIncorrect: 'El animal que hace "miau" es el gato: "Cat".'
  },
  {
    id: 3,
    title: 'Numbers',
    question: 'How many apples are here: 🍎 🍎 🍎',
    image: imgKidApples,
    options: [
      { id: 'a', text: 'Two', isCorrect: false },
      { id: 'b', text: 'Three', isCorrect: true },
      { id: 'c', text: 'Four', isCorrect: false },
    ],
    feedbackCorrect: '¡Perfecto! Hay tres manzanas. Tres se dice "Three".',
    feedbackIncorrect: 'Vamos a contar: One, Two, Three. ¡Son tres!'
  },
  {
    id: 4,
    title: 'Greetings',
    question: 'When you wake up, you say:',
    image: imgKidWakeup,
    options: [
      { id: 'a', text: 'Good morning', isCorrect: true },
      { id: 'b', text: 'Good night', isCorrect: false },
      { id: 'c', text: 'Goodbye', isCorrect: false },
    ],
    feedbackCorrect: '¡Excelente! "Good morning" significa buenos días.',
    feedbackIncorrect: 'Al despertar decimos buenos días: "Good morning".'
  },
  {
    id: 5,
    title: 'Family',
    question: 'Who is this?',
    image: imgKidMom,
    options: [
      { id: 'a', text: 'Mom / Mother', isCorrect: true },
      { id: 'b', text: 'Brother', isCorrect: false },
      { id: 'c', text: 'Cat', isCorrect: false },
    ],
    feedbackCorrect: '¡Correcto! Es una mamá ("Mom").',
    feedbackIncorrect: 'Es la mamá. Mamá en inglés se dice "Mom" o "Mother".'
  }
];

function getLevelFromScore(score: number, isKid: boolean) {
  if (isKid) {
    if (score <= 1) return { level: 'Kids Inicial', desc: '¡Vamos a descubrir las palabras básicas y divertirnos mucho aprendiendo color y saludos en inglés!' };
    if (score <= 3) return { level: 'Kids Explorador', desc: '¡Súper bien! Ya conoces varias palabras. Vamos a seguir explorando y jugando juntos.' };
    return { level: 'Kids Estrella', desc: '¡Eres una estrella! Conoces muchos colores, animales y saludos. ¡Vamos a aprender frases más largas!' };
  }
  if (score <= 2) return { level: 'A1 (Inicial)', desc: '¡El mejor momento para empezar es hoy! Empezaremos desde cero, a tu propio ritmo, paso a paso.' };
  if (score <= 4) return { level: 'A2 (Básico)', desc: 'Tienes nociones básicas. Vamos a fortalecerlas y empezar a conectar ideas.' };
  if (score <= 6) return { level: 'B1 (Intermedio)', desc: '¡Muy bien! Ya te defiendes en muchas situaciones. Refinaremos tu gramática y vocabulario.' };
  if (score <= 8) return { level: 'B2 (Intermedio Alto)', desc: '¡Excelente nivel! Tienes mucha fluidez. Trabajaremos en estructuras más complejas de forma dinámica.' };
  return { level: 'C1/C2 (Avanzado)', desc: '¡Increíble! Tu inglés es muy avanzado. Nos enfocaremos en perfeccionar modismos y fluidez nativa.' };
}

export function Assessment({ progress, onClose }: AssessmentProps) {
  const [step, setStep] = useState<'welcome' | 'question' | 'results'>('welcome');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const displayStudentName = progress?.studentName || studentConfig.name;
  const displayAvatarUrl = (progress?.avatarId && avatars[progress.avatarId as keyof typeof avatars]) || studentConfig.avatarUrl;
  const isKid = progress?.studentType?.toLowerCase() === 'niño' || progress?.studentType?.toLowerCase() === 'kids';

  const questions = isKid ? assessmentQuestionsKids : assessmentQuestions;
  const currentQuestion = questions[currentQuestionIdx];

  const handleStart = () => {
    setStep('question');
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return; // Prevent changing after selection
    setSelectedOptionId(optionId);
    setShowFeedback(true);
    
    const selectedOption = currentQuestion.options.find(o => o.id === optionId);
    if (selectedOption?.isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(i => i + 1);
    } else {
      setStep('results');
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#4f46e5', '#10b981', '#f59e0b']
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      <div className="min-h-screen relative flex flex-col justify-center py-12 px-4 sm:px-6">
        
        {/* Header Actions */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
           <button 
             onClick={() => {
               if(confirm('¿Estás seguro que deseas reiniciar la evaluación?')) {
                 setStep('welcome');
                 setCurrentQuestionIdx(0);
                 setSelectedOptionId(null);
                 setShowFeedback(false);
                 setScore(0);
               }
             }}
             className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-bold text-gray-500 hover:text-indigo-600 shadow-sm border border-gray-100 hover:bg-white transition-colors"
           >
             Reiniciar
           </button>
           <button 
             onClick={() => onClose()}
             className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-bold text-gray-500 hover:text-red-600 shadow-sm border border-gray-100 hover:bg-white transition-colors"
           >
             <span>Salir</span>
             <CloseIcon className="w-4 h-4" />
           </button>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <AnimatePresence mode="wait">
            
            {step === 'welcome' && (
              <motion.div 
                key="welcome"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[2rem] shadow-xl overflow-hidden border-4 border-indigo-50 text-center"
              >
                <div className={`px-8 py-16 relative overflow-hidden ${isKid ? '' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}>
                   {isKid && (
                     <div className="absolute inset-0 bg-blue-900">
                       <img src={imgKidWelcome} alt="Kids Welcome" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                       <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                     </div>
                   )}
                   {!isKid && (
                     <div className="absolute inset-0 opacity-10">
                       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
                         <polygon points="0,0 100,0 100,20 0,80" />
                       </svg>
                     </div>
                   )}
                   <div className="relative z-10">
                     <div className="mx-auto w-32 h-32 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center p-3 mb-6 shadow-2xl border-2 border-white/40">
                        <img src={displayAvatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover bg-white rotate-6" />
                     </div>
                     <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                       ¡Bienvenida, {displayStudentName}!
                     </h2>
                     <p className="text-xl text-indigo-100 max-w-lg mx-auto font-medium">
                       Hagamos una divertida actividad rápida para ver en qué nivel estás.
                     </p>
                   </div>
                </div>
                
                <div className="p-8 sm:p-12 relative -mt-8 bg-white rounded-t-[2.5rem]">
                  <p className="text-lg text-gray-600 mb-10">
                    No te preocupes por equivocarte, el objetivo es conocerte mejor para adaptar las clases a ti. ¡Aquí celebramos cada intento!
                  </p>
                  <button 
                    onClick={handleStart}
                    className="inline-flex items-center gap-3 bg-indigo-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all"
                  >
                    Comenzar Actividad <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'question' && (
              <motion.div 
                key={`q-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 md:w-1/2 relative bg-gray-100 overflow-hidden min-h-[250px] sm:min-h-full">
                   <img 
                     src={currentQuestion.image} 
                     alt="Question Context" 
                     className="absolute inset-0 w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <span className="text-white font-bold bg-indigo-600/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm">
                        Pregunta {currentQuestionIdx + 1} de {questions.length}
                      </span>
                   </div>
                </div>

                <div className="sm:w-3/5 md:w-1/2 p-8 sm:p-10 flex flex-col">
                  <h3 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-2">{currentQuestion.title}</h3>
                  <p className="text-2xl font-extrabold text-gray-900 mb-8 leading-tight">
                    {currentQuestion.question}
                  </p>

                  <div className="space-y-4 flex-1">
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedOptionId === option.id;
                      const isCorrect = option.isCorrect;
                      const showResult = showFeedback;

                      let btnStyle = "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50";
                      
                      if (showResult) {
                        if (isSelected && isCorrect) {
                           btnStyle = "bg-green-50 border-green-500 text-green-800 scale-[1.02] shadow-md z-10";
                        } else if (isSelected && !isCorrect) {
                           btnStyle = "bg-red-50 border-red-500 text-red-800";
                        } else if (!isSelected && isCorrect) {
                           btnStyle = "bg-green-50 border-green-500 text-green-800";
                        } else {
                           btnStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
                        }
                      }

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option.id)}
                          disabled={showFeedback}
                          className={`w-full text-left p-5 rounded-2xl border-2 font-bold text-lg transition-all flex justify-between items-center ${btnStyle}`}
                        >
                          <span>{option.text}</span>
                          {showResult && isSelected && isCorrect && <Check className="w-6 h-6 text-green-600" />}
                          {showResult && isSelected && !isCorrect && <X className="w-6 h-6 text-red-600" />}
                          {showResult && !isSelected && isCorrect && <Check className="w-6 h-6 text-green-600 opacity-50" />}
                        </button>
                      );
                    })}
                  </div>

                  {showFeedback && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-8 p-5 rounded-2xl ${
                        currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect 
                        ? 'bg-green-50 border border-green-100 text-green-900' 
                        : 'bg-orange-50 border border-orange-100 text-orange-900'
                      }`}
                    >
                      <p className="font-semibold text-lg flex items-start gap-3">
                         {currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                           <Sparkles className="w-6 h-6 shrink-0 mt-0.5 text-green-500" />
                         ) : (
                           <span className="text-2xl mt-[-4px]">💡</span>
                         )}
                         {currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect 
                           ? currentQuestion.feedbackCorrect 
                           : currentQuestion.feedbackIncorrect}
                      </p>
                      
                      <button 
                        onClick={handleNext}
                        className="mt-6 w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                      >
                        {currentQuestionIdx < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'} <ArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {step === 'results' && (
              <motion.div 
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] shadow-xl overflow-hidden border-4 border-yellow-100 text-center p-8 sm:p-16 max-w-2xl mx-auto"
              >
                <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">¡Evaluación Completada!</h2>
                
                <div className="inline-flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl mb-8 border border-gray-100 w-full sm:w-auto">
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Tu Puntuación</p>
                  <p className="text-5xl font-black text-indigo-600 mb-6">
                    {score} <span className="text-3xl text-gray-300">/ {questions.length}</span>
                  </p>
                  
                  <div className="bg-indigo-600 text-white px-6 py-3 rounded-2xl w-full">
                    <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-1">Nivel Estimado</p>
                    <p className="text-2xl font-extrabold">{getLevelFromScore(score, isKid).level}</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                  {getLevelFromScore(score, isKid).desc}
                </p>

                <button 
                  onClick={() => onClose(getLevelFromScore(score, isKid).level)}
                  className="bg-indigo-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1"
                >
                  Ir al panel principal
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
