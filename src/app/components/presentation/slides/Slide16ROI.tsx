import { TrendingUp, DollarSign, Percent, Clock } from 'lucide-react';

export function Slide16ROI() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          ROI Piloto Estratégico
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
        <p className="text-muted-foreground mt-4">Escenario: 6.000 Tn gestionadas (10,8 M€)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <div className="bg-gradient-to-br from-muted/20 to-transparent p-8 rounded-2xl border border-border">
          <h2 className="text-2xl text-[rgb(var(--onus-dark-blue-rgb))] font-semibold mb-6">Inversión</h2>

          <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl">
            <DollarSign className="w-12 h-12 text-[rgb(var(--onus-dark-blue-rgb))] mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Coste de Implementación</p>
            <p className="text-4xl font-bold text-[rgb(var(--onus-dark-blue-rgb))]">45k - 60k€</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/30">
          <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-6">Retorno</h2>

          <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl">
            <TrendingUp className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Ahorro Estimado</p>
            <p className="text-4xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">163.000€</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-3xl">
        <h3 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-6 text-center">Rentabilidad del Piloto</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/15 border-2 border-[rgb(var(--onus-turquoise-rgb))]/60 shadow-xl p-6 rounded-xl flex items-center gap-6">
            <Percent className="w-16 h-16 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0" />
            <div>
              <p className="text-white/70 text-sm mb-1">ROI</p>
              <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold">2,5x - 3x</p>
            </div>
          </div>

          <div className="bg-white/15 border-2 border-[rgb(var(--onus-turquoise-rgb))]/60 shadow-xl p-6 rounded-xl flex items-center gap-6">
            <Clock className="w-16 h-16 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0" />
            <div>
              <p className="text-white/70 text-sm mb-1">Payback</p>
              <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold">&lt; 90d</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-lg">
            <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Inversión recuperada</strong> en menos de 3 meses
          </p>
        </div>
      </div>
    </div>
  );
}
