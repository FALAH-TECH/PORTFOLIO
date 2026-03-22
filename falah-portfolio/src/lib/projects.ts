export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  colSpan: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  shortDescription: string;
  built: string;
  tech: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "msa-lbscek",
    title: "MSA LBSCEK Website",
    category: "Web Platform",
    year: "2025",
    image: "#111111",
    coverImage: "#111111",
    liveUrl: "https://msa-website-2026.vercel.app/",
    githubUrl: "https://github.com/FALAH-TECH/MSA-WEBSITE-2026",
    colSpan: "col-span-1 md:col-span-8",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    challenge: "The Microsoft Student Ambassadors Community needed a modern, accessible platform to communicate with thousands of students, manage events, and share resources. The existing site was outdated and unmaintained.",
    solution: "Built a fully responsive web platform using Next.js 14 with App Router. Implemented a headless CMS for easy content management, a dynamic event calendar, and a resource library with role-based access.",
    results: [
      "50% increase in student engagement",
      "3x faster page load compared to old site",
      "Adopted by the national MSA chapter as a template",
    ],
    images: [
      "/projects/msa-lbscek.png",
    ],
    shortDescription: "A modern, accessible platform for student communication and event management.",
    built: "Full-stack web platform with CMS",
    tech: "Next.js, TypeScript, Tailwind CSS, Prisma",
    outcome: "Serves 200+ students — replaced manual processes with a fast, accessible web platform.",
  },
  {
    slug: "neuronote-app",
    title: "Neuronote App",
    category: "Mobile AI",
    year: "2025",
    image: "#111111",
    coverImage: "#111111",
    liveUrl: "https://neuronote.app",
    githubUrl: "https://github.com/falah/neuronote",
    colSpan: "col-span-1 md:col-span-4",
    tags: ["React Native", "OpenAI", "Supabase", "Expo"],
    challenge: "Students needed a smarter way to take notes that could help them retain information better. Traditional note apps were passive — they didn't help you learn.",
    solution: "Built an AI-powered study & note-taking app that automatically generates flashcards, quiz questions, and summaries from your notes using GPT-4. Includes spaced repetition scheduling.",
    results: [
      "AI implementation for note-taking",
      "Helpful tool among students",
      "Innovation in education sector",
    ],
    images: [
      "/projects/neuronote.png",
    ],
    shortDescription: "An AI-powered study companion that generates quizzes and flashcards.",
    built: "Cross-platform mobile application",
    tech: "React Native, OpenAI, Supabase",
    outcome: "AI implementation for note-taking & helpful tool among students",
  },
  {
    slug: "lifeloop-healthcare",
    title: "LifeLoop Healthcare",
    category: "Partnership",
    year: "2026",
    image: "#0a0a0a",
    coverImage: "#0a0a0a",
    liveUrl: "https://lifeloop.health",
    colSpan: "col-span-1 md:col-span-12",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Recharts", "AI/ML"],
    challenge: "Healthcare providers needed a real-time dashboard to track patient vitals, appointment schedules, and health trends in one unified interface without complex EHR integrations.",
    solution: "Designed and built a full-stack health dashboard with real-time vitals monitoring, predictive health alerts using ML models, and a beautiful data visualization layer built with custom chart components.",
    results: [
      "Perfect Healthcare Companion",
      "After Surgery Care",
      "Approved by renowned Physicians",
    ],
    images: [
      "/projects/lifeloop.png",
    ],
    shortDescription: "Real-time health dashboard for vitals monitoring and predictive alerts.",
    built: "Full-stack analytics dashboard",
    tech: "Next.js, Node.js, PostgreSQL, Recharts, AI models",
    outcome: "Real-time vitals monitoring and post-surgery tracking — built with AI models and reviewed by medical professionals.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
