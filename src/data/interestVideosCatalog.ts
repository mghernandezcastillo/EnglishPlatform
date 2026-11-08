import { CurriculumClass } from '../types';

export type GrammarBlockId =
  | 'present-routines'
  | 'descriptions-comparisons'
  | 'past-storytelling'
  | 'modals-conditionals'
  | 'future-perfect';

export interface InterestCategory {
  id: string;
  label: string;
  emoji: string;
  group: string;
}

export interface InterestVideoItem {
  id: string;
  interestId: string;
  title: string;
  channel: string;
  videoId: string;
  durationLabel: string;
  grammarBlock: GrammarBlockId;
}

export const GRAMMAR_BLOCK_LABELS: Record<GrammarBlockId, { label: string; promptEs: string }> = {
  'present-routines': {
    label: 'Presente, Rutinas y Hábitos',
    promptEs: 'usando Presente Simple, rutinas o hechos reales aprendidos en clase'
  },
  'descriptions-comparisons': {
    label: 'Descripción, Adjetivos y Comparaciones',
    promptEs: 'usando descripciones, adjetivos o comparaciones vistos en clase'
  },
  'past-storytelling': {
    label: 'Pasado e Historias Reales',
    promptEs: 'conectándolas con verbos en pasado o historias como vimos hoy'
  },
  'modals-conditionals': {
    label: 'Consejos, Modales y Condicionales',
    promptEs: 'usando recomendaciones (can, should, must) o condicionales de la clase'
  },
  'future-perfect': {
    label: 'Futuro, Experiencias y Opinión',
    promptEs: 'usando estructuras de futuro, experiencias u opinión practicadas hoy'
  }
};

export const INTEREST_CATEGORIES: InterestCategory[] = [
  {
    "id": "medicine",
    "label": "Medicina, Salud y Ser Doctora",
    "emoji": "🩺",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "psychology",
    "label": "Psicología y Mente Humana",
    "emoji": "🧠",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "business",
    "label": "Negocios, Emprendimiento y Marcas",
    "emoji": "💼",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "engineering",
    "label": "Ingeniería, Arquitectura y Construcción",
    "emoji": "🏗️",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "law_mystery",
    "label": "Derecho, Criminología y Misterios",
    "emoji": "🕵️",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "veterinary",
    "label": "Veterinaria, Mascotas y Mundo Animal",
    "emoji": "🐾",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "tech_ai",
    "label": "Programación, IA y Robótica",
    "emoji": "🤖",
    "group": "Profesiones y Vocación"
  },
  {
    "id": "soccer",
    "label": "Fútbol y Estrellas (Cristiano Ronaldo, Messi)",
    "emoji": "⚽",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "basketball",
    "label": "Baloncesto (NBA) y Deportes",
    "emoji": "🏀",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "formula1",
    "label": "Fórmula 1, Autos y Motores",
    "emoji": "🏎️",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "fitness",
    "label": "Fitness, Gimnasio y Nutrición",
    "emoji": "🏋️",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "olympics",
    "label": "Tenis, Ciclismo y Deportes Olímpicos",
    "emoji": "🏅",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "extreme_sports",
    "label": "Deportes Extremos y Aventura",
    "emoji": "🏄",
    "group": "Deportes y Estilo de Vida"
  },
  {
    "id": "makeup",
    "label": "Maquillaje, Skincare y Belleza",
    "emoji": "💄",
    "group": "Belleza, Moda y Creatividad"
  },
  {
    "id": "fashion",
    "label": "Moda, Estilo y Marcas de Lujo",
    "emoji": "👗",
    "group": "Belleza, Moda y Creatividad"
  },
  {
    "id": "art_design",
    "label": "Arte, Dibujo, Fotografía y Diseño",
    "emoji": "🎨",
    "group": "Belleza, Moda y Creatividad"
  },
  {
    "id": "movies",
    "label": "Cine, Series y Detrás de Cámaras",
    "emoji": "🎬",
    "group": "Belleza, Moda y Creatividad"
  },
  {
    "id": "anime_animation",
    "label": "Animación, Anime y Cómics (Marvel/Pixar)",
    "emoji": "🦸",
    "group": "Belleza, Moda y Creatividad"
  },
  {
    "id": "music_pop",
    "label": "Música Pop y Cantantes",
    "emoji": "🎵",
    "group": "Entretenimiento, Música y Gaming"
  },
  {
    "id": "kpop",
    "label": "K-Pop y Cultura Coreana",
    "emoji": "🎤",
    "group": "Entretenimiento, Música y Gaming"
  },
  {
    "id": "gaming",
    "label": "Videojuegos y Esports (Minecraft, Nintendo)",
    "emoji": "🎮",
    "group": "Entretenimiento, Música y Gaming"
  },
  {
    "id": "creators",
    "label": "YouTubers, Redes Sociales y Creadores",
    "emoji": "📱",
    "group": "Entretenimiento, Música y Gaming"
  },
  {
    "id": "comedy_culture",
    "label": "Curiosidades y Choques Culturales",
    "emoji": "😄",
    "group": "Entretenimiento, Música y Gaming"
  },
  {
    "id": "travel",
    "label": "Viajes, Ciudades y Maravillas del Mundo",
    "emoji": "✈️",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "food_cooking",
    "label": "Gastronomía, Cocina y Repostería",
    "emoji": "🍕",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "space",
    "label": "Espacio, Astronomía y Universo",
    "emoji": "🚀",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "history",
    "label": "Historia y Civilizaciones Antiguas",
    "emoji": "🏛️",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "nature_oceans",
    "label": "Naturaleza, Océanos y Medio Ambiente",
    "emoji": "🌊",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "aviation",
    "label": "Aviación y Cómo Funcionan los Aviones",
    "emoji": "🛫",
    "group": "Mundo, Ciencia y Cultura"
  },
  {
    "id": "self_improvement",
    "label": "Superación Personal, Hábitos y Estudio",
    "emoji": "🌟",
    "group": "Mundo, Ciencia y Cultura"
  }
];

