import { motion } from "motion/react";
import { TrendingUp, AlertTriangle, Eye } from "lucide-react";
import { slide2 } from "../../texts";

const icons = [AlertTriangle, Eye, TrendingUp];

export default function Slide2() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-4 text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide2.title}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl mb-4 text-white">{slide2.visionTitle}</h3>
          <p className="text-xl text-white/90 leading-relaxed">{slide2.visionText}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl mb-6 text-white">{slide2.factsTitle}</h3>
          <div className="space-y-4">
            {slide2.facts.map((fact, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:bg-white/10 transition-all"
                >
                  <div className="glass-chip-neutral p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{fact.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass-surface-accent mt-8 rounded-xl p-6"
        >
          <p className="text-xl text-white">
            <strong>{slide2.implicationPrefix}</strong> {slide2.implication}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
