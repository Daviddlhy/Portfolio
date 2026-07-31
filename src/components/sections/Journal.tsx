import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journalFormats, interfaceLabels, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const placeholderColors = ["bg-sand/45", "bg-brand/12", "bg-wood/15"];

export function Journal() {
  return (
    <section id="journal" aria-labelledby="journal-title" className="scroll-mt-20 bg-paper py-24 sm:py-32 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionTitle id="journal-title" {...sectionContent.journal} />
          <p className="max-w-lg text-lg leading-8 text-ink/58 lg:justify-self-end">{interfaceLabels.journalIntro}</p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {journalFormats.map((entry, index) => (
            <article key={entry.kind} className={index === 1 ? "md:pt-20" : ""}>
              <div className={`relative aspect-[4/3] overflow-hidden ${placeholderColors[index]}`}>
                {entry.image ? (
                  <Image src={entry.image} alt={entry.imageAlt ?? ""} fill sizes="(max-width: 768px) 92vw, 31vw" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-end justify-between p-5" aria-hidden="true">
                    <span className="font-serif text-5xl text-ink/15 italic">0{index + 1}</span>
                    <span className="h-16 w-px bg-ink/20" />
                  </div>
                )}
              </div>
              <p className="mt-5 text-[0.62rem] tracking-[0.13em] text-brand-dark uppercase">{entry.date ?? interfaceLabels.journalSuggestion} · {entry.kind}</p>
              <h3 className="mt-3 text-2xl font-normal tracking-[-0.035em]">{entry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/55">{entry.description}</p>
              {entry.href ? (
                <a href={entry.href} className="mt-5 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.1em] uppercase transition-colors hover:text-brand-dark">
                  {interfaceLabels.readEntry}<ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
