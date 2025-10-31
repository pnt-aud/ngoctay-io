import toolsBusiness from "../data/tools-business.json";
import toolsPersonal from "../data/tools-personal.json";
import { Grid } from "./ui/Grid";
import { SectionTitle } from "./ui/SectionTitle";
import { ToolCard } from "./ui/ToolCard";

export function FeatureSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle
          title="Danh mục công cụ"
          subtitle="Cập nhật công cụ nổi bật dành cho doanh nghiệp và cá nhân"
        />

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Doanh nghiệp</h3>
            <p className="mt-2 text-sm text-slate-600">
              Tối ưu vận hành, marketing và chăm sóc khách hàng cho doanh nghiệp của bạn.
            </p>
            <div className="mt-6">
              <Grid columns={3}>
                {toolsBusiness.slice(0, 3).map((tool) => (
                  <ToolCard key={tool.slug} {...tool} slug={`/doanh-nghiep/${tool.slug}`} />
                ))}
              </Grid>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Cá nhân</h3>
            <p className="mt-2 text-sm text-slate-600">
              Nâng cao hiệu suất làm việc và sáng tạo nội dung với các tool cá nhân hóa.
            </p>
            <div className="mt-6">
              <Grid columns={3}>
                {toolsPersonal.slice(0, 3).map((tool) => (
                  <ToolCard key={tool.slug} {...tool} slug={`/ca-nhan/${tool.slug}`} />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
