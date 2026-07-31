import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { interfaceLabels, personalProjects, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section id="projets" aria-labelledby="projects-title" className="scroll-mt-20 bg-paper py-24 sm:py-32 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionTitle id="projects-title" {...sectionContent.projects} />
          <p className="max-w-lg text-lg leading-8 text-ink/58 lg:justify-self-end">{interfaceLabels.projectsIntro}</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink/20 bg-ink/20 lg:grid-cols-3">
          {personalProjects.map((project, index) => (
            <article key={project.title} className="group bg-paper p-5 sm:p-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
                {project.image ? (
                  <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 1024px) 92vw, 31vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                    <span className="size-24 rounded-full border border-brand/45" />
                    <span className="absolute h-px w-1/2 rotate-[-28deg] bg-ink/20" />
                    <span className="absolute bottom-5 left-5 font-serif text-4xl text-ink/18 italic">0{index + 1}</span>
                  </div>
                )}
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.62rem] tracking-[0.13em] text-brand-dark uppercase">{project.status}</p>
                  {project.href ? <ArrowUpRight className="size-4" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-4 text-2xl leading-tight font-normal tracking-[-0.035em]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/58">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink/15 pt-4 text-[0.62rem] tracking-[0.08em] text-ink/45 uppercase">
                  {project.themes.map((theme) => <li key={theme}>{theme}</li>)}
                </ul>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.1em] uppercase transition-colors hover:text-brand-dark">
                    {interfaceLabels.viewProject}<ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
