import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Lightbulb, MessageCircle, Pencil, Play, Sparkles } from 'lucide-react';
import { ClassSlide, CurriculumClass } from '../types';
import { resolveVideoHomeworkData } from '../lib/videoHomeworkResolver';

interface VideoHomeworkSlideCardProps {
  slide: ClassSlide;
  cls?: CurriculumClass;
  teacherNote?: string;
}

export function VideoHomeworkSlideCard({ slide, cls, teacherNote }: VideoHomeworkSlideCardProps) {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [copied, setCopied] = useState(false);

  const data = resolveVideoHomeworkData(slide, cls);

  const handleShareWhatsApp = () => {
    let msg = data.whatsappMessage || '';
    if (answer1 || answer2) {
      const formattedClassTitle = cls?.title?.split('/')[0]?.trim() || 'English Class';
      msg = `*Video Homework 📹 - ${formattedClassTitle}*\n\n` +
        `*1. Watch:* ${data.watchInstruction}\n` +
        `*2. Write:* ${data.writeInstruction}\n\n` +
        `*Video link:* ${data.videoUrl}\n\n` +
        `*My Answers:*\n1. ${answer1 || '...'}\n2. ${answer2 || '...'}\n\n🚀`;
    }
    const encoded = encodeURIComponent(msg);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleAddIdea = (ideaText: string) => {
    if (!answer1) {
      setAnswer1(ideaText);
    } else if (!answer2) {
      setAnswer2(ideaText);
    }
  };

  // Helper to render text with highlighted keywords
  const renderHighlighted = (text: string, highlight?: string, colorClass = 'text-purple-300 bg-purple-500/20') => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span key={index} className={`font-black px-2 py-0.5 rounded-xl border border-purple-400/30 inline-block ${colorClass}`}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="relative flex h-full min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-br from-[#101236] via-[#171444] to-[#0a0a20] p-3.5 sm:p-5 lg:p-6 text-white shadow-2xl">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[320px] bg-indigo-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[320px] bg-fuchsia-600/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative z-10 shrink-0 mb-2 sm:mb-3">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-black tracking-tight leading-tight flex items-center gap-2">
          <span>🎬</span>
          <span>{slide.title?.includes('/') ? slide.title.split('/')[0].trim() : slide.title || 'Video Homework'}</span>
          <span className="text-white/40 mx-1.5 font-normal">/</span>
          <span className="text-purple-200">{slide.title?.includes('/') ? slide.title.split('/')[1].trim() : 'Tarea en Video'}</span>
          <span>🎬</span>
        </h1>
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-indigo-300/80 mt-0.5">
          {slide.description || 'Video'}
        </p>
      </div>

      {/* Main Content Grid (Left: 46%, Right: 54%) */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.02fr_1.18fr] gap-3.5 sm:gap-4.5 min-h-0 items-stretch">
        {/* LEFT COLUMN: Watch Card & Write Tasks */}
        <div className="flex flex-col justify-between gap-3 sm:gap-3.5 min-h-0">
          {/* Card 1: Watch Instruction */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/12 p-3.5 sm:p-4.5 backdrop-blur-md shadow-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </div>
              <p className="text-base sm:text-xl lg:text-[1.3rem] font-bold text-white leading-snug">
                {renderHighlighted(data.watchInstruction, data.watchHighlight, 'text-cyan-300 bg-cyan-500/25 border-cyan-300/40')}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/80">
              <Eye className="h-6 w-6" />
            </div>
          </div>

          {/* Card 2: Write Instruction & Answer Input Fields */}
          <div className="flex-1 rounded-2xl sm:rounded-3xl border border-white/20 bg-white/12 p-4 sm:p-5 backdrop-blur-md shadow-xl flex flex-col justify-between gap-3.5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md">
                <Pencil className="h-6 w-6 stroke-[2.5]" />
              </div>
              <p className="text-lg sm:text-xl lg:text-[1.35rem] font-black text-white leading-snug">
                {renderHighlighted(data.writeInstruction, data.writeHighlight, 'text-amber-300 bg-amber-500/30 border-amber-300/40')}
              </p>
            </div>

            {/* Interactive Answer Input Boxes */}
            <div className="flex flex-col gap-3 my-auto">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-white/25 bg-black/50 px-4 py-3 shadow-inner focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/40 transition-all">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-black text-white shadow-sm">
                  1
                </span>
                <input
                  type="text"
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                  placeholder={data.placeholder1}
                  className="w-full bg-transparent text-base sm:text-lg lg:text-xl font-bold text-white placeholder-white/40 outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-2xl border-2 border-white/25 bg-black/50 px-4 py-3 shadow-inner focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/40 transition-all">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-black text-white shadow-sm">
                  2
                </span>
                <input
                  type="text"
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                  placeholder={data.placeholder2}
                  className="w-full bg-transparent text-base sm:text-lg lg:text-xl font-bold text-white placeholder-white/40 outline-none"
                />
              </div>
            </div>

            {/* WhatsApp Share Button & Doodle prompt */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-black text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>{copied ? '¡Copiado! ✅' : 'Share via WhatsApp'}</span>
              </button>
              <span className="text-xs sm:text-sm font-bold text-purple-300 italic flex items-center gap-1 select-none">
                <span>Share your answers!</span>
                <span>✍️</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Video Player & Ideas Card */}
        <div className="flex flex-col justify-between gap-3 sm:gap-3.5 min-h-0">
          {/* Top Video Player */}
          <div className="relative flex-1 min-h-[230px] sm:min-h-[270px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-indigo-400/50 shadow-2xl bg-black">
            <iframe
              src={data.videoUrl}
              title={slide.title || 'Video Homework'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Card: Need ideas? */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/12 p-3.5 sm:p-4.5 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2.5 mb-1.5">
              <Lightbulb className="h-6 w-6 text-amber-300 fill-current" />
              <span className="text-base sm:text-lg font-black text-white">Need ideas?</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white/80 mb-2.5">
              Here are some examples from the video:
            </p>

            {/* 4 Interactive Model Ideas with large legible font */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {data.ideas.map((idea, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddIdea(`${idea.text} ${idea.emoji}`)}
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/15 px-3.5 py-2.5 text-sm sm:text-base font-black text-white shadow-md hover:bg-white/30 hover:border-cyan-300 hover:scale-105 active:scale-95 transition-all"
                  title="Click to insert into answer box"
                >
                  <span className="truncate">{idea.text}</span>
                  <span className="text-lg select-none">{idea.emoji}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-2.5 pt-2.5 flex items-center justify-between gap-3 border-t border-white/15">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-black/30 border border-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white/90">
          <span className="text-amber-300 font-black uppercase tracking-wider text-[11px] sm:text-xs">
            📝 NOTE FOR THE TEACHER:
          </span>
          <span>{teacherNote || 'Assign the task and check answers next class.'}</span>
        </div>
      </div>
    </div>
  );
}
