import type { ComponentProps } from "react";

interface FilterTabProps extends ComponentProps<"button"> {
  label?: string;
  active?: boolean;
  size?: "sm" | "lg";
}

const sizes: Record<NonNullable<FilterTabProps["size"]>, string> = {
  sm: "px-4 py-2.25 text-xs leading-4.5 font-semibold",
  lg: "px-4 py-4 text-sm leading-5 font-bold",
};

const states: Record<"default" | "active", string> = {
  default:
    "border border-border-default text-text-secondary hover:bg-input hover:text-text-primary",
  active:
    "bg-brand-primary text-brand-on-primary hover:bg-brand-primary-hover",
};

export default function FilterTab({
  label = "Todos",
  active = false,
  size = "sm",
  type = "button",
  className = "",
  ...rest
}: FilterTabProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${sizes[size]} ${states[active ? "active" : "default"]} ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}
