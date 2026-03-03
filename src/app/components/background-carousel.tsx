import { useState, useEffect } from "react";
import { motion } from "motion/react";
import img2 from "../../assets/75a4f1c6db6f262602b59fe34d37008c74077a3f.png";
import img3 from "../../assets/e4d65246763c398c8158c537a32f609404b085bd.png";
import img4 from "../../assets/4261f3db5c66ef3456a8ebcae9838917a1e10ea5.png";
import img6 from "../../assets/0a1757e638ab1fb53c0032b34a92c151833d26de.png";
import img7 from "../../assets/433f006a1a8dbb744643830e0e0b3f07184d05b1.png";

const images = [img2, img3, img4, img6, img7];

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#000935] z-0">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 0.5 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
