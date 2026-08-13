import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Check, Copy, Download } from 'lucide-react';

interface DiplomaProps {
  studentName: string;
  levelName: string;
  brandName: string;
  logoUrl?: string;
  certificateKind?: 'level' | 'exam';
  levelId?: string;
  studentType?: string;
  className?: string;
}

function safeFileName(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80);
}

function USFlagMark() {
  return (
    <div className="relative h-[3.4cqw] w-[5.5cqw] overflow-hidden rounded-sm border border-slate-200 shadow-sm">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#b91c1c_0,#b91c1c_7.69%,#ffffff_7.69%,#ffffff_15.38%)]" />
      <div className="absolute left-0 top-0 h-[54%] w-[46%] bg-[#1e3a8a]" />
      <div className="absolute left-1 top-1 grid grid-cols-4 gap-[2px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} className="h-[2px] w-[2px] rounded-full bg-white" />
        ))}
      </div>
    </div>
  );
}

export function Diploma({
  studentName,
  levelName,
  brandName,
  logoUrl,
  certificateKind = 'level',
  levelId,
  studentType = 'adulto',
  className = ''
}: DiplomaProps) {
  const diplomaRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const displayStudentName = studentName?.trim() || 'Student';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const fileName = `Maven_English_Diploma_${safeFileName(displayStudentName)}_${safeFileName(levelName)}.png`;
  const certificateParams = new URLSearchParams({
    certificado: levelId || '',
    student: displayStudentName,
    type: studentType,
    levelTitle: levelName,
  });
  const certificateUrl = `${window.location.origin}/?${certificateParams.toString()}`;
  const shareText = `¡${displayStudentName} completó ${levelName} en ${brandName}! Puedes ver o descargar el certificado aquí: ${certificateUrl}`;
  const certificateTitle = 'CERTIFICATE OF COMPLETION';
  const subtitle = certificateKind === 'exam' ? 'Final Course Requirement Completed' : 'English Level Completed';
  const certificateId = `ME-${safeFileName(levelName).slice(0, 10).toUpperCase() || 'LEVEL'}-${new Date().getFullYear()}-${safeFileName(displayStudentName).slice(0, 6).toUpperCase() || 'STUDNT'}`;

  const generateBlob = async () => {
    if (!diplomaRef.current) return null;
    await document.fonts?.ready;
    const canvas = await html2canvas(diplomaRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      ignoreElements: (element) => {
        if (element.tagName !== 'IMG') return false;
        const image = element as HTMLImageElement;
        try {
          return new URL(image.src, window.location.href).origin !== window.location.origin;
        } catch {
          return true;
        }
      },
    });

    return new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png', 1);
    });
  };

  const downloadDiploma = async () => {
    setIsGenerating(true);
    setDownloadStatus('idle');
    try {
      const blob = await generateBlob();
      if (!blob) throw new Error('No se pudo crear la imagen del certificado.');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
      // Revoking immediately cancels downloads in some mobile browsers.
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setDownloadStatus('success');
      window.setTimeout(() => setDownloadStatus('idle'), 2500);
    } catch (err) {
      console.error('Error generating diploma:', err);
      setDownloadStatus('error');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyWhatsAppMessage = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          onClick={downloadDiploma}
          disabled={isGenerating}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 px-5 py-4 text-base font-black text-white shadow-lg shadow-blue-900/15 transition hover:from-blue-800 hover:to-blue-600 disabled:opacity-60"
        >
          <Download className="h-5 w-5" />
          {isGenerating
            ? 'Generando...'
            : downloadStatus === 'success'
              ? 'Descarga iniciada'
              : 'Descargar certificado'}
        </button>
        <button
          onClick={copyWhatsAppMessage}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-4 text-base font-black text-white shadow-lg shadow-emerald-900/15 transition hover:from-emerald-500 hover:to-green-500"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
          {copied ? 'Mensaje copiado' : 'Copiar mensaje para WhatsApp'}
        </button>
      </div>

      {downloadStatus === 'error' && (
        <p className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-black text-rose-700">
          No se pudo generar el certificado. Actualiza la página e inténtalo de nuevo.
        </p>
      )}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
        <div
          ref={diplomaRef}
          className="relative flex aspect-[4/3] w-full overflow-hidden bg-white text-slate-950 [container-type:inline-size]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_62%,#f8fafc_62%,#f8fafc_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[18%] bg-[#0b2f6b]" />
          <div className="absolute left-[18%] top-0 h-full w-[1cqw] bg-[#d71920]" />
          <div className="absolute right-0 top-0 h-[1.8cqw] w-[48%] bg-[#0b2f6b]" />
          <div className="absolute right-0 top-[1.8cqw] h-[.7cqw] w-[36%] bg-[#d71920]" />
          <div className="absolute bottom-0 right-0 h-[1.8cqw] w-[55%] bg-[#0b2f6b]" />
          <div className="absolute bottom-[1.8cqw] right-0 h-[.7cqw] w-[32%] bg-[#d71920]" />
          <div className="absolute left-[7%] top-[8%] -translate-x-1/2">
            <USFlagMark />
          </div>
          <div className="absolute bottom-[8%] left-[7%] -translate-x-1/2">
            <USFlagMark />
          </div>

          <div className="relative z-10 ml-[21%] flex h-full flex-1 flex-col px-[6%] py-[5%]">
            <div className="flex min-w-0 items-start justify-between gap-[2cqw]">
              <div className="flex min-w-0 items-center gap-[1.4cqw] text-left">
                {logoUrl && (
                  <img
                    referrerPolicy="no-referrer"
                    src={logoUrl}
                    crossOrigin="anonymous"
                    alt={brandName}
                    className="h-[5.5cqw] w-[5.5cqw] shrink-0 rounded-[1cqw] border border-slate-200 object-contain shadow-sm"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-[clamp(4px,1.05cqw,12px)] font-black uppercase tracking-[0.25em] text-blue-900">English Language Programme</p>
                  <h1 className="mt-[.4cqw] break-words text-[clamp(7px,2.5cqw,30px)] font-black uppercase leading-none text-slate-950">{brandName}</h1>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[clamp(3px,.9cqw,11px)] font-black uppercase tracking-[0.18em] text-slate-400">Certificate ID</p>
                <p className="mt-[.3cqw] text-[clamp(4px,1.15cqw,14px)] font-black text-blue-900">{certificateId}</p>
              </div>
            </div>

            <div className="mt-[7%] text-left">
              <p className="mb-[1cqw] text-[clamp(4px,1.2cqw,14px)] font-black uppercase tracking-[0.32em] text-red-600">{subtitle}</p>
              <h2 className="max-w-[92%] text-[clamp(16px,5cqw,60px)] font-black leading-[0.9] tracking-tight text-blue-950">{certificateTitle}</h2>
            </div>

            <div className="mt-[5%] text-left">
              <p className="text-[clamp(5px,1.5cqw,18px)] font-bold text-slate-500">This certificate is awarded to</p>
              <div className="mt-[1cqw] border-b-[clamp(1px,.35cqw,4px)] border-red-600 pb-[1cqw]">
                <p className="break-words text-[clamp(16px,5cqw,60px)] font-black leading-none text-slate-950" style={{ fontFamily: 'Georgia, serif' }}>
                {displayStudentName}
                </p>
              </div>
            </div>

            <p className="mt-[4%] max-w-[88%] text-left text-[clamp(5px,1.7cqw,20px)] font-bold leading-snug text-slate-700">
              in recognition of successful completion of <span className="text-blue-950">{levelName}</span> as part of the Maven English learning pathway.
            </p>

            <div className="mt-auto grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-[2.5cqw]">
              <div className="min-w-0 text-left">
                <div className="border-b border-slate-400 pb-[.6cqw] text-[clamp(4px,1.3cqw,16px)] font-black">{today}</div>
                <p className="mt-[.6cqw] text-[clamp(3px,.9cqw,12px)] font-black uppercase tracking-[0.18em] text-slate-500">Date of issue</p>
              </div>
              <div className="relative flex h-[9cqw] w-[9cqw] items-center justify-center rounded-full border-[clamp(2px,.5cqw,6px)] border-blue-900 bg-white shadow-xl">
                <div className="absolute inset-[.7cqw] rounded-full border-[clamp(1px,.18cqw,2px)] border-red-600" />
                <div>
                  <p className="text-[clamp(3px,.8cqw,10px)] font-black uppercase tracking-[0.14em] text-blue-900">Certified</p>
                  <p className="text-[clamp(7px,2cqw,24px)] font-black text-red-600">EN</p>
                </div>
              </div>
              <div className="min-w-0 text-left">
                <div className="break-words border-b border-slate-400 pb-[.6cqw] text-[clamp(5px,1.6cqw,20px)] font-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {brandName}
                </div>
                <p className="mt-[.6cqw] text-[clamp(3px,.9cqw,12px)] font-black uppercase tracking-[0.18em] text-slate-500">Academic direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
