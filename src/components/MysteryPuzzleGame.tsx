import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface MysteryPuzzleGameProps {
  targetWord: string;
  imageUrl?: string;
  panels: { id: number; label: string; color: string }[];
}

export function MysteryPuzzleGame({ targetWord, imageUrl, panels }: MysteryPuzzleGameProps) {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [won, setWon] = useState(false);

  // A default cute image if none provided
  const defaultImage = "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80";
  const displayImage = imageUrl || defaultImage;

  const handleReveal = (id: number) => {
    if (revealed.includes(id)) return;
    
    // Play a short tick sound
    try {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch(e) {}

    const newRevealed = [...revealed, id];
    setRevealed(newRevealed);

    if (newRevealed.length === panels.length) {
      setTimeout(() => {
        setWon(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF1493', '#00FFFF', '#FFD700']
        });
      }, 500);
    }
  };

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-4 sm:p-8 relative">
      {/* Box container */}
      <div className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-gray-200">
        
        {/* The hidden image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${displayImage})` }}
        />

        {/* The target word overlay shown when won */}
        <AnimatePresence>
          {won && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute inset-x-0 bottom-4 sm:bottom-8 flex justify-center z-20"
            >
              <div className="bg-white/95 backdrop-blur-md px-8 py-3 sm:py-4 rounded-full shadow-2xl border-4 border-yellow-400">
                <span className="text-3xl sm:text-5xl font-black text-indigo-700 uppercase tracking-widest">{targetWord}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The grid of panels */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-10 w-full h-full">
          {panels.map((panel) => (
            <AnimatePresence key={panel.id}>
              {!revealed.includes(panel.id) && (
                <motion.div
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleReveal(panel.id)}
                  className={`cursor-pointer ${panel.color} flex items-center justify-center border-2 border-white/50 backdrop-blur-sm shadow-inner hover:brightness-110 transition-all`}
                >
                  <span className="text-6xl sm:text-8xl font-black text-white drop-shadow-xl">{panel.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        
      </div>
      
      {!won && (
        <p className="mt-8 text-xl font-bold text-white bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm text-center">
          El estudiante dice un número y el profesor lo destapa 🖱️
        </p>
      )}
    </div>
  );
}
