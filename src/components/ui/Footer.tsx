import Link from "next/link";

const footerLinks = [
  { href: "/chinh-sach", label: "Chính sách" },
  { href: "/chinh-sach/dieu-khoan-su-dung", label: "Điều khoản" },
  { href: "/chinh-sach/bao-mat-thong-tin", label: "Bảo mật" },
  { href: "/ve-chung-toi/lien-he", label: "Liên hệ" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NgocTay.io. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
