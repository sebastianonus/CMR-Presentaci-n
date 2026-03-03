import { motion } from "motion/react";
import { Users, Headphones, Shield, Award } from "lucide-react";
import { slide18 } from "../../texts";

const serviceIcons = [Users, Headphones, Shield, Award];

export default function Slide18() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-5 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide18.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-center text-white/90 mb-7"
        >
          {slide18.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide18.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 hover:scale-[1.01] transition-transform"
              >
                <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-3 rounded-xl w-fit mb-3">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-white">{service.title}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl px-7 py-5 text-center"
        >
          <p className="text-lg md:text-xl text-white">
            <span className="font-bold">{slide18.footerBold}</span> {slide18.footer}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
