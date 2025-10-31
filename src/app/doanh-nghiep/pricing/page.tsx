import { PricingTable } from "../../../components/PricingTable";
import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

export default function BusinessPricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PricingTable />
      </main>
      <Footer />
    </div>
  );
}
