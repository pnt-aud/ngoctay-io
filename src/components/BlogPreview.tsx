import Link from "next/link";
import blogList from "../data/blog-list.json";
import { Grid } from "./ui/Grid";
import { SectionTitle } from "./ui/SectionTitle";

export function BlogPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionTitle
            eyebrow="Góc nhìn chuyên gia"
            title="Cập nhật concept và chiến lược mới nhất"
            subtitle="Case study, checklist triển khai và bài học từ cộng đồng sản phẩm số"
            align="left"
          />
          <Link href="/blog" className="text-sm font-medium text-indigo-600">
            Xem toàn bộ bài viết →
          </Link>
        </div>
        <Grid columns={3}>
          {blogList.slice(0, 3).map((post) => (
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
        </Grid>
      </div>
    </section>
  );
}
