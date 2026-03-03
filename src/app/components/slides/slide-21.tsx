import { motion } from "motion/react";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import logo from "../../../assets/e7e41f04542fce7954ea5453ee29ba88235cf6cb.png";
import { slide21 } from "../../texts";

const contactIcons = [Mail, Phone, Globe, MessageCircle];

export default function Slide21() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8 pb-28">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="ONUS Logo" className="h-16 md:h-20" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[rgb(var(--onus-turquoise-rgb))]">{slide21.title}</h1>
          <p className="text-xl md:text-2xl text-white/90">{slide21.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-9 py-8 mb-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slide21.contact.map((item, i) => {
              const Icon = contactIcons[i];
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-3 rounded-xl">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">{item.label}</div>
                    <div className="text-lg md:text-xl text-white">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl px-8 py-6 text-center"
        >
          <p className="text-2xl md:text-3xl text-white mb-3 font-bold">{slide21.brand}</p>
          <p className="text-lg md:text-xl text-white/90">{slide21.brandTagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-6 text-white/60"
        >
          <p>{slide21.closing}</p>
        </motion.div>
      </div>
    </div>
  );
}
