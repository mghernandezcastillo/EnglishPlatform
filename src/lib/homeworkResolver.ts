import { ClassSlide, CurriculumClass } from '../types';
import { TEEN_HOMEWORK_CATALOG, TeenHomeworkSpec } from '../data/teenHomeworkCatalog';

export interface HomeworkStep {
  number: number;
  instruction: string;
  example?: string;
}

export interface HomeworkData {
  task: string;
  taskSteps: HomeworkStep[];
  taskHighlights?: string[];
  exampleLines: string[];
  tips: string[];
  badgeText?: string;
  whatToInclude: {
    icon: string;
    label: string;
    highlight?: string;
  }[];
  dueDate?: string;
  whatsappMessage?: string;
}

// Extract quoted examples like (ej: '...') or (e.g., '...') from text
function extractQuotedExample(str: string): { instruction: string; example?: string } {
  const match = str.match(/\((?:ej|e\.g\.|example):\s*['"“]([^'"”]+)['"”]\)/i) ||
                str.match(/\((?:ej|e\.g\.|example):\s*([^)]+)\)/i);
  if (match) {
    const cleanInstruction = str.replace(match[0], '').replace(/\s{2,}/g, ' ').trim();
    return {
      instruction: cleanInstruction,
      example: match[1].replace(/^['"“]|['"”]$/g, '').trim()
    };
  }
  return { instruction: str.trim() };
}

// Convert raw strings array or single text into clean steps
function parseTaskSteps(rawContent: string[]): HomeworkStep[] {
  const steps: HomeworkStep[] = [];

  rawContent.forEach((item, idx) => {
    // Check if line starts with number e.g. "1. ..." or "1 - ..."
    const numMatch = item.match(/^(\d+)[\.\-\)]\s*(.+)$/);
    if (numMatch) {
      const parsed = extractQuotedExample(numMatch[2]);
      steps.push({
        number: parseInt(numMatch[1], 10),
        instruction: parsed.instruction,
        example: parsed.example
      });
    } else {
      const parsed = extractQuotedExample(item);
      steps.push({
        number: idx + 1,
        instruction: parsed.instruction,
        example: parsed.example
      });
    }
  });

  return steps;
}

