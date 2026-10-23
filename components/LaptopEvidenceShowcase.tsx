"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, EvidenceSlide } from "@/data/projects";

interface LaptopEvidenceShowcaseProps {
  project: Project;
}

export function LaptopEvidenceShowcase({ project }: LaptopEvidenceShowcaseProps) {
  const slides: EvidenceSlide[] =
    project.evidenceSlides && project.evidenceSlides.length > 0
      ? project.evidenceSlides
      : [
          {
            image: project.evidenceImage,
            title: "Production Architecture View",
            caption: project.evidenceCaption,
          },
        ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];
  const isDualDevice = Boolean(project.mobileEvidenceImage || project.mobileEvidenceSlides?.length);

  const mobileSlides: EvidenceSlide[] =
    project.mobileEvidenceSlides && project.mobileEvidenceSlides.length > 0
      ? project.mobileEvidenceSlides
      : project.mobileEvidenceImage
      ? [
          {
            image: project.mobileEvidenceImage,
            title: "Aplikasi Seluler ReCircle",
            caption: project.mobileEvidenceCaption || "Mobile-First Application View",
          },
        ]
      : [];

  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const prevMobileSlide = () => {
    setCurrentMobileIndex((prev) => (prev === 0 ? mobileSlides.length - 1 : prev - 1));
  };

  const nextMobileSlide = () => {
    setCurrentMobileIndex((prev) => (prev === mobileSlides.length - 1 ? 0 : prev + 1));
  };

  const activeMobileSlide = mobileSlides[currentMobileIndex];

  return (
    <div className="space-y-6">
      {/* Device Showcase Container */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 pt-4 pb-2">
        {/* ======================================================== */}
        {/* LAPTOP MOCKUP (OPTI A & OPTI B PRIMARY)                   */}
        {/* ======================================================== */}
        <div className={`w-full ${isDualDevice ? "lg:w-[68%]" : "max-w-4xl"} transition-all`}>
          {/* Laptop Screen Lid */}
          <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#18181b] p-2.5 sm:p-4 pb-2 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
            {/* Webcam Sensor Dot */}
            <div className="w-full flex justify-center pb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 border border-white/10 inline-block shadow-inner" />
            </div>

            {/* Inner Screen Display (16:9 aspect ratio matching 1920x1080 exactly) */}
            <div className="relative aspect-[16/9] w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#090a0f] shadow-inner select-none">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-full h-full object-contain object-center bg-[#090a0f]"
              />

              {/* Floating Slide Counter Pill (inside screen if multiple slides) */}
              {slides.length > 1 && (
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 shadow-lg">
                  {currentIndex + 1} / {slides.length}
                </div>
              )}

              {/* Next/Prev Arrow Controls inside screen */}
              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/70 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-lg active:scale-95"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/70 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-lg active:scale-95"
                  >
                    &rarr;
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Laptop Base / Aluminum Chin Hinge */}
          <div className="relative h-3 sm:h-4 bg-[#27272a] rounded-b-xl border-t border-white/10 mx-[-4px] sm:mx-[-8px] shadow-md flex items-center justify-center">
            {/* Opening Notch */}
            <div className="w-14 sm:w-20 h-1 bg-neutral-600 rounded-full" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* SMARTPHONE MOCKUP (OPSI B: DUAL DEVICE UNTUK RECIRCLE)   */}
        {/* ======================================================== */}
        {isDualDevice && activeMobileSlide && (
          <div className="w-52 sm:w-60 shrink-0 lg:mt-2">
            <div className="relative rounded-[36px] sm:rounded-[42px] bg-[#18181b] p-2.5 sm:p-3 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              {/* Dynamic Island / Speaker Pill */}
              <div className="w-full flex justify-center pb-2">
                <span className="h-3 w-14 rounded-full bg-black border border-white/10 inline-block shadow-inner" />
              </div>

              {/* Inner Smartphone Screen (9:19.5 exact match to 750x1624) */}
              <div className="relative aspect-[9/19.5] w-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-black shadow-inner select-none">
                <motion.img
                  key={activeMobileSlide.image}
                  src={activeMobileSlide.image}
                  alt={activeMobileSlide.title}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-full object-contain object-center bg-black"
                />

                {/* Floating Slide Counter Pill */}
                {mobileSlides.length > 1 && (
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15 shadow-md">
                    {currentMobileIndex + 1} / {mobileSlides.length}
                  </div>
                )}

                {/* Next/Prev Navigation Arrows on Phone Screen */}
                {mobileSlides.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevMobileSlide}
                      aria-label="Previous Mobile Screen"
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/75 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-md active:scale-95 text-xs z-10"
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      onClick={nextMobileSlide}
                      aria-label="Next Mobile Screen"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/75 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-md active:scale-95 text-xs z-10"
                    >
                      &rarr;
                    </button>
                  </>
                )}

                {/* Badge Mobile App */}
                <div className="absolute bottom-2.5 inset-x-2 text-center pointer-events-none">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-white/15 shadow-md">
                    Mobile App {mobileSlides.length > 1 ? `(${currentMobileIndex + 1}/${mobileSlides.length})` : ""}
                  </span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-full flex justify-center pt-2">
                <span className="h-1 w-16 rounded-full bg-neutral-600 inline-block" />
              </div>
            </div>

            {/* Mobile Title & Caption Underneath */}
            <div className="text-center pt-2.5 space-y-0.5">
              <p className="text-xs font-mono font-medium text-neutral-900 line-clamp-1">
                {activeMobileSlide.title}
              </p>
              <p className="text-[11px] font-mono text-neutral-500 line-clamp-2 leading-tight">
                {activeMobileSlide.caption}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* CAROUSEL CONTROLS & DYNAMIC SLIDE CAPTION                */}
      {/* ======================================================== */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-neutral-200">
        <div className="space-y-0.5 max-w-2xl">
          <h5 className="text-sm font-mono font-medium text-neutral-900">
            {activeSlide.title}
          </h5>
          <p className="text-xs sm:text-sm font-mono text-neutral-500 leading-relaxed">
            {activeSlide.caption}
          </p>
        </div>

        {/* Dots Pagination */}
        {slides.length > 1 && (
          <div className="flex items-center gap-2 shrink-0 self-center sm:self-auto">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-6 bg-black"
                    : "w-2 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
