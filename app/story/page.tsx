"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";

type Category = "all" | "data" | "software" | "leadership" | "academic";

interface LedgerEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  impactMetric: string;
  summary: string;
  tools: string[];
  artifacts?: { src: string; label: string }[];
}

const PIPELINE_STAGES = [
  {
    step: "Stage 01 — Upstream Source",
    role: "Application & Schema Engineering",
    description:
      "Building full-stack systems and normalized relational schemas so transactional data is captured cleanly at the source.",
    tech: ["Laravel", "React", "REST API", "MySQL", "ERD Normalization", "OOP"],
  },
  {
    step: "Stage 02 — Analytical Processing",
    role: "Querying, Cleaning & Modeling",
    description:
      "Writing complex SQL aggregations, handling missing/anomalous records, and training statistical or machine learning models.",
    tech: [
      "PostgreSQL",
      "SQL",
      "Python (Pandas)",
      "R",
      "Scikit-learn",
      "EDA & Feature Eng.",
    ],
  },
  {
    step: "Stage 03 — Downstream Decision",
    role: "Business Intelligence & Strategy",
    description:
      "Translating modeled datasets into interactive executive dashboards, cohort retention metrics, and commercial recommendations.",
    tech: [
      "Power BI",
      "DAX",
      "Star Schema",
      "Excel",
      "KPI Architecture",
      "Case Strategy",
    ],
  },
];

