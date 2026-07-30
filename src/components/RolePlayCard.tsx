import { ArrowLeft, ArrowRight, Check, CheckCircle2, RotateCcw, Sparkles, UserRound, Users2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ClassSlide } from '../types';

interface RolePlayCardProps {
  slide: ClassSlide;
}

export function RolePlayCard({ slide }: RolePlayCardProps) {
  const roleplay = slide.roleplay;
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [stepIndex, setStepIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const steps = useMemo(() => roleplay?.steps || [], [roleplay]);

  if (!roleplay || steps.length === 0) return null;

  const currentStep = steps[Math.min(stepIndex, steps.length - 1)];
  const displayNameA = nameA.trim() || roleplay.players?.aNamePlaceholder || 'Player A';
  const displayNameB = nameB.trim() || roleplay.players?.bNamePlaceholder || 'Player B';
  const speakerName =
    currentStep.speaker === 'a' ? displayNameA :
    currentStep.speaker === 'b' ? displayNameB :
    `${displayNameA} + ${displayNameB}`;
  const speakerRole =
    currentStep.speaker === 'a' ? roleplay.roles.a.label :
    currentStep.speaker === 'b' ? roleplay.roles.b.label :
    'Together';

  const toggleCheck = (index: number) => {
    setCheckedItems((items) => {
      const next = [...items];
      next[index] = !next[index];
      return next;
    });
  };

  const reset = () => {
    setStepIndex(0);
    setCheckedItems([]);
  };

  const completedCount = checkedItems.filter(Boolean).length;
  const isLastStep = stepIndex === steps.length - 1;

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-2 overflow-hidden text-white sm:gap-3">
      <div className="grid shrink-0 gap-2 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-xl border border-white/15 bg-white/12 p-3 shadow-xl backdrop-blur-md sm:p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-100 sm:text-xs">
              <Users2 className="h-3.5 w-3.5" />
              Players
            </span>
            <span className="truncate rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white/80 sm:text-xs">
              {roleplay.scenario}
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="min-w-0 rounded-lg bg-black/15 p-2">
              <span className="mb-1 block truncate text-[10px] font-black uppercase tracking-[0.12em] text-sky-100">
                {roleplay.roles.a.label}
              </span>
              <input
                value={nameA}
                onChange={(event) => setNameA(event.target.value)}
                placeholder={roleplay.players?.aNamePlaceholder || 'Player A'}
                className="h-9 w-full rounded-md border border-white/15 bg-white px-2 text-sm font-black text-slate-900 outline-none placeholder:text-slate-400"
              />
            </label>
            <label className="min-w-0 rounded-lg bg-black/15 p-2">
              <span className="mb-1 block truncate text-[10px] font-black uppercase tracking-[0.12em] text-fuchsia-100">
                {roleplay.roles.b.label}
              </span>
              <input
                value={nameB}
                onChange={(event) => setNameB(event.target.value)}
                placeholder={roleplay.players?.bNamePlaceholder || 'Player B'}
                className="h-9 w-full rounded-md border border-white/15 bg-white px-2 text-sm font-black text-slate-900 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-white/15 bg-white/12 p-3 shadow-xl backdrop-blur-md sm:p-4">
          <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-amber-300/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-amber-100 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Mission
          </div>
          <p className="line-clamp-2 text-base font-black leading-tight sm:text-xl">
            {roleplay.situation}
          </p>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-2 lg:grid-cols-[1.35fr_0.9fr]">
        <div className="flex min-h-0 flex-col rounded-xl border border-white/15 bg-white/95 p-3 text-slate-950 shadow-xl sm:p-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-violet-700 sm:text-xs">
              Step {stepIndex + 1}/{steps.length}
            </span>
            <span className="truncate rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-600 sm:text-xs">
              {speakerName} · {speakerRole}
            </span>
          </div>

          <h2 className="text-xl font-black leading-tight sm:text-2xl">{currentStep.title}</h2>
          <p className="mt-1.5 text-base font-bold leading-snug text-slate-700 sm:text-lg">
            {currentStep.instruction}
          </p>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-100 p-2.5">
              <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Useful phrases</p>
              <div className="flex flex-wrap gap-1.5">
                {currentStep.phrases.slice(0, 3).map((phrase) => (
                  <span key={phrase} className="rounded-md bg-white px-2 py-1 text-xs font-black leading-tight text-slate-900 shadow-sm sm:text-sm">
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-slate-100 p-2.5">
              <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Words</p>
              <div className="flex flex-wrap gap-1.5">
                {currentStep.vocabulary.slice(0, 5).map((word) => (
                  <span key={word} className="rounded-md bg-indigo-600 px-2 py-1 text-xs font-black leading-tight text-white shadow-sm sm:text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 pt-3">
            <button
              onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
              disabled={stepIndex === 0}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-slate-200 px-3 text-sm font-black text-slate-700 disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              onClick={reset}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-slate-100 px-3 text-sm font-black text-slate-600"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              onClick={() => setStepIndex((index) => Math.min(steps.length - 1, index + 1))}
              disabled={isLastStep}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-violet-600 px-3 text-sm font-black text-white disabled:opacity-40"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-2">
          <div className="rounded-xl border border-white/15 bg-black/18 p-3 shadow-xl backdrop-blur-md sm:p-4">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-lime-300/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-lime-100 sm:text-xs">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Win check {completedCount}/{roleplay.successChecklist.length}
            </div>
            <div className="grid gap-1.5">
              {roleplay.successChecklist.map((item, index) => (
                <button
                  key={item}
                  onClick={() => toggleCheck(index)}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-black leading-tight transition sm:text-sm ${
                    checkedItems[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-white/10 text-white'
                  }`}
                >
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                    checkedItems[index] ? 'bg-emerald-950 text-white' : 'bg-white/15 text-white/70'
                  }`}>
                    {checkedItems[index] ? <Check className="h-3.5 w-3.5" /> : index + 1}
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-black/18 p-3 shadow-xl backdrop-blur-md sm:p-4">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-sky-300/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-sky-100 sm:text-xs">
              <UserRound className="h-3.5 w-3.5" />
              Role goals
            </div>
            <div className="grid gap-1.5">
              <p className="rounded-lg bg-white/10 px-2.5 py-2 text-xs font-bold leading-snug sm:text-sm">
                <span className="font-black text-sky-100">{displayNameA}:</span> {roleplay.roles.a.goal}
              </p>
              <p className="rounded-lg bg-white/10 px-2.5 py-2 text-xs font-bold leading-snug sm:text-sm">
                <span className="font-black text-fuchsia-100">{displayNameB}:</span> {roleplay.roles.b.goal}
              </p>
            </div>
          </div>

          {isLastStep && completedCount === roleplay.successChecklist.length && (
            <div className="rounded-xl bg-emerald-400 p-3 text-sm font-black leading-tight text-emerald-950 shadow-xl sm:text-base">
              {roleplay.victoryMessage || 'Conversation complete.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
