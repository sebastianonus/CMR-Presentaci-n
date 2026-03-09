import { motion } from "motion/react";
import { slide7 } from "../../texts";

export default function Slide7() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide7.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide7.solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform"
            >
              <div className="bg-red-500/80 p-1 rounded-xl mb-6">
                <div className="bg-[rgb(var(--onus-dark-blue-rgb))] p-4 rounded-lg">
                  <h3 className="text-2xl text-white mb-2">{slide7.problemLabel}</h3>
                  <p className="text-xl text-white/80">{item.problem}</p>
                </div>
              </div>
              <div className="border-l-4 border-[rgb(var(--onus-turquoise-rgb))] pl-4">
                <h4 className="text-sm text-[rgb(var(--onus-turquoise-rgb))] mb-2">{slide7.solutionLabel}</h4>
                <p className="text-lg text-white">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-surface-accent inline-block text-white px-8 py-4 rounded-full text-xl">
            {slide7.cta}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
