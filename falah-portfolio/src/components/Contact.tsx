"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="w-full flex flex-col border-t border-white/20 bg-[#050505]">
      
      {/* Top Split Area */}
      <div className="flex flex-col md:flex-row w-full min-h-[50vh]">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/20 flex items-center justify-center">
          <motion.img 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1531297172867-4f40a36d158e?q=80&w=2070&auto=format&fit=crop" 
            alt="Workspace" 
            className="w-full max-w-sm h-64 md:h-96 object-cover rounded-xl grayscale"
          />
        </div>

        {/* Right Contact Details */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="space-y-6 w-full max-w-md mx-auto md:mx-0 text-sm font-semibold tracking-wide flex flex-col items-center md:items-stretch">
            <a href={`mailto:${siteData.contact.email}`} className="group flex justify-between items-center w-full border-b border-white/10 pb-4 hover:border-white transition-colors">
              <span>Email: {siteData.contact.email}</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></span>
            </a>
            <a href={siteData.contact.linkedin} target="_blank" rel="noreferrer" className="group flex justify-between items-center w-full border-b border-white/10 pb-4 hover:border-white transition-colors">
              <span>Follow me on LinkedIn</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></span>
            </a>
            <a href={siteData.contact.github} target="_blank" rel="noreferrer" className="group flex justify-between items-center w-full border-b border-white/10 pb-4 hover:border-white transition-colors">
              <span>Follow me on GitHub</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></span>
            </a>
            <div className="flex justify-between items-center w-full pt-2">
              <span className="text-zinc-500">Location: Kerala, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Divider */}
      <div className="w-full bg-white text-black overflow-hidden whitespace-nowrap py-3 font-bold uppercase tracking-widest text-xs flex">
        <motion.div
           initial={{ x: "0%" }}
           animate={{ x: "-50%" }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 10,
           }}
           className="inline-block"
        >
          <span className="px-8">Get In Touch</span>
          <span className="px-8">Available For Freelance</span>
          <span className="px-8 flex-inline items-center gap-2">Remote <span className="w-2 h-2 inline-block rounded-full bg-black shrink-0"></span></span>
          <span className="px-8 hidden md:inline-block">Full-Stack Development</span>
          {/* Duplicates for smooth loop */}
          <span className="px-8">Get In Touch</span>
          <span className="px-8">Available For Freelance</span>
          <span className="px-8 flex-inline items-center gap-2">Remote <span className="w-2 h-2 inline-block rounded-full bg-black shrink-0"></span></span>
          <span className="px-8 hidden md:inline-block">Full-Stack Development</span>
        </motion.div>
      </div>

      {/* Massive Contact Text Bottom */}
      <div className="w-full px-4 md:px-12 py-12 md:py-24 flex items-center justify-center overflow-hidden">
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] font-bold tracking-tighter uppercase leading-[0.8] text-center"
        >
          Contact Now
        </motion.h2>
      </div>
      
    </section>
  );
}
