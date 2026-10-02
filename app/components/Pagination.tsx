"use client";

import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  totalPages?: number;
  defaultPage?: number;
  previousLabel?: string;
  nextLabel?: string;
  onPageChange?: (page: number) => void;
}

const pageStates: Record<"default" | "active", string> = {
  default:
    "border border-border-default font-semibold text-text-secondary hover:bg-input hover:text-text-primary",
  active:
    "bg-brand-primary font-bold text-brand-on-primary hover:bg-brand-primary-hover",
};

const buttonBase =
  "inline-flex min-h-8.5 min-w-8.5 cursor-pointer items-center justify-center rounded-full text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-70";

export default function Pagination({
  totalPages = 3,
  defaultPage = 1,
  previousLabel = "Página anterior",
  nextLabel = "Próxima página",
  onPageChange,
}: PaginationProps) {
  const [page, setPage] = useState(defaultPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  function goTo(next: number) {
    setPage(next);
    onPageChange?.(next);
  }

  return (
    <nav aria-label="Paginação" className="flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label={previousLabel}
        disabled={page <= 1}
        onClick={() => goTo(page - 1)}
        className={`${buttonBase} px-3 py-2 ${pageStates.default}`}
      >
        <LuChevronLeft aria-hidden="true" className="size-4" />
      </button>
      <ul className="flex items-center gap-1.5">
        {pages.map((number) => (
          <li key={number}>
            <button
              type="button"
              aria-current={number === page ? "page" : undefined}
              onClick={() => goTo(number)}
              className={`${buttonBase} px-2.5 py-2 ${pageStates[number === page ? "active" : "default"]}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label={nextLabel}
        disabled={page >= totalPages}
        onClick={() => goTo(page + 1)}
        className={`${buttonBase} px-3 py-2 ${pageStates.default}`}
      >
        <LuChevronRight aria-hidden="true" className="size-4" />
      </button>
    </nav>
  );
}
