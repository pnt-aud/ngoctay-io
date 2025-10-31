"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/doanh-nghiep", label: "Cho doanh nghiệp" },
  { href: "/ca-nhan", label: "Cho cá nhân" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Ngọc Tây IO">
          <span className="site-header__badge">NT</span>
          <span className="site-header__title">
            Ngọc Tây <span>IO</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Chuyên mục chính">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__cta">
          <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
            Liên hệ tư vấn
          </a>
        </div>
      </div>
    </header>
  );
}
