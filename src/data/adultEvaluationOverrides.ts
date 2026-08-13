import { CurriculumLevel, OralQuestion, VirtualQuestion } from '../types';
import imgAdultAvatar from '../assets/images/male_3d_avatar_1781219297751.jpg';
import imgAdultHomework from '../assets/images/adults_c10_homework_1783000709392.jpg';
import imgAdultDirectionsAsk from '../assets/images/directions_ask_1782951949049.jpg';
import imgAdultDirectionsGive from '../assets/images/directions_give_1782951939884.jpg';
import imgAdultPrepIn from '../assets/images/prep_in_1782951888044.jpg';
import imgAdultPrepNextTo from '../assets/images/prep_next_to_1782951915400.jpg';

type AdultEvaluationOverride = {
  oralEvaluation: OralQuestion[];
  virtualEvaluation: VirtualQuestion[];
};

function multipleChoice(
  id: string,
  question: string,
  options: [string, string, string],
  correctAnswer: string,
  imageUrl: string,
): VirtualQuestion {
  return {
    id,
    type: 'multiple-choice',
    question,
    options,
    correctAnswer,
    imageUrl,
  };
}

function listening(
  id: string,
  question: string,
  options: [string, string, string],
  correctAnswer: string,
  audioText: string,
  imageUrl: string,
): VirtualQuestion {
  return {
    id,
    type: 'listening',
    question,
    options,
    correctAnswer,
    audioText,
    imageUrl,
  };
}

const adultImages = {
  avatar: imgAdultAvatar,
  homework: imgAdultHomework,
  ask: imgAdultDirectionsAsk,
  give: imgAdultDirectionsGive,
  prepIn: imgAdultPrepIn,
  prepNextTo: imgAdultPrepNextTo,
};

