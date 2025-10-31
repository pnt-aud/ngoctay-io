import { Button } from "./ui/Button";

const highlights = [
  {
    title: "Khảo sát nhu cầu 360°",
    description: "Đánh giá độ trưởng thành số của đội ngũ, quy trình và công cụ hiện tại trước khi lựa chọn giải pháp.",
  },
  {
    title: "Triển khai theo sprint",
    description: "Ưu tiên các kịch bản có tác động nhanh, đồng bộ KPI giữa marketing, vận hành và chăm sóc khách hàng.",
  },
  {
    title: "Hệ thống dữ liệu hợp nhất",
    description: "Chuẩn hóa luồng dữ liệu từ nhiều nền tảng để ra quyết định theo thời gian thực.",
  },
  {
    title: "Đào tạo và chuyển giao",
    description: "Xây dựng trung tâm kiến thức nội bộ, đảm bảo đội ngũ tự vận hành sau khi bàn giao.",
  },
];

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              NgocTay OS 2024
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Đồng bộ chiến lược, công cụ và đội ngũ trên một nền tảng
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              NgocTay.io mang đến concept vận hành mới: kết hợp tư vấn chiến lược, thư viện công cụ và kho tài nguyên đào tạo để bạn chuyển đổi số bài bản và đo lường được tác động.
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button className="px-5">Khởi động dự án</Button>
              <Button variant="secondary" className="px-5">
                Xem lộ trình mẫu
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-white p-10 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Concept hành trình</h3>
            <p className="mt-4 text-lg font-semibold text-slate-900">
              Ba trụ cột cho tăng trưởng bền vững
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">Discover.</span> Chuẩn hóa insight khách hàng, vẽ lại chân dung hành trình và xác định ưu tiên chuyển đổi số.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Build.</span> Lắp ghép hệ sinh thái công cụ phù hợp, tự động hóa quy trình cốt lõi và thiết lập dashboard điều hành.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Scale.</span> Huấn luyện đội ngũ, tinh chỉnh chiến dịch và nhân rộng thành công sang các phòng ban khác.
              </div>
            </div>
            <div className="mt-10 rounded-xl border border-slate-300 bg-indigo-50 p-6 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Kết quả bạn nhận được</p>
              <p className="mt-2">Roadmap 90 ngày, bộ chỉ số theo dõi và bộ kit triển khai chi tiết cho từng phòng ban.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
