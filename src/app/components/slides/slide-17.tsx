import { motion } from "motion/react";
import { Zap, TrendingUp, Layers, Target } from "lucide-react";
import { slide17 } from "../../texts";

const advIcons = [Zap, Layers, Target, TrendingUp];

export default function Slide17() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-8 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide17.title}
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-3xl p-12 mb-10 text-center"
        >
          <p className="text-4xl text-white italic mb-4">{slide17.quoteA}</p>
          <p className="text-5xl text-[rgb(var(--onus-turquoise-rgb))]">{slide17.quoteB}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide17.advantages.map((adv, index) => {
            const Icon = advIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-4 rounded-xl w-fit mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-white">{adv.title}</h3>
                <p className="text-white/80 text-lg">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-[rgb(var(--onus-turquoise-rgb))] text-white px-8 py-4 rounded-full text-xl">
            {slide17.cta}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
