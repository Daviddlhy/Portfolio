import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { footerContent, interfaceLabels } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-ink py-7 text-white/45">
      <Container className="flex items-center justify-between gap-5 text-[0.62rem] tracking-[0.12em] uppercase">
        <p>{footerContent.identity}</p>
        <Link href="#accueil" className="inline-flex items-center gap-2 transition-colors hover:text-white">
          {interfaceLabels.backToTop} <ArrowUp className="size-3.5" aria-hidden="true" />
        </Link>
      </Container>
    </footer>
  );
}
