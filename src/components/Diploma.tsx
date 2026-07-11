import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';

interface DiplomaProps {
  studentName: string;
  levelName: string;
  score: number;
  total: number;
  brandName: string;
  logoUrl?: string;
}

export function Diploma({ studentName, levelName, score, total, brandName, logoUrl }: DiplomaProps) {
  const diplomaRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!diplomaRef.current) return;
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(diplomaRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const link = document.createElement('a');
      link.download = `Diploma_${studentName.replace(/\s+/g, '_')}_${levelName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Error generating diploma:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const percentage = Math.round((score / total) * 100);
  const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full bg-emerald-600 disabled:bg-emerald-400 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 mb-4"
      >
        <Download className="w-5 h-5" />
        {isDownloading ? 'Generando...' : 'Descargar Diploma'}
      </button>

      {/* Hidden diploma container for capturing. We position it absolute and off-screen to avoid disrupting UI, but it must be in the DOM and visible for html2canvas to render it nicely */}
      <div className="overflow-hidden w-0 h-0 absolute -left-[9999px]">
        <div 
          ref={diplomaRef}
          style={{ width: '800px', height: '600px' }}
          className="bg-white relative flex flex-col items-center justify-center border-[16px] border-emerald-900 p-12 shadow-2xl overflow-hidden font-sans"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent opacity-50"></div>
          </div>
          <div className="absolute top-4 left-4 w-32 h-32 border-t-4 border-l-4 border-emerald-700"></div>
          <div className="absolute top-4 right-4 w-32 h-32 border-t-4 border-r-4 border-emerald-700"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 border-b-4 border-l-4 border-emerald-700"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 border-b-4 border-r-4 border-emerald-700"></div>

          <div className="relative z-10 w-full flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              {logoUrl && <img referrerPolicy="no-referrer" src={logoUrl} crossOrigin="anonymous" alt="Logo" className="w-20 h-20 object-contain rounded-xl" />}
              <h1 className="text-4xl font-extrabold text-emerald-900 uppercase tracking-widest">{brandName}</h1>
            </div>

            <div className="text-center">
              <h2 className="text-6xl font-black text-gray-900 tracking-tight leading-none mb-2" style={{ fontFamily: 'Georgia, serif' }}>CERTIFICATE</h2>
              <h3 className="text-2xl font-bold text-gray-500 tracking-widest uppercase">OF ACHIEVEMENT</h3>
            </div>

            <p className="text-lg text-gray-600 mt-6 italic">This is proudly presented to</p>

            <div className="w-full flex justify-center border-b-2 border-emerald-500 pb-2 mb-2 w-3/4 mx-auto">
              <h1 className="text-5xl font-bold text-gray-800" style={{ fontFamily: 'cursive, Georgia, serif' }}>{studentName}</h1>
            </div>

            <p className="text-gray-600 text-center max-w-lg mt-4 text-lg leading-relaxed">
              For successfully completing the level <strong className="text-gray-900 border-b border-gray-300">{levelName}</strong> with an outstanding score of <strong>{percentage}%</strong>.
            </p>

            <div className="w-full flex justify-between items-end mt-12 px-12">
              <div className="flex flex-col items-center">
                <div className="w-40 border-b-2 border-gray-400 mb-2 font-bold text-gray-800 text-center pb-1">{today}</div>
                <span className="text-sm font-bold text-gray-500 uppercase">Date</span>
              </div>
              
              <div className="w-24 h-24 rounded-full border-4 border-amber-400 bg-amber-50 flex items-center justify-center shadow-lg relative transform rotate-12">
                 <div className="text-center">
                    <div className="text-[10px] font-bold text-amber-600 uppercase">Passed</div>
                    <div className="text-xl font-black text-amber-500">* {score}/{total} *</div>
                 </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-40 border-b-2 border-gray-400 mb-2 font-bold text-gray-800 text-center flex items-center justify-center pb-1">
                   {/* Signature mock */}
                   <span style={{ fontFamily: 'cursive', fontSize: '24px' }}>{brandName}</span>
                </div>
                <span className="text-sm font-bold text-gray-500 uppercase">Verified Instructor</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
