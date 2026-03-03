import { Route, Package, Clock3, Thermometer } from 'lucide-react';

export function Slide07Resolution() {
  const solutions = [
    {
      icon: Route,
      problem: 'Retrasos',
      solution: 'Optimización de rutas con IA',
    },
    {
      icon: Package,
      problem: 'Faltantes o golpes',
      solution: 'Checklist de salida y POD digital',
    },
    {
      icon: Clock3,
      problem: 'Esperas en descarga',
      solution: 'Gestión activa de clientes y ETA proactiva',
    },
    {
      icon: Thermometer,
      problem: 'Cadena de frío irregular',
      solution: 'Protocolo de frío trazable',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Resolución de Incidencias de Margen
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="space-y-4 flex-1">
        {solutions.map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-6 rounded-2xl border-l-4 border-[rgb(var(--onus-turquoise-rgb))] hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Problema</p>
                  <h3 className="text-xl font-semibold text-destructive">{item.problem}</h3>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Solución ONUS</p>
                  <h3 className="text-xl font-semibold text-[rgb(var(--onus-turquoise-rgb))]">{item.solution}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[rgb(var(--onus-dark-blue-rgb))] p-6 rounded-2xl text-center">
        <p className="text-white text-lg">
          Cada incidencia resuelta = <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Protección directa del margen</strong>
        </p>
      </div>
    </div>
  );
}
