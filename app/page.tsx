"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

interface LetterData {
  char: string;
  photo: string;
  label: string;
  tag: string;
  rotation: number;
}

const lettersData: LetterData[] = [
  {
    char: "S",
    photo: "/img/polaroid-1.jpg",
    label: "Sausan Asma'",
    tag: "Full-Stack & Data // 01",
    rotation: -4,
  },
  {
    char: "A",
    photo: "/img/polaroid-2.jpg",
    label: "Software Engineering",
    tag: "Web & Systems // 02",
    rotation: 3,
  },
  {
    char: "U",
    photo: "/img/polaroid-3.jpg",
    label: "Data & BI Analytics",
    tag: "SQL, Python & BI // 03",
    rotation: -3,
  },
  {
    char: "S",
    photo: "/img/polaroid-4.jpg",
    label: "Problem Solver",
    tag: "Analytical Rigor // 04",
    rotation: 4,
  },
  {
    char: "A",
    photo: "/img/polaroid-5.jpg",
    label: "Clear Communicator",
    tag: "Data Storytelling // 05",
    rotation: -2,
  },
  {
    char: "N",
    photo: "/img/polaroid-1.jpg",
    label: "Bogor \u2022 Jakarta",
    tag: "IPB University // 06",
    rotation: 3,
  },
];

export default function Home() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-[var(--bg-page)] text-[var(--text-primary)] flex flex-col select-none transition-colors duration-300">
      {/* Floating Pill Navigation */}
      <Navbar />
      {/* Atmospheric Soft Sky-Blue Radiant Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full overflow-hidden -z-10"
      >
        <div className="absolute left-1/2 -top-[20%] -translate-x-1/2 w-[200vw] max-w-[3500px] h-[80vh] min-h-[700px] rounded-[50%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300/80 via-sky-200/40 via-blue-100/15 to-transparent dark:from-sky-500/55 dark:via-blue-600/30 dark:via-sky-950/20 dark:to-transparent blur-[100px]" />
        <div className="absolute left-1/2 top-[-5%] -translate-x-1/2 w-[160vw] max-w-[2500px] h-[60vh] rounded-[50%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/50 via-cyan-300/25 to-transparent dark:from-sky-400/40 dark:via-cyan-600/20 dark:to-transparent blur-[80px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[300px] rounded-[50%] bg-sky-300/70 dark:bg-sky-400/40 blur-[60px]" />
      </div>
      {/* CENTER SECTION: The Interactive Masterhead */}
      <div className="flex-1 flex flex-col justify-center items-center w-full px-4 sm:px-12 md:px-20 mt-12 sm:mt-0">
        <div className="relative w-full flex justify-center text-center overflow-visible">
          {/* FLOATING POLAROID POPUP - Anchored dynamically above the text */}
          <AnimatePresence>
            {activeIdx !== null && (
              <motion.div
                key={`polaroid-${activeIdx}`}
                initial={{
                  opacity: 0,
                  scale: 0.82,
                  y: 18,
                  rotate: lettersData[activeIdx].rotation * 1.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: lettersData[activeIdx].rotation,
                }}
                exit={{ opacity: 0, scale: 0.85, y: 12 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                style={{
                  left: `${((activeIdx + 0.5) / lettersData.length) * 100}%`,
                }}
                className="absolute top-[50%] mt-2 sm:mt-6 -translate-x-1/2 z-40 pointer-events-none select-none"
              >
                {/* Polaroid Frame */}
                <div className="relative p-2.5 sm:p-3 pb-4 sm:pb-5 bg-white text-neutral-900 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.65)] border border-neutral-200 w-40 sm:w-48 transition-transform">
                  {/* Washi Tape Graphic */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-amber-100/80 dark:bg-amber-200/70 border border-amber-300/40 backdrop-blur-xs shadow-xs rotate-[-2deg]" />
                  {/* Photo with 4:5 crop */}
                  <div className="w-full h-44 sm:h-52 overflow-hidden bg-neutral-100 rounded-[1px]">
                    <img
                      src={lettersData[activeIdx].photo}
                      alt={lettersData[activeIdx].label}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Polaroid Handwritten Caption Area */}
                  <div className="pt-2 text-left space-y-0.5">
                    <p className="text-[12px] sm:text-[13px] font-bold tracking-tight text-neutral-900 truncate">
                      {lettersData[activeIdx].label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-mono text-neutral-500 truncate">
                      {lettersData[activeIdx].tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Letters of SAUSAN */}
          <h1
            aria-label="SAUSAN"
            className="text-[22vw] sm:text-[16vw] md:text-[16.5vw] lg:text-[17vw] scale-y-[1.15] sm:scale-y-100 font-bold tracking-[-0.04em] leading-none text-[var(--text-primary)] text-center flex justify-center items-baseline"
          >
            {lettersData.map((item, idx) => {
              const isHovered = activeIdx === idx;
              return (
                <span
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className={`relative inline-block cursor-pointer transition-all duration-200 ease-out ${
                    isHovered
                      ? "text-transparent [-webkit-text-stroke:2.5px_currentColor] md:[-webkit-text-stroke:4px_currentColor] scale-[1.03] z-30"
                      : "hover:text-transparent hover:[-webkit-text-stroke:2px_currentColor] md:hover:[-webkit-text-stroke:3.5px_currentColor]"
                  }`}
                >
                  {item.char}
                </span>
              );
            })}
          </h1>
        </div>
      </div>
      {/* BOTTOM SECTION: Grounded Information & CTA */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-24 pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
        {/* Professional Statement */}
        <div className="max-w-2xl">
          <div className="w-8 h-[2px] bg-neutral-900 dark:bg-white mb-4 opacity-20 hidden md:block" />
          <p className="text-xl md:text-3xl font-normal tracking-[-0.02em] text-[var(--text-secondary)] leading-snug transition-colors duration-300">
            Full-stack software engineer &amp; data analyst turning complex
            systems into actionable business decisions.
            <span className="inline-block w-[3px] h-[1em] ml-1 bg-sky-500 animate-pulse translate-y-1" />
          </p>
        </div>

        {/* View Resume Button - Re-styled to be slightly sharper and more architectural */}
        <div className="shrink-0 flex pb-1">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Curriculum Vitae (PDF)"
            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium tracking-wide rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">View Resume</span>
            <span className="relative z-10 font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
            {/* Subtle hover sweep effect */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>
    </main>
  );
}
