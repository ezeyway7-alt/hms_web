import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play, FileText } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

interface CarouselSlide {
  id: string;
  imageUrl: string;
  alt: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=85',
    alt: 'Hospital Facility 1',
  },
  {
    id: 'slide-2',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2400&q=85',
    alt: 'Hospital Facility 2',
  },
  {
    id: 'slide-3',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=2400&q=85',
    alt: 'Hospital Facility 3',
  },
  {
    id: 'slide-4',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2400&q=85',
    alt: 'Hospital Facility 4',
  },
  {
    id: 'slide-5',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2400&q=85',
    alt: 'Hospital Facility 5',
  },
];

export const Hero: React.FC<HeroProps> = ({ language, onOpenDemo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      className="relative w-full h-[65vh] max-h-[65vh] min-h-[380px] bg-slate-950 overflow-hidden select-none border-b border-slate-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hospital Showcase Carousel"
    >
      {/* Vertical Overlay Gradient extending from top down to the button area with gentle decreasing contrast */}
      <div className="absolute top-0 inset-x-0 h-[80%] z-20 pointer-events-none bg-gradient-to-b from-[#083538]/85 via-[#0b4447]/70 via-25% via-[#11767a]/45 via-55% via-[#11767a]/20 via-80% to-transparent">
        {/* Centered Logo with NO background container, enlarged with ambient halo for maximum visibility */}
        <div className="pt-4 sm:pt-6 md:pt-8 px-4 flex items-center justify-center relative">
          {/* Soft ambient backlight halo to make dark logo letters effortlessly visible without a solid card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 md:w-[460px] h-14 sm:h-18 md:h-22 bg-white/30 rounded-full blur-2xl pointer-events-none" />
          
          <a
            href="#hero"
            className="pointer-events-auto relative inline-flex items-center justify-center transition-transform hover:scale-105"
            aria-label="Hamro HMS"
          >
            <img
              src="https://hamrohms.nirc.com.np/static/assets/img/HMS.png"
              alt="Hamro HMS"
              className="h-16 sm:h-20 md:h-24 lg:h-26 w-auto max-w-[340px] sm:max-w-[440px] md:max-w-[500px] object-contain [filter:drop-shadow(0_0_1.5px_rgba(255,255,255,0.95))_drop-shadow(0_0_8px_rgba(255,255,255,0.65))_drop-shadow(0_4px_18px_rgba(0,0,0,0.85))]"
            />
          </a>
        </div>
      </div>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient vignette at bottom to ground the button and controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
            </div>
          );
        })}
      </div>

      {/* Previous Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Next Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Center: Dual Action Buttons & Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3.5 sm:gap-4 w-full px-4">
        {/* Dual Actions: View Demo & Request Quote */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Button 1: View Demo */}
          <a
            href="#modules"
            id="hero-view-demo-button"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white/95 hover:bg-white text-slate-900 border border-white/80 rounded-xs shadow-xl text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <Play className="w-4 h-4 text-[#11767a] fill-[#11767a]" />
            <span>{language === 'en' ? 'View Demo' : 'डेमो हेर्नुहोस्'}</span>
          </a>

          {/* Button 2: Request Quote */}
          <button
            onClick={onOpenDemo}
            id="hero-request-quote-button"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#11767a] hover:bg-[#0d5f62] text-white border-2 border-teal-300/90 rounded-xs shadow-2xl text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md ring-4 ring-black/30 group"
          >
            <FileText className="w-4 h-4 text-amber-300 group-hover:rotate-6 transition-transform" />
            <span>{language === 'en' ? 'Request Quote' : 'कोटेशन अनुरोध'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-200 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {CAROUSEL_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'w-7 bg-[#11767a] shadow-xs'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
