"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  magneticPull?: number;
}

export function MagneticButton({ 
  children, 
  className, 
  magneticPull = 0.3,
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({ 
      x: distanceX * magneticPull, 
      y: distanceY * magneticPull 
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative overflow-hidden rounded-full bg-ink text-pureWhite px-8 py-4 transition-colors duration-300",
        "hover:bg-vibrantOrange hover:text-ink hover:shadow-warm",
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center font-inter tracking-wide font-medium">
        {children}
      </div>
      
      {/* Energy ripple effect */}
      <motion.div
        className="absolute inset-0 bg-pureWhite opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1.5 : 0, 
          opacity: isHovered ? 0 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderRadius: '50%' }}
      />
    </motion.button>
  );
}
