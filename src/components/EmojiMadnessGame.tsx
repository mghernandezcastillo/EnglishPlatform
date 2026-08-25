import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles, Star, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EmojiMadnessGameProps {
  title?: string;
  description?: string;
  content?: string[];
  options?: string[];
  correctOptionIndex?: number;
}

const emojiRegex = /\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?)*|[\u2600-\u27BF]/gu;

const CARD_CYBER_THEMES = [
  {
    border: 'border-cyan-400',
    glow: 'shadow-[0_0_25px_rgba(6,182,212,0.45)]',
    bg: 'bg-gradient-to-b from-[#0e1d44]/90 to-[#081026]/95',
    numBg: 'bg-cyan-500 text-slate-950 shadow-cyan-400/60',
    tagColor: 'text-cyan-300',
  },
  {
    border: 'border-purple-400',
    glow: 'shadow-[0_0_25px_rgba(168,85,247,0.45)]',
    bg: 'bg-gradient-to-b from-[#1c1042]/90 to-[#0e0724]/95',
    numBg: 'bg-purple-500 text-white shadow-purple-400/60',
    tagColor: 'text-purple-300',
  },
  {
    border: 'border-pink-400',
    glow: 'shadow-[0_0_25px_rgba(244,63,94,0.45)]',
    bg: 'bg-gradient-to-b from-[#260f38]/90 to-[#14061e]/95',
    numBg: 'bg-pink-500 text-white shadow-pink-400/60',
    tagColor: 'text-pink-300',
  },
];

export function EmojiMadnessGame({
  title = 'Visual Clue Challenge',
  description = 'Teen Greetings & Casual Introductions',
  content = [],
  options = [],
  correctOptionIndex = 0,
}: EmojiMadnessGameProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const puzzleText = content[0] || '👋 ➕ 🎧 ➕ 🛹';
  const emojis = useMemo(() => {
    const matches = puzzleText.match(emojiRegex);
    return matches && matches.length > 0
      ? matches
      : puzzleText.split(/\s*➕\s*|\s+/).filter(Boolean);
  }, [puzzleText]);

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === correctOptionIndex;

  const chooseOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setRevealed(true);

    if (index === correctOptionIndex) {
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06B6D4', '#EC4899', '#A855F7', '#10B981', '#F59E0B'],
        });
      } catch {}
    }
  };

  return (
    <div className="relative flex w-full h-full flex-col justify-between p-4 sm:p-6 lg:p-8 z-10 min-h-0 overflow-hidden">
      {/* Top ambient luminous glow */}
      <div
        className="pointer-events-none absolute -top-16 left-1/3 w-[500px] h-[300px] bg-pink-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-10 w-[450px] h-[280px] bg-cyan-500/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative z-10 shrink-0 mb-3 sm:mb-4 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight drop-shadow-md">
            <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              {title.includes('/') ? title.split('/')[0].trim() : title}
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-bold text-cyan-300 tracking-wide mt-0.5">
            {description}
          </p>
        </div>

        {/* Level Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-2xl bg-[#1a0f3d]/90 border-2 border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.5)] backdrop-blur-md shrink-0">
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-white">
            LEVEL
          </span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-md">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>A</span>
          </div>
        </div>
      </div>

      {/* Top Visual Clue Cyber Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-5 my-auto max-w-4xl mx-auto w-full">
        {emojis.slice(0, 3).map((emoji, index) => {
          const theme = CARD_CYBER_THEMES[index % CARD_CYBER_THEMES.length];
          return (
            <motion.div
              key={`${emoji}-${index}`}
              initial={{ y: 20, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + index * 0.12, duration: 0.4 }}
              className={`relative flex flex-col items-center justify-center min-h-[140px] sm:min-h-[175px] lg:min-h-[195px] rounded-3xl border-2 ${theme.border} ${theme.glow} ${theme.bg} p-3 backdrop-blur-md overflow-hidden transition-all hover:scale-[1.03]`}
            >
              {/* Corner Cyber Number Badge */}
              <div
                className={`absolute top-3 left-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl font-black text-xs sm:text-sm shadow-lg ${theme.numBg}`}
              >
                {index + 1}
              </div>

              {/* Cyber decorative corner notch */}
              <div className={`absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 ${theme.border} opacity-80`} />
              <div className={`absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 ${theme.border} opacity-80`} />

              {/* Animated Floating Emoji */}
              <motion.span
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.25,
                }}
                className="text-6xl sm:text-7xl lg:text-[5.2rem] select-none filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] my-auto"
              >
                {emoji}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Interactive Option Capsules */}
      <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3 max-w-4xl mx-auto w-full mt-2">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isRight = index === correctOptionIndex;
          const showCorrect = revealed && isRight;
          const showWrong = revealed && isSelected && !isRight;
          const letter = ['A', 'B', 'C', 'D', 'E'][index] || String(index + 1);

          let btnClass =
            'group relative flex min-h-[58px] sm:min-h-[66px] lg:min-h-[72px] items-center justify-between gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border-2 px-4 sm:px-6 py-3 text-left transition-all backdrop-blur-md shadow-lg ';

          if (!revealed) {
            btnClass +=
              'border-violet-500/40 bg-[#140e36]/90 text-white hover:border-cyan-400 hover:bg-[#1f154d] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.015] active:scale-[0.99] cursor-pointer';
          } else if (showCorrect) {
            btnClass +=
              'border-emerald-300 bg-gradient-to-r from-emerald-600 to-teal-500 text-white scale-[1.02] shadow-[0_0_30px_rgba(16,185,129,0.7)] ring-4 ring-emerald-400/60';
          } else if (showWrong) {
            btnClass +=
              'border-rose-400 bg-gradient-to-r from-rose-600 to-pink-600 text-white opacity-70 shadow-lg';
          } else {
            btnClass += 'border-white/10 bg-[#120c2d]/60 text-white/40 opacity-40';
          }

          return (
            <motion.button
              key={`${option}-${index}`}
              type="button"
              disabled={isAnswered}
              onClick={() => chooseOption(index)}
              className={btnClass}
            >
              {/* Option Letter Badge */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <span
                  className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-base sm:text-xl font-black shadow-md ${
                    !revealed
                      ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-purple-500/30'
                      : showCorrect
                      ? 'bg-white/25 text-white'
                      : 'bg-white/15 text-white'
                  }`}
                >
                  {letter}
                </span>
                <span className="text-base sm:text-xl lg:text-[1.45rem] font-bold text-white leading-snug tracking-tight">
                  {option}
                </span>
              </div>

              {/* Status Icons */}
              {showCorrect && (
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white shrink-0 ml-2 drop-shadow-md" />
              )}
              {showWrong && (
                <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white shrink-0 ml-2 drop-shadow-md" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
