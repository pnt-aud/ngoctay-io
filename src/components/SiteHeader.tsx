"use client";

import clsx from "clsx";
import Link from "next/link";
import { type MouseEvent, useEffect, useRef, useState } from "react";

type DropdownNavItem = {
  id: string;
  label: string;
  items: {
    title: string;
    description: string;
    href: string;
  }[];
};

type SimpleNavItem = {
  id: string;
  label: string;
  href: string;
};

type NavigationItem = DropdownNavItem | SimpleNavItem;

const navigation: NavigationItem[] = [
  {
    id: "products",
    label: "Sản phẩm",
    items: [
      {
        title: "SalesFlow CRM",
        description: "Quản lý khách hàng và pipeline bán hàng",
        href: "#solutions",
      },
      {
        title: "FinTrack",
        description: "Phân tích tài chính và báo cáo chi tiết",
        href: "#solutions",
      },
      {
        title: "NoteZen",
        description: "Ghi chú thông minh với AI",
        href: "#platform",
      },
      {
        title: "OpsSync",
        description: "Đồng bộ và tự động hóa quy trình",
        href: "#platform",
      },
      {
        title: "ContentSpark",
        description: "Tạo nội dung marketing tự động",
        href: "#platform",
      },
      {
        title: "Insight360",
        description: "Business intelligence và analytics",
        href: "#enterprise",
      },
    ],
  },
  {
    id: "solutions",
    label: "Giải pháp",
    items: [
      {
        title: "Cho Doanh nghiệp SME",
        description: "Giải pháp tối ưu cho doanh nghiệp vừa và nhỏ",
        href: "#solutions",
      },
      {
        title: "Cho Startup",
        description: "Hỗ trợ khởi nghiệp phát triển nhanh",
        href: "#solutions",
      },
      {
        title: "Cho E-commerce",
        description: "Tối ưu hóa vận hành cửa hàng online",
        href: "#platform",
      },
      {
        title: "Cho Agency",
        description: "Quản lý dự án và khách hàng hiệu quả",
        href: "#platform",
      },
      {
        title: "Tự động hóa Marketing",
        description: "Chiến dịch marketing thông minh",
        href: "#platform",
      },
      {
        title: "Tích hợp hệ thống",
        description: "Kết nối tất cả công cụ của bạn",
        href: "#enterprise",
      },
    ],
  },
  { id: "pricing", label: "Bảng giá", href: "#pricing" },
  { id: "enterprise", label: "Enterprise", href: "#enterprise" },
];

const hasDropdown = (item: NavigationItem): item is DropdownNavItem => "items" in item;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "https://zalo.me",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.977c-.426.794-1.353 1.508-2.554 1.964-1.2.455-2.556.607-3.927.44-1.372-.166-2.698-.624-3.844-1.327-1.146-.703-2.072-1.637-2.682-2.706-.61-1.07-.873-2.24-.762-3.39.111-1.15.576-2.232 1.348-3.137.772-.905 1.83-1.604 3.068-2.025 1.237-.42 2.607-.54 3.968-.345 1.36.195 2.654.704 3.749 1.474 1.095.77 1.948 1.777 2.47 2.915.522 1.138.692 2.372.493 3.574-.2 1.202-.737 2.33-1.555 3.267l.228.296zm-2.123-3.547c-.063-.26-.23-.482-.464-.613-.234-.13-.51-.165-.765-.097l-1.36.362c-.255.068-.47.232-.598.455-.127.223-.157.49-.082.738l.363 1.213c.074.248.24.453.46.567.22.114.477.127.71.037l1.36-.362c.232-.062.43-.214.548-.42.118-.207.145-.453.078-.7l-.25-.83z" />
      </svg>
    ),
  },
];

