import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

const levelsData = [
  {
    levelRegex: /title:\s*"Basic Zero \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-basic-zero-11",
      title: "Clase 11: Alfabeto, deletreo y usernames",
      duration: "60 minutos",
      objective: "Deletrear información en redes sociales.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Alphabet.", slides: [{ id: "sl1", title: "ABC", description: "The Alphabet.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Cantar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Usernames.", slides: [{ id: "sl2", title: "Social Media", description: "Underscore, dot, at.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Spelling.", slides: [{ id: "sl3", title: "Spell it", description: "Spell your username.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Deletrea tu nombre de usuario.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-zero-12",
      title: "Clase 12: Presentarse: edad, curso, ciudad, gustos y redes sociales",
      duration: "60 minutos",
      objective: "Presentación personal completa.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Bio.", slides: [{ id: "sl1", title: "My Bio", description: "Who are you?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "To be and Likes.", slides: [{ id: "sl2", title: "About me", description: "I am 14. I like games.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Estructuras." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Entrevistas.", slides: [{ id: "sl3", title: "Interviews", description: "Ask your partner.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Graba una presentación de 30 segundos.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-zero-13",
      title: "Clase 13: Ropa, estilo personal y apariencia",
      duration: "60 minutos",
      objective: "Describir el estilo propio y de otros.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Fashion.", slides: [{ id: "sl1", title: "Styles", description: "What are you wearing?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Clothes.", slides: [{ id: "sl2", title: "My Closet", description: "Sneakers, hoodies, jeans.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Describir.", slides: [{ id: "sl3", title: "Guess who", description: "Describe a classmate.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Describe tu outfit favorito.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-zero-14",
      title: "Clase 14: Escuela, materias y objetos del salón",
      duration: "60 minutos",
      objective: "Hablar del entorno escolar.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "School.", slides: [{ id: "sl1", title: "School", description: "What's in your backpack?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Subjects.", slides: [{ id: "sl2", title: "Subjects", description: "Math, Art, History.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Favoritos.", slides: [{ id: "sl3", title: "Favorites", description: "My favorite subject is...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate corto." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla de tu materia escolar favorita y por qué.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-zero-15",
      title: "Clase 15: Rutina diaria básica",
      duration: "60 minutos",
      objective: "Describir el día a día.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Routine.", slides: [{ id: "sl1", title: "My Day", description: "Wake up, eat, play.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Verbs.", slides: [{ id: "sl2", title: "Daily Verbs", description: "I go to school at 8.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Comparar rutinas.", slides: [{ id: "sl3", title: "Compare", description: "What do you do?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Entrevistas." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu rutina de la mañana en 3 pasos.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-zero-16",
      title: "Clase 16: Videojuegos, música y hobbies (Repaso y mini presentación)",
      duration: "60 minutos",
      objective: "Repasar el nivel mediante temas de interés.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Hobbies.", slides: [{ id: "sl1", title: "Hobbies", description: "Games and Music.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Review", duration: "20 min", objective: "All topics.", slides: [{ id: "sl2", title: "Review", description: "Put it all together.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Repaso general." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Mini presentaciones.", slides: [{ id: "sl3", title: "Show time", description: "Present yourself.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Prepárate para el nivel 2.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 1 \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-basic-1-5",
      title: "Clase 5: Planes de fin de semana con will y going to",
      duration: "60 minutos",
      objective: "Hablar sobre planes a futuro corto.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Weekend.", slides: [{ id: "sl1", title: "Weekend", description: "What are your plans?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Will vs going to.", slides: [{ id: "sl2", title: "Future", description: "I will go vs I am going to play.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Agendas.", slides: [{ id: "sl3", title: "Agenda", description: "Plan the weekend.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tus planes para el sábado.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-1-6",
      title: "Clase 6: Invitaciones, aceptar y rechazar planes",
      duration: "60 minutos",
      objective: "Hacer arreglos sociales con amigos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Invites.", slides: [{ id: "sl1", title: "Parties", description: "Do you like parties?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Phrases.", slides: [{ id: "sl2", title: "Inviting", description: "Do you want to come? I'd love to! Sorry, I can't.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay invites.", slides: [{ id: "sl3", title: "Invite friends", description: "Accept or reject.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Invita a la cámara a salir contigo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-1-7",
      title: "Clase 7: Compras, precios y ropa",
      duration: "60 minutos",
      objective: "Manejar vocabulario de shopping.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Malls.", slides: [{ id: "sl1", title: "Shopping", description: "Do you like the mall?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Prices and sizes.", slides: [{ id: "sl2", title: "The Store", description: "How much? Size M please.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay tienda.", slides: [{ id: "sl3", title: "Buy it", description: "Clerk and customer.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Muestra una prenda y di cuánto costó imaginariamente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-1-8",
      title: "Clase 8: Comida, snacks y pedidos",
      duration: "60 minutos",
      objective: "Pedir comida en un contexto informal.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Food.", slides: [{ id: "sl1", title: "Fast Food", description: "Burgers or Pizza?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Ordering.", slides: [{ id: "sl2", title: "Menu", description: "Can I get a burger?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay restaurante.", slides: [{ id: "sl3", title: "Drive thru", description: "Order your meal.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Pide tu comida rápida favorita.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-1-9",
      title: "Clase 9: Tecnología, aplicaciones y redes sociales",
      duration: "60 minutos",
      objective: "Hablar sobre el mundo digital juvenil.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Apps.", slides: [{ id: "sl1", title: "Apps", description: "Most used app?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Tech terms.", slides: [{ id: "sl2", title: "Tech", description: "Post, share, like, download.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debate redes.", slides: [{ id: "sl3", title: "Socials", description: "Best social network?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: ¿Qué aplicación usas más y por qué?", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-1-10",
      title: "Clase 10: Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje",
      duration: "60 minutos",
      objective: "Cerrar nivel planificando con amigos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Texting.", slides: [{ id: "sl1", title: "Chat", description: "BRB, LOL.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Jerga de internet." },
        { id: "s2", title: "Project prep", duration: "20 min", objective: "Plan.", slides: [{ id: "sl2", title: "Plan", description: "Organize a trip.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Trabajo en equipo." },
        { id: "s3", title: "Presentations", duration: "15 min", objective: "Presentar.", slides: [{ id: "sl3", title: "Show time", description: "Present the plan.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Exponer." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Evaluación.", slides: [{ id: "sl4", title: "Ready?", description: "Oral exam next.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 2 \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-basic-2-5",
      title: "Clase 5: Habilidades con can / can’t",
      duration: "60 min",
      objective: "Expresar talentos y habilidades.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Talents.", slides: [{ id: "sl1", title: "Talents", description: "What can you do?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Can.", slides: [{ id: "sl2", title: "Can/Can't", description: "I can skate. I can't fly.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Retos.", slides: [{ id: "sl3", title: "Challenge", description: "Can you do this?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Demuestra un talento y explícalo con can.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-2-6",
      title: "Clase 6: Reglas escolares con must, have to, should",
      duration: "60 min",
      objective: "Entender obligaciones y dar consejos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Rules.", slides: [{ id: "sl1", title: "School Rules", description: "Do you like rules?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Obligations.", slides: [{ id: "sl2", title: "Must vs Should", description: "You must study. You should sleep.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Crear escuela ideal.", slides: [{ id: "sl3", title: "Dream School", description: "Make your own rules.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Da 3 consejos (should) para estudiar mejor.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-2-7",
      title: "Clase 7: Deportes, salud y hábitos",
      duration: "60 min",
      objective: "Hablar de vida sana y actividades físicas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Sports.", slides: [{ id: "sl1", title: "Sports", description: "Favorite sport?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Health.", slides: [{ id: "sl2", title: "Healthy", description: "Play soccer, eat well.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Entrevista salud.", slides: [{ id: "sl3", title: "Interview", description: "Are you healthy?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla de tus hábitos saludables.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-2-8",
      title: "Clase 8: Ciudad, transporte y lugares para salir",
      duration: "60 min",
      objective: "Describir el entorno urbano.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "City.", slides: [{ id: "sl1", title: "My City", description: "What's fun here?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Places.", slides: [{ id: "sl2", title: "Places", description: "Cinema, park, mall.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Planear salida.", slides: [{ id: "sl3", title: "Let's meet", description: "Where and how?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu lugar favorito en tu ciudad.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-2-9",
      title: "Clase 9: Describir series, películas, juegos y música",
      duration: "60 min",
      objective: "Expresar reseñas juveniles.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Entertainment.", slides: [{ id: "sl1", title: "Pop Culture", description: "Netflix or Spotify?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Adjectives.", slides: [{ id: "sl2", title: "Adjectives", description: "Awesome, boring, scary.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Recomendar.", slides: [{ id: "sl3", title: "Recommendations", description: "You have to watch this!", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Recomienda una serie o juego.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-2-10",
      title: "Clase 10: Conversación actual, rutinas y Repaso oral por retos",
      duration: "60 min",
      objective: "Repaso integral.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "Review", description: "Are you ready?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Challenges", duration: "20 min", objective: "Retos.", slides: [{ id: "sl2", title: "Challenges", description: "Complete the tasks.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Juegos." },
        { id: "s3", title: "Speaking", duration: "15 min", objective: "Hablar.", slides: [{ id: "sl3", title: "Talk", description: "Oral practice.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Conversación." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Evaluación.", slides: [{ id: "sl4", title: "Level Up", description: "Next level!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 3 \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-basic-3-5",
      title: "Clase 5: Was/were y recuerdos de infancia",
      duration: "60 min",
      objective: "Hablar de la niñez usando el verbo to be en pasado.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Childhood.", slides: [{ id: "sl1", title: "When I was little", description: "Cute memories.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Past to be.", slides: [{ id: "sl2", title: "Was / Were", description: "I was a quiet kid.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Compartir.", slides: [{ id: "sl3", title: "Memories", description: "Share your past.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Charlas." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla de cómo eras de pequeño usando was/were.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-3-6",
      title: "Clase 6: Vacaciones, viajes y anécdotas",
      duration: "60 min",
      objective: "Describir viajes pasados.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Travel.", slides: [{ id: "sl1", title: "Trips", description: "Best vacation?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Past simple.", slides: [{ id: "sl2", title: "Past Verbs", description: "We went to the beach.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Anécdotas.", slides: [{ id: "sl3", title: "Story time", description: "Tell us about a trip.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu anécdota favorita de unas vacaciones.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-3-7",
      title: "Clase 7: Biografías de artistas, deportistas o creadores",
      duration: "60 min",
      objective: "Relatar eventos de personas famosas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Idols.", slides: [{ id: "sl1", title: "Idols", description: "Who do you admire?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Bios.", slides: [{ id: "sl2", title: "Biography", description: "He was born in...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Escribir biografía.", slides: [{ id: "sl3", title: "Your Hero", description: "Write about them.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escritura corta." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla 1 minuto sobre tu artista favorito en pasado.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-3-8",
      title: "Clase 8: Conectores para contar historias",
      duration: "60 min",
      objective: "Secuenciar relatos pasados.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Order.", slides: [{ id: "sl1", title: "Order", description: "First, second...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Connectors.", slides: [{ id: "sl2", title: "Connectors", description: "First, then, suddenly...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Historias locas.", slides: [{ id: "sl3", title: "Crazy Story", description: "Make up a story.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego inventado." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cuenta una mini historia con 3 conectores.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-3-9",
      title: "Clase 9: Problemas cotidianos y cómo explicarlos",
      duration: "60 min",
      objective: "Hablar de inconvenientes pasados.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Bad days.", slides: [{ id: "sl1", title: "Bad day", description: "Everything went wrong.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Problems.", slides: [{ id: "sl2", title: "Issues", description: "I lost my phone.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Excusas.", slides: [{ id: "sl3", title: "Excuses", description: "Why are you late?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cuenta una excusa loca por la que llegaste tarde.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-3-10",
      title: "Clase 10: Verbos irregulares y terminaciones -ed. Proyecto en video",
      duration: "60 min",
      objective: "Mejorar fonética del pasado.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Pronunciation.", slides: [{ id: "sl1", title: "Sounds", description: "/t/ /d/ /id/", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Escuchar." },
        { id: "s2", title: "Phonetics", duration: "20 min", objective: "-ED endings.", slides: [{ id: "sl2", title: "Endings", description: "Worked, played, wanted.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Practicar." },
        { id: "s3", title: "Project Prep", duration: "15 min", objective: "Preparar proyecto.", slides: [{ id: "sl3", title: "Video Prep", description: "Your final video story.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Planear." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Action", description: "Graba tu proyecto final oral.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 4 \\(Teens\\)[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-basic-4-5",
      title: "Clase 5: Primer condicional para planes y consecuencias",
      duration: "60 min",
      objective: "Hablar de causa y efecto en el futuro.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "If...", slides: [{ id: "sl1", title: "If...", description: "If I pass the test...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "1st conditional.", slides: [{ id: "sl2", title: "Conditionals", description: "If + present, will.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Cadena de eventos.", slides: [{ id: "sl3", title: "Chain Game", description: "If... then...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Di 3 cosas que pasarán si apruebas tus exámenes.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-4-6",
      title: "Clase 6: Comparativos y superlativos: apps, celulares, películas y deportes",
      duration: "60 min",
      objective: "Comparar preferencias juveniles.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Vs.", slides: [{ id: "sl1", title: "Vs", description: "iPhone vs Android.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Debate." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Comparisons.", slides: [{ id: "sl2", title: "Better/Best", description: "More expensive, the coolest.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Reviews.", slides: [{ id: "sl3", title: "Review", description: "Compare 2 movies.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Compara tus dos apps favoritas.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-4-7",
      title: "Clase 7: Too / enough para problemas y soluciones",
      duration: "60 min",
      objective: "Expresar excesos o insuficiencias.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Problems.", slides: [{ id: "sl1", title: "Too hard", description: "Math is too hard.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Quejas." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Too/Enough.", slides: [{ id: "sl2", title: "Enough", description: "Not enough time.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Solucionar.", slides: [{ id: "sl3", title: "Solve it", description: "What do we do?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Quéjate de un problema común usando too/enough.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-4-8",
      title: "Clase 8: Consejos entre amigos con should",
      duration: "60 min",
      objective: "Dar y pedir consejos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Advice.", slides: [{ id: "sl1", title: "Advice", description: "What should I do?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Should.", slides: [{ id: "sl2", title: "Should", description: "You should study.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Agonía.", slides: [{ id: "sl3", title: "Agony Aunt", description: "Give advice to a friend.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escribir consejos." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Dale un consejo a un amigo imaginario.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-4-9",
      title: "Clase 9: Mensajes, emails y chats informales/formales",
      duration: "60 min",
      objective: "Aprender a escribir correos a profes vs mensajes a amigos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Texts vs Emails.", slides: [{ id: "sl1", title: "Writing", description: "Teacher vs Friend.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Comparar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Formality.", slides: [{ id: "sl2", title: "Formal", description: "Dear Teacher...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Redactar.", slides: [{ id: "sl3", title: "Write it", description: "Email the principal.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escritura." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Escribe un email pidiendo permiso escolar.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-basic-4-10",
      title: "Clase 10: Atención al cliente juvenil y evaluación de transición",
      duration: "60 min",
      objective: "Customer service en apps/juegos y examen.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Issues.", slides: [{ id: "sl1", title: "Bugs", description: "My game crashed.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Practice", duration: "20 min", objective: "Reportar bugs.", slides: [{ id: "sl2", title: "Support", description: "How to report it.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Simular reporte." },
        { id: "s3", title: "Review", duration: "15 min", objective: "Repaso oral.", slides: [{ id: "sl3", title: "Exam Prep", description: "Get ready.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Repaso." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Examen.", slides: [{ id: "sl4", title: "Level Up", description: "Ready for Intermediate!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Intermediate \([^")]+\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-inter-7",
      title: "Clase 7: Present Perfect con experiencias personales y Present Perfect Continuous",
      duration: "60 min",
      objective: "Hablar de experiencias de vida.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Experiences.", slides: [{ id: "sl1", title: "Have you ever?", description: "Met someone famous?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Present Perfect.", slides: [{ id: "sl2", title: "Experiences", description: "I have been to Paris.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Entrevistas.", slides: [{ id: "sl3", title: "Interviews", description: "Ask your friends.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Las 3 mejores experiencias de tu vida.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-inter-8",
      title: "Clase 8: Phrasal verbs frecuentes en conversaciones adolescentes",
      duration: "60 min",
      objective: "Aprender vocabulario informal común.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Slang.", slides: [{ id: "sl1", title: "Slang", description: "What does this mean?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Adivinar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Phrasal verbs.", slides: [{ id: "sl2", title: "Hang out", description: "Chill out, give up, figure out.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Chats.", slides: [{ id: "sl3", title: "Chat", description: "Use them in a chat.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 4 phrasal verbs nuevos en un relato.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-inter-9",
      title: "Clase 9: Modales de posibilidad y deducción",
      duration: "60 min",
      objective: "Hacer deducciones sobre situaciones misteriosas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Mystery.", slides: [{ id: "sl1", title: "Mystery", description: "Who took my phone?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Modals.", slides: [{ id: "sl2", title: "Must be", description: "It must be him. It might be true.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Resolver misterio.", slides: [{ id: "sl3", title: "Detectives", description: "Solve the case.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Resolver." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Deduzca qué pasó en una situación extraña.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-inter-10",
      title: "Clase 10: Primer y segundo condicional",
      duration: "60 min",
      objective: "Situaciones reales vs imaginarias.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "If I was rich.", slides: [{ id: "sl1", title: "Millions", description: "If you won $1M...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Fantasear." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Conditionals.", slides: [{ id: "sl2", title: "2nd Conditional", description: "If I were a bird, I would fly.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Preguntas raras.", slides: [{ id: "sl3", title: "What if?", description: "Weird questions.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Responder." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Qué harías si fueras el presidente del mundo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-inter-11",
      title: "Clase 11: Opiniones, acuerdos y desacuerdos respetuosos",
      duration: "60 min",
      objective: "Expresar posturas en debates juveniles.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Opinions.", slides: [{ id: "sl1", title: "I think...", description: "Pizza vs Burgers.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Debate rápido." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Agree/Disagree.", slides: [{ id: "sl2", title: "Polite Debate", description: "I see your point, but...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender frases." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debatir temas teen.", slides: [{ id: "sl3", title: "Debate", description: "School uniforms?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate formal." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Expresa tu opinión sobre los videojuegos.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-inter-12",
      title: "Clase 12: Proyecto podcast/debate y Simulación entrevista beca/empleo",
      duration: "60 min",
      objective: "Evaluación B1 final.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "Final Test", description: "Ready?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Relajar." },
        { id: "s2", title: "Project", duration: "20 min", objective: "Podcast.", slides: [{ id: "sl2", title: "The Podcast", description: "Record your show.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Grabar." },
        { id: "s3", title: "Interview", duration: "15 min", objective: "Entrevista Beca.", slides: [{ id: "sl3", title: "Scholarship", description: "Interview simulation.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Advanced", description: "You are going to Advanced!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Advanced \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-adv-5",
      title: "Clase 5: Reported speech en chismes, noticias y conversaciones",
      duration: "60 min",
      objective: "Dominar el reported speech de manera natural.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Gossip.", slides: [{ id: "sl1", title: "Rumors", description: "Did you hear?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego del teléfono." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Reported Speech.", slides: [{ id: "sl2", title: "He said...", description: "Reporting back.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Noticias.", slides: [{ id: "sl3", title: "The News", description: "Report the breaking news.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Simular noticiero." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Reporta una noticia que viste hoy.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-adv-6",
      title: "Clase 6: Relative clauses y descripción detallada de personas/cosas",
      duration: "60 min",
      objective: "Enriquecer descripciones.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Details.", slides: [{ id: "sl1", title: "Details", description: "Who is that?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Observar imágenes." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Relative clauses.", slides: [{ id: "sl2", title: "Clauses", description: "The girl who is sitting there.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Definir.", slides: [{ id: "sl3", title: "Taboo", description: "Define without the word.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Describe a detalle tu habitación.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-adv-7",
      title: "Clase 7: Voz pasiva aplicada a noticias y tecnología",
      duration: "60 min",
      objective: "Hablar de hechos sin enfocar en el sujeto.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Tech.", slides: [{ id: "sl1", title: "Inventions", description: "Who made it?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Passive Voice.", slides: [{ id: "sl2", title: "Passive", description: "It was invented in 2007.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Transformaciones." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Crear noticias.", slides: [{ id: "sl3", title: "Headlines", description: "The bank was robbed.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escribir titulares." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Narra un invento importante en voz pasiva.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-adv-8",
      title: "Clase 8: Phrasal verbs e idioms de uso real",
      duration: "60 min",
      objective: "Sonar más avanzado en inglés juvenil.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Idioms.", slides: [{ id: "sl1", title: "Idioms", description: "Under the weather.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Adivinar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Phrasals.", slides: [{ id: "sl2", title: "Advanced Slang", description: "Put up with, look forward to.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Uso en contexto.", slides: [{ id: "sl3", title: "Story", description: "Use them.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 5 idioms en 1 minuto.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-adv-9",
      title: "Clase 9: Debates: IA, redes sociales, medioambiente y educación",
      duration: "60 min",
      objective: "Argumentar sobre temas globales.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Global issues.", slides: [{ id: "sl1", title: "Issues", description: "What worries you?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Debate structures.", slides: [{ id: "sl2", title: "Arguing", description: "On the other hand...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Frases argumentales." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debatir.", slides: [{ id: "sl3", title: "Debate AI", description: "Is AI good or bad?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Da un mini discurso sobre el clima.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-adv-10",
      title: "Clase 10: Entrevistas (trabajo/voluntariado) y resolución de problemas",
      duration: "60 min",
      objective: "Cierre nivel Avanzado.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Future.", slides: [{ id: "sl1", title: "Future", description: "University or Work?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Interview prep.", slides: [{ id: "sl2", title: "Interviews", description: "How to answer.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Tips." },
        { id: "s3", title: "Roleplay", duration: "15 min", objective: "Simular entrevista.", slides: [{ id: "sl3", title: "The Interview", description: "Let's begin.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Entrevistas orales." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Advanced Elite", description: "Prepárate para Elite.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Advanced Elite \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-elite-6",
      title: "Clase 6: Future Continuous, Future Perfect y planificación de metas",
      duration: "60 min",
      objective: "Expresar metas universitarias/profesionales.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Goals.", slides: [{ id: "sl1", title: "Goals", description: "Your 5 year plan.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Advanced Futures.", slides: [{ id: "sl2", title: "Future Perfect", description: "By 2030 I will have graduated.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Planes.", slides: [{ id: "sl3", title: "Vision Board", description: "Share your vision.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Discutir visiones." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu vida en 10 años.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-elite-7",
      title: "Clase 7: Condicionales mixtos y decisiones pasadas",
      duration: "60 min",
      objective: "Reflexionar sobre consecuencias actuales de actos pasados.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Regrets.", slides: [{ id: "sl1", title: "Choices", description: "Good vs Bad.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Mixed conditionals.", slides: [{ id: "sl2", title: "Mixed", description: "If I had studied, I would be happy now.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debate.", slides: [{ id: "sl3", title: "What if?", description: "Alternative realities.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego de imaginación." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Una decisión pasada que cambió tu presente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-elite-8",
      title: "Clase 8: Lenguaje diplomático, cleft sentences e inversiones",
      duration: "60 min",
      objective: "Nivelar sintaxis académica.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Politeness.", slides: [{ id: "sl1", title: "Be polite", description: "Don't be rude.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Advanced Syntax.", slides: [{ id: "sl2", title: "Syntax", description: "What I mean is...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Reescribir.", slides: [{ id: "sl3", title: "Rewrite", description: "Make it formal.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Ejercicios orales." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 3 oraciones C1.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-elite-9",
      title: "Clase 9: Ensayos, opiniones y presentaciones académicas",
      duration: "60 min",
      objective: "Habilidades para High School / IB.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Writing.", slides: [{ id: "sl1", title: "Essays", description: "Do you hate essays?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Academic formats.", slides: [{ id: "sl2", title: "Structure", description: "Intro, Body, Conclusion.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Esquemas.", slides: [{ id: "sl3", title: "Outlines", description: "Plan an essay.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Redacción." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Escribe la introducción de un ensayo sobre IA.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-elite-10",
      title: "Clase 10: Reuniones, liderazgo y trabajo en equipo",
      duration: "60 min",
      objective: "Liderar proyectos escolares.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Teamwork.", slides: [{ id: "sl1", title: "Teams", description: "Do you like group projects?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Leadership.", slides: [{ id: "sl2", title: "Leading", description: "Delegating tasks.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Simular proyecto.", slides: [{ id: "sl3", title: "Lead it", description: "Organize the team.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Lidera una reunión imaginaria.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-elite-11",
      title: "Clase 11: Proyecto final: pitch de emprendimiento o conferencia",
      duration: "60 min",
      objective: "Evaluación Elite final.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "The End", description: "Almost done.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Relajar." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Pitch.", slides: [{ id: "sl2", title: "The Pitch", description: "Sell your idea.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Preparar ideas." },
        { id: "s3", title: "Perform", duration: "15 min", objective: "Exposición.", slides: [{ id: "sl3", title: "Show time", description: "Pitch to the class.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Presentar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Next", description: "Ready for Masters of Fluency!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Masters of Fluency \\(Teens\\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-teens-masters-5",
      title: "Clase 5: Debate competitivo y pensamiento crítico",
      duration: "60 min",
      objective: "Fortalecer argumentación espontánea.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Logic.", slides: [{ id: "sl1", title: "Critical Thinking", description: "Why?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Acertijos." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Debate formats.", slides: [{ id: "sl2", title: "Format", description: "Rebuttal and proofs.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debates de 2 min.", slides: [{ id: "sl3", title: "Debate", description: "Argue against it.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Práctica intensa." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Refuta un argumento popular.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-masters-6",
      title: "Clase 6: Análisis de películas, música, noticias y cultura digital",
      duration: "60 min",
      objective: "Fluidez en análisis de medios.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Media.", slides: [{ id: "sl1", title: "Media", description: "TikTok vs YouTube.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Analysis.", slides: [{ id: "sl2", title: "Deep Dive", description: "Plot, meaning, lyrics.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Analizar canción.", slides: [{ id: "sl3", title: "Lyrics", description: "What does it mean?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Analiza el mensaje de tu canción favorita.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-masters-7",
      title: "Clase 7: Inglés académico para universidad e intercambios",
      duration: "60 min",
      objective: "Preparación para el extranjero.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Study abroad.", slides: [{ id: "sl1", title: "Abroad", description: "Where to study?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "College life.", slides: [{ id: "sl2", title: "Campus", description: "Dorms, GPA, credits.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Entrevista de admisión.", slides: [{ id: "sl3", title: "Admission", description: "Why our university?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Responde por qué eres buen candidato para una beca.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-masters-8",
      title: "Clase 8: Creación de podcast, videoensayo o presentación TED",
      duration: "60 min",
      objective: "Producción de contenido extenso.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "TED.", slides: [{ id: "sl1", title: "TED Talks", description: "Inspire.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Monologues.", slides: [{ id: "sl2", title: "Script", description: "Hook, body, close.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Estructuras." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Brainstorm ideas.", slides: [{ id: "sl3", title: "Brainstorm", description: "What is your idea?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Planear." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Graba el primer minuto de tu TED Talk.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-masters-9",
      title: "Clase 9: Temas globales: tecnología, ética, clima y sociedad",
      duration: "60 min",
      objective: "Debates de alta complejidad.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "World issues.", slides: [{ id: "sl1", title: "Issues", description: "Ethics.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Advanced global terms.", slides: [{ id: "sl2", title: "Advanced Vocab", description: "Sustainability, bias.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debate ético.", slides: [{ id: "sl3", title: "Ethics", description: "Right or wrong?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debatir." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu opinión sobre el cambio climático.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-teens-masters-10",
      title: "Clase 10: Preparación de entrevistas C1 y Conversation Club",
      duration: "60 min",
      objective: "Cierre del programa Adolescentes.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "The End", description: "Last class!", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Relajar." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Club.", slides: [{ id: "sl2", title: "Club", description: "Choose a topic.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Elegir temas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Club en vivo.", slides: [{ id: "sl3", title: "Let's talk", description: "Free fluid talk.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Conversación." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Graduation", description: "You are fluent!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida final." }
      ]
    }`
  }
];

let modifiedContent = content;
let allSuccessful = true;

for (let level of levelsData) {
  const match = modifiedContent.match(level.levelRegex);
  if (match) {
    const insertPos = match.index + match[0].length - match[1].length;
    modifiedContent = modifiedContent.slice(0, insertPos) + level.newClasses + modifiedContent.slice(insertPos);
    console.log("Replaced successfully for regex:", level.levelRegex);
  } else {
    console.error("Failed to find regex:", level.levelRegex);
    allSuccessful = false;
  }
}

if (allSuccessful) {
  fs.writeFileSync('src/data/curriculumTeens.ts', modifiedContent);
  console.log("Successfully appended all teen classes!");
}
