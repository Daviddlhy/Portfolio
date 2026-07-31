"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  contactItems,
  education,
  experiences,
  footerContent,
  interfaceLabels,
  navigation,
  profile,
  profileFocus,
  sectionContent,
  skills,
} from "@/data/content";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  intro?: string;
  inverted?: boolean;
};

function SectionHeading({ index, title, intro, inverted = false }: SectionHeadingProps) {
  return (
    <Reveal className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
      <div>
        <p className={`font-mono text-[0.65rem] tracking-[0.16em] uppercase ${inverted ? "text-sky" : "text-blue"}`}>{index}</p>
        <h2 className={`mt-5 text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.9] font-semibold tracking-[-0.065em] ${inverted ? "text-white" : "text-blue-dark"}`}>{title}</h2>
      </div>
      {intro ? <p className={`max-w-xl text-lg leading-8 lg:justify-self-end ${inverted ? "text-white/58" : "text-ink/58"}`}>{intro}</p> : null}
    </Reveal>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#contenu" className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-full bg-blue px-4 py-2 text-xs text-white transition-transform focus:translate-y-0">{interfaceLabels.skipToContent}</a>
      <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-[1380px] rounded-2xl border border-blue-dark/10 bg-white/90 shadow-[0_12px_40px_rgba(4,17,38,0.12)] backdrop-blur-xl sm:inset-x-6">
        <motion.span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-blue" style={{ scaleX: progress }} />
        <div className="flex min-h-16 items-center justify-between gap-5 px-4 sm:px-6">
          <a href="#accueil" className="group flex items-center gap-3 text-blue-dark" onClick={() => setMenuOpen(false)}>
            <span className="grid size-9 place-items-center rounded-xl bg-blue-dark font-mono text-[0.65rem] tracking-[0.08em] text-white transition-colors group-hover:bg-blue">{profile.initials}</span>
            <span className="hidden text-sm font-semibold sm:block">{profile.name}</span>
          </a>

          <nav aria-label={interfaceLabels.mainNavigation} className="hidden items-center gap-4 xl:flex">
            {navigation.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="text-[0.68rem] font-semibold tracking-[0.04em] text-blue-dark/55 transition-colors hover:text-blue">{item.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={profile.cv} download className="hidden min-h-10 items-center gap-2 rounded-xl bg-blue-dark px-4 text-[0.68rem] font-semibold text-white transition-colors hover:bg-blue sm:inline-flex">
              {interfaceLabels.downloadCv}<Download className="size-3.5" aria-hidden="true" />
            </a>
            <button type="button" aria-label={menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-xl border border-blue-dark/15 text-blue-dark xl:hidden">
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <nav aria-label={interfaceLabels.mobileNavigation} className="fixed inset-0 z-40 overflow-y-auto bg-blue-deep px-6 pt-28 pb-8 text-white xl:hidden">
          <div className="mx-auto max-w-3xl">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="grid grid-cols-[38px_1fr] gap-4 border-b border-white/15 py-4">
                <span className="font-mono text-[0.6rem] text-sky">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-3xl font-medium tracking-[-0.04em]">{item.label}</span>
              </a>
            ))}
            <a href={profile.cv} download className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue text-sm font-semibold text-white">{interfaceLabels.downloadCv}<Download className="size-4" aria-hidden="true" /></a>
          </div>
        </nav>
      ) : null}
    </>
  );
}

