import Badge from "./Badge";
import Button from "./Button";

interface OrderCardProps {
  tableName?: string;
  statusLabel?: string;
  statusTone?: "neutral" | "success" | "warning" | "danger" | "info";
  itemCount?: number;
  itemsSummary?: string;
  total?: string;
  detailsLabel?: string;
  onDetails?: () => void;
}

export default function OrderCard({
  tableName = "Mesa 56",
  statusLabel = "Em produção",
  statusTone = "neutral",
  itemCount = 1,
  itemsSummary = "1x Coca-Cola Lata",
  total = "R$ 6,00",
  detailsLabel = "Detalhes",
  onDetails,
}: OrderCardProps) {
  return (
    <article className="flex w-full flex-col gap-4 rounded-lg border border-border-subtle bg-surface p-5 shadow-sm transition duration-150 hover:border-border-focus hover:shadow-md">
      <div className="flex items-center gap-2">
        <h3 className="flex-1 text-base leading-6 font-extrabold text-text-primary">
          {tableName}
        </h3>
        <Badge label={statusLabel} tone={statusTone} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs leading-4 text-text-tertiary">
          Itens: {itemCount}
        </p>
        <p className="text-sm leading-5 text-text-secondary">{itemsSummary}</p>
      </div>
      <hr className="border-border-subtle" />
      <div className="flex items-center gap-2">
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="text-xs leading-4 text-text-tertiary">Total</span>
          <span className="text-base leading-6 font-extrabold text-text-brand">
            {total}
          </span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          label={detailsLabel}
          onClick={onDetails}
        />
      </div>
    </article>
  );
}
