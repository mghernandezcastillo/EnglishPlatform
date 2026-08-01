import { useEffect, useRef, useState } from 'react';
import { Bot, BrainCircuit, MessageSquareText, Mic, MonitorSpeaker, Shuffle, Sparkles, Square, X } from 'lucide-react';

type AssistantMode = 'idle' | 'ready' | 'waiting' | 'recording' | 'analyzing' | 'done' | 'error';

interface SurpriseResult {
  transcript: string;
  summary: string;
  strengths: string[];
  corrections: string[];
  grammarNotes: string[];
  vocabularySuggestions: string[];
  teacherNextSteps: string[];
  score: number;
}

type RawSurpriseResult = Partial<Omit<SurpriseResult, 'score'>> & {
  score?: unknown;
};

const blobToBase64 = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = String(reader.result || '');
      resolve(result.includes(',') ? result.split(',')[1] : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const stringifyFeedbackItem = (item: unknown) => {
  if (typeof item === 'string') return item;
  if (!item || typeof item !== 'object') return String(item || '');

  const value = item as Record<string, unknown>;
  if (typeof value.error === 'string' && typeof value.corrected === 'string') {
    return `${value.error} -> ${value.corrected}`;
  }
  if (typeof value.error === 'string') return value.error;
  if (typeof value.corrected === 'string') return value.corrected;
  if (typeof value.text === 'string') return value.text;
  if (typeof value.note === 'string') return value.note;
  return Object.values(value).filter(Boolean).join(' -> ');
};

const normalizeFeedbackList = (items: unknown) => {
  if (!Array.isArray(items)) return [];
  return items.map(stringifyFeedbackItem).map(item => item.trim()).filter(Boolean);
};

const normalizeSurpriseResult = (raw: RawSurpriseResult | null | undefined): SurpriseResult => ({
  transcript: typeof raw?.transcript === 'string' ? raw.transcript : '',
  summary: typeof raw?.summary === 'string' ? raw.summary : '',
  strengths: normalizeFeedbackList(raw?.strengths),
  corrections: normalizeFeedbackList(raw?.corrections),
  grammarNotes: normalizeFeedbackList(raw?.grammarNotes),
  vocabularySuggestions: normalizeFeedbackList(raw?.vocabularySuggestions),
  teacherNextSteps: normalizeFeedbackList(raw?.teacherNextSteps),
  score: typeof raw?.score === 'number' ? Math.max(0, Math.min(100, Math.round(raw.score))) : 0,
});

const SAVED_RANDOM_QUESTIONS = [
  'Tell me about your day. What did you do today, and how did you feel?',
  'What is something you learned recently? Explain it in simple English.',
  'Describe your favorite place and why you like it.',
  'What do you usually do on weekends?',
  'Tell me about a movie, series, or video you watched recently.',
  'What are your plans for tomorrow?',
  'Describe a person you admire and give two reasons.',
  'What is a goal you have for this year?',
  'Tell me about a problem you solved recently.',
  'What would you do if you had a free day?',
];

export function GlobalAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [mode, setMode] = useState<AssistantMode>('idle');
  const [status, setStatus] = useState('Listo. Activa un audio y escribe o genera una pregunta cuando quieras.');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState('');
  const [result, setResult] = useState<SurpriseResult | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef(0);
  const elapsedIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      cleanupAnalysis();
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [stream]);

  const cleanupAnalysis = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    analyzerRef.current = null;
    audioContextRef.current?.close().catch(() => undefined);
    audioContextRef.current = null;
    setAudioLevel(0);
    if (elapsedIntervalRef.current) window.clearInterval(elapsedIntervalRef.current);
    elapsedIntervalRef.current = null;
  };

  const setNewStream = (nextStream: MediaStream) => {
    stream?.getTracks().forEach(track => track.stop());
    setStream(nextStream);
    setMode('ready');
    setStatus('Audio listo. Presiona Empezar cuando quieras grabar.');
  };

  const requestCallAudio = async () => {
    setError('');
    try {
      const nextStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
        systemAudio: 'include',
        windowAudio: 'system',
        selfBrowserSurface: 'exclude',
      } as any);
      if (nextStream.getAudioTracks().length === 0) {
        nextStream.getTracks().forEach(track => track.stop());
        throw new Error('La fuente seleccionada no entrego audio. Elige Meet/pantalla con audio compartido.');
      }
      setNewStream(nextStream);
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo activar audio de llamada.');
    }
  };

  const requestMicAudio = async () => {
    setError('');
    try {
      setNewStream(await navigator.mediaDevices.getUserMedia({ audio: true }));
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo activar el microfono.');
    }
  };

  const startSurpriseCheck = () => {
    if (!stream) {
      setMode('error');
      setError('Primero activa audio de llamada o microfono.');
      return;
    }
    const audioTracks = stream.getAudioTracks();
    if (audioTracks.length === 0) {
      setMode('error');
      setError('El stream activo no tiene audio.');
      return;
    }

    chunksRef.current = [];
    setResult(null);
    setError('');
    setElapsed(0);
    setMode('recording');
    setStatus('Grabando. El analisis empezara solo cuando presiones Detener.');
    startedAtRef.current = Date.now();

    const audioOnlyStream = new MediaStream(audioTracks);
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : 'audio/webm';
    const recorder = new MediaRecorder(audioOnlyStream, { mimeType });
    recorderRef.current = recorder;

    recorder.ondataavailable = event => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      cleanupAnalysis();
      if (chunksRef.current.length === 0) {
        setMode('done');
        setStatus('No se capturo audio.');
        setResult({
          transcript: '',
          summary: 'No se capturo audio para analizar.',
          strengths: [],
          corrections: ['Revisa que el audio correcto este seleccionado y vuelve a grabar.'],
          grammarNotes: [],
          vocabularySuggestions: [],
          teacherNextSteps: ['Activar el audio correcto y repetir la prueba.'],
          score: 0,
        });
        return;
      }
      analyzeAudio(new Blob(chunksRef.current, { type: mimeType }));
    };

    recorder.start(250);
    startAudioMeter(stream);
    elapsedIntervalRef.current = window.setInterval(() => {
      setElapsed(Math.round((Date.now() - startedAtRef.current) / 1000));
    }, 500);
  };

  const startAudioMeter = (activeStream: MediaStream) => {
    cleanupAnalysis();
    const AudioContextCtor = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCtor) return;

    const context = new AudioContextCtor();
    const source = context.createMediaStreamSource(activeStream);
    const analyzer = context.createAnalyser();
    analyzer.fftSize = 1024;
    source.connect(analyzer);
    audioContextRef.current = context;
    analyzerRef.current = analyzer;

    const data = new Uint8Array(analyzer.fftSize);

    const tick = () => {
      analyzer.getByteTimeDomainData(data);
      let sum = 0;
      for (const value of data) {
        const centered = value - 128;
        sum += centered * centered;
      }
      const rms = Math.sqrt(sum / data.length);
      setAudioLevel(Math.min(100, Math.round(rms * 5)));
      rafRef.current = requestAnimationFrame(tick);
    };

    tick();
  };

  const stopRecording = () => {
    const recorder = recorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      setMode('analyzing');
      setStatus('Analizando respuesta con IA...');
      recorder.stop();
    }
  };

  const analyzeAudio = async (blob: Blob) => {
    setMode('analyzing');
    setStatus('Analizando respuesta con IA...');
    try {
      const audioBase64 = await blobToBase64(blob);
      const response = await fetch('/api/free-speaking-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          audioBase64,
          mimeType: blob.type || 'audio/webm',
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'No se pudo analizar la respuesta.');
      setResult(normalizeSurpriseResult(payload.result));
      setMode('done');
      setStatus('Resumen listo.');
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo analizar la respuesta.');
    }
  };

  const pickSavedQuestion = () => {
    const availableQuestions = SAVED_RANDOM_QUESTIONS.filter(savedQuestion => savedQuestion !== question);
    const pool = availableQuestions.length ? availableQuestions : SAVED_RANDOM_QUESTIONS;
    setQuestion(pool[Math.floor(Math.random() * pool.length)]);
  };

  const closeAssistant = () => {
    if (mode === 'waiting' || mode === 'recording') stopRecording();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-[330] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 text-white shadow-2xl shadow-blue-500/30 transition-transform hover:scale-105"
        title="Asistente IA"
      >
        <Bot className="h-7 w-7" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[340] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6 backdrop-blur-sm">
          <div className="flex max-h-[94vh] min-h-[78vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-cyan-200/20 bg-slate-950 text-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/95 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black">Asistente IA</h2>
                  <p className="text-sm font-semibold text-white/60">Evaluacion oral manual</p>
                </div>
              </div>
              <button onClick={closeAssistant} className="rounded-xl p-2 text-white/70 hover:bg-white/10 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100">
                    <MessageSquareText className="h-4 w-4" />
                    Pregunta
                  </label>
                  <button
                    type="button"
                    onClick={pickSavedQuestion}
                    disabled={mode === 'waiting' || mode === 'recording' || mode === 'analyzing'}
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 hover:bg-cyan-200 disabled:opacity-45"
                  >
                    <Shuffle className="h-4 w-4" />
                    Pregunta aleatoria guardada
                  </button>
                </div>
                <textarea
                  value={question}
                  onChange={event => setQuestion(event.target.value)}
                  placeholder="Escribe tu pregunta aqui o genera una pregunta aleatoria guardada."
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-lg font-semibold text-white outline-none focus:border-cyan-300"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button onClick={requestCallAudio} className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 font-black text-slate-950 hover:bg-cyan-50">
                  <MonitorSpeaker className="h-5 w-5" />
                  Audio de llamada
                </button>
                <button onClick={requestMicAudio} className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-black text-white hover:bg-white/15">
                  <Mic className="h-5 w-5" />
                  Microfono
                </button>
              </div>

              <div className="rounded-2xl border border-cyan-200/20 bg-black/20 p-4">
                {mode === 'analyzing' && <AssistantAnalyzing />}
                <AudioLevelMeter level={audioLevel} isActive={mode === 'recording'} />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Estado</p>
                    <p className="text-lg font-bold">{status}</p>
                    {error && <p className="mt-1 text-sm font-semibold text-amber-200">{error}</p>}
                    <p className="mt-1 text-sm text-white/55">{elapsed}s</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={startSurpriseCheck}
                      disabled={!stream || mode === 'waiting' || mode === 'recording' || mode === 'analyzing'}
                      className="rounded-2xl bg-emerald-300 px-5 py-3 font-black text-emerald-950 disabled:opacity-45"
                    >
                      Empezar
                    </button>
                    <button
                      onClick={stopRecording}
                      disabled={mode !== 'waiting' && mode !== 'recording'}
                      className="flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 font-black text-white disabled:opacity-45"
                    >
                      <Square className="h-4 w-4" />
                      Detener
                    </button>
                  </div>
                </div>
              </div>

              {result && (
                <div className="grid gap-4 lg:grid-cols-[0.55fr_1fr]">
                  <div className="rounded-2xl bg-white p-5 text-slate-950">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-700">Score oral</p>
                    <p className="mt-2 text-6xl font-black">{result.score}%</p>
                    <p className="mt-4 text-sm font-semibold text-slate-600">{result.summary}</p>
                  </div>
                  <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-100">Lo que dijo</p>
                      <p className="mt-2 text-base font-semibold text-white/90">{result.transcript || 'No hubo transcripcion clara.'}</p>
                    </div>
                    <ResultGroup title="Fortalezas" items={result.strengths} />
                    <ResultGroup title="Corregir" items={result.corrections} />
                    <ResultGroup title="Gramatica" items={result.grammarNotes} />
                    <ResultGroup title="Vocabulario sugerido" items={result.vocabularySuggestions} />
                    <ResultGroup title="Siguiente paso del profe" items={result.teacherNextSteps} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AudioLevelMeter({ level, isActive }: { level: number; isActive: boolean }) {
  const activeBars = Math.ceil((level / 100) * 20);

  return (
    <div className="mb-4 rounded-2xl border border-white/10 bg-slate-950/65 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Senal de audio</p>
          <p className="text-sm font-semibold text-white/60">
            {isActive ? (level > 6 ? 'Audio entrando desde la fuente seleccionada.' : 'Grabando, pero casi no hay senal.') : 'Aparece cuando presionas Empezar.'}
          </p>
        </div>
        <span className={`h-3 w-3 rounded-full ${isActive && level > 6 ? 'bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]' : 'bg-white/20'}`} />
      </div>
      <div className="flex h-14 items-end gap-1.5">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={`w-full rounded-t transition-all duration-100 ${
              index < activeBars
                ? 'bg-gradient-to-t from-emerald-400 via-cyan-300 to-fuchsia-300 shadow-[0_0_10px_rgba(34,211,238,0.35)]'
                : 'bg-white/10'
            }`}
            style={{ height: `${10 + ((index * 7) % 28)}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function AssistantAnalyzing() {
  return (
    <div className="relative mb-4 overflow-hidden rounded-2xl border border-fuchsia-200/20 bg-slate-950/70 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.25),transparent_32%),radial-gradient(circle_at_75%_35%,rgba(217,70,239,0.25),transparent_30%)]" />
      <div className="relative flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-300 border-r-fuchsia-300 animate-spin" />
          <div className="absolute inset-5 rounded-full bg-white shadow-[0_0_26px_rgba(34,211,238,0.9)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-cyan-100">
            <Sparkles className="h-4 w-4" />
            <p className="text-xs font-black uppercase tracking-[0.18em]">AI listening intelligence</p>
          </div>
          <p className="mt-1 text-2xl font-black">Construyendo feedback...</p>
          <div className="mt-3 flex h-8 items-end gap-1">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="w-full rounded-t bg-gradient-to-t from-cyan-400 to-fuchsia-300 animate-pulse"
                style={{ height: `${10 + ((index * 11) % 22)}px`, animationDelay: `${index * 60}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-white/60">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items?.length ? items.slice(0, 8).map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-xl bg-cyan-100 px-3 py-1.5 text-xs font-black text-slate-950">
            {item}
          </span>
        )) : (
          <span className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-white/70">Sin observaciones</span>
        )}
      </div>
    </div>
  );
}
