import React from 'react';

export interface TeenSpeakerInfo {
  name: string;
  avatarType: string;
  ringGradient: string;
  badgeStyle: string;
  glowColor: string;
  avatarSvg: React.ReactNode;
}

const FEMALE_NAMES = new Set([
  'manuela', 'valeria', 'valentina', 'camila', 'sofia', 'sofía', 'sara', 'mariana',
  'laura', 'emma', 'lucia', 'lucía', 'ana', 'isabella', 'daniela', 'carolina',
  'paula', 'juliana', 'maria', 'maría', 'elena', 'jessica', 'clara', 'andrea',
  'natalia', 'gabriela', 'diana', 'sam', 'sarah', 'lisa', 'mia', 'zoe', 'chloe'
]);

const MALE_NAMES = new Set([
  'santiago', 'lucas', 'felipe', 'mateo', 'david', 'juan', 'daniel', 'camilo',
  'tomas', 'tomás', 'alex', 'mike', 'nicolas', 'nicolás', 'samuel', 'sebastian',
  'sebastián', 'andres', 'andrés', 'diego', 'julian', 'julián', 'carlos', 'alejandro',
  'miguel', 'gabriel', 'john', 'leo', 'max', 'liam', 'noah', 'ethan', 'ben'
]);

const OFFICIAL_NAMES = new Set([
  'official', 'officer', 'agent', 'guard', 'police', 'security', 'inspector', 'oficial'
]);

const TEACHER_NAMES = new Set([
  'teacher', 'profesor', 'profesora', 'profe', 'coach', 'mister', 'miss'
]);

