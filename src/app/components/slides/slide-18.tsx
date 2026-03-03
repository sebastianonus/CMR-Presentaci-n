import { motion } from "motion/react";
import { Users, Headphones, Shield, Award } from "lucide-react";
import { slide18 } from "../../texts";

const serviceIcons = [Users, Headphones, Shield, Award];

export default function Slide18() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-8 text-center text-[rgb(var(--onus-turquoise-rgb))]"
        >
          {slide18.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center text-white/90 mb-12"
        >
          {slide18.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide18.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-4 rounded-xl w-fit mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                <p className="text-white/80 text-lg">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center"
        >
          <p className="text-2xl text-white">
            <span className="font-bold">{slide18.footerBold}</span> {slide18.footer}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
