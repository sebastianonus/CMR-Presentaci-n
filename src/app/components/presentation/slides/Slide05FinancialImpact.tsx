import { TrendingDown, AlertTriangle, Target, DollarSign } from 'lucide-react';

export function Slide05FinancialImpact() {
  const levers = [
    {
      icon: TrendingDown,
      title: 'Reducción de Merma',
      value: '0,8% - 1,5%',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
    {
      icon: AlertTriangle,
      title: 'Disminución de Reclamaciones',
      value: '15% - 25%',
      color: 'rgb(var(--onus-dark-blue-rgb))',
    },
    {
      icon: Target,
      title: 'Mejora del OTIF',
      value: '+3% - +6%',
      color: '#0f766e',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Impacto Financiero Potencial
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <h2 className="text-2xl mb-6 text-[rgb(var(--onus-dark-blue-rgb))] font-semibold">Palancas de Mejora</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {levers.map((lever, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-6 rounded-2xl border border-[rgb(var(--onus-turquoise-rgb))]/30 hover:border-[rgb(var(--onus-turquoise-rgb))] transition-all"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl mb-4 mx-auto">
              <lever.icon className="w-8 h-8" style={{ color: lever.color }} />
            </div>
            <h3 className="text-center font-semibold mb-2">{lever.title}</h3>
            <p className="text-center text-3xl font-bold" style={{ color: lever.color }}>
              {lever.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[rgb(var(--onus-dark-blue-rgb))] p-8 rounded-2xl flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <DollarSign className="w-10 h-10 text-emerald-400" />
          <h2 className="text-3xl text-white font-semibold">Efecto Financiero</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-sm mb-2">Impacto Directo</p>
            <p className="text-white text-lg font-medium">Protección directa del margen</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-sm mb-2">Reducción de Costes</p>
            <p className="text-white text-lg font-medium">Menos penalizaciones retail</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-sm mb-2">Optimización</p>
            <p className="text-white text-lg font-medium">Costes invisibles (reprocesos)</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm mb-2">Resultado Final</p>
          <p className="text-[rgb(var(--onus-turquoise-rgb))] text-4xl font-bold">
            Impacto directo en el EBITDA logístico
          </p>
        </div>
      </div>
    </div>
  );
}
