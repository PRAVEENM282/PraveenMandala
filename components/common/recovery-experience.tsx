"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, RotateCcw, TriangleAlert } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/constants/site";

const ErrorSnake = dynamic(() => import("@/components/common/error-snake").then((module) => module.ErrorSnake), { ssr: false });

type RecoveryExperienceProps = {
  kind: "not-found" | "error";
  error?: Error;
  onRetry?: () => void;
};

export function RecoveryExperience({ kind, error, onRetry }: RecoveryExperienceProps) {
  const reducedMotion = useReducedMotion();
  const isError = kind === "error";

  return <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-background px-6 pb-12 pt-28 text-foreground sm:px-10 lg:pt-32" style={{ background: "var(--background, #fffdf8)", color: "var(--foreground, #1a1a1a)" }}>
    <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
    <motion.div initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : .45 }} className="page-shell relative w-full">
      <div className="flex items-center justify-between border-b border-border pb-5"><Link href="/#home" className="font-mono text-sm font-bold tracking-[-.12em]" aria-label={`${siteConfig.name}, return home`}>PM<span className="text-accent">.</span></Link><span className="font-mono text-[.625rem] uppercase tracking-[.16em] text-black/45">{isError ? "System fallback" : "Route monitor"}</span></div>
      <div className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-20 lg:py-28">
        <div>
          <motion.p initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : .08 }} className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">{isError ? "500 / graceful degradation" : "404 / route not found"}</motion.p>
          <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : .14 }} className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-7xl">{isError ? "The system hit an unexpected branch." : "This route drifted out of the system."}</motion.h1>
          <p className="mt-7 max-w-xl text-lg leading-7 text-black/60">{isError ? "The page could not complete its current operation, but the rest of the architecture is still standing." : "Nothing is listening at this address right now. Let’s route you back to something useful."}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><Link href="/#home" className="group inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-foreground"><ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" /> Return home</Link><Link href="/#projects" className="group inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">View projects <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
          {isError ? <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold"><button type="button" onClick={onRetry} className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"><RotateCcw aria-hidden="true" className="size-4" /> Retry operation</button><a href={`mailto:${siteConfig.email}?subject=Portfolio%20error%20report`} className="inline-flex items-center gap-2 text-black/55 transition-colors hover:text-foreground">Report issue <ArrowUpRight aria-hidden="true" className="size-4" /></a></div> : null}
        </div>
        <div className="relative">
          <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : .2, duration: reducedMotion ? 0 : .5 }} className="stage-surface relative overflow-hidden p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border pb-4"><span className="font-mono text-[.625rem] uppercase tracking-[.15em] text-black/45">{isError ? "Fallback node" : "Navigation node"}</span><TriangleAlert aria-hidden="true" className="size-4 text-accent" /></div>
            <div className="relative mt-6 min-h-44 overflow-hidden border border-border bg-background p-5"><div className="absolute inset-x-5 top-1/2 h-px bg-border" /><div className="absolute inset-y-5 left-1/2 w-px bg-border" /><motion.div animate={reducedMotion ? undefined : { x: [0, 10, 0], y: [0, -8, 0] }} transition={reducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 border border-accent bg-surface-strong p-2"><div className="flex h-full items-center justify-center border border-accent/50 font-mono text-[.55rem] uppercase tracking-[.1em] text-accent">{isError ? "retry" : "route"}</div></motion.div><span className="absolute left-5 top-5 font-mono text-[.55rem] uppercase tracking-[.12em] text-black/45">input</span><span className="absolute bottom-5 right-5 font-mono text-[.55rem] uppercase tracking-[.12em] text-black/45">output?</span></div>
            {isError ? <ErrorSnake /> : <div className="mt-5 border-t border-border pt-5"><p className="font-mono text-[.625rem] uppercase tracking-[.15em] text-black/45">Suggested next hop</p><p className="mt-2 text-xl font-medium tracking-[-.04em]">The project index is still online.</p></div>}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-4 font-mono text-[.625rem] uppercase tracking-[.14em] text-black/45"><span>PM / dependable systems</span><span>{isError ? "Recovery mode active" : "No route, no dead end"}</span></div>
    </motion.div>
  </main>;
}
