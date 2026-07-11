import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic, RefreshCw, ChevronRight, MessageCircle } from 'lucide-react';
import { speakingQuestions, SpeakingQuestion } from '../data/speakingQuestions';

interface SpeakingPracticeProps {
  onClose: () => void;
}

export function SpeakingPractice({ onClose }: SpeakingPracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState<SpeakingQuestion | null>(null);
  const remainingQuestions = useRef<SpeakingQuestion[]>([]);

  const shuffleArray = (array: SpeakingQuestion[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    if (remainingQuestions.current.length === 0) {
      remainingQuestions.current = shuffleArray(speakingQuestions);
    }
    const nextQuestion = remainingQuestions.current.pop();
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      <div className="min-h-screen relative flex flex-col justify-center items-center py-12 px-4 sm:px-6">        
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 hover:bg-red-50 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative">
              <Mic className="w-10 h-10 text-indigo-600" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-50 animate-pulse" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Práctica de Speaking</h2>
            <p className="text-gray-500 mt-2 font-medium">Lee la pregunta, piensa tu respuesta y habla en voz alta.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 p-8 sm:p-12 text-center min-h-[280px] flex flex-col justify-center relative overflow-hidden">             
             <AnimatePresence mode="wait">
                 {currentQuestion && (
                   <motion.div 
                     key={currentQuestion.question}
                     initial={{ opacity: 0, x: 50, scale: 0.95, rotateY: 20 }}
                     animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                     exit={{ opacity: 0, x: -50, scale: 0.95, rotateY: -20 }}
                     transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 20 }}
                     className="flex flex-col items-center justify-center h-full w-full"
                   >
                     <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight mb-8">
                       "{currentQuestion.question}"
                     </h3>
                     
                     <div className="w-full mt-4">
                       <div className="flex items-center justify-center gap-2 mb-3 text-indigo-500 text-sm font-semibold uppercase tracking-wider">
                         <MessageCircle className="w-4 h-4" />
                         <span>Vocabulario Útil</span>
                       </div>
                       <div className="flex flex-wrap justify-center gap-2">
                         {currentQuestion.vocab.map((word, i) => (
                           <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100 shadow-sm">
                             {word}
                           </span>
                         ))}
                       </div>
                     </div>
                   </motion.div>
                 )}
             </AnimatePresence>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={generateRandomQuestion}
              className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
            >
              <RefreshCw className="w-6 h-6 group-active:animate-spin" />
              Siguiente Pregunta
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
