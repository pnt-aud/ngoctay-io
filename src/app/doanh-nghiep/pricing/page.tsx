import { PricingTable } from "../../../components/PricingTable";
import { PageLayout } from "../../../components/ui/PageLayout";

export default function BusinessPricingPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Bảng giá</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Chọn gói dịch vụ phù hợp với concept doanh nghiệp của bạn
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Các gói đều bao gồm tư vấn concept, triển khai công cụ cốt lõi và đào tạo đội ngũ. Tùy chỉnh linh hoạt theo từng sprint.
          </p>
        </div>
      </section>
      <PricingTable />
    </PageLayout>
  );
}
