import { motion } from "motion/react";
import { Target, Zap, Shield } from "lucide-react";
import { slide11 } from "../../texts";

export default function Slide11() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8 pb-28">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-7 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide11.title}
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-8 mb-6"
        >
          <div className="flex items-center gap-4 mb-5">
            <Target className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h3 className="text-2xl md:text-3xl text-white">{slide11.missionTitle}</h3>
          </div>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">{slide11.missionText}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-3xl px-10 py-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h3 className="text-2xl md:text-3xl text-white">{slide11.promiseTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {slide11.promises.map((promise, i) => (
              <div key={i} className="bg-white/5 rounded-2xl px-6 py-5 border-l-4 border-[rgb(var(--onus-turquoise-rgb))]">
                <Shield className="w-7 h-7 text-[rgb(var(--onus-turquoise-rgb))] mb-2" />
                <p className="text-lg md:text-xl text-white leading-snug">{promise}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-2xl md:text-3xl text-white italic leading-tight">{slide11.quote}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
