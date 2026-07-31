import { ArrowUpRight, Link2, Mail, MapPin, Monitor, Phone } from "lucide-react";
import { contactItems, interfaceLabels, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = {
  email: Mail,
  phone: Phone,
  linkedin: Link2,
  location: MapPin,
  workMode: Monitor,
};

export function Contact() {
  const [contactVerb, contactSubject] = interfaceLabels.contactHeadline.split(" ");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-ink py-24 text-white sm:py-32 lg:py-40"
    >
      <Container>
        <div className="sr-only">
          <SectionTitle id="contact-title" {...sectionContent.contact} inverted />
        </div>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-brand uppercase">
              {interfaceLabels.contactKicker}
            </p>
            <h2 aria-hidden="true" className="mt-7 text-[clamp(4rem,9vw,9rem)] leading-[0.8] font-semibold tracking-[-0.08em]">
              {contactVerb}
              <span className="block font-serif font-normal text-brand italic">{contactSubject}</span>
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">
              {interfaceLabels.contactIntro}
            </p>
            <a
              href={`mailto:${contactItems[0].value}`}
              className="group mt-10 inline-flex items-center gap-4 border-b border-brand pb-2 text-lg font-bold sm:text-xl"
            >
              {contactItems[0].value}
              <ArrowUpRight className="size-5 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          </div>

          <div className="self-end border-t border-white/20">
            {contactItems.slice(1).map((item) => {
              const Icon = icons[item.kind];
              const content = (
                <>
                  <span className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] text-white/45 uppercase">
                    <Icon className="size-3.5 text-brand" aria-hidden="true" />
                    {item.label}
                  </span>
                  <strong className="min-w-0 overflow-wrap-anywhere text-right text-sm font-semibold text-white sm:text-base">
                    {item.value}
                  </strong>
                </>
              );
              const className = "grid min-h-18 grid-cols-[0.72fr_1.28fr] items-center gap-4 border-b border-white/20 py-4 transition-[padding,color] hover:px-3 hover:text-brand";

              return item.href ? (
                <a
                  key={item.kind}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={item.kind} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
