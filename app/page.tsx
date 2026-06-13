import nextDynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

const About = nextDynamic(() => import("@/components/sections/about").then((mod) => mod.About));
const Skills = nextDynamic(() => import("@/components/sections/skills").then((mod) => mod.Skills));
const Experience = nextDynamic(() =>
  import("@/components/sections/experience").then((mod) => mod.Experience)
);
const Projects = nextDynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.Projects)
);
const Contact = nextDynamic(() => import("@/components/sections/contact").then((mod) => mod.Contact));

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden w-full">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
