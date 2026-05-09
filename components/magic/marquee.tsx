import { cn } from "@/lib/utils";

export function MagicMarquee({
  items,
  reverse = false
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "flex min-w-max shrink-0 gap-3 py-4 sm:gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-600 sm:tracking-[0.2em]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
