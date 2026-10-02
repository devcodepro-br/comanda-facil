import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  LuClipboardList,
  LuLogOut,
  LuBox,
  LuTag,
  LuUsers,
} from "react-icons/lu";
import Button from "./Button";
import SidebarNavItem from "./SidebarNavItem";

interface SidebarItem {
  label: string;
  href: string;
  icon: IconType;
}

interface SidebarProps {
  userName?: string;
  items?: SidebarItem[];
  activeHref?: string;
  logoutLabel?: string;
  onLogout?: () => void;
  children?: ReactNode;
}

const defaultItems: SidebarItem[] = [
  { label: "Pedidos", href: "#pedidos", icon: LuClipboardList },
  { label: "Produtos", href: "#produtos", icon: LuBox },
  { label: "Configurações", href: "#configuracoes", icon: LuTag },
  { label: "Garçons", href: "#garcons", icon: LuUsers },
];

export default function Sidebar({
  userName = "Usuário",
  items = defaultItems,
  activeHref = "#pedidos",
  logoutLabel = "Sair",
  onLogout,
  children,
}: SidebarProps) {
  return (
    <aside className="flex h-full w-60 flex-col gap-7 border border-border-subtle bg-sidebar px-5 pt-7 pb-5">
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-base font-semibold text-text-primary">
          Comanda<span className="text-brand-primary">Fácil</span>
        </p>
        <p className="text-xs text-text-tertiary">Olá, {userName}</p>
      </div>

      <nav aria-label="Principal">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <SidebarNavItem
                label={item.label}
                href={item.href}
                icon={item.icon}
                active={item.href === activeHref}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-1 flex-col gap-3">{children}</div>

      <div className="flex flex-col gap-3 border-t border-border-subtle pt-3">
        <Button
          variant="ghost"
          label={logoutLabel}
          icon={<LuLogOut aria-hidden="true" className="size-5" />}
          onClick={onLogout}
          className="w-full justify-start"
        />
      </div>
    </aside>
  );
}
