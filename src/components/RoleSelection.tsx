import { Check, Eye, EyeOff, LockKeyhole, LogIn, ShieldCheck, UserRoundPlus } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { useBrand } from '../hooks/useBrand';
import { supabase } from '../lib/supabase';
import { StaffUser, staffFromUser } from '../lib/staffAuth';

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

  const brandWords = (brand.name || 'Maven English').trim().split(/\s+/);
  const firstWord = brandWords[0] || 'MAVEN';
  const restWords = brandWords.slice(1).join(' ') || 'ENGLISH';

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
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.14)] lg:grid-cols-[0.95fr_1.05fr]">
        {/* Panel izquierdo: Identidad de Marca Maven */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#060D1E] via-[#0A1935] to-[#040914] p-8 text-white sm:p-12">
          {/* Luces ambientales con los tonos exactos del logo (Cyan & Royal Blue) */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />

          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
            {/* Cabecera de Marca */}
            <div>
              <div className="flex items-center gap-4">
                {brand.logoUrl && (
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-30 blur-sm" />
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className="relative h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_10px_20px_rgba(2,132,199,0.35)] transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">{firstWord}</span>
                    <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      {restWords}
                    </span>
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-sky-300 uppercase backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Agenda & Aula Virtual
                  </div>
                </div>
              </div>
            </div>

            {/* Propuesta de Valor */}
            <div className="my-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white">
                Tu agenda, tus estudiantes y tus ingresos en{' '}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  un solo lugar.
                </span>
              </h2>
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Gestión ágil de horarios y asistencias</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Aula interactiva con speaking y quizzes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Seguimiento financiero y métricas en tiempo real</span>
                </div>
              </div>
            </div>

            {/* Insignia de Confianza / Seguridad */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-sky-200 backdrop-blur-md shadow-inner">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Sesión segura y persistente con Supabase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel derecho: Formulario de Acceso */}
        <div className="flex flex-col justify-center p-8 sm:p-12 bg-white">
          {currentStaff ? (
            <div className="flex h-full min-h-[420px] flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-sm">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Sesión activa</p>
              <h1 className="mt-1 text-3xl font-black text-slate-900 tracking-tight">Hola, {currentStaff.fullName}</h1>
              <p className="mt-2 text-sm text-slate-500">Tu sesión continuará activa al refrescar o volver a abrir el navegador.</p>
              <button
                type="button"
                onClick={() => onSelectTeacher(currentStaff)}
                className="mt-8 flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] px-6 py-3.5 text-base font-black text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                <LogIn className="h-5 w-5" /> Entrar al panel
              </button>
            </div>
          ) : bootstrapState === 'setup-required' ? (
            <div className="flex h-full min-h-[420px] flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 shadow-sm">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">Activación necesaria</p>
              <h1 className="mt-1 text-3xl font-black text-slate-900 tracking-tight">Activa la base de datos</h1>
              <p className="mt-2 text-sm text-slate-600">{setupMessage}</p>
              <code className="mt-5 rounded-xl bg-slate-100 p-4 text-xs font-bold text-blue-700 break-all">supabase/migrations/20260903_agenda_maven.sql</code>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 min-h-12 rounded-xl bg-amber-600 px-5 font-black text-white hover:bg-amber-700 transition"
              >
                Ya la ejecuté · Comprobar
              </button>
            </div>
          ) : bootstrapState === 'available' ? (
            <form onSubmit={handleBootstrap} className="flex h-full flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                <UserRoundPlus className="h-7 w-7" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Configuración inicial</p>
              <h1 className="mt-1 text-3xl font-black text-slate-900 tracking-tight">Crea el administrador</h1>
              <p className="mb-6 mt-2 text-sm text-slate-500">Esta opción desaparece cuando existe la primera cuenta.</p>
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
              {error && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-sm font-semibold text-rose-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  {error}
                </div>
              )}
              <button
                disabled={submitting || !email || !password || !fullName}
                className="mt-6 min-h-13 w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] px-6 py-3.5 text-base font-black text-white shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Creando cuenta…' : 'Crear cuenta y entrar'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="flex h-full flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                <LockKeyhole className="h-7 w-7" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Acceso de personal</p>
              <h1 className="mt-1 text-3xl font-black text-slate-900 tracking-tight">Inicia sesión</h1>
              <p className="mb-6 mt-2 text-sm text-slate-500">Usa el correo y la contraseña asignados por el administrador.</p>
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
              {error && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-sm font-semibold text-rose-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  {error}
                </div>
              )}
              <button
                disabled={submitting || !email || !password}
                className="mt-6 flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] px-6 py-3.5 text-base font-black text-white shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Nombre completo
          <input
            value={fullName}
            onChange={event => onFullName(event.target.value)}
            className="mt-1.5 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            placeholder="Nombre del administrador"
            autoComplete="name"
          />
        </label>
      )}
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
        Correo
        <input
          type="email"
          value={email}
          onChange={event => onEmail(event.target.value)}
          className="mt-1.5 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          placeholder="profesor@mavenenglish.com"
          autoComplete="email"
        />
      </label>
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
        Contraseña
        <span className="relative mt-1.5 block">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={event => onPassword(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 pr-12 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            placeholder="Mínimo 8 caracteres"
            autoComplete={includeName ? 'new-password' : 'current-password'}
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-slate-600"
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </span>
      </label>
    </div>
  );
}
