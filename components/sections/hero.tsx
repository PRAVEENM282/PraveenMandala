"use client";

import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { siteConfig, RESUME_URL } from "@/constants/site";
import { AmbientField } from "@/components/motion/ambient-field";
import { PointerDepth } from "@/components/motion/pointer-depth";
import { heroVariants, staggerContainer } from "@/components/motion/motion-config";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const nameY = useSpring(useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -90]), { stiffness: 90, damping: 25 });
  const nameOpacity = useTransform(scrollYProgress, [0, .72], [1, .2]);
  return <section id="home" ref={heroRef} className="relative isolate min-h-[100svh] scroll-mt-16 overflow-hidden border-b border-border pt-28 sm:pt-36 lg:pt-40"><AmbientField /><div className="page-shell relative flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-14 sm:pb-20"><motion.div variants={staggerContainer(.1, .12)} initial={reducedMotion ? false : "hidden"} animate="visible">
    <motion.p variants={heroVariants} className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">01 / engineering portfolio</motion.p>
    <PointerDepth className="mt-8 w-fit max-w-full"><motion.h1 variants={heroVariants} style={reducedMotion ? undefined : { y: nameY, opacity: nameOpacity }} className="display-title max-w-[10ch] text-[clamp(4rem,14.5vw,13.5rem)] uppercase text-foreground"><span className="block">Praveen</span><span className="ml-[.11em] block text-foreground/65 sm:ml-[.2em]">Mandala</span></motion.h1></PointerDepth>
    <motion.div variants={heroVariants} className="mt-10 max-w-3xl"><p className="text-[clamp(1.75rem,3.8vw,3.5rem)] font-medium leading-[.98] tracking-tight">AI Engineer <span className="text-accent">&amp;</span> Backend Engineer</p><p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">{siteConfig.heroSubheadline}</p></motion.div>
    <motion.div variants={heroVariants} className="mt-9 flex flex-wrap items-center gap-5"><a href="#projects" className="group inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-foreground">View projects <ArrowDown aria-hidden="true" className="size-4 transition-transform group-hover:translate-y-1" /></a><a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground" aria-label="Open resume in a new tab">Resume <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></motion.div>
  </motion.div><div className="mt-auto grid gap-5 border-t border-border pt-4 text-sm text-black/55 sm:grid-cols-3"><div><span className="mb-2 block font-mono text-[.6875rem] uppercase tracking-[.14em] text-muted">Focus</span>AI infrastructure &amp; backend systems</div><div><span className="mb-2 block font-mono text-[.6875rem] uppercase tracking-[.14em] text-muted">Based in</span>{siteConfig.location}</div><div><span className="mb-2 block font-mono text-[.6875rem] uppercase tracking-[.14em] text-muted">Scroll to explore</span><span className="inline-flex items-center gap-2">Selected systems <span className="h-px w-8 bg-accent" /></span></div></div></div></section>;
}
