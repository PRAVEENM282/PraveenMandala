"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HoverGlowCard({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      style={{
        "--x": `${position.x}px`,
        "--y": `${position.y}px`
      } as CSSProperties}
      className={cn("glow-card relative overflow-hidden rounded-3xl", className)}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
