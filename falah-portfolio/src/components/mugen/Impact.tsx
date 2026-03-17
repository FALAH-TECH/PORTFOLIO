"use client";

import { motion } from "framer-motion";

export default function Impact() {
  const metrics = [
    { value: "20+", label: "Projects Delivered" },
    { value: "3+", label: "AI Products Launched" },
    { value: "100%", label: "High Performance" },
    { value: "24/7", label: "Modern UI Systems" }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6 relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Side: Headline */}
        <div className="flex flex-col justify-center pr-0 lg:pr-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[6vw] lg:text-[5vw] font-bold text-zinc-600 leading-[0.9] tracking-tighter uppercase"
          >
            We deliver more than design. <br />
            <span className="text-white">We deliver momentum.</span>
          </motion.h2>
        </div>

        {/* Right Side: Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="aspect-square bg-[#050505] border border-white/5 rounded-2xl p-6 md:p-10 flex flex-col justify-between hover:bg-zinc-900 hover:border-white/10 transition-all duration-500"
            >
              <span className="text-zinc-600 font-medium text-xs md:text-sm uppercase tracking-widest">
                / 0{idx + 1}
              </span>
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-2 md:mb-4">
                  {metric.value}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 font-medium leading-snug">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
