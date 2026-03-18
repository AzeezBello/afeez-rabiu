import { stats } from "@/lib/site-content";

export default function Stats() {
  return (
    <section className="bg-zinc-50 px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl font-semibold tracking-tight text-zinc-950">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              {stat.label}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
