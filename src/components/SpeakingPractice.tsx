import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Mic, RefreshCw, ChevronRight, MessageCircle, Sparkles, Languages, Bot, Target, 
  Bookmark, BookmarkCheck, Loader2, Volume2, Layers, Zap, CheckCircle2, Lightbulb, Sparkle, BookOpen 
} from 'lucide-react';
import { speakingQuestions, SpeakingQuestion } from '../data/speakingQuestions';
import { InlineAiSpeakingAssistant } from './InlineAiSpeakingAssistant';
import { vocabService } from '../lib/vocabService';
import { storyDecoderDb } from '../lib/storyDecoderDb';
import { getBlueprintForQuestion, TargetWord, BlueprintLevel } from '../data/speakingBlueprints';
import { playAudio, stopAudio } from '../lib/audio';

interface SpeakingPracticeProps {
  onClose: () => void;
  studentId?: string | null;
}

const VOCAB_TRANSLATIONS: Record<string, string> = {
  'I am...': 'Yo soy / estoy...',
  "I'm from...": 'Soy de...',
  Currently: 'Actualmente',
  'I work as a...': 'Trabajo como...',
  Student: 'Estudiante',
  Hometown: 'Ciudad natal',
  'Born in': 'Nacido en',
  'Live in': 'Vivir en',
  Siblings: 'Hermanos',
  'Only child': 'Hijo unico',
  'Close-knit': 'Muy unido',
  'Get along well': 'Llevarse bien',
  'Hang out': 'Pasar el rato',
  Supportive: 'Que apoya',
  Relatives: 'Parientes',
  Parents: 'Padres',
  'In my free time': 'En mi tiempo libre',
  'I enjoy': 'Disfruto',
  "I'm interested in": 'Me interesa',
  'Passionate about': 'Apasionado por',
  Fascinating: 'Fascinante',
  Relaxing: 'Relajante',
  Outdoor: 'Al aire libre',
  Indoor: 'En interiores',
  Usually: 'Usualmente',
  Normally: 'Normalmente',
  'Wake up': 'Despertarse',
  Routine: 'Rutina',
  Productive: 'Productivo',
  Commute: 'Viaje al trabajo/estudio',
  'Take a nap': 'Tomar una siesta',
  'Go to bed': 'Ir a dormir',
  Destination: 'Destino',
  Sightseeing: 'Turismo',
  Spontaneous: 'Espontaneo',
  Luggage: 'Equipaje',
  Explore: 'Explorar',
  Memorable: 'Memorable',
  Landscape: 'Paisaje',
  Delicious: 'Delicioso',
  Spicy: 'Picante',
  Vegetarian: 'Vegetariano',
  'Signature dish': 'Plato representativo',
  Traditional: 'Tradicional',
  Sweet: 'Dulce',
  Salty: 'Salado',
  Healthy: 'Saludable',
  Sunny: 'Soleado',
  Freezing: 'Helado',
  Humid: 'Humedo',
  Breeze: 'Brisa',
  Climate: 'Clima',
  Season: 'Temporada / estacion',
  'Extreme weather': 'Clima extremo',
  Refreshing: 'Refrescante',
  Colleagues: 'Colegas',
  Teamwork: 'Trabajo en equipo',
  Challenging: 'Desafiante',
  Rewarding: 'Gratificante',
  'Work-life balance': 'Equilibrio trabajo-vida',
  Salary: 'Salario',
  Promotion: 'Ascenso',
  Entertaining: 'Entretenido',
  Plot: 'Trama',
  Characters: 'Personajes',
  'Binge-watch': 'Ver muchos episodios seguidos',
  Informative: 'Informativo',
  'Social media': 'Redes sociales',
  'Screen time': 'Tiempo frente a pantalla',
  Documentary: 'Documental',
  Goal: 'Meta',
  Achieve: 'Lograr',
  Hopefully: 'Con suerte',
  'In the future': 'En el futuro',
  Plan: 'Planear / plan',
  Improve: 'Mejorar',
  'Look forward to': 'Esperar con ilusion',
  'Next year': 'El proximo ano',
  Gadget: 'Dispositivo',
  Useful: 'Util',
  Distracting: 'Que distrae',
  Convenient: 'Conveniente',
  Screen: 'Pantalla',
  Device: 'Dispositivo',
  Internet: 'Internet',
  'Artificial Intelligence': 'Inteligencia artificial',
  Exercise: 'Ejercicio',
  Diet: 'Dieta',
  Workout: 'Entrenamiento',
  Stressful: 'Estresante',
  Relax: 'Relajarse',
  Meditation: 'Meditacion',
  Fit: 'En forma',
  Energy: 'Energia',
  Expensive: 'Caro',
  Affordable: 'Economico',
  Bargain: 'Ganga / oferta',
  Discount: 'Descuento',
  'Window shopping': 'Mirar tiendas sin comprar',
  Brands: 'Marcas',
  Quality: 'Calidad',
  'Customer service': 'Servicio al cliente',
  Learn: 'Aprender',
  Degree: 'Titulo universitario',
  Subject: 'Materia',
  Teacher: 'Profesor',
  Classmate: 'Companero de clase',
  'Study abroad': 'Estudiar en el extranjero',
  Knowledge: 'Conocimiento',
  Skill: 'Habilidad',
  Pollution: 'Contaminacion',
  Recycle: 'Reciclar',
  'Climate change': 'Cambio climatico',
  'Eco-friendly': 'Ecologico',
  Nature: 'Naturaleza',
  Protect: 'Proteger',
  Waste: 'Desperdicio',
  Sustainable: 'Sostenible',
  Memories: 'Recuerdos',
  'Grow up': 'Crecer',
  Nostalgic: 'Nostalgico',
  Playful: 'Jugueton',
  Innocent: 'Inocente',
  Imagination: 'Imaginacion',
  Friends: 'Amigos',
  Toys: 'Juguetes',
  Imagine: 'Imaginar',
  Advice: 'Consejo',
  Fear: 'Miedo',
  Happiness: 'Felicidad',
  Meaningful: 'Significativo',
  Unbelievable: 'Increible',
  Mystery: 'Misterio',
  Weird: 'Raro',
  Funny: 'Divertido',
  Interesting: 'Interesante',
  Actually: 'En realidad',
  'To be honest': 'Para ser honesto',
  'Well...': 'Bueno...',
  'Let me think...': 'Dejame pensar...',
  'It depends': 'Depende',
};

