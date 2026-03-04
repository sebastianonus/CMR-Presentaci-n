import { motion } from "motion/react";
import { Zap, TrendingUp, Layers, Target, Bot, Leaf } from "lucide-react";
import { slide17 } from "../../texts";

const advIcons = [Zap, Layers, Target, TrendingUp, Bot, Leaf];

export default function Slide17() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-6">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl mb-5 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide17.title}
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-3xl px-6 py-5 mb-5 text-center"
        >
          <p className="text-2xl md:text-3xl text-white italic mb-2">{slide17.quoteA}</p>
          <p className="text-3xl md:text-4xl text-[rgb(var(--onus-turquoise-rgb))]">{slide17.quoteB}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {slide17.advantages.map((adv, index) => {
            const Icon = advIcons[index] ?? Zap;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 hover:scale-[1.01] transition-transform"
              >
                <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-3 rounded-xl w-fit mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-white">{adv.title}</h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-5 text-center"
        >
          <div className="inline-block bg-[rgb(var(--onus-turquoise-rgb))] text-white px-6 py-3 rounded-full text-base md:text-lg">
            {slide17.cta}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
