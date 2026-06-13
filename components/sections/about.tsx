"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { siteConfig } from "@/constants/site";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-32 md:py-48 px-6 flex items-center justify-center z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: textY }}
          className="md:col-span-7 flex flex-col gap-12"
        >
          <div className="flex items-center gap-6">
            <span className="text-xs tracking-widest uppercase text-muted font-medium">01</span>
            <div className="h-[1px] w-12 bg-muted/30" />
            <span className="text-xs tracking-widest uppercase text-muted font-medium">Philosophy</span>
          </div>

          <div className="editorial-text text-3xl md:text-5xl font-light leading-tight tracking-tight text-ink">
            <RevealText 
              text={siteConfig.description} 
            />
          </div>

          <div className="editorial-text text-lg md:text-xl text-muted font-light leading-relaxed max-w-lg mt-8">
            <p className="mb-6">
              With a background in ML engineering and full-stack development, I build living architectures. My work focuses on performance, generative design, and creating experiences that leave a lasting impression.
            </p>
            <p>
              It’s not just about writing code. It’s about breathing life into ideas.
            </p>
          </div>
        </motion.div>

        {/* Typographic Visual Area */}
        <motion.div 
          className="md:col-span-5 flex flex-col justify-center h-full w-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-md p-10 md:p-16 border border-ink/5"
          style={{ y: imageY, scale }}
        >
          <h3 className="text-xs tracking-widest uppercase text-muted font-medium mb-12">Core Principles</h3>
          
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-vibrantOrange font-space text-lg font-medium">01. Intentional</span>
              <p className="editorial-text text-ink/70 mt-2 font-light">Every pixel and interaction must serve a distinct purpose. No decorative noise.</p>
            </div>
            
            <div className="h-[1px] w-full bg-ink/5" />
            
            <div>
              <span className="text-vibrantOrange font-space text-lg font-medium">02. Performant</span>
              <p className="editorial-text text-ink/70 mt-2 font-light">Scalability isn&apos;t just for backends. The interface must be fluid, fast, and light.</p>
            </div>
            
            <div className="h-[1px] w-full bg-ink/5" />
            
            <div>
              <span className="text-vibrantOrange font-space text-lg font-medium">03. Resilient</span>
              <p className="editorial-text text-ink/70 mt-2 font-light">Systems architected to gracefully handle failure and adapt to user needs organically.</p>
            </div>
          </div>
          
          {/* Subtle noise over the typographic area */}
          <div className="absolute inset-0 noise-bg opacity-[0.02] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
