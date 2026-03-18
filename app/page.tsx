import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Experience from "@/components/experience";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Experience />
      <CTA />
    </main>
  );
}
