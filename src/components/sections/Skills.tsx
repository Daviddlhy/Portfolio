import { interfaceLabels, sectionContent, skills } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section id="competences" aria-labelledby="skills-title" className="scroll-mt-20 bg-paper-deep py-24 sm:py-32 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionTitle id="skills-title" {...sectionContent.skills} />
          <p className="max-w-lg text-lg leading-8 text-ink/58 lg:justify-self-end">{interfaceLabels.skillsIntro}</p>
        </div>
        <div className="mt-16 grid border-t border-l border-ink/20 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((category, index) => (
            <article key={category.name} className="min-h-64 border-r border-b border-ink/20 p-6">
              <span className="font-mono text-[0.58rem] text-ink/35">0{index + 1}</span>
              <h3 className="mt-12 text-lg font-normal tracking-[-0.02em]">{category.name}</h3>
              <ul className="mt-6 space-y-2 text-sm text-ink/55">
                {category.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
