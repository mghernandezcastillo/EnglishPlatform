import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Eye, PartyPopper, Shapes, XCircle } from 'lucide-react';

interface EmojiMadnessGameProps {
  content?: string[];
  options?: string[];
  correctOptionIndex?: number;
}

const emojiRegex = /\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?)*|[\u2600-\u27BF]/gu;

export function EmojiMadnessGame({ content = [], options = [], correctOptionIndex = 0 }: EmojiMadnessGameProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const puzzleText = content[0] || '🎯 ➕ 💬 ➕ ✅';
  const emojis = useMemo(() => {
    const matches = puzzleText.match(emojiRegex);
    return matches && matches.length > 0 ? matches : puzzleText.split(/\s*➕\s*|\s+/).filter(Boolean);
  }, [puzzleText]);

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === correctOptionIndex;

  const chooseOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setRevealed(true);
  };

  return (
    <div className="flex w-full flex-col justify-center gap-3">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/12 p-3 shadow-2xl backdrop-blur-md sm:p-4">
        <motion.div
          animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-3 top-3 text-white/20"
        >
          <Shapes className="h-12 w-12" />
        </motion.div>

        <div className="relative z-10 mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-yellow-200">
            <Eye className="h-3.5 w-3.5" />
            Visual clue challenge
          </div>
          <div className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white/80">
            Read the clues. Choose the best sentence.
          </div>
        </div>

        <div className={`relative z-10 grid gap-2.5 sm:gap-3 ${emojis.length <= 4 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {emojis.slice(0, 6).map((emoji, index) => (
            <motion.div
              key={`${emoji}-${index}`}
              initial={{ y: 22, opacity: 0, rotate: -8 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: index * 0.12, type: 'spring', stiffness: 220, damping: 16 }}
              className="group relative flex min-h-[108px] items-center justify-center rounded-[1.4rem] border border-white/25 bg-white px-2 py-3 text-6xl shadow-xl sm:min-h-[132px] sm:text-8xl"
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
                className="drop-shadow-sm"
              >
                {emoji}
              </motion.span>
              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[11px] font-black text-white shadow-lg">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isRight = index === correctOptionIndex;
          const showCorrect = revealed && isRight;
          const showWrong = revealed && isSelected && !isRight;

          return (
            <motion.button
              key={`${option}-${index}`}
              type="button"
              disabled={isAnswered}
              onClick={() => chooseOption(index)}
              whileHover={!isAnswered ? { scale: 1.015, x: 6 } : undefined}
              whileTap={!isAnswered ? { scale: 0.98 } : undefined}
              className={[
                'flex min-h-[60px] sm:min-h-[72px] items-center justify-between gap-3 sm:gap-4 rounded-2xl border-2 px-4 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-2xl lg:text-[1.75rem] font-black shadow-xl transition-all',
                !revealed && 'border-white bg-white text-slate-900 hover:bg-yellow-50 active:scale-[0.99] cursor-pointer',
                showCorrect && 'border-emerald-300 bg-emerald-500 text-white scale-[1.02] shadow-2xl shadow-emerald-500/40',
                showWrong && 'border-rose-300 bg-rose-500 text-white opacity-60',
                revealed && !showCorrect && !showWrong && 'border-white/10 bg-white/15 text-white/50'
              ].filter(Boolean).join(' ')}
            >
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-black/10 text-base sm:text-xl font-black">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 leading-snug">{option}</span>
              {showCorrect && <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 ml-2" />}
              {showWrong && <XCircle className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 ml-2" />}
            </motion.button>
          );
        })}
      </div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`rounded-xl border px-4 py-3 text-sm font-black shadow-xl sm:text-base ${isCorrect ? 'border-emerald-200 bg-emerald-500 text-white' : 'border-yellow-200 bg-yellow-300 text-slate-950'}`}
        >
          <div className="flex items-center gap-3">
            <PartyPopper className="h-5 w-5 shrink-0" />
            {isCorrect ? 'Correct. Say the full sentence clearly.' : 'Read the correct sentence aloud and try again.'}
          </div>
        </motion.div>
      )}
    </div>
  );
}
