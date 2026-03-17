"use client";

import { motion } from "framer-motion";

export default function MugenHero() {

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent border-b border-zinc-900 border-opacity-50">
      
      {/* Massive Background Typography - Rearranged */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none w-full h-full pt-16">
        <div className="flex flex-col items-center justify-center w-full relative">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[20vw] md:text-[18vw] font-black uppercase tracking-tighter leading-[0.8] text-white z-0 relative mix-blend-difference"
          >
            FALAH
          </motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-[20vw] md:text-[18vw] font-black uppercase tracking-tighter leading-[0.8] text-transparent z-0 relative -mt-[8vw] md:-mt-[6vw]"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}
          >
            STUDIO
          </motion.h1>
        </div>
      </div>



      {/* Bottom Left: Info */}
      <div className="absolute bottom-12 left-6 md:left-[5%] flex items-center gap-4 z-10">
        <div className="flex flex-col">
          <div className="flex text-[10px] text-zinc-300 font-bold tracking-widest gap-1 uppercase">
            System Design
          </div>
          <span className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mt-1">Architecture</span>
        </div>
      </div>

      {/* Bottom Right: Hero Description */}
      <div className="absolute bottom-12 right-6 md:right-[5%] max-w-sm z-10 pr-0 md:pr-12">
        <p className="text-[17px] text-zinc-400 font-medium tracking-tight leading-[1.4]">
          <strong className="text-white">We've reimagined how great development happens.</strong> No generic templates. No messy codebases. No communication gaps. Just exceptional full-stack work.
        </p>
      </div>

    </section>
  );
}
