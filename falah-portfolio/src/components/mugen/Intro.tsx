"use client";

import { motion } from "framer-motion";

export default function MugenIntro() {
  return (
    <section className="w-full bg-transparent py-32 md:py-48 relative border-b border-zinc-900">
      
      <div className="w-full flex flex-col relative z-10 px-6">
        
        {/* Top: Approach Label & Massive Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-4 mb-24 md:mb-48">
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold text-white tracking-widest">[Our Approach]</span>
          </div>
          <div className="lg:col-span-9 lg:col-start-3 pr-0 md:pr-12">
            <h2 className="text-[7vw] md:text-[5vw] lg:text-[4.8vw] font-bold leading-[1.05] tracking-tighter">
              <motion.span 
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 0.8 }}
                className="text-white block"
              >
                {[
                  "Generic portfolios perfected the art of the pitch.",
                  "I perfected the art of the code.",
                  "When you need software that moves",
                  "at the speed of your ambition,",
                  "you need a different kind of developer."
                ].map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.span>
            </h2>
          </div>
        </div>

        {/* Bottom: Split Profile & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-4 items-end">

          
        </div>

      </div>
    </section>
  );
}
