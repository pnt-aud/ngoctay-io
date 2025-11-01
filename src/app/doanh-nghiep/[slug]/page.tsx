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
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container">
          <Link href="/doanh-nghiep" className="breadcrumb">
            ← Trở lại danh mục doanh nghiệp
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
                Dùng thử công cụ
              </a>
              <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
                Nhận tư vấn triển khai
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container detail-layout">
          <div className="detail-main">
            <h2>Giải pháp mang lại điều gì?</h2>
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
              <h3>Lộ trình triển khai khuyến nghị</h3>
              <ol>
                <li>Xác định dữ liệu đầu vào và KPI cần cải thiện.</li>
                <li>Cài đặt quy trình thử nghiệm trong 2 sprint cùng đội ngũ liên quan.</li>
                <li>Tổ chức buổi đánh giá, ghi nhận phản hồi và tối ưu prompt/workflow.</li>
                <li>Chuẩn hoá tài liệu đào tạo và mở rộng sang phòng ban khác.</li>
              </ol>
            </div>
          </div>

          <aside className="detail-aside">
            <div className="detail-aside__card">
              <h3>Hỗ trợ đi kèm</h3>
              <ul>
                <li>Workshop on-boarding 2 giờ</li>
                <li>Checklist bàn giao giữa Marketing & Sales</li>
                <li>Dashboard theo dõi KPI thời gian thực</li>
              </ul>
            </div>
            <div className="detail-aside__card">
              <h3>Đội ngũ đồng hành</h3>
              <p>Chuyên gia triển khai của Ngọc Tây IO hỗ trợ cài đặt, đào tạo và tối ưu hoá trong 30 ngày đầu tiên.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__content">
              <h2 className="cta-panel__title">Muốn tìm hiểu thêm về {tool.name}?</h2>
              <p className="cta-panel__description">
                Nhận demo chi tiết và tài liệu chuẩn bị giúp bạn đưa giải pháp này vào quy trình hiện tại mà không làm gián đoạn
                hoạt động.
              </p>
              <div className="cta-panel__actions">
                <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                  Đặt lịch demo
                </a>
                <Link href="/doanh-nghiep" className="button button--ghost">
                  Xem các giải pháp khác
                </Link>
              </div>
            </div>
            <div className="cta-panel__aside" aria-hidden>
              <p>Tập trung vào KPI, dữ liệu và trải nghiệm người dùng cuối.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
