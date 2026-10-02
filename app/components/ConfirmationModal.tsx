import { useId } from "react";
import { LuTriangleAlert } from "react-icons/lu";
import Button from "./Button";

interface ConfirmationModalProps {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function ConfirmationModal({
  title = "Excluir Produto?",
  description = "Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.",
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="flex w-full flex-col items-center gap-6 rounded-lg bg-surface-elevated p-8 shadow-md"
    >
      <div className="flex size-14 items-center justify-center rounded-full border border-status-danger-border bg-status-danger-bg text-status-danger-text">
        <LuTriangleAlert aria-hidden="true" className="size-6" />
      </div>
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <h2
          id={titleId}
          className="font-display text-2xl font-semibold text-text-primary"
        >
          {title}
        </h2>
        <p
          id={descriptionId}
          className="text-sm leading-5 text-text-secondary"
        >
          {description}
        </p>
      </div>
      <div className="flex w-full gap-3">
        <Button
          variant="secondary"
          label={cancelLabel}
          onClick={onCancel}
          className="flex-1"
        />
        <Button label={confirmLabel} onClick={onConfirm} className="flex-1" />
      </div>
    </div>
  );
}
