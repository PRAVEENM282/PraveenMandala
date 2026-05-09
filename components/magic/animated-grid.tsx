import { cn } from "@/lib/utils";

export function AnimatedGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid bg-[length:120px_120px] opacity-30",
        "animate-grid",
        className
      )}
    />
  );
}
