import { useState, useEffect } from 'react';
import { Maximize, Minimize, PenTool, X, Dices, HelpCircle } from 'lucide-react';
import { VerbsGame } from './VerbsGame';
import { WhNexusDrawer } from './wh-nexus/WhNexusDrawer';
import { TeacherMasterNotes } from './TeacherMasterNotes';

interface FloatingControlsProps {
  studentId?: string | null;
  studentName?: string;
}

export function FloatingControls({ studentId, studentName }: FloatingControlsProps = {}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isVerbsOpen, setIsVerbsOpen] = useState(false);
  const [isWhNexusOpen, setIsWhNexusOpen] = useState(false);

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
            if (isVerbsOpen) setIsVerbsOpen(false);
            if (isWhNexusOpen) setIsWhNexusOpen(false);
          }}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
            isScratchpadOpen
              ? 'bg-indigo-700 text-white ring-4 ring-indigo-300 shadow-indigo-300'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 hover:scale-105'
          }`}
          title="Teacher Master Notes (Cuaderno del Profesor)"
        >
          {isScratchpadOpen ? <X className="w-5 h-5" /> : <PenTool className="w-5 h-5" />}
        </button>

        <button
          onClick={() => {
            setIsVerbsOpen(!isVerbsOpen);
            if (isScratchpadOpen) setIsScratchpadOpen(false);
            if (isWhNexusOpen) setIsWhNexusOpen(false);
          }}
          className="w-12 h-12 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-600 transition-colors shadow-indigo-200 hover:scale-105"
          title="Verbos aleatorios"
        >
          {isVerbsOpen ? <X className="w-5 h-5" /> : <Dices className="w-5 h-5" />}
        </button>

        <button
          onClick={() => {
            setIsWhNexusOpen(!isWhNexusOpen);
            if (isScratchpadOpen) setIsScratchpadOpen(false);
            if (isVerbsOpen) setIsVerbsOpen(false);
          }}
          className="relative w-12 h-12 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-indigo-500/30 group"
          title="WH Nexus (Oráculo de Preguntas A1-B2)"
        >
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-60 blur-xs group-hover:opacity-100 transition duration-300 animate-pulse" />
          <span className="relative flex items-center justify-center w-full h-full">
            {isWhNexusOpen ? <X className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
          </span>
        </button>
      </div>

      <VerbsGame isOpen={isVerbsOpen} onClose={() => setIsVerbsOpen(false)} />
      
      <WhNexusDrawer
        isOpen={isWhNexusOpen}
        onClose={() => setIsWhNexusOpen(false)}
        studentId={studentId}
        studentName={studentName}
      />

      <TeacherMasterNotes
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        studentId={studentId}
        studentName={studentName}
      />
    </>
  );
}

