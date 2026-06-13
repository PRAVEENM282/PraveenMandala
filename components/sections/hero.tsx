"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteConfig } from "@/constants/site";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section 
      id="home"
      ref={containerRef}
      className="relative h-[100svh] flex flex-col justify-center items-center px-6 overflow-hidden"
      style={{ opacity }}
    >
      {/* Elegant Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,26,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
        {/* Cinematic Typography */}
        <motion.div 
          style={{ y: y1, scale }}
          className="w-full"
        >
          <RevealText 
            text="Praveen" 
            className="section-title text-[15vw] leading-[0.8] md:text-[12vw] text-ink font-light tracking-tighter w-full justify-center"
            delay={0.1}
          />
          <RevealText 
            text="Mandala" 
            className="section-title text-[15vw] leading-[0.8] md:text-[12vw] text-ink font-light tracking-tighter w-full justify-center italic opacity-80"
            delay={0.3}
          />
        </motion.div>

        {/* Subtitle / Role */}
        <motion.div 
          style={{ y: y2 }}
          className="mt-12 md:mt-20 max-w-2xl mx-auto flex flex-col items-center gap-10"
        >
          <RevealText 
            text={siteConfig.heroSubheadline}
            className="editorial-text text-xl md:text-2xl text-muted font-light justify-center text-center"
            delay={0.6}
          />
          
          <motion.a 
            href="/PRAVEENMANDALA.pdf" 
            download 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <MagneticButton className="px-8 py-3 text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </MagneticButton>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - simple, minimal, elegant */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ y: y2 }}
      >
        <span className="text-xs tracking-widest uppercase text-muted font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-muted/30 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-ink origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
