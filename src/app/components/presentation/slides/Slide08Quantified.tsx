import { Database, TrendingDown, Shield, Target } from 'lucide-react';

export function Slide08Quantified() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Impacto Económico Cuantificado
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
        <p className="text-muted-foreground mt-4">Escenario Base: 25.000 Tn | 45M€ en mercancía</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-6 rounded-2xl border border-[rgb(var(--onus-turquoise-rgb))]/30 text-center">
          <TrendingDown className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Reducción de Merma</h3>
          <p className="text-4xl font-bold text-[rgb(var(--onus-turquoise-rgb))] mb-2">450.000€</p>
          <p className="text-sm text-muted-foreground">Ahorro anual estimado</p>
        </div>

        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-6 rounded-2xl border border-[rgb(var(--onus-turquoise-rgb))]/30 text-center">
          <Shield className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Menos Reclamaciones</h3>
          <p className="text-4xl font-bold text-[rgb(var(--onus-turquoise-rgb))] mb-2">120.000€</p>
          <p className="text-sm text-muted-foreground">Ahorro anual estimado</p>
        </div>

        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-6 rounded-2xl border border-[rgb(var(--onus-turquoise-rgb))]/30 text-center">
          <Target className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Mejora OTIF + Costes</h3>
          <p className="text-4xl font-bold text-[rgb(var(--onus-turquoise-rgb))] mb-2">170-270k€</p>
          <p className="text-sm text-muted-foreground">Ahorro anual estimado</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-10 rounded-3xl flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <Database className="w-16 h-16 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h2 className="text-3xl text-white font-semibold mb-3">Impacto Total Anual</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 p-6 rounded-2xl">
            <p className="text-white/70 text-sm mb-2">Rango Estimado</p>
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold">740-840k€</p>
          </div>

          <div className="text-center bg-white/10 p-6 rounded-2xl">
            <p className="text-white/70 text-sm mb-2">Potencial Máximo</p>
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold">~1M€</p>
          </div>
        </div>

        <p className="text-white/70 text-center mt-8">
          Basado en datos reales de implementaciones similares
        </p>
      </div>
    </div>
  );
}
