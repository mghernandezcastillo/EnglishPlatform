# 📚 ESTRUCTURA OFICIAL Y OBLIGATORIA DE UNA CLASE (CURRICULUM BLUEPRINT)

**CRITICAL SYSTEM INSTRUCTION**: You are STRICTLY FORBIDDEN from generating "flat", simplified, or placeholder classes. Every single class generated and added to `src/data/curriculum.ts` MUST rigorously follow this exact blueprint, slide by slide. You must maintain the aesthetic properties (`bgColor`, `imageUrl`), interactive properties (`options`, `correctOptionIndex`), and game types (`emoji-game`).

## 🔐 SUPABASE / BASE DE DATOS
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

## 🛑 STRICT PROHIBITIONS
- NEVER leave `content` undefined.
- NEVER create a quiz/multiple choice slide without the `options` array.
- NEVER omit `bgColor` from any slide.
- NEVER repeat the same image across different slides of the same class. Every visual slide must have a 100% unique image.
- NEVER leave a broken or unverified YouTube link in the video homework slide.
- NEVER use generic placeholders like "Option A" or "Wrong option". You MUST generate real, pedagogically sound content for every single slide and option.
- NEVER reintroduce static imports of heavy components or raw uncompressed images into `App.tsx` or `public/images/`.


