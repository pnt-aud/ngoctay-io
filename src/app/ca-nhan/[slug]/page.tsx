import { notFound } from "next/navigation";
import toolsPersonal from "../../../data/tools-personal.json";
import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

interface PersonalToolPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return toolsPersonal.map((tool) => ({ slug: tool.slug }));
}

export default function PersonalToolDetailPage({ params }: PersonalToolPageProps) {
  const tool = toolsPersonal.find((item) => item.slug === params.slug);

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
            <h2 className="text-lg font-semibold text-slate-900">Cách áp dụng</h2>
            <ul className="mt-4 space-y-2">
              {tool.useCases.map((useCase) => (
                <li key={useCase}>• {useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
