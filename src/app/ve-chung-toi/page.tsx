import Link from "next/link";
import { PageLayout } from "../../components/ui/PageLayout";

const values = [
  {
    title: "Minh bạch & thực chiến",
    description: "Mỗi gợi ý công cụ đều được kiểm chứng qua dự án thực tế và minh bạch tiêu chí đánh giá.",
  },
  {
    title: "Đồng hành dài hạn",
    description: "Chúng tôi kết hợp tư vấn chiến lược, triển khai và đào tạo để đảm bảo đội ngũ tự vận hành được.",
  },
  {
    title: "Liên tục đổi mới",
    description: "Cập nhật công cụ mới, chia sẻ case study và duy trì cộng đồng thực hành concept.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Về NgocTay.io</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Concept chuyển đổi số được xây dựng bởi cộng đồng sản phẩm số Việt Nam
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            NgocTay.io tổng hợp kinh nghiệm triển khai của nhiều doanh nghiệp SME và đội ngũ cá nhân, biến chúng thành lộ trình có thể áp dụng ngay.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-indigo-100 bg-surface p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{value.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
          <Link href="/ve-chung-toi/lien-he" className="text-sm font-medium text-indigo-600">
            Liên hệ đội ngũ NgocTay.io →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
