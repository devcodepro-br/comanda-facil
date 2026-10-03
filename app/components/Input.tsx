import type { ComponentProps } from "react";
import { useId } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  label?: string;
  error?: string;
  labelHidden?: boolean;
}

const labelVisibility: Record<"visible" | "hidden", string> = {
  visible: "text-xs font-semibold text-text-secondary",
  hidden: "sr-only",
};

const fieldStates: Record<"default" | "error", string> = {
  default: "border-border-default",
  error: "border-status-danger-border ring-1 ring-status-danger-border",
};

export default function Input({
  label = "E-mail",
  error = "",
  labelHidden = false,
  placeholder = "Seu email completo...",
  className = "",
  id,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const hasError = error !== "";

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className={labelVisibility[labelHidden ? "hidden" : "visible"]}
      >
        {label}
      </label>
      <input
        id={inputId}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={`w-full rounded-md border bg-input px-3.5 py-3 text-sm leading-5 text-text-primary placeholder:text-text-tertiary transition-colors duration-150 focus:border-border-focus focus:ring-1 focus:ring-border-focus focus:outline-none disabled:border-border-subtle disabled:bg-surface disabled:opacity-70 ${fieldStates[hasError ? "error" : "default"]} ${className}`}
        {...rest}
      />
      {hasError ? (
        <p
          id={errorId}
          className="animate-enter text-xs leading-4 text-status-danger-text"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
