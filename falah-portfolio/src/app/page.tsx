"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m } from "framer-motion";

// ─── Above-fold components — eagerly loaded ───────────────────────────────────
import Header from "@/components/mugen/Header";
import GlobalBackground from "@/components/mugen/GlobalBackground";
import MugenHero from "@/components/mugen/Hero";
import PageLoader from "@/components/mugen/PageLoader";
import CustomCursor from "@/components/mugen/CustomCursor";
import SectionWrapper from "@/components/mugen/SectionWrapper";

// ─── Below-fold components — dynamically loaded ───────────────────────────────
const MugenIntro    = dynamic(() => import("@/components/mugen/Intro"),       { ssr: false });
const About         = dynamic(() => import("@/components/mugen/About"),       { ssr: false });
const Stats         = dynamic(() => import("@/components/mugen/Stats"),       { ssr: false });
const Services      = dynamic(() => import("@/components/mugen/Services"),    { ssr: false });
const TechStack     = dynamic(() => import("@/components/mugen/TechStack"),   { ssr: false });
const Impact        = dynamic(() => import("@/components/mugen/Impact"),      { ssr: false });
const CaseStudies   = dynamic(() => import("@/components/mugen/CaseStudies"), { ssr: false });
const Testimonials  = dynamic(() => import("@/components/mugen/Testimonials"),{ ssr: false });
const Blog          = dynamic(() => import("@/components/mugen/Blog"),        { ssr: false });
const Footer        = dynamic(() => import("@/components/mugen/Footer"),      { ssr: false });
export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* Global UI */}
      <PageLoader />
      <CustomCursor />

      <main className="min-h-screen w-full bg-transparent text-white selection:bg-white selection:text-black font-sans relative">
        <GlobalBackground />

        {/* Header */}
        <Header />

        {/* 0. Hero — above fold, no lazy wrapper */}
        <SectionWrapper index={0} id="home">
          <MugenHero />
        </SectionWrapper>

        {/* 1. Intro */}
        <SectionWrapper index={1} id="studio" aria-label="Introduction">
          <MugenIntro />
        </SectionWrapper>

        {/* 2. About */}
        <SectionWrapper index={2} id="about">
          <About />
        </SectionWrapper>

        {/* 3. Stats */}
        <SectionWrapper index={3}>
          <Stats />
        </SectionWrapper>

        {/* 4. Services */}
        <SectionWrapper index={4} id="services">
          <Services />
        </SectionWrapper>

        {/* 5. Tech Stack */}
        <SectionWrapper index={5}>
          <TechStack />
        </SectionWrapper>

        {/* 6. Impact */}
        <SectionWrapper index={6}>
          <Impact />
        </SectionWrapper>

        {/* 7. Case Studies */}
        <SectionWrapper index={7} id="work">
          <CaseStudies />
        </SectionWrapper>

        {/* 8. Testimonials */}
        <SectionWrapper index={8}>
          <Testimonials />
        </SectionWrapper>

        {/* 9. Blog */}
        <SectionWrapper index={9} id="writing">
          <Blog />
        </SectionWrapper>

        {/* 10. Footer / Contact */}
        <SectionWrapper index={10} id="contact">
          <Footer />
        </SectionWrapper>
      </main>
    </LazyMotion>
  );
}
