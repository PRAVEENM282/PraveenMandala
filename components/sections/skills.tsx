"use client";

import { Sparkles, Server, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Magnetic } from "@/components/common/magnetic";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants/site";
import { cn } from "@/lib/utils";

const iconMap = [Sparkles, Code2, Server];

export function Skills() {
  return (
    <SectionShell id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A precision stack for AI, cloud, and real-time systems"
          description="Vercel-inspired skill cards with animated gradients, hover glow, and magnetic interactions."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={skill.category}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-teal-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="safe-text text-xs uppercase tracking-[0.18em] text-slate-500">
                        {skill.category}
                      </p>
                      <p className="safe-text mt-2 text-base font-semibold leading-6 text-slate-900">
                        {skill.description}
                      </p>
                    </div>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Magnetic key={item}>
                        <Badge className="transition group-hover:border-blue-300">
                          {item}
                        </Badge>
                      </Magnetic>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.14em] text-slate-500">
                      <span>Proficiency</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div
                        className={cn(
                          "h-2 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400"
                        )}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
