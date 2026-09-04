import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, Hammer, Headphones } from 'lucide-react';
import { SpeedCards } from './SpeedCards';
import { BuildIt } from './BuildIt';
import { EarCheck } from './EarCheck';
import { MissionResultsScreen } from './MissionResultsScreen';
import { TigerMentor } from './TigerMentor';
import { missionService, type MissionContent } from '../../lib/missionService';
import { chunkSentenceIntoBlocks } from '../../lib/sentenceChunker';

export interface MissionResults {
  speedCards: { score: number; total: number; unknownTerms: string[] };
  buildIt: { score: number; total: number; hintsUsed: number };
  earCheck: { score: number; total: number };
  totalXp: number;
  accuracyPct: number;
  timeSpentSeconds: number;
}

interface MissionRunnerProps {
  classId: string;
  classTitle: string;
  content: MissionContent;
  studentId: string;
  studentName: string;
  theme: 'vibrant' | 'cool';
  onComplete: (results: MissionResults) => void;
  onExit: () => void;
}

type MissionStage = 'intro' | 'speed_cards' | 'build_it' | 'ear_check' | 'results';
type InterstitialState = null | 'speed_cards_to_build_it' | 'build_it_to_ear_check';

function normalizeBuildItAnswer(value: string) {
  return value
    .replace(/[’`]/g, "'")
    .replace(/\b(don|doesn|didn|isn|aren|wasn|weren|couldn|shouldn|wouldn|haven|hasn|hadn|can|won)\s+t\b/gi, "$1't")
    .replace(/\bo\s+clock\b/gi, "o'clock")
    .replace(/[.,!?;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanBuildItPrompt(value: string) {
  const prompt = value.trim();
  return /^["'“‘]/.test(prompt) ? prompt : prompt.replace(/["'”’]\s*$/, '');
}

export function MissionRunner({
  classId,
  classTitle,
  content,
  studentId,
  studentName,
  theme,
  onComplete,
  onExit
}: MissionRunnerProps) {
  const [stage, setStage] = useState<MissionStage>('intro');
  const [interstitial, setInterstitial] = useState<InterstitialState>(null);
  const [countdown, setCountdown] = useState<number>(3);
  const [startTime] = useState<number>(Date.now());
  const [results, setResults] = useState<Partial<MissionResults>>({});
  const transitionLockedRef = useRef(false);
  const transitionTimerRef = useRef<number | null>(null);
  const completionLockedRef = useRef(false);

  // Accept both legacy prompt/answer entries and the newer spanish/english shape.
  // Correct tokens are derived from the answer so repeated words never disappear
  // and unrelated distractors from another sentence cannot leak into the exercise.
  const buildItMapped = useMemo(() => content.buildIt.map((item: any) => {
    const english = normalizeBuildItAnswer(item.answer || item.english || '');
    const tokens = chunkSentenceIntoBlocks(english, item.tokens);
    return {
      spanish: cleanBuildItPrompt(item.prompt || item.spanish || ''),
      english,
      tokens: tokens.length > 0 ? tokens : [english],
      hints: item.hints || []
    };
  }), [content.buildIt]);

  // Countdown timer for intro
  useEffect(() => {
    if (stage === 'intro') {
      let launchTimer: number | null = null;
      const timer = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            window.clearInterval(timer);
            launchTimer = window.setTimeout(() => setStage('speed_cards'), 1000);
            return 0; // 0 means GO!
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        window.clearInterval(timer);
        if (launchTimer !== null) window.clearTimeout(launchTimer);
      };
    }
  }, [stage]);

  useEffect(() => () => {
    if (transitionTimerRef.current !== null) window.clearTimeout(transitionTimerRef.current);
  }, []);

  const handleExit = () => {
    if (window.confirm('La misión no se guardará. ¿Salir?')) {
      onExit();
    }
  };

  const handleSpeedCardsComplete = (res: { score: number; total: number; unknownTerms: string[] }) => {
    if (transitionLockedRef.current) return;
    transitionLockedRef.current = true;
    setResults(prev => ({ ...prev, speedCards: res }));
    setInterstitial('speed_cards_to_build_it');
    transitionTimerRef.current = window.setTimeout(() => {
      setInterstitial(null);
      setStage('build_it');
      transitionLockedRef.current = false;
    }, 2000);
  };

  const handleBuildItComplete = (res: { score: number; total: number; hintsUsed: number }) => {
    if (transitionLockedRef.current) return;
    transitionLockedRef.current = true;
    setResults(prev => ({ ...prev, buildIt: res }));
    setInterstitial('build_it_to_ear_check');
    transitionTimerRef.current = window.setTimeout(() => {
      setInterstitial(null);
      setStage('ear_check');
      transitionLockedRef.current = false;
    }, 2000);
  };

  const handleEarCheckComplete = (res: { score: number; total: number }) => {
    if (completionLockedRef.current) return;
    completionLockedRef.current = true;
    const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);

    const sc = results.speedCards || { score: 0, total: content.speedCards.length, unknownTerms: [] };
    const bi = results.buildIt || { score: 0, total: content.buildIt.length, hintsUsed: 0 };
    const ec = res;
    
    const totalScore = sc.score + bi.score + ec.score;
    const totalPossible = sc.total + bi.total + ec.total;
    const accuracyPct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    
    // XP Calculation logic
    const baseXP = totalScore * 10;
    const accuracyBonus = accuracyPct >= 90 ? 50 : accuracyPct >= 70 ? 25 : 0;
    const totalXp = baseXP + accuracyBonus;

    const finalResults: MissionResults = {
      speedCards: sc,
      buildIt: bi,
      earCheck: ec,
      totalXp,
      accuracyPct,
      timeSpentSeconds
    };
    
    // PERMANENT PERSISTENCE TO SUPABASE & LOCAL STORAGE
    const effectiveStudentId = studentId || 'guest-student';
    missionService.completeMission(effectiveStudentId, classId, totalXp, accuracyPct).catch(console.error);
    missionService.updateStreak(effectiveStudentId, totalXp).catch(console.error);
    if (content.badgeName) {
      missionService.awardBadge(effectiveStudentId, classId, content.badgeName, content.badgeEmoji || '🏆', accuracyPct).catch(console.error);
    }
    
    setResults(finalResults);
    setStage('results');
  };

  const bgGradient = theme === 'vibrant'
    ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'
    : 'bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600';

  if (stage === 'intro') {
    return (
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white ${bgGradient} overflow-hidden p-4`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center flex flex-col items-center max-w-lg"
        >
          {/* 3D Tiger Mascot Greeting */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <TigerMentor
              pose="wave"
              size="lg"
              dialogue="¡Vamos con toda la energía!"
              subtext="Demuestra tu dominio del inglés en cada estación ⚡"
              isCoolTheme={theme === 'cool'}
            />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6"
          >
            <h2 className="text-sm md:text-base font-bold tracking-widest text-white/80 uppercase mb-1">MISIÓN OFICIAL</h2>
            <h1 className="text-2xl md:text-4xl font-black drop-shadow-lg">{classTitle}</h1>
          </motion.div>
          
          <div className="h-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={countdown}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.5, y: -20 }}
                className="text-6xl md:text-8xl font-black text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.6)]"
              >
                {countdown > 0 ? countdown : '¡GO! 🚀'}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    );
  }

  if (stage === 'results' && results.speedCards && results.buildIt && results.earCheck) {
    return (
      <MissionResultsScreen
        results={results as MissionResults}
        classId={classId}
        classTitle={classTitle}
        streak={{ currentStreak: 0, longestStreak: 0 }}
        badge={null}
        studentName={studentName || ''}
        theme={theme}
        onGoHome={() => onComplete(results as MissionResults)}
      />
    );
  }

  // Interstitial rendering
  if (interstitial) {
    const isFirst = interstitial === 'speed_cards_to_build_it';
    const nextStation = isFirst ? '🔨 Build It' : '🎧 Ear Check';
    const score = isFirst ? results.speedCards?.score : results.buildIt?.score;

    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center text-white ${bgGradient} p-4`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center p-6 md:p-8 bg-black/30 backdrop-blur-md rounded-3xl border border-white/20 max-w-md w-full flex flex-col items-center"
        >
          <div className="mb-4">
            <TigerMentor
              pose={isFirst ? 'thinking' : 'listening'}
              size="md"
              dialogue={isFirst ? '¡Gran agilidad en vocabulario! Ahora vamos a ensamblar oraciones 🧠' : '¡Excelente estructura gramatical! Ahora agudiza tu oído 🎧'}
              isCoolTheme={theme === 'cool'}
            />
          </div>

          <h2 className="text-2xl font-black mb-1">¡Estación {isFirst ? '1' : '2'} completada!</h2>
          <p className="text-yellow-300 font-bold text-lg mb-6">Puntuación: {score} pts</p>
          <div className="bg-white/10 px-6 py-3 rounded-2xl inline-flex flex-col items-center border border-white/10">
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">Siguiente reto</span>
            <span className="text-lg font-extrabold text-white">{nextStation}</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 flex flex-col ${theme === 'vibrant' ? 'bg-slate-50' : 'bg-slate-100'}`}>
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between z-10 shadow-sm">
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
          <div className="text-sm font-bold text-slate-800 truncate max-w-[120px] sm:max-w-xs">{classTitle}</div>
          <div className="flex items-center space-x-2 text-slate-300">
            {/* Station 1: Speed Cards */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${stage === 'speed_cards' ? 'bg-indigo-600 text-white shadow-md' : results.speedCards ? 'bg-green-500 text-white' : 'bg-slate-100'}`}>
              <Zap size={16} />
            </div>
            <div className={`w-4 h-0.5 ${results.speedCards ? 'bg-green-500' : 'bg-slate-200'}`}></div>
            {/* Station 2: Build It */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${stage === 'build_it' ? 'bg-indigo-600 text-white shadow-md' : results.buildIt ? 'bg-green-500 text-white' : 'bg-slate-100'}`}>
              <Hammer size={16} />
            </div>
            <div className={`w-4 h-0.5 ${results.buildIt ? 'bg-green-500' : 'bg-slate-200'}`}></div>
            {/* Station 3: Ear Check */}
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${stage === 'ear_check' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100'}`}>
              <Headphones size={16} />
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleExit}
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Salir de la misión"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {stage === 'speed_cards' && (
            <motion.div
              key="speed_cards"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0"
            >
              <SpeedCards 
                cards={content.speedCards} 
                theme={theme}
                onComplete={handleSpeedCardsComplete} 
              />
            </motion.div>
          )}

          {stage === 'build_it' && (
            <motion.div
              key="build_it"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0"
            >
              <BuildIt 
                sentences={buildItMapped} 
                theme={theme}
                onComplete={handleBuildItComplete} 
              />
            </motion.div>
          )}

          {stage === 'ear_check' && (
            <motion.div
              key="ear_check"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0"
            >
              <EarCheck 
                items={content.earCheck} 
                theme={theme}
                onComplete={handleEarCheckComplete} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
