import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Biến concept thành dự án chuyển đổi số thực tế</h2>
        <p className="text-base text-indigo-50 leading-relaxed">
          Đặt lịch workshop với chuyên gia NgocTay.io để cùng xây dựng roadmap 90 ngày, xác định KPI và chọn bộ công cụ phù hợp nhất với chiến lược của bạn.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <Button className="px-5 text-sm font-semibold">Đặt lịch workshop</Button>
          <Button variant="secondary" className="border-white bg-transparent text-white hover:bg-indigo-500">
            Tải playbook concept
          </Button>
        </div>
      </div>
    </section>
  );
}
