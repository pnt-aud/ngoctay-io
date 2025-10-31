import { notFound } from "next/navigation";
import blogList from "../../../data/blog-list.json";
import { PageLayout } from "../../../components/ui/PageLayout";

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
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <article className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{post.category}</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{post.title}</h1>
          <p className="text-sm text-slate-500">{post.publishedAt}</p>
        </article>
      </section>
      <section className="bg-white py-16">
        <article className="mx-auto max-w-3xl space-y-4 px-6 text-base leading-relaxed text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>
    </PageLayout>
  );
}
