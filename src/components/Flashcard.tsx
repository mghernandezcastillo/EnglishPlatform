import { useState } from 'react';
import { motion } from 'motion/react';
import { VocabularyItem } from '../types';
import { AudioButton } from './AudioButton';
import { DynamicIcon } from './DynamicIcon';

interface FlashcardProps {
  item: VocabularyItem;
}

export function Flashcard({ item }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const defaultGradient = 'from-indigo-500 to-purple-600';
  const gradient = item.color || defaultGradient;

  return (
    <div 
      className="relative w-full aspect-[16/11] max-w-sm mx-auto cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front (English) */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col border-4 border-white">
          <div className={`h-[65%] relative bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
            {item.imageUrl && !imgError && (
              <img referrerPolicy="no-referrer" 
                src={item.imageUrl} 
                alt={item.word} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                onError={() => setImgError(true)}
              />
            )}
            
            <div className="relative z-10 p-5 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/30">
               {item.iconName ? (
                 <DynamicIcon name={item.iconName} className="w-16 h-16 text-white drop-shadow-md" />
               ) : (
                 <DynamicIcon name="Image" className="w-16 h-16 text-white/70" />
               )}
            </div>
            
            {/* Decorative sparkles */}
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/60 animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="flex-1 flex items-center justify-between px-6 bg-white gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight leading-tight line-clamp-1">{item.word}</h3>
            <div onClick={e => e.stopPropagation()} className="shrink-0 bg-gray-50 rounded-full shadow-sm border border-gray-100">
               <AudioButton text={item.word} className="scale-110 !bg-transparent hover:!bg-indigo-50 !text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Back (Spanish) */}
        <div 
          className={`absolute inset-0 backface-hidden bg-gradient-to-br ${gradient} rounded-3xl shadow-xl flex flex-col items-center justify-center text-center p-6 border-4 border-white/20`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md w-full h-full flex flex-col items-center justify-center border border-white/20 shadow-inner">
            <p className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 bg-black/10 px-4 py-1.5 rounded-full">Traducción</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">{item.translation}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
