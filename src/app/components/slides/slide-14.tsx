import { motion } from "motion/react";
import { X, Check, Calendar } from "lucide-react";
import { slide14 } from "../../texts";

export default function Slide14() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide14.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <X className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl text-white">{slide14.currentModelTitle}</h3>
            </div>
            <div className="space-y-3">
              {slide14.currentModelItems.map((item, i) => (
                <div key={i} className="text-white/80">{item}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[rgb(var(--onus-turquoise-rgb))]/10 border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-2xl text-white">{slide14.onusModelTitle}</h3>
            </div>
            <div className="space-y-3">
              {slide14.onusModelItems.map((item, i) => (
                <div key={i} className="text-white">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
            <h3 className="text-3xl text-white">{slide14.timelineTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slide14.timeline.map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border-t-4 border-[rgb(var(--onus-turquoise-rgb))]">
                <div className="text-4xl mb-2 text-[rgb(var(--onus-turquoise-rgb))]">{item.value}</div>
                <div className="text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
