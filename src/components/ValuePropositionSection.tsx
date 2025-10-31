import { SectionTitle } from "./ui/SectionTitle";

const pillars = [
  {
    label: "Concept",
    title: "Blueprint chiến lược rõ ràng",
    description:
      "Định hình mô hình vận hành đích đến, xác định các chỉ số then chốt và hệ thống báo cáo cần thiết cho từng giai đoạn.",
    outcome: "Bản đồ năng lực & danh sách ưu tiên sprint",
  },
  {
    label: "Enablement",
    title: "Tích hợp công cụ theo mô-đun",
    description:
      "Lựa chọn và kết nối các nền tảng marketing, bán hàng, chăm sóc khách hàng với quy trình hiện hữu của bạn.",
    outcome: "Checklist triển khai & playbook sử dụng",
  },
  {
    label: "Adoption",
    title: "Huấn luyện đội ngũ vận hành",
    description:
      "Thiết kế chương trình đào tạo nội bộ, đo lường mức độ sẵn sàng và kích hoạt cộng đồng người dùng nội bộ.",
    outcome: "Bộ chỉ số adoption & tài liệu đào tạo",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle
          eyebrow="Concept mới"
          title="Ba trụ cột tạo nên hệ điều hành tăng trưởng của NgocTay.io"
          subtitle="Giúp bạn nhìn rõ hiện trạng, triển khai tập trung và đảm bảo đội ngũ vận hành được lâu dài"
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col rounded-2xl border border-indigo-100 bg-surface p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{pillar.label}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
              <div className="mt-4 rounded-md bg-indigo-50 px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Deliverable:</span> {pillar.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
