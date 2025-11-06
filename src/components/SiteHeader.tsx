"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "#solutions", label: "Giải pháp" },
  { href: "#platform", label: "Nền tảng" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#resources", label: "Tài nguyên" },
  { href: "#enterprise", label: "Enterprise" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" data-expanded={isMenuOpen ? "true" : undefined}>
      <div className="site-header__glow" aria-hidden />
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Ngọc Tây IO">
          <span className="site-header__logo">NT</span>
          <div className="site-header__title">
            <strong>Ngọc Tây</strong>
            <span>IO Cloud</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
            Liên hệ
          </a>
          <a className="button button--primary" href="#platform">
            Trải nghiệm ngay
          </a>
        </div>

        <button
          className="site-header__toggle"
          aria-label="Mở điều hướng"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="site-header__drawer" role="dialog" aria-modal="true">
        <nav aria-label="Điều hướng di động">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link" onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--ghost" href="mailto:hello@ngoctay.io.vn">
            Liên hệ
          </a>
          <a className="button button--primary" href="#platform">
            Trải nghiệm ngay
          </a>
        </nav>
      </div>
    </header>
  );
}
