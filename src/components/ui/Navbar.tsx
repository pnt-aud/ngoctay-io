import Link from "next/link";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/doanh-nghiep", label: "Doanh nghiệp" },
  { href: "/ca-nhan", label: "Cá nhân" },
  { href: "/blog", label: "Blog" },
  { href: "/ve-chung-toi", label: "Về chúng tôi" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-blue-600">
          NgocTay.io
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
