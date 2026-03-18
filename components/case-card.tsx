import { Card, CardContent } from "@/components/ui/card";

type CaseCardProps = {
  channels: readonly string[];
  result: string;
  summary: string;
  title: string;
};

export default function CaseCard({
  channels,
  result,
  summary,
  title,
}: CaseCardProps) {
  return (
    <Card className="border border-black/5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">
          {result}
        </p>
        <h3 className="mt-4 text-xl font-semibold text-zinc-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {channels.map((channel) => (
            <span
              key={channel}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {channel}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
