import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, MessageCircle, Sparkles, Target, Zap, Play, Star, BookOpen } from 'lucide-react';
import { ClassSlide, CurriculumClass } from '../types';
import { resolveHomeworkData, buildWhatsAppHomeworkMessage, getActiveStudentName } from '../lib/homeworkResolver';
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

  const handleShareWhatsApp = () => {
    let activeStudent = studentName?.trim() || getActiveStudentName();
    if (!activeStudent && typeof window !== 'undefined') {
      const entered = window.prompt('¿A qué estudiante deseas enviar esta tarea? (Opcional - escribe su nombre o presiona Aceptar):');
      if (entered && entered.trim()) {
        activeStudent = entered.trim();
        try {
          localStorage.setItem('active_student_name', activeStudent);
        } catch {}
      }
    }
    const message = buildWhatsAppHomeworkMessage(slide, cls, activeStudent);
    const encoded = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(message).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handleOpenMission = () => {
    if (!cls?.id) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    window.open(`${origin}/?mission=${cls.id}`, '_blank');
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-br from-[#12163b] via-[#1a1f52] to-[#0c0f2a] p-3 sm:p-5 text-white shadow-2xl select-text">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative z-10 shrink-0 mb-2 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow">
              Reto de la Clase
            </span>
            <span className="text-xs font-bold text-indigo-300">
              {data.dueDate || 'Próxima Clase'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
            📝 {slide.title?.includes('/') ? slide.title.split('/')[0].trim() : slide.title || 'Homework'}
          </h1>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-indigo-900/60 border border-indigo-400/30 px-3.5 py-1.5 rounded-2xl text-xs font-bold text-indigo-200">
          <Clock className="w-4 h-4 text-amber-300" />
          <span>Tiempo estimado: <strong>5 min</strong></span>
        </div>
      </div>

      {/* Main Grid: 2 Clean Sections */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-4 min-h-0 items-stretch my-1">
        
        {/* LEFT COLUMN: 3 Clean Notebook Steps (+, −, ?) */}
        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-black text-base text-white">1. Escribe 3 frases en tu cuaderno</h3>
                <p className="text-xs text-indigo-200 font-medium">Usa el vocabulario y las fórmulas que aprendimos hoy:</p>
              </div>
            </div>

            {/* 3 Step Cards */}
            <div className="flex flex-col gap-2.5">
              {data.taskSteps && data.taskSteps.length > 0 ? (
                data.taskSteps.slice(0, 3).map((step, idx) => {
                  const tagColors = [
                    'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
                    'bg-rose-500/20 text-rose-300 border-rose-400/40',
                    'bg-amber-500/20 text-amber-300 border-amber-400/40'
                  ];
                  const symbols = ['(+)', '(−)', '(?)'];

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-black/25 border border-white/10 flex flex-col gap-1 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-lg border text-[11px] font-black ${tagColors[idx % 3]}`}>
                          {symbols[idx % 3]} Paso {step.number || idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {step.instruction}
                        </span>
                      </div>
                      {step.example && (
                        <div className="text-xs text-amber-200/90 font-mono italic pl-2 border-l-2 border-amber-400/50 mt-0.5">
                          💡 Ejemplo: "{step.example}"
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-3 rounded-2xl bg-black/25 border border-white/10 text-sm font-bold text-white">
                  {data.task}
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-indigo-200">
            <span>📸 Toma una foto a tu cuaderno</span>
            <span className="text-emerald-400 font-black">✓ Envía por WhatsApp</span>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Mascot Digital Mission Hero */}
        <div className="rounded-3xl border-2 border-amber-300/50 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-600/20 p-4 sm:p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative">
              <img
                src="/images/mascot/tiger_mentor_wave.jpg"
                alt="Tigre Maven 3D"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-300 shadow-xl bg-white"
              />
              <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-yellow-400 text-slate-950 shadow">
                +150 XP
              </div>
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-amber-400/30 text-amber-300 border border-amber-300/40 text-xs font-black uppercase tracking-wider">
                2. Misión Interactiva
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1.5">
                ¡Juega tu Misión de 5 Minutos! 🚀
              </h3>
              <p className="text-xs text-slate-200 font-medium mt-1 max-w-xs">
                Practica vocabulario, arma frases y mantén tu racha de fuego activa.
              </p>
            </div>
          </div>

          {cls?.id && (
            <button
              onClick={handleOpenMission}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer border-2 border-amber-200 mt-3"
            >
              <Play className="w-5 h-5 fill-current text-slate-950" />
              <span>▶️ Abrir Misión Digital</span>
            </button>
          )}
        </div>

      </div>

      {/* Bottom Action Bar */}
      <div className="relative z-10 mt-2 pt-2 flex items-center justify-between gap-3 border-t border-white/15 shrink-0 flex-wrap">
        <div className="text-xs font-bold text-slate-300 truncate max-w-xs sm:max-w-md">
          {teacherNote || '💡 Motiva al estudiante a enviar sus 3 frases y jugar su misión.'}
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
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all border border-emerald-300/70 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>¡Completar Clase!</span>
              <Check className="w-4 h-4 stroke-[3]" />
            </button>
          )}

          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{copied ? '¡Copiado! ✅' : 'Compartir por WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
