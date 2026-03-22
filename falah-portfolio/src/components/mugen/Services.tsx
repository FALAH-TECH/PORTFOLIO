"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Landing Page Design & Development",
    description: "High-converting landing pages designed to stand out and load fast. Delivered in 5–7 days.",
    tags: ["UI/UX", "Conversion", "Fast Delivery"],
    color: "rgba(255, 255, 255, 0.05)",
    price: "₹3,000"
  },
  {
    title: "Business Website",
    description: "Modern, responsive websites for small businesses. Built for clarity, speed, and real-world use.",
    tags: ["Responsive", "SEO", "Performance"],
    color: "rgba(200, 200, 200, 0.05)",
    price: "₹8,000"
  },
  {
    title: "Website Redesign",
    description: "Upgrade outdated websites into clean, premium experiences with better UI and performance.",
    tags: ["UI Revamp", "Optimization", "Modernization"],
    color: "rgba(150, 150, 150, 0.05)",
    price: "₹5,000"
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-black relative overflow-hidden py-32 px-6 sm:px-12 min-h-[800px] flex flex-col justify-center">

      {/* SVG Filter for Liquid Effect */}
      <svg className="hidden">
        <filter id="liquid-services">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
        </filter>
      </svg>

      {/* Ethereal/Liquid Smoke Effect */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ filter: 'url(#liquid-services)' }}>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-white blur-[180px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
            x: [50, -50, 50],
            y: [30, -30, 30],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/2 right-1/4 w-[700px] h-[700px] bg-zinc-400 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            My Services
          </h2>
        </motion.div>

        {/* FlowStack Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px] min-h-[600px] lg:min-h-0 w-full">
          {services.map((service, index) => {
            const isHovered = hoveredIdx === index;
            const isNothingHovered = hoveredIdx === null;

            return (
              <motion.div
                key={service.title}
                layout
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                // Click for mobile support
                onClick={() => setHoveredIdx(hoveredIdx === index ? null : index)}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 35,
                  mass: 1
                }}
                style={{
                  flex: isHovered ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 3) : 1,
                }}
                className={`relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm cursor-pointer transition-colors duration-500 ${isHovered ? 'border-white/20 bg-white/[0.05]' : 'border-white/5'}`}
              >
                {/* Content Overlay */}
                <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <motion.span
                      layout
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 block"
                    >
                      0{index + 1}
                    </motion.span>

                    <motion.h3
                      layout
                      className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4 leading-[0.95]"
                    >
                      {service.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </motion.h3>

                    <motion.span
                      layout
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8 block opacity-80"
                    >
                      Starting from {service.price}
                    </motion.span>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="max-w-[320px]"
                        >
                          <p className="text-zinc-300 font-medium text-base leading-relaxed mb-8">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 px-4 py-2 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div layout className="flex justify-between items-end">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-zinc-400 group-hover:text-black transition-colors"
                      >
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Subtle Background Glow for active card */}
                {isHovered && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 z-10 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
