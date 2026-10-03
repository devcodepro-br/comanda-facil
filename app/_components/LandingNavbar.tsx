"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import BrandName from "./BrandName";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const linkClasses =
  "cursor-pointer text-sm font-semibold text-text-secondary transition-colors duration-150 hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus";

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-border-subtle bg-canvas">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-20 lg:py-6"
      >
        <Link
          href="/"
          aria-label="ComandaFácil, página inicial"
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        >
          <BrandName />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClasses}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 sm:flex">
          <Button variant="secondary" label="Entrar" href="/login" />
          <Button label="Comece Agora" href="/cadastro" />
        </div>

        <IconButton
          icon={open ? LuX : LuMenu}
          label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden"
        />
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="flex animate-enter flex-col gap-4 border-t border-border-subtle bg-canvas px-4 py-4 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block ${linkClasses}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:hidden">
            <Button variant="secondary" label="Entrar" href="/login" />
            <Button label="Comece Agora" href="/cadastro" />
          </div>
        </div>
      )}
    </header>
  );
}
