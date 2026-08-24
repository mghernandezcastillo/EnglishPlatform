import { useEffect, useMemo, useState } from 'react';
import type { DragEvent as ReactDragEvent } from 'react';
import { CheckCircle2, RefreshCw, Sparkles, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ClassSlide } from '../types';

interface StructureDragExerciseProps {
  slide: ClassSlide;
}

type DragToken = NonNullable<ClassSlide['structureDrag']>['tokens'][number];

function shuffleTokens(tokens: DragToken[]) {
  const copy = [...tokens];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function StructureDragExercise({ slide }: StructureDragExerciseProps) {
  const config = slide.structureDrag;
  const [pool, setPool] = useState<DragToken[]>(() => shuffleTokens(config?.tokens || []));
  const [placed, setPlaced] = useState<Record<string, DragToken | null>>({});
  const [activeTokenId, setActiveTokenId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setPool(shuffleTokens(config?.tokens || []));
    setPlaced(Object.fromEntries((config?.slots || []).map((slot) => [slot.id, null])));
    setActiveTokenId(null);
    setChecked(false);
  }, [config]);

  const activeToken = useMemo(
    () => pool.find((token) => token.id === activeTokenId) || Object.values(placed).find((token) => token?.id === activeTokenId) || null,
    [activeTokenId, placed, pool]
  );

  if (!config) return null;

  const returnTokenToPool = (token: DragToken) => {
    setPool((current) => shuffleTokens([...current, token]));
    setPlaced((current) => {
      const updated = { ...current };
      Object.keys(updated).forEach((slotId) => {
        if (updated[slotId]?.id === token.id) updated[slotId] = null;
      });
      return updated;
    });
  };

  const placeToken = (slotId: string, token: DragToken) => {
    setPlaced((current) => {
      const updated = { ...current };
      const existing = updated[slotId];

      Object.keys(updated).forEach((key) => {
        if (updated[key]?.id === token.id) updated[key] = null;
      });

      updated[slotId] = token;

      setPool((currentPool) => {
        const nextPool = currentPool.filter((item) => item.id !== token.id);
        return existing ? shuffleTokens([...nextPool, existing]) : nextPool;
      });

      return updated;
    });
    setActiveTokenId(null);
    setChecked(false);
  };

  const handleDrop = (slotId: string, tokenId: string) => {
    const token = pool.find((item) => item.id === tokenId) || Object.values(placed).find((item) => item?.id === tokenId);
    if (!token) return;
    placeToken(slotId, token);
  };

  const reset = () => {
    setPool(shuffleTokens(config.tokens));
    setPlaced(Object.fromEntries(config.slots.map((slot) => [slot.id, null])));
    setActiveTokenId(null);
    setChecked(false);
  };

  const allFilled = config.slots.every((slot) => placed[slot.id]);
  const allCorrect = config.slots.every((slot) => placed[slot.id]?.text === slot.text);

  const checkAnswer = () => {
    if (!allFilled) return;
    setChecked(true);
    if (allCorrect) {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.65 } });
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-black/20 p-4 shadow-xl sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-cyan-100">
            <Sparkles className="h-4 w-4" />
            {config.patternName}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {checked && allCorrect && config.learningOpportunity && (
              <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-100">
                Estructura: {config.learningOpportunity}
              </span>
            )}
            {config.difficulty && (
              <span className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-100">
                Dificultad: {config.difficulty}
              </span>
            )}
          </div>
          <p className="mt-3 text-base font-bold text-white/90 sm:text-lg">{config.instructions}</p>
          {checked && allCorrect ? (
            <div className="mt-2.5 inline-flex items-center gap-2.5 rounded-xl bg-emerald-400/20 border border-emerald-400/40 px-3.5 py-2 text-lg font-black text-emerald-200 sm:text-2xl shadow-md">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
              <span>{config.prompt}</span>
            </div>
          ) : (
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/55">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Arrastra y ordena las piezas en los espacios para formar la estructura correcta</span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white hover:bg-white/20 transition"
        >
          <RefreshCw className="h-4 w-4" />
          Reiniciar
        </button>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-3">
          {config.slots.map((slot, index) => {
            const token = placed[slot.id];
            const isCorrect = checked && token?.text === slot.text;
            const isWrong = checked && token && token.text !== slot.text;

            return (
              <div
                key={slot.id}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const tokenId = event.dataTransfer.getData('text/plain');
                  if (tokenId) handleDrop(slot.id, tokenId);
                }}
                onClick={() => {
                  if (activeToken) placeToken(slot.id, activeToken);
                }}
                className={`rounded-2xl border-2 border-dashed p-4 transition sm:p-5 ${
                  isCorrect
                    ? 'border-emerald-300 bg-emerald-300/20'
                    : isWrong
                      ? 'border-rose-300 bg-rose-300/15'
                      : 'border-white/20 bg-white/5'
                }`}
              >
                <div className="mb-2 text-xs font-black uppercase tracking-widest text-white/60">
                  Paso {index + 1}: {slot.label}
                </div>
                {token ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      returnTokenToPool(token);
                    }}
                    className={`${token.color} flex min-h-[72px] w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-slate-950 shadow-lg`}
                  >
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest opacity-60">{token.label}</div>
                      <div className="text-lg font-black leading-tight sm:text-xl">{token.text}</div>
                    </div>
                    {isCorrect && <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-700" />}
                  </button>
                ) : (
                  <div className="flex min-h-[72px] items-center justify-center rounded-2xl bg-black/20 px-4 text-center text-sm font-bold text-white/45 sm:text-base">
                    Arrastra o toca una pieza
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 text-xs font-black uppercase tracking-widest text-white/60">Piezas de estructura</div>
          <div className="grid gap-3">
            {pool.map((token) => {
              const selected = activeTokenId === token.id;
              return (
                <button
                  key={token.id}
                  type="button"
                  draggable
                  onDragStart={(event: ReactDragEvent<HTMLButtonElement>) => {
                    event.dataTransfer.setData('text/plain', token.id);
                    setActiveTokenId(token.id);
                  }}
                  onDragEnd={() => setActiveTokenId(null)}
                  onClick={() => setActiveTokenId((current) => current === token.id ? null : token.id)}
                  className={`${token.color} rounded-2xl border-2 px-4 py-3 text-left text-slate-950 shadow-lg transition ${
                    selected ? 'border-slate-950/60 ring-2 ring-white/70 scale-[0.98]' : 'border-transparent hover:scale-[0.99]'
                  }`}
                >
                  <div className="text-xs font-black uppercase tracking-widest opacity-60">{token.label}</div>
                  <div className="text-lg font-black leading-tight sm:text-xl">{token.text}</div>
                </button>
              );
            })}
            {!pool.length && (
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-6 text-center text-sm font-bold text-white/55">
                Todas las piezas están colocadas.
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={!allFilled}
              onClick={checkAnswer}
              className="rounded-xl bg-white px-4 py-3 font-black text-slate-950 shadow-md transition hover:bg-slate-100 disabled:opacity-40"
            >
              Comprobar estructura
            </button>
            {checked && (
              <div className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black shadow-md ${allCorrect ? 'bg-emerald-300 text-emerald-950' : 'bg-rose-300 text-rose-950'}`}>
                {allCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>¡Estructura correcta! Excelente trabajo.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 shrink-0" />
                    <span>Revisa el orden de las piezas y vuelve a intentar.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
