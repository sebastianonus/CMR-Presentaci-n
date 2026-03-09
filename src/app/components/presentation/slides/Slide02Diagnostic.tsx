import { TrendingDown, AlertTriangle, Eye, Target } from 'lucide-react';

export function Slide02Diagnostic() {
  const facts = [
    {
      icon: TrendingDown,
      iconColor: 'text-[rgb(var(--onus-turquoise-rgb))]',
      iconBg: 'bg-[rgb(var(--onus-turquoise-rgb))]/20',
      text: 'Entre el 60-80% de las incidencias se originan en el tramo interno; el foco de mejora debe ser el transporte nacional.',
    },
    {
      icon: Eye,
      iconColor: 'text-[rgb(var(--onus-turquoise-rgb))]',
      iconBg: 'bg-[rgb(var(--onus-turquoise-rgb))]/20',
      text: 'Existe una falta de visibilidad térmica en la última milla, lo que reduce la capacidad de defensa ante reclamaciones.',
    },
    {
      icon: AlertTriangle,
      iconColor: 'text-[rgb(var(--onus-turquoise-rgb))]',
      iconBg: 'bg-[rgb(var(--onus-turquoise-rgb))]/20',
      text: 'La variabilidad operativa genera imprevisibilidad financiera y presión en el margen.',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Diagnostico Teorico
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="bg-gradient-to-r from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-8 rounded-2xl mb-8 border-l-4 border-[rgb(var(--onus-turquoise-rgb))]">
        <h3 className="inline-flex items-center rounded-xl bg-[rgb(var(--onus-dark-blue-rgb))] px-4 py-2 text-3xl mb-4 text-white font-bold tracking-wide">
          Visión
        </h3>
        <p className="text-xl text-foreground/85 leading-relaxed font-medium">
          La logística nacional impacta directamente en el margen y la vida útil de los productos.
          La operación es una palanca financiera, no solo un coste.
        </p>
      </div>

      <h3 className="text-2xl mb-6 text-[rgb(var(--onus-dark-blue-rgb))] font-semibold">Hechos Observados</h3>
      <div className="grid gap-4 mb-8">
        {facts.map((fact, index) => (
          <div key={index} className="flex gap-4 items-start p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
            <div className={`flex-shrink-0 w-12 h-12 ${fact.iconBg} rounded-full flex items-center justify-center`}>
              <fact.icon className={`w-6 h-6 ${fact.iconColor}`} />
            </div>
            <p className="text-foreground/80 leading-relaxed pt-2">{fact.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto bg-[rgb(var(--onus-dark-blue-rgb))] p-6 rounded-2xl flex items-center gap-3">
        <Target className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
        <p className="text-white text-lg font-medium">
          <strong>Implicación Estratégica:</strong> La optimización nacional representa una ventaja competitiva estructural sostenible.
        </p>
      </div>
    </div>
  );
}
