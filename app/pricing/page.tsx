"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

interface BillingFaqItem {
  question: string;
  answer: string;
}

const BILLING_FAQS: BillingFaqItem[] = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or switch between monthly and annual billing at any time from your workspace settings. Changes are prorated automatically.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If you're not satisfied within the first 14 days of a paid plan, contact our support team and we'll issue a full refund, no questions asked.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, as well as ACH transfers and invoicing for annual plans on our Business tier.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 14 day free trial, no credit card required. You can invite your team and explore every feature before paying.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Your workspace stays active until the end of your current billing period. After that, your data is kept for 30 days in case you'd like to come back.",
  },
];

function annualPrice(monthly: string): string {
  const numeric = parseFloat(monthly.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(numeric)) return monthly;
  const yearly = Math.round(numeric * 10);
  return `$${yearly}`;
}

export default function PricingPage() {
  const t = useTranslations();
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tiers = (Array.isArray(t.raw("pricing.tiers")) ? t.raw("pricing.tiers") : []) as PricingTier[];

  const allFeatures = Array.from(new Set(tiers.flatMap((tier) => tier.features ?? [])));

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,var(--accent)/12%,transparent_60%)]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>Pricing</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] font-display md:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              Pick a plan that fits your team today, and grow into it as you scale. No hidden fees, cancel anytime.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] p-1.5">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ease-out ${
                  !annual ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ease-out ${
                  annual ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"
                }`}
              >
                Annual
              </button>
            </div>
            {annual && (
              <p className="mt-3 text-sm font-medium text-[var(--accent)]">
                Pay yearly and get 2 months free
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-[var(--card)] p-8 transition-all duration-300 ease-out ${
                  tier.highlighted
                    ? "border-[var(--primary)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-12px_rgba(109,40,217,0.35)]"
                    : "border-[var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold tracking-tight text-[var(--foreground)]">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight text-[var(--foreground)]">
                    {annual ? annualPrice(tier.price) : tier.price}
                  </span>
                  <span className="text-sm font-medium text-[var(--muted-foreground)]">
                    {annual ? "/yr" : "/mo"}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {(tier.features ?? []).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-in"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                    tier.highlighted
                      ? "bg-[var(--accent)] text-white hover:brightness-110"
                      : "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--primary)]"
                  }`}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      {allFeatures.length > 0 && (
        <section className="bg-[var(--card)] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Compare plans</p>
                <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                  Full feature comparison
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 overflow-x-auto rounded-2xl border border-[var(--border)]">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="px-6 py-4 font-semibold text-[var(--foreground)]">Feature</th>
                      {tiers.map((tier) => (
                        <th
                          key={tier.name}
                          className={`px-6 py-4 text-center font-semibold ${
                            tier.highlighted ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                          }`}
                        >
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature, idx) => (
                      <tr
                        key={feature}
                        className={idx % 2 === 0 ? "bg-[var(--background)]" : "bg-[var(--card)]"}
                      >
                        <td className="px-6 py-4 text-[var(--foreground)]">{feature}</td>
                        {tiers.map((tier) => (
                          <td key={tier.name} className="px-6 py-4 text-center">
                            {(tier.features ?? []).includes(feature) ? (
                              <Check className="mx-auto h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                            ) : (
                              <span className="text-[var(--muted-foreground)]">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* BILLING FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Billing FAQ</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                Questions about your subscription
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-3">
            {BILLING_FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={item.question} delay={i * 0.05}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium text-[var(--foreground)]">{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{item.answer}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[var(--card)] px-6 py-24">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-8 py-14 text-center">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
              Ready to get started?
            </h2>
            <p className="max-w-xl text-pretty text-[var(--muted-foreground)]">
              Start your 14 day free trial today. No credit card required.
            </p>
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_12px_24px_-8px_var(--accent)/50] transition-all duration-300 ease-out hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Start free trial
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
