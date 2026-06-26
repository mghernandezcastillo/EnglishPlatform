import { CurriculumLevel } from '../types';
import imgTeenSocial from '../assets/images/teens_social_welcome_1782228078865.jpg';
import imgTeenHobbies from '../assets/images/teens_cool_hobbies_1782228092845.jpg';
import imgTeenWarmup from '../assets/images/teens_energy_warmup_1782228109142.jpg';
import imgTeenAssessment from '../assets/images/teens_assessment_welcome_1782228127925.jpg';
import imgTeenGreeting from '../assets/images/teen_greeting_1782228957842.jpg';
import imgTeenLifestyle from '../assets/images/teen_lifestyle_1782228974065.jpg';

const images = [imgTeenSocial, imgTeenHobbies, imgTeenWarmup, imgTeenAssessment, imgTeenGreeting, imgTeenLifestyle];
const getImg = (i: number) => images[i % images.length];

export const curriculumTeensLevels: CurriculumLevel[] = [
  {
    id: "teens-basic-zero",
    title: "Level 0 - Basic Zero (Teen Startup)",
    duration: "2 meses",
    objective: "Aprender lo más básico del inglés para adolescentes.",
    mcfrEquivalent: "Pre-A1",
    classes: [
      {
        id: "c-teens-basic-zero-1",
        title: "Clase 1: Hello & Introductions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Hello & Introductions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Greetings & Intros.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Hello & Introductions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Greetings & Intros", description: "Introduction to Greetings & Intros.", content: ["Hello, my name is Alex.", "Nice to meet you!"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Hello, my name is Alex.", "Nice to meet you!"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Hello, Hi, Name, Meet", content: ["Hello", " Hi", " Name", " Meet"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Hello, my name is Alex.", "Nice to meet you!"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Hello, my name is Alex.", "Nice to meet you!"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Hello, my name is Alex."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-2",
        title: "Clase 2: Numbers, Ages & Birthdays",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Numbers, Ages & Birthdays.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Numbers & Ages.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Numbers, Ages & Birthdays.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Numbers & Ages", description: "Introduction to Numbers & Ages.", content: ["I am 15 years old.", "My birthday is in May."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I am 15 years old.", "My birthday is in May."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Numbers, Age, Years, Birthday", content: ["Numbers", " Age", " Years", " Birthday"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I am 15 years old.", "My birthday is in May."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I am 15 years old.", "My birthday is in May."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I am 15 years old."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-3",
        title: "Clase 3: My Body & Actions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Body & Actions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Body & Actions.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Body & Actions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Body & Actions", description: "Introduction to Body & Actions.", content: ["I can touch my head.", "She is running fast."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I can touch my head.", "She is running fast."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Head, Arms, Run, Jump", content: ["Head", " Arms", " Run", " Jump"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I can touch my head.", "She is running fast."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I can touch my head.", "She is running fast."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I can touch my head."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-4",
        title: "Clase 4: My Favorite Gadgets & Tech",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Favorite Gadgets & Tech.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Gadgets & Tech.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Favorite Gadgets & Tech.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Gadgets & Tech", description: "Introduction to Gadgets & Tech.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Phone, Tablet, Screen, Game", content: ["Phone", " Tablet", " Screen", " Game"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I love my new phone."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-5",
        title: "Clase 5: Yummy Snacks & Drinks",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Yummy Snacks & Drinks.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Snacks & Drinks.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Yummy Snacks & Drinks.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Snacks & Drinks", description: "Introduction to Snacks & Drinks.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Snack, Drink, Water, Chips", content: ["Snack", " Drink", " Water", " Chips"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I like chips and soda."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-6",
        title: "Clase 6: Shapes & Patterns",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Shapes & Patterns.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Shapes & Patterns.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-7",
        title: "Clase 7: School Subjects & Supplies",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of School Subjects & Supplies.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with School & Backpacks.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of School Subjects & Supplies.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "School & Backpacks", description: "Introduction to School & Backpacks.", content: ["I have two pens in my bag.", "My favorite subject is math."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I have two pens in my bag.", "My favorite subject is math."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "School, Bag, Pen, Book", content: ["School", " Bag", " Pen", " Book"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I have two pens in my bag.", "My favorite subject is math."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I have two pens in my bag.", "My favorite subject is math."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I have two pens in my bag."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-8",
        title: "Clase 8: Pets & Animal Friends",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Pets & Animal Friends.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Family & Pets.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Pets & Animal Friends.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Family & Pets", description: "Introduction to Family & Pets.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Brother, Sister, Dog, Cat", content: ["Brother", " Sister", " Dog", " Cat"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: This is my brother."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-9",
        title: "Clase 9: My Hobbies & Free Time",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Hobbies & Free Time.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Sports & Hobbies.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Hobbies & Free Time.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Sports & Hobbies", description: "Introduction to Sports & Hobbies.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Soccer, Draw, Play, Hobby", content: ["Soccer", " Draw", " Play", " Hobby"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I play soccer every day."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-10",
        title: "Clase 10: Family & Friends",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Family & Friends.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Family & Pets.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Family & Friends.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Family & Pets", description: "Introduction to Family & Pets.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Brother, Sister, Dog, Cat", content: ["Brother", " Sister", " Dog", " Cat"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: This is my brother."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-11",
        title: "Clase 11: Alfabeto, deletreo y usernames",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Alfabeto, deletreo y usernames.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(56) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(57) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Alfabeto, deletreo y usernames.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(58) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(59) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(60) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(61) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(62) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(63) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(64) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(65) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(70) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(73) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(74) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-12",
        title: "Clase 12: Presentarse: edad, curso, ciudad, gustos y redes sociales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Presentarse: edad, curso, ciudad, gustos y redes sociales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(61) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(62) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Presentarse: edad, curso, ciudad, gustos y redes sociales.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(63) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(64) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(65) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(66) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(67) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(68) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(69) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(70) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(75) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(78) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(79) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-13",
        title: "Clase 13: Ropa, estilo personal y apariencia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ropa, estilo personal y apariencia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(66) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(67) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Ropa, estilo personal y apariencia.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(68) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(69) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(70) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(71) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(72) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(73) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(74) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(75) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(80) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(83) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(84) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-14",
        title: "Clase 14: Escuela, materias y objetos del salón",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Escuela, materias y objetos del salón.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(71) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(72) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Escuela, materias y objetos del salón.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(73) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(74) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(75) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(76) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(77) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(78) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(79) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(80) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(85) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(88) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(89) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-15",
        title: "Clase 15: Rutina diaria básica",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Rutina diaria básica.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(76) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(77) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Rutina diaria básica.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(78) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(79) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(80) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(81) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(82) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(83) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(84) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(85) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(90) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(93) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(94) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-16",
        title: "Clase 16: Videojuegos, música y hobbies (Repaso)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Videojuegos, música y hobbies (Repaso).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Sports & Hobbies.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(81) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(82) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Videojuegos, música y hobbies (Repaso).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(83) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Sports & Hobbies", description: "Introduction to Sports & Hobbies.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(84) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(85) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Soccer, Draw, Play, Hobby", content: ["Soccer", " Draw", " Play", " Hobby"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(86) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(87) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(88) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I play soccer every day."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(89) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(90) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(95) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(98) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(99) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-1",
    title: "Level 1 - Basic 1 (Teen Explorer)",
    duration: "2 meses",
    objective: "Ampliar vocabulario con familia, emociones, ropa, clima y tecnología.",
    mcfrEquivalent: "Pre-A1+",
    classes: [
      {
        id: "c-teens-basic-1-1",
        title: "Clase 1: Family Tree & Feelings",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Family Tree & Feelings.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Family & Pets.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Family Tree & Feelings.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Family & Pets", description: "Introduction to Family & Pets.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Brother, Sister, Dog, Cat", content: ["Brother", " Sister", " Dog", " Cat"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: This is my brother."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-2",
        title: "Clase 2: Fast Food & Healthy Choices",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Fast Food & Healthy Choices.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Food & Cooking.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Fast Food & Healthy Choices.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Food & Cooking", description: "Introduction to Food & Cooking.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Food, Cook, Eat, Delicious", content: ["Food", " Cook", " Eat", " Delicious"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I can cook pasta."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-3",
        title: "Clase 3: Fashion, Clothes & Weather",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Fashion, Clothes & Weather.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Clothes & Style.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Fashion, Clothes & Weather.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Clothes & Style", description: "Introduction to Clothes & Style.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Hoodie, Shoes, Cool, Wear", content: ["Hoodie", " Shoes", " Cool", " Wear"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I am wearing a cool hoodie."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-4",
        title: "Clase 4: Nature, Parks & Outdoors",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Nature, Parks & Outdoors.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Nature & Environment.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Nature, Parks & Outdoors.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Nature & Environment", description: "Introduction to Nature & Environment.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Nature, Tree, Recycle, Earth", content: ["Nature", " Tree", " Recycle", " Earth"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: The forest is beautiful."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-5",
        title: "Clase 5: Planes de fin de semana con will y going to",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Planes de fin de semana con will y going to.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Planes de fin de semana con will y going to.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-6",
        title: "Clase 6: Invitaciones, aceptar y rechazar planes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Invitaciones, aceptar y rechazar planes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Invitaciones, aceptar y rechazar planes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-7",
        title: "Clase 7: Compras, precios y ropa",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Compras, precios y ropa.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Compras, precios y ropa.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-8",
        title: "Clase 8: Comida, snacks y pedidos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Comida, snacks y pedidos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Snacks & Drinks.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Comida, snacks y pedidos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Snacks & Drinks", description: "Introduction to Snacks & Drinks.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Snack, Drink, Water, Chips", content: ["Snack", " Drink", " Water", " Chips"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I like chips and soda."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-9",
        title: "Clase 9: Tecnología, aplicaciones y redes sociales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Tecnología, aplicaciones y redes sociales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Tecnología, aplicaciones y redes sociales.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-10",
        title: "Clase 10: Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-2",
    title: "Level 2 - Basic 2 (Teen Adventurer)",
    duration: "2 meses",
    objective: "Describir habilidades, reglas escolares, deportes, ciudad y entretenimiento.",
    mcfrEquivalent: "A1",
    classes: [
      {
        id: "c-teens-basic-2-1",
        title: "Clase 1: Animals & Habitats",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Animals & Habitats.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Animals & Habitats.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-2",
        title: "Clase 2: My Room & Dream House",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Room & Dream House.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Room & Dream House.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-3",
        title: "Clase 3: Vehicles, Transport & City",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Vehicles, Transport & City.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Vehicles, Transport & City.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-4",
        title: "Clase 4: Dream Jobs & Professions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Dream Jobs & Professions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Dream Jobs & Professions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-5",
        title: "Clase 5: Habilidades con can / can’t",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Habilidades con can / can’t.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Habilidades con can / can’t.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-6",
        title: "Clase 6: Reglas escolares con must, have to, should",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reglas escolares con must, have to, should.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reglas escolares con must, have to, should.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-7",
        title: "Clase 7: Deportes, salud y hábitos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Deportes, salud y hábitos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Deportes, salud y hábitos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-8",
        title: "Clase 8: Ciudad, transporte y lugares para salir",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ciudad, transporte y lugares para salir.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Ciudad, transporte y lugares para salir.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-9",
        title: "Clase 9: Describir series, películas, juegos y música",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Describir series, películas, juegos y música.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Describir series, películas, juegos y música.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-10",
        title: "Clase 10: Conversación actual, rutinas y Repaso oral por retos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conversación actual, rutinas y Repaso oral por retos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conversación actual, rutinas y Repaso oral por retos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-3",
    title: "Level 3 - Basic 3 (Teen Champion)",
    duration: "2 meses",
    objective: "Hablar del pasado, recuerdos, vacaciones, biografías y anécdotas.",
    mcfrEquivalent: "A1+",
    classes: [
      {
        id: "c-teens-basic-3-1",
        title: "Clase 1: Daily Routine & Time",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Daily Routine & Time.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Daily Routine & Time.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-2",
        title: "Clase 2: Sports, Competitions & Teams",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Sports, Competitions & Teams.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Sports & Hobbies.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Sports, Competitions & Teams.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Sports & Hobbies", description: "Introduction to Sports & Hobbies.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Soccer, Draw, Play, Hobby", content: ["Soccer", " Draw", " Play", " Hobby"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I play soccer every day."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-3",
        title: "Clase 3: Holidays, Festivals & Traditions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Holidays, Festivals & Traditions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Holidays, Festivals & Traditions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-4",
        title: "Clase 4: Space, Science & Future",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Space, Science & Future.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Future Dreams.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Space, Science & Future.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Future Dreams", description: "Introduction to Future Dreams.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Future, Dream, Will, Want", content: ["Future", " Dream", " Will", " Want"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I will be a scientist."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-5",
        title: "Clase 5: Was/were y recuerdos de infancia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Was/were y recuerdos de infancia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Was/were y recuerdos de infancia.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-6",
        title: "Clase 6: Vacaciones, viajes y anécdotas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Vacaciones, viajes y anécdotas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Vacaciones, viajes y anécdotas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-7",
        title: "Clase 7: Biografías de artistas, deportistas o creadores",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Biografías de artistas, deportistas o creadores.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Biografías de artistas, deportistas o creadores.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-8",
        title: "Clase 8: Conectores para contar historias",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conectores para contar historias.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conectores para contar historias.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-9",
        title: "Clase 9: Problemas cotidianos y cómo explicarlos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Problemas cotidianos y cómo explicarlos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Problemas cotidianos y cómo explicarlos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-10",
        title: "Clase 10: Verbos irregulares y terminaciones -ed. Proyecto en video",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Verbos irregulares y terminaciones -ed. Proyecto en video.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Verbos irregulares y terminaciones -ed. Proyecto en video.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-4",
    title: "Level 4 - Basic 4 (Teen Pro)",
    duration: "2 meses",
    objective: "Expresar opiniones, dar consejos, hablar de condiciones y mensajería.",
    mcfrEquivalent: "A2",
    classes: [
      {
        id: "c-teens-basic-4-1",
        title: "Clase 1: My Opinions & Perspectives",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Opinions & Perspectives.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Opinions & Perspectives.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-2",
        title: "Clase 2: Giving Good Advice",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Giving Good Advice.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Giving Good Advice.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-3",
        title: "Clase 3: Conditions & Outcomes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conditions & Outcomes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conditions & Outcomes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-4",
        title: "Clase 4: Messaging & Online Chats",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Messaging & Online Chats.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Messaging & Online Chats.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-5",
        title: "Clase 5: Primer condicional para planes y consecuencias",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Primer condicional para planes y consecuencias.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Primer condicional para planes y consecuencias.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-6",
        title: "Clase 6: Comparativos y superlativos: apps, celulares, películas y deportes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Comparativos y superlativos: apps, celulares, películas y deportes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Comparativos y superlativos: apps, celulares, películas y deportes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-7",
        title: "Clase 7: Too / enough para problemas y soluciones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Too / enough para problemas y soluciones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Too / enough para problemas y soluciones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-8",
        title: "Clase 8: Consejos entre amigos con should",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Consejos entre amigos con should.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Consejos entre amigos con should.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-9",
        title: "Clase 9: Mensajes, emails y chats informales/formales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Mensajes, emails y chats informales/formales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Mensajes, emails y chats informales/formales.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-10",
        title: "Clase 10: Atención al cliente juvenil y evaluación de transición",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Atención al cliente juvenil y evaluación de transición.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Atención al cliente juvenil y evaluación de transición.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-inter",
    title: "Level 5, 6, 7 - Intermediate (Teen Sharks)",
    duration: "2 meses",
    objective: "Experiencias personales, phrasal verbs, condicionales y debates juveniles.",
    mcfrEquivalent: "B1",
    classes: [
      {
        id: "c-teens-inter-1",
        title: "Clase 1: My Life Experiences",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Life Experiences.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Life Experiences.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-2",
        title: "Clase 2: Teen Slang & Phrasal Verbs",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Teen Slang & Phrasal Verbs.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Teen Slang & Phrasal Verbs.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-3",
        title: "Clase 3: Possibilities & Deductions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Possibilities & Deductions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Possibilities & Deductions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-4",
        title: "Clase 4: If I ruled the world (Conditionals)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of If I ruled the world (Conditionals).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of If I ruled the world (Conditionals).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-5",
        title: "Clase 5: Agreeing & Disagreeing",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Agreeing & Disagreeing.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Agreeing & Disagreeing.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-6",
        title: "Clase 6: Podcast & Debate Basics",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Podcast & Debate Basics.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Podcast & Debate Basics.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-7",
        title: "Clase 7: Present Perfect con experiencias personales y Present Perfect Continuous",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Present Perfect con experiencias personales y Present Perfect Continuous.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Present Perfect con experiencias personales y Present Perfect Continuous.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-8",
        title: "Clase 8: Phrasal verbs frecuentes en conversaciones adolescentes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Phrasal verbs frecuentes en conversaciones adolescentes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Phrasal verbs frecuentes en conversaciones adolescentes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-9",
        title: "Clase 9: Modales de posibilidad y deducción",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Modales de posibilidad y deducción.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Modales de posibilidad y deducción.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-10",
        title: "Clase 10: Primer y segundo condicional",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Primer y segundo condicional.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Primer y segundo condicional.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-11",
        title: "Clase 11: Opiniones, acuerdos y desacuerdos respetuosos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Opiniones, acuerdos y desacuerdos respetuosos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(56) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(57) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Opiniones, acuerdos y desacuerdos respetuosos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(58) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(59) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(60) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(61) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(62) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(63) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(64) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(65) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(70) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(73) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(74) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-12",
        title: "Clase 12: Proyecto podcast/debate y Simulación entrevista beca/empleo",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Proyecto podcast/debate y Simulación entrevista beca/empleo.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(61) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(62) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Proyecto podcast/debate y Simulación entrevista beca/empleo.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(63) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(64) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(65) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(66) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(67) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(68) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(69) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(70) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(75) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(78) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(79) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-advanced",
    title: "Level 8 - Advanced (Teen Leaders)",
    duration: "2 meses",
    objective: "Reported speech, relative clauses, voz pasiva y entrevistas.",
    mcfrEquivalent: "B2",
    classes: [
      {
        id: "c-teens-advanced-1",
        title: "Clase 1: Gossip & News (Reported Speech)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Gossip & News (Reported Speech).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Gossip & News (Reported Speech).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-2",
        title: "Clase 2: Describing the Details (Relative Clauses)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Describing the Details (Relative Clauses).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Describing the Details (Relative Clauses).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-3",
        title: "Clase 3: Tech & Passive Voice",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Tech & Passive Voice.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Gadgets & Tech.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Tech & Passive Voice.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Gadgets & Tech", description: "Introduction to Gadgets & Tech.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Phone, Tablet, Screen, Game", content: ["Phone", " Tablet", " Screen", " Game"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I love my new phone."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-4",
        title: "Clase 4: Real Idioms in Context",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Real Idioms in Context.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Real Idioms in Context.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-5",
        title: "Clase 5: Reported speech en chismes, noticias y conversaciones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reported speech en chismes, noticias y conversaciones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reported speech en chismes, noticias y conversaciones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-6",
        title: "Clase 6: Relative clauses y descripción detallada de personas/cosas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Relative clauses y descripción detallada de personas/cosas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Relative clauses y descripción detallada de personas/cosas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-7",
        title: "Clase 7: Voz pasiva aplicada a noticias y tecnología",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Voz pasiva aplicada a noticias y tecnología.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Voz pasiva aplicada a noticias y tecnología.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-8",
        title: "Clase 8: Phrasal verbs e idioms de uso real",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Phrasal verbs e idioms de uso real.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Phrasal verbs e idioms de uso real.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-9",
        title: "Clase 9: Debates: IA, redes sociales, medioambiente y educación",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Debates: IA, redes sociales, medioambiente y educación.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Debates: IA, redes sociales, medioambiente y educación.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-10",
        title: "Clase 10: Entrevistas (trabajo/voluntariado) y resolución de problemas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Entrevistas (trabajo/voluntariado) y resolución de problemas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Entrevistas (trabajo/voluntariado) y resolución de problemas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-elite",
    title: "Level 9 - Advanced Elite",
    duration: "2 meses",
    objective: "Estructuras enfáticas, lenguaje diplomático, ensayos y proyectos.",
    mcfrEquivalent: "C1",
    classes: [
      {
        id: "c-teens-elite-1",
        title: "Clase 1: Future Goals & Plans",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Future Goals & Plans.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Weekend Plans.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Future Goals & Plans.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Weekend Plans", description: "Introduction to Weekend Plans.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Weekend, Plan, Go, Free", content: ["Weekend", " Plan", " Go", " Free"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I am going to the cinema."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-2",
        title: "Clase 2: Past Decisions & Mixed Conditionals",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Past Decisions & Mixed Conditionals.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Past Memories.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Past Decisions & Mixed Conditionals.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Past Memories", description: "Introduction to Past Memories.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Past, Memory, Was, Went", content: ["Past", " Memory", " Was", " Went"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: When I was young..."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-3",
        title: "Clase 3: Diplomacy & Nuance",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Diplomacy & Nuance.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Diplomacy & Nuance.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-4",
        title: "Clase 4: Academic Writing & Essays",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Academic Writing & Essays.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Academic Writing & Essays.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-5",
        title: "Clase 5: Leadership & Teamwork",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Leadership & Teamwork.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Leadership & Teamwork.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-6",
        title: "Clase 6: Future Continuous, Future Perfect y planificación de metas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Future Continuous, Future Perfect y planificación de metas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Future Dreams.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Future Continuous, Future Perfect y planificación de metas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Future Dreams", description: "Introduction to Future Dreams.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Future, Dream, Will, Want", content: ["Future", " Dream", " Will", " Want"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I will be a scientist."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-7",
        title: "Clase 7: Condicionales mixtos y decisiones pasadas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Condicionales mixtos y decisiones pasadas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Condicionales mixtos y decisiones pasadas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-8",
        title: "Clase 8: Lenguaje diplomático, cleft sentences e inversiones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Lenguaje diplomático, cleft sentences e inversiones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Lenguaje diplomático, cleft sentences e inversiones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-9",
        title: "Clase 9: Ensayos, opiniones y presentaciones académicas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ensayos, opiniones y presentaciones académicas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Ensayos, opiniones y presentaciones académicas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-10",
        title: "Clase 10: Reuniones, liderazgo y trabajo en equipo",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reuniones, liderazgo y trabajo en equipo.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reuniones, liderazgo y trabajo en equipo.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-11",
        title: "Clase 11: Proyecto final: pitch de emprendimiento o conferencia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Proyecto final: pitch de emprendimiento o conferencia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(56) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(57) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Proyecto final: pitch de emprendimiento o conferencia.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(58) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(59) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(60) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(61) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(62) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(63) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(64) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(65) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(70) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(73) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(74) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-masters",
    title: "Level 10 - Masters of Fluency",
    duration: "2 meses",
    objective: "Debate competitivo, análisis cultural, inglés académico y global.",
    mcfrEquivalent: "C2",
    classes: [
      {
        id: "c-teens-masters-1",
        title: "Clase 1: Critical Thinking & Debate",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Critical Thinking & Debate.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(6) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(7) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Critical Thinking & Debate.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(8) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(9) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(10) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(11) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(12) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(13) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(14) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(15) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(20) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(23) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(24) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-2",
        title: "Clase 2: Pop Culture & Media Analysis",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Pop Culture & Media Analysis.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(11) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(12) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Pop Culture & Media Analysis.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(13) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(14) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(15) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(16) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(17) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(18) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(19) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(20) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(25) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(28) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(29) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-3",
        title: "Clase 3: University & Academic English",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of University & Academic English.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(16) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(17) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of University & Academic English.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(18) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(19) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(20) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(21) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(22) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(23) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(24) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(25) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(30) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(33) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(34) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-4",
        title: "Clase 4: Content Creation & TED Talks",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Content Creation & TED Talks.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(21) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(22) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Content Creation & TED Talks.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(23) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(24) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(25) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(26) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(27) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(28) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(29) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(30) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(35) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(38) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(39) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-5",
        title: "Clase 5: Debate competitivo y pensamiento crítico",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Debate competitivo y pensamiento crítico.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(26) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(27) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Debate competitivo y pensamiento crítico.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(28) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(29) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(30) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(31) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(32) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(33) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(34) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(35) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(40) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(43) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(44) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-6",
        title: "Clase 6: Análisis de películas, música, noticias y cultura digital",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Análisis de películas, música, noticias y cultura digital.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(31) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(32) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Análisis de películas, música, noticias y cultura digital.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(33) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(34) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(35) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(36) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(37) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(38) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(39) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(40) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(45) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(48) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(49) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-7",
        title: "Clase 7: Inglés académico para universidad e intercambios",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Inglés académico para universidad e intercambios.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(36) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(37) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Inglés académico para universidad e intercambios.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(38) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(39) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(40) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(41) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(42) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(43) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(44) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(45) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(50) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(53) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(54) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-8",
        title: "Clase 8: Creación de podcast, videoensayo o presentación TED",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Creación de podcast, videoensayo o presentación TED.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(41) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(42) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Creación de podcast, videoensayo o presentación TED.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(43) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(44) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(45) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(46) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(47) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(48) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(49) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(50) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(55) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(58) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(59) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-9",
        title: "Clase 9: Temas globales: tecnología, ética, clima y sociedad",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Temas globales: tecnología, ética, clima y sociedad.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(46) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(47) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Temas globales: tecnología, ética, clima y sociedad.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(48) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(49) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(50) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(51) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(52) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(53) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(54) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(55) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(60) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(63) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(64) }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-10",
        title: "Clase 10: Preparación de entrevistas C1 y Conversation Club",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Preparación de entrevistas C1 y Conversation Club.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: getImg(51) },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: getImg(52) },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Preparación de entrevistas C1 y Conversation Club.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: getImg(53) }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", imageUrl: getImg(54) },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", imageUrl: getImg(55) },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: getImg(56) },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: getImg(57) },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: getImg(58) },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500", imageUrl: getImg(59) },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500", imageUrl: getImg(60) }
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
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: getImg(65) }
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
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: getImg(68) }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: getImg(69) }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  }
];
