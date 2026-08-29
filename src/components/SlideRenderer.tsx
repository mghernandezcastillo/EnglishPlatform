/**
 * SlideRenderer — renders a single ClassSlide exactly as PresentationViewer does,
 * but as an embeddable component (no fixed overlay).
 *
 * compact=true: renders at 1280×720 then CSS-scales to the wrapper size,
 * preserving 16:9 aspect ratio and exact typography from the real player.
 */
import { useState, useEffect, useMemo, useCallback, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Check, Play, ArrowRight, Target, BookOpen, Users, MessageSquare, HelpCircle, Sparkles, Eye, EyeOff, Zap, Volume2, RotateCcw, Layers3, Lightbulb, BookmarkPlus, CheckCircle2, ChevronRight, ChevronLeft, VolumeX, X, Maximize2, Star, LayoutGrid, Flame, Award } from 'lucide-react';
import { CurriculumClass, ClassSection, ClassSlide } from '../types';
import { vocabService } from '../lib/vocabService';
import { SpinningWheel } from './SpinningWheel';
import { MatchingGame } from './MatchingGame';
import { MysteryPuzzleGame } from './MysteryPuzzleGame';
import { EmojiMadnessGame } from './EmojiMadnessGame';
import { SpeakingBossBattleGame } from './SpeakingBossBattleGame';
import { InlineAiSpeakingAssistant } from './InlineAiSpeakingAssistant';
import { StructureDragExercise } from './StructureDragExercise';
import { RolePlayCard } from './RolePlayCard';
import { AlphabetPronunciationGame } from './AlphabetPronunciationGame';
import { AccuracyContrastCard } from './AccuracyContrastCard';
import { VocabularyFlipCards } from './VocabularyFlipCards';
import { HomeworkSlideCard } from './HomeworkSlideCard';
import { VideoHomeworkSlideCard } from './VideoHomeworkSlideCard';
import { SlideSelectionTranslator } from './SlideSelectionTranslator';
import { StoryDecoderVocabTool } from './StoryDecoderVocabTool';
import { fireClassCompletionConfetti } from '../lib/celebration';
import confetti from 'canvas-confetti';

const VerbArenaGame = lazy(() => import('./VerbArenaGame').then(m => ({ default: m.VerbArenaGame })));

const COMPACT_W = 1280;
const COMPACT_H = 720;

const GOAL_CARD_STYLES = [
  {
    bg: 'bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600',
    border: 'border-pink-300/40',
    glow: 'shadow-pink-500/25',
    icon: MessageSquare,
  },
  {
    bg: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700',
    border: 'border-indigo-300/40',
    glow: 'shadow-indigo-500/25',
    icon: HelpCircle,
  },
  {
    bg: 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700',
    border: 'border-cyan-300/40',
    glow: 'shadow-cyan-500/25',
    icon: Users,
  },
];

const AVATAR_PRESETS: Record<string, { bg: string; color: string; border: string; glow: string; emoji: string }> = {
  alex: { bg: 'bg-gradient-to-tr from-cyan-600 to-blue-500', color: 'text-cyan-300', border: 'border-cyan-400', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.6)]', emoji: '👦' },
  sam: { bg: 'bg-gradient-to-tr from-pink-600 to-rose-500', color: 'text-pink-300', border: 'border-pink-400', glow: 'shadow-[0_0_15px_rgba(236,72,153,0.6)]', emoji: '👧' },
  you: { bg: 'bg-gradient-to-tr from-pink-600 to-rose-500', color: 'text-pink-300', border: 'border-pink-400', glow: 'shadow-[0_0_15px_rgba(236,72,153,0.6)]', emoji: '👧' },
  mike: { bg: 'bg-gradient-to-tr from-amber-600 to-orange-500', color: 'text-amber-300', border: 'border-amber-400', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.6)]', emoji: '🧑' },
  sarah: { bg: 'bg-gradient-to-tr from-purple-600 to-violet-500', color: 'text-purple-300', border: 'border-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.6)]', emoji: '👩' },
  emma: { bg: 'bg-gradient-to-tr from-emerald-600 to-teal-500', color: 'text-emerald-300', border: 'border-emerald-400', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.6)]', emoji: '👱‍♀️' },
};

interface SlideRendererProps {
  cls: CurriculumClass;
  section: ClassSection;
  slide: ClassSlide;
  currentIndex: number;
  totalSlides: number;
  onComplete?: () => void;
  onNext?: () => void;
  hideTeacherNote?: boolean;
  className?: string;
  studentId?: string | null;
  /**
   * Renders at 1280×720 and CSS-scales to the wrapper.
   * Wrapper must have a fixed width; height is auto (aspect-ratio: 16/9).
   */
  compact?: boolean;
}

export function resolveGoalsList(slide: ClassSlide, cls?: CurriculumClass): string[] {
  let candidates: string[] = [];

  if (Array.isArray(slide.objectives) && slide.objectives.length > 0) {
    candidates = slide.objectives;
  } else if (Array.isArray(slide.content) && slide.content.length > 0) {
    const rawLines = slide.content.map((l) => (typeof l === 'string' ? l.trim() : '')).filter(Boolean);
    const bulletsOnly = rawLines
      .filter((line) => !/^🎯\s*¿Qué vamos|^💬\s*La frase|^🗣️\s*Prueba|^👥|^\d+\s*$/i.test(line))
      .map((line) => line.replace(/^[•✔️\s*\d.-]+/, '').trim())
      .filter((line) => line.length > 3);

    if (bulletsOnly.length >= 3) {
      candidates = bulletsOnly.slice(0, 3);
    } else if (bulletsOnly.length > 0) {
      candidates = bulletsOnly;
    } else {
      candidates = rawLines.map((line) => line.replace(/^[•✔️\s*\d.-]+/, '').trim()).filter(Boolean);
    }
  }

  const cleanGoals = candidates
    .map((g) => g.replace(/^[•✔️\s*\d.-]+/, '').trim())
    .filter((g) => g.length > 0 && !/^🎯\s*¿Qué vamos|^💬\s*La frase|^🗣️\s*Prueba|^👥|^\d+\s*$/i.test(g));

  if (cleanGoals.length >= 3) {
    return cleanGoals.slice(0, 3);
  }

  if (cleanGoals.length === 1 || cleanGoals.length === 2) {
    return [
      ...cleanGoals,
      "Construir oraciones y preguntas con la gramática de la lección.",
      "Participar activamente en la práctica oral y desafíos de la clase."
    ].slice(0, 3);
  }

  if (slide.description && slide.description.trim().length > 0 && !/^Master the topic of/i.test(slide.description.trim())) {
    return [
      slide.description.trim(),
      "Practicar la pronunciación, vocabulario y estructuras de la clase.",
      "Desarrollar fluidez comunicativa y confianza oral."
    ];
  }
  if (cls?.objective && cls.objective.trim().length > 0 && !/^Master the topic of/i.test(cls.objective.trim())) {
    return [
      cls.objective.trim(),
      "Aplicar las estructuras y vocabulario en situaciones reales.",
      "Ganar agilidad y seguridad comunicativa al hablar."
    ];
  }
  const rawDesc = slide.description || cls?.objective || '';
  const matchTopic = rawDesc.match(/Master the topic of\s*(.*)/i) || cls?.title?.match(/(?:Class\s*\d+:?\s*)(.*)/i);
  const topicName = matchTopic ? matchTopic[1].split('/')[0].trim() : 'los temas clave de hoy';
  return [
    `Dominar el vocabulario y expresiones clave de ${topicName}.`,
    "Construir oraciones y preguntas con la gramática de la lección.",
    "Participar activamente en la práctica oral y desafíos de la clase."
  ];
}

export function resolveStoryDecoderLines(slide?: ClassSlide | null): any[] {
  if (!slide) return [];
  const data = slide.storyDecoderData;
  if (!data) return [];
  if (Array.isArray(data.lines) && data.lines.length > 0) return data.lines;
  if (Array.isArray((data as any).sentences) && (data as any).sentences.length > 0) return (data as any).sentences;
  if (Array.isArray(data) && data.length > 0) return data;
  return [];
}

export function resolveVerbArenaPool(slide?: ClassSlide | null): any[] | undefined {
  if (!slide) return undefined;
  const rawPool = (slide as any).verbsData || (slide as any).verbs || slide.vocabularyCards || slide.verbArenaData?.verbs || (slide.verbArenaData as any)?.customWords;
  if (!rawPool || !Array.isArray(rawPool) || rawPool.length === 0) return undefined;
  
  return rawPool.map((c: any) => {
    if (typeof c === 'string') {
      return {
        term: c,
        word: c,
        verb: c,
        meaning: '',
        meaning_es: '',
        translation: '',
        category: 'common_verb',
      };
    }
    const term = c.term ?? c.verb ?? c.word ?? c.name ?? '';
    const meaning = c.meaning ?? c.translation ?? c.meaning_es ?? c.es ?? '';
    const meaning_es = c.meaning_es ?? c.meaning ?? c.translation ?? c.es ?? '';
    return {
      term,
      word: term,
      verb: term,
      meaning,
      meaning_es,
      translation: meaning,
      example_en: c.example_en ?? c.example ?? c.en ?? '',
      past: c.past ?? '',
      past_participle: c.past_participle ?? c.participle ?? '',
      pronunciation: c.pronunciation ?? '',
      category: c.category ?? 'common_verb',
    };
  });
}

export function resolveWritingCardData(slide?: ClassSlide | null, tab: 'positive' | 'negative' | 'question' = 'positive'): {
  title: string;
  instruction: string;
  placeholder: string;
  formula: string;
  example: string;
} {
  if (!slide) {
    return {
      title: tab === 'positive' ? 'Afirmativa' : tab === 'negative' ? 'Negativa' : 'Pregunta',
      instruction: '',
      placeholder: '',
      formula: '',
      example: ''
    };
  }

  const wd = slide.writingData || (slide as any).guidedWritingData || {};
  const wp = (slide as any).writingPrompts || [];

  // 1. Array of writingPrompts (used in many classes)
  if (Array.isArray(wp) && wp.length > 0) {
    const promptItem = wp.find((p: any) => 
      (tab === 'positive' && (p.type === 'positive' || p.type === 'affirmative' || p.id?.includes('pos') || p.id?.includes('aff'))) ||
      (tab === 'negative' && (p.type === 'negative' || p.id?.includes('neg'))) ||
      (tab === 'question' && (p.type === 'question' || p.id?.includes('q')))
    ) || (tab === 'positive' ? wp[0] : tab === 'negative' ? wp[1] : wp[2]);

    if (promptItem) {
      const placeholder = promptItem.placeholder || (promptItem.example ? `Ej: ${promptItem.example}` : '');
      const example = promptItem.example || (promptItem.placeholder ? promptItem.placeholder.replace(/^Ej:\s*/i, '') : '');
      return {
        title: promptItem.title || promptItem.label || (tab === 'positive' ? 'Afirmativa' : tab === 'negative' ? 'Negativa' : 'Pregunta'),
        instruction: promptItem.instruction || promptItem.prompt || '',
        placeholder: placeholder,
        formula: promptItem.formula || promptItem.helper || '',
        example: example
      };
    }
  }

  // 2. Array of cards in writingData.cards
  if (Array.isArray(wd.cards) && wd.cards.length > 0) {
    const cardItem = wd.cards.find((c: any) => 
      (tab === 'positive' && (c.type === 'positive' || c.type === 'affirmative' || c.id?.includes('pos') || c.id?.includes('aff'))) ||
      (tab === 'negative' && (c.type === 'negative' || c.id?.includes('neg'))) ||
      (tab === 'question' && (c.type === 'question' || c.id?.includes('q')))
    ) || (tab === 'positive' ? wd.cards[0] : tab === 'negative' ? wd.cards[1] : wd.cards[2]);

    if (cardItem) {
      const placeholder = cardItem.placeholder || (cardItem.example ? `Ej: ${cardItem.example}` : '');
      const example = cardItem.example || (cardItem.placeholder ? cardItem.placeholder.replace(/^Ej:\s*/i, '') : '');
      return {
        title: cardItem.label || cardItem.title || (tab === 'positive' ? 'Afirmativa' : tab === 'negative' ? 'Negativa' : 'Pregunta'),
        instruction: cardItem.prompt || cardItem.instruction || '',
        placeholder: placeholder,
        formula: cardItem.helper || cardItem.formula || '',
        example: example
      };
    }
  }

  // 3. Properties positivePrompt, negativePrompt, questionPrompt
  const prefix = tab; // 'positive' | 'negative' | 'question'
  const prompt = wd[`${prefix}Prompt`] || wd[`${prefix}Instruction`];
  const formula = wd[`${prefix}Formula`] || wd[`${prefix}Helper`];
  const example = wd[`${prefix}Example`];
  const placeholder = wd[`${prefix}Placeholder`] || (example ? `Ej: ${example}` : '');

  if (prompt || formula || example || placeholder) {
    return {
      title: tab === 'positive' ? 'Afirmativa' : tab === 'negative' ? 'Negativa' : 'Pregunta',
      instruction: prompt || '',
      placeholder: placeholder || (example ? `Ej: ${example}` : ''),
      formula: formula || '',
      example: example || (placeholder ? placeholder.replace(/^Ej:\s*/i, '') : '')
    };
  }

  // Fallback
  return {
    title: tab === 'positive' ? 'Afirmativa' : tab === 'negative' ? 'Negativa' : 'Pregunta',
    instruction: '',
    placeholder: '',
    formula: '',
    example: ''
  };
}

function parseDialogueLine(text?: string): { speaker: string | null; quote: string } {
  if (!text) return { speaker: null, quote: '' };
  const clean = text.trim();
  const colonIdx = clean.indexOf(':');
  if (colonIdx > 0 && colonIdx < 30) {
    const speaker = clean.slice(0, colonIdx).trim();
    const quote = clean.slice(colonIdx + 1).trim();
    if (speaker.length > 0 && quote.length > 0) {
      return { speaker, quote };
    }
  }
  return { speaker: null, quote: clean };
}

export function resolveGrammarData(slide?: ClassSlide | null): {
  goldenRule?: string;
  proTip?: string;
  structures: {
    label: string;
    subject: string;
    formula: string;
    example: string;
    exampleEs?: string;
    explanation?: string;
    rule?: string;
    audio?: string;
  }[];
} | null {
  if (!slide) return null;
  if (slide.grammarData && Array.isArray(slide.grammarData.structures) && slide.grammarData.structures.length > 0) {
    return slide.grammarData as any;
  }
  const gsd = (slide as any).grammarStudioData;
  if (gsd && Array.isArray(gsd.tabs) && gsd.tabs.length > 0) {
    return {
      goldenRule: gsd.subtitle || gsd.title || (slide.description || "Regla de Oro de la Lección"),
      proTip: gsd.subtitle || (slide.description || "Aplica la fórmula y practica en voz alta."),
      structures: gsd.tabs.map((tab: any, i: number) => ({
        label: tab.label || `Paso ${i + 1}`,
        subject: tab.rule || tab.label || `Estructura ${i + 1}`,
        formula: tab.formula || tab.rule || '',
        example: tab.example || tab.formula || '',
        exampleEs: tab.explanation || tab.rule || '',
        explanation: tab.explanation || tab.rule || '',
        rule: tab.rule || tab.explanation || '',
        audio: tab.example || '',
      }))
    };
  }
  return null;
}

const GRAMMAR_STEP_THEMES = [
  {
    level: 1,
    xp: 100,
    name: 'Nivel 1',
    colorName: 'emerald',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
    borderClass: 'border-emerald-400/80',
    glowClass: 'shadow-[0_0_50px_rgba(16,185,129,0.35)]',
    cardBg: 'from-slate-950/95 via-[#06201a]/90 to-[#021410]/95',
    pillGradient: 'from-emerald-400 to-teal-500',
    accentText: 'text-emerald-300',
    neonColor: '#10b981',
    lightGlow: 'rgba(16,185,129,0.25)'
  },
  {
    level: 2,
    xp: 200,
    name: 'Nivel 2',
    colorName: 'amber',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
    borderClass: 'border-amber-400/80',
    glowClass: 'shadow-[0_0_50px_rgba(245,158,11,0.35)]',
    cardBg: 'from-slate-950/95 via-[#231505]/90 to-[#140b02]/95',
    pillGradient: 'from-amber-400 to-orange-500',
    accentText: 'text-amber-300',
    neonColor: '#f59e0b',
    lightGlow: 'rgba(245,158,11,0.25)'
  },
  {
    level: 3,
    xp: 300,
    name: 'Nivel 3',
    colorName: 'fuchsia',
    badgeClass: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/50',
    borderClass: 'border-fuchsia-400/80',
    glowClass: 'shadow-[0_0_50px_rgba(217,70,239,0.35)]',
    cardBg: 'from-slate-950/95 via-[#250826]/90 to-[#160217]/95',
    pillGradient: 'from-fuchsia-400 to-pink-500',
    accentText: 'text-fuchsia-300',
    neonColor: '#d946ef',
    lightGlow: 'rgba(217,70,239,0.25)'
  },
  {
    level: 4,
    xp: 400,
    name: 'Nivel 4',
    colorName: 'cyan',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
    borderClass: 'border-cyan-400/80',
    glowClass: 'shadow-[0_0_50px_rgba(6,182,212,0.35)]',
    cardBg: 'from-slate-950/95 via-[#061d28]/90 to-[#020f17]/95',
    pillGradient: 'from-cyan-400 to-blue-500',
    accentText: 'text-cyan-300',
    neonColor: '#06b6d4',
    lightGlow: 'rgba(6,182,212,0.25)'
  },
  {
    level: 5,
    xp: 500,
    name: 'Nivel 5',
    colorName: 'purple',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-400/50',
    borderClass: 'border-purple-400/80',
    glowClass: 'shadow-[0_0_50px_rgba(168,85,247,0.35)]',
    cardBg: 'from-slate-950/95 via-[#180a2c]/90 to-[#0e041c]/95',
    pillGradient: 'from-purple-400 to-violet-500',
    accentText: 'text-purple-300',
    neonColor: '#a855f7',
    lightGlow: 'rgba(168,85,247,0.25)'
  }
];

function getStructureMetric(st: any, idx: number): {
  type: 'frequency' | 'question' | 'polarity' | 'variation' | 'timeline' | 'modal' | 'badge';
  percentage?: number;
  sign?: string;
  step?: string;
  force?: string;
  label: string;
} {
  if (st.metric) return st.metric;
  const label = (st.label || '').toLowerCase();
  const rule = (st.rule || '').toLowerCase();
  const formula = (st.formula || '').toLowerCase();
  const example = (st.example || '').toLowerCase();
  const subject = (st.subject || '').toLowerCase();
  const allText = `${label} ${rule} ${formula} ${example} ${subject}`;

  // Frequency adverbs
  if (/always/i.test(allText)) return { type: 'frequency', percentage: 100, label: '100% Always (Siempre)' };
  if (/usually/i.test(allText)) return { type: 'frequency', percentage: 80, label: '80% Usually (Usualmente)' };
  if (/often/i.test(allText)) return { type: 'frequency', percentage: 60, label: '60% Often (Frecuentemente)' };
  if (/sometimes/i.test(allText)) return { type: 'frequency', percentage: 50, label: '50% Sometimes (A veces)' };
  if (/rarely|hardly ever|seldom/i.test(allText)) return { type: 'frequency', percentage: 10, label: '10% Rarely (Rara vez)' };
  if (/never/i.test(allText)) return { type: 'frequency', percentage: 0, label: '0% Never (Nunca)' };

  // Questions
  if (/wh-|how often|where|what|when|why|who/i.test(allText) && /\?/.test(allText)) {
    return { type: 'question', sign: '? Wh-', label: 'Pregunta Informativa' };
  }
  if (/\?|inversi[oó]n|yes\/no|auxiliar al inicio/i.test(allText)) {
    return { type: 'question', sign: '? Y/N', label: 'Pregunta Sí/No' };
  }
  // Negative
  if (/negativ|not|n't|don't|doesn't|didn't|isn't|aren't|won't|can't/i.test(allText) || label.includes('−') || label.includes('(-)') || label.includes('(-)')) {
    return { type: 'polarity', sign: '− Negativo', label: 'Forma Negativa' };
  }
  // 3rd person
  if (/3rd|tercera persona|he\/she|he's|she's|-s\b|-es\b/i.test(allText)) {
    return { type: 'variation', sign: '+ (He/She)', label: 'Tercera Persona (+)' };
  }
  // Sequence / Timeline
  if (/first|then|after that|finally|secuencia|timeline|cronolog/i.test(allText)) {
    return { type: 'timeline', step: `Paso ${idx + 1}`, label: 'Conector Secuencia' };
  }
  // Modals / Ability
  if (/can|can't|could/i.test(allText)) {
    return { type: 'modal', force: 'Habilidad', label: 'Can / Ability' };
  }
  if (/must|have to|should|might|may/i.test(allText)) {
    return { type: 'modal', force: '100%', label: 'Regla Modal' };
  }
  // Affirmative
  if (label.includes('+') || /afirmativ|pronombres/i.test(allText)) {
    return { type: 'polarity', sign: '+ Afirmativo', label: 'Estructura Base' };
  }
  return { type: 'badge', sign: `NIVEL ${idx + 1}`, label: 'Estructura Clave' };
}

function getStructureAvatar(st: any, slide?: ClassSlide | null, idx: number = 0): string {
  if (st?.avatarUrl) return st.avatarUrl;
  if (st?.imageUrl) return st.imageUrl;
  if (slide?.imageUrl) return slide.imageUrl;
  return '/images/male_3d_avatar_1781219297751.jpg';
}

interface FormulaToken {
  text: string;
  role: string;
  label: string;
  theme: {
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
    glow: string;
    dotColor: string;
  };
}

