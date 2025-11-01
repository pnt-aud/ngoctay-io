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
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container">
          <Link href="/ca-nhan" className="breadcrumb">
            ← Trở lại danh mục cá nhân
          </Link>
          <article className="detail-card">
            <div className="detail-card__header">
              <div className="detail-card__icon" aria-hidden>
                <Image src={tool.icon} alt="" width={72} height={72} />
              </div>
              <div>
                <h1 className="detail-card__title">{tool.name}</h1>
                <p className="detail-card__summary">{tool.description}</p>
              </div>
            </div>
            <ul className="tag-list" aria-label="Từ khóa liên quan">
              {tool.tags.map((tag) => (
                <li key={tag}>
                  <span className="chip chip--subtle">{tag}</span>
                </li>
              ))}
            </ul>
            <div className="detail-card__actions">
              <a className="button button--primary" href={tool.cta_url} target="_blank" rel="noopener noreferrer">
                Khám phá công cụ
              </a>
              <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
                Nhận tư vấn cá nhân
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container detail-layout">
          <div className="detail-main">
            <h2>Công cụ hỗ trợ bạn như thế nào?</h2>
            <ul className="feature-list">
              {tool.features.map((feature) => (
                <li key={feature} className="feature-item">
                  <span className="feature-item__icon" aria-hidden>
                    ✓
                  </span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <div className="detail-section">
              <h3>Cách tận dụng hiệu quả</h3>
              <ol>
                <li>Xác định mục tiêu cụ thể trong 4 tuần (ví dụ: hoàn thành 4 bài viết blog).</li>
                <li>Tạo lịch nhắc và template trong công cụ, tích hợp với những app bạn đang dùng.</li>
                <li>Ghi nhận kết quả sau mỗi phiên làm việc và điều chỉnh prompt để phù hợp hơn.</li>
                <li>Chia sẻ tiến độ với cộng đồng Ngọc Tây IO để nhận phản hồi và động lực.</li>
              </ol>
            </div>
          </div>

          <aside className="detail-aside">
            <div className="detail-aside__card">
              <h3>Tài nguyên đính kèm</h3>
              <ul>
                <li>Lịch luyện tập 21 ngày</li>
                <li>Template theo dõi thói quen</li>
                <li>Bộ prompt gợi ý sáng tạo</li>
              </ul>
            </div>
            <div className="detail-aside__card">
              <h3>Hỗ trợ cộng đồng</h3>
              <p>Tham gia nhóm học tập hàng tuần, nhận phản hồi và chia sẻ câu chuyện ứng dụng thực tế.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__content">
              <h2 className="cta-panel__title">Cần thêm gợi ý cho {tool.name}?</h2>
              <p className="cta-panel__description">
                Nhận checklist từng bước và buổi mentoring 1-1 giúp bạn tích hợp công cụ này vào thói quen hàng ngày.
              </p>
              <div className="cta-panel__actions">
                <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                  Đặt lịch mentoring
                </a>
                <Link href="/ca-nhan" className="button button--ghost">
                  Xem các công cụ khác
                </Link>
              </div>
            </div>
            <div className="cta-panel__aside" aria-hidden>
              <p>Chỉ cần 15 phút mỗi ngày để duy trì nhịp độ phát triển.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
