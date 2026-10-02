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
 * Home-page section anchors live alongside standalone routes;
 * Navbar/Footer resolve each href based on the current pathname.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Features", href: "#features", key: "features" },
  { label: "Testimonials", href: "#testimonials", key: "testimonials" },
  { label: "Pricing", href: "/pricing", key: "pricing" },
  { label: "FAQ", href: "/faq", key: "faq" },
  { label: "About", href: "/about", key: "about" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export const BRAND = {
  name: "Flowpilot",
  tagline: "The all-in-one workspace for teams who'd rather build than coordinate.",
};

export const PRIMARY_CTA: CtaLink = {
  label: "Start free trial",
  href: "#pricing",
};
