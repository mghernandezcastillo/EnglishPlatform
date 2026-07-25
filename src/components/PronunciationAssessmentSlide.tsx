import { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Mic, MonitorSpeaker, Square, Volume2 } from 'lucide-react';

interface PronunciationAssessmentSlideProps {
  expectedText: string;
  maxDurationSeconds?: number;
  silenceStopSeconds?: number;
  sharedStream: MediaStream | null;
  onSharedStreamChange: (stream: MediaStream | null) => void;
}

interface AssessmentResult {
  score: number;
  transcript: string;
  correctWords: string[];
  missedWords: string[];
  changedWords: string[];
  extraWords: string[];
  feedback: string;
  tips: string[];
}

type CaptureMode = 'idle' | 'ready' | 'waiting' | 'recording' | 'analyzing' | 'done' | 'error';

const normalizeWords = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z'\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

const localFallbackAssessment = (expectedText: string, transcript: string): AssessmentResult => {
  const expected = normalizeWords(expectedText);
  const heard = normalizeWords(transcript);
  const correctWords = expected.filter(word => heard.includes(word));
  const missedWords = expected.filter(word => !heard.includes(word));
  const extraWords = heard.filter(word => !expected.includes(word));
  const score = expected.length ? Math.round((correctWords.length / expected.length) * 100) : 0;

  return {
    score,
    transcript: transcript || 'No transcript available.',
    correctWords,
    missedWords,
    changedWords: [],
    extraWords,
    feedback: 'Analisis local: revisa las palabras omitidas y repite la lectura mas despacio.',
    tips: missedWords.slice(0, 4).map(word => `Practice: ${word}`),
  };
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

export function PronunciationAssessmentSlide({
  expectedText,
  maxDurationSeconds = 25,
  silenceStopSeconds = 1.8,
  sharedStream,
  onSharedStreamChange,
}: PronunciationAssessmentSlideProps) {
  const [mode, setMode] = useState<CaptureMode>(sharedStream ? 'ready' : 'idle');
  const [status, setStatus] = useState(sharedStream ? 'Audio de llamada listo.' : 'Activa el audio de la llamada una vez.');
  const [elapsed, setElapsed] = useState(0);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState('');

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedSpeakingRef = useRef(false);
  const silenceStartedAtRef = useRef<number | null>(null);
  const startedAtRef = useRef<number>(0);
  const hardStopRef = useRef<number | null>(null);

  useEffect(() => {
    setMode(prev => (sharedStream && prev === 'idle' ? 'ready' : prev));
    if (sharedStream) setStatus('Audio de llamada listo.');
  }, [sharedStream]);

  useEffect(() => {
    return () => {
      cleanupAnalysis();
      if (hardStopRef.current) window.clearTimeout(hardStopRef.current);
    };
  }, []);

  const cleanupAnalysis = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    analyzerRef.current = null;
    audioContextRef.current?.close().catch(() => undefined);
    audioContextRef.current = null;
  };

  const requestCallAudio = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
        systemAudio: 'include',
        windowAudio: 'system',
        selfBrowserSurface: 'exclude',
      } as any);

      const hasAudio = stream.getAudioTracks().length > 0;
      if (!hasAudio) {
        stream.getTracks().forEach(track => track.stop());
        throw new Error('La fuente seleccionada no entrego audio. Elige la pestana o pantalla con audio compartido.');
      }

      onSharedStreamChange(stream);
      setMode('ready');
      setStatus('Audio de llamada listo. Ahora puedes empezar la prueba.');
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo activar el audio de la llamada.');
    }
  };

  const requestMicAudio = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      onSharedStreamChange(stream);
      setMode('ready');
      setStatus('Microfono listo como respaldo.');
    } catch (err: any) {
      setMode('error');
      setError(err?.message || 'No se pudo activar el microfono.');
    }
  };

  const beginAssessment = () => {
    if (!sharedStream) {
      setMode('error');
      setError('Primero activa el audio de la llamada o el microfono.');
      return;
    }

    const audioTracks = sharedStream.getAudioTracks();
    if (audioTracks.length === 0) {
      setMode('error');
      setError('El stream activo no tiene audio.');
      return;
    }

    chunksRef.current = [];
    setResult(null);
    setError('');
    setElapsed(0);
    setMode('waiting');
    setStatus('Escuchando... empieza a leer cuando quieras.');
    startedSpeakingRef.current = false;
    silenceStartedAtRef.current = null;
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
      if (hardStopRef.current) window.clearTimeout(hardStopRef.current);
      if (!startedSpeakingRef.current) {
        setResult({
          score: 0,
          transcript: 'No clear speech detected.',
          correctWords: [],
          missedWords: normalizeWords(expectedText),
          changedWords: [],
          extraWords: [],
          feedback: 'No se detecto voz clara. Repite la prueba mas cerca del audio.',
          tips: ['Check call audio source', 'Ask the student to read louder'],
        });
        setMode('done');
        setStatus('No se detecto voz clara.');
        return;
      }
      analyzeAudio(new Blob(chunksRef.current, { type: mimeType }));
    };

    recorder.start(250);
    watchSilence(sharedStream);
    hardStopRef.current = window.setTimeout(() => stopRecording(), maxDurationSeconds * 1000);
  };

  const watchSilence = (stream: MediaStream) => {
    const AudioContextCtor = window.AudioContext || (window as any).webkitAudioContext;
    const context = new AudioContextCtor();
    const source = context.createMediaStreamSource(stream);
    const analyzer = context.createAnalyser();
    analyzer.fftSize = 1024;
    source.connect(analyzer);
    audioContextRef.current = context;
    analyzerRef.current = analyzer;

    const data = new Uint8Array(analyzer.fftSize);
    const threshold = 16;

    const tick = () => {
      analyzer.getByteTimeDomainData(data);
      let sum = 0;
      for (const value of data) {
        const centered = value - 128;
        sum += centered * centered;
      }
      const rms = Math.sqrt(sum / data.length);
      const now = Date.now();
      setElapsed(Math.min(maxDurationSeconds, Math.round((now - startedAtRef.current) / 1000)));

      if (rms > threshold) {
        if (!startedSpeakingRef.current) {
          startedSpeakingRef.current = true;
          setMode('recording');
          setStatus('Grabando lectura...');
        }
        silenceStartedAtRef.current = null;
      } else if (startedSpeakingRef.current) {
        if (!silenceStartedAtRef.current) silenceStartedAtRef.current = now;
        if (now - silenceStartedAtRef.current >= silenceStopSeconds * 1000) {
          stopRecording();
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();
  };

  const stopRecording = () => {
    const recorder = recorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      setMode('analyzing');
      setStatus('Analizando con Gemini...');
      recorder.stop();
    }
  };

  const analyzeAudio = async (blob: Blob) => {
    setMode('analyzing');
    setStatus('Analizando con Gemini...');
    try {
      const audioBase64 = await blobToBase64(blob);
      const response = await fetch('/api/speaking-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expectedText,
          audioBase64,
          mimeType: blob.type || 'audio/webm',
        }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'Gemini no pudo analizar el audio.');

      setResult(payload.result);
      setMode('done');
      setStatus('Analisis listo.');
    } catch (err: any) {
      const fallback = localFallbackAssessment(expectedText, '');
      setResult(fallback);
      setMode('done');
      setStatus('No hubo analisis de Gemini; se muestra respaldo local.');
      setError(err?.message || 'No se pudo analizar el audio.');
    }
  };

  const progress = Math.min(100, Math.round((elapsed / maxDurationSeconds) * 100));

  return (
    <div className="flex-1 flex flex-col gap-5">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
        <div className="rounded-2xl border border-white/15 bg-black/15 p-5 sm:p-7 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-100 mb-4">
            <Volume2 className="w-6 h-6" />
            <span className="text-sm font-black uppercase tracking-[0.18em]">Read aloud</span>
          </div>
          <p className="text-2xl sm:text-4xl font-extrabold leading-tight">{expectedText}</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-black/15 p-5 sm:p-6 shadow-xl flex flex-col gap-3">
          <button
            type="button"
            onClick={requestCallAudio}
            className="flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-3 font-extrabold shadow-lg hover:bg-cyan-50 transition-colors"
          >
            <MonitorSpeaker className="w-5 h-5" />
            Activar audio de llamada
          </button>
          <button
            type="button"
            onClick={requestMicAudio}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/15 text-white px-4 py-3 font-bold hover:bg-white/25 transition-colors"
          >
            <Mic className="w-5 h-5" />
            Usar microfono
          </button>
          <p className="text-sm text-white/75 leading-relaxed">
            Para Meet, elige la pestana o pantalla que contiene la llamada y activa compartir audio.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/15 bg-black/20 p-5 sm:p-6 shadow-xl">
        {mode === 'analyzing' && <AiAnalyzingAnimation />}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">Estado</p>
            <p className="text-xl font-bold">{status}</p>
            {error && <p className="mt-2 text-sm font-semibold text-amber-200">{error}</p>}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={beginAssessment}
              disabled={!sharedStream || mode === 'waiting' || mode === 'recording' || mode === 'analyzing'}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-emerald-950 px-5 py-3 font-extrabold shadow-lg hover:bg-emerald-300 disabled:opacity-45 disabled:hover:bg-emerald-400 transition-colors"
            >
              {mode === 'analyzing' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mic className="w-5 h-5" />}
              Empezar
            </button>
            <button
              type="button"
              onClick={stopRecording}
              disabled={mode !== 'waiting' && mode !== 'recording'}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-500 text-white px-5 py-3 font-extrabold shadow-lg hover:bg-red-400 disabled:opacity-45 disabled:hover:bg-red-500 transition-colors"
            >
              <Square className="w-5 h-5" />
              Detener
            </button>
          </div>
        </div>
        <div className="mt-5 h-3 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full bg-cyan-300 transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-sm text-white/70">{elapsed}s / {maxDurationSeconds}s</p>
      </div>

      {result && (
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-5">
          <div className="rounded-2xl border border-white/15 bg-white text-slate-900 p-5 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-sm font-black uppercase tracking-[0.14em]">Score</span>
            </div>
            <p className="mt-3 text-6xl font-black">{result.score}%</p>
            <p className="mt-3 text-sm font-semibold text-slate-600">{result.feedback}</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/20 p-5 shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-cyan-100">Transcripcion</p>
            <p className="mt-2 text-lg font-semibold text-white/90">{result.transcript}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <WordList title="Bien" words={result.correctWords} tone="emerald" />
              <WordList title="Revisar" words={[...result.missedWords, ...result.changedWords]} tone="amber" />
              <WordList title="Extra" words={result.extraWords} tone="sky" />
              <WordList title="Tips" words={result.tips} tone="violet" />
            </div>
          </div>
        </div>
      )}

      {mode === 'error' && !result && (
        <div className="flex items-center gap-3 rounded-2xl border border-amber-200/40 bg-amber-300/15 p-4 text-amber-50">
          <AlertCircle className="w-6 h-6 shrink-0" />
          <p className="font-semibold">{error || 'Revisa permisos de audio y vuelve a intentar.'}</p>
        </div>
      )}
    </div>
  );
}

