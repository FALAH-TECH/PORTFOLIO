import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Falah Fazal | Full-Stack Web Developer",
  description: "Portfolio of Falah Fazal – freelance full stack developer building modern web apps and AI-powered tools.",
  openGraph: {
    title: "Falah Fazal | Full-Stack Web Developer",
    description: "Portfolio of Falah Fazal – freelance full stack developer building modern web apps and AI-powered tools.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
