import Link from "next/link";
import { ArrowUp, Download } from "lucide-react";
import {
  footerContent,
  interfaceLabels,
  profile,
} from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#041424] py-7 text-slate-300">
      <Container className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{footerContent.identity}</p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Download className="size-4" aria-hidden="true" />
            {interfaceLabels.downloadCv}
          </a>
          <Link
            href="#accueil"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            {interfaceLabels.backToTop}
            <ArrowUp className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
