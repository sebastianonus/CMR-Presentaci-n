import { Zap, BarChart3, Eye, Heart } from 'lucide-react';

export function Slide11Value() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 rounded-3xl shadow-2xl text-white">
      <div className="mb-8">
        <h1 className="text-6xl mb-4 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Propuesta de Valor
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-white/20">
        <h2 className="text-3xl mb-4 text-[rgb(var(--onus-turquoise-rgb))]">Nuestra Misión</h2>
        <p className="text-2xl text-white/90 leading-relaxed">
          Ofrecer una operativa logística a medida con <strong className="text-[rgb(var(--onus-turquoise-rgb))]">rapidez</strong>, 
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]"> eficiencia</strong> y 
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]"> trazabilidad</strong> en tiempo real.
        </p>
      </div>

      <h3 className="text-2xl mb-6 text-[rgb(var(--onus-turquoise-rgb))]">Nuestra Promesa</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <Zap className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Rutas Adaptadas</h4>
          <p className="text-white/70">Optimización inteligente para cada entrega</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <BarChart3 className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Apoyo en Picos</h4>
          <p className="text-white/70">Escalabilidad cuando más lo necesitas</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <Eye className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Control Total</h4>
          <p className="text-white/70">Temperatura y calidad monitoreadas</p>
        </div>
      </div>

      <div className="mt-auto bg-[rgb(var(--onus-turquoise-rgb))]/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-[rgb(var(--onus-turquoise-rgb))] flex items-center gap-4">
        <Heart className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))]" />
        <p className="text-3xl font-bold text-[rgb(var(--onus-turquoise-rgb))]">
          "Tu logística, como si fuera nuestra"
        </p>
      </div>
    </div>
  );
}
