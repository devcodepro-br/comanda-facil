import Badge from "../components/Badge";

interface SectionHeaderProps {
  badge?: string;
  title?: string;
  description?: string;
}

export default function SectionHeader({
  badge = "",
  title = "",
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Badge label={badge} tone="neutral" />
      <h2 className="font-display text-heading font-bold text-text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-170 text-base text-text-secondary">{description}</p>
      )}
    </div>
  );
}
