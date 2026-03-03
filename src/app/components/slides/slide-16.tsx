import { motion } from "motion/react";
import { TrendingUp, Clock } from "lucide-react";
import { slide16 } from "../../texts";

export default function Slide16() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide16.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl mb-6 text-white">{slide16.scenarioTitle}</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-sm text-white/70 mb-2">{slide16.volumeLabel}</div>
                <div className="text-4xl text-[rgb(var(--onus-turquoise-rgb))]">{slide16.volumeValue}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-sm text-white/70 mb-2">{slide16.valueLabel}</div>
                <div className="text-4xl text-[rgb(var(--onus-turquoise-rgb))]">{slide16.valueValue}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl mb-6 text-white">{slide16.impactTitle}</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                <div className="text-sm text-white/70 mb-2">{slide16.savingLabel}</div>
                <div className="text-4xl text-green-400">{slide16.savingValue}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="text-sm text-white/70 mb-2">{slide16.costLabel}</div>
                <div className="text-4xl text-blue-400">{slide16.costValue}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center">
            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-sm text-white/90 mb-2">{slide16.roiLabel}</div>
            <div className="text-5xl text-white mb-2">{slide16.roiValue}</div>
            <div className="text-white/80">{slide16.roiSub}</div>
          </div>
          <div className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center">
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-sm text-white/90 mb-2">{slide16.paybackLabel}</div>
            <div className="text-5xl text-white mb-2">{slide16.paybackValue}</div>
            <div className="text-white/80">{slide16.paybackSub}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
