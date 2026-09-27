"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/om", label: "Om" },
  { href: "/priser", label: "Priser" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg tracking-wide">Vipp &amp; Vapp</span>
        </Link>

        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label="Åpne meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/20 px-6 py-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm tracking-wide ${
                pathname === link.href ? "text-gold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
