import Link from "next/link";

import { ToolCard } from "@/components/ToolCard";
import businessTools from "@/data/tools-business.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const tools = businessTools as Tool[];
const uniqueTags = Array.from(new Set(tools.flatMap((tool) => tool.tags)));

export default function BusinessToolsPage() {
  return (
    <main className="category-page">
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__layout">
            <div>
              <span className="badge">Doanh nghiệp</span>
              <h1 className="page-intro__title">Xây dựng doanh nghiệp vận hành bằng dữ liệu và AI</h1>
              <p className="page-intro__description">
                Hệ thống giải pháp giúp tự động hoá quy trình marketing, bán hàng và chăm sóc khách hàng, đồng thời đảm bảo dữ
                liệu luôn sẵn sàng cho việc ra quyết định.
              </p>
              <div className="page-intro__stats">
                <div className="stat-card">
                  <span className="stat-card__value">{tools.length}+</span>
                  <span className="stat-card__label">Giải pháp được thẩm định</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__value">4 lĩnh vực</span>
                  <span className="stat-card__label">Marketing · Sales · Ops · CS</span>
                </div>
              </div>
            </div>
            <div className="page-intro__note" aria-hidden>
              <p>“Tập trung vào ROI, không chạy theo xu hướng. Mỗi sprint đều phải đo lường được.”</p>
              <span>Ngọc Tây IO</span>
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
            <h2 className="section__title">Danh mục giải pháp cho doanh nghiệp</h2>
            <p className="section__description">
              Lọc theo mục tiêu của bạn để chọn ra công cụ phù hợp. Mỗi mục đều đi kèm checklist triển khai và tài liệu đào tạo
              cho đội ngũ nội bộ.
            </p>
          </div>
          <div className="tool-grid">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/doanh-nghiep/${tool.slug}`} className="tool-link">
                <ToolCard {...tool} />
              </Link>
            ))}
          </div>
          <div className="callout">
            <h3>Chiến lược gợi ý</h3>
            <p>
              Xác định một quy trình ưu tiên (ví dụ: xử lý lead mới), chạy thử trong 2 tuần với dữ liệu thật và mời nhóm liên
              quan tham gia đánh giá. Khi KPI đạt kỳ vọng, chuẩn hoá tài liệu để nhân rộng sang các phòng ban khác.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__content">
              <h2 className="cta-panel__title">Thiết kế lộ trình AI riêng cho doanh nghiệp của bạn</h2>
              <p className="cta-panel__description">
                Đăng ký workshop nội bộ 90 phút cùng chuyên gia Ngọc Tây IO để khám phá cơ hội ứng dụng AI và xây dựng kế hoạch
                hành động trong 30 ngày.
              </p>
              <div className="cta-panel__actions">
                <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                  Đặt lịch workshop
                </a>
                <Link href="/" className="button button--ghost">
                  Xem case study
                </Link>
              </div>
            </div>
            <div className="cta-panel__aside" aria-hidden>
              <p>Hành trình 30-60-90 ngày được cá nhân hoá cho từng ngành.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
