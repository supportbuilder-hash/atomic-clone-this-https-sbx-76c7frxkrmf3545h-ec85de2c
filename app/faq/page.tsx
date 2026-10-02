"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  label: string;
  items: FaqItem[];
}

const PRODUCT_FAQS: FaqItem[] = [
  {
    question: "What is Flowpilot?",
    answer:
      "Flowpilot is an all-in-one workspace that brings your team's tasks, docs, and automations into a single board, so you stop switching between a task tracker, a docs tool, and a chat app.",
  },
  {
    question: "Does it integrate with Slack?",
    answer:
      "Yes. Flowpilot connects natively to Slack to post automation updates, task assignments, and daily digests directly into the channels your team already watches.",
  },
  {
    question: "Can I import data from Jira or Trello?",
    answer:
      "You can import boards, tasks, and comments from Jira and Trello in a few clicks using our guided migration wizard. Most teams are fully moved over in under an hour.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Flowpilot works as a responsive web app on any device, and dedicated iOS and Android apps are available for quick updates and notifications on the go.",
  },
  {
    question: "How secure is my team's data?",
    answer:
      "All data is encrypted in transit and at rest. Flowpilot is SOC 2 Type II compliant and supports SSO and granular permissions for larger organizations.",
  },
];

const BILLING_FAQS: FaqItem[] = [
  {
    question: "How does billing work?",
    answer:
      "Flowpilot is billed per active seat, per month or per year. You're only charged for teammates who are actually using their account, and you can add or remove seats at any time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, there are no long-term contracts. You can cancel from your billing settings whenever you like and you'll retain access through the end of your current billing period.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Every plan starts with a 14-day free trial, no credit card required. You can invite your whole team and try every feature before deciding on a plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards and, for annual Scale plans, invoicing with net-30 terms via bank transfer.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or switch between monthly and annual billing at any time from your workspace settings, and we prorate the difference automatically.",
  },
];

const SUPPORT_FAQS: FaqItem[] = [
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team from the in-app chat widget or by emailing hello@flowpilot.io. We reply to every message, usually within a few hours.",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our support team is available Monday through Friday, 8am to 8pm ET. Scale plan customers get priority routing and access to weekend coverage.",
  },
  {
    question: "Do you offer onboarding help?",
    answer:
      "Yes. Every new team gets a guided onboarding session to map their existing workflow into Flowpilot, and Scale customers get a dedicated onboarding specialist.",
  },
  {
    question: "Is there a status page?",
    answer:
      "Yes, you can check real-time uptime and incident history at any time on our public status page, with the option to subscribe to update notifications.",
  },
  {
    question: "Where can I suggest a feature?",
    answer:
      "We review every suggestion submitted through the in-app feedback form, and our roadmap is shaped directly by what customers ask for most.",
  },
];

function FaqAccordion({ category, categoryIndex, openKey, onToggle }: {
  category: FaqCategory;
  categoryIndex: number;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--foreground)]">
        {category.label}
      </h2>
      <div className="mt-6 space-y-3">
        {category.items.map((item, itemIndex) => {
          const key = `${categoryIndex}-${itemIndex}`;
          const isOpen = openKey === key;
          return (
            <div
              key={key}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
            >
              <button
                type="button"
                onClick={() => onToggle(key)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-[var(--foreground)]">{item.question}</span>
                <ChevronDown
                  className={
                    "h-5 w-5 flex-shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 ease-out " +
                    (isOpen ? "rotate-180" : "")
                  }
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqPage() {
  const t = useTranslations();
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  const categories: FaqCategory[] = [
    { label: t("faq.categoryProduct"), items: PRODUCT_FAQS },
    { label: t("faq.categoryBilling"), items: BILLING_FAQS },
    { label: t("faq.categorySupport"), items: SUPPORT_FAQS },
  ];

  const handleToggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]">
              <span>Support</span>
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-extrabold tracking-tight text-[var(--foreground)] md:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              Answers to the most common questions about using Flowpilot, how billing works, and how to reach our team when you need help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIZED ACCORDIONS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-16">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category.label} delay={categoryIndex * 0.05}>
              <FaqAccordion
                category={category}
                categoryIndex={categoryIndex}
                openKey={openKey}
                onToggle={handleToggle}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] px-8 py-14 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] md:px-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
              Still have questions?
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-[var(--muted-foreground)]">
              Our team is happy to help. Reach out and we'll get back to you within a few hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(109,40,217,0.12)] transition-all duration-300 ease-out hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
