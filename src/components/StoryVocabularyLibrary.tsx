import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  BookMarked,
  Brain,
  LibraryBig,
  Pencil,
  RefreshCw,
  Share2,
  Sparkles,
  Trash2,
  Trophy,
  Volume2,
  Eye,
} from 'lucide-react';

export type SavedVocabularyWord = {
  id: string;
  english: string;
  spanish: string;
  exampleEn: string;
  exampleEs: string;
  storyTitle: string;
  storyId?: string;
  addedAt: number;
};

type StoryVocabularyLibraryProps = {
  words: SavedVocabularyWord[];
  shared: boolean;
  contextLabel?: string;
  subtitle?: string;
  initialView?: 'library' | 'quiz';
  onBack: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, english: string, spanish: string) => void;
  onImportShared: () => void;
};

const fallbackAnswers = ['casa', 'tiempo', 'trabajo', 'persona', 'lugar', 'ayuda'];

function renderHighlightedSentence(sentence: string, targetWord: string) {
  if (!sentence) return null;
  const cleanTarget = targetWord?.trim() || '';
  if (!cleanTarget) return <span>&ldquo;{sentence}&rdquo;</span>;

  const escaped = cleanTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  let matchPattern = `\\b${escaped}\\b`;
  const testRegex = new RegExp(matchPattern, 'i');

  if (!testRegex.test(sentence)) {
    const words = cleanTarget.split(/\s+/).filter(Boolean);
    if (words.length > 1) {
      const subEscaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
      matchPattern = `\\b(?:${subEscaped})\\w*\\b`;
    } else if (cleanTarget.length >= 3) {
      const stem = cleanTarget.replace(/(?:ing|ed|es|s)$/i, '');
      if (stem.length >= 3) {
        matchPattern = `\\b${stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*\\b`;
      } else {
        matchPattern = escaped;
      }
    } else {
      matchPattern = escaped;
    }
  }

  const splitRegex = new RegExp(`(${matchPattern})`, 'gi');
  const isMatchRegex = new RegExp(`^(${matchPattern})$`, 'i');
  const parts = sentence.split(splitRegex);

  return (
    <span>
      &ldquo;
      {parts.map((part, index) => {
        if (isMatchRegex.test(part)) {
          return (
            <span
              key={index}
              className="rounded-lg bg-yellow-400/25 px-2 py-0.5 font-black text-yellow-300 underline decoration-yellow-400/70 decoration-2 underline-offset-4 shadow-sm"
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
      &rdquo;
    </span>
  );
}

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function encodeVocabulary(words: SavedVocabularyWord[]) {
  const compact = words.map((word) => [word.english, word.spanish]);
  const bytes = new TextEncoder().encode(JSON.stringify(compact));
  let binary = '';
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  document.execCommand('copy');
  field.remove();
}

export function decodeSharedVocabulary(value: string | null): SavedVocabularyWord[] {
  if (!value || value.length > 100_000) return [];
  try {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, 500).flatMap((entry, index) => {
      if (!Array.isArray(entry) || entry.length < 2) return [];
      const [english, spanish, exampleEn = '', exampleEs = ''] = entry.map((item) => String(item || '').slice(0, 500));
      if (!english.trim() || !spanish.trim()) return [];
      return [{
        id: `shared-${index}-${english.toLocaleLowerCase('en-US')}`,
        english,
        spanish,
        exampleEn,
        exampleEs,
        storyTitle: 'Vocabulario compartido',
        addedAt: index
      }];
    });
  } catch {
    return [];
  }
}

export function StoryVocabularyLibrary({ words, shared, contextLabel, subtitle, initialView = 'library', onBack, onDelete, onUpdate, onImportShared }: StoryVocabularyLibraryProps) {
  const [view, setView] = useState<'library' | 'quiz' | 'result'>(initialView === 'quiz' && words.length ? 'quiz' : 'library');
  const [quizWords, setQuizWords] = useState<SavedVocabularyWord[]>(() => initialView === 'quiz' && words.length ? shuffle(words).slice(0, Math.min(words.length, 10)) : []);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answersVisible, setAnswersVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [shareStatus, setShareStatus] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingEnglish, setEditingEnglish] = useState('');
  const [editingSpanish, setEditingSpanish] = useState('');
  const currentWord = quizWords[questionIndex] || null;

  const options = useMemo(() => {
    if (!currentWord) return [];
    const alternatives = Array.from(new Set([
      ...words.filter((word) => word.id !== currentWord.id).map((word) => word.spanish),
      ...fallbackAnswers
    ])).filter((answer) => answer !== currentWord.spanish);
    return shuffle([currentWord.spanish, ...shuffle(alternatives).slice(0, 2)]);
  }, [currentWord, words]);

  const startQuiz = () => {
    if (!words.length) return;
    setQuizWords(shuffle(words).slice(0, Math.min(words.length, 10)));
    setQuestionIndex(0);
    setSelectedAnswer('');
    setAnswersVisible(false);
    setScore(0);
    setView('quiz');
  };

  const chooseAnswer = (answer: string) => {
    if (!currentWord || selectedAnswer) return;
    setSelectedAnswer(answer);
    if (answer === currentWord.spanish) {
      setScore((current) => current + 1);
      confetti({ particleCount: 55, spread: 60, origin: { y: 0.72 }, colors: ['#22d3ee', '#fde047', '#34d399'] });
    }
  };

  const nextQuestion = () => {
    if (questionIndex >= quizWords.length - 1) {
      setView('result');
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelectedAnswer('');
    setAnswersVisible(false);
  };

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  };

  const startEditing = (word: SavedVocabularyWord) => {
    setEditingId(word.id);
    setEditingEnglish(word.english);
    setEditingSpanish(word.spanish);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingEnglish('');
    setEditingSpanish('');
  };

  const saveEditing = () => {
    if (!editingId || !editingEnglish.trim() || !editingSpanish.trim()) return;
    onUpdate(editingId, editingEnglish, editingSpanish);
    cancelEditing();
  };

  const shareLibrary = async () => {
    if (!words.length) return;
    const link = `${window.location.origin}/story-decoder?vocab=${encodeURIComponent(encodeVocabulary(words))}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Mi vocabulario de Story Decoder', text: 'Practica estas palabras conmigo.', url: link });
        setShareStatus('¡Enlace compartido!');
      } else {
        await copyText(link);
        setShareStatus('¡Enlace copiado!');
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      try {
        await copyText(link);
        setShareStatus('¡Enlace copiado!');
      } catch {
        setShareStatus('No se pudo copiar');
      }
    }
    window.setTimeout(() => setShareStatus(''), 2400);
  };

  if (view === 'quiz' && currentWord) {
    const answeredCorrectly = selectedAnswer === currentWord.spanish;
    return (
      <div className="fixed inset-0 z-50 flex min-h-0 flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-cyan-950 text-white">
        <header className="shrink-0 border-b border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl items-center gap-3">
            <button type="button" onClick={() => setView('library')} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 hover:bg-white hover:text-slate-950" aria-label="Volver al vocabulario"><ArrowLeft className="h-6 w-6" /></button>
            <div className="min-w-0 flex-1"><div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{contextLabel ? `Repaso de ${contextLabel}` : 'Test de memoria'}</div><div className="text-xl font-black">¿Qué significa esta palabra?</div></div>
            <div className="rounded-xl bg-white/10 px-4 py-2 text-lg font-black text-yellow-300">{questionIndex + 1}/{quizWords.length}</div>
          </div>
          <div className="mx-auto mt-3 h-2 max-w-5xl overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300" animate={{ width: `${((questionIndex + 1) / quizWords.length) * 100}%` }} /></div>
        </header>
        <main className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-4 sm:p-8">
          <motion.section key={currentWord.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl rounded-[2.5rem] border border-white/15 bg-white/[0.08] p-5 text-center shadow-2xl backdrop-blur-xl sm:p-10">
            <button type="button" onClick={() => speak(currentWord.english)} className="mx-auto flex min-h-14 items-center gap-3 rounded-2xl bg-cyan-300/15 px-5 font-black text-cyan-100 transition hover:bg-cyan-300 hover:text-cyan-950"><Volume2 className="h-6 w-6" /> Escuchar</button>
            <h1 className="mt-6 text-[clamp(3rem,9vw,6.5rem)] font-black leading-tight tracking-tight text-white">{currentWord.english}</h1>
            {currentWord.exampleEn && (
              <div className="mx-auto mt-4 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300/80 mb-1.5">Frase de la historia</p>
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-indigo-100/90">
                  {renderHighlightedSentence(currentWord.exampleEn, currentWord.english)}
                </p>
              </div>
            )}
            {!answersVisible ? (
              <button type="button" onClick={() => setAnswersVisible(true)} className="mx-auto mt-7 flex min-h-20 w-full max-w-3xl items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-6 text-2xl font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:from-yellow-200 hover:to-orange-300"><Eye className="h-8 w-8" /> Ver posibles respuestas</button>
            ) : (
              <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
                {options.map((answer) => {
                  const chosen = selectedAnswer === answer;
                  const correct = selectedAnswer && answer === currentWord.spanish;
                  return <button key={answer} type="button" disabled={Boolean(selectedAnswer)} onClick={() => chooseAnswer(answer)} className={`min-h-24 rounded-2xl border-2 p-4 text-xl font-black transition ${correct ? 'border-emerald-200 bg-emerald-400 text-emerald-950' : chosen ? 'border-rose-200 bg-rose-500 text-white' : 'border-white/15 bg-white text-slate-950 hover:-translate-y-1 hover:border-yellow-300'}`}>{answer}</button>;
                })}
              </div>
            )}
            {selectedAnswer && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`mx-auto mt-5 max-w-3xl rounded-2xl p-4 text-lg font-black ${answeredCorrectly ? 'bg-emerald-300 text-emerald-950' : 'bg-rose-500 text-white'}`}>
                {answeredCorrectly ? '¡Correcto! La recordaste.' : `La respuesta correcta es: ${currentWord.spanish}`}
              </motion.div>
            )}
            {selectedAnswer && <button type="button" onClick={nextQuestion} className="mt-5 min-h-14 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-8 text-lg font-black text-slate-950 shadow-xl">{questionIndex === quizWords.length - 1 ? 'Ver resultado' : 'Siguiente palabra'}</button>}
          </motion.section>
        </main>
      </div>
    );
  }

  if (view === 'result') {
    const percentage = quizWords.length ? Math.round((score / quizWords.length) * 100) : 0;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 p-4 text-white">
        <motion.section initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl rounded-[2.5rem] border border-white/15 bg-white/10 p-7 text-center shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-yellow-300 text-yellow-950 shadow-xl"><Trophy className="h-12 w-12" /></div>
          <div className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Repaso completado</div>
          <h1 className="mt-2 text-6xl font-black">{score}/{quizWords.length}</h1>
          <p className="mt-3 text-xl font-bold text-white/70">Recordaste correctamente el {percentage}%.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={startQuiz} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 font-black text-slate-950"><RefreshCw className="h-5 w-5" /> Repetir test</button>
            <button type="button" onClick={() => setView('library')} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 font-black hover:bg-white hover:text-slate-950"><LibraryBig className="h-5 w-5" /> Ver mis palabras</button>
          </div>
        </motion.section>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50 text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <button type="button" onClick={onBack} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-950 hover:text-white" aria-label="Volver"><ArrowLeft className="h-6 w-6" /></button>
          <div className="min-w-0 flex-1"><div className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500">{contextLabel ? 'Repaso de historia' : shared ? 'Colección compartida' : 'Mi vocabulario'}</div><div className="truncate text-xl font-black sm:text-3xl">{contextLabel || 'Palabras aprendidas'}</div></div>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-black text-indigo-800">{words.length} palabras</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 p-6 text-white shadow-2xl sm:p-9">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div><div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-200"><BookMarked className="h-4 w-4" /> Tu memoria en crecimiento</div><h1 className="mt-4 text-[clamp(2.4rem,6vw,5rem)] font-black leading-none">{contextLabel || 'Guarda. Recuerda. Usa.'}</h1><p className="mt-3 max-w-2xl text-lg font-semibold text-white/70">{subtitle || 'Repasa el significado y comprueba tu memoria con preguntas rápidas de tres opciones.'}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <button type="button" disabled={!words.length} onClick={startQuiz} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-6 text-lg font-black text-slate-950 shadow-xl disabled:opacity-40"><Brain className="h-6 w-6" /> Test de memoria</button>
              {shared ? <button type="button" onClick={onImportShared} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-6 font-black text-emerald-950"><BookMarked className="h-5 w-5" /> Guardar en mi vocabulario</button> : <button type="button" disabled={!words.length} onClick={shareLibrary} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 font-black transition hover:bg-white hover:text-slate-950 disabled:opacity-40"><Share2 className="h-5 w-5" /> {shareStatus || 'Compartir enlace'}</button>}
            </div>
          </div>
        </section>

        {!words.length ? (
          <div className="mt-6 flex min-h-[360px] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-indigo-200 bg-white p-8 text-center"><Sparkles className="h-12 w-12 text-indigo-300" /><h2 className="mt-4 text-2xl font-black">{contextLabel ? 'Todavía no hay palabras guardadas en esta historia' : 'Aún no has guardado palabras o expresiones'}</h2><p className="mt-2 max-w-lg font-semibold text-slate-500">{contextLabel ? 'Guarda una palabra o expresión desde la historia y luego vuelve aquí para practicarla.' : 'Completa una frase de Story Decoder y pulsa “Guardar palabra / frase”.'}</p></div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {words.map((word, index) => (
              <motion.article key={word.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.025, 0.3) }} className="group relative overflow-hidden rounded-[1.75rem] border border-indigo-100 bg-white p-5 shadow-lg shadow-indigo-950/5">
                <div className="flex items-start gap-3">
                  <button type="button" onClick={() => speak(word.english)} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800 transition hover:bg-cyan-500 hover:text-white" aria-label={`Escuchar ${word.english}`}><Volume2 className="h-5 w-5" /></button>
                  <div className="min-w-0 flex-1">
                    {editingId === word.id ? (
                      <div className="space-y-2">
                        <input value={editingEnglish} onChange={(event) => setEditingEnglish(event.target.value)} className="min-h-11 w-full rounded-xl border-2 border-indigo-200 px-3 text-xl font-black outline-none focus:border-indigo-500" aria-label="Editar palabra en inglés" />
                        <input value={editingSpanish} onChange={(event) => setEditingSpanish(event.target.value)} className="min-h-11 w-full rounded-xl border-2 border-indigo-200 px-3 text-lg font-black text-indigo-700 outline-none focus:border-indigo-500" aria-label="Editar significado en español" />
                      </div>
                    ) : (
                      <><h2 className="break-words text-2xl font-black text-slate-950">{word.english}</h2><p className="mt-1 text-lg font-black text-indigo-700">{word.spanish}</p></>
                    )}
                  </div>
                </div>
                {word.exampleEn && <div className="mt-4 rounded-xl bg-slate-50 p-3"><p className="font-bold text-slate-800">{word.exampleEn}</p><p className="mt-1 text-sm font-semibold text-slate-500">{word.exampleEs}</p></div>}
                {!shared && (
                  <div className="mt-4 flex justify-end">
                    {editingId === word.id ? <div className="flex gap-2"><button type="button" onClick={cancelEditing} className="min-h-11 rounded-xl bg-slate-100 px-4 font-black text-slate-700">Cancelar</button><button type="button" onClick={saveEditing} disabled={!editingEnglish.trim() || !editingSpanish.trim()} className="min-h-11 rounded-xl bg-emerald-500 px-4 font-black text-white disabled:opacity-40">Guardar cambios</button></div> : <div className="flex gap-2"><button type="button" onClick={() => startEditing(word)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 font-black text-indigo-700 transition hover:bg-indigo-500 hover:text-white" aria-label={`Editar ${word.english}`}><Pencil className="h-4 w-4" /> Editar</button><button type="button" onClick={() => onDelete(word.id)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 font-black text-rose-700 transition hover:bg-rose-500 hover:text-white" aria-label={`Eliminar ${word.english}`}><Trash2 className="h-4 w-4" /> Eliminar</button></div>}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
