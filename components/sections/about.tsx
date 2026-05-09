"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/common/section-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/animations";

export function About() {
  return (
    <SectionShell id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineering resilient systems with a product-first mindset"
          description="Computer Science student passionate about scalable systems, AI infrastructure, backend engineering, and modern web experiences."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Parallax speed={4}>
            <motion.div
              className="glass rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
                <div className="absolute -bottom-10 left-4 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl" />
                <div className="relative z-10 space-y-4">
                  <Image
                    src="/profile.svg"
                    alt="Praveen Mandala"
                    width={220}
                    height={220}
                    className="rounded-lg border border-slate-200"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                      Current focus
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "AI systems",
                        "MLOps",
                        "Cloud infrastructure",
                        "Real-time systems",
                        "Secure architectures"
                      ].map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Parallax>
          <div className="grid gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="glass">
                <CardHeader>
                  <CardTitle>What I build</CardTitle>
                </CardHeader>
                <CardContent>
                  I craft AI platforms, streaming pipelines, and full stack experiences that balance
                  performance, reliability, and premium UX. My focus sits at the intersection of
                  infrastructure and product.
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-slate-900">B.Tech CSE</p>
                  <p>Aditya College of Engineering &amp; Technology</p>
                  <p className="text-slate-500">CGPA: 8.79</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="glass">
                <CardHeader>
                  <CardTitle>What drives me</CardTitle>
                </CardHeader>
                <CardContent>
                  Shipping systems that feel fast, secure, and elegant while scaling across modern
                  cloud-native stacks.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
