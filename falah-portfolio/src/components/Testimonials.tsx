"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = siteData.testimonials;

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-5xl h-96 bg-zinc-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Quote className="w-12 h-12 text-zinc-700" strokeWidth={1} />
        </motion.div>

        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full text-center px-4 md:px-16"
            >
              <p className="text-2xl md:text-4xl font-medium leading-tight text-white mb-8">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="pt-6 border-t border-white/10 mx-auto w-32 mb-4" />
              <h4 className="text-zinc-200 font-semibold tracking-wide uppercase text-sm">
                {testimonials[index].author}
              </h4>
              <span className="text-zinc-500 text-sm mt-1 block">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            data-interactive="true"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            data-interactive="true"
            aria-label="Next testimonial"
          >
             <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
