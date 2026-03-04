import { ArrowRight, AlertCircle, Zap } from 'lucide-react';

export function Slide03Flow() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Flujo Operativo Actual vs. Arquitectura ONUS
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {/* Flujo Actual */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <h2 className="text-2xl text-destructive font-semibold">Flujo Actual (Reactivo)</h2>
          </div>
          
          <div className="bg-destructive/5 border-2 border-destructive/30 rounded-2xl p-6 flex-1 flex flex-col justify-around">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <p className="text-foreground/70">Gestión documental reactiva</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <p className="text-foreground/70">Control térmico limitado</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <p className="text-foreground/70">FEFO estándar</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <p className="text-foreground/70">Gestión correctiva de incidencias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Arquitectura ONUS */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold">Arquitectura ONUS (Evolución)</h2>
          </div>
          
          <div className="bg-[rgb(var(--onus-turquoise-rgb))]/5 border-2 border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-6 flex-1 flex flex-col justify-around">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2" />
                <p className="text-foreground/80 font-medium">Validación documental preventiva</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2" />
                <p className="text-foreground/80 font-medium">Visibilidad termica 24/7 en tiempo real</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2" />
                <p className="text-foreground/80 font-medium">Protocolos FEFO dinámicos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2" />
                <p className="text-foreground/80 font-medium">Análisis predictivo de riesgo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <div className="bg-gradient-to-r from-destructive/20 via-[rgb(var(--onus-turquoise-rgb))]/20 to-[rgb(var(--onus-turquoise-rgb))]/40 px-8 py-4 rounded-full flex items-center gap-4">
          <span className="text-sm font-medium">Transformación</span>
          <ArrowRight className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
          <span className="text-sm font-medium">Mejora Continua</span>
        </div>
      </div>
    </div>
  );
}
