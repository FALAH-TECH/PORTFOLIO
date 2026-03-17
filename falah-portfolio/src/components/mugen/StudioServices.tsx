"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      if (v > 0 && v < 1) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, index, setActiveIndex]);

  // Transform values based on scroll position within the element
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.15, 1, 1, 0.15]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const xOffset = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-40, 0, 0, -40]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center w-full py-20 relative">
      <motion.div 
        style={{ opacity, filter: blur, x: xOffset }} 
        className="flex flex-col gap-10 w-full"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full border-b border-zinc-800/80 pb-8 gap-6">
          <h2 className="text-5xl md:text-7xl lg:text-[5vw] font-sans tracking-tight text-white flex flex-col md:flex-row md:items-center gap-2 md:gap-6 font-medium leading-[1.1]">
             {service.title}
          </h2>
          <span className="text-2xl text-zinc-600 font-mono self-start lg:self-auto hidden lg:block">{service.id}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 max-w-3xl">
          {service.skills.map((skill: string, i: number) => (
            <div key={i} className="text-sm md:text-base text-zinc-400 font-medium flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full border border-zinc-600 bg-transparent"></span>
              {skill}
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex items-center">
           <button className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-white hover:text-black transition-colors backdrop-blur-md">
              View Service Details
           </button>
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
        </div>

        {/* Right Sticky Visual Content (Takes 5 columns) */}
        

      </div>
    </section>
  );
}
