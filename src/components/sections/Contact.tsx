import {
  Link2,
  Mail,
  MapPin,
  Monitor,
  Phone,
  SquareArrowOutUpRight,
} from "lucide-react";
import { contactItems, sectionContent } from "@/data/content";
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
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-navy py-24 text-white sm:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <SectionTitle id="contact-title" {...sectionContent.contact} inverted />
        </div>
        <div className="border-t border-white/15">
          {contactItems.map((item) => {
            const Icon = icons[item.kind];
            const content = (
              <>
                <span className="flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-slate-400 uppercase">
                  <Icon className="size-4 text-sky-300" aria-hidden="true" />
                  {item.label}
                </span>
                <strong className="min-w-0 overflow-wrap-anywhere font-medium text-white">
                  {item.value}
                </strong>
                {item.href ? (
                  <SquareArrowOutUpRight
                    className="size-4 text-sky-300"
                    aria-hidden="true"
                  />
                ) : null}
              </>
            );

            const className =
              "grid min-h-20 grid-cols-[1fr_auto] items-center gap-2 border-b border-white/15 py-5 transition-[background-color,padding] hover:bg-white/5 sm:grid-cols-[130px_1fr_auto] sm:gap-5 sm:hover:px-4";

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
      </Container>
    </section>
  );
}