function parseFormulaTokens(formulaStr: string): FormulaToken[] {
  if (!formulaStr) return [];
  const regex = /\[(.*?)\]/g;
  const tokens: FormulaToken[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(formulaStr)) !== null) {
    const rawText = match[1].trim();
    const low = rawText.toLowerCase().trim();

    let role = 'complement';
    let label = '📦 COMPLEMENTO';
    let theme = {
      border: 'border-amber-400/80',
      bg: 'bg-amber-950/70',
      text: 'text-amber-200',
      badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
      glow: 'shadow-amber-500/25',
      dotColor: '#f59e0b'
    };

    if (/wh-|what|where|when|why|how|who\b/i.test(low)) {
      role = 'question';
      label = '❓ PREGUNTA WH-';
      theme = {
        border: 'border-sky-400/80',
        bg: 'bg-sky-950/70',
        text: 'text-sky-200',
        badgeBg: 'bg-sky-400/20 text-sky-300 border-sky-400/40',
        glow: 'shadow-sky-500/25',
        dotColor: '#38bdf8'
      };
    } else if (/can|can't|must|should|could|would like/i.test(low)) {
      role = 'modal';
      label = '🌟 MODAL / PODER';
      theme = {
        border: 'border-purple-400/80',
        bg: 'bg-purple-950/70',
        text: 'text-purple-200',
        badgeBg: 'bg-purple-400/20 text-purple-300 border-purple-400/40',
        glow: 'shadow-purple-500/25',
        dotColor: '#c084fc'
      };
    } else if (/not\b|n't\b|don't|doesn't|didn't|isn't|aren't|am not/i.test(low)) {
      role = 'negative';
      label = '⛔ NEGACIÓN';
      theme = {
        border: 'border-rose-400/80',
        bg: 'bg-rose-950/70',
        text: 'text-rose-200',
        badgeBg: 'bg-rose-400/20 text-rose-300 border-rose-400/40',
        glow: 'shadow-rose-500/25',
        dotColor: '#fb7185'
      };
    } else if (/adverb|always|usually|often|sometimes|never|in the morning|in the afternoon|at \d|every|first|then|finally|conector/i.test(low)) {
      role = 'time';
      label = '⏱️ FRECUENCIA / TIEMPO';
      theme = {
        border: 'border-fuchsia-400/80',
        bg: 'bg-fuchsia-950/70',
        text: 'text-fuchsia-200',
        badgeBg: 'bg-fuchsia-400/20 text-fuchsia-300 border-fuchsia-400/40',
        glow: 'shadow-fuchsia-500/25',
        dotColor: '#e879f9'
      };
    } else if (/this is|that is|these are|those are|demostrativ/i.test(low)) {
      role = 'demonstrative';
      label = '👉 DEMOSTRATIVO';
      theme = {
        border: 'border-indigo-400/80',
        bg: 'bg-indigo-950/70',
        text: 'text-indigo-200',
        badgeBg: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/40',
        glow: 'shadow-indigo-500/25',
        dotColor: '#818cf8'
      };
    } else if (/i'm|you're|he's|she's|we're|they're/i.test(low)) {
      role = 'subject-be';
      label = '👤 SUJETO + TO BE';
      theme = {
        border: 'border-cyan-400/80',
        bg: 'bg-cyan-950/70',
        text: 'text-cyan-200',
        badgeBg: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40',
        glow: 'shadow-cyan-500/25',
        dotColor: '#22d3ee'
      };
    } else if (/identidad|estado|lugar|complement|objeto|nombre|edad|fecha|comida|ropa|materia|útil|prenda/i.test(low)) {
      role = 'complement';
      label = '📦 COMPLEMENTO';
      theme = {
        border: 'border-amber-400/80',
        bg: 'bg-amber-950/70',
        text: 'text-amber-200',
        badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
        glow: 'shadow-amber-500/25',
        dotColor: '#fbbf24'
      };
    } else if (/verb|acción|am \/ is \/ are|\bam\b|\bis\b|\bare\b|wake up|wear|like|love|enjoy|have|play|do|take/i.test(low) && !/sujeto|pronombre/i.test(low)) {
      role = 'verb';
      label = '⚡ VERBO / ACCIÓN';
      theme = {
        border: 'border-emerald-400/80',
        bg: 'bg-emerald-950/70',
        text: 'text-emerald-200',
        badgeBg: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40',
        glow: 'shadow-emerald-500/25',
        dotColor: '#34d399'
      };
    } else if (/sujeto|pronombre|\bi\b|\byou\b|\bhe\b|\bshe\b|\bwe\b|\bthey\b|\bmy\b|\bhis\b|\bher\b|\bour\b|\btheir\b/i.test(low)) {
      role = 'subject';
      label = '👤 SUJETO';
      theme = {
        border: 'border-cyan-400/80',
        bg: 'bg-cyan-950/70',
        text: 'text-cyan-200',
        badgeBg: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40',
        glow: 'shadow-cyan-500/25',
        dotColor: '#22d3ee'
      };
    }

    tokens.push({ text: rawText, role, label, theme });
  }

  if (tokens.length === 0) {
    return formulaStr.split('+').map((t, i) => ({
      text: t.trim(),
      role: 'block',
      label: `🧩 BLOQUE ${i + 1}`,
      theme: {
        border: 'border-cyan-400/80',
        bg: 'bg-cyan-950/70',
        text: 'text-cyan-200',
        badgeBg: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40',
        glow: 'shadow-cyan-500/25',
        dotColor: '#22d3ee'
      }
    }));
  }

  return tokens;
}

export function resolveReadingLines(slide?: ClassSlide | null): { speaker?: string; text: string; es?: string }[] {
  if (!slide) return [];
  const rd = (slide as any).readingData;
  if (rd && Array.isArray(rd.dialogue) && rd.dialogue.length > 0) {
    return rd.dialogue.map((d: any) => {
      if (typeof d === 'string') return { text: d };
      const text = d.text || d.en || '';
      const speaker = d.speaker || '';
      return {
        speaker,
        text: speaker ? `${speaker}: "${text}"` : text,
        es: d.es || d.translation || '',
      };
    });
  }
  if (slide.type === 'reading' || /reading|lectura/i.test(slide.title || '')) {
    if (Array.isArray(slide.content) && slide.content.length > 0) {
      return slide.content.map(c => {
        if (typeof c === 'string') return { text: c };
        return { text: (c as any).text || (c as any).en || String(c), es: (c as any).es };
      });
    }
  }
  return [];
}

export function resolveSpeakingQuestions(slide?: ClassSlide | null): string[] {
  if (!slide) return [];
  if (Array.isArray(slide.content) && slide.content.length > 0) return slide.content;
  const sp = (slide as any).speakingPrompts || (slide as any).speakingData?.questions || (slide as any).questions;
  if (Array.isArray(sp) && sp.length > 0) {
    return sp.map((q: any) => typeof q === 'string' ? q : (q.en || q.question || q.prompt || String(q)));
  }
  return [];
}

