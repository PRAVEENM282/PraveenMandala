"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Spotlight } from "@/components/aceternity/spotlight";
import { Aurora } from "@/components/magic/aurora";
import { AnimatedGrid } from "@/components/magic/animated-grid";
import { Particles } from "@/components/magic/particles";
import { SectionShell } from "@/components/common/section-shell";
import { TypingText } from "@/components/common/typing-text";
import { TiltCard } from "@/components/common/tilt-card";
import { Magnetic } from "@/components/common/magnetic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig, socialLinks } from "@/constants/site";

const roleWords = ["AI Engineer", "Full Stack Developer", "Systems Engineer"];

export function Hero() {
  return (
    <SectionShell id="home" className="pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-white opacity-90" />
        <Spotlight />
        <Aurora />
        <AnimatedGrid className="opacity-40" />
        <Particles />
      </div>
      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-12">
        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="glow" className="uppercase tracking-[0.28em]">
              Available for impactful builds
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="section-title text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name.toUpperCase()}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 sm:text-xl">
            {siteConfig.subtitle}
          </motion.p>
          <motion.p variants={fadeUp} className="max-w-xl text-sm text-slate-600 sm:text-base">
            {siteConfig.heroSubheadline}
          </motion.p>
          <motion.div variants={fadeUp} className="safe-text text-base leading-7 text-slate-700 sm:text-lg">
            <span className="mr-2 text-slate-500">Currently shipping as</span>
            <TypingText words={roleWords} className="gradient-text font-semibold" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="secondary" size="lg">
                <a href="/PRAVEENMANDALA.pdf" download>
                  Download Resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </Magnetic>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon =
                link.label === "GitHub"
                  ? FaGithub
                  : link.label === "LinkedIn"
                    ? FaLinkedinIn
                    : link.label === "Instagram"
                      ? FaInstagram
                      : Mail;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
        <Parallax speed={-4} className="relative w-full max-w-xl lg:justify-self-end">
          <TiltCard className="glass rounded-lg p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white/70 p-4 sm:p-6">
              <div className="absolute inset-0 bg-hero-glow opacity-60" />
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Profile</p>
                    <p className="text-lg font-semibold text-slate-900">Praveen Mandala</p>
                  </div>
                  <Badge>AI Systems</Badge>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Image
                    src="/profile.svg"
                    alt="Praveen Mandala"
                    width={120}
                    height={120}
                    className="h-28 w-28 shrink-0 rounded-lg border border-slate-200 object-cover sm:h-[120px] sm:w-[120px]"
                    priority
                  />
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>Focused on scalable AI systems and real-time infrastructure.</p>
                    <p className="text-slate-500">Location: {siteConfig.location}</p>
                  </div>
                </div>
                <div className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>Current Focus</span>
                    <span className="safe-text text-blue-600">MLOps + Cloud Infra</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>Strengths</span>
                    <span className="safe-text text-blue-600">AI Systems, Backend, UX</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>Availability</span>
                    <span className="safe-text text-blue-600">Open for 2026 roles</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Parallax>
      </div>
    </SectionShell>
  );
}
