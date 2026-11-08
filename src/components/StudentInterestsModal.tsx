import React, { useState, useMemo } from 'react';
import { Sparkles, Check, Search, X, Film } from 'lucide-react';
import { DbStudent } from '../types';
import { INTEREST_CATEGORIES, InterestCategory } from '../data/interestVideosCatalog';
import { dbAdmin } from '../lib/db';

interface StudentInterestsModalProps {
  student: Pick<DbStudent, 'id' | 'name' | 'interests'>;
  isOpen: boolean;
  onClose: () => void;
  onSaved: (newInterests: string[]) => void;
  isFirstTimePrompt?: boolean;
}

export function StudentInterestsModal({
  student,
  isOpen,
  onClose,
  onSaved,
  isFirstTimePrompt = false,
}: StudentInterestsModalProps) {
  const [selected, setSelected] = useState<string[]>(() =>
    Array.isArray(student.interests) ? student.interests : []
  );
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);

  const groupedInterests = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = q
      ? INTEREST_CATEGORIES.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.group.toLowerCase().includes(q) ||
            item.id.toLowerCase().includes(q)
        )
      : INTEREST_CATEGORIES;

    const groups: Record<string, InterestCategory[]> = {};
    for (const item of filtered) {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    }
    return groups;
  }, [search]);

  if (!isOpen) return null;

  const toggleInterest = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSave = async () => {
    if (selected.length === 0) return;
    setSaving(true);
    try {
      if (student.id) {
        await dbAdmin.updateStudentInterests(student.id, selected);
      } else {
        try {
          const raw = localStorage.getItem('active_student_profile');
          const parsed = raw ? JSON.parse(raw) : {};
          localStorage.setItem(
            'active_student_profile',
            JSON.stringify({ ...parsed, name: student.name, interests: selected })
          );
        } catch {}
      }
      onSaved(selected);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-2 border-indigo-400/40 bg-gradient-to-br from-[#0f1538] via-[#161d4a] to-[#0b0e26] text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-white/5 px-6 py-4 sm:py-5 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow">
                <Film className="h-3.5 w-3.5" />
                {isFirstTimePrompt ? 'Configuración Inicial de Gustos' : 'Gustos y Vocación del Estudiante'}
              </span>
              <span className="rounded-full bg-indigo-500/20 border border-indigo-400/30 px-2.5 py-0.5 text-xs font-bold text-indigo-200">
                {selected.length} seleccionado{selected.length === 1 ? '' : 's'}
              </span>
            </div>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-black tracking-tight text-white">
              🎯 ¿Cuáles son los gustos de <span className="text-amber-300">{student.name || 'este estudiante'}</span>?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-indigo-200/90 font-medium">
              Selecciona 1 o varios gustos (ej. <strong>Maquillaje</strong>, <strong>Medicina</strong>, <strong>Fútbol / Cristiano Ronaldo</strong>). El sistema asignará videos cortos y verificados en la tarea final de cada clase.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-white/10 p-2 text-slate-300 hover:bg-white/20 hover:text-white transition cursor-pointer shrink-0"
            title="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 pt-3 pb-2 shrink-0 bg-slate-900/40 border-b border-white/5 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-300" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar gusto (ej. Doctora, Maquillaje, Cristiano Ronaldo, Gaming, Cocina...)"
              className="w-full rounded-xl border border-indigo-400/30 bg-slate-950/70 py-2.5 pl-10 pr-4 text-sm font-semibold text-white placeholder-indigo-300/50 focus:border-amber-400 focus:outline-none"
            />
          </div>
          {selected.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {selected.map((id) => {
                const cat = INTEREST_CATEGORIES.find((c) => c.id === id);
                if (!cat) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleInterest(id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 px-3 py-1 text-xs font-black text-amber-200 hover:bg-rose-500/30 hover:border-rose-400 transition cursor-pointer"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label.split('(')[0].trim()}</span>
                    <X className="h-3 w-3" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {Object.entries(groupedInterests).map(([groupName, items]) => (
            <div key={groupName}>
              <h3 className="mb-2.5 text-xs font-black uppercase tracking-widest text-cyan-300/90">
                {groupName}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {items.map((item) => {
                  const isSelected = selected.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleInterest(item.id)}
                      className={`flex items-center justify-between gap-2.5 rounded-2xl border-2 px-3.5 py-3 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-400 bg-gradient-to-r from-amber-500/25 to-orange-500/20 text-white shadow-lg shadow-amber-500/15 scale-[1.01]'
                          : 'border-white/10 bg-white/5 text-indigo-100 hover:border-indigo-400/50 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-2xl shrink-0">{item.emoji}</span>
                        <span className="text-sm font-bold leading-snug break-words">
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          isSelected
                            ? 'border-amber-300 bg-amber-400 text-slate-950'
                            : 'border-white/20 bg-white/5 text-transparent'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-950/60 px-6 py-4 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-slate-300 hover:bg-white/10 hover:text-white transition cursor-pointer"
          >
            {isFirstTimePrompt ? 'Elegir más tarde' : 'Cancelar'}
          </button>

          <button
            type="button"
            disabled={selected.length === 0 || saving}
            onClick={handleSave}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-black transition shadow-xl ${
              selected.length > 0
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white hover:from-emerald-400 hover:to-green-500 cursor-pointer ring-2 ring-emerald-400/40'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span>
              {saving
                ? 'Guardando en Supabase...'
                : `Guardar Gustos (${selected.length})`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
