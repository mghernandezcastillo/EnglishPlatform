import { Award } from 'lucide-react';
import { useCurriculum } from '../hooks/useCurriculum';
import { useBrand } from '../hooks/useBrand';
import { Diploma } from './Diploma';

interface CertificateViewProps {
  levelId: string;
}

export function CertificateView({ levelId }: CertificateViewProps) {
  const params = new URLSearchParams(window.location.search);
  const studentName = params.get('student')?.trim() || 'Student';
  const studentType = params.get('type') || 'adulto';
  const fallbackTitle = params.get('levelTitle')?.trim() || 'English Level';
  const { curriculumLevels } = useCurriculum(studentType);
  const level = curriculumLevels.find((item) => item.id === levelId);
  const { brand } = useBrand();
  const brandName = studentType === 'niño'
    ? 'Maven English for kids'
    : studentType === 'adolescente'
      ? 'Maven English for teens'
      : brand.name;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-300/15 px-4 py-2 text-sm font-black uppercase tracking-wider text-amber-200 ring-1 ring-amber-200/25">
            <Award className="h-5 w-5" /> Certificado en línea
          </span>
          <h1 className="mt-4 break-words text-3xl font-black sm:text-5xl">Certificado de {studentName}</h1>
          <p className="mt-2 font-semibold text-blue-100">Puedes verlo en línea o descargarlo como imagen.</p>
        </div>

        <div className="rounded-[2rem] bg-white p-4 text-slate-900 shadow-2xl sm:p-7">
          <Diploma
            studentName={studentName}
            levelName={level?.title || fallbackTitle}
            brandName={brandName}
            logoUrl={brand.logoUrl}
            certificateKind="level"
            levelId={levelId}
            studentType={studentType}
          />
        </div>
      </div>
    </main>
  );
}
