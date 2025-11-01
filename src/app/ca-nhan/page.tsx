import Link from "next/link";

import { ToolCard } from "@/components/ToolCard";
import personalTools from "@/data/tools-personal.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const tools = personalTools as Tool[];
const uniqueTags = Array.from(new Set(tools.flatMap((tool) => tool.tags)));

export default function PersonalToolsPage() {
  return (
    <main className="category-page">
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__layout">
            <div>
              <span className="badge">Cá nhân</span>
              <h1 className="page-intro__title">Xây dựng thói quen làm việc thông minh với trợ lý AI</h1>
              <p className="page-intro__description">
                Tuyển chọn công cụ giúp bạn học tập, sáng tạo và quản lý cuộc sống hiệu quả hơn. Mỗi giải pháp đều được thử nghiệm
                với người dùng Việt Nam để đảm bảo tính phù hợp.
              </p>
              <div className="page-intro__stats">
                <div className="stat-card">
                  <span className="stat-card__value">{tools.length} công cụ</span>
                  <span className="stat-card__label">Được cộng đồng đánh giá cao</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__value">3 mục tiêu</span>
                  <span className="stat-card__label">Học tập · Sáng tạo · Tài chính</span>
                </div>
              </div>
            </div>
            <div className="page-intro__note" aria-hidden>
              <p>“Tạo thói quen bền vững với AI: nhỏ, đều đặn, đo lường được.”</p>
              <span>Cộng đồng Ngọc Tây IO</span>
            </div>
          </div>
          <div className="tag-cloud" aria-label="Danh mục từ khóa">
            {uniqueTags.map((tag) => (
              <span key={tag} className="chip chip--subtle">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Công cụ dành cho hành trình phát triển cá nhân</h2>
            <p className="section__description">
              Kết hợp các công cụ phù hợp với lịch trình của bạn để xây dựng hệ thống hỗ trợ học tập, quản lý thời gian và tài chính.
            </p>
          </div>
          <div className="tool-grid">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/ca-nhan/${tool.slug}`} className="tool-link">
                <ToolCard {...tool} />
              </Link>
            ))}
          </div>
          <div className="callout">
            <h3>Mẹo xây dựng thói quen</h3>
            <p>
              Chọn 1 mục tiêu trọng tâm (ví dụ: viết newsletter hàng tuần), đặt lịch tự động trong công cụ và sử dụng template đã
              chuẩn bị. Sau mỗi tuần, ghi lại kết quả để điều chỉnh workflow phù hợp hơn.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__content">
              <h2 className="cta-panel__title">Tạo hệ thống làm việc cá nhân hoá cùng Ngọc Tây IO</h2>
              <p className="cta-panel__description">
                Nhận gợi ý công cụ, template và chương trình đào tạo phù hợp với mục tiêu phát triển bản thân của bạn.
              </p>
              <div className="cta-panel__actions">
                <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                  Nhận tư vấn miễn phí
                </a>
                <Link href="/" className="button button--ghost">
                  Xem tài nguyên học tập
                </Link>
              </div>
            </div>
            <div className="cta-panel__aside" aria-hidden>
              <p>Checklist xây dựng thói quen 21 ngày & cộng đồng đồng hành.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
