import type { Metadata } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { profile } from "@/lib/site-content";

import "./globals.css";

export const metadata: Metadata = {
  title: "Afeez Olawale Rabiu | Digital Marketing Executive",
  description:
    "Digital Marketing Executive and Research-Oriented Copywriter with 5+ years of experience across paid media, SEO/SEM, content strategy, and performance reporting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black antialiased">
        <Navbar />
        {children}
        <Footer />
        <a className="sr-only" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </body>
    </html>
  );
}
