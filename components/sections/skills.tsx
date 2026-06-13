"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills as siteSkills } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="skills" className="relative min-h-screen py-32 md:py-48 px-6 flex items-center bg-pureWhite z-10">
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-20 md:mb-32">
          <span className="text-xs tracking-widest uppercase text-muted font-medium">03</span>
          <div className="h-[1px] w-12 bg-muted/30" />
          <span className="text-xs tracking-widest uppercase text-muted font-medium">Capabilities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative">
          
          {/* Left Column: Domains List */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {siteSkills.map((skill, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={skill.category}
                  className="group cursor-pointer relative py-4 border-b border-ink/5"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div 
                    className="flex items-center gap-6 relative z-10"
                    animate={{ 
                      x: isActive ? 20 : 0,
                      opacity: isActive ? 1 : 0.4
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <span className="text-xs font-space font-medium tracking-widest text-vibrantOrange opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                    <h3 className={cn(
                      "text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500",
                      isActive ? "text-ink" : "text-ink"
                    )}>
                      {skill.category}
                    </h3>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Skills Details (Sticky) */}
          <div className="md:col-span-6 md:col-start-7 relative">
            <div className="sticky top-1/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-12"
                >
                  {/* Category Description */}
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-vibrantOrange font-medium mb-6">
                      Approach
                    </h4>
                    <p className="editorial-text text-2xl md:text-3xl text-ink font-light leading-relaxed">
                      {siteSkills[activeIndex].description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted font-medium mb-8">
                      Toolkit
                    </h4>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                      {siteSkills[activeIndex].items.map((item, idx) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (idx * 0.05), duration: 0.5 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-vibrantOrange/50" />
                          <span className="editorial-text text-lg text-ink/80 font-medium tracking-wide">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
