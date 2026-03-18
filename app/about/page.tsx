import type { Metadata } from "next";

import JsonLd from "@/components/json-ld";
import {
  aboutHighlights,
  certifications,
  experienceTimeline,
  profile,
  toolGroups,
} from "@/lib/site-content";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Afeez Olawale Rabiu's background in digital marketing, copywriting, journalism, research, and performance optimization.",
  path: "/about",
  keywords: [
    "about Afeez Olawale Rabiu",
    "digital marketing background",
    "copywriter resume",
  ],
});

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${profile.name}`,
    description:
      "Background, experience timeline, certifications, and tools for Afeez Olawale Rabiu.",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      description: profile.summary,
      url: absoluteUrl("/"),
    },
  };

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <main className="px-6 py-20 md:py-24">
      <JsonLd data={[aboutJsonLd, breadcrumbJsonLd]} />
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
          About
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-zinc-950 md:text-6xl">
          {profile.role}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          {profile.summary}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {aboutHighlights.map((highlight) => (
          <article
            key={highlight}
            className="rounded-3xl border border-black/5 bg-zinc-50 p-6"
          >
            <p className="text-sm leading-7 text-zinc-700">{highlight}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            Career timeline
          </p>
          <h2 className="mt-4 text-3xl font-bold text-zinc-950 md:text-4xl">
            Experience that spans growth marketing and public-interest media
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {experienceTimeline.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-950">
                    {item.role}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {item.company} | {item.location}
                  </p>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">
                  {item.period}
                </p>
              </div>

              <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-600">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-black/5 bg-zinc-50 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            Certifications
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-zinc-700">
            {certifications.map((certification) => (
              <li key={certification} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>{certification}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            Tools and platforms
          </p>
          <div className="mt-6 space-y-5">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-zinc-950">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
