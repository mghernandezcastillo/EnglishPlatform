import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, Download, FileText, MessageCircle, Search, Share2, Sparkles } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';
import { useBrand } from '../hooks/useBrand';

type VerbGuideItem = {
  source_doc: string;
  category: 'common_verb' | 'irregular_verb' | 'phrasal_verb' | 'idiom';
  term: string;
  base_verb?: string | null;
  past?: string | null;
  past_participle?: string | null;
  meaning_es?: string | null;
  definition_en?: string | null;
  example_en?: string | null;
  notes?: string | null;
  source_page?: number | null;
  raw_text?: string | null;
};

const PDF_URL = '/VERBS/MAVEN_ENGLISH_VERBS_GUIDE.pdf';
const DATA_URL = '/data/verbs-guide.json';

const categories = [
  { id: 'all', label: 'Todo', short: 'Todo' },
  { id: 'common_verb', label: 'Common verbs', short: 'Verbs' },
  { id: 'irregular_verb', label: 'Irregular verbs', short: 'Irregular' },
  { id: 'phrasal_verb', label: 'Phrasal verbs', short: 'Phrasals' },
  { id: 'idiom', label: 'Idioms', short: 'Idioms' },
] as const;

const categoryLabel: Record<VerbGuideItem['category'], string> = {
  common_verb: 'Common verb',
  irregular_verb: 'Irregular verb',
  phrasal_verb: 'Phrasal verb',
  idiom: 'Idiom',
};

const categoryStyle: Record<VerbGuideItem['category'], string> = {
  common_verb: 'bg-blue-50 text-blue-700 ring-blue-100',
  irregular_verb: 'bg-violet-50 text-violet-700 ring-violet-100',
  phrasal_verb: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  idiom: 'bg-amber-50 text-amber-700 ring-amber-100',
};

function normalize(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function countByCategory(items: VerbGuideItem[]) {
  return items.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
}

interface VerbsGuideProps {
  onBack?: () => void;
}

export function VerbsGuide({ onBack }: VerbsGuideProps) {
  const { brand } = useBrand();
  const [items, setItems] = useState<VerbGuideItem[]>([]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]['id']>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((data: VerbGuideItem[]) => {
        if (!cancelled) setItems(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const counts = useMemo(() => countByCategory(items), [items]);
  const filteredItems = useMemo(() => {
    const cleanQuery = normalize(query.trim());
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!cleanQuery) return true;

      const searchable = [
        item.term,
        item.base_verb,
        item.past,
        item.past_participle,
        item.meaning_es,
        item.definition_en,
        item.example_en,
      ].filter(Boolean).join(' ');

      return normalize(searchable).includes(cleanQuery);
    });
  }, [activeCategory, items, query]);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/verbs` : '/verbs';
  const shareText = `Maven English Verb Guide: verbos, irregular verbs, phrasal verbs e idioms con ejemplos. ${shareUrl}`;

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank', 'noopener,noreferrer');
  };

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Maven English Verb Guide',
        text: 'Verbos, phrasal verbs e idioms organizados para estudiar.',
        url: shareUrl,
      });
      return;
    }
    shareWhatsApp();
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = 'MAVEN_ENGLISH_VERBS_GUIDE.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
                aria-label="Volver"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {brand.logoUrl && (
              <img src={brand.logoUrl} alt={brand.name} className="h-11 w-11 rounded-2xl object-contain shadow-sm" />
            )}
            <BrandWordmark name="MAVEN ENGLISH" subtitle="Verb Guide" compact />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={shareWhatsApp}
              className="hidden rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-emerald-700 sm:inline-flex sm:items-center sm:gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
            <button
              onClick={downloadPdf}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-300/60">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 text-white sm:p-8 lg:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-100 ring-1 ring-white/10">
                <Sparkles className="h-4 w-4" />
                Study smarter
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Verbos, idioms y phrasal verbs en una guía práctica.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-300 sm:text-lg">
                Busca por verbo, significado, forma en pasado o ejemplo. Diseñado para repasar rápido desde celular antes o después de clase.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={shareNative}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-base font-black text-slate-950 shadow-lg transition hover:bg-cyan-50"
                >
                  <Share2 className="h-5 w-5" />
                  Compartir guía
                </button>
                <button
                  onClick={downloadPdf}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-base font-black text-slate-950 shadow-lg shadow-cyan-900/20 transition hover:bg-cyan-300"
                >
                  <FileText className="h-5 w-5" />
                  Descargar PDF
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 p-5 sm:p-7 lg:p-10">
              <div className="grid h-full min-h-[280px] content-center gap-3 rounded-[1.5rem] bg-white/12 p-5 text-white ring-1 ring-white/25 backdrop-blur">
                <div className="grid grid-cols-2 gap-3">
                  {categories.filter((category) => category.id !== 'all').map((category) => (
                    <div key={category.id} className="rounded-3xl bg-white/90 p-4 text-slate-950 shadow-sm">
                      <div className="text-3xl font-black">{counts[category.id] || 0}</div>
                      <div className="mt-1 text-xs font-black uppercase tracking-wider text-slate-500">{category.short}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl bg-slate-950/85 p-5 shadow-sm">
                  <div className="text-sm font-black uppercase tracking-wider text-cyan-200">Total words & expressions</div>
                  <div className="mt-1 text-5xl font-black">{items.length || 270}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[69px] z-20 -mx-4 mt-5 border-y border-slate-200 bg-[#f5f7fb]/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-3xl sm:border sm:shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar: go, went, levantarse, get away..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-base font-bold text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`h-12 shrink-0 rounded-2xl px-4 text-sm font-black transition ${
                    activeCategory === category.id
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-950'
                  }`}
                >
                  {category.short}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm font-bold text-slate-500">
            <span>{loading ? 'Cargando guía...' : `${filteredItems.length} resultados`}</span>
            <span className="hidden sm:inline">PDF original incluido</span>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <article key={`${item.category}-${item.term}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ring-1 ${categoryStyle[item.category]}`}>
                    {categoryLabel[item.category]}
                  </span>
                  <h2 className="mt-3 text-3xl font-black leading-none tracking-tight text-slate-950">{item.term}</h2>
                </div>
                {item.source_page && (
                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                    p. {item.source_page}
                  </span>
                )}
              </div>

              {(item.base_verb || item.past || item.past_participle) && (
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verb</div>
                    <div className="mt-1 break-words text-base font-black text-slate-900">{item.base_verb || item.term}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Past</div>
                    <div className="mt-1 break-words text-base font-black text-slate-900">{item.past || '-'}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Participle</div>
                    <div className="mt-1 break-words text-base font-black text-slate-900">{item.past_participle || '-'}</div>
                  </div>
                </div>
              )}

              {item.meaning_es && (
                <p className="mb-3 rounded-2xl bg-blue-50 p-4 text-lg font-black leading-snug text-blue-950">
                  {item.meaning_es}
                </p>
              )}
              {item.definition_en && (
                <p className="text-base font-semibold leading-7 text-slate-700">{item.definition_en}</p>
              )}
              {item.example_en && (
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">Example</div>
                  <p className="text-base font-bold leading-7 text-slate-900">{item.example_en}</p>
                </div>
              )}
            </article>
          ))}
        </section>

        {!loading && filteredItems.length === 0 && (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <BookOpen className="mx-auto mb-3 h-10 w-10 text-slate-300" />
            <h2 className="text-2xl font-black text-slate-900">No encontré resultados</h2>
            <p className="mt-2 font-semibold text-slate-500">Prueba otra palabra o cambia el filtro.</p>
          </div>
        )}
      </main>
    </div>
  );
}
