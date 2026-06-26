import fs from 'fs';

const content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const newClassesLevel1 = `
    ,
    {
      id: "c-adults-basic-zero-11",
      title: "Clase 11: Saludos, despedidas y conversación de supervivencia",
      duration: "60 minutos",
      objective: "Manejar saludos y despedidas básicas en contextos formales e informales.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y presentarse.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello, Hi, Good morning.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Practicar saludos con compañeros."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Diferenciar formal de informal.",
          slides: [
            { id: "Diapositiva 2", title: "Formal vs Informal", description: "Good afternoon vs What's up?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Clasificar saludos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Aplicar el vocabulario.",
          slides: [
            { id: "Diapositiva 3", title: "Roleplay", description: "Greet your teacher.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Roleplay guiado."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar la clase.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Grabar un video saludando de 3 formas.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Explicar la tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-12",
      title: "Clase 12: Alfabeto, deletreo, correos electrónicos y datos personales",
      duration: "60 minutos",
      objective: "Deletrear información personal correctamente.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Repasar The Alphabet.",
          slides: [
            { id: "Diapositiva 1", title: "The Alphabet", description: "A-B-C-D...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Cantar o recitar el alfabeto."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Vocabulario de emails y símbolos.",
          slides: [
            { id: "Diapositiva 2", title: "Emails", description: "At (@), Dot (.), Underscore (_)", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Aprender a decir el email."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Deletrear nombres.",
          slides: [
            { id: "Diapositiva 3", title: "Spell it", description: "How do you spell your last name?", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Juego de deletreo."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar la clase.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Grabar un video deletreando tu nombre y email.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Explicar la tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-13",
      title: "Clase 13: Profesiones, nacionalidades y preguntas con to be",
      duration: "60 minutos",
      objective: "Hablar de ocupaciones y origen.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Introducir países.",
          slides: [
            { id: "Diapositiva 1", title: "Where are you from?", description: "Countries and Flags.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Identificar banderas."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Profesiones y verbo to be en preguntas.",
          slides: [
            { id: "Diapositiva 2", title: "Jobs", description: "Doctor, Teacher, Engineer. Are you a doctor?", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Practicar preguntas cerradas."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Roleplay de entrevistas.",
          slides: [
            { id: "Diapositiva 3", title: "Interview", description: "Ask your partner.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Entrevistas en parejas."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar la clase.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Grabar video sobre 3 familiares (edad, profesión).", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Asignar tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-14",
      title: "Clase 14: Rutinas muy básicas con have, go, work, study",
      duration: "60 minutos",
      objective: "Expresar acciones diarias simples.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Introducir verbos de acción.",
          slides: [
            { id: "Diapositiva 1", title: "Daily Verbs", description: "Eat, Drink, Sleep.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Mímica de verbos."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Estructuras afirmativas básicas.",
          slides: [
            { id: "Diapositiva 2", title: "I go to work", description: "I have breakfast, I go to school, I study English.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Formar oraciones con imágenes."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Compartir rutinas.",
          slides: [
            { id: "Diapositiva 3", title: "My Day", description: "Tell us about your morning.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Presentaciones cortas."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar la clase.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Grabar video describiendo 5 cosas que haces al día.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Asignar tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-15",
      title: "Clase 15: Compras: precios, dinero, How much is it?",
      duration: "60 minutos",
      objective: "Preguntar precios y realizar compras simuladas.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Repasar números del 1 al 100.",
          slides: [
            { id: "Diapositiva 1", title: "Numbers", description: "10, 20, 50, 100...", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Dictado de números."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Preguntar por precios.",
          slides: [
            { id: "Diapositiva 2", title: "Shopping", description: "How much is it? It's $20.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Practicar diálogo de tienda."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Roleplay de compras.",
          slides: [
            { id: "Diapositiva 3", title: "The Store", description: "Buy and sell items.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Simulación: Cajero y cliente."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar la clase.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Grabar video simulando comprar 3 objetos.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Asignar tarea."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-16",
      title: "Clase 16: Repaso integral y conversación guiada del nivel",
      duration: "60 minutos",
      objective: "Consolidar todo lo aprendido en el nivel.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Activación de vocabulario.",
          slides: [
            { id: "Diapositiva 1", title: "Brainstorming", description: "Words we know.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" }
          ],
          action: "Lluvia de ideas."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Aclarar dudas de gramática.",
          slides: [
            { id: "Diapositiva 2", title: "Q&A", description: "Ask the teacher.", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Revisar errores comunes."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Conversación fluida.",
          slides: [
            { id: "Diapositiva 3", title: "Let's talk", description: "Free conversation based on prompts.", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" }
          ],
          action: "Charlas en grupos pequeños."
        },
        {
          id: "s4",
          title: "4. Homework & Wrap-up",
          duration: "15 minutos",
          objective: "Cerrar el nivel 1.",
          slides: [
            { id: "Diapositiva 4", title: "Homework", description: "Felicidades! Prepárate para el examen oral.", type: "video-task", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Despedida del nivel."
        }
      ]
    }
`;

const match = content.match(/title:\s*"Basic Zero"[\s\S]*?(\n\s*],\n\s*oralEvaluation:\s*\[)/);

if (match) {
    const insertPos = match.index + match[0].length - match[1].length;
    const newContent = content.slice(0, insertPos) + newClassesLevel1 + content.slice(insertPos);
    fs.writeFileSync('src/data/curriculum.ts', newContent);
    console.log("Successfully added Adult classes for Level 1!");
} else {
    console.error("Could not find the insertion point for Level 1");
}
