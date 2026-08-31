import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Flame, Star, Target, Trophy, Lock, ChevronRight, Sun, Moon, Zap, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { missionService } from '../../lib/missionService';
import type { Mission, MissionStreak, MissionBadge, ThemeMode, MissionContent } from '../../lib/missionService';
import { TEEN_MISSION_CONTENT, getMissionContentForClass } from '../../lib/missionContentData';
import { TigerMentor } from './TigerMentor';
import { dbAdmin } from '../../lib/db';
import { avatars, studentConfig } from '../../config';

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
  const [studentProfile, setStudentProfile] = useState<{ name: string; avatar_id?: string; level?: string } | null>(() => {
    try {
      const raw = localStorage.getItem('active_student_profile');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const displayAvatarUrl = (studentProfile?.avatar_id && (avatars as any)[studentProfile.avatar_id]) || (avatars as any)['avatar-2'] || studentConfig.avatarUrl;

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
          if (current) {
            completedLessons = current.completed_lessons || [];
            setStudentCompletedLessons(completedLessons);
            
            // Format level nicely (e.g. Level 1 • Basic 1)
            let formattedLevel = current.level || 'Basic 1';
            if (formattedLevel.toLowerCase().includes('zero')) formattedLevel = 'Level 0 • Basic Zero';
            else if (formattedLevel.toLowerCase().includes('basic 1') || formattedLevel.toLowerCase().includes('basic-1')) formattedLevel = 'Level 1 • Basic 1';
            else if (formattedLevel.toLowerCase().includes('basic 2') || formattedLevel.toLowerCase().includes('basic-2')) formattedLevel = 'Level 2 • Basic 2';
            else if (formattedLevel.toLowerCase().includes('basic 3') || formattedLevel.toLowerCase().includes('basic-3')) formattedLevel = 'Level 3 • Basic 3';
            else if (formattedLevel.toLowerCase().includes('basic 4') || formattedLevel.toLowerCase().includes('basic-4')) formattedLevel = 'Level 4 • Basic 4';
            
            setStudentProfile({
              name: current.name,
              avatar_id: current.avatar_id,
              level: formattedLevel
            });
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

  // Intercept native mobile back button when a mission runner is open
  useEffect(() => {
    const handlePopState = () => {
      if (activeMissionClassId) {
        setActiveMissionClassId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeMissionClassId]);

  useEffect(() => {
    if (activeMissionClassId) {
      window.history.pushState({ missionRunner: activeMissionClassId }, '');
    }
  }, [activeMissionClassId]);

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
    ? 'bg-gradient-to-br from-slate-950 via-gray-950 to-blue-950 text-slate-50' 
    : 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white';
  
  const headerBg = isCool 
    ? 'bg-slate-950/90 border-slate-800 text-white' 
    : 'bg-slate-900/95 border-indigo-500/30 text-white shadow-lg shadow-indigo-950/40';
  const cardBg = isCool ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-900/90 border-slate-800 shadow-md';
  const cardBorder = isCool ? 'border-slate-700' : 'border-slate-800';
  
  const activeCardGradient = isCool
    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white border-blue-400'
    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white border-amber-300';

  const statsCardBg = isCool 
    ? 'bg-slate-900/80 border border-slate-800 text-white' 
    : 'bg-slate-900/80 border border-slate-800/90 text-white shadow-md';
  const textMuted = 'text-slate-400';

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
      <header className={`sticky top-0 z-20 backdrop-blur-xl border-b ${headerBg} px-4 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 rounded-full transition-colors hover:bg-white/10 text-white cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2 text-white">
            <span>🎯 Mis Misiones</span>
            {studentName && <span className="text-amber-400 font-extrabold">• {studentName}</span>}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-black text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border border-orange-300/40">
            <motion.div
              animate={{ 
                scale: currentStreak > 0 ? [1, 1.2, 1] : 1,
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Flame className="w-4 h-4 fill-white text-white" />
            </motion.div>
            <span>{currentStreak} DÍAS</span>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => handleChangeTheme(isCool ? 'vibrant' : 'cool')}
            className="p-2 rounded-full transition-colors bg-white/10 hover:bg-white/20 text-yellow-300 cursor-pointer"
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
          
          {/* Student & 3D Mascot Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 sm:p-5 rounded-3xl border-2 shadow-2xl flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 justify-between bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border-indigo-500/40 text-white relative overflow-hidden backdrop-blur-xl"
          >
            {/* Student Profile Info */}
            <div className="flex items-center gap-3.5 w-full sm:w-auto z-10">
              <div className="relative shrink-0">
                <img
                  src={displayAvatarUrl}
                  alt={studentName || 'Estudiante'}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-xl ring-4 ring-amber-400/20 bg-indigo-50"
                />
                <div className="absolute -bottom-1 -right-1 p-0.5 bg-emerald-500 rounded-full border border-white text-white shadow-sm">
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/30 px-2 py-0.5 rounded-full">
                    Estudiante
                  </span>
                  <span className="text-xs font-bold text-indigo-200 truncate">
                    {studentProfile?.level || 'Maven Teens'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5 truncate">
                  ¡Hola, {studentName || 'Estudiante'}! 👋
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  {currentStreak > 0 
                    ? `🔥 Racha de ${currentStreak} días activa. ¡Sigue así!` 
                    : 'Completa tu reto de 5 min y gana +150 XP.'}
                </p>
              </div>
            </div>

            {/* Maven the Tiger Mentor (Visible on Mobile & Desktop) */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-indigo-500/20 shrink-0 z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative shrink-0">
                  <img
                    src="/images/mascot/tiger_mentor_wave.jpg"
                    alt="Tigre Maven 3D"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-amber-400 shadow-xl ring-4 ring-amber-400/20 bg-white"
                  />
                  <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-amber-400 text-slate-950 font-black text-[9px] rounded-full border border-white">
                    3D
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    Tigre Maven • Mentor
                  </span>
                  <span className="text-xs font-extrabold text-white">
                    "¡A romperla hoy con toda! ⚡"
                  </span>
                </div>
              </div>
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

          {/* Active / Current Recommended Mission Card with Class Context */}
          {mainActiveMission && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between px-1">
                <h2 className="text-lg font-black flex items-center gap-2">
                  <span>🔥 Tu Reto Asignado</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black">5 MIN</span>
                </h2>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Próxima Clase
                </span>
              </div>
              <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 ${activeCardGradient} shadow-xl shadow-amber-500/25 border-2`}>
                <motion.div
                  className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      <span>{mainActiveMission.status === 'completed' ? 'TAREA COMPLETADA ✅' : 'TAREA ASIGNADA 📝'}</span>
                    </span>
                    <span className="text-xs font-bold text-white/90 bg-black/25 px-3 py-1 rounded-full border border-white/15">
                      📅 Tarea dejada en la clase
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1.5 drop-shadow-md">
                    {getClassTitle(mainActiveMission.classId)}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 font-semibold mb-5 flex items-center gap-1.5">
                    <span>📚</span>
                    <span>{getClassLabel(mainActiveMission.classId)}</span>
                  </p>

                  <button 
                    onClick={() => handleStartMission(mainActiveMission.classId)}
                    className="w-full py-4 sm:py-5 bg-white text-slate-950 rounded-2xl font-black text-lg sm:text-xl hover:bg-amber-50 transition-all shadow-2xl flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.02] active:scale-[0.98] border-2 border-amber-200"
                  >
                    <span>COMENZAR MISIÓN AHORA</span>
                    <Play className="w-6 h-6 fill-current text-amber-500 shrink-0" />
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
