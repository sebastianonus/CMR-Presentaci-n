import { motion } from "motion/react";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import logo from "../../../assets/e7e41f04542fce7954ea5453ee29ba88235cf6cb.png";
import { slide21 } from "../../texts";

const actionItems = [
  { label: "Correo", value: "vissler@onusexpress.com", href: "mailto:vissler@onusexpress.com", icon: Mail },
  { label: "Web", value: "www.onusexpress.com", href: "https://www.onusexpress.com", icon: Globe },
  { label: "Consulta", value: "Formulario", href: "https://www.onusexpress.com/contacto", icon: Phone },
  { label: "WhatsApp", value: "+34 639 61 11 15", href: "https://wa.me/34639611115", icon: MessageCircle },
];

export default function Slide21() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="mb-5 flex justify-center">
            <img src={logo} alt="ONUS Logo" className="h-14 md:h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-3 text-[rgb(var(--onus-turquoise-rgb))]">{slide21.title}</h1>
          <p className="text-lg md:text-xl text-white/90">{slide21.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-8 py-7 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {actionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 px-4 py-4 transition-colors hover:bg-white/10"
                >
                  <div className="bg-[rgb(var(--onus-turquoise-rgb))] p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-white/70 mb-1">{item.label}</div>
                    <div className="text-base md:text-lg text-white">{item.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[rgb(var(--onus-turquoise-rgb))] rounded-2xl px-7 py-5 text-center"
        >
          <p className="text-xl md:text-2xl text-white mb-2 font-bold">{slide21.brand}</p>
          <p className="text-base md:text-lg text-white/90">{slide21.brandTagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-4 text-sm text-white/60"
        >
          <p>{slide21.closing}</p>
        </motion.div>
      </div>
    </div>
  );
}
