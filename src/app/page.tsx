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

const heroStats = [
  { value: "40+", label: "Dự án đã triển khai thành công" },
  { value: "12 ngành", label: "Được chuẩn hoá quy trình bằng AI" },
  { value: "6 tuần", label: "Kích hoạt đội ngũ trung bình" },
  { value: "24/7", label: "Kho học liệu và checklist cập nhật" },
];

const journeys = [
  {
    href: "/doanh-nghiep",
    badge: "Doanh nghiệp",
    title: "Tái thiết quy trình với AI vận hành thực tế",
    description:
      "Workshop chẩn đoán, blueprint triển khai và bộ KPI minh bạch giúp bạn chứng minh hiệu quả chỉ sau vài sprint.",
    bullets: ["Ưu tiên theo mục tiêu tăng trưởng", "Workflow mẫu cho Marketing, Sales, CS", "Dashboard theo dõi ROI"],
  },
  {
    href: "/ca-nhan",
    badge: "Cá nhân",
    title: "Nâng cấp kỹ năng và thói quen làm việc cùng trợ lý AI",
    description:
      "Kho công cụ cá nhân hoá, lịch học tập và cộng đồng đồng hành để bạn duy trì nhịp độ phát triển bền vững.",
    bullets: ["Lịch luyện tập kỹ năng theo tuần", "Prompt template theo mục tiêu", "Cộng đồng chia sẻ case thực tế"],
  },
];

const capabilityHighlights = [
  {
    icon: "🎯",
    title: "Chiến lược xuất phát từ vấn đề thực",
    description:
      "Phân tích nhu cầu và dữ liệu hiện trạng để xác định bài toán ưu tiên, đảm bảo AI phục vụ mục tiêu kinh doanh cụ thể.",
  },
  {
    icon: "🛠️",
    title: "Kho giải pháp sẵn sàng vận hành",
    description:
      "Checklist, mẫu tài liệu và cấu hình tiêu chuẩn được cập nhật liên tục giúp đội ngũ triển khai nhanh chóng.",
  },
  {
    icon: "📈",
    title: "Đo lường hiệu quả theo từng sprint",
    description:
      "Bảng điều phối dự án và dashboard ROI chuẩn hoá giúp bạn theo dõi tiến độ, ngân sách và mức độ hài lòng của người dùng.",
  },
];

const processSteps = [
  {
    title: "Khảo sát và xác định mục tiêu",
    description: "Phỏng vấn đội ngũ, đánh giá dữ liệu và lựa chọn bài toán ưu tiên trong 2-3 buổi workshop.",
  },
  {
    title: "Thiết kế blueprint triển khai",
    description: "Xây dựng workflow, phân quyền và kế hoạch đo lường với các template đã kiểm chứng.",
  },
  {
    title: "Thử nghiệm nhanh từng sprint",
    description: "Kết nối công cụ, tinh chỉnh prompt, đào tạo đội ngũ và ghi nhận phản hồi thực tế.",
  },
  {
    title: "Mở rộng và tối ưu",
    description: "Chuẩn hoá tài liệu, nhân rộng sang phòng ban khác và tối ưu chi phí vận hành.",
  },
];

