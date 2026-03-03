import { Play, Target, BarChart3, MapPin } from 'lucide-react';

export function Slide15Pilot() {
  const phases = [
    {
      icon: Play,
      title: 'Implementación',
      description: 'En categorías sensibles (ej. berries o aguacate)',
    },
    {
      icon: BarChart3,
      title: 'Evaluación Financiera',
      description: 'Comparativa antes/después con métricas reales',
    },
    {
      icon: Target,
      title: 'Revisión Ejecutiva',
      description: 'Análisis de resultados y KPIs',
    },
    {
      icon: MapPin,
      title: 'Despliegue Progresivo',
      description: 'Escalado por regiones según éxito',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Piloto Estratégico (90 Días)
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {phases.map((phase, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-8 rounded-2xl border-l-4 border-[rgb(var(--onus-turquoise-rgb))] hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <phase.icon className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[rgb(var(--onus-dark-blue-rgb))] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-[rgb(var(--onus-dark-blue-rgb))]">{phase.title}</h3>
                </div>
                <p className="text-foreground/70 text-lg">{phase.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-3">Enfoque del Piloto</h3>
            <p className="text-white/90 text-lg">
              Probar el modelo en condiciones reales con productos de alto valor y sensibilidad
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl text-center">
            <p className="text-white/70 text-sm mb-2">Duración Total</p>
            <p className="text-[rgb(var(--onus-turquoise-rgb))] text-5xl font-bold">90 días</p>
          </div>
        </div>
      </div>
    </div>
  );
}
