import type { Metadata } from "next";

import CaseCard from "@/components/case-card";
import CTA from "@/components/cta";
import JsonLd from "@/components/json-ld";
import { caseStudies, portfolioLinks } from "@/lib/site-content";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "Selected resume-backed case studies and portfolio links covering performance marketing, content strategy, and research work.",
  path: "/case-studies",
  keywords: [
    "marketing case studies",
    "SEO case studies",
    "copywriting portfolio",
  ],
});

export default function CaseStudiesPage() {
  const caseStudiesJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies",
    description:
      "Documented outcomes across paid media, SEO, content strategy, and research-led work.",
    url: absoluteUrl("/case-studies"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: study.title,
          description: study.summary,
        },
      })),
    },
  };

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]);

  return (
    <main>
      <JsonLd data={[caseStudiesJsonLd, breadcrumbJsonLd]} />
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            Case studies
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-zinc-950 md:text-6xl">
            A portfolio grounded in documented outcomes, not placeholder claims.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            The featured highlights below come directly from real professional
            experience. They pair campaign metrics with the channels, copy, and
            strategic responsibilities behind each result.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseCard
                key={study.title}
                channels={study.channels}
                result={study.result}
                summary={study.summary}
                title={study.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
              Published work
            </p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-950 md:text-4xl">
              Journalism, fact-checking, and public portfolio links
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-zinc-950">
                  {link.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {link.desc}
                </p>
                <p className="mt-4 text-sm font-medium text-amber-700">
                  Open link
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
