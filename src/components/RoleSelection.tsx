import { Lock } from 'lucide-react';
import { useState } from 'react';
import { useBrand } from '../hooks/useBrand';
import { BrandWordmark } from './BrandWordmark';

interface RoleSelectionProps {
  onSelectTeacher: () => void;
  onSelectStudent?: () => void; 
  isTeacherUnlocked?: boolean;
}

export function RoleSelection({ onSelectTeacher, isTeacherUnlocked = false }: RoleSelectionProps) {
  const { brand } = useBrand();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === brand.teacherPin) {
      onSelectTeacher();
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-2xl">
        <div className="relative overflow-hidden border-b border-indigo-100 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_45%,_#f8faff_100%)] px-8 pb-8 pt-10 text-center sm:px-12">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-cyan-300/20 blur-2xl" />
            <div className="absolute bottom-6 right-10 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-2xl" />
          </div>
          {brand.logoUrl && (
             <img referrerPolicy="no-referrer" src={brand.logoUrl} alt={brand.name} className="relative z-10 mx-auto mb-6 h-24 w-24 rounded-[1.4rem] object-contain shadow-lg ring-1 ring-indigo-100" />
          )}
          <BrandWordmark
            name={brand.name.toUpperCase()}
            subtitle="Academia de Ingles"
            centered
            className="relative z-10"
          />
          <h1 className="relative z-10 mt-8 text-3xl font-extrabold tracking-tight text-gray-900">Acceso Profesor</h1>
        </div>
        <div className="p-8 text-center sm:p-12">
        {isTeacherUnlocked && (
          <div className="mb-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="mb-4 text-sm font-bold text-emerald-800">
              Sesión de profesor recordada en este equipo.
            </p>
            <button
              type="button"
              onClick={onSelectTeacher}
              className="w-full rounded-xl bg-emerald-600 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-emerald-700"
            >
              Entrar sin PIN
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-indigo-600" />
          </div>
          
          <label className="text-sm font-bold text-gray-700 mb-4 block">Ingresa tu PIN de 4 dígitos</label>
          <input 
            type="password" 
            maxLength={4}
            value={pin}
            onChange={e => {
              setPin(e.target.value.replace(/\D/g, ''));
              setError(false);
            }}
            className={`w-32 text-center text-4xl tracking-widest font-mono p-4 border-2 rounded-2xl outline-none transition-all ${error ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'}`}
            placeholder="••••"
            autoFocus
          />
          {error && <p className="text-red-500 font-bold mt-4 animate-bounce">PIN Incorrecto</p>}
          
          <button 
             type="submit"
             disabled={pin.length < 4}
             className="mt-8 w-full bg-indigo-600 disabled:bg-slate-300 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-indigo-700 transition-all"
          >
             Ingresar
          </button>
        </form>

        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <button 
            onClick={() => {
              localStorage.removeItem('mock_students');
              localStorage.removeItem('mock_groups');
              localStorage.removeItem('english_easy_path_progress');
              localStorage.removeItem('maven_teacher_unlocked');
              window.location.reload();
            }}
            className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-widest"
          >
            ⚠️ Limpiar datos locales guardados ⚠️
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
