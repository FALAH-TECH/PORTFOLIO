"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent relative overflow-hidden text-white pt-32 pb-6 px-6 sm:px-12 font-sans border-t border-zinc-900 min-h-screen flex flex-col justify-between">

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12">

        {/* Left Column */}
        <div className="flex flex-col gap-32">

          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-zinc-400 mb-2">Based in Kerala (IN) 03:54 PM</span>
            <a href="mailto:contact@falah.dev" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter inline-flex items-center gap-2 pb-2 border-b border-zinc-700 w-fit hover:text-zinc-300 hover:border-zinc-500 transition-colors">
              contact@falah.dev <span className="text-xl">+</span>
            </a>
          </div>

          <div className="flex flex-col gap-8 max-w-md">
            <span className="text-white text-3xl font-serif leading-none">“</span>
            <p className="text-lg md:text-xl font-semibold leading-snug tracking-tight text-zinc-300">
              <span className="text-white">Your next project deserves world-class code.</span> Stop settling for mediocre and start working with a developer who cares as much as you do.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 rounded-sm overflow-hidden bg-zinc-800 grayscale">
                <img src="https://images.unsplash.com/photo-1620712948343-0084236a22c1?q=80&w=400&auto=format&fit=crop" alt="Abstract Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-sm font-bold">Falah Fazal</h4>
                <p className="text-zinc-500 text-xs font-semibold">Full-Stack Developer</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-zinc-400">Subscribe to our newsletter.</span>
            <div className="flex max-w-sm">
              <input type="email" placeholder="Email" className="bg-transparent border border-zinc-800 border-r-0 text-white p-3 text-sm flex-1 focus:outline-none focus:border-zinc-600 rounded-l-sm" />
              <button className="bg-transparent border border-zinc-800 border-l-0 text-white px-5 hover:bg-zinc-900 transition-colors rounded-r-sm text-lg">+</button>
            </div>
          </div>

          <nav className="flex flex-col gap-2 mt-24">
            {['Home', 'Work [3]','Contact'].map((item) => (
              <a key={item} href="#" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white hover:text-zinc-400 transition-colors w-fit">
                {item}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Bottom Legal / Social */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-zinc-400 mt-32 px-4 md:px-12">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Terms of Service </a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy </a>
        </div>
        <div className="flex gap-6 mt-6 md:mt-0 text-[10px] uppercase tracking-widest">
          <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">X</a>
          <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">Ig</a>
          <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">Ww</a>
          <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">In</a>
        </div>
      </div>

      {/* Absolute Bottom Massive Text */}
      <div className="relative z-0 w-full overflow-hidden flex justify-center mt-auto pt-24 translate-y-24">
        <h1 className="text-[28vw] font-black text-white leading-[0.6] tracking-tighter select-none">
          FALAH
        </h1>
      </div>
    </footer>
  );
}
