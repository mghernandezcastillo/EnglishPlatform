import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, MessageCircle, Sparkles, Target, Zap, Play, Star, BookOpen, ExternalLink, Copy } from 'lucide-react';
import { ClassSlide, CurriculumClass } from '../types';
import { resolveHomeworkData, buildWhatsAppHomeworkMessage, getActiveStudentName, getActiveStudentId } from '../lib/homeworkResolver';
import { safeEncodeURIComponent } from '../lib/safeUrl';
import { fireClassCompletionConfetti } from '../lib/celebration';
import { missionService } from '../lib/missionService';

interface HomeworkSlideCardProps {
  slide: ClassSlide;
  cls?: CurriculumClass;
  teacherNote?: string;
  isLastSlide?: boolean;
  onComplete?: () => void;
  studentName?: string;
}

export function HomeworkSlideCard({ slide, cls, teacherNote, onComplete, studentName }: HomeworkSlideCardProps) {
  const [copied, setCopied] = useState(false);
  const data = resolveHomeworkData(slide, cls);
  const activeStudent = studentName?.trim() || getActiveStudentName();
  const whatsAppMessage = buildWhatsAppHomeworkMessage(slide, cls, activeStudent);
  const whatsAppUrl = `https://wa.me/?text=${safeEncodeURIComponent(whatsAppMessage)}`;

  const handleShareWhatsApp = (e?: React.MouseEvent) => {
    // Copy message to clipboard automatically
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(whatsAppMessage).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  const handleOpenMission = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!cls?.id) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const studentId = getActiveStudentId();
    const linkParam = studentId ? `?studentId=${studentId}&mission=${cls.id}` : `?mission=${cls.id}`;
    window.open(`${origin}/${linkParam}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-br from-[#0e1333] via-[#161d4a] to-[#0a0d24] p-4 sm:p-6 lg:p-7 text-white shadow-2xl select-text">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -top-28 -left-28 w-[450px] h-[450px] bg-indigo-600/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 w-[450px] h-[450px] bg-amber-500/20 rounded-full blur-3xl" />

      {/* Header with Huge Typography */}
      <div className="relative z-10 shrink-0 mb-3 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md">
              🎯 Reto de la Clase
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-300">
              {data.dueDate || 'Próxima Clase'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white mt-1.5 tracking-tight leading-tight drop-shadow-md">
            📝 {slide.title?.includes('/') ? slide.title.split('/')[0].trim() : slide.title || 'Homework'}
          </h1>
        </div>

        <div className="flex items-center gap-2.5 bg-indigo-900/70 border border-indigo-400/40 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black text-indigo-200 shadow-inner">
          <Clock className="w-4 h-4 text-amber-300 shrink-0" />
          <span>Tiempo estimado: <strong className="text-white">Solo 5 minutos</strong></span>
        </div>
      </div>

      {/* Main Grid: Screen-Share Optimized 2-Column Area */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-4 sm:gap-5 min-h-0 items-stretch my-2">
        
        {/* LEFT COLUMN: 3 Clean Notebook Steps (+, −, ?) with Large Legible Font */}
        <div className="rounded-3xl border border-white/20 bg-white/10 p-4 sm:p-6 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-white tracking-tight">1. En tu Cuaderno (Solo 3 Frases)</h3>
                <p className="text-xs sm:text-sm text-indigo-200 font-medium">Usa las fórmulas y vocabulario de la clase:</p>
              </div>
            </div>

            {/* 3 Step Cards */}
            <div className="flex flex-col gap-3">
              {data.taskSteps && data.taskSteps.length > 0 ? (
                data.taskSteps.slice(0, 3).map((step, idx) => {
                  const tagColors = [
                    'bg-emerald-500/25 text-emerald-300 border-emerald-400/50',
                    'bg-rose-500/25 text-rose-300 border-rose-400/50',
                    'bg-amber-500/25 text-amber-300 border-amber-400/50'
                  ];
                  const symbols = ['(+)', '(−)', '(?)'];

                  return (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 rounded-2xl bg-black/35 border border-white/15 flex flex-col gap-1.5 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
                        <span className={`px-2.5 py-0.5 rounded-lg border text-xs font-black shrink-0 ${tagColors[idx % 3]}`}>
                          {symbols[idx % 3]} Paso {step.number || idx + 1}
                        </span>
                        <span className="text-sm sm:text-base lg:text-[1.08rem] font-bold text-white leading-snug">
                          {step.instruction}
                        </span>
                      </div>
                      {step.example && (
                        <div className="text-xs sm:text-sm text-amber-200 font-mono italic pl-3 border-l-2 border-amber-400/60 mt-1">
                          💡 Ejemplo: "{step.example}"
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-4 rounded-2xl bg-black/35 border border-white/15 text-base font-bold text-white">
                  {data.task}
                </div>
              )}
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-indigo-200">
            <span>📸 Toma una foto a tu cuaderno</span>
            <span className="text-emerald-400 font-black flex items-center gap-1">
              <span>✓ Envía por WhatsApp</span>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Mascot Digital Mission Hero */}
        <div className="rounded-3xl border-2 border-amber-400/60 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-600/20 p-4 sm:p-6 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div className="flex flex-col items-center text-center gap-3.5 my-auto">
            <div className="relative">
              <img
                src="/images/mascot/tiger_mentor_wave.jpg"
                alt="Tigre Maven 3D"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-4 border-amber-300 shadow-2xl bg-white"
              />
              <div className="absolute -bottom-1.5 -right-1.5 px-3 py-1 rounded-full text-xs font-black bg-yellow-400 text-slate-950 shadow-lg border border-white">
                +150 XP 🏆
              </div>
            </div>

            <div>
              <span className="px-3.5 py-1 rounded-full bg-amber-400/30 text-amber-300 border border-amber-300/50 text-xs font-black uppercase tracking-wider">
                2. Misión Digital
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                ¡Juega tu Misión de 5 Minutos! 🚀
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1.5 max-w-xs mx-auto">
                Practica vocabulario, listening y mantén tu racha de fuego activa con el Tigre Maven.
              </p>
            </div>
          </div>

          {cls?.id && (
            <button
              onClick={handleOpenMission}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-base sm:text-lg shadow-xl shadow-orange-500/40 flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer border-2 border-amber-200 mt-3"
            >
              <Play className="w-5 h-5 fill-current text-slate-950" />
              <span>▶️ ABRIR MISIÓN DIGITAL</span>
            </button>
          )}
        </div>

      </div>

      {/* Bottom Action Bar */}
      <div className="relative z-10 mt-3 pt-3 flex items-center justify-between gap-4 border-t border-white/20 shrink-0 flex-wrap">
        <div className="text-xs sm:text-sm font-bold text-slate-300 truncate max-w-xs sm:max-w-md">
          {teacherNote || '💡 Motiva al estudiante a enviar sus 3 frases y jugar su misión interactiva.'}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onComplete && (
            <button
              type="button"
              onClick={() => {
                fireClassCompletionConfetti();
                if (cls?.id) {
                  try {
                    const profileRaw = localStorage.getItem('active_student_profile');
                    if (profileRaw) {
                      const parsed = JSON.parse(profileRaw);
                      if (parsed.id) {
                        missionService.unlockMission(parsed.id, cls.id).catch(() => {});
                      }
                    }
                  } catch {}
                }
                onComplete();
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-5 py-3 text-xs sm:text-sm lg:text-base font-black text-white shadow-xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all border border-emerald-300/70 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>¡Completar Clase!</span>
              <Check className="w-4 h-4 stroke-[3]" />
            </button>
          )}

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-5 py-3 text-xs sm:text-sm lg:text-base font-black text-white shadow-xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-emerald-300/60 no-underline"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{copied ? '¡Copiado & Abriendo! ✅' : 'Compartir por WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
