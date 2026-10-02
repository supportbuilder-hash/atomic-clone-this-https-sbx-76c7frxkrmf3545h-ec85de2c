import { Users, Sparkles, MessageSquareQuote, Rocket, HeartHandshake } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";

interface TeamMember {
  name: string;
  role: string;
}

interface ValueItem {
  title: string;
  description: string;
  icon: typeof Sparkles;
}

const TEAM: TeamMember[] = [
  { name: "Maya Chen", role: "Co-founder & CEO" },
  { name: "Daniel Reyes", role: "Co-founder & CTO" },
  { name: "Priya Nair", role: "Head of Product" },
  { name: "Oliver Bennett", role: "Head of Design" },
  { name: "Amara Osei", role: "Engineering Lead" },
  { name: "Lucas Ferreira", role: "Customer Success Lead" },
];

const VALUES: ValueItem[] = [
  {
    title: "Build in the open",
    description:
      "We share our roadmap, our wins, and our mistakes with customers as they happen, not after the fact.",
    icon: Sparkles,
  },
  {
    title: "Default to clarity",
    description:
      "Every feature, doc, and decision should be understandable by someone who wasn't in the room.",
    icon: MessageSquareQuote,
  },
  {
    title: "Ship small, ship often",
    description:
      "Small, frequent releases beat big bets. We'd rather learn fast than guess right once.",
    icon: Rocket,
  },
  {
    title: "Customers over everything",
    description:
      "Roadmap debates end the same way: what actually helps the teams using Flowpilot today.",
    icon: HeartHandshake,
  },
];

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_BACKGROUNDS = ["var(--accent)", "var(--primary)"];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,var(--accent)/12%,transparent_60%)]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]">
              <Users className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>About us</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Our story
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              {BRAND.name} started because our own teams were drowning in disconnected tools, five
              tabs open just to answer one question about a project. We set out to build one
              workspace for teams who'd rather build than coordinate, and that mission still
              shapes every decision we make today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="border-t border-[var(--border)] bg-[var(--card)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">Team</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Meet the people behind {BRAND.name}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-8px_rgba(0,0,0,0.12)]">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-base font-bold text-white"
                    style={{ backgroundColor: AVATAR_BACKGROUNDS[i % AVATAR_BACKGROUNDS.length] }}
                    aria-hidden="true"
                  >
                    {initialsOf(member.name)}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{member.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES TIMELINE */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">Values</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                What we believe
              </h2>
            </div>
          </Reveal>
          <div className="relative mt-14 pl-2">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[27px] top-2 w-px bg-[var(--border)]"
            />
            <ul className="space-y-12">
              {VALUES.map((value, i) => {
                const Icon = value.icon;
                return (
                  <li key={value.title} className="relative flex gap-6">
                    <Reveal delay={i * 0.08} className="relative z-10 flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_8px_24px_-8px_rgba(109,40,217,0.5)]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </Reveal>
                    <Reveal delay={i * 0.08 + 0.05} className="pt-2">
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">{value.title}</h3>
                      <p className="mt-2 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
                        {value.description}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
