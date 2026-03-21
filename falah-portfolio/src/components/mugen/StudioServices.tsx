"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Website development",
    skills: [
      "Next.js Website Development", 
      "React Website Development", 
      "Custom Web Applications", 
      "High-Performance Architecture"
    ],
    
  },
  {
    id: "02",
    title: "Branding and design",
    skills: [
      "UI/UX Design", 
      "Visual Identity", 
      "Interactive Prototypes", 
      "Design Systems"
    ],
    highlight: "Crafting digital identities that look phenomenal and feel intuitive."
  },
  {
    id: "03",
    title: "AI Integrations",
    skills: [
      "LLM Agents", 
      "OpenAI / Anthropic API", 
      "Vector Databases", 
      "Automated Workflows"
    ],
    highlight: "Automating workflows with intelligent, context-aware AI systems."
  }
];

const ServiceItem = ({ service, index, setActiveIndex }: any) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 1, 1, 0.1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center w-full py-20 relative perspective-[1000px]">
      <motion.div 
        onViewportEnter={() => setActiveIndex(index)}
        viewport={{ amount: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ opacity, scale, rotateX, rotateY }} 
        className="flex flex-col gap-10 w-full p-12 rounded-2xl bg-zinc-950/20 border border-zinc-900/50 backdrop-blur-sm shadow-2xl transition-shadow hover:shadow-emerald-500/5"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full border-b border-zinc-800/80 pb-8 gap-6">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5vw] font-bold tracking-tighter text-white font-medium leading-[1]">
             {service.title}
          </h2>
          <span className="text-2xl text-zinc-700 font-mono hidden lg:block">{service.id}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 max-w-3xl">
          {service.skills.map((skill: string, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm md:text-base text-zinc-400 font-medium flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
              {skill}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex items-center">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center gap-3 transition-colors hover:bg-zinc-200"
            >
              Start Project —
           </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default function StudioServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-black w-full min-h-screen border-b border-zinc-900 border-opacity-50">
      


      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1800px] mx-auto relative px-6 lg:px-12">
        
        {/* Left Scrollable Content (Takes 7 columns) */}
        <div className="col-span-1 lg:col-span-7 py-[30vh]">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index} 
              setActiveIndex={setActiveIndex} 
            />
          ))}
        </div>        {/* Right Sticky Visual Content - Now Minimal/Ethereal */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            {/* SVG Filter for Liquid Effect */}
            <svg className="hidden">
              <filter id="liquid">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
              </filter>
            </svg>

            {/* Ethereal/Liquid Smoke Effect */}
            <div className="absolute inset-0 z-0 opacity-40" style={{ filter: 'url(#liquid)' }}>
               <motion.div 
                 animate={{
                   scale: [1, 1.4, 1],
                   opacity: [0.1, 0.2, 0.1],
                   x: [0, 100, 0],
                   y: [0, 50, 0],
                 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-white blur-[180px] rounded-full"
               />
               <motion.div 
                 animate={{
                   scale: [1.3, 1, 1.3],
                   opacity: [0.15, 0.05, 0.15],
                   x: [0, -80, 0],
                   y: [0, -70, 0],
                 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-zinc-400 blur-[150px] rounded-full"
               />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full h-full flex items-center justify-center p-12"
              >
                {/* Visual space is now purely atmospheric smoke */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
