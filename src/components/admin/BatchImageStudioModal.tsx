import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, CheckCircle2, Play, Layers, RefreshCw, AlertCircle, ArrowRight } from 'lucide-react';
import { CurriculumClass, ClassSlide } from '../../types';
import { GeminiImageService, STYLE_PRESETS } from '../../lib/geminiImageService';
import { SLIDE_TYPE_REGISTRY } from '../../config/slideTypeRegistry';

interface BatchImageStudioModalProps {
  cls: CurriculumClass;
  track: string;
  onApplyBatchImages: (updatedClass: CurriculumClass) => void;
  onClose: () => void;
}

export function BatchImageStudioModal({
  cls,
  track,
  onApplyBatchImages,
  onClose
}: BatchImageStudioModalProps) {
  const [selectedStyle, setSelectedStyle] = useState('photoreal-pro');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0, currentTitle: '' });
  const [generatedMap, setGeneratedMap] = useState<Map<string, string>>(new Map());
  const [isCompleted, setIsCompleted] = useState(false);

  // Extract all visual slides
  const allVisualSlides: { sectionId: string; slide: ClassSlide }[] = [];
  cls.sections.forEach(sec => {
    sec.slides.forEach(sl => {
      const typeCfg = SLIDE_TYPE_REGISTRY[sl.type || 'standard'];
      if (typeCfg?.supportsImage !== false && sl.type !== 'spinning-wheel' && sl.type !== 'emoji-game') {
        allVisualSlides.push({ sectionId: sec.id, slide: sl });
      }
    });
  });

  const handleStartBatchGeneration = async () => {
    setIsRunning(true);
    setIsCompleted(false);
    setGeneratedMap(new Map());

    const flatSlides = allVisualSlides.map(item => item.slide);
    const results = await GeminiImageService.generateBatchForClass(
      flatSlides,
      track,
      selectedStyle,
      (current, total, title) => {
        setProgress({ current, total, currentTitle: title });
      }
    );

    setGeneratedMap(results);
    setIsRunning(false);
    setIsCompleted(true);
  };

  const handleApplyAllChanges = () => {
    const clonedClass: CurriculumClass = JSON.parse(JSON.stringify(cls));
    clonedClass.sections.forEach(sec => {
      sec.slides.forEach(sl => {
        if (generatedMap.has(sl.id)) {
          sl.imageUrl = generatedMap.get(sl.id);
        }
      });
    });

    onApplyBatchImages(clonedClass);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-slate-750 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Estudio Masivo de Imágenes IA</h2>
              <p className="text-xs text-slate-400">
                {cls.title} • {allVisualSlides.length} diapositivas visuales detectadas
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Style Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              1. Selecciona el Estilo Visual Coherente
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STYLE_PRESETS.map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedStyle(s.id)}
                  disabled={isRunning}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedStyle === s.id 
                      ? 'bg-pink-950/40 border-pink-500 text-white shadow-lg shadow-pink-500/10' 
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">{s.exampleBadge}</span>
                    <span className="text-[10px] text-slate-500 uppercase">{s.targetAudience}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 block">{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Progress / Status Bar */}
          {isRunning && (
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-pink-400 font-bold flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generando imagen {progress.current} de {progress.total}...
                </span>
                <span className="font-mono text-slate-400">
                  {Math.round((progress.current / progress.total) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 truncate">
                Diapositiva actual: <span className="text-white font-medium">{progress.currentTitle}</span>
              </p>
            </div>
          )}

          {/* Completion summary */}
          {isCompleted && (
            <div className="p-4 bg-emerald-950/40 border border-emerald-800/50 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">¡Generación Masiva Completada!</h4>
                  <p className="text-xs text-emerald-300">
                    Se generaron con éxito {generatedMap.size} imágenes listas para aplicar.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slides Preview Grid */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              2. Diapositivas a Procesar
            </label>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {allVisualSlides.map((item, idx) => {
                const isGenerated = generatedMap.has(item.slide.id);
                return (
                  <div 
                    key={item.slide.id || idx}
                    className="p-2.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="font-mono text-slate-500 shrink-0">#{idx + 1}</span>
                      <span className="font-bold text-white truncate">{item.slide.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isGenerated ? (
                        <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Nueva Lista
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[11px]">
                          {item.slide.imageUrl ? 'Tiene imagen actual' : 'Sin imagen'}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
          >
            Cancelar
          </button>

          <div className="flex items-center gap-3">
            {!isCompleted ? (
              <button
                type="button"
                disabled={isRunning || allVisualSlides.length === 0}
                onClick={handleStartBatchGeneration}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-pink-600/20 text-xs transition-all disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" /> Comenzar Generación Masiva
              </button>
            ) : (
              <button
                type="button"
                onClick={handleApplyAllChanges}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 text-xs transition-all"
              >
                <CheckCircle2 className="w-4 h-4" /> Aplicar y Reemplazar Imágenes
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
