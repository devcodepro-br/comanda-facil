import Link from "next/link";
import type { IconType } from "react-icons";
import { LuBox } from "react-icons/lu";

interface SidebarNavItemProps {
  label?: string;
  href?: string;
  icon?: IconType;
  active?: boolean;
}

const states: Record<"default" | "active", string> = {
  default:
    "text-text-secondary hover:bg-input hover:text-text-primary",
  active: "bg-brand-primary text-brand-on-primary hover:bg-brand-primary-hover",
};

export default function SidebarNavItem({
  label = "Pedidos",
  href = "#",
  icon: Icon = LuBox,
  active = false,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex w-full cursor-pointer items-center gap-2.5 rounded-md px-3.5 py-2.5 text-sm leading-5 font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${states[active ? "active" : "default"]}`}
    >
      <Icon aria-hidden="true" className="size-5 shrink-0" />
      {label}
    </Link>
  );
}
