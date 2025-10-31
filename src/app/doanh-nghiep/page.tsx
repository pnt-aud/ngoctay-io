import Link from "next/link";
import toolsBusiness from "../../data/tools-business.json";
import { Footer } from "../../components/ui/Footer";
import { Grid } from "../../components/ui/Grid";
import { Navbar } from "../../components/ui/Navbar";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { ToolCard } from "../../components/ui/ToolCard";

export default function BusinessToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle
            title="Công cụ cho doanh nghiệp"
            subtitle="Tối ưu hiệu suất, tự động hóa quy trình và gia tăng doanh thu"
          />
          <Grid columns={3}>
            {toolsBusiness.map((tool) => (
              <ToolCard key={tool.slug} {...tool} slug={`/doanh-nghiep/${tool.slug}`} />
            ))}
          </Grid>
          <div className="text-center text-sm text-slate-600">
            Tìm gói dịch vụ phù hợp? <Link className="text-blue-600" href="/doanh-nghiep/pricing">Xem bảng giá</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
