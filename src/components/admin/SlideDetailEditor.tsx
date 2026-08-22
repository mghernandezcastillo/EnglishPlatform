import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, Save, Sparkles, Image as ImageIcon, CheckCircle, Trash2, 
  Plus, Play, Volume2, ShieldAlert, Sliders, Layers, HelpCircle, 
  Sparkle, Palette, FileText, Eye, Check, RefreshCcw
} from 'lucide-react';
import { ClassSlide } from '../../types';
import { SLIDE_TYPE_REGISTRY, BG_GRADIENT_PRESETS } from '../../config/slideTypeRegistry';
import { GeminiImageService, STYLE_PRESETS } from '../../lib/geminiImageService';

interface SlideDetailEditorProps {
  slide: ClassSlide;
  track: string;
  onSave: (updatedSlide: ClassSlide) => void;
  onClose: () => void;
}

export function SlideDetailEditor({ slide, track, onSave, onClose }: SlideDetailEditorProps) {
  const [editedSlide, setEditedSlide] = useState<ClassSlide>({ ...slide });
  const [activeTab, setActiveTab] = useState<'general' | 'content' | 'quiz' | 'dynamic' | 'controls' | 'ai-image'>('general');
  const [selectedStyle, setSelectedStyle] = useState('photoreal-pro');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedPromptPreview, setGeneratedPromptPreview] = useState('');
  const [saveSuccessToast, setSaveSuccessToast] = useState(false);

  const typeConfig = SLIDE_TYPE_REGISTRY[editedSlide.type || 'standard'] || SLIDE_TYPE_REGISTRY.standard;

  // Real-time prompt preview
  const [generationStepText, setGenerationStepText] = useState('');
  const [pendingImagePreview, setPendingImagePreview] = useState<{ url: string; prompt: string } | null>(null);
  const [isCommittingImage, setIsCommittingImage] = useState(false);

  const handleSave = () => {
    onSave(editedSlide);
    setSaveSuccessToast(true);
    setTimeout(() => setSaveSuccessToast(false), 2000);
  };

  const handleGenerateAiImage = async () => {
    setIsGeneratingImage(true);
    setGenerationStepText('🧠 Analizando contexto con Gemini AI...');
    try {
      const res = await GeminiImageService.generateSlideImage(
        editedSlide, 
        track, 
        selectedStyle,
        (step) => setGenerationStepText(step)
      );
      setPendingImagePreview({ url: res.imageUrl, prompt: res.promptUsed });
    } catch (err) {
      console.error('Error generating image:', err);
    } finally {
      setIsGeneratingImage(false);
      setGenerationStepText('');
    }
  };

  const handleAcceptImage = async () => {
    if (!pendingImagePreview) return;
    setIsCommittingImage(true);
    try {
      const permUrl = await GeminiImageService.commitSlideImage(
        pendingImagePreview.url,
        editedSlide.id,
        track
      );
      setEditedSlide(prev => ({ ...prev, imageUrl: permUrl }));
      setPendingImagePreview(null);
    } catch (e) {
      console.error('Error committing image:', e);
    } finally {
      setIsCommittingImage(false);
    }
  };

  const handleDiscardImage = () => {
    setPendingImagePreview(null);
  };

  // Content line handlers
  const handleContentChange = (idx: number, val: string) => {
    const updated = [...(editedSlide.content || [])];
    updated[idx] = val;
    setEditedSlide({ ...editedSlide, content: updated });
  };

  const handleAddContentLine = () => {
    setEditedSlide({ ...editedSlide, content: [...(editedSlide.content || []), ''] });
  };

  const handleRemoveContentLine = (idx: number) => {
    const updated = (editedSlide.content || []).filter((_, i) => i !== idx);
    setEditedSlide({ ...editedSlide, content: updated });
  };

  // Quiz options handlers
  const handleOptionChange = (idx: number, val: string) => {
    const updated = [...(editedSlide.options || [])];
    updated[idx] = val;
    setEditedSlide({ ...editedSlide, options: updated });
  };

  const handleAddOption = () => {
    setEditedSlide({ ...editedSlide, options: [...(editedSlide.options || []), `Opción ${(editedSlide.options?.length || 0) + 1}`] });
  };

  const handleRemoveOption = (idx: number) => {
    const updated = (editedSlide.options || []).filter((_, i) => i !== idx);
    let newCorrect = editedSlide.correctOptionIndex || 0;
    if (newCorrect >= updated.length) newCorrect = Math.max(0, updated.length - 1);
    setEditedSlide({ ...editedSlide, options: updated, correctOptionIndex: newCorrect });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-slate-750 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
      >
        {/* Modal Top Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white leading-tight">Editor Granular de Diapositiva</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                  {editedSlide.id}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {typeConfig.name} • Audiencia: <span className="text-indigo-400 capitalize font-medium">{track}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saveSuccessToast && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800 px-3 py-1.5 rounded-xl animate-pulse">
                <Check className="w-3.5 h-3.5" /> Guardado
              </span>
            )}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/20 text-sm transition-all"
            >
              <Save className="w-4 h-4" /> Guardar Cambios
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 gap-2 overflow-x-auto">
          {[
            { id: 'general', label: '1. General y Fondo', icon: Palette },
            { id: 'content', label: '2. Contenido y Textos', icon: FileText },
            { id: 'quiz', label: '3. Quizzes & Opciones', icon: HelpCircle },
            { id: 'dynamic', label: '4. Dinámica Especial', icon: Sparkle },
            { id: 'controls', label: '5. Botones y Asistente IA', icon: Sliders },
            { id: 'ai-image', label: '6. Imagen con Gemini AI', icon: Sparkles }
          ].map(t => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  active 
                    ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: GENERAL */}
          {activeTab === 'general' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Título de la Diapositiva (Bilingüe / Claro)
                </label>
                <input
                  type="text"
                  value={editedSlide.title || ''}
                  onChange={e => setEditedSlide({ ...editedSlide, title: e.target.value })}
                  placeholder="Ej: Introduction and Verb To Be / Introducción y Verbo To Be"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Descripción Pedagógica / Contexto Detallado
                </label>
                <textarea
                  rows={2}
                  value={editedSlide.description || ''}
                  onChange={e => setEditedSlide({ ...editedSlide, description: e.target.value })}
                  placeholder="Explica qué objetivo pedagógico cumple esta diapositiva y qué deben aprender los alumnos..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 text-sm"
                />
                <p className="text-xs text-slate-500 mt-1">
                  💡 Este texto le da contexto a la IA para generar imágenes coherentes y orientar al docente durante la sesión.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Tipo de Dinámica / Plantilla
                  </label>
                  <select
                    value={editedSlide.type || 'standard'}
                    onChange={e => {
                      const newType = e.target.value;
                      const cfg = SLIDE_TYPE_REGISTRY[newType];
                      setEditedSlide({
                        ...editedSlide,
                        type: newType as any,
                        bgColor: cfg?.defaultBgColor || editedSlide.bgColor
                      });
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-sm"
                  >
                    {Object.entries(SLIDE_TYPE_REGISTRY).map(([k, v]) => (
                      <option key={k} value={k}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Gradiente de Fondo (Tailwind Classes)
                  </label>
                  <input
                    type="text"
                    value={editedSlide.bgColor || ''}
                    onChange={e => setEditedSlide({ ...editedSlide, bgColor: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-sm font-mono text-xs"
                  />
                </div>
              </div>

              {/* Gradient Presets */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Paleta de Gradientes Rápidos
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {BG_GRADIENT_PRESETS.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setEditedSlide({ ...editedSlide, bgColor: p.value })}
                      className={`h-12 rounded-xl p-2 text-left text-[11px] font-bold text-white flex flex-col justify-end shadow-sm transition-transform hover:scale-105 ${p.value} ${
                        editedSlide.bgColor === p.value ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' : ''
                      }`}
                    >
                      <span className="truncate drop-shadow">{p.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTENIDO */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Líneas de Contenido / Frases / Oraciones</h3>
                  <p className="text-xs text-slate-400">Párrafos, oraciones o ejemplos visibles en la presentación.</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddContentLine}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-indigo-400 font-bold px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Agregar Línea
                </button>
              </div>

              <div className="space-y-2.5">
                {(editedSlide.content || []).map((line, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 text-center text-xs font-mono text-slate-500">{idx + 1}</span>
                    <input
                      type="text"
                      value={line}
                      onChange={e => handleContentChange(idx, e.target.value)}
                      placeholder="Escribe el texto de la diapositiva..."
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveContentLine(idx)}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {(editedSlide.content || []).length === 0 && (
                  <div className="p-6 text-center border border-dashed border-slate-800 rounded-2xl text-slate-500 text-xs">
                    No hay líneas de contenido. Haz clic en "Agregar Línea" arriba para comenzar.
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Notas Internas para el Profesor / Pronunciación (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={editedSlide.notes || ''}
                  onChange={e => setEditedSlide({ ...editedSlide, notes: e.target.value })}
                  placeholder="Instrucciones privadas para el docente al impartir esta diapositiva..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
          )}

          {/* TAB 3: QUIZ & OPCIONES */}
          {activeTab === 'quiz' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Opciones de Selección Múltiple</h3>
                  <p className="text-xs text-slate-400">Marca la opción correcta con el botón de verificación.</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-indigo-400 font-bold px-3 py-1.5 rounded-lg border border-slate-700"
                >
                  <Plus className="w-3.5 h-3.5" /> Agregar Opción
                </button>
              </div>

              <div className="space-y-2.5">
                {(editedSlide.options || []).map((opt, idx) => {
                  const isCorrect = editedSlide.correctOptionIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border transition-colors ${
                        isCorrect ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setEditedSlide({ ...editedSlide, correctOptionIndex: idx })}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-all ${
                          isCorrect 
                            ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                            : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                        }`}
                        title="Marcar como respuesta correcta"
                      >
                        {isCorrect ? <Check className="w-4 h-4" /> : String.fromCharCode(65 + idx)}
                      </button>
                      <input
                        type="text"
                        value={opt}
                        onChange={e => handleOptionChange(idx, e.target.value)}
                        placeholder={`Texto de la opción ${String.fromCharCode(65 + idx)}...`}
                        className="flex-1 bg-transparent border-none text-white focus:outline-none text-sm font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(idx)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {(editedSlide.options || []).length === 0 && (
                <div className="p-6 text-center border border-dashed border-slate-800 rounded-2xl text-slate-500 text-xs">
                  Esta diapositiva actualmente no tiene opciones de quiz. Si deseas convertirla en pregunta, haz clic en "Agregar Opción".
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DINÁMICAS ESPECIALES */}
          {activeTab === 'dynamic' && (
            <div className="space-y-6">
              {/* ROLEPLAY EDITOR */}
              {editedSlide.type === 'roleplay' || editedSlide.type === 'lets-say' ? (
                <div className="space-y-4 bg-slate-950/40 p-5 rounded-2xl border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                    <Sparkle className="w-4 h-4" /> Configuración de Roleplay / Guided Conversation
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Escenario / Contexto</label>
                      <input
                        type="text"
                        value={editedSlide.roleplay?.scenario || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: { ...(editedSlide.roleplay || { situation: '', roles: { a: { label: '', goal: '' }, b: { label: '', goal: '' } }, mission: [], usefulPhrases: [], successChecklist: [] }), scenario: e.target.value }
                        })}
                        placeholder="Ej: En una cafetería en Londres..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Situación Inicial</label>
                      <input
                        type="text"
                        value={editedSlide.roleplay?.situation || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: { ...(editedSlide.roleplay || { scenario: '', roles: { a: { label: '', goal: '' }, b: { label: '', goal: '' } }, mission: [], usefulPhrases: [], successChecklist: [] }), situation: e.target.value }
                        })}
                        placeholder="Ej: Estás ordenando el desayuno..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                      <span className="text-xs font-bold text-indigo-400 block mb-1">Rol A (Profesor / Guía)</span>
                      <input
                        type="text"
                        value={editedSlide.roleplay?.roles?.a?.label || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: {
                            ...(editedSlide.roleplay as any),
                            roles: { ...(editedSlide.roleplay?.roles as any), a: { ...(editedSlide.roleplay?.roles?.a as any), label: e.target.value } }
                          }
                        })}
                        placeholder="Etiqueta (ej. Barista)"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white mb-2"
                      />
                      <input
                        type="text"
                        value={editedSlide.roleplay?.roles?.a?.goal || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: {
                            ...(editedSlide.roleplay as any),
                            roles: { ...(editedSlide.roleplay?.roles as any), a: { ...(editedSlide.roleplay?.roles?.a as any), goal: e.target.value } }
                          }
                        })}
                        placeholder="Objetivo de A..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                      <span className="text-xs font-bold text-indigo-400 block mb-1">Rol B (Estudiante)</span>
                      <input
                        type="text"
                        value={editedSlide.roleplay?.roles?.b?.label || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: {
                            ...(editedSlide.roleplay as any),
                            roles: { ...(editedSlide.roleplay?.roles as any), b: { ...(editedSlide.roleplay?.roles?.b as any), label: e.target.value } }
                          }
                        })}
                        placeholder="Etiqueta (ej. Cliente)"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white mb-2"
                      />
                      <input
                        type="text"
                        value={editedSlide.roleplay?.roles?.b?.goal || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          roleplay: {
                            ...(editedSlide.roleplay as any),
                            roles: { ...(editedSlide.roleplay?.roles as any), b: { ...(editedSlide.roleplay?.roles?.b as any), goal: e.target.value } }
                          }
                        })}
                        placeholder="Objetivo de B..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* BOSS BATTLE EDITOR */}
              {editedSlide.type === 'speaking-boss-battle' ? (
                <div className="space-y-4 bg-slate-950/40 p-5 rounded-2xl border border-purple-500/30">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" /> Configuración de Speaking Boss Battle
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Nombre del Boss</label>
                      <input
                        type="text"
                        value={editedSlide.speakingBossBattle?.bossName || ''}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          speakingBossBattle: { ...(editedSlide.speakingBossBattle || { rounds: { remember: [], use: [], speak: [] } }), bossName: e.target.value }
                        })}
                        placeholder="Ej. Titan of Fluency"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Avatar / Emoji</label>
                      <input
                        type="text"
                        value={editedSlide.speakingBossBattle?.bossAvatar || '👾'}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          speakingBossBattle: { ...(editedSlide.speakingBossBattle || { bossName: '', rounds: { remember: [], use: [], speak: [] } }), bossAvatar: e.target.value }
                        })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Temporizador (seg)</label>
                      <input
                        type="number"
                        value={editedSlide.speakingBossBattle?.timerSeconds || 45}
                        onChange={e => setEditedSlide({
                          ...editedSlide,
                          speakingBossBattle: { ...(editedSlide.speakingBossBattle || { bossName: '', rounds: { remember: [], use: [], speak: [] } }), timerSeconds: Number(e.target.value) }
                        })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* VIDEO URL EDITOR */}
              {editedSlide.type === 'video' ? (
                <div className="space-y-3 bg-slate-950/40 p-5 rounded-2xl border border-slate-700">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    URL de YouTube Embed
                  </label>
                  <input
                    type="text"
                    value={editedSlide.videoUrl || ''}
                    onChange={e => setEditedSlide({ ...editedSlide, videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/embed/..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm font-mono"
                  />
                </div>
              ) : null}

              {!editedSlide.type?.includes('roleplay') && editedSlide.type !== 'speaking-boss-battle' && editedSlide.type !== 'video' && (
                <div className="p-6 text-center border border-dashed border-slate-800 rounded-2xl text-slate-500 text-xs">
                  Esta diapositiva usa el esquema de visualización estándar. Para configuraciones avanzadas de juego, cambia el tipo en la pestaña "General".
                </div>
              )}
            </div>
          )}

          {/* TAB 5: BOTONES Y ASISTENTE IA */}
          {activeTab === 'controls' && (
            <div className="space-y-5">
              <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Asistente IA de Voz / Speaking</h4>
                    <p className="text-xs text-slate-400">Permite ocultar o mostrar el botón flotante de IA durante esta diapositiva.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditedSlide({ ...editedSlide, hideAiAssistant: !editedSlide.hideAiAssistant })}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      editedSlide.hideAiAssistant 
                        ? 'bg-rose-950/40 border-rose-800 text-rose-400' 
                        : 'bg-emerald-950/40 border-emerald-800 text-emerald-400'
                    }`}
                  >
                    {editedSlide.hideAiAssistant ? '🚫 Oculto en esta slide' : '✅ Visible para el alumno'}
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-2xl space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-white">Texto Personalizado del Botón de Acción</h4>
                  <p className="text-xs text-slate-400">Personaliza lo que dice el botón principal (por defecto "Siguiente" o "Comenzar").</p>
                </div>
                <input
                  type="text"
                  value={editedSlide.customButtonText || ''}
                  onChange={e => setEditedSlide({ ...editedSlide, customButtonText: e.target.value })}
                  placeholder="Ej: Continuar Misión, Comenzar Batalla, Girar Ruleta..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* TAB 6: IMAGEN CON GEMINI AI */}
          {activeTab === 'ai-image' && (
            <div className="space-y-6">
              {/* Style Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Estilo Visual Deseado
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                  {STYLE_PRESETS.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStyle(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedStyle === s.id 
                          ? 'bg-indigo-950/50 border-indigo-500 text-white shadow-md' 
                          : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold block mb-1">{s.exampleBadge}</span>
                      <span className="text-[11px] text-slate-400 leading-tight block">{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Preview */}
              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Prompt Contextual Automático
                  </span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    Generado de Título + Descripción + Opciones
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-300 bg-slate-900/90 p-3 rounded-xl border border-slate-800 leading-relaxed">
                  {generatedPromptPreview}
                </p>
              </div>

              {/* Generation Actions & Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3">
                  <button
                    type="button"
                    disabled={isGeneratingImage}
                    onClick={handleGenerateAiImage}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-2xl shadow-xl shadow-indigo-600/30 text-sm transition-all disabled:opacity-50"
                  >
                    {isGeneratingImage ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Generando con Gemini AI...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Generar Imagen con Gemini AI</span>
                      </>
                    )}
                  </button>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">O escribe/pega una URL directa:</label>
                    <input
                      type="text"
                      value={editedSlide.imageUrl || ''}
                      onChange={e => setEditedSlide({ ...editedSlide, imageUrl: e.target.value })}
                      placeholder="https://... o /images/..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Preview Thumbnail with Fixed 4:5 Aspect Ratio */}
                <div className="w-full max-w-[280px] mx-auto aspect-[4/5] rounded-2xl border-2 border-slate-700 bg-slate-950 overflow-hidden relative flex items-center justify-center shadow-xl">
                  {(pendingImagePreview?.url || editedSlide.imageUrl) ? (
                    <img
                      src={pendingImagePreview?.url || editedSlide.imageUrl}
                      alt={editedSlide.title}
                      className={`w-full h-full object-cover transition-all duration-300 ${isGeneratingImage ? 'opacity-30 blur-sm scale-105' : 'opacity-100'}`}
                    />
                  ) : (
                    <div className="flex flex-col items-center text-slate-600 gap-2">
                      <ImageIcon className="w-8 h-8" />
                      <span className="text-xs">Sin imagen asignada</span>
                    </div>
                  )}

                  {/* Generating AI Animation Overlay */}
                  {isGeneratingImage && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md text-white text-center animate-fade-in">
                      <div className="relative mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin blur-md opacity-80" />
                        <div className="absolute inset-0.5 rounded-full bg-slate-950 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-pink-400 animate-bounce" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-300 animate-pulse">
                        {generationStepText || 'Generando con Gemini AI...'}
                      </span>
                    </div>
                  )}

                  {/* Pending Image Approval Controls */}
                  {pendingImagePreview && !isGeneratingImage && (
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 bg-gradient-to-t from-black/90 via-transparent to-black/80 animate-fade-in">
                      <div className="flex items-center justify-center">
                        <span className="bg-purple-600 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-lg border border-purple-400/30 flex items-center gap-1 backdrop-blur-md">
                          <Sparkles className="w-3 h-3 text-pink-300" /> Vista Previa
                        </span>
                      </div>

                      <div className="space-y-1.5 bg-slate-950/90 p-2.5 rounded-xl border border-white/10 backdrop-blur-md">
                        <button
                          type="button"
                          onClick={handleAcceptImage}
                          disabled={isCommittingImage}
                          className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 px-3 rounded-lg text-xs shadow-lg transition-all disabled:opacity-50"
                        >
                          {isCommittingImage ? (
                            <>
                              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Guardando...</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Aplicar Imagen</span>
                            </>
                          )}
                        </button>

                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={handleGenerateAiImage}
                            disabled={isCommittingImage}
                            className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-1 px-2 rounded-lg text-[10px] border border-slate-700 transition-all"
                          >
                            <RefreshCcw className="w-3 h-3 text-indigo-400" />
                            <span>Probar Otra</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleDiscardImage}
                            disabled={isCommittingImage}
                            className="flex items-center justify-center gap-1 bg-rose-950/80 hover:bg-rose-900 text-rose-300 font-bold py-1 px-2 rounded-lg text-[10px] border border-rose-800/50 transition-all"
                          >
                            <X className="w-3 h-3" />
                            <span>Descartar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
