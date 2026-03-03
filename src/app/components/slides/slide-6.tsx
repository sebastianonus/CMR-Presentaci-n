import { motion } from "motion/react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { slide6 } from "../../texts";

export default function Slide6() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide6.title}
        </motion.h1>

        <div className="space-y-6">
          {slide6.risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">{slide6.riskLabel}</div>
                  <div className="text-xl text-white">{risk.problem}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[rgb(var(--onus-turquoise-rgb))]/20 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
                </div>
                <div>
                  <div className="text-sm text-[rgb(var(--onus-turquoise-rgb))]/80 mb-1">{slide6.solutionLabel}</div>
                  <div className="text-xl text-white">{risk.solution}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center"
        >
          <p className="text-2xl text-white">
            {slide6.footer} <span className="font-bold">{slide6.footerBold}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
