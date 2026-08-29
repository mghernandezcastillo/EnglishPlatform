import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Lightbulb, MessageCircle, Sparkles, Target } from 'lucide-react';
import { ClassSlide, CurriculumClass } from '../types';
import { resolveHomeworkData } from '../lib/homeworkResolver';
import { fireClassCompletionConfetti } from '../lib/celebration';

interface HomeworkSlideCardProps {
  slide: ClassSlide;
  cls?: CurriculumClass;
  teacherNote?: string;
  isLastSlide?: boolean;
  onComplete?: () => void;
}

export function HomeworkSlideCard({ slide, cls, teacherNote, isLastSlide, onComplete }: HomeworkSlideCardProps) {
  const [copied, setCopied] = useState(false);
  const data = resolveHomeworkData(slide, cls);

  const handleShareWhatsApp = () => {
    if (!data.whatsappMessage) return;
    const encoded = encodeURIComponent(data.whatsappMessage);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Safe escape for regular expressions
  const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Helper to render task text with highlighted keywords safely
  const renderHighlightedTask = (text: string, highlights: string[] = []) => {
    if (!highlights || highlights.length === 0) return text;

    try {
      const validHighlights = highlights.filter(Boolean).map(escapeRegExp);
      if (validHighlights.length === 0) return text;

      const regex = new RegExp(`(${validHighlights.join('|')})`, 'gi');
      const parts = text.split(regex);

      return parts.map((part, index) => {
        const isMatch = highlights.some((h) => h && h.toLowerCase() === part.toLowerCase());
        if (isMatch) {
          return (
            <span
              key={index}
              className="font-black text-amber-300 bg-amber-400/25 px-2 py-0.5 rounded-xl border border-amber-300/40 inline-block my-0.5"
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      });
    } catch {
      return text;
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-purple-400/40 bg-gradient-to-br from-[#3b0a99] via-[#4d0ebb] to-[#250468] p-3 sm:p-4.5 lg:p-5 text-white shadow-2xl">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[320px] bg-fuchsia-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[320px] bg-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative z-10 shrink-0 mb-1 sm:mb-2">
        <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black tracking-tight leading-tight flex items-center gap-2">
          <span>📝</span>
          <span>{slide.title?.includes('/') ? slide.title.split('/')[0].trim() : slide.title || 'Homework'}</span>
          <span className="text-white/40 mx-1.5 font-normal">/</span>
          <span className="text-purple-200">{slide.title?.includes('/') ? slide.title.split('/')[1].trim() : 'Tarea'}</span>
        </h1>
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-purple-200/80 mt-0.5">
          {slide.description || 'Homework'}
        </p>
      </div>

      {/* Main Content Grid (Left: 56%, Right: 44%) */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.22fr_0.98fr] gap-3 sm:gap-4 min-h-0 items-stretch">
        {/* LEFT COLUMN: Task (with Tips) & Example */}
        <div className="flex flex-col justify-between gap-2.5 sm:gap-3 min-h-0">
          {/* Card 1: Your Task + Tips */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/12 p-3 sm:p-4 backdrop-blur-md shadow-lg flex flex-col justify-between gap-2.5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-pink-300">
                  Your task
                </span>
              </div>

              {/* Render Structured Steps if available, or fallback to paragraph */}
              {data.taskSteps && data.taskSteps.length > 0 ? (
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {data.taskSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl sm:rounded-2xl bg-white/15 border border-white/20 p-2 sm:p-2.5 backdrop-blur-sm shadow-sm"
                    >
                      <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white font-black text-xs sm:text-sm shadow-md">
                        {step.number || idx + 1}
                      </span>
                      <div className="flex-1 text-xs sm:text-sm lg:text-[1.05rem] font-bold text-white leading-snug">
                        <span>{renderHighlightedTask(step.instruction, data.taskHighlights)}</span>
                        {step.example && (
                          <div className="mt-1 inline-block bg-amber-400/25 border border-amber-300/40 text-amber-200 px-2 py-0.5 rounded-lg text-xs sm:text-sm font-black italic">
                            ✨ ej: '{step.example}'
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-base sm:text-lg lg:text-[1.25rem] font-bold text-white leading-snug">
                  {renderHighlightedTask(data.task, data.taskHighlights)}
                </p>
              )}
            </div>

            {/* Integrated Tips Strip */}
            {data.tips && data.tips.length > 0 && (
              <div className="flex items-center gap-2.5 rounded-xl sm:rounded-2xl bg-black/35 border border-amber-300/35 px-3 py-1.5 text-xs sm:text-sm text-white/95">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-sm">
                  <Lightbulb className="h-3.5 w-3.5 fill-current" />
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 font-bold">
                  <span className="text-amber-300 uppercase tracking-wider text-[11px] font-black">Tips:</span>
                  {data.tips.map((tip, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-purple-100">
                      <span className="text-emerald-400 font-black text-xs">✓</span>
                      <span>{tip}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Example (X lines) Notebook Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white p-3 sm:p-4 text-slate-950 shadow-xl flex flex-col justify-between">
            {/* Sticky badge */}
            <div className="absolute -top-3 right-3.5 z-20 inline-flex rotate-3 items-center gap-1 rounded-xl bg-amber-400 border-2 border-amber-500 px-3 py-0.5 text-xs sm:text-sm font-black text-slate-950 shadow-md">
              <span>{data.badgeText || `${data.exampleLines.length} lines!`}</span>
            </div>

            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500">
                Example ({data.exampleLines.length} lines)
              </span>
            </div>

            {/* Example Lines */}
            <div className="flex flex-col gap-1.5 sm:gap-2 my-auto">
              {data.exampleLines.map((line, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl sm:rounded-2xl border border-slate-100 bg-[#f8faff] px-3.5 py-1.5 sm:py-2 text-sm sm:text-base lg:text-[1.1rem] font-bold text-slate-900 shadow-sm"
                >
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-xs sm:text-sm font-black text-white shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="italic leading-tight">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Student Photo & What to include */}
        <div className="flex flex-col justify-between gap-2.5 sm:gap-3 min-h-0">
          {/* Top Image Frame */}
          <div className="relative flex-1 min-h-[140px] rounded-2xl sm:rounded-3xl overflow-hidden border-[3px] border-white/40 shadow-2xl bg-slate-900">
            {/* Top Left Star Badge */}
            <div className="absolute top-2.5 left-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-yellow-300 border-2 border-purple-300 shadow-lg text-base select-none">
              ⭐
            </div>

            {/* Bottom Right Due Date Pill */}
            <div className="absolute bottom-2.5 right-2.5 z-20 inline-flex items-center gap-1.5 rounded-xl bg-white/95 border border-slate-200 px-3 py-1 text-xs sm:text-sm font-bold text-slate-800 shadow-lg backdrop-blur-sm">
              <Clock className="h-4 w-4 text-purple-600" />
              <span className="text-[11px] uppercase text-slate-500 font-black">Due:</span>
              <span className="font-extrabold text-slate-900">{data.dueDate || 'Next Class'}</span>
            </div>

            <img
              src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-21.jpg'}
              alt={slide.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('teens-basic-zero-class-01/slide-21.jpg')) {
                  target.src = '/images/teens-basic-zero-class-01/slide-21.jpg';
                }
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Card: What to include */}
          <div className="shrink-0 rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white p-3 sm:p-4 text-slate-950 shadow-xl flex flex-col justify-between">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700">
                What to include
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {data.whatToInclude.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl sm:rounded-2xl border border-slate-100 bg-[#f8faff] px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[1.05rem] font-extrabold text-slate-900 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700 text-base select-none">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-2.5 pt-2.5 flex items-center justify-between gap-3 border-t border-white/20 shrink-0">
        <div className="inline-flex items-center gap-2 rounded-xl sm:rounded-2xl bg-black/30 border border-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white/90 min-w-0">
          <span className="text-amber-300 font-black uppercase tracking-wider text-[11px] sm:text-xs shrink-0">
            📝 NOTA:
          </span>
          <span className="truncate">{teacherNote || 'Asignar tarea y motivar al estudiante.'}</span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {onComplete && (
            <button
              type="button"
              onClick={() => {
                fireClassCompletionConfetti();
                onComplete();
              }}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-black text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all border border-emerald-300/70 ring-2 ring-emerald-400/30 cursor-pointer"
              title="Marcar clase como completada"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span>¡Completar Clase!</span>
              <Check className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3]" />
            </button>
          )}

          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-xl sm:rounded-2xl bg-emerald-500 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
            <span>{copied ? '¡Copiado! ✅' : 'Compartir'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
