"use client";

import { motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";

import { Badge } from "@/components/ui/badge";
import { PremiumButton } from "@/components/ui/premium-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Column A — craft / in-progress shots (scrolls down)
const IMAGES_A = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=750&q=80", alt: "Carpenter measuring timber on a workbench" },
  { src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&h=750&q=80", alt: "Tradesperson rolling paint onto a wall" },
  { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&h=750&q=80", alt: "Floor tiling in progress" },
  { src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&h=750&q=80", alt: "Handyman tools laid out ready for work" },
];

// Column B — finished results (scrolls up)
const IMAGES_B = [
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&h=750&q=80", alt: "Freshly renovated modern bathroom" },
  { src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=600&h=750&q=80", alt: "Newly fitted kitchen" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=750&q=80", alt: "Freshly painted bright interior room" },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&h=750&q=80", alt: "Clean Dublin house exterior" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "500+", label: "Jobs Completed" },
  { value: "4.8★", label: "Star Rating" },
];

interface Hero85Props {
  className?: string;
}

const Hero85 = ({ className }: Hero85Props) => {
  return (
    <section className={cn("relative overflow-hidden py-16 px-4 lg:px-0 lg:py-28", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-3xl" />

      {/* Dot-grid texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ── Floating tool accents (desktop only) ────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[10%] hidden text-primary/[0.12] lg:block"
        initial={{ opacity: 0, rotate: -20, scale: 0.75 }}
        animate={{ opacity: 1, rotate: -12, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
      >
        {/* Wrench */}
        <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[1%] bottom-[18%] hidden text-primary/[0.09] lg:block"
        initial={{ opacity: 0, rotate: 40, scale: 0.75 }}
        animate={{ opacity: 1, rotate: 28, scale: 1 }}
        transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
      >
        {/* Hammer */}
        <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/>
          <path d="m18 15 4-4"/>
          <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18 14l3.5-2.5z"/>
        </svg>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[1.5%] bottom-[28%] hidden text-primary/[0.07] xl:block"
        initial={{ opacity: 0, rotate: -10, scale: 0.75 }}
        animate={{ opacity: 1, rotate: -4, scale: 1 }}
        transition={{ duration: 1.4, delay: 1.3, ease: "easeOut" }}
      >
        {/* Paintbrush */}
        <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/>
          <path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/>
          <path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/>
        </svg>
      </motion.div>

      {/* ── Main layout ─────────────────────────────────────── */}
      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Text column */}
          <motion.div
            className="mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge pill */}
            <motion.div variants={fadeUp} className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium">
              <Badge>⭐ 4.8 / 5</Badge>
              Trusted by Dublin homeowners since 2011
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="mt-10 mb-4 text-4xl font-bold lg:text-6xl font-serif tracking-tighter">
              Dublin&apos;s Reliable Handyman. Done Right, Every Time
            </motion.h1>

            {/* Sub-copy */}
            <motion.p variants={fadeUp} className="mx-auto text-muted-foreground lg:text-xl font-sans tracking">
              From a leaky tap to a full room renovation, FixRight Home Services
              delivers honest pricing and quality workmanship across Dublin 6, 8, 12 &amp; 14.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-2 sm:flex-row">
              <PremiumButton size="lg" className="w-full gap-2 sm:w-auto" shimmer>
                Get a Free Quote
              </PremiumButton>
              <PremiumButton variant="glass" size="lg" className="w-full gap-2 sm:w-auto">
                View Our Work
              </PremiumButton>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex gap-8 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Mobile carousels ──────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 0.8 })]} className="-mx-7">
              <CarouselContent className="max-h-[350px]">
                {IMAGES_A.map((img, i) => (
                  <CarouselItem key={img.src} className="max-w-96">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? "eager" : "lazy"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 0.8, direction: "backward" })]} className="-mx-7">
              <CarouselContent className="max-h-[350px]">
                {IMAGES_B.map((img, i) => (
                  <CarouselItem key={img.src} className="max-w-96">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? "eager" : "lazy"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          {/* ── Desktop carousels ─────────────────────────────── */}
          <motion.div
            className="hidden grid-cols-2 gap-8 lg:grid"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 0.8 })]} orientation="vertical">
              <CarouselContent className="max-h-[600px]">
                {IMAGES_A.map((img, i) => (
                  <CarouselItem key={img.src}>
                    <img src={img.src} alt={img.alt} className="h-full w-full rounded-xl object-cover" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? "eager" : "lazy"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 0.8, direction: "backward" })]} orientation="vertical">
              <CarouselContent className="max-h-[600px]">
                {IMAGES_B.map((img, i) => (
                  <CarouselItem key={img.src}>
                    <img src={img.src} alt={img.alt} className="h-full w-full rounded-xl object-cover" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? "eager" : "lazy"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export { Hero85 };
