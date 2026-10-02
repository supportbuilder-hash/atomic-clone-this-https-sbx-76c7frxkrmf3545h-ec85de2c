# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
clone this https://sbx-76c7frxkrmf3545h.infra.builderai.ai/

## Goal
Build a modern SaaS landing page (hero, features, testimonials, pricing, FAQ, footer) using an indigo/violet design system, since the original sandbox reference is unavailable.

## Project type
landing-page

## Design system — match this exactly
- Color tokens: `--background: #F6F5FF`, `--foreground: #1E1B3A`, `--card: #FFFFFF`, `--border: #E3DFFB`, `--muted-foreground: #6C6794`, `--primary: #6D28D9`, `--accent: #8B5CF6`
- Fonts: Plus_Jakarta_Sans, Inter

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`cta`, `faq`, `features`, `footer`, `hero`, `howItWorks`, `nav`, `pricing`, `testimonials`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
