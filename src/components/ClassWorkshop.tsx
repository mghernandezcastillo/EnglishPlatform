/**
 * ClassWorkshop — Teacher tool to review every slide of Teens Class 1,
 * write improvement ideas/prompts per slide, approve or flag them,
 * and persist everything in localStorage.
 */
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle,
  RotateCcw, ChevronDown, ChevronUp, Trophy,
  Layers, BookOpen, Sparkles, Clock, Hash, Eye
} from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { enhancePresentationClass } from '../lib/presentationEnhancer';
import { curriculumTeensLevels } from '../data/curriculumTeens';
import { SlideRenderer } from './SlideRenderer';

// ─── Constants & types ────────────────────────────────────────────────────────

const SANDBOX_CLASS_ID = 'c-teens-basic-zero-1';
const STORAGE_KEY = 'class-workshop-v3';

type SlideStatus = 'pending' | 'approved' | 'needs-work';

interface SlideNote {
  status: SlideStatus;
  prompt: string;
  updatedAt: string;
}

interface WorkshopState {
  version: 3;
  classId: string;
  notes: Record<string, SlideNote>;
}

function loadState(): WorkshopState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version === 3) return parsed;
    }
  } catch { /* empty */ }
  return { version: 3, classId: SANDBOX_CLASS_ID, notes: {} };
}

function saveState(s: WorkshopState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch { /* empty */ }
}