export function getTeenSpeakerInfo(speakerName?: string, index: number = 0): TeenSpeakerInfo {
  const rawName = (speakerName || '').trim();
  const cleanName = rawName || (index % 2 === 0 ? 'Speaker 1' : 'Speaker 2');
  const lower = cleanName.toLowerCase().replace(/[^a-záéíóúñ]/g, '');

  // Detect category
  if (OFFICIAL_NAMES.has(lower) || /official|officer|guard|police|seguridad/i.test(lower)) {
    return {
      name: cleanName,
      avatarType: 'official',
      ringGradient: 'from-amber-400 via-yellow-500 to-orange-600',
      badgeStyle: 'bg-amber-500/25 border border-amber-400/70 text-amber-200 shadow-amber-500/20',
      glowColor: 'rgba(245, 158, 11, 0.5)',
      avatarSvg: <OfficialAvatarSvg />,
    };
  }

  if (TEACHER_NAMES.has(lower) || /teacher|profesor|profe|coach/i.test(lower)) {
    return {
      name: cleanName,
      avatarType: 'teacher',
      ringGradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      badgeStyle: 'bg-emerald-500/25 border border-emerald-400/70 text-emerald-200 shadow-emerald-500/20',
      glowColor: 'rgba(16, 185, 129, 0.5)',
      avatarSvg: <TeacherAvatarSvg />,
    };
  }

  const isFemale = FEMALE_NAMES.has(lower) || (!MALE_NAMES.has(lower) && index % 2 === 1);
  const variant = Math.abs(hashString(cleanName) % 3);

  if (isFemale) {
    if (variant === 0) {
      return {
        name: cleanName,
        avatarType: 'girl-1',
        ringGradient: 'from-pink-500 via-rose-500 to-fuchsia-600',
        badgeStyle: 'bg-rose-500/25 border border-rose-400/70 text-rose-200 shadow-rose-500/20',
        glowColor: 'rgba(244, 63, 94, 0.5)',
        avatarSvg: <Girl1AvatarSvg />,
      };
    } else if (variant === 1) {
      return {
        name: cleanName,
        avatarType: 'girl-2',
        ringGradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        badgeStyle: 'bg-purple-500/25 border border-purple-400/70 text-purple-200 shadow-purple-500/20',
        glowColor: 'rgba(168, 85, 247, 0.5)',
        avatarSvg: <Girl2AvatarSvg />,
      };
    } else {
      return {
        name: cleanName,
        avatarType: 'girl-3',
        ringGradient: 'from-violet-500 via-rose-500 to-amber-500',
        badgeStyle: 'bg-pink-500/25 border border-pink-400/70 text-pink-200 shadow-pink-500/20',
        glowColor: 'rgba(236, 72, 153, 0.5)',
        avatarSvg: <Girl3AvatarSvg />,
      };
    }
  } else {
    if (variant === 0) {
      return {
        name: cleanName,
        avatarType: 'boy-1',
        ringGradient: 'from-cyan-400 via-sky-500 to-blue-600',
        badgeStyle: 'bg-cyan-500/25 border border-cyan-400/70 text-cyan-200 shadow-cyan-500/20',
        glowColor: 'rgba(6, 182, 212, 0.5)',
        avatarSvg: <Boy1AvatarSvg />,
      };
    } else if (variant === 1) {
      return {
        name: cleanName,
        avatarType: 'boy-2',
        ringGradient: 'from-teal-400 via-cyan-500 to-indigo-600',
        badgeStyle: 'bg-teal-500/25 border border-teal-400/70 text-teal-200 shadow-teal-500/20',
        glowColor: 'rgba(20, 184, 166, 0.5)',
        avatarSvg: <Boy2AvatarSvg />,
      };
    } else {
      return {
        name: cleanName,
        avatarType: 'boy-3',
        ringGradient: 'from-blue-500 via-indigo-500 to-purple-600',
        badgeStyle: 'bg-sky-500/25 border border-sky-400/70 text-sky-200 shadow-sky-500/20',
        glowColor: 'rgba(59, 130, 246, 0.5)',
        avatarSvg: <Boy3AvatarSvg />,
      };
    }
  }
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

/** GIRL 1: Warm skin tone, wavy brown hair with star hairclip, rose hoodie */
export function Girl1AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g1-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#881337" />
        </radialGradient>
        <linearGradient id="g1-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g1-bg)" />
      {/* Hair back */}
      <path d="M22 45 C18 68, 20 85, 30 92 L70 92 C80 85, 82 68, 78 45 Z" fill="url(#g1-hair)" />
      {/* Hoodie Body */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#e11d48" />
      <path d="M40 73 L50 82 L60 73" stroke="#fda4af" strokeWidth="2.5" strokeLinecap="round" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#f59e0b" />
      {/* Face */}
      <ellipse cx="50" cy="48" rx="20" ry="22" fill="#fed7aa" />
      {/* Blush */}
      <circle cx="37" cy="53" r="4" fill="#fda4af" opacity="0.6" />
      <circle cx="63" cy="53" r="4" fill="#fda4af" opacity="0.6" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="3.5" fill="#1e1b4b" />
      <circle cx="41.5" cy="44.5" r="1.2" fill="#ffffff" />
      <circle cx="60" cy="46" r="3.5" fill="#1e1b4b" />
      <circle cx="61.5" cy="44.5" r="1.2" fill="#ffffff" />
      {/* Eyelashes */}
      <path d="M37 42 Q40 39 43 42" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M57 42 Q60 39 63 42" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Smile */}
      <path d="M44 55 Q50 61 56 55" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hair front */}
      <path d="M30 38 C32 24, 68 24, 70 38 C64 30, 52 30, 50 36 C48 30, 36 30, 30 38 Z" fill="url(#g1-hair)" />
      <path d="M28 36 C25 48, 28 60, 31 64 C30 52, 33 42, 36 38 Z" fill="url(#g1-hair)" />
      <path d="M72 36 C75 48, 72 60, 69 64 C70 52, 67 42, 64 38 Z" fill="url(#g1-hair)" />
      {/* Hair clip */}
      <circle cx="34" cy="33" r="3.5" fill="#fde047" />
    </svg>
  );
}

/** GIRL 2: Lavender ponytail, cyan jacket, energetic look */
export function Girl2AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g2-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        <linearGradient id="g2-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g2-bg)" />
      {/* High Ponytail */}
      <path d="M60 22 C78 16, 88 30, 84 52 C80 44, 74 32, 64 28 Z" fill="url(#g2-hair)" />
      <circle cx="62" cy="26" r="4" fill="#06b6d4" />
      {/* Jacket */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#0284c7" />
      <path d="M50 72 L50 92" stroke="#38bdf8" strokeWidth="2.5" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fbcfe8" />
      {/* Face */}
      <ellipse cx="50" cy="48" rx="20" ry="22" fill="#fde2e4" />
      {/* Blush */}
      <circle cx="37" cy="53" r="4" fill="#f472b6" opacity="0.6" />
      <circle cx="63" cy="53" r="4" fill="#f472b6" opacity="0.6" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="3.5" fill="#312e81" />
      <circle cx="41.5" cy="44.5" r="1.2" fill="#ffffff" />
      <circle cx="60" cy="46" r="3.5" fill="#312e81" />
      <circle cx="61.5" cy="44.5" r="1.2" fill="#ffffff" />
      {/* Smile */}
      <path d="M43 55 Q50 62 57 55" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hair front */}
      <path d="M30 38 C34 22, 64 20, 68 36 C58 28, 44 28, 32 38 Z" fill="url(#g2-hair)" />
      <path d="M28 36 C26 48, 28 58, 30 62 C30 50, 32 42, 34 38 Z" fill="url(#g2-hair)" />
    </svg>
  );
}

