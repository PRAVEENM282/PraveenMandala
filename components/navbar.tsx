"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/site";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const activeId = useScrollSpy(navLinks.map((link) => link.href.replace("#", "")));

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 px-4 transition",
        scrolled ? "drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]" : ""
      )}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 px-4 py-3 sm:px-5",
          "bg-white/80 backdrop-blur-xl",
          scrolled ? "border-slate-200" : "border-slate-100"
        )}
      >
        <a href="#home" className="shrink-0 text-sm font-semibold tracking-wide text-slate-900">
          PRAVEEN
        </a>
        <nav className="hidden items-center gap-4 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600 lg:flex xl:gap-6 xl:tracking-[0.18em]">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = id === activeId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "transition hover:text-blue-600",
                  active ? "text-slate-900" : "text-slate-500"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 w-[min(100%,24rem)] rounded-lg border border-slate-200 bg-white/95 px-6 py-6 text-sm backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-slate-500">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
