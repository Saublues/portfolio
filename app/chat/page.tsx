import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sausan Asma' Mufiidah for software engineering, data analytics, and business intelligence opportunities.",
};

export default function ChatPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] selection:bg-sky-400 selection:text-black transition-colors duration-300">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Atmospheric Soft Sky-Blue Ambient Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] w-full overflow-hidden -z-10"
      >
        <div className="absolute left-1/2 -top-[25%] -translate-x-1/2 w-[180vw] max-w-[2800px] h-[75vh] rounded-[50%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300/70 via-sky-200/35 via-blue-100/10 to-transparent dark:from-sky-500/40 dark:via-blue-600/20 dark:via-sky-950/15 dark:to-transparent blur-[100px]" />
      </div>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 pb-24">
        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span>Get In Touch</span>
            <span className="text-sm font-sans">&sim;</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mt-3 leading-[1.15]">
            Let&apos;s Start A{" "}
            <span className="relative inline-block px-2.5 py-0.5 rounded-md bg-gradient-to-r from-sky-300/80 via-blue-200/60 to-sky-100/40 dark:from-sky-500/40 dark:via-blue-600/30 dark:to-sky-950/20 text-black dark:text-white border border-sky-400/40">
              Conversation
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I&apos;m actively exploring internship and junior roles in data
            analytics, business intelligence, and software engineering. Always
            happy to discuss data pipelines, analytics work, or collaborative
            projects.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          {/* Direct Email */}
          <a
            href="mailto:sausanasmam@gmail.com"
            className="flex items-center justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-[#111318]/80 hover:border-sky-400/50 dark:hover:border-sky-400/50 transition-all duration-200 group"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Direct Email
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[var(--text-primary)] mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                sausanasmam@gmail.com
              </div>
            </div>
            <span className="text-xl text-zinc-400 group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all">
              &rarr;
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sausan-asma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-[#111318]/80 hover:border-sky-400/50 dark:hover:border-sky-400/50 transition-all duration-200 group"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Professional Network
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[var(--text-primary)] mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                linkedin.com/in/sausan-asma
              </div>
            </div>
            <span className="text-xl text-zinc-400 group-hover:text-[var(--text-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              &#8599;
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Saublues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-[#111318]/80 hover:border-sky-400/50 dark:hover:border-sky-400/50 transition-all duration-200 group"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Source Code &amp; Repositories
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[var(--text-primary)] mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                github.com/Saublues
              </div>
            </div>
            <span className="text-xl text-zinc-400 group-hover:text-[var(--text-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              &#8599;
            </span>
          </a>
        </div>

        {/* Footer Meta */}
        <div className="mt-14 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
          <span>Location: Bogor, Indonesia (UTC+7)</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for Internships &amp; Roles
          </span>
        </div>
      </main>
    </div>
  );
}
