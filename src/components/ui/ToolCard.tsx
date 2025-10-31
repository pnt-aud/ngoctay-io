import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  slug: string;
}

export function ToolCard({ name, description, category, slug }: ToolCardProps) {
  return (
    <Link
      href={slug}
      className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{category}</span>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <span className="mt-4 text-sm font-medium text-blue-600">Khám phá →</span>
    </Link>
  );
}
