"use client";

import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section className="w-full bg-black relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]"
        >
          <span className="text-zinc-500 block mb-2 md:mb-4">I don’t just build websites.</span>
          <span className="text-white">I build things that make people stop scrolling.</span>
        </motion.h2>
      </div>
    </section>
  );
}
