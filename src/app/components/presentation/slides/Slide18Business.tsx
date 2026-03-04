import { Lightbulb, TrendingUp, Zap, Users } from 'lucide-react';

export function Slide18Business() {
  const impacts = [
    {
      icon: Lightbulb,
      title: 'Simplificación Operativa',
      description: 'Reduce complejidad y libera tiempo para decisiones estratégicas',
    },
    {
      icon: TrendingUp,
      title: 'Mejora de Márgenes',
      description: 'Sin inversión en CAPEX, impacto directo en el EBITDA',
    },
    {
      icon: Zap,
      title: 'Crecimiento Alineado',
      description: 'Escalabilidad automática según demanda',
    },
    {
      icon: Users,
      title: 'Liberación de Recursos',
      description: 'Tu equipo enfocado en el negocio principal',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Impacto Directo en el Negocio
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <p className="text-2xl text-foreground/80 mb-8">Valor real para CMR Group:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;

          return (
            <div
              key={index}
              className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/20 hover:border-[rgb(var(--onus-turquoise-rgb))] transition-all hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-9 h-9 text-[rgb(var(--onus-turquoise-rgb))]" />
                </div>
                <h3 className="text-2xl font-semibold text-[rgb(var(--onus-dark-blue-rgb))]">{impact.title}</h3>
              </div>
              <p className="text-foreground/70 text-lg">{impact.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl text-center">
        <p className="text-white text-2xl">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">El resultado:</strong> 
          <br />
          Más control, menos riesgo, mejor rentabilidad
        </p>
      </div>
    </div>
  );
}
