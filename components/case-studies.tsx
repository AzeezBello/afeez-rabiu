import Link from "next/link";

import CaseCard from "@/components/case-card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/site-content";

type CaseStudiesProps = {
  showHeading?: boolean;
};

export default function CaseStudies({
  showHeading = true,
}: CaseStudiesProps) {
  return (
    <section className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {showHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
                Proof of work
              </p>
              <h2 className="mt-4 text-3xl font-bold text-zinc-950 md:text-4xl">
                Real outcomes pulled from live roles and measurable campaigns
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                These highlights come directly from the resume, so each one ties
                back to a real employer, a real channel mix, and a real result.
              </p>
            </div>

            <Button asChild variant="outline">
              <Link href="/case-studies">See detailed highlights</Link>
            </Button>
          </div>
        ) : null}

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
  );
}
