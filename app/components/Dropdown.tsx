import type { ComponentProps } from "react";
import { useId } from "react";
import { LuChevronDown } from "react-icons/lu";

interface DropdownProps extends ComponentProps<"select"> {
  label?: string;
  placeholder?: string;
  options?: string[];
  labelHidden?: boolean;
}

const labelVisibility: Record<"visible" | "hidden", string> = {
  visible: "text-xs font-semibold text-text-secondary",
  hidden: "sr-only",
};

const defaultOptions = ["Bebidas", "Pizzas", "Sobremesas"];

export default function Dropdown({
  label = "Categoria",
  placeholder = "Selecionar...",
  options = defaultOptions,
  labelHidden = false,
  className = "",
  id,
  ...rest
}: DropdownProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={selectId}
        className={labelVisibility[labelHidden ? "hidden" : "visible"]}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          defaultValue=""
          className={`h-11 w-full cursor-pointer appearance-none rounded-md border border-border-subtle bg-surface px-4 text-sm text-text-primary transition-colors duration-150 hover:border-border-default focus-visible:border-border-focus focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <LuChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-text-secondary"
        />
      </div>
    </div>
  );
}
