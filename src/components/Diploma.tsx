import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Download, Mail, Share2, Send } from 'lucide-react';

interface DiplomaProps {
  studentName: string;
  levelName: string;
  brandName: string;
  logoUrl?: string;
  certificateKind?: 'level' | 'exam';
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
    <div className="relative h-10 w-16 overflow-hidden rounded-sm border border-slate-200 shadow-sm">
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
  className = ''
}: DiplomaProps) {
  const diplomaRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const displayStudentName = studentName?.trim() || 'Student';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const fileName = `Maven_English_Diploma_${safeFileName(displayStudentName)}_${safeFileName(levelName)}.png`;
  const shareText = `I completed ${levelName} at ${brandName}. Diploma awarded to ${displayStudentName}.`;
  const certificateTitle = 'CERTIFICATE OF COMPLETION';
  const subtitle = certificateKind === 'exam' ? 'Final Course Requirement Completed' : 'English Level Completed';
  const certificateId = `ME-${safeFileName(levelName).slice(0, 10).toUpperCase() || 'LEVEL'}-${new Date().getFullYear()}-${safeFileName(displayStudentName).slice(0, 6).toUpperCase() || 'STUDNT'}`;

  const generateBlob = async () => {
    if (!diplomaRef.current) return null;
    const canvas = await html2canvas(diplomaRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    return new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png', 1);
    });
  };

  const downloadDiploma = async () => {
    setIsGenerating(true);
    try {
      const blob = await generateBlob();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating diploma:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareDiploma = async () => {
    setIsGenerating(true);
    try {
      const blob = await generateBlob();
      if (!blob) return;
      const file = new File([blob], fileName, { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `${brandName} Diploma`,
          text: shareText,
          files: [file]
        });
      } else {
        await downloadDiploma();
      }
    } catch (err) {
      console.error('Error sharing diploma:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareWhatsApp = () => {
    const message = `${shareText}\n\nDownload or attach the diploma image from this screen.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareEmail = () => {
    const subject = `${brandName} Diploma - ${displayStudentName}`;
    const body = `${shareText}\n\nPlease find my diploma attached or downloaded from the platform.`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          {isGenerating ? 'Generando...' : 'Descargar diploma'}
        </button>
        <button
          onClick={shareDiploma}
          disabled={isGenerating}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-4 text-base font-black text-white shadow-lg shadow-red-900/15 transition hover:from-red-500 hover:to-rose-500 disabled:opacity-60"
        >
          <Share2 className="h-5 w-5" />
          Compartir imagen
        </button>
        <button
          onClick={shareWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-base font-black text-blue-900 transition hover:bg-blue-100"
        >
          <Send className="h-5 w-5" />
          WhatsApp
        </button>
        <button
          onClick={shareEmail}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-black text-slate-800 transition hover:bg-slate-50"
        >
          <Mail className="h-5 w-5" />
          Correo
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
        <div
          ref={diplomaRef}
          className="relative flex aspect-[4/3] w-full overflow-hidden bg-white text-slate-950"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_62%,#f8fafc_62%,#f8fafc_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[18%] bg-[#0b2f6b]" />
          <div className="absolute left-[18%] top-0 h-full w-3 bg-[#d71920]" />
          <div className="absolute right-0 top-0 h-5 w-[48%] bg-[#0b2f6b]" />
          <div className="absolute right-0 top-5 h-2 w-[36%] bg-[#d71920]" />
          <div className="absolute bottom-0 right-0 h-5 w-[55%] bg-[#0b2f6b]" />
          <div className="absolute bottom-5 right-0 h-2 w-[32%] bg-[#d71920]" />
          <div className="absolute left-[7%] top-[8%] -translate-x-1/2">
            <USFlagMark />
          </div>
          <div className="absolute bottom-[8%] left-[7%] -translate-x-1/2">
            <USFlagMark />
          </div>

          <div className="relative z-10 ml-[21%] flex h-full flex-1 flex-col px-[6%] py-[5%]">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                {logoUrl && (
                  <img
                    referrerPolicy="no-referrer"
                    src={logoUrl}
                    crossOrigin="anonymous"
                    alt={brandName}
                    className="h-16 w-16 rounded-xl border border-slate-200 object-contain shadow-sm"
                  />
                )}
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.34em] text-blue-900">English Language Programme</p>
                  <h1 className="mt-1 text-3xl font-black uppercase leading-none text-slate-950">{brandName}</h1>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Certificate ID</p>
                <p className="mt-1 text-sm font-black text-blue-900">{certificateId}</p>
              </div>
            </div>

            <div className="mt-[7%] text-left">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-red-600">{subtitle}</p>
              <h2 className="max-w-[86%] text-6xl font-black leading-[0.9] tracking-tight text-blue-950">{certificateTitle}</h2>
            </div>

            <div className="mt-[5%] text-left">
              <p className="text-lg font-bold text-slate-500">This certificate is awarded to</p>
              <div className="mt-3 border-b-4 border-red-600 pb-3">
                <p className="text-6xl font-black leading-none text-slate-950" style={{ fontFamily: 'Georgia, serif' }}>
                {displayStudentName}
                </p>
              </div>
            </div>

            <p className="mt-[4%] max-w-[82%] text-left text-xl font-bold leading-snug text-slate-700">
              in recognition of successful completion of <span className="text-blue-950">{levelName}</span> as part of the Maven English learning pathway.
            </p>

            <div className="mt-auto grid grid-cols-[1fr_auto_1fr] items-end gap-8">
              <div className="text-left">
                <div className="border-b-2 border-slate-400 pb-2 text-base font-black">{today}</div>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-slate-500">Date of issue</p>
              </div>
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-blue-900 bg-white shadow-xl">
                <div className="absolute inset-2 rounded-full border-2 border-red-600" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-900">Certified</p>
                  <p className="text-2xl font-black text-red-600">EN</p>
                </div>
              </div>
              <div className="text-left">
                <div className="border-b-2 border-slate-400 pb-2 text-xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                  {brandName}
                </div>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-slate-500">Academic direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
