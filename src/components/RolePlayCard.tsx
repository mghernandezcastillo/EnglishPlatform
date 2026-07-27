import { CheckCircle2, MessageSquareQuote, Target, UserRound, Users2 } from 'lucide-react';
import { ClassSlide } from '../types';

interface RolePlayCardProps {
  slide: ClassSlide;
}

export function RolePlayCard({ slide }: RolePlayCardProps) {
  const roleplay = slide.roleplay;

  if (!roleplay) return null;

  return (
    <div className="flex h-full w-full flex-col gap-5 lg:gap-6">
      <div className="rounded-[1.6rem] border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 sm:text-sm">
            <Users2 className="h-4 w-4" />
            Role play
          </div>
          <div className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white/80 sm:text-sm">
            {roleplay.scenario}
          </div>
        </div>

        <p className="text-2xl font-black leading-snug text-white sm:text-3xl lg:text-4xl">
          {roleplay.situation}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 shadow-xl sm:p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-sky-100 sm:text-sm">
            <UserRound className="h-4 w-4" />
            Person A
          </div>
          <p className="text-2xl font-black text-white sm:text-3xl">{roleplay.roles.a.label}</p>
          <p className="mt-3 text-base font-bold leading-relaxed text-white/80 sm:text-xl">{roleplay.roles.a.goal}</p>
        </div>

        <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 shadow-xl sm:p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-400/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100 sm:text-sm">
            <UserRound className="h-4 w-4" />
            Person B
          </div>
          <p className="text-2xl font-black text-white sm:text-3xl">{roleplay.roles.b.label}</p>
          <p className="mt-3 text-base font-bold leading-relaxed text-white/80 sm:text-xl">{roleplay.roles.b.goal}</p>
        </div>
      </div>

      <div className="grid flex-1 gap-5 xl:grid-cols-[0.95fr_1.15fr]">
        <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 shadow-xl sm:p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-300/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-amber-100 sm:text-sm">
            <Target className="h-4 w-4" />
            Mission
          </div>
          <div className="grid gap-3">
            {roleplay.mission.map((step, index) => (
              <div key={`${step}-${index}`} className="rounded-xl bg-black/15 px-4 py-3 text-base font-bold leading-relaxed text-white sm:text-xl">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 shadow-xl sm:p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-300/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-100 sm:text-sm">
              <MessageSquareQuote className="h-4 w-4" />
              Useful language
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {roleplay.usefulPhrases.map((phrase) => (
                <div key={phrase} className="rounded-2xl bg-white px-4 py-3 text-base font-black leading-tight text-slate-900 shadow-lg sm:text-lg">
                  {phrase}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 shadow-xl sm:p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-300/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-lime-100 sm:text-sm">
              <CheckCircle2 className="h-4 w-4" />
              Success check
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {roleplay.successChecklist.map((item) => (
                <div key={item} className="rounded-xl bg-black/15 px-4 py-3 text-base font-bold leading-relaxed text-white sm:text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
