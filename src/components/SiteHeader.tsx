"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/doanh-nghiep", label: "Cho doanh nghiệp" },
  { href: "/ca-nhan", label: "Cho cá nhân" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Ngọc Tây IO">
          <span className="site-header__badge">NT</span>
          <span className="site-header__title">
            Ngọc Tây <span>IO</span>
          </span>
        </Link>

        <nav className={clsx("site-nav", isMenuOpen && "site-nav--open")} aria-label="Chuyên mục chính">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx("site-nav__link", isActive && "site-nav__link--active")}
              >
                {item.label}
              </Link>
            );
          })}
          <a className="button button--ghost site-nav__cta" href="mailto:hello@ngoctay.io.vn">
            Liên hệ tư vấn
          </a>
        </nav>

        <div className="site-header__actions">
          <a className="button button--ghost site-header__cta" href="mailto:hello@ngoctay.io.vn">
            Liên hệ tư vấn
          </a>
          <button
            type="button"
            className={clsx("site-header__toggle", isMenuOpen && "site-header__toggle--active")}
            aria-label="Mở menu điều hướng"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
