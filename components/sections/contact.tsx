"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, socialLinks } from "@/constants/site";

export function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const phoneHref = siteConfig.phone.replace(/[^+\d]/g, "");

  const contactItems = [
    {
      id: "email",
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      copyValue: siteConfig.email,
      icon: Mail
    },
    {
      id: "phone",
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${phoneHref}`,
      copyValue: siteConfig.phone,
      icon: Phone
    },
    {
      id: "github",
      label: "GitHub",
      value: "PRAVEENM282",
      href: "https://github.com/PRAVEENM282",
      copyValue: "https://github.com/PRAVEENM282",
      icon: FaGithub
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "praveen-mandala-8b7251291",
      href: "https://www.linkedin.com/in/praveen-mandala-8b7251291/",
      copyValue: "https://www.linkedin.com/in/praveen-mandala-8b7251291/",
      icon: FaLinkedinIn
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "praveenmandala08",
      href: "https://instagram.com/praveenmandala08",
      copyValue: "https://instagram.com/praveenmandala08",
      icon: FaInstagram
    }
  ];

  async function handleCopy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <SectionShell id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something impactful together."
          description="Reach out for AI engineering, full stack builds, or premium systems consulting."
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-teal-200/60 blur-3xl" />
            <div className="relative rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400 bg-[length:200%_200%] p-[1px] animate-shimmer">
              <Card className="glass rounded-lg">
                <CardContent className="space-y-6">
                  <p className="text-sm text-slate-600">
                    Whether you are planning a new AI product, scaling infrastructure, or launching
                    a premium web experience, I can help architect and deliver the solution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <a href={`mailto:${siteConfig.email}`}>Start a Conversation</a>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <a href="/PRAVEENMANDALA.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
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
                        <motion.a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                          aria-label={link.label}
                        >
                          <Icon size={18} />
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const isCopied = copiedId === item.id;
              return (
                <motion.div
                  key={item.id}
                className="group relative rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400 bg-[length:200%_200%] p-[1px] animate-shimmer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="glass rounded-lg px-4 py-4 sm:px-5">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="safe-text text-xs uppercase tracking-[0.16em] text-slate-500">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="safe-text block text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-blue-600"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.copyValue)}
                        className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500 transition hover:border-blue-300 hover:text-slate-700"
                        aria-label={`Copy ${item.label}`}
                      >
                        {isCopied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{isCopied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
