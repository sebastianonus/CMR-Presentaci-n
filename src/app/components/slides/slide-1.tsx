import { motion } from "motion/react";
import logo from "../../../assets/e7e41f04542fce7954ea5453ee29ba88235cf6cb.png";
import cmrLogo from "../../../assets/521a2b3343809a59638a95e5fc630218dcef6fe4.png";
import { slide1 } from "../../texts";

export default function Slide1() {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-col items-center gap-8"
        >
          <img src={logo} alt="ONUS Logo" className="h-24" />

          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[rgb(var(--onus-turquoise-rgb))]/50" />
            <span className="text-[rgb(var(--onus-turquoise-rgb))]/70 text-sm">{slide1.separatorLabel}</span>
            <div className="h-px w-16 bg-[rgb(var(--onus-turquoise-rgb))]/50" />
          </div>

          <img src={cmrLogo} alt="CMR Group Logo" className="h-16" />
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl mb-8 text-white/90"
        >
          {slide1.subtitle}
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block bg-[rgb(var(--onus-turquoise-rgb))] text-white px-8 py-4 rounded-full text-xl"
        >
          {slide1.cta}
        </motion.div>
      </div>
    </div>
  );
}
