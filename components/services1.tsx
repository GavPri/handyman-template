"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const sectionVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

interface Services1Props {
  className?: string;
}

const Services1 = ({ className }: Services1Props) => {
  const services = [
    {
      title: "Repairs & Maintenance",
      description:
        "From leaky taps to sticking doors, we handle all those nagging jobs around the house quickly and affordably.",
      items: [
        "General Repairs & Maintenance",
        "Plumbing (Minor Repairs)",
        "Door & Window Fitting",
      ],
    },
    {
      title: "Carpentry & Joinery",
      description:
        "Quality woodwork and bespoke joinery fitted to a high standard, from shelving and skirting to full flatpack assembly.",
      items: [
        "Carpentry & Joinery",
        "Flatpack Assembly",
        "Shelving & Storage Solutions",
      ],
    },
    {
      title: "Painting & Tiling",
      description:
        "Transform your interiors with expert painting, decorating, and precision tiling on floors and walls throughout your home.",
      items: [
        "Painting & Decorating",
        "Floor & Wall Tiling",
        "Feature Walls & Finishing",
      ],
    },
    {
      title: "Exterior & Maintenance",
      description:
        "Keep the outside of your property in top condition with our guttering, fascia, and pressure washing services.",
      items: [
        "Guttering & Fascia Repairs",
        "Pressure Washing",
        "External Maintenance Checks",
      ],
    },
  ];

  return (
    <section className={cn("relative overflow-hidden bg-background py-16 px-4 lg:px-0 lg:py-28", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-3xl" />

      {/* Dot-grid texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="services-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-dots)" />
      </svg>

      <div className="container relative mx-auto">

        {/* ── Section heading ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-foreground lg:text-7xl font-serif tracking-tighter">
            Services
          </h2>
          {/* Decorative rule */}
          <div className="mt-5 h-px w-16 bg-primary" />
        </motion.div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Card number */}
              <span className="absolute right-7 top-7 font-mono text-4xl font-bold leading-none text-foreground/[0.05] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-foreground font-serif tracking-tighter">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-8 flex-1 text-base leading-relaxed text-muted-foreground font-sans">
                {service.description}
              </p>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-border" />

              {/* Items */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Services1 };
