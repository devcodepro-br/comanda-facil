import type { ComponentProps } from "react";

interface CategoryCardProps extends ComponentProps<"button"> {
  name?: string;
  categoryId?: string;
}

export default function CategoryCard({
  name = "Bebidas",
  categoryId = "123012041-23912",
  type = "button",
  className = "",
  ...rest
}: CategoryCardProps) {
  return (
    <button
      type={type}
      className={`flex w-full cursor-pointer flex-col items-start gap-2 rounded-lg border border-border-subtle bg-surface px-5 py-4.5 text-left shadow-sm transition duration-150 hover:border-border-focus hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${className}`}
      {...rest}
    >
      <span className="text-base leading-6 font-extrabold text-text-primary">
        {name}
      </span>
      <span className="text-xs leading-4 text-text-tertiary">
        ID: {categoryId}
      </span>
    </button>
  );
}
