import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, RefreshCw, ChevronRight, BookOpen, Map } from 'lucide-react';
import { storyImages, storyPrompts, storyVocabWords, storyStructures, StoryAsset, StoryStructure } from '../data/storyAssets';

interface StoryForgeProps {
  onClose: () => void;
}

export function StoryForge({ onClose }: StoryForgeProps) {
  const [images, setImages] = useState<StoryAsset[]>([]);
  const [prompt, setPrompt] = useState('');
  const [vocab, setVocab] = useState<string[]>([]);
  const [structure, setStructure] = useState<StoryStructure | null>(null);
  const [revealedImageId, setRevealedImageId] = useState<string | null>(null);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const generateStoryBoard = () => {
    setRevealedImageId(null);
    
    // Pick 5 random images
    const randomImages = shuffleArray(storyImages).slice(0, 5);
    setImages(randomImages);

    // Pick 1 random prompt
    const randomPrompt = shuffleArray(storyPrompts)[0];
    setPrompt(randomPrompt);

    // Pick 5 random vocab words
    const randomVocab = shuffleArray(storyVocabWords).slice(0, 5);
    setVocab(randomVocab);

    // Pick 1 random structure
    const randomStructure = shuffleArray(storyStructures)[0];
    setStructure(randomStructure);
  };

  useEffect(() => {
    generateStoryBoard();
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-50 z-50 overflow-y-auto">
      <div className="min-h-screen relative flex flex-col items-center py-12 px-4 sm:px-6">        
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 hover:bg-red-50 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-5xl w-full flex flex-col">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative">
              <Sparkles className="w-10 h-10 text-fuchsia-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">StoryForge</h2>
            <p className="text-gray-500 mt-2 font-medium text-lg">Crea tu propia historia usando las imágenes y las palabras clave.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-fuchsia-100/50 border border-fuchsia-50 p-8 text-center flex flex-col relative overflow-hidden">
             
             {/* Story Prompt & Structure */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                 <div className="flex items-center justify-center gap-2 mb-3 text-fuchsia-500 font-bold uppercase tracking-wider text-sm">
                   <BookOpen className="w-4 h-4" />
                   <span>Comienzo Sugerido</span>
                 </div>
                 <p className="text-xl sm:text-2xl font-bold text-slate-800 italic">"{prompt}"</p>
               </div>

               {structure && (
                 <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-left">
                   <div className="flex items-center gap-2 mb-3 text-indigo-600 font-bold uppercase tracking-wider text-sm">
                     <Map className="w-4 h-4" />
                     <span>Pauta: {structure.title}</span>
                   </div>
                   <ul className="space-y-2">
                     {structure.steps.map((step, idx) => (
                       <li key={idx} className="text-sm text-indigo-900 font-medium">
                         {step}
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
             </div>

             {/* Images Board */}
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
               <AnimatePresence mode="popLayout">
                 {images.map((img, idx) => (
                   <motion.div 
                     key={img.id}
                     initial={{ opacity: 0, scale: 0.8, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{ duration: 0.3, delay: idx * 0.1 }}
                     className="relative cursor-pointer group"
                     onClick={() => setRevealedImageId(revealedImageId === img.id ? null : img.id)}
                   >
                     <div className="aspect-square rounded-2xl overflow-hidden shadow-md border-4 border-white group-hover:border-fuchsia-200 transition-colors">
                       <img src={img.url} alt={img.en} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     </div>
                     
                     <AnimatePresence>
                       {revealedImageId === img.id && (
                         <motion.div 
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 rounded-2xl p-2 text-white"
                         >
                           <span className="font-bold text-center text-sm mb-1">{img.en}</span>
                           <span className="text-xs text-fuchsia-300 text-center">{img.es}</span>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>
             
             {/* Vocab Words */}
             <div className="w-full mt-4 bg-fuchsia-50 p-6 rounded-2xl border border-fuchsia-100">
               <div className="flex items-center justify-center gap-2 mb-4 text-fuchsia-700 text-sm font-bold uppercase tracking-wider">
                 <span>Palabras Comodín para Usar</span>
               </div>
               <div className="flex flex-wrap justify-center gap-3">
                 {vocab.map((word, i) => (
                   <span key={i} className="px-4 py-2 bg-white text-fuchsia-700 rounded-xl text-md font-bold shadow-sm border border-fuchsia-200">
                     {word}
                   </span>
                 ))}
               </div>
             </div>

          </div>

          <div className="mt-12 flex justify-center pb-12">
            <button 
              onClick={generateStoryBoard}
              className="group flex items-center gap-3 bg-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-fuchsia-700 transition-all active:scale-95"
            >
              <RefreshCw className="w-6 h-6 group-active:animate-spin" />
              Nueva Historia
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
