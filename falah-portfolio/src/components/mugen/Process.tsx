"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Discovery",
      description: "We map out the project scope, core objectives, and technical constraints before writing a single line of code."
    },
    {
      title: "Design",
      description: "Crafting a clean, visually impactful design system with interactive prototypes for immediate feedback."
    },
    {
      title: "Development",
      description: "Writing scalable, performant code using modern web technologies and AI integrations."
    },
    {
      title: "Launch",
      description: "Rigorous testing, optimization, and a seamless deployment followed by ongoing support."
    }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left Side: Headline */}
        <div className="lg:col-span-5 pr-0 lg:pr-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-bold text-white leading-[1.05] tracking-tighter uppercase sticky top-32"
          >
            A proven process that delivers results, <br />
            <span className="text-zinc-600">not surprises.</span>
          </motion.h2>
        </div>

        {/* Right Side: Numbered Blocks */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 pl-0 md:pl-12 lg:pl-16 border-l-0 lg:border-l border-zinc-900">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col gap-4 border-b border-zinc-900 pb-8 md:pb-12"
            >
              <div className="flex items-center gap-6 mb-4">
                <span className="text-sm font-bold text-zinc-600 border border-zinc-800 rounded-full w-10 h-10 flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed max-w-lg pl-16">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
