"use client";

import Header from '@/components/mugen/Header';
import GlobalBackground from '@/components/mugen/GlobalBackground';
import MugenHero from "@/components/mugen/Hero";
import MugenIntro from "@/components/mugen/Intro";
import About from "@/components/mugen/About";
import Stats from "@/components/mugen/Stats";
import Services from "@/components/mugen/Services";
import TechStack from "@/components/mugen/TechStack";
import CaseStudies from "@/components/mugen/CaseStudies";
import Testimonials from "@/components/mugen/Testimonials";
import Blog from "@/components/mugen/Blog";
import Footer from "@/components/mugen/Footer";
import Impact from "@/components/mugen/Impact";
import CustomCursor from "@/components/mugen/CustomCursor";
import PageLoader from "@/components/mugen/PageLoader";
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
    <>
      {/* Global UI */}
      <PageLoader />
      <CustomCursor />

      <main className="min-h-screen w-full bg-transparent text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative">
        <GlobalBackground />
        
        {/* Header */}
        <Header />

        {/* 1. Hero */}
        <div id="home">
          <MugenHero />
        </div>

        {/* 2. Intro */}
        <div id="studio">
          <FadeInScroll>
            <MugenIntro />
          </FadeInScroll>
        </div>

        {/* 3. About */}
        <div id="about">
          <FadeInScroll>
            <About />
          </FadeInScroll>
        </div>

        {/* 4. Stats */}
        <FadeInScroll>
          <Stats />
        </FadeInScroll>

        {/* 5. Services */}
        <div id="services">
          <Services />
        </div>

        {/* 6. Tech Stack */}
        <FadeInScroll>
          <TechStack />
        </FadeInScroll>

        <FadeInScroll>
          <Impact />
        </FadeInScroll>

        {/* 7. Case Studies */}
        <div >
          <FadeInScroll>
            <CaseStudies />
          </FadeInScroll>
        </div>

        {/* 8. Testimonials */}
        <FadeInScroll>
          <Testimonials />
        </FadeInScroll>

        {/* 9. Blog */}
        <div id="writing">
          <FadeInScroll>
            <Blog />
          </FadeInScroll>
        </div>

        {/* 10. Footer */}
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}
