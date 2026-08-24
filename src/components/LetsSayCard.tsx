import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Check, RefreshCcw, Sparkles, Volume2, CheckCircle2, LayoutGrid, ArrowRight } from 'lucide-react';
import { ClassSlide } from '../types';
import { playAudio } from '../lib/audio';

interface LetsSayCardProps {
  slide: ClassSlide;
}

export function LetsSayCard({ slide }: LetsSayCardProps) {
  const ls = slide.letsSay;

  // Fallback: build from legacy roleplay data or content
  const prompt = ls?.prompt
    ?? slide.roleplay?.conversationGoal
    ?? slide.roleplay?.situation
    ?? (slide.content?.[0] ?? 'Practice a real conversation with your partner!');
  const promptEs = ls?.promptEs
    ?? '¡Practica una conversación real con tu compañero!';

  const roleA = ls?.roleA ?? {
    emoji: '🙋',
    label: slide.roleplay?.roles?.a?.label ?? 'Student A',
    mission: slide.roleplay?.roles?.a?.goal ?? 'Start the conversation.',
    starterPhrase: slide.roleplay?.usefulPhrases?.[0] ?? 'Hello! Let\'s talk.',
    usefulPhrases: slide.roleplay?.usefulPhrases?.slice(0, 3) ?? [],
  };
  const roleB = ls?.roleB ?? {
    emoji: '🙋‍♀️',
    label: slide.roleplay?.roles?.b?.label ?? 'Student B',
    mission: slide.roleplay?.roles?.b?.goal ?? 'Respond and keep the conversation going.',
    starterPhrase: slide.roleplay?.usefulPhrases?.[1] ?? 'Hi! Sure, let\'s do it.',
    usefulPhrases: slide.roleplay?.usefulPhrases?.slice(3) ?? [],
  };
  const vocabulary = ls?.usefulVocabulary ?? slide.roleplay?.usefulPhrases ?? [];
  const checklist = ls?.successChecklist ?? slide.roleplay?.successChecklist ?? [
    'Used key vocabulary from today\'s class',
    'Asked and answered in complete sentences',
    'Good pronunciation and confidence',
  ];
  const isKids = ls?.mode === 'kids';

  // State
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [celebrated, setCelebrated] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<'a' | 'b' | null>(null);

  const effA = isSwapped ? roleB : roleA;
  const effB = isSwapped ? roleA : roleB;
  const displayA = (isSwapped ? nameB : nameA).trim() || effA.label;
  const displayB = (isSwapped ? nameA : nameB).trim() || effB.label;

  const allChecked = checked.length === checklist.length && checked.every(Boolean);

  const toggle = (i: number) => setChecked((c) => { const n = [...c]; while (n.length <= i) n.push(false); n[i] = !n[i]; return n; });

  useEffect(() => {
    if (allChecked && !celebrated) {
      setCelebrated(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#38bdf8', '#a855f7', '#10b981', '#f59e0b'] });
    }
  }, [allChecked, celebrated]);

  return (
    <div className="flex flex-col h-full w-full min-h-0 text-white gap-2 sm:gap-3">
      {/* ═══ TOP BADGE: SPEAKING TIME 🗣️ ═══ */}
      <div className="flex items-center justify-between gap-2 flex-wrap shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 text-white font-black text-xs sm:text-base shadow-lg"
        >
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '5s' }} />
          SPEAKING TIME 🗣️
          <span className="hidden sm:inline text-xs font-bold bg-black/20 px-2 py-0.5 rounded-lg">¡Hora de Hablar!</span>
        </motion.div>

        <div className="flex items-center gap-2">
          {/* Detail toggle */}
          <button
            type="button"
            onClick={() => setShowDetail(v => !v)}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 border transition-all ${showDetail ? 'bg-white text-slate-900 border-white' : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'}`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            {showDetail ? 'Vista Simple' : 'Ver Frases'}
          </button>
          {/* Swap roles */}
          <button
            type="button"
            onClick={() => { setIsSwapped(v => !v); setActiveSpeaker(null); }}
            className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm flex items-center gap-1.5 shadow transition-all"
          >
            <RefreshCcw className="w-3.5 h-3.5" /> Switch 🔄
          </button>
        </div>
      </div>

      {/* ═══ CINEMATIC PROMPT ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`px-5 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-white/15 backdrop-blur-md shrink-0 ${isKids ? 'text-center' : ''}`}
      >
        <p className={`font-black leading-snug text-amber-300 ${isKids ? 'text-2xl sm:text-4xl lg:text-5xl' : 'text-xl sm:text-3xl lg:text-4xl'}`}>
          {prompt}
        </p>
        <p className={`mt-1.5 font-bold text-white/70 italic ${isKids ? 'text-base sm:text-xl' : 'text-sm sm:text-lg'}`}>
          {promptEs}
        </p>
      </motion.div>

      {/* ═══ DUAL ROLE CARDS ═══ */}
      <div className={`flex-1 min-h-0 grid gap-3 sm:gap-4 ${isKids ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 lg:grid-cols-2'}`}>
        {/* — CARD A — */}
        <RoleCard
          side="a"
          role={effA}
          displayName={displayA}
          rawName={isSwapped ? nameB : nameA}
          onNameChange={(v) => isSwapped ? setNameB(v) : setNameA(v)}
          isActive={activeSpeaker === 'a'}
          onToggleActive={() => setActiveSpeaker(activeSpeaker === 'a' ? null : 'a')}
          showDetail={showDetail}
          isKids={isKids}
        />
        {/* — CARD B — */}
        <RoleCard
          side="b"
          role={effB}
          displayName={displayB}
          rawName={isSwapped ? nameA : nameB}
          onNameChange={(v) => isSwapped ? setNameA(v) : setNameB(v)}
          isActive={activeSpeaker === 'b'}
          onToggleActive={() => setActiveSpeaker(activeSpeaker === 'b' ? null : 'b')}
          showDetail={showDetail}
          isKids={isKids}
        />
      </div>

      {/* ═══ VOCABULARY CHIPS ═══ */}
      {vocabulary.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center shrink-0 py-1.5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white/60 mr-1">Key words:</span>
          {vocabulary.slice(0, 8).map((v, i) => (
            <button
              key={i}
              type="button"
              onClick={() => playAudio(v, 'en-US')}
              className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-black text-sm sm:text-base border border-white/15 flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              {v}
              <Volume2 className="w-3.5 h-3.5 opacity-70" />
            </button>
          ))}
        </div>
      )}

      {/* ═══ SUCCESS CHECKLIST ═══ */}
      <div className="shrink-0 px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center gap-2.5">
        <span className="text-sm font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5 mr-1">
          <CheckCircle2 className="w-4 h-4" /> Checklist:
        </span>
        {checklist.map((item, i) => {
          const done = Boolean(checked[i]);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm transition-all border cursor-pointer ${done ? 'bg-emerald-500 border-emerald-400 text-white scale-105 shadow-md' : 'bg-white/10 border-white/10 text-white/75 hover:bg-white/20'}`}
            >
              <span className={`w-4.5 h-4.5 rounded flex items-center justify-center text-xs font-black ${done ? 'bg-white text-emerald-700' : 'bg-white/20'}`}>
                {done ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : i + 1}
              </span>
              {item}
            </button>
          );
        })}
        {allChecked && (
          <motion.button
            type="button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => { setIsSwapped(v => !v); setChecked([]); setCelebrated(false); setActiveSpeaker(null); }}
            className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-950 font-black text-sm shadow-lg cursor-pointer"
          >
            🎉 ¡Listo! Invertir roles
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-component: RoleCard ─── */
interface RoleCardProps {
  side: 'a' | 'b';
  role: { emoji?: string; label: string; labelEs?: string; mission: string; missionEs?: string; starterPhrase: string; starterPhraseEs?: string; usefulPhrases?: string[] };
  displayName: string;
  rawName: string;
  onNameChange: (v: string) => void;
  isActive: boolean;
  onToggleActive: () => void;
  showDetail: boolean;
  isKids: boolean;
}

function RoleCard({ side, role, displayName, rawName, onNameChange, isActive, onToggleActive, showDetail, isKids }: RoleCardProps) {
  const isA = side === 'a';
  const color = isA
    ? { border: 'border-sky-500/50 hover:border-sky-400', activeBorder: 'border-sky-400 ring-2 ring-sky-400/30', bg: 'bg-sky-950/75', badge: 'bg-sky-500 text-white', chip: 'bg-sky-600/40 border-sky-400/30 text-sky-100', phraseBox: 'border-sky-200 bg-sky-50', phraseBtn: 'bg-sky-100 hover:bg-sky-500 group-hover:text-white text-sky-700' }
    : { border: 'border-emerald-500/50 hover:border-emerald-400', activeBorder: 'border-emerald-400 ring-2 ring-emerald-400/30', bg: 'bg-emerald-950/75', badge: 'bg-emerald-500 text-white', chip: 'bg-emerald-600/40 border-emerald-400/30 text-emerald-100', phraseBox: 'border-emerald-200 bg-emerald-50', phraseBtn: 'bg-emerald-100 hover:bg-emerald-500 group-hover:text-white text-emerald-700' };

  return (
    <div className={`flex flex-col rounded-3xl p-4 sm:p-5 border-3 transition-all ${isActive ? color.activeBorder : color.border} ${color.bg} min-h-0 justify-between`}>
      {/* Card header */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-2 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className={`text-4xl sm:text-5xl leading-none ${isKids ? 'text-5xl sm:text-6xl' : ''}`}>{role.emoji ?? (isA ? '🙋' : '🙋‍♀️')}</span>
          <div className="min-w-0">
            <span className={`text-xs font-black uppercase tracking-wider ${isA ? 'text-sky-300' : 'text-emerald-300'}`}>
              ROL {isA ? '1' : '2'}{role.labelEs ? ` · ${role.labelEs}` : ''}
            </span>
            <p className={`font-black text-white truncate ${isKids ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'}`}>{role.label}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={rawName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Nombre"
            className="w-24 sm:w-32 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm text-center focus:outline-none focus:border-white/50 placeholder:text-white/30"
          />
          <button
            type="button"
            onClick={onToggleActive}
            className={`p-2 rounded-xl transition-all cursor-pointer ${isActive ? `${isA ? 'bg-sky-400' : 'bg-emerald-400'} text-white shadow` : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
            title="Marcar hablando"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-2.5 shrink-0">
        <p className={`font-bold text-white leading-snug ${isKids ? 'text-lg sm:text-2xl' : 'text-sm sm:text-lg lg:text-xl'}`}>
          <span className="text-amber-300 font-black">👉 Tu misión: </span>{role.mission}
        </p>
        {role.missionEs && <p className="text-white/60 text-xs sm:text-sm italic mt-0.5">{role.missionEs}</p>}
      </div>

      {/* Starter phrase — always visible, BIG with Spanish translation underneath */}
      <div
        onClick={() => playAudio(role.starterPhrase, 'en-US')}
        className={`group flex flex-col gap-1.5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 cursor-pointer transition-all bg-white/95 hover:bg-white mb-2 shrink-0 shadow-md ${isA ? 'border-sky-300 shadow-sm' : 'border-emerald-300 shadow-sm'}`}
      >
        <div className="flex items-center gap-3 justify-between">
          <span className={`flex-1 font-black text-slate-900 leading-snug ${isKids ? 'text-lg sm:text-2xl lg:text-3xl' : 'text-base sm:text-xl lg:text-2xl'}`}>
            "{role.starterPhrase}"
          </span>
          <div className={`p-2 rounded-xl shrink-0 transition-colors ${color.phraseBtn}`}>
            <Volume2 className="w-5 h-5" />
          </div>
        </div>
        {role.starterPhraseEs && (
          <p className="text-slate-600 font-bold text-sm sm:text-base lg:text-lg leading-snug border-t border-slate-200/80 pt-1.5 mt-0.5">
            🇪🇸 {role.starterPhraseEs}
          </p>
        )}
      </div>

      {/* Extra phrases (shown in detail mode) */}
      <AnimatePresence>
        {showDetail && role.usefulPhrases && role.usefulPhrases.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex-1 min-h-0 overflow-y-auto space-y-1.5"
          >
            {role.usefulPhrases.map((phrase, idx) => (
              <div
                key={idx}
                onClick={() => playAudio(phrase, 'en-US')}
                className={`group flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer bg-white/90 hover:bg-white transition-all ${isA ? 'border-sky-200' : 'border-emerald-200'}`}
              >
                <span className="flex-1 font-bold text-slate-800 text-xs sm:text-sm leading-snug">"{phrase}"</span>
                <Volume2 className={`w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 ${isA ? 'text-sky-600' : 'text-emerald-600'}`} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
