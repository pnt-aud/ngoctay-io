import Link from "next/link";
import toolsBusiness from "../../data/tools-business.json";
import { Grid } from "../../components/ui/Grid";
import { PageLayout } from "../../components/ui/PageLayout";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { ToolCard } from "../../components/ui/ToolCard";

const stats = [
  {
    value: "30%",
    label: "Tăng trưởng khách hàng tiềm năng",
    description: "sau 3 tháng tối ưu phễu marketing & sales",
  },
  {
    value: "2 tuần",
    label: "Triển khai sprint đầu tiên",
    description: "bắt đầu tự động hóa chăm sóc khách hàng",
  },
  {
    value: "100%",
    label: "Đội ngũ được đào tạo",
    description: "tiếp nhận tài liệu & workshop chuyển giao",
  },
];

export default function BusinessToolsPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Giải pháp doanh nghiệp</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Thiết kế vận hành doanh nghiệp theo concept Discover - Build - Scale
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Lập kế hoạch chuyển đổi số, lựa chọn bộ công cụ phù hợp và triển khai từng sprint có thể đo lường. NgocTay.io đồng hành cùng bạn từ tư vấn chiến lược đến đào tạo đội ngũ.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
          <Link href="/doanh-nghiep/pricing" className="text-sm font-medium text-indigo-600">
            Xem bảng giá concept doanh nghiệp →
          </Link>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle
            eyebrow="Tool stack doanh nghiệp"
            title="Lựa chọn công cụ phù hợp từng giai đoạn"
            subtitle="Kết hợp CRM, automation, quản trị nội dung và chăm sóc khách hàng"
            align="left"
          />
          <Grid columns={3}>
            {toolsBusiness.map((tool) => (
              <ToolCard key={tool.slug} {...tool} slug={`/doanh-nghiep/${tool.slug}`} />
            ))}
          </Grid>
        </div>
      </section>
    </PageLayout>
  );
}
