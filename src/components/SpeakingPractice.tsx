import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic, RefreshCw, ChevronRight } from 'lucide-react';
import { speakingQuestions } from '../data/speakingQuestions';

interface SpeakingPracticeProps {
  onClose: () => void;
}

export function SpeakingPractice({ onClose }: SpeakingPracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * speakingQuestions.length);
      setCurrentQuestion(speakingQuestions[randomIndex]);
      setIsAnimating(false);
    }, 300); // match animation duration
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

        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Mic className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Práctica de Speaking</h2>
            <p className="text-gray-500 mt-2 font-medium">Lee la pregunta, piensa tu respuesta y habla en voz alta para practicar.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 p-8 sm:p-12 text-center min-h-[250px] flex flex-col justify-center relative overflow-hidden">
             
             <AnimatePresence mode="wait">
               {!isAnimating ? (
                 <motion.h3 
                   key={currentQuestion}
                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -20, scale: 0.95 }}
                   transition={{ duration: 0.3 }}
                   className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight"
                 >
                   "{currentQuestion}"
                 </motion.h3>
               ) : (
                 <div className="flex justify-center items-center h-full">
                    <RefreshCw className="w-10 h-10 text-indigo-300 animate-spin" />
                 </div>
               )}
             </AnimatePresence>
          </div>

          <div className="mt-12 flex justify-center">
            <button
               onClick={generateRandomQuestion}
               disabled={isAnimating}
               className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
               <RefreshCw className={`w-6 h-6 ${isAnimating ? 'animate-spin' : ''}`} />
               Otra Pregunta
               <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
