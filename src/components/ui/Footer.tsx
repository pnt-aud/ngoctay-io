import Link from "next/link";

const platformLinks = [
  { href: "/doanh-nghiep", label: "Giải pháp doanh nghiệp" },
  { href: "/ca-nhan", label: "Giải pháp cá nhân" },
  { href: "/blog", label: "Blog" },
];

const policyLinks = [
  { href: "/chinh-sach", label: "Chính sách" },
  { href: "/chinh-sach/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
  { href: "/chinh-sach/bao-mat-thong-tin", label: "Bảo mật thông tin" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold text-white">
              NgocTay.io
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nền tảng đồng hành cùng doanh nghiệp và cá nhân trong hành trình chuyển đổi số, từ định hướng chiến lược tới triển khai vận hành.
            </p>
            <p className="text-sm text-slate-400">
              Email: <a className="text-indigo-500" href="mailto:hello@ngoctay.io">hello@ngoctay.io</a>
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Nền tảng</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Tài nguyên</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-500">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ve-chung-toi/lien-he" className="hover:text-indigo-500">
                  Liên hệ đội ngũ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NgocTay.io. All rights reserved.</p>
          <p>Đồng hành bởi cộng đồng xây dựng sản phẩm số Việt Nam.</p>
        </div>
      </div>
    </footer>
  );
}
