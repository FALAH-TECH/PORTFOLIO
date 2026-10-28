"use client";

import { useRef, useState, useEffect } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  index: number;
  id?: string;
  className?: string;
  "aria-label"?: string;
}

export default function SectionWrapper({
  children,
  index,
  id,
  className = "",
  "aria-label": ariaLabel,
}: SectionWrapperProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = useState<string | number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateStickyPos = () => {
      if (!containerRef.current) return;
      const height = containerRef.current.offsetHeight;
      const vh = window.innerHeight;
      
      // The "Social Ladder" logic for tall sections:
      // We want the section to scroll naturally until its BOTTOM is visible.
      // Once the bottom hit the bottom of the viewport, it stays there (sticks) 
      // so the next section can slide over it.
      if (height > vh) {
        setStickyTop(vh - height);
      } else {
        setStickyTop(0);
      }
    };

    const observer = new ResizeObserver(updateStickyPos);
    observer.observe(containerRef.current);
    updateStickyPos(); // Initial calc

    window.addEventListener("resize", updateStickyPos);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateStickyPos);
    };
  }, []);

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      ref={containerRef}
      className={`w-full ${
        index === 0
          ? "bg-transparent"
          : "bg-[#050505]/98 backdrop-blur-3xl border-t border-white/[0.08] shadow-[0_-20px_50px_rgba(0,0,0,0.9)] rounded-t-[40px] -mt-[40px]"
      } ${className}`}
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: (index + 1) * 10,
        willChange: "transform, top",
      }}
    >
      <div className={`${index === 0 ? "" : "pt-12"} relative`}>
        {children}
      </div>
    </section>
  );
}
