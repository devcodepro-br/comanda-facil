import Badge from "../components/Badge";
import Button from "../components/Button";

interface PricingCardProps {
  name?: string;
  description?: string;
  price?: string;
  period?: string;
  features?: string[];
  // Itens que o plano não inclui (mostrados esmaecidos, com ✗)
  excluded?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  highlighted?: boolean;
}

const cardVariants = {
  default: "border border-border-default shadow-sm",
  highlighted: "border-2 border-brand-primary shadow-lg",
};

export default function PricingCard({
  name = "Plano",
  description = "",
  price = "R$ 0",
  period = "/ mês",
  features = [],
  excluded = [],
  ctaLabel = "Assinar",
  ctaHref = "/cadastro",
  highlighted = false,
}: PricingCardProps) {
  const variant = highlighted ? "highlighted" : "default";

  return (
    <article
      className={`flex flex-col gap-6 rounded-xl bg-surface p-6 sm:p-10 ${cardVariants[variant]}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-2xl font-bold text-text-primary">
            {name}
          </h3>
          {highlighted && <Badge label="RECOMENDADO" tone="warning" />}
        </div>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      <p className="flex items-baseline gap-1">
        <span
          className={`font-display text-5xl font-bold ${highlighted ? "text-brand-primary" : "text-text-primary"}`}
        >
          {price}
        </span>
        <span
          className={`text-sm ${highlighted ? "text-text-secondary" : "text-text-tertiary"}`}
        >
          {period}
        </span>
      </p>
      <hr className="border-border-subtle" />
      <ul className="flex flex-1 flex-col gap-3 text-sm">
        {features.map((item) => (
          <li key={item} className="text-text-secondary">
            ✓ {item}
          </li>
        ))}
        {excluded.map((item) => (
          <li key={item} className="text-text-tertiary">
            ✗ {item}
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? "primary" : "secondary"}
        label={ctaLabel}
        href={ctaHref}
        className="w-full"
      />
    </article>
  );
}
