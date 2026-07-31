"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import {
  contactItems,
  education,
  experiences,
  interfaceLabels,
  navigation,
  profile,
  profileFocus,
  sectionContent,
  skills,
} from "@/data/content";

type PanelHeadingProps = {
  index: string;
  label: string;
  dark?: boolean;
};

function PanelHeading({ index, label, dark = false }: PanelHeadingProps) {
  return (
    <div className={`flex items-center gap-4 border-b pb-5 ${dark ? "border-white/20" : "border-ink/20"}`}>
      <span className={`font-mono text-[0.62rem] ${dark ? "text-white/40" : "text-ink/40"}`}>
        {index}
      </span>
      <h2 className="text-xs font-normal tracking-[0.14em] uppercase">{label}</h2>
    </div>
  );
}

function HomePanel() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section id="accueil" aria-labelledby="home-title" className="panel-scroll h-full overflow-y-auto bg-canvas text-ink">
      <div className="relative grid min-h-full gap-10 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:p-12 xl:p-16">
        <div className="relative z-10 flex flex-col justify-between gap-14">
          <PanelHeading {...sectionContent.home} label={sectionContent.home.title} />
          <div>
            <p className="mb-7 flex items-center gap-3 text-[0.65rem] tracking-[0.14em] uppercase">
              <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
              {interfaceLabels.heroEyebrow}
            </p>
            <h1 id="home-title" className="text-[clamp(4.2rem,10vw,9.8rem)] leading-[0.74] font-semibold tracking-[-0.085em]">
              {firstName}
              <span className="block font-serif font-normal italic">{lastName}</span>
            </h1>
          </div>
          <div className="grid gap-6 border-t border-ink/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-lg leading-8 text-ink/65">{profile.summary[0]}</p>
            <p className="flex items-center gap-2 text-[0.65rem] tracking-[0.1em] text-ink/50 uppercase">
              <MapPin className="size-3.5 text-signal" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:justify-end">
          <div aria-hidden="true" className="absolute top-[7%] right-[8%] h-[78%] w-[72%] bg-ink" />
          <figure className="relative mr-[8%] w-[78%] border border-ink bg-paper p-2 sm:p-3">
            <div className="relative aspect-[3/4] overflow-hidden bg-signal">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 72vw, 30vw"
                className="object-cover object-bottom grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
            <figcaption className="flex justify-between gap-4 pt-3 font-mono text-[0.55rem] tracking-[0.1em] text-ink/55 uppercase">
              <span>{profile.title}</span>
              <span>{profile.location}</span>
            </figcaption>
          </figure>
          <span aria-hidden="true" className="absolute right-0 bottom-[8%] grid size-16 place-items-center rounded-full bg-signal font-mono text-[0.6rem] text-ink sm:size-20">
            {sectionContent.home.index}/{String(navigation.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function AboutPanel() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="panel-scroll h-full overflow-y-auto bg-signal text-ink">
      <div className="grid min-h-full gap-12 p-6 sm:p-9 lg:grid-cols-[0.45fr_1.55fr] lg:p-12 xl:p-16">
        <div className="flex flex-col justify-between gap-10">
          <PanelHeading {...sectionContent.about} label={sectionContent.about.title} />
          <p className="max-w-xs text-sm leading-7 text-ink/60">{profile.summary[1]}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 id="about-title" className="text-[clamp(2.8rem,6.4vw,7rem)] leading-[0.94] font-medium tracking-[-0.07em]">
            {interfaceLabels.profileStatementLead}
            <span className="font-serif font-normal italic"> {interfaceLabels.profileStatementAccent}</span>
          </h2>
          <ul className="mt-14 grid border-t border-ink/25 sm:grid-cols-3">
            {profileFocus.map((focus, index) => (
              <li key={focus} className="border-b border-ink/25 py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                <span className="font-mono text-[0.58rem] text-ink/45">0{index + 1}</span>
                <p className="mt-3 text-lg">{focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperiencePanel() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const experience = experiences[selected];

  return (
    <section id="experiences" aria-labelledby="experience-title" className="panel-scroll h-full overflow-y-auto bg-ink text-paper">
      <div className="min-h-full p-6 sm:p-9 lg:p-12 xl:p-16">
        <PanelHeading {...sectionContent.experience} label={sectionContent.experience.title} dark />
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div>
            <h2 id="experience-title" className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">{sectionContent.experience.title}</h2>
            <p className="mt-4 text-sm leading-6 text-white/45">{interfaceLabels.selectExperience}</p>
            <div className="mt-8 border-t border-white/20" role="tablist" aria-label={interfaceLabels.selectExperience}>
              {experiences.map((item, index) => (
                <button
                  key={`${item.company}-${item.period}`}
                  type="button"
                  role="tab"
                  aria-selected={selected === index}
                  onClick={() => setSelected(index)}
                  className={`grid w-full grid-cols-[32px_1fr] gap-3 border-b border-white/20 py-4 text-left transition-colors ${selected === index ? "text-signal" : "text-white/55 hover:text-white"}`}
                >
                  <span className="font-mono text-[0.58rem]">0{index + 1}</span>
                  <span className="text-sm">{item.company}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={`${experience.company}-${experience.period}`}
              role="tabpanel"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="border-l border-signal pl-6 sm:pl-9"
            >
              <p className="font-mono text-[0.62rem] tracking-[0.12em] text-signal uppercase">{experience.period}</p>
              <h3 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.9] font-medium tracking-[-0.065em]">{experience.role}</h3>
              <p className="mt-6 flex items-center gap-2 text-sm text-white/45"><MapPin className="size-3.5 text-signal" aria-hidden="true" />{experience.location}</p>
              <ul className="mt-9 grid gap-x-10 gap-y-4 xl:grid-cols-2">
                {experience.missions.map((mission, index) => (
                  <li key={mission} className="grid grid-cols-[24px_1fr] gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-white/62">
                    <span className="font-mono text-[0.55rem] text-signal">{String(index + 1).padStart(2, "0")}</span>
                    {mission}
                  </li>
                ))}
              </ul>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillsPanel() {
  return (
    <section id="competences" aria-labelledby="skills-title" className="panel-scroll h-full overflow-y-auto bg-paper text-ink">
      <div className="min-h-full p-6 sm:p-9 lg:p-12 xl:p-16">
        <PanelHeading {...sectionContent.skills} label={sectionContent.skills.title} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <h2 id="skills-title" className="text-[clamp(3.5rem,7vw,7rem)] leading-[0.82] font-semibold tracking-[-0.075em]">{interfaceLabels.skillsHeadingLead}<br /><span className="font-serif font-normal text-signal italic">{interfaceLabels.skillsHeadingAccent}</span></h2>
            <p className="mt-8 max-w-sm text-sm leading-7 text-ink/55">{interfaceLabels.skillsIntro}</p>
          </div>
          <div className="grid border-t border-l border-ink/20 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((category, index) => (
              <article key={category.name} className="min-h-48 border-r border-b border-ink/20 p-5 sm:min-h-56">
                <span className="font-mono text-[0.58rem] text-signal">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-medium">{category.name}</h3>
                <ul className="mt-5 space-y-2 text-sm text-ink/52">
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SoonPanelProps = {
  id: string;
  headingId: string;
  index: string;
  label: string;
  title: string;
  message: string;
};

function SoonPanel({ id, headingId, index, label, title, message }: SoonPanelProps) {
  return (
    <section id={id} aria-labelledby={headingId} className="panel-scroll h-full overflow-y-auto bg-canvas text-ink">
      <div className="relative flex min-h-full flex-col p-6 sm:p-9 lg:p-12 xl:p-16">
        <PanelHeading index={index} label={label} />
        <div className="relative z-10 my-auto py-14">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-signal uppercase">{interfaceLabels.comingSoon}</p>
          <h2 id={headingId} className="mt-6 max-w-5xl text-[clamp(3.8rem,9vw,9rem)] leading-[0.82] font-semibold tracking-[-0.08em]">{title}</h2>
          <p className="mt-9 max-w-xl border-l border-signal pl-5 text-lg leading-8 text-ink/55">{message}</p>
        </div>
        <span aria-hidden="true" className="ghost-index absolute right-5 bottom-0 font-mono text-[clamp(10rem,28vw,28rem)] leading-[0.72] text-ink/12 sm:right-10">{index}</span>
      </div>
    </section>
  );
}

function EducationPanel() {
  return (
    <section id="formations" aria-labelledby="education-title" className="panel-scroll h-full overflow-y-auto bg-signal text-ink">
      <div className="min-h-full p-6 sm:p-9 lg:p-12 xl:p-16">
        <PanelHeading {...sectionContent.education} label={sectionContent.education.title} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <h2 id="education-title" className="text-[clamp(3.5rem,7vw,7rem)] leading-[0.82] font-semibold tracking-[-0.075em]">{interfaceLabels.educationHeadingLead}<br /><span className="font-serif font-normal italic">{interfaceLabels.educationHeadingAccent}</span></h2>
          <div className="border-t border-ink/25">
            {education.map((item, index) => (
              <article key={item.degree} className="grid gap-5 border-b border-ink/25 py-8 sm:grid-cols-[50px_1fr]">
                <span className="font-mono text-[0.58rem] text-ink/45">0{index + 1}</span>
                <div>
                  <p className="text-[0.65rem] tracking-[0.12em] uppercase">{item.period}</p>
                  <h3 className="mt-4 max-w-3xl text-2xl leading-tight font-medium tracking-[-0.035em] sm:text-3xl">{item.degree}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/58">{item.school} · {item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPanel() {
  const [contactLead, contactAccent] = interfaceLabels.contactHeadline.split(" ");

  return (
    <section id="contact" aria-labelledby="contact-title" className="panel-scroll h-full overflow-y-auto bg-ink text-paper">
      <div className="grid min-h-full gap-12 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:p-12 xl:p-16">
        <div className="flex flex-col justify-between gap-12">
          <PanelHeading {...sectionContent.contact} label={sectionContent.contact.title} dark />
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-signal uppercase">{interfaceLabels.contactKicker}</p>
            <h2 id="contact-title" className="mt-6 text-[clamp(4rem,9vw,9rem)] leading-[0.75] font-semibold tracking-[-0.085em]">{contactLead}<br /><span className="font-serif font-normal text-signal italic">{contactAccent}</span></h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-white/50">{interfaceLabels.contactIntro}</p>
        </div>
        <div className="flex flex-col justify-end">
          <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-5 border-y border-white/20 py-7 text-xl transition-colors hover:text-signal sm:text-2xl">
            <span className="overflow-wrap-anywhere">{profile.email}</span>
            <Mail className="size-5 shrink-0" aria-hidden="true" />
          </a>
          <div className="mt-8 border-t border-white/15">
            {contactItems.slice(1).map((item) => {
              const content = <><span className="text-[0.6rem] tracking-[0.12em] text-white/35 uppercase">{item.label}</span><span className="text-right text-sm text-white/65">{item.value}</span></>;
              const className = "grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-white/15 py-4";
              return item.href ? <a key={item.kind} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={`${className} transition-colors hover:text-signal`}>{content}</a> : <div key={item.kind} className={className}>{content}</div>;
            })}
          </div>
          <a href={profile.cv} download className="mt-8 inline-flex items-center justify-center gap-3 bg-signal px-5 py-4 text-xs font-medium tracking-[0.1em] text-ink uppercase transition-colors hover:bg-paper">
            {interfaceLabels.downloadCv}<Download className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function renderPanel(index: number) {
  switch (index) {
    case 0: return <HomePanel />;
    case 1: return <AboutPanel />;
    case 2: return <ExperiencePanel />;
    case 3: return <SkillsPanel />;
    case 4: return <SoonPanel id="projets" headingId="projects-title" {...sectionContent.projects} label={sectionContent.projects.title} title={interfaceLabels.projectsSoonTitle} message={interfaceLabels.projectsSoonMessage} />;
    case 5: return <SoonPanel id="journal" headingId="blog-title" {...sectionContent.journal} label={sectionContent.journal.title} title={interfaceLabels.blogSoonTitle} message={interfaceLabels.blogSoonMessage} />;
    case 6: return <EducationPanel />;
    default: return <ContactPanel />;
  }
}

export function PortfolioShell() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const selectPanel = useCallback((requestedIndex: number) => {
    const nextIndex = (requestedIndex + navigation.length) % navigation.length;
    setDirection(nextIndex >= activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
    setMenuOpen(false);
    window.history.replaceState(null, "", navigation[nextIndex].href);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key === "ArrowRight") selectPanel(activeIndex + 1);
      if (event.key === "ArrowLeft") selectPanel(activeIndex - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, selectPanel]);

  const activeItem = navigation[activeIndex];
  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(navigation.length).padStart(2, "0");

  return (
    <div className="h-dvh overflow-hidden bg-ink text-paper">
      <a href="#panel-content" className="fixed top-2 left-2 z-[100] -translate-y-20 bg-signal px-4 py-2 text-xs text-ink transition-transform focus:translate-y-0">
        {interfaceLabels.skipToContent}
      </a>

      <header className="flex h-17 items-center justify-between border-b border-white/15 px-5 sm:px-7">
        <button type="button" onClick={() => selectPanel(0)} className="flex items-center gap-3 text-left">
          <span className="grid size-8 place-items-center border border-signal font-serif text-sm text-signal italic">{profile.initials}</span>
          <span className="hidden text-[0.65rem] tracking-[0.12em] uppercase sm:inline">{profile.title}</span>
        </button>
        <div className="flex items-center gap-5">
          <p className="font-mono text-[0.6rem] tracking-[0.1em] text-white/45 uppercase">
            <span className="text-signal">{currentNumber}</span> / {totalNumber} · {activeItem.label}
          </p>
          <a href={profile.cv} download className="hidden items-center gap-2 text-[0.62rem] tracking-[0.1em] text-white/55 uppercase transition-colors hover:text-white sm:flex">
            CV <Download className="size-3.5" aria-hidden="true" />
          </a>
          <button type="button" aria-label={menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-9 place-items-center md:hidden">
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className="grid h-[calc(100dvh-4.25rem)] md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden border-r border-white/15 px-5 py-7 md:flex md:flex-col">
          <nav aria-label={interfaceLabels.sectionNavigation} className="space-y-1">
            {navigation.map((item, index) => (
              <button
                key={item.href}
                type="button"
                aria-current={activeIndex === index ? "page" : undefined}
                onClick={() => selectPanel(index)}
                className={`group grid w-full grid-cols-[28px_1fr_auto] items-center gap-3 py-2.5 text-left transition-colors ${activeIndex === index ? "text-white" : "text-white/38 hover:text-white/75"}`}
              >
                <span className={`font-mono text-[0.55rem] ${activeIndex === index ? "text-signal" : ""}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm">{item.label}</span>
                <span className={`h-px transition-[width,background-color] ${activeIndex === index ? "w-7 bg-signal" : "w-0 bg-white/30 group-hover:w-4"}`} aria-hidden="true" />
              </button>
            ))}
          </nav>
          <div className="mt-auto border-t border-white/15 pt-5">
            <p className="font-mono text-[0.55rem] tracking-[0.1em] text-white/30 uppercase">{interfaceLabels.keyboardHint}</p>
            <p className="mt-3 flex items-center gap-2 text-[0.62rem] text-white/45"><span className="size-1.5 rounded-full bg-signal" />{interfaceLabels.availability}</p>
          </div>
        </aside>

        <main className="grid min-h-0 grid-rows-[minmax(0,1fr)_64px]">
          <div id="panel-content" tabIndex={-1} className="relative min-h-0 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeItem.href}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, x: direction * 34 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderPanel(activeIndex)}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex items-center justify-between border-t border-white/15 bg-ink px-5 sm:px-7">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/8">
              <span className="block h-full bg-signal transition-[width] duration-500" style={{ width: `${((activeIndex + 1) / navigation.length) * 100}%` }} />
            </div>
            <button type="button" aria-label={interfaceLabels.previousSection} onClick={() => selectPanel(activeIndex - 1)} className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.1em] text-white/55 uppercase transition-colors hover:text-white">
              <ChevronLeft className="size-4" aria-hidden="true" />{interfaceLabels.previousSection}
            </button>
            <p className="hidden font-mono text-[0.58rem] tracking-[0.12em] text-white/28 uppercase sm:block">{profile.name}</p>
            <button type="button" aria-label={interfaceLabels.nextSection} onClick={() => selectPanel(activeIndex + 1)} className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.1em] text-white/55 uppercase transition-colors hover:text-white">
              {interfaceLabels.nextSection}<ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </main>
      </div>

      {menuOpen ? (
        <nav aria-label={interfaceLabels.mobileNavigation} className="fixed inset-x-0 top-17 bottom-0 z-40 overflow-y-auto bg-ink px-5 py-6 md:hidden">
          {navigation.map((item, index) => (
            <button key={item.href} type="button" onClick={() => selectPanel(index)} className={`grid w-full grid-cols-[35px_1fr] gap-4 border-b border-white/15 py-4 text-left ${activeIndex === index ? "text-signal" : "text-white/65"}`}>
              <span className="font-mono text-[0.58rem]">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-2xl font-medium tracking-[-0.035em]">{item.label}</span>
            </button>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
