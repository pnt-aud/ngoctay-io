import Link from "next/link";
import { Footer } from "../../components/ui/Footer";
import { Navbar } from "../../components/ui/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <h1 className="text-3xl font-semibold text-slate-900">Về NgocTay.io</h1>
          <p className="text-base text-slate-600">
            NgocTay.io là nền tảng tổng hợp và đánh giá các công cụ chuyển đổi số tại Việt Nam, giúp doanh nghiệp và cá nhân
            lựa chọn giải pháp phù hợp với mục tiêu phát triển.
          </p>
          <p className="text-base text-slate-600">
            Chúng tôi cung cấp thông tin chuyên sâu, case study thực tế và hỗ trợ triển khai để đảm bảo bạn tận dụng tối đa giá trị của công cụ.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Giá trị cốt lõi</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Minh bạch thông tin và đánh giá khách quan</li>
              <li>• Đồng hành dài hạn cùng khách hàng</li>
              <li>• Đổi mới liên tục với công nghệ mới nhất</li>
            </ul>
          </div>
          <Link href="/ve-chung-toi/lien-he" className="text-blue-600">
            Liên hệ đội ngũ NgocTay.io →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
