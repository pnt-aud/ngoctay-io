import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import businessTools from "@/data/tools-business.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const tools = businessTools as Tool[];

export default function BusinessToolsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Doanh nghiệp</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Giải pháp AI tăng trưởng và tối ưu vận hành</h1>
        <p className="mt-4 text-base text-slate-600">
          Danh sách công cụ được chúng tôi tuyển chọn giúp đội ngũ marketing, sales và vận hành làm việc hiệu quả hơn.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/doanh-nghiep/${tool.slug}`} className="block">
            <ToolCard {...tool} />
          </Link>
        ))}
      </div>
    </main>
  );
}
