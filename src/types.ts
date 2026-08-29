export interface VocabularyItem {
  word: string;
  translation: string;
  imageUrl?: string;
  iconName?: string;
  color?: string;
}

export interface QuizQuestion {
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface GrammarGuide {
  title: string;
  explanation: string;
  structure?: string;
  examples: string[];
}

export interface Lesson {
  id: string;
  categoryId?: string; // For library lessons
  title: string;
  etapa: string;
  objetivo: string;
  lenguajeClave: string;
  practica: string;
  tarea: string;
  icon3D?: string;
  imageUrl?: string;
  grammar?: GrammarGuide[];
  vocabulario: VocabularyItem[];
  quiz: QuizQuestion[];
  videoId?: string; // YouTube video ID for embedded content if any
}

export interface UserProgress {
  completedLessons: string[];
  approvedLevelIds?: string[];
  currentLessonId: string;
  level?: string;
  studentName?: string;
  avatarId?: string;
  studentType?: string;
  presentationMode?: 'studio' | 'classic';
}

export interface VocabularyCard {
  word: string;
  translation: string;
  phonetic?: string;
  example?: string;
  exampleEs?: string;
  iconName?: string;
  imageUrl?: string;
}

export interface ClassSlide {
  id: string;
  classId?: string;
  title: string;
  description?: string;
  content?: string[];
  imageUrl?: string;
  bgColor?: string;
  options?: string[];
  correctOptionIndex?: number;
  type?: 'normal' | 'scavenger-hunt' | 'tongue-twister' | 'roleplay' | 'lets-say' | 'speaking-scene' | 'alphabet-game' | 'story-dice' | 'emoji-game' | 'speaking-boss-battle' | 'speaking-assessment-experimental' | 'reading' | 'video-task' | 'video' | 'spinning-wheel' | 'matching-game' | 'vocabulary' | 'speaking' | 'game' | 'grammar' | 'homework' | 'mystery-puzzle' | 'structure-drag' | 'objectives-animated' | 'verb-arena-embedded' | 'listening-audio-teacher' | 'writing-guided' | 'story-decoder-embedded';
  vocabularyCards?: VocabularyCard[];
  verbsData?: {
    verb?: string;
    term?: string;
    word?: string;
    meaning?: string;
    meaning_es?: string;
    translation?: string;
    past?: string;
    participle?: string;
    past_participle?: string;
    pronunciation?: string;
    example?: string;
    example_en?: string;
    exampleEs?: string;
    category?: string;
  }[];
  limit?: number;
  verbArenaData?: {
    category: 'all' | 'common_verb' | 'irregular_verb' | 'phrasal_verb' | 'idiom';
    limit?: number;
    customWords?: string[];
    verbs?: any[];
  };
  listeningData?: {
    audioUrl: string;
    transcription?: string;
    question?: string;
    options?: string[];
    correctOptionIndex?: number;
  };
  storyDecoderData?: {
    lines?: {
      id?: string;
      line_id?: string;
      badge?: string;
      type?: string;
      es: string;
      en: string;
      preferred_answer?: string;
      accepted_answers?: string[];
      puzzle?: {
        easy_blocks?: string[];
        medium_blocks?: string[];
        hard_word_by_word?: string[];
        expert_with_distractors?: string[];
      };
      difficulty?: number;
      grammar_focus?: string;
      pattern?: string;
      focus_tokens?: string[];
      common_errors?: string[];
      hints?: string[];
      tutor_explanation?: string;
    }[];
    sentences?: {
      id?: string;
      line_id?: string;
      badge?: string;
      type?: string;
      es: string;
      en: string;
      preferred_answer?: string;
      accepted_answers?: string[];
      puzzle?: {
        easy_blocks?: string[];
        medium_blocks?: string[];
        hard_word_by_word?: string[];
        expert_with_distractors?: string[];
      };
    }[];
  };
  writingData?: {
    instructions: string;
    prompt: string;
    exampleEs?: string;
    exampleEn?: string;
    maxWords?: number;
  };
  homeworkData?: {
    task?: string;
    taskHighlights?: string[];
    exampleLines?: string[];
    tips?: string[];
    badgeText?: string;
    whatToInclude?: {
      icon: string;
      label: string;
      highlight?: string;
    }[];
    dueDate?: string;
    whatsappMessage?: string;
  };
  speakingScene?: {
    topic: string;
    topicEs: string;
    cues: {
      icon?: string;
      label: string;
      labelEs?: string;
      questionExample?: string;
    }[];
    roleA: {
      label: string;
      labelEs?: string;
      action: string;
      actionEs?: string;
      avatar?: string;
    };
    roleB: {
      label: string;
      labelEs?: string;
      action: string;
      actionEs?: string;
      avatar?: string;
    };
    helpWords: {
      emoji?: string;
      word: string;
      translation: string;
    }[];
    hiddenPhrases?: {
      ask: { en: string; es: string }[];
      answer: { en: string; es: string }[];
    };
  };
  letsSay?: {
    /** The cinematic prompt shown big on screen: "Let's say that..." */
    prompt: string;
    promptEs: string;
    roleA: {
      emoji?: string;
      label: string;
      labelEs?: string;
      mission: string;
      missionEs?: string;
      starterPhrase: string;
      starterPhraseEs?: string;
      usefulPhrases?: string[];
    };
    roleB: {
      emoji?: string;
      label: string;
      labelEs?: string;
      mission: string;
      missionEs?: string;
      starterPhrase: string;
      starterPhraseEs?: string;
      usefulPhrases?: string[];
    };
    usefulVocabulary?: string[];
    successChecklist?: string[];
    /** 'kids' = large font, 1-2 phrases, emoji-centric layout */
    mode?: 'default' | 'kids';
  };
  alphabetGame?: {
    title?: string;
    titleEs?: string;
    /** Letters to show. Defaults to A-Z if omitted */
    letters?: string[];
    /** Bonus round: spell a username/word letter by letter */
    bonusSpelling?: {
      enabled: boolean;
      placeholder?: string;
      placeholderEs?: string;
    };
    /** Show TTS audio button for pronunciation model */
    showAudio?: boolean;
  };
  videoUrl?: string; // e.g. youtube embed url
  structureDrag?: {
    patternName: string;
    instructions: string;
    prompt: string;
    accentColor?: string;
    learningOpportunity?: string;
    difficulty?: 'easy' | 'medium' | 'hard' | 'challenge';
    slots: {
      id: string;
      label: string;
      text: string;
      color: string;
    }[];
    tokens: {
      id: string;
      label: string;
      text: string;
      color: string;
    }[];
  };
  roleplay?: {
    mode?: 'guided-conversation';
    scenario: string;
    situation: string;
    setupInstruction?: string;
    conversationGoal?: string;
    modelDialogue?: {
      a: string;
      b: string;
    };
    players?: {
      aNamePlaceholder: string;
      bNamePlaceholder: string;
    };
    roles: {
      a: { label: string; goal: string };
      b: { label: string; goal: string };
    };
    mission: string[];
    steps?: {
      id: string;
      speaker: 'a' | 'b' | 'both';
      title: string;
      instruction: string;
      phrases: string[];
      vocabulary: string[];
      kind?: 'ask' | 'answer' | 'react' | 'close';
      phrasePrompt?: string;
      support?: {
        label: string;
        instruction?: string;
        items?: string[];
      };
      nextLabel?: string;
    }[];
    usefulPhrases: string[];
    successChecklist: string[];
    victoryMessage?: string;
  };
  wheelMode?: 'warmup' | 'review';
  wheelItems?: { label: string; color: string; prompt?: string; es?: string }[];
  matchingPairs?: { left: string; right: string; id: string }[];
  mysteryPuzzleData?: { target: string; imageUrl?: string; emoji?: string; panels: { id: number; label: string; color: string }[] };
  speakingBossBattle?: {
    bossName: string;
    bossTitle?: string;
    bossAvatar?: string;
    mission?: string;
    starterPhrase?: string;
    powerWords?: string[];
    targetGrammar?: string;
    checklist?: string[];
    timerSeconds?: number;
    prepareSeconds?: number;
    rounds: {
      remember: string[];
      use: string[];
      speak: string[];
    };
  };
  speakingAssessment?: {
    expectedText: string;
    maxDurationSeconds?: number;
    silenceStopSeconds?: number;
  };
  hideAiAssistant?: boolean;
  customButtonText?: string;
  notes?: string;
}

export type SpeakingSceneData = NonNullable<ClassSlide['speakingScene']>;

export interface ClassSection {
  id: string;
  title: string;
  duration: string;
  objective: string;
  slides: ClassSlide[];
  action: string;
}

export interface CurriculumClass {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  objective?: string;
  sections: ClassSection[];
}

export interface OralQuestion {
  question: string;
  topic: string;
}

export interface VirtualQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-in-the-blanks' | 'listening';
  question: string;
  options?: string[];
  correctAnswer: string;
  audioText?: string; // For text-to-speech fallback if no audio recording
  imageUrl?: string;
}

