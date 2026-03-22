"use client";

import { useState } from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 450);
  };

  return (
    <m.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 text-white selection:bg-white selection:text-black"
    >
      {/* Top Nav Line */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black/50 backdrop-blur-md relative z-[60]">
        <div className="flex justify-start">
          <span className="font-bold text-xl tracking-tighter mix-blend-difference">FALAH®</span>
        </div>

        <div className="flex justify-end flex-row items-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-[6px] items-end justify-center mix-blend-difference w-8 h-8 relative z-[60]"
          >
            <m.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className="w-full h-[2px] bg-white origin-center"
            />
            <m.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-2/3 h-[2px] bg-white"
            />
            <m.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0, width: isMenuOpen ? "100%" : "50%" }}
              className="w-1/2 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-black z-[50] flex flex-col justify-center px-6 md:px-24"
          >
            <nav className="flex flex-col gap-6 md:gap-10 items-center mt-16 md:mt-0">
              {[
                { label: "Home", id: "#home" },
                { label: "Studio", id: "#studio" },
                { label: "Work", id: "#work" },
                { label: "Services", id: "#services" },
                { label: "Contact", id: "#contact" }
              ].map((item, i) => (
                <div key={i} className="overflow-hidden">
                  <m.a
                    href={item.id}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.id)}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, delay: 0.1 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-[6vw] font-black tracking-widest uppercase text-white hover:text-zinc-500 transition-colors block leading-none mix-blend-difference"
                  >
                    {item.label}
                  </m.a>
                </div>
              ))}
            </nav>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-6 md:left-24 right-6 md:right-24 flex justify-between items-end border-t border-zinc-800 pt-8"
            >
              <div className="flex gap-6 text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                <a href="https://www.linkedin.com/in/falahfazal" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com/Falaah__" className="hover:text-white transition-colors">X</a>
                <a href="https://github.com/FALAH-TECH" className="hover:text-white transition-colors">Github</a>
              </div>
              <div className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                falahfazal10@gmail.com
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
