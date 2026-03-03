import { motion } from "motion/react";
import { Target, Zap, Shield } from "lucide-react";
import { slide11 } from "../../texts";

export default function Slide11() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12 pb-24">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide11.title}
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h3 className="text-3xl text-white">{slide11.missionTitle}</h3>
          </div>
          <p className="text-2xl text-white/90 leading-relaxed">{slide11.missionText}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-3xl p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h3 className="text-3xl text-white">{slide11.promiseTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slide11.promises.map((promise, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border-l-4 border-[rgb(var(--onus-turquoise-rgb))]">
                <Shield className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))] mb-3" />
                <p className="text-xl text-white">{promise}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-3xl text-white italic">{slide11.quote}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}