function Hero() {
  const [titleLead, titleAccent] = profile.title.split(" ");
  const reduceMotion = useReducedMotion();

  return (
    <section id="accueil" aria-labelledby="hero-title" className="blueprint-grid relative isolate min-h-screen overflow-hidden bg-blue-deep pt-32 pb-16 text-white sm:pt-36 lg:pt-40">
      <div aria-hidden="true" className="ambient-orb absolute -top-24 -left-24 size-80 rounded-full bg-blue/28 blur-3xl" />
      <div aria-hidden="true" className="ambient-orb-delayed absolute right-[4%] bottom-[5%] size-72 rounded-full bg-sky/14 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1380px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <div className="relative z-10">
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">
            <span className="size-2 rounded-full bg-sky shadow-[0_0_18px_rgba(143,197,255,0.9)]" aria-hidden="true" />{interfaceLabels.availability}
          </motion.p>
          <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mt-9 text-[clamp(4.3rem,10vw,10.5rem)] leading-[0.74] font-semibold tracking-[-0.085em]">
            {titleLead}
            <span className="block font-serif font-normal text-sky italic">{titleAccent}</span>
          </motion.h1>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }} className="mt-10 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">{profile.summary[0]}</motion.p>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experiences" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-blue px-5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#397cff]">{interfaceLabels.viewExperience}<ArrowDownRight className="size-4" aria-hidden="true" /></a>
            <a href="#contact" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-sky hover:text-sky">{interfaceLabels.contactMe}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </motion.div>
        </div>

        <motion.div animate={reduceMotion ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div aria-hidden="true" className="pulse-ring absolute -inset-5 rounded-[3rem] border border-sky/35" />
          <figure className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-blue-dark p-2 shadow-2xl shadow-black/35">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-blue">
              <Image src={profile.image} alt={profile.imageAlt} fill priority sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-bottom saturate-[0.78] transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(4,17,38,0.8)_100%)]" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div><p className="text-xl font-semibold">{profile.name}</p><p className="mt-1 text-sm text-white/55">{profile.location}</p></div>
                <span className="rounded-full bg-sky px-3 py-1.5 font-mono text-[0.58rem] text-blue-deep uppercase">{profile.title}</span>
              </figcaption>
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}

