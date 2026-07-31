"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
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
};

function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}

type SectionHeadingProps = {
  index: string;
  title: string;
  intro?: string;
};

function SectionHeading({ index, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
      <div>
        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">{index}</p>
        <h2 className="mt-5 text-[clamp(2.6rem,4.8vw,5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white">{title}</h2>
      </div>
      {intro ? <p className="max-w-xl text-base leading-7 text-white/58 lg:justify-self-end">{intro}</p> : null}
    </Reveal>
  );
}

type HeaderProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
};

function Header({ activeIndex, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = (activeIndex + 1) / navigation.length;

  const navigate = (event: MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(index);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a href="#contenu" className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-full bg-blue px-4 py-2 text-xs text-white transition-transform focus:translate-y-0">{interfaceLabels.skipToContent}</a>
      <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-[1520px] rounded-2xl border border-white/12 bg-blue-dark/92 shadow-[0_12px_40px_rgba(4,17,38,0.3)] backdrop-blur-xl sm:inset-x-6">
        <motion.span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-blue" animate={{ scaleX: progress }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />
        <div className="flex min-h-20 items-center justify-between gap-5 px-5 sm:px-7 xl:min-h-24 xl:px-8 2xl:min-h-[6.5rem]">
          <a href="#accueil" aria-current={activeIndex === 0 ? "page" : undefined} className="group flex items-center gap-3 text-white" onClick={(event) => navigate(event, 0)}>
            <span className="grid size-11 place-items-center rounded-xl bg-blue font-mono text-xs tracking-[0.08em] text-white transition-colors group-hover:bg-sky group-hover:text-blue-deep xl:size-12 xl:text-sm">{profile.initials}</span>
            <span className="hidden text-base font-semibold sm:block xl:text-lg 2xl:text-xl">{profile.name}</span>
          </a>

          <nav aria-label={interfaceLabels.mainNavigation} className="hidden items-center gap-1 xl:flex 2xl:gap-1.5">
            {navigation.slice(1).map((item, index) => {
              const navigationIndex = index + 1;
              const isActive = navigationIndex === activeIndex;
              return <a key={item.href} href={item.href} aria-current={isActive ? "page" : undefined} onClick={(event) => navigate(event, navigationIndex)} className={`inline-flex min-h-14 items-center rounded-xl px-4 text-[1.05rem] font-semibold tracking-[0.01em] transition-colors 2xl:px-5 2xl:text-lg ${isActive ? "bg-blue text-white" : "text-white/70 hover:bg-white/8 hover:text-sky"}`}>{item.label}</a>;
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={profile.cv} download className="hidden min-h-12 items-center gap-2.5 rounded-xl bg-blue px-5 text-sm font-semibold text-white transition-colors hover:bg-[#397cff] sm:inline-flex xl:min-h-14 xl:px-6 xl:text-base 2xl:min-h-15 2xl:px-7 2xl:text-lg">
              {interfaceLabels.downloadCv}<Download className="size-4 xl:size-[1.125rem]" aria-hidden="true" />
            </a>
            <button type="button" aria-label={menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-11 place-items-center rounded-xl border border-white/18 text-white xl:hidden">
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <nav aria-label={interfaceLabels.mobileNavigation} className="fixed inset-0 z-40 overflow-y-auto bg-blue-deep px-6 pt-28 pb-8 text-white xl:hidden">
          <div className="mx-auto max-w-3xl">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} aria-current={index === activeIndex ? "page" : undefined} onClick={(event) => navigate(event, index)} className={`grid grid-cols-[38px_1fr] gap-4 border-b py-4 ${index === activeIndex ? "border-sky text-sky" : "border-white/15"}`}>
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
    <section id="accueil" aria-labelledby="hero-title" className="panel-section blueprint-grid relative isolate overflow-hidden bg-blue-deep pt-32 pb-20 text-white sm:pt-36 lg:pt-40">
      <div aria-hidden="true" className="ambient-orb absolute -top-24 -left-24 size-80 rounded-full bg-blue/28 blur-3xl" />
      <div aria-hidden="true" className="ambient-orb-delayed absolute right-[4%] bottom-[5%] size-72 rounded-full bg-sky/14 blur-3xl" />
      <div className="mx-auto grid max-w-[1380px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
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

        <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto w-full max-w-[min(440px,45vh)] lg:mx-0 lg:ml-auto">
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
    <section id="a-propos" aria-labelledby="about-title" className="panel-section soft-grid scroll-mt-28 bg-blue-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.about.index} title={sectionContent.about.title} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <Reveal>
            {profile.summary.slice(1).map((summary, index) => (
              <p key={summary} className={`max-w-sm text-lg leading-8 text-white/60 ${index > 0 ? "mt-4" : ""}`}>{summary}</p>
            ))}
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-blue uppercase"><MapPin className="size-4" aria-hidden="true" />{profile.location} · {profile.workMode}</p>
          </Reveal>
          <Reveal>
            <h3 id="about-title" className="text-[clamp(2.2rem,3.8vw,4rem)] leading-[1.04] font-medium tracking-[-0.05em] text-white">{interfaceLabels.profileStatementLead} <span className="font-serif font-normal text-sky italic">{interfaceLabels.profileStatementAccent}</span></h3>
            <ul className="mt-9 flex flex-wrap gap-2">
              {profileFocus.map((focus, index) => (
                <motion.li key={focus} whileHover={{ y: -2 }} className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-blue-deep/55 px-4 py-2.5">
                  <span className="font-mono text-[0.55rem] text-sky">0{index + 1}</span><span className="text-sm font-semibold text-white">{focus}</span>
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
    <section id="experiences" aria-labelledby="experience-title" className="panel-section blueprint-grid scroll-mt-28 bg-[#0a2a57] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.experience.index} title={sectionContent.experience.title} intro={interfaceLabels.experienceIntro} />
        <h3 id="experience-title" className="sr-only">{sectionContent.experience.title}</h3>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/12 bg-blue-deep/65 shadow-[0_16px_45px_rgba(4,17,38,0.22)] backdrop-blur-sm">
          {experiences.map((experience, index) => (
            <article key={`${experience.company}-${experience.period}`} className="border-b border-white/10 last:border-b-0">
              <button
                type="button"
                aria-expanded={openExperience === index}
                aria-controls={`experience-details-${index}`}
                onClick={() => setOpenExperience((current) => current === index ? null : index)}
                className="group grid w-full gap-5 p-5 text-left transition-colors hover:bg-blue/10 sm:grid-cols-[50px_0.8fr_1.2fr_auto] sm:items-center sm:p-6"
              >
                <span className="font-mono text-[0.58rem] text-sky">0{index + 1}</span>
                <div><p className="text-[0.62rem] font-semibold tracking-[0.1em] text-sky uppercase">{experience.company}</p><p className="mt-1 text-xs text-white/42">{experience.period}</p></div>
                <div><h3 className="text-xl font-semibold tracking-[-0.025em] text-white">{experience.role}</h3><p className="mt-1 flex items-center gap-1.5 text-xs text-white/42"><MapPin className="size-3 text-sky" aria-hidden="true" />{experience.location}</p></div>
                <span className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.06em] text-sky uppercase">
                  <span className="hidden lg:inline">{openExperience === index ? interfaceLabels.hideMissions : interfaceLabels.showMissions}</span>
                  <ChevronDown className={`size-4 transition-transform duration-300 ${openExperience === index ? "rotate-180" : ""}`} aria-hidden="true" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openExperience === index ? (
                  <motion.div id={`experience-details-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <ul className="grid gap-x-10 gap-y-3 border-t border-white/10 bg-blue/8 px-5 py-6 sm:grid-cols-2 sm:px-6">
                      {experience.missions.map((mission) => <li key={mission} className="grid grid-cols-[9px_1fr] gap-3 text-sm leading-6 text-white/62 before:mt-[0.65rem] before:size-1.5 before:rounded-full before:bg-sky">{mission}</li>)}
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
    <section id="competences" aria-labelledby="skills-title" className="panel-section blueprint-grid scroll-mt-28 bg-blue-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.skills.index} title={sectionContent.skills.title} intro={interfaceLabels.skillsIntro} />
        <h3 id="skills-title" className="sr-only">{sectionContent.skills.title}</h3>
        <div className="mt-12 grid border-t border-white/15 lg:grid-cols-2 lg:gap-x-12">
          {skills.map((category, index) => (
            <Reveal key={category.name}>
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
    <section id="projets" aria-labelledby="projects-title" className="panel-section soft-grid scroll-mt-28 bg-blue-dark py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-6 rounded-[2rem] border border-white/12 bg-blue-deep/60 p-7 shadow-[0_16px_45px_rgba(4,17,38,0.2)] sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div><p className="font-mono text-[0.62rem] tracking-[0.14em] text-sky uppercase">{sectionContent.projects.index} · {interfaceLabels.comingSoon}</p><h2 id="projects-title" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">{interfaceLabels.projectsSoonTitle}</h2></div>
          <p className="max-w-xl text-base text-white/58 lg:justify-self-end">{interfaceLabels.projectsSoonMessage}</p>
        </Reveal>
      </div>
    </section>
  );
}

function JapanTravel() {
  return (
    <section id="journal" aria-labelledby="japan-travel-title" className="panel-section blueprint-grid scroll-mt-28 bg-blue-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">{sectionContent.journal.index} · {japanTravel.category}</p><h2 id="japan-travel-title" className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.9] font-semibold tracking-[-0.065em]">{japanTravel.title}</h2></div>
          <div className="lg:justify-self-end"><p className="font-mono text-[0.62rem] tracking-[0.12em] text-sky uppercase">{japanTravel.meta}</p><p className="mt-3 max-w-lg text-base leading-7 text-white/55">{japanTravel.intro}</p></div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          {japanTravel.photos.map((photo, index) => (
            <Reveal key={photo.src} className={index === 0 ? "lg:mt-12" : ""}>
              <motion.figure whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="group overflow-hidden rounded-[2rem] border border-white/12 bg-blue-dark p-2">
                <div className={`relative overflow-hidden rounded-[1.55rem] ${index === 0 ? "aspect-[3/4] lg:aspect-auto lg:h-[clamp(18rem,38vh,28rem)]" : "aspect-[4/5] lg:aspect-auto lg:h-[clamp(22rem,48vh,34rem)]"}`}>
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
    <section id="formations" aria-labelledby="education-title" className="panel-section blueprint-grid scroll-mt-28 bg-[#0a2a57] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index={sectionContent.education.index} title={sectionContent.education.title} />
        <h3 id="education-title" className="sr-only">{sectionContent.education.title}</h3>
        <div className="mt-14 border-t border-white/15">
          {education.map((item, index) => (
            <Reveal key={item.degree}>
              <article className="grid gap-5 border-b border-white/15 py-8 transition-[padding,background-color] hover:bg-blue/10 sm:grid-cols-[70px_1fr_180px] sm:gap-8 sm:hover:px-5">
                <span className="font-mono text-[0.6rem] text-sky">0{index + 1}</span>
                <div><p className="text-xs font-semibold tracking-[0.1em] text-sky uppercase">{item.period}</p><h3 className="mt-3 max-w-3xl text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">{item.degree}</h3><p className="mt-3 text-sm text-white/52">{item.school}</p></div>
                <p className="flex items-center gap-2 text-sm text-white/48 sm:justify-end"><MapPin className="size-4 text-sky" aria-hidden="true" />{item.location}</p>
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
    <section id="contact" aria-labelledby="contact-title" className="panel-section blueprint-grid relative scroll-mt-28 bg-blue-dark py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-[1380px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <Reveal>
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky uppercase">{sectionContent.contact.index} · {interfaceLabels.contactKicker}</p>
          <h2 id="contact-title" className="mt-7 text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.78] font-semibold tracking-[-0.08em]">{contactLead}<span className="block font-serif font-normal text-sky italic">{contactAccent}</span></h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-white/55">{interfaceLabels.contactIntro}</p>
        </Reveal>
        <Reveal className="self-end">
          <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-5 rounded-2xl bg-blue p-5 text-lg font-semibold transition-colors hover:bg-[#397cff] sm:text-xl"><span className="overflow-wrap-anywhere">{profile.email}</span><Mail className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
          <div className="mt-5 border-t border-white/15">
            {contactItems.map((item) => {
              const content = <><span className="text-[0.62rem] tracking-[0.1em] text-white/40 uppercase">{item.label}</span><span className="text-right text-sm text-white/70">{item.value}</span></>;
              const className = "grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-white/15 py-4";
              return item.href ? <a key={item.kind} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={`${className} transition-colors hover:text-sky`}>{content}</a> : <div key={item.kind} className={className}>{content}</div>;
            })}
          </div>
        </Reveal>
      </div>
      <footer className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-blue-deep/75 py-5 text-white/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 px-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><p>{footerContent.identity}</p><a href="#accueil" className="inline-flex items-center gap-2 transition-colors hover:text-sky">{interfaceLabels.backToTop}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></div>
      </footer>
    </section>
  );
}

type SectionNavigatorProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
};

function SectionNavigator({ activeIndex, onNavigate }: SectionNavigatorProps) {
  const previousIndex = activeIndex - 1;
  const nextIndex = activeIndex + 1;

  return (
    <nav aria-label={interfaceLabels.sectionNavigation} className="fixed right-4 bottom-4 left-4 z-40 flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-blue-dark/92 p-2 shadow-[0_12px_40px_rgba(4,17,38,0.32)] backdrop-blur-xl sm:right-auto sm:left-1/2 sm:-translate-x-1/2">
      <button type="button" aria-label={interfaceLabels.previousSection} disabled={previousIndex < 0} onClick={() => onNavigate(previousIndex)} className="grid size-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:border-sky hover:text-sky disabled:pointer-events-none disabled:opacity-25">
        <ArrowLeft className="size-4" aria-hidden="true" />
      </button>
      <div aria-live="polite" className="min-w-28 px-2 text-center">
        <p className="font-mono text-[0.58rem] tracking-[0.12em] text-sky uppercase">{String(activeIndex + 1).padStart(2, "0")} / {String(navigation.length).padStart(2, "0")}</p>
        <p className="mt-0.5 text-sm font-semibold text-white">{navigation[activeIndex].label}</p>
      </div>
      <button type="button" aria-label={interfaceLabels.nextSection} disabled={nextIndex >= navigation.length} onClick={() => onNavigate(nextIndex)} className="grid size-11 place-items-center rounded-xl bg-blue text-white transition-colors hover:bg-[#397cff] disabled:pointer-events-none disabled:opacity-25">
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </nav>
  );
}

export function FluidPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [deckReady, setDeckReady] = useState(false);
  const activeIndexRef = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const navigateTo = useCallback((requestedIndex: number, updateHash = true) => {
    const nextIndex = Math.min(Math.max(requestedIndex, 0), navigation.length - 1);
    setDirection(nextIndex >= activeIndexRef.current ? 1 : -1);
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    if (updateHash && window.location.hash !== navigation[nextIndex].href) {
      window.history.pushState(null, "", navigation[nextIndex].href);
    }
  }, []);

  useEffect(() => {
    const syncWithHash = () => {
      const requestedIndex = navigation.findIndex((item) => item.href === window.location.hash);
      if (requestedIndex >= 0) navigateTo(requestedIndex, false);
    };

    const frame = window.requestAnimationFrame(() => {
      syncWithHash();
      setDeckReady(true);
    });
    window.addEventListener("hashchange", syncWithHash);
    window.addEventListener("popstate", syncWithHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncWithHash);
      window.removeEventListener("popstate", syncWithHash);
    };
  }, [navigateTo]);

  useEffect(() => {
    if (!deckReady) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [deckReady]);

  useEffect(() => {
    if (!deckReady) return;
    const navigateWithKeyboard = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, [contenteditable='true']")) return;

      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        navigateTo(activeIndexRef.current + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        navigateTo(activeIndexRef.current - 1);
      }
    };

    window.addEventListener("keydown", navigateWithKeyboard);
    return () => window.removeEventListener("keydown", navigateWithKeyboard);
  }, [deckReady, navigateTo]);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [activeIndex]);

  const panels = [
    <Hero key="accueil" />,
    <About key="a-propos" />,
    <Experience key="experiences" />,
    <Skills key="competences" />,
    <ProjectsSoon key="projets" />,
    <JapanTravel key="journal" />,
    <Education key="formations" />,
    <Contact key="contact" />,
  ];

  return (
    <>
      <Header activeIndex={activeIndex} onNavigate={navigateTo} />
      <main id="contenu" className={deckReady ? "relative h-dvh overflow-hidden" : undefined}>
        {deckReady ? (
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              ref={panelRef}
              key={navigation[activeIndex].href}
              role="region"
              aria-label={navigation[activeIndex].label}
              className="deck-panel absolute inset-0 overflow-x-hidden overflow-y-auto"
              initial={reduceMotion ? false : { opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: direction * -36 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {panels[activeIndex]}
            </motion.div>
          </AnimatePresence>
        ) : panels}
      </main>
      {deckReady ? <SectionNavigator activeIndex={activeIndex} onNavigate={navigateTo} /> : null}
    </>
  );
}
