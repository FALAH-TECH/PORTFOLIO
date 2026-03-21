"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "3", label: "Years of Experience" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="w-full bg-transparent py-24 md:py-32 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-start gap-3 group"
            >
              <motion.span
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
