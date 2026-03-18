import Link from "next/link";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/site-content";

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-zinc-950 px-8 py-16 text-center text-white shadow-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-300">
          Available for growth-focused teams
        </p>
        <h2 className="mt-4 text-4xl font-bold text-balance">
          Need a marketer who can think, write, research, and execute?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">
          Afeez brings paid media, SEO/SEM, copywriting, reporting, and
          investigative rigor into the same workflow so strategy turns into
          measurable output.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href={`mailto:${profile.email}`}>Email Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/contact">View Contact Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
