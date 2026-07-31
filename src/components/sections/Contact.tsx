import { ArrowUpRight, Link2, Mail, MapPin, Monitor, Phone } from "lucide-react";
import { contactItems, interfaceLabels, sectionContent } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = { email: Mail, phone: Phone, linkedin: Link2, location: MapPin, workMode: Monitor };

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-ink py-24 text-white sm:py-32 lg:py-36">
      <Container>
        <SectionTitle id="contact-title" {...sectionContent.contact} inverted />
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="max-w-3xl font-serif text-[clamp(2.7rem,5.5vw,6rem)] leading-[0.98] font-normal tracking-[-0.055em] italic">{interfaceLabels.contactHeadline}</p>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">{interfaceLabels.contactIntro}</p>
            <a href={contactItems[0].href} className="group mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-lg transition-colors hover:border-white hover:text-white">
              {contactItems[0].value}<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="border-t border-white/20">
            {contactItems.slice(1).map((item) => {
              const Icon = icons[item.kind];
              const content = <><span className="flex items-center gap-2 text-[0.6rem] tracking-[0.12em] text-white/40 uppercase"><Icon className="size-3.5" aria-hidden="true" />{item.label}</span><strong className="overflow-wrap-anywhere text-right text-sm font-normal text-white/75">{item.value}</strong></>;
              const className = "grid min-h-17 grid-cols-[0.75fr_1.25fr] items-center gap-4 border-b border-white/20 py-4";
              return item.href ? <a key={item.kind} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={`${className} transition-colors hover:text-white`}>{content}</a> : <div key={item.kind} className={className}>{content}</div>;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
