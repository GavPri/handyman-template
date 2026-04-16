"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Aoife Brennan",
    role: "Dublin 14",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Sean did a brilliant job tiling our bathroom. Neat, tidy, and finished ahead of schedule. Would highly recommend to anyone in Dublin!",
  },
  {
    name: "Paul Kavanagh",
    role: "Dublin 6W",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "Called FixRight for a few small repairs around the house — a leaky tap, a sticking door, and some painting. All sorted in one visit. Great value and very professional.",
  },
  {
    name: "Margaret & Tom Reilly",
    role: "Dublin 12",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Honest pricing and excellent workmanship. Sean replaced our guttering and fascia boards and the finish is perfect. Will definitely be using FixRight again.",
  },
  {
    name: "Ciara Dunne",
    role: "Dublin 8",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Very responsive and easy to deal with. Assembled a load of IKEA furniture for us and had it all done in a few hours. Saved us a weekend of stress!",
  },
  {
    name: "Declan O'Brien",
    role: "Dublin 6",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "Had Sean fit new shelving and skirting boards throughout the hallway. Immaculate finish, fair price, and he left the place spotless. Couldn't ask for more.",
  },
  {
    name: "Sinéad Walsh",
    role: "Dublin 16",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "Sean painted our entire ground floor and the results are stunning. Punctual every day, tidied up after himself, and the attention to detail was second to none.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

interface Testimonial6Props {
  className?: string;
}

const Testimonial6 = ({ className }: Testimonial6Props) => {
  return (
    <section className={cn("relative overflow-hidden py-16 px-4 lg:py-28 lg:px-4", className)}>

      {/* ── Background ambience ─────────────────────────────── */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/[0.04] blur-3xl" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="testimonial-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
      </svg>

      <div className="container relative mx-auto">
        <Carousel className="w-full">

          {/* ── Section heading ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mb-10 flex items-end justify-between px-1 lg:mb-14"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Client Reviews
              </p>
              <h2 className="text-2xl font-bold lg:text-5xl font-serif tracking-tighter">
                Why Clients Love Us
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="flex items-center space-x-2 pb-1">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </motion.div>

          {/* ── Testimonial cards ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      {/* Top accent bar */}
                      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />

                      {/* Decorative quote mark */}
                      <span className="pointer-events-none absolute right-6 top-5 select-none font-serif text-7xl leading-none text-foreground/[0.04]">
                        &ldquo;
                      </span>

                      <div className="space-y-4">
                        <StarRating />
                        <q className="block  leading-7 text-foreground/70 italic font-sans">
                          {testimonial.content}
                        </q>
                      </div>

                      <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
                        <Avatar className="size-10 rounded-full ring-2 ring-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        </Avatar>
                        <div className="text-sm leading-tight">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="mt-0.5 text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>

        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial6 };
