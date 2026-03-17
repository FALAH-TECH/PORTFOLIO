"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      q: "What technologies do you use?",
      a: "I specialize in the modern JavaScript ecosystem, primarily React, Next.js, TypeScript, and Node.js. For styling, I exclusively use Tailwind CSS, and for animations, Framer Motion or GSAP. I also integrate AI via OpenAI APIs and custom python microservices."
    },
    {
      q: "How long does a project take?",
      a: "A typical high-end landing page takes 2-3 weeks. Complex full-stack applications or AI integrations can take anywhere from 1 to 3 months depending on the scope, backend requirements, and design phases."
    },
    {
      q: "Do you work with startups?",
      a: "Absolutely. I often act as a founding engineer or lead technical contractor for early-stage startups needing rapid prototyping, MVP development, and scalable architectural foundations."
    },
    {
      q: "Can you build AI powered products?",
      a: "Yes. From LLM wrappers and RAG (Retrieval-Augmented Generation) systems to intelligent chatbot assistants and automated workflow tools, AI integration is a core pillar of my development studio."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left Side: Headline */}
        <div className="lg:col-span-4 pr-0 lg:pr-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold text-white tracking-tighter uppercase sticky top-32 leading-none"
          >
            FAQ
          </motion.h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-8 flex flex-col pt-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-b border-zinc-900"
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left py-8 md:py-10 flex justify-between items-center group"
              >
                <span className="text-xl md:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                  {faq.q}
                </span>
                <span className={`text-2xl font-light text-zinc-500 transition-transform duration-500 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 pt-2 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
