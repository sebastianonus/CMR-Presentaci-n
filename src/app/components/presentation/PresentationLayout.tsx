import { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PresentationLayoutProps {
  children: ReactNode;
  totalSlides: number;
}

export function PresentationLayout({ children, totalSlides }: PresentationLayoutProps) {
  const navigate = useNavigate();
  const { slideId } = useParams<{ slideId: string }>();
  const currentSlide = parseInt(slideId || '1', 10);

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      navigate(`/slide/${slideNumber}`);
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <div 
      className="min-h-screen bg-background flex flex-col"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-7xl"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-border">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="p-2 rounded-full hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToSlide(num)}
              className={`w-2 h-2 rounded-full transition-all ${
                num === currentSlide
                  ? 'bg-[rgb(var(--onus-turquoise-rgb))] w-8'
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              aria-label={`Ir a página ${num}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="p-2 rounded-full hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 text-sm text-muted-foreground">
        {currentSlide} / {totalSlides}
      </div>
    </div>
  );
}
