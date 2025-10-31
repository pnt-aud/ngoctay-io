import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import businessTools from "@/data/tools-business.json";
import personalTools from "@/data/tools-personal.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const business = businessTools as Tool[];
const personal = personalTools as Tool[];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Ngọc Tây IO</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Hệ sinh thái công cụ AI dành cho doanh nghiệp và cá nhân Việt Nam
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Chúng tôi tuyển chọn những giải pháp giúp bạn tăng tốc tăng trưởng, tối ưu vận hành và làm việc hiệu quả hơn.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/doanh-nghiep"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Khám phá cho doanh nghiệp
          </Link>
          <Link
            href="/ca-nhan"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-200 hover:text-indigo-500"
          >
            Công cụ cho cá nhân
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Nổi bật cho doanh nghiệp</h2>
          <Link href="/doanh-nghiep" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Xem tất cả →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {business.slice(0, 2).map((tool) => (
            <Link key={tool.slug} href={`/doanh-nghiep/${tool.slug}`} className="block">
              <ToolCard {...tool} />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Đề xuất cho cá nhân</h2>
          <Link href="/ca-nhan" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Xem tất cả →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {personal.slice(0, 2).map((tool) => (
            <Link key={tool.slug} href={`/ca-nhan/${tool.slug}`} className="block">
              <ToolCard {...tool} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
