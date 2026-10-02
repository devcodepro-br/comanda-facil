import type { ReactNode } from "react";
import { useId } from "react";
import { LuX } from "react-icons/lu";

interface ModalContainerProps {
  title?: string;
  closeLabel?: string;
  onClose?: () => void;
  children?: ReactNode;
}

export default function ModalContainer({
  title = "Título do Modal",
  closeLabel = "Fechar",
  onClose,
  children,
}: ModalContainerProps) {
  const titleId = useId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="flex w-full flex-col gap-6 rounded-lg bg-surface-elevated p-8 shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id={titleId}
          className="flex-1 font-display text-xl font-semibold text-text-primary"
        >
          {title}
        </h2>
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-input text-text-secondary transition-colors duration-150 hover:bg-status-neutral-bg hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        >
          <LuX aria-hidden="true" className="size-4" />
        </button>
      </div>
      <div className="text-sm text-text-tertiary">
        {children ?? "Conteúdo do modal"}
      </div>
    </div>
  );
}
