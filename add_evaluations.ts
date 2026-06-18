import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

const evaluations = [
    {   // Level 0 (A1)
        oral: [
            { topic: "Greetings & Basics", question: "Hello! How are you today? What is your name?" },
            { topic: "Numbers & Dates", question: "How old are you? When is your birthday?" },
            { topic: "Family", question: "Tell me about your family. Do you have brothers or sisters?" },
            { topic: "Daily Routine & Time", question: "What time do you usually wake up? What do you do in the morning?" },
            { topic: "Likes & Dislikes", question: "What food do you like? Is there any food you don't like?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "Hello, I ___ a student. My name ___ John.", options: ["am / is", "is / am", "are / is"], correctAnswer: "am / is" },
            { id: "v2", type: "multiple-choice", question: "There ___ three apples on the table.", options: ["is", "are", "be"], correctAnswer: "are" },
            { id: "v3", type: "fill-in-the-blanks", question: "She ___ (wake) up at 7:00 AM every day.", options: [], correctAnswer: "wakes" },
            { id: "v4", type: "listening", question: "Listen and type the number you hear.", audioText: "Seventy-five", options: [], correctAnswer: "75" },
            { id: "v5", type: "multiple-choice", question: "My mother's sister is my ___.", options: ["aunt", "uncle", "cousin"], correctAnswer: "aunt" }
        ]
    },
    {   // Level 1 (A2.1)
        oral: [
            { topic: "Future Plans (Will/Going to)", question: "What are you going to do this weekend?" },
            { topic: "Future Intentions", question: "Where do you think you will be in 5 years?" },
            { topic: "Countable / Uncountable", question: "How much water do you drink every day? How many cups of coffee?" },
            { topic: "Directions & Places", question: "How do I get to the nearest supermarket from your house?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "I think it ___ rain tomorrow.", options: ["is going to", "will", "going to"], correctAnswer: "will" },
            { id: "v2", type: "multiple-choice", question: "We ___ visit my grandparents next weekend. We have the tickets.", options: ["are going to", "will", "go to"], correctAnswer: "are going to" },
            { id: "v3", type: "multiple-choice", question: "___ milk do we have in the fridge?", options: ["How many", "How much", "What amount"], correctAnswer: "How much" },
            { id: "v4", type: "listening", question: "Listen and select the correct option.", audioText: "I am going to study medicine next year.", options: ["The person is studying medicine now.", "The person plans to study medicine.", "The person studied medicine."], correctAnswer: "The person plans to study medicine." },
            { id: "v5", type: "fill-in-the-blanks", question: "Go straight, then turn ___ at the corner.", options: [], correctAnswer: "left" }
        ]
    },
    {   // Level 2 (A2.2)
        oral: [
            { topic: "Present Simple vs Continuous", question: "What do you usually do on weekends? And what are you doing right now?" },
            { topic: "Work & Study Routines", question: "Tell me about your job or studies. What does a typical day look like?" },
            { topic: "Describing Activities", question: "Describe a project you are currently working on this month." },
            { topic: "Likes & Preferences", question: "What kind of movies do you enjoy watching? Why?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "She usually ___ coffee, but today she ___ tea.", options: ["drinks / is drinking", "is drinking / drinks", "drink / is drinking"], correctAnswer: "drinks / is drinking" },
            { id: "v2", type: "multiple-choice", question: "Look! The boys ___ in the garden.", options: ["play", "are playing", "playing"], correctAnswer: "are playing" },
            { id: "v3", type: "fill-in-the-blanks", question: "I can't talk right now, I ___ (drive).", options: [], correctAnswer: "am driving" },
            { id: "v4", type: "listening", question: "Listen and answer: What is he doing?", audioText: "He is reading a book in the living room.", options: ["He reads every day.", "He is reading right now.", "He read a book yesterday."], correctAnswer: "He is reading right now." },
            { id: "v5", type: "multiple-choice", question: "Water ___ at 100 degrees Celsius.", options: ["boils", "is boiling", "boil"], correctAnswer: "boils" }
        ]
    },
    {   // Level 3 (B1.1)
        oral: [
            { topic: "Past Simple", question: "What did you do last weekend?" },
            { topic: "Past Continuous", question: "What were you doing yesterday at 8 PM?" },
            { topic: "Life Experiences", question: "Tell me about your best vacation ever. Where did you go?" },
            { topic: "Storytelling", question: "Tell me a short story about something funny that happened to you in the past." }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "I ___ late for work yesterday because I ___ my train.", options: ["was / missed", "am / missing", "were / missed"], correctAnswer: "was / missed" },
            { id: "v2", type: "multiple-choice", question: "While I ___ TV, the phone ___.", options: ["watched / was ringing", "was watching / rang", "watching / rang"], correctAnswer: "was watching / rang" },
            { id: "v3", type: "fill-in-the-blanks", question: "She ___ (go) to Paris last summer.", options: [], correctAnswer: "went" },
            { id: "v4", type: "listening", question: "Where were they?", audioText: "We were walking in the park when it started to rain.", options: ["In the park", "At home", "In a car"], correctAnswer: "In the park" },
            { id: "v5", type: "multiple-choice", question: "How is the '-ed' in 'worked' pronounced?", options: ["/t/", "/d/", "/id/"], correctAnswer: "/t/" }
        ]
    },
    {   // Level 4 (B1.2)
        oral: [
            { topic: "All Tenses Review", question: "Tell me a little about yourself (past, present, and future)." },
            { topic: "Present Continuous for Future", question: "What are you doing tonight? Do you have any arrangements?" },
            { topic: "Future Progressive", question: "What will you be doing this time tomorrow?" },
            { topic: "Comparing Past and Present", question: "How has your life changed in the last 5 years?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "I ___ my dentist tomorrow at 3 PM. (Scheduled)", options: ["am seeing", "will see", "see"], correctAnswer: "am seeing" },
            { id: "v2", type: "multiple-choice", question: "This time next week, I ___ on a beach in Hawaii.", options: ["will lie", "will be lying", "am lying"], correctAnswer: "will be lying" },
            { id: "v3", type: "fill-in-the-blanks", question: "We ___ (have) a meeting tomorrow morning.", options: [], correctAnswer: "are having" },
            { id: "v4", type: "multiple-choice", question: "He has been working here ___ 2015.", options: ["since", "for", "in"], correctAnswer: "since" },
            { id: "v5", type: "listening", question: "Listen to the arrangement.", audioText: "We are meeting Sarah for dinner at 8.", options: ["It's a plan/arrangement.", "It's a spontaneous decision.", "It's a habit."], correctAnswer: "It's a plan/arrangement." }
        ]
    },
    {   // Level 5 (B2.1)
        oral: [
            { topic: "Present Perfect", question: "Have you ever traveled to another country? Where have you been?" },
            { topic: "Present Perfect vs Past Simple", question: "How long have you lived in your current city? When did you move there?" },
            { topic: "Comparatives & Superlatives", question: "Compare your city to another city you know. Which is the best place to live?" },
            { topic: "Used To & Habits", question: "What did you use to do when you were a child that you don't do anymore?" },
            { topic: "Second Conditional", question: "If you won a million dollars, what would you do?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "I ___ to London three times in my life.", options: ["went", "have been", "was"], correctAnswer: "have been" },
            { id: "v2", type: "multiple-choice", question: "She ___ her keys yesterday.", options: ["has lost", "lost", "was losing"], correctAnswer: "lost" },
            { id: "v3", type: "fill-in-the-blanks", question: "This is the ___ (interesting) book I have ever read.", options: [], correctAnswer: "most interesting" },
            { id: "v4", type: "multiple-choice", question: "I ___ play tennis a lot, but I don't have time now.", options: ["used to", "am used to", "use to"], correctAnswer: "used to" },
            { id: "v5", type: "multiple-choice", question: "If I ___ you, I would study harder.", options: ["am", "was", "were"], correctAnswer: "were" }
        ]
    },
    {   // Level 6 (B2.2)
        oral: [
            { topic: "Job Interviews", question: "Can you tell me about your strengths and weaknesses?" },
            { topic: "Customer Service Roleplay", question: "I am an angry customer complaining about a delayed delivery. Handle the situation." },
            { topic: "Passive Voice", question: "Describe a process (e.g., how a cake is made or how coffee is produced) using passive voice." },
            { topic: "Modals of Deduction", question: "Your friend didn't come to the party yesterday. What might/must have happened?" }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "The Mona Lisa ___ by Leonardo da Vinci.", options: ["painted", "was painted", "is painted"], correctAnswer: "was painted" },
            { id: "v2", type: "multiple-choice", question: "He is late. He ___ have missed the train.", options: ["might", "must", "can"], correctAnswer: "might" },
            { id: "v3", type: "fill-in-the-blanks", question: "A new shopping mall ___ (build) in our town next year.", options: [], correctAnswer: "will be built" },
            { id: "v4", type: "listening", question: "What is the tone?", audioText: "I'm afraid there has been a slight delay with your order.", options: ["Aggressive", "Polite and apologetic", "Excited"], correctAnswer: "Polite and apologetic" },
            { id: "v5", type: "multiple-choice", question: "My car ___ at the moment.", options: ["is repaired", "is being repaired", "repaired"], correctAnswer: "is being repaired" }
        ]
    },
    {   // Level 7 (C1.1)
        oral: [
            { topic: "Reported Speech & Negotiation", question: "Roleplay: You are negotiating a salary for a new job. Try to persuade me." },
            { topic: "Future Perfect", question: "What will you have accomplished by this time next year?" },
            { topic: "Expectations (supposed to/expected to)", question: "Talk about a time when expectations were different from reality." },
            { topic: "Cultural Expressions", question: "Describe a cultural custom from your country using advanced vocabulary." }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "By 2025, I ___ my degree.", options: ["will finish", "will have finished", "am finishing"], correctAnswer: "will have finished" },
            { id: "v2", type: "multiple-choice", question: "She said she ___ him the day before.", options: ["had seen", "saw", "has seen"], correctAnswer: "had seen" },
            { id: "v3", type: "fill-in-the-blanks", question: "We were ___ (suppose) to meet at 8, but he was late.", options: [], correctAnswer: "supposed" },
            { id: "v4", type: "listening", question: "Listen to the negotiation.", audioText: "I appreciate your offer, but I was looking for something closer to fifty thousand.", options: ["Accepting", "Counter-offering", "Declining immediately"], correctAnswer: "Counter-offering" },
            { id: "v5", type: "multiple-choice", question: "It is ___ that climate change is accelerating.", options: ["believe", "believed", "been believed"], correctAnswer: "believed" }
        ]
    },
    {   // Level 8 (C1.2)
        oral: [
            { topic: "Technology & Ethics", question: "What is your opinion on artificial intelligence and its impact on society?" },
            { topic: "Society & Culture", question: "How does social media affect modern culture and mental health?" },
            { topic: "Mental & Physical Health", question: "Discuss the importance of maintaining a balance between work and personal life." },
            { topic: "Critical Thinking & Debate", question: "Present an argument for or against remote work versus office work." }
        ],
        virtual: [
            { id: "v1", type: "multiple-choice", question: "The rapid ___ of technology affects all aspects of life.", options: ["advance", "advancement", "advancing"], correctAnswer: "advancement" },
            { id: "v2", type: "multiple-choice", question: "It's vital that we ___ the ethical implications.", options: ["consider", "are considering", "have considered"], correctAnswer: "consider" },
            { id: "v3", type: "fill-in-the-blanks", question: "The widespread ___ (use) of smartphones has changed communication.", options: [], correctAnswer: "usage" },
            { id: "v4", type: "listening", question: "Analyze the argument.", audioText: "While AI brings efficiency, we cannot overlook the potential for job displacement.", options: ["Fully in favor of AI", "Balanced view acknowledging pros and cons", "Completely against AI"], correctAnswer: "Balanced view acknowledging pros and cons" },
            { id: "v5", type: "multiple-choice", question: "We must strive to ___ a healthy work-life balance.", options: ["maintain", "retain", "contain"], correctAnswer: "maintain" }
        ]
    }
];

async function run() {
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');
    
    // Find the curriculumLevels array
    const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const levels = curriculumArray.getElements();

    for (let i = 0; i < levels.length; i++) {
        const levelObj = levels[i] as ObjectLiteralExpression;
        
        // Remove existing oralEvaluation/virtualEvaluation to prevent duplicates if ran twice
        const existingOral = levelObj.getProperty('oralEvaluation');
        if (existingOral) existingOral.remove();
        
        const existingVirtual = levelObj.getProperty('virtualEvaluation');
        if (existingVirtual) existingVirtual.remove();

        if (evaluations[i]) {
            levelObj.addPropertyAssignment({
                name: 'oralEvaluation',
                initializer: JSON.stringify(evaluations[i].oral, null, 2)
            });
            levelObj.addPropertyAssignment({
                name: 'virtualEvaluation',
                initializer: JSON.stringify(evaluations[i].virtual, null, 2)
            });
        }
    }

    sourceFile.saveSync();
    console.log("Successfully injected oral and virtual evaluations into the curriculum!");
}

run();
