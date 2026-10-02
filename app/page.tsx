"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Layout, Sparkles, FileText, GitBranch, Activity, Check, ChevronDown, ArrowRight, Calendar, Clock, Bell, Star, Circle, type LucideIcon } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { BRAND, PRIMARY_CTA } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  role: string;
  team: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface TaskItem {
  label: string;
  status: "done" | "inprogress";
}

const FEATURE_ICON_MAP: Record<string, LucideIcon> = {
  layout: Layout,
  automation: Sparkles,
  docs: FileText,
  integrations: GitBranch,
  insights: Activity,
};

const FEATURE_SPAN: Record<number, string> = {
  0: "md:col-span-2 md:row-span-2",
  1: "md:col-span-1",
  2: "md:col-span-1",
  3: "md:col-span-1",
  4: "md:col-span-2",
};

function roleInitial(role: string): string {
  return role.trim().charAt(0).toUpperCase() || "F";
}

export default function HomePage() {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = (Array.isArray(t.raw("features.items")) ? t.raw("features.items") : []) as FeatureItem[];
  const steps = (Array.isArray(t.raw("howItWorks.steps")) ? t.raw("howItWorks.steps") : []) as StepItem[];
  const testimonials = (Array.isArray(t.raw("testimonials.items")) ? t.raw("testimonials.items") : []) as TestimonialItem[];
  const tiers = (Array.isArray(t.raw("pricing.tiers")) ? t.raw("pricing.tiers") : []) as PricingTier[];
  const faqs = (Array.isArray(t.raw("faq.items")) ? t.raw("faq.items") : []) as FaqItem[];
  const tasks = (Array.isArray(t.raw("hero.tasks")) ? t.raw("hero.tasks") : []) as TaskItem[];

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,var(--accent)/12%,transparent_60%)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-3 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              {t("hero.titleLead")}{" "}
              <span className="text-[var(--accent)]">{t("hero.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              {BRAND.tagline}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_12px_24px_-8px_var(--accent)/50] transition-all duration-300 ease-out hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {PRIMARY_CTA.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-6 py-3 text-sm font-semibold text-[hsl(var(--foreground))] transition-all duration-300 ease-out hover:bg-[hsl(var(--card))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
            <p className="mt-5 text-sm text-[hsl(var(--muted-foreground))]">{t("hero.trustNote")}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto max-w-md rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/10">
                    <Layout className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold">{t("hero.panelTitle")}</span>
                </div>
                <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <Bell className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <ul className="mt-4 space-y-3">
                {tasks.map((task, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      {task.status === "done" ? (
                        <Check className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                      ) : (
                        <Circle className="h-4 w-4 text-[hsl(var(--muted-foreground))]" aria-hidden="true" />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          task.status === "done" && "text-[hsl(var(--muted-foreground))] line-through",
                        )}
                      >
                        {task.label}
                      </span>
                    </div>
                    <Clock className="h-3.5 w-3.5 text-[hsl(var(--muted-foreground))]" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl bg-[var(--accent)]/10 p-3">
                <p className="text-xs font-medium text-[var(--accent)]">{t("hero.automationLabel")}</p>
                <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{t("hero.automationText")}</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">{t("features.eyebrow")}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("features.title")}</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              {t("features.subtitle")}
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[180px]">
            {features.map((feature, i) => {
              const Icon = FEATURE_ICON_MAP[feature.icon] ?? Layout;
              return (
                <Reveal key={feature.title} delay={i * 0.08} className={cn("h-full", FEATURE_SPAN[i])}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-12px_rgba(0,0,0,0.15)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                      <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">{t("howItWorks.eyebrow")}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("howItWorks.title")}</h2>
            <p className="mt-4 text-pretty leading-relaxed text-[hsl(var(--muted-foreground))]">
              {t("howItWorks.subtitle")}
            </p>
          </Reveal>
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={fadeInUp}
                className="flex gap-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-sm font-semibold text-[var(--accent)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              <Star className="h-4 w-4" aria-hidden="true" />
              {t("testimonials.eyebrow")}
            </div>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("testimonials.title")}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={item.quote} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6">
                  <blockquote className="text-pretty leading-relaxed">
                    <p>&ldquo;{item.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-semibold text-[var(--accent)]">
                      {roleInitial(item.role)}
                    </span>
                    <div className="text-sm">
                      <p className="font-medium">{item.role}</p>
                      <p className="text-[hsl(var(--muted-foreground))]">{item.team}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">{t("pricing.eyebrow")}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("pricing.title")}</h2>
            <p className="mt-4 text-pretty leading-relaxed text-[hsl(var(--muted-foreground))]">{t("pricing.subtitle")}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ease-out",
                    tier.highlighted
                      ? "border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-16px_var(--accent)/35]"
                      : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:-translate-y-1",
                  )}
                >
                  {tier.highlighted && (
                    <span className="mb-3 inline-block w-fit rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                      {t("pricing.highlightedLabel")}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">{t("pricing.perMonth")}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{tier.description}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={PRIMARY_CTA.href}
                    className={cn(
                      "mt-7 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
                      tier.highlighted
                        ? "bg-[var(--accent)] text-white hover:brightness-110"
                        : "border border-[hsl(var(--border))] hover:bg-[hsl(var(--background))]",
                    )}
                  >
                    {t("pricing.ctaLabel")}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">{t("faq.eyebrow")}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("faq.title")}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="divide-y divide-[hsl(var(--border))] rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
              {faqs.map((item, i) => (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200 hover:bg-[hsl(var(--card))]"
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={cn("h-4 w-4 shrink-0 transition-transform duration-300", openFaq === i && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl bg-[hsl(var(--foreground))] px-8 py-16 text-center md:py-20">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(var(--background))] md:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[hsl(var(--background))]/70">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-[hsl(var(--background))]/60">{BRAND.name} &middot; {t("cta.note")}</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}