function AiAnalyzingAnimation() {
  return (
    <div className="relative mb-5 overflow-hidden rounded-2xl border border-cyan-200/30 bg-slate-950/60 p-5 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.28),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.26),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.22),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent animate-pulse" />
      <div className="relative grid gap-5 md:grid-cols-[160px_1fr] items-center">
        <div className="relative mx-auto h-32 w-32">
          <div className="absolute inset-0 rounded-full border border-cyan-300/30" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-cyan-300 border-r-fuchsia-400 animate-spin" />
          <div className="absolute inset-6 rounded-full border-2 border-transparent border-b-emerald-300 border-l-blue-300 animate-[spin_1.4s_linear_infinite_reverse]" />
          <div className="absolute inset-10 rounded-full bg-cyan-300/15 blur-sm" />
          <div className="absolute inset-12 rounded-full bg-white shadow-[0_0_28px_rgba(34,211,238,0.9)]" />
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.95)] animate-pulse" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">AI pronunciation scan</p>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-white">Analizando lectura...</p>
          <div className="mt-4 flex h-14 items-end gap-1.5">
            {Array.from({ length: 22 }).map((_, index) => (
              <span
                key={index}
                className="w-full rounded-t bg-gradient-to-t from-cyan-400 via-blue-300 to-fuchsia-300 shadow-[0_0_12px_rgba(34,211,238,0.45)] animate-pulse"
                style={{
                  height: `${18 + ((index * 13) % 34)}px`,
                  animationDelay: `${index * 55}ms`,
                  animationDuration: `${650 + (index % 5) * 90}ms`,
                }}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-white/75">
            <span className="rounded-lg border border-cyan-200/20 bg-cyan-300/10 px-2 py-2 text-center">Audio</span>
            <span className="rounded-lg border border-fuchsia-200/20 bg-fuchsia-300/10 px-2 py-2 text-center">Words</span>
            <span className="rounded-lg border border-emerald-200/20 bg-emerald-300/10 px-2 py-2 text-center">Score</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WordList({ title, words, tone }: { title: string; words: string[]; tone: 'emerald' | 'amber' | 'sky' | 'violet' }) {
  const toneClass = {
    emerald: 'bg-emerald-100 text-emerald-900',
    amber: 'bg-amber-100 text-amber-950',
    sky: 'bg-sky-100 text-sky-900',
    violet: 'bg-violet-100 text-violet-900',
  }[tone];

  return (
    <div>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-white/70">{title}</p>
      <div className="flex flex-wrap gap-2">
        {words.length > 0 ? words.slice(0, 8).map((word, index) => (
          <span key={`${word}-${index}`} className={`rounded-lg px-2.5 py-1 text-xs font-extrabold ${toneClass}`}>
            {word}
          </span>
        )) : (
          <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white/70">
            {title === 'Revisar' ? 'Todo limpio' : title === 'Extra' ? 'Sin palabras extra' : 'Excelente'}
          </span>
        )}
      </div>
    </div>
  );
}
