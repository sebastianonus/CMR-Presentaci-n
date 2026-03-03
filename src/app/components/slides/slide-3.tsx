import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { slide3 } from "../../texts";

export default function Slide3() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide3.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flujo Actual */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h3 className="text-2xl text-white">{slide3.currentTitle}</h3>
            </div>
            <div className="space-y-4">
              {slide3.currentItems.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-red-400 text-sm">{slide3.currentWarning}</div>
          </motion.div>

          {/* Arquitectura ONUS */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(var(--onus-turquoise-rgb))]/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-2xl text-white">{slide3.onusTitle}</h3>
            </div>
            <div className="space-y-4 relative z-10">
              {slide3.onusItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-[rgb(var(--onus-turquoise-rgb))]/20 backdrop-blur-md rounded-lg p-4 border-l-4 border-[rgb(var(--onus-turquoise-rgb))]"
                >
                  <p className="text-white">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-[rgb(var(--onus-turquoise-rgb))] relative z-10">
              {slide3.onusPositive}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-[rgb(var(--onus-turquoise-rgb))] text-white px-6 py-3 rounded-full">
            <span>{slide3.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
