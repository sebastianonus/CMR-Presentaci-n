import { Thermometer, Bell, TrendingUp, Shield } from 'lucide-react';

export function Slide04Engineering() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Ingeniería Técnica de Cadena de Frío
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <div className="bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))]/5 to-transparent p-8 rounded-2xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[rgb(var(--onus-dark-blue-rgb))]/10 rounded-xl flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-[rgb(var(--onus-dark-blue-rgb))]" />
            </div>
            <h2 className="text-2xl text-[rgb(var(--onus-dark-blue-rgb))] font-semibold">Capacidad Técnica</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Bell className="w-4 h-4 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Monitorización Continua</h4>
                <p className="text-foreground/70">Control por unidad en tiempo real</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-4 h-4 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Alertas Tempranas</h4>
                <p className="text-foreground/70">Desviaciones de ±0,5°C detectadas instantáneamente</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-4 h-4 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Modelos de Degradación</h4>
                <p className="text-foreground/70">Análisis por categoría de producto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/30">
          <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-6">Impacto Estratégico</h2>

          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <h4 className="font-semibold mb-2 text-[rgb(var(--onus-dark-blue-rgb))]">Reducción de Mermas</h4>
              <p className="text-foreground/70">Control preciso minimiza pérdidas de producto</p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <h4 className="font-semibold mb-2 text-[rgb(var(--onus-dark-blue-rgb))]">Optimización de Vida Útil</h4>
              <p className="text-foreground/70">Mayor tiempo de producto en el lineal</p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <h4 className="font-semibold mb-2 text-[rgb(var(--onus-dark-blue-rgb))]">Registro Digital Trazable</h4>
              <p className="text-foreground/70">Soporte documental para seguros y reclamaciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-6 rounded-2xl text-center">
        <p className="text-white text-lg">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Resultado:</strong> Control total de la cadena de frío con evidencia digital
        </p>
      </div>
    </div>
  );
}
