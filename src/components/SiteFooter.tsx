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
    title: "Sản phẩm",
    items: [
      { label: "Cho doanh nghiệp", href: "/doanh-nghiep" },
      { label: "Cho cá nhân", href: "/ca-nhan" },
      { label: "Đối tác", href: "https://ngoctay.io.vn/partners" },
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
        <div className="site-footer__brand">
          <div className="site-footer__badge">NT</div>
          <div>
            <p className="site-footer__title">Ngọc Tây IO</p>
            <p className="site-footer__description">
              Nền tảng giúp doanh nghiệp và cá nhân Việt Nam khai thác sức mạnh của AI một cách thực tế và bền vững.
            </p>
          </div>
        </div>

        <div className="site-footer__links">
          {footerLinks.map((group) => (
            <div key={group.title} className="site-footer__column">
              <p className="site-footer__column-title">{group.title}</p>
              <ul>
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
