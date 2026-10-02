interface PageHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function PageHeader({
  title = "Pedidos em produção",
  subtitle = "Gerencie os pedidos da cozinha",
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-1.5">
      <h1 className="font-display text-xl leading-9 font-semibold text-text-primary">
        {title}
      </h1>
      <p className="text-sm leading-5 text-text-secondary">{subtitle}</p>
    </header>
  );
}
