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
      // Prioritize high-impact conversational topics, opinions, and dilemmas
      const filtered = speakingQuestions.filter(q => 
        !/spell your name|phone number|email address|what is your name\?/i.test(q.question)
      );
      remainingQuestions.current = shuffleArray(filtered.length > 0 ? filtered : speakingQuestions);
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
    <div className="fixed inset-0 bg-slate-100 z-50 overflow-y-auto">
      <div className="w-full max-w-[1760px] mx-auto min-h-screen flex flex-col justify-start px-4 sm:px-8 lg:px-12 py-6 sm:py-10 space-y-8">
        
        {/* Top Sticky/Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 flex-shrink-0">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Práctica de Speaking
                </h1>
                <span className="text-xs uppercase px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-black tracking-wider border border-indigo-200">
                  Blueprint Studio
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Toca la tarjeta para ver traducción en español. Usa el vocabulario y las estructuras P.R.E.P. para estructurar tu respuesta.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={generateRandomQuestion}
              className="group flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-black text-sm sm:text-base shadow-lg shadow-indigo-200 transition-all cursor-pointer active:scale-95"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Siguiente Pregunta</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onClose}
              className="p-3 bg-white rounded-2xl text-slate-400 hover:text-red-500 shadow-sm border border-slate-200 hover:bg-red-50 transition-colors cursor-pointer"
              title="Cerrar práctica"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Question Hero Card (Expansive, High Visibility) */}
        {currentQuestion && (
          <div className="w-full">
            <button
              type="button"
              onClick={() => {
                setIsQuestionFlipped(prev => !prev);
                setActiveQuestionWord(null);
              }}
              className="w-full text-left focus:outline-none cursor-pointer group"
              aria-label="Girar pregunta"
            >
              <motion.div
                className="relative min-h-[220px] sm:min-h-[260px] w-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isQuestionFlipped ? 180 : 0 }}
                transition={{ duration: 0.45, type: 'spring', stiffness: 160, damping: 20 }}
              >
                {/* Front: English */}
                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-indigo-100 bg-white p-6 sm:p-10 shadow-xl shadow-indigo-100/50 [backface-visibility:hidden] flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-indigo-600 text-xs sm:text-sm font-black uppercase tracking-[0.2em] bg-indigo-50 px-3.5 py-1.5 rounded-full">
                      <Languages className="w-4 h-4" />
                      English • Toca la tarjeta para ver en Español
                    </div>
                    <button
                      type="button"
                      onClick={(e) => handlePlaySpeech(currentQuestion.question, 'q_speech', e)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        playingSnippet === 'q_speech'
                          ? 'bg-indigo-600 text-white animate-pulse shadow-md'
                          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                      title="Escuchar pronunciación de la pregunta"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Escuchar Pregunta</span>
                    </button>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight py-4 tracking-tight">
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
                            className="mx-0.5 rounded-xl px-1.5 transition-colors hover:bg-amber-100 hover:text-amber-900 focus:bg-amber-100 focus:outline-none"
                          >
                            {part}
                          </button>
                          {activeQuestionWord === key && (
                            <span className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-950 shadow-xl">
                              {translateWord(part)}
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </h2>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
                    <span>Tema: <strong className="text-slate-600">{currentQuestion.topic}</strong></span>
                    <span className="text-indigo-600 group-hover:translate-x-1 transition-transform font-extrabold">
                      Haz clic para voltear al Español ➔
                    </span>
                  </div>
                </div>

                {/* Back: Spanish */}
                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-emerald-200 bg-emerald-50/95 p-6 sm:p-10 shadow-xl shadow-emerald-100/50 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-[0.2em] bg-emerald-100 px-3.5 py-1.5 rounded-full">
                      <Languages className="w-4 h-4" />
                      Español
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-800">
                      Toca la tarjeta para volver a inglés
                    </span>
                  </div>

                  <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-950 leading-tight py-4 tracking-tight">
                    {currentQuestion.spanish || translateText(currentQuestion.question)}
                  </p>

                  <p className="text-sm sm:text-base font-bold text-emerald-700">
                    English: {currentQuestion.question}
                  </p>
                </div>
              </motion.div>
            </button>
          </div>
        )}

        {/* Pillar 1: Vocabulario Clave para Responder (Expansive Full-Width 4-Column Grid) */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col gap-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold shadow-sm flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wider">
                  Vocabulario Clave para Responder
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Aprende estas palabras clave para enriquecer tu respuesta. Toca 🔊 para escuchar pronunciación nativa o 🔖 para guardar en Mi Vocabulario.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-slate-200">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{(blueprint?.targetWords || []).length} términos sugeridos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
                  className={`relative rounded-2xl p-6 border-2 transition-all text-left flex flex-col justify-between min-h-[220px] ${
                    isSaved
                      ? 'bg-amber-50/50 border-amber-300 shadow-sm'
                      : 'bg-slate-50/80 border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-xs uppercase font-black px-3 py-1 rounded-full border tracking-wide ${config.badge}`}>
                        {config.label}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => handlePlaySpeech(cleanWord, `word_${cleanWord}`, e)}
                          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                            isAudioPlaying
                              ? 'bg-indigo-600 text-white animate-pulse shadow-sm'
                              : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 bg-white border border-slate-200'
                          }`}
                          title={`Escuchar pronunciación de "${cleanWord}"`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => handleToggleSaveVocab(cleanWord, e)}
                          disabled={isSaving}
                          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                            isSaved
                              ? 'text-amber-700 bg-amber-100 hover:bg-amber-200 border border-amber-300'
                              : 'text-slate-400 hover:text-amber-600 hover:bg-amber-50 bg-white border border-slate-200'
                          }`}
                          title={isSaved ? 'Guardado en Mi Vocabulario (Clic para quitar)' : 'Guardar en Mi Vocabulario'}
                        >
                          {isSaving ? (
                            <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                          ) : isSaved ? (
                            <BookmarkCheck className="w-4 h-4 fill-current text-amber-600" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="font-black text-slate-900 text-2xl sm:text-3xl leading-snug tracking-tight mt-2">
                      {cleanWord}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-indigo-700 mt-1">
                      {item.translation}
                    </div>
                  </div>

                  {item.exampleSnippet && (
                    <div className="mt-5 p-3.5 rounded-xl bg-white border border-slate-200/90 text-left shadow-2xs">
                      <div className="text-[11px] font-black uppercase tracking-wider text-indigo-600 mb-1">
                        Ejemplo de uso:
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-slate-800 leading-snug italic">
                        "{item.exampleSnippet}"
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillar 2: Estructura P.R.E.P. (Andamiaje Conversacional) */}
        {blueprint && (
          <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col gap-8 text-left">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shadow-sm flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wider">
                    Estructura P.R.E.P. (Punto + Razón + Ejemplo + Punto)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Elige tu nivel de comodidad para desbloquear la fórmula guiada paso a paso y la respuesta modelo.
                  </p>
                </div>
              </div>

              {/* Level Selector Tabs */}
              <div className="inline-flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 self-start lg:self-auto">
                {(['starter', 'confident', 'pro'] as const).map((lvlKey) => {
                  const lvlData = blueprint[lvlKey];
                  const isSelected = selectedLevel === lvlKey;
                  return (
                    <button
                      key={lvlKey}
                      type="button"
                      onClick={() => setSelectedLevel(lvlKey)}
                      className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? lvlKey === 'starter'
                            ? 'bg-emerald-600 text-white shadow-md'
                            : lvlKey === 'confident'
                            ? 'bg-amber-600 text-white shadow-md'
                            : 'bg-indigo-600 text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <span>{lvlData.label}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
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
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span>Arranques conversacionales recomendados (Toca para escuchar entonación):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
                {blueprint.quickStarters.map((qs, qIdx) => {
                  const isAudioPlaying = playingSnippet === `starter_${qIdx}`;
                  return (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={(e) => handlePlaySpeech(qs.en, `starter_${qIdx}`, e)}
                      className={`group flex items-center justify-between gap-2 p-3 rounded-xl border transition-all text-left cursor-pointer ${
                        isAudioPlaying
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                          : 'bg-white hover:bg-indigo-50 border-slate-200 text-slate-800 hover:border-indigo-200'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-extrabold text-sm sm:text-base">"{qs.en}"</span>
                        <span className={`text-xs font-medium ${
                          isAudioPlaying ? 'text-indigo-100' : 'text-slate-500 group-hover:text-indigo-600'
                        }`}>({qs.es})</span>
                      </div>
                      <Volume2 className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isAudioPlaying ? 'text-white scale-110' : 'text-indigo-500 group-hover:scale-110'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Guided Template & Solved Model Answer */}
            {(() => {
              const activeLvl = blueprint[selectedLevel];
              const isAudioPlaying = playingSnippet === `full_${selectedLevel}`;

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column (6 cols): Plantilla Guiada */}
                  <div className="lg:col-span-6 flex flex-col gap-5 justify-between">
                    <div>
                      {/* Strategy Tip Banner */}
                      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex items-start gap-3.5 text-sm sm:text-base text-amber-950 font-medium mb-6">
                        <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-black text-amber-950">Tip de Estrategia P.R.E.P.: </span>
                          {activeLvl.strategyTip}
                        </div>
                      </div>

                      {/* Scaffolded Template */}
                      <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-indigo-500" />
                        <span>Fórmula Guiada (Llena los corchetes con tu respuesta):</span>
                      </div>
                      <div className="p-6 rounded-2xl bg-indigo-50/70 border-2 border-indigo-200 text-slate-900 text-lg sm:text-xl font-bold leading-relaxed">
                        {activeLvl.templateEn}
                      </div>
                      <div className="mt-3 px-3 text-sm sm:text-base text-slate-600 font-medium italic">
                        {activeLvl.templateEs}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (6 cols): Solved Model Answer */}
                  <div className="lg:col-span-6 rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between border-2 border-slate-800">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300">
                          <Sparkle className="w-5 h-5" />
                          <span>Respuesta Modelo Completa ({activeLvl.label} • {activeLvl.cefr})</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => handlePlaySpeech(activeLvl.exampleFullEn, `full_${selectedLevel}`, e)}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md active:scale-95 ${
                            isAudioPlaying
                              ? 'bg-cyan-400 text-slate-950 animate-pulse'
                              : 'bg-white/10 text-cyan-200 hover:bg-white/20'
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>{isAudioPlaying ? 'Reproduciendo...' : 'Escuchar modelo'}</span>
                        </button>
                      </div>

                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-lg sm:text-xl font-medium text-white/95 leading-relaxed">
                        "{activeLvl.exampleFullEn}"
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-400 font-medium italic">
                      💡 Escucha la entonación y trata de imitar el ritmo natural al responder en voz alta.
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Pillar 3: Coach IA de Speaking con Tracker de Vocabulario en Vivo */}
        {currentQuestion && (
          <div className="w-full rounded-3xl bg-slate-950 p-6 sm:p-10 text-white shadow-2xl border-2 border-slate-800 text-left">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-200 border border-cyan-400/30 self-start">
                  <Bot className="h-4 w-4" />
                  Coach IA Integrado
                </div>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                  Graba tu respuesta y recibe auditoría P.R.E.P. al instante.
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                  El evaluador detectará automáticamente si aplicaste las palabras clave sugeridas y qué tan bien estructuraste tu argumento.
                </p>

                {/* Target words preview chips */}
                <div className="mt-2 rounded-2xl bg-white/10 p-5 border border-white/15">
                  <div className="mb-2.5 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300">
                    <Target className="h-4 w-4" />
                    <span>Términos clave a incorporar:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(blueprint?.targetWords || []).map((w, wIdx) => (
                      <span
                        key={wIdx}
                        className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 border border-white/15 text-slate-200"
                      >
                        {w.word} <span className="text-xs text-slate-400">({w.translation})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <InlineAiSpeakingAssistant
                  title="Coach IA de Speaking Practice"
                  initialQuestion={currentQuestion.question}
                  candidateQuestions={aiCandidateQuestions}
                  targetWords={(blueprint?.targetWords || []).map(w => w.word)}
                  mode="speaking"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Giant Next Question Button */}
        <div className="py-6 flex justify-center">
          <button
            onClick={generateRandomQuestion}
            className="group flex items-center gap-3.5 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            <span>Siguiente Pregunta</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
