import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, Sparkles, Play, Download, RefreshCcw, 
  ChevronRight, BookOpen, Clock, Target, CheckCircle, 
  Users, Sliders, ArrowLeft, Eye, Copy, Check
} from 'lucide-react';
import { CurriculumLevel, CurriculumClass, ClassSlide } from '../../types';
import { AdminCurriculumService, AudienceTrack } from '../../lib/adminCurriculumService';
import { ClassSectionOrganizer } from './ClassSectionOrganizer';
import { SlideDetailEditor } from './SlideDetailEditor';
import { BatchImageStudioModal } from './BatchImageStudioModal';
import { PresentationViewer } from '../PresentationViewer';

interface AdminSlideManagerProps {
  onBack?: () => void;
}

export function AdminSlideManager({ onBack }: AdminSlideManagerProps) {
  const [selectedTrack, setSelectedTrack] = useState<AudienceTrack>('adulto');
  const [levels, setLevels] = useState<CurriculumLevel[]>([]);
  const [selectedLevelId, setSelectedLevelId] = useState<string>('');
  const [selectedClassId, setSelectedClassId] = useState<string>('');

  // Modals state
  const [editingSlideContext, setEditingSlideContext] = useState<{ sectionId: string; slide: ClassSlide } | null>(null);
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedExport, setCopiedExport] = useState(false);

  // Toast feedback
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Load levels on track change
  useEffect(() => {
    const lvls = AdminCurriculumService.getCurriculum(selectedTrack);
    setLevels(lvls);
    if (lvls.length > 0) {
      setSelectedLevelId(lvls[0].id);
      if (lvls[0].classes.length > 0) {
        setSelectedClassId(lvls[0].classes[0].id);
      }
    }
  }, [selectedTrack]);

  // Active level and class
  const activeLevel = levels.find(l => l.id === selectedLevelId) || levels[0];
  const activeClass = activeLevel?.classes.find(c => c.id === selectedClassId) || activeLevel?.classes[0];

  // Refresh current data from service
  const reloadData = () => {
    const lvls = AdminCurriculumService.getCurriculum(selectedTrack);
    setLevels(lvls);
  };

  // Handlers for slide edits
  const handleSaveSlide = (updatedSlide: ClassSlide) => {
    if (!editingSlideContext || !activeClass) return;
    AdminCurriculumService.updateSlide(
      selectedTrack,
      activeClass.id,
      editingSlideContext.sectionId,
      updatedSlide
    );
    reloadData();
    setEditingSlideContext(null);
    showToast('Diapositiva actualizada correctamente');
  };

  const handleDeleteSlide = (sectionId: string, slideId: string) => {
    if (!activeClass) return;
    AdminCurriculumService.deleteSlide(selectedTrack, activeClass.id, sectionId, slideId);
    reloadData();
    showToast('Diapositiva eliminada');
  };

  const handleAddSlide = (sectionId: string, slideType: string) => {
    if (!activeClass) return;
    const res = AdminCurriculumService.addSlide(selectedTrack, activeClass.id, sectionId, slideType);
    if (res) {
      reloadData();
      setEditingSlideContext({ sectionId, slide: res.newSlide });
      showToast('Nueva diapositiva añadida');
    }
  };

  const handleReorderSlide = (sectionId: string, slideId: string, direction: 'up' | 'down') => {
    if (!activeClass) return;
    AdminCurriculumService.reorderSlide(selectedTrack, activeClass.id, sectionId, slideId, direction);
    reloadData();
  };

  const handleApplyBatchImages = (updatedClass: CurriculumClass) => {
    AdminCurriculumService.saveClass(selectedTrack, updatedClass);
    reloadData();
    showToast('Imágenes masivas aplicadas a la clase');
  };

  const handleResetTrack = () => {
    if (window.confirm('¿Seguro que deseas restablecer todos los cambios de este track a los valores iniciales de fábrica?')) {
      AdminCurriculumService.resetTrack(selectedTrack);
      reloadData();
      showToast('Track restablecido a valores por defecto');
    }
  };

  const handleCopyJson = () => {
    const json = AdminCurriculumService.exportTrackJson(selectedTrack);
    navigator.clipboard.writeText(json);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-20">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-bold animate-bounce">
          <CheckCircle className="w-4 h-4" /> {toast}
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="border-b border-slate-850 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Volver al panel"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                Curriculum CMS <span className="text-xs bg-indigo-950 text-indigo-400 border border-indigo-800 px-2 py-0.5 rounded-full font-mono">Admin Studio</span>
              </h1>
              <p className="text-xs text-slate-400">Edición granular de diapositivas, dinámicas y generador IA</p>
            </div>
          </div>

          {/* Track Selector Tabs */}
          <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 self-center sm:self-auto">
            {[
              { id: 'adulto', label: 'Adultos (18+)' },
              { id: 'niño', label: 'Niños (6-12)' },
              { id: 'adolescente', label: 'Adolescentes (13-17)' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTrack(t.id as AudienceTrack)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedTrack === t.id 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Levels & Classes Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" /> Niveles ({levels.length})
              </h2>
              <button
                onClick={handleResetTrack}
                className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                title="Restablecer a valores iniciales"
              >
                <RefreshCcw className="w-3 h-3" /> Resetear
              </button>
            </div>

            {/* Level Picker */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {levels.map((lvl, idx) => {
                const isSelected = lvl.id === selectedLevelId;
                return (
                  <button
                    key={lvl.id || idx}
                    type="button"
                    onClick={() => {
                      setSelectedLevelId(lvl.id);
                      if (lvl.classes.length > 0) {
                        setSelectedClassId(lvl.classes[0].id);
                      }
                    }}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-md' 
                        : 'bg-slate-950/60 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block">{lvl.title}</span>
                      <span className="text-[10px] text-slate-400">{lvl.classes.length} clases • {lvl.mcfrEquivalent}</span>
                    </div>
                    {isSelected && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                  </button>
                );
              })}
            </div>

            {/* Classes Picker for Active Level */}
            {activeLevel && (
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Clases de {activeLevel.title.split('/')[0]}
                </h3>
                <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                  {activeLevel.classes.map((cls, idx) => {
                    const isSelected = cls.id === selectedClassId;
                    const totalSlides = cls.sections.reduce((acc, s) => acc + s.slides.length, 0);
                    return (
                      <button
                        key={cls.id || idx}
                        type="button"
                        onClick={() => setSelectedClassId(cls.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          isSelected 
                            ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/25 border-indigo-500' 
                            : 'bg-slate-950/40 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="text-xs font-bold leading-tight">{cls.title}</div>
                        <div className="text-[10px] opacity-80 mt-1 flex items-center justify-between">
                          <span>{cls.sections.length} secciones</span>
                          <span>{totalSlides} slides</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Quick Export Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Exportación & Backup</h4>
            <p className="text-xs text-slate-400">Exporta la estructura completa con todos tus cambios para sincronizar.</p>
            <button
              onClick={() => setShowExportModal(true)}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 px-4 rounded-xl border border-slate-700 text-xs transition-colors"
            >
              <Download className="w-4 h-4" /> Ver / Exportar JSON
            </button>
          </div>
        </div>

        {/* Right Area: Selected Class Editor & 5 Sections */}
        <div className="lg:col-span-8 space-y-6">
          {activeClass ? (
            <>
              {/* Class Action Bar */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono bg-indigo-950 border border-indigo-800/60 text-indigo-400 px-2.5 py-0.5 rounded-full font-bold">
                      {activeClass.id}
                    </span>
                    <span className="text-xs text-slate-400">{activeClass.duration || '60 minutos'}</span>
                  </div>
                  <h2 className="text-2xl font-black text-white leading-tight">{activeClass.title}</h2>
                  <p className="text-xs text-slate-400 mt-1">{activeClass.description}</p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                  <button
                    onClick={() => setShowLivePreview(true)}
                    className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-lg shadow-emerald-600/20 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" /> Vista Previa
                  </button>

                  <button
                    onClick={() => setShowBatchModal(true)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-lg shadow-pink-600/20 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Imágenes IA Masivas
                  </button>
                </div>
              </div>

              {/* 5-Section Class Organizer */}
              <ClassSectionOrganizer
                cls={activeClass}
                track={selectedTrack}
                onEditSlide={(sectionId, slide) => setEditingSlideContext({ sectionId, slide })}
                onDeleteSlide={handleDeleteSlide}
                onAddSlide={handleAddSlide}
                onReorderSlide={handleReorderSlide}
              />
            </>
          ) : (
            <div className="p-12 text-center border border-dashed border-slate-800 rounded-3xl text-slate-500">
              Selecciona un nivel y una clase en la barra lateral para comenzar a editar.
            </div>
          )}
        </div>
      </main>

      {/* Slide Detail Modal Editor */}
      {editingSlideContext && (
        <SlideDetailEditor
          slide={editingSlideContext.slide}
          track={selectedTrack}
          onSave={handleSaveSlide}
          onClose={() => setEditingSlideContext(null)}
        />
      )}

      {/* Batch Image Studio Modal */}
      {showBatchModal && activeClass && (
        <BatchImageStudioModal
          cls={activeClass}
          track={selectedTrack}
          onApplyBatchImages={handleApplyBatchImages}
          onClose={() => setShowBatchModal(false)}
        />
      )}

      {/* Live Presentation Preview Modal */}
      {showLivePreview && activeClass && (
        <PresentationViewer
          cls={activeClass}
          onClose={() => setShowLivePreview(false)}
        />
      )}

      {/* Export JSON Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-750 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
          >
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-indigo-400" /> Exportar Curriculum ({selectedTrack})
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-96">
                {AdminCurriculumService.exportTrackJson(selectedTrack)}
              </pre>
            </div>
            <div className="p-5 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              <span className="text-xs text-slate-400">Usa este JSON para sincronizar tu base de datos o repositorio.</span>
              <button
                onClick={handleCopyJson}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors"
              >
                {copiedExport ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedExport ? '¡Copiado!' : 'Copiar al Portapapeles'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
