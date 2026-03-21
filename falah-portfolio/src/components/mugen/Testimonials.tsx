"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Thanseeha Nasrin",
    role: "Campus Lead, MSA LBSCEK",
    quote: "From day one, Falah got what we were trying to do — make our digital platform feel accessible, human, and forward-looking. The collaboration completely reshaped how we show up on the web.",
    initials: "TN",
  },
  {
    name: "Shanifa Nazrin",
    role: "Co-Founder, NeuroNote",
    quote: "Working with Falah was effortless. He brought strong opinions, clean code, and an eye for design that I hadn't expected from a developer. The app shipped on time and exceeded our expectations.",
    initials: "SN",
  },
  {
    name: "Muhammed Sinan",
    role: "Desgin Lead, LifeLoop Health",
    quote: "Falah built us a production-grade healthcare dashboard in just 6 weeks. Zero downtime since launch, the nurses love it, and the code is actually maintainable. That last part is rare.",
    initials: "MS",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  return (
    <section className="w-full bg-transparent py-32 md:py-48 relative border-b border-zinc-900 px-6">
      
      <div className="w-full relative z-10 flex flex-col max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-4 mb-20">
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold text-white tracking-widest">[06] Testimonials</span>
          </div>
          <div className="lg:col-span-10 text-center lg:text-left lg:col-start-5 flex flex-col">
            <h2 className="text-[7vw] md:text-[4.5vw] lg:text-[3.5vw] font-bold leading-[1.05] tracking-tighter max-w-2xl">
              <span className="text-white">Trusted</span>
              <span className="text-zinc-500"> by the most innovative teams.</span>
            </h2>
            <p className="text-zinc-400 font-semibold mt-4 text-xs md:text-sm">Results speak louder than promises.</p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-10 max-w-4xl"
            >
              <span className="text-white text-3xl font-serif leading-none" aria-hidden="true">"</span>
              <blockquote>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-[1.4] tracking-tight">
                  {current.quote}
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-black text-white">
                  {current.initials}
                </div>
                  <cite className="not-italic">
                    <p className="text-white font-bold text-xs">{current.name}</p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mt-0.5">{current.role}</p>
                  </cite>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-16">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-black"/>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all ${i === idx ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-400'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-black"/>
              </svg>
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 ml-4">
              {String(idx + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
