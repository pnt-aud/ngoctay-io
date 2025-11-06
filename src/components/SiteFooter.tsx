const footerGroups = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Realtime Edge", href: "#platform" },
      { label: "Automation Studio", href: "#solutions" },
      { label: "Observability", href: "#enterprise" },
    ],
  },
  {
    title: "Nguồn lực",
    links: [
      { label: "Tài liệu kỹ thuật", href: "#resources" },
      { label: "Bản cập nhật", href: "#changelog" },
      { label: "Cộng đồng", href: "https://discord.gg" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { label: "Về Ngọc Tây", href: "#about" },
      { label: "Tuyển dụng", href: "#careers" },
      { label: "Liên hệ", href: "mailto:hello@ngoctay.io.vn" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logo">NT</div>
          <div>
            <p className="site-footer__title">Ngọc Tây IO Cloud</p>
            <p className="site-footer__description">
              Nền tảng dữ liệu realtime và workflow automation giúp đội ngũ Việt Nam triển khai sản phẩm AI trong vài ngày.
            </p>
          </div>
        </div>

        <div className="site-footer__grid">
          {footerGroups.map((group) => (
            <div key={group.title} className="site-footer__column">
              <p className="site-footer__column-title">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="site-footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>© {new Date().getFullYear()} Ngọc Tây IO. Crafted for builders.</p>
          <div className="site-footer__legal">
            <a href="#privacy">Bảo mật</a>
            <a href="#terms">Điều khoản</a>
            <a href="#status">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
