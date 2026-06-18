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
  currentLessonId: string;
  level?: string;
  studentName?: string;
  avatarId?: string;
}

export interface ClassSlide {
  id: string;
  title: string;
  description: string;
  content?: string[];
  imageUrl?: string;
  bgColor?: string;
  options?: string[];
  correctOptionIndex?: number;
  type?: 'normal' | 'scavenger-hunt' | 'tongue-twister' | 'roleplay' | 'story-dice' | 'emoji-game' | 'reading' | 'video';
  videoUrl?: string; // e.g. youtube embed url
}

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
  description: string;
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
  completed_lessons: string[];
  group_id?: string;
  created_at?: string;
}

export interface DbGroup {
  id: string;
  name: string;
  description: string;
  created_at?: string;
}
