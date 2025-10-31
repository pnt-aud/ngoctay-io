import { BlogPreview } from "../components/BlogPreview";
import { CTASection } from "../components/CTASection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
