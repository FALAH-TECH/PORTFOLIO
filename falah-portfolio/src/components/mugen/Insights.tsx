"use client";

import { motion } from "framer-motion";

export default function Insights() {
  const steps = [
    {
      num: "01",
      title: "Share your idea",
      description: "Tell me what you need — website, landing page, or redesign."
    },
    {
      num: "02",
      title: "Design & Build",
      description: "I design and develop a modern, fast, and responsive website."
    },
    {
      num: "03",
      title: "Review & Refine",
      description: "You review the work and request any changes."
    },
    {
      num: "04",
      title: "Final Delivery",
      description: "Your website is ready to launch within 1–2 weeks."
    }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-white max-w-4xl leading-none"
          >
            How It Works <br />
            <span className="text-zinc-600 md:text-[0.65em] tracking-tight">A simple process to bring your idea to life.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col gap-8 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[250px] justify-between"
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-emerald-500 font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  // {step.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-snug group-hover:text-zinc-200 transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-zinc-400 font-medium leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
