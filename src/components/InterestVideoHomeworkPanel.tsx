import React, { useState, useEffect, useMemo } from 'react';
import {
  Check,
  Copy,
  Film,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Plus,
  Link2,
  BookOpen,
  PenTool,
  Mic,
} from 'lucide-react';
import { CurriculumClass } from '../types';
import {
  INTEREST_CATEGORIES,
  GRAMMAR_BLOCK_LABELS,
  getInterestById,
  getVideosForInterestAndClass,
  matchClassToGrammarBlock,
} from '../data/interestVideosCatalog';
import { getActiveStudentId, getActiveStudentName, safeEncodeURIComponent } from '../lib/homeworkResolver';
import { dbAdmin } from '../lib/db';
import { supabase } from '../lib/supabase';
import { StudentInterestsModal } from './StudentInterestsModal';

interface InterestVideoHomeworkPanelProps {
  cls?: CurriculumClass;
  studentName?: string;
}

function extractYouTubeId(urlOrId: string): string | null {
  const clean = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) return clean;
  const match =
    clean.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/) ||
    clean.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export function InterestVideoHomeworkPanel({ cls, studentName }: InterestVideoHomeworkPanelProps) {
  const activeStudentId = getActiveStudentId();
  const resolvedName = studentName?.trim() || getActiveStudentName() || 'Estudiante';

  const [studentInterests, setStudentInterests] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('active_student_profile');
      if (raw && raw.startsWith('{')) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.interests) && parsed.interests.length > 0) {
          return parsed.interests;
        }
      }
    } catch {}
    return [];
  });

  const [watchedVideos, setWatchedVideos] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('active_student_profile');
      if (raw && raw.startsWith('{')) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.watched_interest_videos)) {
          return parsed.watched_interest_videos;
        }
      }
    } catch {}
    return [];
  });

  const [activeInterestId, setActiveInterestId] = useState<string>(
    () => studentInterests[0] || 'medicine'
  );
  const [videoIndex, setVideoIndex] = useState(0);
  const [showInterestsModal, setShowInterestsModal] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [showCustomUrlBox, setShowCustomUrlBox] = useState(false);
  const [customVideoId, setCustomVideoId] = useState<string | null>(null);
  const [copiedClipboard, setCopiedClipboard] = useState(false);

  // Sync latest interests & watched videos from Supabase for the active student
  useEffect(() => {
    if (!activeStudentId) return;
    let mounted = true;
    supabase
      .from('students')
      .select('interests, watched_interest_videos')
      .eq('id', activeStudentId)
      .single()
      .then(({ data }) => {
        if (!mounted || !data) return;
        if (Array.isArray(data.interests) && data.interests.length > 0) {
          setStudentInterests(data.interests);
          setActiveInterestId((prev) =>
            data.interests.includes(prev) ? prev : data.interests[0]
          );
        }
        if (Array.isArray(data.watched_interest_videos)) {
          setWatchedVideos(data.watched_interest_videos);
        }
      });
    return () => {
      mounted = false;
    };
  }, [activeStudentId]);

  const { block: matchedBlock, classTopicSummary } = useMemo(
    () => matchClassToGrammarBlock(cls),
    [cls]
  );
  const grammarBlockMeta = GRAMMAR_BLOCK_LABELS[matchedBlock];

  const availableVideos = useMemo(
    () => getVideosForInterestAndClass(activeInterestId, cls, watchedVideos),
    [activeInterestId, cls, watchedVideos]
  );

  const currentVideo = availableVideos[videoIndex % Math.max(1, availableVideos.length)];
  const effectiveVideoId = customVideoId || currentVideo?.videoId || 'uOcpsXMJcJk';
  const effectiveVideoTitle = customVideoId
    ? 'Video Personalizado Seleccionado por el Profesor'
    : currentVideo?.title || 'Video Recomendado';
  const effectiveChannel = customVideoId ? 'YouTube' : currentVideo?.channel || 'TED-Ed';
  const effectiveDuration = customVideoId ? 'Corto' : currentVideo?.durationLabel || '4:00';
  const activeInterestMeta = getInterestById(activeInterestId);

  const whatsAppMessage = useMemo(() => {
    const classTitle = cls?.title?.includes('/')
      ? cls.title.split('/')[0].trim()
      : cls?.title || 'Clase de Inglés';
    const watchUrl = `https://www.youtube.com/watch?v=${effectiveVideoId}`;
    const interestTag = activeInterestMeta
      ? `${activeInterestMeta.emoji} ${activeInterestMeta.label.split('(')[0].trim()}`
      : 'Video Especial';

    return (
      `👋 ¡Hola *${resolvedName}*! Aquí tienes tu *Tarea Especial de Video* (${interestTag}):\n` +
      `📚 *Clase:* ${classTitle}\n\n` +
      `🎬 *Video (${effectiveDuration}):* ${effectiveVideoTitle}\n` +
      `👉 ${watchUrl}\n\n` +
      `📋 *TU MISIÓN DE 3 PASOS:*\n` +
      `1️⃣ *10 Palabras Nuevas:* Mira el video y escribe en tu cuaderno *10 palabras que no conocías* con su significado.\n` +
      `2️⃣ *10 Frases Creadas por Ti:* Escribe *1 frase por cada palabra nueva (10 en total)*, ${grammarBlockMeta.promptEs} (*${classTopicSummary}*).\n` +
      `3️⃣ *Speaking (Próxima Clase):* Prepárate para *explicar con tus propias palabras de qué trató el video* al iniciar nuestra siguiente clase.\n\n` +
      `📸 _Cuando termines tus 10 palabras y 10 frases, envía una foto por aquí._ ¡Mucho éxito! 🌟`
    );
  }, [
    cls,
    effectiveVideoId,
    activeInterestMeta,
    resolvedName,
    effectiveDuration,
    effectiveVideoTitle,
    grammarBlockMeta.promptEs,
    classTopicSummary,
  ]);

  const recordWatchedVideo = () => {
    if (activeStudentId && effectiveVideoId) {
      dbAdmin.markInterestVideoWatched(activeStudentId, effectiveVideoId);
      setWatchedVideos((prev) => Array.from(new Set([...prev, effectiveVideoId])));
    }
  };

  const handleCopy = async () => {
    recordWatchedVideo();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(whatsAppMessage);
      } catch {}
    }
    setCopiedClipboard(true);
    setTimeout(() => setCopiedClipboard(false), 3000);
  };

  const handleWhatsApp = () => {
    recordWatchedVideo();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(whatsAppMessage).catch(() => {});
    }
    window.open(`https://wa.me/?text=${safeEncodeURIComponent(whatsAppMessage)}`, '_blank');
  };

  const displayedInterests =
    studentInterests.length > 0
      ? studentInterests
      : ['medicine', 'makeup', 'soccer'];

  return (
    <div className="relative z-10 flex-1 flex flex-col justify-between min-h-0 gap-2.5">
      {/* Top Bar: Student Interest Chips + Add/Edit Interests Button */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-slate-950/60 border border-indigo-400/30 px-3.5 py-2 shrink-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-black uppercase tracking-wider text-amber-300 mr-1">
            {studentInterests.length > 0 ? `🎯 Gustos de ${resolvedName}:` : '🎯 Gustos sugeridos:'}
          </span>
          {displayedInterests.map((id) => {
            const cat = getInterestById(id);
            if (!cat) return null;
            const isSelected = activeInterestId === id && !customVideoId;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setCustomVideoId(null);
                  setActiveInterestId(id);
                  setVideoIndex(0);
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs sm:text-sm font-black transition cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-md scale-[1.02]'
                    : 'bg-white/10 text-indigo-100 hover:bg-white/20 border border-white/10'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label.split('(')[0].trim()}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setShowInterestsModal(true)}
            className="inline-flex items-center gap-1 rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-3 py-1 text-xs font-black text-cyan-200 hover:bg-cyan-500/30 transition cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>{studentInterests.length > 0 ? 'Editar Gustos (30)' : 'Asignar Gustos al Alumno'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden xl:inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-1 text-[11px] font-black text-emerald-200">
            <Sparkles className="h-3 w-3 text-emerald-300" />
            Puente con clase: {grammarBlockMeta.label}
          </span>
        </div>
      </div>

      {/* Main 2-Column Screen-Share Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-3 sm:gap-4 min-h-0 items-stretch">
        {/* LEFT COLUMN: The 3 Fixed Rules (10 Words + 10 Sentences + Oral Explanation) */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 p-3.5 sm:p-4 backdrop-blur-md flex flex-col justify-between shadow-xl min-h-0">
          <div className="flex items-center justify-between gap-2 mb-2 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 shadow-md shrink-0">
                <Film className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="font-black text-base sm:text-lg text-white tracking-tight leading-tight">
                  Tu Misión con este Video (3 Pasos)
                </h3>
                <p className="text-xs text-amber-200/90 font-semibold">
                  Escucha inglés real sobre lo que te apasiona y construye tu vocabulario:
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2 min-h-0">
            {/* Step 1: 10 Unknown Words */}
            <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/65 p-3 sm:p-3.5 flex items-start gap-3 shadow-md">
              <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/25 border border-cyan-400/50 text-cyan-200 font-black text-sm sm:text-base">
                1️⃣
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-cyan-300 shrink-0" />
                  <h4 className="text-sm sm:text-base font-black text-cyan-200 uppercase tracking-wide">
                    10 Palabras Nuevas (Vocabulario)
                  </h4>
                </div>
                <p className="mt-0.5 text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug">
                  Mira el video y escribe en tu cuaderno <span className="text-amber-300 underline decoration-amber-400/60">10 palabras que no conocías</span> con su significado en español.
                </p>
              </div>
            </div>

            {/* Step 2: 10 Sentences connected to class */}
            <div className="rounded-2xl border border-emerald-400/40 bg-slate-950/65 p-3 sm:p-3.5 flex items-start gap-3 shadow-md">
              <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/25 border border-emerald-400/50 text-emerald-200 font-black text-sm sm:text-base">
                2️⃣
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <PenTool className="h-4 w-4 text-emerald-300 shrink-0" />
                  <h4 className="text-sm sm:text-base font-black text-emerald-200 uppercase tracking-wide">
                    10 Frases Propias + Tema de Hoy
                  </h4>
                </div>
                <p className="mt-0.5 text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug">
                  Escribe <span className="text-emerald-300">1 frase por cada palabra nueva (10 en total)</span>, {grammarBlockMeta.promptEs} (<strong className="text-amber-300">{classTopicSummary}</strong>).
                </p>
              </div>
            </div>

            {/* Step 3: Oral Explanation next class */}
            <div className="rounded-2xl border border-fuchsia-400/40 bg-slate-950/65 p-3 sm:p-3.5 flex items-start gap-3 shadow-md">
              <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/25 border border-fuchsia-400/50 text-fuchsia-200 font-black text-sm sm:text-base">
                3️⃣
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <Mic className="h-4 w-4 text-fuchsia-300 shrink-0" />
                  <h4 className="text-sm sm:text-base font-black text-fuchsia-200 uppercase tracking-wide">
                    Speaking en la Próxima Clase
                  </h4>
                </div>
                <p className="mt-0.5 text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug">
                  En la siguiente clase <span className="text-fuchsia-300">explicarás con tus propias palabras de qué trató el video</span> y qué aprendiste.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Verified Embedded Video + Cycle Button + WhatsApp/Copy */}
        <div className="rounded-2xl sm:rounded-3xl border border-indigo-400/30 bg-slate-950/65 p-3 sm:p-4 backdrop-blur-md flex flex-col justify-between shadow-xl min-h-0 gap-2.5">
          {/* Video Header & Switcher */}
          <div className="flex items-center justify-between gap-2 shrink-0">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-amber-400/20 border border-amber-400/40 px-2 py-0.5 text-[11px] font-black text-amber-300">
                  ⏱ {effectiveDuration}
                </span>
                <span className="text-xs font-bold text-indigo-200 truncate">
                  {effectiveChannel}
                </span>
              </div>
              <h4
                className="text-sm sm:text-base font-black text-white truncate mt-0.5"
                title={effectiveVideoTitle}
              >
                {effectiveVideoTitle}
              </h4>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setCustomVideoId(null);
                  setVideoIndex((prev) => (prev + 1) % Math.max(1, availableVideos.length));
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-500 border border-indigo-400/50 px-3 py-1.5 text-xs font-black text-white transition cursor-pointer shadow"
                title="Cambiar a otro video verificado de este mismo gusto"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>
                  Otro Video ({(videoIndex % Math.max(1, availableVideos.length)) + 1}/
                  {availableVideos.length})
                </span>
              </button>

              <button
                type="button"
                onClick={() => setShowCustomUrlBox((prev) => !prev)}
                className="inline-flex items-center gap-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-1.5 text-xs font-bold text-slate-200 transition cursor-pointer"
                title="Pegar otro link de YouTube manualmente"
              >
                <Link2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {showCustomUrlBox && (
            <div className="flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={customUrlInput}
                onChange={(e) => setCustomUrlInput(e.target.value)}
                placeholder="Pega cualquier link de YouTube aquí..."
                className="flex-1 rounded-xl border border-indigo-400/40 bg-slate-900 px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  const id = extractYouTubeId(customUrlInput);
                  if (id) {
                    setCustomVideoId(id);
                    setShowCustomUrlBox(false);
                  }
                }}
                className="rounded-xl bg-amber-400 px-3 py-1.5 text-xs font-black text-slate-950 hover:bg-amber-300 cursor-pointer"
              >
                Usar Video
              </button>
            </div>
          )}

          {/* Embedded Player */}
          <div className="relative flex-1 w-full overflow-hidden rounded-2xl border-2 border-indigo-400/40 bg-black min-h-[170px] sm:min-h-[200px] shadow-inner">
            <iframe
              key={effectiveVideoId}
              src={`https://www.youtube.com/embed/${effectiveVideoId}?rel=0`}
              title={effectiveVideoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>

          {/* Share & Copy Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-500/80 bg-slate-800/90 hover:bg-slate-700 py-2.5 px-3 text-xs sm:text-sm font-black text-white shadow-lg transition cursor-pointer"
            >
              {copiedClipboard ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400 stroke-[3]" />
                  <span className="text-emerald-300">¡Tarea Copiada! ✅</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-cyan-300" />
                  <span>Copiar Tarea de Video</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#128C7E] py-2.5 px-3 text-xs sm:text-sm font-black text-white shadow-lg border border-emerald-300/60 hover:brightness-110 transition cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Enviar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal to edit/select student interests */}
      <StudentInterestsModal
        student={{
          id: activeStudentId,
          name: resolvedName,
          interests: studentInterests,
        }}
        isOpen={showInterestsModal}
        onClose={() => setShowInterestsModal(false)}
        onSaved={(newInterests) => {
          setStudentInterests(newInterests);
          if (newInterests.length > 0) {
            setCustomVideoId(null);
            setActiveInterestId(newInterests[0]);
            setVideoIndex(0);
          }
        }}
      />
    </div>
  );
}
