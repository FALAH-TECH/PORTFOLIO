"use client";

import { motion } from "framer-motion";
import StepCarousel from "./StepCarousel";

export default function Blog() {
  const steps = [
    {
      num: "01",
      title: "Tell me your idea",
      description: "Share what you need — website, landing page, or redesign."
    },
    {
      num: "02",
      title: "I build it",
      description: "I design and develop a modern, fast, responsive website."
    },
    {
      num: "03",
      title: "You refine it",
      description: "You review and request changes."
    },
    {
      num: "04",
      title: "We launch",
      description: "Your website is ready within 1–2 weeks."
    }
  ];

  return (
    <section id="writing" className="w-full bg-transparent py-32 md:py-48 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-3 block">Process</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              How it<br /><span className="text-zinc-600">Works.</span>
            </h2>
            <p className="text-zinc-400 mt-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">A simple process to bring your idea to life.</p>
          </div>
        </motion.div>

        {/* Steps Carousel */}
        <div className="mt-8 md:mt-12">
          <StepCarousel steps={steps} />
        </div>

      </div>
    </section>
  );
}
