import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Check, RotateCcw, ArrowRight } from 'lucide-react';

interface BuildItProps {
  sentences: Array<{
    spanish: string;
    english: string;
    tokens: string[];
    hints: string[];
  }>;
  theme: 'vibrant' | 'cool';
  onComplete: (results: { score: number; total: number; hintsUsed: number }) => void;
}

export function BuildIt({ sentences, theme, onComplete }: BuildItProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [availableTokens, setAvailableTokens] = useState<Array<{ id: string; text: string }>>([]);
  const [assembledTokens, setAssembledTokens] = useState<Array<{ id: string; text: string }>>([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hintTokenId, setHintTokenId] = useState<string | null>(null);
  const verifyLockedRef = useRef(false);
  const feedbackTimerRef = useRef<number | null>(null);
  const selectedTokenIdsRef = useRef<Set<string>>(new Set());

  const currentSentence = sentences[currentIndex];

  // Initialize tokens when sentence changes
  useEffect(() => {
    if (currentSentence) {
      const shuffled = [...currentSentence.tokens]
        .map((text, i) => ({ id: `token-${i}`, text }))
        .sort(() => Math.random() - 0.5);
      
      setAvailableTokens(shuffled);
      setAssembledTokens([]);
      setIsError(false);
      setIsSuccess(false);
      setHintTokenId(null);
      verifyLockedRef.current = false;
      selectedTokenIdsRef.current = new Set();
    }
  }, [currentIndex, currentSentence]);

  useEffect(() => () => {
    if (feedbackTimerRef.current !== null) window.clearTimeout(feedbackTimerRef.current);
  }, []);

  const handleTokenSelect = (token: { id: string; text: string }) => {
    if (verifyLockedRef.current || isVerifying || isSuccess || selectedTokenIdsRef.current.has(token.id)) return;
    selectedTokenIdsRef.current.add(token.id);

    setAvailableTokens((prev) => prev.filter((t) => t.id !== token.id));
    setAssembledTokens((prev) => [...prev, token]);
    setHintTokenId(null);
  };

  const handleTokenRemove = (token: { id: string; text: string }) => {
    if (verifyLockedRef.current || isVerifying || isSuccess || !selectedTokenIdsRef.current.has(token.id)) return;
    selectedTokenIdsRef.current.delete(token.id);

    setAssembledTokens((prev) => prev.filter((t) => t.id !== token.id));
    setAvailableTokens((prev) => [...prev, token]);
  };

  const spanishPrompt = currentSentence?.spanish || (currentSentence as any)?.prompt || '';
  const englishAnswer = currentSentence?.english || (currentSentence as any)?.answer || '';

  const handleUseHint = () => {
    if (verifyLockedRef.current || isVerifying || isSuccess) return;
    
    const correctEnglishTokens = englishAnswer.split(' ');
    const nextExpectedWord = correctEnglishTokens[assembledTokens.length];
    
    if (nextExpectedWord) {
      const hintToken = availableTokens.find(t => t.text === nextExpectedWord);
      if (hintToken) {
        setHintTokenId(hintToken.id);
        setHintsUsed(prev => prev + 1);
      }
    }
  };

  const handleVerify = () => {
    if (verifyLockedRef.current || assembledTokens.length === 0 || !currentSentence) return;
    verifyLockedRef.current = true;
    setIsVerifying(true);
    
    const assembledText = assembledTokens.map(t => t.text).join(' ').trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const correctText = englishAnswer.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    
    if (assembledText === correctText) {
      setIsSuccess(true);
      feedbackTimerRef.current = window.setTimeout(() => {
        if (currentIndex < sentences.length - 1) {
          setCurrentIndex(prev => prev + 1);
          verifyLockedRef.current = false;
        } else {
          onComplete({
            score: sentences.length,
            total: sentences.length,
            hintsUsed
          });
        }
        setIsVerifying(false);
      }, 1500);
    } else {
      setIsError(true);
      feedbackTimerRef.current = window.setTimeout(() => {
        setIsError(false);
        setIsVerifying(false);
        verifyLockedRef.current = false;
      }, 800);
    }
  };

  const bgGradient = theme === 'vibrant' 
    ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600'
    : 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950';

  const tokenStyle = theme === 'vibrant'
    ? 'bg-white text-slate-800 shadow-md'
    : 'bg-slate-700 text-white shadow-md';

  const containerThemeClass = theme === 'vibrant' ? 'text-white' : 'text-white';

  if (!currentSentence) {
    return (
      <div className={`flex h-full w-full flex-col items-center justify-center p-6 text-center ${bgGradient} ${containerThemeClass}`}>
        <RotateCcw className="h-16 w-16 text-white/90" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-black">No pudimos cargar esta frase</h2>
        <p className="mt-2 max-w-md text-white/85">Continúa para conservar el avance de las otras estaciones.</p>
        <button type="button" onClick={() => onComplete({ score: 0, total: sentences.length, hintsUsed })} className="mt-6 min-h-12 rounded-2xl bg-white px-6 font-black text-emerald-700 shadow-lg">
          Continuar
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full w-full p-4 ${bgGradient} ${containerThemeClass}`}>
      {/* Progress */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium opacity-80 uppercase tracking-wider">
          Construye la Frase
        </div>
        <div className="bg-black/20 rounded-full px-4 py-1 text-sm font-bold">
          {currentIndex + 1} / {sentences.length}
        </div>
      </div>

      {/* Spanish Prompt */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 text-center shadow-lg border border-white/10"
      >
        <h2 className="text-2xl font-bold">{spanishPrompt}</h2>
        {currentSentence.hints && currentSentence.hints[0] && (
          <p className="text-sm opacity-80 mt-2">{currentSentence.hints[0]}</p>
        )}
      </motion.div>

      {/* Assembly Zone */}
      <motion.div 
        animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className={`min-h-[120px] rounded-2xl border-2 border-dashed ${isError ? 'border-red-400 bg-red-500/10' : isSuccess ? 'border-green-400 bg-green-500/20' : 'border-white/40 bg-black/10'} p-4 mb-8 flex flex-wrap gap-2 items-start content-start relative`}
      >
        <AnimatePresence>
          {assembledTokens.map((token) => (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              key={token.id}
              onClick={() => handleTokenRemove(token)}
              className={`px-4 py-2 rounded-xl text-lg font-bold transition-colors ${tokenStyle} ${isError ? 'bg-red-500 text-white' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {token.text}
            </motion.button>
          ))}
        </AnimatePresence>
        {assembledTokens.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-50 text-sm font-medium pointer-events-none">
            Toca las palabras para formar la frase
          </div>
        )}
        
        {/* Confetti simulation on success */}
        {isSuccess && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, y: 0, 
                  opacity: 1,
                  scale: 0
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * 300, 
                  y: (Math.random() - 0.5) * 300,
                  opacity: 0,
                  scale: Math.random() * 1.5 + 0.5,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#4ade80', '#facc15', '#60a5fa', '#f472b6'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Available Tokens Pool */}
      <div className="flex-1">
        <div className="flex flex-wrap gap-3 justify-center">
          <AnimatePresence>
            {availableTokens.map((token) => (
              <motion.button
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={hintTokenId === token.id ? {
                  opacity: 1, y: 0, scale: [1, 1.1, 1],
                  boxShadow: ["0px 0px 0px rgba(250,204,21,0)", "0px 0px 15px rgba(250,204,21,0.8)", "0px 0px 0px rgba(250,204,21,0)"]
                } : { opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={hintTokenId === token.id ? { duration: 1, repeat: Infinity } : {}}
                key={token.id}
                onClick={() => handleTokenSelect(token)}
                className={`px-5 py-3 rounded-xl text-lg font-bold ${tokenStyle} ${hintTokenId === token.id ? 'ring-2 ring-yellow-400' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {token.text}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-auto pt-6 gap-4">
        <button
          onClick={handleUseHint}
          disabled={isVerifying || isSuccess || availableTokens.length === 0}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl font-bold transition-colors disabled:opacity-50"
        >
          <Lightbulb size={20} className="text-yellow-300" />
          <span className="hidden sm:inline">Pista</span>
        </button>
        
        <button
          onClick={handleVerify}
          disabled={assembledTokens.length === 0 || isVerifying || isSuccess}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-900/20 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
        >
          {isSuccess ? (
            <>¡Excelente! <ArrowRight size={24} /></>
          ) : (
            <>Verificar <Check size={24} /></>
          )}
        </button>
      </div>
    </div>
  );
}
