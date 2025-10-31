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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-slate-800 md:gap-4">
          <Link href="/" className="text-xl font-semibold text-indigo-600">
            NgocTay.io
          </Link>
          <span className="text-xs font-medium uppercase tracking-wide text-indigo-600">
            Digital Growth OS
          </span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end md:gap-6">
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-indigo-600">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/ve-chung-toi/lien-he"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Nhận tư vấn
          </Link>
        </div>
      </div>
    </header>
  );
}
