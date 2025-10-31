import { SectionTitle } from "./ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "Diagnostic Sprint",
    description:
      "Phỏng vấn stakeholder, thu thập dữ liệu hiện trạng và xác định các vấn đề cản trở tăng trưởng trong 2 tuần đầu tiên.",
    deliverable: "Bản đồ cơ hội & đề xuất ưu tiên",
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "Thiết kế kiến trúc công cụ, quy trình vận hành mới và chuẩn hóa các chỉ số đánh giá kết quả.",
    deliverable: "Blueprint hệ thống & KPI",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Thiết lập công cụ, cấu hình automation, đào tạo người dùng đầu tiên và triển khai thử nghiệm có kiểm soát.",
    deliverable: "Bộ kit triển khai & hướng dẫn chi tiết",
  },
  {
    step: "04",
    title: "Scale & Coaching",
    description:
      "Theo dõi chỉ số adoption, tinh chỉnh chiến dịch và chuyển giao hoàn toàn cho đội ngũ nội bộ.",
    deliverable: "Dashboard vận hành & kế hoạch mở rộng",
  },
];

export function WorkflowSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle
          eyebrow="Lộ trình triển khai"
          title="Cấu trúc dự án mẫu trong concept mới"
          subtitle="Áp dụng được cho doanh nghiệp vừa và nhỏ lẫn đội nhóm cá nhân"
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              <div className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">Deliverable:</span> {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
