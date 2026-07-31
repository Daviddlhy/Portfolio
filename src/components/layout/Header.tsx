"use client";

import Link from "next/link";
import { ArrowDownToLine, Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="#accueil"
          aria-label={interfaceLabels.backHome}
          className="group inline-flex items-center gap-3 text-ink"
        >
          <span className="grid size-9 rotate-3 place-items-center rounded-full bg-ink font-mono text-[0.65rem] tracking-[0.08em] text-white transition-transform group-hover:-rotate-3">
            {profile.initials}
          </span>
          <span className="text-sm font-bold tracking-[-0.02em]">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          <nav
            aria-label={interfaceLabels.mainNavigation}
            className="flex items-center gap-7 text-[0.78rem] font-bold tracking-[0.02em] text-ink/65"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={profile.cv}
            download
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand"
          >
            {interfaceLabels.downloadCv}
            <ArrowDownToLine className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-ink/20 bg-paper text-ink lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label={interfaceLabels.mobileNavigation}
          className="absolute inset-x-0 top-full min-h-[calc(100dvh-5rem)] bg-brand px-5 py-8 text-white lg:hidden"
        >
          <div className="mx-auto flex max-w-[1380px] flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-5 border-b border-white/25 py-5 text-3xl font-semibold tracking-[-0.04em]"
              >
                <span className="font-mono text-[0.65rem] text-white/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <a
              href={profile.cv}
              download
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-bold text-ink"
            >
              {interfaceLabels.downloadCv}
              <ArrowDownToLine className="size-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
