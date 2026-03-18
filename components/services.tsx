import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-content";

export default function Services() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            What I do
          </p>
          <h2 className="mt-4 text-3xl font-bold text-zinc-950 md:text-4xl">
            A hybrid skill set that fits modern digital teams
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            The resume combines campaign execution, copywriting, analytics,
            research, and remote collaboration across marketing and media work.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-black/5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
