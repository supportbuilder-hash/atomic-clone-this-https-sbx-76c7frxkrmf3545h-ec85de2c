"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, Code2 as Github, Chrome } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

const LOADING_DURATION_MS = 900;

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), LOADING_DURATION_MS);
  };

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center overflow-x-hidden px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,var(--accent)/12%,transparent_60%)]"
      />
      <Reveal className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] md:p-10">
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-[var(--foreground)]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Sign in to your Flowpilot workspace
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)]">
                  Password
                </label>
                <Link href="#" className="text-sm text-[var(--primary)] transition-colors duration-300 hover:text-[var(--accent)]">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(109,40,217,0.12)] transition-all duration-300 ease-out hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
            <span className="text-xs font-medium text-[var(--muted-foreground)]">or continue with</span>
            <div className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Chrome className="h-4 w-4" aria-hidden="true" />
              Google
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </button>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email magic link
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--muted-foreground)]">
          Don&apos;t have an account?{" "}
          <Link href="/pricing" className="font-medium text-[var(--primary)] transition-colors duration-300 hover:text-[var(--accent)]">
            Start free trial
          </Link>
        </p>
      </Reveal>
    </main>
  );
}
