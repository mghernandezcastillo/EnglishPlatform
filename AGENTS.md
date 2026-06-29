# 📚 ESTRUCTURA OFICIAL Y OBLIGATORIA DE UNA CLASE (CURRICULUM BLUEPRINT)

**CRITICAL SYSTEM INSTRUCTION**: You are STRICTLY FORBIDDEN from generating "flat", simplified, or placeholder classes. Every single class generated and added to `src/data/curriculum.ts` MUST rigorously follow this exact blueprint, slide by slide. You must maintain the aesthetic properties (`bgColor`, `imageUrl`), interactive properties (`options`, `correctOptionIndex`), and game types (`emoji-game`).

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
- **Slide 1 (Let's Talk!)**: Speaking prompt for students. `bgColor` (e.g., `from-emerald-500 to-teal-600`).
- **Slides 2-4 (Fun Quiz! X/3)**:
  - **MUST HAVE**: `options` (Array of EXACTLY 3 real strings), `correctOptionIndex` (0, 1, or 2).
  - `bgColor` (e.g., `from-pink-500 to-rose-600`).
- **Slide 5 (Roleplay/Share)**: Partner activity.

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
- NEVER use generic placeholders like "Follow the instructions on screen" or "Option A" or "Wrong option". You MUST generate real, pedagogically sound content for every single slide and option.
