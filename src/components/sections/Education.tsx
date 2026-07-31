import { ArrowUpRight, MapPin } from "lucide-react";
import { education, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Education() {
  return (
    <section
      id="formations"
      aria-labelledby="education-title"
      className="paper-noise scroll-mt-20 bg-paper py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionTitle id="education-title" {...sectionContent.education} />
        <div className="mt-16 grid gap-px overflow-hidden border border-ink/20 bg-ink/20 lg:grid-cols-2">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className="group flex min-h-[330px] flex-col bg-paper p-7 transition-colors hover:bg-white sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.67rem] font-semibold tracking-[0.12em] text-brand uppercase">
                  {item.period}
                </span>
                <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </div>
              <p className="mt-auto font-mono text-xs text-ink/40">0{index + 1}</p>
              <h3 className="mt-4 max-w-xl text-2xl leading-tight font-semibold tracking-[-0.045em] sm:text-3xl">
                {item.degree}
              </h3>
              <p className="mt-5 max-w-lg leading-7 text-ink/62">{item.school}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink/50">
                <MapPin className="size-4 text-brand" aria-hidden="true" />
                {item.location}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
