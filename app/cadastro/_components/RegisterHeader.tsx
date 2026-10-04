interface RegisterHeaderProps {
  subtitle?: string;
}

export default function RegisterHeader({
  subtitle = "Crie a sua conta e configure seu estabelecimento em poucos minutos.",
}: RegisterHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <h1 className="font-display text-heading font-bold text-text-primary">
        Comanda<span className="text-brand-primary">Fácil</span>
      </h1>
      <p className="text-sm text-text-secondary">{subtitle}</p>
    </header>
  );
}
