import JsonLd from "@/components/json-ld";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Experience from "@/components/experience";
import CTA from "@/components/cta";
import { profile } from "@/lib/site-content";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  description: siteConfig.description,
  path: "/",
  keywords: [
    "digital marketing portfolio",
    "SEO portfolio",
    "performance marketing consultant",
  ],
});

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    about: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      url: absoluteUrl("/"),
    },
  };

  return (
    <main>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Experience />
      <CTA />
    </main>
  );
}