const LEDGER_ENTRIES: LedgerEntry[] = [
  {
    id: "olist",
    year: "2026",
    title: "Olist E-Commerce Commercial Dashboard",
    organization: "Business Intelligence Case Study",
    category: "data",
    categoryLabel: "Data & BI",
    impactMetric: "99k+ Orders · 14 KPIs",
    summary:
      "Built a 5-page decision-driven BI dashboard on ~99,000 Brazilian e-commerce orders tailored for a Commercial Director audience (executive overview, category performance, cohort retention, territory, and growth). Documented DAX formulas and data limitation proxies such as Failed Order Rate.",
    tools: ["PostgreSQL", "Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "recircle",
    year: "2026",
    title: "ReCircle: Campus Marketplace Platform",
    organization: "Full-Stack Product & Vendor Analytics",
    category: "software",
    categoryLabel: "Software Eng",
    impactMetric: "7+ Core Modules · Midtrans API",
    summary:
      "Developed a full-stack preloved marketplace featuring authentication, catalog search, transaction state management, and Midtrans payment webhooks. Engineered a dedicated seller analytics dashboard tracking revenue trends, user metrics, and monthly sales velocity.",
    tools: ["Laravel REST API", "React", "MySQL", "Midtrans Gateway"],
    artifacts: [
      {
        src: "/img/recircle/Screenshot 2026-10-21 015914.png",
        label: "ReCircle Marketplace & Seller Dashboard UI",
      },
    ],
  },
  {
    id: "dwdg",
    year: "2026",
    title: "Human Capital Associate & Recruitment PO",
    organization: "Do Well Do Good (DWDG) IPB",
    category: "leadership",
    categoryLabel: "Leadership",
    impactMetric: "50+ Members · 6 Divisions",
    summary:
      "Coordinate performance evaluations across 6 divisions, synthesizing member feedback into structured development rubrics. Served as Project Officer for PVP & BOD Batch 5 open recruitment and Vice Project Officer for the internship intake.",
    tools: ["KPI Rubrics", "Talent Evaluation", "Project Governance"],
  },
  {
    id: "competitions",
    year: "2025–26",
    title: "National Business Plan & Case Competitions",
    organization: "4x National Awardee & Semifinalist (Joined 8+ competitions)",
    category: "data",
    categoryLabel: "Data & BI",
    impactMetric: "Beat 120+ Teams",
    summary:
      "Formulated commercial strategies, financial projections, and data-backed market analyses across four national university competitions—combining quantitative market sizing with actionable product positioning.",
    tools: ["Market Sizing", "Unit Economics", "Commercial Strategy"],
  },
  {
    id: "saintara",
    year: "2025–26",
    title: "Saintara: Character Testing Architecture",
    organization: "Qbest Institute Platform",
    category: "software",
    categoryLabel: "Software Eng",
    impactMetric: "Normalized ERD · Automated Scoring",
    summary:
      "Engineered a full-stack digital character assessment system grounded in strict object-oriented programming (OOP), relational database normalization, ERD schemas, and end-to-end use case specifications.",
    tools: ["Laravel", "MySQL", "ERD", "OOP Architecture"],
    artifacts: [
      {
        src: "/img/saintara/Screenshot 2026-10-21 015550.png",
        label: "Saintara System Architecture & Landing View",
      },
      {
        src: "/img/saintara/Screenshot 2026-10-21 015616.png",
        label: "Saintara Assessment & Automated Scoring Module",
      },
    ],
  },
  {
    id: "site62",
    year: "2025",
    title: "Event Division Secretary",
    organization: "SITE 62 — Software Engineering Orientation",
    category: "leadership",
    categoryLabel: "Leadership",
    impactMetric: "Operational Documentation",
    summary:
      "Managed official event correspondence, recorded structured meeting minutes, and tracked cross-division action items to keep orientation milestones strictly on schedule.",
    tools: ["Operations", "Documentation", "Timeline Tracking"],
  },
  {
    id: "pendikar",
    year: "2025",
    title: "Event Division Staff",
    organization: "Pendikar 2025 · BEM Sekolah Vokasi IPB",
    category: "leadership",
    categoryLabel: "Leadership",
    impactMetric: "1,000+ Student Participants",
    summary:
      "Designed the core event concept and coordinated execution for a university-level innovation competition spanning 4 categories and over 1,000 participating students.",
    tools: ["Event Architecture", "Cross-Team Coordination"],
  },
  {
    id: "ipb",
    year: "2024–28",
    title: "B.App.Sc. in Software Engineering (D4)",
    organization: "Institut Pertanian Bogor (IPB University)",
    category: "academic",
    categoryLabel: "Academic",
    impactMetric: "YPLI Scholar 2026/2027",
    summary:
      "Undergraduate track combining software engineering with analytical systems. Coursework: Database Systems, Data Mining Techniques, Data Analysis & Visualization, Probability & Statistics, Big Data Technology.",
    tools: ["Database Systems", "Data Mining", "Probability & Statistics"],
  },
  {
    id: "smpn4",
    year: "2023",
    title: "Administrative & Web Development Intern",
    organization: "SMP Negeri 4 Kuningan",
    category: "software",
    categoryLabel: "Software Eng",
    impactMetric: "200+ Active Students",
    summary:
      "Developed a web-based e-library platform for 100+ students, integrating the Google Books API to index and serve free public-domain reading materials.",
    tools: ["Web Development", "Google Books API", "REST Integration"],
  },
];

export default function StoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    olist: true,
    recircle: true,
  });

  const toggleRow = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allExpanded = LEDGER_ENTRIES.every((entry) => expandedIds[entry.id]);

  const toggleExpandAll = () => {
    if (allExpanded) {
      setExpandedIds({});
    } else {
      const next: Record<string, boolean> = {};
      LEDGER_ENTRIES.forEach((e) => {
        next[e.id] = true;
      });
      setExpandedIds(next);
    }
  };

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Records (9)" },
    { id: "data", label: "Data & BI" },
    { id: "software", label: "Software Eng" },
    { id: "leadership", label: "Leadership" },
    { id: "academic", label: "Academic" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] selection:bg-sky-500/20 selection:text-sky-600 dark:selection:text-sky-300">
      <Navbar />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-28 space-y-20">
        {/* =================================================================
            1. MASTHEAD: PRINT-STYLE EDITORIAL HEADER & FACT SHEET
           ================================================================= */}
        <section className="space-y-10">
          <div className="border-b-2 border-zinc-900 dark:border-zinc-100 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
              Sausan Asma&apos; Mufiidah &mdash; Background &amp; Index
            </p>
            <p className="text-xs font-mono text-[var(--text-secondary)]">
              Bogor, ID &middot; Seeking Data / BI Internship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Core Narrative Thesis */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.08]">
                I build the software that captures the data, then model the{" "}
                <span className="italic font-serif font-normal text-sky-600 dark:text-sky-400">
                  decisions
                </span>{" "}
                behind it.
              </h1>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Most data problems start upstream in poorly structured
                application databases. As a Software Engineering undergraduate
                at IPB University, I bridge both worlds: architecting
                transactional web systems (Laravel, React, MySQL) and
                transforming 99k+ row datasets into executive Business
                Intelligence (SQL, Power BI, Python).
              </p>
            </div>

            {/* Right: Crisp Key-Value Fact Sheet (Replaces generic SaaS cards) */}
            <div className="lg:col-span-5 border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 text-xs sm:text-sm">
              <div className="py-3 flex justify-between gap-4">
                <span className="font-mono text-[var(--text-secondary)]">
                  Education
                </span>
                <span className="font-medium text-right">
                  IPB University (D4 Software Eng, &apos;24)
                </span>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <span className="font-mono text-[var(--text-secondary)]">
                  Scholarship
                </span>
                <span className="font-medium text-right">
                  YPLI Awardee 2026/2027
                </span>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <span className="font-mono text-[var(--text-secondary)]">
                  Track Record
                </span>
                <span className="font-medium text-right">
                  4x Business Case Winner / Semifinalist
                </span>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <span className="font-mono text-[var(--text-secondary)]">
                  Primary Stack
                </span>
                <span className="font-mono text-right text-sky-600 dark:text-sky-400">
                  SQL &middot; Power BI &middot; Python &middot; Laravel
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. THE ARCHITECTURE PIPELINE: WHY SOFTWARE + DATA WORKS
           ================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              Operational Architecture (Upstream to Downstream)
            </h2>
            <span className="text-xs font-mono text-[var(--text-secondary)]">
              How my technical stack connects across the data lifecycle
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-200 dark:border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
            {PIPELINE_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="p-6 flex flex-col justify-between space-y-6 bg-zinc-50/30 dark:bg-zinc-900/10"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                    <span>{stage.step}</span>
                    {idx < 2 && (
                      <span className="hidden md:inline text-zinc-400">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold tracking-tight">
                    {stage.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
                  <p className="text-[11px] font-mono text-[var(--text-secondary)] leading-relaxed">
                    {stage.tech.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            3. MASTER CHRONOLOGY LEDGER (SCAN IN 5s, CLICK TO INSPECT)
           ================================================================= */}
        <section className="space-y-5">
          {/* Controls Header (Non-sticky, zero scroll hijacking) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                Complete Index (2023 &mdash; 2026)
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Click any row to inspect technical scope and interface
                artifacts, or filter by discipline.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Spotlight Filter */}
              <div
                role="group"
                aria-label="Filter timeline by category"
                className="inline-flex flex-wrap items-center p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60"
              >
                {categories.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                        active
                          ? "bg-white dark:bg-zinc-800 text-[var(--text-primary)] font-medium shadow-2xs"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* 1-Click Expand/Collapse All */}
              <button
                type="button"
                onClick={toggleExpandAll}
                className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"
              >
                {allExpanded ? "Collapse All" : "Expand All"}
              </button>
            </div>
          </div>

          {/* Ledger Table Header (Desktop only) */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-3 text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)]">
            <div className="col-span-2">Year / Domain</div>
            <div className="col-span-5">Role or Delivered System</div>
            <div className="col-span-4">Scope &amp; Metric</div>
            <div className="col-span-1 text-right">Detail</div>
          </div>

          {/* Ledger Rows */}
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            {LEDGER_ENTRIES.map((entry) => {
              const isMatched =
                selectedCategory === "all" ||
                selectedCategory === entry.category;
              const isOpen = !!expandedIds[entry.id];

              return (
                <div
                  key={entry.id}
                  className={`transition-opacity duration-200 ${
                    isMatched ? "opacity-100" : "opacity-30 hover:opacity-75"
                  }`}
                >
                  {/* Summary Row (Interactive Tap Target) */}
                  <button
                    type="button"
                    onClick={() => toggleRow(entry.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-4 px-2 sm:px-3 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline"
                  >
                    {/* Col 1: Year + Domain */}
                    <div className="md:col-span-2 flex items-center gap-2 text-xs font-mono tabular-nums">
                      <span className="text-[var(--text-secondary)] w-14 shrink-0">
                        {entry.year}
                      </span>
                      <span className="text-sky-600 dark:text-sky-400">
                        {entry.categoryLabel}
                      </span>
                    </div>

                    {/* Col 2: Title + Org */}
                    <div className="md:col-span-5">
                      <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        {entry.title}
                      </span>
                      <span className="block sm:inline sm:ml-2 text-xs text-[var(--text-secondary)]">
                        {entry.organization}
                      </span>
                    </div>

                    {/* Col 3: Metric */}
                    <div className="md:col-span-4 text-xs font-mono text-[var(--text-secondary)]">
                      {entry.impactMetric}
                    </div>

                    {/* Col 4: Plus/Minus Indicator */}
                    <div className="hidden md:block md:col-span-1 text-right font-mono text-sm text-[var(--text-secondary)]">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Expanded Inspection Drawer */}
                  {isOpen && (
                    <div className="px-2 sm:px-3 pb-6 pt-1 md:grid md:grid-cols-12 gap-4">
                      <div className="md:col-start-3 md:col-span-9 space-y-4 border-l-2 border-sky-500/40 pl-4">
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          {entry.summary}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-primary)]">
                          <span className="text-[var(--text-secondary)]">
                            Stack / Methods:
                          </span>
                          {entry.tools.map((tool, i) => (
                            <span key={tool}>
                              {tool}
                              {i < entry.tools.length - 1 ? " ·" : ""}
                            </span>
                          ))}
                        </div>

                        {/* Screenshots (Only rendered when expanded) */}
                        {entry.artifacts && entry.artifacts.length > 0 && (
                          <div
                            className={`pt-2 grid grid-cols-1 ${
                              entry.artifacts.length > 1
                                ? "sm:grid-cols-2"
                                : "max-w-lg"
                            } gap-4`}
                          >
                            {entry.artifacts.map((art) => (
                              <figure
                                key={art.src}
                                className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-2"
                              >
                                <img
                                  src={art.src}
                                  alt={art.label}
                                  className="w-full h-auto object-cover border border-zinc-200/50 dark:border-zinc-800"
                                  loading="lazy"
                                />
                                <figcaption className="mt-1.5 text-[11px] font-mono text-[var(--text-secondary)]">
                                  {art.label}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