const WORD_TRANSLATIONS: Record<string, string> = {
  what: 'que',
  where: 'donde',
  when: 'cuando',
  why: 'por que',
  who: 'quien',
  which: 'cual',
  how: 'como',
  is: 'es / esta',
  are: 'son / estan',
  am: 'soy / estoy',
  do: 'hacer / auxiliar',
  does: 'hace / auxiliar',
  did: 'hizo / auxiliar pasado',
  can: 'poder',
  could: 'podria',
  would: 'haria / seria',
  should: 'deberia',
  you: 'tu / usted',
  your: 'tu / su',
  yourself: 'tu mismo',
  name: 'nombre',
  from: 'de / desde',
  live: 'vivir',
  currently: 'actualmente',
  work: 'trabajar',
  study: 'estudiar',
  studying: 'estudiando',
  living: 'viviendo',
  hometown: 'ciudad natal',
  like: 'gustar',
  dislike: 'no gustar',
  most: 'mas',
  anything: 'algo',
  about: 'sobre / acerca de',
  family: 'familia',
  friends: 'amigos',
  free: 'libre',
  time: 'tiempo',
  day: 'dia',
  daily: 'diario',
  routine: 'rutina',
  usually: 'usualmente',
  normally: 'normalmente',
  morning: 'manana',
  night: 'noche',
  weekend: 'fin de semana',
  travel: 'viajar',
  trip: 'viaje',
  place: 'lugar',
  food: 'comida',
  weather: 'clima',
  job: 'trabajo',
  movie: 'pelicula',
  music: 'musica',
  future: 'futuro',
  goal: 'meta',
  technology: 'tecnologia',
  health: 'salud',
  shopping: 'compras',
  school: 'escuela',
  environment: 'medio ambiente',
  childhood: 'infancia',
  remember: 'recordar',
  tell: 'contar / decir',
  describe: 'describir',
  explain: 'explicar',
  talk: 'hablar',
  answer: 'responder',
  question: 'pregunta',
  best: 'mejor',
  favorite: 'favorito',
  important: 'importante',
  interesting: 'interesante',
  difficult: 'dificil',
  easy: 'facil',
  happy: 'feliz',
  afraid: 'con miedo',
};

