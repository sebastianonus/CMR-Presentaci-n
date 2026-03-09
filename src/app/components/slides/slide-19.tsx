import { motion } from "motion/react";
import { Calendar, CheckCircle, Rocket } from "lucide-react";
import { slide19 } from "../../texts";

export default function Slide19() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-10 pb-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-3 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide19.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-center text-white mb-8 font-semibold"
        >
          {slide19.subtitle}
        </motion.p>

        {/* Fases en columnas horizontales */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {slide19.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col"
            >
              {/* Cabecera fase */}
              <div className="flex items-center gap-3 mb-4">
                <div className="glass-chip-neutral w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="text-xs text-[rgb(var(--onus-turquoise-rgb))] uppercase tracking-wide">{item.phase}</div>
                  <h3 className="text-xl text-white">{item.title}</h3>
                </div>
              </div>

              {/* Duración */}
              <div className="flex items-center gap-2 text-white/60 mb-4 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{item.duration}</span>
              </div>

              {/* Tareas */}
              <ul className="space-y-2 flex-1">
                {item.items.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-[rgb(var(--onus-turquoise-rgb))] flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="glass-surface-accent rounded-2xl p-5 text-center flex items-center justify-center gap-3"
        >
          <Rocket className="w-7 h-7 text-[rgb(var(--onus-turquoise-rgb))]" />
          <p className="text-lg text-white">
            <span className="font-bold">{slide19.footerBold}</span> {slide19.footer}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
