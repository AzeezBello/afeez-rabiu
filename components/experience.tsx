import { experienceTimeline } from "@/lib/site-content";

export default function Experience() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            Recent experience
          </p>
          <h2 className="mt-4 text-3xl font-bold text-zinc-950 md:text-4xl">
            Resume-backed proof across marketing, media, and research
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            The strongest signal in the portfolio is not template language. It
            is a track record of paid media, content strategy, investigation,
            and performance reporting across multiple industries.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experienceTimeline.slice(0, 3).map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">
                {item.period}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                {item.role}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                {item.company} | {item.location}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-600">
                {item.achievements.slice(0, 3).map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
