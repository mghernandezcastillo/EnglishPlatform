import React, { useState } from 'react';
import { 
  Plus, Edit3, Trash2, ChevronUp, ChevronDown, 
  Image as ImageIcon, Sparkles, HelpCircle, Gamepad2, 
  BookOpen, Trophy, ShieldAlert, Video, MessageSquare
} from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../../types';
import { SLIDE_TYPE_REGISTRY } from '../../config/slideTypeRegistry';

interface ClassSectionOrganizerProps {
  cls: CurriculumClass;
  track: string;
  onEditSlide: (sectionId: string, slide: ClassSlide) => void;
  onDeleteSlide: (sectionId: string, slideId: string) => void;
  onAddSlide: (sectionId: string, slideType: string) => void;
  onReorderSlide: (sectionId: string, slideId: string, direction: 'up' | 'down') => void;
}

export function ClassSectionOrganizer({
  cls,
  track,
  onEditSlide,
  onDeleteSlide,
  onAddSlide,
  onReorderSlide
}: ClassSectionOrganizerProps) {
  const [selectedSectionToAdd, setSelectedSectionToAdd] = useState<string | null>(null);

  const getSlideIcon = (type?: string) => {
    switch (type) {
      case 'speaking-boss-battle': return <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />;
      case 'roleplay':
      case 'lets-say': return <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />;
      case 'emoji-game':
      case 'matching-game': return <Gamepad2 className="w-3.5 h-3.5 text-pink-400" />;
      case 'video': return <Video className="w-3.5 h-3.5 text-red-400" />;
      case 'homework': return <BookOpen className="w-3.5 h-3.5 text-emerald-400" />;
      default: return <ImageIcon className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {cls.sections.map((section, sIdx) => {
        return (
          <div 
            key={section.id || sIdx}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4"
          >
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-400 text-sm">
                  {sIdx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{section.title}</h3>
                  <p className="text-xs text-slate-400">
                    {section.objective} • <span className="text-indigo-400">{section.slides.length} diapositivas</span>
                  </p>
                </div>
              </div>

              {/* Add slide button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedSectionToAdd(selectedSectionToAdd === section.id ? null : section.id)}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-400 hover:text-indigo-300 font-bold px-3 py-1.5 rounded-xl border border-slate-700 text-xs transition-all"
                >
                  <Plus className="w-3.5 h-3.5" /> Agregar Diapositiva
                </button>

                {/* Dropdown Menu for Template Types */}
                {selectedSectionToAdd === section.id && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-slate-950 border border-slate-800 rounded-2xl p-2 shadow-2xl z-30 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase px-2 py-1">Seleccionar Tipo</div>
                    {Object.entries(SLIDE_TYPE_REGISTRY).map(([key, cfg]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          onAddSlide(section.id, key);
                          setSelectedSectionToAdd(null);
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-indigo-600/20 transition-colors flex items-center justify-between"
                      >
                        <span>{cfg.name}</span>
                        {getSlideIcon(key)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Slides List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {section.slides.map((slide, slideIdx) => {
                const typeCfg = SLIDE_TYPE_REGISTRY[slide.type || 'standard'] || SLIDE_TYPE_REGISTRY.standard;
                return (
                  <div 
                    key={slide.id || slideIdx}
                    className="bg-slate-950/60 border border-slate-850 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-between gap-3 transition-all group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md">
                            #{slideIdx + 1}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 flex items-center gap-1">
                            {getSlideIcon(slide.type)}
                            {typeCfg.name.split('/')[0]}
                          </span>
                        </div>

                        {/* Reordering Controls */}
                        <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            disabled={slideIdx === 0}
                            onClick={() => onReorderSlide(section.id, slide.id, 'up')}
                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20"
                            title="Mover arriba"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={slideIdx === section.slides.length - 1}
                            onClick={() => onReorderSlide(section.id, slide.id, 'down')}
                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20"
                            title="Mover abajo"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors">
                        {slide.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {slide.description || (slide.content && slide.content.join(' • ')) || 'Sin descripción'}
                      </p>
                    </div>

                    {/* Footer: Image Preview pill & Edit/Delete buttons */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-xs">
                      <div className="flex items-center gap-2">
                        {slide.imageUrl ? (
                          <div className="w-6 h-6 rounded-md overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                            <img src={slide.imageUrl} alt="" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">Sin imagen</span>
                        )}
                        {slide.options && slide.options.length > 0 && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                            {slide.options.length} opciones
                          </span>
                        )}
                        {slide.hideAiAssistant && (
                          <span className="text-[10px] text-rose-400 bg-rose-950/40 px-1.5 py-0.5 rounded">
                            IA Oculta
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => onEditSlide(section.id, slide)}
                          className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-2.5 py-1 rounded-lg text-xs shadow-md shadow-indigo-600/20 transition-colors"
                        >
                          <Edit3 className="w-3 h-3" /> Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`¿Eliminar la diapositiva "${slide.title}"?`)) {
                              onDeleteSlide(section.id, slide.id);
                            }
                          }}
                          className="p-1 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                          title="Eliminar diapositiva"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {section.slides.length === 0 && (
                <div className="col-span-2 p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-500 text-xs">
                  Esta sección no tiene diapositivas actualmente. Haz clic en "Agregar Diapositiva" para comenzar.
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
