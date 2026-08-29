# 📚 ESTRUCTURA OFICIAL Y OBLIGATORIA DE UNA CLASE (CURRICULUM BLUEPRINT)

**CRITICAL SYSTEM INSTRUCTION**: You are STRICTLY FORBIDDEN from generating "flat", simplified, or placeholder classes. Every single class generated and added to `src/data/curriculum.ts` MUST rigorously follow this exact blueprint, slide by slide. You must maintain the aesthetic properties (`bgColor`, `imageUrl`), interactive properties (`options`, `correctOptionIndex`), and game types (`emoji-game`).

## 🔐 SUPABASE / BASE DE DATOS
- **REGLA OBLIGATORIA DE PERSISTENCIA PERMANENTE**: Toda nueva funcionalidad, guardado de datos, progreso del alumno, vocabulario, evaluaciones o configuraciones DEBE almacenarse de forma permanente en Supabase. Queda estrictamente prohibido implementar soluciones que guarden información únicamente en el `localStorage` / `sessionStorage` del navegador (a menos que el usuario lo especifique explícitamente). `localStorage` solo debe usarse como respaldo en caché para resiliencia offline.
- Para cualquier tarea de base de datos o subida a Supabase, primero revisar `.env.local`.
- `.env.local` contiene las credenciales locales de Supabase y está ignorado por Git mediante `.gitignore`.
- No pegar `service_role`, passwords ni connection strings reales en archivos versionados como `AGENTS.md`, scripts públicos o documentación.
- Si una connection string conserva `[YOUR-PASSWORD]`, pedir o cargar el password real antes de ejecutar tareas que requieran conexión Postgres directa.

## 🏗️ MACRO STRUCTURE (5 SECTIONS)
Every single Class (e.g. `c-adults-basic-4-1`) MUST contain EXACTLY 5 Sections in this order:
1. Warm-up
2. Grammar / Vocabulary
3. Practice & Concept Checking
4. Production & Quiz
5. Wrap-up & Homework

## 🎨 AESTHETICS & TAILWIND RULES
- **EVERY Slide** must have a `bgColor` using Tailwind gradients. Do NOT use solid plain colors. Examples: `bg-gradient-to-br from-blue-600 to-indigo-700`, `from-pink-500 to-rose-600`, etc.
- **Images**: Use `imageUrl` with real Unsplash URLs (e.g., `https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800`).
- **CRITICAL IMAGE RULE**: Before adding ANY Unsplash image URL to the codebase, YOU MUST verify it using the `run_command` tool with `curl -s -o /dev/null -w "%{http_code}" <url>`. If it returns 404, you MUST find another image. NEVER add a 404 image to the curriculum.

## 🖥️ TEACHING METHOD / SCREEN-SHARE DESIGN REQUIREMENT
- El profesor normalmente se une a Google Meet o Microsoft Teams desde un PC y comparte pantalla con el estudiante.
- El estudiante puede ver la presentación desde PC, tablet o celular; el caso crítico es celular viendo una pantalla compartida.
- Toda dinámica interactiva, diapositiva especial, juego, roleplay, boss battle, quiz o herramienta nueva DEBE diseñarse para ser legible en pantalla compartida sin que el estudiante haga zoom.
- La app se usa como herramienta visual principal de clase: el estudiante no necesariamente interactúa directamente con su dispositivo, sino que observa la pantalla compartida del profesor. Por eso la lectura rápida desde lejos importa más que mostrar mucha información al mismo tiempo.
- Usar letra grande por defecto en experiencias de clase, juegos y diapositivas: títulos muy visibles, instrucciones de una línea cuando sea posible y opciones de respuesta grandes.
- Aprovechar el espacio útil de la pantalla: evitar cajas pequeñas centradas con grandes áreas vacías alrededor. El contenido principal debe ocupar visualmente la mayor parte del viewport sin sentirse saturado.
- Diseñar cada estado como una escena clara: inicio, misión/pregunta, respuesta correcta, error, explicación, transición y resultados. Cada escena debe tener una jerarquía visual obvia.
- Priorizar formato de presentación por pasos: una acción principal por pantalla, tarjetas grandes, texto grande, instrucciones cortas y máximo 2-3 frases visibles por paso.
- Evitar interfaces densas con muchas columnas, texto pequeño, grids complejos, paneles saturados o demasiada información simultánea.
- En móvil debe entenderse claramente quién habla, qué debe hacer, qué frase puede usar y cómo avanzar.
- Botones y controles deben ser grandes, claros y fáciles de distinguir durante una videollamada.
- Los botones principales deben parecer profesionales: buen contraste, estados hover/active, icono cuando ayude, altura generosa y texto corto.
- Para juegos con temporizador, feedback o animaciones, el estado actual debe ser obvio incluso en una pantalla pequeña: tiempo, pregunta, opciones y resultado no deben competir entre sí.
- Antes de dar por terminado un cambio visual o interactivo, auditar que se vea razonablemente bien para pantalla compartida en PC y para estudiantes que miran desde celular. Si hay mucho espacio muerto, texto pequeño o controles difíciles de leer, corregirlo antes de finalizar.

## 🖼️ GENERATED IMAGE REQUIREMENT & 1-TO-1 SEQUENTIAL MAPPING PROTOCOL
- **REGLA DE ORO DE UNICIDAD (1:1)**: Cada diapositiva visual de una clase DEBE contar con su propia imagen única y personalizada. Queda TERMINANTEMENTE PROHIBIDO reusar o copiar la misma ruta de imagen (ej. `slide-17.jpg` o `slide-01.jpg`) en múltiples diapositivas de una misma clase.
- **Estructura oficial de carpetas**:
  - Todas las imágenes de una clase se guardan en `public/images/<audience>-<level>-class-<number>/` (formato con 2 dígitos, ej: `public/images/teens-basic-3-class-08/`, `public/images/adults-basic-1-class-02/`).