export function SlideRenderer({
  cls,
  section,
  slide,
  currentIndex,
  totalSlides,
  onComplete,
  onNext,
  hideTeacherNote = false,
  className = 'w-full h-full',
  compact = false,
  studentId,
}: SlideRendererProps) {
  const activeStudentId = useMemo(() => {
    if (studentId) return studentId;
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('active_student_profile');
        if (saved) {
          const parsed = JSON.parse(saved);
          return parsed.id || parsed.student_id || null;
        }
      } catch {
        // fallback
      }
    }
    return null;
  }, [studentId]);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedSpeakingPrompt, setSelectedSpeakingPrompt] = useState('');
  const [imageError, setImageError] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Spotlight modal for opening slide elements
  const [spotlightElement, setSpotlightElement] = useState<{
    index: number;
    total: number;
    title: string;
    text: string;
    iconType: 'target' | 'book' | 'users' | 'image';
    gradient: string;
    iconBg: string;
    imageUrl?: string;
  } | null>(null);

  useEffect(() => {
    setSpotlightElement(null);
  }, [slide.id, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!spotlightElement) return;
      if (e.key === 'Escape') {
        setSpotlightElement(null);
      } else if (e.key === 'ArrowRight' && spotlightElement.total <= 3) {
        const newIdx = (spotlightElement.index + 1) % 3;
        const cardsData = [
          { index: 0, title: 'Elemento 1 • Misión de la Clase', text: slide.content?.[0] || 'Are you ready to level up your English?', iconType: 'target' as const, gradient: 'from-pink-500 to-rose-600', iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600' },
          { index: 1, title: 'Elemento 2 • Concepto Clave', text: slide.content?.[1] || 'Today we learn how to introduce ourselves.', iconType: 'book' as const, gradient: 'from-cyan-500 to-blue-600', iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
          { index: 2, title: 'Elemento 3 • Desafío y Conversación', text: slide.content?.[2] || "Let's make some new friends!", iconType: 'users' as const, gradient: 'from-amber-400 to-orange-500', iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500' }
        ];
        setSpotlightElement({ ...cardsData[newIdx], total: 3 });
      } else if (e.key === 'ArrowLeft' && spotlightElement.total <= 3) {
        const newIdx = (spotlightElement.index - 1 + 3) % 3;
        const cardsData = [
          { index: 0, title: 'Elemento 1 • Misión de la Clase', text: slide.content?.[0] || 'Are you ready to level up your English?', iconType: 'target' as const, gradient: 'from-pink-500 to-rose-600', iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600' },
          { index: 1, title: 'Elemento 2 • Concepto Clave', text: slide.content?.[1] || 'Today we learn how to introduce ourselves.', iconType: 'book' as const, gradient: 'from-cyan-500 to-blue-600', iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
          { index: 2, title: 'Elemento 3 • Desafío y Conversación', text: slide.content?.[2] || "Let's make some new friends!", iconType: 'users' as const, gradient: 'from-amber-400 to-orange-500', iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500' }
        ];
        setSpotlightElement({ ...cardsData[newIdx], total: 3 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [spotlightElement, slide.content]);

  // Speech Synthesis Helper
  const playSpeech = (text: string, lang = 'en-US', rate = 0.9) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Reading states
  const [readingLineIndex, setReadingLineIndex] = useState(0);
  const [isFullTextView, setIsFullTextView] = useState(false);
  const [readingAudioPlaying, setReadingAudioPlaying] = useState(false);

  // Listening states
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [showListeningTranscript, setShowListeningTranscript] = useState(false);
  const [selectedListeningOption, setSelectedListeningOption] = useState<number | null>(null);
  const [showListeningResult, setShowListeningResult] = useState(false);
  const [listeningSpeed, setListeningSpeed] = useState<number>(0.9);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Writing states (3 fields: +, -, ?)
  const [writingInputs, setWritingInputs] = useState<{ positive: string; negative: string; question: string }>({
    positive: '',
    negative: '',
    question: ''
  });
  const [writingActiveTab, setWritingActiveTab] = useState<'positive' | 'negative' | 'question'>('positive');
  const [showWritingExamples, setShowWritingExamples] = useState<{ positive: boolean; negative: boolean; question: boolean }>({
    positive: false,
    negative: false,
    question: false
  });
  const [writingChecked, setWritingChecked] = useState(false);

  // Story Decoder embedded states (matching StoryDecoder.tsx)
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [storyLineIndex, setStoryLineIndex] = useState(0);
  const [selectedTokenIndexes, setSelectedTokenIndexes] = useState<number[]>([]);
  const [shuffledStoryTokens, setShuffledStoryTokens] = useState<{ id: string; text: string }[]>([]);
  const [storyFeedback, setStoryFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showStoryTarget, setShowStoryTarget] = useState(false);
  const [savedWords, setSavedWords] = useState<Set<string>>(new Set());

  // Speaking carousel states
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [showSpeakingHint, setShowSpeakingHint] = useState(false);

  // Grammar Studio state
  const [grammarActiveTab, setGrammarActiveTab] = useState(0);
  const [grammarViewMode, setGrammarViewMode] = useState<'spotlight' | 'showcase'>('spotlight');
  const [activeFormulaToken, setActiveFormulaToken] = useState<number | null>(null);

  // Effect to load story decoder tokens on change
  useEffect(() => {
    const lines = resolveStoryDecoderLines(slide);
    if ((slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && lines.length > 0) {
      const safeIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
      const line = lines[safeIndex] || lines[0];
      if (line) {
        // Pool easy blocks or words
        const rawPool = line.puzzle?.easy_blocks && line.puzzle.easy_blocks.length > 0
          ? line.puzzle.easy_blocks
          : (line.en ? line.en.split(' ') : []);
        
        const mapped = rawPool.map((token: string, i: number) => ({ id: `tok-${i}-${token}`, text: token }));
        // Shuffle
        for (let i = mapped.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        setShuffledStoryTokens(mapped);
        setSelectedTokenIndexes([]);
        setStoryFeedback('idle');
        setWordsRevealed(false);
        setShowStoryTarget(false);
      }
    }
  }, [slide.id, storyLineIndex]);

  useEffect(() => {
    setSelectedOption(null);
    setShowResult(false);
    setSelectedSpeakingPrompt('');
    setImageError(false);

    // Reset reading & story decoder
    setReadingLineIndex(0);
    setIsFullTextView(false);
    setReadingAudioPlaying(false);
    setStoryLineIndex(0);
    setWordsRevealed(false);

    // Reset listening states
    setIsPlaying(false);
    setAudioProgress(0);
    setShowListeningTranscript(false);
    setSelectedListeningOption(null);
    setShowListeningResult(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // Reset writing states
    setWritingInputs({ positive: '', negative: '', question: '' });
    setWritingActiveTab('positive');
    setShowWritingExamples({ positive: false, negative: false, question: false });
    setWritingChecked(false);

    // Reset story decoder states
    setWordsRevealed(false);
    setStoryLineIndex(0);
    setSelectedTokenIndexes([]);
    setShuffledStoryTokens([]);
    setStoryFeedback('idle');
    setShowStoryTarget(false);
    setSavedWords(new Set());

    // Reset speaking
    setSpeakingIndex(0);
    setShowSpeakingHint(false);

    // Reset grammar studio
    setGrammarActiveTab(0);
    setGrammarViewMode('spotlight');
    setActiveFormulaToken(null);
  }, [slide.id]);

  // Compact scale: measure parent to scale 1280×720 into available space
  useEffect(() => {
    if (!compact) return;
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const pw = parent.clientWidth;
      const ph = parent.clientHeight;
      if (!pw || !ph) return;
      const s = Math.min((pw - 16) / COMPACT_W, (ph - 16) / COMPACT_H);
      setScale(Math.max(0.2, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el.parentElement) ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [compact]);

  const handleOptionSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
    setShowResult(true);
  };

  // ── Slide type flags ────────────────────────────────────────────────────────
  const isLastSlide = currentIndex === totalSlides - 1;
  const isSpeakingBossBattle = slide.type === 'speaking-boss-battle';
  const isAlphabetGame = slide.type === 'alphabet-game';
  const isSpinningWheelSlide = slide.type === 'spinning-wheel';

  const isRoleplaySlide =
    slide.type === 'roleplay' ||
    slide.type === 'lets-say' ||
    slide.type === 'speaking-scene' ||
    isAlphabetGame ||
    Boolean(slide.speakingScene) ||
    Boolean(slide.letsSay) ||
    (Boolean(slide.roleplay) && !slide.options?.length);

  const isAccuracyContrastSlide =
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isSpinningWheelSlide &&
    slide.type !== 'matching-game' &&
    slide.type !== 'mystery-puzzle' &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'structure-drag' &&
    (/accuracy contrast|contraste de precisi[oó]n/i.test(slide.title || '') ||
      Boolean(slide.content && slide.content.some((l) => /^correct this:/i.test(l) || /^accurate:/i.test(l))));

  const isOpeningSlide =
    currentIndex === 0 &&
    slide.type !== 'emoji-game' &&
    !isSpeakingBossBattle &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'structure-drag' &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide;

  // Beta slide types that bypass all generic detection (never hijack opening welcome or spinning wheel)
  const isBetaSlide =
    !isOpeningSlide &&
    !isSpinningWheelSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    (
      slide.type === 'grammar-studio' || Boolean(slide.grammarData) ||
      slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || /verb arena|reto de vocabulario/i.test(slide.title || '') ||
      slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '') ||
      slide.type === 'listening-audio-teacher' || Boolean(slide.listeningData) || /listening.*audio|audio.*listening|listening:/i.test(slide.title || '') ||
      slide.type === 'writing-guided' || Boolean(slide.writingData) || Boolean((slide as any).writingPrompts) || /writing studio|producci[oó]n escrita|guided writing/i.test(slide.title || '') ||
      slide.type === 'objectives-animated' || /today.*mission|nuestra misi[oó]n/i.test(slide.title || '') ||
      slide.type === 'reading' || Boolean((slide as any).readingData) || /reading practice|reading studio/i.test(slide.title || '') ||
      (slide.type === 'speaking' && Boolean(slide.content))
    );

  const isOptionExerciseSlide =
    Boolean(slide.options && slide.options.length > 0) &&
    slide.type !== 'emoji-game' &&
    slide.type !== 'speaking-boss-battle' &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'structure-drag' &&
    !isRoleplaySlide;

  const isScreenShareExerciseSlide = isOptionExerciseSlide;

  const isGoalsSlide =
    !isOpeningSlide &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    slide.type !== 'objectives-animated' &&
    (Boolean(slide.title && /goal|objetivo/i.test(slide.title)) || Boolean(slide.description && /objective/i.test(slide.description)));

  const isChatSlide =
    !isBetaSlide &&
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    !isAccuracyContrastSlide &&
    !isOptionExerciseSlide &&
    (Boolean(slide.title && /read.*chat|lee.*chat|conversation|conversaci[oó]n|dialogue|di[aá]logo/i.test(slide.title)) ||
      Boolean(slide.description && /context/i.test(slide.description) && slide.content && slide.content.some((l) => /^[\w\s]+:\s*.+/i.test(l))));

  const isWrapUpSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    slide.type !== 'homework' &&
    slide.type !== 'video' &&
    (Boolean(slide.title && /class complete|clase completada|wrap-?up|congratulations|felicitaciones/i.test(slide.title)) ||
      Boolean(slide.description && /wrap-?up/i.test(slide.description)));

  const isHomeworkSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isWrapUpSlide &&
    slide.type !== 'video' &&
    (slide.type === 'homework' || Boolean(slide.title && /homework|tarea/i.test(slide.title)));

  const isVideoHomeworkSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isOptionExerciseSlide &&
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    (slide.type === 'video' || slide.type === 'video-task' || Boolean(slide.title && /video.*homework|tarea.*video/i.test(slide.title)));

  const isTeachingConceptSlide =
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isSpinningWheelSlide &&
    !isChatSlide &&
    !isRoleplaySlide &&
    !isSpeakingBossBattle &&
    !isAccuracyContrastSlide &&
    !isOptionExerciseSlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    !isVideoHomeworkSlide &&
    slide.type !== 'reading' &&
    slide.type !== 'vocabulary' &&
    slide.type !== 'matching-game' &&
    slide.type !== 'mystery-puzzle' &&
    slide.type !== 'structure-drag' &&
    slide.type !== 'speaking-assessment-experimental' &&
    slide.type !== 'verb-arena-embedded' &&
    slide.type !== 'story-decoder-embedded' &&
    slide.type !== 'listening-audio-teacher' &&
    slide.type !== 'writing-guided' &&
    slide.type !== 'speaking' &&
    slide.type !== 'objectives-animated' &&
    Boolean(
      slide.content &&
      slide.content.length > 0 &&
      (!slide.options || slide.options.length === 0)
    );

  const isVocabularySlide =
    !isSpeakingBossBattle &&
    !isRoleplaySlide &&
    !isAccuracyContrastSlide &&
    !isOpeningSlide &&
    !isGoalsSlide &&
    !isChatSlide &&
    !isTeachingConceptSlide &&
    !isOptionExerciseSlide &&
    !isWrapUpSlide &&
    !isHomeworkSlide &&
    !isVideoHomeworkSlide &&
    slide.type !== 'verb-arena-embedded' &&
    slide.type !== 'story-decoder-embedded' &&
    slide.type !== 'listening-audio-teacher' &&
    slide.type !== 'writing-guided' &&
    slide.type !== 'speaking' &&
    slide.type !== 'objectives-animated' &&
    (slide.type === 'vocabulary' || Boolean(slide.vocabularyCards && slide.vocabularyCards.length > 0));

  const isImmersiveSlide =
    slide.type === 'emoji-game' ||
    slide.type === 'speaking-boss-battle' ||
    slide.type === 'speaking-assessment-experimental' ||
    isRoleplaySlide ||
    isAccuracyContrastSlide ||
    isVocabularySlide ||
    isSpinningWheelSlide;

  const bgColorMap: Record<string, string> = {
    intro: 'bg-blue-600', grammar: 'bg-indigo-600', practice: 'bg-amber-500',
    production: 'bg-emerald-600', feedback: 'bg-purple-600',
  };

  const bgGradient = isOpeningSlide || isGoalsSlide || isTeachingConceptSlide
    ? 'bg-gradient-to-br from-[#120d2d] via-[#1a0f3d] to-[#0c081e]'
    : isChatSlide
    ? 'bg-gradient-to-br from-[#0f1442] via-[#1a113f] to-[#0c0a24]'
    : isOptionExerciseSlide
    ? 'bg-gradient-to-br from-[#101442] via-[#1a113e] to-[#0c0924]'
    : slide.type === 'emoji-game' || slide.type === 'structure-drag'
    ? 'bg-gradient-to-br from-[#0c0d28] via-[#140e3a] to-[#08081c]'
    : isSpinningWheelSlide
    ? 'bg-gradient-to-br from-[#0a0d24] via-[#0f1738] to-[#080a1c]'
    : slide.bgColor || bgColorMap[section.id.split('-')[1]] || 'bg-slate-800';

  const isReadingPracticeSlide =
    /reading practice|practica de lectura|práctica de lectura/i.test(slide.title || '') ||
    slide.type === 'reading';
  const isOptionalAiSpeakingSlide =
    /let.?s talk|vamos a hablar/i.test(slide.title || '') ||
    isReadingPracticeSlide || slide.type === 'speaking' || slide.type === 'reading';
  const slideSpeakingQuestions = [
    selectedSpeakingPrompt,
    ...(slide.type !== 'spinning-wheel' ? slide.content || [] : []),
  ].filter((line): line is string => Boolean(line?.trim()));

  // ── The actual slide JSX ───────────────────────────────────────────────────
  const slideJSX = (
    <div
      className={`relative flex flex-col ${bgGradient} text-white overflow-hidden select-text
        ${isSpeakingBossBattle || isRoleplaySlide ? 'rounded-xl sm:rounded-2xl' : 'rounded-2xl sm:rounded-3xl'}
        ${compact ? 'w-[1280px] h-[720px]' : 'w-full h-full'}
      `}
    >
      {/* Opening glow blobs */}
      {isOpeningSlide && (
        <>
          <motion.div aria-hidden="true"
            className="pointer-events-none absolute left-[8%] right-[8%] top-[-12%] h-40 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 36, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div aria-hidden="true"
            className="pointer-events-none absolute bottom-[-8%] right-[2%] h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl"
            animate={{ y: [0, -18, 0], x: [0, -24, 0], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* ── Beta slide types: HIGHEST PRIORITY — renders before any other detection ── */}
      {isBetaSlide ? (
        <div className="relative flex-1 flex flex-col z-10 min-h-0 overflow-hidden">
          {(slide.type === 'objectives-animated' || /today.*mission|nuestra misi[oó]n|learning goals/i.test(slide.title || '')) ? (
            <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 left-1/4 w-[400px] h-[250px] bg-gradient-to-b from-cyan-400/20 via-violet-600/10 to-transparent blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 w-[350px] h-[250px] bg-pink-500/15 blur-3xl" aria-hidden="true" />
              <div className="shrink-0 mb-3">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">{slide.title}</h1>
                <p className="text-sm sm:text-base font-bold text-violet-300/80 mt-1">{slide.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4 py-2">
                {(() => {
                  const goalsList = resolveGoalsList(slide, cls);
                  const goalItems = goalsList.map((g, gIdx) => {
                    const clean = g.replace(/^[✔️\s*•\d.-]+/, '').trim();
                    const iconTypes: ('target' | 'book' | 'users')[] = ['target', 'book', 'users'];
                    const colors = ['from-pink-600 via-rose-500 to-fuchsia-600', 'from-violet-600 via-purple-500 to-indigo-600', 'from-cyan-600 via-sky-500 to-blue-600'];
                    return {
                      index: gIdx,
                      title: `Meta ${gIdx + 1} • Objetivo de la Clase`,
                      text: clean,
                      iconType: iconTypes[gIdx % iconTypes.length],
                      gradient: colors[gIdx % colors.length],
                      iconBg: `bg-gradient-to-r ${colors[gIdx % colors.length]}`
                    };
                  });

                  return goalItems.map((item, idx) => {
                    const icons = [Target, BookOpen, MessageSquare];
                    const IconC = icons[idx % icons.length];

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSpotlightElement({ ...item, total: goalItems.length, items: goalItems });
                        }}
                        className={`relative group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r ${item.gradient} shadow-xl text-left border-2 border-white/20 hover:border-white/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none`}
                        title="Haz clic para ver esta meta gigante en pantalla"
                      >
                        <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20">
                          <span>Zoom</span>
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                          <IconC className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-xl sm:text-2xl font-black text-white leading-snug pr-16">{item.text}</p>
                      </button>
                    );
                  });
                })()}
              </div>
            </div>
          ) : (slide.type === 'grammar-studio' || Boolean(resolveGrammarData(slide))) ? (
            (() => {
              const grammar = resolveGrammarData(slide);
              const structures = grammar?.structures || [];
              const safeTab = Math.max(0, Math.min(grammarActiveTab, Math.max(0, structures.length - 1)));
              const activeStruct = structures[safeTab] || structures[0];
              const totalTabs = structures.length || 1;
              const activeTheme = GRAMMAR_STEP_THEMES[safeTab % GRAMMAR_STEP_THEMES.length] || GRAMMAR_STEP_THEMES[0];
              const activeMetric = getStructureMetric(activeStruct, safeTab);
              const activeAvatar = getStructureAvatar(activeStruct, slide, safeTab);

              return (
                <div className="relative flex-1 flex flex-col p-1 sm:p-2 z-10 min-h-0 overflow-hidden bg-slate-950">
                  {/* Master Card Container: Takes 100% of the viewport space with themed neon border */}
                  <div className={`relative flex-1 flex flex-col justify-between p-2.5 sm:p-3.5 lg:p-4 rounded-2xl sm:rounded-3xl border-2 bg-gradient-to-br ${activeTheme.cardBg} ${activeTheme.borderClass} ${activeTheme.glowClass} backdrop-blur-xl shadow-2xl min-h-0 overflow-hidden`}>
                    
                    {/* Ambient Cyber Glow inside the Card */}
                    <div
                      className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[350px] blur-3xl opacity-35 transition-all duration-700"
                      style={{ background: activeTheme.neonColor }}
                      aria-hidden="true"
                    />

                    {/* Integrated Header: Slide Title (Left) + 5 Steps Stepper / Dots (Right) */}
                    <div className="relative z-10 shrink-0 pb-2 mb-0.5 flex items-center justify-between flex-wrap gap-2 border-b border-white/15">
                      {/* Left: Title & Track Chip */}
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-wider border shadow-sm ${activeTheme.badgeClass}`}>
                            PASO {safeTab + 1} • {activeTheme.name}
                          </span>
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400 border border-amber-300 text-slate-950 text-[10px] sm:text-[11px] font-black shadow-sm">
                            <Star className="w-3 h-3 fill-slate-950" />
                            <span>+{activeTheme.xp} XP</span>
                          </span>
                        </div>
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-tight mt-0.5 drop-shadow-sm">
                          {slide.title}
                        </h1>
                      </div>

                      {/* Right: Step Switcher & Mode Toggle */}
                      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                        {/* 5 Step Segmented Selector */}
                        {structures.length > 0 && grammarViewMode === 'spotlight' && (
                          <div className="flex items-center gap-1 sm:gap-1.5 p-0.5 sm:p-1 rounded-xl bg-black/60 border border-white/20 shadow-inner">
                            {structures.map((st: any, idx: number) => {
                              const isSelected = safeTab === idx;
                              const isCompleted = safeTab > idx;
                              const stepTheme = GRAMMAR_STEP_THEMES[idx % GRAMMAR_STEP_THEMES.length] || GRAMMAR_STEP_THEMES[0];
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setGrammarActiveTab(idx)}
                                  className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer ${
                                    isSelected
                                      ? `bg-gradient-to-r ${stepTheme.pillGradient} text-slate-950 shadow-lg scale-105`
                                      : isCompleted
                                      ? 'bg-white/15 text-white hover:bg-white/25'
                                      : 'text-white/50 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  <span>Paso {idx + 1}</span>
                                  {isCompleted && <span className="text-[10px]">✓</span>}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* View Mode Toggle */}
                        <div className="flex items-center bg-black/50 border border-white/20 rounded-xl p-0.5 shadow-md">
                          <button
                            type="button"
                            onClick={() => setGrammarViewMode('spotlight')}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                              grammarViewMode === 'spotlight'
                                ? 'bg-white/20 text-white shadow-sm'
                                : 'text-white/50 hover:text-white'
                            }`}
                            title="Vista Enfocada"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Enfocado</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setGrammarViewMode('showcase')}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                              grammarViewMode === 'showcase'
                                ? 'bg-white/20 text-white shadow-sm'
                                : 'text-white/50 hover:text-white'
                            }`}
                            title="Ver 5 Niveles"
                          >
                            <LayoutGrid className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">5 Niveles</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SPOTLIGHT VIEW (DEFAULT ENFOCADO 2 COLUMNAS) */}
                    {grammarViewMode === 'spotlight' ? (
                      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-3 sm:gap-4 py-1 min-h-0 items-stretch overflow-hidden">
                        {/* LEFT COLUMN: 3D Animated Character Avatar Stage (Immersive Full-Height Clean Cutout) */}
                        <div className="relative flex flex-col justify-between items-center py-0 h-full min-h-0">
                          {/* 3D Avatar Image - Full Height Clean Cutout */}
                          <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full overflow-visible">
                            <img
                              src={activeAvatar}
                              alt={activeStruct?.label || 'Avatar'}
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (!target.src.includes('male_3d_avatar')) {
                                  target.src = '/images/male_3d_avatar_1781219297751.jpg';
                                }
                              }}
                              className="relative z-10 max-h-[300px] sm:max-h-[340px] lg:max-h-[380px] h-full w-auto max-w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter hover:scale-105 transition-transform duration-300 select-none"
                            />
                          </div>

                          {/* Subject / Category Tag */}
                          <div className="relative z-10 mt-1 rounded-xl bg-black/80 border border-white/20 px-3 py-0.5 text-center shadow-xl backdrop-blur-md">
                            <span className="text-[11px] sm:text-xs font-black text-white/95 tracking-wide">
                              {activeStruct?.subject || activeStruct?.label?.replace(/^\d+\.\s*/, '')}
                            </span>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: High-Impact Grammar Content */}
                        <div className="relative z-10 flex flex-col justify-between gap-1.5 sm:gap-2 min-h-0">
                          {/* Step Sub-Title & Metric */}
                          <div className="flex items-center justify-between gap-2 flex-wrap shrink-0">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-tight drop-shadow-md">
                              {activeStruct?.label || `Paso ${safeTab + 1}`}
                            </h2>

                            {/* Metric Badge */}
                            {activeMetric.type === 'frequency' && typeof activeMetric.percentage === 'number' ? (
                              <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xl bg-black/60 border border-white/20 shadow-md">
                                <span className="text-xs font-black text-amber-300">
                                  {activeMetric.label}
                                </span>
                                <div className="w-16 sm:w-24 h-2.5 rounded-full bg-white/10 overflow-hidden border border-white/20 p-0.5">
                                  <div
                                    className="h-full rounded-full transition-all duration-700"
                                    style={{
                                      width: `${activeMetric.percentage}%`,
                                      background: activeTheme.neonColor
                                    }}
                                  />
                                </div>
                              </div>
                            ) : activeMetric.type === 'question' ? (
                              <span className="px-2.5 py-0.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-black shadow-md">
                                {activeMetric.sign} • {activeMetric.label}
                              </span>
                            ) : activeMetric.type === 'polarity' ? (
                              <span className="px-2.5 py-0.5 rounded-xl bg-rose-500/20 border border-rose-400/50 text-rose-300 text-xs font-black shadow-md">
                                {activeMetric.sign}
                              </span>
                            ) : activeMetric.type === 'variation' ? (
                              <span className="px-2.5 py-0.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black shadow-md">
                                {activeMetric.sign}
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-xl bg-purple-500/20 border border-purple-400/50 text-purple-300 text-xs font-black shadow-md">
                                {activeMetric.label}
                              </span>
                            )}
                          </div>

                          {/* Gamified Lego Block Syntactic Formula */}
                          {(() => {
                            const formulaTokens = parseFormulaTokens(activeStruct?.formula || `[ Sujeto ] + [ Verbo ] + [ Complemento ]`);
                            return (
                              <div className="flex flex-col gap-0.5 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-black/80 border border-white/20 shadow-inner shrink-0">
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-md bg-cyan-500/30 text-cyan-300 flex items-center justify-center font-mono font-black text-[10px]">
                                      fx
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                                      Estructura por Bloques de Construcción
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-bold text-white/50 hidden sm:inline">
                                    {activeFormulaToken !== null ? '💡 Ficha resaltada' : 'Toca una ficha para resaltar'}
                                  </span>
                                </div>

                                {/* Lego Chips Flow */}
                                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-0.5">
                                  {formulaTokens.map((tok, tIdx) => {
                                    const isSelected = activeFormulaToken === tIdx;
                                    return (
                                      <div key={tIdx} className="flex items-center gap-1">
                                        <button
                                          type="button"
                                          onMouseEnter={() => setActiveFormulaToken(tIdx)}
                                          onMouseLeave={() => setActiveFormulaToken(null)}
                                          onClick={() => setActiveFormulaToken(prev => prev === tIdx ? null : tIdx)}
                                          className={`group relative flex flex-col items-start px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border transition-all cursor-pointer shadow-md ${tok.theme.bg} ${tok.theme.border} ${
                                            isSelected
                                              ? `${tok.theme.glow} ring-2 ring-white/80 scale-105 shadow-xl`
                                              : 'hover:scale-[1.03] hover:border-white/60'
                                          }`}
                                        >
                                          <span className={`text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-1 py-0.2 rounded border mb-0.5 ${tok.theme.badgeBg}`}>
                                            {tok.label}
                                          </span>
                                          <span className={`text-[11px] sm:text-xs lg:text-sm font-mono font-black ${tok.theme.text} leading-tight`}>
                                            {tok.text}
                                          </span>
                                        </button>

                                        {tIdx < formulaTokens.length - 1 && (
                                          <span className="text-xs font-black text-white/40 px-0.5 select-none animate-pulse">
                                            ➕
                                          </span>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}

                          {/* English Sentence & Spanish Translation */}
                          <div className="flex-1 flex flex-col justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/20 p-2.5 sm:p-3.5 backdrop-blur-md shadow-xl min-h-0">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                                <span>Oración Modelo en Inglés</span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-300/90 uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-400/15 border border-amber-300/30">
                                Pronunciación Nativa
                              </span>
                            </div>
                            <p className="text-xl sm:text-2xl lg:text-[1.9rem] font-black text-white leading-snug tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
                              "{activeStruct?.example}"
                            </p>
                            {activeStruct?.exampleEs && (
                              <p className="text-xs sm:text-sm lg:text-base font-extrabold text-cyan-200/95 mt-1 leading-snug">
                                {activeStruct.exampleEs}
                              </p>
                            )}
                          </div>

                          {/* Rule / Tip Pill */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-[11px] sm:text-xs font-bold text-white/90 shrink-0">
                            <span className="text-amber-400 font-black text-sm shrink-0">📌</span>
                            <span className="line-clamp-1">{activeStruct?.rule || activeStruct?.explanation || activeStruct?.subject}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* SHOWCASE VIEW (PANORÁMICA 5 NIVELES) */
                      <div className="relative z-10 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1 min-h-0 overflow-y-auto lg:overflow-visible items-stretch">
                        {structures.map((st: any, idx: number) => {
                          const theme = GRAMMAR_STEP_THEMES[idx % GRAMMAR_STEP_THEMES.length] || GRAMMAR_STEP_THEMES[0];
                          const metric = getStructureMetric(st, idx);
                          const avatar = getStructureAvatar(st, slide, idx);
                          const isCurrent = safeTab === idx;

                          return (
                            <div
                              key={idx}
                              onClick={() => {
                                setGrammarActiveTab(idx);
                                setGrammarViewMode('spotlight');
                              }}
                              className={`group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${
                                isCurrent
                                  ? `bg-gradient-to-br ${theme.cardBg} ${theme.borderClass} ${theme.glowClass} scale-[1.02] ring-2 ring-white/60`
                                  : 'bg-slate-900/80 hover:bg-slate-900 border-white/15 hover:border-white/40'
                              }`}
                            >
                              {/* Card Top: Level + XP */}
                              <div className="flex items-center justify-between gap-1 mb-2">
                                <span className={`px-2 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider border ${theme.badgeClass}`}>
                                  PASO {idx + 1}
                                </span>
                                <span className="text-[11px] font-black text-amber-300 flex items-center gap-0.5">
                                  <Star className="w-3 h-3 fill-amber-300" />
                                  <span>{theme.xp}</span>
                                </span>
                              </div>

                              {/* 3D Avatar Center Thumbnail */}
                              <div className="relative my-2 h-28 sm:h-32 flex items-center justify-center">
                                <div
                                  className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"
                                  style={{ background: theme.neonColor }}
                                />
                                <img
                                  src={avatar}
                                  alt={st.label}
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('male_3d_avatar')) {
                                      target.src = '/images/male_3d_avatar_1781219297751.jpg';
                                    }
                                  }}
                                  className="relative z-10 h-full w-auto object-contain rounded-xl drop-shadow-md group-hover:scale-105 transition-transform"
                                />
                              </div>

                              {/* Title & Sentences */}
                              <div className="flex flex-col gap-1 my-1">
                                <h3 className="text-sm font-black text-white line-clamp-1">
                                  {st.label?.replace(/^\d+\.\s*/, '')}
                                </h3>
                                <p className="text-xs font-bold text-white/90 line-clamp-2 leading-tight">
                                  {st.example}
                                </p>
                                {st.exampleEs && (
                                  <p className="text-[11px] font-semibold text-cyan-200/80 line-clamp-1">
                                    {st.exampleEs}
                                  </p>
                                )}
                              </div>

                              {/* Lego Formula Micro-Chips */}
                              <div className="flex flex-wrap items-center gap-1 my-1">
                                {parseFormulaTokens(st.formula || `[ Sujeto ] + [ Verbo ]`).slice(0, 3).map((tok, fIdx) => (
                                  <span
                                    key={fIdx}
                                    className={`text-[9px] font-black font-mono px-1.5 py-0.5 rounded-md border ${tok.theme.badgeBg}`}
                                  >
                                    {tok.text}
                                  </span>
                                ))}
                              </div>

                              {/* Listen button at bottom */}
                              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playSpeech(st.audio || st.example, 'en-US', 0.9);
                                  }}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs text-slate-950 shadow-md bg-gradient-to-r ${theme.pillGradient} hover:scale-105 active:scale-95 transition-all`}
                                >
                                  <Volume2 className="w-3.5 h-3.5 fill-current" />
                                  <span>ESCUCHAR</span>
                                </button>
                                <span className="text-[11px] font-black text-white/50">
                                  {idx + 1}/5
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Integrated Footer Bar */}
                    <div className="relative z-10 pt-3 mt-1 flex items-center justify-between gap-3 border-t border-white/15">
                      {/* Listen button */}
                      <button
                        type="button"
                        onClick={() => playSpeech(activeStruct?.audio || activeStruct?.example, 'en-US', 0.9)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 bg-gradient-to-r ${activeTheme.pillGradient} text-slate-950 shadow-${activeTheme.colorName}-500/30`}
                      >
                        <Volume2 className="w-4 h-4 fill-current" />
                        <span>ESCUCHAR ORACIÓN</span>
                      </button>

                      {/* Navigation Steppers */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          disabled={safeTab === 0}
                          onClick={() => setGrammarActiveTab(t => Math.max(0, t - 1))}
                          className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                            safeTab === 0
                              ? 'opacity-30 cursor-not-allowed text-white/30'
                              : 'bg-white/10 hover:bg-white/20 text-white active:scale-95'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span className="hidden sm:inline">Anterior</span>
                        </button>

                        <span className="text-xs sm:text-sm font-mono font-black text-white/80 px-2">
                          {safeTab + 1} / {totalTabs}
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            if (safeTab < totalTabs - 1) {
                              setGrammarActiveTab(t => t + 1);
                            } else {
                              if (onNext) onNext();
                              else if (onComplete) onComplete();
                            }
                          }}
                          className={`flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r ${activeTheme.pillGradient} text-slate-950 text-xs sm:text-sm font-black shadow-lg shadow-${activeTheme.colorName}-500/25 active:scale-95 transition-all cursor-pointer`}
                        >
                          <span>{safeTab < totalTabs - 1 ? 'Siguiente Nivel' : 'Continuar'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || Boolean((slide as any).vocabularyCards) || /verb arena|reto de vocabulario/i.test(slide.title || '')) ? (
            <div className="w-full h-full flex items-stretch min-h-0">
              <Suspense fallback={<div className="flex-1 flex items-center justify-center text-white text-xl font-bold">Cargando Reto de Vocabulario...</div>}>
                <VerbArenaGame
                  isEmbedded={true}
                  customPool={resolveVerbArenaPool(slide)}
                  maxRounds={slide.limit || (slide as any).verbsData?.length || slide.verbArenaData?.limit || (resolveVerbArenaPool(slide)?.length) || 6}
                  onComplete={onNext || onComplete}
                  onNextSlide={onNext}
                />
              </Suspense>
            </div>
          ) : (slide.type === 'reading' || resolveReadingLines(slide).length > 0 || /reading practice|sam'?s daily routine|la rutina de sam/i.test(slide.title || '')) && resolveReadingLines(slide).length > 0 ? (
            (() => {
              const readingLines = resolveReadingLines(slide);
              const safeReadingIndex = Math.max(0, Math.min(readingLineIndex, readingLines.length - 1));
              const currentLine = readingLines[safeReadingIndex] || readingLines[0];
              return (
                <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0a1b3f] via-[#0d2757] to-[#1d164d]">
                  {/* High Brightness Ambient Glow */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-cyan-300/30 via-sky-400/20 to-transparent blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-indigo-400/25 blur-3xl" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-3 flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-transparent drop-shadow-md">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg font-extrabold text-cyan-200 mt-0.5 drop-shadow">
                        {slide.description || "Lee en voz alta con buena entonación y fluidez."}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-cyan-400/20 border-2 border-cyan-300/50 text-cyan-100 text-xs sm:text-sm font-black shadow-md">
                        📖 Lectura Guiada
                      </span>
                      <button
                        onClick={() => setIsFullTextView(v => !v)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border-2 border-white/30 text-white text-xs sm:text-sm font-black backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        {isFullTextView ? <Layers3 className="w-4 h-4 text-cyan-300" /> : <Eye className="w-4 h-4 text-cyan-300" />}
                        <span>{isFullTextView ? 'Modo Spotlight 🎯' : 'Ver Todo el Texto 📜'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-center gap-3 min-h-0 py-1">
                    {isFullTextView ? (
                      <div className="flex-1 grid grid-cols-1 gap-3 overflow-y-auto max-h-[440px] pr-2">
                        {readingLines.map((lineObj, idx) => {
                          const isSelected = idx === safeReadingIndex;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              onClick={() => {
                                setReadingLineIndex(idx);
                                playSpeech(lineObj.text, 'en-US', 0.9);
                              }}
                              className={`group flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer shadow-lg ${
                                isSelected
                                  ? 'border-cyan-300 bg-cyan-500/30 text-white shadow-[0_0_30px_rgba(6,182,212,0.45)] scale-[1.01]'
                                  : 'border-white/20 bg-slate-900/85 text-white hover:bg-cyan-950/60 hover:border-cyan-400'
                              }`}
                            >
                              <div className="flex items-center gap-4 min-w-0">
                                <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-md ${
                                  isSelected ? 'bg-cyan-300 text-slate-950 font-black' : 'bg-white/15 text-white group-hover:bg-cyan-400 group-hover:text-slate-950'
                                }`}>
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="flex flex-col">
                                  <span className="text-2xl sm:text-3xl font-black leading-snug tracking-tight text-white drop-shadow">
                                    {lineObj.text}
                                  </span>
                                  {lineObj.es && (
                                    <span className="text-base sm:text-lg font-bold text-cyan-200 mt-1">
                                      {lineObj.es}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-4">
                                <span className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all shadow-md ${
                                  isSelected
                                    ? 'bg-cyan-300 text-slate-950'
                                    : 'bg-white/15 text-white group-hover:bg-cyan-400 group-hover:text-slate-950'
                                }`}>
                                  <Volume2 className="w-4 h-4" />
                                  <span>Escuchar</span>
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={safeReadingIndex}
                          initial={{ opacity: 0, scale: 0.96, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.96, y: -15 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-cyan-300/80 bg-slate-950/85 p-6 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.35)] backdrop-blur-2xl min-h-[300px]"
                        >
                          <div className="flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300">
                            <span className="bg-cyan-400/20 border-2 border-cyan-400/40 px-3.5 py-1.5 rounded-xl text-white font-black shadow-sm">
                              Línea {safeReadingIndex + 1} de {readingLines.length}
                            </span>
                            <span className="text-white/80 font-bold">Práctica de Fluidez y Entonación 🎙️</span>
                          </div>

                          {/* Large Main Sentence */}
                          <div className="my-auto text-center py-4 px-2">
                            <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.15] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                              "{currentLine.text}"
                            </p>
                            {currentLine.es && (
                              <div className="mt-4 inline-block rounded-2xl bg-cyan-950/80 border-2 border-cyan-400/40 px-6 py-2.5 shadow-inner">
                                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-cyan-200 drop-shadow">
                                  {currentLine.es}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Audio Button */}
                          <div className="flex justify-center pt-2">
                            <button
                              onClick={() => playSpeech(currentLine.text, 'en-US', 0.9)}
                              className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-lg shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                            >
                              <Volume2 className="w-6 h-6" />
                              <span>Escuchar Pronunciación</span>
                            </button>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}

                    {/* Footer Controls */}
                    <div className="shrink-0 flex items-center justify-between gap-3 pt-2">
                      <button
                        disabled={safeReadingIndex === 0}
                        onClick={() => setReadingLineIndex(i => Math.max(0, i - 1))}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {readingLines.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setReadingLineIndex(i);
                              if (isFullTextView) playSpeech(readingLines[i]?.text || '', 'en-US', 0.9);
                            }}
                            className={`transition-all rounded-full cursor-pointer ${
                              i === safeReadingIndex
                                ? 'w-8 h-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-400/50'
                                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'
                            }`}
                            title={`Ir a línea ${i + 1}`}
                          />
                        ))}
                      </div>

                      {safeReadingIndex < readingLines.length - 1 ? (
                        <button
                          onClick={() => setReadingLineIndex(i => Math.min(readingLines.length - 1, i + 1))}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>Siguiente</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={onNext || onComplete}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>¡Muy bien! Siguiente Diapositiva</span>
                          <ChevronRight className="w-4 h-4 stroke-[3]" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'listening-audio-teacher' || Boolean(slide.listeningData) || /listening.*audio|audio.*listening|listening:/i.test(slide.title || '')) && slide.listeningData ? (
            <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0c1330] via-[#140e36] to-[#250d3a]">
              {/* High Brightness Ambient Glow */}
              <div className="pointer-events-none absolute -top-16 left-1/3 w-[600px] h-[350px] bg-gradient-to-b from-violet-400/25 via-indigo-500/15 to-transparent blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-pink-500/20 blur-3xl" aria-hidden="true" />
              
              {/* Header */}
              <div className="shrink-0 mb-3 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight leading-tight bg-gradient-to-r from-violet-300 via-pink-200 to-white bg-clip-text text-transparent drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg font-extrabold text-violet-200 mt-0.5 drop-shadow">
                    {slide.description || "Escucha el audio nativo y responde la pregunta de comprensión:"}
                  </p>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-500/20 border-2 border-violet-400/40 text-violet-200 text-sm font-black shadow-md">
                  <span>🎧 Listening Lab</span>
                </div>
              </div>

              {(() => {
                const listeningText = slide.listeningData?.transcription || slide.listeningData?.audioTeacherText || '';
                return (
                  <div className="flex-1 flex flex-row items-stretch gap-6 min-h-0 py-1">
                    {/* Left Column: Audio & Transcript */}
                    <div className="w-[48%] h-full flex flex-col justify-between gap-3 min-h-0">
                      {/* Audio Player Card */}
                      <div className="rounded-3xl border-2 border-indigo-400/50 bg-slate-950/85 p-5 sm:p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between shrink-0">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-indigo-300">
                            🎧 Audio de la Clase
                          </span>
                          {isPlaying && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black animate-pulse">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              Reproduciendo
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-3">
                          <button
                            onClick={() => {
                              if (isPlaying) {
                                if (audioRef.current) {
                                  audioRef.current.pause();
                                }
                                if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                                  window.speechSynthesis.cancel();
                                }
                                setIsPlaying(false);
                              } else {
                                const audioUrl = slide.listeningData?.audioUrl;
                                if (audioUrl) {
                                  if (!audioRef.current) {
                                    audioRef.current = new Audio();
                                  }
                                  const audio = audioRef.current;
                                  audio.src = audioUrl;
                                  audio.playbackRate = listeningSpeed;
                                  audio.onended = () => setIsPlaying(false);
                                  audio.onerror = () => {
                                    playSpeech(listeningText, 'en-US', listeningSpeed);
                                    const words = listeningText.split(' ').length;
                                    const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                                    setTimeout(() => setIsPlaying(false), durationSec * 1000);
                                  };
                                  audio.play()
                                    .then(() => setIsPlaying(true))
                                    .catch(() => {
                                      setIsPlaying(true);
                                      playSpeech(listeningText, 'en-US', listeningSpeed);
                                      const words = listeningText.split(' ').length;
                                      const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                                      setTimeout(() => setIsPlaying(false), durationSec * 1000);
                                    });
                                } else {
                                  setIsPlaying(true);
                                  playSpeech(listeningText, 'en-US', listeningSpeed);
                                  const words = listeningText.split(' ').length;
                                  const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                                  setTimeout(() => setIsPlaying(false), durationSec * 1000);
                                }
                              }
                            }}
                            className={`flex min-h-16 sm:min-h-18 items-center justify-center gap-3 px-6 py-4 rounded-2xl font-black text-xl sm:text-2xl transition-all cursor-pointer shadow-xl ${
                              isPlaying
                                ? 'bg-red-500/30 border-2 border-red-400 text-red-200 shadow-red-900/50 hover:bg-red-500/50'
                                : 'bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500 hover:from-violet-400 hover:to-pink-400 text-white shadow-indigo-500/40 hover:scale-[1.02] active:scale-95'
                            }`}
                          >
                            {isPlaying ? <VolumeX className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current" />}
                            <span>{isPlaying ? 'Pausar Audio' : '▶ Reproducir Audio'}</span>
                          </button>

                          <div className="grid grid-cols-3 gap-2">
                            {[0.7, 0.9, 1.0].map(s => (
                              <button
                                key={s}
                                onClick={() => {
                                  setListeningSpeed(s);
                                  if (audioRef.current && !audioRef.current.paused) {
                                    audioRef.current.playbackRate = s;
                                  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                                    window.speechSynthesis.cancel();
                                    setIsPlaying(false);
                                  }
                                }}
                                className={`h-11 sm:h-12 rounded-xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer ${
                                  listeningSpeed === s
                                    ? 'border-indigo-300 bg-indigo-500/40 text-white shadow-md ring-2 ring-indigo-400/30'
                                    : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                {s === 0.7 ? '🐢 Lento' : s === 0.9 ? '🚶 Normal' : '🚀 Rápido'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Transcription Box */}
                      <div className="rounded-3xl border-2 border-violet-400/40 bg-slate-950/85 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-2xl backdrop-blur-xl min-h-0">
                        <button
                          onClick={() => setShowListeningTranscript(!showListeningTranscript)}
                          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-100 text-base font-black border-2 border-violet-500/40 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer shadow-md"
                        >
                          {showListeningTranscript ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5 text-violet-300" />}
                          <span>{showListeningTranscript ? 'Ocultar Transcripción' : 'Revelar Transcripción (Profesor)'}</span>
                        </button>

                        <div className="flex-1 min-h-0 flex flex-col justify-center mt-2">
                          <AnimatePresence mode="wait">
                            {showListeningTranscript ? (
                              <motion.div
                                key="transcript-visible"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 rounded-2xl bg-violet-950/70 border-2 border-violet-400/40 text-lg sm:text-xl font-black text-violet-100 leading-relaxed shadow-inner max-h-44 overflow-y-auto"
                              >
                                "{listeningText}"
                              </motion.div>
                            ) : (
                              <motion.div
                                key="transcript-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="rounded-2xl border-2 border-dashed border-white/15 bg-white/5 p-4 text-center flex flex-col items-center justify-center h-full"
                              >
                                <span className="text-3xl sm:text-4xl mb-1">🎧</span>
                                <p className="text-sm sm:text-base font-bold text-violet-200/70">
                                  Escucha con atención el audio para responder la pregunta de comprensión.
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Comprehension Question & Options */}
                    <div className="w-[52%] h-full flex flex-col justify-between min-h-0">
                      {slide.listeningData.question ? (
                        <div className="rounded-3xl border-2 border-pink-400/50 bg-slate-950/85 p-6 sm:p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full min-h-0">
                          <div>
                            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-pink-300">
                              🎯 Pregunta de Comprensión
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white mt-1.5 leading-snug drop-shadow-md">
                              {slide.listeningData.question}
                            </h2>
                          </div>

                          {slide.listeningData.options && (
                            <div className="grid gap-3 my-2 flex-1 justify-center flex-col">
                              {slide.listeningData.options.map((opt, idx) => {
                                const isSelected = selectedListeningOption === idx;
                                const isCorrect = idx === slide.listeningData?.correctOptionIndex;
                                const optionLetter = ['A', 'B', 'C', 'D'][idx] || `${idx + 1}`;
                                let btnStyle = 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-pink-300';
                                if (showListeningResult) {
                                  btnStyle = isCorrect
                                    ? 'border-emerald-400 bg-emerald-500/30 text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.4)]'
                                    : isSelected
                                    ? 'border-red-400 bg-red-500/30 text-red-200'
                                    : 'border-white/10 bg-white/5 text-white/40';
                                } else if (isSelected) {
                                  btnStyle = 'border-violet-400 bg-violet-500/30 text-violet-200';
                                }

                                return (
                                  <button
                                    key={idx}
                                    disabled={showListeningResult}
                                    onClick={() => {
                                      setSelectedListeningOption(idx);
                                      setShowListeningResult(true);
                                      if (isCorrect) confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
                                    }}
                                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 text-base sm:text-lg lg:text-xl font-black flex items-center justify-between gap-3.5 transition-all shadow-lg hover:scale-[1.01] active:scale-[0.98] cursor-pointer ${btnStyle}`}
                                  >
                                    <div className="flex items-center gap-3.5 min-w-0">
                                      <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl text-base sm:text-lg font-black flex items-center justify-center shrink-0 shadow-md ${
                                        showListeningResult && isCorrect
                                          ? 'bg-emerald-400 text-slate-950'
                                          : isSelected
                                          ? 'bg-pink-400 text-slate-950'
                                          : 'bg-white/15 text-white'
                                      }`}>
                                        {optionLetter}
                                      </span>
                                      <span className="min-w-0 break-words">{opt}</span>
                                    </div>
                                    {showListeningResult && isCorrect && (
                                      <Check className="w-6 h-6 text-emerald-300 shrink-0 stroke-[3]" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {showListeningResult && (
                            <div className="pt-2 flex justify-end">
                              <button
                                onClick={onNext || onComplete}
                                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-base transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                              >
                                <span>Continuar ➔</span>
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="rounded-3xl border-2 border-dashed border-white/20 bg-white/5 p-8 text-center flex flex-col items-center justify-center h-full">
                          <p className="text-2xl font-black text-white">Escucha con atención y comenta lo entendido con tu profesor.</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && resolveStoryDecoderLines(slide).length > 0 ? (
            (() => {
              const lines = resolveStoryDecoderLines(slide);
              const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
              const currentLine = lines[safeLineIndex] || lines[0];
              const easyBlocks = currentLine?.puzzle?.easy_blocks && currentLine.puzzle.easy_blocks.length > 0
                ? currentLine.puzzle.easy_blocks
                : (currentLine?.en ? currentLine.en.split(' ') : []);
              const tokens = shuffledStoryTokens.length > 0 ? shuffledStoryTokens : easyBlocks.map((t: string, i: number) => ({ id: String(i), text: t }));
              const correctOrder = easyBlocks;
              const assembled = selectedTokenIndexes.map(i => tokens[i]?.text ?? '').join(' ');
              const targetAnswer = currentLine?.preferred_answer || currentLine?.en || correctOrder.join(' ');
              const { speaker, quote } = parseDialogueLine(currentLine?.es);

              return (
                <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-5 lg:p-6 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#06141c] via-[#091f26] to-[#041015]">
                  {/* Ambient Emerald & Cyan Aura */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-emerald-400/25 via-teal-500/15 to-transparent blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-cyan-400/20 blur-3xl" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-1.5 flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white tracking-tight leading-tight flex items-center gap-2.5 drop-shadow-md">
                        <span>🧩</span>
                        <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">{slide.title}</span>
                      </h1>
                      <p className="text-sm sm:text-base font-extrabold text-emerald-200 mt-0.5 drop-shadow">
                        {slide.description || "Ordena los bloques para traducir la frase correctamente:"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-emerald-300 bg-emerald-500/20 border-2 border-emerald-400/50 px-3.5 py-1.5 rounded-xl shadow-md">
                        Línea {safeLineIndex + 1} de {lines.length}
                      </span>
                    </div>
                  </div>

                  {/* Main Interactive Workspace (Full Width, Compact & Balanced) */}
                  <div className="flex-1 flex flex-col justify-between w-full min-h-0 py-0.5 gap-2 sm:gap-2.5">
                    
                    {/* Spanish Prompt Card with Conversational Speaker Highlight */}
                    <div className="rounded-2xl sm:rounded-3xl bg-slate-950/85 border-2 border-emerald-400/60 p-3 sm:p-4 shadow-[0_0_35px_rgba(16,185,129,0.2)] text-center backdrop-blur-xl shrink-0">
                      <div className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">
                        🇪🇸 Frase en Español a Traducir
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {speaker ? (
                          <>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl sm:rounded-2xl bg-cyan-500/20 border-2 border-cyan-400/60 text-cyan-300 font-black text-lg sm:text-xl lg:text-2xl shadow-md shrink-0">
                              <span className="text-base sm:text-lg">👤</span>
                              <span>{speaker}:</span>
                            </span>
                            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.35)] leading-snug tracking-tight">
                              "{quote}"
                            </span>
                          </>
                        ) : (
                          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.35)] leading-snug tracking-tight">
                            "{quote}"
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Assembly Drop Area */}
                    <div className="rounded-2xl sm:rounded-3xl bg-slate-950/80 border-2 border-dashed border-emerald-400/50 p-3 sm:p-4 min-h-[75px] sm:min-h-[90px] flex flex-wrap gap-2.5 items-center justify-center shadow-inner shrink-0">
                      {selectedTokenIndexes.length === 0 ? (
                        <div className="flex items-center gap-2 text-white/50 text-base sm:text-lg font-bold italic py-1">
                          <span>👇</span>
                          <span>Toca las palabras de abajo en orden para construir la frase...</span>
                        </div>
                      ) : (
                        selectedTokenIndexes.map((ti, pos) => (
                          <motion.button
                            key={pos}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            onClick={() => setSelectedTokenIndexes(prev => prev.filter((_, p) => p !== pos))}
                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-2 border-emerald-400 text-emerald-100 text-lg sm:text-xl lg:text-2xl font-black shadow-lg shadow-emerald-500/30 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                            title="Toca para quitar de la respuesta"
                          >
                            <span>{tokens[ti]?.text}</span>
                            <span className="text-xs opacity-60">✕</span>
                          </motion.button>
                        ))
                      )}
                    </div>

                    {/* Word Bank / Possible Answers with Hide/Reveal feature */}
                    <div className="shrink-0 flex flex-col justify-center">
                      <div className="mb-1.5 flex items-center justify-between gap-2 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-300">Banco de palabras:</span>
                          {selectedTokenIndexes.length > 0 && (
                            <button
                              onClick={() => setSelectedTokenIndexes([])}
                              className="text-xs sm:text-sm font-black text-red-400 hover:text-red-300 transition-colors cursor-pointer ml-1 px-2.5 py-0.5 rounded-lg bg-red-500/10 border border-red-400/30"
                            >
                              ✕ Limpiar
                            </button>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setWordsRevealed(v => !v)}
                          className={`flex items-center gap-1.5 rounded-xl border-2 px-3.5 py-1 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                            wordsRevealed
                              ? 'border-white/20 bg-white/10 text-white/80 hover:bg-white/20'
                              : 'border-yellow-300/60 bg-yellow-300/20 text-yellow-200 hover:bg-yellow-300 hover:text-yellow-950 shadow-lg shadow-yellow-500/20 animate-pulse'
                          }`}
                        >
                          {wordsRevealed ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Ocultar palabras</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>🧠 Revelar palabras</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center min-h-[50px]">
                        {tokens.map((t, i) => {
                          const used = selectedTokenIndexes.includes(i);
                          return (
                            <motion.button
                              key={t.id}
                              disabled={used}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.03 }}
                              onClick={() => {
                                if (!wordsRevealed) setWordsRevealed(true);
                                setSelectedTokenIndexes(prev => [...prev, i]);
                              }}
                              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-black border-2 transition-all cursor-pointer shadow-xl ${
                                used
                                  ? 'opacity-20 bg-white/5 border-white/10 text-white/30 scale-95 pointer-events-none'
                                  : 'bg-[#0a2027] border-emerald-400/80 text-white hover:bg-emerald-500/40 hover:border-emerald-300 hover:scale-105 active:scale-95 shadow-emerald-950/50'
                              }`}
                            >
                              <span className={!wordsRevealed ? 'blur-md select-none opacity-30 transition-all' : 'transition-all'}>
                                {t.text}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Feedback Alert */}
                    {storyFeedback !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className={`rounded-2xl p-2.5 sm:p-3 text-center font-black border-2 shadow-xl shrink-0 ${
                          storyFeedback === 'correct'
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-emerald-500/20'
                            : 'bg-red-500/20 border-red-400 text-red-200 shadow-red-500/20'
                        }`}
                      >
                        {storyFeedback === 'correct' ? (
                          <div className="flex items-center justify-center gap-2.5 text-lg sm:text-xl">
                            <span>🎉</span>
                            <span>¡Excelente! Frase descodificada correctamente.</span>
                          </div>
                        ) : (
                          <div className="text-sm sm:text-base">
                            <span>❌ Respuesta esperada: </span>
                            <span className="text-white underline font-extrabold">"{targetAnswer}"</span>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Story Decoder Vocabulary Saver Tool (Activated after checking answer) */}
                    {storyFeedback !== 'idle' && (
                      <StoryDecoderVocabTool
                        targetAnswer={targetAnswer}
                        spanishPrompt={currentLine?.es || quote || ''}
                        easyBlocks={easyBlocks}
                        vocabularyCandidates={currentLine?.vocabulary_candidates || []}
                        storyTitle={slide.title || cls?.title || 'Teens Class'}
                        studentId={activeStudentId}
                      />
                    )}

                    {/* Centered Controls */}
                    <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 pt-0.5">
                      <button
                        onClick={() => {
                          const normalize = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, '');
                          const correct = normalize(assembled) === normalize(targetAnswer) || normalize(assembled) === normalize(correctOrder.join(' '));
                          setStoryFeedback(correct ? 'correct' : 'wrong');
                          if (correct) {
                            confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
                            playSpeech(targetAnswer, 'en-US', 0.9);
                          }
                        }}
                        disabled={selectedTokenIndexes.length === 0}
                        className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-2.5"
                      >
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                        <span>Comprobar Respuesta</span>
                      </button>

                      {storyFeedback !== 'idle' && safeLineIndex < lines.length - 1 && (
                        <button
                          onClick={() => {
                            setStoryLineIndex(i => i + 1);
                            setSelectedTokenIndexes([]);
                            setStoryFeedback('idle');
                            setWordsRevealed(false);
                            setShowStoryTarget(false);
                            const next = lines[safeLineIndex + 1];
                            const blocks = next?.puzzle?.easy_blocks && next.puzzle.easy_blocks.length > 0
                              ? next.puzzle.easy_blocks
                              : (next?.en ? next.en.split(' ') : []);
                            const shuffled = [...blocks].map((t: string, i: number) => ({ id: String(i), text: t })).sort(() => Math.random() - 0.5);
                            setShuffledStoryTokens(shuffled);
                          }}
                          className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
                        >
                          <span>Siguiente Línea</span>
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                        </button>
                      )}

                      {safeLineIndex === lines.length - 1 && storyFeedback !== 'idle' && (
                        <button
                          onClick={onNext || onComplete}
                          className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5 animate-bounce"
                        >
                          <span>🏆 Continuar a la Siguiente Diapositiva</span>
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })()
          ) : (slide.type === 'writing-guided' || Boolean(slide.writingData) || Boolean((slide as any).writingPrompts) || /writing studio|producci[oó]n escrita|guided writing/i.test(slide.title || '')) ? (
            <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#070b18] via-[#0d132b] to-[#060814]">
              {/* Animated Futuristic Ambient Rings & Orbs */}
              <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-600/15 to-transparent blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full border border-cyan-500/20 bg-gradient-to-tl from-cyan-600/15 to-transparent blur-3xl" aria-hidden="true" />

              {/* Header */}
              <div className="shrink-0 mb-2 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                    <span>✍️</span>
                    <span className="bg-gradient-to-r from-violet-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg font-extrabold text-violet-200 mt-0.5 drop-shadow">
                    {slide.writingData?.instructions ?? slide.description ?? "Escribe tus propios ejemplos completando las 3 casillas interactivas (+, −, ?):"}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-500/20 border-2 border-violet-400/40 text-violet-200 text-sm font-black shadow-md">
                    ⚡ Laboratorio de Producción
                  </span>
                </div>
              </div>

              {/* 3 AI Writing Columns */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 min-h-0 py-1">
                {(['positive','negative','question'] as const).map((tab, idx) => {
                  const customData = resolveWritingCardData(slide, tab);

                  const configs = {
                    positive: {
                      emoji: '+',
                      defaultTitle: 'Afirmativa',
                      badgeBg: 'bg-emerald-500/25 text-emerald-300 border-emerald-400/60 ring-emerald-500/30',
                      cardBorder: 'border-emerald-500/40 hover:border-emerald-400/80',
                      cardBg: 'from-[#051a1d]/95 to-[#030f14]/95 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
                      textareaBorder: 'border-emerald-500/40 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20',
                      accentColor: 'text-emerald-300',
                      buttonBg: 'bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 border-emerald-400/40',
                    },
                    negative: {
                      emoji: '−',
                      defaultTitle: 'Negativa',
                      badgeBg: 'bg-rose-500/25 text-rose-300 border-rose-400/60 ring-rose-500/30',
                      cardBorder: 'border-rose-500/40 hover:border-rose-400/80',
                      cardBg: 'from-[#1c0813]/95 to-[#10030c]/95 shadow-[0_0_30px_rgba(244,63,94,0.15)]',
                      textareaBorder: 'border-rose-500/40 focus:border-rose-400 focus:ring-4 focus:ring-rose-400/20',
                      accentColor: 'text-rose-300',
                      buttonBg: 'bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border-rose-400/40',
                    },
                    question: {
                      emoji: '?',
                      defaultTitle: 'Pregunta',
                      badgeBg: 'bg-cyan-500/25 text-cyan-300 border-cyan-400/60 ring-cyan-500/30',
                      cardBorder: 'border-cyan-500/40 hover:border-cyan-400/80',
                      cardBg: 'from-[#07162b]/95 to-[#040b18]/95 shadow-[0_0_30px_rgba(6,182,212,0.15)]',
                      textareaBorder: 'border-cyan-500/40 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20',
                      accentColor: 'text-cyan-300',
                      buttonBg: 'bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 border-cyan-400/40',
                    },
                  };

                  const cfg = configs[tab];
                  const currentText = writingInputs[tab] || '';
                  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;
                  const displayTitle = customData.title || cfg.defaultTitle;
                  const placeholderText = customData.placeholder
                    ? (customData.placeholder.startsWith('Ej:') ? customData.placeholder : `Ej: ${customData.placeholder}`)
                    : `Escribe tu frase ${cfg.defaultTitle.toLowerCase()} (+, -, ?)...`;

                  return (
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-gradient-to-b ${cfg.cardBg} border-2 ${cfg.cardBorder} backdrop-blur-xl transition-all shadow-2xl min-h-0`}
                    >
                      {/* Top Header Card */}
                      <div className="flex items-center justify-between mb-2 shrink-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-2xl border-2 ring-4 ${cfg.badgeBg} shadow-md`}>
                            {cfg.emoji}
                          </div>
                          <div>
                            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Estructura</span>
                            <h3 className={`text-lg sm:text-xl font-black leading-tight ${cfg.accentColor}`}>
                              {displayTitle}
                            </h3>
                          </div>
                        </div>

                        {currentText.trim().length > 0 && (
                          <button
                            onClick={() => playSpeech(currentText, 'en-US', 0.9)}
                            className={`p-2 sm:p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${cfg.buttonBg} hover:scale-105 active:scale-95`}
                            title="Escuchar pronunciación de lo que escribiste"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      {/* Prompt / Instruction if present */}
                      {customData.instruction && (
                        <div className="mb-2 p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-2 shrink-0">
                          {customData.instruction}
                        </div>
                      )}

                      {/* Textarea */}
                      <div className="flex-1 flex flex-col min-h-0 my-1">
                        <textarea
                          value={currentText}
                          onChange={e => setWritingInputs(prev => ({ ...prev, [tab]: e.target.value }))}
                          placeholder={placeholderText}
                          className={`flex-1 w-full bg-slate-950/80 border-2 rounded-2xl p-4 sm:p-5 text-white text-base sm:text-lg lg:text-xl font-bold placeholder-white/35 resize-none outline-none transition-all shadow-inner leading-relaxed ${cfg.textareaBorder}`}
                        />
                      </div>

                      {/* Formula Box if present */}
                      {customData.formula && (
                        <div className="mt-2 p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs sm:text-sm font-black text-amber-200 leading-tight shrink-0">
                          <span className="text-amber-300 mr-1.5 font-black">📐 Fórmula:</span>
                          <span className="text-amber-100">{customData.formula}</span>
                        </div>
                      )}

                      {/* Card Footer with Word Count & Example Toggle */}
                      <div className="mt-2 flex items-center justify-between gap-2 pt-2 border-t border-white/15 text-xs sm:text-sm shrink-0">
                        <span className="font-bold text-slate-300">
                          {wordCount} {wordCount === 1 ? 'palabra' : 'palabras'}
                        </span>

                        {customData.example && (
                          <button
                            onClick={() => setShowWritingExamples(prev => ({ ...prev, [tab]: !prev[tab] }))}
                            className="font-bold text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 cursor-pointer transition-colors px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30"
                          >
                            <Lightbulb className="w-4 h-4 text-yellow-400" />
                            <span>{showWritingExamples[tab] ? 'Ocultar' : 'Ver modelo'}</span>
                          </button>
                        )}
                      </div>

                      {/* Expandable Example */}
                      <AnimatePresence>
                        {showWritingExamples[tab] && customData.example && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 p-3 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-slate-100 shrink-0"
                          >
                            <span className="text-yellow-400 mr-1.5 font-black">💡 Ejemplo Modelo:</span>
                            <span>"{customData.example}"</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Navigation */}
              <div className="shrink-0 flex items-center justify-between gap-3 pt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-300">
                  Completa las 3 casillas para afianzar la estructura aprendida.
                </div>
                <button
                  onClick={() => {
                    if (onNext) onNext();
                    else if (onComplete) onComplete();
                  }}
                  className="min-h-12 px-7 py-3 rounded-2xl bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-black text-base transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
                >
                  <span>Siguiente Diapositiva (Speaking)</span>
                  <ChevronRight className="w-5 h-5 stroke-[3]" />
                </button>
              </div>
            </div>
          ) : ((slide.type === 'speaking' || /let'?s talk.*hablar/i.test(slide.title || '')) && resolveSpeakingQuestions(slide).length > 0) ? (
            (() => {
              const speakingQuestions = resolveSpeakingQuestions(slide);
              const safeSpeakingIndex = Math.max(0, Math.min(speakingIndex, speakingQuestions.length - 1));
              const currentQuestion = speakingQuestions[safeSpeakingIndex] || speakingQuestions[0];
              return (
                <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#12163b] to-[#080c1d]">
                  {/* Vibrant Ambient Glow Orbs */}
                  <div className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent blur-3xl animate-pulse" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 right-10 w-[450px] h-[280px] bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl animate-pulse" aria-hidden="true" />

                  {/* Header */}
                  <div className="shrink-0 mb-3 flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>🎙️</span>
                        <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base font-bold text-purple-200/75 mt-0.5">
                        {slide.description || "Responde en voz alta con oraciones completas y buena entonación."}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs sm:text-sm font-black shadow-sm">
                        💬 Pregunta {safeSpeakingIndex + 1} de {speakingQuestions.length}
                      </span>
                    </div>
                  </div>

                  {/* Main Interactive Hero Card */}
                  <div className="flex-1 flex flex-col justify-center gap-4 max-w-4xl mx-auto w-full min-h-0 py-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={safeSpeakingIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="flex-1 flex flex-col justify-between rounded-[2.2rem] border-2 border-purple-400/40 bg-[#0c102a]/90 p-8 sm:p-10 shadow-[0_0_50px_rgba(168,85,247,0.2)] backdrop-blur-2xl text-center min-h-[300px]"
                      >
                        {/* Audio Waveform Animation Visualizer */}
                        <div className="flex items-center justify-center gap-1.5 mb-2">
                          {[16, 28, 42, 24, 36, 48, 30, 20, 38, 26, 44, 18].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [h * 0.4, h, h * 0.5, h * 0.9, h * 0.4] }}
                              transition={{ repeat: Infinity, duration: 1.2 + (i % 4) * 0.2, ease: 'easeInOut' }}
                              className="w-1.5 rounded-full bg-gradient-to-t from-cyan-400 via-purple-400 to-pink-400 shadow-sm shadow-purple-400/50"
                              style={{ height: `${h}px` }}
                            />
                          ))}
                        </div>

                        {/* Question Text */}
                        <div className="my-auto py-3">
                          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-snug tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                            {currentQuestion}
                          </p>
                        </div>

                        {/* Action Button: Listen */}
                        <div className="flex justify-center pt-2">
                          <button
                            onClick={() => {
                              const raw = currentQuestion;
                              const textOnly = raw.replace(/^\d+[\.\)\-\:\s]+/g, '').trim();
                              playSpeech(textOnly, 'en-US', 0.9);
                            }}
                            className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-400 hover:to-pink-400 text-white font-black text-sm shadow-xl shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          >
                            <Volume2 className="w-5 h-5" />
                            <span>Escuchar Pregunta 🔊</span>
                          </button>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* AI Coaching Tip Box */}
                    {showSpeakingHint && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="p-4 rounded-2xl border-2 border-yellow-400/40 bg-yellow-500/10 text-center shadow-lg backdrop-blur-md"
                      >
                        <p className="text-sm sm:text-base font-black text-yellow-200 flex items-center justify-center gap-2">
                          <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0" />
                          <span>💡 Consejo de Fluidez: Responde con una oración completa usando los conceptos practicados hoy.</span>
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Footer Controls */}
                  <div className="shrink-0 flex items-center justify-between gap-3 pt-2 max-w-4xl mx-auto w-full">
                    <button
                      disabled={safeSpeakingIndex === 0}
                      onClick={() => {
                        setSpeakingIndex(i => Math.max(0, i - 1));
                        setShowSpeakingHint(false);
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Anterior</span>
                    </button>

                    {/* Step Dots & Hint Button */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {speakingQuestions.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setSpeakingIndex(i);
                              setShowSpeakingHint(false);
                            }}
                            className={`transition-all rounded-full cursor-pointer ${
                              i === safeSpeakingIndex
                                ? 'w-8 h-2.5 bg-gradient-to-r from-pink-400 to-purple-400 shadow-md shadow-pink-400/50'
                                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'
                            }`}
                            title={`Ir a pregunta ${i + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setShowSpeakingHint(v => !v)}
                        className="p-2 rounded-xl bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer"
                        title="Consejo de Fluidez"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                    </div>

                    {safeSpeakingIndex < speakingQuestions.length - 1 ? (
                      <button
                        onClick={() => {
                          setSpeakingIndex(i => Math.min(speakingQuestions.length - 1, i + 1));
                          setShowSpeakingHint(false);
                        }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={onNext || onComplete}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>¡Gran Práctica! Siguiente Diapositiva</span>
                        <ChevronRight className="w-4 h-4 stroke-[3]" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })()
          ) : null}
        </div>
      ) : (
        <>
        {/* If isChatSlide, render specialized Option 1 Neon Chat Stream layout */}
        {isChatSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Ambient luminous glow blobs */}
          <div
            className="pointer-events-none absolute -top-16 left-1/4 w-[500px] h-[320px] bg-gradient-to-b from-cyan-400/25 via-violet-600/15 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-[420px] h-[300px] bg-pink-500/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative z-10 shrink-0 mb-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight drop-shadow-md">
                {slide.title?.includes('/') ? (
                  <>
                    <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                      {slide.title.split('/')[0].trim()}
                    </span>
                    <span className="text-white/40 mx-2.5 font-normal">/</span>
                    <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
                      {slide.title.split('/')[1].trim()}
                    </span>
                  </>
                ) : (
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-300 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                )}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs sm:text-sm font-bold text-violet-300 tracking-wide uppercase">
                  {slide.description || 'Context'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <Sparkles className="w-3 h-3" />
                  <span>Chat Interactivo</span>
                </span>
              </div>
            </div>

            {/* Quick Action Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1547]/90 border border-violet-400/40 text-white text-xs sm:text-sm font-bold shadow-lg shadow-violet-900/30">
              <span className="text-cyan-300">💬</span>
              <span>{slide.content?.length || 0} Mensajes</span>
            </div>
          </div>

          {/* Body: Full Stage Chat Stream with Timeline */}
          <div className="relative z-10 flex-1 flex flex-row items-stretch gap-6 min-h-0 overflow-hidden">
            {/* Left Timeline + Chat Messages (Adaptable & Scrollable) */}
            <div className="flex-1 h-full flex flex-col justify-between overflow-y-auto pr-2 custom-scrollbar min-h-0">
              <div className="relative flex flex-col gap-3 sm:gap-4 my-auto py-1">
                {/* Timeline connector line on the left */}
                <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-40 pointer-events-none hidden sm:block" />

                {slide.content?.map((rawLine, idx) => {
                  let speaker = idx % 2 === 0 ? 'Alex' : 'You';
                  let messageText = rawLine;
                  const match = rawLine.match(/^([^:]+):\s*(.+)$/i);
                  if (match) {
                    speaker = match[1].trim();
                    messageText = match[2].trim();
                  }

                  const speakerKey = speaker.toLowerCase();
                  const avatar =
                    AVATAR_PRESETS[speakerKey] ||
                    (idx % 2 === 0 ? AVATAR_PRESETS.alex : AVATAR_PRESETS.sam);
                  const isCyan = idx % 2 === 0 || speakerKey === 'alex';

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + idx * 0.1, duration: 0.35 }}
                      className="relative flex items-center gap-3 sm:gap-4 z-10"
                    >
                      {/* Step Circle Number */}
                      <div className="w-8 h-8 rounded-full bg-[#0a0f28] border-2 border-cyan-400 text-cyan-300 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                        {idx + 1}
                      </div>

                      {/* Avatar Circle */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl border-2 ${avatar.border} ${avatar.glow} ${avatar.bg} shrink-0`}
                      >
                        {avatar.emoji}
                      </div>

                      {/* Message Bubble Container */}
                      <div
                        className={`flex-1 max-w-3xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 backdrop-blur-md transition-all hover:scale-[1.01] ${
                          isCyan
                            ? 'bg-[#0f1d47]/95 border-2 border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.45)]'
                            : 'bg-[#281144]/95 border-2 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.45)]'
                        }`}
                      >
                        {/* Speaker Name */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-xs sm:text-sm font-black tracking-wide uppercase ${
                              isCyan ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]'
                            }`}
                          >
                            {speaker}
                          </span>
                          <span className="text-[11px] font-mono text-white/60">
                            {isCyan ? '09:41 AM' : '09:42 AM ✓✓'}
                          </span>
                        </div>

                        {/* Message Text */}
                        <p className="text-lg sm:text-xl lg:text-[1.45rem] font-bold text-white leading-snug tracking-tight">
                          {messageText}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Typing indicator pill */}
              <div className="shrink-0 pt-2 flex items-center">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18113c]/90 border border-violet-500/40 shadow-lg">
                  <span className="text-xs sm:text-sm font-bold text-violet-300">
                    Alex is typing
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-300 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isTeachingConceptSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
                {slide.title?.includes('/') ? (
                  <>
                    <span>{slide.title.split('/')[0].trim()}</span>
                    <span className="text-white/40 mx-2 font-normal">/</span>
                    <span className="text-cyan-300 font-extrabold">{slide.title.split('/')[1].trim()}</span>
                  </>
                ) : (
                  slide.title
                )}
              </h1>
              <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
                {slide.description || 'Grammar & Vocabulary'}
              </p>
            </div>
            {/* Sparkle icon top right */}
            <div className="text-cyan-300/70 text-2xl hidden sm:block">✨</div>
          </div>

          {/* Body: Left Structured Concept Cards (58%) + Right Cyber-Photo (42%) */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left Column: Stacked High-Contrast Concept Cards */}
            <div className="w-[58%] h-full flex flex-col justify-center gap-3 sm:gap-4 min-w-0 py-1">
              {slide.content?.map((rawLine, idx) => {
                let label = '';
                let text = rawLine.trim();
                let iconType: 'question' | 'answer' | 'formula' | 'vocab' | 'example' | 'tip' | 'rule' = 'example';

                // Explicit label parsing e.g. "Question: What is your name?" or "Formal: Hello!"
                const match = text.match(/^([^:]+):\s*(.+)$/i);
                if (match && match[1].length <= 25) {
                  const rawLabel = match[1].trim().toUpperCase();
                  text = match[2].trim();
                  if (/question|pregunta|q\b|ask/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'question';
                  } else if (/answer|respuesta|a\b/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'answer';
                  } else if (/formal|informal/i.test(rawLabel)) {
                    label = rawLabel;
                    iconType = 'rule';
                  } else {
                    label = rawLabel;
                    iconType = 'vocab';
                  }
                } else if (/(\+|\s+=\s+|\s+->\s+|be\s+\+\s+wearing)/i.test(text)) {
                  label = '⚡ FORMULA / PATTERN';
                  iconType = 'formula';
                } else if (/^(focus on|remember|do not|don't|use |choose |notice |tip:)/i.test(text)) {
                  label = '🎯 USAGE TIP';
                  iconType = 'tip';
                } else if (/^[A-Z][a-z]+(\s*,\s*[A-Z]?[a-z]+){2,}/.test(text) || /^[\w\s]+,\s*[\w\s]+,\s*[\w\s]+/.test(text)) {
                  label = '📚 KEY VOCABULARY';
                  iconType = 'vocab';
                } else if (text.endsWith('.') || text.endsWith('!') || text.endsWith('?')) {
                  label = idx % 2 === 0 ? '💡 MODEL EXAMPLE' : '✨ KEY SENTENCE';
                  iconType = 'example';
                } else {
                  label = `POINT 0${idx + 1}`;
                  iconType = 'vocab';
                }

                const totalLines = slide.content?.length || 1;
                const isCompact = totalLines >= 4;
                const isTwoCards = totalLines <= 2;

                const style = {
                  question: {
                    bg: 'bg-[#0c1435]/95 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.45)]',
                    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
                    iconCircle: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
                    icon: HelpCircle,
                  },
                  answer: {
                    bg: 'bg-[#1c0e35]/95 border-2 border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.45)]',
                    badge: 'bg-pink-500/20 text-pink-300 border-pink-400/50',
                    iconCircle: 'bg-pink-500/20 border-pink-400/60 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
                    icon: CheckCircle,
                  },
                  formula: {
                    bg: 'bg-[#221606]/95 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)]',
                    badge: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
                    iconCircle: 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
                    icon: Zap,
                  },
                  vocab: {
                    bg: 'bg-[#0c163b]/95 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]',
                    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
                    iconCircle: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
                    icon: BookOpen,
                  },
                  example: {
                    bg: 'bg-[#18113c]/95 border-2 border-violet-400 shadow-[0_0_25px_rgba(168,85,247,0.4)]',
                    badge: 'bg-violet-500/20 text-violet-300 border-violet-400/50',
                    iconCircle: 'bg-violet-500/20 border-violet-400/60 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]',
                    icon: Sparkles,
                  },
                  tip: {
                    bg: 'bg-[#0a231c]/95 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]',
                    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
                    iconCircle: 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
                    icon: Target,
                  },
                  rule: {
                    bg: 'bg-[#1e1038]/95 border-2 border-fuchsia-400 shadow-[0_0_25px_rgba(217,70,239,0.4)]',
                    badge: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/50',
                    iconCircle: 'bg-fuchsia-500/20 border-fuchsia-400/60 text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.5)]',
                    icon: CheckCircle,
                  },
                }[iconType];

                const IconComp = style.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.1, duration: 0.35 }}
                    className={`relative rounded-2xl sm:rounded-3xl ${isCompact ? 'p-3 sm:p-3.5' : isTwoCards ? 'p-5 sm:p-7' : 'p-4 sm:p-5'} backdrop-blur-md transition-all hover:scale-[1.015] ${style.bg}`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Left Glowing Icon Circle */}
                      <div
                        className={`${isCompact ? 'w-10 h-10 sm:w-11 sm:h-11' : isTwoCards ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11 sm:w-13 sm:h-13'} rounded-2xl flex items-center justify-center shrink-0 border ${style.iconCircle}`}
                      >
                        <IconComp className={`${isCompact ? 'w-5 h-5' : isTwoCards ? 'w-8 h-8' : 'w-6 h-6 sm:w-7 sm:h-7'}`} />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <span className={`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1 border ${style.badge}`}>
                          {label}
                        </span>
                        <p className={`${isCompact ? 'text-base sm:text-lg lg:text-xl' : isTwoCards ? 'text-2xl sm:text-3xl lg:text-[2.1rem]' : 'text-lg sm:text-xl lg:text-[1.45rem]'} font-extrabold text-white leading-snug tracking-tight drop-shadow-sm`}>
                          {text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Cyber-Neon Beveled Photo */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(168,85,247,0.45)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30">
                <div className="w-full h-full rounded-[22px] overflow-hidden">
                  <img
                    src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-05.jpg'}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isGoalsSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Header */}
          <div className="shrink-0 mb-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
              {slide.description || 'Objectives'}
            </p>
          </div>

          {/* Body: Left 3 Stacked Cards (56%) + Right Photo (44%) with Click-to-Zoom */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left 3 Pill Cards */}
            <div className="w-[56%] h-full flex flex-col justify-between py-1 gap-3.5 min-w-0">
              {resolveGoalsList(slide, cls).map((rawLine, idx) => {
                const cleanLine = rawLine.replace(/^[✔️\s*•\d.-]+/, '').trim();
                const style = GOAL_CARD_STYLES[idx % GOAL_CARD_STYLES.length];
                const IconComponent = style.icon;
                const stepNum = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const allGoals = resolveGoalsList(slide, cls).map((line, gIdx) => ({
                        index: gIdx,
                        title: `Meta ${gIdx + 1} • Objetivo de la Clase`,
                        text: line.replace(/^[✔️\s*•\d.-]+/, '').trim(),
                        iconType: (gIdx === 0 ? 'target' : gIdx === 1 ? 'book' : 'users') as 'target' | 'book' | 'users',
                        gradient: GOAL_CARD_STYLES[gIdx % GOAL_CARD_STYLES.length].bg,
                        iconBg: GOAL_CARD_STYLES[gIdx % GOAL_CARD_STYLES.length].bg
                      }));
                      setSpotlightElement({ ...allGoals[idx], total: allGoals.length, items: allGoals });
                    }}
                    className={`relative group flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl sm:rounded-3xl ${style.bg} border-2 ${style.border} shadow-xl ${style.glow} backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-left focus:outline-none`}
                    title="Haz clic para ver esta meta gigante en pantalla"
                  >
                    <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                      <span>Zoom</span>
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    {/* Circle Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>

                    {/* Step Number */}
                    <span className="text-white/60 font-mono font-black text-xl sm:text-2xl lg:text-[1.7rem] shrink-0">
                      {stepNum}
                    </span>

                    {/* Goal Text */}
                    <span className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-white leading-tight tracking-tight drop-shadow-sm flex-1">
                      {cleanLine}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Photo */}
            <div className="w-[44%] h-full flex items-center justify-center min-h-0">
              <button
                type="button"
                onClick={() => {
                  setSpotlightElement({
                    index: 0,
                    total: 1,
                    title: 'Ilustración de la Misión',
                    text: slide.title || cls?.title || 'Objetivos de la Clase',
                    iconType: 'image',
                    gradient: 'from-cyan-500 to-blue-600',
                    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
                    imageUrl: slide.imageUrl || '/images/teens-basic-zero-class-01/slide-03.jpg'
                  });
                }}
                className="relative group w-full h-full max-h-[460px] rounded-3xl overflow-hidden border-2 border-white/20 hover:border-cyan-400/80 shadow-2xl bg-black/30 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
                title="Haz clic para ver la imagen en pantalla completa"
              >
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20">
                  <span>Zoom Gigante</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-03.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      ) : isOpeningSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-7 sm:p-9 z-10 min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            {/* Left Content (58%) */}
            <div className="w-[58%] h-full flex flex-col justify-between py-1 min-w-0">
              {/* Category tag */}
              <span className="text-violet-300 font-bold text-xs sm:text-sm tracking-widest uppercase opacity-90">
                {slide.description || 'introductions'}
              </span>

              {/* Multi-line gradient title */}
              {(() => {
                const rawClassTitle = cls?.title || '';
                const classTopicEn = rawClassTitle
                  .replace(/^class\s+\d+\s*:\s*/i, '')
                  .replace(/^clase\s+\d+\s*:\s*/i, '')
                  .split('/')[0]
                  ?.trim() || '';

                const classTopicEs = rawClassTitle.includes('/')
                  ? rawClassTitle
                      .split('/')[1]
                      .replace(/^clase\s+\d+\s*:\s*/i, '')
                      .replace(/^class\s+\d+\s*:\s*/i, '')
                      .trim()
                  : '';

                let sTitleEn = slide.title?.split('/')[0]?.trim() || '';
                let sTitleEs = slide.title?.includes('/') ? slide.title.split('/')[1].trim() : '';

                let cleanEn = sTitleEn
                  .replace(/^welcome\s*(to)?\s*/i, '')
                  .replace(/^bienvenid[oa]s?\s*(a)?\s*/i, '')
                  .replace(/^[!¡\s\p{Emoji}]+/gu, '')
                  .replace(/[!¡\s\p{Emoji}]+$/gu, '')
                  .trim();

                let cleanEs = sTitleEs
                  .replace(/^bienvenid[oa]s?\s*(a)?\s*/i, '')
                  .replace(/^welcome\s*(to)?\s*/i, '')
                  .replace(/^[!¡\s\p{Emoji}]+/gu, '')
                  .replace(/[!¡\s\p{Emoji}]+$/gu, '')
                  .trim();

                if (!cleanEn || cleanEn.length < 3 || /^(class|clase|welcome|startup)$/i.test(cleanEn)) {
                  cleanEn = classTopicEn || 'English Class';
                }
                if (!cleanEs || cleanEs.length < 3 || /^(class|clase|bienvenidos|startup)$/i.test(cleanEs)) {
                  cleanEs = classTopicEs || cleanEn;
                }

                return (
                  <div className="flex flex-col">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white/90 leading-tight">
                      Welcome to
                    </h2>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight drop-shadow-md">
                      {cleanEn}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-white/80 mt-0.5">
                      ¡Bienvenidos a {cleanEs}!
                    </p>
                  </div>
                );
              })()}

              {/* 3 Large Screen-Share Optimized Horizontal Cards with Click-to-Zoom */}
              <div className="grid grid-cols-3 gap-3.5 my-1 flex-1 items-stretch min-h-[190px]">
                {(() => {
                  const openingCards = [
                    { index: 0, title: 'Elemento 1 • Misión de la Clase', text: slide.content?.[0] || 'Are you ready to level up your English?', iconType: 'target' as const, gradient: 'from-pink-500 to-rose-600', iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600' },
                    { index: 1, title: 'Elemento 2 • Concepto Clave', text: slide.content?.[1] || 'Today we learn how to introduce ourselves.', iconType: 'book' as const, gradient: 'from-cyan-500 to-blue-600', iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
                    { index: 2, title: 'Elemento 3 • Desafío y Conversación', text: slide.content?.[2] || "Let's make some new friends!", iconType: 'users' as const, gradient: 'from-amber-400 to-orange-500', iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500' }
                  ];

                  return (
                    <>
                      {/* Card 1 */}
                      <button
                        type="button"
                        onClick={() => setSpotlightElement({ ...openingCards[0], total: 3, items: openingCards })}
                        className="relative group bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-pink-500/80 hover:bg-[#221652] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-pink-400"
                        title="Haz clic para ver gigante en pantalla"
                      >
                        <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-pink-300 flex items-center gap-1">
                          <span>Zoom</span>
                          <Sparkles className="w-3 h-3 text-pink-400" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-pink-500/35 shrink-0 group-hover:scale-110 transition-transform">
                          <Target className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                          {openingCards[0].text}
                        </span>
                      </button>

                      {/* Card 2 */}
                      <button
                        type="button"
                        onClick={() => setSpotlightElement({ ...openingCards[1], total: 3, items: openingCards })}
                        className="relative group bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-cyan-500/80 hover:bg-[#15234d] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        title="Haz clic para ver gigante en pantalla"
                      >
                        <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-cyan-300 flex items-center gap-1">
                          <span>Zoom</span>
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-cyan-500/35 shrink-0 group-hover:scale-110 transition-transform">
                          <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                          {openingCards[1].text}
                        </span>
                      </button>

                      {/* Card 3 */}
                      <button
                        type="button"
                        onClick={() => setSpotlightElement({ ...openingCards[2], total: 3, items: openingCards })}
                        className="relative group bg-[#18113c]/95 border-2 border-violet-500/35 hover:border-amber-500/80 hover:bg-[#342416] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-amber-400"
                        title="Haz clic para ver gigante en pantalla"
                      >
                        <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 flex items-center gap-1">
                          <span>Zoom</span>
                          <Sparkles className="w-3 h-3 text-amber-400" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-3 shadow-lg shadow-amber-500/35 shrink-0 group-hover:scale-110 transition-transform">
                          <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-white leading-snug tracking-tight">
                          {openingCards[2].text}
                        </span>
                      </button>
                    </>
                  );
                })()}
              </div>

              {/* Let's Go Button */}
              {onNext && (
                <div className="pt-1">
                  <button
                    onClick={onNext}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-xl shadow-violet-600/40 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>LET'S GO!</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Image (42%) with Click-to-Zoom */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <button
                type="button"
                onClick={() => {
                  setSpotlightElement({
                    index: 0,
                    total: 1,
                    title: 'Imagen de Portada',
                    text: cls?.title || slide.title || '',
                    iconType: 'image',
                    gradient: 'from-indigo-600 to-purple-600',
                    iconBg: 'bg-gradient-to-br from-indigo-600 to-purple-600',
                    imageUrl: slide.imageUrl || '/images/teens-basic-zero-class-01/slide-01.jpg'
                  });
                }}
                className="relative group w-full h-full max-h-[540px] rounded-3xl overflow-hidden border-2 border-white/20 hover:border-pink-400/80 shadow-2xl bg-black/30 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
                title="Haz clic para ver la imagen en pantalla completa"
              >
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20">
                  <span>Zoom Gigante</span>
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-01.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      ) : isWrapUpSlide ? (
        <div className="relative flex-1 flex flex-col justify-between p-3 sm:p-5 lg:p-6 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#f59e0b] via-[#fbbf24] to-[#d97706] rounded-2xl sm:rounded-3xl shadow-2xl">
          {/* Inner White Stage Card */}
          <div className="relative flex-1 flex flex-col md:flex-row items-stretch gap-5 sm:gap-6 bg-[#fffcf5] rounded-[1.75rem] border-2 border-amber-200/80 p-5 sm:p-7 shadow-2xl min-h-0 overflow-hidden">
            {/* Left Content Area (58%) */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-slate-800 text-xs sm:text-sm font-black shadow-sm mb-2">
                  <span>🎉</span>
                  <span className="uppercase tracking-wider">Wrap-up & Celebration</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl text-amber-500 font-bold select-none">✨</span>
                  <h1 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-black text-slate-950 tracking-tight leading-tight">
                    {slide.title || 'Class Complete! 🏆'}
                  </h1>
                  <span className="text-2xl sm:text-3xl text-amber-500 font-bold select-none">✨</span>
                </div>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-slate-600 mt-1">
                  {slide.description || 'Great job! You did amazing today! 👏'}
                </p>
              </div>

              {/* 3 Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 my-auto py-2">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#eef2ff] border-2 border-indigo-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    🎯
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[0] || 'Nuevo tema dominado con éxito.'}
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#ecfdf5] border-2 border-emerald-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    ⚡
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[1] || 'Vocabulario y gramática en práctica.'}
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#f0f9ff] border-2 border-sky-200/80 shadow-md transition-all min-h-[100px]"
                >
                  <div className="text-3xl sm:text-4xl mb-1.5 filter drop-shadow-sm select-none">
                    🚀
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[0.95rem] font-extrabold text-slate-900 leading-snug">
                    {slide.content?.[2] || 'Fluidez y confianza conversacional.'}
                  </p>
                </motion.div>
              </div>

              {/* Encouragement Floating Pill */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 border-2 border-amber-300 shadow-md">
                  <span className="text-xl sm:text-2xl">🔥</span>
                  <span className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
                    Keep going! Level Up! 👏
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image with Celebration Badge (42%) */}
            <div className="w-full md:w-[42%] flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-amber-300 shadow-2xl bg-slate-900">
                {/* Purple Badge on Image */}
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl bg-indigo-600 text-white font-black text-xs sm:text-sm shadow-xl border border-indigo-400/50">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>+1 Class</span>
                </div>

                <img
                  src={slide.imageUrl || '/images/teens-basic-zero-class-01/slide-20.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Golden Frame */}
          <div className="flex items-center justify-between gap-3 pt-3 px-2 text-slate-950 font-bold">
            <div className="flex items-center gap-2 text-xs sm:text-sm bg-black/10 px-4 py-2 rounded-2xl">
              <span>📝</span>
              <span className="font-black uppercase tracking-wider text-slate-900">TEACHER NOTE:</span>
              <span className="text-slate-800">{section.action || 'Great participation today! 👏'}</span>
            </div>

            {onComplete && (
              <button
                type="button"
                onClick={() => {
                  fireClassCompletionConfetti();
                  onComplete();
                }}
                className="inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all border border-emerald-300 ring-2 ring-emerald-400/30 cursor-pointer"
                title="Marcar clase como completada"
              >
                <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                <span>¡Marcar Completa!</span>
                <Check className="w-4 h-4 stroke-[3]" />
              </button>
            )}
          </div>
        </div>
      ) : isHomeworkSlide ? (
        <HomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} isLastSlide={isLastSlide} onComplete={onComplete} />
      ) : isVideoHomeworkSlide ? (
        <VideoHomeworkSlideCard slide={slide} cls={cls} teacherNote={section.action} isLastSlide={isLastSlide} onComplete={onComplete} />
      ) : isSpeakingBossBattle ? (
        <SpeakingBossBattleGame
          bossName={slide.speakingBossBattle?.bossName}
          bossTitle={slide.speakingBossBattle?.bossTitle}
          bossAvatar={slide.speakingBossBattle?.bossAvatar}
          mission={slide.speakingBossBattle?.mission}
          starterPhrase={slide.speakingBossBattle?.starterPhrase}
          powerWords={slide.speakingBossBattle?.powerWords}
          targetGrammar={slide.speakingBossBattle?.targetGrammar}
          checklist={slide.speakingBossBattle?.checklist}
          timerSeconds={slide.speakingBossBattle?.timerSeconds}
          prepareSeconds={slide.speakingBossBattle?.prepareSeconds}
          rounds={slide.speakingBossBattle?.rounds}
        />
      ) : isRoleplaySlide ? (
        <RolePlayCard slide={slide} />
      ) : slide.type === 'emoji-game' ? (
        <EmojiMadnessGame
          title={slide.title || 'Visual Clue Challenge'}
          description={slide.description || 'Teen Greetings & Casual Introductions'}
          content={slide.content}
          options={slide.options}
          correctOptionIndex={slide.correctOptionIndex}
        />
      ) : slide.type === 'structure-drag' ? (
        <StructureDragExercise slide={slide} />
      ) : slide.type === 'objectives-animated' ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden">
          {/* Ambient luminous glow blobs */}
          <div className="pointer-events-none absolute -top-16 left-1/4 w-[400px] h-[250px] bg-gradient-to-b from-cyan-400/20 via-violet-600/10 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-[350px] h-[250px] bg-pink-500/15 blur-3xl" aria-hidden="true" />

          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-violet-300/90 mt-0.5">
                {slide.description || "Class Objectives / Objetivos de la Clase"}
              </p>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="text-cyan-300 text-3xl hidden sm:block"
            >
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-row items-center gap-7 min-h-0">
            <div className="w-[58%] h-full flex flex-col justify-center gap-3 sm:gap-4 min-w-0 py-1">
              {resolveGoalsList(slide, cls).map((rawLine, idx) => {
                const cleanLine = rawLine.replace(/^[✔️\s*•\d.-]+/, '').trim();
                const style = GOAL_CARD_STYLES[idx % GOAL_CARD_STYLES.length];
                const IconComponent = style.icon;
                const stepNum = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const allGoals = resolveGoalsList(slide, cls).map((line, gIdx) => ({
                        index: gIdx,
                        title: `Meta ${gIdx + 1} • Objetivo de la Clase`,
                        text: line.replace(/^[✔️\s*•\d.-]+/, '').trim(),
                        iconType: (gIdx === 0 ? 'target' : gIdx === 1 ? 'book' : 'users') as 'target' | 'book' | 'users',
                        gradient: GOAL_CARD_STYLES[gIdx % GOAL_CARD_STYLES.length].bg,
                        iconBg: GOAL_CARD_STYLES[gIdx % GOAL_CARD_STYLES.length].bg
                      }));
                      setSpotlightElement({ ...allGoals[idx], total: allGoals.length, items: allGoals });
                    }}
                    className={`relative group flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl sm:rounded-3xl ${style.bg} border-2 ${style.border} shadow-xl ${style.glow} backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-left focus:outline-none`}
                    title="Haz clic para ver esta meta gigante en pantalla"
                  >
                    <div className="absolute top-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                      <span>Zoom</span>
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-white/60 font-mono font-black text-lg sm:text-xl shrink-0">
                      {stepNum}
                    </span>
                    <span className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-white leading-tight tracking-tight drop-shadow-sm flex-1">
                      {cleanLine}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Floating image frame */}
            <div className="w-[42%] h-full flex items-center justify-center min-h-0">
              <button
                type="button"
                onClick={() => {
                  setSpotlightElement({
                    index: 0,
                    total: 1,
                    title: 'Ilustración de la Misión',
                    text: slide.title || cls?.title || 'Objetivos de la Clase',
                    iconType: 'image',
                    gradient: 'from-cyan-500 to-blue-600',
                    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
                    imageUrl: slide.imageUrl || '/images/default-objective.jpg'
                  });
                }}
                className="relative group w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 hover:border-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.4)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
                title="Haz clic para ver la imagen en pantalla completa"
              >
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20">
                  <span>Zoom Gigante</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="w-full h-full rounded-[22px] overflow-hidden">
                  <img
                    src={slide.imageUrl || '/images/default-objective.jpg'}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : slide.type === 'reading' && slide.content ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0a1b3f] via-[#0d2757] to-[#1d164d]">
          {/* High Brightness Ambient glow */}
          <div className="pointer-events-none absolute -top-16 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-cyan-300/30 via-sky-400/20 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-indigo-400/25 blur-3xl" aria-hidden="true" />
          
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-transparent drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg font-extrabold text-cyan-200 mt-0.5 drop-shadow">
                {slide.description || "Interactive Reading Practice / Lectura Dinámica"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFullTextView(!isFullTextView)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border-2 border-white/30 text-white text-xs sm:text-sm font-black backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-cyan-300" />
                <span>{isFullTextView ? "Modo Spotlight 🎯" : "Ver Todo el Texto 📜"}</span>
              </button>
              <div className="px-4 py-2 rounded-2xl bg-cyan-400/20 border-2 border-cyan-300/50 text-cyan-100 text-xs sm:text-sm font-black shadow-md">
                {readingLineIndex + 1} de {slide.content.length} frases
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-row items-center gap-6 min-h-0">
            {/* Left: Reading Stage */}
            <div className="w-[60%] h-full flex flex-col justify-between min-h-0">
              {isFullTextView ? (
                <div className="flex-1 rounded-3xl border-2 border-white/20 bg-slate-900/85 p-5 overflow-y-auto space-y-3 shadow-xl">
                  {slide.content.map((line, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setReadingLineIndex(idx);
                        setIsFullTextView(false);
                      }}
                      className={`p-4 rounded-2xl border-2 text-xl font-black transition-all cursor-pointer shadow-md ${
                        readingLineIndex === idx
                          ? 'border-cyan-300 bg-cyan-500/30 text-white shadow-[0_0_25px_rgba(6,182,212,0.45)] scale-[1.01]'
                          : 'border-white/15 bg-white/5 text-white hover:bg-cyan-950/50 hover:border-cyan-400'
                      }`}
                    >
                      <span className="text-cyan-300 font-mono mr-2">{String(idx + 1).padStart(2, '0')}.</span>
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-cyan-300/80 bg-slate-950/85 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.35)] backdrop-blur-2xl">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300">
                    <span className="bg-cyan-400/20 border-2 border-cyan-400/40 px-3.5 py-1.5 rounded-xl text-white font-black shadow-sm">
                      Frase en Foco #{readingLineIndex + 1}
                    </span>
                    <span className="text-white/80 font-bold">Lectura Guiada</span>
                  </div>

                  {/* Sentence Spotlight */}
                  <motion.div
                    key={readingLineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="my-auto py-4 text-center px-2"
                  >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                      "{slide.content[readingLineIndex]}"
                    </p>
                  </motion.div>

                  {/* Sentence Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => playSpeech(slide.content?.[readingLineIndex] || '')}
                        className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-base font-black transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Volume2 className="w-5 h-5" />
                        <span>Escuchar Pronunciación</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReadingLineIndex(prev => Math.max(0, prev - 1))}
                        disabled={readingLineIndex === 0}
                        className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-bold transition-colors cursor-pointer"
                      >
                        ← Anterior
                      </button>
                      <button
                        onClick={() => setReadingLineIndex(prev => Math.min(slide.content!.length - 1, prev + 1))}
                        disabled={readingLineIndex === slide.content.length - 1}
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-30 disabled:pointer-events-none text-slate-950 text-base font-black transition-all shadow-lg active:scale-95 cursor-pointer"
                      >
                        Siguiente ➔
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Context visual */}
            <div className="w-[40%] h-full flex flex-col justify-center min-h-0">
              <div className="relative w-full h-full max-h-[460px] rounded-3xl overflow-hidden border-2 border-sky-400/40 shadow-xl bg-black/40">
                <img
                  src={slide.imageUrl || '/images/adults-basic-zero-class-01/slide-06.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-200 text-xs font-black w-fit mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tip para el Profesor</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-relaxed drop-shadow">
                    Pídele al alumno leer en voz alta, practica la entonación y aclara cualquier duda antes de pasar a la siguiente frase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (slide.type === 'verb-arena-embedded' || Boolean(slide.verbArenaData) || Boolean((slide as any).verbsData) || Boolean((slide as any).vocabularyCards) || /verb arena|reto de vocabulario/i.test(slide.title || '')) ? (
        <div className="w-full h-full flex flex-col justify-center min-h-0 p-4">
          <Suspense fallback={<div className="text-white text-center font-bold">Cargando Reto de Vocabulario...</div>}>
            <VerbArenaGame 
              isEmbedded={true}
              customPool={resolveVerbArenaPool(slide)}
              maxRounds={slide.limit || (slide as any).verbsData?.length || slide.verbArenaData?.limit || (resolveVerbArenaPool(slide)?.length) || 6}
              onComplete={onNext || onComplete}
              onNextSlide={onNext}
            />
          </Suspense>
        </div>
      ) : slide.type === 'listening-audio-teacher' && slide.listeningData ? (
        <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#0c1330] via-[#140e36] to-[#250d3a]">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-16 left-1/3 w-[600px] h-[350px] bg-gradient-to-b from-violet-400/25 via-indigo-500/15 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-pink-500/20 blur-3xl" aria-hidden="true" />
          
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-violet-300 via-pink-200 to-white bg-clip-text text-transparent drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg font-extrabold text-violet-200 mt-0.5 drop-shadow">
                {slide.description || "Escucha el audio nativo y responde la pregunta de comprensión:"}
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-500/20 border-2 border-violet-400/40 text-violet-200 text-sm font-black shadow-md">
              <span>🎧 Listening Lab</span>
            </div>
          </div>

          {/* Main layout */}
          {(() => {
            const listeningText = slide.listeningData?.transcription || slide.listeningData?.audioTeacherText || '';
            return (
              <div className="flex-1 flex flex-row items-stretch gap-6 min-h-0 py-1">
                {/* Left side: Audio Controls & Transcription */}
                <div className="w-[48%] h-full flex flex-col justify-between gap-3 min-h-0">
                  <div className="rounded-3xl border-2 border-indigo-400/50 bg-slate-950/85 p-5 sm:p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between shrink-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-indigo-300">
                        🎧 Audio de la Clase
                      </span>
                      {isPlaying && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          Reproduciendo
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => {
                          if (isPlaying) {
                            if (audioRef.current) {
                              audioRef.current.pause();
                            }
                            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                              window.speechSynthesis.cancel();
                            }
                            setIsPlaying(false);
                          } else {
                            const audioUrl = slide.listeningData?.audioUrl;
                            if (audioUrl) {
                              if (!audioRef.current) {
                                audioRef.current = new Audio();
                              }
                              const audio = audioRef.current;
                              audio.src = audioUrl;
                              audio.playbackRate = listeningSpeed;
                              audio.onended = () => setIsPlaying(false);
                              audio.onerror = () => {
                                playSpeech(listeningText, 'en-US', listeningSpeed);
                                const words = listeningText.split(' ').length;
                                const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                                setTimeout(() => setIsPlaying(false), durationSec * 1000);
                              };
                              audio.play()
                                .then(() => setIsPlaying(true))
                                .catch(() => {
                                  setIsPlaying(true);
                                  playSpeech(listeningText, 'en-US', listeningSpeed);
                                  const words = listeningText.split(' ').length;
                                  const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                                  setTimeout(() => setIsPlaying(false), durationSec * 1000);
                                });
                            } else {
                              setIsPlaying(true);
                              playSpeech(listeningText, 'en-US', listeningSpeed);
                              const words = listeningText.split(' ').length;
                              const durationSec = Math.max(3, (words / 2.5) / listeningSpeed);
                              setTimeout(() => setIsPlaying(false), durationSec * 1000);
                            }
                          }
                        }}
                        className={`flex min-h-16 sm:min-h-18 items-center justify-center gap-3 px-6 py-4 rounded-2xl font-black text-xl sm:text-2xl transition-all cursor-pointer shadow-xl ${
                          isPlaying
                            ? 'bg-red-500/30 border-2 border-red-400 text-red-200 shadow-red-900/50 hover:bg-red-500/50'
                            : 'bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500 hover:from-violet-400 hover:to-pink-400 text-white shadow-indigo-500/40 hover:scale-[1.02] active:scale-95'
                        }`}
                      >
                        {isPlaying ? <VolumeX className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current" />}
                        <span>{isPlaying ? 'Pausar Audio' : '▶ Reproducir Audio'}</span>
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        {[0.7, 0.9, 1.0].map(s => (
                          <button
                            key={s}
                            onClick={() => {
                              setListeningSpeed(s);
                              if (audioRef.current && !audioRef.current.paused) {
                                audioRef.current.playbackRate = s;
                              } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                                window.speechSynthesis.cancel();
                                setIsPlaying(false);
                              }
                            }}
                            className={`h-11 sm:h-12 rounded-xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer ${
                              listeningSpeed === s
                                ? 'border-indigo-300 bg-indigo-500/40 text-white shadow-md ring-2 ring-indigo-400/30'
                                : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {s === 0.7 ? '🐢 Lento' : s === 0.9 ? '🚶 Normal' : '🚀 Rápido'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Teacher Transcript Toggle */}
                  <div className="rounded-3xl border-2 border-violet-400/40 bg-slate-950/85 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-2xl backdrop-blur-xl min-h-0">
                    <button
                      onClick={() => setShowListeningTranscript(!showListeningTranscript)}
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-100 text-base font-black border-2 border-violet-500/40 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer shadow-md"
                    >
                      {showListeningTranscript ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5 text-violet-300" />}
                      <span>{showListeningTranscript ? 'Ocultar Transcripción' : 'Revelar Transcripción (Profesor)'}</span>
                    </button>

                    <div className="flex-1 min-h-0 flex flex-col justify-center mt-2">
                      <AnimatePresence mode="wait">
                        {showListeningTranscript ? (
                          <motion.div
                            key="transcript-visible"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 rounded-2xl bg-violet-950/70 border-2 border-violet-400/40 text-lg sm:text-xl font-black text-violet-100 leading-relaxed shadow-inner max-h-44 overflow-y-auto"
                          >
                            "{listeningText}"
                          </motion.div>
                        ) : (
                          <motion.div
                            key="transcript-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="rounded-2xl border-2 border-dashed border-white/15 bg-white/5 p-4 text-center flex flex-col items-center justify-center h-full"
                          >
                            <span className="text-3xl sm:text-4xl mb-1">🎧</span>
                            <p className="text-sm sm:text-base font-bold text-violet-200/70">
                              Escucha con atención el audio para responder la pregunta de comprensión.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Right side: Comprehension Quiz */}
                <div className="w-[52%] h-full flex flex-col justify-between min-h-0">
                  {slide.listeningData.question ? (
                    <div className="rounded-3xl border-2 border-pink-400/50 bg-slate-950/85 p-6 sm:p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full min-h-0">
                      <div>
                        <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-pink-300">
                          🎯 Pregunta de Comprensión
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white mt-1.5 leading-snug drop-shadow-md">
                          {slide.listeningData.question}
                        </h2>
                      </div>

                      {slide.listeningData.options ? (
                        <div className="grid gap-3 my-2 flex-1 justify-center flex-col">
                          {slide.listeningData.options.map((opt, idx) => {
                            const isSelected = selectedListeningOption === idx;
                            const isCorrect = idx === slide.listeningData?.correctOptionIndex;
                            const optionLetter = ['A', 'B', 'C', 'D'][idx] || `${idx + 1}`;
                            let btnStyle = 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-pink-300';
                            
                            if (showListeningResult) {
                              if (isCorrect) {
                                btnStyle = 'border-emerald-400 bg-emerald-500/30 text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.4)]';
                              } else if (isSelected) {
                                btnStyle = 'border-red-400 bg-red-500/30 text-red-200';
                              } else {
                                btnStyle = 'border-white/10 bg-white/5 text-white/40';
                              }
                            } else if (isSelected) {
                              btnStyle = 'border-violet-400 bg-violet-500/30 text-violet-200';
                            }

                            return (
                              <button
                                key={idx}
                                disabled={showListeningResult}
                                onClick={() => {
                                  setSelectedListeningOption(idx);
                                  setShowListeningResult(true);
                                  if (isCorrect) confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
                                }}
                                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 text-base sm:text-lg lg:text-xl font-black flex items-center justify-between gap-3.5 transition-all shadow-lg hover:scale-[1.01] active:scale-[0.98] cursor-pointer ${btnStyle}`}
                              >
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl text-base sm:text-lg font-black flex items-center justify-center shrink-0 shadow-md ${
                                    showListeningResult && isCorrect
                                      ? 'bg-emerald-400 text-slate-950'
                                      : isSelected
                                      ? 'bg-pink-400 text-slate-950'
                                      : 'bg-white/15 text-white'
                                  }`}>
                                    {optionLetter}
                                  </span>
                                  <span className="min-w-0 break-words">{opt}</span>
                                </div>
                                {showListeningResult && isCorrect && (
                                  <Check className="w-6 h-6 text-emerald-300 shrink-0 stroke-[3]" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}

                      {showListeningResult && (
                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={onNext || onComplete}
                            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-base transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                          >
                            <span>Continuar ➔</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-3xl border-2 border-dashed border-white/20 bg-white/5 p-8 text-center flex flex-col items-center justify-center h-full">
                      <p className="text-2xl font-black text-white">Escucha con atención y comenta lo entendido con tu profesor.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      ) : (slide.type === 'story-decoder-embedded' || Boolean(slide.storyDecoderData) || /story decoder|descodificador/i.test(slide.title || '')) && resolveStoryDecoderLines(slide).length > 0 ? (
        <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-5 lg:p-6 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#06141c] via-[#091f26] to-[#041015]">
          {/* Ambient Emerald & Cyan Aura */}
          <div className="pointer-events-none absolute -top-16 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-emerald-400/25 via-teal-500/15 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-cyan-400/20 blur-3xl" aria-hidden="true" />

          {/* Top Bar */}
          {(() => {
            const lines = resolveStoryDecoderLines(slide);
            const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
            return (
              <div className="shrink-0 mb-1.5 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white tracking-tight leading-tight flex items-center gap-2.5 drop-shadow-md">
                    <span>🧩</span>
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">{slide.title}</span>
                  </h1>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-200 mt-0.5 drop-shadow">
                    {slide.description || "Ordena los bloques para traducir la frase correctamente:"}
                  </p>
                </div>

                {/* Line tabs */}
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black text-emerald-300 bg-emerald-500/20 border-2 border-emerald-400/50 px-3.5 py-1.5 rounded-xl shadow-md">
                    Línea {safeLineIndex + 1} de {lines.length}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Current line workspace */}
          {(() => {
            const lines = resolveStoryDecoderLines(slide);
            const safeLineIndex = Math.max(0, Math.min(storyLineIndex, lines.length - 1));
            const line = lines[safeLineIndex] || lines[0];
            if (!line) return null;

            const easyBlocks = line?.puzzle?.easy_blocks && line.puzzle.easy_blocks.length > 0
              ? line.puzzle.easy_blocks
              : (line?.en ? line.en.split(' ') : []);
            const tokens = shuffledStoryTokens.length > 0 ? shuffledStoryTokens : easyBlocks.map((t: string, i: number) => ({ id: String(i), text: t }));
            const correctOrder = easyBlocks;
            const assembled = selectedTokenIndexes.map(i => tokens[i]?.text ?? '').join(' ');
            const targetAnswer = line.preferred_answer || line.en || correctOrder.join(' ');
            const { speaker, quote } = parseDialogueLine(line?.es);

            return (
              <div className="flex-1 flex flex-col justify-between w-full min-h-0 py-0.5 gap-2 sm:gap-2.5">
                {/* Spanish Prompt Card with Conversational Speaker Highlight */}
                <div className="rounded-2xl sm:rounded-3xl bg-slate-950/85 border-2 border-emerald-400/60 p-3 sm:p-4 shadow-[0_0_35px_rgba(16,185,129,0.2)] text-center backdrop-blur-xl shrink-0">
                  <div className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">
                    🇪🇸 Frase en Español a Traducir
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {speaker ? (
                      <>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl sm:rounded-2xl bg-cyan-500/20 border-2 border-cyan-400/60 text-cyan-300 font-black text-lg sm:text-xl lg:text-2xl shadow-md shrink-0">
                          <span className="text-base sm:text-lg">👤</span>
                          <span>{speaker}:</span>
                        </span>
                        <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.35)] leading-snug tracking-tight">
                          "{quote}"
                        </span>
                      </>
                    ) : (
                      <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.35)] leading-snug tracking-tight">
                        "{quote}"
                      </span>
                    )}
                  </div>
                </div>

                {/* Assembled Tokens Slot Box */}
                <div className="rounded-2xl sm:rounded-3xl bg-slate-950/80 border-2 border-dashed border-emerald-400/50 p-3 sm:p-4 min-h-[75px] sm:min-h-[90px] flex flex-wrap gap-2.5 items-center justify-center shadow-inner shrink-0">
                  {selectedTokenIndexes.length === 0 ? (
                    <div className="flex items-center gap-2 text-white/50 text-base sm:text-lg font-bold italic py-1">
                      <span>👇</span>
                      <span>Toca las palabras de abajo en orden para construir la frase...</span>
                    </div>
                  ) : (
                    selectedTokenIndexes.map((ti, pos) => (
                      <motion.button
                        key={pos}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={() => setSelectedTokenIndexes(prev => prev.filter((_, p) => p !== pos))}
                        className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-2 border-emerald-400 text-emerald-100 text-lg sm:text-xl lg:text-2xl font-black shadow-lg shadow-emerald-500/30 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                        title="Toca para quitar de la respuesta"
                      >
                        <span>{tokens[ti]?.text}</span>
                        <span className="text-xs opacity-60">✕</span>
                      </motion.button>
                    ))
                  )}
                </div>

                {/* Word Bank Header & Tokens */}
                <div className="shrink-0 flex flex-col justify-center">
                  <div className="mb-1.5 flex items-center justify-between gap-2 px-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-300">Banco de palabras:</span>
                      {selectedTokenIndexes.length > 0 && (
                        <button
                          onClick={() => setSelectedTokenIndexes([])}
                          className="text-xs sm:text-sm font-black text-red-400 hover:text-red-300 transition-colors cursor-pointer ml-1 px-2.5 py-0.5 rounded-lg bg-red-500/10 border border-red-400/30"
                        >
                          ✕ Limpiar
                        </button>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setWordsRevealed(v => !v)}
                      className={`flex items-center gap-1.5 rounded-xl border-2 px-3.5 py-1 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        wordsRevealed
                          ? 'border-white/20 bg-white/10 text-white/80 hover:bg-white/20'
                          : 'border-yellow-300/60 bg-yellow-300/20 text-yellow-200 hover:bg-yellow-300 hover:text-yellow-950 shadow-lg shadow-yellow-500/20 animate-pulse'
                      }`}
                    >
                      {wordsRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Ocultar palabras</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>🧠 Revelar palabras</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center min-h-[50px]">
                    {tokens.map((t, i) => {
                      const used = selectedTokenIndexes.includes(i);
                      return (
                        <motion.button
                          key={t.id}
                          disabled={used}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.03 }}
                          onClick={() => {
                            if (!wordsRevealed) setWordsRevealed(true);
                            setSelectedTokenIndexes(prev => [...prev, i]);
                          }}
                          className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-black border-2 transition-all cursor-pointer shadow-xl ${
                            used
                              ? 'opacity-20 bg-white/5 border-white/10 text-white/30 scale-95 pointer-events-none'
                              : 'bg-[#0a2027] border-emerald-400/80 text-white hover:bg-emerald-500/40 hover:border-emerald-300 hover:scale-105 active:scale-95 shadow-emerald-950/50'
                          }`}
                        >
                          <span className={!wordsRevealed ? 'blur-md select-none opacity-30 transition-all' : 'transition-all'}>
                            {t.text}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback Alert */}
                {storyFeedback !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`rounded-2xl p-2.5 sm:p-3 text-center font-black border-2 shadow-xl shrink-0 ${
                      storyFeedback === 'correct'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-emerald-500/20'
                        : 'bg-red-500/20 border-red-400 text-red-200 shadow-red-500/20'
                    }`}
                  >
                    {storyFeedback === 'correct' ? (
                      <div className="flex items-center justify-center gap-2.5 text-lg sm:text-xl">
                        <span>🎉</span>
                        <span>¡Excelente! Frase descodificada correctamente.</span>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-base">
                        <span>❌ Respuesta esperada: </span>
                        <span className="text-white underline font-extrabold">"{targetAnswer}"</span>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Story Decoder Vocabulary Saver Tool (Activated after checking answer) */}
                {storyFeedback !== 'idle' && (
                  <StoryDecoderVocabTool
                    targetAnswer={targetAnswer}
                    spanishPrompt={line?.es || quote || ''}
                    easyBlocks={easyBlocks}
                    vocabularyCandidates={line?.vocabulary_candidates || []}
                    storyTitle={slide.title || cls?.title || 'Teens Class'}
                    studentId={activeStudentId}
                  />
                )}

                {/* Centered Controls */}
                <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 pt-0.5">
                  <button
                    onClick={() => {
                      const normalize = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, '');
                      const correct = normalize(assembled) === normalize(targetAnswer) || normalize(assembled) === normalize(correctOrder.join(' '));
                      setStoryFeedback(correct ? 'correct' : 'wrong');
                      if (correct) {
                        confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
                        playSpeech(targetAnswer, 'en-US', 0.9);
                      }
                    }}
                    disabled={selectedTokenIndexes.length === 0}
                    className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-2.5"
                  >
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                    <span>Comprobar Respuesta</span>
                  </button>

                  {storyFeedback !== 'idle' && safeLineIndex < lines.length - 1 && (
                    <button
                      onClick={() => {
                        setStoryLineIndex(i => i + 1);
                        setSelectedTokenIndexes([]);
                        setStoryFeedback('idle');
                        setWordsRevealed(false);
                        setShowStoryTarget(false);
                        const next = lines[safeLineIndex + 1];
                        const blocks = next?.puzzle?.easy_blocks && next.puzzle.easy_blocks.length > 0
                          ? next.puzzle.easy_blocks
                          : (next?.en ? next.en.split(' ') : []);
                        const shuffled = [...blocks].map((t: string, i: number) => ({ id: String(i), text: t })).sort(() => Math.random() - 0.5);
                        setShuffledStoryTokens(shuffled);
                      }}
                      className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
                    >
                      <span>Siguiente Línea</span>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                    </button>
                  )}

                  {safeLineIndex === lines.length - 1 && storyFeedback !== 'idle' && (
                    <button
                      onClick={onNext || onComplete}
                      className="min-h-12 sm:min-h-13 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-black text-base sm:text-lg lg:text-xl shadow-2xl shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5 animate-bounce"
                    >
                      <span>🏆 Continuar a la Siguiente Diapositiva</span>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      ) : (slide.type === 'writing-guided' || Boolean(slide.writingData) || Boolean((slide as any).writingPrompts) || /writing studio|producci[oó]n escrita|guided writing/i.test(slide.title || '')) ? (
        <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-7 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-[#070b18] via-[#0d132b] to-[#060814]">
          {/* Animated Futuristic Ambient Rings & Orbs */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-600/15 to-transparent blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full border border-cyan-500/20 bg-gradient-to-tl from-cyan-600/15 to-transparent blur-3xl" aria-hidden="true" />

          {/* Header */}
          <div className="shrink-0 mb-2 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight leading-tight bg-gradient-to-r from-violet-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg font-extrabold text-violet-200 mt-0.5 drop-shadow">
                {slide.writingData?.instructions ?? slide.description ?? "Escribe tus propios ejemplos completando las 3 casillas interactivas (+, −, ?):"}
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-500/20 border-2 border-violet-400/40 text-violet-200 text-sm font-black shadow-md">
              <span>⚡ Laboratorio de Producción</span>
            </div>
          </div>

          {/* 3 AI Writing Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 min-h-0 py-1">
            {(['positive','negative','question'] as const).map((tab, idx) => {
              const customData = resolveWritingCardData(slide, tab);

              const configs = {
                positive: {
                  emoji: '+',
                  defaultTitle: 'Afirmativa',
                  badgeBg: 'bg-emerald-500/25 text-emerald-300 border-emerald-400/60 ring-emerald-500/30',
                  cardBorder: 'border-emerald-500/40 hover:border-emerald-400/80',
                  cardBg: 'from-[#051a1d]/95 to-[#030f14]/95 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
                  textareaBorder: 'border-emerald-500/40 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20',
                  accentColor: 'text-emerald-300',
                  buttonBg: 'bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 border-emerald-400/40',
                },
                negative: {
                  emoji: '−',
                  defaultTitle: 'Negativa',
                  badgeBg: 'bg-rose-500/25 text-rose-300 border-rose-400/60 ring-rose-500/30',
                  cardBorder: 'border-rose-500/40 hover:border-rose-400/80',
                  cardBg: 'from-[#1c0813]/95 to-[#10030c]/95 shadow-[0_0_30px_rgba(244,63,94,0.15)]',
                  textareaBorder: 'border-rose-500/40 focus:border-rose-400 focus:ring-4 focus:ring-rose-400/20',
                  accentColor: 'text-rose-300',
                  buttonBg: 'bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border-rose-400/40',
                },
                question: {
                  emoji: '?',
                  defaultTitle: 'Pregunta',
                  badgeBg: 'bg-cyan-500/25 text-cyan-300 border-cyan-400/60 ring-cyan-500/30',
                  cardBorder: 'border-cyan-500/40 hover:border-cyan-400/80',
                  cardBg: 'from-[#07162b]/95 to-[#040b18]/95 shadow-[0_0_30px_rgba(6,182,212,0.15)]',
                  textareaBorder: 'border-cyan-500/40 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20',
                  accentColor: 'text-cyan-300',
                  buttonBg: 'bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 border-cyan-400/40',
                },
              };

              const cfg = configs[tab];
              const currentText = writingInputs[tab] || '';
              const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;
              const displayTitle = customData.title || cfg.defaultTitle;
              const placeholderText = customData.placeholder
                ? (customData.placeholder.startsWith('Ej:') ? customData.placeholder : `Ej: ${customData.placeholder}`)
                : `Escribe tu frase ${cfg.defaultTitle.toLowerCase()} (+, -, ?)...`;

              return (
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-gradient-to-b ${cfg.cardBg} border-2 ${cfg.cardBorder} backdrop-blur-xl transition-all shadow-2xl min-h-0`}
                >
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between mb-2 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-2xl border-2 ring-4 ${cfg.badgeBg} shadow-md`}>
                        {cfg.emoji}
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Estructura</span>
                        <h3 className={`text-lg sm:text-xl font-black leading-tight ${cfg.accentColor}`}>
                          {displayTitle}
                        </h3>
                      </div>
                    </div>

                    {currentText.trim().length > 0 && (
                      <button
                        onClick={() => playSpeech(currentText, 'en-US', 0.9)}
                        className={`p-2 sm:p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${cfg.buttonBg} hover:scale-105 active:scale-95`}
                        title="Escuchar pronunciación de lo que escribiste"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Prompt / Instruction if present */}
                  {customData.instruction && (
                    <div className="mb-2 p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-2 shrink-0">
                      {customData.instruction}
                    </div>
                  )}

                  {/* Textarea */}
                  <div className="flex-1 flex flex-col min-h-0 my-1">
                    <textarea
                      value={currentText}
                      onChange={e => setWritingInputs(prev => ({ ...prev, [tab]: e.target.value }))}
                      placeholder={placeholderText}
                      className={`flex-1 w-full bg-slate-950/80 border-2 rounded-2xl p-4 sm:p-5 text-white text-base sm:text-lg lg:text-xl font-bold placeholder-white/35 resize-none outline-none transition-all shadow-inner leading-relaxed ${cfg.textareaBorder}`}
                    />
                  </div>

                  {/* Formula Box if present */}
                  {customData.formula && (
                    <div className="mt-2 p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs sm:text-sm font-black text-amber-200 leading-tight shrink-0">
                      <span className="text-amber-300 mr-1.5 font-black">📐 Fórmula:</span>
                      <span className="text-amber-100">{customData.formula}</span>
                    </div>
                  )}

                  {/* Card Footer with Word Count & Example Toggle */}
                  <div className="mt-2 flex items-center justify-between gap-2 pt-2 border-t border-white/15 text-xs sm:text-sm shrink-0">
                    <span className="font-bold text-slate-300">
                      {wordCount} {wordCount === 1 ? 'palabra' : 'palabras'}
                    </span>

                    {customData.example && (
                      <button
                        onClick={() => setShowWritingExamples(prev => ({ ...prev, [tab]: !prev[tab] }))}
                        className="font-bold text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 cursor-pointer transition-colors px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30"
                      >
                        <Lightbulb className="w-4 h-4 text-yellow-400" />
                        <span>{showWritingExamples[tab] ? 'Ocultar' : 'Ver modelo'}</span>
                      </button>
                    )}
                  </div>

                  {/* Expandable Example */}
                  <AnimatePresence>
                    {showWritingExamples[tab] && customData.example && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 p-3 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-slate-100 shrink-0"
                      >
                        <span className="text-yellow-400 mr-1.5 font-black">💡 Ejemplo Modelo:</span>
                        <span>"{customData.example}"</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="shrink-0 flex items-center justify-between gap-3 pt-2">
            <div className="text-xs sm:text-sm font-bold text-slate-300">
              Completa las 3 casillas para afianzar la estructura aprendida.
            </div>
            <button
              onClick={() => {
                if (onNext) onNext();
                else if (onComplete) onComplete();
              }}
              className="min-h-12 px-7 py-3 rounded-2xl bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-black text-base transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
            >
              <span>Siguiente Diapositiva (Speaking)</span>
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      ) : slide.type === 'speaking' && slide.content ? (
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 z-10 min-h-0 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d231e] to-[#0c1a2d]">
          {/* Header */}
          <div className="shrink-0 mb-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base font-bold text-emerald-200/80 mt-0.5">
                {slide.description || "Let's Talk! / Dinámica de Conversación"}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
              Pregunta {speakingIndex + 1} de {slide.content.length}
            </div>
          </div>

          {/* Speaking Hero Spotlight Card */}
          <div className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-emerald-400/50 bg-[#0c1f1d]/90 p-8 shadow-[0_0_35px_rgba(16,185,129,0.25)] backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-emerald-400">
              <span>Misión de Conversación #{speakingIndex + 1}</span>
              <span>¡Habla en Inglés! 🎙️</span>
            </div>

            {/* Question Large Typography */}
            <motion.div
              key={speakingIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="my-auto text-center py-4"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                {slide.content[speakingIndex]}
              </p>

              {/* Starter phrase helper */}
              <div className="mt-4 inline-block px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-emerald-200 text-base font-bold backdrop-blur-sm">
                💬 Puedes iniciar diciendo: <span className="text-white underline">"In my opinion..."</span> o <span className="text-white underline">"I usually..."</span>
              </div>
            </motion.div>

            {/* Carousel Navigation Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => playSpeech(slide.content?.[speakingIndex] || '')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-black transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Escuchar Pregunta</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSpeakingIndex(prev => Math.max(0, prev - 1))}
                  disabled={speakingIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-bold transition-colors cursor-pointer"
                >
                  ← Anterior
                </button>

                <button
                  onClick={() => {
                    if (speakingIndex < slide.content!.length - 1) {
                      setSpeakingIndex(prev => prev + 1);
                    } else {
                      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
                      alert("¡Excelente! Has completado todas las preguntas de conversación de hoy. 🎉");
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-sm font-black transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  {speakingIndex < slide.content.length - 1 ? "Siguiente Pregunta ➔" : "¡Finalizar Conversación! 🎉"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isSpinningWheelSlide && slide.wheelItems ? (
        <div className="w-full h-full flex flex-col items-center justify-center min-h-0 p-4">
          <SpinningWheel
            items={slide.wheelItems}
            mode={slide.wheelMode}
            title={slide.title}
            subtitle={slide.description || "Spin and answer one easy question."}
            onSpinComplete={(item) => setSelectedSpeakingPrompt(item.prompt || item.label)}
          />
        </div>
      ) : (
        <>
          {(() => {
            const rawTitle = slide.title || '';
            const cleanTitle = rawTitle
              .replace(/\(\s*\d+\s*\(\s*(\d+)\s*\/\s*(\d+)\s*\)\s*\)/g, '($1/$2)')
              .replace(/\(\s*(\d+)\s*\/\s*(\d+)\s*\)/g, '($1/$2)');

            return (
              <div className={`${
                isScreenShareExerciseSlide ? 'p-4 sm:p-6 pb-1.5 sm:pb-2' : 'p-4 sm:p-7 pb-2 sm:pb-3'
              } shrink-0`}>
                <h1 className={`${
                  isScreenShareExerciseSlide ? 'text-2xl sm:text-4xl lg:text-[2.5rem]'
                    : 'text-2xl sm:text-5xl'
                } font-black tracking-tight mb-1 sm:mb-1.5`}>
                  {isScreenShareExerciseSlide && cleanTitle.includes('/') ? (
                    <>
                      <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-sm">
                        {cleanTitle.split('/')[0].trim()}
                      </span>
                      <span className="text-white/40 mx-2.5 font-normal">/</span>
                      <span className="bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
                        {cleanTitle.split('/')[1].trim()}
                      </span>
                    </>
                  ) : isScreenShareExerciseSlide ? (
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent">
                      {cleanTitle}
                    </span>
                  ) : (
                    slide.title
                  )}
                </h1>
                {slide.description && (
                  <p className={`${
                    isScreenShareExerciseSlide ? 'text-xs sm:text-sm text-amber-300 font-bold uppercase tracking-wider'
                      : 'text-base sm:text-xl font-medium'
                  }`}>
                    {isScreenShareExerciseSlide ? `🎯 ${slide.description}` : slide.description}
                  </p>
                )}
              </div>
            );
          })()}

          {/* Content Area */}
          <div className={`flex-1 ${
            isScreenShareExerciseSlide ? 'p-4 sm:p-5 pt-1 sm:pt-1.5'
              : 'p-4 sm:p-7 pt-1 sm:pt-2'
          } flex flex-col md:flex-row ${
            isScreenShareExerciseSlide ? 'gap-3 sm:gap-4'
              : 'gap-4 sm:gap-6'
          } overflow-hidden min-h-0 min-w-0`}>

            {/* Left text content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-3 sm:gap-4">

              {slide.type === 'matching-game' && slide.matchingPairs && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <MatchingGame pairs={slide.matchingPairs} onComplete={() => {}} />
                </div>
              )}

              {slide.type === 'mystery-puzzle' && slide.mysteryPuzzleData && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <MysteryPuzzleGame targetWord={slide.mysteryPuzzleData.target}
                    imageUrl={slide.mysteryPuzzleData.imageUrl} emoji={slide.mysteryPuzzleData.emoji}
                    panels={slide.mysteryPuzzleData.panels} />
                </div>
              )}

              {isAlphabetGame && <AlphabetPronunciationGame slide={slide} />}
              {isAccuracyContrastSlide && <AccuracyContrastCard slide={slide} />}

              {isVocabularySlide && slide.vocabularyCards && slide.vocabularyCards.length > 0 ? (
                <VocabularyFlipCards
                  cards={slide.vocabularyCards}
                  audience={cls.id.includes('kid') ? 'kids' : cls.id.includes('teen') ? 'teens' : 'adults'}
                />
              ) : null}

              {/* Generic text lines */}
              {slide.type !== 'spinning-wheel' && slide.type !== 'matching-game' &&
                slide.type !== 'mystery-puzzle' &&
                slide.type !== 'speaking-assessment-experimental' &&
                !isRoleplaySlide && !isAccuracyContrastSlide &&
                (!isVocabularySlide || !slide.vocabularyCards || slide.vocabularyCards.length === 0) && slide.content?.map((line, i) => {
                  if (slide.type === 'reading') {
                    return (
                      <div key={i} className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed bg-black/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg text-justify">
                        {line}
                      </div>
                    );
                  }
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${
                        isScreenShareExerciseSlide
                          ? 'text-2xl sm:text-3xl md:text-[2.4rem] font-black leading-snug p-5 sm:p-7 min-h-[105px] sm:min-h-[125px] flex items-center justify-center text-center bg-[#101740]/95 rounded-2xl sm:rounded-3xl border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.35)] backdrop-blur-md text-white drop-shadow-sm'
                          : 'text-lg sm:text-3xl font-medium leading-relaxed p-4 sm:p-6 bg-black/10 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg'
                      }`}
                    >
                      {line}
                    </motion.div>
                  );
                })}

              {/* AI assistant */}
              {isOptionalAiSpeakingSlide && !slide.hideAiAssistant &&
                slide.type !== 'speaking-assessment-experimental' &&
                slide.type !== 'reading' &&
                slide.type !== 'speaking' &&
                !isRoleplaySlide && !isVocabularySlide && (
                <InlineAiSpeakingAssistant
                  title={isReadingPracticeSlide ? 'Asistente IA de lectura' : 'Asistente IA de esta diapositiva'}
                  initialQuestion={selectedSpeakingPrompt || slideSpeakingQuestions[0] || ''}
                  candidateQuestions={slideSpeakingQuestions}
                  mode={isReadingPracticeSlide ? 'reading' : 'speaking'} />
              )}

              {/* WhatsApp homework share */}
              {(slide.type === 'homework' || (slide.title || '').toLowerCase().includes('homework')) && (
                <div className="mt-6 flex">
                  <button onClick={() => {
                    const hw = slide.content ? slide.content.join('\n') : '';
                    let vid = slide.videoUrl;
                    if (vid?.includes('/embed/')) vid = vid.replace('/embed/', '/watch?v=');
                    const vidText = vid ? `\n🎬 Video: ${vid}` : '';
                    const msg = `📚 Tarea de la clase "${cls.title}":\n\n${slide.description}\n\n${hw}${vidText}\n\n¡Mucho éxito!`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                  }} className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    Compartir por WhatsApp
                  </button>
                </div>
              )}

              {/* Multiple choice options */}
              {slide.type !== 'speaking-assessment-experimental' &&
                !isRoleplaySlide && !isVocabularySlide && slide.options && slide.options.length > 0 && (
                <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-4 pt-1 sm:pt-2 w-full min-h-0">
                  {slide.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === slide.correctOptionIndex;
                    const isRevealed = showResult && isSelected;
                    const letter = ['A', 'B', 'C', 'D', 'E'][idx] || String(idx + 1);

                    let btn = 'w-full px-5 sm:px-7 py-4 sm:py-5 min-h-[70px] sm:min-h-[80px] lg:min-h-[88px] flex-1 rounded-2xl sm:rounded-3xl text-xl sm:text-2xl lg:text-[1.95rem] font-black transition-all shadow-xl border-2 flex items-center justify-between text-left backdrop-blur-md ';

                    if (!showResult) {
                      btn += 'bg-[#18113c]/90 border-violet-500/50 hover:border-cyan-400/80 hover:bg-[#20154d] text-white hover:scale-[1.02] active:scale-[0.99] cursor-pointer shadow-lg shadow-violet-950/40';
                    } else if (isRevealed) {
                      btn += isCorrect
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-300 scale-[1.02] shadow-2xl shadow-emerald-500/50 ring-4 ring-emerald-400/60'
                        : 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400 opacity-70';
                    } else {
                      btn += isCorrect
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-300 ring-2 ring-emerald-400/60'
                        : 'bg-[#150f33]/60 text-white/40 border-white/10 opacity-40';
                    }

                    return (
                      <button key={idx} disabled={showResult} onClick={() => handleOptionSelect(idx)} className={btn}>
                        <div className="flex items-center gap-3.5 sm:gap-5 min-w-0 flex-1">
                          <span className={`inline-flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl font-black text-xl sm:text-2xl shrink-0 shadow-md ${
                            !showResult
                              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-cyan-500/30'
                              : 'bg-white/25 text-white'
                          }`}>{letter}</span>
                          <span className="leading-snug font-black text-left break-words line-clamp-2 sm:line-clamp-none">{opt}</span>
                        </div>
                        {showResult && isCorrect && <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0 ml-2" />}
                        {showResult && isRevealed && !isCorrect && <span className="text-xl sm:text-2xl font-black shrink-0 ml-2 text-white">✕</span>}
                      </button>
                    );
                  })}
                </div>
              )}

              {isLastSlide && onComplete && (
                <div className="mt-auto pt-8">
                  <button
                    onClick={() => {
                      fireClassCompletionConfetti();
                      onComplete();
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-2xl py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl border-2 border-emerald-300 ring-4 ring-emerald-400/40 cursor-pointer"
                  >
                    <Sparkles className="w-7 h-7 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                    <span>¡Marcar Clase Completa!</span>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Image or Video */}
            {slide.type !== 'speaking-assessment-experimental' &&
              !isRoleplaySlide && !isVocabularySlide && (slide.type === 'video' || slide.type === 'homework') && slide.videoUrl ? (
              <div className="flex-1 bg-black/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <iframe src={slide.videoUrl} title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="w-full h-full border-0" />
              </div>
            ) : slide.type !== 'speaking-assessment-experimental' &&
              !isRoleplaySlide && !isAccuracyContrastSlide && !isVocabularySlide && slide.type !== 'spinning-wheel' &&
              slide.imageUrl && !imageError ? (
              <div className="w-[42%] h-full flex items-center justify-center min-h-0">
                <div className="relative w-full h-full max-h-[480px] rounded-3xl overflow-hidden border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(168,85,247,0.4)] bg-black/40 p-1 bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30">
                  <div className="w-full h-full rounded-[22px] overflow-hidden">
                    <img src={slide.imageUrl} referrerPolicy="no-referrer" alt={slide.title}
                      className="w-full h-full object-cover" onError={() => setImageError(true)}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
        </>
      )
      }

      {/* Teacher Note */}
      {(section.action || (slide as any).teacherNote || isOpeningSlide || isGoalsSlide || slide.type === 'objectives-animated' || isSpinningWheelSlide) && !isSpeakingBossBattle && !isRoleplaySlide && !isHomeworkSlide && !isVideoHomeworkSlide && !isWrapUpSlide && !hideTeacherNote && (
        <div className={`${isScreenShareExerciseSlide ? 'bg-black/25 p-2.5 sm:p-3' : 'bg-black/30 p-3 sm:p-4'} backdrop-blur-md border-t border-white/10 shrink-0 mt-auto`}>
          <p className={`${isScreenShareExerciseSlide ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'} text-yellow-300/90 font-medium flex items-center gap-2`}>
            <span className="bg-yellow-400/20 px-2 py-1 rounded text-yellow-300 font-bold tracking-wide uppercase text-[10px] sm:text-xs">👩‍🏫 Nota para el profe</span>
            {(() => {
              if (isOpeningSlide || currentIndex === 0 || /welcome|bienvenid|presentaci[oó]n/i.test(slide.title || '')) {
                return 'Saludar cordialmente al estudiante, conectar con entusiasmo y preparar la sesión de hoy.';
              }
              if (slide.type === 'objectives-animated' || isGoalsSlide || /objetivo|misi[oó]n|goals|mission|metas/i.test(slide.title || '')) {
                return 'Presentar con claridad los 3 objetivos de la clase y motivar al estudiante a alcanzarlos hoy.';
              }
              if (isSpinningWheelSlide || slide.type === 'spinning-wheel' || /ruleta|wheel/i.test(slide.title || '')) {
                return 'Girar la ruleta, hacer la pregunta seleccionada y motivar al estudiante a responder en inglés.';
              }
              return (slide as any).teacherNote || section.action || 'Guiar la actividad y evaluar la pronunciación y fluidez del estudiante.';
            })()}
          </p>
        </div>
      )}

      {/* Global Giant Spotlight Modal Overlay (Pure Zoom, No Audio) */}
      <AnimatePresence>
        {spotlightElement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSpotlightElement(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gradient-to-b from-[#1c1547] via-[#100b2b] to-[#0a071d] border-4 border-violet-400/50 rounded-[3rem] p-8 sm:p-14 shadow-[0_0_100px_rgba(168,85,247,0.5)] flex flex-col items-center text-center gap-6 text-white cursor-default"
            >
              {/* Close button */}
              <button
                onClick={() => setSpotlightElement(null)}
                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition active:scale-90 cursor-pointer border border-white/10 shadow-lg"
                title="Cerrar (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              {spotlightElement.iconType === 'image' ? (
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="w-full max-h-[62vh] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/50 flex items-center justify-center">
                    <img
                      src={spotlightElement.imageUrl}
                      alt={spotlightElement.text}
                      className="w-full h-full object-contain max-h-[60vh] rounded-2xl"
                    />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-white/90">{spotlightElement.text}</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center gap-6 py-2">
                  {/* Giant Icon Badge */}
                  <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl ${spotlightElement.iconBg || 'bg-gradient-to-br from-indigo-500 to-purple-600'} flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 ring-4 ring-white/20 animate-pulse`}>
                    {spotlightElement.iconType === 'target' && <Target className="w-14 h-14 sm:w-16 sm:h-16 stroke-[2.5]" />}
                    {spotlightElement.iconType === 'book' && <BookOpen className="w-14 h-14 sm:w-16 sm:h-16 stroke-[2.5]" />}
                    {spotlightElement.iconType === 'users' && <Users className="w-14 h-14 sm:w-16 sm:h-16 stroke-[2.5]" />}
                  </div>

                  {/* Tag pill */}
                  <span className="px-5 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-black uppercase tracking-widest text-violet-300 border border-violet-400/40 shadow-inner">
                    {spotlightElement.title}
                  </span>

                  {/* Giant Text (Screen-share and phone friendly) */}
                  <p className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight px-3 max-w-3xl drop-shadow-lg my-2">
                    "{spotlightElement.text}"
                  </p>

                  {/* Navigation between elements */}
                  {spotlightElement.items && spotlightElement.items.length > 1 && (
                    <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/10 w-full justify-center">
                      <button
                        onClick={() => {
                          const items = spotlightElement.items!;
                          const newIdx = (spotlightElement.index - 1 + items.length) % items.length;
                          const prevItem = items[newIdx];
                          setSpotlightElement({ ...prevItem, index: newIdx, total: items.length, items });
                        }}
                        className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-90 flex items-center gap-1.5 font-bold text-sm cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" /> Anterior
                      </button>
                      <span className="text-sm font-mono font-extrabold text-violet-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                        {spotlightElement.index + 1} / {spotlightElement.total}
                      </span>
                      <button
                        onClick={() => {
                          const items = spotlightElement.items!;
                          const newIdx = (spotlightElement.index + 1) % items.length;
                          const nextItem = items[newIdx];
                          setSpotlightElement({ ...nextItem, index: newIdx, total: items.length, items });
                        }}
                        className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-90 flex items-center gap-1.5 font-bold text-sm cursor-pointer"
                      >
                        Siguiente <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // ── Compact wrapper (scales 1280×720 to fit available viewport) ───────────
  if (compact) {
    return (
      <div
        ref={wrapperRef}
        className="relative overflow-hidden rounded-2xl shadow-2xl m-auto shrink-0 select-text"
        style={{
          width: COMPACT_W * scale,
          height: COMPACT_H * scale,
        }}
      >
        <div
          style={{
            width: COMPACT_W,
            height: COMPACT_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <SlideSelectionTranslator className="w-full h-full">
            {slideJSX}
          </SlideSelectionTranslator>
        </div>
      </div>
    );
  }

  // ── Normal wrapper ─────────────────────────────────────────────────────────
  return (
    <div className={`${className} flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl select-text`}>
      <SlideSelectionTranslator className="w-full h-full flex flex-col">
        {slideJSX}
      </SlideSelectionTranslator>
    </div>
  );
}
