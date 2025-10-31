import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import businessTools from "@/data/tools-business.json";
import personalTools from "@/data/tools-personal.json";

type Tool = {
  slug: string;
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
};

const business = businessTools as Tool[];
const personal = personalTools as Tool[];

const featureHighlights = [
  {
    icon: "🚀",
    title: "Chiến lược triển khai rõ ràng",
    description:
      "Bộ khung từng bước giúp đội ngũ xác định mục tiêu, chuẩn hoá dữ liệu và đưa AI vào vận hành thực tế chỉ trong vài tuần.",
  },
  {
    icon: "🤝",
    title: "Đồng hành cùng chuyên gia",
    description:
      "Mỗi giải pháp đều đi kèm hướng dẫn, mẫu tài liệu và hỗ trợ đào tạo để cả doanh nghiệp lẫn cá nhân dễ dàng làm chủ công cụ.",
  },
  {
    icon: "📊",
    title: "Đo lường hiệu quả rõ ràng",
    description:
      "Dashboard tiêu chuẩn hoá giúp bạn theo dõi ROI, hiệu suất quy trình và mức độ hài lòng của người dùng sau khi ứng dụng AI.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__layout">
          <div>
            <span className="hero__badge">Hệ sinh thái triển khai AI bản địa</span>
            <h1 className="hero__title">Đưa AI vào hoạt động hàng ngày của doanh nghiệp và cá nhân Việt Nam</h1>
            <p className="hero__subtitle">
              Ngọc Tây IO tuyển chọn các sản phẩm, quy trình và tài nguyên giúp bạn triển khai AI với kết quả đo lường được,
              thay vì chỉ dừng ở xu hướng.
            </p>
            <div className="hero__actions">
              <Link href="/doanh-nghiep" className="button button--primary">
                Bắt đầu cùng doanh nghiệp
              </Link>
              <Link href="/ca-nhan" className="button button--ghost">
                Công cụ cho cá nhân
              </Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat-card">
                <p className="hero__stat-number">40+</p>
                <p className="hero__stat-label">Giải pháp đã triển khai thành công</p>
              </div>
              <div className="hero__stat-card">
                <p className="hero__stat-number">12</p>
                <p className="hero__stat-label">Ngành nghề được tối ưu hoá quy trình</p>
              </div>
              <div className="hero__stat-card">
                <p className="hero__stat-number">6 tuần</p>
                <p className="hero__stat-label">Thời gian trung bình kích hoạt đội ngũ</p>
              </div>
              <div className="hero__stat-card">
                <p className="hero__stat-number">24/7</p>
                <p className="hero__stat-label">Kho học liệu cập nhật liên tục</p>
              </div>
            </div>
          </div>
          <div className="hero__visual" aria-hidden>
            <div className="hero__visual-content">
              <span className="pill">Blueprint triển khai chuẩn hoá</span>
              <div className="hero__visual-card">
                <strong>Bảng điều phối dự án</strong>
                <p>Phân rã mục tiêu, xác định KPI và phân công rõ người chịu trách nhiệm cho từng hạng mục.</p>
              </div>
              <div className="hero__visual-card">
                <strong>Kho prompt theo vai trò</strong>
                <p>Hướng dẫn chi tiết cho marketing, sales, vận hành và cá nhân để tạo giá trị ngay từ ngày đầu.</p>
              </div>
              <div className="hero__visual-card">
                <strong>Đánh giá trưởng thành AI</strong>
                <p>Chấm điểm mức độ sẵn sàng của tổ chức, đề xuất bước đi tiếp theo dựa trên dữ liệu thực tế.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="pill">Lựa chọn theo mục tiêu</span>
            <h2 className="section__title">Chọn nhánh phù hợp với hành trình chuyển đổi của bạn</h2>
            <p className="section__description">
              Dù bạn đang tối ưu vận hành doanh nghiệp hay xây dựng thói quen làm việc thông minh cho bản thân, chúng tôi đều
              có lộ trình cụ thể để bạn triển khai AI một cách hiệu quả.
            </p>
          </div>
          <div className="category-grid">
            <Link href="/doanh-nghiep" className="category-card">
              <h3 className="category-card__title">Giải pháp cho doanh nghiệp</h3>
              <p className="category-card__description">
                Tự động hoá marketing, bán hàng, vận hành và chăm sóc khách hàng bằng hệ thống AI đã kiểm chứng.
              </p>
              <div className="tag-list">
                <span className="chip chip--outline">Workflow AI</span>
                <span className="chip chip--outline">CRM thông minh</span>
                <span className="chip chip--outline">Báo cáo realtime</span>
              </div>
              <div className="category-card__footer">
                <span>Khởi động ngay</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
            <Link href="/ca-nhan" className="category-card">
              <h3 className="category-card__title">Công cụ dành cho cá nhân</h3>
              <p className="category-card__description">
                Xây dựng thói quen học tập, sáng tạo nội dung và quản lý tài chính với trợ lý AI cá nhân hoá cho người Việt.
              </p>
              <div className="tag-list">
                <span className="chip chip--outline">Sáng tạo nội dung</span>
                <span className="chip chip--outline">Quản lý thời gian</span>
                <span className="chip chip--outline">Huấn luyện kỹ năng</span>
              </div>
              <div className="category-card__footer">
                <span>Khám phá ngay</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <div className="section__header">
            <span className="pill">Vì sao chọn Ngọc Tây IO</span>
            <h2 className="section__title">Tập trung vào hiệu quả và trải nghiệm người dùng</h2>
            <p className="section__description">
              Mỗi hạng mục đều được đội ngũ chuyên gia công nghệ, vận hành và đào tạo của chúng tôi kiểm định trước khi đưa
              vào hệ sinh thái để đảm bảo phù hợp với bối cảnh Việt Nam.
            </p>
          </div>
          <div className="feature-grid">
            {featureHighlights.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-card__icon" aria-hidden>
                  {feature.icon}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <div className="section__header">
            <span className="pill">Bảng xếp hạng công cụ</span>
            <h2 className="section__title">Những giải pháp nổi bật được cộng đồng tin dùng</h2>
            <p className="section__description">
              Các công cụ được đánh giá cao dựa trên khả năng triển khai thực tế, hỗ trợ từ nhà cung cấp và độ hài lòng của
              người dùng.
            </p>
          </div>
          <div className="showcase-grid">
            <div>
              <div className="section__header section--dense">
                <h3 className="section__title" style={{ fontSize: "1.5rem" }}>
                  Cho doanh nghiệp
                </h3>
                <p className="section__description">
                  Tập trung vào tối ưu quy trình và tăng trưởng doanh thu với AI.
                </p>
              </div>
              <div className="tool-showcase">
                {business.slice(0, 3).map((tool) => (
                  <Link key={tool.slug} href={`/doanh-nghiep/${tool.slug}`} className="tool-link">
                    <ToolCard {...tool} />
                  </Link>
                ))}
              </div>
              <div className="insight-card">
                <strong>Gợi ý chuyên gia:</strong> Bắt đầu với một quy trình đơn giản như xử lý lead, sau đó mở rộng sang các
                phòng ban khác để đảm bảo khả năng thích ứng của đội ngũ.
              </div>
            </div>
            <div>
              <div className="section__header section--dense">
                <h3 className="section__title" style={{ fontSize: "1.5rem" }}>
                  Cho cá nhân
                </h3>
                <p className="section__description">
                  Tăng tốc học tập, sáng tạo và quản lý cuộc sống với trợ lý AI cá nhân.
                </p>
              </div>
              <div className="tool-showcase">
                {personal.slice(0, 3).map((tool) => (
                  <Link key={tool.slug} href={`/ca-nhan/${tool.slug}`} className="tool-link">
                    <ToolCard {...tool} />
                  </Link>
                ))}
              </div>
              <div className="insight-card">
                <strong>Mẹo sử dụng:</strong> Duy trì nhật ký kết quả hàng tuần để đánh giá mức độ hỗ trợ của công cụ và điều
                chỉnh mục tiêu phù hợp.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Biến ý tưởng AI thành kết quả thực tế</h2>
            <p>
              Đặt lịch cùng đội ngũ Ngọc Tây IO để nhận tư vấn về lộ trình triển khai, lựa chọn công cụ và chương trình đào
              tạo phù hợp với mục tiêu của bạn.
            </p>
            <div className="cta-banner__actions">
              <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                Nhận tư vấn 1-1
              </a>
              <Link href="/doanh-nghiep" className="button button--ghost">
                Xem kế hoạch mẫu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
