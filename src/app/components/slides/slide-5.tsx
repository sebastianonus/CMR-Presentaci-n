import { motion } from "motion/react";
import { TrendingDown, Shield, Clock, Euro } from "lucide-react";
import { slide5 } from "../../texts";

const improvementIcons = [TrendingDown, Shield, Clock];
const improvementColors = ["bg-red-500/80", "bg-orange-500/80", "bg-green-500/80"];

export default function Slide5() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide5.title}
        </motion.h1>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl mb-8 text-white text-center"
        >
          {slide5.subTitle}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {slide5.improvements.map((item, index) => {
            const Icon = improvementIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className={`${improvementColors[index]} p-4 rounded-xl w-fit mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl mb-3 text-white">{item.title}</h4>
                <div className="text-3xl text-[rgb(var(--onus-turquoise-rgb))]">{item.range}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="glass-chip-neutral p-3 rounded-lg">
              <Euro className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl text-white">{slide5.effectTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {slide5.effectItems.map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border-l-4 border-[rgb(var(--onus-turquoise-rgb))]">
                <p className="text-white/80 mb-2">{item.label}</p>
                <p className="text-[rgb(var(--onus-turquoise-rgb))]">{item.badge}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-2xl text-white">
              {slide5.footer} <span className="text-[rgb(var(--onus-turquoise-rgb))]">{slide5.footerHighlight}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
