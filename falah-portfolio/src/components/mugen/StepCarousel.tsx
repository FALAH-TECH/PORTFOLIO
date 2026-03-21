"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface StepCarouselProps {
  steps: Step[];
  autoPlay?: boolean;
  interval?: number;
}

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {direction === "left" ? (
      <>
        <polyline points="15 18 9 12 15 6" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </>
    ) : (
      <>
        <polyline points="9 6 15 12 9 18" />
        <line x1="3" y1="12" x2="15" y2="12" />
      </>
    )}
  </svg>
);

const ArrowButton = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white hover:border-white transition-all duration-500 bg-[#050505] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-50 block focus:outline-none"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    <ArrowIcon direction={direction} />
  </button>
);

export default function StepCarousel({ steps, autoPlay = false, interval = 4000 }: StepCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const len = steps.length || 1;

  const next = useCallback(() => setIndex((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + len) % len), [len]);

  useEffect(() => {
    if (!autoPlay) return;
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, len]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const roleOf = (i: number) => {
    if (i === index) return "active";
    if (i === (index - 1 + len) % len) return "prev";
    if (i === (index + 1) % len) return "next";
    return "hidden";
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto h-[480px] md:h-[420px] flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[320px] md:h-[300px]">
        {steps.map((step, i) => {
          const role = roleOf(i);
          if (role === "hidden") return null;

          const layout = 
            role === "active" ? { scale: 1, opacity: 1, y: 0, zIndex: 30 } :
            role === "prev" ? { scale: 0.94, opacity: 0.3, y: -35, zIndex: 20 } :
            { scale: 0.94, opacity: 0.3, y: 35, zIndex: 10 };

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                scale: layout.scale,
                opacity: layout.opacity,
                y: layout.y
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ zIndex: layout.zIndex }}
              className={`absolute inset-0 w-full h-full rounded-[2.5rem] bg-[#050505] border border-white/5 p-10 md:p-16 lg:p-20 flex flex-col justify-center overflow-hidden shadow-2xl ${role === "active" ? "pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.8)]" : "pointer-events-none"}`}
            >
              {/* Subtle top-light gradient background inside card matching premium aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-zinc-500">
                  Phase 0{i + 1}
                </span>
                <h3 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white tracking-tighter leading-[1] break-words">
                  {step.title}
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed max-w-xl mt-1 md:mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute -bottom-6 md:-bottom-2 flex gap-6 items-center justify-center w-full z-40 pointer-events-auto">
        <ArrowButton direction="left" onClick={prev} />
        <ArrowButton direction="right" onClick={next} />
      </div>
    </div>
  );
}