const evaluationOverrides: Record<string, AdultEvaluationOverride> = {
  'basic-zero': {
    oralEvaluation: [
      { topic: 'INTRODUCTIONS', question: 'Introduce yourself, say how you feel, and mention your country or nationality.' },
      { topic: 'TIME AND DATES', question: 'Say the time, one day of the week, one month, and one ordinal number in a short sentence.' },
      { topic: 'PEOPLE AND THINGS', question: 'Describe a person using colors or feelings and identify family members with possessive adjectives.' },
      { topic: 'HOME AND CITY', question: 'Describe a place using there is or there are and give one simple direction with a place preposition.' },
      { topic: 'BASIC NEEDS', question: 'Talk about body parts, pets, food, and one basic need using simple complete sentences.' },
      { topic: 'SURVIVAL ENGLISH', question: 'Roleplay a short survival conversation: greet, spell your name, say your job, and ask for repetition if needed.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-basic-zero-v2-introduction-to-be', 'Choose the correct introduction.', ['I am Sofia and I am from Peru.', 'I Sofia am from Peru.', 'I are Sofia from Peru.'], 'I am Sofia and I am from Peru.', adultImages.avatar),
      multipleChoice('adult-basic-zero-v2-numbers-time', 'How do you say 7:30 correctly?', ["It's seven thirty.", "It's seven and half.", "It's thirty to seven and."], "It's seven thirty.", adultImages.homework),
      multipleChoice('adult-basic-zero-v2-colors-feelings', 'Choose the best description.', ['She is happy and her bag is blue.', 'She happy and bag blue is.', 'She are happy with blue bag.'], 'She is happy and her bag is blue.', adultImages.avatar),
      multipleChoice('adult-basic-zero-v2-family-possessives', 'Complete the sentence: This is Ana. ___ brother is Daniel.', ['Her', 'His', 'Their'], 'Her', adultImages.prepNextTo),
      multipleChoice('adult-basic-zero-v2-there-is-are', 'Which sentence is correct?', ['There is a bank next to the park.', 'There are a bank next to the park.', 'There bank is next park.'], 'There is a bank next to the park.', adultImages.give),
      multipleChoice('adult-basic-zero-v2-months-days-ordinals', 'Which sentence is correct?', ['January is the first month of the year.', 'January is the one month of the year.', 'January first month the year is.'], 'January is the first month of the year.', adultImages.homework),
      multipleChoice('adult-basic-zero-v2-articles-demonstratives', 'Choose the correct sentence.', ['These are my keys.', 'This are my keys.', 'These is my keys.'], 'These are my keys.', adultImages.prepIn),
      multipleChoice('adult-basic-zero-v2-body-pets', 'Which sentence is correct about a dog?', ['It has four legs and a tail.', 'It have four legs and tail.', 'It is four legs and a tail.'], 'It has four legs and a tail.', adultImages.avatar),
      multipleChoice('adult-basic-zero-v2-food-needs', 'Choose the natural sentence.', ['I am hungry. I want some food.', 'I have hungry and want fooding.', 'I hungry want a foods.'], 'I am hungry. I want some food.', adultImages.homework),
      multipleChoice('adult-basic-zero-v2-directions-prepositions', 'Which sentence gives a correct location?', ['The pharmacy is next to the supermarket.', 'The pharmacy next to is supermarket.', 'The pharmacy is next supermarket in.'], 'The pharmacy is next to the supermarket.', adultImages.ask),
      multipleChoice('adult-basic-zero-v2-greetings-survival', 'What is the best survival-English question?', ['Can you repeat that, please?', 'Repeat that now you.', 'You can that repeat please?'], 'Can you repeat that, please?', adultImages.avatar),
      listening('adult-basic-zero-v2-alphabet-spelling', 'Listen. Which name is being spelled?', ['Maria', 'Marta', 'Mario'], 'Maria', 'M-A-R-I-A.', adultImages.homework),
      multipleChoice('adult-basic-zero-v2-countries-nationalities', 'Choose the correct sentence.', ['He is from Brazil. He is Brazilian.', 'He is Brazil and Brazilian from.', 'He from Brazil is Brazil.'], 'He is from Brazil. He is Brazilian.', adultImages.avatar),
      multipleChoice('adult-basic-zero-v2-professions', 'Which sentence is correct?', ['A nurse works in a hospital.', 'A nurse work in hospital.', 'A nurse is work in a hospital.'], 'A nurse works in a hospital.', adultImages.prepIn),
      multipleChoice('adult-basic-zero-v2-family-vocabulary', 'Complete the sentence: My parents are my mother and my ___.', ['father', 'sister', 'cousin'], 'father', adultImages.prepNextTo),
      listening('adult-basic-zero-v2-review', 'Listen. What is Lucia\'s job?', ['She is a teacher.', 'She is a doctor.', 'She is a pilot.'], 'She is a teacher.', 'Hello, I am Lucia. I am from Chile, and I am a teacher at a small school.', adultImages.give),
    ],
  },

  'basic-1': {
    oralEvaluation: [
      { topic: 'ROUTINES', question: 'Describe your daily routine with present simple and include at least one time expression.' },
      { topic: 'OTHER PEOPLE', question: 'Describe another person\'s routine using he, she, or it and correct third-person forms.' },
      { topic: 'QUESTIONS AND NEGATIVES', question: 'Ask two present simple questions and answer one of them with a negative sentence.' },
      { topic: 'WORK AND FOOD', question: 'Say what a person does for work and order food or drinks in a simple restaurant roleplay.' },
      { topic: 'PREFERENCES', question: 'Talk about food or free-time preferences using adverbs of frequency, some or any, and like or love plus -ing.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-basic-1-v2-present-simple-routines', 'Choose the correct sentence.', ['We work from Monday to Friday.', 'We works from Monday to Friday.', 'We are work from Monday to Friday.'], 'We work from Monday to Friday.', adultImages.avatar),
      multipleChoice('adult-basic-1-v2-third-person', 'Complete the sentence: My sister ___ coffee every morning.', ['drink', 'drinks', 'drinking'], 'drinks', adultImages.homework),
      multipleChoice('adult-basic-1-v2-negative-interrogative', 'Choose the correct question.', ['Does he live near here?', 'Do he lives near here?', 'Does he lives near here?'], 'Does he live near here?', adultImages.ask),
      multipleChoice('adult-basic-1-v2-professions-workplaces', 'Which sentence is correct?', ['A chef works in a restaurant.', 'A chef work in a restaurant.', 'A chef is work in restaurant.'], 'A chef works in a restaurant.', adultImages.prepIn),
      multipleChoice('adult-basic-1-v2-daily-routines-time', 'Choose the sentence with a correct time expression.', ['I get up at six o\'clock.', 'I get up in six o\'clock.', 'I get up at six o\'clock in the morning time at.'], 'I get up at six o\'clock.', adultImages.homework),
      multipleChoice('adult-basic-1-v2-frequency-adverbs', 'Which sentence is correct?', ['She always checks her email before work.', 'She checks always her email before work.', 'She always is check her email before work.'], 'She always checks her email before work.', adultImages.avatar),
      multipleChoice('adult-basic-1-v2-food-restaurants', 'What is the best restaurant sentence?', ['I would like a chicken sandwich, please.', 'I like one sandwich chicken now.', 'Give me sandwiching chicken please now.'], 'I would like a chicken sandwich, please.', adultImages.homework),
      multipleChoice('adult-basic-1-v2-countable-uncountable', 'Choose the correct option.', ['We need some rice and some apples.', 'We need any rice and some apples.', 'We need a rice and an apple some.'], 'We need some rice and some apples.', adultImages.prepNextTo),
      multipleChoice('adult-basic-1-v2-likes-preferences', 'Which sentence is correct?', ['They love watching movies at home.', 'They love watch movies at home.', 'They loving to watch movies at home.'], 'They love watching movies at home.', adultImages.avatar),
      listening('adult-basic-1-v2-review', 'Listen. What does the speaker usually have for breakfast?', ['Coffee and toast.', 'Soup and salad.', 'Rice and chicken.'], 'Coffee and toast.', 'I get up at seven, take a shower, and usually have coffee and toast before I go to work.', adultImages.give),
    ],
  },

  'basic-2': {
    oralEvaluation: [
      { topic: 'ROUTINES AND NOW', question: 'Compare what you usually do with what you are doing right now using present simple and present continuous.' },
      { topic: 'PREFERENCES', question: 'Talk about two likes or dislikes and explain one of them with a short reason.' },
      { topic: 'WEATHER AND INSTRUCTIONS', question: 'Describe today\'s weather and give two simple instructions using imperatives.' },
      { topic: 'DIRECTIONS AND CALLS', question: 'Roleplay asking for directions and then start or continue a short phone call politely.' },
      { topic: 'REVIEW PROJECT', question: 'Give a short end-of-level presentation about your routine, what is happening now, and one place you can describe.' },
      { topic: 'STATIVE VS ACTION', question: 'Use one stative verb and one action verb correctly in present simple or present continuous.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-basic-2-v2-routines-present-simple', 'Choose the correct routine sentence.', ['I usually start work at eight.', 'I am usually start work at eight.', 'I usually starting work at eight.'], 'I usually start work at eight.', adultImages.avatar),
      multipleChoice('adult-basic-2-v2-present-progressive', 'Which sentence is correct?', ['She is studying in the library now.', 'She studying in the library now.', 'She is study in the library now.'], 'She is studying in the library now.', adultImages.homework),
      multipleChoice('adult-basic-2-v2-preferences', 'Choose the best sentence about preferences.', ['I prefer tea, but I also like coffee.', 'I preference tea but also liking coffee.', 'I prefering tea and coffee also.'], 'I prefer tea, but I also like coffee.', adultImages.avatar),
      multipleChoice('adult-basic-2-v2-compare-tenses', 'Which sentence shows a usual activity and a current action correctly?', ['He works at home, but today he is working in the office.', 'He is work at home, but today he works in the office.', 'He works at home, but today he working in the office.'], 'He works at home, but today he is working in the office.', adultImages.prepIn),
      multipleChoice('adult-basic-2-v2-stative-dynamic', 'Which sentence is correct?', ['I know the answer, but I am writing it now.', 'I am knowing the answer, but I write it now.', 'I know the answer, but I am write it now.'], 'I know the answer, but I am writing it now.', adultImages.prepNextTo),
      multipleChoice('adult-basic-2-v2-weather-seasons', 'Choose the correct weather sentence.', ['It is windy in autumn.', 'It windy in autumn.', 'It is wind in autumn.'], 'It is windy in autumn.', adultImages.homework),
      multipleChoice('adult-basic-2-v2-imperatives', 'Which sentence is an imperative?', ['Turn left at the corner.', 'You turning left at the corner.', 'Left turn you at corner.'], 'Turn left at the corner.', adultImages.give),
      multipleChoice('adult-basic-2-v2-directions', 'What is the best answer to give directions?', ['Go straight and take the second right.', 'You go straight the second right taking.', 'Straight go and the second right you take.'], 'Go straight and take the second right.', adultImages.ask),
      multipleChoice('adult-basic-2-v2-phone-calls', 'Choose the most natural phone expression.', ['May I speak to Mr. Gomez, please?', 'I speak with Mr. Gomez now?', 'Speak Mr. Gomez for me now please?'], 'May I speak to Mr. Gomez, please?', adultImages.avatar),
      listening('adult-basic-2-v2-review-simple-continuous', 'Listen. What is true?', ['The speaker works from home today only.', 'The speaker always works from the cafe.', 'The speaker is on vacation all week.'], 'The speaker works from home today only.', 'I usually work in the office, but today I am working from home because my team is online all day.', adultImages.homework),
      multipleChoice('adult-basic-2-v2-final-project', 'Which sentence is a good short project summary?', ['I usually take the bus, today I am walking, and the bank is next to my office.', 'I bus usually today walking next office bank.', 'I am usually walk and next the bank office.'], 'I usually take the bus, today I am walking, and the bank is next to my office.', adultImages.prepIn),
    ],
  },

  'basic-3': {
    oralEvaluation: [
      { topic: 'ABILITIES AND REQUESTS', question: 'Say what you can or cannot do and make one polite request or permission question.' },
      { topic: 'RULES AND OBLIGATIONS', question: 'Explain one obligation and one thing you do not have to do in daily life.' },
      { topic: 'DESCRIPTIONS', question: 'Describe a person\'s clothes and appearance and explain how they travel to a city place.' },
      { topic: 'PAST OF TO BE', question: 'Talk about where you were in the past and share one childhood memory.' },
      { topic: 'BIOGRAPHIES AND DATES', question: 'Give a short biography with dates, months, or years and include one complete past sentence.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-basic-3-v2-abilities', 'Choose the correct sentence.', ['She can swim very well.', 'She can to swim very well.', 'She cans swim very well.'], 'She can swim very well.', adultImages.avatar),
      multipleChoice('adult-basic-3-v2-permissions-requests', 'Which sentence is a polite request?', ['Could you open the window, please?', 'Open the window you please?', 'Could you to open the window please?'], 'Could you open the window, please?', adultImages.ask),
      multipleChoice('adult-basic-3-v2-obligations', 'Choose the correct sentence.', ['Employees have to wear their ID cards.', 'Employees have wear to their ID cards.', 'Employees has to wears their ID cards.'], 'Employees have to wear their ID cards.', adultImages.homework),
      multipleChoice('adult-basic-3-v2-clothes-appearance', 'Which sentence is correct?', ['He is wearing a black jacket and blue jeans.', 'He wearing a black jacket and blue jeans.', 'He is wear black jacket and blue jeans.'], 'He is wearing a black jacket and blue jeans.', adultImages.avatar),
      multipleChoice('adult-basic-3-v2-city-transport', 'Choose the correct sentence.', ['I go to the museum by bus.', 'I go to the museum in bus.', 'I am go to museum by the buses.'], 'I go to the museum by bus.', adultImages.give),
      multipleChoice('adult-basic-3-v2-was-were', 'Which sentence is correct?', ['They were at home last night.', 'They was at home last night.', 'They were in home last night.'], 'They were at home last night.', adultImages.prepIn),
      multipleChoice('adult-basic-3-v2-childhood-memories', 'Choose the best sentence.', ['When I was a child, my favorite toy was a train.', 'When I was child, my favorite toy were a train.', 'When I am a child, my favorite toy was train.'], 'When I was a child, my favorite toy was a train.', adultImages.avatar),
      multipleChoice('adult-basic-3-v2-biographies', 'Which sentence fits a biography?', ['She was born in 1998 and became a famous singer.', 'She born in 1998 and become a famous singer.', 'She is born in 1998 and became singer.'], 'She was born in 1998 and became a famous singer.', adultImages.homework),
      multipleChoice('adult-basic-3-v2-dates-years-months', 'Which sentence is correct?', ['My birthday is on July third.', 'My birthday is in July third.', 'My birthday on third July is the.'], 'My birthday is on July third.', adultImages.prepNextTo),
      listening('adult-basic-3-v2-review', 'Listen. Where was the speaker last weekend?', ['At the beach.', 'At the airport.', 'At the office.'], 'At the beach.', 'Last weekend I was at the beach with my cousins. We went by bus, and I wore my new blue T-shirt.', adultImages.give),
    ],
  },

  'basic-4': {
    oralEvaluation: [
      { topic: 'PAST EVENTS', question: 'Describe a past event using one regular verb, one irregular verb, and one past negative or question.' },
      { topic: 'TRAVEL STORIES', question: 'Talk about a trip or vacation and organize the story with first, then, and finally.' },
      { topic: 'FUTURE PLANS', question: 'Explain one future plan with going to and one prediction or spontaneous decision with will.' },
      { topic: 'FUTURE CHOICES', question: 'Compare will and going to in two short examples that show the difference clearly.' },
      { topic: 'OPINIONS', question: 'Give an opinion, agree or disagree politely, and support your idea with one simple reason.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-basic-4-v2-past-regular', 'Choose the correct past simple sentence.', ['We visited our grandparents last Sunday.', 'We visit our grandparents last Sunday.', 'We visiteded our grandparents last Sunday.'], 'We visited our grandparents last Sunday.', adultImages.avatar),
      multipleChoice('adult-basic-4-v2-past-irregular', 'Which sentence is correct?', ['She went to the market yesterday.', 'She goed to the market yesterday.', 'She goes to the market yesterday.'], 'She went to the market yesterday.', adultImages.homework),
      multipleChoice('adult-basic-4-v2-past-questions-negatives', 'Choose the correct question.', ['Did they finish the report on time?', 'Did they finished the report on time?', 'Do they finish the report on time yesterday?'], 'Did they finish the report on time?', adultImages.ask),
      multipleChoice('adult-basic-4-v2-travel-vocabulary', 'Which sentence uses travel vocabulary correctly?', ['We stayed at a hotel near the beach.', 'We stayed at a beach near the hoteling.', 'We was in a hotel beach near.'], 'We stayed at a hotel near the beach.', adultImages.give),
      multipleChoice('adult-basic-4-v2-connectors-anecdotes', 'Which sequence is the clearest?', ['First we checked in, then we went out, and finally we had dinner.', 'Then first dinner, finally checked in, we went out.', 'First and because and finally we had.'], 'First we checked in, then we went out, and finally we had dinner.', adultImages.avatar),
      multipleChoice('adult-basic-4-v2-going-to', 'Choose the correct future plan.', ['I am going to study tonight.', 'I going to study tonight.', 'I am go to study tonight.'], 'I am going to study tonight.', adultImages.homework),
      multipleChoice('adult-basic-4-v2-will', 'Which sentence shows a prediction?', ['I think it will rain tomorrow.', 'I think it going to rain tomorrow without plan.', 'I think it rains tomorrow.'], 'I think it will rain tomorrow.', adultImages.prepIn),
      multipleChoice('adult-basic-4-v2-will-vs-going-to', 'Choose the best sentence for a decision made at the moment.', ['The phone is ringing. I will answer it.', 'The phone is ringing. I am going to answer it every day.', 'The phone rings. I answering it will.'], 'The phone is ringing. I will answer it.', adultImages.prepNextTo),
      multipleChoice('adult-basic-4-v2-opinions-agreement', 'Which response shows polite agreement?', ['I agree because that option is more practical.', 'I am agree because that option practical.', 'Agree I because practical is.'], 'I agree because that option is more practical.', adultImages.avatar),
      listening('adult-basic-4-v2-preparation-review', 'Listen. What is the speaker going to do next weekend?', ['Visit her aunt.', 'Buy a new car.', 'Move to another country.'], 'Visit her aunt.', 'Next weekend I am going to visit my aunt, and I think we will cook together if the weather is good.', adultImages.give),
    ],
  },

  inter: {
    oralEvaluation: [
      { topic: 'CONDITIONALS', question: 'Explain one real future possibility with the first conditional and one possible result.' },
      { topic: 'ADVICE AND POSSIBILITY', question: 'Give advice about a problem and also explain what may, might, or could happen.' },
      { topic: 'COMPARISONS', question: 'Compare two options and describe whether one is too expensive, big, difficult, or not enough for a purpose.' },
      { topic: 'WORK COMMUNICATION', question: 'Describe a work or office situation and say how you would write a short formal email about it.' },
      { topic: 'EXPERIENCES', question: 'Talk about one life experience using present perfect and compare it with a specific past event.' },
      { topic: 'VERB PATTERNS', question: 'Use one gerund, one infinitive, and one phrasal verb naturally in a short answer.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-inter-v2-basic-tenses-review', 'Choose the best sentence.', ['She works in sales, but today she is meeting a client outside the office.', 'She work in sales, but today she meeting a client.', 'She is work in sales, but today she meets outside.'], 'She works in sales, but today she is meeting a client outside the office.', adultImages.avatar),
      multipleChoice('adult-inter-v2-first-conditional', 'Which sentence is correct?', ['If it rains, we will stay inside.', 'If it will rain, we stay inside.', 'If it rains, we stays inside.'], 'If it rains, we will stay inside.', adultImages.homework),
      multipleChoice('adult-inter-v2-should-ought-to', 'Choose the best advice.', ['You should back up your files before the meeting.', 'You should to back up your files before the meeting.', 'You ought back up your files before the meeting.'], 'You should back up your files before the meeting.', adultImages.ask),
      multipleChoice('adult-inter-v2-may-might-could', 'Which sentence expresses possibility correctly?', ['The manager might be in another meeting.', 'The manager might is in another meeting.', 'The manager could to be in another meeting.'], 'The manager might be in another meeting.', adultImages.avatar),
      multipleChoice('adult-inter-v2-comparatives-superlatives', 'Choose the correct comparison.', ['This option is cheaper than the other one.', 'This option is more cheap than the other one.', 'This option cheaper that the other.'], 'This option is cheaper than the other one.', adultImages.prepNextTo),
      multipleChoice('adult-inter-v2-too-enough', 'Complete the sentence: The room is not ___ for twelve people.', ['too', 'enough', 'big enough'], 'big enough', adultImages.prepIn),
      multipleChoice('adult-inter-v2-work-office-vocabulary', 'Which sentence is correct?', ['The printer is next to the conference room.', 'The printer is next of the conference room.', 'The printer next conference room is.'], 'The printer is next to the conference room.', adultImages.give),
      multipleChoice('adult-inter-v2-formal-emails', 'Which email opening is the most appropriate?', ['Dear Ms. Rivera, I am writing to confirm tomorrow\'s meeting.', 'Hey Ms. Rivera, what\'s up with the meeting?', 'Meeting tomorrow? Answer fast.'], 'Dear Ms. Rivera, I am writing to confirm tomorrow\'s meeting.', adultImages.homework),
      multipleChoice('adult-inter-v2-present-perfect-experiences', 'Choose the correct sentence.', ['I have worked with international clients before.', 'I have work with international clients before.', 'I worked with international clients since 2022.'], 'I have worked with international clients before.', adultImages.avatar),
      multipleChoice('adult-inter-v2-past-simple-vs-present-perfect', 'Which sentence correctly uses present perfect and past simple?', ['I have visited Lima twice, and I went there last year.', 'I have visited Lima twice, and I have gone there last year.', 'I visited Lima twice, and I have went there last year.'], 'I have visited Lima twice, and I went there last year.', adultImages.prepIn),
      multipleChoice('adult-inter-v2-gerunds-infinitives', 'Choose the correct sentence.', ['She decided to study marketing after finishing high school.', 'She decided studying marketing after finish high school.', 'She decided to studying marketing after finished high school.'], 'She decided to study marketing after finishing high school.', adultImages.prepNextTo),
      listening('adult-inter-v2-phrasal-verbs', 'Listen. What does the speaker do after the call drops?', ['He calls back immediately.', 'He hangs up on purpose.', 'He gives the project away.'], 'He calls back immediately.', 'The call dropped during the update, so I called back immediately and then wrote down the key points.', adultImages.ask),
    ],
  },

  advanced: {
    oralEvaluation: [
      { topic: 'PRONUNCIATION AND FLUENCY', question: 'Read or say a short sentence naturally, linking words and using intonation to sound more fluent.' },
      { topic: 'HYPOTHETICALS', question: 'Explain one imaginary present situation with the second conditional and one past regret with the third conditional.' },
      { topic: 'REPORTED IDEAS', question: 'Report what someone said and add a relative clause to give more detail about a person, place, or thing.' },
      { topic: 'BUSINESS AND NEGOTIATION', question: 'Handle a short negotiation or customer problem using formal and solution-focused language.' },
      { topic: 'FUTURE AND PHRASAL VERBS', question: 'Describe a future timeline with future continuous or future perfect and include one advanced phrasal verb in context.' },
    ],
    virtualEvaluation: [
      listening('adult-advanced-v2-connected-speech', 'Listen. What attitude does the speaker show with the intonation?', ['Polite interest.', 'Strong anger.', 'Complete confusion.'], 'Polite interest.', 'Could you tell me a little more about that idea?', adultImages.avatar),
      multipleChoice('adult-advanced-v2-second-conditional', 'Choose the correct second conditional sentence.', ['If I had more time, I would learn another language.', 'If I would have more time, I learned another language.', 'If I had more time, I will learn another language.'], 'If I had more time, I would learn another language.', adultImages.homework),
      multipleChoice('adult-advanced-v2-third-conditional', 'Which sentence is correct?', ['If they had left earlier, they would have caught the train.', 'If they would have left earlier, they had caught the train.', 'If they had left earlier, they would catch the train yesterday.'], 'If they had left earlier, they would have caught the train.', adultImages.prepIn),
      multipleChoice('adult-advanced-v2-reported-speech', 'Choose the correct reported sentence.', ['She said that she was feeling tired.', 'She said that she is feeling tired yesterday.', 'She told that she was feeling tired.'], 'She said that she was feeling tired.', adultImages.ask),
      multipleChoice('adult-advanced-v2-relative-clauses', 'Which sentence is correct?', ['The colleague who joined last month leads the project now.', 'The colleague which joined last month leads the project now.', 'The colleague who he joined last month leads the project now.'], 'The colleague who joined last month leads the project now.', adultImages.avatar),
      multipleChoice('adult-advanced-v2-business-negotiation', 'Which sentence sounds strongest in a negotiation?', ['We can accept the price if delivery is included.', 'We accept price if delivery included maybe.', 'Delivery included and accept we can price.'], 'We can accept the price if delivery is included.', adultImages.homework),
      multipleChoice('adult-advanced-v2-complaints-solutions', 'What is the best customer-service response?', ['I understand the issue, and I will arrange a replacement today.', 'That is not my problem at all.', 'Maybe later someone see this.'], 'I understand the issue, and I will arrange a replacement today.', adultImages.give),
      multipleChoice('adult-advanced-v2-future-continuous-perfect', 'Choose the correct sentence.', ['By next Friday, we will have finished the first draft.', 'By next Friday, we will finishing the first draft.', 'By next Friday, we have finished the first draft.'], 'By next Friday, we will have finished the first draft.', adultImages.prepNextTo),
      multipleChoice('adult-advanced-v2-advanced-phrasal-verbs', 'What does "carry out" mean in: The team will carry out the survey next month?', ['Conduct', 'Cancel', 'Hide'], 'Conduct', adultImages.prepIn),
      listening('adult-advanced-v2-review', 'Listen. What happened after the client complained?', ['The team offered a revised timeline and a discount.', 'The team ignored the complaint completely.', 'The client cancelled every future project immediately.'], 'The team offered a revised timeline and a discount.', 'The client said the shipment was late, so we apologized, offered a revised timeline, and added a small discount to rebuild trust.', adultImages.ask),
    ],
  },

  masters: {
    oralEvaluation: [
      { topic: 'IDIOMS AND EMPHASIS', question: 'Use one idiom and one emphatic structure such as inversion or a cleft sentence in a clear short response.' },
      { topic: 'DIPLOMACY', question: 'Disagree diplomatically with a proposal and soften your language with hedging.' },
      { topic: 'PRESENTATIONS', question: 'Deliver a short high-impact introduction and then support your position with a persuasive argument.' },
      { topic: 'DEBATE AND ANALYSIS', question: 'Respond to a complex issue, acknowledge another perspective, and analyze one news or opinion angle.' },
      { topic: 'STORYTELLING', question: 'Tell a professional story with a clear setup, challenge, action, and result.' },
    ],
    virtualEvaluation: [
      multipleChoice('adult-masters-v2-idioms', 'What does the idiom "break the ice" mean?', ['Start a conversation more easily.', 'Destroy a frozen object quickly.', 'End a relationship immediately.'], 'Start a conversation more easily.', adultImages.avatar),
      multipleChoice('adult-masters-v2-inversion', 'Choose the correct inversion.', ['Rarely have I seen such a detailed report.', 'Rarely I have seen such a detailed report.', 'Rarely have seen I such a detailed report.'], 'Rarely have I seen such a detailed report.', adultImages.homework),
      multipleChoice('adult-masters-v2-cleft-sentences', 'Which sentence is a cleft sentence?', ['What impressed the clients most was the speed of the response.', 'The speed of the response impressed the clients most very much.', 'Impressed the clients most was speed of response.'], 'What impressed the clients most was the speed of the response.', adultImages.prepIn),
      multipleChoice('adult-masters-v2-hedging', 'Which sentence uses diplomatic hedging?', ['It seems that the current plan may need a small adjustment.', 'This plan is clearly bad and should be ignored.', 'The plan fails because I say so.'], 'It seems that the current plan may need a small adjustment.', adultImages.ask),
      multipleChoice('adult-masters-v2-high-impact-intro', 'Which opening is strongest for a presentation?', ['Imagine losing half your customers because of one unanswered email.', 'Hello, this is my presentation and I have some slides.', 'Today I will maybe speak about different things.'], 'Imagine losing half your customers because of one unanswered email.', adultImages.avatar),
      multipleChoice('adult-masters-v2-persuasive-argument', 'Which sentence is the most persuasive?', ['The proposal reduces costs, improves response time, and can be implemented without increasing workload.', 'The proposal is good because I like it.', 'We should do it because change is change.'], 'The proposal reduces costs, improves response time, and can be implemented without increasing workload.', adultImages.homework),
      multipleChoice('adult-masters-v2-debates', 'Which response acknowledges another view before disagreeing?', ['I understand the concern about cost; however, the long-term savings are stronger.', 'That argument is weak and not worth discussing.', 'No, because no.'], 'I understand the concern about cost; however, the long-term savings are stronger.', adultImages.prepNextTo),
      multipleChoice('adult-masters-v2-storytelling', 'Which option has the clearest storytelling structure?', ['Challenge, action, result, and lesson learned', 'Random details with no sequence', 'Only the ending with no context'], 'Challenge, action, result, and lesson learned', adultImages.give),
      multipleChoice('adult-masters-v2-opinion-news-analysis', 'Which sentence analyzes an opinion article instead of just summarizing it?', ['The writer frames the policy as urgent by focusing on immediate economic risk.', 'The article is about a policy and has four paragraphs.', 'I read the article on my phone this morning.'], 'The writer frames the policy as urgent by focusing on immediate economic risk.', adultImages.prepIn),
      listening('adult-masters-v2-final-project', 'Listen. What makes the response effective?', ['It combines a concrete example, analysis, and a clear conclusion.', 'It repeats the same idea without evidence.', 'It avoids the topic completely.'], 'It combines a concrete example, analysis, and a clear conclusion.', 'When our launch failed, I explained the problem, showed the sales data, and proposed a revised strategy. That balance of evidence and action helped the team approve the new plan.', adultImages.ask),
    ],
  },
};

export function applyAdultEvaluationOverrides(levels: CurriculumLevel[]) {
  for (const level of levels) {
    const override = evaluationOverrides[level.id];
    if (!override) continue;
    level.oralEvaluation = override.oralEvaluation;
    level.virtualEvaluation = override.virtualEvaluation;
  }
}
