import Link from "next/link";
import blogList from "../data/blog-list.json";
import { Grid } from "./ui/Grid";
import { SectionTitle } from "./ui/SectionTitle";

export function BlogPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle title="Bài viết mới" subtitle="Kiến thức và xu hướng mới nhất từ chuyên gia" />
        <Grid columns={3}>
          {blogList.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{post.category}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Đọc tiếp →
              </span>
            </Link>
          ))}
        </Grid>
      </div>
    </section>
  );
}
