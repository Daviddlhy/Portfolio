import { CalendarDays, MapPin } from "lucide-react";
import { experiences, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section
      id="experiences"
      aria-labelledby="experience-title"
      className="scroll-mt-20 bg-navy py-24 text-white sm:py-32"
    >
      <Container>
        <div className="border-b border-white/15 pb-12">
          <SectionTitle
            id="experience-title"
            {...sectionContent.experience}
            inverted
          />
        </div>

        <div className="relative before:absolute before:inset-y-0 before:left-[5px] before:w-px before:bg-white/15 md:before:left-[250px]">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative grid gap-7 border-b border-white/15 py-12 pl-8 md:grid-cols-[250px_1fr] md:gap-14 md:pl-0"
            >
              <span className="absolute top-[3.35rem] left-0 size-3 rounded-full border-2 border-navy bg-sky-300 md:left-[244px]" />
              <div className="space-y-3 md:pr-10">
                <p className="flex items-start gap-2 font-mono text-xs leading-5 font-semibold tracking-[0.06em] text-white uppercase">
                  <CalendarDays className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                  {experience.period}
                </p>
                <p className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="size-4 text-sky-300" aria-hidden="true" />
                  {experience.location}
                </p>
              </div>

              <div className="md:pl-12">
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-sky-300 uppercase">
                  {experience.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {experience.role}
                </h3>
                <ul className="mt-7 space-y-4">
                  {experience.missions.map((mission) => (
                    <li
                      key={mission}
                      className="relative max-w-3xl pl-6 leading-7 text-slate-300 before:absolute before:top-[0.75rem] before:left-0 before:h-px before:w-2 before:bg-sky-300"
                    >
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
