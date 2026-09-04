import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  BookmarkPlus,
  CheckCircle2,
  Ear,
  Eye,
  EyeOff,
  Flame,
  HelpCircle,
  Layers3,
  Mic,
  PenTool,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  XCircle,
  Zap
} from 'lucide-react';
import { CURATED_BLOCK_PRACTICE_DATA, CuratedPracticeItem } from '../data/storyBlockPracticeData';
import { VocabularyCaptureModal } from './StoryDecoder';
import { type SavedVocabularyWord } from './StoryVocabularyLibrary';
import { findStoryWordTranslation } from '../data/storyDecoderTranslations';
import { chunkSentenceIntoBlocks } from '../lib/sentenceChunker';

export type DecoderPuzzle = {
  easy_blocks: string[];
  medium_blocks: string[];
  hard_word_by_word: string[];
  expert_with_distractors: string[];
  shuffle_on_each_attempt?: boolean;
};

export type DecoderLine = {
  line_id: string;
  line_role?: string;
  es: string;
  en: string;
  preferred_answer: string;
  accepted_answers: string[];
  lesson_target: string;
  grammar_focus: string;
  pattern: string;
  focus_tokens: string[];
  difficulty: number;
  puzzle: DecoderPuzzle;
  common_errors: string[];
  hints: string[];
  tutor_explanation: string;
  distractors?: string[];
};

export type DecoderLesson = {
  lesson_id: number;
  lesson_number_in_block: number;
  topic: string;
  pattern: string;
  learning_goal: string;
  confuses_with: string[];
};

export type DecoderBlock = {
  block_id: number;
  name: string;
  description: string;
  lesson_count: number;
  lessons: DecoderLesson[];
};

interface StoryBlockPracticeProps {
  block: DecoderBlock;
  studentId?: string | null;
  vocabulary?: SavedVocabularyWord[];
  onSaveVocabulary?: (english: string, spanish: string) => void;
  onDeleteVocabulary?: (id: string) => void;
  onOpenVocabularyLibrary?: () => void;
  onClose: () => void;
}

type Polarity = 'affirmative' | 'negative' | 'interrogative';
type StationTab = 'translation' | 'writing' | 'listening' | 'infinite';

function playSound(type: 'correct' | 'wrong' | 'streak' | 'finish' | 'reveal') {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === 'reveal') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(140, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'streak') {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + idx * 0.08 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.15);
      });
    }
  } catch {
    // Audio Context fallback
  }
}

function speakText(text: string) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } catch {
    // TTS fallback
  }
}

function autoChunkSentence(englishSentence: string): string[] {
  return chunkSentenceIntoBlocks(englishSentence);
}

