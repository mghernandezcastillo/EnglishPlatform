import { useCallback, useState, useEffect } from 'react';
import { CurriculumClass, CurriculumLevel, EvaluationRecord } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle, Play, Sparkles, Layers, ArrowLeft, GraduationCap, Clock, ChevronDown, Users, Share, Trophy, ClipboardCheck, Braces, Search, Mic2, RefreshCw, ExternalLink } from 'lucide-react';
import { studentConfig, avatars } from '../config';
import { LibraryCategories } from './LibraryCategories';
import { libraryLessons } from '../data/libraryLessons';
import { getCurriculumForType } from '../data/curriculumSelector';
import { useCurriculum } from '../hooks/useCurriculum';
import { PresentationViewer } from './PresentationViewer';
import { useBrand } from '../hooks/useBrand';
import { PreClassAssessment } from './PreClassAssessment';
import { BrandWordmark } from './BrandWordmark';
import { Diploma } from './Diploma';
import { OralEvaluationPresentation } from './OralEvaluationPresentation';
import { dbAdmin } from '../lib/db';
import { evaluationPassed, latestEvaluation } from '../lib/evaluationResults';
import { VirtualEvaluationResult } from './VirtualEvaluationResult';

interface DashboardProps {
  completedLessonIds: string[];
  approvedLevelIds: string[];
  userLevel: string;
  studentName?: string;
  studentId?: string | null;
  avatarId?: string;
  studentType?: string;
  presentationMode?: 'studio' | 'classic';
  onStartLibraryLesson: (lessonId: string) => void;
  onFinishClass: (classId: string) => void;
  onApproveLevel: (levelId: string) => Promise<void>;
  onToggleClass?: (classId: string) => void;
  onOpenEntranceAssessment: () => void;
  onOpenSpeakingPractice: () => void;
  onOpenStoryDecoder: () => void;
  onOpenStructureMode: () => void;
  onOpenVerbsGuide: () => void;
  onOpenVocabVault?: () => void;
}

