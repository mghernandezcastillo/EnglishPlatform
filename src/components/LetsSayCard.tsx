import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Sparkles, Volume2, Users } from 'lucide-react';
import { ClassSlide } from '../types';
import { playAudio } from '../lib/audio';

interface LetsSayCardProps {
  slide: ClassSlide;
}

export function LetsSayCard({ slide }: LetsSayCardProps) {
  const content = slide.content || [];
  const rawRoleplay = slide.roleplay;
  const slideTitle = slide.title || '';

  // Extract scenario or craft a "Let's say that..." prompt
  let scenario = rawRoleplay?.scenario || '';
  let studentA = '';
  let studentB = '';
  const contextLines: string[] = [];

  content.forEach((line) => {
    const lower = line.toLowerCase();
    if (lower.startsWith('student a:') || lower.startsWith('player a:') || lower.startsWith('a:')) {
      studentA = line.replace(/^(student|player)?\s*[aA]:\s*/i, '').trim();
    } else if (lower.startsWith('student b:') || lower.startsWith('player b:') || lower.startsWith('b:')) {
      studentB = line.replace(/^(student|player)?\s*[bB]:\s*/i, '').trim();
    } else if (lower.startsWith('lets say that') || lower.startsWith("let's say that")) {
      scenario = line.trim();
    } else {
      contextLines.push(line);
    }
  });

  if (!scenario) {
    if (contextLines.length > 0) {
      scenario = contextLines.join(' ');
    } else if (rawRoleplay?.situation) {
      scenario = rawRoleplay.situation;
    } else {
      const cleanTitle = slideTitle.replace(/Roleplay:?|Juego de Roles:?|Production/gi, '').replace(/\//g, '·').trim();
      scenario = cleanTitle ? `You are in a situation about ${cleanTitle}. Talk with your classmate!` : 'You meet a friend at school. Start a natural conversation!';
    }
  }

  // Ensure prompt starts with "Let's say that..."
  if (!/^let['’]?s\s+say\s+that/i.test(scenario)) {
    scenario = `Let's say that ${scenario.charAt(0).toLowerCase()}${scenario.slice(1)}`;
  }

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-2 sm:p-6 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-slate-900/90 border-2 border-indigo-400/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Badge */}
        <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest shadow-inner mb-6 sm:mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>Let's Say That... 🎭</span>
        </div>

        {/* Central Large Scenario Prompt */}
        <div className="relative my-auto py-2">
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight sm:leading-snug tracking-tight drop-shadow-md">
            "{scenario}"
          </p>
        </div>

        {/* Audio Listen Button */}
        <button
          onClick={() => playAudio(scenario)}
          className="mt-6 sm:mt-8 flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          <Volume2 className="w-5 h-5 text-yellow-400" />
          <span>Escuchar frase</span>
        </button>

        {/* Optional Student A / Student B Guidance (if available) */}
        {(studentA || studentB) && (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
            {studentA && (
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Users className="w-4 h-4" />
                  <span>Student A</span>
                </div>
                <p className="text-white font-medium text-base sm:text-lg">{studentA}</p>
              </div>
            )}
            {studentB && (
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>Student B</span>
                </div>
                <p className="text-white font-medium text-base sm:text-lg">{studentB}</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
