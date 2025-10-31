import toolsPersonal from "../../data/tools-personal.json";
import { Grid } from "../../components/ui/Grid";
import { PageLayout } from "../../components/ui/PageLayout";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { ToolCard } from "../../components/ui/ToolCard";

const highlights = [
  {
    title: "Workflow cá nhân hóa",
    description: "Tạo checklist làm việc theo concept Discover - Build - Scale cho từng mục tiêu học tập và sự nghiệp.",
  },
  {
    title: "Tối ưu thời gian",
    description: "Tiết kiệm 8-10 giờ mỗi tuần với các công cụ tự động hóa nội dung, quản lý tài chính và lịch biểu.",
  },
  {
    title: "Xây dựng thương hiệu",
    description: "Tích hợp hệ thống xuất bản đa kênh và đo lường hiệu quả phát triển cộng đồng cá nhân.",
  },
];

export default function PersonalToolsPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Giải pháp cá nhân</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Thiết kế hệ sinh thái làm việc cho cá nhân sáng tạo
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Bộ công cụ cá nhân của NgocTay.io giúp bạn quản lý kiến thức, tối ưu quy trình làm việc và xây dựng thương hiệu cá nhân một cách bền vững.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle
            eyebrow="Tool stack cá nhân"
            title="Chọn bộ công cụ hỗ trợ từng mục tiêu"
            subtitle="Từ ghi chép, sản xuất nội dung tới quản lý tài chính cá nhân"
            align="left"
          />
          <Grid columns={3}>
            {toolsPersonal.map((tool) => (
              <ToolCard key={tool.slug} {...tool} slug={`/ca-nhan/${tool.slug}`} />
            ))}
          </Grid>
        </div>
      </section>
    </PageLayout>
  );
}
