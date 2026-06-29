import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen, Clock, Target, PlayCircle, Users, Play } from 'lucide-react';
import { CurriculumLevel, CurriculumClass } from '../types';
import { PresentationViewer } from './PresentationViewer';
import { getCurriculumForType } from '../data/curriculumSelector';

export function CurriculumView() {
  const allCurriculums = [
    { title: 'Adultos', levels: getCurriculumForType('adulto') },
    { title: 'Niños', levels: getCurriculumForType('niño') },
    { title: 'Adolescentes', levels: getCurriculumForType('adolescente') }
  ];
  
  const [activeType, setActiveType] = useState('Adultos');
  
  const curriculumLevels = allCurriculums.find(c => c.title === activeType)?.levels || [];
  
  const [expandedLevel, setExpandedLevel] = useState<string | null>(curriculumLevels.length > 0 ? curriculumLevels[0].id : null);
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [presentingClass, setPresentingClass] = useState<CurriculumClass | null>(null);

  const toggleLevel = (id: string) => {
    setExpandedLevel(prev => prev === id ? null : id);
    setExpandedClass(null);
  };

  const toggleClass = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedClass(prev => prev === id ? null : id);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Plan de Estudios Completo</h1>
            <p className="text-lg text-gray-600 mt-2">Explora la estructura detallada de todos los niveles y clases disponibles.</p>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-xl self-center sm:self-auto">
            {allCurriculums.map(c => (
              <button
                key={c.title}
                onClick={() => {
                  setActiveType(c.title);
                  setExpandedLevel(c.levels.length > 0 ? c.levels[0].id : null);
                }}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeType === c.title ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {curriculumLevels.map((level, idx) => (
            <div key={level.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleLevel(level.id)}
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl">
                  {idx}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">{level.title}</h2>
                    <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${expandedLevel === level.id ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold mb-3">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{level.mcfrEquivalent}</span>
                    <span className="flex items-center gap-1 text-gray-500"><Clock className="w-4 h-4"/> {level.duration}</span>
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
                    <div className="p-6 bg-slate-50/50 space-y-4">
                      {level.classes.length > 0 ? level.classes.map((cls) => (
                        <div key={cls.id} className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden">
                          <div 
                            onClick={(e) => toggleClass(cls.id, e)}
                            className="p-4 cursor-pointer hover:bg-indigo-50/50 transition-colors flex items-center justify-between"
                          >
                            <div>
                              <h3 className="font-bold text-indigo-900 text-lg">{cls.title}</h3>
                              <p className="text-sm text-gray-500">{cls.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={(e) => { e.stopPropagation(); setPresentingClass(cls); }}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-colors"
                              >
                                <Play className="w-4 h-4" /> Presentar
                              </button>
                              <ChevronDown className={`w-5 h-5 text-indigo-300 transition-transform ${expandedClass === cls.id ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {expandedClass === cls.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                <div className="p-6 border-t border-indigo-50 bg-indigo-50/10 space-y-6">
                                  {cls.sections.map((section, sIdx) => (
                                    <div key={section.id} className="relative pl-8">
                                      <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo-200"></div>
                                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-indigo-500"></div>
                                      
                                      <div className="mb-2">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                          {section.title}
                                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                                            {section.duration}
                                          </span>
                                        </h4>
                                        <p className="text-sm text-indigo-600 font-semibold mt-1">Objetivo: <span className="font-normal text-gray-600">{section.objective}</span></p>
                                      </div>
                                      
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                        {section.slides.map(slide => (
                                          <div key={slide.id} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
                                            <PlayCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                            <div>
                                              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{slide.id}</div>
                                              <div className="text-sm font-semibold text-gray-800">{slide.title}</div>
                                              <div className="text-xs text-gray-500">{slide.description}</div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="flex items-center gap-2 text-sm font-medium text-amber-700 bg-amber-50 p-2.5 rounded-lg">
                                        <Users className="w-4 h-4 shrink-0" />
                                        Acción principal: {section.action}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )) : (
                        <div className="text-center py-8 text-gray-400 font-medium">
                          <BookOpen className="w-12 h-12 mx-auto text-gray-200 mb-3" />
                          Pronto agregaremos las clases de este nivel.
                        </div>
                      )}

                      {/* Evaluations UI */}
                      {(level.oralEvaluation || level.virtualEvaluation) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {/* Oral Evaluation */}
                            {level.oralEvaluation && (
                                <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-amber-100 p-2 rounded-lg">
                                            <Users className="w-5 h-5 text-amber-700" />
                                        </div>
                                        <h3 className="font-bold text-amber-900 text-lg">Evaluación Oral</h3>
                                    </div>
                                    <p className="text-sm text-amber-800 mb-4 font-medium">Preguntas para preparar el examen oral con el tutor:</p>
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
                            )}

                            {/* Virtual Evaluation Link */}
                            {level.virtualEvaluation && (
                                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 shadow-sm flex flex-col items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="bg-emerald-100 p-2 rounded-lg">
                                                <Target className="w-5 h-5 text-emerald-700" />
                                            </div>
                                            <h3 className="font-bold text-emerald-900 text-lg">Evaluación Virtual</h3>
                                        </div>
                                        <p className="text-sm text-emerald-800 mb-4 font-medium">Link para que el estudiante realice el examen virtual escrito/audios. Guarda el score en la DB.</p>
                                    </div>
                                    <button 
                                        onClick={() => {
                                            const url = `${window.location.origin}/?evaluacion=${level.id}`;
                                            const msg = `¡Hola! Aquí tienes el enlace para tu examen de final de nivel (${level.title}). ¡Mucho éxito! 🚀\n\n${url}`;
                                            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                        }}
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                                    >
                                        <BookOpen className="w-5 h-5" />
                                        Compartir por WhatsApp
                                    </button>
                                </div>
                            )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {presentingClass && (
          <PresentationViewer cls={presentingClass} onClose={() => setPresentingClass(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