const STATUS_CONFIG = {
  pending:      { label: 'Pendiente',   emoji: '⏳', badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25' },
  approved:     { label: 'Aprobada',    emoji: '✅', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' },
  'needs-work': { label: 'Mejorar',     emoji: '🔧', badge: 'bg-red-500/15 text-red-300 border-red-500/25' },
} satisfies Record<SlideStatus, { label: string; emoji: string; badge: string }>;

const SECTION_GRADIENTS = [
  'from-cyan-500 to-blue-600', 'from-indigo-500 to-purple-600',
  'from-orange-500 to-red-500', 'from-emerald-500 to-teal-600',
  'from-violet-500 to-fuchsia-600',
];
const SECTION_EMOJI = ['🔥', '📖', '🎯', '🚀', '🏁'];

// ─── ClassWorkshop ─────────────────────────────────────────────────────────────

export function ClassWorkshop() {
  const [state, setState] = useState<WorkshopState>(loadState);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [promptDraft, setPromptDraft] = useState('');
  const [promptDirty, setPromptDirty] = useState(false);
  const [showPromptPanel, setShowPromptPanel] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  // ── Source data ──────────────────────────────────────────────────────────
  const level0 = curriculumTeensLevels.find(l => l.id === 'teens-basic-zero');
  const rawClass = level0?.classes.find(c => c.id === SANDBOX_CLASS_ID);
  const sandboxClass = useMemo(() => rawClass ? enhancePresentationClass(rawClass) : null, [rawClass]);

  const allSlides = useMemo(() => {
    if (!sandboxClass) return [];
    const out: { section: ClassSection; slide: ClassSlide; globalIdx: number }[] = [];
    let i = 0;
    sandboxClass.sections.forEach(sec => {
      sec.slides.forEach(sl => { out.push({ section: sec, slide: sl, globalIdx: i }); i++; });
    });
    return out;
  }, [sandboxClass]);

  const totalSlides = allSlides.length;
  const currentData = allSlides[currentIdx] ?? null;
  const currentNote: SlideNote = currentData
    ? (state.notes[currentData.slide.id] ?? { status: 'pending' as SlideStatus, prompt: '', updatedAt: '' })
    : { status: 'pending', prompt: '', updatedAt: '' };

  const approvedCount = allSlides.filter(s => (state.notes[s.slide.id]?.status ?? 'pending') === 'approved').length;
  const needsWorkCount = allSlides.filter(s => (state.notes[s.slide.id]?.status ?? 'pending') === 'needs-work').length;
  const progressPct = totalSlides > 0 ? Math.round((approvedCount / totalSlides) * 100) : 0;
  const isComplete = approvedCount === totalSlides && totalSlides > 0;
  const filledPrompts = Object.values(state.notes).filter(n => n.prompt.trim()).length;

  useEffect(() => {
    if (currentData) {
      const note = state.notes[currentData.slide.id];
      setPromptDraft(note?.prompt ?? '');
      setPromptDirty(false);
    }
  }, [currentIdx]);

  useEffect(() => {
    if (currentData) setOpenSections(prev => new Set([...prev, currentData.section.id]));
  }, [currentData?.section.id]);

  const persist = (next: WorkshopState) => { setState(next); saveState(next); };

  const getStatus = (slideId: string): SlideStatus => state.notes[slideId]?.status ?? 'pending';

  const setStatus = (status: SlideStatus) => {
    if (!currentData) return;
    persist({
      ...state,
      notes: { ...state.notes, [currentData.slide.id]: { status, prompt: promptDraft, updatedAt: new Date().toISOString() } },
    });
    flash(status === 'approved' ? '✅ Aprobada' : status === 'needs-work' ? '🔧 Para mejorar' : '↩️ Pendiente');
    if (status === 'approved' && currentIdx < totalSlides - 1)
      setTimeout(() => setCurrentIdx(i => i + 1), 320);
  };

  const savePrompt = () => {
    if (!currentData) return;
    persist({
      ...state,
      notes: { ...state.notes, [currentData.slide.id]: { ...(state.notes[currentData.slide.id] ?? { status: 'pending' as SlideStatus, updatedAt: '' }), prompt: promptDraft, updatedAt: new Date().toISOString() } },
    });
    setPromptDirty(false);
    flash('💾 Idea guardada');
  };

  const resetAll = () => {
    if (!confirm('¿Resetear todas las revisiones?')) return;
    persist({ version: 3, classId: SANDBOX_CLASS_ID, notes: {} });
    setCurrentIdx(0);
    flash('🔄 Reseteado');
  };

  const flash = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const toggleSection = (id: string) => {
    setOpenSections(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'TEXTAREA' || document.activeElement?.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') setCurrentIdx(i => Math.min(totalSlides - 1, i + 1));
      if (e.key === 'ArrowLeft') setCurrentIdx(i => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [totalSlides]);

  if (!sandboxClass || totalSlides === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 gap-3">
        <AlertCircle className="w-8 h-8" />
        No se encontró la clase sandbox ({SANDBOX_CLASS_ID})
      </div>
    );
  }

  const cfg = STATUS_CONFIG[currentNote.status];

  return (
    <div className="bg-[#0d0f1a] text-white flex flex-col" style={{ height: 'calc(100vh - 190px)', minHeight: 560 }}>

      {/* ══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header className="shrink-0 bg-[#0d0f1a]/95 border-b border-white/8 px-4 lg:px-5 py-2.5 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h1 className="font-extrabold text-sm leading-none">Class Workshop</h1>
            <p className="text-[10px] text-white/40 mt-0.5 truncate">{sandboxClass.title.split('/')[0].trim()}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <StatPill icon={<CheckCircle className="w-3 h-3 text-emerald-400" />} value={approvedCount} total={totalSlides} color="text-emerald-400" />
          <StatPill icon={<XCircle className="w-3 h-3 text-red-400" />} value={needsWorkCount} color="text-red-400" />
          <StatPill icon={<AlertCircle className="w-3 h-3 text-amber-400" />} value={totalSlides - approvedCount - needsWorkCount} color="text-amber-400" />
        </div>

        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-xs">
          <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
              animate={{ width: `${progressPct}%` }} transition={{ type: 'spring', damping: 18 }} />
          </div>
          <span className="text-xs font-bold text-white/50">{progressPct}%</span>
        </div>

        {filledPrompts > 0 && (
          <div className="flex items-center gap-1 text-xs bg-violet-500/15 text-violet-300 border border-violet-500/25 px-2.5 py-1 rounded-xl font-bold">
            <Sparkles className="w-3 h-3" /> {filledPrompts} ideas
          </div>
        )}

        {isComplete && (
          <div className="flex items-center gap-1.5 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-xl font-bold animate-pulse">
            <Trophy className="w-3 h-3" /> ¡Completa!
          </div>
        )}

        <button onClick={resetAll} className="p-1.5 rounded-xl text-white/30 hover:text-red-400 hover:bg-red-500/10 border border-white/8 transition-all">
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* ══ BODY ════════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* ─ LEFT SIDEBAR ─────────────────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col w-60 xl:w-68 shrink-0 border-r border-white/8 overflow-y-auto">
          <div className="p-3 border-b border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-violet-400" />
              <span className="text-[11px] font-bold text-violet-300">Teens · L0 · Clase 1</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Secc', v: sandboxClass.sections.length, cls: 'text-blue-400' },
                { label: 'Slides', v: totalSlides, cls: 'text-purple-400' },
                { label: 'Ideas', v: filledPrompts, cls: 'text-violet-400' },
              ].map(({ label, v, cls }) => (
                <div key={label} className="text-center bg-white/5 rounded-xl p-2">
                  <div className={`font-extrabold text-lg ${cls}`}>{v}</div>
                  <div className="text-[9px] text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 p-2 gap-1.5 overflow-y-auto">
            {sandboxClass.sections.map((section, sIdx) => {
              const secSlides = allSlides.filter(s => s.section.id === section.id);
              const sApproved = secSlides.filter(s => getStatus(s.slide.id) === 'approved').length;
              const sNeedsWork = secSlides.filter(s => getStatus(s.slide.id) === 'needs-work').length;
              const isOpen = openSections.has(section.id);

              return (
                <div key={section.id} className="bg-white/4 border border-white/8 rounded-xl overflow-hidden">
                  <button onClick={() => toggleSection(section.id)} className="w-full flex items-center gap-2 p-2.5 hover:bg-white/4 transition-colors">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${SECTION_GRADIENTS[sIdx]} flex items-center justify-center text-xs shrink-0`}>
                      {SECTION_EMOJI[sIdx]}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="text-[11px] font-bold text-white/80 truncate">{section.title.split('/')[0].trim()}</div>
                      <div className="text-[9px] text-white/40">{sApproved}/{secSlides.length}{sNeedsWork > 0 && ` · ${sNeedsWork} 🔧`}</div>
                    </div>
                    {sApproved === secSlides.length && <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />}
                    {isOpen ? <ChevronUp className="w-3 h-3 text-white/30" /> : <ChevronDown className="w-3 h-3 text-white/30" />}
                  </button>
                  <div className="px-2.5 pb-1.5">
                    <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full transition-all duration-500" style={{ width: `${(sApproved / secSlides.length) * 100}%` }} />
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="slides" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden border-t border-white/8">
                        <div className="flex flex-col gap-0.5 p-1.5">
                          {secSlides.map(({ slide, globalIdx }) => {
                            const st = getStatus(slide.id);
                            const isActive = globalIdx === currentIdx;
                            const hasPrompt = !!state.notes[slide.id]?.prompt.trim();
                            return (
                              <button key={slide.id} onClick={() => setCurrentIdx(globalIdx)}
                                className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left transition-all ${isActive ? 'bg-violet-500/20 border border-violet-500/35' : 'hover:bg-white/5 border border-transparent'}`}>
                                <span className={`text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${st === 'approved' ? 'bg-emerald-500/30 text-emerald-400' : st === 'needs-work' ? 'bg-red-500/30 text-red-400' : 'bg-white/10 text-white/40'}`}>{globalIdx + 1}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[10px] text-white/75 font-medium truncate">{slide.title.split('/')[0].trim()}</div>
                                  <div className="flex items-center gap-1">
                                    <span className="text-[8px] text-white/30 bg-white/8 px-1 rounded-sm">{slide.type || 'std'}</span>
                                    {hasPrompt && <Sparkles className="w-2 h-2 text-violet-400" />}
                                  </div>
                                </div>
                                <span className="text-[10px] shrink-0">{STATUS_CONFIG[st].emoji}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ─ MAIN CONTENT ──────────────────────────────────────────────────── */}
        {currentData && (
          <div className="flex-1 flex min-w-0 overflow-hidden">

            {/* ── SLIDE PREVIEW COLUMN ─────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0 p-3 lg:p-4 gap-2 overflow-hidden">
              {/* Nav */}
              <div className="shrink-0 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Hash className="w-3 h-3" />
                  <span className="font-bold text-white">{currentIdx + 1}</span>
                  <span>/ {totalSlides}</span>
                  <span className="text-white/20">·</span>
                  <span className="truncate max-w-[160px] text-white/40">{currentData.section.title.split('/')[0].trim()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 disabled:opacity-25 transition-all">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setCurrentIdx(Math.min(totalSlides - 1, currentIdx + 1))} disabled={currentIdx === totalSlides - 1}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 disabled:opacity-25 transition-all">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slide — compact scaled, fills remaining height */}
              <div className="flex-1 min-h-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIdx}
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.15 }} className="w-full h-full flex items-center justify-center overflow-hidden">
                    <SlideRenderer
                      cls={sandboxClass as CurriculumClass}
                      section={currentData.section}
                      slide={currentData.slide}
                      currentIndex={currentIdx}
                      totalSlides={totalSlides}
                      onNext={() => setCurrentIdx(i => Math.min(totalSlides - 1, i + 1))}
                      compact={true}
                      hideTeacherNote={false}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dot navigator */}
              <div className="shrink-0 flex items-center justify-center flex-wrap gap-1">
                {allSlides.map(({ slide, globalIdx }) => {
                  const st = getStatus(slide.id);
                  const isActive = globalIdx === currentIdx;
                  return (
                    <button key={slide.id} onClick={() => setCurrentIdx(globalIdx)} title={`${globalIdx + 1}. ${slide.title}`}
                      className={`rounded-full transition-all hover:scale-125 ${isActive ? 'w-4 h-2' : 'w-2 h-2'} ${st === 'approved' ? 'bg-emerald-400' : st === 'needs-work' ? 'bg-red-400' : isActive ? 'bg-violet-400' : 'bg-white/15'}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT PANEL ─────────────────────────────────────────── */}
            <div className="w-80 xl:w-88 shrink-0 flex flex-col border-l border-white/8 overflow-y-auto">

              {/* Status bar */}
              <div className={`shrink-0 flex items-center gap-3 px-4 py-3 border-b border-white/8 ${cfg.badge} border`}>
                <span className="text-base">{cfg.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm">{cfg.label}</div>
                  <div className="text-[10px] opacity-60 truncate">{currentData.slide.type || 'standard'}</div>
                </div>
                {currentNote.updatedAt && (
                  <div className="flex items-center gap-1 text-[10px] opacity-50 shrink-0">
                    <Clock className="w-2.5 h-2.5" />
                    {new Date(currentNote.updatedAt).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="shrink-0 grid grid-cols-3 gap-2 p-3 border-b border-white/8">
                {(['approved', 'needs-work', 'pending'] as SlideStatus[]).map(s => {
                  const c = STATUS_CONFIG[s];
                  const isActive = currentNote.status === s;
                  return (
                    <button key={s} onClick={() => setStatus(s)}
                      className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl border transition-all text-xs font-bold ${
                        isActive
                          ? s === 'approved' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300'
                            : s === 'needs-work' ? 'bg-red-500/25 border-red-500/50 text-red-300'
                            : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                          : 'bg-white/4 border-white/8 text-white/50 hover:bg-white/8'
                      }`}>
                      <span className="text-lg">{c.emoji}</span>
                      <span className="text-[10px] leading-tight">{c.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prompt box */}
              <div className="flex-1 flex flex-col p-3 gap-2.5 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span className="font-bold text-xs text-white/80">Idea para esta slide</span>
                    {promptDirty && <span className="text-[9px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded-full">sin guardar</span>}
                  </div>
                  <button onClick={() => setShowPromptPanel(p => !p)} className="text-white/30 hover:text-white/60 transition-colors">
                    {showPromptPanel ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {showPromptPanel && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden flex flex-col gap-2">
                      <p className="text-[10px] text-white/35 leading-relaxed">
                        Escribe qué quieres cambiar. Cuando vengas a hablar con el AI leerá estas ideas y las implementará.
                      </p>
                      <textarea
                        value={promptDraft}
                        onChange={e => { setPromptDraft(e.target.value); setPromptDirty(true); }}
                        placeholder={`Ej: "Cambiar la imagen. El título es muy largo. Agregar una pregunta..."`}
                        rows={5}
                        className="w-full bg-black/30 border border-white/10 focus:border-violet-500/60 text-white text-xs rounded-xl p-3 resize-none outline-none placeholder-white/20 transition-colors leading-relaxed"
                      />
                      <button onClick={savePrompt} disabled={!promptDirty}
                        className={`w-full py-2 rounded-xl font-bold text-xs transition-all ${promptDirty ? 'bg-violet-600 hover:bg-violet-500 text-white' : 'bg-white/5 text-white/30 cursor-not-allowed'}`}>
                        💾 Guardar idea
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!showPromptPanel && currentNote.prompt && (
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-2.5 text-[10px] text-violet-200/80 italic leading-relaxed line-clamp-3">
                    "{currentNote.prompt}"
                  </div>
                )}

                {/* All ideas list */}
                {filledPrompts > 0 && (
                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                      <Eye className="w-3 h-3" /> Todas las ideas ({filledPrompts})
                    </div>
                    <div className="flex flex-col gap-1">
                      {allSlides.filter(({ slide }) => state.notes[slide.id]?.prompt.trim()).map(({ slide, globalIdx }) => {
                        const note = state.notes[slide.id];
                        const isThis = globalIdx === currentIdx;
                        return (
                          <button key={slide.id} onClick={() => setCurrentIdx(globalIdx)}
                            className={`flex items-start gap-1.5 text-left p-2 rounded-lg transition-all border text-[10px] ${isThis ? 'bg-violet-500/15 border-violet-500/30 text-violet-200' : 'bg-white/4 border-white/8 text-white/60 hover:bg-white/8'}`}>
                            <span className="font-bold text-white/40 shrink-0 mt-0.5">#{globalIdx + 1}</span>
                            <div className="min-w-0 flex-1">
                              <div className="font-semibold text-white/70 truncate">{slide.title.split('/')[0].trim()}</div>
                              <div className="opacity-60 line-clamp-1 mt-0.5">{note.prompt}</div>
                            </div>
                            <span className="shrink-0">{STATUS_CONFIG[note.status].emoji}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Export */}
              <div className="shrink-0 p-3 border-t border-white/8">
                <button onClick={() => {
                  const lines = [`# Class Workshop — Ideas\nClase: ${sandboxClass.title}\nFecha: ${new Date().toLocaleString('es')}\n`];
                  allSlides.forEach(({ slide, globalIdx, section }) => {
                    const note = state.notes[slide.id];
                    if (note?.prompt.trim()) {
                      lines.push(`## Slide ${globalIdx + 1}: ${slide.title.split('/')[0].trim()}`);
                      lines.push(`Sección: ${section.title.split('/')[0].trim()}`);
                      lines.push(`Tipo: ${slide.type || 'standard'}`);
                      lines.push(`Estado: ${STATUS_CONFIG[note.status].label}`);
                      lines.push(`Idea: ${note.prompt}\n`);
                    }
                  });
                  const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url; a.download = 'class-workshop-ideas.md'; a.click();
                  URL.revokeObjectURL(url);
                  flash('📄 Ideas exportadas');
                }} disabled={filledPrompts === 0}
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs transition-all ${filledPrompts > 0 ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white' : 'bg-white/5 text-white/25 cursor-not-allowed'}`}>
                  <Sparkles className="w-3.5 h-3.5" /> Exportar ideas para el AI ({filledPrompts})
                </button>
                <p className="text-[9px] text-white/20 text-center mt-1.5 leading-relaxed">
                  Descarga un .md y tráelo a esta conversación para implementar.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="fixed bottom-5 right-5 bg-slate-800/95 border border-white/15 text-white px-4 py-2.5 rounded-xl shadow-2xl font-semibold text-sm backdrop-blur-xl z-[999]">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatPill({ icon, value, total, color }: { icon: React.ReactNode; value: number; total?: number; color: string }) {
  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/8 rounded-lg px-2 py-1">
      {icon}
      <span className={`font-bold text-xs ${color}`}>{value}</span>
      {total != null && <span className="text-white/30 text-[10px]">/{total}</span>}
    </div>
  );
}
