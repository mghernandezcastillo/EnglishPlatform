import { Eye, EyeOff, LockKeyhole, LogIn, ShieldCheck, UserRoundPlus } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { useBrand } from '../hooks/useBrand';
import { supabase } from '../lib/supabase';
import { StaffUser, staffFromUser } from '../lib/staffAuth';
import { BrandWordmark } from './BrandWordmark';

interface RoleSelectionProps {
  onSelectTeacher: (staff?: StaffUser) => void;
  currentStaff?: StaffUser | null;
}

type BootstrapState = 'checking' | 'available' | 'unavailable' | 'setup-required';

export function RoleSelection({ onSelectTeacher, currentStaff }: RoleSelectionProps) {
  const { brand } = useBrand();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [bootstrapState, setBootstrapState] = useState<BootstrapState>('checking');
  const [setupMessage, setSetupMessage] = useState('');

  useEffect(() => {
    let active = true;
    fetch('/api/auth/bootstrap-status')
      .then(async response => {
        const result = await response.json();
        if (response.status === 503 && result.migrationReady === false) {
          if (active) {
            setSetupMessage(result.error || 'Falta aplicar la migración de Agenda Maven.');
            setBootstrapState('setup-required');
          }
          return null;
        }
        if (!response.ok) throw new Error('No disponible');
        return result;
      })
      .then(result => {
        if (active && result) setBootstrapState(result.canBootstrap ? 'available' : 'unavailable');
      })
      .catch(() => {
        if (active) setBootstrapState('unavailable');
      });
    return () => { active = false; };
  }, []);

  const login = async (loginEmail = email, loginPassword = password) => {
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim(),
      password: loginPassword
    });
    if (authError) throw new Error('Correo o contraseña incorrectos.');
    const staff = staffFromUser(data.user);
    if (!staff) {
      await supabase.auth.signOut();
      throw new Error('Esta cuenta no tiene permisos de profesor.');
    }
    onSelectTeacher(staff);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await login();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'No fue posible iniciar sesión.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleBootstrap = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/auth/bootstrap-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password, fullName: fullName.trim() })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'No fue posible crear el administrador.');
      await login(email, password);
      setBootstrapState('unavailable');
    } catch (bootstrapError) {
      setError(bootstrapError instanceof Error ? bootstrapError.message : 'No fue posible crear el administrador.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[88vh] flex items-center justify-center p-4 sm:p-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-slate-950 p-8 text-white sm:p-12">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-400/20" />
          <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between">
            <div>
              {brand.logoUrl && (
                <img src={brand.logoUrl} alt={brand.name} className="mb-7 h-20 w-20 rounded-2xl bg-white object-contain p-2 shadow-xl" />
              )}
              <BrandWordmark name={brand.name.toUpperCase()} subtitle="Agenda y aula virtual" className="[&_h1]:text-white [&_p]:text-cyan-200" />
            </div>
            <div>
              <p className="text-3xl font-black leading-tight sm:text-4xl">Tu agenda, tus estudiantes y tus ingresos en un solo lugar.</p>
              <div className="mt-6 flex items-center gap-3 text-sm font-bold text-indigo-100">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
                Sesión segura y persistente con Supabase
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-12">
          {currentStaff ? (
            <div className="flex h-full min-h-[420px] flex-col justify-center">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">Sesión activa</p>
              <h1 className="mt-2 text-3xl font-black text-slate-950">Hola, {currentStaff.fullName}</h1>
              <p className="mt-3 text-slate-500">Tu sesión continuará activa al refrescar o volver a abrir el navegador.</p>
              <button
                type="button"
                onClick={() => onSelectTeacher(currentStaff)}
                className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-black text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                <LogIn className="h-5 w-5" /> Entrar al panel
              </button>
            </div>
          ) : bootstrapState === 'setup-required' ? (
            <div className="flex h-full min-h-[420px] flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">Activación necesaria</p>
              <h1 className="mt-2 text-3xl font-black text-slate-950">Activa la base de datos</h1>
              <p className="mt-3 text-slate-600">{setupMessage}</p>
              <code className="mt-5 rounded-xl bg-slate-100 p-4 text-sm font-bold text-indigo-700">supabase/migrations/20260903_agenda_maven.sql</code>
              <button type="button" onClick={() => window.location.reload()} className="mt-6 min-h-12 rounded-xl bg-amber-600 px-5 font-black text-white hover:bg-amber-700">Ya la ejecuté · Comprobar</button>
            </div>
          ) : bootstrapState === 'available' ? (
            <form onSubmit={handleBootstrap} className="flex h-full flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <UserRoundPlus className="h-7 w-7" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">Configuración inicial</p>
              <h1 className="mt-2 text-3xl font-black text-slate-950">Crea el administrador</h1>
              <p className="mb-7 mt-2 text-sm text-slate-500">Esta opción desaparece cuando existe la primera cuenta.</p>
              <AuthFields
                email={email}
                password={password}
                fullName={fullName}
                showPassword={showPassword}
                includeName
                onEmail={setEmail}
                onPassword={setPassword}
                onFullName={setFullName}
                onTogglePassword={() => setShowPassword(value => !value)}
              />
              {error && <p className="mt-4 rounded-xl bg-rose-50 p-3 text-sm font-bold text-rose-700">{error}</p>}
              <button disabled={submitting || !email || !password || !fullName} className="mt-6 min-h-14 rounded-2xl bg-violet-600 px-6 py-4 text-lg font-black text-white transition hover:bg-violet-700 disabled:bg-slate-300">
                {submitting ? 'Creando cuenta…' : 'Crear cuenta y entrar'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="flex h-full flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <LockKeyhole className="h-7 w-7" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">Acceso de personal</p>
              <h1 className="mt-2 text-3xl font-black text-slate-950">Inicia sesión</h1>
              <p className="mb-7 mt-2 text-sm text-slate-500">Usa el correo y la contraseña asignados por el administrador.</p>
              <AuthFields
                email={email}
                password={password}
                fullName=""
                showPassword={showPassword}
                onEmail={setEmail}
                onPassword={setPassword}
                onFullName={setFullName}
                onTogglePassword={() => setShowPassword(value => !value)}
              />
              {error && <p className="mt-4 rounded-xl bg-rose-50 p-3 text-sm font-bold text-rose-700">{error}</p>}
              <button disabled={submitting || !email || !password} className="mt-6 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-black text-white transition hover:bg-indigo-700 disabled:bg-slate-300">
                <LogIn className="h-5 w-5" /> {submitting ? 'Ingresando…' : 'Ingresar'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

interface AuthFieldsProps {
  email: string;
  password: string;
  fullName: string;
  showPassword: boolean;
  includeName?: boolean;
  onEmail: (value: string) => void;
  onPassword: (value: string) => void;
  onFullName: (value: string) => void;
  onTogglePassword: () => void;
}

function AuthFields({ email, password, fullName, showPassword, includeName, onEmail, onPassword, onFullName, onTogglePassword }: AuthFieldsProps) {
  return (
    <div className="space-y-4">
      {includeName && (
        <label className="block text-sm font-bold text-slate-700">
          Nombre completo
          <input value={fullName} onChange={event => onFullName(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border-2 border-slate-200 px-4 outline-none focus:border-violet-500" placeholder="Nombre del administrador" autoComplete="name" />
        </label>
      )}
      <label className="block text-sm font-bold text-slate-700">
        Correo
        <input type="email" value={email} onChange={event => onEmail(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border-2 border-slate-200 px-4 outline-none focus:border-indigo-500" placeholder="profesor@mavenenglish.com" autoComplete="email" />
      </label>
      <label className="block text-sm font-bold text-slate-700">
        Contraseña
        <span className="relative mt-2 block">
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={event => onPassword(event.target.value)} className="min-h-12 w-full rounded-xl border-2 border-slate-200 px-4 pr-12 outline-none focus:border-indigo-500" placeholder="Mínimo 8 caracteres" autoComplete={includeName ? 'new-password' : 'current-password'} />
          <button type="button" onClick={onTogglePassword} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-500" aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </span>
      </label>
    </div>
  );
}
