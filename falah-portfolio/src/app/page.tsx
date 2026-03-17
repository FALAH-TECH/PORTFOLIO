"use client";

import Header from '@/components/mugen/Header';
import GlobalBackground from '@/components/mugen/GlobalBackground';
import MugenHero from "@/components/mugen/Hero";
import MugenIntro from "@/components/mugen/Intro";
import StudioServices from "@/components/mugen/StudioServices";
import CaseStudies from "@/components/mugen/CaseStudies";
import Testimonials from "@/components/mugen/Testimonials";
import Footer from "@/components/mugen/Footer";
import { motion } from "framer-motion";

const FadeInScroll = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-transparent text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative">
      <GlobalBackground />
      {/* 0. Header Section */}
      <Header />

      {/* 1. Hero Section */}
      <div id="home">
        <MugenHero />
      </div>

      {/* 2. Intro Section */}
      <div id="studio">
        <FadeInScroll>
          <MugenIntro />
        </FadeInScroll>
      </div>

      {/* 3. Studio Services (Deep Scroll) */}
      <div id="services">
        <StudioServices />
      </div>

      {/* 4. Case Studies */}
      <div id="work">
        <FadeInScroll>
          <CaseStudies />
        </FadeInScroll>
      </div>

      {/* 4. Testimonials */}
      <FadeInScroll>
        <Testimonials />
      </FadeInScroll>

      {/* 5. Footer */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}

