"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  const projects = [
    {
      title: "MSA LBSCEK Website",
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-8",
    },
    {
      title: "Neuronote",
      category: "Mobile AI App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-4",
    },
    {
      title: "LifeLoop AI",
      category: "Healthcare Partner",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-12",
    }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white"
          >
            PROJECTS
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors pb-2 border-b border-zinc-800 hover:border-white"
          >
            View All Work 
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/5] sm:aspect-square md:aspect-[16/9] lg:aspect-auto ${project.colSpan} cursor-pointer min-h-[400px] md:min-h-[500px] lg:h-[60vh] max-h-[800px] block`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base uppercase tracking-widest font-medium">
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-xl"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