export interface EvaluationRecord {
  id?: string;
  student_name: string;
  level_id: string;
  score: number;
  total_questions: number;
  answers?: Record<string, unknown>;
  created_at?: string;
}

export interface CurriculumLevel {
  id: string;
  level?: string;
  title: string;
  duration: string;
  objective: string;
  mcfrEquivalent: string;
  classes: CurriculumClass[];
  oralEvaluation?: OralQuestion[];
  virtualEvaluation?: VirtualQuestion[];
}

export interface DbStudent {
  id: string;
  name: string;
  avatar_id: string;
  level: string;
  type?: string;
  presentation_mode?: 'studio' | 'classic';
  completed_lessons: string[];
  approved_levels?: string[];
  group_id?: string;
  created_at?: string;
}

export interface DbGroup {
  id: string;
  name: string;
  description: string;
  created_at?: string;
}

export interface VocabExample {
  en: string;
  es: string;
  cloze: string;
  highlightWord?: string;
}

export interface VocabMeaning {
  meaningNumber: number;
  meaningLabel: string;
  definitionEs: string;
  definitionEn: string;
  usageTip?: string;
  contextExamples: VocabExample[];
}

export interface VocabItem {
  id: string;
  studentId?: string | null;
  term: string;
  type: 'phrasal_verb' | 'idiom' | 'expression' | 'word' | 'slang' | 'collocation';
  ipa?: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  isMultiMeaning: boolean;
  meanings: VocabMeaning[];
  sourceNote?: string;
  sectionSource?: 'story_decoder' | 'slides' | 'reading' | 'general';
  masteryScore: number; // 0 to 100
  reviewCount: number;
  correctStreak: number;
  lastTestedAt?: string;
  nextReviewAt?: string;
  createdAt: string;
}
