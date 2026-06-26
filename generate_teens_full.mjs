import fs from 'fs';

const levelsConfig = [
  { id: 'teens-basic-zero', title: 'Level 0 - Basic Zero (Teen Startup)', count: 16, mcfr: 'Pre-A1',
    objective: 'Aprender lo más básico del inglés para adolescentes.',
    titles: [
      "Hello & Introductions", "Numbers, Ages & Birthdays", "My Body & Actions", 
      "My Favorite Gadgets & Tech", "Yummy Snacks & Drinks", "Shapes & Patterns", 
      "School Subjects & Supplies", "Pets & Animal Friends", "My Hobbies & Free Time", 
      "Family & Friends", "Alfabeto, deletreo y usernames", 
      "Presentarse: edad, curso, ciudad, gustos y redes sociales",
      "Ropa, estilo personal y apariencia", "Escuela, materias y objetos del salón",
      "Rutina diaria básica", "Videojuegos, música y hobbies (Repaso)"
    ]
  },
  { id: 'teens-basic-1', title: 'Level 1 - Basic 1 (Teen Explorer)', count: 10, mcfr: 'Pre-A1+',
    objective: 'Ampliar vocabulario con familia, emociones, ropa, clima y tecnología.',
    titles: [
      "Family Tree & Feelings", "Fast Food & Healthy Choices", "Fashion, Clothes & Weather", "Nature, Parks & Outdoors",
      "Planes de fin de semana con will y going to", "Invitaciones, aceptar y rechazar planes",
      "Compras, precios y ropa", "Comida, snacks y pedidos", "Tecnología, aplicaciones y redes sociales",
      "Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje"
    ]
  },
  { id: 'teens-basic-2', title: 'Level 2 - Basic 2 (Teen Adventurer)', count: 10, mcfr: 'A1',
    objective: 'Describir habilidades, reglas escolares, deportes, ciudad y entretenimiento.',
    titles: [
      "Animals & Habitats", "My Room & Dream House", "Vehicles, Transport & City", "Dream Jobs & Professions",
      "Habilidades con can / can’t", "Reglas escolares con must, have to, should",
      "Deportes, salud y hábitos", "Ciudad, transporte y lugares para salir",
      "Describir series, películas, juegos y música", "Conversación actual, rutinas y Repaso oral por retos"
    ]
  },
  { id: 'teens-basic-3', title: 'Level 3 - Basic 3 (Teen Champion)', count: 10, mcfr: 'A1+',
    objective: 'Hablar del pasado, recuerdos, vacaciones, biografías y anécdotas.',
    titles: [
      "Daily Routine & Time", "Sports, Competitions & Teams", "Holidays, Festivals & Traditions", "Space, Science & Future",
      "Was/were y recuerdos de infancia", "Vacaciones, viajes y anécdotas",
      "Biografías de artistas, deportistas o creadores", "Conectores para contar historias",
      "Problemas cotidianos y cómo explicarlos", "Verbos irregulares y terminaciones -ed. Proyecto en video"
    ]
  },
  { id: 'teens-basic-4', title: 'Level 4 - Basic 4 (Teen Pro)', count: 10, mcfr: 'A2',
    objective: 'Expresar opiniones, dar consejos, hablar de condiciones y mensajería.',
    titles: [
      "My Opinions & Perspectives", "Giving Good Advice", "Conditions & Outcomes", "Messaging & Online Chats",
      "Primer condicional para planes y consecuencias", "Comparativos y superlativos: apps, celulares, películas y deportes",
      "Too / enough para problemas y soluciones", "Consejos entre amigos con should",
      "Mensajes, emails y chats informales/formales", "Atención al cliente juvenil y evaluación de transición"
    ]
  },
  { id: 'teens-inter', title: 'Level 5, 6, 7 - Intermediate (Teen Sharks)', count: 12, mcfr: 'B1',
    objective: 'Experiencias personales, phrasal verbs, condicionales y debates juveniles.',
    titles: [
      "My Life Experiences", "Teen Slang & Phrasal Verbs", "Possibilities & Deductions", 
      "If I ruled the world (Conditionals)", "Agreeing & Disagreeing", "Podcast & Debate Basics",
      "Present Perfect con experiencias personales y Present Perfect Continuous", "Phrasal verbs frecuentes en conversaciones adolescentes",
      "Modales de posibilidad y deducción", "Primer y segundo condicional",
      "Opiniones, acuerdos y desacuerdos respetuosos", "Proyecto podcast/debate y Simulación entrevista beca/empleo"
    ]
  },
  { id: 'teens-advanced', title: 'Level 8 - Advanced (Teen Leaders)', count: 10, mcfr: 'B2',
    objective: 'Reported speech, relative clauses, voz pasiva y entrevistas.',
    titles: [
      "Gossip & News (Reported Speech)", "Describing the Details (Relative Clauses)", "Tech & Passive Voice", "Real Idioms in Context",
      "Reported speech en chismes, noticias y conversaciones", "Relative clauses y descripción detallada de personas/cosas",
      "Voz pasiva aplicada a noticias y tecnología", "Phrasal verbs e idioms de uso real",
      "Debates: IA, redes sociales, medioambiente y educación", "Entrevistas (trabajo/voluntariado) y resolución de problemas"
    ]
  },
  { id: 'teens-elite', title: 'Level 9 - Advanced Elite', count: 11, mcfr: 'C1',
    objective: 'Estructuras enfáticas, lenguaje diplomático, ensayos y proyectos.',
    titles: [
      "Future Goals & Plans", "Past Decisions & Mixed Conditionals", "Diplomacy & Nuance", "Academic Writing & Essays",
      "Leadership & Teamwork", "Future Continuous, Future Perfect y planificación de metas",
      "Condicionales mixtos y decisiones pasadas", "Lenguaje diplomático, cleft sentences e inversiones",
      "Ensayos, opiniones y presentaciones académicas", "Reuniones, liderazgo y trabajo en equipo",
      "Proyecto final: pitch de emprendimiento o conferencia"
    ]
  },
  { id: 'teens-masters', title: 'Level 10 - Masters of Fluency', count: 10, mcfr: 'C2',
    objective: 'Debate competitivo, análisis cultural, inglés académico y global.',
    titles: [
      "Critical Thinking & Debate", "Pop Culture & Media Analysis", "University & Academic English", "Content Creation & TED Talks",
      "Debate competitivo y pensamiento crítico", "Análisis de películas, música, noticias y cultura digital",
      "Inglés académico para universidad e intercambios", "Creación de podcast, videoensayo o presentación TED",
      "Temas globales: tecnología, ética, clima y sociedad", "Preparación de entrevistas C1 y Conversation Club"
    ]
  }
];

