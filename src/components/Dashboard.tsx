import { useState, useEffect } from 'react';
import { CurriculumClass } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle, Play, Sparkles, Layers, ArrowLeft, GraduationCap, Clock, ChevronDown, Users, Share, Trophy, ClipboardCheck, Braces } from 'lucide-react';
import { studentConfig, avatars } from '../config';
import { LibraryCategories } from './LibraryCategories';
import { libraryLessons } from '../data/libraryLessons';
import { getCurriculumForType } from '../data/curriculumSelector';
import { useCurriculum } from '../hooks/useCurriculum';
import { PresentationViewer } from './PresentationViewer';
import { useBrand } from '../hooks/useBrand';
import { PreClassAssessment } from './PreClassAssessment';

interface DashboardProps {
  completedLessonIds: string[];
  userLevel: string;
  studentName?: string;
  avatarId?: string;
  studentType?: string;
  onStartLibraryLesson: (lessonId: string) => void;
  onFinishClass: (classId: string) => void;
  onToggleClass?: (classId: string) => void;
  onOpenAssessment: () => void;
  onOpenEntranceAssessment: () => void;
  onOpenSpeakingPractice: () => void;
  onOpenStoryForge: () => void;
  onOpenStructureMode: () => void;
}

export function Dashboard({ completedLessonIds, userLevel, studentName, avatarId, studentType, onStartLibraryLesson, onFinishClass, onToggleClass, onOpenAssessment, onOpenEntranceAssessment, onOpenSpeakingPractice, onOpenStoryForge, onOpenStructureMode }: DashboardProps) {
  const { curriculumLevels, loading } = useCurriculum(studentType);
  const [activeTab, setActiveTab] = useState<'path' | 'library'>('path');
  const [activeLibraryCategoryId, setActiveLibraryCategoryId] = useState<string | null>(null);
  const [activeLibraryCategoryTitle, setActiveLibraryCategoryTitle] = useState<string>('');
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [autoExpandedSeed, setAutoExpandedSeed] = useState('');
  const [presentingClass, setPresentingClass] = useState<CurriculumClass | null>(null);
  const [evaluatingClass, setEvaluatingClass] = useState<{ id: string, title: string } | null>(null);
  const { brand } = useBrand();

  useEffect(() => {
    if (curriculumLevels.length === 0) return;
    const seed = `${studentType || 'adulto'}:${curriculumLevels.map(level => level.id).join('|')}`;
    if (autoExpandedSeed === seed) return;

    const firstIncompleteLevel = curriculumLevels.find(level =>
      level.classes.some(cls => !completedLessonIds.includes(cls.id))
    );

    setExpandedLevel(firstIncompleteLevel?.id ?? null);
    setAutoExpandedSeed(seed);
  }, [curriculumLevels, completedLessonIds, studentType, autoExpandedSeed]);

  // Flatten curriculum classes to calculate next lesson
  const allCurriculumClasses = curriculumLevels.flatMap(level => level.classes.map(cls => ({...cls, levelId: level.id})));
  
  const pathCompletedIds = completedLessonIds.filter(id => allCurriculumClasses.some(c => c.id === id));
  const progressPercentage = allCurriculumClasses.length > 0 ? Math.round((pathCompletedIds.length / allCurriculumClasses.length) * 100) : 0;
  
  // Find next class to do
  const nextClassIndex = allCurriculumClasses.findIndex(c => !pathCompletedIds.includes(c.id));
  const nextClass = nextClassIndex !== -1 ? allCurriculumClasses[nextClassIndex] : null;

  const displayStudentName = studentName && studentName.trim() !== '' ? studentName : studentConfig.name;
  const displayAvatarUrl = (avatarId && avatars[avatarId as keyof typeof avatars]) || studentConfig.avatarUrl;
  const isKid = studentType === 'niño';
  const isTeen = studentType === 'adolescente';
  const displayBrandName = isKid ? 'Maven English for kids' : isTeen ? 'Maven English for teens' : brand.name;

  const handleSelectCategory = (categoryId: string, title: string) => {
    setActiveLibraryCategoryId(categoryId);
    setActiveLibraryCategoryTitle(title);
  };

  const handleBackToCategories = () => {
    setActiveLibraryCategoryId(null);
  };

  return (
    <div className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 ${isKid ? 'bg-gradient-to-br from-yellow-50 via-cyan-50 to-pink-50 min-h-screen rounded-[3rem] shadow-inner p-8 border-4 border-yellow-200' : ''}`}>
      
      {/* Brand Header */}
      <div className="flex items-center justify-center sm:justify-start gap-4 mb-8">
        {brand.logoUrl && (
          <img referrerPolicy="no-referrer" src={brand.logoUrl} alt={brand.name} className={`w-12 h-12 md:w-16 md:h-16 object-contain shadow-sm ${isKid ? 'rounded-full border-4 border-cyan-300 transform -rotate-6 shadow-xl' : 'rounded-xl'}`} />
        )}
        <h1 className={`text-2xl md:text-3xl font-black tracking-tight ${isKid ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-sm font-extrabold text-4xl' : 'text-indigo-900'}`}>{displayBrandName}</h1>
      </div>

      {/* Student Profile Header */}
      <div className={`grid grid-cols-1 gap-6 mb-8 p-5 sm:p-6 lg:grid-cols-[auto_1fr] lg:items-start rounded-[2rem] shadow-sm ${isKid ? 'bg-white border-4 border-pink-200 shadow-pink-100/50 shadow-xl relative overflow-hidden' : 'bg-white border border-indigo-50'}`}>
        {isKid && (
          <>
            <div className="absolute top-[-20px] right-[-20px] text-6xl opacity-20 transform rotate-12">🌟</div>
            <div className="absolute bottom-[-10px] left-[20%] text-5xl opacity-20 transform -rotate-12">🚀</div>
          </>
        )}
        <div className="relative z-10 flex flex-col items-center gap-3 sm:flex-row lg:flex-col lg:items-center">
          <img referrerPolicy="no-referrer" src={displayAvatarUrl} alt={displayStudentName} className={`w-24 h-24 object-cover rounded-full shadow-md transform rotate-3 ${isKid ? 'border-4 border-yellow-400 w-32 h-32 shadow-yellow-200/50' : 'border-4 border-indigo-100'}`} />
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isKid ? 'bg-cyan-100 border-2 border-cyan-200' : 'bg-indigo-50'}`}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className={`text-xs font-bold uppercase tracking-widest ${isKid ? 'text-cyan-800' : 'text-indigo-700'}`}>{userLevel}</span>
          </div>
        </div>

        <div className="relative z-10 min-w-0">
          <div className="mb-5 text-center lg:text-left">
            <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${isKid ? 'text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 drop-shadow-sm' : 'text-gray-800'}`}>¡Hola, {displayStudentName}! 👋</h2>
            <p className={`font-medium mt-2 ${isKid ? 'text-pink-600 text-lg' : 'text-gray-500'}`}>{studentConfig.motivation}</p>
          </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <button
             onClick={onOpenStructureMode}
             className="group relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 bg-gradient-to-br from-slate-950 via-indigo-700 to-cyan-500"
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <Braces className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">Modo Estructuras</span>
             </div>
          </button>
          <button
             onClick={onOpenEntranceAssessment}
             className={`group relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${isKid ? 'bg-gradient-to-br from-lime-400 via-cyan-400 to-blue-500 hover:shadow-cyan-300/50' : isTeen ? 'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500' : 'bg-gradient-to-br from-slate-900 via-indigo-700 to-cyan-600'}`}
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <ClipboardCheck className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">{isKid ? 'Examen de Ingreso Kids' : isTeen ? 'Examen de Ingreso Teens' : 'Examen de Ingreso'}</span>
             </div>
          </button>
          <button 
             onClick={onOpenSpeakingPractice}
             className={`relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${isKid ? 'bg-gradient-to-br from-cyan-400 to-blue-500 hover:shadow-cyan-300/50' : 'bg-gradient-to-br from-indigo-500 to-blue-600'}`}
          >
             <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <span className="font-bold text-white tracking-wide">{isKid ? '🎤 ¡Vamos a Hablar!' : '🎙️ Práctica Speaking'}</span>
             </div>
          </button>
          <button 
             onClick={onOpenStoryForge}
             className={`relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${isKid ? 'bg-gradient-to-br from-fuchsia-400 to-pink-500 hover:shadow-fuchsia-300/50' : 'bg-gradient-to-br from-fuchsia-500 to-purple-600'}`}
          >
             <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <span className="font-bold text-white tracking-wide">{isKid ? '✨ ¡Crea un Cuento!' : '✨ StoryForge'}</span>
             </div>
          </button>
          <button 
             onClick={onOpenAssessment}
             className={`group relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${isKid ? 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:shadow-orange-300/50' : 'bg-gradient-to-br from-amber-400 to-orange-500'}`}
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <Sparkles className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">{isKid ? '✨ ¡Súper Juego!' : 'Evaluación Inicial'}</span>
             </div>
          </button>
        </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex flex-wrap md:flex-nowrap p-1 rounded-2xl mb-8 w-full mx-auto md:mx-0 overflow-x-auto ${isKid ? 'bg-white/60 border-2 border-pink-100 backdrop-blur-md shadow-sm' : 'bg-gray-100/50 border border-gray-200/50'}`}>
        <button
          onClick={() => { setActiveTab('path'); setActiveLibraryCategoryId(null); }}
          className={`flex-1 min-w-max px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'path' 
              ? (isKid ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg shadow-pink-200 border-none scale-105' : 'bg-white text-indigo-600 shadow-sm border border-gray-100')
              : (isKid ? 'text-gray-500 hover:text-pink-600 hover:bg-pink-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50')
          }`}
        >
          <GraduationCap className="w-5 h-5 shrink-0" /> {isKid ? 'Mi Aventura ✨' : 'Plan de Estudios Oficial'}
        </button>
        <button
          onClick={() => setActiveTab('library')}
          className={`flex-1 min-w-max px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'library' 
               ? (isKid ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-200 border-none scale-105' : 'bg-white text-indigo-600 shadow-sm border border-gray-100')
               : (isKid ? 'text-gray-500 hover:text-cyan-600 hover:bg-cyan-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50')
          }`}
        >
          <Layers className="w-5 h-5 shrink-0" /> {isKid ? 'Juegos y Sorpresas 🎈' : 'Biblioteca de Temas'}
        </button>
      </div>

      {activeTab === 'library' ? (
        activeLibraryCategoryId ? (
          <div className="mt-8">
            <button 
              onClick={handleBackToCategories}
              className="mb-8 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold transition-colors bg-indigo-50 px-4 py-2 rounded-full w-max"
            >
              <ArrowLeft className="w-5 h-5" /> Volver a categorías
            </button>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
              Contenido: {activeLibraryCategoryTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryLessons.filter(l => l.categoryId === activeLibraryCategoryId).map((lesson, idx) => {
                const isCompleted = completedLessonIds.includes(lesson.id);
                return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-3xl p-6 shadow-sm border transition-all flex flex-col h-full ${
                    isCompleted ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-indigo-100 hover:shadow-lg'
                  }`}
                >
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-start mb-6 relative">
                       <span className="text-xs font-black uppercase tracking-wider text-indigo-400 mt-2">
                         {lesson.etapa}
                       </span>
                       <div className="flex items-center gap-2">
                         <div className="absolute right-0 top-0 flex flex-col items-end gap-2">
                           <motion.div
                             animate={{ y: [0, -8, 0] }}
                             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: idx * 0.1 }}
                             className="text-5xl filter drop-shadow-xl"
                           >
                             {lesson.icon3D || '✨'}
                           </motion.div>
                           {!isCompleted && (
                             <button
                               onClick={(e) => {
                                 e.stopPropagation();
                                 if (onToggleClass) onToggleClass(lesson.id);
                               }}
                               className="bg-gray-50 text-gray-300 p-1.5 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors shadow-sm"
                               title="Marcar como completada manualmente"
                             >
                               <CheckCircle className="w-5 h-5" />
                             </button>
                           )}
                         </div>
                       </div>
                    </div>
                    {isCompleted && (
                      <div className="mb-2 flex items-center justify-between">
                        <div>
                          <CheckCircle className="w-5 h-5 text-indigo-600 inline-block mr-1"/> 
                          <span className="text-sm text-indigo-600 font-bold">Completado</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onToggleClass) onToggleClass(lesson.id);
                          }}
                          className="bg-indigo-50 text-indigo-400 p-1.5 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors"
                          title="Desmarcar completada"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{lesson.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-8 flex-1">{lesson.objetivo}</p>
                  
                  <button
                    onClick={() => onStartLibraryLesson(lesson.id)}
                    className={`w-full p-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 ${
                      isCompleted 
                        ? 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300' 
                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    {isCompleted ? 'Repasar Tema' : 'Estudiar Tema'} <Play className="w-4 h-4 fill-current" />
                  </button>
                </motion.div>
                );
              })}
              {libraryLessons.filter(l => l.categoryId === activeLibraryCategoryId).length === 0 && (
                <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="font-medium text-lg">Pronto agregaremos lecciones a esta categoría.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <LibraryCategories onSelectCategory={handleSelectCategory} isKid={isKid} />
        )
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className={`text-4xl font-extrabold tracking-tight ${isKid ? 'text-cyan-600 drop-shadow-sm' : 'text-gray-900'}`}>{isKid ? 'Tu Mapa de Aventuras ✨' : 'Plan de Estudios Oficial'}</h1>
              <p className={`text-lg mt-2 ${isKid ? 'text-pink-500 font-medium' : 'text-gray-600'}`}>{isKid ? '¡Desbloquea las misiones y gana medallas!' : 'La ruta estructurada para alcanzar tu fluidez.'}</p>
            </div>
            
            <div className={`p-4 rounded-2xl shadow-sm border min-w-[240px] ${isKid ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300 transform rotate-2' : 'bg-white border-gray-100'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-semibold ${isKid ? 'text-orange-600' : 'text-gray-500'}`}>{isKid ? 'Tu Progreso' : 'Progreso Total'}</span>
                <span className={`text-sm font-bold ${isKid ? 'text-pink-600 text-lg' : 'text-indigo-600'}`}>{progressPercentage}%</span>
              </div>
              <div className={`w-full rounded-full h-3 ${isKid ? 'bg-white/50 border border-white' : 'bg-gray-100'}`}>
                <motion.div 
                  className={`h-3 rounded-full ${isKid ? 'bg-gradient-to-r from-pink-400 to-yellow-400' : 'bg-indigo-600'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {nextClass && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-3xl p-8 text-white shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden ${isKid ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 border-4 border-yellow-300' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}
            >
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 flex-1">
                <span className={`inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm shadow-sm ${isKid ? 'text-yellow-100' : ''}`}>
                  {isKid ? '¡Siguiente Misión!' : 'Tu próximo paso'}
                </span>
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-3xl font-bold">{nextClass.title}</h2>
                </div>
                <p className={`text-lg mb-4 ${isKid ? 'text-white font-medium' : 'text-indigo-100'}`}>{nextClass.description}</p>
              </div>
              <button 
                onClick={() => setPresentingClass(nextClass)}
                className={`relative z-10 bg-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap ${isKid ? 'text-pink-600 hover:bg-yellow-50 hover:text-pink-700' : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                <Play className="w-6 h-6 fill-current" />
                {isKid ? '¡A Jugar!' : 'Comenzar Clase'}
              </button>
            </motion.div>
          )}

          <div className="space-y-6">
            {curriculumLevels.map((level, idx) => {
               // Calculate level progress
               const levelClasses = level.classes;
               const levelCompleted = levelClasses.filter(c => completedLessonIds.includes(c.id)).length;
               const isFullyCompleted = levelClasses.length > 0 && levelCompleted === levelClasses.length;
               const levelProgressPercentage = levelClasses.length > 0 ? Math.round((levelCompleted / levelClasses.length) * 100) : 0;

               return (
               <div key={level.id} className={`bg-white rounded-3xl border shadow-sm overflow-hidden transition-all ${isFullyCompleted ? 'border-emerald-200 shadow-emerald-100/70' : 'border-gray-200'}`}>
                <div 
                  onClick={() => setExpandedLevel(prev => prev === level.id ? null : level.id)}
                  className={`p-6 cursor-pointer transition-colors flex items-start gap-4 ${isFullyCompleted ? 'bg-gradient-to-r from-emerald-50 via-white to-amber-50 hover:from-emerald-100' : 'hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-bold text-xl ${isFullyCompleted ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200' : 'bg-indigo-100 text-indigo-600'}`}>
                    {isFullyCompleted ? <Trophy className="w-6 h-6" /> : idx}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex flex-1 flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-bold text-gray-900">{level.title}</h2>
                        <div className="flex min-w-[160px] max-w-xs flex-1 items-center gap-2">
                          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 shadow-inner ring-1 ring-slate-200/80">
                            <motion.div
                              className={`h-full rounded-full ${isFullyCompleted ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400' : isKid ? 'bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400' : 'bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${levelProgressPercentage}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                          </div>
                          <span className={`min-w-[42px] text-right text-xs font-black ${isFullyCompleted ? 'text-emerald-700' : 'text-indigo-600'}`}>
                            {levelProgressPercentage}%
                          </span>
                        </div>
                        {isFullyCompleted && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" />
                            Nivel completado
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${expandedLevel === level.id ? 'rotate-180' : ''}`} />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold mb-3">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{level.mcfrEquivalent}</span>
                      <span className="flex items-center gap-1 text-gray-500"><Clock className="w-4 h-4"/> {level.duration}</span>
                      <span className={`flex items-center gap-1 ml-auto ${isFullyCompleted ? 'rounded-full bg-emerald-100 px-3 py-1 text-emerald-700' : 'text-gray-500'}`}>
                        {levelCompleted} / {levelClasses.length} completadas
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{level.objective}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedLevel === level.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 bg-slate-50/50">
                        {level.classes.length > 0 ? (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {level.classes.map((cls) => {
                              const isClassCompleted = completedLessonIds.includes(cls.id);
                              
                              return (
                                <motion.div
                                  key={cls.id}
                                  onClick={() => setPresentingClass(cls)}
                                  className={`relative bg-white rounded-2xl p-5 transition-all cursor-pointer flex flex-col h-full border-2 
                                    ${isClassCompleted 
                                      ? 'border-green-100 bg-green-50 hover:border-green-300 shadow-sm' 
                                      : 'border-indigo-100 hover:border-indigo-400 shadow-sm hover:shadow-md'
                                    }`}
                                >
                                  {isClassCompleted && (
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (onToggleClass) onToggleClass(cls.id);
                                        else onFinishClass(cls.id);
                                      }}
                                      className="absolute top-4 right-4 bg-green-100 p-1 rounded-full hover:bg-green-200 transition-colors"
                                    >
                                      <CheckCircle className="w-5 h-5 text-green-600" />
                                    </button>
                                  )}
                                  {!isClassCompleted && (
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (onToggleClass) onToggleClass(cls.id);
                                        else onFinishClass(cls.id);
                                      }}
                                      className="absolute top-4 right-4 bg-gray-50 text-gray-300 p-1 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors"
                                      title="Marcar como completada manualmente"
                                    >
                                      <CheckCircle className="w-5 h-5" />
                                    </button>
                                  )}
                                  <h4 className="text-lg font-bold text-gray-800 mb-1 leading-tight pr-8">{cls.title}</h4>
                                  <p className="text-gray-500 text-sm flex-1">{cls.description}</p>
                                  
                                  <div className="mt-4 flex items-center justify-between">
                                    <div className={`flex items-center font-semibold text-sm group ${isClassCompleted ? 'text-green-600' : 'text-indigo-600'}`}>
                                      {isClassCompleted ? 'Repasar Clase' : 'Estudiar ahora'}
                                      <Play className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    {!isClassCompleted && (
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setEvaluatingClass({ id: cls.id, title: cls.title });
                                        }}
                                        className="text-xs font-bold text-gray-400 hover:text-indigo-600 flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-indigo-50"
                                        title="Hacer evaluación para exonerar esta clase"
                                      >
                                        <Sparkles className="w-3 h-3" /> Exonerar
                                      </button>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-400 font-medium bg-white rounded-xl border border-dashed border-gray-200">
                            Pronto agregaremos más clases a este nivel.
                          </div>
                        )}

                        {/* Evaluations UI for Students */}
                        {(level.oralEvaluation || level.virtualEvaluation !== undefined) && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                              {/* Oral Evaluation */}
                              {(level.oralEvaluation && level.oralEvaluation.length > 0) && (
                                  <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 shadow-sm flex flex-col">
                                      <div>
                                          <div className="flex items-center gap-2 mb-4">
                                              <div className="bg-amber-100 p-2 rounded-lg">
                                                  <Users className="w-5 h-5 text-amber-700" />
                                              </div>
                                              <h3 className="font-bold text-amber-900 text-lg">Preparación Examen Oral</h3>
                                          </div>
                                          <p className="text-sm text-amber-800 mb-4 font-medium">Preguntas para practicar con tu tutor al final del nivel:</p>
                                          <div className="divide-y-2 divide-amber-200/50 divide-dashed border-2 border-amber-200/50 rounded-2xl bg-white/50 overflow-hidden mb-4">
                                              {level.oralEvaluation.map((q, idx) => (
                                                  <div key={idx} className="p-4 flex gap-4 focus-within:bg-amber-50 hover:bg-white transition-colors">
                                                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white font-black text-sm shadow-sm pt-0.5">
                                                          {idx + 1}
                                                      </div>
                                                      <div>
                                                          <div className="text-xs font-extrabold text-amber-500 uppercase tracking-widest mb-1">{q.topic}</div>
                                                          <div className="text-sm text-gray-900 font-bold">{q.question}</div>
                                                      </div>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>
                                      <button
                                          onClick={() => {
                                              const qText = level.oralEvaluation?.map(q => `*${q.topic}*: ${q.question}`).join('\n\n');
                                              const msg = `Hola, quiero practicar las preguntas del examen oral de ${level.title}:\n\n${qText}`;
                                              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                          }}
                                          className="w-full mt-auto bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                                      >
                                          <Share className="w-4 h-4" />
                                          Compartir por WhatsApp
                                      </button>
                                  </div>
                              )}

                              {/* Virtual Evaluation Link */}
                              <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 shadow-sm flex flex-col items-start justify-between">
                                      <div className="w-full">
                                          <div className="flex items-center gap-2 mb-4">
                                              <div className="bg-emerald-100 p-2 rounded-lg">
                                                  <BookOpen className="w-5 h-5 text-emerald-700" />
                                              </div>
                                              <h3 className="font-bold text-emerald-900 text-lg">Examen Virtual</h3>
                                          </div>
                                          <p className="text-sm text-emerald-800 mb-4 font-medium">Evalúa lo que aprendiste en este nivel respondiendo este cuestionario interactivo.</p>
                                      </div>
                                      <div className="w-full flex gap-2 mt-4">
                                          <button 
                                              onClick={() => {
                                                  window.open(`/?evaluacion=${level.id}&student=${encodeURIComponent(studentName || '')}&type=${encodeURIComponent(studentType || 'adulto')}`, '_blank');
                                              }}
                                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                                          >
                                              Tomar Examen
                                              <Play className="w-4 h-4 fill-current" />
                                          </button>
                                          <button 
                                              onClick={() => {
                                                  const url = `${window.location.origin}/?evaluacion=${level.id}&student=${encodeURIComponent(studentName || '')}&type=${encodeURIComponent(studentType || 'adulto')}`;
                                                  const msg = `Aquí está mi enlace para realizar el examen virtual de ${level.title}:\n\n${url}`;
                                                  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                              }}
                                              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all shadow-sm"
                                              title="Compartir enlace"
                                          >
                                              <Share className="w-5 h-5" />
                                          </button>
                                      </div>
                                  </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
               </div>
               );
            })}
          </div>
        </div>
      )}

      <AnimatePresence>
        {presentingClass && (
          <PresentationViewer 
            cls={presentingClass} 
            onClose={() => setPresentingClass(null)} 
            onComplete={() => {
              onFinishClass(presentingClass.id);
              setPresentingClass(null);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {evaluatingClass && (
          <PreClassAssessment
            classId={evaluatingClass.id}
            classTitle={evaluatingClass.title}
            targetAudience={studentType || 'adulto'}
            onClose={() => setEvaluatingClass(null)}
            onPass={(passedClassId) => {
              onFinishClass(passedClassId);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