/** GIRL 3: Modern bob cut, round glasses, creative vibe */
export function Girl3AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g3-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id="g3-hair" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g3-bg)" />
      {/* Bob hair back */}
      <circle cx="50" cy="48" r="26" fill="url(#g3-hair)" />
      {/* Top */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#8b5cf6" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fed7aa" />
      {/* Face */}
      <ellipse cx="50" cy="49" rx="19" ry="21" fill="#ffedd5" />
      {/* Glasses */}
      <circle cx="39" cy="46" r="7" stroke="#facc15" strokeWidth="2" fill="#ffffff" fillOpacity="0.2" />
      <circle cx="61" cy="46" r="7" stroke="#facc15" strokeWidth="2" fill="#ffffff" fillOpacity="0.2" />
      <path d="M46 46 L54 46" stroke="#facc15" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="39" cy="46" r="2.8" fill="#0f172a" />
      <circle cx="61" cy="46" r="2.8" fill="#0f172a" />
      {/* Smile */}
      <path d="M44 57 Q50 62 56 57" stroke="#db2777" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Hair front bangs */}
      <path d="M28 42 C30 26, 70 26, 72 42 C64 32, 56 32, 50 35 C44 32, 36 32, 28 42 Z" fill="url(#g3-hair)" />
    </svg>
  );
}

/** BOY 1: Dark messy hair, gamer headphones, cyan hoodie */
export function Boy1AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="b1-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#082f49" />
        </radialGradient>
        <linearGradient id="b1-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#b1-bg)" />
      {/* Headphone Band */}
      <path d="M26 44 C26 22, 74 22, 74 44" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Hoodie */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#0891b2" />
      <path d="M40 73 L50 83 L60 73" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fdba74" />
      {/* Face */}
      <ellipse cx="50" cy="48" rx="20" ry="22" fill="#fed7aa" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="3.5" fill="#0f172a" />
      <circle cx="41.5" cy="44.5" r="1.2" fill="#ffffff" />
      <circle cx="60" cy="46" r="3.5" fill="#0f172a" />
      <circle cx="61.5" cy="44.5" r="1.2" fill="#ffffff" />
      {/* Eyebrows */}
      <path d="M36 40 Q41 37 44 40" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 40 Q59 37 64 40" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
      {/* Smile */}
      <path d="M43 56 Q50 63 57 56" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hair front */}
      <path d="M28 38 C32 20, 68 20, 72 38 C64 27, 54 28, 48 34 C44 28, 34 29, 28 38 Z" fill="url(#b1-hair)" />
      {/* Headphone Earcups */}
      <rect x="23" y="40" width="7" height="16" rx="3.5" fill="#0284c7" />
      <rect x="70" y="40" width="7" height="16" rx="3.5" fill="#0284c7" />
    </svg>
  );
}

