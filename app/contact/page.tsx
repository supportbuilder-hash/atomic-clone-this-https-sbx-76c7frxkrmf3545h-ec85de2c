"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormState = { name: "", email: "", message: "" };

const CONTACT_DETAILS = {
  email: "hello@flowpilot.io",
  phone: "+1 (555) 012-3456",
  address: "123 Market Street, San Francisco, CA",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,var(--accent)/12%,transparent_60%)]"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]">
              <Mail className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>Contact</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              Have a question about {BRAND.name}, want a demo, or just want to say hello? Reach out and our
              team will get back to you within one business day.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FORM + DETAILS */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* FORM */}
          <Reveal>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
              <h2 className="font-display text-xl font-bold tracking-tight text-[var(--foreground)]">
                Send us a message
              </h2>
              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-10 text-center">
                  <CheckCircle2 className="h-10 w-10 text-[var(--primary)]" aria-hidden="true" />
                  <p className="font-display text-lg font-bold text-[var(--foreground)]">Message sent</p>
                  <p className="max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Thanks for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-[var(--primary)] transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Jane Cooper"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors duration-300 focus:border-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="jane@company.com"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors duration-300 focus:border-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Tell us a bit about what you're looking for..."
                      className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors duration-300 focus:border-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(109,40,217,0.12)] transition-all duration-300 ease-out hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* DETAILS */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-8">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
                <h2 className="font-display text-xl font-bold tracking-tight text-[var(--foreground)]">
                  Company details
                </h2>
                <ul className="mt-6 flex flex-col gap-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--background)]">
                      <Mail className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">Email</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{CONTACT_DETAILS.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--background)]">
                      <Phone className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">Phone</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{CONTACT_DETAILS.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--background)]">
                      <MapPin className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">Office</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{CONTACT_DETAILS.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex h-[300px] flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--border)]/20 text-center">
                <MapPin className="h-8 w-8 text-[var(--muted-foreground)]" aria-hidden="true" />
                <p className="text-sm font-medium text-[var(--muted-foreground)]">Map preview unavailable</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
