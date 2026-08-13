import { CurriculumLevel, OralQuestion, VirtualQuestion } from '../types';
import imgTeenAssessment from '../assets/images/teens_assessment_welcome_1782228127925.jpg';
import imgTeenGadget from '../assets/images/teens_ask_gadget_1783000210943.jpg';
import imgTeenApps from '../assets/images/teens_apps_1782770528421.jpg';
import imgTeenSports from '../assets/images/teens_actions_sports_1783000515177.jpg';
import imgTeenBirthday from '../assets/images/teens_birthday_party_1782771276209.jpg';
import imgTeenQuiz from '../assets/images/teens_c5_quiz1_1783004350357.jpg';

type TeenEvaluationOverride = {
  oralEvaluation: OralQuestion[];
  virtualEvaluation: VirtualQuestion[];
};

const examImages = [
  imgTeenAssessment,
  imgTeenGadget,
  imgTeenApps,
  imgTeenSports,
  imgTeenBirthday,
  imgTeenQuiz,
];

function multipleChoice(
  id: string,
  question: string,
  options: [string, string, string],
  correctAnswer: string,
  imageIndex: number,
): VirtualQuestion {
  return {
    id,
    type: 'multiple-choice',
    question,
    options,
    correctAnswer,
    imageUrl: examImages[imageIndex % examImages.length],
  };
}