export const INTEREST_VIDEOS_CATALOG: InterestVideoItem[] = [
  {
    "id": "medicine-present-routines",
    "interestId": "medicine",
    "title": "How does your body process medicine? - Céline Valéry",
    "channel": "TED-Ed",
    "videoId": "uOcpsXMJcJk",
    "durationLabel": "4:13",
    "grammarBlock": "present-routines"
  },
  {
    "id": "medicine-descriptions-comparisons",
    "interestId": "medicine",
    "title": "How does your immune system work? - Emma Bryce",
    "channel": "TED-Ed",
    "videoId": "PSRJfaAYkW4",
    "durationLabel": "5:23",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "medicine-past-storytelling",
    "interestId": "medicine",
    "title": "How your digestive system works - Emma Bryce",
    "channel": "TED-Ed",
    "videoId": "Og5xAdC8EUI",
    "durationLabel": "4:57",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "medicine-modals-conditionals",
    "interestId": "medicine",
    "title": "How do your kidneys work? - Emma Bryce",
    "channel": "TED-Ed",
    "videoId": "FN3MFhYPWWo",
    "durationLabel": "3:55",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "medicine-future-perfect",
    "interestId": "medicine",
    "title": "How the food you eat affects your brain - Mia Nacamulli",
    "channel": "TED-Ed",
    "videoId": "xyQY8a-ng6g",
    "durationLabel": "4:53",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "psychology-present-routines",
    "interestId": "psychology",
    "title": "Does stress affect your memory? - Elizabeth Cox",
    "channel": "TED-Ed",
    "videoId": "hyg7lcU4g8E",
    "durationLabel": "4:44",
    "grammarBlock": "present-routines"
  },
  {
    "id": "psychology-descriptions-comparisons",
    "interestId": "psychology",
    "title": "How memories form and how we lose them - Catharine Young",
    "channel": "TED-Ed",
    "videoId": "yOgAbKJGrTA",
    "durationLabel": "4:20",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "psychology-past-storytelling",
    "interestId": "psychology",
    "title": "How to manage your emotions",
    "channel": "TED-Ed",
    "videoId": "Uew5BbvmLks",
    "durationLabel": "4:51",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "psychology-modals-conditionals",
    "interestId": "psychology",
    "title": "Are all of your memories real? - Daniel L. Schacter",
    "channel": "TED-Ed",
    "videoId": "D-2p86FvqF4",
    "durationLabel": "5:18",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "psychology-future-perfect",
    "interestId": "psychology",
    "title": "Emotions and the Brain: What is the limbic system?",
    "channel": "Science ABC",
    "videoId": "yYUImmcq-bc",
    "durationLabel": "5:42",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "business-present-routines",
    "interestId": "business",
    "title": "What gives a dollar bill its value? - Doug Levinson",
    "channel": "TED-Ed",
    "videoId": "XNu5ppFZbHo",
    "durationLabel": "3:52",
    "grammarBlock": "present-routines"
  },
  {
    "id": "business-descriptions-comparisons",
    "interestId": "business",
    "title": "Why can’t governments print an unlimited amount of money? - Jonathan Smith",
    "channel": "TED-Ed",
    "videoId": "GFTKKyYSCKs",
    "durationLabel": "4:55",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "business-past-storytelling",
    "interestId": "business",
    "title": "How do we create a better economy?",
    "channel": "TED-Ed",
    "videoId": "6MK6tuZ7Rws",
    "durationLabel": "6:05",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "business-modals-conditionals",
    "interestId": "business",
    "title": "Why is it so hard to escape poverty? - Ann-Helén Bay",
    "channel": "TED-Ed",
    "videoId": "D9N7QaIOkG8",
    "durationLabel": "4:46",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "business-future-perfect",
    "interestId": "business",
    "title": "How does the stock market work? - Oliver Elfenbaum",
    "channel": "TED-Ed",
    "videoId": "p7HKvqRI_Bo",
    "durationLabel": "4:30",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "engineering-present-routines",
    "interestId": "engineering",
    "title": "One of the most epic engineering feats in history - Alex Gendler",
    "channel": "TED-Ed",
    "videoId": "dyckL6HuLRU",
    "durationLabel": "5:16",
    "grammarBlock": "present-routines"
  },
  {
    "id": "engineering-descriptions-comparisons",
    "interestId": "engineering",
    "title": "Building the impossible: Golden Gate Bridge - Alex Gendler",
    "channel": "TED-Ed",
    "videoId": "EPd2w5d_qAk",
    "durationLabel": "5:27",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "engineering-past-storytelling",
    "interestId": "engineering",
    "title": "Will there ever be a mile-high skyscraper? - Stefan Al",
    "channel": "TED-Ed",
    "videoId": "kF54-camgCg",
    "durationLabel": "5:05",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "engineering-modals-conditionals",
    "interestId": "engineering",
    "title": "Could we build a wooden skyscraper? - Stefan Al",
    "channel": "TED-Ed",
    "videoId": "E_vPKqVg1eA",
    "durationLabel": "4:57",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "engineering-future-perfect",
    "interestId": "engineering",
    "title": "What Makes Bridges So Strong? | Engineering for Kids | STEAM | SciShow Kids",
    "channel": "SciShow Kids",
    "videoId": "oVOnRPefcno",
    "durationLabel": "3:45",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "law_mystery-present-routines",
    "interestId": "law_mystery",
    "title": "How did detectives solve the case of the bloody fingerprints? - Theodore E. Yeshion",
    "channel": "TED-Ed",
    "videoId": "__nlupHISg0",
    "durationLabel": "5:02",
    "grammarBlock": "present-routines"
  },
  {
    "id": "law_mystery-descriptions-comparisons",
    "interestId": "law_mystery",
    "title": "How to find hidden clues at crime scenes - Theodore E. Yeshion",
    "channel": "TED-Ed",
    "videoId": "P8OEz3PvWZQ",
    "durationLabel": "5:34",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "law_mystery-past-storytelling",
    "interestId": "law_mystery",
    "title": "The secret formula to Agatha Christie's murder mysteries - Jamie Bernthal",
    "channel": "TED-Ed",
    "videoId": "98pNh3LtV8c",
    "durationLabel": "5:11",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "law_mystery-modals-conditionals",
    "interestId": "law_mystery",
    "title": "Early forensics and crime-solving chemists - Deborah Blum",
    "channel": "TED-Ed",
    "videoId": "ORpeZP0jiCk",
    "durationLabel": "7:51",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "law_mystery-future-perfect",
    "interestId": "law_mystery",
    "title": "Ethical dilemma: Who should you believe? - Alex Worsnip",
    "channel": "TED-Ed",
    "videoId": "FB921D40ibw",
    "durationLabel": "4:47",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "veterinary-present-routines",
    "interestId": "veterinary",
    "title": "TEDxWestlake - Molly Dominguez - \"Veterinary Medicine: Human, animal and environmental health\"",
    "channel": "TEDx Talks",
    "videoId": "Aqc2-giOVr8",
    "durationLabel": "5:06",
    "grammarBlock": "present-routines"
  },
  {
    "id": "veterinary-descriptions-comparisons",
    "interestId": "veterinary",
    "title": "Why do cats act so weird? - Tony Buffington",
    "channel": "TED-Ed",
    "videoId": "sI8NsYIyQ2A",
    "durationLabel": "4:58",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "veterinary-past-storytelling",
    "interestId": "veterinary",
    "title": "How do dogs \"see\" with their noses? - Alexandra Horowitz",
    "channel": "TED-Ed",
    "videoId": "p7fXa2Occ_U",
    "durationLabel": "4:28",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "veterinary-modals-conditionals",
    "interestId": "veterinary",
    "title": "Why is getting bitten by a rabid animal so dangerous? - Charles Rupprecht",
    "channel": "TED-Ed",
    "videoId": "gePOX4nbMU4",
    "durationLabel": "6:04",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "veterinary-future-perfect",
    "interestId": "veterinary",
    "title": "Do animals have language? - Michele Bishop",
    "channel": "TED-Ed",
    "videoId": "_1FY5kL_zXU",
    "durationLabel": "4:55",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "tech_ai-present-routines",
    "interestId": "tech_ai",
    "title": "Can robots be creative? - Gil Weinberg",
    "channel": "TED-Ed",
    "videoId": "Rh9vBczqMk0",
    "durationLabel": "5:27",
    "grammarBlock": "present-routines"
  },
  {
    "id": "tech_ai-descriptions-comparisons",
    "interestId": "tech_ai",
    "title": "How does artificial intelligence learn? - Briana Brownell",
    "channel": "TED-Ed",
    "videoId": "0yCJMt9Mx9c",
    "durationLabel": "4:57",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "tech_ai-past-storytelling",
    "interestId": "tech_ai",
    "title": "The Turing test: Can a computer pass for a human? - Alex Gendler",
    "channel": "TED-Ed",
    "videoId": "3wLqsRLvV-c",
    "durationLabel": "4:43",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "tech_ai-modals-conditionals",
    "interestId": "tech_ai",
    "title": "How will AI change the world?",
    "channel": "TED-Ed",
    "videoId": "RzkD_rTEBYs",
    "durationLabel": "5:56",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "tech_ai-future-perfect",
    "interestId": "tech_ai",
    "title": "The rise of killer robots and super-intelligent machines | EL5132 TED Ed Video",
    "channel": "Sik Feng Cheong",
    "videoId": "5rhPbut1aUI",
    "durationLabel": "5:00",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "soccer-present-routines",
    "interestId": "soccer",
    "title": "Cristiano Ronaldo interview | CR7 reveals how to succeed",
    "channel": "Unisport",
    "videoId": "1KJFsm8NDyE",
    "durationLabel": "4:34",
    "grammarBlock": "present-routines"
  },
  {
    "id": "soccer-descriptions-comparisons",
    "interestId": "soccer",
    "title": "Cristiano Ronaldo TURNS a SIMPLE QUESTION into a POWERFUL LIFE LESSON",
    "channel": "Diario AS",
    "videoId": "lUItpqUtyWw",
    "durationLabel": "2:34",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "soccer-past-storytelling",
    "interestId": "soccer",
    "title": "Cristiano Ronaldo Motivational Speech | CR7 best advice for lifetime | English Motivational Videos",
    "channel": "English Motivational Videos",
    "videoId": "pMng6oKA0dc",
    "durationLabel": "4:32",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "soccer-modals-conditionals",
    "interestId": "soccer",
    "title": "Cristiano Ronaldo: The Unseen Battle – From Slums to Superstar (The Full Story)",
    "channel": "luxe legends",
    "videoId": "GXkpFgX4DS0",
    "durationLabel": "10:18",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "soccer-future-perfect",
    "interestId": "soccer",
    "title": "10 Minutes Of Cristiano Ronaldo Giving Life Changing Advice",
    "channel": "Absolute Motivation",
    "videoId": "0V_g1zNhbyA",
    "durationLabel": "10:01",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "basketball-present-routines",
    "interestId": "basketball",
    "title": "Kobe Bryant & Steph Curry All Star Game Interview Together | LIVE 2 14 16",
    "channel": "Cynthia Bowers",
    "videoId": "qkexJ8p7C9o",
    "durationLabel": "4:48",
    "grammarBlock": "present-routines"
  },
  {
    "id": "basketball-descriptions-comparisons",
    "interestId": "basketball",
    "title": "Kobe Bryant Was TOTALLY Right About Steph Curry, But No One Listened",
    "channel": "Hoopers Ln.",
    "videoId": "12ulNf2RJ3I",
    "durationLabel": "10:04",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "basketball-past-storytelling",
    "interestId": "basketball",
    "title": "Kobe Bryant shows how Steph Curry should defend against Rockets | 'Detail' Excerpt | ESPN",
    "channel": "ESPN",
    "videoId": "caI0mmlKBDM",
    "durationLabel": "2:21",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "basketball-modals-conditionals",
    "interestId": "basketball",
    "title": "Stephen Curry on His Book Shot Ready and Getting Elbowed by Kobe Bryant on the Court (Extended)",
    "channel": "The Tonight Show Starring Jimmy Fallon",
    "videoId": "-ZyDHDt8LjY",
    "durationLabel": "9:58",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "basketball-future-perfect",
    "interestId": "basketball",
    "title": "THE MINDSET OF A WINNER | Kobe Bryant Champions Advice",
    "channel": "Motiversity",
    "videoId": "VSceuiPBpxY",
    "durationLabel": "11:26",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "formula1-present-routines",
    "interestId": "formula1",
    "title": "A Beginner's Guide To Formula 1",
    "channel": "FORMULA 1",
    "videoId": "VybzXU1dYk4",
    "durationLabel": "6:09",
    "grammarBlock": "present-routines"
  },
  {
    "id": "formula1-descriptions-comparisons",
    "interestId": "formula1",
    "title": "Beginner's Guide to F1",
    "channel": "FORMULA 1",
    "videoId": "Q-jjZMMxbZs",
    "durationLabel": "4:42",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "formula1-past-storytelling",
    "interestId": "formula1",
    "title": "The Ultimate Guide To The 2026 F1 Cars",
    "channel": "FORMULA 1",
    "videoId": "FC-sLnkcu_4",
    "durationLabel": "11:25",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "formula1-modals-conditionals",
    "interestId": "formula1",
    "title": "F1 Car vs Road Car: The Differences In The Engine Explained | Aramco",
    "channel": "FORMULA 1",
    "videoId": "wGfgQC9oRDQ",
    "durationLabel": "9:46",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "formula1-future-perfect",
    "interestId": "formula1",
    "title": "How F1 Drivers CHANGE Gears?",
    "channel": "GP ACTION ",
    "videoId": "qvGFJCUkQ-4",
    "durationLabel": "4:11",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "fitness-present-routines",
    "interestId": "fitness",
    "title": "What makes muscles grow? - Jeffrey Siegel",
    "channel": "TED-Ed",
    "videoId": "2tM1LFFxeKg",
    "durationLabel": "4:20",
    "grammarBlock": "present-routines"
  },
  {
    "id": "fitness-descriptions-comparisons",
    "interestId": "fitness",
    "title": "How your muscular system works - Emma Bryce",
    "channel": "TED-Ed",
    "videoId": "VVL-8zr2hk4",
    "durationLabel": "4:45",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "fitness-past-storytelling",
    "interestId": "fitness",
    "title": "How stretching actually changes your muscles - Malachy McHugh",
    "channel": "TED-Ed",
    "videoId": "g1pb2aK2we4",
    "durationLabel": "5:03",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "fitness-modals-conditionals",
    "interestId": "fitness",
    "title": "The surprising reason our muscles get tired - Christian Moro",
    "channel": "TED-Ed",
    "videoId": "rLsimrBoYXc",
    "durationLabel": "4:25",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "fitness-future-perfect",
    "interestId": "fitness",
    "title": "Why Women Need To Get Serious About Strength  | Dr. Jaime Seeman | TEDxGreenhouse Road",
    "channel": "TEDx Talks",
    "videoId": "6pczUz8mYnU",
    "durationLabel": "11:00",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "olympics-present-routines",
    "interestId": "olympics",
    "title": "An athlete uses physics to shatter world records - Asaf Bar-Yosef",
    "channel": "TED-Ed",
    "videoId": "RaGUW1d0w8g",
    "durationLabel": "3:51",
    "grammarBlock": "present-routines"
  },
  {
    "id": "olympics-descriptions-comparisons",
    "interestId": "olympics",
    "title": "The ancient origins of the Olympics - Armand D'Angour",
    "channel": "TED-Ed",
    "videoId": "VdHHus8IgYA",
    "durationLabel": "3:20",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "olympics-past-storytelling",
    "interestId": "olympics",
    "title": "How Two Decisions Led Me to Olympic Glory - Steve Mesler",
    "channel": "TED-Ed",
    "videoId": "imGfY8nb9jw",
    "durationLabel": "4:02",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "olympics-modals-conditionals",
    "interestId": "olympics",
    "title": "A Day in the Life of A Sports Scientist",
    "channel": "Olympic Games",
    "videoId": "v9s0d5bazS0",
    "durationLabel": "2:44",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "olympics-future-perfect",
    "interestId": "olympics",
    "title": "History of the Olympics | National Geographic",
    "channel": "National Geographic",
    "videoId": "mQ94xbXnYu4",
    "durationLabel": "2:22",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "extreme_sports-present-routines",
    "interestId": "extreme_sports",
    "title": "Biggest Skate Ramp EVER (world record)",
    "channel": "Red Bull",
    "videoId": "JqflfjrcKjo",
    "durationLabel": "10:28",
    "grammarBlock": "present-routines"
  },
  {
    "id": "extreme_sports-descriptions-comparisons",
    "interestId": "extreme_sports",
    "title": "Big Wave Surfer Mark Mathews Talks Living the Dream - FOCUS - Season 2 Ep 7",
    "channel": "Red Bull",
    "videoId": "T6VHK0xd5Ho",
    "durationLabel": "2:37",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "extreme_sports-past-storytelling",
    "interestId": "extreme_sports",
    "title": "What Happens To Your Body When You Climb | w/ Shauna Coxsey",
    "channel": "Red Bull",
    "videoId": "qNYHXslSpDU",
    "durationLabel": "5:52",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "extreme_sports-modals-conditionals",
    "interestId": "extreme_sports",
    "title": "Snowboard, skate, and surf in one day - From top to bottom",
    "channel": "Red Bull",
    "videoId": "sdydxdvi9h0",
    "durationLabel": "3:35",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "extreme_sports-future-perfect",
    "interestId": "extreme_sports",
    "title": "RED BULL SPOT CHECK LISBON - SKATE DEMO",
    "channel": "Digital Surf Tribe",
    "videoId": "ZhUbt7X28vI",
    "durationLabel": "2:55",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "makeup-present-routines",
    "interestId": "makeup",
    "title": "Hailey Bieber’s Quick Everyday Morning Routine | Beauty Secrets | Vogue",
    "channel": "Vogue",
    "videoId": "9wdisivSWYU",
    "durationLabel": "9:23",
    "grammarBlock": "present-routines"
  },
  {
    "id": "makeup-descriptions-comparisons",
    "interestId": "makeup",
    "title": "Olivia Rodrigo's Guide to Effortless Skin-Care and Makeup | Beauty Secrets | Vogue",
    "channel": "Vogue",
    "videoId": "CXvG2CBJ3SE",
    "durationLabel": "10:33",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "makeup-past-storytelling",
    "interestId": "makeup",
    "title": "Hailey Bieber's skincare routine for a super glowy complexion | Vogue France",
    "channel": "Vogue France",
    "videoId": "U0svrc0TDQM",
    "durationLabel": "4:42",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "makeup-modals-conditionals",
    "interestId": "makeup",
    "title": "Kylie Jenner's New Classic Beauty Routine | Beauty Secrets | Vogue",
    "channel": "Vogue",
    "videoId": "bEKufM_im88",
    "durationLabel": "8:37",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "makeup-future-perfect",
    "interestId": "makeup",
    "title": "Hailey Bieber's Date Night Skin Care & Makeup Routine | Beauty Secrets | Vogue",
    "channel": "Vogue",
    "videoId": "O_qgaOUR3Fo",
    "durationLabel": "11:10",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "fashion-present-routines",
    "interestId": "fashion",
    "title": "A History of the Fashion Show Front Row (1950s to Now) | Vogue",
    "channel": "Vogue",
    "videoId": "20AxWHvIGxo",
    "durationLabel": "6:26",
    "grammarBlock": "present-routines"
  },
  {
    "id": "fashion-descriptions-comparisons",
    "interestId": "fashion",
    "title": "How hat fashion has evolved throughout history - Alison L. Goodrum",
    "channel": "TED-Ed",
    "videoId": "-Tw81EQYV_Y",
    "durationLabel": "4:58",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "fashion-past-storytelling",
    "interestId": "fashion",
    "title": "The History of Fashion in 3 Minutes | From Ancient to Modern",
    "channel": "History and Beyond",
    "videoId": "UOsqIgWC33c",
    "durationLabel": "3:26",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "fashion-modals-conditionals",
    "interestId": "fashion",
    "title": "Sarah Jessica Parker Narrates the 1940s in Vogue  | Vogue by the Decade",
    "channel": "Vogue",
    "videoId": "LU3X_pkXA4Q",
    "durationLabel": "3:40",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "fashion-future-perfect",
    "interestId": "fashion",
    "title": "How the button changed fashion | Small Thing Big Idea, a TED series",
    "channel": "TED",
    "videoId": "7LN4L5EMmmc",
    "durationLabel": "2:21",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "art_design-present-routines",
    "interestId": "art_design",
    "title": "The unexpected math behind Van Gogh's \"Starry Night\" - Natalya St. Clair",
    "channel": "TED-Ed",
    "videoId": "PMerSm2ToFY",
    "durationLabel": "4:39",
    "grammarBlock": "present-routines"
  },
  {
    "id": "art_design-descriptions-comparisons",
    "interestId": "art_design",
    "title": "New technology creates unique view of famous Van Gogh painting",
    "channel": "CBS Mornings",
    "videoId": "nMmxl8wBXA0",
    "durationLabel": "6:47",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "art_design-past-storytelling",
    "interestId": "art_design",
    "title": "Van Gogh's Art in 7 Minutes: From Iconic Paintings to Immersive Experiences",
    "channel": "Curious Muse",
    "videoId": "4kcXgRK0M3w",
    "durationLabel": "7:45",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "art_design-modals-conditionals",
    "interestId": "art_design",
    "title": "The “Ugly” Van Gogh Painting",
    "channel": "Art Deco",
    "videoId": "Bv9l2sR0sOk",
    "durationLabel": "8:05",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "art_design-future-perfect",
    "interestId": "art_design",
    "title": "Better Know: The Starry Night | The Art Assignment | PBS Digital Studios",
    "channel": "The Art Assignment",
    "videoId": "oz908BHg55Y",
    "durationLabel": "8:19",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "movies-present-routines",
    "interestId": "movies",
    "title": "How a Film Wins the Oscar for Best Picture, Explained | Vanity Fair",
    "channel": "Vanity Fair",
    "videoId": "LjhoSv4Ood0",
    "durationLabel": "7:54",
    "grammarBlock": "present-routines"
  },
  {
    "id": "movies-descriptions-comparisons",
    "interestId": "movies",
    "title": "How the screens inside movies build fictional worlds",
    "channel": "Vox",
    "videoId": "qZe4KlJcDxU",
    "durationLabel": "8:27",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "movies-past-storytelling",
    "interestId": "movies",
    "title": "How Movie Trailers Are Created | Vanity Fair",
    "channel": "Vanity Fair",
    "videoId": "gyQ9GP0CZrg",
    "durationLabel": "7:14",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "movies-modals-conditionals",
    "interestId": "movies",
    "title": "What Happens to a Movie Without a Camera Operator? | Reverse Film School | Vanity Fair",
    "channel": "Vanity Fair",
    "videoId": "Kq_qBUeSLl4",
    "durationLabel": "10:53",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "movies-future-perfect",
    "interestId": "movies",
    "title": "Why fake punches in movies look real",
    "channel": "Vox",
    "videoId": "7DlYBJzAo6k",
    "durationLabel": "6:46",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "anime_animation-present-routines",
    "interestId": "anime_animation",
    "title": "Pixar Storytelling — How the WALL-E Opening Scene Tells a Story Without Words",
    "channel": "StudioBinder",
    "videoId": "UlnRzUhe_WE",
    "durationLabel": "7:08",
    "grammarBlock": "present-routines"
  },
  {
    "id": "anime_animation-descriptions-comparisons",
    "interestId": "anime_animation",
    "title": "Pixar Storytelling Rules #2: Characters",
    "channel": "Bloop Animation",
    "videoId": "avoM7T2N-WM",
    "durationLabel": "3:28",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "anime_animation-past-storytelling",
    "interestId": "anime_animation",
    "title": "Ghibli's Secret to Making Stories Feel REAL [Devlog #1]",
    "channel": "Infino",
    "videoId": "tiIlK7rxhhY",
    "durationLabel": "4:43",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "anime_animation-modals-conditionals",
    "interestId": "anime_animation",
    "title": "Pixar Studio Stories: Pixarpalooza | Disney•Pixar",
    "channel": "Pixar",
    "videoId": "z6cWuMR9rCg",
    "durationLabel": "3:03",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "anime_animation-future-perfect",
    "interestId": "anime_animation",
    "title": "How PIXAR Tells a Story: The Story Spine!",
    "channel": "Write for Animation by Pietro Schito",
    "videoId": "Ay4OChxR4vQ",
    "durationLabel": "4:46",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "music_pop-present-routines",
    "interestId": "music_pop",
    "title": "How playing an instrument benefits your brain - Anita Collins",
    "channel": "TED-Ed",
    "videoId": "R0JKCYZ8hng",
    "durationLabel": "4:45",
    "grammarBlock": "present-routines"
  },
  {
    "id": "music_pop-descriptions-comparisons",
    "interestId": "music_pop",
    "title": "How Music Works: What Happens to your Brain when you Sing?",
    "channel": "ABC Classic",
    "videoId": "lSvY_oIIwMM",
    "durationLabel": "1:27",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "music_pop-past-storytelling",
    "interestId": "music_pop",
    "title": "Earworms: Those songs that get stuck in your head - Elizabeth Hellmuth Margulis",
    "channel": "TED-Ed",
    "videoId": "3NE_OoO-N54",
    "durationLabel": "4:46",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "music_pop-modals-conditionals",
    "interestId": "music_pop",
    "title": "How Music Affects Your Brain",
    "channel": "BuzzFeedVideo",
    "videoId": "s19Fr-_WaXo",
    "durationLabel": "1:39",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "music_pop-future-perfect",
    "interestId": "music_pop",
    "title": "This Is Your Brain On Music - How Music Benefits The Brain (animated)",
    "channel": "Better Than Yesterday",
    "videoId": "kZJ8BfEu-P8",
    "durationLabel": "6:12",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "kpop-present-routines",
    "interestId": "kpop",
    "title": "K-Pop vs Black Culture: How to Own Cultural Appropriation (ft. Jay Park, BLACKPINK, BTS, EXO & more)",
    "channel": "KayElle",
    "videoId": "vmn9jJozQBo",
    "durationLabel": "8:48",
    "grammarBlock": "present-routines"
  },
  {
    "id": "kpop-descriptions-comparisons",
    "interestId": "kpop",
    "title": "Why the Korean wave is more than BTS or Blackpink | CNBC Explains",
    "channel": "CNBC International",
    "videoId": "Wn-PV82k2gs",
    "durationLabel": "8:13",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "kpop-past-storytelling",
    "interestId": "kpop",
    "title": "BLACKPINK Sings Dua Lipa, Taylor Swift, and \"Kill This Love\" in a Game of Song Association | ELLE",
    "channel": "ELLE",
    "videoId": "MkcHBp4XKxs",
    "durationLabel": "7:05",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "kpop-modals-conditionals",
    "interestId": "kpop",
    "title": "Blackpink: Meet the K-pop superstars backstage - BBC News",
    "channel": "BBC News",
    "videoId": "EmMBuGlMiek",
    "durationLabel": "5:55",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "kpop-future-perfect",
    "interestId": "kpop",
    "title": "BTS Answer the Web's Most Searched Questions | WIRED",
    "channel": "WIRED",
    "videoId": "qsobCAGiuRU",
    "durationLabel": "9:18",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "gaming-present-routines",
    "interestId": "gaming",
    "title": "A brief history of video games (Part I) - Safwat Saleem",
    "channel": "TED-Ed",
    "videoId": "x24KoVNliMk",
    "durationLabel": "4:46",
    "grammarBlock": "present-routines"
  },
  {
    "id": "gaming-descriptions-comparisons",
    "interestId": "gaming",
    "title": "How to get better at video games, according to babies - Brian Christian",
    "channel": "TED-Ed",
    "videoId": "PP8Zc778B8s",
    "durationLabel": "5:14",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "gaming-past-storytelling",
    "interestId": "gaming",
    "title": "Can Video Games Make You Smarter?",
    "channel": "AsapSCIENCE",
    "videoId": "OOsqkQytHOs",
    "durationLabel": "4:14",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "gaming-modals-conditionals",
    "interestId": "gaming",
    "title": "Are video games actually good for you?",
    "channel": "TED-Ed Student Talks",
    "videoId": "Y6ijCbTwRPY",
    "durationLabel": "8:19",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "gaming-future-perfect",
    "interestId": "gaming",
    "title": "Heal your brain with video games | Jane McGonigal",
    "channel": "TED Archive",
    "videoId": "9zyNcov087U",
    "durationLabel": "6:34",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "creators-present-routines",
    "interestId": "creators",
    "title": "Cell Phones, Dopamine, and Development: Barbara Jennings at TEDxABQ",
    "channel": "TEDx Talks",
    "videoId": "kGZvNbfrNag",
    "durationLabel": "5:07",
    "grammarBlock": "present-routines"
  },
  {
    "id": "creators-descriptions-comparisons",
    "interestId": "creators",
    "title": "Cell Phone Addiction | Tanner Welton | TEDxLangleyED",
    "channel": "TEDx Talks",
    "videoId": "qBbEXJ-Uqi0",
    "durationLabel": "6:47",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "creators-past-storytelling",
    "interestId": "creators",
    "title": "Social Media and Your Mental Health",
    "channel": "Goodwill ENC",
    "videoId": "uTZXjvcsMlU",
    "durationLabel": "1:32",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "creators-modals-conditionals",
    "interestId": "creators",
    "title": "5 Crazy Ways Social Media Is Changing Your Brain Right Now",
    "channel": "AsapSCIENCE",
    "videoId": "HffWFd_6bJ0",
    "durationLabel": "3:15",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "creators-future-perfect",
    "interestId": "creators",
    "title": "How false news can spread - Noah Tavlin",
    "channel": "TED-Ed",
    "videoId": "cSKGa_7XJkg",
    "durationLabel": "3:42",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "comedy_culture-present-routines",
    "interestId": "comedy_culture",
    "title": "The science of laughter - Sasha Winkler",
    "channel": "TED-Ed",
    "videoId": "Xu-QfE_1ksk",
    "durationLabel": "5:32",
    "grammarBlock": "present-routines"
  },
  {
    "id": "comedy_culture-descriptions-comparisons",
    "interestId": "comedy_culture",
    "title": "The Importance of Body Language | Brian Habib | TEDxKids@ElCajon",
    "channel": "TEDx Talks",
    "videoId": "2dma80W_K1o",
    "durationLabel": "4:37",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "comedy_culture-past-storytelling",
    "interestId": "comedy_culture",
    "title": "Why Do We Laugh? The Science Behind Humor and Human Connection",
    "channel": "Smithsonian Magazine",
    "videoId": "xSNG9hZCL8M",
    "durationLabel": "3:11",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "comedy_culture-modals-conditionals",
    "interestId": "comedy_culture",
    "title": "How to Find Laughter Anywhere | Chris Duffy | TED",
    "channel": "TED",
    "videoId": "sUv353ua7E8",
    "durationLabel": "7:35",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "comedy_culture-future-perfect",
    "interestId": "comedy_culture",
    "title": "Why Do We Laugh?",
    "channel": "Be Smart",
    "videoId": "9WzVMZunzaM",
    "durationLabel": "6:31",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "travel-present-routines",
    "interestId": "travel",
    "title": "Europe | Destination World | Nat Geo Kids",
    "channel": "Nat Geo Kids",
    "videoId": "RNx0akt3_XI",
    "durationLabel": "3:25",
    "grammarBlock": "present-routines"
  },
  {
    "id": "travel-descriptions-comparisons",
    "interestId": "travel",
    "title": "Machu Picchu 101 | National Geographic",
    "channel": "National Geographic",
    "videoId": "cnMa-Sm9H4k",
    "durationLabel": "3:34",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "travel-past-storytelling",
    "interestId": "travel",
    "title": "Asia | Destination World | Nat Geo Kids",
    "channel": "Nat Geo Kids",
    "videoId": "nsOtOye-DJM",
    "durationLabel": "2:49",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "travel-modals-conditionals",
    "interestId": "travel",
    "title": "Urbanization and the future of cities - Vance Kite",
    "channel": "TED-Ed",
    "videoId": "fKnAJCSGSdk",
    "durationLabel": "4:08",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "travel-future-perfect",
    "interestId": "travel",
    "title": "Africa | Destination World | Nat Geo Kids",
    "channel": "Nat Geo Kids",
    "videoId": "PSYHMWmyVfo",
    "durationLabel": "2:51",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "food_cooking-present-routines",
    "interestId": "food_cooking",
    "title": "The history of chocolate - Deanna Pucciarelli",
    "channel": "TED-Ed",
    "videoId": "ibjUpk9Iagk",
    "durationLabel": "4:41",
    "grammarBlock": "present-routines"
  },
  {
    "id": "food_cooking-descriptions-comparisons",
    "interestId": "food_cooking",
    "title": "How humanity got hooked on coffee - Jonathan Morris",
    "channel": "TED-Ed",
    "videoId": "xQ156y4TtJs",
    "durationLabel": "5:35",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "food_cooking-past-storytelling",
    "interestId": "food_cooking",
    "title": "A brie(f) history of cheese - Paul Kindstedt",
    "channel": "TED-Ed",
    "videoId": "QKae1k1BDdA",
    "durationLabel": "5:34",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "food_cooking-modals-conditionals",
    "interestId": "food_cooking",
    "title": "We React to The history of chocolate (Ted-Ed)",
    "channel": "We React to History",
    "videoId": "f_ZpzYr4QdY",
    "durationLabel": "9:31",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "food_cooking-future-perfect",
    "interestId": "food_cooking",
    "title": "How the sandwich was invented | Moments of Vision 5 - Jessica Oreck",
    "channel": "TED-Ed",
    "videoId": "7k6n46xBTxs",
    "durationLabel": "1:49",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "space-present-routines",
    "interestId": "space",
    "title": "Could the Earth be swallowed by a black hole? - Fabio Pacucci",
    "channel": "TED-Ed",
    "videoId": "e9TLbZuvsko",
    "durationLabel": "5:11",
    "grammarBlock": "present-routines"
  },
  {
    "id": "space-descriptions-comparisons",
    "interestId": "space",
    "title": "What is a Black Hole? We Asked a NASA Expert",
    "channel": "NASA",
    "videoId": "EJXTZ5jpSmk",
    "durationLabel": "1:34",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "space-past-storytelling",
    "interestId": "space",
    "title": "How did NASA touch the Sun without melting?",
    "channel": "TED-Ed",
    "videoId": "tekiHV-e8Uw",
    "durationLabel": "5:48",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "space-modals-conditionals",
    "interestId": "space",
    "title": "Can a black hole be destroyed? - Fabio Pacucci",
    "channel": "TED-Ed",
    "videoId": "AXR-etStvCI",
    "durationLabel": "5:07",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "space-future-perfect",
    "interestId": "space",
    "title": "Black Holes 101 | National Geographic",
    "channel": "National Geographic",
    "videoId": "kOEDG3j1bjs",
    "durationLabel": "3:11",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "history-present-routines",
    "interestId": "history",
    "title": "How did they build the Great Pyramid of Giza? - Soraya Field Fiorio",
    "channel": "TED-Ed",
    "videoId": "fJBlEPOj4Fk",
    "durationLabel": "5:33",
    "grammarBlock": "present-routines"
  },
  {
    "id": "history-descriptions-comparisons",
    "interestId": "history",
    "title": "A day in the life of a Roman soldier - Robert Garland",
    "channel": "TED-Ed",
    "videoId": "P5e7cl19Ha0",
    "durationLabel": "5:00",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "history-past-storytelling",
    "interestId": "history",
    "title": "Ancient Rome’s most notorious doctor - Ramon Glazov",
    "channel": "TED-Ed",
    "videoId": "r1BhsWsmjco",
    "durationLabel": "5:11",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "history-modals-conditionals",
    "interestId": "history",
    "title": "History vs. Cleopatra - Alex Gendler",
    "channel": "TED-Ed",
    "videoId": "Y6EhRwn4zkc",
    "durationLabel": "4:28",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "history-future-perfect",
    "interestId": "history",
    "title": "How inventions change history (for better and for worse) - Kenneth C. Davis",
    "channel": "TED-Ed",
    "videoId": "0SMNYivhGsc",
    "durationLabel": "5:14",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "nature_oceans-present-routines",
    "interestId": "nature_oceans",
    "title": "How We Can Keep Plastics Out of Our Ocean | National Geographic",
    "channel": "National Geographic",
    "videoId": "HQTUWK7CM-Y",
    "durationLabel": "3:11",
    "grammarBlock": "present-routines"
  },
  {
    "id": "nature_oceans-descriptions-comparisons",
    "interestId": "nature_oceans",
    "title": "Will the ocean ever run out of fish? - Ayana Elizabeth Johnson and Jennifer Jacquet",
    "channel": "TED-Ed",
    "videoId": "WNdR808jMSA",
    "durationLabel": "4:28",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "nature_oceans-past-storytelling",
    "interestId": "nature_oceans",
    "title": "Oceans 101 | National Geographic",
    "channel": "National Geographic",
    "videoId": "MfWyzrkFkg8",
    "durationLabel": "2:54",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "nature_oceans-modals-conditionals",
    "interestId": "nature_oceans",
    "title": "Sea Turtles 101 | National Geographic",
    "channel": "National Geographic",
    "videoId": "5Rmv3nliwCs",
    "durationLabel": "3:45",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "nature_oceans-future-perfect",
    "interestId": "nature_oceans",
    "title": "The Importance of Our Ocean | Ocean with David Attenborough | National Geographic UK",
    "channel": "National Geographic UK",
    "videoId": "yyEyXJl5bbY",
    "durationLabel": "1:44",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "aviation-present-routines",
    "interestId": "aviation",
    "title": "How do airplanes actually fly? - Raymond Adkins",
    "channel": "TED-Ed",
    "videoId": "p4VHMsIuPmk",
    "durationLabel": "5:03",
    "grammarBlock": "present-routines"
  },
  {
    "id": "aviation-descriptions-comparisons",
    "interestId": "aviation",
    "title": "Why are airplanes slower than they used to be? - Alex Gendler",
    "channel": "TED-Ed",
    "videoId": "hd8tYiLSmn0",
    "durationLabel": "4:59",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "aviation-past-storytelling",
    "interestId": "aviation",
    "title": "How Do Airplanes Fly?",
    "channel": "minutephysics",
    "videoId": "Gg0TXNXgz-w",
    "durationLabel": "3:11",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "aviation-modals-conditionals",
    "interestId": "aviation",
    "title": "How Airplanes Fly! | Airplane Science | SciShow Kids",
    "channel": "SciShow Kids",
    "videoId": "VLpSxHwfU04",
    "durationLabel": "4:31",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "aviation-future-perfect",
    "interestId": "aviation",
    "title": "What happens if you don’t put your phone in airplane mode? - Lindsay DeMarchi",
    "channel": "TED-Ed",
    "videoId": "iKYHf22qVdM",
    "durationLabel": "4:55",
    "grammarBlock": "future-perfect"
  },
  {
    "id": "self_improvement-present-routines",
    "interestId": "self_improvement",
    "title": "3 tips to boost your confidence - TED-Ed",
    "channel": "TED-Ed",
    "videoId": "l_NYrWqUR40",
    "durationLabel": "4:17",
    "grammarBlock": "present-routines"
  },
  {
    "id": "self_improvement-descriptions-comparisons",
    "interestId": "self_improvement",
    "title": "3 tips on how to study effectively",
    "channel": "TED-Ed",
    "videoId": "TjPFZaMe2yw",
    "durationLabel": "5:09",
    "grammarBlock": "descriptions-comparisons"
  },
  {
    "id": "self_improvement-past-storytelling",
    "interestId": "self_improvement",
    "title": "Five simple strategies to sharpen your critical thinking | BBC Ideas",
    "channel": "BBC Ideas",
    "videoId": "NHjgKe7JMNE",
    "durationLabel": "4:30",
    "grammarBlock": "past-storytelling"
  },
  {
    "id": "self_improvement-modals-conditionals",
    "interestId": "self_improvement",
    "title": "The secrets of learning a new language | Lýdia Machová | TED",
    "channel": "TED",
    "videoId": "o_XVt5rdpFY",
    "durationLabel": "10:46",
    "grammarBlock": "modals-conditionals"
  },
  {
    "id": "self_improvement-future-perfect",
    "interestId": "self_improvement",
    "title": "6 tips for boosting your confidence when learning a language",
    "channel": "BBC Learning English",
    "videoId": "gtVTPVvkQa8",
    "durationLabel": "2:49",
    "grammarBlock": "future-perfect"
  }
];

