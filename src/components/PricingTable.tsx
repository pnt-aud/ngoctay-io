import pricing from "../data/pricing.json";
import { Button } from "./ui/Button";
import { Grid } from "./ui/Grid";
import { SectionTitle } from "./ui/SectionTitle";

export function PricingTable() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionTitle
          eyebrow="Gói dịch vụ"
          title="Đồng bộ concept với quy mô doanh nghiệp"
          subtitle="Mỗi gói bao gồm tư vấn concept, triển khai công cụ và đào tạo đội ngũ theo sprint"
          align="left"
        />
        <Grid columns={3}>
          {pricing.map((plan) => (
            <div key={plan.name} className="flex flex-col rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{plan.category}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {plan.features.map((feature: string) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button className="mt-6 px-5">Đăng ký tư vấn</Button>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
