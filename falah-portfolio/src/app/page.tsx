"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, m } from "framer-motion";

// ─── Above-fold components — eagerly loaded ───────────────────────────────────
import Header from "@/components/mugen/Header";
import GlobalBackground from "@/components/mugen/GlobalBackground";
import MugenHero from "@/components/mugen/Hero";
import PageLoader from "@/components/mugen/PageLoader";
import CustomCursor from "@/components/mugen/CustomCursor";

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

// Scroll-triggered fade-in wrapper — uses LazyMotion m.div, only activates on scroll
const FadeInScroll = ({ children }: { children: React.ReactNode }) => (
  <m.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </m.div>
);

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* Global UI */}
      <PageLoader />
      <CustomCursor />

      <main className="min-h-screen w-full bg-transparent text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative">
        <GlobalBackground />

        {/* Header */}
        <Header />

        {/* 1. Hero — above fold, no lazy wrapper */}
        <section id="home">
          <MugenHero />
        </section>

        {/* 2. Intro */}
        <section id="studio" aria-label="Introduction">
          <FadeInScroll>
            <MugenIntro />
          </FadeInScroll>
        </section>

        {/* 3. About */}
        <section id="about">
          <FadeInScroll>
            <About />
          </FadeInScroll>
        </section>

        {/* 4. Stats */}
        <FadeInScroll>
          <Stats />
        </FadeInScroll>

        {/* 5. Services */}
        <section id="services">
          <Services />
        </section>

        {/* 6. Tech Stack */}
        <FadeInScroll>
          <TechStack />
        </FadeInScroll>

        <FadeInScroll>
          <Impact />
        </FadeInScroll>

        {/* 7. Case Studies */}
        <section id="work">
          <FadeInScroll>
            <CaseStudies />
          </FadeInScroll>
        </section>

        {/* 8. Testimonials */}
        <FadeInScroll>
          <Testimonials />
        </FadeInScroll>

        {/* 9. Blog */}
        <section id="writing">
          <FadeInScroll>
            <Blog />
          </FadeInScroll>
        </section>

        {/* 10. Footer / Contact */}
        <section id="contact">
          <Footer />
        </section>
      </main>
    </LazyMotion>
  );
}
