import { Button } from "./ui/Button";
import { SectionTitle } from "./ui/SectionTitle";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:flex-row md:gap-12 md:text-left">
        <div className="flex-1">
          <SectionTitle
            title="Khám phá hệ sinh thái công cụ số"
            subtitle="Tăng tốc chuyển đổi số cho doanh nghiệp và cá nhân với thư viện tool đa dạng"
          />
          <p className="mt-6 text-base text-slate-600">
            NgocTay.io giúp bạn lựa chọn, triển khai và quản lý những giải pháp phù hợp nhất với nhu cầu thực tế.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <Button>Khám phá ngay</Button>
            <Button variant="secondary">Đăng ký tư vấn</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Tổng hợp tool hot
            </p>
            <p className="mt-4 text-lg text-slate-700">
              Hơn 50+ công cụ AI và SaaS được cập nhật liên tục, kèm hướng dẫn triển khai từng bước.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
