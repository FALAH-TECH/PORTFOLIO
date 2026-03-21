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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDescription: "A modern, accessible platform for student communication and event management.",
    built: "Full-stack web platform with CMS",
    tech: "Next.js, TypeScript, Tailwind CSS, Prisma",
    outcome: "50% increase in student engagement & 3x faster load times",
  },
  {
    slug: "neuronote-app",
    title: "Neuronote App",
    category: "Mobile AI",
    year: "2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDescription: "Real-time health dashboard for vitals monitoring and predictive alerts.",
    built: "Full-stack analytics dashboard",
    tech: "Next.js, Node.js, PostgreSQL, Recharts, AI models",
    outcome: "Perfect Healthcare Companion & After Surgery Care approved by renowned Physicians",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
