import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { navLinks, socialLinks } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 py-12">
      <div className="absolute left-0 right-0 top-0 gradient-line animate-glow" />
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3 text-sm text-slate-500">
          <p className="text-base font-semibold text-slate-900">Praveen Mandala</p>
          <p>AI Engineer | Full Stack Developer | Systems Engineer</p>
          <p>Andhra Pradesh, India</p>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            &copy; 2026 Praveen Mandala. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon =
                link.label === "GitHub"
                  ? FaGithub
                  : link.label === "LinkedIn"
                    ? FaLinkedinIn
                    : link.label === "Instagram"
                      ? FaInstagram
                      : Mail;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