export const StoryBlockPractice: React.FC<StoryBlockPracticeProps> = ({
  block,
  studentId,
  vocabulary = [],
  onSaveVocabulary,
  onDeleteVocabulary,
  onOpenVocabularyLibrary,
  onClose
}) => {
  const [activePolarity, setActivePolarity] = useState<Polarity>('affirmative');
  const [activeStation, setActiveStation] = useState<StationTab>('translation');
  
  // Translation Station State
  const [translationIndex, setTranslationIndex] = useState(0);
  const [selectedTokenIndexes, setSelectedTokenIndexes] = useState<number[]>([]);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [useChunksMode, setUseChunksMode] = useState(true);
  const [translationFeedback, setTranslationFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  
  // Vocabulary Capture Modal State
  const [vocabCaptureTarget, setVocabCaptureTarget] = useState<CuratedPracticeItem | null>(null);

  // Image Error Map State
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  // Writing Station State
  const [userWritingInput, setUserWritingInput] = useState('');
  const [customSentences, setCustomSentences] = useState<string[]>([]);

  // Listening Station State
  const [listeningIndex, setListeningIndex] = useState(0);
  const [isEnglishTextRevealed, setIsEnglishTextRevealed] = useState(false);

  // Infinite Quiz Station State
  const [infiniteIndex, setInfiniteIndex] = useState(0);
  const [infiniteIsRevealed, setInfiniteIsRevealed] = useState(false);
  const [infiniteSelectedOption, setInfiniteSelectedOption] = useState<number | null>(null);
  const [infiniteIsCorrect, setInfiniteIsCorrect] = useState<boolean | null>(null);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const mainContainerRef = useRef<HTMLDivElement | null>(null);

  // Load block curated items
  const blockCuratedItems = CURATED_BLOCK_PRACTICE_DATA[block.block_id] || CURATED_BLOCK_PRACTICE_DATA[1];
  
  // Filter items by polarity
  const itemsByPolarity = blockCuratedItems.filter((it) => it.polarity === activePolarity);
  const currentItems = itemsByPolarity.length > 0 ? itemsByPolarity : blockCuratedItems;

  const currentTranslationItem = currentItems[translationIndex % currentItems.length];
  const currentListeningItem = currentItems[listeningIndex % currentItems.length];
  const currentInfiniteItem = currentItems[infiniteIndex % currentItems.length];

  // Tokenize translation item: meaningfully grouped blocks or individual words
  const translationTokens = React.useMemo(() => {
    if (!currentTranslationItem) return [];
    
    // If chunks mode is active, use explicit blocks or auto-chunk into 3-4 natural blocks
    if (useChunksMode) {
      if (currentTranslationItem.blocks && currentTranslationItem.blocks.length > 0) {
        return [...currentTranslationItem.blocks].sort(() => Math.random() - 0.5);
      }
      return autoChunkSentence(currentTranslationItem.englishFull).sort(() => Math.random() - 0.5);
    }

    // Otherwise split sentence by words
    return currentTranslationItem.englishFull.split(' ').sort(() => Math.random() - 0.5);
  }, [currentTranslationItem, useChunksMode]);

  // Reset selected tokens when sentence, mode or polarity changes
  useEffect(() => {
    setSelectedTokenIndexes([]);
    setWordsRevealed(false);
    setTranslationFeedback('idle');
    setIsEnglishTextRevealed(false);
    setInfiniteIsRevealed(false);
    setInfiniteSelectedOption(null);
    setInfiniteIsCorrect(null);
  }, [translationIndex, listeningIndex, infiniteIndex, activePolarity, activeStation, useChunksMode]);

  // Handle selecting an available token by index
  const handleSelectAvailableToken = (tokenIndex: number) => {
    if (translationFeedback === 'correct') return;
    setSelectedTokenIndexes((prev) => [...prev, tokenIndex]);
  };

  // Handle removing a token from selected slots by its position in the selected array
  const handleRemoveSelectedToken = (posInSelected: number) => {
    if (translationFeedback === 'correct') return;
    setSelectedTokenIndexes((prev) => prev.filter((_, i) => i !== posInSelected));
  };

  const handleResetSelectedTokens = () => {
    if (translationFeedback === 'correct') return;
    setSelectedTokenIndexes([]);
  };

  const checkTranslationAnswer = () => {
    const userBuilt = selectedTokenIndexes.map((idx) => translationTokens[idx]).join(' ').trim().toLowerCase().replace(/[.,?!]/g, '');
    const target = currentTranslationItem.englishFull.trim().toLowerCase().replace(/[.,?!]/g, '');

    if (userBuilt === target) {
      setTranslationFeedback('correct');
      setStreak((s) => s + 1);
      setScore((sc) => sc + 150);
      playSound('correct');
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      speakText(currentTranslationItem.englishFull);
    } else {
      setTranslationFeedback('wrong');
      setStreak(0);
      playSound('wrong');
    }
  };

  const handleSaveCustomWriting = () => {
    if (!userWritingInput.trim()) return;
    setCustomSentences((prev) => [userWritingInput.trim(), ...prev]);
    setScore((sc) => sc + 200);
    playSound('correct');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const handleInfiniteSelect = (idx: number) => {
    if (infiniteIsCorrect !== null) return;
    setInfiniteSelectedOption(idx);
    const correct = idx === (currentInfiniteItem.coreOptions ? currentInfiniteItem.coreOptions.indexOf(currentInfiniteItem.coreTargetValue || '') : 0);

    if (correct) {
      setInfiniteIsCorrect(true);
      setStreak((s) => s + 1);
      setScore((sc) => sc + 150);
      playSound('correct');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      speakText(currentInfiniteItem.englishFull);
    } else {
      setInfiniteIsCorrect(false);
      setStreak(0);
      playSound('wrong');
    }
  };

  // Available tokens not yet selected
  const availableTokensList = translationTokens
    .map((text, idx) => ({ text, idx }))
    .filter(({ idx }) => !selectedTokenIndexes.includes(idx));

  return (
    <div ref={mainContainerRef} className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_70%)]" />

      {/* Vocabulary Capture Modal Popup */}
      {vocabCaptureTarget && (
        <VocabularyCaptureModal
          line={{
            line_id: vocabCaptureTarget.id,
            line_role: 'target',
            en: vocabCaptureTarget.englishFull,
            es: vocabCaptureTarget.spanish,
            preferred_answer: vocabCaptureTarget.englishFull,
            accepted_answers: [vocabCaptureTarget.englishFull],
            lesson_target: vocabCaptureTarget.lessonTopic,
            grammar_focus: vocabCaptureTarget.lessonTopic,
            pattern: vocabCaptureTarget.englishFull,
            focus_tokens: vocabCaptureTarget.englishFull.split(' '),
            difficulty: 1,
            puzzle: {
              easy_blocks: vocabCaptureTarget.blocks || [vocabCaptureTarget.englishFull],
              medium_blocks: vocabCaptureTarget.englishFull.split(' '),
              hard_word_by_word: vocabCaptureTarget.englishFull.split(' '),
              expert_with_distractors: vocabCaptureTarget.englishFull.split(' '),
              shuffle_on_each_attempt: true
            },
            common_errors: [],
            hints: [],
            tutor_explanation: vocabCaptureTarget.explanation,
            vocabulary_candidates: vocabCaptureTarget.blocks || vocabCaptureTarget.englishFull.split(' ')
          }}
          savedWords={vocabulary}
          showEnglishContext={true}
          getSuggestion={(word) => findStoryWordTranslation(word) || vocabCaptureTarget.spanish}
          verbBaseForms={{}}
          onSave={(english, spanish) => {
            if (onSaveVocabulary) onSaveVocabulary(english, spanish);
          }}
          onDelete={(id) => {
            if (onDeleteVocabulary) onDeleteVocabulary(id);
          }}
          onClose={() => setVocabCaptureTarget(null)}
          onOpenLibrary={() => {
            setVocabCaptureTarget(null);
            if (onOpenVocabularyLibrary) onOpenVocabularyLibrary();
          }}
        />
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white hover:text-slate-950 cursor-pointer"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-cyan-300">
                Gimnasio Bloque {block.block_id} · {block.name}
              </div>
              <div className="truncate text-lg font-black sm:text-xl">{currentTranslationItem?.lessonTopic || 'Práctica Intensiva'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 rounded-2xl px-3.5 py-1.5 font-black backdrop-blur transition ${
              streak >= 3 ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white animate-pulse shadow-lg' : 'bg-white/10 text-yellow-300'
            }`}>
              <Flame className={`h-5 w-5 ${streak >= 3 ? 'fill-yellow-300 text-yellow-300' : ''}`} />
              <span className="text-sm sm:text-base">{streak}</span>
            </div>

            <div className="hidden items-center gap-1.5 rounded-2xl bg-white/10 px-3.5 py-1.5 font-black text-cyan-300 sm:flex">
              <Trophy className="h-5 w-5" />
              <span className="text-sm">{score} pts</span>
            </div>
          </div>
        </div>

        {/* Polarity Macro Selector (+, -, ?) */}
        <div className="mx-auto mt-3 flex max-w-5xl justify-center gap-2 p-1 rounded-2xl bg-slate-900/80 border border-white/10">
          <button
            type="button"
            onClick={() => setActivePolarity('affirmative')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activePolarity === 'affirmative'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ➕ Afirmativo (+)
          </button>
          <button
            type="button"
            onClick={() => setActivePolarity('negative')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activePolarity === 'negative'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ➖ Negativo (-)
          </button>
          <button
            type="button"
            onClick={() => setActivePolarity('interrogative')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activePolarity === 'interrogative'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ❓ Pregunta (?)
          </button>
        </div>

        {/* Station Sub-Navigation (1, 2, 3, 4) */}
        <div className="mx-auto mt-2 flex max-w-5xl justify-around text-xs font-black uppercase tracking-wider text-white/70">
          <button
            type="button"
            onClick={() => setActiveStation('translation')}
            className={`pb-1 border-b-2 transition cursor-pointer ${activeStation === 'translation' ? 'border-amber-400 text-amber-300' : 'border-transparent text-white/50 hover:text-white'}`}
          >
            1. Traducción
          </button>
          <button
            type="button"
            onClick={() => setActiveStation('writing')}
            className={`pb-1 border-b-2 transition cursor-pointer ${activeStation === 'writing' ? 'border-amber-400 text-amber-300' : 'border-transparent text-white/50 hover:text-white'}`}
          >
            2. Writing Libre
          </button>
          <button
            type="button"
            onClick={() => setActiveStation('listening')}
            className={`pb-1 border-b-2 transition cursor-pointer ${activeStation === 'listening' ? 'border-amber-400 text-amber-300' : 'border-transparent text-white/50 hover:text-white'}`}
          >
            3. Listening / Hablar
          </button>
          <button
            type="button"
            onClick={() => setActiveStation('infinite')}
            className={`pb-1 border-b-2 transition cursor-pointer ${activeStation === 'infinite' ? 'border-amber-400 text-amber-300' : 'border-transparent text-white/50 hover:text-white'}`}
          >
            4. Repaso Infinito
          </button>
        </div>
      </header>

      {/* Main Interactive Container */}
      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 space-y-6">
        {/* STATION 1: TRADUCCIÓN Y ENSAMBLAJE CON ESCONDITE */}
        {activeStation === 'translation' && currentTranslationItem && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8 space-y-4 backdrop-blur">
              {currentTranslationItem.imageUrl && !imageErrorMap[currentTranslationItem.id] ? (
                <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/20 shadow-xl">
                  <img
                    src={currentTranslationItem.imageUrl}
                    alt={currentTranslationItem.spanish}
                    onError={() => setImageErrorMap((prev) => ({ ...prev, [currentTranslationItem.id]: true }))}
                    className="h-48 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="mx-auto max-w-sm h-36 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/60 to-purple-900/40 flex flex-col items-center justify-center p-4 text-cyan-300">
                  <Zap className="h-10 w-10 mb-1 opacity-80" />
                  <span className="text-xs font-black uppercase tracking-widest">{currentTranslationItem.lessonTopic}</span>
                </div>
              )}

              <div className="text-xs font-black uppercase tracking-wider text-cyan-300">Frase {translationIndex + 1}/3 · {activePolarity}</div>
              <div className="text-2xl sm:text-3xl font-black text-white">{currentTranslationItem.spanish}</div>
            </div>

            {/* Target Slots Area */}
            <div className="relative min-h-24 rounded-3xl border-2 border-dashed border-cyan-300/30 bg-slate-900/60 p-4 flex flex-wrap items-center justify-center gap-2">
              {selectedTokenIndexes.length === 0 ? (
                <span className="text-sm font-semibold text-white/40"><Layers3 className="inline mr-2 h-5 w-5" /> Toca los bloques para armar la frase completa...</span>
              ) : (
                selectedTokenIndexes.map((tokIdx, pos) => (
                  <button
                    key={pos}
                    type="button"
                    onClick={() => handleRemoveSelectedToken(pos)}
                    className="rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-500 px-4 py-2.5 text-lg font-black text-slate-950 shadow-lg transition active:scale-95 hover:bg-rose-500 hover:text-white cursor-pointer"
                    title="Toca para quitar de la frase"
                  >
                    {translationTokens[tokIdx]}
                  </button>
                ))
              )}

              {selectedTokenIndexes.length > 0 && translationFeedback === 'idle' && (
                <button
                  type="button"
                  onClick={handleResetSelectedTokens}
                  className="absolute right-3 top-3 rounded-lg bg-white/10 p-2 text-white/60 hover:bg-white/20 hover:text-white transition"
                  title="Reiniciar selección"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Hide / Reveal & Chunk Mode Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setUseChunksMode(true)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-black transition cursor-pointer ${
                    useChunksMode ? 'bg-indigo-600 text-white shadow' : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  🧩 Bloques (Rápido)
                </button>
                <button
                  type="button"
                  onClick={() => setUseChunksMode(false)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-black transition cursor-pointer ${
                    !useChunksMode ? 'bg-indigo-600 text-white shadow' : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  🔤 Palabras individuales
                </button>
              </div>

              <button
                type="button"
                onClick={() => setWordsRevealed((prev) => !prev)}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black transition cursor-pointer ${
                  wordsRevealed ? 'border-white/20 bg-white/10 text-white/70' : 'border-yellow-300/40 bg-yellow-300/20 text-yellow-200 animate-pulse'
                }`}
              >
                {wordsRevealed ? <><EyeOff className="h-4 w-4" /> Ocultar palabras</> : <><Eye className="h-4 w-4" /> 👁️ Mostrar palabras</>}
              </button>
            </div>

            {/* Available Tokens Grid (Only Tokens NOT YET SELECTED) */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 min-h-[60px]">
              {availableTokensList.length === 0 && selectedTokenIndexes.length > 0 ? (
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">✓ Todos los bloques seleccionados. Haz clic en Comprobar Frase.</span>
              ) : (
                availableTokensList.map(({ text, idx }) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectAvailableToken(idx)}
                    className={`rounded-2xl border border-white/20 px-4 py-3 text-lg font-black shadow-md transition active:scale-95 cursor-pointer ${
                      !wordsRevealed ? 'bg-white/10 text-transparent blur-sm border-white/10' : 'bg-white text-slate-950 hover:bg-yellow-100'
                    }`}
                  >
                    {text}
                  </button>
                ))
              )}
            </div>

            {/* Actions Bar: Comprobar & Save Word Modal */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {translationFeedback === 'idle' && (
                <button
                  type="button"
                  disabled={selectedTokenIndexes.length === 0}
                  onClick={checkTranslationAnswer}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-8 py-3.5 text-lg font-black text-slate-950 shadow-xl transition disabled:opacity-40 cursor-pointer"
                >
                  <CheckCircle2 className="h-6 w-6" /> Comprobar Frase
                </button>
              )}

              <button
                type="button"
                onClick={() => setVocabCaptureTarget(currentTranslationItem)}
                className="flex items-center gap-2 rounded-2xl border border-yellow-300/40 bg-yellow-300/15 hover:bg-yellow-300 hover:text-slate-950 px-6 py-3.5 text-base font-black text-yellow-200 shadow-lg transition cursor-pointer"
              >
                <BookmarkPlus className="h-5 w-5" /> Guardar en Mis Palabras
              </button>

              {translationFeedback !== 'idle' && (
                <button
                  type="button"
                  onClick={() => setTranslationIndex((prev) => prev + 1)}
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 text-lg font-black text-white shadow-xl transition cursor-pointer animate-bounce"
                >
                  <span>Siguiente Frase ➔</span>
                </button>
              )}
            </div>

            {translationFeedback === 'correct' && (
              <div className="rounded-2xl border border-emerald-400 bg-emerald-600 p-4 text-center text-white font-bold shadow-xl">
                ¡Excelente! "{currentTranslationItem.englishFull}" — {currentTranslationItem.explanation}
              </div>
            )}
            {translationFeedback === 'wrong' && (
              <div className="rounded-2xl border border-rose-400 bg-rose-600 p-4 text-center text-white font-bold shadow-xl">
                Inténtalo de nuevo. Respuesta correcta: "{currentTranslationItem.englishFull}"
              </div>
            )}
          </div>
        )}

        {/* STATION 2: WRITING LIBRE (PRODUCCIÓN PERSONALIZADA) */}
        {activeStation === 'writing' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-4 backdrop-blur">
              <div className="flex items-center gap-2 text-amber-300 font-black text-lg uppercase tracking-wider">
                <PenTool className="h-6 w-6" /> Estación 2: Writing Libre
              </div>
              <p className="text-sm text-white/80">
                Escribe tu propio ejemplo en inglés aplicando la estructura <span className="text-cyan-300 font-bold">({activePolarity})</span> de {block.name} con el vocabulario que tú prefieras.
              </p>
              
              <div className="pt-2">
                <textarea
                  rows={4}
                  value={userWritingInput}
                  onChange={(e) => setUserWritingInput(e.target.value)}
                  placeholder={`Escribe aquí tu ejemplo propio en inglés (${activePolarity})... Ej: She works at the hospital.`}
                  className="w-full rounded-2xl border-2 border-white/20 bg-slate-900/90 p-4 text-lg font-bold text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  disabled={!userWritingInput.trim()}
                  onClick={handleSaveCustomWriting}
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 px-8 py-3.5 text-lg font-black text-slate-950 shadow-xl transition disabled:opacity-40 cursor-pointer"
                >
                  <Sparkles className="h-6 w-6" /> Guardar mi ejemplo (+200 pts)
                </button>
              </div>
            </div>

            {customSentences.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 space-y-3">
                <div className="text-xs font-black uppercase tracking-widest text-cyan-300">Tus ejemplos guardados en este bloque:</div>
                <div className="space-y-2">
                  {customSentences.map((sent, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-xl bg-white/10 p-3 font-bold text-white">
                      <span>"{sent}"</span>
                      <button type="button" onClick={() => speakText(sent)} className="text-cyan-300 hover:text-cyan-100 p-1"><Volume2 className="h-5 w-5" /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STATION 3: LISTENING Y REPETICIÓN ORAL */}
        {activeStation === 'listening' && currentListeningItem && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8 space-y-4 backdrop-blur">
              <div className="flex justify-center items-center gap-2 text-cyan-300 font-black text-lg uppercase tracking-wider">
                <Mic className="h-6 w-6 text-rose-400 animate-pulse" /> Escucha y repite en voz alta
              </div>

              <div className="text-sm text-white/60">Idea en español:</div>
              <div className="text-2xl sm:text-3xl font-black text-yellow-300">{currentListeningItem.spanish}</div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => speakText(currentListeningItem.audioText)}
                  className="flex items-center gap-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-8 py-4 font-black text-xl text-white shadow-xl transition active:scale-95 cursor-pointer"
                >
                  <Volume2 className="h-7 w-7" /> Escuchar audio en inglés
                </button>
              </div>

              <div className="pt-6">
                {!isEnglishTextRevealed ? (
                  <button
                    type="button"
                    onClick={() => setIsEnglishTextRevealed(true)}
                    className="flex items-center gap-2 mx-auto rounded-2xl border border-amber-300/40 bg-amber-300/15 px-6 py-3 font-black text-amber-200 shadow-lg hover:bg-amber-300 hover:text-slate-950 transition cursor-pointer"
                  >
                    <Eye className="h-5 w-5" /> 👁️ Revelar respuesta escrita en inglés
                  </button>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-400/40 space-y-2">
                    <div className="text-xs font-black uppercase tracking-widest text-cyan-300">Texto en inglés:</div>
                    <div className="text-2xl font-black text-white">"{currentListeningItem.englishFull}"</div>
                    <div className="text-xs text-white/70">{currentListeningItem.explanation}</div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setListeningIndex((prev) => prev + 1)}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 text-lg font-black text-white shadow-xl transition cursor-pointer"
              >
                <span>Siguiente Audio ➔</span>
              </button>
            </div>
          </div>
        )}

        {/* STATION 4: REPASO INFINITO OPCIONAL */}
        {activeStation === 'infinite' && currentInfiniteItem && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 backdrop-blur text-center sm:p-8 space-y-4">
              <div className="text-sm font-black uppercase tracking-wider text-emerald-300">
                {currentInfiniteItem.transformationPrompt || 'Completa la estructura:'}
              </div>
              <div className="text-2xl font-black sm:text-3xl text-white">"{currentInfiniteItem.spanish}"</div>
              
              <div className="pt-2 text-xl sm:text-2xl font-black text-cyan-300 bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/30 flex flex-wrap items-center justify-center gap-2">
                <span>{currentInfiniteItem.coreSlotPrefix}</span>
                <span className="rounded-xl border-2 border-dashed border-cyan-400 px-4 py-1.5 text-cyan-200 bg-cyan-950/40">
                  {!infiniteIsRevealed ? (
                    <span className="text-amber-300 font-bold">🔒 PIENSA EL NÚCLEO</span>
                  ) : (
                    infiniteSelectedOption !== null ? currentInfiniteItem.coreOptions?.[infiniteSelectedOption] : '____'
                  )}
                </span>
                <span>{currentInfiniteItem.coreSlotSuffix}</span>
              </div>
            </div>

            {!infiniteIsRevealed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-950/40 via-indigo-950/60 to-slate-900 p-6 text-center shadow-2xl space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-amber-300 font-black text-lg uppercase tracking-wider">
                  <HelpCircle className="h-6 w-6" /> Paso 1: Piensa la frase en tu mente
                </div>
                <p className="text-sm text-white/80 max-w-lg mx-auto">
                  Formula la combinación exacta antes de destapar las opciones.
                </p>
                <button
                  type="button"
                  onClick={() => setInfiniteIsRevealed(true)}
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 px-8 py-4 text-xl font-black text-slate-950 shadow-2xl transition hover:scale-105 active:scale-95 cursor-pointer animate-pulse"
                >
                  <Eye className="h-6 w-6" />
                  <span>🧠 Ya la pensé ➔ Revelar opciones</span>
                </button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="text-center text-sm font-bold text-white/70">Selecciona el núcleo gramatical correcto:</div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {currentInfiniteItem.coreOptions?.map((opt, idx) => {
                    const isThisSelected = infiniteSelectedOption === idx;
                    const isThisCorrect = idx === (currentInfiniteItem.coreOptions ? currentInfiniteItem.coreOptions.indexOf(currentInfiniteItem.coreTargetValue || '') : 0);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleInfiniteSelect(idx)}
                        className={`min-h-16 rounded-2xl border-2 p-4 text-xl font-black transition active:scale-95 text-center cursor-pointer shadow-lg flex items-center justify-center gap-2 ${
                          infiniteIsCorrect !== null
                            ? isThisSelected
                              ? infiniteIsCorrect
                                ? 'border-emerald-400 bg-emerald-500 text-white ring-4 ring-emerald-400/50 scale-105'
                                : 'border-rose-400 bg-rose-600 text-white ring-4 ring-rose-400/50'
                              : isThisCorrect
                              ? 'border-emerald-400 bg-emerald-500/40 text-emerald-200 ring-2 ring-emerald-400'
                              : 'border-white/10 bg-white/5 text-white/40 opacity-50'
                            : 'border-white/20 bg-white/10 text-white hover:border-cyan-300 hover:bg-white/20'
                        }`}
                      >
                        <span>{opt}</span>
                        {infiniteIsCorrect !== null && isThisSelected && (
                          <span>{infiniteIsCorrect ? '✓' : '✕'}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {infiniteIsCorrect !== null && (
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={() => setInfiniteIndex((prev) => prev + 1)}
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-3.5 text-lg font-black text-slate-950 shadow-xl transition cursor-pointer animate-bounce"
                >
                  <span>Siguiente Ejercicio ➔</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
