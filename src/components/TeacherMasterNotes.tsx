import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PenTool,
  X,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  RotateCcw,
  Copy,
  Check,
  Share2,
  Trash2,
  Type,
  LayoutGrid,
  Columns,
  Square,
  Sparkles,
  Edit2,
  Sliders,
  Moon,
  Sun,
  Eye,
  ArrowDownToLine,
  GripHorizontal
} from 'lucide-react';
import { RichTextEditor } from './RichTextEditor';

export interface NoteTab {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

const DEFAULT_NOTES: NoteTab[] = [
  { id: '1', title: 'Nota 1', content: '', icon: '📝' }
];

interface WindowBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TeacherMasterNotesProps {
  isOpen: boolean;
  onClose: () => void;
  studentId?: string | null;
  studentName?: string;
}

export function TeacherMasterNotes({
  isOpen,
  onClose,
  studentId,
  studentName,
}: TeacherMasterNotesProps) {
  // --- Persistent Notes State ---
  const [notes, setNotes] = useState<NoteTab[]>(() => {
    try {
      const saved = localStorage.getItem('english_easy_notes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_NOTES;
    } catch {
      return DEFAULT_NOTES;
    }
  });

  const [activeTabId, setActiveTabId] = useState<string>(() => notes[0]?.id || '1');
  const [editingTabId, setEditingTabId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');

  // --- Display / Typography Settings ---
  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('teacher_notes_fontsize');
      return saved ? parseInt(saved, 10) : 18;
    } catch {
      return 18;
    }
  });

  const [lineSpacing, setLineSpacing] = useState<'compact' | 'normal' | 'relaxed'>(() => {
    try {
      const saved = localStorage.getItem('teacher_notes_linespacing');
      return (saved as any) || 'normal';
    } catch {
      return 'normal';
    }
  });

  const [theme, setTheme] = useState<'light' | 'dark' | 'amber'>(() => {
    try {
      const saved = localStorage.getItem('teacher_notes_theme');
      return (saved as any) || 'light';
    } catch {
      return 'light';
    }
  });