export function SiteHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [mobileMenuOffset, setMobileMenuOffset] = useState<number | null>(null);
  const topHeaderRef = useRef<HTMLDivElement | null>(null);
  const mainHeaderRef = useRef<HTMLElement | null>(null);
  const originalBodyOverflow = useRef<string>("");

  useEffect(() => {
    if (!activeDropdown) {
      return;
    }

    const handleClick = () => setActiveDropdown(null);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!originalBodyOverflow.current) {
      originalBodyOverflow.current = document.body.style.overflow || "";
    }

    document.body.style.overflow = isMobileMenuOpen ? "hidden" : originalBodyOverflow.current;

    return () => {
      document.body.style.overflow = originalBodyOverflow.current;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const updateOffset = () => {
      const topHeight = topHeaderRef.current?.offsetHeight ?? 0;
      const mainHeight = mainHeaderRef.current?.offsetHeight ?? 0;
      setMobileMenuOffset(topHeight + mainHeight);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileDropdowns({});
    }
  }, [isMobileMenuOpen]);

  const toggleDropdown = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.stopPropagation();
    setActiveDropdown((current) => (current === id ? null : id));
  };

  const toggleMobileDropdown = (id: string) => {
    setMobileDropdowns((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="site-header">
      <div ref={topHeaderRef} className="top-header">
        <div className="top-header__container">
          <p className="slogan">Giải pháp toàn diện cho doanh nghiệp hiện đại</p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="social-link"
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header ref={mainHeaderRef} className="main-header">
        <div className="main-header__container">
          <a href="mailto:hello@ngoctay.io.vn" className="cta-button desktop-only">
            Liên hệ
          </a>

          <nav className="nav" aria-label="Điều hướng chính" onClick={(event) => event.stopPropagation()}>
            <ul className="nav__list">
              {navigation.map((item) => (
                <li key={item.id} className={clsx("nav__item", activeDropdown === item.id && "is-open")}>
                  {hasDropdown(item) ? (
                    <>
                      <button
                        type="button"
                        className="nav__link"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.id}
                        onClick={(event) => toggleDropdown(event, item.id)}
                      >
                        {item.label}
                        <svg className="nav__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </button>
                      <div className="dropdown" onClick={(event) => event.stopPropagation()}>
                        {item.items.map((link) => (
                          <Link key={link.title} href={link.href} className="dropdown__item" onClick={() => setActiveDropdown(null)}>
                            <span className="dropdown__title">{link.title}</span>
                            <span className="dropdown__desc">{link.description}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href ?? "#"} className="nav__link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/" className="logo" aria-label="NgocTay.io">
            <span className="logo-icon">NT</span>
            <span>NgocTay.io</span>
          </Link>

          <button
            type="button"
            className={clsx("mobile-menu-btn", isMobileMenuOpen && "is-active")}
            aria-label="Mở điều hướng"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={clsx("mobile-menu", isMobileMenuOpen && "is-open")}
        style={mobileMenuOffset ? { top: mobileMenuOffset } : undefined}
      >
        <div className="mobile-menu__content">
          <ul className="mobile-menu__list">
            {navigation.map((item) => (
              <li
                key={item.id}
                className={clsx("mobile-menu__item", mobileDropdowns[item.id] && "is-open")}
              >
                {hasDropdown(item) ? (
                  <>
                    <button
                      type="button"
                      className="mobile-menu__link"
                      aria-haspopup="true"
                      aria-expanded={mobileDropdowns[item.id] ?? false}
                      onClick={() => toggleMobileDropdown(item.id)}
                    >
                      {item.label}
                      <svg className="mobile-menu__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    <div className="mobile-submenu">
                      {item.items.map((link) => (
                        <div key={link.title} className="mobile-submenu__item">
                          <Link
                            href={link.href}
                            className="mobile-submenu__link"
                            onClick={closeMobileMenu}
                          >
                            <div className="mobile-submenu__title">{link.title}</div>
                            <div className="mobile-submenu__desc">{link.description}</div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href ?? "#"} className="mobile-menu__link" onClick={closeMobileMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-menu__cta">
            <a href="mailto:hello@ngoctay.io.vn" className="cta-button" onClick={closeMobileMenu}>
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
