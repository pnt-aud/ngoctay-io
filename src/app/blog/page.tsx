import Link from "next/link";
import blogList from "../../data/blog-list.json";
import { PageLayout } from "../../components/ui/PageLayout";
import { SectionTitle } from "../../components/ui/SectionTitle";

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Resource Hub</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Kiến thức và case study về concept chuyển đổi số
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Chọn lọc bởi đội ngũ NgocTay.io: góc nhìn chiến lược, câu chuyện triển khai thực tế và checklist ứng dụng ngay cho đội ngũ của bạn.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle
            eyebrow="Bài viết mới"
            title="Tổng hợp cập nhật mới nhất"
            subtitle="Luôn đồng bộ với concept và công cụ mới"
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {blogList.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{post.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-indigo-600">Đọc tiếp →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
