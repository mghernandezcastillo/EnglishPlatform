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

export function SpeakingPractice({ onClose, studentId }: SpeakingPracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState<SpeakingQuestion | null>(null);
  const [isQuestionFlipped, setIsQuestionFlipped] = useState(false);
  const [flippedVocab, setFlippedVocab] = useState<Set<string>>(new Set());
  const [activeQuestionWord, setActiveQuestionWord] = useState<string | null>(null);
  const [savedTerms, setSavedTerms] = useState<Set<string>>(new Set());
  const [savingTerm, setSavingTerm] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'starter' | 'confident' | 'pro'>('starter');
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
        // Save to VocabVault
        const translation = getVocabTranslation(clean);
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
      setFlippedVocab(new Set());
      setActiveQuestionWord(null);
    }
  };

  const toggleVocab = (word: string) => {
    setFlippedVocab(prev => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      <div className="min-h-screen relative flex flex-col justify-center items-center py-12 px-4 sm:px-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 hover:bg-red-50 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-5xl w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative">
              <Mic className="w-10 h-10 text-indigo-600" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-50 animate-pulse" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Practica de Speaking</h2>
            <p className="text-gray-500 mt-2 font-medium">Toca la pregunta para verla en espanol. Toca palabras o vocabulario para ver significados.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 p-6 sm:p-10 text-center min-h-[420px] flex flex-col justify-center relative overflow-hidden">
            <motion.div
              className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-100"
              animate={{ scale: [1, 1.12, 1], rotate: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -left-12 h-36 w-36 rounded-full bg-emerald-100"
              animate={{ scale: [1.08, 1, 1.08], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <AnimatePresence mode="wait">
              {currentQuestion && (
                <motion.div
                  key={currentQuestion.question}
                  initial={{ opacity: 0, x: 50, scale: 0.95, rotateY: 20 }}
                  animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95, rotateY: -20 }}
                  transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 20 }}
                  className="relative z-10 flex flex-col items-center justify-center h-full w-full"
                >
                  <div className="mb-6 flex items-center gap-3 text-indigo-500">
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-11 w-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm"
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xs font-black uppercase tracking-[0.24em]">Pregunta aleatoria</div>
                      <div className="text-sm font-semibold text-slate-500">Click para girar</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsQuestionFlipped(prev => !prev);
                      setActiveQuestionWord(null);
                    }}
                    className="w-full max-w-3xl text-left focus:outline-none"
                    aria-label="Girar pregunta"
                  >
                    <motion.div
                      className="relative min-h-[190px]"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isQuestionFlipped ? 180 : 0 }}
                      transition={{ duration: 0.45, type: 'spring', stiffness: 160, damping: 20 }}
                    >
                      <div className="absolute inset-0 rounded-3xl border border-indigo-100 bg-white/95 p-6 sm:p-8 shadow-sm [backface-visibility:hidden] flex flex-col justify-center">
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2 text-indigo-500 text-xs font-black uppercase tracking-[0.2em]">
                            <Languages className="w-4 h-4" />
                            English
                          </div>
                          <button
                            type="button"
                            onClick={(e) => handlePlaySpeech(currentQuestion.question, 'q_speech', e)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                              playingSnippet === 'q_speech'
                                ? 'bg-indigo-600 text-white animate-pulse'
                                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                            }`}
                            title="Escuchar pregunta"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Escuchar</span>
                          </button>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
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
                                  className="mx-0.5 rounded-lg px-1 transition-colors hover:bg-amber-100 hover:text-amber-800 focus:bg-amber-100 focus:outline-none"
                                >
                                  {part}
                                </button>
                                {activeQuestionWord === key && (
                                  <span className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 shadow-lg">
                                    {translateWord(part)}
                                  </span>
                                )}
                              </span>
                            );
                          })}
                        </h3>
                      </div>

                      <div className="absolute inset-0 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2 text-emerald-600 text-xs font-black uppercase tracking-[0.2em]">
                            <Languages className="w-4 h-4" />
                            Español
                          </div>
                          <span className="text-[11px] text-emerald-700/70 font-semibold">Toca para volver a inglés</span>
                        </div>
                        <p className="text-xl sm:text-3xl font-extrabold text-emerald-950 leading-tight">
                          {currentQuestion.spanish || translateText(currentQuestion.question)}
                        </p>
                        <p className="mt-5 text-sm sm:text-base font-bold text-emerald-700">
                          English: {currentQuestion.question}
                        </p>
                      </div>
                    </motion.div>
                  </button>

                  {/* 1. Target Words & Expressions (Palabras clave personalizadas) */}
                  <div className="w-full mt-10 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold shadow-sm">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-black text-slate-900 uppercase tracking-wider">
                            Palabras Clave para tu Respuesta
                          </h4>
                          <p className="text-xs text-slate-500 font-medium">
                            Úsalas al hablar para ganar fluidez. Toca 🔊 para pronunciar o 🔖 para guardar en Mi Vocabulario.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {(blueprint?.targetWords || []).map((item, idx) => {
                        const cleanWord = item.word.trim();
                        const isSaved = savedTerms.has(cleanWord.toLowerCase());
                        const isSaving = savingTerm === cleanWord;
                        const isAudioPlaying = playingSnippet === `word_${cleanWord}`;

                        const typeConfig: Record<string, { label: string; badge: string }> = {
                          noun: { label: 'Sustantivo', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
                          verb: { label: 'Verbo de acción', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                          adjective: { label: 'Adjetivo', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
                          expression: { label: 'Expresión', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
                        };
                        const config = typeConfig[item.type] || typeConfig.expression;

                        return (
                          <div
                            key={`${cleanWord}-${idx}`}
                            className={`relative rounded-2xl p-4 border transition-all text-left ${
                              isSaved
                                ? 'bg-amber-50/40 border-amber-300 shadow-sm'
                                : 'bg-white border-slate-200/90 hover:border-indigo-200 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full border ${config.badge}`}>
                                {config.label}
                              </span>

                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={(e) => handlePlaySpeech(cleanWord, `word_${cleanWord}`, e)}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    isAudioPlaying
                                      ? 'bg-indigo-600 text-white animate-pulse'
                                      : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
                                  }`}
                                  title={`Escuchar pronunciación de "${cleanWord}"`}
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>

                                <button
                                  type="button"
                                  onClick={(e) => handleToggleSaveVocab(cleanWord, e)}
                                  disabled={isSaving}
                                  className={`p-1.5 rounded-lg transition-all ${
                                    isSaved
                                      ? 'text-amber-600 bg-amber-100 hover:bg-amber-200'
                                      : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100'
                                  }`}
                                  title={isSaved ? 'Guardado en Mi Vocabulario (Clic para quitar)' : 'Guardar en Mi Vocabulario'}
                                >
                                  {isSaving ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                                  ) : isSaved ? (
                                    <BookmarkCheck className="w-4 h-4 fill-current" />
                                  ) : (
                                    <Bookmark className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <div className="font-extrabold text-slate-900 text-lg leading-tight">
                              {cleanWord}
                            </div>
                            <div className="text-xs font-semibold text-slate-500 mt-0.5">
                              {item.translation}
                            </div>

                            {item.exampleSnippet && (
                              <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-600 font-medium italic flex items-center gap-1.5">
                                <span className="text-indigo-600 font-bold not-italic">Uso:</span>
                                <span>"{item.exampleSnippet}"</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. P.R.E.P. Scaffolding Studio (Andamiaje por Niveles) */}
                  {blueprint && (
                    <div className="w-full mt-10 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="h-9 w-9 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shadow-sm">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-black text-slate-900 uppercase tracking-wider">
                              Estructura P.R.E.P. (Cómo armar tu respuesta)
                            </h4>
                            <p className="text-xs text-slate-500 font-medium">
                              Elige tu nivel para ver la fórmula guiada paso a paso.
                            </p>
                          </div>
                        </div>

                        {/* Level Selector Tabs */}
                        <div className="inline-flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start sm:self-auto">
                          {(['starter', 'confident', 'pro'] as const).map((lvlKey) => {
                            const lvlData = blueprint[lvlKey];
                            const isSelected = selectedLevel === lvlKey;
                            return (
                              <button
                                key={lvlKey}
                                type="button"
                                onClick={() => setSelectedLevel(lvlKey)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                                  isSelected
                                    ? lvlKey === 'starter'
                                      ? 'bg-emerald-600 text-white shadow-sm'
                                      : lvlKey === 'confident'
                                      ? 'bg-amber-600 text-white shadow-sm'
                                      : 'bg-indigo-600 text-white shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                                }`}
                              >
                                <span>{lvlData.label}</span>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  {lvlData.cefr}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Quick Starters / Conectores de apertura */}
                      <div className="mb-4 bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200">
                        <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                          <span>Arranques recomendados (Toca para escuchar entonación):</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {blueprint.quickStarters.map((qs, qIdx) => {
                            const isAudioPlaying = playingSnippet === `starter_${qIdx}`;
                            return (
                              <button
                                key={qIdx}
                                type="button"
                                onClick={(e) => handlePlaySpeech(qs.en, `starter_${qIdx}`, e)}
                                className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                                  isAudioPlaying
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                    : 'bg-white hover:bg-indigo-50/80 border-slate-200 text-slate-800 hover:border-indigo-200'
                                }`}
                              >
                                <Volume2 className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                                  isAudioPlaying ? 'text-white scale-110' : 'text-indigo-500 group-hover:scale-110'
                                }`} />
                                <span>"{qs.en}"</span>
                                <span className={`text-[10px] font-normal ${
                                  isAudioPlaying ? 'text-indigo-100' : 'text-slate-400 group-hover:text-indigo-600'
                                }`}>({qs.es})</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Selected Level Scaffolding Card */}
                      {(() => {
                        const activeLvl = blueprint[selectedLevel];
                        const isAudioPlaying = playingSnippet === `full_${selectedLevel}`;

                        return (
                          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
                            {/* Strategy Tip Banner */}
                            <div className="mb-5 rounded-2xl bg-amber-50/90 border border-amber-200 p-3.5 flex items-start gap-2.5 text-xs text-amber-900 font-medium">
                              <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-extrabold text-amber-950">Tip de Estrategia: </span>
                                {activeLvl.strategyTip}
                              </div>
                            </div>

                            {/* Scaffolded Template */}
                            <div className="mb-6">
                              <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                                <span>Plantilla Guiada (Llena los corchetes con tu opinión o vocabulario):</span>
                              </div>
                              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base font-bold leading-relaxed">
                                {activeLvl.templateEn}
                              </div>
                              <div className="mt-2.5 px-2 text-xs text-slate-500 font-medium italic">
                                {activeLvl.templateEs}
                              </div>
                            </div>

                            {/* Solved Model Answer */}
                            <div className="rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 sm:p-5 text-white shadow-md">
                              <div className="flex items-center justify-between gap-3 mb-2.5">
                                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                                  <Sparkle className="w-4 h-4" />
                                  <span>Respuesta Modelo Completa ({activeLvl.label} • {activeLvl.cefr})</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => handlePlaySpeech(activeLvl.exampleFullEn, `full_${selectedLevel}`, e)}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    isAudioPlaying
                                      ? 'bg-cyan-400 text-slate-950 animate-pulse font-extrabold'
                                      : 'bg-white/10 text-cyan-200 hover:bg-white/20'
                                  }`}
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                  <span>{isAudioPlaying ? 'Reproduciendo...' : 'Escuchar modelo'}</span>
                                </button>
                              </div>
                              <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed">
                                "{activeLvl.exampleFullEn}"
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {currentQuestion && (
            <div className="mt-6 rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-indigo-200/60 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-center">
                <div className="text-left">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-300/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                    <Bot className="h-4 w-4" />
                    Coach IA integrado
                  </div>
                  <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                    Graba la respuesta del estudiante y recibe feedback al instante.
                  </h3>
                  <div className="mt-4 rounded-2xl bg-white/8 p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      <Target className="h-4 w-4" />
                      Pregunta actual
                    </div>
                    <p className="text-lg font-bold leading-relaxed text-white/90">
                      {currentQuestion.question}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/60">
                      El asistente evalúa claridad, pronunciación, gramática, vocabulario y próximos pasos.
                    </p>
                  </div>
                </div>

                <InlineAiSpeakingAssistant
                  title="Coach IA de Speaking Practice"
                  initialQuestion={currentQuestion.question}
                  candidateQuestions={aiCandidateQuestions}
                  mode="speaking"
                />
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <button
              onClick={generateRandomQuestion}
              className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
            >
              <RefreshCw className="w-6 h-6 group-active:animate-spin" />
              Siguiente Pregunta
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
