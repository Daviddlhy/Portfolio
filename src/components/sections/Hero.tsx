import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { interfaceLabels, profile } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const [firstName, ...lastNameParts] = profile.name.split(" ");
  const [titleFirst, titleSecond] = profile.title.split(" ");

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="paper-noise relative isolate min-h-screen overflow-hidden bg-paper pt-28 pb-10 sm:pt-32 lg:pt-36"
    >
      <div aria-hidden="true" className="absolute top-20 right-0 -z-10 h-px w-1/3 bg-ink/15" />
      <Container className="grid min-h-[calc(100vh-9rem)] items-end gap-12 lg:grid-cols-12 lg:gap-7">
        <div className="relative z-10 lg:col-span-7 lg:pb-10">
          <Reveal>
            <p className="mb-8 flex items-center gap-3 font-mono text-[0.67rem] font-semibold tracking-[0.14em] text-ink/65 uppercase">
              <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
              {interfaceLabels.heroEyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-[clamp(4.4rem,11.7vw,10.8rem)] leading-[0.72] font-bold tracking-[-0.085em] text-ink"
            >
              <span className="block">{titleFirst}</span>
              <span className="block font-serif font-normal tracking-[-0.07em] text-brand italic">
                {titleSecond}.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 grid gap-7 border-t border-ink/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end lg:max-w-3xl">
            <div>
              <p className="max-w-xl text-lg leading-8 text-ink/70 sm:text-xl">
                {profile.summary[0]}
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm font-bold">
                <MapPin className="size-4 text-brand" aria-hidden="true" />
                {profile.location} · {profile.workMode}
              </p>
            </div>
            <Link
              href="#experiences"
              aria-label={interfaceLabels.viewExperience}
              className="grid size-15 shrink-0 place-items-center rounded-full bg-ink text-white transition-[background-color,transform] hover:rotate-6 hover:bg-brand sm:size-17"
            >
              <ArrowDownRight className="size-6" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative mx-auto w-full max-w-[540px] lg:col-span-5 lg:mx-0 lg:ml-auto">
          <div aria-hidden="true" className="absolute -top-5 -right-5 h-[88%] w-[88%] rounded-t-full bg-brand sm:-top-7 sm:-right-7" />
          <figure className="relative overflow-hidden rounded-t-full border border-ink/25 bg-rose">
            <div className="relative aspect-[4/5]">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="object-cover object-bottom saturate-[0.9] transition-transform duration-700 hover:scale-[1.02]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(23,25,24,0.72)_100%)]" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-lg font-bold tracking-[-0.03em]">{firstName}</p>
                <p className="text-lg font-serif italic">{lastNameParts.join(" ")}</p>
              </div>
              <a
                href={`mailto:${profile.email}`}
                aria-label={interfaceLabels.contactMe}
                className="grid size-11 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-brand hover:text-white"
              >
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
          <div className="absolute top-[17%] -left-5 rounded-full bg-white px-4 py-2 font-mono text-[0.62rem] font-bold tracking-[0.1em] text-ink uppercase shadow-lg sm:-left-10">
            {interfaceLabels.availability}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
