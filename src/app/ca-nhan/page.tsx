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
    <main>
      <section className="category-hero">
        <div className="container">
          <span className="pill">Cá nhân</span>
          <div className="category-hero__header">
            <h1 className="category-hero__title">Xây dựng phong cách làm việc thông minh cùng trợ lý AI</h1>
            <p className="category-hero__summary">
              Từ sáng tạo nội dung, học ngoại ngữ đến quản lý tài chính, các công cụ này giúp bạn tối ưu thời gian và tạo ra
              kết quả vượt trội cho chính mình.
            </p>
            <div className="metric-row">
              <div className="metric-card">
                <p className="metric-card__number">{tools.length} công cụ</p>
                <p className="metric-card__label">Phục vụ nhu cầu đa dạng</p>
              </div>
              <div className="metric-card">
                <p className="metric-card__number">100% tiếng Việt</p>
                <p className="metric-card__label">Tối ưu trải nghiệm người dùng</p>
              </div>
            </div>
          </div>
          <div className="filter-chips" aria-label="Danh mục thói quen">
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
              <Link key={tool.slug} href={`/ca-nhan/${tool.slug}`} className="tool-link">
                <ToolCard {...tool} />
              </Link>
            ))}
          </div>
          <div className="insight-card" style={{ marginTop: "3rem" }}>
            <strong>Gợi ý hình thành thói quen:</strong> Thiết lập mục tiêu 30 ngày cùng AI, đo lường tiến độ hàng tuần và điều
            chỉnh prompt để phù hợp với nhịp sống của bạn.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Nâng cấp kỹ năng cùng chương trình học tập cá nhân hoá</h2>
            <p>
              Đăng ký bản tin hàng tuần để nhận bài học, prompt mẫu và bộ công cụ mới nhất giúp bạn phát triển sự nghiệp với
              AI.
            </p>
            <div className="cta-banner__actions">
              <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                Nhận bản tin chuyên sâu
              </a>
              <Link href="/" className="button button--ghost">
                Khám phá câu chuyện học viên
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
