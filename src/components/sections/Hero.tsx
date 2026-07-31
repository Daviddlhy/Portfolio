import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail, MapPin, Monitor } from "lucide-react";
import { interfaceLabels, profile } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="data-grid relative isolate overflow-hidden bg-slate-50 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[37%] bg-navy lg:block"
      />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-wrap gap-3 text-xs font-semibold tracking-[0.1em] uppercase">
              <span className="inline-flex items-center gap-2 text-brand">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-600">
                <Monitor className="size-4" aria-hidden="true" />
                {profile.workMode}
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-[clamp(4rem,10vw,8.2rem)] leading-[0.8] font-bold tracking-[-0.075em] text-navy"
            >
              {profile.name.split(" ")[0]}
              <span className="block font-medium text-brand">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="mt-7 text-xl font-semibold text-navy sm:text-2xl">
              {profile.title}
            </p>
            <div className="mt-5 max-w-2xl space-y-2 text-lg leading-8 text-slate-600">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#experiences"
                className="inline-flex min-h-13 items-center justify-between gap-8 bg-navy px-5 font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand"
              >
                {interfaceLabels.viewExperience}
                <ArrowDown className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-13 items-center justify-between gap-8 border border-navy px-5 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {interfaceLabels.contactMe}
                <Mail className="size-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 border-t border-slate-300 pt-5">
              <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-slate-500 uppercase">
                {interfaceLabels.mainStack}
              </p>
              <ul className="flex flex-wrap gap-2">
                {profile.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-slate-300 bg-white/80 px-3 py-1.5 font-mono text-xs text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative border border-white/15 bg-navy-soft p-3 shadow-2xl shadow-navy/20">
            <span
              aria-hidden="true"
              className="absolute -top-4 -right-4 size-18 border-t-2 border-r-2 border-sky-400"
            />
            <figure className="group relative min-h-[470px] overflow-hidden bg-[#a65c62] sm:min-h-[560px]">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,51,0.04)_35%,rgba(7,28,51,0.92)_100%)]"
              />
              <figcaption className="absolute inset-x-6 bottom-6 flex flex-col gap-2 text-white sm:flex-row sm:items-end sm:justify-between">
                <span className="text-2xl font-semibold tracking-tight">
                  {profile.name}
                </span>
                <strong className="font-mono text-xs font-medium tracking-[0.12em] text-slate-200 uppercase">
                  {profile.title}
                </strong>
              </figcaption>
            </figure>
            <div className="grid grid-cols-2 border-t border-l border-white/15">
              {profile.stack.slice(0, 4).map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-15 items-center justify-between gap-3 border-r border-b border-white/15 px-4"
                >
                  <span className="font-mono text-[0.65rem] text-sky-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-sm font-medium text-white">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
