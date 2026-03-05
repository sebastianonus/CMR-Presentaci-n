import { motion } from "motion/react";
import { TrendingUp, Shield, Calendar, Link } from "lucide-react";
import { slide13 } from "../../texts";

const benefitIcons = [TrendingUp, Shield, Calendar, Link];

export default function Slide13() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide13.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide13.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
              >
                <div className="glass-chip-neutral p-4 rounded-xl w-fit mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/80 text-lg">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-surface-accent mt-12 rounded-2xl p-8 text-center"
        >
          <p className="text-3xl text-white">
            {slide13.footer} <span className="font-bold">{slide13.footerBold}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
