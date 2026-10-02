import type { ComponentProps } from "react";
import type { IconType } from "react-icons";
import { LuPencil } from "react-icons/lu";

interface IconButtonProps extends ComponentProps<"button"> {
  icon?: IconType;
  label?: string;
  tone?: "default" | "danger";
}

const tones: Record<NonNullable<IconButtonProps["tone"]>, string> = {
  default:
    "text-icon-default enabled:hover:bg-input enabled:hover:text-text-primary",
  danger:
    "text-icon-default enabled:hover:bg-status-danger-bg enabled:hover:text-status-danger-text",
};

export default function IconButton({
  icon: Icon = LuPencil,
  label = "Editar",
  tone = "default",
  type = "button",
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={`inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-70 ${tones[tone]} ${className}`}
      {...rest}
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}
