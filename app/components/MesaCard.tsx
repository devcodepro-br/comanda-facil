import { LuX } from "react-icons/lu";

interface MesaCardProps {
  number?: string;
  label?: string;
  removeLabel?: string;
  onRemove?: () => void;
}

export default function MesaCard({
  number = "1",
  label = "Mesa 1",
  removeLabel = "Remover mesa",
  onRemove,
}: MesaCardProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-border-subtle bg-surface px-5 py-3">
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-bold text-text-primary">{number}</p>
        <p className="text-xs text-text-secondary">{label}</p>
      </div>
      <button
        type="button"
        aria-label={removeLabel}
        onClick={onRemove}
        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-text-secondary transition-colors duration-150 hover:bg-input hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
      >
        <LuX aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
