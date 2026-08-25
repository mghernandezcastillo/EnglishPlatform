import { useEffect, useMemo, useState } from 'react';
import type { DragEvent as ReactDragEvent } from 'react';
import { CheckCircle2, RefreshCw, Sparkles, XCircle, ArrowRight } from 'lucide-react';
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

const TOKEN_GRADIENTS = [
  'bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 border-cyan-300',
  'bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 border-amber-300',
  'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 border-purple-300',
  'bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 border-pink-300',
  'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border-emerald-300',
];

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
    setChecked(false);
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
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-5 overflow-hidden min-h-0 select-text">
      {/* Top Header Bar */}
      <div className="shrink-0 flex items-center justify-between gap-3 pb-2 border-b border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-[2.1rem] font-black tracking-tight text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
                {slide.title || 'Build The Sentence 🧱'}
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-bold text-cyan-300 truncate">
              {config.instructions || 'Arrastra o toca las piezas para formar la estructura en el orden correcto.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {config.patternName && (
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-200">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              {config.patternName}
            </span>
          )}
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 text-xs sm:text-sm font-black text-white transition active:scale-95 shadow-md"
            title="Reiniciar ejercicio"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Main Arena (2 Columns: Slots & Pieces) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-3 sm:gap-4 py-2 min-h-0 overflow-hidden">
        {/* Left Column: Slots / Steps Sequence */}
        <div className="flex-1 flex flex-col justify-between gap-2 sm:gap-2.5 min-h-0 h-full">
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
                className={`flex-1 min-h-0 rounded-2xl border-2 transition-all p-2 sm:p-2.5 flex flex-col justify-center ${
                  isCorrect
                    ? 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : isWrong
                      ? 'border-rose-400 bg-rose-950/40 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                      : activeToken
                        ? 'border-cyan-400/80 bg-cyan-950/30 hover:border-cyan-300 ring-2 ring-cyan-400/40 cursor-pointer'
                        : 'border-white/20 bg-slate-900/50 hover:border-white/40'
                }`}
              >
                {token ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      returnTokenToPool(token);
                    }}
                    className={`w-full h-full flex items-center justify-between px-4 sm:px-5 py-2 rounded-xl text-left text-white shadow-xl transition hover:scale-[1.01] active:scale-[0.99] border-2 ${
                      isCorrect
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-300'
                        : isWrong
                          ? 'bg-gradient-to-r from-rose-600 to-pink-600 border-rose-300'
                          : TOKEN_GRADIENTS[index % TOKEN_GRADIENTS.length]
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white/80">
                        Paso {index + 1}: {slot.label}
                      </div>
                      <div className="text-base sm:text-xl lg:text-[1.45rem] font-black leading-tight text-white truncate drop-shadow-sm">
                        {token.text}
                      </div>
                    </div>
                    {isCorrect ? (
                      <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 text-white ml-2 drop-shadow-md" />
                    ) : isWrong ? (
                      <XCircle className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 text-white ml-2 drop-shadow-md" />
                    ) : (
                      <span className="text-xs font-black text-white/75 bg-black/20 px-2 py-1 rounded-lg shrink-0 ml-2">
                        Toca para quitar
                      </span>
                    )}
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-between px-4 sm:px-5 rounded-xl border-2 border-dashed border-white/25 bg-black/20 text-white/50 hover:border-cyan-400/60 transition">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300/80">
                      Paso {index + 1}: {slot.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white/50 flex items-center gap-1">
                      Arrastra o toca una pieza <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Pool of Pieces */}
        <div className="flex-1 h-full min-h-0 flex flex-col justify-between bg-[#110e30]/80 border-2 border-purple-500/30 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-xl backdrop-blur-md">
          <div className="shrink-0 flex items-center justify-between pb-1.5 border-b border-white/10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-purple-300">
              🧩 Piezas de Estructura
            </span>
            <span className="text-xs font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded-full">
              {pool.length} disponibles
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2 sm:gap-2.5 min-h-0 py-1.5">
            {pool.map((token, idx) => {
              const selected = activeTokenId === token.id;
              const grad = TOKEN_GRADIENTS[idx % TOKEN_GRADIENTS.length];
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
                  onClick={() => setActiveTokenId((current) => (current === token.id ? null : token.id))}
                  className={`flex-1 min-h-0 w-full flex items-center justify-between px-4 sm:px-5 py-2 rounded-2xl border-2 text-left text-white shadow-xl transition-all ${grad} ${
                    selected
                      ? 'ring-4 ring-cyan-400 scale-[1.02] border-white shadow-cyan-500/50'
                      : 'hover:scale-[1.01] hover:brightness-110 active:scale-[0.99]'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white/80">
                      {token.label}
                    </div>
                    <div className="text-base sm:text-xl lg:text-[1.45rem] font-black leading-tight text-white truncate drop-shadow-sm">
                      {token.text}
                    </div>
                  </div>
                  <span className="text-xs font-black bg-black/30 px-2.5 py-1 rounded-xl shrink-0 ml-2 shadow-inner">
                    {selected ? '✓ Elegida' : 'Tocar'}
                  </span>
                </button>
              );
            })}
            {!pool.length && (
              <div className="flex-1 flex items-center justify-center rounded-2xl border-2 border-dashed border-emerald-400/40 bg-emerald-950/20 p-4 text-center">
                <span className="text-sm sm:text-base font-black text-emerald-300 flex items-center gap-2">
                  ✨ ¡Todas las piezas están colocadas!
                </span>
              </div>
            )}
          </div>

          <div className="shrink-0 pt-1.5">
            <button
              type="button"
              disabled={!allFilled}
              onClick={checkAnswer}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2 ${
                allFilled
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 hover:brightness-110 active:scale-[0.98] animate-pulse cursor-pointer shadow-cyan-500/30'
                  : 'bg-white/10 text-white/40 border border-white/10 cursor-not-allowed'
              }`}
            >
              <CheckCircle2 className="h-5 w-5" />
              <span>{checked ? 'Volver a Comprobar' : 'Comprobar Estructura'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Feedback Banner */}
      <div className="shrink-0 pt-1.5 border-t border-white/10 flex items-center justify-between gap-2">
        {checked ? (
          allCorrect ? (
            <div className="flex-1 flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/50 px-3.5 py-1.5 text-xs sm:text-sm font-black text-emerald-200">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>¡Excelente! {config.prompt}</span>
            </div>
          ) : (
            <div className="flex-1 flex items-center gap-2 rounded-xl bg-rose-500/20 border border-rose-400/50 px-3.5 py-1.5 text-xs sm:text-sm font-black text-rose-200">
              <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
              <span>Revisa el orden de las piezas y vuelve a intentar.</span>
            </div>
          )
        ) : (
          <div className="text-xs sm:text-sm font-semibold text-white/50 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Toca o arrastra cada pieza hacia su paso correspondiente.</span>
          </div>
        )}
      </div>
    </div>
  );
}
