import type { ComponentProps } from "react";
import { LuStar } from "react-icons/lu";

interface UpgradeCardProps extends Pick<ComponentProps<"button">, "onClick"> {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

export default function UpgradeCard({
  title = "Desbloqueie tudo!",
  description = "Pedidos ilimitados e acesso a todos os recursos.",
  ctaLabel = "Seja Premium",
  onClick,
}: UpgradeCardProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-status-warning-border bg-status-warning-bg p-3">
      <p className="flex items-center gap-1.5 text-xs font-bold text-status-warning-text">
        <LuStar aria-hidden="true" className="size-3.5" />
        {title}
      </p>
      <p className="text-xs leading-4 text-status-warning-text">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className="w-full cursor-pointer rounded-sm bg-accent-amber py-1.5 text-xs font-semibold text-text-primary transition-colors duration-150 hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
