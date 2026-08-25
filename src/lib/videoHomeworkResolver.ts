import { ClassSlide, CurriculumClass } from '../types';
import { TEEN_VIDEO_HOMEWORK_CATALOG, TeenVideoHomeworkSpec } from '../data/teenVideoHomeworkCatalog';

export interface VideoHomeworkData {
  videoUrl: string;
  watchInstruction: string;
  watchHighlight?: string;
  writeInstruction: string;
  writeHighlight?: string;
  placeholder1: string;
  placeholder2: string;
  ideas: { text: string; emoji: string }[];
  whatsappMessage?: string;
}

export function resolveVideoHomeworkData(slide: ClassSlide, cls?: CurriculumClass): VideoHomeworkData {
  const classId = cls?.id || '';
  const catalogEntry = TEEN_VIDEO_HOMEWORK_CATALOG[classId];

  // If videoUrl is directly defined on slide and matches active URL, use it
  const videoUrl = slide.videoUrl || catalogEntry?.videoUrl || 'https://www.youtube.com/embed/Fw0rdSHzWFY';

  const watchInstruction = catalogEntry?.watchInstruction || (slide.content && slide.content[0]) || 'Watch this video about English communication.';
  const watchHighlight = catalogEntry?.watchHighlight || 'English';
  const writeInstruction = catalogEntry?.writeInstruction || (slide.content && slide.content[1]) || 'Write down 2 key words or phrases from the video!';
  const writeHighlight = catalogEntry?.writeHighlight || '2 key words';
  const placeholder1 = catalogEntry?.placeholder1 || 'Write your first answer here...';
  const placeholder2 = catalogEntry?.placeholder2 || 'Write your second answer here...';
  const ideas = catalogEntry?.ideas || [
    { text: 'Key Phrase 1', emoji: '💡' },
    { text: 'Vocabulary Word', emoji: '📖' },
    { text: 'Clear Accent', emoji: '🗣️' },
    { text: "What's up?", emoji: '😎' }
  ];

  const formattedClassTitle = cls?.title?.split('/')[0]?.trim() || 'English Class';
  const whatsappMessage = `*Video Homework 📹 - ${formattedClassTitle}*\n\n` +
    `*1. Watch:* ${watchInstruction}\n` +
    `*2. Write:* ${writeInstruction}\n\n` +
    `*Video link:* ${videoUrl}\n\n` +
    `*My Answers:*\n1. \n2. \n\nGood luck! 🚀`;

  return {
    videoUrl,
    watchInstruction,
    watchHighlight,
    writeInstruction,
    writeHighlight,
    placeholder1,
    placeholder2,
    ideas,
    whatsappMessage
  };
}
