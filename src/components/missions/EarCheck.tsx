import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Check, X } from 'lucide-react';

interface EarCheckProps {
  items: Array<{
    audioText: string;
    correctAnswer: string;
    options: string[];
  }>;
  theme: 'vibrant' | 'cool';
  onComplete: (results: { score: number; total: number }) => void;
}

export function EarCheck({ items, theme, onComplete }: EarCheckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(0.9);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentItem = items[currentIndex];
  const isVibrant = theme === 'vibrant';

  const playSuccessChime = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      // Ignore audio errors
    }
  };

  const speak = useCallback((text: string, currentRate: number = 0.9) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = currentRate;
    
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  }, []);

  // Ensure voices are loaded
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleOptionClick = (option: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);
    
    const isCorrect = option === currentItem.correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
      playSuccessChime();
      setShowConfetti(true);
    }

    setTimeout(() => {
      setShowConfetti(false);
      if (currentIndex < items.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedAnswer(null);
      } else {
        onComplete({ score: isCorrect ? score + 1 : score, total: items.length });
      }
    }, 2000);
  };

  const getOptionStyle = (option: string) => {
    if (selectedAnswer === null) {
      return isVibrant 
        ? "bg-white text-gray-900 border-gray-200" 
        : "bg-slate-800 text-white border-slate-700";
    }

    const isCorrect = option === currentItem.correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) {
      return "bg-green-500 text-white border-green-500";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-500 text-white border-red-500";
    }
    
    // Unselected and not correct
    return isVibrant 
      ? "bg-white/50 text-gray-500 border-gray-200" 
      : "bg-slate-800/50 text-slate-400 border-slate-700";
  };

  return (
    <div className={`min-h-[400px] w-full p-6 rounded-3xl flex flex-col items-center \${
      isVibrant 
        ? 'bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-500' 
        : 'bg-gradient-to-br from-gray-900 via-slate-800 to-blue-950'
    } relative overflow-hidden`}>
      
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: 0, 
                scale: Math.random() * 2 + 1,
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute w-3 h-3 rounded-full \${
                ['bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-pink-400'][Math.floor(Math.random() * 4)]
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className={`text-sm font-medium px-4 py-1.5 rounded-full \${
          isVibrant ? 'bg-white/20 text-white' : 'bg-slate-800/50 text-slate-300'
        }`}>
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      {/* Play Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => speak(currentItem.audioText, rate)}
        className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-6 relative \${
          isVibrant ? 'bg-white text-purple-600' : 'bg-slate-700 text-cyan-400'
        }`}
      >
        {isPlaying && (
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`absolute inset-0 rounded-full \${isVibrant ? 'bg-white' : 'bg-slate-700'}`}
          />
        )}
        <Volume2 size={40} className="relative z-10" />
      </motion.button>

      {/* Speed Controls */}
      <div className="flex gap-2 mb-8 bg-black/10 p-1.5 rounded-full">
        {[
          { label: 'Slow', value: 0.7 },
          { label: 'Normal', value: 0.9 },
          { label: 'Fast', value: 1.0 }
        ].map((s) => (
          <button
            key={s.value}
            onClick={() => setRate(s.value)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors \${
              rate === s.value 
                ? (isVibrant ? 'bg-white text-purple-600' : 'bg-cyan-500 text-slate-900')
                : 'text-white/70 hover:text-white'
            }`}
          >
            {s.value}x
          </button>
        ))}
      </div>

      <h3 className="text-xl font-medium text-white mb-6">¿Qué escuchaste?</h3>

      {/* Options */}
      <div className="w-full max-w-md space-y-4">
        <AnimatePresence mode="popLayout">
          {currentItem.options.map((option, index) => {
            const labels = ['A', 'B', 'C'];
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentItem.correctAnswer;
            const showFeedback = selectedAnswer !== null;

            return (
              <motion.button
                key={option}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: showFeedback && isSelected && !isCorrect ? [-5, 5, -5, 5, 0] : 0
                }}
                transition={{ 
                  x: { duration: 0.4 } 
                }}
                whileHover={!showFeedback ? { scale: 1.02 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
                onClick={() => handleOptionClick(option)}
                disabled={showFeedback}
                className={`w-full relative px-6 py-5 rounded-2xl border-2 text-lg font-semibold flex items-center shadow-sm transition-colors \${getOptionStyle(option)}`}
              >
                <span className={`mr-4 text-sm px-2 py-1 rounded-md \${
                  showFeedback && (isCorrect || isSelected)
                    ? 'bg-white/20 text-white'
                    : (isVibrant ? 'bg-gray-100 text-gray-500' : 'bg-slate-700 text-slate-400')
                }`}>
                  {labels[index]})
                </span>
                <span className="flex-1 text-left">{option}</span>
                
                {showFeedback && (isCorrect || isSelected) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-4"
                  >
                    {isCorrect ? (
                      <Check className="text-white" size={24} />
                    ) : (
                      <X className="text-white" size={24} />
                    )}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
