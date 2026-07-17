import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sparkles, RotateCw } from 'lucide-react';

interface WheelItem {
  label: string;
  color: string;
  prompt?: string;
  es?: string;
}

interface SpinningWheelProps {
  items: WheelItem[];
  onSpinComplete?: (item: WheelItem) => void;
}

export function SpinningWheel({ items, onSpinComplete }: SpinningWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);
  const controls = useAnimation();
  const glowControls = useAnimation();
  const rotationRef = useRef(0);

  const spin = async () => {
    if (isSpinning || items.length === 0) return;
    setIsSpinning(true);
    setSelectedItem(null);

    const spins = 5 + Math.floor(Math.random() * 3);
    const sliceAngle = 360 / items.length;
    const randomIndex = Math.floor(Math.random() * items.length);
    const targetAngle = spins * 360 + (items.length - randomIndex) * sliceAngle - sliceAngle / 2;

    glowControls.start({
      scale: [1, 1.08, 1],
      opacity: [0.35, 0.7, 0.35],
      transition: { duration: 0.8, repeat: 3, ease: 'easeInOut' }
    });

    await controls.start({
      rotate: rotationRef.current + targetAngle,
      transition: { duration: 3.2, ease: [0.12, 0.75, 0.2, 1] }
    });

    rotationRef.current += targetAngle;
    const selected = items[randomIndex];
    setSelectedItem(selected);
    setIsSpinning(false);
    onSpinComplete?.(selected);
  };

  const selectedPrompt = selectedItem?.prompt || selectedItem?.label;

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 py-3">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 select-none shrink-0">
        <motion.div
          animate={glowControls}
          className="absolute inset-[-14px] rounded-full bg-white/25 blur-xl"
        />

        <motion.div
          animate={{ rotate: isSpinning ? 360 : 0 }}
          transition={{ duration: 1.2, repeat: isSpinning ? Infinity : 0, ease: 'linear' }}
          className="absolute inset-[-10px] rounded-full border-[10px] border-white/25 border-t-white/80"
        />

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="h-9 w-9 rotate-45 rounded-tl-md bg-white shadow-xl border border-white/80" />
        </div>

        <motion.div
          animate={controls}
          className="absolute inset-0 rounded-full border-[10px] border-white shadow-2xl overflow-hidden"
          style={{
            background: `conic-gradient(${items.map((item, i) => {
              const start = (i * 100) / items.length;
              const end = ((i + 1) * 100) / items.length;
              return `${item.color} ${start}% ${end}%`;
            }).join(', ')})`
          }}
        >
          <div className="absolute inset-[20%] rounded-full bg-white/15 border border-white/25" />
          {items.map((item, index) => {
            const sliceAngle = 360 / items.length;
            const angle = index * sliceAngle + sliceAngle / 2;
            return (
              <div
                key={`${item.label}-${index}`}
                className="absolute inset-0 flex items-start justify-center"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <span className="mt-5 max-w-[82px] rounded-full bg-black/18 px-2 py-1 text-center text-[10px] sm:text-xs font-black text-white leading-tight shadow-sm">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        <button
          onClick={spin}
          disabled={isSpinning}
          className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform flex flex-col items-center justify-center cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed border-4 border-white/70"
        >
          <RotateCw className={`w-6 h-6 text-indigo-700 ${isSpinning ? 'animate-spin' : ''}`} />
          <span className="font-black text-slate-900 text-xs mt-1">SPIN</span>
        </button>
      </div>

      <div className="w-full max-w-md min-h-[190px] flex items-center justify-center">
        <motion.div
          layout
          className="w-full rounded-3xl bg-white/92 text-slate-900 p-5 sm:p-6 shadow-2xl border border-white/80"
        >
          {!selectedItem ? (
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7" />
              </motion.div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-indigo-500">Icebreaker</p>
              <p className="mt-2 text-xl font-black">Spin and answer out loud</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">La pregunta aparecerá aquí cuando la ruleta se detenga.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-white text-xs font-black uppercase tracking-wider" style={{ backgroundColor: selectedItem.color }}>
                <Sparkles className="w-3.5 h-3.5" />
                {selectedItem.label}
              </div>
              <p className="mt-4 text-2xl sm:text-3xl font-black leading-tight">{selectedPrompt}</p>
              {selectedItem.es && (
                <p className="mt-3 text-base font-bold text-indigo-700">{selectedItem.es}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
