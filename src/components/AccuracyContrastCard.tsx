import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, RotateCw, Sparkles, HelpCircle } from 'lucide-react';
import { ClassSlide } from '../types';

interface AccuracyContrastCardProps {
  slide: ClassSlide;
}

export function AccuracyContrastCard({ slide }: AccuracyContrastCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const content = slide.content || [];

  // Parse lines: "Accurate: ...", "Correct this: ...", explanation
  let accurateText = '';
  let errorText = '';
  let tipText = '';

  content.forEach((line) => {
    if (/^accurate:\s*/i.test(line)) {
      accurateText = line.replace(/^accurate:\s*/i, '').trim();
    } else if (/^correct this:\s*/i.test(line)) {
      errorText = line.replace(/^correct this:\s*/i, '').trim();
    } else if (/^error:\s*/i.test(line)) {
      errorText = line.replace(/^error:\s*/i, '').trim();
    } else if (/^correct:\s*/i.test(line)) {
      accurateText = line.replace(/^correct:\s*/i, '').trim();
    } else {
      tipText = line;
    }
  });

  // Fallback if formatting was different
  if (!errorText && content.length >= 2) {
    errorText = content[1];
    accurateText = content[0];
  } else if (!errorText && content.length === 1) {
    errorText = content[0];
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-auto flex flex-col items-center justify-center p-2 sm:p-4">
      {/* 3D Flip Card Container */}
      <div className="w-full [perspective:1200px]">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', damping: 20, stiffness: 100 }}
          className="relative w-full min-h-[360px] sm:min-h-[420px] rounded-3xl [transform-style:preserve-3d] cursor-pointer select-none"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* FRONT: The Error / Challenge */}
          <div
            className={`absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between [backface-visibility:hidden] border-2 border-amber-400/40 bg-gradient-to-br from-slate-900/95 via-amber-950/40 to-slate-900/95 shadow-2xl backdrop-blur-xl ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>⚠️ Encuentra y corrige el error</span>
              </div>
              <div className="text-xs sm:text-sm text-amber-200/70 font-medium flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>¿Qué cambiarías?</span>
              </div>
            </div>

            {/* Main Erroneous Sentence Display */}
            <div className="my-auto py-6 text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/80 mb-3">
                Frase a corregir:
              </p>
              <div className="p-5 sm:p-7 rounded-2xl bg-black/40 border border-amber-400/30 shadow-inner">
                <p className="text-2xl sm:text-4xl md:text-5xl font-black text-amber-200 leading-tight tracking-wide">
                  "{errorText}"
                </p>
              </div>
            </div>

            {/* Interactive Flip Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
                🗣️ Discute con el profesor antes de revelar la respuesta.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                <RotateCw className="w-5 h-5" />
                <span>Revelar corrección</span>
              </button>
            </div>
          </div>

          {/* BACK: The Accurate Model & Explanation */}
          <div
            className={`absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] border-2 border-emerald-400/50 bg-gradient-to-br from-slate-900/95 via-emerald-950/40 to-slate-900/95 shadow-2xl backdrop-blur-xl ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>✅ Forma Correcta & Explicación</span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-200/70 font-medium flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>¡Excelente análisis!</span>
              </div>
            </div>

            {/* Accurate Sentence Display */}
            <div className="my-auto py-4 text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-300/80 mb-2">
                Frase correcta:
              </p>
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/50 border border-emerald-400/40 shadow-inner mb-4">
                <p className="text-2xl sm:text-4xl md:text-5xl font-black text-emerald-100 leading-tight tracking-wide">
                  "{accurateText}"
                </p>
              </div>

              {tipText && (
                <div className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-slate-200 font-medium max-w-xl">
                  💡 {tipText}
                </div>
              )}
            </div>

            {/* Flip Back Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
              <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
                🎯 Lee la frase correcta en voz alta con buena entonación.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 hover:scale-105 active:scale-95 transition-all"
              >
                <RotateCw className="w-4 h-4" />
                <span>Ocultar / Volver a preguntar</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
