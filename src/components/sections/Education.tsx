import { MapPin } from "lucide-react";
import { education, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Education() {
  return (
    <section id="formations" aria-labelledby="education-title" className="scroll-mt-20 bg-paper-deep py-24 sm:py-32 lg:py-36">
      <Container>
        <SectionTitle id="education-title" {...sectionContent.education} />
        <div className="mt-16 border-t border-ink/20">
          {education.map((item, index) => (
            <article key={item.degree} className="grid gap-5 border-b border-ink/20 py-9 sm:grid-cols-[60px_1fr_180px] sm:gap-8">
              <span className="font-mono text-[0.6rem] text-ink/35">0{index + 1}</span>
              <div>
                <p className="text-xs tracking-[0.1em] text-brand-dark uppercase">{item.period}</p>
                <h3 className="mt-3 max-w-2xl text-xl leading-snug font-normal tracking-[-0.025em] sm:text-2xl">{item.degree}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/55">{item.school}</p>
              </div>
              <p className="flex items-center gap-2 text-sm text-ink/45 sm:justify-end"><MapPin className="size-3.5" aria-hidden="true" />{item.location}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
