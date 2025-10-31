import { notFound } from "next/navigation";
import toolsBusiness from "../../../data/tools-business.json";
import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{tool.category}</span>
          <h1 className="text-3xl font-semibold text-slate-900">{tool.name}</h1>
          <p className="text-base text-slate-600">{tool.description}</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            <h2 className="text-lg font-semibold text-slate-900">Tính năng nổi bật</h2>
            <ul className="mt-4 space-y-2">
              {tool.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
