"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { HoverGlowCard } from "@/components/aceternity/hover-glow-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/site";
import { cn } from "@/lib/utils";

const layoutClasses = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3"
];

export function Projects() {
  return (
    <SectionShell id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Premium builds across AI, systems, and real-time products"
          description="Bento-style showcase with spotlight hover effects, motion reveals, and glass surfaces."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={cn("md:col-span-1", layoutClasses[index])}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <HoverGlowCard className="h-full border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="safe-text text-xl font-semibold leading-7 text-slate-900">{project.title}</h3>
                      <div className="h-10 w-10 shrink-0 rounded-full border border-slate-200 bg-gradient-to-br from-blue-200 to-transparent" />
                    </div>
                    <p className="safe-text text-sm leading-6 text-slate-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={14} /> GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </HoverGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
