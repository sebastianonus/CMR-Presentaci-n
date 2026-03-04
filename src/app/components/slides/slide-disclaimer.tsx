import { motion } from "motion/react";
import { AlertCircle, ChevronRight, FileText } from "lucide-react";
import { slideDisclaimer } from "../../texts";

export default function SlideDisclaimer() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-10 pb-24">
      <div className="max-w-5xl w-full mx-auto">

        {/* Badge */}
        {slideDisclaimer.badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-2 rounded-full text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{slideDisclaimer.badge}</span>
            </div>
          </motion.div>
        )}

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl text-center text-[rgb(var(--onus-turquoise-rgb))] mb-5"
        >
          {slideDisclaimer.title}
        </motion.h1>

        {/* Introducción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-white/75 text-center mb-7 leading-relaxed max-w-3xl mx-auto"
        >
          {slideDisclaimer.intro}
        </motion.p>

        <div className="grid grid-cols-2 gap-5">

          {/* Propósito */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-lg text-white">{slideDisclaimer.purposeTitle}</h3>
            </div>
            <ul className="space-y-3">
              {slideDisclaimer.purposes.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                  <ChevronRight className="w-4 h-4 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fases metodológicas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
          >
            <h3 className="text-lg text-white mb-4">{slideDisclaimer.phasesTitle}</h3>
            <div className="space-y-3">
              {slideDisclaimer.phases.map((phase, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgb(var(--onus-turquoise-rgb))]/20 border border-[rgb(var(--onus-turquoise-rgb))]/40 flex items-center justify-center">
                    <span className="text-xs text-[rgb(var(--onus-turquoise-rgb))]">{phase.num}</span>
                  </div>
                  <div>
                    <div className="text-sm text-white">{phase.title}</div>
                    <div className="text-xs text-white/55">{phase.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 bg-amber-500/10 border border-amber-400/25 rounded-xl px-6 py-4 text-center"
        >
          <p className="text-sm text-amber-300/90">{slideDisclaimer.footer}</p>
        </motion.div>

      </div>
    </div>
  );
}
