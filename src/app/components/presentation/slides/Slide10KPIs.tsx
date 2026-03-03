import { Target, Thermometer, Calendar, DollarSign, AlertTriangle } from 'lucide-react';

export function Slide10KPIs() {
  const kpis = [
    {
      icon: Target,
      title: 'Nivel de Servicio',
      metric: 'OTIF por región',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
    {
      icon: Thermometer,
      title: 'Control Térmico',
      metric: 'Incidencias por cada 1.000 envíos',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
    {
      icon: Calendar,
      title: 'Vida Útil',
      metric: 'Entregada vs. Teórica',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
    {
      icon: DollarSign,
      title: 'Eficiencia',
      metric: 'Coste por tonelada',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
    {
      icon: AlertTriangle,
      title: 'Riesgo',
      metric: 'Índice de reclamación',
      color: 'rgb(var(--onus-turquoise-rgb))',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          KPIs Estratégicos Propuestos
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {kpis.map((kpi, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/20 hover:border-[rgb(var(--onus-turquoise-rgb))] transition-all hover:shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl flex items-center justify-center mb-4">
              <kpi.icon className="w-10 h-10" style={{ color: kpi.color }} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--onus-dark-blue-rgb))]">{kpi.title}</h3>
            <p className="text-muted-foreground">{kpi.metric}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[rgb(var(--onus-dark-blue-rgb))] p-6 rounded-2xl text-center">
        <p className="text-white text-lg">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Dashboard en tiempo real</strong> con visibilidad completa de métricas críticas
        </p>
      </div>
    </div>
  );
}
