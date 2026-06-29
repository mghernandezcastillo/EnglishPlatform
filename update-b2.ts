import fs from 'fs';

// Let's create the updated classes 5-10
const classes = [
  {
    id: "c-adults-basic-2-5",
    title: "Clase 5: Verbos de estado vs. acción en presente continuo",
    duration: "60 minutos",
    objective: "Diferenciar entre verbos de estado (Stative) y de acción (Dynamic).",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Activar conocimientos previos sobre verbos.",
        slides: [
          {
            id: "b2-5-s1",
            title: "Action vs. State",
            description: "Look at the pictures. What are they doing? How do they feel?",
            imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          },
          {
            id: "b2-5-s2",
            title: "Compare these sentences",
            description: "I am eating pizza. vs I love pizza.",
            content: ["Is there a difference in the type of verb?", "Can you say 'I am loving pizza'?"],
            bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700"
          }
        ],
        action: "Discutir las diferencias entre acciones físicas y estados mentales."
      },
      {
        id: "s2",
        title: "2. Grammar: Stative vs Dynamic Verbs",
        duration: "20 minutos",
        objective: "Explicar la regla general de los stative verbs.",
        slides: [
          {
            id: "b2-5-s3",
            title: "Dynamic Verbs (Action)",
            description: "Verbs that describe actions we can see or do.",
            content: [
              "Run, eat, play, read, talk, listen, go...",
              "✅ I play tennis every day.",
              "✅ I am playing tennis now."
            ],
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-5-s4",
            title: "Stative Verbs (State)",
            description: "Verbs that describe states, feelings, senses or possession. We DON'T usually use them in continuous tenses.",
            content: [
              "Thoughts/Feelings: love, like, hate, want, need, prefer, know, understand, believe, remember.",
              "Senses: see, hear, taste, smell, sound.",
              "Possession: have, own, belong."
            ],
            imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-5-s5",
            title: "Important Rule!",
            description: "Stative verbs are usually NOT used with -ING.",
            content: [
              "❌ I am wanting a coffee.",
              "✅ I want a coffee.",
              "❌ She is knowing the answer.",
              "✅ She knows the answer."
            ],
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          },
          {
            id: "b2-5-s6",
            title: "Special Verb: HAVE",
            description: "Have can be stative or dynamic.",
            content: [
              "Stative (Possession - NO ING): I have a car. (Not: I am having a car).",
              "Dynamic (Action - YES ING): I am having lunch. We are having a good time."
            ],
            bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800"
          }
        ],
        action: "Explicar la diferencia y hacer énfasis en evitar el uso de 'ing' con stative verbs."
      },
      {
        id: "s3",
        title: "3. Practice",
        duration: "15 minutos",
        objective: "Practicar la identificación y uso correcto de los verbos.",
        slides: [
          {
            id: "b2-5-s7",
            title: "Choose the correct sentence",
            description: "Which sentence is correct?",
            content: [
              "1. a) I am liking this song. / b) I like this song.",
              "2. a) Are you understanding the lesson? / b) Do you understand the lesson?",
              "3. a) He is playing soccer right now. / b) He plays soccer right now."
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-5-s8",
            title: "Fill in the blanks",
            description: "Use the Present Simple or Present Continuous.",
            content: [
              "1. I ________ (need) some help with my homework.",
              "2. Look! It ________ (rain).",
              "3. She ________ (not/know) his name.",
              "4. We ________ (have) dinner at the moment."
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Hacer que los estudiantes completen los ejercicios y corregir en grupo."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Uso espontáneo de verbos en conversaciones cortas.",
        slides: [
          {
            id: "b2-5-s9",
            title: "Let's Talk!",
            description: "Ask your partner these questions:",
            type: "speaking",
            content: [
              "1. What do you need right now?",
              "2. Do you believe in ghosts?",
              "3. What are you doing this weekend?",
              "4. Do you have any pets? What do they look like?"
            ],
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Monitorear la práctica oral asegurando el uso correcto de los tiempos verbales."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Homework",
        duration: "5 minutos",
        objective: "Cierre de clase.",
        slides: [
          {
            id: "b2-5-s10",
            title: "Summary & Homework",
            description: "Review today's stative verbs list.",
            type: "homework",
            content: [
              "Write 5 sentences using stative verbs about yourself.",
              "Write 5 sentences using dynamic verbs describing what your family is doing right now."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Asignar la tarea."
      }
    ]
  },
  {
    id: "c-adults-basic-2-6",
    title: "Clase 6: Clima y estaciones del año",
    duration: "60 minutos",
    objective: "Aprender vocabulario del clima y hablar sobre las estaciones del año.",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Introducir el tema del clima.",
        slides: [
          {
            id: "b2-6-s1",
            title: "What's the weather like?",
            description: "Look outside the window. How is the weather today?",
            imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          }
        ],
        action: "Hacer preguntas abiertas sobre el clima de hoy."
      },
      {
        id: "s2",
        title: "2. Vocabulary: Weather & Seasons",
        duration: "20 minutos",
        objective: "Enseñar vocabulario sobre clima, temperaturas y estaciones.",
        slides: [
          {
            id: "b2-6-s2",
            title: "The Four Seasons",
            description: "Spring, Summer, Autumn (Fall), Winter",
            content: [
              "🌸 Spring (Primavera)",
              "☀️ Summer (Verano)",
              "🍂 Autumn / Fall (Otoño)",
              "❄️ Winter (Invierno)"
            ],
            imageUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-6-s3",
            title: "Weather Vocabulary",
            description: "How to describe the weather:",
            content: [
              "Sunny (Soleado) / Cloudy (Nublado)",
              "Rainy (Lluvioso) / Windy (Ventoso)",
              "Snowy (Nevado) / Foggy (Con niebla)"
            ],
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-6-s4",
            title: "Temperature",
            description: "How does it feel?",
            content: [
              "🔥 Hot (Calor)",
              "😅 Warm (Cálido)",
              "🌬️ Cool (Fresco)",
              "🥶 Cold / Freezing (Frío / Helado)"
            ],
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          },
          {
            id: "b2-6-s5",
            title: "Asking about the weather",
            description: "Common questions:",
            content: [
              "Q: What's the weather like? / How's the weather?",
              "A: It's sunny and warm.",
              "Q: What's your favorite season?",
              "A: I love autumn because it's cool."
            ],
            bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800"
          }
        ],
        action: "Repasar la pronunciación del vocabulario."
      },
      {
        id: "s3",
        title: "3. Practice",
        duration: "15 minutos",
        objective: "Practicar descripciones del clima.",
        slides: [
          {
            id: "b2-6-s6",
            title: "Describe the pictures",
            description: "What's the weather like in these cities?",
            content: [
              "London: 🌧️",
              "Miami: ☀️",
              "New York: ❄️",
              "Seattle: ☁️"
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-6-s7",
            title: "True or False?",
            description: "Read and decide if it's true or false for your city.",
            content: [
              "1. It is usually hot in December.",
              "2. It rains a lot in spring.",
              "3. Summer is the best season.",
              "4. It's windy today."
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Hacer que los estudiantes interactúen describiendo las ciudades."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Hablar sobre preferencias personales en relación al clima.",
        slides: [
          {
            id: "b2-6-s8",
            title: "Speaking: Weather & Activities",
            description: "Discuss with your partner:",
            type: "speaking",
            content: [
              "What's your favorite season and why?",
              "What do you like doing on a rainy day?",
              "What do you usually wear when it's freezing?",
              "What is the weather like in your city in July?"
            ],
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Fomentar la conversación fluida."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Homework",
        duration: "5 minutos",
        objective: "Cierre de clase.",
        slides: [
          {
            id: "b2-6-s9",
            title: "Homework",
            description: "Write about your favorite season.",
            type: "homework",
            content: [
              "Write a short paragraph (50 words) describing your favorite season, the typical weather, and what activities you like to do."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Anotar la tarea."
      }
    ]
  },
  {
    id: "c-adults-basic-2-7",
    title: "Clase 7: Imperativos para dar instrucciones",
    duration: "60 minutos",
    objective: "Dar órdenes, instrucciones y advertencias usando el imperativo.",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Reconocer comandos comunes.",
        slides: [
          {
            id: "b2-7-s1",
            title: "Simon Says...",
            description: "Let's play a quick game of Simon Says!",
            content: [
              "Stand up!",
              "Sit down!",
              "Touch your nose!",
              "Don't smile!"
            ],
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          }
        ],
        action: "Jugar 'Simon Says' para activar el uso de imperativos de manera lúdica."
      },
      {
        id: "s2",
        title: "2. Grammar: Imperatives",
        duration: "20 minutos",
        objective: "Enseñar la estructura afirmativa y negativa del imperativo.",
        slides: [
          {
            id: "b2-7-s2",
            title: "What is an imperative?",
            description: "We use imperatives to give orders, instructions, or advice.",
            content: [
              "In English, the imperative uses the base form of the verb.",
              "There is no subject (no 'you', 'he', 'she')."
            ],
            imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-7-s3",
            title: "Affirmative Imperatives",
            description: "Start with the verb.",
            content: [
              "✅ Open the door, please.",
              "✅ Turn off your phones.",
              "✅ Listen to the teacher.",
              "✅ Be careful!"
            ],
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-7-s4",
            title: "Negative Imperatives",
            description: "Start with Don't.",
            content: [
              "❌ Don't open the window.",
              "❌ Don't talk during the exam.",
              "❌ Don't forget your homework.",
              "❌ Don't be late!"
            ],
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          },
          {
            id: "b2-7-s5",
            title: "Polite Instructions",
            description: "Add 'please' to sound more polite.",
            content: [
              "Please, sit down.",
              "Wait here, please.",
              "Don't smoke here, please."
            ],
            bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800"
          }
        ],
        action: "Explicar la formación del imperativo y enfatizar la falta de sujeto."
      },
      {
        id: "s3",
        title: "3. Practice",
        duration: "15 minutos",
        objective: "Convertir oraciones e identificar instrucciones.",
        slides: [
          {
            id: "b2-7-s6",
            title: "Classroom Rules",
            description: "Match the rules to the signs.",
            content: [
              "1. Don't eat in class.",
              "2. Raise your hand.",
              "3. Don't use your phone.",
              "4. Speak in English."
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-7-s7",
            title: "Change to Imperative",
            description: "Make these sentences imperative.",
            content: [
              "1. You need to close the door. -> _________",
              "2. You shouldn't drink that milk. -> _________",
              "3. It's important to study for the test. -> _________"
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Resolver ejercicios en parejas."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Crear instrucciones propias.",
        slides: [
          {
            id: "b2-7-s8",
            title: "Create the Rules!",
            description: "Work in pairs. Write 5 rules for:",
            type: "roleplay",
            content: [
              "A library",
              "A swimming pool",
              "An airplane",
              "A movie theater"
            ],
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Los estudiantes presentan sus reglas al resto de la clase."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Homework",
        duration: "5 minutos",
        objective: "Cierre de clase.",
        slides: [
          {
            id: "b2-7-s9",
            title: "Homework",
            description: "Write rules for your house.",
            type: "homework",
            content: [
              "Write 5 affirmative and 5 negative rules for someone visiting your house."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Explicar la tarea."
      }
    ]
  },
  {
    id: "c-adults-basic-2-8",
    title: "Clase 8: Pedir y ofrecer direcciones en la calle",
    duration: "60 minutos",
    objective: "Aprender a pedir indicaciones y utilizar imperativos para dar direcciones.",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Introducir lugares de la ciudad.",
        slides: [
          {
            id: "b2-8-s1",
            title: "Places in the city",
            description: "What places are near your house?",
            content: [
              "Bank, Supermarket, Hospital, Park, Restaurant, Bus stop."
            ],
            imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          }
        ],
        action: "Repasar el vocabulario básico de la ciudad."
      },
      {
        id: "s2",
        title: "2. Vocabulary & Expressions",
        duration: "20 minutos",
        objective: "Enseñar frases clave para pedir y dar direcciones.",
        slides: [
          {
            id: "b2-8-s2",
            title: "Asking for directions",
            description: "How to ask politely:",
            content: [
              "Excuse me, where is the bank?",
              "Excuse me, how do I get to the supermarket?",
              "Is there a hospital near here?"
            ],
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-8-s3",
            title: "Giving directions (Imperatives)",
            description: "Action verbs for directions:",
            content: [
              "Go straight (Ve derecho).",
              "Turn right (Gira a la derecha).",
              "Turn left (Gira a la izquierda).",
              "Go past the school (Pasa la escuela).",
              "Cross the street (Cruza la calle)."
            ],
            imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-8-s4",
            title: "Prepositions of Place",
            description: "Where exactly is it?",
            content: [
              "It's on the corner. (En la esquina)",
              "It's next to the bank. (Al lado del banco)",
              "It's between the park and the school. (Entre el parque y la escuela)",
              "It's across from the station. (En frente de la estación)"
            ],
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          }
        ],
        action: "Pronunciar las frases y hacer mímica de 'turn right/left'."
      },
      {
        id: "s3",
        title: "3. Practice",
        duration: "15 minutos",
        objective: "Seguir instrucciones en un mapa.",
        slides: [
          {
            id: "b2-8-s5",
            title: "Look at the Map",
            description: "Listen to the teacher and find the place.",
            content: [
              "You are at the coffee shop. Go straight, turn right on Main Street. It's next to the library. Where are you?"
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-8-s6",
            title: "Order the dialogue",
            description: "Put the conversation in order:",
            content: [
              "A: Thank you!",
              "B: Go straight and turn left. It's on the corner.",
              "A: Excuse me, how do I get to the pharmacy?",
              "B: You're welcome."
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Practicar con mapas imaginarios."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Roleplay: Turista y Residente.",
        slides: [
          {
            id: "b2-8-s7",
            title: "Roleplay: Tourist in town",
            description: "Student A is a tourist. Student B is a local.",
            type: "roleplay",
            content: [
              "A: Ask for directions to 3 different places.",
              "B: Give directions using imperatives and prepositions.",
              "Then swap roles!"
            ],
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Observar los diálogos y corregir pronunciación amablemente."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Homework",
        duration: "5 minutos",
        objective: "Cierre de clase.",
        slides: [
          {
            id: "b2-8-s8",
            title: "Homework",
            description: "Directions to your house.",
            type: "homework",
            content: [
              "Write instructions on how to get from the nearest supermarket to your house."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Explicar la tarea final."
      }
    ]
  },
  {
    id: "c-adults-basic-2-9",
    title: "Clase 9: Conversaciones telefónicas básicas",
    duration: "60 minutos",
    objective: "Manejar frases clave para iniciar y mantener una conversación telefónica simple.",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Romper el hielo.",
        slides: [
          {
            id: "b2-9-s1",
            title: "Do you like talking on the phone?",
            description: "How often do you make phone calls?",
            content: [
              "Do you prefer texting or calling?",
              "Who do you call the most?"
            ],
            imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          }
        ],
        action: "Charla breve sobre hábitos de comunicación."
      },
      {
        id: "s2",
        title: "2. Vocabulary & Useful Phrases",
        duration: "20 minutos",
        objective: "Enseñar el vocabulario específico de las llamadas.",
        slides: [
          {
            id: "b2-9-s2",
            title: "Answering the phone",
            description: "How to say hello:",
            content: [
              "Hello? (Informal)",
              "Hello, this is [Name]. (Formal/Business)",
              "Good morning, [Company Name], how can I help you?"
            ],
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-9-s3",
            title: "Asking for someone",
            description: "When you make the call:",
            content: [
              "Can I speak to [Name], please?",
              "Is [Name] there?",
              "I'd like to speak with [Name]."
            ],
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-9-s4",
            title: "Connecting / Leaving a message",
            description: "What to say when they are not available:",
            content: [
              "Hold on a minute, please. (Espera un minuto)",
              "Just a moment. (Un momento)",
              "I'm sorry, he/she is not here.",
              "Can I leave a message?"
            ],
            imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          }
        ],
        action: "Repetir frases simulando tener un teléfono en la mano."
      },
      {
        id: "s3",
        title: "3. Practice",
        duration: "15 minutos",
        objective: "Practicar pequeños diálogos telefónicos.",
        slides: [
          {
            id: "b2-9-s5",
            title: "Complete the dialogue",
            description: "Fill in the blanks:",
            content: [
              "A: Hello, _____ I speak to Sarah, please?",
              "B: I'm sorry, she's not ____. Can I take a _____?",
              "A: Yes, tell her to call Mike. Thanks!"
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-9-s6",
            title: "Listening & Pronunciation",
            description: "Pay attention to intonation.",
            content: [
              "Practice sounding polite over the phone."
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Practicar el diálogo en parejas con diferentes nombres."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Simulación de llamada (Roleplay).",
        slides: [
          {
            id: "b2-9-s7",
            title: "Ring Ring!",
            description: "Sit back to back with your partner so you can't see them.",
            type: "roleplay",
            content: [
              "Situation A: Call a friend to invite them to a movie. They are not home, leave a message with their brother.",
              "Situation B: Order a pizza over the phone."
            ],
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Hacer que se sienten de espaldas para que solo dependan del audio, como en una llamada real."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Homework",
        duration: "5 minutos",
        objective: "Cierre de clase.",
        slides: [
          {
            id: "b2-9-s8",
            title: "Homework",
            description: "Voice Message",
            type: "homework",
            content: [
              "Record a short voice message on WhatsApp to your teacher practicing leaving a message in English."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Asignar la grabación de voz."
      }
    ]
  },
  {
    id: "c-adults-basic-2-10",
    title: "Clase 10: Repaso de presente simple vs. continuo",
    duration: "60 minutos",
    objective: "Consolidar el uso del Present Simple vs Present Continuous.",
    sections: [
      {
        id: "s1",
        title: "1. Warm-up",
        duration: "10 minutos",
        objective: "Activar ambos tiempos verbales.",
        slides: [
          {
            id: "b2-10-s1",
            title: "Time Expressions Challenge",
            description: "Categorize the time expressions.",
            content: [
              "Usually, right now, every day, at the moment, sometimes, today, always."
            ],
            imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
          }
        ],
        action: "Los estudiantes dividen las expresiones en rutinas (Simple) o acciones temporales (Continuous)."
      },
      {
        id: "s2",
        title: "2. Grammar Review",
        duration: "15 minutos",
        objective: "Contraste rápido de usos y estructuras.",
        slides: [
          {
            id: "b2-10-s2",
            title: "Present Simple Review",
            description: "Routines, habits, and permanent states.",
            content: [
              "✅ He plays soccer on Sundays.",
              "❌ He doesn't play tennis.",
              "❓ Does he play golf?"
            ],
            bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500"
          },
          {
            id: "b2-10-s3",
            title: "Present Continuous Review",
            description: "Actions happening RIGHT NOW or temporary situations.",
            content: [
              "✅ He is playing soccer right now.",
              "❌ He isn't playing tennis at the moment.",
              "❓ Is he playing golf today?"
            ],
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
          },
          {
            id: "b2-10-s4",
            title: "Don't forget Stative Verbs!",
            description: "Remember: some verbs don't like 'ING'.",
            content: [
              "Love, like, hate, want, need, know, understand.",
              "I want a coffee right now. (Not: I am wanting)"
            ],
            bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
          }
        ],
        action: "Resolver dudas y asegurar que todos entiendan la diferencia conceptual."
      },
      {
        id: "s3",
        title: "3. Practice Exercises",
        duration: "20 minutos",
        objective: "Ejercicios intensivos de contraste.",
        slides: [
          {
            id: "b2-10-s5",
            title: "Choose the correct option",
            description: "Simple or Continuous?",
            content: [
              "1. I usually (drink / am drinking) coffee, but today I (drink / am drinking) tea.",
              "2. Look! It (snows / is snowing).",
              "3. She (doesn't like / isn't liking) spicy food."
            ],
            bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
          },
          {
            id: "b2-10-s6",
            title: "Find the mistake",
            description: "Correct these sentences:",
            content: [
              "1. He is usually waking up at 7 AM.",
              "2. Are you believing in aliens?",
              "3. I read a book at the moment.",
              "4. What do you do right now?"
            ],
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
          }
        ],
        action: "Hacer los ejercicios de forma participativa en la pizarra virtual."
      },
      {
        id: "s4",
        title: "4. Production",
        duration: "10 minutos",
        objective: "Producir lenguaje hablado usando ambos tiempos.",
        slides: [
          {
            id: "b2-10-s7",
            title: "Describe the picture!",
            description: "Look at the image provided by the teacher.",
            type: "speaking",
            content: [
              "Say 3 things that happen usually in this place (Simple).",
              "Say 3 things that are happening right now in the picture (Continuous)."
            ],
            imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ],
        action: "Fomentar la descripción oral fluida."
      },
      {
        id: "s5",
        title: "5. Wrap-up & Preparation for Final Project",
        duration: "5 minutos",
        objective: "Avisar sobre el proyecto final de la siguiente clase.",
        slides: [
          {
            id: "b2-10-s8",
            title: "Next Class: Final Project!",
            description: "Get ready to show what you've learned.",
            type: "homework",
            content: [
              "Review all topics from Basic 2 for your final speaking project.",
              "Think about your routines, ongoing actions, and directions."
            ],
            bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
          }
        ],
        action: "Explicar las pautas para el proyecto final."
      }
    ]
  }
];

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

for (const cls of classes) {
    const targetStr = `id: "${cls.id}"`;
    const startIndex = content.indexOf(targetStr);
    
    if (startIndex !== -1) {
        // Find the start of the object {
        const objStart = content.lastIndexOf('{', startIndex);
        
        let objEnd = -1;
        const nextId = parseInt(cls.id.split('-').pop()) + 1;
        
        if (nextId <= 11) {
            const nextTargetStr = `id: "c-adults-basic-2-${nextId}"`;
            const nextIndex = content.indexOf(nextTargetStr);
            if (nextIndex !== -1) {
                objEnd = content.lastIndexOf('{', nextIndex);
                // Go back before comma if possible
                const prevComma = content.lastIndexOf(',', objEnd);
                if (prevComma > objStart) {
                     objEnd = prevComma;
                }
            }
        } else {
            // It's the last class in the classes array
            const searchForEnd = '    ]';
            objEnd = content.indexOf(searchForEnd, startIndex);
        }
        
        if (objEnd !== -1) {
             const toReplace = content.substring(objStart, objEnd);
             const replacement = '{\n      ' + JSON.stringify(cls, null, 2).slice(1, -1).replace(/\n/g, '\n      ') + '\n    }';
             content = content.replace(toReplace, replacement);
        }
    }
}

fs.writeFileSync('src/data/curriculum.ts', content);