// Select an appropriate emoji icon based on keyword
function getIconForRequirement(label: string): string {
  const text = label.toLowerCase();
  if (/play|ball|basketball|soccer|football|volleyball|tennis/i.test(text)) return '⚽';
  if (/go\s|cycling|running|swimming|skating|hiking|-ing/i.test(text)) return '🚴';
  if (/do\s|gymnastic|martial|karate|yoga|judo|strength|workout/i.test(text)) return '🥋';
  if (/compar|faster|taller|better|more|than|-er/i.test(text)) return '⚡';
  if (/in\s|month|year|season|december|july/i.test(text)) return '📅';
  if (/on\s|day|date|friday|birthday|halloween/i.test(text)) return '🎂';
  if (/at\s|hour|time|midnight|noon|7:00|clock/i.test(text)) return '⏰';
  if (/will|won't|future|predict|space|mars/i.test(text)) return '🚀';
  if (/was|were|childhood|nostalgia|past to be/i.test(text)) return '🧸';
  if (/travel|vacation|visit|hotel|beach|trip|-ed/i.test(text)) return '✈️';
  if (/write|wrote|song|book|poem|author/i.test(text)) return '✍️';
  if (/win|won|trophy|champion|award|medal/i.test(text)) return '🏆';
  if (/first|then|suddenly|meanwhile|fortunately|in the end|connector/i.test(text)) return '📖';
  if (/problem|battery|wifi|broken|freeze|die/i.test(text)) return '⚠️';
  if (/could|borrow|lend|favor|help|please/i.test(text)) return '🤝';
  if (/routine|wake up|brush|shower|habit/i.test(text)) return '⏰';
  if (/food|drink|natilla|buñuelo|snack|eat/i.test(text)) return '🍕';
  if (/family|friend|sister|brother|squad/i.test(text)) return '👨‍👩‍👧';
  if (/name|introduce|myself|greet/i.test(text)) return '👤';
  return '✨';
}

/**
 * Resolves context-accurate, tailored HomeworkData for any slide/class
 */
export function resolveHomeworkData(slide: ClassSlide, cls?: CurriculumClass): HomeworkData {
  const classId = cls?.id || '';
  const catalogEntry = TEEN_HOMEWORK_CATALOG[classId];

  // 1. Raw content check
  const rawContent = Array.isArray(slide.content) && slide.content.length > 0
    ? slide.content
    : (slide.homeworkData?.task
        ? [slide.homeworkData.task]
        : (catalogEntry?.task ? [catalogEntry.task] : []));

  // 2. Parse Task Steps
  let taskSteps: HomeworkStep[] = [];
  if (rawContent.length > 1 || (rawContent.length === 1 && /\d+[\.\-\)]/.test(rawContent[0]))) {
    if (rawContent.length === 1 && /\d+[\.\-\)]/.test(rawContent[0])) {
      const splitItems = rawContent[0].split(/(?=\d+[\.\-\)])/).map(s => s.trim()).filter(Boolean);
      taskSteps = parseTaskSteps(splitItems);
    } else {
      taskSteps = parseTaskSteps(rawContent);
    }
  }

  // 3. Resolve Example Lines
  let exampleLines: string[] = [];
  const extractedExamples = taskSteps.map(s => s.example).filter((ex): ex is string => Boolean(ex));
  if (extractedExamples.length >= 2) {
    exampleLines = extractedExamples;
  } else if (slide.homeworkData?.exampleLines && slide.homeworkData.exampleLines.length > 0) {
    exampleLines = slide.homeworkData.exampleLines;
  } else if (catalogEntry?.exampleLines && catalogEntry.exampleLines.length > 0) {
    exampleLines = catalogEntry.exampleLines;
  } else if (taskSteps.length > 0) {
    exampleLines = taskSteps.map(s => s.instruction);
  } else {
    exampleLines = [
      'Write your first sentence practicing today’s grammar. ✍️',
      'Add a second sentence with specific vocabulary. 🌟',
      'Conclude with a complete thought and emoji. 🚀'
    ];
  }

  // 4. Resolve "What to include" checklist
  let whatToInclude: { icon: string; label: string }[] = [];
  if (taskSteps.length >= 2) {
    whatToInclude = taskSteps.map((step) => {
      let label = step.instruction
        .replace(/^(?:Usa|Escribe|Menciona|Haz|Incluye|Usa la estructura|Describe)\s+/i, '')
        .replace(/^(?:con|un|una|el|la|los|las)\s+/i, '')
        .trim();
      label = label.charAt(0).toUpperCase() + label.slice(1);
      if (label.length > 40) {
        label = label.slice(0, 37) + '...';
      }
      return {
        icon: getIconForRequirement(step.instruction),
        label
      };
    });
  } else if (slide.homeworkData?.whatToInclude && slide.homeworkData.whatToInclude.length > 0) {
    whatToInclude = slide.homeworkData.whatToInclude;
  } else if (catalogEntry?.whatToInclude && catalogEntry.whatToInclude.length > 0) {
    whatToInclude = catalogEntry.whatToInclude;
  } else {
    whatToInclude = [
      { icon: '🎯', label: 'Estructura gramatical vista en clase' },
      { icon: '📖', label: 'Vocabulario clave de la lección' },
      { icon: '✨', label: 'Oraciones completas con buena ortografía' }
    ];
  }

  // 4.5 If taskSteps was not extracted from raw text, synthesize it from whatToInclude & exampleLines
  if (taskSteps.length === 0 && whatToInclude.length > 0) {
    taskSteps = whatToInclude.map((item, idx) => ({
      number: idx + 1,
      instruction: item.label,
      example: exampleLines[idx]
    }));
  }

  // 5. Resolve Tips
  let tips: string[] = [];
  if (slide.homeworkData?.tips && slide.homeworkData.tips.length > 0) {
    tips = slide.homeworkData.tips;
  } else if (catalogEntry?.tips && catalogEntry.tips.length > 0) {
    tips = catalogEntry.tips;
  } else {
    tips = [
      'Usa las fórmulas y vocabulario aprendidos en clase.',
      'Revisa mayúsculas, puntuación y ortografía antes de enviar.'
    ];
  }

  // 6. Highlights, Badge & Due Date
  const badgeText = slide.homeworkData?.badgeText || catalogEntry?.badgeText || `${exampleLines.length} lines!`;
  const taskHighlights = slide.homeworkData?.taskHighlights || catalogEntry?.taskHighlights || ['PLAY', 'GO', 'DO', 'IN', 'ON', 'AT', 'WILL', 'WAS', 'WERE', 'DID', '-ED'];
  const dueDate = slide.homeworkData?.dueDate || 'Próxima Clase';

  // Primary task overview string
  const task = slide.homeworkData?.task ||
    (rawContent.length > 0 ? rawContent.join('\n') : catalogEntry?.task || 'Completa la tarea escribiendo oraciones completas.');

  // 7. WhatsApp share message
  const formattedClassTitle = cls?.title?.split('/')[0]?.trim() || 'English Class';
  const whatsappMessage = `*Homework 📝 - ${formattedClassTitle}*\n\n` +
    `*Your Task:*\n` +
    (taskSteps.length > 0
      ? taskSteps.map(s => `${s.number}. ${s.instruction}${s.example ? ` (ej: "${s.example}")` : ''}`).join('\n')
      : task) +
    `\n\n*What to include:*\n` +
    whatToInclude.map((item) => `• ${item.icon} ${item.label}`).join('\n') +
    `\n\n*Example (${exampleLines.length} lines):*\n` +
    exampleLines.map((line, idx) => `${idx + 1}. ${line}`).join('\n') +
    `\n\n*Due Date:* ${dueDate}\nGood luck! 🚀`;

  return {
    task,
    taskSteps,
    taskHighlights,
    exampleLines,
    whatToInclude,
    tips,
    badgeText,
    dueDate,
    whatsappMessage
  };
}
