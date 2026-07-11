import fs from 'fs';

const text = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

const replacement = `[
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 6! 🔶", description: "Shapes & Patterns", content: ["Are you ready to see shapes?", "Today we learn about colors and forms.", "Look around you!"], imageUrl: "/images/teens_shapes_patterns.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Favorite shape?", color: "#EF4444"}, {label: "Favorite color?", color: "#3B82F6"}, {label: "Stripes or dots?", color: "#10B981"}, {label: "Square or Circle?", color: "#F59E0B"}, {label: "Find a triangle!", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name common shapes.", "✔️ Talk about patterns in clothes.", "✔️ Describe things around you."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Basic Shapes ⏺️", description: "Vocabulary", type: "normal", content: ["Circle = Círculo", "Square = Cuadrado", "Triangle = Triángulo", "Rectangle = Rectángulo"], imageUrl: "/images/teens_shapes_patterns.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Patterns 🦓", description: "Vocabulary", type: "normal", content: ["Stripes = Rayas", "Polka dots = Puntos / Lunares", "Plaid = Cuadros", "Plain = Liso (sin patrón)"], imageUrl: "/images/teens_clothing_patterns.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: It is a... 🖼️", description: "Grammar", type: "normal", content: ["IT IS A = Es un/una", "THEY ARE = Ellos son / Esos son", "Example: It is a blue circle. They are red squares."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Wearing 👕", description: "Grammar", type: "normal", content: ["I am wearing = Yo estoy usando (ropa)", "You are wearing = Tú estás usando", "Example: I am wearing a striped shirt."], imageUrl: "/images/teens_clothing_patterns.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives Order 📏", description: "Vocabulary", type: "normal", content: ["Size + Color + Shape", "Example: A big red circle.", "Example: A small blue square."], imageUrl: "/images/teens_geometric_art.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Do you like my new shirt?", "Sam: Yes! Is it plain or striped?", "Alex: It has polka dots!", "Sam: Cool! I am wearing a plaid shirt."], imageUrl: "/images/teens_clothing_patterns.jpg", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: I am ______ a blue shirt."], options: ["wear", "wearing", "wears"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: ______ shirt is cool!"], options: ["You", "Yours", "Your"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["It has 3 sides."], options: ["Square", "Circle", "Triangle"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🔴 ➕ 🔲 ➕ 🦓"], options: ["I like circles and squares.", "A red circle, a square, and stripes.", "I am wearing stripes."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "What are you wearing?", color: "#EF4444"}, {label: "Do you like stripes?", color: "#3B82F6"}, {label: "Do you like polka dots?", color: "#10B981"}, {label: "Find a square in the room!", color: "#F59E0B"}, {label: "Find a circle in the room!", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["What shape is a pizza?"], options: ["Square", "Circle", "Triangle"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What is 'Rayas' in English?"], options: ["Plaid", "Stripes", "Polka dots"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["Correct order:"], options: ["A red big circle", "A circle red big", "A big red circle"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: At the store 👕", description: "Production", content: ["Student A: You want a striped shirt.", "Student B: You work at the store.", "Action: 'Do you have a striped shirt?' 'Yes!'"], imageUrl: "/images/teens_clothing_patterns.jpg", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", content: ["Awesome job today!", "You leveled up your English!"], imageUrl: "/images/teens_complete.jpg", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Describe your favorite shirt.", "Write what color it is and if it has a pattern."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about shapes.", "Write down 2 new shapes you learned!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]`;

const regex = /(id: "c-teens-basic-zero-6"[\s\S]*?sections: )(\[[\s\S]*?\])(\s*\}\s*,\s*\{\s*id: "c-teens-basic-zero-7")/;

if (regex.test(text)) {
  const newText = text.replace(regex, (match, p1, p2, p3) => p1 + replacement + p3);
  fs.writeFileSync('src/data/curriculumTeens.ts', newText);
  console.log('Successfully updated the curriculumTeens.ts file (Class 6).');
} else {
  console.log('Could not match regex.');
}
