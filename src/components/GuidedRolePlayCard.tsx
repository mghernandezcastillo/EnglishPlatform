import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircleQuestion,
  MessageSquareText,
  RefreshCcw,
  Sparkles,
  UserRound,
  Users2
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ClassSlide } from '../types';

interface GuidedRolePlayCardProps {
  slide: ClassSlide;
}

type ViewKind = 'players' | 'mission' | 'step' | 'finish';

export function GuidedRolePlayCard({ slide }: GuidedRolePlayCardProps) {
  const roleplay = slide.roleplay!;
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [viewIndex, setViewIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [celebrated, setCelebrated] = useState(false);
  const steps = useMemo(() => roleplay.steps || [], [roleplay]);

  const views: Array<{ kind: ViewKind; stepIndex?: number }> = [
    { kind: 'players' },
    { kind: 'mission' },
    ...steps.map((_, index) => ({ kind: 'step' as const, stepIndex: index })),
    { kind: 'finish' }
  ];
  const view = views[Math.min(viewIndex, views.length - 1)];
  const currentStep = view.kind === 'step' ? steps[view.stepIndex || 0] : null;
  const nextStep = view.kind === 'step' ? steps[(view.stepIndex || 0) + 1] : null;
  const displayNameA = nameA.trim() || roleplay.players?.aNamePlaceholder || 'Player A';
  const displayNameB = nameB.trim() || roleplay.players?.bNamePlaceholder || 'Player B';
  const isComplete = checkedItems.filter(Boolean).length === roleplay.successChecklist.length;
  const progress = ((viewIndex + 1) / views.length) * 100;

  const playerNameFor = (speaker: 'a' | 'b' | 'both') => {
    if (speaker === 'a') return displayNameA;
    if (speaker === 'b') return displayNameB;
    return `${displayNameA} + ${displayNameB}`;
  };

  const roleLabelFor = (speaker: 'a' | 'b' | 'both') => {
    if (speaker === 'a') return roleplay.roles.a.label;
    if (speaker === 'b') return roleplay.roles.b.label;
    return 'Together';
  };

  const next = () => setViewIndex((index) => Math.min(views.length - 1, index + 1));
  const back = () => setViewIndex((index) => Math.max(0, index - 1));
  const reset = () => {
    setViewIndex(0);
    setCheckedItems([]);
    setCelebrated(false);
  };
  const switchRoles = () => {
    setNameA(displayNameB);
    setNameB(displayNameA);
    setCheckedItems([]);
    setCelebrated(false);
    setViewIndex(2);
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
      colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ffffff']
    });
  }, [celebrated, isComplete, view.kind]);

  const nextLabel =
    view.kind === 'players' ? 'See the mission' :
    view.kind === 'mission' ? 'Start the conversation' :
    nextStep ? `Next: ${playerNameFor(nextStep.speaker)}` :
    'Check the mission';

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden text-white">
      <div className="mb-2 flex shrink-0 items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex min-w-0 items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-cyan-100 sm:px-4 sm:py-2 sm:text-base">
              <Users2 className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              <span className="truncate">Role Play · {roleplay.scenario}</span>
            </div>
            <span className="shrink-0 text-sm font-black sm:text-lg">{viewIndex + 1}/{views.length}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/20">
            <div className="h-full rounded-full bg-cyan-300 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-white/15 px-3 text-sm font-black transition hover:bg-white/25 sm:h-12 sm:px-4 sm:text-base"
        >
          <RefreshCcw className="h-5 w-5" />
          <span className="hidden sm:inline">Start over</span>
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto rounded-2xl border border-white/15 bg-white/95 p-4 text-slate-950 shadow-2xl sm:p-6 lg:p-8">
        {view.kind === 'players' && (
          <div className="flex flex-1 flex-col justify-center gap-5 sm:gap-7">
            <div className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-violet-700 sm:text-lg">
                <UserRound className="h-5 w-5" />
                Step 1 · Add names
              </div>
              <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">Who asks? Who answers?</h2>
              <p className="mx-auto mt-3 max-w-5xl text-xl font-bold leading-tight text-slate-600 sm:text-3xl">
                {roleplay.setupInstruction}
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
              <label className="rounded-3xl border-4 border-sky-200 bg-sky-50 p-4 sm:p-5">
                <span className="mb-2 flex items-center gap-2 text-lg font-black uppercase tracking-[0.1em] text-sky-700 sm:text-2xl">
                  <MessageCircleQuestion className="h-7 w-7" />
                  Player A · {roleplay.roles.a.label}
                </span>
                <input
                  value={nameA}
                  onChange={(event) => setNameA(event.target.value)}
                  placeholder={roleplay.players?.aNamePlaceholder || 'Player A'}
                  aria-label="Player A name"
                  className="h-16 w-full rounded-2xl border-2 border-sky-200 bg-white px-5 text-3xl font-black text-slate-950 outline-none placeholder:text-slate-400 focus:border-sky-500 sm:h-20 sm:text-4xl"
                />
                <p className="mt-3 text-xl font-black leading-tight text-sky-950 sm:text-3xl">ASKS: {roleplay.roles.a.goal}</p>
              </label>

              <label className="rounded-3xl border-4 border-emerald-200 bg-emerald-50 p-4 sm:p-5">
                <span className="mb-2 flex items-center gap-2 text-lg font-black uppercase tracking-[0.1em] text-emerald-700 sm:text-2xl">
                  <MessageSquareText className="h-7 w-7" />
                  Player B · {roleplay.roles.b.label}
                </span>
                <input
                  value={nameB}
                  onChange={(event) => setNameB(event.target.value)}
                  placeholder={roleplay.players?.bNamePlaceholder || 'Player B'}
                  aria-label="Player B name"
                  className="h-16 w-full rounded-2xl border-2 border-emerald-200 bg-white px-5 text-3xl font-black text-slate-950 outline-none placeholder:text-slate-400 focus:border-emerald-500 sm:h-20 sm:text-4xl"
                />
                <p className="mt-3 text-xl font-black leading-tight text-emerald-950 sm:text-3xl">ANSWERS: {roleplay.roles.b.goal}</p>
              </label>
            </div>
          </div>
        )}

        {view.kind === 'mission' && (
          <div className="flex flex-1 flex-col justify-center gap-5 sm:gap-6">
            <div className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-amber-700 sm:text-lg">
                <Sparkles className="h-5 w-5" />
                Your goal
              </div>
              <h2 className="mx-auto max-w-6xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {roleplay.conversationGoal || roleplay.situation}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => {
                const isPlayerA = step.speaker === 'a';
                return (
                  <div key={step.id} className={`rounded-3xl border-4 p-4 ${isPlayerA ? 'border-sky-200 bg-sky-50' : 'border-emerald-200 bg-emerald-50'}`}>
                    <div className={`mb-2 inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-xl font-black text-white ${isPlayerA ? 'bg-sky-600' : 'bg-emerald-600'}`}>
                      {index + 1}
                    </div>
                    <p className={`text-base font-black uppercase tracking-[0.08em] ${isPlayerA ? 'text-sky-700' : 'text-emerald-700'}`}>
                      {playerNameFor(step.speaker)}
                    </p>
                    <p className="mt-1 text-xl font-black leading-tight sm:text-2xl">{step.title}</p>
                  </div>
                );
              })}
            </div>

            {roleplay.modelDialogue && (
              <div className="mx-auto grid w-full max-w-6xl gap-2 rounded-3xl bg-slate-950 p-4 text-white sm:grid-cols-2 sm:p-5">
                <p className="rounded-2xl bg-sky-600 px-4 py-3 text-xl font-black sm:text-3xl">
                  {displayNameA}: {roleplay.modelDialogue.a}
                </p>
                <p className="rounded-2xl bg-emerald-600 px-4 py-3 text-xl font-black sm:text-3xl">
                  {displayNameB}: {roleplay.modelDialogue.b}
                </p>
              </div>
            )}
          </div>
        )}

        {view.kind === 'step' && currentStep && (
          <div className="flex flex-1 flex-col justify-center gap-4 sm:gap-5">
            <div>
              <div className={`mb-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em] sm:text-lg ${currentStep.kind === 'ask' ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'}`}>
                Turn {(view.stepIndex || 0) + 1} · {playerNameFor(currentStep.speaker)} · {roleLabelFor(currentStep.speaker)}
              </div>
              <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">{currentStep.title}</h2>
              <p className="mt-3 text-2xl font-black leading-tight text-slate-700 sm:text-4xl">{currentStep.instruction}</p>
            </div>

            <div className={`rounded-3xl border-4 p-4 sm:p-5 ${currentStep.kind === 'ask' ? 'border-sky-200 bg-sky-50' : 'border-emerald-200 bg-emerald-50'}`}>
              <p className={`mb-3 text-base font-black uppercase tracking-[0.12em] sm:text-xl ${currentStep.kind === 'ask' ? 'text-sky-700' : 'text-emerald-700'}`}>
                {currentStep.phrasePrompt || 'Choose one line'}
              </p>
              <div className="grid gap-3 lg:grid-cols-3">
                {currentStep.phrases.slice(0, 3).map((phrase, index) => (
                  <div key={phrase} className="flex min-h-[88px] items-center gap-3 rounded-2xl bg-white px-4 py-3 text-2xl font-black leading-tight text-slate-950 shadow-sm sm:text-3xl">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl font-black text-white ${currentStep.kind === 'ask' ? 'bg-sky-600' : 'bg-emerald-600'}`}>
                      {index + 1}
                    </span>
                    {phrase}
                  </div>
                ))}
              </div>
            </div>

            {currentStep.support && (
              <div className="flex flex-col gap-3 rounded-3xl bg-amber-100 px-5 py-4 text-amber-950 sm:flex-row sm:items-center">
                <div className="sm:min-w-[240px]">
                  <p className="text-base font-black uppercase tracking-[0.12em] text-amber-700 sm:text-xl">{currentStep.support.label}</p>
                  {currentStep.support.instruction && (
                    <p className="mt-1 text-xl font-black leading-tight sm:text-2xl">{currentStep.support.instruction}</p>
                  )}
                </div>
                {currentStep.support.items && currentStep.support.items.length > 0 && (
                  <div className="flex flex-1 flex-wrap gap-2 sm:justify-end">
                    {currentStep.support.items.map((item) => (
                      <span key={item} className="rounded-2xl bg-amber-400 px-4 py-3 text-2xl font-black text-amber-950 shadow-sm sm:text-3xl">{item}</span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {nextStep && (
              <div className="flex items-center gap-3 rounded-2xl border-2 border-violet-200 bg-violet-50 px-4 py-3 text-violet-950">
                <ArrowRight className="h-6 w-6 shrink-0 text-violet-600" />
                <p className="text-lg font-black leading-tight sm:text-2xl">
                  Up next: {playerNameFor(nextStep.speaker)} — {nextStep.title.toLowerCase()}
                </p>
                <p className="ml-auto hidden max-w-[46%] truncate text-lg font-bold text-violet-700 lg:block">“{nextStep.phrases[0]}”</p>
              </div>
            )}
          </div>
        )}

        {view.kind === 'finish' && (
          <div className="flex flex-1 flex-col justify-center gap-5">
            <div className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-700 sm:text-lg">
                <CheckCircle2 className="h-5 w-5" />
                Final check
              </div>
              <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">Did you complete the interview?</h2>
              <p className="mt-3 text-xl font-bold text-slate-600 sm:text-3xl">Tap each box you completed.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {roleplay.successChecklist.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleCheck(index)}
                  className={`flex min-h-[88px] items-center gap-4 rounded-3xl px-5 py-4 text-left text-2xl font-black leading-tight transition sm:text-3xl ${checkedItems[index] ? 'bg-emerald-400 text-emerald-950' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${checkedItems[index] ? 'bg-emerald-950 text-white' : 'bg-white text-slate-500'}`}>
                    {checkedItems[index] ? <Check className="h-7 w-7" /> : index + 1}
                  </span>
                  {item}
                </button>
              ))}
            </div>

            <div className={`rounded-3xl px-5 py-4 text-center ${isComplete ? 'bg-emerald-950 text-white' : 'bg-slate-950 text-white'}`}>
              <p className="text-2xl font-black leading-tight sm:text-4xl">
                {isComplete ? roleplay.victoryMessage || 'Conversation complete!' : 'Complete the four checks.'}
              </p>
              {isComplete && (
                <button
                  type="button"
                  onClick={switchRoles}
                  className="mt-4 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-amber-400 px-6 py-3 text-xl font-black text-amber-950 shadow-lg transition hover:bg-amber-300 sm:text-3xl"
                >
                  <RefreshCcw className="h-7 w-7" />
                  Switch roles & play again
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto flex shrink-0 items-center justify-between gap-3 pt-4">
          <button
            type="button"
            onClick={back}
            disabled={viewIndex === 0}
            className="inline-flex min-h-14 items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4 text-xl font-black text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30 sm:px-6 sm:text-2xl"
          >
            <ArrowLeft className="h-6 w-6" />
            Back
          </button>

          {view.kind !== 'finish' && (
            <button
              type="button"
              onClick={next}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 text-lg font-black text-white shadow-lg shadow-indigo-900/20 transition hover:from-violet-500 hover:to-indigo-500 sm:px-7 sm:text-2xl"
            >
              {nextLabel}
              <ArrowRight className="h-6 w-6 shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
