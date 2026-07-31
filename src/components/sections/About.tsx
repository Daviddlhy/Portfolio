import { ArrowDownRight } from "lucide-react";
import { profile, profileFocus, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-y border-ink/15 bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionTitle id="about-title" {...sectionContent.about} />
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="flex flex-col justify-between gap-12">
            <ArrowDownRight className="size-12 text-brand" strokeWidth={1.4} aria-hidden="true" />
            <ul className="border-t border-ink/20">
              {profileFocus.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-ink/20 py-4"
                >
                  <span className="font-bold">{item}</span>
                  <span className="font-mono text-[0.65rem] text-ink/45">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            {profile.summary.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-[clamp(2rem,4.2vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-ink"
                    : "max-w-2xl text-lg leading-8 text-ink/65 sm:ml-auto sm:text-xl"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
