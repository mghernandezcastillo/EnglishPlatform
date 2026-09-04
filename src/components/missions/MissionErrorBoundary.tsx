import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ArrowLeft, RefreshCw, ShieldAlert } from 'lucide-react';

interface MissionErrorBoundaryProps {
  children: ReactNode;
  missionKey: string;
  onExit: () => void;
}

interface MissionErrorBoundaryState {
  hasError: boolean;
}

export class MissionErrorBoundary extends Component<
  MissionErrorBoundaryProps,
  MissionErrorBoundaryState
> {
  state: MissionErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): MissionErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Mission runner recovered from an error:', error, info);
  }

  componentDidUpdate(previousProps: MissionErrorBoundaryProps) {
    if (previousProps.missionKey !== this.props.missionKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  private retry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 p-5 text-white">
        <div className="flex w-full max-w-lg flex-col items-center rounded-3xl border border-white/25 bg-black/25 p-7 text-center shadow-2xl backdrop-blur-md">
          <ShieldAlert className="h-16 w-16 text-amber-300" aria-hidden="true" />
          <h1 className="mt-4 text-2xl font-black sm:text-3xl">La misión tuvo un inconveniente</h1>
          <p className="mt-3 text-base font-semibold text-white/85">
            Tu pantalla ya no quedará en blanco. Puedes volver a cargar esta tarea o regresar a las misiones.
          </p>
          <div className="mt-7 grid w-full gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={this.retry}
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 font-black text-purple-700 shadow-lg transition hover:bg-purple-50"
            >
              <RefreshCw className="h-5 w-5" />
              Reintentar tarea
            </button>
            <button
              type="button"
              onClick={this.props.onExit}
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-5 font-black text-white transition hover:bg-white/25"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver a misiones
            </button>
          </div>
        </div>
      </div>
    );
  }
}
