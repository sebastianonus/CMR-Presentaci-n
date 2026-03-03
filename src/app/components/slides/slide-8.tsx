import { motion } from "motion/react";
import { TrendingUp, DollarSign, Package } from "lucide-react";
import { slide8 } from "../../texts";

const savingsColors = ["text-green-400", "text-green-400", "text-green-400"];

export default function Slide8() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12 pb-24">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide8.title}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Package className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
            <div>
              <h3 className="text-2xl text-white">{slide8.scenarioTitle}</h3>
              <p className="text-white/70">{slide8.scenarioSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-5xl mb-2 text-[rgb(var(--onus-turquoise-rgb))]">{slide8.tons}</div>
              <div className="text-white/80">{slide8.tonsLabel}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-5xl mb-2 text-[rgb(var(--onus-turquoise-rgb))]">{slide8.totalValue}</div>
              <div className="text-white/80">{slide8.totalValueLabel}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="w-10 h-10 text-green-400" />
            <h3 className="text-2xl text-white">{slide8.savingsTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slide8.savings.map((s, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6">
                <div className={`text-3xl mb-2 ${savingsColors[i]}`}>{s.value}</div>
                <div className="text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <TrendingUp className="w-12 h-12 text-white" />
            <div>
              <div className="text-4xl text-white mb-2">{slide8.totalRange}</div>
              <div className="text-xl text-white/90">{slide8.totalLabel}</div>
            </div>
          </div>
          <div className="text-lg text-white/90 mt-4">
            {slide8.potential} <span className="text-2xl">{slide8.potentialValue}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}