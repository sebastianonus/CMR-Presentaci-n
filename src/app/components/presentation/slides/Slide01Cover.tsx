import { motion } from 'motion/react';

export function Slide01Cover() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 rounded-3xl px-12 py-16 shadow-2xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl font-extrabold text-white mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
          ONUS EXPRESS
        </h1>
        <div className="w-32 h-1 bg-[rgb(var(--onus-turquoise-rgb))] mx-auto mb-8 rounded-full" />
        <h2 className="text-3xl text-white/90 mb-12 max-w-3xl mx-auto">
          Propuesta Estratégica para Dirección de Operaciones – CMR Group
        </h2>
        <p className="text-2xl text-[rgb(var(--onus-turquoise-rgb))] font-medium italic">
          Convierte tu logística en una ventaja competitiva
        </p>
      </motion.div>
    </div>
  );
}
