import { motion } from 'motion/react';

interface BrandWordmarkProps {
  name: string;
  subtitle?: string;
  compact?: boolean;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function BrandWordmark({
  name,
  subtitle,
  compact = false,
  centered = false,
  light = false,
  className = '',
}: BrandWordmarkProps) {
  const words = name.trim().split(/\s+/);
  const baseTitleClass = compact
    ? 'text-[1.35rem] sm:text-[1.6rem] md:text-[1.9rem]'
    : 'text-[2.4rem] sm:text-[3.3rem] md:text-[4.25rem]';
  const subtitleClass = compact
    ? 'text-[0.72rem] sm:text-xs'
    : 'text-sm sm:text-base md:text-lg';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative inline-flex max-w-full flex-col"
      >
        <motion.div
          aria-hidden="true"
          className={`absolute inset-x-[8%] top-[56%] h-[34%] rounded-full blur-2xl ${
            light ? 'bg-cyan-300/45' : 'bg-indigo-500/30'
          }`}
          animate={{
            opacity: [0.3, 0.75, 0.3],
            scale: [0.96, 1.03, 0.96],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative">
          <div
            className={`absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent ${
              compact ? 'opacity-70' : 'opacity-90'
            }`}
          />
          <h1
            className={`relative flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 font-black uppercase leading-[0.9] tracking-[0.08em] ${
              centered ? 'justify-center' : ''
            } ${baseTitleClass}`}
          >
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.48, ease: 'easeOut' }}
                className="relative inline-flex"
              >
                <span
                  className={`absolute inset-0 translate-y-[0.08em] blur-[10px] ${
                    light ? 'text-cyan-200/60' : 'text-indigo-950/30'
                  }`}
                >
                  {word}
                </span>
                <span
                  className={`relative bg-clip-text text-transparent ${
                    light
                      ? 'bg-gradient-to-r from-white via-cyan-100 to-fuchsia-100'
                      : 'bg-gradient-to-r from-indigo-950 via-blue-700 to-cyan-500'
                  }`}
                >
                  {word}
                </span>
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          aria-hidden="true"
          className={`mt-2 h-1 rounded-full ${
            compact ? 'w-28 sm:w-36' : 'w-40 sm:w-56 md:w-72'
          } ${centered ? 'mx-auto' : ''} ${
            light
              ? 'bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300'
              : 'bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500'
          }`}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {subtitle ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className={`mt-3 font-semibold tracking-[0.22em] uppercase ${
              centered ? 'mx-auto' : ''
            } ${subtitleClass} ${light ? 'text-white/80' : 'text-slate-500'}`}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>
    </div>
  );
}
