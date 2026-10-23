"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";

type StoryTab = "all" | "education" | "experience" | "leadership" | "skills";

export default function StoryPage() {
  const [activeTab, setActiveTab] = useState<StoryTab>("all");

  const tabs: { id: StoryTab; label: string }[] = [
    { id: "all", label: "All Timeline" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience & Projects" },
    { id: "leadership", label: "Leadership" },
    { id: "skills", label: "Skills & Tools" },
  ];

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

      <main className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 pb-32 space-y-12 sm:space-y-14">
        {/* HEADER: Clean Typography matching Works page */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <span>Profile &amp; Background</span>
              <span className="text-sm font-sans">&sim;</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
              Background, Studies &amp;{" "}
              {/* Blue gradient box styled as if text is drag-selected */}
              <span className="relative inline-block px-2.5 py-0.5 rounded-md bg-gradient-to-r from-sky-300/80 via-blue-200/60 to-sky-100/40 dark:from-sky-500/40 dark:via-blue-600/30 dark:to-sky-950/20 text-black dark:text-white border border-sky-400/40">
                Story
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-1">
              Software Engineering undergraduate at IPB University focused on Data Analytics &amp; Business Intelligence, grounded by hands-on development experience.
            </p>
          </div>

          {/* Location & Status Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Seeking Data / BI Internship</span>
            </div>
          </div>
        </div>

        {/* 1. TOP ANCHOR: SIGNATURE PROFILE CARD (PRIMARY BLUE) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white border border-sky-400/40 p-7 sm:p-9 shadow-xl shadow-sky-500/15 overflow-hidden">
          {/* Subtle Linear Grid Texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/20">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-inner shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-sky-100">
                  Sausan Asma&apos; Mufiidah
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                  Data Analyst with Software Roots
                </h2>
              </div>
            </div>

            {/* Scholarship Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs text-white font-medium self-start md:self-auto shrink-0 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
              <span>YPLI Scholarship Awardee 2026/2027</span>
            </div>
          </div>

          <div className="relative z-10 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3 text-sm text-white/95 leading-relaxed font-normal">
              <p>
                Software Engineering student at IPB University focused on turning raw data into decision-driven business intelligence.
              </p>
              <p>
                Hands-on experience building full-stack applications (Laravel, React, MySQL) and modeling 99k+ orders in Power BI &amp; SQL allows me to catch data errors at the source and construct reliable analytical pipelines for commercial leadership.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2 pt-2 md:pt-0 md:border-l md:border-white/20 md:pl-6 text-xs font-mono text-sky-100">
              <div className="flex items-center gap-2">
                <span className="text-white">&bull;</span>
                <span>Institut Pertanian Bogor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">&bull;</span>
                <span>Class of 2028 (Expected)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">&bull;</span>
                <span>Bogor, West Java, ID</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SEGMENTED FILTER BAR */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs"
                    : "border border-zinc-200 dark:border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3. INTERACTIVE HAIRLINE STUDIO TIMELINE */}
        <div className="space-y-12">
          {/* SECTION: EDUCATION & HONORS */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="space-y-3">
              <div className="pb-2 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                <span>01 / Education &amp; Honors</span>
                <span className="text-zinc-400 font-normal">Academic Track</span>
              </div>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {/* Entry 1: Degree */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      Institut Pertanian Bogor (IPB University)
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Aug 2024 &mdash; Jun 2028 (Expected)
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
                    Bachelor of Applied Software Engineering (D4) &bull; Bogor, ID
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)]">Relevant Coursework:</strong> Database Systems, Data Mining Techniques, Data Analysis &amp; Visualization, Probability &amp; Statistics, Big Data Technology.
                  </p>
                </div>

                {/* Entry 2: Case Competitions */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      National Business Plan &amp; Case Competitions
                    </h3>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                      Winner &amp; Semifinalist (4x)
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    Outperformed 120+ Participating Teams
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Formulated competitive business strategies, revenue models, and data-backed market analysis across four national university competitions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: EXPERIENCE & PROJECTS */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="space-y-3">
              <div className="pb-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                <span>02 / Experience &amp; Delivered Projects</span>
                <span className="text-zinc-400 font-normal">Data &amp; Software</span>
              </div>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {/* Olist */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Olist E-Commerce Commercial Dashboard
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      PostgreSQL &bull; Power BI &bull; DAX
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    99k+ Orders Modeled &bull; 14 Business Metrics
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Built a 5-page decision-driven BI dashboard on ~99k Brazilian e-commerce orders designed for a Commercial Director audience (executive overview, category performance, retention, territory, growth). Documented formulas and limitation proxies (e.g., Failed Order Rate as loss proxy).
                  </p>
                </div>

                {/* ReCircle */}
                <div className="py-6 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      ReCircle: Marketplace Application
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Laravel REST API &bull; React &bull; MySQL
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    Full-Stack Marketplace &bull; Midtrans Gateway
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Developed a full-stack marketplace with 7+ core features (authentication, product listings, search, transaction management, and checkout). Designed a seller dashboard presenting sales data, user metrics, and monthly statistics to help vendors track performance.
                  </p>
                  {/* ReCircle Screenshot Preview */}
                  <div className="mt-3.5 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 max-w-lg shadow-xs">
                    <img
                      src="/img/recircle/Screenshot 2026-10-21 015914.png"
                      alt="ReCircle Marketplace Application Interface"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Saintara Architecture */}
                <div className="py-6 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Saintara: System Design &amp; OOP Architecture
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Laravel &bull; MySQL &bull; ERD &bull; OOP
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    System Modeling &bull; Character Analysis
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Engineered full-stack character analysis system grounded in rigorous object-oriented architecture, database normalization, relational ERD schemas, and end-to-end use case documentation.
                  </p>
                  {/* Saintara Screenshots Preview */}
                  <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 shadow-xs">
                      <img
                        src="/img/saintara/Screenshot 2026-10-21 015550.png"
                        alt="Saintara Architecture Screenshot 1"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 shadow-xs">
                      <img
                        src="/img/saintara/Screenshot 2026-10-21 015616.png"
                        alt="Saintara Architecture Screenshot 2"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* SMPN 4 Kuningan */}
                <div className="py-6 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Administrative &amp; Web Development Intern
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Oct 2023 &mdash; Dec 2023
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    SMP Negeri 4 Kuningan
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Developed a web-based e-library system for 100+ students, integrating the Google Books API to provide instant access to free public-domain reading materials.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: LEADERSHIP & ORGANIZATIONS */}
          {(activeTab === "all" || activeTab === "leadership") && (
            <div className="space-y-3">
              <div className="pb-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                <span>03 / Leadership &amp; Organizations</span>
                <span className="text-zinc-400 font-normal">Campus Impact</span>
              </div>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {/* DWDG */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Human Capital Associate &bull; Do Well Do Good (DWDG) IPB
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Mar 2026 &mdash; Present
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Coordinated evaluations of 50+ members across 6 divisions, collecting and consolidating feedback to support member development. Led open recruitment programs as Project Officer for PVP and BOD Batch 5, and served as Vice Project Officer for the DWDG internship intake.
                  </p>
                </div>

                {/* Pendikar */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Event Division Staff &bull; Pendikar 2025
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Feb 2025 &mdash; Jul 2025
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    Pendidikan Karya &bull; BEM IPB Vocational School
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Developed the event concept and coordinated a university-level innovation competition with 4 categories and 1,000+ participating students.
                  </p>
                </div>

                {/* SITE 62 */}
                <div className="py-5 group transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Event Division Secretary &bull; SITE 62
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      Sep 2025 &mdash; Dec 2025
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                    Software Engineering Orientation Program
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Managed official event documents and correspondence, recorded detailed meeting minutes, and tracked operational action items to keep timelines on schedule.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: SKILLS & TOOLSET */}
          {(activeTab === "all" || activeTab === "skills") && (
            <div className="space-y-4">
              <div className="pb-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                <span>04 / Technical Toolset &amp; Capabilities</span>
                <span className="text-zinc-400 font-normal">Hands-On Stack</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Data & BI */}
                <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-[#111318]/90 border border-zinc-200/80 dark:border-white/10 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
                    Data Analytics &amp; Business Intelligence
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {["SQL", "PostgreSQL", "Power BI", "DAX", "Python (Pandas)", "Excel", "Data Modeling", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Data Visualization"].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Machine Learning & Software */}
                <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-[#111318]/90 border border-zinc-200/80 dark:border-white/10 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
                    Machine Learning &amp; Software Development
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {["Scikit-learn", "Regression", "Classification", "Feature Engineering", "R", "React", "Laravel", "REST API", "MySQL", "Git & GitHub"].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
