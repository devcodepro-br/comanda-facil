import type { ComponentProps } from "react";

interface FilterTabProps extends ComponentProps<"button"> {
  label?: string;
  active?: boolean;
}

const states: Record<"default" | "active", string> = {
  default:
    "border border-border-default text-text-secondary hover:bg-input hover:text-text-primary",
  active:
    "bg-brand-primary text-brand-on-primary hover:bg-brand-primary-hover",
};

export default function FilterTab({
  label = "Todos",
  active = false,
  type = "button",
  className = "",
  ...rest
}: FilterTabProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-2.25 text-xs leading-4.5 font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${states[active ? "active" : "default"]} ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}
