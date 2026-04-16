"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Banknote, CheckCircle2 } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const hours = [
  { day: "Monday – Friday", time: "7:30 AM – 6:00 PM" },
  { day: "Saturday",        time: "8:00 AM – 2:00 PM" },
  { day: "Sunday",          time: "Closed" },
];

const contactDetails = [
  { icon: Phone, label: "Office",  value: "+353 1 456 7890",              href: "tel:+35314567890" },
  { icon: Phone, label: "Mobile",  value: "+353 87 234 5678",             href: "tel:+353872345678" },
  { icon: Mail,  label: "Email",   value: "info@fixrighthomeservices.ie", href: "mailto:info@fixrighthomeservices.ie" },
  { icon: MapPin,label: "Address", value: "14 Hawthorn Drive, Templeogue, Dublin 6W, D6W X482", href: "#" },
];

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <section className={cn("relative overflow-hidden bg-secondary py-16 px-4 lg:py-28 lg:px-0", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/[0.12] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-primary/[0.08] blur-3xl" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="contact-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-dots)" />
      </svg>

      <div className="container relative mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── Left column: heading + contact details ───────── */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Get in Touch
              </p>
              <h2 className="text-3xl font-bold text-secondary-foreground lg:text-5xl">
                Let&apos;s Get the Job Done
              </h2>
              <div className="mt-5 h-px w-16 bg-primary" />
              <p className="mt-6 font-serif text-lg text-secondary-foreground/70">
                Typically replies within 1 hour. No job too small — reach out and
                Sean will get back to you fast.
              </p>
            </motion.div>

            <ul className="mt-10 space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }, i) => (
                <motion.li
                  key={label}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40">
                      {label}
                    </p>
                    <a
                      href={href}
                      className="mt-0.5 block font-medium text-secondary-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <PremiumButton
                size="lg"
                shimmer
                className="gap-2"
                onClick={() => window.location.href = "tel:+353872345678"}
              >
                <Phone className="h-4 w-4" />
                Call Sean Now
              </PremiumButton>
              <PremiumButton
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = "mailto:info@fixrighthomeservices.ie"}
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </PremiumButton>
            </motion.div>
          </div>

          {/* ── Right column: hours + info cards ─────────────── */}
          <div className="space-y-6">

            {/* Opening Hours */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <Clock className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary-foreground">Opening Hours</h3>
              </div>
              <ul className="space-y-3">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-secondary-foreground/60">{day}</span>
                    <span className={cn(
                      "text-sm font-semibold",
                      time === "Closed" ? "text-destructive" : "text-secondary-foreground"
                    )}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Area */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <MapPin className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary-foreground">Service Area</h3>
              </div>
              <p className="text-sm text-secondary-foreground/70">
                Dublin 6, 6W, 8, 12, 14, 16 &amp; surrounding areas
              </p>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <Banknote className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary-foreground">Payment Methods</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Cash", "Bank Transfer", "Revolut"].map((method) => (
                  <span
                    key={method}
                    className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {method}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
