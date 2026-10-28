"use client";

import { m } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 brightness-75 contrast-125 mix-blend-overlay z-10 pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Animated Gradient Orbs */}
      <m.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 80, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-emerald-700/20 blur-[100px]"
      />
      <m.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -60, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-indigo-800/15 blur-[120px]"
      />
      <m.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [40, -40, 40],
          y: [-40, 40, -40],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-zinc-800/20 blur-[150px]"
      />
    </div>
  );
}
