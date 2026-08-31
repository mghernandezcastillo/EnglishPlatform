import React from 'react';

export type TigerPose = 'wave' | 'thinking' | 'celebrating' | 'listening';

interface TigerMentorProps {
  pose?: TigerPose;
  dialogue?: string;
  subtext?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  isCoolTheme?: boolean;
}

const POSE_IMAGES: Record<TigerPose, string> = {
  wave: '/images/mascot/tiger_mentor_wave.jpg',
  thinking: '/images/mascot/tiger_mentor_thinking.jpg',
  celebrating: '/images/mascot/tiger_mentor_celebrating.jpg',
  listening: '/images/mascot/tiger_mentor_listening.jpg',
};

const SIZE_CLASSES = {
  sm: 'w-14 h-14',
  md: 'w-20 h-20 md:w-24 md:h-24',
  lg: 'w-28 h-28 md:w-36 md:h-36',
  hero: 'w-40 h-40 md:w-52 md:h-52',
};

export const TigerMentor: React.FC<TigerMentorProps> = ({
  pose = 'wave',
  dialogue,
  subtext,
  size = 'md',
  className = '',
  isCoolTheme = false,
}) => {
  const imageSrc = POSE_IMAGES[pose] || POSE_IMAGES.wave;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 3D Mascot Avatar with glowing ring */}
      <div className="relative group flex-shrink-0">
        <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${isCoolTheme ? 'from-blue-500 to-indigo-500' : 'from-amber-400 to-orange-500'} opacity-40 group-hover:opacity-75 blur-sm transition duration-300`} />
        <img
          src={imageSrc}
          alt="Maven English Tiger Mascot"
          className={`${SIZE_CLASSES[size]} relative rounded-2xl object-cover shadow-lg border-2 ${isCoolTheme ? 'border-blue-400/40 bg-slate-800' : 'border-amber-400/40 bg-white'} transition-transform duration-300 transform group-hover:scale-105`}
        />
        {/* Badge Indicator */}
        <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 shadow-md border border-white/40">
          🐅 MAVEN
        </div>
      </div>

      {/* Interactive Speech Bubble */}
      {dialogue && (
        <div className={`relative px-4 py-3 rounded-2xl shadow-md border max-w-sm ${isCoolTheme ? 'bg-slate-800/90 border-slate-700 text-slate-100' : 'bg-white/95 border-amber-200/80 text-slate-800'}`}>
          {/* Arrow pointer */}
          <div
            className={`absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 ${isCoolTheme ? 'border-r-slate-800' : 'border-r-white'}`}
          />
          <p className="text-sm md:text-base font-semibold leading-snug">
            {dialogue}
          </p>
          {subtext && (
            <p className={`text-xs mt-1 ${isCoolTheme ? 'text-slate-400' : 'text-slate-500'}`}>
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
