import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Flame, Sparkles, X, Zap } from 'lucide-react';
import { missionService, Mission } from '../../lib/missionService';

interface TeacherMissionFlashWidgetProps {
  studentId?: string | null;
  studentName?: string;
  currentClassId: string;
  onOpenWarmup?: (missionClassId: string) => void;
}

export const TeacherMissionFlashWidget: React.FC<TeacherMissionFlashWidgetProps> = ({
  studentId,
  studentName = 'Estudiante',
  currentClassId,
  onOpenWarmup,
}) => {
  const [missionStatus, setMissionStatus] = useState<'loading' | 'completed' | 'pending' | 'first_time'>('loading');
  const [lastMission, setLastMission] = useState<Mission | null>(null);
  const [lastClassId, setLastClassId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    async function checkPreviousMission() {
      const effectiveStudentId = studentId || (() => {
        try {
          const profileRaw = localStorage.getItem('active_student_profile');
          return profileRaw ? JSON.parse(profileRaw).id : null;
        } catch { return null; }
      })();

      if (!effectiveStudentId) {
        setMissionStatus('first_time');
        return;
      }

      try {
        const studentMissions = await missionService.getStudentMissions(effectiveStudentId);
        
        // Find previous mission
        const match = currentClassId.match(/^(c-(?:teens|adults|kids)-.+)-(\d+)$/);
        let prevClassId: string | null = null;
        if (match) {
          const prefix = match[1];
          const num = parseInt(match[2], 10);
          if (num > 1) {
            prevClassId = `${prefix}-${num - 1}`;
          }
        }

        if (!prevClassId) {
          setMissionStatus('first_time');
          return;
        }

        setLastClassId(prevClassId);
        const prevMission = studentMissions.find(m => m.classId === prevClassId);

        if (prevMission && prevMission.status === 'completed') {
          setLastMission(prevMission);
          setMissionStatus('completed');
        } else if (prevMission && (prevMission.status === 'unlocked' || prevMission.status === 'in_progress')) {
          setLastMission(prevMission);
          setMissionStatus('pending');
        } else {
          const completedAny = studentMissions.filter(m => m.status === 'completed');
          if (completedAny.length === 0) {
            setMissionStatus('first_time');
          } else {
            setMissionStatus('pending');
          }
        }
      } catch (e) {
        console.error('Error in TeacherMissionFlashWidget:', e);
        setMissionStatus('first_time');
      }
    }

    checkPreviousMission();
  }, [studentId, currentClassId]);

  if (missionStatus === 'loading' || !isExpanded) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md border backdrop-blur-md transition-all z-30"
      style={{
        backgroundColor: missionStatus === 'completed' 
          ? 'rgba(16, 185, 129, 0.25)' 
          : missionStatus === 'pending' 
            ? 'rgba(245, 158, 11, 0.3)' 
            : 'rgba(99, 102, 241, 0.25)',
        borderColor: missionStatus === 'completed'
          ? 'rgba(52, 211, 153, 0.6)'
          : missionStatus === 'pending'
            ? 'rgba(251, 191, 36, 0.7)'
            : 'rgba(129, 140, 248, 0.6)',
        color: '#ffffff'
      }}
    >
      {missionStatus === 'completed' && (
        <>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-emerald-300">{studentName}</strong> completó la tarea anterior: {lastMission?.accuracyPct || 100}% • +{lastMission?.totalXp || 150} XP
          </span>
          <span className="text-yellow-300 flex items-center gap-0.5 ml-1 font-black">
            <Flame className="w-3.5 h-3.5 fill-current" /> Racha Activa
          </span>
        </>
      )}

      {missionStatus === 'pending' && (
        <>
          <Clock className="w-4 h-4 text-amber-300 shrink-0 animate-pulse" />
          <span>
            Tarea anterior de <strong className="text-amber-200">{studentName}</strong> pendiente
          </span>
          {lastClassId && (
            <button
              onClick={() => {
                if (onOpenWarmup) {
                  onOpenWarmup(lastClassId!);
                } else {
                  const origin = typeof window !== 'undefined' ? window.location.origin : '';
                  window.open(`${origin}/?mission=${lastClassId}`, '_blank');
                }
              }}
              className="ml-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black flex items-center gap-1 shadow-md transition transform hover:scale-105 active:scale-95 cursor-pointer border border-amber-200"
              title="Abrir como calentamiento de 2 minutos"
            >
              <Zap className="w-3 h-3 fill-current text-slate-950" />
              <span>⚡ Jugar Warm-up (2 min)</span>
            </button>
          )}
        </>
      )}

      {missionStatus === 'first_time' && (
        <>
          <Sparkles className="w-4 h-4 text-indigo-300 shrink-0" />
          <span>
            ✨ <strong className="text-indigo-200">Primera clase con Maven Missions</strong> • La tarea se activará al finalizar
          </span>
        </>
      )}

      <button
        onClick={() => setIsExpanded(false)}
        className="ml-1.5 p-0.5 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition"
        title="Ocultar reporte"
      >
        <X className="w-3 h-3" />
      </button>
    </motion.div>
  );
};
