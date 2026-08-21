import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Users2,
  Volume2,
  RefreshCcw,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  MessageCircleQuestion,
  UserCheck,
  Flame,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { ClassSlide } from '../types';
import { playAudio } from '../lib/audio';

interface LetsSayCardProps {
  slide: ClassSlide;
}

interface ParsedRolePlay {
  scenario: string;
  scenarioEs?: string;
  situation: string;
  situationEs?: string;
  roleA: {
    label: string;
    labelEs?: string;
    goal: string;
    goalEs?: string;
    phrases: string[];
    vocabulary: string[];
  };
  roleB: {
    label: string;
    labelEs?: string;
    goal: string;
    goalEs?: string;
    phrases: string[];
    vocabulary: string[];
  };
  steps: Array<{
    id: string;
    speaker: 'a' | 'b' | 'both';
    title: string;
    titleEs?: string;
    instruction: string;
    instructionEs?: string;
    phrases: string[];
    vocabulary: string[];
  }>;
  checklist: Array<{ text: string; textEs: string }>;
}

export function LetsSayCard({ slide }: LetsSayCardProps) {
  // Parse or normalize roleplay data
  const data = useMemo<ParsedRolePlay>(() => {
    const raw = slide.roleplay;
    const content = slide.content || [];
    
    // Clean title and scenario
    const rawTitle = slide.title || 'Let\'s Say...';
    const cleanTitle = rawTitle.replace(/Roleplay:?|Juego de Roles:?|Production/gi, '').replace(/\//g, '·').trim() || 'Conversation Challenge';
    
    // Extract Student A / B from content lines if raw.roleplay is missing
    let studentALine = '';
    let studentBLine = '';
    let actionLine = '';
    const otherLines: string[] = [];

    content.forEach((line) => {
      const lower = line.toLowerCase();
      if (lower.startsWith('student a:') || lower.startsWith('player a:') || lower.startsWith('a:')) {
        studentALine = line.replace(/^(student|player)?\s*[aA]:\s*/i, '').trim();
      } else if (lower.startsWith('student b:') || lower.startsWith('player b:') || lower.startsWith('b:')) {
        studentBLine = line.replace(/^(student|player)?\s*[bB]:\s*/i, '').trim();
      } else if (lower.startsWith('action:') || lower.startsWith('goal:') || lower.startsWith('misión:')) {
        actionLine = line.replace(/^(action|goal|misión|mission):\s*/i, '').trim();
      } else {
        otherLines.push(line);
      }
    });

    if (raw) {
      const roleALabel = raw.roles?.a?.label || 'Student A';
      const roleBLabel = raw.roles?.b?.label || 'Student B';
      const roleAGoal = raw.roles?.a?.goal || 'Ask questions and start the conversation.';
      const roleBGoal = raw.roles?.b?.goal || 'Answer questions and share details.';

      const useful = raw.usefulPhrases || [];
      const halfPhrases = Math.ceil(useful.length / 2);
      const phrasesA = useful.slice(0, halfPhrases);
      const phrasesB = useful.slice(halfPhrases);

      const parsedSteps = raw.steps && raw.steps.length > 0 ? raw.steps.map((s, idx) => ({
        id: s.id || `step-${idx}`,
        speaker: s.speaker,
        title: s.title || `Turn ${idx + 1}`,
        instruction: s.instruction || '',
        phrases: s.phrases || [],
        vocabulary: s.vocabulary || []
      })) : [
        {
          id: 'step-1',
          speaker: 'a' as const,
          title: 'Start the conversation',
          titleEs: 'Inicia la conversación',
          instruction: roleAGoal,
          phrases: phrasesA.length > 0 ? phrasesA : ['Hello! How are you?', 'Can I ask you something?'],
          vocabulary: []
        },
        {
          id: 'step-2',
          speaker: 'b' as const,
          title: 'Respond and interact',
          titleEs: 'Responde e interactúa',
          instruction: roleBGoal,
          phrases: phrasesB.length > 0 ? phrasesB : ['Hi! I am great, thank you.', 'Sure, go ahead!'],
          vocabulary: []
        }
      ];

      return {
        scenario: raw.scenario || cleanTitle,
        scenarioEs: 'Situación de práctica',
        situation: raw.situation || raw.conversationGoal || slide.description || 'Practice speaking with your partner using today\'s English.',
        situationEs: 'Practica hablando con tu compañero usando el inglés de la clase de hoy.',
        roleA: {
          label: roleALabel,
          labelEs: 'Participante A',
          goal: roleAGoal,
          goalEs: 'Inicia y pregunta',
          phrases: phrasesA.length > 0 ? phrasesA : ['Hello! How can I help you?', 'What is your favorite...?'],
          vocabulary: []
        },
        roleB: {
          label: roleBLabel,
          labelEs: 'Participante B',
          goal: roleBGoal,
          goalEs: 'Responde y complementa',
          phrases: phrasesB.length > 0 ? phrasesB : ['Hi! I would like...', 'My favorite is...'],
          vocabulary: []
        },
        steps: parsedSteps,
        checklist: (raw.successChecklist && raw.successChecklist.length > 0) ? raw.successChecklist.map((c) => ({
          text: c,
          textEs: 'Completado con éxito'
        })) : [
          { text: 'Used today\'s key vocabulary', textEs: 'Usó el vocabulario clave de hoy' },
          { text: 'Asked and answered clearly', textEs: 'Preguntó y respondió con claridad' },
          { text: 'Good pronunciation & flow', textEs: 'Buena pronunciación y fluidez' }
        ]
      };
    }

    // Fallback from regular slide content
    const roleAGoal = studentALine || otherLines[0] || 'Start the conversation and ask key questions.';
    const roleBGoal = studentBLine || otherLines[1] || 'Respond with complete ideas and details.';

    return {
      scenario: cleanTitle,
      scenarioEs: 'Escenario de conversación',
      situation: actionLine || slide.description || 'Work in pairs. Act out the situation using the phrases below.',
      situationEs: 'Trabajen en parejas. Dramaticen la situación usando las frases de apoyo.',
      roleA: {
        label: 'Participant A / Rol A',
        labelEs: 'Inicia y pregunta',
        goal: roleAGoal,
        goalEs: 'Pide información o expresa tu idea.',
        phrases: studentALine ? [studentALine] : ['Hello! Nice to talk to you.', 'Can you tell me more?'],
        vocabulary: otherLines.slice(2, 5)
      },
      roleB: {
        label: 'Participant B / Rol B',
        labelEs: 'Responde y aporta',
        goal: roleBGoal,
        goalEs: 'Responde con entusiasmo y detalles.',
        phrases: studentBLine ? [studentBLine] : ['Hi! Of course!', 'Here is what I think...'],
        vocabulary: otherLines.slice(5, 8)
      },
      steps: [
        {
          id: 'step-1',
          speaker: 'a' as const,
          title: 'Participant A speaks',
          titleEs: 'Turno del Participante A',
          instruction: roleAGoal,
          instructionEs: 'Inicia la conversación con la frase indicada.',
          phrases: studentALine ? [studentALine] : ['Hello! Let\'s practice.'],
          vocabulary: []
        },
        {
          id: 'step-2',
          speaker: 'b' as const,
          title: 'Participant B replies',
          titleEs: 'Turno del Participante B',
          instruction: roleBGoal,
          instructionEs: 'Responde y haz una pregunta de vuelta.',
          phrases: studentBLine ? [studentBLine] : ['Great! Here is my response.'],
          vocabulary: []
        }
      ],
      checklist: [
        { text: 'Used today\'s key vocabulary', textEs: 'Usó el vocabulario clave de la clase' },
        { text: 'Asked & answered in English', textEs: 'Preguntó y respondió en inglés' },
        { text: 'Natural rhythm & confidence', textEs: 'Ritmo natural y buena confianza' }
      ]
    };
  }, [slide]);

  // State
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<'a' | 'b' | null>(null);
  const [viewMode, setViewMode] = useState<'dual' | 'steps'>('dual');
  const [stepIndex, setStepIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [celebrated, setCelebrated] = useState(false);

  // Swapped effective roles
  const activeRoleA = isSwapped ? data.roleB : data.roleA;
  const activeRoleB = isSwapped ? data.roleA : data.roleB;
  const displayNameA = (isSwapped ? (nameB || 'Player B') : (nameA || 'Player A')).trim();
  const displayNameB = (isSwapped ? (nameA || 'Player A') : (nameB || 'Player B')).trim();

  // Completion
  const isAllChecked = checkedItems.length === data.checklist.length && checkedItems.every(Boolean);

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const next = [...prev];
      while (next.length <= index) next.push(false);
      next[index] = !next[index];
      return next;
    });
  };

  useEffect(() => {
    if (isAllChecked && !celebrated) {
      setCelebrated(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#a855f7', '#10b981', '#f59e0b', '#ec4899']
      });
    }
  }, [isAllChecked, celebrated]);

  const handleSwapRoles = () => {
    setIsSwapped((prev) => !prev);
    setActiveSpeaker(null);
    setStepIndex(0);
  };

  const handlePlayVoice = (text: string) => {
    // Strip emojis or stage cues like (smiles)
    const cleanText = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').replace(/\(.*?\)/g, '').trim();
    playAudio(cleanText, 'en-US');
  };

  const currentStep = data.steps[stepIndex] || data.steps[0];
  const stepSpeaker = currentStep.speaker === 'both' ? 'both' : (isSwapped ? (currentStep.speaker === 'a' ? 'b' : 'a') : currentStep.speaker);
  const stepSpeakerName = stepSpeaker === 'a' ? displayNameA : stepSpeaker === 'b' ? displayNameB : `${displayNameA} & ${displayNameB}`;

  return (
    <div className="flex flex-col h-full w-full min-h-0 text-white select-none">
      {/* 🌟 Animated Top Bar: "Let's Say... 💬" */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2 sm:mb-3 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 text-white font-black text-sm sm:text-lg shadow-lg shadow-pink-500/20 tracking-wide"
          >
            <Sparkles className="w-5 h-5 animate-spin text-amber-200" style={{ animationDuration: '6s' }} />
            <span>LET'S SAY...</span>
            <span className="opacity-90 font-bold text-xs sm:text-sm bg-black/25 px-2 py-0.5 rounded-lg ml-1">💬 ¡A Hablar!</span>
          </motion.div>

          <div className="hidden md:block min-w-0 truncate">
            <span className="text-white/80 font-bold text-sm sm:text-base truncate block">
              🎭 {data.scenario}
            </span>
          </div>
        </div>

        {/* View Controls & Swap */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-black/30 p-1 rounded-xl flex items-center gap-1 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode('dual')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all ${
                viewMode === 'dual' ? 'bg-white text-slate-900 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Vista Completa</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('steps')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all ${
                viewMode === 'steps' ? 'bg-white text-slate-900 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Paso a Paso</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleSwapRoles}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-black text-xs sm:text-sm shadow-md transition-all"
            title="Cambiar turnos y roles"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Switch Roles 🔄</span>
          </button>
        </div>
      </div>

      {/* 🎯 Scenario & Goal Banner */}
      <div className="mb-3 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm sm:text-base md:text-lg font-bold leading-snug">
            <span className="text-amber-300 font-black uppercase tracking-wider text-xs sm:text-sm mr-2">🎯 MISSION:</span>
            {data.situation}
          </p>
          {data.situationEs && (
            <p className="text-white/75 text-xs sm:text-sm font-medium italic mt-0.5">
              {data.situationEs}
            </p>
          )}
        </div>
        {activeSpeaker && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-400 text-cyan-950 font-black text-xs sm:text-sm shadow-md shrink-0"
          >
            <Flame className="w-4 h-4 text-orange-600 animate-bounce" />
            <span>Hablando: {activeSpeaker === 'a' ? displayNameA : displayNameB}</span>
          </motion.div>
        )}
      </div>

      {/* 🎭 Main Interaction Body */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1">
        {viewMode === 'dual' ? (
          /* ================= DUAL STAGE (VISTA EN PAREJAS) ================= */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 h-full">
            {/* 🔵 CARD PLAYER A */}
            <motion.div
              layout
              className={`flex flex-col rounded-3xl p-4 sm:p-5 transition-all border-4 shadow-xl ${
                activeSpeaker === 'a'
                  ? 'bg-slate-900/95 border-sky-400 ring-4 ring-sky-400/30'
                  : 'bg-slate-950/85 border-sky-500/40 hover:border-sky-400/80'
              }`}
            >
              {/* Card Header A */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-sky-500/30 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black shadow-md shrink-0">
                    <MessageCircleQuestion className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-black uppercase tracking-wider text-sky-300 block">
                      ROL 1 · {activeRoleA.labelEs || 'Inicia'}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-white truncate">
                      {activeRoleA.label}
                    </h3>
                  </div>
                </div>

                {/* Name Input / Badge A */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <input
                    type="text"
                    value={isSwapped ? nameB : nameA}
                    onChange={(e) => isSwapped ? setNameB(e.target.value) : setNameA(e.target.value)}
                    placeholder="Nombre A"
                    className="w-24 sm:w-32 px-2.5 py-1.5 rounded-xl bg-white/10 border border-sky-300/40 text-white font-bold text-xs sm:text-sm text-center focus:outline-none focus:border-sky-300 placeholder:text-white/40"
                  />
                  <button
                    type="button"
                    onClick={() => setActiveSpeaker(activeSpeaker === 'a' ? null : 'a')}
                    className={`p-2 rounded-xl transition-all ${
                      activeSpeaker === 'a' ? 'bg-sky-400 text-sky-950 shadow-lg' : 'bg-white/10 text-sky-300 hover:bg-white/20'
                    }`}
                    title="Marcar turno de habla"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Goal A */}
              <div className="my-3 p-3 rounded-2xl bg-sky-950/60 border border-sky-500/30">
                <p className="text-sky-200 text-sm sm:text-base font-bold leading-snug">
                  👉 <span className="font-extrabold text-white">Tu Misión:</span> {activeRoleA.goal}
                </p>
                {activeRoleA.goalEs && (
                  <p className="text-sky-300/70 text-xs sm:text-sm italic mt-0.5">
                    ({activeRoleA.goalEs})
                  </p>
                )}
              </div>

              {/* Useful Phrases A */}
              <div className="flex-1 flex flex-col justify-start gap-2 min-h-0">
                <span className="text-xs font-black uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Frases para decir / Useful Lines:
                </span>
                <div className="space-y-2 overflow-y-auto pr-1">
                  {activeRoleA.phrases.map((phrase, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => handlePlayVoice(phrase)}
                      className="group flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/95 hover:bg-white text-slate-900 font-extrabold text-base sm:text-xl shadow-md cursor-pointer transition-all border border-sky-200"
                    >
                      <span className="flex-1 leading-snug">“{phrase}”</span>
                      <button
                        type="button"
                        className="p-2 rounded-xl bg-sky-100 group-hover:bg-sky-500 group-hover:text-white text-sky-700 transition-colors shrink-0"
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Vocabulary Chips A if any */}
                {activeRoleA.vocabulary && activeRoleA.vocabulary.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-sky-500/20 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-bold uppercase text-sky-300 mr-1">Palabras clave:</span>
                    {activeRoleA.vocabulary.map((v, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-sky-600/40 text-sky-100 font-bold text-xs border border-sky-400/30">
                        {v}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* 🟣 CARD PLAYER B */}
            <motion.div
              layout
              className={`flex flex-col rounded-3xl p-4 sm:p-5 transition-all border-4 shadow-xl ${
                activeSpeaker === 'b'
                  ? 'bg-slate-900/95 border-emerald-400 ring-4 ring-emerald-400/30'
                  : 'bg-slate-950/85 border-emerald-500/40 hover:border-emerald-400/80'
              }`}
            >
              {/* Card Header B */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-emerald-500/30 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-black shadow-md shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-300 block">
                      ROL 2 · {activeRoleB.labelEs || 'Responde'}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-white truncate">
                      {activeRoleB.label}
                    </h3>
                  </div>
                </div>

                {/* Name Input / Badge B */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <input
                    type="text"
                    value={isSwapped ? nameA : nameB}
                    onChange={(e) => isSwapped ? setNameA(e.target.value) : setNameB(e.target.value)}
                    placeholder="Nombre B"
                    className="w-24 sm:w-32 px-2.5 py-1.5 rounded-xl bg-white/10 border border-emerald-300/40 text-white font-bold text-xs sm:text-sm text-center focus:outline-none focus:border-emerald-300 placeholder:text-white/40"
                  />
                  <button
                    type="button"
                    onClick={() => setActiveSpeaker(activeSpeaker === 'b' ? null : 'b')}
                    className={`p-2 rounded-xl transition-all ${
                      activeSpeaker === 'b' ? 'bg-emerald-400 text-emerald-950 shadow-lg' : 'bg-white/10 text-emerald-300 hover:bg-white/20'
                    }`}
                    title="Marcar turno de habla"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Goal B */}
              <div className="my-3 p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
                <p className="text-emerald-200 text-sm sm:text-base font-bold leading-snug">
                  👉 <span className="font-extrabold text-white">Tu Misión:</span> {activeRoleB.goal}
                </p>
                {activeRoleB.goalEs && (
                  <p className="text-emerald-300/70 text-xs sm:text-sm italic mt-0.5">
                    ({activeRoleB.goalEs})
                  </p>
                )}
              </div>

              {/* Useful Phrases B */}
              <div className="flex-1 flex flex-col justify-start gap-2 min-h-0">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Frases para responder / Useful Lines:
                </span>
                <div className="space-y-2 overflow-y-auto pr-1">
                  {activeRoleB.phrases.map((phrase, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => handlePlayVoice(phrase)}
                      className="group flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/95 hover:bg-white text-slate-900 font-extrabold text-base sm:text-xl shadow-md cursor-pointer transition-all border border-emerald-200"
                    >
                      <span className="flex-1 leading-snug">“{phrase}”</span>
                      <button
                        type="button"
                        className="p-2 rounded-xl bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white text-emerald-700 transition-colors shrink-0"
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Vocabulary Chips B if any */}
                {activeRoleB.vocabulary && activeRoleB.vocabulary.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-emerald-500/20 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-bold uppercase text-emerald-300 mr-1">Palabras clave:</span>
                    {activeRoleB.vocabulary.map((v, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-600/40 text-emerald-100 font-bold text-xs border border-emerald-400/30">
                        {v}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : (
          /* ================= STEP BY STEP (MODO GUIADO) ================= */
          <div className="flex flex-col h-full bg-slate-950/90 rounded-3xl p-5 border-4 border-violet-500/40 shadow-2xl justify-between">
            {/* Step Header */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-violet-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider">
                  Paso {stepIndex + 1} de {data.steps.length}
                </span>
                <span className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-black ${
                  stepSpeaker === 'a' ? 'bg-sky-400 text-sky-950' : 'bg-emerald-400 text-emerald-950'
                }`}>
                  🎤 Habla: {stepSpeakerName}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={stepIndex === 0}
                  onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  disabled={stepIndex >= data.steps.length - 1}
                  onClick={() => setStepIndex((prev) => Math.min(data.steps.length - 1, prev + 1))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Step Content */}
            <div className="my-auto py-4 flex flex-col gap-4 max-w-4xl mx-auto w-full">
              <div className="text-center">
                <h2 className="text-2xl sm:text-4xl font-black text-white mb-2">
                  {currentStep.title}
                </h2>
                <p className="text-lg sm:text-2xl font-bold text-amber-300">
                  {currentStep.instruction}
                </p>
                {currentStep.instructionEs && (
                  <p className="text-white/70 text-sm sm:text-base italic mt-1">
                    ({currentStep.instructionEs})
                  </p>
                )}
              </div>

              {/* Suggested Phrases in big cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {currentStep.phrases.map((phrase, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handlePlayVoice(phrase)}
                    className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white text-slate-900 font-black text-lg sm:text-2xl shadow-xl cursor-pointer hover:bg-amber-50 border-2 border-amber-200 transition-all"
                  >
                    <span className="leading-snug">“{phrase}”</span>
                    <div className="p-2 rounded-xl bg-violet-100 text-violet-700 shrink-0">
                      <Volume2 className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Next Turn Preview */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/70 shrink-0">
              <span>Consejo: Escuchen con atención antes de responder.</span>
              {stepIndex < data.steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStepIndex((prev) => prev + 1)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black flex items-center gap-2 hover:brightness-110 shadow-lg"
                >
                  <span>Siguiente Turno</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setViewMode('dual')}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-black flex items-center gap-2 hover:brightness-110 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ver Checklist Final</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 🏆 Quick Victory Checklist & Celebration Footer */}
      <div className="mt-2.5 p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Checklist de Clase:
          </span>
          {data.checklist.map((item, index) => {
            const isChecked = Boolean(checkedItems[index]);
            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleCheck(index)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                  isChecked
                    ? 'bg-emerald-500 text-white border-emerald-400 shadow-md scale-105'
                    : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/20'
                }`}
              >
                <div className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-black ${
                  isChecked ? 'bg-white text-emerald-700' : 'bg-white/20 text-white'
                }`}>
                  {isChecked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : index + 1}
                </div>
                <span>{item.textEs || item.text}</span>
              </button>
            );
          })}
        </div>

        {isAllChecked && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-950 font-black text-xs sm:text-sm shadow-lg"
          >
            <span>🎉 ¡Misión Cumplida!</span>
            <button
              type="button"
              onClick={handleSwapRoles}
              className="ml-1 underline font-extrabold hover:text-white"
            >
              ¡Invertir Roles y Repetir!
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
