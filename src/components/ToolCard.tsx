import Image from "next/image";
import clsx from "clsx";

type ToolCardProps = {
  name: string;
  short_description: string;
  icon: string;
  cta_url: string;
  tags: string[];
  className?: string;
};

export function ToolCard({ name, short_description, icon, cta_url, tags, className }: ToolCardProps) {
  let ctaHost = "";
  try {
    const url = new URL(cta_url);
    ctaHost = url.hostname.replace("www.", "");
  } catch (error) {
    ctaHost = "";
  }

  return (
    <article className={clsx("tool-card", className)}>
      <div className="tool-card__icon">
        <Image src={icon} alt="" width={56} height={56} />
      </div>
      <div className="tool-card__content">
        <div>
          <h3 className="tool-card__title">{name}</h3>
          <p className="tool-card__description">{short_description}</p>
        </div>
        <div className="tool-card__tags" aria-label="Từ khóa liên quan">
          {tags.map((tag) => (
            <span key={tag} className="chip chip--subtle">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="tool-card__footer">
        <span className="tool-card__cta">
          {ctaHost ? `Truy cập: ${ctaHost}` : "Khám phá ngay"}
        </span>
        <span className="tool-card__arrow" aria-hidden>
          →
        </span>
      </div>
    </article>
  );
}
