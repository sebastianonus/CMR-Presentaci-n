import { Snowflake, FileWarning, Clock, AlertTriangle } from 'lucide-react';

export function Slide06Risks() {
  const risks = [
    { icon: Snowflake, title: 'Roturas de frío', solution: 'Telemetría 24/7 en tiempo real' },
    { icon: FileWarning, title: 'Errores documentales', solution: 'Validación preventiva' },
    { icon: Clock, title: 'Incumplimiento de ventanas horarias', solution: 'Optimización dinámica de rutas' },
    { icon: AlertTriangle, title: 'Reclamaciones por calidad', solution: 'Protocolos de control con evidencia digital' },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Riesgos Operativos y Ventaja Estructural
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {risks.map((risk, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-muted/30 to-transparent p-6 rounded-2xl border border-border hover:border-[rgb(var(--onus-turquoise-rgb))] transition-all group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--onus-turquoise-rgb))]/20 transition-colors">
                <risk.icon className="w-7 h-7 text-destructive group-hover:text-[rgb(var(--onus-turquoise-rgb))] transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 text-destructive">{risk.title}</h3>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-1">Solución ONUS:</p>
              <p className="font-medium text-[rgb(var(--onus-turquoise-rgb))]">{risk.solution}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-6 rounded-2xl text-center">
        <p className="text-white text-lg">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Resultado:</strong> Gestión proactiva que elimina riesgos antes de que impacten el negocio
        </p>
      </div>
    </div>
  );
}
