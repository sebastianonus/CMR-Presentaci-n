import { motion } from "motion/react";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import logo from "../../../assets/e7e41f04542fce7954ea5453ee29ba88235cf6cb.png";
import { slide21 } from "../../texts";

const contactIcons = [Mail, Phone, Globe, MessageCircle];

export default function Slide21() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="ONUS Logo" className="h-20" />
          </div>
          <h1 className="text-6xl mb-6 text-[rgb(var(--onus-turquoise-rgb))]">{slide21.title}</h1>
          <p className="text-2xl text-white/90">{slide21.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slide21.contact.map((item, i) => {
              const Icon = contactIcons[i];
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">{item.label}</div>
                    <div className="text-xl text-white">{item.value}</div>
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
          className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl p-8 text-center"
        >
          <p className="text-3xl text-white mb-4 font-bold">{slide21.brand}</p>
          <p className="text-xl text-white/90">{slide21.brandTagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10 text-white/60"
        >
          <p>{slide21.closing}</p>
        </motion.div>
      </div>
    </div>
  );
}
