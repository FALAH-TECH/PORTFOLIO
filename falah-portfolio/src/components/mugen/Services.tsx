"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    { title: "Brand Identity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
    { title: "Digital Design", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop" },
    { title: "Product Design", image: "https://images.unsplash.com/photo-1620712948343-0084236a22c1?q=80&w=2070&auto=format&fit=crop" },
    { title: "Marketing & Growth", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
    { title: "Development", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-6 relative border-b border-zinc-900 flex justify-center">
      
      <div className="w-full relative z-10 flex flex-col pt-12">
        
        {/* Top: [03] Services Label */}
        <div className="absolute top-0 left-0 hidden lg:block">
          <span className="text-[11px] font-bold text-white tracking-widest">[03] Services</span>
        </div>

        {/* Center Top: Title and Description */}
        <div className="flex flex-col items-center justify-center text-center mb-32 max-w-2xl mx-auto">
          <h2 className="text-[14vw] md:text-[8vw] lg:text-[10vw] font-black text-white tracking-tighter leading-none mb-8">
            Services
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 font-medium leading-[1.6] tracking-tight text-center px-4">
            Full-spectrum development capabilities under one roof. Whether you need a complete backend overhaul or ongoing UI support, I have the expertise to deliver. No outsourcing, no excuses, just exceptional work from a dedicated engineer.
          </p>
        </div>

        {/* Bottom Split: List and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* Left: Hover List */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setActiveIdx(idx)}
                className={`text-4xl md:text-5xl lg:text-[4vw] font-bold tracking-tighter cursor-pointer transition-all duration-300 ${activeIdx === idx ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'}`}
              >
                {srv.title}
              </div>
            ))}
          </div>

          {/* Right: Changing Image */}
          <div className="lg:col-span-8 lg:col-start-5 aspect-[16/9] w-full overflow-hidden bg-zinc-900 relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIdx}
                src={services[activeIdx].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover grayscale opacity-90 absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
