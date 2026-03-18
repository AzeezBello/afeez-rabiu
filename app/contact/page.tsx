import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import JsonLd from "@/components/json-ld";
import { contactAreas, profile, socialLinks } from "@/lib/site-content";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
  sameAsLinks,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Afeez Olawale Rabiu for digital marketing, copywriting, SEO/SEM, campaign strategy, and research-led content work.",
  path: "/contact",
  keywords: [
    "contact digital marketer",
    "SEO consultant contact",
    "copywriter contact",
  ],
});

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${profile.name}`,
    description:
      "Direct contact details and professional links for digital marketing, copywriting, and research-led content work.",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      sameAs: sameAsLinks,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "professional inquiries",
          email: profile.email,
          telephone: profile.phone,
          availableLanguage: ["English"],
        },
      ],
    },
  };

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <main className="px-6 py-20 md:py-24">
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-zinc-950 md:text-6xl">
          Ready to discuss a growth, content, or research brief?
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          The strongest next step is a direct conversation. Use the email below,
          connect on LinkedIn, or review the public portfolio links before
          reaching out.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {contactAreas.map((step) => (
          <article
            key={step.title}
            className="rounded-3xl border border-black/5 bg-zinc-50 p-6"
          >
            <h2 className="text-lg font-semibold text-zinc-950">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{step.desc}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-950">
            Direct contact details
          </h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-600">
            <p>
              <span className="font-semibold text-zinc-950">Email:</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-zinc-950"
              >
                {profile.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-zinc-950">Phone:</span>{" "}
              {profile.phone}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg">
                <a href={`mailto:${profile.email}`}>Send an Email</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">Browse Case Studies</Link>
              </Button>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/5 bg-zinc-50 p-8">
          <h2 className="text-2xl font-semibold text-zinc-950">
            Professional links
          </h2>
          <div className="mt-6 grid gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-black/5 bg-white px-4 py-4 transition-colors hover:border-black/10 hover:text-zinc-950"
              >
                <p className="text-sm font-semibold text-zinc-950">
                  {link.label}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{link.value}</p>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-16 flex max-w-5xl flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-zinc-950">
            Want a deeper look first?
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Review the case study highlights and published portfolio links, then
            reach out when the brief is ready.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies">Browse Case Studies</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
