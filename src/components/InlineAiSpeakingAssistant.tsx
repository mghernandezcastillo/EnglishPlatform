import { useEffect, useRef, useState } from 'react';
import { Bot, Mic, MonitorSpeaker, Sparkles, Square } from 'lucide-react';

interface InlineAiSpeakingAssistantProps {
  title?: string;
  initialQuestion?: string;
  candidateQuestions?: string[];
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

export function InlineAiSpeakingAssistant({
  title = 'Asistente IA opcional',
  initialQuestion = '',
  candidateQuestions = [],
}: InlineAiSpeakingAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(initialQuestion);
  const [mode, setMode] = useState<CaptureMode>('idle');
  const [status, setStatus] = useState('Disponible si quieres evaluar esta respuesta.');
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
    setStatus('Grabando. El analisis empezara cuando presiones Detener.');
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
          audioBase64,
          mimeType: blob.type || 'audio/webm',
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'No se pudo analizar la respuesta.');
      setResult(payload.result);
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
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-slate-950 hover:bg-cyan-50"
        >
          <Bot className="h-5 w-5" />
          Usar asistente IA en esta diapositiva
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">{title}</p>
              <p className="text-sm font-semibold text-white/65">{status}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              disabled={mode === 'recording' || mode === 'analyzing'}
              className="rounded-xl bg-white/10 px-3 py-2 text-sm font-bold text-white hover:bg-white/15 disabled:opacity-45"
            >
              Ocultar
            </button>
          </div>

          {candidateQuestions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {candidateQuestions.slice(0, 6).map((candidate, index) => (
                <button
                  key={`${candidate}-${index}`}
                  type="button"
                  onClick={() => setQuestion(candidate)}
                  disabled={mode === 'recording' || mode === 'analyzing'}
                  className="rounded-xl bg-white/10 px-3 py-2 text-xs font-black text-white hover:bg-white/20 disabled:opacity-45"
                >
                  Usar pregunta {index + 1}
                </button>
              ))}
            </div>
          )}

          <textarea
            value={question}
            onChange={event => setQuestion(event.target.value)}
            placeholder="Pregunta o instruccion de speaking para evaluar."
            rows={2}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/25 p-3 text-base font-semibold text-white outline-none focus:border-cyan-300"
          />

          <div className="grid gap-2 sm:grid-cols-2">
            <button onClick={requestCallAudio} className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 font-black text-slate-950 hover:bg-cyan-50">
              <MonitorSpeaker className="h-4 w-4" />
              Audio de llamada
            </button>
            <button onClick={requestMicAudio} className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15">
              <Mic className="h-4 w-4" />
              Microfono
            </button>
          </div>

          <div className="rounded-xl bg-slate-950/65 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-cyan-100">Senal de audio</span>
              <span className="text-xs font-bold text-white/55">{elapsed}s</span>
            </div>
            <div className="flex h-10 items-end gap-1">
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className={`w-full rounded-t transition-all duration-100 ${index < Math.ceil((audioLevel / 100) * 18) ? 'bg-cyan-300' : 'bg-white/10'}`}
                  style={{ height: `${8 + ((index * 9) % 24)}px` }}
                />
              ))}
            </div>
          </div>

          {error && <p className="text-sm font-semibold text-amber-200">{error}</p>}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={startRecording}
              disabled={!stream || mode === 'recording' || mode === 'analyzing'}
              className="flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-3 font-black text-emerald-950 disabled:opacity-45"
            >
              {mode === 'analyzing' ? <Sparkles className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              Empezar
            </button>
            <button
              onClick={stopRecording}
              disabled={mode !== 'recording'}
              className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-black text-white disabled:opacity-45"
            >
              <Square className="h-4 w-4" />
              Detener
            </button>
          </div>

          {result && (
            <div className="grid gap-3 lg:grid-cols-[0.4fr_1fr]">
              <div className="rounded-xl bg-white p-4 text-slate-950">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-700">Score oral</p>
                <p className="mt-1 text-4xl font-black">{result.score}%</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">{result.summary}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-100">Lo que dijo</p>
                <p className="mt-1 text-sm font-semibold text-white/90">{result.transcript || 'No hubo transcripcion clara.'}</p>
                <ResultGroup title="Corregir" items={result.corrections} />
                <ResultGroup title="Siguiente paso" items={result.teacherNextSteps} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-3">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-white/55">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items?.length ? items.slice(0, 5).map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-lg bg-cyan-100 px-2.5 py-1 text-xs font-black text-slate-950">
            {item}
          </span>
        )) : (
          <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white/70">Sin observaciones</span>
        )}
      </div>
    </div>
  );
}
