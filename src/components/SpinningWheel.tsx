import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Sparkles, RotateCw, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface WheelItem {
  label: string;
  color: string;
  prompt?: string;
  es?: string;
}

interface SpinningWheelProps {
  items: WheelItem[];
  onSpinComplete?: (item: WheelItem) => void;
  mode?: 'warmup' | 'review';
  title?: string;
  subtitle?: string;
}

export function SpinningWheel({
  items,
  onSpinComplete,
  mode = 'warmup',
  title = 'Teen Warm-up Wheel / Ruleta de Calentamiento',
  subtitle = 'Spin and answer one easy question.',
}: SpinningWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);
  const [points, setPoints] = useState(1250);
  const [showPointsBonus, setShowPointsBonus] = useState(false);
  const [bulbPhase, setBulbPhase] = useState(false);

  const controls = useAnimation();
  const rotationRef = useRef(0);
  const remainingIndicesRef = useRef<number[]>([]);
  const lastSelectedIndexRef = useRef<number | null>(null);

  const itemsSignature = items
    .map((item) => `${item.label}|${item.color}|${item.prompt || ''}|${item.es || ''}`)
    .join('||');

  // Bulbs chase animation toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setBulbPhase((p) => !p);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    remainingIndicesRef.current = items.map((_, index) => index);
    lastSelectedIndexRef.current = null;
    setSelectedItem(null);
  }, [itemsSignature]);

  const getNextIndex = () => {
    if (remainingIndicesRef.current.length === 0) {
      remainingIndicesRef.current = items
        .map((_, index) => index)
        .filter((index) => items.length === 1 || index !== lastSelectedIndexRef.current);
    }

    const poolIndex = Math.floor(Math.random() * remainingIndicesRef.current.length);
    const [nextIndex] = remainingIndicesRef.current.splice(poolIndex, 1);
    lastSelectedIndexRef.current = nextIndex;
    return nextIndex;
  };

  const spin = async () => {
    if (isSpinning || items.length === 0) return;
    setIsSpinning(true);

    const spins = 5 + Math.floor(Math.random() * 3);
    const sliceAngle = 360 / items.length;
    const randomIndex = getNextIndex();
    const targetAngle = spins * 360 + (items.length - randomIndex) * sliceAngle - sliceAngle / 2;

    await controls.start({
      rotate: rotationRef.current + targetAngle,
      transition: { duration: 3.4, ease: [0.15, 0.85, 0.25, 1] },
    });

    rotationRef.current += targetAngle;
    const selected = items[randomIndex];
    setSelectedItem(selected);
    setIsSpinning(false);

    // Award score points
    setPoints((p) => p + 50);
    setShowPointsBonus(true);
    setTimeout(() => setShowPointsBonus(false), 2000);

    // Confetti celebration burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.65, y: 0.55 },
        colors: ['#FFE066', '#FFD700', '#F59E0B', '#38BDF8', '#EC4899'],
      });
    } catch {
      /* empty */
    }

    onSpinComplete?.(selected);
  };

  const selectedPrompt = selectedItem?.prompt || selectedItem?.label;

  // Generate 16 circular bulbs around wheel border
  const wheelBulbs = useMemo(() => {
    const total = 18;
    return Array.from({ length: total }).map((_, i) => {
      const angle = (i * 360) / total;
      const rad = (angle * Math.PI) / 180;
      // Wheel radius ~158px (wheel size ~340px)
      const r = 160;
      const cx = 175 + r * Math.sin(rad);
      const cy = 175 - r * Math.cos(rad);
      return { id: i, cx, cy, active: i % 2 === (bulbPhase ? 0 : 1) };
    });
  }, [bulbPhase]);

  // Generate bulbs for the Marquee Board perimeter
  const marqueeBulbs = useMemo(() => {
    const topBottomCount = 14;
    const sideCount = 7;
    const bulbs: { id: string; active: boolean; style: React.CSSProperties }[] = [];

    // Top
    for (let i = 0; i < topBottomCount; i++) {
      bulbs.push({
        id: `t-${i}`,
        active: i % 2 === (bulbPhase ? 0 : 1),
        style: { top: '6px', left: `${(i / (topBottomCount - 1)) * 94 + 3}%` },
      });
    }
    // Bottom
    for (let i = 0; i < topBottomCount; i++) {
      bulbs.push({
        id: `b-${i}`,
        active: i % 2 === (bulbPhase ? 1 : 0),
        style: { bottom: '6px', left: `${(i / (topBottomCount - 1)) * 94 + 3}%` },
      });
    }
    // Left
    for (let i = 1; i < sideCount - 1; i++) {
      bulbs.push({
        id: `l-${i}`,
        active: i % 2 === (bulbPhase ? 0 : 1),
        style: { left: '8px', top: `${(i / (sideCount - 1)) * 88 + 6}%` },
      });
    }
    // Right
    for (let i = 1; i < sideCount - 1; i++) {
      bulbs.push({
        id: `r-${i}`,
        active: i % 2 === (bulbPhase ? 1 : 0),
        style: { right: '8px', top: `${(i / (sideCount - 1)) * 88 + 6}%` },
      });
    }
    return bulbs;
  }, [bulbPhase]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 overflow-hidden select-none bg-gradient-to-br from-[#121c54] via-[#1b2266] to-[#0e143c]">
      {/* ── Spotlights & Stage Atmosphere ─────────────────────────────────── */}
      <div
        className="pointer-events-none absolute -top-10 left-[10%] w-96 h-[520px] bg-gradient-to-b from-cyan-300/35 via-blue-500/20 to-transparent blur-2xl transform -rotate-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 right-[15%] w-[420px] h-[560px] bg-gradient-to-b from-fuchsia-300/35 via-purple-500/20 to-transparent blur-2xl transform rotate-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-[5%] w-96 h-96 bg-amber-400/20 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/18 blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* ── Top Header & Scoreboard ───────────────────────────────────────── */}
      <div className="relative z-10 flex items-start justify-between gap-4 shrink-0">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white tracking-tight leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-bold text-amber-300 mt-0.5 drop-shadow">
            {subtitle}
          </p>
        </div>

        {/* Gamified Retro Scoreboard */}
        <div className="relative shrink-0">
          <div className="relative bg-gradient-to-b from-[#1c245c] to-[#121844] border-2 border-amber-400 rounded-2xl px-5 py-2.5 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex flex-col items-center">
            {/* Top tiny label */}
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-amber-300 uppercase">
              CLASS POINTS
            </span>
            {/* Digital LED number */}
            <div className="flex items-center gap-1.5 font-mono text-2xl sm:text-3xl font-black text-amber-300 tracking-wider drop-shadow-[0_0_10px_rgba(252,211,77,0.9)]">
              <span>{points}</span>
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
            </div>

            {/* +50 Floating points bonus notification */}
            {showPointsBonus && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: 1, y: -28, scale: 1.15 }}
                exit={{ opacity: 0 }}
                className="absolute -top-3 right-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full shadow-lg shadow-amber-400/60"
              >
                +50 ⭐
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Stage Area: Wheel + Billboard ────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 my-2 min-h-0">
        
        {/* ══ LEFT: 3D Casino Golden Wheel with Podium ═══════════════════════ */}
        <div className="relative flex flex-col items-center justify-center shrink-0">
          
          {/* Wheel wrapper (350x350) */}
          <div className="relative w-[340px] h-[340px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
            
            {/* Golden Casino Rim with Bulbs (SVG background) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 350 350">
              <defs>
                <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF1A8" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#996515" />
                  <stop offset="100%" stopColor="#FFE57F" />
                </linearGradient>
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer Golden Metallic Rim */}
              <circle
                cx="175"
                cy="175"
                r="165"
                fill="none"
                stroke="url(#goldRim)"
                strokeWidth="16"
                filter="url(#goldGlow)"
              />
              <circle
                cx="175"
                cy="175"
                r="156"
                fill="none"
                stroke="#3D2806"
                strokeWidth="2"
              />

              {/* Glowing Marquee Bulbs around the Wheel */}
              {wheelBulbs.map((b) => (
                <g key={b.id}>
                  <circle
                    cx={b.cx}
                    cy={b.cy}
                    r={b.active ? '5' : '4'}
                    fill={b.active ? '#FFF59D' : '#F59E0B'}
                    filter={b.active ? 'url(#goldGlow)' : undefined}
                  />
                  {b.active && (
                    <circle
                      cx={b.cx}
                      cy={b.cy}
                      r="8"
                      fill="#FFF59D"
                      opacity="0.35"
                    />
                  )}
                </g>
              ))}
            </svg>

            {/* Top Golden Pointer */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
              <div className="w-9 h-11 bg-gradient-to-b from-[#FFF59D] via-[#F59E0B] to-[#996515] rounded-b-md shadow-2xl border-2 border-amber-200 clip-pointer flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_6px_white]" />
              </div>
            </div>

            {/* Inner Rotating Colored Slices */}
            <motion.div
              animate={controls}
              className="absolute inset-[18px] rounded-full shadow-inner overflow-hidden z-10"
              style={{
                background: `conic-gradient(${items
                  .map((item, i) => {
                    const start = (i * 100) / items.length;
                    const end = ((i + 1) * 100) / items.length;
                    return `${item.color} ${start}% ${end}%`;
                  })
                  .join(', ')})`,
              }}
            >
              {/* Slice Divider Lines & Labels */}
              {items.map((item, index) => {
                const sliceAngle = 360 / items.length;
                const angle = index * sliceAngle + sliceAngle / 2;
                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="absolute inset-0 flex items-start justify-center"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <span className="mt-5 max-w-[85px] px-2 py-0.5 text-center text-sm font-black text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Center Golden 3D SPIN Button */}
            <button
              onClick={spin}
              disabled={isSpinning}
              className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-22 h-22 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#E5A93C] to-[#8C5812] shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:scale-108 active:scale-95 transition-all flex flex-col items-center justify-center cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed border-4 border-amber-200"
            >
              <div className="w-17 h-17 rounded-full bg-gradient-to-b from-[#FFD54F] to-[#FFA000] border border-amber-100/60 flex flex-col items-center justify-center shadow-inner">
                <RotateCw
                  className={`w-5 h-5 text-slate-900 ${isSpinning ? 'animate-spin' : ''}`}
                />
                <span className="font-black text-slate-950 text-xs tracking-wider mt-0.5 font-mono">
                  SPIN
                </span>
              </div>
            </button>
          </div>

          {/* Glowing Blue Neon Pedestal Base */}
          <div className="relative -mt-5 w-68 h-9 flex items-center justify-center">
            {/* Top ring */}
            <div className="absolute top-0 w-56 h-5 rounded-[100%] border-2 border-cyan-300 bg-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.85)]" />
            {/* Lower ring */}
            <div className="absolute bottom-0 w-64 h-6 rounded-[100%] border-2 border-blue-400 bg-blue-600/30 shadow-[0_0_30px_rgba(59,130,246,0.9)]" />
          </div>
        </div>

        {/* ══ RIGHT: Game Show Marquee Question Billboard ════════════════════ */}
        <div className="flex-1 w-full h-full min-h-[300px] flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full min-h-[290px] rounded-3xl bg-gradient-to-b from-[#182368] via-[#1d2260] to-[#121648] border-[4px] border-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.45),0_0_90px_rgba(99,102,241,0.35)] p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Inner Atmospheric Backdrop Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.3),_transparent_75%)]" />
            <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl" />
            
            {/* Marquee Bulbs around the Frame Perimeter */}
            {marqueeBulbs.map((b) => (
              <div
                key={b.id}
                style={b.style}
                className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                  b.active
                    ? 'bg-amber-200 shadow-[0_0_12px_#fde047]'
                    : 'bg-amber-500/80 shadow-[0_0_3px_#d97706]'
                }`}
              />
            ))}

            {/* Top Pill Badge: QUESTION */}
            <div className="inline-flex items-center gap-1.5 px-6 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest shadow-md shadow-amber-400/50 mb-4 z-10 border border-amber-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>QUESTION</span>
            </div>

            {/* Content inside Marquee */}
            {!selectedItem ? (
              <div className="flex flex-col items-center justify-center my-auto z-10 px-4">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-4xl sm:text-5xl mb-3 drop-shadow"
                >
                  🎯
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                  Spin the wheel to get your question!
                </h2>
                <p className="text-base sm:text-xl font-extrabold text-amber-300 mt-2 drop-shadow">
                  ¡Toca <span className="underline decoration-amber-400 decoration-2">SPIN</span> para girar la ruleta!
                </p>
              </div>
            ) : (
              <motion.div
                key={selectedPrompt}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="flex flex-col items-center justify-center my-auto z-10 px-3 max-w-xl"
              >
                {/* Selected slice badge */}
                <span
                  className="px-4 py-1 rounded-full text-white text-xs font-black uppercase tracking-wider mb-3 shadow-lg border border-white/30"
                  style={{ backgroundColor: selectedItem.color }}
                >
                  {selectedItem.label}
                </span>

                {/* English Big Question */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-tight tracking-tight drop-shadow-lg">
                  {selectedPrompt}
                </h2>

                {/* Spanish Translation */}
                {selectedItem.es && (
                  <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-black text-amber-300 mt-3 drop-shadow leading-snug">
                    {selectedItem.es}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