const evaluationOverrides: Record<string, TeenEvaluationOverride> = {
  'teens-basic-2': {
    oralEvaluation: [
      { topic: 'ANIMALS & HOMES', question: 'Describe an animal and its habitat, then describe your room using there is/are and a place word.' },
      { topic: 'CITY & JOBS', question: 'Explain how you travel to a city place and describe one dream job, its workplace, and why you like it.' },
      { topic: 'ABILITIES & RULES', question: 'Say two things you can or cannot do and explain two school rules using must, have to, or should.' },
      { topic: 'HEALTH & OUTINGS', question: 'Describe two healthy habits, then suggest a city outing, transport, meeting place, and time.' },
      { topic: 'ENTERTAINMENT & REVIEW', question: 'Recommend a movie, series, game, or song and support your opinion with details using and, but, and because.' },
    ],
    virtualEvaluation: [
      {
        id: 'teens-basic-2-v2-animals-habitats',
        type: 'multiple-choice',
        question: "Which sentence correctly describes a camel's habitat?",
        options: ['It lives in the ocean.', 'It lives in the desert.', 'It lives on a desk.'],
        correctAnswer: 'It lives in the desert.',
        imageUrl: '/images/teens-basic-2-class-01/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-room-house',
        type: 'multiple-choice',
        question: 'Choose the correct sentence about a room with two chairs.',
        options: ['There is two chairs.', 'There are two chairs.', 'There two chairs are.'],
        correctAnswer: 'There are two chairs.',
        imageUrl: '/images/teens-basic-2-class-02/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-transport-city',
        type: 'listening',
        question: 'Listen. How does Mia go to school?',
        options: ['By subway.', 'By bus.', 'On foot.'],
        correctAnswer: 'By subway.',
        audioText: 'Mia goes to school by subway. The station is next to the hospital.',
        imageUrl: '/images/teens-basic-2-class-03/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-jobs-professions',
        type: 'multiple-choice',
        question: 'Which sentence correctly connects a dream job and a reason?',
        options: ['I want be vet because animals.', 'I want to be a vet because I love animals.', 'I am want a vet for animals.'],
        correctAnswer: 'I want to be a vet because I love animals.',
        imageUrl: '/images/teens-basic-2-class-04/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-abilities',
        type: 'multiple-choice',
        question: 'Complete the ability sentence: Leo can ___ very well.',
        options: ['swims', 'swimming', 'swim'],
        correctAnswer: 'swim',
        imageUrl: '/images/teens-basic-2-class-05/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-school-rules',
        type: 'multiple-choice',
        question: 'Which sentence expresses a strong school rule?',
        options: ['Students must arrive on time.', 'Students might arrive on time.', 'Students like arrive on time.'],
        correctAnswer: 'Students must arrive on time.',
        imageUrl: '/images/teens-basic-2-class-06/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-sports-health',
        type: 'multiple-choice',
        question: 'Choose the correct sentence about a healthy habit.',
        options: ['I usually drink water after exercise.', 'I drink usually water after exercise.', 'I am usually drink water after exercise.'],
        correctAnswer: 'I usually drink water after exercise.',
        imageUrl: '/images/teens-basic-2-class-07/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-city-outing',
        type: 'multiple-choice',
        question: 'Which sentence makes a natural suggestion for an outing?',
        options: ["Let's meet at the park at five.", 'We meeting park five.', 'Let meet in five park.'],
        correctAnswer: "Let's meet at the park at five.",
        imageUrl: '/images/teens-basic-2-class-08/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-entertainment',
        type: 'multiple-choice',
        question: 'Which sentence gives and explains an entertainment preference?',
        options: ['I prefer comedy because it is funny.', 'I comedy prefer funny.', 'Comedy because my prefer.'],
        correctAnswer: 'I prefer comedy because it is funny.',
        imageUrl: '/images/teens-basic-2-class-09/slide-04.jpg',
      },
      {
        id: 'teens-basic-2-v2-speaking-review',
        type: 'listening',
        question: 'Listen. Which activity can the speaker NOT do?',
        options: ['Swim.', 'Skate.', 'Play soccer.'],
        correctAnswer: 'Skate.',
        audioText: "I can swim and play soccer, but I can't skate. I like soccer because it is exciting.",
        imageUrl: '/images/teens-basic-2-class-10/slide-04.jpg',
      },
    ],
  },

  'teens-basic-3': {
    oralEvaluation: [
      { topic: 'ROUTINES & SPORTS', question: 'Describe your daily routine with times, then talk about a sport, competition, or team you enjoy.' },
      { topic: 'TRADITIONS & FUTURE', question: 'Describe a holiday tradition and make two predictions about science, space, or the future.' },
      { topic: 'CHILDHOOD & TRAVEL', question: 'Share a childhood memory with was/were and tell a short travel anecdote in the past.' },
      { topic: 'BIOGRAPHY & STORIES', question: 'Give a short biography of a creator, artist, or athlete using past verbs and clear sequence connectors.' },
      { topic: 'PROBLEMS & PAST VERBS', question: 'Explain an everyday problem and its solution, using at least one irregular past verb and one regular -ed verb.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-basic-3-v2-routine-time', 'Choose the correct routine sentence.', ['I wake up at six thirty.', 'I wake at in six thirty.', 'I am wake up six thirty.'], 'I wake up at six thirty.', 0),
      multipleChoice('teens-basic-3-v2-sports-teams', 'A group of players working together is called a ___.', ['team', 'festival', 'planet'], 'team', 3),
      {
        id: 'teens-basic-3-v2-holidays-traditions',
        type: 'listening',
        question: 'Listen. What do families do during the festival?',
        options: ['They share food and dance.', 'They study alone.', 'They buy a new phone.'],
        correctAnswer: 'They share food and dance.',
        audioText: 'Every August, families in our town wear colorful clothes, share traditional food, and dance in the main square.',
        imageUrl: imgTeenBirthday,
      },
      multipleChoice('teens-basic-3-v2-space-future', 'Choose the correct future prediction.', ['People will travel to Mars one day.', 'People will to travel Mars.', 'People are travel Mars yesterday.'], 'People will travel to Mars one day.', 2),
      multipleChoice('teens-basic-3-v2-childhood-memories', 'Complete the memory: I ___ shy, but my friends ___ very friendly.', ['was / were', 'were / was', 'am / are'], 'was / were', 4),
      multipleChoice('teens-basic-3-v2-travel-anecdotes', 'Choose the correct past sentence about a vacation.', ['We goed to the beach last year.', 'We went to the beach last year.', 'We go to the beach last year.'], 'We went to the beach last year.', 0),
      multipleChoice('teens-basic-3-v2-biographies', 'Which sentence belongs in a biography?', ['She was born in 2005 and became an athlete.', 'She is born yesterday and become athlete.', 'She borns and becoming athlete.'], 'She was born in 2005 and became an athlete.', 3),
      multipleChoice('teens-basic-3-v2-story-connectors', 'Choose the clearest sequence of connectors for a story.', ['First, then, finally', 'Because, but, yesterday', 'Very, more, most'], 'First, then, finally', 1),
      multipleChoice('teens-basic-3-v2-everyday-problems', 'Which sentence clearly explains a problem and its solution?', ['My phone stopped working, so I asked for help.', 'My phone problem because help.', 'Stopped phone and I solution.'], 'My phone stopped working, so I asked for help.', 2),
      {
        id: 'teens-basic-3-v2-past-verbs-video',
        type: 'listening',
        question: 'Listen. Which two past-tense verbs do you hear?',
        options: ['went and watched', 'go and watch', 'gone and watching'],
        correctAnswer: 'went and watched',
        audioText: 'Yesterday, I went to the park and watched a short video with my friends.',
        imageUrl: imgTeenQuiz,
      },
    ],
  },

  'teens-basic-4': {
    oralEvaluation: [
      { topic: 'OPINIONS & ADVICE', question: 'Give your opinion about a teen issue and offer practical advice to someone with a related problem.' },
      { topic: 'CONDITIONS & MESSAGES', question: 'Explain a possible condition and result, then write or say a clear message to organize the plan.' },
      { topic: 'COMPARISONS & SOLUTIONS', question: 'Compare two apps, phones, movies, or sports and describe one problem using too or enough.' },
      { topic: 'FRIENDS & EMAILS', question: 'Give respectful advice to a friend, then explain how the same idea would sound in an informal chat and a formal email.' },
      { topic: 'CUSTOMER SERVICE', question: 'Roleplay reporting a product or service problem, requesting a solution, and responding politely to follow-up questions.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-basic-4-v2-opinions', 'Which phrase introduces a personal opinion clearly?', ['In my opinion, schools should start later.', 'My opinion schools later.', 'I opinion that later school.'], 'In my opinion, schools should start later.', 0),
      multipleChoice('teens-basic-4-v2-advice', 'Your friend is stressed about an exam. What is the best advice?', ['You should make a study plan and sleep well.', 'You should to studying all night.', 'You must stressed more.'], 'You should make a study plan and sleep well.', 4),
      multipleChoice('teens-basic-4-v2-conditions-outcomes', 'Choose the sentence with a logical condition and outcome.', ['If you heat ice, it melts.', 'If you heat ice, it will melted.', 'If heat ice, melts it.'], 'If you heat ice, it melts.', 3),
      multipleChoice('teens-basic-4-v2-online-chats', 'Which message is clear and polite?', ['Send address now.', 'Could you send me the address, please?', 'You address sending?'], 'Could you send me the address, please?', 2),
      multipleChoice('teens-basic-4-v2-first-conditional', 'Complete the first conditional: If it rains, we ___ at home.', ['will stay', 'stayed', 'would stayed'], 'will stay', 4),
      multipleChoice('teens-basic-4-v2-comparatives-superlatives', 'Choose the correct comparison.', ['This app is more useful than that one.', 'This app is usefuller that one.', 'This app is the more useful than.'], 'This app is more useful than that one.', 2),
      multipleChoice('teens-basic-4-v2-too-enough', 'Complete the problem: This laptop is ___ expensive for me to buy.', ['too', 'enough', 'too much of'], 'too', 1),
      multipleChoice('teens-basic-4-v2-friend-advice', 'Which sentence gives supportive advice?', ['You should talk to someone you trust.', 'You should talking trusted someone.', 'You no should talk nobody.'], 'You should talk to someone you trust.', 4),
      multipleChoice('teens-basic-4-v2-formal-informal-messages', 'Which opening is most appropriate for a formal email to a teacher?', ['Hey! What’s up?', 'Dear Ms. Lopez,', 'Yo, teacher!'], 'Dear Ms. Lopez,', 0),
      {
        id: 'teens-basic-4-v2-customer-service',
        type: 'listening',
        question: 'Listen. What solution does the customer request?',
        options: ['A replacement.', 'A larger bill.', 'A new password.'],
        correctAnswer: 'A replacement.',
        audioText: 'Hello. These headphones stopped working after two days. Could I get a replacement, please?',
        imageUrl: imgTeenGadget,
      },
    ],
  },

  'teens-inter': {
    oralEvaluation: [
      { topic: 'EXPERIENCES & PHRASAL VERBS', question: 'Describe a meaningful life experience and naturally use two phrasal verbs connected to what happened.' },
      { topic: 'POSSIBILITY & DEDUCTION', question: 'Look at an uncertain situation and explain what may, might, must, or cannot be true, giving reasons.' },
      { topic: 'CONDITIONALS', question: 'Explain one realistic future result with the first conditional and one imaginary situation with the second conditional.' },
      { topic: 'OPINIONS & DEBATE', question: 'State an opinion, agree or disagree respectfully, and support your position with one reason and one example.' },
      { topic: 'ONGOING EXPERIENCES', question: 'Compare a completed life experience with an activity that has been continuing, using present perfect and present perfect continuous.' },
      { topic: 'PODCAST & INTERVIEW', question: 'Give a short podcast-style answer or scholarship interview response with a clear opening, evidence, and conclusion.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-inter-v2-life-experiences', 'Choose the correct present perfect sentence about a life experience.', ['I have visited three countries.', 'I have visit three countries.', 'I visited three countries since 2020.'], 'I have visited three countries.', 0),
      multipleChoice('teens-inter-v2-slang-phrasal-verbs', 'What does “hang out” mean in: We hang out after school?', ['Spend time together', 'Suspend clothes outside', 'Cancel a meeting'], 'Spend time together', 1),
      multipleChoice('teens-inter-v2-possibilities', 'Sam is not answering, but his lights are on. Which is a reasonable possibility?', ['He might be at home.', 'He must to be at home.', 'He might is at home.'], 'He might be at home.', 2),
      multipleChoice('teens-inter-v2-hypothetical-conditionals', 'Choose the correct second conditional sentence.', ['If I ruled the world, I would make education free.', 'If I rule the world, I would made education free.', 'If I would rule the world, I make education free.'], 'If I ruled the world, I would make education free.', 3),
      multipleChoice('teens-inter-v2-agreeing-disagreeing', 'Which response disagrees respectfully?', ['That is completely stupid.', 'I see your point, but I have a different view.', 'No, you are wrong and that is all.'], 'I see your point, but I have a different view.', 4),
      multipleChoice('teens-inter-v2-podcast-debate', 'Which sentence supports a debate claim with evidence?', ['School clubs are useful because they help students build teamwork skills.', 'School clubs, yes, useful.', 'I say clubs and that proves it.'], 'School clubs are useful because they help students build teamwork skills.', 5),
      multipleChoice('teens-inter-v2-perfect-continuous', 'Complete the ongoing activity: She ___ for the podcast for three weeks.', ['has been preparing', 'has prepared since', 'is prepare'], 'has been preparing', 0),
      multipleChoice('teens-inter-v2-conversation-phrasal-verbs', 'Complete the sentence: I did not know the word, so I ___ it ___.', ['looked / up', 'looked / after', 'gave / up'], 'looked / up', 1),
      multipleChoice('teens-inter-v2-modal-deduction', "The classroom is locked and dark. Which deduction is most logical?", ["The teacher can't be inside.", 'The teacher must inside.', 'The teacher may to teach.'], "The teacher can't be inside.", 2),
      multipleChoice('teens-inter-v2-first-second-conditional', 'Which sentence describes a realistic future possibility?', ['If I study tonight, I will be ready tomorrow.', 'If I studied tonight, I would be ready in an imaginary world.', 'If I will study, I am ready yesterday.'], 'If I study tonight, I will be ready tomorrow.', 3),
      multipleChoice('teens-inter-v2-respectful-opinions', 'Choose the best phrase for challenging an opinion politely.', ['I understand your argument; however, the evidence suggests another conclusion.', 'You clearly know nothing about this.', 'No. Next topic.'], 'I understand your argument; however, the evidence suggests another conclusion.', 4),
      {
        id: 'teens-inter-v2-podcast-interview',
        type: 'listening',
        question: 'Listen. Why does the speaker consider herself a strong candidate?',
        options: ['She has teamwork experience and clear goals.', 'She dislikes group projects.', 'She has never joined an activity.'],
        correctAnswer: 'She has teamwork experience and clear goals.',
        audioText: 'I have organized two school projects, and I have been volunteering since March. These experiences have strengthened my teamwork skills, and I have clear goals for the program.',
        imageUrl: imgTeenAssessment,
      },
    ],
  },

  'teens-advanced': {
    oralEvaluation: [
      { topic: 'REPORTED SPEECH & NEWS', question: 'Summarize a short piece of news or conversation and accurately report what two people said or asked.' },
      { topic: 'RELATIVE CLAUSES & DETAIL', question: 'Describe a person, object, and place precisely using who, which, that, whose, and where.' },
      { topic: 'TECHNOLOGY & PASSIVE VOICE', question: 'Explain how a technology is made, used, or developed, including at least two passive structures.' },
      { topic: 'IDIOMS & DEBATE', question: 'Discuss AI, social media, education, or the environment and naturally use one idiom or phrasal verb.' },
      { topic: 'INTERVIEW & PROBLEM SOLVING', question: 'Answer an interview question with a concrete example, then propose and justify a solution to a realistic problem.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-advanced-v2-reported-speech', 'Mia said, “I am tired.” Choose the correct reported statement.', ['Mia said that she was tired.', 'Mia said that I am tired.', 'Mia said she tired was.'], 'Mia said that she was tired.', 0),
      multipleChoice('teens-advanced-v2-relative-clauses', 'Complete the sentence: The student ___ won the competition designed this app.', ['who', 'which', 'where'], 'who', 1),
      multipleChoice('teens-advanced-v2-tech-passive', 'Choose the correct passive sentence.', ['The device is powered by solar energy.', 'Solar energy powers by the device.', 'The device is power solar energy.'], 'The device is powered by solar energy.', 2),
      multipleChoice('teens-advanced-v2-idioms-context', 'What does “break the ice” mean in a social situation?', ['Make people feel more comfortable at the beginning', 'Damage something made of ice', 'End a friendship immediately'], 'Make people feel more comfortable at the beginning', 3),
      multipleChoice('teens-advanced-v2-reported-questions', 'Direct question: “Where do you live?” Choose the correct reported question.', ['She asked me where I lived.', 'She asked me where did I live.', 'She asked where do I live me.'], 'She asked me where I lived.', 4),
      multipleChoice('teens-advanced-v2-detailed-relative-clauses', 'Complete the sentence: That is the designer ___ ideas transformed the campaign.', ['whose', 'who is', 'which'], 'whose', 5),
      multipleChoice('teens-advanced-v2-passive-news', 'Choose the most appropriate passive news sentence.', ['The results were announced this morning.', 'The results announced this morning themselves.', 'They were announce the results morning.'], 'The results were announced this morning.', 0),
      multipleChoice('teens-advanced-v2-real-phrasal-verbs', 'In “The students carried out a survey,” what does “carried out” mean?', ['Conducted', 'Postponed', 'Discovered by accident'], 'Conducted', 1),
      multipleChoice('teens-advanced-v2-debates', 'Which statement makes a balanced, evidence-based debate point?', ['Although AI can support learning, schools need clear rules to protect independent thinking.', 'AI is good because I said so.', 'Everyone who disagrees is wrong.'], 'Although AI can support learning, schools need clear rules to protect independent thinking.', 2),
      {
        id: 'teens-advanced-v2-interview-problem-solving',
        type: 'listening',
        question: 'Listen. How did the speaker solve the team problem?',
        options: ['She divided the work and added progress checks.', 'She completed everything alone.', 'She cancelled the project.'],
        correctAnswer: 'She divided the work and added progress checks.',
        audioText: 'Our volunteer team was missing deadlines, so I divided the project into smaller tasks and introduced short progress checks. We finished two days early.',
        imageUrl: imgTeenQuiz,
      },
    ],
  },

  'teens-elite': {
    oralEvaluation: [
      { topic: 'FUTURE GOALS', question: 'Present a long-term goal and explain what you will be doing and will have achieved at two future points.' },
      { topic: 'PAST DECISIONS', question: 'Reflect on a past decision and use a mixed conditional to explain how a different choice could affect your present.' },
      { topic: 'DIPLOMACY & EMPHASIS', question: 'Challenge a proposal diplomatically and emphasize your main concern with a cleft sentence or inversion.' },
      { topic: 'ACADEMIC ARGUMENT', question: 'Deliver an academic introduction with context, a clear thesis, and a preview of two supporting points.' },
      { topic: 'LEADERSHIP & MEETINGS', question: 'Lead a short meeting: define the goal, invite contributions, delegate tasks, and summarize the final decision.' },
      { topic: 'FINAL PITCH', question: 'Pitch a project or business idea with a problem, solution, audience, evidence, and persuasive call to action.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-elite-v2-future-goals', 'Which sentence presents a clear long-term goal?', ['I intend to study environmental engineering and develop cleaner transport systems.', 'I maybe goal engineering things.', 'I intended tomorrow studying yesterday.'], 'I intend to study environmental engineering and develop cleaner transport systems.', 0),
      multipleChoice('teens-elite-v2-past-decisions', 'Choose the mixed conditional about a past decision with a present result.', ['If I had accepted the internship, I would have more experience now.', 'If I accepted the internship, I will have experience yesterday.', 'If I would accept it, I had experience now.'], 'If I had accepted the internship, I would have more experience now.', 1),
      multipleChoice('teens-elite-v2-diplomacy-nuance', 'Which response expresses disagreement with appropriate nuance?', ['I understand the proposal’s benefits; however, we may be underestimating the long-term cost.', 'This proposal is ridiculous and obviously wrong.', 'No, because I do not like it.'], 'I understand the proposal’s benefits; however, we may be underestimating the long-term cost.', 2),
      multipleChoice('teens-elite-v2-academic-writing', 'Which sentence is the strongest academic thesis?', ['Schools should teach media literacy because it strengthens source evaluation, responsible participation, and independent thought.', 'Media literacy is a thing in schools.', 'In this essay I will talk about stuff.'], 'Schools should teach media literacy because it strengthens source evaluation, responsible participation, and independent thought.', 3),
      multipleChoice('teens-elite-v2-leadership-teamwork', 'Which action best demonstrates effective team leadership?', ['Define the goal, match tasks to strengths, and schedule progress checks.', 'Do every task alone without consulting anyone.', 'Avoid decisions until the deadline.'], 'Define the goal, match tasks to strengths, and schedule progress checks.', 4),
      multipleChoice('teens-elite-v2-future-perfect', 'Complete the goal: By next June, we ___ the first version of the app.', ['will have completed', 'will be complete yesterday', 'have completing'], 'will have completed', 5),
      multipleChoice('teens-elite-v2-mixed-conditionals', 'Choose the mixed conditional linking a present trait to a past result.', ["If I were more organized, I wouldn't have missed the deadline.", "If I was organized, I won't miss yesterday.", "If I would be organized, I didn't miss."], "If I were more organized, I wouldn't have missed the deadline.", 0),
      multipleChoice('teens-elite-v2-cleft-inversion', 'Which sentence correctly uses inversion for emphasis?', ['Rarely have students faced such a complex decision.', 'Rarely students have faced such decision.', 'Rarely did faced students the decision.'], 'Rarely have students faced such a complex decision.', 1),
      multipleChoice('teens-elite-v2-academic-presentations', 'Which opening is most effective for an academic presentation?', ['Today I will argue that urban green spaces improve health, climate resilience, and community life.', 'My topic is parks and things.', 'I have slides, so let us begin somehow.'], 'Today I will argue that urban green spaces improve health, climate resilience, and community life.', 2),
      multipleChoice('teens-elite-v2-meetings-leadership', 'Which phrase helps a chairperson move a meeting toward a decision?', ['We have heard both options; shall we agree on the next step and assign responsibilities?', 'Everyone talk now about anything.', 'There is no need to summarize or decide.'], 'We have heard both options; shall we agree on the next step and assign responsibilities?', 3),
      {
        id: 'teens-elite-v2-final-pitch',
        type: 'listening',
        question: 'Listen. What is the central value of the proposed app?',
        options: ['It matches surplus cafeteria food with local community groups.', 'It sells more disposable packaging.', 'It replaces all school volunteers.'],
        correctAnswer: 'It matches surplus cafeteria food with local community groups.',
        audioText: 'Every day, cafeterias discard usable food while community groups need supplies. Our app matches verified surplus food with nearby organizations and coordinates safe collection times.',
        imageUrl: imgTeenApps,
      },
    ],
  },

  'teens-masters': {
    oralEvaluation: [
      { topic: 'CRITICAL DEBATE', question: 'Defend a position on a complex issue, acknowledge a strong counterargument, rebut it fairly, and state what evidence could change your view.' },
      { topic: 'MEDIA ANALYSIS', question: 'Analyze how a film, song, news story, or digital trend uses framing, audience, tone, and cultural context to shape meaning.' },
      { topic: 'ACADEMIC ENGLISH', question: 'Present a concise academic argument that distinguishes claims from evidence and integrates a source with appropriate caution.' },
      { topic: 'CONTENT & GLOBAL ISSUES', question: 'Deliver a podcast or TED-style segment connecting technology, ethics, climate, and society through one coherent central idea.' },
      { topic: 'INTERVIEW & SYNTHESIS', question: 'Answer a challenging interview question with a specific example, then synthesize two different perspectives in your conclusion.' },
    ],
    virtualEvaluation: [
      multipleChoice('teens-masters-v2-critical-thinking', 'Which response demonstrates the strongest critical thinking?', ['The proposal is promising, but its assumptions and long-term effects require independent evidence.', 'The proposal is popular, so it must be correct.', 'I dislike the proposal, which proves it is ineffective.'], 'The proposal is promising, but its assumptions and long-term effects require independent evidence.', 0),
      multipleChoice('teens-masters-v2-media-analysis', 'Which sentence analyzes media framing rather than merely summarizing content?', ['By focusing on individual success stories, the documentary minimizes the structural causes of the problem.', 'The documentary shows three people and lasts an hour.', 'I watched the documentary yesterday.'], 'By focusing on individual success stories, the documentary minimizes the structural causes of the problem.', 1),
      multipleChoice('teens-masters-v2-academic-english', 'Which sentence integrates a source with appropriate academic caution?', ['The findings suggest that flexible schedules may improve participation, although further research is needed.', 'The study proves the policy always works for everyone.', 'A source says schedules are good, end of discussion.'], 'The findings suggest that flexible schedules may improve participation, although further research is needed.', 2),
      multipleChoice('teens-masters-v2-ted-content', 'Which opening is the strongest hook for a TED-style presentation?', ['What if the device you use every day could also help solve your city’s largest environmental problem?', 'Hello. My presentation has ten slides.', 'Today I speak about a topic because I must.'], 'What if the device you use every day could also help solve your city’s largest environmental problem?', 3),
      multipleChoice('teens-masters-v2-competitive-debate', 'Which sentence offers a substantive rebuttal?', ['The opposing argument identifies a real cost; however, it overlooks the savings produced over the full life of the program.', 'They are wrong because our side is better.', 'I disagree strongly, so the point is false.'], 'The opposing argument identifies a real cost; however, it overlooks the savings produced over the full life of the program.', 4),
      multipleChoice('teens-masters-v2-cultural-analysis', 'Which question best supports a deep analysis of digital culture?', ['Whose interests are amplified by the platform’s algorithm, and whose perspectives remain less visible?', 'How many minutes long is the video?', 'Did I personally enjoy every scene?'], 'Whose interests are amplified by the platform’s algorithm, and whose perspectives remain less visible?', 5),
      multipleChoice('teens-masters-v2-university-exchange', 'Which sentence is most appropriate in a formal exchange-program email?', ['I would appreciate clarification regarding the course requirements and application timeline.', 'Hey, tell me all the course stuff ASAP.', 'I want info because your website confused me lol.'], 'I would appreciate clarification regarding the course requirements and application timeline.', 0),
      multipleChoice('teens-masters-v2-podcast-video-essay', 'Which structure creates the clearest analytical video essay?', ['Central claim, contextual evidence, analysis, counterpoint, and conclusion', 'Unrelated clips followed by a sudden opinion', 'Conclusion first with no claim or evidence'], 'Central claim, contextual evidence, analysis, counterpoint, and conclusion', 1),
      multipleChoice('teens-masters-v2-global-issues', 'Which statement best captures an ethical trade-off?', ['The technology could reduce emissions, yet unequal access may deepen existing social disparities.', 'The technology is new, so it has no disadvantages.', 'Ethics and access are unrelated to technology.'], 'The technology could reduce emissions, yet unequal access may deepen existing social disparities.', 2),
      {
        id: 'teens-masters-v2-interview-conversation',
        type: 'listening',
        question: 'Listen. What makes the response effective?',
        options: ['It gives a concrete example, result, and lesson.', 'It avoids answering the question.', 'It lists skills without evidence.'],
        correctAnswer: 'It gives a concrete example, result, and lesson.',
        audioText: 'When our research team lost a key data source, I proposed a smaller pilot study, reassigned the analysis tasks, and documented the limitation. We met the deadline and learned to build contingency plans earlier.',
        imageUrl: imgTeenAssessment,
      },
    ],
  },
};

export function applyTeenEvaluationOverrides(levels: CurriculumLevel[]) {
  for (const level of levels) {
    const override = evaluationOverrides[level.id];
    if (!override) continue;
    level.oralEvaluation = override.oralEvaluation;
    level.virtualEvaluation = override.virtualEvaluation;
  }
}
