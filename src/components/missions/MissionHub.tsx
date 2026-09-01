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
        let currentProfileLevel = '';
        try {
          const students = await dbAdmin.getStudents();
          const current = students.find(s => s.id === effectiveStudentId);
          if (current) {
            completedLessons = current.completed_lessons || [];
            setStudentCompletedLessons(completedLessons);
            currentProfileLevel = current.level || '';
            
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

        // Automatically default selectedLevelFilter to student's current active level!
        let initialFilter = 'basic-1';
        if (targetMissionId) {
          const match = targetMissionId.match(/basic-zero|basic-1|basic-2|basic-3|basic-4|inter|advanced|elite|masters/);
          if (match) initialFilter = match[0];
        } else if (currentProfileLevel) {
          const lvl = currentProfileLevel.toLowerCase();
          if (lvl.includes('basic 1') || lvl.includes('basic-1')) initialFilter = 'basic-1';
          else if (lvl.includes('basic 2') || lvl.includes('basic-2')) initialFilter = 'basic-2';
          else if (lvl.includes('basic 3') || lvl.includes('basic-3')) initialFilter = 'basic-3';
          else if (lvl.includes('basic 4') || lvl.includes('basic-4')) initialFilter = 'basic-4';
          else if (lvl.includes('inter')) initialFilter = 'inter';
          else if (lvl.includes('advanced')) initialFilter = 'advanced';
          else if (lvl.includes('elite')) initialFilter = 'elite';
          else if (lvl.includes('masters')) initialFilter = 'masters';
          else if (lvl.includes('zero')) initialFilter = 'basic-zero';
        } else if (completedLessons.length > 0) {
          if (completedLessons.some(id => id.includes('basic-1'))) initialFilter = 'basic-1';
          else if (completedLessons.some(id => id.includes('basic-2'))) initialFilter = 'basic-2';
          else if (completedLessons.some(id => id.includes('basic-3'))) initialFilter = 'basic-3';
          else if (completedLessons.some(id => id.includes('basic-4'))) initialFilter = 'basic-4';
          else initialFilter = 'basic-zero';
        }
        setSelectedLevelFilter(initialFilter);
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

  // Theme styling (Super Joyful, Vibrant, Colorful Light Theme)
  const isCool = theme === 'cool';
  const bgGradient = isCool 
    ? 'bg-gradient-to-br from-slate-950 via-gray-950 to-blue-950 text-slate-50' 
    : 'bg-gradient-to-b from-sky-50/80 via-amber-50/40 to-indigo-50/60 text-slate-900';
  
  const headerBg = isCool 
    ? 'bg-slate-950/90 border-slate-800 text-white shadow-lg' 
    : 'bg-white/95 border-amber-300 text-slate-900 shadow-md';
  
  const activeCardGradient = isCool
    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white border-blue-400'
    : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white border-purple-300 shadow-2xl shadow-purple-500/25';

  const textMuted = isCool ? 'text-slate-400' : 'text-slate-600';

  function getClassTitle(classId: string) {
    const content = getMissionContentForClass(classId);
    if (!content) return classId;
    return `${content.badgeEmoji} ${content.badgeName}`;
  }

  function getClassLabel(classId: string) {
    const content = getMissionContentForClass(classId);
    return content ? `${content.badgeEmoji} ${classId.replace(/^c-(teens|adults|kids)-/, '').replace(/-/g, ' ').toUpperCase()}` : classId;
  }

  const isLevelCompleted = (tabId: string) => {
    if (tabId === 'all') return false;
    if (
      studentCompletedLessons.includes(`__level_approved__:teens-${tabId}`) || 
      studentCompletedLessons.includes(`__level_approved__:${tabId}`)
    ) {
      return true;
    }
    const levelMissions = missions.filter(m => m.classId.includes(tabId));
    return levelMissions.length > 0 && levelMissions.every(m => m.status === 'completed');
  };

  const filteredMissions = missions.filter(m => {
    if (selectedLevelFilter === 'all') return true;
    return m.classId.includes(selectedLevelFilter);
  });

  return (
    <div className={`min-h-screen ${bgGradient} font-sans pb-24 overflow-x-hidden selection:bg-amber-500/30`}>
      {/* Header (Vibrant, Friendly & Colorful) */}
      <header className={`sticky top-0 z-20 backdrop-blur-xl border-b-2 ${headerBg} px-4 py-3.5 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className={`p-2.5 rounded-2xl transition-all cursor-pointer shadow-sm ${
              isCool 
                ? 'bg-slate-800 hover:bg-slate-700 text-white' 
                : 'bg-amber-100/80 hover:bg-amber-200 text-amber-950 border border-amber-300/80'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <h1 className={`text-lg sm:text-xl font-black tracking-tight flex items-center gap-1.5 ${isCool ? 'text-white' : 'text-slate-950'}`}>
              <span>🎯 Mis Misiones</span>
            </h1>
            {studentName && (
              <span className={`text-xs sm:text-sm font-black px-3 py-0.5 rounded-full shadow-sm border ${
                isCool 
                  ? 'bg-indigo-950/80 text-amber-300 border-indigo-700/50' 
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-amber-300'
              }`}>
                {studentName}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-black text-xs sm:text-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 border-2 border-amber-200">
            <motion.div
              animate={{ 
                scale: currentStreak > 0 ? [1, 1.25, 1] : 1,
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Flame className="w-4 h-4 fill-white text-white" />
            </motion.div>
            <span>{currentStreak} {currentStreak === 1 ? 'DÍA' : 'DÍAS'} 🔥</span>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => handleChangeTheme(isCool ? 'vibrant' : 'cool')}
            className={`p-2.5 rounded-2xl transition-all cursor-pointer shadow-sm border ${
              isCool 
                ? 'bg-slate-800 text-yellow-300 border-slate-700' 
                : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
            }`}
            title="Cambiar tema de color"
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
          
          {/* Student & 3D Mascot Welcome Banner (Super Colorful & Joyful) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 sm:p-5 rounded-3xl border-2 shadow-xl flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 justify-between relative overflow-hidden backdrop-blur-xl ${
              isCool 
                ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border-indigo-500/40 text-white' 
                : 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 border-amber-300 text-white shadow-orange-500/20'
            }`}
          >
            {/* Background Decorative Circles */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none" />

            {/* Student Profile Info */}
            <div className="flex items-center gap-3.5 w-full sm:w-auto z-10">
              <div className="relative shrink-0">
                <img
                  src={displayAvatarUrl}
                  alt={studentName || 'Estudiante'}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-white shadow-2xl ring-4 ring-white/30 bg-white"
                />
                <div className="absolute -bottom-1 -right-1 p-0.5 bg-emerald-400 rounded-full border-2 border-white text-emerald-950 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-white/25 backdrop-blur-md text-white border border-white/40 px-2.5 py-0.5 rounded-full shadow-sm">
                    Estudiante Activo
                  </span>
                  <span className="text-xs font-black text-amber-100 drop-shadow truncate">
                    {studentProfile?.level || 'Maven Teens'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5 truncate drop-shadow-sm">
                  ¡Hola, {studentName || 'Estudiante'}! 👋
                </h2>
                <p className="text-[11px] sm:text-xs text-white/90 font-bold drop-shadow-sm">
                  {currentStreak > 0 
                    ? `🔥 Racha de ${currentStreak} días activa. ¡Sigue con toda la energía!` 
                    : 'Completa tu reto interactivo de 5 min y gana tus +150 XP 🏆'}
                </p>
              </div>
            </div>

            {/* Maven the Tiger Mentor (Visible on Mobile & Desktop) */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-white/20 shrink-0 z-10">
              <div className="flex items-center gap-2.5 bg-black/15 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/20">
                <div className="relative shrink-0">
                  <img
                    src="/images/mascot/tiger_mentor_wave.jpg"
                    alt="Tigre Maven 3D"
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-cover border-2 border-amber-300 shadow-md bg-white"
                  />
                  <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-amber-400 text-slate-950 font-black text-[9px] rounded-full border border-white">
                    3D
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-200">
                    Tigre Maven • Mentor
                  </span>
                  <span className="text-xs font-black text-white">
                    "¡A romperla hoy! ⚡"
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar (4 Vibrant High-Energy Colorful Cards) */}
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-3 snap-x scrollbar-hide">
            {/* XP Card */}
            <div className={`snap-start shrink-0 w-36 rounded-3xl p-4 flex flex-col gap-1 border-2 shadow-md transition-all hover:scale-105 ${
              isCool 
                ? 'bg-slate-900/80 border-amber-500/40 text-white' 
                : 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-center gap-1.5 text-amber-500 font-black">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span className="text-xs uppercase tracking-wider font-extrabold">Total XP</span>
              </div>
              <span className="text-2xl font-black">{totalXP}</span>
            </div>
            
            {/* Completadas Card */}
            <div className={`snap-start shrink-0 w-36 rounded-3xl p-4 flex flex-col gap-1 border-2 shadow-md transition-all hover:scale-105 ${
              isCool 
                ? 'bg-slate-900/80 border-emerald-500/40 text-white' 
                : 'bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-300 text-emerald-950'
            }`}>
              <div className="flex items-center gap-1.5 text-emerald-600 font-black">
                <Target className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-extrabold">Misiones</span>
              </div>
              <span className="text-2xl font-black">{totalCompleted}</span>
            </div>
            
            {/* Precisión Card */}
            <div className={`snap-start shrink-0 w-36 rounded-3xl p-4 flex flex-col gap-1 border-2 shadow-md transition-all hover:scale-105 ${
              isCool 
                ? 'bg-slate-900/80 border-blue-500/40 text-white' 
                : 'bg-gradient-to-br from-sky-50 to-blue-100 border-sky-300 text-sky-950'
            }`}>
              <div className="flex items-center gap-1.5 text-blue-600 font-black">
                <Zap className="w-4 h-4 fill-blue-500 text-blue-500" />
                <span className="text-xs uppercase tracking-wider font-extrabold">Precisión</span>
              </div>
              <span className="text-2xl font-black">{avgAccuracy}%</span>
            </div>
            
            {/* Racha Card */}
            <div className={`snap-start shrink-0 w-36 rounded-3xl p-4 flex flex-col gap-1 border-2 shadow-md transition-all hover:scale-105 ${
              isCool 
                ? 'bg-slate-900/80 border-orange-500/40 text-white' 
                : 'bg-gradient-to-br from-rose-50 to-orange-100 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-1.5 text-rose-600 font-black">
                <Trophy className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-extrabold">Racha Max</span>
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

          {/* Level Filter Tabs (Highlighting Completed Levels & Current Level) */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
            {LEVEL_GROUPS.map(tab => {
              const isSelected = selectedLevelFilter === tab.id;
              const isCompleted = isLevelCompleted(tab.id);

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedLevelFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all cursor-pointer border-2 flex items-center gap-1.5 ${
                    isSelected
                      ? (isCool 
                          ? 'bg-blue-600 text-white border-blue-400 shadow-lg' 
                          : isCompleted
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-300 shadow-md shadow-emerald-500/25'
                            : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-300 shadow-md shadow-orange-500/25')
                      : isCompleted
                        ? (isCool
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/80 hover:bg-emerald-900/60'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100/90 shadow-sm')
                        : (isCool 
                            ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800' 
                            : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-900 border-slate-200/90 shadow-sm')
                  }`}
                >
                  <span>{tab.label}</span>
                  {isCompleted && <span className="text-xs">✅</span>}
                </button>
              );
            })}
          </div>

          {/* Mission Journey Catalog */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
              <h2 className="text-lg font-black flex items-center gap-2 text-slate-900 dark:text-white">
                <Target className="w-5 h-5 text-indigo-500" />
                <span>
                  {selectedLevelFilter === 'all' 
                    ? `Ruta de Aprendizaje (99 Misiones)` 
                    : `Misiones de ${LEVEL_GROUPS.find(g => g.id === selectedLevelFilter)?.label || selectedLevelFilter} (${filteredMissions.length})`}
                </span>
              </h2>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Pasa cada misión para ganar XP y medallas 🏆
              </span>
            </div>

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
                    className={`p-4 sm:p-5 rounded-3xl border-2 transition-all flex flex-col justify-between gap-3 shadow-sm ${
                      isCompleted 
                        ? (isCool 
                            ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-100 cursor-pointer' 
                            : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300 hover:border-emerald-400 text-slate-900 cursor-pointer hover:shadow-md')
                        : isUnlocked
                          ? (isCool 
                              ? 'bg-indigo-950/60 border-indigo-500 hover:bg-indigo-900/60 text-white cursor-pointer shadow-md' 
                              : 'bg-white hover:bg-amber-50/50 border-amber-300 hover:border-amber-400 text-slate-900 cursor-pointer shadow-md hover:shadow-lg ring-2 ring-amber-400/20')
                          : (isCool 
                              ? 'bg-slate-900/40 border-slate-800/80 text-slate-500 opacity-60 cursor-not-allowed' 
                              : 'bg-slate-100/70 border-slate-200 text-slate-400 opacity-70 cursor-not-allowed')
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-2xl shrink-0 p-2 rounded-2xl bg-amber-50/80 dark:bg-slate-800 shadow-sm border border-amber-200 dark:border-slate-700">{getMissionContentForClass(m.classId)?.badgeEmoji || '🎯'}</span>
                        <div className="min-w-0">
                          <h4 className="font-black text-sm sm:text-base leading-tight truncate text-slate-900 dark:text-white">{getClassTitle(m.classId)}</h4>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate">{getClassLabel(m.classId)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800">
                      <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                        isCompleted 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900 dark:text-emerald-200' 
                          : isUnlocked 
                            ? 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-indigo-800 dark:text-white' 
                            : 'bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {isCompleted ? 'Completada ✅' : isUnlocked ? '🚀 Jugar Misión' : '🔒 Bloqueada'}
                      </span>

                      {(isUnlocked || isCompleted) && (
                        <span className="text-xs font-black flex items-center gap-1 text-amber-600 dark:text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> +150 XP
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
