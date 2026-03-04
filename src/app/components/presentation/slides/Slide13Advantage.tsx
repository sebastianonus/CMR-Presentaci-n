import { TrendingUp, Shield, Calendar, Network } from 'lucide-react';

export function Slide13Advantage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Predictibilidad Operativa',
      description: 'Elimina sorpresas y mejora la planificación',
    },
    {
      icon: Shield,
      title: 'Menor Exposición a Penalizaciones',
      description: 'Cumplimiento retail garantizado',
    },
    {
      icon: Calendar,
      title: 'Más Días en el Lineal',
      description: 'Optimiza la vida útil del producto',
    },
    {
      icon: Network,
      title: 'Decisiones Conectadas',
      description: 'Información directa para la dirección',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Ventaja Competitiva para CMR Group
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={index}
              className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/20 hover:border-[rgb(var(--onus-turquoise-rgb))] transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-9 h-9 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[rgb(var(--onus-dark-blue-rgb))]">{benefit.title}</h3>
              <p className="text-foreground/70 text-lg">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl">
        <p className="text-white text-2xl text-center">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Onus = cargo en latin = "responsabilidad"</strong>
          <br />
          ONUS SE HACE CARGO
        </p>
      </div>
    </div>
  );
}
