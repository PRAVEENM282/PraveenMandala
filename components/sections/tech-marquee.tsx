"use client";

import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { MagicMarquee } from "@/components/magic/marquee";
import { techStack } from "@/constants/site";

export function TechMarquee() {
  return (
    <SectionShell id="stack" className="pt-10">
      <div className="container">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Trusted tools for futuristic product builds"
          description="Infinite marquee highlighting the platforms, frameworks, and systems behind every delivery."
          align="center"
        />
        <div className="space-y-6">
          <MagicMarquee items={techStack} />
          <MagicMarquee items={techStack.slice().reverse()} reverse />
        </div>
      </div>
    </SectionShell>
  );
}
