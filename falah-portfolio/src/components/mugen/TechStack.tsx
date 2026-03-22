"use client";

const tools = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Figma",
  "PostgreSQL", "Tailwind CSS", "Prisma", "OpenAI", "Supabase", "Framer Motion",
];

const tools2 = [
  "Vercel", "Git", "MongoDB",
  "Stripe", "REST APIs",
];

// Duplicate items for seamless loop
const row1 = [...tools, ...tools];
const row2 = [...tools2, ...tools2];

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
  <div className="flex overflow-hidden py-3 group">
    <div
      className={`flex shrink-0 gap-6 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      style={{ willChange: "transform" }}
    >
      {items.map((tool, i) => (
        <div
          key={`${tool}-${i}`}
          className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm whitespace-nowrap"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            {tool}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  return (
    <section className="w-full bg-transparent py-24 md:py-32 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto mb-16 px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-3 block">Arsenal</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">My Tech Stack</h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs text-left md:text-right">
            The tools I use daily to design and engineer world-class digital products.
          </p>
        </div>
      </div>

      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </section>
  );
}
