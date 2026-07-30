import { ArrowLeft, ArrowRight, Check, CheckCircle2, Flag, Play, RotateCcw, Sparkles, UserRound, Users2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect, useMemo, useState } from 'react';
import { ClassSlide } from '../types';

interface RolePlayCardProps {
  slide: ClassSlide;
}

type ViewKind = 'players' | 'mission' | 'step' | 'finish';

export function RolePlayCard({ slide }: RolePlayCardProps) {
  const roleplay = slide.roleplay;
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [viewIndex, setViewIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [celebrated, setCelebrated] = useState(false);

  const steps = useMemo(() => roleplay?.steps || [], [roleplay]);

  if (!roleplay || steps.length === 0) return null;

  const views: Array<{ kind: ViewKind; stepIndex?: number }> = [
    { kind: 'players' },
    { kind: 'mission' },
    ...steps.map((_, index) => ({ kind: 'step' as const, stepIndex: index })),
    { kind: 'finish' }
  ];
  const view = views[Math.min(viewIndex, views.length - 1)];
  const currentStep = view.kind === 'step' ? steps[view.stepIndex || 0] : null;
  const displayNameA = nameA.trim() || roleplay.players?.aNamePlaceholder || 'Player A';
  const displayNameB = nameB.trim() || roleplay.players?.bNamePlaceholder || 'Player B';
  const speakerName =
    currentStep?.speaker === 'a' ? displayNameA :
    currentStep?.speaker === 'b' ? displayNameB :
    currentStep?.speaker === 'both' ? `${displayNameA} + ${displayNameB}` :
    '';
  const speakerRole =
    currentStep?.speaker === 'a' ? roleplay.roles.a.label :
    currentStep?.speaker === 'b' ? roleplay.roles.b.label :
    currentStep?.speaker === 'both' ? 'Together' :
    '';
  const completedCount = checkedItems.filter(Boolean).length;
  const isComplete = completedCount === roleplay.successChecklist.length;

  const next = () => setViewIndex((index) => Math.min(views.length - 1, index + 1));
  const back = () => setViewIndex((index) => Math.max(0, index - 1));
  const reset = () => {
    setViewIndex(0);
    setCheckedItems([]);
    setCelebrated(false);
  };
  const toggleCheck = (index: number) => {
    setCheckedItems((items) => {
      const nextItems = [...items];
      nextItems[index] = !nextItems[index];
      return nextItems;
    });
  };

  useEffect(() => {
    if (view.kind !== 'finish' || !isComplete || celebrated) return;
    setCelebrated(true);
    confetti({
      particleCount: 130,
      spread: 78,
      origin: { y: 0.58 },
      colors: ['#10b981', '#8b5cf6', '#f59e0b', '#06b6d4', '#ffffff']
    });
  }, [celebrated, isComplete, view.kind]);

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden text-white">
      <div className="mb-2 flex shrink-0 items-center justify-between gap-2 sm:mb-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-100 sm:text-lg">
            <Users2 className="h-5 w-5 sm:h-6 sm:w-6" />
            Role Play Quest
          </div>
          <p className="mt-1 truncate text-lg font-black text-white/80 sm:text-2xl">{roleplay.scenario}</p>
        </div>
        <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-white/80 sm:text-lg">
          {viewIndex + 1}/{views.length}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-white/15 bg-white/95 p-5 text-slate-950 shadow-2xl sm:p-8 lg:p-10">
        {view.kind === 'players' && (
          <div className="flex h-full flex-col justify-center gap-8 sm:gap-10">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-violet-700 sm:text-lg">
                <UserRound className="h-5 w-5 sm:h-6 sm:w-6" />
                Choose roles
              </div>
              <h2 className="text-5xl font-black leading-none sm:text-7xl lg:text-8xl">Who is who?</h2>
              <p className="mt-4 text-2xl font-black leading-tight text-slate-600 sm:text-4xl">Add names, then start the conversation game.</p>
            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
              <label className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <span className="mb-2 block text-xl font-black uppercase tracking-[0.12em] text-sky-700 sm:text-2xl">{roleplay.roles.a.label}</span>
                <input
                  value={nameA}
                  onChange={(event) => setNameA(event.target.value)}
                  placeholder={roleplay.players?.aNamePlaceholder || 'Player A'}
                  className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-5 text-3xl font-black text-slate-950 outline-none placeholder:text-slate-400 sm:h-20 sm:text-4xl"
                />
                <p className="mt-3 text-xl font-black leading-tight text-slate-600 sm:text-2xl">{roleplay.roles.a.goal}</p>
              </label>
              <label className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <span className="mb-2 block text-xl font-black uppercase tracking-[0.12em] text-fuchsia-700 sm:text-2xl">{roleplay.roles.b.label}</span>
                <input
                  value={nameB}
                  onChange={(event) => setNameB(event.target.value)}
                  placeholder={roleplay.players?.bNamePlaceholder || 'Player B'}
                  className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-5 text-3xl font-black text-slate-950 outline-none placeholder:text-slate-400 sm:h-20 sm:text-4xl"
                />
                <p className="mt-3 text-xl font-black leading-tight text-slate-600 sm:text-2xl">{roleplay.roles.b.goal}</p>
              </label>
            </div>
          </div>
        )}

        {view.kind === 'mission' && (
          <div className="flex h-full flex-col items-center justify-center gap-8 text-center sm:gap-10">
            <div className="max-w-6xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-amber-100 px-5 py-2.5 text-base font-black uppercase tracking-[0.14em] text-amber-700 shadow-sm sm:text-xl">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                Mission
              </div>
              <h2 className="text-5xl font-black leading-none text-slate-950 sm:text-7xl lg:text-8xl">{roleplay.situation}</h2>
            </div>
            <div className="grid w-full max-w-7xl gap-5 sm:grid-cols-3">
              {roleplay.mission.slice(0, 3).map((mission, index) => (
                <div key={mission} className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 p-6 text-2xl font-black leading-tight text-slate-800 shadow-sm sm:min-h-[210px] sm:text-4xl">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-3xl font-black text-amber-950 sm:h-16 sm:w-16 sm:text-4xl">
                    {index + 1}
                  </span>
                  {mission}
                </div>
              ))}
            </div>
          </div>
        )}

        {view.kind === 'step' && currentStep && (
          <div className="flex h-full flex-col justify-center gap-6">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-violet-700 sm:text-lg">
                  Step {(view.stepIndex || 0) + 1}/{steps.length}
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-slate-600 sm:text-lg">
                  {speakerName} · {speakerRole}
                </span>
              </div>
              <h2 className="text-5xl font-black leading-tight sm:text-7xl lg:text-8xl">{currentStep.title}</h2>
              <p className="mt-4 text-4xl font-black leading-tight text-slate-700 sm:text-5xl lg:text-6xl">
                {currentStep.instruction}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="mb-3 text-lg font-black uppercase tracking-[0.14em] text-slate-500 sm:text-xl">Useful phrases</p>
                <div className="grid gap-3">
                  {currentStep.phrases.slice(0, 3).map((phrase) => (
                    <div key={phrase} className="rounded-2xl bg-white px-5 py-4 text-3xl font-black leading-tight text-slate-950 shadow-sm sm:text-4xl">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="mb-3 text-lg font-black uppercase tracking-[0.14em] text-slate-500 sm:text-xl">Words</p>
                <div className="flex flex-wrap gap-3">
                  {currentStep.vocabulary.slice(0, 5).map((word) => (
                    <span key={word} className="rounded-2xl bg-indigo-600 px-5 py-4 text-2xl font-black leading-tight text-white shadow-sm sm:text-4xl">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view.kind === 'finish' && (
          <div className="flex h-full flex-col justify-center gap-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-emerald-700 sm:text-lg">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                Finish
              </div>
              <h2 className="text-5xl font-black leading-tight sm:text-7xl lg:text-8xl">Win checklist</h2>
            </div>
            {isComplete && (
              <div className="rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-300 to-violet-400 p-1 shadow-2xl shadow-emerald-900/20">
                <div className="rounded-[1.35rem] bg-white px-6 py-5 text-center">
                  <p className="text-4xl font-black leading-tight text-slate-950 sm:text-6xl">Great job!</p>
                  <p className="mt-2 text-2xl font-black text-slate-600 sm:text-3xl">Role play complete.</p>
                </div>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              {roleplay.successChecklist.map((item, index) => (
                <button
                  key={item}
                  onClick={() => toggleCheck(index)}
                  className={`flex min-h-[110px] items-center gap-4 rounded-3xl px-6 py-5 text-left text-3xl font-black leading-tight transition sm:text-4xl ${
                    checkedItems[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    checkedItems[index] ? 'bg-emerald-950 text-white' : 'bg-white text-slate-600'
                  }`}>
                    {checkedItems[index] ? <Check className="h-8 w-8" /> : index + 1}
                  </span>
                  {item}
                </button>
              ))}
            </div>
            <p className="rounded-3xl bg-slate-950 px-6 py-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              {isComplete ? roleplay.victoryMessage || 'Conversation complete.' : 'Complete the checks, then switch roles.'}
            </p>
          </div>
        )}

        <div className="mt-auto flex shrink-0 items-center justify-between gap-3 pt-5">
          <button
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex h-16 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-2xl font-black text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-7 w-7" />
            Back
          </button>
          <button
            onClick={reset}
            className="inline-flex h-16 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 text-2xl font-black text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
          >
            <RotateCcw className="h-7 w-7" />
            Reset
          </button>
          <button
            onClick={next}
            disabled={viewIndex === views.length - 1}
            className="inline-flex h-16 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 text-2xl font-black text-white shadow-lg shadow-indigo-900/20 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {view.kind === 'players' ? <Play className="h-7 w-7" /> : view.kind === 'finish' ? <Flag className="h-7 w-7" /> : <ArrowRight className="h-7 w-7" />}
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
