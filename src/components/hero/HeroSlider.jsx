import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { sliderData } from '../../data/sliderData';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const progressRAFRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const totalSlides = sliderData.length;
  const autoPlayDuration = 4000;

  // Reset progress timer
  const resetProgress = useCallback(() => {
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Next Slide
  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev + 1) % totalSlides);
    resetProgress();
    setTimeout(() => setIsTransitioning(false), 600);
  }, [totalSlides, isTransitioning, resetProgress]);

  // Previous Slide
  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev - 1 + totalSlides) % totalSlides);
    resetProgress();
    setTimeout(() => setIsTransitioning(false), 600);
  }, [totalSlides, isTransitioning, resetProgress]);

  // Go to specific slide
  const goTo = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    resetProgress();
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // ===== PROGRESS BAR - Always Running (Even on Hover) =====
  useEffect(() => {
    if (isTransitioning) {
      if (progressRAFRef.current) {
        cancelAnimationFrame(progressRAFRef.current);
        progressRAFRef.current = null;
      }
      return;
    }

    // Sync startTime with current progress
    startTimeRef.current = Date.now() - (progress / 100) * autoPlayDuration;

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / autoPlayDuration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        next();
      } else {
        progressRAFRef.current = requestAnimationFrame(animate);
      }
    };

    progressRAFRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressRAFRef.current) {
        cancelAnimationFrame(progressRAFRef.current);
      }
    };
  }, [isTransitioning, next, progress, autoPlayDuration]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  // Touch Events for Mobile Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      diff > 0 ? next() : prev();
    }
  };

  const slide = sliderData[current];

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[650px] bg-gray-100 overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* ===== SLIDES ===== */}
      <div className="relative w-full h-full">
        {sliderData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            <img 
              src={item.image} 
              alt={item.alt}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* ===== CTA BUTTON - Simple Clean Style ===== */}
      <div className="absolute left-5 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-20">
        <a 
          href={slide.link}
          className="group inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          <span className="whitespace-nowrap">{slide.cta}</span>
          <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* ===== NAVIGATION ARROWS ===== */}
      {/* <button 
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
      </button>
      <button 
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button> */}

      {/* ===== DOTS INDICATOR ===== */}
      <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 md:left-12 lg:left-16 z-20 flex gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current 
                ? 'w-7 sm:w-8 h-2 bg-white shadow-md' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ===== SLIDE COUNTER - Small Size ===== */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-5 z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg">
          <span className="text-xs sm:text-sm font-semibold text-white leading-none">
            {String(current + 1).padStart(2, '0')}
            <span className="text-white/40 mx-0.5">/</span>
            <span className="text-white/50">{String(totalSlides).padStart(2, '0')}</span>
          </span>
        </div>
      </div>

      {/* ===== PROGRESS BAR - Always Animating ===== */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/15">
        <div 
          className="h-full bg-brand-blue shadow-[0_0_6px_rgba(4,55,135,0.6)] transition-none relative"
          style={{ width: `${progress}%` }}
        >
          {/* Subtle glow dot */}
          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>

    </div>
  );
}


