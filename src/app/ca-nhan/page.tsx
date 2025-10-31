import toolsPersonal from "../../data/tools-personal.json";
import { Footer } from "../../components/ui/Footer";
import { Grid } from "../../components/ui/Grid";
import { Navbar } from "../../components/ui/Navbar";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { ToolCard } from "../../components/ui/ToolCard";

export default function PersonalToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionTitle
            title="Công cụ cho cá nhân"
            subtitle="Hỗ trợ sáng tạo, quản lý tài chính và phát triển kỹ năng"
          />
          <Grid columns={3}>
            {toolsPersonal.map((tool) => (
              <ToolCard key={tool.slug} {...tool} slug={`/ca-nhan/${tool.slug}`} />
            ))}
          </Grid>
        </div>
      </main>
      <Footer />
    </div>
  );
}
