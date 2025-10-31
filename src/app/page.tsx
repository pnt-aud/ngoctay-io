import { BlogPreview } from "../components/BlogPreview";
import { CTASection } from "../components/CTASection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSection } from "../components/HeroSection";
import { ValuePropositionSection } from "../components/ValuePropositionSection";
import { WorkflowSection } from "../components/WorkflowSection";
import { PageLayout } from "../components/ui/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ValuePropositionSection />
      <FeatureSection />
      <WorkflowSection />
      <BlogPreview />
      <CTASection />
    </PageLayout>
  );
}
