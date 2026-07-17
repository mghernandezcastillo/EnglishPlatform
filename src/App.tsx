import { useState, useEffect } from 'react';
import { User, Settings, Image as ImageIcon } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { LessonPlayer } from './components/LessonPlayer';
import { Assessment } from './components/Assessment';
import { FloatingControls } from './components/FloatingControls';
import { SpeakingPractice } from './components/SpeakingPractice';
import { StoryForge } from './components/StoryForge';
import { RoleSelection } from './components/RoleSelection';
import { TeacherDashboard } from './components/TeacherDashboard';
import { VirtualEvaluationView } from './components/VirtualEvaluationView';
import { dbAdmin } from './lib/db';
import { DbStudent, UserProgress } from './types';
import { lessons } from './data/lessons';
import { libraryLessons } from './data/libraryLessons';
import { supabase } from './lib/supabase';
import { avatars } from './config';

import { useBrand } from './hooks/useBrand';

const STORAGE_KEY = 'english_easy_path_progress';
const TEACHER_UNLOCK_KEY = 'maven_teacher_unlocked';

type AppRole = 'none' | 'teacher' | 'student';

export default function App() {
  const { brand } = useBrand();
  const [role, setRole] = useState<AppRole>('none');
  const [isTeacherUnlocked, setIsTeacherUnlocked] = useState(() => localStorage.getItem(TEACHER_UNLOCK_KEY) === 'true');
  const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);

  const [progress, setProgress] = useState<UserProgress>({ completedLessons: [], currentLessonId: '', level: 'Nivel Inicial' });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check URL
    const params = new URLSearchParams(window.location.search);
    const studentIdParam = params.get('studentId');
    
    if (studentIdParam) {
      dbAdmin.getStudents().then(students => {
        const s = students.find(s => s.id === studentIdParam);
        if (s) {
          setCurrentStudentId(s.id);
          setProgress({
            completedLessons: s.completed_lessons || [],
            currentLessonId: '',
            level: s.level || 'Nivel Inicial',
            studentName: s.name,
            avatarId: s.avatar_id,
            studentType: s.type || 'adulto'
          });
          setRole('student');
        }
        setIsLoaded(true);
      });
      return;
    }

    // Only load initial if no student selected yet
    if (role !== 'none') return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setProgress(JSON.parse(saved)); } catch(e) {}
    }
    setIsLoaded(true);
  }, [role]);

  const [currentView, setCurrentView] = useState<'dashboard' | 'lesson' | 'assessment' | 'speaking_practice' | 'story_forge'>('dashboard');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Save progress when it changes
  useEffect(() => {
    if (!isLoaded || role !== 'student') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    
    // Also save to Supabase via dbAdmin if we have an ID
    if (currentStudentId) {
      dbAdmin.updateStudentProgress(currentStudentId, progress.completedLessons[progress.completedLessons.length - 1] || '');
    }
  }, [progress, isLoaded, role, currentStudentId]);

  const handleSelectStudent = (st?: DbStudent) => {
    if (st) {
      setCurrentStudentId(st.id);
      setProgress({
        completedLessons: st.completed_lessons || [],
        currentLessonId: '',
        level: st.level || 'Nivel Inicial',
        studentName: st.name,
        avatarId: st.avatar_id,
        studentType: st.type || 'adulto'
      });
    }
    setRole('student');
  };

  const handleSelectTeacher = () => {
    localStorage.setItem(TEACHER_UNLOCK_KEY, 'true');
    setIsTeacherUnlocked(true);
    setRole('teacher');
  };

  const activeLesson = activeLessonId 
    ? lessons.find(l => l.id === activeLessonId) || libraryLessons.find(l => l.id === activeLessonId) || null 
    : null;

  const handleStartLibraryLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentView('lesson');
    setProgress(prev => ({ ...prev, currentLessonId: lessonId }));
  };

  const handleToggleClass = async (classId: string) => {
    let newCompleted;
    if (progress.completedLessons.includes(classId)) {
      newCompleted = progress.completedLessons.filter(id => id !== classId);
    } else {
      newCompleted = [...progress.completedLessons, classId];
    }
    
    setProgress(prev => ({ ...prev, completedLessons: newCompleted }));
    
    if (currentStudentId) {
      await dbAdmin.setStudentProgress(currentStudentId, newCompleted);
    }
  };

  const handleFinishClass = async (classId: string) => {
    if (!progress.completedLessons.includes(classId)) {
      const newCompleted = [...progress.completedLessons, classId];
      setProgress(prev => ({
        ...prev,
        completedLessons: newCompleted
      }));
      if (currentStudentId) {
        await dbAdmin.updateStudentProgress(currentStudentId, classId);
      }
    }
  };

  const handleCompleteLesson = () => {
    if (activeLessonId && !progress.completedLessons.includes(activeLessonId)) {
      handleFinishClass(activeLessonId);
    }
    setActiveLessonId(null);
    setCurrentView('dashboard');
  };

  const handleExitLesson = () => {
    setActiveLessonId(null);
    setCurrentView('dashboard');
  };

  const handleOpenAssessment = () => {
    setCurrentView('assessment');
  };

  const handleOpenStoryForge = () => {
    setCurrentView('story_forge');
  };

  const handleOpenSpeakingPractice = () => {
    setCurrentView('speaking_practice');
  };

  const handleCloseAssessment = (newLevel?: string) => {
    if (newLevel) {
       setProgress(prev => ({ ...prev, level: newLevel }));
       // Update level in DB would go here
    }
    setCurrentView('dashboard');
  };

  const [showResetModal, setShowResetModal] = useState(false);

  const handleResetProgress = () => {
    setShowResetModal(true);
  };

  const confirmResetProgress = () => {
    setProgress({ completedLessons: [], currentLessonId: '', level: 'Nivel Inicial' });
    localStorage.removeItem(STORAGE_KEY);
    setShowResetModal(false);
  };

  const cancelResetProgress = () => {
    setShowResetModal(false);
  };

  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [tempStudentName, setTempStudentName] = useState(progress.studentName || '');
  const [tempAvatarId, setTempAvatarId] = useState(progress.avatarId || 'female');

  const handleOpenSettings = () => {
    setTempStudentName(progress.studentName || '');
    setTempAvatarId(progress.avatarId || 'female');
    setShowSettingsModal(true);
  };

  const handleSaveSettings = () => {
    setProgress(prev => ({ ...prev, studentName: tempStudentName, avatarId: tempAvatarId }));
    setShowSettingsModal(false);
  };

  const isSupabaseConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL &&
    (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY)
  );

  const urlParams = new URLSearchParams(window.location.search);
  const evalLevelId = urlParams.get('evaluacion');
  
  const path = window.location.pathname;
  
  if (evalLevelId) {
    return <VirtualEvaluationView levelId={evalLevelId} />;
  }

  if (path.startsWith('/evaluacion/')) {
    const parts = path.split('/');
    const levelId = parts[2];
    if (levelId) {
      return <VirtualEvaluationView levelId={levelId} />;
    }
  }

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (role === 'none') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        {!isSupabaseConfigured && (
          <div className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-900 font-medium border-b border-amber-200">
            Atención: Faltan las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el menú Settings para conectar con la base de datos real.
          </div>
        )}
        <RoleSelection onSelectTeacher={handleSelectTeacher} isTeacherUnlocked={isTeacherUnlocked} />
      </div>
    );
  }

  if (role === 'teacher') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <TeacherDashboard onBack={() => setRole('none')} onEnterAsStudent={handleSelectStudent} />
      </div>
    );
  }

  // Student Role
  const isKidBg = progress.studentType === 'niño';
  
  return (
    <div className={`min-h-screen ${isKidBg ? 'bg-gradient-to-br from-cyan-100 via-pink-100 to-yellow-100' : 'bg-slate-50'} font-sans selection:bg-indigo-100 selection:text-indigo-900`}>
      
      {!isSupabaseConfigured && (
        <div className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-900 font-medium border-b border-amber-200">
          Atención: Usando almacenamiento local. La conexión a Supabase no está configurada.
        </div>
      )}

      {/* Modal Confirmación de Reseteo */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">¿Reiniciar Progreso?</h3>
            <p className="text-center text-gray-600 mb-6">Esta acción borrará todas las lecciones completadas y empezará desde cero. No se puede deshacer.</p>
            <div className="flex w-full gap-3">
              <button 
                onClick={cancelResetProgress}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmResetProgress}
                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-sm"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Configuración */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-indigo-600" /> Configuración
            </h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Estudiante</label>
              <input 
                type="text" 
                value={tempStudentName}
                onChange={(e) => setTempStudentName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Avatar 3D</label>
              <div className="flex gap-4">
                 {Object.entries(avatars).map(([key, url]) => (
                   <button
                     key={key}
                     onClick={() => setTempAvatarId(key)}
                     className={`relative rounded-xl overflow-hidden border-4 transition-all ${tempAvatarId === key ? 'border-indigo-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'} w-20 h-20 shadow-sm`}
                   >
                     <img src={url} alt={key} className="w-full h-full object-cover" />
                   </button>
                 ))}
              </div>
            </div>

            <div className="flex w-full gap-3">
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveSettings}
                className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header for Dashboard */}
      {!activeLessonId && (
        <header className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 sticky top-0 z-10 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3 w-full max-w-5xl cursor-pointer" onClick={() => setRole('none')}>
            <div className="w-10 h-10 shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
               {brand.logoUrl ? (
                 <img src={brand.logoUrl} alt="Logo" className="w-full h-full object-cover" />
               ) : (
                 <span className="text-white font-serif font-bold text-xl">E</span>
               )}
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight truncate">
              {progress.studentType === 'niño' ? 'Maven English for kids' : progress.studentType === 'adolescente' ? 'Maven English for teens' : brand.name}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {progress.studentName && (
              <div className="hidden sm:flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                <User className="w-4 h-4" />
                <span className="font-semibold text-sm">{progress.studentName}</span>
              </div>
            )}
            <button 
              onClick={handleOpenSettings}
              className="text-gray-500 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
              title="Configuración"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setRole('none')}
              className="hidden sm:block text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
            >
              Cambiar Perfil
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      {currentView === 'lesson' && activeLesson ? (
        <LessonPlayer 
          lesson={activeLesson as any}
          onComplete={handleCompleteLesson}
          onExit={handleExitLesson}
        />
      ) : currentView === 'assessment' ? (
        <Assessment progress={progress} onClose={handleCloseAssessment} />
      ) : currentView === 'story_forge' ? (
        <StoryForge onClose={() => setCurrentView('dashboard')} />
      ) : currentView === 'speaking_practice' ? (
        <SpeakingPractice onClose={() => setCurrentView('dashboard')} />
      ) : (
          <Dashboard 
          completedLessonIds={progress.completedLessons}
          userLevel={progress.level || 'Nivel Inicial'}
          studentName={progress.studentName}
          avatarId={progress.avatarId}
          studentType={progress.studentType}
          onStartLibraryLesson={handleStartLibraryLesson}
          onFinishClass={handleFinishClass}
          onToggleClass={handleToggleClass}
          onOpenAssessment={handleOpenAssessment}
          onOpenSpeakingPractice={handleOpenSpeakingPractice}
          onOpenStoryForge={handleOpenStoryForge}
        />
      )}
      <FloatingControls />
    </div>
  );
}