const imgImports = `import { CurriculumLevel } from '../types';
import imgTeenSocial from '../assets/images/teens_social_welcome_1782228078865.jpg';
import imgTeenHobbies from '../assets/images/teens_cool_hobbies_1782228092845.jpg';
import imgTeenWarmup from '../assets/images/teens_energy_warmup_1782228109142.jpg';
import imgTeenAssessment from '../assets/images/teens_assessment_welcome_1782228127925.jpg';
import imgTeenGreeting from '../assets/images/teen_greeting_1782228957842.jpg';
import imgTeenLifestyle from '../assets/images/teen_lifestyle_1782228974065.jpg';

const images = [imgTeenSocial, imgTeenHobbies, imgTeenWarmup, imgTeenAssessment, imgTeenGreeting, imgTeenLifestyle];
const getImg = (i: number) => images[i % images.length];
`;

let output = imgImports + '\nexport const curriculumTeensLevels: CurriculumLevel[] = [\n';

levelsConfig.forEach((level, lIdx) => {
  output += `  {\n`;
  output += `    id: "${level.id}",\n`;
  output += `    title: "${level.title}",\n`;
  output += `    duration: "2 meses",\n`;
  output += `    objective: "${level.objective}",\n`;
  output += `    mcfrEquivalent: "${level.mcfr}",\n`;
  output += `    classes: [\n`;
  
  for (let c = 1; c <= level.count; c++) {
    const classId = "c-" + level.id + "-" + c;
    const classTitle = "Clase " + c + ": " + level.titles[c-1];
    
    output += `      {\n`;
    output += `        id: "${classId}",\n`;
    output += `        title: "${classTitle}",\n`;
    output += `        description: "A fun and interactive class for teens.",\n`;
    output += `        duration: "60 mins",\n`;
    output += `        objective: "Master the topic of ${level.titles[c-1]}.",\n`;
    output += `        sections: [\n`;
    
    output += `        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(${c * 5 + 1}) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(${c * 5 + 2}) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of ${level.titles[c-1]}.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(${c * 5 + 3}) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Concept 1", description: "Introduction to the main concept.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(${c * 5 + 4}) },
            { id: "Diapositiva 5", title: "Examples", description: "Look at these examples.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(${c * 5 + 5}) },
            { id: "Diapositiva 6", title: "Vocabulary", description: "Key words for today.", bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(${c * 5 + 6}) },
            { id: "Diapositiva 7", title: "Structure", description: "How to form the sentences.", bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(${c * 5 + 7}) },
            { id: "Diapositiva 8", title: "More Examples", description: "Let's read these together.", bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(${c * 5 + 8}) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen and repeat.", bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(${c * 5 + 9}) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(${c * 5 + 10}) }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(${c * 5 + 15}) }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(${c * 5 + 18}) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(${c * 5 + 19}) }
          ],
          action: "Anotar la tarea."
        }\n`;
        
    output += `        ]\n`;
    output += `      }${c < level.count ? ',' : ''}\n`;
  }
  
  output += `    ],\n`;
  output += `    oralEvaluation: [],\n`;
  output += `    virtualEvaluation: []\n`;
  output += `  }${lIdx < levelsConfig.length - 1 ? ',' : ''}\n`;
});

output += `];\n`;

fs.writeFileSync('src/data/curriculumTeens.ts', output, 'utf8');
console.log('Teens curriculum generated successfully.');
