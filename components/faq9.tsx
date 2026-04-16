"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "FixRight Home Services operates across Dublin 6, 6W, 8, 12, 14, 16, and the surrounding areas. Not sure if we cover your area? Give us a call on +353 87 234 5678 and we'll be happy to help.",
  },
  {
    question: "How quickly can you respond to a job request?",
    answer:
      "We typically respond to enquiries within 1 hour. For urgent repairs we do our best to get to you as quickly as possible. You can reach us by phone, mobile, or email at info@fixrighthomeservices.ie.",
  },
  {
    question: "Do you take on small jobs or only large projects?",
    answer:
      "No job is too small for FixRight. Whether it's a single leaky tap, assembling flatpack furniture, or a full room renovation, Sean is happy to help. We believe every home deserves the same quality of care regardless of the job size.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer, and Revolut. Payment details will be confirmed when your job is booked in.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes, FixRight Home Services carries full public liability insurance, giving you complete peace of mind on every job carried out in your home.",
  },
  {
    question: "Do you provide a quote before starting work?",
    answer:
      "Absolutely. We'll assess the job and provide a clear, honest quote upfront with no hidden costs. We pride ourselves on transparent pricing and straightforward communication from start to finish.",
  },
];

interface Faq9Props {
  className?: string;
}

const Faq9 = ({ className }: Faq9Props) => {
  return (
    <section className={cn("relative overflow-hidden py-16 px-4 lg:py-28 lg:px-0", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[450px] w-[450px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-primary/[0.04] blur-3xl" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="faq-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-dots)" />
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Got Questions?
          </p>
          <h2 className="text-3xl font-bold md:text-6xl font-serif tracking-tighter">FAQ</h2>
          <div className="mt-5 h-px w-16 bg-primary" />
        </motion.div>

        {/* ── Accordion items ──────────────────────────────────── */}
        <Accordion type="multiple" className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card px-6 py-1 shadow-sm transition-shadow duration-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="gap-4 text-left font-semibold text-foreground hover:no-underline [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export { Faq9 };
