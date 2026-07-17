import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  RefreshCw,
  ChevronRight,
  BookOpen,
  Map,
  Wand2,
  Eye,
  CheckCircle2,
  PenLine,
  Shuffle,
  Clapperboard
} from 'lucide-react';
import { storyImages, storyPrompts, storyVocabWords, storyStructures, StoryAsset, StoryStructure } from '../data/storyAssets';

interface StoryForgeProps {
  onClose: () => void;
}

const typeLabels: Record<StoryAsset['type'], string> = {
  character: 'Character',
  object: 'Object',
  place: 'Place',
  animal: 'Animal'
};

const vocabTranslations: Record<string, string> = {
  Suddenly: 'De repente',
  Meanwhile: 'Mientras tanto',
  Unfortunately: 'Desafortunadamente',
  Luckily: 'Por suerte',
  Eventually: 'Finalmente',
  Therefore: 'Por lo tanto',
  However: 'Sin embargo',
  Although: 'Aunque',
  'Because of': 'Debido a',
  Afterwards: 'Después',
  'Out of nowhere': 'De la nada',
  'To my surprise': 'Para mi sorpresa',
  'In the blink of an eye': 'En un abrir y cerrar de ojos',
  'As a result': 'Como resultado',
  'In addition': 'Además',
  'Believe it or not': 'Aunque no lo creas',
  'For instance': 'Por ejemplo',
  'On the other hand': 'Por otro lado',
  'At that moment': 'En ese momento',
  'In the end': 'Al final'
};

