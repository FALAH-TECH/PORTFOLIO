"use client";

import { motion, Variants } from "framer-motion";
import { siteData } from "@/lib/data";
import * as Icons from "lucide-react";

export default function ToolsGrid() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">Core Stack</h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            The software and platforms I use daily to design, develop, and deploy scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {siteData.tools.map((tool) => {
            // @ts-ignore - Dynamic icon rendering
            const IconComponent = Icons[tool.icon] || Icons.Wrench;
            
            return (
              <motion.div
                key={tool.name}
                variants={item}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center"
                data-interactive="true"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-zinc-300">{tool.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
