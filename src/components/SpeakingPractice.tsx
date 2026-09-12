import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic, RefreshCw, ChevronRight, MessageCircle, Sparkles, Languages, Bot, Target, Bookmark, BookmarkCheck, Loader2 } from 'lucide-react';
import { speakingQuestions, SpeakingQuestion } from '../data/speakingQuestions';
import { InlineAiSpeakingAssistant } from './InlineAiSpeakingAssistant';
import { vocabService } from '../lib/vocabService';
import { storyDecoderDb } from '../lib/storyDecoderDb';

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
  const remainingQuestions = useRef<SpeakingQuestion[]>([]);

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
                        <div className="flex items-center gap-2 text-indigo-500 text-xs font-black uppercase tracking-[0.2em] mb-4">
                          <Languages className="w-4 h-4" />
                          English
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
                        <div className="flex items-center gap-2 text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4">
                          <Languages className="w-4 h-4" />
                          Espanol
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

                  <div className="w-full mt-8">
                    <div className="flex flex-col items-center justify-center gap-1 mb-4">
                      <div className="flex items-center gap-2 text-indigo-500 text-sm font-semibold uppercase tracking-wider">
                        <MessageCircle className="w-4 h-4" />
                        <span>Vocabulario util</span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">Toca para traducir • Guarda con 🔖 en Mi Vocabulario</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {currentQuestion.vocab.map((word, index) => {
                        const isFlipped = flippedVocab.has(word);
                        const cleanWord = word.trim();
                        const isSaved = savedTerms.has(cleanWord.toLowerCase());
                        const isSaving = savingTerm === cleanWord;

                        return (
                          <div
                            key={`${word}-${index}`}
                            className="relative group inline-flex items-center"
                          >
                            <button
                              type="button"
                              onClick={() => toggleVocab(word)}
                              className="relative h-14 min-w-[145px] rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 pr-9 pl-3.5 transition-all shadow-sm active:scale-98 cursor-pointer"
                              aria-label={`Traducir ${word}`}
                            >
                              <motion.span
                                className="absolute inset-0 rounded-2xl border text-sm font-black flex items-center justify-center pr-8 pl-3"
                                style={{ transformStyle: 'preserve-3d' }}
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.35 }}
                              >
                                <span className={`absolute inset-0 rounded-2xl border flex items-center justify-center pr-8 pl-3 [backface-visibility:hidden] ${
                                  isSaved
                                    ? 'border-amber-200 bg-amber-50/70 text-amber-900'
                                    : 'border-indigo-100 bg-indigo-50 text-indigo-700'
                                }`}>
                                  <span className="truncate max-w-[150px] font-bold">{word}</span>
                                </span>
                                <span className={`absolute inset-0 rounded-2xl border flex flex-col items-center justify-center pr-8 pl-3 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                                  isSaved
                                    ? 'border-amber-300 bg-amber-100/80 text-amber-950'
                                    : 'border-emerald-100 bg-emerald-50 text-emerald-800'
                                }`}>
                                  <span className="text-[10px] uppercase font-bold tracking-wide text-emerald-600">ES</span>
                                  <span className="text-xs font-bold leading-tight truncate max-w-[150px]">{getVocabTranslation(word)}</span>
                                </span>
                              </motion.span>
                            </button>

                            {/* Bookmark / Save to Mi Vocabulario Button */}
                            <button
                              type="button"
                              onClick={(e) => handleToggleSaveVocab(word, e)}
                              disabled={isSaving}
                              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-xl flex items-center justify-center transition-all ${
                                isSaved
                                  ? 'bg-amber-500 text-white shadow hover:bg-amber-600 hover:scale-110 active:scale-95'
                                  : 'bg-white/90 text-slate-400 hover:text-amber-500 hover:bg-amber-50 hover:scale-110 border border-slate-200 shadow-sm active:scale-95'
                              }`}
                              title={isSaved ? 'Guardado en Mi Vocabulario (Clic para quitar)' : 'Guardar en Mi Vocabulario'}
                              aria-label={isSaved ? 'Guardado en Mi Vocabulario' : 'Guardar en Mi Vocabulario'}
                            >
                              {isSaving ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" />
                              ) : isSaved ? (
                                <BookmarkCheck className="w-3.5 h-3.5 fill-current" />
                              ) : (
                                <Bookmark className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
