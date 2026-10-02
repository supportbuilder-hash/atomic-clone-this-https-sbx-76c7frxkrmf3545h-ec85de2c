import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Flowpilot — Work faster. Decide smarter. Grow together.",
  description:
    "Flowpilot brings your team's projects, data, and conversations into one clean workspace, so you spend less time switching tabs and more time shipping great work.",
  openGraph: {
    title: "Flowpilot — Work faster. Decide smarter. Grow together.",
    description: "The all-in-one workspace for teams who'd rather build than coordinate.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LocaleProvider>
          <Navbar />
          {children}
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}