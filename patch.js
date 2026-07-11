const fs = require('fs');
let code = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const buttonStr = `          <button 
             onClick={onOpenSpeakingPractice}
             className={\`w-full sm:w-auto relative overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-105 active:scale-95 \${isKid ? 'bg-gradient-to-br from-cyan-400 to-blue-500 hover:shadow-cyan-300/50' : 'bg-gradient-to-br from-indigo-500 to-blue-600'}\`}
          >
             <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors"></div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
               <span className="font-bold text-white tracking-wide">{isKid ? '🎤 ¡Vamos a Hablar!' : '🎙️ Práctica Speaking'}</span>
             </div>
          </button>`;

const insertStr = `
          <button 
             onClick={onOpenStoryForge}
             className={\`w-full sm:w-auto relative overflow-hidden rounded-2xl p-1 shadow-lg transition-transform hover:scale-105 active:scale-95 \${isKid ? 'bg-gradient-to-br from-fuchsia-400 to-pink-500 hover:shadow-fuchsia-300/50' : 'bg-gradient-to-br from-fuchsia-500 to-purple-600'}\`}
          >
             <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors"></div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
               <span className="font-bold text-white tracking-wide">{isKid ? '✨ ¡Crea un Cuento!' : '✨ StoryForge'}</span>
             </div>
          </button>`;

code = code.replace(buttonStr, buttonStr + insertStr);
fs.writeFileSync('src/components/Dashboard.tsx', code);
