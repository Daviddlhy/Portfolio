import {
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  GitBranch,
} from "lucide-react";
import { sectionContent, skills } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [Cloud, Database, GitBranch, ChartNoAxesCombined, Code2];

export function Skills() {
  return (
    <section
      id="competences"
      aria-labelledby="skills-title"
      className="scroll-mt-20 bg-slate-50 py-24 sm:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <SectionTitle id="skills-title" {...sectionContent.skills} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((category, index) => {
            const Icon = icons[index];
            return (
              <article
                key={category.name}
                className={`group border border-slate-200 bg-white p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-navy/8 ${
                  index === skills.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="size-6 text-brand" aria-hidden="true" />
                  <span className="font-mono text-xs text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-navy">
                  {category.name}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
