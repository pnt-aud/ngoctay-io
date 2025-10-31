interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className = "",
  titleClassName = "",
}: SectionTitleProps) {
  const containerAlignment = align === "left" ? "text-left md:text-left" : "text-center";
  const headingClasses = [
    "text-2xl font-semibold text-slate-900 md:text-3xl",
    align === "left" ? "leading-tight" : "",
    titleClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${containerAlignment} ${className}`.trim()}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{eyebrow}</span>
      )}
      <h2 className={headingClasses}>{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-slate-600 md:text-base">{subtitle}</p>}
    </div>
  );
}
