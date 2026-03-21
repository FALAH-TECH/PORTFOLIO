import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Falah Fazal | Freelance Web Developer for Startups & Businesses",
  description:
    "Falah Fazal is a freelance web developer building fast, modern websites for startups and businesses. Specializing in landing pages, business websites, and redesigns.",
  keywords: [
    "Falah Fazal",
    "freelance web developer",
    "startup website developer",
    "business website developer",
    "Next.js developer",
    "frontend developer",
    "web developer India",
    "landing page developer",
  ],
  authors: [{ name: "Falah Fazal", url: "https://falahfazal.dev" }],
  creator: "Falah Fazal",
  metadataBase: new URL("https://falahfazal.dev"),
  openGraph: {
    title: "Falah Fazal | Freelance Web Developer for Startups & Businesses",
    description:
      "Freelance web developer building fast, modern websites for startups and businesses.",
    url: "https://falahfazal.dev",
    siteName: "Falah Fazal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Falah Fazal – Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falah Fazal | Freelance Web Developer",
    description:
      "Fast, modern websites for startups and businesses.",
    creator: "@falahfazal",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
