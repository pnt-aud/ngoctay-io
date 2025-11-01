import clsx from "clsx";
import Image from "next/image";

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
    ctaHost = url.hostname.replace(/^www\./, "");
  } catch (error) {
    ctaHost = "";
  }

  return (
    <article className={clsx("tool-card", className)}>
      <div className="tool-card__icon" aria-hidden>
        <Image src={icon} alt="" width={56} height={56} />
      </div>
      <div className="tool-card__body">
        <header className="tool-card__header">
          <h3 className="tool-card__title">{name}</h3>
          <p className="tool-card__description">{short_description}</p>
        </header>
        <ul className="tool-card__tags" aria-label="Từ khóa liên quan">
          {tags.map((tag) => (
            <li key={tag} className="tool-card__tag">
              <span className="chip chip--subtle">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="tool-card__meta">
        <span className="tool-card__cta">{ctaHost ? `Truy cập: ${ctaHost}` : "Xem chi tiết"}</span>
        <span className="tool-card__arrow" aria-hidden>
          →
        </span>
      </div>
    </article>
  );
}
