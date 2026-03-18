import Link from "next/link";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/site-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center md:py-32">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_58%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_34%)]" />

      <div className="relative mx-auto max-w-5xl">
        <p className="animate-in text-sm font-medium uppercase tracking-[0.24em] text-amber-700 duration-700 fade-in slide-in-from-bottom-4 motion-reduce:animate-none">
          {profile.role}
        </p>

        <h1 className="mt-6 animate-in text-5xl font-bold leading-tight text-balance text-zinc-950 duration-700 fade-in slide-in-from-bottom-4 md:text-7xl motion-reduce:animate-none">
          Marketing strategy, copy, and research built to drive measurable growth.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-in text-lg leading-8 text-zinc-600 duration-700 fade-in slide-in-from-bottom-4 delay-150 motion-reduce:animate-none">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
          <span className="rounded-full border border-black/5 bg-white/80 px-4 py-2">
            Healthcare consultancy
          </span>
          <span className="rounded-full border border-black/5 bg-white/80 px-4 py-2">
            Media and journalism
          </span>
          <span className="rounded-full border border-black/5 bg-white/80 px-4 py-2">
            E-commerce growth
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="animate-in px-6 duration-700 fade-in slide-in-from-bottom-4 delay-300 motion-reduce:animate-none"
          >
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="animate-in px-6 duration-700 fade-in slide-in-from-bottom-4 delay-500 motion-reduce:animate-none"
          >
            <a href={`mailto:${profile.email}`}>Email Afeez</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
