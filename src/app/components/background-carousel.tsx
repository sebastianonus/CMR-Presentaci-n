import { useState, useEffect } from "react";
import { motion } from "motion/react";

const excludedAssets = [
  "521a2b3343809a59638a95e5fc630218dcef6fe4", // CMR logo
  "c6bba0f7d7742a6f216f288717b1e62f14e71b26", // ONUS isologo
  "e7e41f04542fce7954ea5453ee29ba88235cf6cb", // ONUS logo
  "Greenpath_Logo_Logistics_VerdeLima", // Green Path logo
];

const assetModules = import.meta.glob("../../assets/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const images = Object.entries(assetModules)
  .filter(([assetPath]) => {
    const isImage = /\.(png|jpe?g|webp|avif)$/i.test(assetPath);
    const isExcluded = excludedAssets.some((excluded) => assetPath.includes(excluded));
    return isImage && !isExcluded;
  })
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, assetUrl]) => assetUrl);

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

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
          animate={{ opacity: currentIndex === index ? 0.4 : 0 }}
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
      <div className="absolute inset-0 bg-[#000935]/60" />
    </div>
  );
}
