import { useState, useEffect } from 'react';
import { Maximize, Minimize, PenTool, X, Plus, Minus, Dices, Type, Scaling } from 'lucide-react';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { RichTextEditor } from './RichTextEditor';
import { VerbsGame } from './VerbsGame';

interface NoteTab {
  id: string;
  title: string;
  content: string;
}

const DEFAULT_NOTES: NoteTab[] = [
  { id: '1', title: 'Nota 1', content: '' }
];

export function FloatingControls() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isVerbsOpen, setIsVerbsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const dragControls = useDragControls();

  const [noteDimensions, setNoteDimensions] = useState<{width: number, height: number}>(() => {
    try {
      const saved = localStorage.getItem('english_easy_notes_dims');
      return saved ? JSON.parse(saved) : { width: 400, height: 450 };
    } catch {
      return { width: 400, height: 450 };
    }
  });

  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('english_easy_notes_fontsize');
      return saved ? parseInt(saved, 10) : 18;
    } catch {
      return 18;
    }
  });

  const [notes, setNotes] = useState<NoteTab[]>(() => {
    try {
      const saved = localStorage.getItem('english_easy_notes');
      // Migrate old data if exists
      if (!saved) {
        const oldScratchpad = localStorage.getItem('english_easy_scratchpad');
        if (oldScratchpad) {
          return [{ id: '1', title: 'Nota 1', content: oldScratchpad }];
        }
        return DEFAULT_NOTES;
      }
      return JSON.parse(saved);
    } catch {
      return DEFAULT_NOTES;
    }
  });
  
  const [activeTabId, setActiveTabId] = useState<string>(notes[0]?.id || '1');

  useEffect(() => {
    localStorage.setItem('english_easy_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('english_easy_notes_dims', JSON.stringify(noteDimensions));
  }, [noteDimensions]);

  useEffect(() => {
    localStorage.setItem('english_easy_notes_fontsize', fontSize.toString());
  }, [fontSize]);

  const handleDecreaseFontSize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const handleIncreaseFontSize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFontSize(prev => Math.min(prev + 2, 48));
  };

  const handleResizeStart = (e: React.PointerEvent) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = noteDimensions.width;
    const startHeight = noteDimensions.height;

    const handleMove = (moveEvent: PointerEvent) => {
      setNoteDimensions({
        width: Math.max(300, startWidth + (moveEvent.clientX - startX)),
        height: Math.max(300, startHeight + (moveEvent.clientY - startY))
      });
    };

    const handleUp = () => {
      document.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerup', handleUp);
    };

    document.addEventListener('pointermove', handleMove);
    document.addEventListener('pointerup', handleUp);
  };

  useEffect(() => {
     const handleFullscreenChange = () => {
       setIsFullscreen(!!document.fullscreenElement);
     };
     document.addEventListener('fullscreenchange', handleFullscreenChange);
     return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleContentChange = (content: string) => {
    setNotes(notes.map(n => n.id === activeTabId ? { ...n, content } : n));
  };

  const addTab = () => {
    const newTab = { id: Date.now().toString(), title: `Nota ${notes.length + 1}`, content: '' };
    setNotes([...notes, newTab]);
    setActiveTabId(newTab.id);
  };

  const closeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (notes.length === 1) return; // Prevent closing the last tab
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
    if (activeTabId === id) {
      setActiveTabId(newNotes[newNotes.length - 1].id);
    }
  };

  const activeNote = notes.find(n => n.id === activeTabId) || notes[0];

  return (
    <>
      <div className="fixed bottom-32 left-6 z-[9999] flex flex-col gap-3">
        <button
          onClick={toggleFullscreen}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors border border-gray-100"
          title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
        <button
          onClick={() => {
            setIsScratchpadOpen(!isScratchpadOpen);
            setIsMinimized(false);
            if (isVerbsOpen) setIsVerbsOpen(false);
          }}
          className="w-12 h-12 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors shadow-indigo-200"
          title="Abrir cuaderno de notas"
        >
          {isScratchpadOpen ? <X className="w-5 h-5" /> : <PenTool className="w-5 h-5" />}
        </button>
        <button
          onClick={() => {
            setIsVerbsOpen(!isVerbsOpen);
            if (isScratchpadOpen) setIsScratchpadOpen(false);
          }}
          className="w-12 h-12 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-600 transition-colors shadow-indigo-200"
          title="Verbos aleatorios"
        >
          {isVerbsOpen ? <X className="w-5 h-5" /> : <Dices className="w-5 h-5" />}
        </button>
      </div>

      <VerbsGame isOpen={isVerbsOpen} onClose={() => setIsVerbsOpen(false)} />

      <AnimatePresence>
        {isScratchpadOpen && (
          <motion.div
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{ 
              overflow: 'hidden',
              minWidth: '300px',
              minHeight: isMinimized ? 'auto' : '300px',
              width: noteDimensions.width,
              height: isMinimized ? 'auto' : noteDimensions.height
            }}
            className="fixed bottom-32 left-24 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9999] flex flex-col cursor-auto"
          >
            <div 
              className="bg-indigo-50 border-b border-indigo-100 flex flex-col cursor-move select-none"
              onPointerDown={(e) => {
                 // Only trigger drag if it's the actual header background or title, not form elements
                 if ((e.target as HTMLElement).tagName !== 'BUTTON') {
                   dragControls.start(e);
                 }
              }}
            >
              <div className="p-3 flex justify-between items-center">
                <h3 className="font-bold text-indigo-900 flex items-center gap-2 pointer-events-none text-sm">
                   <PenTool className="w-4 h-4" /> Mis Notas
                </h3>
                <div className="flex items-center gap-3">
                  {!isMinimized && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-white border border-indigo-100 rounded-xl shadow-sm">
                      <Type className="w-4 h-4 text-indigo-400 mr-1" />
                      <button
                        onClick={handleDecreaseFontSize}
                        className="p-1 px-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                        onPointerDown={(e) => e.stopPropagation()}
                        title="Reducir letra"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-6 text-center text-indigo-700">{fontSize}</span>
                      <button
                        onClick={handleIncreaseFontSize}
                        className="p-1 px-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                        onPointerDown={(e) => e.stopPropagation()}
                        title="Agrandar letra"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  <button 
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100/50 rounded-lg transition-colors"
                    onPointerDown={(e) => e.stopPropagation()}
                    title={isMinimized ? "Maximizar" : "Minimizar"}
                  >
                    {isMinimized ? <Maximize className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => setIsScratchpadOpen(false)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    onPointerDown={(e) => e.stopPropagation()}
                    title="Cerrar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {!isMinimized && (
                <div className="flex bg-indigo-100/50 px-2 pt-2 gap-1 overflow-x-auto no-scrollbar" onPointerDown={(e) => e.stopPropagation()}>
                  {notes.map(note => (
                    <div 
                      key={note.id}
                      onClick={() => setActiveTabId(note.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-semibold cursor-pointer transition-colors max-w-[150px] ${
                        activeTabId === note.id 
                          ? 'bg-white text-indigo-700 border-t border-x border-indigo-100 shadow-sm' 
                          : 'bg-transparent text-indigo-500 hover:bg-indigo-50 hover:text-indigo-700'
                      }`}
                    >
                      <span className="truncate flex-1">{note.title}</span>
                      {notes.length > 1 && (
                        <X 
                          className={`w-3 h-3 shrink-0 rounded-full ${activeTabId === note.id ? 'text-indigo-400 hover:text-indigo-600 hover:bg-indigo-50' : 'text-indigo-300 hover:text-indigo-700'}`} 
                          onClick={(e) => closeTab(note.id, e)}
                        />
                      )}
                    </div>
                  ))}
                  <button 
                    onClick={addTab}
                    className="px-3 py-2 rounded-t-lg text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100/80 transition-colors shrink-0"
                    title="Nueva nota"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            
            {!isMinimized && (
              <div 
                className="flex-1 overflow-hidden flex flex-col relative bg-white"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <RichTextEditor
                  value={activeNote.content}
                  onChange={handleContentChange}
                  fontSize={fontSize}
                />
                
                {/* Custom Resize Handle */}
                <div 
                  className="absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center cursor-nwse-resize text-gray-400 hover:text-indigo-600"
                  onPointerDown={handleResizeStart}
                  title="Arrastra para redimensionar"
                >
                  <Scaling className="w-4 h-4 transform rotate-90" />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
