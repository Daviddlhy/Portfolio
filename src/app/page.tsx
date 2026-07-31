import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { interfaceLabels } from "@/data/content";

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-brand px-4 py-2 font-semibold text-white transition-transform focus:translate-y-0"
      >
        {interfaceLabels.skipToContent}
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
