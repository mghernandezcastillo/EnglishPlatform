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

## 🖼️ GENERATED IMAGE REQUIREMENT FOR PLAN-BASED CLASSES
- Cuando se implemente TODO el contenido de una clase tomada de un plan `.md`, se DEBEN generar imágenes propias para las diapositivas visuales de esa clase antes de dar la tarea por terminada.
- Las imágenes generadas deben estar relacionadas directamente con la frase, pregunta, respuesta correcta, vocabulario o actividad de la diapositiva.
- Guardar las imágenes finales dentro del proyecto, preferiblemente en `public/images` o en la carpeta de assets usada por el módulo, con nombres descriptivos y estables.
- Actualizar la clase para usar esas imágenes mediante `imageUrl` o el campo visual equivalente. No dejar referencias a imágenes temporales fuera del workspace.
- En preguntas de selección múltiple, priorizar una imagen principal grande que acompañe la diapositiva completa y esté relacionada con la frase, la pregunta o la respuesta correcta. No convertir las opciones en miniaturas salvo que el diseño de esa actividad lo pida explícitamente.
- No usar imágenes genéricas, placeholders ni assets no relacionados solo para cumplir el campo visual.
- Si se usa Unsplash como excepción, verificar primero cada URL según la regla crítica de imágenes.

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
- **Slide 2 (Homework)**:
  - **MUST HAVE**: `type: "homework"`, `title: "Homework"`.
  - `content`: Explicit written instructions (e.g., "Write 5 sentences about...").
  - `bgColor` (e.g., `from-violet-500 to-fuchsia-600`).
- **Slide 3 (Video Homework 📹)**:
  - **MUST HAVE**: `type: "video"`, `title: "Video Homework 📹"`.
  - **MUST HAVE**: `videoUrl` (e.g., `"https://www.youtube.com/embed/xFsYrTIndhI"`).
  - `content`: Specific instructions for the video.
  - `bgColor` (e.g., `from-slate-800 to-indigo-900`).

## 🛑 STRICT PROHIBITIONS
- NEVER leave `content` undefined.
- NEVER create a quiz/multiple choice slide without the `options` array.
- NEVER omit `bgColor` from any slide.
- NEVER repeat the same image across different slides of the same class. Every visual slide must have a 100% unique image.
- NEVER use adult hipster photos or cartoon illustrations with blank speech bubbles in teen classes.
- NEVER use generic placeholders like "Option A" or "Wrong option". You MUST generate real, pedagogically sound content for every single slide and option.

