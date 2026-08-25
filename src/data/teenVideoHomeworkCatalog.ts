/**
 * Explicit customized Video Homework catalog for EVERY Teens class across all levels.
 * Contains YouTube embed URL, highlighted watch instructions, targeted write tasks,
 * interactive answer placeholders, and model ideas.
 */

export interface TeenVideoHomeworkSpec {
  videoUrl: string;
  watchInstruction: string;
  watchHighlight: string;
  writeInstruction: string;
  writeHighlight: string;
  placeholder1: string;
  placeholder2: string;
  ideas: { text: string; emoji: string }[];
  whatsappMessage?: string;
}

export const TEEN_VIDEO_HOMEWORK_CATALOG: Record<string, TeenVideoHomeworkSpec> = {
  "c-teens-basic-zero-1": {
    "videoUrl": "https://www.youtube.com/embed/Fw0rdSHzWFY",
    "watchInstruction": "Watch this video about greetings in English.",
    "watchHighlight": "greetings",
    "writeInstruction": "Write down 2 new ways to say hello!",
    "writeHighlight": "hello!",
    "placeholder1": "Write your first way to say hello...",
    "placeholder2": "Write your second way to say hello...",
    "ideas": [
      {
        "text": "Hi!",
        "emoji": "👋"
      },
      {
        "text": "Hey!",
        "emoji": "😃"
      },
      {
        "text": "Hello!",
        "emoji": "✨"
      },
      {
        "text": "What's up?",
        "emoji": "😎"
      }
    ]
  },
  "c-teens-basic-zero-2": {
    "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA",
    "watchInstruction": "Watch this video about numbers and asking for age in English.",
    "watchHighlight": "numbers and age",
    "writeInstruction": "Write down 2 questions to ask someone their age or birthday!",
    "writeHighlight": "age or birthday!",
    "placeholder1": "Write your question for age...",
    "placeholder2": "Write your question for birthday...",
    "ideas": [
      {
        "text": "How old are you?",
        "emoji": "🎂"
      },
      {
        "text": "When is your birthday?",
        "emoji": "📅"
      },
      {
        "text": "I am fifteen!",
        "emoji": "🔢"
      },
      {
        "text": "In October!",
        "emoji": "🍂"
      }
    ]
  },
  "c-teens-basic-zero-3": {
    "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
    "watchInstruction": "Watch this video about family members and describing relationships.",
    "watchHighlight": "family members",
    "writeInstruction": "Write down 2 sentences describing your family or best friends!",
    "writeHighlight": "family or best friends!",
    "placeholder1": "Describe your first family member...",
    "placeholder2": "Describe your best friend...",
    "ideas": [
      {
        "text": "My sister is funny",
        "emoji": "👧"
      },
      {
        "text": "My dad is tall",
        "emoji": "👨"
      },
      {
        "text": "My best friend",
        "emoji": "🌟"
      },
      {
        "text": "We love soccer",
        "emoji": "⚽"
      }
    ]
  },
  "c-teens-basic-zero-4": {
    "videoUrl": "https://www.youtube.com/embed/13mftBvRmvM",
    "watchInstruction": "Watch this video about popular foods, snacks, and ordering meals.",
    "watchHighlight": "foods and snacks",
    "writeInstruction": "Write down 2 new food or drink words you heard in the video!",
    "writeHighlight": "food or drink words",
    "placeholder1": "First new food or drink word...",
    "placeholder2": "Second new food or drink word...",
    "ideas": [
      {
        "text": "Pepperoni pizza",
        "emoji": "🍕"
      },
      {
        "text": "Iced bubble tea",
        "emoji": "🧋"
      },
      {
        "text": "Crispy tacos",
        "emoji": "🌮"
      },
      {
        "text": "Vanilla milkshake",
        "emoji": "🥤"
      }
    ]
  },
  "c-teens-basic-zero-5": {
    "videoUrl": "https://www.youtube.com/embed/13mftBvRmvM",
    "watchInstruction": "Watch this video about popular foods, snacks, and ordering meals.",
    "watchHighlight": "foods and snacks",
    "writeInstruction": "Write down 2 new food or drink words you heard in the video!",
    "writeHighlight": "food or drink words",
    "placeholder1": "First new food or drink word...",
    "placeholder2": "Second new food or drink word...",
    "ideas": [
      {
        "text": "Pepperoni pizza",
        "emoji": "🍕"
      },
      {
        "text": "Iced bubble tea",
        "emoji": "🧋"
      },
      {
        "text": "Crispy tacos",
        "emoji": "🌮"
      },
      {
        "text": "Vanilla milkshake",
        "emoji": "🥤"
      }
    ]
  },
  "c-teens-basic-zero-6": {
    "videoUrl": "https://www.youtube.com/embed/Fw0rdSHzWFY",
    "watchInstruction": "Watch this video about modern streetwear and clothing styles.",
    "watchHighlight": "clothing styles",
    "writeInstruction": "Write down 2 clothing items and color combinations you liked!",
    "writeHighlight": "clothing items",
    "placeholder1": "First clothing item and color...",
    "placeholder2": "Second clothing item and color...",
    "ideas": [
      {
        "text": "Black hoodie",
        "emoji": "🧥"
      },
      {
        "text": "Blue jeans",
        "emoji": "👖"
      },
      {
        "text": "White sneakers",
        "emoji": "👟"
      },
      {
        "text": "Cool beanie",
        "emoji": "🧢"
      }
    ]
  },
  "c-teens-basic-zero-7": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-basic-zero-8": {
    "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
    "watchInstruction": "Watch this video about family members and describing relationships.",
    "watchHighlight": "family members",
    "writeInstruction": "Write down 2 sentences describing your family or best friends!",
    "writeHighlight": "family or best friends!",
    "placeholder1": "Describe your first family member...",
    "placeholder2": "Describe your best friend...",
    "ideas": [
      {
        "text": "My sister is funny",
        "emoji": "👧"
      },
      {
        "text": "My dad is tall",
        "emoji": "👨"
      },
      {
        "text": "My best friend",
        "emoji": "🌟"
      },
      {
        "text": "We love soccer",
        "emoji": "⚽"
      }
    ]
  },
  "c-teens-basic-zero-9": {
    "videoUrl": "https://www.youtube.com/embed/M4FMEml4wKE",
    "watchInstruction": "Watch this video about daily morning and evening routines.",
    "watchHighlight": "daily routines",
    "writeInstruction": "Write down 2 routine activities mentioned in the video!",
    "writeHighlight": "routine activities",
    "placeholder1": "First routine activity and time...",
    "placeholder2": "Second routine activity and time...",
    "ideas": [
      {
        "text": "Wake up at 7 AM",
        "emoji": "⏰"
      },
      {
        "text": "Brush my teeth",
        "emoji": "🪥"
      },
      {
        "text": "Have breakfast",
        "emoji": "🍳"
      },
      {
        "text": "Go to sleep",
        "emoji": "🌙"
      }
    ]
  },
  "c-teens-basic-zero-10": {
    "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
    "watchInstruction": "Watch this video about family members and describing relationships.",
    "watchHighlight": "family members",
    "writeInstruction": "Write down 2 sentences describing your family or best friends!",
    "writeHighlight": "family or best friends!",
    "placeholder1": "Describe your first family member...",
    "placeholder2": "Describe your best friend...",
    "ideas": [
      {
        "text": "My sister is funny",
        "emoji": "👧"
      },
      {
        "text": "My dad is tall",
        "emoji": "👨"
      },
      {
        "text": "My best friend",
        "emoji": "🌟"
      },
      {
        "text": "We love soccer",
        "emoji": "⚽"
      }
    ]
  },
  "c-teens-basic-zero-11": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Alfabeto, deletreo and usernames in English.",
    "watchHighlight": "alfabeto, deletreo and usernames",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-zero-12": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Presentarse: edad, curso, ciudad, gustos and redes sociales in English.",
    "watchHighlight": "presentarse: edad, curso, ciudad, gustos and redes sociales",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-zero-13": {
    "videoUrl": "https://www.youtube.com/embed/Fw0rdSHzWFY",
    "watchInstruction": "Watch this video about modern streetwear and clothing styles.",
    "watchHighlight": "clothing styles",
    "writeInstruction": "Write down 2 clothing items and color combinations you liked!",
    "writeHighlight": "clothing items",
    "placeholder1": "First clothing item and color...",
    "placeholder2": "Second clothing item and color...",
    "ideas": [
      {
        "text": "Black hoodie",
        "emoji": "🧥"
      },
      {
        "text": "Blue jeans",
        "emoji": "👖"
      },
      {
        "text": "White sneakers",
        "emoji": "👟"
      },
      {
        "text": "Cool beanie",
        "emoji": "🧢"
      }
    ]
  },
  "c-teens-basic-zero-14": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about School, materias and objetos del salón in English.",
    "watchHighlight": "school, materias and objetos del salón",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-zero-15": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Rutina diaria básica in English.",
    "watchHighlight": "rutina diaria básica",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-zero-16": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Level 0 Review & Final Challenge 🏆 in English.",
    "watchHighlight": "level 0 review & final challenge 🏆",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-1-1": {
    "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
    "watchInstruction": "Watch this video about family members and describing relationships.",
    "watchHighlight": "family members",
    "writeInstruction": "Write down 2 sentences describing your family or best friends!",
    "writeHighlight": "family or best friends!",
    "placeholder1": "Describe your first family member...",
    "placeholder2": "Describe your best friend...",
    "ideas": [
      {
        "text": "My sister is funny",
        "emoji": "👧"
      },
      {
        "text": "My dad is tall",
        "emoji": "👨"
      },
      {
        "text": "My best friend",
        "emoji": "🌟"
      },
      {
        "text": "We love soccer",
        "emoji": "⚽"
      }
    ]
  },
  "c-teens-basic-1-2": {
    "videoUrl": "https://www.youtube.com/embed/13mftBvRmvM",
    "watchInstruction": "Watch this video about popular foods, snacks, and ordering meals.",
    "watchHighlight": "foods and snacks",
    "writeInstruction": "Write down 2 new food or drink words you heard in the video!",
    "writeHighlight": "food or drink words",
    "placeholder1": "First new food or drink word...",
    "placeholder2": "Second new food or drink word...",
    "ideas": [
      {
        "text": "Pepperoni pizza",
        "emoji": "🍕"
      },
      {
        "text": "Iced bubble tea",
        "emoji": "🧋"
      },
      {
        "text": "Crispy tacos",
        "emoji": "🌮"
      },
      {
        "text": "Vanilla milkshake",
        "emoji": "🥤"
      }
    ]
  },
  "c-teens-basic-1-3": {
    "videoUrl": "https://www.youtube.com/embed/Fw0rdSHzWFY",
    "watchInstruction": "Watch this video about modern streetwear and clothing styles.",
    "watchHighlight": "clothing styles",
    "writeInstruction": "Write down 2 clothing items and color combinations you liked!",
    "writeHighlight": "clothing items",
    "placeholder1": "First clothing item and color...",
    "placeholder2": "Second clothing item and color...",
    "ideas": [
      {
        "text": "Black hoodie",
        "emoji": "🧥"
      },
      {
        "text": "Blue jeans",
        "emoji": "👖"
      },
      {
        "text": "White sneakers",
        "emoji": "👟"
      },
      {
        "text": "Cool beanie",
        "emoji": "🧢"
      }
    ]
  },
  "c-teens-basic-1-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Nature, Parks & Outdoors in English.",
    "watchHighlight": "nature, parks & outdoors",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-1-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Planes of fin of semana with will and going to in English.",
    "watchHighlight": "planes of fin of semana with will and going to",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-1-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Invitaciones, aceptar and rechazar planes in English.",
    "watchHighlight": "invitaciones, aceptar and rechazar planes",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-1-7": {
    "videoUrl": "https://www.youtube.com/embed/Fw0rdSHzWFY",
    "watchInstruction": "Watch this video about modern streetwear and clothing styles.",
    "watchHighlight": "clothing styles",
    "writeInstruction": "Write down 2 clothing items and color combinations you liked!",
    "writeHighlight": "clothing items",
    "placeholder1": "First clothing item and color...",
    "placeholder2": "Second clothing item and color...",
    "ideas": [
      {
        "text": "Black hoodie",
        "emoji": "🧥"
      },
      {
        "text": "Blue jeans",
        "emoji": "👖"
      },
      {
        "text": "White sneakers",
        "emoji": "👟"
      },
      {
        "text": "Cool beanie",
        "emoji": "🧢"
      }
    ]
  },
  "c-teens-basic-1-8": {
    "videoUrl": "https://www.youtube.com/embed/13mftBvRmvM",
    "watchInstruction": "Watch this video about popular foods, snacks, and ordering meals.",
    "watchHighlight": "foods and snacks",
    "writeInstruction": "Write down 2 new food or drink words you heard in the video!",
    "writeHighlight": "food or drink words",
    "placeholder1": "First new food or drink word...",
    "placeholder2": "Second new food or drink word...",
    "ideas": [
      {
        "text": "Pepperoni pizza",
        "emoji": "🍕"
      },
      {
        "text": "Iced bubble tea",
        "emoji": "🧋"
      },
      {
        "text": "Crispy tacos",
        "emoji": "🌮"
      },
      {
        "text": "Vanilla milkshake",
        "emoji": "🥤"
      }
    ]
  },
  "c-teens-basic-1-9": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-basic-1-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Chat and llamadas (pedir ayuda) and Proyecto of evento in English.",
    "watchHighlight": "chat and llamadas (pedir ayuda) and proyecto of evento",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-1": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Animals & Habitats in English.",
    "watchHighlight": "animals & habitats",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about My Room & Dream House in English.",
    "watchHighlight": "my room & dream house",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-3": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-basic-2-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Dream Jobs & Professions in English.",
    "watchHighlight": "dream jobs & professions",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-5": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-basic-2-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Reglas escolares with must, have to, should in English.",
    "watchHighlight": "reglas escolares with must, have to, should",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-7": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-basic-2-8": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-basic-2-9": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Describir series, películas, juegos and música in English.",
    "watchHighlight": "describir series, películas, juegos and música",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-2-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Conversación actual, rutinas and Review Speaking por retos in English.",
    "watchHighlight": "conversación actual, rutinas and review speaking por retos",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-1": {
    "videoUrl": "https://www.youtube.com/embed/M4FMEml4wKE",
    "watchInstruction": "Watch this video about daily morning and evening routines.",
    "watchHighlight": "daily routines",
    "writeInstruction": "Write down 2 routine activities mentioned in the video!",
    "writeHighlight": "routine activities",
    "placeholder1": "First routine activity and time...",
    "placeholder2": "Second routine activity and time...",
    "ideas": [
      {
        "text": "Wake up at 7 AM",
        "emoji": "⏰"
      },
      {
        "text": "Brush my teeth",
        "emoji": "🪥"
      },
      {
        "text": "Have breakfast",
        "emoji": "🍳"
      },
      {
        "text": "Go to sleep",
        "emoji": "🌙"
      }
    ]
  },
  "c-teens-basic-3-2": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-basic-3-3": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Holidays, Festivals & Traditions in English.",
    "watchHighlight": "holidays, festivals & traditions",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Space, Science & Future in English.",
    "watchHighlight": "space, science & future",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Past To Be: Was in English.",
    "watchHighlight": "past to be: was",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Vacations, Travel & Anecdotes in English.",
    "watchHighlight": "vacations, travel & anecdotes",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Biographies of Artists, Athletes & Creators in English.",
    "watchHighlight": "biographies of artists, athletes & creators",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-8": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Storytelling Connectors in English.",
    "watchHighlight": "storytelling connectors",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-9": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Everyday Problems & How to Explain Them in English.",
    "watchHighlight": "everyday problems & how to explain them",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-3-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Irregular Verbs & -ed Endings. Video Project in English.",
    "watchHighlight": "irregular verbs & -ed endings. video project",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-1": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about My Opinions & Perspectives in English.",
    "watchHighlight": "my opinions & perspectives",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Giving Good Advice in English.",
    "watchHighlight": "giving good advice",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-3": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Conditions & Scientific Facts in English.",
    "watchHighlight": "conditions & scientific facts",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Messaging, Texting & Online Communication in English.",
    "watchHighlight": "messaging, texting & online communication",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Future Possibilities & Consequences in English.",
    "watchHighlight": "future possibilities & consequences",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-6": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-basic-4-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Too & Enough: Problems and Solutions in English.",
    "watchHighlight": "too & enough: problems and solutions",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-basic-4-8": {
    "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
    "watchInstruction": "Watch this video about family members and describing relationships.",
    "watchHighlight": "family members",
    "writeInstruction": "Write down 2 sentences describing your family or best friends!",
    "writeHighlight": "family or best friends!",
    "placeholder1": "Describe your first family member...",
    "placeholder2": "Describe your best friend...",
    "ideas": [
      {
        "text": "My sister is funny",
        "emoji": "👧"
      },
      {
        "text": "My dad is tall",
        "emoji": "👨"
      },
      {
        "text": "My best friend",
        "emoji": "🌟"
      },
      {
        "text": "We love soccer",
        "emoji": "⚽"
      }
    ]
  },
  "c-teens-basic-4-9": {
    "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA",
    "watchInstruction": "Watch this video about numbers and asking for age in English.",
    "watchHighlight": "numbers and age",
    "writeInstruction": "Write down 2 questions to ask someone their age or birthday!",
    "writeHighlight": "age or birthday!",
    "placeholder1": "Write your question for age...",
    "placeholder2": "Write your question for birthday...",
    "ideas": [
      {
        "text": "How old are you?",
        "emoji": "🎂"
      },
      {
        "text": "When is your birthday?",
        "emoji": "📅"
      },
      {
        "text": "I am fifteen!",
        "emoji": "🔢"
      },
      {
        "text": "In October!",
        "emoji": "🍂"
      }
    ]
  },
  "c-teens-basic-4-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Teen Leadership, Customer Service & Capstone Review in English.",
    "watchHighlight": "teen leadership, customer service & capstone review",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-1": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about My Life Experiences (Present Perfect) in English.",
    "watchHighlight": "my life experiences (present perfect)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Teen Slang & Phrasal Verbs in Daily Conversations in English.",
    "watchHighlight": "teen slang & phrasal verbs in daily conversations",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-3": {
    "videoUrl": "https://www.youtube.com/embed/SUt8q0EKbms",
    "watchInstruction": "Watch this video about sports actions and expressing abilities with can/can’t.",
    "watchHighlight": "sports and abilities",
    "writeInstruction": "Write down 2 abilities you can do and 1 you want to try!",
    "writeHighlight": "abilities you can do",
    "placeholder1": "One skill you can do well...",
    "placeholder2": "One sport you want to try...",
    "ideas": [
      {
        "text": "I can swim fast",
        "emoji": "🏊"
      },
      {
        "text": "I can play soccer",
        "emoji": "⚽"
      },
      {
        "text": "I can skateboard",
        "emoji": "🛹"
      },
      {
        "text": "I want to surf",
        "emoji": "🏄"
      }
    ]
  },
  "c-teens-inter-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about If I Ruled the World (Second Conditional) in English.",
    "watchHighlight": "if i ruled the world (second conditional)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Agreeing & Disagreeing Respectfully in English.",
    "watchHighlight": "agreeing & disagreeing respectfully",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Podcast & Media Hosting Basics in English.",
    "watchHighlight": "podcast & media hosting basics",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Present Perfect vs Present Perfect Continuous in English.",
    "watchHighlight": "present perfect vs present perfect continuous",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-8": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Advanced Phrasal Verbs in Storytelling & Media in English.",
    "watchHighlight": "advanced phrasal verbs in storytelling & media",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-9": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Past Modals of Deduction in English.",
    "watchHighlight": "past modals of deduction",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-10": {
    "videoUrl": "https://www.youtube.com/embed/M4FMEml4wKE",
    "watchInstruction": "Watch this video about daily morning and evening routines.",
    "watchHighlight": "daily routines",
    "writeInstruction": "Write down 2 routine activities mentioned in the video!",
    "writeHighlight": "routine activities",
    "placeholder1": "First routine activity and time...",
    "placeholder2": "Second routine activity and time...",
    "ideas": [
      {
        "text": "Wake up at 7 AM",
        "emoji": "⏰"
      },
      {
        "text": "Brush my teeth",
        "emoji": "🪥"
      },
      {
        "text": "Have breakfast",
        "emoji": "🍳"
      },
      {
        "text": "Go to sleep",
        "emoji": "🌙"
      }
    ]
  },
  "c-teens-inter-11": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Nuanced Opinions & Diplomacy in Debates in English.",
    "watchHighlight": "nuanced opinions & diplomacy in debates",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-inter-12": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Capstone Media Showcase & Scholarship Simulation in English.",
    "watchHighlight": "capstone media showcase & scholarship simulation",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-1": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Breaking News & Campus Whispers (Reported Speech) in English.",
    "watchHighlight": "breaking news & campus whispers (reported speech)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Secret Interviews & Interrogations (Reported Questions) in English.",
    "watchHighlight": "secret interviews & interrogations (reported questions)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-3": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Mastering Relative Clauses (Defining vs Non-Defining) in English.",
    "watchHighlight": "mastering relative clauses (defining vs non-defining)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-4": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-advanced-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Global News Reports & Scientific Discoveries (Advanced Passive) in English.",
    "watchHighlight": "global news reports & scientific discoveries (advanced passive)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Authentic Teen Idioms & Expressions in Daily Contexts in English.",
    "watchHighlight": "authentic teen idioms & expressions in daily contexts",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Advanced Phrasal Verbs in High-Stakes Leadership & Problem Solving in English.",
    "watchHighlight": "advanced phrasal verbs in high-stakes leadership & problem solving",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-8": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about The Great AI & Ethics Student Forum (Debates & Counter-Arguments) in English.",
    "watchHighlight": "the great ai & ethics student forum (debates & counter-arguments)",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-advanced-9": {
    "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA",
    "watchInstruction": "Watch this video about numbers and asking for age in English.",
    "watchHighlight": "numbers and age",
    "writeInstruction": "Write down 2 questions to ask someone their age or birthday!",
    "writeHighlight": "age or birthday!",
    "placeholder1": "Write your question for age...",
    "placeholder2": "Write your question for birthday...",
    "ideas": [
      {
        "text": "How old are you?",
        "emoji": "🎂"
      },
      {
        "text": "When is your birthday?",
        "emoji": "📅"
      },
      {
        "text": "I am fifteen!",
        "emoji": "🔢"
      },
      {
        "text": "In October!",
        "emoji": "🍂"
      }
    ]
  },
  "c-teens-advanced-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview in English.",
    "watchHighlight": "level 8 capstone: global youth ngo leadership pitch & executive interview",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-1": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-elite-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about High-Stakes Dilemmas & Complex Mixed Conditionals in English.",
    "watchHighlight": "high-stakes dilemmas & complex mixed conditionals",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-3": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Cleft Sentences & Emphatic Rhetoric in English.",
    "watchHighlight": "cleft sentences & emphatic rhetoric",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Rhetorical Inversions & High-Impact Oratory in English.",
    "watchHighlight": "rhetorical inversions & high-impact oratory",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Diplomatic Softening, Hedging & Nuanced Negotiations in English.",
    "watchHighlight": "diplomatic softening, hedging & nuanced negotiations",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Advanced Discursive & Argumentative Essay Architecture in English.",
    "watchHighlight": "advanced discursive & argumentative essay architecture",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Empirical Research Abstracts & Academic Citations in English.",
    "watchHighlight": "empirical research abstracts & academic citations",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-8": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Executive Boardrooms, Parliamentary Procedure & Conflict Mediation in English.",
    "watchHighlight": "executive boardrooms, parliamentary procedure & conflict mediation",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-9": {
    "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA",
    "watchInstruction": "Watch this video about numbers and asking for age in English.",
    "watchHighlight": "numbers and age",
    "writeInstruction": "Write down 2 questions to ask someone their age or birthday!",
    "writeHighlight": "age or birthday!",
    "placeholder1": "Write your question for age...",
    "placeholder2": "Write your question for birthday...",
    "ideas": [
      {
        "text": "How old are you?",
        "emoji": "🎂"
      },
      {
        "text": "When is your birthday?",
        "emoji": "📅"
      },
      {
        "text": "I am fifteen!",
        "emoji": "🔢"
      },
      {
        "text": "In October!",
        "emoji": "🍂"
      }
    ]
  },
  "c-teens-elite-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Designing a Global Venture: Unit Economics, Value Proposition & Impact Scaling in English.",
    "watchHighlight": "designing a global venture: unit economics, value proposition & impact scaling",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-elite-11": {
    "videoUrl": "https://www.youtube.com/embed/7_s3BTR6W_E",
    "watchInstruction": "Watch this video about popular teen apps and digital devices.",
    "watchHighlight": "apps and digital devices",
    "writeInstruction": "Write down 2 tech devices or apps and what you use them for!",
    "writeHighlight": "tech devices or apps",
    "placeholder1": "First device and purpose...",
    "placeholder2": "Second device and purpose...",
    "ideas": [
      {
        "text": "Phone for music",
        "emoji": "📱"
      },
      {
        "text": "Laptop for gaming",
        "emoji": "💻"
      },
      {
        "text": "Tablet for drawing",
        "emoji": "🎨"
      },
      {
        "text": "Wireless earbuds",
        "emoji": "🎧"
      }
    ]
  },
  "c-teens-masters-1": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Oxford-Union Parliamentary Debate & Dialectical Refutation in English.",
    "watchHighlight": "oxford-union parliamentary debate & dialectical refutation",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-2": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Pop Culture Semiotics, Media Ecology & Digital Memetics in English.",
    "watchHighlight": "pop culture semiotics, media ecology & digital memetics",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-3": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Ivy League Graduate Seminars & Socratic Cross-Examination in English.",
    "watchHighlight": "ivy league graduate seminars & socratic cross-examination",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-4": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about TED Keynotes, High-Impact Storytelling & Thought Leadership in English.",
    "watchHighlight": "ted keynotes, high-impact storytelling & thought leadership",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-5": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Geopolitical Strategy, Bilateral Treaties & Multilateral Summits in English.",
    "watchHighlight": "geopolitical strategy, bilateral treaties & multilateral summits",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-6": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Literary Critique, Cinematic Deconstruction & Aesthetic Analysis in English.",
    "watchHighlight": "literary critique, cinematic deconstruction & aesthetic analysis",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-7": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Rhodes & Fulbright International Fellowship Interviews in English.",
    "watchHighlight": "rhodes & fulbright international fellowship interviews",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-8": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Investigative Video Essays, Documentary Journalism & Audio Podcasting in English.",
    "watchHighlight": "investigative video essays, documentary journalism & audio podcasting",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-9": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Global Mega-Trends: Artificial Superintelligence, Bioethics & Climate Geopolitics in English.",
    "watchHighlight": "global mega-trends: artificial superintelligence, bioethics & climate geopolitics",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  },
  "c-teens-masters-10": {
    "videoUrl": "https://www.youtube.com/embed/DRl6tpsxchw",
    "watchInstruction": "Watch this video about Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit in English.",
    "watchHighlight": "level 10 grand masters capstone: c2 fluency mastery & global leadership summit",
    "writeInstruction": "Write down 2 key phrases or new vocabulary words from the video!",
    "writeHighlight": "2 key phrases",
    "placeholder1": "Write your first phrase from the video...",
    "placeholder2": "Write your second phrase from the video...",
    "ideas": [
      {
        "text": "Key Phrase 1",
        "emoji": "💡"
      },
      {
        "text": "New Vocabulary",
        "emoji": "📖"
      },
      {
        "text": "Natural Accent",
        "emoji": "🗣️"
      },
      {
        "text": "Cool Expression",
        "emoji": "✨"
      }
    ]
  }
};
