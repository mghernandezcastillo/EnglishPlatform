import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface WheelItem {
  label: string;
  color: string;
}

interface SpinningWheelProps {
  items: WheelItem[];
  onSpinComplete?: (item: WheelItem) => void;
}

export function SpinningWheel({ items, onSpinComplete }: SpinningWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);
  const controls = useAnimation();
  const rotationRef = useRef(0);

  const spin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSelectedItem(null);

    const spins = 5; // number of full rotations
    const sliceAngle = 360 / items.length;
    const randomIndex = Math.floor(Math.random() * items.length);
    
    // Calculate the target angle to land on the center of the selected slice
    // We add 90 degrees offset because the arrow points to the right (or top, adjust accordingly)
    // Let's assume arrow is at the top (0 degrees).
    const targetAngle = spins * 360 + (items.length - randomIndex) * sliceAngle - sliceAngle / 2;

    await controls.start({
      rotate: rotationRef.current + targetAngle,
      transition: { duration: 3, ease: 'easeOut' }
    });

    rotationRef.current += targetAngle;
    setSelectedItem(items[randomIndex]);
    setIsSpinning(false);
    if (onSpinComplete) {
      onSpinComplete(items[randomIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8 w-full">
      <div className="relative w-64 h-64 md:w-80 md:h-80 select-none">
        {/* The pointer/arrow at the top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[24px] border-t-white z-10 drop-shadow-md"></div>
        
        {/* The wheel (Conic Gradient) */}
        <motion.div
           animate={controls}
           className="w-full h-full rounded-full border-8 border-white shadow-2xl absolute top-0 left-0"
           style={{
             background: `conic-gradient(${items.map((item, i) => {
               const start = (i * 100) / items.length;
               const end = ((i + 1) * 100) / items.length;
               return `${item.color} ${start}% ${end}%`;
             }).join(', ')})`
           }}
        >
           {items.map((item, index) => {
             const angle = (index * 360) / items.length + (360 / items.length) / 2;
             return (
               <div
                 key={index}
                 className="absolute inset-0 flex items-start justify-center text-white font-bold xl:text-xl md:text-lg pt-6 drop-shadow-md"
                 style={{ transform: `rotate(${angle}deg)` }}
               >
                 <span>{item.label}</span>
               </div>
             );
           })}
        </motion.div>
        
        {/* Center pivot */}
        <button 
          onClick={spin}
          disabled={isSpinning}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg z-20 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
        >
          <span className="font-black text-gray-800 text-sm">SPIN!</span>
        </button>
      </div>

      <div className="h-16 flex items-center justify-center">
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-3 rounded-full text-white font-bold text-2xl shadow-lg border-4 border-white"
            style={{ backgroundColor: selectedItem.color }}
          >
            {selectedItem.label}
          </motion.div>
        )}
      </div>
    </div>
  );
}
