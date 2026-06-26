import fs from 'fs';

let titleTopics = [
    { match: /hello|introductions/i, concept: "Greetings & Intros", ex1: "Hello, my name is Alex.", ex2: "Nice to meet you!", vocab: "Hello, Hi, Name, Meet" },
    { match: /numbers|ages/i, concept: "Numbers & Ages", ex1: "I am 15 years old.", ex2: "My birthday is in May.", vocab: "Numbers, Age, Years, Birthday" },
    { match: /body|actions/i, concept: "Body & Actions", ex1: "I can touch my head.", ex2: "She is running fast.", vocab: "Head, Arms, Run, Jump" },
    { match: /gadgets|tech/i, concept: "Gadgets & Tech", ex1: "I love my new phone.", ex2: "He is playing a video game.", vocab: "Phone, Tablet, Screen, Game" },
    { match: /snacks|drinks/i, concept: "Snacks & Drinks", ex1: "I like chips and soda.", ex2: "Can I have some water?", vocab: "Snack, Drink, Water, Chips" },
    { match: /sports|hobbies/i, concept: "Sports & Hobbies", ex1: "I play soccer every day.", ex2: "She likes to draw.", vocab: "Soccer, Draw, Play, Hobby" },
    { match: /family|pets/i, concept: "Family & Pets", ex1: "This is my brother.", ex2: "I have a cute dog.", vocab: "Brother, Sister, Dog, Cat" },
    { match: /school|backpack/i, concept: "School & Backpacks", ex1: "I have two pens in my bag.", ex2: "My favorite subject is math.", vocab: "School, Bag, Pen, Book" },
    { match: /places|hangout/i, concept: "Places to Hangout", ex1: "Let's go to the mall.", ex2: "We are at the park.", vocab: "Mall, Park, Go, Friends" },
    { match: /routines/i, concept: "Daily Routines", ex1: "I wake up at 7 am.", ex2: "I do my homework.", vocab: "Wake up, Sleep, Homework, Time" },
    { match: /clothes|style/i, concept: "Clothes & Style", ex1: "I am wearing a cool hoodie.", ex2: "Her shoes are new.", vocab: "Hoodie, Shoes, Cool, Wear" },
    { match: /movies|music/i, concept: "Movies & Music", ex1: "I love listening to pop music.", ex2: "That movie was awesome.", vocab: "Movie, Music, Listen, Watch" },
    { match: /feelings|emotions/i, concept: "Feelings & Emotions", ex1: "I am very happy today.", ex2: "He looks sad.", vocab: "Happy, Sad, Angry, Excited" },
    { match: /weekend|plans/i, concept: "Weekend Plans", ex1: "I am going to the cinema.", ex2: "Are you free on Saturday?", vocab: "Weekend, Plan, Go, Free" },
    { match: /food|cooking/i, concept: "Food & Cooking", ex1: "I can cook pasta.", ex2: "This burger is delicious.", vocab: "Food, Cook, Eat, Delicious" },
    { match: /nature|environment/i, concept: "Nature & Environment", ex1: "The forest is beautiful.", ex2: "We should recycle.", vocab: "Nature, Tree, Recycle, Earth" },
    { match: /travel|vacations/i, concept: "Travel & Vacations", ex1: "I want to visit Japan.", ex2: "We went to the beach.", vocab: "Travel, Visit, Beach, Airplane" },
    { match: /future|dreams/i, concept: "Future Dreams", ex1: "I will be a scientist.", ex2: "I want to travel the world.", vocab: "Future, Dream, Will, Want" },
    { match: /past|memories/i, concept: "Past Memories", ex1: "When I was young...", ex2: "I went to a concert last year.", vocab: "Past, Memory, Was, Went" },
    { match: /health|fitness/i, concept: "Health & Fitness", ex1: "You should eat vegetables.", ex2: "I exercise every day.", vocab: "Health, Fit, Exercise, Vegetable" }
];

let c = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

// Split the file by `id: "c-teens-` to safely process each class
let parts = c.split(/id:\s*"c-teens-/);
let newContent = parts[0]; // the preamble

for (let i = 1; i < parts.length; i++) {
    let part = parts[i];
    
    // Find the title
    let titleMatch = part.match(/^([^"]+)",\s*title:\s*"([^"]+)"/);
    if (!titleMatch) {
        newContent += 'id: "c-teens-' + part;
        continue;
    }
    
    let classId = 'c-teens-' + titleMatch[1];
    let title = titleMatch[2];
    
    let foundTopic = titleTopics.find(t => t.match.test(title));
    if (!foundTopic) foundTopic = { concept: "Important Topic", ex1: "Example A", ex2: "Example B", vocab: "Word 1, Word 2, Word 3" };
    
    // Replace strings inside this specific part ONLY
    part = part.replace('title: "Concept 1", description: "Introduction to the main concept."', 'title: "' + foundTopic.concept + '", description: "Introduction to ' + foundTopic.concept + '.", content: ["' + foundTopic.ex1 + '", "' + foundTopic.ex2 + '"]');
    part = part.replace('title: "Examples", description: "Look at these examples."', 'title: "Examples in Context", description: "Let\'s read these phrases.", content: ["' + foundTopic.ex1 + '", "' + foundTopic.ex2 + '"]');
    part = part.replace('title: "Vocabulary", description: "Key words for today."', 'title: "Vocabulary Words", description: "' + foundTopic.vocab + '", content: ["' + foundTopic.vocab.split(',').join('", "') + '"]');
    part = part.replace('title: "Structure", description: "How to form the sentences."', 'title: "Grammar Structure", description: "How to form sentences.", content: ["' + foundTopic.ex1 + '", "' + foundTopic.ex2 + '"]');
    part = part.replace('title: "More Examples", description: "Let\'s read these together."', 'title: "Practice Sentences", description: "Repeat after the teacher.", content: ["' + foundTopic.ex1 + '", "' + foundTopic.ex2 + '"]');
    part = part.replace('title: "Pronunciation", description: "Listen and repeat."', 'title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: ' + foundTopic.ex1 + '"]');
    part = part.replace('title: "Welcome!", description: "Hello everyone! Let\'s get started."', 'title: "Welcome!", description: "Hello everyone! Let\'s get started with ' + foundTopic.concept + '."');

    newContent += 'id: "c-teens-' + part;
}

fs.writeFileSync('src/data/curriculumTeens.ts', newContent, 'utf8');
console.log('Teens mapping complete!');
