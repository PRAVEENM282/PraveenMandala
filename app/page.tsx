import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechMarquee />
      <Contact />
      <Footer />
    </main>
  );
}
