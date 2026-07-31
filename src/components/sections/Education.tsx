import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Education() {
  return (
    <section
      id="formations"
      aria-labelledby="education-title"
      className="scroll-mt-20 py-24 sm:py-32"
    >
      <Container>
        <div className="mb-12">
          <SectionTitle id="education-title" {...sectionContent.education} />
        </div>
        <div className="border-b border-slate-200">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-5 border-t border-slate-200 py-9 transition-[background-color,padding] hover:bg-slate-50 sm:grid-cols-[170px_1fr] sm:gap-9 sm:hover:px-5 lg:grid-cols-[170px_1fr_180px]"
            >
              <p className="flex items-center gap-2 font-mono text-xs font-semibold text-brand uppercase">
                <CalendarDays className="size-4" aria-hidden="true" />
                {item.period}
              </p>
              <div>
                <h3 className="flex items-start gap-3 text-xl font-semibold tracking-[-0.025em] text-navy sm:text-2xl">
                  <GraduationCap className="mt-1 size-6 shrink-0 text-brand" aria-hidden="true" />
                  {item.degree}
                </h3>
                <p className="mt-3 text-slate-600">{item.school}</p>
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-500 sm:col-start-2 lg:col-start-3 lg:justify-end">
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
