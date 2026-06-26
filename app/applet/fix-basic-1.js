const fs = require('fs');

const replacements = {
  'c-adults-basic-1-5': `{
      id: "c-adults-basic-1-5",
      title: "Clase 5: Rutinas diarias y la hora",
      duration: "60 minutos",
      objective: "Aprender a describir la rutina diaria y decir la hora en inglés.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Activar vocabulario sobre el día a día.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! What time do you wake up?",
              description: "Let's talk about routines.",
              content: ["Are you a morning person?", "What is the first thing you do in the morning?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos a qué hora se despertaron hoy."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Conocer verbos de rutina y cómo decir la hora.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Daily Routine Verbs",
              description: "Acciones diarias",
              content: ["Wake up / Get up", "Take a shower / Get dressed", "Have breakfast / Go to work"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "More Verbs",
              description: "Tarde y Noche",
              content: ["Have lunch / Finish work", "Go home / Have dinner", "Watch TV / Go to sleep"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Telling the Time (1)",
              description: "Cómo decir la hora",
              content: ["It's seven o'clock (7:00)", "It's half past ten (10:30)", "It's a quarter to nine (8:45)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Telling the Time (2)",
              description: "Forma digital (Más fácil)",
              content: ["7:30 = Seven thirty", "8:15 = Eight fifteen", "9:45 = Nine forty-five"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que la forma digital es muy común hoy en día, pero deben entender 'half past' y 'quarter to'."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Unir rutinas con horas específicas.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I wake up at seven o'clock. I have breakfast at seven thirty. I go to work at eight fifteen."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Routines",
              content: ["I usually take a ______ in the morning."],
              options: ["shower", "breakfast", "sleep"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Time",
              content: ["10:30 is ______."],
              options: ["half past ten", "quarter to ten", "ten o'clock"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Prepositions",
              content: ["I have lunch ______ 1:00 PM."],
              options: ["in", "on", "at"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I wake up in 7 AM.", "2. He have breakfast.", "3. It's quarter past to nine."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-5",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Rutinas)",
              type: 'emoji-game',
              content: ['🥱 ➕ 🛏️ ➕ ☕'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I wake up and drink coffee.", "I go to sleep late.", "I watch TV in bed."],
              correctOptionIndex: 0
            }
          ],
          action: "Hacer énfasis en la preposición 'at' para las horas."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Describir la propia rutina diaria.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: My typical day",
              description: "Habla sobre tu rutina",
              content: ["Tell your partner 3 things you do in the morning and at what time.", "Example: I wake up at... Then I..."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Routines",
              content: ["The opposite of 'wake up' is:"],
              options: ["get up", "go to sleep", "have dinner"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Time",
              content: ["4:15 is:"],
              options: ["quarter past four", "half past four", "four thirty"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Prepositions",
              content: ["I go to the gym ______ 6:00 PM."],
              options: ["at", "in", "on"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Phrases",
              content: ["What time ______?"],
              options: ["is it", "it is", "does it"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar que digan la hora de forma fluida."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final de rutinas y tareas.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can describe your day!", "You can tell the time!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write down your perfect daily routine. (e.g. I wake up at 10 AM, I have pizza for breakfast...)"],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-5",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/eUXkj6j6Ezw",
              content: ["Identify 3 actions from the video's routine."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase animándolos a decir la hora en inglés mentalmente durante el día."
        }
      ]
    }`,
  'c-adults-basic-1-6': `{
      id: "c-adults-basic-1-6",
      title: "Clase 6: Adverbios de frecuencia (always, sometimes, never)",
      duration: "60 minutos",
      objective: "Aprender a expresar qué tan seguido realizamos una acción.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Conectar rutinas con frecuencia.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! How often...?",
              description: "Do you do this every day?",
              content: ["Do you drink coffee every morning?", "Do you exercise on Sundays?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos si hacen ciertas actividades todos los días o casi nunca."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Introducir los adverbios de frecuencia y su posición en la oración.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Adverbs of Frequency",
              description: "Qué tan seguido...",
              content: ["Always (100%)", "Usually / Often (70-80%)", "Sometimes (50%)", "Hardly ever / Rarely (10%)", "Never (0%)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Rule #1: Action Verbs",
              description: "Antes del verbo principal",
              content: ["Subject + Adverb + Verb", "I ALWAYS drink coffee.", "She NEVER eats meat."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 4",
              title: "Rule #2: Verb To Be",
              description: "Después del verbo To Be",
              content: ["Subject + Verb To Be + Adverb", "I am ALWAYS happy.", "They are NEVER late."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Asking Questions",
              description: "How often...?",
              content: ["How often do you go to the cinema?", "- I usually go once a month."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar bien la diferencia de posición entre verbos normales y el verbo To Be."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar la posición correcta del adverbio.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I usually wake up at 7 AM. I am never late for work. Sometimes, I have pizza for dinner."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Action Verbs",
              content: ["I ______ go to the gym on Mondays. (100%)"],
              options: ["sometimes", "never", "always"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Verb To Be",
              content: ["He ______ late for class. (0%)"],
              options: ["is never", "never is", "never does"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["______ do you play soccer?"],
              options: ["How much", "How often", "What often"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I always am happy.", "2. She play sometimes tennis.", "3. How often you read?"],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-6",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Frecuencia)",
              type: 'emoji-game',
              content: ['❌ ➕ 🥦'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I never eat broccoli.", "I always eat broccoli.", "Broccoli is bad."],
              correctOptionIndex: 0
            }
          ],
          action: "Corregir activamente cuando pongan el adverbio después de un verbo de acción."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Hablar sobre hábitos y frecuencias.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: The Interview",
              description: "Habla sobre tus hábitos",
              content: ["Ask your partner: How often do you...?", "Cook, Read a book, Travel, Play video games."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Frequency",
              content: ["Which one means 0%?"],
              options: ["Always", "Sometimes", "Never"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Order",
              content: ["Which sentence is correct?"],
              options: ["She usually wakes up early.", "She wakes usually up early.", "She wakes up usually early."],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "To Be",
              content: ["I ______ tired on Fridays."],
              options: ["always am", "am always", "always"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Questions",
              content: ["______ do you go to the dentist?"],
              options: ["How often", "When often", "What time"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Fomentar que usen 'Hardly ever' o 'Rarely' en vez de solo sometimes/never."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso de adverbios de frecuencia.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your habits!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write 3 things you ALWAYS do, and 3 things you NEVER do."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-6",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/59J6x7rX99s",
              content: ["Listen to how native speakers place the adverbs in their sentences."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    }`,
  'c-adults-basic-1-7': `{
      id: "c-adults-basic-1-7",
      title: "Clase 7: Comidas, bebidas y vocabulario de restaurantes",
      duration: "60 minutos",
      objective: "Aprender vocabulario de comida y cómo pedir en un restaurante.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Hablar sobre comida favorita.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Are you hungry?",
              description: "Let's talk about food.",
              content: ["What is your favorite food?", "Do you like cooking?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Animar a los alumnos a compartir su plato favorito en inglés."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Vocabulario de comidas y frases útiles en restaurantes.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Food & Drinks",
              description: "Vocabulario básico",
              content: ["Meat, Chicken, Fish, Salad", "Water, Coffee, Tea, Juice, Beer"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Meals of the Day",
              description: "Comidas del día",
              content: ["Breakfast (Desayuno)", "Lunch (Almuerzo)", "Dinner (Cena)", "Snack (Merienda/Bocadillo)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "At the Restaurant",
              description: "Cómo pedir",
              content: ["I would like... (Me gustaría...)", "Can I have...?, please? (¿Me puede dar...?, por favor?)", "The bill, please. (La cuenta, por favor)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Waiters' phrases",
              description: "Lo que escucharás",
              content: ["Are you ready to order?", "Anything to drink?", "Here you go."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que 'I want' suena rudo, 'I would like' o 'Can I have' es más educado."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar interacciones en el restaurante.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["Waiter: Are you ready to order?", "Customer: Yes, I would like the chicken salad, please.", "Waiter: Anything to drink?", "Customer: Can I have a glass of water?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Ordering",
              content: ["I ______ like a coffee, please."],
              options: ["will", "would", "want"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Phrases",
              content: ["______ I have the bill, please?"],
              options: ["Do", "Am", "Can"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Meals",
              content: ["I eat ______ at 8:00 AM."],
              options: ["dinner", "breakfast", "lunch"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I want chicken now.", "2. Are you ready for order?", "3. The check please."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-7",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Comida)",
              type: 'emoji-game',
              content: ['🙋‍♂️ ➕ 🧾 ➕ 💵'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["The bill, please.", "I want money.", "Can I have a menu?"],
              correctOptionIndex: 0
            }
          ],
          action: "En 'Find the mistake', discutir las formas más educadas de pedir."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Simular pedir en un restaurante.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: The Restaurant",
              description: "Simulación",
              content: ["Person A: You are the waiter.", "Person B: You are the customer.", "Order food, drinks and ask for the bill."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Polite requests",
              content: ["Which is more polite?"],
              options: ["Give me water.", "I want water.", "Can I have some water?"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Meals",
              content: ["What do you eat in the middle of the day?"],
              options: ["Breakfast", "Lunch", "Dinner"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Vocab",
              content: ["What does 'bill' or 'check' mean?"],
              options: ["El menú", "La cuenta", "La mesa"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Waiters",
              content: ["Are you ready to ______?"],
              options: ["eat", "order", "buy"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play e intercambiar roles."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de comida.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can survive in a restaurant!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Look at a menu in English online and write down 5 new food words."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-7",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/GLi6K42GixQ",
              content: ["Listen to how they order food."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    }`,
  'c-adults-basic-1-8': `{
      id: "c-adults-basic-1-8",
      title: "Clase 8: Sustantivos contables e incontables (some, any)",
      duration: "60 minutos",
      objective: "Diferenciar contables e incontables, usar some/any correctamente.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Explorar cantidades básicas.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Let's count!",
              description: "Can you count water?",
              content: ["Can you say 'one water, two waters'?", "What about apples?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Plantear la diferencia intuitiva entre contar manzanas vs contar agua/arroz."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Reglas de contables/incontables y some/any.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Countable Nouns",
              description: "Se pueden contar",
              content: ["Singular & Plural: an apple / two apples", "Examples: car, book, egg, tomato"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Uncountable Nouns",
              description: "No se cuentan (se miden)",
              content: ["Always singular: water, rice, sugar, money, time", "You can't say 'two waters' (you say 'two bottles of water')"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Some & Any (1)",
              description: "Cantidades indefinidas",
              content: ["SOME: Para oraciones positivas (+)", "I have SOME apples. I have SOME water."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Some & Any (2)",
              description: "Negativas y Preguntas",
              content: ["ANY: Para oraciones negativas (-) y preguntas (?)", "I don't have ANY apples. Do you have ANY water?"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Aclarar que SOME se usa en preguntas cuando ofrecemos algo ('Would you like some coffee?')."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Diferenciar some y any.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["We have some cheese in the fridge, but we don't have any bread. Do we have any tomatoes?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Positive",
              content: ["I need ______ sugar for the cake."],
              options: ["some", "any", "a"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Negative",
              content: ["We don't have ______ milk."],
              options: ["some", "any", "many"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["Do you have ______ brothers or sisters?"],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I have any money.", "2. She doesn't have some time.", "3. I drink two waters."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-8",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Sustantivos)",
              type: 'emoji-game',
              content: ['❌ ➕ 🍞'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I don't have any bread.", "I have some bread.", "Bread is bad."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver dudas puntuales sobre si el dinero o el tiempo son contables (no lo son)."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Hablar de lo que hay en la nevera.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: In the Kitchen",
              description: "Inventario",
              content: ["Tell your partner 3 things you have in your fridge (using SOME) and 3 things you don't have (using ANY)."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Uncountable",
              content: ["Which of these is UNCOUNTABLE?"],
              options: ["Car", "Water", "Apple"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Some/Any",
              content: ["I have ______ good friends."],
              options: ["some", "any", "much"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Questions",
              content: ["Are there ______ eggs in the fridge?"],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Offers (Exception)",
              content: ["Would you like ______ coffee?"],
              options: ["any", "some", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Reforzar que 'Would you like some...?' es la excepción en preguntas."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de Some/Any.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You understand quantities!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Open your fridge at home and write 5 sentences using SOME and ANY."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-8",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/g3Qo97Gj9b0",
              content: ["Listen to how they use SOME and ANY in real life."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    }`,
  'c-adults-basic-1-9': `{
      id: "c-adults-basic-1-9",
      title: "Clase 9: Gustos y preferencias (like, love, hate + ing)",
      duration: "60 minutos",
      objective: "Expresar aficiones, gustos y desagrados usando el gerundio.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Hablar sobre hobbies.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! What do you like?",
              description: "Hobbies & Interests",
              content: ["What do you do in your free time?", "Do you like sports?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Animar a que digan 1 o 2 cosas que les gusta hacer los fines de semana."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Aprender like, love, hate y la regla del ING.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Expressing Preferences",
              description: "Verbos de emoción",
              content: ["Love (Me encanta)", "Like (Me gusta)", "Don't like (No me gusta)", "Hate (Odio)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Rule: Verb + ING",
              description: "Cuando hablamos de actividades",
              content: ["I like + verb-ING", "I like reading. (Me gusta leer)", "She loves dancing. (A ella le encanta bailar)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Exceptions (Nouns)",
              description: "Con sustantivos no hay ING",
              content: ["I like pizza. (NO: I like pizzaing)", "He loves dogs."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Questions",
              description: "Do you like...?",
              content: ["Do you like swimming?", "- Yes, I love it! / No, I hate it."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que 'I like to read' también es correcto, pero 'I like reading' es más natural para hobbies."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar la estructura ING.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I love listening to music. My brother hates cooking, but he likes eating. We both enjoy watching movies."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Verbs",
              content: ["I like ______ tennis."],
              options: ["play", "playing", "plays"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Nouns vs Verbs",
              content: ["She loves ______ coffee."],
              options: ["drink", "drinking", "drinks"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Third Person",
              content: ["He ______ getting up early."],
              options: ["hate", "hates", "hating"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I like play football.", "2. She love shopping.", "3. Do you likes cooking?"],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-9",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Gustos)",
              type: 'emoji-game',
              content: ['❤️ ➕ ✈️'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I love traveling.", "I hate planes.", "I like walking."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver las preguntas y corregir la tercera persona ('He hates')."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Expresar gustos personales de forma fluida.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: Hobbies",
              description: "Simulación",
              content: ["Interview your partner:", "Find 3 things they love doing, and 2 things they hate doing."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Rules",
              content: ["After LIKE, LOVE or HATE, verbs end in..."],
              options: ["-ed", "-s", "-ing"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Application",
              content: ["I love ______ movies."],
              options: ["watch", "watching", "watches"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Negation",
              content: ["I ______ like running."],
              options: ["am not", "don't", "doesn't"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Third Person",
              content: ["My mom ______ cleaning the house."],
              options: ["hates", "hate", "hating"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play e insistir en el uso del gerundio (ING)."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de gustos.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your hobbies!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write a short paragraph about what you love, like, and hate doing on weekends."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-9",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/5F6v314rXwA",
              content: ["Identify what activities the speakers like and dislike."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    }`,
  'c-adults-basic-1-10': `{
      id: "c-adults-basic-1-10",
      title: "Clase 10: Repaso General de Basic 1",
      duration: "60 minutos",
      objective: "Repasar todos los temas de Basic 1 y preparar a los alumnos para su evaluación oral.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Reflexión sobre el nivel.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome to the Final Review!",
              description: "Basic 1 is complete!",
              content: ["How much have you learned?", "What was your favorite topic?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Felicitar a los alumnos por llegar hasta aquí."
        },
        {
          id: "s2",
          title: "2. Mega Review (Part 1)",
          duration: "15 minutos",
          objective: "Repaso de Rutinas, Adverbios y Present Simple.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Daily Routines & Time",
              description: "Review",
              content: ["I wake up at 7:00 AM.", "She has lunch at half past one."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Frequency Adverbs",
              description: "Review",
              content: ["I always study.", "He is never late.", "We sometimes go out."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Present Simple (Do/Does)",
              description: "Review",
              content: ["Do you like pizza? Yes, I do.", "Does she work here? No, she doesn't."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Wh- Questions",
              description: "Review",
              content: ["Where do you live?", "What does he do?", "When do they study?"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Hacer preguntas rápidas orales para evaluar retención."
        },
        {
          id: "s3",
          title: "3. Mega Review (Part 2)",
          duration: "15 minutos",
          objective: "Repaso de Some/Any, Food y Gustos.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Food & Restaurants",
              description: "Review",
              content: ["I would like a salad, please.", "Can I have the bill?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Some & Any",
              description: "Review",
              content: ["We have some apples.", "We don't have any milk.", "Do you have any questions?"],
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Like / Love / Hate + ING",
              description: "Review",
              content: ["I love traveling.", "She hates cooking.", "They like watching TV."],
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Find the mistake",
              description: "Mixed concepts",
              content: ["1. I am always wake up early.", "2. Does you like pizza?", "3. I like play video games."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-10",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado (Repaso)",
              type: 'emoji-game',
              content: ['🗣️ ➕ 🇬🇧 ➕ 💯'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I speak English 100%!", "I hate English.", "I don't know."],
              correctOptionIndex: 0
            }
          ],
          action: "Ayudar a corregir los errores en 'Find the mistake'."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Evaluación formativa.",
          slides: [
            {
              id: "Diapositiva 10",
              title: "Final Role Play",
              description: "Simulación Integrada",
              content: ["Talk about your routine, what you eat, and what you love doing in your free time."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 11",
              title: "Fun Quiz! (1/4)",
              description: "Mix",
              content: ["She ______ a shower at 7 AM."],
              options: ["take", "takes", "taking"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (2/4)",
              description: "Mix",
              content: ["______ you have any brothers?"],
              options: ["Does", "Are", "Do"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (3/4)",
              description: "Mix",
              content: ["He hates ______ early."],
              options: ["waking up", "wake up", "wakes up"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (4/4)",
              description: "Mix",
              content: ["We don't have ______ water."],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play, prestando atención a la 's' de tercera persona."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre del nivel.",
          slides: [
            {
              id: "Diapositiva 15",
              title: "Basic 1 Complete!",
              description: "Congratulations!",
              content: ["You are ready for Basic 2!", "Great job!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 16",
              title: "Prepare for Evaluation",
              description: "Next class",
              content: ["Next time, we will have a short oral evaluation.", "Don't worry, just practice what we learned."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            }
          ],
          action: "Explicar la dinámica de la evaluación oral de la siguiente clase."
        }
      ]
    }`
};

let c = fs.readFileSync('src/data/curriculum.ts', 'utf8');

for (let id of Object.keys(replacements)) {
    let start = c.indexOf(`id: "${id}"`);
    if (start === -1) {
        console.log('Not found:', id);
        continue;
    }
    let braceStart = start;
    while (braceStart > 0 && c[braceStart] !== '{') braceStart--;
    
    let braceCount = 0;
    let end = -1;
    let inString = false;
    let escape = false;

    for (let i = braceStart; i < c.length; i++) {
        if (escape) { escape = false; continue; }
        if (c[i] === '\\\\') { escape = true; continue; }
        if (c[i] === '"') { inString = !inString; continue; }
        if (!inString) {
            if (c[i] === '{') braceCount++;
            if (c[i] === '}') {
                braceCount--;
                if (braceCount === 0) { end = i + 1; break; }
            }
        }
    }
    c = c.substring(0, braceStart) + replacements[id] + c.substring(end);
}

fs.writeFileSync('src/data/curriculum.ts', c, 'utf8');
console.log('Replaced classes 5 to 10 in Basic 1.');
