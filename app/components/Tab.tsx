import type { ComponentProps } from "react";

interface TabProps extends ComponentProps<"button"> {
  label?: string;
  active?: boolean;
}

const labelStates: Record<"default" | "active", string> = {
  default: "font-medium text-text-secondary group-hover:text-text-primary",
  active: "font-semibold text-brand-primary",
};

const lineStates: Record<"default" | "active", string> = {
  default: "bg-border-subtle group-hover:bg-border-default",
  active: "bg-brand-primary",
};

export default function Tab({
  label = "Tab",
  active = false,
  type = "button",
  className = "",
  ...rest
}: TabProps) {
  const state = active ? "active" : "default";

  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      className={`group flex min-w-20 cursor-pointer flex-col items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${className}`}
      {...rest}
    >
      <span className={`transition-colors duration-150 ${labelStates[state]}`}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`h-0.5 w-full rounded-full transition-colors duration-150 ${lineStates[state]}`}
      />
    </button>
  );
}
