interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

export default function EmptyState({
  title = "Nenhum item encontrado",
  subtitle = "Adicione novos itens para começar.",
}: EmptyStateProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
      <div
        aria-hidden="true"
        className="size-16 rounded-full border border-border-default bg-status-neutral-bg"
      />
      <div className="flex flex-col items-center gap-2">
        <p className="text-base font-medium text-text-primary">{title}</p>
        <p className="text-sm text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
}
