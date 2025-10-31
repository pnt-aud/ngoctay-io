import Image from "next/image";

type ToolCardProps = {
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

export function ToolCard({ name, short_description, icon, cta_url, tags }: ToolCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-indigo-50 p-2">
          <Image src={icon} alt="" width={56} height={56} className="h-full w-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-600">{short_description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={cta_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Trải nghiệm ngay
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
