import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[40vw] font-black text-white/[0.03] tracking-tighter leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 block">
          You're Lost
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
          Page Not<br />Found.
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12">
          Looks like this page doesn't exist. Maybe it never did — or maybe you're just exploring. Either way, let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-bold text-sm tracking-tight hover:bg-zinc-100 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
