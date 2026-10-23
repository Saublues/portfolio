"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsList, Project } from "@/data/projects";
import { LaptopEvidenceShowcase } from "@/components/LaptopEvidenceShowcase";
import Lenis from "lenis";

interface WorkDrawerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkDrawerOverlay({ isOpen, onClose }: WorkDrawerOverlayProps) {
  // CRITICAL FIX: null by default so opening Works does NOT auto-hover or alter background!
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Preload and decode images into browser GPU memory on mount for 0ms hover latency
  useEffect(() => {
    projectsList.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  // Lock body scroll ONLY when full detail case study is open
  useEffect(() => {
    if (isOpen && selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, selectedProject]);

  // Attach dedicated Lenis smooth scroll instance to project detail container
  useEffect(() => {
    if (!selectedProject || !scrollContainerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", (e: { scroll: number }) => {
      setScrollY(e.scroll);
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [selectedProject]);

  // Reset states on modal close
  useEffect(() => {
    if (!isOpen) {
      setSelectedProject(null);
      setHoveredProject(null);
      setScrollY(0);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedProject, onClose]);

  // Reset scroll when selected project changes
  useEffect(() => {
    setScrollY(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.focus();
    }
  }, [selectedProject]);

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DROPDOWN STAGE: Floating Drawer & Fast Hover Preview   */}
      {/* (User stays on current page. Background preview only      */}
      {/*  appears WHEN actively hovering an item!)                 */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && !selectedProject && (
          <>
            {/* Transparent click-outside backdrop to dismiss dropdown */}
            <div
              onClick={onClose}
              aria-hidden="true"
              className="fixed inset-0 z-30 cursor-default"
            />

            {/* Solid Background Image Preview (ONLY visible when actively hovering an item - 100% Opaque!) */}
            <div
              aria-hidden="true"
              className={`fixed inset-0 z-30 pointer-events-none transition-opacity duration-200 ease-out bg-black ${
                hoveredProject ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {projectsList.map((p) => {
                const isCurrent = hoveredProject?.num === p.num;
                return (
                  <img
                    key={p.num}
                    src={p.image}
                    alt={p.title}
                    loading="eager"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 pointer-events-none ${
                      isCurrent ? "opacity-100" : "opacity-0"
                    }`}
                  />
                );
              })}
              {/* Subtle vignette for contrast and legibility, without transparency bleed-through */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/70 pointer-events-none" />
            </div>

            {/* THE FLOATING DROPDOWN DRAWER (100% Solid background, z-50) */}
            <motion.aside
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseLeave={() => setHoveredProject(null)}
              className="fixed top-20 right-4 sm:right-8 bottom-6 w-[400px] max-w-[calc(100vw-2rem)] z-50 bg-[#090a0f] text-white rounded-3xl p-6 border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col min-h-0"
            >
              {/* Dropdown Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-light">
                  Selected Works ({projectsList.length})
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Work Dropdown"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  &#10005;
                </button>
              </div>

              {/* Scrollable Project List: data-lenis-prevent guarantees smooth scrolling */}
              <div
                data-lenis-prevent
                onMouseLeave={() => setHoveredProject(null)}
                className="flex-1 min-h-0 overflow-y-auto py-3 space-y-1.5 pr-1.5 custom-scrollbar"
              >
                {projectsList.map((item) => {
                  const isHovered = hoveredProject?.num === item.num;

                  return (
                    <div
                      key={item.num}
                      onMouseEnter={() => setHoveredProject(item)}
                      onClick={() => setSelectedProject(item)}
                      className={`group px-4 py-3 rounded-2xl cursor-pointer transition-all duration-150 flex flex-col ${
                        isHovered
                          ? "bg-white text-black shadow-lg translate-x-1"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-baseline justify-between">
                        {/* Slender typography matching 'WORK' pill */}
                        <h3 className="text-xl sm:text-[22px] font-normal tracking-tight">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs font-mono font-light ${
                            isHovered ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          ({item.num})
                        </span>
                      </div>
                      {/* Slender sub-label */}
                      <div
                        className={`text-xs font-light mt-1 truncate ${
                          isHovered ? "text-zinc-600" : "text-zinc-400"
                        }`}
                      >
                        {item.category}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Drawer Footer instruction */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-light text-zinc-400 shrink-0">
                <span>Hover to preview visual</span>
                <span className="text-sky-400">Click to open &rarr;</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 2. DETAIL STAGE: FULL CASE STUDY WITH PARALLAX CURTAIN  */}
      {/* (Only opens when user clicks a specific project)         */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && selectedProject && (
          <motion.div
            key="case-study-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] w-full h-full bg-white text-neutral-900 overflow-hidden"
          >
            {/* Top Bar inside Case Study View */}
            <header className="fixed top-0 inset-x-0 h-20 px-6 sm:px-10 flex items-center justify-between z-[130] pointer-events-auto">
              {/* Back to works button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all shadow-lg cursor-pointer bg-black/90 hover:bg-black text-white border-white/20"
              >
                &larr; Works
              </button>

              {/* Center Branding & Optional Live Web Pill */}
              <div className="flex items-center gap-3">
                <div
                  className={`text-xs sm:text-sm font-normal tracking-[0.22em] uppercase transition-colors ${
                    scrollY > 200 ? "text-black/80" : "text-white/90"
                  }`}
                >
                  SAUSAN
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live production site for ${selectedProject.title}`}
                    className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all shadow-sm hover:scale-105 border ${
                      scrollY > 200
                        ? "bg-black text-white border-black hover:bg-neutral-800"
                        : "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md"
                    }`}
                  >
                    <span>Live Web</span>
                    <span>↗</span>
                  </a>
                )}
              </div>

              {/* Close completely */}
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-white text-black text-xs font-mono uppercase tracking-widest font-normal border border-white transition-all shadow-xl hover:scale-105 cursor-pointer"
              >
                ✕ Close
              </button>
            </header>

            {/* Scroll Container for Case Study (Controlled by dedicated Lenis instance) */}
            <div
              ref={scrollContainerRef}
              tabIndex={0}
              className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden z-30 focus:outline-none"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* ---------------------------------------------------- */}
              {/* LAYER BEHIND (STAYING LAYER): The 6 Requested Sections*/}
              {/* Clean White Editorial Studio Background (Anton & Irene) */}
              {/* ---------------------------------------------------- */}
              <div className="relative min-h-[200vh] bg-white text-neutral-900 pt-[100vh]">
                <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-28 space-y-24">
                  {/* SECTION 1: THE HOOK (HERO) */}
                  <section className="space-y-6 pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-mono uppercase tracking-wider">
                        <span>{selectedProject.category}</span>
                        <span>&bull;</span>
                        <span>Case Study ({selectedProject.num})</span>
                      </div>

                      {/* Direct External Link to Live Website (Conditional) */}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-mono uppercase tracking-wider transition-all shadow-md hover:scale-105 group"
                        >
                          <span>Visit Live Project</span>
                          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>

                    {/* Judul Raksasa */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal tracking-tight text-black leading-[1.02]">
                      {selectedProject.hookTitle}
                    </h1>

                    {/* 1 Kalimat Impact Bisnis */}
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-700 leading-relaxed max-w-4xl pt-2">
                      {selectedProject.hookImpact}
                    </p>
                  </section>

                  {/* SECTION 2: THE CONTEXT (Max 2 short paragraphs) */}
                  <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-neutral-200">
                    <div className="md:col-span-4 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        The Context
                      </span>
                      <h4 className="text-sm font-mono text-neutral-900 font-medium">
                        {selectedProject.client}
                      </h4>
                    </div>

                    <div className="md:col-span-8 space-y-5 text-lg sm:text-xl font-light text-neutral-700 leading-relaxed">
                      {selectedProject.contextParagraphs.map(
                        (paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ),
                      )}
                    </div>
                  </section>

                  {/* SECTION 3: THE EVIDENCE (Visual: Laptop Carousel & Dual-Device Showcase) */}
                  <section className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        The Evidence // Visual Artifact
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        Interactive Device Showcase
                      </span>
                    </div>

                    {/* Laptop Frame & Carousel / Dual Device */}
                    <LaptopEvidenceShowcase project={selectedProject} />
                  </section>

                  {/* SECTION 4: THE APPROACH (Large typography bullet list, NOT paragraphs) */}
                  <section className="space-y-8 pt-8 border-t border-neutral-200">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        The Approach // Execution Protocol
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {selectedProject.approachSteps.length} Key Phases
                      </span>
                    </div>

                    <div className="divide-y divide-neutral-200">
                      {selectedProject.approachSteps.map((step) => (
                        <div
                          key={step.step}
                          className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
                        >
                          <div className="md:col-span-2 text-2xl sm:text-3xl font-mono text-neutral-400 font-light">
                            {step.step}
                          </div>
                          <div className="md:col-span-5 text-2xl sm:text-3xl font-normal text-black tracking-tight">
                            {step.title}
                          </div>
                          <div className="md:col-span-5 text-base sm:text-lg font-light text-neutral-600 leading-relaxed">
                            {step.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* SECTION 5: THE CORE INSIGHT (Typographic Highlight in giant font) */}
                  <section className="py-12 sm:py-16 border-y border-neutral-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-6">
                      The Core Insight
                    </span>
                    <blockquote className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-950 leading-[1.12]">
                      &ldquo;{selectedProject.coreInsight}&rdquo;
                    </blockquote>
                  </section>

                  {/* SECTION 6: THE OUTCOME (Speed, revenue, SLA, metrics) */}
                  <section className="space-y-8 pt-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      The Outcome // Verified Deliverables
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                      {selectedProject.outcomes.map((out, idx) => (
                        <div
                          key={idx}
                          className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-3"
                        >
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                            {out.label}
                          </span>
                          <div className="text-4xl sm:text-5xl font-normal text-black tracking-tight">
                            {out.metric}
                          </div>
                          <p className="text-sm font-light text-neutral-600 leading-relaxed">
                            {out.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tools pill tags */}
                    <div className="flex flex-wrap gap-2 pt-6">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3.5 py-1.5 rounded-full bg-neutral-100 text-xs font-mono text-neutral-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* BOTTOM ACTION BAR */}
                  <div className="pt-16 pb-12 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="px-8 py-4 rounded-full bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer font-normal shadow-lg hover:scale-105"
                      >
                        &larr; Return to Works Index
                      </button>

                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono uppercase tracking-widest transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2 font-normal"
                        >
                          <span>Launch Live Web</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>

                    <div className="text-xs font-mono text-neutral-400">
                      SAUSAN ASMA&apos; MUFIIDAH &bull; 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* LAYER IN FRONT (THE HERO CURTAIN): Peels up on scroll */}
              {/* Zero-Lag Studio Dark Curtain (Pure CSS / Lightweight)  */}
              {/* ---------------------------------------------------- */}
              <div
                style={{
                  transform: `translateY(-${Math.min(scrollY, 1200)}px)`,
                  willChange: "transform",
                }}
                className="fixed inset-0 w-full h-screen z-20 pointer-events-none overflow-hidden shadow-2xl transition-transform duration-75 ease-out bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white"
              >
                {/* Subtle Studio Blueprint Grid */}
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                {/* Hero Title Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-20 z-10">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="max-w-4xl space-y-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-light text-sky-300">
                        <span>{selectedProject.category}</span>
                        <span>&bull;</span>
                        <span>({selectedProject.num})</span>
                      </div>

                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-medium tracking-wide transition-all shadow-md hover:scale-105 group"
                        >
                          <span>Live Web</span>
                          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>

                    {/* Slender bold display */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.04]">
                      {selectedProject.title}
                    </h1>

                    <p className="text-base sm:text-xl font-light text-zinc-300 leading-relaxed max-w-2xl">
                      {selectedProject.subtitle}
                    </p>

                    {/* Scroll Prompt */}
                    <div className="pt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-400 font-light">
                      <span className="inline-block animate-bounce">
                        &darr;
                      </span>
                      <span>
                        Scroll to lift curtain &amp; explore case study
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
