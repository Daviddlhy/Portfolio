import { ArrowUpRight, MapPin } from "lucide-react";
import { experiences, interfaceLabels, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section
      id="experiences"
      aria-labelledby="experience-title"
      className="scroll-mt-20 bg-ink py-24 text-white sm:py-32 lg:py-40"
    >
      <Container>
        <div className="flex flex-col gap-8 border-b border-white/20 pb-14 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle id="experience-title" {...sectionContent.experience} inverted />
          <p className="shrink-0 rounded-full border border-white/25 px-4 py-2 font-mono text-[0.65rem] tracking-[0.12em] text-white/60 uppercase">
            {interfaceLabels.experienceCount}
          </p>
        </div>

        <div>
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="group grid gap-7 border-b border-white/20 py-10 sm:py-12 lg:grid-cols-[90px_0.72fr_1.28fr] lg:gap-8"
            >
              <div className="flex items-center justify-between lg:block">
                <span className="font-mono text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  className="size-5 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 lg:mt-8"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-brand uppercase">
                  {experience.company}
                </p>
                <h3 className="mt-3 max-w-lg text-3xl leading-none font-semibold tracking-[-0.05em] sm:text-4xl">
                  {experience.role}
                </h3>
                <p className="mt-5 text-sm leading-6 text-white/55">{experience.period}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/55">
                  <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                  {experience.location}
                </p>
              </div>

              <ul className="space-y-3 lg:pt-1">
                {experience.missions.map((mission) => (
                  <li
                    key={mission}
                    className="grid grid-cols-[12px_1fr] gap-3 leading-7 text-white/68 before:mt-[0.72rem] before:block before:h-px before:w-2 before:bg-brand"
                  >
                    {mission}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
