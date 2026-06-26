import fs from 'fs';

const content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const levelsData = [
  {
    levelRegex: /title:\s*"Basic 1"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-basic-1-5",
      title: "Clase 5: Sustantivos contables/no contables: some, any, a lot of",
      duration: "60 minutos",
      objective: "Usar cuantificadores con comida y objetos cotidianos.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Brainstorming food.",
          slides: [{ id: "Slide 1", title: "Food", description: "What's in your fridge?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Listar comida."
        },
        {
          id: "s2", title: "2. Grammar", duration: "20 minutos", objective: "Some, Any, A lot of.",
          slides: [{ id: "Slide 2", title: "Quantifiers", description: "I have some apples. I don't have any milk.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Explicar reglas."
        },
        {
          id: "s3", title: "3. Practice", duration: "15 minutos", objective: "Ejercicios.",
          slides: [{ id: "Slide 3", title: "Fill in the blanks", description: "Do you have ___ water?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Completar."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Tarea.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Graba un video mostrando qué hay en tu nevera usando some/any.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Asignar tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-1-6",
      title: "Clase 6: Gustos y preferencias: like, would like, favorite",
      duration: "60 minutos",
      objective: "Expresar qué te gusta y qué desearías.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Hobbies and food.",
          slides: [{ id: "Slide 1", title: "Favorites", description: "What is your favorite color?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Charlar sobre favoritos."
        },
        {
          id: "s2", title: "2. Grammar", duration: "20 minutos", objective: "Like vs Would like.",
          slides: [{ id: "Slide 2", title: "Preferences", description: "I like coffee vs I would like a coffee.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Explicar diferencia."
        },
        {
          id: "s3", title: "3. Practice", duration: "15 minutos", objective: "Roleplay restaurante.",
          slides: [{ id: "Slide 3", title: "At the restaurant", description: "Order your meal.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Roleplay."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Tarea.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Video: Pide comida en un restaurante imaginario.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Despedida."
        }
      ]
    },
    {
      id: "c-adults-basic-1-7",
      title: "Clase 7: Imperativos e instrucciones: open, close, turn left, please",
      duration: "60 minutos",
      objective: "Dar y entender instrucciones.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Simon Says.",
          slides: [{ id: "Slide 1", title: "Simon Says", description: "Stand up, sit down.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Jugar Simon Says."
        },
        {
          id: "s2", title: "2. Grammar", duration: "20 minutos", objective: "Imperativos.",
          slides: [{ id: "Slide 2", title: "Commands", description: "Open the door. Don't touch that.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Reglas gramaticales."
        },
        {
          id: "s3", title: "3. Practice", duration: "15 minutos", objective: "Dar direcciones.",
          slides: [{ id: "Slide 3", title: "Directions", description: "Turn left, go straight.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Mapas."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Tarea.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Video: Da instrucciones para llegar a tu cuarto.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Despedida."
        }
      ]
    },
    {
      id: "c-adults-basic-1-8",
      title: "Clase 8: Pedir y ofrecer ayuda: Can I...?, Can you...?, Could you...?",
      duration: "60 minutos",
      objective: "Manejar solicitudes con cortesía.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Situaciones de necesidad.",
          slides: [{ id: "Slide 1", title: "Help!", description: "When do you need help?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Lluvia de ideas."
        },
        {
          id: "s2", title: "2. Grammar", duration: "20 minutos", objective: "Can vs Could.",
          slides: [{ id: "Slide 2", title: "Polite Requests", description: "Can you help me? Could you open the window?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Explicar uso."
        },
        {
          id: "s3", title: "3. Practice", duration: "15 minutos", objective: "Roleplay situaciones.",
          slides: [{ id: "Slide 3", title: "Roleplay", description: "You are at a hotel.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Roleplay."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Tarea.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Video: Haz 3 peticiones amables a alguien.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Despedida."
        }
      ]
    },
    {
      id: "c-adults-basic-1-9",
      title: "Clase 9: Llamadas básicas: saludar, pedir repetir, tomar un mensaje",
      duration: "60 minutos",
      objective: "Manejar llamadas telefónicas sencillas.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Phone anxiety.",
          slides: [{ id: "Slide 1", title: "On the phone", description: "Do you like calling?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Charla."
        },
        {
          id: "s2", title: "2. Vocabulary", duration: "20 minutos", objective: "Frases clave telefónicas.",
          slides: [{ id: "Slide 2", title: "Phone phrases", description: "Speaking. Can you repeat that? Can I take a message?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Repasar frases."
        },
        {
          id: "s3", title: "3. Practice", duration: "15 minutos", objective: "Roleplay de llamadas.",
          slides: [{ id: "Slide 3", title: "Ring Ring!", description: "Call your partner.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Roleplay sin verse."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Tarea.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Video: Simula dejar un mensaje de voz.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Despedida."
        }
      ]
    },
    {
      id: "c-adults-basic-1-10",
      title: "Clase 10: Proyecto: planear una salida, viaje o evento futuro",
      duration: "60 minutos",
      objective: "Aplicar todo lo aprendido colaborativamente.",
      sections: [
        {
          id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Travel ideas.",
          slides: [{ id: "Slide 1", title: "Let's go!", description: "Where to?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }],
          action: "Lluvia de ideas."
        },
        {
          id: "s2", title: "2. Project Prep", duration: "20 minutos", objective: "Planificar evento.",
          slides: [{ id: "Slide 2", title: "Planning", description: "Use requests, quantifiers, directions.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }],
          action: "Trabajo en grupos."
        },
        {
          id: "s3", title: "3. Presentations", duration: "15 minutos", objective: "Presentar plan.",
          slides: [{ id: "Slide 3", title: "Show your plan", description: "Present to the class.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }],
          action: "Presentaciones."
        },
        {
          id: "s4", title: "4. Wrap-up", duration: "15 minutos", objective: "Evaluación nivel.",
          slides: [{ id: "Slide 4", title: "Homework", description: "Examen oral la próxima sesión.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }],
          action: "Despedida nivel."
        }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 2"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-basic-2-5",
      title: "Clase 5: Can / can’t para habilidades y permisos",
      duration: "60 minutos",
      objective: "Hablar de lo que pueden o no pueden hacer.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Talentos.", slides: [{ id: "sl1", title: "Talents", description: "What are your talents?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Can/Can't.", slides: [{ id: "sl2", title: "Abilities & Permissions", description: "I can swim. You can't park here.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay.", slides: [{ id: "sl3", title: "Job Interview", description: "What can you do?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Di 3 cosas que puedes hacer y 2 que no.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-6",
      title: "Clase 6: Have to / don’t have to para obligaciones",
      duration: "60 minutos",
      objective: "Expresar responsabilidades y falta de necesidad.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Chores.", slides: [{ id: "sl1", title: "Chores", description: "Household chores.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Vocabulario." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Have to.", slides: [{ id: "sl2", title: "Obligations", description: "I have to work. I don't have to study.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Contrast.", slides: [{ id: "sl3", title: "Rules", description: "Rules at work vs weekend.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tus obligaciones diarias.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-7",
      title: "Clase 7: Describir ropa y apariencia física",
      duration: "60 minutos",
      objective: "Describir el aspecto de personas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Clothes.", slides: [{ id: "sl1", title: "Clothes", description: "What are you wearing?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Vocabulario." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Adjetivos.", slides: [{ id: "sl2", title: "Appearance", description: "He is tall. She has long hair.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Guess who.", slides: [{ id: "sl3", title: "Guess Who", description: "Describe a classmate.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Describe a tu mejor amigo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-8",
      title: "Clase 8: Lugares, transporte y cómo llegar",
      duration: "60 minutos",
      objective: "Direcciones y medios de transporte.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Transport.", slides: [{ id: "sl1", title: "Transport", description: "How do you commute?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Vocabulario." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "By bus, on foot.", slides: [{ id: "sl2", title: "Commuting", description: "I go to work by bus.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Ask directions.", slides: [{ id: "sl3", title: "How to get there", description: "Give directions.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cómo llegas a tu trabajo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-9",
      title: "Clase 9: Clima y actividades según el clima",
      duration: "60 minutos",
      objective: "Hablar de condiciones meteorológicas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Weather.", slides: [{ id: "sl1", title: "Weather", description: "What's the weather like?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Vocabulario." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Seasons and activities.", slides: [{ id: "sl2", title: "Seasons", description: "In winter, I ski.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Plans.", slides: [{ id: "sl3", title: "Weather Plans", description: "If it's sunny...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu clima favorito y qué haces.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-10",
      title: "Clase 10: Conversación de servicio básico: pedidos, horarios, disponibilidad",
      duration: "60 minutos",
      objective: "Customer service elemental.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Business hours.", slides: [{ id: "sl1", title: "Schedules", description: "Open from 9 to 5.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Lectura." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Questions for services.", slides: [{ id: "sl2", title: "Service", description: "Can I order...? Are you open?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay CS.", slides: [{ id: "sl3", title: "Customer Service", description: "Agent and client.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Simula ser un recepcionista.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-2-11",
      title: "Clase 11: Repaso y evaluación oral de presente, futuro y preguntas",
      duration: "60 minutos",
      objective: "Cerrar nivel 2.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Repaso.", slides: [{ id: "sl1", title: "Review", description: "Let's review.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Preguntas y errores.", slides: [{ id: "sl2", title: "Q&A", description: "Fix the mistakes.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Conversación.", slides: [{ id: "sl3", title: "Speaking", description: "Free talk.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Evaluación.", slides: [{ id: "sl4", title: "Exam", description: "Ready for the exam.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 3"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-basic-3-5",
      title: "Clase 5: Pasado de to be: was/were",
      duration: "60 minutos",
      objective: "Describir situaciones en el pasado con el verbo to be.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Yesterday.", slides: [{ id: "sl1", title: "Yesterday", description: "Where were you yesterday?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Preguntas." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Was/Were.", slides: [{ id: "sl2", title: "Past To Be", description: "I was tired. They were happy.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Ejercicios.", slides: [{ id: "sl3", title: "Fill in", description: "Was or Were?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Completar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Dónde estabas el fin de semana pasado.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-6",
      title: "Clase 6: Biografías y eventos históricos sencillos",
      duration: "60 minutos",
      objective: "Relatar eventos pasados.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Famous people.", slides: [{ id: "sl1", title: "Who was...?", description: "Famous historical figures.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Trivia." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Past Simple Regular.", slides: [{ id: "sl2", title: "Biographies", description: "He lived in London. He worked hard.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Lectura." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Escribir biografías.", slides: [{ id: "sl3", title: "Your Hero", description: "Describe a famous person.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Redacción corta." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Breve biografía de alguien famoso.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-7",
      title: "Clase 7: Viajes y vacaciones en pasado",
      duration: "60 minutos",
      objective: "Hablar de viajes pasados usando verbos irregulares.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Holidays.", slides: [{ id: "sl1", title: "Vacation", description: "Best trip ever?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Vocabulario." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Past Simple Irregular.", slides: [{ id: "sl2", title: "Irregular Verbs", description: "Go -> Went, Have -> Had.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay viajes.", slides: [{ id: "sl3", title: "Trip Talk", description: "Ask about their trip.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Entrevistas." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu último viaje.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-8",
      title: "Clase 8: Conectores para contar historias: first, then, after that, finally",
      duration: "60 minutos",
      objective: "Secuenciar narraciones pasadas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Order.", slides: [{ id: "sl1", title: "Sequence", description: "Order the pictures.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Connectors.", slides: [{ id: "sl2", title: "Connectors", description: "First, then, after that, finally.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Storytelling.", slides: [{ id: "sl3", title: "Story Time", description: "Tell a short story.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Narrar historias." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cuenta una anécdota graciosa usando conectores.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-9",
      title: "Clase 9: Expresar opiniones sobre películas, comida y experiencias",
      duration: "60 minutos",
      objective: "Dar críticas y opiniones sencillas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Movies.", slides: [{ id: "sl1", title: "Movies", description: "What's a good movie?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Adjectives.", slides: [{ id: "sl2", title: "Opinions", description: "Boring, exciting, delicious, terrible.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Reviews.", slides: [{ id: "sl3", title: "Review it", description: "Review a restaurant or movie.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Conversación." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Reseña tu película favorita.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-10",
      title: "Clase 10: Llamadas sobre problemas pasados: 'My order arrived late.'",
      duration: "60 minutos",
      objective: "Customer service en pasado.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Complaints.", slides: [{ id: "sl1", title: "Problems", description: "Have you complained recently?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Past complaints.", slides: [{ id: "sl2", title: "Complaints", description: "It arrived late. It was broken.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Phrases." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay quejas.", slides: [{ id: "sl3", title: "Call Center", description: "Complain about a product.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay telefónico." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Simula una queja telefónica.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-3-11",
      title: "Clase 11: Repaso narrativo y prueba oral de pasado",
      duration: "60 minutos",
      objective: "Cerrar nivel 3 con evaluación narrativa.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Repaso general.", slides: [{ id: "sl1", title: "Review Past", description: "Past forms.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Story structure.", slides: [{ id: "sl2", title: "The Story", description: "Beginning, middle, end.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Estructura." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Speaking.", slides: [{ id: "sl3", title: "Tell me", description: "Oral practice.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Examen.", slides: [{ id: "sl4", title: "Ready", description: "Ready for oral exam.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Basic 4[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-basic-4-5",
      title: "Clase 5: Primer condicional: If it rains, I will...",
      duration: "60 minutos",
      objective: "Hablar de posibilidades futuras.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "What if?", slides: [{ id: "sl1", title: "What if?", description: "If you win the lottery...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "1st Conditional.", slides: [{ id: "sl2", title: "1st Conditional", description: "If + present, will + verb.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Completar cadenas.", slides: [{ id: "sl3", title: "Chains", description: "If I study, I will pass...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego de cadena." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: 3 oraciones con if.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-6",
      title: "Clase 6: Modales de habilidad, permiso y posibilidad: can, could, may, might",
      duration: "60 minutos",
      objective: "Usar modales adecuadamente.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Possibilities.", slides: [{ id: "sl1", title: "Maybe", description: "What might happen today?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Modals.", slides: [{ id: "sl2", title: "Modals", description: "Can, Could, May, Might.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Diferencias." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay oficina.", slides: [{ id: "sl3", title: "Office Talk", description: "May I use your pen?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay formal." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Explica qué podría pasar este fin de semana (might).", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-7",
      title: "Clase 7: Comparativos y superlativos aplicados a productos y servicios",
      duration: "60 minutos",
      objective: "Comparar opciones.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Brands.", slides: [{ id: "sl1", title: "Brands", description: "Apple vs Samsung.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Comparisons.", slides: [{ id: "sl2", title: "Comparatives", description: "Better, faster, the best.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debates de productos.", slides: [{ id: "sl3", title: "Which is better?", description: "Debate products.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debates cortos." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Compara 2 productos que usas.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-8",
      title: "Clase 8: Too, enough, very, so, such",
      duration: "60 minutos",
      objective: "Enfatizar descripciones.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Extremes.", slides: [{ id: "sl1", title: "Extremes", description: "It's very hot!", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Intensifiers.", slides: [{ id: "sl2", title: "Too vs Enough", description: "Too big vs Big enough.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Problemas de compras.", slides: [{ id: "sl3", title: "Shopping Problems", description: "It's too expensive.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Situaciones." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla de un problema usando too y enough.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-9",
      title: "Clase 9: Quejas y soluciones básicas para customer service",
      duration: "60 minutos",
      objective: "Manejar problemas con clientes.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Bad service.", slides: [{ id: "sl1", title: "Bad Service", description: "Have you ever received bad service?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Apologies.", slides: [{ id: "sl2", title: "Solutions", description: "I'm sorry. I will fix it.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Frases útiles." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay CS.", slides: [{ id: "sl3", title: "Fix it", description: "Agent and angry customer.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Ofrece una solución a un problema imaginario.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-10",
      title: "Clase 10: Emails y mensajes cortos formales",
      duration: "60 minutos",
      objective: "Escribir correspondencia profesional básica.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Emails.", slides: [{ id: "sl1", title: "Emails", description: "How many emails do you send?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Formal structure.", slides: [{ id: "sl2", title: "Structure", description: "Dear..., Best regards.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Partes de email." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Escribir email.", slides: [{ id: "sl3", title: "Write it", description: "Write an email complaining.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escritura." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Escribe un email corto a tu jefe.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-basic-4-11",
      title: "Clase 11: Simulación de atención al cliente y Examen de transición",
      duration: "60 minutos",
      objective: "Evaluar habilidades integradas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Repaso.", slides: [{ id: "sl1", title: "Review", description: "Final review.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Project Prep", duration: "20 min", objective: "Preparar simulación.", slides: [{ id: "sl2", title: "Simulation", description: "Prepare your CS scenario.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Preparación." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Actuar.", slides: [{ id: "sl3", title: "Action", description: "Execute your roleplay.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Presentaciones." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Examen.", slides: [{ id: "sl4", title: "Level Up", description: "Ready for Intermediate!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Intermediate \([^")]+\)"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-inter-7",
      title: "Clase 7: Present Perfect con already, yet, just, ever, never",
      duration: "60 min",
      objective: "Usar Present Perfect con marcadores de tiempo.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Life experiences.", slides: [{ id: "sl1", title: "Experiences", description: "Have you ever...?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Already vs Yet.", slides: [{ id: "sl2", title: "Time markers", description: "I have just eaten. I haven't finished yet.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Ejercicios.", slides: [{ id: "sl3", title: "Fill the gaps", description: "Already or Yet?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Completar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Di 3 cosas que ya hiciste hoy y 2 que aún no.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-8",
      title: "Clase 8: Present Perfect Continuous",
      duration: "60 min",
      objective: "Describir acciones recientes en curso.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Recent activities.", slides: [{ id: "sl1", title: "Lately", description: "What have you been doing?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Structure.", slides: [{ id: "sl2", title: "PPC", description: "I have been studying for 2 hours.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Comparar.", slides: [{ id: "sl3", title: "PP vs PPC", description: "I have read vs I have been reading.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Ejercicios." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Qué has estado haciendo últimamente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-9",
      title: "Clase 9: Primer condicional y futuro probable",
      duration: "60 min",
      objective: "Predecir consecuencias realistas.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Future plans.", slides: [{ id: "sl1", title: "Plans", description: "If I have time tomorrow...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "1st Conditional review.", slides: [{ id: "sl2", title: "Conditionals", description: "If + present, will.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Situaciones de negocio.", slides: [{ id: "sl3", title: "Business Risks", description: "If we don't fix this...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Casos." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Previsiones sobre tu trabajo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-10",
      title: "Clase 10: Modales de posibilidad: may, might, could, must",
      duration: "60 min",
      objective: "Deducir situaciones y expresar probabilidad.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Mysteries.", slides: [{ id: "sl1", title: "Mystery", description: "What's in the box?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Adivinar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Deductions.", slides: [{ id: "sl2", title: "Must vs Might", description: "It must be true. It might rain.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Resolver casos.", slides: [{ id: "sl3", title: "Detective", description: "Solve the case using modals.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Juego." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Da tu teoría sobre un misterio usando modales.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-11",
      title: "Clase 11: Gerundios e infinitivos: want to, need to, enjoy doing",
      duration: "60 min",
      objective: "Usar correctamente gerundios e infinitivos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Hobbies.", slides: [{ id: "sl1", title: "Likes", description: "I like swimming.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Verbs patterns.", slides: [{ id: "sl2", title: "Patterns", description: "Enjoy + ing. Want + to.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Ejercicios rápidos.", slides: [{ id: "sl3", title: "Quick fire", description: "To do or doing?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Quiz." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Habla de cosas que disfrutas y necesitas hacer.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-12",
      title: "Clase 12: Phrasal verbs frecuentes de conversación",
      duration: "60 min",
      objective: "Integrar verbos compuestos comunes.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Actions.", slides: [{ id: "sl1", title: "Actions", description: "Stand up, sit down.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Activar verbos." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Top 10 phrasal verbs.", slides: [{ id: "sl2", title: "Phrasal Verbs", description: "Give up, go on, set up...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Enseñar significados." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Historias cortas.", slides: [{ id: "sl3", title: "Tell a story", description: "Use 3 phrasal verbs.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 5 phrasal verbs en una anécdota.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-13",
      title: "Clase 13: Llamadas de soporte: verificar datos, solucionar y cerrar casos",
      duration: "60 min",
      objective: "Atención al cliente telefónica intermedia.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Data.", slides: [{ id: "sl1", title: "Verifying", description: "Can you confirm your email?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Deletrear y confirmar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Call flow.", slides: [{ id: "sl2", title: "Call Flow", description: "Greeting, Verification, Solution, Closing.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Estructura." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay completo.", slides: [{ id: "sl3", title: "Support Call", description: "Agent and User.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Graba el cierre de una llamada de soporte.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-14",
      title: "Clase 14: Pronunciación: entonación, connected speech y reducción",
      duration: "60 min",
      objective: "Mejorar la fluidez y naturalidad.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Tongue twisters.", slides: [{ id: "sl1", title: "Tongue Twisters", description: "Warm up your mouth.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Practicar." },
        { id: "s2", title: "Pronunciation", duration: "20 min", objective: "Connected speech.", slides: [{ id: "sl2", title: "Linking", description: "Want to -> Wanna, Going to -> Gonna.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Leer textos naturales.", slides: [{ id: "sl3", title: "Read naturally", description: "Focus on flow.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Lectura." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Lee el párrafo de la clase fluidamente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-inter-15",
      title: "Clase 15: Proyecto: resolver un caso completo de customer service",
      duration: "60 min",
      objective: "Demostrar fluidez en atención al cliente.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "Review", description: "Ready to work?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Preparar escenarios.", slides: [{ id: "sl2", title: "Scenarios", description: "Angry client, lost package, refund.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Planear." },
        { id: "s3", title: "Roleplay", duration: "15 min", objective: "Simulaciones.", slides: [{ id: "sl3", title: "Live Calls", description: "Action!", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Evaluación.", slides: [{ id: "sl4", title: "Evaluation", description: "Prepárate para la evaluación B1.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Advanced"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-adv-5",
      title: "Clase 5: Todos los condicionales: cero, primero, segundo, tercero y mixtos",
      duration: "60 min",
      objective: "Dominar todas las formas condicionales.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Regrets and facts.", slides: [{ id: "sl1", title: "If...", description: "What if?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Conditionals.", slides: [{ id: "sl2", title: "All Conditionals", description: "Review 0, 1, 2, 3 and Mixed.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Esquema." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Situaciones complejas.", slides: [{ id: "sl3", title: "Complex Situations", description: "If I hadn't done that...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa el 3er condicional sobre un arrepentimiento.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-6",
      title: "Clase 6: Reported speech para preguntas, órdenes y solicitudes",
      duration: "60 min",
      objective: "Reportar exactamente lo dicho por otros.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Gossip.", slides: [{ id: "sl1", title: "Gossip", description: "He said that...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Juego." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Reported questions/orders.", slides: [{ id: "sl2", title: "Reported Speech", description: "He asked me to go. She told me to stop.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Reportar junta de negocios.", slides: [{ id: "sl3", title: "The Meeting", description: "Report the boss' orders.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Reporta 3 cosas que te dijeron hoy.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-7",
      title: "Clase 7: Relative clauses: who, which, that, where",
      duration: "60 min",
      objective: "Añadir detalles complejos a las descripciones.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Definitions.", slides: [{ id: "sl1", title: "Definitions", description: "Define objects.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Definir cosas." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Relative pronouns.", slides: [{ id: "sl2", title: "Relative Clauses", description: "The man who called you.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Unir oraciones.", slides: [{ id: "sl3", title: "Combine", description: "Combine two sentences into one.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Ejercicios orales." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Describe 3 objetos complejos en tu casa.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-8",
      title: "Clase 8: Phrasal verbs profesionales y expresiones idiomáticas",
      duration: "60 min",
      objective: "Sonar más nativo en entornos de negocios.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Idioms.", slides: [{ id: "sl1", title: "Idioms", description: "Piece of cake.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Discutir idioms." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Business phrasal verbs.", slides: [{ id: "sl2", title: "Business Phrasals", description: "Draw up, set out, touch base.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender frases." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Conversación en la oficina.", slides: [{ id: "sl3", title: "Office Chat", description: "Use idioms in a dialogue.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 3 idioms corporativos en contexto.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-9",
      title: "Clase 9: Negociación, persuasión y manejo de clientes difíciles",
      duration: "60 min",
      objective: "Técnicas de soft skills en inglés.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Conflict.", slides: [{ id: "sl1", title: "Conflicts", description: "How do you handle them?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Persuasive language.", slides: [{ id: "sl2", title: "Persuasion", description: "I understand, but...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Frases útiles." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Casos de negociación.", slides: [{ id: "sl3", title: "Negotiate", description: "Convince the angry client.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Graba una técnica de desescalada verbal.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-10",
      title: "Clase 10: Correos corporativos: disculpas, seguimiento, escalamiento",
      duration: "60 min",
      objective: "Escritura avanzada de negocios.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Emails.", slides: [{ id: "sl1", title: "Business Emails", description: "Tone is key.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Tone and formality.", slides: [{ id: "sl2", title: "Writing", description: "Apologies, follow-ups.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Escribir email complejo.", slides: [{ id: "sl3", title: "Draft it", description: "Write an escalation email.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escritura guiada." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Escribe un email de disculpa corporativa.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-11",
      title: "Clase 11: Pronunciación para llamadas: ritmo, énfasis, claridad y neutralización",
      duration: "60 min",
      objective: "Reducir el acento fuerte en el teléfono.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Accents.", slides: [{ id: "sl1", title: "Accents", description: "Clarity over perfection.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Pronunciation", duration: "20 min", objective: "Word stress.", slides: [{ id: "sl2", title: "Stress", description: "Emphasis on key words.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Práctica fonética." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Simular llamadas claras.", slides: [{ id: "sl3", title: "Clear Calls", description: "Read scripts with emphasis.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Lectura actoral." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Audio: Graba un script de call center.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-adv-12",
      title: "Clase 12: Simulaciones completas de entrevistas y customer service",
      duration: "60 min",
      objective: "Evaluar competencias nivel Avanzado.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Review.", slides: [{ id: "sl1", title: "Review", description: "Final test.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Relax." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Planificar escenarios.", slides: [{ id: "sl2", title: "Scenarios", description: "Interview & Difficult Client.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Preparación." },
        { id: "s3", title: "Roleplay", duration: "15 min", objective: "Evaluación.", slides: [{ id: "sl3", title: "Action", description: "Live performance.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Level Up", description: "Ready for Elite!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Advanced Elite"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-elite-6",
      title: "Clase 6: Future Continuous y Future Perfect Continuous",
      duration: "60 min",
      objective: "Proyecciones a largo plazo y duración en el futuro.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Future goals.", slides: [{ id: "sl1", title: "In 10 years", description: "Where will you be?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Complex futures.", slides: [{ id: "sl2", title: "Future Perfect", description: "I will have been working...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Hablar de metas corporativas.", slides: [{ id: "sl3", title: "Company Goals", description: "By next year...", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Previsiones." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu proyección laboral a 5 años.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-7",
      title: "Clase 7: Inversiones para énfasis: Never have I..., Rarely do we...",
      duration: "60 min",
      objective: "Estructuras enfáticas avanzadas C1.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Emphasis.", slides: [{ id: "sl1", title: "Drama", description: "Sound dramatic.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Inversions.", slides: [{ id: "sl2", title: "Inversions", description: "Rarely do I see...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Transformar oraciones.", slides: [{ id: "sl3", title: "Rewrite", description: "Rewrite for emphasis.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Ejercicios." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cuenta una historia con 2 inversiones.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-8",
      title: "Clase 8: Cleft sentences: What I mean is..., It was... who...",
      duration: "60 min",
      objective: "Focalizar información en discursos.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Focus.", slides: [{ id: "sl1", title: "Focus", description: "Point it out.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Grammar", duration: "20 min", objective: "Cleft sentences.", slides: [{ id: "sl2", title: "Clefting", description: "What I need is time.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Reglas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Aclaraciones en juntas.", slides: [{ id: "sl3", title: "Clarify", description: "Clarify misunderstandings.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa 3 cleft sentences.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-9",
      title: "Clase 9: Hedging y lenguaje diplomático: It seems that, I would suggest...",
      duration: "60 min",
      objective: "Suavizar el lenguaje corporativo.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Direct vs Polite.", slides: [{ id: "sl1", title: "Politeness", description: "Don't be rude.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Comparar." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Hedging.", slides: [{ id: "sl2", title: "Hedging", description: "It appears that...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Aprender." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Dar malas noticias.", slides: [{ id: "sl3", title: "Bad News", description: "Deliver bad news softly.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Rechaza una propuesta diplomáticamente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-10",
      title: "Clase 10: Discurso persuasivo, presentaciones y reuniones",
      duration: "60 min",
      objective: "Manejar reuniones complejas en inglés.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Public speaking.", slides: [{ id: "sl1", title: "Presentations", description: "Are you afraid of crowds?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Signposting.", slides: [{ id: "sl2", title: "Signposting", description: "Moving on to...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Transiciones." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Mini presentaciones.", slides: [{ id: "sl3", title: "Pitch", description: "Pitch an idea.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Hablar." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Da un pitch de 1 minuto.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-11",
      title: "Clase 11: Manejo de crisis, escalamiento y negociación compleja",
      duration: "60 min",
      objective: "Customer service avanzado B2/C1.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Crisis.", slides: [{ id: "sl1", title: "Crisis", description: "What is a crisis?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Escalation phrases.", slides: [{ id: "sl2", title: "Escalation", description: "I will escalate this.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocab." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Roleplay extremo.", slides: [{ id: "sl3", title: "Angry VIP", description: "Handle a VIP client.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Graba tu respuesta a una queja grave.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-12",
      title: "Clase 12: Escritura profesional avanzada: informes, propuestas y emails sensibles",
      duration: "60 min",
      objective: "Redacción C1.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Reports.", slides: [{ id: "sl1", title: "Reports", description: "Do you write reports?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Formal reports.", slides: [{ id: "sl2", title: "Formal Writing", description: "Executive summary.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Gramática." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Drafting.", slides: [{ id: "sl3", title: "Draft", description: "Write an intro.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Escribir." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Redacta un reporte corto.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-elite-13",
      title: "Clase 13: Pronunciación C1 y Proyecto final (simulación laboral)",
      duration: "60 min",
      objective: "Evaluación final de Elite.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Intonation.", slides: [{ id: "sl1", title: "Intonation", description: "Sound engaged.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Práctica fonética." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Preparar simulación.", slides: [{ id: "sl2", title: "Final Project", description: "Job simulation.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Preparar." },
        { id: "s3", title: "Roleplay", duration: "15 min", objective: "Presentar.", slides: [{ id: "sl3", title: "Action", description: "Execute your project.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Evaluación." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Masters", description: "Ready for Fluency!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    }`
  },
  {
    levelRegex: /title:\s*"Masters of Fluency"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/,
    newClasses: `
    ,
    {
      id: "c-adults-masters-5",
      title: "Clase 5: Debate formal y refutación de argumentos",
      duration: "60 min",
      objective: "Habilidades de debate fluido.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Arguments.", slides: [{ id: "sl1", title: "Debate", description: "Are you argumentative?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Debate phrases.", slides: [{ id: "sl2", title: "Rebuttals", description: "I completely disagree because...", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Frases útiles." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Debatir.", slides: [{ id: "sl3", title: "Let's debate", description: "Topic: Remote work.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate en parejas." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Argumenta a favor o en contra de la IA.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-6",
      title: "Clase 6: Storytelling avanzado y presentaciones improvisadas",
      duration: "60 min",
      objective: "Narración espontánea y atractiva.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Stories.", slides: [{ id: "sl1", title: "Storytelling", description: "Tell me a story.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Structure", duration: "20 min", objective: "Hooks.", slides: [{ id: "sl2", title: "Hooks", description: "How to catch attention.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Técnicas." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Improvisar.", slides: [{ id: "sl3", title: "Improvise", description: "Random topic speaking.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Monólogos de 1 min." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Cuenta la mejor anécdota de tu vida.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-7",
      title: "Clase 7: Inglés para negocios, liderazgo y reuniones",
      duration: "60 min",
      objective: "Lenguaje de liderazgo C2.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Leadership.", slides: [{ id: "sl1", title: "Leaders", description: "What makes a good leader?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Jargon.", slides: [{ id: "sl2", title: "Business Jargon", description: "Leverage, synergy, bandwidth.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Reuniones ejecutivas.", slides: [{ id: "sl3", title: "Boardroom", description: "Lead a meeting.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Da un discurso motivacional a tu equipo.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-8",
      title: "Clase 8: Medios, noticias, cultura y análisis de contenido real",
      duration: "60 min",
      objective: "Analizar y debatir actualidad.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "News.", slides: [{ id: "sl1", title: "The News", description: "What's happening in the world?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Noticias." },
        { id: "s2", title: "Vocabulary", duration: "20 min", objective: "Media terms.", slides: [{ id: "sl2", title: "Media", description: "Bias, sensationalism, sources.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Conceptos." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Discusión.", slides: [{ id: "sl3", title: "Discuss", description: "Analyze a news piece.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Debate." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Tu opinión sobre una noticia reciente.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-9",
      title: "Clase 9: Humor, ironía, matices y lenguaje informal natural",
      duration: "60 min",
      objective: "Comprender humor y matices sutiles.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Jokes.", slides: [{ id: "sl1", title: "Humor", description: "Tell me a joke.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Risas." },
        { id: "s2", title: "Culture", duration: "20 min", objective: "Sarcasm.", slides: [{ id: "sl2", title: "Sarcasm", description: "Oh, great.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar tonos." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Interpretación.", slides: [{ id: "sl3", title: "Analyze", description: "Is it a joke?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Clips/Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Usa sarcasmo en una situación graciosa.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-10",
      title: "Clase 10: Acentos del inglés y comprensión auditiva avanzada",
      duration: "60 min",
      objective: "Exponer a distintos acentos (UK, Aus, etc.).",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Accents.", slides: [{ id: "sl1", title: "Accents", description: "Which accent do you prefer?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Hablar." },
        { id: "s2", title: "Listening", duration: "20 min", objective: "UK/Aussie slang.", slides: [{ id: "sl2", title: "Slang", description: "Mate, bloke, loo.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Vocabulario." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Audio tests.", slides: [{ id: "sl3", title: "Listen", description: "Can you understand?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Listening comprehension." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Intenta imitar un acento que te guste.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-11",
      title: "Clase 11: Preparación para entrevistas C1/C2 y Conversation Club temático",
      duration: "60 min",
      objective: "Habilidades de entrevista de alto nivel.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Interviews.", slides: [{ id: "sl1", title: "Interviews", description: "Toughest question?", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Techniques", duration: "20 min", objective: "STAR method.", slides: [{ id: "sl2", title: "STAR", description: "Situation, Task, Action, Result.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Explicar método." },
        { id: "s3", title: "Practice", duration: "15 min", objective: "Simular preguntas difíciles.", slides: [{ id: "sl3", title: "Mock Interview", description: "Answer like a pro.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Roleplay." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Tarea.", slides: [{ id: "sl4", title: "Homework", description: "Video: Responde tu mayor debilidad profesional.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Despedida." }
      ]
    },
    {
      id: "c-adults-masters-12",
      title: "Clase 12: Proyecto final: presentación, debate o podcast en inglés",
      duration: "60 min",
      objective: "Culminación del programa y evaluación fluidez.",
      sections: [
        { id: "s1", title: "Warm-up", duration: "10 min", objective: "Relax.", slides: [{ id: "sl1", title: "Congratulations", description: "The final step.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"}], action: "Charla." },
        { id: "s2", title: "Prep", duration: "20 min", objective: "Set up the project.", slides: [{ id: "sl2", title: "Project Time", description: "Podcast or Ted Talk?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"}], action: "Organizar." },
        { id: "s3", title: "Present", duration: "15 min", objective: "Perform.", slides: [{ id: "sl3", title: "Action", description: "Show your fluency.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"}], action: "Presentaciones en vivo." },
        { id: "s4", title: "Homework", duration: "15 min", objective: "Cierre.", slides: [{ id: "sl4", title: "Graduation", description: "You are a Master of Fluency!", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"}], action: "Graduación." }
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
  fs.writeFileSync('src/data/curriculum.ts', modifiedContent);
  console.log("Successfully appended all adult classes!");
}