const QUESTION_PHRASES: Array<[RegExp, string]> = [
  [/what is your name\?/i, 'Cual es tu nombre?'],
  [/where are you from\?/i, 'De donde eres?'],
  [/where do you live currently\?/i, 'Donde vives actualmente?'],
  [/do you work or study\?/i, 'Trabajas o estudias?'],
  [/what do you do for a living\?/i, 'A que te dedicas?'],
  [/what are you studying right now\?/i, 'Que estas estudiando ahora mismo?'],
  [/can you describe your hometown\?/i, 'Puedes describir tu ciudad natal?'],
  [/what do you like most about your hometown\?/i, 'Que es lo que mas te gusta de tu ciudad natal?'],
  [/is there anything you dislike about where you live\?/i, 'Hay algo que no te guste del lugar donde vives?'],
];

const getVocabTranslation = (word: string) => VOCAB_TRANSLATIONS[word] || translateText(word);

const cleanToken = (token: string) => token.toLowerCase().replace(/[^a-z']/g, '');

const QUESTION_TRANSLATION_MAP = new Map<string, string>();
speakingQuestions.forEach((q) => {
  if (q.question && q.spanish) {
    QUESTION_TRANSLATION_MAP.set(q.question.trim().toLowerCase(), q.spanish);
  }
});

const translateWord = (word: string) => {
  const normalized = cleanToken(word);
  return WORD_TRANSLATIONS[normalized] || VOCAB_TRANSLATIONS[word] || 'Toca otra palabra o consulta al profesor';
};

const translateText = (text: string) => {
  const norm = text.trim().toLowerCase();
  const known = QUESTION_TRANSLATION_MAP.get(norm);
  if (known) return known;

  const exact = QUESTION_PHRASES.find(([pattern]) => pattern.test(text));
  if (exact) return exact[1];

  return text;
};

const splitQuestion = (question: string) => question.match(/[A-Za-z']+|[^A-Za-z']+/g) || [question];

const renderHighlightedTemplate = (text: string, isSpanish = false) => {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const inner = part.slice(1, -1);
      if (isSpanish) {
        return (
          <span
            key={index}
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30 not-italic tracking-normal text-xs sm:text-sm"
          >
            {inner}
          </span>
        );
      }

      return (
        <span
          key={index}
          className="inline-flex items-center px-2.5 py-1 mx-1.5 rounded-xl bg-amber-400/20 text-amber-300 font-black border-2 border-amber-400/50 shadow-md shadow-amber-950/40 tracking-normal text-base sm:text-lg lg:text-xl align-baseline"
        >
          {inner}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export function SpeakingPractice({ onClose, studentId }: SpeakingPracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState<SpeakingQuestion | null>(null);
  const [isQuestionFlipped, setIsQuestionFlipped] = useState(false);
  const [activeQuestionWord, setActiveQuestionWord] = useState<string | null>(null);
  const [savedTerms, setSavedTerms] = useState<Set<string>>(new Set());
  const [savingTerm, setSavingTerm] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'starter' | 'confident' | 'pro'>('starter');
  const [activeTab, setActiveTab] = useState<'prep' | 'coach'>('prep');
  const [playingSnippet, setPlayingSnippet] = useState<string | null>(null);
  const remainingQuestions = useRef<SpeakingQuestion[]>([]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const blueprint = useMemo(() => {
    if (!currentQuestion) return null;
    return getBlueprintForQuestion(currentQuestion);
  }, [currentQuestion]);

  const handlePlaySpeech = (text: string, id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (playingSnippet === id) {
      stopAudio();
      setPlayingSnippet(null);
      return;
    }
    setPlayingSnippet(id);
    playAudio(text, 'en-US', {
      onEnd: () => setPlayingSnippet(null),
      onError: () => setPlayingSnippet(null),
    });
  };

  // Load saved vocabulary for the current student
  useEffect(() => {
    let isMounted = true;
    vocabService.getItems(studentId).then((items) => {
      if (!isMounted) return;
      const terms = new Set<string>();
      items.forEach((item) => {
        if (item.term) terms.add(item.term.toLowerCase().trim());
      });
      setSavedTerms(terms);
    }).catch((err) => {
      console.warn('Error loading saved vocabulary for speaking practice:', err);
    });
    return () => {
      isMounted = false;
    };
  }, [studentId]);

  const handleToggleSaveVocab = async (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const clean = word.trim();
    if (!clean || savingTerm) return;

    const lower = clean.toLowerCase();
    const isSaved = savedTerms.has(lower);
    setSavingTerm(clean);

    try {
      if (isSaved) {
        // Remove from VocabVault
        const stableId = `term_${clean.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        await vocabService.deleteItem(stableId, studentId);
        setSavedTerms(prev => {
          const next = new Set(prev);
          next.delete(lower);
          return next;
        });
      } else {
        // Find exact translation from blueprint targetWords
        const targetWordItem = blueprint?.targetWords.find(w => w.word.toLowerCase() === lower);
        const translation = targetWordItem?.translation || getVocabTranslation(clean);

        await vocabService.saveQuickTerm(
          clean,
          translation,
          'general',
          `🎙️ Speaking Practice: ${currentQuestion?.question || ''}`,
          studentId
        );

        // Also persist to Supabase story_decoder_vocabulary
        if (studentId) {
          try {
            const sdId = `sp_${clean.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
            await storyDecoderDb.saveWord(studentId, {
              id: sdId,
              english: clean,
              spanish: translation,
              storyTitle: `Speaking Practice: ${currentQuestion?.topic || 'General'}`,
              exampleEn: currentQuestion?.question || '',
              exampleEs: currentQuestion?.spanish || translateText(currentQuestion?.question || ''),
              addedAt: Date.now()
            });
          } catch (dbErr) {
            console.warn('Error syncing word to storyDecoderDb:', dbErr);
          }
        }

        setSavedTerms(prev => new Set(prev).add(lower));
      }
    } catch (err) {
      console.error('Error toggling vocab save:', err);
    } finally {
      setSavingTerm(null);
    }
  };

  const aiCandidateQuestions = useMemo(() => {
    if (!currentQuestion) return [];
    const relatedQuestions = speakingQuestions
      .filter(item => item.topic === currentQuestion.topic && item.question !== currentQuestion.question)
      .slice(0, 5)
      .map(item => item.question);
    return [currentQuestion.question, ...relatedQuestions];
  }, [currentQuestion]);

  const shuffleArray = (array: SpeakingQuestion[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    if (remainingQuestions.current.length === 0) {
      remainingQuestions.current = shuffleArray(speakingQuestions);
    }
    const nextQuestion = remainingQuestions.current.pop();
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setIsQuestionFlipped(false);
      setActiveQuestionWord(null);
      setActiveTab('prep');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-100 z-50 flex flex-col h-screen max-h-screen overflow-hidden p-2.5 sm:p-4 select-none">
      <div className="w-full max-w-[1760px] mx-auto h-full flex flex-col justify-between gap-2.5 sm:gap-3 overflow-hidden">
        
        {/* 1. Header Bar (Compact 48px, Zero Scroll) */}
        <div className="h-12 flex-shrink-0 flex items-center justify-between px-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 flex-shrink-0">
              <Mic className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg text-white tracking-tight">
                Speaking Studio
              </span>
              {currentQuestion && (
                <span className="text-[11px] uppercase font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 tracking-wider">
                  {currentQuestion.topic}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentQuestion && (
              <button
                type="button"
                onClick={(e) => handlePlaySpeech(currentQuestion.question, 'q_speech', e)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  playingSnippet === 'q_speech'
                    ? 'bg-indigo-600 text-white animate-pulse shadow-sm'
                    : 'bg-slate-800 text-indigo-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
                title="Escuchar pregunta en inglés"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Escuchar</span>
              </button>
            )}

            <button
              onClick={generateRandomQuestion}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Siguiente Pregunta</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-950/40 border border-slate-800 transition-colors cursor-pointer"
              title="Cerrar práctica"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Hero Question Card (Expansive Typography, Zero Scroll) */}
        {currentQuestion && (
          <div
            onClick={() => {
              setIsQuestionFlipped(prev => !prev);
              setActiveQuestionWord(null);
            }}
            className="h-32 sm:h-36 lg:h-40 flex-shrink-0 relative rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border-2 border-indigo-500/40 shadow-2xl px-6 sm:px-10 py-3.5 sm:py-4 flex flex-col justify-between cursor-pointer group hover:border-indigo-400 transition-all"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-wider">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${
                isQuestionFlipped ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
              }`}>
                <Languages className="w-4 h-4" />
                {isQuestionFlipped ? 'Español (Toca la tarjeta para volver a Inglés)' : 'English (Toca la tarjeta para ver en Español)'}
              </span>
              <span className="text-slate-400 group-hover:text-indigo-300 transition-colors font-bold text-xs sm:text-sm">
                {isQuestionFlipped ? 'Volver a inglés ↺' : 'Ver traducción en español ➔'}
              </span>
            </div>

            <div className="py-1">
              {!isQuestionFlipped ? (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
                  {splitQuestion(currentQuestion.question).map((part, index) => {
                    if (!/[A-Za-z']/.test(part)) return <span key={`${part}-${index}`}>{part}</span>;
                    const key = `${part}-${index}`;
                    return (
                      <span key={key} className="relative inline-block">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setActiveQuestionWord(activeQuestionWord === key ? null : key);
                          }}
                          className="mx-0.5 rounded-xl px-1.5 transition-colors hover:bg-amber-400 hover:text-slate-950 focus:bg-amber-400 focus:text-slate-950 focus:outline-none"
                        >
                          {part}
                        </button>
                        {activeQuestionWord === key && (
                          <span className="absolute left-1/2 bottom-full z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-amber-300 bg-amber-100 px-4 py-2 text-base font-black text-amber-950 shadow-2xl">
                            {translateWord(part)}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </h2>
              ) : (
                <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-300 leading-tight tracking-tight">
                  {currentQuestion.spanish || translateText(currentQuestion.question)}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
              <span className="italic">
                {!isQuestionFlipped ? '💡 Toca cualquier palabra en inglés para ver su traducción instantánea.' : `Pregunta en inglés: "${currentQuestion.question}"`}
              </span>
              <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">
                Maven Speaking Studio
              </span>
            </div>
          </div>
        )}

        {/* 3. Main Workspace (Fits inside flex-1, Zero Window Scroll) */}
        <div className="flex-1 min-h-0 grid grid-cols-12 gap-3 sm:gap-4 overflow-hidden">
          
          {/* Column 1: Palabras Clave Sugeridas (5 cols, Roomy 2x2 Grid) */}
          <div className="col-span-12 lg:col-span-5 h-full flex flex-col bg-slate-900/90 rounded-2xl border border-slate-800 p-3.5 sm:p-4 overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                    Palabras Clave para Responder
                  </h3>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-bold">
                Toca 🔊 o 🔖
              </span>
            </div>

            {/* 2x2 Clean Card Grid with Maximized Content */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0 mt-2.5">
              {(blueprint?.targetWords || []).slice(0, 4).map((item, idx) => {
                const cleanWord = item.word.trim();
                const isSaved = savedTerms.has(cleanWord.toLowerCase());
                const isSaving = savingTerm === cleanWord;
                const isAudioPlaying = playingSnippet === `word_${cleanWord}`;

                const typeConfig: Record<string, { label: string; badge: string }> = {
                  noun: { label: 'Sustantivo', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
                  verb: { label: 'Verbo', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
                  adjective: { label: 'Adjetivo', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
                  expression: { label: 'Expresión', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
                };
                const config = typeConfig[item.type] || typeConfig.expression;

                return (
                  <div
                    key={`${cleanWord}-${idx}`}
                    className={`rounded-2xl p-3.5 sm:p-4 border flex flex-col justify-between transition-all text-left ${
                      isSaved
                        ? 'bg-amber-950/30 border-amber-500/60 shadow-md shadow-amber-950/20'
                        : 'bg-slate-950/90 border-slate-800 hover:border-indigo-500/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className={`text-xs uppercase font-black px-2.5 py-0.5 rounded-full border ${config.badge}`}>
                          {config.label}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => handlePlaySpeech(cleanWord, `word_${cleanWord}`, e)}
                            className={`p-2 sm:p-2.5 rounded-xl transition-all cursor-pointer ${
                              isAudioPlaying
                                ? 'bg-indigo-600 text-white animate-pulse shadow-sm'
                                : 'text-slate-400 hover:text-indigo-300 hover:bg-slate-800 bg-slate-900 border border-slate-700/60'
                            }`}
                            title={`Escuchar pronunciación de "${cleanWord}"`}
                          >
                            <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => handleToggleSaveVocab(cleanWord, e)}
                            disabled={isSaving}
                            className={`p-2 sm:p-2.5 rounded-xl transition-all cursor-pointer ${
                              isSaved
                                ? 'text-amber-400 bg-amber-500/20 border border-amber-500/40'
                                : 'text-slate-500 hover:text-amber-300 hover:bg-slate-800 bg-slate-900 border border-slate-700/60'
                            }`}
                            title={isSaved ? 'Guardado en Mi Vocabulario (Clic para quitar)' : 'Guardar en Mi Vocabulario'}
                          >
                            {isSaving ? (
                              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                            ) : isSaved ? (
                              <BookmarkCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
                            ) : (
                              <Bookmark className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="font-black text-white text-2xl sm:text-3xl xl:text-4xl leading-tight tracking-tight mt-1">
                        {cleanWord}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-indigo-300 mt-1">
                        {item.translation}
                      </div>
                    </div>

                    {item.exampleSnippet && (
                      <div className="mt-2 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm lg:text-base text-slate-200 font-medium italic leading-snug">
                        "{item.exampleSnippet}"
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Estructura P.R.E.P. & Coach IA (7 cols, Expansive Text) */}
          <div className="col-span-12 lg:col-span-7 h-full flex flex-col bg-slate-900/90 rounded-2xl border border-slate-800 p-3.5 sm:p-4 overflow-hidden justify-between">
            
            {/* Top Selector Bar */}
            <div className="flex-shrink-0 flex items-center justify-between pb-2 border-b border-slate-800 gap-2">
              {/* Level Selector Tabs */}
              <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                {(['starter', 'confident', 'pro'] as const).map((lvlKey) => {
                  const lvlData = blueprint ? blueprint[lvlKey] : null;
                  const isSelected = selectedLevel === lvlKey;
                  return (
                    <button
                      key={lvlKey}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(lvlKey);
                        setActiveTab('prep');
                      }}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected && activeTab === 'prep'
                          ? lvlKey === 'starter'
                            ? 'bg-emerald-600 text-white shadow-md'
                            : lvlKey === 'confident'
                            ? 'bg-amber-600 text-white shadow-md'
                            : 'bg-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{lvlData?.label || lvlKey}</span>
                      <span className="text-[11px] opacity-75 font-extrabold px-1.5 py-0.5 rounded bg-white/10">
                        {lvlData?.cefr}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View Switcher: PREP Studio vs Coach IA */}
              <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('prep')}
                  className={`px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'prep'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Guía P.R.E.P.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('coach')}
                  className={`px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'coach'
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                  <span>Coach IA</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-0 mt-2 overflow-hidden">
              {activeTab === 'prep' && blueprint ? (
                (() => {
                  const activeLvl = blueprint[selectedLevel];
                  const isAudioPlaying = playingSnippet === `full_${selectedLevel}`;

                  return (
                    <div className="h-full flex flex-col justify-between gap-2 overflow-hidden">
                      {/* Quick Starters Row */}
                      <div className="flex-shrink-0 flex items-center gap-2 py-0.5">
                        <span className="text-xs sm:text-sm font-black uppercase text-amber-400 flex items-center gap-1.5 flex-shrink-0">
                          <Zap className="w-4 h-4" />
                          Conectores:
                        </span>
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          {blueprint.quickStarters.map((qs, qIdx) => {
                            const isPlaying = playingSnippet === `starter_${qIdx}`;
                            return (
                              <button
                                key={qIdx}
                                type="button"
                                onClick={(e) => handlePlaySpeech(qs.en, `starter_${qIdx}`, e)}
                                className={`flex-1 min-w-0 flex items-center justify-between gap-1.5 px-3.5 py-2 rounded-xl border text-left transition-all cursor-pointer ${
                                  isPlaying
                                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                                    : 'bg-slate-950/80 hover:bg-slate-800 border-slate-800 text-slate-200'
                                }`}
                              >
                                <span className="font-black text-xs sm:text-sm lg:text-base truncate">"{qs.en}"</span>
                                <Volume2 className={`w-4 h-4 flex-shrink-0 ${isPlaying ? 'text-white' : 'text-slate-400'}`} />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Plantilla Guiada P.R.E.P. */}
                      <div className="flex-1 min-h-0 flex flex-col justify-center rounded-2xl bg-slate-950/80 p-4 sm:p-5 border border-slate-800 text-left">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 mb-2">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>Tip de Estrategia P.R.E.P.: {activeLvl.strategyTip}</span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-relaxed">
                          {renderHighlightedTemplate(activeLvl.templateEn, false)}
                        </div>
                        <div className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium italic mt-2 leading-relaxed">
                          {renderHighlightedTemplate(activeLvl.templateEs, true)}
                        </div>
                      </div>

                      {/* Respuesta Modelo Completa */}
                      <div className="flex-1 min-h-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-900 p-4 sm:p-5 border border-indigo-500/40 text-left text-white shadow-lg">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300">
                            <Sparkle className="w-4 h-4" />
                            <span>Respuesta Modelo Completa ({activeLvl.label} • {activeLvl.cefr})</span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => handlePlaySpeech(activeLvl.exampleFullEn, `full_${selectedLevel}`, e)}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md ${
                              isAudioPlaying
                                ? 'bg-cyan-400 text-slate-950 animate-pulse'
                                : 'bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 border border-cyan-500/30'
                            }`}
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>{isAudioPlaying ? 'Reproduciendo...' : 'Escuchar modelo'}</span>
                          </button>
                        </div>

                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white/95 leading-relaxed my-2">
                          "{activeLvl.exampleFullEn}"
                        </div>

                        <div className="text-xs sm:text-sm text-slate-400 italic">
                          💡 Escucha la entonación nativa y responde con la estructura P.R.E.P. en voz alta.
                        </div>
                      </div>

                      {/* Bottom Action inside PREP (Centered Wide Button, avoids bottom-right widget) */}
                      <div className="flex-shrink-0 pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveTab('coach')}
                          className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-indigo-700 hover:from-cyan-500 hover:to-indigo-600 text-white font-black text-sm sm:text-base lg:text-lg shadow-lg transition-all cursor-pointer active:scale-98"
                        >
                          <Bot className="w-5 h-5" />
                          <span>Practicar y Evaluar mi Respuesta con Coach IA</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                /* Coach IA View */
                <div className="h-full flex flex-col justify-between gap-2.5 overflow-hidden text-left">
                  <div className="flex-shrink-0 flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                        Coach IA: Auditoría P.R.E.P. y Detección de Vocabulario
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTab('prep')}
                      className="text-xs sm:text-sm text-indigo-300 hover:text-white font-bold cursor-pointer"
                    >
                      ← Volver a Guía P.R.E.P.
                    </button>
                  </div>

                  {/* Target words mini-tracker */}
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-black uppercase text-emerald-400 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" />
                      Términos sugeridos a pronunciar:
                    </span>
                    {(blueprint?.targetWords || []).map((w, wIdx) => (
                      <span
                        key={wIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/10 text-slate-200 border border-white/10"
                      >
                        {w.word}
                      </span>
                    ))}
                  </div>

                  {/* Assistant Component */}
                  <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                    {currentQuestion && (
                      <InlineAiSpeakingAssistant
                        title="Coach IA de Speaking Practice"
                        initialQuestion={currentQuestion.question}
                        candidateQuestions={aiCandidateQuestions}
                        targetWords={(blueprint?.targetWords || []).map(w => w.word)}
                        mode="speaking"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
