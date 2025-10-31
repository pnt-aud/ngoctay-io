import Link from "next/link";
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
          eyebrow="Tool stack gợi ý"
          title="Chọn bộ công cụ theo đúng concept tăng trưởng"
          subtitle="Mỗi danh mục được thiết kế theo lộ trình Discover - Build - Scale, giúp bạn triển khai nhanh nhưng vẫn bám sát chiến lược."
          align="left"
        />

        <div className="space-y-12">
          <div className="rounded-2xl border border-indigo-100 bg-surface p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Doanh nghiệp</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Bộ công cụ giúp đồng bộ marketing - sales - chăm sóc khách hàng, tối ưu chi phí và nâng cao trải nghiệm khách hàng.
                </p>
              </div>
              <Link href="/doanh-nghiep" className="text-sm font-medium text-indigo-600">
                Xem toàn bộ giải pháp →
              </Link>
            </div>
            <div className="mt-8">
              <Grid columns={3}>
                {toolsBusiness.slice(0, 3).map((tool) => (
                  <ToolCard key={tool.slug} {...tool} slug={`/doanh-nghiep/${tool.slug}`} />
                ))}
              </Grid>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-surface p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Cá nhân</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Lựa chọn cho freelancer, creator và nhà quản lý muốn nâng cao hiệu suất làm việc và xây dựng thương hiệu cá nhân.
                </p>
              </div>
              <Link href="/ca-nhan" className="text-sm font-medium text-indigo-600">
                Khám phá tất cả →
              </Link>
            </div>
            <div className="mt-8">
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
