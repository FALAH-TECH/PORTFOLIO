"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="w-full bg-transparent py-32 md:py-48 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4 block">Who I Am</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">About<br /><span className="text-zinc-600">Me.</span></h2>
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
              <Image
                  src="/profile.png"
                  alt="Portrait of Falah Fazal, freelance web developer based in Kerala"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-white/20" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-white/20" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex flex-col gap-6 text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-bold">Falah Fazal</span>, a full-stack developer and AI engineer based in Kerala. I build fast, beautiful, and purposeful digital products.
              </p>
              <p>
                I obsess over the <span className="text-white font-semibold">intersection of design and engineering</span> — the place where a pixel-perfect interface meets a bulletproof backend. My goal is always the same: ship something people actually love to use.
              </p>
              <p>
                When I'm not coding, I'm studying design systems, reading about AI, or mentoring fellow developers in my community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-tight hover:bg-zinc-100 transition-all"
              >
                Download Resume
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v10M3 11l5 4 5-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="mailto:falahfazal10@gmail.com"
                className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 text-white font-bold text-sm tracking-tight hover:border-white/30 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
