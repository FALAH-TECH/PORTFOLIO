"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      desc: "For small teams and startups testing the waters.",
      price: "$2,500",
      features: ["Single Page application", "Basic animations", "Responsive design", "Contact form integration"],
    },
    {
      name: "Professional",
      desc: "Comprehensive solutions for growing businesses.",
      price: "$5,000",
      features: ["Multi-page Web App", "CMS integration", "Framer Motion advanced", "SEO optimization", "Analytics setup"],
      popular: true,
    },
    {
      name: "Custom",
      desc: "Deep AI integration and enterprise platforms.",
      price: "Let's Talk",
      features: ["LLM API integration", "Custom backend architecture", "WebGL interactions", "Dedicated support SLA"],
    }
  ];

  return (
    <section className="w-full bg-transparent border-b border-zinc-900 border-opacity-50 py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] md:text-[8vw] font-bold uppercase tracking-tighter text-white leading-none mb-6"
          >
            Built to scale
          </motion.h2>
          <p className="text-zinc-400 font-medium text-lg md:text-xl max-w-2xl">
            Transparent pricing matching the exact scope of your digital ambition. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`p-8 md:p-12 border ${tier.popular ? 'border-white/20 bg-zinc-900/50' : 'border-zinc-900 bg-black'} rounded-2xl flex flex-col relative overflow-hidden`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-12 border-b border-zinc-800 pb-8">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">{tier.name}</h3>
                <p className="text-sm font-medium text-zinc-500 h-10">{tier.desc}</p>
                <div className="mt-8 text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                  {tier.price}
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-16 flex-grow">
                {tier.features.map((feat, f_idx) => (
                  <li key={f_idx} className="flex items-start gap-4 text-zinc-400 text-sm font-medium">
                    <span className="text-white">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors ${tier.popular ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800'}`}>
                Select Tier
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
