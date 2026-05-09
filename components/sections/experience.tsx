"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { experience } from "@/constants/site";

export function Experience() {
  return (
    <SectionShell id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Shipping production-ready systems in real-world teams"
          description="Timeline of hands-on engineering work across scalable backend systems and product delivery."
        />
        <div className="relative ml-4 border-l border-slate-200 pl-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              className="relative mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="absolute -left-[38px] top-8 h-4 w-4 rounded-full bg-blue-600 shadow-glow" />
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.period}</p>
                  <p className="text-xs text-slate-500">{item.company}</p>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm text-slate-600">{item.summary}</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
