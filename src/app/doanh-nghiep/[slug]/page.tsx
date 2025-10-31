import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import businessTools from "@/data/tools-business.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  description: string;
  icon: string;
  cta_url: string;
  tags: string[];
  features: string[];
};

const tools = businessTools as Tool[];

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function BusinessToolDetail({ params }: Params) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="container">
          <Link href="/doanh-nghiep" className="breadcrumb">
            ← Trở lại danh mục doanh nghiệp
          </Link>
          <article className="detail-card">
            <div className="detail-card__header">
              <div className="detail-card__icon" aria-hidden>
                <Image src={tool.icon} alt="" width={64} height={64} />
              </div>
              <div>
                <h1 className="detail-card__title">{tool.name}</h1>
                <p className="detail-card__description">{tool.description}</p>
              </div>
            </div>
            <div className="tag-list" aria-label="Từ khóa liên quan">
              {tool.tags.map((tag) => (
                <span key={tag} className="chip chip--subtle">
                  {tag}
                </span>
              ))}
            </div>
            <div className="feature-list">
              {tool.features.map((feature) => (
                <div key={feature} className="feature-item">
                  <span className="feature-item__icon" aria-hidden>
                    ✓
                  </span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="detail-cta">
              <p>
                <strong>Triển khai cùng đội ngũ:</strong> Nhận bộ tài liệu checklist và hướng dẫn thiết lập workflow để đưa {tool.name} vào
                hoạt động ngay trong tuần này.
              </p>
              <div className="cta-banner__actions">
                <a
                  className="button button--primary"
                  href={tool.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dùng thử công cụ
                </a>
                <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
                  Nhận tư vấn triển khai
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
