import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Dices, X, RefreshCw, Volume2 } from 'lucide-react';

const COMMON_VERBS = [
  { present: 'Be', past: 'Was/Were', participle: 'Been', spanish: 'Ser / Estar' },
  { present: 'Have', past: 'Had', participle: 'Had', spanish: 'Tener / Haber' },
  { present: 'Do', past: 'Did', participle: 'Done', spanish: 'Hacer' },
  { present: 'Say', past: 'Said', participle: 'Said', spanish: 'Decir' },
  { present: 'Go', past: 'Went', participle: 'Gone', spanish: 'Ir' },
  { present: 'Get', past: 'Got', participle: 'Gotten', spanish: 'Obtener / Conseguir' },
  { present: 'Make', past: 'Made', participle: 'Made', spanish: 'Hacer / Fabricar' },
  { present: 'Know', past: 'Knew', participle: 'Known', spanish: 'Saber / Conocer' },
  { present: 'Think', past: 'Thought', participle: 'Thought', spanish: 'Pensar' },
  { present: 'Take', past: 'Took', participle: 'Taken', spanish: 'Tomar / Llevar' },
  { present: 'See', past: 'Saw', participle: 'Seen', spanish: 'Ver' },
  { present: 'Come', past: 'Came', participle: 'Come', spanish: 'Venir' },
  { present: 'Want', past: 'Wanted', participle: 'Wanted', spanish: 'Querer' },
  { present: 'Look', past: 'Looked', participle: 'Looked', spanish: 'Mirar' },
  { present: 'Use', past: 'Used', participle: 'Used', spanish: 'Usar' },
  { present: 'Find', past: 'Found', participle: 'Found', spanish: 'Encontrar' },
  { present: 'Give', past: 'Gave', participle: 'Given', spanish: 'Dar' },
  { present: 'Tell', past: 'Told', participle: 'Told', spanish: 'Decir / Contar' },
  { present: 'Work', past: 'Worked', participle: 'Worked', spanish: 'Trabajar' },
  { present: 'Call', past: 'Called', participle: 'Called', spanish: 'Llamar' },
  { present: 'Try', past: 'Tried', participle: 'Tried', spanish: 'Intentar / Probar' },
  { present: 'Ask', past: 'Asked', participle: 'Asked', spanish: 'Preguntar / Pedir' },
  { present: 'Need', past: 'Needed', participle: 'Needed', spanish: 'Necesitar' },
  { present: 'Feel', past: 'Felt', participle: 'Felt', spanish: 'Sentir' },
  { present: 'Become', past: 'Became', participle: 'Become', spanish: 'Llegar a ser / Convertirse' },
  { present: 'Leave', past: 'Left', participle: 'Left', spanish: 'Dejar / Salir' },
  { present: 'Put', past: 'Put', participle: 'Put', spanish: 'Poner' },
  { present: 'Mean', past: 'Meant', participle: 'Meant', spanish: 'Significar' },
  { present: 'Keep', past: 'Kept', participle: 'Kept', spanish: 'Mantener / Guardar' },
  { present: 'Let', past: 'Let', participle: 'Let', spanish: 'Dejar / Permitir' },
  { present: 'Begin', past: 'Began', participle: 'Begun', spanish: 'Empezar' },
  { present: 'Seem', past: 'Seemed', participle: 'Seemed', spanish: 'Parecer' },
  { present: 'Help', past: 'Helped', participle: 'Helped', spanish: 'Ayudar' },
  { present: 'Talk', past: 'Talked', participle: 'Talked', spanish: 'Hablar' },
  { present: 'Turn', past: 'Turned', participle: 'Turned', spanish: 'Girar / Voltear' },
  { present: 'Start', past: 'Started', participle: 'Started', spanish: 'Comenzar' },
  { present: 'Show', past: 'Showed', participle: 'Shown', spanish: 'Mostrar / Enseñar' },
  { present: 'Hear', past: 'Heard', participle: 'Heard', spanish: 'Oír' },
  { present: 'Play', past: 'Played', participle: 'Played', spanish: 'Jugar / Tocar (instrumento)' },
  { present: 'Run', past: 'Ran', participle: 'Run', spanish: 'Correr' },
  { present: 'Move', past: 'Moved', participle: 'Moved', spanish: 'Mover' },
  { present: 'Like', past: 'Liked', participle: 'Liked', spanish: 'Gustar' },
  { present: 'Live', past: 'Lived', participle: 'Lived', spanish: 'Vivir' },
  { present: 'Believe', past: 'Believed', participle: 'Believed', spanish: 'Creer' },
  { present: 'Hold', past: 'Held', participle: 'Held', spanish: 'Sostener' },
  { present: 'Bring', past: 'Brought', participle: 'Brought', spanish: 'Traer' },
  { present: 'Happen', past: 'Happened', participle: 'Happened', spanish: 'Suceder / Pasar' },
  { present: 'Must', past: 'Had to', participle: '-', spanish: 'Deber (obligación)' },
  { present: 'Write', past: 'Wrote', participle: 'Written', spanish: 'Escribir' },
  { present: 'Provide', past: 'Provided', participle: 'Provided', spanish: 'Proveer' },
  { present: 'Sit', past: 'Sat', participle: 'Sat', spanish: 'Sentarse' },
  { present: 'Stand', past: 'Stood', participle: 'Stood', spanish: 'Pararse / Estar de pie' },
  { present: 'Lose', past: 'Lost', participle: 'Lost', spanish: 'Perder' },
  { present: 'Pay', past: 'Paid', participle: 'Paid', spanish: 'Pagar' },
  { present: 'Meet', past: 'Met', participle: 'Met', spanish: 'Conocer / Encontrarse' },
  { present: 'Include', past: 'Included', participle: 'Included', spanish: 'Incluir' },
  { present: 'Continue', past: 'Continued', participle: 'Continued', spanish: 'Continuar' },
  { present: 'Set', past: 'Set', participle: 'Set', spanish: 'Configurar / Establecer' },
  { present: 'Learn', past: 'Learned/Learnt', participle: 'Learned/Learnt', spanish: 'Aprender' },
  { present: 'Change', past: 'Changed', participle: 'Changed', spanish: 'Cambiar' },
  { present: 'Lead', past: 'Led', participle: 'Led', spanish: 'Liderar / Guiar' },
  { present: 'Understand', past: 'Understood', participle: 'Understood', spanish: 'Entender' },
  { present: 'Watch', past: 'Watched', participle: 'Watched', spanish: 'Observar / Mirar' },
  { present: 'Follow', past: 'Followed', participle: 'Followed', spanish: 'Seguir' },
  { present: 'Stop', past: 'Stopped', participle: 'Stopped', spanish: 'Detener / Parar' },
  { present: 'Create', past: 'Created', participle: 'Created', spanish: 'Crear' },
  { present: 'Speak', past: 'Spoke', participle: 'Spoken', spanish: 'Hablar' },
  { present: 'Read', past: 'Read [red]', participle: 'Read [red]', spanish: 'Leer' },
  { present: 'Allow', past: 'Allowed', participle: 'Allowed', spanish: 'Permitir' },
  { present: 'Add', past: 'Added', participle: 'Added', spanish: 'Añadir' },
  { present: 'Spend', past: 'Spent', participle: 'Spent', spanish: 'Gastar / Pasar (tiempo)' },
  { present: 'Grow', past: 'Grew', participle: 'Grown', spanish: 'Crecer / Cultivar' },
  { present: 'Open', past: 'Opened', participle: 'Opened', spanish: 'Abrir' },
  { present: 'Walk', past: 'Walked', participle: 'Walked', spanish: 'Caminar' },
  { present: 'Win', past: 'Won', participle: 'Won', spanish: 'Ganar' },
  { present: 'Offer', past: 'Offered', participle: 'Offered', spanish: 'Ofrecer' },
  { present: 'Remember', past: 'Remembered', participle: 'Remembered', spanish: 'Recordar' },
  { present: 'Love', past: 'Loved', participle: 'Loved', spanish: 'Amar / Encantar' },
  { present: 'Consider', past: 'Considered', participle: 'Considered', spanish: 'Considerar' },
  { present: 'Appear', past: 'Appeared', participle: 'Appeared', spanish: 'Aparecer' },
  { present: 'Buy', past: 'Bought', participle: 'Bought', spanish: 'Comprar' },
  { present: 'Wait', past: 'Waited', participle: 'Waited', spanish: 'Esperar' },
  { present: 'Serve', past: 'Served', participle: 'Served', spanish: 'Servir' },
  { present: 'Die', past: 'Died', participle: 'Died', spanish: 'Morir' },
  { present: 'Send', past: 'Sent', participle: 'Sent', spanish: 'Enviar' },
  { present: 'Expect', past: 'Expected', participle: 'Expected', spanish: 'Esperar (expectativa)' },
  { present: 'Build', past: 'Built', participle: 'Built', spanish: 'Construir' },
  { present: 'Stay', past: 'Stayed', participle: 'Stayed', spanish: 'Quedarse' },
  { present: 'Fall', past: 'Fell', participle: 'Fallen', spanish: 'Caer' },
  { present: 'Cut', past: 'Cut', participle: 'Cut', spanish: 'Cortar' },
  { present: 'Reach', past: 'Reached', participle: 'Reached', spanish: 'Alcanzar / Llegar' },
  { present: 'Kill', past: 'Killed', participle: 'Killed', spanish: 'Matar' },
  { present: 'Remain', past: 'Remained', participle: 'Remained', spanish: 'Permanecer' }
];

