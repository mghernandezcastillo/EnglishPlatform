import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Lightbulb, MessageCircle, Sparkles, Target } from 'lucide-react';
import { ClassSlide, CurriculumClass } from '../types';
import { resolveHomeworkData } from '../lib/homeworkResolver';

interface HomeworkSlideCardProps {
  slide: ClassSlide;
  cls?: CurriculumClass;
  teacherNote?: string;
}

export function HomeworkSlideCard({ slide, cls, teacherNote }: HomeworkSlideCardProps) {
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

  // Helper to render task text with highlighted keywords
  const renderHighlightedTask = (text: string, highlights: string[] = []) => {
    if (!highlights || highlights.length === 0) return text;

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
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
  };

  return (
    <div className="relative flex h-full min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-purple-400/40 bg-gradient-to-br from-[#3b0a99] via-[#4d0ebb] to-[#250468] p-3.5 sm:p-5 lg:p-6 text-white shadow-2xl">
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
      <div className="relative z-10 shrink-0 mb-2 sm:mb-3">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-black tracking-tight leading-tight flex items-center gap-2">
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
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.22fr_0.98fr] gap-3.5 sm:gap-4.5 min-h-0 items-stretch">
        {/* LEFT COLUMN: Task, Example, Tips */}
        <div className="flex flex-col justify-between gap-3 sm:gap-3.5 min-h-0">
          {/* Card 1: Your Task */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/12 p-3.5 sm:p-4.5 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md">
                <Target className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="text-sm sm:text-base font-black uppercase tracking-wider text-pink-300">
                Your task
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-white leading-snug">
              {renderHighlightedTask(data.task, data.taskHighlights)}
            </p>
          </div>

          {/* Card 2: Example (3 lines) Notebook Card */}
          <div className="relative flex-1 rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white p-3.5 sm:p-4.5 text-slate-950 shadow-xl flex flex-col justify-between">
            {/* Sticky badge */}
            <div className="absolute -top-3.5 right-4 z-20 inline-flex rotate-3 items-center gap-1 rounded-xl bg-amber-400 border-2 border-amber-500 px-3.5 py-1 text-xs sm:text-sm font-black text-slate-950 shadow-md">
              <span>{data.badgeText || '3 lines!'}</span>
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500">
                Example (3 lines)
              </span>
            </div>

            {/* Example Lines */}
            <div className="flex flex-col gap-2 my-auto">
              {data.exampleLines.map((line, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#f8faff] px-3.5 py-2.5 sm:py-3 text-base sm:text-lg lg:text-[1.15rem] font-bold text-slate-900 shadow-sm"
                >
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-xs sm:text-sm font-black text-white shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="italic leading-tight">{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Tips Strip */}
          <div className="flex items-center justify-between gap-3 rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 p-3 sm:p-3.5 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-md">
                <Lightbulb className="h-5 w-5 fill-current" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-300">
                  Tips
                </div>
                <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-bold text-white/95 leading-tight">
                  {data.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-black shrink-0">✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Pill Badge */}
            <div className="shrink-0 hidden sm:flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border border-purple-300/40 px-3.5 py-1.5 text-center text-xs font-black text-white shadow-md">
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider">
                Be <Sparkles className="h-3 w-3 text-yellow-300" />
              </span>
              <span className="text-xs sm:text-sm font-black">Yourself!</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Student Photo & What to include */}
        <div className="flex flex-col justify-between gap-3 sm:gap-3.5 min-h-0">
          {/* Top Image Frame */}
          <div className="relative flex-1 min-h-[170px] sm:min-h-[190px] rounded-2xl sm:rounded-3xl overflow-hidden border-[3px] border-white/40 shadow-2xl bg-slate-900">
            {/* Top Left Star Badge */}
            <div className="absolute top-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-yellow-300 border-2 border-purple-300 shadow-lg text-lg select-none">
              ⭐
            </div>

            {/* Bottom Right Due Date Pill */}
            <div className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-xl bg-white/95 border border-slate-200 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 shadow-lg backdrop-blur-sm">
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
          <div className="rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white p-3.5 sm:p-4.5 text-slate-950 shadow-xl flex flex-col justify-between">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700">
                What to include
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {data.whatToInclude.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8faff] px-4 py-2.5 sm:py-3 text-sm sm:text-base lg:text-[1.1rem] font-extrabold text-slate-900 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700 text-base select-none">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-2.5 pt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-white/20">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-black/30 border border-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white/90">
          <span className="text-amber-300 font-black uppercase tracking-wider text-[11px] sm:text-xs">
            📝 NOTA PARA EL PROFE:
          </span>
          <span>{teacherNote || 'Asignar tarea y motivar al estudiante.'}</span>
        </div>

        <button
          type="button"
          onClick={handleShareWhatsApp}
          className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
          <span>{copied ? '¡Copiado para WhatsApp! ✅' : 'Compartir por WhatsApp'}</span>
        </button>
      </div>
    </div>
  );
}
