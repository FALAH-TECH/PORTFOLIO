import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Falah Fazal | Full-Stack Web Developer & AI Engineer",
  description: "Portfolio of Falah Fazal – freelance full-stack developer & AI engineer crafting modern web apps, seamless UX, and AI-powered tools.",
  keywords: ["full-stack developer", "AI engineer", "Next.js", "web development", "freelance", "Falah Fazal"],
  authors: [{ name: "Falah Fazal", url: "https://falahfazal.dev" }],
  creator: "Falah Fazal",
  openGraph: {
    title: "Falah Fazal | Full-Stack Web Developer & AI Engineer",
    description: "Portfolio of Falah Fazal – freelance full-stack developer & AI engineer crafting modern web apps, seamless UX, and AI-powered tools.",
    url: "https://falahfazal.dev",
    siteName: "Falah Fazal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Falah Fazal – Full-Stack Developer & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falah Fazal | Full-Stack Web Developer & AI Engineer",
    description: "Freelance developer crafting modern web apps and AI-powered tools.",
    creator: "@falahfazal",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased cursor-none`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
