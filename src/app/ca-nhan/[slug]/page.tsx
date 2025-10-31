import { notFound } from "next/navigation";
import personalTools from "@/data/tools-personal.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  description: string;
  icon: string;
  cta_url: string;
  tags: string[];
  features: string[];
};

const tools = personalTools as Tool[];

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function PersonalToolDetail({ params }: Params) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Cá nhân</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">{tool.name}</h1>
      <p className="mt-4 text-base text-slate-600">{tool.description}</p>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Trải nghiệm bạn nhận được</h2>
        <ul className="space-y-3">
          {tool.features.map((feature) => (
            <li key={feature} className="rounded-xl border border-indigo-100 bg-white p-4 text-sm text-slate-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={tool.cta_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Dùng thử miễn phí
          <span aria-hidden>→</span>
        </a>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
