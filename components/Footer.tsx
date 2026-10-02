"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

type FooterColumn = { title: string; items: string[] };

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const footer = (t.raw("footer") ?? {}) as {
    heading?: string;
    body?: string;
    cta?: string;
    columns?: FooterColumn[];
    copyright?: string;
    contactLabel?: string;
    contactEmail?: string;
  };
  const columns = Array.isArray(footer.columns) ? footer.columns : [];

  const resolveHref = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <Reveal className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight text-[var(--foreground)]">
              {footer.heading ?? BRAND.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
              {footer.body ?? BRAND.tagline}
            </p>
            {footer.cta && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-block">
                <Link
                  href={resolveHref("#pricing")}
                  onClick={(e) => handleClick(e, "#pricing")}
                  className="inline-flex rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--accent)]"
                >
                  {footer.cta}
                </Link>
              </motion.div>
            )}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col, i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-[var(--foreground)]">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {(col.items ?? []).map((item, j) => (
                    <li key={j}>
                      <span className="cursor-default text-sm text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--muted-foreground)]">{footer.copyright}</p>
          {footer.contactEmail && (
            <a
              href={`mailto:${footer.contactEmail}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {footer.contactLabel ? `${footer.contactLabel}: ` : ""}
              {footer.contactEmail}
            </a>
          )}
        </div>
      </Reveal>
    </footer>
  );
}