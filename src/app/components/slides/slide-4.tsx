import { motion } from "motion/react";
import { Thermometer, Bell, BarChart3 } from "lucide-react";
import { slide4 } from "../../texts";

const capIcons = [Thermometer, Bell, BarChart3];

export default function Slide4() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide4.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Capacidad Técnica */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl mb-6 text-white flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-[rgb(var(--onus-turquoise-rgb))]" />
              {slide4.capTitle}
            </h3>
            <div className="space-y-4">
              {slide4.capabilities.map((cap, i) => {
                const Icon = capIcons[i];
                return (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg mb-2 text-white">{cap.title}</h4>
                        <p className="text-white/80">{cap.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Impacto Estratégico */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-3xl mb-6 text-white">{slide4.impactTitle}</h3>
            <div className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md border border-[rgb(var(--onus-turquoise-rgb))]/30 rounded-2xl p-8 h-full">
              <div className="space-y-6">
                {slide4.impacts.map((impact, i) => (
                  <div key={i} className="border-l-4 border-[rgb(var(--onus-turquoise-rgb))] pl-4">
                    <h4 className="text-xl mb-2 text-[rgb(var(--onus-turquoise-rgb))]">{impact.title}</h4>
                    <p className="text-white/90">{impact.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white text-center text-lg">{slide4.footer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
