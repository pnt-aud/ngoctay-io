interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-slate-600 md:text-base">{subtitle}</p>}
    </div>
  );
}
