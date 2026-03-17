"use client";

import { motion } from "framer-motion";

export default function Insights() {
  const articles = [
    {
      title: "The Shift to Component-Driven Development",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Designing for the AI-First Web Experience",
      category: "Design Strategy",
      image: "https://images.unsplash.com/photo-1620712948343-0084236a22c1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Performance Budgets in Next.js Apps",
      category: "Optimization",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white max-w-2xl leading-none"
          >
            Strategic insights <br />
            <span className="text-zinc-600">from the field.</span>
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors pb-2 border-b border-zinc-800 hover:border-white shrink-0"
          >
            View All Articles 
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  {article.category}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-snug group-hover:text-zinc-300 transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
