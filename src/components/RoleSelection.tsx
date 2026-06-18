import { Lock } from 'lucide-react';
import { useState } from 'react';
import { useBrand } from '../hooks/useBrand';

interface RoleSelectionProps {
  onSelectTeacher: () => void;
  onSelectStudent?: () => void; 
}

export function RoleSelection({ onSelectTeacher }: RoleSelectionProps) {
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
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center">
        {brand.logoUrl && (
           <img src={brand.logoUrl} alt={brand.name} className="w-24 h-24 object-contain rounded-xl shadow-sm mx-auto mb-6" />
        )}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Acceso Profesor</h1>
        <h2 className="text-xl text-gray-500 mb-8">{brand.name}</h2>
        
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
              window.location.reload();
            }}
            className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-widest"
          >
            ⚠️ Limpiar datos locales guardados ⚠️
          </button>
        </div>
      </div>
    </div>
  );
}
