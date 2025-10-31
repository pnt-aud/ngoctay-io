import pricing from "../data/pricing.json";
import { Button } from "./ui/Button";
import { Grid } from "./ui/Grid";
import { SectionTitle } from "./ui/SectionTitle";

export function PricingTable() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle title="Gói dịch vụ" subtitle="Chọn giải pháp phù hợp với giai đoạn phát triển của bạn" />
        <Grid columns={3}>
          {pricing.map((plan) => (
            <div key={plan.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{plan.category}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {plan.features.map((feature: string) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button className="mt-auto">Chọn gói</Button>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
