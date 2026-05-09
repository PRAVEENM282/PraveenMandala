"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ParallaxProvider>
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
