"use client";

import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

interface AccordionHeaderProps {
  title?: string;
  itemCount?: number;
  defaultExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

const titleStates: Record<"expanded" | "collapsed", string> = {
  expanded: "font-semibold",
  collapsed: "font-medium",
};

export default function AccordionHeader({
  title = "Bebidas",
  itemCount = 3,
  defaultExpanded = true,
  onToggle,
}: AccordionHeaderProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const Chevron = expanded ? LuChevronDown : LuChevronRight;

  function handleClick() {
    const next = !expanded;
    setExpanded(next);
    onToggle?.(next);
  }

  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={handleClick}
      className="flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-md bg-input px-4 py-3 text-left text-sm text-text-primary transition-colors duration-150 hover:bg-status-neutral-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
    >
      <span
        className={`flex-1 ${titleStates[expanded ? "expanded" : "collapsed"]}`}
      >
        {title}
      </span>
      {expanded ? null : (
        <span className="text-xs text-text-secondary">({itemCount} itens)</span>
      )}
      <Chevron aria-hidden="true" className="size-4 text-text-secondary" />
    </button>
  );
}
