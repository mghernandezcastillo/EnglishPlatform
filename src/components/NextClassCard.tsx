import { CalendarDays, Clock3, ExternalLink, UserRound, Video } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { studentAgendaService, type StudentNextClass } from '../features/agenda/studentAgendaService';

interface NextClassCardProps {
  studentId?: string | null;
}

const WEEKDAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function dateParts(value: string) {
  const normalized = value.replace(' ', 'T');
  const [datePart, timePart = '00:00'] = normalized.split('T');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute] = timePart.slice(0, 5).split(':').map(Number);
  return { year, month, day, hour, minute };
}

function classDateLabel(value: string) {
  const { year, month, day } = dateParts(value);
  const weekday = WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  return `${weekday}, ${day} de ${MONTHS[month - 1]}`;
}

function classTimeLabel(value: string) {
  const { hour, minute } = dateParts(value);
  const suffix = hour >= 12 ? 'p. m.' : 'a. m.';
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${suffix}`;
}

function durationLabel(startsAt: string, endsAt: string) {
  const start = dateParts(startsAt);
  const end = dateParts(endsAt);
  const minutes = (end.hour * 60 + end.minute) - (start.hour * 60 + start.minute);
  if (minutes === 60) return '1 hora';
  if (minutes > 60 && minutes % 60 === 0) return `${minutes / 60} horas`;
  return `${minutes} min`;
}

function safeMeetingUrl(value: string | null) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

export function NextClassCard({ studentId }: NextClassCardProps) {
  const [nextClass, setNextClass] = useState<StudentNextClass | null>(null);
  const [loading, setLoading] = useState(Boolean(studentId));
  const [failed, setFailed] = useState(false);

  const loadNextClass = useCallback(async () => {
    if (!studentId) {
      setNextClass(null);
      setLoading(false);
      return;
    }

    try {
      const result = await studentAgendaService.getNextClass(studentId);
      setNextClass(result);
      setFailed(false);
    } catch (error) {
      console.warn('No fue posible cargar la próxima clase del alumno.', error);
      setNextClass(null);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, [studentId]);

  useEffect(() => {
    setLoading(Boolean(studentId));
    loadNextClass();
    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') loadNextClass();
    };
    const timer = window.setInterval(refreshWhenVisible, 60000);
    window.addEventListener('focus', refreshWhenVisible);
    document.addEventListener('visibilitychange', refreshWhenVisible);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', refreshWhenVisible);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, [studentId, loadNextClass]);

  if (!studentId) return null;

  if (loading) {
    return (
      <div className="mb-6 min-h-28 animate-pulse rounded-3xl bg-gradient-to-r from-indigo-100 via-violet-100 to-cyan-100" aria-label="Cargando próxima clase" />
    );
  }

  if (failed) {
    return (
      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold text-amber-800">
        No pudimos consultar tu próxima clase. Intenta recargar la página.
      </div>
    );
  }

  if (!nextClass) return null;

  const meetingUrl = safeMeetingUrl(nextClass.meeting_url);

  return (
    <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-5 text-white shadow-xl shadow-indigo-500/20 sm:p-6" aria-labelledby="next-class-title">
      <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 left-1/3 h-32 w-32 rounded-full bg-cyan-300/10" />
      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-100">
            <Video className="h-5 w-5" /> Tu próxima clase
          </div>
          <h3 id="next-class-title" className="break-words text-2xl font-black leading-tight sm:text-3xl">
            {nextClass.title}
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm font-bold text-white/95 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <span className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-cyan-200" /> {classDateLabel(nextClass.starts_at)}</span>
            <span className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-cyan-200" /> {classTimeLabel(nextClass.starts_at)} · {durationLabel(nextClass.starts_at, nextClass.ends_at)}</span>
            <span className="flex items-center gap-2"><UserRound className="h-5 w-5 text-cyan-200" /> Profe {nextClass.teacher_name}</span>
          </div>
        </div>

        {meetingUrl ? (
          <a
            href={meetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 active:translate-y-0"
          >
            <Video className="h-5 w-5" /> Entrar a clase <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white/85">
            El profesor publicará el enlace aquí
          </div>
        )}
      </div>
    </section>
  );
}
