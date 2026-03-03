import { Smartphone, Users, Zap, Truck, Bot } from 'lucide-react';

export function Slide12Technology() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          ONUS APP y Tecnología
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <div className="bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))]/5 to-transparent p-8 rounded-2xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-10 h-10 text-[rgb(var(--onus-dark-blue-rgb))]" />
            <h2 className="text-2xl text-[rgb(var(--onus-dark-blue-rgb))] font-semibold">Plataforma Tecnológica</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Bot className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Impulsada por IA</h4>
                <p className="text-foreground/70">Algoritmos de machine learning para optimización continua</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Tecnología Propia</h4>
                <p className="text-foreground/70">Desarrollo interno para máxima flexibilidad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/10 to-transparent p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))]/30">
          <h2 className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-semibold mb-6">Capacidad Operativa</h2>
          
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl flex items-center gap-4">
              <Users className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
              <div>
                <p className="text-3xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">+1.200</p>
                <p className="text-sm text-foreground/70">Autónomos verificados</p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <h4 className="font-semibold mb-2">Asignación Ágil 24/7</h4>
              <p className="text-foreground/70">Disponibilidad inmediata cuando la necesites</p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl">
              <h4 className="font-semibold mb-2">Trazabilidad Total</h4>
              <p className="text-foreground/70">Visibilidad completa del envío en tiempo real</p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-5 rounded-xl flex items-center gap-4">
              <Truck className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
              <div>
                <h4 className="font-semibold mb-1">Flota Propia Complementaria</h4>
                <p className="text-foreground/70 text-sm">Para máxima fiabilidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[rgb(var(--onus-dark-blue-rgb))] p-6 rounded-2xl text-center">
        <p className="text-white text-lg">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Resultado:</strong> Tecnología que se adapta a tu operativa, no al revés
        </p>
      </div>
    </div>
  );
}
