"use client";

import { motion, Variants } from "framer-motion";
import { siteData } from "@/lib/data";

export default function SkillsGrid() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-6">Capabilities</h2>
            <p className="text-zinc-400 max-w-sm">
              Technologies and languages I use to bring digital products to life.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4"
          >
            {siteData.skills.map((skill) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-panel px-6 py-4 rounded-full flex items-center justify-center whitespace-nowrap"
                data-interactive="true"
              >
                <span className="text-sm font-medium text-zinc-200">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
