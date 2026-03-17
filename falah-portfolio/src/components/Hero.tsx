"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Hero() {
  const { developer } = siteData;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="relative w-full overflow-hidden flex flex-col">
      {/* Huge Marquee Text */}
      <div className="w-full overflow-hidden whitespace-nowrap py-4 lg:py-8 border-b border-white/20">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          className="inline-block"
        >
          <h1 className="text-[12vw] font-bold tracking-tighter uppercase leading-[0.8] pr-8 inline-block select-none">
            {developer.name} / {developer.name} /
          </h1>
          <h1 className="text-[12vw] font-bold tracking-tighter uppercase leading-[0.8] pr-8 inline-block select-none">
            {developer.name} / {developer.name} /
          </h1>
        </motion.div>
      </div>

      {/* Hero Bottom Split */}
      <div className="flex flex-col md:flex-row w-full flex-grow">
        
        {/* Left Info Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/20">
          <div>
            <p className="text-sm font-semibold mb-6">{today}</p>
            <p className="text-lg md:text-xl leading-snug text-zinc-300 max-w-sm mb-12">
              {developer.tagline}. {developer.shortIntro}
            </p>

            <div className="space-y-4 text-xs tracking-wide uppercase">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold">Category</span>
                <span className="text-zinc-400">Full-Stack Development</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold">Client</span>
                <span className="text-zinc-400">Freelance & Startups</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold">Status</span>
                <span className="text-zinc-400">Available for Work</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold">Location</span>
                <span className="text-zinc-400">Remote / India</span>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-24">
            <a href="#projects" className="inline-block border border-white rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Explore Work
            </a>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="w-full md:w-1/2 relative bg-zinc-900 min-h-[50vh] md:min-h-full p-6 lg:p-12 flex items-center justify-center overflow-hidden group">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
            alt="Developer coding setup" 
            className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 md:absolute md:inset-6 md:w-[calc(100%-3rem)] md:h-[calc(100%-3rem)]"
          />
          {/* Subtle social pill floating on image */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex bg-black text-white w-8 h-8 rounded-full items-center justify-center">
            
          </div>
        </div>

      </div>
    </section>
  );
}
