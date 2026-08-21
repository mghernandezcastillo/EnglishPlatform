import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VocabItem, VocabMeaning } from '../types';
import { vocabService } from '../lib/vocabService';
import { playAudio, stopAudio } from '../lib/audio';
import { VocabMemoryTest } from './VocabMemoryTest';
import {
  Brain,
  Sparkles,
  Search,
  Plus,
  Volume2,
  Layers,
  CheckCircle2,
  Trash2,
  Flame,
  ArrowLeft,
  BookOpen,
  Filter,
  Play,
  RotateCcw,
  Sparkle,
  Zap,
  Info,
  ChevronDown,
  ChevronUp,
  Tag,
  Loader2
} from 'lucide-react';

interface VocabVaultProps {
  studentId?: string | null;
  studentName?: string;
  onBack: () => void;
}

const PRESET_SOURCES = [
  '🎬 Video de YouTube',
  '📱 Reels / TikTok',
  '🎧 Podcast en Inglés',
  '💼 Reunión de Trabajo',
  '🎬 Serie / Película',
  '📖 Libro / Artículo'
];

export function VocabVault({ studentId, studentName, onBack }: VocabVaultProps) {
  const [items, setItems] = useState<VocabItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'vault' | 'test'>('vault');

  // Input form state
  const [inputText, setInputText] = useState('');
  const [sourceNote, setSourceNote] = useState('🎬 Video de YouTube');
  const [customSource, setCustomSource] = useState('');
  const [isEnriching, setIsEnriching] = useState(false);
  const [enrichStatus, setEnrichStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'phrasal_verb' | 'idiom' | 'word' | 'multi' | 'needs_review'>('all');
  const [activeMeaningTabs, setActiveMeaningTabs] = useState<Record<string, number>>({});
  const [audioPlayingId, setAudioPlayingId] = useState<string | null>(null);

  // Load items on mount
  const loadData = async () => {
    setLoading(true);
    const loaded = await vocabService.getItems(studentId);
    setItems(loaded);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [studentId]);

  // Handle Audio Playback
  const handlePlay = (text: string, id: string) => {
    stopAudio();
    setAudioPlayingId(id);
    playAudio(text, 'en-US', {
      onEnd: () => setAudioPlayingId(null),
      onError: () => setAudioPlayingId(null)
    });
  };

  // Add & Enrich
  const handleAddAndEnrich = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsEnriching(true);
    setErrorMessage('');
    setEnrichStatus('✨ Analizando con IA y desglosando significados...');

    const chosenSource = customSource.trim() || sourceNote;

    try {
      const splitTerms = inputText
        .split(/[\n,;]+/)
        .map(t => t.trim().replace(/^[-*•\d.)\s]+/, ''))
        .filter(t => t.length > 0);

      const added = await vocabService.enrichVocabulary(splitTerms, chosenSource, studentId);
      if (added.length > 0) {
        setItems(prev => [...added, ...prev.filter(p => !added.some(a => a.id === p.id))]);
        setInputText('');
        setCustomSource('');
        setEnrichStatus(`¡Listo! Se guardaron ${added.length} elementos enriquecidos.`);
        setTimeout(() => setEnrichStatus(''), 4000);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Hubo un error al procesar el vocabulario.');
    } finally {
      setIsEnriching(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    await vocabService.deleteItem(id, studentId);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  // Filtered list
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meanings.some(m =>
          m.definitionEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.meaningLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.contextExamples.some(ex => ex.en.toLowerCase().includes(searchQuery.toLowerCase()))
        );

      if (!matchesSearch) return false;

      if (filterType === 'all') return true;
      if (filterType === 'phrasal_verb') return item.type === 'phrasal_verb';
      if (filterType === 'idiom') return item.type === 'idiom' || item.type === 'expression';
      if (filterType === 'word') return item.type === 'word';
      if (filterType === 'multi') return item.isMultiMeaning || item.meanings.length > 1;
      if (filterType === 'needs_review') return item.masteryScore < 60;
      return true;
    });
  }, [items, searchQuery, filterType]);

  // Statistics
  const stats = useMemo(() => {
    const total = items.length;
    const phrasalCount = items.filter(i => i.type === 'phrasal_verb').length;
    const idiomCount = items.filter(i => i.type === 'idiom' || i.type === 'expression').length;
    const multiCount = items.filter(i => i.isMultiMeaning || i.meanings.length > 1).length;
    const avgMastery = total > 0 ? Math.round(items.reduce((acc, i) => acc + (i.masteryScore || 0), 0) / total) : 0;
    const needsReview = items.filter(i => i.masteryScore < 60).length;

    return { total, phrasalCount, idiomCount, multiCount, avgMastery, needsReview };
  }, [items]);

  if (activeView === 'test') {
    return (
      <VocabMemoryTest
        items={items}
        studentId={studentId}
        onBack={() => setActiveView('vault')}
        onFinish={() => {
          loadData();
          setActiveView('vault');
        }}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 animate-in fade-in duration-300">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-bold bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm transition-transform hover:scale-105 w-fit"
        >
          <ArrowLeft className="w-5 h-5" /> Volver al Tablero
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('test')}
            disabled={items.length === 0}
            className={`px-6 py-3 rounded-2xl font-extrabold shadow-lg flex items-center gap-2 text-white transition-all transform hover:scale-105 active:scale-95 ${
              items.length > 0
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-indigo-500/25'
                : 'bg-slate-300 cursor-not-allowed text-slate-500'
            }`}
          >
            <Brain className="w-5 h-5 fill-current" />
            <span>Test de Memoria Activa</span>
            {stats.needsReview > 0 && (
              <span className="bg-amber-400 text-slate-950 text-xs px-2 py-0.5 rounded-full font-black ml-1">
                {stats.needsReview} por repasar
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl border border-indigo-500/20 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Bóveda de Vocabulario Inteligente (Vocab Vault IA)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Guarda lo que escuches. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400">
              La IA desglosa todos sus significados y ejemplos.
            </span>
          </h1>
          <p className="text-indigo-200 text-base sm:text-lg leading-relaxed">
            Ingresa palabras, phrasal verbs o idioms aprendidos en videos de YouTube, podcasts o series. La IA genera automáticamente 3 ejemplos contextuales por cada acepción y prepara tu test de memoria activa.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 relative z-10">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Total Guardado</span>
            <span className="text-3xl font-black text-white">{stats.total}</span>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Phrasal Verbs / Idioms</span>
            <span className="text-3xl font-black text-cyan-400">{stats.phrasalCount + stats.idiomCount}</span>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Polisémicos</span>
            <span className="text-3xl font-black text-amber-300">{stats.multiCount}</span>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">Retención Promedio</span>
            <span className="text-3xl font-black text-emerald-400">{stats.avgMastery}%</span>
          </div>
        </div>
      </div>

      {/* QUICK CAPTURE CARD */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-indigo-100 shadow-xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Ingreso Rápido de Vocabulario</h2>
            <p className="text-sm text-slate-500">Pega un término o varios separados por comas o saltos de línea (ej: <code>take off, hit the sack, break down</code>)</p>
          </div>
        </div>

        <form onSubmit={handleAddAndEnrich} className="space-y-4">
          <div>
            <textarea
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Escribe o pega aquí (ej: take off, spill the beans, look up to, resilient)..."
              rows={2}
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 text-lg font-medium text-slate-800 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Origen / Contexto:</span>
            {PRESET_SOURCES.map(source => (
              <button
                key={source}
                type="button"
                onClick={() => {
                  setSourceNote(source);
                  setCustomSource('');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  sourceNote === source && !customSource
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {source}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="w-full sm:w-72">
              <input
                type="text"
                value={customSource}
                onChange={e => setCustomSource(e.target.value)}
                placeholder="O escribe otro origen personalizado..."
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isEnriching || !inputText.trim()}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-extrabold text-white shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                isEnriching || !inputText.trim()
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-102 shadow-indigo-500/25'
              }`}
            >
              {isEnriching ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Procesando con IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Guardar y Enriquecer con IA</span>
                </>
              )}
            </button>
          </div>

          {/* Status & Feedback */}
          {enrichStatus && (
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-indigo-900 text-sm font-semibold flex items-center gap-2 animate-in fade-in">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
              <span>{enrichStatus}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-sm font-semibold flex items-center gap-2">
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por palabra, significado o ejemplo..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 font-medium text-slate-800 shadow-sm"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              filterType === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Todos ({items.length})
          </button>
          <button
            onClick={() => setFilterType('phrasal_verb')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              filterType === 'phrasal_verb'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Phrasal Verbs ({stats.phrasalCount})
          </button>
          <button
            onClick={() => setFilterType('idiom')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              filterType === 'idiom'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Idioms ({stats.idiomCount})
          </button>
          <button
            onClick={() => setFilterType('multi')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              filterType === 'multi'
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Polisémicos ({stats.multiCount})
          </button>
          <button
            onClick={() => setFilterType('needs_review')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              filterType === 'needs_review'
                ? 'bg-rose-500 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Por Repasar ({stats.needsReview})
          </button>
        </div>
      </div>

      {/* VOCABULARY CARDS LIST */}
      {loading ? (
        <div className="py-20 text-center">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="font-bold text-slate-600 text-lg">Cargando tu Bóveda...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="bg-white rounded-[2.5rem] p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto">
          <BookOpen className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No se encontraron elementos</h3>
          <p className="text-slate-500 mb-6">
            {searchQuery || filterType !== 'all'
              ? 'Prueba cambiando los filtros o la búsqueda.'
              : 'Ingresa tu primera palabra o phrasal verb arriba para empezar.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map(item => {
            const activeMeaningIdx = activeMeaningTabs[item.id] || 0;
            const currentMeaning = item.meanings[activeMeaningIdx] || item.meanings[0];

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-wider rounded-full border border-indigo-100">
                          {item.type.replace('_', ' ')}
                        </span>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                          {item.level}
                        </span>
                        {item.isMultiMeaning && (
                          <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-xs font-extrabold rounded-full flex items-center gap-1 border border-amber-300">
                            <Layers className="w-3 h-3" /> {item.meanings.length} acepciones
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {item.term}
                        </h3>
                        <button
                          onClick={() => handlePlay(item.term, `term_${item.id}`)}
                          className="p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl transition-transform hover:scale-110"
                          title="Escuchar pronunciación"
                        >
                          <Volume2 className={`w-5 h-5 ${audioPlayingId === `term_${item.id}` ? 'text-indigo-800 animate-pulse' : ''}`} />
                        </button>
                      </div>

                      {item.ipa && (
                        <p className="text-slate-400 text-xs font-mono mt-0.5">{item.ipa}</p>
                      )}
                    </div>

                    {/* Mastery pill & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500">Memoria:</span>
                        <span className={`text-xs font-black ${
                          item.masteryScore >= 75
                            ? 'text-emerald-600'
                            : item.masteryScore >= 40
                            ? 'text-amber-600'
                            : 'text-rose-500'
                        }`}>
                          {item.masteryScore}%
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="text-slate-300 hover:text-rose-500 p-1.5 rounded-lg transition-colors"
                        title="Eliminar de la bóveda"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Multi-meaning Tabs */}
                  {item.meanings.length > 1 && (
                    <div className="flex flex-wrap gap-1.5 mb-4 p-1 bg-slate-100 rounded-2xl">
                      {item.meanings.map((m, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveMeaningTabs(prev => ({ ...prev, [item.id]: idx }))}
                          className={`flex-1 min-w-[120px] px-3 py-2 rounded-xl text-xs font-bold text-left transition-all ${
                            activeMeaningIdx === idx
                              ? 'bg-white text-indigo-700 shadow-sm'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <span className="block font-black">Acepción #{idx + 1}</span>
                          <span className="truncate block opacity-80">{m.meaningLabel}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Active Meaning Content */}
                  {currentMeaning && (
                    <div className="space-y-4 mb-6">
                      <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4">
                        <span className="text-xs font-black text-indigo-700 uppercase tracking-wider block mb-1">
                          🎯 {currentMeaning.meaningLabel}
                        </span>
                        <p className="text-slate-800 font-bold text-base leading-snug">
                          {currentMeaning.definitionEs}
                        </p>
                        <p className="text-slate-500 text-xs mt-1 italic">
                          {currentMeaning.definitionEn}
                        </p>
                        {currentMeaning.usageTip && (
                          <div className="mt-2 pt-2 border-t border-indigo-100 text-xs text-indigo-900 flex items-center gap-1.5 font-medium">
                            <Info className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span>{currentMeaning.usageTip}</span>
                          </div>
                        )}
                      </div>

                      {/* 3 Real-life contextual sentences */}
                      <div className="space-y-2">
                        <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                          3 Ejemplos en Contexto:
                        </span>
                        {currentMeaning.contextExamples.map((ex, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-3 border border-slate-200/60 transition-colors flex items-start justify-between gap-3 group"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-bold text-slate-800 leading-snug">
                                "{ex.en}"
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">
                                "{ex.es}"
                              </p>
                            </div>
                            <button
                              onClick={() => handlePlay(ex.en, `ex_${item.id}_${activeMeaningIdx}_${idx}`)}
                              className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg shrink-0 transition-transform group-hover:scale-110"
                              title="Escuchar frase"
                            >
                              <Volume2 className={`w-4 h-4 ${audioPlayingId === `ex_${item.id}_${activeMeaningIdx}_${idx}` ? 'text-indigo-600 animate-pulse' : ''}`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Source note & Mastery Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> {item.sourceNote || 'Añadido libremente'}
                  </span>
                  <span className="font-semibold">
                    {item.reviewCount > 0 ? `Repasado ${item.reviewCount} veces` : 'Nuevo en la bóveda'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
