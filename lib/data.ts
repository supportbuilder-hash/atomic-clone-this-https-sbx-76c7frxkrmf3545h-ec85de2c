export type NavLink = {
  label: string;
  href: string;
  key: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

/**
 * Single source of truth for primary navigation.
 * Only the homepage exists right now, so every non-home entry
 * points at an on-page section anchor (e.g. "#features").
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Features", href: "#features", key: "features" },
  { label: "Testimonials", href: "#testimonials", key: "testimonials" },
  { label: "Pricing", href: "#pricing", key: "pricing" },
  { label: "FAQ", href: "#faq", key: "faq" },
];

export const BRAND = {
  name: "Flowpilot",
  tagline: "The all-in-one workspace for teams who'd rather build than coordinate.",
};

export const PRIMARY_CTA: CtaLink = {
  label: "Start free trial",
  href: "#pricing",
};