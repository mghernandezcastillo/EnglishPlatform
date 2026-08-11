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

type ViewKind = 'players' | 'mission' | 'conversation' | 'finish';

export function GuidedRolePlayCard({ slide }: GuidedRolePlayCardProps) {
  const roleplay = slide.roleplay!;
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [viewIndex, setViewIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [celebrated, setCelebrated] = useState(false);
  const steps = useMemo(() => roleplay.steps || [], [roleplay]);

  const views: Array<{ kind: ViewKind }> = [
    { kind: 'players' },
    { kind: 'mission' },
    { kind: 'conversation' },
    { kind: 'finish' }
  ];
  const view = views[Math.min(viewIndex, views.length - 1)];
  const displayNameA = nameA.trim() || roleplay.players?.aNamePlaceholder || 'Player A';
  const displayNameB = nameB.trim() || roleplay.players?.bNamePlaceholder || 'Player B';
  const isComplete = checkedItems.filter(Boolean).length === roleplay.successChecklist.length;
  const progress = ((viewIndex + 1) / views.length) * 100;

  const playerNameFor = (speaker: 'a' | 'b' | 'both') => {
    if (speaker === 'a') return displayNameA;
    if (speaker === 'b') return displayNameB;
    return `${displayNameA} + ${displayNameB}`;
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
    view.kind === 'mission' ? 'Show the full dialogue' :
    'We finished the conversation';

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

            <div className="grid gap-3 sm:grid-cols-3">
              {roleplay.mission.slice(0, 3).map((mission, index) => (
                <div key={mission} className="rounded-3xl border-4 border-amber-200 bg-amber-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-xl font-black text-amber-950">
                    {index + 1}
                  </div>
                  <p className="text-2xl font-black leading-tight text-amber-950 sm:text-3xl">{mission}</p>
                </div>
              ))}
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

        {view.kind === 'conversation' && (
          <div className="flex flex-1 flex-col gap-3">
            <div className="text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-violet-700 sm:text-lg">
                <MessageSquareText className="h-5 w-5" />
                Conversation time
              </div>
              <h2 className="text-3xl font-black leading-none sm:text-4xl lg:text-5xl">Read from 1 to 5 — no clicks between turns</h2>
              <p className="mt-2 text-lg font-bold text-slate-600 sm:text-2xl">Choose a yellow option and say the complete line aloud.</p>
            </div>

            <div className="grid gap-2.5">
              {steps.map((step, index) => {
                const isPlayerA = step.speaker === 'a';
                const colorClasses = isPlayerA
                  ? 'border-sky-200 bg-sky-50 text-sky-950'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-950';
                const numberClasses = isPlayerA ? 'bg-sky-600' : 'bg-emerald-600';

                return (
                  <div
                    key={step.id}
                    className={`w-[96%] rounded-2xl border-4 px-3 py-2.5 sm:w-[88%] sm:px-4 ${isPlayerA ? 'mr-auto' : 'ml-auto'} ${colorClasses}`}
                  >
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                      <div className="flex min-w-0 items-center gap-3 lg:w-[44%]">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl font-black text-white ${numberClasses}`}>
                          {index + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-black uppercase tracking-[0.1em] sm:text-lg">
                            {playerNameFor(step.speaker)} · {step.title}
                          </p>
                          <p className="text-xl font-black leading-tight sm:text-2xl">{step.phrases[0]}</p>
                          <p className="mt-0.5 text-sm font-bold leading-tight opacity-70 sm:text-base">{step.instruction}</p>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-wrap items-center gap-2 lg:justify-end">
                        <span className="text-xs font-black uppercase tracking-[0.1em] text-amber-700 sm:text-base">
                          {step.support?.label || step.phrasePrompt}
                        </span>
                        {step.support?.items?.map((item) => (
                          <span key={item} className="rounded-xl bg-amber-300 px-3 py-2 text-lg font-black leading-none text-amber-950 shadow-sm sm:text-2xl">
                            {item}
                          </span>
                        ))}
                        {(!step.support?.items || step.support.items.length === 0) && (
                          <span className="rounded-xl bg-amber-300 px-3 py-2 text-lg font-black leading-none text-amber-950 sm:text-2xl">your real time</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
