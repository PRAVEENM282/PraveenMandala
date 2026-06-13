"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function LivingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const meshRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  
  // Spring physics for smooth scroll-based transformations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform background colors based on scroll progress
  // Starts vibrant at the top (Hero), then settles down
  const opacity1 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 0.5, 0.7]);
  const opacity2 = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 0.3, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      cursorRef.current = { x, y };

      // Apply subtle parallax to the mesh based on cursor using hardware-accelerated transform
      if (meshRef.current) {
        meshRef.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-pureWhite">
      {/* Noise layer from globals.css */}
      <div className="noise-bg" />

      {/* Layer 1: Animated Mesh Gradient Container */}
      <motion.div 
        ref={meshRef}
        className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-1000 ease-out will-change-transform"
      >
        {/* Hero Top Highlight (Vibrant Orange & Warm Yellow) */}
        <div className="absolute top-[-5%] left-[20%] w-[50%] h-[40%] bg-gradient-to-br from-warmYellow/50 to-vibrantOrange/30 rounded-full mix-blend-multiply filter blur-[100px] animate-breathe opacity-90" />

        {/* Soft Beige Base Fluid */}
        <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-softBeige rounded-full mix-blend-multiply filter blur-[120px] opacity-100 animate-fluid" />
        
        {/* Light Cream Core Fluid */}
        <motion.div 
          className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] bg-warmYellow/40 rounded-full mix-blend-multiply filter blur-[100px] animate-fluid"
          style={{ opacity: opacity1 }}
        />
        
        {/* Secondary Wave */}
        <motion.div 
          className="absolute bottom-[-20%] left-[10%] w-[70%] h-[50%] bg-vibrantOrange/20 rounded-full mix-blend-multiply filter blur-[130px] animate-wave"
          style={{ opacity: opacity2 }}
        />

        {/* Cursor-reactive light field (Subtle Vibrant Orange) */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),rgba(255,140,66,0.06),transparent_100%)] opacity-50"
        />
      </motion.div>
    </div>
  );
}
