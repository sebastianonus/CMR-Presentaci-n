import { motion } from "motion/react";
import { Calculator, TrendingUp } from "lucide-react";
import { useState } from "react";
import { slide9 } from "../../texts";

export default function Slide9() {
  const [volume, setVolume] = useState(slide9.defaultVolume);
  const [value, setValue] = useState(slide9.defaultValue);

  const mermaReduction = (value * 1000000 * 0.01).toFixed(0);
  const claimsReduction = (value * 1000000 * 0.0027).toFixed(0);
  const otifImprovement = (value * 1000000 * 0.005).toFixed(0);

  const totalSavings = (
    parseFloat(mermaReduction) +
    parseFloat(claimsReduction) +
    parseFloat(otifImprovement)
  ).toFixed(0);

  const formatNumber = (num: string) => parseInt(num).toLocaleString("es-ES");

  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-6">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl mb-4 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide9.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-center text-white mb-6"
        >
          {slide9.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl px-6 py-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <Calculator className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-lg md:text-xl text-white">{slide9.inputTitle}</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-white mb-1.5 block">{slide9.volumeLabel}</label>
                <input
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value) || 0)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white text-lg focus:outline-none focus:border-[rgb(var(--onus-turquoise-rgb))] transition-colors"
                />
                <div className="mt-2 text-sm text-white/60">{slide9.volumeExample}</div>
              </div>

              <div>
                <label className="text-sm text-white mb-1.5 block">{slide9.valueLabel}</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                  step="0.1"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white text-lg focus:outline-none focus:border-[rgb(var(--onus-turquoise-rgb))] transition-colors"
                />
                <div className="mt-2 text-sm text-white/60">{slide9.valueExample}</div>
              </div>
            </div>

            <div className="mt-5 bg-[rgb(var(--onus-turquoise-rgb))]/20 border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-lg p-3">
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">{slide9.disclaimer}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[rgb(var(--onus-turquoise-rgb))]/10 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl px-6 py-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-lg md:text-xl text-white">{slide9.resultsTitle}</h3>
            </div>

            <div className="space-y-2.5 mb-5">
              <div className="bg-white/5 rounded-xl p-3.5 border-l-4 border-green-500">
                <div className="text-sm text-white/70 mb-1">{slide9.mermaLabel}</div>
                <div className="text-xl md:text-2xl text-green-400">{formatNumber(mermaReduction)} EUR</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border-l-4 border-blue-500">
                <div className="text-sm text-white/70 mb-1">{slide9.claimsLabel}</div>
                <div className="text-xl md:text-2xl text-blue-400">{formatNumber(claimsReduction)} EUR</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border-l-4 border-purple-500">
                <div className="text-sm text-white/70 mb-1">{slide9.otifLabel}</div>
                <div className="text-xl md:text-2xl text-purple-400">{formatNumber(otifImprovement)} EUR</div>
              </div>
            </div>

            <div className="glass-surface-accent rounded-xl p-4 text-center">
              <div className="text-sm text-white/90 mb-2">{slide9.totalImpactLabel}</div>
              <div className="text-3xl md:text-4xl text-white mb-1.5">{formatNumber(totalSavings)} EUR</div>
              <div className="text-sm md:text-base text-white/90">{slide9.totalImpactSub}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