export function getInterestById(id: string): InterestCategory | undefined {
  return INTEREST_CATEGORIES.find((c) => c.id === id);
}

/**
 * Matches the current class title/grammar to one of the 5 functional grammar blocks
 * so the selected video and sentence instructions align with what was taught in class.
 */
export function matchClassToGrammarBlock(cls?: CurriculumClass): {
  block: GrammarBlockId;
  classTopicSummary: string;
} {
  const text = `${cls?.title || ''} ${cls?.description || ''}`.toLowerCase();
  const cleanTitle = cls?.title?.includes('/')
    ? cls.title.split('/')[0].trim()
    : cls?.title || 'la estructura de hoy';

  if (/past|was|were|did|used to|biograph|history|childhood|yesterday|story|memory|memories/i.test(text)) {
    return { block: 'past-storytelling', classTopicSummary: cleanTitle };
  }
  if (/should|must|can|could|modal|advice|health|imperative|conditional|ifs|rule|permission/i.test(text)) {
    return { block: 'modals-conditionals', classTopicSummary: cleanTitle };
  }
  if (/will|going to|future|plan|predict|present perfect|have you ever|experience|debate|opinion|career/i.test(text)) {
    return { block: 'future-perfect', classTopicSummary: cleanTitle };
  }
  if (/compar|superlat|adjective|describe|appearance|cloth|place|city|there is|there are|to be|color|house|food/i.test(text)) {
    return { block: 'descriptions-comparisons', classTopicSummary: cleanTitle };
  }
  return { block: 'present-routines', classTopicSummary: cleanTitle };
}

/**
 * Returns the ordered list of verified videos for an interest, placing the video that
 * matches the current class's grammar block first, and prioritizing unwatched videos.
 */
export function getVideosForInterestAndClass(
  interestId: string,
  cls?: CurriculumClass,
  watchedVideoIds: string[] = []
): InterestVideoItem[] {
  const allForInterest = INTEREST_VIDEOS_CATALOG.filter((v) => v.interestId === interestId);
  if (allForInterest.length === 0) return [];

  const { block } = matchClassToGrammarBlock(cls);
  const watchedSet = new Set(watchedVideoIds);

  return [...allForInterest].sort((a, b) => {
    const aWatched = watchedSet.has(a.videoId) ? 1 : 0;
    const bWatched = watchedSet.has(b.videoId) ? 1 : 0;
    if (aWatched !== bWatched) return aWatched - bWatched;

    const aMatches = a.grammarBlock === block ? 0 : 1;
    const bMatches = b.grammarBlock === block ? 0 : 1;
    return aMatches - bMatches;
  });
}
