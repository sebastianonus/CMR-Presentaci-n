import { motion } from "motion/react";
import { Smartphone, Brain, Users, Map, Zap, Truck } from "lucide-react";
import greenPathLogo from "../../../assets/Greenpath_Logo_Logistics_VerdeLima.png";
import { slide12 } from "../../texts";

const featureIcons = [Users, Zap, Map, Truck];
const featureStyles = [
  "bg-white/10 backdrop-blur-md border border-white/20",
  "bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md",
  "bg-white/10 backdrop-blur-md border border-white/20",
  "bg-white/10 backdrop-blur-md border border-white/20",
  "bg-white/10 backdrop-blur-md border border-white/20",
];

export default function Slide12() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide12.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Smartphone className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
              <h3 className="text-2xl text-white">{slide12.platformTitle}</h3>
            </div>
            <div className="bg-[rgb(var(--onus-turquoise-rgb))]/15 backdrop-blur-md rounded-xl p-6">
              <Brain className="w-12 h-12 text-[rgb(var(--onus-turquoise-rgb))] mb-4" />
              <p className="text-xl text-white/90 leading-relaxed">{slide12.platformDesc}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {slide12.features.map((feat, i) => {
              const Icon = featureIcons[i];
              const isSustainability = feat.title === "Sostenibilidad";
              const styleClass = featureStyles[i] ?? featureStyles[featureStyles.length - 1];

              return (
                <div key={i} className={`${styleClass} rounded-xl p-6`}>
                  <div className="flex items-center gap-3 mb-2">
                    {isSustainability ? (
                      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-[#234635]">
                        <img src={greenPathLogo} alt="Green Path Logistics" className="h-full w-full object-contain p-0.5" />
                      </div>
                    ) : (
                      Icon && <Icon className="w-6 h-6 text-[rgb(var(--onus-turquoise-rgb))]" />
                    )}
                    <h4 className="text-xl text-white">{feat.title}</h4>
                  </div>
                  <p className="text-white/80">{feat.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
