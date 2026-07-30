import { ArrowLeft, ArrowRight, Check, CheckCircle2, Flag, Play, RotateCcw, Sparkles, UserRound, Users2 } from 'lucide-react';
import { useMemo, useState } from 'react';
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

  const next = () => setViewIndex((index) => Math.min(views.length - 1, index + 1));
  const back = () => setViewIndex((index) => Math.max(0, index - 1));
  const reset = () => {
    setViewIndex(0);
    setCheckedItems([]);
  };
  const toggleCheck = (index: number) => {
    setCheckedItems((items) => {
      const nextItems = [...items];
      nextItems[index] = !nextItems[index];
      return nextItems;
    });
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden text-white">
      <div className="mb-2 flex shrink-0 items-center justify-between gap-2 sm:mb-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-100 sm:text-sm">
            <Users2 className="h-4 w-4" />
            Role Play Quest
          </div>
          <p className="mt-1 truncate text-sm font-bold text-white/70 sm:text-base">{roleplay.scenario}</p>
        </div>
        <div className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white/80 sm:text-sm">
          {viewIndex + 1}/{views.length}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-white/15 bg-white/95 p-4 text-slate-950 shadow-2xl sm:p-6 lg:p-8">
        {view.kind === 'players' && (
          <div className="flex h-full flex-col justify-center gap-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-violet-700 sm:text-sm">
                <UserRound className="h-4 w-4" />
                Choose roles
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Who is who?</h2>
              <p className="mt-2 text-lg font-bold text-slate-600 sm:text-2xl">Add names, then start the conversation game.</p>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <label className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-sky-700 sm:text-base">{roleplay.roles.a.label}</span>
                <input
                  value={nameA}
                  onChange={(event) => setNameA(event.target.value)}
                  placeholder={roleplay.players?.aNamePlaceholder || 'Player A'}
                  className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-2xl font-black text-slate-950 outline-none placeholder:text-slate-400"
                />
                <p className="mt-2 text-base font-bold leading-snug text-slate-600 sm:text-lg">{roleplay.roles.a.goal}</p>
              </label>
              <label className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-fuchsia-700 sm:text-base">{roleplay.roles.b.label}</span>
                <input
                  value={nameB}
                  onChange={(event) => setNameB(event.target.value)}
                  placeholder={roleplay.players?.bNamePlaceholder || 'Player B'}
                  className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-2xl font-black text-slate-950 outline-none placeholder:text-slate-400"
                />
                <p className="mt-2 text-base font-bold leading-snug text-slate-600 sm:text-lg">{roleplay.roles.b.goal}</p>
              </label>
            </div>
          </div>
        )}

        {view.kind === 'mission' && (
          <div className="flex h-full flex-col justify-center gap-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-amber-700 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Mission
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">{roleplay.situation}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {roleplay.mission.slice(0, 3).map((mission, index) => (
                <div key={mission} className="rounded-2xl bg-slate-100 p-4 text-xl font-black leading-tight text-slate-800 sm:text-2xl">
                  {index + 1}. {mission}
                </div>
              ))}
            </div>
          </div>
        )}

        {view.kind === 'step' && currentStep && (
          <div className="flex h-full flex-col justify-center gap-5">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-violet-700 sm:text-sm">
                  Step {(view.stepIndex || 0) + 1}/{steps.length}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-600 sm:text-sm">
                  {speakerName} · {speakerRole}
                </span>
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">{currentStep.title}</h2>
              <p className="mt-3 text-2xl font-black leading-tight text-slate-700 sm:text-4xl lg:text-5xl">
                {currentStep.instruction}
              </p>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500 sm:text-base">Useful phrases</p>
                <div className="grid gap-2">
                  {currentStep.phrases.slice(0, 3).map((phrase) => (
                    <div key={phrase} className="rounded-xl bg-white px-4 py-3 text-xl font-black leading-tight text-slate-950 shadow-sm sm:text-2xl">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500 sm:text-base">Words</p>
                <div className="flex flex-wrap gap-2">
                  {currentStep.vocabulary.slice(0, 5).map((word) => (
                    <span key={word} className="rounded-xl bg-indigo-600 px-4 py-3 text-lg font-black leading-tight text-white shadow-sm sm:text-2xl">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view.kind === 'finish' && (
          <div className="flex h-full flex-col justify-center gap-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-700 sm:text-sm">
                <CheckCircle2 className="h-4 w-4" />
                Finish
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Win checklist</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {roleplay.successChecklist.map((item, index) => (
                <button
                  key={item}
                  onClick={() => toggleCheck(index)}
                  className={`flex min-h-[72px] items-center gap-3 rounded-2xl px-4 py-3 text-left text-xl font-black leading-tight transition sm:text-2xl ${
                    checkedItems[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    checkedItems[index] ? 'bg-emerald-950 text-white' : 'bg-white text-slate-600'
                  }`}>
                    {checkedItems[index] ? <Check className="h-5 w-5" /> : index + 1}
                  </span>
                  {item}
                </button>
              ))}
            </div>
            <p className="rounded-2xl bg-slate-950 px-5 py-4 text-2xl font-black leading-tight text-white sm:text-4xl">
              {completedCount === roleplay.successChecklist.length ? roleplay.victoryMessage || 'Conversation complete.' : 'Complete the checks, then switch roles.'}
            </p>
          </div>
        )}

        <div className="mt-auto flex shrink-0 items-center justify-between gap-2 pt-4">
          <button
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-200 px-4 text-base font-black text-slate-700 disabled:opacity-40 sm:h-14 sm:text-xl"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <button
            onClick={reset}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-4 text-base font-black text-slate-600 sm:h-14 sm:text-xl"
          >
            <RotateCcw className="h-5 w-5" />
            Reset
          </button>
          <button
            onClick={next}
            disabled={viewIndex === views.length - 1}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-4 text-base font-black text-white disabled:opacity-40 sm:h-14 sm:text-xl"
          >
            {view.kind === 'players' ? <Play className="h-5 w-5" /> : view.kind === 'finish' ? <Flag className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
