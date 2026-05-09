import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}
