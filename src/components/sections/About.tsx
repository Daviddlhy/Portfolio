import { profile, profileFocus, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div>
          <SectionTitle id="about-title" {...sectionContent.about} />
        </div>
        <div className="pt-1 lg:pt-12">
          <div className="space-y-5 text-xl leading-9 tracking-[-0.015em] text-slate-700 sm:text-2xl sm:leading-10">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-12 grid border-t border-slate-200 sm:grid-cols-3">
            {profileFocus.map((item, index) => (
              <li
                key={item}
                className="flex min-h-24 items-end gap-3 border-b border-slate-200 p-4 sm:border-r sm:last:border-r-0"
              >
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
