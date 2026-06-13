"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteConfig, socialLinks } from "@/constants/site";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[90vh] py-32 px-6 flex items-center justify-center bg-ink text-pureWhite overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vibrantOrange/10 via-ink to-ink" />
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="h-[1px] w-12 bg-pureWhite/30" />
          <span className="text-xs tracking-widest uppercase text-pureWhite/70 font-medium">Initiate</span>
          <div className="h-[1px] w-12 bg-pureWhite/30" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="section-title text-5xl md:text-8xl font-light tracking-tight mb-8"
        >
          Let&apos;s build the <br /> <span className="italic text-vibrantOrange opacity-90">unimaginable.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="editorial-text text-xl text-pureWhite/60 font-light max-w-lg mb-16"
        >
          I am currently accepting new freelance opportunities and full-time roles in forward-thinking teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        >
          <a href={`mailto:${siteConfig.email}`}>
            <MagneticButton magneticPull={0.4} className="bg-pureWhite text-ink hover:bg-vibrantOrange hover:text-pureWhite px-12 py-6 text-lg">
              Say Hello
            </MagneticButton>
          </a>
        </motion.div>

        {/* Footer info integrated into contact for seamless end */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-pureWhite/40 gap-4"
        >
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-vibrantOrange transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <span>Living Organism v2.0</span>
        </motion.div>

      </div>
    </section>
  );
}
