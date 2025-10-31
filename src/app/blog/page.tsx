import Link from "next/link";
import blogList from "../../data/blog-list.json";
import { Footer } from "../../components/ui/Footer";
import { Grid } from "../../components/ui/Grid";
import { Navbar } from "../../components/ui/Navbar";
import { SectionTitle } from "../../components/ui/SectionTitle";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle title="Blog" subtitle="Chia sẻ kiến thức, case study và góc nhìn chuyên sâu" />
          <Grid columns={3}>
            {blogList.map((post) => (
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
      </main>
      <Footer />
    </div>
  );
}
