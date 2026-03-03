import { Zap, DollarSign, TrendingUp, Target } from 'lucide-react';

export function Slide17Differential() {
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
        <p className="text-5xl text-white font-bold">
          Optimizamos operaciones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
          <DollarSign className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Costes Variables</h3>
          <p className="text-white/70">Sin inversión en activos</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
          <TrendingUp className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
          <p className="text-white/70">Crece con tus picos</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
          <Zap className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Estandarización</h3>
          <p className="text-white/70">Procesos consistentes</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
          <Target className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enfoque</h3>
          <p className="text-white/70">Logística como rentabilidad</p>
        </div>
      </div>

      <div className="mt-12 bg-[rgb(var(--onus-turquoise-rgb))]/20 backdrop-blur-sm px-10 py-6 rounded-full border-2 border-[rgb(var(--onus-turquoise-rgb))]">
        <p className="text-2xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
          La logística como motor de rentabilidad
        </p>
      </div>
    </div>
  );
}
