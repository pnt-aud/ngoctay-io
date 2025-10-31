import Link from "next/link";
import { PageLayout } from "../../components/ui/PageLayout";

const policies = [
  { href: "/chinh-sach/dieu-khoan-su-dung", title: "Điều khoản sử dụng" },
  { href: "/chinh-sach/bao-mat-thong-tin", title: "Bảo mật thông tin" },
];

export default function PolicyPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Chính sách</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Minh bạch thông tin và bảo vệ người dùng
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Chúng tôi cập nhật chính sách thường xuyên để đồng bộ với concept triển khai mới và các yêu cầu pháp lý tại Việt Nam.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="space-y-4">
            {policies.map((policy) => (
              <li key={policy.href} className="rounded-2xl border border-indigo-100 bg-surface p-6 shadow-sm">
                <Link href={policy.href} className="text-sm font-medium text-indigo-600">
                  {policy.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
