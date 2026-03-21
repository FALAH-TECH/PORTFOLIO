import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Falah Fazal`,
    description: project.challenge,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* Back Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#work"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
        >
          ← Back to Work
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
            {project.category} // {project.year}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-24 md:py-32">

        {/* Tags + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24 pb-12 border-b border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-100 transition-all"
              >
                View Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:border-white/30 transition-all"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 block">The Challenge</span>
            <p className="text-zinc-300 text-lg leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 block">The Solution</span>
            <p className="text-zinc-300 text-lg leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8 block">Results</span>
          <div className="flex flex-col gap-0">
            {project.results.map((result, i) => (
              <div key={i} className="flex items-center gap-6 py-5 border-b border-white/5">
                <span className="text-zinc-700 font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white text-lg font-semibold">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project CTA */}
        <div className="pt-12 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/#work"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
          >
            ← All Projects
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-tight hover:bg-zinc-100 transition-all"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </main>
  );
}
