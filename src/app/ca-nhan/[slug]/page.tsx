import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import personalTools from "@/data/tools-personal.json";

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

const tools = personalTools as Tool[];

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function PersonalToolDetail({ params }: Params) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="container">
          <Link href="/ca-nhan" className="breadcrumb">
            ← Quay lại danh mục cá nhân
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
                <strong>Tối ưu thói quen của bạn:</strong> Lên kế hoạch 7 ngày với {tool.name}, sử dụng bộ prompt gợi ý và nhật
                ký phản hồi để liên tục tinh chỉnh trải nghiệm.
              </p>
              <div className="cta-banner__actions">
                <a
                  className="button button--primary"
                  href={tool.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bắt đầu dùng thử
                </a>
                <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
                  Nhận bộ prompt mẫu
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
