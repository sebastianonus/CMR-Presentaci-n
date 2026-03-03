import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import isologo from "../../assets/c6bba0f7d7742a6f216f288717b1e62f14e71b26.png";
import BackgroundCarousel from "./background-carousel";
import MobilePresentation from "./mobile-presentation";
import { useIsMobile } from "./ui/use-mobile";
import Slide1 from "./slides/slide-1";
import SlideDisclaimer from "./slides/slide-disclaimer";
import Slide2 from "./slides/slide-2";
import Slide3 from "./slides/slide-3";
import Slide4 from "./slides/slide-4";
import Slide5 from "./slides/slide-5";
import Slide6 from "./slides/slide-6";
import Slide7 from "./slides/slide-7";
import Slide8 from "./slides/slide-8";
import Slide9 from "./slides/slide-9";
import Slide10 from "./slides/slide-10";
import Slide11 from "./slides/slide-11";
import Slide12 from "./slides/slide-12";
import Slide13 from "./slides/slide-13";
import Slide14 from "./slides/slide-14";
import Slide15 from "./slides/slide-15";
import Slide16 from "./slides/slide-16";
import Slide17 from "./slides/slide-17";
import Slide18 from "./slides/slide-18";
import Slide19 from "./slides/slide-19";
import Slide20 from "./slides/slide-20";
import Slide21 from "./slides/slide-21";

const slides = [
  Slide1, SlideDisclaimer, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21
];

export default function Presentation() {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const currentSlide = slideNumber ? parseInt(slideNumber) : 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length) {
        navigate(`/${currentSlide + 1}`);
      } else if (e.key === "ArrowLeft" && currentSlide > 1) {
        navigate(`/${currentSlide - 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, navigate]);

  const CurrentSlideComponent = slides[currentSlide - 1];

  const goToNext = () => {
    if (currentSlide < slides.length) {
      navigate(`/${currentSlide + 1}`);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 1) {
      navigate(`/${currentSlide - 1}`);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#000935] relative overflow-hidden">
      <BackgroundCarousel />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-[100dvh] relative z-10"
        >
          {isMobile ? (
            <div
              className="absolute inset-x-0 top-0 overflow-y-auto"
              style={{
                top: "calc(env(safe-area-inset-top, 0px) + 0.25rem)",
                bottom: "calc(env(safe-area-inset-bottom, 0px) + 5.75rem)",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <MobilePresentation currentSlide={currentSlide} />
            </div>
          ) : (
            <div className="absolute inset-x-0 top-0 bottom-24 overflow-hidden">
              <CurrentSlideComponent />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {isMobile ? (
        <div
          className="fixed left-1/2 z-50 flex w-[calc(100vw-1.5rem)] max-w-sm -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
        >
          <button
            onClick={goToPrev}
            disabled={currentSlide === 1}
            className="rounded-full bg-white/20 p-2 transition-all hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            <span className="text-sm font-mono text-white/90">
              {currentSlide} / {slides.length}
            </span>
          </div>

          <button
            onClick={goToNext}
            disabled={currentSlide === slides.length}
            className="rounded-full bg-white/20 p-2 transition-all hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      ) : (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 z-50">
          <button
            onClick={goToPrev}
            disabled={currentSlide === 1}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => navigate(`/${index + 1}`)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index + 1
                    ? "w-8 bg-[rgb(var(--onus-turquoise-rgb))]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentSlide === slides.length}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      )}

      {!isMobile && (
        <div className="fixed top-8 right-8 text-white/80 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20 z-50">
          <span className="font-mono">{currentSlide} / {slides.length}</span>
        </div>
      )}

      {currentSlide !== 1 && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 left-8 z-50"
        >
          <img src={isologo} alt="ONUS Isologo" className="w-16 h-16 object-contain" />
        </motion.div>
      )}
    </div>
  );
}
