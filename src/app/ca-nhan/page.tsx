import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import personalTools from "@/data/tools-personal.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const tools = personalTools as Tool[];

export default function PersonalToolsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Cá nhân</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Cá nhân hoá thói quen làm việc với công cụ AI</h1>
        <p className="mt-4 text-base text-slate-600">
          Những trợ lý số giúp bạn quản lý công việc, tài chính và sáng tạo nội dung dễ dàng hơn.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/ca-nhan/${tool.slug}`} className="block">
            <ToolCard {...tool} />
          </Link>
        ))}
      </div>
    </main>
  );
}