- **Convención de nombres de archivo**:
  - Las imágenes se nombran estrictamente de forma secuencial por diapositiva:
    `slide-01.jpg`, `slide-02.jpg`, `slide-03.jpg`, ..., `slide-22.jpg`.
- **Mapeo secuencial obligatorio en archivos de datos (`curriculum.ts`, `curriculumTeens.ts`, `curriculumKids.ts`)**:
  - Al generar o actualizar una clase, las propiedades `imageUrl` deben coincidir 1-a-1 con el índice de la diapositiva:
    - **Sección 1 (Warm-up)**:
      - Diapositiva 1 (Welcome) -> `/images/<folder>/slide-01.jpg`
      - Diapositiva 2 (Warm-up Wheel/Activity) -> `/images/<folder>/slide-02.jpg`
      - Diapositiva 3 (Objectives) -> `/images/<folder>/slide-03.jpg`
    - **Sección 2 (Grammar / Vocabulary)**:
      - Diapositivas 4 a 8 -> `/images/<folder>/slide-04.jpg` hasta `slide-08.jpg`
    - **Sección 3 (Practice & Concept Checking)**:
      - Diapositivas 9 a 13 (Context, Quizzes 1-3, Emoji Game) -> `/images/<folder>/slide-09.jpg` hasta `slide-13.jpg`
    - **Sección 4 (Production & Quiz)**:
      - Diapositivas 14 a 19 (Speaking Wheel, Fun Quizzes 1-3, Boss Battle, Speaking Scene/Roleplay) -> `/images/<folder>/slide-14.jpg` hasta `slide-19.jpg`
    - **Sección 5 (Wrap-up & Homework)**:
      - Diapositivas 20 a 22 (Class Complete, Homework, Video Homework) -> `/images/<folder>/slide-20.jpg` hasta `slide-22.jpg`
- **Contexto pedagógico de las imágenes**:
  - Cada imagen generada debe reflejar con precisión el contenido, vocabulario, pregunta o situación comunicativa de esa diapositiva en particular.
  - En preguntas de selección múltiple, la imagen principal debe ilustrar la frase, contexto o respuesta correcta.
- **REGLA OBLIGATORIA DE COMPRESIÓN Y TAMAÑO DE IMAGEN (MAX 400KB)**:
  - Ninguna imagen generada o añadida al proyecto debe superar los **400 KB** (el tamaño óptimo por imagen de diapositiva es entre **80 KB y 250 KB**).
  - Al generar o guardar imágenes para el proyecto, DEBEN ser optimizadas inmediatamente usando `sharp`:
    - **JPG/JPEG**: `sharp(file).jpeg({ quality: 80, mozjpeg: true })`
    - **PNG**: `sharp(file).png({ palette: true, quality: 75, compressionLevel: 9 })`
    - **WebP**: `sharp(file).webp({ quality: 85 })`
  - Queda TERMINANTEMENTE PROHIBIDO dejar imágenes en bruto de IA de >1 MB o >2 MB en `public/images/`.
- **Auditoría obligatoria post-generación**:
  - Antes de dar por terminada cualquier tarea de generación de imágenes, el agente DEBE ejecutar una verificación automatizada que valide:
    1. Que la cantidad de imágenes únicas en la clase sea igual a la cantidad de diapositivas con imagen (`uniqueImages === totalSlidesWithImages`).
    2. Que cada ruta referenciada en `imageUrl` exista físicamente en disco (`fs.existsSync`).
    3. Que **ningún archivo de imagen supere los 400 KB** de tamaño en disco. Si alguno lo supera, se debe comprimir con `sharp` antes de finalizar.
- **Si se usa Unsplash como excepción**:
  - Verificar obligatoriamente cada URL con `curl -s -o /dev/null -w "%{http_code}" <url>`. Jamás incluir URLs 404 o no verificadas.

## 🎙️ PROTOCOLO OFICIAL DE AUDIO Y SÍNTESIS DE VOZ (ELEVENLABS)

- **CREDENCIALES Y POOL DE ROTACIÓN EN `.env.local`**:
  - Toda llave de API de ElevenLabs se gestiona exclusivamente a través de `.env.local` (nunca escribir llaves reales en `AGENTS.md` ni en commits).
  - Variables disponibles en `.env.local`: `ELEVENLABS_API_KEY`, `ELEVENLABS_KEY_1`, `ELEVENLABS_KEY_2`, `ELEVENLABS_KEY_3`, `ELEVENLABS_KEY_4`, `ELEVENLABS_KEY_5`, y `ELEVENLABS_KEYS_POOL` (lista separada por comas).
  - **Mecanismo de Rotación Automática**: Al generar lotes de audio, los scripts deben rotar al siguiente API Key si uno agota su cuota de caracteres (`401/429/payment_required`) para asegurar la generación continua.

- **VOZ OFICIAL Y REGLA DE CUENTAS GRATUITAS (PREMADE VOICES)**:
  - **Voz Oficial Predeterminada**: `EXAVITQu4vr4xnSDxMaL` (Sarah — acento americano estándar, tono joven, profesional, dicción clara y perfectamente comprensible para estudiantes en Colombia y Latinoamérica).
  - **Voces Premade Alternativas Validadas**:
    - Femeninas: `cgSgspJ2msm6clMCkdW9` (Jessica - cálida/joven), `Xb7hH8MSUJpSbSDYk0k2` (Alice - británica educadora), `hpp4J3VqNfWAUOO0d1Us` (Bella - profesional).
    - Masculinas: `bIHbv24MWmeRgasZH58o` (Will - casual/optimista), `TX3LPaxmHKxFdv7VOQHJ` (Liam - enérgico), `CwhRBWXzGAHq8TQ4Fs17` (Roger - maduro/conversacional).
  - **REGLA CRÍTICA DE API GRATUITA**: Las cuentas gratuitas de ElevenLabs **NO pueden usar library voices ni voces clonadas** vía API (arroja error 402 `paid_plan_required`). Se DEBE usar obligatoriamente el ID de una voz de la categoría **`premade`** (`GET https://api.elevenlabs.io/v1/voices`).

