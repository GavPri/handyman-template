"use client";

import { motion } from "framer-motion";
import { CircleArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const NAVIGATION = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Google", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

interface Footer30Props {
  className?: string;
}

const Footer30 = ({ className }: Footer30Props) => {
  return (
    <footer className={cn("relative overflow-hidden pt-16 px-4 lg:px-0", className)}>

      {/* ── Top separator ────────────────────────────────────── */}
      <div className="container mx-auto mb-16">
        <div className="h-px w-full bg-border" />
      </div>

      <div className="container mx-auto">

        {/* ── Contact + Nav ────────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-16 lg:flex-row">

          {/* Contact block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex flex-col gap-2"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <a className="font-medium tracking-tight transition-colors hover:text-primary" href="tel:+35314567890">
              +353 1 456 7890
            </a>
            <a
              className="relative text-2xl font-semibold tracking-tight transition-colors hover:text-primary lg:text-4xl"
              href="mailto:info@fixrighthomeservices.ie"
            >
              info@fixrighthomeservices.ie
            </a>
          </motion.div>

          {/* Navigation columns */}
          <div className="flex gap-20">
            <ul className="space-y-2">
              <li className="mb-6 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Navigate
              </li>
              {NAVIGATION.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-lg font-semibold tracking-tight transition-colors hover:text-primary"
                  >
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <ul className="space-y-2">
              <li className="mb-6 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Social
              </li>
              {SOCIAL_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors hover:text-primary"
                  >
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                      {item.label}
                    </span>
                    <CircleArrowOutUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Wordmark ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-10 select-none text-[13vw] font-semibold tracking-tighter text-foreground/[0.07] lg:text-right lg:text-[10vw]"
        >
          FixRight<sup className="font-light text-primary">&reg;</sup>{" "}
        </motion.div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div className="dark relative mt-0 flex h-24 w-full flex-col items-center justify-center gap-2 bg-background text-sm tracking-tight text-foreground lg:h-16 lg:flex-row lg:justify-between lg:gap-4 lg:text-base">
          <div className="relative z-10 flex items-center gap-4 lg:gap-10">
            <p className="text-foreground/50">
              &copy;{new Date().getFullYear()} FixRight Home Services. All rights reserved.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-4 lg:gap-10">
            {FOOTER_LINKS.map((item, index) => (
              <a
                href={item.href}
                className="text-foreground/50 transition-colors hover:text-foreground"
                key={index}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="absolute left-1/2 h-full w-screen -translate-x-1/2 bg-background" />
        </div>

      </div>
    </footer>
  );
};

export { Footer30 };
