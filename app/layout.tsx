import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import Navbar from "@/components/navbar";
import { profile } from "@/lib/site-content";
import { personJsonLd, rootMetadata, websiteJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black antialiased">
        <JsonLd data={[websiteJsonLd, personJsonLd]} />
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
