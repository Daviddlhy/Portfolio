"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  contactItems,
  education,
  experiences,
  footerContent,
  interfaceLabels,
  japanTravel,
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
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimationsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      className={className}
      initial={false}
      animate={animationsReady && !reduceMotion ? "hidden" : "visible"}
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 34 },
        visible: { opacity: 1, y: 0 },
      }}
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
        <h2 className={`mt-5 text-[clamp(2.6rem,4.8vw,5rem)] leading-[0.92] font-semibold tracking-[-0.06em] ${inverted ? "text-white" : "text-blue-dark"}`}>{title}</h2>
      </div>
      {intro ? <p className={`max-w-xl text-base leading-7 lg:justify-self-end ${inverted ? "text-white/58" : "text-ink/58"}`}>{intro}</p> : null}
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

          <nav aria-label={interfaceLabels.mainNavigation} className="hidden items-center gap-1.5 xl:flex">
            {navigation.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-10 items-center rounded-lg px-3 text-[0.78rem] font-semibold tracking-[0.025em] text-blue-dark/68 transition-colors hover:bg-blue-soft/65 hover:text-blue">{item.label}</a>
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
    <section id="accueil" aria-labelledby="hero-title" className="blueprint-grid relative isolate overflow-hidden bg-blue-deep pt-32 pb-20 text-white sm:pt-36 lg:pt-40">
      <div aria-hidden="true" className="ambient-orb absolute -top-24 -left-24 size-80 rounded-full bg-blue/28 blur-3xl" />
      <div aria-hidden="true" className="ambient-orb-delayed absolute right-[4%] bottom-[5%] size-72 rounded-full bg-sky/14 blur-3xl" />
      <div className="mx-auto grid min-h-[72vh] max-w-[1380px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="relative z-10">
          <motion.p initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">
            <span className="size-2 rounded-full bg-sky shadow-[0_0_18px_rgba(143,197,255,0.9)]" aria-hidden="true" />{interfaceLabels.availability}
          </motion.p>
          <motion.h1 id="hero-title" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mt-9 text-[clamp(4rem,8.5vw,8.2rem)] leading-[0.76] font-semibold tracking-[-0.08em]">
            {titleLead}
            <span className="block font-serif font-normal text-sky italic">{titleAccent}</span>
          </motion.h1>
          <motion.p initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }} className="mt-10 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">{profile.summary[0]}</motion.p>
          <motion.div initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experiences" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-blue px-5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#397cff]">{interfaceLabels.viewExperience}<ArrowDownRight className="size-4" aria-hidden="true" /></a>
            <a href="#contact" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-sky hover:text-sky">{interfaceLabels.contactMe}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </motion.div>
        </div>

        <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:ml-auto">
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

