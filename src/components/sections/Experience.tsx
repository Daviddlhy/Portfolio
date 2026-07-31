import { MapPin } from "lucide-react";
import { experiences, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section id="experiences" aria-labelledby="experience-title" className="scroll-mt-20 bg-paper py-24 sm:py-32 lg:py-36">
      <Container>
        <div className="max-w-4xl"><SectionTitle id="experience-title" {...sectionContent.experience} /></div>
        <div className="mt-16 border-t border-ink/20">
          {experiences.map((experience, index) => (
            <article key={`${experience.company}-${experience.period}`} className="grid gap-8 border-b border-ink/20 py-10 lg:grid-cols-[70px_0.75fr_1.25fr] lg:gap-8 lg:py-12">
              <span className="font-mono text-[0.62rem] text-ink/35">0{index + 1}</span>
              <div>
                <p className="text-xs tracking-[0.12em] text-brand-dark uppercase">{experience.company}</p>
                <h3 className="mt-3 max-w-md text-2xl leading-tight font-normal tracking-[-0.035em] sm:text-3xl">{experience.role}</h3>
                <p className="mt-5 text-sm text-ink/50">{experience.period}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink/50"><MapPin className="size-3.5" aria-hidden="true" />{experience.location}</p>
              </div>
              <ul className="space-y-3">
                {experience.missions.map((mission) => (
                  <li key={mission} className="grid grid-cols-[10px_1fr] gap-3 text-[0.95rem] leading-7 text-ink/62 before:mt-[0.72rem] before:block before:size-1 before:rounded-full before:bg-brand">{mission}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
