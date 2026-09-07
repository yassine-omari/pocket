"use client";

import { Children, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

type FeaturesCarouselProps = {
  children: ReactNode;
};

const FeaturesCarousel = ({ children }: FeaturesCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => Children.toArray(children), [children]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto overscroll-x-contain scrollbar-none scroll-smooth snap-x snap-mandatory pb-4"
      >
        {slides}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToSlide(index)}
            className={`relative h-0.5 w-4 rounded-full ${
              index === activeIndex ? "bg-gray-300" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  );
};

export default FeaturesCarousel;