/** BOY 2: Cap backward, sporty vibe, emerald/teal jacket */
export function Boy2AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="b2-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#042f2e" />
        </radialGradient>
        <linearGradient id="b2-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#b2-bg)" />
      {/* Backward Cap Base */}
      <ellipse cx="50" cy="33" rx="23" ry="14" fill="#0d9488" />
      <path d="M42 22 Q50 18 58 22 L55 27 L45 27 Z" fill="#115e59" />
      {/* Jacket */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#0f766e" />
      <path d="M50 72 L50 92" stroke="#5eead4" strokeWidth="2.5" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#f59e0b" />
      {/* Face */}
      <ellipse cx="50" cy="49" rx="20" ry="21" fill="#fde68a" />
      {/* Curly hair bangs peeking */}
      <circle cx="36" cy="36" r="4" fill="url(#b2-hair)" />
      <circle cx="43" cy="35" r="4" fill="url(#b2-hair)" />
      <circle cx="57" cy="35" r="4" fill="url(#b2-hair)" />
      <circle cx="64" cy="36" r="4" fill="url(#b2-hair)" />
      {/* Eyes */}
      <circle cx="40" cy="47" r="3.5" fill="#134e4a" />
      <circle cx="41.5" cy="45.5" r="1.2" fill="#ffffff" />
      <circle cx="60" cy="47" r="3.5" fill="#134e4a" />
      <circle cx="61.5" cy="45.5" r="1.2" fill="#ffffff" />
      {/* Smile */}
      <path d="M43 56 Q50 63 57 56" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** BOY 3: Trendy side-part, orange bomber jacket, confident smile */
export function Boy3AvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="b3-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#172554" />
        </radialGradient>
        <linearGradient id="b3-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#b3-bg)" />
      {/* Jacket */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#ea580c" />
      <path d="M42 73 L50 83 L58 73" stroke="#fed7aa" strokeWidth="2.5" strokeLinecap="round" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fed7aa" />
      {/* Face */}
      <ellipse cx="50" cy="48" rx="20" ry="22" fill="#ffedd5" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="3.5" fill="#1e3a8a" />
      <circle cx="41.5" cy="44.5" r="1.2" fill="#ffffff" />
      <circle cx="60" cy="46" r="3.5" fill="#1e3a8a" />
      <circle cx="61.5" cy="44.5" r="1.2" fill="#ffffff" />
      {/* Eyebrows */}
      <path d="M37 40 Q41 38 44 40" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 40 Q59 38 63 40" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      {/* Smile */}
      <path d="M43 56 Q50 63 57 56" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hair front side part */}
      <path d="M28 36 C34 18, 70 20, 72 36 C62 26, 44 26, 32 38 Z" fill="url(#b3-hair)" />
      <path d="M28 36 C26 44, 27 52, 29 56 C29 48, 30 42, 32 38 Z" fill="url(#b3-hair)" />
    </svg>
  );
}

/** OFFICIAL: Navy cap, golden badge, authority collar */
export function OfficialAvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="off-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#off-bg)" />
      {/* Uniform */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#1e293b" />
      <path d="M50 72 L50 92" stroke="#facc15" strokeWidth="2" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fed7aa" />
      {/* Face */}
      <ellipse cx="50" cy="50" rx="19" ry="20" fill="#ffedd5" />
      {/* Eyes */}
      <circle cx="41" cy="48" r="3" fill="#0f172a" />
      <circle cx="59" cy="48" r="3" fill="#0f172a" />
      {/* Smile */}
      <path d="M44 58 Q50 63 56 58" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Officer Cap */}
      <path d="M28 36 C30 20, 70 20, 72 36 Z" fill="#0f172a" />
      <path d="M24 36 L76 36 L72 40 L28 40 Z" fill="#facc15" />
      {/* Star / Badge on cap */}
      <polygon points="50,24 52,29 57,29 53,32 55,37 50,34 45,37 47,32 43,29 48,29" fill="#facc15" />
    </svg>
  );
}

/** TEACHER: Glasses, blazer, warm smile */
export function TeacherAvatarSvg() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tea-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#tea-bg)" />
      {/* Blazer */}
      <path d="M26 92 C28 78, 38 72, 50 72 C62 72, 72 78, 74 92 Z" fill="#047857" />
      <path d="M42 73 L50 85 L58 73" stroke="#a7f3d0" strokeWidth="2.5" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#fbcfe8" />
      {/* Face */}
      <ellipse cx="50" cy="48" rx="19" ry="21" fill="#fed7aa" />
      {/* Glasses */}
      <rect x="34" y="42" width="12" height="9" rx="3" stroke="#10b981" strokeWidth="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="54" y="42" width="12" height="9" rx="3" stroke="#10b981" strokeWidth="2" fill="#ffffff" fillOpacity="0.2" />
      <path d="M46 46 L54 46" stroke="#10b981" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="2.5" fill="#064e3b" />
      <circle cx="60" cy="46" r="2.5" fill="#064e3b" />
      {/* Smile */}
      <path d="M44 57 Q50 63 56 57" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hair */}
      <path d="M28 38 C32 20, 68 20, 72 38 C62 28, 54 28, 48 34 C44 28, 36 28, 28 38 Z" fill="#451a03" />
    </svg>
  );
}
