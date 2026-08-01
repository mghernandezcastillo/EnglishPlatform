import { useEffect, useRef, useState } from 'react';
import { Bot, Mic, MonitorSpeaker, Sparkles, Square } from 'lucide-react';

interface InlineAiSpeakingAssistantProps {
  title?: string;
  initialQuestion?: string;
  candidateQuestions?: string[];
  mode?: 'speaking' | 'reading';
}

interface SpeakingResult {
  transcript: string;
  summary: string;
  strengths: string[];
  corrections: string[];
  grammarNotes: string[];
  vocabularySuggestions: string[];
  teacherNextSteps: string[];
  score: number;
}

type RawSpeakingResult = Partial<Omit<SpeakingResult, 'score'>> & {
  score?: unknown;
};

type CaptureMode = 'idle' | 'ready' | 'recording' | 'analyzing' | 'done' | 'error';

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

const normalizeSpeakingResult = (raw: RawSpeakingResult | null | undefined): SpeakingResult => ({
  transcript: typeof raw?.transcript === 'string' ? raw.transcript : '',
  summary: typeof raw?.summary === 'string' ? raw.summary : '',
  strengths: normalizeFeedbackList(raw?.strengths),
  corrections: normalizeFeedbackList(raw?.corrections),
  grammarNotes: normalizeFeedbackList(raw?.grammarNotes),
  vocabularySuggestions: normalizeFeedbackList(raw?.vocabularySuggestions),
  teacherNextSteps: normalizeFeedbackList(raw?.teacherNextSteps),
  score: typeof raw?.score === 'number' ? Math.max(0, Math.min(100, Math.round(raw.score))) : 0,
});

