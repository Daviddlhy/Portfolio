"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { interfaceLabels, navigation, profile } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <Link
          href="#accueil"
          aria-label={interfaceLabels.backHome}
          className="group inline-flex items-center gap-3 font-semibold tracking-tight text-navy"
        >
          <span className="grid size-10 place-items-center bg-navy font-mono text-xs tracking-[0.12em] text-white transition-colors group-hover:bg-brand">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav
          aria-label={interfaceLabels.mainNavigation}
          className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-offset-8 transition-colors hover:text-brand hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={
            menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-11 place-items-center border border-slate-300 bg-white text-navy lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label={interfaceLabels.mobileNavigation}
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-5 py-4 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 px-2 py-4 font-medium text-slate-800 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
