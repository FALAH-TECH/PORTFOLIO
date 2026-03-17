"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full border-b border-white/20 px-6 py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-start md:items-center">
        {/* Brand */}
        <div className="text-xl font-bold tracking-tight">
          Falah®
        </div>

        {/* Links */}
        <div className="flex flex-col text-xs text-zinc-400 gap-1 md:items-center">
          <span className="font-semibold text-white">Quick Links</span>
          <span>Home, Work, Skills, Contact</span>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col text-xs text-zinc-400 gap-1 md:items-end">
          <span className="font-semibold text-white">Based in India</span>
          <span>Full-Stack + AI Developer</span>
        </div>
      </div>
    </motion.nav>
  );
}
