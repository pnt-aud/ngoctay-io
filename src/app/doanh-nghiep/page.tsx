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
    <main>
      <section className="category-hero">
        <div className="container">
          <span className="pill">Doanh nghiệp</span>
          <div className="category-hero__header">
            <h1 className="category-hero__title">Xây dựng doanh nghiệp vận hành bằng dữ liệu và AI</h1>
            <p className="category-hero__summary">
              Từ quản lý khách hàng đến tối ưu ngân sách marketing, các giải pháp trong danh mục này giúp doanh nghiệp Việt Nam
              tăng tốc tăng trưởng và giảm chi phí vận hành với thời gian triển khai rõ ràng.
            </p>
            <div className="metric-row">
              <div className="metric-card">
                <p className="metric-card__number">{tools.length} giải pháp</p>
                <p className="metric-card__label">Được tuyển chọn kỹ lưỡng</p>
              </div>
              <div className="metric-card">
                <p className="metric-card__number">4 lĩnh vực chính</p>
                <p className="metric-card__label">Marketing, Sales, Ops, CS</p>
              </div>
            </div>
          </div>
          <div className="filter-chips" aria-label="Danh mục từ khóa">
            {uniqueTags.map((tag) => (
              <span key={tag} className="chip chip--subtle">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <div className="tool-grid">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/doanh-nghiep/${tool.slug}`} className="tool-link">
                <ToolCard {...tool} />
              </Link>
            ))}
          </div>
          <div className="insight-card" style={{ marginTop: "3rem" }}>
            <strong>Chiến lược triển khai:</strong> Bắt đầu bằng việc xác định bài toán ưu tiên (ví dụ: tăng tỉ lệ chốt sale),
            sau đó chọn công cụ hỗ trợ đo lường KPI và tự động hoá quy trình nhỏ để chứng minh hiệu quả trước khi mở rộng.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Thiết kế lộ trình AI riêng cho doanh nghiệp của bạn</h2>
            <p>
              Đăng ký buổi workshop nội bộ 90 phút cùng chuyên gia Ngọc Tây IO để khám phá cơ hội ứng dụng AI và xây dựng kế
              hoạch hành động trong 30 ngày.
            </p>
            <div className="cta-banner__actions">
              <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                Đặt lịch workshop
              </a>
              <Link href="/" className="button button--ghost">
                Xem case study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
