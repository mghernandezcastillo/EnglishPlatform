import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, RefreshCcw, LayoutGrid, X, Mic, HelpCircle, MessageSquare } from 'lucide-react';
import { ClassSlide } from '../types';
import { playAudio } from '../lib/audio';

import { resolveSpeakingScene } from '../lib/speakingSceneResolver';

interface SpeakingSceneCardProps {
  slide: ClassSlide;
}

export function SpeakingSceneCard({ slide }: SpeakingSceneCardProps) {
  const scene = resolveSpeakingScene(slide);

  const topic = scene.topic;
  const topicEs = scene.topicEs;
  const cues = scene.cues;
  const roleAData = scene.roleA;
  const roleBData = scene.roleB;
  const helpWords = scene.helpWords;
  const hiddenPhrases = scene.hiddenPhrases ?? {
    ask: [
      { en: 'Can you describe what you see here?', es: '¿Puedes describir lo que ves aquí?' },
      { en: 'What is the most interesting part?', es: '¿Cuál es la parte más interesante?' }
    ],
    answer: [
      { en: 'I can see this clearly in the scene.', es: 'Puedo ver esto claramente en la escena.' },
      { en: 'This helps us practice our English today.', es: 'Esto nos ayuda a practicar nuestro inglés hoy.' }
    ]
  };

  // State
  const [isSwapped, setIsSwapped] = useState(false);
  const [showPhrasesModal, setShowPhrasesModal] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<'a' | 'b' | null>(null);
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const currentRoleA = isSwapped ? roleBData : roleAData;
  const currentRoleB = isSwapped ? roleAData : roleBData;

  const handlePlayWord = useCallback((word: string) => {
    setPlayingWord(word);
    playAudio(word, 'en-US');
    setTimeout(() => setPlayingWord(null), 1200);
  }, []);

  const imageUrl = slide.imageUrl || 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200';

  return (
    <div className="flex flex-col h-full w-full min-h-0 text-white select-none relative justify-between gap-3 sm:gap-4 p-1 sm:p-2">
      {/* ═══ 1. TOP BAR ═══ */}
      <div className="flex items-center justify-between gap-3 shrink-0">
        {/* Left Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-indigo-600 text-white font-black text-sm sm:text-lg shadow-lg border border-white/20"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="tracking-wide">SPEAKING TIME</span>
          <span className="text-xs sm:text-sm font-bold bg-black/25 px-2.5 py-0.5 rounded-lg text-white/90">
            ¡Hora de Hablar!
          </span>
        </motion.div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowPhrasesModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-black text-sm sm:text-base transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Ver Frases</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSwapped(v => !v);
              setActiveSpeaker(null);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-sm sm:text-base shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Switch</span>
          </button>
        </div>
      </div>

      {/* ═══ 2. CONVERSATIONAL COMMAND HEADLINE ═══ */}
      <div className="text-center shrink-0">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight drop-shadow-xl"
        >
          <span className="text-amber-300">✦</span> {topic} {topicEs && <span className="text-white/85 text-2xl sm:text-4xl lg:text-5xl font-bold">/ {topicEs}</span>} <span className="text-amber-300">✦</span>
        </motion.h2>

        {/* Action Pills below headline */}
        <div className="flex items-center justify-center gap-3.5 mt-2.5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-purple-600/80 border border-purple-300/40 text-purple-100 text-sm sm:text-base font-black shadow-md backdrop-blur-sm">
            <span className="text-xl">{currentRoleA.avatar ?? '👤'}</span>
            <span>{currentRoleA.label} {currentRoleA.action.toLowerCase()}s</span>
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
          </div>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-600/80 border border-cyan-300/40 text-cyan-100 text-sm sm:text-base font-black shadow-md backdrop-blur-sm">
            <span className="text-xl">{currentRoleB.avatar ?? '👤'}</span>
            <span>{currentRoleB.label} {currentRoleB.action.toLowerCase()}s</span>
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-200" />
          </div>
        </div>
      </div>

      {/* ═══ 3. MAIN STAGE (TALL IMMERSIVE CENTER IMAGE + SIDE PLAYERS + FLOATING CUES) ═══ */}
      <div className="flex-1 min-h-[360px] sm:min-h-[440px] md:min-h-[480px] flex items-stretch justify-center gap-3 sm:gap-5 relative px-1">
        {/* — LEFT PLAYER CARD (ROLE A) — */}
        <motion.div
          animate={{ scale: activeSpeaker === 'a' ? 1.04 : 1 }}
          onClick={() => setActiveSpeaker(activeSpeaker === 'a' ? null : 'a')}
          className={`
            w-32 sm:w-44 lg:w-52 rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between border-3 transition-all cursor-pointer shadow-2xl shrink-0
            ${activeSpeaker === 'a'
              ? 'bg-purple-900/90 border-purple-400 ring-4 ring-purple-400/40 shadow-purple-500/30'
              : 'bg-purple-950/75 hover:bg-purple-900/85 border-purple-400/30 backdrop-blur-md'}
          `}
        >
          <span className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-wider text-purple-200 bg-purple-500/40 px-3 py-1.5 rounded-full border border-purple-300/30 shadow">
            {currentRoleA.label} ⭐
          </span>
          <div className="text-6xl sm:text-7xl lg:text-8xl my-auto drop-shadow-2xl transform hover:scale-110 transition-transform">
            {currentRoleA.avatar ?? '👩‍🏫'}
          </div>
          <div className="w-full text-center">
            <p className="font-black text-lg sm:text-2xl lg:text-3xl text-white leading-tight">
              {currentRoleA.action}
            </p>
            {currentRoleA.actionEs && (
              <p className="text-xs sm:text-sm lg:text-base font-bold text-purple-200/80 mt-1">
                {currentRoleA.actionEs}
              </p>
            )}
            <div className={`p-3 rounded-full mt-2.5 mx-auto w-fit transition-all ${activeSpeaker === 'a' ? 'bg-purple-400 text-purple-950 shadow-lg scale-110' : 'bg-white/15 text-white/80'}`}>
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* — CENTER IMAGE WITH PROMINENT FLOATING CONVERSATION CUES — */}
        <div className="flex-1 rounded-3xl overflow-hidden relative border-3 border-white/30 shadow-2xl bg-slate-900 flex items-center justify-center group">
          <img
            src={imageUrl}
            alt={topic}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none" />

          {/* Floating Conversation Cue Cards on Top of Image */}
          <div className="absolute top-4 inset-x-0 flex items-center justify-center gap-3 sm:gap-4 px-3 z-10 flex-wrap">
            {cues.map((cue, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => cue.questionExample && playAudio(cue.questionExample, 'en-US')}
                className="bg-white/95 hover:bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl px-5 sm:px-6 py-3 sm:py-4 border-2 border-white backdrop-blur-md flex items-center gap-3.5 cursor-pointer transition-all"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-base sm:text-2xl font-black shrink-0 shadow-md">
                  {cue.icon ?? '💬'}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-black text-base sm:text-xl lg:text-2xl leading-tight text-slate-900 tracking-wide">
                    {cue.label}
                  </span>
                  {cue.labelEs && (
                    <span className="text-xs sm:text-sm lg:text-base text-slate-700 font-extrabold leading-tight mt-0.5">
                      {cue.labelEs}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — RIGHT PLAYER CARD (ROLE B) — */}
        <motion.div
          animate={{ scale: activeSpeaker === 'b' ? 1.04 : 1 }}
          onClick={() => setActiveSpeaker(activeSpeaker === 'b' ? null : 'b')}
          className={`
            w-32 sm:w-44 lg:w-52 rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between border-3 transition-all cursor-pointer shadow-2xl shrink-0
            ${activeSpeaker === 'b'
              ? 'bg-cyan-900/90 border-cyan-400 ring-4 ring-cyan-400/40 shadow-cyan-500/30'
              : 'bg-cyan-950/75 hover:bg-cyan-900/85 border-cyan-400/30 backdrop-blur-md'}
          `}
        >
          <span className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-wider text-cyan-200 bg-cyan-500/40 px-3 py-1.5 rounded-full border border-cyan-300/30 shadow">
            {currentRoleB.label} ⭐
          </span>
          <div className="text-6xl sm:text-7xl lg:text-8xl my-auto drop-shadow-2xl transform hover:scale-110 transition-transform">
            {currentRoleB.avatar ?? '👨‍🎓'}
          </div>
          <div className="w-full text-center">
            <p className="font-black text-lg sm:text-2xl lg:text-3xl text-white leading-tight">
              {currentRoleB.action}
            </p>
            {currentRoleB.actionEs && (
              <p className="text-xs sm:text-sm lg:text-base font-bold text-cyan-200/80 mt-1">
                {currentRoleB.actionEs}
              </p>
            )}
            <div className={`p-3 rounded-full mt-2.5 mx-auto w-fit transition-all ${activeSpeaker === 'b' ? 'bg-cyan-400 text-cyan-950 shadow-lg scale-110' : 'bg-white/15 text-white/80'}`}>
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══ 4. BOTTOM HELP WORDS BAR ═══ */}
      {helpWords.length > 0 && (
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap shrink-0 py-1.5 px-1">
          {helpWords.map((hw, idx) => {
            const isPlaying = playingWord === hw.word;
            return (
              <motion.button
                key={idx}
                type="button"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlayWord(hw.word)}
                className={`
                  flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl font-black shadow-xl border-2 transition-all text-left min-h-[60px] sm:min-h-[72px]
                  ${isPlaying
                    ? 'bg-amber-300 border-amber-400 text-amber-950 ring-2 ring-amber-400/50 scale-105 shadow-amber-400/30'
                    : 'bg-white/95 hover:bg-white text-slate-900 border-white/70 backdrop-blur-md'}
                `}
              >
                {hw.emoji && <span className="text-2xl sm:text-3xl lg:text-4xl leading-none">{hw.emoji}</span>}
                <div className="flex flex-col">
                  <span className="font-black text-base sm:text-xl lg:text-2xl text-slate-900 leading-tight flex items-center gap-1.5">
                    {hw.word}
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 opacity-80" />
                  </span>
                  {hw.translation && (
                    <span className="text-xs sm:text-sm lg:text-base text-slate-700 font-extrabold leading-none mt-0.5">
                      {hw.translation}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* ═══ 5. "VER FRASES" MODAL ═══ */}
      <AnimatePresence>
        {showPhrasesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-slate-900 border-2 border-white/20 rounded-3xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl flex flex-col gap-4 text-white max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-500/30 text-purple-300">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl sm:text-2xl text-white">
                      Frases de Apoyo / Support Phrases
                    </h3>
                    <p className="text-sm text-white/70">
                      Usa estas frases de ejemplo para guiar la conversación en inglés.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPhrasesModal(false)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Phrases Grid: Ask on Left, Answer on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column Ask */}
                <div className="flex flex-col gap-3 rounded-2xl bg-purple-950/60 p-4 sm:p-5 border border-purple-400/30">
                  <div className="flex items-center gap-2.5 font-black text-purple-300 text-base sm:text-lg pb-2 border-b border-purple-400/20">
                    <span className="text-2xl">{currentRoleA.avatar ?? '👩‍🏫'}</span>
                    <span>{currentRoleA.label} ({currentRoleA.action})</span>
                  </div>
                  <div className="space-y-2.5 mt-1">
                    {hiddenPhrases.ask.map((p, idx) => (
                      <div
                        key={idx}
                        onClick={() => playAudio(p.en, 'en-US')}
                        className="group flex flex-col p-3.5 sm:p-4 rounded-2xl bg-white/95 hover:bg-white text-slate-900 cursor-pointer transition-all shadow border border-purple-200"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-black text-base sm:text-xl leading-snug">
                            "{p.en}"
                          </span>
                          <Volume2 className="w-5 h-5 text-purple-600 opacity-60 group-hover:opacity-100 shrink-0" />
                        </div>
                        {p.es && (
                          <span className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
                            🇪🇸 {p.es}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column Answer */}
                <div className="flex flex-col gap-3 rounded-2xl bg-cyan-950/60 p-4 sm:p-5 border border-cyan-400/30">
                  <div className="flex items-center gap-2.5 font-black text-cyan-300 text-base sm:text-lg pb-2 border-b border-cyan-400/20">
                    <span className="text-2xl">{currentRoleB.avatar ?? '👨‍🎓'}</span>
                    <span>{currentRoleB.label} ({currentRoleB.action})</span>
                  </div>
                  <div className="space-y-2.5 mt-1">
                    {hiddenPhrases.answer.map((p, idx) => (
                      <div
                        key={idx}
                        onClick={() => playAudio(p.en, 'en-US')}
                        className="group flex flex-col p-3.5 sm:p-4 rounded-2xl bg-white/95 hover:bg-white text-slate-900 cursor-pointer transition-all shadow border border-cyan-200"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-black text-base sm:text-xl leading-snug">
                            "{p.en}"
                          </span>
                          <Volume2 className="w-5 h-5 text-cyan-600 opacity-60 group-hover:opacity-100 shrink-0" />
                        </div>
                        {p.es && (
                          <span className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
                            🇪🇸 {p.es}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close footer */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowPhrasesModal(false)}
                  className="px-6 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-base transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
