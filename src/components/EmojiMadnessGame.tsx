import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Lightbulb, PartyPopper, Sparkles, XCircle } from 'lucide-react';

interface EmojiMadnessGameProps {
  content?: string[];
  options?: string[];
  correctOptionIndex?: number;
}

const emojiRegex = /\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?)*|[\u2600-\u27BF]/gu;

export function EmojiMadnessGame({ content = [], options = [], correctOptionIndex = 0 }: EmojiMadnessGameProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const puzzleText = content[0] || '🎯 ➕ 🧠 ➕ 💬';
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
    <div className="flex min-h-[420px] w-full flex-col justify-center gap-5">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/12 p-4 shadow-2xl backdrop-blur-md sm:p-6">
        <motion.div
          animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-4 top-4 text-white/25"
        >
          <Sparkles className="h-16 w-16" />
        </motion.div>

        <div className="relative z-10 mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-yellow-200">
            <Lightbulb className="h-4 w-4" />
            Decode the message
          </div>
          <div className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white/80">
            Look. Guess. Say it.
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4">
          {emojis.slice(0, 6).map((emoji, index) => (
            <motion.div
              key={`${emoji}-${index}`}
              initial={{ y: 22, opacity: 0, rotate: -8 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: index * 0.12, type: 'spring', stiffness: 220, damping: 16 }}
              className="group relative flex aspect-square items-center justify-center rounded-3xl border-2 border-white/25 bg-white text-5xl shadow-xl sm:text-7xl"
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
                className="drop-shadow-sm"
              >
                {emoji}
              </motion.span>
              <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white shadow-lg">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
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
                'flex min-h-[58px] items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-left text-base font-black shadow-xl transition-all sm:text-xl',
                !revealed && 'border-white bg-white text-slate-900 hover:bg-yellow-50',
                showCorrect && 'border-emerald-300 bg-emerald-500 text-white',
                showWrong && 'border-red-300 bg-red-500 text-white',
                revealed && !showCorrect && !showWrong && 'border-white/10 bg-white/15 text-white/50'
              ].filter(Boolean).join(' ')}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showCorrect && <CheckCircle className="h-6 w-6 shrink-0" />}
              {showWrong && <XCircle className="h-6 w-6 shrink-0" />}
            </motion.button>
          );
        })}
      </div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`rounded-2xl border px-5 py-4 font-black shadow-xl ${isCorrect ? 'border-emerald-200 bg-emerald-500 text-white' : 'border-yellow-200 bg-yellow-300 text-slate-950'}`}
        >
          <div className="flex items-center gap-3">
            <PartyPopper className="h-6 w-6 shrink-0" />
            {isCorrect ? 'Correct. Now say the full sentence out loud.' : 'Good try. Read the correct answer out loud.'}
          </div>
        </motion.div>
      )}
    </div>
  );
}
