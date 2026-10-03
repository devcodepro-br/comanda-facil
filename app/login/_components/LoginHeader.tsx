interface LoginHeaderProps {
  subtitle?: string;
}

export default function LoginHeader({
  subtitle = "Entre com seus dados para acessar sua conta",
}: LoginHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <h1 className="font-display text-heading font-semibold text-text-primary">
        Comanda<span className="text-brand-primary">Fácil</span>
      </h1>
      <p className="text-sm leading-5 text-text-secondary">{subtitle}</p>
    </header>
  );
}
