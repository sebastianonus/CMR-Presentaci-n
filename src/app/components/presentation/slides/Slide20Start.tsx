import { ClipboardCheck, Settings, Rocket, MapPin } from 'lucide-react';

export function Slide20Start() {
  const steps = [
    {
      icon: ClipboardCheck,
      step: '1',
      title: 'Diagnostico Teorico',
      description: 'Análisis de tu operativa actual y oportunidades de mejora',
    },
    {
      icon: Settings,
      step: '2',
      title: 'Diseño Operativo',
      description: 'Alineado a tus KPIs y necesidades específicas',
    },
    {
      icon: Rocket,
      step: '3',
      title: 'Piloto Estratégico',
      description: 'Ejecución de 90 días con medición de impacto',
    },
    {
      icon: MapPin,
      step: '4',
      title: 'Cobertura Adaptable',
      description: 'Escalado nacional según resultados',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Cómo Empezar
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="space-y-6 flex-1">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="relative bg-gradient-to-r from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-6 rounded-2xl border-l-4 border-[rgb(var(--onus-turquoise-rgb))] hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-[rgb(var(--onus-dark-blue-rgb))] text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-[rgb(var(--onus-dark-blue-rgb))]">{step.title}</h3>
                <p className="text-foreground/70 text-lg">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl text-center">
        <p className="text-white text-2xl mb-4">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Proceso completo:</strong> 
          <span className="ml-2">De diagnóstico a resultados medibles</span>
        </p>
        <p className="text-white/70">
          Activación en 30 días | Primeros resultados en 90 días
        </p>
      </div>
    </div>
  );
}
