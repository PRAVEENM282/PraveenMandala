"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { experience } from "@/constants/site";



export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-32 md:py-48 px-6 z-10 bg-pureWhite">
      
      <div className="max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-6 mb-4">
          <span className="text-xs tracking-widest uppercase text-muted font-medium">04</span>
          <div className="h-[1px] w-12 bg-muted/30" />
          <span className="text-xs tracking-widest uppercase text-muted font-medium">Journey</span>
        </div>
        <h2 className="section-title text-4xl md:text-6xl text-ink font-light">Experience</h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        
        {/* Animated SVG Timeline Path */}
        <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[2px]">
          {/* Background line */}
          <div className="absolute inset-0 bg-muted/10" />
          {/* Animated line */}
          <motion.div 
            className="absolute top-0 w-full bg-gradient-to-b from-warmYellow to-vibrantOrange origin-top"
            style={{ scaleY: pathLength, height: "100%" }}
          />
        </div>

        {experience.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`relative mb-32 md:mb-48 flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node point */}
              <div className="absolute left-[20px] md:left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-pureWhite border-2 border-vibrantOrange z-10 mt-2" />

              {/* Content Box */}
              <motion.div 
                className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-4">
                  <span className="text-xs tracking-widest uppercase text-vibrantOrange font-medium">
                    {exp.period}
                  </span>
                  
                  <h3 className="section-title text-3xl font-light text-ink">
                    {exp.role}
                  </h3>
                  
                  <span className="editorial-text text-lg text-ink/60 font-medium">
                    {exp.company}
                  </span>
                  
                  <p className="editorial-text text-muted font-light leading-relaxed mt-4 mb-2">
                    {exp.summary}
                  </p>
                  <ul className="list-disc pl-5 text-muted font-light leading-relaxed space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
