import * as fs from 'fs';

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const regexes = [
  {
    topic: "basic-zero",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "Hello, I ___ a student. My name ___ John.", options: ["am / is", "is / am", "are / is"] },
      { id: "v2", type: "multiple-choice", question: "___ you from Spain? No, I ___ from Mexico.", options: ["Are / am", "Is / are", "Are / is"] },
      { id: "v3", type: "multiple-choice", question: "Which day comes after Tuesday?", options: ["Wednesday", "Thursday", "Monday"] },
      { id: "v4", type: "multiple-choice", question: "I have two ___. Their names are Sarah and Emily.", options: ["sisters", "sister", "brothers"] },
      { id: "v5", type: "multiple-choice", question: "What is your ___ number? It is 555-1234.", options: ["phone", "name", "old"] },
      { id: "v6", type: "multiple-choice", question: "I ___ like apples, but I love bananas.", options: ["don't", "doesn't", "am not"] },
      { id: "v7", type: "multiple-choice", question: "He ___ a very nice car.", options: ["has", "have", "is"] }
    ]`
  },
  {
    topic: "basic-1",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "I think it ___ rain tomorrow.", options: ["will", "is going to", "going to"] },
      { id: "v2", type: "multiple-choice", question: "Look at those dark clouds! It ___ rain.", options: ["is going to", "will", "going"] },
      { id: "v3", type: "multiple-choice", question: "I ___ coffee right now. Please call me later.", options: ["am drinking", "drink", "drinking"] },
      { id: "v4", type: "multiple-choice", question: "___ money do you have in your wallet?", options: ["How much", "How many", "Are there"] },
      { id: "v5", type: "multiple-choice", question: "There are ___ people in the restaurant.", options: ["many", "much", "any"] },
      { id: "v6", type: "multiple-choice", question: "Excuse me, where ___ the supermarket?", options: ["is", "are", "do"] },
      { id: "v7", type: "multiple-choice", question: "I usually ___ genes to work, but today I ___ a suit.", options: ["wear / am wearing", "am wearing / wear", "wears / wearing"] }
    ]`
  },
  {
    topic: "basic-2",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "She usually ___ coffee, but today she ___ tea.", options: ["drinks / is drinking", "is drinking / drinks", "drink / is drinking"] },
      { id: "v2", type: "multiple-choice", question: "___ you studying for the exam this week?", options: ["Are", "Do", "Is"] },
      { id: "v3", type: "multiple-choice", question: "We ___ to the cinema every Saturday.", options: ["go", "are going", "goes"] },
      { id: "v4", type: "multiple-choice", question: "He never ___ his homework on time.", options: ["finishes", "finish", "is finishing"] },
      { id: "v5", type: "multiple-choice", question: "I ___ going out on weekends.", options: ["prefer", "am preferring", "prefers"] },
      { id: "v6", type: "multiple-choice", question: "What ___ you ___ doing for fun?", options: ["do / like", "are / liking", "does / like"] },
      { id: "v7", type: "multiple-choice", question: "This month, they ___ on a big project.", options: ["are working", "work", "works"] }
    ]`
  },
  {
    topic: "basic-3",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "I ___ late for work yesterday because I ___ my train.", options: ["was / missed", "am / missing", "were / missed"] },
      { id: "v2", type: "multiple-choice", question: "___ you watch the football match last night?", options: ["Did", "Do", "Were"] },
      { id: "v3", type: "multiple-choice", question: "While I ___ TV, the phone ___.", options: ["was watching / rang", "watched / was ringing", "was watching / was ringing"] },
      { id: "v4", type: "multiple-choice", question: "We ___ to Paris for our summer holiday in 2019.", options: ["went", "go", "was going"] },
      { id: "v5", type: "multiple-choice", question: "What ___ you doing at 9 AM yesterday?", options: ["were", "was", "did"] },
      { id: "v6", type: "multiple-choice", question: "She ___ playing the guitar when she was younger.", options: ["loved", "was loving", "love"] },
      { id: "v7", type: "multiple-choice", question: "They ___ playing football when it started to rain.", options: ["were", "was", "did"] }
    ]`
  },
  {
    topic: "basic-4",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "I ___ my dentist tomorrow at 3 PM. (Scheduled)", options: ["am seeing", "will see", "see"] },
      { id: "v2", type: "multiple-choice", question: "By tomorrow morning, I ___ on a beach.", options: ["will be lying", "will lie", "am lying"] },
      { id: "v3", type: "multiple-choice", question: "When I was a child, I ___ play outside all day.", options: ["used to", "use to", "am used to"] },
      { id: "v4", type: "multiple-choice", question: "He didn't ___ like spicy food, but now he loves it.", options: ["use to", "used to", "uses to"] },
      { id: "v5", type: "multiple-choice", question: "We ___ a meeting next Monday at 10 AM.", options: ["are having", "have", "will having"] },
      { id: "v6", type: "multiple-choice", question: "I think people ___ in flying cars in 2050.", options: ["will travel", "are traveling", "travel"] },
      { id: "v7", type: "multiple-choice", question: "I ___ live in London, but now I live in Tokyo.", options: ["used to", "am using to", "use to"] }
    ]`
  },
  {
    topic: "intermediate-1",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "I ___ to London three times in my life.", options: ["have been", "went", "was"] },
      { id: "v2", type: "multiple-choice", question: "She ___ here since 2015.", options: ["has lived", "lived", "is living"] },
      { id: "v3", type: "multiple-choice", question: "This is the ___ book I have ever read.", options: ["most interesting", "more interesting", "interestingest"] },
      { id: "v4", type: "multiple-choice", question: "Mount Everest is ___ than Kilimanjaro.", options: ["higher", "more high", "highest"] },
      { id: "v5", type: "multiple-choice", question: "You ___ smoke in the hospital.", options: ["must not", "don't have to", "shouldn't to"] },
      { id: "v6", type: "multiple-choice", question: "___ you ever eaten sushi?", options: ["Have", "Did", "Do"] },
      { id: "v7", type: "multiple-choice", question: "I think you ___ go to the doctor if you feel sick.", options: ["should", "must", "have"] }
    ]`
  },
  {
    topic: "intermediate-2",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "The Mona Lisa ___ by Leonardo da Vinci.", options: ["was painted", "painted", "is painted"] },
      { id: "v2", type: "multiple-choice", question: "Millions of smartphones ___ every year.", options: ["are manufactured", "manufacture", "manufactured"] },
      { id: "v3", type: "multiple-choice", question: "If you heat ice, it ___.", options: ["melts", "will melt", "melted"] },
      { id: "v4", type: "multiple-choice", question: "If it rains tomorrow, we ___ stay at home.", options: ["will", "would", "are"] },
      { id: "v5", type: "multiple-choice", question: "One of my greatest ___ is my ability to learn quickly.", options: ["strengths", "strength", "weakness"] },
      { id: "v6", type: "multiple-choice", question: "Could you please tell me why the delivery is ___?", options: ["delayed", "delay", "delaying"] },
      { id: "v7", type: "multiple-choice", question: "In my ___, remote work is more productive.", options: ["opinion", "mind", "think"] }
    ]`
  },
  {
    topic: "intermediate-3",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "By 2025, I ___ my degree.", options: ["will have finished", "will finish", "am finishing"] },
      { id: "v2", type: "multiple-choice", question: "She said that she ___ tired.", options: ["was", "is", "were"] },
      { id: "v3", type: "multiple-choice", question: "He asked me what I ___ doing.", options: ["was", "am", "were"] },
      { id: "v4", type: "multiple-choice", question: "If I won the lottery, I ___ buy a new house.", options: ["would", "will", "can"] },
      { id: "v5", type: "multiple-choice", question: "If you had studied harder, you ___ passed the exam.", options: ["would have", "would", "will have"] },
      { id: "v6", type: "multiple-choice", question: "The train was ___ to arrive at 8 PM, but it was late.", options: ["supposed", "expected", "supposing"] },
      { id: "v7", type: "multiple-choice", question: "I ___ to receive a promotion this year.", options: ["expect", "am expected", "suppose"] }
    ]`
  },
  {
    topic: "advanced",
    replacement: `virtualEvaluation: [
      { id: "v1", type: "multiple-choice", question: "The rapid ___ of technology affects all aspects of life.", options: ["advancement", "advance", "advancing"] },
      { id: "v2", type: "multiple-choice", question: "AI poses significant ___ dilemmas for the future.", options: ["ethical", "ethic", "ethics"] },
      { id: "v3", type: "multiple-choice", question: "Social media can lead to political ___.", options: ["polarization", "polarizing", "polarized"] },
      { id: "v4", type: "multiple-choice", question: "Maintaining a healthy work-life ___ is essential.", options: ["balance", "balancing", "balanced"] },
      { id: "v5", type: "multiple-choice", question: "Climate change is a highly ___ issue.", options: ["pressing", "pressed", "pressure"] },
      { id: "v6", type: "multiple-choice", question: "The gig economy has fundamentally ___ how we work.", options: ["altered", "alter", "altering"] },
      { id: "v7", type: "multiple-choice", question: "It is vital to take ___ steps to protect the environment.", options: ["actionable", "action", "acting"] }
    ]`
  }
];

// Let's parse JSON since curriculum.ts is exporting a JS array, we can use a simpler approach.
// But we can also use index based replacements if we know the order matches `regexes` exactly.

let blocks = content.split('virtualEvaluation: [');
let replaced = 0;

for (let i = 1; i < blocks.length; i++) {
  let endIdx = blocks[i].indexOf('],');
  if (endIdx !== -1) {
    if (i - 1 < regexes.length) {
      blocks[i] = '\\n' + regexes[i-1].replacement.replace('virtualEvaluation: [\\n', '').replace('virtualEvaluation: [', '') + blocks[i].substring(endIdx + 1);
      replaced++;
    }
  }
}

content = blocks.join('virtualEvaluation: [');
console.log('Replaced', replaced, 'blocks.');
fs.writeFileSync('src/data/curriculum.ts', content);
