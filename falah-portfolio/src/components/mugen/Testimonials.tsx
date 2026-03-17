"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="w-full bg-transparent py-32 md:py-48 relative border-b border-zinc-900 px-6">
      
      <div className="w-full relative z-10 flex flex-col">
        
        {/* Top: [06] Testimonials & Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-4 mb-32">
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold text-white tracking-widest">[06] Testimonials</span>
          </div>
          <div className="lg:col-span-10 text-center lg:text-left lg:col-start-5 flex flex-col">
            <h2 className="text-[10vw] md:text-[6vw] lg:text-[5vw] font-bold leading-[1.05] tracking-tighter max-w-2xl">
              <span className="text-white">Trusted</span>
              <span className="text-zinc-500"> by the most innovative teams.</span>
            </h2>
            <p className="text-zinc-400 font-semibold mt-4 text-sm md:text-base">Results speak louder than promises.</p>
          </div>
        </div>

        {/* Bottom Split: Portrait & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-4 items-end max-w-7xl mx-auto w-full">
          
          {/* Portrait Image */}
          <div className="lg:col-span-3 lg:col-start-1 max-w-[320px]">
            <div className="w-full aspect-[4/5] bg-zinc-900 overflow-hidden relative grayscale">
              <img 
                src="https://images.unsplash.com/photo-1620712948343-0084236a22c1?q=80&w=600&auto=format&fit=crop" 
                alt="Abstract Object"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-7 lg:col-start-5 pb-8 pl-0 lg:pl-12">
            <div className="flex flex-col gap-6">
              <span className="text-white text-4xl font-serif">“</span>
              <p className="text-white text-2xl md:text-3xl lg:text-[2vw] font-bold leading-[1.3] tracking-tight max-w-4xl">
                From day one, they got what we were trying to do—make digital platforms feel accessible, human, and forward-looking. The collaboration has completely reshaped how we show up on the web.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
