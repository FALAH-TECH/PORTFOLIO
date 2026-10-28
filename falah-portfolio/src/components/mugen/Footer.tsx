"use client";

import { m } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent relative overflow-hidden text-white py-32 pb-48 px-6 sm:px-12 font-sans min-h-[90vh] flex flex-col items-center justify-center">
      


      {/* Ethereal Smoke Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
         <m.div 
           animate={{
             scale: [1, 1.3, 1],
             opacity: [0.1, 0.15, 0.1],
             x: [-50, 50, -50],
             y: [-30, 30, -30],
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 left-1/3 w-[900px] h-[900px] bg-white blur-[200px] rounded-full"
         />
         <m.div 
           animate={{
             scale: [1.2, 1, 1.2],
             opacity: [0.12, 0.08, 0.12],
             x: [50, -50, 50],
             y: [30, -30, 30],
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 right-1/3 w-[800px] h-[800px] bg-zinc-400 blur-[180px] rounded-full"
         />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Availability Badge */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-zinc-400"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available For Work
        </m.div>

        {/* Massive CTA */}
        <m.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1] max-w-4xl"
        >
          Have an idea? <br className="hidden md:block" />
          <span className="text-zinc-500">Let&apos;s build it.</span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl -mt-2"
        >
          I design and develop modern websites for startups and businesses — delivered in 1–2 weeks.
        </m.p>

        {/* Action Buttons */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-8"
        >
          <m.a 
            href="https://wa.me/919745395448" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center px-10 py-5 rounded-2xl bg-white text-black transition-all w-full sm:w-auto min-w-[280px]"
          >
            <span className="font-bold text-sm tracking-tight mb-1.5">Start a Project</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">WhatsApp: +91 9745395448</span>
          </m.a>

          <m.a 
            href="mailto:falahfazal10@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-md min-w-[280px]"
          >
            <span className="font-bold text-sm tracking-tight mb-1.5">Send Email</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">falahfazal10@gmail.com</span>
          </m.a>
        </m.div>

        {/* Centered Socials with Dividers */}
        <nav aria-label="Social links">
          <m.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6 mt-16 text-zinc-500 text-sm font-bold uppercase tracking-widest"
          >
            <a href="https://www.linkedin.com/in/falahfazal/" aria-label="Visit LinkedIn profile" className="hover:text-white transition-colors">LinkedIn</a>
            <div className="w-[1px] h-4 bg-zinc-800" aria-hidden="true" />
            <a href="https://x.com/Falaah__" aria-label="Visit X (Twitter) profile" className="hover:text-white transition-colors">X</a>
            <div className="w-[1px] h-4 bg-zinc-800" aria-hidden="true" />
            <a href="https://www.instagram.com/_falaaah___/" aria-label="Visit Instagram profile" className="hover:text-white transition-colors">Instagram</a>
            <div className="w-[1px] h-4 bg-zinc-800" aria-hidden="true" />
            <a href="https://github.com/FALAH-TECH" aria-label="Visit GitHub profile" className="hover:text-white transition-colors">GitHub</a>
          </m.div>
        </nav>
      </div>

      {/* Bottom Bar Info */}
      <div className="absolute bottom-12 w-full px-12 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 z-10">
        <a href="mailto:falahfazal10@gmail.com" className="hover:text-white transition-colors order-2 md:order-1">
          falahfazal10@gmail.com
        </a>
        
        <div className="order-1 md:order-2 flex items-center gap-2">
          DESIGNED BY <span className="text-white">FALAH</span>
        </div>

        <div className="order-3 opacity-50">
          ALL RIGHTS RESERVED © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
