import Link from "next/link";

const footerLinks = [
  {
    title: "Nguồn lực",
    items: [
      { label: "Blog AI", href: "https://ngoctay.io.vn/blog" },
      { label: "Tài nguyên miễn phí", href: "https://ngoctay.io.vn/resources" },
      { label: "Sự kiện", href: "https://ngoctay.io.vn/events" },
    ],
  },
  {
    title: "Giải pháp",
    items: [
      { label: "Cho doanh nghiệp", href: "/doanh-nghiep" },
      { label: "Cho cá nhân", href: "/ca-nhan" },
      { label: "Hợp tác đối tác", href: "https://ngoctay.io.vn/partners" },
    ],
  },
  {
    title: "Kết nối",
    items: [
      { label: "hello@ngoctay.io.vn", href: "mailto:hello@ngoctay.io.vn" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Facebook", href: "https://www.facebook.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__lead">
          <div className="site-footer__badge">NT</div>
          <div className="site-footer__copy">
            <p className="site-footer__title">Ngọc Tây IO</p>
            <p className="site-footer__description">
              Hệ sinh thái triển khai AI bản địa hoá cho doanh nghiệp và cá nhân Việt Nam. Chúng tôi kết hợp tư vấn, công cụ
              và tài nguyên đào tạo để đảm bảo mỗi dự án đều tạo được giá trị rõ ràng.
            </p>
          </div>
        </div>

        <div className="site-footer__grid">
          {footerLinks.map((group) => (
            <div key={group.title} className="site-footer__column">
              <p className="site-footer__column-title">{group.title}</p>
              <ul className="site-footer__list">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href} className="site-footer__link">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="site-footer__link" target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="site-footer__column">
            <p className="site-footer__column-title">Nhận bản tin triển khai</p>
            <p className="site-footer__note">
              Cập nhật case study, checklist và workshop mới nhất mỗi tháng.
            </p>
            <a className="button button--ghost site-footer__newsletter" href="mailto:hello@ngoctay.io.vn">
              Đăng ký qua email
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>© {new Date().getFullYear()} Ngọc Tây IO. All rights reserved.</p>
          <div className="site-footer__legal">
            <Link href="/">Điều khoản</Link>
            <Link href="/">Bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
