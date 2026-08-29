export type TeenLessonKernel = {
  keywords: [string, string, string, string];
  models: [string, string, string];
  mission: string;
};

export const teenLessonKernels: Record<string, TeenLessonKernel> = {
  // === LEVEL 0: TEEN STARTUP (teens-basic-zero) ===
  'c-teens-basic-zero-1': {
    keywords: ['hello', 'name', 'meet you', 'I am'],
    models: ['Hello, my name is Alex and I am 14.', 'What is your name?', 'Nice to meet you!'],
    mission: 'Saludar, presentarte y preguntar el nombre de tus compañeros con el verbo To Be.'
  },
  'c-teens-basic-zero-2': {
    keywords: ['age', 'birthday', 'months', 'years old'],
    models: ['I am 14 years old.', 'My birthday is in September.', 'How old are your friends?'],
    mission: 'Preguntar y decir tu edad, números del 1 al 31 y meses de cumpleaños.'
  },
  'c-teens-basic-zero-3': {
    keywords: ['can', 'can’t', 'body', 'action'],
    models: ['I can run fast and jump high.', 'My brother can’t swim yet.', 'Can you dance hip-hop?'],
    mission: 'Expresar habilidades corporales y acciones usando can y can’t.'
  },
  'c-teens-basic-zero-4': {
    keywords: ['have', 'has', 'gadget', 'laptop'],
    models: ['I have a blue smartphone.', 'She has a new gaming laptop.', 'Do you have headphones?'],
    mission: 'Hablar de tus dispositivos tecnológicos favoritos usando have y has.'
  },
  'c-teens-basic-zero-5': {
    keywords: ['like', 'don’t like', 'flavor', 'because'],
    models: ['I like pepperoni pizza because it is delicious.', 'I don’t like spicy snacks.', 'Do you like iced tea?'],
    mission: 'Expresar gustos y disgustos de comida explicando la razón con because.'
  },
  'c-teens-basic-zero-6': {
    keywords: ['shape', 'color', 'pattern', 'striped'],
    models: ['I wear a blue striped t-shirt.', 'This backpack is round and black.', 'Look at that checkered cap.'],
    mission: 'Describir ropa y objetos usando formas, colores y patrones geométricos.'
  },
  'c-teens-basic-zero-7': {
    keywords: ['there is', 'there are', 'subject', 'backpack'],
    models: ['There is a notebook in my backpack.', 'There are three pens on the desk.', 'Is there a calculator?'],
    mission: 'Describir útiles y materias escolares usando there is y there are.'
  },
  'c-teens-basic-zero-8': {
    keywords: ['pet', 'furry', 'friendly', 'animal'],
    models: ['I have a friendly golden dog.', 'This cat is small and playful.', 'My pet has long ears.'],
    mission: 'Describir mascotas y animales con adjetivos físicos y de personalidad.'
  },
  'c-teens-basic-zero-9': {
    keywords: ['hobby', 'play', 'listen', 'free time'],
    models: ['I love playing video games in my free time.', 'I listen to pop music after school.', 'My friend paints portraits.'],
    mission: 'Hablar de tus pasatiempos y actividades de tiempo libre favoritas.'
  },
  'c-teens-basic-zero-10': {
    keywords: ['family', 'brother', 'possessive', 'sister'],
    models: ['This is my sister; her name is Sofia.', 'My parents are very supportive.', 'David’s brother plays soccer.'],
    mission: 'Presentar a tu familia y amigos usando posesivos (my, her, his, ’s).'
  },
  'c-teens-basic-zero-11': {
    keywords: ['alphabet', 'spell', 'username', 'letters'],
    models: ['How do you spell your username?', 'It is spelled A-L-E-X-9-9.', 'My email starts with a double letter.'],
    mission: 'Deletrear nombres, correos y usuarios usando el alfabeto en inglés.'
  },
  'c-teens-basic-zero-12': {
    keywords: ['profile', 'bio', 'city', 'goals'],
    models: ['I am a student from Medellin and I love tech.', 'My passion is digital art and coding.', 'Welcome to my social bio!'],
    mission: 'Crear una biografía personal completa integrando todos tus datos y gustos.'
  },
  'c-teens-basic-zero-13': {
    keywords: ['wearing', 'sneakers', 'hoodie', 'style'],
    models: ['Today I am wearing a black hoodie and white sneakers.', 'She is wearing blue jeans.', 'What are you wearing?'],
    mission: 'Describir tu estilo y outfit del día usando Present Continuous.'
  },
  'c-teens-basic-zero-14': {
    keywords: ['in front of', 'under', 'behind', 'classroom'],
    models: ['The backpack is under the desk.', 'My notebook is next to the laptop.', 'Where is the school library?'],
    mission: 'Preguntar y dar la ubicación exacta de objetos perdidos en la escuela.'
  },
  'c-teens-basic-zero-15': {
    keywords: ['routine', 'wake up', 'at seven', 'breakfast'],
    models: ['I wake up at six thirty every morning.', 'I have breakfast and go to school.', 'She studies English at five PM.'],
    mission: 'Contar tu rutina diaria habitual usando Presente Simple y horas.'
  },
  'c-teens-basic-zero-16': {
    keywords: ['review', 'skills', 'pitch', 'startup'],
    models: ['I can introduce myself, describe my world, and talk about my routine.', 'I have a clear goal in English.', 'Let’s celebrate completing Level 0!'],
    mission: 'Sintetizar y celebrar todos los aprendizajes y habilidades del Nivel 0.'
  },

  // === LEVEL 1: TEEN EXPLORER (teens-basic-1) ===
  'c-teens-basic-1-1': {
    keywords: ['him', 'her', 'them', 'us'],
    models: ['I talk to him after school every day.', 'She helps us with our math project.', 'Do you know them from the music club?'],
    mission: 'Hablar de tus amigos y cómo interactúas con ellos usando pronombres de objeto.'
  },
  'c-teens-basic-1-2': {
    keywords: ['energy', 'healthy', 'water', 'because'],
    models: ['I drink water because it gives me energy.', 'We eat fruit because it keeps us healthy.', 'Sleeping well improves focus.'],
    mission: 'Explicar la relación entre comida, agua, sueño y energía usando because.'
  },
  'c-teens-basic-1-3': {
    keywords: ['will rain', 'sunny', 'need to', 'forecast'],
    models: ['It will rain this afternoon, so take an umbrella.', 'The weather will be sunny tomorrow.', 'What will you wear?'],
    mission: 'Dar el pronóstico del clima y recomendar qué llevar usando will.'
  },
  'c-teens-basic-1-4': {
    keywords: ['stay on', 'don’t feed', 'keep clean', 'rules'],
    models: ['Stay on the bike path in the park.', 'Don’t feed the wild animals.', 'Keep the green areas clean.'],
    mission: 'Dar instrucciones y explicar las reglas de convivencia en el parque con imperativos.'
  },
  'c-teens-basic-1-5': {
    keywords: ['going to', 'weekend', 'plan', 'meet'],
    models: ['I am going to watch a movie this Saturday.', 'We are going to meet at the mall at 4 PM.', 'What are you going to do?'],
    mission: 'Organizar un plan de fin de semana con día, hora y lugar usando going to.'
  },
  'c-teens-basic-1-6': {
    keywords: ['would like', 'invite', 'can’t make it', 'cinema'],
    models: ['Would you like to go to the cinema tonight?', 'I’d love to, what time?', 'I’m sorry, I can’t make it today.'],
    mission: 'Hacer invitaciones a amigos, aceptar o rechazar con cortesía y proponer otro horario.'
  },
  'c-teens-basic-1-7': {
    keywords: ['how much', 'size', 'try on', 'pay'],
    models: ['How much is this jacket?', 'Can I try it on in medium size?', 'I will pay by card, please.'],
    mission: 'Preguntar precios, tallas, probarte ropa y pagar cortésmente en una tienda.'
  },
  'c-teens-basic-1-8': {
    keywords: ['can I have', 'menu', 'would like', 'order'],
    models: ['Can I have a chicken sandwich and an orange juice, please?', 'Does the dessert have nuts?', 'How much is the total?'],
    mission: 'Hacer un pedido en una cafetería, preguntar sobre el menú y pagar.'
  },
  'c-teens-basic-1-9': {
    keywords: ['use to', 'always', 'rarely', 'online safety'],
    models: ['I use my phone to practice English every day.', 'I always verify links before clicking.', 'She rarely shares passwords.'],
    mission: 'Describir tus hábitos y medidas de seguridad digital usando use...to y frecuencia.'
  },
  'c-teens-basic-1-10': {
    keywords: ['help call', 'confirm', 'assign', 'trip plan'],
    models: ['Could you help me book the tickets?', 'Let’s assign tasks for the weekend trip.', 'I confirm we meet at 8:00 AM.'],
    mission: 'Pedir ayuda, coordinar responsabilidades y confirmar un viaje grupal.'
  },

  // === LEVEL 2: TEEN ADVENTURER (teens-basic-2) ===
  'c-teens-basic-2-1': {
    keywords: ['habitat', 'wild', 'hunt', 'adapt'],
    models: ['Lions live in the savanna and hunt in groups.', 'Penguins adapt to freezing temperatures.', 'This bird has colorful feathers.'],
    mission: 'Describir animales salvajes, sus hábitats y cómo se adaptan a su entorno.'
  },
  'c-teens-basic-2-2': {
    keywords: ['across from', 'upstairs', 'facing', 'located in'],
    models: ['My bedroom is upstairs, across from the studio.', 'The study desk is facing the window with a garden view.', 'The gaming corner is located next to the balcony.'],
    mission: 'Describir la distribución espacial de tu casa o habitación soñada con preposiciones avanzadas.'
  },
  'c-teens-basic-2-3': {
    keywords: ['go by', 'subway', 'turn left', 'cross street'],
    models: ['To get to the museum, go by subway to central station.', 'Turn right on 5th Avenue and walk two blocks.', 'It is opposite the park.'],
    mission: 'Dar y seguir direcciones urbanas usando medios de transporte con by.'
  },
  'c-teens-basic-2-4': {
    keywords: ['want to be', 'career', 'workplace', 'passion'],
    models: ['I want to be a software engineer in the future.', 'Architects design sustainable buildings.', 'She works in a robotics laboratory.'],
    mission: 'Hablar de tus profesiones soñadas, lugares de trabajo y proyectos de vida.'
  },
  'c-teens-basic-2-5': {
    keywords: ['good at', 'great at', 'could', 'couldn’t'],
    models: ['I am good at playing the electric guitar.', 'When I was seven, I could swim very fast.', 'She is great at coding interactive games.'],
    mission: 'Comparar tus talentos actuales con lo que podías hacer en el pasado con could y be good at.'
  },
  'c-teens-basic-2-6': {
    keywords: ['must', 'have to', 'should', 'school rule'],
    models: ['You must wear safety goggles in the chemistry lab.', 'Students have to submit assignments on time.', 'You should review before exams.'],
    mission: 'Explicar reglas escolares y dar recomendaciones usando must, have to y should.'
  },
  'c-teens-basic-2-7': {
    keywords: ['workout', 'twice a week', 'stay active', 'healthy'],
    models: ['I train soccer three times a week.', 'Staying active improves both energy and sleep.', 'How often do you exercise?'],
    mission: 'Describir tu rutina deportiva semanal y tus hábitos activos con expresiones de frecuencia.'
  },
  'c-teens-basic-2-8': {
    keywords: ['why don’t we', 'how about', 'shall we', 'outing'],
    models: ['Why don’t we go skateboarding this Friday?', 'How about watching a movie after class?', 'Let’s meet at the skatepark.'],
    mission: 'Proponer planes de salida con amigos usando estructuras de sugerencia.'
  },
  'c-teens-basic-2-9': {
    keywords: ['overrated', 'captivating', 'review', 'soundtrack'],
    models: ['In my opinion, this sci-fi movie is captivating.', 'The graphics are amazing, but the plot is overrated.', 'I recommend this soundtrack.'],
    mission: 'Escribir y compartir una reseña de películas, series, videojuegos o música.'
  },
  'c-teens-basic-2-10': {
    keywords: ['capstone', 'adventurer', 'speech', 'level 2'],
    models: ['I can navigate my city, describe my talents, and give advice.', 'I have built confidence in English.', 'I am ready for Level 3!'],
    mission: 'Superar el reto oral acumulativo de graduación del Nivel 2.'
  },

  // === LEVEL 3: TEEN CHAMPION (teens-basic-3) ===
  'c-teens-basic-3-1': { keywords: ['schedule', 'before', 'after', 'on time'], models: ['I leave home after I eat breakfast.', 'Before class, I check my schedule.', 'Our bus arrives at seven forty-five.'], mission: 'Explicar tu horario y rutina diaria usando horas precisas y before/after.' },
  'c-teens-basic-3-2': { keywords: ['team', 'score', 'captain', 'competition'], models: ['Our team won the match three to two.', 'The captain organized the players well.', 'Basketball is faster than baseball in this game.'], mission: 'Reportar el resultado de un partido y comparar el desempeño de equipos.' },
  'c-teens-basic-3-3': { keywords: ['festival', 'tradition', 'celebrate', 'costume'], models: ['People wear colorful costumes during the festival.', 'My family celebrates this tradition every year.', 'First we prepare food, and then we visit our relatives.'], mission: 'Presentar una celebración cultural, su secuencia y su significado.' },
  'c-teens-basic-3-4': { keywords: ['planet', 'mission', 'astronaut', 'prediction'], models: ['Astronauts will travel farther in the future.', 'I think people will build new space stations.', 'Scientists are going to test the mission next year.'], mission: 'Hacer predicciones sobre ciencia y exploración espacial con will y going to.' },
  'c-teens-basic-3-5': { keywords: ['childhood', 'memory', 'was', 'were'], models: ['I was shy when I was eight years old.', 'My friends were very creative at school.', 'Our favorite game was hide-and-seek.'], mission: 'Contar recuerdos de tu infancia usando was y were con marcadores de tiempo.' },
  'c-teens-basic-3-6': { keywords: ['journey', 'visited', 'went', 'stayed'], models: ['We went to the coast last summer.', 'I visited a small museum and took many photos.', 'We stayed near the beach for three days.'], mission: 'Contar una historia de viaje usando verbos regulares e irregulares en Pasado Simple.' },
  'c-teens-basic-3-7': { keywords: ['was born', 'became', 'career', 'achievement'], models: ['She was born in Colombia in 2004.', 'She became a professional athlete after years of training.', 'Her greatest achievement was winning the championship.'], mission: 'Presentar una biografía cronológica de un creador o atleta destacado.' },
  'c-teens-basic-3-8': {
    keywords: ['was doing', 'were talking', 'when', 'while'],
    models: ['We were setting up camp when it suddenly started raining.', 'While I was walking home, I noticed a strange light.', 'They were talking until the power went out.'],
    mission: 'Contar una anécdota personal describiendo lo que estaba pasando cuando ocurrió algo inesperado.'
  },
  'c-teens-basic-3-9': { keywords: ['problem', 'because', 'so', 'solution'], models: ['My phone stopped working, so I asked for help.', 'I missed the bus because I left home late.', 'The solution was to check the schedule earlier.'], mission: 'Explicar un problema cotidiano, su causa y su solución con because y so.' },
  'c-teens-basic-3-10': { keywords: ['irregular verb', '-ed ending', 'project', 'narration'], models: ['We made a video about our school trip.', 'I recorded the introduction and edited the final scene.', 'The word visited ends with an /ɪd/ sound.'], mission: 'Producir un video narrativo en pasado con pronunciación exacta de terminaciones -ed.' },

  // === LEVEL 4: TEEN PRO (teens-basic-4) ===
  'c-teens-basic-4-1': { keywords: ['opinion', 'reason', 'example', 'perspective'], models: ['In my opinion, school clubs are important.', 'I think this because students need creative spaces.', 'For example, a music club can build confidence.'], mission: 'Expresar una opinión sólida y respaldarla con razones y ejemplos claros.' },
  'c-teens-basic-4-2': { keywords: ['should', 'could', 'advice', 'consequence'], models: ['You should make a realistic study plan.', 'You could ask the teacher for feedback.', 'If you sleep well, you can concentrate better.'], mission: 'Dar consejos prácticos y explicar el beneficio que traerán con should y could.' },
  'c-teens-basic-4-3': { keywords: ['condition', 'result', 'fact', 'pattern'], models: ['If you heat ice, it melts.', 'If I study early, I feel calmer.', 'When people exercise, their hearts work harder.'], mission: 'Explicar verdades científicas y causas-efecto usando Zero Conditional.' },
  'c-teens-basic-4-4': { keywords: ['message', 'purpose', 'tone', 'privacy'], models: ['Hi Maya, can you send me the homework photo?', 'Please ask before sharing someone else’s picture.', 'A clear message includes purpose and one useful detail.'], mission: 'Escribir mensajes digitales claros, respetuosos y seguros.' },
  'c-teens-basic-4-5': { keywords: ['if', 'will', 'plan', 'consequence'], models: ['If it rains, we will watch the game at home.', 'If I finish early, I will call you.', 'We will miss the bus if we leave after eight.'], mission: 'Planear posibilidades futuras reales y sus consecuencias con First Conditional.' },
  'c-teens-basic-4-6': { keywords: ['more', 'than', 'the most', 'comparison'], models: ['This app is more useful than that one.', 'The blue phone is lighter than the black phone.', 'That was the most exciting match of the season.'], mission: 'Comparar productos, tecnología y entretenimiento con comparativos y superlativos.' },
  'c-teens-basic-4-7': { keywords: ['too', 'enough', 'problem', 'solution'], models: ['This laptop is too expensive for me.', 'The room is not quiet enough to record.', 'The backpack is big enough for the computer.'], mission: 'Describir problemas y proponer soluciones usando too y enough.' },
  'c-teens-basic-4-8': { keywords: ['boundary', 'request', 'respect', 'agreement'], models: ['Could you ask before posting my photo?', 'I am not comfortable sharing my password.', 'Let’s choose the pictures together.'], mission: 'Establecer límites personales y hacer peticiones corteses con could y would you mind.' },
  'c-teens-basic-4-9': { keywords: ['formal', 'informal', 'opening', 'closing'], models: ['Hey Leo, are you free after class?', 'Dear Ms. Lopez, could you clarify the deadline?', 'Kind regards is appropriate in a formal message.'], mission: 'Adaptar el tono de tus mensajes según el destinatario (formal vs informal).' },
  'c-teens-basic-4-10': { keywords: ['customer', 'issue', 'apology', 'solution'], models: ['I am sorry your order arrived late.', 'Could you explain what happened?', 'We can replace the item or refund the payment.'], mission: 'Resolver problemas de clientes con empatía, profesionalismo y soluciones concretas.' },

  // === LEVEL 5: TEEN COMMUNICATOR (teens-inter) ===
  'c-teens-inter-1': { keywords: ['experience', 'ever', 'never', 'yet'], models: ['I have visited three different countries.', 'Have you ever performed on stage?', 'I have not finished the course yet.'], mission: 'Entrevistar a compañeros sobre experiencias de vida usando Present Perfect.' },
  'c-teens-inter-2': { keywords: ['find out', 'give up', 'look after', 'work out'], models: ['I found out about the event online.', 'Do not give up after one difficult attempt.', 'We worked out a better solution together.'], mission: 'Usar phrasal verbs cotidianos con naturalidad en conversaciones juveniles.' },
  'c-teens-inter-3': { keywords: ['must', 'might', 'could', 'can’t'], models: ['She must be at practice because her bag is gone.', 'They might be studying in the library.', 'He can’t be at home; I just saw him downtown.'], mission: 'Hacer deducciones con distintos niveles de certeza usando pistas y modales.' },
  'c-teens-inter-4': { keywords: ['if', 'would', 'imaginary', 'consequence'], models: ['If I ruled the world, I would improve public education.', 'I would travel more if tickets were cheaper.', 'What would you change if you were the mayor?'], mission: 'Explorar situaciones hipotéticas e imaginarias con Second Conditional.' },
  'c-teens-inter-5': { keywords: ['agree', 'however', 'point', 'evidence'], models: ['I agree with your main point because the evidence is strong.', 'I see your point; however, there is another risk.', 'Could you explain what evidence supports that claim?'], mission: 'Expresar acuerdo y desacuerdo de forma diplomática y fundamentada.' },
  'c-teens-inter-6': { keywords: ['episode', 'claim', 'host', 'rebuttal'], models: ['Today’s episode asks whether phones belong in class.', 'My main claim is that clear limits work better than a ban.', 'I understand that concern, but the evidence suggests another result.'], mission: 'Conducir un episodio de podcast estructurado y debatir con argumentos.' },
  'c-teens-inter-7': { keywords: ['ongoing', 'for', 'since', 'progress'], models: ['I have been learning guitar for six months.', 'She has been training since January.', 'We have completed three stages so far.'], mission: 'Explicar metas en curso y avances contrastando for, since y Present Perfect Continuous.' },
  'c-teens-inter-8': { keywords: ['set up', 'figure out', 'run into', 'sort out'], models: ['We set up the equipment before the event.', 'I finally figured out why the sound failed.', 'The team sorted out the problem before recording.'], mission: 'Contar historias de resolución de problemas usando phrasal verbs narrativos.' },
  'c-teens-inter-9': { keywords: ['clue', 'certainty', 'assumption', 'deduction'], models: ['The lights are off, so they might have left.', 'She must know the answer because she researched the topic.', 'That conclusion cannot be correct because the dates conflict.'], mission: 'Resolver misterios y defender deducciones en pasado con must have y might have.' },
  'c-teens-inter-10': { keywords: ['likely', 'hypothetical', 'first conditional', 'second conditional'], models: ['If the team wins, we will celebrate tonight.', 'If I were the coach, I would change the strategy.', 'The first sentence is likely; the second is hypothetical.'], mission: 'Evaluar decisiones complejas combinando Zero, 1st y 2nd Conditional.' },
  'c-teens-inter-11': { keywords: ['acknowledge', 'rebuttal', 'support', 'counterpoint'], models: ['That is a fair concern; however, the long-term benefit is greater.', 'Your example is useful, but it does not represent every student.', 'A stronger response would include evidence from both groups.'], mission: 'Formular refutaciones respetuosas reconociendo el punto contrario.' },
  'c-teens-inter-12': { keywords: ['introduction', 'follow-up', 'evidence', 'conclusion'], models: ['Welcome to our final discussion on teen volunteering.', 'Can you give a specific example of that experience?', 'To conclude, the project improved both confidence and teamwork.'], mission: 'Completar una simulación de entrevista para becas académicas y debate grupal.' },

  // === LEVEL 6: TEEN LEADER (teens-advanced) ===
  'c-teens-advanced-1': { keywords: ['said', 'told', 'reported', 'backshift'], models: ['Mia said that she was preparing the article.', 'The coach told us that the match had changed.', 'They reported that the event would begin later.'], mission: 'Reportar declaraciones y noticias con reported speech y cambios de tiempo (backshift).' },
  'c-teens-advanced-2': { keywords: ['asked if', 'wanted to know', 'inquired', 'word order'], models: ['The journalist asked if the team was ready.', 'She wanted to know where the interview would take place.', 'He inquired whether the report had been verified.'], mission: 'Reportar preguntas de investigación con orden afirmativo y sin signos de interrogación.' },
  'c-teens-advanced-3': { keywords: ['who', 'which', 'that', 'where'], models: ['The student who won the award designed an AI assistant.', 'The laptop that I bought has great battery life.', 'This is the laboratory where we build robotics prototypes.'], mission: 'Combinar oraciones y definir elementos esenciales con Defining Relative Clauses.' },
  'c-teens-advanced-4': { keywords: ['passive voice', 'is designed', 'was invented', 'are stored'], models: ['The mobile application was developed by student engineers.', 'User credentials are encrypted on secure cloud servers.', 'New solar panels will be installed across campus next month.'], mission: 'Explicar procesos tecnológicos e inventos usando la voz pasiva.' },
  'c-teens-advanced-5': { keywords: ['claim', 'admit', 'deny', 'source'], models: ['The witness claimed that the digital video was authentic.', 'The spokesperson admitted that a data error had occurred.', 'According to school officials, the robotics fair was rescheduled.'], mission: 'Reportar información con verbos precisos (claim, admit, deny) y atribuir fuentes.' },
  'c-teens-advanced-6': { keywords: ['non-defining', 'comma', 'reduced clause', 'participle'], models: ['Maya, who leads our research lab, published a study on renewable energy.', 'The prototype developed by high school students won first place.', 'The camera purchased last year still works perfectly.'], mission: 'Añadir información extra y reducir oraciones de relativo con comas y participios.' },
  'c-teens-advanced-7': { keywords: ['is said to', 'is believed to', 'is reported that', 'impersonal passive'], models: ['The new AI algorithm is said to reduce computation costs by half.', 'Quantum processors are believed to transform cyber defense systems.', 'It is widely reported that electric vehicles will dominate transit by 2035.'], mission: 'Usar pasivas impersonales y de reporte para noticias y avances tecnológicos.' },
  'c-teens-advanced-8': { keywords: ['collocation', 'formal register', 'unanimous', 'deliberation'], models: ['The student council reached a unanimous conclusion after careful deliberation.', 'We must take into account both ethical standards and practical constraints.', 'His argument holds water under rigorous peer review.'], mission: 'Seleccionar colocaciones académicas y adaptar modismos al registro formal.' },
  'c-teens-advanced-9': { keywords: ['diplomatic', 'trade-off', 'stakeholder', 'consensus'], models: ['Youth delegates urged global leaders to invest in sustainable energy infrastructure.', 'While digital access is vital, privacy guardrails must be non-negotiable.', 'The committee balanced immediate costs against generational environmental impacts.'], mission: 'Debatir crisis globales y resoluciones ambientales con retórica diplomática.' },
  'c-teens-advanced-10': { keywords: ['interview', 'challenge', 'action', 'result'], models: ['When coordinating the NGO initiative, I encountered significant logistics obstacles.', 'I divided key responsibilities and implemented weekly progress checkpoints.', 'As a result, our youth campaign mobilized over five hundred volunteers.'], mission: 'Defender un pitch de ONG y responder preguntas de entrevista ejecutiva con el método STAR.' },

  // === LEVEL 7: TEEN ELITE (teens-elite) ===
  'c-teens-elite-1': { keywords: ['roadmap', 'milestone', 'strategy', 'benchmark'], models: ['Our strategic roadmap outlines quarterly benchmarks for community outreach.', 'The primary milestone involves launching an open-source educational portal.', 'We measure organizational success through verifiable engagement metrics.'], mission: 'Presentar una hoja de ruta estratégica con hitos, indicadores y medición de impacto.' },
  'c-teens-elite-2': {
    keywords: ['should have', 'ought to have', 'must have been', 'post-mortem'],
    models: ['The founders should have conducted user testing before launch.', 'The system must have been compromised due to outdated software.', 'We ought to have prioritized customer feedback over rapid expansion.'],
    mission: 'Evaluar decisiones de negocios y análisis post-mortem usando modales retrospectivos y pasivos.'
  },
  'c-teens-elite-3': { keywords: ['seem to suggest', 'preliminary', 'arguably', 'hedging'], models: ['The preliminary data seems to suggest a positive correlation between study habits and performance.', 'It would appear that the new policy moderately reduces scheduling friction.', 'Arguably, this methodology provides a more comprehensive perspective.'], mission: 'Formular posturas matizadas y conclusiones cautelosas usando hedging diplomático.' },
  'c-teens-elite-4': { keywords: ['thesis', 'contends that', 'claim', 'counterargument'], models: ['This paper contends that media literacy should be integrated into secondary education.', 'This claim is supported by extensive empirical research on digital information processing.', 'A common counterargument asserts that curricular schedules are already overloaded.'], mission: 'Construir un párrafo de ensayo académico con tesis, evidencia y refutación.' },
  'c-teens-elite-5': { keywords: ['leadership', 'autonomy', 'accountability', 'delegation'], models: ['Transformational leaders inspire creative autonomy while maintaining collective accountability.', 'I delegated data analysis to team members with advanced analytical backgrounds.', 'Constructive feedback sessions allowed us to iterate quickly without causing friction.'], mission: 'Analizar paradigmas de liderazgo y optimizar las fortalezas de un equipo.' },
  'c-teens-elite-6': { keywords: ['will be working', 'will have completed', 'timeline', 'milestone'], models: ['By next semester, our research cohort will have completed the initial pilot phase.', 'This time next year, we will be working on our environmental sensor network in the field.', 'By 2030, the international coalition will have achieved three key sustainable goals.'], mission: 'Proyectar líneas de tiempo e hitos futuros con Future Continuous y Future Perfect.' },
  'c-teens-elite-7': { keywords: ['mixed conditional', 'if had been', 'would be today', 'consequence'], models: ['If we had secured early grant funding, our lab would be fully operational today.', 'If the team were more adaptable, they would have pivoted when market conditions shifted.', 'The conditional clauses connect past occurrences with ongoing present consequences.'], mission: 'Examinar consecuencias complejas conectando pasado y presente con Mixed Conditionals.' },
  'c-teens-elite-8': { keywords: ['cleft sentence', 'what we need', 'inversion', 'seldom do'], models: ['What we urgently require is sustainable funding for student-led research initiatives.', 'Seldom have student innovators had access to such powerful analytical tools.', 'Under no circumstances should ethical oversight be bypassed during rapid development.'], mission: 'Aplicar énfasis formal mediante oraciones hendidas (clefts) e inversión retórica.' },
  'c-teens-elite-9': { keywords: ['academic defense', 'thesis', 'synthesis', 'Q&A'], models: ['Today I present findings demonstrating that urban green corridors enhance community health.', 'Two independent longitudinal studies corroborate this positive relationship.', 'While that concern is understandable, our comprehensive methodology accounts for potential sampling bias.'], mission: 'Presentar y defender un abstract de investigación académica durante la sesión de Q&A.' },
  'c-teens-elite-10': { keywords: ['agenda', 'facilitation', 'consensus', 'motion'], models: ['I call the meeting to order and propose adopting today’s five-point strategic agenda.', 'I move that we establish a dedicated sub-committee to evaluate environmental compliance.', 'All stakeholders unanimously endorsed the updated governance framework.'], mission: 'Facilitar una reunión ejecutiva, gestionar mociones formales y alcanzar consensos.' },
  'c-teens-elite-11': { keywords: ['keynote pitch', 'value proposition', 'unit economics', 'call to action'], models: ['Our venture solves the critical shortage of localized STEM mentorship for secondary students.', 'Our proprietary platform matches aspiring scholars with verified industry mentors in real time.', 'We invite visionary educational partners to join our regional pilot program today.'], mission: 'Entregar un pitch magistral de emprendimiento con economía unitaria y llamado a la acción.' },

  // === LEVEL 8: TEEN MASTERS (teens-masters) ===
  'c-teens-masters-1': { keywords: ['claim', 'assumption', 'evidence', 'reasoning'], models: ['The claim sounds plausible, but the evidence is incomplete.', 'This argument assumes that every student has equal access.', 'A stronger conclusion would acknowledge the limits of the data.'], mission: 'Sostener un debate parlamentario Oxford-Union con refutación dialéctica y rigor lógico.' },
  'c-teens-masters-2': { keywords: ['representation', 'audience', 'framing', 'influence'], models: ['The series frames success as individual talent rather than teamwork.', 'The campaign targets young audiences through humor and short videos.', 'The same event is represented differently across the two platforms.'], mission: 'Analizar la semiótica de la cultura pop y cómo los medios construyen significado e influencia.' },
  'c-teens-masters-3': { keywords: ['seminar', 'source', 'synthesis', 'citation'], models: ['The two sources agree on the problem but propose different solutions.', 'According to the first study, participation increased by twelve percent.', 'The findings suggest a trend, although more evidence is needed.'], mission: 'Participar en un seminario académico Ivy League sintetizando fuentes contradictorias.' },
  'c-teens-masters-4': { keywords: ['hook', 'narrative', 'visual', 'delivery'], models: ['Imagine a city where every rooftop produces clean energy.', 'This story matters because small design choices affect millions of people.', 'The visual supports the argument instead of repeating the script.'], mission: 'Diseñar y presentar una conferencia magistral estilo TED de alto impacto.' },
  'c-teens-masters-5': { keywords: ['burden of proof', 'case', 'impact', 'rebuttal'], models: ['Our case is that the policy improves access without reducing quality.', 'The opposing side has not shown that the risk is likely.', 'Even if the concern is valid, our long-term impact is greater.'], mission: 'Redactar y defender resoluciones diplomáticas multilaterales al estilo de la ONU.' },
  'c-teens-masters-6': { keywords: ['framing', 'omission', 'bias', 'comparison'], models: ['Source A emphasizes economic cost, while Source B focuses on public health.', 'Both reports omit the experience of rural communities.', 'The headline creates urgency through emotionally loaded language.'], mission: 'Deconstruir obras literarias y piezas cinematográficas mediante crítica estética y encuadre.' },
  'c-teens-masters-7': { keywords: ['research question', 'method', 'finding', 'limitation'], models: ['Our research question examines how screen time affects sleep quality.', 'The survey suggests a correlation, not direct causation.', 'A major limitation is the small sample size.'], mission: 'Defender tu propósito cívico y de investigación ante el panel de becas Rhodes/Fulbright.' },
  'c-teens-masters-8': { keywords: ['script', 'revision', 'production', 'publication'], models: ['The opening needs a clearer promise to the audience.', 'We cut one example because it interrupted the argument.', 'The final edit balances evidence, pacing, and visual support.'], mission: 'Producir un videoensayo de investigación periodística con diseño sonoro y narrativa documental.' },
  'c-teens-masters-9': { keywords: ['ethics', 'trade-off', 'stakeholder', 'global impact'], models: ['The technology improves access but creates a privacy trade-off.', 'Young people are stakeholders because the decision shapes their future.', 'A responsible policy should consider both local and global impact.'], mission: 'Evaluar megatendencias globales, bioética y superinteligencia artificial con matrices éticas.' },
  'c-teens-masters-10': { keywords: ['interview', 'spontaneous', 'clarify', 'next goal'], models: ['A challenge that changed my perspective was leading a mixed-experience team.', 'Could you clarify whether you mean academic or personal growth?', 'My next goal is to improve concise academic speaking under pressure.'], mission: 'Demostrar maestría C2 en el manifiesto valedictorio y simulación de entrevista espontánea.' },
};
