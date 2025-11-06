const solutionCards = [
  {
    title: "Realtime customer 360",
    description:
      "Đồng bộ dữ liệu bán hàng, marketing và sản phẩm trong vài phút với pipeline realtime dựa trên Postgres logical replication.",
    pills: ["Stream", "Warehouse", "Playbooks"],
  },
  {
    title: "Automation studio",
    description:
      "Thiết kế workflow không cần code, kích hoạt chiến dịch chăm sóc đa kênh với AI agent chạy trên dữ liệu của bạn.",
    pills: ["Journeys", "AI Assistants", "Integrations"],
  },
  {
    title: "Observability for AI",
    description:
      "Giám sát chất lượng mô hình, tỉ lệ thành công của prompt và hiệu quả vận hành theo thời gian thực.",
    pills: ["Tracing", "Feedback loop", "Dashboards"],
  },
];

const featureHighlights = [
  {
    eyebrow: "Realtime as default",
    title: "Edge infrastructure",
    description:
      "Kết nối edge function, database và storage chỉ trong một cú click. Deploy từ Git và scale lên hàng triệu request tự động.",
  },
  {
    eyebrow: "Open source DNA",
    title: "Dựa trên Postgres",
    description:
      "Toàn bộ nền tảng xây dựng từ công nghệ mở, dễ dàng tự host hoặc mở rộng bằng extension quen thuộc của hệ sinh thái Postgres.",
  },
  {
    eyebrow: "Secure by design",
    title: "Enterprise security",
    description:
      "Chuẩn SOC2, SSO, ghi log chi tiết và chính sách dữ liệu linh hoạt giúp đội ngũ an tâm triển khai trong môi trường doanh nghiệp.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Miễn phí",
    description: "5 triệu sự kiện/tháng · 100 GB storage · Edge functions không giới hạn",
    cta: "Bắt đầu ngay",
  },
  {
    name: "Growth",
    price: "$49",
    description: "Giới hạn linh hoạt, alert realtime, hỗ trợ triển khai 1-1",
    cta: "Nâng cấp", 
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    description: "SLA 99.99%, private region, hợp đồng tuỳ chỉnh và hỗ trợ 24/7",
    cta: "Trao đổi với chúng tôi",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero" id="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">Supabase inspired</span>
            <h1>Hạ tầng realtime và workflow automation cho đội ngũ Việt Nam</h1>
            <p>
              Ngọc Tây IO Cloud cung cấp Postgres realtime, edge functions và automation studio tích hợp AI. Tạo sản phẩm, vận
              hành chiến dịch và đo lường hiệu quả trong một nền tảng duy nhất.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#platform">
                Khởi tạo dự án
              </a>
              <a className="button button--ghost" href="#pricing">
                Xem bảng giá
              </a>
            </div>
            <dl className="hero__metrics">
              <div>
                <dt>Thời gian triển khai</dt>
                <dd>15 phút</dd>
              </div>
              <div>
                <dt>Latency trung bình</dt>
                <dd>&lt;40ms</dd>
              </div>
              <div>
                <dt>Đội ngũ đang sử dụng</dt>
                <dd>8k+</dd>
              </div>
            </dl>
          </div>
          <div className="hero__visual" aria-hidden>
            <div className="code-window">
              <div className="code-window__header">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <pre>
                <code>
{`import { createClient } from "@ngoctay-io/sdks";

const client = createClient({
  projectRef: "vietstack-edge",
  apiKey: process.env.NGOCTAY_KEY,
});

const { data } = await client
  .from("orders")
  .on("INSERT", (payload) => {
    triggerWorkflow("care", payload.new.customer_id);
  })
  .subscribe();`}
                </code>
              </pre>
            </div>
            <div className="hero__glow" />
          </div>
        </div>
      </section>

      <section className="section section--muted" id="trusted">
        <div className="container trusted">
          <p>Được tin dùng bởi các đội ngũ phát triển sản phẩm hàng đầu</p>
          <div className="trusted__logos">
            <span>VietStack</span>
            <span>NextVision</span>
            <span>HanoiOps</span>
            <span>Saigon Data</span>
            <span>CloudNative VN</span>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Solutions</span>
            <h2>Từ realtime backend đến workflow AI-first</h2>
            <p>Chọn mô-đun phù hợp để tăng tốc sản phẩm mà không cần xây dựng hạ tầng từ đầu.</p>
          </div>
          <div className="card-grid">
            {solutionCards.map((solution) => (
              <article key={solution.title} className="card">
                <div className="card__shine" aria-hidden />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <div className="card__pills">
                  {solution.pills.map((pill) => (
                    <span key={pill}>{pill}</span>
                  ))}
                </div>
                <a className="card__link" href="#platform">
                  Khám phá →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="platform">
        <div className="container platform">
          <div className="platform__content">
            <span className="section__eyebrow">Platform</span>
            <h2>Build nhanh, scale linh hoạt</h2>
            <p>
              Kết hợp Postgres managed, Auth, Storage và Edge Functions trên cùng một UI. Mọi thứ được giám sát bằng bảng điều
              khiển realtime và có thể mở rộng bằng SDK open-source.
            </p>
            <ul>
              <li>Auth với SSO, OTP, Magic Link, Row Level Security</li>
              <li>Storage phân lớp, CDN edge và image transformation</li>
              <li>CLI và Studio UI giúp triển khai chỉ trong vài phút</li>
            </ul>
            <div className="platform__actions">
              <a className="button button--primary" href="#resources">
                Xem tài liệu
              </a>
              <a className="button button--text" href="#enterprise">
                So sánh với giải pháp khác
              </a>
            </div>
          </div>
          <div className="platform__preview" aria-hidden>
            <div className="preview-card">
              <div className="preview-card__header">
                <span>Deploy workflow</span>
                <span className="badge">Production</span>
              </div>
              <ul>
                <li>
                  <span>Realtime stream</span>
                  <span>Active</span>
                </li>
                <li>
                  <span>Automation Studio</span>
                  <span>4 runs/min</span>
                </li>
                <li>
                  <span>Edge Functions</span>
                  <span>27ms</span>
                </li>
                <li>
                  <span>Storage CDN</span>
                  <span>Regional</span>
                </li>
              </ul>
            </div>
            <div className="platform__orb" />
          </div>
        </div>
      </section>

      <section className="section section--muted" id="enterprise">
        <div className="container feature-grid">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="feature">
              <span className="feature__eyebrow">{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Pricing</span>
            <h2>Linh hoạt theo từng giai đoạn phát triển</h2>
            <p>Chỉ trả tiền khi bạn scale, miễn phí cho các dự án thử nghiệm và đội ngũ mới.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className="pricing">
                <div className="pricing__badge">{plan.name}</div>
                <h3>{plan.price}</h3>
                <p>{plan.description}</p>
                <a className="button button--ghost" href="#contact">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="resources">
        <div className="container cta">
          <div>
            <span className="section__eyebrow">Resources</span>
            <h2>Xây dựng sản phẩm tiếp theo trên Ngọc Tây IO</h2>
            <p>
              Thư viện template, hướng dẫn tích hợp SDK và cộng đồng builder giúp bạn giải quyết mọi bài toán realtime và
              automation.
            </p>
          </div>
          <a className="button button--primary" href="mailto:hello@ngoctay.io.vn">
            Nhận tư vấn chuyên sâu
          </a>
        </div>
      </section>
    </div>
  );
}
