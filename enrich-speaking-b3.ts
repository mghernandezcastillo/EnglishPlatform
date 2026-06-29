import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const themesB3: Record<string, string> = {
  'c-adults-basic-3-1': "Abilities and Possibilities (Can/Can't)",
  'c-adults-basic-3-2': "Permissions and Requests (Can I...?, Could you...?)",
  'c-adults-basic-3-3': "Obligations (Have to / Don't have to)",
  'c-adults-basic-3-4': "Clothes, Colors, and Physical Descriptions",
  'c-adults-basic-3-5': "Places in the city and Transport",
  'c-adults-basic-3-6': "Past of To Be (Was/Were)",
  'c-adults-basic-3-7': "Childhood and Memories",
  'c-adults-basic-3-8': "Biographies of Famous People",
  'c-adults-basic-3-9': "Dates, Years, and Months",
  'c-adults-basic-3-10': "General Review Basic 3"
};

const guideMap: Record<string, any> = {
  'c-adults-basic-3-1': {
    'Create a story': ["Imagine a superhero.", "What can they do?", "What can't they do?", "Write a short story about them."],
    'Speaking Time': ["Talk about your hidden talents.", "What is something you can do that most people can't?", "Ask your partner."],
    'Roleplay': ["Student A: You are interviewing for a job.", "Student B: You are the boss.", "Ask and answer questions about what you can and can't do."],
    'Share': ["Share your partner's abilities with the class.", "Who has the most interesting talent?"]
  },
  'c-adults-basic-3-2': {
    'Create a story': ["Imagine you are lost in a new city.", "Write a story where you ask strangers for help using 'Could you...?'"],
    'Speaking Time': ["Think of a time you needed a big favor.", "How did you ask?", "Ask your partner for a funny favor now."],
    'Roleplay': ["Student A: You are at a restaurant and need things (menu, water).", "Student B: You are the waiter.", "Use 'Can I have...?' and 'Could you bring...?'"],
    'Share': ["Share the funniest favor your partner asked for.", "Did you say yes or no?"]
  },
  'c-adults-basic-3-3': {
    'Create a story': ["Invent a crazy new school or job.", "What do students/workers have to do?", "What don't they have to do?"],
    'Speaking Time': ["What do you have to do every day that you hate?", "What don't you have to do on weekends?", "Discuss."],
    'Roleplay': ["Student A: You are a strict parent.", "Student B: You are a teenager.", "Argue about rules: 'You have to clean your room!' 'I don't have to do it now!'"],
    'Share': ["Share the craziest rule from the job/school you invented."]
  },
  'c-adults-basic-3-4': {
    'Create a story': ["Describe a mysterious person you saw at a party.", "What were they wearing?", "What did they look like?"],
    'Speaking Time': ["Describe your favorite outfit.", "Why do you like it?", "Ask your partner to describe theirs."],
    'Roleplay': ["Student A: You lost a friend in a crowded mall.", "Student B: You are a security guard.", "Describe the friend: tall, wearing a red jacket, etc."],
    'Share': ["Share the description of your partner's favorite outfit."]
  },
  'c-adults-basic-3-5': {
    'Create a story': ["Write a story about a journey across the city.", "What transport did you take?", "What places did you pass by?"],
    'Speaking Time': ["How do you usually get to work or school?", "What is your favorite place in the city?", "Discuss."],
    'Roleplay': ["Student A: You are a tourist asking how to get to the museum.", "Student B: You are a local giving directions (take the bus, go past the bank)."],
    'Share': ["Share your partner's favorite place and how to get there."]
  },
  'c-adults-basic-3-6': {
    'Create a story': ["Write a short diary entry about yesterday.", "Where were you?", "How was the weather?", "Who were you with?"],
    'Speaking Time': ["Where were you last night at 8 PM?", "Were you tired yesterday?", "Ask your partner."],
    'Roleplay': ["Student A: You are a detective asking for an alibi.", "Student B: You are a suspect.", "Where were you last Friday? I was at home..."],
    'Share': ["Share your partner's alibi. Do you believe them?"]
  },
  'c-adults-basic-3-7': {
    'Create a story': ["Write a story about your best childhood memory.", "Where were you?", "What happened?"],
    'Speaking Time': ["What was your favorite toy when you were a child?", "Who was your best friend?", "Discuss."],
    'Roleplay': ["Student A and B: You are old friends meeting after 20 years.", "Talk about the past: 'Do you remember when we were young?'"],
    'Share': ["Share your partner's favorite childhood memory with the class."]
  },
  'c-adults-basic-3-8': {
    'Create a story': ["Write a short biography of a fictional famous person.", "Where were they born?", "What did they do?"],
    'Speaking Time': ["Who is your favorite historical figure?", "Why are they famous?", "Discuss with your partner."],
    'Roleplay': ["Student A: You are a famous person from history.", "Student B: You are a journalist interviewing them.", "Ask about their life."],
    'Share': ["Share an interesting fact about the famous person you discussed."]
  },
  'c-adults-basic-3-9': {
    'Create a story': ["Write a story that involves an important date in history.", "What happened on that day, month, and year?"],
    'Speaking Time': ["When is your birthday?", "What is your favorite month of the year and why?", "Discuss."],
    'Roleplay': ["Student A: You are planning a surprise party and need to fix a date.", "Student B: You are very busy. Check your calendar for months and dates."],
    'Share': ["Tell the class when your partner's birthday is."]
  },
  'c-adults-basic-3-10': {
    'Create a story': ["Write a story using everything we learned in Basic 3!", "Include abilities, rules, past 'to be', and places in the city."],
    'Speaking Time': ["What was the most difficult topic in Basic 3?", "What was the easiest?", "Discuss."],
    'Roleplay': ["Student A and B: Have a free conversation mixing past, present, and abilities.", "Example: 'Could you swim when you were a child?'"],
    'Share': ["Share what you are most proud of learning in this level."]
  }
};

const level = curriculumLevels.find(l => l.id === 'basic-3');
if (level) {
  for (const cls of level.classes) {
    const guides = guideMap[cls.id];
    if (!guides) continue;
    
    for (const section of cls.sections) {
      for (const slide of section.slides) {
        if (slide.title === 'Create a story' && guides['Create a story']) {
          slide.description = "Use your imagination!";
          slide.content = guides['Create a story'];
        } else if (slide.title === 'Speaking Time' && guides['Speaking Time']) {
          slide.description = "Let's talk!";
          slide.content = guides['Speaking Time'];
        } else if (slide.title === 'Roleplay' && guides['Roleplay']) {
          slide.description = "Act out the situation.";
          slide.content = guides['Roleplay'];
        } else if ((slide.title === 'Share' || slide.title === 'Share!') && guides['Share']) {
          slide.description = "Tell the class.";
          slide.content = guides['Share'];
        }
      }
    }
  }
}

console.log("Writing changes to src/data/curriculum.ts...");
const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
fs.writeFileSync('src/data/curriculum.ts', fileContent);
console.log("Done updating speaking slides for Basic 3!");
