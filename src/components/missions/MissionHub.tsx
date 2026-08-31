import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Flame, Star, Target, Trophy, Lock, ChevronRight, Sun, Moon, Zap, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { missionService } from '../../lib/missionService';
import type { Mission, MissionStreak, MissionBadge, ThemeMode, MissionContent } from '../../lib/missionService';
import { TEEN_MISSION_CONTENT, getMissionContentForClass } from '../../lib/missionContentData';
import { TigerMentor } from './TigerMentor';
import { dbAdmin } from '../../lib/db';

const MissionRunner = lazy(() => import('./MissionRunner').then(m => ({ default: m.MissionRunner })));

export interface MissionHubProps {
  studentId: string;
  studentName: string;
  initialMissionClassId?: string | null;
  onBack: () => void;
}

const LEVEL_GROUPS = [
  { id: 'all', label: 'Todas las Misiones', prefix: '' },
  { id: 'basic-zero', label: 'Level 0 • Basic Zero', prefix: 'basic-zero' },
  { id: 'basic-1', label: 'Level 1 • Basic 1', prefix: 'basic-1' },
  { id: 'basic-2', label: 'Level 2 • Basic 2', prefix: 'basic-2' },
  { id: 'basic-3', label: 'Level 3 • Basic 3', prefix: 'basic-3' },
  { id: 'basic-4', label: 'Level 4 • Basic 4', prefix: 'basic-4' },
  { id: 'inter', label: 'Level 5 • Intermediate', prefix: 'inter' },
  { id: 'advanced', label: 'Level 6 • Advanced', prefix: 'advanced' },
  { id: 'elite', label: 'Level 7 • Elite', prefix: 'elite' },
  { id: 'masters', label: 'Level 8/9 • Masters', prefix: 'masters' },
];