const supportHighlights = [
  {
    title: "Top giải pháp doanh nghiệp",
    description: "Tự động hoá quy trình bán hàng, marketing, vận hành và chăm sóc khách hàng với dữ liệu bản địa.",
    basePath: "/doanh-nghiep",
    tools: business.slice(0, 3),
  },
  {
    title: "Công cụ cá nhân nổi bật",
    description: "Tăng tốc sáng tạo nội dung, quản lý thời gian và học tập với trợ lý AI tiếng Việt.",
    basePath: "/ca-nhan",
    tools: personal.slice(0, 3),
  },
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content">
              <span className="badge badge--surface">Hệ sinh thái triển khai AI bản địa hoá</span>
              <h1 className="hero__title">Đưa AI vào vận hành hàng ngày cùng đội ngũ Ngọc Tây IO</h1>
              <p className="hero__subtitle">
                Chúng tôi đồng hành từ chiến lược, lựa chọn công cụ tới đào tạo vận hành, giúp doanh nghiệp và cá nhân Việt Nam
                đo lường được hiệu quả chuyển đổi số dựa trên AI.
              </p>
              <div className="hero__actions">
                <Link href="/doanh-nghiep" className="button button--primary">
                  Khởi động cho doanh nghiệp
                </Link>
                <Link href="/ca-nhan" className="button button--ghost">
                  Công cụ dành cho cá nhân
                </Link>
              </div>
              <dl className="hero__stats" aria-label="Số liệu nổi bật">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hero__stat">
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero__visual" aria-hidden>
              <div className="hero__panel">
                <p className="hero__panel-title">Blueprint triển khai</p>
                <ul>
                  <li>Khung mục tiêu OKR & KPI</li>
                  <li>Checklist bàn giao giữa các phòng ban</li>
                  <li>Bảng tiến độ sprint realtime</li>
                </ul>
              </div>
              <div className="hero__panel hero__panel--accent">
                <p className="hero__panel-title">Tài nguyên đi kèm</p>
                <ul>
                  <li>Kho prompt theo vai trò</li>
                  <li>Mẫu đào tạo nội bộ</li>
                  <li>Template báo cáo ROI</li>
                </ul>
              </div>
              <div className="hero__tag">Đồng hành bởi chuyên gia công nghệ & vận hành</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="badge">Hai hành trình chính</span>
            <h2 className="section__title">Chọn nhánh phù hợp với mục tiêu chuyển đổi của bạn</h2>
            <p className="section__description">
              Mỗi lộ trình đều có tư liệu triển khai, công cụ gợi ý và hỗ trợ đào tạo để bạn tự tin áp dụng AI vào thực tế, phù
              hợp với quy mô và nguồn lực hiện có.
            </p>
          </div>
          <div className="journey-grid">
            {journeys.map((journey) => (
              <Link key={journey.href} href={journey.href} className="journey-card">
                <span className="journey-card__badge">{journey.badge}</span>
                <h3 className="journey-card__title">{journey.title}</h3>
                <p className="journey-card__description">{journey.description}</p>
                <ul className="journey-card__list">
                  {journey.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="journey-card__cta" aria-hidden>
                  Bắt đầu ngay →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="badge">Giá trị cốt lõi</span>
            <h2 className="section__title">Tập trung vào hiệu quả, không chỉ là công nghệ</h2>
            <p className="section__description">
              Ngọc Tây IO kết hợp kinh nghiệm tư vấn, đội ngũ vận hành và hệ sinh thái đối tác để mỗi giải pháp đều có lộ trình
              rõ ràng, phù hợp với bối cảnh Việt Nam.
            </p>
          </div>
          <div className="feature-grid">
            {capabilityHighlights.map((feature) => (
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

      <section className="section">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="badge">Hành trình triển khai</span>
            <h2 className="section__title">4 bước đưa AI vào hoạt động trong 90 ngày</h2>
            <p className="section__description">
              Được xây dựng từ hơn 40 dự án thành công trong nhiều lĩnh vực, quy trình này giúp đội ngũ duy trì động lực và đo
              lường kết quả rõ ràng qua từng sprint.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-card">
                <div className="process-card__index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="badge">Bảng xếp hạng công cụ</span>
            <h2 className="section__title">Tuyển chọn giải pháp phù hợp nhất với nhu cầu của bạn</h2>
            <p className="section__description">
              Danh mục được cập nhật dựa trên phản hồi của cộng đồng và chuyên gia triển khai, tập trung vào khả năng vận hành
              thực tế và hỗ trợ từ nhà cung cấp.
            </p>
          </div>
          <div className="support-grid">
            {supportHighlights.map((group) => (
              <div key={group.title} className="support-column">
                <h3 className="support-column__title">{group.title}</h3>
                <p className="support-column__description">{group.description}</p>
                <div className="support-column__tools">
                  {group.tools.map((tool) => (
                    <Link key={tool.slug} href={`${group.basePath}/${tool.slug}`} className="tool-link">
                      <ToolCard {...tool} />
                    </Link>
                  ))}
                </div>
                <div className="support-column__note">
                  <span>Gợi ý:</span> Chọn một quy trình ưu tiên, đo lường hiệu quả trong 2-3 tuần rồi nhân rộng.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__content">
              <h2 className="cta-panel__title">Sẵn sàng kích hoạt dự án AI tiếp theo?</h2>
              <p className="cta-panel__description">
                Đặt lịch tư vấn 30 phút để nhận bản đồ triển khai phù hợp với mục tiêu, nguồn lực và ngành nghề của bạn.
              </p>
              <div className="cta-panel__actions">
                <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
                  Đặt lịch tư vấn
                </a>
                <Link href="/doanh-nghiep" className="button button--ghost">
                  Xem quy trình mẫu
                </Link>
              </div>
            </div>
            <div className="cta-panel__aside" aria-hidden>
              <p>“Triển khai nhanh - đo lường rõ - mở rộng tự tin.”</p>
              <span>Ngọc Tây IO</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
