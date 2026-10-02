interface BadgeProps {
  label?: string;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
}

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral:
    "border-status-neutral-border bg-status-neutral-bg text-status-neutral-text",
  success:
    "border-status-success-border bg-status-success-bg text-status-success-text",
  warning:
    "border-status-warning-border bg-status-warning-bg text-status-warning-text",
  danger:
    "border-status-danger-border bg-status-danger-bg text-status-danger-text",
  info: "border-status-info-border bg-status-info-bg text-status-info-text",
};

export default function Badge({
  label = "Em produção",
  tone = "neutral",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-2 py-1 text-xs leading-4 font-semibold tracking-wide ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
