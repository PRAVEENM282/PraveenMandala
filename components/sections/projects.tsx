"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RevealText } from "@/components/ui/reveal-text";

import { projects } from "@/constants/site";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const panels = gsap.utils.toArray(".project-panel");

      // Horizontal Scroll animation
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1, // Smooth scrubbing
          snap: 1 / (panels.length - 1),
          end: () => "+=" + track.offsetWidth,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative h-screen bg-pureWhite overflow-hidden z-10">
      
      {/* Intro Overlay / Sticky Title */}
      <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20 pointer-events-none">
        <div className="flex items-center gap-6 mb-4">
          <span className="text-xs tracking-widest uppercase text-muted font-medium">02</span>
          <div className="h-[1px] w-12 bg-muted/30" />
          <span className="text-xs tracking-widest uppercase text-muted font-medium">Selected Works</span>
        </div>
        <h2 className="section-title text-4xl md:text-6xl text-ink font-light">Exhibits</h2>
      </div>

      {/* Horizontal Track */}
      <div ref={trackRef} className="flex h-full w-[300vw]">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-panel w-screen h-full flex flex-col justify-center px-6 md:px-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center w-full max-w-7xl mx-auto">
              
              {/* Image/Visual Area */}
              <div className="md:col-span-7 h-[50vh] md:h-[70vh] w-full rounded-sm overflow-hidden relative bg-card flex items-center justify-center">
                {/* Placeholder for project imagery - soft and warm */}
                <div className="absolute inset-0 bg-gradient-to-br from-softBeige to-warmYellow opacity-20 mix-blend-multiply" />
                <span className="text-ink/10 font-space text-[20vw] leading-none absolute -bottom-10 -right-10">0{index + 1}</span>
              </div>

              {/* Text Area */}
              <div className="md:col-span-5 flex flex-col gap-8">
                <div className="flex justify-between items-end border-b border-muted/20 pb-4">
                  <span className="text-xs tracking-widest uppercase text-muted">Project</span>
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs tracking-widest text-muted bg-muted/5 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="section-title text-5xl md:text-7xl font-light text-ink">
                  {project.title}
                </h3>
                
                <p className="editorial-text text-lg text-muted font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8 flex gap-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-ink font-medium hover:text-vibrantOrange transition-colors">
                    GitHub ↗
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-ink font-medium hover:text-vibrantOrange transition-colors">
                    Live Demo ↗
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
