import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "lg" | "md" | "sm";
  icon?: ReactNode;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-primary text-brand-on-primary enabled:hover:bg-brand-primary-hover enabled:active:bg-brand-primary-active disabled:bg-status-neutral-bg disabled:text-text-tertiary",
  secondary:
    "border border-border-default bg-surface-elevated text-text-primary enabled:hover:border-border-focus enabled:hover:text-text-brand disabled:border-border-subtle disabled:bg-surface disabled:text-text-tertiary",
  ghost:
    "text-text-primary enabled:hover:bg-input disabled:text-text-tertiary",
  danger:
    "bg-action-danger text-brand-on-primary enabled:hover:bg-action-danger-hover disabled:bg-status-neutral-bg disabled:text-text-tertiary",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  lg: "px-6 py-3.5 text-lg leading-7",
  md: "px-5 py-3 text-sm leading-5",
  sm: "px-3.5 py-2 text-xs leading-5",
};

export default function Button({
  label = "Botão",
  variant = "primary",
  size = "md",
  icon,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-bold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
}
