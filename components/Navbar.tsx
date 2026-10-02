"use client";
import { MouseEvent, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { useTranslations } from "next-intl";
import { navLinks, BRAND, PRIMARY_CTA } from "@/lib/data";

const menuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = (t.raw("nav") ?? {}) as Record<string, string>;
  const [open, setOpen] = useState(false);

  const resolveHref = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
          onClick={() => setOpen(false)}
        >
          {navT.brand ?? BRAND.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const label = navT[link.key] ?? link.label;
            const target = resolveHref(link.href);
            return (
              <Link
                key={link.key}
                href={target}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href={resolveHref(PRIMARY_CTA.href)}
              onClick={(e) => handleAnchorClick(e, PRIMARY_CTA.href)}
              className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(109,40,217,0.12)] transition-all duration-300 ease-out hover:bg-[var(--accent)]"
            >
              {navT.cta ?? PRIMARY_CTA.label}
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--primary)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const label = navT[link.key] ?? link.label;
                const target = resolveHref(link.href);
                return (
                  <Link
                    key={link.key}
                    href={target}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--card)] hover:text-[var(--primary)]"
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href={resolveHref(PRIMARY_CTA.href)}
                onClick={(e) => handleAnchorClick(e, PRIMARY_CTA.href)}
                className="mt-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--accent)]"
              >
                {navT.cta ?? PRIMARY_CTA.label}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}