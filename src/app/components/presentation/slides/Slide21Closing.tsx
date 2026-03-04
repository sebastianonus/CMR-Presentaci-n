import { Rocket, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide21Closing() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 rounded-3xl shadow-2xl text-white">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Rocket className="w-24 h-24 text-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-8" />
        
        <h1 className="text-6xl mb-8 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Estamos Listos
        </h1>
        
        <div className="w-32 h-1 bg-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-12 rounded-full" />
        
        <div className="bg-white/10 backdrop-blur-sm px-12 py-8 rounded-3xl border-2 border-[rgb(var(--onus-turquoise-rgb))] max-w-3xl mx-auto mb-12">
          <p className="text-3xl text-white mb-6 leading-relaxed">
            Propuesta para activar el <strong className="text-[rgb(var(--onus-turquoise-rgb))]">piloto en 30 días</strong> y medir el impacto real
          </p>
          <p className="text-xl text-white/80">
            De diagnóstico a resultados medibles
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Heart className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
          <p className="text-2xl text-white/90">Gracias</p>
        </div>

        <h2 className="text-7xl font-extrabold text-[rgb(var(--onus-turquoise-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          ONUS EXPRESS
        </h2>

        <p className="mt-8 text-white/60 text-lg">Nos Hacemos Cargo</p>
      </motion.div>
    </div>
  );
}
