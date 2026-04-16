"use client";

import { startTransition, useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=800&h=600&q=80", alt: "Newly fitted kitchen with modern cabinetry" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&h=600&q=80", alt: "Renovated bathroom with fresh tiling" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&h=600&q=80", alt: "Hardwood flooring and carpentry finish" },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=600&q=80", alt: "Dublin house exterior after guttering repair" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80", alt: "Bright interior room after painting and decorating" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80", alt: "Floor and wall tiling in a wet room" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&h=600&q=80", alt: "Open-plan living area after renovation" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=600&q=80", alt: "Professional tools laid out for a repair job" },
  { src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&h=600&q=80", alt: "Painting and decorating in progress" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=600&q=80", alt: "Door and window fitting on a Dublin home" },
];

interface Gallery17Props {
  className?: string;
}

const Gallery17 = ({ className }: Gallery17Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    startTransition(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
    api.on("select", () => {
      startTransition(() => setCurrent(api.selectedScrollSnap() + 1));
    });
  }, [api]);

  return (
    <section className={cn("relative overflow-hidden py-16 px-4 lg:py-28 lg:px-0", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="gallery-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gallery-dots)" />
      </svg>

      <div className="container relative md:px-45">

        {/* ── Section heading ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14 text-left"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold lg:text-6xl font-serif tracking-tighter">Our Work</h2>
          <p className="mt-4 text-muted-foreground lg:text-lg font-sans">
            A selection of projects we&apos;re proud to have completed.
          </p>
          <div className="mt-5 h-px w-16 bg-primary" />
        </motion.div>

        {/* ── Carousel ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <Carousel
            className="mx-auto w-full max-w-[50rem] [&>div:nth-child(1)]:md:overflow-visible"
            setApi={setApi}
            opts={{ startIndex: 1 }}
          >
            <CarouselContent>
              {IMAGES.map((img, index) => (
                <CarouselItem key={`carousel-img-${index}`}>
                  <div
                    className={`aspect-[1.333333333] max-w-[50rem] overflow-hidden rounded-2xl transition-all duration-300 ${
                      current === index + 1
                        ? "scale-100 opacity-100 shadow-xl"
                        : "scale-70 opacity-40"
                    }`}
                  >
                    <img
                      className="block size-full object-cover object-center"
                      src={img.src}
                      alt={img.alt}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 hidden md:block">
              <CarouselPrevious
                className="size-10 max-[767px]:static max-[767px]:translate-y-0 md:left-[-6.25rem] md:size-14 lg:left-[-9.9375rem] lg:size-14 [&>svg]:!size-6"
                variant="default"
              />
              <CarouselNext
                className="size-10 max-[767px]:static max-[767px]:translate-y-0 md:right-[-6.25rem] md:size-14 lg:right-[-9.9375rem] lg:size-14 [&>svg]:!size-6"
                variant="default"
              />
            </div>
          </Carousel>

          {/* Dot indicators */}
          <div className="mx-auto mt-10 flex w-full max-w-[33.9375rem] items-center justify-center gap-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                key={`carousel-dot-btn-${index}`}
                className="p-1.5"
                onClick={() => api?.scrollTo(index)}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "h-2.5 w-6 bg-primary"
                      : "h-2.5 w-2.5 bg-foreground/10 hover:bg-foreground/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export { Gallery17 };
