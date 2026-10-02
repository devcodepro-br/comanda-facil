"use client";

import { useState } from "react";

interface ToggleProps {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const trackStates: Record<"on" | "off", string> = {
  on: "bg-green-400",
  off: "bg-icon-muted",
};

const knobStates: Record<"on" | "off", string> = {
  on: "translate-x-4.5",
  off: "translate-x-0",
};

export default function Toggle({
  label = "Disponível",
  defaultChecked = true,
  disabled = false,
  onChange,
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);
  const state = checked ? "on" : "off";

  function handleClick() {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={handleClick}
      className={`inline-flex h-5.5 w-10 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-70 ${trackStates[state]}`}
    >
      <span
        aria-hidden="true"
        className={`size-4.5 rounded-full bg-white shadow-sm transition-transform duration-150 ${knobStates[state]}`}
      />
    </button>
  );
}
