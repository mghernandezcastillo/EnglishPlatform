import fs from 'fs';

const customs = JSON.parse(fs.readFileSync('customs.json', 'utf8'));

let titleTopics = [
    { match: /saludos|despedidas/i, concept: "Greetings & Farewells", ex1: "Hello, Hi, Good morning", ex2: "Goodbye, See you later", vocab: "Greetings, Farewells, Formal, Informal" },
    { match: /alfabeto/i, concept: "The Alphabet", ex1: "A B C D E", ex2: "F G H I J", vocab: "Spell, Letter, Name, Email" },
    { match: /profesiones|nacionalidades/i, concept: "Professions & Nationalities", ex1: "I am a teacher.", ex2: "She is from Mexico.", vocab: "Teacher, Doctor, Mexican, Canadian" },
    { match: /rutinas/i, concept: "Daily Routines", ex1: "I get up at 7 AM.", ex2: "I work from 9 to 5.", vocab: "Wake up, Work, Eat, Sleep" },
    { match: /compras|precios/i, concept: "Shopping & Prices", ex1: "How much is it?", ex2: "It is $10.", vocab: "Money, Dollar, Buy, Sell" },
    { match: /contables|some, any/i, concept: "Countable & Uncountable", ex1: "I need some water.", ex2: "Do you have any apples?", vocab: "Some, Any, A lot of, Many" },
    { match: /gustos|like/i, concept: "Likes & Preferences", ex1: "I like pizza.", ex2: "I would like a coffee.", vocab: "Like, Love, Hate, Prefer" },
    { match: /imperativos/i, concept: "Imperatives", ex1: "Open the door, please.", ex2: "Don't turn left.", vocab: "Open, Close, Turn, Stop" },
    { match: /pedir y ofrecer/i, concept: "Polite Requests", ex1: "Can I help you?", ex2: "Could you repeat that?", vocab: "Can, Could, May, Help" },
    { match: /llamadas/i, concept: "Phone Calls", ex1: "Hello, this is John.", ex2: "Can I leave a message?", vocab: "Call, Message, Answer, Hang up" },
    { match: /proyecto|repaso/i, concept: "Review & Practice", ex1: "Let's review the main topics.", ex2: "Practice what we learned.", vocab: "Review, Practice, Exercise, Test" },
    { match: /can.*can't/i, concept: "Can / Can't for Abilities", ex1: "I can swim.", ex2: "I can't fly.", vocab: "Can, Cannot, Ability, Permission" },
    { match: /have to/i, concept: "Obligations (Have to)", ex1: "I have to work today.", ex2: "You don't have to go.", vocab: "Have to, Must, Obligation, Need" },
    { match: /ropa/i, concept: "Clothes & Appearance", ex1: "She is wearing a red shirt.", ex2: "He is tall and slim.", vocab: "Shirt, Pants, Tall, Short" },
    { match: /lugares/i, concept: "Places & Transport", ex1: "The bank is next to the park.", ex2: "I go by bus.", vocab: "Bank, Park, Bus, Train" },
    { match: /clima/i, concept: "Weather", ex1: "It is sunny today.", ex2: "It is raining.", vocab: "Sunny, Rainy, Cold, Hot" },
    { match: /servicio básico/i, concept: "Basic Customer Service", ex1: "How can I help you?", ex2: "We are open from 9 to 5.", vocab: "Service, Open, Close, Help" },
    { match: /was.*were/i, concept: "Past of To Be (Was/Were)", ex1: "I was at home.", ex2: "They were happy.", vocab: "Was, Were, Yesterday, Last night" },
    { match: /biografías/i, concept: "Biographies", ex1: "He was born in 1990.", ex2: "She studied science.", vocab: "Born, Study, Work, Live" },
    { match: /viajes/i, concept: "Travel & Vacations", ex1: "I went to Paris.", ex2: "We visited the museum.", vocab: "Travel, Visit, Go, Vacation" },
    { match: /conectores/i, concept: "Connectors", ex1: "First, I woke up.", ex2: "Then, I had breakfast.", vocab: "First, Then, After that, Finally" },
    { match: /opiniones/i, concept: "Giving Opinions", ex1: "I think it is great.", ex2: "In my opinion, it is bad.", vocab: "Think, Believe, Opinion, Idea" },
    { match: /primer condicional/i, concept: "First Conditional", ex1: "If it rains, I will stay home.", ex2: "If I study, I will pass.", vocab: "If, Will, Rain, Study" },
    { match: /modales/i, concept: "Modal Verbs", ex1: "You should study more.", ex2: "May I come in?", vocab: "Should, Must, May, Might" },
    { match: /comparativos/i, concept: "Comparatives & Superlatives", ex1: "This car is faster.", ex2: "It is the best book.", vocab: "Better, Worse, Faster, Biggest" },
    { match: /too, enough/i, concept: "Too & Enough", ex1: "It is too hot.", ex2: "I have enough money.", vocab: "Too, Enough, Very, So" },
    { match: /quejas/i, concept: "Complaints & Solutions", ex1: "I have a problem with my order.", ex2: "Let me fix that for you.", vocab: "Problem, Solution, Order, Fix" },
    { match: /correos/i, concept: "Emails & Messages", ex1: "Dear Mr. Smith,", ex2: "Best regards,", vocab: "Email, Send, Receive, Attach" },
    { match: /present perfect/i, concept: "Present Perfect", ex1: "I have already eaten.", ex2: "Have you ever been to Rome?", vocab: "Have, Has, Already, Yet" },
    { match: /gerundios/i, concept: "Gerunds & Infinitives", ex1: "I want to go.", ex2: "I enjoy reading.", vocab: "Want, Need, Enjoy, Like" },
    { match: /phrasal/i, concept: "Phrasal Verbs", ex1: "Turn on the light.", ex2: "Give up smoking.", vocab: "Turn on, Turn off, Give up, Look for" },
    { match: /pronunciación/i, concept: "Pronunciation", ex1: "Intonation", ex2: "Connected Speech", vocab: "Listen, Speak, Intonation, Rhythm" },
    { match: /condicionales/i, concept: "All Conditionals", ex1: "If I had known, I would have gone.", ex2: "If I were you, I'd stay.", vocab: "If, Would, Had, Will" },
    { match: /reported speech/i, concept: "Reported Speech", ex1: "She said that she was happy.", ex2: "He asked me what time it was.", vocab: "Say, Tell, Ask, Report" },
    { match: /relative clauses/i, concept: "Relative Clauses", ex1: "The man who called you is here.", ex2: "The book which I bought.", vocab: "Who, Which, That, Where" },
    { match: /negociación/i, concept: "Negotiation", ex1: "Can you offer a discount?", ex2: "We have a deal.", vocab: "Deal, Offer, Price, Terms" },
    { match: /future continuous/i, concept: "Future Continuous & Perfect", ex1: "I will be working at 5 PM.", ex2: "I will have finished by tomorrow.", vocab: "Will be, Will have, Future, Time" },
    { match: /inversiones/i, concept: "Inversions", ex1: "Never have I seen such a thing.", ex2: "Rarely do we go out.", vocab: "Never, Rarely, Seldom, Little" },
    { match: /cleft/i, concept: "Cleft Sentences", ex1: "What I mean is...", ex2: "It was John who called.", vocab: "What, It, Focus, Emphasis" },
    { match: /hedging/i, concept: "Diplomatic Language", ex1: "It seems that there is a problem.", ex2: "I would suggest calling them.", vocab: "Seem, Appear, Suggest, Perhaps" },
    { match: /discurso/i, concept: "Persuasive Speech", ex1: "I strongly believe that...", ex2: "We must act now.", vocab: "Persuade, Believe, Act, Future" },
    { match: /debate|argument/i, concept: "Debate & Arguments", ex1: "On the other hand...", ex2: "I completely disagree.", vocab: "Agree, Disagree, Point, Argument" },
    { match: /storytelling/i, concept: "Storytelling", ex1: "Once upon a time...", ex2: "Suddenly, the lights went out.", vocab: "Story, Tell, Suddenly, End" },
    { match: /negocios/i, concept: "Business English", ex1: "Let's get down to business.", ex2: "We need a new strategy.", vocab: "Business, Strategy, Market, Profit" },
    { match: /medios|cultura/i, concept: "Media & Culture", ex1: "Did you read the news?", ex2: "The movie was amazing.", vocab: "Media, News, Culture, Movie" },
    { match: /humor/i, concept: "Humor & Nuance", ex1: "That's hilarious!", ex2: "Are you kidding me?", vocab: "Joke, Funny, Laugh, Serious" },
];

const imgList = [
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800"
];
function rnd() { return imgList[Math.floor(Math.random()*imgList.length)]; }

function buildGenericClass(id, title) {
    let foundTopic = titleTopics.find(t => t.match.test(title));
    if (!foundTopic) foundTopic = { concept: "Important Topic", ex1: "Example A", ex2: "Example B", vocab: "Word 1, Word 2, Word 3" };
    
    return `{
      id: "${id}",
      title: "${title}",
      duration: "60 minutos",
      objective: "Manejar correctamente ${foundTopic.concept}.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with ${foundTopic.concept}.", imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente ${foundTopic.concept}.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "${foundTopic.concept}", description: "Introduction to ${foundTopic.concept}.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "${foundTopic.vocab}", content: ["${foundTopic.vocab.split(',').join('", "')}"], imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: ${foundTopic.ex1}"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "${rnd()}", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "${rnd()}" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }`;
}

const levels = [
  { id: "basic-zero", title: "Basic Zero", desc: "Para estudiantes sin experiencia previa. Sentaremos las bases del idioma desde cero.",
    classes: [
      { id: "c-bz-1", title: "" },
      { id: "c-bz-2", title: "" },
      { id: "c-bz-3", title: "" },
      { id: "c-bz-4", title: "" },
      { id: "c-bz-5", title: "" },
      { id: "c-bz-6", title: "" },
      { id: "c-bz-7", title: "" },
      { id: "c-bz-8", title: "" },
      { id: "c-bz-9", title: "" },
      { id: "c-bz-10", title: "" },
      { id: "c-adults-basic-zero-11", title: "Clase 11: Saludos, despedidas y conversación de supervivencia" },
      { id: "c-adults-basic-zero-12", title: "Clase 12: El alfabeto y deletreo de nombres" },
      { id: "c-adults-basic-zero-13", title: "Clase 13: Países, nacionalidades y procedencia" },
      { id: "c-adults-basic-zero-14", title: "Clase 14: Profesiones y ocupaciones comunes" },
      { id: "c-adults-basic-zero-15", title: "Clase 15: Vocabulario de la familia y posesivos" },
      { id: "c-adults-basic-zero-16", title: "Clase 16: Repaso General de Basic Zero" }
    ],
    eval: "oe-bz-1"
  },
  { id: "basic-1", title: "Basic 1", desc: "Comienza a comunicarte. Aprenderás a hablar sobre tu vida diaria y entorno.",
    classes: [
      { id: "c-b1-1", title: "" },
      { id: "c-b1-2", title: "" },
      { id: "c-b1-3", title: "" },
      { id: "c-b1-4", title: "" },
      { id: "c-adults-basic-1-5", title: "Clase 5: Rutinas diarias y la hora" },
      { id: "c-adults-basic-1-6", title: "Clase 6: Adverbios de frecuencia (always, sometimes, never)" },
      { id: "c-adults-basic-1-7", title: "Clase 7: Comidas, bebidas y vocabulario de restaurantes" },
      { id: "c-adults-basic-1-8", title: "Clase 8: Sustantivos contables e incontables (some, any)" },
      { id: "c-adults-basic-1-9", title: "Clase 9: Gustos y preferencias (like, love, hate + ing)" },
      { id: "c-adults-basic-1-10", title: "Clase 10: Repaso General de Basic 1" }
    ],
    eval: "oe-b1-1"
  },
  { id: "basic-2", title: "Basic 2", desc: "Describe acciones en progreso y empieza a explorar el pasado.",
    classes: [
      { id: "c-b2-1", title: "" },
      { id: "c-b2-2", title: "" },
      { id: "c-b2-3", title: "" },
      { id: "c-b2-4", title: "" },
      { id: "c-adults-basic-2-5", title: "Clase 5: Verbos de estado vs. acción en presente continuo" },
      { id: "c-adults-basic-2-6", title: "Clase 6: Clima y estaciones del año" },
      { id: "c-adults-basic-2-7", title: "Clase 7: Imperativos para dar instrucciones" },
      { id: "c-adults-basic-2-8", title: "Clase 8: Pedir y ofrecer direcciones en la calle" },
      { id: "c-adults-basic-2-9", title: "Clase 9: Conversaciones telefónicas básicas" },
      { id: "c-adults-basic-2-10", title: "Clase 10: Repaso de presente simple vs. continuo" },
      { id: "c-adults-basic-2-11", title: "Clase 11: Proyecto Final de Nivel" }
    ],
    eval: "oe-b2-1"
  },
  { id: "basic-3", title: "Basic 3", desc: "Expresa habilidades, obligaciones y eventos pasados.",
    classes: [
      { id: "c-adults-basic-3-1", title: "Clase 1: Habilidades y posibilidades (Can / Can't)" },
      { id: "c-adults-basic-3-2", title: "Clase 2: Permisos y peticiones (Can I...?, Could you...?)" },
      { id: "c-adults-basic-3-3", title: "Clase 3: Obligaciones (Have to / Don't have to)" },
      { id: "c-adults-basic-3-4", title: "Clase 4: Ropa, colores y descripciones físicas" },
      { id: "c-adults-basic-3-5", title: "Clase 5: Lugares en la ciudad y transporte" },
      { id: "c-adults-basic-3-6", title: "Clase 6: Pasado del verbo To Be (was/were)" },
      { id: "c-adults-basic-3-7", title: "Clase 7: Hablando de tu infancia y recuerdos" },
      { id: "c-adults-basic-3-8", title: "Clase 8: Biografías de personas famosas" },
      { id: "c-adults-basic-3-9", title: "Clase 9: Fechas, años y meses" },
      { id: "c-adults-basic-3-10", title: "Clase 10: Repaso General de Basic 3" }
    ],
    eval: "oe-b3-1"
  },
  { id: "basic-4", title: "Basic 4", desc: "Manejo completo del pasado y planificación del futuro.",
    classes: [
      { id: "c-adults-basic-4-1", title: "Clase 1: Pasado Simple - Verbos Regulares" },
      { id: "c-adults-basic-4-2", title: "Clase 2: Pasado Simple - Verbos Irregulares" },
      { id: "c-adults-basic-4-3", title: "Clase 3: Formando preguntas y negaciones en pasado" },
      { id: "c-adults-basic-4-4", title: "Clase 4: Vocabulario de viajes y vacaciones" },
      { id: "c-adults-basic-4-5", title: "Clase 5: Contando anécdotas usando conectores (first, then, finally)" },
      { id: "c-adults-basic-4-6", title: "Clase 6: Expresando planes futuros con Going to" },
      { id: "c-adults-basic-4-7", title: "Clase 7: Predicciones y decisiones rápidas con Will" },
      { id: "c-adults-basic-4-8", title: "Clase 8: Diferencias entre Will y Going to" },
      { id: "c-adults-basic-4-9", title: "Clase 9: Dando opiniones y mostrando acuerdo/desacuerdo" },
      { id: "c-adults-basic-4-10", title: "Clase 10: Preparación para Nivel Intermedio" }
    ],
    eval: "oe-b4-1"
  },
  { id: "inter", title: "Intermediate", desc: "Fluidez para conversaciones más complejas y vida profesional.",
    classes: [
      { id: "c-adults-inter-1", title: "Clase 1: Repaso de tiempos verbales básicos" },
      { id: "c-adults-inter-2", title: "Clase 2: Primer Condicional (situaciones reales)" },
      { id: "c-adults-inter-3", title: "Clase 3: Verbos modales de consejo (Should / Ought to)" },
      { id: "c-adults-inter-4", title: "Clase 4: Verbos modales de posibilidad (May / Might / Could)" },
      { id: "c-adults-inter-5", title: "Clase 5: Comparativos y superlativos" },
      { id: "c-adults-inter-6", title: "Clase 6: Describiendo exceso y suficiencia (too / enough)" },
      { id: "c-adults-inter-7", title: "Clase 7: Vocabulario de trabajo y oficina" },
      { id: "c-adults-inter-8", title: "Clase 8: Redactando correos electrónicos formales" },
      { id: "c-adults-inter-9", title: "Clase 9: Present Perfect para experiencias de vida" },
      { id: "c-adults-inter-10", title: "Clase 10: Diferencias entre Pasado Simple y Present Perfect" },
      { id: "c-adults-inter-11", title: "Clase 11: Gerundios e infinitivos después de verbos" },
      { id: "c-adults-inter-12", title: "Clase 12: Introducción a los Phrasal Verbs más usados" }
    ],
    eval: "oe-i-1"
  },
  { id: "advanced", title: "Advanced", desc: "Perfecciona tu gramática y amplía tu vocabulario para expresarte como nativo.",
    classes: [
      { id: "c-adults-advanced-1", title: "Clase 1: Pronunciación: Connected speech y entonación" },
      { id: "c-adults-advanced-2", title: "Clase 2: Segundo Condicional (situaciones hipotéticas)" },
      { id: "c-adults-advanced-3", title: "Clase 3: Tercer Condicional (arrepentimientos del pasado)" },
      { id: "c-adults-advanced-4", title: "Clase 4: Reported Speech (estilo indirecto)" },
      { id: "c-adults-advanced-5", title: "Clase 5: Relative Clauses (who, which, that, where)" },
      { id: "c-adults-advanced-6", title: "Clase 6: Vocabulario avanzado de negocios y negociación" },
      { id: "c-adults-advanced-7", title: "Clase 7: Resolviendo problemas y quejas de clientes" },
      { id: "c-adults-advanced-8", title: "Clase 8: Future Continuous y Future Perfect" },
      { id: "c-adults-advanced-9", title: "Clase 9: Phrasal verbs avanzados en contexto" },
      { id: "c-adults-advanced-10", title: "Clase 10: Repaso avanzado" }
    ],
    eval: "oe-a-1"
  },
  { id: "masters", title: "Masters", desc: "El nivel máximo de fluidez. Dominio total del idioma en cualquier situación.",
    classes: [
      { id: "c-adults-masters-1", title: "Clase 1: Idioms y expresiones idiomáticas" },
      { id: "c-adults-masters-2", title: "Clase 2: Inversiones para énfasis formal" },
      { id: "c-adults-masters-3", title: "Clase 3: Cleft sentences para resaltar información" },
      { id: "c-adults-masters-4", title: "Clase 4: Lenguaje diplomático y atenuadores (Hedging)" },
      { id: "c-adults-masters-5", title: "Clase 5: Preparando presentaciones de alto impacto" },
      { id: "c-adults-masters-6", title: "Clase 6: Discurso persuasivo y argumentación" },
      { id: "c-adults-masters-7", title: "Clase 7: Debates sobre temas complejos" },
      { id: "c-adults-masters-8", title: "Clase 8: Storytelling en entornos profesionales" },
      { id: "c-adults-masters-9", title: "Clase 9: Analizando artículos de opinión y noticias" },
      { id: "c-adults-masters-10", title: "Clase 10: Proyecto Final Masters" }
    ],
    eval: "oe-m-1"
  }
];

let finalOutput = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = [\n";

for (let lvl of levels) {
    finalOutput += "  {\n";
    finalOutput += '    id: "' + lvl.id + '",\n';
    finalOutput += '    title: "' + lvl.title + '",\n';
    finalOutput += '    duration: "1 mes",\n';
    finalOutput += '    objective: "' + lvl.desc + '",\n';
    finalOutput += '    mcfrEquivalent: "A1",\n';
    finalOutput += '    classes: [\n';
    for (let i = 0; i < lvl.classes.length; i++) {
        let c = lvl.classes[i];
        if (customs[c.id]) {
            finalOutput += customs[c.id];
        } else {
            finalOutput += buildGenericClass(c.id, c.title);
        }
        if (i < lvl.classes.length - 1) finalOutput += ",\n";
        else finalOutput += "\n";
    }
    finalOutput += '    ],\n';
    finalOutput += '    oralEvaluation: [\n';
    finalOutput += '      { question: "Evaluación Oral", topic: "Evaluación del nivel." }\n';
    finalOutput += '    ]\n';
    finalOutput += '  },\n';
}

finalOutput = finalOutput.replace(/,\n$/, '\n');
finalOutput += '];\n';

fs.writeFileSync('src/data/curriculum.ts', finalOutput, 'utf8');
console.log('Done!');
