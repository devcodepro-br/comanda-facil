interface BrandNameProps {
  className?: string;
}

export default function BrandName({
  className = "text-2xl",
}: BrandNameProps) {
  return (
    <span className={`font-display font-bold ${className}`}>
      <span className="text-text-primary">Comanda</span>
      <span className="text-brand-primary">Fácil</span>
    </span>
  );
}
