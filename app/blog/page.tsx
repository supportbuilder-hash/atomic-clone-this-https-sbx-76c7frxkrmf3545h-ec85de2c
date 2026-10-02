"use client";

import { Sparkles, Workflow, Layers, Users, Puzzle, BookOpen, type LucideIcon } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";

interface BlogPost {
  category: string;
  icon: LucideIcon;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
}

const POSTS: BlogPost[] = [
  {
    category: "Product",
    icon: Workflow,
    title: "How we cut handoff time in half with automations",
    excerpt:
      "A look inside the automation rules that replaced manual status updates across our own team. We walk through the triggers we use every day and what changed.",
    author: "Priya Nair",
    readTime: "6 min read",
    date: "Mar 4, 2024",
  },
  {
    category: "Engineering",
    icon: Puzzle,
    title: "Inside our new integrations marketplace",
    excerpt:
      "Why we rebuilt our connector framework from scratch, and how it lets any team ship a native integration in days instead of months.",
    author: "Marcus Webb",
    readTime: "8 min read",
    date: "Feb 22, 2024",
  },
  {
    category: "Product",
    icon: Layers,
    title: "Designing a calmer sprint board",
    excerpt:
      "Most boards get noisier the bigger a team grows. Here's how we rethought density, color, and grouping to keep focus on what matters.",
    author: "Elena Castillo",
    readTime: "5 min read",
    date: "Feb 9, 2024",
  },
  {
    category: "Culture",
    icon: Users,
    title: "What remote-first planning actually looks like at Flowpilot",
    excerpt:
      "We're a fully distributed team across nine time zones. This is the planning rhythm that keeps us aligned without endless meetings.",
    author: "Dominic Reyes",
    readTime: "7 min read",
    date: "Jan 29, 2024",
  },
  {
    category: "Guides",
    icon: BookOpen,
    title: "A practical guide to rolling out Flowpilot to a 50-person team",
    excerpt:
      "Migrations fail when they feel like a mandate. Here's the phased rollout plan that got our largest customers fully adopted in three weeks.",
    author: "Sarah Kim",
    readTime: "9 min read",
    date: "Jan 15, 2024",
  },
  {
    category: "Engineering",
    icon: Sparkles,
    title: "Rebuilding our real-time sync engine for scale",
    excerpt:
      "As workspaces grew past thousands of tasks, our original sync approach started to buckle. Here's what we learned rebuilding it from the ground up.",
    author: "Marcus Webb",
    readTime: "10 min read",
    date: "Dec 18, 2023",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Product: "bg-[var(--accent)]/10 text-[var(--primary)]",
  Engineering: "bg-[var(--accent)]/10 text-[var(--primary)]",
  Culture: "bg-[var(--accent)]/10 text-[var(--primary)]",
  Guides: "bg-[var(--accent)]/10 text-[var(--primary)]",
};

export default function BlogPage() {
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
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>Blog</span>
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
              Stories, updates, and ideas from the Flowpilot team
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              Notes on product decisions, engineering tradeoffs, and how we try to run a calmer company, written by the people building Flowpilot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {POSTS.map((post) => {
              const Icon = post.icon;
              return (
                <Reveal key={post.title} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-8px_rgba(109,40,217,0.18)]">
                    <div className="flex h-40 items-center justify-center bg-[linear-gradient(135deg,var(--accent),var(--primary))]">
                      <Icon className="h-12 w-12 text-white" aria-hidden="true" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          CATEGORY_COLORS[post.category] ?? "bg-[var(--accent)]/10 text-[var(--primary)]"
                        }`}
                      >
                        {post.category}
                      </span>
                      <h2 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-[var(--foreground)]">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted-foreground)]">
                        <span className="font-medium text-[var(--foreground)]">{post.author}</span>
                        <span className="mx-1.5">·</span>
                        <span>{post.readTime}</span>
                        <span className="mx-1.5">·</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
