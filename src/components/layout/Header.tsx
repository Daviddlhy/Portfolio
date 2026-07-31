"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/94 backdrop-blur-lg">
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <Link href="#accueil" aria-label={interfaceLabels.backHome} className="flex items-baseline gap-3 text-ink">
          <span className="font-serif text-xl italic">DD</span>
          <span className="hidden text-xs tracking-[0.08em] uppercase sm:inline">{profile.title}</span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          <nav aria-label={interfaceLabels.mainNavigation} className="flex items-center gap-5 text-[0.7rem] tracking-[0.08em] text-ink/60 uppercase">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={profile.cv} download className="inline-flex items-center gap-2 border-l border-ink/20 pl-6 text-[0.7rem] tracking-[0.08em] uppercase transition-colors hover:text-brand-dark">
            CV <Download className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-10 place-items-center text-ink xl:hidden"
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label={interfaceLabels.mobileNavigation} className="absolute inset-x-0 top-full min-h-[calc(100dvh-4.5rem)] border-b border-ink/15 bg-paper px-5 py-7 xl:hidden">
          <div className="mx-auto flex max-w-[1380px] flex-col">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-5 border-b border-ink/15 py-4 text-2xl font-light tracking-[-0.035em]">
                <span className="font-mono text-[0.58rem] text-ink/40">0{index + 1}</span>
                {item.label}
              </Link>
            ))}
            <a href={profile.cv} download className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 border border-ink/30 text-xs tracking-[0.1em] uppercase">
              {interfaceLabels.downloadCv} <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
