"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";

const ProjectCard = ({ project, idx }: { project: typeof projects[0], idx: number }) => {
  const ref = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => router.push(`//${project.slug}`)}
      className={`group relative overflow-hidden rounded-2xl bg-zinc-900 ${project.colSpan} cursor-pointer min-h-[450px] md:min-h-[550px] lg:h-[65vh] block`}
      data-cursor="View →"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          style={{ y, scale: 1.2 }}
          src={project.image}
          alt={`Preview of ${project.title} — ${project.shortDescription}`}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end z-10">
        <div className="flex flex-col gap-2 w-[85%] sm:w-2/3 lg:w-3/4 xl:w-2/3">
          <span className="text-zinc-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pb-2">
            Featured Project
          </span>
          <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-[0.9] group-hover:translate-x-4 transition-transform duration-700">
            {project.title.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.2em] font-bold mt-4">
            {project.category} // {project.year}
          </p>

          {/* Structured Text on Hover */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="overflow-hidden">
              <div className="pt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 ease-out">
                <p className="text-zinc-200 text-sm md:text-base mb-5 leading-relaxed font-medium">
                  {project.shortDescription}
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                    <span className="leading-snug"><strong className="text-white">What was built:</strong> {project.built}</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                    <span className="leading-snug"><strong className="text-white">Tech:</strong> {project.tech}</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                    <span className="leading-snug"><strong className="text-white">Outcome:</strong> {project.outcome}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.title}`}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View source code for ${project.title}`}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Code →
            </a>
          )}
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-700" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6 lg:px-12">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-24 md:mb-32">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">Selected Work</span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white leading-none"
            >
              PROJECTS
            </motion.h2>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
