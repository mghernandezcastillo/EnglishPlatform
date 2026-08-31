import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Flame, Star, Share2, Home, Clock, Award, Sparkles, Zap, Hammer, Headphones } from 'lucide-react';
import { TigerMentor } from './TigerMentor';

interface MissionResultsScreenProps {
  classTitle: string;
  classId: string;
  results: {
    speedCards: { score: number; total: number; unknownTerms: string[] };
    buildIt: { score: number; total: number; hintsUsed: number };
    earCheck: { score: number; total: number };
    totalXp: number;
    accuracyPct: number;
    timeSpentSeconds: number;
  };
  streak: { currentStreak: number; longestStreak: number };
  badge: { name: string; emoji: string } | null;
  theme: 'vibrant' | 'cool';
  studentName: string;
  onGoHome: () => void;
}

const AnimatedCounter = ({ value, duration = 1500 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * value));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span>{count}</span>;
};

const Confetti = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-sm animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            backgroundColor: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random() > 0.5 ? 1 : 0.7,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
      <style>
        {`
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(1000px) rotate(720deg); opacity: 0; }
          }
          .animate-confetti {
            animation-name: confetti;
            animation-timing-function: cubic-bezier(.37,0,.63,1);
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
};

export function MissionResultsScreen({
  classTitle,
  classId,
  results,
  streak,
  badge,
  theme,
  studentName,
  onGoHome
}: MissionResultsScreenProps) {
  const [showToast, setShowToast] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const getSpeedCardsRating = (score: number, total: number) => {
    if (score === total) return '💯';
    if (score >= total - 2) return '⭐⭐';
    return '⭐';
  };

  const handleShareWhatsApp = () => {
    const text = `🏆 *MISSION COMPLETE!*\n\nMaven English Academy\n─────────────────────\n📚 *${classTitle}*\n\n⚡ Speed Cards: ${results.speedCards.score}/${results.speedCards.total}\n🔨 Build It: ${results.buildIt.score}/${results.buildIt.total}\n🎧 Ear Check: ${results.earCheck.score}/${results.earCheck.total}\n\n⭐ *Total: ${results.totalXp} XP*\n🔥 Racha: ${streak.currentStreak} días\n${badge ? `🏅 Badge: ${badge.emoji} ${badge.name}\n` : ''}\n🚀 *¡Aprende inglés con Maven English!*\nmaven-english.com`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSaveImage = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const isVibrant = theme === 'vibrant';
  
  const bgClass = isVibrant 
    ? 'bg-gradient-to-b from-amber-400 via-orange-500 to-red-500' 
    : 'bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950';
    
  const cardClass = isVibrant
    ? 'bg-white shadow-2xl shadow-orange-900/50 text-slate-800'
    : 'bg-slate-800 shadow-2xl shadow-blue-900/50 text-white border border-slate-700';

  const sectionClass = isVibrant
    ? 'bg-slate-50 border border-slate-100 rounded-2xl p-4'
    : 'bg-slate-900/50 border border-slate-700/50 rounded-2xl p-4';

  const textPrimary = isVibrant ? 'text-slate-900' : 'text-white';
  const textSecondary = isVibrant ? 'text-slate-500' : 'text-slate-400';

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 ${bgClass}`}>
      <Confetti />
      
      <motion.div 
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        className={`w-full max-w-md ${cardClass} rounded-3xl overflow-hidden relative z-10 my-8`}
      >
        {/* Header with 3D Mascot */}
        <div className={`pt-6 pb-5 px-6 text-center ${isVibrant ? 'bg-gradient-to-b from-orange-50 to-white' : 'bg-gradient-to-b from-slate-800/80 to-slate-800'}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="flex justify-center mb-3"
          >
            <TigerMentor 
              pose="celebrating"
              size="lg"
              dialogue="¡Misión Cumplida, Campeón!"
              subtext="¡Gran trabajo dominando tu inglés hoy!"
              isCoolTheme={!isVibrant}
            />
          </motion.div>
          
          <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ¡Victoria de Clase!
          </h1>
          <p className="font-bold text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
            Maven English Academy
          </p>
          <h2 className={`text-xl font-bold ${textPrimary} mb-2`}>
            {classTitle}
          </h2>
          <p className={`text-sm ${textSecondary} flex items-center justify-center gap-1`}>
            <Clock size={14} /> Completado en {formatTime(results.timeSpentSeconds)}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 space-y-6">
          {/* Main Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`${isVibrant ? 'bg-orange-100' : 'bg-slate-700'} p-4 rounded-2xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105`}>
              <div className="flex items-center gap-1 text-orange-500 mb-1">
                <Star className="fill-current" size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">XP Total</span>
              </div>
              <div className={`text-4xl font-black ${isVibrant ? 'text-orange-600' : 'text-orange-400'}`}>
                <AnimatedCounter value={results.totalXp} />
              </div>
            </div>

            <div className={`${isVibrant ? 'bg-red-50' : 'bg-slate-700'} p-4 rounded-2xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105`}>
              <div className="flex items-center gap-1 text-red-500 mb-1">
                <Flame className="fill-current" size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">Racha</span>
              </div>
              <div className={`text-4xl font-black ${isVibrant ? 'text-red-600' : 'text-red-400'}`}>
                <AnimatedCounter value={streak.currentStreak} />
                <span className="text-lg ml-1">días</span>
              </div>
            </div>
          </div>

          {/* Scores Breakdown */}
          <div className={sectionClass}>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${textSecondary}`}>Resultados</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${isVibrant ? 'bg-amber-100 text-amber-600' : 'bg-amber-900/50 text-amber-400'}`}>
                    <Zap size={16} />
                  </div>
                  <span className={`font-semibold ${textPrimary}`}>Speed Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${textPrimary}`}>{results.speedCards.score}/{results.speedCards.total}</span>
                  <span className="text-lg">{getSpeedCardsRating(results.speedCards.score, results.speedCards.total)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${isVibrant ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/50 text-blue-400'}`}>
                    <Hammer size={16} />
                  </div>
                  <span className={`font-semibold ${textPrimary}`}>Build It</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${textPrimary}`}>{results.buildIt.score}/{results.buildIt.total}</span>
                  <span className="text-green-500 font-bold">{results.buildIt.score === results.buildIt.total ? '✅' : (results.buildIt.score > 0 ? '✔️' : '❌')}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${isVibrant ? 'bg-purple-100 text-purple-600' : 'bg-purple-900/50 text-purple-400'}`}>
                    <Headphones size={16} />
                  </div>
                  <span className={`font-semibold ${textPrimary}`}>Ear Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${textPrimary}`}>{results.earCheck.score}/{results.earCheck.total}</span>
                  <span className="text-green-500 font-bold">{results.earCheck.score === results.earCheck.total ? '✅' : (results.earCheck.score > 0 ? '✔️' : '❌')}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className={`font-semibold ${textSecondary}`}>Precisión</span>
                <span className={`font-bold ${results.accuracyPct >= 80 ? 'text-green-500' : textPrimary}`}>{Math.round(results.accuracyPct)}%</span>
              </div>
            </div>
          </div>

          {/* Badge Reveal */}
          {badge && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl ${isVibrant ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200' : 'bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-500'}`}
            >
              <div className="text-4xl animate-bounce">{badge.emoji}</div>
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider ${isVibrant ? 'text-amber-600' : 'text-amber-400'} flex items-center gap-1`}>
                  <Sparkles size={12} /> Nuevo Badge Desbloqueado
                </div>
                <div className={`text-lg font-bold ${textPrimary}`}>{badge.name}</div>
              </div>
            </motion.div>
          )}

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <button 
              onClick={handleShareWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#128C7E] active:scale-[0.98] transition-all shadow-lg shadow-green-500/30"
            >
              <Share2 size={20} /> Compartir en WhatsApp
            </button>
            
            <button 
              onClick={handleSaveImage}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold active:scale-[0.98] transition-all ${isVibrant ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
            >
              <Award size={20} /> Guardar como imagen
            </button>

            <button 
              onClick={onGoHome}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold active:scale-[0.98] transition-all mt-4 ${isVibrant ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30' : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'}`}
            >
              <Home size={20} /> Volver a Misiones
            </button>
          </div>
        </div>
      </motion.div>

      {/* Toast Notification */}
      {showToast && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl font-semibold z-[60]"
        >
          ¡Próximamente! 📸
        </motion.div>
      )}
    </div>
  );
}