  const [fontFamily, setFontFamily] = useState<'sans' | 'mono' | 'handwriting'>('sans');
  const [opacity, setOpacity] = useState<number>(100);
  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSettingsBar, setShowSettingsBar] = useState(false);

  // --- Window Positioning & Resizing (Clamped) ---
  const [bounds, setBounds] = useState<WindowBounds>(() => {
    const defaultW = 490;
    const defaultH = 540;
    try {
      const saved = localStorage.getItem('teacher_notes_bounds_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.width && parsed.height) {
          const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
          const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
          return {
            x: Math.min(Math.max(10, parsed.x ?? (vw - defaultW - 30)), Math.max(10, vw - 200)),
            y: Math.min(Math.max(10, parsed.y ?? 70), Math.max(10, vh - 200)),
            width: Math.min(Math.max(320, parsed.width), vw - 20),
            height: Math.min(Math.max(260, parsed.height), vh - 40),
          };
        }
      }
    } catch {}

    const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    return {
      x: Math.max(20, vw - defaultW - 30),
      y: Math.max(60, 70),
      width: defaultW,
      height: defaultH,
    };
  });

  // Keep references for pointer event math
  const windowRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef<{
    type: 'drag' | 'resize';
    direction?: string;
    startX: number;
    startY: number;
    startBounds: WindowBounds;
  } | null>(null);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('english_easy_notes', JSON.stringify(notes));
    } catch {}
  }, [notes]);

  useEffect(() => {
    try {
      localStorage.setItem('teacher_notes_fontsize', fontSize.toString());
    } catch {}
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem('teacher_notes_linespacing', lineSpacing);
    } catch {}
  }, [lineSpacing]);

  useEffect(() => {
    try {
      localStorage.setItem('teacher_notes_theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('teacher_notes_bounds_v2', JSON.stringify(bounds));
    } catch {}
  }, [bounds]);

  // Clamp on viewport resize
  useEffect(() => {
    const handleViewportResize = () => {
      setBounds((prev) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const width = Math.min(prev.width, vw - 20);
        const height = Math.min(prev.height, vh - 40);
        const x = Math.min(Math.max(10, prev.x), Math.max(10, vw - width - 10));
        const y = Math.min(Math.max(10, prev.y), Math.max(10, vh - height - 10));
        return { x, y, width, height };
      });
    };

    window.addEventListener('resize', handleViewportResize);
    return () => window.removeEventListener('resize', handleViewportResize);
  }, []);

  // --- Pointer Drag / Resize Event Handlers ---
  const handlePointerDownDrag = (e: React.PointerEvent) => {
    // Only allow left click & ignore buttons or inputs
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('input') || target.closest('.no-drag')) {
      return;
    }

    e.currentTarget.setPointerCapture(e.pointerId);
    interactionRef.current = {
      type: 'drag',
      startX: e.clientX,
      startY: e.clientY,
      startBounds: { ...bounds },
    };
  };

  const handlePointerDownResize = (e: React.PointerEvent, direction: string) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    interactionRef.current = {
      type: 'resize',
      direction,
      startX: e.clientX,
      startY: e.clientY,
      startBounds: { ...bounds },
    };
  };

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!interactionRef.current) return;
    const { type, direction, startX, startY, startBounds } = interactionRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (type === 'drag') {
      const nextX = Math.min(Math.max(10, startBounds.x + dx), vw - startBounds.width - 10);
      const nextY = Math.min(Math.max(10, startBounds.y + dy), vh - startBounds.height - 10);
      setBounds((b) => ({ ...b, x: nextX, y: nextY }));
    } else if (type === 'resize' && direction) {
      let newX = startBounds.x;
      let newY = startBounds.y;
      let newW = startBounds.width;
      let newH = startBounds.height;

      // Handle horizontal resize
      if (direction.includes('e')) {
        newW = Math.min(Math.max(320, startBounds.width + dx), vw - startBounds.x - 10);
      } else if (direction.includes('w')) {
        const potentialW = startBounds.width - dx;
        if (potentialW >= 320 && startBounds.x + dx >= 10) {
          newW = potentialW;
          newX = startBounds.x + dx;
        }
      }

      // Handle vertical resize
      if (direction.includes('s')) {
        newH = Math.min(Math.max(260, startBounds.height + dy), vh - startBounds.y - 10);
      } else if (direction.includes('n')) {
        const potentialH = startBounds.height - dy;
        if (potentialH >= 260 && startBounds.y + dy >= 10) {
          newH = potentialH;
          newY = startBounds.y + dy;
        }
      }

      setBounds({ x: newX, y: newY, width: newW, height: newH });
    }
  }, []);

  const handlePointerUp = (e: React.PointerEvent) => {
    if (interactionRef.current) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      interactionRef.current = null;
    }
  };

  // --- Docking Presets ---
  const applyPreset = (preset: 'center' | 'dock-right' | 'dock-bottom' | 'fullscreen' | 'compact') => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    switch (preset) {
      case 'center':
        setBounds({
          x: Math.max(20, (vw - 500) / 2),
          y: Math.max(30, (vh - 540) / 2),
          width: Math.min(500, vw - 40),
          height: Math.min(540, vh - 60),
        });
        break;
      case 'dock-right':
        setBounds({
          x: Math.max(10, vw - 500),
          y: 10,
          width: Math.min(490, vw - 20),
          height: vh - 20,
        });
        break;
      case 'dock-bottom':
        setBounds({
          x: 20,
          y: Math.max(20, vh - 320),
          width: vw - 40,
          height: 300,
        });
        break;
      case 'fullscreen':
        setBounds({
          x: 10,
          y: 10,
          width: vw - 20,
          height: vh - 20,
        });
        break;
      case 'compact':
        setBounds({
          x: Math.max(20, vw - 380),
          y: Math.max(20, vh - 440),
          width: 360,
          height: 420,
        });
        break;
    }
    setIsMinimized(false);
  };

  // --- Tab Management ---
  const activeNote = notes.find((n) => n.id === activeTabId) || notes[0] || DEFAULT_NOTES[0];

  const handleContentChange = (content: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === activeTabId ? { ...n, content } : n))
    );
  };

  const addTab = () => {
    const newId = Date.now().toString();
    const newTab: NoteTab = {
      id: newId,
      title: `Nota ${notes.length + 1}`,
      content: '',
      icon: '📝',
    };
    setNotes([...notes, newTab]);
    setActiveTabId(newId);
  };

  const closeTab = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (notes.length <= 1) return;
    const remaining = notes.filter((n) => n.id !== id);
    setNotes(remaining);
    if (activeTabId === id) {
      setActiveTabId(remaining[remaining.length - 1].id);
    }
  };

  const startRenameTab = (tab: NoteTab, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingTabId(tab.id);
    setEditingTitle(tab.title);
  };

  const saveRenameTab = () => {
    if (editingTabId && editingTitle.trim()) {
      setNotes((prev) =>
        prev.map((n) => (n.id === editingTabId ? { ...n, title: editingTitle.trim() } : n))
      );
    }
    setEditingTabId(null);
  };

  // --- Copy & Share Tools ---
  const handleCopyNote = async () => {
    if (!activeNote) return;
    // Strip html tags for plain copy
    const tempEl = document.createElement('div');
    tempEl.innerHTML = activeNote.content;
    const plainText = tempEl.innerText || tempEl.textContent || '';

    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = plainText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareWhatsApp = () => {
    if (!activeNote) return;
    const tempEl = document.createElement('div');
    tempEl.innerHTML = activeNote.content;
    const plainText = tempEl.innerText || tempEl.textContent || '';
    const header = `*📚 Notas de Clase de Inglés ${studentName ? `para ${studentName}` : ''}*\n\n`;
    const message = encodeURIComponent(header + plainText.trim());
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleClearCurrentNote = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar esta nota?')) {
      handleContentChange('');
    }
  };

  if (!isOpen) return null;

  // Render Minimized Floating Pill
  if (isMinimized) {
    return (
      <div
        style={{ left: `${Math.min(bounds.x, window.innerWidth - 240)}px`, top: `${Math.min(bounds.y, window.innerHeight - 60)}px` }}
        className="fixed z-[9999] bg-indigo-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-full shadow-2xl border border-indigo-400/40 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all select-none animate-in fade-in zoom-in-95 duration-150"
        onClick={() => setIsMinimized(false)}
        title="Clic para restaurar cuaderno de notas"
      >
        <span className="flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full text-xs">
          <PenTool className="w-3.5 h-3.5 text-white" />
        </span>
        <span className="text-xs font-bold max-w-[120px] truncate">
          {activeNote.title || 'Notas'}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(false);
          }}
          className="p-1 text-indigo-300 hover:text-white rounded-full hover:bg-white/10"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      ref={windowRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        position: 'fixed',
        left: `${bounds.x}px`,
        top: `${bounds.y}px`,
        width: `${bounds.width}px`,
        height: `${bounds.height}px`,
        opacity: opacity < 100 ? opacity / 100 : undefined,
        zIndex: 9999,
      }}
      className={`rounded-2xl shadow-2xl flex flex-col border border-slate-300/80 dark:border-slate-700 bg-white dark:bg-slate-900 transition-opacity duration-150 cursor-default overflow-hidden ${
        theme === 'dark' ? 'notes-theme-dark' : theme === 'amber' ? 'notes-theme-amber' : ''
      }`}
    >
      {/* =========================================================================
          WINDOW RESIZE HANDLERS (8-Directions)
          ========================================================================= */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 cursor-n-resize hover:bg-indigo-400/40 z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'n')}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-2 cursor-s-resize hover:bg-indigo-400/40 z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 's')}
      />
      <div
        className="absolute top-0 bottom-0 left-0 w-1.5 cursor-w-resize hover:bg-indigo-400/40 z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'w')}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-2 cursor-e-resize hover:bg-indigo-400/40 z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'e')}
      />
      <div
        className="absolute top-0 left-0 w-3 h-3 cursor-nw-resize z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'nw')}
      />
      <div
        className="absolute top-0 right-0 w-3 h-3 cursor-ne-resize z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'ne')}
      />
      <div
        className="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize z-30"
        onPointerDown={(e) => handlePointerDownResize(e, 'sw')}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-30 flex items-end justify-end p-0.5"
        onPointerDown={(e) => handlePointerDownResize(e, 'se')}
        title="Arrastra para redimensionar"
      >
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400 dark:border-slate-500 rounded-br-xs pointer-events-none" />
      </div>

      {/* =========================================================================
          TOP DRAGGABLE HEADER
          ========================================================================= */}
      <div
        onPointerDown={handlePointerDownDrag}
        className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-3 py-2 flex flex-col border-b border-indigo-800/40 cursor-grab active:cursor-grabbing shrink-0"
      >
        {/* Main Title Bar & Controls */}
        <div className="flex items-center justify-between gap-2">
          {/* Left Title & Status */}
          <div className="flex items-center gap-2 pointer-events-none">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xs">
              <PenTool className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xs tracking-wide flex items-center gap-1.5 text-white">
                Teacher Master Notes
                <span className="text-[10px] font-normal px-1.5 py-0.2 bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 rounded-full">
                  Pro
                </span>
              </span>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5">
            {/* Direct Prominent Font Size Controls in Top Header */}
            <div className="flex items-center bg-slate-800/90 border border-slate-700/90 rounded-lg p-0.5 shadow-xs">
              <button
                onClick={() => setFontSize((prev) => Math.max(10, prev - (prev > 32 ? 6 : prev > 20 ? 4 : 2)))}
                className="px-1.5 py-0.5 text-indigo-300 hover:text-white hover:bg-slate-700 rounded transition-colors flex items-center gap-0.5"
                title="Hacer letra más pequeña (A-)"
              >
                <Minus className="w-2.5 h-2.5" />
                <span className="text-[10px] font-bold">A</span>
              </button>
              <span className="text-[11px] font-bold font-mono px-1.5 text-white bg-indigo-900/60 rounded border border-indigo-700/50">
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize((prev) => Math.min(96, prev + (prev >= 32 ? 6 : prev >= 20 ? 4 : 2)))}
                className="px-1.5 py-0.5 text-indigo-300 hover:text-white hover:bg-slate-700 rounded transition-colors flex items-center gap-0.5"
                title="Hacer letra más grande (A+)"
              >
                <span className="text-[11px] font-bold">A</span>
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Quick Snap Layout Presets Menu */}
            <div className="flex items-center bg-slate-800/80 border border-slate-700 rounded-lg p-0.5">
              <button
                onClick={() => applyPreset('dock-right')}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Dock Derecho (Pantalla Dividida)"
              >
                <Columns className="w-3 h-3" />
              </button>
              <button
                onClick={() => applyPreset('dock-bottom')}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Dock Inferior (Banner)"
              >
                <ArrowDownToLine className="w-3 h-3" />
              </button>
              <button
                onClick={() => applyPreset('fullscreen')}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Pizarra Completa"
              >
                <Square className="w-3 h-3" />
              </button>
              <button
                onClick={() => applyPreset('center')}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Centrar Ventana"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Typography / Settings Toggle */}
            <button
              onClick={() => setShowSettingsBar(!showSettingsBar)}
              className={`p-1.5 rounded-lg border transition-colors ${
                showSettingsBar
                  ? 'bg-indigo-600 border-indigo-400 text-white'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title="Ajustes avanzados de Letra, Interlínea y Tema"
            >
              <Sliders className="w-3.5 h-3.5" />
            </button>

            {/* Minimize */}
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Minimizar"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 hover:text-white hover:bg-red-600 transition-colors"
              title="Cerrar Cuaderno"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Settings Bar (Expandable on Click) */}
        {showSettingsBar && (
          <div
            className="mt-2 pt-2 border-t border-indigo-800/40 flex flex-wrap items-center justify-between gap-2 text-xs bg-slate-900/60 p-2 rounded-xl"
            onPointerDown={(e) => e.stopPropagation()}
          >
            {/* Font Size Presets */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <span className="text-[10px] text-slate-400 font-bold px-1.5">PRESETS:</span>
              {[14, 18, 24, 32, 42, 56, 72].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                    fontSize === sz ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {sz === 14 ? 'S' : sz === 18 ? 'M' : sz === 24 ? 'L' : sz === 32 ? 'XL' : sz === 42 ? '2XL' : sz === 56 ? '3XL' : '4XL'}
                </button>
              ))}
            </div>

            {/* Line Spacing */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <span className="text-[10px] text-slate-400 font-bold px-1.5">INTERLÍNEA:</span>
              <button
                onClick={() => setLineSpacing('compact')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  lineSpacing === 'compact' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                Compacta
              </button>
              <button
                onClick={() => setLineSpacing('normal')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  lineSpacing === 'normal' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setLineSpacing('relaxed')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  lineSpacing === 'relaxed' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                Relajada
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <span className="text-[10px] text-slate-400 font-bold px-1.5">TEMA:</span>
              <button
                onClick={() => setTheme('light')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  theme === 'light' ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-700'
                }`}
                title="Papel Blanco"
              >
                Blanco
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  theme === 'dark' ? 'bg-slate-900 text-indigo-300 border border-slate-700' : 'text-slate-300 hover:bg-slate-700'
                }`}
                title="Pizarra Oscura"
              >
                Oscuro
              </button>
              <button
                onClick={() => setTheme('amber')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  theme === 'amber' ? 'bg-amber-100 text-amber-900' : 'text-slate-300 hover:bg-slate-700'
                }`}
                title="Cálido Ámbar"
              >
                Ámbar
              </button>
            </div>

            {/* Opacity / Ghost Mode */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <Eye className="w-3 h-3 text-slate-400 ml-1.5" />
              <button
                onClick={() => setOpacity(100)}
                className={`px-1.5 py-0.5 rounded text-[10px] ${opacity === 100 ? 'bg-indigo-600 text-white' : 'text-slate-300'}`}
              >
                100%
              </button>
              <button
                onClick={() => setOpacity(85)}
                className={`px-1.5 py-0.5 rounded text-[10px] ${opacity === 85 ? 'bg-indigo-600 text-white' : 'text-slate-300'}`}
              >
                85%
              </button>
              <button
                onClick={() => setOpacity(65)}
                className={`px-1.5 py-0.5 rounded text-[10px] ${opacity === 65 ? 'bg-indigo-600 text-white' : 'text-slate-300'}`}
              >
                Fantasma
              </button>
            </div>
          </div>
        )}

        {/* Tabs Bar */}
        <div
          className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pt-1"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {notes.map((note) => {
            const isActive = activeTabId === note.id;
            const isEditing = editingTabId === note.id;

            return (
              <div
                key={note.id}
                onClick={() => {
                  if (!isEditing) setActiveTabId(note.id);
                }}
                onDoubleClick={(e) => startRenameTab(note, e)}
                className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-t-xl text-xs font-semibold cursor-pointer transition-all shrink-0 max-w-[160px] ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-indigo-900 dark:text-indigo-200 shadow-sm border-t-2 border-indigo-500'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300'
                }`}
              >
                <span>{note.icon || '📝'}</span>

                {isEditing ? (
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onBlur={saveRenameTab}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveRenameTab();
                      if (e.key === 'Escape') setEditingTabId(null);
                    }}
                    autoFocus
                    className="w-20 bg-indigo-50 dark:bg-slate-800 text-indigo-900 dark:text-white px-1 py-0.5 rounded text-xs outline-none border border-indigo-400"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span className="truncate flex-1">{note.title}</span>
                )}

                {isActive && !isEditing && (
                  <button
                    onClick={(e) => startRenameTab(note, e)}
                    className="opacity-0 group-hover:opacity-100 p-0.5 text-slate-400 hover:text-indigo-600 transition-opacity"
                    title="Renombrar nota"
                  >
                    <Edit2 className="w-2.5 h-2.5" />
                  </button>
                )}

                {notes.length > 1 && (
                  <button
                    onClick={(e) => closeTab(note.id, e)}
                    className="p-0.5 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Cerrar nota"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            );
          })}

          <button
            onClick={addTab}
            className="px-2 py-1.5 rounded-t-xl bg-indigo-800/50 hover:bg-indigo-700 text-indigo-200 hover:text-white text-xs flex items-center gap-1 transition-colors shrink-0"
            title="Añadir nueva pestaña de nota"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Nueva</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN RICH TEXT EDITOR AREA
          ========================================================================= */}
      <div className="flex-1 flex flex-col min-h-0 relative bg-white dark:bg-slate-900 overflow-hidden">
        <RichTextEditor
          value={activeNote.content}
          onChange={handleContentChange}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          lineSpacing={lineSpacing}
          theme={theme}
          fontFamily={fontFamily}
        />
      </div>

      {/* =========================================================================
          BOTTOM QUICK ACTIONS BAR
          ========================================================================= */}
      <div
        className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 shrink-0 select-none text-xs"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-1.5">
          {/* Copy Button */}
          <button
            onClick={handleCopyNote}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 border border-slate-300 dark:border-slate-600'
            }`}
            title="Copiar texto de esta nota para pegar en Meet o Teams"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
          </button>

          {/* Share via WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-medium transition-colors"
            title="Enviar notas al estudiante por WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Clear Current Note */}
          <button
            onClick={handleClearCurrentNote}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            title="Vaciar contenido de la nota activa"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Info Indicator */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden md:inline">Auto-guardado activo</span>
        </div>
      </div>
    </div>
  );
}
