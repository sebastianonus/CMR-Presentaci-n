import { Zap, DollarSign, TrendingUp, Target, Bot, Leaf } from 'lucide-react';

export function Slide17Differential() {
  const cards = [
    {
      icon: DollarSign,
      title: 'Costes Variables',
      description: 'Sin inversión en activos',
      iconClass: 'text-emerald-500',
      bgClass: 'bg-emerald-500/10 border-emerald-200/40',
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad',
      description: 'Crece con tus picos',
      iconClass: 'text-sky-400',
      bgClass: 'bg-sky-500/10 border-sky-200/40',
    },
    {
      icon: Zap,
      title: 'Estandarización',
      description: 'Procesos consistentes',
      iconClass: 'text-amber-400',
      bgClass: 'bg-amber-400/10 border-amber-200/40',
    },
    {
      icon: Target,
      title: 'Enfoque',
      description: 'Logística como rentabilidad',
      iconClass: 'text-fuchsia-400',
      bgClass: 'bg-fuchsia-400/10 border-fuchsia-200/40',
    },
    {
      icon: Bot,
      title: 'ONUS App',
      description: 'Tecnología IA para asignación, control y decisión',
      iconClass: 'text-cyan-300',
      bgClass: 'bg-cyan-400/10 border-cyan-200/40',
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Green Path como eficiencia operativa responsable',
      iconClass: 'text-lime-400',
      bgClass: 'bg-lime-400/10 border-lime-200/40',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 rounded-3xl shadow-2xl text-white">
      <div className="text-center mb-12">
        <h1 className="text-6xl mb-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Diferencial ONUS
        </h1>
        <div className="w-32 h-1 bg-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-8 rounded-full" />

        <p className="text-4xl text-[rgb(var(--onus-turquoise-rgb))] font-bold italic mb-4">
          "No optimizamos envíos"
        </p>
        <p className="text-5xl text-white font-bold">"Optimizamos operaciones"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div key={index} className={`backdrop-blur-sm p-6 rounded-2xl border text-center ${card.bgClass}`}>
              <Icon className={`w-12 h-12 mx-auto mb-4 ${card.iconClass}`} />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-[rgb(var(--onus-turquoise-rgb))]/20 backdrop-blur-sm px-10 py-6 rounded-full border-2 border-[rgb(var(--onus-turquoise-rgb))]">
        <p className="text-2xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
          Enfoque en convertir la logística en un motor de rentabilidad
        </p>
      </div>
    </div>
  );
}