- **MODELOS DE SÍNTESIS RECOMENDADOS**:
  - `eleven_turbo_v2_5`: Modelo principal de ultra-baja latencia, nítido y con menor consumo de cuota.
  - `eleven_multilingual_v2`: Modelo secundario para oratoria compleja y máxima fidelidad fonética.

- **CALIBRACIÓN DE CADENCIA Y PARÁMETROS POR NIVEL**:
  - **Niveles Pre-A1 / A1 (Levels 0–1)**: `stability: 0.65`, `similarity_boost: 0.80` (ritmo pausado, articulación clara y estable).
  - **Niveles A2 / B1 (Levels 2–6)**: `stability: 0.55`, `similarity_boost: 0.75` (conversacional, tono amigable y natural).
  - **Niveles B2 / C1 / C2 (Levels 7–10)**: `stability: 0.50`, `similarity_boost: 0.75` (alta expresividad, entonación de debate y oratoria formal).

- **ESTRUCTURA DE ALMACENAMIENTO Y ENLACE DE AUDIOS**:
  - **Carpetas oficiales**: `public/audio/<track>-listening/<class-id>.mp3` (ej: `public/audio/teens-listening/c-teens-basic-zero-1.mp3`).
  - **Mapeo en datos**: Todo slide de listening (`listening-audio-teacher`) debe definir la propiedad `audioUrl: '/audio/<track>-listening/<class-id>.mp3'` dentro de `listeningData`.
  - **Reproducción en cliente (`SlideRenderer.tsx`)**:
    - Reproduce el archivo MP3 mediante HTML5 `Audio()`.
    - Soporta control de velocidad en tiempo real (`audio.playbackRate = 0.7 | 0.9 | 1.0`).
    - Fallback de resiliencia: si el archivo de audio falla al cargar o no existe, conmuta automáticamente a Web Speech API (`playSpeech`).

- **REGLAS DE HIGIENE TEXTUAL PARA GENERACIÓN TTS**:
  1. Queda estrictamente prohibido enviar al motor de voz barras IPA o fonemas literales como `(/t/)`, `(/d/)`, `(/ɪd/)` que generen lecturas erróneas (*"slash t slash"*).
  2. Evitar símbolos que causen pausas o lecturas mecánicas (`_`, `*`, `~`, brackets innecesarios).
  3. Expandir abreviaturas o cifras en niveles avanzados para garantizar entonación perfecta (ej. `$1.5M` -> `one point five million dollars`, `98%` -> `ninety-eight percent`, `4.2:1` -> `four point two to one`).

## 📝 MICRO STRUCTURE (SLIDE BY SLIDE BLUEPRINT)

### 1️⃣ Section 1: Warm-up (3 slides)
- **Slide 1 (Welcome)**: `title` (e.g., "Welcome!"), `content` (2-3 intro strings). **MUST HAVE** `imageUrl` and `bgColor` (e.g., `from-blue-600 to-indigo-700`).
- **Slide 2 (Warm-up Activity)**: Icebreaker question. `bgColor` (e.g., `from-cyan-500 to-blue-500`).
- **Slide 3 (Objectives)**: `content` (Bullet points of what will be learned).

### 2️⃣ Section 2: Grammar / Vocabulary (4-5 slides)
- **Slides 1-5**: Explanations, rules, and examples. `type: "standard"`.
- **MUST HAVE**: `bgColor` (e.g., `from-indigo-500 to-purple-600`).

### 3️⃣ Section 3: Practice & Concept Checking (5 slides)
- **Slide 1 (Context)**: A short dialogue or text in `content`.
- **Slides 2-4 (Multiple Choice Quizzes)**:
  - **MUST HAVE**: `options` (Array of EXACTLY 3 strings), `correctOptionIndex` (0, 1, or 2).
  - Example title: "Complete the sentence (1/3)".
  - `bgColor` (e.g., `from-orange-400 to-red-500`).
- **Slide 5 (Emojis Locos 🤪)**:
  - **MUST HAVE**: `type: "emoji-game"`.
  - `content`: e.g. ["🏥 ➕ 🩺 ➕ 💊"].
  - `options`: 3 distinct phrases predicting the emojis.
  - `correctOptionIndex`: The correct index.
  - `bgColor` (e.g., `from-pink-500 to-rose-600`).