export function StoryForge({ onClose }: StoryForgeProps) {
  const [images, setImages] = useState<StoryAsset[]>([]);
  const [prompt, setPrompt] = useState('');
  const [vocab, setVocab] = useState<string[]>([]);
  const [structure, setStructure] = useState<StoryStructure | null>(null);
  const [revealedImageId, setRevealedImageId] = useState<string | null>(null);
  const [selectedImageIds, setSelectedImageIds] = useState<Set<string>>(new Set());
  const [activeVocab, setActiveVocab] = useState<string | null>(null);
  const [notes, setNotes] = useState<string[]>(['', '', '', '']);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const generateStoryBoard = () => {
    setRevealedImageId(null);
    setSelectedImageIds(new Set());
    setActiveVocab(null);
    setNotes(['', '', '', '']);
    setImages(shuffleArray(storyImages).slice(0, 5));
    setPrompt(shuffleArray(storyPrompts)[0]);
    setVocab(shuffleArray(storyVocabWords).slice(0, 5));
    setStructure(shuffleArray(storyStructures)[0]);
  };

  useEffect(() => {
    generateStoryBoard();
  }, []);

  const toggleSelectedImage = (asset: StoryAsset) => {
    setSelectedImageIds(prev => {
      const next = new Set(prev);
      if (next.has(asset.id)) next.delete(asset.id);
      else next.add(asset.id);
      return next;
    });
  };

  const selectedAssets = images.filter(img => selectedImageIds.has(img.id));

  return (
    <div className="fixed inset-0 bg-[#f7f6f2] z-50 overflow-hidden">
      <div className="h-screen relative p-3 sm:p-4">
        <button
          onClick={onClose}
          className="fixed top-3 right-3 p-2.5 bg-white rounded-full text-gray-500 hover:text-red-500 shadow-sm border border-gray-200 hover:bg-red-50 transition-colors z-20"
          aria-label="Cerrar StoryForge"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-full max-w-[1600px] mx-auto flex flex-col">
          <header className="grid grid-cols-[1fr_auto] gap-3 items-center mb-3 pr-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-200 px-3 py-1.5 text-amber-700 font-black text-[10px] uppercase tracking-[0.2em] shadow-sm">
                <Wand2 className="w-4 h-4" />
                Story builder
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">StoryForge</h2>
            </div>

            <button
              onClick={generateStoryBoard}
              className="group flex items-center justify-center gap-2 bg-slate-950 text-white px-4 py-3 rounded-2xl font-black text-sm shadow-lg hover:bg-slate-800 transition-all active:scale-95"
            >
              <Shuffle className="w-5 h-5 group-active:animate-spin" />
              Nueva
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </header>

          <section className="min-h-0 flex-1 grid grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] gap-4">
            <div className="min-h-0 grid grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-[0.2em]">
                      <BookOpen className="w-4 h-4" />
                      Mission prompt
                    </div>
                    <p className="mt-1 text-lg sm:text-xl lg:text-2xl font-black text-slate-950 leading-tight">"{prompt}"</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], y: [0, -4, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="hidden sm:flex h-10 w-10 rounded-xl bg-amber-100 text-amber-700 items-center justify-center shrink-0"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </div>

                {structure && (
                  <div className="px-4 py-2.5 bg-slate-50 flex items-center gap-3">
                    <div className="flex items-center gap-2 text-slate-700 font-black text-[10px] uppercase tracking-[0.18em] shrink-0">
                      <Map className="w-4 h-4" />
                      Structure: {structure.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-semibold truncate">{structure.focus}</p>
                  </div>
                )}
              </div>

              <div className="min-h-0 bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em]">
                      <Clapperboard className="w-4 h-4" />
                      Scene cards
                    </div>
                  </div>
                  <div className="rounded-xl bg-indigo-50 px-3 py-1.5 text-indigo-700 font-black text-xs">
                    {selectedImageIds.size}/5
                  </div>
                </div>

                <div className="min-h-0 flex-1 grid grid-cols-5 gap-3">
                  <AnimatePresence mode="popLayout">
                    {images.map((img, idx) => {
                      const isSelected = selectedImageIds.has(img.id);
                      const isRevealed = revealedImageId === img.id;
                      return (
                        <motion.article
                          key={img.id}
                          initial={{ opacity: 0, scale: 0.9, y: 18 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25, delay: idx * 0.05 }}
                          className={`relative overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all min-w-0 ${isSelected ? 'border-emerald-400 ring-4 ring-emerald-100' : 'border-slate-100 hover:border-indigo-200'}`}
                        >
                          <button type="button" onClick={() => toggleSelectedImage(img)} className="block w-full text-left">
                            <div className="h-[clamp(120px,28vh,230px)] overflow-hidden bg-slate-100">
                              <img src={img.url} alt={img.en} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            </div>
                            <div className="p-2">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">{typeLabels[img.type]}</span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                              </div>
                              <p className="mt-1 text-[12px] lg:text-sm font-black text-slate-900 leading-tight line-clamp-2">{img.en}</p>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => setRevealedImageId(isRevealed ? null : img.id)}
                            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 text-slate-700 shadow-sm flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                            aria-label="Mostrar traducción"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <AnimatePresence>
                            {isRevealed && (
                              <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12 }}
                                className="absolute inset-x-2 bottom-2 rounded-xl bg-slate-950/90 p-2 text-white shadow-lg"
                              >
                                <p className="text-xs font-black">{img.es}</p>
                                <p className="mt-0.5 text-[10px] text-amber-200 line-clamp-2">{img.cue}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.article>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-3">
                <div className="flex items-center gap-2 text-emerald-700 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                  <Sparkles className="w-4 h-4" />
                  Wildcard connectors
                </div>
                <div className="flex flex-wrap gap-2">
                  {vocab.map((word) => {
                    const isActive = activeVocab === word;
                    return (
                      <button
                        key={word}
                        type="button"
                        onClick={() => setActiveVocab(isActive ? null : word)}
                        className={`min-h-9 rounded-xl border px-3 py-1.5 text-left shadow-sm transition-all ${isActive ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-100 text-slate-800 hover:border-emerald-200'}`}
                      >
                        <span className="block text-xs font-black">{word}</span>
                        {isActive && <span className="block text-[10px] font-bold text-emerald-600">{vocabTranslations[word]}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="min-h-0 bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 text-slate-700 font-black text-[10px] uppercase tracking-[0.2em]">
                    <PenLine className="w-4 h-4" />
                    Story workspace
                  </div>
                  <p className="mt-1 text-xs font-semibold text-slate-500">Ideas rápidas para contar oralmente.</p>
                </div>
              </div>

              {selectedAssets.length > 0 && (
                <div className="mb-3 rounded-xl bg-amber-50 border border-amber-100 p-2">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAssets.map(asset => (
                      <span key={asset.id} className="rounded-full bg-white border border-amber-100 px-2 py-1 text-[10px] font-black text-amber-900">
                        {asset.en}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="min-h-0 flex-1 grid grid-rows-4 gap-2">
                {(structure?.steps || []).map((step, idx) => (
                  <motion.div
                    key={`${step}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="min-h-0 rounded-xl border border-slate-100 bg-slate-50 p-3"
                  >
                    <div className="flex items-start gap-2 h-full">
                      <div className="h-7 w-7 rounded-lg bg-slate-950 text-white flex items-center justify-center text-xs font-black shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0 flex-1 h-full">
                        <p className="text-xs font-black text-slate-900 line-clamp-2">{step}</p>
                        <textarea
                          value={notes[idx] || ''}
                          onChange={(event) => {
                            const next = [...notes];
                            next[idx] = event.target.value;
                            setNotes(next);
                          }}
                          rows={1}
                          placeholder="Write your idea in English..."
                          className="mt-2 w-full h-9 resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 outline-none transition-colors focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 rounded-xl bg-slate-950 p-3 text-white">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">Speaking challenge</div>
                <p className="mt-1 text-xs font-semibold leading-snug text-slate-100">
                  Tell the story in 90 seconds. Use at least 3 scene cards, 2 connectors, and the full structure.
                </p>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}
