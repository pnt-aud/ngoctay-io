import { notFound } from "next/navigation";
import toolsBusiness from "../../../data/tools-business.json";
import { PageLayout } from "../../../components/ui/PageLayout";

interface BusinessToolPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return toolsBusiness.map((tool) => ({ slug: tool.slug }));
}

export default function BusinessToolDetailPage({ params }: BusinessToolPageProps) {
  const tool = toolsBusiness.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{tool.category}</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{tool.name}</h1>
          <p className="text-base text-slate-600 leading-relaxed">{tool.description}</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-indigo-100 bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Kịch bản ứng dụng nổi bật</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tool.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
