import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="text-3xl font-semibold">Sẵn sàng chuyển đổi với NgocTay.io?</h2>
        <p className="text-base text-blue-100">
          Liên hệ ngay để được tư vấn lộ trình triển khai công cụ số phù hợp với chiến lược của bạn.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Đặt lịch demo</Button>
          <Button variant="secondary" className="border-white text-white hover:bg-blue-500">
            Tải brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