export function Dashboard({ completedLessonIds, approvedLevelIds, userLevel, studentName, studentId, avatarId, studentType, presentationMode, onStartLibraryLesson, onFinishClass, onApproveLevel, onToggleClass, onOpenEntranceAssessment, onOpenSpeakingPractice, onOpenStoryDecoder, onOpenStructureMode, onOpenVerbsGuide, onOpenVocabVault }: DashboardProps) {
  const [currentMode, setCurrentMode] = useState<'studio' | 'classic'>(presentationMode || (typeof window !== 'undefined' ? (localStorage.getItem('maven_presentation_mode') as 'studio' | 'classic') || 'studio' : 'studio'));

  useEffect(() => {
    if (presentationMode && presentationMode !== currentMode) {
      setCurrentMode(presentationMode);
    }
  }, [presentationMode]);

  const { curriculumLevels, loading } = useCurriculum(studentType, currentMode);

  const handleSwitchPresentationMode = async (mode: 'studio' | 'classic') => {
    setCurrentMode(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('maven_presentation_mode', mode);
    }
    if (studentId) {
      await dbAdmin.updateStudent(studentId, { presentation_mode: mode });
    }
  };

  const [activeTab, setActiveTab] = useState<'path' | 'library'>('path');
  const [activeLibraryCategoryId, setActiveLibraryCategoryId] = useState<string | null>(null);
  const [activeLibraryCategoryTitle, setActiveLibraryCategoryTitle] = useState<string>('');
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [autoExpandedSeed, setAutoExpandedSeed] = useState('');
  const [presentingClass, setPresentingClass] = useState<CurriculumClass | null>(null);
  const [evaluatingClass, setEvaluatingClass] = useState<{ id: string, title: string } | null>(null);
  const [oralExamLevel, setOralExamLevel] = useState<CurriculumLevel | null>(null);
  const [evaluationRecords, setEvaluationRecords] = useState<EvaluationRecord[]>([]);
  const [isRefreshingEvaluations, setIsRefreshingEvaluations] = useState(false);
  const { brand } = useBrand();

  const refreshEvaluations = useCallback(async () => {
    if (!studentName?.trim()) {
      setEvaluationRecords([]);
      return;
    }
    setIsRefreshingEvaluations(true);
    const records = await dbAdmin.getEvaluationsForStudent(studentName);
    setEvaluationRecords(records);
    setIsRefreshingEvaluations(false);
  }, [studentName]);

  useEffect(() => {
    refreshEvaluations();
    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') refreshEvaluations();
    };
    const timer = window.setInterval(refreshWhenVisible, 60000); // was 15s, now 60s to reduce requests
    window.addEventListener('focus', refreshWhenVisible);
    document.addEventListener('visibilitychange', refreshWhenVisible);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', refreshWhenVisible);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, [refreshEvaluations]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const completedVirtualLevelId = params.get('finalizarNivel');
    if (!completedVirtualLevelId || curriculumLevels.length === 0 || evaluationRecords.length === 0) return;

    const level = curriculumLevels.find((item) => item.id === completedVirtualLevelId);
    if (!level?.oralEvaluation?.length) return;

    const oralResult = latestEvaluation(evaluationRecords, level.id, 'oral');
    const virtualResult = latestEvaluation(evaluationRecords, level.id, 'virtual');
    if (!evaluationPassed(oralResult, 'oral') || !evaluationPassed(virtualResult, 'virtual')) return;

    setExpandedLevel(level.id);
    setOralExamLevel(level);
    params.delete('finalizarNivel');
    const nextSearch = params.toString();
    window.history.replaceState({}, '', `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}`);
  }, [curriculumLevels, evaluationRecords]);

  useEffect(() => {
    const requestedLevelId = sessionStorage.getItem('maven_open_oral_exam');
    if (!requestedLevelId || curriculumLevels.length === 0) return;
    const level = curriculumLevels.find((item) => item.id === requestedLevelId);
    if (!level?.oralEvaluation?.length) return;

    setExpandedLevel(level.id);
    setOralExamLevel(level);
    sessionStorage.removeItem('maven_open_oral_exam');
  }, [curriculumLevels]);

  useEffect(() => {
    if (curriculumLevels.length === 0) return;
    const seed = `${studentType || 'adulto'}:${curriculumLevels.map(level => level.id).join('|')}`;
    if (autoExpandedSeed === seed) return;

    const firstIncompleteLevel = curriculumLevels.find(level =>
      level.classes.some(cls => !completedLessonIds.includes(cls.id)) || !approvedLevelIds.includes(level.id)
    );

    setExpandedLevel(firstIncompleteLevel?.id ?? null);
    setAutoExpandedSeed(seed);
  }, [curriculumLevels, completedLessonIds, approvedLevelIds, studentType, autoExpandedSeed]);

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
  const activeOralResult = oralExamLevel ? latestEvaluation(evaluationRecords, oralExamLevel.id, 'oral') : null;
  const activeVirtualResult = oralExamLevel ? latestEvaluation(evaluationRecords, oralExamLevel.id, 'virtual') : null;

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
      <div className="mb-8 flex items-center justify-center gap-4 sm:justify-start">
        {brand.logoUrl && (
          <img referrerPolicy="no-referrer" src={brand.logoUrl} alt={brand.name} className={`w-12 h-12 md:w-16 md:h-16 object-contain shadow-sm ${isKid ? 'rounded-full border-4 border-cyan-300 transform -rotate-6 shadow-xl' : 'rounded-xl'}`} />
        )}
        <BrandWordmark
          name={displayBrandName.toUpperCase()}
          subtitle={isKid ? 'Aprende jugando' : isTeen ? 'English that moves with you' : 'Speak with confidence'}
          compact
          centered={isKid}
          light={false}
        />
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
          <div className="mb-5 text-center lg:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${isKid ? 'text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 drop-shadow-sm' : 'text-gray-800'}`}>¡Hola, {displayStudentName}! 👋</h2>
              <p className={`font-medium mt-2 ${isKid ? 'text-pink-600 text-lg' : 'text-gray-500'}`}>{studentConfig.motivation}</p>
            </div>
            {isTeen && (
              <div className="flex items-center gap-2 self-center sm:self-auto bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-inner">
                <span className="text-xs font-bold text-slate-500 px-1">Modo:</span>
                <button
                  type="button"
                  onClick={() => handleSwitchPresentationMode('studio')}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                    currentMode === 'studio'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                  title="Modo Studio Interactivo (Blueprint con Grammar Studio, Verb Arena, Story Decoder)"
                >
                  ⚡ Studio
                </button>
                <button
                  type="button"
                  onClick={() => handleSwitchPresentationMode('classic')}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                    currentMode === 'classic'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                      : 'text-slate-600 hover:text-amber-600'
                  }`}
                  title="Modo Clásico Tradicional (22 Diapositivas)"
                >
                  📜 Clásico
                </button>
              </div>
            )}
          </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <button
             onClick={onOpenVocabVault}
             className="group relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <Sparkles className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">Mi Vocabulario</span>
             </div>
          </button>
          <button
             onClick={onOpenVerbsGuide}
             className="group relative min-h-[64px] w-full overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-950"
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <Search className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">Verb Guide</span>
             </div>
          </button>
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
             onClick={onOpenStoryDecoder}
             className="group relative min-h-[64px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-700 to-cyan-600 p-1 shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
               <BookOpen className="w-5 h-5 text-white" />
               <span className="font-bold text-white tracking-wide">Story Decoder</span>
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
               const areClassesCompleted = levelClasses.length > 0 && levelCompleted === levelClasses.length;
               const oralResult = latestEvaluation(evaluationRecords, level.id, 'oral');
               const virtualResult = latestEvaluation(evaluationRecords, level.id, 'virtual');
               const oralPassed = level.oralEvaluation?.length ? evaluationPassed(oralResult, 'oral') : true;
               const virtualPassed = level.virtualEvaluation?.length ? evaluationPassed(virtualResult, 'virtual') : true;
               const isTutorApproved = approvedLevelIds.includes(level.id);
               const isFullyCompleted = areClassesCompleted && oralPassed && virtualPassed && isTutorApproved;
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
                        {areClassesCompleted && !oralPassed && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-800 ring-1 ring-amber-200">
                            <Users className="h-3.5 w-3.5" />
                            Pendiente examen oral
                          </span>
                        )}
                        {areClassesCompleted && oralPassed && !virtualPassed && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-800 ring-1 ring-cyan-200">
                            <BookOpen className="h-3.5 w-3.5" />
                            Pendiente examen virtual
                          </span>
                        )}
                        {areClassesCompleted && oralPassed && virtualPassed && !isTutorApproved && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-violet-800 ring-1 ring-violet-200">
                            <Trophy className="h-3.5 w-3.5" />
                            Pendiente aprobación del tutor
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
                                          <div className={`mb-4 inline-flex w-max items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wider ${oralPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-white text-amber-800 ring-1 ring-amber-200'}`}>
                                              {oralPassed ? <CheckCircle className="h-4 w-4" /> : <Mic2 className="h-4 w-4" />}
                                              {oralPassed ? 'Oral aprobado' : areClassesCompleted ? 'Listo para presentar' : 'Disponible al terminar las clases'}
                                          </div>
                                          <p className="mb-4 text-sm font-medium text-amber-800">
                                            Abre en una pantalla independiente el banco de preguntas sugeridas para este nivel. Puedes usar las que mejor se adapten al estudiante.
                                          </p>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              const url = `${window.location.origin}/?preguntasOrales=${encodeURIComponent(level.id)}&type=${encodeURIComponent(studentType || 'adulto')}`;
                                              window.open(url, '_blank', 'noopener,noreferrer');
                                            }}
                                            className="mb-4 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-300 bg-white px-4 py-3 font-black text-amber-900 transition hover:bg-amber-100"
                                          >
                                            <ExternalLink className="h-5 w-5" />
                                            Abrir banco de preguntas
                                          </button>
                                      </div>
                                      <div className="mt-auto grid gap-2">
                                          <button
                                              type="button"
                                              disabled={!areClassesCompleted}
                                              onClick={() => setOralExamLevel(level)}
                                              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-base font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-400 disabled:hover:translate-y-0"
                                          >
                                              <Mic2 className="h-5 w-5" />
                                              {oralPassed ? 'Ver resultado oral' : areClassesCompleted ? 'Presentar examen oral' : 'Completa primero las clases'}
                                          </button>
                                          <button
                                              onClick={() => {
                                                  const qText = level.oralEvaluation?.map(q => `*${q.topic}*: ${q.question}`).join('\n\n');
                                                  const msg = `Hola, quiero practicar las preguntas del examen oral de ${level.title}:\n\n${qText}`;
                                                  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                              }}
                                              className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-4 py-3 font-bold text-amber-800 transition hover:bg-amber-100"
                                          >
                                              <Share className="w-4 h-4" />
                                              Compartir preguntas
                                          </button>
                                      </div>
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
                                          <div className={`mb-4 inline-flex w-max items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wider ${virtualPassed ? 'bg-emerald-200 text-emerald-900' : oralPassed ? 'bg-white text-emerald-800 ring-1 ring-emerald-200' : 'bg-slate-100 text-slate-500'}`}>
                                              {virtualPassed ? <CheckCircle className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                                              {virtualPassed ? 'Virtual aprobado' : oralPassed ? 'Siguiente paso' : 'Después del examen oral'}
                                          </div>
                                          <p className="text-sm text-emerald-800 mb-4 font-medium">Evalúa lo que aprendiste en este nivel respondiendo este cuestionario interactivo.</p>
                                          <div className="mb-4 max-h-96 overflow-y-auto">
                                            <VirtualEvaluationResult
                                              evaluation={virtualResult}
                                              questions={level.virtualEvaluation || []}
                                            />
                                          </div>
                                          <button
                                            type="button"
                                            disabled={isRefreshingEvaluations}
                                            onClick={refreshEvaluations}
                                            className="mb-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-white px-4 font-black text-emerald-800 transition hover:bg-emerald-100 disabled:opacity-60"
                                          >
                                            <RefreshCw className={`h-4 w-4 ${isRefreshingEvaluations ? 'animate-spin' : ''}`} />
                                            {isRefreshingEvaluations ? 'Consultando resultado...' : 'Actualizar resultado del estudiante'}
                                          </button>
                                      </div>
                                      <div className="w-full flex gap-2 mt-4">
                                          <button 
                                              disabled={!oralPassed}
                                              onClick={() => {
                                                  window.open(`/?evaluacion=${level.id}&student=${encodeURIComponent(studentName || '')}&type=${encodeURIComponent(studentType || 'adulto')}${studentId ? `&studentId=${encodeURIComponent(studentId)}` : ''}`, '_blank');
                                              }}
                                              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white shadow-sm transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                                          >
                                              {virtualPassed ? 'Ver examen' : oralPassed ? 'Tomar examen' : 'Primero aprueba el oral'}
                                              <Play className="w-4 h-4 fill-current" />
                                          </button>
                                          <button 
                                              disabled={!oralPassed}
                                              onClick={() => {
                                                  const url = `${window.location.origin}/?evaluacion=${level.id}&student=${encodeURIComponent(studentName || '')}&type=${encodeURIComponent(studentType || 'adulto')}${studentId ? `&studentId=${encodeURIComponent(studentId)}` : ''}`;
                                                  const msg = `Aquí está mi enlace para realizar el examen virtual de ${level.title}:\n\n${url}`;
                                                  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                              }}
                                              className="flex items-center justify-center rounded-xl bg-emerald-800 px-4 py-3 font-bold text-white shadow-sm transition-all hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-slate-300"
                                              title="Compartir enlace"
                                          >
                                              <Share className="w-5 h-5" />
                                          </button>
                                      </div>
                                  </div>
                          </div>
                        )}

                        <div className={`mt-6 rounded-3xl border p-5 shadow-sm ${
                          isFullyCompleted
                            ? 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-red-50'
                            : 'border-slate-200 bg-white'
                        }`}>
                          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <h3 className="text-2xl font-black text-slate-950">Certificado de finalización</h3>
                              <p className="text-sm font-semibold text-slate-600">
                                {isFullyCompleted
                                  ? `Tu certificado de ${level.title} está listo para descargar o compartir mediante un enlace.`
                                  : !areClassesCompleted
                                    ? `Completa todas las clases de ${level.title} para iniciar las evaluaciones finales.`
                                    : !oralPassed
                                      ? 'El siguiente paso es presentar el examen oral con el tutor.'
                                      : !virtualPassed
                                        ? 'El oral está aprobado. Falta aprobar el examen virtual.'
                                        : 'Ambos exámenes están aprobados. El tutor debe completar formalmente el nivel.'}
                              </p>
                            </div>
                            <span className={`inline-flex w-max items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider ${
                              isFullyCompleted ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'
                            }`}>
                              <Trophy className="h-4 w-4" />
                              {isFullyCompleted ? 'Disponible' : 'Bloqueado'}
                            </span>
                          </div>

                          {isFullyCompleted ? (
                            <Diploma
                              studentName={displayStudentName}
                              levelName={level.title}
                              brandName={displayBrandName}
                              logoUrl={brand.logoUrl}
                              certificateKind="level"
                              levelId={level.id}
                              studentType={studentType || 'adulto'}
                            />
                          ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                              <p className="text-lg font-black text-slate-700">
                                {!areClassesCompleted
                                  ? 'El certificado aparecerá aquí al finalizar el nivel.'
                                  : !oralPassed
                                    ? 'Pendiente: examen oral.'
                                    : !virtualPassed
                                      ? 'Pendiente: examen virtual.'
                                      : 'Esperando confirmación final del tutor.'}
                              </p>
                              <p className="mt-2 text-sm font-semibold text-slate-500">
                                {areClassesCompleted && oralPassed && virtualPassed
                                  ? 'El tutor puede marcar el nivel como completado desde el resultado del examen oral.'
                                  : 'Cuando esté disponible podrás descargarlo o copiar un mensaje con su enlace para WhatsApp.'}
                              </p>
                              {areClassesCompleted && oralPassed && virtualPassed && !isTutorApproved && (
                                <button
                                  type="button"
                                  onClick={() => setOralExamLevel(level)}
                                  className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 text-lg font-black text-white shadow-lg transition hover:-translate-y-0.5"
                                >
                                  <ClipboardCheck className="h-5 w-5" />
                                  Revisar resultados y completar nivel
                                </button>
                              )}
                            </div>
                          )}
                        </div>
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
            studentId={studentId}
            studentName={displayStudentName}
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
      <AnimatePresence>
        {oralExamLevel?.oralEvaluation && (
          <OralEvaluationPresentation
            levelId={oralExamLevel.id}
            levelTitle={oralExamLevel.title}
            questions={oralExamLevel.oralEvaluation}
            studentName={displayStudentName}
            studentType={studentType || 'adulto'}
            studentId={studentId}
            brandName={displayBrandName}
            logoUrl={brand.logoUrl}
            existingResult={activeOralResult}
            virtualResult={activeVirtualResult}
            virtualQuestions={oralExamLevel.virtualEvaluation || []}
            levelApproved={approvedLevelIds.includes(oralExamLevel.id)}
            onClose={() => setOralExamLevel(null)}
            onSaved={(evaluation) => {
              setEvaluationRecords((current) => [evaluation, ...current.filter((item) => item.id !== evaluation.id)]);
            }}
            onApproveLevel={onApproveLevel}
            onRefreshResults={refreshEvaluations}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
