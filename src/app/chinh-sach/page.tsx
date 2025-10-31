import Link from "next/link";
import { Footer } from "../../components/ui/Footer";
import { Navbar } from "../../components/ui/Navbar";

const policies = [
  { href: "/chinh-sach/dieu-khoan-su-dung", title: "Điều khoản sử dụng" },
  { href: "/chinh-sach/bao-mat-thong-tin", title: "Bảo mật thông tin" },
];

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <h1 className="text-3xl font-semibold text-slate-900">Chính sách</h1>
          <p className="text-base text-slate-600">
            Tìm hiểu về các điều khoản sử dụng và chính sách bảo mật khi sử dụng NgocTay.io.
          </p>
          <ul className="space-y-4">
            {policies.map((policy) => (
              <li key={policy.href} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <Link href={policy.href} className="text-blue-600">
                  {policy.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
