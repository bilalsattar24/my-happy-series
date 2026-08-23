"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SlideImage = {
  src: string;
  alt: string;
};

export function BookImageSlider({
  slides,
  className = "bg-white",
  sizes = "(min-width: 768px) 420px, 92vw",
}: {
  slides: SlideImage[];
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [index, slides.length]);

  const slide = slides[index];

  return (
    <div className={`relative aspect-[3/2] w-full overflow-hidden ${className}`}>
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        sizes={sizes}
        className="object-contain object-center"
      />
      {slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setIndex((current) => (current - 1 + slides.length) % slides.length)
            }
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#17324d]/80 text-sm font-black text-white"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setIndex((current) => (current + 1) % slides.length)}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#17324d]/80 text-sm font-black text-white"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((item, slideIndex) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show image ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                onClick={() => setIndex(slideIndex)}
                className={`h-2.5 w-2.5 rounded-full ${
                  slideIndex === index ? "bg-[#17324d]" : "bg-[#17324d]/30"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