export function VerbsGame({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentVerb, setCurrentVerb] = useState(COMMON_VERBS[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (isOpen) {
      rollVerb();
    }
  }, [isOpen]);

  const rollVerb = () => {
    if (isRolling) return;
    setIsRolling(true);
    setIsFlipped(false);
    
    // Quick randomizing effect
    let count = 0;
    const interval = setInterval(() => {
      const randomBase = COMMON_VERBS[Math.floor(Math.random() * COMMON_VERBS.length)];
      setCurrentVerb(randomBase);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsRolling(false);
        const finalObj = COMMON_VERBS[Math.floor(Math.random() * COMMON_VERBS.length)];
        setCurrentVerb(finalObj);
      }
    }, 50);
  };

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed bottom-32 left-24 w-[340px] bg-white rounded-2xl shadow-2xl border border-indigo-100 z-[9999] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 flex justify-between items-center cursor-move text-white">
            <h3 className="font-bold flex items-center gap-2 pointer-events-none text-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" /> Verbos Aleatorios
            </h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-indigo-100 hover:text-white transition-colors"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            className="p-6 pb-8 flex flex-col items-center bg-slate-50/50"
            onPointerDown={(e) => e.stopPropagation()}
          >
            {/* Flashcard */}
            <div 
              className="relative w-full h-[180px] [perspective:1000px] mb-6 cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Front */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-white border-2 border-indigo-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 hover:border-indigo-300 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Inglés</span>
                  <h2 className="text-5xl font-black text-indigo-900 tracking-tight">{currentVerb.present}</h2>
                  <p className="text-sm text-gray-400 mt-4 text-center font-medium">Toca para traducir</p>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-white border-2 border-purple-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6" style={{ transform: 'rotateY(180deg)' }}>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Español</span>
                  <h2 className="text-3xl font-bold text-purple-900 text-center">{currentVerb.spanish}</h2>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 w-full text-center space-y-1">
                    <p className="text-xs text-gray-500 font-mono"><span className="text-gray-400">Past:</span> {currentVerb.past}</p>
                    <p className="text-xs text-gray-500 font-mono"><span className="text-gray-400">Part:</span> {currentVerb.participle}</p>
                  </div>
                </div>
              </motion.div>

              {/* Speaker Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playPronunciation(currentVerb.present);
                }}
                className="absolute top-4 right-4 p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors z-10 opacity-0 group-hover:opacity-100"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={rollVerb}
              disabled={isRolling}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-md transition-all ${
                isRolling 
                  ? 'bg-gray-400 scale-95' 
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              <RefreshCw className={`w-5 h-5 ${isRolling ? 'animate-spin' : ''}`} />
              Siguiente Verbo
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
