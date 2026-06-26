import fs from 'fs';

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

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Find generic classes
    let classRegex = /\{\s*id:\s*"([^"]+)"/g;
    let classes = [];
    let match;
    while ((match = classRegex.exec(content)) !== null) {
        let startIdx = match.index;
        let braceCount = 0; let endIdx = -1;
        for (let i = startIdx; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            else if (content[i] === '}') { braceCount--; if (braceCount === 0) { endIdx = i + 1; break; } }
        }
        if (endIdx !== -1) {
            let t = content.substring(startIdx, endIdx);
            if (t.includes('"Concept 1"')) { // only ones I expanded generically
                classes.push({ start: startIdx, end: endIdx, text: t });
            }
        }
    }

    let newContent = content;
    for (let i = classes.length - 1; i >= 0; i--) {
        let c = classes[i];
        let text = c.text;
        
        let titleMatch = text.match(/title:\s*"([^"]+)"/);
        if (!titleMatch) continue;
        let title = titleMatch[1];
        
        let foundTopic = titleTopics.find(t => t.match.test(title));
        if (!foundTopic) foundTopic = { concept: "Important Topic", ex1: "Example A", ex2: "Example B", vocab: "Word 1, Word 2, Word 3" };
        
        let rnd = () => imgList[Math.floor(Math.random()*imgList.length)];
        
        text = text.replace(/title: "Concept 1", description: "Introduction to the main concept."/, `title: "${foundTopic.concept}", description: "Introduction to ${foundTopic.concept}.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}"`);
        text = text.replace(/title: "Examples", description: "Look at these examples."/, `title: "Examples in Context", description: "Let's read these phrases.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}"`);
        text = text.replace(/title: "Vocabulary", description: "Key words for today."/, `title: "Vocabulary Words", description: "${foundTopic.vocab}", content: ["${foundTopic.vocab.split(',').join('", "')}"], imageUrl: "${rnd()}"`);
        text = text.replace(/title: "Structure", description: "How to form the sentences."/, `title: "Grammar Structure", description: "How to form sentences.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}"`);
        text = text.replace(/title: "More Examples", description: "Let's read these together."/, `title: "Practice Sentences", description: "Repeat after the teacher.", content: ["${foundTopic.ex1}", "${foundTopic.ex2}"], imageUrl: "${rnd()}"`);
        text = text.replace(/title: "Pronunciation", description: "Listen and repeat."/, `title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: ${foundTopic.ex1}"]`);
        
        text = text.replace(/title: "Welcome!", description: "Hello everyone! Let's get started."/, `title: "Welcome!", description: "Hello everyone! Let's get started with ${foundTopic.concept}.", imageUrl: "${rnd()}"`);
        
        // Let's add an image to Homework if missing
        if (!text.includes('imageUrl:')) {
             text = text.replace(/type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"/, `type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "${rnd()}"`);
        }
        
        if (text !== c.text) {
            newContent = newContent.substring(0, c.start) + text + newContent.substring(c.end);
        }
    }
    
    fs.writeFileSync(filename, newContent, 'utf8');
}

processFile('src/data/curriculum.ts');
console.log('Done mapping adults!');