export function InlineAiSpeakingAssistant({
  title = 'Asistente IA opcional',
  initialQuestion = '',
  candidateQuestions = [],
  mode: assistantMode = 'speaking',
}: InlineAiSpeakingAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(initialQuestion);
  const [mode, setMode] = useState<CaptureMode>('idle');
  const [status, setStatus] = useState(
    assistantMode === 'reading'
      ? 'Opcional: escucha la lectura y sugiere correcciones.'
      : 'Disponible si quieres evaluar esta respuesta.'
  );
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState('');
  const [result, setResult] = useState<SpeakingResult | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef(0);
  const elapsedIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    setQuestion(initialQuestion);
  }, [initialQuestion]);

  useEffect(() => {
    return () => {
      cleanupMeter();
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [stream]);

  const cleanupMeter = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    audioContextRef.current?.close().catch(() => undefined);
    audioContextRef.current = null;
    if (elapsedIntervalRef.current) window.clearInterval(elapsedIntervalRef.current);
    elapsedIntervalRef.current = null;
    setAudioLevel(0);
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
        throw new Error('La fuente seleccionada no entrego audio. Elige la llamada con audio compartido.');
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

  const startAudioMeter = (activeStream: MediaStream) => {
    cleanupMeter();
    const AudioContextCtor = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCtor) return;

    const context = new AudioContextCtor();
    const source = context.createMediaStreamSource(activeStream);
    const analyzer = context.createAnalyser();
    analyzer.fftSize = 1024;
    source.connect(analyzer);
    audioContextRef.current = context;

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

  const startRecording = () => {
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
    setStatus(
      assistantMode === 'reading'
        ? 'Grabando lectura. Deten cuando el estudiante termine.'
        : 'Grabando. El analisis empezara cuando presiones Detener.'
    );
    startedAtRef.current = Date.now();

    const audioOnlyStream = new MediaStream(audioTracks);
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : 'audio/webm';
    const recorder = new MediaRecorder(audioOnlyStream, { mimeType });
    recorderRef.current = recorder;

    recorder.ondataavailable = event => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      cleanupMeter();
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
          question: question || 'Free speaking practice',
          mode: assistantMode,
          audioBase64,
          mimeType: blob.type || 'audio/webm',
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'No se pudo analizar la respuesta.');
      setResult(normalizeSpeakingResult(payload.result));
      setMode('done');
      setStatus('Resumen listo.');
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo analizar la respuesta.');
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-black/20 p-4 shadow-xl">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-base font-black text-slate-950 hover:bg-cyan-50 sm:text-lg"
        >
          <Bot className="h-5 w-5" />
          {assistantMode === 'reading' ? 'Revisar lectura con IA' : 'Usar asistente IA en esta diapositiva'}
        </button>
      ) : (
        <div className="fixed inset-0 z-[260] flex items-center justify-center bg-slate-950/78 p-3 backdrop-blur-md sm:p-6">
          <div className="flex max-h-[96vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100 sm:text-sm">{title}</p>
                <h3 className="mt-1 text-2xl font-black text-white sm:text-4xl">
                  {assistantMode === 'reading' ? 'Lectura asistida con IA' : 'Asistente IA para speaking'}
                </h3>
                <p className="mt-2 text-sm font-semibold text-white/70 sm:text-lg">{status}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={mode === 'recording' || mode === 'analyzing'}
                className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white hover:bg-white/15 disabled:opacity-45 sm:px-5 sm:text-base"
              >
                Cerrar
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-6">
              <div className="space-y-5">
                {assistantMode !== 'reading' && candidateQuestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {candidateQuestions.slice(0, 6).map((candidate, index) => (
                      <button
                        key={`${candidate}-${index}`}
                        type="button"
                        onClick={() => setQuestion(candidate)}
                        disabled={mode === 'recording' || mode === 'analyzing'}
                        className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white hover:bg-white/20 disabled:opacity-45 sm:text-base"
                      >
                        Usar pregunta {index + 1}
                      </button>
                    ))}
                  </div>
                )}

                <textarea
                  value={question}
                  onChange={event => setQuestion(event.target.value)}
                  placeholder={assistantMode === 'reading' ? 'Texto que el estudiante debe leer.' : 'Pregunta o instruccion de speaking para evaluar.'}
                  aria-label={assistantMode === 'reading' ? 'Texto esperado de lectura' : 'Pregunta o instruccion de speaking'}
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-lg font-semibold text-white outline-none focus:border-cyan-300 sm:p-5 sm:text-2xl"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <button onClick={requestCallAudio} className="flex min-h-[64px] items-center justify-center gap-3 rounded-2xl bg-white px-4 py-4 text-base font-black text-slate-950 hover:bg-cyan-50 sm:min-h-[76px] sm:text-xl">
                    <MonitorSpeaker className="h-5 w-5 sm:h-6 sm:w-6" />
                    Audio de llamada
                  </button>
                  <button onClick={requestMicAudio} className="flex min-h-[64px] items-center justify-center gap-3 rounded-2xl bg-white/10 px-4 py-4 text-base font-black text-white hover:bg-white/15 sm:min-h-[76px] sm:text-xl">
                    <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
                    Micrófono
                  </button>
                </div>

                <div className="rounded-2xl bg-slate-950/65 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100 sm:text-sm">Señal de audio</span>
                    <span className="text-base font-black text-white/70 sm:text-2xl">{elapsed}s</span>
                  </div>
                  <div className="flex h-16 items-end gap-1.5 sm:h-20">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span
                        key={index}
                        className={`w-full rounded-t transition-all duration-100 ${index < Math.ceil((audioLevel / 100) * 18) ? 'bg-cyan-300' : 'bg-white/10'}`}
                        style={{ height: `${10 + ((index * 11) % 40)}px` }}
                      />
                    ))}
                  </div>
                </div>

                {error && <p className="text-base font-bold text-amber-200 sm:text-lg">{error}</p>}

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={startRecording}
                    disabled={!stream || mode === 'recording' || mode === 'analyzing'}
                    className="flex min-h-[68px] items-center justify-center gap-3 rounded-2xl bg-emerald-300 px-5 py-4 text-base font-black text-emerald-950 disabled:opacity-45 sm:min-h-[84px] sm:text-2xl"
                  >
                    {mode === 'analyzing' ? <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" /> : <Mic className="h-5 w-5 sm:h-6 sm:w-6" />}
                    Empezar
                  </button>
                  <button
                    onClick={stopRecording}
                    disabled={mode !== 'recording'}
                    className="flex min-h-[68px] items-center justify-center gap-3 rounded-2xl bg-red-500 px-5 py-4 text-base font-black text-white disabled:opacity-45 sm:min-h-[84px] sm:text-2xl"
                  >
                    <Square className="h-5 w-5 sm:h-6 sm:w-6" />
                    Detener
                  </button>
                </div>

                {result && (
                  <div className="grid gap-4 lg:grid-cols-[0.55fr_1fr]">
                    <div className="rounded-2xl bg-white p-5 text-slate-950 sm:p-6">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700 sm:text-sm">
                        {assistantMode === 'reading' ? 'Score lectura' : 'Score oral'}
                      </p>
                      <p className="mt-2 text-5xl font-black sm:text-7xl">{result.score}%</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600 sm:text-lg">{result.summary}</p>
                    </div>
                    <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-100 sm:text-sm">
                          {assistantMode === 'reading' ? 'Lectura detectada' : 'Lo que dijo'}
                        </p>
                        <p className="mt-2 text-base font-semibold leading-relaxed text-white/90 sm:text-xl">{result.transcript || 'No hubo transcripcion clara.'}</p>
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
        </div>
      )}
    </div>
  );
}

function ResultGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-white/60 sm:text-sm">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items?.length ? items.slice(0, 8).map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-xl bg-cyan-100 px-3 py-1.5 text-xs font-black text-slate-950 sm:text-sm">
            {item}
          </span>
        )) : (
          <span className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-white/70 sm:text-sm">Sin observaciones</span>
        )}
      </div>
    </div>
  );
}
