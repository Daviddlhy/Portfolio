import { profile, profileFocus, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="scroll-mt-24 bg-paper-deep py-24 sm:py-32 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div><SectionTitle id="about-title" {...sectionContent.about} /></div>
        <div className="lg:pt-16">
          <div className="space-y-8">
            {profile.summary.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-[clamp(2rem,3.7vw,4rem)] leading-[1.08] font-light tracking-[-0.045em]" : "max-w-2xl text-lg leading-8 text-ink/60"}>
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/20 pt-6">
            {profileFocus.map((item, index) => (
              <li key={item} className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase">
                <span className="font-mono text-[0.58rem] text-brand-dark">0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
