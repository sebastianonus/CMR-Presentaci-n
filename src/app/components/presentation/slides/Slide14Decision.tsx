import { Calendar, BarChart3, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export function Slide14Decision() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Decisión Estratégica y Plan de Activación
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-destructive/5 border-2 border-destructive/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-7 h-7 text-destructive" />
            <h2 className="text-2xl font-semibold text-destructive">Modelo Tradicional</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Gestión reactiva</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Costes variables imprevistos</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Limitada visibilidad</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <p className="text-foreground/70">Proveedor transaccional</p>
            </li>
          </ul>
        </div>

        <div className="bg-[rgb(var(--onus-turquoise-rgb))]/5 border-2 border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-7 h-7 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h2 className="text-2xl font-semibold text-[rgb(var(--onus-turquoise-rgb))]">Modelo ONUS</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2 flex-shrink-0" />
              <p className="text-foreground/80 font-medium">Gestión predictiva</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2 flex-shrink-0" />
              <p className="text-foreground/80 font-medium">Control del margen</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2 flex-shrink-0" />
              <p className="text-foreground/80 font-medium">Visibilidad total en tiempo real</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--onus-turquoise-rgb))] mt-2 flex-shrink-0" />
              <p className="text-foreground/80 font-medium">Partner estratégico</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl">
        <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-6">Cronograma de Activación</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              <span className="text-[rgb(var(--onus-turquoise-rgb))] text-2xl font-bold">30 días</span>
            </div>
            <p className="text-white">Inicio del piloto estratégico</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              <span className="text-[rgb(var(--onus-turquoise-rgb))] text-2xl font-bold">90 días</span>
            </div>
            <p className="text-white">Medición de impacto real</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              <span className="text-[rgb(var(--onus-turquoise-rgb))] text-2xl font-bold">Escalado</span>
            </div>
            <p className="text-white">Según resultados obtenidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