### 4️⃣ Section 4: Production & Quiz (5 slides)
- **Slide 1 (Let's Talk!)**: Speaking prompt for students with spinning wheel. `bgColor` (e.g., `from-emerald-500 to-teal-600`).
- **Slides 2-4 (Fun Quiz! X/3)**:
  - **MUST HAVE**: `options` (Array of EXACTLY 3 real strings), `correctOptionIndex` (0, 1, or 2).
  - `bgColor` (e.g., `from-pink-500 to-rose-600`).
  - **MUST HAVE UNIQUE IMAGES**: Every single quiz slide must have a distinct, non-repeating, context-accurate image.
- **Slide 5 (Roleplay / Let's Say That... 🎭)**:
  - **ROLEPLAY DESIGN RULE**: The roleplay slide must feature a **single, large, central prompt card** proposing a clear conversational scenario starting with `"Let's say that..."` (e.g. `"Let's say that you meet a new classmate in the cafeteria. Ask their name, age, and what food they like!"`).
  - Keep the screen ultra-clean and legible for screen-share: the prompt gives the scenario and the teacher conducts the conversation freely with the student.
  - Avoid dense scripts, walls of dialogue, or complex multi-step tabs.

### 5️⃣ Section 5: Wrap-up & Homework (3 slides)
- **Slide 1 (Class Complete!)**: Congratulatory message.
  - **MUST HAVE**: `imageUrl` and `bgColor` (e.g., `from-yellow-400 to-orange-500`).
- **Slide 2 (Homework 📝)**:
  - **MUST HAVE**: `type: "homework"`, `title: "Homework"`.
  - **HOMEWORK AUDIT RULE**: You MUST verify that the homework instructions are clearly written, practical, motivating, and 100% contextualized to what was taught in that specific class (e.g., "Write 3 questions asking for someone's age and birthday").
  - `content`: Explicit written instructions.
  - `bgColor` (e.g., `from-violet-500 to-fuchsia-600`).
- **Slide 3 (Video Homework 📹)**:
  - **MUST HAVE**: `type: "video"`, `title: "Video Homework 📹"`.
  - **VIDEO LINK VERIFICATION RULE**: You MUST test and verify that `videoUrl` is a valid, working, active YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`). Broken or unavailable video links are strictly forbidden.
  - `content`: Specific instructions for the video.
  - `bgColor` (e.g., `from-slate-800 to-indigo-900`).

## 👥 AUDIENCE ADAPTATION (TEENS, KIDS, ADULTS)
This entire protocol applies across all tracks with age-appropriate visual & pedagogical standards:
- **Teens (13–17)**: Modern high school, friendships, casual tech, sports, hobbies, vibrant streetwear.
- **Kids (6–12)**: Playful, colorful, friendly animals, interactive games, animated illustrations, simple vocabulary.
- **Adults (18+)**: Real-world communication, workplace, daily routines, travel, professional contexts.

## ⚡ REGLAS DE RENDIMIENTO Y ARQUITECTURA WEB
- **Code Splitting obligatorio**:
  - Toda nueva vista pesada, juego, módulo o herramienta secundaria DEBE importarse usando `React.lazy()` y envolverse en `<Suspense>` dentro de `App.tsx`.
  - Queda prohibido importar vistas secundarias pesadas de forma estática en el arranque inicial.
- **Carga dinámica de datos de Curriculum**:
  - Los archivos de planes de estudio (`curriculum.ts`, `curriculumTeens.ts`, `curriculumKids.ts`) DEBEN mantenerse cargados bajo demanda mediante `useCurriculum` o `getCurriculumForType` asíncrono para no transferir 5+ MB en el bundle inicial.
- **Preload de Slides**:
  - Todo visor de diapositivas o carrusel debe precargar la imagen de la diapositiva $N+1$ en segundo plano para evitar retrasos visuales durante la clase.
- **Sondeo a Base de Datos (Polling)**:
  - Ningún intervalo recurrente (`setInterval`) para consultar estados o evaluaciones en cliente debe ser menor a **60 segundos** mientras la app esté abierta.
- **Animaciones CSS ligeras**:
  - Evitar animaciones infinitas de gradientes con filtros `blur` pesados o áreas de GPU sobredimensionadas que degraden el rendimiento en pantalla compartida y móviles.

## 🎯 PROTOCOLO OFICIAL DE GIMNASIO DE PRÁCTICA STORY DECODER (+, -, ?)

- **ESTRUCTURA DE 3 CATEGORÍAS (+, -, ?)**: La práctica se divide explícitamente en **Afirmativo (+)**, **Negativo (-)** e **Interrogativo (?)**.
- **ESTACIÓN 1: TRADUCCIÓN Y ENSAMBLAJE CON ESCONDITE (3 FRASES)**:
  - Ensamblaje token por token (soporta palabras compuestas, *phrasal verbs*, e *idioms*).
  - Ocultar palabras por defecto con botón para revelar.
  - Botón obligatorio para **guardar cualquier palabra o expresión aprendida** en *"Mis Palabras"* (*VocabVault*).
- **ESTACIÓN 2: WRITING LIBRE (PRODUCCIÓN PROPIA)**:
  - Tarjeta interactiva donde el estudiante escribe sus propios ejemplos usando la estructura aprendida.
- **ESTACIÓN 3: LISTENING Y REPETICIÓN ORAL (3 FRASES)**:
  - Escuchar audio en inglés, repetir en voz alta y botón para **revelar la respuesta escrita en inglés** a discreción del profesor.
- **ESTACIÓN 4: REPASO INFINITO OPCIONAL**:
  - Banco de preguntas de traducción con el botón **"🧠 Ya la pensé ➔ Revelar opciones"**.
- **UBICACIÓN DOBLE OBLIGATORIA**:
  1. Gimnasio General del Bloque (Banner del Bloque acumulativo).
  2. Gimnasio Específico de Lección (Ubicado al final de las 3 historias en el selector de clase).
- **PROHIBICIÓN ABSOLUTA DE GENERADORES GENÉRICOS**: Todo ejercicio DEBE ser redactado a mano de forma artesanal y pedagógicamente coherente para cada lección.
- **TRAZABILIDAD Y REGISTRO DE DOMINIO POR ALUMNO**: El progreso por ejercicio (`unseen`, `practicing`, `mastered`) debe guardarse en la base de datos por estudiante para evitar repetir inútilmente lo que el alumno ya dominó.

## 📘 PROTOCOLO OFICIAL DE CLASES TEENS (MODO STUDIO / INTERACTIVO)

- **REGLA DE COHERENCIA PEDAGÓGICA TOTAL (OBJETIVOS ➔ CONTENIDO ➔ PRÁCTICA)**:
  Queda estrictamente prohibido dar por sentado estructuras gramaticales o dejar vacíos entre lo que promete la diapositiva de Objetivos y lo que se enseña. Todo concepto debe explicarse desde sus cimientos antes de evaluarse.

- **SECUENCIA OBLIGATORIA POR CLASE (ESTACIONES Y DIAPOSITIVAS)**:
  1. **🔥 Warm-up & Intro**:
     - Slide 1: Bienvenida motivacional con imagen HD (`type: "standard"`).
  2. **🎯 Objetivos**:
     - Slide 2: 3 metas claras, específicas y medibles de la clase (`type: "objectives-animated"`).
  3. **🎡 Ruleta Rompehielos**:
     - Slide 3: Ruleta interactiva rompehielos (`type: "spinning-wheel"`, `wheelItems: [...]`) con 6 preguntas reales acordes al tema.
  3. **📐 Grammar & Concept Master (2 Diapositivas Dedicadas)**:
     - Slide 4: **Grammar Studio Core** (`type: "grammar-studio"`): 5 pestañas con regla de oro, pronombres/sujetos, fórmulas visuales `[ Sujeto ] + [ Verbo/Aux ] + [ Complemento ]`, afirmativo (+), 3ra persona/variación, negativo (−), preguntas Sí/No por inversión (? Yes/No) y preguntas informativas (? Wh-).
     - Slide 5: **Vocabulary & Practical Matrix Studio** (`type: "grammar-studio"`): 5 pestañas con el catálogo completo del vocabulario de la clase (saludos/despedidas, números/meses, posesivos, menú de pedidos, horarios, ropa singular/plural, frecuencia, etc.).
  4. **⚡ AI Verb Arena**:
     - Slide 6: **6 verbos o elementos de acción** (`type: "verb-arena-embedded"`, `limit: 6`) estrictamente alineados con la clase, con significado natural para Colombia, `past`, `past_participle`, pronunciación y ejemplos reales.
  5. **📖 Reading Studio**:
     - Slide 7: Diálogo conversacional entretenido entre adolescentes (`type: "reading"`), con audio nativo por casilla y selector de `Modo Spotlight 🎯` / `Ver Todo 📜`.
  6. **🎧 Listening Lab**:
     - Slide 8: Audio nativo contextualizado del profesor (`type: "listening-audio-teacher"`) + pregunta de comprensión con 3 opciones.
  7. **🧩 Story Decoder**:
     - Slide 9: 3 frases extraídas directamente del diálogo de la clase (`type: "story-decoder-embedded"`), listas para ensamblar token por token con ocultar/revelar y guardado en VocabVault.
  8. **✍️ Writing Studio**:
     - Slide 10: Producción propia del estudiante en 3 casillas interactivas (+, −, ?) guiadas por fórmulas (`type: "writing-guided"`).
  9. **🎙️ Speaking & Fluency**:
     - Slide 11: 3 preguntas orales conversacionales que ponen en práctica la gramática y el vocabulario (`type: "speaking"`, audio limpio sin números).
  10. **📝 Tarea & Cierre**:
      - Slide 12: Cierre y felicitación (`type: "standard"`).
      - Slide 13: Homework contextualizado con 3 ejemplos modelo reales, checklist con iconos y botón para compartir por WhatsApp (`type: "homework"`).

- **VOCABULARIO Y LOCALIZACIÓN (COLOMBIA)**:
  - Todo el vocabulario debe ser comprensible y natural en Colombia (*desayunar arepas*, *hacer pereza*, *chatear*, *parchar*, *entrenar*, *montar cicla*, *almorzar*, *trasnochar*).
- **PRESERVACIÓN ESTRICTA DE IMÁGENES**:
  - Respetar y enlazar las imágenes existentes (`/images/teens-...`) sin romper URLs ni superar 400 KB.

- **REGLAS DE ESTANDARIZACIÓN Y RESILIENCIA TÉCNICA (ANTI-CRASH & COMPATIBILIDAD)**:
  1. **🎯 Objetivos Universales en Todo Nivel**:
     - Toda diapositiva de metas (`type: "objectives-animated"` o `isGoalsSlide`) DEBE definir explícitamente `objectives: [ "1. Meta...", "2. Meta...", "3. Meta..." ]`.
     - `SlideRenderer.tsx` DEBE utilizar `resolveGoalsList(slide, cls)` como extractor universal para garantizar que ninguna clase clásica o moderna quede con el panel de objetivos vacío.
  2. **🛡️ Navegación de Diapositivas y Prevención de Pantalla en Blanco**:
     - Al cambiar de clase en `PresentationViewer.tsx`, el índice activo DEBE resetearse a 0 (`useEffect([cls.id])`).
     - El visor de diapositivas DEBE usar un índice clamped seguro `safeIndex = Math.max(0, Math.min(currentIndex, allSlides.length - 1))` y fallback `allSlides[safeIndex] || allSlides[0]` para que jamás retorne `null` ni cause pantalla en blanco en los extremos.
  3. **📐 Navegación Segmentada en Grammar Studio (5 Columnas)**:
     - Todo `Grammar Studio` y `Vocabulary Matrix Studio` debe renderizarse mediante la rejilla segmentada de 5 columnas con numeración `Paso 1` a `Paso 5`, checkmark de completado (`✓`), línea de brillo activo y botones de navegación `◀ Anterior` / `Siguiente Paso ➔` con cero scroll horizontal.
  4. **🧩 Sincronización Obligatoria con `classStructureMap.ts`**:
     - Cada nueva clase implementada en `curriculumTeensStudio.ts` DEBE tener su entrada correspondiente en `src/data/classStructureMap.ts` con tokens de ensamblaje (`parts`) artesanales y coherentes con la lección.
  5. **🔊 Audio y Texto en Listening Lab**:
     - `listeningData` DEBE contener idéntico texto en `transcription` y `audioTeacherText` para que la síntesis de voz y la revelación de la tarjeta funcionen al unísono.
  6. **🛡️ Escape Seguro de RegExp en Componentes de Resaltado**:
     - Todo componente que use `new RegExp()` para resaltar palabras o frases (como `HomeworkSlideCard`, `VideoHomeworkSlideCard`, `StoryVocabularyLibrary`) DEBE utilizar `escapeRegExp(str)` para evitar que caracteres pedagógicos comunes (`+`, `-`, `?`, `(`, `)`) causen errores de sintaxis (`Invalid regular expression: Nothing to repeat`).
  7. **⚡ Estandarización Universal de AI Verb Arena**:
     - `SlideRenderer.tsx` DEBE utilizar `resolveVerbArenaPool(slide)` para extraer el catálogo de verbos admitiendo indistintamente `verbsData`, `vocabularyCards`, `verbs` o `verbArenaData.verbs`.
     - `VerbArenaGame.tsx` DEBE admitir propiedades `term`, `word` o `verb`, y traducciones `meaning_es`, `meaning`, `translation` o `es`.
     - `maxRounds` se resuelve de forma elástica mediante `slide.limit || slide.verbsData?.length || slide.verbArenaData?.limit || customPool?.length || 6`.
  8. **🧩 Estandarización Universal de Story Decoder**:
     - `SlideRenderer.tsx` DEBE utilizar `resolveStoryDecoderLines(slide)` soportando tanto `storyDecoderData.lines` como `storyDecoderData.sentences` o arrays planos.
     - Al cambiar de diapositiva (`useEffect([slide.id])`), el estado `storyLineIndex` DEBE resetearse a `0`.
     - La verificación de respuestas debe normalizar puntuación (`replace(/[.,!?;:]/g, '')`) y soportar fallback a `currentLine.en` o `puzzle.easy_blocks.join(' ')` si `preferred_answer` no está explícito.
  9. **📐 Estandarización Universal de Grammar Studio & Vocabulary Matrix**:
     - `SlideRenderer.tsx` DEBE utilizar `resolveGrammarData(slide)` soportando indistintamente `slide.grammarData.structures` o `slide.grammarStudioData.tabs`.
     - Ninguna diapositiva de gramática o vocabulario debe renderizar `null` o quedar vacía por diferencias de nomenclatura.
  10. **📖 Estandarización Universal de Reading Studio**:
      - `SlideRenderer.tsx` DEBE utilizar `resolveReadingLines(slide)` soportando tanto `slide.content` como `slide.readingData.dialogue` con traducción `es`.
      - Se debe garantizar compatibilidad dual en `Spotlight` y `Ver Todo el Texto`.
  11. **🎙️ Estandarización Universal de Speaking & Fluency**:
      - `SlideRenderer.tsx` DEBE utilizar `resolveSpeakingQuestions(slide)` soportando arrays en `slide.content`, `slide.speakingPrompts` o `slide.speakingData.questions`.
  12. **🎉 Cierre & Celebración Dinámica (Slide 12 / `isWrapUpSlide`)**:
      - Toda diapositiva de cierre DEBE incluir en `slide.content` EXACTAMENTE 3 logros reales, medibles y personalizados de esa clase (`[ "1. Logro gramatical...", "2. Vocabulario / estructura...", "3. Fluidez / producción oral..." ]`).
      - `SlideRenderer.tsx` DEBE renderizar estos 3 logros en las 3 tarjetas de celebración dinámicas (`🎯`, `⚡`, `🚀`) con tipografía grande y legible para celular en Google Meet. Queda estrictamente prohibido renderizar textos o tarjetas genéricas hardcodeadas como `"New topic mastered"`.
  13. **📝 Estandarización de Tareas (Slide 13 / `HomeworkSlideCard` & `homeworkResolver`)**:
      - **Desglose en Pasos Limpios (Anti-muro de texto)**: Cada tarea en `slide.content` DEBE estructurarse en 3 o 4 pasos ordenados con oraciones modelo entre comillas (`1. Usa [Estructura]... (ej: 'Frase modelo en inglés')`, `2. Usa... (ej: '...')`, etc.). `HomeworkSlideCard.tsx` DEBE renderizar cada paso en una tarjeta/fila individual con número grande (`1`, `2`, `3`, `4`) y chip de ejemplo destacado (`✨ ej: '...'`), quedando TERMINANTEMENTE PROHIBIDO concatenar todo el texto en un solo párrafo corrido.
      - **Coherencia Total 100% (Ejemplos y Checklist Sincronizados)**: `homeworkResolver.ts` DEBE extraer directamente las frases modelo entre comillas de los pasos para poblar el bloque *Example* y generar los checks dinámicos de *What to include*. Queda estrictamente prohibido mostrar presets genéricos desactualizados (como "can/cannot" en clases de otros temas).
      - **Compartir por WhatsApp**: El botón de WhatsApp DEBE generar el mensaje con los pasos, ejemplos reales y fecha de entrega exactos de esa clase.

## 🎮 PROTOCOLO OFICIAL: GAMIFIED 3D GRAMMAR STUDIO (5 NIVELES / ESTILO CONCEPTO C)

Este protocolo es de cumplimiento **estricto y obligatorio** para el diseño, desarrollo, enriquecimiento y renderizado de las diapositivas de **Grammar Studio** en todas las clases y niveles (Teens, Kids y Adults).

### 🎯 1. REGLA DE COHERENCIA PEDAGÓGICA Y NO REPETICIÓN
- **Diagnóstico y Lectura Previa Obligatoria**: Antes de crear o editar la gramática de una clase, el desarrollador/agente DEBE leer con rigor el `title`, `description`, `objective` y las metas (`objectives`).
- **Cero Vacíos con los Objetivos**: Toda estructura gramatical prometida en los objetivos DEBE enseñarse de forma explícita y completa en los 5 pasos sin dar nada por sentado.
- **Pertinencia por Nivel y No Redundancia**: Calibrar el vocabulario y complejidad al nivel exacto del estudiante (Basic Zero, Basic 1, Intermediate, etc.). No repetir de forma idéntica estructuras ya cubiertas en clases previas del mismo track sin una profundización real.
- **Prohibición de Generadores Genéricos**: Cada ejemplo, fórmula, traducción y regla debe redactarse **a mano y de forma artesanal**, contextualizada a situaciones reales y juveniles (deportes, chats, colegio, música, videojuegos, comida local colombiana).

### 🕹️ 2. ARQUITECTURA GAMIFICADA MODULAR DE PANTALLA COMPLETA (CONCEPTO C UNIFICADO)
Tanto la **Diapositiva 4 (Grammar Studio Core)** como la **Diapositiva 5 (Vocabulary Matrix Studio)** se componen de **EXACTAMENTE 5 Pasos / Niveles Progresivos** estructurados en **Una Sola Tarjeta Maestra de Pantalla Completa (Full Viewport Immersive Card)**:

1. **Un Solo Contenedor Maestro (Cero Cajas Anidadas Redundantes)**:
   - La tarjeta modular ocupa el 100% del viewport útil de la diapositiva, eliminando marcos o cajas externas dobles.
   - Todo (título de la clase, selector de 5 pasos, avatar 3D, bloques LEGO, oración modelo y footer) vive dentro de esta tarjeta principal.
2. **Cabecera Integrada de Alto Impacto**:
   - **Izquierda**: Píldora de `PASO X • [Nombre]` + `+X00 XP` y **Título de la clase** en tipografía grande (`text-2xl` a `text-3xl`).
   - **Derecha**: Selector interactivo de los **5 Pasos con botones neón (`Paso 1` a `Paso 5` con checkmark `✓`)** y selector de vista (`Enfocado` / `5 Niveles`).
3. **Bordes y Resplandor Neón por Nivel**:
   - **Nivel 1 (Paso 1)**: `⭐ 100 XP` • **Esmeralda / Verde Neón** (`#10b981`, `border-emerald-400/80`)
   - **Nivel 2 (Paso 2)**: `⭐ 200 XP` • **Ámbar / Naranja Neón** (`#f59e0b`, `border-amber-400/80`)
   - **Nivel 3 (Paso 3)**: `⭐ 300 XP` • **Fucsia / Rosa Neón** (`#d946ef`, `border-fuchsia-400/80`)
   - **Nivel 4 (Paso 4)**: `⭐ 400 XP` • **Cian / Azul Neón** (`#06b6d4`, `border-cyan-400/80`)
   - **Nivel 5 (Paso 5)**: `⭐ 500 XP` • **Púrpura / Violeta Neón** (`#a855f7`, `border-purple-400/80`)
4. **Distribución Panorámica 2 Columnas (85-90% de la pantalla)**:
   - **Izquierda (Avatar 3D Cutout - 40%)**: Avatar 3D animado grande con **fondo transparente / cutout** y halo ambiental radiante según el color del paso.
   - **Derecha (Contenido de Gran Formato - 60%)**:
     - Subtítulo del Paso (`text-2xl` a `text-3xl`) y medalla de métrica.
     - **Bloques LEGO Sintácticos**: Fichas semánticas interactivas (`👤 SUJETO`, `⚡ VERBO`, `📦 COMPLEMENTO`).
     - **Oración Modelo en Inglés**: `text-2xl` a `text-4xl` de altísima legibilidad para Google Meet y pantallas de celular.
     - **Traducción al Español**: `text-base` a `text-xl` en contraste cian/ámbar.
     - **Regla Práctica (`rule`)**: Micro-etiqueta con el tip clave.
5. **Pie de Tarjeta Integrado**:
   - Botón `🔊 ESCUCHAR ORACIÓN` con el color temático del nivel.
   - Navegación `◀ Anterior`, contador `X/5` y botón `Siguiente Nivel ➔`.

### 📚 3. INTEGRACIÓN DUAL OBLIGATORIA (SLIDE 4 Y SLIDE 5)
- **Slide 4 (Grammar Studio Core)**: 5 Niveles con las 5 estructuras gramaticales principales (Afirmativo, 3ra persona, Negativo, Pregunta Sí/No, Pregunta Wh-). Fórmulas obligatorias en corchetes `[ ... ] + [ ... ]`.
- **Slide 5 (Vocabulary Matrix Studio)**: 5 Niveles con las 5 categorías temáticas del vocabulario, cada una con su fórmula en bloques LEGO (`[ Categoría / Sujeto ] + [ Términos Clave ] + [ Aplicación ]`), su avatar 3D contextualizado y su oración modelo.

### 🎨 4. PROTOCOLO OBLIGATORIO DE GENERACIÓN DE AVATARES 3D (CUTOUT NEURONAL REMBG & CERO MANCHAS)
- **Coherencia 1:1 con la Oración Modelo (Contextualización Estricta)**:
  - Cada uno de los 5 pasos DEBE tener un avatar generado específicamente para la acción, emoción u objetos de la oración de ese paso.
  - **Fórmula de Prompt**: Se toma el sujeto, verbo/acción y complementos de la oración en inglés y se traducen en el prompt visual de IA:
    - *Ejemplo Oración*: `"Her best friend is extremely creative and plays three musical instruments."` ➔ *Prompt*: `"3D Pixar Disney style animated teen girl holding an acoustic guitar and musical notes, creative and artistic smile, wearing trendy streetwear hoodie, standing full body isolated on pure solid white background, clean 3D character render"`.
    - *Ejemplo Oración*: `"I wake up at 6:30 AM every morning and take a refreshing shower."` ➔ *Prompt*: `"3D Pixar Disney style animated teen boy stretching and yawning cheerfully with a ringing alarm clock at 6:30 AM, pajama hoodie, isolated on pure solid white background, clean 3D character render"`.
    - *Ejemplo Oración*: `"I am wearing an oversized black hoodie and comfortable white sneakers."` ➔ *Prompt*: `"3D Pixar Disney style animated teen boy showcasing his oversized black hoodie, cargo pants and clean white skate sneakers, isolated on pure solid white background"`.
- **Fondo Puro (#000000 o #FFFFFF) sin Bokeh**: Al generar imágenes en IA, el prompt DEBE especificar:
  `"isolated on pure solid flat white background, no background bokeh, no particles, no light streaks, 100% clean studio backdrop, 3D character render"`.
- **Segmentación Neuronal Obligatoria (`rembg` U2-Net)**:
  - Todo personaje o elemento sin fondo DEBE procesarse mediante `rembg` (modelo U2-Net) con recorte automático de bounding box (`bbox = img.getbbox()`) y guardado en WebP (`quality=90`):
  ```python
  from rembg import remove, new_session
  from PIL import Image

  session = new_session("u2net")
  cutout = remove(img, session=session)
  bbox = cutout.getbbox()
  if bbox:
      cutout = cutout.crop(bbox)
  cutout.thumbnail((800, 800), Image.Resampling.LANCZOS)
  cutout.save(dest_path, "WEBP", quality=90)
  ```
- **Prohibición de Filtros Blur CSS Artificiales**: Queda prohibido colocar elementos CSS con `blur-3xl` o resplandores borrosos detrás de los personajes para evitar halos o manchas sucias.
- **Ajuste Responsivo para Zoom 100% (Sin Scroll)**:
  - La tarjeta maestra debe ajustarse con `max-h-[340px]` a `max-h-[380px]` para el avatar y paddings compactos (`p-2.5 sm:p-3.5`), garantizando que en monitores estándar a resolución 100% (sin zoom out) la tarjeta y la nota del profesor quepan perfectamente en pantalla completa.
- **Tamaño Máximo 250 KB**: Todo avatar WebP resultante debe pesar entre 40 KB y 120 KB.

### 🧩 5. ESTRUCTURA SINTÁCTICA POR BLOQUES LEGO (OBLIGATORIAS)
- **Fichas Sintácticas Tipo Bloques LEGO (`formula`)**:
  - Toda estructura en Slide 4 y Slide 5 DEBE desglosarse en fichas individuales delimitadas por corchetes (`[ ... ]`) y unidas por conectores (`➕` o `➔`).
  - Código de color semántico obligatorio:
    - 👤 **Sujeto / Pronombres** (`Cian / Azul Neón`): `[ I'm / You're / He's... ]` o `[ Sujeto ]`.
    - ⚡ **Verbos / Auxiliares / To Be** (`Verde Esmeralda Neón`): `[ am / is / are ]` o `[ Verbo de acción ]`.
    - ⛔ **Negación / Partículas** (`Rosa / Rojo Neón`): `[ don't / doesn't ]` o `[ not ]`.
    - ⏱️ **Frecuencia / Tiempo / Conectores** (`Fucsia Neón`): `[ Adverbio ]`, `[ In the morning ]`, `[ at 7:00 AM ]`.
    - 🌟 **Modales / Habilidad** (`Púrpura / Violeta Neón`): `[ can / can't ]`, `[ must ]`, `[ should ]`.
    - 👉 **Demostrativos** (`Índigo Neón`): `[ This is / That is ]`, `[ These are / Those are ]`.
    - ❓ **Preguntas Wh-** (`Azul Cielo Neón`): `[ What / Where / Who ]`.
    - 📦 **Complemento / Objeto / Lugar** (`Ámbar / Dorado Neón`): `[ Identidad / Lugar ]` o `[ Complemento ]`.
- **Doble Nivel (Micro-etiqueta de Función + Fichas Reales)**:
  - Cada bloque Lego muestra en su parte superior una micro-etiqueta con su rol pedagógico (`👤 SUJETO`, `⚡ VERBO / TO BE`, `📦 COMPLEMENTO`) y en el centro los tokens reales en tipografía mono de alto contraste.
- **Interacción y Resaltado Visual**:
  - Tocar o pasar el cursor sobre cualquier ficha Lego debe activar el resaltado con anillo de brillo y escala en tiempo real para captar la atención del alumno en pantalla compartida.

### 🛡️ 7. RESILIENCIA TÉCNICA Y PREVENCIÓN DE PANTALLA EN BLANCO (ANTI-CRASH REACT & VITE)
- **Declaración Estricta de Estados en Componentes (`useState`)**:
  - Todo estado o setter utilizado en el JSX o callbacks de un componente (ej: `grammarViewMode`, `setGrammarViewMode`, `grammarActiveTab`) DEBE estar explícitamente declarado en el cuerpo del componente con su respectivo `useState` y con su valor inicial seguro.
  - Al cambiar de diapositiva (`useEffect([slide.id])`), DEBEN resetearse todos los estados interactivos a sus valores por defecto seguros para evitar que variables desincronizadas provoquen `ReferenceError` o bloqueos de renderizado.
- **Unicidad Obligatoria de Claves en Listas (`key={...}`)**:
  - Toda lista mapeada en React (especialmente en la barra de etapas/módulos de `PresentationViewer.tsx` o selectores de tarjetas) DEBE utilizar claves compuestas únicas (ej: `key={`${mod.id}-${mod.startIndex}`}` o `key={`${item.id}-${idx}`}`) para evitar warnings de claves duplicadas (`Encountered two children with the same key`) y prevenir desajustes en el reconciliador de React DOM.
- **Encapsulación y Compatibilidad con Fast Refresh de Vite**:
  - Los archivos de componentes principales (como `SlideRenderer.tsx`) no deben exportar funciones o constantes auxiliares accesorias si esto activa incompatibilidades con Vite React Fast Refresh (`Could not Fast Refresh: export is incompatible`). Deben mantenerse como funciones/constantes internas del módulo o modularizarse en archivos `utils/`.
- **Validación Estricta de Variables en Mapeos JSX (`.map`)**:
  - Toda iteración o renderizado de colecciones en JSX (ej: los 5 puntos luminosos de progreso, tarjetas de etapas o badges) DEBE derivarse estrictamente de variables existentes en el scope local (como `structures.map(...)` o `GRAMMAR_STEP_THEMES.map(...)`). Queda estrictamente prohibido usar referencias a variables auxiliares ficticias o no declaradas para evitar `ReferenceError` en tiempo de ejecución.

