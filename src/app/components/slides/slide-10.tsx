import { motion } from "motion/react";
import { Target, Thermometer, Calendar, DollarSign, Shield, Leaf } from "lucide-react";
import { slide10 } from "../../texts";

const kpiIcons = [Target, Thermometer, Calendar, DollarSign, Shield];

export default function Slide10() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide10.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slide10.kpis.map((kpi, index) => {
            const Icon = kpiIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="glass-chip-neutral p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
                </div>
                <h3 className="text-xl mb-2 text-white">{kpi.title}</h3>
                <p className="text-white/70">{kpi.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <p className="text-2xl text-white text-center">
            {slide10.footer} <span className="text-[rgb(var(--onus-turquoise-rgb))]">{slide10.footerHighlight}</span>
          </p>
          <button className="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--onus-turquoise-rgb))]/20 border border-[rgb(var(--onus-turquoise-rgb))]/60 px-4 py-2 text-[rgb(var(--onus-turquoise-rgb))] font-semibold hover:bg-[rgb(var(--onus-turquoise-rgb))]/30 transition-colors">
            <Leaf className="w-5 h-5" />
            Sostenibilidad
          </button>
        </motion.div>
      </div>
    </div>
  );
}
