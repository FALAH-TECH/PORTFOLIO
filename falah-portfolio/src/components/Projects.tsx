"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full border-t border-white/20 pt-16 lg:pt-24 flex flex-col">
      
      {/* Title Header Matching Screenshot 3/4 */}
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-lg">
            Building scalable websites, modern interfaces, and AI-powered products.
          </h2>
        </div>
        <div className="flex md:justify-end items-end relative">
          <motion.img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract design flow"
            className="w-full max-w-sm h-48 object-cover rounded-xl grayscale"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
            
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-y border-white/20 text-[10px] uppercase font-bold tracking-widest px-6 md:px-12 py-2 mb-12">
        <span>Software Engineering</span>
        <span className="text-center">Freelancer</span>
        <span className="text-right text-zinc-400">Developer</span>
      </div>

      {/* Massive Section Title */}
      <div className="px-6 md:px-12 mb-16 overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15vw] font-bold tracking-tighter uppercase leading-[0.8]"
        >
          WORK™
        </motion.h1>
      </div>

      {/* Project Grid Matching Screenshot Cards */}
      <div className="bg-zinc-950 p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        
        {siteData.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-black rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{project.category}</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-8 line-clamp-3">{project.description}</p>
            </div>
            
            <div className="space-y-4 text-[10px] uppercase tracking-widest">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-zinc-500">Focus</span>
                <span className="text-white text-right max-w-[60%] truncate">{project.focus}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="font-semibold text-zinc-500">Tech Stack</span>
                <span className="text-white text-right max-w-[60%] truncate">{project.technologies.join(', ')}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Dummy Service/Pricing Card to match the $99/Month card in the template */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zinc-900 rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 block">Freelance Retainer</span>
            <h3 className="text-5xl font-bold mb-4">Hire.<span className="text-zinc-500 text-2xl font-normal ml-2">Available</span></h3>
            <p className="text-sm text-zinc-400 mb-8">
              Open for contract roles involving full-stack web development and AI integration.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="pb-1">✓</span> Frontend Development (Next.js)
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="pb-1">✓</span> Backend Architecture
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="pb-1">✓</span> AI API Integration
              </li>
            </ul>
          </div>
          <a href="#contact" className="block w-full text-center bg-white text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-300 transition-colors">
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
