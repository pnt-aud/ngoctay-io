import { notFound } from "next/navigation";
import blogList from "../../../data/blog-list.json";
import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogList.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogList.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <article className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{post.category}</span>
          <h1 className="text-3xl font-semibold text-slate-900">{post.title}</h1>
          <p className="text-sm text-slate-500">{post.publishedAt}</p>
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