export function MissionHub({
  studentId,
  studentName,
  initialMissionClassId,
  onBack,
}: MissionHubProps) {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [streak, setStreak] = useState<MissionStreak | null>(null);
  const [badges, setBadges] = useState<MissionBadge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeMode>('vibrant');
  const [activeMissionClassId, setActiveMissionClassId] = useState<string | null>(null);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [studentCompletedLessons, setStudentCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const effectiveStudentId = studentId || 'guest-student';
        const targetMissionId = initialMissionClassId || (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('mission') : null);

        const savedTheme = await missionService.getTheme(effectiveStudentId);
        if (savedTheme) setTheme(savedTheme);

        // Fetch student lessons from DB to reflect historical completions
        let completedLessons: string[] = [];
        try {
          const students = await dbAdmin.getStudents();
          const current = students.find(s => s.id === effectiveStudentId);
          if (current?.completed_lessons) {
            completedLessons = current.completed_lessons;
            setStudentCompletedLessons(completedLessons);
          }
        } catch {}

        const [loadedMissions, loadedStreak, loadedBadges] = await Promise.all([
          missionService.getStudentMissions(effectiveStudentId),
          missionService.getStudentStreak(effectiveStudentId),
          missionService.getStudentBadges(effectiveStudentId),
        ]);

        const missionMap = new Map<string, Mission>();
        loadedMissions.forEach(m => missionMap.set(m.classId, m));

        // Create full list from TEEN_MISSION_CONTENT
        const fullMissions: Mission[] = TEEN_MISSION_CONTENT.map((mc, idx) => {
          const existing = missionMap.get(mc.classId);
          if (existing) return existing;

          const isCompletedInLessons = completedLessons.includes(mc.classId);
          const isTarget = targetMissionId && (mc.classId === targetMissionId || mc.classId.includes(targetMissionId));
          const isFirst = idx === 0;
          const isUnlocked = isCompletedInLessons || isTarget || isFirst;

          return {
            id: `mission-${mc.classId}`,
            studentId: effectiveStudentId,
            classId: mc.classId,
            status: isCompletedInLessons ? ('completed' as const) : isUnlocked ? ('unlocked' as const) : ('locked' as const),
            speedCardsScore: 0, speedCardsTotal: 7,
            buildItScore: 0, buildItTotal: 3,
            earCheckScore: 0, earCheckTotal: 3,
            bonusCompleted: false, bonusType: null,
            totalXp: isCompletedInLessons ? 150 : 0, 
            accuracyPct: isCompletedInLessons ? 100 : 0, 
            timeSpentSeconds: 0,
            unlockedAt: isUnlocked ? new Date().toISOString() : null,
            startedAt: null, 
            completedAt: isCompletedInLessons ? new Date().toISOString() : null,
            createdAt: new Date().toISOString(),
          };
        });

        // If target mission requested, unlock it and open directly
        if (targetMissionId) {
          const normalizedTarget = targetMissionId
            .replace(/^c-(adults|kids|teens)-/, 'c-teens-')
            .replace(/^c-bz-/, 'c-teens-basic-zero-');
          const targetIndex = fullMissions.findIndex(m => 
            m.classId === targetMissionId || 
            m.classId === normalizedTarget ||
            m.classId.includes(normalizedTarget)
          );
          if (targetIndex !== -1) {
            fullMissions[targetIndex].status = 'unlocked';
            fullMissions[targetIndex].unlockedAt = new Date().toISOString();
            missionService.unlockMission(effectiveStudentId, fullMissions[targetIndex].classId).catch(() => {});
            setActiveMissionClassId(fullMissions[targetIndex].classId);
          }
        }

        setMissions(fullMissions);
        setStreak(loadedStreak);
        setBadges(loadedBadges);
      } catch (error) {
        console.error("Error loading missions data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [studentId, initialMissionClassId]);

  const handleChangeTheme = async (newTheme: ThemeMode) => {
    setTheme(newTheme);
    await missionService.setTheme(studentId || 'guest-student', newTheme);
  };

  const handleStartMission = (classId: string) => {
    setActiveMissionClassId(classId);
  };

  const handleMissionComplete = async () => {
    setActiveMissionClassId(null);
    const effectiveStudentId = studentId || 'guest-student';
    const [loadedMissions, loadedStreak, loadedBadges] = await Promise.all([
      missionService.getStudentMissions(effectiveStudentId),
      missionService.getStudentStreak(effectiveStudentId),
      missionService.getStudentBadges(effectiveStudentId),
    ]);
    if (loadedMissions.length > 0) {
      setMissions(prev => prev.map(m => loadedMissions.find(lm => lm.classId === m.classId) || m));
    }
    setStreak(loadedStreak);
    setBadges(loadedBadges);
  };

  // If running a mission, show MissionRunner
  if (activeMissionClassId) {
    const content = getMissionContentForClass(activeMissionClassId);
    if (content) {
      const missionContent: MissionContent = {
        classId: content.classId,
        speedCards: content.speedCards,
        buildIt: content.buildIt,
        earCheck: content.earCheck,
        bonusChallenges: content.bonusChallenges,
        badgeName: content.badgeName,
        badgeEmoji: content.badgeEmoji,
      };
      return (
        <Suspense fallback={<div className="fixed inset-0 z-50 bg-slate-900/80 flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>}>
          <MissionRunner
            classId={activeMissionClassId}
            classTitle={getClassTitle(activeMissionClassId)}
            content={missionContent}
            studentId={studentId || 'guest-student'}
            studentName={studentName || 'Estudiante'}
            theme={theme}
            onComplete={handleMissionComplete}
            onExit={() => setActiveMissionClassId(null)}
          />
        </Suspense>
      );
    }
  }

  const activeList = missions.filter(m => m.status === 'unlocked' || m.status === 'in_progress');
  const completedList = missions.filter(m => m.status === 'completed').sort((a, b) => {
    const dateA = a.completedAt ? new Date(a.completedAt).getTime() : 0;
    const dateB = b.completedAt ? new Date(b.completedAt).getTime() : 0;
    return dateB - dateA;
  });

  // Find the primary recommended active mission
  const mainActiveMission = activeList[activeList.length - 1] || activeList[0] || missions[0];

  const totalXP = completedList.reduce((sum, m) => sum + m.totalXp, 0);
  const totalCompleted = completedList.length;
  const avgAccuracy = totalCompleted > 0 
    ? Math.round(completedList.reduce((sum, m) => sum + m.accuracyPct, 0) / totalCompleted) 
    : 0;
  const longestStreak = streak?.longestStreak || 0;
  const currentStreak = streak?.currentStreak || 0;

  // Theme styling
  const isCool = theme === 'cool';
  const bgGradient = isCool 
    ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-blue-950 text-slate-50' 
    : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-slate-800';
  
  const headerBg = isCool ? 'bg-slate-900/80' : 'bg-white/80';
  const cardBg = isCool ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-amber-100 shadow-sm';
  const cardBorder = isCool ? 'border-slate-700' : 'border-slate-200';
  
  const activeCardGradient = isCool
    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-500'
    : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-orange-400';

  const statsCardBg = isCool ? 'bg-slate-800/60' : 'bg-white/60 shadow-sm border border-slate-100';
  const textMuted = isCool ? 'text-slate-400' : 'text-slate-500';

  function getClassTitle(classId: string) {
    const content = getMissionContentForClass(classId);
    if (!content) return classId;
    return `${content.badgeEmoji} ${content.badgeName}`;
  }

  function getClassLabel(classId: string) {
    const content = getMissionContentForClass(classId);
    return content ? `${content.badgeEmoji} ${classId.replace(/^c-(teens|adults|kids)-/, '').replace(/-/g, ' ').toUpperCase()}` : classId;
  }

  const filteredMissions = missions.filter(m => {
    if (selectedLevelFilter === 'all') return true;
    return m.classId.includes(selectedLevelFilter);
  });

  return (
    <div className={`min-h-screen ${bgGradient} font-sans pb-24 overflow-x-hidden selection:bg-amber-500/30`}>
      {/* Header */}
      <header className={`sticky top-0 z-20 backdrop-blur-md border-b ${isCool ? 'border-slate-800' : 'border-slate-200'} ${headerBg} px-4 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className={`p-2 rounded-full transition-colors ${isCool ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-black tracking-tight flex items-center gap-2">
            🎯 Mis Misiones {studentName ? `• ${studentName}` : ''}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak Badge */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold ${currentStreak > 0 ? (isCool ? 'bg-orange-900/40 text-orange-400 border border-orange-800/50' : 'bg-orange-100 text-orange-600 border border-orange-200') : (isCool ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-400')}`}>
            <motion.div
              animate={{ 
                scale: currentStreak > 0 ? [1, 1.1, 1] : 1,
                opacity: currentStreak > 0 ? [0.8, 1, 0.8] : 0.5 
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Flame className="w-4 h-4" />
            </motion.div>
            <span>{currentStreak}</span>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => handleChangeTheme(isCool ? 'vibrant' : 'cool')}
            className={`p-2 rounded-full transition-colors ${isCool ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
          >
            {isCool ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          >
            <Target className={`w-12 h-12 ${isCool ? 'text-blue-500' : 'text-amber-500'} opacity-50`} />
          </motion.div>
          <p className={textMuted}>Cargando tus misiones...</p>
        </div>
      ) : (
        <main className="p-4 max-w-4xl mx-auto space-y-8 mt-4">
          
          {/* 3D Pixar Tiger Mascot Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 sm:p-5 rounded-3xl border shadow-sm flex flex-col sm:flex-row items-center gap-4 justify-between ${
              isCool 
                ? 'bg-gradient-to-br from-slate-800/90 via-indigo-950/40 to-slate-900 border-indigo-500/30 text-slate-100' 
                : 'bg-gradient-to-br from-amber-50 via-orange-50 to-white border-amber-200/80 text-slate-900'
            }`}
          >
            <TigerMentor 
              pose="wave"
              size="md"
              dialogue={currentStreak > 0 ? `¡Increíble racha de ${currentStreak} días! 🔥 Sigue así.` : (studentName ? `¡Hola ${studentName}! ¿Listo para tu misión de inglés?` : "¡Hola! ¿Listo para tu misión de inglés de hoy?")}
              subtext="Gana XP, desbloquea insignias exclusivas y fortalece tu fluidez."
              isCoolTheme={isCool}
            />
            <div className="hidden sm:flex flex-col items-end text-right shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">Mentor Oficial</span>
              <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300">Maven English 3D</span>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-3 snap-x scrollbar-hide">
            <div className={`snap-start shrink-0 w-36 rounded-2xl p-4 flex flex-col gap-1 ${statsCardBg}`}>
              <div className="flex items-center gap-1.5 text-yellow-500 font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">Total XP</span>
              </div>
              <span className="text-2xl font-black">{totalXP}</span>
            </div>
            
            <div className={`snap-start shrink-0 w-36 rounded-2xl p-4 flex flex-col gap-1 ${statsCardBg}`}>
              <div className="flex items-center gap-1.5 text-emerald-500 font-medium">
                <Target className="w-4 h-4" />
                <span className="text-sm">Completadas</span>
              </div>
              <span className="text-2xl font-black">{totalCompleted}</span>
            </div>
            
            <div className={`snap-start shrink-0 w-36 rounded-2xl p-4 flex flex-col gap-1 ${statsCardBg}`}>
              <div className="flex items-center gap-1.5 text-blue-500 font-medium">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Precisión</span>
              </div>
              <span className="text-2xl font-black">{avgAccuracy}%</span>
            </div>
            
            <div className={`snap-start shrink-0 w-36 rounded-2xl p-4 flex flex-col gap-1 ${statsCardBg}`}>
              <div className="flex items-center gap-1.5 text-orange-500 font-medium">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">Racha Max</span>
              </div>
              <span className="text-2xl font-black">{longestStreak}</span>
            </div>
          </div>

          {/* Active / Current Recommended Mission Card */}
          {mainActiveMission && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-bold px-1 flex items-center gap-2">
                <span>🔥 Tu Misión Asignada</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black">5 MIN</span>
              </h2>
              <div className={`relative overflow-hidden rounded-3xl p-6 ${activeCardGradient} shadow-lg shadow-amber-500/20`}>
                <motion.div
                  className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      {mainActiveMission.status === 'completed' ? 'LISTA PARA REPASAR ✅' : 'MISIÓN DE HOY 🚀'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-1">{getClassTitle(mainActiveMission.classId)}</h3>
                  <p className="text-sm text-white/80 font-medium mb-4">{getClassLabel(mainActiveMission.classId)}</p>

                  <button 
                    onClick={() => handleStartMission(mainActiveMission.classId)}
                    className="w-full py-4 mt-2 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>COMENZAR MISIÓN AHORA</span>
                    <Play className="w-5 h-5 fill-current text-amber-500" />
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {LEVEL_GROUPS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedLevelFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
                  selectedLevelFilter === tab.id
                    ? (isCool ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-900 text-white shadow-md')
                    : (isCool ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-white text-slate-700 hover:bg-amber-100/60 border border-slate-200')
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mission Journey Catalog */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold px-1 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-500" />
                Ruta de Aprendizaje ({filteredMissions.length} Misiones)
              </span>
              <span className="text-xs font-semibold text-slate-400">Pasa cada misión para ganar medallas</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {filteredMissions.map((m) => {
                const isCompleted = m.status === 'completed';
                const isUnlocked = m.status === 'unlocked' || m.status === 'in_progress';
                const isLocked = m.status === 'locked';

                return (
                  <motion.div
                    key={m.classId}
                    whileHover={{ scale: isUnlocked || isCompleted ? 1.02 : 1 }}
                    whileTap={{ scale: isUnlocked || isCompleted ? 0.98 : 1 }}
                    onClick={() => {
                      if (isUnlocked || isCompleted) {
                        handleStartMission(m.classId);
                      }
                    }}
                    className={`p-4 rounded-3xl border-2 transition-all flex flex-col justify-between gap-3 ${
                      isCompleted 
                        ? (isCool ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-100 cursor-pointer shadow-sm' : 'bg-emerald-50 border-emerald-300 text-emerald-950 cursor-pointer shadow-sm')
                        : isUnlocked
                          ? (isCool ? 'bg-indigo-950/60 border-indigo-500 hover:bg-indigo-900/60 text-white cursor-pointer shadow-md' : 'bg-gradient-to-br from-amber-50 to-orange-50/80 border-amber-400 hover:bg-amber-100 text-slate-900 cursor-pointer shadow-md')
                          : (isCool ? 'bg-slate-900/40 border-slate-800/80 text-slate-500 opacity-60 cursor-not-allowed' : 'bg-slate-100/70 border-slate-200 text-slate-400 opacity-70 cursor-not-allowed')
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-2xl shrink-0">{getMissionContentForClass(m.classId)?.badgeEmoji || '🎯'}</span>
                        <div className="min-w-0">
                          <h4 className="font-black text-sm leading-tight truncate">{getClassTitle(m.classId)}</h4>
                          <p className="text-[11px] font-semibold opacity-75 truncate">{getClassLabel(m.classId)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isCompleted 
                          ? 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' 
                          : isUnlocked 
                            ? 'bg-amber-200 text-amber-900 dark:bg-indigo-800 dark:text-white' 
                            : 'bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {isCompleted ? 'Completada ✅' : isUnlocked ? '🚀 Jugar Misión' : '🔒 Bloqueada'}
                      </span>

                      {(isUnlocked || isCompleted) && (
                        <span className="text-xs font-black flex items-center gap-1 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" /> +150 XP
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </main>
      )}
    </div>
  );
}
