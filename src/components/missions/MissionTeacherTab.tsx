import { useState, useEffect } from 'react';
import { dbAdmin } from '../../lib/db';
import { missionService, Mission, MissionStreak } from '../../lib/missionService';
import { TEEN_MISSION_CONTENT } from '../../lib/missionContentData';
import { DbStudent } from '../../types';
import { avatars } from '../../config';
import { supabase } from '../../lib/supabase';
import { Search, Flame, CheckCircle, Lock, Unlock, Clock, Target, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function MissionTeacherTab() {
  const [students, setStudents] = useState<DbStudent[]>([]);
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<DbStudent | null>(null);
  
  const [missions, setMissions] = useState<Mission[]>([]);
  const [streak, setStreak] = useState<MissionStreak | null>(null);
  const [loadingMissions, setLoadingMissions] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const s = await dbAdmin.getStudents();
    setStudents(s);
  };

  const loadStudentData = async (student: DbStudent) => {
    setSelectedStudent(student);
    setLoadingMissions(true);
    const m = await missionService.getMissions(student.id);
    const s = await missionService.getStreak(student.id);
    setMissions(m);
    setStreak(s);
    setLoadingMissions(false);
  };

  const toggleMissionLock = async (classId: string, currentStatus: string | undefined) => {
    if (!selectedStudent) return;
    
    let newStatus = 'locked';
    if (currentStatus === 'locked' || !currentStatus) {
      newStatus = 'unlocked';
      await missionService.unlockMission(selectedStudent.id, classId);
    } else {
      // Lock it
      const cacheKey = `maven_missions_${selectedStudent.id}`;
      const localMissions = JSON.parse(localStorage.getItem(cacheKey) || '[]');
      const existing = localMissions.find((m: any) => m.classId === classId);
      if (existing) {
        existing.status = 'locked';
        localStorage.setItem(cacheKey, JSON.stringify(localMissions));
      }
      await supabase.from('missions').update({ status: 'locked' }).eq('student_id', selectedStudent.id).eq('class_id', classId);
    }
    
    // reload missions
    const m = await missionService.getMissions(selectedStudent.id);
    setMissions(m);
  };

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const formatTime = (seconds: number) => {
    if (!seconds) return '0m 0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const handleCopyStudentLink = () => {
    if (!selectedStudent) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://maven-english.com';
    const url = `${origin}/?studentId=${selectedStudent.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Group missions by level
  const filteredMissions = TEEN_MISSION_CONTENT.filter(c => {
    if (selectedLevelFilter === 'all') return true;
    return c.classId.includes(selectedLevelFilter);
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[70vh]">
      {/* Left Column: Student List */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="text-indigo-600" />
            Progreso por Alumno
          </h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar estudiante..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>
          <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2">
            {filteredStudents.map(student => {
              const isSelected = selectedStudent?.id === student.id;
              return (
                <button
                  key={student.id}
                  onClick={() => loadStudentData(student)}
                  className={`flex items-center gap-3 p-3 rounded-2xl transition-all text-left w-full ${
                    isSelected ? 'bg-indigo-50 border-2 border-indigo-200 shadow-sm' : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <img src={avatars[student.avatar_id as keyof typeof avatars] || avatars.female} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate text-sm">{student.name}</p>
                    <p className="text-xs font-medium text-gray-400 truncate">{student.level || 'Sin nivel'}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: Detailed Mission Dashboard */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        {!selectedStudent ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 flex flex-col items-center justify-center flex-1">
            <Target className="w-16 h-16 mb-4 text-gray-200" />
            <h3 className="text-xl font-bold text-gray-500">Selecciona un estudiante</h3>
            <p className="mt-2 text-gray-400">Revisa su progreso detallado en las misiones o copia su enlace permanente.</p>
          </div>
        ) : (
          <>
            {/* Student Header */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={avatars[selectedStudent.avatar_id as keyof typeof avatars] || avatars.female} className="w-16 h-16 rounded-full border-4 border-indigo-50" />
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{selectedStudent.name}</h2>
                  <p className="font-medium text-gray-500">{selectedStudent.level || 'Teens'}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-3 flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-xl text-orange-500">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wide">Racha</p>
                    <p className="text-lg font-black text-orange-700">{streak?.currentStreak || 0} días</p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-xl text-emerald-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">Completadas</p>
                    <p className="text-lg font-black text-emerald-700">{missions.filter(m => m.status === 'completed').length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Link Banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-5 rounded-3xl text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white shrink-0">
                  <Share2 className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-black text-base">Enlace Permanente de {selectedStudent.name}</h4>
                  <p className="text-xs text-purple-100 font-mono truncate">
                    {typeof window !== 'undefined' ? `${window.location.origin}/?studentId=${selectedStudent.id}` : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyStudentLink}
                className="shrink-0 px-5 py-2.5 bg-white text-indigo-950 rounded-xl font-black text-sm hover:bg-indigo-50 transition shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-700">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Enlace</span>
                  </>
                )}
              </button>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { id: 'all', label: 'Todas las Misiones' },
                { id: 'basic-zero', label: 'Level 0 (Basic Zero)' },
                { id: 'basic-1', label: 'Level 1 (Basic 1)' },
                { id: 'basic-2', label: 'Level 2 (Basic 2)' },
                { id: 'basic-3', label: 'Level 3 (Basic 3)' },
                { id: 'basic-4', label: 'Level 4 (Basic 4)' },
                { id: 'inter', label: 'Level 5 (Inter)' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedLevelFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition cursor-pointer ${
                    selectedLevelFilter === tab.id
                      ? 'bg-slate-900 text-white shadow'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mission List */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-between">
                <span>Catálogo de Misiones ({filteredMissions.length})</span>
                <span className="text-xs font-semibold text-gray-400">Haz clic en el candado para cambiar estado</span>
              </h3>
              
              {loadingMissions ? (
                <div className="py-12 text-center text-gray-400 font-medium">Cargando misiones...</div>
              ) : (
                <div className="grid grid-cols-1 gap-3 max-h-[60vh] overflow-y-auto pr-1">
                  {filteredMissions.map((content) => {
                    const mission = missions.find(m => m.classId === content.classId);
                    const isCompletedInLessons = selectedStudent.completed_lessons?.includes(content.classId);
                    const status = mission?.status || (isCompletedInLessons ? 'completed' : 'locked');
                    const isCompleted = status === 'completed' || isCompletedInLessons;
                    const isUnlocked = status === 'unlocked' || status === 'in_progress';
                    
                    return (
                      <motion.div 
                        key={content.classId}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl border-2 transition-all ${
                          isCompleted ? 'border-emerald-200 bg-emerald-50/40' : 
                          isUnlocked ? 'border-amber-300 bg-amber-50/40 shadow-sm' : 
                          'border-gray-100 bg-gray-50/80 opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm shrink-0 ${
                            isCompleted ? 'bg-emerald-100 text-emerald-800' : isUnlocked ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 opacity-60'
                          }`}>
                            {content.badgeEmoji}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-900 truncate text-sm">{content.classId}</h4>
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                isCompleted ? 'bg-emerald-100 text-emerald-700' : 
                                isUnlocked ? 'bg-amber-100 text-amber-700' : 
                                'bg-gray-200 text-gray-600'
                              }`}>
                                {isCompleted ? 'Completada ✅' : isUnlocked ? 'Disponible 🚀' : 'Bloqueada 🔒'}
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-gray-500 truncate mt-0.5">{content.badgeName}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 justify-between sm:justify-end shrink-0 mt-2 sm:mt-0">
                          {isCompleted && mission && (
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-100">
                              <span>{mission.accuracyPct}% precisión</span>
                              <span>•</span>
                              <span>+{mission.totalXp} XP</span>
                            </div>
                          )}

                          <button
                            onClick={() => toggleMissionLock(content.classId, status)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer ${
                              isUnlocked || isCompleted
                                ? 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                                : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                            }`}
                            title={isUnlocked ? "Bloquear misión" : "Desbloquear misión manualmente"}
                          >
                            {isUnlocked || isCompleted ? (
                              <>
                                <Lock className="w-3.5 h-3.5" />
                                <span>Bloquear</span>
                              </>
                            ) : (
                              <>
                                <Unlock className="w-3.5 h-3.5" />
                                <span>Desbloquear</span>
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
