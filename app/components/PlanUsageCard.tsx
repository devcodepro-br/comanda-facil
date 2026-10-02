import { LuPackage } from "react-icons/lu";

interface PlanUsageCardProps {
  planName?: string;
  remaining?: number;
  total?: number;
}

// Largura do preenchimento em doze avos, para não precisar de valor solto
const fills = [
  "w-0",
  "w-1/12",
  "w-2/12",
  "w-3/12",
  "w-4/12",
  "w-5/12",
  "w-6/12",
  "w-7/12",
  "w-8/12",
  "w-9/12",
  "w-10/12",
  "w-11/12",
  "w-full",
];

export default function PlanUsageCard({
  planName = "Plano Gratuito",
  remaining = 17,
  total = 30,
}: PlanUsageCardProps) {
  const ratio = total > 0 ? Math.min(Math.max(remaining / total, 0), 1) : 0;
  const fill = fills[Math.round(ratio * 12)];

  return (
    <div className="flex w-full flex-col gap-2.5 rounded-md border border-border-subtle bg-input p-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
        <LuPackage aria-hidden="true" className="size-4" />
        {planName}
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-text-tertiary">
          {remaining} de {total} pedidos restantes
        </p>
        <div
          role="progressbar"
          aria-label="Pedidos restantes"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={remaining}
          className="h-1 w-full overflow-hidden rounded-full bg-border-default"
        >
          <div className={`h-full rounded-full bg-brand-primary ${fill}`} />
        </div>
      </div>
    </div>
  );
}
