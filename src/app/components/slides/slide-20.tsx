import { motion } from "motion/react";
import { Target, TrendingUp, Globe, Zap } from "lucide-react";
import { slide20 } from "../../texts";

const benefitIcons = [Target, TrendingUp, Globe, Zap];
const benefitColors = [
  "bg-green-500/20 border-green-500/30",
  "bg-blue-500/20 border-blue-500/30",
  "bg-purple-500/20 border-purple-500/30",
  "bg-[rgb(var(--onus-turquoise-rgb))]/20 border-[rgb(var(--onus-turquoise-rgb))]/30",
];

export default function Slide20() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-5 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide20.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-white/90 mb-8"
        >
          {slide20.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {slide20.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`${benefitColors[index]} backdrop-blur-md border rounded-2xl px-6 py-5 text-center hover:scale-[1.01] transition-transform`}
              >
                <Icon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-4xl md:text-5xl text-white mb-2">{benefit.stat}</div>
                <div className="text-base md:text-lg text-white/90 leading-snug">{benefit.label}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-surface-accent rounded-2xl px-8 py-6 text-center"
        >
          <p className="text-2xl md:text-3xl text-white mb-3">{slide20.ctaTitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/90">
            {slide20.bullets.map((bullet, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
