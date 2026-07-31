import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { interfaceLabels, profile } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const [titleFirst, titleSecond] = profile.title.split(" ");

  return (
    <section id="accueil" aria-labelledby="hero-title" className="min-h-screen bg-paper pt-28 pb-16 sm:pt-32 lg:pt-36">
      <Container className="grid min-h-[calc(100vh-12rem)] items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <Reveal>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.68rem] tracking-[0.13em] text-ink/55 uppercase">
              <span>{profile.name}</span>
              <span className="hidden h-px w-10 bg-ink/25 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" />{interfaceLabels.availability}</span>
            </div>

            <h1 id="hero-title" className="mt-12 text-[clamp(4rem,9.4vw,9rem)] leading-[0.82] font-light tracking-[-0.075em] text-ink">
              {titleFirst}
              <span className="block font-serif font-normal italic">{titleSecond}</span>
            </h1>

            <div className="mt-12 grid gap-8 border-t border-ink/20 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-ink/65 sm:text-xl">{profile.summary[0]}</p>
                <p className="mt-5 flex items-center gap-2 text-xs tracking-[0.08em] text-ink/55 uppercase">
                  <MapPin className="size-3.5 text-brand-dark" aria-hidden="true" />
                  {profile.location} · {profile.workMode}
                </p>
              </div>
              <Link href="#a-propos" className="inline-flex items-center gap-3 text-xs tracking-[0.1em] uppercase transition-colors hover:text-brand-dark">
                {interfaceLabels.discover} <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto">
          <figure className="border border-ink/15 bg-paper-deep p-3 sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image src={profile.image} alt={profile.imageAlt} fill priority sizes="(max-width: 1024px) 92vw, 35vw" className="object-cover object-bottom saturate-[0.72] contrast-[0.95]" />
            </div>
            <figcaption className="flex items-center justify-between gap-4 pt-4 text-[0.62rem] tracking-[0.12em] text-ink/50 uppercase">
              <span>{interfaceLabels.portraitLabel}</span>
              <span>{profile.location}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
