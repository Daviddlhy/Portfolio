import { ArrowDownRight } from "lucide-react";
import { interfaceLabels, sectionContent, skills } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section
      id="competences"
      aria-labelledby="skills-title"
      className="relative scroll-mt-20 overflow-hidden bg-brand py-24 text-white sm:py-32 lg:py-40"
    >
      <div aria-hidden="true" className="outline-text absolute -right-10 bottom-0 hidden translate-y-[28%] text-[15rem] leading-none font-bold tracking-[-0.08em] lg:block">
        DATA
      </div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <SectionTitle id="skills-title" {...sectionContent.skills} inverted />
          <p className="max-w-md text-lg leading-8 text-white/70 lg:justify-self-end">
            {interfaceLabels.skillsIntro}
          </p>
        </div>

        <div className="mt-16 border-t border-white/30">
          {skills.map((category, index) => (
            <article
              key={category.name}
              className="group grid gap-5 border-b border-white/30 py-7 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:gap-6"
            >
              <span className="font-mono text-[0.65rem] text-white/55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {category.name}
              </h3>
              <div className="flex items-center justify-between gap-5">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/72 sm:text-base">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ArrowDownRight className="hidden size-5 shrink-0 transition-transform group-hover:rotate-[-45deg] sm:block" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
