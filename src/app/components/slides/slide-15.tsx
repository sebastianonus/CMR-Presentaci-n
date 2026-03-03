import { motion } from "motion/react";
import { Beaker, BarChart, CheckCircle, Layers } from "lucide-react";
import { slide15 } from "../../texts";

const phaseIcons = [Beaker, BarChart, CheckCircle, Layers];

export default function Slide15() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-8 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide15.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center text-white/90 mb-12"
        >
          {slide15.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide15.phases.map((phase, index) => {
            const Icon = phaseIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl text-white/50">0{index + 1}</div>
                </div>
                <h3 className="text-2xl mb-3 text-white">{phase.title}</h3>
                <p className="text-white/80 text-lg">{phase.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center"
        >
          <p className="text-2xl text-white">
            {slide15.footer} <span className="font-bold">{slide15.footerBold}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
