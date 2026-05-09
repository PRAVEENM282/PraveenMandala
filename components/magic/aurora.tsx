import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="absolute left-[-10%] top-10 h-72 w-72 animate-blob rounded-full bg-blue-400/20 blur-3xl" />
      <span className="absolute right-[-10%] top-24 h-80 w-80 animate-blob rounded-full bg-sky-300/20 blur-3xl" />
      <span className="absolute bottom-[-10%] left-1/3 h-72 w-72 animate-blob rounded-full bg-teal-300/20 blur-3xl" />
    </div>
  );
}