function StackMarquee() {
  return (
    <div className="marquee overflow-hidden border-y border-blue-dark/10 bg-white py-5" aria-label={interfaceLabels.mainStack}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {profile.stack.map((item) => (
              <li key={`${copy}-${item}`} className="flex items-center gap-6 pr-6 text-sm font-semibold tracking-[0.06em] text-blue-dark uppercase sm:text-base">
                {item}<span className="size-2 rounded-full bg-blue" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="scroll-mt-28 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.about.index} title={sectionContent.about.title} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal>
            <p className="max-w-sm text-lg leading-8 text-ink/55">{profile.summary[1]}</p>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-blue uppercase"><MapPin className="size-4" aria-hidden="true" />{profile.location} · {profile.workMode}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 id="about-title" className="text-[clamp(2.3rem,4.4vw,4.8rem)] leading-[1.02] font-medium tracking-[-0.055em] text-blue-dark">{interfaceLabels.profileStatementLead} <span className="font-serif font-normal text-blue italic">{interfaceLabels.profileStatementAccent}</span></h3>
            <ul className="mt-12 grid gap-3 sm:grid-cols-3">
              {profileFocus.map((focus, index) => (
                <motion.li key={focus} whileHover={reduceHover()} className="rounded-2xl border border-blue-dark/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,26,56,0.06)]">
                  <span className="font-mono text-[0.6rem] text-blue">0{index + 1}</span><p className="mt-7 text-lg font-semibold text-blue-dark">{focus}</p>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function reduceHover() {
  return { y: -4 };
}

function Experience() {
  return (
    <section id="experiences" aria-labelledby="experience-title" className="scroll-mt-28 bg-blue-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.experience.index} title={sectionContent.experience.title} intro={interfaceLabels.experienceIntro} />
        <h3 id="experience-title" className="sr-only">{sectionContent.experience.title}</h3>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.period}`} delay={(index % 2) * 0.08}>
              <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="h-full rounded-[2rem] border border-blue-dark/10 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,56,0.08)] sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div><p className="font-mono text-[0.62rem] tracking-[0.12em] text-blue uppercase">{experience.company}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-blue-dark sm:text-3xl">{experience.role}</h3></div>
                  <span className="font-mono text-[0.6rem] text-blue-dark/30">0{index + 1}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink/45"><span>{experience.period}</span><span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-blue" aria-hidden="true" />{experience.location}</span></div>
                <ul className="mt-7 space-y-3 border-t border-blue-dark/10 pt-6">
                  {experience.missions.map((mission) => <li key={mission} className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-6 text-ink/60 before:mt-[0.65rem] before:size-1.5 before:rounded-full before:bg-blue">{mission}</li>)}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competences" aria-labelledby="skills-title" className="blueprint-grid scroll-mt-28 bg-blue-dark py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.skills.index} title={sectionContent.skills.title} intro={interfaceLabels.skillsIntro} inverted />
        <h3 id="skills-title" className="sr-only">{sectionContent.skills.title}</h3>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.05}>
              <motion.article whileHover={{ y: -6, borderColor: "rgba(143,197,255,0.75)" }} className="min-h-64 rounded-2xl border border-white/14 bg-white/[0.055] p-6 backdrop-blur-sm">
                <span className="font-mono text-[0.6rem] text-sky">0{index + 1}</span><h3 className="mt-10 text-xl font-semibold">{category.name}</h3>
                <ul className="mt-6 space-y-2 text-sm text-white/55">{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type SoonSectionProps = { id: string; index: string; title: string; message: string; dark?: boolean };

function SoonSection({ id, index, title, message, dark = false }: SoonSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`soft-grid relative scroll-mt-28 overflow-hidden py-24 sm:py-32 ${dark ? "bg-blue-deep text-white" : "bg-paper text-blue-dark"}`}>
      <div aria-hidden="true" className={`ambient-orb absolute right-[8%] top-1/2 size-56 -translate-y-1/2 rounded-full border ${dark ? "border-sky/25" : "border-blue/20"}`} />
      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className={`font-mono text-[0.65rem] tracking-[0.16em] uppercase ${dark ? "text-sky" : "text-blue"}`}>{index} · {interfaceLabels.comingSoon}</p>
          <h2 id={`${id}-title`} className="mt-7 max-w-5xl text-[clamp(3.5rem,7.8vw,8rem)] leading-[0.84] font-semibold tracking-[-0.075em]">{title}</h2>
          <p className={`mt-9 max-w-xl border-l-2 border-blue pl-5 text-lg leading-8 ${dark ? "text-white/55" : "text-ink/55"}`}>{message}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="formations" aria-labelledby="education-title" className="scroll-mt-28 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.education.index} title={sectionContent.education.title} />
        <h3 id="education-title" className="sr-only">{sectionContent.education.title}</h3>
        <div className="mt-14 border-t border-blue-dark/15">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <article className="grid gap-5 border-b border-blue-dark/15 py-8 transition-[padding,background-color] hover:bg-blue-soft/45 sm:grid-cols-[70px_1fr_180px] sm:gap-8 sm:hover:px-5">
                <span className="font-mono text-[0.6rem] text-blue">0{index + 1}</span>
                <div><p className="text-xs font-semibold tracking-[0.1em] text-blue uppercase">{item.period}</p><h3 className="mt-3 max-w-3xl text-xl font-semibold tracking-[-0.025em] text-blue-dark sm:text-2xl">{item.degree}</h3><p className="mt-3 text-sm text-ink/50">{item.school}</p></div>
                <p className="flex items-center gap-2 text-sm text-ink/45 sm:justify-end"><MapPin className="size-4 text-blue" aria-hidden="true" />{item.location}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [contactLead, contactAccent] = interfaceLabels.contactHeadline.split(" ");

  return (
    <section id="contact" aria-labelledby="contact-title" className="blueprint-grid scroll-mt-28 bg-blue-dark py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-[1380px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <Reveal>
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">{sectionContent.contact.index} · {interfaceLabels.contactKicker}</p>
          <h2 id="contact-title" className="mt-7 text-[clamp(4rem,9vw,9rem)] leading-[0.76] font-semibold tracking-[-0.085em]">{contactLead}<span className="block font-serif font-normal text-sky italic">{contactAccent}</span></h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-white/55">{interfaceLabels.contactIntro}</p>
        </Reveal>
        <Reveal delay={0.1} className="self-end">
          <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-5 rounded-2xl bg-blue p-5 text-lg font-semibold transition-colors hover:bg-[#397cff] sm:text-xl"><span className="overflow-wrap-anywhere">{profile.email}</span><Mail className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
          <div className="mt-5 border-t border-white/15">
            {contactItems.slice(1).map((item) => {
              const content = <><span className="text-[0.62rem] tracking-[0.1em] text-white/40 uppercase">{item.label}</span><span className="text-right text-sm text-white/70">{item.value}</span></>;
              const className = "grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-white/15 py-4";
              return item.href ? <a key={item.kind} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={`${className} transition-colors hover:text-sky`}>{content}</a> : <div key={item.kind} className={className}>{content}</div>;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FluidPortfolio() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <StackMarquee />
        <About />
        <Experience />
        <Skills />
        <SoonSection id="projets" index={sectionContent.projects.index} title={interfaceLabels.projectsSoonTitle} message={interfaceLabels.projectsSoonMessage} />
        <SoonSection id="journal" index={sectionContent.journal.index} title={interfaceLabels.blogSoonTitle} message={interfaceLabels.blogSoonMessage} dark />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/15 bg-blue-deep py-7 text-white/40">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 px-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><p>{footerContent.identity}</p><a href="#accueil" className="inline-flex items-center gap-2 transition-colors hover:text-sky">{interfaceLabels.backToTop}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></div>
      </footer>
    </>
  );
}
