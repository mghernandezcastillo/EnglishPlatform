import { Volume2 } from 'lucide-react';
import { playAudio } from '../lib/audio';

interface AudioButtonProps {
  text: string;
  lang?: string;
  className?: string;
}

export function AudioButton({ text, lang = 'en-US', className = '' }: AudioButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        playAudio(text, lang);
      }}
      className={`p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors shadow-sm ${className}`}
      aria-label="Escuchar pronunciación"
      title="Escuchar"
    >
      <Volume2 className="w-5 h-5" />
    </button>
  );
}
