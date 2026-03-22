"use client";

import { motion } from "framer-motion";

export default function MugenHero() {

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent border-b border-zinc-900 border-opacity-50">
      
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none w-full h-full pt-16">
        <div className="flex flex-col items-center justify-center w-full relative">
          <h1 className="text-[22vw] md:text-[20vw] font-black uppercase tracking-tighter leading-[0.75] text-white z-0 relative mix-blend-difference overflow-hidden flex">
            {"FALAH".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <span 
            aria-hidden="true"
            className="text-[22vw] md:text-[20vw] font-black uppercase tracking-tighter leading-[0.75] text-transparent z-0 relative -mt-[4vw] md:-mt-[2vw] overflow-hidden flex"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
          >
             {"STUDIO".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </div>
      </div>

      {/* Top Center: Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-zinc-400"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available For Work
      </motion.div>

      {/* Bottom Left: Info */}
      <div className="absolute bottom-12 left-6 md:left-[5%] flex items-center gap-4 z-10">
        <div className="flex flex-col">
          <div className="flex text-[10px] text-zinc-300 font-bold tracking-widest gap-1 uppercase">
            System Design
          </div>
          <span className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mt-1">Architecture</span>
        </div>
      </div>

      {/* Bottom Center: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">Scroll</span>
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>

      {/* Bottom Right: Hero Description + CTAs */}
      <div className="absolute bottom-12 right-6 md:right-[5%] max-w-sm z-10 pr-0 md:pr-12 flex flex-col items-end gap-5">
        <p className="text-[17px] text-zinc-400 font-medium tracking-tight leading-[1.4] text-right">
          <strong className="text-white">Most websites are forgettable. <br/>I build the ones people remember.</strong><br />
          <span className="text-sm mt-2 block">Fast, modern websites for startups and businesses — delivered in 1–2 weeks.</span>
        </p>
        
        <p className="text-xs text-zinc-500 italic mt-[-8px]">
          I don't follow templates. I build custom experiences.
        </p>

        <div className="flex flex-col items-end gap-3 mt-1">
          <div className="flex flex-wrap items-center justify-end gap-3">
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="flex items-center justify-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md hover:bg-white/10 transition-all"
            >
              View Work
            </a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 mt-2 text-[10px] text-zinc-500 hover:text-zinc-300 font-bold uppercase tracking-widest transition-colors"
          >
            Download Resume
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M6 1v7M2 8l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