function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="scroll-mt-28 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.about.index} title={sectionContent.about.title} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <Reveal>
            <p className="max-w-sm text-lg leading-8 text-ink/55">{profile.summary[1]}</p>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-blue uppercase"><MapPin className="size-4" aria-hidden="true" />{profile.location} · {profile.workMode}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 id="about-title" className="text-[clamp(2.2rem,3.8vw,4rem)] leading-[1.04] font-medium tracking-[-0.05em] text-blue-dark">{interfaceLabels.profileStatementLead} <span className="font-serif font-normal text-blue italic">{interfaceLabels.profileStatementAccent}</span></h3>
            <ul className="mt-9 flex flex-wrap gap-2">
              {profileFocus.map((focus, index) => (
                <motion.li key={focus} whileHover={{ y: -2 }} className="inline-flex items-center gap-3 rounded-full border border-blue-dark/12 bg-white px-4 py-2.5">
                  <span className="font-mono text-[0.55rem] text-blue">0{index + 1}</span><span className="text-sm font-semibold text-blue-dark">{focus}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [openExperience, setOpenExperience] = useState<number | null>(null);

  return (
    <section id="experiences" aria-labelledby="experience-title" className="scroll-mt-28 bg-blue-soft py-20 sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.experience.index} title={sectionContent.experience.title} intro={interfaceLabels.experienceIntro} />
        <h3 id="experience-title" className="sr-only">{sectionContent.experience.title}</h3>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-blue-dark/10 bg-white shadow-[0_16px_45px_rgba(7,26,56,0.07)]">
          {experiences.map((experience, index) => (
            <article key={`${experience.company}-${experience.period}`} className="border-b border-blue-dark/10 last:border-b-0">
              <button
                type="button"
                aria-expanded={openExperience === index}
                aria-controls={`experience-details-${index}`}
                onClick={() => setOpenExperience((current) => current === index ? null : index)}
                className="group grid w-full gap-5 p-5 text-left transition-colors hover:bg-blue-soft/35 sm:grid-cols-[50px_0.8fr_1.2fr_auto] sm:items-center sm:p-6"
              >
                <span className="font-mono text-[0.58rem] text-blue">0{index + 1}</span>
                <div><p className="text-[0.62rem] font-semibold tracking-[0.1em] text-blue uppercase">{experience.company}</p><p className="mt-1 text-xs text-ink/42">{experience.period}</p></div>
                <div><h3 className="text-xl font-semibold tracking-[-0.025em] text-blue-dark">{experience.role}</h3><p className="mt-1 flex items-center gap-1.5 text-xs text-ink/42"><MapPin className="size-3 text-blue" aria-hidden="true" />{experience.location}</p></div>
                <span className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.06em] text-blue uppercase">
                  <span className="hidden lg:inline">{openExperience === index ? interfaceLabels.hideMissions : interfaceLabels.showMissions}</span>
                  <ChevronDown className={`size-4 transition-transform duration-300 ${openExperience === index ? "rotate-180" : ""}`} aria-hidden="true" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openExperience === index ? (
                  <motion.div id={`experience-details-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <ul className="grid gap-x-10 gap-y-3 border-t border-blue-dark/10 bg-blue-soft/25 px-5 py-6 sm:grid-cols-2 sm:px-6">
                      {experience.missions.map((mission) => <li key={mission} className="grid grid-cols-[9px_1fr] gap-3 text-sm leading-6 text-ink/58 before:mt-[0.65rem] before:size-1.5 before:rounded-full before:bg-blue">{mission}</li>)}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competences" aria-labelledby="skills-title" className="blueprint-grid scroll-mt-28 bg-blue-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.skills.index} title={sectionContent.skills.title} intro={interfaceLabels.skillsIntro} inverted />
        <h3 id="skills-title" className="sr-only">{sectionContent.skills.title}</h3>
        <div className="mt-12 grid border-t border-white/15 lg:grid-cols-2 lg:gap-x-12">
          {skills.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.05}>
              <article className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
                <div className="flex items-center gap-3"><span className="font-mono text-[0.58rem] text-sky">0{index + 1}</span><h3 className="text-lg font-semibold">{category.name}</h3></div>
                <ul className="flex flex-wrap gap-2">{category.items.map((item) => <li key={item} className="rounded-full border border-white/15 bg-white/[0.045] px-3 py-1.5 text-xs text-white/62">{item}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSoon() {
  return (
    <section id="projets" aria-labelledby="projects-title" className="soft-grid scroll-mt-28 bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-6 rounded-[2rem] border border-blue-dark/10 bg-white p-7 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div><p className="font-mono text-[0.62rem] tracking-[0.14em] text-blue uppercase">{sectionContent.projects.index} · {interfaceLabels.comingSoon}</p><h2 id="projects-title" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-blue-dark sm:text-4xl">{interfaceLabels.projectsSoonTitle}</h2></div>
          <p className="max-w-xl text-base text-ink/52 lg:justify-self-end">{interfaceLabels.projectsSoonMessage}</p>
        </Reveal>
      </div>
    </section>
  );
}

function JapanTravel() {
  return (
    <section id="journal" aria-labelledby="japan-travel-title" className="blueprint-grid scroll-mt-28 bg-blue-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">{sectionContent.journal.index} · {japanTravel.category}</p><h2 id="japan-travel-title" className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.9] font-semibold tracking-[-0.065em]">{japanTravel.title}</h2></div>
          <div className="lg:justify-self-end"><p className="font-mono text-[0.62rem] tracking-[0.12em] text-sky uppercase">{japanTravel.meta}</p><p className="mt-3 max-w-lg text-base leading-7 text-white/55">{japanTravel.intro}</p></div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          {japanTravel.photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.1} className={index === 0 ? "lg:mt-24" : ""}>
              <motion.figure whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="group overflow-hidden rounded-[2rem] border border-white/12 bg-blue-dark p-2">
                <div className={`relative overflow-hidden rounded-[1.55rem] ${index === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-3 py-4 text-xs"><span className="text-white/68">{photo.caption}</span><span className="font-mono text-[0.58rem] text-sky">0{index + 1}</span></figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
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
          <h2 id="contact-title" className="mt-7 text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.78] font-semibold tracking-[-0.08em]">{contactLead}<span className="block font-serif font-normal text-sky italic">{contactAccent}</span></h2>
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
        <About />
        <Experience />
        <Skills />
        <ProjectsSoon />
        <JapanTravel />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/15 bg-blue-deep py-7 text-white/40">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 px-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><p>{footerContent.identity}</p><a href="#accueil" className="inline-flex items-center gap-2 transition-colors hover:text-sky">{interfaceLabels.backToTop}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></div>
      </footer>
    </>
  );
}
